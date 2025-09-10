
import type { ExamModule } from './types';

export const sscCglHindiContent: ExamModule = {
    id: 'exam-ssc-cgl-hindi',
    title: 'SSC CGL: Hindi Language & Comprehension',
    examName: 'SSC CGL (Tier-II)',
    language: 'Hindi',
    category: 'General Hindi',
    
    vocabulary: [
        // Synonyms (पर्यायवाची)
        {
            word: 'अमृत (Amrit)',
            romanization: 'Amrit',
            definition: 'Synonym: सुधा (Sudha), पीयूष (Piyush), सोम (Som)',
            partOfSpeech: 'Noun',
            sentence: 'देवताओं ने सागर मंथन से अमृत निकाला।',
            sentenceRoman: 'Devtao ne sagar manthan se amrit nikala.',
            sentenceTranslation: 'The gods extracted nectar from the churning of the ocean.'
        },
        {
            word: 'अग्नि (Agni)',
            romanization: 'Agni',
            definition: 'Synonym: आग (Aag), पावक (Pavak), अनल (Anal)',
            partOfSpeech: 'Noun',
            sentence: 'यज्ञ में अग्नि प्रज्वलित की गई।',
            sentenceRoman: 'Yagya mein agni prajwalit ki gayi.',
            sentenceTranslation: 'The fire was lit in the holy ritual.'
        },
        // Antonyms (विलोम)
        {
            word: 'उत्थान (Utthan)',
            romanization: 'Utthan',
            definition: 'Antonym: पतन (Patan)',
            partOfSpeech: 'Noun',
            sentence: 'शिक्षा समाज के उत्थान के लिए आवश्यक है।',
            sentenceRoman: 'Shiksha samaj ke utthan ke liye avashyak hai.',
            sentenceTranslation: 'Education is necessary for the upliftment of society.'
        },
        {
            word: 'एकता (Ekta)',
            romanization: 'Ekta',
            definition: 'Antonym: अनेकता (Anekta), फूट (Foot)',
            partOfSpeech: 'Noun',
            sentence: 'राष्ट्रीय एकता देश की शक्ति है।',
            sentenceRoman: 'Rashtriya ekta desh ki shakti hai.',
            sentenceTranslation: 'National unity is the strength of the country.'
        },
        // Idioms (मुहावरे)
        {
            word: 'आँखों का तारा होना',
            romanization: 'Aankhon ka tara hona',
            definition: 'To be very dear (apple of one\'s eye).',
            partOfSpeech: 'Idiom',
            sentence: 'हर बच्चा अपनी माँ की आँखों का तारा होता है।',
            sentenceRoman: 'Har bachcha apni maa ki aankhon ka tara hota hai.',
            sentenceTranslation: 'Every child is the apple of their mother\'s eye.'
        },
        // One-word substitution (अनेक शब्दों के लिए एक शब्द)
         {
            word: 'अविश्वसनीय (Avishvasniya)',
            romanization: 'Avishvasniya',
            definition: 'That which cannot be believed; Unbelievable.',
            partOfSpeech: 'One-Word Substitution',
            sentence: 'उसने एक अविश्वसनीय कहानी सुनाई।',
            sentenceRoman: 'Usne ek avishvasniya kahani sunai.',
            sentenceTranslation: 'He told an unbelievable story.'
        }
    ],

    quizzes: [
        // Synonyms
        {
            type: 'multiple-choice',
            question: 'Which of the following is a synonym for "अग्नि"?',
            options: ['जल (Jal)', 'वायु (Vayu)', 'पावक (Pavak)', 'पृथ्वी (Prithvi)'],
            answer: 'पावक (Pavak)'
        },
        // Antonyms
        {
            type: 'multiple-choice',
            question: 'What is the antonym of "उत्थान"?',
            options: ['प्रगति (Pragati)', 'पतन (Patan)', 'उत्कर्ष (Utkarsh)', 'उन्नति (Unnati)'],
            answer: 'पतन (Patan)'
        },
        // Idioms
        {
            type: 'multiple-choice',
            question: 'What does the idiom "आँखों का तारा होना" mean?',
            options: ['To have beautiful eyes', 'To be a star', 'To be very dear', 'To see stars'],
            answer: 'To be very dear'
        },
        // One-word substitution
        {
            type: 'fill-in-the-blank',
            question: 'Something that is unbelievable is called ____.',
            answer: 'अविश्वसनीय'
        }
    ],

    errorAnalysis: [
        {
            pitfall: 'Confusing Synonyms with Antonyms',
            tip: 'Always read the question carefully. If it asks for a "विलोम" (vilom), you need an antonym. If it asks for a "पर्यायवाची" (paryayvachi), you need a synonym. Create separate mental buckets for each.'
        },
        {
            pitfall: 'Ignoring Nuances in Meaning',
            tip: 'Some synonyms might seem similar but are used in different contexts. For example, both "जल" (Jal) and "पानी" (Pani) mean water, but "जल" is more formal or pure. Pay attention to the sample sentences to understand the context.'
        }
    ]
};
