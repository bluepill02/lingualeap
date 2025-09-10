
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const businessHindiDecks: LessonDeck[] = [
    {
      id: 'deck-bh-1',
      title: 'Foundations 1: Greetings & Small Talk',
      description: 'Master polite introductions and initial conversations in a professional setting.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-1', title: 'Formal Greetings & Introductions', duration: '3-5 min' }]
    },
    {
      id: 'deck-bh-2',
      title: 'Foundations 2: Office Vocabulary',
      description: 'Learn essential terms for the workplace, from departments to stationery.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-2', title: 'Navigating the Office', duration: '3-5 min' }]
    },
    {
      id: 'deck-bh-3',
      title: 'Foundations 3: Scheduling & Time',
      description: 'Learn to talk about time, dates, and schedule appointments professionally.',
      level: 'Foundations',
      lessons: [{ id: 'lesson-bh-3', title: 'Scheduling a Meeting', duration: '3-5 min' }]
    },
    {
      id: 'deck-bh-4',
      title: 'Intermediate 1: Participating in Meetings',
      description: 'Learn key phrases for expressing opinions and understanding others in meetings.',
      level: 'Intermediate',
      lessons: [{ id: 'lesson-bh-4', title: 'Effective Meeting Participation', duration: '4-6 min' }]
    },
    {
      id: 'deck-bh-5',
      title: 'Intermediate 2: Email Correspondence',
      description: 'Master formal email writing for professional communication.',
      level: 'Intermediate',
      lessons: [{ id: 'lesson-bh-5', title: 'Writing a Formal Email', duration: '4-6 min' }]
    },
    {
      id: 'deck-bh-6',
      title: 'Advanced 1: Professional Phone Calls',
      description: 'Master etiquette and vocabulary for phone conversations in a business context.',
      level: 'Advanced',
      lessons: [{ id: 'lesson-bh-6', title: 'Handling a Business Call', duration: '5-7 min' }]
    },
     {
      id: 'deck-bh-7',
      title: 'Advanced 2: Negotiations & Agreements',
      description: 'Learn key phrases and strategies for business negotiations and finalizing deals.',
      level: 'Advanced',
      lessons: [{ id: 'lesson-bh-7', title: 'Negotiating a Deal', duration: '5-7 min' }]
    },
];

export const businessHindiLessons: MicroLesson[] = [
    {
        id: 'lesson-bh-1',
        title: 'Formal Greetings & Introductions',
        deckId: 'deck-bh-1',
        vocabulary: [
            { word: 'नमस्ते', romanization: 'Namaste', definition: 'Hello/Greetings', ipa: '/nəməˈsteː/' },
            { word: 'आपसे मिलकर खुशी हुई', romanization: 'Aapse milkar khushi hui', definition: 'Pleased to meet you', ipa: '' },
            { word: 'मेरा नाम ... है', romanization: 'Mera naam ... hai', definition: 'My name is ...', ipa: '' },
            { word: 'धन्यवाद', romanization: 'Dhanyavaad', definition: 'Thank you', ipa: '/d̪ʱən.jə.ʋɑːd̪/' },
            { word: 'शुभ दिन', romanization: 'Shubh din', definition: 'Have a good day', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste, mera naam Rohan hai.' },
            { speaker: 'Server', line: 'Namaste Rohan ji. Aapse milkar khushi hui. Mera naam Priya hai.' },
            { speaker: 'Customer', line: 'Dhanyavaad. Aapka din shubh ho.' },
        ],
        culturalTip: 'Adding "-ji" after a name (e.g., "Rohan ji") is a common and simple way to show respect in a professional context.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "Pleased to meet you"?', options: ['Mera naam ... hai', 'Aapse milkar khushi hui', 'Shubh din', 'Dhanyavaad'], answer: 'Aapse milkar khushi hui'},
            { type: 'fill-in-the-blank', question: 'To introduce yourself, you would say: "____ naam Rohan hai."', answer: 'Mera'},
        ],
        followUp: 'Practice introducing yourself in Hindi to a colleague.'
    },
    {
        id: 'lesson-bh-2',
        title: 'Navigating the Office',
        deckId: 'deck-bh-2',
        vocabulary: [
            { word: 'कार्यालय', romanization: 'Karyalay', definition: 'Office', ipa: '' },
            { word: 'विभाग', romanization: 'Vibhag', definition: 'Department', ipa: '' },
            { word: 'सहकर्मी', romanization: 'Sahakarmi', definition: 'Colleague', ipa: '' },
            { word: 'प्रबंधक', romanization: 'Prabandhak', definition: 'Manager', ipa: '' },
            { word: 'सम्मेलन कक्ष', romanization: 'Sammelan kaksh', definition: 'Conference room', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Excuse me, marketing vibhag kahan hai?' },
            { speaker: 'Server', line: 'Doosri manzil par, prabandhak ke karyalay ke paas.' },
            { speaker: 'Customer', line: 'Dhanyavaad. Kya sammelan kaksh abhi khali hai?' },
        ],
        culturalTip: 'Knowing the formal terms for office spaces and roles is crucial for navigating a Hindi-speaking workplace.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Hindi word for "Manager"?', options: ['Sahakarmi', 'Vibhag', 'Prabandhak', 'Karyalay'], answer: 'Prabandhak'},
            { type: 'fill-in-the-blank', question: 'The Human Resources department is called the "Manav Sansadhan ____" in Hindi.', answer: 'Vibhag'},
        ],
        followUp: 'Try to name five departments in your office using the Hindi terms.'
    },
    {
        id: 'lesson-bh-3',
        title: 'Scheduling a Meeting',
        deckId: 'deck-bh-3',
        vocabulary: [
            { word: 'बैठक', romanization: 'Baithak', definition: 'Meeting', ipa: '' },
            { word: 'समय', romanization: 'Samay', definition: 'Time', ipa: '' },
            { word: 'कल', romanization: 'Kal', definition: 'Tomorrow / Yesterday', ipa: '' },
            { word: 'क्या हम मिल सकते हैं?', romanization: 'Kya hum mil sakte hain?', definition: 'Can we meet?', ipa: '' },
            { word: 'नियुक्त करना', romanization: 'Niyukt karna', definition: 'To schedule / To appoint', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste Priya ji, kya hum kal ek baithak niyukt kar sakte hain?' },
            { speaker: 'Server', line: 'Ji zaroor. Kaunsa samay theek rahega?' },
            { speaker: 'Customer', line: 'Subah 11 baje? (11 AM in the morning?)' },
            { speaker: 'Server', line: 'Theek hai. Kal milte hain.' },
        ],
        culturalTip: 'When scheduling, being specific with "subah" (morning), "dopahar" (afternoon), or "shaam" (evening) is helpful as the 12-hour clock is common.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Hindi word for "Meeting"?', options: ['Samay', 'Kal', 'Baithak', 'Karyalay'], answer: 'Baithak'},
        ],
        followUp: 'Practice scheduling a mock meeting with a colleague for "kal subah 10 baje".'
    },
    {
        id: 'lesson-bh-4',
        title: 'Effective Meeting Participation',
        deckId: 'deck-bh-4',
        vocabulary: [
            { word: 'प्रस्तुति', romanization: 'Prastuti', definition: 'Presentation', ipa: '' },
            { word: 'मेरा एक सवाल है', romanization: 'Mera ek sawaal hai', definition: 'I have a question', ipa: '' },
            { word: 'मैं सहमत हूँ', romanization: 'Main sahmat hoon', definition: 'I agree', ipa: '' },
            { word: 'निष्कर्ष', romanization: 'Nishkarsh', definition: 'Conclusion', ipa: '' },
            { word: 'लक्ष्य', romanization: 'Lakshya', definition: 'Goal / Target', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Aapki prastuti bahut achhi thi. Mera ek sawaal hai.' },
            { speaker: 'Server', line: 'Ji, poochhiye. (Yes, please ask.)' },
            { speaker: 'Customer', line: 'Is project ka mukhya lakshya kya hai? (What is the main goal of this project?)' },
        ],
        culturalTip: 'Interrupting a presentation is often seen as rude. It is more polite to wait until the end and then say "Mera ek sawaal hai".',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you say "I agree"?', options: ['Main sahmat hoon', 'Mera ek sawaal hai', 'Nishkarsh', 'Lakshya'], answer: 'Main sahmat hoon'},
        ],
        followUp: 'During your next team meeting, try to formulate a question in Hindi in your mind.'
    },
    {
        id: 'lesson-bh-5',
        title: 'Writing a Formal Email',
        deckId: 'deck-bh-5',
        vocabulary: [
            { word: 'आदरणीय', romanization: 'Aadarneeya', definition: 'Respected (Salutation)', ipa: '' },
            { word: 'विषय', romanization: 'Vishay', definition: 'Subject', ipa: '' },
            { word: 'अनुरोध', romanization: 'Anurodh', definition: 'Request', ipa: '' },
            { word: 'सादर', romanization: 'Saadar', definition: 'With regards', ipa: '' },
            { word: 'भवदीय', romanization: 'Bhavadeeya', definition: 'Yours faithfully (Closing)', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Email ka vishay spasht hona chahiye. (The subject of the email should be clear.)' },
            { speaker: 'Server', line: 'Aur shuruaat "Aadarneeya Mahoday" se karein. (And start with "Respected Sir".)' },
        ],
        culturalTip: 'Formal Hindi emails use specific salutations and closings. "Aadarneeya" is for seniors, and "Bhavadeeya" is a standard professional closing.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is a formal closing for a Hindi email?', options: ['Anurodh', 'Aadarneeya', 'Bhavadeeya', 'Vishay'], answer: 'Bhavadeeya'},
        ],
        followUp: 'Draft a short, formal email in Hindi requesting a day off.'
    },
    {
        id: 'lesson-bh-6',
        title: 'Handling a Business Call',
        deckId: 'deck-bh-6',
        vocabulary: [
            { word: 'मैं ... बोल रहा/रही हूँ', romanization: 'Main ... bol raha/rahi hoon', definition: 'This is ... speaking', ipa: '' },
            { word: 'क्या मैं ... से बात कर सकता/सकती हूँ?', romanization: 'Kya main ... se baat kar sakta/sakti hoon?', definition: 'May I speak to ...?', ipa: '' },
            { word: 'एक मिनट रुकिए', romanization: 'Ek minute rukiye', definition: 'Please hold for a minute', ipa: '' },
            { word: 'संपर्क करने के लिए धन्यवाद', romanization: 'Sampark karne ke liye dhanyavaad', definition: 'Thank you for contacting', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Namaste, main ABC company se Rohan bol raha hoon.' },
            { speaker: 'Server', line: 'Namaste. Main aapki kya sahayata kar sakta hoon? (How can I help you?)' },
            { speaker: 'Customer', line: 'Kya main Priya ji se baat kar sakta hoon?' },
        ],
        culturalTip: 'Always introduce yourself clearly at the beginning of a business call in India. It is considered polite and professional.',
        quizzes: [
            { type: 'multiple-choice', question: 'How do you ask to speak to someone?', options: ['Ek minute rukiye', 'Main bol raha hoon', 'Kya main ... se baat kar sakta hoon?', 'Sampark karne ke liye dhanyavaad'], answer: 'Kya main ... se baat kar sakta hoon?'},
        ],
        followUp: 'Role-play a short business phone call with a colleague.'
    },
    {
        id: 'lesson-bh-7',
        title: 'Negotiating a Deal',
        deckId: 'deck-bh-7',
        vocabulary: [
            { word: 'समझौता', romanization: 'Samjhauta', definition: 'Agreement / Compromise', ipa: '' },
            { word: 'प्रस्ताव', romanization: 'Prastaav', definition: 'Proposal / Offer', ipa: '' },
            { word: 'शर्तें', romanization: 'Shartein', definition: 'Terms and Conditions', ipa: '' },
            { word: 'क्या हम इस पर सहमत हो सकते हैं?', romanization: 'Kya hum is par sahmat ho sakte hain?', definition: 'Can we agree on this?', ipa: '' },
            { word: 'अंतिम प्रस्ताव', romanization: 'Antim prastaav', definition: 'Final offer', ipa: '' },
        ],
        dialogue: [
            { speaker: 'Customer', line: 'Yeh hamara antim prastaav hai.' },
            { speaker: 'Server', line: 'Mujhe iski shartein manzoor hain. (I accept its terms and conditions.)' },
            { speaker: 'Customer', line: 'Toh kya hum is samjhaute par sahmat ho sakte hain?' },
        ],
        culturalTip: 'Negotiations in India can often be relationship-focused. Building trust and rapport is as important as the deal terms themselves.',
        quizzes: [
            { type: 'multiple-choice', question: 'What is the Hindi word for "Proposal"?', options: ['Samjhauta', 'Shartein', 'Antim', 'Prastaav'], answer: 'Prastaav'},
        ],
        followUp: 'Think about a simple negotiation (like buying a product) and what the key "shartein" (terms) would be.'
    },
];
