

'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, Trophy, Brain, Info, Loader2, Dna, Leaf, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import type { NeetModule } from '@/lib/types';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNeetChapterProgress } from '@/hooks/use-neet-chapter-progress';
import { mockUser } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { PracticeSectionCard } from '@/components/exam/neet-chapter-components';
import { BiologyLearnCard } from '@/components/exam/neet-biology-components';

function ChapterContent({ content }: { content: NeetModule }) {
  const { title } = content;
  const totalSections = 3; // Simplified for biology: Learn, Practice, Summary

  const { completedSections, toggleSection, isLoading } = useNeetChapterProgress(mockUser.id, content.id);
  const { toast } = useToast();

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="ml-2">Loading your progress...</p>
        </div>
    )
  }
  
  const handleCompleteSection = (section: string) => {
    toggleSection(section);
  }

  const handleClaimXp = () => {
    toast({
        title: "Achievement Unlocked! ✨",
        description: "Congratulations! You've earned 150 XP for completing this chapter.",
    });
  }

  const progress = (completedSections.length / totalSections) * 100;
  
  const getIcon = () => {
    if (title.includes('Plant')) return <Leaf className="w-6 h-6" />;
    if (title.includes('Animal')) return <Bug className="w-6 h-6" />;
    return <Dna className="w-6 h-6" />;
  }

  return (
    <div className="container mx-auto space-y-6">
      <header className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <Link href="/exam-prep/neet/biology">
                <Button variant="ghost" size="icon" aria-label="Back to NEET Biology chapters">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
            </Link>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-teal-500/20 text-teal-400">
                    {getIcon()}
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-headline">{title}</h1>
                    <p className="text-muted-foreground">Biology</p>
                </div>
            </div>
        </div>
      </header>

      <Card>
        <CardContent className="p-4">
            <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-muted-foreground font-semibold">Study Progress</span>
                <span className="font-bold text-primary">{completedSections.length}/{totalSections} sections completed</span>
            </div>
            <Progress value={progress} className="h-2 [&>div]:bg-primary" />
        </CardContent>
      </Card>

      <Tabs defaultValue="learn" className="w-full">
        <div className="flex justify-center">
          <ScrollArea className="w-full pb-2 md:w-auto">
            <TabsList className="grid grid-cols-3 h-auto md:h-10 md:grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="learn">Learn {completedSections.includes('learn') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
                <TabsTrigger value="practice">Practice {completedSections.includes('practice') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
                <TabsTrigger value="summary">Summary {completedSections.includes('summary') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            </TabsList>
          </ScrollArea>
        </div>
        <TabsContent value="learn" className="mt-6 space-y-6">
             <BiologyLearnCard content={content} />
            <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('learn')}>
                     {completedSections.includes('learn') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="practice" className="mt-6 space-y-6">
            <PracticeSectionCard module={content} />
             <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('practice')}>
                    {completedSections.includes('practice') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="summary" className="mt-6 space-y-6">
            <Card>
                <CardHeader><CardTitle>Chapter Summary</CardTitle></CardHeader>
                <CardContent className="card-padding-lg">
                    <ul className="list-disc list-inside space-y-2">
                        {content.keyTakeaways?.map((takeaway, index) => (
                            <li key={index}>{takeaway}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
             <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('summary')}>
                    {completedSections.includes('summary') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
      </Tabs>
      
       <Card className="mt-8">
        <CardHeader className="text-center">
            <Trophy className="h-10 w-10 mx-auto text-yellow-400" />
            <CardTitle>Finish Line</CardTitle>
            <CardDescription>Complete all sections to unlock your XP!</CardDescription>
        </CardHeader>
        <CardContent className="card-padding-lg text-center">
            <Button size="lg" disabled={completedSections.length < totalSections} onClick={handleClaimXp}>Complete Chapter & Claim 150 XP</Button>
        </CardContent>
       </Card>
    </div>
  );
}


interface NeetChapterClientPageProps {
    content: NeetModule;
}

export default function NeetChapterClientPage({ content }: NeetChapterClientPageProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <>{isClient ? <ChapterContent content={content} /> : <div>Loading...</div>}</>
}
