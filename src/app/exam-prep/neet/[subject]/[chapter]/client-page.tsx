
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NeetModule } from '@/lib/types';
import { ConceptNotesCard, WorkedExamplesCard, PracticeSectionCard } from '@/components/exam/neet-chapter-components';

export function NeetChapterClientPage({ content }: { content: NeetModule }) {
  return (
    <Tabs defaultValue="concept-notes" className="w-full mt-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="concept-notes">Concept Notes</TabsTrigger>
        <TabsTrigger value="worked-examples">Worked Examples</TabsTrigger>
        <TabsTrigger value="practice">Practice Section</TabsTrigger>
      </TabsList>
      <TabsContent value="concept-notes" className="mt-4">
        <ConceptNotesCard content={content.conceptNotes} />
      </TabsContent>
      <TabsContent value="worked-examples" className="mt-4">
        <WorkedExamplesCard examples={content.workedExamples} />
      </TabsContent>
      <TabsContent value="practice" className="mt-4">
        <PracticeSectionCard 
            mcqs={content.mcqs}
            assertionReasons={content.assertionReasons}
            matchTheColumns={content.matchTheColumns}
        />
      </TabsContent>
    </Tabs>
  );
}
