
import type { ExamModule } from './types';

export const tnPscTetVocabulary: ExamModule = {
    id: 'exam-tet-tamil-pedagogy',
    title: 'TET: General Tamil Pedagogy & Grammar',
    examName: 'Tamil Nadu TET',
    language: 'Tamil',
    category: 'Pedagogy & Grammar',
    vocabulary: [
        {
            word: 'கற்பித்தல் (Karpiththal)',
            romanization: 'Karpiththal',
            definition: 'Synonym: போதித்தல் (Pothiththal) - Teaching, Pedagogy',
            partOfSpeech: 'Noun',
            sentence: 'நல்ல கற்பித்தல் முறை மாணவர்களுக்குப் புரியும் வண்ணம் இருக்க வேண்டும்.',
            sentenceRoman: 'Nalla karpiththal murai maanavarhalukku puriyum vannam irukka vendum.',
            sentenceTranslation: 'A good teaching method should be understandable to students.'
        },
        {
            word: 'மதிப்பீடு (Mathippeedu)',
            romanization: 'Mathippeedu',
            definition: 'Synonym: அளவீடு (Alaveedu) - Assessment, Evaluation; Antonym: புறக்கணிப்பு (Purakkanippu) - Neglect',
            partOfSpeech: 'Noun',
            sentence: 'தொடர்ச்சியான மற்றும் முழுமையான மதிப்பீடு கற்றல் விளைவுகளை மேம்படுத்துகிறது.',
            sentenceRoman: 'Thodarchiyaana matrum mulumaiyaana mathippeedu katral vilaivugalai mempaduthugirathu.',
            sentenceTranslation: 'Continuous and comprehensive evaluation improves learning outcomes.'
        },
        {
            word: 'எழுவாய் (Ezhuvai)',
            romanization: 'Ezhuvai',
            definition: 'The subject of a sentence. Antonym: பயனிலை (Payanilai) - Predicate.',
            partOfSpeech: 'Grammar Term',
            sentence: '"கண்ணன் பாடம் படித்தான்" என்ற வாக்கியத்தில், "கண்ணன்" எழுவாய் ஆகும்.',
            sentenceRoman: '"Kannan paadam padithaan" endra vaakkiyathil, "Kannan" ezhuvai aagum.',
            sentenceTranslation: 'In the sentence "Kannan read the lesson," "Kannan" is the subject.'
        },
        {
            word: 'வல்லினம் (Vallinam)',
            romanization: 'Vallinam',
            definition: 'Hard consonants in Tamil (க், ச், ட், த், ப், ற்). Vallinam migum/miga idangal are key grammar concepts.',
            partOfSpeech: 'Grammar Term',
            sentence: 'நிலைமொழியின் இறுதியில் வல்லின மெய் மிகும் இடங்களை அறிவது அவசியம்.',
            sentenceRoman: 'Nilaimozhiyin iruthiyil vallina mei migum idangalai arivathu avasiyam.',
            sentenceTranslation: 'It is necessary to know the places where hard consonants are added at the end of a word.'
        },
        {
            word: 'உவமைத்தொகை (Uvamaithogai)',
            romanization: 'Uvamaithogai',
            definition: 'A type of compound word where the "like" or "as" (போன்ற) is hidden. E.g., மதிமுகம் (mathimugam) - face like a moon.',
            partOfSpeech: 'Grammar Term',
            sentence: '"மதிமுகம்" என்பது உவமைத்தொகைக்கு ஒரு சிறந்த எடுத்துக்காட்டு.',
            sentenceRoman: '"Mathimugam" enbathu uvamaithogaikku oru sirantha eduthukkaattu.',
            sentenceTranslation: '"Moon-face" is a great example of an allegorical compound.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the subject of a sentence called in Tamil?',
            options: ['பயனிலை (Payanilai)', 'செயப்படுபொருள் (Seyappaduporul)', 'எழுவாய் (Ezhuvai)', 'வினைச்சொல் (Vinaichol)'],
            answer: 'எழுவாய் (Ezhuvai)'
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is a "வல்லினம்" (Vallinam) consonant?',
            options: ['ய்', 'ல்', 'ம்', 'ப்'],
            answer: 'ப்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The process of teaching is known as ____ in Tamil.',
            answer: 'கற்பித்தல்'
        },
        {
            type: 'fill-in-the-blank',
            question: '"மதிமுகம்" (face like a moon) is an example of ____.',
            answer: 'உவமைத்தொகை'
        },
        {
            type: 'multiple-choice',
            question: 'What is the term for "assessment" or "evaluation" in the context of education?',
            options: ['கற்பித்தல் (Karpiththal)', 'மதிப்பீடு (Mathippeedu)', 'எழுவாய் (Ezhuvai)', 'வல்லினம் (Vallinam)'],
            answer: 'மதிப்பீடு (Mathippeedu)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing "Uvamaithogai" and "Uruvagam"',
            tip: 'In Tamil grammar, Uvamaithogai (simile-compound) implies "like" (e.g., malarpaatham - feet like a flower). Uruvagam (metaphor-compound) is more direct (e.g., paathakamalam - lotus-feet). For the TET, remember that Uvamaithogai compares, while Uruvagam equates.'
        },
        {
            pitfall: 'Incorrectly Identifying Vallinam Rules (வல்லினம் மிகுமிடங்கள்)',
            tip: 'The rules for adding a hard consonant between two words are critical. A common mistake is adding "க்" after a verb. Remember, a hard consonant is generally NOT added after a finite verb (e.g., "వந்த பையன்" is wrong, "வந்த பையன்" is right). Focus on rules related to cases (வேற்றுமை) and word types.'
        }
    ]
};
