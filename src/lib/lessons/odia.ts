
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const odiaDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-odia-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-odia-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-odia-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-odia-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-odia-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-odia-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-odia-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-odia-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-odia-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-odia-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-odia-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-odia-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-odia-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-odia-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const odiaLessons: MicroLesson[] = [
  { 
    id: 'lesson-odia-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-odia-1',
    vocabulary: [
      { word: 'ନମସ୍କାର', romanization: 'Namaskar', definition: 'Hello/Greetings', ipa: '/nɔmɔskaɾɔ/' },
      { word: 'ଧନ୍ୟବାଦ', romanization: 'Dhanyabad', definition: 'Thank you', ipa: '/d̪ʱɔn̪jɔbad̪ɔ/' },
      { word: 'ଆପଣ କେମିତି ଅଛନ୍ତି?', romanization: 'Apana kemiti achanti?', definition: 'How are you? (Formal)', ipa: '/apɔɳɔ kemit̪i ɔtʃʰɔn̪t̪i/' },
      { word: 'ମୁଁ ଭଲ ଅଛି', romanization: 'Mun bhala achi', definition: 'I am fine', ipa: '/mũ bʱɔlɔ ɔtʃʰi/' },
      { word: 'ଆପଣଙ୍କ ନାମ କଣ?', romanization: 'Apananka nama kana?', definition: 'What is your name?', ipa: '/apɔɳɔŋkɔ namɔ kɔɳɔ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ନମସ୍କାର। ଆପଣ କେମିତି ଅଛନ୍ତି? (Namaskar. Apana kemiti achanti?)' },
      { speaker: 'Server', line: 'ନମସ୍କାର। ମୁଁ ଭଲ ଅଛି, ଧନ୍ୟବାଦ। ଆପଣ? (Namaskar. Mun bhala achi, dhanyabad. Apana?)' },
      { speaker: 'Customer', line: 'ମୁଁ ବି ଭଲ ଅଛି। (Mun bi bhala achi.)' }
    ],
    culturalTip: 'In Odisha, folding hands while saying "Namaskar" is a common gesture of respect shown to everyone, especially elders.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Odia?', options: ['Namaskar', 'Bhala achi', 'Dhanyabad', 'Kana'], answer: 'Dhanyabad' },
      { type: 'fill-in-the-blank', question: 'To say "I am fine", you would say "Mun ____ achi".', answer: 'bhala' }
    ],
    followUp: 'Try greeting someone with "Namaskar" and see their warm response.'
  },
  { 
    id: 'lesson-odia-2', 
    title: 'Lesson 2: Common Nouns & Numbers', 
    deckId: 'deck-odia-2',
    vocabulary: [
      { word: 'ପାଣି', romanization: 'Paani', definition: 'Water', ipa: '/paɳi/' },
      { word: 'ଚା', romanization: 'Cha', definition: 'Tea', ipa: '/tʃa/' },
      { word: 'ଘର', romanization: 'Ghara', definition: 'House', ipa: '/ɡʱɔɾɔ/' },
      { word: 'ଏକ', romanization: 'Eka', definition: 'One', ipa: '/ekɔ/' },
      { word: 'ଦୁଇ', romanization: 'Dui', definition: 'Two', ipa: '/d̪ui/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ଭାଇ, ଗୋଟେ କପ୍ ଚା ଦିଅ। (Bhai, gote cup cha dia.)' },
      { speaker: 'Server', line: 'ହଁ, ନିଶ୍ଚୟ। ଆଉ କଣ ନେବେ? (Han, nischaya. Aau kana nebe?)' },
      { speaker: 'Customer', line: 'ଗୋଟେ ଗ୍ଲାସ୍ ପାଣି ଦିଅ। (Gote glass paani dia.)' }
    ],
    culturalTip: 'Odisha is famous for its temples and sweet dishes like "Rasagola". Offering "cha-paani" (tea and water) is a common courtesy for guests.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Odia word for "Water" is ____.', answer: 'Paani' },
      { type: 'multiple-choice', question: 'What does "Eka" mean?', options: ['Two', 'Three', 'Tea', 'One'], answer: 'One' }
    ],
    followUp: 'Practice counting common items around you from one to three (eka, dui, tini).'
  },
  { 
    id: 'lesson-odia-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-odia-3',
    vocabulary: [
      { word: 'କେଉଁଠି?', romanization: 'Keunthi?', definition: 'Where?', ipa: '/keũʈʰi/' },
      { word: 'କେବେ?', romanization: 'Kebe?', definition: 'When?', ipa: '/kebe/' },
      { word: 'କାହିଁକି?', romanization: 'Kahinki?', definition: 'Why?', ipa: '/kaɦĩki/' },
      { word: 'କଣ?', romanization: 'Kana?', definition: 'What?', ipa: '/kɔɳɔ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ଦୋକାନ କେଉଁଠି ଅଛି? (Dokana keunthi achi?)' },
      { speaker: 'Server', line: 'ସେହି ରାସ୍ତାର ଶେଷରେ। (Sehi rastara sesare.)' },
      { speaker: 'Customer', line: 'ଧନ୍ୟବାଦ। କେବେ ଖୋଲେ? (Dhanyabad. Kebe khole?)' }
    ],
    culturalTip: 'Odia is an Indo-Aryan language spoken mainly in the state of Odisha. It has its own unique script.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Odia?', options: ['Kebe?', 'Kahinki?', 'Keunthi?', 'Kana?'], answer: 'Keunthi?' }
    ],
    followUp: 'Try asking a friend "Apana keunthi jauchanti?" (Where are you going?).'
  },
  { 
    id: 'lesson-odia-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-odia-4',
    vocabulary: [
      { word: 'ମୁଁ ଯାଏ', romanization: 'Mun jae', definition: 'I go (Present)', ipa: '/mũ dʒae/' },
      { word: 'ମୁଁ ଗଲି', romanization: 'Mun gali', definition: 'I went (Past)', ipa: '/mũ ɡɔli/' },
      { word: 'ମୁଁ ଯିବି', romanization: 'Mun jibi', definition: 'I will go (Future)', ipa: '/mũ dʒibi/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ମୁଁ କାଲି ପୁରୀ ଗଲି। (Mun kali Puri gali.)' },
      { speaker: 'Server', line: 'ବହୁତ ଭଲ। ଆପଣ ଆସନ୍ତାକାଲି ଯିବେ କି? (Bahut bhala. Apana asantakali jibe ki?)' },
      { speaker: 'Customer', line: 'ହଁ, ମୁଁ ଯିବି। (Han, mun jibi.)' }
    ],
    culturalTip: 'Verb conjugations in Odia depend on the tense and the subject, similar to many other Indian languages.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Mun jibi', 'Mun jae', 'Mun gali', 'Mun kana'], answer: 'Mun gali' }
    ],
    followUp: 'Try to describe your activities for yesterday, today, and tomorrow using the correct tenses.'
  },
  { 
    id: 'lesson-odia-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-odia-5',
    vocabulary: [
      { word: 'ଏହାର ଦାମ୍ କେତେ?', romanization: 'Ehara daam kete?', definition: 'What is its price?', ipa: '/eɦaɾɔ d̪amɔ ket̪e/' },
      { word: 'କିଛି କମ୍ କରନ୍ତୁ', romanization: 'Kichi kam karantu', definition: 'Reduce it a little. (Bargaining)', ipa: '/kitʃʰi kɔm kɔɾɔn̪t̪u/' },
      { word: 'ଠିକ୍ ଅଛି, ଦିଅନ୍ତୁ।', romanization: 'Thik achi, diantu.', definition: 'Alright, give it to me.', ipa: '/ʈʰik ɔtʃʰi, d̪ian̪t̪u/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ଭାଇ, ଏହି ଆମ୍ବର ଦାମ୍ କେତେ? (Bhai, ehi ambara daam kete?)' },
      { speaker: 'Server', line: 'କିଲୋ ପଚାଶ ଟଙ୍କା। (Kilo pachash tanka.)' },
      { speaker: 'Customer', line: 'କିଛି କମ୍ କରନ୍ତୁ! (Kichi kam karantu!)' },
      { speaker: 'Server', line: 'ଠିକ୍ ଅଛି, ଚାଳିଶ ଟଙ୍କା ଦିଅନ୍ତୁ। (Thik achi, chalish tanka diantu.)' }
    ],
    culturalTip: 'Bargaining is common in local markets ("haat") in Odisha. It is a friendly way to agree on a price.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Ehara daam kete?', 'Thik achi', 'Kichi kam karantu', 'Kemiti achanti'], answer: 'Kichi kam karantu' }
    ],
    followUp: 'Practice asking for the price of a fruit at a local shop.'
  },
  { 
    id: 'lesson-odia-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-odia-6',
    vocabulary: [
      { word: 'ଏବଂ', romanization: 'Ebang', definition: 'And', ipa: '/ebɔŋɡɔ/' },
      { word: 'କିନ୍ତୁ', romanization: 'Kintu', definition: 'But', ipa: '/kin̪t̪u/' },
      { word: 'ତେଣୁ', romanization: 'Tenu', definition: 'So / Therefore', ipa: '/t̪eɳu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ମୁଁ ବଜାର ଗଲି ଏବଂ ପନିପରିବା କିଣିଲି। (Mun bazaar gali ebang panipariba kinili.)' },
      { speaker: 'Server', line: 'ମୋତେ ବି ଯିବାର ଥିଲା, କିନ୍ତୁ ସମୟ ମିଳିଲା ନାହିଁ। (Mote bi jibara thila, kintu samaya milila nahin.)' },
      { speaker: 'Customer', line: 'ତେଣୁ ଆପଣ ଗଲେ ନାହିଁ। (Tenu apana gale nahin.)' }
    ],
    culturalTip: 'Like many other Indo-Aryan languages, Odia follows a Subject-Object-Verb (SOV) sentence structure.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "but"?', options: ['Ebang', 'Tenu', 'Kintu', 'Kana'], answer: 'Kintu' }
    ],
    followUp: 'Try to connect two simple ideas using "ebang" (and).'
  },
  { 
    id: 'lesson-odia-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-odia-7',
    vocabulary: [
      { word: 'ମୋର ଶବ୍ଦ', romanization: 'Mora shauk', definition: 'My hobby', ipa: '/moɾɔ ʃɔkɔ/' },
      { word: 'ବହି ପଢିବା', romanization: 'Bahi padhiba', definition: 'Reading books', ipa: '/bɔɦi pɔɖʱiba/' },
      { word: 'ଗୀତ ଶୁଣିବା', romanization: 'Geeta suniba', definition: 'Listening to music', ipa: '/ɡit̪ɔ suniba/' },
      { word: 'ସିନେମା ଦେଖିବା', romanization: 'Cinema dekhiba', definition: 'Watching movies', ipa: '/sinema d̪ekʰiba/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ଆପଣଙ୍କ ଶବ୍ଦ କଣ? (Apananka shauk kana?)' },
      { speaker: 'Server', line: 'ମୋର ଶବ୍ଦ ବହି ପଢିବା ଆଉ ଗୀତ ଶୁଣିବା। ଆପଣଙ୍କର? (Mora shauk bahi padhiba aau geeta suniba. Apanankara?)' },
      { speaker: 'Customer', line: 'ମୋତେ ସିନେମା ଦେଖିବାକୁ ଭଲ ଲାଗେ। (Mote cinema dekhibaku bhala lage.)' }
    ],
    culturalTip: 'Odisha has a rich cultural heritage, including the classical dance form Odissi and intricate Pattachitra paintings.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Reading books"?', options: ['Geeta suniba', 'Cinema dekhiba', 'Bahi padhiba', 'Mora shauk'], answer: 'Bahi padhiba' }
    ],
    followUp: 'Learn to talk about your favorite hobby or art form in Odia.'
  }
];
