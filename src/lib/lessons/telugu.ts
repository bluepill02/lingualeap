
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const teluguDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-telugu-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-telugu-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-telugu-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-telugu-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-telugu-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-telugu-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-telugu-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-telugu-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-telugu-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-telugu-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-telugu-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-telugu-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-telugu-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-telugu-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const teluguLessons: MicroLesson[] = [
  { 
    id: 'lesson-telugu-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-telugu-1',
    vocabulary: [
      { word: 'నమస్కారం', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '/nəməskaːɾam/' },
      { word: 'ధన్యవాదాలు', romanization: 'Dhanyavaadalu', definition: 'Thank you', ipa: '/d̪ʱən̪jəʋaːd̪aːlu/' },
      { word: 'మీరు ఎలా ఉన్నారు?', romanization: 'Meeru ela unnaru?', definition: 'How are you? (Formal)', ipa: '/miːɾu eːlaː un̪naːɾu/' },
      { word: 'నేను బాగున్నాను', romanization: 'Nenu bagunnanu', definition: 'I am fine', ipa: '/neːnu baːɡun̪naːnu/' },
      { word: 'మీ పేరు ఏమిటి?', romanization: 'Mee peru emiti?', definition: 'What is your name?', ipa: '/miː peːɾu eːmiʈi/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'నమస్కారం అండి. మీరు ఎలా ఉన్నారు? (Namaskaram andi. Meeru ela unnaru?)' },
      { speaker: 'Server', line: 'నమస్కారం. నేను బాగున్నాను, ధన్యవాదాలు. మీరు? (Namaskaram. Nenu bagunnanu, dhanyavaadalu. Meeru?)' },
      { speaker: 'Customer', line: 'నేను కూడా బాగున్నాను. (Nenu kuda bagunnanu.)' }
    ],
    culturalTip: 'Adding "andi" or "garu" after a name or pronoun is a common way to show respect in Telugu.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Telugu?', options: ['Namaskaram', 'Bagunnanu', 'Dhanyavaadalu', 'Emiti'], answer: 'Dhanyavaadalu' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?" formally, you say "Meeru ____ unnaru?".', answer: 'ela' }
    ],
    followUp: 'Try greeting someone with "Namaskaram andi".'
  },
  { 
    id: 'lesson-telugu-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-telugu-2',
    vocabulary: [
      { word: 'నీళ్ళు', romanization: 'Neellu', definition: 'Water', ipa: '/niːɭːu/' },
      { word: 'టీ', romanization: 'Tea', definition: 'Tea', ipa: '/tiː/' },
      { word: 'ఇల్లు', romanization: 'Illu', definition: 'House', ipa: '/ilːu/' },
      { word: 'ఒకటి', romanization: 'Okati', definition: 'One', ipa: '/okəʈi/' },
      { word: 'రెండు', romanization: 'Rendu', definition: 'Two', ipa: '/ɾeɳɖu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'అన్నా, ఒక టీ ఇవ్వండి. (Anna, oka tea ivvandi.)' },
      { speaker: 'Server', line: 'సరే అండి. ఇంకా ఏమైనా కావాలా? (Sare andi. Inka emaina kavala?)' },
      { speaker: 'Customer', line: 'ఒక గ్లాసు నీళ్ళు కూడా. (Oka glassu neellu kuda.)' }
    ],
    culturalTip: 'Telugu is often called the "Italian of the East" because its words end in vowels, giving it a musical quality.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Telugu word for "Water" is ____.', answer: 'Neellu' },
      { type: 'multiple-choice', question: 'What does "Okati" mean?', options: ['Two', 'Three', 'Water', 'One'], answer: 'One' }
    ],
    followUp: 'Practice counting to three in Telugu: Okati, Rendu, Moodu.'
  },
  { 
    id: 'lesson-telugu-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-telugu-3',
    vocabulary: [
      { word: 'ఎక్కడ?', romanization: 'Ekkada?', definition: 'Where?', ipa: '/ekːəɖə/' },
      { word: 'ఎప్పుడు?', romanization: 'Eppudu?', definition: 'When?', ipa: '/epːuɖu/' },
      { word: 'ఎందుకు?', romanization: 'Enduku?', definition: 'Why?', ipa: '/en̪d̪uku/' },
      { word: 'ఏమిటి?', romanization: 'Emiti?', definition: 'What?', ipa: '/eːmiʈi/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'అంగడి ఎక్కడ ఉంది? (Angadi ekkada undi?)' },
      { speaker: 'Server', line: 'ఆ వీధి చివరలో ఉంది. (Aa veedhi chivaralo undi.)' },
      { speaker: 'Customer', line: 'ధన్యవాదాలు. ఎప్పుడు తెరుస్తారు? (Dhanyavaadalu. Eppudu therustaru?)' }
    ],
    culturalTip: 'Telugu is a Dravidian language, spoken primarily in the states of Andhra Pradesh and Telangana.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Telugu?', options: ['Eppudu?', 'Enduku?', 'Ekkada?', 'Emiti?'], answer: 'Ekkada?' }
    ],
    followUp: 'Try asking a friend "Meeru ekkadiki velthunnaru?" (Where are you going?).'
  },
  { 
    id: 'lesson-telugu-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-telugu-4',
    vocabulary: [
      { word: 'నేను వెళ్తాను', romanization: 'Nenu velthanu', definition: 'I will go (Future)', ipa: '' },
      { word: 'నేను వెళ్ళాను', romanization: 'Nenu vellanu', definition: 'I went (Past)', ipa: '' },
      { word: 'నేను వెళ్తున్నాను', romanization: 'Nenu velthunnanu', definition: 'I am going (Present Continuous)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'నేను నిన్న హైదరాబాద్ వెళ్ళాను. (Nenu ninna Hyderabad vellanu.)' },
      { speaker: 'Server', line: 'బాగుంది! మీరు రేపు కూడా వెళ్తారా? (Bagundi! Meeru repu kuda velthara?)' },
      { speaker: 'Customer', line: 'అవును, నేను వెళ్తాను. (Avunu, nenu velthanu.)' }
    ],
    culturalTip: 'Telugu verbs are highly inflected and change based on person, tense, and aspect, making them very descriptive.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Nenu velthanu', 'Nenu velthunnanu', 'Nenu vellanu', 'Nenu emiti'], answer: 'Nenu vellanu' }
    ],
    followUp: 'Try to describe an activity you did yesterday and one you will do tomorrow.'
  },
  { 
    id: 'lesson-telugu-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-telugu-5',
    vocabulary: [
      { word: 'దీని ధర ఎంత?', romanization: 'Deeni dhara entha?', definition: 'What is its price?', ipa: '' },
      { word: 'కొంచెం తగ్గించండి', romanization: 'Konchem thaggimchandi', definition: 'Please reduce it a little (Bargaining)', ipa: '' },
      { word: 'సరే, ఇవ్వండి', romanization: 'Sare, ivvandi', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'అన్నా, ఈ మామిడి పండ్ల ధర ఎంత? (Anna, ee mamidi pandla dhara entha?)' },
      { speaker: 'Server', line: 'కిలో వంద రూపాయలు. (Kilo vanda rupaayalu.)' },
      { speaker: 'Customer', line: 'కొంచెం తగ్గించండి. (Konchem thaggimchandi.)' },
      { speaker: 'Server', line: 'సరే, తొంభైకి తీసుకోండి. (Sare, thombhaiki theesukondi.)' }
    ],
    culturalTip: 'Bargaining is common in "rythu bazaars" (farmers\' markets) in Andhra Pradesh and Telangana.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Dhara entha?', 'Sare, ivvandi', 'Konchem thaggimchandi', 'Bagundi'], answer: 'Konchem thaggimchandi' }
    ],
    followUp: 'Practice asking for the prices of different vegetables at a local market.'
  },
  { 
    id: 'lesson-telugu-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-telugu-6',
    vocabulary: [
      { word: 'మరియు', romanization: 'Mariyu', definition: 'And', ipa: '/mʌɾiju/' },
      { word: 'కానీ', romanization: 'Kaani', definition: 'But', ipa: '/kaːni/' },
      { word: 'అందుకే', romanization: 'Anduke', definition: 'So / Therefore', ipa: '/an̪d̪uke/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'నేను మార్కెట్ కి వెళ్ళాను మరియు కూరగాయలు కొన్నాను. (Nenu market ki vellanu mariyu kuragayalu konnanu.)' },
      { speaker: 'Server', line: 'నేను కూడా వెళ్లాలనుకున్నాను, కానీ సమయం దొరకలేదు. (Nenu kuda vellalanukunnanu, kaani samayam dorakaledu.)' },
      { speaker: 'Customer', line: 'అందుకే మీరు వెళ్ళలేదు. (Anduke meeru vellaledu.)' }
    ],
    culturalTip: 'Telugu follows a Subject-Object-Verb (SOV) word order, which is a characteristic feature of Dravidian languages.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Mariyu', 'Anduke', 'Kaani', 'Emiti'], answer: 'Kaani' }
    ],
    followUp: 'Try to connect two simple ideas using "mariyu" (and).'
  },
  { 
    id: 'lesson-telugu-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-telugu-7',
    vocabulary: [
      { word: 'నా అభిరుచి', romanization: 'Naa abhiruchi', definition: 'My hobby', ipa: '' },
      { word: 'పుస్తకాలు చదవడం', romanization: 'Pustakalu chadavadam', definition: 'Reading books', ipa: '' },
      { word: 'సంగీతం వినడం', romanization: 'Sangeetham vinadam', definition: 'Listening to music', ipa: '' },
      { word: 'సినిమాలు చూడటం', romanization: 'Cinemalu choodatam', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'మీ అభిరుచి ఏమిటి? (Mee abhiruchi emiti?)' },
      { speaker: 'Server', line: 'నా అభిరుచి పుస్తకాలు చదవడం మరియు సంగీతం వినడం. మీది? (Naa abhiruchi pustakalu chadavadam mariyu sangeetham vinadam. Meedi?)' },
      { speaker: 'Customer', line: 'నాకు సినిమాలు చూడటం ఇష్టం. (Naaku cinemalu choodatam ishtam.)' }
    ],
    culturalTip: 'The Telugu film industry, known as "Tollywood", is one of the largest in India and has a massive fan following. Talking about movies is a great icebreaker.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Listening to music"?', options: ['Pustakalu chadavadam', 'Cinemalu choodatam', 'Sangeetham vinadam', 'Naa abhiruchi'], answer: 'Sangeetham vinadam' }
    ],
    followUp: 'Learn to talk about your favorite hobby or movie in Telugu.'
  }
];
