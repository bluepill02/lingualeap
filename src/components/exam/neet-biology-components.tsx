
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { BookOpen, Lightbulb } from 'lucide-react';
import type { NeetModule } from '@/lib/types';
import { MarkdownRenderer } from './markdown-renderer';

export function BiologyLearnCard({ content }: { content: NeetModule }) {
  const { conceptNotes, conceptOverview, tamilConnection, culturalContext } = content;

  if (!conceptNotes || conceptNotes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Content for this chapter is being generated. Please check back soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><BookOpen/> Core Concepts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          {conceptOverview && <MarkdownRenderer>{conceptOverview}</MarkdownRenderer>}
        </div>

        {conceptNotes.map((note, index) => (
          <div key={index} className="p-4 border rounded-lg bg-muted/30">
            <h3 className="font-bold text-lg font-headline">
              <MarkdownRenderer>{note.heading.english} ({note.heading.tamil})</MarkdownRenderer>
            </h3>
            <div className="mt-2 space-y-2 text-muted-foreground prose dark:prose-invert max-w-none">
              {note.content.map((item, itemIndex) => (
                 <MarkdownRenderer key={itemIndex}>{item.english} ({item.tamil})</MarkdownRenderer>
              ))}
            </div>
          </div>
        ))}
        
        {culturalContext && (
            <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Cultural Connect</AlertTitle>
                <AlertDescription>
                    <MarkdownRenderer>{culturalContext}</MarkdownRenderer>
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
