
import type { NeetModule } from '@/lib/types';

export const chemicalThermodynamicsModule: NeetModule = {
    id: 'neet-chemistry-chemical-thermodynamics',
    title: 'Chemistry - Chemical Thermodynamics (வேதி வெப்ப இயக்கவியல்)',
    chapter: 'Chemical Thermodynamics',
    subject: 'Chemistry',
    learningObjectives: [
        "Define thermodynamic terms like system, surroundings, and types of systems.",
        "Understand the concepts of internal energy, heat, and work.",
        "State and apply the First Law of Thermodynamics.",
        "Define enthalpy and calculate enthalpy changes for various reactions (e.g., formation, combustion, neutralization).",
        "State and apply Hess's Law of constant heat summation.",
        "Understand entropy as a measure of disorder and the Second Law of Thermodynamics.",
        "Define Gibbs free energy and use it to predict the spontaneity of a reaction."
    ],
    prerequisites: [
        "Basic concepts of stoichiometry and chemical reactions.",
        "Understanding of heat and temperature."
    ],
    conceptOverview: "Thermodynamics is the study of energy transformations. This chapter applies the fundamental laws of thermodynamics to chemical reactions. The First Law deals with the conservation of energy (internal energy, heat, and work). The concept of enthalpy allows us to measure heat changes in reactions. The Second Law introduces entropy, a measure of randomness or disorder, and helps us understand the direction of spontaneous processes. Finally, Gibbs free energy combines enthalpy and entropy to provide the ultimate criterion for predicting whether a chemical reaction will occur spontaneously under given conditions.",
    tamilConnection: "ஒரு வினை நடக்குமா, நடக்காதா? நடந்தால் வெப்பம் வெளியாகுமா அல்லது உட்கொள்ளப்படுமா? இந்தக் கேள்விகளுக்கெல்லாம் வெப்ப இயக்கவியல் பதிலளிக்கிறது. எந்த ஒரு செயல்முறையும் இயற்கையாக நிகழ, அது பிரபஞ்சத்தின் ஒழுங்கின்மையை (entropy) அதிகரிக்க வேண்டும் என்பது இரண்டாம் விதியின் சாராம்சம்.",
    culturalContext: "The spontaneous rusting of the iron pillar of Delhi, which has withstood corrosion for centuries, is a thermodynamic puzzle. While the formation of rust (iron oxide) is a thermodynamically spontaneous process (negative Gibbs free energy), other factors (kinetics, purity of iron, a protective surface layer) have dramatically slowed down the rate. This illustrates the interplay between spontaneity (thermodynamics) and speed (kinetics).",
    syllabusMapping: [
        {
            topic: "Thermodynamics",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 7: Thermodynamics",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 6: Thermodynamics",
            notes: "A very important and conceptual chapter. Problems based on Hess's law, Born-Haber cycle, and Gibbs free energy equation (ΔG = ΔH - TΔS) are frequently asked. Understanding the sign conventions is crucial.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapter 7 maps to NEET Chemistry Unit 6'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Basic Terminology & Zeroth Law',
                tamil: '1. அடிப்படை சொற்கள் மற்றும் சுழி விதி'
            },
            content: [
                {
                    english: `**System (அமைப்பு):** The part of the universe under observation.
*   **Surroundings (சூழல்):** Everything else in the universe except the system.
*   **Types of Systems:**
    *   *Open System:* Can exchange both energy and matter.
    *   *Closed System:* Can exchange energy but not matter.
    *   *Isolated System:* Can exchange neither energy nor matter.`,
                    tamil: `**அமைப்பு:** பிரபஞ்சத்தில் நாம் ஆய்வு செய்யும் பகுதி.
*   **சூழல்:** அமைப்பைத் தவிர பிரபஞ்சத்தில் உள்ள மற்ற அனைத்தும்.
*   **அமைப்புகளின் வகைகள்:**
    *   *திறந்த அமைப்பு:* ஆற்றல் மற்றும் பருப்பொருள் இரண்டையும் பரிமாறிக்கொள்ள முடியும்.
    *   *மூடிய அமைப்பு:* ஆற்றலை பரிமாறிக்கொள்ள முடியும் ஆனால் பருப்பொருளை முடியாது.
    *   *தனித்த அமைப்பு:* ஆற்றல் மற்றும் பருப்பொருள் இரண்டையும் பரிமாறிக்கொள்ள முடியாது.`
                },
                {
                    english: `**State variables vs Path variables:**
*   *State variables:* Properties that depend only on the current state of the system (P, V, T, U, H, S, G).
*   *Path variables:* Properties that depend on the path taken to reach a state (Work, Heat).`,
                    tamil: `**நிலை மாறிகள் vs வழி மாறிகள்:**
*   *நிலை மாறிகள்:* அமைப்பின் தற்போதைய நிலையை மட்டுமே சார்ந்திருக்கும் பண்புகள் (P, V, T, U, H, S, G).
*   *வழி மாறிகள்:* ஒரு நிலையை அடைய எடுக்கப்பட்ட வழியைச் சார்ந்திருக்கும் பண்புகள் (வேலை, வெப்பம்).`
                },
                {
                    english: `**Zeroth Law of Thermodynamics:** If two systems are separately in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law introduces the concept of temperature.`,
                    tamil: `**வெப்ப இயக்கவியலின் சுழி விதி:** இரண்டு அமைப்புகள் ஒரு மூன்றாவது அமைப்புடன் தனித்தனியாக வெப்பச் சமநிலையில் இருந்தால், அவை ஒன்றுக்கொன்று வெப்பச் சமநிலையில் இருக்கும். இந்த விதி வெப்பநிலை என்ற கருத்தை அறிமுகப்படுத்துகிறது.`
                }
            ]
        },
        {
            heading: {
                english: '2. First Law of Thermodynamics',
                tamil: '2. வெப்ப இயக்கவியலின் முதல் விதி'
            },
            content: [
                {
                    english: `This is the law of conservation of energy. It states that the change in internal energy ($\\Delta U$) of a system is equal to the heat supplied to the system (q) plus the work done on the system (w).
$$ \\Delta U = q + w $$
*   **Sign Convention:**
    *   Heat absorbed by the system, q = positive.
    *   Work done *on* the system, w = positive.
    *   Work done *by* the system (expansion), w = negative.
*   The formula can also be written as $\\Delta U = q - W_{by}$, where $W_{by}$ is work done by the system.
*   Work of expansion: $w = -P_{ext}\\Delta V$.`,
                    tamil: `இது ஆற்றல் அழிவின்மை விதி. ஒரு அமைப்பின் அக ஆற்றல் மாற்றம் ($\\Delta U$), அமைப்புக்கு வழங்கப்படும் வெப்பம் (q) மற்றும் அமைப்பின் மீது செய்யப்பட்ட வேலை (w) ஆகியவற்றின் கூடுதலுக்கு சமம் என்று இது கூறுகிறது.
*   **குறியீட்டு மரபு:**
    *   அமைப்பால் உறிஞ்சப்பட்ட வெப்பம், q = நேர்க்குறி.
    *   அமைப்பின் மீது செய்யப்பட்ட வேலை, w = நேர்க்குறி.
    *   அமைப்பால் செய்யப்பட்ட வேலை (விரிவடைதல்), w = எதிர்க்குறி.
*   விரிவடைதல் வேலை: $w = -P_{ext}\\Delta V$.`
                }
            ]
        },
        {
            heading: {
                english: '3. Enthalpy (H) and Hess\'s Law',
                tamil: '3. என்தால்பி (H) மற்றும் ஹெஸ் விதி'
            },
            content: [
                {
                    english: `**Enthalpy (H):** A thermodynamic property of a system. It is the sum of the internal energy of the system plus the product of its pressure and volume. $H = U + PV$.
*   **Enthalpy Change ($\\Delta H$):** The heat absorbed or evolved by a system at constant pressure. $\\Delta H = \\Delta U + P\\Delta V$.
*   **Exothermic Reaction (வெப்ப உமிழ் வினை):** Heat is released. $\\Delta H$ is negative.
*   **Endothermic Reaction (வெப்பம் கொள் வினை):** Heat is absorbed. $\\Delta H$ is positive.`,
                    tamil: `**என்தால்பி (H):** ஒரு அமைப்பின் வெப்ப இயக்கவியல் பண்பு. இது அமைப்பின் அக ஆற்றல் மற்றும் அதன் அழுத்தம் மற்றும் பருமனின் பெருக்கற்பலனின் கூடுதலாகும். $H = U + PV$.
*   **என்தால்பி மாற்றம் ($\\Delta H$):** மாறா அழுத்தத்தில் ஒரு அமைப்பால் உறிஞ்சப்பட்ட அல்லது வெளிப்படும் வெப்பம். $\\Delta H = \\Delta U + P\\Delta V$.
*   **வெப்ப உமிழ் வினை:** வெப்பம் வெளியிடப்படுகிறது. $\\Delta H$ எதிர்மறையாகும்.
*   **வெப்பம் கொள் வினை:** வெப்பம் உறிஞ்சப்படுகிறது. $\\Delta H$ நேர்மறையாகும்.`
                },
                {
                    english: `**Hess's Law of Constant Heat Summation:** The total enthalpy change for a reaction is the same, whether the reaction takes place in one step or in several steps.`,
                    tamil: `**ஹெஸ்ஸின் மாறா வெப்பக் கூட்டல் விதி:** ஒரு வினை ஒரே படியில் நடந்தாலும் அல்லது பல படிகளில் நடந்தாலும், வினைக்கான மொத்த என்தால்பி மாற்றம் சமமாக இருக்கும்.`
                }
            ]
        },
        {
            heading: {
                english: '4. Second Law and Spontaneity',
                tamil: '4. இரண்டாம் விதி மற்றும் தன்னிச்சைத் தன்மை'
            },
            content: [
                {
                    english: `**Spontaneous Process (தன்னிச்சையான செயல்முறை):** A process that can occur on its own without any external aid.
*   **Entropy (S) (என்ட்ரோபி):** A measure of the degree of randomness or disorder of a system. For a spontaneous process in an isolated system, the change in entropy is always positive. $\\Delta S_{total} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$.`,
                    tamil: `**தன்னிச்சையான செயல்முறை:** எந்தவொரு வெளிப்புற உதவியும் இல்லாமல் தானாகவே நிகழக்கூடிய ஒரு செயல்முறை.
*   **என்ட்ரோபி (S):** ஒரு அமைப்பின் ஒழுங்கற்ற தன்மை அல்லது சீர்குலைவின் அளவீடு. ஒரு தனித்த அமைப்பில் தன்னிச்சையான செயல்முறைக்கு, என்ட்ரோபி மாற்றம் எப்போதும் நேர்மறையாக இருக்கும். $\\Delta S_{total} = \\Delta S_{அமைப்பு} + \\Delta S_{சூழல்} > 0$.`
                },
                {
                    english: `**Gibbs Free Energy (G) (கிப்ஸ் கட்டிலா ஆற்றல்):** A thermodynamic potential that can be used to predict the spontaneity of a process at constant temperature and pressure.
$$ \\Delta G = \\Delta H - T\\Delta S $$
*   If $\\Delta G < 0$ (negative), the process is **spontaneous**.
*   If $\\Delta G > 0$ (positive), the process is **non-spontaneous**.
*   If $\\Delta G = 0$, the system is in **equilibrium (சமநிலை)**.`,
                    tamil: `**கிப்ஸ் கட்டிலா ஆற்றல் (G):** மாறா வெப்பநிலை மற்றும் அழுத்தத்தில் ஒரு செயல்முறையின் தன்னிச்சைத் தன்மையைக் கணிக்கப் பயன்படும் ஒரு வெப்ப இயக்கவியல் ஆற்றல்.
*   $\\Delta G < 0$ (எதிர்மறை) எனில், செயல்முறை **தன்னிச்சையானது**.
*   $\\Delta G > 0$ (நேர்மறை) எனில், செயல்முறை **தன்னிச்சையற்றது**.
*   $\\Delta G = 0$ எனில், அமைப்பு **சமநிலையில்** உள்ளது.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: First Law of Thermodynamics",
            titleTamil: "நீட் நிலை: வெப்ப இயக்கவியலின் முதல் விதி",
            difficulty: 'Easy',
            problem: "A system absorbs 2 kJ of heat and does 500 J of work. Calculate the change in internal energy of the system.",
            problemTamil: "ஒரு அமைப்பு 2 kJ வெப்பத்தை உறிஞ்சி 500 J வேலையைச் செய்கிறது. அமைப்பின் அக ஆற்றல் மாற்றத்தைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "Identify the heat (q) and work (w) with their correct signs. Heat is absorbed, so q = +2 kJ = +2000 J. Work is done *by* the system, so w = +500 J (using W_by convention).", explanationTamil: "வெப்பம் (q) மற்றும் வேலை (w) ஆகியவற்றை அவற்றின் சரியான குறிகளுடன் அடையாளம் காணவும். வெப்பம் உறிஞ்சப்படுகிறது, எனவே q = +2 kJ = +2000 J. வேலை அமைப்பால் செய்யப்படுகிறது, எனவே w = +500 J (W_by மரபின்படி)." },
                { step: 2, explanation: "Apply the First Law of Thermodynamics: ΔU = q - w.", calculation: "\\Delta U = 2000 J - 500 J" },
                { step: 3, explanation: "Calculate the final result.", calculation: "\\Delta U = 1500 J" }
            ],
            neetHack: "Consistency in sign convention is the key to all First Law problems. Remember: Heat IN is positive, Work BY the system is positive in the ΔU = Q - W convention.",
            neetHackTamil: "முதல் விதி கணக்குகள் அனைத்திற்கும் குறியீட்டு மரபில் சீராக இருப்பது முக்கியம். நினைவில் கொள்க: வெப்பம் உள்ளே சென்றால் நேர்க்குறி, அமைப்பு வேலை *செய்தால்* நேர்க்குறி (ΔU = Q - W மரபில்).",
            commonPitfall: "Confusing the sign conventions for work. Physics chemistry often uses w = work done ON the system (ΔU=Q+w), while physics engines often use w = work done BY the system (ΔU=Q-w). Be consistent."
        },
        {
            title: "JEE Level: Enthalpy Calculation",
            titleTamil: "ஜே.இ.இ நிலை: என்தால்பி கணக்கீடு",
            difficulty: "Medium",
            problem: "For the reaction, N₂(g) + 3H₂(g) → 2NH₃(g), the change in internal energy, ΔU, at 298 K is -92.2 kJ. What is the enthalpy change, ΔH, for this reaction? (R = 8.314 J/mol·K)",
            problemTamil: "N₂(g) + 3H₂(g) → 2NH₃(g) என்ற வினைக்கு, 298 K இல் அக ஆற்றல் மாற்றம், ΔU, -92.2 kJ ஆகும். இந்த வினைக்கான என்தால்பி மாற்றம், ΔH, என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Use the relationship between enthalpy change and internal energy change: ΔH = ΔU + Δn_gRT.", explanationTamil: "என்தால்பி மாற்றம் மற்றும் அக ஆற்றல் மாற்றத்திற்கு இடையேயான தொடர்பைப் பயன்படுத்தவும்: ΔH = ΔU + Δn_gRT." },
                { step: 2, explanation: "Calculate Δn_g, the change in the number of moles of gaseous components.", calculation: "Δn_g = (moles of gaseous products) - (moles of gaseous reactants) = 2 - (1 + 3) = -2" },
                { step: 3, explanation: "Ensure all units are consistent. Convert R to kJ/mol·K. R = 8.314 J/mol·K = 0.008314 kJ/mol·K.", explanationTamil: "அனைத்து அலகுகளும் சீராக உள்ளதா என்பதை உறுதிப்படுத்தவும். R-ஐ kJ/mol·K ஆக மாற்றவும்." },
                { step: 4, explanation: "Substitute the values into the equation.", calculation: "ΔH = -92.2 kJ + (-2 mol)(0.008314 kJ/mol·K)(298 K)" },
                { step: 5, explanation: "Calculate the final result.", calculation: "ΔH = -92.2 kJ - 4.955 kJ ≈ -97.16 kJ" }
            ],
            commonPitfall: "Forgetting to calculate Δn_g correctly (products - reactants) or making unit errors between J and kJ for ΔU and R.",
            commonPitfallTamil: "Δn_g-ஐ சரியாகக் கணக்கிட மறப்பது (விளைபொருட்கள் - வினைபடுபொருட்கள்) அல்லது ΔU மற்றும் R-க்கான J மற்றும் kJ க்கு இடையில் அலகுப் பிழைகள் செய்வது."
        },
        {
            title: "NEET Level: Hess's Law",
            titleTamil: "நீட் நிலை: ஹெஸ் விதி",
            difficulty: "Medium",
            problem: "Given the following reactions:\nC(s) + O₂(g) → CO₂(g); ΔH = -393.5 kJ\nH₂(g) + ½O₂(g) → H₂O(l); ΔH = -285.8 kJ\nCH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l); ΔH = -890.3 kJ\nCalculate the enthalpy of formation of methane (CH₄).",
            problemTamil: "பின்வரும் வினைகள் கொடுக்கப்பட்டுள்ளன:\nC(s) + O₂(g) → CO₂(g); ΔH = -393.5 kJ\nH₂(g) + ½O₂(g) → H₂O(l); ΔH = -285.8 kJ\nCH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l); ΔH = -890.3 kJ\nமீத்தேன் (CH₄) உருவாவதற்கான என்தால்பியைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "The target reaction for the formation of methane is: C(s) + 2H₂(g) → CH₄(g).", explanationTamil: "மீத்தேன் உருவாவதற்கான இலக்கு வினை: C(s) + 2H₂(g) → CH₄(g)." },
                { step: 2, explanation: "Manipulate the given equations to arrive at the target equation. Equation 1 has C(s) as a reactant, so we keep it as is.", calculation: "Eq(1): C(s) + O₂(g) → CO₂(g); ΔH = -393.5 kJ" },
                { step: 3, explanation: "We need 2H₂(g) as a reactant. Multiply Equation 2 by 2.", calculation: "2 × Eq(2): 2H₂(g) + O₂(g) → 2H₂O(l); ΔH = 2 × (-285.8) = -571.6 kJ" },
                { step: 4, explanation: "We need CH₄(g) as a product. Reverse Equation 3. The sign of ΔH will also reverse.", calculation: "Reverse Eq(3): CO₂(g) + 2H₂O(l) → CH₄(g) + 2O₂(g); ΔH = +890.3 kJ" },
                { step: 5, explanation: "Add the three manipulated equations. The intermediate species (CO₂, O₂, H₂O) will cancel out, leaving the target equation.", calculation: "Adding them gives: C(s) + 2H₂(g) → CH₄(g)" },
                { step: 6, explanation: "Add the corresponding ΔH values to get the final enthalpy of formation.", calculation: "ΔH_f = -393.5 - 571.6 + 890.3 = -74.8 kJ" }
            ]
        },
        {
            title: "JEE Level: Spontaneity from Gibbs Free Energy",
            titleTamil: "ஜே.இ.இ நிலை: கிப்ஸ் கட்டிலா ஆற்றலிலிருந்து தன்னிச்சைத் தன்மை",
            difficulty: 'Medium',
            problem: "For a reaction, ΔH = 400 kJ/mol and ΔS = 200 J/K·mol. At what temperature will the reaction become spontaneous?",
            problemTamil: "ஒரு வினைக்கு, ΔH = 400 kJ/mol மற்றும் ΔS = 200 J/K·mol. எந்த வெப்பநிலையில் வினை தன்னிச்சையாக மாறும்?",
            solutionSteps: [
                { step: 1, explanation: "A reaction becomes spontaneous when ΔG becomes negative. The crossover point is at equilibrium, where ΔG = 0.", explanationTamil: "ΔG எதிர்மறையாகும்போது ஒரு வினை தன்னிச்சையாகிறது. மாறுநிலை புள்ளி சமநிலையில் உள்ளது, அங்கு ΔG = 0." },
                { step: 2, explanation: "Set ΔG = 0 in the Gibbs free energy equation: 0 = ΔH - TΔS.", calculation: "T = ΔH / ΔS" },
                { step: 3, explanation: "Ensure the units of ΔH and ΔS are consistent. Convert ΔS to kJ.", calculation: "ΔS = 200 J/K·mol = 0.2 kJ/K·mol" },
                { step: 4, explanation: "Calculate the equilibrium temperature T.", calculation: "T = (400 kJ/mol) / (0.2 kJ/K·mol) = 2000 K" },
                { step: 5, explanation: "Analyze the condition for spontaneity (ΔG < 0). We need ΔH - TΔS < 0, which means TΔS > ΔH, or T > ΔH/ΔS. Therefore, the reaction becomes spontaneous at temperatures above 2000 K.", explanationTamil: "தன்னிச்சைத் தன்மைக்கான நிபந்தனையை (ΔG < 0) பகுப்பாய்வு செய்யவும். நமக்கு T > ΔH/ΔS தேவை. எனவே, வினை 2000 K-க்கு மேல் வெப்பநிலையில் தன்னிச்சையாக மாறும்." }
            ]
        },
        {
            title: "NEET Level: Isothermal Work",
            titleTamil: "நீட் நிலை: சமவெப்பநிலை வேலை",
            difficulty: "Medium",
            problem: "2 moles of an ideal gas expand isothermally and reversibly from a volume of 10 L to 20 L at 27°C. Calculate the work done. (R = 8.314 J/mol·K)",
            problemTamil: "2 மோல் நல்லியல்பு வாயு 27°C வெப்பநிலையில் 10 L கனஅளவிலிருந்து 20 L கனஅளவிற்கு சமவெப்பநிலை மற்றும் மீள் முறையில் விரிவடைகிறது. செய்யப்பட்ட வேலையைக் கணக்கிடுக. (R = 8.314 J/mol·K)",
            solutionSteps: [
                { step: 1, explanation: "The work done by the gas in a reversible isothermal expansion is given by W = nRT ln(V₂/V₁).", explanationTamil: "ஒரு மீள் சமவெப்பநிலை விரிவடைதலில் வாயுவால் செய்யப்பட்ட வேலை W = nRT ln(V₂/V₁) ஆகும்." },
                { step: 2, explanation: "Convert temperature to Kelvin: T = 27 + 273 = 300 K.", explanationTamil: "வெப்பநிலையை கெல்வின் ஆக மாற்றவும்." },
                { step: 3, explanation: "Substitute the given values into the formula.", calculation: "W = 2 * 8.314 * 300 * ln(20/10) = 2 * 8.314 * 300 * ln(2)" },
                { step: 4, explanation: "Use the value of ln(2) ≈ 0.693.", calculation: "W = 4988.4 * 0.693 ≈ 3457 J = 3.457 kJ" }
            ]
        }
    ],
    mcqs: [
        {
            question: "Which of the following is an intensive property?",
            options: ["A. Volume", "B. Mass", "C. Enthalpy", "D. Temperature"],
            answer: "D. Temperature",
            explanation: "Intensive properties (like temperature, pressure, density) do not depend on the amount of matter. Extensive properties (like volume, mass, enthalpy) do.",
            neetFrequency: 2
        },
        {
            question: "For a cyclic process, the change in internal energy is:",
            options: ["A. Positive", "B. Negative", "C. Zero", "D. Dependent on the path"],
            answer: "C. Zero",
            explanation: "In a cyclic process, the system returns to its initial state. Since internal energy is a state function, the net change over a cycle is zero.",
            neetFrequency: 3
        },
        {
            question: "The first law of thermodynamics is a statement of conservation of:",
            options: ["A. Mass", "B. Momentum", "C. Charge", "D. Energy"],
            answer: "D. Energy",
            explanation: "The first law, ΔU = Q - W, is a form of the law of conservation of energy.",
            neetFrequency: 5
        },
        {
            question: "For an adiabatic process, which of the following is correct?",
            options: ["A. ΔU = 0", "B. Q = 0", "C. W = 0", "D. ΔT = 0"],
            answer: "B. Q = 0",
            explanation: "An adiabatic process is defined as one with no heat exchange with the surroundings.",
            neetFrequency: 5
        },
        {
            question: "The efficiency of a Carnot engine working between 127°C and 27°C is:",
            options: ["A. 25%", "B. 50%", "C. 75%", "D. 100%"],
            answer: "A. 25%",
            explanation: "First, convert temperatures to Kelvin. T₁ = 127 + 273 = 400 K. T₂ = 27 + 273 = 300 K. Efficiency η = 1 - (T₂/T₁) = 1 - (300/400) = 1 - 0.75 = 0.25, or 25%.",
            neetFrequency: 5
        }
    ],
    assertionReasons: [
        {
            assertion: "The efficiency of a Carnot engine is always less than 100%.",
            reason: "The temperature of the sink can never be zero Kelvin.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. Efficiency η = 1 - T₂/T₁. To have η=1 (100%), the sink temperature T₂ would have to be 0 K, which is practically unattainable (Third Law)."
        },
        {
            assertion: "Work and heat are path functions.",
            reason: "Their values depend on the path followed by the system to go from an initial to a final state.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct definition/explanation for a path function."
        },
        {
            assertion: "The internal energy of an ideal gas does not change during an isothermal process.",
            reason: "The internal energy of an ideal gas is a function of temperature only.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation for the assertion. Since temperature is constant in an isothermal process, the internal energy of an ideal gas does not change."
        },
        {
            assertion: "A refrigerator transfers heat from a cold body to a hot body.",
            reason: "This does not violate the second law of thermodynamics.",
            answer: "B",
            explanation: "Both statements are true. A refrigerator does pump heat from cold to hot. This does not violate the second law because it is not happening spontaneously; external work is being done on the system to achieve this."
        },
        {
            assertion: "The work done in an isochoric process is always zero.",
            reason: "Isochoric process is a constant volume process.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. Since W=PΔV and ΔV=0, the work done is zero."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Isothermal process", "(b) Adiabatic process", "(c) Isochoric process", "(d) Isobaric process"],
            column2: ["(p) ΔU = 0", "(q) Q = 0", "(r) W = 0", "(s) W = PΔV"],
            answer: "a-p, b-q, c-r, d-s"
        },
        {
            column1: ["(a) First Law", "(b) Second Law", "(c) Zeroth Law", "(d) Carnot Cycle"],
            column2: ["(p) Concept of Temperature", "(q) Conservation of Energy", "(r) Direction of Heat Flow", "(s) Reversible Cycle"],
            answer: "a-q, b-r, c-p, d-s"
        },
        {
            column1: ["(a) Heat Engine", "(b) Refrigerator", "(c) Internal Energy", "(d) Work Done"],
            column2: ["(p) Path function", "(q) State function", "(r) η = 1 - T₂/T₁", "(s) COP = Q₂/W"],
            answer: "a-r, b-s, c-q, d-p"
        },
        {
            column1: ["(a) P-V graph area", "(b) Slope of adiabatic curve", "(c) Slope of isothermal curve", "(d) Cyclic process"],
            column2: ["(p) -P/V", "(q) -γP/V", "(r) Work done", "(s) ΔU = 0"],
            answer: "a-r, b-q, c-p, d-s"
        },
        {
            column1: ["(a) Molar specific heat at constant volume (Cv)", "(b) Molar specific heat at constant pressure (Cp)", "(c) Adiabatic exponent (γ)", "(d) Mayer's relation"],
            column2: ["(p) (dU/dT)_v", "(q) (dH/dT)_p", "(r) Cp/Cv", "(s) Cp - Cv = R"],
            answer: "a-p, b-q, c-r, d-s"
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\Delta U = Q - W',
                description: 'First Law of Thermodynamics (Physics convention)',
                descriptionTamil: 'வெப்ப இயக்கவியலின் முதல் விதி (இயற்பியல் மரபு)'
            },
            {
                formula: 'W = nRT \\ln(V_f/V_i)',
                description: 'Work Done in Isothermal Process',
                descriptionTamil: 'சமவெப்பநிலைச் செயல்முறையில் செய்யப்பட்ட வேலை'
            },
            {
                formula: 'PV^\\gamma = \\text{constant}',
                description: 'Adiabatic Process Equation',
                descriptionTamil: 'வெப்பப் பரிமாற்றமில்லாச் செயல்முறை சமன்பாடு'
            },
            {
                formula: '\\eta = 1 - \\frac{T_2}{T_1}',
                description: 'Carnot Engine Efficiency',
                descriptionTamil: 'கார்னோ இயந்திரத் திறன்'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The First Law is about energy conservation; the Second Law is about the direction of energy transfer and its quality.",
        "Internal energy of an ideal gas depends only on its temperature.",
        "No heat engine can be more efficient than a Carnot engine operating between the same two temperatures.",
        "Work done is the area under the P-V graph."
    ],
    mnemonics: [
        { text: "Remember the Iso-processes: Iso'baric' (bar=pressure), Iso'choric' (volume), Iso'thermal' (temperature).", tamil: "சம-செயல்முறைகளை நினைவில் கொள்க: சம'அழுத்த' (bar=pressure), சம'பருமன்' (choric), சம'வெப்பநிலை' (thermal)." }
    ],
    neetTips: [
        {
            text: "Be very careful with the sign convention for work and heat. Work *done by* the system is positive in physics.",
            tamil: "வேலை மற்றும் வெப்பத்திற்கான குறியீட்டு மரபில் மிகவும் கவனமாக இருங்கள். இயற்பியலில், அமைப்பால் *செய்யப்பட்ட* வேலை நேர்க்குறியாகும்."
        },
        {
            text: "For cyclic processes on a P-V diagram, the net work done is the area enclosed by the loop. It's positive for clockwise cycles (engine) and negative for anticlockwise cycles (refrigerator).",
            tamil: "ஒரு P-V வரைபடத்தில் உள்ள சுழற்சி செயல்முறைகளுக்கு, நிகர வேலை என்பது வளைவால் சூழப்பட்ட பரப்பளவு ஆகும். இது கடிகார திசை சுழற்சிகளுக்கு (இயந்திரம்) நேர்க்குறியாகவும், கடிகார எதிர் திசை சுழற்சிகளுக்கு (குளிர்சாதனப்பெட்டி) எதிர்க்குறியாகவும் இருக்கும்."
        }
    ],
    studentTip: {
        english: "Focus on understanding the P-V diagrams for each type of process. The shape of the curve (and the area under it) tells you everything you need to know about the work done.",
        tamil: "ஒவ்வொரு வகை செயல்முறைக்குமான P-V வரைபடங்களைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள். வளைவின் வடிவம் (மற்றும் அதன் கீழ் உள்ள பரப்பளவு) செய்யப்பட்ட வேலையைப் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தையும் கூறுகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend why the efficiency of a real-world petrol engine is much lower than the Carnot efficiency calculated for the same source and sink temperatures. Where does the 'lost' energy go?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஒரு நிஜ உலக பெட்ரோல் இயந்திரத்தின் திறன், அதே மூல மற்றும் ஏற்பி வெப்பநிலைகளுக்கு கணக்கிடப்பட்ட கார்னோ திறனை விட ஏன் மிகவும் குறைவாக உள்ளது? 'இழக்கப்பட்ட' ஆற்றல் எங்கே செல்கிறது?"
    },
    nextChapter: {
        title: "Kinetic Theory of Gases",
        titleTamil: "வாயுக்களின் இயக்கவியற் கொள்கை"
    },
    validationReport: []
};
