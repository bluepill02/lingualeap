
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const maithiliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-maithili-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-maithili-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-maithili-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-maithili-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-maithili-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-maithili-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-maithili-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-maithili-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-maithili-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-maithili-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-maithili-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-maithili-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-maithili-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-maithili-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const maithiliLessons: MicroLesson[] = [
  { id: 'lesson-maithili-1', title: 'Lesson 1', deckId: 'deck-maithili-1', ...{ vocabulary: [{ word: 'प्रणाम', romanization: 'Pranaam', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-2', title: 'Lesson 2', deckId: 'deck-maithili-2', ...{ vocabulary: [{ word: 'पाइन', romanization: 'Paain', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-3', title: 'Lesson 3', deckId: 'deck-maithili-3', ...{ vocabulary: [{ word: 'अहाँ केहन छी?', romanization: 'Ahan kehan chhi?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-4', title: 'Lesson 4', deckId: 'deck-maithili-4', ...{ vocabulary: [{ word: 'हम जाइत छी', romanization: 'Hum jaait chhi', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-5', title: 'Lesson 5', deckId: 'deck-maithili-5', ...{ vocabulary: [{ word: 'एकर दाम कतेक छै?', romanization: 'Ekar daam katek chhai?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-6', title: 'Lesson 6', deckId: 'deck-maithili-6', ...{ vocabulary: [{ word: 'किएक तँ', romanization: 'Kiyek tan', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-maithili-7', title: 'Lesson 7', deckId: 'deck-maithili-7', ...{ vocabulary: [{ word: 'हमर शौक', romanization: 'Hamar shauk', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
