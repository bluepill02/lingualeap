
'use client';

import * as React from 'react';
import { Calendar as CalendarIcon, Users, User, Video, Flag } from 'lucide-react';
import { addDays, format, isSameDay } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { events } from '@/lib/calendar-data';
import type { CalendarEvent } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const eventTypeConfig = {
    'peer-study': {
        icon: Users,
        color: 'bg-green-500',
        label: 'Peer Study Group',
    },
    'mentor-session': {
        icon: User,
        color: 'bg-blue-500',
        label: 'Mentor Session',
    },
    'live-class': {
        icon: Video,
        color: 'bg-purple-500',
        label: 'Live Class',
    },
    'deadline': {
        icon: Flag,
        color: 'bg-red-500',
        label: 'Deadline',
    }
}

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const selectedDayEvents = date ? events.filter(event => isSameDay(event.date, date)) : [];

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
                        DayContent: ({ date }) => {
                            const dayEvents = events.filter(event => isSameDay(event.date, date));
                            return (
                                <div className="relative h-full w-full">
                                    <span className="relative">{format(date, 'd')}</span>
                                    {dayEvents.length > 0 && (
                                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-1">
                                            {dayEvents.slice(0, 3).map(event => (
                                                <div key={event.id} className={cn("h-1 w-1 rounded-full", eventTypeConfig[event.type].color)}></div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    }}
                 />
            </div>
            <div className="md:col-span-1 p-6">
                <h3 className="text-lg font-semibold mb-4">
                    Events for {date ? format(date, 'PPP') : 'today'}
                </h3>
                 <div className="space-y-4">
                    {selectedDayEvents.length > 0 ? (
                        selectedDayEvents.map(event => {
                            const config = eventTypeConfig[event.type];
                            const Icon = config.icon;
                            return (
                                <div key={event.id} className="flex items-start gap-3">
                                    <div className={cn("mt-1 w-8 h-8 rounded-full flex items-center justify-center text-white", config.color)}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-sm text-muted-foreground">
                                           {event.group ? `${config.label} • ${event.group}` : config.label}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p className="text-muted-foreground">No events scheduled for this day.</p>
                    )}
                 </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
