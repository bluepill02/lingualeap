
import type { User, Lesson, Flashcard, LessonDeck, MicroLesson, CompanionCircle, LiveClass } from './types';
import { learnerPersonas } from './personas';

export const mockUser: User = {
  id: 'user-1',
  name: 'Alex',
  email: 'alex@example.com',
  avatarUrl: 'https://picsum.photos/100/100?a=1',
  streak: 12,
  language: 'Hindi',
  timezone: 'America/New_York',
  isPro: false,
  proficiency: 'Beginner',
  goals: ['Travel', 'Career'],
  persona: learnerPersonas[0].type,
};

export const allUsers: User[] = [
    mockUser,
    { id: 'user-2', name: 'Priya', email: 'priya@example.com', avatarUrl: 'https://picsum.photos/100/100?a=2', streak: 25, language: 'Hindi', timezone: 'Asia/Kolkata', isPro: true, proficiency: 'Intermediate', goals: ['Career', 'Exams'], persona: learnerPersonas[1].type },
    { id: 'user-3', name: 'Chen', email: 'chen@example.com', avatarUrl: 'https://picsum.photos/100/100?a=3', streak: 5, language: 'Hindi', timezone: 'Asia/Shanghai', isPro: false, proficiency: 'Beginner', goals: ['Culture', 'Travel'], persona: learnerPersonas[2].type },
    { id: 'user-4', name: 'Maria', email: 'maria@example.com', avatarUrl: 'https://picsum.photos/100/100?a=4', streak: 50, language: 'Hindi', timezone: 'Europe/Madrid', isPro: true, proficiency: 'Advanced', goals: ['Culture', 'Mentorship'], persona: learnerPersonas[3].type },
    { id: 'user-5', name: 'David', email: 'david@example.com', avatarUrl: 'https://picsum.photos/100/100?a=5', streak: 2, language: 'Hindi', timezone: 'America/New_York', isPro: false, proficiency: 'Beginner', goals: ['Travel'], persona: learnerPersonas[0].type },
    { id: 'user-6', name: 'Fatima', email: 'fatima@example.com', avatarUrl: 'https://picsum.photos/100/100?a=6', streak: 15, language: 'Hindi', timezone: 'Asia/Dubai', isPro: true, proficiency: 'Intermediate', goals: ['Career'], persona: learnerPersonas[1].type },
    { id: 'user-7', name: 'Kenji', email: 'kenji@example.com', avatarUrl: 'https://picsum.photos/100/100?a=7', streak: 8, language: 'Hindi', timezone: 'Asia/Tokyo', isPro: false, proficiency: 'Beginner', goals: ['Culture'], persona: learnerPersonas[2].type },
    { id: 'user-8', name: 'Sofia', email: 'sofia@example.com', avatarUrl: 'https://picsum.photos/100/100?a=8', streak: 100, language: 'Hindi', timezone: 'Europe/Lisbon', isPro: true, proficiency: 'Advanced', goals: ['Mentorship', 'Culture'], persona: learnerPersonas[3].type },
    { id: 'user-9', name: 'Liam', email: 'liam@example.com', avatarUrl: 'https://picsum.photos/100/100?a=9', streak: 1, language: 'Hindi', timezone: 'America/Los_Angeles', isPro: false, proficiency: 'Beginner', goals: ['Travel'], persona: learnerPersonas[0].type },
    { id: 'user-10', name: 'Aarav', email: 'aarav@example.com', avatarUrl: 'https://picsum.photos/100/100?a=10', streak: 30, language: 'Hindi', timezone: 'Asia/Kolkata', isPro: true, proficiency: 'Intermediate', goals: ['Exams'], persona: learnerPersonas[1].type },
];


export const companionCircle: CompanionCircle = {
  id: 'circle-1',
  members: [
    mockUser,
    allUsers[1],
    allUsers[2],
    allUsers[3],
    allUsers[4],
  ],
  leaderId: 'user-2',
}

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
    // Assamese
    {
        id: 'lesson-assamese-1',
        title: 'Enjoying Bihu',
        deckId: 'deck-assamese-1',
        vocabulary: [
            { word: 'নমস্কাৰ', romanization: 'Nomoskar', definition: 'Hello/Greetings', ipa: '/nɔmɔskar/' },
            { word: 'পিঠা', romanization: 'Pitha', definition: 'A traditional rice cake', ipa: '/pitha/' },
            { word: 'বিহু', romanization: 'Bihu', definition: 'Assamese festival', ipa: '/bihu/' },
            { word: 'ধুনীয়া', romanization: 'Dhuniya', definition: 'Beautiful', ipa: '/dʱunia/' },
            { word: 'ধন্যবাদ', romanization: 'Dhonyobad', definition: 'Thank you', ipa: '/dʱɔnːɔbad/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Nomoskar! Bihu’r hubhessa jonalu. Pitha khub dhuniya lagise.' },
            { speaker: 'Server', line: 'Dhonyobad! Apunio lobo neki? Gorom gorom pitha ase.' },
            { speaker: 'Customer', line: 'Hoi, olop dioksun. Bohut bhal lagil khai.' },
        ],
        culturalTip: 'Bihu is the most important festival in Assam, celebrating the changing seasons. Offering "pitha" (rice cakes) is a key tradition showing hospitality.',
        quizzes: [
            { type: 'multiple-choice', question: 'What does "Dhuniya" mean?', options: ['Tasty', 'Festival', 'Beautiful', 'Rice cake'], answer: 'Beautiful' },
            { type: 'fill-in-the-blank', question: 'A traditional Assamese rice cake is called a ____.', answer: 'Pitha' },
        ],
        followUp: 'Try wishing someone "Bihu’r hubhessa" during the Bihu festival.'
    },
    // Bengali
    {
        id: 'lesson-bengali-1',
        title: 'Ordering Mishti',
        deckId: 'deck-bengali-1',
        vocabulary: [
            { word: 'নমস্কার', romanization: 'Nomoshkar', definition: 'Hello/Greetings', ipa: '/nɔmoʃkar/' },
            { word: 'মিষ্টি', romanization: 'Mishti', definition: 'Sweets', ipa: '/miʃti/' },
            { word: 'দোকান', romanization: 'Dokan', definition: 'Shop', ipa: '/d̪okan/' },
            { word: 'রসগোল্লা', romanization: 'Roshogolla', definition: 'A famous cheese-based sweet', ipa: '/rɔʃoɡolːa/' },
            { word: 'ধন্যবাদ', romanization: 'Dhonnobad', definition: 'Thank you', ipa: '/d̪ʱonːobad̪/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Nomoshkar. Ei dokan theke kichu mishti nite chai. Roshogolla ache?' },
            { speaker: 'Server', line: 'Hyan, ache. Kotogulo lagbe apnar? Taza banano hoyeche.' },
            { speaker: 'Customer', line: 'Ekdom! Amake paanch-ta din. Dhonnobad.' },
        ],
        culturalTip: 'Bengalis have a deep love for sweets ("Mishti"). Ending a meal with something sweet or offering it to guests is a cherished cultural practice.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is a "Roshogolla"?', options: ['A spicy snack', 'A type of bread', 'A famous sweet', 'A savory dish'], answer: 'A famous sweet' },
            { type: 'fill-in-the-blank', question: 'The Bengali word for shop is ____.', answer: 'Dokan' },
        ],
        followUp: 'Next time you visit a sweet shop, try asking for your favorite "mishti" by name.'
    },
    // Bodo
    {
        id: 'lesson-bodo-1',
        title: 'Greetings',
        deckId: 'deck-bodo-1',
        vocabulary: [
            { word: 'खुलुमबाय', romanization: 'Khulumbai', definition: 'Hello/Greetings', ipa: '/kʰulumbai/' },
            { word: 'माबोरै दं?', romanization: 'Maborai dong?', definition: 'How are you?', ipa: '/mabɔrai dɔŋ/' },
            { word: 'मोजां', romanization: 'Mojang', definition: 'Fine/Good', ipa: '/mɔzaŋ/' },
            { word: 'नोंनि मुङा मा?', romanization: 'Nonni munga ma?', definition: 'What is your name?', ipa: '/nɔnni muŋa ma/' },
            { word: 'आंनि मुङा...', romanization: 'Anni munga...', definition: 'My name is...', ipa: '/anni muŋa/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Khulumbai! Maborai dong?' },
            { speaker: 'Server', line: 'Khulumbai. Ang mojang, nonni maborai?' },
            { speaker: 'Customer', line: 'Ang bo mojang. Nonni munga ma?' },
        ],
        culturalTip: 'The Bodo people have a rich tradition of weaving, and their Aronai scarf is a symbol of love and respect, often presented to guests.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "How are you?" in Bodo?', options: ['Khulumbai', 'Mojang', 'Maborai dong?', 'Anni munga'], answer: 'Maborai dong?' },
            { type: 'fill-in-the-blank', question: 'To say "I am fine," you would say "Ang ____".', answer: 'Mojang' },
        ],
        followUp: 'Greet a Bodo speaker with a warm "Khulumbai!"'
    },
    // Dogri
    {
        id: 'lesson-dogri-1',
        title: 'At the Temple',
        deckId: 'deck-dogri-1',
        vocabulary: [
            { word: 'जै देवा', romanization: 'Jai Deva', definition: 'Greetings (in religious context)', ipa: '/dʒai d̪eva/' },
            { word: 'मंदर', romanization: 'Mandar', definition: 'Temple', ipa: '/məndər/' },
            { word: 'प्रसाद', romanization: 'Prasad', definition: 'Blessed food offering', ipa: '/prəsad̪/' },
            { word: 'किन्नी?', romanization: 'Kinni?', definition: 'How much?', ipa: '/kinːi/' },
            { word: 'धन्यवाद', romanization: 'Dhanyavad', definition: 'Thank you', ipa: '/d̪ʱənjəʋad̪/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Jai Deva. Mandar ch prasad kinni da milda?' },
            { speaker: 'Server', line: 'Jai Deva. Ek packet dus rupaiye da hai ji.' },
            { speaker: 'Customer', line: 'Theek hai, ek packet deai deyo. Dhanyavad.' },
        ],
        culturalTip: 'Jammu, a key region for Dogri speakers, is known as the "City of Temples." Pilgrimage is an important aspect of life for many.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is "Mandar"?', options: ['Offering', 'Temple', 'Thank you', 'Greetings'], answer: 'Temple' },
            { type: 'fill-in-the-blank', question: 'The blessed food offering at a temple is called ____.', answer: 'Prasad' },
        ],
        followUp: 'Use "Jai Deva" as a respectful greeting when visiting a temple in the Jammu region.'
    },
     // Gujarati
    {
        id: 'lesson-gujarati-1',
        title: 'Flying Kites',
        deckId: 'deck-gujarati-1',
        vocabulary: [
            { word: 'કેમ છો?', romanization: 'Kem chho?', definition: 'How are you?', ipa: '/kem tʃʰo/' },
            { word: 'પતંગ', romanization: 'Patang', definition: 'Kite', ipa: '/pətəŋɡ/' },
            { word: 'કાપ્યો છે!', romanization: 'Kaapyo chhe!', definition: 'I have cut (the kite)!', ipa: '/kapjo tʃʰɛ/' },
            { word: 'ફિરકી', romanization: 'Firki', definition: 'Spool of kite string', ipa: '/pʰirki/' },
            { word: 'મજા આવી ગઈ', romanization: 'Maja aavi gai', definition: 'Had a lot of fun', ipa: '/məja avi ɡəi/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Kem chho? Ek saro patang aney firki aapjo.' },
            { speaker: 'Server', line: 'Haan, aa lo. Aa patang khub saras udse.' },
            { speaker: 'Customer', line: 'Waah! Kaapyo chhe! Maja aavi gai.' },
        ],
        culturalTip: 'Uttarayan (Makar Sankranti) is a massive kite festival in Gujarat. People shout "Kaapyo chhe!" triumphantly when they cut another person\'s kite string.',
        quizzes: [
            { type: 'multiple-choice', question: 'What do you shout when you cut a kite?', options: ['Kem chho?', 'Patang', 'Kaapyo chhe!', 'Maja aavi gai'], answer: 'Kaapyo chhe!' },
            { type: 'fill-in-the-blank', question: 'A kite in Gujarati is called a ____.', answer: 'Patang' },
        ],
        followUp: 'Challenge a friend to a kite fight and be ready to yell "Kaapyo chhe!"'
    },
    // Hindi
    {
        id: 'lesson-hindi-1',
        title: 'Buying Souvenirs',
        deckId: 'deck-hindi-1',
        vocabulary: [
            { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməˈsteː/' },
            { word: 'यह कितने का है?', romanization: 'Yeh kitne ka hai?', definition: 'How much is this?', ipa: '/jeː kit̪neː kaː hɛː/' },
            { word: 'बहुत महंगा है', romanization: 'Bahut mahanga hai', definition: 'It is very expensive', ipa: '/bəɦʊt̪ mɛːɦɛŋɡaː hɛː/' },
            { word: 'कम करो', romanization: 'Kam karo', definition: 'Reduce (the price)', ipa: '/kəm kəroː/' },
            { word: 'ठीक है', romanization: 'Theek hai', definition: 'Okay', ipa: '/ʈʰiːk hɛː/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste. Yeh kitne ka hai?' },
            { speaker: 'Server', line: 'Yeh paanch sau rupaye ka hai, memsaab.' },
            { speaker: 'Customer', line: 'Bahut mahanga hai! Thoda kam karo. Theek hai, main le lungi.' },
        ],
        culturalTip: 'Bargaining is a common and expected practice in many markets in Delhi and across India. It\'s seen as a friendly negotiation, not an argument.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you ask for the price of an item?', options: ['Theek hai', 'Kam karo', 'Yeh kitne ka hai?', 'Namaste'], answer: 'Yeh kitne ka hai?' },
            { type: 'fill-in-the-blank', question: 'If something is too expensive, you can say "Bahut ____ hai".', answer: 'mahanga' },
        ],
        followUp: 'Next time you are shopping in a market, try to bargain politely using "Thoda kam karo".'
    },
    // Kannada
    {
        id: 'lesson-kannada-1',
        title: 'Tech Talk over Coffee',
        deckId: 'deck-kannada-1',
        vocabulary: [
            { word: 'ನಮಸ್ಕಾರ', romanization: 'Namaskara', definition: 'Hello/Greetings', ipa: '/nəməskɑːrə/' },
            { word: 'ಚೆನ್ನಾಗಿದ್ದೀರಾ?', romanization: 'Chennagiddeera?', definition: 'How are you?', ipa: '/tʃɛnːɑːɡid̪ːiːrɑː/' },
            { word: 'ಕಾಫಿ', romanization: 'Kaaphi', definition: 'Coffee', ipa: '/kɑːpʰi/' },
            { word: 'ಒಂದು', romanization: 'Ondu', definition: 'One', ipa: '/ondu/' },
            { word: 'ಧನ್ಯವಾದಗಳು', romanization: 'Dhanyavaadagalu', definition: 'Thank you', ipa: '/d̪ʱənjəʋɑːd̪əɡəɭu/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaskara, chennagiddeera? Ondu filter kaaphi kodi.' },
            { speaker: 'Server', line: 'Namaskara, sir. ಖಂಡಿತ (Khandita). Idheega tegisikond bartheeni.' },
            { speaker: 'Customer', line: 'Aytu, dhanyavaadagalu. Kaaphi chennagide.' },
        ],
        culturalTip: 'Bengaluru is famous for its filter coffee. Having "kaaphi" is an integral part of social and business meetings in the city\'s thriving tech scene.',
        quizzes: [
            { type: 'multiple-choice', question: 'What does "Ondu" mean in Kannada?', options: ['Two', 'Coffee', 'One', 'How'], answer: 'One' },
            { type: 'fill-in-the-blank', question: 'To ask "How are you?" in Kannada, you say "____?".', answer: 'Chennagiddeera' },
        ],
        followUp: 'Try ordering "Ondu filter kaaphi" the next time you are in a Bengaluru cafe.'
    },
    // Kashmiri
    {
        id: 'lesson-kashmiri-1',
        title: 'On the Shikara',
        deckId: 'deck-kashmiri-1',
        vocabulary: [
            { word: 'السلام علیکم', romanization: 'As-salamu alaykum', definition: 'Hello (Peace be upon you)', ipa: '/asalaːmu alaikum/' },
            { word: 'شِکارا', romanization: 'Shikara', definition: 'A traditional Kashmiri boat', ipa: '/ʃikaːraː/' },
            { word: 'واہ!', romanization: 'Waah!', definition: 'Wow!', ipa: '/waːh/' },
            { word: 'خوبصورت', romanization: 'Khoobsurat', definition: 'Beautiful', ipa: '/xuːbsuːrat/' },
            { word: 'شکریہ', romanization: 'Shukriya', definition: 'Thank you', ipa: '/ʃukrija/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'As-salamu alaykum. Yi Dal Lake chhu katyah khoobsurat.' },
            { speaker: 'Server', line: 'Wa-alaykumu-s-salam. Jee janab. Shikara gasaw?' },
            { speaker: 'Customer', line: 'Waah! Zaroor. Shukriya, bhaijaan.' },
        ],
        culturalTip: 'The Shikara ride on Dal Lake is an iconic Kashmiri experience. The boatmen often share stories and are a great source of local information.',
        quizzes: [
            { type: 'multiple-choice', question: 'A traditional Kashmiri boat is a ____.', options: ['Khoobsurat', 'Shikara', 'Waah', 'Shukriya'], answer: 'Shikara' },
            { type: 'fill-in-the-blank', question: 'To say something is beautiful, you can say it is ____.', answer: 'Khoobsurat' },
        ],
        followUp: 'Express your appreciation for the beauty of Kashmir with a heartfelt "Waah!"'
    },
    // Konkani
    {
        id: 'lesson-konkani-1',
        title: 'Buying Fish',
        deckId: 'deck-konkani-1',
        vocabulary: [
            { word: 'देव बरे करूं', romanization: 'Dev bare karun', definition: 'Hello/Greetings (May God do good)', ipa: '/d̪ɛv bəɾɛ kəɾũ/' },
            { word: 'नुस्तें', romanization: 'Nustem', definition: 'Fish', ipa: '/nustɛ̃/' },
            { word: 'कितल्याक?', romanization: 'Kitlyak?', definition: 'For how much?', ipa: '/kitljak/' },
            { word: 'ताजे', romanization: 'Taje', definition: 'Fresh', ipa: '/tadʒɛ/' },
            { word: 'देव बरे करूं', romanization: 'Dev bare karun', definition: 'Thank you', ipa: '/d̪ɛv bəɾɛ kəɾũ/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Dev bare karun. Aiz taje nustem assa?' },
            { speaker: 'Server', line: 'Hoi mai, ekdom taje assa. Ho wamso kitleak zai?' },
            { speaker: 'Customer', line: 'Ardho kilo di. Dev bare karun.' },
        ],
        culturalTip: 'Fish is a staple of Goan cuisine. The phrase "Dev bare karun" is a versatile blessing used for both greetings and expressing thanks.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you ask "For how much?"', options: ['Taje', 'Nustem', 'Dev bare karun', 'Kitlyak?'], answer: 'Kitlyak?' },
            { type: 'fill-in-the-blank', question: 'The Konkani word for fish is ____.', answer: 'Nustem' },
        ],
        followUp: 'Visit a Goan fish market and ask "Aiz taje nustem assa?" to inquire about the fresh catch.'
    },
     // Maithili
    {
        id: 'lesson-maithili-1',
        title: 'Learning about Art',
        deckId: 'deck-maithili-1',
        vocabulary: [
            { word: 'प्रणाम', romanization: 'Pranaam', definition: 'Hello/Greetings', ipa: '/prənaːm/' },
            { word: 'ई कतेक सुंदर अछि', romanization: 'Ee ketek sundar achhi', definition: 'This is so beautiful', ipa: '/iː kɛtɛk sundər ətʃʰi/' },
            { word: 'कला', romanization: 'Kala', definition: 'Art', ipa: '/kəlaː/' },
            { word: 'मिथिला पेंटिंग', romanization: 'Mithila Painting', definition: 'Madhubani Art', ipa: '/mithilaː peːnʈiŋ/' },
            { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/dʱənjavaːd/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Pranaam. Ee Mithila painting ke banelak? Ee ketek sundar achhi.' },
            { speaker: 'Server', line: 'Pranaam. Hamar aai banelani. Ee hamar paramparik kala achhi.' },
            { speaker: 'Customer', line: 'Bahut nik lagal. Dhanyavaad.' },
        ],
        culturalTip: 'Mithila or Madhubani painting is a famous art form from the Mithila region of Bihar, traditionally created by women on walls and floors.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Maithili word for "Art"?', options: ['Sundar', 'Kala', 'Painting', 'Pranaam'], answer: 'Kala' },
            { type: 'fill-in-the-blank', question: 'To say "This is so beautiful", you can say "Ee ____ ____ achhi".', answer: 'ketek sundar' },
        ],
        followUp: 'Appreciate a piece of Madhubani art by saying "Ee ketek sundar achhi."'
    },
    // Malayalam
    {
        id: 'lesson-malayalam-1',
        title: 'Talking to the Boatman',
        deckId: 'deck-malayalam-1',
        vocabulary: [
            { word: 'നമസ്കാരം', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '/nəməskɑːrəm/' },
            { word: 'സുഖമാണോ?', romanization: 'Sukhamano?', definition: 'How are you?', ipa: '/sukʰamɑːɳoː/' },
            { word: 'വള്ളം', romanization: 'Vallam', definition: 'Boat', ipa: '/ʋəɭːəm/' },
            { word: 'ഭംഗി', romanization: 'Bhangi', definition: 'Beauty/Beautiful', ipa: '/bʱəŋɡi/' },
            { word: 'നന്ദി', romanization: 'Nandi', definition: 'Thank you', ipa: '/nandi/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaskaram, chetta. Sukhamano? Ee sthalathinu enthoru bhangi aanu!' },
            { speaker: 'Server', line: 'Namaskaram, saare. Sukhamanu. Nammude Keralam sundaramalle?' },
            { speaker: 'Customer', line: 'Athe, vallam yathra nannayirikkunnu. Nandi.' },
        ],
        culturalTip: 'The backwaters of Kerala offer a unique experience of serene village life. Addressing the boatman respectfully as "Chetta" (elder brother) is a warm gesture.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "boat" in Malayalam?', options: ['Bhangi', 'Nandi', 'Sukhamano', 'Vallam'], answer: 'Vallam' },
            { type: 'fill-in-the-blank', question: 'The word for "Thank you" in Malayalam is ____.', answer: 'Nandi' },
        ],
        followUp: 'Compliment the beauty of Kerala by saying "Ee sthalathinu enthoru bhangi aanu!"'
    },
    // Manipuri (Meitei)
    {
        id: 'lesson-manipuri-1',
        title: 'At the Market',
        deckId: 'deck-manipuri-1',
        vocabulary: [
            { word: 'খুরুমজরি', romanization: 'Khurumjari', definition: 'Hello/Greetings', ipa: '/kʰuɾumdʒəɾi/' },
            { word: 'নুংঙাইবিরি?', romanization: 'Nungaibiri?', definition: 'How are you?', ipa: '/nuŋŋaibiri/' },
            { word: 'কৈথেল', romanization: 'Keithel', definition: 'Market', ipa: '/keitʰɛl/' },
            { word: 'যাম্না ফজেi', romanization: 'Yamna phajei', definition: 'Very beautiful', ipa: '/jamna pʰədʒei/' },
            { word: 'থাগৎচরি', romanization: 'Thagatchari', definition: 'Thank you', ipa: '/tʰaɡətʃəɾi/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Khurumjari, ima. Nungaibiri? Eise keithel asi yamna like touwi.' },
            { speaker: 'Server', line: 'Khurumjari. Eisu nungaibiri. Kari potchei loubage?' },
            { speaker: 'Customer', line: 'Aha, hand-woven phi asi yamna phajei. Thagatchari.' },
        ],
        culturalTip: 'Ima Keithel in Imphal is a unique market run exclusively by women ("Ima"). It\'s a symbol of women\'s empowerment and a hub of local culture.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is "Keithel"?', options: ['Hello', 'Market', 'Beautiful', 'Thank you'], answer: 'Market' },
            { type: 'fill-in-the-blank', question: 'To say "Very beautiful" you say "____ ____".', answer: 'Yamna phajei' },
        ],
        followUp: 'Address a senior woman vendor at Ima Keithel respectfully as "Ima".'
    },
    // Marathi
    {
        id: 'lesson-marathi-1',
        title: 'Asking for Directions',
        deckId: 'deck-marathi-1',
        vocabulary: [
            { word: 'नमस्कार', romanization: 'Namaskar', definition: 'Hello/Greetings', ipa: '/nəməskar/' },
            { word: 'पुढची स्टेशन', romanization: 'Pudhchi station', definition: 'Next station', ipa: '/pudʱtʃi steʃən/' },
            { word: 'लोकल', romanization: 'Local', definition: 'Local train', ipa: '/lokəl/' },
            { word: 'कुठे?', romanization: 'Kuthe?', definition: 'Where?', ipa: '/kutʰe/' },
            { word: 'धन्यवाद', romanization: 'Dhanyavad', definition: 'Thank you', ipa: '/d̪ʱənjəʋad̪/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaskar. Dadar la janyasathi local kuthe milel?' },
            { speaker: 'Server', line: 'Platform kramank ek var bhetel. Pudhchi station Dadar aahe.' },
            { speaker: 'Customer', line: 'Thik aahe. Khup dhanyavad, dada.' },
        ],
        culturalTip: 'Mumbai\'s local trains are its lifeline. Addressing a fellow male passenger as "dada" (elder brother) is a common and friendly way to ask for help.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is a "Local" in Mumbai?', options: ['A bus', 'A cafe', 'A local train', 'A shop'], answer: 'A local train' },
            { type: 'fill-in-the-blank', question: 'The Marathi word for "where" is ____?', answer: 'Kuthe' },
        ],
        followUp: 'Try asking for directions on a train platform: "Dadar la janyasathi local kuthe milel?"'
    },
    // Nepali
    {
        id: 'lesson-nepali-1',
        title: 'Tea Tasting',
        deckId: 'deck-nepali-1',
        vocabulary: [
            { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nʌmʌs̪t̪e/' },
            { word: 'चिया', romanization: 'Chiya', definition: 'Tea', ipa: '/tsiya/' },
            { word: 'मीठो', romanization: 'Mitho', definition: 'Tasty/Sweet', ipa: '/miʈʰo/' },
            { word: 'कति?', romanization: 'Kati?', definition: 'How much?', ipa: '/kʌt̪i/' },
            { word: 'धन्यवाद', romanization: 'Dhanyabad', definition: 'Thank you', ipa: '/d̪ʱʌnjʌbad̪/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste. Yo chiya ek cup kati ho?' },
            { speaker: 'Server', line: 'Namaste. Ek cup ko bis rupiya, hajur.' },
            { speaker: 'Customer', line: 'La, ek cup dinuhos. Dherai mitho chha. Dhanyabad.' },
        ],
        culturalTip: 'Darjeeling is world-famous for its tea. "Chiya" is a central part of daily life and hospitality in Nepali-speaking regions.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "tea" in Nepali?', options: ['Namaste', 'Mitho', 'Kati', 'Chiya'], answer: 'Chiya' },
            { type: 'fill-in-the-blank', question: 'To say something is tasty, you say it is ____.', answer: 'Mitho' },
        ],
        followUp: 'Order tea in Darjeeling by saying "Ek cup chiya dinuhos."'
    },
    // Odia
    {
        id: 'lesson-odia-1',
        title: 'Shopping for Handicrafts',
        deckId: 'deck-odia-1',
        vocabulary: [
            { word: 'ନମସ୍କାର', romanization: 'Namaskar', definition: 'Hello/Greetings', ipa: '/nɔmɔskarɔ/' },
            { word: 'କେମିତି ଅଛନ୍ତି?', romanization: 'Kemiti achhanti?', definition: 'How are you?', ipa: '/kemiti ɔtʃʰɔnti/' },
            { word: 'ଏହାର ଦାମ୍ କେତେ?', romanization: 'Ehaara daam kete?', definition: 'How much is this?', ipa: '/eɦaːra d̪aːm ket̪e/' },
            { word: 'ବହୁତ ସୁନ୍ଦର', romanization: 'Bahut sundar', definition: 'Very beautiful', ipa: '/bɔɦut̪ sund̪ɔɾ/' },
            { word: 'ଧନ୍ୟବାଦ', romanization: 'Dhanyabaad', definition: 'Thank you', ipa: '/d̪ʱɔnjɔbad̪ɔ/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaskar, bhai. Kemiti achhanti? Ei patachitra ta bahut sundar.' },
            { speaker: 'Server', line: 'Namaskar. Bhala achhi. Ehaara daam panch-sa taka padiba.' },
            { speaker: 'Customer', line: 'Thik achhi, mu nebi. Dhanyabaad.' },
        ],
        culturalTip: 'Pattachitra is a traditional cloth-based scroll painting unique to Odisha. They often depict stories from Hindu mythology.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you ask for the price?', options: ['Kemiti achhanti?', 'Bahut sundar', 'Ehaara daam kete?', 'Namaskar'], answer: 'Ehaara daam kete?' },
            { type: 'fill-in-the-blank', question: 'To compliment a craft, you can say it is "____ ____".', answer: 'Bahut sundar' },
        ],
        followUp: 'Appreciate a local Pattachitra painting by saying "Ei patachitra ta bahut sundar."'
    },
    // Punjabi
    {
        id: 'lesson-punjabi-1',
        title: 'Serving at Langar',
        deckId: 'deck-punjabi-1',
        vocabulary: [
            { word: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', romanization: 'Sat Sri Akal', definition: 'Hello/Greetings', ipa: '/sət sɾi əkɑl/' },
            { word: 'ਲੰਗਰ', romanization: 'Langar', definition: 'Community kitchen/meal', ipa: '/ləŋɡər/' },
            { word: 'ਸੇਵਾ', romanization: 'Seva', definition: 'Selfless service', ipa: '/seʋɑ/' },
            { word: 'ਵਾਹਿਗੁਰੂ', romanization: 'Waheguru', definition: 'God (Wonderful Lord)', ipa: '/ʋɑɦeɡuɾu/' },
            { word: 'ਧੰਨਵਾਦ', romanization: 'Dhannvaad', definition: 'Thank you', ipa: '/d̪ʱənʋɑd̪/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Sat Sri Akal. Main langar vich seva karna chahunda haan.' },
            { speaker: 'Server', line: 'Sat Sri Akal ji. Aao, Waheguru tuhadi seva parvaan kare.' },
            { speaker: 'Customer', line: 'Dhannvaad. Eh sab Waheguru di kirpa hai.' },
        ],
        culturalTip: 'Langar is a free community meal served in Gurdwaras to all visitors, regardless of religion or background, symbolizing equality. Performing "Seva" here is considered a great virtue.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is "Langar"?', options: ['A prayer', 'Selfless service', 'A community meal', 'Greetings'], answer: 'A community meal' },
            { type: 'fill-in-the-blank', question: 'Selfless service in Sikhism is known as ____.', answer: 'Seva' },
        ],
        followUp: 'Offer to help at a Gurdwara by saying "Main seva karna chahunda/chahundi haan."'
    },
    // Sanskrit
    {
        id: 'lesson-sanskrit-1',
        title: 'Morning Prayers',
        deckId: 'deck-sanskrit-1',
        vocabulary: [
            { word: 'नमो नमः', romanization: 'Namo namah', definition: 'Hello/Greetings (I bow to you)', ipa: '/nəmoː nəməh/' },
            { word: 'कुशलं वा?', romanization: 'Kushalam vaa?', definition: 'Are you well?', ipa: '/kuɕələm ʋaː/' },
            { word: 'अस्तु', romanization: 'Astu', definition: 'So be it / Okay', ipa: '/əstu/' },
            { word: 'शान्तिः', romanization: 'Shantih', definition: 'Peace', ipa: '/ɕaːntih/' },
            { word: 'धन्यवादः', romanization: 'Dhanyavaadah', definition: 'Thank you', ipa: '/d̪ʱənjavaːd̪əh/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namo namah, guruji. Kushalam vaa?' },
            { speaker: 'Server', line: 'Namo namah. Aam, kushalam. Tava kim?' },
            { speaker: 'Customer', line: 'Astu. Sarvatra shantih bhavatu. Dhanyavaadah.' },
        ],
        culturalTip: 'Sanskrit is the ancient liturgical language of Hinduism, Buddhism, and Jainism. Many mantras and chants heard in places like Varanasi end with "Shantih, Shantih, Shantih" (Peace, Peace, Peace).',
        quizzes: [
            { type: 'multiple-choice', question: 'What does "Shantih" mean?', options: ['Hello', 'Peace', 'Okay', 'Thank you'], answer: 'Peace' },
            { type: 'fill-in-the-blank', question: 'A formal Sanskrit greeting is "____ ____".', answer: 'Namo namah' },
        ],
        followUp: 'End a quiet moment of reflection with the word "Shantih."'
    },
     // Santali
    {
        id: 'lesson-santali-1',
        title: 'Festival Greetings',
        deckId: 'deck-santali-1',
        vocabulary: [
            { word: 'ᱡᱚᱦᱟᱨ', romanization: 'Johar', definition: 'Hello/Greetings', ipa: '/dʒohar/' },
            { word: 'ᱪᱮᱞᱮᱠᱟ ᱢᱮᱱᱟᱢᱟ?', romanization: 'Cheleka menama?', definition: 'How are you?', ipa: '/tʃeleka menama/' },
            { word: 'ᱱᱟᱯᱟᱭ', romanization: 'Napai', definition: 'Fine/Good', ipa: '/napai/' },
            { word: 'ᱥᱟᱹᱜᱩᱱ', romanization: 'Sagun', definition: 'Auspicious/Welcome', ipa: '/sagun/' },
            { word: 'ᱥᱟᱨᱦᱟᱣ', romanization: 'Sarhaw', definition: 'Thank you/Praise', ipa: '/sarhaw/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Johar! Cheleka menama? Sohrai porob re sagun johar.' },
            { speaker: 'Server', line: 'Johar! Ingh napai giya. Am ho Sohrai re sagun johar.' },
            { speaker: 'Customer', line: 'Sardi sagun em lagit sarhaw.' },
        ],
        culturalTip: 'Sohrai is a major harvest festival celebrated by the Santal people. It involves decorating homes, offering thanks to cattle, and community feasting.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you greet someone in Santali?', options: ['Napai', 'Sarhaw', 'Johar', 'Sagun'], answer: 'Johar' },
            { type: 'fill-in-the-blank', question: 'To say "I am fine," you say "Ingh ____ giya".', answer: 'napai' },
        ],
        followUp: 'Wish someone during a festival by saying "Sagun Johar!"'
    },
    // Sindhi
    {
        id: 'lesson-sindhi-1',
        title: 'Festival Fun',
        deckId: 'deck-sindhi-1',
        vocabulary: [
            { word: 'آيو لال', romanization: 'Aayo Lal!', definition: 'Greetings (Jhulelal has come!)', ipa: '/aːjoː laːl/' },
            { word: 'توهان ڪيئن آهيو؟', romanization: 'Tuhāṁ kī\'aṁ āhiyo?', definition: 'How are you?', ipa: '/t̪uhɑ̃ː kiːə̃ ɑːhiːjoː/' },
            { word: 'مان ీీక آهيان', romanization: 'Māṁ ṭhīk āhiyāṁ', definition: 'I am fine', ipa: '/mɑ̃ː ʈʰiːk ɑːhiːjɑ̃ː/' },
            { word: 'مهرباني', romanization: 'Meherbani', definition: 'Thank you', ipa: '/meːhəɾbaːniː/' },
            { word: 'جهولي لال', romanization: 'Jhulelal', definition: 'A revered deity for Sindhis', ipa: '/dʒʱuːleːlaːl/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Aayo Lal! Tuhāṁ kī\'aṁ āhiyo? Cheti Chand ji lakh lakh wadhayun!' },
            { speaker: 'Server', line: 'Aayo Lal! Māṁ ṭhīk āhiyāṁ. Tuhankhe bi wadhayun.' },
            { speaker: 'Customer', line: 'Prasad ke lae meherbani. Jhulelal!' },
        ],
        culturalTip: 'Cheti Chand is the Sindhi New Year, celebrated as the birthday of Jhulelal, the patron saint of the Sindhis. "Aayo Lal, Jhulelal!" is a common and joyous chant.',
        quizzes: [
            { type: 'multiple-choice', question: 'Who is Jhulelal?', options: ['A festival', 'A type of food', 'A revered deity', 'A greeting'], answer: 'A revered deity' },
            { type: 'fill-in-the-blank', question: 'The Sindhi expression for thank you is ____.', answer: 'Meherbani' },
        ],
        followUp: 'Joyfully greet a Sindhi friend during Cheti Chand with "Aayo Lal!"'
    },
    // Tamil
    {
        id: 'lesson-tamil-1',
        title: 'Buying a Saree',
        deckId: 'deck-tamil-1',
        vocabulary: [
            { word: 'வணக்கம்', romanization: 'Vanakkam', definition: 'Hello/Greetings', ipa: '/ʋəɳəkːəm/' },
            { word: 'புடவை', romanization: 'Pudavai', definition: 'Saree', ipa: '/puɖəʋaɪ/' },
            { word: 'எவ்வளவு?', romanization: 'Evvalavu?', definition: 'How much?', ipa: '/eʋːəɭəʋu/' },
            { word: 'அழகா இருக்கு', romanization: 'Azhaga irukku', definition: 'It is beautiful', ipa: '/aɻəɡa iɾukːu/' },
            { word: 'நன்றி', romanization: 'Nandri', definition: 'Thank you', ipa: '/nʌnɖri/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Vanakkam. Indha pudavai evvalavu?' },
            { speaker: 'Server', line: 'Vanakkam, amma. Adhu aayiram roobai. Kanchipuram pattu.' },
            { speaker: 'Customer', line: 'Romba azhaga irukku. Naan eduthukkuren. Nandri.' },
        ],
        culturalTip: 'Kanchipuram sarees from Tamil Nadu are world-renowned for their silk and craftsmanship. Saree shopping is often a detailed and cherished family affair.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "saree" in Tamil?', options: ['Vanakkam', 'Evvalavu', 'Pudavai', 'Nandri'], answer: 'Pudavai' },
            { type: 'fill-in-the-blank', question: 'To say something is beautiful, you can say "Azhaga ____".', answer: 'irukku' },
        ],
        followUp: 'Compliment a beautiful Kanchipuram saree with "Indha pudavai romba azhaga irukku."'
    },
    // Telugu
    {
        id: 'lesson-telugu-1',
        title: 'Ordering Biryani',
        deckId: 'deck-telugu-1',
        vocabulary: [
            { word: 'నమస్కారం', romanization: 'Namaskaram', definition: 'Hello/Greetings', ipa: '/nəməskɑːrəm/' },
            { word: 'ఒక', romanization: 'Oka', definition: 'One', ipa: '/oka/' },
            { word: 'బిర్యానీ', romanization: 'Biryani', definition: 'A famous rice dish', ipa: '/birjɑːniː/' },
            { word: 'ఎంత?', romanization: 'Entha?', definition: 'How much?', ipa: '/ent̪ə/' },
            { word: 'ధన్యవాదాలు', romanization: 'Dhanyavaadaalu', definition: 'Thank you', ipa: '/d̪ʱənjəʋɑːd̪ɑːlu/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaskaram. Oka chicken biryani entha?' },
            { speaker: 'Server', line: 'Namaskaram andi. Rendu vandala rupayalu.' },
            { speaker: 'Customer', line: 'Sare, oka plate teesukurandi. Dhanyavaadaalu.' },
        ],
        culturalTip: 'Hyderabadi Biryani is a world-famous culinary icon. Respectfully adding "andi" or "garu" when addressing people is a key part of polite Telugu conversation.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Telugu word for "one"?', options: ['Entha', 'Biryani', 'Oka', 'Namaskaram'], answer: 'Oka' },
            { type: 'fill-in-the-blank', question: 'To ask "How much?", you say "____?".', answer: 'Entha' },
        ],
        followUp: 'Confidently order your next meal in Hyderabad: "Oka chicken biryani ivvandi."'
    },
    // Urdu
    {
        id: 'lesson-urdu-1',
        title: 'Appreciating Poetry',
        deckId: 'deck-urdu-1',
        vocabulary: [
            { word: 'آداب', romanization: 'Aadaab', definition: 'Hello/Greetings', ipa: '/aːd̪aːb/' },
            { word: 'کیا کہنے!', romanization: 'Kya kehne!', definition: 'Wow! / Well said!', ipa: '/kjaː kɛɦneː/' },
            { word: 'شاعری', romanization: 'Shayari', definition: 'Poetry', ipa: '/ʃaːjəɾiː/' },
            { word: 'بہت خوب', romanization: 'Bahut khoob', definition: 'Very good / Excellent', ipa: '/bəɦʊt̪ xuːb/' },
            { word: 'شکریہ', romanization: 'Shukriya', definition: 'Thank you', ipa: '/ʃukrijaː/' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Aadaab, janab. Aapki shayari sunkar dil khush ho gaya. Kya kehne!' },
            { speaker: 'Server', line: 'Aadaab. Aapki zarra-nawazi hai. Shukriya.' },
            { speaker: 'Customer', line: 'Bahut khoob! Phir kabhi sunne ka mauqa milega.' },
        ],
        culturalTip: 'Lucknow is a historic center for Urdu language and poetry (Shayari). Appreciating a poet\'s verse with phrases like "Kya kehne!" or "Bahut khoob" is a traditional and respected custom.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Urdu word for poetry?', options: ['Aadaab', 'Shukriya', 'Shayari', 'Kya kehne'], answer: 'Shayari' },
            { type: 'fill-in-the-blank', question: 'A common exclamation of appreciation is "____ ____!".', answer: 'Kya kehne' },
        ],
        followUp: 'Attend a "mushaira" (poetry reading) and show your appreciation with "Bahut khoob!"'
    }
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
