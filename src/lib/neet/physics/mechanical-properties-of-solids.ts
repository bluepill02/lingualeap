
import type { NeetModule } from '@/lib/types';

export const mechanicalPropertiesOfSolidsModule: NeetModule = {
    id: 'neet-physics-mechanical-properties-of-solids',
    title: 'Physics - Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)',
    chapter: 'Mechanical Properties of Solids',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of elasticity and plasticity.",
        "Define stress and strain and their different types (longitudinal, shearing, hydraulic).",
        "Understand and apply Hooke's Law.",
        "Analyze stress-strain curves to understand material properties like elastic limit, tensile strength, and fracture point.",
        "Define and calculate Young's Modulus, Bulk Modulus, Shear Modulus, and Poisson's Ratio.",
        "Calculate the elastic potential energy stored in a stretched wire."
    ],
    prerequisites: [
        "Basic understanding of forces and pressure.",
        "Concepts of length, area, and volume."
    ],
    conceptOverview: "This chapter explores how solid materials behave when external forces are applied to them. We delve into the property of elasticity—the ability of a body to regain its original shape and size after the removal of deforming forces. Key concepts include stress (the internal restoring force per unit area) and strain (the fractional change in dimension). Hooke's law, which states that stress is proportional to strain within the elastic limit, is fundamental. We will study different moduli of elasticity (Young's, Bulk, Shear) which quantify a material's resistance to different types of deformation. This chapter is crucial for understanding the basis of material science and engineering.",
    tamilConnection: "பண்டைய கோயில்களின் கல் தூண்கள், இன்றும் உறுதியாக நிற்பதற்குக் காரணம், அந்தக் கற்களின் மீள் பண்பு (elasticity) ஆகும். ஒரு பொருளின் மீது விசை செலுத்தும்போது அது எவ்வாறு நீட்சி அடைகிறது, வளைகிறது அல்லது அதன் வடிவம் மாறுகிறது என்பதை இப்பகுதி விளக்குகிறது. தகைவு (Stress) மற்றும் திரிபு (Strain) ஆகியவை இதன் அடிப்படை அளவுகளாகும்.",
    culturalContext: "Think of the steel cables used in the Pamban Bridge, which have to withstand immense forces from the train's weight and the strong sea winds. The design of these cables relies on a deep understanding of Young's Modulus and the material's elastic limit to ensure they stretch slightly but do not break or permanently deform. This chapter explains the physics behind such robust engineering.",
    syllabusMapping: [
         {
            topic: 'Properties of Solids and Liquids',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 7: Properties of Matter',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 9: Mechanical Properties of Solids',
            notes: 'A relatively straightforward chapter for NEET. Questions are often direct formula applications involving the different moduli of elasticity. The stress-strain curve is a very important concept to understand.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 7'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
