
import type { NeetModule } from '@/lib/types';

export const semiconductorElectronicsModule: NeetModule = {
    id: 'neet-physics-semiconductor-electronics',
    title: 'Physics - Semiconductor Electronics (குறைக்கடத்தி மின்னணுவியல்)',
    chapter: 'Semiconductor Electronics',
    subject: 'Physics',
    learningObjectives: [
        "Differentiate between conductors, insulators, and semiconductors based on energy bands.",
        "Understand intrinsic and extrinsic semiconductors (p-type and n-type).",
        "Analyze the formation and characteristics of a p-n junction diode, including forward and reverse biasing.",
        "Understand the application of diodes as rectifiers (half-wave and full-wave).",
        "Describe the working of special purpose diodes like Zener diode, photodiode, LED, and solar cell.",
        "Understand the structure and working of a Bipolar Junction Transistor (BJT).",
        "Analyze the characteristics of a transistor in different configurations (CE, CB, CC).",
        "Understand the application of transistors as amplifiers and oscillators.",
        "Understand the basic concepts of logic gates (AND, OR, NOT, NAND, NOR)."
    ],
    prerequisites: [
        "Basic concepts from Current Electricity.",
        "Understanding of energy levels from the 'Atoms' chapter."
    ],
    conceptOverview: "This chapter is the foundation of all modern electronics. It explores semiconductors, materials with conductivity between that of conductors and insulators. We learn how their conductivity can be dramatically altered by adding impurities (doping), creating n-type and p-type semiconductors. The magic happens when these two types are joined to form a p-n junction diode, a device that allows current to flow in only one direction. This property is the basis for converting AC to DC (rectification). We then move to the transistor, a three-terminal device that can amplify signals or act as a switch, which is the fundamental building block of all computer chips and electronic devices. The chapter concludes with an introduction to digital electronics through logic gates.",
    tamilConnection: "மொபைல் போன்கள், கணினிகள், டிவிகள் ஆகியவற்றின் இதயம் குறைக்கடத்தி சாதனங்கள் தான். சிலிக்கான் போன்ற பொருட்களின் மின் கடத்தும் பண்பை மாற்றுவதன் மூலம், p-n சந்தி டையோடு மற்றும் டிரான்சிஸ்டர் போன்ற சாதனங்கள் உருவாக்கப்படுகின்றன. இவை மின்னணுவியலின் அடிப்படை கட்டுமானக் கற்கள் ஆகும்.",
    culturalContext: "From the chips in a smartphone assembled in Sriperumbudur to the LED lights illuminating homes across Tamil Nadu, semiconductor electronics are everywhere. This chapter explains the fundamental physics that makes these ubiquitous modern technologies possible.",
    syllabusMapping: [
         {
            topic: 'Semiconductor Electronics',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 10: Electronics and Communication',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 14: Semiconductor Electronics',
            notes: 'A very high-yield chapter for NEET. Logic gates are the easiest and most frequently asked topic. Transistor characteristics and diode applications (rectifiers, Zener diode) are also extremely important.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 10 maps to NEET Physics Unit 18'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
