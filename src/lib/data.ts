

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

export const businessHindiLessonDecks: LessonDeck[] = [
    {
      id: 'deck-bh-1',
      title: 'Chennai Café Conversation',
      description: 'Real-world conversations and vocabulary for ordering food and drinks.',
      level: 'Foundations',
      lessons: [
        {
          id: 'lesson-bh-1',
          title: 'Ordering a Coffee',
          duration: '2-3 min',
        }
      ],
    },
    {
      id: 'deck-bh-2',
      title: 'Office Meetings',
      description: 'Learn key phrases for participating in professional meetings.',
      level: 'Intermediate',
      lessons: [],
    },
    {
      id: 'deck-bh-3',
      title: 'Professional Phone Calls',
      description: 'Master etiquette and vocabulary for phone conversations in a business context.',
      level: 'Advanced',
      lessons: [],
    }
];

export const allLessonDecks: LessonDeck[] = [
  // Hindi
  { id: 'deck-hindi-1', title: 'Delhi Market Bargaining', description: 'Learn to haggle like a local!', level: 'Foundations', lessons: [{ id: 'lesson-hindi-1', title: 'Buying Souvenirs', duration: '2-3 min' }]},
  { id: 'deck-hindi-2', title: 'Giving a Rickshaw Driver Directions', description: 'Navigate the city with confidence.', level: 'Intermediate', lessons: [{ id: 'lesson-hindi-2', title: 'From Connaught Place to India Gate', duration: '3-4 min' }]},
  
  // Bengali
  { id: 'deck-bengali-1', title: 'Kolkata Sweet Shop', description: 'Order famous Bengali sweets.', level: 'Foundations', lessons: [{ id: 'lesson-bengali-1', title: 'Ordering Mishti', duration: '2-3 min' }]},
  { id: 'deck-bengali-2', title: 'Discussing Football at a Tea Stall', description: 'Chat about Mohun Bagan vs East Bengal.', level: 'Intermediate', lessons: [{ id: 'lesson-bengali-2', title: 'Passion for Football', duration: '4-5 min' }]},

  // Telugu
  { id: 'deck-telugu-1', title: 'Hyderabad Biryani House', description: 'Savoring the famous Hyderabadi biryani.', level: 'Foundations', lessons: [{ id: 'lesson-telugu-1', title: 'Ordering Biryani', duration: '2-3 min' }]},
  { id: 'deck-telugu-2', title: 'Talking about a Telugu Movie', description: 'Discussing the latest blockbuster.', level: 'Intermediate', lessons: [{ id: 'lesson-telugu-2', title: 'Movie Review Chat', duration: '4-5 min' }]},

  // Marathi
  { id: 'deck-marathi-1', title: 'Mumbai Local Train', description: 'Navigating the bustling local trains.', level: 'Foundations', lessons: [{ id: 'lesson-marathi-1', title: 'Asking for Directions', duration: '2-3 min' }]},
  { id: 'deck-marathi-2', title: 'Discussing Ganesh Chaturthi Plans', description: 'Chat about festival preparations.', level: 'Intermediate', lessons: [{ id: 'lesson-marathi-2', title: 'Festival Preparations', duration: '3-4 min' }]},

  // Tamil
  { id: 'deck-tamil-1', title: 'Chennai Silk Saree Shopping', description: 'Experience traditional shopping.', level: 'Foundations', lessons: [{ id: 'lesson-tamil-1', title: 'Buying a Saree', duration: '2-3 min' }]},
  { id: 'deck-tamil-2', title: 'At a Carnatic Music Concert', description: 'Appreciating classical music.', level: 'Intermediate', lessons: [{ id: 'lesson-tamil-2', title: 'Praising a Performance', duration: '3-4 min' }]},

  // Gujarati
  { id: 'deck-gujarati-1', title: 'Ahmedabad Kite Festival', description: 'Enjoy the vibrant Uttarayan festival.', level: 'Foundations', lessons: [{ id: 'lesson-gujarati-1', title: 'Flying Kites', duration: '2-3 min' }]},
  { id: 'deck-gujarati-2', title: 'Planning a Garba Night', description: 'Discussing Navratri festivities.', level: 'Intermediate', lessons: [{ id: 'lesson-gujarati-2', title: 'Garba Practice', duration: '3-4 min' }]},

  // Urdu
  { id: 'deck-urdu-1', title: 'Lucknow Poetry Gathering', description: 'Immerse in the world of Shayari.', level: 'Foundations', lessons: [{ id: 'lesson-urdu-1', title: 'Appreciating Poetry', duration: '2-3 min' }]},
  { id: 'deck-urdu-2', title: 'Ordering Kebabs at Tunday Kababi', description: 'A culinary delight in Lucknow.', level: 'Intermediate', lessons: [{ id: 'lesson-urdu-2', title: 'Foodie Conversation', duration: '3-4 min' }]},

  // Kannada
  { id: 'deck-kannada-1', title: 'Bengaluru Tech Park Cafe', description: 'Conversations in a modern cafe.', level: 'Foundations', lessons: [{ id: 'lesson-kannada-1', title: 'Tech Talk over Coffee', duration: '2-3 min' }]},
  { id: 'deck-kannada-2', title: 'Visiting Lalbagh Botanical Garden', description: 'Discussing nature and flowers.', level: 'Intermediate', lessons: [{ id: 'lesson-kannada-2', title: 'A Walk in the Park', duration: '3-4 min' }]},

  // Malayalam
  { id: 'deck-malayalam-1', title: 'Kerala Backwaters Houseboat', description: 'Relaxing on the serene backwaters.', level: 'Foundations', lessons: [{ id: 'lesson-malayalam-1', title: 'Talking to the Boatman', duration: '2-3 min' }]},
  { id: 'deck-malayalam-2', title: 'Celebrating Onam Sadhya', description: 'A traditional feast.', level: 'Intermediate', lessons: [{ id: 'lesson-malayalam-2', title: 'About the Sadhya', duration: '4-5 min' }]},

  // Odia
  { id: 'deck-odia-1', title: 'Puri Beach Handicrafts', description: 'Buying local crafts by the sea.', level: 'Foundations', lessons: [{ id: 'lesson-odia-1', title: 'Shopping for Handicrafts', duration: '2-3 min' }]},
  { id: 'deck-odia-2', title: 'Visiting the Konark Sun Temple', description: 'Discussing history and architecture.', level: 'Intermediate', lessons: [{ id: 'lesson-odia-2', title: 'An Architectural Marvel', duration: '4-5 min' }]},
  
  // Punjabi
  { id: 'deck-punjabi-1', title: 'Amritsar Langar Seva', description: 'Volunteering at the Golden Temple.', level: 'Foundations', lessons: [{ id: 'lesson-punjabi-1', title: 'Serving at Langar', duration: '2-3 min' }]},
  { id: 'deck-punjabi-2', title: 'A Bhangra Practice Session', description: 'Learning the energetic dance form.', level: 'Intermediate', lessons: [{ id: 'lesson-punjabi-2', title: 'Lets Dance!', duration: '3-4 min' }]},

  // Assamese
  { id: 'deck-assamese-1', title: 'Guwahati Bihu Festival', description: 'Celebrating the Assamese New Year.', level: 'Foundations', lessons: [{ id: 'lesson-assamese-1', title: 'Enjoying Bihu', duration: '2-3 min' }]},
  { id: 'deck-assamese-2', title: 'A Visit to Kaziranga National Park', description: 'Spotting the one-horned rhino.', level: 'Intermediate', lessons: [{ id: 'lesson-assamese-2', title: 'Wildlife Safari', duration: '4-5 min' }]},
  
  // Stubs for other languages
  { id: 'deck-bodo-1', title: 'Bodo Village Visit', description: 'Exploring local life.', level: 'Foundations', lessons: [{id: 'lesson-bodo-1', title: 'Greetings', duration: '2-3 min'}] },
  { id: 'deck-dogri-1', title: 'Jammu Temple Visit', description: 'A spiritual journey.', level: 'Foundations', lessons: [{id: 'lesson-dogri-1', title: 'At the Temple', duration: '2-3 min'}] },
  { id: 'deck-kashmiri-1', title: 'Srinagar Shikara Ride', description: 'Floating on Dal Lake.', level: 'Foundations', lessons: [{id: 'lesson-kashmiri-1', title: 'On the Shikara', duration: '2-3 min'}] },
  { id: 'deck-konkani-1', title: 'Goa Fish Market', description: 'The fresh catch of the day.', level: 'Foundations', lessons: [{id: 'lesson-konkani-1', title: 'Buying Fish', duration: '2-3 min'}] },
  { id: 'deck-maithili-1', title: 'Madhubani Art Village', description: 'Discovering ancient art.', level: 'Foundations', lessons: [{id: 'lesson-maithili-1', title: 'Learning about Art', duration: '2-3 min'}] },
  { id: 'deck-manipuri-1', title: 'Imphal Market Shopping', description: 'The famous Ima Keithel.', level: 'Foundations', lessons: [{id: 'lesson-manipuri-1', title: 'At the Market', duration: '2-3 min'}] },
  { id: 'deck-nepali-1', title: 'Darjeeling Tea Estate', description: 'From leaf to cup.', level: 'Foundations', lessons: [{id: 'lesson-nepali-1', title: 'Tea Tasting', duration: '2-3 min'}] },
  { id: 'deck-sanskrit-1', title: 'Varanasi Morning Chants', description: 'Spiritual beginnings.', level: 'Foundations', lessons: [{id: 'lesson-sanskrit-1', title: 'Morning Prayers', duration: '2-3 min'}] },
  { id: 'deck-santali-1', title: 'Santal Village Festival', description: 'Celebrating community.', level: 'Foundations', lessons: [{id: 'lesson-santali-1', title: 'Festival Greetings', duration: '2-3 min'}] },
  { id: 'deck-sindhi-1', title: 'Ulhasnagar Jhulelal Celebration', description: 'A vibrant festival.', level: 'Foundations', lessons: [{id: 'lesson-sindhi-1', title: 'Festival Fun', duration: '2-3 min'}] },
  ...businessHindiLessonDecks
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

const populatedLessons: MicroLesson[] = allLessonDecks.flatMap(deck => 
    deck.lessons.map(lesson => ({
        ...genericLesson,
        id: lesson.id,
        title: lesson.title,
        deckId: deck.id,
    }))
).filter(lesson => lesson.id !== 'lesson-bh-1');


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
