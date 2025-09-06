import type { NeetModule } from '@/lib/types';

export const chemicalKineticsModule: NeetModule = {
    id: 'neet-chemistry-chemical-kinetics',
    title: 'Chemistry - Chemical Kinetics (வேதி வினைவேகவியல்)',
    chapter: 'Chemical Kinetics',
    subject: 'Chemistry',
    learningObjectives: [
        "Define the rate of a chemical reaction and differentiate between average and instantaneous rates.",
        "Understand the factors affecting the rate of a reaction (concentration, temperature, catalyst).",
        "Define rate law, rate constant, and order of a reaction.",
        "Derive and apply integrated rate equations for zero and first-order reactions.",
        "Understand the concept of half-life of a reaction.",
        "Explain the effect of temperature on reaction rate and apply the Arrhenius equation.",
        "Understand the concept of activation energy and the role of catalysts."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions and balancing equations.",
        "Logarithms and basic calculus (for integrated rate laws)."
    ],
    conceptOverview: "While thermodynamics tells us if a reaction is possible, chemical kinetics tells us how fast it will happen. This chapter explores the rates of chemical reactions and the factors that influence them. We will learn how to express reaction rates mathematically through rate laws and determine the order of a reaction. The integrated rate laws for zero and first-order reactions allow us to predict the concentration of reactants at any given time. Finally, we will delve into the Arrhenius equation, which quantitatively describes how temperature dramatically affects reaction speed by influencing the energy of molecular collisions.",
    tamilConnection: "பால் தயிராவது, இரும்பு துருப்பிடிப்பது - இந்த வினைகள் மெதுவாக நடக்கின்றன. பட்டாசு வெடிப்பது போன்ற வினைகள் மிக வேகமாக நடக்கின்றன. ஒரு வேதிவினையின் வேகத்தை பாதிக்கும் காரணிகளான வெப்பநிலை, செறிவு, மற்றும் வினைவேகமாற்றி ஆகியவற்றைப் பற்றி இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "Cooking is a great example of chemical kinetics. We increase the temperature to make reactions (cooking) go faster. A pressure cooker increases both pressure and temperature, speeding up the cooking of dhal or meat significantly. This demonstrates the principles of how temperature and pressure affect reaction rates.",
    syllabusMapping: [
        {
            topic: "Chemical Kinetics",
            tnBoardChapter: "12th Std Chemistry - Vol 1, Chapter 7: Chemical Kinetics",
            ncertReference: "Class 12 Chemistry - Part 1, Chapter 4: Chemical Kinetics",
            notes: "Very important chapter. Problems based on integrated rate laws (especially for first-order reactions), half-life, and the Arrhenius equation are frequently asked in NEET.",
            mappingDescription: '12th Std Chemistry - Vol 1, Chapter 7 maps to NEET Chemistry Unit 14'
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