
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const nepaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-nepali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-nepali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-nepali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-nepali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-nepali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-nepali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-nepali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-nepali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-nepali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-nepali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-nepali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-nepali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-nepali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-nepali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const nepaliLessons: MicroLesson[] = [
  { 
    id: 'lesson-nepali-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-nepali-1',
    vocabulary: [
      { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nʌmʌsˈt̪eː/' },
      { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱʌn̪.jʌ.ʋɑːd̪/' },
      { word: 'तपाईंलाई कस्तो छ?', romanization: 'Tapaai-lai kasto chha?', definition: 'How are you? (Formal)', ipa: '/t̪ʌ.pɑ̃ĩ.laɪ ˈkʌs.t̪o tʃʰʌ/' },
      { word: 'मलाई सन्चै छ', romanization: 'Malaai sanchai chha', definition: 'I am fine', ipa: '/mʌ.laɪ sʌn.ˈtʃaɪ tʃʰʌ/' },
      { word: 'तपाईंको नाम के हो?', romanization: 'Tapaaiko naam ke ho?', definition: 'What is your name?', ipa: '/t̪ʌ.pɑ̃ĩ.ko naːm ke ho/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'नमस्ते। (Namaste.)' },
      { speaker: 'Server', line: 'नमस्ते। तपाईंलाई कस्तो छ? (Namaste. Tapaai-lai kasto chha?)' },
      { speaker: 'Customer', line: 'मलाई सन्चै छ, धन्यवाद। तपाईंलाई? (Malaai sanchai chha, dhanyavaad. Tapaai-lai?)' },
      { speaker: 'Server', line: 'मलाई पनि सन्चै छ। (Malaai pani sanchai chha.)' }
    ],
    culturalTip: 'In Nepal, "Namaste" with palms pressed together is the most common and respectful greeting for everyone, regardless of age.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "How are you?" formally in Nepali?', options: ['Dhanyavaad', 'Namaste', 'Tapaai-lai kasto chha?', 'Ke ho?'], answer: 'Tapaai-lai kasto chha?' },
      { type: 'fill-in-the-blank', question: 'To say "I am fine", you can say "Malaai ____ chha".', answer: 'sanchai' }
    ],
    followUp: 'Try greeting a friend with "Namaste" and ask them "Kasto chha?".'
  },
  { 
    id: 'lesson-nepali-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-nepali-2',
    vocabulary: [
      { word: 'पानी', romanization: 'Paani', definition: 'Water', ipa: '/paːni/' },
      { word: 'चिया', romanization: 'Chiyaa', definition: 'Tea', ipa: '/tʃijaː/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱʌɾ/' },
      { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'दुई', romanization: 'Dui', definition: 'Two', ipa: '/d̪ui/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दाइ, एक कप चिया दिनुहोस्। (Daai, ek cup chiyaa dinuhos.)' },
      { speaker: 'Server', line: 'हुन्छ। अरू केहि? (Hunchha. Aru kehi?)' },
      { speaker: 'Customer', line: 'एक गिलास पानी पनि। (Ek gilaas paani pani.)' }
    ],
    culturalTip: 'Addressing a male shopkeeper as "Daai" (elder brother) or a female one as "Didi" (elder sister) is a common and friendly practice in Nepal.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Nepali word for "Water" is ____.', answer: 'Paani' },
      { type: 'multiple-choice', question: 'What does "Dui" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting common items around you from one to three (ek, dui, teen).'
  },
  { 
    id: 'lesson-nepali-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-nepali-3',
    vocabulary: [
      { word: 'कहाँ?', romanization: 'Kahaan?', definition: 'Where?', ipa: '/kʌ.ɦɑ̃ː/' },
      { word: 'कहिले?', romanization: 'Kahile?', definition: 'When?', ipa: '/kʌ.ɦɪ.le/' },
      { word: 'किन?', romanization: 'Kina?', definition: 'Why?', ipa: '/ki.nʌ/' },
      { word: 'के?', romanization: 'Ke?', definition: 'What?', ipa: '/ke/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'पसल कहाँ छ? (Pasal kahaan chha?)' },
      { speaker: 'Server', line: 'त्यो बाटोको मोडमा। (Tyo baato-ko mod-ma.)' },
      { speaker: 'Customer', line: 'धन्यवाद। कहिले खुल्छ? (Dhanyavaad. Kahile khulchha?)' }
    ],
    culturalTip: 'Nepalese people are generally very helpful to tourists and visitors. Asking for directions is a good way to practice your Nepali.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Nepali?', options: ['Kahile?', 'Kina?', 'Kahaan?', 'Ke?'], answer: 'Kahaan?' }
    ],
    followUp: 'Ask a friend "Tapaai kahaan jaandai hunuhunchha?" (Where are you going?).'
  },
  { 
    id: 'lesson-nepali-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-nepali-4',
    vocabulary: [
      { word: 'म जान्छु', romanization: 'Ma jaanchhu', definition: 'I go (Present)', ipa: '' },
      { word: 'म गएँ', romanization: 'Ma gayen', definition: 'I went (Past)', ipa: '' },
      { word: 'म जानेछु', romanization: 'Ma jaanechhu', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'म हिजो पोखरा गएँ। (Ma hijo Pokhara gayen.)' },
      { speaker: 'Server', line: 'राम्रो! तपाईं भोलि पनि जानुहुन्छ? (Raamro! Tapaai bholi pani jaanuhunchha?)' },
      { speaker: 'Customer', line: 'हो, म जानेछु। (Ho, ma jaanechhu.)' }
    ],
    culturalTip: 'Nepali verbs conjugate based on person, tense, and level of respect, so there are many forms to learn.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Ma jaanechhu', 'Ma jaanchhu', 'Ma gayen', 'Ma ke'], answer: 'Ma gayen' }
    ],
    followUp: 'Try to describe an activity you did yesterday and one you will do tomorrow.'
  },
  { 
    id: 'lesson-nepali-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-nepali-5',
    vocabulary: [
      { word: 'यसको मूल्य कति हो?', romanization: 'Yasko mulya kati ho?', definition: 'What is its price?', ipa: '' },
      { word: 'अलिकति घटाउनुहोस्।', romanization: 'Alikati ghataaunuhos.', definition: 'Please reduce it a little. (Bargaining)', ipa: '' },
      { word: 'हुन्छ, दिनुहोस्।', romanization: 'Hunchha, dinuhos.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दाइ, यो स्याउको मूल्य कति हो? (Daai, yo syaau-ko mulya kati ho?)' },
      { speaker: 'Server', line: 'एक किलोको सय रुपैयाँ। (Ek kilo-ko saya rupiyaan.)' },
      { speaker: 'Customer', line: 'अलिकति घटाउनुहोस् न! (Alikati ghataaunuhos na!)' },
      { speaker: 'Server', line: 'हुन्छ, नब्बे रुपैयाँ दिनुहोस्। (Hunchha, nabbe rupiyaan dinuhos.)' }
    ],
    culturalTip: 'Bargaining is common in markets in Nepal, especially in tourist areas like Thamel in Kathmandu. A friendly negotiation is part of the shopping experience.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Yasko mulya kati ho?', 'Hunchha, dinuhos', 'Alikati ghataaunuhos', 'Ramro'], answer: 'Alikati ghataaunuhos' }
    ],
    followUp: 'Practice asking for the prices of different items you see in a shop.'
  },
  { 
    id: 'lesson-nepali-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-nepali-6',
    vocabulary: [
      { word: 'र', romanization: 'Ra', definition: 'And', ipa: '/ɾʌ/' },
      { word: 'तर', romanization: 'Tara', definition: 'But', ipa: '/t̪ʌɾʌ/' },
      { word: 'त्यसैले', romanization: 'Tyesaile', definition: 'So / Therefore', ipa: '/t̪je.saɪ.le/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'म बजार गएँ र तरकारी কিনें। (Ma bazaar gayen ra tarkaari kinen.)' },
      { speaker: 'Server', line: 'म पनि जान चाहन्थें, तर समय पाइन। (Ma pani jaana chaahanthen, tara samaya paaina.)' },
      { speaker: 'Customer', line: 'त्यसैले तपाईं जानुभएन। (Tyesaile tapaai jaanubhayena.)' }
    ],
    culturalTip: 'Nepali sentence structure is typically Subject-Object-Verb (SOV), similar to Hindi.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ra', 'Tyesaile', 'Tara', 'Ke'], answer: 'Tara' }
    ],
    followUp: 'Try to connect two ideas using "ra" (and) in a single sentence.'
  },
  { 
    id: 'lesson-nepali-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-nepali-7',
    vocabulary: [
      { word: 'मेरो रुचि', romanization: 'Mero ruchi', definition: 'My hobby/interest', ipa: '' },
      { word: 'किताब पढ्नु', romanization: 'Kitaab padhnu', definition: 'Reading books', ipa: '' },
      { word: 'संगीत सुन्नु', romanization: 'Sangeet sunnu', definition: 'Listening to music', ipa: '' },
      { word: 'घुम्न जानु', romanization: 'Ghumna jaanu', definition: 'To go trekking/traveling', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'तपाईंको रुचि के हो? (Tapaaiko ruchi ke ho?)' },
      { speaker: 'Server', line: 'मेरो रुचि किताब पढ्नु र संगीत सुन्नु हो। तपाईंको? (Mero ruchi kitaab padhnu ra sangeet sunnu ho. Tapaaiko?)' },
      { speaker: 'Customer', line: 'मलाई घुम्न जान मन पर्छ। (Malaai ghumna jaana man parchha.)' }
    ],
    culturalTip: 'Trekking ("ghumna jaanu") is a major part of Nepali culture and tourism, with Mount Everest and the Annapurna Circuit being world-famous destinations.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Sangeet sunnu', 'Ghumna jaanu', 'Kitaab padhnu', 'Mero ruchi'], answer: 'Kitaab padhnu' }
    ],
    followUp: 'Learn to say what your favorite hobby is in Nepali.'
  }
];
