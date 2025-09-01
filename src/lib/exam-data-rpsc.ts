
import type { ExamModule } from './types';

export const rpscRajasthaniVocabulary: ExamModule = {
    id: 'exam-rpsc-rajasthani-vocab',
    title: 'RPSC: Rajasthani Vocabulary & Idioms',
    examName: 'RPSC',
    language: 'Rajasthani',
    category: 'Vocabulary & Idioms',
    vocabulary: [
        {
            word: 'खम्मा घणी (Khamma Ghani)',
            romanization: 'Khamma Ghani',
            definition: 'A respectful greeting, equivalent to "hello" or "greetings".',
            partOfSpeech: 'Phrase',
            sentence: 'म्हेمانों का स्वागत खम्मा घणी कहकर किया गया।',
            sentenceRoman: 'Mehmano ka swagat khamma ghani kehkar kiya gaya.',
            sentenceTranslation: 'The guests were welcomed by saying "Khamma Ghani".'
        },
        {
            word: 'पधारो (Padharo)',
            romanization: 'Padharo',
            definition: 'Welcome, please come in.',
            partOfSpeech: 'Verb',
            sentence: 'पधारो म्हारे देस, राजस्थान आपका इंतजार कर रहा है।',
            sentenceRoman: 'Padharo mhare des, Rajasthan aapka intezar kar raha hai.',
            sentenceTranslation: 'Welcome to my country, Rajasthan is waiting for you.'
        },
        {
            word: 'काळजो (Kaljo)',
            romanization: 'Kaljo',
            definition: 'Heart, liver; used idiomatically to mean "darling" or "very dear".',
            partOfSpeech: 'Noun',
            sentence: 'माँ ने अपने बेटे को "म्हारो काळजो" कहकर पुकारा।',
            sentenceRoman: 'Maa ne apne bete ko "mharo kaljo" kehkar pukara.',
            sentenceTranslation: 'The mother called her son "my darling".'
        },
        {
            word: 'घणो (Ghano)',
            romanization: 'Ghano',
            definition: 'Very, much, a lot.',
            partOfSpeech: 'Adverb',
            sentence: 'आज तो घणो तावड़ो है।',
            sentenceRoman: 'Aaj toh ghano taavdo hai.',
            sentenceTranslation: 'It is very sunny today.'
        },
        {
            word: 'बात की बतंगड़ बणाणो (Baat ki batangad banana)',
            romanization: 'Baat ki batangad banana',
            definition: 'To make a mountain out of a molehill.',
            partOfSpeech: 'Idiom',
            sentence: 'छोटी सी समस्या थी, उसने तो बात की बतंगड़ बणा दी।',
            sentenceRoman: 'Chhoti si samasya thi, usne toh baat ki batangad bana di.',
            sentenceTranslation: 'It was a small problem, he made a mountain out of a molehill.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the traditional Rajasthani greeting?',
            options: ['राम राम (Ram Ram)', 'नमस्कार (Namaskar)', 'खम्मा घणी (Khamma Ghani)', 'पधारो (Padharo)'],
            answer: 'खम्मा घणी (Khamma Ghani)'
        },
        {
            type: 'multiple-choice',
            question: 'The word "घणो" (Ghano) means:',
            options: ['A little', 'Welcome', 'Heart', 'Very/Much'],
            answer: 'Very/Much'
        },
        {
            type: 'fill-in-the-blank',
            question: 'To welcome someone into your home, you would say "____".',
            answer: 'पधारो'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The idiom for making a mountain out of a molehill is "बात की ____ बणाणो".',
            answer: 'बतंगड़'
        },
        {
            type: 'multiple-choice',
            question: 'If a mother calls her child "म्हारो काळजो", what does she mean?',
            options: ['My liver', 'My problem', 'My darling', 'My guest'],
            answer: 'My darling'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing "Khamma Ghani" and "Padharo"',
            tip: '"Khamma Ghani" is a general greeting like "hello". "Padharo" is a specific welcome, meaning "please come in" or "welcome". While both express hospitality, their usage is different. Use "Khamma Ghani" when meeting someone and "Padharo" when inviting them into a space.'
        },
        {
            pitfall: 'Misusing "Ghano"',
            tip: '"Ghano" is a very common adverb in Rajasthani. It can be used to intensify adjectives (like "ghano sundar" - very beautiful) or to quantify nouns ("ghano paani" - a lot of water). Practice using it in different contexts to understand its versatility.'
        }
    ]
};
