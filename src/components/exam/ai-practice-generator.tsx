

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, CheckCircle, XCircle, FileQuestion, Copy, RefreshCw } from 'lucide-react';
import type { NeetModule, NeetQuizGeneratorOutput, TnpscQuizGeneratorInput, NeetFlashcardGeneratorInput, NeetFlashcardGeneratorOutput, NeetQuizGeneratorInput } from '@/lib/types';
import { generateNeetQuiz } from '@/ai/flows/neet-quiz-generator';
import { generateNeetFlashcards } from '@/ai/flows/neet-flashcard-generator';
import { MarkdownRenderer } from './markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from "framer-motion";

interface AiPracticeGeneratorProps {
  subject: NeetModule['subject'] | 'History' | 'Polity' | 'Geography' | 'Economy' | 'General Science';
  chapter: string;
  generatorFn: (input: any) => Promise<NeetQuizGeneratorOutput>;
}

type QuizState = {
  answers: (string | null)[];
  submitted: boolean;
};

type Language = 'English' | 'Tamil';
type PracticeType = 'mcq' | 'flashcards';

export function AiPracticeGenerator({ subject, chapter, generatorFn }: AiPracticeGeneratorProps) {
  const [numItems, setNumItems] = useState(5);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [language, setLanguage] = useState<Language>('English');
  const [practiceType, setPracticeType] = useState<PracticeType>('mcq');
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [quizData, setQuizData] = useState<NeetQuizGeneratorOutput | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const [flashcardData, setFlashcardData] = useState<NeetFlashcardGeneratorOutput | null>(null);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);

  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setQuizData(null);
    setQuizState(null);
    setFlashcardData(null);
    setFlippedStates([]);

    try {
        if (practiceType === 'mcq') {
            await handleGenerateMcqs();
        } else {
            await handleGenerateFlashcards();
        }
    } catch (error: any) {
        console.error(`Error generating AI ${practiceType}:`, error);
        toast({
            variant: 'destructive',
            title: 'Generation Failed',
            description: error.message || `Could not generate ${practiceType}. Please try a different combination.`,
        });
    } finally {
        setIsLoading(false);
    }
  };

  const handleGenerateMcqs = async () => {
    const formattedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
    const input = {
        subject: formattedSubject,
        chapter,
        numQuestions: numItems,
        difficulty,
        language,
    };
    const result = await generatorFn(input);
    if (!result.quizzes || result.quizzes.length === 0) {
        throw new Error("AI failed to generate questions. Please try again.");
    }
    setQuizData(result);
    setQuizState({
        answers: Array(result.quizzes.length).fill(null),
        submitted: false,
    });
  }

  const handleGenerateFlashcards = async () => {
    const result = await generateNeetFlashcards({
        subject: subject as NeetQuizGeneratorInput['subject'], // Assuming flashcards are only for NEET subjects for now
        chapter,
        numFlashcards: numItems,
        difficulty,
        language,
    });
     if (!result.flashcards || result.flashcards.length === 0) {
        throw new Error("AI failed to generate flashcards. Please try again.");
    }
    setFlashcardData(result);
    setFlippedStates(Array(result.flashcards.length).fill(false));
  }

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
  
  const handleFlipCard = (index: number) => {
      setFlippedStates(current => {
          const newFlipped = [...current];
          newFlipped[index] = !newFlipped[index];
          return newFlipped;
      })
  }

  const getCorrectAnswersCount = () => {
    if (!quizData || !quizState) return 0;
    return quizData.quizzes.filter(
      (quiz, index) => quizState.answers[index] === quiz.answer
    ).length;
  };

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader className="card-padding-lg">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          AI Practice Generator
        </CardTitle>
        <CardDescription>
          Generate a custom quiz or a set of flashcards on this chapter to test your knowledge further.
        </CardDescription>
      </CardHeader>
      <CardContent className="card-padding-lg space-y-6">
        
         <Tabs value={practiceType} onValueChange={(value) => setPracticeType(value as PracticeType)}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mcq"><FileQuestion className="mr-2"/> MCQs</TabsTrigger>
                <TabsTrigger value="flashcards"><Copy className="mr-2"/> Flashcards</TabsTrigger>
            </TabsList>
        </Tabs>

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
            <Label htmlFor="num-items">Quantity</Label>
            <Input
              id="num-items"
              type="number"
              min="1"
              max="10"
              value={numItems}
              onChange={(e) => setNumItems(parseInt(e.target.value))}
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
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Generating {practiceType}...
                </>
              ) : (
                `Generate ${practiceType === 'mcq' ? 'MCQs' : 'Flashcards'}`
              )}
            </Button>
          </div>
        </div>

        {practiceType === 'mcq' && quizData && quizState && (
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
                        className="w-full h-auto justify-start text-left py-2 flex-wrap whitespace-normal"
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
                <Button onClick={handleGenerate} variant="outline" className="mt-4">
                  Generate Another Quiz
                </Button>
              </div>
            )}
          </div>
        )}

        {practiceType === 'flashcards' && flashcardData && (
             <div className="space-y-6 mt-6">
                 <h3 className="text-lg font-bold">Your Custom Flashcards</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {flashcardData.flashcards.map((card, index) => (
                         <div key={index} className="[perspective:1000px] h-64">
                            <motion.div
                                className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
                                initial={false}
                                animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                onClick={() => handleFlipCard(index)}
                            >
                                {/* Front */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center p-4 bg-secondary rounded-lg border">
                                    <div className="prose dark:prose-invert text-center"><MarkdownRenderer>{card.front}</MarkdownRenderer></div>
                                </div>
                                {/* Back */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 bg-background rounded-lg border">
                                    <div className="prose dark:prose-invert text-center text-sm"><MarkdownRenderer>{card.back}</MarkdownRenderer></div>
                                </div>
                            </motion.div>
                         </div>
                    ))}
                 </div>
             </div>
        )}

      </CardContent>
    </Card>
  );
}
