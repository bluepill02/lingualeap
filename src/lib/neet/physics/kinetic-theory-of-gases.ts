

import type { NeetModule } from '@/lib/types';

export const kineticTheoryOfGasesModule: NeetModule = {
    id: 'neet-physics-kinetic-theory-of-gases',
    title: 'Physics - Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை)',
    chapter: 'Kinetic Theory of Gases',
    subject: 'Physics',
    learningObjectives: [
        "State the postulates of the kinetic theory of gases.",
        "Derive the expression for the pressure exerted by an ideal gas.",
        "Relate the average kinetic energy of gas molecules to the absolute temperature of the gas.",
        "Define degrees of freedom and apply the law of equipartition of energy.",
        "Calculate the molar specific heats (Cv and Cp) for monoatomic, diatomic, and polyatomic gases.",
        "Understand the concept of the mean free path."
    ],
    prerequisites: [
        "Newton's Laws of Motion.",
        "Concepts of pressure, volume, and temperature.",
        "Ideal Gas Equation (PV=nRT)."
    ],
    conceptOverview: "The Kinetic Theory of Gases provides a microscopic explanation for the macroscopic behavior of gases (like pressure and temperature) that we studied in Thermodynamics. The core idea is that a gas consists of a large number of randomly moving molecules. By applying the laws of mechanics to these molecules, we can derive the ideal gas laws and gain a deeper understanding of concepts like internal energy and temperature. This chapter beautifully connects the microscopic world of atoms and molecules to the bulk properties we observe every day.",
    tamilConnection: "வாயுக்கள் கண்ணுக்குத் தெரியாத துகள்களால் ஆனவை. அந்தத் துகள்களின் இயக்கம்தான் அதன் அழுத்தம், வெப்பநிலை போன்ற பண்புகளுக்குக் காரணம். இந்த இயக்கவியற் கொள்கை, வெப்ப இயக்கவியலில் நாம் கற்ற விதிகளுக்கு ஒரு மூலக்கூறு அளவிலான விளக்கத்தை அளிக்கிறது. இது பெரிய அளவிலான நிகழ்வுகளை சிறிய அளவிலான காரணங்களுடன் இணைக்கும் இயற்பியலின் ஒரு அழகான எடுத்துக்காட்டு.",
    culturalContext: "Think about the aroma of filter coffee spreading through a room. This is a direct result of gas molecules (the aromatic compounds) moving randomly and colliding with air molecules, a core concept of the kinetic theory. The theory explains this diffusion process and how temperature affects the speed at which the aroma spreads.",
    syllabusMapping: [
         {
            topic: 'Kinetic Theory of Gases',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 9: Kinetic Theory of Gases',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 13: Kinetic Theory',
            notes: 'A foundational chapter that links mechanics and thermodynamics. Questions on RMS speed, degrees of freedom, and the law of equipartition of energy are common. Make sure to memorize the values of γ for monoatomic, diatomic, and polyatomic gases.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 9 maps to NEET Physics Unit 9'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Postulates of Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கையின் எடுகோள்கள்)
1.  A gas consists of a very large number of identical molecules which are perfect spheres.
2.  The molecules are in continuous, random motion.
3.  The volume of the molecules themselves is negligible compared to the volume of the container.
4.  There are no intermolecular forces of attraction or repulsion.
5.  Collisions between molecules and with the walls of the container are perfectly elastic.
6.  The time taken for a collision is negligible compared to the time between successive collisions.`
        },
        {
            english: `### 2. Pressure of an Ideal Gas (நல்லியல்பு வாயுவின் அழுத்தம்)
The pressure exerted by a gas is due to the continuous collisions of its molecules with the walls of the container. The expression for pressure is:
$$
P = \\frac{1}{3} \\frac{nM}{V} v_{rms}^2 = \\frac{1}{3} \\rho v_{rms}^2
$$
where,
*   n = number of moles
*   M = Molar mass
*   V = Volume
*   ρ = density of the gas
*   $v_{rms}$ = **Root Mean Square (RMS) speed** of the gas molecules. (மூல சராசரி வர்க்க வேகம்)`
        },
        {
            english: `### 3. Kinetic Interpretation of Temperature (வெப்பநிலையின் இயக்கவியற் விளக்கம்)
The average translational kinetic energy of a gas molecule is directly proportional to the absolute temperature (T) of the gas.
$$
\\text{Average K.E. per molecule} = \\frac{1}{2}m v_{rms}^2 = \\frac{3}{2} k_B T
$$
where $k_B$ is the **Boltzmann constant** ($k_B = 1.38 \\times 10^{-23}$ J/K).
This is a crucial result: **Temperature is a measure of the average kinetic energy of the molecules.**
From this, we can find the RMS speed:
$$
v_{rms} = \\sqrt{\\frac{3k_B T}{m}} = \\sqrt{\\frac{3RT}{M}}
$$
where R is the universal gas constant and M is the molar mass.`
        },
        {
            english: `### 4. Degrees of Freedom (சுதந்திர இயக்கக்கூறுகள், f)
The total number of independent ways in which a system can possess energy is called its degrees of freedom.
*   **Monoatomic Gas (ஓரணு வாயு, e.g., He, Ne, Ar):** Has 3 translational degrees of freedom. So, f = 3.
*   **Diatomic Gas (ஈரணு வாயு, e.g., O₂, N₂, H₂):** Has 3 translational and 2 rotational degrees of freedom at normal temperatures. So, f = 5. At very high temperatures, it also has 2 vibrational degrees of freedom (f=7).
*   **Triatomic Gas (மூவணு வாயு):**
    *   Linear (e.g., CO₂): f = 5 (3 trans + 2 rot).
    *   Non-linear (e.g., H₂O): f = 6 (3 trans + 3 rot).`
        },
        {
            english: `### 5. Law of Equipartition of Energy (ஆற்றல் சம பங்கீட்டு விதி)
For a system in thermal equilibrium, the total energy is equally distributed among all its degrees of freedom, and the energy associated with each degree of freedom per molecule is $\\frac{1}{2}k_B T$.
*   **Total Internal Energy of n moles of a gas:**
$$
U = n \\times N_A \\times (f \\times \\frac{1}{2}k_B T) = \\frac{f}{2} n (N_A k_B) T = \\frac{f}{2} nRT
$$`
        },
        {
            english: `### 6. Specific Heats of Gases (வாயுக்களின் தன்வெப்ப ஏற்புத்திறன்கள்)
*   **Molar specific heat at constant volume ($C_v$):**
$$ C_v = \\frac{dU}{dT} = \\frac{d}{dT} (\\frac{f}{2} nRT) = \\frac{f}{2}R $$
*   **Molar specific heat at constant pressure ($C_p$):** Using Mayer's relation ($C_p - C_v = R$):
$$ C_p = C_v + R = \\frac{f}{2}R + R = (\\frac{f}{2} + 1)R $$
*   **Adiabatic Exponent ($\\gamma$):**
$$ \\gamma = \\frac{C_p}{C_v} = \\frac{(\\frac{f}{2} + 1)R}{\\frac{f}{2}R} = 1 + \\frac{2}{f} $$

| Gas Type | Degrees of Freedom (f) | $C_v$ | $C_p$ | $\\gamma = C_p/C_v$ |
| :--- | :--- | :--- | :--- | :--- |
| Monoatomic | 3 | $\\frac{3}{2}R$ | $\\frac{5}{2}R$ | 5/3 ≈ 1.67 |
| Diatomic | 5 | $\\frac{5}{2}R$ | $\\frac{7}{2}R$ | 7/5 = 1.4 |
| Polyatomic | 6 (non-linear) | 3R | 4R | 4/3 ≈ 1.33 |
`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: RMS Speed Calculation",
            titleTamil: "நீட் நிலை: RMS வேகம் கணக்கீடு",
            difficulty: 'Easy',
            problem: "Calculate the root mean square speed of oxygen molecules at 27°C. (Molar mass of O₂ = 32 g/mol, R = 8.31 J/mol·K)",
            problemTamil: "27°C வெப்பநிலையில் ஆக்ஸிஜன் மூலக்கூறுகளின் மூல சராசரி வர்க்க வேகத்தைக் கணக்கிடுக. (O₂-இன் மோலார் நிறை = 32 கி/மோல், R = 8.31 J/mol·K)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Convert all units to the SI system. Temperature must be in Kelvin and Molar Mass in kg/mol.",
                    explanationTamil: "அனைத்து அலகுகளையும் SI முறைக்கு மாற்றவும். வெப்பநிலை கெல்வினிலும், மோலார் நிறை கிிகி/மோல்-இலும் இருக்க வேண்டும்.",
                    calculation: "T = 27 + 273 = 300 K. \\\\ M = 32 g/mol = 0.032 kg/mol."
                },
                {
                    step: 2,
                    explanation: "Use the formula for RMS speed: v_rms = \\sqrt{3RT/M}.",
                    explanationTamil: "RMS வேகத்திற்கான சூத்திரத்தைப் பயன்படுத்தவும்: v_rms = \\sqrt{3RT/M}.",
                    calculation: "v_{rms} = \\sqrt{\\frac{3 \\times 8.31 \\times 300}{0.032}}"
                },
                {
                    step: 3,
                    explanation: "Perform the calculation.",
                    calculation: "v_{rms} = \\sqrt{\\frac{7479}{0.032}} = \\sqrt{233718.75} \\approx 483.4 \\text{ m/s}"
                }
            ],
            neetHack: "Remember that v_rms is proportional to the square root of the absolute temperature (v_rms ∝ √T) and inversely proportional to the square root of the molar mass (v_rms ∝ 1/√M). Many questions involve ratios where R and 3 cancel out.",
            neetHackTamil: "v_rms தனி வெப்பநிலையின் வர்க்க மூலத்திற்கு நேர்த்தகவிலும் (v_rms ∝ √T), மோலார் நிறையின் வர்க்க மூலத்திற்கு எதிர்த்தகவிலும் (v_rms ∝ 1/√M) இருக்கும் என்பதை நினைவில் கொள்க. பல கேள்விகள் விகிதங்களை உள்ளடக்கியது, அங்கு R மற்றும் 3 நீக்கப்படும்.",
            commonPitfall: "Forgetting to convert temperature to Kelvin or molar mass to kg/mol. This is the most common source of error in these problems.",
            commonPitfallTamil: "வெப்பநிலையை கெல்வினுக்கும் அல்லது மோலார் நிறையை கிிகி/மோல்-க்கும் மாற்ற மறப்பது. இந்தக் கணக்குகளில் இதுவே மிகவும் பொதுவான பிழைக்கான காரணமாகும்."
        },
        {
            title: "JEE Level: Mixture of Gases",
            titleTamil: "ஜே.இ.இ நிலை: வாயுக்களின் கலவை",
            difficulty: 'Hard',
            problem: "One mole of a monoatomic gas is mixed with three moles of a diatomic gas. What is the molar specific heat of the mixture at constant volume?",
            problemTamil: "ஒரு மோல் ஓரணு வாயு மூன்று மோல் ஈரணு வாயுவுடன் கலக்கப்படுகிறது. கலவையின் மாறா பருமனில் உள்ள மோலார் தன்வெப்ப ஏற்புத்திறன் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The internal energy of the mixture is the sum of the internal energies of the individual gases: U_mix = U_mono + U_di.",
                    explanationTamil: "கலவையின் அக ஆற்றல் தனிப்பட்ட வாயுக்களின் அக ஆற்றல்களின் கூடுதலாகும்: U_கலவை = U_ஓரணு + U_ஈரணு."
                },
                {
                    step: 2,
                    explanation: "Write the formula for internal energy for each gas using U = (f/2)nRT. For monoatomic gas, f=3. For diatomic gas, f=5.",
                    explanationTamil: "ஒவ்வொரு வாயுவிற்கும் U = (f/2)nRT சூத்திரத்தைப் பயன்படுத்தி அக ஆற்றலை எழுதவும். ஓரணு வாயுவிற்கு, f=3. ஈரணு வாயுவிற்கு, f=5.",
                    calculation: "U_{mix} = \\frac{3}{2}(1)RT + \\frac{5}{2}(3)RT = (\\frac{3}{2} + \\frac{15}{2})RT = \\frac{18}{2}RT = 9RT"
                },
                {
                    step: 3,
                    explanation: "The internal energy of the mixture can also be written in terms of the mixture's specific heat and total moles: U_mix = (f_mix/2)(n₁+n₂)RT.",
                    explanationTamil: "கலவையின் அக ஆற்றலை கலவையின் தன்வெப்ப ஏற்புத்திறன் மற்றும் மொத்த மோல்களின் அடிப்படையில் எழுதலாம்: U_கலவை = (f_கலவை/2)(n₁+n₂)RT."
                },
                {
                    step: 4,
                    explanation: "Equate the two expressions for U_mix to find the effective degrees of freedom (f_mix) or directly find C_v_mix.",
                    explanationTamil: "U_கலவையின் இரண்டு கோவைகளையும் சமப்படுத்தி, திறனுள்ள சுதந்திர இயக்கக்கூறுகளை (f_கலவை) கண்டறியவும் அல்லது நேரடியாக C_v_கலவையைக் கண்டறியவும்.",
                    calculation: "Let C_{v,mix} = \\frac{U_{mix}}{(n_1+n_2)T} = \\frac{9RT}{(1+3)T} = \\frac{9R}{4}"
                },
                {
                    step: 5,
                    explanation: "Alternatively, use the formula for the specific heat of a mixture: C_{v,mix} = (n₁C_v₁ + n₂C_v₂) / (n₁ + n₂).",
                    explanationTamil: "மாற்றாக, ஒரு கலவையின் தன்வெப்ப ஏற்புத்திறனுக்கான சூத்திரத்தைப் பயன்படுத்தவும்: C_{v,mix} = (n₁C_v₁ + n₂C_v₂) / (n₁ + n₂).",
                    calculation: "C_v₁ = (3/2)R, C_v₂ = (5/2)R. \\\\ C_{v,mix} = \\frac{1(\\frac{3}{2}R) + 3(\\frac{5}{2}R)}{1+3} = \\frac{\\frac{3}{2}R + \\frac{15}{2}R}{4} = \\frac{\\frac{18}{2}R}{4} = \\frac{9R}{4}"
                }
            ],
            neetHack: "For mixtures, the internal energy and the total number of moles are simply additive. The final property is a weighted average based on the number of moles.",
            neetHackTamil: "கலவைகளுக்கு, அக ஆற்றல் மற்றும் மொத்த மோல்களின் எண்ணிக்கை ஆகியவை கூட்டல் பண்புடையவை. இறுதிப் பண்பு என்பது மோல்களின் எண்ணிக்கையை அடிப்படையாகக் கொண்ட ஒரு भारित சராசரி ஆகும்."
        },
        {
            title: "NEET Level: Degrees of Freedom",
            titleTamil: "நீட் நிலை: சுதந்திர இயக்கக்கூறுகள்",
            difficulty: 'Easy',
            problem: "Calculate the total number of degrees of freedom for 5 moles of a non-linear triatomic gas.",
            problemTamil: "5 மோல் நேரியல் அல்லாத மூவணு வாயுவிற்கான மொத்த சுதந்திர இயக்கக்கூறுகளின் எண்ணிக்கையைக் கணக்கிடவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "First, determine the degrees of freedom (f) for a single non-linear triatomic molecule.",
                    explanationTamil: "முதலில், ஒரு ஒற்றை நேரியல் அல்லாத மூவணு மூலக்கூறுக்கான சுதந்திர இயக்கக்கூறுகளை (f) தீர்மானிக்கவும்."
                },
                {
                    step: 2,
                    explanation: "A non-linear molecule has 3 translational and 3 rotational degrees of freedom. Vibrational modes are ignored at normal temperatures.",
                    explanationTamil: "ஒரு நேரியல் அல்லாத மூலக்கூறு 3 இடப்பெயர்வு மற்றும் 3 சுழற்சி சுதந்திர இயக்கக்கூறுகளைக் கொண்டுள்ளது. சாதாரண வெப்பநிலையில் அதிர்வு முறைகள் புறக்கணிக்கப்படுகின்றன.",
                    calculation: "f = 3 (translational) + 3 (rotational) = 6"
                },
                {
                    step: 3,
                    explanation: "The question asks for the total degrees of freedom for 5 moles. This is a trick question. Degrees of freedom is a property of the molecule type, not the amount of gas.",
                    explanationTamil: "கேள்வி 5 மோல் வாயுவிற்கான மொத்த சுதந்திர இயக்கக்கூறுகளைக் கேட்கிறது. இது ஒரு தந்திரமான கேள்வி. சுதந்திர இயக்கக்கூறுகள் என்பது வாயுவின் அளவைப் பொறுத்தது அல்ல, மூலக்கூறு வகையின் பண்பு ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Therefore, the degrees of freedom for the gas (per molecule) is simply 6.",
                    explanationTamil: "எனவே, வாயுவிற்கான (ஒரு மூலக்கூறுக்கு) சுதந்திர இயக்கக்கூறுகள் வெறுமனே 6 ஆகும்."
                }
            ],
            commonPitfall: "Multiplying the degrees of freedom by the number of moles. Degrees of freedom (f) is defined per molecule.",
            commonPitfallTamil: "சுதந்திர இயக்கக்கூறுகளை மோல்களின் எண்ணிக்கையால் பெருக்குதல். சுதந்திர இயக்கக்கூறுகள் (f) ஒரு மூலக்கூறுக்கு வரையறுக்கப்படுகிறது."
        },
        {
            title: "JEE Level: Mean Free Path",
            titleTamil: "ஜே.இ.இ நிலை: சராசரி மோதலிடைத் தூரம்",
            difficulty: 'Medium',
            problem: "Estimate the mean free path for a water molecule in water vapour at 373 K. The diameter of a water molecule is about 2 Å. The number density of water molecules at 373 K and 1 atm is about 3 x 10²⁵ m⁻³.",
            problemTamil: "373 K வெப்பநிலையில் உள்ள நீராவியில் ஒரு நீர் மூலக்கூறுக்கான சராசரி மோதலிடைத் தூரத்தைக் கணக்கிடுக. ஒரு நீர் மூலக்கூறின் விட்டம் சுமார் 2 Å ஆகும். 373 K மற்றும் 1 atm இல் நீர் மூலக்கூறுகளின் எண் அடர்த்தி சுமார் 3 x 10²⁵ m⁻³ ஆகும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Recall the formula for mean free path (λ).",
                    explanationTamil: "சராசரி மோதலிடைத் தூரத்திற்கான (λ) சூத்திரத்தை நினைவுகூர்க.",
                    calculation: "\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}"
                },
                {
                    step: 2,
                    explanation: "Identify the given values in SI units. n = 3 x 10²⁵ m⁻³, d = 2 Å = 2 x 10⁻¹⁰ m.",
                    explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை SI அலகுகளில் அடையாளம் காணவும். n = 3 x 10²⁵ m⁻³, d = 2 Å = 2 x 10⁻¹⁰ m."
                },
                {
                    step: 3,
                    explanation: "Substitute the values into the formula.",
                    explanationTamil: "சூத்திரத்தில் மதிப்புகளைப் பிரதியிடவும்.",
                    calculation: "\\lambda = \\frac{1}{1.414 \\times 3.14 \\times (3 \\times 10^{25}) \\times (2 \\times 10^{-10})^2}"
                },
                {
                    step: 4,
                    explanation: "Calculate the final result.",
                    calculation: "\\lambda = \\frac{1}{4.44 \\times (3 \\times 10^{25}) \\times (4 \\times 10^{-20})} = \\frac{1}{53.28 \\times 10^5} \\approx 1.88 \\times 10^{-7} m"
                }
            ],
            neetHack: "Exact calculation is rarely needed. Focus on the proportionality. Mean free path is inversely proportional to the number density (and pressure) and the square of the molecular diameter.",
            neetHackTamil: "துல்லியமான கணக்கீடு அரிதாகவே தேவைப்படுகிறது. விகிதாசாரத்தில் கவனம் செலுத்துங்கள். சராசரி மோதலிடைத் தூரம் எண் அடர்த்திக்கும் (மற்றும் அழுத்தத்திற்கும்) மற்றும் மூலக்கூறு விட்டத்தின் வர்க்கத்திற்கும் எதிர்விகிதத்தில் உள்ளது."
        },
        {
            title: "NEET Level: Specific Heat Ratio",
            titleTamil: "நீட் நிலை: தன்வெப்ப ஏற்புத்திறன் விகிதம்",
            difficulty: "Easy",
            problem: "The ratio of the specific heats Cp/Cv = γ for a gas is 1.4. The gas is likely to be:",
            problemTamil: "ஒரு வாயுவிற்கு தன்வெப்ப ஏற்புத்திறன்களின் விகிதம் Cp/Cv = γ என்பது 1.4 ஆகும். அந்த வாயு எதுவாக இருக்க வாய்ப்புள்ளது:",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Recall the values of γ for different types of gases.",
                    explanationTamil: "வெவ்வேறு வகை வாயுக்களுக்கான γ இன் மதிப்புகளை நினைவுகூர்க."
                },
                {
                    step: 2,
                    explanation: "For a monoatomic gas, f=3, γ = 1 + 2/3 = 5/3 ≈ 1.67.",
                    explanationTamil: "ஓரணு வாயுவிற்கு, f=3, γ ≈ 1.67."
                },
                {
                    step: 3,
                    explanation: "For a diatomic gas, f=5, γ = 1 + 2/5 = 7/5 = 1.4.",
                    explanationTamil: "ஈரணு வாயுவிற்கு, f=5, γ = 1.4."
                },
                {
                    step: 4,
                    explanation: "For a non-linear triatomic gas, f=6, γ = 1 + 2/6 = 4/3 ≈ 1.33.",
                    explanationTamil: "நேரியல் அல்லாத மூவணு வாயுவிற்கு, f=6, γ ≈ 1.33."
                },
                {
                    step: 5,
                    explanation: "The given value γ = 1.4 matches that of a diatomic gas.",
                    explanationTamil: "கொடுக்கப்பட்ட மதிப்பு γ = 1.4 என்பது ஈரணு வாயுவின் மதிப்புடன் பொருந்துகிறது."
                }
            ],
            problem: "The gas is likely to be diatomic (e.g., O₂, N₂, H₂).",
            answer: "The gas is likely to be diatomic."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'v_{rms} = \\sqrt{\\frac{3RT}{M}}',
                description: 'Root Mean Square (RMS) Speed',
                descriptionTamil: 'மூல சராசரி வர்க்க வேகம்'
            },
            {
                formula: 'U = \\frac{f}{2}nRT',
                description: 'Internal Energy of an Ideal Gas',
                descriptionTamil: 'நல்லியல்பு வாயுவின் அக ஆற்றல்'
            },
            {
                formula: 'C_v = \\frac{f}{2}R',
                description: 'Molar Specific Heat at Constant Volume',
                descriptionTamil: 'மாறா பருமனில் மோலார் தன்வெப்ப ஏற்புத்திறன்'
            },
            {
                formula: '\\gamma = 1 + \\frac{2}{f}',
                description: 'Adiabatic Exponent (Ratio of specific heats)',
                descriptionTamil: 'வெப்பப் பரிமாற்றமில்லா அடுக்கெண் (தன்வெப்ப ஏற்புத்திறன்களின் விகிதம்)'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Gas pressure arises from molecular collisions with container walls.",
        "Absolute temperature is a direct measure of the average translational kinetic energy of molecules.",
        "The internal energy of an ideal gas depends on its temperature and its degrees of freedom (molecular structure).",
        "The ratio of specific heats, γ, is determined solely by the degrees of freedom of the gas molecules."
    ],
    mnemonics: [
        { text: "Remember the γ values: Mono (5/3), Dia (7/5), Poly (4/3). The numbers (5,7,4) and (3,5,3) decrease.", tamil: "γ மதிப்புகளை நினைவில் கொள்க: ஓரணு (5/3), ஈரணு (7/5), பலவணு (4/3). எண்கள் (5,7,4) மற்றும் (3,5,3) குறைகின்றன." }
    ],
    neetTips: [
        { text: "For ratio-based questions involving RMS speed, you often don't need the value of R. Use v ∝ √(T/M) to quickly find the answer.", tamil: "RMS வேகம் சம்பந்தப்பட்ட விகித அடிப்படையிலான கேள்விகளுக்கு, உங்களுக்கு பெரும்பாலும் R-இன் மதிப்பு தேவையில்லை. விடையை விரைவாகக் கண்டுபிடிக்க v ∝ √(T/M) ஐப் பயன்படுத்தவும்." },
        { text: "Always convert temperature to Kelvin for all calculations in kinetic theory and thermodynamics.", tamil: "இயக்கவியற் கொள்கை மற்றும் வெப்ப இயக்கவியலில் உள்ள அனைத்து கணக்கீடுகளுக்கும் வெப்பநிலையை எப்போதும் கெல்வின் ஆக மாற்றவும்." }
    ],
    studentTip: {
        english: `Always start by sketching the Maxwell speed distribution f(v) vs v: label v_mp = √(2RT/M), v_avg = √(8RT/πM), and v_rms = √(3RT/M). Then derive pressure:  
    P = ⅓ (N/V) m ⟨v²⟩  
    This links microscopic collisions to macroscopic PV = nRT and cements all key speed formulas.`,
        tamil: `எப்பொழுது Maxwell வேகப் பகிர்வு f(v) vs v வரைபடத்தை வரைந்து v_mp = √(2RT/M), v_avg = √(8RT/πM), v_rms = √(3RT/M) என்பவற்றை குறியுங்கள். பிறகு அழுத்தத்தை கண்டு பிடியுங்கள்:  
    P = ⅓ (N/V) m ⟨v²⟩  
    இது நுண்ணுணர்ச்சிக் கல்லணைகளை mak்ரோ அளவிலான PV = nRT உடன் இணைத்து முக்கிய வேக சூத்திரங்களை உறுதிப்படுத்தும்.`
      },
      peerDiscussion: {
        english: `Discuss how mean free path λ = kT/(√2 π d² P) varies with pressure, temperature, and molecular diameter. How do changes in λ and collision frequency affect viscosity, thermal conductivity, and diffusion in real gases?`,
        tamil: `இடையே மருவின் சராசரி பாதை λ = kT/(√2 π d² P) அழுத்தம், வெப்பநிலை மற்றும் மூலக்கூறும் விட்டம்(d) யுடன் எவ்வாறு மாறும் என்பதை விவாதியுங்கள். λ மற்றும் மோதல் அதிர்தல் மாற்றங்கள் உண்மை வாயுக்கள் உள்ள விசைசத்து, வெப்பவாட்டுத்திறன் மற்றும் பகிர்திறனுக்கு எவ்வாறு பாதிப்பாக இருக்கும்?`
      },
    mcqs: [
        {
            question: "According to the kinetic theory of gases, at absolute zero of temperature:",
            options: ["A. Water freezes", "B. Liquid helium freezes", "C. Molecular motion stops", "D. All of the above"],
            answer: "C. Molecular motion stops",
            explanation: "Absolute zero (0 K) is the temperature at which the average kinetic energy of molecules is zero, meaning all translational molecular motion ceases.",
            neetFrequency: 3
        },
        {
            question: "The ratio of specific heats Cp/Cv = γ for a monoatomic gas is:",
            options: ["A. 5/3", "B. 7/5", "C. 4/3", "D. 9/7"],
            answer: "A. 5/3",
            explanation: "For a monoatomic gas, degrees of freedom f = 3. γ = 1 + 2/f = 1 + 2/3 = 5/3.",
            neetFrequency: 5
        },
        {
            question: "The RMS speed of gas molecules is directly proportional to:",
            options: ["A. T", "B. T²", "C. √T", "D. 1/√T"],
            answer: "C. √T",
            explanation: "From the formula v_rms = \\sqrt{3RT/M}, we can see that v_rms is proportional to the square root of the absolute temperature T.",
            neetFrequency: 5
        },
        {
            question: "At a given temperature, which of the following gases will have the highest RMS speed?",
            options: ["A. Oxygen (O₂)", "B. Nitrogen (N₂)", "C. Hydrogen (H₂)", "D. Carbon Dioxide (CO₂)"],
            answer: "C. Hydrogen (H₂)",
            explanation: "RMS speed v_rms is inversely proportional to the square root of the molar mass M (v_rms ∝ 1/√M). Since Hydrogen has the lowest molar mass, it will have the highest RMS speed.",
            neetFrequency: 4
        },
        {
            question: "The number of translational degrees of freedom for a diatomic gas molecule is:",
            options: ["A. 2", "B. 3", "C. 5", "D. 6"],
            answer: "B. 3",
            explanation: "Any molecule, regardless of its structure (monoatomic, diatomic, etc.), can move along the x, y, and z axes. Therefore, it always has 3 translational degrees of freedom.",
            neetFrequency: 3
        },
        { question: "The internal energy of 1 mole of an ideal diatomic gas at temperature T is:", options: ["A. (3/2)RT", "B. (5/2)RT", "C. (7/2)RT", "D. RT"], answer: "B. (5/2)RT", explanation: "For a diatomic gas, f=5. Internal energy U = (f/2)nRT = (5/2)(1)RT.", neetFrequency: 4 },
        { question: "Pressure exerted by a gas is proportional to:", options: ["A. The average velocity of molecules", "B. The root mean square velocity of molecules", "C. The square of the average velocity", "D. The square of the root mean square velocity"], answer: "D. The square of the root mean square velocity", explanation: "From P = (1/3)ρv_rms², pressure is directly proportional to the square of the RMS velocity.", neetFrequency: 3 },
        { question: "The average kinetic energy of a gas molecule is zero when the temperature is:", options: ["A. 0°C", "B. 0 K", "C. 273°C", "D. 100°C"], answer: "B. 0 K", explanation: "Average K.E. = (3/2)kT. It becomes zero only at absolute zero temperature (0 Kelvin).", neetFrequency: 2 },
        { question: "For a gas, R/Cv = 0.4. The gas must be:", options: ["A. Monoatomic", "B. Diatomic", "C. Triatomic", "D. A mixture"], answer: "B. Diatomic", explanation: "R/Cv = R/((f/2)R) = 2/f. So, 0.4 = 2/f => f = 2/0.4 = 5. Degrees of freedom f=5 corresponds to a diatomic gas.", neetFrequency: 4 },
        { question: "The mean free path of a gas molecule is inversely proportional to:", options: ["A. Temperature", "B. Pressure", "C. Volume", "D. Mass"], answer: "B. Pressure", explanation: "Mean free path λ ∝ 1/n, where n is number density. From PV=NkT, n=N/V = P/kT. So, λ ∝ 1/P. It is inversely proportional to pressure.", neetFrequency: 3 },
        { question: "If the temperature of a gas is doubled, its RMS speed becomes:", options: ["A. Doubled", "B. Halved", "C. √2 times", "D. 1/√2 times"], answer: "C. √2 times", explanation: "v_rms ∝ √T. If T becomes 2T, v_rms becomes √2 times the original.", neetFrequency: 5 },
        { question: "Which of the following is a postulate of the kinetic theory of gases?", options: ["A. Molecules are always at rest", "B. Collisions are inelastic", "C. There are strong intermolecular forces", "D. The volume of molecules is negligible compared to gas volume"], answer: "D. The volume of molecules is negligible compared to gas volume", explanation: "This is one of the key assumptions of the kinetic theory for an ideal gas.", neetFrequency: 1 },
        { question: "The specific heat of a gas at constant volume (Cv) for a monoatomic gas is:", options: ["A. (3/2)R", "B. (5/2)R", "C. (7/2)R", "D. R"], answer: "A. (3/2)R", explanation: "For a monoatomic gas, f=3. Cv = (f/2)R = (3/2)R.", neetFrequency: 3 },
        { question: "What is the ratio of the RMS speeds of O₂ and H₂ at the same temperature?", options: ["A. 1:4", "B. 4:1", "C. 1:16", "D. 16:1"], answer: "A. 1:4", explanation: "v_rms ∝ 1/√M. So, v(O₂)/v(H₂) = √(M(H₂)/M(O₂)) = √(2/32) = √(1/16) = 1/4.", neetFrequency: 4 },
        { question: "The law of equipartition of energy states that the energy associated with each degree of freedom per molecule is:", options: ["A. kT", "B. (1/2)kT", "C. (3/2)kT", "D. (5/2)kT"], answer: "B. (1/2)kT", explanation: "This is the definition of the law of equipartition of energy.", neetFrequency: 2 },
        { question: "At what temperature is the RMS speed of an atom in an argon gas cylinder equal to the RMS speed of a helium gas atom at -20°C?", options: ["A. 2530 K", "B. 253 K", "C. 25.3 K", "D. 2530°C"], answer: "A. 2530 K", explanation: "v_rms(Ar) = v_rms(He). √(3RT_Ar/M_Ar) = √(3RT_He/M_He). T_Ar/M_Ar = T_He/M_He. T_He = -20+273 = 253K. T_Ar = T_He * (M_Ar/M_He) = 253 * (40/4) = 2530 K.", neetFrequency: 3 },
        { question: "A sealed container with a gas is heated. Which quantity does NOT increase?", options: ["A. The average speed of molecules", "B. The number of molecules", "C. The pressure of the gas", "D. The internal energy of the gas"], answer: "B. The number of molecules", explanation: "Since the container is sealed, the number of molecules remains constant. Heating increases temperature, which increases speed, internal energy, and pressure.", neetFrequency: 2 },
        { question: "The value of Boltzmann's constant is:", options: ["A. 8.31 J/mol·K", "B. 1.38 x 10⁻²³ J/K", "C. 6.023 x 10²³ /mol", "D. 9.1 x 10⁻³¹ kg"], answer: "B. 1.38 x 10⁻²³ J/K", explanation: "This is the value of Boltzmann's constant (k_B). 8.31 is the universal gas constant R.", neetFrequency: 1 },
        { question: "What is the ratio Cp/Cv for a diatomic gas?", options: ["A. 1.33", "B. 1.4", "C. 1.5", "D. 1.67"], answer: "B. 1.4", explanation: "For a diatomic gas, f=5. γ = 1 + 2/f = 1 + 2/5 = 7/5 = 1.4.", neetFrequency: 5 },
        { question: "If the pressure of a gas is doubled keeping its temperature constant, the mean free path will:", options: ["A. Be doubled", "B. Be halved", "C. Remain the same", "D. Be quadrupled"], answer: "B. Be halved", explanation: "Mean free path is inversely proportional to pressure (λ ∝ 1/P). So if pressure is doubled, the mean free path is halved.", neetFrequency: 3 },
        { question: "The temperature of a gas is a measure of:", options: ["A. The total kinetic energy of its molecules", "B. The average potential energy of its molecules", "C. The average translational kinetic energy of its molecules", "D. The heat content of the gas"], answer: "C. The average translational kinetic energy of its molecules", explanation: "This is the precise definition from the kinetic theory. Temperature is directly proportional to the average translational kinetic energy.", neetFrequency: 4 },
        { question: "If the number of molecules in a container is doubled, what will be the effect on the RMS velocity of the molecules?", options: ["A. Doubled", "B. Halved", "C. No effect", "D. Quadrupled"], answer: "C. No effect", explanation: "RMS velocity (v_rms = √(3RT/M)) depends on temperature and molar mass, not on the number of molecules or pressure.", neetFrequency: 2 },
        { question: "The degrees of freedom of a water molecule (H₂O), which is non-linear, is:", options: ["A. 3", "B. 5", "C. 6", "D. 7"], answer: "C. 6", explanation: "A non-linear triatomic molecule has 3 translational and 3 rotational degrees of freedom, for a total of 6.", neetFrequency: 3 },
        { question: "The relation between pressure (P) and average kinetic energy per unit volume (E) of a gas is:", options: ["A. P = (2/3)E", "B. P = (3/2)E", "C. P = E/3", "D. P = 3E"], answer: "A. P = (2/3)E", explanation: "P = (1/3)ρv_rms². Average K.E. per unit volume E = (1/2)ρv_rms². So, P = (2/3)E.", neetFrequency: 4 },
        { question: "Mayer's formula relating Cp and Cv is:", options: ["A. Cp/Cv = R", "B. Cv/Cp = R", "C. Cp - Cv = R", "D. Cp + Cv = R"], answer: "C. Cp - Cv = R", explanation: "Mayer's formula is Cp - Cv = R for one mole of an ideal gas.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "The internal energy of an ideal gas depends only on its temperature.",
            reason: "For an ideal gas, there are no intermolecular forces of attraction, so there is no potential energy in the system.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. Internal energy is the sum of kinetic and potential energies. Since intermolecular PE is zero for an ideal gas, U is just the total kinetic energy, which depends only on temperature.",
            neetFrequency: 5
        },
        {
            assertion: "Cp is always greater than Cv for any gas.",
            reason: "When a gas is heated at constant pressure, some of the heat is used to do work of expansion.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and correctly explains why. At constant pressure, Q_p = ΔU + W. At constant volume, Q_v = ΔU. Since work W is done during expansion, Q_p > Q_v, which implies Cp > Cv.",
            neetFrequency: 4
        },
        {
            assertion: "The RMS speed of hydrogen molecules is greater than that of oxygen molecules at the same temperature.",
            reason: "The molar mass of hydrogen is less than that of oxygen.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. Since v_rms ∝ 1/√M, the gas with the lower molar mass (Hydrogen) will have a higher RMS speed.",
            neetFrequency: 3
        },
        {
            assertion: "The ratio Cp/Cv for a diatomic gas is more than that for a monoatomic gas.",
            reason: "Diatomic gas molecules have more degrees of freedom than monoatomic gas molecules.",
            answer: "D",
            explanation: "The assertion is false. For diatomic gas, γ = 7/5 = 1.4. For monoatomic gas, γ = 5/3 ≈ 1.67. So γ_mono > γ_dia. The reason is a true statement.",
            neetFrequency: 3
        },
        {
            assertion: "The pressure of a gas is proportional to the average kinetic energy of its molecules.",
            reason: "The temperature of a gas is a measure of its average kinetic energy.",
            answer: "B",
            explanation: "Both statements are true. P = (2/3)E, where E is K.E. per unit volume. And T is a measure of average K.E. However, the reason doesn't directly explain the assertion about pressure. The explanation for pressure relates to momentum transfer during collisions.",
            neetFrequency: 2
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Monoatomic Gas", "(b) Diatomic Gas", "(c) RMS Speed", "(d) Average K.E."],
            column2: ["(p) Proportional to √T", "(q) γ = 7/5", "(r) Proportional to T", "(s) γ = 5/3"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching gas types to their γ values and physical quantities to their temperature dependencies.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Translational K.E.", "(b) Rotational K.E.", "(c) Total internal energy of 1 mole of diatomic gas", "(d) Total internal energy of 1 mole of monoatomic gas"],
            column2: ["(p) (3/2)RT", "(q) RT", "(r) (5/2)RT"],
            answer: "a-p, b-q, c-r, d-p",
            explanation: "Translational K.E. is always (3/2)RT. For a diatomic gas, rotational K.E. is (2/2)RT = RT. Total for diatomic is (5/2)RT. Total for monoatomic is (3/2)RT.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Mean free path", "(b) Pressure", "(c) RMS speed", "(d) γ"],
            column2: ["(p) 1 + 2/f", "(q) Inversely proportional to pressure", "(r) Proportional to √(T/M)", "(s) Proportional to number density"],
            answer: "a-q, b-s, c-r, d-p",
            explanation: "Matching quantities with their proportionality or formula.",
            neetFrequency: 3
        },
        {
            column1: ["(a) C_v for diatomic gas", "(b) C_p for diatomic gas", "(c) C_v for monoatomic gas", "(d) C_p for monoatomic gas"],
            column2: ["(p) (3/2)R", "(q) (5/2)R", "(r) (7/2)R"],
            answer: "a-q, b-r, c-p, d-q",
            explanation: "Matching specific heat values for different types of gases.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Ideal Gas Equation", "(b) Mayer's Relation", "(c) Law of Equipartition", "(d) First Law of Thermodynamics"],
            column2: ["(p) Energy per degree of freedom is (1/2)kT", "(q) PV = nRT", "(r) ΔU = Q - W", "(s) Cp - Cv = R"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the names of laws and relations with their equations.",
            neetFrequency: 2
        }
    ]
};

    