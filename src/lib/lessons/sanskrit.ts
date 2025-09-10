
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const sanskritDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-sanskrit-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-sanskrit-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-sanskrit-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-sanskrit-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-sanskrit-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-sanskrit-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-sanskrit-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-sanskrit-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-sanskrit-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-sanskrit-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-sanskrit-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-sanskrit-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const sanskritLessons: MicroLesson[] = [
  { 
    id: 'lesson-sanskrit-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-sanskrit-1',
    vocabulary: [
      { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings (I bow to the divine in you)', ipa: '/nəməsteː/' },
      { word: 'धन्यवादः', romanization: 'Dhanyavādah', definition: 'Thank you', ipa: '/d̪ʱən̪jəʋaːd̪əh/' },
      { word: 'भवान् कथम् अस्ति?', romanization: 'Bhavān katham asti?', definition: 'How are you? (to a male, formal)', ipa: '/bʱəʋaːn kət̪ʰəm əst̪i/' },
      { word: 'अहं कुशली अस्मि।', romanization: 'Aham kuśalī asmi.', definition: 'I am fine.', ipa: '/əɦəm kʊʃəliː əsmi/' },
      { word: 'भवतः नाम किम्?', romanization: 'Bhavatah nāma kim?', definition: 'What is your name? (to a male, formal)', ipa: '/bʱəʋət̪əh naːmə kɪm/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Namaste. Bhavān katham asti?' },
      { speaker: 'Server', line: 'Namaste. Aham kuśalī asmi. Dhanyavādah. Bhavān?' },
      { speaker: 'Customer', line: 'Aham api kuśalī asmi. (I am also fine.)' }
    ],
    culturalTip: 'Sanskrit is the ancient liturgical language of Hinduism, Buddhism, and Jainism. "Namaste" is more than a greeting; it\'s a sign of deep respect.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Sanskrit?', options: ['Namaste', 'Katham', 'Dhanyavādah', 'Kim'], answer: 'Dhanyavādah' },
      { type: 'fill-in-the-blank', question: 'To ask a male "How are you?", you say "Bhavān ____ asti?".', answer: 'katham' }
    ],
    followUp: 'Practice saying "Namaste" with a respectful bow.'
  },
  { 
    id: 'lesson-sanskrit-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-sanskrit-2',
    vocabulary: [
      { word: 'जलम्', romanization: 'Jalam', definition: 'Water', ipa: '/dʒələm/' },
      { word: 'चायम्', romanization: 'Chāyam', definition: 'Tea', ipa: '/tʃaːjəm/' },
      { word: 'गृहम्', romanization: 'Gr̥ham', definition: 'House', ipa: '/ɡr̩ɦəm/' },
      { word: 'एकम्', romanization: 'Ekam', definition: 'One', ipa: '/ekəm/' },
      { word: 'द्वे', romanization: 'Dve', definition: 'Two', ipa: '/d̪ʋe/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'कृपया एकं चायं ददातु। (Kr̥payā ekam chāyam dadātu.)' },
      { speaker: 'Server', line: 'अस्तु। अन्यत् किमपि? (Astu. Anyat kimapi?)' },
      { speaker: 'Customer', line: 'एकं चषकं जलम् अपि। (Ekam chaṣakam jalam api.)' }
    ],
    culturalTip: 'Sanskrit grammar is highly structured, with three genders (masculine, feminine, neuter) and three numbers (singular, dual, plural).',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Sanskrit word for "House" is ____.', answer: 'Gr̥ham' },
      { type: 'multiple-choice', question: 'What does "Ekam" mean?', options: ['Two', 'Three', 'Water', 'One'], answer: 'One' }
    ],
    followUp: 'Try counting objects around you from one to three (ekam, dve, trīṇi).'
  },
  { 
    id: 'lesson-sanskrit-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-sanskrit-3',
    vocabulary: [
      { word: 'कुत्र?', romanization: 'Kutra?', definition: 'Where?', ipa: '/kut̪ɾə/' },
      { word: 'कदा?', romanization: 'Kadā?', definition: 'When?', ipa: '/kəd̪aː/' },
      { word: 'किमर्थम्?', romanization: 'Kimartham?', definition: 'Why?', ipa: '/kɪməɾt̪ʰəm/' },
      { word: 'किम्?', romanization: 'Kim?', definition: 'What?', ipa: '/kɪm/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'विद्यालयः कुत्र अस्ति? (Vidyālayah kutra asti?)' },
      { speaker: 'Server', line: 'तत्र अस्ति। (Tatra asti.)' },
      { speaker: 'Customer', line: 'धन्यवादः। सः कदा उद्घाट्यते? (Dhanyavādah. Sah kadā udghāṭyate?)' }
    ],
    culturalTip: 'Many words in modern Indian languages are derived from Sanskrit. Recognizing these roots can help you learn other languages as well.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Why?" in Sanskrit?', options: ['Kutra?', 'Kimartham?', 'Kadā?', 'Kim?'], answer: 'Kimartham?' }
    ],
    followUp: 'Practice asking "Idam kim asti?" (What is this?) for various objects.'
  },
  { 
    id: 'lesson-sanskrit-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-sanskrit-4',
    vocabulary: [
      { word: 'अहं गच्छामि', romanization: 'Aham gacchāmi', definition: 'I go (Present)', ipa: '' },
      { word: 'अहम् अगच्छम्', romanization: 'Aham agaccham', definition: 'I went (Past)', ipa: '' },
      { word: 'अहं गमिष्यामि', romanization: 'Aham gamiṣyāmi', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'अहं ह्यः काशीम् अगच्छम्। (Aham hyah Kāśīm agaccham.)' },
      { speaker: 'Server', line: 'उत्तमम्! भवान् श्वः अपि गमिष्यति वा? (Uttamam! Bhavān śvah api gamiṣyati vā?)' },
      { speaker: 'Customer', line: 'आम्, अहं गमिष्यामि। (Ām, aham gamiṣyāmi.)' }
    ],
    culturalTip: 'Sanskrit verbs have a highly developed system of tenses and moods, allowing for very precise expression of time and intent.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Aham gamiṣyāmi', 'Aham gacchāmi', 'Aham agaccham', 'Aham kim'], answer: 'Aham agaccham' }
    ],
    followUp: 'Try to form a simple sentence in the past, present, and future.'
  },
  { 
    id: 'lesson-sanskrit-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-sanskrit-5',
    vocabulary: [
      { word: 'अस्य मूल्यं कियत्?', romanization: 'Asya mūlyam kiyat?', definition: 'What is its price?', ipa: '' },
      { word: 'किञ्चित् न्यूनं करोतु।', romanization: 'Kiñcit nyūnam karotu.', definition: 'Please reduce it a little.', ipa: '' },
      { word: 'अस्तु, ददातु।', romanization: 'Astu, dadātu.', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'महाशय, अस्य फलस्य मूल्यं कियत्? (Mahāśaya, asya phalasya mūlyam kiyat?)' },
      { speaker: 'Server', line: 'पञ्चाशत् रूप्यकाणि। (Pañcāśat rūpyakāṇi.)' },
      { speaker: 'Customer', line: 'कृपया किञ्चित् न्यूनं करोतु। (Kr̥payā kiñcit nyūnam karotu.)' },
      { speaker: 'Server', line: 'अस्तु, चत्वारिंशत् ददातु। (Astu, catvārinśat dadātu.)' }
    ],
    culturalTip: 'While Sanskrit is not commonly used in modern markets, understanding its numerical system helps in understanding its descendants like Hindi.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to bargain?', options: ['Asya mūlyam kiyat?', 'Astu, dadātu', 'Kiñcit nyūnam karotu', 'Dhanyavādah'], answer: 'Kiñcit nyūnam karotu' }
    ],
    followUp: 'Learn to recognize the Sanskrit numerals from one to ten.'
  },
  { 
    id: 'lesson-sanskrit-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-sanskrit-6',
    vocabulary: [
      { word: 'च', romanization: 'Ca', definition: 'And', ipa: '/tʃə/' },
      { word: 'किन्तु', romanization: 'Kintu', definition: 'But', ipa: '/kɪn̪t̪u/' },
      { word: 'अतः', romanization: 'Atah', definition: 'So / Therefore', ipa: '/ət̪əh/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'अहं आपणं गतवान्, फलं च क्रीतवान्। (Aham āpaṇam gatavān, phalam ca krītavān.)' },
      { speaker: 'Server', line: 'अहमपि गन्तुम् इच्छामि स्म, किन्तु समयः नासीत्। (Ahamapi gantum icchāmi sma, kintu samayah nāsīt.)' },
      { speaker: 'Customer', line: 'अतः भवान् न गतवान्। (Atah bhavān na gatavān.)' }
    ],
    culturalTip: 'Sanskrit has a relatively free word order compared to modern languages. The grammatical case endings on nouns are more important for determining the meaning.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "and"?', options: ['Kintu', 'Atah', 'Ca', 'Kim'], answer: 'Ca' }
    ],
    followUp: 'Try connecting two simple nouns using "ca", for example, "Rāmah Lakshmanah ca" (Rama and Lakshmana).'
  },
  { 
    id: 'lesson-sanskrit-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-sanskrit-7',
    vocabulary: [
      { word: 'मम रुचिः', romanization: 'Mama ruchiḥ', definition: 'My hobby/interest', ipa: '' },
      { word: 'पुस्तकपठनम्', romanization: 'Pustakapaṭhanam', definition: 'Reading books', ipa: '' },
      { word: 'संगीतश्रवणम्', romanization: 'Saṅgītaśravaṇam', definition: 'Listening to music', ipa: '' },
      { word: 'योगः', romanization: 'Yogah', definition: 'Yoga', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'भवतः रुचिः का? (Bhavatah ruchiḥ kā?)' },
      { speaker: 'Server', line: 'मम रुचिः पुस्तकपठनम् संगीतश्रवणम् च। भवतः? (Mama ruchiḥ pustakapaṭhanam saṅgītaśravaṇam ca. Bhavatah?)' },
      { speaker: 'Customer', line: 'अहं योगं कर्तुम् इच्छामि। (Aham yogam kartum icchāmi.)' }
    ],
    culturalTip: 'Yoga and meditation, now global practices, are deeply rooted in Sanskrit texts like the Yoga Sutras of Patanjali.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Saṅgītaśravaṇam', 'Yogah', 'Pustakapaṭhanam', 'Mama ruchiḥ'], answer: 'Pustakapaṭhanam' }
    ],
    followUp: 'Learn the Sanskrit names for your favorite hobbies.'
  }
];
