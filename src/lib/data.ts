
import type { User, Lesson, Flashcard, LessonDeck, MicroLesson, CompanionCircle, LiveClass, CirclePost, LessonPlanWeek } from './types';
import { learnerPersonas } from './personas';

export const mockUser: User = {
  id: 'user-1',
  name: 'Alex',
  email: 'alex@example.com',
  avatarUrl: 'https://picsum.photos/100/100?a=1',
  streak: 12,
  xp: 2480,
  language: 'Hindi',
  timezone: 'America/New_York',
  isPro: false,
  proficiency: 'Beginner',
  goals: ['Travel', 'Career'],
  persona: learnerPersonas[0].type,
};

export const allUsers: User[] = [
    mockUser,
    { id: 'user-2', name: 'Priya Sharma', email: 'priya@example.com', avatarUrl: 'https://picsum.photos/100/100?a=2', streak: 25, xp: 5200, language: 'Hindi', timezone: 'Asia/Kolkata', isPro: true, proficiency: 'Intermediate', goals: ['Career', 'Exams'], persona: learnerPersonas[1].type },
    { id: 'user-3', name: 'Chen', email: 'chen@example.com', avatarUrl: 'https://picsum.photos/100/100?a=3', streak: 5, xp: 850, language: 'Hindi', timezone: 'Asia/Shanghai', isPro: false, proficiency: 'Beginner', goals: ['Culture', 'Travel'], persona: learnerPersonas[2].type },
    { id: 'user-4', name: 'Arjun Krishnan', email: 'arjun@example.com', avatarUrl: 'https://picsum.photos/100/100?a=4', streak: 50, xp: 12000, language: 'Hindi', timezone: 'Europe/Madrid', isPro: true, proficiency: 'Advanced', goals: ['Culture', 'Mentorship'], persona: learnerPersonas[3].type },
    { id: 'user-5', name: 'David', email: 'david@example.com', avatarUrl: 'https://picsum.photos/100/100?a=5', streak: 2, xp: 300, language: 'Hindi', timezone: 'America/New_York', isPro: false, proficiency: 'Beginner', goals: ['Travel'], persona: learnerPersonas[0].type },
    { id: 'user-6', name: 'Fatima', email: 'fatima@example.com', avatarUrl: 'https://picsum.photos/100/100?a=6', streak: 15, xp: 3100, language: 'Hindi', timezone: 'Asia/Dubai', isPro: true, proficiency: 'Intermediate', goals: ['Career'], persona: learnerPersonas[1].type },
    { id: 'user-7', name: 'Kenji', email: 'kenji@example.com', avatarUrl: 'https://picsum.photos/100/100?a=7', streak: 8, xp: 1500, language: 'Hindi', timezone: 'Asia/Tokyo', isPro: false, proficiency: 'Beginner', goals: ['Culture'], persona: learnerPersonas[2].type },
    { id: 'user-8', name: 'Sofia', email: 'sofia@example.com', avatarUrl: 'https://picsum.photos/100/100?a=8', streak: 100, xp: 25000, language: 'Hindi', timezone: 'Europe/Lisbon', isPro: true, proficiency: 'Advanced', goals: ['Mentorship', 'Culture'], persona: learnerPersonas[3].type },
    { id: 'user-9', name: 'Liam', email: 'liam@example.com', avatarUrl: 'https://picsum.photos/100/100?a=9', streak: 1, xp: 100, language: 'Hindi', timezone: 'America/Los_Angeles', isPro: false, proficiency: 'Beginner', goals: ['Travel'], persona: learnerPersonas[0].type },
    { id: 'user-10', name: 'Aarav', email: 'aarav@example.com', avatarUrl: 'https://picsum.photos/100/100?a=10', streak: 30, xp: 7500, language: 'Hindi', timezone: 'Asia/Kolkata', isPro: true, proficiency: 'Intermediate', goals: ['Exams'], persona: learnerPersonas[1].type },
];

const sampleLessonPlan: LessonPlanWeek[] = [
  { week: 1, topic: "Newton's Laws of Motion", status: 'completed', tasks: [{id: 'learn', label: 'Learn', completed: true}, {id: 'practice', label: 'Practice', completed: true}, {id: 'reflect', label: 'Reflect', completed: true}] },
  { week: 2, topic: "Work, Energy, and Power", status: 'in-progress', tasks: [{id: 'learn', label: 'Learn', completed: true}, {id: 'practice', label: 'Practice', completed: false}, {id: 'reflect', label: 'Reflect', completed: false}] },
  { week: 3, topic: "Thermodynamics", status: 'locked', tasks: [{id: 'learn', label: 'Learn', completed: false}, {id: 'practice', label: 'Practice', completed: false}, {id: 'reflect', label: 'Reflect', completed: false}] },
  { week: 4, topic: "Ray Optics", status: 'locked', tasks: [{id: 'learn', label: 'Learn', completed: false}, {id: 'practice', label: 'Practice', completed: false}, {id: 'reflect', label: 'Reflect', completed: false}] },
];

export const companionCircles: CompanionCircle[] = [
  {
    id: 'circle-1',
    name: 'NEET Physics Problem Solvers',
    nameTamil: 'நீட் இயற்பியல் சிக்கல் தீர்ப்பவர்கள்',
    description: 'A mentor-led group focused on tackling tough NEET physics problems, sharing strategies, and clarifying doubts with an experienced tutor.',
    memberCount: 25,
    posts: 112,
    resources: 15,
    type: 'Mentor-led',
    subject: 'Physics',
    difficulty: 'Core',
    language: 'Multi Language',
    format: 'Live Session',
    members: [{id: 'user-4', name: 'Arjun Krishnan', avatarUrl: 'https://picsum.photos/100/100?a=4'}, {id: 'user-2', name: 'Priya Sharma', avatarUrl: 'https://picsum.photos/100/100?a=2'}],
    groupNorms: ['Post at least one challenging problem per week.', 'Be respectful and constructive in feedback.', 'No spam or off-topic discussions.'],
    upcomingEvents: ['Weekly Doubt Clearing Session - Sat 7 PM', 'Live Problem Solving: Rotational Motion - Next Tue 8 PM'],
    lessonPlan: sampleLessonPlan,
  },
  {
    id: 'circle-2',
    name: 'Biology Diagram Practice',
    nameTamil: 'உயிரியல் வரைபடப் பயிற்சி',
    description: 'A peer-led study circle for students to share, practice, and get feedback on important NEET biology diagrams.',
    memberCount: 30,
    posts: 88,
    resources: 22,
    type: 'Peer Study',
    subject: 'Biology',
    difficulty: 'Bridge',
    language: 'Multi Language',
    format: 'Resource Hub',
    members: allUsers.slice(2, 6).map(u => ({id: u.id, name: u.name, avatarUrl: u.avatarUrl})),
    groupNorms: ['Share one diagram you find difficult each week.', 'Provide helpful feedback on at least two posts from others.', 'All diagrams must be from the NEET syllabus.'],
    upcomingEvents: ['Peer Review: Human Anatomy Diagrams - Fri 6 PM'],
  },
  {
    id: 'circle-3',
    name: 'Organic Chemistry Reactions',
    nameTamil: 'கரிம வேதியியல் வினைகள்',
    description: 'Peer-driven study group for memorizing and understanding key organic chemistry reactions and mechanisms.',
    memberCount: 18,
    posts: 12,
    resources: 1,
    type: 'Peer Study',
    subject: 'Chemistry',
    difficulty: 'Foundation',
    language: 'Multi Language',
    format: 'Chat',
    members: allUsers.slice(4, 7).map(u => ({id: u.id, name: u.name, avatarUrl: u.avatarUrl})),
    groupNorms: ['Be active and participate in discussions.', 'Share mnemonics and memory aids.', 'Keep the chat focused on Organic Chemistry.'],
    upcomingEvents: ['Group Quiz: Name Reactions - This Sunday'],
  },
  {
    id: 'circle-4',
    name: 'Calculus Concepts Mastery',
    nameTamil: 'கால்குலஸ் கருத்துகள் தேர்ச்சி',
    description: 'A mentor-guided circle to build strong foundations in differential and integral calculus for advanced physics topics.',
    memberCount: 40,
    posts: 22,
    resources: 1,
    type: 'Mentor-led',
    subject: 'Calculus',
    difficulty: 'Core',
    language: 'Multi Language',
    format: 'Live Session',
    members: [{id: 'user-8', name: 'Sofia', avatarUrl: 'https://picsum.photos/100/100?a=8'}, {id: 'user-10', name: 'Aarav', avatarUrl: 'https://picsum.photos/100/100?a=10'}],
    groupNorms: ['Complete pre-session reading material.', 'Come prepared with questions for the mentor.', 'Help peers understand concepts during breakout rooms.'],
    upcomingEvents: ['Live Class: Integration by Parts - Tomorrow 7 PM', 'Office Hours with Mentor - Thu 5 PM'],
    lessonPlan: sampleLessonPlan,
  },
];


export const flashcards: Flashcard[] = [
  {
    id: 'fc-1',
    word: 'नमस्ते',
    translation: 'Hello',
    phonetic: '/nəməˈsteː/',
    audioUrl: '/audio/namaste.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 10,
    difficulty: 2,
    interval: 5,
    lastReviewed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-2',
    word: 'धन्यवाद',
    translation: 'Thank you',
    phonetic: '/dʱən.jə.ʋɑːd̪/',
    audioUrl: '/audio/dhanyavaad.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 15,
    difficulty: 1,
    interval: 10,
    lastReviewed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-3',
    word: 'कॉफ़ी',
    translation: 'Coffee',
    phonetic: '/kɔː.fiː/',
    audioUrl: '/audio/coffee.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 5,
    difficulty: 3,
    interval: 2,
    lastReviewed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
    {
    id: 'fc-4',
    word: 'बिल',
    translation: 'Bill',
    phonetic: '/bɪl/',
    audioUrl: '/audio/bill.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 20,
    difficulty: 1.5,
    interval: 12,
    lastReviewed: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-5',
    word: 'हाँ',
    translation: 'Yes',
    phonetic: '/hɑ̃ː/',
    audioUrl: '/audio/haan.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 8,
    difficulty: 2.5,
    interval: 4,
    lastReviewed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-bh-1',
  },
  {
    id: 'fc-6',
    word: 'Agua',
    translation: 'Water',
    phonetic: '/ˈa.ɣwa/',
    audioUrl: '/audio/agua.mp3',
    imageUrl: 'https://picsum.photos/400/200',
    stability: 5,
    difficulty: 3,
    interval: 2,
    lastReviewed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    nextDue: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    lessonId: 'lesson-2',
  },
];

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Common Greetings',
    description: 'Learn the most common ways to greet people in Spanish.',
    category: 'Basics',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-1', 'fc-2'],
  },
  {
    id: 'lesson-2',
    title: 'Essential Nouns',
    description: 'Get to know essential nouns for everyday situations.',
    category: 'Vocabulary',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-3', 'fc-4', 'fc-5'],
  },
  {
    id: 'lesson-3',
    title: 'Restaurant Talk',
    description: 'Learn how to order food and drinks at a restaurant.',
    category: 'Travel',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-2', 'fc-3', 'fc-4'],
  },
  {
    id: 'lesson-4',
    title: 'Making Friends',
    description: 'Basic phrases to start a conversation and make new friends.',
    category: 'Social',
    imageUrl: 'https://picsum.photos/600/400',
    flashcardIds: ['fc-1', 'fc-5'],
  },
];

const languages = [
  'assamese', 'bengali', 'bodo', 'dogri', 'gujarati', 'hindi', 'kannada', 'kashmiri',
  'konkani', 'maithili', 'malayalam', 'manipuri', 'marathi', 'nepali', 'odia', 'punjabi',
  'sanskrit', 'santali', 'sindhi', 'tamil', 'telugu', 'urdu'
];

const levels = {
  Foundations: 3,
  Intermediate: 2,
  Advanced: 2
};

const deckTemplates = {
    Foundations: [
        { title: 'First Steps in {Language}', description: 'Master the absolute basics, from alphabet sounds to simple greetings.' },
        { title: 'Building Blocks of {Language}', description: 'Learn essential vocabulary for everyday objects, numbers, and colors.' },
        { title: 'Daily Conversations in {Language}', description: 'Handle simple, real-world interactions like asking for directions or ordering food.' },
    ],
    Intermediate: [
        { title: 'Expanding Horizons in {Language}', description: 'Grasp past, present, and future tenses and start forming complex sentences.' },
        { title: 'Situational {Language}', description: 'Practice conversations for specific scenarios like shopping, travel, and making plans.' },
    ],
    Advanced: [
        { title: 'Fluent Expressions in {Language}', description: 'Dive into nuanced expressions, idioms, and professional communication.' },
        { title: 'Mastering {Language} Nuances', description: 'Discuss complex topics, understand native media, and express abstract ideas.' },
    ],
};

const assameseLessons: MicroLesson[] = [
  // Foundations
  {
    id: 'lesson-assamese-1',
    title: 'Lesson 1: Basic Greetings',
    deckId: 'deck-assamese-1',
    vocabulary: [
        { word: 'নমস্কাৰ', romanization: 'Nomoskar', definition: 'Hello/Greetings', ipa: '/nɔmɔskar/' },
        { word: 'ধন্যবাদ', romanization: 'Dhonyobad', definition: 'Thank you', ipa: '/dʱonjobad/' },
        { word: 'আপোনাৰ নাম কি', romanization: 'Apunar nam ki?', definition: 'What is your name?', ipa: '' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Nomoskar, apuni bhalne?' }, { speaker: 'Server', line: 'Moi bhale asu, dhonyobad.' }],
    culturalTip: 'A respectful greeting is highly valued in Assamese culture. "Nomoskar" is a versatile greeting for any time of day.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you say "Hello" in Assamese?', options: ['Dhonyobad', 'Nomoskar', 'Ki khobor', 'Bhal'], answer: 'Nomoskar' }],
    followUp: 'Try greeting someone with "Nomoskar" today!'
  },
  {
    id: 'lesson-assamese-2',
    title: 'Lesson 2: Common Nouns',
    deckId: 'deck-assamese-2',
    vocabulary: [
        { word: 'পানী', romanization: 'Pani', definition: 'Water', ipa: '/pani/' },
        { word: 'চাহ', romanization: 'Sah', definition: 'Tea', ipa: '/sah/' },
        { word: 'ভাত', romanization: 'Bhaat', definition: 'Rice', ipa: '/bʱat/' },
    ],
    dialogue: [{ speaker: 'Customer', line: ' মোক একাপ চাহ দিয়কচোন। (Mok ekap sah diyokson.)' }, { speaker: 'Server', line: 'নিশ্চয়, এইয়া লওক। (Niswoi, eiya look.)' }],
    culturalTip: 'Tea ("Sah") is an integral part of Assamese culture, with Assam being one of the largest tea-producing regions in the world.',
    quizzes: [{ type: 'fill-in-the-blank', question: 'To ask for tea, you would say "ekap ____".', answer: 'sah' }],
    followUp: 'Ask for a glass of "pani" next time you are thirsty.'
  },
  {
    id: 'lesson-assamese-3',
    title: 'Lesson 3: Simple Questions',
    deckId: 'deck-assamese-3',
    vocabulary: [
        { word: 'কেনে আছে', romanization: 'Kene ase?', definition: 'How are you?', ipa: '' },
        { word: 'দাম কিমান', romanization: 'Dam kiman?', definition: 'What is the price?', ipa: '' },
        { word: 'হয়', romanization: 'Hoi', definition: 'Yes', ipa: '/hɔi/' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Iyar dam kiman?' }, { speaker: 'Server', line: 'Pos-ponas toka.' }],
    culturalTip: 'Bargaining is common in local markets, so knowing "Dam kiman?" is very useful.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you ask "How are you?"', options: ['Dam kiman?', 'Hoi', 'Kene ase?', 'Nomoskar'], answer: 'Kene ase?' }],
    followUp: 'Practice asking for the price of an item at a shop.'
  },
  // Intermediate
  {
    id: 'lesson-assamese-4',
    title: 'Lesson 4: Tenses and Verbs',
    deckId: 'deck-assamese-4',
    vocabulary: [
        { word: 'মই যাওঁ', romanization: 'Moi jaü', definition: 'I go', ipa: '' },
        { word: 'মই গৈছিলোঁ', romanization: 'Moi goisilu', definition: 'I went', ipa: '' },
        { word: 'মই যাম', romanization: 'Moi jam', definition: 'I will go', ipa: '' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Moi juwakali Guwahati goisilu.' }, { speaker: 'Server', line: 'Bohut bhal! Apuni kalile goisile?' }],
    culturalTip: 'Verb conjugations in Assamese change based on tense and level of respect.',
    quizzes: [{ type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Moi jam', 'Moi jaü', 'Moi goisilu', 'Moi kham'], answer: 'Moi goisilu' }],
    followUp: 'Try forming a sentence about what you did yesterday.'
  },
  {
    id: 'lesson-assamese-5',
    title: 'Lesson 5: Shopping Dialogue',
    deckId: 'deck-assamese-5',
    vocabulary: [
        { word: 'মোৰ এইটো লাগে', romanization: 'Mor eitu lage', definition: 'I want this one.', ipa: '' },
        { word: 'বেলেগ কিবা আছে নেকি', romanization: 'Beleg kiba ase neki?', definition: 'Do you have anything else?', ipa: '' },
        { word: 'ঠিক আছে', romanization: 'Thik ase', definition: 'It\'s okay / Alright', ipa: '/tʰik asɛ/' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Mor eitu gamusa lage. Beleg design ase neki?' }, { speaker: 'Server', line: 'Hoi, ase. Eiya saokson.' }],
    culturalTip: 'The Gamosa is a traditional Assamese cloth that is a symbol of respect and is often given as a gift.',
    quizzes: [{ type: 'fill-in-the-blank', question: 'To say "I want this one", you say "Mor ____ lage".', answer: 'eitu' }],
    followUp: 'Practice a short shopping conversation with a friend.'
  },
  // Advanced
  {
    id: 'lesson-assamese-6',
    title: 'Lesson 6: Complex Topics',
    deckId: 'deck-assamese-6',
    vocabulary: [
        { word: 'পৰিবেশ', romanization: 'Poribekh', definition: 'Environment', ipa: '' },
        { word: 'অৰ্থনীতি', romanization: 'Orthoniti', definition: 'Economy', ipa: '' },
        { word: 'সংস্কৃতি', romanization: 'Sanskriti', definition: 'Culture', ipa: '' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Axomor orthoniti krixir uporot bohut nirbhorxil.' }, { speaker: 'Server', line: 'Hoi, aru porjyoton khetrotu Axomor sanskriti ek bixex sthan adhikar kore.' }],
    culturalTip: 'Assam\'s economy is heavily based on agriculture and oil, while its rich culture is a major driver of tourism.',
    quizzes: [{ type: 'multiple-choice', question: 'What is the Assamese word for "Culture"?', options: ['Poribekh', 'Orthoniti', 'Sanskriti', 'Itihas'], answer: 'Sanskriti' }],
    followUp: 'Try to read a short article in Assamese about the environment.'
  },
  {
    id: 'lesson-assamese-7',
    title: 'Lesson 7: Formal Language',
    deckId: 'deck-assamese-7',
    vocabulary: [
        { word: 'অনুগ্রহ কৰি', romanization: 'Onugroho kori', definition: 'Please (formal)', ipa: '' },
        { word: 'মই কৃতজ্ঞ', romanization: 'Moi kritoggo', definition: 'I am grateful', ipa: '' },
        { word: 'আপোনাক লগ পাই ভাল লাগিল', romanization: 'Apunak log pai bhal lagil', definition: 'It was nice to meet you', ipa: '' },
    ],
    dialogue: [{ speaker: 'Customer', line: 'Onugroho kori, apuni muk xohai koribo paribo ne?' }, { speaker: 'Server', line: 'Niswoi. Apunak log pai bhal lagil.' }],
    culturalTip: 'Using formal language is important when addressing elders or in professional settings.',
    quizzes: [{ type: 'multiple-choice', question: 'What is the formal way to say "Please"?', options: ['Kripaya', 'Onugroho kori', 'Doya kori', 'Anurodh'], answer: 'Onugroho kori' }],
    followUp: 'Practice using formal phrases when speaking to someone you respect.'
  },
];

const genericLesson: Omit<MicroLesson, 'id' | 'title' | 'deckId'> = {
    vocabulary: [
        { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməˈsteː/' },
        { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/dʱən.jə.ʋɑːd̪/' },
        { word: 'हाँ', romanization: 'Haan', definition: 'Yes', ipa: '/hɑ̃ː/' },
        { word: 'नहीं', romanization: 'Nahin', definition: 'No', ipa: '/nəɦĩː/' },
        { word: 'कृपया', romanization: 'Kripaya', definition: 'Please', ipa: '/kɾɪpəjɑː/' },
    ],
    dialogue: [
        { speaker: 'Customer', line: 'Namaste! Ek paani ki botal, kripaya.' },
        { speaker: 'Server', line: 'Ji, zaroor. Aur kuch?' },
        { speaker: 'Customer', line: 'Nahin, bas yahi. Dhanyavaad.' },
    ],
    culturalTip: 'A slight head wobble is a common gesture in India that can mean "yes", "good", or "I understand".',
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'How do you say "Yes" in Hindi?',
            options: ['Nahin', 'Haan', 'Kripaya', 'Dhanyavaad'],
            answer: 'Haan',
        },
        {
            type: 'fill-in-the-blank',
            question: 'To say "Thank you", you would say ____.',
            answer: 'Dhanyavaad',
        }
    ],
    followUp: 'Try greeting a friend with "Namaste" today!'
};

export const allLessonDecks: LessonDeck[] = languages.flatMap(lang => {
  const decks: LessonDeck[] = [];
  let deckCounter = 1;
  
  (Object.keys(levels) as Array<keyof typeof levels>).forEach(level => {
    for (let i = 0; i < levels[level]; i++) {
        const langCapitalized = lang.charAt(0).toUpperCase() + lang.slice(1);
        decks.push({
            id: `deck-${lang}-${deckCounter}`,
            title: deckTemplates[level][i].title.replace('{Language}', langCapitalized),
            description: deckTemplates[level][i].description.replace('{Language}', langCapitalized),
            level: level,
            lessons: [{ id: `lesson-${lang}-${deckCounter}`, title: `Lesson ${deckCounter}`, duration: '3-5 min' }]
        });
        deckCounter++;
    }
  });

  return decks;
}).concat([
    {
      id: 'deck-bh-1',
      title: 'Chennai Café Conversation',
      description: 'Real-world conversations and vocabulary for ordering food and drinks.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-1', title: 'Ordering a Coffee', duration: '2-3 min' }]
    },
    {
      id: 'deck-bh-2',
      title: 'Office Meetings',
      description: 'Learn key phrases for participating in professional meetings.',
      level: 'Intermediate',
      lessons: [{ id: 'lesson-bh-2', title: 'Presenting a Report', duration: '4-6 min' }]
    },
    {
      id: 'deck-bh-3',
      title: 'Professional Phone Calls',
      description: 'Master etiquette and vocabulary for phone conversations in a business context.',
      level: 'Advanced',
      lessons: [{ id: 'lesson-bh-3', title: 'Scheduling an Appointment', duration: '3-5 min' }]
    }
]);


const populatedLessons: MicroLesson[] = allLessonDecks
    .filter(deck => !deck.id.startsWith('deck-assamese-') && !deck.id.startsWith('deck-bh-'))
    .flatMap(deck => 
        deck.lessons.map(lesson => ({
            ...genericLesson,
            id: lesson.id,
            title: lesson.title,
            deckId: deck.id,
        }))
);


export const allMicroLessons: MicroLesson[] = [
    // Business Hindi
    {
        id: 'lesson-bh-1',
        title: 'Ordering a Coffee',
        deckId: 'deck-bh-1',
        vocabulary: [
            { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməˈsteː/' },
            { word: 'एक', romanization: 'Ek', definition: 'One', ipa: '/eːk/' },
            { word: 'कॉफ़ी', romanization: 'Coffee', definition: 'Coffee', ipa: '/kɔː.fiː/' },
            { word: 'और', romanization: 'Aur', definition: 'And', ipa: '/ɔːɾ/' },
            { word: 'बिल', romanization: 'Bil', definition: 'Bill', ipa: '/bɪl/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste! Ek filter coffee, कृपया (kripaya).' },
            { speaker: 'Server', line: 'Ji, zaroor. Aur kuch?' },
            { speaker: 'Customer', line: 'Bas yahi. Bill de dijiye, dhanyavaad.' },
        ],
        culturalTip: 'In Chennai, while Tamil is the primary language, using Hindi in business settings is often appreciated. A friendly "Namaste" is a universal sign of respect.',
        quizzes: [
            {
                type: 'multiple-choice',
                question: 'How do you say "One coffee" in Hindi?',
                options: ['Do coffee', 'Ek coffee', 'Teen coffee', 'Chai'],
                answer: 'Ek coffee',
            },
            {
                type: 'fill-in-the-blank',
                question: 'To ask for the bill, you would say: "____ de dijiye."',
                answer: 'Bill',
            }
        ],
        followUp: 'Next time you\'re at a café, try greeting the server with "Namaste!"'
    },
    {
      id: 'lesson-bh-2',
      title: 'Presenting a Report',
      deckId: 'deck-bh-2',
      ...genericLesson,
      vocabulary: [
        { word: 'प्रस्तुति', romanization: 'Prastuti', definition: 'Presentation', ipa:'' },
        { word: 'रिपोर्ट', romanization: 'Report', definition: 'Report', ipa:''},
        { word: 'आंकड़े', romanization: 'Aankde', definition: 'Data / Figures', ipa:''},
      ]
    },
    {
      id: 'lesson-bh-3',
      title: 'Scheduling an Appointment',
      deckId: 'deck-bh-3',
      ...genericLesson,
      vocabulary: [
          { word: 'समय', romanization: 'Samay', definition: 'Time', ipa:'' },
          { word: 'मिलना', romanization: 'Milna', definition: 'To meet', ipa:'' },
          { word: 'नियुक्ति', romanization: 'Niyukti', definition: 'Appointment', ipa:'' },
      ]
    },
    ...assameseLessons,
    ...populatedLessons,
];

export const liveClasses: LiveClass[] = [
    {
        id: 'lc-1',
        topic: 'Mastering Hindi Tenses',
        description: 'An interactive session focusing on past, present, and future tenses with live Q&A.',
        instructor: 'Priya Sharma',
        instructorAvatar: 'https://picsum.photos/100/100?a=2',
        startTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 mins ago
        endTime: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // in 30 mins
    },
    {
        id: 'lc-2',
        topic: 'Advanced Bengali Vocabulary for WBCS',
        description: 'A deep dive into complex vocabulary and synonyms for competitive exam aspirants.',
        instructor: 'Dr. Arnab Basu',
        instructorAvatar: 'https://picsum.photos/100/100?a=11',
        startTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // in 2 hours
        endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // in 3 hours
    },
    {
        id: 'lc-3',
        topic: 'Tamil for Travelers: A Cultural Guide',
        description: 'Learn essential phrases and cultural etiquette for your next trip to Tamil Nadu.',
        instructor: 'Meena Krishnan',
        instructorAvatar: 'https://picsum.photos/100/100?a=12',
        startTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // tomorrow
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(),
    },
     {
        id: 'lc-4',
        topic: 'Doubt Clearing Session: Marathi Grammar',
        description: 'Bring your questions about Marathi grammar and get them answered by an expert.',
        instructor: 'Sameer Joshi',
        instructorAvatar: 'https://picsum.photos/100/100?a=13',
        startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // in 2 days
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(),
    },
];

export const circlePosts: Omit<CirclePost, 'id'>[] = [
  {
    circleId: 'circle-1',
    authorId: 'user-2',
    authorName: 'Priya Sharma',
    authorAvatarUrl: 'https://picsum.photos/100/100?a=2',
    content: 'Struggling with problems related to moment of inertia. Can anyone share some good resources or a simple way to remember the theorems?',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isPinned: true,
    reactions: { madeMeSmile: ['user-4'], helpful: ['user-1', 'user-3'], interesting: [] },
    comments: [
      { id: 'comment-1', authorId: 'user-4', authorName: 'Arjun Krishnan', authorAvatarUrl: 'https://picsum.photos/100/100?a=4', content: 'The Parallel Axis Theorem is key! Remember it as I = I_cm + Md^2. I found a great video on it, will share the link.', createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString() }
    ]
  },
  {
    circleId: 'circle-1',
    authorId: 'user-1',
    authorName: 'Alex',
    authorAvatarUrl: 'https://picsum.photos/100/100?a=1',
    content: '[quiz]\nWhich of the following has the highest moment of inertia for the same mass and radius?\nA solid sphere, A hollow sphere, A solid cylinder, A circular disk\nHollow sphere\nThe more mass is distributed away from the axis of rotation, the higher the moment of inertia. A hollow sphere has all its mass at the maximum distance (the radius).',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    isPinned: false,
    reactions: { madeMeSmile: [], helpful: ['user-2'], interesting: ['user-4', 'user-3'] },
    comments: []
  },
];
