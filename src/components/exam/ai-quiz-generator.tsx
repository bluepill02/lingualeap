
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { NeetModule } from '@/lib/types';
import { generateNeetQuiz, NeetQuizGeneratorOutput } from '@/ai/flows/neet-quiz-generator';
import { MarkdownRenderer } from './markdown-renderer';

interface AiQuizGeneratorProps {
  subject: NeetModule['subject'];
  chapter: string;
}

type QuizState = {
  answers: (string | null)[];
  submitted: boolean;
};

type Language = 'English' | 'Tamil';

export function AiQuizGenerator({ subject, chapter }: AiQuizGeneratorProps) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [language, setLanguage] = useState<Language>('English');
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState<NeetQuizGeneratorOutput | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const { toast } = useToast();

  const handleGenerateQuiz = async () => {
    setIsLoading(true);
    setQuizData(null);
    setQuizState(null);
    try {
      const result = await generateNeetQuiz({
        subject,
        chapter,
        numQuestions,
        difficulty,
        language,
      });
      if (!result.quizzes || result.quizzes.length === 0) {
        throw new Error("AI failed to generate questions. Please try again.");
      }
      setQuizData(result);
      setQuizState({
        answers: Array(result.quizzes.length).fill(null),
        submitted: false,
      });
    } catch (error: any) {
      console.error('Error generating AI quiz:', error);
      toast({
        variant: 'destructive',
        title: 'Quiz Generation Failed',
        description: error.message || 'Could not generate the quiz. Please try a different combination.',
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
      (quiz, index) => quizState.answers[index] === quiz.answer
    ).length;
  };

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          AI Practice Question Generator
        </CardTitle>
        <CardDescription>
          Generate a custom quiz on this chapter to test your knowledge further.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="language-select">Language</Label>
            <Select
              value={language}
              onValueChange={(value: Language) => setLanguage(value)}
              disabled={isLoading}
            >
              <SelectTrigger id="language-select">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Tamil">Tamil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="num-questions">Questions</Label>
            <Input
              id="num-questions"
              type="number"
              min="1"
              max="10"
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value))}
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select
              value={difficulty}
              onValueChange={(value: 'Easy' | 'Medium' | 'Hard') => setDifficulty(value)}
              disabled={isLoading}
            >
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-4">
            <Button onClick={handleGenerateQuiz} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Quiz'
              )}
            </Button>
          </div>
        </div>

        {quizData && quizState && (
          <div className="space-y-6 mt-6">
            <h3 className="text-lg font-bold">Your Custom Quiz</h3>
            {quizData.quizzes.map((quiz, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-4 space-y-3">
                  <div className="font-medium prose dark:prose-invert max-w-none">
                    {index + 1}. <MarkdownRenderer>{quiz.question}</MarkdownRenderer>
                  </div>
                  <div className="space-y-2">
                    {quiz.options.map((option) => (
                      <Button
                        key={option}
                        variant={
                          quizState.submitted
                            ? option === quiz.answer
                              ? 'success'
                              : quizState.answers[index] === option
                              ? 'destructive'
                              : 'outline'
                            : quizState.answers[index] === option
                            ? 'secondary'
                            : 'outline'
                        }
                        className="w-full h-auto justify-start text-left py-2"
                        onClick={() => handleOptionChange(index, option)}
                        disabled={quizState.submitted}
                      >
                        <div className="flex items-start gap-2">
                          <div className="prose dark:prose-invert max-w-none text-sm text-current">
                            <MarkdownRenderer>{option}</MarkdownRenderer>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                  {quizState.submitted && (
                    <Alert variant={quizState.answers[index] === quiz.answer ? 'success' : 'destructive'}>
                      {quizState.answers[index] === quiz.answer ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                      <AlertTitle>
                        {quizState.answers[index] === quiz.answer ? 'Correct!' : 'Incorrect'}
                      </AlertTitle>
                      <AlertDescription className="prose dark:prose-invert max-w-none text-sm">
                        <MarkdownRenderer>{quiz.explanation}</MarkdownRenderer>
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            ))}
            {!quizState.submitted ? (
              <Button onClick={handleSubmit} disabled={quizState.answers.includes(null)} size="lg" className="w-full">
                Submit Answers
              </Button>
            ) : (
              <div className="p-4 bg-secondary rounded-lg text-center">
                <p className="text-lg font-bold">
                  You got {getCorrectAnswersCount()} out of {quizData.quizzes.length} correct!
                </p>
                <Button onClick={handleGenerateQuiz} variant="outline" className="mt-4">
                  Generate Another Quiz
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
