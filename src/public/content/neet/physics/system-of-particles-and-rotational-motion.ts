import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
    "id": "system-of-particles-and-rotational-motion",
    "title": "System of Particles and Rotational Motion",
    "chapter": "Chapter 7",
    "subject": "Physics",
    "learningObjectives": [
        "Understand the concept of center of mass and its motion.",
        "Analyze rotational motion and define quantities like angular velocity, angular acceleration, and torque.",
        "Learn the concept of moment of inertia and its significance in rotational dynamics.",
        "Apply the principles of conservation of angular momentum.",
        "Solve problems involving rolling motion, which combines translational and rotational motion."
    ],
    "prerequisites": [
        "Newton's Laws of Motion",
        "Concepts of Work, Energy, and Power",
        "Basic Vector Algebra (Cross Product)"
    ],
    "conceptOverview": "This chapter extends the principles of linear motion to rotational motion. Instead of point masses, we consider rigid bodies which have a definite size and shape. We introduce concepts like center of mass, moment of inertia (the rotational equivalent of mass), torque (rotational equivalent of force), and angular momentum (rotational equivalent of linear momentum). A key focus is the conservation of angular momentum, a fundamental principle with wide-ranging applications, from planetary motion to the spinning of an ice skater. The chapter culminates in analyzing rolling motion, where an object both rotates and translates, combining the dynamics of both types of motion.",
    "tamilConnection": "சுழற்சி இயக்கம் (Sulatchi Iyakkam) என்பது நமது பிரபஞ்சத்தின் ஒரு அடிப்படை அம்சமாகும், இது கிரகங்களின் இயக்கம் முதல் ஒரு பம்பரத்தின் சுழற்சி வரை அனைத்தையும் நிர்வகிக்கிறது. ஒரு ஐஸ் ஸ்கேட்டர் கைகளை உள்ளிழுக்கும்போது வேகமாக சுழல்வது கோண உந்தம் அழிவின்மை (Angular Momentum Conservation) என்ற தத்துவத்தை விளக்குகிறது.",
    "culturalContext": "The concept of a spinning top (பம்பரம் - Bambaram) is a traditional toy in Tamil culture that perfectly demonstrates the principles of rotational motion, gyroscopic precession, and stability due to angular momentum.",
    "conceptNotes": [
        {
            "heading": { "english": "Center of Mass (COM)", "tamil": "நிறை மையம் (COM)" },
            "content": [
                { "english": "The center of mass is a point representing the mean position of the matter in a body or system. For a system of particles, it is the weighted average of the positions of the particles.", "tamil": "நிறை மையம் என்பது ஒரு பொருள் அல்லது அமைப்பில் உள்ள பொருளின் சராசரி நிலையைக் குறிக்கும் ஒரு புள்ளியாகும். துகள்களின் அமைப்பிற்கு, இது துகள்களின் நிலைகளின் எடையிடப்பட்ட சராசரியாகும்." },
                { "english": "For a two-particle system:", "tamil": "இரண்டு-துகள் அமைப்பிற்கு:" },
                "$$ \\vec{R}_{CM} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2} $$",
                { "english": "The velocity of the center of mass remains constant if no net external force acts on the system. The COM moves as if all the mass of the system were concentrated at that point and all external forces were applied at that point.", "tamil": "அமைப்பின் மீது நிகர வெளிப்புற விசை எதுவும் செயல்படவில்லை என்றால், நிறை மையத்தின் திசைவேகம் மாறாமல் இருக்கும். அமைப்பின் மொத்த நிறையும் அந்தப் புள்ளியில் குவிக்கப்பட்டிருப்பது போலவும், அனைத்து வெளிப்புற விசைகளும் அந்தப் புள்ளியில் பயன்படுத்தப்படுவது போலவும் நிறை மையம் நகரும்." }
            ]
        },
        {
            "heading": { "english": "Torque and Angular Momentum", "tamil": "திருப்புவிசை மற்றும் கோண உந்தம்" },
            "content": [
                { "english": "**Torque (τ)** is the rotational equivalent of force. It is the turning effect of a force.", "tamil": "**திருப்புவிசை (τ)** என்பது விசையின் சுழற்சிக்கு சமமானதாகும். இது ஒரு விசையின் திருப்பும் விளைவு." },
                "$$ \\vec{\\tau} = \\vec{r} \\times \\vec{F} $$",
                { "english": "**Angular Momentum (L)** is the rotational equivalent of linear momentum. It is a measure of the rotational motion of a body.", "tamil": "**கோண உந்தம் (L)** என்பது நேரியல் உந்தத்தின் சுழற்சிக்கு சமமானதாகும். இது ஒரு பொருளின் சுழற்சி இயக்கத்தின் அளவீடு ஆகும்." },
                "$$ \\vec{L} = \\vec{r} \\times \\vec{p} = I \\vec{\\omega} $$",
                { "english": "Newton's second law for rotation states that the net external torque on a system is equal to the rate of change of its angular momentum.", "tamil": "சுழற்சிக்கான நியூட்டனின் இரண்டாம் விதி, ஒரு அமைப்பின் மீதான நிகர வெளிப்புற திருப்புவிசையானது அதன் கோண உந்தத்தின் மாற்ற விகிதத்திற்கு சமம் என்று கூறுகிறது." },
                "$$ \\vec{\\tau}_{ext} = \\frac{d\\vec{L}}{dt} $$",
                { "english": "{{ICE_SKATER_ANIMATION}}", "tamil": "" }
            ]
        },
        {
            "heading": { "english": "Moment of Inertia (I)", "tamil": "நிலைமத் திருப்புத்திறன் (I)" },
            "content": [
                { "english": "Moment of Inertia is the rotational analog of mass. It measures an object's resistance to changes in its rotational motion. It depends on the mass of the body and the distribution of mass about the axis of rotation.", "tamil": "நிலைமத் திருப்புத்திறன் என்பது நிறையின் சுழற்சிக்கு ஒத்ததாகும். இது ஒரு பொருளின் சுழற்சி இயக்கத்தில் ஏற்படும் மாற்றங்களுக்கான எதிர்ப்பை அளவிடுகிறது. இது பொருளின் நிறை மற்றும் சுழற்சி அச்சைப் பற்றிய நிறை விநியோகத்தைப் பொறுத்தது." },
                "$$ I = \\sum m_i r_i^2 $$",
                { "english": "There are two important theorems: **Theorem of Parallel Axes** (I = I_cm + Md²) and **Theorem of Perpendicular Axes** (I_z = I_x + I_y).", "tamil": "இரண்டு முக்கிய தேற்றங்கள் உள்ளன: **இணை அச்சுத் தேற்றம்** (I = I_cm + Md²) மற்றும் **செங்குத்து அச்சுத் தேற்றம்** (I_z = I_x + I_y)." }
            ]
        },
        {
            "heading": { "english": "Rolling Motion", "tamil": "உருளுதல் இயக்கம்" },
            "content": [
                { "english": "Rolling is a combination of pure rotation and pure translation. The total kinetic energy of a rolling body is the sum of its translational kinetic energy and rotational kinetic energy.", "tamil": "உருளுதல் என்பது தூய சுழற்சி மற்றும் தூய இடப்பெயர்ச்சி ஆகியவற்றின் கலவையாகும். உருளும் பொருளின் மொத்த இயக்க ஆற்றல் அதன் இடப்பெயர்ச்சி இயக்க ஆற்றல் மற்றும் சுழற்சி இயக்க ஆற்றலின் கூட்டுத்தொகையாகும்." },
                "$$ K_{total} = K_{trans} + K_{rot} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I_{cm}\\omega^2 $$"
            ]
        }
    ],
    "workedExamples": [
        {
            "title": "Finding the Center of Mass",
            "titleTamil": "நிறை மையத்தைக் கண்டறிதல்",
            "difficulty": "Easy",
            "problem": "Three point masses of 1 kg, 2 kg, and 3 kg are placed at the vertices of an equilateral triangle of side 1 m. Find the coordinates of the center of mass, assuming the 1 kg mass is at the origin (0,0) and the 2 kg mass is on the x-axis.",
            "problemTamil": "1 மீ பக்கம் கொண்ட ஒரு சமபக்க முக்கோணத்தின் முனைகளில் 1 கிலோ, 2 கிலோ, மற்றும் 3 கிலோ ஆகிய மூன்று புள்ளி நிறைகள் வைக்கப்பட்டுள்ளன. 1 கிலோ நிறை ஆதிப்புள்ளியிலும் (0,0) மற்றும் 2 கிலோ நிறை x-அச்சிலும் இருப்பதாகக் கொண்டு, நிறை மையத்தின் ஆயத்தொலைவுகளைக் கண்டறியவும்.",
            "solutionSteps": [
                { "step": 1, "explanation": "Determine the coordinates of the three masses.", "explanationTamil": "மூன்று நிறைகளின் ஆயத்தொலைவுகளைத் தீர்மானிக்கவும்.", "calculation": "m₁ (1kg) at (0, 0)\nm₂ (2kg) at (1, 0)\nm₃ (3kg) at (0.5, √3/2) or (0.5, 0.866)" },
                { "step": 2, "explanation": "Calculate the x-coordinate of the center of mass using the formula X_cm = (m₁x₁ + m₂x₂ + m₃x₃) / (m₁ + m₂ + m₃).", "explanationTamil": "X_cm = (m₁x₁ + m₂x₂ + m₃x₃) / (m₁ + m₂ + m₃) சூத்திரத்தைப் பயன்படுத்தி நிறை மையத்தின் x-ஆயத்தொலைவைக் கணக்கிடவும்.", "calculation": "X_cm = (1*0 + 2*1 + 3*0.5) / (1 + 2 + 3) = (2 + 1.5) / 6 = 3.5 / 6 = 7/12 m" },
                { "step": 3, "explanation": "Calculate the y-coordinate of the center of mass using the formula Y_cm = (m₁y₁ + m₂y₂ + m₃y₃) / (m₁ + m₂ + m₃).", "explanationTamil": "Y_cm = (m₁y₁ + m₂y₂ + m₃y₃) / (m₁ + m₂ + m₃) சூத்திரத்தைப் பயன்படுத்தி நிறை மையத்தின் y-ஆயத்தொலைவைக் கணக்கிடவும்.", "calculation": "Y_cm = (1*0 + 2*0 + 3*(√3/2)) / 6 = (3√3 / 2) / 6 = 3√3 / 12 = √3/4 m" },
                { "step": 4, "explanation": "State the final coordinates of the center of mass.", "explanationTamil": "நிறை மையத்தின் இறுதி ஆயத்தொலைவுகளைக் கூறவும்.", "calculation": "COM = (7/12, √3/4) m" }
            ]
        },
        {
            "title": "Conservation of Angular Momentum",
            "titleTamil": "கோண உந்தம் அழிவின்மை",
            "difficulty": "Medium",
            "problem": "A person stands at the center of a turntable, holding his arms outstretched. The turntable is set rotating with an angular speed of 40 rev/min. If he folds his arms back, reducing his moment of inertia to 2/5 of the initial value, what is his new angular speed?",
            "problemTamil": "ஒருவர் தனது கைகளை விரித்து ஒரு சுழல் மேசையின் மையத்தில் நிற்கிறார். சுழல் மேசை நிமிடத்திற்கு 40 சுழற்சிகள் என்ற கோண வேகத்தில் சுழற்றப்படுகிறது. அவர் தனது கைகளை மடக்கினால், அவரது நிலைமத் திருப்புத்திறன் ஆரம்ப மதிப்பில் 2/5 பங்காகக் குறைகிறது, அவரது புதிய கோண வேகம் என்ன?",
            "solutionSteps": [
                { "step": 1, "explanation": "Identify the principle. Since there is no external torque, angular momentum is conserved.", "explanationTamil": "கொள்கையை அடையாளம் காணவும். வெளிப்புற திருப்புவிசை இல்லாததால், கோண உந்தம் பாதுகாக்கப்படுகிறது.", "calculation": "L_initial = L_final  =>  I₁ω₁ = I₂ω₂" },
                { "step": 2, "explanation": "List the given values. Let the initial moment of inertia be I₁.", "explanationTamil": "கொடுக்கப்பட்ட மதிப்புகளைப் பட்டியலிடவும். ஆரம்ப நிலைமத் திருப்புத்திறன் I₁ ஆக இருக்கட்டும்.", "calculation": "ω₁ = 40 rev/min\nI₂ = (2/5)I₁" },
                { "step": 3, "explanation": "Substitute the values into the conservation equation and solve for the final angular speed ω₂.", "explanationTamil": "மதிப்புகளை பாதுகாப்புச் சமன்பாட்டில் பிரதியிட்டு, இறுதி கோண வேகம் ω₂ க்காகத் தீர்க்கவும்.", "calculation": "I₁ * 40 = (2/5)I₁ * ω₂" },
                { "step": 4, "explanation": "Cancel I₁ from both sides and calculate ω₂.", "explanationTamil": "இருபுறமும் I₁ ஐ ரத்து செய்து ω₂ ஐக் கணக்கிடவும்.", "calculation": "40 = (2/5) * ω₂  =>  ω₂ = (40 * 5) / 2 = 200 / 2 = 100 rev/min" }
            ],
            "neetHack": "When moment of inertia decreases, angular velocity must increase proportionally to conserve angular momentum. If I becomes 2/5, then ω must become 5/2. New ω = (5/2) * 40 = 100 rev/min.",
            "neetHackTamil": "நிலைமத் திருப்புத்திறன் குறையும்போது, கோண உந்தத்தைப் பாதுகாக்க கோண திசைவேகம் விகிதாசாரமாக அதிகரிக்க வேண்டும். I 2/5 ஆக மாறினால், ω 5/2 ஆக வேண்டும். புதிய ω = (5/2) * 40 = 100 rev/min."
        }
    ],
    "mcqs": [], "assertionReasons": [], "matchTheColumns": [],
    "keyTakeaways": []
};
