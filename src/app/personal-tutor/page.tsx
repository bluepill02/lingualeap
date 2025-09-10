
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, Loader2, Send, Mic, Volume2, User, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import { personalTutor } from '@/ai/flows/personal-tutor-flow';
import { speak } from '@/ai/flows/speak-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { PersonalTutorInput, Language } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const languageMap: Record<Language, string> = {
    en: 'English',
    ta: 'Tamil',
    hi: 'Hindi',
    ml: 'Malayalam',
    kn: 'Kannada',
    te: 'Telugu',
};


export default function PersonalTutorPage() {
  const [language, setLanguage] = useState<Language>('en');
  
  const getInitialMessage = useCallback(() => {
    return `Hello ${mockUser.name}! I'm your AI Personal Tutor for ${languageMap[language]}. How can I help you today? You can type or use the microphone to ask me anything.`;
  }, [language]);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: getInitialMessage() },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { toast } = useToast();

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setMessages([{ role: 'model', content: `Hello ${mockUser.name}! I'm now your AI Personal Tutor for ${languageMap[newLang]}. How can I assist you?`}]);
  }

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
        language: language,
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
    recognitionRef.current.lang = 'en-US';
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
        description: "Sorry, I couldn't understand that. Please try again.",
      });
    };

    recognitionRef.current.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      processMessage(speechResult);
    };

    recognitionRef.current.start();
  };

  return (
    <div className="container mx-auto h-full flex flex-col max-w-3xl">
        <div className="text-center mb-4">
            <h1 className="text-3xl font-bold font-headline">AI Personal Tutor</h1>
            <p className="text-muted-foreground">
                Your conversational language learning partner.
            </p>
        </div>
        <div className="w-full max-w-xs mx-auto mb-4">
            <Label htmlFor="language-select" className="text-xs text-center block mb-1">Tutor Language</Label>
            <Select value={language} onValueChange={(value: Language) => handleLanguageChange(value)}>
                <SelectTrigger id="language-select" className="h-9">
                    <SelectValue placeholder="Select language..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ta">Tamil</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="ml">Malayalam</SelectItem>
                    <SelectItem value="kn">Kannada</SelectItem>
                    <SelectItem value="te">Telugu</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1 p-2 sm:p-4 flex flex-col">
            <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                <div className="space-y-6 p-2">
                {messages.map((message, index) => {
                    return (
                        <div
                        key={index}
                        className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}
                        >
                            {message.role === 'model' && (
                                <Avatar className="h-8 w-8 border-2 border-primary">
                                <AvatarFallback>
                                    <Bot />
                                </AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={cn(
                                'max-w-md rounded-lg px-4 py-2 relative group text-sm sm:text-base',
                                message.role === 'user'
                                    ? 'bg-primary text-primary-foreground rounded-br-none'
                                    : 'bg-muted rounded-bl-none'
                                )}
                            >
                                <p className="whitespace-pre-wrap">{message.content}</p>
                                {message.role === 'model' && (
                                <Button 
                                    size="icon" 
                                    variant="ghost" 
                                    className="absolute -right-10 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => handlePlayAudio(message.content, index)}
                                    aria-label="Play audio for this message"
                                >
                                    {isPlaying === index ? <Loader2 className="animate-spin" /> : <Volume2 className="h-4 w-4"/>}
                                </Button>
                                )}
                            </div>
                            {message.role === 'user' && (
                                <Avatar className="h-8 w-8">
                                <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    );
                })}
                {isLoading && (
                    <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 border-2 border-primary">
                        <AvatarFallback>
                        <Bot />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-lg rounded-lg px-4 py-2 bg-muted flex items-center rounded-bl-none">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                    </div>
                    </div>
                )}
                </div>
            </ScrollArea>
            </CardContent>
            <div className="border-t p-2 sm:p-4">
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
                <Button type="submit" disabled={isLoading || isRecording || !input} aria-label="Send message">
                {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Send className="h-4 w-4" />
                )}
                </Button>
            </form>
            </div>
        </Card>
        <audio ref={audioRef} className="hidden" />
    </div>
  );
}
