
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';
import Link from 'next/link';
import { neetBiologyChapters } from '@/lib/neet/chapter-data';

export default function NeetBiologyPage() {
  const chapters = neetBiologyChapters;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">NEET Biology Chapters</h1>
        <p className="text-muted-foreground">
          Select a chapter to start your preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <Card key={chapter.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="text-primary h-5 w-5" />
                {chapter.title}
              </CardTitle>
              <CardDescription>A complete module on {chapter.title}.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <div className="p-6 pt-0">
              <Link href={`/exam-prep/neet/biology/${chapter.slug}`}>
                <Button className="w-full">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
