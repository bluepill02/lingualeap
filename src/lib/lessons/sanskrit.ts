
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const sanskritDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-sanskrit-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-sanskrit-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-sanskrit-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-sanskrit-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-sanskrit-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-sanskrit-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-sanskrit-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-sanskrit-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-sanskrit-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-sanskrit-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-sanskrit-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const sanskritLessons: MicroLesson[] = [
  { id: 'lesson-sanskrit-1', title: 'Lesson 1', deckId: 'deck-sanskrit-1', ...{ vocabulary: [{ word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-2', title: 'Lesson 2', deckId: 'deck-sanskrit-2', ...{ vocabulary: [{ word: 'जलम्', romanization: 'Jalam', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-3', title: 'Lesson 3', deckId: 'deck-sanskrit-3', ...{ vocabulary: [{ word: 'भवान् कथम् अस्ति?', romanization: 'Bhavan katham asti?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-4', title: 'Lesson 4', deckId: 'deck-sanskrit-4', ...{ vocabulary: [{ word: 'अहं गच्छामि', romanization: 'Aham gachhami', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-5', title: 'Lesson 5', deckId: 'deck-sanskrit-5', ...{ vocabulary: [{ word: 'अस्य मूल्यं किम्?', romanization: 'Asya mulyam kim?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-6', title: 'Lesson 6', deckId: 'deck-sanskrit-6', ...{ vocabulary: [{ word: 'यतः', romanization: 'Yatah', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-sanskrit-7', title: 'Lesson 7', deckId: 'deck-sanskrit-7', ...{ vocabulary: [{ word: 'मम रुचिः', romanization: 'Mama ruchi', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
