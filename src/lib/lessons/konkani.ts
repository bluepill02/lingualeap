
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const konkaniDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-konkani-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-konkani-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-konkani-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-konkani-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-konkani-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-konkani-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-konkani-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-konkani-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-konkani-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-konkani-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-konkani-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-konkani-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-konkani-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-konkani-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const konkaniLessons: MicroLesson[] = [
  { 
    id: 'lesson-konkani-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-konkani-1',
    vocabulary: [
      { word: 'देव बरे करुं', romanization: 'Dev bare karun', definition: 'Hello/Greetings (May God do good)', ipa: '/d̪eːw bɔɾeː kɔɾũː/' },
      { word: 'देव बरे करो', romanization: 'Dev bare karo', definition: 'Thank you', ipa: '/d̪eːw bɔɾeː kɔɾoː/' },
      { word: 'तुवें कसो आसा?', romanization: 'Tuvem koso asa?', definition: 'How are you? (to a male)', ipa: '/t̪uʋẽ kɔso asaː/' },
      { word: 'हांव बरो आसा', romanization: 'Hanv boro asa', definition: 'I am fine (male speaking)', ipa: '/haːw̃ bɔɾo asaː/' },
      { word: 'तुजें नांव कितें?', romanization: 'Tujem naav kite?', definition: 'What is your name?', ipa: '/t̪udʒẽ naːw̃ kit̪ẽ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Dev bare karun. Tuvem koso asa?' },
      { speaker: 'Server', line: 'Hanv boro asa, dev bare karo. Tuvem koso asa?' },
      { speaker: 'Customer', line: 'Ah, hanv boro asa.' }
    ],
    culturalTip: 'In Goa, Konkani blends with Portuguese influences. A common informal greeting is simply "Koso asa?" (How are you?). Using "Dev bare karun" is a warm, traditional greeting.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Konkani?', options: ['Dev bare karun', 'Koso asa', 'Dev bare karo', 'Kite'], answer: 'Dev bare karo' },
      { type: 'fill-in-the-blank', question: 'To ask "What is your name?", you say "Tujem naav ____?".', answer: 'kite' }
    ],
    followUp: 'Practice greeting a friend with "Dev bare karun".'
  },
  { 
    id: 'lesson-konkani-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-konkani-2',
    vocabulary: [
      { word: 'उदक', romanization: 'Udak', definition: 'Water', ipa: '/ud̪ɔk/' },
      { word: 'चाह', romanization: 'Cha', definition: 'Tea', ipa: '/tʃaː/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱɔɾ/' },
      { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'दोन', romanization: 'Don', definition: 'Two', ipa: '/d̪on/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Ek cup cha di.' },
      { speaker: 'Server', line: 'Zai. Ani kite zai?' },
      { speaker: 'Customer', line: 'Ek glass udak di.' }
    ],
    culturalTip: 'Konkani cuisine is famous for its seafood. "Nustem" (fish) curry with rice ("sheet") is a staple food.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Konkani word for "Water" is ____.', answer: 'Udak' },
      { type: 'multiple-choice', question: 'What does "Don" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Try counting to three in Konkani: Ek, Don, Teen.'
  },
  { 
    id: 'lesson-konkani-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-konkani-3',
    vocabulary: [
      { word: 'खंय?', romanization: 'Khany?', definition: 'Where?', ipa: '/kʰɔ̃j/' },
      { word: 'केन्ना?', romanization: 'Kenna?', definition: 'When?', ipa: '/kenːaː/' },
      { word: 'किद्याक?', romanization: 'Kidyak?', definition: 'Why?', ipa: '/kid̪jak/' },
      { word: 'कितें?', romanization: 'Kite?', definition: 'What?', ipa: '/kit̪ẽ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Igorz khany asa? (Where is the church?)' },
      { speaker: 'Server', line: 'Fudem asa. (It is ahead.)' },
      { speaker: 'Customer', line: 'Dev bare karo. Kenna ugti zata? (Thank you. When does it open?)' }
    ],
    culturalTip: 'The churches of Old Goa are a UNESCO World Heritage site and a major landmark, so knowing how to ask "khany?" (where?) is very useful.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "What?" in Konkani?', options: ['Khany?', 'Kidyak?', 'Kenna?', 'Kite?'], answer: 'Kite?' }
    ],
    followUp: 'Ask a friend "Tumi khany vetat?" (Where are you going?).'
  },
  { 
    id: 'lesson-konkani-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-konkani-4',
    vocabulary: [
      { word: 'हांव करतां', romanization: 'Hanv kartam', definition: 'I do (Present)', ipa: '' },
      { word: 'हांवें केलें', romanization: 'Hanvem kelem', definition: 'I did (Past)', ipa: '' },
      { word: 'हांव करतलों', romanization: 'Hanv kartolom', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Hanvem kal mhojem kam kelem. (I did my work yesterday.)' },
      { speaker: 'Server', line: 'Tum aazui kam kartoloi? (Will you work today as well?)' },
      { speaker: 'Customer', line: 'Hoi, hanv kartam. (Yes, I do.)' }
    ],
    culturalTip: 'Konkani grammar can vary slightly between different regions and communities (e.g., Goan Hindu vs. Goan Christian vs. Mangalorean).',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I did"?', options: ['Hanv kartam', 'Hanv kartolom', 'Hanvem kelem', 'Hanv kite'], answer: 'Hanvem kelem' }
    ],
    followUp: 'Try to describe an activity in the past, present, and future.'
  },
  { 
    id: 'lesson-konkani-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-konkani-5',
    vocabulary: [
      { word: 'हाचो मोले कसो?', romanization: 'Hacho mol koso?', definition: 'What is its price?', ipa: '' },
      { word: 'उणें कर', romanization: 'Une kar', definition: 'Reduce it. (Bargaining)', ipa: '' },
      { word: 'बरें, दी.', romanization: 'Baren, di.', definition: 'Alright, give it.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Bhaji, hacho mol koso? (Vegetables, what is the price of this?)' },
      { speaker: 'Server', line: 'Pannas rupia. (Fifty rupees.)' },
      { speaker: 'Customer', line: 'Une kar, mama. (Reduce it, uncle.)' },
      { speaker: 'Server', line: 'Baren, challis di. (Alright, give forty.)' }
    ],
    culturalTip: 'The Mapusa Friday Market in Goa is a famous weekly market where you can experience traditional Goan culture and practice your bargaining skills.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to bargain?', options: ['Hacho mol koso?', 'Baren, di', 'Une kar', 'Dev bare karo'], answer: 'Une kar' }
    ],
    followUp: 'Practice asking for the price and bargaining for a small item.'
  },
  { 
    id: 'lesson-konkani-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-konkani-6',
    vocabulary: [
      { word: 'आनी', romanization: 'Aani', definition: 'And', ipa: '/aːniː/' },
      { word: 'पूण', romanization: 'Punn', definition: 'But', ipa: '/puːɳ/' },
      { word: 'देखून', romanization: 'Dekhun', definition: 'So / Therefore', ipa: '/d̪ekʰuːn/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Hanv bazarant gelom aani nustem ghetlem. (I went to the market and bought fish.)' },
      { speaker: 'Server', line: 'Makai vochpak zai aslem, punn vell mellonk na. (I also wanted to go, but didn\'t get time.)' },
      { speaker: 'Customer', line: 'Dekhun tum vochonk na. (So you didn\'t go.)' }
    ],
    culturalTip: 'Konkani sentence structure is typically Subject-Object-Verb (SOV), similar to other Indo-Aryan languages.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Aani', 'Dekhun', 'Punn', 'Kite'], answer: 'Punn' }
    ],
    followUp: 'Connect two ideas using "aani" (and) in a single sentence.'
  },
  { 
    id: 'lesson-konkani-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-konkani-7',
    vocabulary: [
      { word: 'माझो छंद', romanization: 'Mazho chhand', definition: 'My hobby', ipa: '' },
      { word: 'पुस्तक वाचप', romanization: 'Pustak vachap', definition: 'Reading books', ipa: '' },
      { word: 'संगीत आयकप', romanization: 'Sangeet aaikap', definition: 'Listening to music', ipa: '' },
      { word: 'खेळप', romanization: 'Khelp', definition: 'Playing', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Tuzo chhand kite? (What is your hobby?)' },
      { speaker: 'Server', line: 'Mazho chhand pustak vachap aani sangeet aaikap. Tuzo? (My hobby is reading books and listening to music. Yours?)' },
      { speaker: 'Customer', line: 'Maka football khelpak आवडटा. (I like to play football.)' }
    ],
    culturalTip: 'Goa is famous for its love of music and football. The traditional Goan music called "Mando" is a beautiful blend of Indian and Western traditions.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Listening to music"?', options: ['Pustak vachap', 'Khelp', 'Sangeet aaikap', 'Mazho chhand'], answer: 'Sangeet aaikap' }
    ],
    followUp: 'Learn to talk about your favorite hobby or sport in Konkani.'
  },
];
