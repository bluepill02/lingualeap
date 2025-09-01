'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { lessons, flashcards as allFlashcards } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Mic,
  Play,
  Check,
  X,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find((l) => l.id === params.id);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  if (!lesson) {
    notFound();
  }

  const lessonFlashcards = lesson.flashcardIds
    .map((id) => allFlashcards.find((fc) => fc.id === id))
    .filter((fc) => fc !== undefined);
  
  if (lessonFlashcards.length === 0) {
    return <p>This lesson has no flashcards.</p>
  }

  const currentFlashcard = lessonFlashcards[currentStep];

  const handleNext = () => {
    if (currentStep < lessonFlashcards.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsQuiz(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleAnswerChange = (questionIndex: number, value: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: value });
  };
  
  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
  };
  
  const progressValue = isQuiz ? 100 : ((currentStep + 1) / lessonFlashcards.length) * 100;
  
  const quizQuestions = lessonFlashcards.map(fc => ({
    question: `What is the translation of "${fc.word}"?`,
    options: [fc.translation, "Apple", "House", "Car"].sort(() => Math.random() - 0.5),
    correctAnswer: fc.translation
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold font-headline mb-2">{lesson.title}</h1>
      <p className="text-muted-foreground mb-4">{lesson.description}</p>
      
      <div className="flex items-center gap-4 mb-6">
        <Progress value={progressValue} className="h-3" />
        <span className="text-sm text-muted-foreground font-semibold">
          {isQuiz ? 'Quiz' : `${currentStep + 1} / ${lessonFlashcards.length}`}
        </span>
      </div>

      {!isQuiz ? (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-sm text-primary font-semibold">Spanish</span>
                    <h2 className="text-5xl font-bold font-headline my-2">{currentFlashcard.word}</h2>
                    <p className="text-2xl text-muted-foreground">{currentFlashcard.phonetic}</p>
                    <Separator className="my-6" />
                    <h3 className="text-3xl font-semibold">{currentFlashcard.translation}</h3>
                    <p className="text-muted-foreground">English</p>
                    
                    <div className="mt-8">
                        <p className="font-semibold mb-2">Pronunciation Practice</p>
                        <div className="flex gap-2">
                            <Button variant="outline"><Volume2 className="mr-2" />Reference</Button>
                            <Button><Mic className="mr-2" />Record</Button>
                            <Button variant="ghost" disabled><Play className="mr-2" />Playback</Button>
                        </div>
                         <p className="text-xs text-muted-foreground mt-2">Practice your pronunciation by recording and comparing.</p>
                    </div>

                </div>
                <div className="relative min-h-[250px] md:min-h-0">
                    <Image src={currentFlashcard.imageUrl} alt={currentFlashcard.word} data-ai-hint="language object" fill className="object-cover" />
                </div>
            </div>
            <div className="flex justify-between p-4 border-t bg-muted/50">
                <Button variant="outline" onClick={handlePrev} disabled={currentStep === 0}>
                <ChevronLeft className="mr-2" />
                Previous
                </Button>
                <Button onClick={handleNext}>
                {currentStep === lessonFlashcards.length - 1 ? 'Go to Quiz' : 'Next'}
                <ChevronRight className="ml-2" />
                </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Lesson Quiz</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                {quizQuestions.map((q, index) => (
                    <div key={index}>
                    <p className="font-semibold mb-4">{index + 1}. {q.question}</p>
                    <RadioGroup 
                        onValueChange={(value) => handleAnswerChange(index, value)} 
                        value={selectedAnswers[index]}
                        disabled={isQuizSubmitted}
                    >
                        {q.options.map((option, i) => (
                        <div key={i} className={`flex items-center space-x-2 p-3 rounded-md border ${
                          isQuizSubmitted ? (option === q.correctAnswer ? 'border-green-500 bg-green-500/10' : (selectedAnswers[index] === option ? 'border-red-500 bg-red-500/10' : '')) : ''
                        }`}>
                            <RadioGroupItem value={option} id={`q${index}-o${i}`} />
                            <Label htmlFor={`q${index}-o${i}`} className="flex-1 cursor-pointer">{option}</Label>
                             {isQuizSubmitted && (
                                option === q.correctAnswer ? <Check className="text-green-500" /> : (selectedAnswers[index] === option ? <X className="text-red-500" /> : null)
                            )}
                        </div>
                        ))}
                    </RadioGroup>
                    </div>
                ))}
                </div>
                 <Button onClick={handleSubmitQuiz} className="mt-8 w-full" disabled={isQuizSubmitted}>
                    Check Answers
                </Button>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
