
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const gujaratiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-gujarati-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-gujarati-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-gujarati-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-gujarati-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-gujarati-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-gujarati-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-gujarati-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-gujarati-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-gujarati-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-gujarati-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-gujarati-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const gujaratiLessons: MicroLesson[] = [
  { id: 'lesson-gujarati-1', title: 'Lesson 1', deckId: 'deck-gujarati-1', ...{ vocabulary: [{ word: 'નમસ્તે', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-2', title: 'Lesson 2', deckId: 'deck-gujarati-2', ...{ vocabulary: [{ word: 'પાણી', romanization: 'Pani', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-3', title: 'Lesson 3', deckId: 'deck-gujarati-3', ...{ vocabulary: [{ word: 'તમે કેમ છો?', romanization: 'Tame kem chho?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-4', title: 'Lesson 4', deckId: 'deck-gujarati-4', ...{ vocabulary: [{ word: 'હું જાઉં છું', romanization: 'Hu jau chhu', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-5', title: 'Lesson 5', deckId: 'deck-gujarati-5', ...{ vocabulary: [{ word: 'શું ભાવ છે?', romanization: 'Shu bhav chhe?', definition: 'What is the price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-6', title: 'Lesson 6', deckId: 'deck-gujarati-6', ...{ vocabulary: [{ word: 'કારણ કે', romanization: 'Karan ke', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-gujarati-7', title: 'Lesson 7', deckId: 'deck-gujarati-7', ...{ vocabulary: [{ word: 'મારો શોખ', romanization: 'Maro shokh', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
