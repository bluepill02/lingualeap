import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { flashcards } from '@/lib/data';

export function ReviewCard() {
  const dueCards = flashcards.filter(
    (fc) => new Date(fc.nextDue) <= new Date()
  ).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Clock className="text-primary" />
          Next Review
        </CardTitle>
        <CardDescription>You have {dueCards} flashcards due for review.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center rounded-lg bg-primary/10 p-6">
          <p className="text-5xl font-bold text-primary">{dueCards}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/flashcards">
          <Button className="w-full">Start Review</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
