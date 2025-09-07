
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  AlertTriangle,
  Lightbulb,
  Zap,
  ArrowLeft,
  Atom,
  Wind,
  Thermometer,
  Waves,
  Star,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
};

export default function NeetPhysicsStrategyGuidePage() {
  return (
    <div className="container mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet/physics">
          <Button variant="ghost" size="icon" aria-label="Back to NEET Physics">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
            <Star />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">
              NEET Physics Strategy Guide
            </h1>
            <p className="text-muted-foreground">
              Master common mistakes, rare concepts, and strategic tricks.
            </p>
          </div>
        </div>
      </header>

      <Tabs defaultValue="deep-dive" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deep-dive">Concept Deep Dive</TabsTrigger>
          <TabsTrigger value="topper-approach">Topper's Approach</TabsTrigger>
        </TabsList>
        <TabsContent value="deep-dive" className="mt-6">
           {Object.entries(strategyGuideContent).map(([key, sectionData]) => (
            <div key={key} className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                {sectionIcons[key as keyof typeof sectionIcons]}
                <h2 className="text-3xl font-bold font-headline tracking-tight">
                  {sectionData.title} ({sectionData.titleTamil})
                </h2>
              </div>
              <Accordion type="multiple" className="w-full space-y-4">
                {sectionData.chapters.map((chapter, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-bold font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                      <div className="text-left">
                        {chapter.chapterName}
                        <p className="text-sm font-normal text-muted-foreground">{chapter.chapterNameTamil}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                      {chapter.sections.map((section, secIndex) => (
                        <Card key={secIndex}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              {section.type === 'mistake' && (
                                <AlertTriangle className="text-destructive" />
                              )}
                              {section.type === 'trick' && (
                                <Zap className="text-yellow-500" />
                              )}
                              {section.type === 'rare' && (
                                <Lightbulb className="text-blue-400" />
                              )}
                              {section.title} ({section.titleTamil})
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="card-padding-lg space-y-4">
                            {section.points.map((point, pointIndex) => (
                              <Alert
                                key={pointIndex}
                                variant={
                                  section.type === 'mistake'
                                    ? 'destructive'
                                    : section.type === 'trick'
                                    ? 'warning'
                                    : 'default'
                                }
                                className="bg-card"
                              >
                                <AlertTitle>{point.point}</AlertTitle>
                                <AlertDescription>
                                  <div className="prose dark:prose-invert max-w-none">
                                    <MarkdownRenderer>{point.explanation}</MarkdownRenderer>
                                    <div className="mt-2 p-2 border-l-2 border-accent/30 bg-accent/10 rounded-r-md">
                                        <MarkdownRenderer>{point.explanationTamil}</MarkdownRenderer>
                                    </div>
                                  </div>
                                </AlertDescription>
                              </Alert>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="topper-approach" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary" />
                The Topper's Approach to NEET Physics
              </CardTitle>
              <CardDescription>
                Beyond formulas: Strategies for a top-tier rank in Physics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold">1. Conceptual Clarity Before Problem Solving</h3>
                <p className="text-sm text-muted-foreground mt-1">Don't jump to solving MCQs without deeply understanding the theory. A topper visualizes the physics behind the problem rather than just hunting for the right formula. Spend 40% of your time on theory and 60% on application.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold">2. Master the Art of Approximation and Elimination</h3>
                <p className="text-sm text-muted-foreground mt-1">Not all questions need a full calculation. Use dimensional analysis and approximation to eliminate obviously incorrect options quickly. This saves crucial time for more complex problems.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold">3. Create a 'Mistake Notebook'</h3>
                <p className="text-sm text-muted-foreground mt-1">Every time you make a mistake in a mock test—conceptual, calculational, or silly—write it down in a dedicated notebook. Reviewing this notebook is more valuable than re-reading a chapter.</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-bold flex items-center gap-2"><BrainCircuit className="text-primary"/>Exam Day Mindset</h3>
                <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                    <li><strong>Start with Strong Topics:</strong> Begin with questions from your strongest chapters to build confidence and momentum.</li>
                    <li><strong>Two-Pass Strategy:</strong> In the first pass, solve all easy and formula-based questions. In the second pass, tackle the tougher, multi-concept problems.</li>
                    <li><strong>Stay Calm During Tough Questions:</strong> If a question seems too hard, don't panic. Mark it and move on. Wasting time on one question can cost you five easy ones.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
