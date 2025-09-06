
'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { neetContent } from '@/lib/neet/content-loader';

const chapters = [
    'Diversity in Living World',
    'Structural Organisation in Animals and Plants',
    'Cell Structure and Function',
    'Plant Physiology',
    'Human Physiology',
    'Reproduction',
    'Genetics and Evolution',
    'Biology and Human Welfare',
    'Biotechnology and Its Applications',
    'Ecology and Environment',
];

export default function NeetBiologyPage() {
  let chapterCounter = 0;
  
  const getSlug = (chapterName: string) => chapterName.replace(/[\/&,]/g, '').replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="container mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet">
            <Button variant="ghost" size="icon" aria-label="Back to NEET Prep">
                <ArrowLeft className="w-5 h-5" />
            </Button>
        </Link>
        <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-teal-500/20 text-teal-400">
                <BookOpen className="w-6 h-6" />
            </div>
            <div>
                <h1 className="text-2xl font-bold font-headline">Biology</h1>
                <p className="text-muted-foreground">
                    Explore life sciences and biological processes
                </p>
            </div>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter) => {
              chapterCounter++;
              const slug = getSlug(chapter);
              const content = neetContent[slug];
              if (!content) return null;
              const mappingDescription = content.syllabusMapping?.[0]?.tnBoardChapter || 'Mapping not available.';
              return (
                  <Link href={`/exam-prep/neet/biology/${slug}`} key={slug}>
                      <Card className="hover:border-primary transition-colors h-full flex flex-col">
                          <CardContent className="card-padding-lg space-y-4 flex-grow">
                              <div className="flex justify-between items-start">
                                  <h3 className="text-lg font-bold font-headline pr-4">{chapter}</h3>
                                  <Badge variant="secondary">Chapter {chapterCounter}</Badge>
                              </div>
                               <div className="mt-auto bg-primary/5 border-primary/20 card-padding-sm rounded-md">
                                    <div className="flex items-center gap-2 text-primary/80 text-xs">
                                      <BookOpen className="h-4 w-4" />
                                      <span>TN Board Mapping: {mappingDescription}</span>
                                    </div>
                                </div>
                          </CardContent>
                      </Card>
                  </Link>
              )
          })}
      </div>

       <Card>
        <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 divide-x divide-border text-center card-padding-lg">
            <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{chapters.length}</p>
                <p className="text-sm text-muted-foreground">Total Chapters</p>
            </div>
             <div>
                <p className="text-2xl font-bold">0%</p>
                <p className="text-sm text-muted-foreground">Progress</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
