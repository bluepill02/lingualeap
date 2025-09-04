
import type { NeetModule } from '@/lib/types';

export const lawsOfMotionModule: NeetModule = {
    id: 'neet-physics-laws-of-motion',
    title: 'Physics - Laws of Motion (இயக்க விதிகள்)',
    chapter: 'Laws of Motion',
    subject: 'Physics',
    learningObjectives: [
        "Apply Newton's three laws to solve complex multi-body problems, including those with constraints.",
        "Master the creation and application of Free-Body Diagrams (FBDs) for any physical system.",
        "Understand and calculate various forces like Normal force, Tension, Static & Kinetic Friction, and Spring force.",
        "Analyze motion in non-inertial frames of reference by correctly applying the concept of pseudo forces.",
        "Solve problems involving conservation of linear momentum in collisions and explosions.",
        "Build a foundational understanding strong enough for both NEET and JEE Mains level questions."
    ],
    prerequisites: [
        "Vector algebra (addition, subtraction, resolution of vectors).",
        "Kinematic equations for uniformly accelerated motion.",
        "Basic calculus (differentiation and integration) for understanding variable forces and momentum change."
    ],
    conceptOverview: "Newton's Laws of Motion are the absolute bedrock of Classical Mechanics. A mastery of these three laws is not just about memorizing formulas; it's about developing a robust problem-solving methodology. This module will build that methodology, enabling you to deconstruct any mechanics problem, from simple blocks to complex multi-body systems, making it essential for both NEET and JEE.",
    tamilConnection: "இயற்பியலின் மொழி கணிதம், ஆனால் அதன் ஆன்மா நியூட்டனின் விதிகளில் உள்ளது. ஒரு தேர் நகரத் தேவையான விசையிலிருந்து ராக்கெட் விண்ணில் பாய்வது வரை அனைத்தையும் இந்த மூன்று விதிகளும் விளக்குகின்றன. இந்த விதிகளை ஆழமாகப் புரிந்துகொள்வது கடினமான கணக்குகளையும் எளிதாக்கும்.",
    culturalContext: "Think of the precision required in Jallikattu, where a person must rapidly assess forces and motion to tame a bull. This intuitive grasp of dynamics is what we will formalize with Newton's laws, turning intuition into a powerful, analytical tool.",
    syllabusMapping: [
         {
            topic: 'Newton\'s Laws & Applications',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 3: Laws of Motion',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 5: Laws of Motion',
            notes: 'Crucial for both NEET & JEE. JEE Mains requires deeper application, including constraints and non-inertial frames. The step-by-step problem-solving strategy is key.'
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
            notes: 'Conservation of Linear Momentum is a fundamental principle. JEE questions can involve explosions or variable mass systems where F=dp/dt is more applicable than F=ma.'
        }
    ],
    conceptNotes: `### 1. The Language of Forces: Free-Body Diagrams (FBD)
The single most important skill in solving mechanics problems is drawing a Free-Body Diagram (FBD). It is a diagram that shows ALL the forces acting ON a single object.
**Strategy for FBD:**
1.  **Isolate the Object:** Mentally separate the object from its surroundings.
2.  **Represent with a Point:** Draw a dot or a box to represent the object.
3.  **Identify All Forces:** Go through a checklist of forces.
    *   **Non-Contact Force:** Does gravity act on it? (Almost always, `W = mg`, acting downwards).
    *   **Contact Forces:** What is the object touching? Each point of contact can exert a force.
        *   Is it on a surface? There is a **Normal Force** (`N`), perpendicular to the surface.
        *   Is a string or rope attached? There is **Tension** (`T`), acting along the rope, away from the object.
        *   Is there friction? **Frictional Force** (`f`) acts parallel to the surface, opposing relative motion or tendency of motion.
        *   Is a spring attached? **Spring Force** (`kx`) acts along the spring.
4.  **Draw Force Vectors:** Draw arrows for each force, originating from the point, in the correct direction. Label each force clearly.

### 2. Newton's Laws of Motion (Revisited with Depth)

#### First Law (Law of Inertia)
An object continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by an external force. This law defines an **Inertial Frame of Reference** - a frame where this law holds true.
\`\`\`
\\text{If } \\vec{F}_{net} = 0, \\text{ then } \\vec{v} = \\text{constant} \\quad (\\text{i.e., } \\vec{a} = 0)
\`\`\`

#### Second Law (The "Real" Law)
The rate of change of linear momentum of a body is directly proportional to the net external force applied on the body, and this change takes place in the direction of the applied force.
\`\`\`
\\vec{F}_{net} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt}
\`\`\`
If mass `m` is constant, this simplifies to the famous equation:
\`\`\`
\\vec{F}_{net} = m\\frac{d\\vec{v}}{dt} = m\\vec{a}
\`\`\`
This is a vector equation. It can be broken down into components: `ΣF_x = ma_x`, `ΣF_y = ma_y`, `ΣF_z = ma_z`.

#### Third Law (Action-Reaction)
For every action, there is an equal and opposite reaction. `Action = -Reaction`.
*   Forces always occur in pairs.
*   Action and reaction forces act on **different bodies**.
*   They are equal in magnitude and opposite in direction.
\`\`\`
\\vec{F}_{AB} = -\\vec{F}_{BA}
\`\`\`

### 3. Advanced Concepts for JEE

#### A. Constraint Motion
When the motion of two or more bodies is interdependent, it is called constrained motion. The relationship between their accelerations is called the constraint relation.
*   **String Constraint:** If two objects are connected by a taut, inextensible string, the component of their velocities and accelerations along the string must be the same.
*   **Wedge Constraint:** If a block rests on a wedge, the component of their accelerations perpendicular to the contact surface must be equal for them to remain in contact.

#### B. Non-Inertial Frames and Pseudo Force
Newton's laws are only valid in inertial frames (non-accelerating frames). To apply them in a non-inertial frame (a frame accelerating with `a_0`), we must introduce a **pseudo force**.
*   **Pseudo Force (`F_p`):** It is an imaginary force.
*   **Magnitude:** `F_p = ma`, where `m` is the mass of the object being observed.
*   **Direction:** It acts in the direction **opposite** to the acceleration of the frame (`a_0`).
After applying the pseudo force, we can treat the non-inertial frame as if it were inertial and apply `ΣF_real + F_pseudo = 0` (if the object is at rest in the accelerating frame).

**Example: The Lift Problem**
*   **Lift Accelerating Upwards (a):** Apparent weight = `N = m(g+a)`. You feel heavier.
*   **Lift Accelerating Downwards (a):** Apparent weight = `N = m(g-a)`. You feel lighter.
*   **Lift in Free Fall (a=g):** Apparent weight = `N = m(g-g) = 0`. This is weightlessness.

`,
    workedExamples: [
        {
            title: "JEE Level 1: Connected Blocks with Friction",
            difficulty: 'Medium',
            problem: "Two blocks of masses m₁=4kg and m₂=6kg are connected by a string and placed on a rough horizontal surface (μ=0.2). A force F=50N is applied on m₂. Find the acceleration of the system and the tension in the string. (g=10 m/s²)",
            solutionSteps: [
                "Step 1: Draw FBD for both blocks. For m₁, forces are Tension (T) right, friction (f₁) left, weight (m₁g) down, normal (N₁) up. For m₂, forces are F right, T left, friction (f₂) left, weight (m₂g) down, normal (N₂) up.",
                "Step 2: Calculate maximum static friction for both. f₁_max = μN₁ = μm₁g = 0.2 * 4 * 10 = 8 N. f₂_max = μN₂ = μm₂g = 0.2 * 6 * 10 = 12 N. Total friction = 20 N.",
                "Step 3: Check if the blocks will move. Applied force F=50N is greater than total max static friction (20N), so they will move with acceleration 'a'. The friction will be kinetic, f = μ_k N (assuming μ_k = μ).",
                "Step 4: Apply Newton's second law to the system as a whole. F_net = F - f₁ - f₂ = (m₁ + m₂)a.",
                "50 - 8 - 12 = (4 + 6)a  => 30 = 10a => a = 3 m/s².",
                "Step 5: Apply Newton's second law to m₁ to find tension. T - f₁ = m₁a.",
                "T - 8 = 4 * 3 => T - 8 = 12 => T = 20 N."
            ],
            neetHack: "For connected blocks, treat them as a single system to find acceleration first. F_net_external = (Total Mass) * a. Then isolate one block to find internal forces like tension.",
            commonPitfall: "Forgetting to draw friction on both blocks or incorrectly calculating the net force. Always draw the FBD first."
        },
        {
            title: "JEE Level 2: Wedge Constraint",
            difficulty: 'Hard',
            problem: "A block of mass 'm' is placed on a smooth wedge of mass 'M' and inclination 'θ'. The system is released from rest. Find the acceleration of the wedge.",
            solutionSteps: [
                "Step 1: Let the acceleration of the wedge (M) be 'A' to the left. Let the acceleration of the block (m) relative to the wedge be 'a_rel' down the incline.",
                "Step 2: Work in the ground (inertial) frame. The true acceleration of 'm' is the vector sum of 'A' (left) and 'a_rel' (down the incline).",
                "Step 3: Draw FBD for 'm'. Forces are mg (down) and Normal force N (perpendicular to incline).",
                "Step 4: Draw FBD for 'M'. Forces are Mg (down), N' (up from ground), and N (perpendicular to incline, into the wedge, by Newton's 3rd law).",
                "Step 5: Apply Newton's 2nd Law in components. For M, the only horizontal force is the horizontal component of N. So, N sin(θ) = MA. (Eq 1)",
                "Step 6: For m, resolving forces perpendicular to the incline: mg cos(θ) - N = m(A sin(θ)). This is the constraint relation component. (Eq 2)",
                "Step 7: For m, resolving forces along the incline: mg sin(θ) = m(a_rel - A cos(θ)).",
                "Step 8: We have a system of equations. From (Eq 2), N = mg cos(θ) - mA sin(θ). Substitute this N into (Eq 1).",
                "(mg cos(θ) - mA sin(θ))sin(θ) = MA",
                "mg sin(θ)cos(θ) - mA sin²(θ) = MA",
                "mg sin(θ)cos(θ) = A(M + m sin²(θ))",
                "A = (mg sin(θ)cos(θ)) / (M + m sin²(θ))"
            ],
            neetHack: "Wedge constraint problems are rare in NEET but common in JEE. The key is relating the accelerations. Often, working in the non-inertial frame of the wedge simplifies the problem.",
            commonPitfall: "Incorrectly resolving the acceleration vectors or forces. The acceleration of 'm' is NOT just down the incline in the ground frame. It's a vector sum. This is the most common mistake."
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
                title: 'Free-Body Diagram (FBD) of a Block on an Incline',
                description: 'Decomposing the weight vector `mg` is the key first step.',
                diagram: `
        N (Normal Force) ^  /
                          /|\\
                         / | \\  f (friction)
                        /  |  \\
                       /   |   \\
                      /....|....\\
                     <-----mg cos(θ)--->
                        \\  |  /
                         \\ | /
                          \\|/ mg sin(θ)
                           V mg
`
            }
        ]
    },
    mcqs: [
        {
            question: "A car suddenly starts from rest. Passengers feel pushed backward due to:",
            options: ["A. Centripetal force", "B. Inertia of Rest", "C. Inertia of Motion", "D. Fictitious Force"],
            answer: "B. Inertia of Rest",
            explanation: "The passenger's body tends to remain in its state of rest due to inertia, while the car moves forward, creating the sensation of being pushed back. It's specifically inertia of rest."
        },
        {
            question: "A lift of mass 1000 kg is moving upwards with an acceleration of 1 m/s². The tension in the supporting cable is (g = 9.8 m/s²):",
            options: ["A. 9800 N", "B. 10800 N", "C. 8800 N", "D. 1000 N"],
            answer: "B. 10800 N",
            explanation: "The net upward force is T - mg = ma. So, T = mg + ma = m(g+a) = 1000(9.8 + 1) = 1000(10.8) = 10800 N. The tension must support the weight AND provide the upward acceleration."
        },
        {
            "question": "The coefficient of static friction, μs, between a block of mass m and a horizontal surface is 0.4. What is the maximum horizontal force F that can be applied to the block without moving it? (g=10 m/s²)",
            "options": ["A. 0.4mg", "B. 4N", "C. 0.4m", "D. 4mg"],
            "answer": "A. 0.4mg",
            "explanation": "The block will move if the applied force exceeds the maximum static friction, f_s_max = μs * N. On a horizontal surface, the normal force N equals the weight mg. Therefore, F_max = μs * mg = 0.4mg."
        },
        {
            "question": "A bomb of mass 9 kg, initially at rest, explodes into two pieces of masses 3 kg and 6 kg. If the velocity of the 3 kg mass is 16 m/s, the kinetic energy of the 6 kg mass is:",
            "options": ["A. 96 J", "B. 192 J", "C. 384 J", "D. 768 J"],
            "answer": "B. 192 J",
            "explanation": "By conservation of momentum, p_initial = p_final => 0 = m₁v₁ + m₂v₂. So, m₂v₂ = -m₁v₁. 6 * v₂ = -3 * 16 => v₂ = -8 m/s. Kinetic Energy of 6 kg mass = ½ * m₂ * v₂² = ½ * 6 * (-8)² = 3 * 64 = 192 J."
        },
        {
            "question": "Which of Newton's laws is considered the 'real' law of motion from which the other two can be derived?",
            "options": ["A. First Law", "B. Second Law", "C. Third Law", "D. Law of Gravitation"],
            "answer": "B. Second Law",
            "explanation": "The second law (F=dp/dt) is the most fundamental. The first law is a special case of the second where F=0. The third law can be derived by applying the second law to a system of two interacting particles and using the conservation of momentum."
        },
        {
            "question": "A man of mass 70 kg stands on a weighing scale in a lift which is moving downwards with a uniform acceleration of 5 m/s². The reading on the weighing scale is: (g=10 m/s²)",
            "options": ["A. 350 N", "B. 700 N", "C. 1050 N", "D. Zero"],
            "answer": "A. 350 N",
            "explanation": "The reading on the scale is the apparent weight (Normal Reaction, R). For downward acceleration 'a', the net force is mg - R = ma. So, R = mg - ma = m(g-a) = 70(10-5) = 70 * 5 = 350 N."
        },
        {
            "question": "A block of mass M is pulled along a horizontal frictionless surface by a rope of mass m. If a force P is applied at the free end of the rope, the force exerted by the rope on the block is:",
            "options": ["A. PM / (M+m)", "B. Pm / (M+m)", "C. P", "D. P(M-m) / (M+m)"],
            "answer": "A. PM / (M+m)",
            "explanation": "First, find the acceleration of the entire system (block + rope): a = P / (M+m). The force exerted by the rope on the block is the force that accelerates the block M. So, F_on_block = M * a = M * (P / (M+m)) = PM / (M+m)."
        },
        {
            "question": "The time period of a simple pendulum measured inside a stationary lift is T. If the lift starts accelerating upwards with an acceleration g/3, the new time period will be:",
            "options": ["A. T√3", "B. T√3/2", "C. T/√3", "D. T/3"],
            "answer": "B. T√3/2",
            "explanation": "The time period T is proportional to 1/√g_eff. Initially, g_eff = g. When accelerating upwards, the effective gravity becomes g_eff' = g + a = g + g/3 = 4g/3. So, the new time period T' is proportional to 1/√(4g/3). The ratio T'/T = √(g / g_eff') = √(g / (4g/3)) = √(3/4) = √3/2. Therefore, T' = T√3/2."
        }
    ],
    assertionReasons: [
        {
            "assertion": "A body can have acceleration even if its velocity is zero at a given instant.",
            "reason": "Acceleration is the rate of change of velocity, not velocity itself.",
            "answer": "A",
            "explanation": "Assertion is true. At the highest point of its trajectory, a vertically thrown ball has zero velocity but still possesses acceleration due to gravity (g). The reason correctly explains that acceleration is about the *change* in velocity, which is happening at that instant."
        },
        {
            "assertion": "When a person walks, the frictional force exerted by the ground on the person is in the forward direction.",
            "reason": "Frictional force always opposes the motion of a body.",
            "answer": "C",
            "explanation": "The assertion is true. To walk, one pushes the ground backward with their foot. By Newton's third law, the ground exerts an equal and opposite (forward) frictional force, which propels the person. The reason is false. Friction opposes the *relative motion* or the *tendency of relative motion* between surfaces, not necessarily the motion of the body as a whole."
        },
        {
            "assertion": "A cricketer moves his hands backward while catching a cricket ball.",
            "reason": "This increases the time of impact (Δt), and according to the impulse-momentum theorem (FΔt = Δp), it decreases the average impact force (F) exerted by the ball on his hands.",
            "answer": "A",
            "explanation": "Both statements are true and the reason provides the correct physical explanation for the action described in the assertion. Increasing the time of impact for a given change in momentum reduces the force, preventing injury."
        },
        {
            "assertion": "An object of mass 'm' is moving on a frictionless horizontal surface. If a constant force is applied on it, it moves with constant acceleration.",
            "reason": "According to Newton's second law, F = ma.",
            "answer": "A",
            "explanation": "The assertion is a direct consequence of Newton's second law. If the net force F is constant and the mass m is constant, the acceleration 'a' must also be constant. The reason is the correct law explaining this."
        },
        {
            "assertion": "Centripetal force and centrifugal force are action-reaction pairs.",
            "reason": "Action and reaction forces act on different bodies.",
            "answer": "D",
            "explanation": "The assertion is false. Centripetal force is a real force directed towards the center of the circle. Centrifugal force is a pseudo force experienced in a non-inertial (rotating) frame, directed away from the center. They don't form an action-reaction pair. The reason, however, is a true statement, as action-reaction forces indeed act on different bodies."
        },
        {
            "assertion": "It is difficult to move a cycle along a road with its brakes on.",
            "reason": "Sliding friction is greater than rolling friction.",
            "answer": "A",
            "explanation": "Both statements are true. When brakes are applied, the wheels lock and slide, which generates sliding friction. This force is significantly larger than the rolling friction that exists when the wheels rotate freely. The reason correctly explains the assertion."
        },
        {
            "assertion": "A rocket moves forward by pushing the gases backward.",
            "reason": "This is an example of Newton's Third Law of Motion.",
            "answer": "A",
            "explanation": "The rocket exerts a force on the gases to expel them backward (action). According to Newton's third law, the gases exert an equal and opposite force on the rocket, pushing it forward (reaction). Both assertion and reason are true, and the reason correctly explains the assertion."
        },
        {
            "assertion": "The concept of impulse is a measure of the total effect of a force.",
            "reason": "Impulse is the product of the average force and the time interval for which it acts.",
            "answer": "A",
            "explanation": "The assertion is true; impulse (J = FΔt) quantifies the overall effect of a force over time. The reason provides the correct definition of impulse and thus is the correct explanation for the assertion. It is also equal to the change in momentum."
        },
        {
            "assertion": "A block placed on a table is in equilibrium. The force of gravity on the block is the action, and the normal force from the table is the reaction.",
            "reason": "Action and reaction forces are always equal and opposite.",
            "answer": "D",
            "explanation": "The assertion is false. While the block is in equilibrium and N=mg, the normal force and gravity are NOT an action-reaction pair. They both act on the same body (the block). The reaction to gravity (Earth pulling the block) is the block pulling the Earth. The reaction to the normal force (table pushing the block) is the block pushing the table. The reason is a true statement but does not validate the false assertion."
        },
        {
            "assertion": "A body in a lift accelerating downwards experiences a decrease in its apparent weight.",
            "reason": "The normal reaction force from the lift floor is less than its true weight.",
            "answer": "A",
            "explanation": "The apparent weight is the normal reaction (R). For downward acceleration 'a', the net force is mg - R = ma, so R = m(g-a). Since R is less than mg, the apparent weight decreases. The reason is a correct explanation for the assertion."
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
