import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import { mockUser, flashcards, lessons } from '@/lib/data';

export function WelcomeCard() {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="font-headline">Welcome back, {mockUser.name}!</CardTitle>
        <CardDescription>
          Ready for another leap in your language journey? Let's get started.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-bold">{flashcards.length}</p>
            <p className="text-sm text-muted-foreground">Words Learned</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
             <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-bold">{lessons.length}</p>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
