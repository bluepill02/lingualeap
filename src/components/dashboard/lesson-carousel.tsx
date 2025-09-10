
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Lesson } from '@/lib/types';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonCarouselProps {
  lessons: Lesson[];
  isPro: boolean;
}

export function LessonCarousel({ lessons, isPro }: LessonCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {lessons.map((lesson, index) => {
          const isLocked = index >= 3 && !isPro;
          return (
          <CarouselItem key={lesson.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className={cn("flex h-full flex-col", isLocked && "bg-muted/50 border-dashed")}>
                <CardHeader className="p-0 relative">
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center rounded-t-lg">
                      <Lock className="text-white w-12 h-12" />
                    </div>
                  )}
                  <Image
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    data-ai-hint="language culture"
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover aspect-video"
                  />
                </CardHeader>
                <div className="flex flex-1 flex-col p-6">
                  <CardTitle className="font-headline text-lg">{lesson.title}</CardTitle>
                  <CardDescription className="mt-1 flex-1">
                    {lesson.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="secondary">{lesson.category}</Badge>
                  </div>
                </div>
                <CardFooter>
                   <Link href={isLocked ? '/upgrade' : `/lessons/${lesson.id}`} className="w-full">
                    <Button className="w-full" disabled={isLocked}>
                      {isLocked ? 'Upgrade to Pro' : 'Start Lesson'}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        )})}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
