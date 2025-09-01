
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { flashcards } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Volume2, Mic, Play, RotateCw, BookText, Loader, PartyPopper, Repeat, XCircle, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { generateStory } from '@/ai/flows/story-generator';
import { analyzePronunciation, PronunciationAnalysisOutput } from '@/ai/flows/pronunciation-analysis-flow';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type RecordingState = 'idle' | 'recording' | 'processing' | 'done';

export default function FlashcardsPage() {
  const [initialDueCards] = useState(
    flashcards.filter((fc) => new Date(fc.nextDue) <= new Date())
  );
  const [dueCards, setDueCards] = useState(initialDueCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [story, setStory] = useState('');
  const [loadingStory, setLoadingStory] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  
  // Pronunciation state
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationAnalysisOutput | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    if (isFlipped && dueCards[currentIndex] && !story) {
      setLoadingStory(true);
      generateStory({ word: dueCards[currentIndex].word, definition: dueCards[currentIndex].translation })
        .then(response => {
          setStory(response.story);
        })
        .catch(err => {
          console.error(err);
          setStory('Could not generate a story for this word.');
        })
        .finally(() => setLoadingStory(false));
    }
  }, [isFlipped, currentIndex, dueCards, story]);

  const handleFlip = () => {
    if (recordingState === 'recording') {
        stopRecording();
    }
    setIsFlipped(!isFlipped);
    setPronunciationResult(null);
    setRecordingState('idle');
  };

  const resetCardState = () => {
    setIsFlipped(false);
    setStory('');
    setPronunciationResult(null);
    setRecordingState('idle');
  }

  const handleRating = (rating: 'forgot' | 'hard' | 'good' | 'easy') => {
    console.log(`Rated ${dueCards[currentIndex].id} as ${rating}`);
    // Here you would implement FSRS logic to update card properties
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetCardState();
    } else {
      setSessionComplete(true);
    }
  };

  const startRecording = async () => {
    setPronunciationResult(null);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                setAudioChunks((prev) => [...prev, event.data]);
            };
            mediaRecorderRef.current.onstop = handleRecordingStop;
            setAudioChunks([]);
            mediaRecorderRef.current.start();
            setRecordingState('recording');
        } catch (err) {
            console.error('Error accessing microphone:', err);
            toast({
                variant: 'destructive',
                title: 'Microphone Access Denied',
                description: 'Please enable microphone permissions in your browser to use this feature.',
            });
        }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recordingState === 'recording') {
        mediaRecorderRef.current.stop();
        setRecordingState('processing');
    }
  };

  const handleRecordingStop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
          const base64Audio = reader.result as string;
          try {
              const result = await analyzePronunciation({
                  audioDataUri: base64Audio,
                  correctWord: currentFlashcard.word,
                  language: 'Hindi', // This could be made dynamic
              });
              setPronunciationResult(result);
          } catch (error) {
              console.error('Error analyzing pronunciation:', error);
              toast({
                  variant: 'destructive',
                  title: 'Analysis Failed',
                  description: 'Could not analyze your pronunciation. Please try again.',
              });
          } finally {
              setRecordingState('done');
          }
      };
  };

  const handleMicClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (recordingState === 'recording') {
      stopRecording();
    } else {
      startRecording();
    }
  }

  const getMicButton = () => {
    switch (recordingState) {
        case 'recording':
            return <Button size="icon" variant="destructive" onClick={handleMicClick}><Mic /></Button>;
        case 'processing':
            return <Button size="icon" variant="outline" disabled><Loader className="animate-spin" /></Button>;
        default:
            return <Button size="icon" variant="outline" onClick={handleMicClick}><Mic /></Button>;
    }
  }
  
  if (initialDueCards.length === 0) {
    return (
      <div className="text-center">
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">All Caught Up!</CardTitle>
            </CardHeader>
            <CardContent>
                <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mt-2">
                You have no flashcards due for review. Come back later!
                </p>
            </CardContent>
        </Card>
      </div>
    );
  }

  if (sessionComplete) {
     return (
      <div className="text-center">
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Session Complete!</CardTitle>
            </CardHeader>
            <CardContent>
                <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mt-2">
                    You reviewed {dueCards.length} card{dueCards.length > 1 ? 's' : ''}. Great job!
                </p>
                <Link href="/dashboard">
                    <Button className="mt-6">Back to Dashboard</Button>
                </Link>
            </CardContent>
        </Card>
      </div>
    );
  }

  const currentFlashcard = dueCards[currentIndex];
  const progress = ((currentIndex + 1) / dueCards.length) * 100;


  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-center text-3xl font-bold font-headline">Flashcard Review</h1>
      <Progress value={progress} className="mb-6 h-3" />
      
      <Card
        className="relative min-h-[450px] cursor-pointer perspective-[1000px]"
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front of Card */}
          <div className="absolute w-full h-full backface-hidden flex flex-col">
            <CardHeader className="text-center">
              <p className="text-lg text-muted-foreground">Translate this word</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col items-center justify-center">
              <h2 className="text-6xl font-bold font-headline">
                {currentFlashcard.word}
              </h2>
            </CardContent>
            <CardFooter className="justify-center">
                <Button variant="ghost" className="text-muted-foreground" onClick={(e) => { e.stopPropagation(); handleFlip(); }}>
                    <RotateCw className="mr-2 h-4 w-4" /> Flip card
                </Button>
            </CardFooter>
          </div>

          {/* Back of Card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl font-bold font-headline">{currentFlashcard.translation}</h2>
              <p className="text-xl text-muted-foreground mt-2">{currentFlashcard.phonetic}</p>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={(e) => e.stopPropagation()}>
                    <Volume2 />
                </Button>
                {getMicButton()}
              </div>

              {pronunciationResult && (
                <Alert className={`mt-4 text-left ${pronunciationResult.isCorrect ? 'border-green-500 bg-green-500/10' : 'border-yellow-500 bg-yellow-500/10'}`}>
                    {pronunciationResult.isCorrect 
                        ? <CheckCircle className="h-4 w-4 text-green-500" /> 
                        : <XCircle className="h-4 w-4 text-yellow-500" />}
                    <AlertTitle>
                        {pronunciationResult.isCorrect ? "Excellent!" : "Good Try!"}
                    </AlertTitle>
                    <AlertDescription>
                        {pronunciationResult.feedback}
                        {!pronunciationResult.isCorrect && <p className="text-xs mt-1">You said: "{pronunciationResult.transcribedText}"</p>}
                    </AlertDescription>
                </Alert>
              )}

              <Image src={currentFlashcard.imageUrl} alt={currentFlashcard.translation} data-ai-hint="language illustration" width={150} height={100} className="mt-4 rounded-lg" />
              
              <Separator className="my-4 w-full" />
              
              <div className="text-left w-full">
                <h3 className="flex items-center font-semibold text-sm mb-2"><BookText className="mr-2" /> Cosmic Chronicle</h3>
                {loadingStory ? (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader className="animate-spin" />
                    <p>Your avatar's next chapter is being written...</p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    {story}
                  </p>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {isFlipped && (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 animate-in fade-in">
          <Button
            variant="destructive"
            className="py-6 text-base"
            onClick={() => handleRating('forgot')}
          >
            Forgot
          </Button>
          <Button
            variant="outline"
            className="py-6 text-base text-orange-500 border-orange-500 hover:bg-orange-500/10 hover:text-orange-600"
            onClick={() => handleRating('hard')}
          >
            Hard
          </Button>
          <Button
            variant="outline"
            className="py-6 text-base text-primary border-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => handleRating('good')}
          >
            Good
          </Button>
          <Button
            variant="outline"
            className="py-6 text-base text-green-500 border-green-500 hover:bg-green-500/10 hover:text-green-600"
            onClick={() => handleRating('easy')}
          >
            Easy
          </Button>
        </div>
      )}
    </div>
  );
}
