
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const teluguDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-telugu-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-telugu-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-telugu-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-telugu-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-telugu-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-telugu-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-telugu-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-telugu-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-telugu-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-telugu-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-telugu-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-telugu-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-telugu-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-telugu-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const teluguLessons: MicroLesson[] = [
  { id: 'lesson-telugu-1', title: 'Lesson 1', deckId: 'deck-telugu-1', ...{ vocabulary: [{ word: 'నమస్కారం', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-2', title: 'Lesson 2', deckId: 'deck-telugu-2', ...{ vocabulary: [{ word: 'నీరు', romanization: 'Neeru', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-3', title: 'Lesson 3', deckId: 'deck-telugu-3', ...{ vocabulary: [{ word: 'మీరు ఎలా ఉన్నారు?', romanization: 'Meeru ela unnaru?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-4', title: 'Lesson 4', deckId: 'deck-telugu-4', ...{ vocabulary: [{ word: 'నేను వెళ్తున్నాను', romanization: 'Nenu velthunnanu', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-5', title: 'Lesson 5', deckId: 'deck-telugu-5', ...{ vocabulary: [{ word: 'దీని ధర ఎంత?', romanization: 'Deeni dhara entha?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-6', title: 'Lesson 6', deckId: 'deck-telugu-6', ...{ vocabulary: [{ word: 'ఎందుకంటే', romanization: 'Endukante', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-telugu-7', title: 'Lesson 7', deckId: 'deck-telugu-7', ...{ vocabulary: [{ word: 'నా హాబీ', romanization: 'Naa hobby', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
