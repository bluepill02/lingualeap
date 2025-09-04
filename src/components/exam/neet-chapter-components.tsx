
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
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, FileText } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample, KeyFormula, KeyDiagram } from '@/lib/types';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Separator } from '../ui/separator';

function renderContent(content: string) {
    if (typeof content !== 'string') {
        return <pre>{JSON.stringify(content, null, 2)}</pre>;
    }
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inBlock: 'diagram' | 'formula' | null = null;
    let blockContent: string[] = [];
    let blockTitle = '';

    lines.forEach((line, index) => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('DIAGRAM_START:')) {
            inBlock = 'diagram';
            blockTitle = trimmedLine.replace('DIAGRAM_START:', '').trim();
            return;
        } else if (trimmedLine === 'DIAGRAM_END' && inBlock === 'diagram') {
            elements.push(
                <div key={`diag-${index}`} className="bg-muted p-4 rounded-lg my-4 text-sm font-mono overflow-x-auto">
                    {blockTitle && <p className="font-sans text-foreground text-sm font-semibold mb-2">{blockTitle}</p>}
                    <pre>{blockContent.join('\n')}</pre>
                </div>
            );
            inBlock = null;
            blockContent = [];
            blockTitle = '';
            return;
        } else if (trimmedLine.startsWith('FORMULA_START')) {
            inBlock = 'formula';
            return;
        } else if (trimmedLine === 'FORMULA_END' && inBlock === 'formula') {
            const [formula, description] = blockContent.join('\n').split('#').map(s => s.trim());
            elements.push(
                 <div key={`formula-${index}`} className="bg-muted p-4 rounded-lg my-4">
                    <BlockMath math={formula} />
                    {description && <p className="text-sm text-center text-muted-foreground mt-2">{description}</p>}
                </div>
            );
            inBlock = null;
            blockContent = [];
            return;
        }

        if (inBlock) {
            blockContent.push(line);
            return;
        }
        
        if (trimmedLine.startsWith('### ')) {
            elements.push(<h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>);
        } else if (trimmedLine.startsWith('#### ')) {
            elements.push(<h4 key={index} className="text-lg font-semibold mt-4 mb-2">{line.substring(5)}</h4>);
        } else if (trimmedLine.startsWith('*   **')) {
            const parts = line.split('**');
            elements.push(<p key={index} className="my-2"><strong className="font-semibold">{parts[1]}</strong>{parts[2]}</p>);
        } else if (trimmedLine.startsWith('- ')) {
            elements.push(<li key={index} className="ml-5 list-disc my-1">{line.substring(2)}</li>);
        } else if (trimmedLine === '') {
           // empty line
        } else if (line) { // Ensure the line is not empty
            elements.push(<p key={index} className="my-2 leading-relaxed text-muted-foreground">{line}</p>);
        }
    });
    
    return <>{elements}</>;
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
        <div className="space-y-6">
            {examples.map((example, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row justify-between items-start">
                        <div>
                            <CardTitle>{example.title}</CardTitle>
                        </div>
                        <Badge variant={
                            example.difficulty === 'Easy' ? 'default' : 
                            example.difficulty === 'Medium' ? 'secondary' : 'destructive'
                        } className={
                            example.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
                            example.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
                        }>
                            {example.difficulty}
                        </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-primary/10 p-4 rounded-md">
                            <p className="font-bold">Problem:</p>
                            <p>{example.problem}</p>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                {example.solutionSteps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                ))}
                            </ol>
                        </div>
                        <Alert variant="default" className="bg-accent/10 border-accent">
                            <Lightbulb className="h-4 w-4 text-accent" />
                            <AlertTitle>NEET Hack</AlertTitle>
                            <AlertDescription>{example.neetHack}</AlertDescription>
                        </Alert>
                        <Alert variant="destructive" className="bg-destructive/10">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Common Pitfall</AlertTitle>
                            <AlertDescription>{example.commonPitfall}</AlertDescription>
                        </Alert>
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
                <CardTitle className="flex items-center gap-2"><FileText />Key Formulas & Diagrams</CardTitle>
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
                                    <BlockMath math={item.formula} />
                                </TableCell>
                                <TableCell>
                                    <p className="whitespace-pre-line">{item.description}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {diagrams.map((diagram, index) => (
                    <div key={index}>
                        <Separator className="my-4" />
                        <h4 className="font-bold text-lg">{diagram.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{diagram.description}</p>
                        <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">{diagram.diagram}</pre>
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
                                    <p className="font-medium mb-2">{index + 1}. {quiz.question}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                                <span className="mr-2 font-bold">{option.charAt(0)}.</span> {option.substring(2)}
                                            </Button>
                                        ))}
                                    </div>
                                    {submittedMcqs && (
                                        <div className="mt-4 p-2 rounded-md bg-primary/10">
                                            <p className="text-sm font-semibold">Correct Answer: {quiz.answer}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{quiz.explanation}</p>
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

    