
import type { ExamModule } from './types';

export const neetPhysicsTamil: ExamModule = {
    id: 'exam-neet-physics-tamil',
    title: 'NEET: Physics (Optics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Physics',
    vocabulary: [
        {
            word: 'ஒளிவிலகல் (Olivillagal)',
            romanization: 'Olivillagal',
            definition: 'The bending of a wave when it enters a medium where its speed is different (Refraction).',
            partOfSpeech: 'Noun',
            sentence: 'நீர் உள்ள குவளையில் உள்ள குச்சி வளைந்து காணப்படுவதற்கு ஒளிவிலகல் ஒரு காரணம்.',
            sentenceRoman: 'Neer ulla kuvalaiyil ulla kuchi valaindhu kaanappaduvatharku olivillagal oru kaaranam.',
            sentenceTranslation: 'Refraction is a reason why a stick in a glass of water appears bent.'
        },
        {
            word: 'குவிலென்சு (Kuvilensu)',
            romanization: 'Kuvilensu',
            definition: 'A lens that converges rays of light that are traveling parallel to its principal axis (Convex Lens).',
            partOfSpeech: 'Noun',
            sentence: 'தொலைநோக்கிகளில் பொருட்களை பெரிதாக்க குவிலென்சுகள் பயன்படுத்தப்படுகின்றன.',
            sentenceRoman: 'Tholainookkigalil porutkalai perithaakka kuvilensugal payanpaduthappadukinrana.',
            sentenceTranslation: 'Convex lenses are used in telescopes to magnify objects.'
        },
        {
            word: 'குழிலென்சு (Kulilensu)',
            romanization: 'Kulilensu',
            definition: 'A lens that diverges a straight light beam from the source into a diminished, upright, virtual image (Concave Lens).',
            partOfSpeech: 'Noun',
            sentence: 'கிட்டப்பார்வை குறைபாட்டை சரிசெய்ய குழிலென்சு கொண்ட கண்ணாடிகள் உதவுகின்றன.',
            sentenceRoman: 'Kittapparvai kuraipaattai sariseyya kulilensu konda kannaadigal uthavukinrana.',
            sentenceTranslation: 'Spectacles with concave lenses help to correct myopia (nearsightedness).'
        },
        {
            word: 'கோளகப் பிறழ்ச்சி (Kolaga piralchi)',
            romanization: 'Kolaga piralchi',
            definition: 'A distortion in an image formed by a lens or curved mirror, caused by the shape of the lens or mirror (Spherical Aberration).',
            partOfSpeech: 'Noun',
            sentence: 'தரம் குறைந்த லென்சுகளில் கோளகப் பிறழ்ச்சி ஒரு பொதுவான সমস্যা ஆகும்.',
            sentenceRoman: 'Tharam kuraintha lensugalil kolaga piralchi oru pothuvaana pirachanai aagum.',
            sentenceTranslation: 'Spherical aberration is a common problem in low-quality lenses.'
        },
        {
            word: 'அலைநீளம் (Alaineelam)',
            romanization: 'Alaineelam',
            definition: 'The spatial period of a periodic wave – the distance over which the wave\'s shape repeats (Wavelength).',
            partOfSpeech: 'Noun',
            sentence: 'சிவப்பு நிறத்தின் அலைநீளம் ஊதா நிறத்தை விட அதிகம்.',
            sentenceRoman: 'Sivappu niraththin alaineelam oodhaa niraththai vida adhigam.',
            sentenceTranslation: 'The wavelength of red light is greater than that of violet light.'
        },
        {
            word: 'அதிர்வெண் (Athirven)',
            romanization: 'Athirven',
            definition: 'The number of occurrences of a repeating event per unit of time (Frequency).',
            partOfSpeech: 'Noun',
            sentence: 'ஒளியின் ஆற்றல் அதன் அதிர்வெண்ணைப் பொறுத்தது.',
            sentenceRoman: 'Oliyin aatral adhan athirvennaip poruththathu.',
            sentenceTranslation: 'The energy of light depends on its frequency.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the Tamil word for "Refraction"?',
            options: ['ஒளி எதிரொளிப்பு (Oli edhirolippu)', 'ஒளிவிலகல் (Olivillagal)', 'முழு அக எதிரொளிப்பு (Muzhu aga edhirolippu)', 'ஒளிச்சிதறல் (Olichitharal)'],
            answer: 'ஒளிவிலகல் (Olivillagal)'
        },
        {
            type: 'multiple-choice',
            question: 'Which lens is used to correct myopia (nearsightedness)?',
            options: ['குவிலென்சு (Kuvilensu)', 'குழிலென்சு (Kulilensu)', 'சமதள லென்சு (Samathala lensu)', 'உருளை லென்சு (Urulai lensu)'],
            answer: 'குழிலென்சு (Kulilensu)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The distance over which a wave\'s shape repeats is called ____.',
            answer: 'அலைநீளம்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Image distortion in a lens due to its shape is called ____.',
            answer: 'கோளகப் பிறழ்ச்சி'
        },
        {
            type: 'multiple-choice',
            question: 'The energy of a photon is directly proportional to its:',
            options: ['அலைநீளம் (Alaineelam)', 'வேகம் (Vegam)', 'அதிர்வெண் (Athirven)', 'பருமன் (Paruman)'],
            answer: 'அதிர்வெண் (Athirven)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Sign Convention in Lens Formula (லென்சு சூத்திரத்தில் குறியீட்டு மரபு)',
            tip: 'TN government school students often get confused with sign conventions. Remember this rule: for a குவிலென்சு (convex lens), the focal length (f) is always positive. For a குழிலென்சு (concave lens), it is always negative. Always measure distances from the optical center. Real images have positive v, virtual images have negative v.'
        },
        {
            pitfall: 'Lens Maker\'s Formula Application (லென்சு உருவாக்குபவர் சூத்திரம்)',
            tip: 'This is a high-yield formula for NEET. The key is to correctly identify the radii of curvature (R1 and R2). Remember the formula: 1/f = (n-1)(1/R1 - 1/R2). For a biconvex lens, R1 is positive and R2 is negative, which makes the (1/R1 - 1/R2) term positive. Practice this for different lens types.'
        }
    ]
};
