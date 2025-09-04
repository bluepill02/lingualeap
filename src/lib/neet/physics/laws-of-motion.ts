
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
            notes: 'Crucial for both NEET & JEE. The key is to master the problem-solving strategy (FBD -> Equations) rather than memorizing solutions for specific scenarios.'
        },
        {
            topic: 'Friction',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Questions often mix friction with other concepts like circular motion or block systems. Understanding the self-adjusting nature of static friction is vital.'
        },
        {
            topic: 'Momentum & Collisions',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Conservation of Linear Momentum is a fundamental principle. For variable mass systems (like rockets), using F=dp/dt is more fundamental than F=ma.'
        }
    ],
    conceptNotes: `### 1. The Language of Forces: The Free-Body Diagram (FBD) Methodology (விசைகளின் மொழி: தனித்த பொருளின் விசைப் படம் (FBD) முறை)
The single most important skill in solving mechanics problems is drawing a Free-Body Diagram (தனித்த பொருளின் விசைப் படம் - FBD). It is a diagram that shows ALL the forces (விசைகள்) acting ON a single object.

#### The 4-Step FBD Strategy:
1.  **Isolate the Object:** Mentally separate the object of interest from all its surroundings (other objects, surfaces, etc.).
2.  **Represent with a Point:** Draw a dot or a small box to represent the object. This is your "body."
3.  **Identify and Draw All Forces:** Go through a checklist of forces. For each force, draw a vector arrow originating from your point, pointing in the correct direction.
    *   **Non-Contact Force (தொடா விசை):** Does gravity (ஈர்ப்பு விசை) act on it? (Almost always, draw *W = mg* acting vertically downwards).
    *   **Contact Forces (தொடு விசைகள்):** What is the object touching? Each point of contact can exert a force.
        *   Is it on a surface? There is a **Normal Force (செங்குத்து விசை, N)**, perpendicular to the surface, pushing away from the surface.
        *   Is a string or rope attached? There is **Tension (இழுவிசை, T)**, acting along the rope, pulling away from the object.
        *   Is there friction? **Frictional Force (உராய்வு விசை, f)** acts parallel to the surface, opposing relative motion or the *tendency* of motion.
        *   Is a spring attached? **Spring Force (சுருள்வில் விசை, kx)** acts along the spring.
4.  **Establish a Coordinate System:** Choose an x-y coordinate system. It's often smart to align one axis with the direction of acceleration.

### 2. Newton's Laws of Motion: The Core Principles (நியூட்டனின் இயக்க விதிகள்: அடிப்படைக் கோட்பாடுகள்)

#### First Law (The Law of Inertia - நிலைம விதி)
An object continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by a net external force. This law defines an **Inertial Frame of Reference (நிலைமக் குறிப்பாயம்)** (a non-accelerating frame) where Newton's laws are valid. If F_net = 0, then a = 0 (which means v = constant).

#### Second Law (The Master Equation - முக்கிய சமன்பாடு)
The rate of change of a body's linear momentum (நேர்கோட்டு உந்தம்) is directly proportional to the net external force applied, and this change occurs in the direction of the force.
\`\`\`
\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}
\`\`\`
Since momentum p = mv, if mass 'm' is constant, this simplifies to the famous equation:
\`\`\`
\\vec{F}_{net} = m\\vec{a}
\`\`\`
This is a vector equation. It can be broken down into components: ΣF_x = ma_x and ΣF_y = ma_y. The core of problem-solving is applying these component equations after drawing an FBD.

#### Third Law (Action-Reaction - வினை மற்றும் எதிர்வினை)
For every action, there is an equal and opposite reaction.
*   Forces always occur in pairs (F_AB = -F_BA).
*   Critically, action and reaction forces act on **two different bodies**. They never act on the same body and thus never cancel each other out.

### 3. Applying the Principles in Complex Scenarios (சிக்கலான சூழ்நிலைகளில் கோட்பாடுகளைப் பயன்படுத்துதல்)

#### A. Motion with Constraints (கட்டுப்பாடுகளுடன் கூடிய இயக்கம்)
When the motion of two or more bodies is interdependent (e.g., connected by a string or stacked), we need a "constraint relation" that connects their accelerations.
*   **String Constraint:** If two objects are connected by a taut, inextensible string, the component of their accelerations *along the string* must be the same.
*   **Wedge Constraint:** For a block on a wedge, their accelerations *perpendicular to the contact surface* must be equal for them to remain in contact.

#### B. Understanding Non-Inertial Frames (நிலைமமற்ற குறிப்பாயங்கள்)
Newton's laws are only valid in inertial frames (non-accelerating frames). What if our viewpoint (frame of reference) is accelerating, like inside a moving lift? To analyze the motion *from within* that accelerating frame, we must introduce a **pseudo force (போலி விசை)**.
*   **Pseudo Force (F_p):** This is a fictitious force we add to make Newton's laws work in the accelerating frame.
*   **Magnitude:** F_p = ma₀, where 'm' is the mass of the object being observed, and 'a₀' is the acceleration of the frame.
*   **Direction:** It acts in the direction **opposite** to the acceleration of the frame.
Once you add the pseudo force, you can apply ΣF_real + F_pseudo = ma_relative as if it were an inertial frame.

**Classic Example: The Lift Problem (மின் தூக்கி கணக்கு)**
Consider a person of mass 'm' on a weighing scale in a lift accelerating at 'a'.
*   **Lift Accelerating Upwards:** In the lift's frame, the forces are N (up), mg (down), and F_p = ma (down). For equilibrium in this frame, N = mg + ma = m(g+a). The person feels heavier (தோற்ற எடை அதிகம்).
*   **Lift Accelerating Downwards:** The pseudo force F_p = ma is now upwards. The forces are N (up), F_p (up), and mg (down). For equilibrium, N + ma = mg, so N = m(g-a). The person feels lighter (தோற்ற எடை குறைவு).
`,
    workedExamples: [
        {
            title: "NEET/JEE Level: Connected Blocks with Friction",
            difficulty: 'Medium',
            problem: "Two blocks of masses m₁=4kg and m₂=6kg are connected by a string and placed on a rough horizontal surface (μ=0.2). A force F=50N is applied on m₂. Find the acceleration of the system and the tension in the string. (g=10 m/s²)",
            fbd: [
                {
                    body: "Block m₁",
                    forces: [
                        { name: "Tension (T)", direction: "right" },
                        { name: "Friction (f₁)", direction: "left" },
                        { name: "Weight (m₁g)", direction: "down" },
                        { name: "Normal (N₁)", direction: "up" }
                    ]
                },
                {
                    body: "Block m₂",
                    forces: [
                        { name: "Applied Force (F)", direction: "right" },
                        { name: "Tension (T)", direction: "left" },
                        { name: "Friction (f₂)", direction: "left" },
                        { name: "Weight (m₂g)", direction: "down" },
                        { name: "Normal (N₂)", direction: "up" }
                    ]
                }
            ],
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'Calculate maximum static friction for both blocks to see if the system moves. Total max friction = f₁_max + f₂_max.',
                    calculation: 'f₁_max = μm₁g = 0.2*4*10 = 8 N. f₂_max = μm₂g = 0.2*6*10 = 12 N. Total max = 20 N.'
                },
                {
                    step: 2,
                    explanation: 'Compare driving force to max friction. Since F(50N) > Total Friction(20N), the system moves. The friction will be kinetic friction.',
                },
                {
                    step: 3,
                    explanation: 'Apply F_net = ma to the whole system (m₁ + m₂) to find acceleration.',
                    calculation: 'F - f₁ - f₂ = (m₁ + m₂)a  =>  50 - 8 - 12 = 10a  =>  30 = 10a  =>  a = 3 m/s²'
                },
                {
                    step: 4,
                    explanation: 'Apply F_net = ma to a single block (m₁) to find tension T.',
                    calculation: 'T - f₁ = m₁a  =>  T - 8 = 4 * 3  =>  T = 12 + 8  =>  T = 20 N'
                }
            ],
            neetHack: "For connected blocks, always treat them as a single system to find acceleration first: a = F_net_external / M_total. Then isolate one block (usually the one with fewer forces) to find internal forces like tension.",
            commonPitfall: "A common mistake is to only consider friction on the block being pulled. Friction opposes motion for *every* block in contact with the surface. Drawing FBDs for each block separately prevents this error."
        },
        {
            title: "JEE Level: Analyzing Motion in a Non-Inertial Frame",
            difficulty: 'Hard',
            problem: "A block of mass 'm' is placed on a smooth wedge of mass 'M' and inclination 'θ'. What horizontal acceleration `A` must be given to the wedge so the block `m` does *not* slip on it?",
            fbd: [{
                body: "Block m (in wedge's frame)",
                forces: [
                    { name: "Weight (mg)", direction: "down" },
                    { name: "Normal (N)", direction: "up-left" },
                    { name: "Pseudo Force (mA)", direction: "left" }
                ],
                isAngled: true,
            }],
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'This problem is best solved from the non-inertial (accelerating) frame of the wedge. We add a pseudo force to the block and then apply the condition for equilibrium (no slipping).'
                },
                {
                    step: 2,
                    explanation: 'Resolve forces into components parallel to the incline. For equilibrium (no slipping), the net force parallel to the incline must be zero.'
                },
                {
                    step: 3,
                    explanation: 'Component of gravity pulling down the incline is `mg sin(θ)`. Component of pseudo force pushing up the incline is `mA cos(θ)`.',
                },
                {
                    step: 4,
                    explanation: 'Set the parallel forces equal to each other for equilibrium and solve for A.',
                    calculation: 'mg sin(θ) = mA cos(θ)  =>  A = g * (sin(θ)/cos(θ))  =>  A = g tan(θ)'
                }
            ],
            neetHack: "This is a standard result and a very common pattern in competitive exams. For a block on a smooth incline, the horizontal acceleration needed to prevent slipping is always `A = g tan(θ)`. Recognizing this pattern can save a lot of time.",
            commonPitfall: "Forgetting to add the pseudo force, or adding it in the wrong direction. The second mistake is resolving the components incorrectly. Remember `mg` gets a `sin(θ)` component along the incline, while the horizontal force `mA` gets a `cos(θ)` component."
        },
        {
            title: "NEET Level: Block on an Incline with Friction",
            difficulty: 'Medium',
            problem: "A block of mass 5 kg is placed on a rough inclined plane making an angle of 30° with the horizontal. The coefficient of static friction is 0.6. Will the block slide down? What is the frictional force acting on it? (g = 10 m/s²)",
            fbd: [{
                body: "Block on Incline",
                forces: [
                    { name: "Weight (mg)", direction: "down" },
                    { name: "Normal (N)", direction: "up-left" },
                    { name: "Friction (f)", direction: "up-right" }
                ],
                isAngled: true,
            }],
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Compare the component of gravity pulling it down (F_down) with the maximum possible static frictional force (f_s_max).",
                },
                {
                    step: 2,
                    explanation: "Calculate the force pulling the block down the incline.",
                    calculation: "F_down = mg sin(θ) = 5 * 10 * sin(30°) = 50 * 0.5 = 25 N"
                },
                {
                    step: 3,
                    explanation: "Calculate the normal force (N), which is the component of weight perpendicular to the slope.",
                    calculation: "N = mg cos(θ) = 5 * 10 * cos(30°) = 50 * (√3 / 2) ≈ 43.3 N"
                },
                {
                    step: 4,
                    explanation: "Calculate the maximum possible static friction (f_s_max).",
                    calculation: "f_s_max = μs * N = 0.6 * 43.3 N ≈ 25.98 N"
                },
                {
                    step: 5,
                    explanation: "Compare forces. Since F_down (25 N) < f_s_max (25.98 N), the block will NOT slide. The actual static frictional force is equal to the downward force.",
                    calculation: "f_s = F_down = 25 N"
                }
            ],
            neetHack: "A quick check: if tan(θ) ≤ μs, the block will not slide. Here, tan(30°) ≈ 0.577, which is less than μs = 0.6. So, it won't slide.",
            commonPitfall: "The most common mistake is to assume the frictional force is f = μsN = 25.98 N. This is incorrect. Static friction is a self-adjusting force; it is only as large as it needs to be to prevent motion, up to its maximum value."
        },
        {
            title: "NEET Level: The Classic Atwood Machine",
            difficulty: 'Medium',
            problem: "Two masses, m₁ = 10 kg and m₂ = 5 kg, are connected by a massless, inextensible string passing over a frictionless pulley. Find the acceleration of the system and the tension in the string when they are released. (g = 10 m/s²)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the net force driving the system's motion and the total mass being accelerated.",
                    calculation: "F_net = m₁g - m₂g = 100 N - 50 N = 50 N. M_total = m₁ + m₂ = 15 kg."
                },
                {
                    step: 2,
                    explanation: "Calculate the acceleration using Newton's second law for the system: a = F_net / M_total.",
                    calculation: "a = 50 N / 15 kg = 10/3 m/s² ≈ 3.33 m/s²"
                },
                {
                    step: 3,
                    explanation: "Find the tension by creating an equation for one mass. Let's use m₂ (accelerating up): T - m₂g = m₂a.",
                    calculation: "T = m₂(g + a) = 5 * (10 + 10/3) = 5 * (40/3) ≈ 66.7 N"
                }
            ],
            neetHack: "Memorize the shortcut formulas for an Atwood machine: a = g(m₁-m₂)/(m₁+m₂) and T = 2m₁m₂g/(m₁+m₂). They save valuable time in exams.",
            commonPitfall: "Assuming tension equals one of the weights. Tension is an internal force and is not equal to either weight unless the system is in equilibrium (a=0)."
        },
        {
            title: "JEE Level: Centripetal Force and Friction",
            difficulty: 'Hard',
            problem: "A car of mass 1000 kg is moving at a speed of 10 m/s on a flat, circular road of radius 50 m. What is the minimum coefficient of static friction (μs) between the tires and the road required to prevent the car from slipping?",
            fbd: [{
                body: "Car (Top View)",
                forces: [
                    { name: "Friction (f)", direction: "inward" }
                ],
                isAngled: false,
                context: "This friction provides the centripetal force."
            }],
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The force causing the circular motion (centripetal force) is provided by static friction. Calculate the required centripetal force.",
                    calculation: "Fc = mv²/r = (1000 kg) * (10 m/s)² / 50 m = 2000 N"
                },
                {
                    step: 2,
                    explanation: "The maximum available static friction is f_s_max = μs * N. On a flat road, N = mg.",
                    calculation: "N = 1000 kg * 10 m/s² = 10000 N"
                },
                {
                    step: 3,
                    explanation: "To prevent slipping, the required centripetal force must equal the maximum static friction. Set Fc = f_s_max and solve for μs.",
                    calculation: "2000 N = μs * 10000 N  =>  μs = 2000 / 10000 = 0.2"
                }
            ],
            neetHack: "For any object on a flat circular path, the condition to prevent slipping is v² ≤ μs*g*r. This rearranges to μs ≥ v²/(gr). This shortcut allows you to solve for the coefficient without calculating the force or mass explicitly.",
            commonPitfall: "Confusing centripetal force as a new, separate force. It's not. Centripetal force is the *net force* directed towards the center. In this case, that net force is provided by friction. In other cases, it could be tension, gravity, or a combination of forces."
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
                        { name: "Weight (mg)", direction: "down" },
                        { name: "Normal (N)", direction: "up-left" },
                        { name: "Friction (f)", direction: "up-right" }
                    ],
                    isAngled: true,
                    context: "Key forces on an inclined plane."
                }
            }
        ]
    },
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
        {
            question: "The coefficient of static friction, μs, between a block of mass m and a horizontal surface is 0.4. What is the maximum horizontal force F that can be applied to the block without moving it? (g=10 m/s²)",
            options: ["A. 0.4mg", "B. 4N", "C. 0.4m", "D. 4mg"],
            answer: "A. 0.4mg",
            explanation: "The block will move if the applied force exceeds the maximum static friction, f_s_max = μs * N. On a horizontal surface, the normal force N equals the weight mg. Therefore, F_max = μs * mg = 0.4mg.",
            neetFrequency: 4
        },
        {
            question: "A bomb of mass 9 kg, initially at rest, explodes into two pieces of masses 3 kg and 6 kg. If the velocity of the 3 kg mass is 16 m/s, the kinetic energy of the 6 kg mass is:",
            options: ["A. 96 J", "B. 192 J", "C. 384 J", "D. 768 J"],
            answer: "B. 192 J",
            explanation: "By conservation of momentum, p_initial = p_final => 0 = m₁v₁ + m₂v₂. So, m₂v₂ = -m₁v₁. 6 * v₂ = -3 * 16 => v₂ = -8 m/s. Kinetic Energy of 6 kg mass = ½ * m₂ * v₂² = ½ * 6 * (-8)² = 3 * 64 = 192 J.",
            neetFrequency: 5
        },
        {
            question: "Which of Newton's laws is considered the 'real' law of motion from which the other two can be derived?",
            options: ["A. First Law", "B. Second Law", "C. Third Law", "D. Law of Gravitation"],
            answer: "B. Second Law",
            explanation: "The second law (F=dp/dt) is the most fundamental. The first law is a special case of the second where F=0. The third law can be derived by applying the second law to a system of two interacting particles and using the conservation of momentum.",
            neetFrequency: 2
        },
        {
            question: "A man of mass 70 kg stands on a weighing scale in a lift which is moving downwards with a uniform acceleration of 5 m/s². The reading on the weighing scale is: (g=10 m/s²)",
            options: ["A. 350 N", "B. 700 N", "C. 1050 N", "D. Zero"],
            answer: "A. 350 N",
            explanation: "The reading on the scale is the apparent weight (Normal Reaction, R). For downward acceleration 'a', the net force is mg - R = ma. So, R = mg - ma = m(g-a) = 70(10-5) = 70 * 5 = 350 N.",
            neetFrequency: 5
        },
        {
            question: "A block of mass M is pulled along a horizontal frictionless surface by a rope of mass m. If a force P is applied at the free end of the rope, the force exerted by the rope on the block is:",
            options: ["A. PM / (M+m)", "B. Pm / (M+m)", "C. P", "D. P(M-m) / (M+m)"],
            answer: "A. PM / (M+m)",
            explanation: "First, find the acceleration of the entire system (block + rope): a = P / (M+m). The force exerted by the rope on the block is the force that accelerates the block M. So, F_on_block = M * a = M * (P / (M+m)) = PM / (M+m).",
            neetFrequency: 3
        },
        {
            question: "The time period of a simple pendulum measured inside a stationary lift is T. If the lift starts accelerating upwards with an acceleration g/3, the new time period will be:",
            options: ["A. T√3", "B. T√3/2", "C. T/√3", "D. T/3"],
            answer: "B. T√3/2",
            explanation: "The time period T is proportional to 1/√g_eff. Initially, g_eff = g. When accelerating upwards, the effective gravity becomes g_eff' = g + a = g + g/3 = 4g/3. So, the new time period T' is proportional to 1/√(4g/3). The ratio T'/T = √(g / g_eff') = √(g / (4g/3)) = √(3/4) = √3/2. Therefore, T' = T√3/2.",
            neetFrequency: 3
        },
         {
            question: "Action and reaction forces act on:",
            options: ["A. The same body", "B. Different bodies", "C. The same body but in opposite directions", "D. Different bodies but in the same direction"],
            answer: "B. Different bodies",
            explanation: "Newton's third law states that action and reaction forces are equal and opposite, but they always act on two different interacting objects. This is a fundamental property of these force pairs.",
            neetFrequency: 5
        },
        {
            question: "A body of mass 2kg is sliding with a constant velocity of 4 m/s on a frictionless horizontal table. The force required to keep the body moving with the same velocity is:",
            options: ["A. 8 N", "B. 2 N", "C. 0 N", "D. 32 N"],
            answer: "C. 0 N",
            explanation: "According to Newton's First Law, if a body is moving with constant velocity, its acceleration is zero. Therefore, the net force on the body is zero. Since the table is frictionless, no force is required to maintain the constant velocity.",
            neetFrequency: 4
        },
        {
            question: "A bullet of mass 0.04 kg moving with a speed of 90 m/s enters a heavy wooden block and is stopped after a distance of 60 cm. The average resistive force exerted by the block on the bullet is:",
            options: ["A. 270 N", "B. 200 N", "C. 150 N", "D. 300 N"],
            answer: "A. 270 N",
            explanation: "First, find the deceleration 'a' using v² = u² + 2as. Here, v=0, u=90, s=0.6m. So, 0 = 90² + 2a(0.6) => a = -8100 / 1.2 = -6750 m/s². The resistive force F = ma = 0.04 * 6750 = 270 N.",
            neetFrequency: 4
        },
        {
            question: "Consider a car of mass 'm' moving on a banked road of radius 'r' with a speed 'v'. The angle of banking is 'θ'. For safe turning without friction, the speed is given by:",
            options: ["A. √(rg tanθ)", "B. √(rg/tanθ)", "C. √(rg sinθ)", "D. √(rg/sinθ)"],
            answer: "A. √(rg tanθ)",
            explanation: "For safe banking, the horizontal component of the normal force provides the necessary centripetal force. Nsinθ = mv²/r and Ncosθ = mg. Dividing the two equations gives tanθ = v²/(rg), so v = √(rg tanθ).",
            neetFrequency: 5
        },
        {
            question: "If the net external force on a system of particles is zero, then which of the following must be constant?",
            options: ["A. The kinetic energy of the system", "B. The acceleration of the center of mass", "C. The velocity of the center of mass", "D. The potential energy of the system"],
            answer: "C. The velocity of the center of mass",
            explanation: "If F_ext = 0, then the acceleration of the center of mass is zero (F_ext = M_total * a_cm). If the acceleration is zero, the velocity of the center of mass must be constant. Kinetic energy can change due to internal forces (e.g., in an explosion).",
            neetFrequency: 4
        },
        {
            question: "A man is standing in a spring-balance. If he jumps outside from the balance, then the reading of the spring-balance:",
            options: ["A. first increases then decreases to zero", "B. first decreases then increases to zero", "C. remains same", "D. increases"],
            answer: "A. first increases then decreases to zero",
            explanation: "To jump, the man must first push down on the scale (action), which increases the reading (reaction). As he leaves the scale, he is airborne and no longer exerts a force, so the reading decreases to zero.",
            neetFrequency: 2
        },
        {
            question: "A block of mass 2 kg is resting on a floor. The coefficient of static friction is 0.5. If a force of 2.5 N is applied on the block in parallel to the floor, the force of friction between the block and the floor is: (g = 10 N/kg)",
            options: ["A. 2.5 N", "B. 10 N", "C. 5 N", "D. 0 N"],
            answer: "A. 2.5 N",
            explanation: "First, calculate the maximum static friction: f_max = μs * N = μs * mg = 0.5 * 2 * 10 = 10 N. Since the applied force (2.5 N) is less than the maximum static friction (10 N), the block will not move. Static friction is a self-adjusting force, so it will be equal to the applied force to maintain equilibrium. Thus, f = 2.5 N.",
            neetFrequency: 5
        },
        {
            question: "A body of mass 5 kg is acted upon by two perpendicular forces 8 N and 6 N. The magnitude of the acceleration of the body is:",
            options: ["A. 2 m/s²", "B. 2.8 m/s²", "C. 1.4 m/s²", "D. 10 m/s²"],
            answer: "A. 2 m/s²",
            explanation: "The net force is the vector sum of the two perpendicular forces. F_net = √(8² + 6²) = √(64 + 36) = √100 = 10 N. According to Newton's second law, a = F_net / m = 10 N / 5 kg = 2 m/s².",
            neetFrequency: 4
        },
        {
            question: "A block is kept on a frictionless inclined surface with angle of inclination 'α'. The incline is given an acceleration 'a' to keep the block stationary. Then 'a' is equal to:",
            options: ["A. g tan(α)", "B. g / tan(α)", "C. g cosec(α)", "D. g"],
            answer: "A. g tan(α)",
            explanation: "In the non-inertial frame of the incline, a pseudo force 'ma' acts horizontally opposite to the acceleration. For the block to be stationary, the component of this pseudo force along the incline must balance the component of gravity along the incline. ma cos(α) = mg sin(α) => a = g (sin(α)/cos(α)) = g tan(α).",
            neetFrequency: 3
        },
        {
            question: "A marble block of mass 2 kg lying on ice when given a velocity of 6 m/s is stopped by friction in 10s. Then the coefficient of friction is:",
            options: ["A. 0.02", "B. 0.03", "C. 0.06", "D. 0.01"],
            answer: "C. 0.06",
            explanation: "First, find the deceleration: v = u + at => 0 = 6 + a(10) => a = -0.6 m/s². The frictional force is F = ma = 2 * 0.6 = 1.2 N. We also know that F = μN = μmg. So, 1.2 = μ * 2 * 10 => μ = 1.2 / 20 = 0.06.",
            neetFrequency: 3
        },
        {
            question: "The engine of a car produces an acceleration of 4 m/s² in the car. If this car pulls another car of same mass, what will be the acceleration produced?",
            options: ["A. 2 m/s²", "B. 4 m/s²", "C. 1/2 m/s²", "D. 1/4 m/s²"],
            answer: "A. 2 m/s²",
            explanation: "Let the mass of the car be 'm' and the force produced by the engine be 'F'. Initially, F = m * 4. When it pulls another car of the same mass, the total mass of the system becomes 2m. The force produced by the engine is the same. So, F = (2m) * a'. Equating the two, m * 4 = 2m * a' => a' = 4/2 = 2 m/s².",
            neetFrequency: 2
        },
        {
            question: "Swimming is possible on account of:",
            options: ["A. Newton's First Law of Motion", "B. Newton's Second Law of Motion", "C. Newton's Third Law of Motion", "D. Newton's Law of Gravitation"],
            answer: "C. Newton's Third Law of Motion",
            explanation: "A swimmer pushes water backward (action). The water, in turn, pushes the swimmer forward with an equal and opposite force (reaction), which allows for swimming. This is a direct application of Newton's Third Law.",
            neetFrequency: 4
        },
        {
            question: "A gun of mass 10 kg fires 4 bullets per second. The mass of each bullet is 20 g and the velocity of the bullet when it leaves the gun is 300 m/s. The force required to hold the gun when firing is:",
            options: ["A. 6 N", "B. 8 N", "C. 24 N", "D. 240 N"],
            answer: "C. 24 N",
            explanation: "The momentum of one bullet is p = mv = (0.020 kg) * (300 m/s) = 6 kg·m/s. The gun fires 4 bullets per second, so the rate of change of momentum is Δp/Δt = 4 * 6 kg·m/s / 1 s = 24 kg·m/s². By Newton's second law, this rate of change of momentum is equal to the force. So, the recoil force is 24 N.",
            neetFrequency: 3
        },
        {
            question: "The dimensions of 'impulse' are the same as that of:",
            options: ["A. Pressure", "B. Force", "C. Work", "D. Linear Momentum"],
            answer: "D. Linear Momentum",
            explanation: "Impulse is defined as the change in momentum (J = Δp). Therefore, its dimensions must be the same as that of linear momentum, which is [MLT⁻¹].",
            neetFrequency: 4
        },
        {
            question: "A body is moving in a circle with uniform speed. What is true about the motion?",
            options: ["A. Its velocity is constant.", "B. Its acceleration is constant.", "C. Its acceleration is directed towards the center.", "D. It has no acceleration."],
            answer: "C. Its acceleration is directed towards the center.",
            explanation: "In uniform circular motion, the speed is constant, but the direction of velocity is continuously changing. This change in velocity means there is an acceleration, called centripetal acceleration, which is always directed towards the center of the circle.",
            neetFrequency: 5
        },
        {
            question: "Which of the following is a self-adjusting force?",
            options: ["A. Kinetic friction", "B. Static friction", "C. Tension in a string", "D. Normal force"],
            answer: "B. Static friction",
            explanation: "Static friction is a self-adjusting force. It adjusts its magnitude to be equal to the applied force, up to its maximum limit (μsN). Kinetic friction, on the other hand, is roughly constant.",
            neetFrequency: 4
        },
        {
            question: "A force of 10 N acts on a body of mass 2 kg for 3 seconds. The impulse of the force is:",
            options: ["A. 20 Ns", "B. 30 Ns", "C. 15 Ns", "D. 6.67 Ns"],
            answer: "B. 30 Ns",
            explanation: "Impulse is defined as the product of force and the time interval for which it acts. Impulse (J) = F * Δt = 10 N * 3 s = 30 Ns.",
            neetFrequency: 3
        }
    ],
    assertionReasons: [
        {
            assertion: "A body can have acceleration even if its velocity is zero at a given instant.",
            reason: "Acceleration is the rate of change of velocity, not velocity itself.",
            answer: "A",
            explanation: "Assertion is true. At the highest point of its trajectory, a vertically thrown ball has zero velocity but still possesses acceleration due to gravity (g). The reason correctly explains that acceleration is about the *change* in velocity, which is happening at that instant."
        },
        {
            assertion: "When a person walks, the frictional force exerted by the ground on the person is in the forward direction.",
            reason: "Frictional force always opposes the motion of a body.",
            answer: "C",
            explanation: "The assertion is true. To walk, one pushes the ground backward with their foot. By Newton's third law, the ground exerts an equal and opposite (forward) frictional force, which propels the person. The reason is false. Friction opposes the *relative motion* or the *tendency of relative motion* between surfaces, not necessarily the motion of the body as a whole."
        },
        {
            assertion: "A cricketer moves his hands backward while catching a cricket ball.",
            reason: "This increases the time of impact (Δt), and according to the impulse-momentum theorem (FΔt = Δp), it decreases the average impact force (F) exerted by the ball on his hands.",
            answer: "A",
            explanation: "Both statements are true and the reason provides the correct physical explanation for the action described in the assertion. Increasing the time of impact for a given change in momentum reduces the force, preventing injury."
        },
        {
            assertion: "An object of mass 'm' is moving on a frictionless horizontal surface. If a constant force is applied on it, it moves with constant acceleration.",
            reason: "According to Newton's second law, F = ma.",
            answer: "A",
            explanation: "The assertion is a direct consequence of Newton's second law. If the net force F is constant and the mass m is constant, the acceleration 'a' must also be constant. The reason is the correct law explaining this."
        },
        {
            assertion: "Centripetal force and centrifugal force are action-reaction pairs.",
            reason: "Action and reaction forces act on different bodies.",
            answer: "D",
            explanation: "The assertion is false. Centripetal force is a real force directed towards the center of the circle. Centrifugal force is a pseudo force experienced in a non-inertial (rotating) frame, directed away from the center. They don't form an action-reaction pair. The reason, however, is a true statement, as action-reaction forces indeed act on different bodies."
        },
        {
            assertion: "It is difficult to move a cycle along a road with its brakes on.",
            reason: "Sliding friction is greater than rolling friction.",
            answer: "A",
            explanation: "Both statements are true. When brakes are applied, the wheels lock and slide, which generates sliding friction. This force is significantly larger than the rolling friction that exists when the wheels rotate freely. The reason correctly explains the assertion."
        },
        {
            assertion: "A rocket moves forward by pushing the gases backward.",
            reason: "This is an example of Newton's Third Law of Motion.",
            answer: "A",
            explanation: "The rocket exerts a force on the gases to expel them backward (action). According to Newton's third law, the gases exert an equal and opposite force on the rocket, pushing it forward (reaction). Both assertion and reason are true, and the reason correctly explains the assertion."
        },
        {
            assertion: "The concept of impulse is a measure of the total effect of a force.",
            reason: "Impulse is the product of the average force and the time interval for which it acts.",
            answer: "A",
            explanation: "The assertion is true; impulse (J = FΔt) quantifies the overall effect of a force over time. The reason provides the correct definition of impulse and thus is the correct explanation for the assertion. It is also equal to the change in momentum."
        },
        {
            assertion: "A block placed on a table is in equilibrium. The force of gravity on the block is the action, and the normal force from the table is the reaction.",
            reason: "Action and reaction forces are always equal and opposite.",
            answer: "D",
            explanation: "The assertion is false. While the block is in equilibrium and N=mg, the normal force and gravity are NOT an action-reaction pair. They both act on the same body (the block). The reaction to gravity (Earth pulling the block) is the block pulling the Earth. The reaction to the normal force (table pushing the block) is the block pushing the table. The reason is a true statement but does not validate the false assertion."
        },
        {
            assertion: "A body in a lift accelerating downwards experiences a decrease in its apparent weight.",
            reason: "The normal reaction force from the lift floor is less than its true weight.",
            answer: "A",
            explanation: "The apparent weight is the normal reaction (R). For downward acceleration 'a', the net force is mg - R = ma, so R = m(g-a). Since R is less than mg, the apparent weight decreases. The reason is a correct explanation for the assertion."
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
            column2: ["(p) `F = dp/dt`", "(q) Action-Reaction", "(r) Defines Inertial Frame", "(s) Occurs when `F_ext = 0`"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "First law defines inertia. Second law relates force to momentum change. Third law defines action-reaction pairs. Conservation of momentum applies when net external force is zero."
        },
        {
            column1: ["(a) Static Friction", "(b) Kinetic Friction", "(c) Lift accelerating up", "(d) Lift accelerating down"],
            column2: ["(p) Constant value `μ_k * N`", "(q) Self-adjusting force", "(r) Apparent weight = `m(g-a)`", "(s) Apparent weight = `m(g+a)`"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Static friction is self-adjusting. Kinetic friction is constant. Apparent weight increases with upward acceleration and decreases with downward acceleration."
        },
        {
            column1: ["(a) Unit of Force", "(b) Unit of Impulse", "(c) Unit of Friction", "(d) Unit of Momentum"],
            column2: ["(p) Newton-second (N-s)", "(q) kg-m/s", "(r) Newton (N)", "(s) Newton (N)"],
            answer: "a-r, b-p, c-s, d-q",
            explanation: "Force and Friction are both measured in Newtons. Impulse has units of N-s, which is equivalent to kg-m/s, the unit for momentum."
        },
        {
            column1: ["(a) Rocket Propulsion", "(b) A book on a table", "(c) Pushing a heavy box", "(d) A planet orbiting the sun"],
            column2: ["(p) Static Friction", "(q) Normal Force equals Weight", "(r) Centripetal Force", "(s) Conservation of Momentum"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Rocket propulsion is based on conservation of momentum. A book on a table is a simple equilibrium case (N=W). Pushing a box involves overcoming static friction. Orbital motion requires a centripetal force."
        }
    ]
};
