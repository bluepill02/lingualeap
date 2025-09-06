import type { NeetModule } from '@/lib/types';

export const redoxReactionsAndElectrochemistry: NeetModule = {
    id: 'neet-chemistry-redox-reactions-and-electrochemistry',
    title: 'Chemistry - Redox Reactions and Electrochemistry (ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் மின் வேதியியல்)',
    chapter: 'Redox Reactions and Electrochemistry',
    subject: 'Chemistry',
    learningObjectives: [
        "Define oxidation and reduction in terms of electron transfer.",
        "Assign oxidation numbers and balance redox reactions using the ion-electron method or oxidation number method.",
        "Understand the functioning of electrochemical cells (Galvanic/Voltaic cells) and electrolytic cells.",
        "Define standard electrode potential and understand the electrochemical series.",
        "Apply the Nernst equation to calculate the emf of a cell under non-standard conditions.",
        "Relate cell potential to Gibbs free energy and the equilibrium constant.",
        "Understand the principles of electrolysis and Faraday's laws of electrolysis."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions and ions.",
        "Concepts of Gibbs free energy from Thermodynamics."
    ],
    conceptOverview: "This chapter combines two related topics: redox reactions and electrochemistry. Redox reactions are those involving the transfer of electrons, resulting in a change in oxidation states. We will learn systematic methods to balance these often-complex reactions. Electrochemistry is the study of the interplay between chemical energy and electrical energy. We'll explore how spontaneous redox reactions can be harnessed to produce electricity in galvanic cells (like batteries) and how electricity can be used to drive non-spontaneous reactions in electrolytic cells. The Nernst equation and Faraday's laws are the key quantitative tools in this field.",
    tamilConnection: "மின்கலங்கள் (batteries) முதல் உலோகங்களைத் தூய்மைப்படுத்துதல் வரை மின் வேதியியல் ஒரு முக்கிய பங்கு வகிக்கிறது. ஒரு வேதிவினையிலிருந்து மின்சாரத்தை எவ்வாறு உருவாக்குவது (கால்வானிக் கலம்), மற்றும் மின்சாரத்தைப் பயன்படுத்தி ஒரு வேதிவினையை எவ்வாறு நிகழ்த்துவது (மின்னாற்பகுப்புக் கலம்) என்பதை இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The process of electroplating, used to coat temple 'kavachams' (ornamental armor for deities) and jewelry with a thin layer of gold or silver, is a direct application of electrolysis. An electric current is used to drive a non-spontaneous redox reaction, depositing a layer of the precious metal onto the object. This chapter explains the scientific principles behind this traditional craft.",
    syllabusMapping: [
        {
            topic: "Redox Reactions, Electrochemistry",
            tnBoardChapter: "11th Chem Vol 2 (Ch 10), 12th Chem Vol 1 (Ch 9)",
            ncertReference: "Class 11 Chem Part 2 (Ch 8), Class 12 Chem Part 1 (Ch 3)",
            notes: "Very important chapter for NEET. Nernst equation problems, Faraday's laws of electrolysis, and questions on the electrochemical series (predicting reactivity) are very common.",
            mappingDescription: 'Covers NEET Chemistry Units 8 and 13'
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