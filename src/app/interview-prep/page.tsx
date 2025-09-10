
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { provideInterviewFeedback, InterviewFeedbackOutput } from '@/ai/flows/interview-feedback-flow';
import { generateInterviewQuestion } from '@/ai/flows/interview-question-generator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useUser } from '@/context/user-context';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const countFillerWords = (text: string): number => {
    const fillerWords = /\b(um|uh|er|ah|like|okay|right|so|you know)\b/gi;
    const matches = text.match(fillerWords);
    return matches ? matches.length : 0;
}

const highlightSTAR = (text: string, part: string | undefined): string => {
    if (!part || !text) return text;
    // A simple implementation. A more robust solution might use AI to get character indices.
    const regex = new RegExp(`(${part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, `<mark class="bg-primary/20 rounded-sm p-0.5">$1</mark>`);
};


export default function InterviewPrepPage() {
    const { user } = useUser();
    const [jobRole, setJobRole] = useState('Software Engineer');
    const [currentQuestion, setCurrentQuestion] = useState("Tell me about a time you faced a challenge and how you overcame it.");
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<InterviewFeedbackOutput | null>(null);
    const [transcript, setTranscript] = useState('');
    const [fillerWordCount, setFillerWordCount] = useState(0);

    const recognitionRef = useRef<any>(null);
    const { toast } = useToast();
    
    const getFeedback = useCallback(async (finalTranscript: string) => {
        if (finalTranscript.trim().length < 20) {
            toast({ variant: 'destructive', title: 'Answer too short', description: 'Please provide a more detailed answer for effective feedback.' });
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setFillerWordCount(countFillerWords(finalTranscript));

        try {
            const result = await provideInterviewFeedback({
                question: currentQuestion,
                answer: finalTranscript,
                jobRole: jobRole
            });
            setFeedback(result);
        } catch (err) {
            console.error("Error getting feedback:", err);
            toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback from the AI coach.' });
        } finally {
            setIsLoading(false);
        }
    }, [currentQuestion, jobRole, toast]);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;

            let finalTranscript = '';
            recognitionRef.current.onresult = (event: any) => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript + ' ';
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                setTranscript(finalTranscript + interimTranscript);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                toast({ variant: 'destructive', title: 'Recognition Error', description: "Sorry, I couldn't understand that. Please try again." });
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
                if (finalTranscript.trim()) {
                    getFeedback(finalTranscript);
                }
            };

        }
    }, [toast, getFeedback]); 
    
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
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        // onend will handle the rest
    }
    
    const handleNextQuestion = async () => {
        setFeedback(null);
        setTranscript('');
        setIsLoading(true);
        try {
            const result = await generateInterviewQuestion({ jobRole });
            setCurrentQuestion(result.question);
        } catch(e) {
            console.error("Failed to generate new question", e);
            // Fallback to a generic question
            const genericQuestions = interviewQuestions.filter(q => q !== currentQuestion);
            setCurrentQuestion(genericQuestions[Math.floor(Math.random() * genericQuestions.length)]);
            toast({ variant: 'destructive', title: 'Could not generate a specific question', description: 'Showing a general question instead.'});
        } finally {
            setIsLoading(false);
        }
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
    
    const highlightedTranscript = React.useMemo(() => {
        if (!feedback || !transcript) return transcript;
        let html = transcript;
        html = highlightSTAR(html, feedback.starAnalysis.situation);
        html = highlightSTAR(html, feedback.starAnalysis.task);
        html = highlightSTAR(html, feedback.starAnalysis.action);
        html = highlightSTAR(html, feedback.starAnalysis.result);
        return html;
    }, [transcript, feedback]);

    return (
        <div className="container mx-auto max-w-4xl space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">AI Mock Interview Simulator</h1>
                <p className="text-muted-foreground">Practice for your next big interview and get instant, detailed feedback.</p>
            </div>
            
            <Card>
                 <CardHeader>
                    <CardTitle>Your Target Role</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <Label htmlFor="job-role">What job role are you preparing for?</Label>
                     <Input id="job-role" value={jobRole} onChange={e => setJobRole(e.target.value)} placeholder="e.g., 'Frontend Developer', 'Marketing Manager'"/>
                 </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Question</CardTitle>
                    <CardDescription>Read the question, then click the microphone to answer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{currentQuestion}</p>
                </CardContent>
            </Card>
            
            <div className="text-center space-y-4">
                 <Button 
                    size="lg" 
                    className={cn("h-16 w-16 rounded-full transition-all duration-300", isRecording && "bg-destructive scale-110")}
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isLoading}
                    aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
                >
                    {isRecording ? <MicOff/> : <Mic/>}
                </Button>
                <p className="text-sm text-muted-foreground">{isRecording ? 'Recording... Click to stop.' : (transcript && !isLoading ? 'Recording stopped.' : 'Click to start recording your answer.')}</p>
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
                        <CardTitle className="flex items-center gap-2"><Wand2 className="text-primary"/> AI Feedback Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="p-4">
                                <Label>Confidence Score</Label>
                                <div className="flex items-center gap-2 mt-1">
                                    <Progress value={feedback.confidenceScore * 10} className="w-full" />
                                    <span className="font-bold text-primary">{feedback.confidenceScore}/10</span>
                                </div>
                            </Card>
                             <Card className="p-4">
                                <Label>Filler Words</Label>
                                 <p className="text-2xl font-bold">{fillerWordCount}</p>
                                 <p className="text-xs text-muted-foreground">Count of 'um', 'uh', 'like', etc.</p>
                             </Card>
                        </div>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><Star className="text-yellow-400"/> STAR Method Analysis</CardTitle>
                                <CardDescription>Behavioral answers are strongest when they follow this structure. We've highlighted the parts of your answer our AI identified for each section.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                               <div dangerouslySetInnerHTML={{ __html: highlightedTranscript }} className="p-3 bg-muted rounded-md text-sm italic" />
                                <div className="space-y-3">
                                   <div className="flex items-start gap-2">
                                     <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.situation ? 'text-green-500' : 'text-muted-foreground/50')} />
                                     <div>
                                       <h4 className="font-semibold">Situation</h4>
                                       <p className="text-sm text-muted-foreground">{feedback.starAnalysis.situationFeedback}</p>
                                     </div>
                                   </div>
                                   <div className="flex items-start gap-2">
                                     <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.task ? 'text-green-500' : 'text-muted-foreground/50')} />
                                     <div>
                                       <h4 className="font-semibold">Task</h4>
                                       <p className="text-sm text-muted-foreground">{feedback.starAnalysis.taskFeedback}</p>
                                     </div>
                                   </div>
                                   <div className="flex items-start gap-2">
                                     <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.action ? 'text-green-500' : 'text-muted-foreground/50')} />
                                     <div>
                                       <h4 className="font-semibold">Action</h4>
                                       <p className="text-sm text-muted-foreground">{feedback.starAnalysis.actionFeedback}</p>
                                     </div>
                                   </div>
                                    <div className="flex items-start gap-2">
                                     <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.result ? 'text-green-500' : 'text-muted-foreground/50')} />
                                     <div>
                                       <h4 className="font-semibold">Result</h4>
                                       <p className="text-sm text-muted-foreground">{feedback.starAnalysis.resultFeedback}</p>
                                     </div>
                                   </div>
                                </div>
                            </CardContent>
                        </Card>

                         <Alert>
                            <MessageSquare className="h-4 w-4"/>
                            <AlertTitle>Keyword Analysis</AlertTitle>
                            <AlertDescription>{feedback.keywordFeedback}</AlertDescription>
                        </Alert>
                        
                         <Alert variant="success">
                            <BookCheck className="h-4 w-4"/>
                            <AlertTitle>Actionable Tips</AlertTitle>
                            <AlertDescription>
                                <ul className="list-disc list-inside">
                                    {feedback.actionableTips.map((tip, i) => <li key={i}>{tip}</li>)}
                                </ul>
                            </AlertDescription>
                        </Alert>
                        
                        <Button onClick={handleNextQuestion} disabled={isLoading}>
                            <RefreshCw className="mr-2"/> Try Another Question
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

const interviewQuestions = [
    "Tell me about yourself.",
    "What are your greatest strengths?",
    "What is your biggest weakness?",
    "Where do you see yourself in five years?",
    "Tell me about a time you faced a challenge and how you overcame it.",
    "Describe a time you had to work with a difficult team member.",
    "Why do you want to work for this company?",
];

