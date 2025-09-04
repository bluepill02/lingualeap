
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Megaphone, Lightbulb, ClipboardCheck, MessageSquareQuote, CheckCircle, Sparkles, Loader2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { provideMissionFeedback, MissionSubmissionInput, MissionFeedbackOutput } from '@/ai/flows/mission-feedback-flow';

const mission = {
    title: "Mission: Explain Newton's Third Law",
    concept: "Newton's Third Law",
    scenario: "Balancing carts at a temple chariot festival (தேர் திருவிழா). Explain why when you push a cart, you also feel a push back."
};

export default function PeerTeachingPage() {
    const [script, setScript] = useState('');
    const [diagram, setDiagram] = useState('');
    const [mcq1, setMcq1] = useState({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', answer: 'A' });
    const [mcq2, setMcq2] = useState({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', answer: 'A' });
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<MissionFeedbackOutput | null>(null);

    const { toast } = useToast();

    const handleSubmit = async () => {
        setIsLoading(true);
        setFeedback(null);
        try {
            const submission: MissionSubmissionInput = {
                concept: mission.concept,
                script: script,
                diagramDescription: diagram,
                mcqs: [
                    { question: mcq1.question, options: [mcq1.optionA, mcq1.optionB, mcq1.optionC, mcq1.optionD], correctAnswer: mcq1.answer },
                    { question: mcq2.question, options: [mcq2.optionA, mcq2.optionB, mcq2.optionC, mcq2.optionD], correctAnswer: mcq2.answer },
                ]
            }
            const result = await provideMissionFeedback(submission);
            setFeedback(result);
            toast({
                title: "Feedback Received!",
                description: "Your submission has been reviewed by the AI Editor.",
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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
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
                />
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardCheck/>3. Multiple-Choice Questions</CardTitle>
                <CardDescription>Create two MCQs that test common misunderstandings of the concept.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* MCQ 1 */}
                <div className="space-y-2 p-4 border rounded-md">
                    <Label htmlFor="mcq1-q">Question 1</Label>
                    <Input id="mcq1-q" placeholder="Question text..." value={mcq1.question} onChange={e => setMcq1({...mcq1, question: e.target.value})} />
                    <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Option A" value={mcq1.optionA} onChange={e => setMcq1({...mcq1, optionA: e.target.value})} />
                        <Input placeholder="Option B" value={mcq1.optionB} onChange={e => setMcq1({...mcq1, optionB: e.target.value})}/>
                        <Input placeholder="Option C" value={mcq1.optionC} onChange={e => setMcq1({...mcq1, optionC: e.target.value})}/>
                        <Input placeholder="Option D" value={mcq1.optionD} onChange={e => setMcq1({...mcq1, optionD: e.target.value})}/>
                    </div>
                </div>
                 {/* MCQ 2 */}
                <div className="space-y-2 p-4 border rounded-md">
                    <Label htmlFor="mcq2-q">Question 2</Label>
                    <Input id="mcq2-q" placeholder="Question text..." value={mcq2.question} onChange={e => setMcq2({...mcq2, question: e.target.value})} />
                    <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Option A" value={mcq2.optionA} onChange={e => setMcq2({...mcq2, optionA: e.target.value})} />
                        <Input placeholder="Option B" value={mcq2.optionB} onChange={e => setMcq2({...mcq2, optionB: e.target.value})}/>
                        <Input placeholder="Option C" value={mcq2.optionC} onChange={e => setMcq2({...mcq2, optionC: e.target.value})}/>
                        <Input placeholder="Option D" value={mcq2.optionD} onChange={e => setMcq2({...mcq2, optionD: e.target.value})}/>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>

       <Button size="lg" className="w-full" onClick={handleSubmit} disabled={isLoading}>
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
                                <Star key={i} className={`w-8 h-8 ${i < feedback.teachingStars ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
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
                    <Button variant="secondary" className="w-full">Submit to Peer Review</Button>
                </CardContent>
            </Card>
        )}

    </div>
  );
}
