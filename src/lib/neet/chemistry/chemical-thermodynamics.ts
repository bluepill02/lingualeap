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