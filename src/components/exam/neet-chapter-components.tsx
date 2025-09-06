

'use client';

import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, FileText, Star, BookOpen, ChevronsDown, Brain, Activity, HelpCircle, Bot, ChevronsRight, RefreshCw } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample, KeyFormula, KeyDiagram, BilingualContent, ConceptNote } from '@/lib/types';
import { Separator } from '../ui/separator';
import { FbdBuilder } from './FbdBuilder';
import { cn } from '@/lib/utils';
import { MarkdownRenderer } from './markdown-renderer';
import { BilingualText } from './bilingual-text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { PracticeAnalytics } from './neet-practice-analytics';
import { AiQuizGenerator } from './ai-quiz-generator';
import { PracticeMode } from './neet-practice-mode';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


export function ConceptNotesCard({ content }: { content: ConceptNote[] }) {
    if (!Array.isArray(content) || content.length === 0) {
        return (
             <Card>
                <CardHeader className="card-padding-lg">
                    <CardTitle>Concept Notes</CardTitle>
                </CardHeader>
                <CardContent className="card-padding-lg">
                    <p>Notes are being updated for this chapter.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            {content.map((note, index) => (
                <React.Fragment key={index}>
                    <Card className="bg-card/50 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="card-padding-lg">
                            <CardTitle className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-lg">{index + 1}</span>
                                <BilingualText english={note.heading.english} tamil={note.heading.tamil} className="not-prose text-xl font-bold font-headline" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="card-padding-lg space-y-4">
                            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                                {note.content.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        <BilingualText english={typeof item === 'string' ? item : item.english} tamil={typeof item === 'string' ? undefined : item.tamil} />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    {index < content.length - 1 && (
                        <div className="flex justify-center items-center">
                            <ChevronsDown className="h-6 w-6 text-muted-foreground" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export function WorkedExamplesCard({ examples }: { examples: WorkedExample[] }) {
    if (!examples || examples.length === 0) return null;

    return (
        <div className="space-y-6">
            {examples.map((example, index) => (
                <Card key={index}>
                    <CardHeader className="card-padding-lg flex flex-row justify-between items-start">
                        <div>
                            <CardTitle>
                                <BilingualText english={example.title} tamil={example.titleTamil} />
                            </CardTitle>
                        </div>
                         <Badge variant={
                            example.difficulty === 'Easy' ? 'success' : 
                            example.difficulty === 'Medium' ? 'warning' : 'destructive'
                        }>
                            {example.difficulty}
                        </Badge>
                    </CardHeader>
                    <CardContent className="card-padding-lg space-y-4">
                        <div className="bg-muted p-4 rounded-md border-l-4 border-primary">
                            <p className="font-bold text-lg mb-2 text-foreground">Problem:</p>
                             <BilingualText english={example.problem} tamil={example.problemTamil} />
                        </div>

                        {example.fbd && example.fbd.map((fbdItem, fbdIndex) => (
                            <FbdBuilder key={fbdIndex} {...fbdItem} />
                        ))}

                        <div>
                            <p className="font-bold text-lg mb-2 text-foreground">Solution:</p>
                             <div className="space-y-4">
                                {example.solutionSteps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="p-3 border-l-2 border-primary/30 bg-primary/5 rounded-r-md">
                                        <div className="font-semibold text-base">
                                            <BilingualText english={step.explanation} tamil={step.explanationTamil} />
                                        </div>
                                        {step.calculation && (
                                            <div className="text-sm font-mono bg-background p-3 rounded-md mt-2 overflow-x-auto border">
                                                <MarkdownRenderer>{`$$${step.calculation}$$`}</MarkdownRenderer>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                         <Alert variant="warning">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle>NEET Hack</AlertTitle>
                            <AlertDescription>
                               <BilingualText english={example.neetHack} tamil={example.neetHackTamil} />
                            </AlertDescription>
                        </Alert>
                        {example.commonPitfall && (
                            <Alert variant="destructive">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertTitle>Common Pitfall</AlertTitle>
                                <AlertDescription>
                                     <BilingualText english={example.commonPitfall} tamil={example.commonPitfallTamil} />
                                </AlertDescription>
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export function KeyFormulasCard({ content }: { content: NeetModule['keyFormulasAndDiagrams'] }) {
    if (!content) return null;
    const { formulas, diagrams } = content;

    const hasFormulas = formulas && formulas.length > 0;
    const hasDiagrams = diagrams && diagrams.length > 0;

    if (!hasFormulas && !hasDiagrams) return null;

    return (
        <Card>
            <CardHeader className="card-padding-lg">
                <CardTitle className="flex items-center gap-2"><FileText />Key Formulas &amp; Diagrams</CardTitle>
            </CardHeader>
            <CardContent className="card-padding-lg space-y-6">
                {hasFormulas && (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Formula</TableHead>
                                <TableHead>Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {formulas.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-mono text-base">
                                        <MarkdownRenderer>{`$$${item.formula}$$`}</MarkdownRenderer>
                                    </TableCell>
                                    <TableCell>
                                        <BilingualText english={item.description} tamil={item.descriptionTamil} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                
                {hasDiagrams && diagrams.map((diagram, index) => (
                    <div key={index}>
                        <Separator className="my-4" />
                        <h4 className="font-bold text-lg"><MarkdownRenderer>{diagram.title}</MarkdownRenderer></h4>
                        <div className="text-muted-foreground text-sm mb-2"><MarkdownRenderer>{diagram.description}</MarkdownRenderer></div>
                        {diagram.fbd ? (
                           <div className="flex justify-center py-4">
                             <FbdBuilder {...diagram.fbd} />
                           </div>
                        ) : (
                           diagram.diagram && <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">{diagram.diagram}</pre>
                        )}
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}


export function PracticeSectionCard({ module }: { module: NeetModule }) {
    const { mcqs = [], assertionReasons = [], matchTheColumns = [], subject, chapter } = module;

    const [activeCardIndex, setActiveCardIndex] = React.useState<number | null>(null);
    const [individualCardFlipped, setIndividualCardFlipped] = React.useState<boolean[]>(Array(mcqs?.length || 0).fill(false));
    
    // State for Practice Mode
    const practiceMcqs = mcqs.slice(0, 15);
    const [practiceAnswers, setPracticeAnswers] = useState<(string | null)[]>(Array(15).fill(null));
    const [isPracticeSubmitted, setIsPracticeSubmitted] = useState(false);
    const [flipped, setFlipped] = useState<boolean[]>(Array(15).fill(false));

    const handleFlip = (index: number) => {
        const newFlipped = [...individualCardFlipped];
        newFlipped[index] = !newFlipped[index];
        setIndividualCardFlipped(newFlipped);
    };

    const handleCardClick = (index: number) => {
        setActiveCardIndex(index);
    };

    const handleCloseCard = () => {
        setActiveCardIndex(null);
    };

    const handleSubmit = () => {
        setIsPracticeSubmitted(true);
        setFlipped(Array(15).fill(true));
    };

    const handleReset = () => {
        setPracticeAnswers(Array(15).fill(null));
        setIsPracticeSubmitted(false);
        setFlipped(Array(15).fill(false));
    };

    if (!mcqs || !assertionReasons || !matchTheColumns) {
        return (
            <Card>
                <CardHeader className="card-padding-lg">
                    <CardTitle>Practice Section</CardTitle>
                </CardHeader>
                <CardContent className="card-padding-lg">
                    <p>Practice questions are not available for this chapter yet.</p>
                </CardContent>
            </Card>
        );
    }
   
    return (
        <Card>
            <CardHeader className="card-padding-lg">
                <CardTitle>Practice Section</CardTitle>
                <CardDescription>Test your understanding with practice problems.</CardDescription>
            </CardHeader>
            <CardContent className="card-padding-lg">
                <Tabs defaultValue="practice" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="practice">Practice Mode</TabsTrigger>
                        <TabsTrigger value="all-questions">All Questions</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="ai-practice">AI Practice</TabsTrigger>
                    </TabsList>
                    <TabsContent value="practice" className="mt-4">
                         <PracticeMode 
                            mcqs={practiceMcqs}
                            answers={practiceAnswers}
                            submitted={isPracticeSubmitted}
                            flipped={flipped}
                            onOptionSelect={(qIndex, option) => {
                                const newAnswers = [...practiceAnswers];
                                newAnswers[qIndex] = option;
                                setPracticeAnswers(newAnswers);
                            }}
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                         />
                    </TabsContent>
                    <TabsContent value="all-questions" className="mt-4">
                       <Accordion type="multiple" className="w-full space-y-4" defaultValue={['mcq']}>
                            <AccordionItem value="mcq">
                                 <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                                    Multiple-Choice Questions ({mcqs.length})
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {mcqs.map((mcq, qIndex) => (
                                            <Card key={qIndex} className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleCardClick(qIndex)}>
                                                <CardHeader className="card-padding-md">
                                                    <CardTitle className="flex items-center justify-between text-base">
                                                        Question {qIndex + 1}
                                                        <div className="flex">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <Star key={i} className={cn('h-4 w-4', (mcq.neetFrequency || 0) > i ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')} />
                                                            ))}
                                                        </div>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="card-padding-md flex-grow">
                                                     <div className="text-sm prose dark:prose-invert max-w-none"><MarkdownRenderer>{mcq.question}</MarkdownRenderer></div>
                                                </CardContent>
                                                <div className="card-padding-md pt-0 text-center text-primary/80 flex items-center justify-center gap-2">
                                                    <ChevronsRight className="h-4 w-4"/>
                                                    <span>View Answer</span>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="assertion-reason">
                                <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                                    Assertion-Reason Questions ({assertionReasons.length})
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-6">
                                    {assertionReasons.map((item, index) => (
                                        <div key={index} className="p-4 border rounded-lg text-sm">
                                            <div><strong>{index + 1}. Assertion (A):</strong> <MarkdownRenderer>{item.assertion}</MarkdownRenderer></div>
                                            <div className="mt-2"><strong>Reason (R):</strong> <MarkdownRenderer>{item.reason}</MarkdownRenderer></div>
                                            <Accordion type="single" collapsible className="w-full mt-2">
                                                <AccordionItem value="solution">
                                                    <AccordionTrigger className="text-xs p-2">View Solution</AccordionTrigger>
                                                    <AccordionContent className="p-4 bg-secondary/30 rounded-md">
                                                        <strong>Answer:</strong> {item.answer} - <MarkdownRenderer>{item.explanation}</MarkdownRenderer>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="match-the-columns">
                                <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                                    Match the Columns ({matchTheColumns.length})
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-6">
                                {matchTheColumns.map((item, index) => (
                                        <div key={index} className="p-4 border rounded-lg">
                                            <p className="font-medium mb-2">Question {index + 1}</p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold mb-2">Column I</h4>
                                                    <ul className="list-disc list-inside">
                                                        {item.column1.map(c1 => <li key={c1}><MarkdownRenderer>{c1}</MarkdownRenderer></li>)}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Column II</h4>
                                                    <ul className="list-disc list-inside">
                                                        {item.column2.map(c2 => <li key={c2}><MarkdownRenderer>{c2}</MarkdownRenderer></li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                            <Accordion type="single" collapsible className="w-full mt-4">
                                                <AccordionItem value="solution">
                                                    <AccordionTrigger className="text-xs p-2">View Solution</AccordionTrigger>
                                                    <AccordionContent className="p-4 bg-secondary/30 rounded-md">
                                                        <strong>Answer:</strong> {item.answer}
                                                        {item.explanation && <div className="text-xs text-muted-foreground mt-1"><MarkdownRenderer>{item.explanation}</MarkdownRenderer></div>}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="analytics" className="mt-4">
                        <PracticeAnalytics mcqs={practiceMcqs} answers={practiceAnswers} submitted={isPracticeSubmitted} />
                    </TabsContent>
                    <TabsContent value="ai-practice" className="mt-4">
                       <AiQuizGenerator subject={subject} chapter={chapter} />
                    </TabsContent>
                </Tabs>
                 <AnimatePresence>
                {activeCardIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseCard}
                    >
                        <motion.div 
                            className="relative w-full max-w-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                             <motion.div
                                className="relative w-full h-full [transform-style:preserve-3d]"
                                initial={false}
                                animate={{ rotateY: individualCardFlipped[activeCardIndex] ? 180 : 0 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                             >
                                {/* Front of the card */}
                                <div className="absolute w-full h-full [backface-visibility:hidden]">
                                    <Card className="h-full flex flex-col min-h-[400px]">
                                        <CardHeader className="card-padding-lg">
                                            <CardTitle className="flex items-center justify-between text-lg">
                                                Question {activeCardIndex + 1}
                                                <div className="flex">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star key={i} className={cn('h-4 w-4', (mcqs[activeCardIndex].neetFrequency || 0) > i ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')} />
                                                    ))}
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="card-padding-lg flex-grow flex items-center">
                                            <div className="text-base prose dark:prose-invert max-w-none"><MarkdownRenderer>{mcqs[activeCardIndex].question}</MarkdownRenderer></div>
                                        </CardContent>
                                        <div className="card-padding-lg border-t flex justify-between items-center">
                                            <Button variant="ghost" onClick={handleCloseCard}>Back to Questions</Button>
                                            <Button onClick={() => handleFlip(activeCardIndex)}>Reveal Answer</Button>
                                        </div>
                                    </Card>
                                </div>
                                
                                {/* Back of the card */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <Card className="h-full flex flex-col min-h-[400px]">
                                        <CardHeader className="card-padding-lg">
                                            <CardTitle className="text-lg">Answer & Explanation</CardTitle>
                                        </CardHeader>
                                        <CardContent className="card-padding-lg flex-grow space-y-4">
                                            <Alert variant="success">
                                                <CheckCircle className="h-4 w-4" />
                                                <AlertTitle>Correct Answer</AlertTitle>
                                                <AlertDescription><MarkdownRenderer>{mcqs[activeCardIndex].answer}</MarkdownRenderer></AlertDescription>
                                            </Alert>
                                            <Alert>
                                                <HelpCircle className="h-4 w-4" />
                                                <AlertTitle>Explanation</AlertTitle>
                                                <AlertDescription className="prose dark:prose-invert max-w-none text-sm">
                                                    <MarkdownRenderer>{mcqs[activeCardIndex].explanation}</MarkdownRenderer>
                                                </AlertDescription>
                                            </Alert>
                                        </CardContent>
                                        <div className="card-padding-lg border-t flex justify-between items-center">
                                            <Button variant="ghost" onClick={handleCloseCard}>Back to Questions</Button>
                                            <Button onClick={() => handleFlip(activeCardIndex)}>Show Question</Button>
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
