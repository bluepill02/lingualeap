
'use client';

import * as React from 'react';
import { useState, Fragment, Children, isValidElement } from 'react';
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
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, FileText, Star, Info } from 'lucide-react';
import type { NeetModule, MCQ, AssertionReason, MatchTheColumns, WorkedExample, KeyFormula, KeyDiagram } from '@/lib/types';
import 'katex/dist/katex.min.css';
import { Separator } from '../ui/separator';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { FbdBuilder } from './FbdBuilder';
import { InertiaAnimation } from './InertiaAnimation';
import { ActionReactionAnimation } from './ActionReactionAnimation';
import { LiftAnimation } from './LiftAnimation';
import { BlockMath, InlineMath } from 'react-katex';
import { ProjectileAnimation } from './ProjectileAnimation';
import { cn } from '@/lib/utils';


// Helper component to render bilingual text with distinct colors
const BilingualText = ({ text }: { text?: string }) => {
    if (!text) return null;
    const match = text.match(/^(.*?) \((.*?)\)$/);
    if (match) {
        return (
            <span>
                <span className="text-foreground">{match[1]}</span>
                <span style={{ color: '#FFB74D' }} className="italic"> ({match[2]})</span>
            </span>
        );
    }
    return <span>{text}</span>;
};


export function ConceptNotesCard({ content }: { content: string }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Concept Notes</CardTitle>
                <CardDescription>Detailed explanations of key topics.</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        p: ({ node, ...props }) => {
                            const textContent = Children.toArray(props.children).map(child => {
                                if (isValidElement(child)) {
                                    return Children.toArray(child.props.children).join('');
                                }
                                return child;
                            }).join('');
                            
                            if (textContent.includes('{{')) {
                                if (textContent.trim() === '{{INERTIA_ANIMATION}}') {
                                    return <div className="not-prose my-4"><InertiaAnimation /></div>;
                                }
                                if (textContent.trim() === '{{ACTION_REACTION_ANIMATION}}') {
                                    return <div className="not-prose my-4"><ActionReactionAnimation /></div>;
                                }
                                if (textContent.trim() === '{{LIFT_ANIMATION}}') {
                                    return <div className="not-prose my-4"><LiftAnimation /></div>;
                                }
                                if (textContent.trim() === '{{PROJECTILE_ANIMATION}}') {
                                    return <div className="not-prose my-4"><ProjectileAnimation /></div>;
                                }
                            }
                           
                            return <p className="my-4 leading-relaxed"><BilingualText text={textContent} /></p>;
                        },
                        h3: ({ node, ...props }) => {
                             const textContent = Children.toArray(props.children).join('');
                             return <h3 className="text-xl font-bold mt-8 mb-4 text-foreground border-b-2 border-primary pb-2"><BilingualText text={textContent} /></h3>
                        },
                        h4: ({ node, ...props }) => <h4 className="text-lg font-semibold mt-6 mb-3 text-accent" {...props} />,
                        li: ({ node, ...props }) => {
                           const textContent = Children.toArray(props.children).join('');
                           return <li className="flex items-start gap-3 my-2"><CheckCircle className="w-5 h-5 text-success mt-1 shrink-0"/><span><BilingualText text={textContent} /></span></li>;
                        },
                        blockquote: ({node, ...props}) => <blockquote className="not-prose border-l-4 border-accent bg-accent/10 p-4 my-4 rounded-r-lg text-accent-foreground italic" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-semibold text-foreground/90" {...props} />,
                        em: ({node, ...props}) => <em className="italic text-foreground/80" {...props} />,
                        code: ({ node, className, children, ...props }) => {
                            const match = /language-math/.exec(className || '');
                            const inline = !className;
                            if (inline) {
                                return <InlineMath math={String(children)} />;
                            }
                            return <BlockMath math={String(children)} />;
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
                           <CardTitle><BilingualText text={example.title} /></CardTitle>
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
                            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} className="whitespace-pre-line">{example.problem}</ReactMarkdown>
                                {example.problemTamil && <p style={{color: '#FFB74D'}} className="italic mt-2">{example.problemTamil}</p>}
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
                                        <p className="font-semibold text-base text-foreground">{step.explanation}</p>
                                        {step.explanationTamil && <p style={{color: '#FFB74D'}} className="text-sm italic mt-1">{step.explanationTamil}</p>}
                                        {step.calculation && (
                                            <div className="text-sm font-mono bg-background p-3 rounded-md mt-2 overflow-x-auto border">
                                                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{`$$\\n${step.calculation}\\n$$`}</ReactMarkdown>
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
                                <p className="text-foreground">{example.neetHack}</p>
                                {example.neetHackTamil && <p style={{color: '#FFB74D'}} className="text-xs italic mt-1">{example.neetHackTamil}</p>}
                                </AlertDescription>
                        </Alert>
                        {example.commonPitfall && (
                            <Alert variant="destructive" className="bg-destructive/10">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertTitle>Common Pitfall</AlertTitle>
                                <AlertDescription>
                                    <p className="text-foreground">{example.commonPitfall}</p>
                                    {example.commonPitfallTamil && <p style={{color: '#FFB74D'}} className="text-xs italic mt-1">{example.commonPitfallTamil}</p>}
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

    const BilingualDescription = ({ description }: { description: string }) => {
        const match = description.match(/^(.*?) \((.*?)\)$/);
        if (match) {
            return <span><span className="text-foreground">{match[1]}</span><span style={{ color: '#FFB74D' }} className="italic"> ({match[2]})</span></span>;
        }
        return <span>{description}</span>;
    }


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
                                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{`$$\\n${item.formula}\\n$$`}</ReactMarkdown>
                                </TableCell>
                                <TableCell>
                                    <p className="whitespace-pre-line"><BilingualDescription description={item.description} /></p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {diagrams && diagrams.map((diagram, index) => (
                    <div key={index}>
                        <Separator className="my-4" />
                        <h4 className="font-bold text-lg"><BilingualDescription description={diagram.title} /></h4>
                        <p className="text-muted-foreground text-sm mb-2"><BilingualDescription description={diagram.description} /></p>
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
                                    <p className="font-medium mb-2">{index + 1}. {quiz.question}</p>
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
                                                <span className={cn("mr-2 font-bold")}>{option.charAt(0)}.</span> {option.substring(2)}
                                            </Button>
                                        ))}
                                    </div>
                                    {submittedMcqs && (
                                        <div className="mt-4 p-2 rounded-md bg-secondary/30">
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
                                        <p className="font-medium">{index + 1}. {quiz.question}</p>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
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
                                                            <span className="mr-2 font-bold">{option.charAt(0)}.</span> {option.substring(2)}
                                                        </Button>
                                                    ))}
                                                </div>
                                                <div className="p-2 rounded-md bg-secondary/30">
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
                    {assertionReasons && assertionReasons.length > 0 && <AccordionItem value="assertion-reason">
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
                                            <AccordionContent className="p-2 bg-secondary/30 rounded-md">
                                                 <strong>Answer:</strong> {item.answer}
                                                 {item.explanation && <p className="text-xs text-muted-foreground mt-1">{item.explanation}</p>}
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

    