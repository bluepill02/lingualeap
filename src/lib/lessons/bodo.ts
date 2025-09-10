
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const bodoDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-bodo-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-bodo-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-bodo-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-bodo-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-bodo-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-bodo-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-bodo-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-bodo-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-bodo-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-bodo-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-bodo-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-bodo-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-bodo-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-bodo-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const bodoLessons: MicroLesson[] = [
  { 
    id: 'lesson-bodo-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-bodo-1',
    vocabulary: [
      { word: 'खुलुमबाय', romanization: 'Khulumbai', definition: 'Hello/Greetings (a sign of respect)', ipa: '/kʰulumˌbaɪ/' },
      { word: 'उन्दै', romanization: 'Unnoi', definition: 'Thank you', ipa: '/unːɔɪ/' },
      { word: 'माबोरै दं?', romanization: 'Maborai dong?', definition: 'How are you?', ipa: '/mabɔraɪ dɔŋ/' },
      { word: 'मोजां', romanization: 'Mojaang', definition: 'Good / Fine', ipa: '/mɔzaŋ/' },
      { word: 'नोंनि मुङा मा?', romanization: 'Nongni munga ma?', definition: 'What is your name?', ipa: '/nɔŋni muŋa ma/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Khulumbai! Maborai dong?' },
      { speaker: 'Server', line: 'Khulumbai, ang mojaang dong. Unnoi. Nonga maborai dong?' },
      { speaker: 'Customer', line: 'Ang bo mojaang dong.' }
    ],
    culturalTip: 'The Bodo people have a rich tradition of hand-woven textiles. The "Aronai" is a traditional scarf that is often given as a sign of honor.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Bodo?', options: ['Khulumbai', 'Mojaang', 'Unnoi', 'Ma'], answer: 'Unnoi' },
      { type: 'fill-in-the-blank', question: 'To ask someone\'s name, you say "Nongni ____ ma?".', answer: 'munga' }
    ],
    followUp: 'Try greeting someone with "Khulumbai" to show respect.'
  },
  { 
    id: 'lesson-bodo-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-bodo-2',
    vocabulary: [
      { word: 'दै', romanization: 'Doi', definition: 'Water', ipa: '/dɔɪ/' },
      { word: 'साहा', romanization: 'Saha', definition: 'Tea', ipa: '/saha/' },
      { word: 'ओंखाम', romanization: 'Onkham', definition: 'Rice (cooked)', ipa: '/ɔŋkʰam/' },
      { word: 'से', romanization: 'Se', definition: 'One', ipa: '/se/' },
      { word: 'नै', romanization: 'Noi', definition: 'Two', ipa: '/nɔɪ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Aada, se kap saha ho. (Brother, give one cup of tea.)' },
      { speaker: 'Server', line: 'Thik ase. Araba ma lage? (Alright. What else do you need?)' },
      { speaker: 'Customer', line: 'Se botol doi ho. (Give one bottle of water.)' }
    ],
    culturalTip: 'Rice is the staple food of the Bodo people. "Onkham" is an essential part of every meal.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Bodo word for "Water" is ____.', answer: 'Doi' },
      { type: 'multiple-choice', question: 'What does "Noi" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Practice counting from one to five in Bodo.'
  },
  { 
    id: 'lesson-bodo-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-bodo-3',
    vocabulary: [
      { word: 'บबेयाव?', romanization: 'Bobeyao?', definition: 'Where?', ipa: '/bɔbejao/' },
      { word: 'माब्ला?', romanization: 'Mabla?', definition: 'When?', ipa: '/mabla/' },
      { word: 'मानो?', romanization: 'Mano?', definition: 'Why?', ipa: '/manɔ/' },
      { word: 'मा?', romanization: 'Ma?', definition: 'What?', ipa: '/ma/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Bazara bobeyao? (Where is the market?)' },
      { speaker: 'Server', line: 'Oi lamayni hintao. (At the turn of that road.)' },
      { speaker: 'Customer', line: 'Unnoi. Mabla khuligोन? (Thank you. When does it open?)' }
    ],
    culturalTip: 'The Bodo language is part of the Sino-Tibetan language family, which makes its sentence structure different from Indo-Aryan languages like Hindi or Bengali.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Why?" in Bodo?', options: ['Bobeyao?', 'Mano?', 'Mabla?', 'Ma?'], answer: 'Mano?' }
    ],
    followUp: 'Try asking a "where" question about a place you want to go.'
  },
  { 
    id: 'lesson-bodo-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-bodo-4',
    vocabulary: [
      { word: 'आं थाङो', romanization: 'Ang thango', definition: 'I go (Present)', ipa: '' },
      { word: 'आं थांदों', romanization: 'Ang thangdong', definition: 'I went (Past)', ipa: '' },
      { word: 'आं थांगोन', romanization: 'Ang thangon', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Ang mya Kokrajhar thangdong. (I went to Kokrajhar yesterday.)' },
      { speaker: 'Server', line: 'Mojaang! Nonga gapun thangon na? (Good! Will you go tomorrow?)' },
      { speaker: 'Customer', line: 'Hoi, ang thangon. (Yes, I will go.)' }
    ],
    culturalTip: 'Verb endings in Bodo change depending on the tense, similar to many other languages.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Ang thangon', 'Ang thango', 'Ang thangdong', 'Ang fiyongi'], answer: 'Ang thangdong' }
    ],
    followUp: 'Try to say what you will do tomorrow using the future tense.'
  },
  { 
    id: 'lesson-bodo-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-bodo-5',
    vocabulary: [
      { word: 'बेसे दाम?', romanization: 'Bese dam?', definition: 'What is the price?', ipa: '' },
      { word: 'इयुनसे खम जागोन?', romanization: 'Iyunse khom jagon?', definition: 'Will it be a little less?', ipa: '' },
      { word: 'जागोन', romanization: 'Jagon', definition: 'It will be okay / Alright', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Aada, na ni bese dam? (Brother, what is the price of fish?)' },
      { speaker: 'Server', line: 'Nwisou ran. (Two hundred rupees.)' },
      { speaker: 'Customer', line: 'Iyunse khom jagon? (Will it be a little less?)' },
      { speaker: 'Server', line: 'Jagon, se sou assi ran ho. (Alright, give one hundred eighty.)' }
    ],
    culturalTip: 'Bodo markets are vibrant places. Knowing how to ask for prices is essential for daily life.',
    quizzes: [
      { type: 'multiple-choice', question: 'What is the most common phrase to start bargaining?', options: ['Bese dam?', 'Jagon', 'Iyunse khom jagon?', 'Mojaang'], answer: 'Iyunse khom jagon?' }
    ],
    followUp: 'Imagine you are at a market and practice a bargaining conversation.'
  },
  { 
    id: 'lesson-bodo-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-bodo-6',
    vocabulary: [
      { word: 'आरो', romanization: 'Aro', definition: 'And', ipa: '/arɔ/' },
      { word: 'खिन्तु', romanization: 'Kintu', definition: 'But', ipa: '/kint̪u/' },
      { word: 'बेखायनो', romanization: 'Bekhayno', definition: 'So / Therefore', ipa: '/be.kʰaɪ.nɔ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Ang bazarao thangdong aro na baydong. (I went to the market and bought fish.)' },
      { speaker: 'Server', line: 'Ang bo thangno sanadong, kintu somay monay. (I also wanted to go, but didn\'t get time.)' },
      { speaker: 'Customer', line: 'Bekhayno nonga thangay. (So you didn\'t go.)' }
    ],
    culturalTip: 'Conjunctions like "aro" (and) and "kintu" (but) are key to forming longer, more meaningful sentences in any language.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Aro', 'Bekhayno', 'Kintu', 'Ma'], answer: 'Kintu' }
    ],
    followUp: 'Try connecting two simple sentences with "aro" (and).'
  },
  { 
    id: 'lesson-bodo-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-bodo-7',
    vocabulary: [
      { word: 'आंनि मोजां मोनो', romanization: 'Angni mojaang mono', definition: 'My hobby / What I like', ipa: '' },
      { word: 'बिजाब फरायनो', romanization: 'Bijab poraino', definition: 'Reading books', ipa: '' },
      { word: 'मेथाइ खनानो', romanization: 'Methai khonano', definition: 'Listening to music', ipa: '' },
      { word: 'खेला नायनो', romanization: 'Khela nayno', definition: 'Playing (games/sports)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'Nongni mojaang mono ma? (What is your hobby?)' },
      { speaker: 'Server', line: 'Angni mojaang mono bijab poraino aro methai khonano. Nongni? (My hobby is reading books and listening to music. Yours?)' },
      { speaker: 'Customer', line: 'Ang khela nayno mojaang mono. (I like to play sports.)' }
    ],
    culturalTip: 'The Bodo community has a rich heritage of folk music and dance, like the Bagurumba dance. Discussing hobbies is a great way to connect with people.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Methai khonano', 'Khela nayno', 'Bijab poraino', 'Angni mojaang mono'], answer: 'Bijab poraino' }
    ],
    followUp: 'Learn how to say your favorite hobby in Bodo.'
  },
];
