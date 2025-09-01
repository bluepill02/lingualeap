import type { ExamModule } from './types';

export const gujaratiBankingProverbs: ExamModule = {
    id: 'exam-banking-gujarati-proverbs',
    title: 'Banking Clerical: Gujarati Proverbs',
    examName: 'Banking Clerical',
    language: 'Gujarati',
    category: 'Proverbs & Sayings',
    vocabulary: [
        {
            word: 'નાણાં વગરનો નાથિયો, નાણે નાથાલાલ (Nana vagarno nathiyo, nane nathalal)',
            romanization: 'Nana vagarno nathiyo, nane nathalal',
            definition: 'A person without money is insignificant, but with money, they are respected (Money makes the man).',
            partOfSpeech: 'Proverb',
            sentence: 'તેને નોકરી મળતાં જ બધા તેને માન આપવા લાગ્યા, સાચે જ નાણાં વગરનો નાથિયો, નાણે નાથાલાલ.',
            sentenceRoman: 'Tene nokri malta j badha tene maan aapva laagya, saache j nana vagarno nathiyo, nane nathalal.',
            sentenceTranslation: 'As soon as he got a job, everyone started respecting him, truly money makes the man.'
        },
        {
            word: 'હિંમતે મર્દા તો મદદે ખુદા (Himmate marda to madade khuda)',
            romanization: 'Himmate marda to madade khuda',
            definition: 'If a man has courage, God will help him (God helps those who help themselves).',
            partOfSpeech: 'Proverb',
            sentence: 'મુશ્કેલીઓથી ડરશો નહીં, હિંમતે મર્દા તો મદદે ખુદા.',
            sentenceRoman: 'Mushkelio thi darsho nahi, himmate marda to madade khuda.',
            sentenceTranslation: 'Don\'t be afraid of difficulties, God helps those who help themselves.'
        },
        {
            word: 'લોભિયા હોય ત્યાં ધુતારા ભૂખે ન મરે (Lobhiya hoy tya dhutara bhukhe na mare)',
            romanization: 'Lobhiya hoy tya dhutara bhukhe na mare',
            definition: 'Where there are greedy people, cheaters will not starve.',
            partOfSpeech: 'Proverb',
            sentence: 'ઓનલાઈન સ્કેમ એટલા માટે સફળ થાય છે કારણ કે લોભિયા હોય ત્યાં ધુતારા ભૂખે ન મરે.',
            sentenceRoman: 'Online scam etla maate safal thay chhe kaaran ke lobhiya hoy tya dhutara bhukhe na mare.',
            sentenceTranslation: 'Online scams are successful because where there are greedy people, cheaters will not starve.'
        },
        {
            word: 'ટીપે ટીપે સરોવર ભરાય (Tipe tipe sarovar bharay)',
            romanization: 'Tipe tipe sarovar bharay',
            definition: 'A lake gets filled drop by drop (many a little makes a mickle). Often used to encourage saving.',
            partOfSpeech: 'Proverb',
            sentence: 'નાની બચતનું મહત્વ સમજો, કારણ કે ટીપે ટીપે સરોવર ભરાય.',
            sentenceRoman: 'Nani bachatnu mahatva samjo, kaaran ke tipe tipe sarovar bharay.',
            sentenceTranslation: 'Understand the importance of small savings, because a lake gets filled drop by drop.'
        },
        {
            word: 'પહેલું સુખ તે જાતે નર્યા (Pahelu sukh te jaate narya)',
            romanization: 'Pahelu sukh te jaate narya',
            definition: 'The first happiness is a healthy body.',
            partOfSpeech: 'Proverb',
            sentence: 'પૈસા કમાવવાની દોડમાં સ્વાસ્થ્યને અવગણશો નહીં, કારણ કે પહેલું સુખ તે જાતે નર્યા.',
            sentenceRoman: 'Paisa kamavani dodma swasthyane avaganasho nahi, kaaran ke pahelu sukh te jaate narya.',
            sentenceTranslation: 'Do not neglect health in the race to earn money, because the first happiness is a healthy body.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'Which proverb is often used to encourage the habit of saving money?',
            options: ['હિંમતે મર્દા તો મદદે ખુદા', 'લોભિયા હોય ત્યાં ધુતારા ભૂખે ન મરે', 'પહેલું સુખ તે જાતે નર્યા', 'ટીપે ટીપે સરોવર ભરાય'],
            answer: 'ટીપે ટીપે સરોવર ભરાય'
        },
        {
            type: 'multiple-choice',
            question: 'What is the meaning of "નાણાં વગરનો નાથિયો, નાણે નાથાલાલ"?',
            options: ['Money is the root of all evil', 'Money brings respect', 'You should not run after money', 'A man named Nathalal is rich'],
            answer: 'Money brings respect'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The proverb "____ હોય ત્યાં ધુતારા ભૂખે ન મરે" warns against greed.',
            answer: 'લોભિયા'
        },
        {
            type: 'fill-in-the-blank',
            question: '"____ મર્દા તો મદદે ખુદા" encourages self-help and courage.',
            answer: 'હિંમતે'
        },
        {
            type: 'multiple-choice',
            question: 'The proverb "પહેલું સુખ તે જાતે નર્યા" emphasizes the importance of:',
            options: ['Wealth', 'Family', 'Health', 'Knowledge'],
            answer: 'Health'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Not Understanding the Financial Context',
            tip: 'Proverbs like "ટીપે ટીપે સરોવર ભરાય" and "નાણાં વગરનો નાથિયો" are frequently used in financial literacy contexts in Gujarati. For banking exams, be prepared to see them in reading comprehension passages related to savings, loans, and wealth.'
        },
        {
            pitfall: 'Confusing Similar Proverbs',
            tip: 'Gujarati has many proverbs about wealth and fortune. Differentiate between proverbs about earning money (e.g., "હિંમતે મર્દા..."), saving money ("ટીપે ટીપે..."), and the effect of money ("નાણે નાથાલાલ"). Grouping them by theme during study can help clarify their specific applications.'
        }
    ]
};
