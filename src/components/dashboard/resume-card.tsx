import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { lessons } from '@/lib/data';

export function ResumeCard() {
  const lastLesson = lessons[0];

  return (
    <Card className="relative flex flex-col justify-between overflow-hidden">
        <Image
          src={lastLesson.imageUrl}
          alt={lastLesson.title}
          data-ai-hint="language learning"
          fill
          className="object-cover opacity-20"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="font-headline">Resume Your Session</CardTitle>
          <CardDescription>
            You were last learning: <strong>{lastLesson.title}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={`/lessons/${lastLesson.id}`} legacyBehavior passHref>
            <Button size="lg" className="w-full">
              <Play className="mr-2" />
              Continue Lesson
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}
