
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
    workedExamples: [
        {
            title: "Conceptual Example 1: The Unification of Forces",
            difficulty: 'Easy',
            problem: "Explain the principle of 'unification' in physics using the example of electromagnetism.\n\nதமிழ்: இயற்பியலில் 'ஒருங்கிணைத்தல்' என்ற கொள்கையை மின்காந்தவியல் உதாரணத்தைப் பயன்படுத்தி விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the separate phenomena before unification. Before the 19th century, electricity, magnetism, and light were considered three separate, unrelated phenomena.",
                    explanationTamil: "ஒருங்கிணைப்பிற்கு முன் தனித்தனி நிகழ்வுகளை அடையாளம் காணவும். 19 ஆம் நூற்றாண்டிற்கு முன்பு, மின்சாரம், காந்தவியல் மற்றும் ஒளி ஆகியவை மூன்று தனித்தனி, தொடர்பில்லாத நிகழ்வுகளாகக் கருதப்பட்டன."
                },
                {
                    step: 2,
                    explanation: "Note the key scientific contributions that linked them. Scientists like Oersted, Faraday, and Ampere showed that electric currents could create magnetic fields and changing magnetic fields could create electric currents.",
                    explanationTamil: "அவற்றை இணைத்த முக்கிய விஞ்ஞான பங்களிப்புகளைக் கவனிக்கவும். ஓர்ஸ்டெட், ఫారడే மற்றும் ஆம்பியர் போன்ற விஞ்ஞானிகள் மின்னோட்டங்கள் காந்தப்புலங்களை உருவாக்க முடியும் என்றும், மாறும் காந்தப்புலங்கள் மின்னோட்டங்களை உருவாக்க முடியும் என்றும் காட்டினர்."
                },
                {
                    step: 3,
                    explanation: "Describe the final unified theory. James Clerk Maxwell formulated a set of four equations (Maxwell's Equations) that described all electric and magnetic phenomena. These equations predicted the existence of electromagnetic waves traveling at the speed of light.",
                    explanationTamil: "இறுதி ஒருங்கிணைந்த கோட்பாட்டை விவரிக்கவும். ஜேம்ஸ் கிளார்க் மாக்ஸ்வெல் நான்கு சமன்பாடுகளை (மாக்ஸ்வெல் சமன்பாடுகள்) உருவாக்கினார், அவை அனைத்து மின் மற்றும் காந்த நிகழ்வுகளையும் விவரித்தன. இந்த சமன்பாடுகள் ஒளியின் வேகத்தில் பயணிக்கும் மின்காந்த அலைகளின் இருப்பைக் கணித்தன."
                },
                {
                    step: 4,
                    explanation: "State the conclusion of the unification. This proved that light is an electromagnetic wave, thus unifying the three separate fields into a single, elegant theory of electromagnetism. This is a classic example of unification.",
                    explanationTamil: "ஒருங்கிணைப்பின் முடிவைக் கூறவும். இது ஒளி ஒரு மின்காந்த அலை என்பதை நிரூபித்தது, இதனால் மூன்று தனித்தனி துறைகளையும் மின்காந்தவியலின் ஒற்றை, நேர்த்தியான கோட்பாட்டிற்குள் ஒருங்கிணைத்தது. இது ஒருங்கிணைப்பிற்கு ஒரு சிறந்த எடுத்துக்காட்டு."
                }
            ],
            neetHack: "For NEET, remember the names associated with unification: Newton unified terrestrial and celestial mechanics. Maxwell unified electricity, magnetism, and optics. Einstein attempted to unify gravity and electromagnetism.",
            neetHackTamil: "நீட் தேர்வுக்கு, ஒருங்கிணைப்புடன் தொடர்புடைய பெயர்களை நினைவில் கொள்ளுங்கள்: நியூட்டன் பூமி மற்றும் வான் இயக்கவியலை ஒருங்கிணைத்தார். மாக்ஸ்வெல் மின்சாரம், காந்தவியல் மற்றும் ஒளியியலை ஒருங்கிணைத்தார். ஐன்ஸ்டீன் ஈர்ப்பு மற்றும் மின்காந்தவியலை ஒருங்கிணைக்க முயன்றார்.",
            commonPitfall: "Do not confuse unification with reductionism. Unification is about finding a single framework for different phenomena (e.g., electromagnetism). Reductionism is about explaining a system by its parts (e.g., explaining thermodynamics through the kinetic theory of gas molecules).",
            commonPitfallTamil: "ஒருங்கிணைத்தலையும் குறைத்தல்வாதத்தையும் குழப்பிக் கொள்ளாதீர்கள். ஒருங்கிணைத்தல் என்பது வெவ்வேறு நிகழ்வுகளுக்கு ஒரு ஒற்றை கட்டமைப்பைக் கண்டுபிடிப்பது (எ.கா., மின்காந்தவியல்). குறைத்தல்வாதம் என்பது ஒரு அமைப்பை அதன் பாகங்களால் விளக்குவது (எ.கா., வாயு மூலக்கூறுகளின் இயக்கவியல் கோட்பாட்டின் மூலம் வெப்ப இயக்கவியலை விளக்குவது)."
        },
        {
            title: "Conceptual Example 2: Identifying Fundamental Forces",
            difficulty: 'Medium',
            problem: "In the beta decay process (β-சிதைவு), a neutron inside a nucleus converts into a proton and an electron. Which fundamental force is responsible for this phenomenon? Justify your answer.\n\nதமிழ்: β-சிதைவு செயல்பாட்டில், ஒரு உட்கருவில் உள்ள நியூட்ரான் ஒரு புரோட்டான் மற்றும் ஒரு எலக்ட்ரானாக மாறுகிறது. இந்த நிகழ்வுக்கு எந்த அடிப்படை விசை காரணமாகும்? உங்கள் பதிலுக்கான காரணத்தைக் கூறவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the Strong Nuclear Force's role. The strong force binds protons and neutrons together. Since beta decay involves the *transformation* of a neutron, not just its binding, the strong force is not the primary cause.",
                    explanationTamil: "வலுவான அணுக்கரு விசையின் பங்கை பகுப்பாய்வு செய்யுங்கள். வலுவான விசை புரோட்டான்களையும் நியூட்ரான்களையும் பிணைக்கிறது. β-சிதைவு ஒரு நியூட்ரானின் மாற்றத்தை உள்ளடக்கியிருப்பதால், அதன் பிணைப்பை மட்டுமல்ல, வலுவான விசை முதன்மைக் காரணம் அல்ல."
                },
                {
                    step: 2,
                    explanation: "Analyze the Electromagnetic Force's role. The electromagnetic force acts on charged particles. A neutron is neutral, so this force cannot initiate its decay. While it acts on the resulting proton and electron, it doesn't cause the transformation itself.",
                    explanationTamil: "மின்காந்த விசையின் பங்கை பகுப்பாய்வு செய்யுங்கள். மின்காந்த விசை மின்னூட்டத் துகள்கள் மீது செயல்படுகிறது. ஒரு நியூட்ரான் நடுநிலையானது, எனவே இந்த விசை அதன் சிதைவைத் தொடங்க முடியாது. இது விளைந்த புரோட்டான் மற்றும் எலக்ட்ரான் மீது செயல்பட்டாலும், அது மாற்றத்தை ஏற்படுத்தாது."
                },
                {
                    step: 3,
                    explanation: "Analyze the Gravitational Force's role. Gravity is extremely weak at the subatomic scale (10⁻³⁸ relative strength) and is completely negligible in nuclear processes.",
                    explanationTamil: "ஈர்ப்பு விசையின் பங்கை பகுப்பாய்வு செய்யுங்கள். ஈர்ப்பு விசை அணு அளவில் மிகவும் பலவீனமானது (சார்பு வலிமை 10⁻³⁸) மற்றும் அணுக்கரு செயல்பாடுகளில் முற்றிலும் புறக்கணிக்கத்தக்கது."
                },
                {
                    step: 4,
                    explanation: "Conclude with the Weak Nuclear Force. By elimination, the Weak Nuclear Force is responsible. Its defining characteristic is that it can change the 'flavor' of quarks, which is exactly what happens when a neutron (one up quark, two down quarks) changes into a proton (two up quarks, one down quark). This force is the only one of the four that can do this.",
                    explanationTamil: "மெலிந்த அணுக்கரு விசையுடன் முடிக்கவும். நீக்குதல் மூலம், மெலிந்த அணுக்கரு விசையே இதற்குப் பொறுப்பு. குவார்க்குகளின் 'சுவையை' மாற்றும் திறன் அதன் வரையறுக்கும் பண்பு, இதுவே நியூட்ரான் (ஒரு அப் குவார்க், இரண்டு டவுன் குவார்க்குகள்) புரோட்டானாக (இரண்டு அப் குவார்க்குகள், ஒரு டவுன் குவார்க்) மாறும் போது நிகழ்கிறது. நான்கு விசைகளில் இந்த விசையால் மட்டுமே இதைச் செய்ய முடியும்."
                }
            ],
            neetHack: "Remember the key roles: Strong force = Nuclear binding. Electromagnetic = Charged particle interaction. Gravity = Celestial mechanics. Weak force = Radioactive decay (like beta decay). This simple mapping solves most questions on this topic.",
            neetHackTamil: "முக்கிய பங்குகளை நினைவில் கொள்ளுங்கள்: வலுவான விசை = அணுக்கரு பிணைப்பு. மின்காந்த விசை = மின்னூட்டத் துகள்களின் தொடர்பு. ஈர்ப்பு = வான்பொருள் இயக்கவியல். மெலிந்த விசை = கதிரியக்கச் சிதைவு (β-சிதைவு போன்றவை). இந்த எளிய வரைபடம் இந்தப் தலைப்பில் உள்ள பெரும்பாலான கேள்விகளைத் தீர்க்கும்."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'F_G \\propto \\frac{m_1 m_2}{r^2}',
                description: 'Gravitational Force is proportional to the product of masses and inversely proportional to the square of the distance.'
            },
            {
                formula: 'F_E \\propto \\frac{q_1 q_2}{r^2}',
                description: 'Electromagnetic Force is proportional to the product of charges and inversely proportional to the square of the distance.'
            }
        ],
        diagrams: [
             {
                title: 'Hierarchy of Fundamental Forces',
                description: 'A conceptual diagram showing the relative strength of the four fundamental forces.',
                diagram: `
Strong Nuclear Force (10³⁸)
    |
    v
Electromagnetic Force (10³⁶)
    |
    v
Weak Nuclear Force (10²⁵)
    |
    v
Gravitational Force (1)
                `
            }
        ]
    },
    keyTakeaways: [
        "Physics unifies diverse phenomena under a few fundamental laws.",
        "Nature is governed by four fundamental forces: Strong Nuclear, Electromagnetic, Weak Nuclear, and Gravitational.",
        "Energy, linear momentum, angular momentum, and charge are conserved quantities in an isolated system.",
        "The scope of physics ranges from the subatomic (quantum mechanics) to the astronomical (classical mechanics)."
    ],
    mnemonics: [
        { text: "Remember the force hierarchy: 'Strongly Electromagnetic, Weakly Gravitating'.", tamil: "விசை வரிசையை நினைவில் கொள்க: 'வலுவான மின்காந்தம், மெலிந்த ஈர்ப்பு'." },
    ],
    neetTips: [
        { text: "Relative strengths of forces are often asked. Remember the order: Strong > EM > Weak > Gravity.", tamil: "விசைகளின் சார்பு வலிமை அடிக்கடி கேட்கப்படுகிறது. வரிசையை நினைவில் கொள்க: வலுவான > மின்காந்த > மெலிந்த > ஈர்ப்பு." },
        { text: "Conservation laws are powerful tools for solving problems where details of the forces are unknown.", tamil: "விசைகளின் விவரங்கள் தெரியாத கணக்குகளைத் தீர்க்க, பாதுகாப்பு விதிகள் சக்திவாய்ந்த கருவிகளாகும்." },
    ],
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
    assertionReasons: [
        {
            assertion: "Electromagnetic force is a long-range force.",
            reason: "The exchange particle for electromagnetic force is the photon, which is massless.",
            answer: "A",
            explanation: "Both Assertion and Reason are true, and the Reason is the correct explanation. Forces mediated by massless particles (like photons for EM force and gravitons for gravity) have an infinite range."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Macroscopic Physics", "(b) Microscopic Physics", "(c) Strong Nuclear Force", "(d) Weak Nuclear Force"],
            column2: ["(p) Quantum Mechanics", "(q) Radioactivity (β-decay)", "(r) Binds nucleus", "(s) Classical Mechanics"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Macroscopic phenomena are explained by Classical Mechanics, while microscopic phenomena require Quantum Mechanics. The Strong force binds the nucleus, and the Weak force is responsible for processes like beta decay."
        }
    ]
};
