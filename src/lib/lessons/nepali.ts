
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const nepaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-nepali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-nepali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-nepali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-nepali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-nepali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-nepali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-nepali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-nepali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-nepali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-nepali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-nepali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-nepali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-nepali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-nepali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const nepaliLessons: MicroLesson[] = [
  { id: 'lesson-nepali-1', title: 'Lesson 1', deckId: 'deck-nepali-1', ...{ vocabulary: [{ word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-2', title: 'Lesson 2', deckId: 'deck-nepali-2', ...{ vocabulary: [{ word: 'पानी', romanization: 'Paani', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-3', title: 'Lesson 3', deckId: 'deck-nepali-3', ...{ vocabulary: [{ word: 'तपाईंलाई कस्तो छ?', romanization: 'Tapaai lai kasto chha?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-4', title: 'Lesson 4', deckId: 'deck-nepali-4', ...{ vocabulary: [{ word: 'म जान्छु', romanization: 'Ma jaanchu', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-5', title: 'Lesson 5', deckId: 'deck-nepali-5', ...{ vocabulary: [{ word: 'यसको मूल्य कति हो?', romanization: 'Yasko mulya kati ho?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-6', title: 'Lesson 6', deckId: 'deck-nepali-6', ...{ vocabulary: [{ word: 'किनभने', romanization: 'Kinabhane', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-nepali-7', title: 'Lesson 7', deckId: 'deck-nepali-7', ...{ vocabulary: [{ word: 'मेरो रुचि', romanization: 'Mero ruchi', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
