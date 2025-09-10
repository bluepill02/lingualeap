
'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, Zap, RefreshCcw, Loader2, Info, Lightbulb, HelpCircle, Check, X, Video, VideoOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { analyzeImageForLearning } from '@/ai/flows/ar-immersion-flow';
import type { AnalyzeImageOutput } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function ARImmersionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeImageOutput | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast({
          variant: 'destructive',
          title: 'Camera Not Supported',
          description: 'Your browser does not support camera access.',
        });
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        streamRef.current = stream;
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
             setIsCameraOn(true);
          }
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this feature.',
        });
      }
    };

    getCameraPermission();

    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, [toast]);

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    setIsLoading(true);
    setAnalysisResult(null);
    setSelectedOption(null);
    setIsSubmitted(false);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if (!context) {
        setIsLoading(false);
        return;
    }
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    const dataUri = canvas.toDataURL('image/jpeg');

    try {
      const result = await analyzeImageForLearning({ photoDataUri: dataUri, targetLanguage: 'Hindi' });
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'Could not analyze the image. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuizSubmit = () => {
    setIsSubmitted(true);
  }

  const renderQuizOption = (option: string) => {
    const isCorrectAnswer = option === analysisResult?.quiz.answer;
    const isSelected = selectedOption === option;

    const getVariant = () => {
        if (!isSubmitted) return isSelected ? 'secondary' : 'outline';
        if (isCorrectAnswer) return 'success';
        if (isSelected) return 'destructive';
        return 'outline';
    }

    return (
        <Button 
            key={option}
            variant={getVariant()}
            className="w-full justify-start items-center h-auto py-2"
            onClick={() => !isSubmitted && setSelectedOption(option)}
        >
            <span className="flex-1 flex items-center gap-2 text-left whitespace-normal">
                {isSubmitted && isCorrectAnswer && <Check className="h-4 w-4 flex-shrink-0" />}
                {isSubmitted && isSelected && !isCorrectAnswer && <X className="h-4 w-4 flex-shrink-0" />}
                {option}
            </span>
        </Button>
    );
  }


  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">AR Immersion</h1>
        <p className="text-muted-foreground">
          Point your camera at an object and tap capture to learn new vocabulary.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden flex items-center justify-center">
            {hasCameraPermission === null && (
              <div className="text-center p-4">
                <Loader2 className="w-8 h-8 mx-auto animate-spin text-muted-foreground mb-4"/>
                <p>Requesting camera access...</p>
              </div>
            )}
             {hasCameraPermission === false && (
                <div className="text-center p-4 text-destructive">
                    <VideoOff className="w-12 h-12 mx-auto mb-4"/>
                    <h3 className="font-semibold">Camera Not Available</h3>
                    <p className="text-sm">Please enable camera permissions in your browser.</p>
                </div>
            )}
            {hasCameraPermission && (
                <>
                     <video ref={videoRef} className={cn("w-full h-full object-cover transition-opacity duration-500", isCameraOn ? 'opacity-100' : 'opacity-0')} autoPlay muted playsInline />
                     {!isCameraOn && hasCameraPermission && (
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            <Video className="w-12 h-12 mx-auto text-muted-foreground mb-4"/>
                            <h3 className="font-semibold">Starting camera...</h3>
                        </div>
                     )}
                </>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            <Button size="lg" onClick={captureImage} disabled={!isCameraOn || isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Camera className="mr-2" />
                   {analysisResult ? 'Scan Another Object' : 'Capture'}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      <canvas ref={canvasRef} className="hidden" />
      
      {analysisResult && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-primary" />
              Analysis Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <Alert>
                  <Info className="h-4 w-4"/>
                  <AlertTitle>Object Identified: {analysisResult.objectName}</AlertTitle>
                  <AlertDescription className="text-4xl font-bold text-primary">{analysisResult.translatedWord}</AlertDescription>
                  <p className="text-muted-foreground">{analysisResult.romanization}</p>
              </Alert>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2"><HelpCircle/> Quick Quiz</h3>
                <p>{analysisResult.quiz.question}</p>
                <div className="space-y-2">
                  {analysisResult.quiz.options.map(renderQuizOption)}
                </div>
                {isSubmitted ? (
                   <Alert variant={selectedOption === analysisResult.quiz.answer ? 'success' : 'warning'}>
                        <AlertTitle>
                            {selectedOption === analysisResult.quiz.answer ? 'Correct!' : 'Nice try!'}
                        </AlertTitle>
                        <AlertDescription>
                            The correct answer is: <strong>{analysisResult.quiz.answer}</strong>
                        </AlertDescription>
                    </Alert>
                ) : (
                  <Button onClick={handleQuizSubmit} disabled={!selectedOption}>Submit</Button>
                )}
              </div>
              
              <Alert variant="default" className="bg-accent/10 border-accent">
                <Lightbulb className="h-4 w-4 text-accent" />
                <AlertTitle>Mnemonic Hook</AlertTitle>
                <AlertDescription>{analysisResult.mnemonic}</AlertDescription>
              </Alert>
          </CardContent>
        </Card>
      )}

    </div>
  );
}
