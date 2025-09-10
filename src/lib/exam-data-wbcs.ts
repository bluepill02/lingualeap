
import type { ExamModule } from './types';

export const wbcsBengaliSynonymsAntonyms: ExamModule = {
    id: 'exam-wbcs-bengali-synonyms-antonyms',
    title: 'WBCS: Bengali Synonyms & Antonyms',
    examName: 'WBCS',
    language: 'Bengali',
    category: 'Vocabulary (সমার্থক ও বিপরীতার্থক শব্দ)',
    vocabulary: [
        {
            word: 'অম্বু (Ombu)',
            romanization: 'Ombu',
            definition: 'Synonym: জল (Jol), বারি (Bari), সলিল (Sholil); Antonym: অগ্নি (Ogni)',
            partOfSpeech: 'Noun',
            sentence: 'তৃষ্ণার্ত পথিক গাছের ছায়ায় বসে অম্বু পান করল।',
            sentenceRoman: 'Trishnarto pothik gachher chhayay bose ombu paan korlo.',
            sentenceTranslation: 'The thirsty traveler sat in the shade of the tree and drank water.'
        },
        {
            word: 'উন্নতি (Unnoti)',
            romanization: 'Unnoti',
            definition: 'Synonym: उत्कर्ष (Utkorsho), শ্রীবৃদ্ধি (Shribriddhi), উন্নতি (Unnati); Antonym: অবনতি (Obonoti), অধঃপতন (Odhahpoton)',
            partOfSpeech: 'Noun',
            sentence: 'কঠোর পরিশ্রমে তার ব্যবসার উন্নতি হয়েছে।',
            sentenceRoman: 'Kothor porishrome tar byabshar unnoti hoyeche.',
            sentenceTranslation: 'His business has prospered through hard work.'
        },
        {
            word: 'সরল (Shorol)',
            romanization: 'Shorol',
            definition: 'Synonym: সহজ (Sohoj), ঋজু (Riju), অকপট (Okopot); Antonym: জটিল (Jotil), বক্র (Bokro), কুটিল (Kutil)',
            partOfSpeech: 'Adjective',
            sentence: 'তিনি একজন অত্যন্ত সরল মনের মানুষ।',
            sentenceRoman: 'Tini ekjon otyonto shorol moner manush.',
            sentenceTranslation: 'He is a very simple-minded person.'
        },
        {
            word: 'প্রাচীন (Prachin)',
            romanization: 'Prachin',
            definition: 'Synonym: পুরাতন (Puraton), সনাতن (Shonaton), সাবেক (Shabek); Antonym: নবীন (Nobin), আধুনিক (Adhunik), অধুনা (Odhuna)',
            partOfSpeech: 'Adjective',
            sentence: 'এই মন্দিরটি একটি প্রাচীন স্থাপত্যের নিদর্শন।',
            sentenceRoman: 'Ei mondirti ekti prachin sthaphotyer nidorśon.',
            sentenceTranslation: 'This temple is an example of ancient architecture.'
        },
        {
            word: 'ঐক্য (Oikko)',
            romanization: 'Oikko',
            definition: 'Synonym: মিলন (Milon), সদ্ভাব (Sodbhab), একতা (Ekota); Antonym: অনৈক্য (Onoikko), বিভেদ (Bibhed), বিচ্ছেদ (Bichchhed)',
            partOfSpeech: 'Noun',
            sentence: 'ঐক্যই একটি জাতির উন্নতির মূল চাবিকাঠি।',
            sentenceRoman: 'Oikkoi ekti jatir unnotir mul chabikathi.',
            sentenceTranslation: 'Unity is the main key to a nation\'s progress.'
        },
        {
            word: 'আকাশ (Akash)',
            romanization: 'Akash',
            definition: 'Synonym: গগন (Gogon), অম্বর (Ombor), ব্যোম (Byom); Antonym: পাতাল (Patal), ভূতল (Bhutol)',
            partOfSpeech: 'Noun',
            sentence: 'আজ আকাশ মেঘমুক্ত এবং পরিষ্কার।',
            sentenceRoman: 'Aaj akash meghmukto ebong porishkar.',
            sentenceTranslation: 'Today the sky is cloudless and clear.'
        },
        {
            word: 'সুন্দর (Shundor)',
            romanization: 'Shundor',
            definition: 'Synonym: মনোরম (Monorom), চারু (Charu), সুদর্শন (Shudorshon); Antonym: কুৎসিত (Kutsit), বিশ্রী (Bishri)',
            partOfSpeech: 'Adjective',
            sentence: 'কাশ্মীরের প্রাকৃতিক দৃশ্য খুবই সুন্দর।',
            sentenceRoman: 'Kashmir-er prakritik drishyo khubi shundor.',
            sentenceTranslation: 'The natural scenery of Kashmir is very beautiful.'
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
        },
        {
            type: 'multiple-choice',
            question: 'What is a synonym for "আকাশ" (Akash)?',
            options: ['পাতাল (Patal)', 'পৃথিবী (Prithibi)', 'গগন (Gogon)', 'সমুদ্র (Shomudro)'],
            answer: 'গগন (Gogon)'
        },
        {
            type: 'multiple-choice',
            question: 'What is the antonym of "সুন্দর" (Shundor)?',
            options: ['মনোরম (Monorom)', 'চারু (Charu)', 'কুৎসিত (Kutsit)', 'আকর্ষণীয় (Akorshoniyo)'],
            answer: 'কুৎসিত (Kutsit)'
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
        },
        {
            pitfall: 'Choosing a Close but Incorrect Synonym',
            tip: 'Some words might have similar meanings but are not true synonyms. For example, "সহজ" (sohoj - easy) is a better synonym for "সরল" (shorol - simple) than "সাধারণ" (shadharon - ordinary). Pay attention to the nuance and context provided in the question.'
        }
    ]
};
