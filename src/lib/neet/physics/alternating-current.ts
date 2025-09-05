
import type { NeetModule } from '@/lib/types';

export const alternatingCurrentModule: NeetModule = {
    id: 'neet-physics-alternating-current',
    title: 'Physics - Alternating Current (மாறுதிசை மின்னோட்டம்)',
    chapter: 'Alternating Current',
    subject: 'Physics',
    learningObjectives: [
        "Understand and differentiate between alternating and direct current.",
        "Define and calculate RMS (root mean square) and average values of alternating current and voltage.",
        "Analyze the phase relationship between voltage and current in purely resistive, inductive, and capacitive circuits.",
        "Analyze series LCR circuits, understand impedance, and calculate resonant frequency.",
        "Understand the concept of power in AC circuits and the power factor.",
        "Describe the working principle of LC oscillations, transformers, and AC generators."
    ],
    prerequisites: [
        "Current Electricity (Ohm's Law, Kirchhoff's Laws).",
        "Electromagnetic Induction (Faraday's Law, Inductance).",
        "Basic concepts of vectors (phasor diagrams) and calculus."
    ],
    conceptOverview: "This chapter introduces Alternating Current (AC), the form of electricity that powers our homes and industries. Unlike Direct Current (DC), AC periodically reverses direction. This property allows for efficient long-distance power transmission via transformers. We will explore how resistors, inductors, and capacitors behave in AC circuits, leading to the crucial concept of impedance—the AC equivalent of resistance. The behavior of series LCR circuits, including the phenomenon of resonance, is a cornerstone of this chapter and fundamental to radio tuning and many other technologies.",
    tamilConnection: "நம் வீடுகளில் பயன்படுத்தப்படும் மின்சாரம் மாறுதிசை மின்னோட்டம் (AC) ஆகும். இது ஏன் நேர் மின்னோட்டத்தை (DC) விட பரவலாகப் பயன்படுத்தப்படுகிறது? மின்மாற்றிகள் (Transformers) மூலம் இதன் மின்னழுத்தத்தை எளிதாக மாற்ற முடியும் என்பதே காரணம். இந்த அத்தியாயம், AC சுற்றுகளில் மின்தடை, மின்தூண்டி, மற்றும் மின்தேக்கி ஆகியவற்றின் செயல்பாட்டைப் பற்றி விரிவாக விளக்குகிறது.",
    culturalContext: "The entire electrical grid, from the power generation stations in places like Neyveli or Mettur to the wall socket in a Tamil Nadu home, operates on the principles of Alternating Current. Understanding AC circuits is understanding the backbone of modern infrastructure.",
    syllabusMapping: [
         {
            topic: 'Alternating Current',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 4: Electromagnetic Induction and Alternating Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 7: Alternating Current',
            notes: 'A very important chapter for NEET. LCR circuits, resonance, power factor, and transformers are high-yield topics. Phasor diagrams are a key tool for solving problems.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 4 maps to NEET Physics Unit 12'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
