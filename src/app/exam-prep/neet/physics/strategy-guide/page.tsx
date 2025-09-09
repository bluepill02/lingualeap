
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
  BrainCircuit,
  Book,
  ClipboardList,
  Target,
  Goal,
  RefreshCw,
  Sigma,
  Network,
  BarChart,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { topperApproachContent, topperApproachContentTamil } from '@/lib/neet/physics/neet-physics-topper-approach';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
};

export default function NeetPhysicsStrategyGuidePage() {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');

  return (
    <div className="container mx-auto space-y-8 subject-physics">
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

      <Tabs defaultValue="topper-approach" className="w-full">
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
                  <BilingualText english={sectionData.title} tamil={sectionData.titleTamil} />
                </h2>
              </div>
              <Accordion type="multiple" className="w-full space-y-4">
                {sectionData.chapters.map((chapter, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-bold font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                      <div className="text-left">
                        <BilingualText english={chapter.chapterName} tamil={chapter.chapterNameTamil} />
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
                              <BilingualText english={section.title} tamil={section.titleTamil} />
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
        <TabsContent value="topper-approach" className="mt-6 space-y-8">
            <div className="flex justify-end mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                    <Button
                        size="sm"
                        variant={language === 'english' ? 'secondary' : 'ghost'}
                        onClick={() => setLanguage('english')}
                    >
                        EN
                    </Button>
                    <Button
                        size="sm"
                        variant={language === 'tamil' ? 'secondary' : 'ghost'}
                        onClick={() => setLanguage('tamil')}
                    >
                        தமிழ்
                    </Button>
                </div>
            </div>
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <TrendingUp className="text-primary" />
                     {language === 'english' ? "NEET Physics Mastery: A Topper’s Approach" : "நீட் இயற்பியல் தேர்ச்சி: ஒரு டாப்பரின் அணுகுமுறை"}
                  </CardTitle>
                  <CardDescription>
                      {language === 'english' ? "Deep Conceptual Understanding, Strategic Learning, and Efficient Problem Solving" : "ஆழமான கருத்தியல் புரிதல், உத்தியியல் கற்றல் மற்றும் திறமையான சிக்கல் தீர்த்தல்"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <MarkdownRenderer>
                      {language === 'english' ? topperApproachContent : topperApproachContentTamil}
                  </MarkdownRenderer>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

