
import type { ExamModule } from './types';

export const neetPhysicsElectrostatics: ExamModule = {
    id: 'exam-neet-physics-electrostatics',
    title: 'NEET: Physics (Electrostatics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Physics',
    syllabusMapping: [
        {
            topic: 'Electric Charges and Fields',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 1: Electrostatics',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 1: Electric Charges and Fields',
            notes: 'Both syllabi cover this extensively. Focus on Coulomb\'s Law in vector form and electric field calculations for dipoles, as these are frequent question areas.'
        }
    ],
    vocabulary: [
        {
            word: 'மின்புலம் (Minpulam)',
            romanization: 'Minpulam',
            definition: 'Electric Field. The space around an electric charge where its influence can be felt by another charge. Analogy: Imagine it like the gravitational field around the Earth, but for electric charges.',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு புள்ளி மின்னூட்டத்தைச் சுற்றியுள்ள பகுதியில் மின்புலம் உருவாகிறது.',
            sentenceRoman: 'Oru pulli minnūṭṭattaic cuṟṟiyuḷḷa pakutiyil miṉpulam uruvākiṟatu.',
            sentenceTranslation: 'An electric field is created in the region around a point charge.'
        },
        {
            word: 'கூலொம் விதி (Coulomb\'s Law)',
            romanization: 'Coulomb Vithi',
            definition: 'Coulomb\'s Law. It states that the force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.',
            partOfSpeech: 'Law',
            sentence: 'கூலொம் விதியைப் பயன்படுத்தி இரு மின்னூட்டங்களுக்கு இடையிலான விசையைக் கணக்கிடலாம்.',
            sentenceRoman: 'Kūlom vitiyaip payaṉpaṭutti iru minnūṭṭaṅkaḷukku iṭaiyilāṉa vicaiyai kaṇakkiṭalām.',
            sentenceTranslation: 'The force between two charges can be calculated using Coulomb\'s Law.'
        },
        {
            word: 'மின் இருமுனை (Min Irumunai)',
            romanization: 'Min Irumunai',
            definition: 'Electric Dipole. A pair of equal and opposite charges separated by a small distance. A water molecule (H₂O) is a common example of an electric dipole.',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு மின் இருமுனையால் ஏற்படும் மின்புலம் அதன் அச்சுக் கோடு மற்றும் நடுவரைத் தளத்தில் வேறுபடும்.',
            sentenceRoman: 'Oru miṉ irumuṉaiyāl ēṟpaṭum miṉpulam ataṉ accuk kōṭu maṟṟum naṭuvarait taḷattil vēṟupaṭum.',
            sentenceTranslation: 'The electric field due to an electric dipole differs on its axial line and equatorial plane.'
        }
    ],
    workedExamples: [
        {
            problem: 'Two point charges, q₁ = +2μC and q₂ = -4μC, are placed 20 cm apart in air. What is the magnitude and nature of the force between them?',
            steps: [
                {
                    step: 1,
                    explanation: 'Identify the given values and convert them to SI units.',
                    calculation: 'q₁ = +2 x 10⁻⁶ C, q₂ = -4 x 10⁻⁶ C, r = 20 cm = 0.2 m. The constant k = 9 x 10⁹ Nm²/C².'
                },
                {
                    step: 2,
                    explanation: 'Use Coulomb\'s Law formula: F = k * |q₁ * q₂| / r²',
                    calculation: 'F = (9 x 10⁹) * |(2 x 10⁻⁶) * (-4 x 10⁻⁶)| / (0.2)²'
                },
                {
                    step: 3,
                    explanation: 'Calculate the product of the charges and the square of the distance.',
                    calculation: '|q₁ * q₂| = 8 x 10⁻¹² C². r² = 0.04 m²'
                },
                {
                    step: 4,
                    explanation: 'Substitute the values and solve for F.',
                    calculation: 'F = (9 x 10⁹) * (8 x 10⁻¹²) / 0.04 = (72 x 10⁻³) / 0.04 = 1800 x 10⁻³ = 1.8 N'
                },
                {
                    step: 5,
                    explanation: 'Determine the nature of the force. Since the charges are opposite (one positive, one negative), the force is attractive.',
                    calculation: 'Nature of force: Attractive (ஈர்ப்பு விசை)'
                }
            ],
            answer: 'The magnitude of the force is 1.8 N, and it is an attractive force.',
            tip: 'In NEET, time is critical. Notice that (8 / 0.04) is the same as (8 * 100 / 4), which is 200. So the calculation becomes (9 x 10⁹) * (200 x 10⁻¹²) = 1800 x 10⁻³ = 1.8 N. Practice these mental math tricks to save time.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'The force between two charges is described by which law?',
            options: ['Gauss\'s Law', 'Ohm\'s Law', 'Coulomb\'s Law', 'Faraday\'s Law'],
            answer: 'Coulomb\'s Law'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Vector Form of Coulomb\'s Law',
            tip: 'Many students can calculate the magnitude but make mistakes with the direction of the force. Always remember that for like charges, the force vector on a charge points away from the other charge. For unlike charges, it points towards the other charge. Drawing a simple diagram is the best way to avoid errors.'
        }
    ]
};
