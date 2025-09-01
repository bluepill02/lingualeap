
'use client';

import { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { allMicroLessons, allLessonDecks } from '@/lib/data';
import {
  ArrowLeft,
  Lightbulb,
  Volume2,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import {
  MultipleChoiceQuiz,
  FillInTheBlankQuiz,
  MicroLesson,
} from '@/lib/types';

function VocabularyTable({
  vocabulary,
}: {
  vocabulary: MicroLesson['vocabulary'];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vocabulary</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Word</TableHead>
              <TableHead>Romanization</TableHead>
              <TableHead>Definition</TableHead>
              <TableHead className="text-right">Listen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vocabulary.map((item) => (
              <TableRow key={item.word}>
                <TableCell className="font-bold text-lg">
                  {item.word}
                  <span className="block text-sm font-normal text-muted-foreground">
                    {item.ipa}
                  </span>
                </TableCell>
                <TableCell>{item.romanization}</TableCell>
                <TableCell>{item.definition}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function DialogueSection({ dialogue }: { dialogue: MicroLesson['dialogue'] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialogue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {dialogue.map((line, index) => (
          <div
            key={index}
            className={`flex ${
              line.speaker === 'Customer' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                line.speaker === 'Customer'
                  ? 'bg-primary/10'
                  : 'bg-secondary'
              }`}
            >
              <p className="font-bold text-sm mb-1">{line.speaker}</p>
              <p>{line.line}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function QuizSection({ quizzes }: { quizzes: MicroLesson['quizzes'] }) {
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(quizzes.length).fill(null)
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

  const correctAnswers = quizzes.filter(
    (quiz, index) => answers[index] && answers[index]?.toLowerCase() === quiz.answer.toLowerCase()
  ).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {quizzes.map((quiz, index) => (
          <div key={index}>
            <p className="font-medium mb-2">{quiz.question}</p>
            {quiz.type === 'multiple-choice' ? (
              <div className="space-y-2">
                {(quiz as MultipleChoiceQuiz).options.map((option) => (
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
              You got {correctAnswers} out of {quizzes.length} correct!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const lesson = allMicroLessons.find((l) => l.id === params.id);
  const deck = allLessonDecks.find((d) => d.id === lesson?.deckId);

  if (!lesson || !deck) {
    notFound();
  }

  const progress = 50;

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <div>
            <h1 className="text-2xl font-bold font-headline">{lesson.title}</h1>
            <p className="text-muted-foreground">{deck.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Lightbulb className="text-yellow-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{lesson.culturalTip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      <Progress value={progress} className="h-2" />

      <VocabularyTable vocabulary={lesson.vocabulary} />
      <DialogueSection dialogue={lesson.dialogue} />
      <QuizSection quizzes={lesson.quizzes} />

      <Card className="bg-primary/10">
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{lesson.followUp}</p>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" onClick={() => router.back()}>
          Complete Lesson
        </Button>
      </div>
    </div>
  );
}
