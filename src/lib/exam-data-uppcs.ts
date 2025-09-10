
import type { ExamModule } from './types';

export const uppcsHindiLetterWriting: ExamModule = {
    id: 'exam-uppcs-hindi-letterwriting',
    title: 'UPPCS: Hindi Letter Writing & Vocabulary',
    examName: 'UPPCS Mains',
    language: 'Hindi',
    category: 'General Hindi & Letter Writing',
    vocabulary: [
        {
            word: 'प्रेषक (Preshak)',
            romanization: 'Preshak',
            definition: 'Sender. The person or office from which the letter originates.',
            partOfSpeech: 'Noun',
            sentence: 'पत्र के ऊपरी बाएँ कोने में प्रेषक का पता लिखा जाता है।',
            sentenceRoman: 'Patra ke oopari baayein kone mein preshak ka pata likha jaata hai.',
            sentenceTranslation: 'The sender\'s address is written in the top left corner of the letter.'
        },
        {
            word: 'सेवा में (Seva mein)',
            romanization: 'Seva mein',
            definition: 'To. Used to address the recipient of a formal letter.',
            partOfSpeech: 'Salutation',
            sentence: '"सेवा में, श्रीमान जिलाधिकारी" लिखकर पत्र प्रारंभ करें।',
            sentenceRoman: '"Seva mein, Shriman Jiladhikari" likhkar patra prarambh karein.',
            sentenceTranslation: 'Start the letter by writing "To, The District Magistrate".'
        },
        {
            word: 'विषय (Vishay)',
            romanization: 'Vishay',
            definition: 'Subject. A concise statement of the letter\'s purpose.',
            partOfSpeech: 'Noun',
            sentence: 'पत्र का विषय स्पष्ट और संक्षिप्त होना चाहिए।',
            sentenceRoman: 'Patra ka vishay spasht aur sankshipt hona chahiye.',
            sentenceTranslation: 'The subject of the letter should be clear and concise.'
        },
        {
            word: 'महोदय (Mahoday)',
            romanization: 'Mahoday',
            definition: 'Sir/Madam. A formal salutation to begin the body of the letter.',
            partOfSpeech: 'Salutation',
            sentence: 'विषय के बाद, "महोदय," लिखकर पत्र का मुख्य भाग शुरू करें।',
            sentenceRoman: 'Vishay ke baad, "Mahoday," likhkar patra ka mukhya bhaag shuru karein.',
            sentenceTranslation: 'After the subject, start the main body of the letter by writing "Sir,".'
        },
        {
            word: 'निवेदन (Nivedan)',
            romanization: 'Nivedan',
            definition: 'Request, submission, plea. A common way to start the body of a formal request.',
            partOfSpeech: 'Noun',
            sentence: 'सविनय निवेदन यह है कि हमारे क्षेत्र में बिजली की आपूर्ति अनियमित है।',
            sentenceRoman: 'Savinay nivedan yeh hai ki hamare kshetra mein bijli ki aapurti aniyamit hai.',
            sentenceTranslation: 'The humble request is that the electricity supply in our area is irregular.'
        },
        {
            word: 'प्रासंगिक (Prasangik)',
            romanization: 'Prasangik',
            definition: 'Relevant, pertinent.',
            partOfSpeech: 'Adjective',
            sentence: 'कृपया इस मामले में प्रासंगिक दस्तावेजों को संलग्न करें।',
            sentenceRoman: 'Kripya is maamle mein prasangik dastavejon ko sanlagn karein.',
            sentenceTranslation: 'Please attach the relevant documents in this matter.'
        },
        {
            word: 'भवदीय (Bhavadiya)',
            romanization: 'Bhavadiya',
            definition: 'Yours faithfully. A standard closing for formal letters.',
            partOfSpeech: 'Closing',
            sentence: 'पत्र के अंत में, "भवदीय" लिखकर अपना नाम लिखें।',
            sentenceRoman: 'Patra ke ant mein, "bhavadiya" likhkar apna naam likhein.',
            sentenceTranslation: 'At the end of the letter, write your name after writing "Yours faithfully".'
        },
        {
            word: 'संलग्नक (Sanlagnak)',
            romanization: 'Sanlagnak',
            definition: 'Enclosure(s). Used to mention documents attached with the letter.',
            partOfSpeech: 'Noun',
            sentence: 'संलग्नक के रूप में पहचान पत्र की प्रतिलिपि भेजी गई है।',
            sentenceRoman: 'Sanlagnak ke roop mein pehchan patra ki pratilipi bheji gayi hai.',
            sentenceTranslation: 'A copy of the identity card has been sent as an enclosure.'
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
        },
        {
            type: 'multiple-choice',
            question: 'What is the Hindi term for "Enclosure"?',
            options: ['प्रेषक (Preshak)', 'विषय (Vishay)', 'संलग्नक (Sanlagnak)', 'पत्र (Patra)'],
            answer: 'संलग्नक (Sanlagnak)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Incorrect Salutations and Closings',
            tip: 'In official Hindi letters, using the correct salutation and closing is critical. Use "महोदय/महोदया" (Mahoday/Mahodaya) for officials. Use "भवदीय" (Bhavadiya) for formal closings. For semi-official letters, "आपका सद्भावी" (Aapka Sadbhavi) can be used. Mixing these up is a common error.'
        },
        {
            pitfall: 'Vague Subject Line (विषय)',
            tip: 'The "विषय" is the most important part of a government letter as it determines where the letter will be routed and its priority. A common mistake is writing a long or unclear subject. The subject line should be a concise summary of the main request, for e.g., "क्षेत्र में पेयजल की समस्या के संबंध में" (Regarding the drinking water problem in the area).'
        },
        {
            pitfall: 'Using Informal Language',
            tip: 'Avoid using colloquial or informal language in official letters. Use formal vocabulary like "अनुरोध" (anurodh - request) instead of "विनती" (vinti), and "अवगत कराना" (avgat karana - to inform) instead of "बताना" (batana). The language should be polite, direct, and professional.'
        }
    ]
};
