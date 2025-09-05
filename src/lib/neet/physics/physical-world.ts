
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
            notes: 'This is a foundational chapter. Read it once to get a broad perspective. Focus on understanding the relative strengths and ranges of the fundamental forces.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 1 maps to NEET Physics Unit 1'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. What is Physics?`,
            tamil: `### 1. இயற்பியல் என்றால் என்ன?`
        },
        {
            english: `Physics is the most fundamental of all sciences, aiming to understand the basic laws of nature and their manifestation in various phenomena. It is the study of matter, energy, and their interaction. The core idea is **unification**—explaining diverse physical phenomena with a few concepts and laws—and **reductionism**, which is about deriving the properties of a bigger, more complex system from the properties and interactions of its constituent simpler parts.`,
            tamil: `இயற்பியல் என்பது அனைத்து அறிவியல்களுக்கும் மிகவும் அடிப்படையானது, இயற்கையின் அடிப்படை விதிகள் மற்றும் பல்வேறு நிகழ்வுகளில் அவற்றின் வெளிப்பாட்டைப் புரிந்துகொள்வதை நோக்கமாகக் கொண்டது. இது பருப்பொருள், ஆற்றல் மற்றும் அவற்றின் இடைவினையைப் பற்றிய ஆய்வு ஆகும். இதன் முக்கிய கருத்து **ஒருங்கிணைத்தல்**—பல்வேறு பௌதிக நிகழ்வுகளை சில கருத்துகள் மற்றும் விதிகளுடன் விளக்குவது—மற்றும் **குறைத்தல்வாதம்**, இது ஒரு பெரிய, சிக்கலான அமைப்பின் பண்புகளை அதன் எளிய கூறுகளின் பண்புகள் மற்றும் இடைவினைகளிலிருந்து வருவிப்பதாகும்.`
        },
        {
            english: `### 2. Scope and Excitement of Physics`,
            tamil: `### 2. இயற்பியலின் வீச்சு மற்றும் உற்சாகம்`
        },
        {
            english: `The scope of Physics is vast, covering two main domains:\n*   **Macroscopic:** Includes phenomena at the laboratory, terrestrial, and astronomical scales. This is the realm of **Classical Physics**, which includes Mechanics, Electrodynamics, Optics, and Thermodynamics.\n*   **Microscopic:** Includes phenomena at the atomic, molecular, and nuclear scales. This is the realm of **Quantum Mechanics**.`,
            tamil: `இயற்பியலின் வீச்சு பரந்தது, இரண்டு முக்கிய களங்களை உள்ளடக்கியது:\n*   **பேரியல் (Macroscopic):** ஆய்வகம், பூமி மற்றும் வானியல் மட்டங்களில் உள்ள நிகழ்வுகளை உள்ளடக்கியது. இது **செவ்வியல் இயற்பியலின்** களம், இதில் இயக்கவியல், மின்னியக்கவியல், ஒளியியல் மற்றும் வெப்ப இயக்கவியல் ஆகியவை அடங்கும்.\n*   **நுண்ணியல் (Microscopic):** அணு, மூலக்கூறு மற்றும் அணுக்கரு மட்டங்களில் உள்ள நிகழ்வுகளை உள்ளடக்கியது. இது **குவாண்டம் இயக்கவியலின்** களம் ஆகும்.`
        },
        {
            english: `### 3. The Four Fundamental Forces in Nature`,
            tamil: `### 3. இயற்கையின் நான்கு அடிப்படை விசைகள்`
        },
        {
            english: `All forces in the universe can be traced back to four fundamental forces, ordered here by decreasing strength:`,
            tamil: `பிரபஞ்சத்தில் உள்ள அனைத்து விசைகளையும் நான்கு அடிப்படை விசைகளாகக் காணலாம், அவை வலிமை குறைந்துவரும் வரிசையில் இங்கே பட்டியலிடப்பட்டுள்ளன:`
        },
        {
            english: `
| Force (விசை) | Relative Strength (சார்பு வலிமை) | Range (வீச்சு) | Operates Among (செயல்படும் துகள்கள்) |
| :--- | :--- | :--- | :--- |
| **Strong Nuclear Force (வலுவான அணுக்கரு விசை)** | $10^{38}$ | Short, nuclear size (~$10^{-15}$ m) | Nucleons (protons, neutrons) (நியூக்ளியான்கள்) |
| **Electromagnetic Force (மின்காந்த விசை)** | $10^{36}$ | Infinite (முடிவற்றது) | Charged particles (மின்னூட்டத் துகள்கள்) |
| **Weak Nuclear Force (மெலிந்த அணுக்கரு விசை)** | $10^{25}$ | Very short, sub-nuclear size (~$10^{-16}$ m) | Some elementary particles (சில அடிப்படை துகள்கள்) |
| **Gravitational Force (ஈர்ப்பியல் விசை)** | 1 | Infinite (முடிவற்றது) | All objects in the universe (அனைத்து பொருட்கள்) |`
        },
        {
            english: `### 4. Fundamental Conservation Laws`,
            tamil: `### 4. அடிப்படைப் பாதுகாப்பு விதிகள்`
        },
        {
            english: `In any physical process, certain quantities remain unchanged. These are the pillars upon which physics is built.\n*   **Law of Conservation of Energy (ஆற்றல் பாதுகாப்பு விதி):** Energy can neither be created nor destroyed; it only changes form. The total energy of an isolated system is constant.\n*   **Law of Conservation of Linear Momentum (நேர்கோட்டு உந்தப் பாதுகாப்பு விதி):** If no external force acts on a system, its total linear momentum is constant.\n*   **Law of Conservation of Angular Momentum (கோண உந்தப் பாதுகாப்பு விதி):** If no external torque acts on a system, its total angular momentum is constant.\n*   **Law of Conservation of Charge (மின்னூட்டப் பாதுகாப்பு விதி):** The total electric charge of an isolated system is constant.`,
            tamil: `எந்தவொரு பௌதிக செயல்முறையிலும், சில அளவுகள் மாறாமல் இருக்கும். இவை இயற்பியல் கட்டமைக்கப்பட்ட தூண்கள் ஆகும்.\n*   **ஆற்றல் பாதுகாப்பு விதி:** ஆற்றலை ஆக்கவோ அழிக்கவோ முடியாது; அது ஒரு வடிவத்திலிருந்து மற்றொரு வடிவத்திற்கு மட்டுமே மாறுகிறது. ஒரு தனிமைப்படுத்தப்பட்ட அமைப்பின் மொத்த ஆற்றல் மாறிலியாகும்.\n*   **நேர்கோட்டு உந்தப் பாதுகாப்பு விதி:** ஒரு அமைப்பின் மீது வெளிப்புற விசை எதுவும் செயல்படவில்லை என்றால், அதன் மொத்த நேர்கோட்டு உந்தம் மாறிலியாக இருக்கும்.\n*   **கோண உந்தப் பாதுகாப்பு விதி:** ஒரு அமைப்பின் மீது வெளிப்புற திருப்புவிசை எதுவும் செயல்படவில்லை என்றால், அதன் மொத்த கோண உந்தம் மாறிலியாக இருக்கும்.\n*   **மின்னூட்டப் பாதுகாப்பு விதி:** ஒரு தனிமைப்படுத்தப்பட்ட அமைப்பின் மொத்த மின்னூட்டம் மாறிலியாக இருக்கும்.`
        }
    ],
    workedExamples: [
        {
            title: "Conceptual Example: Unification of Forces",
            titleTamil: "கருத்தியல் உதாரணம்: விசைகளின் ஒருங்கிணைப்பு",
            difficulty: 'Easy',
            problem: "Explain the principle of 'unification' in physics using the example of electromagnetism.",
            problemTamil: "இயற்பியலில் 'ஒருங்கிணைத்தல்' என்ற கொள்கையை மின்காந்தவியல் உதாரணத்தைப் பயன்படுத்தி விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the separate phenomena before unification. Before the 19th century, electricity, magnetism, and light were considered three separate, unrelated phenomena.",
                    explanationTamil: "ஒருங்கிணைப்பிற்கு முன் தனித்தனி நிகழ்வுகளை அடையாளம் காணவும். 19 ஆம் நூற்றாண்டிற்கு முன்பு, மின்சாரம், காந்தவியல் மற்றும் ஒளி ஆகியவை மூன்று தனித்தனி, தொடர்பில்லாத நிகழ்வுகளாகக் கருதப்பட்டன."
                },
                {
                    step: 2,
                    explanation: "Describe the final unified theory. James Clerk Maxwell formulated a set of four equations that described all electric and magnetic phenomena and predicted that light is an electromagnetic wave.",
                    explanationTamil: "இறுதி ஒருங்கிணைந்த கோட்பாட்டை விவரிக்கவும். ஜேம்ஸ் கிளார்க் மாக்ஸ்வெல் நான்கு சமன்பாடுகளை உருவாக்கினார், அவை அனைத்து மின் மற்றும் காந்த நிகழ்வுகளையும் விவரித்தன மற்றும் ஒளி ஒரு மின்காந்த அலை என்று கணித்தன."
                },
                {
                    step: 3,
                    explanation: "State the conclusion. This unified the three separate fields into a single, elegant theory of electromagnetism. This is a classic example of unification.",
                    explanationTamil: "முடிவைக் கூறவும். இது மூன்று தனித்தனி துறைகளையும் மின்காந்தவியலின் ஒற்றை, நேர்த்தியான கோட்பாட்டிற்குள் ஒருங்கிணைத்தது. இது ஒருங்கிணைப்பிற்கு ஒரு சிறந்த எடுத்துக்காட்டு."
                }
            ],
            neetHack: "For NEET, remember the key unifications: Newton (terrestrial and celestial mechanics), Maxwell (electromagnetism and optics), and Einstein (space and time).",
            neetHackTamil: "நீட் தேர்வுக்கு, முக்கிய ஒருங்கிணைப்புகளை நினைவில் கொள்ளுங்கள்: நியூட்டன் (பூமி மற்றும் வான் இயக்கவியல்), மாக்ஸ்வெல் (மின்காந்தவியல் மற்றும் ஒளியியல்), மற்றும் ஐன்ஸ்டீன் (வெளி மற்றும் காலம்)."
        }
    ],
    keyTakeaways: [
        "Physics aims to explain the universe through a minimum number of fundamental laws.",
        "There are four fundamental forces: Strong Nuclear, Electromagnetic, Weak Nuclear, and Gravitational.",
        "The laws of conservation of energy, momentum (linear and angular), and charge are universal.",
        "Physics is broadly divided into classical (macroscopic) and quantum (microscopic) domains."
    ],
    mnemonics: [
        { text: "Remember the force hierarchy: **S**trongly **E**lectromagnetic, **W**eakly **G**ravitating.", tamil: "விசை வரிசையை நினைவில் கொள்க: **வ**லுவான **மி**ன்காந்தம், **மெ**லிந்த **ஈ**ர்ப்பு." }
    ],
    neetTips: [
        { text: "While direct questions are rare, knowing the relative strengths and ranges of fundamental forces is crucial for assertion-reason questions.", tamil: "நேரடி கேள்விகள் அரிதானவை என்றாலும், கூற்று-காரணக் கேள்விகளுக்கு அடிப்படை விசைகளின் சார்பு வலிமைகள் மற்றும் வீச்சுகளை அறிவது முக்கியம்." }
    ],
    mcqs: [
        { question: "Which of the following is the weakest fundamental force in nature?", options: ["A. Electromagnetic Force", "B. Strong Nuclear Force", "C. Weak Nuclear Force", "D. Gravitational Force"], answer: "D. Gravitational Force", explanation: "Gravitational Force is the weakest, with a relative strength of 1, compared to the Strong Nuclear Force's 10³⁸.", neetFrequency: 3 },
        { question: "The study of motion of macroscopic objects falls under:", options: ["A. Quantum Mechanics", "B. Electrodynamics", "C. Classical Mechanics", "D. Optics"], answer: "C. Classical Mechanics", explanation: "Classical Mechanics deals with the motion of macroscopic objects like planets, projectiles, and machinery.", neetFrequency: 2 },
        { question: "Which fundamental force is responsible for holding the nucleus of an atom together?", options: ["A. Gravitational Force", "B. Electromagnetic Force", "C. Strong Nuclear Force", "D. Weak Nuclear Force"], answer: "C. Strong Nuclear Force", explanation: "The Strong Nuclear Force overcomes the electrostatic repulsion between protons to bind the nucleus.", neetFrequency: 4 },
        { question: "The law of conservation of angular momentum is applicable when:", options: ["A. Net external force is zero", "B. Net external torque is zero", "C. Net external pressure is zero", "D. Net external energy is zero"], answer: "B. Net external torque is zero", explanation: "Torque is the rotational analogue of force. Conservation of angular momentum holds when the net external torque is zero.", neetFrequency: 3 },
        { question: "Radioactive beta decay is governed by which fundamental force?", options: ["A. Gravitational Force", "B. Electromagnetic Force", "C. Strong Nuclear Force", "D. Weak Nuclear Force"], answer: "D. Weak Nuclear Force", explanation: "The Weak Nuclear Force is responsible for radioactive decay processes like beta decay.", neetFrequency: 4 },
        { question: "Who unified electricity, magnetism, and optics into a single theory?", options: ["A. Newton", "B. Einstein", "C. Maxwell", "D. Faraday"], answer: "C. Maxwell", explanation: "James Clerk Maxwell's equations unified these three fields into the theory of electromagnetism.", neetFrequency: 2 },
        { question: "Which of the following is NOT a fundamental conserved quantity?", options: ["A. Energy", "B. Charge", "C. Force", "D. Linear Momentum"], answer: "C. Force", explanation: "Force is a derived quantity, not a conserved quantity like energy, charge, or momentum in an isolated system.", neetFrequency: 3 },
        { question: "Which two forces have an infinite range?", options: ["A. Strong and Weak Nuclear", "B. Gravitational and Electromagnetic", "C. Strong Nuclear and Electromagnetic", "D. Weak Nuclear and Gravitational"], answer: "B. Gravitational and Electromagnetic", explanation: "Both gravitational and electromagnetic forces have an infinite range, although their strength decreases with distance.", neetFrequency: 3 },
        { question: "Explaining thermodynamics using the properties of molecules is an example of:", options: ["A. Unification", "B. Reductionism", "C. Hypothesis", "D. Conservation"], answer: "B. Reductionism", explanation: "Reductionism is the approach of explaining a macroscopic system by understanding its microscopic constituents.", neetFrequency: 1 },
        { question: "The relative strength of the Strong Nuclear force to the Electromagnetic force is approximately:", options: ["A. 10²", "B. 10⁻²", "C. 10³⁸", "D. 10³⁶"], answer: "A. 10²", explanation: "The ratio is 10³⁸ / 10³⁶ = 100. The strong force is about 100 times stronger than the electromagnetic force.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "Electromagnetic force is a long-range force.", reason: "The exchange particle for electromagnetic force, the photon, is massless.", answer: "A", explanation: "Both Assertion and Reason are true, and the Reason is the correct explanation. Forces mediated by massless particles have an infinite range." },
        { assertion: "The law of conservation of energy is valid for all physical processes.", reason: "Energy can be converted from one form to another, but the total energy of an isolated system remains constant.", answer: "A", explanation: "The assertion is a fundamental principle. The reason is the correct definition of the law of conservation of energy, thereby explaining the assertion." }
    ],
    matchTheColumns: [
        { column1: ["(a) Macroscopic Physics", "(b) Microscopic Physics", "(c) Strong Nuclear Force", "(d) Weak Nuclear Force"], column2: ["(p) Quantum Mechanics", "(q) Radioactivity", "(r) Binds nucleus", "(s) Classical Mechanics"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching domains and forces with their descriptions." },
        { column1: ["(a) C.V. Raman", "(b) S. Chandrasekhar", "(c) J.C. Bose", "(d) S.N. Bose"], column2: ["(p) Quantum Statistics", "(q) Structure of stars", "(r) Inelastic scattering of light", "(s) Ultra short radio waves"], answer: "a-r, b-q, c-s, d-p", explanation: "Matching Indian physicists with their contributions." }
    ]
};
