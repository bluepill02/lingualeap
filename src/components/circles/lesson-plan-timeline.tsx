
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { CalendarCheck, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import type { LessonPlanWeek } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface LessonPlanTimelineProps {
  lessonPlan?: LessonPlanWeek[];
}

export function LessonPlanTimeline({ lessonPlan }: LessonPlanTimelineProps) {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  if (!lessonPlan || lessonPlan.length === 0) {
    return null;
  }
  
  const handleCheckboxChange = (weekIndex: number, taskIndex: number) => {
    // In a real app, this would update state and persist to a backend.
    console.log(`Toggled task ${taskIndex} for week ${weekIndex}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarCheck className="text-primary" />
          Lesson Plan Timeline
        </CardTitle>
        <CardDescription>
          Your week-by-week guide to mastering the subject.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {lessonPlan.map((week, weekIndex) => {
            const isLocked = week.status === 'locked';
            const isCompleted = week.status === 'completed';
            const weekProgress = (week.tasks.filter(t => t.completed).length / week.tasks.length) * 100;
            return (
              <Collapsible 
                key={week.week} 
                open={openWeek === week.week}
                onOpenChange={(isOpen) => setOpenWeek(isOpen ? week.week : null)}
                className="border-l-4 rounded-r-md transition-all"
                style={{borderColor: `hsl(var(--primary) / ${isCompleted ? '1' : (1 - (week.week / lessonPlan.length) * 0.7)})`}}
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between p-3 cursor-pointer bg-muted/50 hover:bg-muted/80 w-full">
                     <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold", 
                        isCompleted ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                      )}>
                        {isLocked ? <Lock className="w-4 h-4"/> : week.week}
                      </div>
                      <div>
                        <p className="font-semibold">{week.topic}</p>
                        <p className="text-xs text-muted-foreground">
                            {isCompleted ? "Completed" : isLocked ? "Locked" : "In Progress"}
                        </p>
                      </div>
                    </div>
                    {openWeek === week.week ? <ChevronUp className="h-4 w-4"/> : <ChevronDown className="h-4 w-4"/>}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 space-y-3">
                    {week.tasks.map((task, taskIndex) => (
                      <div key={task.id} className="flex items-center space-x-3">
                        <Checkbox 
                          id={`task-${week.week}-${task.id}`} 
                          checked={task.completed}
                          disabled={isLocked}
                          onCheckedChange={() => handleCheckboxChange(weekIndex, taskIndex)}
                        />
                        <label
                          htmlFor={`task-${week.week}-${task.id}`}
                          className={cn("text-sm font-medium leading-none", 
                            task.completed ? "text-muted-foreground line-through" : "",
                            isLocked ? "cursor-not-allowed opacity-50" : ""
                          )}
                        >
                          {task.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </CardContent>
    </Card>
  );
}
