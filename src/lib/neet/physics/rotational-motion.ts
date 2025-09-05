
import type { NeetModule } from '@/lib/types';
import { IceSkaterAnimation } from '@/components/exam/IceSkaterAnimation';

export const rotationalMotion: NeetModule = {
    id: 'neet-physics-rotational-motion',
    title: 'Physics - System of Particles and Rotational Motion (துகள் அமைப்புகள் மற்றும் சுழற்சி இயக்கம்)',
    chapter: 'System of Particles and Rotational Motion',
    subject: 'Physics',
    learningObjectives: [
        "Define and calculate the center of mass for discrete and continuous systems.",
        "Understand the concepts of torque and angular momentum and their relationship.",
        "Define moment of inertia and understand its role as rotational inertia.",
        "Apply the theorems of parallel and perpendicular axes to calculate moment of inertia.",
        "Analyze rotational kinematics and dynamics using equations analogous to linear motion.",
        "Apply the principle of conservation of angular momentum."
    ],
    prerequisites: [
        "Newton's Laws of Motion",
        "Work, Energy, and Power",
        "Vector cross product"
    ],
    conceptOverview: "This chapter extends the principles of mechanics from point masses to extended bodies and systems of particles. We introduce rotational motion, a new type of motion where an object spins about an axis. Key concepts like center of mass, torque, moment of inertia, and angular momentum are the rotational analogues of position, force, mass, and linear momentum. Mastering the analogy between linear and rotational motion is the key to simplifying this chapter. We will explore the conditions for rotational equilibrium and the dynamics of rotating bodies, culminating in the powerful law of conservation of angular momentum.",
    tamilConnection: "பம்பரம் சுற்றுவது, கதவு திறப்பது, கிரகங்கள் சூரியனைச் சுற்றுவது என சுழற்சி இயக்கம் நம்மைச் சுற்றி எங்கும் உள்ளது. ஒரு பொருளை ஒரு புள்ளியாகக் கருதாமல், அதன் முழு வடிவத்தையும், நிறையின் பரவலையும் கருத்தில் கொள்ளும்போது, அதன் இயக்கத்தை விவரிக்க புதிய அளவுகள் தேவைப்படுகின்றன. இந்த அத்தியாயம் அந்த சுழற்சி இயக்கத்தின் அறிவியலை அறிமுகப்படுத்துகிறது.",
    culturalContext: "Consider the art of making pottery on a potter's wheel (குயவன் சக்கரம்). The potter applies a torque to spin the wheel and uses the principle of conservation of angular momentum when shaping the clay (pulling the clay inwards makes the wheel spin faster). This ancient craft is a beautiful demonstration of rotational dynamics.",
    syllabusMapping: [
         {
            topic: 'System of Particles, Center of Mass, Rotational Motion',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 5: Motion of System of Particles and Rigid Bodies',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 7: System of Particles and Rotational Motion',
            notes: 'Extremely important for NEET. Questions on moment of inertia (especially using parallel/perpendicular axes theorems), conservation of angular momentum, and rolling motion are very frequent.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 5 maps to NEET Physics Unit 3'
        }
    ],
    conceptNotes: [
        {
            english: '### 1. Center of Mass',
            tamil: '(நிறை மையம்)'
        },
        {
            english: 'The center of mass (CM) of a system of particles is a point that moves as though all the mass of the system were concentrated at that point and all external forces were applied at that point.',
            tamil: '(துகள் அமைப்பின் நிறை மையம் (CM) என்பது, அமைப்பின் மொத்த நிறையும் அந்தப் புள்ளியில் செறிவூட்டப்பட்டது போலவும், அனைத்து வெளிப்புற விசைகளும் அந்தப் புள்ளியில் பயன்படுத்தப்பட்டது போலவும் நகரும் ஒரு புள்ளியாகும்.)'
        },
        {
            english: 'For a system of n particles:',
            tamil: '(n துகள்களைக் கொண்ட ஒரு அமைப்புக்கு:)'
        },
        {
            english: '$$ \\vec{R}_{CM} = \\frac{m_1\\vec{r}_1 + m_2\\vec{r}_2 + ... + m_n\\vec{r}_n}{m_1 + m_2 + ... + m_n} = \\frac{\\sum m_i\\vec{r}_i}{M} $$',
        },
        {
            english: 'For a continuous body, we integrate:',
            tamil: '(ஒரு தொடர்ச்சியான பொருளுக்கு, நாம் தொகையீடு செய்கிறோம்:)'
        },
        {
            english: '$$ \\vec{R}_{CM} = \\frac{1}{M} \\int \\vec{r} \\,dm $$'
        },
        {
            english: 'The velocity of the center of mass is $\\vec{V}_{CM} = \\frac{\\sum m_i\\vec{v}_i}{M}$. Newton\'s second law for a system is $\\vec{F}_{ext} = M \\vec{A}_{CM}$.',
            tamil: '(நிறை மையத்தின் திசைவேகம் $\\vec{V}_{CM} = \\frac{\\sum m_i\\vec{v}_i}{M}$ ஆகும். ஒரு அமைப்புக்கான நியூட்டனின் இரண்டாம் விதி $\\vec{F}_{ext} = M \\vec{A}_{CM}$ ஆகும்.)'
        },
        {
            english: '### 2. Torque and Angular Momentum',
            tamil: '(திருப்புவிசை மற்றும் கோண உந்தம்)'
        },
        {
            english: '*   **Torque ($\\vec{\\tau}$):** The rotational analogue of force. It is the turning effect of a force.',
            tamil: '*(**திருப்புவிசை ($\\vec{\\tau}$):** விசையின் சுழற்சி ஒப்புமை. இது ஒரு விசையின் சுழற்சி விளைவு ஆகும்.)*'
        },
        {
            english: '$$ \\vec{\\tau} = \\vec{r} \\times \\vec{F} $$',
        },
        {
            english: 'Magnitude: $\\tau = rF \\sin\\theta$. Direction is given by the right-hand rule.',
            tamil: '(எண்மதிப்பு: $\\tau = rF \\sin\\theta$. திசை வலது கை விதியால் கொடுக்கப்படுகிறது.)'
        },
        {
            english: '*   **Angular Momentum ($\\vec{L}$):** The rotational analogue of linear momentum. For a single particle:',
            tamil: '*(**கோண உந்தம் ($\\vec{L}$):** நேர்கோட்டு உந்தத்தின் சுழற்சி ஒப்புமை. ஒரு துகளுக்கு:)*'
        },
        {
            english: '$$ \\vec{L} = \\vec{r} \\times \\vec{p} $$'
        },
        {
            english: 'where $\\vec{p}$ is the linear momentum. Magnitude: $L = rp \\sin\\theta = mvr \\sin\\theta$.',
            tamil: '(இங்கு $\\vec{p}$ என்பது நேர்கோட்டு உந்தம். எண்மதிப்பு: $L = rp \\sin\\theta = mvr \\sin\\theta$.)'
        },
        {
            english: '*   **Rotational Second Law**: The net external torque on a system is equal to the rate of change of its angular momentum.',
            tamil: '*(**சுழற்சிக்கான இரண்டாம் விதி**: ஒரு அமைப்பின் மீதான நிகர வெளிப்புற திருப்புவிசை அதன் கோண உந்தத்தின் மாறுவீதத்திற்கு சமம்.)*'
        },
        {
            english: '$$ \\vec{\\tau}_{ext} = \\frac{d\\vec{L}}{dt} $$'
        },
        {
            english: '### 3. Moment of Inertia and Rotational Dynamics',
            tamil: '(நிலைமத் திருப்புத்திறன் மற்றும் சுழற்சி இயக்கவியல்)'
        },
        {
            english: '*   **Moment of Inertia (I):** The rotational analogue of mass. It is a measure of an object\'s resistance to changes in its rotational motion. It depends not only on the mass but also on how the mass is distributed about the axis of rotation.',
            tamil: '*(**நிலைமத் திருப்புத்திறன் (I):** நிறையின் சுழற்சி ஒப்புமை. இது ஒரு பொருளின் சுழற்சி இயக்கத்தில் ஏற்படும் மாற்றங்களுக்கு அதன் எதிர்ப்பின் அளவீடு ஆகும். இது நிறையை மட்டுமல்லாமல், சுழற்சி அச்சைப் பற்றி நிறை எவ்வாறு விநியோகிக்கப்படுகிறது என்பதையும் சார்ந்துள்ளது.)*'
        },
        {
            english: 'For a system of particles: $I = \\sum m_i r_i^2$. For a rigid body: $I = \\int r^2 \\,dm$.',
            tamil: '(துகள் அமைப்புக்கு: $I = \\sum m_i r_i^2$. திண்மப் பொருளுக்கு: $I = \\int r^2 \\,dm$.)'
        },
        {
            english: '*   **Relationship for a Rigid Body**: For a rigid body rotating about a fixed axis, the torque, moment of inertia, and angular acceleration (α) are related by:',
            tamil: '*(**ஒரு திண்மப் பொருளுக்கான தொடர்பு**: ஒரு நிலையான அச்சைப் பற்றி சுழலும் ஒரு திண்மப் பொருளுக்கு, திருப்புவிசை, நிலைமத் திருப்புத்திறன் மற்றும் கோண முடுக்கம் (α) ஆகியவை பின்வருமாறு தொடர்புடையவை:)*'
        },
        {
            english: '$$ \\tau = I \\alpha $$',
        },
        {
            english: 'This is the rotational analogue of $F=ma$. Similarly, angular momentum is $L = I \\omega$.',
            tamil: '(இது $F=ma$-இன் சுழற்சி ஒப்புமை ஆகும். இதேபோல், கோண உந்தம் $L = I \\omega$ ஆகும்.)'
        },
        {
            english: '#### Theorems of Moment of Inertia:\n1.  **Parallel Axis Theorem**: The moment of inertia (I) about any axis is the sum of the moment of inertia about a parallel axis passing through the center of mass ($I_{CM}$) and the product of the total mass (M) and the square of the distance (d) between the two axes.',
            tamil: '(#### நிலைமத் திருப்புத்திறன் தேற்றங்கள்:\n1.  **இணை அச்சுத் தேற்றம்**: ஏதேனும் ஒரு அச்சைப் பற்றிய நிலைமத் திருப்புத்திறன் (I) என்பது, நிறை மையம் வழியாகச் செல்லும் ஒரு இணை அச்சைப் பற்றிய நிலைமத் திருப்புத்திறன் ($I_{CM}$) மற்றும் மொத்த நிறை (M) மற்றும் இரண்டு அச்சுகளுக்கு இடையிலான தூரத்தின் (d) வர்க்கத்தின் பெருக்கற்பலனின் கூடுதலுக்கு சமம்.)'
        },
        {
            english: '$$ I = I_{CM} + Md^2 $$'
        },
        {
            english: '2.  **Perpendicular Axis Theorem**: For a planar body (lamina), the moment of inertia about an axis perpendicular to its plane ($I_z$) is the sum of the moments of inertia about two perpendicular axes in its plane and intersecting at the point where the perpendicular axis passes through it ($I_x$ and $I_y$).',
            tamil: '(2.  **செங்குத்து அச்சுத் தேற்றம்**: ஒரு தளப் பொருளுக்கு (lamina), அதன் தளத்திற்கு செங்குத்தான ஒரு அச்சைப் பற்றிய நிலைமத் திருப்புத்திறன் ($I_z$) என்பது, அதன் தளத்தில் உள்ள இரண்டு செங்குத்து அச்சுகளைப் பற்றிய நிலைமத் திருப்புத்திறன்களின் கூடுதலுக்கு சமம், அவை செங்குத்து அச்சு அதன் வழியாகச் செல்லும் புள்ளியில் வெட்டுகின்றன ($I_x$ மற்றும் $I_y$).)'
        },
        {
            english: '$$ I_z = I_x + I_y $$'
        },
        {
            english: '### 4. Rolling Motion',
            tamil: '(உருளுதல் இயக்கம்)'
        },
        {
            english: 'Rolling motion is a combination of translational motion and rotational motion. For a body rolling without slipping, the condition is $v_{CM} = R\\omega$.',
            tamil: '(உருளுதல் இயக்கம் என்பது இடப்பெயர்வு இயக்கம் மற்றும் சுழற்சி இயக்கத்தின் கலவையாகும். நழுவாமல் உருளும் ஒரு பொருளுக்கு, நிபந்தனை $v_{CM} = R\\omega$ ஆகும்.)'
        },
        {
            english: 'The total kinetic energy of a rolling body is the sum of its translational and rotational kinetic energies.',
            tamil: '(ஒரு உருளும் பொருளின் மொத்த இயக்க ஆற்றல் அதன் இடப்பெயர்வு மற்றும் சுழற்சி இயக்க ஆற்றல்களின் கூடுதலாகும்.)'
        },
        {
            english: '$$ K_{total} = K_{trans} + K_{rot} = \\frac{1}{2}Mv_{CM}^2 + \\frac{1}{2}I_{CM}\\omega^2 $$'
        },
        {
            english: '### 5. Conservation of Angular Momentum',
            tamil: '(கோண உந்த அழிவின்மை விதி)'
        },
        {
            english: 'If the **net external torque** on a system is zero, its total angular momentum remains constant.',
            tamil: '(ஒரு அமைப்பின் மீதான **நிகர வெளிப்புற திருப்புவிசை** சுழியாக இருந்தால், அதன் மொத்த கோண உந்தம் மாறாமல் இருக்கும்.)'
        },
        {
            english: '$$ \\text{If } \\vec{\\tau}_{ext} = 0, \\text{ then } \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant} $$',
        },
        {
            english: 'This means $L_i = L_f$, or $I_i \\omega_i = I_f \\omega_f$. This principle explains why a spinning ice skater spins faster when she pulls her arms in (moment of inertia \'I\' decreases, so angular velocity \'ω\' must increase).',
            tamil: '(இதன் பொருள் $L_i = L_f$, அல்லது $I_i \\omega_i = I_f \\omega_f$. ஒரு பனிச்சறுக்கு வீரர் தனது கைகளை உள்ளிழுக்கும்போது வேகமாகச் சுற்றுவது ஏன் என்பதை இந்தக் கொள்கை விளக்குகிறது (நிலைமத் திருப்புத்திறன் \'I\' குறைகிறது, எனவே கோண திசைவேகம் \'ω\' அதிகரிக்க வேண்டும்).)'
        },
        {
            english: '{{3D_DIAGRAM_ICE_SKATER}}'
        }
    ],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "I = I_{CM} + Md^2", description: "Parallel Axis Theorem (இணை அச்சுத் தேற்றம்)" },
            { formula: "I_z = I_x + I_y", description: "Perpendicular Axis Theorem (for planar bodies only) (செங்குத்து அச்சுத் தேற்றம் (தளப் பொருட்களுக்கு மட்டும்))" },
            { formula: "\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\vec{\\alpha}", description: "Torque (Rotational analogue of Force) (திருப்புவிசை (விசையின் சுழற்சி ஒப்புமை))" },
            { formula: "\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}", description: "Angular Momentum (Rotational analogue of Momentum) (கோண உந்தம் (உந்தத்தின் சுழற்சி ஒப்புமை))" },
            { formula: "K_{rolling} = \\frac{1}{2}mv^2(1 + \\frac{k^2}{R^2})", description: "Total kinetic energy of a rolling body (ஒரு உருளும் பொருளின் மொத்த இயக்க ஆற்றல்)" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Torque causes angular acceleration.",
        "Moment of Inertia is the resistance to angular acceleration.",
        "If net external torque is zero, the total angular momentum of a system is conserved.",
        "Rolling motion combines translational and rotational kinetic energy."
    ],
    mnemonics: [
        { text: "Remember the linear to rotational analogy: Force -> Torque, Mass -> Moment of Inertia, Momentum -> Angular Momentum.", tamil: "(நேர்கோட்டு-சுழற்சி ஒப்புமையை நினைவில் கொள்க: விசை -> திருப்புவிசை, நிறை -> நிலைமத் திருப்புத்திறன், உந்தம் -> கோண உந்தம்.)" }
    ],
    neetTips: [
        { text: "For rolling on an incline, acceleration `a = g sin(θ) / (1 + I/mR²)`. The object with the smallest I reaches the bottom first (sphere > disk > ring).", tamil: "(சாய்வில் உருளும்போது, முடுக்கம் `a = g sin(θ) / (1 + I/mR²)`. குறைந்த I கொண்ட பொருள் முதலில் அடியை அடையும் (கோளம் > வட்டு > வளையம்).)" },
        { text: "In conservation of angular momentum problems, look for actions that change the mass distribution, like a person walking on a turntable or an ice skater pulling in their arms.", tamil: "(கோண உந்த அழிவின்மை கணக்குகளில், சுழலும் மேடையில் நடப்பது அல்லது கைகளை உள்ளிழுப்பது போன்ற நிறை பரவலை மாற்றும் செயல்களைத் தேடுங்கள்.)" }
    ],
    validationReport: []
};

    