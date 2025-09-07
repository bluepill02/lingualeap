
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { User, LessonPlanWeek } from '@/lib/types';
import { getChapterProgressForUsers } from '@/services/neet-progress-service';
import { Loader2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressHeatmapProps {
  members: Pick<User, 'id' | 'name'>[];
  chapters: LessonPlanWeek[];
}

const TOTAL_SECTIONS_PER_CHAPTER = 6; // As defined in neet-chapter-components

export function ProgressHeatmap({ members, chapters }: ProgressHeatmapProps) {
  const [progressData, setProgressData] = useState<Record<string, Record<string, string[]>>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const memberIds = members.map(m => m.id);
    if (memberIds.length > 0) {
      setIsLoading(true);
      getChapterProgressForUsers(memberIds)
        .then(data => {
          setProgressData(data);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    } else {
        setIsLoading(false);
    }
  }, [members]);
  
  if (isLoading) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Group Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-48">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="ml-2">Loading member progress...</p>
            </CardContent>
        </Card>
    );
  }

  const getProgressStatus = (userId: string, chapterTopic: string) => {
    // This logic assumes chapter topics are unique identifiers for now.
    // A real implementation would use a stable chapterId.
    const chapterId = chapterTopic.toLowerCase().replace(/\s+/g, '-');
    const userProgress = progressData[userId];
    if (!userProgress || !userProgress[chapterId]) return { percentage: 0, status: 'not-started' };
    
    const completedSectionsCount = userProgress[chapterId].length;
    const percentage = Math.round((completedSectionsCount / TOTAL_SECTIONS_PER_CHAPTER) * 100);

    let status: 'completed' | 'in-progress' | 'not-started' = 'not-started';
    if (percentage === 100) {
      status = 'completed';
    } else if (percentage > 0) {
      status = 'in-progress';
    }

    return { percentage, status };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Users className="text-primary"/>Group Progress Heatmap</CardTitle>
        <CardDescription>At-a-glance view of member progress through the lesson plan.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                {chapters.map(chapter => (
                  <TableHead key={chapter.week} className="text-center">Week {chapter.week}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map(member => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  {chapters.map(chapter => {
                    const { percentage, status } = getProgressStatus(member.id, chapter.topic);
                    return (
                      <TableCell key={chapter.week} className="text-center p-1">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={cn("w-full h-8 rounded-md flex items-center justify-center", {
                                        "bg-green-500/80": status === 'completed',
                                        "bg-yellow-500/70": status === 'in-progress',
                                        "bg-muted": status === 'not-started',
                                    })}>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{chapter.topic}</p>
                                    <p>{percentage}% complete</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
