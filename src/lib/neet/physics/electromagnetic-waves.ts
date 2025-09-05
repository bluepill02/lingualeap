
import type { NeetModule } from '@/lib/types';

export const electromagneticWavesModule: NeetModule = {
    id: 'neet-physics-electromagnetic-waves',
    title: 'Physics - Electromagnetic Waves (மின்காந்த அலைகள்)',
    chapter: 'Electromagnetic Waves',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of displacement current and its need.",
        "Know the properties of electromagnetic (EM) waves.",
        "Understand the transverse nature of EM waves.",
        "Recall the full electromagnetic spectrum, including the order of wavelengths/frequencies and their sources/uses (Radio, Microwaves, Infrared, Visible, UV, X-rays, Gamma rays)."
    ],
    prerequisites: [
        "Basic understanding of electric and magnetic fields.",
        "Concepts from electromagnetic induction and alternating currents."
    ],
    conceptOverview: "This chapter serves as a bridge between electromagnetism and optics. James Clerk Maxwell unified the laws of electricity and magnetism and showed that a changing electric field creates a magnetic field, and vice versa. This mutual generation leads to the propagation of a self-sustaining wave: the electromagnetic wave. These waves do not require a medium and travel at the speed of light. The chapter highlights the key properties of these waves and introduces the vast electromagnetic spectrum, which includes everything from radio waves to gamma rays, each with its unique properties and applications that form the basis of most modern communication and imaging technologies.",
    tamilConnection: "ரேடியோ, தொலைக்காட்சி, மொபைல் போன், வைஃபை - இவை அனைத்தும் மின்காந்த அலைகளின் மூலமே செயல்படுகின்றன. ஒளி கூட ஒரு வகை மின்காந்த அலைதான்! இந்த அத்தியாயம், இந்த அலைகளின் அடிப்படைப் பண்புகளையும், அதன் வெவ்வேறு வகைகளையும் (மின்காந்த நிறமாலை) பற்றி விளக்குகிறது.",
    culturalContext: "Think of using a mobile phone to make a call from a village near Madurai to a relative in Chennai. This communication happens almost instantly via electromagnetic waves (specifically, microwaves) traveling between cell towers and satellites. This chapter explains the fundamental nature of the waves that make this modern marvel possible.",
    syllabusMapping: [
         {
            topic: 'Electromagnetic Waves',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 5: Electromagnetic Waves',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 8: Electromagnetic Waves',
            notes: 'A relatively short but important chapter for NEET. Questions are often direct and memory-based, focusing on the properties of EM waves and the order and uses of different parts of the spectrum.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 5 maps to NEET Physics Unit 13'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
