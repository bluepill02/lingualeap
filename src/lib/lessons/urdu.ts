
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const urduDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-urdu-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-urdu-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-urdu-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-urdu-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-urdu-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-urdu-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-urdu-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-urdu-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-urdu-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-urdu-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-urdu-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-urdu-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-urdu-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-urdu-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const urduLessons: MicroLesson[] = [
  { 
    id: 'lesson-urdu-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-urdu-1',
    vocabulary: [
      { word: 'آداب', romanization: 'Aadaab', definition: 'Hello/Greetings (Formal, secular)', ipa: '/aːd̪aːb/' },
      { word: 'شکریہ', romanization: 'Shukriya', definition: 'Thank you', ipa: '/ʃʊk.ɾɪ.jɑː/' },
      { word: 'آپ کیسے ہیں؟', romanization: 'Aap kaise hain?', definition: 'How are you? (Formal)', ipa: '/ɑːp ˈkɛː.seː ɦɛ̃ː/' },
      { word: 'میں ٹھیک ہوں', romanization: 'Main theek hoon', definition: 'I am fine', ipa: '/mɛ̃ː ʈʰiːk ɦũː/' },
      { word: 'آپ کا نام کیا ہے؟', romanization: 'Aap ka naam kya hai?', definition: 'What is your name?', ipa: '/ɑːp kaː naːm kjaː ɦɛː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'آداب عرض ہے۔ آپ کیسے ہیں؟ (Aadaab arz hai. Aap kaise hain?)' },
      { speaker: 'Server', line: 'آداب۔ میں ٹھیک ہوں، شکریہ۔ آپ سنائیں؟ (Aadaab. Main theek hoon, shukriya. Aap sunayein?)' },
      { speaker: 'Customer', line: 'میں بھی ٹھیک ہوں۔ (Main bhi theek hoon.)' }
    ],
    culturalTip: 'Urdu is famous for its politeness and formal address. Using "Aap" instead of "Tu" or "Tum" when addressing strangers or elders is a crucial sign of respect.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Urdu?', options: ['Aadaab', 'Theek hoon', 'Shukriya', 'Kya'], answer: 'Shukriya' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?" formally, you say "Aap ____ hain?".', answer: 'kaise' }
    ],
    followUp: 'Practice greeting someone with "Aadaab".'
  },
  { 
    id: 'lesson-urdu-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-urdu-2',
    vocabulary: [
      { word: 'پانی', romanization: 'Paani', definition: 'Water', ipa: '/pɑː.niː/' },
      { word: 'چائے', romanization: 'Chai', definition: 'Tea', ipa: '/tʃɑːj/' },
      { word: 'گھر', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'ایک', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'دو', romanization: 'Do', definition: 'Two', ipa: '/d̪oː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'جناب، ایک کپ چائے دیجیے۔ (Janaab, ek cup chai dijiye.)' },
      { speaker: 'Server', line: 'ضرور۔ اور کچھ؟ (Zaroor. Aur kuch?)' },
      { speaker: 'Customer', line: 'ایک گلاس پانی بھی۔ (Ek glass paani bhi.)' }
    ],
    culturalTip: 'The culture of "chai" is central in many parts of South Asia where Urdu is spoken. It is a key element of hospitality and social gatherings.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Urdu word for "House" is ____.', answer: 'Ghar' },
      { type: 'multiple-choice', question: 'What does "Do" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting common objects around you from one to three (Ek, Do, Teen).'
  },
  { 
    id: 'lesson-urdu-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-urdu-3',
    vocabulary: [
      { word: 'کہاں؟', romanization: 'Kahan?', definition: 'Where?', ipa: '/kə.ɦɑ̃ː/' },
      { word: 'کب؟', romanization: 'Kab?', definition: 'When?', ipa: '/kəb/' },
      { word: 'کیوں؟', romanization: 'Kyon?', definition: 'Why?', ipa: '/kjõː/' },
      { word: 'کیا؟', romanization: 'Kya?', definition: 'What?', ipa: '/kjɑː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'دکان کہاں ہے؟ (Dukaan kahan hai?)' },
      { speaker: 'Server', line: 'وہ سامنے گلی میں ہے۔ (Woh saamne gali mein hai.)' },
      { speaker: 'Customer', line: 'شکریہ۔ کب کھلتی ہے؟ (Shukriya. Kab khulti hai?)' }
    ],
    culturalTip: 'Urdu and Hindi are mutually intelligible in their spoken forms (often referred to as Hindustani), but have different writing systems and higher literary vocabularies.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Urdu?', options: ['Kab?', 'Kyon?', 'Kahan?', 'Kya?'], answer: 'Kahan?' }
    ],
    followUp: 'Try asking a friend "Aap kahan ja rahe hain?" (Where are you going?).'
  },
  { 
    id: 'lesson-urdu-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-urdu-4',
    vocabulary: [
      { word: 'میں کرتا ہوں', romanization: 'Main karta hoon', definition: 'I do (Male, Present)', ipa: '' },
      { word: 'میں نے کیا', romanization: 'Maine kiya', definition: 'I did (Past)', ipa: '' },
      { word: 'میں کروں گا', romanization: 'Main karunga', definition: 'I will do (Male, Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'میں نے کل اپنا کام کیا۔ (Maine kal apna kaam kiya.)' },
      { speaker: 'Server', line: 'کیا آپ آج بھی کام کریں گے؟ (Kya aap aaj bhi kaam karenge?)' },
      { speaker: 'Customer', line: 'جی ہاں، میں کرتا ہوں۔ (Jee haan, main karta hoon.)' }
    ],
    culturalTip: 'Urdu verbs conjugate based on gender. A female would say "Main karti hoon" for "I do" and "Main karungi" for "I will do".',
    quizzes: [
      { type: 'multiple-choice', question: 'How would a male say "I will do"?', options: ['Main karta hoon', 'Main karunga', 'Maine kiya', 'Main kya'], answer: 'Main karunga' }
    ],
    followUp: 'Try to form simple sentences about your past, present, and future actions, paying attention to gender.'
  },
  { 
    id: 'lesson-urdu-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-urdu-5',
    vocabulary: [
      { word: 'اس کی قیمت کیا ہے؟', romanization: 'Iski qeemat kya hai?', definition: 'What is its price?', ipa: '' },
      { word: 'کچھ کم کریں', romanization: 'Kuch kam karein', definition: 'Please reduce it a little (Bargaining)', ipa: '' },
      { word: 'ٹھیک ہے، دے دیں', romanization: 'Theek hai, de dein', definition: 'Alright, please give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'بھائی، اس آم کی قیمت کیا ہے؟ (Bhai, is aam ki qeemat kya hai?)' },
      { speaker: 'Server', line: 'سو روپے کلو। (Sau rupaye kilo.)' },
      { speaker: 'Customer', line: 'کچھ کم کریں! (Kuch kam karein!)' },
      { speaker: 'Server', line: 'ٹھیک ہے، نوے روپے دے دیں۔ (Theek hai, nabbe rupaye de dein.)' }
    ],
    culturalTip: 'Bargaining is common in many traditional bazaars. It is often a friendly exchange, not an argument.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Iski qeemat kya hai?', 'Theek hai', 'Kuch kam karein', 'Kaise hain'], answer: 'Kuch kam karein' }
    ],
    followUp: 'Learn the numbers in Urdu to help with your bargaining skills.'
  },
  { 
    id: 'lesson-urdu-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-urdu-6',
    vocabulary: [
      { word: 'اور', romanization: 'Aur', definition: 'And', ipa: '/ɔːɾ/' },
      { word: 'لیکن', romanization: 'Lekin', definition: 'But', ipa: '/leː.kɪn/' },
      { word: 'اس لیے', romanization: 'Isliye', definition: 'So / Therefore', ipa: '/ɪs.lɪ.jeː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'میں بازار گیا اور سبزیاں خریدیں۔ (Main bazaar gaya aur sabziyan khareedin.)' },
      { speaker: 'Server', line: 'میں بھی جانا چاہتا تھا، لیکن وقت نہیں ملا۔ (Main bhi jaana chahta tha, lekin waqt nahin mila.)' },
      { speaker: 'Customer', line: 'اس لیے آپ نہیں گئے۔ (Isliye aap nahin gaye.)' }
    ],
    culturalTip: 'Urdu sentence structure is Subject-Object-Verb (SOV), so the verb usually comes at the end of the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Aur', 'Isliye', 'Lekin', 'Kya'], answer: 'Lekin' }
    ],
    followUp: 'Try to connect two simple ideas using "aur" (and) in a sentence.'
  },
  { 
    id: 'lesson-urdu-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-urdu-7',
    vocabulary: [
      { word: 'میرا مشغلہ', romanization: 'Mera mashghala', definition: 'My hobby', ipa: '' },
      { word: 'کتابیں پڑھنا', romanization: 'Kitabein parhna', definition: 'Reading books', ipa: '' },
      { word: 'موسیقی سننا', romanization: 'Mausiqi sunna', definition: 'Listening to music', ipa: '' },
      { word: 'فلمیں دیکھنا', romanization: 'Filmein dekhna', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'آپ کا مشغلہ کیا ہے؟ (Aap ka mashghala kya hai?)' },
      { speaker: 'Server', line: 'میرا مشغلہ کتابیں پڑھنا اور موسیقی سننا ہے۔ آپ کا؟ (Mera mashghala kitabein parhna aur mausiqi sunna hai. Aap ka?)' },
      { speaker: 'Customer', line: 'مجھے فلمیں دیکھنا پسند ہے۔ (Mujhe filmein dekhna pasand hai.)' }
    ],
    culturalTip: 'Urdu poetry, especially the Ghazal form, is a highly respected and cherished art form. Discussing poets like Ghalib or Faiz is a great way to engage in deep conversation.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Mausiqi sunna', 'Filmein dekhna', 'Kitabein parhna', 'Mera mashghala'], answer: 'Kitabein parhna' }
    ],
    followUp: 'Learn the name of a famous Urdu poet and try to find a translation of their work.'
  }
];
