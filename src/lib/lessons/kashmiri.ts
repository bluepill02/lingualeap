
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const kashmiriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-kashmiri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-kashmiri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-kashmiri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-kashmiri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-kashmiri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-kashmiri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-kashmiri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-kashmiri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-kashmiri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-kashmiri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-kashmiri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const kashmiriLessons: MicroLesson[] = [
  { id: 'lesson-kashmiri-1', title: 'Lesson 1', deckId: 'deck-kashmiri-1', ...{ vocabulary: [{ word: 'آداب', romanization: 'Aadaab', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-2', title: 'Lesson 2', deckId: 'deck-kashmiri-2', ...{ vocabulary: [{ word: 'آب', romanization: 'Aab', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-3', title: 'Lesson 3', deckId: 'deck-kashmiri-3', ...{ vocabulary: [{ word: 'تُہہِ چھِوا ٹھیک؟', romanization: 'Tuh chiva theek?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-4', title: 'Lesson 4', deckId: 'deck-kashmiri-4', ...{ vocabulary: [{ word: 'بُ چھُس گَژھان', romanization: 'Bu chus gachhan', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-5', title: 'Lesson 5', deckId: 'deck-kashmiri-5', ...{ vocabulary: [{ word: 'یِمُک کیا قیمَت چھُ؟', romanization: 'Yimuk kya qeemat chu?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-6', title: 'Lesson 6', deckId: 'deck-kashmiri-6', ...{ vocabulary: [{ word: 'کیٛازِک', romanization: 'Kyazik', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kashmiri-7', title: 'Lesson 7', deckId: 'deck-kashmiri-7', ...{ vocabulary: [{ word: 'میون شَوق', romanization: 'Myon shauq', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
