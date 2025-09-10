
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, RefreshCw, Loader2, Wand2, Star, MessageSquare, BookCheck, Sparkles, CheckCircle, Play, ArrowRight, Repeat, Info, UserCheck, BarChart3, ChevronDown, Headphones } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
    answer: string;
    audioBlob?: Blob;
}

const MAX_QUESTIONS = 5;

export default function InterviewPrepPage() {
    const { user } = useUser();
    const [jobRole, setJobRole] = useState('Software Engineer');
    const [sessionState, setSessionState] = useState<SessionState>('idle');

    // Session data
    const [sessionHistory, setSessionHistory] = useState<AnswerRecord[]>([]);
    const [finalFeedback, setFinalFeedback] = useState<InterviewFeedbackOutput | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    
    // Single question practice state
    const [singleFeedback, setSingleFeedback] = useState<InterviewFeedbackOutput['detailedFeedback'][0] | null>(null);
    const [singleAnswerRecord, setSingleAnswerRecord] = useState<AnswerRecord | null>(null);


    // Recording state
    const [isRecording, setIsRecording] = useState(false);
    const [interimTranscript, setInterimTranscript] = useState('');
    const finalTranscriptRef = useRef('');
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

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
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        audioChunksRef.current = []; // Clear chunks for next recording
        if (!currentQuestion) return;

        const newAnswer: AnswerRecord = {
            question: currentQuestion,
            answer: transcript || '(No answer recorded)',
            audioBlob: audioBlob.size > 0 ? audioBlob : undefined,
        };

        if (sessionState === 'practicing_single') {
             setSessionState('analyzing_single');
             try {
                const feedbackResult = await provideInterviewFeedback({
                    jobRole,
                    userPersona: user?.persona,
                    sessionHistory: [{ question: currentQuestion, answer: newAnswer.answer }],
                });
                if(feedbackResult.detailedFeedback.length > 0) {
                    setSingleFeedback(feedbackResult.detailedFeedback[0]);
                }
                setSingleAnswerRecord(newAnswer);
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
        
        const updatedHistory = [...sessionHistory, newAnswer];
        setSessionHistory(updatedHistory);
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        
        if (updatedHistory.length >= MAX_QUESTIONS) {
            setSessionState('session_complete');
        } else {
            await fetchNextQuestion();
        }

    }, [currentQuestion, sessionState, sessionHistory, fetchNextQuestion, toast, jobRole, user]);


    const startRecording = async () => {
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        audioChunksRef.current = [];
        
        if (!recognitionRef.current) initializeSpeechRecognition();
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (!recognitionRef.current) {
                // This check is important because initialize might have failed
                toast({ variant: 'destructive', title: 'Browser Not Supported', description: 'Speech recognition is not supported in your browser.' });
                return;
            }
            recognitionRef.current.start();

            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                 if (event.data.size > 0) audioChunksRef.current.push(event.data);
            };
            mediaRecorderRef.current.onstop = () => {
                stream.getTracks().forEach(track => track.stop());
                 setTimeout(() => {
                    handleAnswerSubmission();
                 }, 300);
            };
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error starting recording:", err);
            toast({ variant: 'destructive', title: 'Microphone Error', description: 'Could not access the microphone. Please check your permissions.' });
        }
    }

    const stopRecording = () => {
        if (recognitionRef.current) recognitionRef.current.stop();
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
    }


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

    }, [toast]); 

     useEffect(() => {
        initializeSpeechRecognition();
    }, [initializeSpeechRecognition]);


    const startInterviewSession = async () => {
        setSessionHistory([]);
        setFinalFeedback(null);
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        await fetchNextQuestion();
    };
    
    const handleRetryQuestion = (question: string) => {
        finalTranscriptRef.current = '';
        setInterimTranscript('');
        setCurrentQuestion(question);
        setSingleFeedback(null);
        setSingleAnswerRecord(null);
        setSessionState('practicing_single');
    }

    const generateFinalReport = async (history: AnswerRecord[]) => {
        if (!history || history.length === 0) return;
        setSessionState('analyzing');
        try {
            const historyForAi = history.map(({ question, answer }) => ({ question, answer }));
            const feedbackResult = await provideInterviewFeedback({
                jobRole,
                userPersona: user?.persona,
                sessionHistory: historyForAi
            });
            setFinalFeedback(feedbackResult);
            setSessionState('report');
        } catch (err) {
             console.error("Error getting feedback:", err);
            toast({ variant: 'destructive', title: 'Feedback Failed', description: 'Could not get feedback for one or more answers.' });
            setSessionState('idle');
        }
    };
    
    const playAudio = (audioBlob?: Blob) => {
        if (!audioBlob) return;
        if (audioRef.current) {
            const audioUrl = URL.createObjectURL(audioBlob);
            audioRef.current.src = audioUrl;
            audioRef.current.play();
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
                            stopRecording();
                        } else {
                            startRecording();
                        }
                    }}
                    disabled={sessionState === 'generating_question' || !question}
                    aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
                >
                    {isRecording ? <MicOff/> : <Mic/>}
                </Button>
                <p className="text-sm text-muted-foreground">{isRecording ? 'Recording... Click to stop.' : 'Click to start recording your answer.'}</p>
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

    const renderFeedbackCard = (answerRecord: AnswerRecord, feedback: InterviewFeedbackOutput['detailedFeedback'][0] | null) => {
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
            return highlightSTAR(answerRecord.answer, starParts);
        };

         return (
            <AccordionContent>
                <div className="mt-4 space-y-4 p-4 bg-muted/50 rounded-lg border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Star className="text-yellow-500"/>Confidence</CardTitle></CardHeader>
                            <CardContent><p className="text-2xl font-bold">{feedback.confidenceScore}/10</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><MessageSquare/>Filler Words</CardTitle></CardHeader>
                            <CardContent><p className="text-2xl font-bold">{countFillerWords(answerRecord.answer)}</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Headphones/>Your Audio</CardTitle></CardHeader>
                            <CardContent>
                                <Button onClick={() => playAudio(answerRecord.audioBlob)} disabled={!answerRecord.audioBlob} variant="outline" className="w-full">
                                    <Play className="mr-2"/> Play Recording
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                         <CardHeader className="pb-2"><CardTitle className="text-base">STAR Method Analysis & Transcript</CardTitle></CardHeader>
                         <CardContent>
                            <TooltipProvider>
                                <div className="flex flex-wrap gap-2 text-xs mb-4">
                                     <Tooltip><TooltipTrigger asChild><span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-400/30"/>Situation</span></TooltipTrigger><TooltipContent><p>Context or background of your story.</p></TooltipContent></Tooltip>
                                     <Tooltip><TooltipTrigger asChild><span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-400/30"/>Task</span></TooltipTrigger><TooltipContent><p>The specific challenge or responsibility.</p></TooltipContent></Tooltip>
                                     <Tooltip><TooltipTrigger asChild><span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-400/30"/>Action</span></TooltipTrigger><TooltipContent><p>What you specifically did.</p></TooltipContent></Tooltip>
                                     <Tooltip><TooltipTrigger asChild><span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-purple-400/30"/>Result</span></TooltipTrigger><TooltipContent><p>The outcome or impact of your action.</p></TooltipContent></Tooltip>
                                </div>
                            </TooltipProvider>
                             <p className="text-sm italic text-muted-foreground leading-relaxed p-3 bg-background rounded-md" dangerouslySetInnerHTML={{ __html: getHighlightedTranscript() }} />
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
                    <Button variant="secondary" size="sm" className="mt-4" onClick={() => handleRetryQuestion(answerRecord.question)}>
                        <Repeat className="mr-2"/> Retry This Question
                    </Button>
                 </div>
            </AccordionContent>
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
                    Start Mock Interview ({MAX_QUESTIONS} Questions)
                </Button>
            </div>
        </>
    );

    const renderInProgressState = () => (
        <>
            {renderQuestionAndRecorder(currentQuestion, ((sessionHistory.length) / MAX_QUESTIONS) * 100)}
            <Separator/>
            <div className="text-center mt-6 flex justify-center items-center gap-4">
                <Button variant="outline" onClick={() => generateFinalReport(sessionHistory)}>
                    End Session Early & Get Report
                </Button>
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
                {singleAnswerRecord && <CardDescription>Question: {singleAnswerRecord.question}</CardDescription>}
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                    <AccordionItem value="item-0">
                        <AccordionTrigger>View Feedback</AccordionTrigger>
                        {singleAnswerRecord && renderFeedbackCard(singleAnswerRecord, singleFeedback)}
                    </AccordionItem>
                </Accordion>
                 <div className="mt-4 flex gap-4">
                     <Button className="w-full" onClick={() => handleRetryQuestion(singleAnswerRecord!.question)}>
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
        if (!finalFeedback) return renderIdleState();

        const avgConfidence = Math.round(finalFeedback.detailedFeedback.reduce((acc, ans) => acc + ans.confidenceScore, 0) / finalFeedback.detailedFeedback.length) || 0;
        const totalFillerWords = sessionHistory.reduce((acc, ans) => acc + countFillerWords(ans.answer), 0);

        return (
             <Card className="animate-in fade-in-50">
                <CardHeader className="text-center">
                    <Wand2 className="w-10 h-10 mx-auto text-primary mb-2"/>
                    <CardTitle className="text-2xl">AI Feedback Report</CardTitle>
                    <CardDescription>Here's a breakdown of your performance for the '{jobRole}' role.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <Card className="bg-muted/50">
                        <CardHeader>
                            <CardTitle>Session Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Star className="text-yellow-500"/>Avg. Confidence</CardTitle></CardHeader>
                                    <CardContent><p className="text-3xl font-bold">{avgConfidence}/10</p></CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><MessageSquare/>Total Filler Words</CardTitle></CardHeader>
                                    <CardContent><p className="text-3xl font-bold">{totalFillerWords}</p></CardContent>
                                </Card>
                            </div>
                            <Alert variant="info">
                                <UserCheck className="h-4 w-4"/>
                                <AlertTitle>Overall Strengths</AlertTitle>
                                <AlertDescription>{finalFeedback.overallFeedback.strengths}</AlertDescription>
                            </Alert>
                             <Alert variant="warning">
                                <BarChart3 className="h-4 w-4"/>
                                <AlertTitle>Top Areas for Improvement</AlertTitle>
                                <AlertDescription>{finalFeedback.overallFeedback.areasForImprovement}</AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">Detailed Breakdown</h3>
                         <Accordion type="single" collapsible className="w-full space-y-2">
                             {finalFeedback.detailedFeedback.map((feedbackItem, index) => {
                                 const answerRecord = sessionHistory.find(h => h.question === feedbackItem.question);
                                 if (!answerRecord) return null;
                                 return (
                                     <AccordionItem value={`item-${index}`} key={index}>
                                         <AccordionTrigger className="font-semibold text-lg text-left p-4 hover:no-underline bg-background rounded-md">
                                             Q{index + 1}: {feedbackItem.question}
                                         </AccordionTrigger>
                                         {renderFeedbackCard(answerRecord, feedbackItem)}
                                     </AccordionItem>
                                 )
                            })}
                        </Accordion>
                    </div>
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
            <audio ref={audioRef} className="hidden" />
        </div>
    );
}

    