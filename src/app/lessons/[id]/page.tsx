'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { lessons, flashcards as allFlashcards } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  ChevronRight,
  Volume2,
  Mic,
  RotateCcw,
  Lightbulb,
  BookCopy,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const lesson = lessons.find((l) => l.id === params.id);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!lesson) {
    notFound();
  }

  const lessonFlashcards = lesson.flashcardIds
    .map((id) => allFlashcards.find((fc) => fc.id === id))
    .filter((fc): fc is NonNullable<typeof fc> => fc !== undefined);
  
  if (lessonFlashcards.length === 0) {
    return <p>This lesson has no flashcards.</p>
  }

  const currentFlashcard = lessonFlashcards[currentStep];

  const handleNext = () => {
    if (currentStep < lessonFlashcards.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsFlipped(false);
    } else {
      // Logic to end lesson or go to quiz can be added here
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft />
            </Button>
            <div>
                <h1 className="text-2xl font-bold font-headline">{lesson.title}</h1>
                <p className="text-muted-foreground">Business Hindi • A1</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm">{currentStep + 1} / {lessonFlashcards.length}</Badge>
            <Button variant="ghost" size="icon">
                <Lightbulb className="text-yellow-400" />
            </Button>
        </div>
      </header>

      <Card
        className="relative min-h-[350px] cursor-pointer bg-card/50 flex flex-col justify-center items-center text-center"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {!isFlipped ? (
            <>
                <Badge variant="secondary" className="mb-4">interjection</Badge>
                <h2 className="text-6xl font-bold font-headline text-primary">
                    {currentFlashcard.word}
                </h2>
                <p className="text-xl text-muted-foreground mt-2">{currentFlashcard.phonetic}</p>
                <p className="text-sm text-muted-foreground mt-8">Press Space or click to reveal translation</p>
            </>
        ) : (
            <>
                <h2 className="text-6xl font-bold font-headline text-primary">
                    {currentFlashcard.translation}
                </h2>
                <p className="text-xl text-muted-foreground mt-2">{currentFlashcard.word}</p>
            </>
        )}
        
        <CardContent className="absolute bottom-6 flex items-center justify-center gap-2">
            <Button size="icon" variant="outline" onClick={(e) => e.stopPropagation()}>
                <Volume2 />
            </Button>
            <Button size="icon" variant="outline" onClick={(e) => e.stopPropagation()}>
                <Mic />
            </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center my-6">
        <Button variant="ghost" onClick={handlePrev} disabled={currentStep === 0}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === lessonFlashcards.length -1}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Card className="bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <BookCopy className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-bold">Learning Objectives</h3>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Greet people professionally in Hindi</li>
                    <li>Order food and beverages</li>
                    <li>Handle basic transactions</li>
                    <li>Use polite expressions</li>
                </ul>
                <div className="mt-4 bg-primary/10 p-3 rounded-md">
                    <p className="font-semibold text-sm">Cultural Note:</p>
                    <p className="text-sm text-muted-foreground">In Chennai, English and Tamil are widely spoken, but Hindi is appreciated in business contexts.</p>
                </div>
              </div>
            </div>
          </CardContent>
      </Card>
    </div>
  );
}
