
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const dogriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-dogri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-dogri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-dogri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-dogri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-dogri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-dogri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-dogri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-dogri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-dogri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-dogri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-dogri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-dogri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-dogri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-dogri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const dogriLessons: MicroLesson[] = [
  { id: 'lesson-dogri-1', title: 'Lesson 1', deckId: 'deck-dogri-1', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-2', title: 'Lesson 2', deckId: 'deck-dogri-2', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-3', title: 'Lesson 3', deckId: 'deck-dogri-3', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-4', title: 'Lesson 4', deckId: 'deck-dogri-4', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-5', title: 'Lesson 5', deckId: 'deck-dogri-5', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-6', title: 'Lesson 6', deckId: 'deck-dogri-6', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-dogri-7', title: 'Lesson 7', deckId: 'deck-dogri-7', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
