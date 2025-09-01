import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame } from 'lucide-react';
import { mockUser } from '@/lib/data';

export function StreakCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Flame className="text-destructive" />
          Learning Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <Flame className="absolute h-full w-full text-destructive/20" />
          <span className="z-10 text-4xl font-bold text-destructive">
            {mockUser.streak}
          </span>
        </div>
        <p className="font-bold">Days</p>
        <p className="text-sm text-muted-foreground">
          Keep it up to build a strong learning habit!
        </p>
      </CardContent>
    </Card>
  );
}
