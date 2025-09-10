
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const maithiliDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-maithili-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-maithili-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-maithili-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-maithili-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-maithili-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-maithili-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-maithili-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-maithili-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-maithili-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-maithili-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-maithili-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-maithili-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-maithili-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-maithili-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const maithiliLessons: MicroLesson[] = [
  { 
    id: 'lesson-maithili-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-maithili-1',
    vocabulary: [
      { word: 'प्रणाम', romanization: 'Pranaam', definition: 'Hello/Greetings (respectful)', ipa: '/pɾə.n̪aːm/' },
      { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱən.jə.ʋaːd̪/' },
      { word: 'अहाँ केहन छी?', romanization: 'Ahan kehan chhi?', definition: 'How are you?', ipa: '/əhɔ̃ keːhən tʃʰiː/' },
      { word: 'हम नीक छी।', romanization: 'Hum neek chhi.', definition: 'I am fine.', ipa: '/həm niːk tʃʰiː/' },
      { word: 'अहाँक नाम की छै?', romanization: 'Ahaank naam ki chhai?', definition: 'What is your name?', ipa: '/əhɔ̃ːk naːm kiː tʃʰɛː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'प्रणाम। अहाँ केहन छी? (Pranaam. Ahan kehan chhi?)' },
      { speaker: 'Server', line: 'प्रणाम। हम नीक छी, धन्यवाद। अहाँ? (Pranaam. Hum neek chhi, dhanyavaad. Ahan?)' },
      { speaker: 'Customer', line: 'हमहुँ नीक छी। (Hamhun neek chhi.)' }
    ],
    culturalTip: 'Maithili is spoken in the Mithila region of India and Nepal. "Pranaam" is a respectful greeting suitable for all ages.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Hello" respectfully in Maithili?', options: ['Dhanyavaad', 'Neek chhi', 'Pranaam', 'Ki chhai'], answer: 'Pranaam' },
      { type: 'fill-in-the-blank', question: 'To ask "How are you?", you say "Ahan ____ chhi?".', answer: 'kehan' }
    ],
    followUp: 'Try greeting someone from the Mithila region with "Pranaam".'
  },
  { 
    id: 'lesson-maithili-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-maithili-2',
    vocabulary: [
      { word: 'पाइन', romanization: 'Paain', definition: 'Water', ipa: '/paːɪn/' },
      { word: 'चाह', romanization: 'Chaah', definition: 'Tea', ipa: '/tʃaːh/' },
      { word: 'घर', romanization: 'Ghar', definition: 'House', ipa: '/ɡʱəɾ/' },
      { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/ek/' },
      { word: 'दू', romanization: 'Doo', definition: 'Two', ipa: '/d̪uː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'एक कप चाह भेटत? (Ek cup chaah bhetat?)' },
      { speaker: 'Server', line: 'हँ, जरुर। आओर किछु? (Haan, jarur. Aor kichu?)' },
      { speaker: 'Customer', line: 'एक गिलास पाइन दियौ। (Ek gilaas paain diyau.)' }
    ],
    culturalTip: 'Mithila cuisine is known for dishes like "Dahi Chura" and various "pithas". Offering tea or water to a guest is a basic courtesy.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Maithili word for "Water" is ____.', answer: 'Paain' },
      { type: 'multiple-choice', question: 'What does "Ek" mean?', options: ['Two', 'Three', 'Tea', 'One'], answer: 'One' }
    ],
    followUp: 'Practice counting up to three in Maithili: Ek, Doo, Teen.'
  },
  { 
    id: 'lesson-maithili-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-maithili-3',
    vocabulary: [
      { word: 'कतय?', romanization: 'Katay?', definition: 'Where?', ipa: '/kət̪əj/' },
      { word: 'कखन?', romanization: 'Kakhan?', definition: 'When?', ipa: '/kəkʰən/' },
      { word: 'किएक?', romanization: 'Kiyek?', definition: 'Why?', ipa: '/kijek/' },
      { word: 'की?', romanization: 'Ki?', definition: 'What?', ipa: '/kiː/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'दुकान कतय छै? (Dukaan katay chhai?)' },
      { speaker: 'Server', line: 'ओहि मोड़ पर। (Ohi mor par.)' },
      { speaker: 'Customer', line: 'धन्यवाद। कखन खुजैत छै? (Dhanyavaad. Kakhan khujait chhai?)' }
    ],
    culturalTip: 'The tones in Maithili can be quite musical. The way a question is asked can convey different levels of politeness and curiosity.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Maithili?', options: ['Kakhan?', 'Kiyek?', 'Katay?', 'Ki?'], answer: 'Katay?' }
    ],
    followUp: 'Try asking a friend "Ahaan katay jaa rahal chhi?" (Where are you going?).'
  },
  { 
    id: 'lesson-maithili-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-maithili-4',
    vocabulary: [
      { word: 'हम जाइत छी', romanization: 'Hum jaait chhi', definition: 'I go (Present)', ipa: '' },
      { word: 'हम गेलहुँ', romanization: 'Hum gelahun', definition: 'I went (Past)', ipa: '' },
      { word: 'हम जाएब', romanization: 'Hum jaayab', definition: 'I will go (Future)', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'हम काल्हि पटना गेलहुँ। (Hum kaalhi Patna gelahun.)' },
      { speaker: 'Server', line: 'बहुत नीक। अहाँ फेर जाएब? (Bahut neek. Ahan pher jaayab?)' },
      { speaker: 'Customer', line: 'हँ, हम परदिन जाएब। (Haan, hum pardin jaayab.)' }
    ],
    culturalTip: 'Maithili verb conjugations can vary by region. The forms presented here are common in the Darbhanga region.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Hum jaayab', 'Hum jaait chhi', 'Hum gelahun', 'Hum ki'], answer: 'Hum gelahun' }
    ],
    followUp: 'Try to form simple sentences about your past, present, and future activities.'
  },
  { 
    id: 'lesson-maithili-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-maithili-5',
    vocabulary: [
      { word: 'एकर दाम कतेक छै?', romanization: 'Ekar daam katek chhai?', definition: 'What is its price?', ipa: '' },
      { word: 'किछु कम करू।', romanization: 'Kichu kam karu.', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ठीक छै, दियौ।', romanization: 'Theek chhai, diyau.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ई आमक दाम कतेक छै? (Ee aamak daam katek chhai?)' },
      { speaker: 'Server', line: 'पचास टाका किलो। (Pachaas taka kilo.)' },
      { speaker: 'Customer', line: 'किछु कम करू ने! (Kichu kam karu ne!)' },
      { speaker: 'Server', line: 'ठीक छै, चालीस टाका दियौ। (Theek chhai, chaalis taka diyau.)' }
    ],
    culturalTip: 'Mithila is famous for its "Makhana" (fox nuts) and various mango varieties. Bargaining in local markets is a common practice.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to start bargaining?', options: ['Ekar daam katek chhai?', 'Theek chhai', 'Kichu kam karu', 'Neek chhai'], answer: 'Kichu kam karu' }
    ],
    followUp: 'Practice a short bargaining dialogue with a friend using the phrases learned.'
  },
  { 
    id: 'lesson-maithili-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-maithili-6',
    vocabulary: [
      { word: 'आओर', romanization: 'Aor', definition: 'And', ipa: '/əɔɾ/' },
      { word: 'लेकिन', romanization: 'Lekin', definition: 'But', ipa: '/leːkɪn/' },
      { word: 'एहि लेल', romanization: 'Ehi lel', definition: 'So / Therefore', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'हम बजार गेलहुँ आओर तरकारी किनलिअ। (Hum bazaar gelahun aor tarkaari kinlia.)' },
      { speaker: 'Server', line: 'हमरो जाए के छल, लेकिन समय नहि भेटल। (Hamro jaay ke chhal, lekin samay nahi bhetal.)' },
      { speaker: 'Customer', line: 'एहि लेल अहाँ नहि गेलहुँ। (Ehi lel ahan nahi gelahun.)' }
    ],
    culturalTip: 'The Maithili script is traditionally Tirhuta, but Devanagari (the script used for Hindi) is more common today.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "and"?', options: ['Lekin', 'Ehi lel', 'Aor', 'Ki'], answer: 'Aor' }
    ],
    followUp: 'Try to connect two ideas using "aor" (and) in a single sentence.'
  },
  { 
    id: 'lesson-maithili-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-maithili-7',
    vocabulary: [
      { word: 'हमर शौक', romanization: 'Hamar shauk', definition: 'My hobby', ipa: '' },
      { word: 'किताब पढ़ब', romanization: 'Kitaab padhab', definition: 'Reading books', ipa: '' },
      { word: 'संगीत सुनब', romanization: 'Sangeet sunab', definition: 'Listening to music', ipa: '' },
      { word: 'खेलब', romanization: 'Khelab', definition: 'Playing', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'अहाँक शौक की छै? (Ahaank shauk ki chhai?)' },
      { speaker: 'Server', line: 'हमर शौक किताब पढ़ब आओर संगीत सुनब छै। अहाँक? (Hamar shauk kitaab padhab aor sangeet sunab chhai. Ahaank?)' },
      { speaker: 'Customer', line: 'हमरा खेलब नीक लगैत अछि। (Hamra khelab neek lagait achhi.)' }
    ],
    culturalTip: 'Mithila painting (also known as Madhubani art) is a world-renowned art form from the region, characterized by its intricate geometric patterns.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "My hobby"?', options: ['Sangeet sunab', 'Khelab', 'Kitaab padhab', 'Hamar shauk'], answer: 'Hamar shauk' }
    ],
    followUp: 'Learn to talk about your favorite hobby or art form in Maithili.'
  },
];
