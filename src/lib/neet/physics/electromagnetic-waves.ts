
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
        },
        {
            title: "NEET Level: Identifying EM Waves",
            titleTamil: "நீட் நிலை: மின்காந்த அலைகளை அடையாளம் காணுதல்",
            difficulty: 'Easy',
            problem: "An electromagnetic wave has a wavelength of 10⁻³ m. To which part of the electromagnetic spectrum does it belong?",
            problemTamil: "ஒரு மின்காந்த அலையின் அலைநீளம் 10⁻³ மீ ஆகும். இது மின்காந்த நிறமாலையின் எந்தப் பகுதிக்குச் சொந்தமானது?",
            solutionSteps: [
                { step: 1, explanation: "Recall the approximate wavelength ranges for different parts of the EM spectrum.", explanationTamil: "மின்காந்த நிறமாலையின் வெவ்வேறு பகுதிகளுக்கான தோராயமான அலைநீள வரம்புகளை நினைவுகூர்க." },
                { step: 2, explanation: "Radio waves have wavelengths > 0.1 m. Microwaves range from 0.1 m to 1 mm (10⁻³ m). Infrared ranges from 1 mm to 700 nm.", explanationTamil: "ரேடியோ அலைகள் > 0.1 மீ. நுண்ணலைகள் 0.1 மீ முதல் 1 மிமீ (10⁻³ மீ) வரை. அகச்சிவப்பு 1 மிமீ முதல் 700 nm வரை." },
                { step: 3, explanation: "The given wavelength of 10⁻³ m (which is 1 mm) falls in the microwave region.", explanationTamil: "கொடுக்கப்பட்ட அலைநீளம் 10⁻³ மீ (1 மிமீ) நுண்ணலைப் பகுதியில் விழுகிறது." }
            ],
            neetHack: "Memorize key boundary wavelengths: 1mm (Micro-IR), 700nm (IR-Visible Red), 400nm (Visible Violet-UV).",
            commonPitfall: "Confusing the order of the spectrum with respect to wavelength and frequency. Wavelength increases from Gamma to Radio, while frequency decreases."
        },
        {
            title: "JEE Level: Energy Density",
            titleTamil: "ஜே.இ.இ நிலை: ஆற்றல் அடர்த்தி",
            difficulty: "Medium",
            problem: "An electromagnetic wave has an electric field amplitude of 120 V/m and a frequency of 50 MHz. Find the average energy density of the magnetic field.",
            problemTamil: "ஒரு மின்காந்த அலையின் மின்புல வீச்சு 120 V/m மற்றும் அதிர்வெண் 50 MHz ஆகும். காந்தப்புலத்தின் சராசரி ஆற்றல் அடர்த்தியைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "In an electromagnetic wave, the energy is shared equally between the electric and magnetic fields. So, the average magnetic energy density (u_B) is equal to the average electric energy density (u_E).", explanationTamil: "ஒரு மின்காந்த அலையில், ஆற்றல் மின் மற்றும் காந்தப்புலங்களுக்கு இடையில் சமமாகப் பகிரப்படுகிறது. எனவே, சராசரி காந்த ஆற்றல் அடர்த்தி (u_B) சராசரி மின் ஆற்றல் அடர்த்திக்கு (u_E) சமம்." },
                { step: 2, explanation: "The average electric energy density is given by u_E = (1/4)ε₀E₀², where E₀ is the amplitude of the electric field.", calculation: "u_E = \\frac{1}{4} \\epsilon_0 E_0^2" },
                { step: 3, explanation: "Substitute the given values. ε₀ ≈ 8.85 × 10⁻¹² C²/(N·m²).", calculation: "u_B = u_E = \\frac{1}{4} (8.85 \\times 10^{-12}) (120)^2" },
                { step: 4, explanation: "Calculate the final value.", calculation: "u_B = \\frac{1}{4} (8.85 \\times 10^{-12}) (14400) \\approx 3.18 \\times 10^{-8} J/m³" }
            ],
            neetHack: "The total average energy density is u = (1/2)ε₀E₀². The magnetic part is half of this, so u_B = (1/4)ε₀E₀².",
            commonPitfall: "Forgetting the factor of 1/2 or 1/4 in the energy density formulas. The instantaneous energy density is (1/2)ε₀E², but the average over a cycle is (1/4)ε₀E₀²."
        },
        {
            title: "NEET Level: Poynting Vector",
            titleTamil: "நீட் நிலை: பாயிண்டிங் வெக்டர்",
            difficulty: "Easy",
            problem: "An electromagnetic wave is propagating along the positive z-axis. The electric field is along the positive x-axis. What is the direction of the magnetic field?",
            problemTamil: "ஒரு மின்காந்த அலை நேர் z-அச்சு வழியே பரவுகிறது. மின்புலம் நேர் x-அச்சு வழியே உள்ளது. காந்தப்புலத்தின் திசை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The direction of propagation of an EM wave is given by the direction of the Poynting vector, S, which is proportional to E x B.", explanationTamil: "மின்காந்த அலை பரவும் திசை பாயிண்டிங் வெக்டர் S-இன் திசையால் கொடுக்கப்படுகிறது, இது E x B க்கு விகிதாசாரமாகும்." },
                { step: 2, explanation: "We are given that the direction of propagation is +z (k̂) and the direction of the electric field is +x (î).", calculation: "\\vec{v} \\text{ is in } \\hat{k} \\text{ direction} \\\\ \\vec{E} \\text{ is in } \\hat{i} \\text{ direction}" },
                { step: 3, explanation: "We need to find the direction of B (let's say b̂) such that E x B is in the direction of propagation. So, î x b̂ = k̂.", explanationTamil: "E x B பரவும் திசையில் இருக்கும்படி B-இன் திசையைக் (b̂) கண்டுபிடிக்க வேண்டும். எனவே, î x b̂ = k̂." },
                { step: 4, explanation: "From the properties of vector cross products, we know that î x ĵ = k̂.", explanationTamil: "வெக்டர் குறுக்குப் பெருக்கத்தின் பண்புகளிலிருந்து, î x ĵ = k̂ என நாம் அறிவோம்." },
                { step: 5, explanation: "Therefore, the magnetic field must be along the positive y-axis (ĵ).", explanationTamil: "எனவே, காந்தப்புலம் நேர் y-அச்சு (ĵ) வழியே இருக்க வேண்டும்." }
            ],
            neetHack: "Use the right-hand rule. Point your fingers in the direction of E (+x), and curl them towards B. Your thumb must point in the direction of propagation (+z). This only works if your fingers curl towards the +y direction.",
            commonPitfall: "Making an error in the vector cross product rules (e.g., ĵ x î = -k̂)."
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
        { question: "The ozone layer absorbs which part of the electromagnetic spectrum?", options: ["A. Infrared", "B. Microwaves", "C. X-rays", "D. Ultraviolet"], answer: "D. Ultraviolet", explanation: "The ozone layer in the stratosphere is crucial for absorbing most of the harmful ultraviolet radiation from the sun.", neetFrequency: 2 },
        { question: "Which waves are used in radar systems?", options: ["A. Radio waves", "B. Microwaves", "C. Infrared waves", "D. Ultraviolet waves"], answer: "B. Microwaves", explanation: "Microwaves are used for radar because of their short wavelength, which allows them to detect small objects.", neetFrequency: 3 },
        { question: "The Maxwell's equation ∮ E⋅dA = Q/ε₀ is based on:", options: ["A. Ampere's law", "B. Faraday's law", "C. Gauss's law for magnetism", "D. Gauss's law for electricity"], answer: "D. Gauss's law for electricity", explanation: "This is the integral form of Gauss's law for electricity.", neetFrequency: 2 },
        { question: "The dimension of (1/μ₀ε₀) is:", options: ["A. [L T⁻¹]", "B. [L² T⁻²]", "C. [L⁻² T²]", "D. [L T]"], answer: "B. [L² T⁻²]", explanation: "The speed of light c = 1/√(μ₀ε₀). So, 1/(μ₀ε₀) = c². The dimensions of c² are (LT⁻¹)² = L²T⁻².", neetFrequency: 3 },
        { question: "Which of the following have the same wavelength?", options: ["A. X-rays and Gamma rays", "B. Infrared and Ultraviolet rays", "C. Microwaves and Radio waves", "D. None of the above"], answer: "D. None of the above", explanation: "All parts of the electromagnetic spectrum have distinct, although sometimes overlapping, wavelength ranges. No two named regions are identical.", neetFrequency: 1 },
        { question: "The source of displacement current is:", options: ["A. Flow of charge", "B. Changing magnetic field", "C. Changing electric field", "D. Accelerated protons"], answer: "C. Changing electric field", explanation: "Displacement current I_d = ε₀(dΦ_E/dt) is produced by a time-varying electric flux.", neetFrequency: 4 },
        { question: "The energy of a photon of an EM wave is of the order of 15 keV. To which part of the spectrum does it belong?", options: ["A. X-rays", "B. Infrared", "C. Ultraviolet", "D. Gamma rays"], answer: "A. X-rays", explanation: "Photon energies in the range of keV correspond to the X-ray part of the spectrum.", neetFrequency: 3 },
        { question: "The nature of electromagnetic waves is:", options: ["A. Longitudinal", "B. Transverse", "C. Both A and B", "D. Neither A nor B"], answer: "B. Transverse", explanation: "The electric and magnetic fields oscillate perpendicular to the direction of wave propagation.", neetFrequency: 2 },
        { question: "Which radiation is used in the treatment of cancer?", options: ["A. Infrared", "B. Gamma rays", "C. Microwaves", "D. Radio waves"], answer: "B. Gamma rays", explanation: "High-energy gamma rays are used in radiotherapy to destroy cancerous cells.", neetFrequency: 2 },
        { question: "The Maxwell's equation ∮ B⋅dl = μ₀I is a statement of:", options: ["A. Faraday's Law", "B. Ampere's Law (uncorrected)", "C. Gauss's Law", "D. Biot-Savart Law"], answer: "B. Ampere's Law (uncorrected)", explanation: "This is the original form of Ampere's law before Maxwell added the displacement current term.", neetFrequency: 1 },
        { question: "An EM wave travels in vacuum along the z-direction: E = (E₁î + E₂ĵ) cos(kz - ωt). The wave is:", options: ["A. Linearly polarized", "B. Circularly polarized", "C. Elliptically polarized", "D. Unpolarized"], answer: "A. Linearly polarized", explanation: "Since E₁ and E₂ are constants, the tip of the E vector oscillates along a straight line in the x-y plane. If E₁=E₂ and there was a π/2 phase difference, it would be circularly polarized.", neetFrequency: 2 },
        { question: "The quantity E/B has the dimensions of:", options: ["A. Speed", "B. Force", "C. Energy", "D. Acceleration"], answer: "A. Speed", explanation: "For an EM wave, E = cB, so E/B = c, which is speed.", neetFrequency: 3 },
        { question: "Which of the following is used to study crystal structure?", options: ["A. Ultraviolet rays", "B. Infrared rays", "C. X-rays", "D. Microwaves"], answer: "C. X-rays", explanation: "X-ray diffraction is a standard technique used to determine the atomic and molecular structure of a crystal, as their wavelengths are comparable to interatomic distances.", neetFrequency: 3 },
        { question: "A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, E = 6.3 ĵ V/m. What is B at this point?", options: ["A. 2.1 x 10⁻⁸ k̂ T", "B. 2.1 x 10⁻⁸ ĵ T", "C. 3.1 x 10⁻⁸ î T", "D. 3.1 x 10⁻⁸ k̂ T"], answer: "A. 2.1 x 10⁻⁸ k̂ T", explanation: "Magnitude B = E/c = 6.3 / (3x10⁸) = 2.1 x 10⁻⁸ T. Direction of propagation is î. Direction of E is ĵ. Since E x B must be in the direction of propagation, î x k̂ = -ĵ, ĵ x î = -k̂, so ĵ x k̂ = î. This means B must be in the k̂ direction.", neetFrequency: 4 },
        { question: "Which of the following statements about EM waves is false?", options: ["A. They carry energy", "B. They carry momentum", "C. They require a medium to travel", "D. They are transverse waves"], answer: "C. They require a medium to travel", explanation: "Electromagnetic waves are unique in that they do not require a material medium for propagation and can travel through a vacuum.", neetFrequency: 2 },
        { question: "The phenomenon which proves that light waves are transverse is:", options: ["A. Interference", "B. Diffraction", "C. Polarization", "D. Reflection"], answer: "C. Polarization", explanation: "Polarization involves restricting the plane of oscillation. This is only possible for transverse waves, where oscillations are perpendicular to the direction of propagation. Longitudinal waves cannot be polarized.", neetFrequency: 5 }
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
        { column1: ["(a) Speed of EM wave", "(b) Energy of photon", "(c) Displacement current", "(d) Poynting vector"], column2: ["(p) E = hν", "(q) S = (1/μ₀)(E x B)", "(r) c = 1/√(μ₀ε₀)", "(s) I_d = ε₀(dΦ_E/dt)"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching the concepts with their corresponding formulas.", neetFrequency: 3 },
        { column1: ["(a) Hertz", "(b) Maxwell", "(c) Faraday", "(d) Newton"], column2: ["(p) Law of Gravitation", "(q) Law of Induction", "(r) Displacement Current", "(s) Production of EM waves"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching scientists with their key discoveries related to EM waves.", neetFrequency: 2 },
        { column1: ["(a) Visible Light", "(b) Ultraviolet", "(c) Infrared", "(d) Gamma Rays"], column2: ["(p) Sunburn", "(q) Night vision", "(r) Photosynthesis", "(s) Radiotherapy"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching types of radiation with their biological or technological effects.", neetFrequency: 3 }
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
    ],
    studentTip: {
        english: "Focus on memorizing the order of the EM spectrum. Many questions are based on simply knowing whether X-rays have more energy than microwaves.",
        tamil: "மின்காந்த நிறமாலையின் வரிசையை மனப்பாடம் செய்வதில் கவனம் செலுத்துங்கள். நுண்ணலைகளை விட எக்ஸ்-கதிர்களுக்கு அதிக ஆற்றல் உள்ளதா என்பதை அறிவதை அடிப்படையாகக் கொண்டு பல கேள்விகள் கேட்கப்படுகின்றன."
    },
    peerDiscussion: {
        english: "Discuss why mobile phones use microwaves while TV remotes use infrared. What are the advantages of each for their specific application?",
        tamil: "மொபைல் போன்கள் ஏன் நுண்ணலைகளையும், டிவி ரிமோட்டுகள் அகச்சிவப்புக் கதிர்களையும் பயன்படுத்துகின்றன என்று விவாதிக்கவும். அவற்றின் குறிப்பிட்ட பயன்பாட்டிற்கு ஒவ்வொன்றின் நன்மைகள் என்ன?"
    },
    nextChapter: {
        title: "Ray Optics and Optical Instruments",
        titleTamil: "கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்"
    },
    validationReport: []
};
