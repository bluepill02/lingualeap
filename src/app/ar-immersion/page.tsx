'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, Zap, RefreshCcw, Loader2, Info, Lightbulb, HelpCircle, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { analyzeImageForLearning, AnalyzeImageOutput } from '@/ai/flows/ar-immersion-flow';

export default function ARImmersionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeImageOutput | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }
      try {
        const cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        setHasCameraPermission(true);
        setStream(cameraStream);
        if (videoRef.current) {
          videoRef.current.srcObject = cameraStream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    getCameraPermission();

    return () => {
      stream?.getTracks().forEach(track => track.stop());
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
    if (!context) return;
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

  const reset = () => {
    setAnalysisResult(null);
    setSelectedOption(null);
    setIsSubmitted(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">AR Immersion</h1>
        <p className="text-muted-foreground">
          Point your camera at an object and tap capture to learn new vocabulary.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
            <div className="absolute inset-0 flex items-center justify-center">
              {hasCameraPermission === false && (
                <Alert variant="destructive" className="m-4">
                  <AlertTitle>Camera Access Required</AlertTitle>
                  <AlertDescription>Please allow camera access to use this feature.</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button size="lg" onClick={captureImage} disabled={!hasCameraPermission || isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Camera className="mr-2" />
                  Capture
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
                  {analysisResult.quiz.options.map((option, index) => (
                    <Button 
                      key={index}
                      variant={
                        isSubmitted 
                          ? (option === analysisResult.quiz.answer ? 'default' : (selectedOption === option ? 'destructive' : 'outline'))
                          : (selectedOption === option ? 'secondary' : 'outline')
                      }
                      className="w-full justify-start"
                      onClick={() => !isSubmitted && setSelectedOption(option)}
                    >
                      {isSubmitted && option === analysisResult.quiz.answer && <Check className="mr-2" />}
                      {isSubmitted && selectedOption === option && option !== analysisResult.quiz.answer && <X className="mr-2" />}
                      {option}
                    </Button>
                  ))}
                </div>
                {isSubmitted ? (
                  <p className={`text-sm ${selectedOption === analysisResult.quiz.answer ? 'text-green-500' : 'text-destructive'}`}>
                    {selectedOption === analysisResult.quiz.answer 
                      ? "Correct!" 
                      : `Nice try! The correct answer is: ${analysisResult.quiz.answer}`}
                  </p>
                ) : (
                  <Button onClick={handleQuizSubmit} disabled={!selectedOption}>Submit</Button>
                )}
              </div>
              
              <Alert variant="default" className="bg-accent/10 border-accent">
                <Lightbulb className="h-4 w-4 text-accent" />
                <AlertTitle>Mnemonic Hook</AlertTitle>
                <AlertDescription>{analysisResult.mnemonic}</AlertDescription>
              </Alert>

              <Button variant="outline" onClick={reset} className="w-full">
                <RefreshCcw className="mr-2"/>
                Scan Another Object
              </Button>
          </CardContent>
        </Card>
      )}

    </div>
  );
}
