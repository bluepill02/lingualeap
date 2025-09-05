
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
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Displacement is the shortest path (vector), while distance is the total path length (scalar).",
        "Velocity is the rate of change of displacement; Speed is the rate of change of distance.",
        "Acceleration is the rate of change of velocity.",
        "The three kinematic equations (v=u+at, s=ut+½at², v²=u²+2as) are valid only for constant acceleration.",
        "For motion under gravity, acceleration 'a' is replaced by 'g' (usually -9.8 m/s²), and a clear sign convention is essential."
    ],
    mnemonics: [
        { text: "SUVAT - The variables in the kinematic equations: s (displacement), u (initial velocity), v (final velocity), a (acceleration), t (time).", tamil: "SUVAT - இயக்கச் சமன்பாடுகளின் மாறிகள்: s (இடப்பெயர்ச்சி), u (தொடக்க திசைவேகம்), v (இறுதி திசைவேகம்), a (முடுக்கம்), t (காலம்)." }
    ],
    neetTips: [
        { text: "In problems involving stopping distance, remember that it is proportional to the square of the initial velocity (s ∝ u²).", tamil: "நிறுத்தத் தொலைவு கணக்குகளில், அது தொடக்க திசைவேகத்தின் வர்க்கத்திற்கு நேர்விகிதத்தில் இருக்கும் (s ∝ u²) என்பதை நினைவில் கொள்க." },
        { text: "When a body is dropped, initial velocity u = 0. When a body is thrown up, final velocity v = 0 at the highest point.", tamil: "ஒரு பொருள் கீழே விடப்பட்டால், தொடக்க திசைவேகம் u = 0. ஒரு பொருள் மேல்நோக்கி எறியப்பட்டால், பெரும உயரத்தில் இறுதித் திசைவேகம் v = 0." },
        { text: "Graphical questions are very common. Remember: Slope of x-t graph is velocity, slope of v-t graph is acceleration. Area under v-t graph is displacement.", tamil: "வரைபடக் கேள்விகள் மிகவும் பொதுவானவை. நினைவில் கொள்க: x-t வரைபடத்தின் சாய்வு திசைவேகம், v-t வரைபடத்தின் சாய்வு முடுக்கம். v-t வரைபடத்தின் கீழ் உள்ள பரப்பு இடப்பெயர்ச்சி." }
    ]
};
