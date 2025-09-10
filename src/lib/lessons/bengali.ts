
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const bengaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-bengali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-bengali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-bengali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-bengali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-bengali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-bengali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-bengali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-bengali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-bengali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-bengali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-bengali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-bengali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-bengali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-bengali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const bengaliLessons: MicroLesson[] = [
  { 
    id: 'lesson-bengali-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-bengali-1',
    vocabulary: [
      { word: 'নমস্কার', romanization: 'Nomoshkar', definition: 'Hello (Formal)', ipa: '/nɔmoʃkar/'},
      { word: 'ধন্যবাদ', romanization: 'Dhonnobad', definition: 'Thank you', ipa: '/dʱonːobad/'},
      { word: 'কেমন আছেন?', romanization: 'Kemon achhen?', definition: 'How are you? (Formal)', ipa: '/kæmon atʃʰen/'},
      { word: 'ভালো', romanization: 'Bhalo', definition: 'Good / Well', ipa: '/bʱalo/'},
      { word: 'আপনার নাম কি?', romanization: 'Apnar nam ki?', definition: 'What is your name? (Formal)', ipa: '/apnar nam ki/'},
    ],
    dialogue: [
      { speaker: 'Customer', line: 'নমস্কার, আপনি কেমন আছেন? (Nomoshkar, apni kemon achhen?)' },
      { speaker: 'Server', line: 'নমস্কার, আমি ভালো আছি। ধন্যবাদ। আপনি কেমন আছেন? (Nomoshkar, ami bhalo achhi. Dhonnobad. Apni kemon achhen?)' },
      { speaker: 'Customer', line: 'আমিও ভালো আছি। (Amio bhalo achhi.)' }
    ],
    culturalTip: 'In Bengali culture, "Nomoshkar" with hands folded is a sign of deep respect, suitable for greeting elders and in formal situations.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Bengali?', options: ['Nomoshkar', 'Bhalo', 'Dhonnobad', 'Ki'], answer: 'Dhonnobad' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?" formally, you say "Kemon ____?".', answer: 'achhen' }
    ],
    followUp: 'Try greeting a friend with "Nomoshkar" and see if they know what it means!'
  },
  { 
    id: 'lesson-bengali-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-bengali-2',
    vocabulary: [
      { word: 'জল', romanization: 'Jol', definition: 'Water', ipa: '/dʒɔl/' },
      { word: 'চা', romanization: 'Cha', definition: 'Tea', ipa: '/tʃa/' },
      { word: 'ভাত', romanization: 'Bhaat', definition: 'Rice', ipa: '/bʱat/' },
      { word: 'এক', romanization: 'Ek', definition: 'One', ipa: '/æk/' },
      { word: 'দুই', romanization: 'Dui', definition: 'Two', ipa: '/d̪ui/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'দাদা, এক কাপ চা দিন। (Dada, ek cup cha din.)' },
      { speaker: 'Server', line: 'নিশ্চয়ই। আর কিছু লাগবে? (Nishchoi. Ar kichu lagbe?)' },
      { speaker: 'Customer', line: 'এক বোতল জল দিন। (Ek botol jol din.)' }
    ],
    culturalTip: '"Dada" (elder brother) is a common and respectful way to address a male shopkeeper or server, regardless of their actual age.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Bengali word for "Water" is ____.', answer: 'Jol' },
      { type: 'multiple-choice', question: 'What does "Dui" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Next time you order tea, try saying "Ek cup cha".'
  },
  { 
    id: 'lesson-bengali-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-bengali-3',
    vocabulary: [
      { word: 'কোথায়?', romanization: 'Kothay?', definition: 'Where?', ipa: '/kot̪ʰae/' },
      { word: 'কখন?', romanization: 'Kɔkhon?', definition: 'When?', ipa: '/kɔkʰon/' },
      { word: 'কেন?', romanization: 'Keno?', definition: 'Why?', ipa: '/kæno/' },
      { word: 'কি?', romanization: 'Ki?', definition: 'What?', ipa: '/ki/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'দোকানটা কোথায়? (Dokanta kothay?)' },
      { speaker: 'Server', line: 'ওই রাস্তার মোড়ে। (Oi rastar moře.)' },
      { speaker: 'Customer', line: 'ধন্যবাদ। কখন খোলে? (Dhonnobad. Kɔkhon khole?)' }
    ],
    culturalTip: 'The intonation of a question in Bengali often rises at the end, even for "wh-" questions.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Why?" in Bengali?', options: ['Kothay?', 'Keno?', 'Kɔkhon?', 'Ki?'], answer: 'Keno?' }
    ],
    followUp: 'Try asking a friend "Kothay?" when they say they are going out.'
  },
  { 
    id: 'lesson-bengali-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-bengali-4',
    vocabulary: [
      { word: 'আমি করি', romanization: 'Ami kori', definition: 'I do (Present)', ipa: '' },
      { word: 'আমি করেছিলাম', romanization: 'Ami korechhilam', definition: 'I did (Past)', ipa: '' },
      { word: 'আমি করব', romanization: 'Ami korbo', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'আমি গতকাল কাজটা করেছিলাম। (Ami gotokal kajta korechhilam.)' },
      { speaker: 'Server', line: 'আপনি কি আজকেও কাজটা করবেন? (Apni ki aajkeo kajta korben?)' },
      { speaker: 'Customer', line: 'হ্যাঁ, আমি আজকেও কাজটা করি। (Hya, ami aajkeo kajta kori.)' }
    ],
    culturalTip: 'Bengali verb conjugation is complex and changes with the person, tense, and level of formality. Mastering it is key to fluency.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I will do"?', options: ['Ami kori', 'Ami korbo', 'Ami korechhilam', 'Ami keno'], answer: 'Ami korbo' }
    ],
    followUp: 'Try making three sentences about yourself in the past, present, and future.'
  },
  { 
    id: 'lesson-bengali-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-bengali-5',
    vocabulary: [
      { word: 'দাম কত?', romanization: 'Dam koto?', definition: 'What is the price?', ipa: '' },
      { word: 'একটু কম হবে?', romanization: 'Ektu kom hobe?', definition: 'Will it be a little less? (Can you lower the price?)', ipa: '' },
      { word: 'ঠিক আছে, দিন।', romanization: 'Thik achhe, din.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'এই মাছটার দাম কত? (Ei machtar dam koto?)' },
      { speaker: 'Server', line: 'চারশো টাকা কেজি। (Charsho taka keji.)' },
      { speaker: 'Customer', line: 'একটু কম হবে? (Ektu kom hobe?)' },
      { speaker: 'Server', line: 'சரி, তিনশো আশি দিন। (Thik achhe, tinsho ashi din.)' }
    ],
    culturalTip: 'Bargaining is a common and expected practice in most local markets (bazaar) in Bengal. Asking "Ektu kom hobe?" is the standard way to start.',
    quizzes: [
      { type: 'multiple-choice', question: 'What is the most common phrase to start bargaining?', options: ['Dam koto?', 'Thik achhe', 'Ektu kom hobe?', 'Bhalo'], answer: 'Ektu kom hobe?' }
    ],
    followUp: 'Next time you buy vegetables, try asking for the price in Bengali.'
  },
  { 
    id: 'lesson-bengali-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-bengali-6',
    vocabulary: [
      { word: 'এবং', romanization: 'Ebong', definition: 'And', ipa: '/eboŋ/' },
      { word: 'কিন্তু', romanization: 'Kintu', definition: 'But', ipa: '/kint̪u/' },
      { word: 'তাই', romanization: 'Tai', definition: 'So / Therefore', ipa: '/t̪ai/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'আমি বাজারে গিয়েছিলাম এবং মাছ কিনলাম। (Ami bajare giyechhilam ebong mach kinlam.)' },
      { speaker: 'Server', line: 'আমিও যেতে চেয়েছিলাম, কিন্তু সময় পাইনি। (Amio jete cheyechhilam, kintu shomoy paini.)' },
      { speaker: 'Customer', line: 'তাই আপনি যাননি। (Tai apni janoni.)' }
    ],
    culturalTip: 'Learning conjunctions like "ebong" and "kintu" allows you to move from simple sentences to expressing more complex ideas.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ebong', 'Tai', 'Kintu', 'Ki'], answer: 'Kintu' }
    ],
    followUp: 'Try to connect two ideas using "ebong" in a sentence.'
  },
  { 
    id: 'lesson-bengali-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-bengali-7',
    vocabulary: [
      { word: 'আমার শখ', romanization: 'Amar shokh', definition: 'My hobby', ipa: '' },
      { word: 'বই পড়া', romanization: 'Boi poṛa', definition: 'Reading books', ipa: '' },
      { word: 'গান শোনা', romanization: 'Gaan shona', definition: 'Listening to music', ipa: '' },
      { word: 'সিনেমা দেখা', romanization: 'Cinema dekha', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'আপনার শখ কি? (Apnar shokh ki?)' },
      { speaker: 'Server', line: 'আমার শখ বই পড়া আর গান শোনা। আপনার? (Amar shokh boi poṛa ar gaan shona. Apnar?)' },
      { speaker: 'Customer', line: 'আমি সিনেমা দেখতে ভালোবাসি। (Ami cinema dekhte bhalobashi.)' }
    ],
    culturalTip: 'Bengalis are famously passionate about literature, music, and cinema. Talking about these hobbies is a great way to connect with people.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Gaan shona', 'Cinema dekha', 'Boi poṛa', 'Amar shokh'], answer: 'Boi poṛa' }
    ],
    followUp: 'Tell a friend what your hobby is in Bengali.'
  },
];
