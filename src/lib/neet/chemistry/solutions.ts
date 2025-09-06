
import type { NeetModule } from '@/lib/types';

export const solutions: NeetModule = {
    id: 'neet-chemistry-solutions',
    title: 'Chemistry - Solutions (கரைசல்கள்)',
    chapter: 'Solutions',
    subject: 'Chemistry',
    learningObjectives: [
        "Express the concentration of solutions in various units (Molarity, Molality, Normality, mole fraction, etc.).",
        "Understand the concept of solubility and Henry's Law for the solubility of gases in liquids.",
        "Explain Raoult's Law for volatile solutes and the concept of ideal and non-ideal solutions.",
        "Define and calculate the four colligative properties: relative lowering of vapour pressure, elevation in boiling point, depression in freezing point, and osmotic pressure.",
        "Use colligative properties to determine the molar mass of solutes.",
        "Understand abnormal molar masses and calculate the van't Hoff factor (i)."
    ],
    prerequisites: [
        "Mole concept and stoichiometry.",
        "Basic understanding of states of matter, especially liquids and gases.",
        "Concept of vapour pressure."
    ],
    conceptOverview: "This chapter deals with the properties of solutions, which are homogeneous mixtures of two or more substances. We will learn various ways to express the concentration of a solution, which is crucial for quantitative work. The core of the chapter focuses on 'colligative properties'—properties of solutions that depend only on the number of solute particles, not on their identity. These four properties (lowering of vapour pressure, boiling point elevation, freezing point depression, and osmotic pressure) have important applications, such as determining the molar mass of unknown substances and explaining phenomena like osmosis.",
    tamilConnection: "கடல் நீர் ஏன் சாதாரண நீரை விட மெதுவாக உறைகிறது? சர்க்கரை பாகு ஏன் தண்ணீரை விட அதிக வெப்பநிலையில் கொதிக்கிறது? இந்தக் கேள்விகளுக்கு 'கரைசல்களின் தொகுப்பண்புகள்' (colligative properties) பதிலளிக்கின்றன. ஒரு கரைபொருளைச் சேர்ப்பதால் ஒரு கரைப்பானின் பண்புகள் எவ்வாறு மாறுகின்றன என்பதை இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The traditional process of making pickles in Tamil Nadu involves preserving mangoes or other vegetables in a highly concentrated salt solution. The high salt concentration creates a high osmotic pressure, which draws water out of microorganisms through osmosis, preventing them from spoiling the pickle. This is a practical application of the colligative properties discussed in this chapter.",
    syllabusMapping: [
        {
            topic: "Solutions",
            tnBoardChapter: "12th Std Chemistry - Vol 1, Chapter 2: Solutions",
            ncertReference: "Class 12 Chemistry - Part 1, Chapter 2: Solutions",
            notes: "A very important chapter for numerical problems in physical chemistry. Questions on colligative properties are almost guaranteed in NEET. Understanding and applying the van't Hoff factor for electrolytes is crucial.",
            mappingDescription: '12th Std Chemistry - Vol 1, Chapter 2 maps to NEET Chemistry Unit 12'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Concentration of Solutions',
                tamil: '1. கரைசல்களின் செறிவு'
            },
            content: [
                {
                    english: `**Molarity (M):** Moles of solute / Volume of solution in L. (Temperature dependent)
*   **Molality (m):** Moles of solute / Mass of solvent in kg. (Temperature independent)
*   **Mole Fraction (χ):** Moles of component / Total moles of all components. (Dimensionless)`,
                    tamil: `**மோலாரிட்டி (M):** கரைபொருளின் மோல்கள் / கரைசலின் கனஅளவு (லிட்டரில்). (வெப்பநிலை சார்ந்தது)
*   **மோலாலிட்டி (m):** கரைபொருளின் மோல்கள் / கரைப்பானின் நிறை (கிகி-ல்). (வெப்பநிலை சாராதது)
*   **மோல் பின்னம் (χ):** ஒரு கூறுகளின் மோல்கள் / அனைத்து கூறுகளின் மொத்த மோல்கள். (பரிமாணமற்றது)`
                }
            ]
        },
        {
            heading: {
                english: '2. Solubility and Henry\'s Law',
                tamil: '2. கரைதிறன் மற்றும் ஹென்றி விதி'
            },
            content: [
                {
                    english: `**Solubility:** Maximum amount of a substance that can be dissolved in a specified amount of solvent at a specific temperature.
*   **Henry's Law:** The partial pressure of a gas in the vapour phase (p) is proportional to the mole fraction of the gas (χ) in the solution. $p = K_H \\chi$. Higher the value of $K_H$, lower is the solubility of the gas.`,
                    tamil: `**கரைதிறன்:** ஒரு குறிப்பிட்ட வெப்பநிலையில் ஒரு குறிப்பிட்ட அளவு கரைப்பானில் கரையக்கூடிய ஒரு பொருளின் பெரும அளவு.
*   **ஹென்றி விதி:** ஆவி நிலையில் ஒரு வாயுவின் பகுதி அழுத்தம் (p), கரைசலில் உள்ள வாயுவின் மோல் பின்னத்திற்கு (χ) நேர்த்தகவில் இருக்கும். $p = K_H \\chi$. $K_H$ இன் மதிப்பு அதிகமாக இருந்தால், வாயுவின் கரைதிறன் குறைவாக இருக்கும்.`
                }
            ]
        },
        {
            heading: {
                english: '3. Raoult\'s Law and Colligative Properties',
                tamil: '3. ரௌலட் விதி மற்றும் தொகுப்பண்புகள்'
            },
            content: [
                {
                    english: `**Colligative Properties:** Properties of solutions that depend on the number of solute particles, not on their nature.
*   **Raoult's Law:** For a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction in the solution. $p_A = p_A^\\circ \\chi_A$.
*   For a solution containing a **non-volatile solute**, the relative lowering of vapour pressure is equal to the mole fraction of the solute.
$$ \\frac{p_A^\\circ - p_A}{p_A^\\circ} = \\chi_B $$`,
                    tamil: `**தொகுப்பண்புகள்:** கரைபொருளின் தன்மையைச் சாராமல், அதன் துகள்களின் எண்ணிக்கையை மட்டுமே சார்ந்திருக்கும் கரைசல்களின் பண்புகள்.
*   **ரௌலட் விதி:** ஆவியாகும் திரவங்களின் கரைசலுக்கு, ஒவ்வொரு கூறுகளின் பகுதி ஆவி அழுத்தமும் கரைசலில் உள்ள அதன் மோல் பின்னத்திற்கு நேர்த்தகவில் இருக்கும். $p_A = p_A^\\circ \\chi_A$.
*   **ஆவியாகாத கரைபொருளைக்** கொண்ட ஒரு கரைசலுக்கு, ஆவி அழுத்தத்தின் சார்பு குறைவு கரைபொருளின் மோல் பின்னத்திற்கு சமம்.`
                },
                {
                    english: `**The four colligative properties are:**
1.  **Relative Lowering of Vapour Pressure (RLVP):** See above.
2.  **Elevation in Boiling Point ($\\Delta T_b$):** $\\Delta T_b = K_b m$, where $K_b$ is the ebullioscopic constant and m is molality.
3.  **Depression in Freezing Point ($\\Delta T_f$):** $\\Delta T_f = K_f m$, where $K_f$ is the cryoscopic constant.
4.  **Osmotic Pressure ($\\pi$) (சவ்வூடுபரவல் அழுத்தம்):** $\\pi = CRT$, where C is molar concentration.`,
                    tamil: `**நான்கு தொகுப்பண்புகள்:**
1.  **சார்பு ஆவி அழுத்தக் குறைவு (RLVP):** மேலே காண்க.
2.  **கொதிநிலை ஏற்றம் ($\\Delta T_b$):** $\\Delta T_b = K_b m$, இங்கு $K_b$ என்பது கொதிநிலை ஏற்ற மாறிலி.
3.  **உறைநிலைத் தாழ்வு ($\\Delta T_f$):** $\\Delta T_f = K_f m$, இங்கு $K_f$ என்பது உறைநிலைத் தாழ்வு மாறிலி.
4.  **சவ்வூடுபரவல் அழுத்தம் ($\\pi$):** $\\pi = CRT$, இங்கு C என்பது மோலார் செறிவு.`
                }
            ]
        },
        {
            heading: {
                english: '4. Abnormal Molar Mass and van\'t Hoff Factor (i)',
                tamil: '4. இயல்பற்ற மோலார் நிறை மற்றும் வான்ட் ஹாஃப் காரணி (i)'
            },
            content: [
                {
                    english: `When solutes associate or dissociate in a solution, the molar mass determined by colligative properties is different from the expected value. This is called abnormal molar mass.
*   **van't Hoff Factor (i):** A correction factor defined as:
$$ i = \\frac{\\text{Observed Colligative Property}}{\\text{Calculated Colligative Property}} = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal Molar Mass}} $$
*   For **association**, i < 1. For **dissociation**, i > 1. For non-electrolytes, i = 1.
*   **Modified Colligative Property Formulas:**
    *   $\\Delta T_b = i K_b m$
    *   $\\Delta T_f = i K_f m$
    *   $\\pi = i CRT$
    *   $\\frac{p_A^\\circ - p_A}{p_A^\\circ} = i \\chi_B$`,
                    tamil: `கரைசலில் கரைபொருட்கள் இணையும்போது அல்லது பிரியும் போது, தொகுப்பண்புகளால் தீர்மானிக்கப்படும் மோலார் நிறை எதிர்பார்க்கப்படும் மதிப்பிலிருந்து வேறுபடுகிறது. இது இயல்பற்ற மோலார் நிறை எனப்படும்.
*   **வான்ட் ஹாஃப் காரணி (i):** ஒரு திருத்தக் காரணி:
*   **இணைதல்**-க்கு, i < 1. **பிரிதல்**-க்கு, i > 1. மின்பகுளி அல்லாதவற்றுக்கு, i = 1.
*   **மாற்றியமைக்கப்பட்ட தொகுப்பண்பு சூத்திரங்கள்:`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Molarity and Molality",
            titleTamil: "நீட் நிலை: மோலாரிட்டி மற்றும் மோலாலிட்டி",
            difficulty: 'Medium',
            problem: "The density of a 2.05 M solution of acetic acid (CH₃COOH) in water is 1.02 g/mL. What is the molality of the solution?",
            problemTamil: "நீரில் உள்ள 2.05 M அசிட்டிக் அமிலக் கரைசலின் அடர்த்தி 1.02 கி/மி.லி ஆகும். கரைசலின் மோலாலிட்டியைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "2.05 M solution means 2.05 moles of acetic acid are present in 1 Litre (1000 mL) of solution.", explanationTamil: "2.05 M கரைசல் என்பது 2.05 மோல் அசிட்டிக் அமிலம் 1 லிட்டர் (1000 மி.லி) கரைசலில் உள்ளது." },
                { step: 2, explanation: "Calculate the mass of 1 L of the solution using its density.", calculation: "Mass of solution = Volume × Density = 1000 mL × 1.02 g/mL = 1020 g" },
                { step: 3, explanation: "Calculate the mass of the solute (acetic acid). Molar mass of CH₃COOH = 12+3+12+16+16+1 = 60 g/mol.", calculation: "Mass of solute = Moles × Molar mass = 2.05 mol × 60 g/mol = 123 g" },
                { step: 4, explanation: "Calculate the mass of the solvent (water).", calculation: "Mass of solvent = Mass of solution - Mass of solute = 1020 g - 123 g = 897 g = 0.897 kg" },
                { step: 5, explanation: "Calculate the molality (m).", calculation: "Molality = Moles of solute / Mass of solvent (kg) = 2.05 mol / 0.897 kg ≈ 2.28 m" }
            ],
            neetHack: "For density problems converting molarity to molality, assume 1L of solution as the starting point.",
            commonPitfall: "Confusing molarity (per L of solution) with molality (per kg of solvent). Always subtract solute mass to find solvent mass."
        },
        {
            title: "JEE Level: Depression in Freezing Point with van't Hoff factor",
            titleTamil: "ஜே.இ.இ நிலை: வான்ட் ஹாஃப் காரணியுடன் உறைநிலைத் தாழ்வு",
            difficulty: 'Medium',
            problem: "A 0.01 m aqueous solution of K₃[Fe(CN)₆] freezes at -0.062°C. What is the apparent percentage of dissociation? (K_f for water = 1.86 K kg mol⁻¹)",
            problemTamil: "0.01 m நீரியல் K₃[Fe(CN)₆] கரைசல் -0.062°C இல் உறைகிறது. பிரிகையின் தோற்ற சதவீதம் என்ன? (நீரின் K_f = 1.86 K kg mol⁻¹)",
            solutionSteps: [
                { step: 1, explanation: "Calculate the observed depression in freezing point (ΔT_f). Freezing point of water is 0°C.", calculation: "ΔT_f = 0 - (-0.062) = 0.062°C" },
                { step: 2, explanation: "Use the modified colligative property formula to find the van't Hoff factor (i).", calculation: "ΔT_f = i K_f m => i = ΔT_f / (K_f m) = 0.062 / (1.86 × 0.01) ≈ 3.33" },
                { step: 3, explanation: "Write the dissociation equation for the complex salt. K₃[Fe(CN)₆] dissociates into 4 ions.", calculation: "K₃[Fe(CN)₆] ⇌ 3K⁺ + [Fe(CN)₆]³⁻. Here, n=4." },
                { step: 4, explanation: "Relate the van't Hoff factor (i) to the degree of dissociation (α).", calculation: "i = 1 + (n-1)α" },
                { step: 5, explanation: "Solve for α.", calculation: "3.33 = 1 + (4-1)α => 2.33 = 3α => α = 2.33 / 3 ≈ 0.777" },
                { step: 6, explanation: "The apparent percentage of dissociation is 77.7%.", calculation: "Percentage dissociation = 77.7%" }
            ]
        },
        {
            title: "NEET Level: Osmotic Pressure",
            titleTamil: "நீட் நிலை: சவ்வூடுபரவல் அழுத்தம்",
            difficulty: 'Easy',
            problem: "Calculate the osmotic pressure in pascals exerted by a solution prepared by dissolving 1.0 g of a polymer of molar mass 185,000 in 450 mL of solution at 37°C.",
            problemTamil: "1.0 கிராம் மோலார் நிறை 185,000 கொண்ட ஒரு பாலிமரை 450 மி.லி கரைசலில் 37°C வெப்பநிலையில் கரைத்து தயாரிக்கப்பட்ட ஒரு கரைசலால் செலுத்தப்படும் சவ்வூடுபரவல் அழுத்தத்தை பாஸ்கலில் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "Use the osmotic pressure formula π = CRT = (n/V)RT. Convert all units to SI.", calculation: "n = 1.0g / 185000 g/mol. V = 450 mL = 0.450 L = 4.5 x 10⁻⁴ m³. T = 37 + 273 = 310 K. R = 8.314 J/mol·K." },
                { step: 2, explanation: "Calculate osmotic pressure π.", calculation: "\\pi = \\frac{n}{V}RT = \\frac{1/185000}{4.5 \\times 10^{-4}} \\times 8.314 \\times 310" },
                { step: 3, explanation: "Simplify and calculate.", calculation: "\\pi \\approx 30.9 Pa" }
            ],
            commonPitfall: "Unit mismatch, especially for the gas constant R and volume. For pressure in Pascals (SI unit), volume must be in m³ and R should be 8.314 J/mol·K."
        },
        {
            title: "JEE Level: Raoult's Law and Vapour Pressure",
            titleTamil: "ஜே.இ.இ நிலை: ரௌலட் விதி மற்றும் ஆவி அழுத்தம்",
            difficulty: "Medium",
            problem: "The vapour pressure of benzene at a certain temperature is 0.850 bar. A non-volatile, non-electrolyte solid weighing 0.5 g when added to 39.0 g of benzene (molar mass = 78 g/mol) lowers the vapour pressure of the solution to 0.845 bar. Find the molar mass of the solid substance.",
            problemTamil: "ஒரு குறிப்பிட்ட வெப்பநிலையில் பென்சீனின் ஆவி அழுத்தம் 0.850 பார் ஆகும். 0.5 கிராம் நிறையுள்ள ஒரு ஆவியாகாத, மின்பகுளி அல்லாத திண்மம் 39.0 கிராம் பென்சீனில் (மோலார் நிறை = 78 கி/மோல்) சேர்க்கப்படும்போது, கரைசலின் ஆவி அழுத்தம் 0.845 பார் ஆகக் குறைகிறது. திண்மப் பொருளின் மோலார் நிறையைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Use Raoult's law for relative lowering of vapour pressure: (p₁° - p₁) / p₁° = χ₂.", calculation: "p₁°=0.850 bar, p₁=0.845 bar." },
                { step: 2, explanation: "Substitute the pressure values.", calculation: "(0.850 - 0.845) / 0.850 = 0.005 / 0.850 ≈ 0.00588" },
                { step: 3, explanation: "The mole fraction of the solute (χ₂) is also given by χ₂ = n₂ / (n₁ + n₂). For dilute solutions, we can approximate n₁ + n₂ ≈ n₁. So, χ₂ ≈ n₂/n₁.", calculation: "n₁ (benzene) = 39.0g / 78 g/mol = 0.5 mol. Let M₂ be the molar mass of the solute. n₂ (solute) = 0.5g / M₂." },
                { step: 4, explanation: "Equate the two expressions for χ₂.", calculation: "0.00588 ≈ \\frac{0.5/M_2}{0.5}" },
                { step: 5, explanation: "Solve for the molar mass of the solute, M₂.", calculation: "0.00588 ≈ \\frac{1}{M_2} \\implies M_2 \\approx 1 / 0.00588 \\approx 170 \\text{ g/mol}" }
            ],
            commonPitfall: "Using the approximation χ₂ ≈ n₂/n₁ for concentrated solutions. It's better to use the full expression if unsure, though the approximation works well here."
        },
        {
            title: "NEET Level: Ideal and Non-Ideal Solutions",
            titleTamil: "நீட் நிலை: நல்லியல்பு மற்றும் இயல்பிலா கரைசல்கள்",
            difficulty: "Easy",
            problem: "Which of the following mixtures shows a positive deviation from Raoult's law?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "A positive deviation from Raoult's law occurs when the intermolecular forces between the solute and solvent (A-B interactions) are weaker than the forces between the pure components (A-A and B-B). This leads to a higher vapour pressure than expected.",
                    explanationTamil: "கரைபொருள் மற்றும் கரைப்பான் (A-B இடைவினைகள்) இடையேயான மூலக்கூற்றிடை விசைகள் தூய கூறுகளுக்கு (A-A மற்றும் B-B) இடையேயான விசைகளை விட பலவீனமாக இருக்கும்போது ரௌலட் விதியிலிருந்து ஒரு நேர்மறை விலகல் ஏற்படுகிறது. இது எதிர்பார்த்ததை விட அதிக ஆவி அழுத்தத்திற்கு வழிவகுக்கிறது."
                },
                {
                    step: 2,
                    explanation: "Analyze the options: Chloroform and Acetone form hydrogen bonds, leading to negative deviation. Nitric acid and water also show strong interaction (negative deviation). Benzene and Toluene are very similar and form a nearly ideal solution.",
                    explanationTamil: "விருப்பங்களை பகுப்பாய்வு செய்யவும்: குளோரோஃபார்ம் மற்றும் அசிட்டோன் ஹைட்ரஜன் பிணைப்புகளை உருவாக்குகின்றன, இது எதிர்மறை விலகலுக்கு வழிவகுக்கிறது. நைட்ரிக் அமிலம் மற்றும் நீரும் வலுவான இடைவினையைக் காட்டுகின்றன (எதிர்மறை விலகல்). பென்சீன் மற்றும் டோலுயீன் மிகவும் ஒத்தவை மற்றும் கிட்டத்தட்ட ஒரு நல்லியல்பு கரைசலை உருவாக்குகின்றன."
                },
                {
                    step: 3,
                    explanation: "In pure ethanol, there are strong hydrogen bonds between ethanol molecules. When acetone is added, the acetone molecules get in between the ethanol molecules, breaking some of the hydrogen bonds. The new interactions are weaker, making it easier for both components to escape into the vapour phase, causing a positive deviation. Therefore, Ethanol and Acetone show positive deviation.",
                    explanationTamil: "தூய எத்தனாலில், எத்தனால் மூலக்கூறுகளுக்கு இடையில் வலுவான ஹைட்ரஜன் பிணைப்புகள் உள்ளன. அசிட்டோன் சேர்க்கப்படும்போது, அசிட்டோன் மூலக்கூறுகள் எத்தனால் மூலக்கூறுகளுக்கு இடையில் சென்று சில ஹைட்ரஜன் பிணைப்புகளை உடைக்கின்றன. புதிய இடைவினைகள் பலவீனமாக உள்ளன, இது இரண்டு கூறுகளும் ஆவி நிலைக்கு தப்பிப்பதை எளிதாக்குகிறது, இது ஒரு நேர்மறை விலகலை ஏற்படுத்துகிறது. எனவே, எத்தனால் மற்றும் அசிட்டோன் நேர்மறை விலகலைக் காட்டுகின்றன."
                }
            ]
        }
    ],
    mcqs: [
        { question: "Which of the following is a colligative property?", options: ["A. Boiling point", "B. Vapour pressure", "C. Osmotic pressure", "D. Freezing point"], answer: "C. Osmotic pressure", explanation: "Boiling point, vapour pressure, and freezing point are properties of a solvent, but their *changes* (elevation in BP, lowering of VP, depression in FP) are colligative properties. Osmotic pressure itself is a colligative property.", neetFrequency: 4 },
        { question: "For an ideal solution, the enthalpy of mixing (ΔH_mix) is:", options: ["A. Positive", "B. Negative", "C. Zero", "D. May be positive or negative"], answer: "C. Zero", explanation: "For an ideal solution, there is no change in enthalpy (ΔH_mix = 0) and no change in volume (ΔV_mix = 0) upon mixing.", neetFrequency: 3 },
        { question: "The van't Hoff factor (i) for a solution of BaCl₂ which is 100% dissociated is:", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "C. 3", explanation: "BaCl₂ dissociates into one Ba²⁺ ion and two Cl⁻ ions, for a total of 3 ions. So, i=3.", neetFrequency: 5 },
        { question: "Which of the following will have the highest freezing point?", options: ["A. 1 m glucose solution", "B. 1 m NaCl solution", "C. 1 m CaCl₂ solution", "D. Pure water"], answer: "D. Pure water", explanation: "Adding a solute always depresses the freezing point. The greater the number of particles (higher 'i' value), the greater the depression. Pure water has no solute, so its freezing point is the highest (0°C).", neetFrequency: 5 },
        { question: "According to Henry's law, the solubility of a gas in a liquid:", options: ["A. Decreases with increase in pressure", "B. Increases with increase in pressure", "C. Is independent of pressure", "D. Increases with increase in temperature"], answer: "B. Increases with increase in pressure", explanation: "Henry's law states that the amount of dissolved gas is proportional to the partial pressure of the gas above the liquid.", neetFrequency: 4 },
        { question: "Which of the following is an example of a mixture showing negative deviation from Raoult's law?", options: ["A. Ethanol and acetone", "B. Carbon disulfide and acetone", "C. Chloroform and acetone", "D. Benzene and toluene"], answer: "C. Chloroform and acetone", explanation: "Chloroform and acetone form a hydrogen bond upon mixing, leading to stronger A-B interactions than A-A or B-B interactions. This lowers the vapour pressure, causing a negative deviation.", neetFrequency: 3 },
        { question: "The unit of the ebullioscopic constant (K_b) is:", options: ["A. K kg mol⁻¹", "B. K mol kg⁻¹", "C. mol kg K⁻¹", "D. K mol⁻¹"], answer: "A. K kg mol⁻¹", explanation: "From ΔT_b = K_b * m, K_b = ΔT_b / m. The units are Kelvin / (mol/kg) = K kg mol⁻¹.", neetFrequency: 2 },
        { question: "Two solutions having the same osmotic pressure at a given temperature are called:", options: ["A. Isotonic", "B. Hypertonic", "C. Hypotonic", "D. Ideal"], answer: "A. Isotonic", explanation: "Isotonic solutions have the same osmotic pressure and there is no net flow of solvent across a semipermeable membrane between them.", neetFrequency: 3 },
        { question: "When a non-volatile solute is added to a solvent, its vapour pressure:", options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. May increase or decrease"], answer: "B. Decreases", explanation: "The solute particles occupy some of the surface area, reducing the rate at which solvent molecules can escape into the vapour phase.", neetFrequency: 4 },
        { question: "The molality of a solution is defined as the number of moles of solute per:", options: ["A. Litre of solution", "B. Kilogram of solution", "C. Litre of solvent", "D. Kilogram of solvent"], answer: "D. Kilogram of solvent", explanation: "This is the definition of molality, which is temperature-independent.", neetFrequency: 2 },
        { question: "For which of the following, the van't Hoff factor cannot be greater than 1?", options: ["A. K₄[Fe(CN)₆]", "B. Acetic acid in benzene", "C. NaCl", "D. Urea"], answer: "D. Urea", explanation: "Urea is a non-electrolyte and does not associate or dissociate in solution, so i=1. Acetic acid associates in benzene (i<1), K₄[Fe(CN)₆] and NaCl dissociate (i>1).", neetFrequency: 4 },
        { question: "Which colligative property is preferred for the determination of molar masses of polymers?", options: ["A. Elevation in boiling point", "B. Depression in freezing point", "C. Osmotic pressure", "D. Relative lowering of vapour pressure"], answer: "C. Osmotic pressure", explanation: "Polymers have very large molar masses, so their solutions are very dilute. Osmotic pressure gives a measurable change even for very dilute solutions, while other colligative properties give very small, hard-to-measure changes.", neetFrequency: 3 },
        { question: "The value of Henry's constant K_H:", options: ["A. Is greater for gases with higher solubility", "B. Is greater for gases with lower solubility", "C. Is constant for all gases", "D. Is independent of temperature"], answer: "B. Is greater for gases with lower solubility", explanation: "From p = K_H * χ, for a given pressure, a higher K_H means a lower mole fraction (χ), i.e., lower solubility.", neetFrequency: 3 },
        { question: "Azeotropic mixtures are:", options: ["A. Mixtures of two solids", "B. Constant boiling mixtures", "C. Mixtures which can be separated by distillation", "D. Mixtures which are ideal solutions"], answer: "B. Constant boiling mixtures", explanation: "An azeotrope is a liquid mixture which has a constant boiling point and whose vapour has the same composition as the liquid.", neetFrequency: 2 },
        { question: "The process of reverse osmosis is used for:", options: ["A. Making soft drinks", "B. Desalination of seawater", "C. Preserving food", "D. Making jam"], answer: "B. Desalination of seawater", explanation: "By applying a pressure greater than the osmotic pressure, solvent (water) can be forced to move from a high concentration solution (seawater) to a low concentration solution (pure water).", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "The boiling point of a solution is higher than that of the pure solvent.", reason: "The vapour pressure of a solution containing a non-volatile solute is lower than that of the pure solvent.", answer: "A", explanation: "Assertion is true (elevation in boiling point). Reason is also true (lowering of vapour pressure). The reason correctly explains the assertion: a liquid boils when its vapour pressure equals atmospheric pressure. Since the solution's vapour pressure is lower, it must be heated to a higher temperature to reach the boiling point.", neetFrequency: 4 },
        { assertion: "Molality is preferred over molarity for expressing concentration in experiments.", reason: "Molality is independent of temperature, whereas molarity changes with temperature.", answer: "A", explanation: "Assertion is true for experiments involving temperature changes. The reason is also true and is the correct explanation. Molarity depends on volume, which changes with temperature, while molality depends on mass, which does not.", neetFrequency: 3 },
        { assertion: "When a blood cell is placed in a saline solution, it shrinks.", reason: "The saline solution is hypotonic with respect to the blood cell.", answer: "C", explanation: "The assertion is true. The cell shrinks because water flows out of it. This happens when the outer solution is hypertonic (higher concentration), not hypotonic. Therefore, the reason is false.", neetFrequency: 3 },
        { assertion: "The value of the van't Hoff factor for acetic acid in benzene is less than 1.", reason: "Acetic acid associates in benzene to form a dimer.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Due to hydrogen bonding, two molecules of acetic acid associate into one dimer particle, reducing the total number of particles in the solution and making i < 1.", neetFrequency: 4 },
        { assertion: "An ideal solution obeys Raoult's law.", reason: "In an ideal solution, the solute-solute and solvent-solvent interactions are identical to the solute-solvent interactions.", answer: "A", explanation: "The assertion is the definition of an ideal solution. The reason is also true and is the molecular-level explanation for why a solution behaves ideally. Because all interactions are the same, there is no enthalpy or volume change on mixing.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Molarity", "(b) Molality", "(c) Henry's Law", "(d) Raoult's Law"], column2: ["(p) Vapour pressure", "(q) Moles/Litre", "(r) Solubility of gas", "(s) Moles/kg"], answer: "a-q, b-s, c-r, d-p", explanation: "Matching the terms with their units or the phenomena they describe." },
        { column1: ["(a) Isotonic solutions", "(b) Hypotonic solution", "(c) Hypertonic solution", "(d) Ideal solution"], column2: ["(p) Cell swells", "(q) Cell shrinks", "(r) Obeys Raoult's Law", "(s) Same osmotic pressure"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching solution types with their properties or effects on cells." },
        { column1: ["(a) van't Hoff factor for NaCl", "(b) van't Hoff factor for Glucose", "(c) van't Hoff factor for BaCl₂", "(d) van't Hoff factor for CH₃COOH in benzene"], column2: ["(p) 1", "(q) 2", "(r) 3", "(s) < 1"], answer: "a-q, b-p, c-r, d-s", explanation: "Matching solutes with their ideal van't Hoff factor 'i'." },
        { column1: ["(a) Depression in freezing point", "(b) Elevation in boiling point", "(c) Osmotic pressure", "(d) Relative lowering of vapour pressure"], column2: ["(p) ΔT_b = K_b * m", "(q) π = CRT", "(r) ΔT_f = K_f * m", "(s) (P°-P)/P° = χ_solute"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching colligative properties with their respective formulas." },
        { column1: ["(a) Positive deviation", "(b) Negative deviation", "(c) Ideal solution", "(d) Azeotrope"], column2: ["(p) Constant boiling point", "(q) Benzene + Toluene", "(r) Acetone + Chloroform", "(s) Ethanol + Acetone"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching types of solutions/mixtures with their classic examples." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "P = K_H \\chi",
                description: "Henry's Law",
                descriptionTamil: "ஹென்றி விதி"
            },
            {
                formula: "\\frac{p_A^\\circ - p_A}{p_A^\\circ} = i \\chi_B",
                description: "Raoult's Law for RLVP with van't Hoff factor",
                descriptionTamil: "வான்ட் ஹாஃப் காரணியுடன் RLVP-க்கான ரௌலட் விதி"
            },
            {
                formula: "\\Delta T_b = i K_b m",
                description: "Elevation in Boiling Point",
                descriptionTamil: "கொதிநிலை ஏற்றம்"
            },
            {
                formula: "\\pi = i CRT",
                description: "Osmotic Pressure",
                descriptionTamil: "சவ்வூடுபரவல் அழுத்தம்"
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Colligative properties depend on the *number* of solute particles, not their identity.",
        "Molality is temperature-independent, making it preferable for experiments with varying temperatures.",
        "Raoult's Law describes the vapor pressure of ideal solutions; deviations indicate differences in intermolecular forces.",
        "The van't Hoff factor 'i' corrects colligative property calculations for solutes that dissociate or associate in solution."
    ],
    mnemonics: [
        { text: "Remember colligative properties with 'Boil, Freeze, Lower, & Squeeze'. (Boiling point elevation, Freezing point depression, Lowering of vapor pressure, & Osmotic pressure).", tamil: "'கொதிக்க, உறைய, குறைக்க, & பிழிய' என்று தொகுப்பண்புகளை நினைவில் கொள்க. (கொதிநிலை ஏற்றம், உறைநிலைத் தாழ்வு, ஆவி அழுத்தக் குறைவு, & சவ்வூடுபரவல் அழுத்தம்)." }
    ],
    neetTips: [
        { text: "Always check if the solute is an electrolyte (like NaCl) or non-electrolyte (like glucose). This tells you if you need to use the van't Hoff factor 'i'. This is a very common trap.", tamil: "கரைபொருள் ஒரு மின்பகுளியா (NaCl போல) அல்லது மின்பகுளி அல்லாததா (குளுக்கோஸ் போல) என்பதை எப்போதும் சரிபார்க்கவும். இது நீங்கள் வான்ட் ஹாஃப் காரணி 'i' ஐப் பயன்படுத்த வேண்டுமா என்பதைத் தெரிவிக்கும். இது ஒரு மிகவும் பொதுவான பொறியாகும்." },
        { text: "For problems comparing colligative properties of different solutions of the same molality, just compare their 'i' values. The larger the 'i', the larger the effect.", tamil: "ஒரே மோலாலிட்டி கொண்ட வெவ்வேறு கரைசல்களின் தொகுப்பண்புகளை ஒப்பிடும் கணக்குகளுக்கு, அவற்றின் 'i' மதிப்புகளை ஒப்பிட்டால் போதும். 'i' பெரியதாக இருந்தால், விளைவும் பெரியதாக இருக்கும்." }
    ],
    studentTip: {
        english: "Colligative properties depend on the *number* of solute particles. Always check if the solute is an electrolyte (like NaCl, which splits into 2 ions) or a non-electrolyte (like glucose, which stays as 1 molecule). This determines if you need to use the van't Hoff factor 'i'.",
        tamil: "தொகுப்பண்புகள் கரைபொருள் துகள்களின் *எண்ணிக்கையை* சார்ந்துள்ளது. கரைபொருள் ஒரு மின்பகுளியா (NaCl போல, 2 அயனிகளாகப் பிரிகிறது) அல்லது மின்பகுளி அல்லாததா (குளுக்கோஸ் போல, 1 மூலக்கூறாகவே உள்ளது) என்பதை எப்போதும் சரிபார்க்கவும். இது நீங்கள் வான்ட் ஹாஃப் காரணி 'i' ஐப் பயன்படுத்த வேண்டுமா என்பதைத் தீர்மானிக்கிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend why a mixture of ethanol and acetone shows positive deviation from Raoult's law, while a mixture of acetone and chloroform shows negative deviation. What is happening at the molecular level in each case?",
        tamil: "எத்தனால் மற்றும் அசிட்டோன் கலவை ஏன் ரௌலட் விதியிலிருந்து நேர்மறை விலகலைக் காட்டுகிறது, அதேசமயம் அசிட்டோன் மற்றும் குளோரோஃபார்ம் கலவை எதிர்மறை விலகலைக் காட்டுகிறது என்று உங்கள் நண்பருடன் விவாதிக்கவும். ஒவ்வொரு சந்தர்ப்பத்திலும் மூலக்கூறு மட்டத்தில் என்ன நடக்கிறது?"
    },
    nextChapter: {
        title: "Equilibrium",
        titleTamil: "சமநிலை"
    },
    validationReport: []
};
