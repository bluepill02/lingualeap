
import type { ExamModule } from './types';

export const uppcsHindiLetterWriting: ExamModule = {
    id: 'exam-uppcs-hindi-letterwriting',
    title: 'UPPCS: Hindi Letter Writing & Vocabulary',
    examName: 'UPPCS',
    language: 'Hindi',
    category: 'Letter Writing',
    vocabulary: [
        {
            word: 'भवदीय (Bhavadiya)',
            romanization: 'Bhavadiya',
            definition: 'Yours faithfully. A common closing for formal letters.',
            partOfSpeech: 'Salutation',
            sentence: 'पत्र के अंत में, "भवदीय" लिखकर अपना नाम लिखें।',
            sentenceRoman: 'Patra ke ant mein, "bhavadiya" likhkar apna naam likhein.',
            sentenceTranslation: 'At the end of the letter, write your name after writing "Yours faithfully".'
        },
        {
            word: 'महोदय (Mahoday)',
            romanization: 'Mahoday',
            definition: 'Sir/Madam. A formal salutation to begin a letter.',
            partOfSpeech: 'Salutation',
            sentence: 'सेवा में, श्रीमान संपादक महोदय, ...',
            sentenceRoman: 'Seva mein, Shriman Sampadak Mahoday, ...',
            sentenceTranslation: 'To, The Editor Sir, ...'
        },
        {
            word: 'निवेदन (Nivedan)',
            romanization: 'Nivedan',
            definition: 'Request, submission, plea.',
            partOfSpeech: 'Noun',
            sentence: 'सविनय निवेदन यह है कि हमारे क्षेत्र में बिजली की आपूर्ति अनियमित है।',
            sentenceRoman: 'Savinay nivedan yeh hai ki hamare kshetra mein bijli ki aapurti aniyamit hai.',
            sentenceTranslation: 'The humble request is that the electricity supply in our area is irregular.'
        },
        {
            word: 'विषय (Vishay)',
            romanization: 'Vishay',
            definition: 'Subject. Used to state the purpose of the letter.',
            partOfSpeech: 'Noun',
            sentence: 'पत्र का विषय स्पष्ट और संक्षिप्त होना चाहिए।',
            sentenceRoman: 'Patra ka vishay spasht aur sankshipt hona chahiye.',
            sentenceTranslation: 'The subject of the letter should be clear and concise.'
        },
        {
            word: 'प्रासंगिक (Prasangik)',
            romanization: 'Prasangik',
            definition: 'Relevant, pertinent.',
            partOfSpeech: 'Adjective',
            sentence: 'कृपया इस मामले में प्रासंगिक दस्तावेजों को संलग्न करें।',
            sentenceRoman: 'Kripya is maamle mein prasangik dastavejon ko sanlagn karein.',
            sentenceTranslation: 'Please attach the relevant documents in this matter.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'Which word is used as a formal closing like "Yours faithfully"?',
            options: ['महोदय (Mahoday)', 'विषय (Vishay)', 'निवेदन (Nivedan)', 'भवदीय (Bhavadiya)'],
            answer: 'भवदीय (Bhavadiya)'
        },
        {
            type: 'multiple-choice',
            question: 'What is the correct term for the "subject" of a formal letter?',
            options: ['प्रासंगिक (Prasangik)', 'विषय (Vishay)', 'महोदय (Mahoday)', 'निवेदन (Nivedan)'],
            answer: 'विषय (Vishay)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A formal letter to a male authority figure begins with the salutation "श्रीमान ____".',
            answer: 'महोदय'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The Hindi word for "relevant" is ____.',
            answer: 'प्रासंगिक'
        },
        {
            type: 'multiple-choice',
            question: 'The term "निवेदन" means:',
            options: ['Order', 'Request', 'Complaint', 'Decision'],
            answer: 'Request'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Incorrect Salutations',
            tip: 'In official Hindi letters, using the correct salutation is critical. Use "महोदय/महोदया" (Mahoday/Mahodaya) for officials. Use "भवदीय" (Bhavadiya) for formal closings to officials. For letters to newspapers, you can use "भवदीय" but for personal letters, use "आपका स्नेही" (Aapka Snehi) etc. Mixing these up is a common error.'
        },
        {
            pitfall: 'Vague Subject Line',
            tip: 'The "विषय" (Vishay) is the most important part of a government letter as it decides where the letter will be routed. A common mistake is writing a long or unclear subject. The subject line should be a concise summary of the main request, for e.g., "क्षेत्र में पेयजल की समस्या के संबंध में" (Regarding the drinking water problem in the area).'
        }
    ]
};
