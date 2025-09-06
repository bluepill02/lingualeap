
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock, Video, User, Zap } from 'lucide-react';
import { liveClasses } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

export default function LiveClassesPage() {
    const now = new Date();
    const liveNowClasses = liveClasses.filter(c => new Date(c.startTime) <= now && new Date(c.endTime) > now);
    const upcomingClasses = liveClasses.filter(c => new Date(c.startTime) > now);

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
                                    <Button className="w-full" size="lg">
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
                        {upcomingClasses.map(cls => (
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
                                    <Button variant="secondary" className="w-full">
                                        <User className="mr-2" /> Register
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">No upcoming classes scheduled. Please check back later.</p>
                )}
            </div>
        </div>
    );
}
