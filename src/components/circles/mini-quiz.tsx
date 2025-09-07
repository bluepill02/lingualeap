
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface MiniQuizProps {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export function MiniQuiz({ question, options, answer, explanation }: MiniQuizProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const isCorrect = selectedOption === answer;

  return (
    <Card className="bg-muted/50 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Lightbulb className="text-primary"/>
            Peer Review Quiz
        </CardTitle>
        <CardDescription>
            {question}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            {options.map((option, index) => (
                <Button 
                    key={index}
                    variant={
                        showAnswer 
                            ? (option === answer ? 'success' : (selectedOption === option ? 'destructive' : 'outline'))
                            : (selectedOption === option ? 'secondary' : 'outline')
                    }
                    className="w-full justify-start"
                    onClick={() => !showAnswer && setSelectedOption(option)}
                >
                    {option}
                </Button>
            ))}
        </div>
        <Separator/>
        {!showAnswer ? (
             <Button onClick={handleShowAnswer} disabled={!selectedOption} className="w-full">
                Show Answer
            </Button>
        ) : (
            <Alert variant={isCorrect ? 'success' : 'destructive'}>
                <CheckCircle className="w-4 h-4" />
                <AlertTitle>{isCorrect ? 'You were right!' : 'Correct Answer'}</AlertTitle>
                <AlertDescription>
                    <p className="font-bold mb-2">{answer}</p>
                    {explanation}
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
