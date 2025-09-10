
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const kashmiriDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-kashmiri-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-kashmiri-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-kashmiri-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-kashmiri-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-kashmiri-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-kashmiri-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-kashmiri-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-kashmiri-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-kashmiri-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-kashmiri-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-kashmiri-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-kashmiri-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const kashmiriLessons: MicroLesson[] = [
  { 
    id: 'lesson-kashmiri-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-kashmiri-1',
    vocabulary: [
      { word: 'آداب', romanization: 'Aadaab', definition: 'Hello/Greetings (Formal)', ipa: '/aːdaːb/' },
      { word: 'شُکریہ', romanization: 'Shukriya', definition: 'Thank you', ipa: '/ʃukriyaː/' },
      { word: 'تُہہِ چھِوا ٹھیک؟', romanization: 'Tuh chiva theek?', definition: 'How are you?', ipa: '/t̪ʊh tʃʰiʋaː ʈʰiːk/' },
      { word: 'بہ چھُس ٹھیک', romanization: 'Bih chus theek', definition: 'I am fine', ipa: '/bɪh tʃʰus ʈʰiːk/' },
      { word: 'چون ناو کیا چھُ؟', romanization: 'Chyon naav kya chhu?', definition: 'What is your name?', ipa: '/tʃʲon naːʋ kʲaː tʃʰu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Aadaab! Tuh chiva theek?' },
      { speaker: 'Server', line: 'Aadaab. Bih chus theek, shukriya. Tuh chiva theek?' },
      { speaker: 'Customer', line: 'Bih ti chus theek.' }
    ],
    culturalTip: 'Kashmiri culture places great emphasis on hospitality, known as "Mehmaan Nawazi". Offering "Kahwa", a traditional green tea with spices and almonds, is a common gesture of welcome.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Kashmiri?', options: ['Aadaab', 'Theek', 'Shukriya', 'Kya'], answer: 'Shukriya' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Tuh ____ theek?".', answer: 'chiva' }
    ],
    followUp: 'Practice greeting a friend with "Aadaab" and asking them how they are.'
  },
  { 
    id: 'lesson-kashmiri-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-kashmiri-2',
    vocabulary: [
      { word: 'آب', romanization: 'Aab', definition: 'Water', ipa: '/aːb/' },
      { word: 'چائے', romanization: 'Chai', definition: 'Tea (often Kahwa)', ipa: '/tʃaːj/' },
      { word: 'گَر', romanization: 'Gar', definition: 'House', ipa: '/ɡar/' },
      { word: 'اکھ', romanization: 'Akh', definition: 'One', ipa: '/akh/' },
      { word: 'زٕ', romanization: 'Zih', definition: 'Two', ipa: '/zɨh/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Bay جان, اکھ کپ چائے دِیو۔ (Baya jaan, akh cup chai diyu.)' },
      { speaker: 'Server', line: 'ضرور. بییہ کینہہ؟ (Zaroor. Beyih kehn?)' },
      { speaker: 'Customer', line: 'اکھ گلاس آب تہِ دیو۔ (Akh glass aab tih diyu.)' }
    ],
    culturalTip: 'The "Wazwan" is a multi-course meal in Kashmiri cuisine, the preparation of which is considered an art and a point of pride in Kashmiri culture.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Kashmiri word for "Water" is ____.', answer: 'Aab' },
      { type: 'multiple-choice', question: 'What does "Zih" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Try counting various items around you up to three (Akh, Zih, Treh).'
  },
  { 
    id: 'lesson-kashmiri-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-kashmiri-3',
    vocabulary: [
      { word: 'کَتہِ؟', romanization: 'Katih?', definition: 'Where?', ipa: '/katɪh/' },
      { word: 'کَر؟', romanization: 'Kar?', definition: 'When?', ipa: '/kar/' },
      { word: 'کیٛازِ؟', romanization: 'Kyazi?', definition: 'Why?', ipa: '/kʲaːzɪ/' },
      { word: 'کیا؟', romanization: 'Kya?', definition: 'What?', ipa: '/kʲaː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'دوکان کتہِ چھُ؟ (Dukaan katih chhu?)' },
      { speaker: 'Server', line: ' ہُتھ طرفہٕ. (Huth taraf.)' },
      { speaker: 'Customer', line: 'شُکریہ. کر وُتھِو؟ (Shukriya. Kar vothiv?)' }
    ],
    culturalTip: 'Kashmiri is a Dardic language, which has a unique linguistic position between the Indo-Aryan and Iranian language families.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Kashmiri?', options: ['Kar?', 'Kyazi?', 'Katih?', 'Kya?'], answer: 'Katih?' }
    ],
    followUp: 'Ask a friend "Tuh chhu katih gachhan?" (Where are you going?).'
  },
  { 
    id: 'lesson-kashmiri-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-kashmiri-4',
    vocabulary: [
      { word: 'بُ چھُس گَژھان', romanization: 'Bih chus gachhan', definition: 'I go (Present)', ipa: '' },
      { word: 'بُ گوُس', romanization: 'Bih gos', definition: 'I went (Past)', ipa: '' },
      { word: 'بُ گَژھہٕ', romanization: 'Bih gatsh', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'بہ راتھ گوُس سری نگر۔ (Bih raath gos Srinagar.)' },
      { speaker: 'Server', line: 'واراہ. تُہہِ پگاہ تہِ گَژھِوا؟ (Warah. Tuh pagah tih gatshiva?)' },
      { speaker: 'Customer', line: 'آو, بہ گَژھہٕ۔ (Aav, bih gatsh.)' }
    ],
    culturalTip: 'Verb conjugations in Kashmiri are complex and change for gender, number, person, and tense.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Bih gatsh', 'Bih chus gachhan', 'Bih gos', 'Bih kya'], answer: 'Bih gos' }
    ],
    followUp: 'Try to describe something you did yesterday and something you will do tomorrow in Kashmiri.'
  },
  { 
    id: 'lesson-kashmiri-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-kashmiri-5',
    vocabulary: [
      { word: 'یِمُک کیا قیمَت چھُ؟', romanization: 'Yimuk kya qeemat chhu?', definition: 'What is its price?', ipa: '' },
      { word: 'کینہہ کَم کٔرِیو؟', romanization: 'Kehnsa kam karyiv?', definition: 'Will you reduce it a little?', ipa: '' },
      { word: 'ٹھیک چھُ، دِیو۔', romanization: 'Theek chhu, diyu.', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'जनाब, یِمَن ژوٗنٹؠن ہُنٛد کیا قیمَت چھُ؟ (Janaab, yiman tsuntan hund kya qeemat chhu?)' },
      { speaker: 'Server', line: 'یِم چھِ اکھ کلو شَتھ رۄپے. (Yim chhi akh kilo shath ropay.)' },
      { speaker: 'Customer', line: 'کینہہ کَم کٔرِیو؟ (Kehnsa kam karyiv?)' },
      { speaker: 'Server', line: 'ٹھیک چھُ، پنٛژاہ دِیو۔ (Theek chhu, pantsah diyu.)' }
    ],
    culturalTip: 'Floating markets, especially on Dal Lake in Srinagar, are a unique feature of Kashmiri life and a hub of local commerce.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Yimuk kya qeemat chhu?', 'Theek chhu', 'Kehnsa kam karyiv?', 'Warah'], answer: 'Kehnsa kam karyiv?' }
    ],
    followUp: 'Practice a short bargaining conversation in Kashmiri.'
  },
  { 
    id: 'lesson-kashmiri-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-kashmiri-6',
    vocabulary: [
      { word: 'تہٕ', romanization: 'Tih', definition: 'And', ipa: '/tɨh/' },
      { word: 'مگر', romanization: 'Magar', definition: 'But', ipa: '/magar/' },
      { word: 'تَتھۍ پٲٹھۍ', romanization: 'Tath paeth', definition: 'So / Therefore', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'بہ گوُس بازرس تہٕ ژوٗنٹ انِم۔ (Bih gos baazaras tih tsunt anim.)' },
      { speaker: 'Server', line: 'مہٕ تہٕ اوس گَژھُن، مگر وَقتہٕ میلوو نہٕ۔ (Meh tih os gatsun, magar waqt miliyov na.)' },
      { speaker: 'Customer', line: 'تَتھۍ پٲٹھۍ গলি তোমাৰ নোযোৱা। (Tath paeth tuh chukh na gatshmut.)' }
    ],
    culturalTip: 'Kashmiri follows a Verb-Second (V2) word order, which is unique among Indo-Aryan languages. The finite verb typically appears in the second position in the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Tih', 'Tath paeth', 'Magar', 'Kya'], answer: 'Magar' }
    ],
    followUp: 'Try connecting two simple ideas using "tih" (and).'
  },
  { 
    id: 'lesson-kashmiri-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-kashmiri-7',
    vocabulary: [
      { word: 'میون شَوق', romanization: 'Myon shauq', definition: 'My hobby', ipa: '' },
      { word: 'کِتاب پرُن', romanization: 'Kitaab parun', definition: 'Reading books', ipa: '' },
      { word: 'موسیقی بوزُن', romanization: 'Mausiqi bozun', definition: 'Listening to music', ipa: '' },
      { word: 'گِندُن', romanization: 'Gindun', definition: 'Playing', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'چون شَوق کیا چھُ؟ (Chyon shauq kya chhu?)' },
      { speaker: 'Server', line: 'میون شَوق چھُ کِتاب پرُن تہٕ موسیقی بوزُن۔ چون؟ (Myon shauq chhu kitaab parun tih mausiqi bozun. Chyon?)' },
      { speaker: 'Customer', line: 'بہٕ چھُس کرِکٹ گِندان۔ (Bih chus cricket gindaan.)' }
    ],
    culturalTip: 'Kashmiri has a rich poetic tradition, with famous poets like Lal Ded and Habba Khatoon. Discussing poetry and music is a cherished pastime.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Mausiqi bozun', 'Gindun', 'Kitaab parun', 'Myon shauq'], answer: 'Kitaab parun' }
    ],
    followUp: 'Learn how to describe your favorite hobby in Kashmiri.'
  }
];
