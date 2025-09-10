

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, CheckCircle, XCircle, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateNeetQuiz } from '@/ai/flows/neet-quiz-generator';
import { generateTnpscQuiz } from '@/ai/flows/tnpsc-quiz-generator';
import type { NeetQuizGeneratorOutput, NeetQuizGeneratorInput, TnpscQuizGeneratorInput } from '@/lib/types';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { useUser } from '@/context/user-context';
import Link from 'next/link';

type QuizState = {
  answers: (string | null)[];
  submitted: boolean;
};

type ExamType = 'NEET' | 'TNPSC';
type Subject = 'Physics' | 'Chemistry' | 'Biology' | 'History' | 'Polity' | 'Geography' | 'Economy' | 'General Science' | 'Aptitude' | 'Current Affairs' | 'Language';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Language = 'English' | 'Tamil';

const neetSubjects: Subject[] = ['Physics', 'Chemistry', 'Biology'];
const tnpscSubjects: Subject[] = ['History', 'Polity', 'Geography', 'Economy', 'General Science', 'Aptitude', 'Current Affairs', 'Language'];

function ProUpgradeCard() {
    return (
        <Card className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm space-y-4 p-8 text-center">
            <div className="p-4 bg-primary/10 rounded-full">
                 <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-headline">Unlock the AI Practice Generator</h2>
            <p className="text-muted-foreground">
                Generate unlimited, custom quizzes on any topic instantly. A LinguaLeap Pro feature to supercharge your exam prep.
            </p>
            <Link href="/upgrade">
                <Button size="lg">Upgrade to Pro</Button>
            </Link>
        </Card>
    )
}

export default function OnDemandQuizPage() {
  const { user } = useUser();
  const [prompt, setPrompt] = useState('Optics');
  const [examType, setExamType] = useState<ExamType>('NEET');
  const [subject, setSubject] = useState<Subject>('Physics');
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [language, setLanguage] = useState<Language>('English');

  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState<NeetQuizGeneratorOutput | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const { toast } = useToast();
  const isPro = user?.isPro || false;

  const availableSubjects = examType === 'NEET' ? neetSubjects : tnpscSubjects;

  useEffect(() => {
    // Reset subject when exam type changes
    setSubject(availableSubjects[0]);
  }, [examType]);


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
      let result;
      const commonInput = { chapter: prompt, numQuestions, difficulty, language, subject };

      if (examType === 'NEET') {
        const neetInput: NeetQuizGeneratorInput = commonInput;
        result = await generateNeetQuiz(neetInput);
      } else { 
        const tnpscInput: TnpscQuizGeneratorInput = commonInput;
        result = await generateTnpscQuiz(tnpscInput);
      }
      
      setQuizData(result);
      setQuizState({
        answers: Array(result.quizzes.length).fill(null),
        submitted: false,
      });
    } catch (error: any) {
      console.error('Error generating quiz:', error);
      toast({
        variant: 'destructive',
        title: 'Quiz Generation Failed',
        description: error.message || 'Could not generate the quiz. Please try a different prompt.',
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
        (quiz, index) => quizState.answers[index]?.trim().toLowerCase() === quiz.answer.trim().toLowerCase()
      ).length;
  }


  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold font-headline">On-Demand Practice Generator</h1>
        <p className="text-muted-foreground">
          Enter any topic and select your options. Our AI will instantly create a custom quiz for you.
        </p>
      </header>

      <Card className="relative">
        {!isPro && <ProUpgradeCard />}
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <Label htmlFor="quiz-prompt">Chapter / Topic</Label>
                <Input
                id="quiz-prompt"
                placeholder="e.g., Optics, Indian Rebellion of 1857"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isLoading}
                />
            </div>
             <div>
                <Label htmlFor="exam-type">Exam Type</Label>
                <Select value={examType} onValueChange={(value: ExamType) => setExamType(value)} disabled={isLoading}>
                    <SelectTrigger id="exam-type">
                        <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="NEET">NEET</SelectItem>
                        <SelectItem value="TNPSC">TNPSC</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={subject} onValueChange={(value: Subject) => setSubject(value)} disabled={isLoading}>
                        <SelectTrigger id="subject"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           {availableSubjects.map(sub => (
                             <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                           ))}
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <Label htmlFor="num-questions">Questions</Label>
                    <Select value={String(numQuestions)} onValueChange={(value) => setNumQuestions(Number(value))} disabled={isLoading}>
                        <SelectTrigger id="num-questions"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           {[3, 5, 10].map(num => (
                             <SelectItem key={num} value={String(num)}>{num} Questions</SelectItem>
                           ))}
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={difficulty} onValueChange={(value: Difficulty) => setDifficulty(value)} disabled={isLoading}>
                        <SelectTrigger id="difficulty"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="Easy">Easy</SelectItem>
                           <SelectItem value="Medium">Medium</SelectItem>
                           <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <Label htmlFor="language">Language</Label>
                    <Select value={language} onValueChange={(value: Language) => setLanguage(value)} disabled={isLoading}>
                        <SelectTrigger id="language"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="English">English</SelectItem>
                           <SelectItem value="Tamil">Tamil</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
           </div>

          <Button onClick={handleGenerateQuiz} disabled={isLoading || !isPro} className="w-full">
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
                <CardTitle>{quizData.title || 'Your Custom Quiz'}</CardTitle>
                <CardDescription>Test your knowledge with this AI-generated quiz on {prompt}.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {quizData.quizzes.map((quiz, index) => {
                    const userAnswer = quizState.answers[index];
                    const isAnswerCorrect = userAnswer?.trim().toLowerCase() === quiz.answer.trim().toLowerCase();

                    return (
                        <div key={index} className="p-4 border rounded-lg bg-background/50">
                            <div className="font-medium mb-4 prose dark:prose-invert max-w-none">
                                {index + 1}. <MarkdownRenderer>{quiz.question}</MarkdownRenderer>
                            </div>
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
                                            <div className="flex items-start gap-2">
                                                {quizState.submitted && isThisTheCorrectAnswer && <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />}
                                                {quizState.submitted && isThisTheSelectedAnswer && !isAnswerCorrect && <XCircle className="h-4 w-4 mt-1 flex-shrink-0" />}
                                                <div className="flex-1 prose dark:prose-invert max-w-none text-sm text-current"><MarkdownRenderer>{option}</MarkdownRenderer></div>
                                            </div>
                                        </Button>
                                    );
                                })}
                            </div>
                            {quizState.submitted && !isAnswerCorrect && (
                                <Alert variant="success" className="mt-4">
                                  <AlertTitle>Correct Answer</AlertTitle>
                                  <AlertDescription className="prose dark:prose-invert max-w-none text-sm">
                                    <MarkdownRenderer>{quiz.answer}</MarkdownRenderer>
                                  </AlertDescription>
                                </Alert>
                            )}
                             {quizState.submitted && (
                                <Alert variant="info" className="mt-4">
                                  <AlertTitle>Explanation</AlertTitle>
                                  <AlertDescription className="prose dark:prose-invert max-w-none text-sm">
                                    <MarkdownRenderer>{quiz.explanation}</MarkdownRenderer>
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
