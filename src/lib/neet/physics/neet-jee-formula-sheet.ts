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
  BookOpen,
  ClipboardList,
  Target,
  Goal,
  RefreshCw,
  Network,
  BarChart3,
  GitCompare,
  Ruler,
  TableIcon,
  Languages,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { topperApproachData } from '@/lib/neet/physics/neet-physics-topper-approach';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';
import { neetJeeFormulaSheet } from '@/lib/neet/physics/neet-jee-formula-sheet';

const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
};

const cardColors = [
    "border-primary",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-red-500",
    "border-purple-500",
    "border-pink-500",
    "border-indigo-500",
    "border-teal-500",
    "border-cyan-500"
];


export default function NeetPhysicsStrategyGuidePage() {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  const physicsFormulas = neetJeeFormulaSheet.physics;

  const TopperApproachContent = () => {
    const content = topperApproachData;
    return (
      <div className="space-y-6">
        {content.map((section, index) => (
           <Card key={index} className={`border-l-4 ${cardColors[index % cardColors.length]} bg-primary/5 shadow-md hover:shadow-lg transition-shadow`}>
            <CardHeader className="card-padding-lg">
              <CardTitle className="flex items-center gap-3">
                {section.icon && <section.icon className="h-6 w-6 text-primary" />}
                <span className="text-left text-xl font-headline">
                    {language === 'english' ? section.title : section.titleTamil}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding-lg pt-0 prose dark:prose-invert max-w-none text-muted-foreground">
               <MarkdownRenderer>
                {language === 'english' ? section.content : section.contentTamil}
              </MarkdownRenderer>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const FormulaSheetContent = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Formula & Equation Sheet</CardTitle>
          <CardDescription>
            A comprehensive list of formulas for NEET Physics, organized by topic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {Object.entries(physicsFormulas).map(([topic, subtopicData]) => (
              <AccordionItem value={topic} key={topic}>
                <AccordionTrigger className="text-xl font-headline capitalize card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                  {topic.replace(/([A-Z])/g, ' $1').trim()}
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[30%]">Formula</TableHead>
                        <TableHead>Description (English)</TableHead>
                        <TableHead>Description (Tamil)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.values(subtopicData)[0].formulas.map((entry, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-mono text-base">
                            <MarkdownRenderer>{`$$${entry.formula}$$`}</MarkdownRenderer>
                          </TableCell>
                          <TableCell>{entry.description}</TableCell>
                          <TableCell className="font-headline">{entry.descriptionTamil}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    );
  };


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
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="deep-dive">Concept Deep Dive</TabsTrigger>
          <TabsTrigger value="topper-approach">Topper's Approach</TabsTrigger>
          <TabsTrigger value="formula-sheet">Formula Sheet</TabsTrigger>
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
            <TopperApproachContent />
        </TabsContent>
        <TabsContent value="formula-sheet" className="mt-6">
            <FormulaSheetContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}