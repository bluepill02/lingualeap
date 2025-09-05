
import type { NeetModule } from '@/lib/types';

export const thermalPropertiesOfMatterModule: NeetModule = {
    id: 'neet-physics-thermal-properties-of-matter',
    title: 'Physics - Thermal Properties of Matter (பருப்பொருளின் வெப்பப் பண்புகள்)',
    chapter: 'Thermal Properties of Matter',
    subject: 'Physics',
    learningObjectives: [
        "Define temperature and heat and understand different temperature scales.",
        "Analyze thermal expansion in solids, liquids, and gases.",
        "Define specific heat capacity, molar specific heat capacity, and latent heat.",
        "Apply the principles of calorimetry.",
        "Understand the different modes of heat transfer: conduction, convection, and radiation.",
        "Understand Newton's law of cooling and Kirchhoff's law of thermal radiation."
    ],
    prerequisites: [
        "Basic understanding of temperature.",
        "Concepts of mass and volume."
    ],
    conceptOverview: "This chapter explores how matter responds to heat. We'll start by defining temperature and heat more formally and look at how materials expand when heated (thermal expansion). A central part of the chapter is calorimetry, which deals with the measurement of heat. We'll define specific heat (a measure of how much heat is needed to raise a substance's temperature) and latent heat (the heat required for a phase change, like melting ice or boiling water). Finally, we'll study the three ways heat can travel from one place to another: conduction (through direct contact), convection (through the movement of fluids), and radiation (through electromagnetic waves).",
    tamilConnection: "கோடை காலத்தில் இரும்புப் பொருட்கள் தொட்டால் சுடுவதும், வெந்நீர் வைக்கும்போது பாத்திரம் சூடாவதும் வெப்பக் கடத்தல் (conduction) முறையால் நடக்கிறது. காற்று சூடாகி மேலே செல்வது வெப்பச்சலனம் (convection). சூரியனிலிருந்து வெப்பம் நம்மை அடைவது வெப்பக் கதிர்வீச்சு (radiation). இந்த அத்தியாயம், வெப்பம் பரவும் இந்த மூன்று முறைகளையும் விளக்குகிறது.",
    culturalContext: "Think of a traditional Pongal pot ('pongal paanai'). The clay pot is designed to handle thermal expansion. Heat from the fire is transferred to the pot by radiation and convection, and then through the pot to the water by conduction. The boiling of rice and milk involves the concepts of specific heat and latent heat. The entire festival cooking process is a beautiful demonstration of thermal physics.",
    syllabusMapping: [
         {
            topic: 'Thermal Properties of Matter',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 8: Heat and Thermodynamics',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 11: Thermal Properties of Matter',
            notes: 'An important chapter for NEET. Calorimetry problems (mixing substances at different temperatures) and heat transfer (especially conduction through compound rods and radiation) are frequently asked.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 8'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
