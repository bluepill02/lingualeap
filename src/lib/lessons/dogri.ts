
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const dogriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-dogri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-dogri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-dogri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-dogri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-dogri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-dogri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-dogri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-dogri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-dogri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-dogri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-dogri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-dogri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-dogri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-dogri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const dogriLessons: MicroLesson[] = [
  { 
    id: 'lesson-dogri-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-dogri-1',
    vocabulary: [
      { word: 'जै देव', romanization: 'Jai Dev', definition: 'Hello/Greetings (Formal)', ipa: '/dʒaɪ d̪eːv/' },
      { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱən.jə.ʋɑːd̪/' },
      { word: 'तुस किद्दां ओ?', romanization: 'Tus kiddan o?', definition: 'How are you? (Formal)', ipa: '/t̪us kid̪ːɑ̃ː oː/' },
      { word: 'मैं ठीक ओ', romanization: 'Main theek o', definition: 'I am fine', ipa: '/mɛ̃ː ʈʰiːk oː/' },
      { word: 'तुंदा नां के ऐ?', romanization: 'Tunda naan ke ai?', definition: 'What is your name?', ipa: '/t̪un̪d̪ɑː nɑ̃ː keː ɛː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'जै देव। तुस किद्दां ओ?' },
      { speaker: 'Server', line: 'जै देव। मैं ठीक ओ, धन्यवाद। तुस दस्सो?' },
      { speaker: 'Customer', line: 'मैं भी ठीक ओ।' }
    ],
    culturalTip: 'The Dogra culture, native to the Jammu region, is known for its warrior traditions and rich folk music like "Geetru" and "Bhakh".',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you greet someone formally in Dogri?', options: ['Namaste', 'Kiddan o', 'Jai Dev', 'Dhanyavaad'], answer: 'Jai Dev' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Tus ____ o?".', answer: 'kiddan' }
    ],
    followUp: 'Practice greeting someone with "Jai Dev".'
  },
  { 
    id: 'lesson-dogri-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-dogri-2',
    vocabulary: [
      { word: 'पानी', romanization: 'Paani', definition: 'Water', ipa: '/pɑːniː/' },
      { word: 'चाह्', romanization: 'Chah', definition: 'Tea', ipa: '/tʃɑːh/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'इक', romanization: 'Ik', definition: 'One', ipa: '/ɪk/' },
      { word: 'दो', romanization: 'Do', definition: 'Two', ipa: '/d̪oː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'भ्राऽ, इक कप चाह् देऽ। (Bhraa, ik cup chah de.)' },
      { speaker: 'Server', line: 'जरूर। होर कुछ चाहीदा? (Zaroor. Hor kuch chahida?)' },
      { speaker: 'Customer', line: 'इक बोतल पानी देऽ। (Ik botal paani de.)' }
    ],
    culturalTip: 'Dogri cuisine includes dishes like "Ambal" (a sweet and sour pumpkin dish) and "Khatta Meat".',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Dogri word for "Water" is ____.', answer: 'Paani' },
      { type: 'multiple-choice', question: 'What does "Ik" mean?', options: ['Two', 'Three', 'Tea', 'One'], answer: 'One' }
    ],
    followUp: 'Try counting to five in Dogri.'
  },
  { 
    id: 'lesson-dogri-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-dogri-3',
    vocabulary: [
      { word: 'कुत्थै?', romanization: 'Kutthae?', definition: 'Where?', ipa: '/kut̪ːʰɛː/' },
      { word: 'कदूं?', romanization: 'Kadun?', definition: 'When?', ipa: '/kəd̪ũː/' },
      { word: 'क्यें?', romanization: 'Kyen?', definition: 'Why?', ipa: '/kjɛ̃ː/' },
      { word: 'के?', romanization: 'Ke?', definition: 'What?', ipa: '/keː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दुकान कुत्थै ऐ? (Dukaan kutthae ai?)' },
      { speaker: 'Server', line: 'ओह् मोड़ पर। (Oh mod par.)' },
      { speaker: 'Customer', line: 'धन्यवाद। कदूं खुलदी ऐ? (Dhanyavaad. Kadun khuldi ai?)' }
    ],
    culturalTip: 'Dogri is an Indo-Aryan language spoken mainly in the Jammu region of Jammu and Kashmir, as well as in parts of Himachal Pradesh and Punjab.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Dogri?', options: ['Kadun?', 'Kyen?', 'Kutthae?', 'Ke?'], answer: 'Kutthae?' }
    ],
    followUp: 'Practice asking "What is this?" (Eh ke ai?) about different objects.'
  },
  { 
    id: 'lesson-dogri-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-dogri-4',
    vocabulary: [
      { word: 'मैं जांदा हां', romanization: 'Main jaanda haan', definition: 'I go (Present)', ipa: '' },
      { word: 'मैं गेआ हा', romanization: 'Main gea ha', definition: 'I went (Past)', ipa: '' },
      { word: 'मैं जांग', romanization: 'Main jaang', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मैं कल जम्मू गेआ हा। (Main kal Jammu gea ha.)' },
      { speaker: 'Server', line: 'बड़ा अच्छा। तुस कल भी जांगे? (Bada achha. Tus kal bhi jaange?)' },
      { speaker: 'Customer', line: 'हां, मैं जांदा हां। (Haan, main jaanda haan.)' }
    ],
    culturalTip: 'Dogri verbs conjugate based on tense, gender, and number, making it a rich and expressive language.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Main jaang', 'Main jaanda haan', 'Main gea ha', 'Main khana'], answer: 'Main gea ha' }
    ],
    followUp: 'Try to describe something you did yesterday using the past tense.'
  },
  { 
    id: 'lesson-dogri-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-dogri-5',
    vocabulary: [
      { word: 'इसदा के मूल्य ऐ?', romanization: 'Isda ke mulya ai?', definition: 'What is its price?', ipa: '' },
      { word: 'थोड़ा घट्ट करो।', romanization: 'Thoda ghatt karo.', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ठीक ऐ, देई देओ।', romanization: 'Theek ai, dei deo.', definition: 'Alright, please give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'भ्राऽ, इस सेब दा के मूल्य ऐ? (Bhraa, is seb da ke mulya ai?)' },
      { speaker: 'Server', line: 'सौ रुपये किलो। (Sau rupaye kilo.)' },
      { speaker: 'Customer', line: 'थोड़ा घट्ट करो। (Thoda ghatt karo.)' },
      { speaker: 'Server', line: 'ठीक ऐ, नब्बे देई देओ। (Theek ai, nabbe dei deo.)' }
    ],
    culturalTip: 'Like in many parts of India, bargaining is common in local markets. Being polite and friendly can help get a better price.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Isda ke mulya ai?', 'Theek ai', 'Thoda ghatt karo', 'Bada achha'], answer: 'Thoda ghatt karo' }
    ],
    followUp: 'Practice numbers in Dogri to help with shopping.'
  },
  { 
    id: 'lesson-dogri-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-dogri-6',
    vocabulary: [
      { word: 'ते', romanization: 'Te', definition: 'And', ipa: '/t̪eː/' },
      { word: 'पर', romanization: 'Par', definition: 'But', ipa: '/pəɾ/' },
      { word: 'इस करियै', romanization: 'Is kariyai', definition: 'So / Therefore', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मैं बाजार गेआ ते सब्जियां लेई आया। (Main bazaar gea te sabziyan lei aaya.)' },
      { speaker: 'Server', line: 'मैं भी जाना चांदा हा, पर समां नेईं मिल्या। (Main bhi jaana chaanda ha, par samaan nein milya.)' },
      { speaker: 'Customer', line: 'इस करियै तुस नेईं गे। (Is kariyai tus nein ge.)' }
    ],
    culturalTip: 'Dogri sentence structure is generally Subject-Object-Verb (SOV), similar to Hindi and Punjabi.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Te', 'Is kariyai', 'Par', 'Ke'], answer: 'Par' }
    ],
    followUp: 'Try to join two simple ideas using "te" (and).'
  },
  { 
    id: 'lesson-dogri-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-dogri-7',
    vocabulary: [
      { word: 'मेरा शौक़', romanization: 'Mera shauk', definition: 'My hobby', ipa: '' },
      { word: 'किताबें पढ़ना', romanization: 'Kitabein padhna', definition: 'Reading books', ipa: '' },
      { word: 'संगीत सुनना', romanization: 'Sangeet sunna', definition: 'Listening to music', ipa: '' },
      { word: 'खेड़ना', romanization: 'Khedna', definition: 'Playing', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'तुंदा के शौक़ ऐ? (Tunda ke shauk ai?)' },
      { speaker: 'Server', line: 'मेरा शौक़ किताबें पढ़ना ते संगीत सुनना ऐ। तुंदा? (Mera shauk kitabein padhna te sangeet sunna ai. Tunda?)' },
      { speaker: 'Customer', line: 'में खेड़ना पसंद करदा हां। (Main khedna pasand karda haan.)' }
    ],
    culturalTip: 'Dogri literature has a rich history, with prominent writers like Padma Sachdev. Talking about reading and music is a great way to connect.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Sangeet sunna', 'Khedna', 'Kitabein padhna', 'Mera shauk'], answer: 'Kitabein padhna' }
    ],
    followUp: 'Learn to say your favorite hobby in Dogri.'
  },
];
