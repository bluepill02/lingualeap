
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const hindiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-hindi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-hindi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-hindi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-hindi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-hindi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-hindi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-hindi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-hindi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-hindi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-hindi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-hindi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-hindi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-hindi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-hindi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const hindiLessons: MicroLesson[] = [
  { 
    id: 'lesson-hindi-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-hindi-1',
    vocabulary: [
      { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello (Formal/Informal)', ipa: '/nəməˈsteː/' },
      { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱən.jə.ʋɑːd̪/' },
      { word: 'आप कैसे हैं?', romanization: 'Aap kaise hain?', definition: 'How are you? (Formal)', ipa: '/ɑːp ˈkɛː.seː ɦɛ̃ː/' },
      { word: 'मैं ठीक हूँ।', romanization: 'Main theek hoon.', definition: 'I am fine.', ipa: '/mɛ̃ː ʈʰiːk ɦũː/' },
      { word: 'आपका नाम क्या है?', romanization: 'Aapka naam kya hai?', definition: 'What is your name? (Formal)', ipa: '/ɑːp.kɑː nɑːm kjɑː ɦɛː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'नमस्ते। (Namaste.)' },
      { speaker: 'Server', line: 'नमस्ते। आप कैसे हैं? (Namaste. Aap kaise hain?)' },
      { speaker: 'Customer', line: 'मैं ठीक हूँ, धन्यवाद। और आप? (Main theek hoon, dhanyavaad. Aur aap?)' },
      { speaker: 'Server', line: 'मैं भी ठीक हूँ। (Main bhi theek hoon.)' }
    ],
    culturalTip: '"Namaste" is a universal greeting in India, accompanied by joining the palms together. It signifies respect for the other person.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you formally ask "How are you?" in Hindi?', options: ['Aapka naam kya hai?', 'Aap kaise hain?', 'Main theek hoon', 'Dhanyavaad'], answer: 'Aap kaise hain?' },
      { type: 'fill-in-the-blank', question: 'The Hindi word for "Thank you" is ____.', answer: 'Dhanyavaad' }
    ],
    followUp: 'Greet a friend or family member with "Namaste" today.'
  },
  { 
    id: 'lesson-hindi-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-hindi-2',
    vocabulary: [
      { word: 'पानी', romanization: 'Paani', definition: 'Water', ipa: '/pɑː.niː/' },
      { word: 'चाय', romanization: 'Chai', definition: 'Tea', ipa: '/tʃɑːj/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/eːk/' },
      { word: 'दो', romanization: 'Do', definition: 'Two', ipa: '/d̪oː/' },
      { word: 'तीन', romanization: 'Teen', definition: 'Three', ipa: '/t̪iːn/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'एक कप चाय, कृपया। (Ek cup chai, kripaya.)' },
      { speaker: 'Server', line: 'जी। और कुछ? (Jee. Aur kuch?)' },
      { speaker: 'Customer', line: 'दो गिलास पानी भी। (Do gilaas paani bhi.)' }
    ],
    culturalTip: '"Chai" is more than just tea in India; it\'s a social ritual. It\'s common to offer chai to guests as a sign of hospitality.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Hindi word for "House" is ____.', answer: 'Ghar' },
      { type: 'multiple-choice', question: 'What does "Teen" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Three' }
    ],
    followUp: 'Try counting to three in Hindi: Ek, Do, Teen.'
  },
  { 
    id: 'lesson-hindi-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-hindi-3',
    vocabulary: [
      { word: 'कहाँ?', romanization: 'Kahan?', definition: 'Where?', ipa: '/kə.ɦɑ̃ː/' },
      { word: 'कब?', romanization: 'Kab?', definition: 'When?', ipa: '/kəb/' },
      { word: 'क्यों?', romanization: 'Kyon?', definition: 'Why?', ipa: '/kjõː/' },
      { word: 'क्या?', romanization: 'Kya?', definition: 'What?', ipa: '/kjɑː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'बाथरूम कहाँ है? (Bathroom kahan hai?)' },
      { speaker: 'Server', line: 'वहाँ है, सीधे जाकर दाएँ। (Wahan hai, seedhe jaakar daayein.)' },
      { speaker: 'Customer', line: 'धन्यवाद। दुकान कब बंद होती है? (Dhanyavaad. Dukaan kab band hoti hai?)' }
    ],
    culturalTip: 'Asking questions politely is key. Adding "ji" after a question or statement can make it more respectful.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Hindi?', options: ['Kab?', 'Kyon?', 'Kahan?', 'Kya?'], answer: 'Kahan?' }
    ],
    followUp: 'Ask a friend "Tumhara ghar kahan hai?" (Where is your house?).'
  },
  { 
    id: 'lesson-hindi-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-hindi-4',
    vocabulary: [
      { word: 'मैं करता हूँ', romanization: 'Main karta hoon', definition: 'I do (Present)', ipa: '' },
      { word: 'मैंने किया', romanization: 'Maine kiya', definition: 'I did (Past)', ipa: '' },
      { word: 'मैं करूँगा', romanization: 'Main karunga', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मैंने कल अपना काम किया। (Maine kal apna kaam kiya.)' },
      { speaker: 'Server', line: 'क्या आप आज भी काम करेंगे? (Kya aap aaj bhi kaam karenge?)' },
      { speaker: 'Customer', line: 'हाँ, मैं आज भी काम करता हूँ। (Haan, main aaj bhi kaam karta hoon.)' }
    ],
    culturalTip: 'Hindi verbs change based on gender and number, as well as tense. This is a key difference from English.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I did"?', options: ['Main karta hoon', 'Main karunga', 'Maine kiya', 'Main kyon'], answer: 'Maine kiya' }
    ],
    followUp: 'Try to describe an activity you did yesterday, you are doing today, and you will do tomorrow.'
  },
  { 
    id: 'lesson-hindi-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-hindi-5',
    vocabulary: [
      { word: 'इसका दाम क्या है?', romanization: 'Iska daam kya hai?', definition: 'What is its price?', ipa: '' },
      { word: 'थोड़ा कम कीजिए।', romanization: 'Thoda kam kijiye.', definition: 'Please reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ठीक है, दे दीजिए।', romanization: 'Theek hai, de dijiye.', definition: 'Alright, please give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'भैया, इस साड़ी का दाम क्या है? (Bhaiya, is saari ka daam kya hai?)' },
      { speaker: 'Server', line: 'पाँच सौ रुपये। (Paanch sau rupaye.)' },
      { speaker: 'Customer', line: 'थोड़ा कम कीजिए। (Thoda kam kijiye.)' },
      { speaker: 'Server', line: 'ठीक है, चार सौ पचास दे दीजिए। (Theek hai, chaar sau pachaas de dijiye.)' }
    ],
    culturalTip: 'Bargaining is common in many local markets in India. It\'s often seen as a friendly interaction rather than a conflict.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Iska daam kya hai?', 'Theek hai', 'Thoda kam kijiye', 'Bhalo'], answer: 'Thoda kam kijiye' }
    ],
    followUp: 'Learn the numbers up to 100 in Hindi to help with shopping.'
  },
  { 
    id: 'lesson-hindi-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-hindi-6',
    vocabulary: [
      { word: 'और', romanization: 'Aur', definition: 'And', ipa: '/ɔːɾ/' },
      { word: 'लेकिन', romanization: 'Lekin', definition: 'But', ipa: '/leː.kɪn/' },
      { word: 'इसलिए', romanization: 'Isliye', definition: 'So / Therefore', ipa: '/ɪs.lɪ.jeː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मैं बाज़ार गया और सब्ज़ियाँ खरीदीं। (Main bazaar gaya aur sabziyan khareedin.)' },
      { speaker: 'Server', line: 'मैं भी जाना चाहता था, लेकिन समय नहीं मिला। (Main bhi jaana chahta tha, lekin samay nahin mila.)' },
      { speaker: 'Customer', line: 'इसलिए आप नहीं गए। (Isliye aap nahin gaye.)' }
    ],
    culturalTip: 'Hindi sentence structure typically follows Subject-Object-Verb (SOV), unlike English which is Subject-Verb-Object (SVO). For example, "I eat food" is "Main khana khata hoon" (I food eat).',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Aur', 'Isliye', 'Lekin', 'Kya'], answer: 'Lekin' }
    ],
    followUp: 'Try to connect two sentences using "aur" (and).'
  },
  { 
    id: 'lesson-hindi-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-hindi-7',
    vocabulary: [
      { word: 'मेरा शौक़', romanization: 'Mera shauq', definition: 'My hobby', ipa: '' },
      { word: 'किताबें पढ़ना', romanization: 'Kitabein padhna', definition: 'Reading books', ipa: '' },
      { word: 'संगीत सुनना', romanization: 'Sangeet sunna', definition: 'Listening to music', ipa: '' },
      { word: 'फ़िल्में देखना', romanization: 'Filmein dekhna', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'आपका शौक़ क्या है? (Aapka shauq kya hai?)' },
      { speaker: 'Server', line: 'मेरा शौक़ किताबें पढ़ना और संगीत सुनना है। आपका? (Mera shauq kitabein padhna aur sangeet sunna hai. Aapka?)' },
      { speaker: 'Customer', line: 'मुझे फ़िल्में देखना पसंद है। (Mujhe filmein dekhna pasand hai.)' }
    ],
    culturalTip: 'Bollywood films are a huge part of Indian culture. Talking about your favorite movies or actors is a great way to start a conversation.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Sangeet sunna', 'Filmein dekhna', 'Kitabein padhna', 'Mera shauq'], answer: 'Kitabein padhna' }
    ],
    followUp: 'Ask a friend what their hobby is in Hindi: "Tumhara shauq kya hai?"'
  }
];
