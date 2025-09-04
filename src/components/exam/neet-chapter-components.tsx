
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, FileText, Star } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample, KeyFormula, KeyDiagram } from '@/lib/types';
import { Separator } from '../ui/separator';
import { FbdBuilder } from './FbdBuilder';
import { cn } from '@/lib/utils';
import { MarkdownRenderer } from './markdown-renderer';
import { BilingualText } from './bilingual-text';

export function ConceptNotesCard({ content }: { content: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Concept Notes</CardTitle>
                <CardDescription>Detailed explanations of key topics.</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                <MarkdownRenderer>{content}</MarkdownRenderer>
            </CardContent>
        </Card>
    );
}

export function WorkedExamplesCard({ examples }: { examples: WorkedExample[] }) {
    if (!examples || examples.length === 0) return null;

    return (
        <div className="space-y-6">
            {examples.map((example, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row justify-between items-start">
                        <div>
                           <BilingualText english={example.title} tamil={example.titleTamil} englishClass="text-xl font-bold" />
                        </div>
                         <Badge variant={
                            example.difficulty === 'Easy' ? 'success' : 
                            example.difficulty === 'Medium' ? 'warning' : 'destructive'
                        }>
                            {example.difficulty}
                        </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-md border-l-4 border-primary">
                            <p className="font-bold text-lg mb-2 text-foreground">Problem:</p>
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                <BilingualText english={example.problem} tamil={example.problemTamil} />
                            </div>
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
                         <Alert variant="default" className="bg-yellow-500/10 border-yellow-500/30">
                            <Lightbulb className="h-4 w-4 text-yellow-400" />
                            <AlertTitle className='text-yellow-300'>NEET Hack</AlertTitle>
                            <AlertDescription>
                               <BilingualText english={example.neetHack} tamil={example.neetHackTamil} />
                            </AlertDescription>
                        </Alert>
                        {example.commonPitfall && (
                            <Alert variant="destructive" className="bg-destructive/10">
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

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><FileText />Key Formulas &amp; Diagrams</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                                    <MarkdownRenderer>{item.description}</MarkdownRenderer>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {diagrams && diagrams.map((diagram, index) => (
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


export function PracticeSectionCard({ mcqs, assertionReasons, matchTheColumns }: { mcqs: MCQ[], assertionReasons: AssertionReason[], matchTheColumns: MatchTheColumns[] }) {
    if (!mcqs || !assertionReasons || !matchTheColumns) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Practice Section</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Practice questions are not available for this chapter yet.</p>
                </CardContent>
            </Card>
        );
    }
    const [mcqAnswers, setMcqAnswers] = useState<(string | null)[]>(Array(mcqs.length).fill(null));
    const [submittedMcqs, setSubmittedMcqs] = useState(false);
    
    const handleMcqOptionChange = (quizIndex: number, option: string) => {
        const newAnswers = [...mcqAnswers];
        newAnswers[quizIndex] = option;
        setMcqAnswers(newAnswers);
    };

    const handleMcqSubmit = () => {
        setSubmittedMcqs(true);
    };

    const getCorrectMcqCount = () => {
        return mcqs.filter((quiz, index) => mcqAnswers[index] === quiz.answer).length;
    }
    
    const FrequencyStars = ({ count }: { count: number }) => (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn('w-4 h-4', i < count ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')}
          />
        ))}
      </div>
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Practice Section</CardTitle>
                <CardDescription>Test your understanding with practice problems.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" className="w-full space-y-4" defaultValue={['mcqs']}>
                    
                    {/* MCQs Section */}
                    <AccordionItem value="mcqs">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                            Multiple Choice Questions ({mcqs.length})
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            {mcqs.map((quiz, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <div className="font-medium mb-2"><MarkdownRenderer>{`${index + 1}. ${quiz.question}`}</MarkdownRenderer></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {quiz.options.map((option) => (
                                            <Button
                                                key={option}
                                                variant={
                                                    submittedMcqs 
                                                        ? (option === quiz.answer ? 'success' : (mcqAnswers[index] === option ? 'destructive' : 'outline'))
                                                        : (mcqAnswers[index] === option ? 'default' : 'outline')
                                                }
                                                className="w-full justify-start text-left h-auto"
                                                onClick={() => !submittedMcqs && handleMcqOptionChange(index, option)}
                                                disabled={submittedMcqs}
                                            >
                                                {submittedMcqs && option === quiz.answer && <CheckCircle className="mr-2 h-4 w-4" />}
                                                {submittedMcqs && mcqAnswers[index] === option && option !== quiz.answer && <XCircle className="mr-2 h-4 w-4" />}
                                                <span className={cn("mr-2 font-bold")}>{option.charAt(0)}.</span> <MarkdownRenderer>{option.substring(2)}</MarkdownRenderer>
                                            </Button>
                                        ))}
                                    </div>
                                    {submittedMcqs && (
                                        <div className="mt-4 p-2 rounded-md bg-secondary/30">
                                            <p className="text-sm font-semibold">Correct Answer: {quiz.answer}</p>
                                            <div className="text-xs text-muted-foreground mt-1"><MarkdownRenderer>{quiz.explanation}</MarkdownRenderer></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {!submittedMcqs ? (
                                <div className="flex gap-4">
                                <Button onClick={handleMcqSubmit} disabled={mcqAnswers.includes(null)}>
                                    Show Answers
                                </Button>
                                <Button variant="secondary">
                                    Complete Practice
                                </Button>
                                </div>
                            ) : (
                                <div className="p-4 bg-secondary rounded-lg text-center">
                                    <p className="text-lg font-bold">
                                    MCQ Score: {getCorrectMcqCount()} / {mcqs.length}
                                    </p>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                    
                    {/* Adaptive MCQ Practice */}
                     <AccordionItem value="adaptive-mcqs">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                           Adaptive MCQ Practice
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            <Alert variant="default" className="bg-yellow-500/10 border-yellow-500/30">
                                <Lightbulb className="h-4 w-4 text-yellow-400" />
                                <AlertTitle className="text-yellow-300">Focus on What Matters</AlertTitle>
                                <AlertDescription>
                                    These questions are sorted by how frequently similar concepts have appeared in past NEET exams. High-frequency questions are marked with more stars.
                                </AlertDescription>
                            </Alert>
                            {[...mcqs].sort((a,b) => (b.neetFrequency || 0) - (a.neetFrequency || 0)).map((quiz, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="font-medium pr-4"><MarkdownRenderer>{`${index + 1}. ${quiz.question}`}</MarkdownRenderer></div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                                            <FrequencyStars count={quiz.neetFrequency || 0} />
                                            <span>(Frequency: {quiz.neetFrequency || 0})</span>
                                        </div>
                                    </div>
                                    <Accordion type="single" collapsible className="w-full mt-2">
                                        <AccordionItem value="solution">
                                            <AccordionTrigger className="text-xs p-2">View Options &amp; Solution</AccordionTrigger>
                                            <AccordionContent className="p-2 space-y-4">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {quiz.options.map((option) => (
                                                        <Button
                                                            key={option}
                                                            variant={option === quiz.answer ? 'success' : 'outline'}
                                                            className="w-full justify-start text-left h-auto cursor-default"
                                                        >
                                                            {option === quiz.answer && <CheckCircle className="mr-2 h-4 w-4" />}
                                                            <span className="mr-2 font-bold">{option.charAt(0)}.</span> <MarkdownRenderer>{option.substring(2)}</MarkdownRenderer>
                                                        </Button>
                                                    ))}
                                                </div>
                                                <div className="p-2 rounded-md bg-secondary/30">
                                                    <p className="text-sm font-semibold">Correct Answer: {quiz.answer}</p>
                                                    <div className="text-xs text-muted-foreground mt-1"><MarkdownRenderer>{quiz.explanation}</MarkdownRenderer></div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>

                    {/* Assertion-Reason Section */}
                    {assertionReasons && assertionReasons.length > 0 && <AccordionItem value="assertion-reason">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                            Assertion-Reason Questions ({assertionReasons.length})
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            {assertionReasons.map((item, index) => (
                                <div key={index} className="p-4 border rounded-lg text-sm">
                                    <div><strong>{index + 1}. Assertion (A):</strong> <MarkdownRenderer>{item.assertion}</MarkdownRenderer></div>
                                    <div><strong>Reason (R):</strong> <MarkdownRenderer>{item.reason}</MarkdownRenderer></div>
                                    <Accordion type="single" collapsible className="w-full mt-2">
                                        <AccordionItem value="solution">
                                            <AccordionTrigger className="text-xs p-2">View Solution</AccordionTrigger>
                                            <AccordionContent className="p-2 bg-secondary/30 rounded-md">
                                                <strong>Answer:</strong> {item.explanation}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>}

                    {/* Match the Columns Section */}
                    {matchTheColumns && matchTheColumns.length > 0 && <AccordionItem value="match-the-columns">
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
                                            <AccordionContent className="p-2 bg-secondary/30 rounded-md">
                                                 <strong>Answer:</strong> {item.answer}
                                                 {item.explanation && <div className="text-xs text-muted-foreground mt-1"><MarkdownRenderer>{item.explanation}</MarkdownRenderer></div>}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                           ))}
                        </AccordionContent>
                    </AccordionItem>}

                </Accordion>
            </CardContent>
        </Card>
    );
}
