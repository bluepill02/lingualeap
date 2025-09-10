
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const malayalamDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-malayalam-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-malayalam-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-malayalam-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-malayalam-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-malayalam-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-malayalam-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-malayalam-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-malayalam-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-malayalam-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-malayalam-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-malayalam-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const malayalamLessons: MicroLesson[] = [
  { id: 'lesson-malayalam-1', title: 'Lesson 1', deckId: 'deck-malayalam-1', ...{ vocabulary: [{ word: 'നമസ്കാരം', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-2', title: 'Lesson 2', deckId: 'deck-malayalam-2', ...{ vocabulary: [{ word: 'വെള്ളം', romanization: 'Vellam', definition: 'Water', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-3', title: 'Lesson 3', deckId: 'deck-malayalam-3', ...{ vocabulary: [{ word: 'സുഖമാണോ?', romanization: 'Sukhamano?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-4', title: 'Lesson 4', deckId: 'deck-malayalam-4', ...{ vocabulary: [{ word: 'ഞാൻ പോകുന്നു', romanization: 'Njan pokunnu', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-5', title: 'Lesson 5', deckId: 'deck-malayalam-5', ...{ vocabulary: [{ word: 'എത്രയാണ് വില?', romanization: 'Ethrayanu vila?', definition: 'What is the price?', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-6', title: 'Lesson 6', deckId: 'deck-malayalam-6', ...{ vocabulary: [{ word: 'കാരണം', romanization: 'Karanam', definition: 'Because', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
  { id: 'lesson-malayalam-7', title: 'Lesson 7', deckId: 'deck-malayalam-7', ...{ vocabulary: [{ word: 'എൻ്റെ ഹോബി', romanization: 'Ente hobby', definition: 'My hobby', ipa: '', audioUrl: placeholderAudioDataUri }], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
