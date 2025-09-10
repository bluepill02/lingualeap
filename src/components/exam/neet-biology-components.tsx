

'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import type { NeetModule } from '@/lib/types';
import { MarkdownRenderer } from './markdown-renderer';
import { AiPracticeGenerator } from './ai-practice-generator';
import { generateNeetQuiz } from '@/ai/flows/neet-quiz-generator';
import { generateNeetFlashcards } from '@/ai/flows/neet-flashcard-generator';

export function BiologyLearnCard({ content }: { content: NeetModule }) {
  const { stateBoardGaps = [], extraNeetConcepts = [], ncertReadingGuide = [] } = content;

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="card-padding-lg">
          <CardTitle className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-500" />
            State Board Gaps & Omissions
          </CardTitle>
          <CardDescription>
            Topics in this chapter that are present in NCERT but may be omitted in the TN State Board syllabus.
          </CardDescription>
        </CardHeader>
        <CardContent className="card-padding-lg prose dark:prose-invert max-w-none">
          {stateBoardGaps.length > 0 ? (
            <ul className="list-disc list-outside space-y-2 pl-5">
              {stateBoardGaps.map((item, index) => (
                <li key={index}><MarkdownRenderer>{item}</MarkdownRenderer></li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No significant gaps identified for this chapter.</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-card/50 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="card-padding-lg">
          <CardTitle className="flex items-center gap-3">
            <Target className="text-destructive" />
            Extra NEET Concepts (Beyond NCERT)
          </CardTitle>
          <CardDescription>
            Advanced or related topics sometimes asked in NEET that go slightly beyond the core NCERT textbook.
          </CardDescription>
        </CardHeader>
        <CardContent className="card-padding-lg prose dark:prose-invert max-w-none">
          {extraNeetConcepts.length > 0 ? (
            <ul className="list-disc list-outside space-y-2 pl-5">
              {extraNeetConcepts.map((item, index) => (
                <li key={index}><MarkdownRenderer>{item}</MarkdownRenderer></li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">This chapter aligns closely with NCERT; no major extra concepts are typically required.</p>
          )}
        </CardContent>
      </Card>
      
      <Card className="bg-card/50 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="card-padding-lg">
          <CardTitle className="flex items-center gap-3">
            <Lightbulb className="text-blue-500" />
            NCERT Reading Guide
          </CardTitle>
          <CardDescription>
            Tips for reading the NCERT textbook for this chapter effectively to maximize your score.
          </CardDescription>
        </CardHeader>
        <CardContent className="card-padding-lg prose dark:prose-invert max-w-none">
          {ncertReadingGuide.length > 0 ? (
            <ol className="list-decimal list-outside space-y-3 pl-5">
              {ncertReadingGuide.map((item, index) => (
                <li key={index}><MarkdownRenderer>{item}</MarkdownRenderer></li>
              ))}
            </ol>
          ) : (
            <p className="text-muted-foreground">No specific reading guidance available for this chapter.</p>
          )}
        </CardContent>
      </Card>

      <AiPracticeGenerator
        subject="Biology"
        chapter={content.title}
        quizGeneratorFn={generateNeetQuiz}
        isFlashcardSupported={true}
      />
    </div>
  );
}
