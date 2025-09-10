
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const manipuriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-manipuri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-manipuri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-manipuri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-manipuri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-manipuri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-manipuri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-manipuri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-manipuri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-manipuri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-manipuri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-manipuri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const manipuriLessons: MicroLesson[] = [
  { id: 'lesson-manipuri-1', title: 'Lesson 1', deckId: 'deck-manipuri-1', ...{ vocabulary: [{ word: 'খুরুমজরি', romanization: 'Khurumjari', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-2', title: 'Lesson 2', deckId: 'deck-manipuri-2', ...{ vocabulary: [{ word: 'ইশিং', romanization: 'Ishing', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-3', title: 'Lesson 3', deckId: 'deck-manipuri-3', ...{ vocabulary: [{ word: 'নঙাইরিব্রা?', romanization: 'Nangairibra?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-4', title: 'Lesson 4', deckId: 'deck-manipuri-4', ...{ vocabulary: [{ word: 'ঐ চৎলি', romanization: 'Ei chatli', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-5', title: 'Lesson 5', deckId: 'deck-manipuri-5', ...{ vocabulary: [{ word: 'অসিগী মমল কয়া?', romanization: 'Asigi mamal kaya?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-6', title: 'Lesson 6', deckId: 'deck-manipuri-6', ...{ vocabulary: [{ word: 'মরু ওইনা', romanization: 'Maru oina', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-manipuri-7', title: 'Lesson 7', deckId: 'deck-manipuri-7', ...{ vocabulary: [{ word: 'ঐগী শୌখ', romanization: 'Aigi shaukh', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
