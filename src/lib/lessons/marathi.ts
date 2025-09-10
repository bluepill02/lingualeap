
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const marathiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-marathi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-marathi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-marathi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-marathi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-marathi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-marathi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-marathi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-marathi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-marathi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-marathi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-marathi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-marathi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-marathi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-marathi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const marathiLessons: MicroLesson[] = [
  { id: 'lesson-marathi-1', title: 'Lesson 1', deckId: 'deck-marathi-1', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-2', title: 'Lesson 2', deckId: 'deck-marathi-2', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-3', title: 'Lesson 3', deckId: 'deck-marathi-3', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-4', title: 'Lesson 4', deckId: 'deck-marathi-4', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-5', title: 'Lesson 5', deckId: 'deck-marathi-5', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-6', title: 'Lesson 6', deckId: 'deck-marathi-6', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-marathi-7', title: 'Lesson 7', deckId: 'deck-marathi-7', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
