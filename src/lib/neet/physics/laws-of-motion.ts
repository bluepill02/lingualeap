
import type { NeetModule } from '@/lib/types';

export const lawsOfMotionModule: NeetModule = {
    id: 'neet-physics-laws-of-motion',
    title: 'Physics - Laws of Motion (இயக்க விதிகள்)',
    chapter: 'Laws of Motion',
    subject: 'Physics',
    learningObjectives: [
        "Develop a deep, intuitive understanding of Newton's three laws of motion.",
        "Master a systematic, step-by-step methodology (the FBD method) to deconstruct and solve any mechanics problem from first principles.",
        "Confidently analyze and solve complex multi-body problems, including those involving friction, inclined planes, and pulley systems.",
        "Apply the concept of momentum conservation to analyze collisions and explosions.",
        "Build a foundational strength that enables confident attempts at both NEET and JEE Mains level questions by focusing on analysis and reasoning."
    ],
    prerequisites: [
        "Vector algebra (addition, subtraction, resolution of vectors).",
        "Kinematic equations for uniformly accelerated motion.",
        "Basic calculus (differentiation and integration) for understanding variable forces and momentum change."
    ],
    conceptOverview: "Newton's Laws of Motion are the absolute bedrock of Classical Mechanics. This module aims to build a deep, intuitive, and analytical foundation, going beyond mere formula memorization to foster true physical insight. Our goal is to equip you with a robust problem-solving methodology that allows you to deconstruct any mechanics problem—from simple blocks to complex systems—from first principles. By mastering the 'why' behind the physics, you will gain the confidence to tackle any new problem, a skill essential for both NEET and JEE.",
    tamilConnection: "இயற்பியலின் மொழி கணிதம், ஆனால் அதன் ஆன்மா நியூட்டனின் விதிகளில் உள்ளது. ஒரு தேர் நகரத் தேவையான விசையிலிருந்து ராக்கெட் விண்ணில் பாய்வது வரை அனைத்தையும் இந்த மூன்று விதிகளும் விளக்குகின்றன. இந்த விதிகளை மனப்பாடம் செய்வதை விட, அதன் பின்னால் உள்ள தர்க்கத்தை ஆழமாகப் புரிந்துகொள்வது, கடினமான கணக்குகளையும் எளிதாக்கும்.",
    culturalContext: "Think of the precision required in Jallikattu, where a person must rapidly assess forces and motion to tame a bull. This is a brilliant display of intuitive physics. This module will help you formalize that intuition, turning it into a powerful, analytical tool that can be applied to any problem.",
    syllabusMapping: [
         {
            topic: 'Newton\'s Laws & Applications',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Crucial for both NEET & JEE. The key is to master the problem-solving strategy (FBD -> Equations) rather than memorizing solutions for specific scenarios.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion maps to NEET Physics Unit 2'
        },
        {
            topic: 'Friction',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Questions often mix friction with other concepts like circular motion or block systems. Understanding the self-adjusting nature of static friction is vital.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion maps to NEET Physics Unit 2'
        },
        {
            topic: 'Momentum & Collisions',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Conservation of Linear Momentum is a fundamental principle. For variable mass systems (like rockets), using F=dp/dt is more fundamental than F=ma.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power maps to NEET Physics Unit 4'
        }
    ],
    conceptNotes: `### 1. The Language of Forces: The Free-Body Diagram (FBD) Methodology (விசைகளின் மொழி: தனித்த பொருளின் விசைப் படம் (FBD) முறை)
The single most important skill in solving mechanics problems is drawing a [[Free-Body Diagram:தனித்த பொருளின் விசைப் படம்]] (FBD). It is a diagram that shows ALL the [[forces:விசைகள்]] acting ON a single object.

#### The 4-Step FBD Strategy:
1.  **Isolate the Object:** Mentally separate the object of interest from all its surroundings (other objects, surfaces, etc.).
2.  **Represent with a Point:** Draw a dot or a small box to represent the object. This is your "body."
3.  **Identify and Draw All Forces:** Go through a checklist of forces. For each force, draw a vector arrow originating from your point, pointing in the correct direction.
    *   **[[Non-Contact Force:தொடா விசை]]:** Does [[gravity:ஈர்ப்பு விசை]] act on it? (Almost always, draw *W = mg* acting vertically downwards).
    *   **[[Contact Forces:தொடு விசைகள்]]:** What is the object touching? Each point of contact can exert a force.
        *   Is it on a surface? There is a **[[Normal Force:செங்குத்து விசை]] (N)**, perpendicular to the surface, pushing away from the surface.
        *   Is a string or rope attached? There is **[[Tension:இழுவிசை]] (T)**, acting along the rope, pulling away from the object.
        *   Is there friction? **[[Frictional Force:உராய்வு விசை]] (f)** acts parallel to the surface, opposing relative motion or the *tendency* of motion.
        *   Is a spring attached? **[[Spring Force:சுருள்வில் விசை]] (kx)** acts along the spring.
4.  **Establish a Coordinate System:** Choose an x-y coordinate system. It's often smart to align one axis with the direction of acceleration.

### 2. Newton's Laws of Motion: The Core Principles (நியூட்டனின் இயக்க விதிகள்: அடிப்படைக் கோட்பாடுகள்)

#### First Law (The Law of Inertia - நிலைம விதி)
An object continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by a net external force. This law defines an **[[Inertial Frame of Reference:நிலைமக் குறிப்பாயம்]]** (a non-accelerating frame) where Newton's laws are valid. If *F_net = 0*, then *a = 0* (which means *v = constant*).

{{INERTIA_ANIMATION}}

#### Second Law (The Master Equation - முக்கிய சமன்பாடு)
The rate of change of a body's [[linear momentum:நேர்கோட்டு உந்தம்]] is directly proportional to the net external force applied, and this change occurs in the direction of the force.
\`\`\`
\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}
\`\`\`
Since momentum *p = mv*, if mass 'm' is constant, this simplifies to the famous equation:
\`\`\`
\\vec{F}_{net} = m\\vec{a}
\`\`\`
This is a vector equation. It can be broken down into components: *ΣF_x = ma_x* and *ΣF_y = ma_y*. The core of problem-solving is applying these component equations after drawing an FBD.

#### Third Law (Action-Reaction - வினை மற்றும் எதிர்வினை)
For every action, there is an equal and opposite reaction.
*   Forces always occur in pairs (*F_AB = -F_BA*).
*   Critically, action and reaction forces act on **two different bodies**. They never act on the same body and thus never cancel each other out.

{{ACTION_REACTION_ANIMATION}}

### 3. Applying the Principles in Complex Scenarios (சிக்கலான சூழ்நிலைகளில் கோட்பாடுகளைப் பயன்படுத்துதல்)

#### A. Motion with Constraints (கட்டுப்பாடுகளுடன் கூடிய இயக்கம்)
When the motion of two or more bodies is interdependent (e.g., connected by a string or stacked), we need a "[[constraint relation:கட்டுப்பாட்டுத் தொடர்பு]]" that connects their accelerations.
*   **String Constraint:** If two objects are connected by a taut, inextensible string, the component of their accelerations *along the string* must be the same.
*   **Wedge Constraint:** For a block on a wedge, their accelerations *perpendicular to the contact surface* must be equal for them to remain in contact.

#### B. Understanding Non-Inertial Frames (நிலைமமற்ற குறிப்பாயங்கள்)
Newton's laws are only valid in inertial frames (non-accelerating frames). What if our viewpoint (frame of reference) is accelerating, like inside a moving lift? To analyze the motion *from within* that accelerating frame, we must introduce a **[[pseudo force:போலி விசை]]**.
*   **Pseudo Force (F_p):** This is a fictitious force we add to make Newton's laws work in the accelerating frame.
*   **Magnitude:** *F_p = ma₀*, where 'm' is the mass of the object being observed, and 'a₀' is the acceleration of the frame.
*   **Direction:** It acts in the direction **opposite** to the acceleration of the frame.
Once you add the pseudo force, you can apply *ΣF_real + F_pseudo = ma_relative* as if it were an inertial frame.

**Classic Example: The Lift Problem (மின் தூக்கி கணக்கு)**
Consider a person of mass 'm' on a weighing scale in a lift accelerating at 'a'.
*   **Lift Accelerating Upwards:** In the lift's frame, the forces are N (up), mg (down), and F_p = ma (down). For equilibrium in this frame, *N = mg + ma = m(g+a)*. The person feels heavier ([[apparent weight:தோற்ற எடை]] > true weight).
*   **Lift Accelerating Downwards:** The pseudo force *F_p = ma* is now upwards. The forces are N (up), F_p (up), and mg (down). For equilibrium, *N + ma = mg*, so *N = m(g-a)*. The person feels lighter ([[apparent weight:தோற்ற எடை]] < true weight).

{{LIFT_ANIMATION}}
`,
    workedExamples: [
        {
            title: "NEET/JEE Level: Connected Blocks with Friction",
            difficulty: 'Medium',
            problem: "Two blocks of masses m₁=4kg and m₂=6kg are connected by a string and placed on a rough horizontal surface (μ=0.2). A force F=50N is applied on m₂. Find the acceleration of the system and the tension in the string. (g=10 m/s²)\n\nதமிழ்: m₁=4kg மற்றும் m₂=6kg நிறையுள்ள இரண்டு கட்டைகள் ஒரு கயிற்றால் இணைக்கப்பட்டு சொரசொரப்பான கிடைத்தள பரப்பில் (μ=0.2) வைக்கப்பட்டுள்ளன. m₂ மீது F=50N விசை செலுத்தப்படுகிறது. அமைப்பின் முடுக்கம் மற்றும் கயிற்றின் இழுவிசையைக் கண்டறியவும். (g=10 m/s²)",
            fbd: [
                {
                    body: "Block m₁",
                    forces: [
                        { name: "T", direction: "right" },
                        { name: "f₁", direction: "left" },
                        { name: "m₁g", direction: "down" },
                        { name: "N₁", direction: "up" }
                    ]
                },
                {
                    body: "Block m₂",
                    forces: [
                        { name: "F", direction: "right" },
                        { name: "T", direction: "left" },
                        { name: "f₂", direction: "left" },
                        { name: "m₂g", direction: "down" },
                        { name: "N₂", direction: "up" }
                    ]
                }
            ],
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'Calculate maximum static friction for both blocks to see if the system moves. Total max friction = f₁_max + f₂_max.',
                    explanationTamil: 'அமைப்பு நகருமா என்று பார்க்க, இரு கட்டைகளுக்குமான பெரும நிலை உராய்வு விசையைக் கணக்கிடவும். மொத்த உராய்வு = f₁_max + f₂_max.',
                    calculation: 'f_{1,max} = \\mu m_1 g = 0.2 \\times 4 \\times 10 = 8 N. \\\\ f_{2,max} = \\mu m_2 g = 0.2 \\times 6 \\times 10 = 12 N. \\\\ Total_{max} = 20 N.'
                },
                {
                    step: 2,
                    explanation: 'Compare driving force to max friction. Since F(50N) > Total Friction(20N), the system moves. The friction will be kinetic friction.',
                    explanationTamil: 'செலுத்தப்படும் விசையை உராய்வுடன் ஒப்பிடவும். F(50N) > மொத்த உராய்வு(20N) என்பதால், அமைப்பு நகரும். இப்போது உராய்வு இயக்க உராய்வாக இருக்கும்.',
                },
                {
                    step: 3,
                    explanation: 'Apply F_net = ma to the whole system (m₁ + m₂) to find acceleration.',
                    explanationTamil: 'முடுக்கத்தைக் கண்டறிய, முழு அமைப்பிற்கும் (m₁ + m₂) F_net = ma ஐப் பயன்படுத்தவும்.',
                    calculation: 'F - f_1 - f_2 = (m_1 + m_2)a \\implies 50 - 8 - 12 = 10a \\implies 30 = 10a \\implies a = 3 m/s²'
                },
                {
                    step: 4,
                    explanation: 'Apply F_net = ma to a single block (m₁) to find tension T.',
                    explanationTamil: 'இழுவிசை T ஐக் கண்டறிய, ஒரு கட்டைக்கு (m₁) மட்டும் F_net = ma ஐப் பயன்படுத்தவும்.',
                    calculation: 'T - f_1 = m_1 a \\implies T - 8 = 4 \\times 3 \\implies T = 12 + 8 \\implies T = 20 N'
                }
            ],
            neetHack: "For connected blocks, always treat them as a single system to find acceleration first: a = F_net_external / M_total. Then isolate one block (usually the one with fewer forces) to find internal forces like tension.",
            neetHackTamil: "இணைக்கப்பட்ட கட்டைகளுக்கு, முதலில் முடுக்கத்தைக் கண்டுபிடிக்க முழு அமைப்பையும் ஒரே பொருளாகக் கருதுங்கள்: a = F_net_external / M_total. பிறகு, இழுவிசை போன்ற அக விசைகளைக் கண்டுபிடிக்க, குறைவான விசைகள் கொண்ட ஒரு கட்டையைத் தனிமைப்படுத்தவும்.",
            commonPitfall: "A common mistake is to only consider friction on the block being pulled. Friction opposes motion for *every* block in contact with the surface. Drawing FBDs for each block separately prevents this error.",
            commonPitfallTamil: "இழுக்கப்படும் கட்டையின் மீது மட்டுமே உராய்வு விசையைக் கருத்தில் கொள்வது ஒரு பொதுவான தவறு. பரப்புடன் தொடர்பில் உள்ள ஒவ்வொரு கட்டையின் இயக்கத்தையும் உராய்வு எதிர்க்கும். ஒவ்வொரு கட்டைக்கும் தனித்தனியாக FBD வரைவது இந்தத் தவறைத் தடுக்கும்."
        },
        {
            title: "JEE Level: Analyzing Motion in a Non-Inertial Frame",
            difficulty: 'Hard',
            problem: "A block of mass 'm' is placed on a smooth wedge of mass 'M' and inclination 'θ'. What horizontal acceleration `A` must be given to the wedge so the block `m` does *not* slip on it?\n\nதமிழ்: 'm' நிறையுள்ள ஒரு கட்டை, 'M' நிறையும் 'θ' சாய்வும் கொண்ட ஒரு வழுவழுப்பான ஆப்பின் மீது வைக்கப்பட்டுள்ளது. 'm' கட்டை ஆப்பின் மீது நழுவாமல் இருக்க, ஆப்பிற்கு 어떤 கிடைமட்ட முடுக்கம் `A` கொடுக்க வேண்டும்?",
            fbd: [{
                body: "Block m (in wedge's frame)",
                forces: [
                    { name: "mg", direction: "down", showComponents: true },
                    { name: "N", direction: "up-left" },
                    { name: "mA (Pseudo)", direction: "left" }
                ],
                isAngled: true,
            }],
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'This problem is best solved from the non-inertial (accelerating) frame of the wedge. We add a pseudo force to the block and then apply the condition for equilibrium (no slipping).',
                    explanationTamil: "இந்தக் கணக்கை ஆப்பின் நிலைமம் அல்லாத (முடுக்கப்பட்ட) குறிப்பாயத்திலிருந்து தீர்ப்பது சிறந்தது. கட்டையின் மீது ஒரு போலி விசையைச் சேர்த்து, பின்னர் சமநிலைக்கான (நழுவாத) நிபந்தனையைப் பயன்படுத்தவும்."
                },
                {
                    step: 2,
                    explanation: 'Resolve forces into components parallel and perpendicular to the incline. For equilibrium (no slipping), the net force parallel to the incline must be zero.',
                    explanationTamil: "விசைகளை சாய்தளத்திற்கு இணையான மற்றும் செங்குத்தான கூறுகளாகப் பிரிக்கவும். சமநிலைக்கு (நழுவாமல் இருக்க), சாய்தளத்திற்கு இணையான நிகர விசை சுழியாக இருக்க வேண்டும்."
                },
                {
                    step: 3,
                    explanation: 'Component of gravity pulling down the incline is `mg sin(θ)`. Component of pseudo force pushing up the incline is `mA cos(θ)`.',
                    explanationTamil: "சாய்தளத்தில் கீழ்நோக்கி இழுக்கும் ஈர்ப்பு விசையின் கூறு `mg sin(θ)`. சாய்தளத்தில் மேல்நோக்கி தள்ளும் போலி விசையின் கூறு `mA cos(θ)`."
                },
                {
                    step: 4,
                    explanation: 'Set the parallel forces equal to each other for equilibrium and solve for A.',
                    explanationTamil: "சமநிலைக்காக இணையான விசைகளை சமப்படுத்தி A-ஐக் கண்டறியவும்.",
                    calculation: 'mg \\sin(\\theta) = mA \\cos(\\theta) \\implies A = g \\frac{\\sin(\\theta)}{\\cos(\\theta)} \\implies A = g \\tan(\\theta)'
                }
            ],
            neetHack: "This is a standard result and a very common pattern in competitive exams. For a block on a smooth incline, the horizontal acceleration needed to prevent slipping is always `A = g tan(θ)`. Recognizing this pattern can save a lot of time.",
            neetHackTamil: "இது ஒரு நிலையான முடிவு மற்றும் போட்டித் தேர்வுகளில் மிகவும் பொதுவான முறை. ஒரு வழுவழுப்பான சாய்தளத்தில் உள்ள கட்டை நழுவாமல் இருக்கத் தேவையான கிடைமட்ட முடுக்கம் எப்போதும் `A = g tan(θ)` ஆகும். இந்த முறையை அறிந்துகொள்வது நேரத்தை மிச்சப்படுத்தும்."
        },
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}',
                description: 'The fundamental form of Newton\'s 2nd Law. Crucial for variable mass systems.'
            },
            {
                formula: 'f_{s,max} = \\mu_s N',
                description: 'Maximum static friction. Friction opposes the tendency of motion.'
            },
            {
                formula: 'f_k = \\mu_k N',
                description: 'Kinetic friction. Acts on a moving body, opposing motion.'
            },
            {
                formula: 'N = m(g \\pm a)',
                description: 'Apparent weight in a lift. Use + for upward acceleration, - for downward.'
            }
        ],
        diagrams: [
             {
                title: 'Free-Body Diagram of a Block on an Incline',
                description: 'Decomposing the weight vector `mg` into components parallel and perpendicular to the incline is the key first step.',
                fbd: {
                    body: "Block on Incline",
                    forces: [
                        { name: "mg", direction: "down", showComponents: true },
                        { name: "N", direction: "up-left" },
                        { name: "f", direction: "up-right" }
                    ],
                    isAngled: true,
                    context: "Key forces on an inclined plane."
                }
            }
        ]
    },
    keyTakeaways: [
        "First Law: Inertia - objects resist change in motion.",
        "Second Law: F = ma - net force causes acceleration.",
        "Third Law: Action-Reaction pairs are equal, opposite, and act on different bodies.",
        "Always draw a Free-Body Diagram (FBD) before solving any mechanics problem."
    ],
    mnemonics: [
        { text: "Remember FMA: Force = Mass × Acceleration.", tamil: "விசை-நிறை-முடுக்கம் - 'விநாயகர் நல்ல முருகன்' என்று நினைவில் வைக்கவும்" },
        { text: "Action-reaction pairs are a two-way street; they never act on the same body.", tamil: "செயல்-எதிர்ச்செயல் விசைகள் எப்போதும் வெவ்வேறு பொருட்கள் மீது செயல்படும்." }
    ],
    neetTips: [
        { text: "For connected objects, always find system acceleration first: a = F_net / m_total.", tamil: "இணைக்கப்பட்ட பொருட்களுக்கு முதலில் கூட்டு முடுக்கம் கண்டுபிடிக்கவும்." },
        { text: "Pitfall: Weight is mg, not mass. Weight changes with g, mass doesn't!", tamil: "எடை = mg, நிறை அல்ல. எடை g யுடன் மாறும், நிறை மாறாது." },
        { text: "Strategy: Draw FBDs for EVERY object in the problem. This prevents mistakes.", tamil: "எல்லா பொருட்களுக்கும் விசை படம் வரையவும்." }
    ],
    mcqs: [
        {
            question: "A car suddenly starts from rest. Passengers feel pushed backward due to:",
            options: ["A. Centripetal force", "B. Inertia of Rest", "C. Inertia of Motion", "D. Fictitious Force"],
            answer: "B. Inertia of Rest",
            explanation: "The passenger's body tends to remain in its state of rest due to inertia, while the car moves forward, creating the sensation of being pushed back. It's specifically inertia of rest.",
            neetFrequency: 4
        },
        {
            question: "A lift of mass 1000 kg is moving upwards with an acceleration of 1 m/s². The tension in the supporting cable is (g = 9.8 m/s²):",
            options: ["A. 9800 N", "B. 10800 N", "C. 8800 N", "D. 1000 N"],
            answer: "B. 10800 N",
            explanation: "The net upward force is T - mg = ma. So, T = mg + ma = m(g+a) = 1000(9.8 + 1) = 1000(10.8) = 10800 N. The tension must support the weight AND provide the upward acceleration.",
            neetFrequency: 5
        },
    ],
    assertionReasons: [
        {
            assertion: "A body can have acceleration even if its velocity is zero at a given instant.",
            reason: "Acceleration is the rate of change of velocity, not velocity itself.",
            answer: "A",
            explanation: "Assertion is true. At the highest point of its trajectory, a vertically thrown ball has zero velocity but still possesses acceleration due to gravity (g). The reason correctly explains that acceleration is about the *change* in velocity, which is happening at that instant."
        },
    ],
    matchTheColumns: [
        {
            column1: ["(a) Inertia", "(b) Momentum", "(c) Impulse", "(d) Frictional Force"],
            column2: ["(p) `mv`", "(q) `μN`", "(r) `Δp`", "(s) Resistance to change in state"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Inertia is the property to resist change. Momentum is mass x velocity. Impulse is the change in momentum. Frictional force is proportional to the normal force."
        },
    ]
};
