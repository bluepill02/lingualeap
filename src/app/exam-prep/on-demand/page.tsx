
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateQuiz, QuizGeneratorOutput } from '@/ai/flows/quiz-generator';

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
        (quiz, index) => quizState.answers[index] && quizState.answers[index]?.toLowerCase() === quiz.answer.toLowerCase()
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
                {quizData.quizzes.map((quiz, index) => (
                    <div key={index}>
                        <p className="font-medium mb-2">{index + 1}. {quiz.question}</p>
                        <div className="space-y-2">
                            {quiz.options.map((option) => (
                                <Button
                                key={option}
                                variant={
                                    quizState.submitted && quizState.answers[index] === option
                                    ? option === quiz.answer
                                        ? 'default'
                                        : 'destructive'
                                    : 'outline'
                                }
                                className="w-full justify-start text-left h-auto"
                                onClick={() => handleOptionChange(index, option)}
                                disabled={quizState.submitted}
                                >
                                {quizState.submitted && quizState.answers[index] === option &&
                                    (option === quiz.answer ? (
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    ) : (
                                    <XCircle className="mr-2 h-4 w-4" />
                                    ))}
                                {option}
                                </Button>
                            ))}
                        </div>
                         {quizState.submitted && quizState.answers[index]?.toLowerCase() !== quiz.answer.toLowerCase() && (
                            <p className="text-sm text-green-500 mt-2">Correct answer: {quiz.answer}</p>
                        )}
                    </div>
                ))}
                {!quizState.submitted ? (
                <Button onClick={handleSubmit} disabled={quizState.answers.includes(null)}>
                    Submit Answers
                </Button>
                ) : (
                <div className="p-4 bg-secondary rounded-lg text-center">
                    <p className="text-lg font-bold">
                    You got {getCorrectAnswersCount()} out of {quizData.quizzes.length} correct!
                    </p>
                </div>
                )}
            </CardContent>
        </Card>
      )}

    </div>
  );
}
