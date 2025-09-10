
import type { User, Flashcard, Lesson, LessonDeck, MicroLesson, CompanionCircle, LiveClass, CirclePost, LessonPlanWeek } from './types';
import { learnerPersonas } from './personas';

// Import all language-specific data
import { assameseDecks, assameseLessons } from './lessons/assamese';
import { bengaliDecks, bengaliLessons } from './lessons/bengali';
import { bodoDecks, bodoLessons } from './lessons/bodo';
import { businessHindiDecks, businessHindiLessons } from './lessons/business-hindi';
import { dogriDecks, dogriLessons } from './lessons/dogri';
import { gujaratiDecks, gujaratiLessons } from './lessons/gujarati';
import { hindiDecks, hindiLessons } from './lessons/hindi';
import { kannadaDecks, kannadaLessons } from './lessons/kannada';
import { kashmiriDecks, kashmiriLessons } from './lessons/kashmiri';
import { konkaniDecks, konkaniLessons } from './lessons/konkani';
import { maithiliDecks, maithiliLessons } from './lessons/maithili';
import { malayalamDecks, malayalamLessons } from './lessons/malayalam';
import { manipuriDecks, manipuriLessons } from './lessons/manipuri';
import { marathiDecks, marathiLessons } from './lessons/marathi';
import { nepaliDecks, nepaliLessons } from './lessons/nepali';
import { odiaDecks, odiaLessons } from './lessons/odia';
import { punjabiDecks, punjabiLessons } from './lessons/punjabi';
import { sanskritDecks, sanskritLessons } from './lessons/sanskrit';
import { santaliDecks, santaliLessons } from './lessons/santali';
import { sindhiDecks, sindhiLessons } from './lessons/sindhi';
import { tamilDecks, tamilLessons } from './lessons/tamil';
import { teluguDecks, teluguLessons } from './lessons/telugu';
import { urduDecks, urduLessons } from './lessons/urdu';

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
    audioUrl: '',
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
    audioUrl: '',
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
    audioUrl: '',
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
    audioUrl: '',
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
    audioUrl: '',
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
    audioUrl: '',
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

export const allLessonDecks: LessonDeck[] = [
    ...assameseDecks,
    ...bengaliDecks,
    ...bodoDecks,
    ...businessHindiDecks,
    ...dogriDecks,
    ...gujaratiDecks,
    ...hindiDecks,
    ...kannadaDecks,
    ...kashmiriDecks,
    ...konkaniDecks,
    ...maithiliDecks,
    ...malayalamDecks,
    ...manipuriDecks,
    ...marathiDecks,
    ...nepaliDecks,
    ...odiaDecks,
    ...punjabiDecks,
    ...sanskritDecks,
    ...santaliDecks,
    ...sindhiDecks,
    ...tamilDecks,
    ...teluguDecks,
    ...urduDecks,
];

export const allMicroLessons: MicroLesson[] = [
    ...assameseLessons,
    ...bengaliLessons,
    ...bodoLessons,
    ...businessHindiLessons,
    ...dogriLessons,
    ...gujaratiLessons,
    ...hindiLessons,
    ...kannadaLessons,
    ...kashmiriLessons,
    ...konkaniLessons,
    ...maithiliLessons,
    ...malayalamLessons,
    ...manipuriLessons,
    ...marathiLessons,
    ...nepaliLessons,
    ...odiaLessons,
    ...punjabiLessons,
    ...sanskritLessons,
    ...santaliLessons,
    ...sindhiLessons,
    ...tamilLessons,
    ...teluguLessons,
    ...urduLessons,
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
