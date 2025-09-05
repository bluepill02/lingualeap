
import type { NeetModule } from '@/lib/types';

export const electromagneticInductionModule: NeetModule = {
    id: 'neet-physics-electromagnetic-induction',
    title: 'Physics - Electromagnetic Induction (மின்காந்தத் தூண்டல்)',
    chapter: 'Electromagnetic Induction',
    subject: 'Physics',
    learningObjectives: [
        "Define and calculate magnetic flux.",
        "Understand and apply Faraday's laws of electromagnetic induction.",
        "Apply Lenz's law to determine the direction of induced current.",
        "Define and calculate self-inductance and mutual inductance.",
        "Analyze the energy stored in an inductor.",
        "Understand the concept of motional emf.",
        "Describe the working principle of an AC generator."
    ],
    prerequisites: [
        "Understanding of magnetic fields and magnetic forces (Moving Charges and Magnetism).",
        "Basic calculus (differentiation)."
    ],
    conceptOverview: "This chapter explores one of the most profound connections in physics: the link between electricity and magnetism. While Oersted discovered that an electric current produces a magnetic field, Faraday and Henry discovered the reverse: a changing magnetic field can produce an electric current. This phenomenon is called electromagnetic induction. The chapter is built around Faraday's Law, which quantifies the induced emf, and Lenz's Law, which gives the direction of the induced current. We will also introduce the concept of inductance, which is the property of a coil to oppose changes in current, and see how these principles are applied in essential technologies like the electric generator.",
    tamilConnection: "மின்சாரமும் காந்தமும் ஒன்றோடொன்று தொடர்புடையவை. ஒரு மாறும் காந்தப்புலம், ஒரு மின்னோட்டத்தை எவ்வாறு தூண்டுகிறது என்பதை இந்த அத்தியாயம் விளக்குகிறது. இதுவே மின்காந்தத் தூண்டல் எனப்படும். மின்சார ஜெனரேட்டர்கள் முதல், இன்டக்‌ஷன் அடுப்புகள் வரை, அனைத்தும் இந்தக் கொள்கையின் அடிப்படையிலேயே செயல்படுகின்றன.",
    culturalContext: "Think of a dynamo on a bicycle lamp, a common sight in many parts of Tamil Nadu. As the wheel turns, it rotates a magnet inside a coil, creating a changing magnetic field. This induces a current in the coil, which lights up the lamp. This simple device is a perfect demonstration of Faraday's law of electromagnetic induction.",
    syllabusMapping: [
         {
            topic: 'Electromagnetic Induction',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 4: Electromagnetic Induction and Alternating Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 6: Electromagnetic Induction',
            notes: 'A conceptually rich chapter. Faraday\'s and Lenz\'s laws are fundamental. Problems on motional emf and self/mutual inductance are frequently asked in NEET.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 4 maps to NEET Physics Unit 12'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
