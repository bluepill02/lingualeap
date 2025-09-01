
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Star } from 'lucide-react';
import { ConfettiBurst } from './confetti-burst';

interface ShareableAchievementCardProps {
  lessonTitle: string;
  score: number;
  totalQuestions: number;
}

export function ShareableAchievementCard({ lessonTitle, score, totalQuestions }: ShareableAchievementCardProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `I just completed a lesson on LinguaLeap!`,
        text: `I scored ${score} out of ${totalQuestions} in the "${lessonTitle}" lesson on LinguaLeap! Come join me and learn a new language.`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert('Sharing is not supported on your browser, but you can copy this link: ' + window.location.href);
    }
  };

  return (
    <Card className="relative overflow-hidden border-2 border-accent bg-background text-center shadow-lg">
      {percentage > 75 && <ConfettiBurst />}
      <CardHeader>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Star className="h-10 w-10" />
        </div>
        <CardTitle className="mt-4 font-headline text-2xl">Lesson Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">You've finished the lesson:</p>
        <p className="font-bold text-lg">{lessonTitle}</p>
        <div className="rounded-lg bg-primary/10 p-4">
            <p className="text-sm text-muted-foreground">Your Score</p>
            <p className="text-4xl font-bold text-primary">{score} / {totalQuestions}</p>
            <p className="font-semibold text-accent">{percentage}% Accuracy</p>
        </div>
        <Button size="lg" className="w-full" onClick={handleShare}>
            <Share2 className="mr-2"/>
            Share Your Achievement
        </Button>
      </CardContent>
    </Card>
  );
}
