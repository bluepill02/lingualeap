import type { User, Lesson, Flashcard, LessonDeck, MicroLesson } from './types';

export const mockUser: User = {
  id: 'user-1',
  name: 'Alex',
  email: 'alex@example.com',
  avatarUrl: 'https://picsum.photos/100/100',
  streak: 12,
  language: 'Spanish',
  timezone: 'America/New_York',
  isPro: false,
};

export const flashcards: Flashcard[] = [
  {
    id: 'fc-1',
    word: 'नमस्ते',
    translation: 'Hello',
    phonetic: '/nəməˈsteː/',
    audioUrl: '/audio/namaste.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 10,
    difficulty: 2,
    interval: 5,
    lastReviewed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-2',
    word: 'धन्यवाद',
    translation: 'Thank you',
    phonetic: '/dʱən.jə.ʋɑːd̪/',
    audioUrl: '/audio/dhanyavaad.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 15,
    difficulty: 1,
    interval: 10,
    lastReviewed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-3',
    word: 'कॉफ़ी',
    translation: 'Coffee',
    phonetic: '/kɔː.fiː/',
    audioUrl: '/audio/coffee.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 5,
    difficulty: 3,
    interval: 2,
    lastReviewed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
    {
    id: 'fc-4',
    word: 'बिल',
    translation: 'Bill',
    phonetic: '/bɪl/',
    audioUrl: '/audio/bill.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 20,
    difficulty: 1.5,
    interval: 12,
    lastReviewed: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-5',
    word: 'हाँ',
    translation: 'Yes',
    phonetic: '/hɑ̃ː/',
    audioUrl: '/audio/haan.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 8,
    difficulty: 2.5,
    interval: 4,
    lastReviewed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-6',
    word: 'Agua',
    translation: 'Water',
    phonetic: '/ˈa.ɣwa/',
    audioUrl: '/audio/agua.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 5,
    difficulty: 3,
    interval: 2,
    lastReviewed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-2',
  },
];

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Common Greetings',
    description: 'Learn the most common ways to greet people in Spanish.',
    category: 'Basics',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-1', 'fc-2'],
  },
  {
    id: 'lesson-2',
    title: 'Essential Nouns',
    description: 'Get to know essential nouns for everyday situations.',
    category: 'Vocabulary',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-3', 'fc-4', 'fc-5'],
  },
  {
    id: 'lesson-3',
    title: 'Restaurant Talk',
    description: 'Learn how to order food and drinks at a restaurant.',
    category: 'Travel',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-2', 'fc-3', 'fc-4'],
  },
  {
    id: 'lesson-4',
    title: 'Making Friends',
    description: 'Basic phrases to start a conversation and make new friends.',
    category: 'Social',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-1', 'fc-5'],
  },
];

export const businessHindiLessonDecks: LessonDeck[] = [
    {
      id: 'deck-bh-1',
      title: 'Chennai Café Conversation',
      description: 'Real-world conversations and vocabulary',
      lessons: [
        {
          id: 'lesson-bh-1',
          title: 'Ordering a Coffee',
          duration: '2-3 min',
        }
      ],
    },
    {
      id: 'deck-bh-2',
      title: 'Office Meetings',
      description: 'Real-world conversations and vocabulary',
      lessons: [],
    },
    {
      id: 'deck-bh-3',
      title: 'Professional Phone Calls',
      description: 'Real-world conversations and vocabulary',
      lessons: [],
    }
];

export const chennaiCafeLesson: MicroLesson = {
    id: 'lesson-bh-1',
    title: 'Ordering a Coffee',
    deckId: 'deck-bh-1',
    vocabulary: [
        { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməˈsteː/' },
        { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/eːk/' },
        { word: 'कॉफ़ी', romanization: 'Coffee', definition: 'Coffee', ipa: '/kɔː.fiː/' },
        { word: 'और', romanization: 'Aur', definition: 'And', ipa: '/ɔːɾ/' },
        { word: 'बिल', romanization: 'Bil', definition: 'Bill', ipa: '/bɪl/' },
    ],
    dialogue: [
        { speaker: 'Customer', line: 'Namaste! Ek filter coffee, कृपया (kripaya).' },
        { speaker: 'Server', line: 'Ji, zaroor. Aur kuch?' },
        { speaker: 'Customer', line: 'Bas yahi. Bill de dijiye, dhanyavaad.' },
    ],
    culturalTip: 'In Chennai, while Tamil is the primary language, using Hindi in business settings is often appreciated. A friendly "Namaste" is a universal sign of respect.',
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'How do you say "One coffee" in Hindi?',
            options: ['Do coffee', 'Ek coffee', 'Teen coffee', 'Chai'],
            answer: 'Ek coffee',
        },
        {
            type: 'fill-in-the-blank',
            question: 'To ask for the bill, you would say: "____ de dijiye."',
            answer: 'Bill',
        }
    ],
    followUp: 'Next time you\'re at a café, try greeting the server with "Namaste!"'
};
