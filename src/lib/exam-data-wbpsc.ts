import type { ExamModule } from './types';

export const wbpscBengaliOneWord: ExamModule = {
    id: 'exam-wbpsc-bengali-oneword',
    title: 'WBPSC: Bengali One-Word Substitutions',
    examName: 'WBPSC',
    language: 'Bengali',
    category: 'One-Word Substitution',
    vocabulary: [
        {
            word: 'অজাতশত্রু (Ojatoshotru)',
            romanization: 'Ojatoshotru',
            definition: 'One who has no enemies.',
            partOfSpeech: 'Noun',
            sentence: 'তার বিনয়ী স্বভাবের জন্য সে সকলের কাছে অজাতশত্রু ছিল।',
            sentenceRoman: 'Tar binoyi swabhaber jonnyo she shokoler kachhe ojatoshotru chhilo.',
            sentenceTranslation: 'Due to his humble nature, he was one with no enemies to all.'
        },
        {
            word: 'চিরস্থায়ী (Chirosthayi)',
            romanization: 'Chirosthayi',
            definition: 'That which lasts forever, permanent.',
            partOfSpeech: 'Adjective',
            sentence: 'পৃথিবীতে কোনো কিছুই চিরস্থায়ী নয়।',
            sentenceRoman: 'Prithibite kono kichhui chirosthayi noy.',
            sentenceTranslation: 'Nothing in this world is permanent.'
        },
        {
            word: 'সহোদর (Shohodor)',
            romanization: 'Shohodor',
            definition: 'Born of the same mother; a uterine brother.',
            partOfSpeech: 'Noun',
            sentence: 'রাম ও লক্ষণ সহোদর ভাই ছিলেন।',
            sentenceRoman: 'Ram o Lokkhon shohodor bhai chilen.',
            sentenceTranslation: 'Ram and Lakshman were uterine brothers.'
        },
        {
            word: 'স্বাবলম্বী (Swabolombi)',
            romanization: 'Swabolombi',
            definition: 'Self-reliant, independent.',
            partOfSpeech: 'Adjective',
            sentence: 'শিক্ষার প্রধান উদ্দেশ্য হলো মানুষকে স্বাবলম্বী করে তোলা।',
            sentenceRoman: 'Shikkhar prodhan uddeshyo holo manushke swabolombi kore tola.',
            sentenceTranslation: 'The main purpose of education is to make people self-reliant.'
        },
        {
            word: 'অনুকরণীয় (Onukoronio)',
            romanization: 'Onukoronio',
            definition: 'Worthy of imitation, exemplary.',
            partOfSpeech: 'Adjective',
            sentence: 'মহাত্মা গান্ধীর জীবন সকলের জন্য অনুকরণীয়।',
            sentenceRoman: 'Mohatma Gandhir jibon shokoler jonnyo onukoronio.',
            sentenceTranslation: 'The life of Mahatma Gandhi is exemplary for all.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the one-word substitution for "one who has no enemies"?',
            options: ['সহোদর (Shohodor)', 'স্বাবলম্বী (Swabolombi)', 'অজাতশত্রু (Ojatoshotru)', 'অনুকরণীয় (Onukoronio)'],
            answer: 'অজাতশত্রু (Ojatoshotru)'
        },
        {
            type: 'multiple-choice',
            question: 'The term for "self-reliant" is:',
            options: ['চিরস্থায়ী (Chirosthayi)', 'স্বাবলম্বী (Swabolombi)', 'সহোদর (Shohodor)', 'অজাতশত্রু (Ojatoshotru)'],
            answer: 'স্বাবলম্বী (Swabolombi)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Something that is worthy of imitation is called ____.',
            answer: 'অনুকরণীয়'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A brother born from the same mother is known as a ____.',
            answer: 'সহোদর'
        },
        {
            type: 'multiple-choice',
            question: 'Which word means "permanent"?',
            options: ['অনুকরণীয় (Onukoronio)', 'চিরস্থায়ী (Chirosthayi)', 'স্বাবলম্বী (Swabolombi)', 'অজাতশত্রু (Ojatoshotru)'],
            answer: 'চিরস্থায়ী (Chirosthayi)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Relying on Literal Meaning',
            tip: 'Many one-word substitutions in Bengali are derived from Sanskrit (Tatsama words) and their meaning is not literal. For example, "Ojatoshotru" literally means "unborn enemy," but idiomatically means "one who has no enemies." Focus on memorizing the specific idiomatic meaning.'
        },
        {
            pitfall: 'Spelling Errors with Similar Sounding Words',
            tip: 'Bengali has many words that sound similar but have different spellings and meanings (e.g., শোন (shon) - listen vs. সোন (shon) - hemp). For one-word substitutions, precise spelling is key. Practice writing the words, paying close attention to vowels (কার) and conjunct consonants (যুক্তাক্ষর).'
        }
    ]
};
