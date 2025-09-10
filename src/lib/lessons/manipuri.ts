
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const manipuriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-manipuri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-manipuri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-manipuri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-manipuri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-manipuri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-manipuri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-manipuri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-manipuri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-manipuri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-manipuri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-manipuri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-manipuri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const manipuriLessons: MicroLesson[] = [
  { 
    id: 'lesson-manipuri-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-manipuri-1',
    vocabulary: [
      { word: 'খুরুমজরি', romanization: 'Khurumjari', definition: 'Hello/Greetings (a sign of respect)', ipa: '/kʰu.ɾum.dʒə.ɾi/' },
      { word: 'থাগৎচরি', romanization: 'Thagatchari', definition: 'Thank you', ipa: '/tʰa.ɡət.tʃə.ɾi/' },
      { word: 'নঙাইরিব্রা?', romanization: 'Nungairibra?', definition: 'How are you?', ipa: '/nəŋ.ai.ɾib.ɾa/' },
      { word: 'ঙাইরি', romanization: 'Nungairi', definition: 'I am fine', ipa: '/nəŋ.ai.ɾi/' },
      { word: 'নঙগী মিং করি কৌই?', romanization: 'Nanggi ming kari koui?', definition: 'What is your name?', ipa: '/nəŋ.gi miŋ kə.ɾi kou.i/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'খুরুমজরি। নঙাইরিব্রা? (Khurumjari. Nungairibra?)' },
      { speaker: 'Server', line: 'খুরুমজরি। ঐ ঙাইরি, থাগৎচরি। নঙদি? (Khurumjari. Ei nungairi, thagatchari. Nangdi?)' },
      { speaker: 'Customer', line: 'ঐসু ঙাইরি। (Eisu nungairi.)' }
    ],
    culturalTip: 'The traditional Manipuri dance, known as Ras Leela, is a famous classical dance form depicting the story of Radha and Krishna.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Manipuri?', options: ['Khurumjari', 'Nungairi', 'Thagatchari', 'Kari'], answer: 'Thagatchari' },
      { type: 'fill-in-the-blank', question: 'To ask "What is your name?", you say "Nanggi ming ____ koui?".', answer: 'kari' }
    ],
    followUp: 'Practice greeting an elder with a respectful "Khurumjari".'
  },
  { 
    id: 'lesson-manipuri-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-manipuri-2',
    vocabulary: [
      { word: 'ইশিং', romanization: 'Ishing', definition: 'Water', ipa: '/i.ʃiŋ/' },
      { word: 'চা', romanization: 'Cha', definition: 'Tea', ipa: '/tʃa/' },
      { word: 'য়ুম', romanization: 'Yum', definition: 'House', ipa: '/jum/' },
      { word: 'অমা', romanization: 'Ama', definition: 'One', ipa: '/ə.ma/' },
      { word: 'অনি', romanization: 'Ani', definition: 'Two', ipa: '/ə.ni/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ইনাই, চা কাপ অমা পীয়ু। (Inai, cha cup ama piyu.)' },
      { speaker: 'Server', line: 'হোই, পিজগে। অতোপ্পা করি লৌসিগে? (Hoi, pijage. Atoppa kari lousige?)' },
      { speaker: 'Customer', line: 'ইশিং বোতল অমা পীয়ু। (Ishing bottle ama piyu.)' }
    ],
    culturalTip: 'The Ima Keithel (Mother\'s Market) in Imphal is one of the largest all-women markets in the world, a unique symbol of Manipuri culture and economy.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Manipuri word for "Water" is ____.', answer: 'Ishing' },
      { type: 'multiple-choice', question: 'What does "Ama" mean?', options: ['Two', 'Three', 'Tea', 'One'], answer: 'One' }
    ],
    followUp: 'Try counting various items around you up to three (Ama, Ani, Ahum).'
  },
  { 
    id: 'lesson-manipuri-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-manipuri-3',
    vocabulary: [
      { word: 'কদাইদা?', romanization: 'Kadaida?', definition: 'Where?', ipa: '/kə.d̪ai.d̪ə/' },
      { word: 'करम्बा মতমদা?', romanization: 'Karamba matamda?', definition: 'When?', ipa: '/kə.ɾəm.ba mə.t̪əm.d̪ə/' },
      { word: 'করিগীদমক?', romanization: 'Karigidamak?', definition: 'Why?', ipa: '/kə.ɾi.gi.d̪ə.mək/' },
      { word: 'করি?', romanization: 'Kari?', definition: 'What?', ipa: '/kə.ɾi/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'দোকান কদাইদা লৈ? (Dukaan kadaida lei?)' },
      { speaker: 'Server', line: 'অদোম লম্বী অদুগী মপান্দা। (Adom lambi adugi mapanda.)' },
      { speaker: 'Customer', line: 'থাগৎচরি। করम्বা মতমদা হাংগনি? (Thagatchari. Karamba matamda hanggani?)' }
    ],
    culturalTip: 'Manipuri is a Tibeto-Burman language and has its own script called Meitei Mayek, which has seen a major revival in recent years.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Manipuri?', options: ['Karamba matamda?', 'Karigidamak?', 'Kadaida?', 'Kari?'], answer: 'Kadaida?' }
    ],
    followUp: 'Try asking a friend "Nang kadaida chatli?" (Where are you going?).'
  },
  { 
    id: 'lesson-manipuri-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-manipuri-4',
    vocabulary: [
      { word: 'ঐ চৎলি', romanization: 'Ei chatli', definition: 'I go (Present)', ipa: '/ei tʃət.li/' },
      { word: 'ঐ চৎখি', romanization: 'Ei chatkhi', definition: 'I went (Past)', ipa: '/ei tʃət.kʰi/' },
      { word: 'ঐ চৎகனி', romanization: 'Ei chatkani', definition: 'I will go (Future)', ipa: '/ei tʃət.kə.ni/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ঐ ঙরাং ইম্ফালদা চৎখি। (Ei ngarang Imphal-da chatkhi.)' },
      { speaker: 'Server', line: 'ফজৈ! নங் হায়engsu চৎகদ্রা? (Phajai! Nang hayengsu chatkadra?)' },
      { speaker: 'Customer', line: 'হোই, ঐ চৎகனி। (Hoi, ei chatkani.)' }
    ],
    culturalTip: 'The tenses in Manipuri are indicated by suffixes added to the verb root, like -li for present, -khi for past, and -kani for future.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Ei chatkani', 'Ei chatli', 'Ei chatkhi', 'Ei kari'], answer: 'Ei chatkhi' }
    ],
    followUp: 'Try to describe your activities for yesterday, today, and tomorrow using the correct tenses.'
  },
  { 
    id: 'lesson-manipuri-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-manipuri-5',
    vocabulary: [
      { word: 'অসিগী মমল কয়া?', romanization: 'Asigi mamal kaya?', definition: 'What is its price?', ipa: '/ə.si.gi mə.məl kə.ja/' },
      { word: 'খরা হন্থহনবীয়ু', romanization: 'Khara hanthanabiyu', definition: 'Please reduce it a little. (Bargaining)', ipa: '' },
      { word: 'য়ারে, পীয়ু', romanization: 'Yare, piyu', definition: 'Alright, give it.', ipa: '/jaː.ɾe, piː.ju/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ইনাই, অসিগী মমল কয়া? (Inai, asigi mamal kaya?)' },
      { speaker: 'Server', line: 'লিংখৈ অমদা লুপা কুন। (Lingkhai amada lupa kun.)' },
      { speaker: 'Customer', line: 'খরা হন্থহনবীয়ু। (Khara hanthanabiyu.)' },
      { speaker: 'Server', line: 'য়ারে, তরামাঙা পীয়ு। (Yare, taramanga piyu.)' }
    ],
    culturalTip: 'Manipur is famous for its unique pottery, especially the black pottery from Longpi village, which is made without using a potter\'s wheel.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Asigi mamal kaya?', 'Yare, piyu', 'Khara hanthanabiyu', 'Phajai'], answer: 'Khara hanthanabiyu' }
    ],
    followUp: 'Practice a short bargaining conversation with a friend.'
  },
  { 
    id: 'lesson-manipuri-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-manipuri-6',
    vocabulary: [
      { word: 'অমসুং', romanization: 'Amasung', definition: 'And', ipa: '/ə.mə.suŋ/' },
      { word: 'অদুবু', romanization: 'Adubu', definition: 'But', ipa: '/ə.d̪u.bu/' },
      { word: 'মরমদুনা', romanization: 'Maramduna', definition: 'So / Therefore', ipa: '/mə.ɾəm.d̪u.na/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ঐ কৈথেলদা চৎখি অমসুং ঙা লৈখি। (Ei keithel-da chatkhi amasung nga leikhi.)' },
      { speaker: 'Server', line: 'ঐসু চৎनिंगলম্মি, অদুবু মতম ফংlude। (Eisu chatninglammi, adubu matam phanglude.)' },
      { speaker: 'Customer', line: 'মরমদুনা নங் চৎಖિদবনি। (Maramduna nang chatkhidabani.)' }
    ],
    culturalTip: 'Manipuri sentence structure is typically Subject-Object-Verb (SOV), which is common among many languages of the Indian subcontinent.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Amasung', 'Maramduna', 'Adubu', 'Kari'], answer: 'Adubu' }
    ],
    followUp: 'Try to connect two simple ideas using "amasung" (and).'
  },
  { 
    id: 'lesson-manipuri-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-manipuri-7',
    vocabulary: [
      { word: 'ঐগী শৌখ', romanization: 'Aigi shaukh', definition: 'My hobby', ipa: '/ei.gi ʃaukʰ/' },
      { word: 'লাইরিক পাба', romanization: 'Lairik paaba', definition: 'Reading books', ipa: '/lai.ɾik paː.ba/' },
      { word: 'ইশৈ তাবা', romanization: 'Ishei taaba', definition: 'Listening to music', ipa: '/i.ʃei taː.ba/' },
      { word: 'শান্নবা', romanization: 'Shannaba', definition: 'Playing (sports/games)', ipa: '/ʃən.na.bə/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'নঙগী শৌখ করি? (Nanggi shaukh kari?)' },
      { speaker: 'Server', line: 'ঐগী শৌখদি লাইরিক পাба অমসুং ইশৈ таба। নঙгиদি? (Aigi shaukh-di lairik paaba amasung ishei taaba. Nanggi-di?)' },
      { speaker: 'Customer', line: 'ঐদি শান্নবা পামজৈ। (Aidi shannaba paamjei.)' }
    ],
    culturalTip: 'Polo (Sagol Kangjei) is said to have originated in Manipur. The state has a strong sporting culture.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Ishei taaba', 'Shannaba', 'Lairik paaba', 'Aigi shaukh'], answer: 'Lairik paaba' }
    ],
    followUp: 'Learn to talk about your favorite hobby or sport in Manipuri.'
  }
];
