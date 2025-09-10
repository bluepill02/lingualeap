
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { notFound, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Lightbulb,
  CheckCircle,
  XCircle,
  Play,
  Check,
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
  LessonDeck,
} from '@/lib/types';
import { ConfettiBurst } from '@/components/ui/confetti-burst';
import { ShareableAchievementCard } from '@/components/ui/shareable-achievement-card';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import { getLessonProgress, saveLessonProgress } from '@/services/lesson-progress';

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

function QuizSection({ lessonTitle, quizzes, onQuizComplete }: { lessonTitle: string; quizzes: MicroLesson['quizzes'], onQuizComplete: (isSuccess: boolean) => void }) {
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
    const allCorrect = quizzes.every(
      (quiz, index) => answers[index]?.trim().toLowerCase() === quiz.answer.toLowerCase()
    );
    onQuizComplete(allCorrect);
  };

  const correctAnswers = quizzes.filter(
    (quiz, index) => answers[index] && answers[index]?.trim().toLowerCase() === quiz.answer.toLowerCase()
  ).length;

  if (submitted && correctAnswers === quizzes.length) {
    return (
        <ShareableAchievementCard 
            lessonTitle={lessonTitle}
            score={correctAnswers}
            totalQuestions={quizzes.length}
        />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {quizzes.map((quiz, index) => {
          const isCorrect = submitted && answers[index]?.trim().toLowerCase() === quiz.answer.toLowerCase();
          return (
          <div key={index} className="relative">
            {submitted && isCorrect && <ConfettiBurst />}
            <p className="font-medium mb-2">{quiz.question}</p>
            {quiz.type === 'multiple-choice' ? (
              <div className="space-y-2">
                {(quiz as MultipleChoiceQuiz).options.map((option) => (
                  <Button
                    key={option}
                    variant={
                      submitted && answers[index] === option
                        ? option === quiz.answer
                          ? 'success'
                          : 'destructive'
                        : answers[index] === option ? 'secondary' : 'outline'
                    }
                    className="w-full justify-start text-left h-auto py-2"
                    onClick={() => !submitted && handleOptionChange(index, option)}
                    disabled={submitted}
                  >
                     <div className="flex items-start gap-2">
                        {submitted && option === quiz.answer && <CheckCircle className="h-4 w-4 mt-1" />}
                        {submitted && answers[index] === option && option !== quiz.answer && <XCircle className="h-4 w-4 mt-1" />}
                        <span className="flex-1">{option}</span>
                     </div>
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
            {submitted && !isCorrect && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">Correct answer: {quiz.answer}</p>
            )}
          </div>
        )})}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={answers.includes(null)}>
            Submit Answers
          </Button>
        ) : (
          <div className="p-4 bg-secondary rounded-lg text-center">
            <p className="text-lg font-bold">
              You got {correctAnswers} out of {quizzes.length} correct!
            </p>
             {correctAnswers < quizzes.length && <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">Try Again</Button>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function LessonPageComponent({ lesson, deck }: { lesson: MicroLesson, deck: LessonDeck }) {
  const router = useRouter();
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);

  const currentLessonIndex = deck.lessons.findIndex(l => l.id === lesson.id);
  const totalLessonsInDeck = deck.lessons.length;
  const nextLessonId = currentLessonIndex < totalLessonsInDeck - 1 ? deck.lessons[currentLessonIndex + 1].id : null;
  const progress = ((currentLessonIndex + 1) / totalLessonsInDeck) * 100;
  
  useEffect(() => {
    const progress = getLessonProgress();
    setIsLessonCompleted(progress.includes(lesson.id));
  }, [lesson.id]);

  const handleCompleteLesson = useCallback(() => {
    if (!isLessonCompleted) {
        saveLessonProgress(lesson.id);
        setIsLessonCompleted(true);
    }
  }, [lesson.id, isLessonCompleted]);

  useEffect(() => {
    if (isLessonCompleted && nextLessonId) {
      router.push(`/lessons/${nextLessonId}`);
    } else if (isLessonCompleted && !nextLessonId) {
      // Last lesson in the deck, navigate back to the language page
      const languagePath = deck.id.split('-')[1];
      router.push(`/language/${languagePath}`);
    }
  }, [isLessonCompleted, nextLessonId, deck.id, router]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 md:p-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Back">
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
                <Button variant="ghost" size="icon" aria-label="Cultural Tip">
                  <Lightbulb className="text-yellow-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="prose dark:prose-invert max-w-none text-popover-foreground">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{lesson.culturalTip}</ReactMarkdown>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      <Progress value={progress} className="h-2" />

      <VocabularyTable vocabulary={lesson.vocabulary} />
      <DialogueSection dialogue={lesson.dialogue} />
      <QuizSection lessonTitle={lesson.title} quizzes={lesson.quizzes} onQuizComplete={setIsQuizComplete} />

      <Card className="bg-primary/10">
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{lesson.followUp}</ReactMarkdown>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        {nextLessonId ? (
          <Button size="lg" onClick={handleCompleteLesson} disabled={!isQuizComplete}>
              {isLessonCompleted ? <>Lesson Complete</> : <>Complete & Go to Next Lesson</>} <Check className="ml-2"/>
          </Button>
        ) : (
           <Button size="lg" variant="secondary" onClick={handleCompleteLesson} disabled={!isQuizComplete}>
              {isLessonCompleted ? <>Deck Complete!</> : <>Complete Deck! Back to Course Page</>}
          </Button>
        )}
      </div>
    </div>
  );
}
