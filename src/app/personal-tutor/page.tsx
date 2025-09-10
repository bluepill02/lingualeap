
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, Loader2, Send, Mic, Volume2, User, Check, RefreshCcw, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import { personalTutor } from '@/ai/flows/personal-tutor-flow';
import { speak } from '@/ai/flows/speak-flow';
import { analyzePronunciation } from '@/ai/flows/pronunciation-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { PersonalTutorInput, PronunciationAnalysisOutput } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Message {
  role: 'user' | 'model';
  content: string;
}

function PronunciationPractice({ word, onResult }: { word: string; onResult: (isCorrect: boolean) => void }) {
    const [isRecording, setIsRecording] = useState(false);
    const [analysis, setAnalysis] = useState<PronunciationAnalysisOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const { toast } = useToast();

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };
            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = async () => {
                    const base64Audio = reader.result as string;
                    try {
                        const result = await analyzePronunciation({
                            audioDataUri: base64Audio,
                            correctWord: word,
                            language: mockUser.language,
                        });
                        setAnalysis(result);
                        onResult(result.isCorrect);
                    } catch (err) {
                        toast({ variant: 'destructive', title: 'Analysis Failed', description: 'Could not analyze your pronunciation.' });
                    } finally {
                        setIsLoading(false);
                    }
                };
                audioChunksRef.current = [];
            };
            audioChunksRef.current = [];
            mediaRecorderRef.current.start();
            setIsRecording(true);
            setAnalysis(null);
        } catch (error) {
            toast({ variant: 'destructive', title: 'Microphone Error', description: 'Could not access the microphone.' });
        }
    };
    
    const handleStopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsLoading(true);
        }
    };
    
    const reset = () => {
        setAnalysis(null);
        setIsLoading(false);
    };

    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="text-lg">Pronunciation Practice</CardTitle>
                <CardDescription>Try saying the word below and get feedback.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-center text-2xl font-bold font-headline text-primary">{word}</p>
                <div className="flex justify-center">
                    <Button
                        size="icon"
                        className={cn("w-16 h-16 rounded-full", isRecording && "bg-destructive hover:bg-destructive/90 animate-pulse")}
                        onClick={isRecording ? handleStopRecording : handleStartRecording}
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <Mic className="w-8 h-8" />}
                    </Button>
                </div>
                {analysis && (
                    <Alert variant={analysis.isCorrect ? 'success' : 'warning'}>
                        {analysis.isCorrect ? <ThumbsUp className="h-4 w-4" /> : <RefreshCcw className="h-4 w-4" />}
                        <AlertTitle>
                            {analysis.isCorrect ? "Excellent!" : `You said: "${analysis.transcribedText}"`}
                        </AlertTitle>
                        <AlertDescription>{analysis.feedback}</AlertDescription>
                        {!analysis.isCorrect && <Button variant="link" size="sm" className="p-0 mt-2" onClick={reset}>Try Again</Button>}
                    </Alert>
                )}
            </CardContent>
        </Card>
    )
}


export default function PersonalTutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: `Hello ${mockUser.name}! I'm your AI Personal Tutor. How can I help you with your ${mockUser.language} learning today? You can type or use the microphone to ask me anything.`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { toast } = useToast();
  
  const pronunciationWord = messages.length > 2 ? messages[messages.length - 2].content.split(' ').pop()?.replace(/[.,?]/g, '') : "Namaste";

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
        if (scrollAreaRef.current) {
            const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
    }, 100);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handlePlayAudio = async (text: string, index: number) => {
    if (isPlaying === index) {
      audioRef.current?.pause();
      setIsPlaying(null);
      return;
    }

    setIsPlaying(index);
    try {
      const response = await speak(text);
      if (response.media) {
        if (audioRef.current) {
            audioRef.current.src = response.media;
            audioRef.current.play();
            audioRef.current.onended = () => setIsPlaying(null);
        }
      }
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate audio.' });
      setIsPlaying(null);
    }
  };


  const processMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const history = [...messages, userMessage];
      const tutorInput: PersonalTutorInput = {
        history,
        message: messageText,
        language: mockUser.language,
      };
      const response = await personalTutor(tutorInput);

      const modelMessage: Message = { role: 'model', content: response.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error with AI tutor:', error);
      const errorMessage: Message = {
        role: 'model',
        content: "I'm sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(input);
    setInput('');
  };

  const handleMicClick = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast({
        variant: 'destructive',
        title: 'Browser Not Supported',
        description: 'Speech recognition is not supported in your browser.',
      });
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'en-US'; // Can be adapted based on user's primary language
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onstart = () => {
      setIsRecording(true);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
    };
    
    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
       toast({
        variant: 'destructive',
        title: 'Recognition Error',
        description: 'Sorry, I couldn\'t understand that. Please try again.',
      });
    };

    recognitionRef.current.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      processMessage(speechResult);
    };

    recognitionRef.current.start();
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
        <div className="md:col-span-2 flex flex-col h-full">
            <div className="mb-4">
                <h1 className="text-3xl font-bold font-headline">AI Personal Tutor</h1>
                <p className="text-muted-foreground">
                Ask me anything about {mockUser.language}!
                </p>
            </div>

            <Card className="flex-1 flex flex-col">
                <CardContent className="flex-1 p-6 flex flex-col">
                <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                    <div className="space-y-6">
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={`flex items-start gap-3 ${
                            message.role === 'user' ? 'justify-end' : ''
                        }`}
                        >
                        {message.role === 'model' && (
                            <Avatar className="h-10 w-10 border-2 border-primary">
                            <AvatarFallback>
                                <Bot />
                            </AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={cn(
                            'max-w-xl rounded-lg px-4 py-3 relative group',
                            message.role === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            )}
                        >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            {message.role === 'model' && (
                            <Button 
                                size="icon" 
                                variant="ghost" 
                                className="absolute -right-11 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handlePlayAudio(message.content, index)}
                            >
                                {isPlaying === index ? <Loader2 className="animate-spin" /> : <Volume2 className="h-5 w-5"/>}
                            </Button>
                            )}
                        </div>
                        {message.role === 'user' && (
                            <Avatar className="h-10 w-10">
                            <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 border-2 border-primary">
                            <AvatarFallback>
                            <Bot />
                            </AvatarFallback>
                        </Avatar>
                        <div className="max-w-lg rounded-lg px-4 py-3 bg-muted flex items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <span>Thinking...</span>
                        </div>
                        </div>
                    )}
                    </div>
                </ScrollArea>
                </CardContent>
                <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question or use the microphone..."
                    className="flex-1"
                    disabled={isLoading || isRecording}
                    />
                    <Button
                    type="button"
                    variant={isRecording ? 'destructive' : 'outline'}
                    size="icon"
                    onClick={handleMicClick}
                    disabled={isLoading}
                    aria-label={isRecording ? "Stop recording" : "Start recording"}
                    >
                    <Mic className="h-5 w-5" />
                    </Button>
                    <Button type="submit" disabled={isLoading || isRecording || !input}>
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="h-4 w-4" />
                    )}
                    <span className="sr-only">Send</span>
                    </Button>
                </form>
                </div>
            </Card>
        </div>
        <div className="md:col-span-1">
             <PronunciationPractice 
                key={pronunciationWord} // Re-mount component when word changes
                word={pronunciationWord || "Namaste"} 
                onResult={(isCorrect) => {
                    if (isCorrect) {
                        toast({
                            title: "Great Job!",
                            description: "Your pronunciation was perfect.",
                        });
                    }
                }}
            />
        </div>
        <audio ref={audioRef} className="hidden" />
    </div>
  );
}
