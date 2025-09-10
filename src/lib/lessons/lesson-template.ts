
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

// This is a template file. Duplicate it and rename it for a new language.
// e.g., `sanskrit.ts`

// Replace 'template' with the language name in lowercase (e.g., 'sanskrit')
const LANGUAGE_ID = 'template';

// 1. Define the Lesson Decks for this language
export const templateDecks: LessonDeck[] = [
  // Foundations
  { id: `deck-${LANGUAGE_ID}-1`, title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: `lesson-${LANGUAGE_ID}-1`, title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: `deck-${LANGUAGE_ID}-2`, title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: `lesson-${LANGUAGE_ID}-2`, title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-template-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: `lesson-${LANGUAGE_ID}-3`, title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: `deck-${LANGUAGE_ID}-4`, title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: `lesson-${LANGUAGE_ID}-4`, title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-template-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: `lesson-${LANGUAGE_ID}-5`, title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: `deck-${LANGUAGE_ID}-6`, title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: `lesson-${LANGUAGE_ID}-6`, title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-template-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: `lesson-${LANGUAGE_ID}-7`, title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

// 2. Define the Micro-Lessons for this language
// Each lesson should have unique, language-specific content.
export const templateLessons: MicroLesson[] = [
  { id: `lesson-${LANGUAGE_ID}-1`, title: 'Lesson 1', deckId: `deck-${LANGUAGE_ID}-1`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-2`, title: 'Lesson 2', deckId: `deck-${LANGUAGE_ID}-2`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-3`, title: 'Lesson 3', deckId: `deck-${LANGUAGE_ID}-3`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-4`, title: 'Lesson 4', deckId: `deck-${LANGUAGE_ID}-4`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-5`, title: 'Lesson 5', deckId: `deck-${LANGUAGE_ID}-5`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-6`, title: 'Lesson 6', deckId: `deck-${LANGUAGE_ID}-6`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: `lesson-${LANGUAGE_ID}-7`, title: 'Lesson 7', deckId: `deck-${LANGUAGE_ID}-7`, ...{ vocabulary: [{ word: '[Word]', romanization: '[Romanization]', definition: '[Definition]', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
