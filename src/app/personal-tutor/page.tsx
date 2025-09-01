
'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import { personalTutor } from '@/ai/flows/personal-tutor-flow';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function PersonalTutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: `Hello ${mockUser.name}! I'm your AI Personal Tutor. How can I help you with your ${mockUser.language} learning today?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to the bottom when messages change
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages;
      const response = await personalTutor({
        history,
        message: input,
        language: mockUser.language,
      });

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

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
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
                    className={`flex items-start gap-4 ${
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
                    className={`max-w-lg rounded-lg px-4 py-3 ${
                        message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                    >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about grammar, vocabulary, or culture..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input}>
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
  );
}
