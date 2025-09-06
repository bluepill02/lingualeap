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
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [],
    mnemonics: [],
    neetTips: [],
    validationReport: []
};