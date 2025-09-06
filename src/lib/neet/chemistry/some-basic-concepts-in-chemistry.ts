import type { NeetModule } from '@/lib/types';

export const someBasicConceptsInChemistry: NeetModule = {
    id: 'neet-chemistry-some-basic-concepts-in-chemistry',
    title: 'Chemistry - Some Basic Concepts in Chemistry (வேதியியலின் சில அடிப்படைக் கருத்துக்கள்)',
    chapter: 'Some Basic Concepts in Chemistry',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the importance of chemistry and the nature of matter.",
        "Explain the laws of chemical combination (Law of Conservation of Mass, Law of Definite Proportions, etc.).",
        "Understand Dalton's atomic theory and its postulates.",
        "Define atomic mass, molecular mass, and the mole concept.",
        "Calculate empirical and molecular formulas from percentage composition.",
        "Perform stoichiometric calculations based on balanced chemical equations, including finding the limiting reagent.",
        "Express the concentration of solutions in terms like Molarity, Molality, and Mole Fraction."
    ],
    prerequisites: [
        "Basic arithmetic and algebraic manipulation.",
        "Understanding of atoms and molecules as fundamental particles.",
        "Concept of units and basic conversions."
    ],
    conceptOverview: "This chapter is the foundation upon which all of chemistry is built. It introduces the language and quantitative tools necessary to study chemical reactions. We begin with the fundamental laws that govern how elements combine to form compounds. The central theme of the chapter is the 'mole concept,' which provides a bridge between the microscopic world of atoms and molecules and the macroscopic world of grams and liters that we can measure in the lab. Mastering mole calculations and stoichiometry (the calculation of reactants and products in chemical reactions) is absolutely essential for success in all areas of chemistry.",
    tamilConnection: "வேதியியல் என்பது ஒரு மொழியைப் போன்றது. இந்த அத்தியாயம் அந்த மொழியின் இலக்கணத்தை நமக்குக் கற்றுத் தருகிறது. 'மோல்' என்ற கருத்து, அணுக்கள் மற்றும் மூலக்கூறுகளின் எண்ணிக்கையை நம் அன்றாட அளவீடுகளான கிராம் உடன் தொடர்புபடுத்தும் ஒரு பாலம் போன்றது. வேதியியல் கணக்கீடுகளுக்கு இது மிகவும் அடிப்படையானது.",
    culturalContext: "The precise recipes used in traditional Tamil cuisine, like the ratio of rice to lentils in Pongal, are a form of stoichiometry. The cook needs to know the correct proportions of ingredients to get the desired final product. Similarly, chemical stoichiometry helps chemists determine the correct proportions of reactants to get a desired amount of product without wastage.",
    syllabusMapping: [
        {
            topic: "Basic Concepts, Stoichiometry",
            tnBoardChapter: "11th Std Chemistry - Vol 1, Chapter 1: Basic Concepts of Chemistry and Chemical Calculations",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 1: Some Basic Concepts of Chemistry",
            notes: "Absolutely fundamental. A strong command of the mole concept and stoichiometry is required to solve problems in almost every other chapter, especially in Physical Chemistry.",
            mappingDescription: "11th Std Chemistry - Vol 1, Chapter 1 maps to NEET Chemistry Unit 1"
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: "1. The Mole Concept and Molar Masses",
                tamil: "1. மோல் கருத்து மற்றும் மோலார் நிறைகள்"
            },
            content: [
                {
                    english: "The mole is the SI unit for the amount of a substance. It represents a specific number of particles (atoms, molecules, ions). This number is called Avogadro's constant.",
                    tamil: "மோல் என்பது ஒரு பொருளின் அளவிற்கான SI அலகு ஆகும். இது ஒரு குறிப்பிட்ட எண்ணிக்கையிலான துகள்களை (அணுக்கள், மூலக்கூறுகள், அயனிகள்) குறிக்கிறது. இந்த எண் அவகாட்ரோ மாறிலி என்று அழைக்கப்படுகிறது."
                },
                {
                    english: "1 mole = $6.022 \\times 10^{23}$ particles (Avogadro's Number, $N_A$)",
                    tamil: "1 மோல் = $6.022 \\times 10^{23}$ துகள்கள் (அவகாட்ரோ எண், $N_A$)"
                },
                {
                    english: "The mass of one mole of a substance is called its **molar mass (M)**. For an element, it is the atomic mass expressed in grams/mol. For a compound, it is the molecular mass in grams/mol.",
                    tamil: "ஒரு மோல் பொருளின் நிறை அதன் **மோலார் நிறை (M)** எனப்படும். ஒரு தனிமத்திற்கு, இது கிராம்/மோல் இல் வெளிப்படுத்தப்படும் அணு நிறை ஆகும். ஒரு சேர்மத்திற்கு, இது கிராம்/மோல் இல் உள்ள மூலக்கூறு நிறை ஆகும்."
                },
                {
                    english: "The relationship is: **Number of moles (n) = Given mass (m) / Molar mass (M)**.",
                    tamil: "தொடர்பு: **மோல்களின் எண்ணிக்கை (n) = கொடுக்கப்பட்ட நிறை (m) / மோலார் நிறை (M)**."
                },
                {
                    english: "At Standard Temperature and Pressure (STP: 0°C and 1 atm), one mole of any ideal gas occupies **22.4 Litres**.",
                    tamil: "திட்ட வெப்பநிலை மற்றும் அழுத்தத்தில் (STP: 0°C மற்றும் 1 atm), எந்தவொரு நல்லியல்பு வாயுவின் ஒரு மோலும் **22.4 லிட்டர்** கனஅளவை ஆக்கிரமிக்கும்."
                }
            ]
        },
        {
            heading: {
                english: "2. Stoichiometry and Stoichiometric Calculations",
                tamil: "2. வினைக்கூறு விகிதவியல் மற்றும் கணக்கீடுகள்"
            },
            content: [
                {
                    english: "Stoichiometry deals with the calculation of reactants and products involved in chemical reactions. A **balanced chemical equation** provides the mole ratio of the reactants and products.",
                    tamil: "வினைக்கூறு விகிதவியல் என்பது வேதிவினைகளில் ஈடுபட்டுள்ள வினைபடு பொருட்கள் மற்றும் வினைவிளை பொருட்களின் கணக்கீடுகளைப் பற்றியது. ஒரு **சமன்செய்யப்பட்ட வேதிச் சமன்பாடு** வினைபடு பொருட்கள் மற்றும் வினைவிளை பொருட்களின் மோல் விகிதத்தை வழங்குகிறது."
                },
                {
                    english: "Example: $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$. This means 1 mole of N₂ reacts with 3 moles of H₂ to produce 2 moles of NH₃.",
                    tamil: "உதாரணம்: $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$. இதன் பொருள் 1 மோல் N₂, 3 மோல் H₂ உடன் வினைபுரிந்து 2 மோல் NH₃ ஐ உருவாக்குகிறது."
                },
                {
                    english: "**Limiting Reagent (வரம்பு வினைபொருள்):** The reactant that is completely consumed first in a reaction and thus limits the amount of product that can be formed.",
                    tamil: "**வரம்பு வினைபொருள்:** ஒரு வினையில் முதலில் முழுமையாக நுகரப்படும் வினைபடு பொருள், இதனால் உருவாகக்கூடிய வினைவிளை பொருளின் அளவை இது கட்டுப்படுத்துகிறது."
                }
            ]
        },
        {
            heading: {
                english: "3. Concentration Terms",
                tamil: "3. செறிவு அலகுகள்"
            },
            content: [
                {
                    english: "**Molarity (M) (மோலாரிட்டி):** Moles of solute per litre of solution. Unit: mol/L. It is temperature dependent.",
                    tamil: "**மோலாரிட்டி (M):** ஒரு லிட்டர் கரைசலில் உள்ள கரைபொருளின் மோல்கள். அலகு: மோல்/லி. இது வெப்பநிலையைச் சார்ந்தது."
                },
                {
                    english: "**Molality (m) (மோலாலிட்டி):** Moles of solute per kilogram of solvent. Unit: mol/kg. It is temperature independent.",
                    tamil: "**மோலாலிட்டி (m):** ஒரு கிலோகிராம் கரைப்பானில் உள்ள கரைபொருளின் மோல்கள். அலகு: மோல்/கிகி. இது வெப்பநிலையைச் சாராதது."
                },
                {
                    english: "**Mole Fraction (χ) (மோல் பின்னம்):** Ratio of moles of a component to the total moles of all components in the solution. It is a dimensionless quantity.",
                    tamil: "**மோல் பின்னம் (χ):** ஒரு கரைசலில் உள்ள ஒரு கூறுகளின் மோல்களுக்கும், அனைத்து கூறுகளின் மொத்த மோல்களுக்கும் உள்ள விகிதம். இது ஒரு பரிமாணமற்ற அளவு."
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Limiting Reagent",
            titleTamil: "நீட் நிலை: வரம்பு வினைபொருள்",
            difficulty: "Medium",
            problem: "20 g of Hydrogen reacts with 112 g of Nitrogen to form ammonia according to the reaction: N₂(g) + 3H₂(g) → 2NH₃(g). Which is the limiting reagent and what is the maximum amount of ammonia formed?",
            problemTamil: "N₂(g) + 3H₂(g) → 2NH₃(g) என்ற வினைப்படி, 20 கி ஹைட்ரஜன் 112 கி நைட்ரஜனுடன் வினைபுரிந்து அம்மோனியாவை உருவாக்குகிறது. வரம்பு வினைபொருள் எது மற்றும் உருவாகும் அம்மோனியாவின் பெரும அளவு என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Convert the given masses of reactants into moles. Molar mass of H₂ is 2 g/mol and N₂ is 28 g/mol.",
                    explanationTamil: "கொடுக்கப்பட்ட வினைபடு பொருட்களின் நிறைகளை மோல்களாக மாற்றவும். H₂ இன் மோலார் நிறை 2 கி/மோல் மற்றும் N₂ இன் மோலார் நிறை 28 கி/மோல் ஆகும்.",
                    calculation: "Moles of H₂ = 20 g / 2 g/mol = 10 mol\\\\Moles of N₂ = 112 g / 28 g/mol = 4 mol"
                },
                {
                    step: 2,
                    explanation: "Determine the limiting reagent. From the balanced equation, 1 mole of N₂ requires 3 moles of H₂. Therefore, 4 moles of N₂ would require 4 × 3 = 12 moles of H₂.",
                    explanationTamil: "வரம்பு வினைப்பொருளைத் தீர்மானிக்கவும். சமன்செய்யப்பட்ட சமன்பாட்டிலிருந்து, 1 மோல் N₂ க்கு 3 மோல் H₂ தேவைப்படுகிறது. எனவே, 4 மோல் N₂ க்கு 12 மோல் H₂ தேவைப்படும்."
                },
                {
                    step: 3,
                    explanation: "Compare the required amount of H₂ with the available amount. We need 12 moles of H₂, but we only have 10 moles. Therefore, Hydrogen (H₂) is the limiting reagent.",
                    explanationTamil: "தேவையான H₂ அளவை கிடைக்கும் அளவுடன் ஒப்பிடவும். நமக்கு 12 மோல் H₂ தேவை, ஆனால் நம்மிடம் 10 மோல் மட்டுமே உள்ளது. எனவே, ஹைட்ரஜன் (H₂) வரம்பு வினைபொருள் ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Calculate the amount of product (NH₃) formed based on the limiting reagent. From the equation, 3 moles of H₂ produce 2 moles of NH₃.",
                    explanationTamil: "வரம்பு வினைப்பொருளின் அடிப்படையில் உருவாகும் விளைபொருளின் (NH₃) அளவைக் கணக்கிடவும். சமன்பாட்டிலிருந்து, 3 மோல் H₂ 2 மோல் NH₃ ஐ உருவாக்குகிறது."
                },
                {
                    step: 5,
                    explanation: "Therefore, 10 moles of H₂ will produce (2/3) × 10 = 20/3 moles of NH₃.",
                    explanationTamil: "எனவே, 10 மோல் H₂ (2/3) × 10 = 20/3 மோல் NH₃ ஐ உருவாக்கும்.",
                    calculation: "Moles of NH₃ = (2/3) * 10 = 6.67 mol"
                },
                {
                    step: 6,
                    explanation: "Convert the moles of ammonia to mass. Molar mass of NH₃ is 17 g/mol.",
                    explanationTamil: "அம்மோனியாவின் மோல்களை நிறையாக மாற்றவும். NH₃ இன் மோலார் நிறை 17 கி/மோல் ஆகும்.",
                    calculation: "Mass of NH₃ = (20/3) mol × 17 g/mol ≈ 113.3 g"
                }
            ],
            neetHack: "A quick way to find the limiting reagent is to divide the given moles of each reactant by its stoichiometric coefficient. The reactant with the smallest ratio is the limiting reagent. For N₂: 4/1 = 4. For H₂: 10/3 = 3.33. Since 3.33 < 4, H₂ is the limiting reagent.",
            neetHackTamil: "வரம்பு வினைப்பொருளைக் கண்டறிய ஒரு விரைவான வழி, ஒவ்வொரு வினைபொருளின் கொடுக்கப்பட்ட மோல்களை அதன் வினைக்கூறு குணகத்தால் வகுப்பதாகும். மிகக் குறைந்த விகிதத்தைக் கொண்ட வினைபொருள் வரம்பு வினைபொருள் ஆகும். N₂ க்கு: 4/1 = 4. H₂ க்கு: 10/3 = 3.33. 3.33 < 4 என்பதால், H₂ வரம்பு வினைபொருள் ஆகும்.",
            commonPitfall: "Calculating the product based on the reactant that is not limiting. The reaction stops once the limiting reactant is fully consumed.",
            commonPitfallTamil: "வரம்பில் இல்லாத வினைப்பொருளின் அடிப்படையில் விளைபொருளைக் கணக்கிடுவது. வரம்பு வினைபொருள் முழுமையாக நுகரப்பட்டவுடன் வினை நின்றுவிடும்."
        },
        {
            title: "JEE Level: Molarity of Mixing",
            titleTamil: "ஜே.இ.இ நிலை: கலவையின் மோலாரிட்டி",
            difficulty: "Medium",
            problem: "200 mL of 0.2 M H₂SO₄ solution is mixed with 300 mL of 0.1 M HCl solution. What is the molarity of H⁺ ions in the final solution?",
            problemTamil: "200 மி.லி 0.2 M H₂SO₄ கரைசல் 300 மி.லி 0.1 M HCl கரைசலுடன் கலக்கப்படுகிறது. இறுதி கரைசலில் H⁺ அயனிகளின் மோலாரிட்டி என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the millimoles of H₂SO₄ and HCl. Millimoles = Molarity × Volume (in mL).",
                    explanationTamil: "H₂SO₄ மற்றும் HCl இன் மில்லிமோல்களைக் கணக்கிடவும். மில்லிமோல்கள் = மோலாரிட்டி × கனஅளவு (மி.லி-ல்).",
                    calculation: "Millimoles of H₂SO₄ = 0.2 M × 200 mL = 40 mmol\\\\Millimoles of HCl = 0.1 M × 300 mL = 30 mmol"
                },
                {
                    step: 2,
                    explanation: "Calculate the millimoles of H⁺ ions from each acid. H₂SO₄ is a strong acid and provides 2 H⁺ ions per molecule. HCl provides 1 H⁺ ion.",
                    explanationTamil: "ஒவ்வொரு அமிலத்திலிருந்தும் H⁺ அயனிகளின் மில்லிமோல்களைக் கணக்கிடவும். H₂SO₄ ஒரு வலிமையான அமிலம் மற்றும் ஒரு மூலக்கூறுக்கு 2 H⁺ அயனிகளை வழங்குகிறது. HCl 1 H⁺ அயனியை வழங்குகிறது.",
                    calculation: "Millimoles of H⁺ from H₂SO₄ = 40 mmol × 2 = 80 mmol\\\\Millimoles of H⁺ from HCl = 30 mmol × 1 = 30 mmol"
                },
                {
                    step: 3,
                    explanation: "Calculate the total millimoles of H⁺ ions in the mixture.",
                    explanationTamil: "கலவையில் உள்ள H⁺ அயனிகளின் மொத்த மில்லிமோல்களைக் கணக்கிடவும்.",
                    calculation: "Total mmol of H⁺ = 80 + 30 = 110 mmol"
                },
                {
                    step: 4,
                    explanation: "Calculate the total volume of the final solution.",
                    explanationTamil: "இறுதி கரைசலின் மொத்த கனஅளவைக் கணக்கிடவும்.",
                    calculation: "Total Volume = 200 mL + 300 mL = 500 mL"
                },
                {
                    step: 5,
                    explanation: "Calculate the final molarity of H⁺ ions.",
                    explanationTamil: "H⁺ அயனிகளின் இறுதி மோலாரிட்டியை கணக்கிடவும்.",
                    calculation: "Molarity of H⁺ = Total mmol of H⁺ / Total Volume (mL) = 110 / 500 = 0.22 M"
                }
            ],
            commonPitfall: "Forgetting that polyprotic acids like H₂SO₄ provide more than one H⁺ ion per molecule.",
            commonPitfallTamil: "H₂SO₄ போன்ற பலபுரோட்டான் அமிலங்கள் ஒரு மூலக்கூறுக்கு ஒன்றுக்கு மேற்பட்ட H⁺ அயனிகளை வழங்குகின்றன என்பதை மறத்தல்."
        },
        {
            title: "NEET Level: Empirical and Molecular Formula",
            titleTamil: "நீட் நிலை: விகித வாய்ப்பாடு மற்றும் மூலக்கூறு வாய்ப்பாடு",
            difficulty: "Medium",
            problem: "An organic compound contains 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Its molar mass is 180 g/mol. Determine its empirical and molecular formulas.",
            problemTamil: "ஒரு கரிமச் சேர்மத்தில் நிறை அடிப்படையில் 40% கார்பன், 6.7% ஹைட்ரஜன், மற்றும் 53.3% ஆக்ஸிஜன் உள்ளது. அதன் மோலார் நிறை 180 கி/மோல் ஆகும். அதன் விகித வாய்ப்பாடு மற்றும் மூலக்கூறு வாய்ப்பாட்டை தீர்மானிக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Assume a 100 g sample. Then, mass of C = 40g, mass of H = 6.7g, mass of O = 53.3g.",
                    explanationTamil: "100 கிராம் மாதிரியைக் கருதுக. பின்னர், C இன் நிறை = 40கி, H இன் நிறை = 6.7கி, O இன் நிறை = 53.3கி."
                },
                {
                    step: 2,
                    explanation: "Convert these masses to moles by dividing by their atomic masses (C=12, H=1, O=16).",
                    explanationTamil: "இந்த நிறைகளை அவற்றின் அணு நிறைகளால் (C=12, H=1, O=16) வகுத்து மோல்களாக மாற்றவும்.",
                    calculation: "Moles of C = 40/12 ≈ 3.33\\\\Moles of H = 6.7/1 ≈ 6.7\\\\Moles of O = 53.3/16 ≈ 3.33"
                },
                {
                    step: 3,
                    explanation: "Divide all mole values by the smallest mole value (3.33) to get a simple whole number ratio.",
                    explanationTamil: "ஒரு எளிய முழு எண் விகிதத்தைப் பெற, அனைத்து மோல் மதிப்புகளையும் மிகச்சிறிய மோல் மதிப்பால் (3.33) வகுக்கவும்.",
                    calculation: "Ratio C = 3.33/3.33 = 1\\\\Ratio H = 6.7/3.33 ≈ 2\\\\Ratio O = 3.33/3.33 = 1"
                },
                {
                    step: 4,
                    explanation: "The empirical formula is CH₂O.",
                    explanationTamil: "விகித வாய்ப்பாடு CH₂O ஆகும்."
                },
                {
                    step: 5,
                    explanation: "Calculate the empirical formula mass. Mass(CH₂O) = 12 + 2(1) + 16 = 30 g/mol.",
                    explanationTamil: "விகித வாய்ப்பாட்டு நிறையைக் கணக்கிடவும். நிறை(CH₂O) = 12 + 2(1) + 16 = 30 கி/மோல்."
                },
                {
                    step: 6,
                    explanation: "Find the ratio 'n' = (Molar Mass) / (Empirical Formula Mass).",
                    explanationTamil: "'n' என்ற விகிதத்தைக் கண்டறியவும் = (மோலார் நிறை) / (விகித வாய்ப்பாட்டு நிறை).",
                    calculation: "n = 180 / 30 = 6"
                },
                {
                    step: 7,
                    explanation: "The molecular formula is n × (Empirical Formula).",
                    explanationTamil: "மூலக்கூறு வாய்ப்பாடு n × (விகித வாய்ப்பாடு) ஆகும்.",
                    calculation: "Molecular Formula = 6 × (CH₂O) = C₆H₁₂O₆"
                }
            ]
        },
        {
            title: "JEE Level: Stoichiometry with Solutions",
            titleTamil: "ஜே.இ.இ நிலை: கரைசல்களுடன் கூடிய வினைக்கூறு விகிதவியல்",
            difficulty: "Medium",
            problem: "What volume of 0.5 M H₂SO₄ is required to neutralize 50 mL of 0.2 M NaOH solution completely?",
            problemTamil: "50 மி.லி 0.2 M NaOH கரைசலை முழுமையாக நடுநிலையாக்க 0.5 M H₂SO₄ இன் என்ன கனஅளவு தேவை?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Write the balanced chemical equation for the neutralization reaction.",
                    explanationTamil: "நடுநிலையாக்கல் வினைக்கான சமன்செய்யப்பட்ட வேதிச் சமன்பாட்டை எழுதவும்.",
                    calculation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O"
                },
                {
                    step: 2,
                    explanation: "The stoichiometry shows that 1 mole of H₂SO₄ reacts with 2 moles of NaOH.",
                    explanationTamil: "வினைக்கூறு விகிதவியல் 1 மோல் H₂SO₄ 2 மோல் NaOH உடன் வினைபுரிகிறது என்பதைக் காட்டுகிறது."
                },
                {
                    step: 3,
                    explanation: "Use the relation M₁V₁/n₁ = M₂V₂/n₂, where n is the stoichiometric coefficient.",
                    explanationTamil: "M₁V₁/n₁ = M₂V₂/n₂ என்ற தொடர்பைப் பயன்படுத்தவும், இங்கு n என்பது வினைக்கூறு குணகம் ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Let H₂SO₄ be substance 1 and NaOH be substance 2. n₁=1, n₂=2.",
                    explanationTamil: "H₂SO₄ பொருள் 1 ஆகவும், NaOH பொருள் 2 ஆகவும் இருக்கட்டும். n₁=1, n₂=2."
                },
                {
                    step: 5,
                    explanation: "Substitute the values and solve for V₁ (Volume of H₂SO₄).",
                    calculation: "(0.5 M * V₁) / 1 = (0.2 M * 50 mL) / 2\\\\0.5 * V₁ = 10 / 2 = 5\\\\V₁ = 5 / 0.5 = 10 mL"
                }
            ],
            neetHack: "For acid-base neutralization, use the normality equation N₁V₁ = N₂V₂. Normality = Molarity × n-factor. For H₂SO₄, n=2. For NaOH, n=1. So, N(H₂SO₄) = 0.5*2 = 1 N. N(NaOH) = 0.2*1 = 0.2 N. (1 N)*V₁ = (0.2 N)*(50 mL) => V₁ = 10 mL. This is often faster.",
            commonPitfall: "Forgetting to use the stoichiometric coefficients from the balanced equation. This is the most common error in stoichiometry problems.",
            commonPitfallTamil: "சமன்செய்யப்பட்ட சமன்பாட்டிலிருந்து வினைக்கூறு குணகங்களைப் பயன்படுத்த மறத்தல். இது வினைக்கூறு விகிதவியல் கணக்குகளில் மிகவும் பொதுவான பிழையாகும்."
        },
        {
            title: "NEET Level: Mole Fraction",
            titleTamil: "நீட் நிலை: மோல் பின்னம்",
            difficulty: "Easy",
            problem: "A solution is prepared by dissolving 45 g of glucose (C₆H₁₂O₆) in 90 g of water. Calculate the mole fraction of glucose.",
            problemTamil: "45 கிராம் குளுக்கோஸை (C₆H₁₂O₆) 90 கிராம் நீரில் கரைத்து ஒரு கரைசல் தயாரிக்கப்படுகிறது. குளுக்கோஸின் மோல் பின்னத்தைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the molar mass of glucose (C₆H₁₂O₆) and water (H₂O).",
                    explanationTamil: "குளுக்கோஸ் (C₆H₁₂O₆) மற்றும் நீரின் (H₂O) மோலார் நிறைகளைக் கணக்கிடவும்.",
                    calculation: "Molar mass of Glucose = 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180 g/mol\\\\Molar mass of Water = 2(1) + 16 = 18 g/mol"
                },
                {
                    step: 2,
                    explanation: "Calculate the moles of glucose and water.",
                    explanationTamil: "குளுக்கோஸ் மற்றும் நீரின் மோல்களைக் கணக்கிடவும்.",
                    calculation: "Moles of Glucose (n₁) = 45g / 180 g/mol = 0.25 mol\\\\Moles of Water (n₂) = 90g / 18 g/mol = 5 mol"
                },
                {
                    step: 3,
                    explanation: "Calculate the mole fraction of glucose (χ_glucose).",
                    explanationTamil: "குளுக்கோஸின் மோல் பின்னத்தைக் (χ_glucose) கணக்கிடவும்.",
                    calculation: "χ_glucose = n₁ / (n₁ + n₂) = 0.25 / (0.25 + 5) = 0.25 / 5.25"
                },
                {
                    step: 4,
                    explanation: "Simplify the fraction.",
                    explanationTamil: "பின்னத்தை எளிதாக்கவும்.",
                    calculation: "χ_glucose = 1 / 21 ≈ 0.0476"
                }
            ]
        }
    ],
    mcqs: [
        { question: "The number of atoms in 1 mole of a substance is equal to:", options: ["A. 12", "B. 32", "C. 6.022 x 10²³", "D. 1"], answer: "C. 6.022 x 10²³", explanation: "One mole of any substance contains Avogadro's number of particles.", neetFrequency: 5 },
        { question: "Which of the following has the maximum number of atoms?", options: ["A. 1 g of Mg (At. mass 24)", "B. 1 g of O₂ (At. mass 16)", "C. 1 g of Li (At. mass 7)", "D. 1 g of Ag (At. mass 108)"], answer: "C. 1 g of Li (At. mass 7)", explanation: "Number of atoms = (Given mass / Molar mass) * N_A. For the same given mass, the one with the smallest molar mass will have the most moles and thus the most atoms.", neetFrequency: 4 },
        { question: "The empirical formula of a compound is CH₂O and its molecular mass is 180. The molecular formula of the compound is:", options: ["A. C₂H₄O₂", "B. C₃H₆O₃", "C. C₆H₁₂O₆", "D. CH₂O"], answer: "C. C₆H₁₂O₆", explanation: "Empirical formula mass = 12+2+16 = 30. n = Molecular mass / Empirical mass = 180/30 = 6. Molecular formula = n * (Empirical formula) = C₆H₁₂O₆.", neetFrequency: 4 },
        { question: "Molarity of a solution is defined as:", options: ["A. Moles of solute per kg of solvent", "B. Moles of solute per litre of solution", "C. Grams of solute per litre of solution", "D. Moles of solute per kg of solution"], answer: "B. Moles of solute per litre of solution", explanation: "This is the definition of molarity (M).", neetFrequency: 3 },
        { question: "How many grams of NaOH are present in 250 mL of a 0.5 M NaOH solution?", options: ["A. 5 g", "B. 10 g", "C. 20 g", "D. 40 g"], answer: "A. 5 g", explanation: "Moles = Molarity * Volume(L) = 0.5 * 0.25 = 0.125 mol. Mass = Moles * Molar mass = 0.125 * 40 = 5 g.", neetFrequency: 4 },
        { question: "The total number of electrons present in 1.7 g of ammonia (NH₃) is:", options: ["A. 6.022 x 10²³", "B. 6.022 x 10²⁴", "C. 3.011 x 10²³", "D. 1.7 x 10²⁴"], answer: "A. 6.022 x 10²³", explanation: "Moles of NH₃ = 1.7g/17g/mol = 0.1 mol. Number of molecules = 0.1 * N_A. Number of electrons in one NH₃ molecule = 7(N) + 3(H) = 10. Total electrons = 10 * 0.1 * N_A = 1 * N_A.", neetFrequency: 3 },
        { question: "The reactant which is entirely consumed in a reaction is known as:", options: ["A. Excess reagent", "B. Limiting reagent", "C. Catalyst", "D. Product"], answer: "B. Limiting reagent", explanation: "The limiting reagent determines the maximum amount of product that can be formed.", neetFrequency: 2 },
        { question: "The volume of one mole of any gas at STP is:", options: ["A. 1 L", "B. 22.4 L", "C. 10 L", "D. 2.24 L"], answer: "B. 22.4 L", explanation: "This is the molar volume of an ideal gas at Standard Temperature and Pressure.", neetFrequency: 2 },
        { question: "Which of the following concentration terms is independent of temperature?", options: ["A. Molarity", "B. Molality", "C. Normality", "D. Formality"], answer: "B. Molality", explanation: "Molality is defined in terms of mass of solvent, which does not change with temperature. Molarity and Normality depend on the volume of the solution, which does change with temperature.", neetFrequency: 4 },
        { question: "How many moles of methane are required to produce 22 g of CO₂ after combustion?", options: ["A. 1 mole", "B. 0.5 mole", "C. 0.25 mole", "D. 1.5 mole"], answer: "B. 0.5 mole", explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O. Moles of CO₂ = 22g/44g/mol = 0.5 mol. From the stoichiometry, 1 mole of CO₂ is produced from 1 mole of CH₄. So, 0.5 mole of CO₂ is produced from 0.5 mole of CH₄.", neetFrequency: 4 },
        { question: "The law of definite proportions was given by:", options: ["A. Dalton", "B. Proust", "C. Lavoisier", "D. Avogadro"], answer: "B. Proust", explanation: "Joseph Proust stated the law of definite proportions (or constant composition).", neetFrequency: 1 },
        { question: "An element X has the following isotopic composition: ²⁰⁰X: 90%, ¹⁹⁹X: 8%, ²⁰²X: 2%. The weighted average atomic mass of the naturally occurring element X is closest to:", options: ["A. 200 amu", "B. 199 amu", "C. 201 amu", "D. 202 amu"], answer: "A. 200 amu", explanation: "Average mass = (200*0.90) + (199*0.08) + (202*0.02) = 180 + 15.92 + 4.04 = 199.96 amu.", neetFrequency: 3 },
        { question: "Mole fraction of the solute in a 1.00 molal aqueous solution is:", options: ["A. 0.177", "B. 0.0177", "C. 0.0344", "D. 1.770"], answer: "B. 0.0177", explanation: "1.00 molal means 1 mole of solute in 1000g (1 kg) of water. Moles of water = 1000g/18g/mol = 55.55 moles. Mole fraction of solute = 1 / (1 + 55.55) = 1/56.55 ≈ 0.0177.", neetFrequency: 3 },
        { question: "The number of significant figures for the three numbers 161 cm, 0.161 cm, 0.0161 cm are:", options: ["A. 3, 3 and 3", "B. 3, 4 and 5", "C. 3, 4 and 4", "D. 2, 3 and 4"], answer: "A. 3, 3 and 3", explanation: "Leading zeros are not significant. All three numbers have 3 significant figures (1, 6, 1).", neetFrequency: 1 },
        { question: "In a reaction A + B₂ → AB₂, identify the limiting reagent if 300 atoms of A react with 200 molecules of B₂.", options: ["A. A", "B. B₂", "C. Both are consumed", "D. Cannot be determined"], answer: "B. B₂", explanation: "The reaction is 1 atom of A reacts with 1 molecule of B₂. We have 300 atoms of A and 200 molecules of B₂. We need 300 molecules of B₂ to react with all of A, but we only have 200. So B₂ will be consumed first.", neetFrequency: 4 },
        { question: "Which has the maximum number of molecules among the following?", options: ["A. 44 g CO₂", "B. 48 g O₃", "C. 8 g H₂", "D. 64 g SO₂"], answer: "C. 8 g H₂", explanation: "Calculate moles for each. CO₂(1), O₃(1), H₂(4), SO₂(1). H₂ has the most moles (4), so it has the most molecules.", neetFrequency: 3 },
        { question: "The law of multiple proportions is illustrated by the two compounds:", options: ["A. NaCl and NaBr", "B. H₂O and D₂O", "C. CO and CO₂", "D. Na₂O and K₂O"], answer: "C. CO and CO₂", explanation: "This law applies when two elements form more than one compound. Here, carbon and oxygen form two different compounds, CO and CO₂.", neetFrequency: 2 },
        { question: "The number of moles of H₂SO₄ required to produce 1 mole of H₂S in the reaction K₂Cr₂O₇ + 3H₂S + 4H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃ + 7H₂O + 3S is:", options: ["A. 4/3", "B. 3/4", "C. 1", "D. 4"], answer: "A. 4/3", explanation: "From the balanced equation, 3 moles of H₂S require 4 moles of H₂SO₄. Therefore, 1 mole of H₂S will require 4/3 moles of H₂SO₄.", neetFrequency: 2 },
        { question: "What is the mass of one molecule of water?", options: ["A. 18 g", "B. 1.66 x 10⁻²⁴ g", "C. 3 x 10⁻²³ g", "D. 18 amu"], answer: "C. 3 x 10⁻²³ g", explanation: "Mass of one mole (N_A molecules) is 18 g. Mass of one molecule = 18 / (6.022 x 10²³) ≈ 3 x 10⁻²³ g.", neetFrequency: 3 },
        { question: "If 0.5 mole of BaCl₂ is mixed with 0.2 mole of Na₃PO₄, the maximum number of moles of Ba₃(PO₄)₂ that can be formed is:", options: ["A. 0.7", "B. 0.5", "C. 0.2", "D. 0.1"], answer: "D. 0.1", explanation: "3BaCl₂ + 2Na₃PO₄ → Ba₃(PO₄)₂ + 6NaCl. From 0.5 mol BaCl₂, we can get 0.5/3 mol of product. From 0.2 mol Na₃PO₄, we can get 0.2/2 = 0.1 mol of product. The smaller amount is 0.1 mol, which is the maximum amount that can be formed.", neetFrequency: 4 },
        { question: "The volume of gas at STP produced by reacting 12 g of Carbon with excess oxygen is:", options: ["A. 22.4 L", "B. 11.2 L", "C. 44.8 L", "D. 5.6 L"], answer: "A. 22.4 L", explanation: "C + O₂ → CO₂. Moles of C = 12g/12g/mol = 1 mol. From stoichiometry, 1 mole of C produces 1 mole of CO₂. 1 mole of any gas at STP occupies 22.4 L.", neetFrequency: 3 },
        { question: "The mass percent of calcium in calcium carbonate (CaCO₃) is:", options: ["A. 40%", "B. 12%", "C. 48%", "D. 100%"], answer: "A. 40%", explanation: "Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100 g/mol. Mass % of Ca = (Mass of Ca / Molar Mass) * 100 = (40/100) * 100 = 40%.", neetFrequency: 2 },
        { question: "A sample of phosphorus trichloride (PCl₃) contains 1.4 moles of the substance. How many atoms are there in the sample?", options: ["A. 5.6 x 10²⁴", "B. 3.37 x 10²⁴", "C. 8.43 x 10²³", "D. 2.41 x 10²⁴"], answer: "B. 3.37 x 10²⁴", explanation: "Number of molecules = 1.4 * N_A. Number of atoms in one molecule = 1(P) + 3(Cl) = 4. Total atoms = 4 * 1.4 * N_A = 5.6 * (6.022 x 10²³) ≈ 3.37 x 10²⁴.", neetFrequency: 3 },
        { question: "Avogadro's number represents the number of atoms in:", options: ["A. 1 g of hydrogen", "B. 12 g of carbon-12", "C. 1 L of oxygen gas at STP", "D. 1 mole of electrons"], answer: "B. 12 g of carbon-12", explanation: "This is the definition of Avogadro's number - the number of atoms in exactly 12 grams of the carbon-12 isotope.", neetFrequency: 1 },
        { question: "What is the molarity of a solution containing 5.85 g of NaCl per 500 mL?", options: ["A. 0.2 M", "B. 0.1 M", "C. 2 M", "D. 1 M"], answer: "A. 0.2 M", explanation: "Molar mass of NaCl = 58.5 g/mol. Moles of NaCl = 5.85g / 58.5g/mol = 0.1 mol. Volume = 0.5 L. Molarity = Moles/Volume = 0.1/0.5 = 0.2 M.", neetFrequency: 4 }
    ],
    assertionReasons: [
        {
            assertion: "One mole of any substance contains 6.022 x 10²³ particles.",
            reason: "The mass of one mole of a substance is equal to its gram atomic mass or gram molecular mass.",
            answer: "B",
            explanation: "Both statements are true definitions related to the mole concept. However, the reason defines molar mass, it doesn't explain *why* the number of particles is Avogadro's number. They are two fundamental, related definitions."
        },
        {
            assertion: "The empirical formula of glucose is CH₂O.",
            reason: "The molecular formula of glucose (C₆H₁₂O₆) has a simplest whole number ratio of 1:2:1 for C:H:O.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation for how the empirical formula is derived from the molecular formula."
        },
        {
            assertion: "Molality is preferred over molarity for expressing concentration in experiments involving temperature changes.",
            reason: "Molality is independent of temperature, while molarity depends on temperature.",
            answer: "A",
            explanation: "Assertion is a common practice in chemistry. The reason is true and correctly explains why. Molality depends on mass of solvent (which is constant), while molarity depends on volume of solution (which changes with temperature)."
        },
        {
            assertion: "A balanced chemical equation is based on the law of conservation of mass.",
            reason: "The total mass of reactants is equal to the total mass of products in a chemical reaction.",
            answer: "A",
            explanation: "The assertion is true. The reason is a statement of the law of conservation of mass, which is the principle that requires an equation to be balanced. The reason correctly explains the assertion."
        },
        {
            assertion: "The limiting reagent determines the amount of product formed.",
            reason: "The reaction stops after the limiting reagent is completely consumed.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and provides the correct explanation for why the limiting reagent determines the yield of the reaction."
        }
    ],
    matchTheColumns: [
        { column1: ["(a) Molarity", "(b) Molality", "(c) Mole Fraction", "(d) Mass Percent"], column2: ["(p) Temperature independent", "(q) Temperature dependent", "(r) Dimensionless"], answer: "a-q, b-p, c-p,r; d-p,r", explanation: "Matching concentration terms with their properties. Molality, mole fraction, and mass percent are temperature independent. Mole fraction and mass percent are also dimensionless." },
        { column1: ["(a) 1 mole of O₂", "(b) 1 mole of O₃", "(c) 1 g of O₂", "(d) 1 g of O₃"], column2: ["(p) N_A molecules", "(q) 2N_A atoms", "(r) N_A/32 molecules", "(s) 3N_A/48 atoms"], answer: "a-p,q; b-p; c-r; d-s", explanation: "Matching quantities with the number of particles. 1 mole of O₂ has N_A molecules and 2N_A atoms. 1 mole O₃ has N_A molecules and 3N_A atoms. 1g O₂ is 1/32 moles. 1g O₃ is 1/48 moles." },
        { column1: ["(a) Empirical Formula", "(b) Molecular Formula", "(c) Stoichiometry", "(d) Limiting Reagent"], column2: ["(p) Simplest whole number ratio", "(q) Reactant consumed first", "(r) Actual number of atoms", "(s) Quantitative relationship in reactions"], answer: "a-p, b-r, c-s, d-q", explanation: "Matching chemical concepts with their definitions." },
        { column1: ["(a) Law of Conservation of Mass", "(b) Law of Definite Proportions", "(c) Law of Multiple Proportions", "(d) Avogadro's Law"], column2: ["(p) Dalton", "(q) Proust", "(r) Lavoisier", "(s) V ∝ n"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching laws with the scientists who proposed them or their mathematical form." },
        { column1: ["(a) Mass of 22.4 L H₂ at STP", "(b) Moles in 44g CO₂", "(c) Number of atoms in 12g C-12", "(d) Mass of 1 mole of H₂O"], column2: ["(p) 18 g", "(q) N_A", "(r) 1 mole", "(s) 2 g"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching quantities with their calculated values." }
    ],
    validationReport: []
};
