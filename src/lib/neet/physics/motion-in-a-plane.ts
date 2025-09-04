
import type { NeetModule } from '@/lib/types';
import { ProjectileAnimation } from '@/components/exam/ProjectileAnimation';

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
    conceptNotes: [
        {
            english: `### 1. Scalars and Vectors (ஸ்கேலர்கள் மற்றும் வெக்டர்கள்)
*   **Scalars:** Quantities with only magnitude. E.g., distance, speed, mass, time. (ஸ்கேலர்கள்: எண்மதிப்பு மட்டுமே கொண்ட அளவுகள். எ.கா., தூரம், வேகம், நிறை, காலம்.)
*   **Vectors:** Quantities with both magnitude and direction. E.g., displacement, velocity, acceleration, force. (வெக்டர்கள்: எண்மதிப்பு மற்றும் திசை இரண்டையும் கொண்ட அளவுகள். எ.கா., இடப்பெயர்ச்சி, திசைவேகம், முடுக்கம், விசை.)
*   **Vector Representation:** A vector $\\vec{A}$ can be written in component form as $\\vec{A} = A_x \\hat{i} + A_y \\hat{j}$, where $A_x$ and $A_y$ are the scalar components and $\\hat{i}, \\hat{j}$ are unit vectors along the x and y axes. (ஒரு வெக்டர் $\\vec{A}$ ஐ கூறு வடிவில் $\\vec{A} = A_x \\hat{i} + A_y \\hat{j}$ என எழுதலாம், இங்கு $A_x$ மற்றும் $A_y$ ஆகியவை ஸ்கேலார் கூறுகள் மற்றும் $\\hat{i}, \\hat{j}$ ஆகியவை x மற்றும் y அச்சுகள் வழியே உள்ள ஓரலகு வெக்டர்கள்.)
*   **Magnitude:** $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2}$ (எண்மதிப்பு)
*   **Direction:** $\\theta = \\tan^{-1}(\\frac{A_y}{A_x})$ (திசை)`
        },
        {
            english: `### 2. Projectile Motion (எறியியக்க இயக்கம்)
Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of gravity. We assume air resistance is negligible. The key is to analyze the horizontal and vertical motions independently. (எறியியக்க இயக்கம் என்பது காற்றில் எறியப்பட்ட ஒரு பொருளின் இயக்கம் ஆகும், இது ஈர்ப்பு முடுக்கத்திற்கு மட்டுமே உட்பட்டது. காற்றுத் தடையை நாம் புறக்கணிக்கிறோம். இதன் முக்கிய அம்சம், கிடைமட்ட மற்றும் செங்குத்து இயக்கங்களை தனித்தனியாக பகுப்பாய்வு செய்வதாகும்.)

| Aspect (அம்சம்) | Horizontal Motion (X-axis) (கிடைமட்ட இயக்கம்) | Vertical Motion (Y-axis) (செங்குத்து இயக்கம்) |
| :--- | :--- | :--- |
| **Acceleration (முடுக்கம்)** | $a_x = 0$ | $a_y = -g$ |
| **Velocity (திசைவேகம்)** | $v_x = u_x = u \\cos\\theta$ (Constant - மாறிலி) | $v_y = u_y - gt = u \\sin\\theta - gt$ |
| **Displacement (இடப்பெயர்ச்சி)**| $x = (u \\cos\\theta) t$ | $y = (u \\sin\\theta) t - \\frac{1}{2}gt^2$ |

{{PROJECTILE_ANIMATION}}`
        },
        {
            english: `#### Key Formulas for Projectile Motion: (எறியியக்கத்திற்கான முக்கிய சூத்திரங்கள்)
*   **Time of Flight (பறக்கும் நேரம்), T:** The total time the projectile is in the air. (எறிபொருள் காற்றில் இருக்கும் மொத்த நேரம்.)
$$ T = \\frac{2u \\sin\\theta}{g} $$
*   **Maximum Height (பெரும உயரம்), H:** The highest point reached by the projectile. (எறிபொருள் அடையும் மிக உயரமான புள்ளி.)
$$ H = \\frac{u^2 \\sin^2\\theta}{2g} $$
*   **Horizontal Range (கிடைத்தள நெடுக்கம்), R:** The total horizontal distance covered. (கடந்த மொத்த கிடைமட்ட தூரம்.)
$$ R = \\frac{u^2 \\sin(2\\theta)}{g} $$
    *Note: The range is maximum when $\\sin(2\\theta) = 1$, which means $2\\theta = 90^\\circ$ or $\\theta = 45^\\circ$.* (குறிப்பு: நெடுக்கம் பெருமமாக இருக்க $\\sin(2\\theta) = 1$ ஆக இருக்க வேண்டும், அதாவது $2\\theta = 90^\\circ$ அல்லது $\\theta = 45^\\circ$.)`
        },
        {
            english: `### 3. Uniform Circular Motion (சீரான வட்ட இயக்கம்)
This is the motion of an object traveling at a constant *speed* along a circular path. Even though the speed is constant, the *velocity* is continuously changing because its direction is changing. This change in velocity means there must be an acceleration. (இது ஒரு வட்டப் பாதையில் நிலையான *வேகத்தில்* பயணிக்கும் ஒரு பொருளின் இயக்கம் ஆகும். வேகம் நிலையானதாக இருந்தாலும், *திசைவேகம்* அதன் திசை தொடர்ந்து மாறுவதால் மாறிக்கொண்டே இருக்கிறது. இந்த திசைவேக மாற்றம் ஒரு முடுக்கம் இருக்க வேண்டும் என்பதைக் குறிக்கிறது.)
*   **Centripetal Acceleration (மையநோக்கு முடுக்கம்), $a_c$:** This acceleration is always directed towards the center of the circle. Its magnitude is given by: (இந்த முடுக்கம் எப்போதும் வட்டத்தின் மையத்தை நோக்கியே இயக்கப்படுகிறது. அதன் எண்மதிப்பு:)
$$ a_c = \\frac{v^2}{r} = \\omega^2 r $$
    where $v$ is the linear speed, $r$ is the radius of the circle, and $\\omega$ is the angular velocity. (இங்கு $v$ என்பது நேர்கோட்டு வேகம், $r$ என்பது வட்டத்தின் ஆரம், மற்றும் $\\omega$ என்பது கோண திசைவேகம்.)
*   **Centripetal Force (மையநோக்கு விசை), $F_c$:** According to Newton's second law, this acceleration must be caused by a net force, also directed towards the center. (நியூட்டனின் இரண்டாம் விதிப்படி, இந்த முடுக்கம் ஒரு நிகர விசையால் ஏற்பட வேண்டும், அதுவும் மையத்தை நோக்கியே இயக்கப்படும்.)
$$ F_c = ma_c = \\frac{mv^2}{r} $$
    *This is not a new kind of force. It is simply the net force (e.g., tension, gravity, friction) that is causing the circular motion.* (இது ஒரு புதிய வகை விசை அல்ல. இது வட்ட இயக்கத்தை ஏற்படுத்தும் நிகர விசை (எ.கா., இழுவிசை, ஈர்ப்பு, உராய்வு) ஆகும்.)`
        },
        {
            english: `### 4. Relative Velocity in Two Dimensions (இரு பரிமாணங்களில் சார்பு திசைவேகம்)
The velocity of object A relative to object B is given by: (பொருள் B ஐப் பொறுத்து பொருள் A இன் திசைவேகம்:)
$$
\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B
$$
This is a vector subtraction. It's often easier to think of it as adding the negative of $\\vec{v}_B$ to $\\vec{v}_A$: $\\vec{v}_{AB} = \\vec{v}_A + (-\\vec{v}_B)$. (இது ஒரு வெக்டர் கழித்தல் ஆகும். இதை $\\vec{v}_A$ உடன் $\\vec{v}_B$ இன் எதிர்மறையை கூட்டுவதாக நினைப்பது பெரும்பாலும் எளிதானது: $\\vec{v}_{AB} = \\vec{v}_A + (-\\vec{v}_B)$.)
*   **Rain-Man Problems:** To a person running, rain that is falling vertically appears to fall at an angle. The velocity of the rain relative to the man is $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$. (ஓடும் ஒருவருக்கு, செங்குத்தாக விழும் மழை ஒரு கோணத்தில் விழுவது போல் தோன்றும். மனிதனைப் பொறுத்து மழையின் திசைவேகம் $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$ ஆகும்.)
*   **Boat-River Problems:** To cross a river, a boat's velocity with respect to the ground is the vector sum of its velocity with respect to the water and the velocity of the water with respect to the ground. (ஒரு ஆற்றைக் கடக்க, தரையைப் பொறுத்து ஒரு படகின் திசைவேகம், நீரைப் பொறுத்து அதன் திசைவேகம் மற்றும் தரையைப் பொறுத்து நீரின் திசைவேகத்தின் வெக்டர் கூடுதலாகும்.)`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Projectile Motion",
            titleTamil: "நீட் நிலை: எறியியக்க இயக்கம்",
            difficulty: 'Medium',
            problem: "A cricket ball is thrown at a speed of 28 m/s in a direction 30° above the horizontal. Calculate (a) the maximum height, (b) the time taken by the ball to return to the same level, and (c) the horizontal distance from the thrower to the point where the ball returns to the same level. (g = 9.8 m/s²)",
            problemTamil: "ஒரு கிரிக்கெட் பந்து 28 மீ/வி வேகத்தில் கிடைத்தளத்திற்கு 30° கோணத்தில் மேல்நோக்கி எறியப்படுகிறது. (a) பெரும உயரம், (b) பந்து அதே நிலைக்குத் திரும்ப எடுத்துக்கொள்ளும் நேரம், மற்றும் (c) கிடைத்தள நெடுக்கம் ஆகியவற்றைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the initial velocity (u) and the angle of projection (θ).",
                    explanationTamil: "தொடக்க திசைவேகம் (u) மற்றும் எறிகோணம் (θ) ஆகியவற்றைக் கண்டறியவும்.",
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
            titleTamil: "ஜே.இ.இ நிலை: ஆற்றில் சார்பு திசைவேகம்",
            difficulty: 'Hard',
            problem: "A man can swim with a speed of 4 km/h in still water. How long does he take to cross a river 1 km wide if the river flows steadily at 3 km/h and he makes his strokes normal to the river current? How far down the river does he go when he reaches the other bank?",
            problemTamil: "ஒரு மனிதன் ساکن நீரில் 4 கிமீ/ம வேகத்தில் நீந்த முடியும். 3 கிமீ/ம வேகத்தில் ஓடும் 1 கிமீ அகலமுள்ள ஆற்றை அவர் நீரோட்டத்திற்கு செங்குத்தாக நீந்தினால், ஆற்றைக் கடக்க எவ்வளவு நேரம் ஆகும்? அவர் மறுகரையை அடையும்போது, நீரோட்டத்தின் திசையில் எவ்வளவு தூரம் சென்றிருப்பார்?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Define the velocities. Velocity of man w.r.t water, $\\vec{v}_{mw} = 4\\hat{j}$ km/h. Velocity of water w.r.t ground, $\\vec{v}_{wg} = 3\\hat{i}$ km/h.",
                    explanationTamil: "திசைவேகங்களை வரையறுக்கவும். நீரைப் பொறுத்து மனிதனின் திசைவேகம், $\\vec{v}_{mw} = 4\\hat{j}$ கிமீ/ம. தரையைப் பொறுத்து நீரின் திசைவேகம், $\\vec{v}_{wg} = 3\\hat{i}$ கிமீ/ம."
                },
                {
                    step: 2,
                    explanation: "Find the velocity of the man w.r.t ground, $\\vec{v}_{mg} = \\vec{v}_{mw} + \\vec{v}_{wg}$.",
                    explanationTamil: "தரையைப் பொறுத்து மனிதனின் திசைவேகத்தைக் கண்டறியவும், $\\vec{v}_{mg} = \\vec{v}_{mw} + \\vec{v}_{wg}$.",
                    calculation: "\\vec{v}_{mg} = 3\\hat{i} + 4\\hat{j}"
                },
                {
                    step: 3,
                    explanation: "Calculate the time to cross the river. The time is determined by the component of velocity perpendicular to the river flow (the y-component). River width = 1 km.",
                    explanationTamil: "ஆற்றைக் கடக்கும் நேரத்தைக் கணக்கிடவும். நேரம் நீரோட்டத்திற்கு செங்குத்தான திசைவேகத்தின் கூறை (y-கூறு) சார்ந்தது. ஆற்றின் அகலம் = 1 கிமீ.",
                    calculation: "Time = \\frac{Width}{v_y} = \\frac{1 \\text{ km}}{4 \\text{ km/h}} = 0.25 \\text{ hours} = 15 \\text{ minutes}"
                },
                {
                    step: 4,
                    explanation: "Calculate the horizontal drift. The drift is caused by the component of velocity parallel to the river flow (the x-component) acting for the calculated time.",
                    explanationTamil: "கிடைமட்ட நகர்வைக் கணக்கிடவும். நகர்வு, கணக்கிடப்பட்ட நேரத்திற்கு நீரோட்டத்திற்கு இணையான திசைவேகத்தின் கூறால் (x-கூறு) ஏற்படுகிறது.",
                    calculation: "Drift = v_x \\times \\text{Time} = 3 \\text{ km/h} \\times 0.25 \\text{ h} = 0.75 \\text{ km} = 750 m"
                }
            ],
            neetHack: "In river-boat problems, the time to cross the river depends *only* on the component of velocity perpendicular to the flow. The river's current only affects the downstream drift, not the crossing time.",
            neetHackTamil: "ஆறு-படகு கணக்குகளில், ஆற்றைக் கடக்கும் நேரம் நீரோட்டத்திற்கு செங்குத்தான திசைவேகத்தின் கூறை *மட்டுமே* சார்ந்தது. ஆற்றின் நீரோட்டம், கீழ்நோக்கிய நகர்வை மட்டுமே பாதிக்கிறது, கடக்கும் நேரத்தை அல்ல."
        },
        {
            title: "NEET Level: Uniform Circular Motion",
            titleTamil: "நீட் நிலை: சீரான வட்ட இயக்கம்",
            difficulty: "Easy",
            problem: "An insect trapped in a circular groove of radius 12 cm moves along the groove steadily and completes 7 revolutions in 100 s. What is the angular speed, and the linear speed of the motion? Is the acceleration vector a constant vector? What is its magnitude?",
            problemTamil: "12 செ.மீ ஆரம் கொண்ட ஒரு வட்டப் பள்ளத்தில் சிக்கிக்கொண்ட ஒரு பூச்சி, அந்தப் பள்ளத்தின் வழியே சீராக நகர்ந்து 100 வினாடிகளில் 7 சுழற்சிகளை நிறைவு செய்கிறது. அதன் கோண வேகம், மற்றும் நேர்கோட்டு வேகம் என்ன? முடுக்க வெக்டர் ஒரு மாறிலி வெக்டரா? அதன் எண்மதிப்பு என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the angular speed (ω). It is the total angle turned divided by the total time. One revolution is 2π radians.",
                    explanationTamil: "கோண வேகத்தை (ω) கணக்கிடவும். இது சுழன்ற மொத்த கோணத்தை மொத்த நேரத்தால் வகுப்பதாகும். ஒரு சுழற்சி 2π ரேடியன்கள் ஆகும்.",
                    calculation: "\\omega = \\frac{2\\pi \\times 7}{100} \\approx 0.44 \\text{ rad/s}"
                },
                {
                    step: 2,
                    explanation: "Calculate the linear speed (v) using the relation v = ωr. Ensure radius is in meters.",
                    explanationTamil: "v = ωr என்ற தொடர்பைப் பயன்படுத்தி நேர்கோட்டு வேகத்தைக் (v) கணக்கிடவும். ஆரம் மீட்டரில் உள்ளதா என்பதை உறுதிப்படுத்தவும்.",
                    calculation: "r = 12 cm = 0.12 m \\\\ v = 0.44 \\times 0.12 \\approx 0.053 \\text{ m/s}"
                },
                {
                    step: 3,
                    explanation: "Analyze the acceleration vector. In uniform circular motion, the direction of the acceleration vector is always towards the center. As the insect moves, this direction continuously changes. Therefore, the acceleration vector is not a constant vector.",
                    explanationTamil: "முடுக்க வெக்டரை பகுப்பாய்வு செய்யவும். சீரான வட்ட இயக்கத்தில், முடுக்க வெக்டரின் திசை எப்போதும் மையத்தை நோக்கியே இருக்கும். பூச்சி நகரும்போது, இந்த திசை தொடர்ந்து மாறுகிறது. எனவே, முடுக்க வெக்டர் ஒரு மாறிலி வெக்டர் அல்ல."
                },
                {
                    step: 4,
                    explanation: "Calculate the magnitude of the centripetal acceleration, a_c = ω²r.",
                    explanationTamil: "மையநோக்கு முடுக்கத்தின் எண்மதிப்பைக் கணக்கிடவும், a_c = ω²r.",
                    calculation: "a_c = (0.44)² \\times 0.12 \\approx 0.1936 \\times 0.12 \\approx 0.023 \\text{ m/s²}"
                }
            ],
            commonPitfall: "Confusing constant speed with constant velocity. In uniform circular motion, speed is constant, but velocity is not, because its direction is always changing. A change in velocity implies acceleration.",
            neetHackTamil: "சீரான வேகம் என்பதை சீரான திசைவேகம் என்று குழப்பிக் கொள்ளுதல். சீரான வட்ட இயக்கத்தில், வேகம் மாறிலி, ஆனால் திசைவேகத்தின் திசை எப்போதும் மாறுவதால், திசைவேகம் மாறிலி அல்ல. திசைவேகத்தில் ஏற்படும் மாற்றம் முடுக்கத்தைக் குறிக்கிறது."
        },
        {
            title: "JEE Level: Horizontal Projection",
            titleTamil: "ஜே.இ.இ நிலை: கிடைத்தள எறியம்",
            difficulty: "Medium",
            problem: "A stone is thrown from the top of a tower of height 50 m with a velocity of 20 m/s horizontally. Find the time taken to reach the ground, and the horizontal distance from the foot of the tower where it strikes the ground. (g=10 m/s²)",
            problemTamil: "50 மீ உயரமுள்ள ஒரு கோபுரத்தின் உச்சியிலிருந்து ஒரு கல் 20 மீ/வி திசைவேகத்துடன் கிடைத்தளமாக எறியப்படுகிறது. அது தரையை அடைய எடுத்துக்கொள்ளும் நேரம், மற்றும் கோபுரத்தின் அடியிலிருந்து அது தரையில் விழும் இடத்தின் கிடைத்தள தூரம் ஆகியவற்றைக் கண்டறியவும். (g=10 m/s²)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the vertical and horizontal motions separately. For vertical motion, the initial velocity is u_y = 0. The displacement is s_y = -50 m (downwards).",
                    explanationTamil: "செங்குத்து மற்றும் கிடைமட்ட இயக்கங்களை தனித்தனியாக பகுப்பாய்வு செய்யவும். செங்குத்து இயக்கத்திற்கு, ஆரம்ப திசைவேகம் u_y = 0. இடப்பெயர்ச்சி s_y = -50 மீ (கீழ்நோக்கி)."
                },
                {
                    step: 2,
                    explanation: "Use the vertical position-time relation s_y = u_y*t + (1/2)a_y*t² to find the time of flight.",
                    explanationTamil: "பறக்கும் நேரத்தைக் கண்டுபிடிக்க செங்குத்து நிலை-கால தொடர்பை s_y = u_y*t + (1/2)a_y*t² பயன்படுத்தவும்.",
                    calculation: "-50 = (0)t + \\frac{1}{2}(-10)t² \\implies -50 = -5t² \\implies t² = 10 \\implies t = \\sqrt{10} \\approx 3.16 \\text{ s}"
                },
                {
                    step: 3,
                    explanation: "Use the horizontal motion to find the range. Horizontal velocity is constant, u_x = 20 m/s.",
                    explanationTamil: "நெடுக்கத்தைக் கண்டுபிடிக்க கிடைமட்ட இயக்கத்தைப் பயன்படுத்தவும். கிடைமட்ட திசைவேகம் மாறிலி, u_x = 20 மீ/வி.",
                    calculation: "Range = u_x \\times t = 20 \\times \\sqrt{10} \\approx 20 \\times 3.16 = 63.2 \\text{ m}"
                }
            ],
            neetHack: "For horizontal projections, the time of flight depends *only* on the height of the tower and is the same as if the object were simply dropped from that height (t = √(2h/g)).",
            neetHackTamil: "கிடைத்தள எறியங்களுக்கு, பறக்கும் நேரம் கோபுரத்தின் உயரத்தை *மட்டுமே* சார்ந்தது மற்றும் அந்த உயரத்திலிருந்து ஒரு பொருளை சாதாரணமாக கீழே போட்டால் ஆகும் நேரத்திற்கு சமம் (t = √(2h/g))."
        },
        {
            title: "NEET Level: Vector Addition",
            titleTamil: "நீட் நிலை: வெக்டர் கூட்டல்",
            difficulty: "Easy",
            problem: "Two forces of magnitudes 3 N and 4 N are acting on a body. The angle between the forces is 90°. Find the magnitude of the resultant force.",
            problemTamil: "3 N மற்றும் 4 N எண்மதிப்புள்ள இரண்டு விசைகள் ஒரு பொருளின் மீது செயல்படுகின்றன. விசைகளுக்கு இடையேயான கோணம் 90°. விளைவு விசையின் எண்மதிப்பைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Use the formula for the magnitude of the resultant of two vectors A and B: R = √(A² + B² + 2ABcosθ).",
                    explanationTamil: "இரண்டு வெக்டர்கள் A மற்றும் B இன் விளைவின் எண்மதிப்பிற்கான சூத்திரத்தைப் பயன்படுத்தவும்: R = √(A² + B² + 2ABcosθ)."
                },
                {
                    step: 2,
                    explanation: "Substitute the given values: A = 3 N, B = 4 N, and θ = 90°.",
                    explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளைப் பிரதியிடவும்: A = 3 N, B = 4 N, மற்றும் θ = 90°.",
                    calculation: "R = \\sqrt{3² + 4² + 2(3)(4)\\cos(90^\\circ)}"
                },
                {
                    step: 3,
                    explanation: "Since cos(90°) = 0, the third term becomes zero. This is a Pythagorean triple.",
                    explanationTamil: "cos(90°) = 0 என்பதால், மூன்றாவது உறுப்பு சுழியாகிறது. இது ஒரு பித்தகோரியன் மும்மை ஆகும்.",
                    calculation: "R = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5 \\text{ N}"
                }
            ],
            neetHack: "Recognize Pythagorean triples like (3, 4, 5), (5, 12, 13) etc. When two vectors are perpendicular, the resultant is simply the hypotenuse, which can often be found without calculation.",
            neetHackTamil: "(3, 4, 5), (5, 12, 13) போன்ற பித்தகோரியன் மும்மைகளை அடையாளம் காணவும். இரண்டு வெக்டர்கள் செங்குத்தாக இருக்கும்போது, விளைவு என்பது கர்ணம் ஆகும், இதை பெரும்பாலும் கணக்கீடு இல்லாமல் காணலாம்."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'T = \\frac{2u \\sin\\theta}{g}',
                description: 'Time of Flight for a Projectile (எறியியக்கத்திற்கான பறக்கும் நேரம்)'
            },
            {
                formula: 'R = \\frac{u^2 \\sin(2\\theta)}{g}',
                description: 'Horizontal Range of a Projectile (எறியியக்கத்தின் கிடைத்தள நெடுக்கம்)'
            },
            {
                formula: 'a_c = \\frac{v^2}{r}',
                description: 'Centripetal Acceleration (மையநோக்கு முடுக்கம்)'
            },
            {
                formula: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B',
                description: 'Relative Velocity (சார்பு திசைவேகம்)'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "2D motion is two independent 1D motions.",
        "In projectile motion, horizontal velocity is constant, while vertical velocity changes due to gravity.",
        "An object in uniform circular motion has a constant speed but is always accelerating towards the center.",
        "Relative velocity problems are solved by vector subtraction."
    ],
    mnemonics: [
        { text: "For projectiles, the 'Range' is Max at a 45-degree 'angle', like a perfectly thrown javelin.", tamil: "எறியியலில், நெடுக்கம் 45-டிகிரி கோணத்தில் பெருமமாக இருக்கும், சரியாக எறியப்பட்ட ஈட்டி போல." }
    ],
    neetTips: [
        { text: "Projectile range is the same for angles θ and (90°-θ). If a question mentions this, you don't need to calculate.", tamil: "θ மற்றும் (90°-θ) கோணங்களுக்கு எறியியக்க நெடுக்கம் சமம். கேள்வியில் இதைக் குறிப்பிட்டால், கணக்கிடத் தேவையில்லை." },
        { text: "In river-boat problems, the time to cross is always `width / velocity_perpendicular_to_flow`.", tamil: "ஆறு-படகு கணக்குகளில், ஆற்றைக் கடக்கும் நேரம் எப்போதும் `அகலம் / நீரோட்டத்திற்கு செங்குத்தான திசைவேகம்`." }
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
        },
        {
            question: "At the highest point of its trajectory, a projectile has:",
            options: ["A. Only vertical velocity", "B. Only horizontal velocity", "C. Both horizontal and vertical velocity", "D. No velocity"],
            answer: "B. Only horizontal velocity",
            explanation: "At the peak, the vertical component of velocity is momentarily zero, but the horizontal component remains constant throughout the flight.",
            neetFrequency: 4
        },
        {
            question: "A man projects a stone with a velocity u at an angle θ with the horizontal. The range is maximum when θ is:",
            options: ["A. 30°", "B. 45°", "C. 60°", "D. 90°"],
            answer: "B. 45°",
            explanation: "The range formula is R = (u² sin(2θ))/g. The sine function has a maximum value of 1 when its argument is 90°. So, 2θ = 90°, which gives θ = 45°.",
            neetFrequency: 5
        },
        {
            question: "Two projectiles are fired from the same point with the same speed at angles 30° and 60° with the horizontal. Their horizontal ranges will be in the ratio:",
            options: ["A. 1:1", "B. 1:√3", "C. √3:1", "D. 1:2"],
            answer: "A. 1:1",
            explanation: "The horizontal range is the same for complementary angles of projection (θ and 90°-θ). Since 30° and 60° are complementary, their ranges are equal.",
            neetFrequency: 3
        },
        {
            question: "A boat is sent across a river with a velocity of 8 km/h. If the resultant velocity of the boat is 10 km/h, then the velocity of the river flow is:",
            options: ["A. 12.8 km/h", "B. 6 km/h", "C. 8 km/h", "D. 10 km/h"],
            answer: "B. 6 km/h",
            explanation: "The boat's velocity and river's velocity are perpendicular. The resultant is the hypotenuse. So, v_resultant² = v_boat² + v_river². 10² = 8² + v_river². 100 = 64 + v_river². v_river² = 36. So, v_river = 6 km/h.",
            neetFrequency: 4
        },
        {
            question: "The centripetal acceleration is given by:",
            options: ["A. v/r", "B. v²r", "C. vr", "D. v²/r"],
            answer: "D. v²/r",
            explanation: "This is the definition of centripetal acceleration in terms of linear speed v and radius r.",
            neetFrequency: 2
        },
        {
            question: "A car is moving in a circular path of radius 50 m with a speed of 10 m/s. Its centripetal acceleration is:",
            options: ["A. 2 m/s²", "B. 5 m/s²", "C. 10 m/s²", "D. 20 m/s²"],
            answer: "A. 2 m/s²",
            explanation: "a_c = v²/r = (10)²/50 = 100/50 = 2 m/s².",
            neetFrequency: 3
        },
        {
            question: "If a vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$, its magnitude is:",
            options: ["A. 3", "B. 4", "C. 5", "D. 7"],
            answer: "C. 5",
            explanation: "Magnitude = √(3² + 4²) = √(9 + 16) = √25 = 5.",
            neetFrequency: 1
        },
        {
            question: "The dot product of two perpendicular vectors is:",
            options: ["A. 0", "B. 1", "C. -1", "D. Equal to their product"],
            answer: "A. 0",
            explanation: "A · B = |A||B|cosθ. If they are perpendicular, θ = 90° and cos(90°) = 0, so the dot product is zero.",
            neetFrequency: 2
        },
        {
            question: "A person walking on a road in the rain holds their umbrella:",
            options: ["A. Vertically", "B. Tilted in the direction of motion", "C. Tilted opposite to the direction of motion", "D. Horizontally"],
            answer: "B. Tilted in the direction of motion",
            explanation: "The rain appears to come from an angle in front of the person due to relative velocity. To block it, the umbrella must be tilted forward.",
            neetFrequency: 3
        },
        {
            question: "The trajectory of a projectile is a:",
            options: ["A. Straight line", "B. Circle", "C. Parabola", "D. Hyperbola"],
            answer: "C. Parabola",
            explanation: "The equation for the path of a projectile, y(x), is a quadratic equation, which represents a parabola.",
            neetFrequency: 4
        },
        {
            question: "In uniform circular motion, which of the following is constant?",
            options: ["A. Velocity", "B. Acceleration", "C. Momentum", "D. Kinetic Energy"],
            answer: "D. Kinetic Energy",
            explanation: "Kinetic energy (1/2)mv² is a scalar and depends on speed (v), which is constant. Velocity, acceleration, and momentum are vectors and their directions are continuously changing.",
            neetFrequency: 4
        },
        {
            question: "The time of flight of a projectile is maximum when the angle of projection is:",
            options: ["A. 30°", "B. 45°", "C. 60°", "D. 90°"],
            answer: "D. 90°",
            explanation: "T = (2u sinθ)/g. The sine function is maximum (1) when θ = 90°. This corresponds to throwing the object straight up.",
            neetFrequency: 3
        },
        {
            question: "A unit vector is one which has:",
            options: ["A. Magnitude of 1", "B. Magnitude of 0", "C. No direction", "D. Magnitude of √2"],
            answer: "A. Magnitude of 1",
            explanation: "A unit vector has a magnitude of one and is used to specify a direction.",
            neetFrequency: 1
        },
        { question: "If the resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$, then:", options: ["A. |B| = |A|", "B. |B| = |A|tanθ", "C. |A+B| = |B|", "D. The angle between A and B is obtuse"], answer: "D. The angle between A and B is obtuse", explanation: "If R is perpendicular to A, then R.A = 0. (A+B).A = 0 => A.A + B.A = 0 => A² + ABcosθ = 0. Since A and B are positive, cosθ must be negative, meaning θ is obtuse.", neetFrequency: 2 },
        { question: "For an object thrown horizontally from a height h, the time of flight depends on:", options: ["A. Initial velocity only", "B. Height h only", "C. Both initial velocity and height", "D. Mass of the object"], answer: "B. Height h only", explanation: "The vertical motion determines the time, and it's equivalent to an object dropped from rest. t = √(2h/g).", neetFrequency: 3 },
        { question: "The angular speed of the second hand of a clock is:", options: ["A. π/30 rad/s", "B. π rad/s", "C. 2π rad/s", "D. 60 rad/s"], answer: "A. π/30 rad/s", explanation: "The second hand completes one revolution (2π radians) in 60 seconds. So, ω = 2π/60 = π/30 rad/s.", neetFrequency: 4 },
        { question: "A particle moves from (1,2) to (3,4). Its displacement vector is:", options: ["A. 2i + 2j", "B. 3i + 4j", "C. i + 2j", "D. 4i + 6j"], answer: "A. 2i + 2j", explanation: "Δr = r_final - r_initial = (3i+4j) - (i+2j) = 2i + 2j.", neetFrequency: 1 },
        { question: "What is the angle between $\\vec{A} = \\hat{i} + \\hat{j}$ and $\\vec{B} = \\hat{i} - \\hat{j}$?", options: ["A. 0°", "B. 45°", "C. 90°", "D. 180°"], answer: "C. 90°", explanation: "A · B = (1)(1) + (1)(-1) = 1 - 1 = 0. Since the dot product is zero, the vectors are perpendicular.", neetFrequency: 3 },
        { question: "The maximum height reached by a projectile is 1/4th of its range. The angle of projection is:", options: ["A. 30°", "B. 45°", "C. 60°", "D. 75°"], answer: "B. 45°", explanation: "H = u²sin²θ/2g. R = u²sin(2θ)/g. Given H=R/4. u²sin²θ/2g = (1/4)u²sin(2θ)/g. sin²θ/2 = sin(2θ)/4 = 2sinθcosθ/4. sinθ/2 = cosθ/2. tanθ = 1. θ = 45°.", neetFrequency: 4 },
        { question: "The cross product of two parallel vectors is:", options: ["A. A null vector", "B. A unit vector", "C. A scalar", "D. Their product"], answer: "A. A null vector", explanation: "|A x B| = |A||B|sinθ. For parallel vectors, θ=0°, so sinθ=0, making the cross product a null (zero) vector.", neetFrequency: 2 },
        { question: "A body is projected with speed u at an angle θ. The kinetic energy at the highest point is:", options: ["A. (1/2)mu²", "B. 0", "C. (1/2)mu²cos²θ", "D. (1/2)mu²sin²θ"], answer: "C. (1/2)mu²cos²θ", explanation: "At the highest point, only the horizontal component of velocity (u cosθ) exists. So K.E = (1/2)m(u cosθ)².", neetFrequency: 3 },
        { question: "Which law is used to find the direction of the resultant of two vectors?", options: ["A. Parallelogram law", "B. Newton's law", "C. Ohm's law", "D. Hooke's law"], answer: "A. Parallelogram law", explanation: "The parallelogram law of vector addition is used to find both the magnitude and direction of the resultant of two vectors.", neetFrequency: 1 },
        { question: "The velocity of a projectile at its maximum height is:", options: ["A. u", "B. u cosθ", "C. u sinθ", "D. 0"], answer: "B. u cosθ", explanation: "The vertical component of velocity is zero at the maximum height, but the horizontal component remains u cosθ.", neetFrequency: 4 }
    ],
    assertionReasons: [
        {
            assertion: "A vector quantity is a quantity that has both magnitude and direction and obeys the triangle law of addition.",
            reason: "Not all quantities that have magnitude and direction are vectors. For example, electric current.",
            answer: "B",
            explanation: "Both assertion and reason are true statements. The reason correctly points out that obeying vector laws of addition is a necessary condition for a quantity to be a vector, but it is not the explanation for why a vector has magnitude and direction."
        },
        {
            assertion: "The range of a projectile is the same for angles of projection θ and (90°-θ).",
            reason: "The range is maximum when the angle of projection is 45°.",
            answer: "B",
            explanation: "Both assertion and reason are true statements about projectile motion. However, the reason (range being max at 45°) does not explain why the range is the same for complementary angles. The actual explanation lies in the fact that sin(2θ) = sin(2(90-θ)) = sin(180-2θ).",
            neetFrequency: 3
        },
        {
            assertion: "The acceleration of an object in uniform circular motion is always directed towards the center.",
            reason: "The velocity vector of the object is always tangent to the circular path.",
            answer: "B",
            explanation: "Both are true statements about uniform circular motion. However, the fact that velocity is tangential doesn't, by itself, explain why acceleration is radial. The explanation is that the change in the velocity vector (Δv) over a small time interval points towards the center.",
            neetFrequency: 4
        },
        {
            assertion: "The dot product of two vectors can be negative.",
            reason: "The dot product depends on the cosine of the angle between the vectors.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. Since A·B = |A||B|cosθ, if the angle θ is obtuse (between 90° and 180°), cosθ is negative, making the dot product negative.",
            neetFrequency: 2
        },
        {
            assertion: "A body cannot be accelerated if its speed is constant.",
            reason: "Acceleration is the rate of change of velocity.",
            answer: "D",
            explanation: "The assertion is false. An object in uniform circular motion has constant speed but is constantly accelerating. The reason is a true statement.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Projectile motion", "(b) Uniform circular motion", "(c) Vector addition", "(d) Scalar product"],
            column2: ["(p) Centripetal acceleration", "(q) Parabolic path", "(r) Work done", "(s) Parallelogram law"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Projectile motion follows a parabolic path. Uniform circular motion involves centripetal acceleration. Vector addition can be done using the parallelogram law. Work done is calculated using the scalar (dot) product of force and displacement."
        },
        {
            column1: ["(a) Range", "(b) Maximum Height", "(c) Time of Flight", "(d) Centripetal Acceleration"],
            column2: ["(p) u²sin²θ/2g", "(q) 2usinθ/g", "(r) v²/r", "(s) u²sin(2θ)/g"],
            answer: "a-s, b-p, c-q, d-r",
            explanation: "Matching the physical quantities with their standard formulas.",
            neetFrequency: 5
        },
        {
            column1: ["(a) `$\\hat{i} \\cdot \\hat{i}$`", "(b) `$\\hat{i} \\cdot \\hat{j}$`", "(c) `$\\hat{i} \\times \\hat{i}$`", "(d) `$\\hat{i} \\times \\hat{j}$`"],
            column2: ["(p) 0", "(q) 1", "(r) `$\\hat{k}$`", "(s) Null Vector `$\\vec{0}$`"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Dot product of parallel unit vectors is 1. Dot product of perpendicular unit vectors is 0. Cross product of parallel vectors is a null vector. Cross product of i and j gives k.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Relative velocity in same direction", "(b) Relative velocity in opposite direction", "(c) Crossing a river in shortest time", "(d) Crossing a river in shortest path"],
            column2: ["(p) `v_A + v_B`", "(q) `v_A - v_B`", "(r) Swim perpendicular to flow", "(s) Swim upstream at an angle"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Relative velocity subtracts for same direction and adds for opposite. Shortest time is achieved by maximizing perpendicular velocity. Shortest path requires canceling the river's drift by swimming upstream.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Constant Velocity", "(b) Constant Acceleration", "(c) Variable Acceleration", "(d) Constant Speed"],
            column2: ["(p) Projectile motion", "(q) Uniform circular motion", "(r) Car moving on a straight road at 60 km/h", "(s) Car accelerating on a straight road"],
            answer: "a-r, b-s,p; c-none; d-q",
            explanation: "A car at 60km/h on a straight road has constant velocity. A car accelerating on a straight road and a projectile have constant acceleration. Uniform circular motion has constant speed but variable velocity/acceleration. None of the examples have variable acceleration in this simple context.",
            neetFrequency: 2
        }
    ]
};
