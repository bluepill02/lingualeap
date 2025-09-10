
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, Zap, Loader2, Info, Lightbulb, HelpCircle, Check, X, VideoOff, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { analyzeImageForLearning } from '@/ai/flows/ar-immersion-flow';
import type { AnalyzeImageOutput } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function ARImmersionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeImageOutput | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleNewAnalysis = useCallback((result: AnalyzeImageOutput) => {
    setAnalysisResult(result);
    setSelectedOption(null);
    setIsQuizSubmitted(false);
    setIsSheetOpen(true);
  }, []);

  const captureAndAnalyze = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || isProcessing) return;

    setIsProcessing(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      const dataUri = canvas.toDataURL('image/jpeg');

      try {
        const result = await analyzeImageForLearning({ photoDataUri: dataUri, targetLanguage: 'Hindi' });
        if (result && result.isObjectFound) {
          handleNewAnalysis(result);
        }
      } catch (error) {
        console.error('Error analyzing image:', error);
        toast({
          variant: 'destructive',
          title: 'Analysis Failed',
          description: 'Could not analyze the image. Please try again.',
        });
      }
    }
    setIsProcessing(false);
  }, [isProcessing, toast, handleNewAnalysis]);

  useEffect(() => {
    const getCameraPermission = async () => {
      // ... (camera permission logic remains the same)
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        console.error('Error accessing rear camera, trying default:', error);
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setHasCameraPermission(true);
        } catch (finalError) {
          console.error('Error accessing any camera:', finalError);
          setHasCameraPermission(false);
        }
      }
    };

    getCameraPermission();

    // Setup interval for continuous analysis
    const intervalId = setInterval(() => {
      if (hasCameraPermission && !isSheetOpen) {
        captureAndAnalyze();
      }
    }, 4000); // Analyze every 4 seconds

    return () => {
      clearInterval(intervalId);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [hasCameraPermission, isSheetOpen, captureAndAnalyze]);
  
  const renderQuizOption = (option: string) => {
    if (!analysisResult?.quiz) return null;
    const isCorrectAnswer = option === analysisResult.quiz.answer;
    const isSelected = selectedOption === option;

    const getVariant = () => {
        if (!isQuizSubmitted) return isSelected ? 'secondary' : 'outline';
        if (isCorrectAnswer) return 'success';
        if (isSelected) return 'destructive';
        return 'outline';
    }

    return (
        <Button 
            key={option}
            variant={getVariant()}
            className="w-full justify-start items-center h-auto py-2"
            onClick={() => !isQuizSubmitted && setSelectedOption(option)}
        >
            <span className="flex-1 flex items-center gap-2 text-left whitespace-normal">
                {isQuizSubmitted && isCorrectAnswer && <Check className="h-4 w-4 flex-shrink-0" />}
                {isQuizSubmitted && isSelected && !isCorrectAnswer && <X className="h-4 w-4 flex-shrink-0" />}
                {option}
            </span>
        </Button>
    );
  }

  return (
    <div className="container mx-auto space-y-4 h-[calc(100vh-8rem)] flex flex-col">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">AR Immersion</h1>
        <p className="text-muted-foreground">
          Point your camera at objects to learn new vocabulary in real-time.
        </p>
      </div>

      <Card className="flex-1 w-full relative overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="relative h-full w-full bg-muted flex items-center justify-center">
             <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
             <canvas ref={canvasRef} className="hidden" />

            {hasCameraPermission === null && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80">
                <Loader2 className="w-8 h-8 mx-auto animate-spin text-muted-foreground mb-4"/>
                <p>Requesting camera access...</p>
              </div>
            )}
            {hasCameraPermission === false && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 text-center p-4 text-destructive">
                <VideoOff className="w-12 h-12 mx-auto mb-4"/>
                <h3 className="font-semibold">Camera Not Available</h3>
                <p className="text-sm">Please enable camera permissions in your browser settings to use this feature.</p>
              </div>
            )}

            <AnimatePresence>
              {analysisResult && (
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                     <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute bottom-6 right-6"
                    >
                      <Button size="lg" className="rounded-full h-16 w-16 shadow-2xl animate-pulse">
                        <Eye className="h-8 w-8" />
                      </Button>
                    </motion.div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Zap className="text-primary" />
                        Analysis Result
                      </SheetTitle>
                      <SheetDescription>Object identified: {analysisResult.objectName}</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 space-y-6">
                      <Alert>
                          <Info className="h-4 w-4"/>
                          <AlertTitle>{analysisResult.objectName}</AlertTitle>
                          <AlertDescription className="text-4xl font-bold text-primary">{analysisResult.translatedWord}</AlertDescription>
                          <p className="text-muted-foreground">{analysisResult.romanization}</p>
                      </Alert>

                      {analysisResult.quiz && (
                        <div className="space-y-4">
                          <h3 className="font-semibold flex items-center gap-2"><HelpCircle/> Quick Quiz</h3>
                          <p>{analysisResult.quiz.question}</p>
                          <div className="space-y-2">
                            {analysisResult.quiz.options.map(renderQuizOption)}
                          </div>
                          {!isQuizSubmitted ? (
                            <Button onClick={() => setIsQuizSubmitted(true)} disabled={!selectedOption}>Submit</Button>
                          ) : (
                            <Alert variant={selectedOption === analysisResult.quiz.answer ? 'success' : 'warning'}>
                                <AlertTitle>
                                    {selectedOption === analysisResult.quiz.answer ? 'Correct!' : 'Nice try!'}
                                </AlertTitle>
                                <AlertDescription>
                                    The correct answer is: <strong>{analysisResult.quiz.answer}</strong>
                                </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      )}
                      
                      {analysisResult.mnemonic && (
                         <Alert variant="default" className="bg-accent/10 border-accent">
                          <Lightbulb className="h-4 w-4 text-accent" />
                          <AlertTitle>Mnemonic Hook</AlertTitle>
                          <AlertDescription>{analysisResult.mnemonic}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </AnimatePresence>
             
          </div>
        </CardContent>
      </Card>
       <div className="text-center text-sm text-muted-foreground p-2 flex items-center justify-center gap-2">
          {isProcessing ? (
              <><Loader2 className="h-4 w-4 animate-spin"/> Analyzing...</>
          ) : (
              <><Camera className="h-4 w-4"/> Looking for objects...</>
          )}
      </div>
    </div>
  );
}
