
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const odiaDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-odia-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-odia-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-odia-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-odia-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-odia-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-odia-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-odia-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-odia-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-odia-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-odia-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-odia-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-odia-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-odia-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-odia-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const odiaLessons: MicroLesson[] = [
  { id: 'lesson-odia-1', title: 'Lesson 1', deckId: 'deck-odia-1', ...{ vocabulary: [{ word: 'ନମସ୍କାର', romanization: 'Namaskar', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-2', title: 'Lesson 2', deckId: 'deck-odia-2', ...{ vocabulary: [{ word: 'ପାଣି', romanization: 'Pani', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-3', title: 'Lesson 3', deckId: 'deck-odia-3', ...{ vocabulary: [{ word: 'ଆପଣ କେମିତି ଅଛନ୍ତି?', romanization: 'Apana kemiti achanti?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-4', title: 'Lesson 4', deckId: 'deck-odia-4', ...{ vocabulary: [{ word: 'ମୁଁ ଯାଏ', romanization: 'Mun jae', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-5', title: 'Lesson 5', deckId: 'deck-odia-5', ...{ vocabulary: [{ word: 'ଏହାର ଦାମ୍ କେତେ?', romanization: 'Ehaara daam kete?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-6', title: 'Lesson 6', deckId: 'deck-odia-6', ...{ vocabulary: [{ word: 'କାରଣ', romanization: 'Karana', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-odia-7', title: 'Lesson 7', deckId: 'deck-odia-7', ...{ vocabulary: [{ word: 'ମୋର ଶବ୍ଦ', romanization: 'Mora shabda', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
