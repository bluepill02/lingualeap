
import type { ExamModule } from './types';

export const wbcsBengaliSynonymsAntonyms: ExamModule = {
    id: 'exam-wbcs-bengali-synonyms-antonyms',
    title: 'WBCS: Bengali Synonyms & Antonyms',
    examName: 'WBCS',
    language: 'Bengali',
    category: 'Synonyms & Antonyms',
    vocabulary: [
        {
            word: 'অম্বু (Ombu)',
            romanization: 'Ombu',
            definition: 'Synonym: জল (Jol), বারি (Bari); Antonym: অগ্নি (Ogni)',
            partOfSpeech: 'Noun',
            sentence: 'তৃষ্ণার্ত পথিক গাছের ছায়ায় বসে অম্বু পান করল।',
            sentenceRoman: 'Trishnarto pothik gachher chhayay bose ombu paan korlo.',
            sentenceTranslation: 'The thirsty traveler sat in the shade of the tree and drank water.'
        },
        {
            word: 'উন্নতি (Unnoti)',
            romanization: 'Unnoti',
            definition: 'Synonym: उत्कर्ष (Utkorsho), শ্রীবৃদ্ধি (Shribriddhi); Antonym: অবনতি (Obonoti)',
            partOfSpeech: 'Noun',
            sentence: 'কঠোর পরিশ্রমে তার ব্যবসার উন্নতি হয়েছে।',
            sentenceRoman: 'Kothor porishrome tar byabshar unnoti hoyeche.',
            sentenceTranslation: 'His business has prospered through hard work.'
        },
        {
            word: 'সরল (Shorol)',
            romanization: 'Shorol',
            definition: 'Synonym: সহজ (Sohoj), ঋজু (Riju); Antonym: জটিল (Jotil), বক্র (Bokro)',
            partOfSpeech: 'Adjective',
            sentence: 'তিনি একজন অত্যন্ত সরল মনের মানুষ।',
            sentenceRoman: 'Tini ekjon otyonto shorol moner manush.',
            sentenceTranslation: 'He is a very simple-minded person.'
        },
        {
            word: 'প্রাচীন (Prachin)',
            romanization: 'Prachin',
            definition: 'Synonym: পুরাতন (Puraton), সনাতন (Shonaton); Antonym: নবীন (Nobin), আধুনিক (Adhunik)',
            partOfSpeech: 'Adjective',
            sentence: 'এই মন্দিরটি একটি প্রাচীন স্থাপত্যের নিদর্শন।',
            sentenceRoman: 'Ei mondirti ekti prachin sthaphotyer nidorśon.',
            sentenceTranslation: 'This temple is an example of ancient architecture.'
        },
        {
            word: 'ঐক্য (Oikko)',
            romanization: 'Oikko',
            definition: 'Synonym: মিলন (Milon), সদ্ভাব (Sodbhab); Antonym: অনৈক্য (Onoikko), বিভেদ (Bibhed)',
            partOfSpeech: 'Noun',
            sentence: 'ঐক্যই একটি জাতির উন্নতির মূল চাবিকাঠি।',
            sentenceRoman: 'Oikkoi ekti jatir unnotir mul chabikathi.',
            sentenceTranslation: 'Unity is the main key to a nation\'s progress.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the antonym of "উন্নতি" (Unnoti)?',
            options: ['উৎকর্ষ (Utkorsho)', 'শ্রীবৃদ্ধি (Shribriddhi)', 'অবনতি (Obonoti)', 'বৃদ্ধি (Briddhi)'],
            answer: 'অবনতি (Obonoti)'
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is a synonym for "সরল" (Shorol)?',
            options: ['জটিল (Jotil)', 'কঠিন (Kothin)', 'বক্র (Bokro)', 'সহজ (Sohoj)'],
            answer: 'সহজ (Sohoj)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The antonym of "প্রাচীন" (Prachin) is ____.',
            answer: 'নবীন'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The synonym of "অম্বু" (Ombu) is ____.',
            answer: 'জল'
        },
        {
            type: 'multiple-choice',
            question: 'Which word means the opposite of "ঐক্য" (Oikko)?',
            options: ['মিলন (Milon)', 'বিভেদ (Bibhed)', 'সংহতি (Shonghoti)', 'একতা (Ekota)'],
            answer: 'বিভেদ (Bibhed)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing "Tatsama" and "Tadbhava" Synonyms',
            tip: 'Bengali vocabulary has words derived directly from Sanskrit (Tatsama) and those evolved from Sanskrit (Tadbhava). For example, for "water," both "অম্বু" (Ombu - Tatsama) and "জল" (Jol - Tadbhava) are synonyms. WBCS exams often test knowledge of the more formal Tatsama words. When studying, note which synonyms are more literary or formal.'
        },
        {
            pitfall: 'Incorrectly Forming Antonyms with Prefixes',
            tip: 'Many Bengali antonyms are formed by adding prefixes like "অ-" (o-), "অন-" (on-), or "বি-" (bi-). However, the rules are not always straightforward. For example, the antonym of "ঐক্য" (Oikko) is "অনৈক্য" (Onoikko), not "অঐক্য." It is better to memorize the specific antonym for common words rather than trying to guess the prefix.'
        }
    ]
};
