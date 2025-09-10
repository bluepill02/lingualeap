
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
  Star,
  ClipboardCheck,
  Lock,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getWeek, format, formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { LessonCarousel } from '@/components/dashboard/lesson-carousel';
import { getDashboardData } from '@/services/dashboard';
import type { DashboardData } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/context/user-context';
import { cn } from '@/lib/utils';

function DashboardSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                 <div>
                    <Skeleton className="h-8 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <Card key={i}>
                            <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-6 w-1/2" />
                                <Skeleton className="h-4 w-3/4" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-3/4" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-10 w-48" />
                    </CardContent>
                </Card>
                <div>
                     <Skeleton className="h-6 w-1/4 mb-4" />
                     <Skeleton className="h-48 w-full" />
                </div>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                         <Skeleton className="h-6 w-1/2" />
                         <Skeleton className="h-4 w-3/4 mt-2" />
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                         <Skeleton className="h-12 w-full" />
                         <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader>
                         <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-20 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function DashboardPage() {
  const { user, isLoading } = useUser();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function loadData() {
        if (user) {
            setIsDataLoading(true);
            try {
                const data = await getDashboardData(user.id);
                setDashboardData(data);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setIsDataLoading(false);
            }
        } else if (!isLoading) {
            // User is loaded and is null
            setDashboardData(null);
            setIsDataLoading(false);
        }
    }
    loadData();

    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

  }, [user, isLoading]);

  if (isLoading || isDataLoading) {
    return <DashboardSkeleton />;
  }

  if (!user || !dashboardData) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome to LinguaLeap!</h2>
        <p className="text-muted-foreground">Please sign in to view your dashboard.</p>
        <Link href="/auth">
          <Button className="mt-4">Sign In</Button>
        </Link>
      </div>
    );
  }

  const { userData, flashcardStats, lessons, companionCircle, myCirclesCount } = dashboardData;

  const proficiencyMap: { [key: string]: string } = {
    'Beginner': 'A1',
    'Intermediate': 'A2',
    'Advanced': 'B1',
  };
  const cefrLevel = proficiencyMap[userData.proficiency] || 'A1';

  const stats = [
    { icon: Trophy, value: userData.streak, label: 'Day Streak', color: 'text-yellow-500', href: '/flashcards' },
    { icon: BrainCircuit, value: flashcardStats.mastered, label: 'Words Mastered', color: 'text-green-500', href: '/flashcards' },
    { icon: Clock, value: flashcardStats.dueToday, label: 'Due Today', color: 'text-primary', href: '/flashcards' },
    { icon: Users, value: myCirclesCount, label: 'My Circles', color: 'text-blue-400', href: '/companion-circles' },
  ];

  const levelProgress = userData.xp > 0 ? (userData.xp % 1000 / 1000) * 100 : 0;
  const currentLevel = Math.floor(userData.xp / 1000);

  function SmartStudyPlanCard() {
    return (
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="text-primary h-5 w-5" />
            Smart Study Plan
          </CardTitle>
          <CardDescription>
            Your AI-powered path to mastering {userData.language}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-center mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Focus Areas</p>
              <p className="font-bold">{flashcardStats.dueToday} words</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Suggested Time</p>
              <p className="font-bold">5 min</p>
            </div>
          </div>
          <div className="bg-primary/10 text-primary p-3 rounded-lg flex items-center gap-3 text-sm mb-4">
            <Lightbulb className="h-5 w-5 text-accent" />
            <span>You've learned {flashcardStats.mastered} words so far! Keep going to unlock personalized insights.</span>
          </div>
          <Link href="/flashcards">
            <Button className="w-full" size="lg">
              Review Flashcards
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  function CompanionCircleCard() {
      if (!companionCircle) {
          return null;
      }
      const currentWeek = getWeek(new Date());
      const leaderIndex = companionCircle.members.length > 0 ? currentWeek % companionCircle.members.length : 0;
      const leader = companionCircle.members.length > 0 ? companionCircle.members[leaderIndex] : null;

      return (
          <Card className="bg-card/50">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5 text-primary" />
                      My Companion Circle
                  </CardTitle>
                  <CardDescription>
                     {companionCircle.name}
                  </CardDescription>
              </CardHeader>
              <CardContent>
                 {leader && (
                    <div className="text-sm text-muted-foreground mb-4">This week's leader is {leader.name}.</div>
                 )}
                  <div className="mt-4 space-y-4">
                      {companionCircle.members.slice(0, 5).map((member) => (
                          <div key={member.id} className="flex items-center justify-between text-sm">
                             <div className="flex items-center gap-3">
                                  <Avatar className="h-10 w-10">
                                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium">{member.name}</span>
                              </div>
                              {leader && member.id === leader.id && (
                                  <Badge variant="secondary" className="flex items-center gap-1 text-yellow-500 bg-yellow-500/10 border-yellow-500/20">
                                      <Crown className="h-3 w-3" />
                                      Leader
                                  </Badge>
                              )}
                          </div>
                      ))}
                  </div>
                    <Link href={`/companion-circles/${companionCircle.id}`}>
                        <Button variant="outline" className="w-full mt-6">
                           View Circle
                        </Button>
                  </Link>
              </CardContent>
          </Card>
      )
  }

  const vocabularyProgress = flashcardStats.total > 0 ? (flashcardStats.mastered / flashcardStats.total) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div>
            <div className="flex justify-between items-start">
            <div>
                <h1 className="text-2xl font-bold">
                    {greeting}, {userData.name}!
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Level {currentLevel}</span>
                </div>
            </div>
            <div className="flex gap-2">
                <Link href="/settings">
                <Button variant="ghost" size="icon" aria-label="Go to settings page">
                    <Settings className="h-5 w-5" />
                </Button>
                </Link>
            </div>
            </div>
            <div className="mt-2">
                <Progress value={levelProgress} className="h-2" aria-label={`Experience progress: ${Math.round(levelProgress)}%`} />
                <p className="text-xs text-muted-foreground text-right mt-1">
                    {(userData.xp % 1000).toLocaleString()} / 1000 XP
                </p>
            </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Link href={stat.href} key={stat.label} className="group">
                <Card className="text-center h-full group-hover:bg-muted transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
        
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><ClipboardCheck/> Exam Prep Zone</CardTitle>
                <CardDescription>Access specialized modules and AI-generated study notes for competitive exams like NEET and TNPSC.</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="/exam-prep">
                    <Button>Explore Exam Modules</Button>
                </Link>
            </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-bold font-headline mb-4">Recommended Lessons</h2>
          <LessonCarousel lessons={lessons} />
        </div>

        <CompanionCircleCard />
      </div>

      <div className="space-y-6">
        <SmartStudyPlanCard />
        
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
                    <span className="text-sm text-muted-foreground">{flashcardStats.mastered} / {flashcardStats.total} mastered</span>
                    </div>
                    <Progress value={vocabularyProgress} className="h-2" aria-label={`Vocabulary progress: ${Math.round(vocabularyProgress)}%`} />
                </div>
                 <Tabs defaultValue="joined">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="joined">
                            <CalendarDays className="mr-2 h-4 w-4"/>
                            Joined
                        </TabsTrigger>
                        <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                    </TabsList>
                     <TabsContent value="joined">
                        <div className="text-center p-4">
                            <p className="text-2xl font-bold">{user.createdAt ? format(new Date(user.createdAt.seconds * 1000), 'MMMM d, yyyy') : 'N/A'}</p>
                            <p className="text-sm text-muted-foreground">Date Joined</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="accuracy">
                        <div className="text-center p-4">
                                <p className="text-2xl font-bold">Coming Soon</p>
                                <p className="text-sm text-muted-foreground">Recent Accuracy</p>
                        </div>
                    </TabsContent>
                 </Tabs>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

    