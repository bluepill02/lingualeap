
import type { ExamModule } from './types';

export const neetPhysicsTamil: ExamModule = {
    id: 'exam-neet-physics-tamil',
    title: 'NEET: Physics (Tamil)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Physics',
    vocabulary: [
        {
            word: 'விசை (Visai)',
            romanization: 'Visai',
            definition: 'An interaction that, when unopposed, will change the motion of an object (Force).',
            partOfSpeech: 'Noun',
            sentence: 'பொருளின் மீது விசை செயல்படும்போது அதன் திசைவேகம் மாறும்.',
            sentenceRoman: 'Porulin meethu visai seyalpadumpothu athan thisaivegam maarum.',
            sentenceTranslation: 'When a force acts on an object, its velocity will change.'
        },
        {
            word: 'ஆற்றல் (Aatral)',
            romanization: 'Aatral',
            definition: 'The capacity for doing work. It may exist in potential, kinetic, thermal, electrical, chemical, nuclear, or other various forms (Energy).',
            partOfSpeech: 'Noun',
            sentence: 'சூரியன் ஒரு மிகப்பெரிய ஆற்றல் மூலம் ஆகும்.',
            sentenceRoman: 'Sooriyan oru migapperiya aatral moolam aagum.',
            sentenceTranslation: 'The sun is a very large source of energy.'
        },
        {
            word: 'மின்னோட்டம் (Minnotam)',
            romanization: 'Minnotam',
            definition: 'A flow of electric charge, especially one through a conductor (Electric Current).',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு கடத்தியில் உள்ள மின்னூட்டங்களின் இயக்கமே மின்னோட்டம் எனப்படும்.',
            sentenceRoman: 'Oru kadathiyil ulla minnoottangalin iyakkame minnotam enappadum.',
            sentenceTranslation: 'The movement of electric charges in a conductor is called electric current.'
        },
        {
            word: 'அலை (Alai)',
            romanization: 'Alai',
            definition: 'A disturbance that transfers energy through matter or space, with little or no associated mass transport (Wave).',
            partOfSpeech: 'Noun',
            sentence: 'ஒளி மற்றும் ஒலி இரண்டும் அலை வடிவில் பயணிக்கின்றன.',
            sentenceRoman: 'Oli matrum oli irandum alai vadivil payanikkinrana.',
            sentenceTranslation: 'Both light and sound travel in the form of waves.'
        },
        {
            word: 'அதிர்வெண் (Athirven)',
            romanization: 'Athirven',
            definition: 'The number of occurrences of a repeating event per unit of time (Frequency).',
            partOfSpeech: 'Noun',
            sentence: 'வானொலி நிலையங்கள் வெவ்வேறு அதிர்வெண்களில் தங்கள் நிகழ்ச்சிகளை ஒலிபரப்புகின்றன.',
            sentenceRoman: 'Vaanoli nilaiyangal vevveru athirvenkalil thangal nigalchigalai oliparappukinrana.',
            sentenceTranslation: 'Radio stations broadcast their programs at different frequencies.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the Tamil word for "Force"?',
            options: ['ஆற்றல் (Aatral)', 'விசை (Visai)', 'அலை (Alai)', 'மின்னோட்டம் (Minnotam)'],
            answer: 'விசை (Visai)'
        },
        {
            type: 'multiple-choice',
            question: 'The flow of electric charge is known as:',
            options: ['அதிர்வெண் (Athirven)', 'ஆற்றல் (Aatral)', 'மின்னோட்டம் (Minnotam)', 'விசை (Visai)'],
            answer: 'மின்னோட்டம் (Minnotam)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The number of waves passing a point in a certain time is called ____.',
            answer: 'அதிர்வெண்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The capacity to do work is called ____.',
            answer: 'ஆற்றல்'
        },
        {
            type: 'multiple-choice',
            question: 'What is the Tamil term for "Wave"?',
            options: ['விசை (Visai)', 'அதிர்வெண் (Athirven)', 'ஆற்றல் (Aatral)', 'அலை (Alai)'],
            answer: 'அலை (Alai)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Unit Conversion Errors',
            tip: 'In NEET physics problems, a common mistake is forgetting to convert all units to the SI system (meters, kilograms, seconds) before calculation. For example, if distance is given in centimeters, always convert it to meters first.'
        },
        {
            pitfall: 'Sign Convention in Optics',
            tip: 'Forgetting the correct sign conventions for lenses and mirrors (e.g., focal length for a convex lens is positive, for a concave lens is negative) is a frequent source of errors. Create a simple chart for sign conventions and review it before solving problems.'
        }
    ]
};
