
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const punjabiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-punjabi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-punjabi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-punjabi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-punjabi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-punjabi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-punjabi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-punjabi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-punjabi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-punjabi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-punjabi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-punjabi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const punjabiLessons: MicroLesson[] = [
  { id: 'lesson-punjabi-1', title: 'Lesson 1', deckId: 'deck-punjabi-1', ...{ vocabulary: [{ word: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', romanization: 'Sat Sri Akal', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-2', title: 'Lesson 2', deckId: 'deck-punjabi-2', ...{ vocabulary: [{ word: 'ਪਾਣੀ', romanization: 'Paani', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-3', title: 'Lesson 3', deckId: 'deck-punjabi-3', ...{ vocabulary: [{ word: 'ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?', romanization: 'Tuhada ki haal hai?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-4', title: 'Lesson 4', deckId: 'deck-punjabi-4', ...{ vocabulary: [{ word: 'ਮੈਂ ਜਾਂਦਾ ਹਾਂ', romanization: 'Main jaanda haan', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-5', title: 'Lesson 5', deckId: 'deck-punjabi-5', ...{ vocabulary: [{ word: 'ਇਸਦਾ ਕੀ ਮੁੱਲ ਹੈ?', romanization: 'Isda ki mul hai?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-6', title: 'Lesson 6', deckId: 'deck-punjabi-6', ...{ vocabulary: [{ word: 'ਕਿਉਂਕਿ', romanization: 'Kyonki', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-punjabi-7', title: 'Lesson 7', deckId: 'deck-punjabi-7', ...{ vocabulary: [{ word: 'ਮੇਰਾ ਸ਼ੌਕ', romanization: 'Mera shauk', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
