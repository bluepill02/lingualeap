
import type { NeetModule } from '@/lib/types';

export const waveOpticsModule: NeetModule = {
    id: 'neet-physics-wave-optics',
    title: 'Physics - Wave Optics (அலை ஒளியியல்)',
    chapter: 'Wave Optics',
    subject: 'Physics',
    learningObjectives: [
        "Understand Huygens' principle and its application to explain reflection and refraction.",
        "Analyze the interference of light and understand the conditions for constructive and destructive interference.",
        "Describe Young's double-slit experiment (YDSE) and derive the expression for fringe width.",
        "Understand the phenomenon of diffraction, especially diffraction due to a single slit.",
        "Explain the polarization of light and understand Malus's law and Brewster's law."
    ],
    prerequisites: [
        "Basic concepts of wave motion (frequency, wavelength, phase).",
        "Understanding of Ray Optics concepts."
    ],
    conceptOverview: "While Ray Optics treats light as rays, Wave Optics explores phenomena that can only be explained by considering light as a wave. Huygens' principle provides a geometric method for understanding how waves propagate. The cornerstone of this chapter is the principle of superposition, which, when applied to light waves, explains interference (the pattern of bright and dark bands when two waves meet, as seen in Young's Double-Slit Experiment), diffraction (the bending of light around obstacles), and polarization (the orientation of light wave oscillations). These concepts prove the wave nature of light and are fundamental to modern optics.",
    tamilConnection: "சோப்பு குமிழி மற்றும் நீரில் சிந்திய எண்ணெயில் வண்ணங்கள் தெரிவது ஏன்? இது ஒளி அலைகளின் குறுக்கீட்டு விளைவால் (interference) ஏற்படுகிறது. ஒளியின் அலைப் பண்பை நிரூபிக்கும் இந்த நிகழ்வுகளையும், விளிம்பு விளைவு (diffraction), தளவிளைவு (polarization) ஆகியவற்றையும் இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The iridescent colors seen on a peacock's feather are not due to pigments but are a result of the interference and diffraction of light from the feather's intricate microstructure. This natural marvel is a beautiful display of wave optics principles in action.",
    syllabusMapping: [
         {
            topic: 'Wave Optics',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 7: Wave Optics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 10: Wave Optics',
            notes: 'A very important chapter for NEET. Young\'s double-slit experiment (YDSE) and diffraction concepts are high-yield. Problems on fringe width, and conditions for constructive/destructive interference are frequently asked.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 15'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
