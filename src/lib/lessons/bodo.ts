
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const bodoDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-bodo-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-bodo-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-bodo-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-bodo-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-bodo-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-bodo-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-bodo-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-bodo-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-bodo-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-bodo-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-bodo-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-bodo-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-bodo-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-bodo-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const bodoLessons: MicroLesson[] = [
  { id: 'lesson-bodo-1', title: 'Lesson 1', deckId: 'deck-bodo-1', ...{ vocabulary: [{ word: 'खुलुमबाय', romanization: 'Khulumbai', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-2', title: 'Lesson 2', deckId: 'deck-bodo-2', ...{ vocabulary: [{ word: 'दै', romanization: 'Doi', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-3', title: 'Lesson 3', deckId: 'deck-bodo-3', ...{ vocabulary: [{ word: 'माब्रै दं?', romanization: 'Mabrai dong?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-4', title: 'Lesson 4', deckId: 'deck-bodo-4', ...{ vocabulary: [{ word: 'आं थाङो', romanization: 'Ang thango', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-5', title: 'Lesson 5', deckId: 'deck-bodo-5', ...{ vocabulary: [{ word: 'बेसे दाम?', romanization: 'Bese dam?', definition: 'What is the price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-6', title: 'Lesson 6', deckId: 'deck-bodo-6', ...{ vocabulary: [{ word: 'मानोना', romanization: 'Manona', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-bodo-7', title: 'Lesson 7', deckId: 'deck-bodo-7', ...{ vocabulary: [{ word: 'आंनि Hobbie', romanization: 'Angni Hobbie', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
