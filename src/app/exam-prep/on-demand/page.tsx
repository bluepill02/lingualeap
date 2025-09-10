
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateQuiz, QuizGeneratorOutput } from '@/ai/flows/quiz-generator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type QuizState = {
  answers: (string | null)[];
  submitted: boolean;
};

export default function OnDemandQuizPage() {
  const [prompt, setPrompt] = useState('10 NEET-physics problems on optics');
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState<QuizGeneratorOutput | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const { toast } = useToast();

  const handleGenerateQuiz = async () => {
    if (!prompt) {
      toast({
        variant: 'destructive',
        title: 'Prompt is required',
        description: 'Please enter a topic for your quiz.',
      });
      return;
    }
    setIsLoading(true);
    setQuizData(null);
    setQuizState(null);
    try {
      const result = await generateQuiz({ prompt });
      setQuizData(result);
      setQuizState({
        answers: Array(result.quizzes.length).fill(null),
        submitted: false,
      });
    } catch (error) {
      console.error('Error generating quiz:', error);
      toast({
        variant: 'destructive',
        title: 'Quiz Generation Failed',
        description: 'Could not generate the quiz. Please try a different prompt.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleOptionChange = (quizIndex: number, option: string) => {
    if (!quizState || quizState.submitted) return;
    const newAnswers = [...quizState.answers];
    newAnswers[quizIndex] = option;
    setQuizState({ ...quizState, answers: newAnswers });
  };

  const handleSubmit = () => {
    if (!quizState) return;
    setQuizState({ ...quizState, submitted: true });
  };
  
  const getCorrectAnswersCount = () => {
      if (!quizData || !quizState) return 0;
      return quizData.quizzes.filter(
        (quiz, index) => quizState.answers[index] && quizState.answers[index]?.trim().toLowerCase() === quiz.answer.trim().toLowerCase()
      ).length;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold font-headline">On-Demand Quiz Generator</h1>
        <p className="text-muted-foreground">
          Enter any topic, and our AI will instantly create a custom quiz for you.
        </p>
      </header>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="quiz-prompt">Quiz Topic</Label>
            <Input
              id="quiz-prompt"
              placeholder="e.g., 10 questions on the Indian Rebellion of 1857"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button onClick={handleGenerateQuiz} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Generating Quiz...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" />
                Generate Quiz
              </>
            )}
          </Button>
        </CardContent>
      </Card>
      
      {quizData && quizState && (
        <Card className="animate-in fade-in-50">
            <CardHeader>
                <CardTitle>{quizData.title}</CardTitle>
                <CardDescription>Test your knowledge with this AI-generated quiz.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {quizData.quizzes.map((quiz, index) => {
                    const userAnswer = quizState.answers[index];
                    const isAnswerCorrect = userAnswer?.trim().toLowerCase() === quiz.answer.trim().toLowerCase();

                    return (
                        <div key={index} className="p-4 border rounded-lg bg-background/50">
                            <p className="font-medium mb-4">{index + 1}. {quiz.question}</p>
                            <div className="space-y-2">
                                {quiz.options.map((option) => {
                                    const isThisTheCorrectAnswer = option.trim().toLowerCase() === quiz.answer.trim().toLowerCase();
                                    const isThisTheSelectedAnswer = option.trim().toLowerCase() === userAnswer?.trim().toLowerCase();
                                    
                                    let variant: "success" | "destructive" | "outline" | "secondary" = "outline";
                                    if (quizState.submitted) {
                                        if (isThisTheCorrectAnswer) variant = "success";
                                        else if (isThisTheSelectedAnswer && !isAnswerCorrect) variant = "destructive";
                                    } else {
                                        if (isThisTheSelectedAnswer) variant = "secondary";
                                    }

                                    return (
                                        <Button
                                            key={option}
                                            variant={variant}
                                            className="w-full justify-start text-left h-auto py-2"
                                            onClick={() => handleOptionChange(index, option)}
                                            disabled={quizState.submitted}
                                        >
                                            {quizState.submitted && isThisTheCorrectAnswer && <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0" />}
                                            {quizState.submitted && isThisTheSelectedAnswer && !isAnswerCorrect && <XCircle className="mr-2 h-4 w-4 flex-shrink-0" />}
                                            <span className="flex-1">{option}</span>
                                        </Button>
                                    );
                                })}
                            </div>
                            {quizState.submitted && !isAnswerCorrect && (
                                <Alert variant="success" className="mt-4">
                                  <AlertTitle>Correct Answer</AlertTitle>
                                  <AlertDescription>
                                    {quiz.answer}
                                  </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    );
                })}
                {!quizState.submitted ? (
                <Button onClick={handleSubmit} disabled={quizState.answers.includes(null)}>
                    Submit Answers
                </Button>
                ) : (
                <Alert className="text-center">
                    <AlertTitle className="text-lg font-bold">Quiz Complete!</AlertTitle>
                    <AlertDescription>
                        You scored {getCorrectAnswersCount()} out of {quizData.quizzes.length} correct.
                    </AlertDescription>
                    <Button onClick={handleGenerateQuiz} variant="outline" className="mt-4" disabled={isLoading}>
                         {isLoading ? <Loader2 className="mr-2 animate-spin" /> : null}
                        Generate Another Quiz
                    </Button>
                </Alert>
                )}
            </CardContent>
        </Card>
      )}

    </div>
  );
}
