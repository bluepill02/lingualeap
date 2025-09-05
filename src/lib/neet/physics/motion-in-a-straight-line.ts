
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
                    explanation: "The relative distance covered for the guard of B to pass the driver of A is the original distance (x) plus the length of train A (400m) and the length of train B (400m). Total relative distance s_rel = x + 400 + 400 = x + 800.",
                    explanationTamil: "B-இன் காப்பாளர் A-இன் ஓட்டுநரைக் கடக்க கடந்த சார்பு தூரம் என்பது அசல் தூரம் (x) மற்றும் ரயில் A-இன் நீளம் (400மீ) மற்றும் ரயில் B-இன் நீளம் (400மீ) ஆகியவற்றின் கூடுதலாகும். மொத்த சார்பு தூரம் s_rel = x + 800."
                },
                {
                    step: 5,
                    explanation: "Use the relative kinematic equation: s_rel = u_rel*t + (1/2)*a_rel*t².",
                    explanationTamil: "சார்பு இயக்கவியல் சமன்பாட்டைப் பயன்படுத்தவும்: s_rel = u_rel*t + (1/2)*a_rel*t².",
                    calculation: "x + 800 = (0)(50) + \\frac{1}{2}(1)(50)² = 0.5 * 2500 = 1250 m"
                },
                 {
                    step: 6,
                    explanation: "Solve for the original distance x.",
                    explanationTamil: "அசல் தூரம் x-ஐக் கண்டறியவும்.",
                    calculation: "x = 1250 - 800 = 450 m"
                }
            ],
            commonPitfall: "The most difficult part of such problems is correctly identifying the 'relative displacement'. It's the total distance that needs to be covered in the relative frame. Here, it includes the initial separation plus the lengths of both trains.",
            commonPitfallTamil: "இத்தகைய கணக்குகளில் மிகவும் கடினமான பகுதி, 'சார்பு இடப்பெயர்ச்சியை' சரியாக அடையாளம் காண்பதுதான். இது சார்பு குறிப்பாயத்தில் கடக்க வேண்டிய மொத்த தூரம் ஆகும். இங்கு, இது ஆரம்பப் பிரிப்பு மற்றும் இரண்டு ரயில்களின் நீளங்களையும் உள்ளடக்கியது."
        },
        {
            title: "NEET Level: Average Speed",
            titleTamil: "நீட் நிலை: சராசரி வேகம்",
            difficulty: 'Medium',
            problem: "A car covers the first half of the distance between two places at 40 km/h and the other half at 60 km/h. The average speed of the car is:",
            problemTamil: "ஒரு கார் இரண்டு இடங்களுக்கு இடையேயான தூரத்தில் முதல் பாதியை 40 கிமீ/ம வேகத்திலும், மற்ற பாதியை 60 கிமீ/ம வேகத்திலும் கடக்கிறது. காரின் சராசரி வேகம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Let the total distance be 2d. The first half is d and the second half is d.",
                    explanationTamil: "மொத்த தூரம் 2d ஆக இருக்கட்டும். முதல் பாதி d மற்றும் இரண்டாம் பாதி d ஆகும்."
                },
                {
                    step: 2,
                    explanation: "Calculate the time taken for each half. t₁ = distance/speed = d/40. t₂ = d/60.",
                    explanationTamil: "ஒவ்வொரு பாதிக்கும் ஆகும் நேரத்தைக் கணக்கிடவும். t₁ = தூரம்/வேகம் = d/40. t₂ = d/60."
                },
                {
                    step: 3,
                    explanation: "Calculate the total time T = t₁ + t₂.",
                    explanationTamil: "மொத்த நேரம் T = t₁ + t₂ ஐக் கணக்கிடவும்.",
                    calculation: "T = \\frac{d}{40} + \\frac{d}{60} = d(\\frac{3+2}{120}) = \\frac{5d}{120} = \\frac{d}{24}"
                },
                {
                    step: 4,
                    explanation: "Average speed = Total Distance / Total Time.",
                    explanationTamil: "சராசரி வேகம் = மொத்த தூரம் / மொத்த நேரம்.",
                    calculation: "\\bar{v} = \\frac{2d}{T} = \\frac{2d}{d/24} = 48 \\text{ km/h}"
                }
            ],
            neetHack: "For a journey with two equal distances covered at speeds v₁ and v₂, the average speed is the harmonic mean: 2v₁v₂/(v₁ + v₂). Here, 2(40)(60)/(40+60) = 4800/100 = 48 km/h.",
            neetHackTamil: "v₁ மற்றும் v₂ வேகத்தில் இரண்டு சம தூரங்கள் கடக்கும் பயணத்திற்கு, சராசரி வேகம் இசைச் சராசரி ஆகும்: 2v₁v₂/(v₁ + v₂)."
        },
        {
            title: "JEE Level: Calculus in Kinematics",
            titleTamil: "ஜே.இ.இ நிலை: இயக்கவியலில் நுண்கணிதம்",
            difficulty: 'Medium',
            problem: "The position of a particle is given by x = 2t³ - 9t² + 12t. Find the time when the particle's velocity is zero.",
            problemTamil: "ஒரு துகளின் நிலை x = 2t³ - 9t² + 12t என கொடுக்கப்பட்டுள்ளது. துகளின் திசைவேகம் சுழியாக இருக்கும் நேரத்தைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Velocity (v) is the first derivative of position (x) with respect to time (t). Find v(t) by differentiating x(t).",
                    explanationTamil: "திசைவேகம் (v) என்பது நேரத்தைப் (t) பொறுத்து நிலையின் (x) முதல் வகைக்கெழு ஆகும். x(t) ஐ வகைக்கெழு செய்வதன் மூலம் v(t) ஐக் கண்டறியவும்.",
                    calculation: "v = \\frac{dx}{dt} = \\frac{d}{dt}(2t^3 - 9t^2 + 12t) = 6t^2 - 18t + 12"
                },
                {
                    step: 2,
                    explanation: "Set the velocity equation to zero to find the required time.",
                    explanationTamil: "தேவையான நேரத்தைக் கண்டறிய திசைவேக சமன்பாட்டை சுழிக்கு சமப்படுத்தவும்.",
                    calculation: "6t^2 - 18t + 12 = 0 \\implies t^2 - 3t + 2 = 0"
                },
                {
                    step: 3,
                    explanation: "Solve the quadratic equation for t.",
                    explanationTamil: "t-க்கான இருபடிச் சமன்பாட்டைத் தீர்க்கவும்.",
                    calculation: "(t-1)(t-2) = 0"
                },
                {
                    step: 4,
                    explanation: "The solutions are t=1 s and t=2 s. The velocity is zero at these two instants.",
                    explanationTamil: "தீர்வுகள் t=1 வி மற்றும் t=2 வி ஆகும். இந்த இரண்டு கணங்களிலும் திசைவேகம் சுழியாக இருக்கும்."
                }
            ]
        },
        {
            title: "NEET Level: Graphical Interpretation",
            titleTamil: "நீட் நிலை: வரைபட விளக்கம்",
            difficulty: 'Medium',
            problem: "The velocity-time graph of a particle moving in a straight line is shown in a diagram (triangle from t=0 to t=4 with peak v=2, and an inverted triangle from t=4 to t=6 with bottom v=-2). Find the total displacement of the particle in 6 seconds.",
            problemTamil: "ஒரு நேர்கோட்டில் நகரும் ஒரு துகளின் திசைவேக-கால வரைபடம் காட்டப்பட்டுள்ளது (t=0 முதல் t=4 வரை முக்கோணம், உச்சி v=2, மற்றும் t=4 முதல் t=6 வரை தலைகீழ் முக்கோணம், அடி v=-2). 6 வினாடிகளில் துகளின் மொத்த இடப்பெயர்ச்சியைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The displacement is the area under the velocity-time graph. We need to calculate the area of the two triangles formed.",
                    explanationTamil: "இடப்பெயர்ச்சி என்பது திசைவேக-கால வரைபடத்தின் கீழ் உள்ள பரப்பளவு ஆகும். உருவாக்கப்பட்ட இரண்டு முக்கோணங்களின் பரப்பளவைக் கணக்கிட வேண்டும்."
                },
                {
                    step: 2,
                    explanation: "Area of the first triangle (0 to 4 s), which is above the time axis (positive displacement).",
                    explanationTamil: "முதல் முக்கோணத்தின் பரப்பளவு (0 முதல் 4 வி வரை), இது கால அச்சிற்கு மேலே உள்ளது (நேர்மறை இடப்பெயர்ச்சி).",
                    calculation: "Area₁ = (1/2) * base * height = (1/2) * 4 * 2 = 4 m"
                },
                {
                    step: 3,
                    explanation: "Area of the second triangle (4 to 6 s), which is below the time axis (negative displacement).",
                    explanationTamil: "இரண்டாவது முக்கோணத்தின் பரப்பளவு (4 முதல் 6 வி வரை), இது கால அச்சிற்கு கீழே உள்ளது (எதிர்மறை இடப்பெயர்ச்சி).",
                    calculation: "Area₂ = (1/2) * base * height = (1/2) * (6-4) * (-2) = -2 m"
                },
                {
                    step: 4,
                    explanation: "The total displacement is the algebraic sum of the areas.",
                    explanationTamil: "மொத்த இடப்பெயர்ச்சி என்பது பரப்பளவுகளின் இயற்கணிதக் கூடுதலாகும்.",
                    calculation: "Displacement = Area₁ + Area₂ = 4 m + (-2 m) = 2 m"
                }
            ]
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'v = u + at',
                description: 'Velocity-Time Relation',
                descriptionTamil: 'திசைவேக-கால தொடர்பு'
            },
            {
                formula: 's = ut + \\frac{1}{2}at^2',
                description: 'Position-Time Relation',
                descriptionTamil: 'நிலை-கால தொடர்பு'
            },
            {
                formula: 'v^2 = u^2 + 2as',
                description: 'Position-Velocity Relation',
                descriptionTamil: 'நிலை-திசைவேகத் தொடர்பு'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Displacement can be zero, but distance traveled cannot (for a moving body).",
        "The three kinematic equations are only valid for constant acceleration.",
        "Motion under gravity is a case of constant acceleration (a = -g or +g depending on convention).",
        "The slope and area of kinematic graphs (x-t, v-t, a-t) have important physical meanings."
    ],
    mnemonics: [
        { text: "Remember SUVAT for the kinematic variables: s (displacement), u (initial velocity), v (final velocity), a (acceleration), t (time).", tamil: "SUVAT: s (இடப்பெயர்ச்சி), u (தொடக்க திசைவேகம்), v (இறுதி திசைவேகம்), a (முடுக்கம்), t (காலம்) - இயக்கவியல் மாறிகளை நினைவில் கொள்க." }
    ],
    neetTips: [
        { text: "For questions involving ratios of distances in free fall, remember the 1:3:5:7... rule for successive time intervals.", tamil: "தடையின்றி விழும் பொருளின் தூர விகிதங்கள் சம்பந்தப்பட்ட கேள்விகளுக்கு, அடுத்தடுத்த நேர இடைவெளிகளுக்கான 1:3:5:7... விதியை நினைவில் கொள்க." },
        { text: "When average speed is asked for a journey split into two equal distances, always use the harmonic mean formula: 2v₁v₂/(v₁ + v₂).", tamil: "இரண்டு சம தூரங்களாகப் பிரிக்கப்பட்ட பயணத்திற்கு சராசரி வேகம் கேட்கப்பட்டால், எப்போதும் இசைச் சராசரி சூத்திரத்தைப் பயன்படுத்தவும்: 2v₁v₂/(v₁ + v₂)." }
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
        },
        {
            question: "The displacement of a particle is given by x = (t-2)². The distance covered by the particle in first 4 seconds is:",
            options: ["A. 4 m", "B. 8 m", "C. 0 m", "D. 12 m"],
            answer: "B. 8 m",
            explanation: "Velocity v = dx/dt = 2(t-2). The velocity is zero at t=2s. The particle moves in the negative direction for t<2s and positive direction for t>2s. Distance in first 2s = |x(2)-x(0)| = |0 - 4| = 4m. Distance in next 2s = |x(4)-x(2)| = |4 - 0| = 4m. Total distance = 4 + 4 = 8m.",
            neetFrequency: 4
        },
        {
            question: "A ball is dropped from a high-rise platform at t=0 starting from rest. After 6 seconds another ball is thrown downwards from the same platform with a speed v. The two balls meet at t = 18 s. What is the value of v?",
            options: ["A. 75 m/s", "B. 55 m/s", "C. 40 m/s", "D. 60 m/s"],
            answer: "A. 75 m/s",
            explanation: "Distance travelled by first ball in 18s = (1/2)g(18)². Distance travelled by second ball in (18-6)=12s = v(12) + (1/2)g(12)². Equating them: (1/2)g(324) = 12v + (1/2)g(144). 162g = 12v + 72g. 90g = 12v. v = 900/12 = 75 m/s (taking g=10).",
            neetFrequency: 3
        },
        {
            question: "The velocity of a particle is v = v₀ + gt + ft². If its position is x = 0 at t = 0, then its displacement after unit time (t = 1) is:",
            options: ["A. v₀ + g/2 + f", "B. v₀ + 2g + 3f", "C. v₀ + g/2 + f/3", "D. v₀ + g + f"],
            answer: "C. v₀ + g/2 + f/3",
            explanation: "x = ∫v dt = ∫(v₀ + gt + ft²) dt = v₀t + gt²/2 + ft³/3 + C. Since x=0 at t=0, C=0. At t=1, x = v₀ + g/2 + f/3.",
            neetFrequency: 3
        },
        {
            question: "The slope of the tangent drawn on the position-time graph at any instant gives:",
            options: ["A. Average velocity", "B. Instantaneous velocity", "C. Average acceleration", "D. Instantaneous acceleration"],
            answer: "B. Instantaneous velocity",
            explanation: "Instantaneous velocity is defined as v = dx/dt, which is the slope of the position-time (x-t) graph.",
            neetFrequency: 2
        },
        {
            question: "If a body loses half of its velocity on penetrating 3 cm in a wooden block, then how much will it penetrate more before coming to rest?",
            options: ["A. 1 cm", "B. 2 cm", "C. 3 cm", "D. 4 cm"],
            answer: "A. 1 cm",
            explanation: "Using v²=u²-2as. In the first case, (u/2)² = u² - 2as => 2as = 3u²/4. s=3cm. In the second case, 0 = (u/2)² - 2as' => 2as' = u²/4. So, s'/s = (u²/4)/(3u²/4) = 1/3. s' = s/3 = 3/3 = 1 cm.",
            neetFrequency: 4
        },
        {
            question: "A man throws balls with the same speed vertically upwards one after the other at an interval of 2 seconds. What should be the speed of the throw so that more than two balls are in the sky at any time?",
            options: ["A. Only with speed 19.6 m/s", "B. More than 19.6 m/s", "C. At least 9.8 m/s", "D. Any speed less than 19.6 m/s"],
            answer: "B. More than 19.6 m/s",
            explanation: "For more than two balls to be in the air, the time of flight of the first ball must be greater than the time interval for throwing the third ball (2+2=4s). T > 4s. 2u/g > 4 => u > 2g => u > 19.6 m/s.",
            neetFrequency: 3
        },
        {
            question: "A particle starts from rest. Its acceleration (a) versus time (t) is as shown (triangle from t=0 to t=11 with peak a=10). The maximum speed of the particle will be:",
            options: ["A. 110 m/s", "B. 55 m/s", "C. 550 m/s", "D. 660 m/s"],
            answer: "B. 55 m/s",
            explanation: "Maximum speed is the total area under the a-t graph. Area = (1/2) * base * height = (1/2) * 11 * 10 = 55 m/s.",
            neetFrequency: 4
        },
        {
            question: "Which of the following graphs represents uniform motion?",
            options: ["A. Parabolic x-t graph", "B. Straight line x-t graph inclined to the time axis", "C. Parabolic v-t graph", "D. Straight line v-t graph parallel to the time axis"],
            answer: "B. Straight line x-t graph inclined to the time axis",
            explanation: "Uniform motion means constant velocity. A straight line x-t graph has a constant slope, which represents constant velocity.",
            neetFrequency: 2
        },
        {
            question: "A body is thrown vertically upwards. Which of the following graphs correctly represents the velocity vs time?",
            options: ["A. A parabola", "B. A straight line with positive slope", "C. A straight line with negative slope", "D. A horizontal line"],
            answer: "C. A straight line with negative slope",
            explanation: "The equation is v = u - gt. This is a linear equation of the form y = c + mx, with a negative slope (-g).",
            neetFrequency: 3
        },
        {
            question: "The brakes of a car produce a constant deceleration of 5 m/s². If the car is travelling at 30 m/s, the distance it travels before stopping is:",
            options: ["A. 30 m", "B. 60 m", "C. 90 m", "D. 120 m"],
            answer: "C. 90 m",
            explanation: "Using v² = u² + 2as. Here, v=0, u=30, a=-5. 0 = 30² + 2(-5)s => 0 = 900 - 10s => 10s = 900 => s = 90 m.",
            neetFrequency: 3
        },
        {
            question: "From the top of a tower, a ball is dropped and it reaches the ground in 4 s. The height of the tower is (g=10 m/s²):",
            options: ["A. 20 m", "B. 40 m", "C. 80 m", "D. 160 m"],
            answer: "C. 80 m",
            explanation: "Using s = ut + (1/2)at². Here u=0, t=4, a=10. s = 0 + (1/2)(10)(4)² = 5 * 16 = 80 m.",
            neetFrequency: 2
        },
        {
            question: "Two cars P and Q start from a point at the same time in a straight line and their positions are represented by x_P(t) = at + bt² and x_Q(t) = ft - t². At what time do the cars have the same velocity?",
            options: ["A. (a-f)/(1+b)", "B. (a+f)/(2(b-1))", "C. (a+f)/(2(1+b))", "D. (f-a)/(2(1+b))"],
            answer: "D. (f-a)/(2(1+b))",
            explanation: "v_P = dx_P/dt = a + 2bt. v_Q = dx_Q/dt = f - 2t. Set v_P = v_Q. a + 2bt = f - 2t => 2bt + 2t = f-a => 2t(b+1) = f-a => t = (f-a)/(2(b+1)).",
            neetFrequency: 3
        },
        {
            question: "The ratio of the distances covered by a freely falling body in the 1st, 2nd, 3rd... second of its motion:",
            options: ["A. 1:2:3:...", "B. 1:4:9:...", "C. 1:3:5:...", "D. 1:1:1:..."],
            answer: "C. 1:3:5:...",
            explanation: "Using S_n = u + (g/2)(2n-1), and u=0, the distance covered in the nth second is proportional to (2n-1). For n=1,2,3, this gives the ratio 1:3:5.",
            neetFrequency: 4
        },
        {
            question: "A particle moves along a straight line such that its displacement at any time t is given by s = (t³ - 6t² + 3t + 4) meters. The velocity when the acceleration is zero is:",
            options: ["A. 3 m/s", "B. -12 m/s", "C. 42 m/s", "D. -9 m/s"],
            answer: "D. -9 m/s",
            explanation: "v = ds/dt = 3t² - 12t + 3. a = dv/dt = 6t - 12. Set a=0 => 6t-12=0 => t=2s. Now find v at t=2s. v(2) = 3(2)² - 12(2) + 3 = 12 - 24 + 3 = -9 m/s.",
            neetFrequency: 5
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
        },
        {
            assertion: "A body can have acceleration even if its velocity is zero at a given instant.",
            reason: "Acceleration is the rate of change of velocity, not velocity itself.",
            answer: "A",
            explanation: "Assertion is true. At the highest point of its trajectory, a vertically thrown ball has zero velocity but still possesses acceleration due to gravity (g). The reason correctly explains that acceleration is about the *change* in velocity, which is happening at that instant."
        },
        {
            assertion: "The position-time graph of a body in uniform motion is a straight line parallel to the time axis.",
            reason: "In uniform motion, the position does not change with time.",
            answer: "D",
            explanation: "Assertion is false. A straight line parallel to the time axis means the position is constant, i.e., the body is at rest. Uniform motion is represented by a straight line with a constant non-zero slope. The reason is also false."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Distance", "(b) Displacement", "(c) Speed", "(d) Velocity"],
            column2: ["(p) Scalar", "(q) Vector"],
            answer: "a-p, b-q, c-p, d-q",
            explanation: "Distance and speed are scalar quantities, while displacement and velocity are vector quantities."
        },
        {
            column1: ["(a) Slope of v-t graph", "(b) Area under v-t graph", "(c) Slope of x-t graph", "(d) Area under a-t graph"],
            column2: ["(p) Displacement", "(q) Instantaneous velocity", "(r) Acceleration", "(s) Change in velocity"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching graphical interpretations in kinematics."
        },
        {
            column1: ["(a) Uniform velocity", "(b) Uniform acceleration", "(c) Object at rest", "(d) Non-uniform acceleration"],
            column2: ["(p) v-t graph is a straight line not parallel to time axis", "(q) v-t graph is a straight line parallel to time axis", "(r) x-t graph is a curve", "(s) x-t graph is a straight line parallel to time axis"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Matching types of motion with their graphical representations."
        },
        {
            column1: ["(a) Freely falling body", "(b) Body thrown upwards", "(c) Body moving with constant velocity", "(d) Retarded motion"],
            column2: ["(p) Acceleration is negative", "(q) Acceleration is zero", "(r) Acceleration is positive"],
            answer: "a-r, b-p, c-q, d-p",
            explanation: "Matching physical situations with the sign of their acceleration (assuming upward direction is positive)."
        },
        {
            column1: ["(a) First equation of motion", "(b) Second equation of motion", "(c) Third equation of motion", "(d) Displacement in nth second"],
            column2: ["(p) v²=u²+2as", "(q) s = ut + ½at²", "(r) v=u+at", "(s) u + (a/2)(2n-1)"],
            answer: "a-r, b-q, c-p, d-s",
            explanation: "Matching the names of the kinematic equations with their formulas."
        }
    ],
    validationReport: []
};
