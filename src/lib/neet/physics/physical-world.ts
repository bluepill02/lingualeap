
import type { NeetModule } from '@/lib/types';

export const physicalWorldModule: NeetModule = {
    id: 'neet-physics-physical-world',
    title: 'Physics - Physical World (பௌதிக உலகம்)',
    chapter: 'Physical World',
    subject: 'Physics',
    learningObjectives: [
        "Understand what constitutes 'Physics' and its scope.",
        "Appreciate the excitement of physics by understanding the interplay between discovery and theory.",
        "Identify the four fundamental forces in nature and their relative strengths.",
        "Recognize the fundamental conservation laws that govern all physical phenomena."
    ],
    prerequisites: [
        "A sense of curiosity about the natural world.",
        "Basic understanding of science from Class 10."
    ],
    conceptOverview: "This chapter is the philosophical gateway to Physics. It doesn't involve complex problem-solving but sets the stage for everything to come. It answers the 'Why?' before we dive into the 'How?'. Understanding the scope, the fundamental forces, and the conservation laws provides a mental map to connect all subsequent chapters. For NEET, direct questions are rare, but the concepts are implicitly tested everywhere.",
    tamilConnection: "இயற்பியல் என்பது வெறும் சூத்திரங்கள் அல்ல; அது பிரபஞ்சத்தின் விதிகளைப் புரிந்துகொள்ளும் ஒரு முயற்சி. சங்க இலக்கியத்தில் இயற்கையை உற்றுநோக்கியது முதல், இன்று இஸ்ரோவின் விண்வெளிப் பயணங்கள் வரை, இயற்பியலின் அடிப்படைக் கோட்பாடுகள் நம்மைச் சுற்றி உள்ளன. இந்தப் பாடம் அந்தப் பெரிய சித்திரத்தை அறிமுகப்படுத்துகிறது.",
    culturalContext: "Think of constructing a grand temple like the Brihadeeswarar Temple in Thanjavur. The architects needed a deep, intuitive understanding of forces (gravity), material properties, and stability. Physics formalizes this understanding. This chapter is like appreciating the temple's blueprint before studying each individual pillar.",
    syllabusMapping: [
         {
            topic: 'Scope of Physics & Fundamental Forces',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 1: Nature of Physical World and Measurement',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 1: Physical World',
            notes: 'This is a foundational chapter. Read it once to get a broad perspective. Focus on understanding the relative strengths and ranges of the fundamental forces.'
        }
    ],
    conceptNotes: `### 1. What is Physics? (இயற்பியல் என்றால் என்ன?)
Physics is the most fundamental of all sciences, aiming to understand the basic laws of nature and their manifestation in various phenomena. It is the study of matter, energy, and their interaction. The core idea is [[unification:ஒருங்கிணைத்தல்]]—explaining diverse physical phenomena with a few concepts and laws—and [[reductionism:குறைத்தல்வாதம்]], which is about deriving the properties of a bigger, more complex system from the properties and interactions of its constituent simpler parts.

### 2. Scope and Excitement of Physics (இயற்பியலின் வீச்சு மற்றும் உற்சாகம்)
The scope of Physics is vast, covering two main domains:
*   **Macroscopic (பேரியல்):** Includes phenomena at the laboratory, terrestrial, and astronomical scales. This is the realm of [[Classical Physics:செவ்வியல் இயற்பியல்]], which includes:
    *   Mechanics (இயக்கவியல்): Deals with the motion of objects (Newton's Laws, etc.).
    *   Electrodynamics (மின்னியக்கவியல்): Deals with electric and magnetic phenomena.
    *   Optics (ஒளியியல்): Deals with the phenomena involving light.
    *   Thermodynamics (வெப்ப இயக்கவியல்): Deals with heat, temperature, and the bulk properties of matter.
*   **Microscopic (நுண்ணியல்):** Includes phenomena at the atomic, molecular, and nuclear scales. This is the realm of **[[Quantum Mechanics:குவாண்டம் இயக்கவியல்]]**.

The excitement of Physics comes from uncovering the secrets of nature, predicting future events based on its laws, and applying this knowledge for societal benefit.

### 3. The Four Fundamental Forces in Nature (இயற்கையின் நான்கு அடிப்படை விசைகள்)
All the forces we observe in the macroscopic and microscopic worlds can be traced back to four fundamental forces.

| Force (விசை) | Relative Strength (சார்பு வலிமை) | Range (வீச்சு) | Operates Among (செயல்படும் துகள்கள்) |
| :--- | :--- | :--- | :--- |
| **Gravitational Force (ஈர்ப்பியல் விசை)** | 1 | Infinite (முடிவற்றது) | All objects in the universe (அனைத்து பொருட்கள்) |
| **Weak Nuclear Force (மெலிந்த அணுக்கரு விசை)** | 10²⁵ | Very short, sub-nuclear size (~10⁻¹⁶ m) | Some elementary particles (சில அடிப்படை துகள்கள்) |
| **Electromagnetic Force (மின்காந்த விசை)** | 10³⁶ | Infinite (முடிவற்றது) | Charged particles (மின்னூட்டத் துகள்கள்) |
| **Strong Nuclear Force (வலுவான அணுக்கரு விசை)** | 10³⁸ | Short, nuclear size (~10⁻¹⁵ m) | Nucleons (protons, neutrons) (நியூக்ளியான்கள்) |

### 4. Fundamental Conservation Laws (அடிப்படைப் பாதுகாப்பு விதிகள்)
In any physical process, certain quantities remain unchanged over time. These are called conserved quantities. These laws are fundamental and cannot be proven; they are verified by observation and experiment.
*   **Law of Conservation of Energy (ஆற்றல் பாதுகாப்பு விதி):** Energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains constant.
*   **Law of Conservation of Linear Momentum (நேர்கோட்டு உந்தப் பாதுகாப்பு விதி):** If no external force acts on a system, its total linear momentum remains constant.
*   **Law of Conservation of Angular Momentum (கோண உந்தப் பாதுகாப்பு விதி):** If no external torque acts on a system, its total angular momentum remains constant.
*   **Law of Conservation of Charge (மின்னூட்டப் பாதுகாப்பு விதி):** The total electric charge in an isolated system never changes.
`,
    workedExamples: [],
    mcqs: [
        {
            question: "Which of the following is the weakest fundamental force in nature?",
            options: ["A. Electromagnetic Force", "B. Strong Nuclear Force", "C. Weak Nuclear Force", "D. Gravitational Force"],
            answer: "D. Gravitational Force",
            explanation: "As per the relative strength table, the Gravitational Force is the weakest, with a relative strength of 1, compared to the Strong Nuclear Force's 10³⁸.",
            neetFrequency: 3
        },
        {
            question: "The Law of Conservation of Energy implies that:",
            options: ["A. Energy can be created from nothing.", "B. The total energy of the universe is decreasing.", "C. Energy can only be converted from one form to another.", "D. Energy is only conserved in mechanical systems."],
            answer: "C. Energy can only be converted from one form to another.",
            explanation: "The law states that energy is always conserved in an isolated system; it can change forms (e.g., potential to kinetic), but the total amount remains constant.",
            neetFrequency: 2
        }
    ],
    assertionReasons: [],
    matchTheColumns: [
        {
            column1: ["(a) Macroscopic Physics", "(b) Microscopic Physics", "(c) Strong Nuclear Force", "(d) Weak Nuclear Force"],
            column2: ["(p) Quantum Mechanics", "(q) Radioactivity (β-decay)", "(r) Binds nucleus", "(s) Classical Mechanics"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Macroscopic phenomena are explained by Classical Mechanics, while microscopic phenomena require Quantum Mechanics. The Strong force binds the nucleus, and the Weak force is responsible for processes like beta decay."
        }
    ]
};
