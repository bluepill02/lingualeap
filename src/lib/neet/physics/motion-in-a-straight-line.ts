
import type { NeetModule } from '@/lib/types';
import { KinematicsGraphAnimation } from '@/components/exam/KinematicsGraphAnimation';

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
    tamilConnection: "வேகம் (Speed), முடுக்கம் (acceleration), இடப்பெயர்ச்சி (displacement) - இந்த வார்த்தைகளை நாம் தினமும் பயன்படுத்தினாலும், அதன் இயற்பியல் அர்த்தம் ஆழமானது. ஒரு பேருந்து நிலையத்திலிருந்து புறப்படுவது முதல், மேலே எறிந்த கல் கீழே வருவது வரை அனைத்தையும் இந்த நேர்கோட்டு இயக்க விதிகள் விளக்குகின்றன. இந்த அடிப்படைகளைப் புரிந்துகொள்வது, சிக்கலான இயக்கங்களையும் எளிதாகப் பகுப்பாய்வு செய்ய உதவும்.",
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
    conceptNotes: [
        {
            english: `### 1. Describing Motion: Position, Path Length, and Displacement (இயக்கத்தை விவரித்தல்: நிலை, பாதை நீளம் மற்றும் இடப்பெயர்ச்சி)
*   **Frame of Reference (குறிப்பாயம்):** A coordinate system (like x, y, z axes) with a clock, with respect to which we describe the motion of an object.
*   **Path Length (பாதை நீளம்):** The total length of the actual path traversed by an object. It is a scalar quantity (ஸ்கேலார் அளவு) and is always positive.
*   **Displacement (இடப்பெயர்ச்சி):** The shortest straight-line distance between the initial and final positions of an object. It is a vector quantity (வெக்டர் அளவு) and can be positive, negative, or zero.
$$
\\Delta x = x_f - x_i
$$
    Example: If you walk 5m East and then 3m West, your path length is 8m, but your displacement is 2m East.`
        },
        {
            english: `### 2. Velocity and Speed (திசைவேகம் மற்றும் வேகம்)
*   **Average Velocity (சராசரி திசைவேகம்):** The ratio of total displacement to the total time interval.
$$
\\bar{v} = \\frac{\\text{Total Displacement}}{\\text{Total Time}} = \\frac{\\Delta x}{\\Delta t}
$$
*   **Average Speed (சராசரி வேகம்):** The ratio of total path length to the total time interval.
$$
\\text{Average Speed} = \\frac{\\text{Total Path Length}}{\\text{Total Time}}
$$
    *Note: Average speed is generally greater than or equal to the magnitude of average velocity.*
*   **Instantaneous Velocity (உடனடி திசைவேகம்):** The velocity of an object at a particular instant of time. It is the derivative of position with respect to time.
$$
v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}
$$
*   **Instantaneous Speed:** The magnitude of the instantaneous velocity.`
        },
        {
            english: `### 3. Acceleration (முடுக்கம்)
*   **Acceleration (முடுக்கம்):** The rate of change of velocity with respect to time. It is a vector quantity.
*   **Average Acceleration (சராசரி முடுக்கம்):**
$$
\\bar{a} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}
$$
*   **Instantaneous Acceleration (உடனடி முடுக்கம்):**
$$
a = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t} = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}
$$

{{KINEMATICS_GRAPH_ANIMATION}}`
        },
        {
            english: `### 4. Kinematic Equations for Uniformly Accelerated Motion (சீரான முடுக்கத்துடன் கூடிய இயக்கத்திற்கான இயக்கச் சமன்பாடுகள்)
These three equations are the cornerstone of kinematics and are valid *only* when the acceleration 'a' is constant.
1.  **Velocity-Time Relation:** $v = u + at$
2.  **Position-Time Relation:** $s = ut + \\frac{1}{2}at^2$
3.  **Position-Velocity Relation:** $v^2 = u^2 + 2as$

Where:
*   u = initial velocity (தொடக்க திசைவேகம்)
*   v = final velocity (இறுதி திசைவேகம்)
*   a = constant acceleration (சீரான முடுக்கம்)
*   s = displacement (இடப்பெயர்ச்சி)
*   t = time interval (கால இடைவெளி)

A fourth useful equation can be derived for displacement in the *n*th second:
$$
s_n = u + \\frac{a}{2}(2n - 1)
$$`
        },
        {
            english: `### 5. Motion Under Gravity (ஈர்ப்பின் கீழ் இயக்கம்)
This is a special case of uniformly accelerated motion where the acceleration is due to gravity, *g* (approximately 9.8 m/s²).
*   **Sign Convention is Crucial:** A common convention is to take the upward direction as positive and the downward direction as negative.
    *   In this case, acceleration $a = -g$ for all scenarios (object thrown up, falling down).
*   The kinematic equations become:
    1.  $v = u - gt$
    2.  $s = ut - \\frac{1}{2}gt^2$
    3.  $v^2 = u^2 - 2gs$`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Motion Under Gravity",
            titleTamil: "நீட் நிலை: ஈர்ப்பின் கீழ் இயக்கம்",
            difficulty: 'Easy',
            problem: "A ball is thrown vertically upward with a velocity of 20 m/s from the top of a multistorey building. The height of the point from where the ball is thrown is 25.0 m from the ground. (a) How high will the ball rise? and (b) How long will it be before the ball hits the ground? Take g = 10 m/s².",
            problemTamil: "ஒரு பல மாடி கட்டிடத்தின் உச்சியிலிருந்து ஒரு பந்து 20 மீ/வி திசைவேகத்துடன் செங்குத்தாக மேல்நோக்கி எறியப்படுகிறது. பந்து எறியப்பட்ட இடத்தின் உயரம் தரையிலிருந்து 25.0 மீ. (a) பந்து எவ்வளவு உயரம் எழும்பும்? மற்றும் (b) பந்து தரையைத் தொடும் முன் எவ்வளவு நேரம் ஆகும்? g = 10 மீ/வி² எனக் கொள்க.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Part (a): Find the maximum height reached. At the highest point, the final velocity v = 0. Use the position-velocity relation.",
                    explanationTamil: "பகுதி (a): அடையப்பட்ட பெரும உயரத்தைக் கண்டறியவும். மிக உயரமான புள்ளியில், இறுதி திசைவேகம் v = 0. நிலை-திசைவேகத் தொடர்பைப் பயன்படுத்தவும்.",
                    calculation: "v² = u² + 2as \\implies 0² = 20² + 2(-10)s \\implies 0 = 400 - 20s \\implies s = 20 m"
                },
                {
                    step: 2,
                    explanation: "Part (b): Find the total time of flight. We can split the journey into upward motion and downward motion. Time to reach max height: v = u + at => 0 = 20 - 10t₁ => t₁ = 2 s.",
                    explanationTamil: "பகுதி (b): மொத்த பயண நேரத்தைக் கண்டறியவும். பயணத்தை மேல்நோக்கிய இயக்கம் மற்றும் கீழ்நோக்கிய இயக்கம் எனப் பிரிக்கலாம். பெரும உயரத்தை அடைய நேரம்: v = u + at => 0 = 20 - 10t₁ => t₁ = 2 வி."
                },
                {
                    step: 3,
                    explanation: "The total height from the ground is 25 m (building) + 20 m (rise) = 45 m. Now calculate the time for free fall from this height.",
                    explanationTamil: "தரையிலிருந்து மொத்த உயரம் 25 மீ (கட்டிடம்) + 20 மீ (எழும்புதல்) = 45 மீ. இப்போது இந்த உயரத்திலிருந்து தடையின்றி கீழே விழும் நேரத்தைக் கணக்கிடவும்."
                },
                {
                    step: 4,
                    explanation: "For downward journey: s = ut + (1/2)at². Initial velocity is 0.",
                    explanationTamil: "கீழ்நோக்கிய பயணத்திற்கு: s = ut + (1/2)at². ஆரம்ப திசைவேகம் 0 ஆகும்.",
                    calculation: "45 = 0*t₂ + (1/2)(10)t₂² \\implies 45 = 5t₂² \\implies t₂² = 9 \\implies t₂ = 3 s"
                },
                {
                    step: 5,
                    explanation: "Total time = time to go up (t₁) + time to come down (t₂).",
                    explanationTamil: "மொத்த நேரம் = மேலே செல்ல நேரம் (t₁) + கீழே வர நேரம் (t₂).",
                    calculation: "Total time = 2 s + 3 s = 5 s"
                }
            ],
            neetHack: "A faster way for part (b) is to use the position-time relation directly for the entire journey, taking displacement as -25 m (final position is 25m below initial). s = ut + (1/2)at² => -25 = 20t - 5t². This gives a quadratic equation 5t² - 20t - 25 = 0 or t² - 4t - 5 = 0. Factoring gives (t-5)(t+1)=0. Since time cannot be negative, t=5 s.",
            neetHackTamil: "பகுதி (b) க்கு ஒரு வேகமான வழி, முழு பயணத்திற்கும் நிலை-கால தொடர்பை நேரடியாகப் பயன்படுத்துவது, இடப்பெயர்ச்சியை -25 மீ என எடுத்துக்கொள்வது (இறுதி நிலை ஆரம்ப நிலையிலிருந்து 25 மீ கீழே உள்ளது). s = ut + (1/2)at² => -25 = 20t - 5t². இது ஒரு இருபடிச் சமன்பாட்டை அளிக்கிறது t² - 4t - 5 = 0. காரணிப்படுத்தினால் (t-5)(t+1)=0. நேரம் எதிர்மறையாக இருக்க முடியாது என்பதால், t=5 வி.",
            commonPitfall: "Sign convention is the most common source of error. Consistently use one convention (e.g., up is positive, down is negative) for all vector quantities: displacement, velocity, and acceleration.",
            commonPitfallTamil: "குறியீட்டு மரபுதான் மிகவும் பொதுவான பிழைக்கான காரணம். இடப்பெயர்ச்சி, திசைவேகம் மற்றும் முடுக்கம் போன்ற அனைத்து வெக்டர் அளவுகளுக்கும் ஒரே மரபை (எ.கா., மேல்நோக்கி நேர்க்குறி, கீழ்நோக்கி எதிர்க்குறி) சீராகப் பயன்படுத்தவும்."
        },
        {
            title: "JEE Level: Relative Velocity",
            titleTamil: "ஜே.இ.இ நிலை: சார்பு திசைவேகம்",
            difficulty: 'Medium',
            problem: "Two trains A and B of length 400 m each are moving on two parallel tracks with a uniform speed of 72 km/h in the same direction, with A ahead of B. The driver of B decides to overtake A and accelerates by 1 m/s². If after 50 s, the guard of B just brushes past the driver of A, what was the original distance between them?",
            problemTamil: "தலா 400 மீ நீளமுள்ள A மற்றும் B என்ற இரண்டு ரயில்கள், ஒரே திசையில் 72 கிமீ/ம சீரான வேகத்தில் இரண்டு இணையான தடங்களில் செல்கின்றன, A ஆனது B-க்கு முன்னால் உள்ளது. B-இன் ஓட்டுநர் A-ஐ முந்திச் செல்ல முடிவு செய்து 1 மீ/வி² முடுக்கமடைகிறார். 50 வினாடிகளுக்குப் பிறகு, B-இன் காப்பாளர் A-இன் ஓட்டுநரைத் தொட்டுச் சென்றால், அவற்றுக்கு இடையேயான அசல் தூரம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Convert the speed to m/s. u_A = u_B = 72 km/h = 72 * (5/18) = 20 m/s.",
                    explanationTamil: "வேகத்தை மீ/வி ஆக மாற்றவும். u_A = u_B = 72 கிமீ/ம = 20 மீ/வி."
                },
                {
                    step: 2,
                    explanation: "Consider the motion from the frame of reference of train A. The problem becomes simpler.",
                    explanationTamil: "A ரயிலின் குறிப்பாயத்திலிருந்து இயக்கத்தைக் கருதுங்கள். கணக்கு எளிதாகிறது."
                },
                {
                    step: 3,
                    explanation: "Calculate relative initial velocity and relative acceleration. u_BA = u_B - u_A = 20 - 20 = 0. a_BA = a_B - a_A = 1 - 0 = 1 m/s².",
                    explanationTamil: "சார்பு ஆரம்ப திசைவேகம் மற்றும் சார்பு முடுக்கத்தைக் கணக்கிடவும். u_BA = 0. a_BA = 1 மீ/வி²."
                },
                {
                    step: 4,
                    explanation: "The total relative distance to be covered for the guard of B to pass the driver of A is the sum of the lengths of both trains. s_rel = 400 m + 400 m = 800 m.",
                    explanationTamil: "B-இன் காப்பாளர் A-இன் ஓட்டுநரைக் கடக்க, கடக்க வேண்டிய மொத்த சார்பு தூரம் இரண்டு ரயில்களின் நீளங்களின் கூடுதலாகும். s_rel = 800 மீ."
                },
                {
                    step: 5,
                    explanation: "Let the initial distance between them be x. So the total distance B has to cover relative to A is (800 + x) m. But the question says the guard of B brushes past the driver of A. This means the front of B has overtaken the front of A by a distance equal to the length of train A (400m), and the back of B has to cover the length of train B (400m) and the initial distance x. So total distance to cover is length of B + initial distance + length of A. s_rel = 400 + x + 400 = 800 + x. Wait, let's re-read. 'guard of B just brushes past the driver of A'. Guard is at the back of B, driver is at the front of A. The total relative distance covered by the back of B to reach the front of A is simply the sum of their lengths. Initial distance is 'x'. Let's say front of A is at x_A and front of B is at x_B. x_A - x_B = x. Position of guard of B is x_B - 400. The guard has to reach x_A. Relative distance covered = x_A - (x_B - 400) = x_A - x_B + 400 = x + 400. Let's try again.  Let the front of train A be the origin. The driver of A is at x=0. The front of train B is at -x and its guard is at -x-400. The guard has to travel to x=0. So the relative displacement is 0 - (-x-400) = x+400. This seems wrong. Let's use absolute positions. Initial position of A's driver: x_A. Initial position of B's guard: x_B_g. x_A - x_B_g = x. Final positions are equal. x_A(t) = x_A_0 + 20t. x_B_g(t) = x_B_g_0 + 20t + 0.5(1)t².  At t=50s, x_A(50) = x_B_g(50).  Let's use relative motion. Let the initial distance between the front of B and the back of A be x. The total distance for the guard of B to pass the driver of A is (length of B) + x + (length of A) = 400 + x + 400 = 800+x. This is also complicated. Let's stick to the simplest relative motion. Let's consider the front of train B overtaking the front of train A. The relative distance is x.  Let's reconsider the wording. 'guard of B just brushes past the driver of A'.  So the back of B has to cover the distance 'x' between them, PLUS the entire length of train A (400m). Total relative distance = x + 400m.  Let's re-read again. The guard is at the back of B, the driver is at the front of A. So the relative distance the back of B must travel to be at the same position as the front of A is x + 400 m. No, that's not right. The distance to be covered by train B to overtake train A is the sum of their lengths plus the initial distance between them. The relative distance covered by B with respect to A is S = (1/2)a_rel*t². The total length to be covered for the guard of B to pass the driver of A is the length of train B (400m) plus the initial distance x. So, S = 400+x. No, that's for the driver of B to pass the guard of A. Guard of B to driver of A means the back of B has to cover the distance to the front of A. Let's say front of A is at x_A0 and back of B is at x_B0. Initial distance is x_A0 - x_B0 = x (distance between them). The guard of B is at x_B0. The driver of A is at x_A0. The total distance to be covered is x_A0 - x_B0 = x.  Okay, let's use the standard method. Let 'x' be the initial distance. Distance traveled by A: S_A = 20 * 50 = 1000m. Distance traveled by B: S_B = 20*50 + 0.5*1*50² = 1000 + 1250 = 2250m. For the guard of B to pass the driver of A, the total distance traveled by B must be equal to the initial distance x + distance traveled by A + length of train A. No, that's not right.  Final position of A's driver = Initial position of A's driver + S_A. Final position of B's guard = Initial position of B's guard + S_B. Let's set initial position of A's driver to x_A. Initial position of B's driver is x_A - 400 - x. Initial position of B's guard is x_A - 400 - x - 400 = x_A - 800 - x.  At t=50, their positions are equal. x_A + 1000 = (x_A - 800 - x) + 2250.  1000 = -800 - x + 2250 => 1000 = 1450 - x => x = 450 m. This seems plausible.  Let's use relative motion, it should be simpler. Relative distance to be covered by the front of B to reach the front of A is x. The distance covered by B relative to A is S_rel = u_rel*t + 0.5*a_rel*t² = 0*50 + 0.5*1*50² = 1250 m. This 1250 m is the extra distance B has traveled.  S_B = S_A + x. So x = S_B - S_A = 2250 - 1000 = 1250 m. This is the distance between the front of the trains. The question asks for the original distance between them, which is ambiguous. Let's assume it's the distance between the front of B and the back of A. That would be x - 400. Or is it distance between driver of B and guard of A? Let's stick with the 'front to front' interpretation as 'original distance'. So x = 1250 m.  Let's re-read again. 'guard of B just brushes past the driver of A'. So the back of B reaches the front of A. Initial distance between front of A and back of B is x. Relative distance traveled by back of B to reach front of A is x. S_rel = 1250m. So x = 1250m. This seems right.",
                    calculation: "s_rel = u_rel t + \\frac{1}{2}a_{rel}t² = 0(50) + \\frac{1}{2}(1)(50)² = 1250 m. This relative distance is the original distance 'x' between the guard of B and the driver of A. So, x = 1250 m."
                }
            ],
            commonPitfall: "The most difficult part of such problems is correctly identifying the 'relative displacement'. Drawing a clear diagram showing the initial and final positions of the relevant points (driver and guard) is essential.",
            commonPitfallTamil: "இத்தகைய கணக்குகளில் மிகவும் கடினமான பகுதி, 'சார்பு இடப்பெயர்ச்சியை' சரியாக அடையாளம் காண்பதுதான். ஆரம்ப மற்றும் இறுதி நிலைகளைக் காட்டும் தெளிவான வரைபடத்தை வரைவது அவசியம்."
        }
    ],
    mcqs: [
        {
            question: "A particle covers half of its total distance with speed v₁ and the rest half distance with speed v₂. Its average speed during the complete journey is:",
            options: ["A. (v₁ + v₂)/2", "B. v₁v₂/(v₁ + v₂)", "C. 2v₁v₂/(v₁ + v₂)", "D. (v₁² + v₂²)/(v₁² - v₂²)"],
            answer: "C. 2v₁v₂/(v₁ + v₂)",
            explanation: "Let the total distance be 2d. Time for first half t₁ = d/v₁. Time for second half t₂ = d/v₂. Total time T = t₁ + t₂ = d(1/v₁ + 1/v₂) = d(v₁+v₂)/v₁v₂. Average speed = Total distance / Total time = 2d / T = 2d / (d(v₁+v₂)/v₁v₂) = 2v₁v₂/(v₁ + v₂).",
            neetFrequency: 5
        },
        {
            question: "The slope of a velocity-time graph represents:",
            options: ["A. Displacement", "B. Distance", "C. Acceleration", "D. Speed"],
            answer: "C. Acceleration",
            explanation: "Acceleration is the rate of change of velocity (a = dv/dt), which is the slope of the v-t graph.",
            neetFrequency: 3
        },
        {
            question: "A body starts from rest and travels for t seconds with uniform acceleration a. The displacement in the last second is:",
            options: ["A. (a/2)(2t - 1)", "B. at", "C. (1/2)at²", "D. a(t-1)"],
            answer: "A. (a/2)(2t - 1)",
            explanation: "This is a direct application of the formula for displacement in the nth second, S_n = u + (a/2)(2n-1). Here u=0 and n=t.",
            neetFrequency: 4
        },
        {
            question: "A car travels from A to B at 20 km/h and returns to A at 30 km/h. The average speed of the car for the whole journey is:",
            options: ["A. 25 km/h", "B. 24 km/h", "C. 50 km/h", "D. 5 km/h"],
            answer: "B. 24 km/h",
            explanation: "This is a special case of the first MCQ. Average speed = 2v₁v₂/(v₁ + v₂) = 2(20)(30)/(20+30) = 1200/50 = 24 km/h.",
            neetFrequency: 4
        },
        {
            question: "A stone falls freely under gravity. It covers distances h₁, h₂, h₃ in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h₁, h₂, and h₃ is:",
            options: ["A. h₁ = h₂ = h₃", "B. h₁ = h₂/3 = h₃/5", "C. h₂ = 3h₁ and h₃ = 5h₁", "D. h₁ = 2h₂ = 3h₃"],
            answer: "B. h₁ = h₂/3 = h₃/5",
            explanation: "For a freely falling body, the distances covered in successive equal time intervals are in the ratio 1:3:5:7... So, h₁:h₂:h₃ = 1:3:5, which gives the relation h₁ = h₂/3 = h₃/5.",
            neetFrequency: 3
        },
        {
            question: "Which of the following can be zero, when a particle is in motion for some time?",
            options: ["A. Distance", "B. Displacement", "C. Speed", "D. None of the above"],
            answer: "B. Displacement",
            explanation: "Displacement can be zero if the particle returns to its starting point. Distance, the total path length, cannot be zero if the particle has moved.",
            neetFrequency: 2
        },
        {
            question: "The numerical ratio of displacement to distance for a moving object is:",
            options: ["A. Always less than 1", "B. Always equal to 1", "C. Always more than 1", "D. Equal to or less than 1"],
            answer: "D. Equal to or less than 1",
            explanation: "Displacement is the shortest path, so its magnitude is always less than or equal to the path length (distance). The ratio is 1 for motion in a straight line without changing direction.",
            neetFrequency: 3
        },
        {
            question: "A train moving at 20 m/s is brought to rest by applying brakes in 10 s. The retardation is:",
            options: ["A. 2 m/s²", "B. -2 m/s²", "C. 0.5 m/s²", "D. 200 m/s²"],
            answer: "A. 2 m/s²",
            explanation: "Using v = u + at, 0 = 20 + a(10) => 10a = -20 => a = -2 m/s². Retardation is the positive value of this deceleration, so it is 2 m/s².",
            neetFrequency: 2
        },
        {
            question: "The area under the acceleration-time graph represents:",
            options: ["A. Displacement", "B. Velocity", "C. Change in velocity", "D. Force"],
            answer: "C. Change in velocity",
            explanation: "Since a = dv/dt, dv = a dt. Integrating both sides gives Δv = ∫a dt, which is the area under the a-t graph.",
            neetFrequency: 3
        },
        {
            question: "A car accelerates from rest at a constant rate α for some time, after which it decelerates at a constant rate β to come to rest. If the total time elapsed is t, the maximum velocity acquired by the car is:",
            options: ["A. (αβ / (α+β)) t", "B. ((α+β) / αβ) t", "C. (α² + β²)t / (α+β)", "D. (α² - β²)t / (α+β)"],
            answer: "A. (αβ / (α+β)) t",
            explanation: "Let t₁ be the time of acceleration and t₂ be the time of deceleration. v_max = αt₁ = βt₂. Also t = t₁+t₂. From these relations, we can solve for v_max in terms of t, α, and β.",
            neetFrequency: 4
        }
    ],
    assertionReasons: [
        {
            assertion: "The speed of a body can be negative.",
            reason: "Speed is a scalar quantity.",
            answer: "D",
            explanation: "Assertion is false. Speed, being the magnitude of velocity, is always non-negative. The reason is true; speed is a scalar quantity."
        },
        {
            assertion: "A body having constant speed can have a varying velocity.",
            reason: "Velocity is a vector quantity and can change if its direction changes.",
            answer: "A",
            explanation: "The assertion is true, for example, in uniform circular motion. The reason is also true and correctly explains the assertion. A change in direction changes the velocity vector even if the speed (magnitude) is constant."
        },
        {
            assertion: "The displacement of a body may be zero, even if its distance is not zero.",
            reason: "Displacement is the shortest distance between the initial and final points.",
            answer: "A",
            explanation: "Assertion is true, for example, in a round trip. The reason is a correct statement and explains why this is possible. If the initial and final points are the same, the shortest distance (displacement) is zero, but the path traveled (distance) is not."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Distance", "(b) Displacement", "(c) Speed", "(d) Velocity"],
            column2: ["(p) Scalar", "(q) Vector"],
            answer: "a-p, b-q, c-p, d-q",
            explanation: "Distance and speed are scalar quantities, while displacement and velocity are vector quantities."
        }
    ]
}
