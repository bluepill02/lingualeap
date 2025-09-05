
import type { NeetModule } from '@/lib/types';

export const nucleiModule: NeetModule = {
    id: 'neet-physics-nuclei',
    title: 'Physics - Nuclei (அணுக்கருக்கள்)',
    chapter: 'Nuclei',
    subject: 'Physics',
    learningObjectives: [
        "Describe the composition and size of the nucleus.",
        "Understand the concepts of mass-energy equivalence (E=mc²), mass defect, and binding energy.",
        "Analyze the binding energy per nucleon curve and its implications for nuclear stability, fission, and fusion.",
        "Understand the law of radioactive decay, half-life, and mean life.",
        "Differentiate between alpha, beta, and gamma decay.",
        "Understand the principles of nuclear fission and nuclear fusion as sources of energy."
    ],
    prerequisites: [
        "Basic concepts from 'Atoms'.",
        "Understanding of conservation laws (energy, momentum, charge)."
    ],
    conceptOverview: "This chapter focuses on the heart of the atom: the nucleus. We explore its composition (protons and neutrons) and the immense forces that hold it together. The concepts of mass defect and binding energy are introduced, revealing the source of nuclear energy through Einstein's famous equation, E=mc². The binding energy curve is a crucial tool for understanding why some nuclei are stable and why processes like nuclear fission (splitting of a heavy nucleus) and nuclear fusion (joining of light nuclei) release enormous amounts of energy. We will also study radioactivity—the spontaneous decay of unstable nuclei—and the mathematical law that governs this random process.",
    tamilConnection: "சூரியன் ஒளிர்வது முதல், அணு உலைகளில் மின்சாரம் தயாரிப்பது வரை, அணுக்கருவின் ஆற்றலே அடிப்படை. ஒரு அணுக்கருவின் நிறையை விட, அதன் தனித்த நியூக்ளியான்களின் (புரோட்டான், நியூட்ரான்) மொத்த நிறை அதிகமாக இருக்கும். இந்த நிறை வேறுபாடு (mass defect) தான், E=mc² என்ற சமன்பாட்டின்படி, பிணைப்பு ஆற்றலாக (binding energy) மாறுகிறது. இந்த ஆற்றலின் வெளிப்பாடே அணுக்கருப் பிளவு (fission) மற்றும் இணைவு (fusion) ஆகும்.",
    culturalContext: "The Kalpakkam Atomic Power Station is a major source of electricity for Tamil Nadu. It operates on the principle of nuclear fission, where the controlled splitting of uranium nuclei releases a massive amount of energy to produce steam and turn turbines. This chapter explains the fundamental nuclear physics that powers such technologies.",
    syllabusMapping: [
         {
            topic: 'Atoms & Nuclei',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 8: Atomic and Nuclear Physics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 13: Nuclei',
            notes: 'Radioactive decay law, half-life, and binding energy calculations are very important for NEET. The binding energy curve and its consequences (fission/fusion) are key conceptual areas.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 17'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
