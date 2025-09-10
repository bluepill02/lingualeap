
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const santaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-santali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-santali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-santali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-santali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-santali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-santali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-santali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-santali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-santali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-santali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-santali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-santali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-santali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-santali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const santaliLessons: MicroLesson[] = [
  { id: 'lesson-santali-1', title: 'Lesson 1', deckId: 'deck-santali-1', ...{ vocabulary: [{ word: 'ᱡᱚᱦᱟᱨ', romanization: 'Johar', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-2', title: 'Lesson 2', deckId: 'deck-santali-2', ...{ vocabulary: [{ word: 'ᱫᱟᱜ', romanization: 'Daag', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-3', title: 'Lesson 3', deckId: 'deck-santali-3', ...{ vocabulary: [{ word: 'ᱪᱮᱫ ᱞᱮᱠᱟ?', romanization: 'Ched leka?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-4', title: 'Lesson 4', deckId: 'deck-santali-4', ...{ vocabulary: [{ word: 'ᱤᱧ ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ', romanization: 'Ing chalag kana', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-5', title: 'Lesson 5', deckId: 'deck-santali-5', ...{ vocabulary: [{ word: 'ᱱᱚᱣᱟ ᱨᱮᱭᱟᱜ ᱜᱚᱱᱚᱝ ᱛᱤᱱᱟᱹᱜ?', romanization: 'Noa reyag gonong tinag?', definition: 'What is its price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-6', title: 'Lesson 6', deckId: 'deck-santali-6', ...{ vocabulary: [{ word: 'ᱮᱱᱛᱮ', romanization: 'Ente', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-santali-7', title: 'Lesson 7', deckId: 'deck-santali-7', ...{ vocabulary: [{ word: 'ᱤᱧᱟᱜ 趣味', romanization: 'Ingag hobby', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
