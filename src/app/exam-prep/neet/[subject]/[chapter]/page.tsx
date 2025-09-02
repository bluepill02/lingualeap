
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getNeetChapterContent } from '@/lib/neet/content-loader';
import { NeetChapterClientPage } from './client-page';
import { neetBiologyChapters, neetChemistryChapters, neetPhysicsChapters } from '@/lib/neet/chapter-data';

export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  
  const content = getNeetChapterContent(subject, chapter);
  
  if (!content) {
    notFound();
  }

  const title = chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
       <header>
        <h1 className="text-4xl font-bold font-headline">{content.title}</h1>
        <p className="text-muted-foreground capitalize">
          NEET Preparation Module | {subject}
        </p>
      </header>
      
      <NeetChapterClientPage content={content} />
    </div>
  );
}

// Re-generate static pages for all chapters
export async function generateStaticParams() {
    const paths: { subject: string; chapter: string }[] = [];

    for (const chapter of neetBiologyChapters) {
        paths.push({ subject: 'biology', chapter: chapter.slug });
    }
    for (const chapter of neetChemistryChapters) {
        paths.push({ subject: 'chemistry', chapter: chapter.slug });
    }
    for (const chapter of neetPhysicsChapters) {
        paths.push({ subject: 'physics', chapter: chapter.slug });
    }

    return paths;
}
