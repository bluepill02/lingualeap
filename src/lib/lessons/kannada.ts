
import type { LessonDeck, MicroLesson } from '@/lib/types';

export const kannadaDecks: LessonDeck[] = [
  // Foundations
  { id: 'deck-kannada-1', title: 'Foundations 1: Basic Greetings', description: 'Master greetings and introductions.', level: 'Foundations', lessons: [{ id: 'lesson-kannada-1', title: 'Basic Greetings', duration: '3-5 min' }] },
  { id: 'deck-kannada-2', title: 'Foundations 2: Common Nouns & Numbers', description: 'Learn words for everyday objects and how to count.', level: 'Foundations', lessons: [{ id: 'lesson-kannada-2', title: 'Nouns & Numbers', duration: '3-5 min' }] },
  { id: 'deck-kannada-3', title: 'Foundations 3: Simple Questions', description: 'Ask simple questions like "What is your name?" and "How are you?".', level: 'Foundations', lessons: [{ id: 'lesson-kannada-3', title: 'Asking Questions', duration: '3-5 min' }] },
  // Intermediate
  { id: 'deck-kannada-4', title: 'Intermediate 1: Tenses', description: 'Understand past, present, and future tenses.', level: 'Intermediate', lessons: [{ id: 'lesson-kannada-4', title: 'Verb Tenses', duration: '4-6 min' }] },
  { id: 'deck-kannada-5', title: 'Intermediate 2: At the Market', description: 'Learn vocabulary and phrases for shopping for food.', level: 'Intermediate', lessons: [{ id: 'lesson-kannada-5', title: 'Market Dialogue', duration: '4-6 min' }] },
  // Advanced
  { id: 'deck-kannada-6', title: 'Advanced 1: Complex Sentences', description: 'Learn to form complex sentences using conjunctions.', level: 'Advanced', lessons: [{ id: 'lesson-kannada-6', title: 'Sentence Structure', duration: '5-7 min' }] },
  { id: 'deck-kannada-7', title: 'Advanced 2: Discussing Hobbies', description: 'Talk about your interests and hobbies in detail.', level: 'Advanced', lessons: [{ id: 'lesson-kannada-7', title: 'Hobbies & Interests', duration: '5-7 min' }] },
];

export const kannadaLessons: MicroLesson[] = [
  { 
    id: 'lesson-kannada-1', 
    title: 'Lesson 1: Basic Greetings', 
    deckId: 'deck-kannada-1',
    vocabulary: [
      { word: 'ನಮಸ್ಕಾರ', romanization: 'Namaskara', definition: 'Hello/Greetings', ipa: '/nʌmʌskaːɾʌ/' },
      { word: 'ಧನ್ಯವಾದಗಳು', romanization: 'Dhanyavadagalu', definition: 'Thank you', ipa: '/d̪ʱʌnjʌʋaːd̪ʌɡʌɭu/' },
      { word: 'ನೀವು ಹೇಗಿದ್ದೀರಾ?', romanization: 'Neevu hegiddira?', definition: 'How are you? (Formal)', ipa: '/niːʋu heːɡɪd̪ːiːɾaː/' },
      { word: 'ಚೆನ್ನಾಗಿದ್ದೀನಿ', romanization: 'Chennagiddini', definition: 'I am fine', ipa: '/tʃɛnːaːɡɪd̪ːiːni/' },
      { word: 'ನಿಮ್ಮ ಹೆಸರು ಏನು?', romanization: 'Nimma hesaru enu?', definition: 'What is your name?', ipa: '/nɪmːʌ hɛsʌɾu eːnu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಾ? (Namaskara, neevu hegiddira?)' },
      { speaker: 'Server', line: 'ನಮಸ್ಕಾರ, ನಾನು ಚೆನ್ನಾಗಿದ್ದೀನಿ. ಧನ್ಯವಾದಗಳು. ನೀವು? (Namaskara, naanu chennagiddini. Dhanyavadagalu. Neevu?)' },
      { speaker: 'Customer', line: 'ನಾನೂ ಚೆನ್ನಾಗಿದ್ದೀನಿ. (Naanu chennagiddini.)' }
    ],
    culturalTip: 'In Karnataka, while "Namaskara" is universal, using "Hegiddira?" is a very warm and common way to inquire about someone\'s well-being.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "Thank you" in Kannada?', options: ['Namaskara', 'Chennagiddini', 'Dhanyavadagalu', 'Enu'], answer: 'Dhanyavadagalu' },
      { type: 'fill-in-the-blank', question: 'To say "I am fine", you would say "Naanu ____".', answer: 'chennagiddini' }
    ],
    followUp: 'Try greeting a friend with "Namaskara" and ask them "Hegiddira?".'
  },
  { 
    id: 'lesson-kannada-2', 
    title: 'Lesson 2: Nouns & Numbers', 
    deckId: 'deck-kannada-2',
    vocabulary: [
      { word: 'ನೀರು', romanization: 'Neeru', definition: 'Water', ipa: '/niːɾu/' },
      { word: 'ಚಹಾ', romanization: 'Chaha', definition: 'Tea', ipa: '/tʃʌhaː/' },
      { word: 'ಮನೆ', romanization: 'Mane', definition: 'House', ipa: '/mʌne/' },
      { word: 'ಒಂದು', romanization: 'Ondu', definition: 'One', ipa: '/on̪d̪u/' },
      { word: 'ಎರಡು', romanization: 'Eradu', definition: 'Two', ipa: '/ɛɾʌɖu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ಒಂದು ಕಪ್ ಚಹಾ ಕೊಡಿ. (Ondu cup chaha kodi.)' },
      { speaker: 'Server', line: 'ಖಂಡಿತ. ಬೇರೆ ಏನು ಬೇಕು? (Khandita. Bere enu beku?)' },
      { speaker: 'Customer', line: 'ಒಂದು ಗ್ಲಾஸ் ನೀರು ಕೊಡಿ. (Ondu glass neeru kodi.)' }
    ],
    culturalTip: 'Coffee is very popular in Karnataka, often called "Filter Coffee". Knowing how to ask for "chaha" (tea) or "coffee" is very useful.',
    quizzes: [
      { type: 'fill-in-the-blank', question: 'The Kannada word for "House" is ____.', answer: 'Mane' },
      { type: 'multiple-choice', question: 'What does "Eradu" mean?', options: ['One', 'Two', 'Three', 'Water'], answer: 'Two' }
    ],
    followUp: 'Practice counting common objects around you from one to three (ondu, eradu, mooru).'
  },
  { 
    id: 'lesson-kannada-3', 
    title: 'Lesson 3: Asking Questions', 
    deckId: 'deck-kannada-3',
    vocabulary: [
      { word: 'ಎಲ್ಲಿ?', romanization: 'Elli?', definition: 'Where?', ipa: '/ɛlːɪ/' },
      { word: 'ಯಾವಾಗ?', romanization: 'Yavaga?', definition: 'When?', ipa: '/jaːʋaːɡa/' },
      { word: 'ಏಕೆ?', romanization: 'Eke?', definition: 'Why?', ipa: '/eːke/' },
      { word: 'ಏನು?', romanization: 'Enu?', definition: 'What?', ipa: '/eːnu/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ಅಂಗಡಿ ಎಲ್ಲಿ ಇದೆ? (Angadi elli ide?)' },
      { speaker: 'Server', line: 'ಆ ರಸ್ತೆಯ ಮೂಲೆಯಲ್ಲಿ. (Aa rasteya mooleyalli.)' },
      { speaker: 'Customer', line: 'ಧನ್ಯವಾದಗಳು. அது எப்போது திறக்கும்? (Dhanyavadagalu. Adu eppodu thirakkum?)' }
    ],
    culturalTip: 'Questions in Kannada often end with the verb, and the question word can appear at the beginning of the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you ask "Where?" in Kannada?', options: ['Yavaga?', 'Eke?', 'Elli?', 'Enu?'], answer: 'Elli?' }
    ],
    followUp: 'Try asking a friend "Neevu elli hoguttiddira?" (Where are you going?).'
  },
  { 
    id: 'lesson-kannada-4', 
    title: 'Lesson 4: Verb Tenses', 
    deckId: 'deck-kannada-4',
    vocabulary: [
      { word: 'ನಾನು ಹೋಗುತ್ತೇನೆ', romanization: 'Naanu hoguttene', definition: 'I go / I will go (Present/Future)', ipa: '' },
      { word: 'ನಾನು ಹೋದೆ', romanization: 'Naanu hode', definition: 'I went (Past)', ipa: '' },
      { word: 'ನಾನು ಬರುತ್ತೇನೆ', romanization: 'Naanu baruttene', definition: 'I come / I will come', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ನಾನು ನಿನ್ನೆ ಬೆಂಗಳೂರಿಗೆ ಹೋದೆ. (Naanu ninne Bengalurige hode.)' },
      { speaker: 'Server', line: 'ಚೆನ್ನಾಗಿದೆ! ನೀವು ನಾಳೆ ಹೋಗುತ್ತೀರಾ? (Chennagide! Neevu naale hoguttira?)' },
      { speaker: 'Customer', line: 'ಹೌದು, ನಾನು ಹೋಗುತ್ತೇನೆ. (Houdu, naanu hoguttene.)' }
    ],
    culturalTip: 'In spoken Kannada, the simple present tense form is often used for the future tense as well. Context makes the meaning clear.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "I went"?', options: ['Naanu hoguttene', 'Naanu baruttene', 'Naanu hode', 'Naanu enu'], answer: 'Naanu hode' }
    ],
    followUp: 'Try making three sentences about your activities yesterday, today, and tomorrow.'
  },
  { 
    id: 'lesson-kannada-5', 
    title: 'Lesson 5: Market Dialogue', 
    deckId: 'deck-kannada-5',
    vocabulary: [
      { word: 'இதರ ಬೆಲೆ ಎಷ್ಟು?', romanization: 'Idara bele eshtu?', definition: 'What is its price?', ipa: '' },
      { word: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ', romanization: 'Swalpa kadime maadi', definition: 'Reduce it a little. (Bargaining)', ipa: '' },
      { word: 'ಸರಿ, ಕೊಡಿ.', romanization: 'Sari, kodi.', definition: 'Alright, give it to me.', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ಈ ಸೇಬಿನ ಬೆಲೆ ಎಷ್ಟು? (Ee sebina bele eshtu?)' },
      { speaker: 'Server', line: 'ನೂರು ರೂಪಾಯಿ ಕೆ.ಜಿ. (Nooru rupaayi keji.)' },
      { speaker: 'Customer', line: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ. (Swalpa kadime maadi.)' },
      { speaker: 'Server', line: 'ಸರಿ, ತೊಂಬತ್ತು ರೂಪಾಯಿ ಕೊಡಿ. (Sari, tombattu rupaayi kodi.)' }
    ],
    culturalTip: 'Bargaining is common in local markets ("santhe") in Karnataka. A polite "Swalpa kadime maadi" is the way to start.',
    quizzes: [
      { type: 'multiple-choice', question: 'What phrase do you use to ask for a lower price?', options: ['Bele eshtu?', 'Sari, kodi', 'Swalpa kadime maadi', 'Chennagide'], answer: 'Swalpa kadime maadi' }
    ],
    followUp: 'Practice numbers in Kannada to help with shopping negotiations.'
  },
  { 
    id: 'lesson-kannada-6', 
    title: 'Lesson 6: Sentence Structure', 
    deckId: 'deck-kannada-6',
    vocabulary: [
      { word: 'ಮತ್ತು', romanization: 'Mattu', definition: 'And', ipa: '/mʌt̪ːu/' },
      { word: 'ಆದರೆ', romanization: 'Aadare', definition: 'But', ipa: '/aːd̪ʌɾe/' },
      { word: 'ಆದ್ದರಿಂದ', romanization: 'Aaddarinda', definition: 'So / Therefore', ipa: '/aːd̪ːʌɾɪn̪d̪ʌ/' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ನಾನು ಅಂಗಡಿಗೆ ಹೋದೆ ಮತ್ತು ತರಕಾರಿ ಕೊಂಡುಕೊಂಡೆ. (Naanu angadige hode mattu tarakari kondukonde.)' },
      { speaker: 'Server', line: 'ನನಗೂ ಹೋಗಬೇಕಿತ್ತು, ಆದರೆ ಸಮಯ ಸಿಗಲಿಲ್ಲ. (Nanagoo hogabekittu, aadare samaya sigalilla.)' },
      { speaker: 'Customer', line: 'ಆದ್ದರಿಂದ ನೀವು ಹೋಗಲಿಲ್ಲ. (Aaddarinda neevu hogalilla.)' }
    ],
    culturalTip: 'Kannada sentence structure is typically Subject-Object-Verb (SOV), so the verb is usually the last word in the sentence.',
    quizzes: [
      { type: 'multiple-choice', question: 'Which word means "and"?', options: ['Aadare', 'Aaddarinda', 'Mattu', 'Enu'], answer: 'Mattu' }
    ],
    followUp: 'Try connecting two simple sentences you know using "mattu" (and).'
  },
  { 
    id: 'lesson-kannada-7', 
    title: 'Lesson 7: Hobbies & Interests', 
    deckId: 'deck-kannada-7',
    vocabulary: [
      { word: 'ನನ್ನ ಹವ್ಯಾಸ', romanization: 'Nanna havyaasa', definition: 'My hobby', ipa: '' },
      { word: 'ಪುಸ್ತಕ ಓದುವುದು', romanization: 'Pustaka oduvudu', definition: 'Reading books', ipa: '' },
      { word: 'ಸಂಗೀತ ಕೇಳುವುದು', romanization: 'Sangeetha keluvudu', definition: 'Listening to music', ipa: '' },
      { word: 'ಸಿನಿಮಾ ನೋಡುವುದು', romanization: 'Cinema noduvudu', definition: 'Watching movies', ipa: '' },
    ],
    dialogue: [
      { speaker: 'Customer', line: 'ನಿಮ್ಮ ಹವ್ಯಾಸ ಏನು? (Nimma havyaasa enu?)' },
      { speaker: 'Server', line: 'ನನ್ನ ಹವ್ಯಾಸ ಪುಸ್ತಕ ಓದುವುದು ಮತ್ತು ಸಂಗೀತ ಕೇಳುವುದು. ನಿಮ್ಮದು? (Nanna havyaasa pustaka oduvudu mattu sangeetha keluvudu. Nimmadu?)' },
      { speaker: 'Customer', line: 'ನನಗೆ ಸಿನಿಮಾ ನೋಡುವುದು ಇಷ್ಟ. (Nanage cinema noduvudu ishta.)' }
    ],
    culturalTip: 'Karnataka has a vibrant film industry, often called "Sandalwood". Talking about movies and actors like Rajkumar is a great conversation starter.',
    quizzes: [
      { type: 'multiple-choice', question: 'How do you say "My hobby"?', options: ['Sangeetha keluvudu', 'Cinema noduvudu', 'Pustaka oduvudu', 'Nanna havyaasa'], answer: 'Nanna havyaasa' }
    ],
    followUp: 'Learn to say your favorite hobby in Kannada.'
  },
];
