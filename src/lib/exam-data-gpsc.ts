
import type { ExamModule } from './types';

export const gpscGujaratiProverbs: ExamModule = {
    id: 'exam-gpsc-gujarati-proverbs',
    title: 'GPSC: Gujarati Proverbs & Sayings',
    examName: 'GPSC Class 1-2',
    language: 'Gujarati',
    category: 'Proverbs & Sayings',
    vocabulary: [
        {
            word: 'પારકી આશ સદા નિરાશ (Parki aash sada nirash)',
            romanization: 'Parki aash sada nirash',
            definition: 'Relying on others always leads to disappointment.',
            partOfSpeech: 'Proverb',
            sentence: 'પોતાના કામ માટે બીજા પર આધાર ન રાખવો, કારણ કે પારકી આશ સદા નિરાશ.',
            sentenceRoman: 'Potana kaam maate bija par aadhar na rakhvo, kaaran ke parki aash sada nirash.',
            sentenceTranslation: 'One should not depend on others for their work, because depending on others always leads to disappointment.'
        },
        {
            word: 'ગાજ્યા મેઘ વરસે નહિ (Gajya megh varse nahi)',
            romanization: 'Gajya megh varse nahi',
            definition: 'Those who make the most threats often do the least (barking dogs seldom bite).',
            partOfSpeech: 'Proverb',
            sentence: 'તે ફક્ત ધમકીઓ આપે છે, કંઈ કરતો નથી, સાચે જ ગાજ્યા મેઘ વરસે નહિ।',
            sentenceRoman: 'Te fakt dhamkio aape chhe, kai karto nathi, saache j gajya megh varse nahi.',
            sentenceTranslation: 'He only gives threats, does nothing, truly barking dogs seldom bite.'
        },
        {
            word: 'ના બોલવામાં નવ ગુણ (Na bolvama nav gun)',
            romanization: 'Na bolvama nav gun',
            definition: 'There are nine virtues in not speaking; silence is golden.',
            partOfSpeech: 'Proverb',
            sentence: 'જ્યારે તમને પરિસ્થિતિ વિશે ખાતરી ન હોય, ત્યારે યાદ રાખો કે ના બોલવામાં નવ ગુણ.',
            sentenceRoman: 'Jyare tamne paristhiti vishe khatri na hoy, tyare yaad rakho ke na bolvama nav gun.',
            sentenceTranslation: 'When you are not sure about the situation, remember that silence is golden.'
        },
        {
            word: 'સંપ ત્યાં જંપ (Samp tya jamp)',
            romanization: 'Samp tya jamp',
            definition: 'Where there is unity, there is peace and prosperity.',
            partOfSpeech: 'Proverb',
            sentence: 'પરિવારમાં સંપ ત્યાં જંપ હોય તો જ પ્રગતિ શક્ય છે।',
            sentenceRoman: 'Parivarma samp tya jamp hoy to j pragati shakya chhe.',
            sentenceTranslation: 'Progress is possible only if there is unity and peace in the family.'
        },
        {
            word: 'ધીરજના ફળ મીઠા (Dhirajna phal mitha)',
            romanization: 'Dhirajna phal mitha',
            definition: 'The fruits of patience are sweet.',
            partOfSpeech: 'Proverb',
            sentence: 'સફળતા માટે ઉતાવળ ન કરો, ધીરજના ફળ મીઠા હોય છે।',
            sentenceRoman: 'Safalta maate utaval na karo, dhirajna phal mitha hoy chhe.',
            sentenceTranslation: 'Do not rush for success, the fruits of patience are sweet.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the meaning of the proverb "ગાજ્યા મેઘ વરસે નહિ"?',
            options: ['Rain is coming', 'People who talk a lot do little', 'Loud clouds are dangerous', 'It will not rain today'],
            answer: 'People who talk a lot do little'
        },
        {
            type: 'multiple-choice',
            question: 'Which proverb emphasizes the virtue of unity?',
            options: ['પારકી આશ સદા નિરાશ', 'ધીરજના ફળ મીઠા', 'સંપ ત્યાં જંપ', 'ના બોલવામાં નવ ગુણ'],
            answer: 'સંપ ત્યાં જંપ'
        },
        {
            type: 'fill-in-the-blank',
            question: '"____ આશ સદા નિરાશ" - this proverb advises self-reliance.',
            answer: 'પારકી'
        },
        {
            type: 'fill-in-the-blank',
            question: 'To advise someone to be patient, you would say "____ ફળ મીઠા".',
            answer: 'ધીરજના'
        },
        {
            type: 'multiple-choice',
            question: 'The proverb "ના બોલવામાં નવ ગુણ" suggests that it is often best to be:',
            options: ['Talkative', 'Honest', 'Loud', 'Silent'],
            answer: 'Silent'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Literal Interpretation of Proverbs',
            tip: 'Gujarati proverbs (કહેવતો) are metaphorical. For example, "ગાજ્યા મેઘ વરસે નહિ" literally means "thundering clouds don\'t rain," but its actual meaning applies to people who boast but don\'t act. Always focus on the figurative, moral meaning.'
        },
        {
            pitfall: 'Incorrect Contextual Usage',
            tip: 'Knowing the meaning is one thing, but using the proverb correctly in a sentence is another. For GPSC descriptive papers, ensure the situation you describe in your sentence logically leads to the proverb as a conclusion. For instance, describe a situation of a family prospering, and then conclude with "આમ, સંપ ત્યાં જંપ."'
        }
    ]
};
