
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const konkaniDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-konkani-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-konkani-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-konkani-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-konkani-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-konkani-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-konkani-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-konkani-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-konkani-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-konkani-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-konkani-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-konkani-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-konkani-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-konkani-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-konkani-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const konkaniLessons: MicroLesson[] = [
  { id: 'lesson-konkani-1', title: 'Lesson 1', deckId: 'deck-konkani-1', ...{ vocabulary: [{ word: 'देव बरे करुं', romanization: 'Dev bare karun', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-2', title: 'Lesson 2', deckId: 'deck-konkani-2', ...{ vocabulary: [{ word: 'उदक', romanization: 'Udak', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-3', title: 'Lesson 3', deckId: 'deck-konkani-3', ...{ vocabulary: [{ word: 'तुवें कसो आसा?', romanization: 'Tuvem koso asa?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-4', title: 'Lesson 4', deckId: 'deck-konkani-4', ...{ vocabulary: [{ word: 'हांव वतां', romanization: 'Hanv vetam', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-5', title: 'Lesson 5', deckId: 'deck-konkani-5', ...{ vocabulary: [{ word: 'हाचो मोले कसो?', romanization: 'Hacho mol koso?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-6', title: 'Lesson 6', deckId: 'deck-konkani-6', ...{ vocabulary: [{ word: 'कारण', romanization: 'Karan', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-konkani-7', title: 'Lesson 7', deckId: 'deck-konkani-7', ...{ vocabulary: [{ word: 'माझो छंद', romanization: 'Mazho chhand', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
