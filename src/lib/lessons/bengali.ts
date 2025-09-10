
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const bengaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-bengali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-bengali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-bengali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-bengali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-bengali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-bengali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-bengali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-bengali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-bengali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-bengali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-bengali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-bengali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-bengali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-bengali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const bengaliLessons: MicroLesson[] = [
  { id: 'lesson-bengali-1', title: 'Lesson 1', deckId: 'deck-bengali-1', ...{ vocabulary: [{ word: 'নমস্কার', romanization: 'Nomoshkar', definition: 'Hello', ipa: '/nɔmoʃkar/' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-2', title: 'Lesson 2', deckId: 'deck-bengali-2', ...{ vocabulary: [{ word: 'জল', romanization: 'Jol', definition: 'Water', ipa: '/dʒɔl/' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-3', title: 'Lesson 3', deckId: 'deck-bengali-3', ...{ vocabulary: [{ word: 'কেমন আছেন?', romanization: 'Kemon achen?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-4', title: 'Lesson 4', deckId: 'deck-bengali-4', ...{ vocabulary: [{ word: 'আমি যাই', romanization: 'Ami jai', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-5', title: 'Lesson 5', deckId: 'deck-bengali-5', ...{ vocabulary: [{ word: 'দাম কত?', romanization: 'Dam koto?', definition: 'What is the price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-6', title: 'Lesson 6', deckId: 'deck-bengali-6', ...{ vocabulary: [{ word: 'কারণ', romanization: 'Karon', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bengali-7', title: 'Lesson 7', deckId: 'deck-bengali-7', ...{ vocabulary: [{ word: 'আমার শখ', romanization: 'Amar shokh', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
