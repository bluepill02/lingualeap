
'use client';

import { neetContent } from '@/lib/neet/content-loader';
import type { NeetModule, ValidationReport } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function validateModule(module: NeetModule): ValidationReport[] {
    const checks: ValidationReport[] = [];

    // 1. Practice Question Quotas
    checks.push({
        check: 'Question Quotas',
        status: module.workedExamples?.length >= 5 &&
                module.mcqs?.length >= 25 &&
                module.assertionReasons?.length >= 5 &&
                module.matchTheColumns?.length >= 5 ? 'pass' : 'fail',
        message: `Found: ${module.workedExamples?.length || 0} WE, ${module.mcqs?.length || 0} MCQs, ${module.assertionReasons?.length || 0} A/R, ${module.matchTheColumns?.length || 0} MTC.`
    });

    // 2. Content Completeness
    const isComplete = module.learningObjectives?.length > 0 &&
                       module.prerequisites?.length > 0 &&
                       !!module.conceptOverview &&
                       !!module.tamilConnection &&
                       !!module.culturalContext &&
                       module.conceptNotes?.length > 0 &&
                       module.keyTakeaways?.length > 0 &&
                       module.neetTips?.length > 0;
    checks.push({
        check: 'Content Completeness',
        status: isComplete ? 'pass' : 'fail',
        message: isComplete ? 'All key fields are populated.' : 'One or more key text fields are empty.'
    });

    // 3. Bilingual Support
    const hasBilingualNotes = Array.isArray(module.conceptNotes) && module.conceptNotes.every(note => 'tamil' in note && note.tamil);
     const hasBilingualExamples = module.workedExamples?.every(ex => 
        !!ex.titleTamil && 
        ex.solutionSteps.every(step => !!step.explanationTamil) &&
        !!ex.neetHackTamil
    );
     checks.push({
        check: 'Bilingual Support',
        status: hasBilingualNotes && hasBilingualExamples ? 'pass' : 'fail',
        message: hasBilingualNotes && hasBilingualExamples ? 'Notes & Examples are bilingual.' : 'Missing Tamil translations.'
    });

    // 4. Adaptive MCQ Data
    const hasNeetFrequency = module.mcqs?.length > 0 && module.mcqs.every(mcq => mcq.neetFrequency && mcq.neetFrequency > 0);
     checks.push({
        check: 'Adaptive MCQ Data',
        status: hasNeetFrequency ? 'pass' : 'fail',
        message: hasNeetFrequency ? 'All MCQs have frequency rating.' : 'Missing `neetFrequency` in MCQs.'
    });
    
    // 5. High Quality Check
    const isHighQuality = !!module.validationReport && module.validationReport.every(r => r.status === 'pass');
    checks.push({
        check: 'High Quality',
        status: isHighQuality ? 'pass' : 'fail',
        message: isHighQuality ? 'Module passed self-validation.' : 'Module failed self-validation or report is missing.'
    });

    // 6. LaTeX Rendering Check
    // This is a heuristic check for common errors like unescaped backslashes.
    const moduleString = JSON.stringify(module);
    const latexRegex = /(\$\$|\\\[|\\\(|\$).*?(?<!\\)\\(\w+)(.*?)(\$\$|\\\]|\\\)|\$)/g;
    const hasLatexError = moduleString.includes('\\\\'); // A rough check for unescaped sequences
    checks.push({
        check: 'LaTeX Rendering',
        status: !hasLatexError ? 'pass' : 'fail',
        message: !hasLatexError ? 'No obvious LaTeX errors found.' : 'Potential unescaped backslash errors found.'
    });


    return checks;
}


export default function ValidationReportPage() {
    const allModules = Object.values(neetContent);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">NEET Physics Validation Report</h1>
                <p className="text-muted-foreground">
                    Automated checklist verification for all content modules.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Validation Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Chapter</TableHead>
                                <TableHead>Quotas</TableHead>
                                <TableHead>Completeness</TableHead>
                                <TableHead>Bilingual</TableHead>
                                <TableHead>Adaptive Data</TableHead>
                                <TableHead>High Quality</TableHead>
                                <TableHead>LaTeX Rendering</TableHead>
                                <TableHead>Overall Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allModules.map(module => {
                                if (!module || !module.id) return null;
                                const validationResults = validateModule(module);
                                const isOverallPass = validationResults.every(r => r.status === 'pass');

                                const getStatusIcon = (status: 'pass' | 'fail') => 
                                    status === 'pass' 
                                        ? <CheckCircle className="h-5 w-5 text-green-500" />
                                        : <XCircle className="h-5 w-5 text-destructive" />;

                                return (
                                    <TableRow key={module.id}>
                                        <TableCell className="font-bold">{module.chapter}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[0].status)}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[1].status)}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[2].status)}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[3].status)}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[4].status)}</TableCell>
                                        <TableCell>{getStatusIcon(validationResults[5].status)}</TableCell>
                                        <TableCell>
                                            <Badge variant={isOverallPass ? 'success' : 'destructive'}>
                                                {isOverallPass ? 'Pass' : 'Fail'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
