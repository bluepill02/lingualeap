
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
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, FileText, Star } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample, KeyFormula, KeyDiagram } from '@/lib/types';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Separator } from '../ui/separator';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { FbdBuilder } from './FbdBuilder';

export function ConceptNotesCard({ content }: { content: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Concept Notes</CardTitle>
                <CardDescription>Detailed explanations of key topics.</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        p: ({node, ...props}) => <p className="my-2 leading-relaxed text-muted-foreground" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
                        li: ({node, ...props}) => <li className="ml-5 list-disc my-1" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                        em: ({node, ...props}) => <i className="italic" {...props} />,
                        code: ({node, ...props}) => {
                            if (node?.children[0]?.type === 'text') {
                                return <BlockMath math={node.children[0].value} />;
                            }
                            return <code {...props} />;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
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

                        {example.fbd && example.fbd.map((fbdItem, fbdIndex) => (
                            <FbdBuilder key={fbdIndex} {...fbdItem} />
                        ))}

                        <div>
                            <p className="font-bold mb-2">Solution:</p>
                             <div className="space-y-4">
                                {example.solutionSteps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="p-2 border-l-2 border-primary/50 bg-primary/5 rounded-r-md">
                                        <p className="font-semibold text-sm">Step {stepIndex + 1}: {step.explanation}</p>
                                        {step.calculation && (
                                            <div className="text-sm font-mono bg-muted p-2 rounded-md mt-1 overflow-x-auto">
                                                <BlockMath math={step.calculation} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
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
                        {diagram.fbd ? (
                           <div className="flex justify-center py-4">
                             <FbdBuilder {...diagram.fbd} />
                           </div>
                        ) : (
                           <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">{diagram.diagram}</pre>
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
            className={`w-3 h-3 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
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
                    
                    {/* Adaptive MCQ Practice */}
                     <AccordionItem value="adaptive-mcqs">
                        <AccordionTrigger className="text-xl font-headline px-4 bg-muted rounded-md">
                           Adaptive MCQ Practice
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            <Alert>
                                <Lightbulb className="h-4 w-4" />
                                <AlertTitle>Focus on What Matters</AlertTitle>
                                <AlertDescription>
                                    These questions are sorted by how frequently similar concepts have appeared in past NEET exams. High-frequency questions are marked with more stars.
                                </AlertDescription>
                            </Alert>
                            {[...mcqs].sort((a,b) => (b.neetFrequency || 0) - (a.neetFrequency || 0)).map((quiz, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-medium">{index + 1}. {quiz.question}</p>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <FrequencyStars count={quiz.neetFrequency || 0} />
                                            <span>({quiz.neetFrequency}/5)</span>
                                        </div>
                                    </div>
                                    <Accordion type="single" collapsible className="w-full mt-2">
                                        <AccordionItem value="solution">
                                            <AccordionTrigger className="text-xs p-2">View Options & Solution</AccordionTrigger>
                                            <AccordionContent className="p-2 space-y-4">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {quiz.options.map((option) => (
                                                        <Button
                                                            key={option}
                                                            variant={option === quiz.answer ? 'default' : 'outline'}
                                                            className="w-full justify-start text-left h-auto cursor-default"
                                                        >
                                                            {option === quiz.answer && <CheckCircle className="mr-2 h-4 w-4" />}
                                                            <span className="mr-2 font-bold">{option.charAt(0)}.</span> {option.substring(2)}
                                                        </Button>
                                                    ))}
                                                </div>
                                                <div className="p-2 rounded-md bg-primary/10">
                                                    <p className="text-sm font-semibold">Correct Answer: {quiz.answer}</p>
                                                    <p className="text-xs text-muted-foreground mt-1">{quiz.explanation}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
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
                                                <strong>Answer:</strong> {item.explanation}
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
                                                 {item.explanation && <p className="text-xs text-muted-foreground mt-1">{item.explanation}</p>}
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
