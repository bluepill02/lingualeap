
'use client';

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
import { CheckCircle, XCircle } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample } from '@/lib/types';

function renderContent(content: string) {
    const sections = content.split('\n').map((line, index) => {
        if (line.startsWith('### ')) {
            return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
             return <h4 key={index} className="text-md font-semibold mt-3 mb-1">{line.substring(5)}</h4>;
        }
        if (line.startsWith('*   **')) {
             const parts = line.split('**');
             return <p key={index} className="my-2"><strong className="font-semibold">{parts[1]}</strong>{parts[2]}</p>
        }
        if (line.trim().startsWith('`')) {
             return <pre key={index} className="bg-muted p-2 rounded-md text-sm font-mono my-2 overflow-x-auto"><code>{line.replace(/`/g, '')}</code></pre>
        }
        if (line.trim().startsWith('-')) {
             return <li key={index} className="ml-5 list-disc my-1">{line.substring(line.indexOf('-') + 1).trim()}</li>;
        }
        if (line.trim() === '') {
            return <div key={index} className="h-2" />;
        }
        return <p key={index} className="my-2 leading-relaxed">{line}</p>;
    });
    return <>{sections}</>;
}


export function ConceptNotesCard({ content }: { content: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Concept Notes</CardTitle>
                <CardDescription>Detailed explanations of key topics.</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                {renderContent(content)}
            </CardContent>
        </Card>
    );
}

export function WorkedExamplesCard({ examples }: { examples: WorkedExample[] }) {
    if (!examples || examples.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Worked Examples</CardTitle>
                <CardDescription>Step-by-step solutions to common problems.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {examples.map((example, index) => (
                         <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-bold text-left">{index + 1}. {example.problem}</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-2">
                                <p className="font-semibold text-sm">Solution:</p>
                                <div className="prose dark:prose-invert max-w-none">
                                    {renderContent(example.solution)}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}

export function PracticeSectionCard({ mcqs, assertionReasons, matchTheColumns }: { mcqs: MCQ[], assertionReasons: AssertionReason[], matchTheColumns: MatchTheColumns[] }) {
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

    return (
        <Card>
            <CardHeader>
                <CardTitle>Practice Section</CardTitle>
                <CardDescription>Test your understanding with practice problems.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" className="w-full space-y-4">
                    
                    {/* MCQs Section */}
                    <AccordionItem value="mcqs">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                            NEET-style Multiple Choice Questions ({mcqs.length})
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            {mcqs.map((quiz, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <p className="font-medium mb-2">{index + 1}. {quiz.question}</p>
                                    <div className="space-y-2">
                                        {quiz.options.map((option) => (
                                            <Button
                                                key={option}
                                                variant={
                                                    submittedMcqs && mcqAnswers[index] === option
                                                    ? option === quiz.answer ? 'default' : 'destructive'
                                                    : mcqAnswers[index] === option ? 'secondary' : 'outline'
                                                }
                                                className="w-full justify-start text-left h-auto"
                                                onClick={() => !submittedMcqs && handleMcqOptionChange(index, option)}
                                                disabled={submittedMcqs}
                                            >
                                                {submittedMcqs && mcqAnswers[index] === option &&
                                                    (option === quiz.answer ? <CheckCircle className="mr-2 h-4 w-4" /> : <XCircle className="mr-2 h-4 w-4" />)
                                                }
                                                {option}
                                            </Button>
                                        ))}
                                    </div>
                                    {submittedMcqs && (
                                        <div className="mt-2 p-2 rounded-md bg-primary/10">
                                            <p className="text-sm font-semibold">Correct Answer: {quiz.answer}</p>
                                            <p className="text-xs text-muted-foreground">{quiz.explanation}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {!submittedMcqs ? (
                                <Button onClick={handleMcqSubmit} disabled={mcqAnswers.includes(null)}>
                                    Submit MCQs
                                </Button>
                            ) : (
                                <div className="p-4 bg-secondary rounded-lg text-center">
                                    <p className="text-lg font-bold">
                                    MCQ Score: {getCorrectMcqCount()} / {mcqs.length}
                                    </p>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>

                    {/* Assertion-Reason Section */}
                    <AccordionItem value="assertion-reason">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                            Assertion-Reason Questions ({assertionReasons.length})
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            {assertionReasons.map((item, index) => (
                                <div key={index} className="p-4 border rounded-lg text-sm">
                                    <p><strong>{index + 1}. Assertion (A):</strong> {item.assertion}</p>
                                    <p><strong>Reason (R):</strong> {item.reason}</p>
                                    <Accordion type="single" collapsible className="w-full mt-2">
                                        <AccordionItem value="solution">
                                            <AccordionTrigger className="text-xs p-2">View Solution</AccordionTrigger>
                                            <AccordionContent className="p-2 bg-primary/10 rounded-md">
                                                <strong>Answer:</strong> {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>

                    {/* Match the Columns Section */}
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
                                                {item.column1.map(c1 => <li key={c1}>{c1}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Column II</h4>
                                            <ul className="list-disc list-inside">
                                                {item.column2.map(c2 => <li key={c2}>{c2}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <Accordion type="single" collapsible className="w-full mt-4">
                                        <AccordionItem value="solution">
                                            <AccordionTrigger className="text-xs p-2">View Solution</AccordionTrigger>
                                            <AccordionContent className="p-2 bg-primary/10 rounded-md">
                                                 <strong>Answer:</strong> {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                           ))}
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </CardContent>
        </Card>
    );
}
