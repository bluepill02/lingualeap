
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
    *   $\\pi = i CRT$`,
                    tamil: `கரைசலில் கரைபொருட்கள் இணையும்போது அல்லது பிரியும் போது, தொகுப்பண்புகளால் தீர்மானிக்கப்படும் மோலார் நிறை எதிர்பார்க்கப்படும் மதிப்பிலிருந்து வேறுபடுகிறது. இது இயல்பற்ற மோலார் நிறை எனப்படும்.
*   **வான்ட் ஹாஃப் காரணி (i):** ஒரு திருத்தக் காரணி:
*   **இணைதல்**-க்கு, i < 1. **பிரிதல்**-க்கு, i > 1. மின்பகுளிகளுக்கு, i = 1.
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
            problem: "The density of a 2 M solution of glucose (C₆H₁₂O₆) is 1.2 g/mL. Calculate the molality of the solution.",
            problemTamil: "2 M குளுக்கோஸ் (C₆H₁₂O₆) கரைசலின் அடர்த்தி 1.2 கி/மி.லி ஆகும். கரைசலின் மோலாலிட்டியைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "2 M solution means 2 moles of glucose are present in 1 Litre (1000 mL) of solution.", explanationTamil: "2 M கரைசல் என்பது 2 மோல் குளுக்கோஸ் 1 லிட்டர் (1000 மி.லி) கரைசலில் உள்ளது." },
                { step: 2, explanation: "Calculate the mass of the solution using its density.", calculation: "Mass of solution = Volume × Density = 1000 mL × 1.2 g/mL = 1200 g" },
                { step: 3, explanation: "Calculate the mass of the solute (glucose). Molar mass of glucose = 180 g/mol.", calculation: "Mass of glucose = Moles × Molar mass = 2 mol × 180 g/mol = 360 g" },
                { step: 4, explanation: "Calculate the mass of the solvent (water).", calculation: "Mass of solvent = Mass of solution - Mass of solute = 1200 g - 360 g = 840 g = 0.84 kg" },
                { step: 5, explanation: "Calculate the molality (m).", calculation: "Molality = Moles of solute / Mass of solvent (kg) = 2 mol / 0.84 kg ≈ 2.38 m" }
            ],
            commonPitfall: "Confusing the volume of the solution with the volume of the solvent, or the mass of the solution with the mass of the solvent.",
            neetHackTamil: "கரைசலின் கனஅளவை கரைப்பானின் கனஅளவுடனும், கரைசலின் நிறையை கரைப்பானின் நிறையுடனும் குழப்பிக் கொள்ளுதல்."
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
                { step: 1, explanation: "Use the osmotic pressure formula π = CRT = (n/V)RT. Convert all units to SI.", calculation: "n = 1.0g / 185000 g/mol. V = 450 mL = 0.450 L. T = 37 + 273 = 310 K. R = 8.314 J/mol·K or 0.0821 L·atm/mol·K." },
                { step: 2, explanation: "Calculate the molar concentration C = n/V.", calculation: "C = (1/185000) / 0.450 ≈ 1.20 × 10⁻⁵ mol/L" },
                { step: 3, explanation: "Calculate osmotic pressure π using π = CRT. Let's use R = 0.0821 L·atm/mol·K to get π in atm first.", calculation: "π = (1.20 × 10⁻⁵) * (0.0821) * 310 ≈ 3.05 × 10⁻⁴ atm" },
                { step: 4, explanation: "Convert the pressure from atm to pascals. 1 atm = 1.013 x 10⁵ Pa.", calculation: "π (Pa) = (3.05 × 10⁻⁴ atm) × (1.013 × 10⁵ Pa/atm) ≈ 30.9 Pa" }
            ],
            commonPitfall: "Unit mismatch, especially for the gas constant R. Use 8.314 if volume is in m³, or 0.0821 if volume is in L to get pressure in atm."
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
                { step: 3, explanation: "The mole fraction of the solute (χ₂) is also given by χ₂ = n₂ / (n₁ + n₂). For dilute solutions, n₂ is small, so we can approximate n₁ + n₂ ≈ n₁. So, χ₂ ≈ n₂/n₁.", calculation: "n₁ (benzene) = 39.0g / 78 g/mol = 0.5 mol. n₂ (solute) = 0.5g / M₂." },
                { step: 4, explanation: "Equate the two expressions for χ₂.", calculation: "0.00588 = (0.5/M₂) / 0.5 = 1/M₂" },
                { step: 5, explanation: "Solve for the molar mass of the solute, M₂.", calculation: "M₂ = 1 / 0.00588 ≈ 170 g/mol" }
            ],
            commonPitfall: "Using the approximation χ₂ ≈ n₂/n₁ for concentrated solutions. It's better to use the full expression if unsure."
        },
        {
            title: "NEET Level: Ideal and Non-Ideal Solutions",
            titleTamil: "நீட் நிலை: நல்லியல்பு மற்றும் இயல்பிலா கரைசல்கள்",
            difficulty: "Easy",
            problem: "Which of the following mixtures shows a positive deviation from Raoult's law?",
            options: ["A. Chloroform and Acetone", "B. Nitric acid and Water", "C. Ethanol and Acetone", "D. Benzene and Toluene"],
            answer: "C. Ethanol and Acetone",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "A positive deviation from Raoult's law occurs when the intermolecular forces between the solute and solvent (A-B interactions) are weaker than the forces between the pure components (A-A and B-B). This leads to a higher vapour pressure than expected.",
                    explanationTamil: "கரைபொருள் மற்றும் கரைப்பான் (A-B இடைவினைகள்) இடையேயான மூலக்கூற்றிடை விசைகள் தூய கூறுகளுக்கு (A-A மற்றும் B-B) இடையேயான விசைகளை விட பலவீனமாக இருக்கும்போது ரௌலட் விதியிலிருந்து ஒரு நேர்மறை விலகல் ஏற்படுகிறது. இது எதிர்பார்த்ததை விட அதிக ஆவி அழுத்தத்திற்கு வழிவகுக்கிறது."
                },
                {
                    step: 2,
                    explanation: "Analyze the options: (A) Chloroform and Acetone form hydrogen bonds, leading to negative deviation. (B) Nitric acid and water also show strong interaction (negative deviation). (D) Benzene and Toluene are very similar and form a nearly ideal solution.",
                    explanationTamil: "விருப்பங்களை பகுப்பாய்வு செய்யவும்: (A) குளோரோஃபார்ம் மற்றும் அசிட்டோன் ஹைட்ரஜன் பிணைப்புகளை உருவாக்குகின்றன, இது எதிர்மறை விலகலுக்கு வழிவகுக்கிறது. (B) நைட்ரிக் அமிலம் மற்றும் நீரும் வலுவான இடைவினையைக் காட்டுகின்றன (எதிர்மறை விலகல்). (D) பென்சீன் மற்றும் டோலுயீன் மிகவும் ஒத்தவை மற்றும் கிட்டத்தட்ட ஒரு நல்லியல்பு கரைசலை உருவாக்குகின்றன."
                },
                {
                    step: 3,
                    explanation: "In pure ethanol, there are strong hydrogen bonds between ethanol molecules. When acetone is added, the acetone molecules get in between the ethanol molecules, breaking some of the hydrogen bonds. The new interactions are weaker, making it easier for both components to escape into the vapour phase, causing a positive deviation.",
                    explanationTamil: "தூய எத்தனாலில், எத்தனால் மூலக்கூறுகளுக்கு இடையில் வலுவான ஹைட்ரஜன் பிணைப்புகள் உள்ளன. அசிட்டோன் சேர்க்கப்படும்போது, அசிட்டோன் மூலக்கூறுகள் எத்தனால் மூலக்கூறுகளுக்கு இடையில் சென்று சில ஹைட்ரஜன் பிணைப்புகளை உடைக்கின்றன. புதிய இடைவினைகள் பலவீனமாக உள்ளன, இது இரண்டு கூறுகளும் ஆவி நிலைக்கு தப்பிப்பதை எளிதாக்குகிறது, இது ஒரு நேர்மறை விலகலை ஏற்படுத்துகிறது."
                }
            ]
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "P = K_H \\chi",
                description: "Henry's Law",
                descriptionTamil: "ஹென்றி விதி"
            },
            {
                formula: "\\frac{p_A^\\circ - p_A}{p_A^\\circ} = \\chi_B",
                description: "Raoult's Law for RLVP",
                descriptionTamil: "சார்பு ஆவி அழுத்தக் குறைவுக்கான ரௌலட் விதி"
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
    keyTakeaways: [],
    mnemonics: [],
    neetTips: [],
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
