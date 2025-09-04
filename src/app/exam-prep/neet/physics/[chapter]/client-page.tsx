
'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, Trophy, Brain, Info, Loader2, Atom } from 'lucide-react';
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

interface NeetChapterClientPageProps {
  content: NeetModule;
}

function ChapterContent({ content }: NeetChapterClientPageProps) {
  const { title, learningObjectives, prerequisites, syllabusMapping, workedExamples, conceptOverview, tamilConnection, culturalContext, conceptNotes, keyFormulasAndDiagrams, mcqs, assertionReasons, matchTheColumns } = content;
  const totalSections = 6;

  const { completedSections, toggleSection, isLoading } = useNeetChapterProgress(mockUser.id, content.id);

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

  const progress = (completedSections.length / totalSections) * 100;


  const summaryPoints = [
    "First Law: Inertia - objects resist change in motion",
    "Second Law: F = ma - force causes acceleration",
    "Third Law: Action-Reaction pairs are equal and opposite",
    "Always draw free body diagrams before solving"
  ];

  const neetTips = [
      { text: "Time-Saver: For connected objects, always find system acceleration first: a = F_net/m_total", tamil: "இணைக்கப்பட்ட பொருட்களுக்கு முதலில் கூட்டு முடுக்கம் கண்டுபிடிக்கவும்" },
      { text: "Mnemonic: Remember FMA: Force = Mass × Acceleration. Like 'Famous Madras Academy'", tamil: "விசை-நிறை-முடுக்கம் - 'விநாயகர் நல்ல முருகன்' என்று நினைவில் வைக்கவும்" },
      { text: "Pitfall: Weight is mg, not mass. Weight changes with g, mass doesn't!", tamil: "எடை = mg, நிறை அல்ல. எடை g யுடன் மாறும், நிறை மாறாது" },
      { text: "Strategy: Draw free body diagrams for EVERY object in the problem. This prevents mistakes.", tamil: "எல்லா பொருட்களுக்கும் விசை படம் வரையவும்" }
  ]

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <Link href="/exam-prep/neet/physics">
                <Button variant="ghost" size="icon">
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
        <CardContent className="p-4">
            <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-muted-foreground">Study Progress</span>
                <span>{completedSections.length}/{totalSections} sections completed</span>
            </div>
            <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex justify-center">
          <ScrollArea className="w-full pb-2 md:w-auto">
            <TabsList className="grid grid-cols-3 h-auto md:h-10 md:grid-cols-6 w-full md:w-auto">
            <TabsTrigger value="overview">Overview {completedSections.includes('overview') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
            <TabsTrigger value="learn">Learn {completedSections.includes('learn') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
            <TabsTrigger value="examples">Examples {completedSections.includes('examples') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
            <TabsTrigger value="formulas">Formulas {completedSections.includes('formulas') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
            <TabsTrigger value="practice">Practice {completedSections.includes('practice') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
            <TabsTrigger value="summary">Summary {completedSections.includes('summary') && <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>}</TabsTrigger>
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
                <CardContent>
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
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{conceptOverview}</p>
                    {tamilConnection && <Alert variant="default" className="bg-yellow-500/10 border-yellow-500/30">
                        <Lightbulb className="h-4 w-4 text-yellow-400" />
                        <AlertTitle>Tamil Connection</AlertTitle>
                        <AlertDescription>{tamilConnection}</AlertDescription>
                    </Alert>}
                     {culturalContext && <Alert variant="default" className="bg-green-500/10 border-green-500/30">
                        <BookOpen className="h-4 w-4 text-green-400" />
                        <AlertTitle>Cultural Context</AlertTitle>
                        <AlertDescription>{culturalContext}</AlertDescription>
                    </Alert>}
                    {syllabusMapping && syllabusMapping.length > 0 && <Alert variant="default" className="bg-blue-500/10 border-blue-500/30">
                        <AlertTitle>TN Board Mapping</AlertTitle>
                        <AlertDescription>{syllabusMapping?.[0]?.tnBoardChapter} maps to NEET Physics Unit 2</AlertDescription>
                    </Alert>}
                </CardContent>
            </Card>
            
            <div className="flex justify-center">
                <Button onClick={() => handleCompleteSection('overview')} >
                    {completedSections.includes('overview') ? <><CheckCircle className='mr-2'/> Completed</> : 'Mark as Completed'}
                </Button>
            </div>

        </TabsContent>
        <TabsContent value="learn" className="mt-6 space-y-6">
            <ConceptNotesCard>
                 {conceptNotes}
            </ConceptNotesCard>
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
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Brain /> Memory Mnemonic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left h-auto bg-primary/10 border-primary/20">விசை நிறை முடுக்க விதி - F = ma (Visai Nirai Mudukka Vithi)</Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto bg-primary/10 border-primary/20">செயல் எதிர்செயல் சமம் - Action-Reaction equal (Seyal Ethirseyal Samam)</Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto bg-primary/10 border-primary/20">ஓய்வு இயக்கம் மாறாது - Rest and motion unchanged (Oyvu Iyakkam Maradu)</Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Chapter Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {summaryPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500 mt-1"/>
                            <p>{point}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Next Steps & NEET Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <h3 className="font-semibold text-green-400">NEET Hacks & Tips:</h3>
                    {neetTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-yellow-500 mt-1"/>
                            <div>
                                <p>{tip.text}</p>
                                <p className="text-sm text-yellow-400/80">{tip.tamil}</p>
                            </div>
                        </div>
                    ))}
                    <Alert className="bg-primary/10 border-primary/20">
                         <Info className="h-4 w-4" />
                         <AlertTitle>Next Module: Work, Energy and Power (வேலை, ஆற்றல் மற்றும் திறன்)</AlertTitle>
                         <AlertDescription className="mt-2 space-y-2">
                            <p><strong>Student Tip:</strong> நியூட்டன் விதிகளை வாழ்க்கையில் காணும் உதாரணங்களுடன் இணைத்து படிங்கள் - அப்போது தான் நன்கு புரியும்! (Connect Newton's laws with real-life examples you observe - that's when you'll truly understand!)</p>
                            <p><strong>Peer Discussion:</strong> உங்கள் நண்பர்களுடன் விசை மற்றும் இயக்க பிரச்சினைகளை விவாதிக்கவும். விசை படங்கள் வரைந்து பார்க்கவும்.</p>
                         </AlertDescription>
                    </Alert>
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
        <CardContent className="p-4 text-center">
            <Button size="lg" disabled={completedSections.length < totalSections}>Complete Chapter & Claim XP</Button>
        </CardContent>
       </Card>
    </div>
  );
}


export default function NeetChapterClientPage({ content }: NeetChapterClientPageProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <>{isClient ? <ChapterContent content={content} /> : null}</>
}

    