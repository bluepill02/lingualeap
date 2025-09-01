
'use client';

import { useState } from 'react';
import { neetPhysicsElectrostatics } from '@/lib/exam-data-neet-electrostatics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SyllabusMappingCard, WorkedExamplesCard } from '@/components/exam/exam-components';

export default function NeetElectrostaticsExamPrepPage() {
    const module = neetPhysicsElectrostatics;
    const [answers, setAnswers] = useState<(string | null)[]>(
      Array(module.quizzes.length).fill(null)
    );
    const [submitted, setSubmitted] = useState(false);
  
    const handleOptionChange = (quizIndex: number, option: string) => {
      const newAnswers = [...answers];
      newAnswers[quizIndex] = option;
      setAnswers(newAnswers);
    };
  
    const handleSubmit = () => {
      setSubmitted(true);
    };

    const correctAnswers = module.quizzes.filter(
        (quiz, index) => answers[index] && answers[index]?.toLowerCase() === quiz.answer.toLowerCase()
      ).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
      <header>
        <h1 className="text-3xl font-bold font-headline">{module.title}</h1>
        <p className="text-muted-foreground">
          Language: {module.language} | Exam: {module.examName} | Category: {module.category}
        </p>
      </header>

      <SyllabusMappingCard mapping={module.syllabusMapping} />

      <Card>
        <CardHeader>
          <CardTitle>Vocabulary List</CardTitle>
          <CardDescription>Key Physics Terms for NEET</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead>POS</TableHead>
                <TableHead>Definition</TableHead>
                <TableHead>Sample Sentence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {module.vocabulary.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-bold">
                    {item.word}
                    <span className="block text-sm font-normal text-muted-foreground">{item.romanization}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.partOfSpeech}</Badge>
                  </TableCell>
                  <TableCell>{item.definition}</TableCell>
                  <TableCell>
                    {item.sentence}
                    <span className="block text-xs italic text-muted-foreground mt-1">
                      "{item.sentenceTranslation}"
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Quiz Section</CardTitle>
          <CardDescription>Test your knowledge with these questions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
        {module.quizzes.map((quiz, index) => (
          <div key={index}>
            <p className="font-medium mb-2">{index + 1}. {quiz.question}</p>
            {quiz.type === 'multiple-choice' ? (
              <div className="space-y-2">
                {(quiz.options ?? []).map((option) => (
                  <Button
                    key={option}
                    variant={
                      submitted && answers[index] === option
                        ? option === quiz.answer
                          ? 'default'
                          : 'destructive'
                        : 'outline'
                    }
                    className="w-full justify-start"
                    onClick={() => !submitted && handleOptionChange(index, option)}
                    disabled={submitted}
                  >
                    {submitted &&
                      answers[index] === option &&
                      (option === quiz.answer ? (
                        <CheckCircle className="mr-2 h-4 w-4" />
                      ) : (
                        <XCircle className="mr-2 h-4 w-4" />
                      ))}
                    {option}
                  </Button>
                ))}
              </div>
            ) : (
              <Input
                placeholder="Your answer..."
                value={answers[index] || ''}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                disabled={submitted}
                className={
                  submitted
                    ? answers[index]?.toLowerCase() === quiz.answer.toLowerCase()
                      ? 'border-green-500'
                      : 'border-destructive'
                    : ''
                }
              />
            )}
            {submitted && answers[index]?.toLowerCase() !== quiz.answer.toLowerCase() && (
                <p className="text-sm text-green-500 mt-1">Correct answer: {quiz.answer}</p>
            )}
          </div>
        ))}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={answers.includes(null)}>
            Submit Answers
          </Button>
        ) : (
          <div className="p-4 bg-secondary rounded-lg text-center">
            <p className="text-lg font-bold">
              You got {correctAnswers} out of {module.quizzes.length} correct!
            </p>
          </div>
        )}
        </CardContent>
      </Card>

      <Separator />

      <WorkedExamplesCard examples={module.workedExamples} />

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-yellow-500" />Error Analysis</CardTitle>
            <CardDescription>Common pitfalls and tips to avoid them.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {module.errorAnalysis.map((item, index) => (
                <div key={index} className="p-4 border-l-4 border-yellow-500 bg-yellow-500/10 rounded-r-md">
                    <h4 className="font-semibold">Pitfall: {item.pitfall}</h4>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Tip:</strong> {item.tip}</p>
                </div>
            ))}
        </CardContent>
      </Card>

    </div>
  );
}
