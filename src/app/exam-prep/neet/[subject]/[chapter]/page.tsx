
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SyllabusMappingCard, WorkedExamplesCard } from '@/components/exam/exam-components';
import { ExamModule, ExamQuizQuestion } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

// Helper function to render markdown-like text to React elements
const renderMarkdownContent = (content: string) => {
    return content.split('\n').map((line, index) => {
        if (line.startsWith('```')) {
            let codeLines = [];
            let i = index + 1;
            while (i < content.split('\n').length && !content.split('\n')[i].startsWith('```')) {
                codeLines.push(content.split('\n')[i]);
                i++;
            }
            return (
                <pre key={index} className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap font-mono">
                    <code>{codeLines.join('\n')}</code>
                </pre>
            );
        }

        if (line.match(/^\s{0,3}- /)) {
            return <li key={index} className="ml-4 list-disc">{line.substring(line.indexOf('- ') + 2)}</li>;
        }
        if (line.match(/^\s{0,3}\*/)) {
            return <li key={index} className="ml-4 list-disc font-semibold">{line.substring(line.indexOf('*') + 1)}</li>;
        }

        if (line.trim() === '') {
            return <br key={index} />;
        }

        return <p key={index} className="my-2">{line}</p>;
    });
};


// Updated parser for all sections
function parseNeetMarkdown(markdown: string): Partial<ExamModule> {
    const lines = markdown.split('\n');
    const module: Partial<ExamModule> & { conceptNotes?: string } = {
        title: '',
        quizzes: [],
        workedExamples: [],
        errorAnalysis: [],
    };

    let currentSection: keyof ExamModule | 'conceptNotes' | null = null;
    let currentQuiz: any = null;
    let currentExample: any = null;
    let currentError: any = null;
    let conceptNoteLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('# ')) {
            module.title = line.substring(2).trim();
            continue;
        }
        if (line.match(/^## /)) {
            const sectionTitle = line.substring(line.indexOf(' ')).toLowerCase().trim();
            if (sectionTitle.includes('concept notes')) {
                currentSection = 'conceptNotes';
            } else if (sectionTitle.includes('worked examples')) {
                currentSection = 'workedExamples';
            } else if (sectionTitle.includes('mcqs') || sectionTitle.includes('assertion-reason') || sectionTitle.includes('match the columns')) {
                currentSection = 'quizzes';
            } else if (sectionTitle.includes('error analysis')) {
                currentSection = 'errorAnalysis';
            } else {
                currentSection = null;
            }
            continue;
        }

        if (currentSection === 'conceptNotes') {
            conceptNoteLines.push(line);
        } else if (currentSection === 'quizzes') {
            if (line.match(/^\d+\./) || line.match(/^\*\*.+\*\*/)) {
                if (currentQuiz) module.quizzes!.push(currentQuiz);
                currentQuiz = {
                    question: line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').trim(),
                    options: [],
                    answer: '',
                    type: line.includes('Assertion') ? 'assertion-reason' : 'multiple-choice'
                };
            } else if (line.match(/^[A-Z]\)/i) && currentQuiz) {
                currentQuiz.options?.push(line.substring(3).trim());
            } else if (line.toLowerCase().startsWith('**solution:**') && currentQuiz) {
                currentQuiz.answer = line.substring('**Solution:**'.length).trim().replace(/^[A-Z]\)\s?/, '');
            } else if (line.toLowerCase().startsWith('**விடை:**') && currentQuiz) {
                currentQuiz.answer = line.substring('**விடை:**'.length).trim().replace(/^[A-Z]\)\s?/, '');
            }
        } else if (currentSection === 'workedExamples') {
            if (line.match(/^**Example \d+:/i)) {
                 if (currentExample) module.workedExamples!.push(currentExample);
                 currentExample = { problem: line.replace(/\*\*Example \d+:/i, '').trim(), steps: [], answer: '', tip: '' };
            } else if (line.match(/^Solution:|தீர்வு:/i) && currentExample) {
                let solutionText = line.replace(/^Solution:|தீர்வு:/i, '').trim();
                i++;
                while(i < lines.length && !lines[i].match(/^**Example \d+:/i) && !lines[i].match(/^## /)) {
                    solutionText += '\n' + lines[i];
                    i++;
                }
                currentExample.answer = solutionText;
                i--; // Decrement to re-evaluate the line that broke the loop
            }
        }
    }
    if (currentQuiz) module.quizzes!.push(currentQuiz);
    if (currentExample) module.workedExamples!.push(currentExample);
    if (conceptNoteLines.length > 0) {
        module.conceptNotes = conceptNoteLines.join('\n');
    }

    return module;
}


export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  
  const filePath = path.join(process.cwd(), 'content', 'neet', subject, `${chapter}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const module = parseNeetMarkdown(fileContent);

  const title = chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
       <header>
        <h1 className="text-4xl font-bold font-headline">{title}</h1>
        <p className="text-muted-foreground capitalize">
          NEET Preparation Module | {subject}
        </p>
      </header>
      
      {(module as any).conceptNotes && (
        <Card>
            <CardHeader>
                <CardTitle>Concept Notes</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                {renderMarkdownContent((module as any).conceptNotes)}
            </CardContent>
        </Card>
      )}

      {module.workedExamples && module.workedExamples.length > 0 && (
          <Card>
            <CardHeader>
                <CardTitle>Worked Examples</CardTitle>
                <CardDescription>Step-by-step solutions to common problems.</CardDescription>
            </CardHeader>
            <CardContent>
                {module.workedExamples.map((example, index) => (
                    <div key={index} className="mb-4">
                        <h4 className="font-bold">{index + 1}. {example.problem}</h4>
                        <div className="p-2 border-l-2 border-green-500/50 bg-green-500/5 mt-2">
                            <p className="font-semibold text-sm">Answer:</p>
                            <div className="text-sm prose dark:prose-invert max-w-none">{renderMarkdownContent(example.answer)}</div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      )}

      {module.quizzes && module.quizzes.length > 0 && (
          <Card>
            <CardHeader>
                <CardTitle>Practice Questions</CardTitle>
                <CardDescription>Test your knowledge with these MCQs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {module.quizzes.map((quiz, index) => (
                    <div key={index}>
                        <p className="font-medium mb-2">{quiz.question}</p>
                        <div className="space-y-2">
                            {quiz.options?.map((option, optIndex) => {
                                const isCorrect = option.toLowerCase().includes(quiz.answer.toLowerCase());
                                const optionPrefix = `${String.fromCharCode(65 + optIndex)}) `;
                                return (
                                <div key={option} className={`flex items-center gap-2 p-2 rounded-md ${isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-muted/50'}`}>
                                    {isCorrect ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> : <XCircle className="h-4 w-4 text-muted-foreground/50 shrink-0" />}
                                    <span className={isCorrect ? 'font-semibold text-green-400' : ''}>{optionPrefix}{option}</span>
                                </div>
                                )
                            })}
                        </div>
                         {!quiz.options || quiz.options.length === 0 && (
                             <div className="p-2 rounded-md bg-green-500/10 border border-green-500/20">
                                <span className="font-semibold text-green-400">Answer: {quiz.answer}</span>
                             </div>
                         )}
                    </div>
                ))}
            </CardContent>
        </Card>
      )}

    </div>
  );
}
