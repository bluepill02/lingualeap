
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
}

export function LessonCarousel({ lessons }: LessonCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {lessons.map((lesson, index) => {
          return (
          <CarouselItem key={lesson.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="flex h-full flex-col">
                <CardHeader className="p-0 relative">
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
                   <Link href={`/lessons/${lesson.id}`} className="w-full" asChild>
                    <Button className="w-full">
                        Start Lesson
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
