
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Megaphone, Lightbulb, ClipboardCheck, MessageSquareQuote, CheckCircle, Sparkles, Loader2, Star, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { provideMissionFeedback } from '@/ai/flows/mission-feedback-flow';
import type { MissionSubmissionInput, MissionFeedbackOutput } from '@/lib/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { saveMissionSubmission, getLatestMissionSubmission } from '@/services/missions';
import { Skeleton } from '@/components/ui/skeleton';

const mission = {
    id: 'newtons-third-law',
    title: "Mission: Explain Newton's Third Law",
    concept: "Newton's Third Law",
    scenario: "Balancing carts at a temple chariot festival (தேர் திருவிழா). Explain why when you push a cart, you also feel a push back."
};

interface MCQFormState {
    question: string;
    options: string[];
    correctAnswer: string;
}

const initialMcqState: MCQFormState[] = [
    { question: '', options: ['', '', '', ''], correctAnswer: '' },
    { question: '', options: ['', '', '', ''], correctAnswer: '' },
];


export default function PeerTeachingPage() {
    const [script, setScript] = useState('');
    const [diagram, setDiagram] = useState('');
    const [mcqs, setMcqs] = useState<MCQFormState[]>(initialMcqState);
    const [isLoading, setIsLoading] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [feedback, setFeedback] = useState<MissionFeedbackOutput | null>(null);
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

    const { toast } = useToast();
    
     useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                try {
                    const latestSubmission = await getLatestMissionSubmission(user.uid, mission.id);
                    if (latestSubmission) {
                        setScript(latestSubmission.submission.script);
                        setDiagram(latestSubmission.submission.diagramDescription);
                        setMcqs(latestSubmission.submission.mcqs);
                        setFeedback(latestSubmission.feedback);
                    }
                } catch (error) {
                    console.error("Could not load previous submission:", error);
                    toast({
                        variant: 'destructive',
                        title: 'Error',
                        description: 'Could not load your previous submission.',
                    });
                }
            } else {
                setCurrentUser(null);
            }
            setIsPageLoading(false);
        });
        return () => unsubscribe();
    }, [toast]);


    const handleMcqChange = (mcqIndex: number, field: 'question' | `option-${number}` | 'correctAnswer', value: string) => {
        const newMcqs = [...mcqs];
        const mcqToUpdate = { ...newMcqs[mcqIndex] };

        if (field === 'question') {
            mcqToUpdate.question = value;
        } else if (field.startsWith('option-')) {
            const optionIndex = parseInt(field.split('-')[1], 10);
            const oldOptionValue = mcqToUpdate.options[optionIndex];
            
            mcqToUpdate.options = [...mcqToUpdate.options];
            mcqToUpdate.options[optionIndex] = value;
            
            if (mcqToUpdate.correctAnswer === oldOptionValue) {
                mcqToUpdate.correctAnswer = '';
            }

        } else if (field === 'correctAnswer') {
            mcqToUpdate.correctAnswer = value;
        }

        newMcqs[mcqIndex] = mcqToUpdate;
        setMcqs(newMcqs);
    };


    const handleSubmit = async () => {
        if (!currentUser) {
            toast({ variant: 'destructive', title: 'You must be logged in to submit.' });
            return;
        }
        setIsLoading(true);
        setFeedback(null);
        try {
            const submission: MissionSubmissionInput = {
                concept: mission.concept,
                script: script,
                diagramDescription: diagram,
                mcqs: mcqs 
            };

            const feedbackResult = await provideMissionFeedback(submission);
            setFeedback(feedbackResult);
            
            await saveMissionSubmission(currentUser.uid, mission.id, submission, feedbackResult);

            toast({
                title: "Feedback Received and Saved!",
                description: "Your submission has been reviewed and saved to your profile.",
            });
        } catch (error) {
             console.error('Error getting feedback:', error);
            toast({
                variant: 'destructive',
                title: 'Submission Failed',
                description: 'Could not get feedback from the AI editor. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    }
    
    const resetForm = () => {
        setScript('');
        setDiagram('');
        setMcqs(initialMcqState);
        setFeedback(null);
    }
    
    if (isPageLoading) {
        return (
            <div className="container mx-auto space-y-8">
                 <div>
                    <h1 className="text-3xl font-bold font-headline flex items-center gap-2"><Megaphone className="text-primary"/> Peer-Teaching Mission</h1>
                    <p className="text-muted-foreground">Solidify your knowledge by teaching it to others.</p>
                </div>
                <Card><CardContent className="p-6"><Skeleton className="h-24"/></CardContent></Card>
                <Card><CardContent className="p-6"><Skeleton className="h-32"/></CardContent></Card>
                 <Card><CardContent className="p-6"><Skeleton className="h-48"/></CardContent></Card>
            </div>
        )
    }

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2"><Megaphone className="text-primary"/> Peer-Teaching Mission</h1>
        <p className="text-muted-foreground">Solidify your knowledge by teaching it to others.</p>
      </div>

       <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle>{mission.title}</CardTitle>
                <CardDescription>{mission.scenario}</CardDescription>
            </CardHeader>
       </Card>

      <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageSquareQuote/>1. Micro-Lesson Script</CardTitle>
                <CardDescription>Write a script for a one-minute video explaining the concept. Use both English and Tamil where helpful.</CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea 
                    placeholder="e.g., 'Hello friends! Today let's talk about Newton's Third Law, or நியூட்டனின் மூன்றாம் விதி...'"
                    className="min-h-[150px]"
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    disabled={!currentUser}
                />
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sparkles/>2. Diagram/Analogy</CardTitle>
                <CardDescription>Describe the diagram or animation you would use to illustrate your point.</CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea 
                    placeholder="e.g., 'A simple sketch of two people on skateboards pushing each other apart. Arrows show the equal and opposite forces.'"
                    value={diagram}
                    onChange={(e) => setDiagram(e.target.value)}
                    disabled={!currentUser}
                />
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardCheck/>3. Multiple-Choice Questions</CardTitle>
                <CardDescription>Create two MCQs that test common misunderstandings of the concept.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {mcqs.map((mcq, mcqIndex) => (
                    <div key={mcqIndex} className="space-y-3 p-4 border rounded-md">
                        <Label htmlFor={`mcq${mcqIndex}-q`}>Question {mcqIndex + 1}</Label>
                        <Input id={`mcq${mcqIndex}-q`} placeholder="Question text..." value={mcq.question} onChange={e => handleMcqChange(mcqIndex, 'question', e.target.value)} disabled={!currentUser}/>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {mcq.options.map((option, optionIndex) => (
                                <Input key={optionIndex} placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`} value={option} onChange={e => handleMcqChange(mcqIndex, `option-${optionIndex}`, e.target.value)} disabled={!currentUser} />
                           ))}
                        </div>
                        
                         <div>
                            <Label className="mb-2 block">Correct Answer</Label>
                             <RadioGroup value={mcq.correctAnswer} onValueChange={value => handleMcqChange(mcqIndex, 'correctAnswer', value)} className="flex gap-4" disabled={!currentUser}>
                               {mcq.options.map((option, optionIndex) => (
                                 option.trim() && (
                                    <div key={optionIndex} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option} id={`mcq${mcqIndex}-opt${optionIndex}`} />
                                        <Label htmlFor={`mcq${mcqIndex}-opt${optionIndex}`}>{String.fromCharCode(65 + optionIndex)}</Label>
                                    </div>
                                 )
                               ))}
                            </RadioGroup>
                         </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
      
      {!currentUser && (
          <Alert variant="warning">
              <AlertTitle>Please Log In</AlertTitle>
              <AlertDescription>You need to be logged in to submit a mission and receive feedback.</AlertDescription>
          </Alert>
      )}

       <Button size="lg" className="w-full" onClick={handleSubmit} disabled={isLoading || !currentUser}>
           {isLoading ? <><Loader2 className="mr-2 animate-spin"/> Submitting to AI Editor...</> : "Submit Mission for Feedback"}
        </Button>

        {feedback && (
            <Card className="animate-in fade-in-50">
                <CardHeader>
                    <CardTitle>AI Editor Feedback</CardTitle>
                    <CardDescription>Here's a review of your submission. Great job!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex justify-center">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={cn("w-8 h-8", i < feedback.teachingStars ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')} />
                            ))}
                        </div>
                    </div>
                    <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>Clarity & Language Feedback</AlertTitle>
                        <AlertDescription>{feedback.clarityFeedback}</AlertDescription>
                    </Alert>
                    <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>Conceptual Accuracy Feedback</AlertTitle>
                        <AlertDescription>{feedback.accuracyFeedback}</AlertDescription>
                    </Alert>
                     <Alert className="bg-accent/10 border-accent">
                        <Lightbulb className="h-4 w-4 text-accent"/>
                        <AlertTitle>Analogy Suggestion</AlertTitle>
                        <AlertDescription>{feedback.analogySuggestion}</AlertDescription>
                    </Alert>
                    <Separator />
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="secondary" className="flex-1">Submit to Peer Review</Button>
                        <Button variant="outline" className="flex-1" onClick={resetForm}>
                            <RefreshCw className="mr-2" /> Start New Mission
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )}

    </div>
  );
}
