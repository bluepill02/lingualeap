
import type { ExamModule } from './types';

export const pscHindiProverbsAndSayings: ExamModule = {
    id: 'exam-psc-hindi-proverbs-sayings',
    title: 'State PSC: Hindi Proverbs & Vocabulary',
    examName: 'State PSC',
    language: 'Hindi',
    category: 'General Hindi',
    vocabulary: [
        {
            word: 'अधजल गगरी छलकत जाए',
            romanization: 'Adhjal gagri chhalkat jaye',
            definition: 'A person with little knowledge boasts the most (empty vessels make the most noise).',
            partOfSpeech: 'Proverb (कहावत)',
            sentence: 'उसे आता कुछ नहीं, बस अधजल गगरी छलकत जाए वाली बात है।',
            sentenceRoman: 'Use aata kuch nahi, bas adhjal gagri chhalkat jaye wali baat hai.',
            sentenceTranslation: 'He doesn\'t know anything, it\'s just a case of an empty vessel making the most noise.'
        },
        {
            word: 'नाच न जाने आँगन टेढ़ा',
            romanization: 'Naach na jaane aangan tedha',
            definition: 'Blaming one\'s tools for one\'s own incompetence (a bad workman quarrels with his tools).',
            partOfSpeech: 'Proverb (कहावत)',
            sentence: 'जब वह परीक्षा में फेल हो गया, तो उसने कहा कि प्रश्नपत्र कठिन था - नाच न जाने आँगन टेढ़ा।',
            sentenceRoman: 'Jab vah pariksha mein fail ho gaya, to usne kaha ki prashnapatra kathin tha - naach na jaane aangan tedha.',
            sentenceTranslation: 'When he failed the exam, he said the paper was difficult - a bad workman quarrels with his tools.'
        },
        {
            word: 'आँख का अँधा नाम नयनसुख',
            romanization: 'Aankh ka andha naam nayansukh',
            definition: 'Name is opposite to one\'s qualities (e.g., a blind person named "Joy of the Eyes").',
            partOfSpeech: 'Proverb (कहावत)',
            sentence: 'उसका नाम तो अमीरचंद है पर वह बहुत गरीब है, यह तो वही बात हुई, आँख का अँधा नाम नयनसुख।',
            sentenceRoman: 'Uska naam toh Amirchand hai par vah bahut gareeb hai, yeh toh wahi baat hui, aankh ka andha naam nayansukh.',
            sentenceTranslation: 'His name is Amirchand (lord of the rich) but he is very poor, this is a case of name being opposite to qualities.'
        },
        {
            word: 'अपना हाथ जगन्नाथ',
            romanization: 'Apna haath Jagannath',
            definition: 'One should rely on one\'s own efforts and abilities.',
            partOfSpeech: 'Proverb (कहावत)',
            sentence: 'दूसरों की मदद का इंतजार मत करो, अपना हाथ जगन्नाथ।',
            sentenceRoman: 'Doosron ki madad ka intezar mat karo, apna haath Jagannath.',
            sentenceTranslation: 'Don\'t wait for others\' help, rely on your own hands.'
        },
        {
            word: 'अँगूठा दिखाना',
            romanization: 'Angootha dikhana',
            definition: 'To refuse flatly.',
            partOfSpeech: 'Idiom (मुहावरा)',
            sentence: 'जब मैंने उससे मदद माँगी, तो उसने मुझे अँगूठा दिखा दिया।',
            sentenceRoman: 'Jab maine usse madad maangi, to usne mujhe angootha dikha diya.',
            sentenceTranslation: 'When I asked him for help, he flatly refused me.'
        },
        {
            word: 'आँखें फेर लेना',
            romanization: 'Aankhein pher lena',
            definition: 'To become indifferent or hostile.',
            partOfSpeech: 'Idiom (मुहावरा)',
            sentence: 'काम निकलते ही उसने मुझसे आँखें फेर लीं।',
            sentenceRoman: 'Kaam nikalte hi usne mujhse aankhein pher leen.',
            sentenceTranslation: 'As soon as his work was done, he became indifferent to me.'
        },
        {
            word: 'जो ईश्वर में विश्वास रखता हो',
            romanization: 'Jo Ishwar mein vishwas rakhta ho',
            definition: 'One who believes in God.',
            partOfSpeech: 'One-Word Substitution',
            sentence: 'आस्तिक (Aastik)',
            sentenceTranslation: 'Theist'
        },
        {
            word: 'जिसका कोई शत्रु न जन्मा हो',
            romanization: 'Jiska koi shatru na janma ho',
            definition: 'One whose enemy is not yet born.',
            partOfSpeech: 'One-Word Substitution',
            sentence: 'अजातशत्रु (Ajatshatru)',
            sentenceTranslation: 'A person without enemies'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the meaning of the idiom "अँगूठा दिखाना"?',
            options: ['To show thumb', 'To challenge', 'To refuse flatly', 'To praise'],
            answer: 'To refuse flatly'
        },
        {
            type: 'multiple-choice',
            question: 'The proverb "नाच न जाने आँगन टेढ़ा" is used for someone who:',
            options: ['Is a good dancer', 'Has a crooked house', 'Blames their tools for their own failure', 'Likes to dance in courtyards'],
            answer: 'Blames their tools for their own failure'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The one-word substitution for "One who believes in God" is ____.',
            answer: 'आस्तिक'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The proverb "अपना हाथ ____" promotes self-reliance.',
            answer: 'जगन्नाथ'
        },
        {
            type: 'multiple-choice',
            question: 'What does "आँखें फेर लेना" signify?',
            options: ['To look away', 'To become hostile or indifferent', 'To have sore eyes', 'To inspect closely'],
            answer: 'To become hostile or indifferent'
        },
        {
            type: 'multiple-choice',
            question: 'A person named "Shantanu" (peaceful) who is always angry is an example of which proverb?',
            options: ['अपना हाथ जगन्नाथ', 'अधजल गगरी छलकत जाए', 'आँख का अँधा नाम नयनसुख', 'नाच न जाने आँगन टेढ़ा'],
            answer: 'आँख का अँधा नाम नयनसुख'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Literal Interpretation of Proverbs & Idioms',
            tip: 'Proverbs (कहावतें) and idioms (मुहावरे) are metaphorical. "Naach na jaane aangan tedha" is not about dancing or courtyards; it\'s about blaming external factors for personal shortcomings. Always focus on the figurative, moral, or contextual meaning.'
        },
        {
            pitfall: 'Incorrect Contextual Usage',
            tip: 'Knowing the meaning is one thing, but using a proverb correctly in a sentence is another. For descriptive papers in PSC exams, ensure the situation you describe logically leads to the proverb as a conclusion. For example, describe someone boasting with little knowledge, and then conclude with "...यह तो अधजल गगरी छलकत जाए वाली बात हुई।"'
        },
        {
            pitfall: 'Confusing Idioms and Proverbs',
            tip: 'An idiom (मुहावरा) is a phrase whose meaning is not deducible from the individual words (e.g., "to kick the bucket"). A proverb (कहावत) is a short sentence stating a general truth or piece of advice (e.g., "slow and steady wins the race"). Identify which is which as questions can be specific.'
        }
    ]
};
