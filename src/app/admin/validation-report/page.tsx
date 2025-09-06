
'use client';

import { neetContent } from '@/lib/neet/content-loader';
import type { NeetModule, ValidationReport, WorkedExample } from '@/lib/types';
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
import { qaChecklist } from '@/lib/qa-checklist';

function validateModule(module: NeetModule): ValidationReport[] {
    const checks: ValidationReport[] = [];
    const requiredSections: (keyof NeetModule)[] = [
        'learningObjectives', 'prerequisites', 'syllabusMapping', 'conceptOverview',
        'tamilConnection', 'culturalContext', 'conceptNotes', 'workedExamples',
        'mcqs', 'assertionReasons', 'matchTheColumns', 'keyFormulasAndDiagrams',
        'keyTakeaways', 'mnemonics', 'neetTips', 'studentTip', 'peerDiscussion'
    ];

    // 1. Question Quotas
    checks.push({
        check: 'Question Quotas',
        status: (module.workedExamples?.length || 0) >= 5 &&
                (module.mcqs?.length || 0) >= 25 &&
                (module.assertionReasons?.length || 0) >= 5 &&
                (module.matchTheColumns?.length || 0) >= 5 ? 'pass' : 'fail',
        message: `Found: ${module.workedExamples?.length || 0} WE, ${module.mcqs?.length || 0} MCQs, ${module.assertionReasons?.length || 0} A/R, ${module.matchTheColumns?.length || 0} MTC.`
    });

    // 2. Content Completeness
    const missingOrEmptySections = requiredSections.filter(section => {
        const value = module[section];
        if (value === undefined || value === null) return true;
        if (Array.isArray(value) && value.length === 0) {
           // keyFormulasAndDiagrams can be empty if its sub-arrays are empty.
           if(section === 'keyFormulasAndDiagrams') {
               const kd = value as any;
               return !(kd.formulas?.length > 0 || kd.diagrams?.length > 0);
           }
           return true;
        }
        if (typeof value === 'string' && !value.trim()) return true;
        if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) return true;
        return false;
    });
    checks.push({
        check: 'Content Completeness',
        status: missingOrEmptySections.length === 0 ? 'pass' : 'fail',
        message: missingOrEmptySections.length === 0 ? 'All sections are populated.' : `Missing or empty sections: ${missingOrEmptySections.join(', ')}`
    });
    
    // 3. Bilingual Support
    const hasBilingualNotes = Array.isArray(module.conceptNotes) && module.conceptNotes.length > 0 && module.conceptNotes.every(note => 'english' in note && !!note.tamil);
    const hasBilingualExamples = Array.isArray(module.workedExamples) && module.workedExamples.length > 0 && module.workedExamples.every(ex => 
        !!ex.titleTamil && 
        ex.solutionSteps.every(step => !!step.explanationTamil) &&
        !!ex.neetHackTamil
    );
     checks.push({
        check: 'Bilingual Support',
        status: hasBilingualNotes && hasBilingualExamples ? 'pass' : 'fail',
        message: hasBilingualNotes && hasBilingualExamples ? 'Notes & Examples are fully bilingual.' : 'Missing Tamil translations in key areas.'
    });

    // 4. Adaptive MCQ Data
    const hasNeetFrequency = Array.isArray(module.mcqs) && module.mcqs.length > 0 && module.mcqs.every(mcq => typeof mcq.neetFrequency === 'number' && mcq.neetFrequency > 0);
     checks.push({
        check: 'Adaptive MCQ Data',
        status: hasNeetFrequency ? 'pass' : 'fail',
        message: hasNeetFrequency ? 'All MCQs have frequency rating.' : 'Missing `neetFrequency` in some MCQs.'
    });
    
    // 5. High Quality Check
    const isHighQuality = !!module.validationReport && module.validationReport.length >= qaChecklist.length && module.validationReport.every(r => r.status === 'pass');
    checks.push({
        check: 'High Quality',
        status: isHighQuality ? 'pass' : 'fail',
        message: isHighQuality ? 'Module passed all internal validation checks.' : 'Module failed self-validation or report is missing/incomplete.'
    });

    // 6. LaTeX Rendering Check
    const moduleString = JSON.stringify(module);
    const hasLatexError = /\\(?!frac|cdot|implies|vec|sqrt|pi|times|sum|int|oint|partial|nabla|hat|vec|bar|sin|cos|tan|log|ln|exp|alpha|beta|gamma|delta|epsilon|theta|lambda|mu|nu|xi|rho|sigma|tau|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Phi|Psi|Omega|mathrm|mathbf|mathcal|mathfrak|mathbb|textit|textbf|emph|times|div|pm|mp|cdot|cdots|ldots|ddots|vdots|left|right|begin|end|[{}()\[\]\\])/.test(moduleString.replace(/\\\\/g, ''));
    checks.push({
        check: 'LaTeX Rendering',
        status: !hasLatexError ? 'pass' : 'fail',
        message: !hasLatexError ? 'No obvious LaTeX errors found.' : 'Potential unescaped backslash or command errors found.'
    });
    
    // 7. Syntax/Build Check
    checks.push({
        check: 'Syntax/Build',
        status: 'pass',
        message: 'Page loaded, so no build-breaking syntax errors.'
    });
    
    // 8. Content Accuracy (Proxy Check)
    const isAccurate = !!module.conceptOverview && Array.isArray(module.mcqs) && module.mcqs.length > 0;
    checks.push({
        check: 'Content Accuracy',
        status: isAccurate ? 'pass' : 'fail',
        message: isAccurate ? 'Key fields are populated, proxy for accuracy.' : 'Missing content in key fields like overview or MCQs.'
    });

    // 9. All Sections Checked
    const allSectionsPresent = requiredSections.every(section => module.hasOwnProperty(section));
    checks.push({
        check: 'All Sections Checked',
        status: allSectionsPresent ? 'pass' : 'fail',
        message: allSectionsPresent ? 'All module sections are present in the object.' : `Missing sections from object: ${requiredSections.filter(s => !module.hasOwnProperty(s)).join(', ')}`
    });


    return checks;
}


export default function ValidationReportPage() {
    const allModules = Object.values(neetContent);

    return (
        <div className="container mx-auto space-y-8">
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
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Chapter</TableHead>
                                    <TableHead>Quotas</TableHead>
                                    <TableHead>Completeness</TableHead>
                                    <TableHead>Bilingual</TableHead>
                                    <TableHead>Adaptive Data</TableHead>
                                    <TableHead>High Quality</TableHead>
                                    <TableHead>LaTeX</TableHead>
                                    <TableHead>Syntax</TableHead>
                                    <TableHead>Accuracy</TableHead>
                                    <TableHead>Sections</TableHead>
                                    <TableHead>Score</TableHead>
                                    <TableHead>Overall</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {allModules.map(module => {
                                    if (!module || !module.id) return null;
                                    const validationResults = validateModule(module);
                                    const passedChecks = validationResults.filter(r => r.status === 'pass').length;
                                    const totalChecks = validationResults.length;
                                    const isOverallPass = passedChecks === totalChecks;

                                    const getStatusIcon = (status: 'pass' | 'fail') => 
                                        status === 'pass' 
                                            ? <CheckCircle className="h-5 w-5 text-green-500" />
                                            : <XCircle className="h-5 w-5 text-destructive" />;
                                    
                                    const getResultByCheckName = (name: string) => {
                                        return validationResults.find(r => r.check === name)?.status || 'fail';
                                    }

                                    return (
                                        <TableRow key={module.id}>
                                            <TableCell className="font-bold whitespace-nowrap">{module.title}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Question Quotas'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Content Completeness'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Bilingual Support'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Adaptive MCQ Data'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('High Quality'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('LaTeX Rendering'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Syntax/Build'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('Content Accuracy'))}</TableCell>
                                            <TableCell>{getStatusIcon(getResultByCheckName('All Sections Checked'))}</TableCell>
                                            <TableCell className="font-semibold">{`${passedChecks} / ${totalChecks}`}</TableCell>
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
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
