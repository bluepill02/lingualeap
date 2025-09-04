
'use client';

import { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Target, HelpCircle, FileText, BarChart, FlaskConical, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import type { NeetModule } from '@/lib/types';
import { SyllabusMappingCard, WorkedExamplesCard } from '@/components/exam/exam-components';

interface NeetChapterClientPageProps {
  content: NeetModule;
}

export default function NeetChapterClientPage({ content }: NeetChapterClientPageProps) {
  const { title, learningObjectives, prerequisites, syllabusMapping, workedExamples } = content;
  const [progress, setProgress] = useState(16); // 1/6th of the way

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

      <Tabs defaultValue="overview" className="w-full">
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
                        <Target className="text-primary"/>
                        Learning Objectives
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {learningObjectives.map((obj, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                            <p>{obj}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

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
            
            <SyllabusMappingCard mapping={syllabusMapping} />

            <WorkedExamplesCard examples={workedExamples} />

        </TabsContent>
        {/* Other Tabs Content can be added here */}
      </Tabs>
      
       <Button variant="outline" size="icon" className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg">
            <HelpCircle className="w-6 h-6" />
       </Button>
    </div>
  );
}
