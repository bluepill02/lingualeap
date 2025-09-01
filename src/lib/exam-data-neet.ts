
import type { ExamModule } from './types';

export const neetPhysicsTamil: ExamModule = {
    id: 'exam-neet-physics-tamil',
    title: 'NEET: Physics (Optics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Physics',
    syllabusMapping: [
        {
            topic: 'Ray Optics and Optical Instruments',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 6: Ray Optics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 9: Ray Optics and Optical Instruments',
            notes: 'TN Board book has detailed derivations. NCERT has more conceptual questions and real-world examples. Focus on numerical problems from both books. Lens Maker\'s formula is critical.'
        }
    ],
    vocabulary: [
        {
            word: 'ஒளிவிலகல் (Olivillagal)',
            romanization: 'Olivillagal',
            definition: 'Refraction. This is the bending of light when it travels from one medium (ஊடகம்) to another (e.g., from air to water). This happens because the speed of light changes. Analogy: It\'s like a car moving from a smooth road onto a sandy patch; one wheel slows down first, causing the car to turn. This is why a pencil in a glass of water looks bent.',
            partOfSpeech: 'Noun',
            sentence: 'நீர் உள்ள குவளையில் உள்ள குச்சி வளைந்து காணப்படுவதற்கு ஒளிவிலகல் ஒரு காரணம்.',
            sentenceRoman: 'Neer ulla kuvalaiyil ulla kuchi valaindhu kaanappaduvatharku olivillagal oru kaaranam.',
            sentenceTranslation: 'Refraction is a reason why a stick in a glass of water appears bent.'
        },
        {
            word: 'குவிலென்சு (Kuvilensu)',
            romanization: 'Kuvilensu',
            definition: 'Convex Lens. A lens that is thicker in the middle and converges (ஒருங்கிணைக்கிறது) parallel rays of light to a single focal point. Think of a magnifying glass focusing sunlight to a small, hot point. It is used to correct hypermetropia (தூரப்பார்வை).',
            partOfSpeech: 'Noun',
            sentence: 'தொலைநோக்கிகளில் பொருட்களை பெரிதாக்க குவிலென்சுகள் பயன்படுத்தப்படுகின்றன.',
            sentenceRoman: 'Tholainookkigalil porutkalai perithaakka kuvilensugal payanpaduthappadukinrana.',
            sentenceTranslation: 'Convex lenses are used in telescopes to magnify objects.'
        },
        {
            word: 'குழிலென்சு (Kulilensu)',
            romanization: 'Kulilensu',
            definition: 'Concave Lens. A lens that is thinner in the middle and diverges (விரிக்கிறது) a straight beam of light. It spreads the light out. This is commonly used in spectacles to correct myopia (கிட்டப்பார்வை).',
            partOfSpeech: 'Noun',
            sentence: 'கிட்டப்பார்வை குறைபாட்டை சரிசெய்ய குழிலென்சு கொண்ட கண்ணாடிகள் உதவுகின்றன.',
            sentenceRoman: 'Kittapparvai kuraipaattai sariseyya kulilensu konda kannaadigal uthavukinrana.',
            sentenceTranslation: 'Spectacles with concave lenses help to correct myopia (nearsightedness).'
        },
        {
            word: 'கோளகப் பிறழ்ச்சி (Kolaga piralchi)',
            romanization: 'Kolaga piralchi',
            definition: 'Spherical Aberration. This is an imperfection or defect in lenses where light rays hitting the edge of the lens focus at a slightly different point than rays hitting the center. This causes the image to be blurry. It is a limitation of using spherical surfaces for lenses.',
            partOfSpeech: 'Noun',
            sentence: 'தரம் குறைந்த லென்சுகளில் கோளகப் பிறழ்ச்சி ஒரு பொதுவான সমস্যা ஆகும்.',
            sentenceRoman: 'Tharam kuraintha lensugalil kolaga piralchi oru pothuvaana pirachanai aagum.',
            sentenceTranslation: 'Spherical aberration is a common problem in low-quality lenses.'
        },
        {
            word: 'அலைநீளம் (Alaineelam)',
            romanization: 'Alaineelam',
            definition: 'Wavelength (λ). The distance over which the wave\'s shape repeats. In the visible spectrum, red light has the longest wavelength, and violet light has the shortest. Longer wavelength means lower energy.',
            partOfSpeech: 'Noun',
            sentence: 'சிவப்பு நிறத்தின் அலைநீளம் ஊதா நிறத்தை விட அதிகம்.',
            sentenceRoman: 'Sivappu niraththin alaineelam oodhaa niraththai vida adhigam.',
            sentenceTranslation: 'The wavelength of red light is greater than that of violet light.'
        },
        {
            word: 'அதிர்வெண் (Athirven)',
            romanization: 'Athirven',
            definition: 'Frequency (f). The number of waves that pass a point in a given amount of time. Frequency is directly proportional to energy (E = hf). Violet light has a higher frequency and thus more energy than red light.',
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
            tip: 'This is the most common place to lose marks. Remember this simple rule: For a குவிலென்சு (convex lens), focal length (f) is always positive. For a குழிலென்சு (concave lens), it is always negative. Always measure all distances from the optical center. Light direction is positive.'
        },
        {
            pitfall: 'Lens Maker\'s Formula Application (லென்சு உருவாக்குபவர் சூத்திரம்)',
            tip: 'This is a high-yield formula for NEET. The key is to correctly identify the signs of the radii of curvature (R1 and R2). Remember the formula: 1/f = (n-1)(1/R1 - 1/R2). For a biconvex lens (இருபுறமும் குவிந்த), R1 is positive and R2 is negative, making the (1/R1 - 1/R2) term positive. Practice this for different lens types.'
        }
    ]
};
