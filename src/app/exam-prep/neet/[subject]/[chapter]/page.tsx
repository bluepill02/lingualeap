
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SyllabusMappingCard, WorkedExamplesCard } from '@/components/exam/exam-components';
import { ExamModule } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle } from 'lucide-react';


// Helper function to parse the specific markdown structure
function parseNeetMarkdown(markdown: string): Partial<ExamModule> {
    const lines = markdown.split('\n');
    const module: Partial<ExamModule> = {
        title: '',
        vocabulary: [],
        quizzes: [],
        workedExamples: [],
        syllabusMapping: [],
        errorAnalysis: [],
    };

    let currentSection: keyof ExamModule | null = null;
    let currentExample: any = null;
    let currentQuiz: any = null;

    for (const line of lines) {
        if (line.startsWith('# ')) {
            module.title = line.substring(2).trim();
            continue;
        }
        if (line.match(/^## \d+\. /)) {
            const sectionTitle = line.substring(line.indexOf(' ')).toLowerCase().trim();
            if (sectionTitle.includes('concept notes')) currentSection = 'vocabulary';
            else if (sectionTitle.includes('worked examples')) currentSection = 'workedExamples';
            else if (sectionTitle.includes('mcqs')) currentSection = 'quizzes';
            else if (sectionTitle.includes('assertion-reason')) currentSection = 'quizzes';
            else if (sectionTitle.includes('match the columns')) currentSection = 'quizzes';
            else currentSection = null;
            continue;
        }

        if (currentSection === 'quizzes') {
             if (line.match(/^\d+\./) || line.match(/^\*\*.+\*\*/)) {
                if (currentQuiz) module.quizzes!.push(currentQuiz);
                currentQuiz = {
                    question: line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, ''),
                    options: [],
                    answer: '',
                    type: 'multiple-choice'
                };
            } else if (line.match(/^[A-D]\)/) && currentQuiz) {
                currentQuiz.options.push(line.substring(3).trim());
            } else if (line.startsWith('**Solution:**') && currentQuiz) {
                currentQuiz.answer = line.substring('**Solution:**'.length).trim().replace(/[A-D]\)\s?/, '');
            }
        }
    }
     if (currentQuiz) module.quizzes!.push(currentQuiz);


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
                            {quiz.options?.map(option => {
                                const isCorrect = option.toLowerCase().includes(quiz.answer.toLowerCase());
                                return (
                                <div key={option} className={`flex items-center gap-2 p-2 rounded-md ${isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-muted/50'}`}>
                                    {isCorrect ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-muted-foreground/50" />}
                                    <span className={isCorrect ? 'font-semibold text-green-400' : ''}>{option}</span>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      )}

    </div>
  );
}
