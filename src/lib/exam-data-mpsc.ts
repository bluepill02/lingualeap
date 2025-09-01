import type { ExamModule } from './types';

export const mpscMarathiIdioms: ExamModule = {
    id: 'exam-mpsc-marathi-idioms',
    title: 'MPSC: Marathi Idioms & Phrases',
    examName: 'MPSC Rajyaseva',
    language: 'Marathi',
    category: 'Idioms & Phrases',
    vocabulary: [
        {
            word: 'अंगावर काटा येणे (Angavar kata yene)',
            romanization: 'Angavar kata yene',
            definition: 'To get goosebumps due to fear or excitement.',
            partOfSpeech: 'Idiom',
            sentence: 'तो भयानक चित्रपट पाहून माझ्या अंगावर काटा आला.',
            sentenceRoman: 'To bhayanak chitrapat pahun majhya angavar kata aala.',
            sentenceTranslation: 'I got goosebumps after watching that horror movie.'
        },
        {
            word: 'पोटात गोळा येणे (Potat gola yene)',
            romanization: 'Potat gola yene',
            definition: 'To feel very scared or anxious.',
            partOfSpeech: 'Idiom',
            sentence: 'परीक्षेच्या निकालाची वाट पाहताना माझ्या पोटात गोळा आला होता।',
            sentenceRoman: 'Parikshechya nikalachi vaat pahtana majhya potat gola aala hota.',
            sentenceTranslation: 'I felt very anxious while waiting for the exam results.'
        },
        {
            word: 'डोळ्यात तेल घालून पाहणे (Dolyat tel ghalun pahane)',
            romanization: 'Dolyat tel ghalun pahane',
            definition: 'To watch very carefully and attentively.',
            partOfSpeech: 'Idiom',
            sentence: 'शिपाई रात्री डोळ्यात तेल घालून पहारा देत होता।',
            sentenceRoman: 'Shipai ratri dolyat tel ghalun pahara det hota.',
            sentenceTranslation: 'The guard was keeping watch very attentively at night.'
        },
        {
            word: 'तोंडात बोट घालणे (Tondat bot ghalne)',
            romanization: 'Tondat bot ghalne',
            definition: 'To be astonished or amazed.',
            partOfSpeech: 'Idiom',
            sentence: 'त्याची कलाकारी पाहून सर्वांनी तोंडात बोट घातली।',
            sentenceRoman: 'Tyachi kalakari pahun sarvanni tondat bot ghatli.',
            sentenceTranslation: 'Everyone was amazed to see his artistry.'
        },
        {
            word: 'राम नसणे (Ram nasne)',
            romanization: 'Ram nasne',
            definition: 'To have no substance or meaning; to be pointless.',
            partOfSpeech: 'Idiom',
            sentence: 'त्याच्या बोलण्यात काहीच राम नव्हता।',
            sentenceRoman: 'Tyachya bolnyat kahich ram navhta.',
            sentenceTranslation: 'There was no substance in his talk.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the meaning of the idiom "पोटात गोळा येणे"?',
            options: ['To be hungry', 'To feel very scared', 'To have a stomach ache', 'To feel happy'],
            answer: 'To feel very scared'
        },
        {
            type: 'multiple-choice',
            question: 'Which idiom means "to be astonished"?',
            options: ['अंगावर काटा येणे', 'राम नसणे', 'तोंडात बोट घालणे', 'डोळ्यात तेल घालून पाहणे'],
            answer: 'तोंडात बोट घालणे'
        },
        {
            type: 'fill-in-the-blank',
            question: 'To watch something very carefully is "____ तेल घालून पाहणे".',
            answer: 'डोळ्यात'
        },
        {
            type: 'fill-in-the-blank',
            question: 'If something is pointless, it is said to have no "____".',
            answer: 'राम'
        },
        {
            type: 'multiple-choice',
            question: 'Getting goosebumps out of fear is expressed by which idiom?',
            options: ['पोटात गोळा येणे', 'अंगावर काटा येणे', 'तोंडात बोट घालणे', 'राम नसणे'],
            answer: 'अंगावर काटा येणे'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Literal Interpretation of Idioms',
            tip: 'Marathi idioms are highly figurative. "Ram nasne" (राम नसणे) has nothing to do with the deity Lord Rama; it means "to be pointless". Always learn the idiomatic meaning in context, not the literal translation of the words.'
        },
        {
            pitfall: 'Confusing Similar-Sounding Idioms',
            tip: 'Idioms like "Potat gola yene" (anxious feeling in the stomach) and "Potat kaavle oradne" (to be very hungry) both relate to the stomach but have vastly different meanings. Create flashcards to practice and solidify the specific meaning of each idiom to avoid confusion.'
        }
    ]
};
