
'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, Trophy, Brain, Info, Loader2, Atom, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import type { NeetModule } from '@/lib/types';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ConceptNotesCard, WorkedExamplesCard, KeyFormulasCard, PracticeSectionCard } from '@/components/exam/neet-chapter-components';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNeetChapterProgress } from '@/hooks/use-neet-chapter-progress';
import { mockUser } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { SyllabusMappingCard } from '@/components/exam/exam-components';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { BilingualText } from '@/components/exam/bilingual-text';

function ChapterContent({ content }: { content: NeetModule }) {
  const { title, learningObjectives, prerequisites, syllabusMapping, workedExamples, conceptOverview, tamilConnection, culturalContext, conceptNotes, keyFormulasAndDiagrams, mcqs, assertionReasons, matchTheColumns, keyTakeaways, mnemonics, neetTips, nextChapter, studentTip, peerDiscussion } = content;
  const totalSections = 6;

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

  return (
    <div className="container mx-auto space-y-6">
      <header className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <Link href="/exam-prep/neet/physics">
                <Button variant="ghost" size="icon" aria-label="Back to NEET Physics chapters">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
            </Link>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-400">
                    <Atom className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-headline">{title}</h1>
                    <p className="text-muted-foreground">Physics</p>
                </div>
            </div>
        </div>
      </header>

      <Card>
        <CardContent className="card-padding-md">
            <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-muted-foreground font-semibold">Study Progress</span>
                <span className="font-bold text-primary">{completedSections.length}/{totalSections} sections completed</span>
            </div>
            <Progress value={progress} className="h-2 [&>div]:bg-primary" />
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex justify-center">
          <ScrollArea className="w-full pb-2 md:w-auto">
            <TabsList className="grid grid-cols-3 h-auto md:h-10 md:grid-cols-6 w-full md:w-auto">
            <TabsTrigger value="overview">Overview {completedSections.includes('overview') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            <TabsTrigger value="learn">Learn {completedSections.includes('learn') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            <TabsTrigger value="examples">Examples {completedSections.includes('examples') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            <TabsTrigger value="formulas">Formulas {completedSections.includes('formulas') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            <TabsTrigger value="practice">Practice {completedSections.includes('practice') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            <TabsTrigger value="summary">Summary {completedSections.includes('summary') && <CheckCircle className="ml-2 h-4 w-4 text-success"/>}</TabsTrigger>
            </TabsList>
          </ScrollArea>
        </div>
        <TabsContent value="overview" className="mt-6 space-y-6">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="text-primary"/>
                        Prerequisites
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-padding-lg">
                    <ul className="list-disc list-inside space-y-2">
                       {prerequisites.map((req, index) => (
                           <li key={index}>{req}</li>
                       ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Concept Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 prose dark:prose-invert max-w-none card-padding-lg">
                    {conceptOverview && <MarkdownRenderer>{conceptOverview}</MarkdownRenderer>}
                    {tamilConnection && (
                        <Card className="bg-yellow-500/10 border-yellow-500/30">
                        <CardHeader className="flex-row items-center gap-3 space-y-0">
                            <Lightbulb className="h-5 w-5 text-yellow-400" />
                            <CardTitle className="text-yellow-200">Tamil Connection</CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg text-yellow-50 prose-sm">
                            <MarkdownRenderer>{tamilConnection}</MarkdownRenderer>
                        </CardContent>
                        </Card>
                    )}
                    {culturalContext && (
                        <Card className="bg-green-500/10 border-green-500/30">
                        <CardHeader className="flex-row items-center gap-3 space-y-0">
                            <BookOpen className="h-5 w-5 text-green-400" />
                            <CardTitle className="text-green-200">Cultural Context</CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg text-green-50 prose-sm">
                            <MarkdownRenderer>{culturalContext}</MarkdownRenderer>
                        </CardContent>
                        </Card>
                    )}
                </CardContent>
            </Card>

            <SyllabusMappingCard mapping={syllabusMapping} />
            
            <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('overview')} >
                    {completedSections.includes('overview') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>

        </TabsContent>
        <TabsContent value="learn" className="mt-6 space-y-6">
            <ConceptNotesCard content={conceptNotes || []} />
            <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('learn')}>
                     {completedSections.includes('learn') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="examples" className="mt-6 space-y-6">
            <WorkedExamplesCard examples={workedExamples} />
             <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('examples')}>
                    {completedSections.includes('examples') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="formulas" className="mt-6 space-y-6">
            <KeyFormulasCard content={keyFormulasAndDiagrams} />
             <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('formulas')}>
                    {completedSections.includes('formulas') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="practice" className="mt-6 space-y-6">
            <PracticeSectionCard mcqs={mcqs} assertionReasons={assertionReasons} matchTheColumns={matchTheColumns} />
             <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('practice')}>
                    {completedSections.includes('practice') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>
        </TabsContent>
        <TabsContent value="summary" className="mt-6 space-y-6">
            {mnemonics && mnemonics.length > 0 && <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2"><Brain /> Memory Mnemonic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center card-padding-lg">
                    {mnemonics.map((mnemonic, index) => (
                         <div key={index} className="w-full text-center card-padding-md rounded-md bg-primary/10 border border-primary/20">
                           <BilingualText english={mnemonic.text} tamil={mnemonic.tamil} />
                         </div>
                    ))}
                </CardContent>
            </Card>}
             {keyTakeaways && keyTakeaways.length > 0 && <Card>
                <CardHeader>
                    <CardTitle>Chapter Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 card-padding-lg">
                    {keyTakeaways.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500 mt-1"/>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground"><MarkdownRenderer>{point || ''}</MarkdownRenderer></div>
                        </div>
                    ))}
                </CardContent>
            </Card>}
             {neetTips && (nextChapter || studentTip || peerDiscussion) && <Card>
                <CardHeader>
                    <CardTitle>NEET Tips & Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 card-padding-lg">
                    {neetTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-yellow-500 mt-1"/>
                            <BilingualText english={tip.text} tamil={tip.tamil} />
                        </div>
                    ))}
                    {(nextChapter || studentTip || peerDiscussion) && 
                    <Alert className="bg-primary/10 border-primary/20">
                         <Info className="h-4 w-4" />
                         {nextChapter && <AlertTitle><BilingualText english={`Next Module: ${nextChapter.title}`} tamil={nextChapter.titleTamil} /></AlertTitle>}
                         <AlertDescription className="mt-2 space-y-2">
                            {studentTip && <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <strong>Student Tip:</strong> 
                                <BilingualText english={studentTip.english} tamil={studentTip.tamil} />
                            </div>}
                            {peerDiscussion && <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <strong>Peer Discussion:</strong> 
                                 <BilingualText english={peerDiscussion.english} tamil={peerDiscussion.tamil} />
                           </div>}
                         </AlertDescription>
                    </Alert>
                    }
                </CardContent>
            </Card>}

            <Card className="bg-accent/10 border-accent">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent"><Megaphone />Peer-Teaching Mission</CardTitle>
                </CardHeader>
                <CardContent className="card-padding-lg">
                    <div className="prose dark:prose-invert max-w-none text-muted-foreground mb-4"><MarkdownRenderer>{"You've mastered the concepts, now solidify your knowledge by teaching it to others. This will test your understanding and help your peers."}</MarkdownRenderer></div>
                    <Link href="/peer-teaching">
                        <Button variant="outline" className="w-full">
                            Start Your First Mission
                        </Button>
                    </Link>
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
        <CardContent className="card-padding-lg text-center">
            <Button size="lg" disabled={completedSections.length < totalSections} onClick={handleClaimXp}>Complete Chapter & Claim XP</Button>
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

  return <>{isClient ? <ChapterContent content={content} /> : null}</>
}
