
import type { NeetModule } from '@/lib/types';

export const lawsOfMotionModule: NeetModule = {
    id: 'neet-physics-laws-of-motion',
    title: 'Physics - Laws of Motion (இயக்க விதிகள்)',
    chapter: 'Laws of Motion',
    subject: 'Physics',
    learningObjectives: [
        "Apply Newton's three laws to real-world scenarios like temple chariot pulling during festivals.",
        "Calculate forces, acceleration, and motion for objects on inclined planes like Tirumala steps.",
        "Solve problems involving friction, tension, and normal forces in Tamil Nadu contexts.",
        "Analyze collision problems using conservation of momentum principles."
    ],
    prerequisites: [
        "Strong understanding of vectors from TN Board Mathematics.",
        "Knowledge of motion in one dimension and kinematic equations.",
        "Basic trigonometry for resolving forces on inclined planes.",
        "Understanding of mass and weight concepts."
    ],
     conceptOverview: "Newton's Laws form the cornerstone of classical mechanics, accounting for 10-15% of NEET Physics questions. These laws explain everything from why we feel pushed back in a bus that suddenly starts, to how rockets launch from Sriharikota.",
    tamilConnection: "நியூட்டனின் விதிகள் போல் வாழ்க்கையிலும் விதிகள் உள்ளன. ஒரு கல்லு தானாக நகராது (முதல் விதி), அதை எவ்வளவு வலுவாக தள்ளுகிறோமோ அவ்வளவு வேகமாக போகும் (இரண்டாம் விதி), நாம் சுவரை தள்ளினால் சுவரும் நம்மை தள்ளும் (மூன்றாம் விதி).",
    culturalContext: "Just like the massive temple chariots in Tiruchirappalli Ranganathar temple need tremendous force to move due to their inertia, Newton's laws explain motion in our daily Tamil Nadu life.",
    syllabusMapping: [
         {
            topic: 'Newton\'s Laws of Motion',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Both books cover the three laws extensively. TN board book has more solved examples related to inclined planes. Focus on free-body diagrams (FBDs).'
        },
        {
            topic: 'Friction',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Static and kinetic friction concepts are key. Pay attention to the angle of repose (சறுக்குக் கோணம்) examples in the TN board book.'
        },
        {
            topic: 'Circular Motion',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Centripetal force is a high-yield topic. Understand its application in banking of roads and motion in vertical circles. Problems are often formula-based.'
        }
    ],
    conceptNotes: `### Newton's First Law - Law of Inertia (முதல் விதி - செயலற்ற தன்மை விதி)
ஒரு பொருள் ஓய்வில் இருந்தால் ஓய்விலேயே இருக்கும், இயக்கத்தில் இருந்தால் அதே வேகத்தில் நேர் கோட்டில் இயங்கிக் கொண்டே இருக்கும், வெளி விசை செயல்படாத வரை. An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force. This is why passengers in a Chennai bus lurch forward when brakes are applied suddenly.

` + '`\\sum F = 0 \\Rightarrow a = 0` # When net force is zero, acceleration is zero. விசை இல்லை என்றால் முடுக்கம் இல்லை.' + `

#### Temple Chariot and Inertia
Massive chariot at rest needs large force to start moving
` + '```\nTemple Chariot (கோவில் தேர்)\n|         |\n|---------|  <-- Needs large force to overcome inertia\n|_________|\n```' + `
`,
    workedExamples: [
        {
            problem: 'A block of mass 5 kg is placed on a rough horizontal surface with a coefficient of kinetic friction of 0.2. A force of 20 N is applied to it. Find the acceleration.',
            solution: 'First, find the maximum static friction: fs(max) = μs * N. Find the normal force N = mg = 5 * 9.8 = 49 N. Calculate kinetic friction fk = μk * N = 0.2 * 49 = 9.8 N. Applied force (20 N) is greater than fk, so it moves. Net force F_net = F_applied - fk = 20 - 9.8 = 10.2 N. Acceleration a = F_net / m = 10.2 / 5 = 2.04 m/s².'
        }
    ],
    mcqs: [
        {
            question: "A passenger in a moving bus is thrown forward when the bus suddenly stops. This is explained by:",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "The principle of conservation of momentum"],
            answer: "Newton's First Law",
            explanation: "The passenger's body continues to be in a state of motion due to inertia, even when the bus stops."
        }
    ],
    assertionReasons: [],
    matchTheColumns: []
};
