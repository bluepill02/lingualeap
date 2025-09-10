
'use client';

import * as React from 'react';
import { Calendar as CalendarIcon, Users, User, Video, Flag, Clock, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { format, isSameDay, startOfDay } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { getEventsForUser, eventTypeConfig } from '@/services/calendar';
import type { CalendarEvent } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { Skeleton } from '@/components/ui/skeleton';

function CalendarSkeleton() {
    return (
        <Card>
            <CardContent className="p-0">
                 <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2 md:border-r p-6">
                        <Skeleton className="h-[300px] w-full" />
                    </div>
                    <div className="md:col-span-1 p-6 space-y-4">
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                 </div>
            </CardContent>
        </Card>
    )
}


export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null);
  const [events, setEvents] = React.useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            setCurrentUser(user);
            const fetchedEvents = await getEventsForUser(user.uid);
            setEvents(fetchedEvents);
        } else {
            setCurrentUser(null);
            setEvents([]);
        }
        setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const selectedDayEvents = date
    ? events.filter(event => isSameDay(event.date, date))
    : [];

  const handleActionClick = (event: CalendarEvent) => {
      setIsDialogOpen(false); // Close dialog before navigating
      switch(event.type) {
          case 'peer-study':
          case 'mentor-session':
              if (event.circleId) router.push(`/companion-circles/${event.circleId}`);
              break;
          case 'live-class':
              router.push('/live-classes');
              break;
          case 'deadline':
              router.push('/peer-teaching');
              break;
          default:
              break;
      }
  }
  
  if (isLoading) {
    return <CalendarSkeleton />
  }

  return (
    <div className="container mx-auto space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Shared Calendar</h1>
        <p className="text-muted-foreground">
          Track all your peer study sessions, mentor meetings, and live classes.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 md:border-r">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-3"
                    components={{
                        DayContent: ({ date: dayDate, ...props }) => {
                            const dayEvents = events.filter(event => isSameDay(event.date, dayDate));
                            const dayNumber = format(dayDate, 'd');

                            if (dayEvents.length > 0) {
                                return (
                                    <div className="relative h-full w-full flex items-center justify-center">
                                       <span>{dayNumber}</span>
                                        <div className="absolute bottom-1 flex space-x-1">
                                            {dayEvents.slice(0, 3).map(event => (
                                                <div key={event.id} className={cn("h-1.5 w-1.5 rounded-full", eventTypeConfig[event.type].color)}></div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            return <div {...props.dayProps}>{dayNumber}</div>;
                        }
                    }}
                 />
            </div>
            <div className="md:col-span-1 p-6">
                <h3 className="text-lg font-semibold mb-4">
                    Events for {date ? format(date, 'PPP') : 'today'}
                </h3>
                 <div className="space-y-2">
                    {selectedDayEvents.length > 0 ? (
                        selectedDayEvents.map(event => {
                            const config = eventTypeConfig[event.type];
                            const Icon = config.icon;
                            return (
                                <Dialog key={event.id} onOpenChange={setIsDialogOpen}>
                                  <DialogTrigger asChild>
                                    <button className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors">
                                      <div className="flex items-start gap-4">
                                          <div className={cn("mt-1 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0", config.color)}>
                                              <Icon className="w-4 h-4" />
                                          </div>
                                          <div>
                                              <p className="font-semibold">{event.title}</p>
                                              <p className="text-sm text-muted-foreground">
                                                {event.group ? `${config.label} • ${event.group}` : config.label}
                                              </p>
                                          </div>
                                      </div>
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle className="flex items-center gap-3">
                                         <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0", config.color)}>
                                            <Icon className="w-4 h-4" />
                                          </div>
                                        {event.title}
                                      </DialogTitle>
                                      <DialogDescription>
                                        {event.group ? `${config.label} • ${event.group}` : config.label}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <p className="text-muted-foreground">
                                        This is a placeholder description for the event. More details about the session, including agenda and preparation materials, would appear here.
                                      </p>
                                      <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-muted-foreground"/>
                                        <span>{format(new Date(event.date), 'eeee, MMMM d, yyyy • p')}</span>
                                      </div>
                                      <Button className="w-full" onClick={() => handleActionClick(event)}>
                                        <Icon className="mr-2 h-4 w-4" />
                                        {config.action}
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                            )
                        })
                    ) : (
                        <p className="text-muted-foreground p-4 text-center">No events scheduled for this day.</p>
                    )}
                 </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
