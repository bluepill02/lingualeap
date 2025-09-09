

'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, Trophy, Brain, Info, Loader2, FlaskConical, Atom, TestTube, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import type { NeetModule } from '@/lib/types';
import { Alert, AlertTitle, AlertDescription as AlertDescriptionComponent } from '@/components/ui/alert';
import { ConceptNotesCard, WorkedExamplesCard, KeyFormulasCard, PracticeSectionCard } from '@/components/exam/neet-chapter-components';
import { useNeetChapterProgress } from '@/hooks/use-neet-chapter-progress';
import { mockUser } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { SyllabusMappingCard } from '@/components/exam/exam-components';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { BilingualText } from '@/components/exam/bilingual-text';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type TabName = 'overview' | 'learn' | 'examples' | 'formulas' | 'practice' | 'summary';

const TABS: { id: TabName; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'learn', label: 'Learn', icon: FlaskConical },
  { id: 'examples', label: 'Examples', icon: TestTube },
  { id: 'formulas', label: 'Formulas', icon: Atom },
  { id: 'practice', label: 'Practice', icon: Brain },
  { id: 'summary', label: 'Summary', icon: Trophy },
];

function ChapterContent({ content }: { content: NeetModule }) {
  const { title, learningObjectives, prerequisites, syllabusMapping, workedExamples, conceptOverview, tamilConnection, culturalContext, conceptNotes, keyFormulasAndDiagrams, mcqs, assertionReasons, matchTheColumns, keyTakeaways, mnemonics, neetTips, nextChapter, studentTip, peerDiscussion } = content;
  const totalSections = TABS.length;

  const { completedSections, toggleSection, isLoading } = useNeetChapterProgress(mockUser.id, "chemistry", content.id);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<TabName>('overview');

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="ml-2">Loading your progress...</p>
        </div>
    )
  }
  
  const handleCompleteSection = (section: TabName) => {
    toggleSection(section);
    // Move to the next tab automatically
    const currentIndex = TABS.findIndex(tab => tab.id === section);
    if (currentIndex < TABS.length - 1) {
        setActiveTab(TABS[currentIndex + 1].id);
    }
  }

  const handleClaimXp = () => {
    toast({
        title: "Achievement Unlocked! ✨",
        description: "Congratulations! You've earned 150 XP for completing this chapter.",
    });
  }

  const progress = (completedSections.length / totalSections) * 100;
  
  const getIcon = () => {
    const lowerCaseTitle = title.toLowerCase();
    if (lowerCaseTitle.includes('atomic') || lowerCaseTitle.includes('structure')) return <Atom className="w-6 h-6" />;
    if (lowerCaseTitle.includes('thermodynamics') || lowerCaseTitle.includes('kinetics') || lowerCaseTitle.includes('equilibrium')) return <FlaskConical className="w-6 h-6" />;
    return <TestTube className="w-6 h-6" />;
  }
  
  const TabContent = () => {
    switch (activeTab) {
        case 'overview':
            return (
                <div className="space-y-6">
                     <Card>
                        <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="text-primary"/>
                            Learning Objectives
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg">
                        <ul className="list-disc list-inside space-y-2">
                            {learningObjectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                            ))}
                        </ul>
                        </CardContent>
                    </Card>
                    
                    <Separator />

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

                    <Separator />

                    <Card>
                        <CardHeader>
                        <CardTitle>Concept Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg space-y-6">
                        <div className="prose dark:prose-invert max-w-none">
                            <MarkdownRenderer>{conceptOverview || ''}</MarkdownRenderer>
                        </div>
                        
                        {tamilConnection && (
                            <Card className="bg-yellow-500/10 border-yellow-500/30">
                            <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                                <Lightbulb className="h-5 w-5 text-yellow-400" />
                                <CardTitle className="text-yellow-200 text-base">Tamil Connection</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 text-yellow-50 prose-sm">
                                <MarkdownRenderer>{tamilConnection}</MarkdownRenderer>
                            </CardContent>
                            </Card>
                        )}

                        {culturalContext && (
                            <Card className="bg-green-500/10 border-green-500/30">
                            <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                                <BookOpen className="h-5 w-5 text-green-400" />
                                <CardTitle className="text-green-200 text-base">Cultural Context</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 text-green-50 prose-sm">
                                <MarkdownRenderer>{culturalContext}</MarkdownRenderer>
                            </CardContent>
                            </Card>
                        )}

                        </CardContent>
                    </Card>
                    <SyllabusMappingCard mapping={syllabusMapping} />
                </div>
            );
        case 'learn':
            return <ConceptNotesCard content={conceptNotes || []} />;
        case 'examples':
            return <WorkedExamplesCard examples={workedExamples || []} />;
        case 'formulas':
            return <KeyFormulasCard content={keyFormulasAndDiagrams} />;
        case 'practice':
            return <PracticeSectionCard module={content} />;
        case 'summary':
            return (
                <div className="space-y-6">
                    {mnemonics && mnemonics.length > 0 && <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-center gap-2"><Brain /> Memory Mnemonic</CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg space-y-4 text-center">
                            {mnemonics.map((mnemonic, index) => (
                                <div key={index} className="w-full text-center p-4 rounded-md bg-primary/10 border border-primary/20">
                                <BilingualText english={mnemonic.text} tamil={mnemonic.tamil} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>}
                    {keyTakeaways && keyTakeaways.length > 0 && <Card>
                        <CardHeader>
                            <CardTitle>Chapter Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg space-y-4">
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
                        <CardContent className="card-padding-lg space-y-4">
                            {neetTips.map((tip, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-1"/>
                                    <BilingualText english={tip.text} tamil={tip.tamil} />
                                </div>
                            ))}
                            {(nextChapter || studentTip || peerDiscussion) && 
                            <Alert className="bg-primary/10 border-primary/20">
                                <Info className="h-4 w-4" />
                                <AlertTitle>
                                    <span>
                                        {nextChapter && <BilingualText english={`Next Module: ${nextChapter.title}`} tamil={nextChapter.titleTamil} />}
                                    </span>
                                </AlertTitle>
                                <AlertDescriptionComponent className="mt-2 space-y-2">
                                    {studentTip && <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                        <strong>Student Tip:</strong> 
                                        <BilingualText english={studentTip.english} tamil={studentTip.tamil} />
                                    </div>}
                                    {peerDiscussion && <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                        <strong>Peer Discussion:</strong> 
                                        <BilingualText english={peerDiscussion.english} tamil={peerDiscussion.tamil} />
                                </div>}
                                </AlertDescriptionComponent>
                            </Alert>
                            }
                        </CardContent>
                    </Card>}
                </div>
            );
        default:
            return null;
    }
  }

  return (
    <div className="container mx-auto space-y-6">
      <header className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <Link href="/exam-prep/neet/chemistry">
                <Button variant="ghost" size="icon" aria-label="Back to NEET Chemistry chapters">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
            </Link>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500/20 text-green-400">
                    {getIcon()}
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-headline">{title}</h1>
                    <p className="text-muted-foreground">Chemistry</p>
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
      
      <div className="md:grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 mb-6 md:mb-0">
            <div className="sticky top-24">
                <h3 className="font-headline text-lg mb-2">Lab Sections</h3>
                <nav className="flex flex-col space-y-1">
                    {TABS.map(tab => (
                        <Button
                            key={tab.id}
                            variant={activeTab === tab.id ? 'secondary' : 'ghost'}
                            onClick={() => setActiveTab(tab.id)}
                            className="justify-start pl-2"
                        >
                            <tab.icon className="mr-2 h-4 w-4" />
                            {tab.label}
                            {completedSections.includes(tab.id) && <CheckCircle className="ml-auto h-4 w-4 text-success" />}
                        </Button>
                    ))}
                </nav>
            </div>
        </aside>

        <main className="md:col-span-3 space-y-6">
            <TabContent />
            <Card className="bg-muted/30">
                <CardContent className="p-4 text-center">
                    <Button onClick={() => handleCompleteSection(activeTab)}>
                        {completedSections.includes(activeTab) 
                         ? <><CheckCircle className='mr-2'/> Section Completed</> 
                         : <>Mark as Complete & Go to Next <ChevronsRight className="ml-2"/></>
                        }
                    </Button>
                </CardContent>
            </Card>
        </main>
      </div>
      
       <Card className="mt-8 border-2 border-primary shadow-lg">
        <CardHeader className="text-center">
            <Trophy className="h-10 w-10 mx-auto text-yellow-400" />
            <CardTitle>Finish Line</CardTitle>
            <CardDescription>Complete all sections to unlock your XP!</CardDescription>
        </CardHeader>
        <CardContent className="p-6 text-center">
            <Button size="lg" disabled={completedSections.length < totalSections} onClick={handleClaimXp}>
                Complete Chapter & Claim 150 XP
            </Button>
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
