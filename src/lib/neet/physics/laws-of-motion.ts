
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
\`
\\sum F = 0 \\Rightarrow a = 0 # When net force is zero, acceleration is zero. விசை இல்லை என்றால் முடுக்கம் இல்லை.
\`
DIAGRAM_START: Temple Chariot and Inertia (கோவில் தேர் மற்றும் செயலற்றதன்மை)
    +---------+
    |         |
    |---------|  <-- Needs large force to overcome inertia
    |_________|
    /         \\
   o           o
<-- F (Applied Force)

Heavy chariot resists change in motion due to inertia
பெரிய தேர் செயலற்ற தன்மையால் இயக்க மாற்றத்தை எதிர்க்கிறது
DIAGRAM_END

### Newton's Second Law - F = ma (இரண்டாம் விதி)
ஒரு பொருளின் மீது செயல்படும் நிகர விசை, அதன் நிறைக்கும் முடுக்கத்திற்கும் பெருக்கற்பலனுக்கு சமம். The net force acting on an object equals mass times acceleration. This explains why it's harder to push a loaded bullock cart than an empty one in rural Tamil Nadu.
\`
\\vec{F} = m\\vec{a} # Force equals mass times acceleration (vector form) - விசை = நிறை × முடுக்கம்
\`
\`
\\vec{F} = \\frac{d\\vec{p}}{dt} # Force equals rate of change of momentum - விசை = உந்த மாற்ற விகிதம்
\`

### Newton's Third Law - Action-Reaction (மூன்றாம் விதி - செயல்-எதிர்செயல்)
ஒவ்வொரு செயலுக்கும் சமமான மற்றும் எதிர் திசையிலான எதிர்செயல் உண்டு. For every action, there is an equal and opposite reaction. When we walk on Marina Beach sand, our feet push backward on sand, and sand pushes forward on our feet - that's how we move forward.
\`
\\vec{F}_{AB} = -\\vec{F}_{BA} # Action-reaction forces are equal and opposite - செயல் விசை = -(எதிர்செயல் விசை)
\`
`,
    workedExamples: [
        {
            title: "Solved Example 1",
            difficulty: 'Easy',
            problem: "A temple elephant of mass 2000 kg is pulled by a rope with force 500 N. If friction force is 100 N, find the elephant's acceleration.",
            solutionSteps: [
                "Given: Mass m = 2000 kg, Applied force F = 500 N, Friction f = 100 N",
                "Net force = Applied force - Friction force",
                "F_net = 500 - 100 = 400 N",
                "Using Newton's second law: F = ma",
                "400 = 2000 × a",
                "a = 400/2000 = 0.2 m/s²"
            ],
            neetHack: "Always identify all forces first, then find net force before applying F = ma",
            commonPitfall: "Students forget to consider friction as opposing force"
        },
        {
            title: "Solved Example 2",
            difficulty: 'Medium',
            problem: "Two boxes of masses 10 kg and 15 kg are connected by a rope. A force of 100 N pulls the 10 kg box. Find acceleration and tension in rope (ignore friction).",
            solutionSteps: [
                "Given: m₁ = 10 kg, m₂ = 15 kg, Applied force F = 100 N",
                "Total mass = m₁ + m₂ = 10 + 15 = 25 kg",
                "For the system: F = (m₁ + m₂)a",
                "100 = 25 × a",
                "a = 4 m/s²",
                "For tension, consider 15 kg box alone:",
                "T = m₂ × a = 15 × 4 = 60 N"
            ],
            neetHack: "For connected objects, find system acceleration first, then analyze individual objects for internal forces",
            commonPitfall: "Don't use total force to find tension directly"
        },
        {
            title: "Solved Example 3",
            difficulty: 'Medium',
            problem: "A block of mass 5 kg rests on a frictionless plane inclined at 30 degrees. What is the acceleration of the block down the incline? (Take g = 9.8 m/s²)",
            solutionSteps: [
                "Given: Mass m = 5 kg, Angle θ = 30°",
                "The force causing the block to slide down the incline is the component of gravity parallel to the incline, which is mg sin(θ).",
                "The net force on the block is F_net = mg sin(θ).",
                "According to Newton's Second Law, F_net = ma.",
                "So, ma = mg sin(θ). The mass 'm' cancels out.",
                "a = g sin(θ) = 9.8 × sin(30°) = 9.8 × 0.5 = 4.9 m/s²"
            ],
            neetHack: "For any object on a frictionless incline, the acceleration is always g sin(θ), regardless of the object's mass. Memorize this.",
            commonPitfall: "Confusing sin(θ) and cos(θ). Remember: the component that 'slides' is 'sin', while the component pressing into the plane is 'cos'."
        },
        {
            title: "Solved Example 4",
            difficulty: 'Medium',
            problem: "A person of mass 60 kg is in a lift moving upwards with an acceleration of 2 m/s². What is the apparent weight of the person? (Take g = 10 m/s²)",
            solutionSteps: [
                "Given: Mass m = 60 kg, Upward acceleration a = 2 m/s²",
                "Apparent weight is the normal reaction force (R) from the lift's floor on the person.",
                "The net force on the person is F_net = R - mg (upward direction is positive).",
                "From Newton's second law, F_net = ma.",
                "Therefore, R - mg = ma.",
                "R = mg + ma = m(g + a) = 60(10 + 2) = 60 × 12 = 720 N."
            ],
            neetHack: "For upward acceleration in a lift, apparent weight is m(g+a). For downward acceleration, it's m(g-a). Quick formula to save time.",
            commonPitfall: "Forgetting to add the acceleration 'a' to 'g'. When accelerating up, you feel heavier, so the force must be greater than your actual weight (mg)."
        },
        {
            title: "Solved Example 5",
            difficulty: 'Hard',
            problem: "A bullet of mass 20 g hits a sandbag of mass 5 kg and gets embedded in it. If the sandbag moves with a velocity of 1 m/s, what was the initial velocity of the bullet?",
            solutionSteps: [
                "Given: Bullet mass m₁ = 20 g = 0.02 kg, Sandbag mass m₂ = 5 kg, Final velocity v_f = 1 m/s.",
                "This is a perfectly inelastic collision. The principle of conservation of linear momentum applies.",
                "Initial momentum = Final momentum.",
                "m₁u₁ + m₂u₂ = (m₁ + m₂)v_f",
                "The sandbag is initially at rest, so u₂ = 0.",
                "0.02 × u₁ + 5 × 0 = (0.02 + 5) × 1",
                "0.02 × u₁ = 5.02",
                "u₁ = 5.02 / 0.02 = 251 m/s."
            ],
            neetHack: "In embedding problems, the final velocity is common for both objects. Use the momentum conservation formula directly to find the unknown velocity.",
            commonPitfall: "Forgetting to convert the bullet's mass from grams to kilograms, which is the SI unit. This is a very common source of error in exams."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\sum F = 0 \\Rightarrow a = 0',
                description: 'When net force is zero, acceleration is zero\\nவிசை இல்லை என்றால் முடுக்கம் இல்லை'
            },
            {
                formula: '\\vec{F} = m\\vec{a}',
                description: 'Force equals mass times acceleration (vector form)\\nவிசை = நிறை × முடுக்கம்'
            },
            {
                formula: '\\vec{F} = \\frac{d\\vec{p}}{dt}',
                description: 'Force equals rate of change of momentum\\nவிசை = உந்த மாற்ற விகிதம்'
            },
            {
                formula: '\\vec{F}_{AB} = -\\vec{F}_{BA}',
                description: 'Action-reaction forces are equal and opposite\\nசெயல் விசை = -(எதிர்செயல் விசை)'
            }
        ],
        diagrams: [
            {
                title: 'Temple Chariot and Inertia',
                description: 'Massive chariot at rest needs large force to start moving',
                diagram: `
    +---------+
    |         |
    |---------|  <-- Needs large force to overcome inertia
    |_________|
    /         \\
   o           o
<-- F (Applied Force)

Heavy chariot resists change in motion due to inertia
பெரிய தேர் செயலற்ற தன்மையால் இயக்க மாற்றத்தை எதிர்க்கிறது
`
            }
        ]
    },
    mcqs: [
        {
            question: "A car suddenly starts from rest. Passengers feel pushed backward due to:",
            options: ["A. Centripetal force", "B. Inertia", "C. Momentum", "D. Acceleration"],
            answer: "B. Inertia",
            explanation: "The passenger's body continues to be in a state of rest due to inertia of rest, while the car moves forward."
        },
        {
            question: "A ball of mass 2 kg is thrown upward with acceleration 8 m/s². The force applied is: (g = 10 m/s²)",
            options: ["A. 16 N", "B. 20 N", "C. 36 N", "D. 4 N"],
            answer: "C. 36 N",
            explanation: "The net upward force is F_applied - F_gravity = ma. So, F_applied = ma + mg = m(a+g) = 2(8 + 10) = 36 N."
        },
        {
            question: "Two objects of masses m₁ and m₂ are connected by string over a pulley. Acceleration is:",
            options: ["A. g(m₁-m₂)/(m₁+m₂)", "B. g(m₁+m₂)/(m₁-m₂)", "C. g", "D. zero"],
            answer: "A. g(m₁-m₂)/(m₁+m₂)",
            explanation: "This is the standard formula for Atwood's machine. The net force (m₁g - m₂g) divided by the total mass (m₁ + m₂) gives the acceleration."
        }
    ],
    assertionReasons: [],
    matchTheColumns: []
};
