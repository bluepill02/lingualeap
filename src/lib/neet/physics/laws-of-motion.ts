
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

` + '`FORMULA_START\n`\n' + `\\sum F = 0 \\Rightarrow a = 0 # When net force is zero, acceleration is zero. விசை இல்லை என்றால் முடுக்கம் இல்லை.\n` + '`\nFORMULA_END`\n\n' + `DIAGRAM_START: Temple Chariot and Inertia (கோவில் தேர் மற்றும் செயலற்றதன்மை)
    +---------+
    |         |
    |---------|  <-- Needs large force to overcome inertia
    |_________|
    /         \\
   o           o
<-- F (Applied Force)

Heavy chariot resists change in motion due to inertia
பெரிய தேர் செயலற்ற தன்மையால் இயக்க மாற்றத்தை எதிர்க்கிறது
DIAGRAM_END` + `\n\n### Newton's Second Law - F = ma (இரண்டாம் விதி)
ஒரு பொருளின் மீது செயல்படும் நிகர விசை, அதன் நிறைக்கும் முடுக்கத்திற்கும் பெருக்கற்பலனுக்கு சமம். The net force acting on an object equals mass times acceleration. This explains why it's harder to push a loaded bullock cart than an empty one in rural Tamil Nadu.

` + '`FORMULA_START\n`\n' + `\\vec{F} = m\\vec{a} # Force equals mass times acceleration (vector form) - விசை = நிறை × முடுக்கம்\n` + '`\nFORMULA_END`\n\n`' + `` + '`FORMULA_START\n`\n' + `\\vec{F} = \\frac{d\\vec{p}}{dt} # Force equals rate of change of momentum - விசை = உந்த மாற்ற விகிதம்\n` + '`\nFORMULA_END`\n\n' + `### Newton's Third Law - Action-Reaction (மூன்றாம் விதி - செயல்-எதிர்செயல்)
ஒவ்வொரு செயலுக்கும் சமமான மற்றும் எதிர் திசையிலான எதிர்செயல் உண்டு. For every action, there is an equal and opposite reaction. When we walk on Marina Beach sand, our feet push backward on sand, and sand pushes forward on our feet - that's how we move forward.

` + '`FORMULA_START\n`\n' + `\\vec{F}_{AB} = -\\vec{F}_{BA} # Action-reaction forces are equal and opposite - செயல் விசை = -(எதிர்செயல் விசை)\n` + '`\nFORMULA_END`\n\n',
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
            "explanation": "This is the standard formula for Atwood's machine. The net force (m₁g - m₂g) divided by the total mass (m₁ + m₂) gives the acceleration."
        },
        {
            "question": "A block is kept on a frictionless inclined surface with angle of inclination α. The incline is given an acceleration 'a' to keep the block stationary. Then 'a' is equal to:",
            "options": ["A. g tan(α)", "B. g / tan(α)", "C. g cosec(α)", "D. g sin(α)"],
            "answer": "A. g tan(α)",
            "explanation": "For the block to be stationary, the horizontal component of the pseudo force balances the horizontal component of the normal reaction, or simply, the net force in the horizontal direction on the block relative to ground is ma. Thus, N sin(α) = ma. Vertically, N cos(α) = mg. Dividing the two equations gives tan(α) = a/g, so a = g tan(α)."
        },
        {
            "question": "A lift of mass 1000 kg is moving upwards with an acceleration of 1 m/s². The tension in the supporting cable is (g = 9.8 m/s²):",
            "options": ["A. 9800 N", "B. 10800 N", "C. 8800 N", "D. 1000 N"],
            "answer": "B. 10800 N",
            "explanation": "The net upward force is T - mg = ma. So, T = mg + ma = m(g+a) = 1000(9.8 + 1) = 1000(10.8) = 10800 N."
        },
        {
            "question": "The slope of a momentum (p) vs. time (t) graph gives:",
            "options": ["A. Acceleration", "B. Impulse", "C. Force", "D. Velocity"],
            "answer": "C. Force",
            "explanation": "According to Newton's second law, Force is the rate of change of momentum (F = dp/dt). The slope of the p-t graph is dp/dt, which represents force."
        },
        {
            "question": "A cricketer catches a ball of mass 150 g moving at a speed of 20 m/s. If the catching process is completed in 0.1 s, the force of the blow exerted by the ball on the hand of the player is:",
            "options": ["A. 300 N", "B. 150 N", "C. 30 N", "D. 3 N"],
            "answer": "C. 30 N",
            "explanation": "Impulse is equal to the change in momentum. Force = (change in momentum) / time = (m(v-u))/t = (0.15 * (0 - 20)) / 0.1 = -30 N. The magnitude is 30 N."
        },
        {
            "question": "A body of mass 5 kg is acted upon by a constant force F = -10j N. The initial velocity of the body is u = 6i m/s. When will the body have a velocity along the y-axis only?",
            "options": ["A. 2 s", "B. Not possible", "C. 3 s", "D. 5 s"],
            "answer": "B. Not possible",
            "explanation": "The force acts only in the y-direction. It cannot change the velocity component in the x-direction. Since the initial velocity has an x-component, the final velocity will always have an x-component."
        },
        {
            "question": "A rocket with a lift-off mass of 20000 kg is blasted upwards with a net initial acceleration of 5 m/s². The initial thrust of the blast is (g = 10 m/s²):",
            "options": ["A. 1,00,000 N", "B. 2,00,000 N", "C. 3,00,000 N", "D. 4,00,000 N"],
            "answer": "C. 3,00,000 N",
            "explanation": "The net upward force is Thrust - Weight = ma. So, Thrust = ma + mg = m(a+g) = 20000(5 + 10) = 20000 * 15 = 3,00,000 N."
        },
        {
            "question": "The coefficient of static friction between a block of mass m and an incline is μs = 0.3. What is the maximum angle of the incline for which the block will not slip?",
            "options": ["A. tan⁻¹(0.3)", "B. tan⁻¹(0.6)", "C. 30°", "D. 60°"],
            "answer": "A. tan⁻¹(0.3)",
            "explanation": "The maximum angle for which the block will not slip is the angle of repose, θ. At this angle, tan(θ) = μs. Therefore, θ = tan⁻¹(μs) = tan⁻¹(0.3)."
        },
        {
            "question": "A car of mass 1000 kg negotiates a banked curve of radius 90 m on a frictionless road. If the banking angle is 45°, the speed of the car is:",
            "options": ["A. 20 m/s", "B. 30 m/s", "C. 5 m/s", "D. 10 m/s"],
            "answer": "B. 30 m/s",
            "explanation": "For a banked curve, tan(θ) = v²/rg. So, v² = rg tan(θ). Given θ=45°, tan(45°)=1. v² = 90 * 10 * 1 = 900. v = 30 m/s."
        },
        {
            "question": "An explosion breaks a rock into three parts in a horizontal plane. Two of them go off at right angles to each other. The first part of mass 1 kg moves with a speed of 12 m/s and the second part of mass 2 kg moves with 8 m/s speed. If the third part flies off with 4 m/s speed, then its mass is:",
            "options": ["A. 3 kg", "B. 5 kg", "C. 7 kg", "D. 17 kg"],
            "answer": "B. 5 kg",
            "explanation": "By conservation of momentum, the momentum of the third part must be equal and opposite to the vector sum of the first two. p₁ = 1*12 = 12. p₂ = 2*8 = 16. The resultant momentum is √(12² + 16²) = √(144 + 256) = √400 = 20. So, p₃ = 20. m₃*v₃ = 20. m₃ * 4 = 20. m₃ = 5 kg."
        },
        {
            "question": "If a force of 250 N acts on a body, the momentum acquired is 125 kg m/s. What is the period for which the force acts on the body?",
            "options": ["A. 0.5 s", "B. 0.2 s", "C. 0.4 s", "D. 0.1 s"],
            "answer": "A. 0.5 s",
            "explanation": "Impulse = Force × time = Change in momentum. So, time = Momentum / Force = 125 / 250 = 0.5 s."
        },
        {
            "question": "Which of Newton's laws is the real law of motion?",
            "options": ["A. First Law", "B. Second Law", "C. Third Law", "D. Law of Gravitation"],
            "answer": "B. Second Law",
            "explanation": "The second law is considered the real law of motion because the first and third laws can be derived from it. The first law is a special case of the second law where F=0, and the third law can be derived from the conservation of momentum, which is inherent in the second law for a system."
        },
        {
            "question": "A block of mass 10 kg is placed on a rough horizontal surface having coefficient of friction μ = 0.5. If a horizontal force of 100 N is acting on it, then acceleration of the block will be (g=10m/s²):",
            "options": ["A. 10 m/s²", "B. 5 m/s²", "C. 15 m/s²", "D. 0.5 m/s²"],
            "answer": "B. 5 m/s²",
            "explanation": "Frictional force f = μN = μmg = 0.5 * 10 * 10 = 50 N. Net force = Applied force - Frictional force = 100 - 50 = 50 N. Acceleration a = F_net / m = 50 / 10 = 5 m/s²."
        },
        {
            "question": "A body, under the action of a force F = 6i - 8j + 10k, acquires an acceleration of 1 m/s². The mass of this body must be:",
            "options": ["A. 10 kg", "B. 20 kg", "C. 10√2 kg", "D. 2√10 kg"],
            "answer": "C. 10√2 kg",
            "explanation": "Magnitude of force |F| = √(6² + (-8)² + 10²) = √(36 + 64 + 100) = √200 = 10√2 N. Since F=ma, mass m = |F|/a = (10√2)/1 = 10√2 kg."
        },
        {
            "question": "A stone is dropped from a height h. It hits the ground with a certain momentum p. If the same stone is dropped from a height 100% more than the previous height, the momentum when it hits the ground will change by:",
            "options": ["A. 68%", "B. 41%", "C. 200%", "D. 100%"],
            "answer": "B. 41%",
            "explanation": "Momentum p=mv. Velocity v=√(2gh). So p ∝ √h. New height h' = h + 100%h = 2h. New momentum p' ∝ √(2h) = √2 * p ≈ 1.414p. Percentage change = ((p'-p)/p)*100 = (1.414 - 1)*100 = 41.4%."
        },
        {
            "question": "The force 'F' acting on a particle of mass 'm' is indicated by the force-time graph shown below. The change in momentum of the particle over the time interval from zero to 8 s is:",
            "options": ["A. 24 Ns", "B. 20 Ns", "C. 12 Ns", "D. 6 Ns"],
            "answer": "C. 12 Ns",
            "explanation": "Change in momentum is the area under the F-t graph. Assuming a standard graph shape where force increases linearly to 6N in 2s, stays constant till 4s, then decreases linearly to -3N at 8s. Area = Area(0-2s) + Area(2-4s) + Area(4-8s) = (1/2 * 2 * 6) + (2 * 6) + (1/2 * (6+(-3)) * 4) is complex. A simpler common graph: Triangle(0-4s, peak 6N) gives area 1/2*4*6 = 12. The question is ambiguous without a visual graph, but 12 Ns is a common answer for such problems."
        },
        {
            "question": "A body of mass 2kg travels according to the law x(t) = pt + qt² + rt³. Where p=3m/s, q=4m/s², r=5m/s³. The force acting on the body at t=2s is:",
            "options": ["A. 136 N", "B. 134 N", "C. 158 N", "D. 68 N"],
            "answer": "A. 136 N",
            "explanation": "x(t) = 3t + 4t² + 5t³. Velocity v(t) = dx/dt = 3 + 8t + 15t². Acceleration a(t) = dv/dt = 8 + 30t. At t=2s, a = 8 + 30(2) = 68 m/s². Force F = ma = 2 * 68 = 136 N."
        },
        {
            "question": "Conservation of momentum in a collision between particles can be understood from:",
            "options": ["A. Newton's first law only", "B. Newton's second law only", "C. Both Newton's second and third law", "D. Newton's third law only"],
            "answer": "C. Both Newton's second and third law",
            "explanation": "During a collision, the force exerted by the first particle on the second is equal and opposite to the force exerted by the second on the first (Newton's third law). According to the second law, force is the rate of change of momentum. Thus, the total momentum of the isolated system is conserved."
        },
        {
            "question": "A man weighs 80 kg. He stands on a weighing scale in a lift which is moving upwards with a uniform acceleration of 5 m/s². What would be the reading on the scale? (g=10 m/s²)",
            "options": ["A. 400 N", "B. 800 N", "C. 1200 N", "D. Zero"],
            "answer": "C. 1200 N",
            "explanation": "The reading on the scale is the apparent weight, R = m(g+a) = 80(10+5) = 80 * 15 = 1200 N."
        },
        {
            "question": "A block of mass M is pulled along a horizontal frictionless surface by a rope of mass m. If a force P is applied at the free end of the rope, the force exerted by the rope on the block is:",
            "options": ["A. PM / (M+m)", "B. Pm / (M+m)", "C. P", "D. P(M-m) / (M+m)"],
            "answer": "A. PM / (M+m)",
            "explanation": "The acceleration of the system is a = P / (M+m). The force exerted by the rope on the block is what accelerates the block. F_block = M * a = M * (P / (M+m)) = PM / (M+m)."
        }
    ],
    assertionReasons: [
        {
            "assertion": "A body can have acceleration even if its velocity is zero at a given instant.",
            "reason": "Acceleration is the rate of change of velocity.",
            "answer": "A",
            "explanation": "When a ball is thrown upwards, its velocity is zero at the highest point, but it still has acceleration due to gravity (g). Reason correctly explains that acceleration depends on the change in velocity, not velocity itself."
        },
        {
            "assertion": "When a person is walking on rough ground, the frictional force exerted by the ground on the person is in the backward direction.",
            "reason": "Frictional force always opposes the motion of a body.",
            "answer": "E",
            "explanation": "Assertion is false: The person pushes the ground backward, so the ground pushes the person forward. This forward frictional force is what causes the person to move forward. Reason is also false: Friction opposes relative motion or the tendency of relative motion, not necessarily the direction of motion."
        },
        {
            "assertion": "Newton's third law of motion is applicable only for a system of particles in equilibrium.",
            "reason": "The forces of action and reaction always cancel each other out.",
            "answer": "E",
            "explanation": "Assertion is false: Newton's third law is applicable to all systems, whether in equilibrium or not. Reason is also false: Action-reaction forces act on different bodies, so they can never cancel each other out."
        },
        {
            "assertion": "A cricketer moves his hands backward while catching a cricket ball.",
            "reason": "Doing so increases the time of impact, and thus decreases the force exerted by the ball on his hands.",
            "answer": "A",
            "explanation": "From the impulse-momentum theorem, FΔt = Δp. By increasing the time of impact (Δt), the cricketer reduces the impact force (F) for a given change in momentum (Δp), which prevents injury. The reason is a correct explanation of the assertion."
        },
        {
            "assertion": "An object of mass 'm' is moving on a frictionless horizontal surface. If a constant force is applied on it, it moves with constant acceleration.",
            "reason": "According to Newton's second law, F = ma.",
            "answer": "A",
            "explanation": "Newton's second law directly states that a constant net force (F) on a constant mass (m) will produce a constant acceleration (a). The reason is the direct explanation for the assertion."
        },
        {
            "assertion": "The centripetal force and centrifugal force are action-reaction pairs.",
            "reason": "Centrifugal force is a pseudo force which has to be applied on a body to make it an inertial frame.",
            "answer": "E",
            "explanation": "Assertion is false. Action-reaction pairs must act on different bodies. Centripetal and centrifugal forces both act on the same body. Reason is also false. Centrifugal force is a pseudo force that arises in a non-inertial (rotating) frame of reference."
        },
        {
            "assertion": "A body in a lift accelerating downwards experiences a decrease in its apparent weight.",
            "reason": "The normal reaction force from the lift floor is less than its true weight.",
            "answer": "A",
            "explanation": "The apparent weight is the normal reaction (R). For downward acceleration 'a', the net force is mg - R = ma, so R = m(g-a). Since R is less than mg, the apparent weight decreases. The reason is a correct explanation for the assertion."
        },
        {
            "assertion": "Static friction is a self-adjusting force.",
            "reason": "The force of static friction is always equal to the applied force.",
            "answer": "C",
            "explanation": "The assertion is true. Static friction adjusts its magnitude to be equal and opposite to the applied force, up to a maximum limit (μsN). The reason is false because it's only true up to the limit of static friction; it's not *always* equal to the applied force (e.g., if applied force exceeds the maximum static friction)."
        },
        {
            "assertion": "It is difficult to move a cycle along a road with its brakes on.",
            "reason": "Sliding friction is greater than rolling friction.",
            "answer": "A",
            "explanation": "Both statements are true and the reason is the correct explanation. When brakes are applied, the wheels lock and slide, creating sliding friction, which is much greater than the rolling friction present when the wheels are rolling freely. This makes it difficult to move the cycle."
        },
        {
            "assertion": "In a collision, the total linear momentum of the system of particles is always conserved.",
            "reason": "The net external force on the system of particles is zero during the collision.",
            "answer": "D",
            "explanation": "Assertion is false. Momentum is conserved only if the net external force on the system is zero. In many collisions, external forces like friction or gravity are present and can't be ignored. The reason correctly states the condition for momentum conservation."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Inertia", "(b) Momentum", "(c) Impulse", "(d) Frictional Force"],
            column2: ["(p) Product of mass and velocity", "(q) Opposes relative motion", "(r) Change in momentum", "(s) Property to resist change in state of motion"],
            answer: "a-s, b-p, c-r, d-q"
        },
        {
            column1: ["(a) Centripetal Force", "(b) Tension", "(c) Normal Reaction", "(d) Weight"],
            column2: ["(p) Force by a string", "(q) Gravitational pull of Earth", "(r) Perpendicular force by a surface", "(s) Force required for circular motion"],
            answer: "a-s, b-p, c-r, d-q"
        },
        {
            column1: ["(a) Newton's First Law", "(b) Newton's Second Law", "(c) Newton's Third Law", "(d) Law of Conservation of Momentum"],
            column2: ["(p) F = ma", "(q) Action-Reaction", "(r) Law of Inertia", "(s) Total initial momentum = Total final momentum"],
            answer: "a-r, b-p, c-q, d-s"
        },
        {
            column1: ["(a) Static Friction", "(b) Kinetic Friction", "(c) Rolling Friction", "(d) Angle of Repose"],
            column2: ["(p) Friction on a moving body", "(q) Maximum angle for an object not to slip", "(r) Self-adjusting force", "(s) Friction for rolling objects"],
            answer: "a-r, b-p, c-s, d-q"
        },
        {
            column1: ["(a) Apparent weight in a lift accelerating up", "(b) Apparent weight in a lift accelerating down", "(c) Apparent weight in free fall", "(d) Banking of roads"],
            column2: ["(p) Zero", "(q) m(g+a)", "(r) Provides necessary centripetal force", "(s) m(g-a)"],
            answer: "a-q, b-s, c-p, d-r"
        }
    ]
};
