
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck, Sparkles, CheckCircle, Play } from 'lucide-react';
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

const SESSION_LENGTH = 3; // Number of questions in one session

const countFillerWords = (text: string): number => {
    const fillerWords = /\b(um|uh|er|ah|like|okay|right|so|you know)\b/gi;
    const matches = text.match(fillerWords);
    return matches ? matches.length : 0;
}

const highlightSTAR = (text: string, part: string | undefined): string => {
    if (!part || !text) return text;
    const regex = new RegExp(`(${part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, `<mark class="bg-primary/20 rounded-sm p-0.5">$1</mark>`);
};

type SessionState = 'idle' | 'generating_questions' | 'in_progress' | 'analyzing' | 'report';

interface AnswerRecord {
    question: string;
    transcript: string;
    feedback: InterviewFeedbackOutput | null;
}

export default function InterviewPrepPage() {
    const { user } = useUser();
    const [jobRole, setJobRole] = useState('Software Engineer');
    const [sessionState, setSessionState] = useState<SessionState>('idle');

    // Session data
    const [questions, setQuestions] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<AnswerRecord[]>([]);
    
    // Recording state
    const [isRecording, setIsRecording] = useState(false);
    const [currentTranscript, setCurrentTranscript] = useState('');

    const recognitionRef = useRef<any>(null);
    const { toast } = useToast();
    
    const initializeSpeechRecognition = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            toast({ variant: 'destructive', title: 'Browser Not Supported', description: 'Speech recognition is not supported in your browser.' });
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        let finalTranscript = '';

        recognition.onstart = () => {
            finalTranscript = '';
            setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + ' ';
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            setCurrentTranscript(finalTranscript + interimTranscript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            toast({ variant: 'destructive', title: 'Recognition Error', description: "Sorry, I couldn't understand that. Please try again." });
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
            if (finalTranscript.trim()) {
                const newAnswer: AnswerRecord = {
                    question: questions[currentQuestionIndex],
                    transcript: finalTranscript,
                    feedback: null, // Feedback will be generated at the end
                };
                setAnswers(prev => [...prev, newAnswer]);
                
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                    setCurrentTranscript('');
                } else {
                    // Last question answered, move to analysis
                    generateAllFeedback([...answers, newAnswer]);
                }
            }
        };
        
        recognitionRef.current = recognition;

    }, [questions, currentQuestionIndex, toast, answers]); // Dependencies

     useEffect(() => {
        initializeSpeechRecognition();
    }, [initializeSpeechRecognition]);


    const startInterviewSession = async () => {
        setSessionState('generating_questions');
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setCurrentTranscript('');

        try {
            const generatedQuestions = await Promise.all(
                Array.from({ length: SESSION_LENGTH }).map(() => generateInterviewQuestion({ jobRole }))
            );
            setQuestions(generatedQuestions.map(q => q.question));
            setSessionState('in_progress');
        } catch (e) {
            console.error("Failed to generate questions", e);
            toast({ variant: 'destructive', title: 'Failed to Start Session', description: 'Could not generate interview questions. Please try again.'});
            setSessionState('idle');
        }
    };
    
    const generateAllFeedback = async (finalAnswers: AnswerRecord[]) => {
        setSessionState('analyzing');
        try {
            const feedbackPromises = finalAnswers.map(ans => 
                provideInterviewFeedback({
                    question: ans.question,
                    answer: ans.transcript,
                    jobRole,
                })
            );
            const feedbacks = await Promise.all(feedbackPromises);
            const updatedAnswers = finalAnswers.map((ans, index) => ({
                ...ans,
                feedback: feedbacks[index],
            }));
            setAnswers(updatedAnswers);
            setSessionState('report');
        } catch (err) {
             console.error("Error getting feedback:", err);
            toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback for one or more answers.' });
            setSessionState('in_progress'); // Go back to allow retry? Or idle?
        }
    };

    const startRecording = () => {
        if (recognitionRef.current) {
            setCurrentTranscript('');
            recognitionRef.current.start();
        }
    }
    
    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
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

    const renderIdleState = () => (
        <>
            <Card>
                 <CardHeader>
                    <CardTitle>Your Target Role</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <Label htmlFor="job-role">What job role are you preparing for?</Label>
                     <Input id="job-role" value={jobRole} onChange={e => setJobRole(e.target.value)} placeholder="e.g., 'Frontend Developer', 'Marketing Manager'"/>
                 </CardContent>
            </Card>
            <div className="text-center">
                <Button size="lg" onClick={startInterviewSession}>
                    <Play className="mr-2"/>
                    Start Mock Interview ({SESSION_LENGTH} Questions)
                </Button>
            </div>
        </>
    );

    const renderGeneratingState = () => (
        <div className="text-center space-y-4 py-12">
            <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary"/>
            <h2 className="text-xl font-semibold">Preparing your interview session...</h2>
            <p className="text-muted-foreground">Generating questions tailored for a '{jobRole}'.</p>
        </div>
    );
    
    const renderInProgressState = () => (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                       <CardTitle>Question {currentQuestionIndex + 1} of {SESSION_LENGTH}</CardTitle>
                       <Progress value={((currentQuestionIndex + 1) / SESSION_LENGTH) * 100} className="w-1/2" />
                    </div>
                    <CardDescription>Read the question, then click the microphone to answer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{questions[currentQuestionIndex]}</p>
                </CardContent>
            </Card>
            
            <div className="text-center space-y-4">
                 <Button 
                    size="lg" 
                    className={cn("h-16 w-16 rounded-full transition-all duration-300", isRecording && "bg-destructive scale-110")}
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={sessionState !== 'in_progress'}
                    aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
                >
                    {isRecording ? <MicOff/> : <Mic/>}
                </Button>
                <p className="text-sm text-muted-foreground">{isRecording ? 'Recording... Click to stop.' : 'Click to start recording your answer.'}</p>
            </div>

            {currentTranscript && (
                 <Card className="bg-muted">
                    <CardHeader>
                        <CardTitle>Your Answer (In Progress)</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="italic text-muted-foreground">{currentTranscript}</p>
                    </CardContent>
                </Card>
            )}
        </>
    );
    
    const renderAnalyzingState = () => (
         <div className="text-center space-y-4 py-12">
            <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary"/>
            <h2 className="text-xl font-semibold">Generating Your Feedback Report...</h2>
            <p className="text-muted-foreground">The AI coach is analyzing your answers.</p>
        </div>
    );
    
    const renderReportState = () => (
         <Card className="animate-in fade-in-50">
            <CardHeader className="text-center">
                <Wand2 className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="text-2xl">AI Feedback Report</CardTitle>
                <CardDescription>Here's a breakdown of your performance across {answers.length} questions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {answers.map((answer, index) => {
                    const feedback = answer.feedback;
                    if (!feedback) return null;
                    
                    const highlightedTranscript = highlightSTAR(answer.transcript, feedback.starAnalysis.situation) +
                                                 highlightSTAR('', feedback.starAnalysis.task) +
                                                 highlightSTAR('', feedback.starAnalysis.action) +
                                                 highlightSTAR('', feedback.starAnalysis.result);

                    return (
                        <Card key={index} className="bg-card/50">
                            <CardHeader>
                               <CardTitle className="text-lg">Q{index + 1}: {answer.question}</CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Alert>
                                        <Star className="h-4 w-4" />
                                        <AlertTitle>Confidence Score</AlertTitle>
                                        <AlertDescription className="font-bold text-lg">{feedback.confidenceScore}/10</AlertDescription>
                                    </Alert>
                                     <Alert>
                                        <MessageSquare className="h-4 w-4" />
                                        <AlertTitle>Filler Words</AlertTitle>
                                        <AlertDescription className="font-bold text-lg">{countFillerWords(answer.transcript)}</AlertDescription>
                                    </Alert>
                                </div>
                                <details>
                                    <summary className="cursor-pointer font-semibold text-sm">View STAR Analysis & Transcript</summary>
                                    <div className="mt-2 space-y-4 p-4 bg-muted rounded-md">
                                        <p className="text-xs text-muted-foreground italic" dangerouslySetInnerHTML={{ __html: highlightedTranscript }} />
                                        <Separator />
                                         <div className="space-y-2 text-sm">
                                           <div className="flex items-start gap-2">
                                                <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.situation ? 'text-green-500' : 'text-muted-foreground/50')} />
                                                <div><strong className="font-semibold">Situation:</strong> {feedback.starAnalysis.situationFeedback}</div>
                                            </div>
                                             <div className="flex items-start gap-2">
                                                <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.task ? 'text-green-500' : 'text-muted-foreground/50')} />
                                                <div><strong className="font-semibold">Task:</strong> {feedback.starAnalysis.taskFeedback}</div>
                                            </div>
                                             <div className="flex items-start gap-2">
                                                <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.action ? 'text-green-500' : 'text-muted-foreground/50')} />
                                                <div><strong className="font-semibold">Action:</strong> {feedback.starAnalysis.actionFeedback}</div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className={cn('mt-1 h-4 w-4 flex-shrink-0', feedback.starAnalysis.result ? 'text-green-500' : 'text-muted-foreground/50')} />
                                                <div><strong className="font-semibold">Result:</strong> {feedback.starAnalysis.resultFeedback}</div>
                                            </div>
                                         </div>
                                    </div>
                                </details>
                                <Alert>
                                    <Sparkles className="h-4 w-4"/>
                                    <AlertTitle>Keyword Feedback</AlertTitle>
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
                             </CardContent>
                        </Card>
                    )
                })}
                <div className="text-center">
                    <Button onClick={() => setSessionState('idle')}>
                        <RefreshCw className="mr-2"/> Start New Session
                    </Button>
                </div>
            </CardContent>
         </Card>
    );

    const renderContent = () => {
        switch (sessionState) {
            case 'idle': return renderIdleState();
            case 'generating_questions': return renderGeneratingState();
            case 'in_progress': return renderInProgressState();
            case 'analyzing': return renderAnalyzingState();
            case 'report': return renderReportState();
            default: return renderIdleState();
        }
    };

    return (
        <div className="container mx-auto max-w-4xl space-y-8">
            {sessionState === 'idle' && (
                <div>
                    <h1 className="text-3xl font-bold font-headline">AI Mock Interview Simulator</h1>
                    <p className="text-muted-foreground">Practice for your next big interview and get instant, detailed feedback.</p>
                </div>
            )}
            {renderContent()}
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
