import type { NeetModule } from '@/lib/types';

export const equilibrium: NeetModule = {
    id: 'neet-chemistry-equilibrium',
    title: 'Chemistry - Equilibrium (சமநிலை)',
    chapter: 'Equilibrium',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the concept of equilibrium in physical and chemical processes.",
        "Apply the Law of Mass Action and define the equilibrium constant (Kc and Kp).",
        "State and apply Le Chatelier's principle to predict the effect of changes in concentration, temperature, and pressure on a system at equilibrium.",
        "Understand different concepts of acids and bases (Arrhenius, Bronsted-Lowry, Lewis).",
        "Define pH and calculate the pH of solutions.",
        "Analyze the ionization of weak acids and bases and the concept of buffer solutions.",
        "Define and apply the concept of solubility product (Ksp)."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions.",
        "Concepts from Thermodynamics."
    ],
    conceptOverview: "Equilibrium is a dynamic state where the rates of forward and reverse processes are equal, resulting in no net change in the system's macroscopic properties. This chapter covers two main types of equilibrium: chemical equilibrium (in reversible reactions) and ionic equilibrium (in solutions of acids, bases, and salts). We will explore the Law of Mass Action and Le Chatelier's principle, which help us predict and control the outcomes of reversible reactions. The second part delves into ionic equilibrium, defining acids and bases, the pH scale, buffer solutions, and the solubility of sparingly soluble salts. These concepts are fundamental to countless processes in chemistry, biology, and medicine.",
    tamilConnection: "ஒரு வேதிவினை முன்னோக்கிச் செல்லும் வேகமும், பின்னோக்கிச் செல்லும் வேகமும் சமமாக இருக்கும்போது, அது சமநிலையை அடைகிறது. ஒரு வினையின் சமநிலையை செறிவு, வெப்பநிலை, அழுத்தம் போன்ற காரணிகளை மாற்றுவதன் மூலம் எவ்வாறு மாற்றலாம் என்பதை 'லெ ஷாட்லியே தத்துவம்' விளக்குகிறது. இது வேதித் தொழிற்சாலைகளில் உற்பத்தியை அதிகரிக்கப் பயன்படுகிறது.",
    culturalContext: "The pH of soil is a critical factor in agriculture in regions like the Kaveri delta. Some crops prefer acidic soil, while others prefer alkaline soil. Understanding the principles of ionic equilibrium, acids, bases, and buffers, as discussed in this chapter, is essential for farmers to manage soil health and maximize crop yield.",
    syllabusMapping: [
        {
            topic: "Equilibrium",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 8 & 9 (Chemical and Ionic Equilibrium)",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 7: Equilibrium",
            notes: "A very important and often challenging chapter. Le Chatelier's principle, calculation of pH, buffer solutions, and solubility product are high-yield topics for NEET. Practice a wide variety of numerical problems.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapters 8 & 9 map to NEET Chemistry Unit 7'
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