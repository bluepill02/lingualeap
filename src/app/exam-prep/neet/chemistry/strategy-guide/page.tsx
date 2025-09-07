
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  Lightbulb,
  Zap,
  ArrowLeft,
  FlaskConical,
  Atom,
  Thermometer,
  Sigma,
  Star,
  BrainCircuit,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/chemistry/neet-chemistry-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sectionIcons = {
  physical: <Thermometer className="text-blue-400" />,
  inorganic: <Sigma className="text-green-400" />,
  organic: <Atom className="text-orange-400" />,
};

export default function NeetChemistryStrategyGuidePage() {
  return (
    <div className="container mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet/chemistry">
          <Button variant="ghost" size="icon" aria-label="Back to NEET Chemistry">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
            <Star />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">
              NEET Chemistry Strategy Guide
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
                The Topper's Approach to NEET Chemistry
              </CardTitle>
              <CardDescription>
                High-level strategies for turning good preparation into a great rank.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold flex items-center gap-2"><Atom className="text-orange-400"/>Organic Chemistry</h3>
                <p className="text-sm text-muted-foreground mt-1">Don't just memorize reactions; understand the 'why'. Focus on General Organic Chemistry (GOC) first. Master reaction mechanisms like substitution and elimination. This makes learning specific chapter reactions much easier.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold flex items-center gap-2"><Thermometer className="text-blue-400"/>Physical Chemistry</h3>
                <p className="text-sm text-muted-foreground mt-1">This is all about conceptual clarity and application. Create a dedicated formula sheet with units and conditions. Practice numericals daily, focusing on accuracy and speed. Don't ignore theory questions from chapters like Solid State and Surface Chemistry.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-bold flex items-center gap-2"><Sigma className="text-green-400"/>Inorganic Chemistry</h3>
                <p className="text-sm text-muted-foreground mt-1">Make NCERT your bible. Read it multiple times. Create concise notes for trends, exceptions, and key properties in the p-block, d-block, and f-block elements. Focus on Coordination Compounds as it's a high-yield, conceptual chapter.</p>
              </div>
               <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-bold flex items-center gap-2"><BrainCircuit className="text-primary"/>Overall Strategy</h3>
                <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                    <li><strong>Interlink Topics:</strong> Connect concepts like thermodynamics with equilibrium, or GOC with reaction mechanisms.</li>
                    <li><strong>Mock Test Analysis:</strong> After every test, spend more time analyzing mistakes than you spent taking the test. Categorize errors into conceptual gaps, silly mistakes, or time management issues.</li>
                    <li><strong>Revision is Key:</strong> Use short notes and mind maps for quick daily and weekly revisions. Don't let yourself forget what you've studied.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
