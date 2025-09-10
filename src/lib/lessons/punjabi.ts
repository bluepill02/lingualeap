
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const punjabiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-punjabi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-punjabi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-punjabi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-punjabi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-punjabi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-punjabi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-punjabi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-punjabi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-punjabi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-punjabi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-punjabi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const punjabiLessons: MicroLesson[] = [
  { 
    id: 'lesson-punjabi-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-punjabi-1',
    vocabulary: [
      { word: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', romanization: 'Sat Sri Akal', definition: 'Hello/Greetings (common Sikh greeting)', ipa: '/sət̪ sɾiː əkaːl/' },
      { word: 'ਧੰਨਵਾਦ', romanization: 'Dhannvaad', definition: 'Thank you', ipa: '/d̪ʱən̪ːʋaːd̪/' },
      { word: 'ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?', romanization: 'Tuhada ki haal hai?', definition: 'How are you? (Formal)', ipa: '/t̪uɦaɖaː kiː ɦaːl ɦɛː/' },
      { word: 'ਮੈਂ ਠੀਕ ਹਾਂ', romanization: 'Main theek haan', definition: 'I am fine', ipa: '/mɛ̃ː ʈʰiːk ɦɑ̃ː/' },
      { word: 'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?', romanization: 'Tuhada naam ki hai?', definition: 'What is your name?', ipa: '/t̪uɦaɖaː naːm kiː ɦɛː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Sat Sri Akal ji. Tuhada ki haal hai?' },
      { speaker: 'Server', line: 'Sat Sri Akal ji. Main theek haan, dhannvaad. Tusi sunao?' },
      { speaker: 'Customer', line: 'Main vi vadiya haan. (I am also fine.)' }
    ],
    culturalTip: '"Sat Sri Akal" is a greeting deeply rooted in Sikhism, meaning "Truth is the Timeless One". It is used widely by Punjabis of all faiths as a respectful greeting.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Punjabi?', options: ['Sat Sri Akal', 'Theek haan', 'Dhannvaad', 'Ki'], answer: 'Dhannvaad' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Tuhada ki ____ hai?".', answer: 'haal' }
    ],
    followUp: 'Try greeting someone with a cheerful "Sat Sri Akal!"'
  },
  { 
    id: 'lesson-punjabi-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-punjabi-2',
    vocabulary: [
      { word: 'ਪਾਣੀ', romanization: 'Paani', definition: 'Water', ipa: '/paːɳiː/' },
      { word: 'ਚਾਹ', romanization: 'Chah', definition: 'Tea', ipa: '/tʃaː/' },
      { word: 'ਘਰ', romanization: 'Ghar', definition: 'House', ipa: '/kə̀ɾ/' },
      { word: 'ਇੱਕ', romanization: 'Ikk', definition: 'One', ipa: '/ɪkː/' },
      { word: 'ਦੋ', romanization: 'Do', definition: 'Two', ipa: '/d̪oː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਵੀਰ ਜੀ, ਇੱਕ ਕੱਪ ਚਾਹ ਦੇਣਾ। (Veer ji, ikk cup chah dena.)' },
      { speaker: 'Server', line: 'ਹਾਂਜੀ। ਹੋਰ ਕੁਝ? (Haanji. Hor kuch?)' },
      { speaker: 'Customer', line: 'ਇੱਕ ਗਲਾਸ ਪਾਣੀ ਵੀ। (Ikk glass paani vi.)' }
    ],
    culturalTip: 'In Punjab, addressing a shopkeeper as "Veer ji" (brother) or "Bhain ji" (sister) is a common sign of respect and friendliness.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Punjabi word for "House" is ____.', answer: 'Ghar' },
      { type: 'multiple-choice', question: 'What does "Do" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting common objects around you from one to three (Ikk, Do, Tinn).'
  },
  { 
    id: 'lesson-punjabi-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-punjabi-3',
    vocabulary: [
      { word: 'ਕਿੱਥੇ?', romanization: 'Kitthe?', definition: 'Where?', ipa: '/kɪt̪ːʰe/' },
      { word: 'ਕਦੋਂ?', romanization: 'Kadon?', definition: 'When?', ipa: '/kəd̪õː/' },
      { word: 'ਕਿਉਂ?', romanization: 'Kyon?', definition: 'Why?', ipa: '/kjõː/' },
      { word: 'ਕੀ?', romanization: 'Ki?', definition: 'What?', ipa: '/kiː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਦੁਕਾਨ ਕਿੱਥੇ ਹੈ? (Dukaan kitthe hai?)' },
      { speaker: 'Server', line: 'ਉਹ ਸੜਕ ਦੇ ਮੋੜ ਤੇ। (Oh sarak de mod te.)' },
      { speaker: 'Customer', line: 'ਧੰਨਵਾਦ। ਕਦੋਂ ਖੁੱਲ੍ਹਦੀ ਹੈ? (Dhannvaad. Kadon khuldi hai?)' }
    ],
    culturalTip: 'Punjabi is a tonal language, but the script (Gurmukhi) does not explicitly mark tones. The meaning is usually clear from the context.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Punjabi?', options: ['Kadon?', 'Kyon?', 'Kitthe?', 'Ki?'], answer: 'Kitthe?' }
    ],
    followUp: 'Try asking a friend "Tusi kitthe ja rahe ho?" (Where are you going?).'
  },
  { 
    id: 'lesson-punjabi-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-punjabi-4',
    vocabulary: [
      { word: 'ਮੈਂ ਜਾਂਦਾ ਹਾਂ', romanization: 'Main jaanda haan', definition: 'I go (Male, Present)', ipa: '' },
      { word: 'ਮੈਂ ਗਿਆ ਸੀ', romanization: 'Main gaya si', definition: 'I had gone (Past)', ipa: '' },
      { word: 'ਮੈਂ ਜਾਵਾਂਗਾ', romanization: 'Main jaavanga', definition: 'I will go (Male, Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਮੈਂ ਕੱਲ੍ਹ ਦਿੱਲੀ ਗਿਆ ਸੀ। (Main kall Dilli gaya si.)' },
      { speaker: 'Server', line: 'ਵਧੀਆ! ਤੁਸੀਂ ਕੱਲ੍ਹ ਵੀ ਜਾਓਗੇ? (Vadiya! Tusi kall vi jaoge?)' },
      { speaker: 'Customer', line: 'ਹਾਂਜੀ, ਮੈਂ ਜਾਵਾਂਗਾ। (Haanji, main jaavanga.)' }
    ],
    culturalTip: 'Punjabi verbs conjugate based on gender, number, person, and tense, making them very expressive.',
    quizzes: [
      { type: 'multiple-choice', question: 'How would a male say "I had gone"?', options: ['Main jaavanga', 'Main jaanda haan', 'Main gaya si', 'Main ki'], answer: 'Main gaya si' }
    ],
    followUp: 'Try to describe your activities for yesterday, today, and tomorrow using the correct tenses.'
  },
  { 
    id: 'lesson-punjabi-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-punjabi-5',
    vocabulary: [
      { word: 'ਇਸਦਾ ਕੀ ਮੁੱਲ ਹੈ?', romanization: 'Isda ki mul hai?', definition: 'What is its price?', ipa: '' },
      { word: 'ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ।', romanization: 'Thoda ghatt karo.', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ਠੀਕ ਹੈ, ਦੇ ਦਿਓ।', romanization: 'Theek hai, de deo.', definition: 'Alright, please give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਵੀਰ ਜੀ, ਇਹਨਾਂ ਸੇਬਾਂ ਦਾ ਕੀ ਮੁੱਲ ਹੈ? (Veer ji, ehna seban da ki mul hai?)' },
      { speaker: 'Server', line: 'ਸੌ ਰੁਪਏ ਕਿਲੋ। (Sau rupaye kilo.)' },
      { speaker: 'Customer', line: 'ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ ਜੀ। (Thoda ghatt karo ji.)' },
      { speaker: 'Server', line: 'ਠੀਕ ਹੈ, ਨੱਬੇ ਦੇ ਦਿਓ। (Theek hai, nabbe de deo.)' }
    ],
    culturalTip: 'Bargaining in Punjabi markets is a friendly affair. A polite "Thoda ghatt karo ji" is the perfect way to start.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Isda ki mul hai?', 'Theek hai', 'Thoda ghatt karo', 'Vadiya'], answer: 'Thoda ghatt karo' }
    ],
    followUp: 'Practice asking for the prices of different items in a shop.'
  },
  { 
    id: 'lesson-punjabi-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-punjabi-6',
    vocabulary: [
      { word: 'ਅਤੇ', romanization: 'Ate', definition: 'And', ipa: '/ət̪eː/' },
      { word: 'ਪਰ', romanization: 'Par', definition: 'But', ipa: '/pəɾ/' },
      { word: 'ਇਸ ਲਈ', romanization: 'Is layi', definition: 'So / Therefore', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਮੈਂ ਬਾਜ਼ਾਰ ਗਿਆ ਅਤੇ ਸਬਜ਼ੀਆਂ ਖਰੀਦੀਆਂ। (Main bazaar gaya ate sabziyan khareediyan.)' },
      { speaker: 'Server', line: 'ਮੈਂ ਵੀ ਜਾਣਾ ਚਾਹੁੰਦਾ ਸੀ, ਪਰ ਸਮਾਂ ਨਹੀਂ ਮਿਲਿਆ। (Main vi jaana chahunda si, par samaan nahin milya.)' },
      { speaker: 'Customer', line: 'ਇਸ ਲਈ ਤੁਸੀਂ ਨਹੀਂ ਗਏ। (Is layi tusi nahin gaye.)' }
    ],
    culturalTip: 'Punjabi is an Indo-Aryan language and follows the Subject-Object-Verb (SOV) sentence structure.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ate', 'Is layi', 'Par', 'Ki'], answer: 'Par' }
    ],
    followUp: 'Try to connect two simple ideas you know using "ate" (and).'
  },
  { 
    id: 'lesson-punjabi-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-punjabi-7',
    vocabulary: [
      { word: 'ਮੇਰਾ ਸ਼ੌਕ', romanization: 'Mera shauk', definition: 'My hobby', ipa: '' },
      { word: 'ਕਿਤਾਬਾਂ ਪੜ੍ਹਨਾ', romanization: 'Kitaban padhna', definition: 'Reading books', ipa: '' },
      { word: 'ਸੰਗੀਤ ਸੁਣਨਾ', romanization: 'Sangeet sunna', definition: 'Listening to music', ipa: '' },
      { word: 'ਖੇਡਣਾ', romanization: 'Khedna', definition: 'Playing', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ਤੁਹਾਡਾ ਸ਼ੌਕ ਕੀ ਹੈ? (Tuhada shauk ki hai?)' },
      { speaker: 'Server', line: 'ਮੇਰਾ ਸ਼ੌਕ ਕਿਤਾਬਾਂ ਪੜ੍ਹਨਾ ਅਤੇ ਸੰਗੀਤ ਸੁਣਨਾ ਹੈ। ਤੁਹਾਡਾ? (Mera shauk kitaban padhna ate sangeet sunna hai. Tuhada?)' },
      { speaker: 'Customer', line: 'ਮੈਨੂੰ ਖੇਡਣਾ ਪਸੰਦ ਹੈ। (Mainu khedna pasand hai.)' }
    ],
    culturalTip: 'Punjab has a rich tradition of folk music and dance, with Bhangra being world-famous. Discussing music is a great way to connect with Punjabis.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Sangeet sunna', 'Khedna', 'Kitaban padhna', 'Mera shauk'], answer: 'Kitaban padhna' }
    ],
    followUp: 'Learn to talk about your favorite hobby or music in Punjabi.'
  }
];
