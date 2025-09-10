
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const tamilDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-tamil-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-tamil-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-tamil-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-tamil-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-tamil-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-tamil-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-tamil-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-tamil-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-tamil-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-tamil-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-tamil-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-tamil-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-tamil-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-tamil-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const tamilLessons: MicroLesson[] = [
  { id: 'lesson-tamil-1', title: 'Lesson 1', deckId: 'deck-tamil-1', ...{ vocabulary: [{ word: 'வணக்கம்', romanization: 'Vanakkam', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-2', title: 'Lesson 2', deckId: 'deck-tamil-2', ...{ vocabulary: [{ word: 'தண்ணீர்', romanization: 'Thanneer', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-3', title: 'Lesson 3', deckId: 'deck-tamil-3', ...{ vocabulary: [{ word: 'நீங்கள் எப்படி இருக்கிறீர்கள்?', romanization: 'Neengal eppadi irukkireergal?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-4', title: 'Lesson 4', deckId: 'deck-tamil-4', ...{ vocabulary: [{ word: 'நான் போகிறேன்', romanization: 'Naan pogiren', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-5', title: 'Lesson 5', deckId: 'deck-tamil-5', ...{ vocabulary: [{ word: 'இதன் விலை என்ன?', romanization: 'Ithan vilai enna?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-6', title: 'Lesson 6', deckId: 'deck-tamil-6', ...{ vocabulary: [{ word: 'ஏனென்றால்', romanization: 'Enendral', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-tamil-7', title: 'Lesson 7', deckId: 'deck-tamil-7', ...{ vocabulary: [{ word: 'என் பொழுதுபோக்கு', romanization: 'En pozhuthupokku', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
