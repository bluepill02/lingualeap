
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const sindhiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-sindhi-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-sindhi-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-sindhi-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-sindhi-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-sindhi-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-sindhi-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-sindhi-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-sindhi-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-sindhi-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-sindhi-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-sindhi-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-sindhi-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-sindhi-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-sindhi-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const sindhiLessons: MicroLesson[] = [
  { 
    id: 'lesson-sindhi-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-sindhi-1',
    vocabulary: [
      { word: 'السلام عليكم', romanization: 'Assalam-o-Alaikum', definition: 'Hello (Peace be upon you)', ipa: '' },
      { word: 'مهرباني', romanization: 'Meharbani', definition: 'Thank you', ipa: '' },
      { word: 'توهان ڪيئن آهيو؟', romanization: 'Tavhaan keen aahyo?', definition: 'How are you?', ipa: '' },
      { word: 'مان ٺيڪ آهيان', romanization: 'Maan theek aahiyan', definition: 'I am fine', ipa: '' },
      { word: 'توهان جو نالو ڇا آهي؟', romanization: 'Tavhaanjo naalo chha aahe?', definition: 'What is your name?', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Assalam-o-Alaikum! Tavhaan keen aahyo?' },
      { speaker: 'Server', line: 'Wa-Alaikum-Salaam! Maan theek aahiyan, meharbani. Tavhaan keen aahyo?' },
      { speaker: 'Customer', line: 'Maan bhi theek aahiyan.' }
    ],
    culturalTip: 'Sindhi culture has rich literary traditions, with the poet Shah Abdul Latif Bhittai being a central figure. His poetry is a cornerstone of Sindhi identity.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Sindhi?', options: ['Salaam', 'Theek aahiyan', 'Meharbani', 'Chha'], answer: 'Meharbani' },
      { type: 'fill-in-the-blank', question: 'To ask someone\'s name, you say "Tavhaanjo ____ chha aahe?".', answer: 'naalo' }
    ],
    followUp: 'Try greeting someone with "Assalam-o-Alaikum".'
  },
  { 
    id: 'lesson-sindhi-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-sindhi-2',
    vocabulary: [
      { word: 'پاڻي', romanization: 'Paani', definition: 'Water', ipa: '' },
      { word: 'چانهه', romanization: 'Chaanh', definition: 'Tea', ipa: '' },
      { word: 'گهر', romanization: 'Ghar', definition: 'House', ipa: '' },
      { word: 'هڪ', romanization: 'Hiku', definition: 'One', ipa: '' },
      { word: 'ٻه', romanization: 'Ba', definition: 'Two', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: ' ادا، هڪ ڪپ چانهه ڏيو. (Ada, hiku cup chaanh diyo.)' },
      { speaker: 'Server', line: 'ها سائين. ٻيو ڪجهه؟ (Ha saeen. Biyo kujh?)' },
      { speaker: 'Customer', line: 'هڪ گلاس پاڻي به ڏيو. (Hiku glass paani bhi diyo.)' }
    ],
    culturalTip: 'Sindhi cuisine is known for dishes like "Sindhi Kadhi" and "Sai Bhaji". Offering water to a guest is a fundamental gesture of hospitality.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Sindhi word for "Water" is ____.', answer: 'Paani' },
      { type: 'multiple-choice', question: 'What does "Hiku" mean?', options: ['Two', 'Three', 'Tea', 'One'], answer: 'One' }
    ],
    followUp: 'Practice counting from one to three in Sindhi: Hiku, Ba, Tay.'
  },
  { 
    id: 'lesson-sindhi-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-sindhi-3',
    vocabulary: [
      { word: 'ڪٿي؟', romanization: 'Kithay?', definition: 'Where?', ipa: '' },
      { word: 'ڪڏهن؟', romanization: 'Kadhain?', definition: 'When?', ipa: '' },
      { word: 'ڇو؟', romanization: 'Chho?', definition: 'Why?', ipa: '' },
      { word: 'ڇا؟', romanization: 'Chha?', definition: 'What?', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'دڪان ڪٿي آهي؟ (Dukaan kithay aahe?)' },
      { speaker: 'Server', line: 'اُن روڊ جي ڪُنڊَ تي. (Un road ji kund te.)' },
      { speaker: 'Customer', line: 'مهرباني. ڪڏهن ٿو کلي؟ (Meharbani. Kadhain tho khulay?)' }
    ],
    culturalTip: 'Sindhi is written in a modified Perso-Arabic script. Understanding the script is key to reading and writing the language accurately.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Sindhi?', options: ['Kadhain?', 'Chho?', 'Kithay?', 'Chha?'], answer: 'Kithay?' }
    ],
    followUp: 'Try asking a friend "Tavhaan kithay tha vanyo?" (Where are you going?).'
  },
  { 
    id: 'lesson-sindhi-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-sindhi-4',
    vocabulary: [
      { word: 'آئون وڃان ٿو', romanization: 'Aau vanyan tho (male)', definition: 'I go (Present)', ipa: '' },
      { word: 'آئون ويس', romanization: 'Aau vyus (male)', definition: 'I went (Past)', ipa: '' },
      { word: 'آئون ويندس', romanization: 'Aau veendus (male)', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'مان ڪالهه ڪراچي ويس. (Maan kalh Karachi vyus.)' },
      { speaker: 'Server', line: 'تمام سٺو. توهان سڀاڻي به ويندا؟ (Tamam sutho. Tavhaan subhaanay bhi veenda?)' },
      { speaker: 'Customer', line: 'ها، آئون ويندس. (Ha, aau veendus.)' }
    ],
    culturalTip: 'Sindhi verbs conjugate based on gender, number, and tense. For example, a female would say "Aau vanyan thi" for "I go".',
    quizzes: [
      { type: 'multiple-choice', question: 'How would a male say "I went"?', options: ['Aau veendus', 'Aau vanyan tho', 'Aau vyus', 'Aau chha'], answer: 'Aau vyus' }
    ],
    followUp: 'Practice forming sentences about your past, present, and future actions.'
  },
  { 
    id: 'lesson-sindhi-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-sindhi-5',
    vocabulary: [
      { word: 'هن جو مُلهه ڇا آهي؟', romanization: 'Hin jo mulhu chha aahe?', definition: 'What is its price?', ipa: '' },
      { word: 'ٿورو گهٽ ڪريو', romanization: 'Thoro ghat karyo', definition: 'Reduce it a little (Bargaining)', ipa: '' },
      { word: 'ٺيڪ آهي، ڏيو', romanization: 'Theek aahe, diyo', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ادا، هن انب جو مُلهه ڇا آهي؟ (Ada, hin amb jo mulhu chha aahe?)' },
      { speaker: 'Server', line: 'سئو رپيا ڪلو. (Sao rupiya kilo.)' },
      { speaker: 'Customer', line: 'ٿورو گهٽ ڪريو! (Thoro ghat karyo!)' },
      { speaker: 'Server', line: 'ٺيڪ آهي، اسي رپيا ڏيو. (Theek aahe, assi rupiya diyo.)' }
    ],
    culturalTip: 'Bargaining is a common practice in local markets. A friendly approach usually yields a better price.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase is used to start bargaining?', options: ['Hin jo mulhu chha aahe?', 'Theek aahe', 'Thoro ghat karyo', 'Meharbani'], answer: 'Thoro ghat karyo' }
    ],
    followUp: 'Learn the numbers in Sindhi to help with your bargaining skills.'
  },
  { 
    id: 'lesson-sindhi-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-sindhi-6',
    vocabulary: [
      { word: '۽', romanization: 'Ain', definition: 'And', ipa: '' },
      { word: 'پر', romanization: 'Par', definition: 'But', ipa: '' },
      { word: 'ان ڪري', romanization: 'In kare', definition: 'So / Therefore', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'مان بازار ويس ۽ ڀاڄيون ورتم. (Maan bazaar vyus ain bhajiyoon vartam.)' },
      { speaker: 'Server', line: 'مون کي به وڃڻو هو، پر وقت نه مليو. (Moon khe bhi vanyno ho, par waqt na milyo.)' },
      { speaker: 'Customer', line: 'ان ڪري توهان نه ويا. (In kare tavhaan na vaya.)' }
    ],
    culturalTip: 'Sindhi is an Indo-Aryan language with a Subject-Object-Verb (SOV) sentence structure, similar to many other languages of the subcontinent.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ain', 'In kare', 'Par', 'Chha'], answer: 'Par' }
    ],
    followUp: 'Try connecting two simple ideas using "ain" (and) in a sentence.'
  },
  { 
    id: 'lesson-sindhi-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-sindhi-7',
    vocabulary: [
      { word: 'منهنجو شوق', romanization: 'Muhinjo shauq', definition: 'My hobby', ipa: '' },
      { word: 'کتاب پڙهڻ', romanization: 'Kitaab padhanu', definition: 'Reading books', ipa: '' },
      { word: 'موسيقي ٻڌڻ', romanization: 'Mausiqi budhanu', definition: 'Listening to music', ipa: '' },
      { word: 'راند کيڏڻ', romanization: 'Raand khedanu', definition: 'Playing games/sports', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'توهان جو شوق ڇا آهي؟ (Tavhaanjo shauq chha aahe?)' },
      { speaker: 'Server', line: 'منهنجو شوق کتاب پڙهڻ ۽ موسيقي ٻڌڻ آهي. توهان جو؟ (Muhinjo shauq kitaab padhanu ain mausiiqi budhanu aahe. Tavhaanjo?)' },
      { speaker: 'Customer', line: 'مون کي راند کيڏڻ پسند آهي. (Moon khe raand khedanu pasand aahe.)' }
    ],
    culturalTip: 'Sindhi folk music, known as "Sindhi folk," and Sufi music are integral parts of the culture. Discussing music is a wonderful way to connect with Sindhi speakers.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Mausiqi budhanu', 'Raand khedanu', 'Kitaab padhanu', 'Muhinjo shauq'], answer: 'Kitaab padhanu' }
    ],
    followUp: 'Learn to talk about your favorite hobby or music in Sindhi.'
  }
];
