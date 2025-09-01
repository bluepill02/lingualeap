
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
import { mockUser, companionCircle } from '@/lib/data';
import {
  Trophy,
  BrainCircuit,
  Target,
  Clock,
  Settings,
  LogOut,
  Lightbulb,
  Sparkles,
  Play,
  TrendingUp,
  CalendarDays,
  Users,
  Crown
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getWeek } from 'date-fns';

const stats = [
  {
    icon: Trophy,
    value: mockUser.streak,
    label: 'Day Streak',
    color: 'text-accent',
  },
  {
    icon: BrainCircuit,
    value: 0,
    label: 'Words Mastered',
    color: 'text-secondary',
  },
  {
    icon: Target,
    value: 'A1',
    label: 'CEFR Level',
    color: 'text-green-400',
  },
  {
    icon: Clock,
    value: 0,
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
          Personalized recommendations based on your progress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-center mb-4">
          <div>
            <p className="text-muted-foreground text-sm">Focus Areas</p>
            <p className="font-bold">0 words</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Suggested Time</p>
            <p className="font-bold">5 min</p>
          </div>
        </div>
        <div className="bg-primary/10 text-primary-foreground p-3 rounded-lg flex items-center gap-3 text-sm mb-4">
          <Lightbulb className="h-5 w-5 text-accent" />
          <span>You've learned 0 words so far!</span>
        </div>
        <Link href="/language-selection">
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
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Lessons</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Flashcards</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Minutes</p>
          </div>
        </div>
        <Button className="w-full mt-6" size="lg">
          Start New Lesson
        </Button>
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
            <span className="text-sm text-muted-foreground">0 / 4 mastered</span>
          </div>
          <Progress value={25} className="h-2" />
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
                  {item.words} words
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">This Week's Activity</h3>
          <div className="flex justify-between items-end h-20 px-2">
            {weekActivity.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className="w-4 bg-primary rounded-t-sm"
                  style={{ height: `${item.activity * 100}%` }}
                ></div>
                <span className="text-xs text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="recently" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="joined">
                    <CalendarDays className="mr-2 h-4 w-4"/>
                    Joined
                </TabsTrigger>
                <TabsTrigger value="recently">Recently</TabsTrigger>
                <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            </TabsList>
            <TabsContent value="recently">
                <div className="text-center p-4">
                     <p className="text-2xl font-bold">75%</p>
                     <p className="text-sm text-muted-foreground">Recent Accuracy</p>
                </div>
            </TabsContent>
        </Tabs>

      </CardContent>
    </Card>
  );
}

function CompanionCircleCard() {
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
                <div className="flex -space-x-2 overflow-hidden">
                    {companionCircle.members.map((member) => (
                        <Avatar key={member.id} className="inline-block h-10 w-10 rounded-full ring-2 ring-background">
                            <AvatarImage src={member.avatarUrl} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <div className="mt-4 space-y-2">
                    {companionCircle.members.map((member) => (
                        <div key={member.id} className="flex items-center justify-between text-sm">
                            <span className="font-medium">{member.name}</span>
                            {member.id === leader.id && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Crown className="h-3 w-3 text-yellow-500" />
                                    Leader
                                </Badge>
                            )}
                        </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                    View Circle
                </Button>
            </CardContent>
        </Card>
    )
}

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Good afternoon, {mockUser.name}!
          </h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
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
