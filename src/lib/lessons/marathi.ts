
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const marathiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-marathi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-marathi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-marathi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-marathi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-marathi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-marathi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-marathi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-marathi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-marathi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-marathi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-marathi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-marathi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-marathi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-marathi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const marathiLessons: MicroLesson[] = [
  { 
    id: 'lesson-marathi-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-marathi-1',
    vocabulary: [
      { word: 'नमस्कार', romanization: 'Namaskar', definition: 'Hello/Greetings', ipa: '/nəmaskaːɾ/' },
      { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱən̪jəʋaːd̪/' },
      { word: 'तुम्ही कसे आहात?', romanization: 'Tumhi kase ahat?', definition: 'How are you? (Formal)', ipa: '/t̪umi kəse aːɦat̪/' },
      { word: 'मी ठीक आहे', romanization: 'Mi theek aahe', definition: 'I am fine', ipa: '/mi ʈʰiːk aːɦe/' },
      { word: 'तुमचं नाव काय आहे?', romanization: 'Tumcha naav kaay aahe?', definition: 'What is your name?', ipa: '/t̪umtʃə naːʋ kaːj aːɦe/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'नमस्कार। तुम्ही कसे आहात? (Namaskar. Tumhi kase ahat?)' },
      { speaker: 'Server', line: 'मी ठीक आहे, धन्यवाद। तुम्ही? (Mi theek aahe, dhanyavaad. Tumhi?)' },
      { speaker: 'Customer', line: 'मी पण ठीक आहे। (Mi pan theek aahe.)' }
    ],
    culturalTip: 'In Maharashtra, "Namaskar" is a universally respectful greeting appropriate for any situation. It is often accompanied by joining one\'s palms.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Marathi?', options: ['Namaskar', 'Theek aahe', 'Dhanyavaad', 'Kaay'], answer: 'Dhanyavaad' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?" formally, you say "Tumhi ____ ahat?".', answer: 'kase' }
    ],
    followUp: 'Try greeting a Marathi-speaking friend with "Namaskar, tumhi kase ahat?".'
  },
  { 
    id: 'lesson-marathi-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-marathi-2',
    vocabulary: [
      { word: 'पाणी', romanization: 'Paani', definition: 'Water', ipa: '/paːɳi/' },
      { word: 'चहा', romanization: 'Chaha', definition: 'Tea', ipa: '/tʃəɦa/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'दोन', romanization: 'Don', definition: 'Two', ipa: '/d̪on/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दादा, एक कप चहा द्या. (Dada, ek cup chaha dya.)' },
      { speaker: 'Server', line: 'हो, नक्कीच. अजून काही? (Ho, nakkich. Ajun kahi?)' },
      { speaker: 'Customer', line: 'एक ग्लास पाणी पण द्या. (Ek glass paani pan dya.)' }
    ],
    culturalTip: 'Calling a male shopkeeper "Dada" (elder brother) or a female one "Tai" (elder sister) is a common and friendly way to address them.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Marathi word for "House" is ____.', answer: 'Ghar' },
      { type: 'multiple-choice', question: 'What does "Don" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting common objects around you from one to three (Ek, Don, Teen).'
  },
  { 
    id: 'lesson-marathi-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-marathi-3',
    vocabulary: [
      { word: 'कुठे?', romanization: 'Kuthe?', definition: 'Where?', ipa: '/kut̪ʰe/' },
      { word: 'कधी?', romanization: 'Kadhi?', definition: 'When?', ipa: '/kəd̪ʱi/' },
      { word: 'का?', romanization: 'Ka?', definition: 'Why?', ipa: '/kaː/' },
      { word: 'काय?', romanization: 'Kaay?', definition: 'What?', ipa: '/kaːj/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दुकान कुठे आहे? (Dukaan kuthe aahe?)' },
      { speaker: 'Server', line: 'ते रस्त्याच्या पलीकडे आहे. (Te rastyachya palikade aahe.)' },
      { speaker: 'Customer', line: 'धन्यवाद. ते कधी उघडते? (Dhanyavaad. Te kadhi ughadate?)' }
    ],
    culturalTip: 'The Marathi language has a rich literary history, with famous poets and writers like Kusumagraj and P. L. Deshpande.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Marathi?', options: ['Kadhi?', 'Ka?', 'Kuthe?', 'Kaay?'], answer: 'Kuthe?' }
    ],
    followUp: 'Try asking a friend "Aapan kuthe chalalat?" (Where are you going?).'
  },
  { 
    id: 'lesson-marathi-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-marathi-4',
    vocabulary: [
      { word: 'मी करतो', romanization: 'Mi karto', definition: 'I do (Male, Present)', ipa: '' },
      { word: 'मी केले', romanization: 'Mi kele', definition: 'I did (Past)', ipa: '' },
      { word: 'मी करीन', romanization: 'Mi karin', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मी काल माझे काम केले. (Mi kaal majhe kaam kele.)' },
      { speaker: 'Server', line: 'तुम्ही आजही काम करणार का? (Tumhi aajhi kaam karnar ka?)' },
      { speaker: 'Customer', line: 'हो, मी आज पण काम करतो. (Ho, mi aaj pan kaam karto.)' }
    ],
    culturalTip: 'In Marathi, verbs often change their form based on the gender of the subject. For example, a female would say "Mi karte" for "I do".',
    quizzes: [
      { type: 'multiple-choice', question: 'How would a male say "I will do"?', options: ['Mi karto', 'Mi karin', 'Mi kele', 'Mi kaay'], answer: 'Mi karin' }
    ],
    followUp: 'Try to form simple sentences about what you did yesterday and what you will do tomorrow.'
  },
  { 
    id: 'lesson-marathi-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-marathi-5',
    vocabulary: [
      { word: 'याची किंमत काय आहे?', romanization: 'Yachi kimmat kaay aahe?', definition: 'What is its price?', ipa: '' },
      { word: 'थोडे कमी करा', romanization: 'Thode kami kara', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ठीक आहे, द्या.', romanization: 'Theek aahe, dya.', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दादा, ह्या आंब्याची किंमत काय आहे? (Dada, hya ambyachi kimmat kaay aahe?)' },
      { speaker: 'Server', line: 'शंभर रुपये किलो. (Shambhar rupaye kilo.)' },
      { speaker: 'Customer', line: 'थोडे कमी करा ना! (Thode kami kara na!)' },
      { speaker: 'Server', line: 'ठीक आहे, नव्वद रुपये द्या. (Theek aahe, navvad rupaye dya.)' }
    ],
    culturalTip: 'Bargaining is common in the bustling markets of Pune and Mumbai. A polite but firm "Thode kami kara" often works!',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Yachi kimmat kaay aahe?', 'Theek aahe', 'Thode kami kara', 'Kase ahat'], answer: 'Thode kami kara' }
    ],
    followUp: 'Practice asking for the prices of different vegetables at a local market.'
  },
  { 
    id: 'lesson-marathi-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-marathi-6',
    vocabulary: [
      { word: 'आणि', romanization: 'Aani', definition: 'And', ipa: '/aːɳi/' },
      { word: 'पण', romanization: 'Pan', definition: 'But', ipa: '/pəɳ/' },
      { word: 'म्हणून', romanization: 'Mhanun', definition: 'So / Therefore', ipa: '/mʱəɳuːn/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'मी बाजारात गेलो आणि भाजीपाला घेतला. (Mi baajaaraat gelo aani bhajipala ghetla.)' },
      { speaker: 'Server', line: 'मला पण जायचं होतं, पण वेळ नाही मिळाला. (Mala pan jaycha hota, pan vel nahi milala.)' },
      { speaker: 'Customer', line: 'म्हणून तुम्ही गेला नाहीत. (Mhanun tumhi gela nahit.)' }
    ],
    culturalTip: 'Marathi sentence structure is generally Subject-Object-Verb (SOV), so the main verb is often the last word in a sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "so" or "therefore"?', options: ['Aani', 'Mhanun', 'Pan', 'Kaay'], answer: 'Mhanun' }
    ],
    followUp: 'Try connecting two simple Marathi sentences you know using "aani" (and).'
  },
  { 
    id: 'lesson-marathi-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-marathi-7',
    vocabulary: [
      { word: 'माझा छंद', romanization: 'Majha chhand', definition: 'My hobby', ipa: '' },
      { word: 'पुस्तके वाचणे', romanization: 'Pustake vachane', definition: 'Reading books', ipa: '' },
      { word: 'गाणी ऐकणे', romanization: 'Gaani aikane', definition: 'Listening to music', ipa: '' },
      { word: 'चित्रपट पाहणे', romanization: 'Chitrapat pahane', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'तुमचा छंद काय आहे? (Tumcha chhand kaay aahe?)' },
      { speaker: 'Server', line: 'माझा छंद पुस्तके वाचणे आणि गाणी ऐकणे आहे. तुमचा? (Majha chhand pustake vachane aani gaani aikane aahe. Tumcha?)' },
      { speaker: 'Customer', line: 'मला चित्रपट पाहणे आवडते. (Mala chitrapat pahane aavadate.)' }
    ],
    culturalTip: 'Maharashtra has a rich tradition of theatre (Natak) and folk arts like Lavani. Talking about performing arts is a great way to connect.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Listening to music"?', options: ['Pustake vachane', 'Chitrapat pahane', 'Gaani aikane', 'Majha chhand'], answer: 'Gaani aikane' }
    ],
    followUp: 'Learn to say your favorite hobby in Marathi.'
  }
];
