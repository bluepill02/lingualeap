
import type { NeetModule } from '@/lib/types';

export const magnetismAndMatterModule: NeetModule = {
    id: 'neet-physics-magnetism-and-matter',
    title: 'Physics - Magnetism and Matter (காந்தவியல் மற்றும் பருப்பொருட்கள்)',
    chapter: 'Magnetism and Matter',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of a bar magnet as an equivalent solenoid.",
        "Define magnetic field lines and their properties.",
        "Analyze the torque on a magnetic dipole (bar magnet) in a uniform magnetic field.",
        "Understand Gauss's law for magnetism, implying that magnetic monopoles do not exist.",
        "Describe the Earth's magnetic field and its elements (declination, dip, horizontal component).",
        "Classify materials based on their magnetic properties: diamagnetic, paramagnetic, and ferromagnetic.",
        "Define and understand magnetization, magnetic intensity, and magnetic susceptibility."
    ],
    prerequisites: [
        "Basic concepts from 'Moving Charges and Magnetism'.",
        "Analogy with concepts from Electrostatics (dipoles, fields)."
    ],
    conceptOverview: "This chapter delves into the behavior of magnetic fields and materials. We start by treating the familiar bar magnet as a magnetic dipole, drawing strong analogies to the electric dipole studied in electrostatics. A key concept is Gauss's law for magnetism, which mathematically states that isolated magnetic poles (monopoles) do not exist. We then explore the Earth's own magnetic field, a crucial element for navigation. Finally, the chapter classifies all materials based on how they respond to an external magnetic field, introducing diamagnetism, paramagnetism, and ferromagnetism. This provides a microscopic understanding of why some materials are strongly magnetic while others are not.",
    tamilConnection: "திசைகாட்டி (compass) காந்த ஊசி வடக்கு-தெற்கு திசையிலேயே நிற்பதற்குக் காரணம், பூமி ஒரு பெரிய காந்தம் போல செயல்படுவதுதான். இந்த அத்தியாயம், பூமியின் காந்தப்புலம் பற்றியும், வெவ்வேறு பொருட்கள் காந்தப்புலத்தில் எவ்வாறு செயல்படுகின்றன என்பதையும் விளக்குகிறது. இரும்பு போன்ற சில பொருட்கள் ஏன் காந்தத்தால் வலுவாக ஈர்க்கப்படுகின்றன என்பதையும் இது தெளிவுபடுத்துகிறது.",
    culturalContext: "Ancient Tamil mariners were known for their navigational skills. While they primarily used stars, an intuitive understanding of direction, possibly aided by naturally occurring magnetic stones (lodestones), was crucial. This chapter provides the scientific basis for the Earth's magnetic field, the very principle that makes a modern magnetic compass work.",
    syllabusMapping: [
         {
            topic: 'Magnetism and Matter',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 3: Magnetism and Magnetic Effects of Electric Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 5: Magnetism and Matter',
            notes: 'A chapter with more theoretical concepts. Earth\'s magnetism and the classification of magnetic materials (dia, para, ferro) are important topics. Questions are often conceptual.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 3 maps to NEET Physics Unit 13'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
