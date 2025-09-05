
import type { NeetModule } from '@/lib/types';
import { InertiaAnimation } from '@/components/exam/InertiaAnimation';
import { ActionReactionAnimation } from '@/components/exam/ActionReactionAnimation';
import { LiftAnimation } from '@/components/exam/LiftAnimation';

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
    culturalContext: "Consider the traditional 'manjal araikkum kallu' (turmeric grinding stone). The work done by a person is converted into the kinetic energy of the stone and the energy used to grind the turmeric. This is a perfect example of work and energy transfer in a common household activity. This chapter provides the framework to quantify these everyday energy transformations.",
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
Work is said to be done by a force when it produces a displacement in the body on which it acts. It is a scalar quantity (ஸ்கேலார் அளவு).`
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
*   **Zero Work (சுழி வேலை, $\\theta = 90^\\circ$):** Force is perpendicular to displacement. E.g., Work done by centripetal force in a uniform circular motion.`
        },
        {
            english: `#### Work Done by a Variable Force (மாறும் விசையால் செய்யப்பட்ட வேலை)
If the force is not constant, we find the work done by integrating the force over the path.
$$
W = \\int_{s_i}^{s_f} F(s) \\,ds
$$
Graphically, the work done is the **area under the Force-Displacement (F-s) graph**.`
        },
        {
            english: `### 2. Energy (ஆற்றல்)
Energy is the capacity to do work. It is a scalar quantity, and its SI unit is the Joule (J).`
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
$$`
        },
        {
            english: `#### Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்)
This is one of the most important theorems in mechanics. It states that the **net work done by all forces (conservative and non-conservative) on a body is equal to the change in its kinetic energy.**
$$
W_{net} = \\Delta K.E. = K.E._f - K.E._i
$$

{{LIFT_ANIMATION}}`
        },
        {
            english: `#### Potential Energy (நிலை ஆற்றல் - P.E.)
The energy stored in a body by virtue of its position or configuration. It is defined only for **conservative forces (பாதுகாப்பு விசைகள்)**.
*   **Gravitational Potential Energy (ஈர்ப்பு நிலை ஆற்றல்):** $P.E. = mgh$
*   **Elastic Potential Energy (Spring) (மீட்சி நிலை ஆற்றல் (சுருள்வில்)):** $P.E. = \\frac{1}{2}kx^2$, where k is the spring constant and x is the extension or compression.`
        },
        {
            english: `### 3. Conservation of Energy (ஆற்றல் பாதுகாப்பு விதி)
*   **Conservative Force (பாதுகாப்பு விசை):** A force for which the work done is independent of the path taken and depends only on the initial and final positions. Work done in a closed loop is zero. E.g., Gravitational force, electrostatic force, spring force.
*   **Non-Conservative Force (பாதுகாப்பற்ற விசை):** A force for which the work done depends on the path taken. E.g., Friction, air resistance.`
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
$$`
        },
        {
            english: `### 4. Power (திறன்)
Power is the rate at which work is done. It is a scalar quantity.
*   **Average Power (சராசரி திறன்):** $P_{avg} = \\frac{\\text{Total Work Done}}{\\text{Total Time}} = \\frac{W}{t}$
*   **Instantaneous Power (உடனடி திறன்):** $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\frac{d\\vec{s}}{dt} = \\vec{F} \\cdot \\vec{v}$
The SI unit of power is the Watt (W). (1 W = 1 J/s). Another common unit is horsepower (1 hp ≈ 746 W).`
        },
        {
            english: `### 5. Collisions (மோதல்கள்)
A collision is an event in which two or more bodies exert forces on each other for a relatively short time.
*   **Total linear momentum is always conserved** in any collision if there is no external force on the system.
*   **Elastic Collision (மீள் மோதல்):** A collision in which both momentum and kinetic energy are conserved.
*   **Inelastic Collision (மீளாத மோதல்):** A collision in which momentum is conserved, but kinetic energy is not. Some kinetic energy is lost as heat, sound, or deformation. A **perfectly inelastic collision** is one where the objects stick together after the collision.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Work-Energy Theorem",
            titleTamil: "நீட் நிலை: வேலை-ஆற்றல் தேற்றம்",
            problem: "A block of mass 2 kg is dropped from a height of 10 m. What is the work done by the gravitational force and the final velocity of the block just before it hits the ground? (g = 10 m/s²)",
            problemTamil: "2 கிகி நிறையுள்ள ஒரு கட்டை 10 மீ உயரத்திலிருந்து கீழே விடப்படுகிறது. புவியீர்ப்பு விசையால் செய்யப்பட்ட வேலை மற்றும் தரையைத் தொடும் முன் கட்டையின் இறுதி திசைவேகம் என்ன? (g = 10 மீ/வி² எனக் கொள்க)",
            difficulty: 'Medium',
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the work done by gravity. Work = Force × displacement × cos(θ). Here, Force = mg, displacement = h, and the angle θ between force and displacement is 0°.",
                    explanationTamil: "ஈர்ப்பு விசையால் செய்யப்பட்ட வேலையைக் கணக்கிடவும். வேலை = விசை × இடப்பெயர்ச்சி × cos(θ). இங்கு, விசை = mg, இடப்பெயர்ச்சி = h, மற்றும் விசைக்கும் இடப்பெயர்ச்சிக்கும் இடையிலான கோணம் θ = 0°."
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
                    calculation: "W_g = (mg) * h * cos(0°) = (2 * 10) * 10 * 1 = 200 J. \\implies 200 = (1/2)mv_f² - 0"
                },
                {
                    step: 4,
                    explanation: "Solve for the final velocity v_f.",
                    explanationTamil: "இறுதி திசைவேகம் v_f-ஐக் கண்டறியவும்.",
                    calculation: "200 = (1/2) * 2 * v_f² => v_f² = 200 => v_f = \\sqrt{200} = 10\\sqrt{2} m/s"
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
                    calculation: "F = -(3x² - 12x) = 12x - 3x². \\implies 12x - 3x² = 0 => 3x(4 - x) = 0 => x = 0, x = 4"
                },
                {
                    step: 3,
                    explanation: "To determine stability, check the second derivative of the potential energy, d²U/dx². If d²U/dx² > 0, it's stable equilibrium. If d²U/dx² < 0, it's unstable equilibrium.",
                    explanationTamil: "நிலைப்புத்தன்மையை தீர்மானிக்க, நிலை ஆற்றலின் இரண்டாம் வகைக்கெழுவை, d²U/dx²-ஐ சரிபார்க்கவும். d²U/dx² > 0 எனில், அது நிலையான சமநிலை. d²U/dx² < 0 எனில், அது நிலையற்ற சமநிலை.",
                    calculation: "d²U/dx² = d/dx(3x² - 12x) = 6x - 12"
                },
                {
                    step: 4,
                    explanation: "Evaluate d²U/dx² at the equilibrium points. At x=0: d²U/dx² = 6(0) - 12 = -12 (Unstable). At x=4: d²U/dx² = 6(4) - 12 = 12 (Stable).",
                    explanationTamil: "சமநிலை புள்ளிகளில் d²U/dx²-ஐ மதிப்பிடவும். x=0 இல்: d²U/dx² = -12 (நிலையற்றது). x=4 இல்: d²U/dx² = 12 (நிலையானது)."
                }
            ],
            neetHack: "On a U-x graph, a 'valley' (minimum) is a point of stable equilibrium, and a 'hill' (maximum) is a point of unstable equilibrium.",
            neetHackTamil: "ஒரு U-x வரைபடத்தில், ஒரு 'பள்ளத்தாக்கு' (குறைந்தபட்சம்) ஒரு நிலையான சமநிலை புள்ளி, மற்றும் ஒரு 'குன்று' (அதிகபட்சம்) ஒரு நிலையற்ற சமநிலை புள்ளி."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "W = \\vec{F} \\cdot \\vec{s} = Fs \\cos\\theta", description: "Work done by a constant force (மாறா விசையால் செய்யப்பட்ட வேலை)" },
            { formula: "K.E. = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}", description: "Kinetic Energy and its relation to momentum (இயக்க ஆற்றல் மற்றும் அதன் உந்தத்துடனான தொடர்பு)" },
            { formula: "W_{net} = \\Delta K.E.", description: "Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்)" },
            { formula: "P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v}", description: "Power definition and instantaneous power (திறன் வரையறை மற்றும் உடனடி திறன்)" }
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
            options: ["A. Doubled", "B. Halved", "C. √2 times the original", "D. Unchanged"],
            answer: "C. √2 times the original",
            explanation: "Momentum p = √(2mK). If K' = 2K, then p' = √(2m(2K)) = √2 * √(2mK) = √2 * p.",
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
        { question: "Two bodies of masses m and 4m are moving with equal kinetic energies. The ratio of their linear momenta is:", options: ["A. 1:1", "B. 1:2", "C. 1:4", "D. 4:1"], answer: "B. 1:2", explanation: "Since p = √(2mK), the ratio p₁/p₂ = √(2mK) / √(2(4m)K) = √m / √4m = 1/2.", neetFrequency: 4 },
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
            column2: ["(p) Kinetic energy not conserved", "(q) Rate of doing work", "(r) Work done independent of path", "(s) `W_net = ΔK.E.`"],
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
};
