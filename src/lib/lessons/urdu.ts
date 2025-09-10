
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const urduDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-urdu-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-urdu-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-urdu-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-urdu-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-urdu-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-urdu-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-urdu-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-urdu-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-urdu-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-urdu-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-urdu-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-urdu-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-urdu-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-urdu-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const urduLessons: MicroLesson[] = [
  { id: 'lesson-urdu-1', title: 'Lesson 1', deckId: 'deck-urdu-1', ...{ vocabulary: [{ word: 'آداب', romanization: 'Aadaab', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-2', title: 'Lesson 2', deckId: 'deck-urdu-2', ...{ vocabulary: [{ word: 'پانی', romanization: 'Paani', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-3', title: 'Lesson 3', deckId: 'deck-urdu-3', ...{ vocabulary: [{ word: 'آپ کیسے ہیں؟', romanization: 'Aap kaise hain?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-4', title: 'Lesson 4', deckId: 'deck-urdu-4', ...{ vocabulary: [{ word: 'میں جاتا ہوں', romanization: 'Main jaata hoon', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-5', title: 'Lesson 5', deckId: 'deck-urdu-5', ...{ vocabulary: [{ word: 'اس کی قیمت کیا ہے؟', romanization: 'Iski qeemat kya hai?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-6', title: 'Lesson 6', deckId: 'deck-urdu-6', ...{ vocabulary: [{ word: 'کیونکہ', romanization: 'Kyunki', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-urdu-7', title: 'Lesson 7', deckId: 'deck-urdu-7', ...{ vocabulary: [{ word: 'میرا مشغلہ', romanization: 'Mera mashghala', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
