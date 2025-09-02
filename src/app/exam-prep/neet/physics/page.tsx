
import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';
import Link from 'next/link';

// Function to get chapter files from the content directory
const getChapters = (subject: string) => {
  const contentDir = path.join(process.cwd(), 'content', 'neet', subject);
  const filenames = fs.readdirSync(contentDir);
  return filenames.map(filename => {
    const name = path.basename(filename, '.md');
    const title = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
      slug: name,
      title: title,
    };
  });
};

export default function NeetPhysicsPage() {
  const chapters = getChapters('physics');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">NEET Physics Chapters</h1>
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
              <Link href={`/exam-prep/neet/physics/${chapter.slug}`}>
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
