
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertTitle, AlertDescription as AlertDescriptionComponent } from '@/components/ui/alert';
import type { MCQ } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle, HelpCircle, XCircle, Star, BrainCircuit, User } from 'lucide-react';
import { MarkdownRenderer } from './markdown-renderer';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import Link from 'next/link';

interface PracticeModeProps {
  mcqs: MCQ[];
  answers: (string | null)[];
  submitted: boolean;
  flipped: boolean[];
  onOptionSelect: (qIndex: number, option: string) => void;
  onSubmit: () => void;
  onReset: () => void;
}

export function PracticeMode({
  mcqs,
  answers,
  submitted,
  flipped,
  onOptionSelect,
  onSubmit,
  onReset,
}: PracticeModeProps) {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const totalQuestions = mcqs.length;
  const answeredCount = answers.filter(a => a !== null).length;
  const progress = (answeredCount / totalQuestions) * 100;
  const correctAnswers = mcqs.filter((mcq, index) => answers[index] === mcq.answer).length;

  return (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="text-primary"/>
                    MCQ Practice Mode
                </CardTitle>
                <CardDescription>
                    Select an answer for each question. Click 'Reveal Answers' to check your results.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Progress</span>
                        <span>{answeredCount} / {totalQuestions} Answered</span>
                    </div>
                    <Progress value={progress} />
                </div>
            </CardContent>
        </Card>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">
        {mcqs.map((mcq, qIndex) => {
          const isCorrect = answers[qIndex] === mcq.answer;
          return (
            <motion.div 
                key={qIndex} 
                className="relative"
                initial={false}
                animate={{ rotateY: flipped[qIndex] ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of the card */}
                <Card className="h-full [backface-visibility:hidden]">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between text-base">
                            Question {qIndex + 1}
                            <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={cn('h-4 w-4', (mcq.neetFrequency || 0) > i ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')} />
                                ))}
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="text-sm prose dark:prose-invert max-w-none"><MarkdownRenderer>{mcq.question}</MarkdownRenderer></div>
                        <div className="space-y-2">
                            {mcq.options.map((option, oIndex) => {
                                const isSelected = answers[qIndex] === option;
                                let variant: "success" | "destructive" | "outline" | "default" = 'outline';
                                if (submitted) {
                                    if (option === mcq.answer) variant = 'success';
                                    else if (isSelected) variant = 'destructive';
                                } else {
                                    if (isSelected) variant = 'default';
                                }
                                return (
                                    <Button 
                                        key={oIndex}
                                        variant={variant}
                                        className="w-full h-auto justify-start text-left py-2 flex-wrap whitespace-normal"
                                        onClick={() => onOptionSelect(qIndex, option)}
                                        disabled={submitted}
                                    >
                                        <span className="mr-2 font-bold">{option.charAt(0)}.</span>
                                        <div className="prose dark:prose-invert max-w-none text-sm"><MarkdownRenderer>{option.substring(2)}</MarkdownRenderer></div>
                                    </Button>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
                
                {/* Back of the card */}
                <Card className="absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                             {isCorrect ? <CheckCircle className="text-success"/> : <XCircle className="text-destructive"/>}
                            Question {qIndex + 1} - Result
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Alert variant={isCorrect ? 'success' : 'destructive'}>
                            <AlertTitle>{isCorrect ? "Correct!" : "Incorrect"}</AlertTitle>
                            <AlertDescriptionComponent>
                                {isCorrect ? "Great job!" : `Your answer: ${answers[qIndex] || 'Not answered'}. Correct answer: ${mcq.answer}`}
                            </AlertDescriptionComponent>
                        </Alert>
                         <Alert variant="info">
                            <HelpCircle className="h-4 w-4"/>
                            <AlertTitle>Explanation</AlertTitle>
                            <AlertDescriptionComponent className="prose dark:prose-invert max-w-none text-sm">
                                <MarkdownRenderer>{mcq.explanation}</MarkdownRenderer>
                            </AlertDescriptionComponent>
                        </Alert>
                    </CardContent>
                </Card>
            </motion.div>
          );
        })}
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
            <Button size="lg" onClick={onSubmit} disabled={submitted || answeredCount < totalQuestions || !isAuthenticated}>
                Reveal Answers
            </Button>
             <Button size="lg" variant="outline" onClick={onReset} disabled={!submitted}>
                Practice Again
            </Button>
        </div>

        {!isAuthenticated && (
            <Alert variant="warning" className="text-center">
                <User className="h-4 w-4"/>
                <AlertTitle>Log In to Save Your Progress</AlertTitle>
                <AlertDescriptionComponent>
                    <p>You can view the questions, but you'll need to log in to submit answers and track your performance.</p>
                     <Button asChild variant="link" className="p-0 h-auto">
                        <Link href="/auth">Log In or Sign Up</Link>
                    </Button>
                </AlertDescriptionComponent>
            </Alert>
        )}

        {submitted && (
            <Card className="mt-6 text-center">
                <CardHeader>
                    <CardTitle>Session Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">You scored {correctAnswers} out of {totalQuestions}</p>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
