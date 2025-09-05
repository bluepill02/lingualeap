
import type { NeetModule } from '@/lib/types';

export const mechanicalPropertiesOfFluidsModule: NeetModule = {
    id: 'neet-physics-mechanical-properties-of-fluids',
    title: 'Physics - Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)',
    chapter: 'Mechanical Properties of Fluids',
    subject: 'Physics',
    learningObjectives: [
        "Define pressure and understand its variation with depth (Pascal's Law).",
        "Understand the concept of buoyancy and Archimedes' principle.",
        "Differentiate between streamline and turbulent flow, and understand the equation of continuity.",
        "Apply Bernoulli's principle to various situations involving fluid dynamics.",
        "Define viscosity and understand Stoke's law and terminal velocity.",
        "Explain surface tension, surface energy, and phenomena like capillary action."
    ],
    prerequisites: [
        "Newton's Laws of Motion.",
        "Work, Energy, and Power.",
        "Basic concepts of pressure and density."
    ],
    conceptOverview: "This chapter explores the mechanics of fluids—substances that can flow (liquids and gases). It is divided into two main parts: fluid statics (fluids at rest) and fluid dynamics (fluids in motion). In statics, we explore concepts like pressure, buoyancy (Archimedes' principle), and Pascal's law, which explains how hydraulic lifts work. In dynamics, we introduce Bernoulli's principle, a fundamental law based on energy conservation for flowing fluids, which explains everything from the lift on an airplane wing to the swing of a cricket ball. We also delve into real-world fluid properties like viscosity (fluid friction) and surface tension (the skin-like property of liquid surfaces).",
    tamilConnection: "ஆறுகளில் ஓடும் நீர், காற்றில் பறக்கும் பறவை, கப்பல் மிதப்பது - இவை அனைத்தும் பாய்மங்களின் இயக்கவியல் விதிகளுக்கு உட்பட்டவை. பாஸ்கல் விதி, ஆர்க்கிமிடிஸ் தத்துவம் மற்றும் பெர்னூலியின் தத்துவம் ஆகியவை இந்த நிகழ்வுகளின் பின்னால் உள்ள அறிவியலை விளக்குகின்றன.",
    culturalContext: "Consider the massive temple tanks (தெப்பக்குளம்) in Tamil Nadu, like the one at the Madurai Meenakshi Amman Temple. The pressure at the bottom is immense, a concept explained by fluid statics. The floating of the 'theppam' (raft) during festivals is a direct demonstration of Archimedes' principle and buoyancy. This chapter unpacks the physics governing these familiar sights.",
    syllabusMapping: [
         {
            topic: 'Mechanical Properties of Fluids',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 7: Properties of Matter',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 10: Mechanical Properties of Fluids',
            notes: 'A comprehensive chapter with many important concepts. Bernoulli\'s principle and the equation of continuity are very frequently tested. Problems on terminal velocity (Stoke\'s Law) and excess pressure in bubbles are also high-yield.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 7'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
