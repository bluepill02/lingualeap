
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUser, companionCircle, flashcards, lessons } from '@/lib/data';
import {
  Trophy,
  BrainCircuit,
  Target,
  Clock,
  Settings,
  Lightbulb,
  Sparkles,
  Play,
  TrendingUp,
  CalendarDays,
  Users,
  Crown,
  Loader2,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getWeek, format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [greeting, setGreeting] = useState('');
  const [joinedDate, setJoinedDate] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<string | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
        setGreeting('Good morning');
    } else if (hour < 18) {
        setGreeting('Good afternoon');
    } else {
        setGreeting('Good evening');
    }
    
    // Avoid hydration mismatch by setting date on client
    setJoinedDate(format(new Date(), 'MMMM d, yyyy'));

    // Simulate fetching accuracy data
    const timer = setTimeout(() => {
      setAccuracy('Coming soon');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const masteredWords = flashcards.filter(fc => fc.stability > 10).length;
  const dueToday = flashcards.filter(fc => new Date(fc.nextDue) <= new Date()).length;
  const totalFlashcards = flashcards.length;
  const progressValue = totalFlashcards > 0 ? (masteredWords / totalFlashcards) * 100 : 0;
  
  const proficiencyMap: { [key: string]: string } = {
    'Beginner': 'A1',
    'Intermediate': 'A2',
    'Advanced': 'B1',
  };
  
  const cefrLevel = proficiencyMap[mockUser.proficiency] || 'A1';

  const stats = [
    {
      icon: Trophy,
      value: mockUser.streak,
      label: 'Day Streak',
      color: 'text-accent',
    },
    {
      icon: BrainCircuit,
      value: masteredWords,
      label: 'Words Mastered',
      color: 'text-secondary',
    },
    {
      icon: Target,
      value: cefrLevel,
      label: 'CEFR Level',
      color: 'text-green-400',
    },
    {
      icon: Clock,
      value: dueToday,
      label: 'Due Today',
      color: 'text-primary',
    },
  ];
  
  const cefrLevels = [
    { level: 'A1', words: 0 },
    { level: 'A2', words: 0 },
    { level: 'B1', words: 0 },
    { level: 'B2', words: 0 },
    { level: 'C1', words: 0 },
    { level: 'C2', words: 0 },
  ];

  const weekActivity = [
    { day: 'T', activity: 0.8 },
    { day: 'W', activity: 0.6 },
    { day: 'T', activity: 0.9 },
    { day: 'F', activity: 0.7 },
    { day: 'S', activity: 0.4 },
    { day: 'S', activity: 0.2 },
    { day: 'M', activity: 0.5 },
  ];

  function SmartStudyPlanCard() {
    return (
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="text-primary h-5 w-5" />
            Smart Study Plan
          </CardTitle>
          <CardDescription>
            Your AI-powered path to mastering {mockUser.language}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-center mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Focus Areas</p>
              <p className="font-bold">{dueToday} words</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Suggested Time</p>
              <p className="font-bold">5 min</p>
            </div>
          </div>
          <div className="bg-primary/10 text-primary-foreground p-3 rounded-lg flex items-center gap-3 text-sm mb-4">
            <Lightbulb className="h-5 w-5 text-accent" />
            <span>You've learned {masteredWords} words so far! Keep going to unlock personalized insights.</span>
          </div>
          <Link href="/flashcards">
            <Button className="w-full" size="lg">
              Start Smart Session
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  function ContinueLearningCard() {
    return (
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="h-5 w-5 text-primary" />
            Continue Learning
          </CardTitle>
          <CardDescription>Keep up the great work!</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-around">
            <div>
              <p className="text-2xl font-bold">{lessons.length}</p>
              <p className="text-sm text-muted-foreground">Lessons</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{flashcards.length}</p>
              <p className="text-sm text-muted-foreground">Flashcards</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Minutes</p>
            </div>
          </div>
          <Link href="/lessons">
              <Button className="w-full mt-6" size="lg">
              Start New Lesson
              </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  function LearningAnalyticsCard() {
    return (
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Learning Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Vocabulary Progress</h3>
              <span className="text-sm text-muted-foreground">{masteredWords} / {totalFlashcards} mastered</span>
            </div>
            <Progress value={progressValue} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
                <span>Mastered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent"></span>
                <span>Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span>New</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">CEFR Level Progress</h3>
            <div className="grid grid-cols-3 gap-2">
              {cefrLevels.map((item) => (
                <div
                  key={item.level}
                  className="bg-primary/10 rounded-md p-2 text-center"
                >
                  <p className="font-bold text-primary">{item.level}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.words}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">This Week's Activity</h3>
            <div className="grid grid-cols-7 gap-2 items-end h-20 px-2">
              {weekActivity.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="w-4 bg-primary rounded-t-sm"
                    style={{ height: `${item.activity * 100}%` }}
                  ></div>
                  <span className="text-xs text-muted-foreground">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Tabs defaultValue="joined" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="joined">
                      <CalendarDays className="mr-2 h-4 w-4"/>
                      Joined
                  </TabsTrigger>
                  <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
              </TabsList>
              <TabsContent value="joined">
                  <div className="text-center p-4">
                       {joinedDate ? (
                          <>
                              <p className="text-2xl font-bold">{joinedDate}</p>
                              <p className="text-sm text-muted-foreground">Date Joined</p>
                          </>
                       ) : (
                          <Loader2 className="animate-spin" />
                       )}
                  </div>
              </TabsContent>
              <TabsContent value="accuracy">
                  <div className="text-center p-4">
                      {accuracy ? (
                          <>
                              <p className="text-2xl font-bold">{accuracy}</p>
                              <p className="text-sm text-muted-foreground">Recent Accuracy</p>
                          </>
                      ) : (
                          <Loader2 className="animate-spin" />
                      )}
                  </div>
              </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  }

  function CompanionCircleCard() {
      if (!companionCircle || !companionCircle.members || companionCircle.members.length === 0) {
          return null;
      }
      const currentWeek = getWeek(new Date());
      const leaderIndex = currentWeek % companionCircle.members.length;
      const leader = companionCircle.members[leaderIndex];

      return (
          <Card className="bg-card/50">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5 text-primary" />
                      Companion Circle
                  </CardTitle>
                  <CardDescription>
                      Learn and grow with your peers. This week's leader is {leader.name}.
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="mt-4 space-y-4">
                      {companionCircle.members.map((member) => (
                          <div key={member.id} className="flex items-center justify-between text-sm">
                             <div className="flex items-center gap-3">
                                  <Avatar className="h-10 w-10">
                                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium">{member.name}</span>
                              </div>
                              {member.id === leader.id && (
                                  <Badge variant="secondary" className="flex items-center gap-1">
                                      <Crown className="h-3 w-3 text-yellow-500" />
                                      Leader
                                  </Badge>
                              )}
                          </div>
                      ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                      View Circle
                  </Button>
              </CardContent>
          </Card>
      )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {greeting ? `${greeting}, ${mockUser.name}!` : `Welcome, ${mockUser.name}!`}
          </h1>
          <div className="flex gap-2">
             <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <SmartStudyPlanCard />
        <CompanionCircleCard />
      </div>

      <div className="space-y-6">
        <ContinueLearningCard />
        <LearningAnalyticsCard />
      </div>
    </div>
  );
}
