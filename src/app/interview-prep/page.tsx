
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck, Sparkles, CheckCircle, Play, ArrowRight } from 'lucide-react';
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
import { Separator } from '@/components/ui/separator';

const countFillerWords = (text: string): number => {
    const fillerWords = /\b(um|uh|er|ah|like|okay|right|so|you know)\b/gi;
    const matches = text.match(fillerWords);
    return matches ? matches.length : 0;
};

const highlightSTAR = (text: string, part: string | undefined): string => {
    if (!part || !text) return text;
    const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedPart})`, 'gi');
    return text.replace(regex, `<mark class="bg-primary/20 rounded-sm p-0.5">$1</mark>`);
};

type SessionState = 'idle' | 'generating_question' | 'in_progress' | 'analyzing' | 'report';

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
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [sessionHistory, setSessionHistory] = useState<AnswerRecord[]>([]);
    
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

        recognition.onstart = () => {
            setCurrentTranscript('');
            setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
            let interimTranscript = '';
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + ' ';
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            setCurrentTranscript(prev => finalTranscript ? finalTranscript : prev + interimTranscript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            toast({ variant: 'destructive', title: 'Recognition Error', description: "Sorry, I couldn't understand that. Please try again." });
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
        };
        
        recognitionRef.current = recognition;

    }, [toast]); 

     useEffect(() => {
        initializeSpeechRecognition();
    }, [initializeSpeechRecognition]);


    const fetchNextQuestion = async () => {
        setSessionState('generating_question');
        setCurrentQuestion(null);
        try {
            const result = await generateInterviewQuestion({ jobRole });
            setCurrentQuestion(result.question);
            setSessionState('in_progress');
        } catch (e) {
            console.error("Failed to generate next question", e);
            toast({ variant: 'destructive', title: 'Failed to Get Question', description: 'Could not generate the next interview question. Please try again.'});
            setSessionState('in_progress'); // Revert to allow user to try again
        }
    };

    const startInterviewSession = async () => {
        setSessionHistory([]);
        setCurrentTranscript('');
        await fetchNextQuestion();
    };
    
    const handleAnswerSubmission = () => {
        if (!currentTranscript.trim() || !currentQuestion) {
            toast({ variant: 'warning', title: 'No answer recorded', description: 'Please record an answer before proceeding.' });
            return;
        }
        
        const newAnswer: AnswerRecord = {
            question: currentQuestion,
            transcript: currentTranscript.trim(),
            feedback: null, // Feedback will be generated at the end
        };
        
        setSessionHistory(prev => [...prev, newAnswer]);
        setCurrentTranscript('');
        setCurrentQuestion(null); // Clear current question to show "Next Question" button
    };

    const generateFinalReport = async () => {
        setSessionState('analyzing');
        try {
            const feedbackPromises = sessionHistory.map(ans => 
                provideInterviewFeedback({
                    question: ans.question,
                    answer: ans.transcript,
                    jobRole,
                })
            );
            const feedbacks = await Promise.all(feedbackPromises);
            const updatedHistory = sessionHistory.map((ans, index) => ({
                ...ans,
                feedback: feedbacks[index],
            }));
            setSessionHistory(updatedHistory);
            setSessionState('report');
        } catch (err) {
             console.error("Error getting feedback:", err);
            toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback for one or more answers.' });
            setSessionState('in_progress');
        }
    };
    
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
                <Button size="lg" onClick={startInterviewSession} disabled={!jobRole.trim()}>
                    <Play className="mr-2"/>
                    Start Mock Interview
                </Button>
            </div>
        </>
    );

    const renderInProgressState = () => (
        <>
            <Card className="min-h-[200px]">
                <CardHeader>
                   <div className="flex justify-between items-center">
                       <CardTitle>Question {sessionHistory.length + 1}</CardTitle>
                       <Progress value={((sessionHistory.length) / 5) * 100} className="w-1/2" />
                    </div>
                </CardHeader>
                <CardContent>
                    {sessionState === 'generating_question' ? (
                         <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="animate-spin"/>
                            <span>Generating next question...</span>
                        </div>
                    ) : (
                        <p className="text-lg font-semibold">{currentQuestion}</p>
                    )}
                </CardContent>
            </Card>
            
            <div className="text-center space-y-4">
                 <Button 
                    size="lg" 
                    className={cn("h-16 w-16 rounded-full transition-all duration-300", isRecording && "bg-destructive scale-110")}
                    onClick={() => isRecording ? recognitionRef.current.stop() : recognitionRef.current.start()}
                    disabled={sessionState !== 'in_progress' || !currentQuestion}
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
            
            {!currentQuestion && currentTranscript && !isRecording && (
                <div className="text-center">
                    <Button onClick={handleAnswerSubmission}>Submit Answer &amp; Continue</Button>
                </div>
            )}

            <Separator/>
            
             <div className="text-center mt-6 flex justify-center items-center gap-4">
                <Button variant="outline" onClick={() => setSessionState('idle')}>
                    <RefreshCw className="mr-2"/>
                    Restart Session
                </Button>
                {sessionHistory.length > 0 && (
                    <Button onClick={generateFinalReport}>
                        End Session & Get Report
                        <ArrowRight className="ml-2"/>
                    </Button>
                )}
                 {!currentQuestion && sessionHistory.length < 5 && (
                    <Button onClick={fetchNextQuestion} disabled={sessionState === 'generating_question'}>
                        Next Question
                        <ArrowRight className="ml-2"/>
                    </Button>
                )}
            </div>
        </>
    );
    
    const renderAnalyzingState = () => (
         <div className="text-center space-y-4 py-12">
            <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary"/>
            <h2 className="text-xl font-semibold">Generating Your Feedback Report...</h2>
            <p className="text-muted-foreground">The AI coach is analyzing your {sessionHistory.length} answers.</p>
        </div>
    );
    
    const renderReportState = () => {
        if (sessionHistory.length === 0) return renderIdleState();

        const getHighlightedTranscript = (answer: AnswerRecord): string => {
            if (!answer.feedback) return answer.transcript;
            
            let highlightedText = answer.transcript;
            const starParts = [
                answer.feedback.starAnalysis.situation,
                answer.feedback.starAnalysis.task,
                answer.feedback.starAnalysis.action,
                answer.feedback.starAnalysis.result,
            ];
            
            starParts.forEach(part => {
                if (part) {
                    highlightedText = highlightSTAR(highlightedText, part);
                }
            });
            return highlightedText;
        };


        return (
             <Card className="animate-in fade-in-50">
                <CardHeader className="text-center">
                    <Wand2 className="w-10 h-10 mx-auto text-primary mb-2"/>
                    <CardTitle className="text-2xl">AI Feedback Report</CardTitle>
                    <CardDescription>Here's a breakdown of your performance across {sessionHistory.length} questions for the '{jobRole}' role.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {sessionHistory.map((answer, index) => {
                        const feedback = answer.feedback;
                        if (!feedback) return null;
                        
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
                                        <summary className="cursor-pointer font-semibold text-sm">View STAR Analysis &amp; Transcript</summary>
                                        <div className="mt-2 space-y-4 p-4 bg-muted rounded-md">
                                            <p className="text-xs text-muted-foreground italic" dangerouslySetInnerHTML={{ __html: getHighlightedTranscript(answer) }} />
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
                        );
                    })}
                    <div className="text-center">
                        <Button onClick={() => setSessionState('idle')}>
                            <RefreshCw className="mr-2"/> Start New Session
                        </Button>
                    </div>
                </CardContent>
             </Card>
        );
    };

    const renderContent = () => {
        switch (sessionState) {
            case 'idle': return renderIdleState();
            case 'in_progress':
            case 'generating_question': 
                return renderInProgressState();
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

    