
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const malayalamDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-malayalam-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-malayalam-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-malayalam-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-malayalam-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-malayalam-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-malayalam-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-malayalam-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-malayalam-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-malayalam-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-malayalam-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-malayalam-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const malayalamLessons: MicroLesson[] = [
  { 
    id: 'lesson-malayalam-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-malayalam-1',
    vocabulary: [
      { word: 'നമസ്കാരം', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '/n̪amaskaːɾam/' },
      { word: 'നന്ദി', romanization: 'Nanni', definition: 'Thank you', ipa: '/nan̪n̪i/' },
      { word: 'സുഖമാണോ?', romanization: 'Sukhamano?', definition: 'How are you?', ipa: '/sukʰamaːɳoː/' },
      { word: 'എനിക്ക് സുഖമാണ്', romanization: 'Enikku sukhamanu', definition: 'I am fine', ipa: '/enikːɯ sukʰamaːɳɯ/' },
      { word: 'നിങ്ങളുടെ പേര് എന്താണ്?', romanization: 'Ninte peru enthanu?', definition: 'What is your name?', ipa: '/ninte peːɾɯ en̪d̪aːɳɯ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'നമസ്കാരം. സുഖമാണോ? (Namaskaram. Sukhamano?)' },
      { speaker: 'Server', line: 'നമസ്കാരം. എനിക്ക് സുഖമാണ്, നന്ദി. നിങ്ങൾക്കോ? (Namaskaram. Enikku sukhamanu, nanni. Ningalkko?)' },
      { speaker: 'Customer', line: 'എനിക്കും സുഖമാണ്. (Enikkum sukhamanu.)' }
    ],
    culturalTip: 'In Kerala, addressing elders or strangers with respectful terms like "Chetta" (for an older male) or "Chechi" (for an older female) is very common and appreciated.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Hello" in Malayalam?', options: ['Nanni', 'Sukhamano', 'Namaskaram', 'Enthanu'], answer: 'Namaskaram' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "____?".', answer: 'Sukhamano' }
    ],
    followUp: 'Try greeting a friend with "Namaskaram" and ask them "Sukhamano?".'
  },
  { 
    id: 'lesson-malayalam-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-malayalam-2',
    vocabulary: [
      { word: 'വെള്ളം', romanization: 'Vellam', definition: 'Water', ipa: '/ʋeɭːam/' },
      { word: 'ചായ', romanization: 'Chaaya', definition: 'Tea', ipa: '/tʃaːja/' },
      { word: 'ചോറ്', romanization: 'Choru', definition: 'Rice (cooked)', ipa: '/tʃoːɾɯ/' },
      { word: 'ഒന്ന്', romanization: 'Onnu', definition: 'One', ipa: '/on̪n̪u/' },
      { word: 'രണ്ട്', romanization: 'Randu', definition: 'Two', ipa: '/ɾanɖu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ചേട്ടാ, ഒരു ചായ തരൂ. (Chetta, oru chaaya tharoo.)' },
      { speaker: 'Server', line: 'ശരി. വേറെ എന്തെങ്കിലും വേണോ? (Sheri. Vere enthenkilum veno?)' },
      { speaker: 'Customer', line: 'ഒരു ഗ്ലാസ് വെള്ളം കൂടി. (Oru glass vellam koodi.)' }
    ],
    culturalTip: 'Rice ("Choru") is the staple food of Kerala, often served with a variety of curries on a banana leaf during festivals.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Malayalam word for "Tea" is ____.', answer: 'Chaaya' },
      { type: 'multiple-choice', question: 'What does "Onnu" mean?', options: ['Two', 'Three', 'Water', 'One'], answer: 'One' }
    ],
    followUp: 'Practice counting common items around you from one to three (Onnu, Randu, Moonu).'
  },
  { 
    id: 'lesson-malayalam-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-malayalam-3',
    vocabulary: [
      { word: 'എവിടെ?', romanization: 'Evide?', definition: 'Where?', ipa: '/eʋiɖe/' },
      { word: 'എപ്പോൾ?', romanization: 'Eppol?', definition: 'When?', ipa: '/eppoːɭ/' },
      { word: 'എന്തുകൊണ്ട്?', romanization: 'Enthukondu?', definition: 'Why?', ipa: '/en̪d̪ukonɖu/' },
      { word: 'എന്ത്?', romanization: 'Enthu?', definition: 'What?', ipa: '/en̪d̪u/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ബസ് സ്റ്റോപ്പ് എവിടെ ആണ്? (Bus stop evide aanu?)' },
      { speaker: 'Server', line: 'അവിടെ, നേരെ പോയി വലത്തോട്ട്. (Avide, nere poyi valathottu.)' },
      { speaker: 'Customer', line: 'നന്ദി. ബസ് എപ്പോൾ വരും? (Nanni. Bus eppol varum?)' }
    ],
    culturalTip: 'Questions in Malayalam often end with a rising intonation. The question word is usually at the beginning of the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Malayalam?', options: ['Eppol?', 'Enthukondu?', 'Evide?', 'Enthu?'], answer: 'Evide?' }
    ],
    followUp: 'Try asking a friend "Nee evide pokunnu?" (Where are you going?).'
  },
  { 
    id: 'lesson-malayalam-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-malayalam-4',
    vocabulary: [
      { word: 'ഞാൻ ചെയ്യുന്നു', romanization: 'Njan cheyyunnu', definition: 'I do (Present)', ipa: '' },
      { word: 'ഞാൻ ചെയ്തു', romanization: 'Njan cheythu', definition: 'I did (Past)', ipa: '' },
      { word: 'ഞാൻ ചെയ്യും', romanization: 'Njan cheyyum', definition: 'I will do (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ഞാൻ ഇന്നലെ എൻ്റെ ജോലി ചെയ്തു. (Njan innale ente joli cheythu.)' },
      { speaker: 'Server', line: 'நீங்கள் ഇന്നും ജോലി ചെയ്യുമോ? (Ningal innum joli cheyyumo?)' },
      { speaker: 'Customer', line: 'അതെ, ഞാൻ ഇന്നും ജോലി ചെയ്യുന്നു. (Athe, njan innum joli cheyyunnu.)' }
    ],
    culturalTip: 'Malayalam verbs conjugate based on tense, but less so on the person compared to some other Dravidian languages, making it slightly easier to learn.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I will do"?', options: ['Njan cheyyunnu', 'Njan cheyyum', 'Njan cheythu', 'Njan enthu'], answer: 'Njan cheyyum' }
    ],
    followUp: 'Try making three simple sentences about your activities yesterday, today, and tomorrow.'
  },
  { 
    id: 'lesson-malayalam-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-malayalam-5',
    vocabulary: [
      { word: 'ഇതിന് എന്ത് വിലയാണ്?', romanization: 'Ithinu enthu vilayanu?', definition: 'What is its price?', ipa: '' },
      { word: 'വില കുറയ്ക്കുമോ?', romanization: 'Vila kurakkumo?', definition: 'Will you reduce the price?', ipa: '' },
      { word: 'ശരി, തരൂ.', romanization: 'Sheri, tharoo.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ഈ പഴത്തിന് എന്ത് വിലയാണ്? (Ee pazhathinu enthu vilayanu?)' },
      { speaker: 'Server', line: 'ഒരു കിലോയ്ക്ക് അമ്പത് രൂപ. (Oru kiloykku ambathu roopa.)' },
      { speaker: 'Customer', line: 'വില കുറയ്ക്കുമോ? (Vila kurakkumo?)' },
      { speaker: 'Server', line: 'ശരി, നാല്പത്തിയഞ്ച് രൂപയ്ക്ക് എടുത്തോളൂ. (Sheri, nalpathiyanju roopaykku edutholoo.)' }
    ],
    culturalTip: 'Bargaining is common in local markets. A polite "Vila kurakkumo?" is the standard way to negotiate.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Enthu vilayanu?', 'Sheri, tharoo', 'Vila kurakkumo?', 'Sukhamano'], answer: 'Vila kurakkumo?' }
    ],
    followUp: 'Practice asking for the price of an item you want to buy.'
  },
  { 
    id: 'lesson-malayalam-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-malayalam-6',
    vocabulary: [
      { word: 'ഉം', romanization: '-um', definition: 'And (used as a suffix)', ipa: '/um/' },
      { word: 'പക്ഷേ', romanization: 'Pakshe', definition: 'But', ipa: '/pakʃe/' },
      { word: 'അതുകൊണ്ട്', romanization: 'Athukondu', definition: 'So / Therefore', ipa: '/að̪ukonɖu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ഞാൻ കടയിൽ പോയി പാലും പഴവും വാങ്ങി. (Njan kadayil poyi paalum pazhavum vaangi.)' },
      { speaker: 'Server', line: 'എനിക്കും പോകണമായിരുന്നു, പക്ഷേ സമയം കിട്ടിയില്ല. (Enikkum pokanamayirunnu, pakshe samayam kittiyilla.)' },
      { speaker: 'Customer', line: 'അതുകൊണ്ട് നിങ്ങൾ പോയില്ല. (Athukondu ningal poyilla.)' }
    ],
    culturalTip: 'In Malayalam, "and" is often added as a suffix "-um" to the words being connected, e.g., "paalum pazhavum" (milk and fruit).',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['-um', 'Athukondu', 'Pakshe', 'Enthu'], answer: 'Pakshe' }
    ],
    followUp: 'Try to connect two nouns using the "-um" suffix.'
  },
  { 
    id: 'lesson-malayalam-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-malayalam-7',
    vocabulary: [
      { word: 'എൻ്റെ ഹോബി', romanization: 'Ente hobby', definition: 'My hobby', ipa: '' },
      { word: 'പുസ്തകം വായിക്കുക', romanization: 'Pusthakam vaayikkuka', definition: 'Reading books', ipa: '' },
      { word: 'പാട്ട് കേൾക്കുക', romanization: 'Paattu kelkkuka', definition: 'Listening to music', ipa: '' },
      { word: 'സിനിമ കാണുക', romanization: 'Cinema kaanuka', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'നിങ്ങളുടെ ഹോബി എന്താണ്? (Ningalude hobby enthanu?)' },
      { speaker: 'Server', line: 'എൻ്റെ ഹോബി പുസ്തകം വായിക്കുന്നതും പാട്ട് കേൾക്കുന്നതുമാണ്. നിങ്ങളുടെയോ? (Ente hobby pusthakam vaayikkunnathum paattu kelkkunnathumanu. Ningaludeyo?)' },
      { speaker: 'Customer', line: 'എനിക്ക് സിനിമ കാണാൻ ഇഷ്ടമാണ്. (Enikku cinema kaanan ishtamanu.)' }
    ],
    culturalTip: 'Kerala has a vibrant film industry, known as "Mollywood", and a rich literary tradition. Talking about films and books is a great way to connect with Malayalis.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Listening to music"?', options: ['Pusthakam vaayikkuka', 'Cinema kaanuka', 'Paattu kelkkuka', 'Ente hobby'], answer: 'Paattu kelkkuka' }
    ],
    followUp: 'Learn to say what your favorite hobby is in Malayalam.'
  }
];
