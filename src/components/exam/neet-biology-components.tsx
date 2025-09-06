
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import type { NeetModule, ConceptNote } from '@/lib/types';
import { MarkdownRenderer } from './markdown-renderer';
import { BilingualText } from './bilingual-text';
import { ChevronsDown } from 'lucide-react';

export function BiologyLearnCard({ content }: { content: NeetModule }) {
  const { conceptNotes = [] } = content;

  if (!conceptNotes || conceptNotes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Learn</CardTitle>
        </CardHeader>
        <CardContent className="card-padding-lg">
          <p>Content for this chapter is being generated. Please check back soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {conceptNotes.map((note, index) => (
        <React.Fragment key={index}>
          <Card className="bg-card/50 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="card-padding-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-lg">{index + 1}</span>
                <BilingualText 
                    english={typeof note === 'string' ? '' : note.heading.english} 
                    tamil={typeof note === 'string' ? undefined : note.heading.tamil} 
                    className="not-prose text-xl font-bold font-headline" 
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding-lg space-y-4">
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                {typeof note !== 'string' && note.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <BilingualText 
                        english={typeof item === 'string' ? item : item.english} 
                        tamil={typeof item === 'string' ? undefined : item.tamil} 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {index < conceptNotes.length - 1 && (
            <div className="flex justify-center items-center">
              <ChevronsDown className="h-6 w-6 text-muted-foreground" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
