
import type { ExamModule } from './types';

export const upscHindiIdiomsAndPhrases: ExamModule = {
    id: 'exam-upsc-hindi-polity-history',
    title: 'UPSC: CSAT & GS Medley',
    examName: 'UPSC Civil Services',
    language: 'Hindi / English',
    category: 'General Studies & CSAT',
    vocabulary: [
        {
            word: 'स्वराज (Swaraj)',
            romanization: 'Swaraj',
            definition: 'Self-rule, independence. A key concept in the Indian independence movement.',
            partOfSpeech: 'Noun (Modern History)',
            sentence: 'बाल गंगाधर तिलक का प्रसिद्ध नारा था, "स्वराज मेरा जन्मसिद्ध अधिकार है और मैं इसे लेकर रहूँगा।"',
            sentenceRoman: 'Bal Gangadhar Tilak ka prasiddh naara tha, "Swaraj mera janmasiddh adhikar hai aur main ise lekar rahunga."',
            sentenceTranslation: 'Bal Gangadhar Tilak\'s famous slogan was, "Swaraj is my birthright and I shall have it."'
        },
        {
            word: 'सत्याग्रह (Satyagraha)',
            romanization: 'Satyagraha',
            definition: 'Holding onto truth; nonviolent resistance. A core Gandhian principle.',
            partOfSpeech: 'Noun (Modern History)',
            sentence: 'गांधीजी ने चंपारण में अपना पहला सफल सत्याग्रह किया।',
            sentenceRoman: 'Gandhiji ne Champaran mein apna pehla safal satyagraha kiya.',
            sentenceTranslation: 'Gandhiji conducted his first successful Satyagraha in Champaran.'
        },
         {
            word: 'संप्रभुता (Samprabhuta)',
            romanization: 'Samprabhuta',
            definition: 'Sovereignty. The supreme authority of a state to govern itself.',
            partOfSpeech: 'Noun (Polity)',
            sentence: 'भारत एक संप्रभु, समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक गणराज्य है।',
            sentenceRoman: 'Bharat ek samprabhu, samajwadi, dharmanirpeksh, loktantrik ganrajya hai.',
            sentenceTranslation: 'India is a sovereign, socialist, secular, democratic republic.'
        },
        {
            word: 'न्यायिक समीक्षा (Nyayik Sameeksha)',
            romanization: 'Nyayik Sameeksha',
            definition: 'Judicial Review. The power of the judiciary to examine the constitutionality of legislative acts.',
            partOfSpeech: 'Noun (Polity)',
            sentence: 'न्यायिक समीक्षा संविधान की सर्वोच्चता को बनाए रखती है।',
            sentenceRoman: 'Nyayik sameeksha samvidhan ki sarvochchata ko banaye rakhti hai.',
            sentenceTranslation: 'Judicial review upholds the supremacy of the Constitution.'
        },
        {
            word: 'अधजल गगरी छलकत जाए',
            romanization: 'Adhjal gagri chhalkat jaye',
            definition: 'A person with little knowledge boasts the most (empty vessels make the most noise).',
            partOfSpeech: 'Idiom (CSAT - Hindi)',
            sentence: 'उसे आता कुछ नहीं, बस अधजल गगरी छलकत जाए वाली बात है।',
            sentenceRoman: 'Use aata kuch nahi, bas adhjal gagri chhalkat jaye wali baat hai.',
            sentenceTranslation: 'He doesn\'t know anything, it\'s just a case of an empty vessel making the most noise.'
        },
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'The power of Judicial Review in the Indian Constitution is based on the principle of:',
            options: ['Rule of Law', 'Separation of Powers', 'Supremacy of the Constitution', 'Federalism'],
            answer: 'Supremacy of the Constitution'
        },
        {
            type: 'multiple-choice',
            question: 'The Non-Cooperation Movement was launched in response to the:',
            options: ['Partition of Bengal', 'Rowlatt Act and Jallianwala Bagh massacre', 'Simon Commission', 'Cripps Mission'],
            answer: 'Rowlatt Act and Jallianwala Bagh massacre'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The phrase for "a bad workman quarrels with his tools" is "नाच न जाने ____ टेढ़ा".',
            answer: 'आँगन'
        },
        {
            type: 'multiple-choice',
            question: 'What does the term "Sovereignty" mean in the Preamble?',
            options: ['India is a colony of another country', 'India can acquire foreign territories', 'India is free to conduct its own internal and external affairs', 'India must obey UN directives'],
            answer: 'India is free to conduct its own internal and external affairs'
        },
    ],
    errorAnalysis: [
        {
            pitfall: 'Misinterpreting Polity Terminology',
            tip: 'Terms like "republic," "secular," and "federal" have very specific meanings in the context of the Indian Constitution. Avoid using their general English definitions. For example, "republic" specifically means the head of state is elected, not a hereditary monarch.'
        },
        {
            pitfall: 'Confusing Historical Timelines',
            tip: 'In Modern History, the sequence of events is crucial. Create a timeline chart linking major movements (Non-Cooperation, Civil Disobedience, Quit India) with their key triggers (Rowlatt Act, Dandi March, etc.) to avoid confusion.'
        }
    ]
};
