import Link from 'next/link';
import Image from 'next/image';
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
import { lessons } from '@/lib/data';

export default function LessonsPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold font-headline">All Lessons</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="flex h-full flex-col">
            <CardHeader className="p-0">
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
              <Link href={`/lessons/${lesson.id}`} legacyBehavior passHref>
                <Button className="w-full">Start Lesson</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
