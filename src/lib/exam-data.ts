import type { ExamModule } from './types';

export const sscCglHindiSynonymsAntonyms: ExamModule = {
    id: 'exam-ssc-hindi-synonyms-antonyms',
    title: 'Rajbhasha Synonyms & Antonyms',
    examName: 'SSC CGL',
    language: 'Hindi',
    category: 'Synonyms & Antonyms',
    vocabulary: [
        {
            word: 'अमृत (Amrit)',
            romanization: 'Amrit',
            definition: 'Synonym: सुधा (Sudha), पीयूष (Piyush); Antonym: विष (Vish)',
            partOfSpeech: 'Noun',
            sentence: 'देवताओं ने सागर मंथन से अमृत निकाला।',
            sentenceRoman: 'Devtao ne sagar manthan se amrit nikala.',
            sentenceTranslation: 'The gods extracted nectar from the churning of the ocean.'
        },
        {
            word: 'अग्नि (Agni)',
            romanization: 'Agni',
            definition: 'Synonym: आग (Aag), पावक (Pavak); Antonym: जल (Jal)',
            partOfSpeech: 'Noun',
            sentence: 'यज्ञ में अग्नि प्रज्वलित की गई।',
            sentenceRoman: 'Yagya mein agni prajwalit ki gayi.',
            sentenceTranslation: 'The fire was lit in the holy ritual.'
        },
        {
            word: 'उत्थान (Utthan)',
            romanization: 'Utthan',
            definition: 'Synonym: उत्कर्ष (Utkarsh), प्रगति (Pragati); Antonym: पतन (Patan)',
            partOfSpeech: 'Noun',
            sentence: 'शिक्षा समाज के उत्थान के लिए आवश्यक है।',
            sentenceRoman: 'Shiksha samaj ke utthan ke liye avashyak hai.',
            sentenceTranslation: 'Education is necessary for the upliftment of society.'
        },
        {
            word: 'एकता (Ekta)',
            romanization: 'Ekta',
            definition: 'Synonym: मेल (Mel), संगठन (Sangathan); Antonym: अनेकता (Anekta)',
            partOfSpeech: 'Noun',
            sentence: 'राष्ट्रीय एकता देश की शक्ति है।',
            sentenceRoman: 'Rashtriya ekta desh ki shakti hai.',
            sentenceTranslation: 'National unity is the strength of the country.'
        },
        {
            word: 'नवीन (Naveen)',
            romanization: 'Naveen',
            definition: 'Synonym: नया (Naya), आधुनिक (Aadhunik); Antonym: प्राचीन (Prachin)',
            partOfSpeech: 'Adjective',
            sentence: 'उन्होंने एक नवीन दृष्टिकोण प्रस्तुत किया।',
            sentenceRoman: 'Unhone ek naveen drishtikon prastut kiya.',
            sentenceTranslation: 'He presented a new perspective.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the antonym of "उत्थान" (Utthan)?',
            options: ['प्रगति (Pragati)', 'पतन (Patan)', 'उत्कर्ष (Utkarsh)', 'उन्नति (Unnati)'],
            answer: 'पतन (Patan)'
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is a synonym for "अग्नि" (Agni)?',
            options: ['जल (Jal)', 'वायु (Vayu)', 'पावक (Pavak)', 'पृथ्वी (Prithvi)'],
            answer: 'पावक (Pavak)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The antonym of "नवीन" (Naveen) is ____.',
            answer: 'प्राचीन'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The synonym of "अमृत" (Amrit) is ____.',
            answer: 'सुधा'
        },
        {
            type: 'multiple-choice',
            question: 'Which word means the opposite of "एकता" (Ekta)?',
            options: ['संगठन (Sangathan)', 'फूट (Foot)', 'अनेकता (Anekta)', 'मेल (Mel)'],
            answer: 'अनेकता (Anekta)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing Synonyms with Antonyms',
            tip: 'Always read the question carefully. If it asks for a "विलोम" (vilom) or "विपरीतार्थक" (vipritarthak), you need an antonym. If it asks for a "पर्यायवाची" (paryayvachi) or "समानार्थक" (samanarthak), you need a synonym. Create separate mental buckets for each.'
        },
        {
            pitfall: 'Ignoring Nuances in Meaning',
            tip: 'Some synonyms might seem similar but are used in different contexts. For example, both "जल" (Jal) and "पानी" (Pani) mean water, but "जल" is more formal or pure. Pay attention to the sample sentences to understand the context.'
        }
    ]
};
