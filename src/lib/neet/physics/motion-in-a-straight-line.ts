
import type { NeetModule } from '@/lib/types';

export const motionInAStraightLineModule: NeetModule = {
    id: 'neet-physics-motion-in-a-straight-line',
    title: 'Physics - Motion in a Straight Line (நேர்கோட்டு இயக்கம்)',
    chapter: 'Motion in a Straight Line',
    subject: 'Physics',
    learningObjectives: [
        "Clearly differentiate between distance and displacement, speed and velocity.",
        "Understand and apply the concepts of average and instantaneous velocity and acceleration.",
        "Master the derivation and application of the three kinematic equations for uniformly accelerated motion.",
        "Solve problems involving motion under gravity, including objects thrown upwards and dropped from a height.",
        "Analyze relative motion in one dimension."
    ],
    prerequisites: [
        "Basic algebra and graph plotting.",
        "Fundamental concepts of differentiation and integration for understanding instantaneous values."
    ],
    conceptOverview: "Kinematics is the branch of mechanics that describes the motion of objects without considering the forces that cause the motion. This chapter lays the foundation by focusing on the simplest case: motion along a straight line. By defining and analyzing concepts like displacement, velocity, and acceleration, we develop a set of powerful equations—the kinematic equations—that allow us to predict the future position and velocity of any object undergoing constant acceleration. Mastering these fundamentals is non-negotiable for success in any competitive physics exam.",
    tamilConnection: "'வேகம்', 'முடுக்கம்', 'இடப்பெயர்ச்சி' - இந்த வார்த்தைகளை நாம் தினமும் பயன்படுத்தினாலும், அதன் இயற்பியல் அர்த்தம் ஆழமானது. ஒரு பேருந்து நிலையத்திலிருந்து புறப்படுவது முதல், மேலே எறிந்த கல் கீழே வருவது வரை அனைத்தையும் இந்த நேர்கோட்டு இயக்க விதிகள் விளக்குகின்றன. இந்த அடிப்படைகளைப் புரிந்துகொள்வது, சிக்கலான இயக்கங்களையும் எளிதாகப் பகுப்பாய்வு செய்ய உதவும்.",
    culturalContext: "Imagine the precision of an athlete running in a Silambam competition, moving back and forth in a straight line. Their ability to control their velocity and acceleration is key. This chapter provides the tools to scientifically describe and predict that motion.",
    syllabusMapping: [
         {
            topic: 'Kinematics',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 2: Kinematics',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 3: Motion in a Straight Line',
            notes: 'This is a core chapter. A significant number of questions are directly based on the kinematic equations and motion under gravity. Strong graphical interpretation skills are also tested.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 2 maps to NEET Physics Unit 2'
        }
    ],
    conceptNotes: `### 1. Describing Motion: Position, Path Length, and Displacement (இயக்கத்தை விவரித்தல்: நிலை, பாதை நீளம் மற்றும் இடப்பெயர்ச்சி)
*   **Frame of Reference (குறிப்பாயம்):** A coordinate system (like x, y, z axes) with a clock, with respect to which we describe the motion of an object.
*   **Path Length (பாதை நீளம்):** The total length of the actual path traversed by an object. It is a [[scalar quantity:ஸ்கேலார் அளவு]] (has only magnitude) and is always positive.
*   **Displacement (இடப்பெயர்ச்சி):** The shortest straight-line distance between the initial and final positions of an object. It is a [[vector quantity:வெக்டர் அளவு]] (has both magnitude and direction). Displacement can be positive, negative, or zero.
    \`\`\`
    \\Delta x = x_f - x_i
    \`\`\`
    Example: If you walk 5m East and then 3m West, your path length is 8m, but your displacement is 2m East.

### 2. Velocity and Speed (திசைவேகம் மற்றும் வேகம்)
*   **Average Velocity (சராசரி திசைவேகம்):** The ratio of total displacement to the total time interval.
    \`\`\`
    \\bar{v} = \\frac{\\text{Total Displacement}}{\\text{Total Time}} = \\frac{\\Delta x}{\\Delta t}
    \`\`\`
*   **Average Speed (சராசரி வேகம்):** The ratio of total path length to the total time interval.
    \`\`\`
    \\text{Average Speed} = \\frac{\\text{Total Path Length}}{\\text{Total Time}}
    \`\`\`
    *Note: Average speed is generally greater than or equal to the magnitude of average velocity.*
*   **Instantaneous Velocity (உடனடி திசைவேகம்):** The velocity of an object at a particular instant of time. It is the derivative of position with respect to time.
    \`\`\`
    v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}
    \`\`\`
*   **Instantaneous Speed:** The magnitude of the instantaneous velocity.

### 3. Acceleration (முடுக்கம்)
*   **Acceleration (முடுக்கம்):** The rate of change of velocity with respect to time. It is a vector quantity.
*   **Average Acceleration (சராசரி முடுக்கம்):**
    \`\`\`
    \\bar{a} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}
    \`\`\`
*   **Instantaneous Acceleration (உடனடி முடுக்கம்):**
    \`\`\`
    a = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t} = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}
    \`\`\`

### 4. Kinematic Equations for Uniformly Accelerated Motion (சீரான முடுக்கத்துடன் கூடிய இயக்கத்திற்கான இயக்கச் சமன்பாடுகள்)
These three equations are the cornerstone of kinematics and are valid *only* when the acceleration 'a' is constant.
1.  **Velocity-Time Relation:**  \`v = u + at\`
2.  **Position-Time Relation:** \`s = ut + \\frac{1}{2}at^2\`
3.  **Position-Velocity Relation:** \`v^2 = u^2 + 2as\`

Where:
*   *u* = initial velocity (தொடக்க திசைவேகம்)
*   *v* = final velocity (இறுதி திசைவேகம்)
*   *a* = constant acceleration (சீரான முடுக்கம்)
*   *s* = displacement (இடப்பெயர்ச்சி)
*   *t* = time interval (கால இடைவெளி)

A fourth useful equation can be derived for displacement in the *n*th second:
\`\`\`
s_n = u + \\frac{a}{2}(2n - 1)
\`\`\`

### 5. Motion Under Gravity (ஈர்ப்பின் கீழ் இயக்கம்)
This is a special case of uniformly accelerated motion where the acceleration is due to gravity, *g* (approximately 9.8 m/s²).
*   **Sign Convention is Crucial:** A common convention is to take the upward direction as positive and the downward direction as negative.
    *   In this case, acceleration *a = -g* for all scenarios (object thrown up, falling down).
*   The kinematic equations become:
    1.  \`v = u - gt\`
    2.  \`s = ut - \\frac{1}{2}gt^2\`
    3.  \`v^2 = u^2 - 2gs\`
`,
    workedExamples: [
        {
            title: "NEET Level: Application of Kinematic Equations",
            difficulty: 'Medium',
            problem: "A ball is thrown vertically upwards with a velocity of 20 m/s from the top of a multistorey building. The height of the point from where the ball is thrown is 25 m from the ground. (a) How high will the ball rise? (b) How long will it be before the ball hits the ground? (Take g = 10 m/s²)\n\nதமிழ்: ஒரு பல மாடிக் கட்டிடத்தின் உச்சியிலிருந்து ஒரு பந்து 20 மீ/வி திசைவேகத்தில் செங்குத்தாக மேல்நோக்கி எறியப்படுகிறது. பந்து எறியப்பட்ட இடத்தின் உயரம் தரையிலிருந்து 25 மீ ஆகும். (a) பந்து எவ்வளவு உயரம் எழும்பும்? (b) பந்து தரையைத் தொடும் முன் எவ்வளவு நேரம் ஆகும்? (g = 10 மீ/வி² எனக் கொள்க)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Part (a): Find the maximum height reached from the top of the building. At the maximum height, the final velocity `v` is 0.",
                    explanationTamil: "பகுதி (a): கட்டிடத்தின் உச்சியிலிருந்து அடையும் பெரும உயரத்தைக் கண்டறியவும். பெரும உயரத்தில், இறுதித் திசைவேகம் `v` சுழியாகும்."
                },
                {
                    step: 2,
                    explanation: "Use the position-velocity relation: v² = u² + 2as. Here, a = -g.",
                    explanationTamil: "நிலை-திசைவேகத் தொடர்பைப் பயன்படுத்தவும்: v² = u² + 2as. இங்கு, a = -g.",
                    calculation: "0² = (20)² + 2(-10)s \\implies 0 = 400 - 20s \\implies 20s = 400 \\implies s = 20 m"
                },
                {
                    step: 3,
                    explanation: "Part (b): Calculate the total time of flight. We can use the position-time relation: s = ut + ½at². Here, the net displacement `s` is -25 m (since it ends up 25 m *below* the starting point).",
                    explanationTamil: "பகுதி (b): மொத்தப் பயண நேரத்தைக் கணக்கிடவும். நிலை-காலத் தொடர்பைப் பயன்படுத்தலாம்: s = ut + ½at². இங்கு, நிகர இடப்பெயர்ச்சி `s` என்பது -25 மீ (ஏனெனில் அது தொடக்கப் புள்ளிக்கு *கீழே* 25 மீ தொலைவில் முடிவடைகிறது)."
                },
                {
                    step: 4,
                    explanation: "Substitute the values into the quadratic equation and solve for t.",
                    calculation: "-25 = 20t + \\frac{1}{2}(-10)t² \\implies -25 = 20t - 5t² \\implies 5t² - 20t - 25 = 0 \\implies t² - 4t - 5 = 0"
                },
                {
                    step: 5,
                    explanation: "Factor the quadratic equation: (t-5)(t+1) = 0. Since time cannot be negative, we take the positive root.",
                    calculation: "t = 5 s or t = -1 s. Therefore, the time taken to hit the ground is 5 seconds."
                }
            ],
            neetHack: "For motion under gravity, always establish a clear sign convention (e.g., up is positive). The most common mistake is mixing up signs for displacement, velocity, and acceleration. The displacement 's' is about the *net change* in position, not the total distance traveled.",
            neetHackTamil: "ஈர்ப்பின் கீழ் இயக்கத்தில், எப்போதும் ஒரு தெளிவான குறியீட்டு மரபை (எ.கா., மேல்நோக்கி நேர்க்குறி) அமைக்கவும். இடப்பெயர்ச்சி, திசைவேகம் மற்றும் முடுக்கம் ஆகியவற்றிற்கான குறியீடுகளைக் குழப்பிக் கொள்வது மிகவும் பொதுவான தவறு. இடப்பெயர்ச்சி 's' என்பது மொத்தப் பயண தூரம் அல்ல, அது நிலையில் ஏற்படும் *நிகர மாற்றம்* ஆகும்."
        },
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'v = u + at',
                description: 'Velocity-Time Relation (Uniform Acceleration)'
            },
            {
                formula: 's = ut + \\frac{1}{2}at^2',
                description: 'Position-Time Relation (Uniform Acceleration)'
            },
            {
                formula: 'v^2 = u^2 + 2as',
                description: 'Position-Velocity Relation (Uniform Acceleration)'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Displacement is a vector, while path length is a scalar.",
        "Acceleration is the rate of change of velocity, not speed.",
        "The three kinematic equations are only valid for constant acceleration.",
        "Motion under gravity is a key application of constant acceleration, with a = -g (using standard convention)."
    ],
    mcqs: [
        {
            question: "A particle covers half of its total distance with speed v₁ and the rest half distance with speed v₂. Its average speed during the complete journey is:",
            options: ["A. (v₁ + v₂)/2", "B. (v₁v₂)/(v₁ + v₂)", "C. (2v₁v₂)/(v₁ + v₂)", "D. (v₁²v₂²)/(v₁² + v₂²)"],
            answer: "C. (2v₁v₂)/(v₁ + v₂)",
            explanation: "Let the total distance be 2d. Time for the first half, t₁ = d/v₁. Time for the second half, t₂ = d/v₂. Average speed = Total Distance / Total Time = 2d / (d/v₁ + d/v₂) = 2 / (1/v₁ + 1/v₂) = (2v₁v₂)/(v₁ + v₂).",
            neetFrequency: 4
        },
        {
            question: "The displacement of a particle is given by x = (t - 2)² where x is in metres and t in seconds. The distance covered by the particle in first 4 seconds is:",
            options: ["A. 4 m", "B. 8 m", "C. 0 m", "D. 12 m"],
            answer: "B. 8 m",
            explanation: "Velocity v = dx/dt = 2(t-2). The velocity is zero at t=2s. The particle moves in the negative direction for t<2s and positive direction for t>2s. Distance in first 2s = |x(2) - x(0)| = |0 - 4| = 4m. Distance in next 2s = |x(4) - x(2)| = |4 - 0| = 4m. Total distance = 4m + 4m = 8m.",
            neetFrequency: 3
        }
    ],
    assertionReasons: [],
    matchTheColumns: []
};
