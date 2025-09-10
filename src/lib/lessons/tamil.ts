
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const tamilDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-tamil-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-tamil-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-tamil-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-tamil-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-tamil-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-tamil-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-tamil-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-tamil-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-tamil-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-tamil-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-tamil-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-tamil-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-tamil-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-tamil-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const tamilLessons: MicroLesson[] = [
  { 
    id: 'lesson-tamil-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-tamil-1',
    vocabulary: [
      { word: 'வணக்கம்', romanization: 'Vanakkam', definition: 'Hello/Greetings (a respectful greeting for any time of day)', ipa: '/ʋaɳakkam/' },
      { word: 'நன்றி', romanization: 'Nandri', definition: 'Thank you', ipa: '/nanri/' },
      { word: 'நீங்கள் எப்படி இருக்கிறீர்கள்?', romanization: 'Neengal eppadi irukkireergal?', definition: 'How are you? (Formal)', ipa: '/niːŋɡəɭ ɛpːəɖi irukkiːɾiːrɡəɭ/' },
      { word: 'நான் நலமாக இருக்கிறேன்', romanization: 'Naan nalamaga irukkiren', definition: 'I am fine', ipa: '/naːn nalaməha irukkiɾeːn/' },
      { word: 'உங்கள் பெயர் என்ன?', romanization: 'Ungal peyar enna?', definition: 'What is your name?', ipa: '/uŋɡəɭ peːjər enːə/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'வணக்கம். (Vanakkam.)' },
      { speaker: 'Server', line: 'வணக்கம் ஐயா. நீங்கள் எப்படி இருக்கிறீர்கள்? (Vanakkam aiya. Neengal eppadi irukkireergal?)' },
      { speaker: 'Customer', line: 'நான் நலமாக இருக்கிறேன், நன்றி. நீங்கள்? (Naan nalamaga irukkiren, nandri. Neengal?)' },
      { speaker: 'Server', line: 'நானும் நலமாக இருக்கிறேன். (Naanum nalamaga irukkiren.)' }
    ],
    culturalTip: 'Saying "Vanakkam" with palms joined together is a traditional and deeply respectful greeting in Tamil culture, suitable for everyone.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Tamil?', options: ['Vanakkam', 'Nalam', 'Nandri', 'Enna'], answer: 'Nandri' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Neengal ____ irukkireergal?".', answer: 'eppadi' }
    ],
    followUp: 'Try greeting a friend with "Vanakkam" and ask them how they are.'
  },
  { 
    id: 'lesson-tamil-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-tamil-2',
    vocabulary: [
      { word: 'தண்ணீர்', romanization: 'Thanneer', definition: 'Water', ipa: '/t̪an̪ːiːɾ/' },
      { word: 'தேநீர்', romanization: 'Theneer', definition: 'Tea', ipa: '/t̪eːniːɾ/' },
      { word: 'வீடு', romanization: 'Veedu', definition: 'House', ipa: '/ʋiːɖɯ/' },
      { word: 'ஒன்று', romanization: 'Ondru', definition: 'One', ipa: '/onru/' },
      { word: 'இரண்டு', romanization: 'Irandu', definition: 'Two', ipa: '/iranɖu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'அண்ணா, ஒரு தேநீர் கொடுங்கள். (Anna, oru theneer kodungal.)' },
      { speaker: 'Server', line: 'சரிங்க. வேறு என்ன வேண்டும்? (Saringa. Vere enna vendum?)' },
      { speaker: 'Customer', line: 'ஒரு கிளாஸ் தண்ணீர் கொடுங்கள். (Oru glass thanneer kodungal.)' }
    ],
    culturalTip: 'Addressing an elder male as "Anna" (elder brother) or an elder female as "Akka" (elder sister) is a very common and respectful practice in Tamil Nadu.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Tamil word for "House" is ____.', answer: 'Veedu' },
      { type: 'multiple-choice', question: 'What does "Irandu" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting common objects around you from one to three (Ondru, Irandu, Moondru).'
  },
  { 
    id: 'lesson-tamil-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-tamil-3',
    vocabulary: [
      { word: 'எங்கே?', romanization: 'Enge?', definition: 'Where?', ipa: '/eŋɡeː/' },
      { word: 'எப்போது?', romanization: 'Eppodhu?', definition: 'When?', ipa: '/ɛpːoːd̪u/' },
      { word: 'ஏன்?', romanization: 'Yen?', definition: 'Why?', ipa: '/jeːn/' },
      { word: 'என்ன?', romanization: 'Enna?', definition: 'What?', ipa: '/ɛn̪ːə/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'கடை எங்கே இருக்கிறது? (Kadai enge irukkirathu?)' },
      { speaker: 'Server', line: 'அந்த தெரு முனையில் இருக்கிறது. (Antha theru munaiyil irukkirathu.)' },
      { speaker: 'Customer', line: 'நன்றி. எப்போது திறக்கும்? (Nandri. Eppodhu thirakkum?)' }
    ],
    culturalTip: 'Tamil is a classical language with a literary tradition that spans over two millennia. Its grammar is described in the ancient text, Tolkāppiyam.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Tamil?', options: ['Eppodhu?', 'Yen?', 'Enge?', 'Enna?'], answer: 'Enge?' }
    ],
    followUp: 'Try asking a friend "Neenga enge poreenga?" (Where are you going?).'
  },
  { 
    id: 'lesson-tamil-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-tamil-4',
    vocabulary: [
      { word: 'நான் போகிறேன்', romanization: 'Naan pogiren', definition: 'I go / I am going (Present)', ipa: '' },
      { word: 'நான் போனேன்', romanization: 'Naan ponen', definition: 'I went (Past)', ipa: '' },
      { word: 'நான் போவேன்', romanization: 'Naan poven', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'நான் நேற்று மதுரைக்கு போனேன். (Naan netru Madurai-kku ponen.)' },
      { speaker: 'Server', line: 'நல்லது! நீங்கள் நாளையும் போவீர்களா? (Nallathu! Neengal naalaiyum povirgala?)' },
      { speaker: 'Customer', line: 'ஆம், நான் போவேன். (Aam, naan poven.)' }
    ],
    culturalTip: 'Tamil verbs are highly inflected, meaning they change based on the person, number, gender, tense, and mood.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Naan poven', 'Naan pogiren', 'Naan ponen', 'Naan enna'], answer: 'Naan ponen' }
    ],
    followUp: 'Try to describe something you did yesterday, you are doing today, and you will do tomorrow in Tamil.'
  },
  { 
    id: 'lesson-tamil-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-tamil-5',
    vocabulary: [
      { word: 'இதன் விலை என்ன?', romanization: 'Ithan vilai enna?', definition: 'What is its price?', ipa: '' },
      { word: 'கொஞ்சம் குறைக்கவும்', romanization: 'Konjam kuraikkavum', definition: 'Reduce it a little (Bargaining)', ipa: '' },
      { word: 'சரி, கொடுங்கள்.', romanization: 'Sari, kodungal.', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'அண்ணா, இந்த மாம்பழம் விலை என்ன? (Anna, intha maambazham vilai enna?)' },
      { speaker: 'Server', line: 'ஒரு கிலோ நூறு ரூபாய். (Oru kilo nooru roobai.)' },
      { speaker: 'Customer', line: 'கொஞ்சம் குறைத்துக்கொள்ளுங்கள்! (Konjam kuraithukollungal!)' },
      { speaker: 'Server', line: 'சரி, தொண்ணூறு ரூபாய்க்கு எடுத்துக்கோங்க. (Sari, thonnooru roobai-kku eduthukkonga.)' }
    ],
    culturalTip: 'Bargaining is common in local "sandhai" (markets) across Tamil Nadu. It is often a friendly and expected part of the transaction.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Vilai enna?', 'Sari, kodungal', 'Konjam kuraikkavum', 'Nalamaga'], answer: 'Konjam kuraikkavum' }
    ],
    followUp: 'Visit a local market and practice asking for the prices of fruits and vegetables in Tamil.'
  },
  { 
    id: 'lesson-tamil-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-tamil-6',
    vocabulary: [
      { word: 'மற்றும்', romanization: 'Matrum', definition: 'And', ipa: '/matrum/' },
      { word: 'ஆனால்', romanization: 'Aanaal', definition: 'But', ipa: '/aːnaːl/' },
      { word: 'அதனால்', romanization: 'Adhanaal', definition: 'So / Therefore', ipa: '/aðənaːl/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'நான் கடைக்கு போனேன் மற்றும் காய்கறிகள் வாங்கினேன். (Naan kadaikku ponen matrum kaaygarigal vaanginen.)' },
      { speaker: 'Server', line: 'நானும் போக நினைத்தேன், ஆனால் நேரம் கிடைக்கவில்லை. (Naanum poga ninaithen, aanaal neram kidaikkavillai.)' },
      { speaker: 'Customer', line: 'அதனால் நீங்கள் போகவில்லை. (Adhanaal neengal pogavillai.)' }
    ],
    culturalTip: 'Tamil is a Dravidian language with a Subject-Object-Verb (SOV) sentence structure, which is different from English (SVO).',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Matrum', 'Adhanaal', 'Aanaal', 'Enna'], answer: 'Aanaal' }
    ],
    followUp: 'Try to connect two simple ideas you know using "matrum" (and).'
  },
  { 
    id: 'lesson-tamil-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-tamil-7',
    vocabulary: [
      { word: 'என் பொழுதுபோக்கு', romanization: 'En pozhudhupokku', definition: 'My hobby', ipa: '' },
      { word: 'புத்தகம் படிப்பது', romanization: 'Puthagam padipathu', definition: 'Reading books', ipa: '' },
      { word: 'இசை கேட்பது', romanization: 'Isai ketpathu', definition: 'Listening to music', ipa: '' },
      { word: 'திரைப்படம் பார்ப்பது', romanization: 'Thiraippadam paarppathu', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'உங்கள் பொழுதுபோக்கு என்ன? (Ungal pozhudhupokku enna?)' },
      { speaker: 'Server', line: 'என் பொழுதுபோக்கு புத்தகம் படிப்பதும் இசை கேட்பதும். உங்களுடையது? (En pozhudhupokku puthagam padipathum isai ketpathum. Ungaludaiyathu?)' },
      { speaker: 'Customer', line: 'எனக்கு திரைப்படம் பார்க்க பிடிக்கும். (Enakku thiraippadam paarkka pidikkum.)' }
    ],
    culturalTip: 'The Tamil film industry, known as "Kollywood", is one of the largest in India. Discussing movies and music is a very popular pastime.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Isai ketpathu', 'Thiraippadam paarppathu', 'Puthagam padipathu', 'En pozhudhupokku'], answer: 'Puthagam padipathu' }
    ],
    followUp: 'Learn to talk about your favorite movie or song in Tamil.'
  }
];
