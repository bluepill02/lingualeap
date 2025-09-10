
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const kannadaDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-kannada-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-kannada-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-kannada-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-kannada-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-kannada-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-kannada-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-kannada-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-kannada-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-kannada-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-kannada-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-kannada-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-kannada-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-kannada-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-kannada-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const kannadaLessons: MicroLesson[] = [
  { id: 'lesson-kannada-1', title: 'Lesson 1', deckId: 'deck-kannada-1', ...{ vocabulary: [{ word: 'ನಮಸ್ಕಾರ', romanization: 'Namaskara', definition: 'Hello/Greetings', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-2', title: 'Lesson 2', deckId: 'deck-kannada-2', ...{ vocabulary: [{ word: 'ನೀರು', romanization: 'Neeru', definition: 'Water', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-3', title: 'Lesson 3', deckId: 'deck-kannada-3', ...{ vocabulary: [{ word: 'ನೀವು ಹೇಗಿದ್ದೀರಾ?', romanization: 'Neevu hegiddira?', definition: 'How are you?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-4', title: 'Lesson 4', deckId: 'deck-kannada-4', ...{ vocabulary: [{ word: 'ನಾನು ಹೋಗುತ್ತೇನೆ', romanization: 'Naanu hoguttene', definition: 'I go', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-5', title: 'Lesson 5', deckId: 'deck-kannada-5', ...{ vocabulary: [{ word: 'ಇದರ ಬೆಲೆ ಎಷ್ಟು?', romanization: 'Idara bele eshtu?', definition: 'What is its price?', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-6', title: 'Lesson 6', deckId: 'deck-kannada-6', ...{ vocabulary: [{ word: 'ಏಕೆಂದರೆ', romanization: 'Ekendare', definition: 'Because', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-kannada-7', title: 'Lesson 7', deckId: 'deck-kannada-7', ...{ vocabulary: [{ word: 'ನನ್ನ ಹವ್ಯಾಸ', romanization: 'Nanna havyasa', definition: 'My hobby', ipa: '' }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
