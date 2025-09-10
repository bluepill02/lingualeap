
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck, Sparkles, CheckCircle, Play, ArrowRight, Repeat } from 'lucide-react';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const countFillerWords = (text: string): number => {
    const fillerWords = /\b(um|uh|er|ah|like|okay|right|so|you know)\b/gi;
    const matches = text.match(fillerWords);
    return matches ? matches.length : 0;
};

const highlightSTAR = (text: string, parts: { part: string | undefined; className: string }[]): string => {
    if (!text) return '';
    let highlightedText = text;

    parts.forEach(({ part, className }) => {
        if (!part || !part.trim()) return;
        const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
        if (escapedPart.length === 0) return;
        try {
            const regex = new RegExp(`(${escapedPart})`, 'gi');
            highlightedText = highlightedText.replace(regex, `<mark class="${className}">$1</mark>`);
        } catch (e) {
            console.error("Regex error during highlighting:", e);
        }
    });

    return highlightedText;
};


type SessionState = 'idle' | 'generating_question' | 'in_progress' | 'session_complete' | 'analyzing' | 'report' | 'practicing_single' | 'analyzing_single' | 'single_report';

interface AnswerRecord {
    question: string;
    transcript: string;
    feedback: InterviewFeedbackOutput | null;
}

const MAX_QUESTIONS = 5;

export default function InterviewPrepPage() {
    const { user } = useUser();
    const [jobRole, setJobRole] = useState('Software Engineer');
    const [sessionState, setSessionState] = useState<SessionState>('idle');

    // Session data
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [sessionHistory, setSessionHistory] = useState<AnswerRecord[]>([]);
    
    // Single question practice state
    const [practicedQuestion, setPracticedQuestion] = useState<string | null>(null);
    const [singleFeedback, setSingleFeedback] = useState<InterviewFeedbackOutput | null>(null);
    const [singleTranscript, setSingleTranscript] = useState<string>('');


    // Recording state
    const [isRecording, setIsRecording] = useState(false);
    const [interimTranscript, setInterimTranscript] = useState('');
    const finalTranscriptRef = useRef('');

    const recognitionRef = useRef<any>(null);
    const { toast } = useToast();
    
    const fetchNextQuestion = useCallback(async () => {
        setSessionState('generating_question');
        setCurrentQuestion(null);
        try {
            const result = await generateInterviewQuestion({ jobRole });
            setCurrentQuestion(result.question);
            setSessionState('in_progress');
        } catch (e) {
            console.error("Failed to generate next question", e);
            toast({ variant: 'destructive', title: 'Failed to Get Question', description: 'Could not generate the next interview question. Please try again.'});
            setSessionState('idle'); 
        }
    }, [jobRole, toast]);

    const handleAnswerSubmission = useCallback(async () => {
        const transcript = finalTranscriptRef.current.trim();
        if (!currentQuestion) return;

        if (sessionState === 'practicing_single') {
             setSessionState('analyzing_single');
             try {
                const feedbackResult = await provideInterviewFeedback({ question: currentQuestion, answer: transcript, jobRole });
                setSingleFeedback(feedbackResult);
                setSingleTranscript(transcript);
                setSessionState('single_report');
             } catch(e) {
                console.error("Failed to get feedback for single question", e);
                toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not analyze your retried answer.' });
                setSessionState('report'); // Go back to the main report
             }
             finalTranscriptRef.current = '';
             setInterimTranscript('');
             return;
        }

        const newAnswer: AnswerRecord = {
            question: currentQuestion,
            transcript: transcript || '(No answer recorded)',
            feedback: null,
        };
        
        const updatedHistory = [...sessionHistory, newAnswer];
        setSessionHistory(updatedHistory);
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        
        if (updatedHistory.length < MAX_QUESTIONS) {
            await fetchNextQuestion();
        } else {
            setSessionState('session_complete');
        }

    }, [currentQuestion, sessionState, sessionHistory, fetchNextQuestion, toast, jobRole]);


    const initializeSpeechRecognition = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            toast({ variant: 'destructive', title: 'Browser Not Supported', description: 'Speech recognition is not supported in your browser.' });
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsRecording(true);
        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            toast({ variant: 'destructive', title: 'Recognition Error', description: "Sorry, I couldn't understand that. Please try again." });
            setIsRecording(false);
        };
        recognition.onend = () => {
             setIsRecording(false);
             setTimeout(() => {
                handleAnswerSubmission();
             }, 300);
        };

        recognition.onresult = (event: any) => {
            let final = '';
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final += event.results[i][0].transcript + ' ';
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
             finalTranscriptRef.current += final;
             setInterimTranscript(finalTranscriptRef.current + interim);
        };
        
        recognitionRef.current = recognition;

    }, [toast, handleAnswerSubmission]); 

     useEffect(() => {
        initializeSpeechRecognition();
    }, [initializeSpeechRecognition]);


    const startInterviewSession = async () => {
        setSessionHistory([]);
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        await fetchNextQuestion();
    };
    
    const handleRetryQuestion = (question: string) => {
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        setCurrentQuestion(question);
        setPracticedQuestion(question);
        setSingleFeedback(null);
        setSingleTranscript('');
        setSessionState('practicing_single');
    }

    const generateFinalReport = async (history: AnswerRecord[]) => {
        if (!history || history.length === 0) return;
        setSessionState('analyzing');
        try {
            const feedbackPromises = history
              .filter(ans => ans.transcript !== '(No answer recorded)')
              .map(ans => 
                provideInterviewFeedback({
                    question: ans.question,
                    answer: ans.transcript,
                    jobRole,
                }).then(feedback => ({ question: ans.question, feedback }))
            );
            const feedbacks = await Promise.all(feedbackPromises);
            
            const feedbackMap = new Map(feedbacks.map(f => [f.question, f.feedback]));

            const updatedHistory = history.map(ans => ({
                ...ans,
                feedback: feedbackMap.get(ans.question) || null,
            }));
            setSessionHistory(updatedHistory);
            setSessionState('report');
        } catch (err) {
             console.error("Error getting feedback:", err);
            toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback for one or more answers.' });
            setSessionState('idle');
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
    
    const renderQuestionAndRecorder = (question: string | null, progress?: number) => (
         <>
            <Card className="min-h-[200px]">
                <CardHeader>
                   <div className="flex justify-between items-center">
                       <CardTitle>{progress !== undefined ? `Question ${sessionHistory.length + 1}/${MAX_QUESTIONS}` : 'Practice Question'}</CardTitle>
                       {progress !== undefined && <Progress value={progress} className="w-1/2" />}
                    </div>
                </CardHeader>
                <CardContent>
                    {(sessionState === 'generating_question' || sessionState === 'analyzing_single') ? (
                         <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="animate-spin"/>
                            <span>{sessionState === 'generating_question' ? 'Generating next question...' : 'Analyzing your answer...'}</span>
                        </div>
                    ) : (
                        <p className="text-lg font-semibold">{question}</p>
                    )}
                </CardContent>
            </Card>
            
            <div className="text-center space-y-4">
                 <Button 
                    size="lg" 
                    className={cn("h-16 w-16 rounded-full transition-all duration-300", isRecording && "bg-destructive scale-110")}
                    onClick={() => {
                        if (isRecording) {
                            recognitionRef.current.stop();
                        } else {
                            finalTranscriptRef.current = '';
                            setInterimTranscript('');
                            recognitionRef.current.start();
                        }
                    }}
                    disabled={sessionState === 'generating_question' || !question}
                    aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
                >
                    {isRecording ? <MicOff/> : <Mic/>}
                </Button>
                <p className="text-sm text-muted-foreground">{isRecording ? 'Recording... Click to stop and submit answer.' : 'Click to start recording your answer.'}</p>
            </div>

            {interimTranscript && (
                 <Card className="bg-muted">
                    <CardHeader>
                        <CardTitle>Your Answer (In Progress)</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="italic text-muted-foreground">{interimTranscript}</p>
                    </CardContent>
                </Card>
            )}
        </>
    )

    const renderFeedbackCard = (question: string, transcript: string, feedback: InterviewFeedbackOutput | null) => {
        if (!feedback) {
            return (
                <Card className="p-4 text-muted-foreground">
                    Feedback could not be generated for this answer.
                </Card>
            )
        };

        const getHighlightedTranscript = (): string => {
            const starParts = [
                { part: feedback.starAnalysis.situation, className: 'bg-yellow-400/30' },
                { part: feedback.starAnalysis.task, className: 'bg-blue-400/30' },
                { part: feedback.starAnalysis.action, className: 'bg-green-400/30' },
                { part: feedback.starAnalysis.result, className: 'bg-purple-400/30' },
            ];
            return highlightSTAR(transcript, starParts);
        };

         return (
            <div className="mt-4 space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Star className="text-yellow-500"/>Confidence Score</CardTitle></CardHeader>
                        <CardContent><p className="text-2xl font-bold">{feedback.confidenceScore}/10</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><MessageSquare/>Filler Words</CardTitle></CardHeader>
                        <CardContent><p className="text-2xl font-bold">{countFillerWords(transcript)}</p></CardContent>
                    </Card>
                </div>
                <Card>
                     <CardHeader className="pb-2"><CardTitle className="text-base">STAR Method Analysis & Transcript</CardTitle></CardHeader>
                     <CardContent>
                         <p className="text-sm italic text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getHighlightedTranscript() }} />
                         <Separator className="my-4"/>
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
                     </CardContent>
                </Card>
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
             </div>
        );
    }

    const renderIdleState = () => (
        <>
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
            {renderQuestionAndRecorder(currentQuestion, ((sessionHistory.length) / MAX_QUESTIONS) * 100)}
            <Separator/>
            <div className="text-center mt-6 flex justify-center items-center gap-4">
                <Button variant="outline" onClick={() => setSessionState('idle')}>
                    <RefreshCw className="mr-2"/>
                    Restart Session
                </Button>
                 {sessionHistory.length > 0 && sessionHistory.length < MAX_QUESTIONS && (
                    <Button onClick={() => generateFinalReport(sessionHistory)}>
                        End Session Early & Get Report
                    </Button>
                )}
            </div>
        </>
    );
    
    const renderPracticingSingleState = () => (
        <>
            {renderQuestionAndRecorder(currentQuestion)}
            <div className="text-center mt-6">
                 <Button variant="outline" onClick={() => setSessionState('report')}>
                    Back to Full Report
                </Button>
            </div>
        </>
    )

    const renderSingleReportState = () => (
         <Card>
            <CardHeader>
                <CardTitle>Feedback for Your Retry</CardTitle>
            </CardHeader>
            <CardContent>
                {renderFeedbackCard(practicedQuestion || '', singleTranscript, singleFeedback)}
                 <div className="mt-4 flex gap-4">
                     <Button className="w-full" onClick={() => handleRetryQuestion(practicedQuestion!)}>
                        <Repeat className="mr-2"/> Try Again
                     </Button>
                     <Button variant="outline" className="w-full" onClick={() => setSessionState('report')}>
                        Back to Full Report
                     </Button>
                 </div>
            </CardContent>
        </Card>
    );

    const renderSessionCompleteState = () => (
        <Card className="text-center p-8">
            <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4"/>
                <CardTitle className="text-2xl">Interview Session Complete!</CardTitle>
                <CardDescription>You've answered all {MAX_QUESTIONS} questions. Ready to see how you did?</CardDescription>
            </CardHeader>
            <CardContent>
                <Button size="lg" onClick={() => generateFinalReport(sessionHistory)}>
                    <Sparkles className="mr-2"/> Generate Final Report
                </Button>
            </CardContent>
        </Card>
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

        const overallConfidence = Math.round(sessionHistory.reduce((acc, ans) => acc + (ans.feedback?.confidenceScore || 0), 0) / sessionHistory.filter(ans => ans.feedback).length) || 0;

        return (
             <Card className="animate-in fade-in-50">
                <CardHeader className="text-center">
                    <Wand2 className="w-10 h-10 mx-auto text-primary mb-2"/>
                    <CardTitle className="text-2xl">AI Feedback Report</CardTitle>
                    <CardDescription>Here's a breakdown of your performance for the '{jobRole}' role.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {sessionHistory.map((answer, index) => (
                         <details key={index} className="group border-b pb-4">
                            <summary className="cursor-pointer list-none">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">Q{index + 1}: {answer.question}</h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary">
                                        <span>View Details</span>
                                        <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90"/>
                                    </div>
                                </div>
                            </summary>
                            {renderFeedbackCard(answer.question, answer.transcript, answer.feedback)}
                             <Button variant="secondary" size="sm" className="mt-4" onClick={() => handleRetryQuestion(answer.question)}>
                                <Repeat className="mr-2"/> Retry This Question
                            </Button>
                        </details>
                    ))}
                    <div className="text-center pt-4">
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
            case 'generating_question': 
            case 'in_progress':
                return renderInProgressState();
            case 'practicing_single': return renderPracticingSingleState();
            case 'analyzing_single': return renderQuestionAndRecorder(currentQuestion);
            case 'single_report': return renderSingleReportState();
            case 'session_complete': return renderSessionCompleteState();
            case 'analyzing': return renderAnalyzingState();
            case 'report': return renderReportState();
            default: return renderIdleState();
        }
    };

    return (
        <div className="container mx-auto max-w-4xl space-y-8">
            {renderContent()}
        </div>
    );
}
