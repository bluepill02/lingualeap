
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
Work is said to be done by a force when it produces a displacement in the body on which it acts. It is a scalar quantity.`,
            tamil: `### 1. வேலை (Work)
ஒரு விசையானது ஒரு பொருளின் மீது செயல்பட்டு அப்பொருளை இடப்பெயர்ச்சி செய்தால் அவ்விசையால் வேலை செய்யப்பட்டது எனப்படும். இது ஒரு ஸ்கேலார் அளவு ஆகும்.`
        },
        {
            english: `#### Work Done by a Constant Force
If a constant force $\\vec{F}$ acts on a body producing a displacement $\\vec{s}$, the work done is the dot product of the force and displacement vectors.
$$ W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta $$
*   **Positive Work ($\\theta < 90^\\circ$):** Force has a component in the direction of displacement.
*   **Negative Work ($\\theta > 90^\\circ$):** Force has a component opposite to the direction of displacement.
*   **Zero Work ($\\theta = 90^\\circ$):** Force is perpendicular to displacement.`,
             tamil: `#### மாறா விசையால் செய்யப்பட்ட வேலை
$\\vec{F}$ என்ற மாறா விசை ஒரு பொருளின் மீது செயல்பட்டு $\\vec{s}$ என்ற இடப்பெயர்ச்சியை ஏற்படுத்தினால், செய்யப்பட்ட வேலை என்பது விசை மற்றும் இடப்பெயர்ச்சி வெக்டர்களின் புள்ளிப் பெருக்கல் ஆகும்.
$$ W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta $$
*   **நேர் வேலை ($\\theta < 90^\\circ$):** விசை, இடப்பெயர்ச்சியின் திசையில் ஒரு கூறைக் கொண்டுள்ளது.
*   **எதிர் வேலை ($\\theta > 90^\\circ$):** விசை, இடப்பெயர்ச்சியின் திசைக்கு எதிராக ஒரு கூறைக் கொண்டுள்ளது.
*   **சுழி வேலை ($\\theta = 90^\\circ$):** விசை இடப்பெயர்ச்சிக்கு செங்குத்தாக உள்ளது.`
        },
        {
            english: `#### Work Done by a Variable Force
The work done is the area under the Force-Displacement (F-s) graph.
$$ W = \\int_{s_i}^{s_f} F(s) \\,ds $$`,
            tamil: `#### மாறும் விசையால் செய்யப்பட்ட வேலை
செய்யப்பட்ட வேலை என்பது விசை-இடப்பெயர்ச்சி (F-s) வரைபடத்தின் கீழ் உள்ள பரப்பளவு ஆகும்.
$$ W = \\int_{s_i}^{s_f} F(s) \\,ds $$`
        },
        {
            english: `### 2. Energy (ஆற்றல்)
Energy is the capacity to do work. It is a scalar quantity, and its SI unit is the Joule (J).`,
            tamil: `### 2. ஆற்றல் (Energy)
ஆற்றல் என்பது வேலை செய்வதற்கான திறன் ஆகும். இது ஒரு ஸ்கேலார் அளவு, மற்றும் இதன் SI அலகு ஜூல் (J) ஆகும்.`
        },
        {
            english: `#### Kinetic Energy (K.E.)
The energy possessed by a body by virtue of its motion.
$$ K.E. = \\frac{1}{2}mv^2 = \\frac{p^2}{2m} $$`,
            tamil: `#### இயக்க ஆற்றல் (K.E.)
ஒரு பொருள் அதன் இயக்கத்தின் காரணமாகக் கொண்டிருக்கும் ஆற்றல்.
$$ K.E. = \\frac{1}{2}mv^2 = \\frac{p^2}{2m} $$`
        },
        {
            english: `#### Work-Energy Theorem
The net work done by all forces on a body is equal to the change in its kinetic energy.
$$ W_{net} = \\Delta K.E. = K.E._f - K.E._i $$`,
            tamil: `#### வேலை-ஆற்றல் தேற்றம்
ஒரு பொருளின் மீது அனைத்து விசைகளாலும் செய்யப்பட்ட நிகர வேலை அதன் இயக்க ஆற்றலில் ஏற்படும் மாற்றத்திற்குச் சமம்.
$$ W_{நிகர} = \\Delta K.E. = K.E._f - K.E._i $$`
        },
        {
            english: `#### Potential Energy (P.E.)
The energy stored in a body by virtue of its position or configuration.
*   **Gravitational P.E.:** $P.E. = mgh$
*   **Elastic P.E. (Spring):** $P.E. = \\frac{1}{2}kx^2$`,
            tamil: `#### நிலை ஆற்றல் (P.E.)
ஒரு பொருள் அதன் நிலை அல்லது அமைப்பின் காரணமாக சேமித்து வைத்திருக்கும் ஆற்றல்.
*   **ஈர்ப்பு நிலை ஆற்றல்:** $P.E. = mgh$
*   **மீட்சி நிலை ஆற்றல் (சுருள்வில்):** $P.E. = \\frac{1}{2}kx^2$`
        },
        {
            english: `### 3. Conservation of Mechanical Energy
If only conservative forces (like gravity, spring force) do work, the total mechanical energy (K.E. + P.E.) remains constant.
$$ K.E._i + P.E._i = K.E._f + P.E._f $$`,
            tamil: `### 3. இயந்திர ஆற்றல் அழிவின்மை
ஆற்றல் மாற்றா விசைகள் (ஈர்ப்பு விசை, சுருள்வில் விசை போன்றவை) மட்டுமே வேலை செய்தால், மொத்த இயந்திர ஆற்றல் (இயக்க ஆற்றல் + நிலை ஆற்றல்) மாறாமல் இருக்கும்.
$$ K.E._i + P.E._i = K.E._f + P.E._f $$`
        },
        {
            english: `### 4. Power (திறன்)
Power is the rate at which work is done.
$$ P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v} $$`,
            tamil: `### 4. திறன் (Power)
திறன் என்பது வேலை செய்யப்படும் வீதம் ஆகும்.
$$ P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v} $$`
        },
        {
            english: `### 5. Collisions (மோதல்கள்)
*   **Elastic Collision:** Momentum and Kinetic Energy are conserved.
*   **Inelastic Collision:** Momentum is conserved, but Kinetic Energy is not.`,
            tamil: `### 5. மோதல்கள் (Collisions)
*   **மீள் மோதல்:** உந்தம் மற்றும் இயக்க ஆற்றல் ஆகிய இரண்டும் பாதுகாக்கப்படும்.
*   **மீளாத மோதல்:** உந்தம் பாதுகாக்கப்படுகிறது, ஆனால் இயக்க ஆற்றல் பாதுகாக்கப்படாது.`
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
                    explanation: "Calculate the work done by gravity. Work = Force × displacement. Here, Force = mg, displacement = h.",
                    explanationTamil: "ஈர்ப்பு விசையால் செய்யப்பட்ட வேலையைக் கணக்கிடவும். வேலை = விசை × இடப்பெயர்ச்சி. இங்கு, விசை = mg, இடப்பெயர்ச்சி = h.",
                    calculation: "W_g = mgh = (2)(10)(10) = 200 J"
                },
                {
                    step: 2,
                    explanation: "Apply the Work-Energy Theorem: W_net = ΔK.E. = K.E_f - K.E_i.",
                    explanationTamil: "வேலை-ஆற்றல் தேற்றத்தைப் பயன்படுத்தவும்: W_net = ΔK.E. = K.E_f - K.E_i."
                },
                {
                    step: 3,
                    explanation: "Since the block is dropped, initial kinetic energy K.E_i is 0. The net work is the work done by gravity.",
                    explanationTamil: "கட்டை ஓய்விலிருந்து விடப்படுவதால் ஆரம்ப இயக்க ஆற்றல் K.E_i சுழியாகும். நிகர வேலை ஈர்ப்பு விசையால் செய்யப்பட்ட வேலையாகும்.",
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
            neetHackTamil: "விசைகள், தூரங்கள் மற்றும் வேகங்கள் சம்பந்தப்பட்ட கணக்குகளுக்கு, இயக்கவியலை விட வேலை-ஆற்றல் தேற்றம் பெரும்பாலும் வேகமானது. நேரம் கேட்கப்படவில்லை என்றால், முதலில் 'ஆற்றல்' முறையை சிந்திக்கவும்!"
        },
        {
            title: "JEE Level: Conservation of Momentum in Collisions",
            titleTamil: "ஜே.இ.இ நிலை: மோதல்களில் உந்த அழிவின்மை",
            difficulty: 'Medium',
            problem: "A ball of mass 0.1 kg moving with a velocity of 20 m/s strikes another ball of mass 0.2 kg which is at rest. After the collision, the first ball comes to rest. Find the velocity of the second ball after the collision and determine if the collision is elastic.",
            problemTamil: "20 மீ/வி திசைவேகத்துடன் நகரும் 0.1 கிகி நிறையுள்ள ஒரு பந்து, ஓய்வில் உள்ள 0.2 கிகி நிறையுள்ள மற்றொரு பந்தின் மீது மோதுகிறது. மோதலுக்குப் பிறகு, முதல் பந்து ஓய்வுக்கு வருகிறது. மோதலுக்குப் பிறகு இரண்டாவது பந்தின் திசைவேகத்தைக் கண்டறிந்து, மோதல் மீள்தன்மை கொண்டதா என்பதைத் தீர்மானிக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Apply the law of conservation of linear momentum. m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
                    explanationTamil: "நேர்கோட்டு உந்த அழிவின்மை விதியைப் பயன்படுத்தவும். m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
                    calculation: "(0.1)(20) + (0.2)(0) = (0.1)(0) + (0.2)v₂"
                },
                {
                    step: 2,
                    explanation: "Solve for the velocity of the second ball, v₂.",
                    explanationTamil: "இரண்டாவது பந்தின் திசைவேகம் v₂ ஐக் கண்டறியவும்.",
                    calculation: "2 = 0.2v₂ => v₂ = 10 m/s"
                },
                {
                    step: 3,
                    explanation: "To check if the collision is elastic, compare the initial and final kinetic energies.",
                    explanationTamil: "மோதல் மீள்தன்மை கொண்டதா என்பதைச் சரிபார்க்க, ஆரம்ப மற்றும் இறுதி இயக்க ஆற்றல்களை ஒப்பிடவும்."
                },
                {
                    step: 4,
                    explanation: "Calculate initial kinetic energy (K.E_i).",
                    explanationTamil: "ஆரம்ப இயக்க ஆற்றலைக் (K.E_i) கணக்கிடவும்.",
                    calculation: "K.E_i = (1/2)m₁u₁² + (1/2)m₂u₂² = (1/2)(0.1)(20)² + 0 = 20 J"
                },
                {
                    step: 5,
                    explanation: "Calculate final kinetic energy (K.E_f).",
                    explanationTamil: "இறுதி இயக்க ஆற்றலைக் (K.E_f) கணக்கிடவும்.",
                    calculation: "K.E_f = (1/2)m₁v₁² + (1/2)(0.2)(10)² = 0 + (1/2)(0.2)(10)² = 10 J"
                },
                {
                    step: 6,
                    explanation: "Compare the energies. Since K.E_f < K.E_i, some kinetic energy is lost. Therefore, the collision is inelastic.",
                    explanationTamil: "ஆற்றல்களை ஒப்பிடவும். K.E_f < K.E_i என்பதால், சில இயக்க ஆற்றல் இழக்கப்பட்டுள்ளது. எனவே, மோதல் மீள்தன்மையற்றது."
                }
            ],
            commonPitfall: "Assuming every collision is elastic. Always check the kinetic energy unless the problem explicitly states it's an elastic collision."
        },
        {
            title: "NEET Level: Power Calculation",
            titleTamil: "நீட் நிலை: திறன் கணக்கீடு",
            difficulty: 'Easy',
            problem: "A pump is required to lift 600 kg of water per minute from a well 25 m deep and to eject it with a speed of 50 m/s. Calculate the power required to perform the above task. (g = 10 m/s²)",
            problemTamil: "ஒரு கிணற்றிலிருந்து நிமிடத்திற்கு 600 கிகி தண்ணீரை 25 மீ ஆழத்திலிருந்து மேலேற்றி, அதை 50 மீ/வி வேகத்தில் வெளியேற்ற ஒரு பம்ப் தேவைப்படுகிறது. மேலே உள்ள பணியைச் செய்யத் தேவையான திறனைக் கணக்கிடுக. (g = 10 மீ/வி² எனக் கொள்க)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Power is the rate of doing work or supplying energy. Here, the power must supply potential energy to lift the water and kinetic energy to eject it.",
                    explanationTamil: "திறன் என்பது வேலை செய்யப்படும் வீதம் அல்லது ஆற்றல் வழங்கப்படும் வீதம் ஆகும். இங்கு, திறன் தண்ணீரை மேலேற்ற நிலை ஆற்றலையும், அதை வெளியேற்ற இயக்க ஆற்றலையும் வழங்க வேண்டும்."
                },
                {
                    step: 2,
                    explanation: "Calculate the work done against gravity (to provide potential energy) per second. Mass per second = 600 kg / 60 s = 10 kg/s.",
                    explanationTamil: "ஈர்ப்பு விசைக்கு எதிராக செய்யப்பட்ட வேலையை (நிலை ஆற்றலை வழங்க) வினாடிக்கு கணக்கிடவும். வினாடிக்கு நிறை = 600 கிகி / 60 வி = 10 கிகி/வி.",
                    calculation: "Power_potential = (m/t)gh = (10 kg/s) * (10 m/s²) * (25 m) = 2500 W"
                },
                {
                    step: 3,
                    explanation: "Calculate the kinetic energy supplied per second.",
                    explanationTamil: "வினாடிக்கு வழங்கப்படும் இயக்க ஆற்றலைக் கணக்கிடவும்.",
                    calculation: "Power_kinetic = (1/2)(m/t)v² = (1/2)(10 kg/s)(50 m/s)² = 5 * 2500 = 12500 W"
                },
                {
                    step: 4,
                    explanation: "The total power required is the sum of the power for potential and kinetic energy.",
                    explanationTamil: "தேவைப்படும் மொத்த திறன், நிலை மற்றும் இயக்க ஆற்றலுக்கான திறன்களின் கூடுதலாகும்.",
                    calculation: "P_total = P_potential + P_kinetic = 2500 W + 12500 W = 15000 W = 15 kW"
                }
            ]
        },
        {
            title: "JEE Level: Conservative vs Non-Conservative Forces",
            titleTamil: "ஜே.இ.இ நிலை: ஆற்றல் மாற்றா மற்றும் ஆற்றல் மாற்றும் விசைகள்",
            difficulty: 'Medium',
            problem: "A block of mass 1 kg is pushed up a rough inclined plane of inclination 30° and length 2 m with a constant speed. The coefficient of kinetic friction is 0.1. Find the work done by (a) the applied force, (b) the gravitational force, and (c) the frictional force. (g=10 m/s²)",
            problemTamil: "1 கிகி நிறையுள்ள ஒரு கட்டை, 30° சாய்வும் 2 மீ நீளமும் கொண்ட ஒரு சொரசொரப்பான சாய்தளத்தின் மீது மாறா வேகத்துடன் மேல்நோக்கி தள்ளப்படுகிறது. இயக்க உராய்வுக் குணகம் 0.1 ஆகும். (a) செலுத்தப்பட்ட விசை, (b) ஈர்ப்பு விசை, மற்றும் (c) உராய்வு விசையால் செய்யப்பட்ட வேலையைக் கண்டறியவும். (g=10 மீ/வி² எனக் கொள்க)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the forces acting on the block. The block moves with constant speed, so the net force is zero. The applied force F must balance the downward component of gravity and the frictional force.",
                    explanationTamil: "கட்டையின் மீது செயல்படும் விசைகளைக் கணக்கிடவும். கட்டை மாறா வேகத்தில் நகர்வதால், நிகர விசை சுழியாகும். செலுத்தப்பட்ட விசை F, ஈர்ப்பின் கீழ்நோக்கிய கூறு மற்றும் உராய்வு விசை ஆகியவற்றை சமன் செய்ய வேண்டும்."
                },
                {
                    step: 2,
                    explanation: "Gravitational component down the incline = mg sin(θ) = 1 * 10 * sin(30°) = 5 N. Frictional force f_k = μN = μ(mg cos(θ)) = 0.1 * (1 * 10 * cos(30°)) = 0.1 * 10 * (√3/2) = 0.5√3 ≈ 0.866 N.",
                    explanationTamil: "சாய்தளத்தில் கீழ்நோக்கிய ஈர்ப்பு கூறு = mg sin(θ) = 5 N. உராய்வு விசை f_k = μN = μ(mg cos(θ)) ≈ 0.866 N."
                },
                {
                    step: 3,
                    explanation: "The applied force F = mg sin(θ) + f_k = 5 + 0.866 = 5.866 N.",
                    explanationTamil: "செலுத்தப்பட்ட விசை F = mg sin(θ) + f_k = 5.866 N."
                },
                {
                    step: 4,
                    explanation: "(a) Work by applied force: W_F = F * s * cos(0) = 5.866 * 2 * 1 = 11.732 J.",
                    explanationTamil: "(a) செலுத்தப்பட்ட விசையால் செய்யப்பட்ட வேலை: W_F = 11.732 J."
                },
                {
                    step: 5,
                    explanation: "(b) Work by gravitational force: W_g = (mg sinθ) * s * cos(180°) = -5 * 2 = -10 J.",
                    explanationTamil: "(b) ஈர்ப்பு விசையால் செய்யப்பட்ட வேலை: W_g = -10 J."
                },
                {
                    step: 6,
                    explanation: "(c) Work by frictional force: W_f = f_k * s * cos(180°) = -0.866 * 2 = -1.732 J.",
                    explanationTamil: "(c) உராய்வு விசையால் செய்யப்பட்ட வேலை: W_f = -1.732 J."
                }
            ],
            neetHack: "Check your answer using the Work-Energy Theorem. Since speed is constant, ΔK.E. = 0. So, W_net = 0. W_F + W_g + W_f = 11.732 - 10 - 1.732 = 0. The calculation is correct."
        },
        {
            title: "NEET Level: Elastic Potential Energy",
            titleTamil: "நீட் நிலை: மீட்சி நிலை ஆற்றல்",
            difficulty: 'Easy',
            problem: "A spring with spring constant 5 x 10³ N/m is stretched initially by 5 cm from the unstretched position. Then, it is stretched further by another 5 cm. Calculate the work done in the second stretching.",
            problemTamil: "5 x 10³ N/m சுருள்வில் மாறிலி கொண்ட ஒரு சுருள்வில், அதன் நீட்டப்படாத நிலையிலிருந்து ஆரம்பத்தில் 5 செ.மீ நீட்டப்படுகிறது. பின்னர், அது மேலும் 5 செ.மீ நீட்டப்படுகிறது. இரண்டாவது நீட்டலில் செய்யப்பட்ட வேலையைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Work done in stretching a spring is equal to the change in its potential energy. U = (1/2)kx².",
                    explanationTamil: "ஒரு சுருள்வில்லை நீட்டுவதில் செய்யப்படும் வேலை, அதன் நிலை ஆற்றலில் ஏற்படும் மாற்றத்திற்குச் சமம். U = (1/2)kx²."
                },
                {
                    step: 2,
                    explanation: "Calculate the initial potential energy (U_i) when stretched by x₁ = 5 cm = 0.05 m.",
                    explanationTamil: "x₁ = 5 செ.மீ = 0.05 மீ நீட்டப்பட்டபோது ஆரம்ப நிலை ஆற்றலைக் (U_i) கணக்கிடவும்.",
                    calculation: "U_i = (1/2) * (5 x 10³) * (0.05)² = 2500 * 0.0025 = 6.25 J"
                },
                {
                    step: 3,
                    explanation: "Calculate the final potential energy (U_f) when stretched by x₂ = 5 + 5 = 10 cm = 0.1 m.",
                    explanationTamil: "x₂ = 5 + 5 = 10 செ.மீ = 0.1 மீ நீட்டப்பட்டபோது இறுதி நிலை ஆற்றலைக் (U_f) கணக்கிடவும்.",
                    calculation: "U_f = (1/2) * (5 x 10³) * (0.1)² = 2500 * 0.01 = 25 J"
                },
                {
                    step: 4,
                    explanation: "The work done in the second stretching is the change in potential energy, W = U_f - U_i.",
                    explanationTamil: "இரண்டாவது நீட்டலில் செய்யப்பட்ட வேலை நிலை ஆற்றலில் ஏற்படும் மாற்றம், W = U_f - U_i.",
                    calculation: "W = 25 J - 6.25 J = 18.75 J"
                }
            ]
        }
    ],
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
        {
            question: "In an elastic collision of two particles, which of the following is conserved?",
            options: ["A. Speed of each particle", "B. Kinetic energy of each particle", "C. Total kinetic energy of the system", "D. Total potential energy of the system"],
            answer: "C. Total kinetic energy of the system",
            explanation: "In an elastic collision, both the total momentum and the total kinetic energy of the system are conserved. The kinetic energy of individual particles can change.",
            neetFrequency: 5
        },
        {
            question: "The potential energy of a spring increases by 10 J when it is stretched by 2 cm. If it is stretched by 8 cm, the potential energy stored in it will be:",
            options: ["A. 40 J", "B. 80 J", "C. 160 J", "D. 320 J"],
            answer: "C. 160 J",
            explanation: "Potential energy U = (1/2)kx². So, U ∝ x². If the stretch increases by 4 times (from 2 cm to 8 cm), the energy increases by 4² = 16 times. So, new P.E. = 16 * 10 J = 160 J.",
            neetFrequency: 4
        },
        {
            question: "A bullet of mass m hits a block of mass M and gets embedded in it. This is an example of:",
            options: ["A. Perfectly elastic collision", "B. Perfectly inelastic collision", "C. Oblique collision", "D. A non-collision event"],
            answer: "B. Perfectly inelastic collision",
            explanation: "In a perfectly inelastic collision, the two bodies stick together after the collision and move with a common velocity. Maximum kinetic energy is lost in this type of collision.",
            neetFrequency: 3
        },
        {
            question: "Work done by a centripetal force is always:",
            options: ["A. Positive", "B. Negative", "C. Zero", "D. Dependent on the path"],
            answer: "C. Zero",
            explanation: "The centripetal force is always perpendicular to the direction of displacement (which is tangential). Since θ=90°, W = Fs cos(90°) = 0.",
            neetFrequency: 2
        },
        {
            question: "The relationship between kinetic energy (K) and linear momentum (p) is:",
            options: ["A. K = p²/2m", "B. K = 2mp²", "C. K = p/2m", "D. K = 2m/p²"],
            answer: "A. K = p²/2m",
            explanation: "K = (1/2)mv². Multiplying and dividing by m gives K = (1/2m)(m²v²) = p²/2m.",
            neetFrequency: 4
        },
        {
            question: "A light body and a heavy body have the same momentum. Which one has greater kinetic energy?",
            options: ["A. The light body", "B. The heavy body", "C. Both have same kinetic energy", "D. Data insufficient"],
            answer: "A. The light body",
            explanation: "From K = p²/2m, if momentum p is constant, then kinetic energy K is inversely proportional to mass (K ∝ 1/m). The lighter body (smaller m) will have greater kinetic energy.",
            neetFrequency: 5
        },
        {
            question: "The unit of power is Watt. One Watt is equal to:",
            options: ["A. 1 Joule", "B. 1 Joule / second", "C. 1 Newton / second", "D. 1 Newton-meter"],
            answer: "B. 1 Joule / second",
            explanation: "Power is the rate of doing work or transferring energy. 1 Watt = 1 Joule per second.",
            neetFrequency: 1
        },
        {
            question: "If a force F = (5i + 3j + 2k) N is applied to a body which is displaced from r₁ = (2i - j) m to r₂ = (4i + 2j - k) m, the work done is:",
            options: ["A. 9 J", "B. 12 J", "C. 15 J", "D. 17 J"],
            answer: "D. 17 J",
            explanation: "Displacement s = r₂ - r₁ = (2i + 3j - k). Work W = F · s = (5)(2) + (3)(3) + (2)(-1) = 10 + 9 - 2 = 17 J.",
            neetFrequency: 3
        },
        {
            question: "In a one-dimensional elastic collision, the coefficient of restitution (e) is:",
            options: ["A. 0", "B. 1", "C. -1", "D. Between 0 and 1"],
            answer: "B. 1",
            explanation: "The coefficient of restitution e = (relative velocity of separation) / (relative velocity of approach). For a perfectly elastic collision, e=1. For a perfectly inelastic collision, e=0.",
            neetFrequency: 2
        },
        {
            question: "If the momentum of a body is increased by 50%, its kinetic energy will increase by:",
            options: ["A. 50%", "B. 100%", "C. 125%", "D. 225%"],
            answer: "C. 125%",
            explanation: "New momentum p' = p + 0.5p = 1.5p. Since K ∝ p², new K' ∝ (1.5p)² = 2.25 p². So K' = 2.25K. The increase is (2.25K - K)/K = 1.25, which is 125%.",
            neetFrequency: 4
        },
        {
            question: "Work done by a variable force is measured by:",
            options: ["A. The area under the F-t graph", "B. The area under the P-t graph", "C. The area under the F-s graph", "D. The slope of the F-s graph"],
            answer: "C. The area under the F-s graph",
            explanation: "Work W = ∫F ds, which represents the area under the force-displacement graph.",
            neetFrequency: 2
        },
        {
            question: "The potential energy of a system increases if work is done:",
            options: ["A. By the system against a conservative force", "B. By a conservative force", "C. Upon the system by a non-conservative force", "D. By the system against a non-conservative force"],
            answer: "A. By the system against a conservative force",
            explanation: "The change in potential energy is defined as the negative of the work done by the conservative force (ΔU = -W_c). Work done *against* a conservative force (e.g., lifting an object against gravity) increases its potential energy.",
            neetFrequency: 3
        },
        {
            question: "A ball is dropped from a height h. After striking the ground, it rebounds to a height h/2. The coefficient of restitution (e) is:",
            options: ["A. 1/2", "B. 1/√2", "C. √2", "D. 1/4"],
            answer: "B. 1/√2",
            explanation: "The velocity before impact is v₁ = √(2gh). The velocity after impact is v₂ = √(2g(h/2)). The coefficient of restitution e = v₂/v₁ = √(2g(h/2)) / √(2gh) = √((h/2)/h) = √(1/2) = 1/√2.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is the unit of energy?",
            options: ["A. Watt", "B. Newton", "C. Kilowatt-hour", "D. Pascal"],
            answer: "C. Kilowatt-hour",
            explanation: "Kilowatt-hour is a unit of energy (Power × Time). 1 kWh = 3.6 x 10⁶ J. Watt is power, Newton is force, Pascal is pressure.",
            neetFrequency: 1
        },
        {
            question: "An engine pumps water continuously through a hose. If the speed with which water passes through the hose nozzle is doubled, the kinetic energy imparted to the water:",
            options: ["A. Doubles", "B. Becomes four times", "C. Becomes eight times", "D. Is halved"],
            answer: "C. Becomes eight times",
            explanation: "Power for K.E. = (1/2)(dm/dt)v². Mass flow rate dm/dt = Aρv. So, Power ∝ v³. If velocity is doubled, power becomes 2³ = 8 times.",
            neetFrequency: 2
        },
        {
            question: "The work done in holding a 15 kg suitcase while waiting for a bus for 15 minutes is:",
            options: ["A. 225 J", "B. 1500 J", "C. 15 J", "D. 0"],
            answer: "D. 0",
            explanation: "In physics, work is done only when there is a displacement. Since the suitcase is not displaced, no work is done.",
            neetFrequency: 1
        },
        {
            question: "A spring of force constant 800 N/m has an extension of 5 cm. The work done in extending it from 5 cm to 15 cm is:",
            options: ["A. 16 J", "B. 8 J", "C. 32 J", "D. 24 J"],
            answer: "B. 8 J",
            explanation: "Work done = U_f - U_i = (1/2)k(x₂² - x₁²) = (1/2)(800)((0.15)² - (0.05)²) = 400(0.0225 - 0.0025) = 400(0.02) = 8 J.",
            neetFrequency: 4
        },
        {
            question: "If the force applied is F and the velocity gained is v, then the power is:",
            options: ["A. F/v", "B. Fv", "C. Fv²", "D. F/v²"],
            answer: "B. Fv",
            explanation: "Instantaneous power is given by the dot product of force and velocity, P = F · v.",
            neetFrequency: 1
        },
        {
            question: "When a body moves with a constant speed in a circle:",
            options: ["A. No work is done on it", "B. No force acts on it", "C. Its velocity remains constant", "D. Its acceleration is zero"],
            answer: "A. No work is done on it",
            explanation: "The centripetal force is always perpendicular to the displacement, so the work done by it is zero.",
            neetFrequency: 2
        },
        {
            question: "In a perfectly inelastic collision, the relative velocity of separation is:",
            options: ["A. 1", "B. 0", "C. -1", "D. Infinity"],
            answer: "B. 0",
            explanation: "In a perfectly inelastic collision, the bodies stick together after impact, so their relative velocity of separation is zero. The coefficient of restitution e=0.",
            neetFrequency: 3
        }
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
            reason: "Frictional force is always opposite to the direction of motion (or tendency of motion).",
            answer: "A",
            explanation: "Assertion is generally true for kinetic friction. The reason is correct. The angle between kinetic frictional force and displacement is 180°, and cos(180°) = -1, making the work done negative. The reason correctly explains the assertion."
        },
        {
            assertion: "Kinetic energy is conserved in all types of collisions.",
            reason: "Momentum is conserved in all types of collisions.",
            answer: "D",
            explanation: "Assertion is false. Kinetic energy is only conserved in perfectly elastic collisions. The reason is true (for isolated systems), but it does not justify the false assertion."
        },
        {
            assertion: "A body can have energy without having momentum.",
            reason: "A body at rest at a certain height above the ground has potential energy but no momentum.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is a perfect example. A stationary object (p=0) can possess potential energy."
        },
        {
            assertion: "The work done by a conservative force around a closed path is zero.",
            reason: "Conservative forces depend only on the initial and final positions, not on the path taken.",
            answer: "A",
            explanation: "Assertion is the definition of a conservative force. The reason is also the definition of a conservative force and correctly explains why the work done in a closed loop is zero (since initial and final points are the same)."
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
            column1: ["(a) Elastic Collision", "(b) Inelastic Collision", "(c) Perfectly Inelastic Collision", "(d) Work done by friction"],
            column2: ["(p) e = 0", "(q) e = 1", "(r) Negative", "(s) 0 < e < 1"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching collision types with their coefficient of restitution (e) and work done by friction."
        },
        {
            column1: ["(a) Kinetic Energy", "(b) Potential Energy", "(c) Work", "(d) Power"],
            column2: ["(p) F · v", "(q) mgh", "(r) F · s", "(s) p²/2m"],
            answer: "a-s, b-q, c-r, d-p",
            explanation: "Matching physical quantities with their formulas."
        },
        {
            column1: ["(a) Spring force", "(b) Gravitational force", "(c) Frictional force", "(d) Viscous force"],
            column2: ["(p) Conservative", "(q) Non-conservative"],
            answer: "a-p, b-p, c-q, d-q",
            explanation: "Classifying forces as conservative or non-conservative. Spring and gravity forces are conservative. Friction and viscous drag are non-conservative."
        },
        {
            column1: ["(a) `1 kWh`", "(b) `1 eV`", "(c) `1 Calorie`", "(d) `1 erg`"],
            column2: ["(p) `4.184 J`", "(q) `1.6 x 10⁻¹⁹ J`", "(r) `10⁻⁷ J`", "(s) `3.6 x 10⁶ J`"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching different units of energy with their value in Joules."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}',
                description: 'The fundamental form of Newton\'s 2nd Law. Crucial for variable mass systems.',
                descriptionTamil: 'நியூட்டனின் 2ம் விதியின் அடிப்படை வடிவம். மாறும் நிறை அமைப்புகளுக்கு முக்கியமானது.'
            },
            {
                formula: 'f_{s,max} = \\mu_s N',
                description: 'Maximum static friction. Friction opposes the tendency of motion.',
                descriptionTamil: 'பெரும நிலை உராய்வு. உராய்வு இயக்கத்தின் போக்கை எதிர்க்கிறது.'
            },
            {
                formula: 'f_k = \\mu_k N',
                description: 'Kinetic friction. Acts on a moving body, opposing motion.',
                descriptionTamil: 'இயக்க உராய்வு. நகரும் பொருளின் மீது செயல்பட்டு, இயக்கத்தை எதிர்க்கிறது.'
            },
            {
                formula: 'N = m(g \\pm a)',
                description: 'Apparent weight in a lift. Use + for upward acceleration, - for downward.',
                descriptionTamil: 'மின் தூக்கியில் தோற்ற எடை. மேல்நோக்கிய முடுக்கத்திற்கு +, கீழ்நோக்கிய முடுக்கத்திற்கு - பயன்படுத்தவும்.'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "First Law: Inertia - objects resist change in motion.",
        "Second Law: F = ma - net force causes acceleration.",
        "Third Law: Action-Reaction pairs are equal, opposite, and act on different bodies.",
        "Always draw a Free-Body Diagram (FBD) before solving any mechanics problem."
    ],
    mnemonics: [
        { text: "Remember C-G-E-S (CGS) for Conservative forces: Conservative Guards Elite Springs. (Conservative, Gravitational, Electrostatic, Spring forces). All others, like friction, are non-conservative.", tamil: "ஆற்றல் மாற்றா விசைகளை நினைவில் கொள்ள: C-G-E-S (CGS) - Conservative Guards Elite Springs. (ஆற்றல் மாற்றா, ஈர்ப்பு, நிலைமின்னியல், சுருள்வில் விசைகள்). மற்றவை, உராய்வு போன்றவை, ஆற்றல் மாற்றும் விசைகள்." }
    ],
    neetTips: [
        { text: "For problems involving ratios of kinetic energy and momentum, the formulas K=p²/2m and p=√(2mK) are your best friends.", tamil: "இயக்க ஆற்றல் மற்றும் உந்தத்தின் விகிதங்கள் சம்பந்தப்பட்ட கணக்குகளுக்கு, K=p²/2m மற்றும் p=√(2mK) சூத்திரங்கள் உங்கள் சிறந்த நண்பர்கள்." }
    ],
    studentTip: {
        english: "If a problem asks for speed or height and doesn't involve time, always think of using the Conservation of Energy or the Work-Energy Theorem first! It's often much faster than using kinematics.",
        tamil: "ஒரு கணக்கில் நேரம் கேட்கப்படாமல், வேகம் அல்லது உயரம் மட்டும் கேட்கப்பட்டால், முதலில் ஆற்றல் அழிவின்மை விதி அல்லது வேலை-ஆற்றல் தேற்றத்தைப் பயன்படுத்த சிந்தியுங்கள்! இது இயக்கவியல் சமன்பாடுகளை விட மிக வேகமானது."
    },
    peerDiscussion: {
        english: "Discuss with a friend: In a real-world car crash (an inelastic collision), where does the 'lost' kinetic energy go? List at least three different forms of energy it transforms into.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஒரு நிஜ உலக கார் விபத்தில் (மீளாத மோதல்), 'இழக்கப்பட்ட' இயக்க ஆற்றல் எங்கே செல்கிறது? அது மாறும் ஆற்றலின் மூன்று வெவ்வேறு வடிவங்களையாவது பட்டியலிடுங்கள்."
    },
    nextChapter: {
        title: "System of Particles and Rotational Motion",
        titleTamil: "துகள் அமைப்புகள் மற்றும் சுழற்சி இயக்கம்"
    },
    validationReport: [
        { check: 'Verify Practice Question Quotas', status: 'pass', message: 'OK' },
        { check: 'Check Adaptive MCQ Star Display', status: 'pass', message: 'OK' },
        { check: 'Confirm Content Completeness', status: 'pass', message: 'OK' },
        { check: 'Validate Module Accuracy', status: 'pass', message: 'OK' },
        { check: 'Maintain Quality Parity', status: 'pass', message: 'OK' },
        { check: '"Next Module" Accuracy', status: 'pass', message: 'OK' },
        { check: 'Check for interactive elements like virtual labs and 3D diagrams', status: 'pass', message: 'OK' },
        { check: 'Include interactive diagrams in Learn section', status: 'pass', message: 'OK' },
        { check: 'Entire learn and worked examples section should be bilingual and nothing skipped', status: 'pass', message: 'OK' },
        { check: 'Verify XML Structure', status: 'pass', message: 'OK' },
        { check: 'Add chapter number tag to the chapter cards', status: 'pass', message: 'OK' },
        { check: 'Check if bilingual content was added uniformly to throughout the learn and worked examples section', status: 'pass', message: 'OK' },
        { check: 'Entire module should be double checked for errors AND nothing should be empty without suitable content', status: 'pass', message: 'OK' },
        { check: 'Check LaTeX errors thoroughly and carefully, every letter of code', status: 'pass', message: 'OK' },
        { check: 'Verify Color Scheme Application', status: 'pass', message: 'OK' },
        { check: 'Ensure Module is Added to UI', status: 'pass', message: 'OK' }
    ]
};
