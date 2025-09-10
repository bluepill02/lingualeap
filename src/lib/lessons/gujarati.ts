
import type { LessonDeck, MicroLesson } from '@/lib/types';
import { placeholderAudioDataUri } from '@/lib/placeholder-audio';

export const gujaratiDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-gujarati-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-gujarati-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-gujarati-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-gujarati-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-gujarati-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-gujarati-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-gujarati-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-gujarati-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-gujarati-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-gujarati-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-gujarati-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const gujaratiLessons: MicroLesson[] = [
  { 
    id: 'lesson-gujarati-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-gujarati-1',
    vocabulary: [
      { word: 'કેમ છો?', romanization: 'Kem chho?', definition: 'How are you? (Formal/Informal)', ipa: '/kem tʃʰo/' },
      { word: 'આભાર', romanization: 'Aabhar', definition: 'Thank you', ipa: '/aːbʱaːɾ/' },
      { word: 'નમસ્તે', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməste/' },
      { word: 'સારું', romanization: 'Saru', definition: 'Good / Fine', ipa: '/saːɾu/' },
      { word: 'તમારું નામ શું છે?', romanization: 'Tamaru naam shu chhe?', definition: 'What is your name?', ipa: '/t̪əmaːɾuː naːm ʃuː tʃʰe/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'નમસ્તે, તમે કેમ છો? (Namaste, tame kem chho?)' },
      { speaker: 'Server', line: 'હું મજામાં છું, આભાર. તમે કેમ છો? (Hu majama chhu, aabhar. Tame kem chho?)' },
      { speaker: 'Customer', line: 'હું પણ મજામાં છું. (Hu pan majama chhu.)' }
    ],
    culturalTip: 'Gujaratis are known for their warmth and hospitality. A friendly "Kem chho?" is always a great way to start a conversation.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Gujarati?', options: ['Namaste', 'Saru', 'Aabhar', 'Shu'], answer: 'Aabhar' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Tame ____ chho?".', answer: 'kem' }
    ],
    followUp: 'Greet a Gujarati friend with "Kem chho?" and surprise them!'
  },
  { 
    id: 'lesson-gujarati-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-gujarati-2',
    vocabulary: [
      { word: 'પાણી', romanization: 'Paani', definition: 'Water', ipa: '/paːɳi/' },
      { word: 'ચા', romanization: 'Cha', definition: 'Tea', ipa: '/tʃa/' },
      { word: 'ઘર', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'એક', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'બે', romanization: 'Be', definition: 'Two', ipa: '/be/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ભાઈ, એક કપ ચા આપો. (Bhai, ek cup cha aapo.)' },
      { speaker: 'Server', line: 'ચોક્કસ. બીજું કંઈ? (Chokkas. Biju kai?)' },
      { speaker: 'Customer', line: 'એક ગ્લાસ પાણી પણ આપો. (Ek glass paani pan aapo.)' }
    ],
    culturalTip: 'In Gujarat, offering "cha-paani" (tea and water) to guests is a fundamental part of showing hospitality.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Gujarati word for "House" is ____.', answer: 'Ghar' },
      { type: 'multiple-choice', question: 'What does "Be" mean?', options: ['One', 'Two', 'Three', 'Tea'], answer: 'Two' }
    ],
    followUp: 'Try counting various objects around you from one to five in Gujarati.'
  },
  { 
    id: 'lesson-gujarati-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-gujarati-3',
    vocabulary: [
      { word: 'ક્યાં?', romanization: 'Kyan?', definition: 'Where?', ipa: '/kjãː/' },
      { word: 'ક્યારે?', romanization: 'Kyare?', definition: 'When?', ipa: '/kjaːɾe/' },
      { word: 'શા માટે?', romanization: 'Sha maate?', definition: 'Why?', ipa: '/ʃaː maːʈe/' },
      { word: 'શું?', romanization: 'Shu?', definition: 'What?', ipa: '/ʃuː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'દુકાન ક્યાં છે? (Dukaan kyan chhe?)' },
      { speaker: 'Server', line: 'તે રસ્તાના ખૂણા પર છે. (Te rastana khuna par chhe.)' },
      { speaker: 'Customer', line: 'આભાર. તે ક્યારે ખુલે છે? (Aabhar. Te kyare khule chhe?)' }
    ],
    culturalTip: 'Gujarati questions often end with "chhe?" which is the equivalent of "is it?" or "right?".',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Why?" in Gujarati?', options: ['Kyan?', 'Sha maate?', 'Kyare?', 'Shu?'], answer: 'Sha maate?' }
    ],
    followUp: 'Ask a friend "Tame kyan jao chho?" (Where are you going?).'
  },
  { 
    id: 'lesson-gujarati-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-gujarati-4',
    vocabulary: [
      { word: 'હું કરું છું', romanization: 'Hu karu chhu', definition: 'I do (Present)', ipa: '' },
      { word: 'મેં કર્યું', romanization: 'Me karyu', definition: 'I did (Past)', ipa: '' },
      { word: 'હું કરીશ', romanization: 'Hu karish', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'મેં ગઈકાલે મારું કામ કર્યું. (Me gaikale maru kaam karyu.)' },
      { speaker: 'Server', line: 'શું તમે આજે પણ કામ કરશો? (Shu tame aaje pan kaam karsho?)' },
      { speaker: 'Customer', line: 'હા, હું આજે પણ કામ કરું છું. (Ha, hu aaje pan kaam karu chhu.)' }
    ],
    culturalTip: 'Gujarati, like many Indo-Aryan languages, has a complex system of verb conjugations that change based on gender, number, and tense.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I will do"?', options: ['Hu karu chhu', 'Hu karish', 'Me karyu', 'Hu shu'], answer: 'Hu karish' }
    ],
    followUp: 'Describe an activity you did yesterday, one you are doing today, and one you will do tomorrow, using the correct tenses.'
  },
  { 
    id: 'lesson-gujarati-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-gujarati-5',
    vocabulary: [
      { word: 'આનો શું ભાવ છે?', romanization: 'Aano shu bhav chhe?', definition: 'What is its price?', ipa: '' },
      { word: 'થોડું ઓછું કરો.', romanization: 'Thodu ochhu karo.', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'સારું, આપી દો.', romanization: 'Saru, aapi do.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'આ કેળાનો શું ભાવ છે? (Aa kelano shu bhav chhe?)' },
      { speaker: 'Server', line: 'પચાસ રૂપિયા ડઝન. (Pachaas rupiya dozen.)' },
      { speaker: 'Customer', line: 'થોડું ઓછું કરો ને! (Thodu ochhu karo ne!)' },
      { speaker: 'Server', line: 'સારું, ચાલીસ રૂપિયામાં લઈ જાઓ. (Saru, chaalis rupiyama lai jao.)' }
    ],
    culturalTip: 'Bargaining ("bhav-tal") is an integral part of shopping in local Gujarati markets. It\'s considered a friendly negotiation.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Shu bhav chhe?', 'Saru', 'Thodu ochhu karo', 'Biju kai?'], answer: 'Thodu ochhu karo' }
    ],
    followUp: 'Practice asking for the price of fruits or vegetables in Gujarati.'
  },
  { 
    id: 'lesson-gujarati-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-gujarati-6',
    vocabulary: [
      { word: 'અને', romanization: 'Ane', definition: 'And', ipa: '/əne/' },
      { word: 'પણ', romanization: 'Pan', definition: 'But', ipa: '/pəɳ/' },
      { word: 'એટલે', romanization: 'Etle', definition: 'So / Therefore', ipa: '/eʈle/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'હું બજારમાં ગયો અને શાકભાજી ખરીદી. (Hu bajaarma gayo ane shaakbhaji kharidi.)' },
      { speaker: 'Server', line: 'મારે પણ જવું હતું, પણ સમય ન મળ્યો. (Maare pan javu hatu, pan samay na malyo.)' },
      { speaker: 'Customer', line: 'એટલે તમે ન ગયા. (Etle tame na gaya.)' }
    ],
    culturalTip: 'Gujarati sentence structure is typically Subject-Object-Verb (SOV), so the verb usually comes at the end of the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ane', 'Etle', 'Pan', 'Shu'], answer: 'Pan' }
    ],
    followUp: 'Try to connect two simple sentences using "ane" (and).'
  },
  { 
    id: 'lesson-gujarati-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-gujarati-7',
    vocabulary: [
      { word: 'મારો શોખ', romanization: 'Maro shokh', definition: 'My hobby', ipa: '' },
      { word: 'વાંચન', romanization: 'Vaanchan', definition: 'Reading', ipa: '' },
      { word: 'સંગીત સાંભળવું', romanization: 'Sangeet saambhalvu', definition: 'Listening to music', ipa: '' },
      { word: 'ફિલ્મો જોવી', romanization: 'Filmo jovi', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'તમારો શોખ શું છે? (Tamaro shokh shu chhe?)' },
      { speaker: 'Server', line: 'મારો શોખ વાંચન અને સંગીત સાંભળવાનો છે. તમારો? (Maro shokh vaanchan ane sangeet saambhalvano chhe. Tamaro?)' },
      { speaker: 'Customer', line: 'મને ફિલ્મો જોવી ગમે છે. (Mane filmo jovi game chhe.)' }
    ],
    culturalTip: 'Garba and Dandiya Raas are famous Gujarati folk dances, especially during the Navaratri festival. Discussing music and dance is a great way to connect.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading"?', options: ['Sangeet saambhalvu', 'Filmo jovi', 'Vaanchan', 'Maro shokh'], answer: 'Vaanchan' }
    ],
    followUp: 'Tell a friend what your hobby is in Gujarati.'
  },
];
