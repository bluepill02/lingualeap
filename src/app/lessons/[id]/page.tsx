
'use server';

import { allMicroLessons, allLessonDecks } from '@/lib/data';
import { notFound } from 'next/navigation';
import LessonPageComponent from './client-page';
import type { LessonDeck, MicroLesson } from '@/lib/types';


export default async function LessonPage({ params }: { params: { id: string } }) {
  const lesson = allMicroLessons.find((l) => l.id === params.id);
  const deck = allLessonDecks.find((d) => d.id === lesson?.deckId);

  if (!lesson || !deck) {
    notFound();
  }

  return <LessonPageComponent lesson={lesson} deck={deck as LessonDeck} />;
}
