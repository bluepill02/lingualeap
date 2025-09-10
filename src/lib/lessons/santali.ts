
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const santaliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-santali-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-santali-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-santali-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-santali-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-santali-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-santali-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-santali-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-santali-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-santali-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-santali-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-santali-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-santali-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-santali-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-santali-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const santaliLessons: MicroLesson[] = [
  { 
    id: 'lesson-santali-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-santali-1',
    vocabulary: [
      { word: 'ᱡᱚᱦᱟᱨ', romanization: 'Johar', definition: 'Hello/Greetings (respectful)', ipa: '/dʒohar/' },
      { word: 'ᱥᱟᱨᱦᱟᱣ', romanization: 'Sarhao', definition: 'Thank you', ipa: '/saɾhaɔ/' },
      { word: 'ᱟᱢ ᱪᱮᱫ ᱞᱮᱠᱟ ମେᱱᱟᱢᱟ?', romanization: 'Am cheleka menama?', definition: 'How are you?', ipa: '/am tʃɛlɛka menama/' },
      { word: 'ᱤᱧ ᱱᱟᱯᱟᱭ ᱜᱮ ମେᱱᱟᱹᱧᱟ', romanization: 'Ing napay ge menaing-a', definition: 'I am fine', ipa: '/ɪŋ napaɪ gɛ menaɪɲa/' },
      { word: 'ᱟᱢᱟᱜ ᱧᱩᱛᱩᱢ ᱫᱚ ᱪᱮᱫ?', romanization: 'Amag nyutum do ched?', definition: 'What is your name?', ipa: '/amag ɲut̪um dɔ tʃɛd/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Johar! Am cheleka menama?' },
      { speaker: 'Server', line: 'Johar! Ing napay ge menaing-a, sarhao. Amdo?' },
      { speaker: 'Customer', line: 'Ing hom napay ge menaing-a.' }
    ],
    culturalTip: '"Johar" is a traditional greeting used across many tribal communities in Eastern India, including the Santal people. It signifies respect for nature and each other.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Santali?', options: ['Johar', 'Napay', 'Sarhao', 'Ched'], answer: 'Sarhao' },
      { type: 'fill-in-the-blank', question: 'To ask someone\'s name, you say "Amag ____ do ched?".', answer: 'nyutum' }
    ],
    followUp: 'Practice greeting a friend with "Johar".'
  },
  { 
    id: 'lesson-santali-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-santali-2',
    vocabulary: [
      { word: 'ᱫᱟᱜ', romanization: 'Daag', definition: 'Water', ipa: '/d̪ag/' },
      { word: 'ᱪᱟ', romanization: 'Cha', definition: 'Tea', ipa: '/tʃa/' },
      { word: 'ᱳᱲᱟᱜ', romanization: 'Owag', definition: 'House', ipa: '/oɽag/' },
      { word: 'ᱢᱤᱫ', romanization: 'Mid', definition: 'One', ipa: '/mid/' },
      { word: 'ᱵᱟᱨ', romanization: 'Bar', definition: 'Two', ipa: '/baɾ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Gomke, mid cup cha eming me. (Sir, give me one cup of tea.)' },
      { speaker: 'Server', line: 'Thik geya. Aar cheda? (Alright. Anything else?)' },
      { speaker: 'Customer', line: 'Mid botol daag eming me. (Give me one bottle of water.)' }
    ],
    culturalTip: 'The Santal community has a rich connection with nature. Many traditional songs and stories revolve around elements like "daag" (water) and the forest.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Santali word for "Water" is ____.', answer: 'Daag' },
      { type: 'multiple-choice', question: 'What does "Bar" mean?', options: ['One', 'Two', 'Three', 'House'], answer: 'Two' }
    ],
    followUp: 'Try counting to three in Santali: Mid, Bar, Pɛ.'
  },
  { 
    id: 'lesson-santali-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-santali-3',
    vocabulary: [
      { word: 'ᱚᱠᱟᱨᱮ?', romanization: 'Okare?', definition: 'Where?', ipa: '/okaɾe/' },
      { word: 'ᱛᱤᱥ?', romanization: 'Tis?', definition: 'When?', ipa: '/t̪is/' },
      { word: 'ᱪᱮᱫᱟᱜ?', romanization: 'Chedag?', definition: 'Why?', ipa: '/tʃed̪ag/' },
      { word: 'ᱪᱮᱫ?', romanization: 'Ched?', definition: 'What?', ipa: '/tʃed/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Dokan okare menag-a? (Where is the shop?)' },
      { speaker: 'Server', line: 'Hana nake re. (At that corner.)' },
      { speaker: 'Customer', line: 'Sarhao. Tis khulug-a? (Thank you. When will it open?)' }
    ],
    culturalTip: 'Santali is part of the Munda language family, which is distinct from the Indo-Aryan and Dravidian language families of India.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Santali?', options: ['Tis?', 'Chedag?', 'Okare?', 'Ched?'], answer: 'Okare?' }
    ],
    followUp: 'Practice asking "Noa do ched kana?" (What is this?) for different objects.'
  },
  { 
    id: 'lesson-santali-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-santali-4',
    vocabulary: [
      { word: 'ᱤᱧ ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ', romanization: 'Ing chalag kana', definition: 'I am going (Present Continuous)', ipa: '' },
      { word: 'ᱤᱧ ᱪᱟᱞᱟᱣᱮᱱᱟ', romanization: 'Ing chalawena', definition: 'I went (Past)', ipa: '' },
      { word: 'ᱤᱧ ᱪᱟᱞᱟᱜ-ᱟ', romanization: 'Ing chalag-a', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Ing hola Ranchi ing chalawena. (I went to Ranchi yesterday.)' },
      { speaker: 'Server', line: 'Bes katha! Am gapa hom chalag-a? (Good! Will you go tomorrow too?)' },
      { speaker: 'Customer', line: 'Henh, ing chalag-a. (Yes, I will go.)' }
    ],
    culturalTip: 'Santali grammar is agglutinative, meaning suffixes are added to root words to change their meaning, such as indicating tense.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Ing chalag-a', 'Ing chalag kana', 'Ing chalawena', 'Ing cheda'], answer: 'Ing chalawena' }
    ],
    followUp: 'Try to form simple sentences about what you did yesterday and what you will do tomorrow.'
  },
  { 
    id: 'lesson-santali-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-santali-5',
    vocabulary: [
      { word: 'ᱱᱚᱣᱟ ᱨᱮᱭᱟᱜ ᱜᱚᱱᱚᱝ ᱛᱤᱱᱟᱹག?', romanization: 'Noa reyag gonong tinag?', definition: 'What is its price?', ipa: '' },
      { word: 'ᱠᱤᱪᱷᱩ ᱠᱚᱢ ᱢᱮ', romanization: 'Kichu kom me', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ଠᱤᱠ ᱜᱮᱭᱟ, ᱮᱢᱟᱹᱧ ᱢᱮ', romanization: 'Thik geya, emang me', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Aayo, noa alu reyag gonong tinag? (Ma\'am, what is the price of this potato?)' },
      { speaker: 'Server', line: 'Bar gel takaa kilo. (Twenty rupees per kilo.)' },
      { speaker: 'Customer', line: 'Kichu kom me! (Reduce it a little!)' },
      { speaker: 'Server', line: 'Thik geya, Mit\' gel iral taka em me. (Alright, give eighteen rupees.)' }
    ],
    culturalTip: 'Weekly markets, known as "haat", are central to Santal village life, serving as places for trade and social gathering.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Gonong tinag?', 'Thik geya', 'Kichu kom me', 'Napay ge'], answer: 'Kichu kom me' }
    ],
    followUp: 'Practice a short bargaining conversation with a friend using the phrases learned.'
  },
  { 
    id: 'lesson-santali-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-santali-6',
    vocabulary: [
      { word: 'ᱟᱨ', romanization: 'Aar', definition: 'And', ipa: '/aːɾ/' },
      { word: 'ᱢᱮᱱᱠᱷᱟᱱ', romanization: 'Menkhan', definition: 'But', ipa: '/menkʰan/' },
      { word: 'ᱚᱱᱟᱛᱮ', romanization: 'Onate', definition: 'So / Therefore', ipa: '/ɔnat̪e/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Ing haat ing senkena aar ing tarkari kirin keda. (I went to the market and bought vegetables.)' },
      { speaker: 'Server', line: 'Ing hon senog sanaj kana, menkhan okto banu-g-a. (I also want to go, but there is no time.)' },
      { speaker: 'Customer', line: 'Onate am bam senlena. (So you didn\'t go.)' }
    ],
    culturalTip: 'Santali has its own unique script called Ol Chiki, created by Pandit Raghunath Murmu in 1925.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Aar', 'Onate', 'Menkhan', 'Ched'], answer: 'Menkhan' }
    ],
    followUp: 'Try to connect two simple sentences using "aar" (and).'
  },
  { 
    id: 'lesson-santali-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-santali-7',
    vocabulary: [
      { word: 'ᱤᱧᱟᱜ 趣味', romanization: 'Ing-ag hobby', definition: 'My hobby', ipa: '' },
      { word: 'ᱯᱚᱛᱚᱵ ᱯᱟᱲᱦᱟᱣ', romanization: 'Potob padhao', definition: 'Reading books', ipa: '' },
      { word: 'ᱥᱮᱨᱮᱧ ᱟᱸᱡᱚᱢ', romanization: 'Sereng anjom', definition: 'Listening to music', ipa: '' },
      { word: 'ᱮᱱᱮᱡ', romanization: 'Enej', definition: 'To dance', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Amag hobby do ched kana? (What is your hobby?)' },
      { speaker: 'Server', line: 'Ing-ag hobby do potob padhao aar sereng anjom. Amag do? (My hobby is reading books and listening to music. Yours?)' },
      { speaker: 'Customer', line: 'Ing do enej khub ing kusig-a. (I like to dance very much.)' }
    ],
    culturalTip: 'Santal people have a rich tradition of folk dance and music, which are integral parts of their festivals like Sohrai and Baha.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Sereng anjom', 'Enej', 'Potob padhao', 'Ing-ag hobby'], answer: 'Potob padhao' }
    ],
    followUp: 'Learn to talk about your favorite hobby or festival in Santali.'
  }
];
