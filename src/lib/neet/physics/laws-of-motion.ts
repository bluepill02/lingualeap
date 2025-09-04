
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
            notes: 'Conservation of Linear Momentum is a fundamental principle. For variable mass systems (like rockets), using `F=dp/dt` is more fundamental than `F=ma`.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power maps to NEET Physics Unit 4'
        }
    ],
    conceptNotes: `### 1. The Language of Forces: The Free-Body Diagram (FBD) Methodology (விசைகளின் மொழி: தனித்த பொருளின் விசைப் படம் (FBD) முறை)
The single most important skill in solving mechanics problems is drawing a [[Free-Body Diagram:தனித்த பொருளின் விசைப் படம்]] (FBD). It is a diagram that shows ALL the [[forces:விசைகள்]] acting ON a single object.

> The FBD is your map for navigating a mechanics problem. Without a correct map, you will get lost.

#### The 4-Step FBD Strategy:
1.  **Isolate the Object:** Mentally separate the object of interest from all its surroundings (other objects, surfaces, etc.).
2.  **Represent with a Point:** Draw a dot or a small box to represent the object. This is your "body."
3.  **Identify and Draw All Forces:** Go through a checklist of forces. For each force, draw a vector arrow originating from your point, pointing in the correct direction.
    *   **[[Non-Contact Force:தொடா விசை]]:** Does [[gravity:ஈர்ப்பு விசை]] act on it? (Almost always, draw \`W = mg\` acting vertically downwards).
    *   **[[Contact Forces:தொடு விசைகள்]]:** What is the object touching? Each point of contact can exert a force.
        *   Is it on a surface? There is a **[[Normal Force:செங்குத்து விசை]] (N)**, perpendicular to the surface, pushing away from the surface.
        *   Is a string or rope attached? There is **[[Tension:இழுவிசை]] (T)**, acting along the rope, pulling away from the object.
        *   Is there friction? **[[Frictional Force:உராய்வு விசை]] (f)** acts parallel to the surface, opposing relative motion or the *tendency* of motion.
        *   Is a spring attached? **[[Spring Force:சுருள்வில் விசை]] (kx)** acts along the spring.
4.  **Establish a Coordinate System:** Choose an x-y coordinate system. It's often smart to align one axis with the direction of acceleration.

### 2. Newton's Laws of Motion: The Core Principles (நியூட்டனின் இயக்க விதிகள்: அடிப்படைக் கோட்பாடுகள்)

#### First Law (The Law of Inertia - நிலைம விதி)
An object continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by a net external force. This law defines an **[[Inertial Frame of Reference:நிலைமக் குறிப்பாயம்]]** (a non-accelerating frame) where Newton's laws are valid. If \`F_net = 0\`, then \`a = 0\` (which means \`v = constant\`).

{{INERTIA_ANIMATION}}

#### Second Law (The Master Equation - முக்கிய சமன்பாடு)
The rate of change of a body's [[linear momentum:நேர்கோட்டு உந்தம்]] is directly proportional to the net external force applied, and this change occurs in the direction of the force.
\`\`\`math
\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}
\`\`\`
Since momentum \`p = mv\`, if mass 'm' is constant, this simplifies to the famous equation:
\`\`\`math
\\vec{F}_{net} = m\\vec{a}
\`\`\`
This is a vector equation. It can be broken down into components: \`ΣF_x = ma_x\` and \`ΣF_y = ma_y\`. The core of problem-solving is applying these component equations after drawing an FBD.

#### Third Law (Action-Reaction - வினை மற்றும் எதிர்வினை)
For every action, there is an equal and opposite reaction.
*   Forces always occur in pairs (\`F_AB = -F_BA\`).
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
*   **Magnitude:** \`F_p = ma₀\`, where 'm' is the mass of the object being observed, and 'a₀' is the acceleration of the frame.
*   **Direction:** It acts in the direction **opposite** to the acceleration of the frame.
Once you add the pseudo force, you can apply \`ΣF_real + F_pseudo = ma_relative\` as if it were an inertial frame.

**Classic Example: The Lift Problem (மின் தூக்கி கணக்கு)**
Consider a person of mass 'm' on a weighing scale in a lift accelerating at 'a'.
*   **Lift Accelerating Upwards:** In the lift's frame, the forces are N (up), mg (down), and F_p = ma (down). For equilibrium in this frame, \`N = mg + ma = m(g+a)\`. The person feels heavier ([[apparent weight:தோற்ற எடை]] > true weight).
*   **Lift Accelerating Downwards:** The pseudo force \`F_p = ma\` is now upwards. The forces are N (up), F_p (up), and mg (down). For equilibrium, \`N + ma = mg\`, so \`N = m(g-a)\`. The person feels lighter ([[apparent weight:தோற்ற எடை]] < true weight).

{{LIFT_ANIMATION}}
`,
    workedExamples: [
        {
            title: "NEET Level: Connected Blocks with Friction",
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
        {
            title: "NEET Level: Pulley System",
            difficulty: 'Medium',
            problem: "Two masses 2 kg and 3 kg are attached to the ends of a string passing over a frictionless pulley. Find the acceleration of the system and tension in the string. (g = 10 m/s²)",
            solutionSteps: [
                { step: 1, explanation: "Draw FBDs for both masses. For the 3kg mass, 3g acts down and T acts up. For the 2kg mass, 2g acts down and T acts up." },
                { step: 2, explanation: "Assume the 3kg mass moves down and the 2kg mass moves up with acceleration 'a'. Write Newton's second law for each mass." },
                { step: 3, explanation: "For 3kg mass: `3g - T = 3a`. For 2kg mass: `T - 2g = 2a`." },
                { step: 4, explanation: "Add the two equations to eliminate T: `(3g - T) + (T - 2g) = (3a + 2a)` => `g = 5a`." },
                { step: 5, explanation: "Solve for a: `a = g/5 = 10/5 = 2 m/s²`. Substitute 'a' back into one equation to find T: `T = 2a + 2g = 2(2) + 2(10) = 24 N`." }
            ],
            neetHack: "For a simple pulley (Atwood machine), acceleration `a` is always `((M - m) / (M + m)) * g`. Tension `T` is `(2Mm / (M + m)) * g`. Memorizing these can save minutes."
        },
        {
            title: "JEE Level: Impulse and Momentum",
            difficulty: 'Hard',
            problem: "A ball of mass 0.5 kg moving at 10 m/s strikes a wall normally and rebounds with the same speed. If the contact time is 0.1 s, find the impulse imparted and the average force on the wall.",
            solutionSteps: [
                { step: 1, explanation: "Define initial and final momentum. Let the initial direction be positive. Initial momentum `p_i = mv = 0.5 * 10 = 5 kg m/s`." },
                { step: 2, explanation: "Final momentum `p_f = m(-v) = 0.5 * (-10) = -5 kg m/s`, as it rebounds." },
                { step: 3, explanation: "Impulse is the change in momentum: `J = p_f - p_i = -5 - 5 = -10 Ns`. The magnitude of impulse is 10 Ns." },
                { step: 4, explanation: "Average force is Impulse / contact time: `F_avg = J / Δt = 10 / 0.1 = 100 N`." },
                { step: 5, explanation: "The force is directed away from the wall (in the negative direction)." }
            ],
            commonPitfall: "A common error is forgetting that momentum is a vector. The change is `p_f - p_i`, not `m(v-v)=0`. The final velocity is in the opposite direction, hence negative."
        },
        {
            title: "NEET Level: Static vs Kinetic Friction",
            difficulty: 'Medium',
            problem: "A 5 kg block is on a rough surface with μs=0.4 and μk=0.3. A horizontal force of 15 N is applied. Does the block move? What is the frictional force? (g = 10 m/s²)",
            solutionSteps: [
                { step: 1, explanation: "Calculate the maximum static friction (`f_s_max`) to determine the threshold for motion. `f_s_max = μs * N`." },
                { step: 2, explanation: "Normal force `N = mg = 5 * 10 = 50 N`." },
                { step: 3, explanation: "`f_s_max = 0.4 * 50 = 20 N`." },
                { step: 4, explanation: "Compare the applied force with `f_s_max`. Applied force `F = 15 N`." },
                { step: 5, explanation: "Since `F (15N) < f_s_max (20N)`, the block does not move. The static friction is self-adjusting and matches the applied force. Therefore, the frictional force is 15 N." }
            ],
            neetHack: "Static friction is a 'lazy' force. It only does enough to prevent motion. It is not always equal to `μs*N`. Only if the block is *about to move* does static friction reach its maximum value."
        }
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
        "Second Law: `F = ma` - net force causes acceleration.",
        "Third Law: Action-Reaction pairs are equal, opposite, and act on different bodies.",
        "Always draw a Free-Body Diagram (FBD) before solving any mechanics problem."
    ],
    mnemonics: [
        { text: "Remember FMA: Force = Mass × Acceleration.", tamil: "விசை-நிறை-முடுக்கம் - 'விநாயகர் நல்ல முருகன்' என்று நினைவில் வைக்கவும்" },
        { text: "Action-reaction pairs are a two-way street; they never act on the same body.", tamil: "செயல்-எதிர்ச்செயல் விசைகள் எப்போதும் வெவ்வேறு பொருட்கள் மீது செயல்படும்." }
    ],
    neetTips: [
        { text: "For connected objects, always find system acceleration first: `a = F_net / m_total`.", tamil: "இணைக்கப்பட்ட பொருட்களுக்கு முதலில் கூட்டு முடுக்கம் கண்டுபிடிக்கவும்." },
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
            explanation: "The net upward force is `T - mg = ma`. So, `T = mg + ma = m(g+a) = 1000(9.8 + 1) = 1000(10.8) = 10800 N`. The tension must support the weight AND provide the upward acceleration.",
            neetFrequency: 5
        },
        {
            question: "Action and reaction forces act on:",
            options: ["A. The same body", "B. Different bodies", "C. The same body in opposite directions", "D. Different bodies in the same direction"],
            answer: "B. Different bodies",
            explanation: "Newton's third law states that action and reaction forces are equal and opposite, but they always act on two different interacting bodies.",
            neetFrequency: 5
        },
        {
            question: "A man in a lift will feel his weight to be less than his actual weight when the lift is:",
            options: ["A. Moving up with constant velocity", "B. Moving down with constant velocity", "C. Accelerating downwards", "D. Accelerating upwards"],
            answer: "C. Accelerating downwards",
            explanation: "Apparent weight `N = m(g - a)` when accelerating downwards. Since 'a' is positive, `N < mg`.",
            neetFrequency: 4
        },
        {
            question: "A block of mass m is placed on a smooth inclined plane of inclination θ. The force exerted by the plane on the block (normal force) is:",
            options: ["A. mg", "B. mg sin(θ)", "C. mg cos(θ)", "D. mg tan(θ)"],
            answer: "C. mg cos(θ)",
            explanation: "The normal force balances the component of weight perpendicular to the inclined plane, which is `mg cos(θ)`.",
            neetFrequency: 3
        },
        { question: "The coefficient of static friction is:", options: ["A. Less than the coefficient of kinetic friction", "B. Equal to the coefficient of kinetic friction", "C. Greater than the coefficient of kinetic friction", "D. Dependent on the area of contact"], answer: "C. Greater than the coefficient of kinetic friction", explanation: "It takes more force to start motion than to maintain it, so μs > μk.", neetFrequency: 2 },
        { question: "Impulse has the same dimensions as:", options: ["A. Force", "B. Power", "C. Work", "D. Linear Momentum"], answer: "D. Linear Momentum", explanation: "Impulse is defined as the change in linear momentum (Δp).", neetFrequency: 3 },
        { question: "A rocket works on the principle of conservation of:", options: ["A. Mass", "B. Energy", "C. Linear Momentum", "D. Angular Momentum"], answer: "C. Linear Momentum", explanation: "The rocket expels gas backward (momentum), and by conservation, the rocket gains an equal and opposite momentum forward.", neetFrequency: 4 },
        { question: "A force of 10 N acts on a body of mass 2 kg for 3 seconds. The change in its momentum is:", options: ["A. 15 kg m/s", "B. 30 kg m/s", "C. 60 kg m/s", "D. 5 kg m/s"], answer: "B. 30 kg m/s", explanation: "Impulse (Change in momentum) = Force × time = 10 N × 3 s = 30 Ns.", neetFrequency: 3 },
        { question: "The force required to keep a body in uniform circular motion is:", options: ["A. Centrifugal force", "B. Frictional force", "C. Centripetal force", "D. Resistive force"], answer: "C. Centripetal force", explanation: "Centripetal force is the net force that acts on an object to keep it moving along a circular path.", neetFrequency: 2 },
        { question: "If the net force on a body is zero, its acceleration will be:", options: ["A. Infinite", "B. Zero", "C. Constant but non-zero", "D. Variable"], answer: "B. Zero", explanation: "According to Newton's Second Law, `F_net = ma`. If `F_net = 0`, then `a` must be 0.", neetFrequency: 1 },
        { question: "Which of the following is a self-adjusting force?", options: ["A. Kinetic friction", "B. Tension", "C. Static friction", "D. Normal force"], answer: "C. Static friction", explanation: "Static friction adjusts its magnitude to be equal and opposite to the applied force, up to its maximum limit.", neetFrequency: 3 },
        { question: "A 5 N force is required to keep a block of mass 10 kg moving at a constant velocity on a rough surface. The value of kinetic friction is:", options: ["A. 5 N", "B. 10 N", "C. 50 N", "D. 0.5 N"], answer: "A. 5 N", explanation: "For constant velocity, the net force is zero. So, the applied force must be equal to the kinetic friction.", neetFrequency: 2 },
        { question: "When a bullet is fired from a gun, the gun recoils. This is an example of:", options: ["A. Newton's first law", "B. Newton's second law", "C. Newton's third law", "D. Law of conservation of energy"], answer: "C. Newton's third law", explanation: "The gun exerts a force on the bullet (action), and the bullet exerts an equal and opposite force on the gun (reaction).", neetFrequency: 4 },
        { question: "The unit of impulse is:", options: ["A. N", "B. N/s", "C. N·m", "D. N·s"], answer: "D. N·s", explanation: "Impulse = Force × time, so its unit is Newton-second.", neetFrequency: 1 },
        { question: "A person of mass 60 kg is in a lift. The apparent weight of the person when the lift is moving down with an acceleration of 4.9 m/s² is (g=9.8 m/s²):", options: ["A. 30 kg-wt", "B. 60 kg-wt", "C. 90 kg-wt", "D. 0"], answer: "A. 30 kg-wt", explanation: "Apparent weight `N = m(g - a) = 60(9.8 - 4.9) = 60(4.9) = 294 N`. Since 1 kg-wt = 9.8 N, N = 294/9.8 = 30 kg-wt.", neetFrequency: 4 },
        { question: "What is the angle between the frictional force and the direction of motion?", options: ["A. 0°", "B. 90°", "C. 180°", "D. 45°"], answer: "C. 180°", explanation: "Frictional force always opposes motion.", neetFrequency: 2 },
        { question: "If a body is in equilibrium, it means:", options: ["A. It is at rest", "B. It is moving with constant velocity", "C. The net force on it is zero", "D. All of the above"], answer: "D. All of the above", explanation: "Equilibrium means the net force is zero, which implies zero acceleration. This can mean the body is at rest or moving with constant velocity.", neetFrequency: 3 },
        { question: "A block is pulled along a horizontal frictionless surface by a rope. The tension in the rope will be:", options: ["A. Equal to the pulling force", "B. Less than the pulling force", "C. More than the pulling force", "D. Dependent on the mass of the rope"], answer: "A. Equal to the pulling force", explanation: "If the rope is massless and horizontal, the tension is equal to the pulling force.", neetFrequency: 1 },
        { question: "The measure of inertia of a body is its:", options: ["A. Weight", "B. Mass", "C. Velocity", "D. Acceleration"], answer: "B. Mass", explanation: "Mass is the quantitative measure of inertia.", neetFrequency: 2 },
        { question: "Two forces of 3N and 4N are acting on a body. Which of the following cannot be the resultant force?", options: ["A. 0.5 N", "B. 1 N", "C. 5 N", "D. 7 N"], answer: "A. 0.5 N", explanation: "The resultant force R must be between |F1 - F2| and |F1 + F2|. So, 1 N ≤ R ≤ 7 N. 0.5 N is not possible.", neetFrequency: 3 },
        { question: "A force F = (6i - 8j + 10k) N produces an acceleration of 1 m/s² in a body. The mass of the body is:", options: ["A. 10 kg", "B. 10√2 kg", "C. 20 kg", "D. 6 kg"], answer: "B. 10√2 kg", explanation: "Magnitude of `F = √(6² + (-8)² + 10²) = √(36 + 64 + 100) = √200 = 10√2 N`. Since `F = ma`, `m = F/a = 10√2 / 1 = 10√2 kg`.", neetFrequency: 4 },
        { question: "The banking of roads is done to provide:", options: ["A. Necessary frictional force", "B. Necessary centripetal force", "C. A way to increase speed", "D. A way to decrease friction"], answer: "B. Necessary centripetal force", explanation: "The horizontal component of the normal force provides the necessary centripetal force for a car to take a turn safely.", neetFrequency: 3 },
        { question: "If a string breaks, the tension in it becomes:", options: ["A. Infinite", "B. Maximum", "C. Zero", "D. Unchanged"], answer: "C. Zero", explanation: "Once the string breaks, it can no longer exert any pulling force, so the tension becomes zero.", neetFrequency: 1 },
        { question: "Which law of motion is also known as the law of inertia?", options: ["A. First Law", "B. Second Law", "C. Third Law", "D. Law of Gravitation"], answer: "A. First Law", explanation: "Newton's first law defines the concept of inertia.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "A body can have acceleration even if its velocity is zero at a given instant.",
            reason: "Acceleration is the rate of change of velocity, not velocity itself.",
            answer: "A",
            explanation: "Assertion is true. At the highest point of its trajectory, a vertically thrown ball has zero velocity but still possesses acceleration due to gravity (g). The reason correctly explains that acceleration is about the *change* in velocity, which is happening at that instant."
        },
        {
            assertion: "Friction is a non-conservative force.",
            reason: "Work done by friction depends on the path taken.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the definition of a non-conservative force. The work done against friction over a closed loop is not zero, as energy is dissipated as heat."
        },
        {
            assertion: "A cricketer moves his hands backward while catching a ball.",
            reason: "This increases the time of impact, reducing the force exerted by the ball on the hands.",
            answer: "A",
            explanation: "The assertion is a common practice. The reason correctly explains the physics. From `F = Δp/Δt`, by increasing the time Δt, the force F is reduced for a given change in momentum Δp."
        },
        {
            assertion: "The centripetal force and centrifugal force cancel each other out.",
            reason: "They are equal in magnitude and opposite in direction.",
            answer: "D",
            explanation: "Assertion is false. They never cancel because they act on different frames of reference. Centripetal force is a real force acting on the body in an inertial frame. Centrifugal force is a pseudo force experienced by the body in its own rotating frame."
        },
        {
            assertion: "Pulling a lawn roller is easier than pushing it.",
            reason: "When pulling, the vertical component of the applied force reduces the normal reaction, thus reducing friction.",
            answer: "A",
            explanation: "The assertion is true. The reason is the correct explanation. When pulling, a component of the force acts upwards, reducing the normal force and hence the friction (`f = μN`). When pushing, a component acts downwards, increasing the normal force and friction."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Inertia", "(b) Momentum", "(c) Impulse", "(d) Frictional Force"],
            column2: ["(p) `mv`", "(q) `μN`", "(r) `Δp`", "(s) Resistance to change in state"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Inertia is the property to resist change. Momentum is mass x velocity. Impulse is the change in momentum. Frictional force is proportional to the normal force."
        },
        {
            column1: ["(a) Newton's First Law", "(b) Newton's Second Law", "(c) Newton's Third Law", "(d) Conservation of Momentum"],
            column2: ["(p) `F = ma`", "(q) Action-Reaction", "(r) Law of Inertia", "(s) No external force"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "First law is the law of inertia. Second law gives the measure of force. Third law describes action-reaction pairs. Conservation of momentum applies when the net external force is zero."
        },
        {
            column1: ["(a) Static Friction", "(b) Kinetic Friction", "(c) Rolling Friction", "(d) Tension"],
            column2: ["(p) Opposes motion", "(q) Self-adjusting", "(r) Pulling force in a string", "(s) Weakest friction"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Static friction is self-adjusting. Kinetic friction opposes the actual motion. Rolling friction is much weaker than sliding (kinetic) friction. Tension is the force in a string."
        },
        {
            column1: ["(a) Lift accelerating up", "(b) Lift accelerating down", "(c) Lift at constant velocity", "(d) Lift in free fall"],
            column2: ["(p) Apparent weight = `m(g-a)`", "(q) Apparent weight = 0", "(r) Apparent weight = `mg`", "(s) Apparent weight = `m(g+a)`"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Apparent weight increases when accelerating up, decreases when accelerating down, is equal to true weight at constant velocity, and is zero in free fall (a=g)."
        },
        {
            column1: ["(a) Unit of Force", "(b) Unit of Impulse", "(c) Unit of Work", "(d) Unit of Power"],
            column2: ["(p) Joule", "(q) Newton", "(r) Watt", "(s) N·s"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "The SI units for Force, Impulse, Work, and Power are Newton, Newton-second, Joule, and Watt respectively."
        }
    ]
};

    