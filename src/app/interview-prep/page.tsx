
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { provideInterviewFeedback } from '@/ai/flows/interview-feedback-flow';
import type { InterviewFeedbackOutput } from '@/ai/flows/interview-feedback-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useUser } from '@/context/user-context';
import Link from 'next/link';

const interviewQuestions = [
    "Tell me about yourself.",
    "What are your greatest strengths?",
    "What is your biggest weakness?",
    "Where do you see yourself in five years?",
    "Tell me about a time you faced a challenge and how you overcame it.",
    "Describe a time you had to work with a difficult team member.",
    "Why do you want to work for this company?",
];

export default function InterviewPrepPage() {
    const { user } = useUser();
    const [currentQuestion, setCurrentQuestion] = useState(interviewQuestions[0]);
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<InterviewFeedbackOutput | null>(null);
    const [transcript, setTranscript] = useState('');

    const recognitionRef = useRef<any>(null);
    const { toast } = useToast();
    
    const getFeedback = (finalTranscript: string) => {
        if (finalTranscript.trim().length < 10) { // Simple validation
            toast({ variant: 'destructive', title: 'Answer too short', description: 'Please provide a more detailed answer.' });
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        provideInterviewFeedback({ question: currentQuestion, answer: finalTranscript })
            .then(result => {
                setFeedback(result);
            })
            .catch(err => {
                console.error("Error getting feedback:", err);
                toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback from the AI coach.' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;

            recognitionRef.current.onresult = (event: any) => {
                let interimTranscript = '';
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                setTranscript(prev => prev + finalTranscript);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                toast({ variant: 'destructive', title: 'Recognition Error', description: "Sorry, I couldn't understand that. Please try again." });
                setIsRecording(false);
                setIsLoading(false);
            };

             recognitionRef.current.onend = () => {
                setIsRecording(false);
                // We get the final transcript from the state and trigger feedback generation
                setTranscript(currentTranscript => {
                    if (currentTranscript && !isLoading && !feedback) {
                       getFeedback(currentTranscript);
                    }
                    return currentTranscript;
                });
            };

        }
    }, [toast, currentQuestion, isLoading, feedback]); // Rerun effect if dependencies change
    
    const startRecording = () => {
        if (!recognitionRef.current) {
            toast({ variant: 'destructive', title: 'Browser Not Supported', description: 'Speech recognition is not supported in your browser.' });
            return;
        }
        setTranscript('');
        setFeedback(null);
        setIsRecording(true);
        recognitionRef.current.start();
    }
    
    const stopRecording = () => {
        setIsRecording(false);
        recognitionRef.current.stop();
    }
    
    const handleNextQuestion = () => {
        setFeedback(null);
        setTranscript('');
        setIsLoading(false);
        const currentIndex = interviewQuestions.indexOf(currentQuestion);
        const nextIndex = (currentIndex + 1) % interviewQuestions.length;
        setCurrentQuestion(interviewQuestions[nextIndex]);
    }

    if (!user) {
        return (
             <div className="flex items-center justify-center h-full">
                <Card className="max-w-md text-center p-8">
                     <CardHeader>
                        <CardTitle>Access Denied</CardTitle>
                        <CardDescription>You need to be logged in to use the Interview Simulator.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/auth">
                            <Button>Log In or Sign Up</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto max-w-4xl space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">AI Mock Interview Simulator</h1>
                <p className="text-muted-foreground">Practice your answers and get instant feedback.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Question</CardTitle>
                    <CardDescription>Read the question below, then click "Start Recording" to answer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{currentQuestion}</p>
                </CardContent>
            </Card>
            
            <div className="text-center space-y-4">
                 <Button 
                    size="lg" 
                    className={cn("h-16 w-16 rounded-full", isRecording && "bg-destructive")}
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isLoading}
                >
                    {isRecording ? <MicOff/> : <Mic/>}
                </Button>
                <p className="text-sm text-muted-foreground">{isRecording ? 'Recording... Click to stop.' : (transcript ? 'Recording stopped.' : 'Click to start recording your answer.')}</p>
            </div>

            {transcript && !feedback && (
                <Card className="bg-muted">
                    <CardHeader>
                        <CardTitle>Your Answer</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="italic text-muted-foreground">{transcript}</p>
                         {isLoading && (
                            <div className="flex items-center justify-center mt-4">
                                <Loader2 className="mr-2 animate-spin"/> Analyzing your answer...
                            </div>
                         )}
                    </CardContent>
                </Card>
            )}

            {feedback && (
                <Card className="animate-in fade-in-50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Wand2 className="text-primary"/> AI Feedback</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                             <Label>Confidence Score</Label>
                             <div className="flex items-center gap-2">
                                <Progress value={feedback.confidenceScore * 10} className="w-1/2" />
                                <span className="font-bold">{feedback.confidenceScore}/10</span>
                             </div>
                        </div>

                         <Alert>
                            <MessageSquare className="h-4 w-4"/>
                            <AlertTitle>Content & Structure</AlertTitle>
                            <AlertDescription>{feedback.contentFeedback}</AlertDescription>
                        </Alert>

                         <Alert>
                            <Star className="h-4 w-4"/>
                            <AlertTitle>Clarity & Delivery</AlertTitle>
                            <AlertDescription>{feedback.clarityFeedback}</AlertDescription>
                        </Alert>
                        
                         <Alert variant="success">
                            <BookCheck className="h-4 w-4"/>
                            <AlertTitle>Example Answer</AlertTitle>
                            <AlertDescription>{feedback.exampleAnswer}</AlertDescription>
                        </Alert>
                        
                        <Button onClick={handleNextQuestion}>
                            <RefreshCw className="mr-2"/> Next Question
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
