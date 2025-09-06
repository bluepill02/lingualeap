
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
  Atom,
  Wind,
  Thermometer,
  Waves,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';

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

      {Object.entries(strategyGuideContent).map(([key, sectionData]) => (
        <div key={key} className="space-y-4">
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
    </div>
  );
}

// Add a Star icon component
function Star(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
