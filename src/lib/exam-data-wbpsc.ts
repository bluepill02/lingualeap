
import type { ExamModule } from './types';

export const wbpscBengaliOneWord: ExamModule = {
    id: 'exam-wbpsc-bengali-oneword',
    title: 'WBPSC: Bengali One-Word Substitutions',
    examName: 'WBPSC Miscellaneous, Clerkship',
    language: 'Bengali',
    category: 'One-Word Substitution (এক কথায় প্রকাশ)',
    vocabulary: [
        {
            word: 'অজাতশত্রু (Ojatoshotru)',
            romanization: 'Ojatoshotru',
            definition: 'One who has no enemies. (যার কোনো শত্রু জন্মায়নি)',
            partOfSpeech: 'Noun',
            sentence: 'তার বিনয়ী স্বভাবের জন্য সে সকলের কাছে অজাতশত্রু ছিল।',
            sentenceRoman: 'Tar binoyi swabhaber jonnyo she shokoler kachhe ojatoshotru chhilo.',
            sentenceTranslation: 'Due to his humble nature, he was one with no enemies to all.'
        },
        {
            word: 'চিরস্থায়ী (Chirosthayi)',
            romanization: 'Chirosthayi',
            definition: 'That which lasts forever; permanent. (যা চিরকাল স্থায়ী)',
            partOfSpeech: 'Adjective',
            sentence: 'পৃথিবীতে কোনো কিছুই চিরস্থায়ী নয়।',
            sentenceRoman: 'Prithibite kono kichhui chirosthayi noy.',
            sentenceTranslation: 'Nothing in this world is permanent.'
        },
        {
            word: 'সহোদর (Shohodor)',
            romanization: 'Shohodor',
            definition: 'Born of the same mother; a uterine brother. (একই মায়ের গর্ভজাত)',
            partOfSpeech: 'Noun',
            sentence: 'রাম ও লক্ষণ সহোদর ভাই ছিলেন।',
            sentenceRoman: 'Ram o Lokkhon shohodor bhai chilen.',
            sentenceTranslation: 'Ram and Lakshman were uterine brothers.'
        },
        {
            word: 'স্বাবলম্বী (Swabolombi)',
            romanization: 'Swabolombi',
            definition: 'Self-reliant, independent. (যে নিজের উপর নির্ভর করে)',
            partOfSpeech: 'Adjective',
            sentence: 'শিক্ষার প্রধান উদ্দেশ্য হলো মানুষকে স্বাবলম্বী করে তোলা।',
            sentenceRoman: 'Shikkhar prodhan uddeshyo holo manushke swabolombi kore tola.',
            sentenceTranslation: 'The main purpose of education is to make people self-reliant.'
        },
        {
            word: 'অনুকরণীয় (Onukoronio)',
            romanization: 'Onukoronio',
            definition: 'Worthy of imitation, exemplary. (যা অনুকরণ করার যোগ্য)',
            partOfSpeech: 'Adjective',
            sentence: 'মহাত্মা গান্ধীর জীবন সকলের জন্য অনুকরণীয়।',
            sentenceRoman: 'Mohatma Gandhir jibon shokoler jonnyo onukoronio.',
            sentenceTranslation: 'The life of Mahatma Gandhi is exemplary for all.'
        },
        {
            word: 'কৃতজ্ঞ (Kritogno)',
            romanization: 'Kritogno',
            definition: 'One who is grateful for a favour done. (যে উপকারীর উপকার স্বীকার করে)',
            partOfSpeech: 'Adjective',
            sentence: 'আমি আপনার সাহায্যের জন্য আপনার প্রতি কৃতজ্ঞ।',
            sentenceRoman: 'Ami apnar sahajyer jonnyo apnar proti kritogno.',
            sentenceTranslation: 'I am grateful to you for your help.'
        },
        {
            word: 'অকৃতজ্ঞ (Okritogno)',
            romanization: 'Okritogno',
            definition: 'One who is not grateful; ungrateful. (যে উপকারীর উপকার স্বীকার করে না)',
            partOfSpeech: 'Adjective',
            sentence: 'অকৃতজ্ঞ ব্যক্তির থেকে দূরে থাকাই ভালো।',
            sentenceRoman: 'Okritogno byaktir theke dure thakai bhalo.',
            sentenceTranslation: 'It is better to stay away from an ungrateful person.'
        },
        {
            word: 'সর্বজ্ঞ (Sorbogyo)',
            romanization: 'Sorbogyo',
            definition: 'One who knows everything. (যিনি সবকিছু জানেন)',
            partOfSpeech: 'Adjective',
            sentence: 'ঈশ্বর সর্বজ্ঞ, তিনি আমাদের মনের কথাও জানেন।',
            sentenceRoman: 'Ishwar sorbogyo, tini amader moner kothao janen.',
            sentenceTranslation: 'God is omniscient, He even knows our thoughts.'
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
        },
        {
            type: 'multiple-choice',
            question: 'An ungrateful person is called:',
            options: ['কৃতজ্ঞ (Kritogno)', 'সর্বজ্ঞ (Sorbogyo)', 'অকৃতজ্ঞ (Okritogno)', 'সহোদর (Shohodor)'],
            answer: 'অকৃতজ্ঞ (Okritogno)'
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
        },
        {
            pitfall: 'Confusing similar concepts',
            tip: 'Differentiate clearly between similar terms like "কৃতজ্ঞ" (grateful) and "অকৃতজ্ঞ" (ungrateful). The prefix "অ-" often negates the meaning, which is a common pattern to look for.'
        }
    ]
};
