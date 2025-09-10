
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';


export const assameseDecks: LessonDeck[] = [
  {
    id: 'deck-assamese-1',
    title: 'Foundations 1: Greetings & Basics',
    description: 'Master the absolute basics, from alphabet sounds to simple greetings.',
    level: 'Foundations',
    lessons: [{ id: 'lesson-assamese-1', title: 'Basic Greetings', duration: '3-5 min' }]
  },
  {
    id: 'deck-assamese-2',
    title: 'Foundations 2: Common Nouns',
    description: 'Learn essential vocabulary for everyday objects, numbers, and colors.',
    level: 'Foundations',
    lessons: [{ id: 'lesson-assamese-2', title: 'Common Nouns', duration: '3-5 min' }]
  },
  {
    id: 'deck-assamese-3',
    title: 'Foundations 3: Simple Questions',
    description: 'Handle simple, real-world interactions like asking for directions or ordering food.',
    level: 'Foundations',
    lessons: [{ id: 'lesson-assamese-3', title: 'Simple Questions', duration: '3-5 min' }]
  },
  {
    id: 'deck-assamese-4',
    title: 'Intermediate 1: Tenses & Verbs',
    description: 'Grasp past, present, and future tenses and start forming complex sentences.',
    level: 'Intermediate',
    lessons: [{ id: 'lesson-assamese-4', title: 'Tenses and Verbs', duration: '4-6 min' }]
  },
  {
    id: 'deck-assamese-5',
    title: 'Intermediate 2: Shopping Dialogues',
    description: 'Practice conversations for specific scenarios like shopping, travel, and making plans.',
    level: 'Intermediate',
    lessons: [{ id: 'lesson-assamese-5', title: 'Shopping Dialogue', duration: '4-6 min' }]
  },
  {
    id: 'deck-assamese-6',
    title: 'Advanced 1: Complex Topics',
    description: 'Dive into nuanced expressions, idioms, and professional communication.',
    level: 'Advanced',
    lessons: [{ id: 'lesson-assamese-6', title: 'Complex Topics', duration: '5-7 min' }]
  },
  {
    id: 'deck-assamese-7',
    title: 'Advanced 2: Formal Language',
    description: 'Discuss complex topics, understand native media, and express abstract ideas.',
    level: 'Advanced',
    lessons: [{ id: 'lesson-assamese-7', title: 'Formal Language', duration: '5-7 min' }]
  }
];

export const assameseLessons: MicroLesson[] = [
  // Foundations
  {
    id: 'lesson-assamese-1',
    title: 'Lesson 1: Basic Greetings',
    deckId: 'deck-assamese-1',
    vocabulary: [
        { word: 'নমস্কাৰ', romanization: 'Nomoskar', definition: 'Hello/Greetings', ipa: '/nɔmɔskar/', audioUrl: placeholderAudioDataUri },
        { word: 'ধন্যবাদ', romanization: 'Dhonyobad', definition: 'Thank you', ipa: '/dʱonjobad/', audioUrl: placeholderAudioDataUri },
        { word: 'আপোনাৰ নাম কি', romanization: 'Apunar nam ki?', definition: 'What is your name?', ipa: '', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Nomoskar, apuni bhalne?' }, { speaker: 'Server', line: 'Moi bhale asu, dhonyobad.' }],
    culturalTip: 'A respectful greeting is highly valued in Assamese culture. "Nomoskar" is a versatile greeting for any time of day.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you say "Hello" in Assamese?', options: ['Dhonyobad', 'Nomoskar', 'Ki khobor', 'Bhal'], answer: 'Nomoskar' }],
    followUp: 'Try greeting someone with "Nomoskar" today!'
  },
  {
    id: 'lesson-assamese-2',
    title: 'Lesson 2: Common Nouns',
    deckId: 'deck-assamese-2',
    vocabulary: [
        { word: 'পানী', romanization: 'Pani', definition: 'Water', ipa: '/pani/', audioUrl: placeholderAudioDataUri },
        { word: 'চাহ', romanization: 'Sah', definition: 'Tea', ipa: '/sah/', audioUrl: placeholderAudioDataUri },
        { word: 'ভাত', romanization: 'Bhaat', definition: 'Rice', ipa: '/bʱat/', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'মোক একাপ চাহ দিয়কচোন। (Mok ekap sah diyokson.)' }, { speaker: 'Server', line: 'নিশ্চয়, এইয়া লওক। (Niswoi, eiya look.)' }],
    culturalTip: 'Tea ("Sah") is an integral part of Assamese culture, with Assam being one of the largest tea-producing regions in the world.',
    quizzes: [{ type: 'fill-in-the-blank', question: 'To ask for tea, you would say "ekap ____".', answer: 'sah' }],
    followUp: 'Ask for a glass of "pani" next time you are thirsty.'
  },
  {
    id: 'lesson-assamese-3',
    title: 'Lesson 3: Simple Questions',
    deckId: 'deck-assamese-3',
    vocabulary: [
        { word: 'কেনে আছে', romanization: 'Kene ase?', definition: 'How are you?', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'দাম কিমান', romanization: 'Dam kiman?', definition: 'What is the price?', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'হয়', romanization: 'Hoi', definition: 'Yes', ipa: '/hɔi/', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Iyar dam kiman?' }, { speaker: 'Server', line: 'Pos-ponas toka.' }],
    culturalTip: 'Bargaining is common in local markets, so knowing "Dam kiman?" is very useful.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you ask "How are you?"', options: ['Dam kiman?', 'Hoi', 'Kene ase?', 'Nomoskar'], answer: 'Kene ase?' }],
    followUp: 'Practice asking for the price of an item at a shop.'
  },
  // Intermediate
  {
    id: 'lesson-assamese-4',
    title: 'Lesson 4: Tenses and Verbs',
    deckId: 'deck-assamese-4',
    vocabulary: [
        { word: 'মই যাওঁ', romanization: 'Moi jaü', definition: 'I go', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'মই গৈছিলোঁ', romanization: 'Moi goisilu', definition: 'I went', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'মই যাম', romanization: 'Moi jam', definition: 'I will go', ipa: '', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Moi juwakali Guwahati goisilu.' }, { speaker: 'Server', line: 'Bohut bhal! Apuni kalile goisile?' }],
    culturalTip: 'Verb conjugations in Assamese change based on tense and level of respect.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Moi jam', 'Moi jaü', 'Moi goisilu', 'Moi kham'], answer: 'Moi goisilu' }],
    followUp: 'Try forming a sentence about what you did yesterday.'
  },
  {
    id: 'lesson-assamese-5',
    title: 'Lesson 5: Shopping Dialogue',
    deckId: 'deck-assamese-5',
    vocabulary: [
        { word: 'মোৰ এইটো লাগে', romanization: 'Mor eitu lage', definition: 'I want this one.', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'বেলেগ কিবা আছে নেকি', romanization: 'Beleg kiba ase neki?', definition: 'Do you have anything else?', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'ঠিক আছে', romanization: 'Thik ase', definition: 'It\'s okay / Alright', ipa: '/tʰik asɛ/', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Mor eitu gamusa lage. Beleg design ase neki?' }, { speaker: 'Server', line: 'Hoi, ase. Eiya saokson.' }],
    culturalTip: 'The Gamosa is a traditional Assamese cloth that is a symbol of respect and is often given as a gift.',
    quizzes: [{ type: 'fill-in-the-blank', question: 'To say "I want this one", you say "Mor ____ lage".', answer: 'eitu' }],
    followUp: 'Practice a short shopping conversation with a friend.'
  },
  // Advanced
  {
    id: 'lesson-assamese-6',
    title: 'Lesson 6: Complex Topics',
    deckId: 'deck-assamese-6',
    vocabulary: [
        { word: 'পৰিবেশ', romanization: 'Poribekh', definition: 'Environment', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'অৰ্থনীতি', romanization: 'Orthoniti', definition: 'Economy', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'সংস্কৃতি', romanization: 'Sanskriti', definition: 'Culture', ipa: '', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Axomor Sanskriti bohut dhuniya.' }, { speaker: 'Server', line: 'Hoi, moi ekmot.' }],
    culturalTip: 'Discussing topics like the environment or economy requires a more advanced vocabulary.',
    quizzes: [{ type: 'multiple-choice', question: 'What is the Assamese word for "Environment"?', options: ['Orthoniti', 'Sanskriti', 'Poribekh', 'Bhaat'], answer: 'Poribekh' }],
    followUp: 'Try to read a small news headline in Assamese online.'
  },
  {
    id: 'lesson-assamese-7',
    title: 'Lesson 7: Formal Language',
    deckId: 'deck-assamese-7',
    vocabulary: [
        { word: 'অনুগ্রহ কৰি', romanization: 'Onugroho kori', definition: 'Please', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'মই কৃতজ্ঞ', romanization: 'Moi kritoggo', definition: 'I am grateful', ipa: '', audioUrl: placeholderAudioDataUri },
        { word: 'দুখিত', romanization: 'Dukhito', definition: 'Sorry', ipa: '', audioUrl: placeholderAudioDataUri },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Onugroho kori, muk xohai koribo paribo neki?' }, { speaker: 'Server', line: 'Niswoi parim. Moi apunak xohai kori bohut sukhi.' }],
    culturalTip: 'Using formal language like "Onugroho kori" shows a higher level of respect, especially when speaking to elders or in official settings.',
    quizzes: [{ type: 'fill-in-the-blank', question: 'To politely ask for help, you can start your sentence with "____ ____".', answer: 'Onugroho kori' }],
    followUp: 'Practice using these formal phrases in appropriate situations.'
  }
];
