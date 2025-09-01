
import type { ExamModule } from './types';

export const tnpscTamilVocabulary: ExamModule = {
    id: 'exam-tnpsc-tamil-general',
    title: 'TNPSC: General Tamil Vocabulary',
    examName: 'TNPSC Group 1-4',
    language: 'Tamil',
    category: 'General Tamil Vocabulary',
    vocabulary: [
        {
            word: 'அகவல் (Agaval)',
            romanization: 'Agaval',
            definition: 'Synonym: பாட்டு (Paattu) - Song, Poem',
            partOfSpeech: 'Noun',
            sentence: 'புலவர் தன் அகவல் மூலம் அரசனைப் புகழ்ந்தார்.',
            sentenceRoman: 'Pulavar than agaval mulam arasanai pugalnthaar.',
            sentenceTranslation: 'The poet praised the king through his poem.'
        },
        {
            word: 'இகல் (Igal)',
            romanization: 'Igal',
            definition: 'Antonym: நட்பு (Natpu) - Friendship',
            partOfSpeech: 'Noun',
            sentence: 'இரு நாடுகளுக்கு இடையே இருந்த இகல் முடிவுக்கு வந்தது.',
            sentenceRoman: 'Iru naadugalukku idaiye iruntha igal mudivukku vanthathu.',
            sentenceTranslation: 'The hostility between the two nations came to an end.'
        },
        {
            word: 'கானல் நீர் (Kaanal neer)',
            romanization: 'Kaanal neer',
            definition: 'An illusion or mirage; something that is deceptive.',
            partOfSpeech: 'Idiom',
            sentence: 'அவன் கொடுத்த வாக்குறுதிகள் எல்லாம் கானல் நீராகிப் போயின.',
            sentenceRoman: 'Avan kodutha vaakkuruthigal ellam kaanal neeragi poyina.',
            sentenceTranslation: 'All the promises he gave became a mirage.'
        },
        {
            word: 'தன்வினை (Thanvinai)',
            romanization: 'Thanvinai',
            definition: 'A sentence where the subject performs the action (Active Voice). Antonym: பிறவினை (Piravinai) - Passive Voice.',
            partOfSpeech: 'Grammar Term',
            sentence: '"அரசன் கோவிலைக் கட்டினான்" என்பது தன்வினை வாக்கியம்.',
            sentenceRoman: '"Arasan kovilai kattinaan" enbathu thanvinai vaakkiyam.',
            sentenceTranslation: '"The king built the temple" is an active voice sentence.'
        },
        {
            word: 'மரபுத்தொடர் (Marabuththodar)',
            romanization: 'Marabuththodar',
            definition: 'Idiomatic expression.',
            partOfSpeech: 'Noun',
            sentence: '"மனக்கோட்டை கட்டுதல்" என்பது ஒரு பொதுவான மரபுத்தொடர்.',
            sentenceRoman: '"Manakottai kattuthal" enbathu oru pothuvaana marabuththodar.',
            sentenceTranslation: '"Building castles in the air" is a common idiomatic expression.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the antonym of "இகல்" (Igal)?',
            options: ['போர் (Por)', 'பகை (Pagai)', 'நட்பு (Natpu)', 'சண்டை (Sandai)'],
            answer: 'நட்பு (Natpu)'
        },
        {
            type: 'multiple-choice',
            question: 'The idiom "கானல் நீர்" (Kaanal neer) refers to something that is...',
            options: ['Real', 'Clear', 'Deceptive', 'Permanent'],
            answer: 'Deceptive'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A sentence where the subject performs the action is known as ____.',
            answer: 'தன்வினை'
        },
        {
            type: 'fill-in-the-blank',
            question: '"பாட்டு" (Paattu) is a synonym for ____.',
            answer: 'அகவல்'
        },
        {
            type: 'multiple-choice',
            question: 'Which of these is an example of a "மரபுத்தொடர்" (Marabuththodar)?',
            options: ['அவன் வந்தான்', 'கதிரவன் உதித்தது', 'கம்பி நீட்டுதல்', 'மழை பெய்தது'],
            answer: 'கம்பி நீட்டுதல்'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing "Thanvinai" and "Piravinai"',
            tip: 'In Tamil grammar questions, distinguishing between active (தன்வினை) and passive (பிறவினை) voice is crucial. Remember, if the subject *does* the action, it\'s Thanvinai. If the action is *done to* the subject (often using suffixes like -பட்டது, -ப்பட்டது), it\'s Piravinai. Look for who is performing the action.'
        },
        {
            pitfall: 'Literal Interpretation of Idioms',
            tip: 'Tamil idioms (மரபுத்தொடர்கள்) have deep figurative meanings. For example, "கம்பி நீட்டுதல்" (Kambi neettuthal) literally means "to extend a wire," but idiomatically means "to escape." Always study the figurative meaning and the context in which it is used, as provided in exam materials.'
        }
    ]
};
