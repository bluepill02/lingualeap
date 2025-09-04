
import type { NeetModule } from '@/lib/types';

export const motionInAPlaneModule: NeetModule = {
    id: 'neet-physics-motion-in-a-plane',
    title: 'Physics - Motion in a Plane (தளத்தில் இயக்கம்)',
    chapter: 'Motion in a Plane',
    subject: 'Physics',
    learningObjectives: [
        "Resolve vectors into components and perform vector addition and subtraction.",
        "Analyze and solve problems related to projectile motion, calculating time of flight, maximum height, and range.",
        "Describe uniform circular motion in terms of angular velocity, centripetal acceleration, and time period.",
        "Apply the concept of relative velocity in two dimensions to solve problems involving rain, boats, and aircraft."
    ],
    prerequisites: [
        "Solid understanding of one-dimensional kinematics (Motion in a Straight Line).",
        "Basic trigonometry (sine, cosine, tangent).",
        "Familiarity with vector notation (i-hat, j-hat)."
    ],
    conceptOverview: "This chapter extends the concepts of kinematics from one dimension to two dimensions. The key insight is that two-dimensional motion can be analyzed as two independent one-dimensional motions along perpendicular axes. We will explore two of the most important examples of 2D motion: projectile motion (a combination of horizontal uniform motion and vertical accelerated motion) and uniform circular motion (where the speed is constant but the velocity vector continuously changes direction).",
    tamilConnection: "ஒரு கிரிக்கெட் பந்து காற்றில் பறப்பது, ஆற்றின் குறுக்கே நீந்தும் படகு, அல்லது வளைவான சாலையில் செல்லும் வாகனம் - இவை அனைத்தும் தளத்தில் இயக்கத்திற்கான உதாரணங்கள். ஒன்றுக்கொன்று செங்குத்தான இரண்டு இயக்கங்களின் தொகுப்பாக இதைப் புரிந்துகொள்வது, சிக்கலான பாதைகளைக் கூட எளிதாக பகுப்பாய்வு செய்ய உதவுகிறது.",
    culturalContext: "Consider the trajectory of a stone in the game of 'Ezhu Kallu' (Seven Stones) or a 'Kabbadi' player raiding and quickly changing direction. Both involve motion in a plane. This chapter provides the mathematical language to describe these complex, dynamic movements with precision.",
    syllabusMapping: [
         {
            topic: 'Vectors, Projectile Motion, Circular Motion',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 2: Kinematics',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 4: Motion in a Plane',
            notes: 'Projectile motion is a very high-yield topic for NEET. Questions on finding range, max height, and time of flight are frequent. Uniform circular motion concepts, especially centripetal acceleration, are also critical.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 2 maps to NEET Physics Unit 2'
        }
    ],
    conceptNotes: `### 1. Scalars and Vectors (ஸ்கேலார்கள் மற்றும் வெக்டர்கள்)
*   **Scalars:** Quantities with only magnitude. E.g., distance, speed, mass, time.
*   **Vectors:** Quantities with both magnitude and direction. E.g., displacement, velocity, acceleration, force.
*   **Vector Representation:** A vector $\\vec{A}$ can be written in component form as $\\vec{A} = A_x \\hat{i} + A_y \\hat{j}$, where $A_x$ and $A_y$ are the scalar components and $\\hat{i}, \\hat{j}$ are unit vectors along the x and y axes.
*   **Magnitude:** $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2}$
*   **Direction:** $\\theta = \\tan^{-1}(\\frac{A_y}{A_x})$

### 2. Projectile Motion (எறியியக்க இயக்கம்)
Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of gravity. We assume air resistance is negligible. The key is to analyze the horizontal and vertical motions independently.

| Aspect | Horizontal Motion (X-axis) | Vertical Motion (Y-axis) |
| :--- | :--- | :--- |
| **Acceleration (முடுக்கம்)** | $a_x = 0$ | $a_y = -g$ |
| **Velocity (திசைவேகம்)** | $v_x = u_x = u \\cos\\theta$ (Constant) | $v_y = u_y - gt = u \\sin\\theta - gt$ |
| **Displacement (இடப்பெயர்ச்சி)**| $x = (u \\cos\\theta) t$ | $y = (u \\sin\\theta) t - \\frac{1}{2}gt^2$ |

#### Key Formulas for Projectile Motion:
*   **Time of Flight (பறக்கும் நேரம்), T:** The total time the projectile is in the air.
$$ T = \\frac{2u \\sin\\theta}{g} $$
*   **Maximum Height (பெரும உயரம்), H:** The highest point reached by the projectile.
$$ H = \\frac{u^2 \\sin^2\\theta}{2g} $$
*   **Horizontal Range (கிடைத்தள நெடுக்கம்), R:** The total horizontal distance covered.
$$ R = \\frac{u^2 \\sin(2\\theta)}{g} $$
    *Note: The range is maximum when $\\sin(2\\theta) = 1$, which means $2\\theta = 90^\\circ$ or $\\theta = 45^\\circ$.*

### 3. Uniform Circular Motion (சீரான வட்ட இயக்கம்)
This is the motion of an object traveling at a constant *speed* along a circular path. Even though the speed is constant, the *velocity* is continuously changing because its direction is changing. This change in velocity means there must be an acceleration.
*   **Centripetal Acceleration (மையநோக்கு முடுக்கம்), $a_c$:** This acceleration is always directed towards the center of the circle. Its magnitude is given by:
$$ a_c = \\frac{v^2}{r} = \\omega^2 r $$
    where $v$ is the linear speed, $r$ is the radius of the circle, and $\\omega$ is the angular velocity.
*   **Centripetal Force (மையநோக்கு விசை), $F_c$:** According to Newton's second law, this acceleration must be caused by a net force, also directed towards the center.
$$ F_c = ma_c = \\frac{mv^2}{r} $$
    *This is not a new kind of force. It is simply the net force (e.g., tension, gravity, friction) that is causing the circular motion.*

### 4. Relative Velocity in Two Dimensions (இரு பரிமாணங்களில் சார்பு திசைவேகம்)
The velocity of object A relative to object B is given by:
$$
\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B
$$
This is a vector subtraction. It's often easier to think of it as adding the negative of $\\vec{v}_B$ to $\\vec{v}_A$: $\\vec{v}_{AB} = \\vec{v}_A + (-\\vec{v}_B)$.
*   **Rain-Man Problems:** To a person running, rain that is falling vertically appears to fall at an angle. The velocity of the rain relative to the man is $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$.
*   **Boat-River Problems:** To cross a river, a boat's velocity with respect to the ground is the vector sum of its velocity with respect to the water and the velocity of the water with respect to the ground.
`,
    workedExamples: [
        {
            title: "NEET Level: Projectile Motion",
            difficulty: 'Medium',
            problem: "A cricket ball is thrown at a speed of 28 m/s in a direction 30° above the horizontal. Calculate (a) the maximum height, (b) the time taken by the ball to return to the same level, and (c) the horizontal distance from the thrower to the point where the ball returns to the same level. (g = 9.8 m/s²)\n\nதமிழ்: ஒரு கிரிக்கெட் பந்து 28 மீ/வி வேகத்தில் கிடைத்தளத்திற்கு 30° கோணத்தில் மேல்நோக்கி எறியப்படுகிறது. (a) பெரும உயரம், (b) பந்து அதே நிலைக்குத் திரும்ப எடுத்துக்கொள்ளும் நேரம், மற்றும் (c) கிடைத்தள நெடுக்கம் ஆகியவற்றைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the initial velocity (u) and the angle of projection (θ).",
                    calculation: "u = 28 m/s, θ = 30°"
                },
                {
                    step: 2,
                    explanation: "Part (a): Use the formula for maximum height, H = (u² sin²θ) / 2g.",
                    explanationTamil: "பகுதி (a): பெரும உயரத்திற்கான சூத்திரத்தைப் பயன்படுத்தவும், H = (u² sin²θ) / 2g.",
                    calculation: "H = \\frac{28^2 \\times \\sin^2(30^\\circ)}{2 \\times 9.8} = \\frac{784 \\times (0.5)^2}{19.6} = \\frac{784 \\times 0.25}{19.6} = \\frac{196}{19.6} = 10 \\text{ m}"
                },
                {
                    step: 3,
                    explanation: "Part (b): Use the formula for time of flight, T = (2u sinθ) / g.",
                    explanationTamil: "பகுதி (b): பறக்கும் நேரத்திற்கான சூத்திரத்தைப் பயன்படுத்தவும், T = (2u sinθ) / g.",
                    calculation: "T = \\frac{2 \\times 28 \\times \\sin(30^\\circ)}{9.8} = \\frac{56 \\times 0.5}{9.8} = \\frac{28}{9.8} \\approx 2.86 \\text{ s}"
                },
                {
                    step: 4,
                    explanation: "Part (c): Use the formula for horizontal range, R = (u² sin(2θ)) / g.",
                    explanationTamil: "பகுதி (c): கிடைத்தள நெடுக்கத்திற்கான சூத்திரத்தைப் பயன்படுத்தவும், R = (u² sin(2θ)) / g.",
                    calculation: "R = \\frac{28^2 \\times \\sin(2 \\times 30^\\circ)}{9.8} = \\frac{784 \\times \\sin(60^\\circ)}{9.8} = \\frac{784 \\times 0.866}{9.8} \\approx 69.3 \\text{ m}"
                }
            ],
            neetHack: "For projectile motion, remember that the time taken to reach maximum height is exactly half the total time of flight (T/2). Also, the range is the same for complementary angles of projection (e.g., 30° and 60°).",
            neetHackTamil: "எறியியக்கத்தில், பெரும உயரத்தை அடைய எடுக்கும் நேரம் மொத்தப் பயண நேரத்தில் பாதியாகும் (T/2). மேலும், நிரப்பு கோணங்களுக்கு (எ.கா., 30° மற்றும் 60°) கிடைத்தள நெடுக்கம் சமமாக இருக்கும்.",
            commonPitfall: "A common mistake is using the full velocity 'u' in the separate x and y motion equations. Always resolve 'u' into its components `ux = u cosθ` and `uy = u sinθ` before applying the kinematic equations.",
            commonPitfallTamil: "x மற்றும் y இயக்க சமன்பாடுகளில் முழு திசைவேகம் 'u' ஐப் பயன்படுத்துவது ஒரு பொதுவான தவறு. இயக்கவியல் சமன்பாடுகளைப் பயன்படுத்துவதற்கு முன்பு எப்போதும் 'u' ஐ அதன் கூறுகளாக `ux = u cosθ` மற்றும் `uy = u sinθ` எனப் பிரிக்கவும்."
        },
        {
            title: "JEE Level: Relative Velocity in a River",
            difficulty: 'Hard',
            problem: "A man can swim with a speed of 4 km/h in still water. How long does he take to cross a river 1 km wide if the river flows steadily at 3 km/h and he makes his strokes normal to the river current? How far down the river does he go when he reaches the other bank?\n\nதமிழ்: ஒரு மனிதன் ساکن நீரில் 4 கிமீ/ம வேகத்தில் நீந்த முடியும். 3 கிமீ/ம வேகத்தில் ஓடும் 1 கிமீ அகலமுள்ள ஆற்றை அவர் நீரோட்டத்திற்கு செங்குத்தாக நீந்தினால், ஆற்றைக் கடக்க எவ்வளவு நேரம் ஆகும்? அவர் மறுகரையை அடையும்போது, நீரோட்டத்தின் திசையில் எவ்வளவு தூரம் சென்றிருப்பார்?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Define the velocities. Velocity of man w.r.t water, $\\vec{v}_{mw} = 4\\hat{j}$ km/h. Velocity of water w.r.t ground, $\\vec{v}_{wg} = 3\\hat{i}$ km/h.",
                    explanationTamil: "திசைவேகங்களை வரையறுக்கவும். நீரைப் பொறுத்து மனிதனின் திசைவேகம், $\\vec{v}_{mw} = 4\\hat{j}$ கிமீ/ம. தரையைப் பொறுத்து நீரின் திசைவேகம், $\\vec{v}_{wg} = 3\\hat{i}$ கிமீ/ம."
                },
                {
                    step: 2,
                    explanation: "Find the velocity of the man w.r.t ground, $\\vec{v}_{mg} = \\vec{v}_{mw} + \\vec{v}_{wg}$.",
                    calculation: "\\vec{v}_{mg} = 3\\hat{i} + 4\\hat{j}"
                },
                {
                    step: 3,
                    explanation: "Calculate the time to cross the river. The time is determined by the component of velocity perpendicular to the river flow (the y-component). River width = 1 km.",
                    calculation: "Time = \\frac{Width}{v_y} = \\frac{1 \\text{ km}}{4 \\text{ km/h}} = 0.25 \\text{ hours} = 15 \\text{ minutes}"
                },
                {
                    step: 4,
                    explanation: "Calculate the horizontal drift. The drift is caused by the component of velocity parallel to the river flow (the x-component) acting for the calculated time.",
                    calculation: "Drift = v_x \\times \\text{Time} = 3 \\text{ km/h} \\times 0.25 \\text{ h} = 0.75 \\text{ km} = 750 m"
                }
            ],
            neetHack: "In river-boat problems, the time to cross the river depends *only* on the component of velocity perpendicular to the flow. The river's current only affects the downstream drift, not the crossing time.",
            neetHackTamil: "ஆறு-படகு கணக்குகளில், ஆற்றைக் கடக்கும் நேரம் நீரோட்டத்திற்கு செங்குத்தான திசைவேகத்தின் கூறை *மட்டுமே* சார்ந்தது. ஆற்றின் நீரோட்டம், கீழ்நோக்கிய நகர்வை மட்டுமே பாதிக்கிறது, கடக்கும் நேரத்தை அல்ல."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'T = \\frac{2u \\sin\\theta}{g}',
                description: 'Time of Flight for a Projectile'
            },
            {
                formula: 'R = \\frac{u^2 \\sin(2\\theta)}{g}',
                description: 'Horizontal Range of a Projectile'
            },
            {
                formula: 'a_c = \\frac{v^2}{r}',
                description: 'Centripetal Acceleration'
            },
            {
                formula: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B',
                description: 'Relative Velocity'
            }
        ],
        diagrams: [
             {
                title: 'Projectile Trajectory',
                description: 'Decomposition of initial velocity `u` into horizontal (u cosθ) and vertical (u sinθ) components.',
                diagram: `
        ^ y
        |     /\\
        |    /  \\ H (Max Height)
        |   /    \\
 u_y |  /      \\
    /| /        \\
   / |/          \\
  u  θ------------> x
   \\ |            |
    \\|            |
     u_x          |
     --------------------
     O           R (Range)
                `
            }
        ]
    },
    keyTakeaways: [
        "2D motion is two independent 1D motions.",
        "In projectile motion, horizontal velocity is constant, while vertical velocity changes due to gravity.",
        "An object in uniform circular motion has a constant speed but is always accelerating towards the center.",
        "Relative velocity problems are solved by vector subtraction."
    ],
    mcqs: [
        {
            question: "For a projectile, the quantity that remains constant throughout the flight is:",
            options: ["A. Velocity", "B. Kinetic Energy", "C. Horizontal component of velocity", "D. Vertical component of velocity"],
            answer: "C. Horizontal component of velocity",
            explanation: "Assuming no air resistance, there is no horizontal acceleration ($a_x=0$). Therefore, the horizontal component of velocity ($u_x = u \\cos\\theta$) remains constant.",
            neetFrequency: 5
        },
        {
            question: "A particle moves in a circle of radius R with a constant speed v. Its acceleration is:",
            options: ["A. Zero", "B. v²/R, towards the center", "C. v²/R, away from the center", "D. v²/R, tangential"],
            answer: "B. v²/R, towards the center",
            explanation: "For uniform circular motion, there is always a centripetal acceleration of magnitude v²/R directed towards the center of the circle.",
            neetFrequency: 4
        }
    ],
    assertionReasons: [],
    matchTheColumns: [],
    mnemonics: [],
    neetTips: []
};
