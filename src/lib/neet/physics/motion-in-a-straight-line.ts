
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
        {
            title: "JEE Level: Motion with Variable Acceleration",
            difficulty: 'Hard',
            problem: "The acceleration of a particle is given by a = 3t² + 2t + 2 (m/s²). If the particle starts from rest (u=0 at t=0), find the velocity at the end of 2 seconds.\n\nதமிழ்: ஒரு துகளின் முடுக்கம் a = 3t² + 2t + 2 (மீ/வி²) என கொடுக்கப்பட்டுள்ளது. துகள் ஓய்விலிருந்து (t=0 இல் u=0) தொடங்கினால், 2 வினாடிகளின் முடிவில் திசைவேகத்தைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Understand the relationship between acceleration and velocity. Since acceleration is the rate of change of velocity, we can find the change in velocity by integrating acceleration with respect to time.",
                    explanationTamil: "முடுக்கம் மற்றும் திசைவேகத்திற்கு இடையேயான தொடர்பைப் புரிந்து கொள்ளுங்கள். முடுக்கம் என்பது திசைவேகத்தின் மாறுவீதம் என்பதால், நேரத்தைப் பொறுத்து முடுக்கத்தை தொகையீடு செய்வதன் மூலம் திசைவேகத்தில் ஏற்படும் மாற்றத்தைக் காணலாம்."
                },
                {
                    step: 2,
                    explanation: "Set up the integral. We know a = dv/dt, so dv = a dt. We integrate both sides.",
                    calculation: "\\int_{u}^{v} dv = \\int_{0}^{t} a \\,dt"
                },
                {
                    step: 3,
                    explanation: "Substitute the given expression for 'a' and the initial condition u=0 at t=0.",
                    calculation: "\\int_{0}^{v} dv = \\int_{0}^{t} (3t^2 + 2t + 2) \\,dt"
                },
                {
                    step: 4,
                    explanation: "Perform the integration to find the expression for velocity 'v' as a function of time 't'.",
                    calculation: "v = [\\frac{3t^3}{3} + \\frac{2t^2}{2} + 2t]_0^t \\implies v = t^3 + t^2 + 2t"
                },
                {
                    step: 5,
                    explanation: "Substitute t = 2 seconds into the velocity expression to find the final velocity.",
                    calculation: "v = (2)^3 + (2)^2 + 2(2) = 8 + 4 + 4 = 16 m/s"
                }
            ],
            neetHack: "When acceleration is a function of time, remember the calculus relationship: a = dv/dt and v = dx/dt. To go from acceleration to velocity, integrate. To go from velocity to acceleration, differentiate. This is a fundamental concept for JEE.",
            neetHackTamil: "முடுக்கம் நேரத்தின் சார்பாக இருக்கும்போது, கால்குலஸ் தொடர்பை நினைவில் கொள்ளுங்கள்: a = dv/dt மற்றும் v = dx/dt. முடுக்கத்திலிருந்து திசைவேகத்திற்குச் செல்ல, தொகையீடு செய்யவும். திசைவேகத்திலிருந்து முடுக்கத்திற்குச் செல்ல, வகையீடு செய்யவும். இது JEE-க்கு ஒரு அடிப்படைக் கருத்து."
        },
        {
            title: "NEET Level: Relative Velocity",
            difficulty: 'Medium',
            problem: "Two trains A and B of length 400 m each are moving on two parallel tracks with a uniform speed of 72 km/h in the same direction, with A ahead of B. The driver of B decides to overtake A and accelerates by 1 m/s². If after 50 s, the guard of B just brushes past the driver of A, what was the original distance between them?",
            solutionSteps: [
                { step: 1, explanation: "Convert speed to m/s: 72 km/h = 72 * (5/18) = 20 m/s." },
                { step: 2, explanation: "Consider the motion relative to train A. The initial relative velocity of B with respect to A is u_rel = u_B - u_A = 20 - 20 = 0 m/s." },
                { step: 3, explanation: "The relative acceleration is a_rel = a_B - a_A = 1 - 0 = 1 m/s²." },
                { step: 4, explanation: "For the guard of B to pass the driver of A, the total relative distance covered is the sum of the lengths of the two trains plus the initial distance. s_rel = Length_A + Length_B + x = 800 + x. Wait, this framing is tricky. Let's define the relative distance that B needs to cover as 's_rel'. This is the initial distance 'x'. For the guard of B (at its tail) to pass the driver of A (at its front), train B has to cover its own length plus the length of train A plus the initial distance. Let the initial distance between the front of B and the rear of A be x. The total relative distance to cover is x + length_A + length_B = x + 800. Let's retry: The relative displacement needed for the guard of B to pass the driver of A is simply the sum of their lengths, 800m, PLUS the initial separation. The total relative distance covered is s_rel = 1/2 * a_rel * t^2 since u_rel is 0. s_rel = 0.5 * 1 * 50^2 = 1250 m. This distance IS the initial distance between them. The question is slightly ambiguous, but typically 'distance between them' refers to the distance between the front of the trailing train and the rear of the leading train. The relative distance covered by train B to fully overtake train A (rear of B passes front of A) is `s_rel = L_A + L_B + x_initial`. Let's assume the question meant the guard of B passes the guard of A. Then s_rel = x+400. Let's assume the question meant the driver of B passes the guard of A. Then s_rel = x+400. The standard interpretation: The total distance to be covered for the guard of B to pass the driver of A is the initial distance `x`. s_rel = u_rel*t + 0.5*a_rel*t^2. s_rel = 0 + 0.5*1*50^2 = 1250m. This distance covered is the initial separation.", calculation: "s_rel = 1250 m" },
                { step: 5, explanation: "The kinematic equation for relative motion is s_rel = u_rel * t + 0.5 * a_rel * t². The distance covered (s_rel) is the initial separation. s_rel = (0)(50) + 0.5 * 1 * (50)² = 1250 m. So, the original distance was 1250 m." }
            ],
            commonPitfall: "Defining the relative distance in train problems is the most common error. Draw a diagram showing the initial and final positions to clearly visualize the total distance that needs to be covered in the relative frame."
        },
        {
            title: "JEE Level: Graphical Interpretation",
            difficulty: 'Hard',
            problem: "The velocity-time graph of a particle moving in a straight line is shown. It consists of a semicircle of radius 2. Find the distance and displacement in the first 4 seconds.",
            solutionSteps: [
                { step: 1, explanation: "The graph is a semicircle from t=0 to t=4, with the center at (2,0) and radius 2. The maximum velocity occurs at t=2 and is equal to the radius, vmax = 2 m/s." },
                { step: 2, explanation: "Displacement is the area under the v-t graph. The area of a semicircle is (1/2)πr².", calculation: "Displacement = Area = (1/2) * π * (2)² = 2π meters." },
                { step: 3, explanation: "Distance is the magnitude of the area. Since the velocity is always positive, the distance is equal to the displacement.", calculation: "Distance = 2π meters." },
                { step: 4, explanation: "To find acceleration, we need the slope. The equation of the semicircle is v = sqrt(4 - (t-2)²). The slope a = dv/dt = -(t-2)/sqrt(4 - (t-2)²). At t=1, a = -(-1)/sqrt(3) = 1/√3. At t=3, a = -(1)/sqrt(3) = -1/√3." },
                { step: 5, explanation: "The acceleration is not constant. It is positive for t<2 and negative for t>2." }
            ],
            neetHack: "For any v-t graph, distance is the total area (treat all areas as positive), while displacement is the net area (areas below the axis are negative). Always check if the graph crosses the time axis."
        },
        {
            title: "NEET Level: Displacement in nth second",
            difficulty: 'Easy',
            problem: "A particle starts from rest with a constant acceleration of 2 m/s². Find the distance covered in the 5th second of its motion.",
            solutionSteps: [
                { step: 1, explanation: "Use the formula for distance in the nth second: s_n = u + (a/2)(2n - 1)." },
                { step: 2, explanation: "Identify the given values: u = 0, a = 2 m/s², n = 5." },
                { step: 3, explanation: "Substitute the values into the formula." },
                { step: 4, explanation: "s_5 = 0 + (2/2)(2*5 - 1) = 1 * (10 - 1) = 9 m." },
                { step: 5, explanation: "Alternatively, find distance in 5s and 4s and subtract. s(5) = 0.5*2*5² = 25m. s(4) = 0.5*2*4² = 16m. Distance in 5th second = s(5) - s(4) = 25 - 16 = 9 m." }
            ],
            commonPitfall: "Confusing 'distance in 5 seconds' with 'distance in the 5th second'. The latter is the distance covered between t=4s and t=5s."
        }
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
        },
        { question: "If a body starts from rest, its velocity after time 't' is proportional to:", options: ["A. t", "B. t²", "C. √t", "D. 1/t"], answer: "A. t", explanation: "From v = u + at, if u=0, then v = at, so v is proportional to t.", neetFrequency: 2 },
        { question: "A ball is dropped from a high tower. What is the distance it travels in the 3rd second? (g=10 m/s²)", options: ["A. 15 m", "B. 25 m", "C. 30 m", "D. 45 m"], answer: "B. 25 m", explanation: "Using s_n = u + (g/2)(2n-1), s_3 = 0 + (10/2)(2*3 - 1) = 5 * 5 = 25 m.", neetFrequency: 4 },
        { question: "The slope of a velocity-time graph represents:", options: ["A. Distance", "B. Displacement", "C. Acceleration", "D. Speed"], answer: "C. Acceleration", explanation: "Acceleration a = dv/dt, which is the slope of the v-t graph.", neetFrequency: 5 },
        { question: "Which of the following is a vector quantity?", options: ["A. Distance", "B. Speed", "C. Mass", "D. Displacement"], answer: "D. Displacement", explanation: "Displacement has both magnitude and direction.", neetFrequency: 1 },
        { question: "A car accelerates from 18 km/h to 36 km/h in 5 seconds. The acceleration is:", options: ["A. 1 m/s²", "B. 2 m/s²", "C. 3.6 m/s²", "D. 18 m/s²"], answer: "A. 1 m/s²", explanation: "u = 18 * 5/18 = 5 m/s. v = 36 * 5/18 = 10 m/s. a = (v-u)/t = (10-5)/5 = 1 m/s².", neetFrequency: 3 },
        { question: "If an object's velocity is constant, its acceleration is:", options: ["A. Constant", "B. Zero", "C. Increasing", "D. Decreasing"], answer: "B. Zero", explanation: "Acceleration is the rate of change of velocity. If velocity is constant, its rate of change is zero.", neetFrequency: 2 },
        { question: "The area under an acceleration-time graph represents:", options: ["A. Change in velocity", "B. Change in displacement", "C. Final velocity", "D. Final displacement"], answer: "A. Change in velocity", explanation: "Since a = dv/dt, dv = a*dt. Integrating gives Δv = ∫a dt, which is the area under the a-t graph.", neetFrequency: 3 },
        { question: "A body is thrown vertically upwards. At the highest point, its:", options: ["A. Velocity and acceleration are zero", "B. Velocity is zero, acceleration is g", "C. Velocity is non-zero, acceleration is zero", "D. Velocity and acceleration are non-zero"], answer: "B. Velocity is zero, acceleration is g", explanation: "At the peak, the body momentarily stops (v=0) but gravity is still acting on it (a=g downwards).", neetFrequency: 5 },
        { question: "The numerical ratio of displacement to distance for a moving object is:", options: ["A. Always less than 1", "B. Always equal to 1", "C. Always more than 1", "D. Equal to or less than 1"], answer: "D. Equal to or less than 1", explanation: "Displacement is the shortest path, so its magnitude is always less than or equal to the path length (distance).", neetFrequency: 2 },
        { question: "A particle moves from (2,3) to (4,1). Its displacement vector is:", options: ["A. 2i + 2j", "B. 2i - 2j", "C. -2i + 2j", "D. -2i - 2j"], answer: "B. 2i - 2j", explanation: "Δr = r_f - r_i = (4i + j) - (2i + 3j) = 2i - 2j.", neetFrequency: 1 },
        { question: "A car travels 30 km at a uniform speed of 40 km/h and the next 30 km at a uniform speed of 20 km/h. Find its average speed.", options: ["A. 30 km/h", "B. 25 km/h", "C. 26.67 km/h", "D. 35 km/h"], answer: "C. 26.67 km/h", explanation: "t1 = 30/40 = 0.75h. t2 = 30/20 = 1.5h. Avg speed = Total dist / Total time = 60 / (0.75 + 1.5) = 60 / 2.25 = 26.67 km/h.", neetFrequency: 4 },
        { question: "If the displacement of a particle is proportional to t³, its acceleration is proportional to:", options: ["A. t", "B. t²", "C. t³", "D. 1/t"], answer: "A. t", explanation: "x ∝ t³. v = dx/dt ∝ t². a = dv/dt ∝ t.", neetFrequency: 2 },
        { question: "A stone falls freely under gravity. It covers distances h1, h2 and h3 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h1, h2 and h3 is:", options: ["A. h1 = h2 = h3", "B. h1 = h2/3 = h3/5", "C. h2 = 3h1 and h3 = 5h1", "D. h2 = 4h1 and h3 = 9h1"], answer: "B. h1 = h2/3 = h3/5", explanation: "For a freely falling body, the distances covered in successive equal time intervals are in the ratio 1:3:5:7... So h1:h2:h3 = 1:3:5.", neetFrequency: 5 },
        { question: "The velocity of a particle is v = v₀ + gt + ft². If its position is x = 0 at t = 0, then its displacement after unit time (t = 1) is:", options: ["A. v₀ + g/2 + f/3", "B. v₀ + 2g + 3f", "C. v₀ + g + f", "D. v₀ + g/2 + f"], answer: "A. v₀ + g/2 + f/3", explanation: "x = ∫v dt = ∫(v₀ + gt + ft²)dt = v₀t + gt²/2 + ft³/3. At t=1, x = v₀ + g/2 + f/3.", neetFrequency: 3 },
        { question: "Stopping distance of a vehicle is proportional to:", options: ["A. u", "B. u²", "C. √u", "D. 1/u"], answer: "B. u²", explanation: "From v² = u² + 2as, if v=0, then s = -u²/(2a). So s ∝ u².", neetFrequency: 4 },
        { question: "Two cars are moving in the same direction with the same speed. The relative velocity of one with respect to the other is:", options: ["A. Zero", "B. Equal to their speed", "C. Double their speed", "D. Infinite"], answer: "A. Zero", explanation: "v_rel = v_A - v_B. If v_A = v_B, then v_rel = 0.", neetFrequency: 2 },
        { question: "A particle starts from the origin with velocity 5i m/s and moves in the x-y plane with a constant acceleration of (3i + 2j) m/s². At the instant its x-coordinate is 84 m, what is its y-coordinate?", options: ["A. 12 m", "B. 24 m", "C. 36 m", "D. 48 m"], answer: "C. 36 m", explanation: "x = u_x*t + 0.5*a_x*t² => 84 = 5t + 0.5*3*t². => 1.5t² + 5t - 84 = 0. Solving gives t=6s. Now find y = u_y*t + 0.5*a_y*t² = 0*6 + 0.5*2*6² = 36 m.", neetFrequency: 4 },
        { question: "A drunkard walking in a narrow lane takes 5 steps forward and 3 steps backward, followed again by 5 steps forward and 3 steps backward, and so on. Each step is 1 m long and requires 1 s. Determine how long the drunkard takes to fall in a pit 13 m away from the start.", options: ["A. 21 s", "B. 32 s", "C. 37 s", "D. 41 s"], answer: "C. 37 s", explanation: "In 8s, he moves 5-3=2m. To move 8m, it takes 32s. In the next 5s, he moves 5m forward, covering 8+5=13m. He falls into the pit. Total time = 32s + 5s = 37s.", neetFrequency: 3 },
        { question: "A car moving with a speed of 50 km/h can be stopped by brakes after at least 6 m. If the same car is moving at a speed of 100 km/h, the minimum stopping distance is:", options: ["A. 6 m", "B. 12 m", "C. 18 m", "D. 24 m"], answer: "D. 24 m", explanation: "Stopping distance s ∝ u². If speed is doubled (u' = 2u), the stopping distance becomes s' = 4s. So, s' = 4 * 6m = 24m.", neetFrequency: 5 },
        { question: "The position of a particle as a function of time t is given by x(t) = at + bt² - ct³. The acceleration of the particle at t=0 is:", options: ["A. a", "B. 2b", "C. -6c", "D. b - c"], answer: "B. 2b", explanation: "v(t) = a + 2bt - 3ct². a(t) = 2b - 6ct. At t=0, a(0) = 2b.", neetFrequency: 2 },
        { question: "A train is moving with velocity 20 m/s on a straight track. A boy is running on the train in the opposite direction with a velocity of 5 m/s with respect to the train. His velocity with respect to the ground is:", options: ["A. 15 m/s", "B. 25 m/s", "C. 20 m/s", "D. 5 m/s"], answer: "A. 15 m/s", explanation: "Let the direction of the train be positive. v_train_ground = +20. v_boy_train = -5. v_boy_ground = v_boy_train + v_train_ground = -5 + 20 = 15 m/s.", neetFrequency: 3 },
        { question: "For an object in uniform circular motion, which quantity is constant?", options: ["A. Velocity", "B. Acceleration", "C. Speed", "D. Displacement"], answer: "C. Speed", explanation: "In uniform circular motion, the magnitude of velocity (speed) is constant, but the direction of velocity continuously changes, meaning there is an acceleration.", neetFrequency: 1 }
    ],
    assertionReasons: [
        {
            assertion: "The speed of a body can be negative.",
            reason: "Speed is the magnitude of velocity, and magnitude of a vector is always non-negative.",
            answer: "D",
            explanation: "Assertion is false. Speed, being the magnitude of velocity, is a scalar quantity and can never be negative. The Reason is a true statement."
        },
        {
            assertion: "Displacement of a body may be zero when distance travelled is not zero.",
            reason: "The displacement is the shortest distance between initial and final points.",
            answer: "A",
            explanation: "Assertion is true. For a body returning to its starting point after a round trip, distance is non-zero but displacement is zero. The reason is the correct explanation."
        },
        {
            assertion: "A body having non-zero acceleration can have a constant velocity.",
            reason: "Acceleration is the rate of change of velocity.",
            answer: "D",
            explanation: "Assertion is false. If velocity is constant, its rate of change (acceleration) must be zero. The reason is true."
        },
        {
            assertion: "The v-t graph for a body in uniform motion is a straight line parallel to the time axis.",
            reason: "In uniform motion, the velocity of the body is constant.",
            answer: "A",
            explanation: "Assertion is true. A line parallel to the time axis on a v-t graph represents constant velocity. The reason is the correct explanation for this."
        },
        {
            assertion: "An object can have constant speed but variable velocity.",
            reason: "Speed is a scalar but velocity is a vector quantity.",
            answer: "A",
            explanation: "Assertion is true, as in uniform circular motion. The reason is also true and is the correct explanation. Velocity can change due to a change in direction even if the magnitude (speed) is constant."
        }
    ],
    matchTheColumns: [
         {
            column1: ["(a) Distance", "(b) Displacement", "(c) Speed", "(d) Velocity"],
            column2: ["(p) Can be zero, positive, or negative", "(q) Always non-negative", "(r) Scalar quantity", "(s) Vector quantity"],
            answer: "a-q,r; b-p,s; c-q,r; d-p,s",
            explanation: "Distance and Speed are scalar and always non-negative. Displacement and Velocity are vectors and can be positive, negative, or zero."
        },
        {
            column1: ["(a) Slope of position-time graph", "(b) Slope of velocity-time graph", "(c) Area under velocity-time graph", "(d) Area under acceleration-time graph"],
            column2: ["(p) Acceleration", "(q) Displacement", "(r) Velocity", "(s) Change in velocity"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Slope of x-t is velocity. Slope of v-t is acceleration. Area of v-t is displacement. Area of a-t is change in velocity."
        },
        {
            column1: ["(a) Uniformly accelerated motion", "(b) Uniform motion", "(c) Motion under gravity", "(d) Variable acceleration"],
            column2: ["(p) v = constant", "(q) a = constant (non-zero)", "(r) a = function of time", "(s) a = g"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Uniform motion has constant velocity. Uniformly accelerated motion has constant acceleration. Motion under gravity has acceleration g. Variable acceleration is a function of time or position."
        },
        {
            column1: ["(a) Speed", "(b) Acceleration", "(c) Force", "(d) Work"],
            column2: ["(p) [MLT⁻²]", "(q) [L²T⁻²]", "(r) [LT⁻¹]", "(s) [LT⁻²]"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the physical quantities with their dimensional formulas."
        },
        {
            column1: ["(a) Body thrown up", "(b) Body dropped", "(c) Body at max height", "(d) Reaching start point"],
            column2: ["(p) v = 0", "(q) u = 0", "(r) s = 0", "(s) u > 0"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "A body thrown up has initial velocity > 0. A dropped body has u=0. At max height, v=0. On returning to start point, displacement s=0."
        }
    ]
};

    