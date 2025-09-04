
'use client';

import { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Target, HelpCircle, FileText, BarChart, FlaskConical, Atom, Lightbulb, Trophy, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import type { NeetModule } from '@/lib/types';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ConceptNotesCard, WorkedExamplesCard, KeyFormulasCard, PracticeSectionCard } from '@/components/exam/neet-chapter-components';


interface NeetChapterClientPageProps {
  content: NeetModule;
}

export default function NeetChapterClientPage({ content }: NeetChapterClientPageProps) {
  const { title, learningObjectives, prerequisites, syllabusMapping, workedExamples, conceptOverview, tamilConnection, culturalContext, conceptNotes, keyFormulasAndDiagrams, mcqs, assertionReasons, matchTheColumns } = content;
  const [progress, setProgress] = useState(16); // 1/6th of the way

  const summaryPoints = [
    "First Law: Inertia - objects resist change in motion",
    "Second Law: F = ma - force causes acceleration",
    "Third Law: Action-Reaction pairs are equal and opposite",
    "Always draw free body diagrams before solving"
  ];


  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Link href="/exam-prep/neet/physics">
                <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
            </Link>
          <div>
            <h1 className="text-2xl font-bold font-headline">{title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center gap-1">
                    <Atom className="w-4 h-4"/>
                    <span>Physics</span>
                </div>
                <Badge variant="secondary">{content.chapter}</Badge>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="flex justify-between items-center mb-1 text-sm">
            <span className="text-muted-foreground">Study Progress</span>
            <span>1/6 sections completed</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="formulas">Formulas</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>
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
                    <Alert variant="default" className="bg-yellow-500/10 border-yellow-500/30">
                        <Lightbulb className="h-4 w-4 text-yellow-400" />
                        <AlertTitle>Tamil Connection</AlertTitle>
                        <AlertDescription>{tamilConnection}</AlertDescription>
                    </Alert>
                     <Alert variant="default" className="bg-green-500/10 border-green-500/30">
                        <BookOpen className="h-4 w-4 text-green-400" />
                        <AlertTitle>Cultural Context</AlertTitle>
                        <AlertDescription>{culturalContext}</AlertDescription>
                    </Alert>
                    <Alert variant="default" className="bg-blue-500/10 border-blue-500/30">
                        <AlertTitle>TN Board Mapping</AlertTitle>
                        <AlertDescription>{syllabusMapping?.[0]?.tnBoardChapter} maps to NEET Physics Unit 2</AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
            
            <div className="flex justify-center">
                <Button>Mark as Completed</Button>
            </div>

        </TabsContent>
        <TabsContent value="learn" className="mt-6 space-y-6">
            <ConceptNotesCard content={conceptNotes} />
            <div className="flex justify-center">
                <Button>Mark as Completed</Button>
            </div>
        </TabsContent>
        <TabsContent value="examples" className="mt-6 space-y-6">
            <WorkedExamplesCard examples={workedExamples} />
             <div className="flex justify-center">
                <Button>Mark as Completed</Button>
            </div>
        </TabsContent>
        <TabsContent value="formulas" className="mt-6 space-y-6">
            <KeyFormulasCard content={keyFormulasAndDiagrams} />
             <div className="flex justify-center">
                <Button>Mark as Completed</Button>
            </div>
        </TabsContent>
        <TabsContent value="practice" className="mt-6 space-y-6">
            <PracticeSectionCard mcqs={mcqs} assertionReasons={assertionReasons} matchTheColumns={matchTheColumns} />
             <div className="flex justify-center">
                <Button>Mark as Completed</Button>
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
                        <div key={index} className="flex items-center gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500"/>
                            <p>{point}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Next Steps & NEET Tips</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Coming soon...</p>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
      
       <Button variant="outline" size="icon" className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg">
            <HelpCircle className="w-6 h-6" />
       </Button>
    </div>
  );
}
