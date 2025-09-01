import type { ExamModule } from './types';

export const upscHindiIdiomsAndPhrases: ExamModule = {
    id: 'exam-upsc-hindi-idioms-phrases',
    title: 'UPSC Idioms & Phrases',
    examName: 'UPSC Prelims',
    language: 'Hindi',
    category: 'Idioms & Phrases',
    vocabulary: [
        {
            word: 'आँख का तारा (Aankh ka tara)',
            romanization: 'Aankh ka tara',
            definition: 'Very dear, apple of one\'s eye',
            partOfSpeech: 'Idiom',
            sentence: 'वह अपनी माँ की आँख का तारा है।',
            sentenceRoman: 'Vah apni maa ki aankh ka tara hai.',
            sentenceTranslation: 'He is the apple of his mother\'s eye.'
        },
        {
            word: 'ईद का चाँद होना (Eid ka chaand hona)',
            romanization: 'Eid ka chaand hona',
            definition: 'To be seen very rarely',
            partOfSpeech: 'Idiom',
            sentence: 'जब से तुम शहर गए हो, ईद का चाँद हो गए हो।',
            sentenceRoman: 'Jab se tum sheher gaye ho, eid ka chaand ho gaye ho.',
            sentenceTranslation: 'Ever since you went to the city, you are seen very rarely.'
        },
        {
            word: 'राई का पहाड़ बनाना (Rai ka pahad banana)',
            romanization: 'Rai ka pahad banana',
            definition: 'To make a mountain out of a molehill',
            partOfSpeech: 'Idiom',
            sentence: 'छोटी सी बात पर राई का पहाड़ मत बनाओ।',
            sentenceRoman: 'Chhoti si baat par rai ka pahad mat banao.',
            sentenceTranslation: 'Don\'t make a mountain out of a molehill over a small matter.'
        },
        {
            word: 'हवा से बातें करना (Hawa se baatein karna)',
            romanization: 'Hawa se baatein karna',
            definition: 'To go very fast',
            partOfSpeech: 'Idiom',
            sentence: 'उसका घोड़ा हवा से बातें कर रहा था।',
            sentenceRoman: 'Uska ghoda hawa se baatein kar raha tha.',
            sentenceTranslation: 'His horse was going very fast.'
        },
        {
            word: 'चिकना घड़ा होना (Chikna ghada hona)',
            romanization: 'Chikna ghada hona',
            definition: 'To be shameless or impervious to criticism',
            partOfSpeech: 'Idiom',
            sentence: 'उस पर किसी बात का असर नहीं होता, वह तो चिकना घड़ा है।',
            sentenceRoman: 'Us par kisi baat ka asar nahi hota, vah toh chikna ghada hai.',
            sentenceTranslation: 'Nothing affects him, he is impervious to criticism.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the meaning of "ईद का चाँद होना"?',
            options: ['To be very beautiful', 'To be seen very rarely', 'To celebrate a festival', 'To be very bright'],
            answer: 'To be seen very rarely'
        },
        {
            type: 'multiple-choice',
            question: 'If someone is "हवा से बातें करना", they are...',
            options: ['Talking a lot', 'Going very fast', 'Very light', 'Boasting'],
            answer: 'Going very fast'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A person who is shameless or impervious to criticism is called a "____ ____".',
            answer: 'चिकना घड़ा'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Making a mountain out of a molehill is expressed by the idiom "____ का पहाड़ बनाना".',
            answer: 'राई'
        },
        {
            type: 'multiple-choice',
            question: 'A person who is very dear to someone is their "____ का तारा".',
            options: ['आसमान', 'दिन', 'रात', 'आँख'],
            answer: 'आँख'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Literal Translation',
            tip: 'Idioms are figurative. "Chikna ghada" literally means "smooth pot," but its idiomatic meaning is completely different. Focus on understanding the contextual meaning provided in the sample sentence rather than the literal words.'
        },
        {
            pitfall: 'Incorrect Usage in Sentences',
            tip: 'Simply knowing the meaning isn\'t enough for UPSC exams; you must know how to use the idiom correctly. Pay close attention to the grammatical structure of the sample sentences. Notice how the verb in the idiom sometimes changes to match the tense and subject.'
        }
    ]
};
