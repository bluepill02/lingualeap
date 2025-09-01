import type { ExamModule } from './types';

export const pscHindiProverbsAndSayings: ExamModule = {
    id: 'exam-psc-hindi-proverbs-sayings',
    title: 'State PSC Proverbs & Sayings',
    examName: 'State PSC',
    language: 'Hindi',
    category: 'Proverbs & Sayings',
    vocabulary: [
        {
            word: 'अधजल गगरी छलकत जाए (Adhjal gagri chhalkat jaye)',
            romanization: 'Adhjal gagri chhalkat jaye',
            definition: 'A person with little knowledge boasts the most (empty vessels make the most noise).',
            partOfSpeech: 'Proverb',
            sentence: 'उसे आता कुछ नहीं, बस अधजल गगरी छलकत जाए वाली बात है।',
            sentenceRoman: 'Use aata kuch nahi, bas adhjal gagri chhalkat jaye wali baat hai.',
            sentenceTranslation: 'He doesn\'t know anything, it\'s just a case of an empty vessel making the most noise.'
        },
        {
            word: 'नाच न जाने आँगन टेढ़ा (Naach na jaane aangan tedha)',
            romanization: 'Naach na jaane aangan tedha',
            definition: 'Blaming one\'s tools for one\'s own incompetence (a bad workman quarrels with his tools).',
            partOfSpeech: 'Proverb',
            sentence: 'जब वह परीक्षा में फेल हो गया, तो उसने कहा कि प्रश्नपत्र कठिन था - नाच न जाने आँगन टेढ़ा।',
            sentenceRoman: 'Jab vah pariksha mein fail ho gaya, to usne kaha ki prashnapatra kathin tha - naach na jaane aangan tedha.',
            sentenceTranslation: 'When he failed the exam, he said the paper was difficult - a bad workman quarrels with his tools.'
        },
        {
            word: 'बन्दर क्या जाने अदरक का स्वाद (Bandar kya jaane adrak ka swaad)',
            romanization: 'Bandar kya jaane adrak ka swaad',
            definition: 'Someone who cannot appreciate something of value (casting pearls before swine).',
            partOfSpeech: 'Proverb',
            sentence: 'उसे शास्त्रीय संगीत सुनाना तो बन्दर क्या जाने अदरक का स्वाद वाली बात है।',
            sentenceRoman: 'Use shastriya sangeet sunana toh bandar kya jaane adrak ka swaad wali baat hai.',
            sentenceTranslation: 'Making him listen to classical music is like casting pearls before swine.'
        },
        {
            word: 'सौ सुनार की, एक लोहार की (Sau sunar ki, ek lohar ki)',
            romanization: 'Sau sunar ki, ek lohar ki',
            definition: 'A single decisive blow is more effective than many feeble ones.',
            partOfSpeech: 'Proverb',
            sentence: 'वे उसे महीनों तक परेशान करते रहे, पर उसने एक ही शिकायत में उनकी नौकरी खतरे में डाल दी - सौ सुनार की, एक लोहार की।',
            sentenceRoman: 'Ve use mahino tak pareshan karte rahe, par usne ek hi shikayat mein unki naukri khatre mein daal di - sau sunar ki, ek lohar ki.',
            sentenceTranslation: 'They bothered him for months, but with one complaint he put their jobs at risk - a single blow of a blacksmith is more effective.'
        },
        {
            word: 'घर का भेदी लंका ढाए (Ghar ka bhedi lanka dhaye)',
            romanization: 'Ghar ka bhedi lanka dhaye',
            definition: 'An insider\'s betrayal can bring down a mighty fortress.',
            partOfSpeech: 'Proverb',
            sentence: 'विभीषण घर का भेदी था जिसने रावण की लंका ढहा दी।',
            sentenceRoman: 'Vibhishan ghar ka bhedi tha jisne Ravan ki Lanka dhaha di.',
            sentenceTranslation: 'Vibhishan was the insider who brought down Ravana\'s Lanka.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the correct meaning of "नाच न जाने आँगन टेढ़ा"?',
            options: ['Someone who loves to dance', 'A crooked courtyard', 'Blaming tools for one\'s own failure', 'Dancing in a difficult place'],
            answer: 'Blaming tools for one\'s own failure'
        },
        {
            type: 'multiple-choice',
            question: 'The proverb "घर का भेदी लंका ढाए" warns against what?',
            options: ['Building a weak house', 'Fighting with family', 'The danger of traitors or insiders', 'Leaving your home'],
            answer: 'The danger of traitors or insiders'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A person with little knowledge showing off is like "अधजल गगरी ____ जाए".',
            answer: 'छलकत'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Offering something valuable to someone who can\'t appreciate it is like "____ क्या जाने अदरक का स्वाद".',
            answer: 'बन्दर'
        },
        {
            type: 'multiple-choice',
            question: 'Which proverb signifies that one strong action is better than many weak ones?',
            options: ['घर का भेदी लंका ढाए', 'सौ सुनार की, एक लोहार की', 'बन्दर क्या जाने अदरक का स्वाद', 'अधजल गगरी छलकत जाए'],
            answer: 'सौ सुनार की, एक लोहार की'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Misinterpreting the Context',
            tip: 'Proverbs are deeply cultural. For instance, "Ghar ka bhedi lanka dhaye" refers to the story of Vibhishana from the Ramayana. Understanding the mythological or historical context can greatly clarify the meaning and ensure correct application in sentence-formation tasks.'
        },
        {
            pitfall: 'Using Proverbs in Inappropriate Situations',
            tip: 'While you might know the meaning, using a proverb in the wrong social or formal context can be awkward. Pay attention to the sample sentences. Proverbs are often used to comment on a situation, so ensure the context of your sentence matches the proverb\'s wisdom.'
        }
    ]
};
