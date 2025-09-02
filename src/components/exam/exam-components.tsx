
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookCheck, BrainCircuit, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SyllabusMapping, WorkedExample } from '@/lib/types';


export function SyllabusMappingCard({ mapping }: { mapping: SyllabusMapping[] | undefined }) {
    if (!mapping || mapping.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookCheck className="text-primary" />Syllabus & Standards Mapping</CardTitle>
                <CardDescription>Connecting NEET topics to TN State Board & NCERT curriculum.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Topic</TableHead>
                            <TableHead>TN Board Chapter</TableHead>
                            <TableHead>NCERT Reference</TableHead>
                            <TableHead>Expert Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mapping.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-bold">{item.topic}</TableCell>
                                <TableCell>{item.tnBoardChapter}</TableCell>
                                <TableCell>{item.ncertReference}</TableCell>
                                <TableCell className="text-sm">{item.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export function WorkedExamplesCard({ examples }: { examples: WorkedExample[] | undefined }) {
    if (!examples || examples.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BrainCircuit className="text-primary" />Worked Examples</CardTitle>
                <CardDescription>Step-by-step solutions to common exam-level problems.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {examples.map((example, index) => (
                         <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-bold text-left">{index + 1}. {example.problem}</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-2">
                               {example.steps.map(step => (
                                   <div key={step.step} className="p-2 border-l-2 border-primary/50 bg-primary/5">
                                       <p className="font-semibold text-sm">Step {step.step}: {step.explanation}</p>
                                       {step.calculation && (
                                           <p className="text-sm font-mono bg-muted p-2 rounded-md mt-1">{step.calculation}</p>
                                       )}
                                   </div>
                               ))}
                               <div className="p-2 border-l-2 border-green-500/50 bg-green-500/5">
                                   <p className="font-semibold text-sm">Final Answer:</p>
                                   <p className="text-sm font-bold">{example.answer}</p>
                               </div>
                               {example.tip && <Alert className="mt-4 border-accent bg-accent/5">
                                    <Lightbulb className="h-4 w-4 text-accent" />
                                    <AlertTitle>Expert Tip</AlertTitle>
                                    <AlertDescription>{example.tip}</AlertDescription>
                                </Alert>}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}
