
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock, Video, User, Zap, Loader2, Check } from 'lucide-react';
import { getLiveClasses } from '@/services/live-classes';
import type { LiveClass } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

function LiveClassSkeleton() {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-1" />
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-full" />
            </CardFooter>
        </Card>
    );
}

export default function LiveClassesPage() {
    const [allClasses, setAllClasses] = useState<LiveClass[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [registeredClasses, setRegisteredClasses] = useState<Set<string>>(new Set());
    const { toast } = useToast();

    useEffect(() => {
        async function fetchClasses() {
            setIsLoading(true);
            try {
                const classes = await getLiveClasses();
                setAllClasses(classes);
            } catch (error) {
                console.error("Failed to fetch live classes:", error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Could not load live classes. Please try again later.',
                });
            } finally {
                setIsLoading(false);
            }
        }
        fetchClasses();
    }, [toast]);

    const handleRegister = (classId: string) => {
        setRegisteredClasses(prev => new Set(prev).add(classId));
        toast({
            title: 'Registration Confirmed!',
            description: "You've been registered for the class.",
        });
    };

    const handleJoin = (topic: string) => {
        toast({
            title: `Joining: ${topic}`,
            description: 'In a real application, this would open a video call.',
        });
    };
    
    const now = new Date();
    const liveNowClasses = allClasses.filter(c => new Date(c.startTime) <= now && new Date(c.endTime) > now);
    const upcomingClasses = allClasses.filter(c => new Date(c.startTime) > now);

    if (isLoading) {
        return (
             <div className="container mx-auto space-y-8">
                 <div>
                    <h1 className="text-3xl font-bold font-headline">Live Classes</h1>
                    <p className="text-muted-foreground">
                        Join live sessions with expert tutors for interactive learning.
                    </p>
                </div>
                <div className="space-y-4">
                     <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
                        <Skeleton className="h-8 w-8" />
                        <Skeleton className="h-8 w-48" />
                    </h2>
                     <div className="responsive-card-grid">
                        <LiveClassSkeleton />
                     </div>
                </div>
                 <div className="space-y-4">
                     <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
                        <Skeleton className="h-8 w-64" />
                    </h2>
                     <div className="responsive-card-grid">
                        <LiveClassSkeleton />
                        <LiveClassSkeleton />
                        <LiveClassSkeleton />
                     </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Live Classes</h1>
                <p className="text-muted-foreground">
                    Join live sessions with expert tutors for interactive learning.
                </p>
            </div>

            {liveNowClasses.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
                        <Zap className="text-primary animate-pulse" /> Live Now
                    </h2>
                    <div className="responsive-card-grid">
                        {liveNowClasses.map(cls => (
                            <Card key={cls.id} className="border-primary ring-2 ring-primary flex flex-col">
                                <CardHeader>
                                    <Badge variant="destructive" className="absolute top-4 right-4">LIVE</Badge>
                                    <CardTitle>{cls.topic}</CardTitle>
                                    <CardDescription>With {cls.instructor}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>Ends at {format(new Date(cls.endTime), 'p')}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={cls.instructorAvatar} alt={cls.instructor} />
                                            <AvatarFallback>{cls.instructor.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <p className="text-sm">{cls.description}</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" size="lg" onClick={() => handleJoin(cls.topic)}>
                                        <Video className="mr-2" /> Join Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <Separator className="my-8" />
                </div>
            )}

            <div className="space-y-4">
                <h2 className="text-2xl font-bold font-headline">Upcoming Classes</h2>
                 {upcomingClasses.length > 0 ? (
                    <div className="responsive-card-grid">
                        {upcomingClasses.map(cls => {
                            const isRegistered = registeredClasses.has(cls.id);
                            return (
                                <Card key={cls.id} className="flex flex-col bg-card/50">
                                    <CardHeader>
                                        <CardTitle>{cls.topic}</CardTitle>
                                        <CardDescription>With {cls.instructor}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4" />
                                            <span>{format(new Date(cls.startTime), 'MMM d, p')}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={cls.instructorAvatar} alt={cls.instructor} />
                                                <AvatarFallback>{cls.instructor.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className="text-sm">{cls.description}</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button 
                                            variant={isRegistered ? "success" : "secondary"} 
                                            className="w-full" 
                                            disabled={isRegistered}
                                            onClick={() => handleRegister(cls.id)}
                                        >
                                            {isRegistered ? <Check className="mr-2" /> : <User className="mr-2" />}
                                            {isRegistered ? 'Registered' : 'Register'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="p-12 text-center text-muted-foreground">
                            <p>No upcoming classes are scheduled at this time. Please check back later!</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
