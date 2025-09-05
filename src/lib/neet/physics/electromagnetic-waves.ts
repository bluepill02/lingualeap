
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
    conceptNotes: [
        {
            english: `### 1. Displacement Current (இடப்பெயர்ச்சி மின்னோட்டம்)
Maxwell pointed out an inconsistency in Ampere's Circuital Law. He suggested that not only a conduction current but also a changing electric field (or electric flux) gives rise to a magnetic field. This led to the concept of displacement current.
*   **Displacement Current ($I_d$):** It is the current that comes into play in the region where the electric field and electric flux are changing with time.
$$ I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} $$
*   **Modified Ampere's Law (Ampere-Maxwell Law):**
$$ \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_C + I_d) = \\mu_0 (I_C + \\epsilon_0 \\frac{d\\Phi_E}{dt}) $$
This law is now consistent and forms one of the four Maxwell's equations.`,
            tamil: `### 1. இடப்பெயர்ச்சி மின்னோட்டம்
ஆம்பியரின் சுற்று விதியில் ஒரு முரண்பாட்டை மாக்ஸ்வெல் சுட்டிக்காட்டினார். கடத்தல் மின்னோட்டம் மட்டுமல்லாமல், மாறும் மின்புலமும் (அல்லது மின்பாயம்) ஒரு காந்தப்புலத்தை உருவாக்கும் என்று அவர் கூறினார். இது இடப்பெயர்ச்சி மின்னோட்டம் என்ற கருத்துக்கு வழிவகுத்தது.
*   **இடப்பெயர்ச்சி மின்னோட்டம் ($I_d$):** மின்புலம் மற்றும் மின்பாயம் நேரத்தைப் பொறுத்து மாறும் பகுதியில் இது செயல்படுகிறது.
$$ I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} $$
*   **மாற்றியமைக்கப்பட்ட ஆம்பியர் விதி (ஆம்பியர்-மாக்ஸ்வெல் விதி):**
$$ \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_C + I_d) = \\mu_0 (I_C + \\epsilon_0 \\frac{d\\Phi_E}{dt}) $$`
        },
        {
            english: `### 2. Properties of Electromagnetic Waves (மின்காந்த அலைகளின் பண்புகள்)
1.  EM waves are produced by accelerated charges and do not require any material medium for their propagation.
2.  They are transverse in nature, meaning the electric field ($\\vec{E}$) and magnetic field ($\\vec{B}$) vectors are perpendicular to each other and also perpendicular to the direction of wave propagation ($\\vec{v}$). The vectors $\\vec{E}$, $\\vec{B}$, and $\\vec{v}$ form a right-handed system.
3.  They travel in free space with the speed of light, $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}$.
4.  The magnitudes of electric and magnetic fields are related by $E = cB$.
5.  EM waves carry energy and momentum. The energy is shared equally between the electric and magnetic fields.
6.  They are not deflected by electric or magnetic fields.
7.  They exhibit properties like interference, diffraction, and polarization.`,
            tamil: `### 2. மின்காந்த அலைகளின் பண்புகள்
1.  மின்காந்த அலைகள் முடுக்கப்பட்ட மின்துகள்களால் உருவாக்கப்படுகின்றன, அவற்றின் பரவலுக்கு எந்த ஊடகமும் தேவையில்லை.
2.  அவை குறுக்கலைத் தன்மை கொண்டவை, அதாவது மின்புலம் ($\\vec{E}$) மற்றும் காந்தப்புலம் ($\\vec{B}$) வெக்டர்கள் ஒன்றுக்கொன்று செங்குத்தாகவும், அலை பரவும் திசைக்கும் ($\\vec{v}$) செங்குத்தாகவும் இருக்கும்.
3.  அவை வெற்றிடத்தில் ஒளியின் வேகத்தில் பயணிக்கின்றன, $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}$.
4.  மின் மற்றும் காந்தப்புலங்களின் எண்மதிப்புகள் $E = cB$ என்ற தொடர்பால் இணைக்கப்பட்டுள்ளன.
5.  மின்காந்த அலைகள் ஆற்றலையும் உந்தத்தையும் கொண்டு செல்கின்றன. ஆற்றல் மின் மற்றும் காந்தப்புலங்களுக்கு இடையில் சமமாகப் பகிரப்படுகிறது.
6.  அவை மின் மற்றும் காந்தப்புலங்களால் விலக்கப்படுவதில்லை.
7.  அவை குறுக்கீட்டு விளைவு, விளிம்பு விளைவு, மற்றும் தளவிளைவு போன்ற பண்புகளை வெளிப்படுத்துகின்றன.`
        },
        {
            english: `### 3. Electromagnetic Spectrum (மின்காந்த நிறமாலை)
The orderly arrangement of EM waves according to their wavelength or frequency. In order of increasing wavelength (and decreasing frequency/energy):
*   **Gamma Rays (காமா கதிர்கள்):** Produced in nuclear reactions. Used in radiotherapy.
*   **X-Rays (எக்ஸ்-கதிர்கள்):** Produced by striking a metal target with high-energy electrons. Used in medical diagnostics.
*   **Ultraviolet (UV) Rays (புற ஊதாக் கதிர்கள்):** From the sun, arc lamps. Used for sterilization, detecting forged documents.
*   **Visible Light (கண்ணுறு ஒளி):** The part we can see (VIBGYOR).
*   **Infrared (IR) Waves (அகச்சிவப்புக் கதிர்கள்):** Radiated by hot bodies. Used in thermal imaging, remote controls.
*   **Microwaves (நுண்ணலைகள்):** Produced by special vacuum tubes (klystrons, magnetrons). Used in radar, microwave ovens, and mobile communication.
*   **Radio Waves (ரேடியோ அலைகள்):** Produced by oscillating electronic circuits. Used in radio and television communication systems.`,
            tamil: `### 3. மின்காந்த நிறமாலை
அலைநீளம் அல்லது அதிர்வெண்ணைப் பொறுத்து மின்காந்த அலைகளின் வரிசைப்படுத்தப்பட்ட அமைப்பு. அலைநீளம் அதிகரிக்கும் வரிசையில் (மற்றும் அதிர்வெண்/ஆற்றல் குறையும் வரிசையில்):
*   **காமா கதிர்கள்:** அணுக்கரு வினைகளில் உற்பத்தி செய்யப்படுகின்றன. கதிரியக்க சிகிச்சையில் பயன்படுத்தப்படுகின்றன.
*   **எக்ஸ்-கதிர்கள்:** உயர் ஆற்றல் எலக்ட்ரான்களால் ஒரு உலோக இலக்கைத் தாக்குவதன் மூலம் உற்பத்தி செய்யப்படுகின்றன. மருத்துவ நோயறிதலில் பயன்படுத்தப்படுகின்றன.
*   **புற ஊதாக் கதிர்கள்:** சூரியன், வில் விளக்குகளிலிருந்து. கிருமி நீக்கம், போலி ஆவணங்களைக் கண்டறியப் பயன்படுகின்றன.
*   **கண்ணுறு ஒளி:** நாம் காணக்கூடிய பகுதி (VIBGYOR).
*   **அகச்சிவப்புக் கதிர்கள்:** சூடான பொருட்களால் கதிர்வீசப்படுகின்றன. வெப்பப் படமெடுத்தல், ரிமோட் கண்ட்ரோல்களில் பயன்படுத்தப்படுகின்றன.
*   **நுண்ணலைகள்:** சிறப்பு வெற்றிடக் குழாய்களால் (கிளைஸ்ட்ரான்கள், மேக்னட்ரான்கள்) உற்பத்தி செய்யப்படுகின்றன. ராடார், மைக்ரோவேவ் அடுப்புகள் மற்றும் மொபைல் தகவல்தொடர்புகளில் பயன்படுத்தப்படுகின்றன.
*   **ரேடியோ அலைகள்:** அலைவுறும் மின்னணு சுற்றுகளால் உற்பத்தி செய்யப்படுகின்றன. ரேடியோ மற்றும் தொலைக்காட்சி தகவல்தொடர்பு அமைப்புகளில் பயன்படுத்தப்படுகின்றன.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Relation between E and B",
            titleTamil: "நீட் நிலை: E மற்றும் B க்கு இடையேயான தொடர்பு",
            difficulty: 'Easy',
            problem: "The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part of the wave?",
            problemTamil: "வெற்றிடத்தில் ஒரு சீரிசை மின்காந்த அலையின் காந்தப்புலப் பகுதியின் வீச்சு B₀ = 510 nT ஆகும். அலையின் மின்புலப் பகுதியின் வீச்சு என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Recall the relationship between the amplitudes of the electric (E₀) and magnetic (B₀) fields of an electromagnetic wave in vacuum.", calculation: "E₀ = c B₀" },
                { step: 2, explanation: "Identify the given values. Speed of light c = 3 x 10⁸ m/s. Magnetic field amplitude B₀ = 510 nT = 510 x 10⁻⁹ T.", explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை அடையாளம் காணவும்." },
                { step: 3, explanation: "Substitute the values into the formula and calculate E₀.", calculation: "E₀ = (3 × 10⁸ m/s) × (510 × 10⁻⁹ T) = 1530 × 10⁻¹ V/m = 153 V/m" }
            ],
            neetHack: "This is a direct formula application. The electric field amplitude is always much larger than the magnetic field amplitude by a factor of 'c'.",
            commonPitfall: "Using B₀ = cE₀ instead of E₀ = cB₀. Remember that E is the 'bigger' value."
        },
        {
            title: "JEE Level: Displacement Current",
            titleTamil: "ஜே.இ.இ நிலை: இடப்பெயர்ச்சி மின்னோட்டம்",
            difficulty: 'Medium',
            problem: "A parallel plate capacitor with circular plates of radius 1 m has a capacitance of 1 nF. At t=0, it is connected for charging in series with a resistor R = 1 MΩ across a 2V battery. Calculate the magnetic field at a point P, halfway between the center and the periphery of the plates, after t = 10⁻³ s.",
            problemTamil: "1 மீ ஆரம் கொண்ட வட்டத் தட்டுகளைக் கொண்ட ஒரு இணைத்தட்டு மின்தேக்கி 1 nF மின்தேக்குத்திறனைக் கொண்டுள்ளது. t=0 இல், அது 2V மின்கலத்துடன் R = 1 MΩ மின்தடையுடன் தொடரிணைப்பில் மின்னேற்றத்திற்காக இணைக்கப்படுகிறது. t = 10⁻³ வினாடிகளுக்குப் பிறகு, தட்டுகளின் மையம் மற்றும் விளிம்பிற்கு இடையில் பாதியளவு தொலைவில் உள்ள P என்ற புள்ளியில் காந்தப்புலத்தைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "The charging of a capacitor in an RC circuit is given by q(t) = q₀(1 - e^(-t/τ)), where τ = RC is the time constant.", calculation: "τ = (1 × 10⁶ Ω) × (1 × 10⁻⁹ F) = 10⁻³ s" },
                { step: 2, explanation: "The current in the circuit is I(t) = dq/dt = (q₀/τ)e^(-t/τ). The initial current I₀ = V/R = 2V / 1MΩ = 2μA. So, I(t) = I₀e^(-t/τ).", explanationTamil: "சுற்றிலுள்ள மின்னோட்டம் I(t) = dq/dt ஆகும்." },
                { step: 3, explanation: "At t = 10⁻³ s = τ, the current is I = I₀e⁻¹ = 2e⁻¹ μA. This is the displacement current I_d.", explanationTamil: "t = 10⁻³ வி = τ இல், மின்னோட்டம் I = I₀e⁻¹ ஆகும். இதுவே இடப்பெயர்ச்சி மின்னோட்டம் I_d ஆகும்." },
                { step: 4, explanation: "Apply the Ampere-Maxwell law to a loop of radius r = 0.5 m. ∮B⋅dl = μ₀(I_d_enclosed). The electric field is uniform, so the enclosed displacement current is proportional to the area.", calculation: "I_{d,enclosed} = I_d (πr² / πR²) = I_d (r²/R²) = (2e⁻¹ μA)(0.5²/1²) = 0.5e⁻¹ μA" },
                { step: 5, explanation: "Solve for B. B(2πr) = μ₀I_{d,enclosed}", calculation: "B = \\frac{\\mu_0 I_{d,enclosed}}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7}) \\times (0.5e^{-1} \\times 10^{-6})}{2\\pi \\times 0.5} \\approx 0.74 \\times 10^{-13} T" }
            ],
            neetHack: "For points inside the capacitor plates, the magnetic field is B = (μ₀Ir)/(2πR²), which shows B is proportional to r. This is different from the field outside a wire (B ∝ 1/r).",
            commonPitfall: "Forgetting that the displacement current enclosed by the Amperian loop is only a fraction of the total displacement current."
        }
    ],
    mcqs: [
        { question: "Electromagnetic waves are produced by:", options: ["A. A stationary charge", "B. A charge moving with uniform velocity", "C. An accelerated charge", "D. A charge in a uniform magnetic field"], answer: "C. An accelerated charge", explanation: "Only accelerated charges can radiate electromagnetic waves. Stationary charges create E-fields, and charges in uniform motion create B-fields, but they don't radiate.", neetFrequency: 4 },
        { question: "Which of the following has the shortest wavelength?", options: ["A. Microwaves", "B. X-rays", "C. Ultraviolet rays", "D. Gamma rays"], answer: "D. Gamma rays", explanation: "In the EM spectrum, gamma rays have the highest frequency and energy, and therefore the shortest wavelength.", neetFrequency: 5 },
        { question: "The direction of propagation of an electromagnetic wave is given by:", options: ["A. E ⋅ B", "B. E x B", "C. B x E", "D. E"], answer: "B. E x B", explanation: "The direction of wave propagation is given by the cross product E x B, following the right-hand rule.", neetFrequency: 3 },
        { question: "The speed of electromagnetic waves in a medium of permeability μ and permittivity ε is:", options: ["A. 1/√(με)", "B. √(μ/ε)", "C. √(ε/μ)", "D. με"], answer: "A. 1/√(με)", explanation: "The speed of light in vacuum is c = 1/√(μ₀ε₀). In a medium, this becomes v = 1/√(με).", neetFrequency: 4 },
        { question: "The concept of displacement current was introduced by:", options: ["A. Faraday", "B. Ampere", "C. Maxwell", "D. Hertz"], answer: "C. Maxwell", explanation: "James Clerk Maxwell introduced the concept of displacement current to make Ampere's law consistent for time-varying fields.", neetFrequency: 2 },
        { question: "Infrared radiation is used in:", options: ["A. Microwave ovens", "B. TV remote controls", "C. Water purification", "D. Medical diagnostics"], answer: "B. TV remote controls", explanation: "Infrared LEDs are used in remote controls to transmit signals.", neetFrequency: 3 },
        { question: "In an electromagnetic wave, the ratio of the amplitude of the electric field to the magnetic field is:", options: ["A. c", "B. 1/c", "C. c²", "D. 1"], answer: "A. c", explanation: "The relationship is E = cB, so the ratio E/B = c (the speed of light).", neetFrequency: 5 },
        { question: "Which of the following is NOT an electromagnetic wave?", options: ["A. Cosmic rays", "B. Gamma rays", "C. Beta rays", "D. X-rays"], answer: "C. Beta rays", explanation: "Beta rays are high-energy electrons or positrons, which are particles. The others are all forms of electromagnetic radiation.", neetFrequency: 4 },
        { question: "The energy of an electromagnetic wave is shared equally between:", options: ["A. Electric and gravitational fields", "B. Magnetic and gravitational fields", "C. Electric and magnetic fields", "D. The wave and the medium"], answer: "C. Electric and magnetic fields", explanation: "The energy density of the electric field (1/2 ε₀E²) is equal to the energy density of the magnetic field (B²/2μ₀) in an EM wave.", neetFrequency: 3 },
        { question: "The ozone layer absorbs which part of the electromagnetic spectrum?", options: ["A. Infrared", "B. Microwaves", "C. X-rays", "D. Ultraviolet"], answer: "D. Ultraviolet", explanation: "The ozone layer in the stratosphere is crucial for absorbing most of the harmful ultraviolet radiation from the sun.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "Electromagnetic waves are transverse in nature.", reason: "The electric and magnetic fields are perpendicular to each other and to the direction of wave propagation.", answer: "A", explanation: "The reason is the definition of a transverse wave and correctly explains the assertion." , neetFrequency: 4},
        { assertion: "The displacement current is not a real current.", reason: "It does not involve the flow of charge.", answer: "A", explanation: "The assertion is true in the sense that it's not a conduction current. The reason correctly explains why; it's a current that arises from a changing electric field, not the movement of electrons.", neetFrequency: 2 },
        { assertion: "X-rays have a higher frequency than radio waves.", reason: "X-rays travel faster than radio waves in vacuum.", answer: "C", explanation: "The assertion is true. The reason is false; all electromagnetic waves travel at the same speed (c) in a vacuum.", neetFrequency: 3 },
        { assertion: "Electromagnetic waves can be polarized.", reason: "Light is an electromagnetic wave.", answer: "B", explanation: "Both statements are true. EM waves can be polarized because they are transverse. Light is an example of an EM wave. However, the reason doesn't explain the assertion; the transverse nature is the explanation.", neetFrequency: 3 },
        { assertion: "Microwave ovens work on the principle of resonance.", reason: "The frequency of the microwaves is matched with the resonant frequency of water molecules.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. The microwaves cause the water molecules in food to vibrate vigorously, generating heat.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Radio waves", "(b) Microwaves", "(c) X-rays", "(d) Infrared"], column2: ["(p) Medical diagnosis", "(q) TV remote", "(r) Radio broadcast", "(s) Radar systems"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching the type of EM wave with its common application.", neetFrequency: 5 },
        { column1: ["(a) Highest frequency", "(b) Highest wavelength", "(c) Used for sterilization", "(d) Causes greenhouse effect"], column2: ["(p) Infrared", "(q) Ultraviolet", "(r) Gamma rays", "(s) Radio waves"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching properties or uses with the correct part of the EM spectrum.", neetFrequency: 4 },
        { column1: ["(a) Speed of EM wave", "(b) Energy of photon", "(c) Displacement current", "(d) Poynting vector"], column2: ["(p) E = hν", "(q) S = (1/μ₀)(E x B)", "(r) c = 1/√(μ₀ε₀)", "(s) I_d = ε₀(dΦ_E/dt)"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching the concepts with their corresponding formulas.", neetFrequency: 3 }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}", description: "Speed of Light in Vacuum" },
            { formula: "E = cB", description: "Relation between E and B fields" },
            { formula: "I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}", description: "Displacement Current" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "A changing electric field creates a magnetic field, and vice-versa, leading to self-sustaining EM waves.",
        "The entire EM spectrum consists of the same type of wave, differing only in frequency and wavelength.",
        "The direction of propagation, electric field, and magnetic field are mutually perpendicular."
    ],
    mnemonics: [
        { text: "Remember the EM spectrum order: 'Roman Men Invented Very Unusual X-ray Guns' (Radio, Microwaves, Infrared, Visible, UV, X-ray, Gamma).", tamil: "'ரோமன் ஆண்கள் மிகவும் அசாதாரணமான எக்ஸ்ரே துப்பாக்கிகளை கண்டுபிடித்தனர்' (ரேடியோ, நுண்ணலை, அகச்சிவப்பு, கண்ணுறு, புற ஊதா, எக்ஸ்-கதிர், காமா)." }
    ],
    neetTips: [
        { text: "The properties and uses of different parts of the EM spectrum are very frequently asked. Memorize the order and at least one key use for each.", tamil: "மின்காந்த நிறமாலையின் வெவ்வேறு பகுதிகளின் பண்புகள் மற்றும் பயன்கள் அடிக்கடி கேட்கப்படுகின்றன. வரிசை மற்றும் ஒவ்வொன்றிற்கும் ஒரு முக்கிய பயன்பாட்டை மனப்பாடம் செய்யுங்கள்." }
    ]
};
