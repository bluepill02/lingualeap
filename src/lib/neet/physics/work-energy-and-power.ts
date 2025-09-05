
import type { NeetModule } from '@/lib/types';

export const workEnergyAndPowerModule: NeetModule = {
    id: 'neet-physics-work-energy-and-power',
    title: 'Physics - Work, Energy and Power (வேலை, ஆற்றல் மற்றும் திறன்)',
    chapter: 'Work, Energy and Power',
    subject: 'Physics',
    learningObjectives: [
        "Define and calculate work done by constant and variable forces.",
        "Understand the relationship between work and kinetic energy through the Work-Energy Theorem.",
        "Differentiate between conservative and non-conservative forces.",
        "Define potential energy and apply the principle of conservation of mechanical energy.",
        "Analyze different types of collisions (elastic and inelastic) using conservation laws.",
        "Define and calculate power as the rate of doing work."
    ],
    prerequisites: [
        "Newton's Laws of Motion.",
        "Kinematic Equations.",
        "Basic vector dot product.",
        "Basic calculus (integration for work done by variable forces)."
    ],
    conceptOverview: "This chapter introduces the fundamental concepts of work, energy, and power, providing an alternative and often simpler approach to solving mechanics problems. Instead of directly dealing with forces and acceleration (a vector approach), the energy method (a scalar approach) allows us to analyze the state of a system at two different points. The Work-Energy Theorem and the Law of Conservation of Energy are two of the most powerful principles in all of physics, simplifying problems that would be incredibly complex using Newton's laws alone.",
    tamilConnection: "ஆற்றல் என்ற கருத்து இல்லாமல் அன்றாட வாழ்க்கையை நினைத்துப் பார்க்க முடியாது. ஒரு கல்லை எறிவதில் இருந்து, அணையில் இருந்து மின்சாரம் தயாரிப்பது வரை, ஆற்றல் மாற்றம் நிகழ்ந்துகொண்டே இருக்கிறது. வேலை, ஆற்றல் மற்றும் திறன் ஆகியவை ஒன்றோடொன்று தொடர்புடையவை. இந்த அத்தியாயம், அந்தத் தொடர்பை அறிவியல் பூர்வமாக விளக்குகிறது.",
    culturalContext: "Think of the traditional 'manjal araikkum kallu' (turmeric grinding stone). The work done by a person is converted into the kinetic energy of the stone and the energy used to grind the turmeric. This is a perfect example of work and energy transfer in a common household activity. This chapter provides the framework to quantify these everyday energy transformations.",
    syllabusMapping: [
         {
            topic: 'Work, Energy, Power, Collisions',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 6: Work, Energy and Power',
            notes: 'Work-Energy Theorem is a very high-yield topic. Questions involving conservation of energy on inclined planes or with springs are frequent. Elastic and inelastic collision problems are also a staple of NEET.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 4 maps to NEET Physics Unit 4'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Work (வேலை)
Work is said to be done by a force when it produces a displacement in the body on which it acts. It is a scalar quantity (ஸ்கேலார் அளவு).`,
            tamil: `### 1. வேலை (Work)
ஒரு விசையானது ஒரு பொருளின் மீது செயல்பட்டு அப்பொருளை இடப்பெயர்ச்சி செய்தால் அவ்விசையால் வேலை செய்யப்பட்டது எனப்படும். இது ஒரு ஸ்கேலார் அளவு ஆகும்.`
        },
        {
            english: `#### Work Done by a Constant Force (மாறா விசையால் செய்யப்பட்ட வேலை)
If a constant force $\\vec{F}$ acts on a body producing a displacement $\\vec{s}$, the work done is the dot product of the force and displacement vectors.
$$
W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta
$$
where $\\theta$ is the angle between the force and displacement vectors.
*   **Positive Work (நேர் வேலை, $\\theta < 90^\\circ$):** Force has a component in the direction of displacement. E.g., Work done by gravity on a falling body.
*   **Negative Work (எதிர் வேலை, $\\theta > 90^\\circ$):** Force has a component opposite to the direction of displacement. E.g., Work done by friction.
*   **Zero Work (சுழி வேலை, $\\theta = 90^\\circ$):** Force is perpendicular to displacement. E.g., Work done by centripetal force in a uniform circular motion.`,
             tamil: `#### மாறா விசையால் செய்யப்பட்ட வேலை (Work Done by a Constant Force)
$\\vec{F}$ என்ற மாறா விசை ஒரு பொருளின் மீது செயல்பட்டு $\\vec{s}$ என்ற இடப்பெயர்ச்சியை ஏற்படுத்தினால், செய்யப்பட்ட வேலை என்பது விசை மற்றும் இடப்பெயர்ச்சி வெக்டர்களின் புள்ளிப் பெருக்கல் ஆகும்.
$$
W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta
$$
இங்கு $\\theta$ என்பது விசை மற்றும் இடப்பெயர்ச்சி வெக்டர்களுக்கு இடையேயான கோணம்.
*   **நேர் வேலை ($\\theta < 90^\\circ$):** விசை, இடப்பெயர்ச்சியின் திசையில் ஒரு கூறைக் கொண்டுள்ளது. எ.கா., கீழே விழும் பொருளின் மீது ஈர்ப்பு விசையால் செய்யப்படும் வேலை.
*   **எதிர் வேலை ($\\theta > 90^\\circ$):** விசை, இடப்பெயர்ச்சியின் திசைக்கு எதிராக ஒரு கூறைக் கொண்டுள்ளது. எ.கா., உராய்வு விசையால் செய்யப்படும் வேலை.
*   **சுழி வேலை ($\\theta = 90^\\circ$):** விசை இடப்பெயர்ச்சிக்கு செங்குத்தாக உள்ளது. எ.கா., சீரான வட்ட இயக்கத்தில் மையநோக்கு விசையால் செய்யப்படும் வேலை.`
        },
        {
            english: `#### Work Done by a Variable Force (மாறும் விசையால் செய்யப்பட்ட வேலை)
If the force is not constant, we find the work done by integrating the force over the path.
$$
W = \\int_{s_i}^{s_f} F(s) \\,ds
$$
Graphically, the work done is the **area under the Force-Displacement (F-s) graph**.`,
            tamil: `#### மாறும் விசையால் செய்யப்பட்ட வேலை (Work Done by a Variable Force)
விசை மாறிலியாக இல்லாவிட்டால், பாதையின் மீது விசையை தொகையீடு செய்வதன் மூலம் செய்யப்பட்ட வேலையைக் காண்கிறோம்.
$$
W = \\int_{s_i}^{s_f} F(s) \\,ds
$$
வரைபட ரீதியாக, செய்யப்பட்ட வேலை என்பது **விசை-இடப்பெயர்ச்சி (F-s) வரைபடத்தின் கீழ் உள்ள பரப்பளவு** ஆகும்.`
        },
        {
            english: `### 2. Energy (ஆற்றல்)
Energy is the capacity to do work. It is a scalar quantity, and its SI unit is the Joule (J).`,
            tamil: `### 2. ஆற்றல் (Energy)
ஆற்றல் என்பது வேலை செய்வதற்கான திறன் ஆகும். இது ஒரு ஸ்கேலார் அளவு, மற்றும் இதன் SI அலகு ஜூல் (J) ஆகும்.`
        },
        {
            english: `#### Kinetic Energy (இயக்க ஆற்றல் - K.E.)
The energy possessed by a body by virtue of its motion.
$$
K.E. = \\frac{1}{2}mv^2
$$
The relationship between kinetic energy and linear momentum (p = mv) is:
$$
K.E. = \\frac{p^2}{2m}
$$`,
            tamil: `#### இயக்க ஆற்றல் (Kinetic Energy - K.E.)
ஒரு பொருள் அதன் இயக்கத்தின் காரணமாகக் கொண்டிருக்கும் ஆற்றல்.
$$
K.E. = \\frac{1}{2}mv^2
$$
இயக்க ஆற்றலுக்கும் நேர்கோட்டு உந்தத்திற்கும் (p = mv) உள்ள தொடர்பு:
$$
K.E. = \\frac{p^2}{2m}
$$`
        },
        {
            english: `#### Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்)
This is one of the most important theorems in mechanics. It states that the **net work done by all forces (conservative and non-conservative) on a body is equal to the change in its kinetic energy.**
$$
W_{net} = \\Delta K.E. = K.E._f - K.E._i
$$`,
            tamil: `#### வேலை-ஆற்றல் தேற்றம் (Work-Energy Theorem)
இது இயக்கவியலின் மிக முக்கியமான தேற்றங்களில் ஒன்றாகும். ஒரு பொருளின் மீது **அனைத்து விசைகளாலும் (ஆற்றல் மாற்றா மற்றும் ஆற்றல் மாற்றும்) செய்யப்பட்ட நிகர வேலை அதன் இயக்க ஆற்றலில் ஏற்படும் மாற்றத்திற்குச் சமம்** என்று இது கூறுகிறது.
$$
W_{நிகர} = \\Delta K.E. = K.E._f - K.E._i
$$`
        },
        {
            english: `#### Potential Energy (நிலை ஆற்றல் - P.E.)
The energy stored in a body by virtue of its position or configuration. It is defined only for **conservative forces (ஆற்றல் மாற்றா விசைகள்)**.
*   **Gravitational Potential Energy (ஈர்ப்பு நிலை ஆற்றல்):** $P.E. = mgh$
*   **Elastic Potential Energy (Spring) (மீட்சி நிலை ஆற்றல் (சுருள்வில்)):** $P.E. = \\frac{1}{2}kx^2$, where k is the spring constant and x is the extension or compression.`,
            tamil: `#### நிலை ஆற்றல் (Potential Energy - P.E.)
ஒரு பொருள் அதன் நிலை அல்லது அமைப்பின் காரணமாக சேமித்து வைத்திருக்கும் ஆற்றல். இது **ஆற்றல் மாற்றா விசைகளுக்கு (conservative forces)** மட்டுமே வரையறுக்கப்படுகிறது.
*   **ஈர்ப்பு நிலை ஆற்றல் (Gravitational Potential Energy):** $P.E. = mgh$
*   **மீட்சி நிலை ஆற்றல் (சுருள்வில்) (Elastic Potential Energy (Spring)):** $P.E. = \\frac{1}{2}kx^2$, இங்கு k என்பது சுருள்வில் மாறிலி மற்றும் x என்பது நீட்சி அல்லது அமுக்கம்.`
        },
        {
            english: `### 3. Conservation of Energy (ஆற்றல் பாதுகாப்பு விதி)
*   **Conservative Force (ஆற்றல் மாற்றா விசை):** A force for which the work done is independent of the path taken and depends only on the initial and final positions. Work done in a closed loop is zero. E.g., Gravitational force, electrostatic force, spring force.
*   **Non-Conservative Force (ஆற்றல் மாற்றும் விசை):** A force for which the work done depends on the path taken. E.g., Friction, air resistance.`,
            tamil: `### 3. ஆற்றல் அழிவின்மை விதி (Conservation of Energy)
*   **ஆற்றல் மாற்றா விசை (Conservative Force):** செய்யப்பட்ட வேலை பாதையைச் சார்ந்து இராமல், தொடக்க மற்றும் இறுதி நிலைகளை மட்டுமே சார்ந்து இருக்கும் ஒரு விசை. ஒரு மூடிய சுற்றில் செய்யப்பட்ட வேலை சுழியாகும். எ.கா., ஈர்ப்பு விசை, நிலைமின்னியல் விசை, சுருள்வில் விசை.
*   **ஆற்றல் மாற்றும் விசை (Non-Conservative Force):** செய்யப்பட்ட வேலை பாதையைச் சார்ந்து இருக்கும் ஒரு விசை. எ.கா., உராய்வு, காற்றுத் தடை.`
        },
        {
            english: `**Law of Conservation of Mechanical Energy (இயந்திர ஆற்றல் அழிவின்மை விதி):**
If **only conservative forces** are doing work on a system, its total mechanical energy (Kinetic + Potential) remains constant.
$$
K.E._i + P.E._i = K.E._f + P.E._f
$$
If non-conservative forces (like friction) are also present, the total energy is not conserved, and the work done by these forces equals the change in total mechanical energy:
$$
W_{nc} = \\Delta K.E. + \\Delta P.E.
$$`,
            tamil: `**இயந்திர ஆற்றல் அழிவின்மை விதி (Law of Conservation of Mechanical Energy):**
ஒரு அமைப்பின் மீது **ஆற்றல் மாற்றா விசைகள் மட்டுமே** வேலை செய்தால், அதன் மொத்த இயந்திர ஆற்றல் (இயக்க + நிலை) மாறாமல் இருக்கும்.
$$
K.E._i + P.E._i = K.E._f + P.E._f
$$
உராய்வு போன்ற ஆற்றல் மாற்றும் விசைகளும் இருந்தால், மொத்த ஆற்றல் பாதுகாக்கப்படாது, மேலும் இந்த விசைகளால் செய்யப்பட்ட வேலை மொத்த இயந்திர ஆற்றலில் ஏற்படும் மாற்றத்திற்குச் சமம்:
$$
W_{nc} = \\Delta K.E. + \\Delta P.E.
$$`
        },
        {
            english: `### 4. Power (திறன்)
Power is the rate at which work is done. It is a scalar quantity.
*   **Average Power (சராசரி திறன்):** $P_{avg} = \\frac{\\text{Total Work Done}}{\\text{Total Time}} = \\frac{W}{t}$
*   **Instantaneous Power (உடனடி திறன்):** $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\frac{d\\vec{s}}{dt} = \\vec{F} \\cdot \\vec{v}$
The SI unit of power is the Watt (W). (1 W = 1 J/s). Another common unit is horsepower (1 hp ≈ 746 W).`,
            tamil: `### 4. திறன் (Power)
திறன் என்பது வேலை செய்யப்படும் வீதம் ஆகும். இது ஒரு ஸ்கேலார் அளவு.
*   **சராசரி திறன் (Average Power):** $P_{avg} = \\frac{\\text{மொத்த வேலை}}{\\text{மொத்த நேரம்}} = \\frac{W}{t}$
*   **உடனடி திறன் (Instantaneous Power):** $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\frac{d\\vec{s}}{dt} = \\vec{F} \\cdot \\vec{v}$
திறனின் SI அலகு வாட் (W) ஆகும். (1 W = 1 J/s). மற்றொரு பொதுவான அலகு குதிரைத்திறன் (1 hp ≈ 746 W) ஆகும்.`
        },
        {
            english: `### 5. Collisions (மோதல்கள்)
A collision is an event in which two or more bodies exert forces on each other for a relatively short time.
*   **Total linear momentum is always conserved** in any collision if there is no external force on the system.
*   **Elastic Collision (மீள் மோதல்):** A collision in which both momentum and kinetic energy are conserved.
*   **Inelastic Collision (மீளாத மோதல்):** A collision in which momentum is conserved, but kinetic energy is not. Some kinetic energy is lost as heat, sound, or deformation. A **perfectly inelastic collision** is one where the objects stick together after the collision.`,
            tamil: `### 5. மோதல்கள் (Collisions)
மோதல் என்பது இரண்டு அல்லது அதற்கு மேற்பட்ட பொருள்கள் ஒப்பீட்டளவில் குறுகிய காலத்திற்கு ஒன்றின் மீது ஒன்று விசைகளைச் செலுத்தும் ஒரு நிகழ்வாகும்.
*   அமைப்பின் மீது வெளிப்புற விசை எதுவும் இல்லை என்றால், எந்தவொரு மோதலிலும் **மொத்த நேர்கோட்டு உந்தம் எப்போதும் பாதுகாக்கப்படுகிறது**.
*   **மீள் மோதல் (Elastic Collision):** உந்தம் மற்றும் இயக்க ஆற்றல் ஆகிய இரண்டும் பாதுகாக்கப்படும் ஒரு மோதல்.
*   **மீளாத மோதல் (Inelastic Collision):** உந்தம் பாதுகாக்கப்படுகிறது, ஆனால் இயக்க ஆற்றல் பாதுகாக்கப்படாத ஒரு மோதல். சில இயக்க ஆற்றல் வெப்பம், ஒலி அல்லது சிதைவாக இழக்கப்படுகிறது. **முற்றிலும் மீளாத மோதல்** என்பது மோதலுக்குப் பிறகு பொருள்கள் ஒன்றாக ஒட்டிக்கொள்ளும் ஒன்றாகும்.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Work-Energy Theorem",
            titleTamil: "நீட் நிலை: வேலை-ஆற்றல் தேற்றம்",
            difficulty: 'Medium',
            problem: "A block of mass 2 kg is dropped from a height of 10 m. What is the work done by the gravitational force and the final velocity of the block just before it hits the ground? (g = 10 m/s²)",
            problemTamil: "2 கிகி நிறையுள்ள ஒரு கட்டை 10 மீ உயரத்திலிருந்து கீழே விடப்படுகிறது. புவியீர்ப்பு விசையால் செய்யப்பட்ட வேலை மற்றும் தரையைத் தொடும் முன் கட்டையின் இறுதி திசைவேகம் என்ன? (g = 10 மீ/வி² எனக் கொள்க)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the work done by gravity. Work = Force × displacement × cos(θ). Here, Force = mg, displacement = h, and the angle θ between force and displacement is 0°.",
                    explanationTamil: "ஈர்ப்பு விசையால் செய்யப்பட்ட வேலையைக் கணக்கிடவும். வேலை = விசை × இடப்பெயர்ச்சி × cos(θ). இங்கு, விசை = mg, இடப்பெயர்ச்சி = h, மற்றும் விசைக்கும் இடப்பெயர்ச்சிக்கும் இடையிலான கோணம் θ = 0°.",
                    calculation: "W_g = (mg) * h * \\cos(0^\\circ) = (2 * 10) * 10 * 1 = 200 J"
                },
                {
                    step: 2,
                    explanation: "Apply the Work-Energy Theorem: W_net = ΔK.E. = K.E_f - K.E_i.",
                    explanationTamil: "வேலை-ஆற்றல் தேற்றத்தைப் பயன்படுத்தவும்: W_net = ΔK.E. = K.E_f - K.E_i."
                },
                {
                    step: 3,
                    explanation: "The only force doing work is gravity, so W_net = W_g. The initial kinetic energy K.E_i is 0 since the block is dropped from rest.",
                    explanationTamil: "இங்கு வேலை செய்யும் ஒரே விசை ஈர்ப்பு விசை மட்டுமே, எனவே W_net = W_g. கட்டை ஓய்விலிருந்து விடப்படுவதால் ஆரம்ப இயக்க ஆற்றல் K.E_i சுழியாகும்.",
                    calculation: "200 = (1/2)mv_f^2 - 0"
                },
                {
                    step: 4,
                    explanation: "Solve for the final velocity v_f.",
                    explanationTamil: "இறுதி திசைவேகம் v_f-ஐக் கண்டறியவும்.",
                    calculation: "200 = \\frac{1}{2} * 2 * v_f^2 \\implies v_f^2 = 200 \\implies v_f = \\sqrt{200} = 10\\sqrt{2} m/s"
                }
            ],
            neetHack: "Work-Energy Theorem is often faster than kinematics for problems involving forces, distances and speeds. If time is not asked, think 'Energy' first!",
            neetHackTamil: "விசைகள், தூரங்கள் மற்றும் வேகங்கள் சம்பந்தப்பட்ட கணக்குகளுக்கு, இயக்கவியலை விட வேலை-ஆற்றல் தேற்றம் பெரும்பாலும் வேகமானது. நேரம் கேட்கப்படவில்லை என்றால், முதலில் 'ஆற்றல்' முறையை சிந்திக்கவும்!",
            commonPitfall: "Forgetting to consider the work done by *all* forces when applying the theorem. If friction were present, W_net would be W_gravity + W_friction.",
            commonPitfallTamil: "தேற்றத்தைப் பயன்படுத்தும்போது *அனைத்து* விசைகளாலும் செய்யப்பட்ட வேலையைக் கருத்தில் கொள்ள மறப்பது. உராய்வு இருந்திருந்தால், W_net = W_ஈர்ப்பு + W_உராய்வு."
        },
        {
            title: "JEE Level: Potential Energy Curves",
            titleTamil: "ஜே.இ.இ நிலை: நிலை ஆற்றல் வளைவுகள்",
            difficulty: 'Hard',
            problem: "The potential energy of a particle is given by U(x) = x³ - 6x² + 5. Find the positions of stable and unstable equilibrium.",
            problemTamil: "ஒரு துகளின் நிலை ஆற்றல் U(x) = x³ - 6x² + 5 என கொடுக்கப்பட்டுள்ளது. நிலையான மற்றும் நிலையற்ற சமநிலை நிலைகளைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Equilibrium occurs where the net force on the particle is zero. The force is related to potential energy by F = -dU/dx.",
                    explanationTamil: "துகள் மீதான நிகர விசை சுழியாக இருக்கும் இடத்தில் சமநிலை ஏற்படுகிறது. விசை மற்றும் நிலை ஆற்றல் தொடர்பு: F = -dU/dx."
                },
                {
                    step: 2,
                    explanation: "Set F = 0 to find the equilibrium positions.",
                    explanationTamil: "சமநிலை நிலைகளைக் கண்டறிய F = 0 என அமைக்கவும்.",
                    calculation: "F = -(3x^2 - 12x) = 12x - 3x^2. \\implies 12x - 3x^2 = 0 \\implies 3x(4 - x) = 0 \\implies x = 0, x = 4"
                },
                {
                    step: 3,
                    explanation: "To determine stability, check the second derivative of the potential energy, d²U/dx². If d²U/dx² > 0, it's stable equilibrium. If d²U/dx² < 0, it's unstable equilibrium.",
                    explanationTamil: "நிலைப்புத்தன்மையை தீர்மானிக்க, நிலை ஆற்றலின் இரண்டாம் வகைக்கெழுவை, d²U/dx²-ஐ சரிபார்க்கவும். d²U/dx² > 0 எனில், அது நிலையான சமநிலை. d²U/dx² < 0 எனில், அது நிலையற்ற சமநிலை.",
                    calculation: "\\frac{d^2U}{dx^2} = \\frac{d}{dx}(3x^2 - 12x) = 6x - 12"
                },
                {
                    step: 4,
                    explanation: "Evaluate d²U/dx² at the equilibrium points. At x=0: d²U/dx² = 6(0) - 12 = -12 (Unstable). At x=4: d²U/dx² = 6(4) - 12 = 12 (Stable).",
                    explanationTamil: "சமநிலை புள்ளிகளில் d²U/dx²-ஐ மதிப்பிடவும். x=0 இல்: d²U/dx² = -12 (நிலையற்றது). x=4 இல்: d²U/dx² = 12 (நிலையானது)."
                }
            ],
            neetHack: "On a U-x graph, a 'valley' (minimum) is a point of stable equilibrium, and a 'hill' (maximum) is a point of unstable equilibrium.",
            neetHackTamil: "ஒரு U-x வரைபடத்தில், ஒரு 'பள்ளத்தாக்கு' (குறைந்தபட்சம்) ஒரு நிலையான சமநிலை புள்ளி, மற்றும் ஒரு 'குன்று' (அதிகபட்சம்) ஒரு நிலையற்ற சமநிலை புள்ளி."
        },
        {
            title: "NEET Level: Elastic Collision",
            titleTamil: "நீட் நிலை: மீள் மோதல்",
            difficulty: 'Medium',
            problem: "A block of mass m₁ = 2kg slides on a frictionless track and collides elastically with a stationary block of mass m₂ = 8kg. After the collision, what fraction of the initial kinetic energy is transferred to the second block?",
            problemTamil: "m₁ = 2kg நிறையுள்ள ஒரு கட்டை உராய்வற்ற தடத்தில் சறுக்கி, m₂ = 8kg நிறையுள்ள நிலையான கட்டையுடன் மீள் மோதலில் ஈடுபடுகிறது. மோதலுக்குப் பிறகு, ஆரம்ப இயக்க ஆற்றலின் எந்தப் பின்னம் இரண்டாவது கட்டைக்கு மாற்றப்படுகிறது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Recall the formula for final velocity of the target (m₂) in a 1D elastic collision when it is initially at rest: v₂' = (2m₁ / (m₁ + m₂)) * v₁.",
                    explanationTamil: "ஆரம்பத்தில் ஓய்வில் உள்ள இலக்கின் (m₂) இறுதி திசைவேகத்திற்கான சூத்திரத்தை நினைவுகூர்க: v₂' = (2m₁ / (m₁ + m₂)) * v₁."
                },
                {
                    step: 2,
                    explanation: "Calculate the final velocity of the second block in terms of the initial velocity of the first block.",
                    explanationTamil: "முதல் கட்டையின் ஆரம்ப திசைவேகத்தின் அடிப்படையில் இரண்டாவது கட்டையின் இறுதி திசைவேகத்தைக் கணக்கிடவும்.",
                    calculation: "v_2' = (\\frac{2m_1}{m_1 + m_2}) v_1 = (\\frac{2 \\times 2}{2 + 8}) v_1 = \\frac{4}{10} v_1 = 0.4v_1"
                },
                {
                    step: 3,
                    explanation: "Calculate the initial kinetic energy (K.E₁) and the final kinetic energy of the second block (K.E₂').",
                    explanationTamil: "ஆரம்ப இயக்க ஆற்றல் (K.E₁) மற்றும் இரண்டாவது கட்டையின் இறுதி இயக்க ஆற்றல் (K.E₂') ஆகியவற்றைக் கணக்கிடவும்.",
                    calculation: "K.E_1 = \\frac{1}{2}m_1v_1^2 = \\frac{1}{2}(2)v_1^2 = v_1^2. \\\\ K.E_2' = \\frac{1}{2}m_2(v_2')^2 = \\frac{1}{2}(8)(0.4v_1)^2 = 4 \\times 0.16v_1^2 = 0.64v_1^2"
                },
                {
                    step: 4,
                    explanation: "Find the fraction of energy transferred by calculating the ratio K.E₂' / K.E₁.",
                    explanationTamil: "K.E₂' / K.E₁ என்ற விகிதத்தைக் கணக்கிடுவதன் மூலம் மாற்றப்பட்ட ஆற்றலின் பின்னத்தைக் கண்டறியவும்.",
                    calculation: "Fraction = \\frac{0.64v_1^2}{v_1^2} = 0.64"
                }
            ],
            neetHack: "The fraction of kinetic energy transferred in a 1D elastic collision from a projectile of mass m₁ to a stationary target of mass m₂ is given by (4m₁m₂) / (m₁ + m₂)². Memorizing this can save a lot of steps.",
            neetHackTamil: "ஒரு 1D மீள் மோதலில், m₁ நிறையுள்ள ஒரு எறிபொருளிலிருந்து m₂ நிறையுள்ள ஒரு நிலையான இலக்குக்கு மாற்றப்படும் இயக்க ஆற்றலின் பின்னம் (4m₁m₂) / (m₁ + m₂)². இதை மனப்பாடம் செய்வது பல படிகளை மிச்சப்படுத்தும்."
        },
        {
            title: "JEE Level: Power Delivered by a Variable Force",
            titleTamil: "ஜே.இ.இ நிலை: மாறும் விசையால் வழங்கப்படும் திறன்",
            difficulty: 'Hard',
            problem: "A particle of mass m is driven by a machine that delivers a constant power k watts. If the particle starts from rest, find the force on the particle at time t.",
            problemTamil: "m நிறையுள்ள ஒரு துகள், k வாட்ஸ் மாறா திறனை வழங்கும் ஒரு இயந்திரத்தால் இயக்கப்படுகிறது. துகள் ஓய்விலிருந்து தொடங்கினால், நேரம் t இல் துகள் மீதான விசையைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Start with the definition of power: P = Fv = k (constant).",
                    explanationTamil: "திறனின் வரையறையுடன் தொடங்கவும்: P = Fv = k (மாறிலி)."
                },
                {
                    step: 2,
                    explanation: "Express Force F as ma = m(dv/dt).",
                    explanationTamil: "விசையை F = ma = m(dv/dt) என எழுதவும்.",
                    calculation: "m(\\frac{dv}{dt}) \\cdot v = k"
                },
                {
                    step: 3,
                    explanation: "Separate the variables (v and t) and integrate both sides. m∫v dv = k∫dt.",
                    explanationTamil: "மாறிகளை (v மற்றும் t) பிரித்து இருபுறமும் தொகையீடு செய்யவும். m∫v dv = k∫dt.",
                    calculation: "m(\\frac{v^2}{2}) = kt \\implies v = \\sqrt{\\frac{2kt}{m}}"
                },
                {
                    step: 4,
                    explanation: "Now that we have velocity as a function of time, find the force F = k/v.",
                    explanationTamil: "இப்போது நம்மிடம் நேரத்தின் சார்பாக திசைவேகம் இருப்பதால், விசை F = k/v ஐக் கண்டறியவும்.",
                    calculation: "F = \\frac{k}{\\sqrt{2kt/m}} = \\sqrt{\\frac{k^2m}{2kt}} = \\sqrt{\\frac{mk}{2t}}"
                }
            ],
            neetHack: "For constant power, remember these proportionalities: v ∝ t¹/², and since a = dv/dt, a ∝ t⁻¹/². Also, displacement x ∝ t³/².",
            neetHackTamil: "மாறா திறனுக்கு, இந்த விகிதாசாரங்களை நினைவில் கொள்க: v ∝ t¹/², மற்றும் a = dv/dt என்பதால், a ∝ t⁻¹/². மேலும், இடப்பெயர்ச்சி x ∝ t³/²."
        },
        {
            title: "NEET Level: Conservation of Energy with a Spring",
            titleTamil: "நீட் நிலை: சுருள்வில்லுடன் ஆற்றல் அழிவின்மை",
            difficulty: 'Medium',
            problem: "A block of mass 2 kg is dropped from a height of 40 cm onto a spring of spring constant 1960 N/m. Find the maximum distance the spring is compressed.",
            problemTamil: "2 கிகி நிறையுள்ள ஒரு கட்டை, 1960 N/m சுருள்வில் மாறிலி கொண்ட ஒரு சுருள்வில் மீது 40 செ.மீ உயரத்திலிருந்து விழுகிறது. சுருள்வில் அமுக்கப்பட்ட பெரும தூரத்தைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Apply the principle of conservation of mechanical energy. The initial total energy (potential energy of the block) equals the final total energy (potential energy of the spring). Let the maximum compression be x.",
                    explanationTamil: "இயந்திர ஆற்றல் அழிவின்மை விதியைப் பயன்படுத்தவும். ஆரம்ப மொத்த ஆற்றல் (கட்டையின் நிலை ஆற்றல்) இறுதி மொத்த ஆற்றலுக்கு (சுருள்வில்லின் நிலை ஆற்றல்) சமம். பெரும அமுக்கம் x ஆக இருக்கட்டும்."
                },
                {
                    step: 2,
                    explanation: "The total height the block falls is h + x. So, the loss in gravitational potential energy is mg(h+x). This is converted into the potential energy stored in the spring, (1/2)kx².",
                    explanationTamil: "கட்டை விழும் மொத்த உயரம் h + x. எனவே, ஈர்ப்பு நிலை ஆற்றலில் ஏற்படும் இழப்பு mg(h+x). இது சுருள்வில்லில் சேமிக்கப்பட்ட நிலை ஆற்றலாக, (1/2)kx², மாற்றப்படுகிறது."
                },
                {
                    step: 3,
                    explanation: "Set up the energy conservation equation. Convert all units to SI (h=0.4 m).",
                    explanationTamil: "ஆற்றல் அழிவின்மை சமன்பாட்டை அமைக்கவும். அனைத்து அலகுகளையும் SI ஆக மாற்றவும் (h=0.4 m).",
                    calculation: "mg(h+x) = \\frac{1}{2}kx^2 \\implies (2)(9.8)(0.4+x) = \\frac{1}{2}(1960)x^2"
                },
                {
                    step: 4,
                    explanation: "Simplify the equation into a quadratic form.",
                    explanationTamil: "சமன்பாட்டை ஒரு இருபடி வடிவத்தில் எளிதாக்கவும்.",
                    calculation: "19.6(0.4+x) = 980x^2 \\implies 7.84 + 19.6x = 980x^2 \\implies 980x^2 - 19.6x - 7.84 = 0"
                },
                {
                    step: 5,
                    explanation: "To simplify, divide by 9.8.  100x² - 2x - 0.8 = 0 or 1000x² - 20x - 8 = 0 => 125x² - 2.5x - 1 = 0. Solving this quadratic equation (using the quadratic formula) gives x ≈ 0.1 m or 10 cm. (The negative root is ignored).",
                    explanationTamil: "எளிதாக்க, 9.8 ஆல் வகுக்கவும். 100x² - 2x - 0.8 = 0 அல்லது 1000x² - 20x - 8 = 0 => 125x² - 2.5x - 1 = 0. இந்த இருபடி சமன்பாட்டைத் தீர்ப்பது (இருபடி சூத்திரத்தைப் பயன்படுத்தி) x ≈ 0.1 மீ அல்லது 10 செ.மீ தருகிறது. (எதிர்மறை மூலம் புறக்கணிக்கப்படுகிறது)."
                }
            ],
            commonPitfall: "A common mistake is to write mg*h = (1/2)kx². This ignores the extra distance 'x' the block falls while compressing the spring, during which gravity is still doing work.",
            commonPitfallTamil: "ஒரு பொதுவான தவறு mg*h = (1/2)kx² என எழுதுவது. இது சுருள்வில்லை அமுக்கும்போது கட்டை விழும் கூடுதல் தூரம் 'x'-ஐப் புறக்கணிக்கிறது, அந்த நேரத்தில் ஈர்ப்பு விசை இன்னும் வேலை செய்கிறது."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta", description: "Work done by a constant force", descriptionTamil: "மாறா விசையால் செய்யப்பட்ட வேலை" },
            { formula: "K.E. = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}", description: "Kinetic Energy and its relation to momentum", descriptionTamil: "இயக்க ஆற்றல் மற்றும் அதன் உந்தத்துடனான தொடர்பு" },
            { formula: "W_{net} = \\Delta K.E.", description: "Work-Energy Theorem", descriptionTamil: "வேலை-ஆற்றல் தேற்றம்" },
            { formula: "P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v}", description: "Power definition and instantaneous power", descriptionTamil: "திறன் வரையறை மற்றும் உடனடி திறன்" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Work is energy transfer via a force.",
        "The Work-Energy Theorem connects the net work done to the change in kinetic energy.",
        "Mechanical energy is conserved only when all acting forces are conservative.",
        "Power is the rate of energy transfer."
    ],
    mnemonics: [
        { text: "Remember 'CON'servative forces 'CON'serve energy. Friction is a 'NON'-CONservative force.", tamil: "பாதுகாப்பு (Conservative) விசைகள் ஆற்றலைப் பாதுகாக்கும். உராய்வு ஒரு பாதுகாப்பற்ற (Non-Conservative) விசை." }
    ],
    neetTips: [
        { text: "For collision problems, momentum is ALWAYS conserved (if no external force). Start there!", tamil: "மோதல் கணக்குகளில், புற விசை இல்லை என்றால், உந்தம் எப்போதும் மாறாது. அங்கிருந்து தொடங்குங்கள்!" },
        { text: "Work done by centripetal force is always zero. This is a favorite trick question.", tamil: "மையநோக்கு விசையால் செய்யப்படும் வேலை எப்போதும் சுழி. இது ஒரு விரும்பப்படும் தந்திரமான கேள்வி." }
    ],
     nextChapter: {
        title: "System of Particles and Rotational Motion",
        titleTamil: "துகள் அமைப்புகள் மற்றும் சுழற்சி இயக்கம்"
    },
    studentTip: {
        english: "Energy conservation is one of the most powerful tools in physics. Before starting a problem, always ask yourself: 'Is mechanical energy conserved here? Why or why not?' This will guide your entire approach.",
        tamil: "இயற்பியலில் ஆற்றல் அழிவின்மை மிக சக்திவாய்ந்த கருவிகளில் ஒன்றாகும். ஒரு கணக்கைத் தொடங்குவதற்கு முன், எப்போதும் உங்களைக் கேட்டுக்கொள்ளுங்கள்: 'இங்கு இயந்திர ஆற்றல் பாதுகாக்கப்படுகிறதா? ஏன் அல்லது ஏன் இல்லை?' இது உங்கள் முழு அணுகுமுறைக்கும் வழிகாட்டும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend the difference between an elastic and inelastic collision using real-world examples. For instance, is a bouncing superball perfectly elastic? Is a car crash perfectly inelastic? Why?",
        tamil: "உங்கள் நண்பருடன், நிஜ உலக உதாரணங்களைப் பயன்படுத்தி மீள் மற்றும் மீளாத மோதல்களுக்கு இடையிலான வேறுபாட்டைப் பற்றி விவாதிக்கவும். உதாரணமாக, துள்ளும் ஒரு சூப்பர்பால் முற்றிலும் மீள் தன்மையுடையதா? ஒரு கார் விபத்து முற்றிலும் மீளாத மோதலா? ஏன்?"
    },
    mcqs: [
        {
            question: "A man pushes a wall and fails to displace it. He does:",
            options: ["A. Negative work", "B. Positive but not maximum work", "C. No work at all", "D. Maximum work"],
            answer: "C. No work at all",
            explanation: "Work is defined as Force × Displacement. Since the displacement is zero, the work done is zero, no matter how much force is applied.",
            neetFrequency: 3
        },
        {
            question: "If the kinetic energy of a body is doubled, its momentum will be:",
            options: ["A. Doubled", "B. Halved", "C. \\sqrt{2} times the original", "D. Unchanged"],
            answer: "C. \\sqrt{2} times the original",
            explanation: "Momentum p = \\sqrt{2mK}. If K' = 2K, then p' = \\sqrt{2m(2K)} = \\sqrt{2} * \\sqrt{2mK} = \\sqrt{2} * p.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a non-conservative force?",
            options: ["A. Gravitational force", "B. Electrostatic force", "C. Frictional force", "D. Spring force"],
            answer: "C. Frictional force",
            explanation: "Work done by friction depends on the path taken and energy is dissipated as heat, so it is a non-conservative force.",
            neetFrequency: 5
        },
        {
            question: "A body of mass 5 kg is moving with a momentum of 10 kg m/s. A force of 0.2 N acts on it in the direction of motion for 10 s. The increase in its kinetic energy is:",
            options: ["A. 2.8 J", "B. 3.2 J", "C. 4.4 J", "D. 8.8 J"],
            answer: "C. 4.4 J",
            explanation: "Initial momentum p1=10. Initial K.E = p1²/2m = 100/10 = 10 J. Impulse = F*t = 0.2 * 10 = 2 Ns. Final momentum p2 = p1 + Impulse = 12. Final K.E = p2²/2m = 144/10 = 14.4 J. Increase in K.E = 14.4 - 10 = 4.4 J.",
            neetFrequency: 4
        },
        {
            question: "Power required to lift a mass of 100 kg to a height of 50 m in 10 seconds is (g = 9.8 m/s²):",
            options: ["A. 4.9 kW", "B. 49 kW", "C. 0.49 kW", "D. 490 kW"],
            answer: "A. 4.9 kW",
            explanation: "Work done W = mgh = 100 * 9.8 * 50 = 49000 J. Power P = W/t = 49000 J / 10 s = 4900 W = 4.9 kW.",
            neetFrequency: 3
        },
        { question: "Work done is a:", options: ["A. Scalar", "B. Vector", "C. Tensor", "D. Sometimes scalar, sometimes vector"], answer: "A. Scalar", explanation: "Work is the dot product of two vectors (Force and Displacement), which results in a scalar quantity.", neetFrequency: 1 },
        { question: "In a perfectly inelastic collision, which of the following is conserved?", options: ["A. Only Kinetic Energy", "B. Only Momentum", "C. Both Momentum and Kinetic Energy", "D. Neither Momentum nor Kinetic Energy"], answer: "B. Only Momentum", explanation: "In any collision without external forces, momentum is conserved. In a perfectly inelastic collision, kinetic energy is lost.", neetFrequency: 4 },
        { question: "A spring of force constant 800 N/m has an extension of 5 cm. The work done in extending it from 5 cm to 15 cm is:", options: ["A. 16 J", "B. 8 J", "C. 32 J", "D. 24 J"], answer: "B. 8 J", explanation: "Work done = Change in P.E. = (1/2)k(x₂² - x₁²) = (1/2) * 800 * (0.15² - 0.05²) = 400 * (0.0225 - 0.0025) = 400 * 0.02 = 8 J.", neetFrequency: 5 },
        { question: "Two bodies of masses m and 4m are moving with equal kinetic energies. The ratio of their linear momenta is:", options: ["A. 1:1", "B. 1:2", "C. 1:4", "D. 4:1"], answer: "B. 1:2", explanation: "Since p = \\sqrt{2mK}, the ratio p₁/p₂ = \\sqrt{2mK} / \\sqrt{2(4m)K} = \\sqrt{m} / \\sqrt{4m} = 1/2.", neetFrequency: 4 },
        { question: "A particle moves under a force F = kx (k is a positive constant). The work done in displacing it from x=0 to x=d is:", options: ["A. kd", "B. kd²/2", "C. kd²", "D. k²d"], answer: "B. kd²/2", explanation: "Work done by a variable force is W = ∫F dx = ∫₀ᵈ kx dx = k[x²/2] from 0 to d = kd²/2.", neetFrequency: 3 },
        { question: "The work done by a centripetal force in a uniform circular motion is:", options: ["A. Positive", "B. Negative", "C. Zero", "D. Depends on the radius"], answer: "C. Zero", explanation: "The centripetal force is always perpendicular to the direction of displacement (which is tangential). Since θ=90°, W = Fs cos(90°) = 0.", neetFrequency: 2 },
        { question: "If the momentum of a body is increased by 50%, its kinetic energy will increase by:", options: ["A. 50%", "B. 100%", "C. 125%", "D. 150%"], answer: "C. 125%", explanation: "New momentum p' = 1.5p. New K.E' = (p')²/2m = (1.5p)²/2m = 2.25 * (p²/2m) = 2.25 * K.E. The increase is 1.25 * K.E, which is a 125% increase.", neetFrequency: 5 },
        { question: "An engine pumps water continuously through a hose. Water leaves the hose with a velocity v and m is the mass per unit length of the water jet. What is the rate at which kinetic energy is imparted to water?", options: ["A. (1/2)mv²", "B. (1/2)mv³", "C. mv³", "D. mv²"], answer: "B. (1/2)mv³", explanation: "Mass flowing per second = m*v. K.E. imparted per second (Power) = (1/2)(mass/sec)v² = (1/2)(mv)v² = (1/2)mv³.", neetFrequency: 3 },
        { question: "One kilowatt-hour (kWh) is equal to:", options: ["A. 3.6 x 10³ J", "B. 3.6 x 10⁵ J", "C. 3.6 x 10⁶ J", "D. 3.6 x 10⁷ J"], answer: "C. 3.6 x 10⁶ J", explanation: "1 kWh = 1000 W * 3600 s = 3,600,000 J = 3.6 x 10⁶ J.", neetFrequency: 1 },
        { question: "A force F = (5i + 3j) N displaces a body by s = (2i - j) m. The work done is:", options: ["A. 7 J", "B. 13 J", "C. 10 J", "D. 3 J"], answer: "A. 7 J", explanation: "Work W = F · s = (5)(2) + (3)(-1) = 10 - 3 = 7 J.", neetFrequency: 2 },
        { question: "The potential energy of a system increases if work is done:", options: ["A. By the system against a conservative force", "B. By the system against a non-conservative force", "C. Upon the system by a conservative force", "D. Upon the system by a non-conservative force"], answer: "A. By the system against a conservative force", explanation: "Change in potential energy is defined as the negative of the work done by the conservative force. So, ΔU = -W_c. If the system does work against this force (e.g., lifting an object against gravity), its P.E. increases.", neetFrequency: 4 },
        { question: "When a body moves with a constant speed along a circle:", options: ["A. No work is done on it", "B. No force acts on it", "C. Its acceleration is zero", "D. Its velocity remains constant"], answer: "A. No work is done on it", explanation: "A centripetal force acts, but it is always perpendicular to the displacement, so the work done is zero.", neetFrequency: 3 },
        { question: "A bullet of mass m hits a block of mass M and gets embedded in it. The loss in kinetic energy is:", options: ["A. (1/2)Mv²", "B. (1/2)mv²", "C. (1/2)(M-m)v²", "D. (mM / 2(M+m))v²"], answer: "D. (mM / 2(M+m))v²", explanation: "This is a standard result for a perfectly inelastic collision. The loss in K.E is K.E_initial - K.E_final = (1/2)mv² - (1/2)(m+M)V_final². By conservation of momentum, V_final = mv/(m+M). Substituting this gives the result.", neetFrequency: 3 },
        { question: "The slope of the kinetic energy vs. position graph gives:", options: ["A. Force", "B. Momentum", "C. Power", "D. Acceleration"], answer: "A. Force", explanation: "From W = ΔK.E = F·Δx, we can write F = d(K.E)/dx. So, the slope of the K.E-x graph gives the force.", neetFrequency: 1 },
        { question: "A light body and a heavy body have the same momentum. Which one will have greater kinetic energy?", options: ["A. The light body", "B. The heavy body", "C. Both have same K.E.", "D. Data is incomplete"], answer: "A. The light body", explanation: "K.E = p²/2m. Since momentum p is the same, K.E is inversely proportional to mass m. The lighter body (smaller m) will have greater kinetic energy.", neetFrequency: 5 },
        { question: "The work-energy theorem is valid for:", options: ["A. Conservative forces only", "B. Non-conservative forces only", "C. Both conservative and non-conservative forces", "D. Elastic forces only"], answer: "C. Both conservative and non-conservative forces", explanation: "The theorem states that the work done by the *net* force (which includes all types of forces) equals the change in K.E.", neetFrequency: 2 },
        { question: "In an elastic collision of two particles, the following is conserved:", options: ["A. Speed of each particle", "B. Kinetic energy of each particle", "C. Total kinetic energy of the system", "D. Total potential energy of the system"], answer: "C. Total kinetic energy of the system", explanation: "In an elastic collision, the total kinetic energy of the system is conserved, but the kinetic energy of individual particles can change.", neetFrequency: 4 },
        { question: "A pump is used to lift 500 kg of water from a depth of 80 m in 10 s. The power of the pump is (g=10 m/s²):", options: ["A. 40 kW", "B. 4 kW", "C. 400 kW", "D. 0.4 kW"], answer: "A. 40 kW", explanation: "Work W = mgh = 500 * 10 * 80 = 400000 J. Power P = W/t = 400000 / 10 = 40000 W = 40 kW.", neetFrequency: 3 },
        { question: "If the velocity of a body is halved, its kinetic energy becomes:", options: ["A. Half", "B. Double", "C. One-fourth", "D. Four times"], answer: "C. One-fourth", explanation: "K.E ∝ v². If v becomes v/2, K.E' becomes (v/2)² = v²/4, which is one-fourth of the original.", neetFrequency: 1 },
        { question: "What is the work done in holding a 15 kg suitcase while waiting for a bus for 15 minutes?", options: ["A. 225 J", "B. 1500 J", "C. 15 J", "D. 0 J"], answer: "D. 0 J", explanation: "Although holding the suitcase requires muscular effort, there is no displacement in the direction of the force. So, the work done in the physics sense is zero.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "When a body is moving up at a constant velocity, the net work done on it is zero.",
            reason: "For constant velocity, the net force on the body is zero.",
            answer: "A",
            explanation: "Reason is correct (F_net = ma = 0 for constant v). Assertion is also correct because according to the Work-Energy theorem, W_net = ΔK.E. For constant velocity, ΔK.E = 0. The reason correctly explains the assertion."
        },
        {
            assertion: "The work done by friction is always negative.",
            reason: "Frictional force is always opposite to the direction of motion.",
            answer: "A",
            explanation: "Assertion and Reason are both true. The angle between frictional force and displacement is 180°, and cos(180°) = -1, making the work done negative. The reason is the correct explanation."
        },
        {
            assertion: "In a one-dimensional elastic collision between two identical bodies, their velocities are exchanged.",
            reason: "In any elastic collision, both linear momentum and kinetic energy are conserved.",
            answer: "B",
            explanation: "Both assertion and reason are true statements. However, the reason (general conservation laws) does not exclusively lead to the specific outcome of velocity exchange; one must solve the conservation equations to prove it. So, it's not the direct explanation for the specific phenomenon."
        },
        {
            assertion: "A body can have energy without having momentum.",
            reason: "A body at rest can have potential energy, but its momentum is zero.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is a perfect example explaining the assertion. A book on a high shelf has potential energy but zero momentum."
        },
        {
            assertion: "The rate of change of total momentum of a many-particle system is proportional to the sum of the external forces on the system.",
            reason: "Internal forces can change the kinetic energy but not the total momentum of the system.",
            answer: "B",
            explanation: "Both statements are true. The first is the definition of Newton's second law for a system of particles. The second is also true (internal forces occur in action-reaction pairs, so their vector sum is zero). However, the reason is not the direct explanation of the assertion, but rather a related concept."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Work-Energy Theorem", "(b) Conservative Force", "(c) Inelastic Collision", "(d) Power"],
            column2: ["(p) Kinetic energy not conserved", "(q) Rate of doing work", "(r) Work done independent of path", "(s) `W_{net} = \\Delta K.E.`"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching the terms with their correct definitions or associated principles."
        },
        {
            column1: ["(a) Kinetic Energy", "(b) Potential Energy", "(c) Work", "(d) Momentum"],
            column2: ["(p) `[MLT⁻²]`", "(q) `[ML²T⁻²]`", "(r) `[MLT⁻¹]`", "(s) Stored energy"],
            answer: "a-q, b-q,s; c-q; d-r",
            explanation: "K.E., P.E., and Work all share the dimension of energy [ML²T⁻²]. P.E. is specifically stored energy. Momentum has dimensions [MLT⁻¹]."
        },
        {
            column1: ["(a) Elastic Collision", "(b) Perfectly Inelastic Collision", "(c) Explosion", "(d) Frictional force"],
            column2: ["(p) Momentum conserved", "(q) Kinetic Energy conserved", "(r) Objects stick together", "(s) Energy dissipated"],
            answer: "a-p,q; b-p,r; c-p; d-s",
            explanation: "Momentum is conserved in all these interactions (assuming no external force). K.E. is conserved only in elastic collisions. Objects stick together in perfectly inelastic collisions. Friction dissipates energy."
        },
        {
            column1: ["(a) Unit of Power", "(b) Unit of Energy", "(c) Unit of Force", "(d) Unit of Momentum"],
            column2: ["(p) Joule", "(q) Watt", "(r) Newton", "(s) kg·m/s"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Matching the physical quantities with their standard SI units."
        },
        {
            column1: ["(a) Positive Work", "(b) Negative Work", "(c) Zero Work", "(d) 1 Horsepower"],
            column2: ["(p) Force perpendicular to displacement", "(q) Angle between F and s is 180°", "(r) Angle between F and s is 0°", "(s) 746 Watts"],
            answer: "a-r, b-q, c-p, d-s",
            explanation: "Positive work is done when force is in the direction of displacement. Negative work when opposite. Zero work when perpendicular. 1 hp is approximately 746 W."
        }
    ]
}
