
'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import type { MCQ } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle, HelpCircle, XCircle, Star, BrainCircuit } from 'lucide-react';
import { MarkdownRenderer } from './markdown-renderer';

interface PracticeModeProps {
  mcqs: MCQ[];
}

export function PracticeMode({ mcqs }: PracticeModeProps) {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(mcqs.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [flipped, setFlipped] = useState<boolean[]>(Array(mcqs.length).fill(false));

  const totalQuestions = mcqs.length;
  const answeredCount = answers.filter(a => a !== null).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const handleOptionSelect = (qIndex: number, option: string) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[qIndex] = option;
    setAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
    setFlipped(Array(mcqs.length).fill(true));
  };
  
  const handleReset = () => {
      setAnswers(Array(mcqs.length).fill(null));
      setSubmitted(false);
      setFlipped(Array(mcqs.length).fill(false));
  }
  
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
                            {mcq.options.map((option, oIndex) => (
                                <Button 
                                    key={oIndex}
                                    variant={answers[qIndex] === option ? 'secondary' : 'outline'}
                                    className="w-full h-auto justify-start text-left py-2"
                                    onClick={() => handleOptionSelect(qIndex, option)}
                                >
                                    <span className="mr-2 font-bold">{option.charAt(0)}.</span>
                                    <div className="prose dark:prose-invert max-w-none text-sm"><MarkdownRenderer>{option.substring(2)}</MarkdownRenderer></div>
                                </Button>
                            ))}
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
                            <AlertDescription>
                                {isCorrect ? "Great job!" : `Your answer: ${answers[qIndex] || 'Not answered'}. Correct answer: ${mcq.answer}`}
                            </AlertDescription>
                        </Alert>
                         <Alert variant="info">
                            <HelpCircle className="h-4 w-4"/>
                            <AlertTitle>Explanation</AlertTitle>
                            <AlertDescription className="prose dark:prose-invert max-w-none text-sm">
                                <MarkdownRenderer>{mcq.explanation}</MarkdownRenderer>
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </motion.div>
          );
        })}
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
            <Button size="lg" onClick={handleSubmit} disabled={submitted || answeredCount < totalQuestions}>
                Reveal Answers
            </Button>
             <Button size="lg" variant="outline" onClick={handleReset} disabled={!submitted}>
                Practice Again
            </Button>
        </div>
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
