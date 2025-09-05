
import type { NeetModule } from '@/lib/types';

export const rayOpticsAndOpticalInstrumentsModule: NeetModule = {
    id: 'neet-physics-ray-optics-and-optical-instruments',
    title: 'Physics - Ray Optics and Optical Instruments (கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்)',
    chapter: 'Ray Optics and Optical Instruments',
    subject: 'Physics',
    learningObjectives: [
        "Understand reflection and refraction at plane and spherical surfaces.",
        "Apply the mirror formula and lens maker's formula to solve problems.",
        "Understand total internal reflection and its applications (e.g., optical fibers).",
        "Analyze the dispersion of light through a prism.",
        "Describe the working principles, and calculate the magnification of, optical instruments like simple and compound microscopes and telescopes."
    ],
    prerequisites: [
        "Basic geometry and trigonometry.",
        "Understanding that light travels in straight lines (rectilinear propagation)."
    ],
    conceptOverview: "Ray Optics, or Geometrical Optics, treats light as rays that travel in straight lines. This powerful simplification allows us to understand the formation of images by mirrors and lenses. We will explore the laws of reflection and refraction, which govern how light interacts with surfaces. Key formulas, such as the mirror formula and the lens maker's formula, will be used to analyze spherical mirrors and thin lenses. The chapter also covers important phenomena like total internal reflection, the principle behind optical fibers, and dispersion, which explains how a prism creates a rainbow. Finally, we apply these principles to understand the workings of essential optical instruments like microscopes and telescopes.",
    tamilConnection: "கானல் நீர் (mirage) தோன்றுவது முதல், வானவில் உருவாவது வரை, ஒளியின் பண்புகளே காரணம். சமதள மற்றும் கோளக ஆடிகளில் பிம்பங்கள் எவ்வாறு உருவாகின்றன, லென்சுகள் எவ்வாறு ஒளியை குவிக்கின்றன அல்லது விரிக்கின்றன என்பதை இப்பகுதி விளக்குகிறது. நுண்ணோக்கிகள் மற்றும் தொலைநோக்கிகள் போன்ற கருவிகளின் செயல்பாட்டிற்கும் இதுவே அடிப்படை.",
    culturalContext: "Think of the intricate arrangement of mirrors used to bring sunlight into the 'garbhagriha' (sanctum sanctorum) of some ancient temples. This required a precise understanding of the laws of reflection. Similarly, the spectacles used by our elders are a direct application of the lens formula to correct vision defects. This chapter explains the science behind these everyday applications of optics.",
    syllabusMapping: [
         {
            topic: 'Ray Optics & Optical Instruments',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 6: Ray Optics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 9: Ray Optics and Optical Instruments',
            notes: 'A very high-yield chapter for NEET. Problems involving lens maker\'s formula, combination of lenses, prism, and magnification of microscopes/telescopes are extremely common. Mastering sign conventions is critical.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 6 maps to NEET Physics Unit 14'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
