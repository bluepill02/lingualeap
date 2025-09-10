
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const businessHindiDecks: LessonDeck[] = [
    {
      id: 'deck-bh-1',
      title: 'Foundations 1: Chennai Café Conversation',
      description: 'Real-world conversations and vocabulary for ordering food and drinks.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-1', title: 'Ordering a Coffee', duration: '2-3 min' }]
    },
    {
      id: 'deck-bh-2',
      title: 'Foundations 2: Basic Office Etiquette',
      description: 'Learn polite introductions and common office phrases.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-2', title: 'Meeting Colleagues', duration: '3-5 min' }]
    },
    {
      id: 'deck-bh-3',
      title: 'Foundations 3: Numbers and Scheduling',
      description: 'Learn to talk about time, dates, and schedule appointments.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-3', title: 'Scheduling a Meeting', duration: '3-5 min' }]
    },
    {
      id: 'deck-bh-4',
      title: 'Intermediate 1: Office Meetings',
      description: 'Learn key phrases for participating in professional meetings.',
      level: 'Intermediate',
      lessons: [{ id: 'lesson-bh-4', title: 'Presenting a Report', duration: '4-6 min' }]
    },
    {
      id: 'deck-bh-5',
      title: 'Intermediate 2: Email Correspondence',
      description: 'Master formal email writing for professional communication.',
      level: 'Intermediate',
      lessons: [{ id: 'lesson-bh-5', title: 'Writing a Formal Email', duration: '4-6 min' }]
    },
    {
      id: 'deck-bh-6',
      title: 'Advanced 1: Professional Phone Calls',
      description: 'Master etiquette and vocabulary for phone conversations in a business context.',
      level: 'Advanced',
      lessons: [{ id: 'lesson-bh-6', title: 'Handling a Business Call', duration: '5-7 min' }]
    },
     {
      id: 'deck-bh-7',
      title: 'Advanced 2: Negotiations',
      description: 'Learn key phrases and strategies for business negotiations.',
      level: 'Advanced',
      lessons: [{ id: 'lesson-bh-7', title: 'Negotiating a Deal', duration: '5-7 min' }]
    },
];

export const businessHindiLessons: MicroLesson[] = [
    {
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
    },
    { id: 'lesson-bh-2', title: 'Lesson 2', deckId: 'deck-bh-2', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
    { id: 'lesson-bh-3', title: 'Lesson 3', deckId: 'deck-bh-3', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
    { id: 'lesson-bh-4', title: 'Lesson 4', deckId: 'deck-bh-4', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
    { id: 'lesson-bh-5', title: 'Lesson 5', deckId: 'deck-bh-5', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
    { id: 'lesson-bh-6', title: 'Lesson 6', deckId: 'deck-bh-6', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
    { id: 'lesson-bh-7', title: 'Lesson 7', deckId: 'deck-bh-7', ...{ vocabulary: [], dialogue: [], culturalTip: '', quizzes: [], followUp: '' } },
];
