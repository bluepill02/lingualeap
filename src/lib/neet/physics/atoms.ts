
import type { NeetModule } from '@/lib/types';

export const atomsModule: NeetModule = {
    id: 'neet-physics-atoms',
    title: 'Physics - Atoms (அணுக்கள்)',
    chapter: 'Atoms',
    subject: 'Physics',
    learningObjectives: [
        "Describe Thomson's and Rutherford's models of the atom and their limitations.",
        "Understand Bohr's model of the hydrogen atom, including its postulates about stationary orbits and quantization of angular momentum.",
        "Derive expressions for the radius, velocity, and energy of an electron in Bohr's model.",
        "Explain the origin of spectral series (Lyman, Balmer, etc.) in the hydrogen spectrum.",
        "Understand the concept of de Broglie's explanation of Bohr's second postulate."
    ],
    prerequisites: [
        "Electrostatics (Coulomb's Law, Potential Energy).",
        "Circular Motion (Centripetal Force).",
        "Basic concepts from Dual Nature of Radiation and Matter."
    ],
    conceptOverview: "This chapter traces the historical development of our understanding of the atom's structure. We begin with early models like Thomson's 'plum pudding' model and Rutherford's nuclear model, which arose from his famous alpha-scattering experiment. While Rutherford's model correctly established the existence of a dense nucleus, it couldn't explain the stability of the atom. Niels Bohr then introduced a revolutionary model for the hydrogen atom, combining classical ideas with new quantum concepts. Bohr's postulates of quantized angular momentum and stationary energy levels successfully explained the hydrogen spectrum, paving the way for the full development of quantum mechanics.",
    tamilConnection: "அணுவைப் பிளந்து ஆற்றலை உருவாக்கும் கல்பாக்கம் அணுமின் நிலையம் முதல், பிரபஞ்சத்தின் ஒவ்வொரு பொருளின் அடிப்படை வரை, அணுவின் அமைப்பு பற்றிய புரிதல் முக்கியமானது. இந்த அத்தியாயம், அணுவின் அமைப்பை விளக்குவதில் ஏற்பட்ட அறிவியல் புரட்சியையும், குறிப்பாக ஹைட்ரஜன் அணுவின் நிறமாலையை வெற்றிகரமாக விளக்கிய நீல்ஸ் போரின் கொள்கைகளையும் விவரிக்கிறது.",
    culturalContext: "The concept of an ultimate, indivisible particle ('paramanu') was discussed by ancient Indian philosophers like Kanada. Modern atomic theory provides a scientific, evidence-based framework for this ancient curiosity, revealing the structure and laws governing these fundamental building blocks of matter.",
    syllabusMapping: [
         {
            topic: 'Atoms & Nuclei',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 8: Atomic and Nuclear Physics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 12: Atoms',
            notes: 'Bohr\'s model is a very high-yield topic for NEET. Questions calculating the radius, energy, and spectral lines for hydrogen and hydrogen-like atoms are extremely common.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 17'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Rutherford's Nuclear Model of Atom (ரூதர்போர்டின் அணுவின் உட்கரு மாதிரி)
Based on the α-particle scattering experiment, Rutherford concluded:
1.  Most of the atom is empty space.
2.  The entire positive charge and most of the mass of the atom are concentrated in a very small region called the **nucleus**.
3.  Electrons revolve around the nucleus in circular orbits, with the centripetal force provided by the electrostatic attraction.

**Limitations:** It could not explain the stability of the atom (an accelerating electron should radiate energy and spiral into the nucleus) and the line spectrum of atoms.`,
            tamil: `### 1. ரூதர்போர்டின் அணுவின் உட்கரு மாதிரி
α-துகள் சிதறல் சோதனையின் அடிப்படையில், ரூதர்போர்டு பின்வரும் முடிவுகளுக்கு வந்தார்:
1. அணுவின் பெரும்பகுதி வெற்றிடமாகும்.
2. அணுவின் முழு நேர் மின்னூட்டமும், பெரும்பான்மையான நிறையும் **அணுக்கரு** எனப்படும் மிகச் சிறிய பகுதியில் செறிவூட்டப்பட்டுள்ளது.
3. எலக்ட்ரான்கள் அணுக்கருவைச் சுற்றி வட்டப் பாதைகளில் சுற்றுகின்றன, தேவையான மையநோக்கு விசை நிலைமின்னியல் ஈர்ப்பு விசையால் வழங்கப்படுகிறது.

**குறைபாடுகள்:** இது அணுவின் நிலைப்புத்தன்மையையும் (முடுக்கப்பட்ட எலக்ட்ரான் ஆற்றலைக் கதிர்வீசி அணுக்கருவில் சுருண்டு விழ வேண்டும்) மற்றும் அணுக்களின் வரி நிறமாலையையும் விளக்க முடியவில்லை.`
        },
        {
            english: `### 2. Bohr's Model for the Hydrogen Atom (ஹைட்ரஜன் அணுவிற்கு போரின் மாதிரி)
Bohr combined classical and early quantum concepts and gave three postulates:
1.  **First Postulate (Stationary Orbits):** An electron can revolve around the nucleus only in certain stable, circular orbits called stationary orbits, without radiating energy.
2.  **Second Postulate (Quantization of Angular Momentum):** The angular momentum (L) of an electron in a stationary orbit is an integral multiple of h/2π.
    $$ L = mvr = n \\frac{h}{2\\pi} $$
    where n = 1, 2, 3, ... is the principal quantum number.
3.  **Third Postulate (Frequency Condition):** An electron might make a transition from a higher energy orbit ($E_i$) to a lower energy orbit ($E_f$). The energy of the emitted photon is equal to the energy difference between the two orbits.
    $$ h\\nu = E_i - E_f $$`,
            tamil: `### 2. ஹைட்ரஜன் அணுவிற்கு போரின் மாதிரி
போர், செவ்வியல் மற்றும் ஆரம்ப குவாண்டம் கருத்துக்களை இணைத்து மூன்று எடுகோள்களைக் கொடுத்தார்:
1. **முதல் எடுகோள் (நிலையான சுற்றுப்பாதைகள்):** ஒரு எலக்ட்ரான் ஆற்றலைக் கதிர்வீசாமல், நிலையான சுற்றுப்பாதைகள் எனப்படும் சில நிலையான, வட்டப் பாதைகளில் மட்டுமே அணுக்கருவைச் சுற்றி வர முடியும்.
2. **இரண்டாம் எடுகோள் (கோண உந்தத்தின் குவாண்டமாக்கல்):** ஒரு நிலையான சுற்றுப்பாதையில் உள்ள ஒரு எலக்ட்ரானின் கோண உந்தம் (L), h/2π இன் முழு எண் மடங்காகும்.
3. **மூன்றாம் எடுகோள் (அதிர்வெண் நிபந்தனை):** ஒரு எலக்ட்ரான் உயர் ஆற்றல் சுற்றுப்பாதையிலிருந்து ($E_i$) குறைந்த ஆற்றல் சுற்றுப்பாதைக்கு ($E_f$) தாவலாம். உமிழப்பட்ட ஃபோட்டானின் ஆற்றல் இரண்டு சுற்றுப்பாதைகளுக்கு இடையிலான ஆற்றல் வேறுபாட்டிற்கு சமம்.`
        },
        {
            english: `### 3. Radii and Energy of Orbits (சுற்றுப்பாதைகளின் ஆரங்கள் மற்றும் ஆற்றல்கள்)
For a hydrogen-like atom with atomic number Z:
*   **Radius of the nth orbit ($r_n$):**
    $$ r_n = \\frac{n^2 h^2 \\epsilon_0}{\\pi m Z e^2} \\propto \\frac{n^2}{Z} $$
    For hydrogen (Z=1), the first Bohr radius is $r_1 \\approx 0.529$ Å.
*   **Velocity of electron in the nth orbit ($v_n$):**
    $$ v_n = \\frac{Z e^2}{2 n h \\epsilon_0} \\propto \\frac{Z}{n} $$
*   **Energy of the nth orbit ($E_n$):**
    $$ E_n = -\\frac{m Z^2 e^4}{8 n^2 h^2 \\epsilon_0^2} = -\\frac{13.6 Z^2}{n^2} \\text{ eV} $$
    The negative sign indicates that the electron is bound to the nucleus. Energy is zero at n=∞.`,
            tamil: `### 3. சுற்றுப்பாதைகளின் ஆரங்கள் மற்றும் ஆற்றல்கள்
அணு எண் Z கொண்ட ஒரு ஹைட்ரஜன் போன்ற அணுவிற்கு:
* **n-வது சுற்றுப்பாதையின் ஆரம் ($r_n$):**
* **n-வது சுற்றுப்பாதையில் எலக்ட்ரானின் திசைவேகம் ($v_n$):**
* **n-வது சுற்றுப்பாதையின் ஆற்றல் ($E_n$):**
எதிர்மறை குறி எலக்ட்ரான் அணுக்கருவுடன் பிணைக்கப்பட்டுள்ளது என்பதைக் குறிக்கிறது. n=∞ இல் ஆற்றல் சுழியாகும்.`
        },
        {
            english: `### 4. Hydrogen Spectrum (ஹைட்ரஜன் நிறமாலை)
When an electron jumps from a higher orbit ($n_i$) to a lower orbit ($n_f$), a spectral line is emitted. The wavelength (λ) is given by the Rydberg formula:
$$ \\frac{1}{\\lambda} = R Z^2 \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right) $$
where R is the Rydberg constant ($R \\approx 1.097 \\times 10^7 \\text{ m}^{-1}$).
Different series are named based on the final orbit $n_f$:
*   **Lyman Series:** $n_f = 1$ (UV region)
*   **Balmer Series:** $n_f = 2$ (Visible region)
*   **Paschen Series:** $n_f = 3$ (Infrared region)
*   **Brackett Series:** $n_f = 4$ (Infrared region)
*   **Pfund Series:** $n_f = 5$ (Infrared region)`,
            tamil: `### 4. ஹைட்ரஜன் நிறமாலை
ஒரு எலக்ட்ரான் உயர் சுற்றுப்பாதையிலிருந்து ($n_i$) குறைந்த சுற்றுப்பாதைக்கு ($n_f$) தாவும்போது, ஒரு நிறமாலை வரி உமிழப்படுகிறது. அலைநீளம் (λ) ரிட்பெர்க் சூத்திரத்தால் கொடுக்கப்படுகிறது:
வெவ்வேறு தொடர்கள் இறுதி சுற்றுப்பாதை $n_f$-ஐப் பொறுத்து பெயரிடப்பட்டுள்ளன:
* **லைமன் தொடர்:** $n_f = 1$ (புற ஊதா பகுதி)
* **பால்மர் தொடர்:** $n_f = 2$ (கண்ணுறு ஒளிப் பகுதி)
* **பாஷன் தொடர்:** $n_f = 3$ (அகச்சிவப்பு பகுதி)
* **பிராக்கெட் தொடர்:** $n_f = 4$ (அகச்சிவப்பு பகுதி)
* **ஃபண்ட் தொடர்:** $n_f = 5$ (அகச்சிவப்பு பகுதி)`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Energy Level Calculation",
            titleTamil: "நீட் நிலை: ஆற்றல் மட்டக் கணக்கீடு",
            difficulty: 'Easy',
            problem: "What is the energy of the electron in the second orbit of a hydrogen atom?",
            problemTamil: "ஹைட்ரஜன் அணுவின் இரண்டாவது சுற்றுப்பாதையில் உள்ள எலக்ட்ரானின் ஆற்றல் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Use the formula for energy of the nth orbit: E_n = -13.6 * Z²/n² eV.", explanationTamil: "n-வது சுற்றுப்பாதையின் ஆற்றலுக்கான சூத்திரத்தைப் பயன்படுத்தவும்: E_n = -13.6 * Z²/n² eV." },
                { step: 2, explanation: "For a hydrogen atom, the atomic number Z = 1. We need to find the energy for the second orbit, so n = 2.", explanationTamil: "ஹைட்ரஜன் அணுவிற்கு, அணு எண் Z = 1. நாம் இரண்டாவது சுற்றுப்பாதைக்கான ஆற்றலைக் கண்டுபிடிக்க வேண்டும், எனவே n = 2." },
                { step: 3, explanation: "Substitute the values into the formula.", calculation: "E₂ = -13.6 * (1²/2²) eV = -13.6 / 4 eV" },
                { step: 4, explanation: "Calculate the final energy.", calculation: "E₂ = -3.4 eV" }
            ],
            neetHack: "It's highly recommended to memorize the energy levels for the first few orbits of hydrogen: E₁=-13.6 eV, E₂=-3.4 eV, E₃=-1.51 eV, E₄=-0.85 eV. This saves a lot of time.",
            neetHackTamil: "ஹைட்ரஜனின் முதல் சில சுற்றுப்பாதைகளுக்கான ஆற்றல் மட்டங்களை மனப்பாடம் செய்வது மிகவும் பரிந்துரைக்கப்படுகிறது: E₁=-13.6 eV, E₂=-3.4 eV, E₃=-1.51 eV, E₄=-0.85 eV. இது நேரத்தை மிச்சப்படுத்தும்."
        },
        {
            title: "JEE Level: Spectral Lines",
            titleTamil: "ஜே.இ.இ நிலை: நிறமாலை வரிகள்",
            difficulty: 'Medium',
            problem: "Find the wavelength of the H-alpha line in the Balmer series of the hydrogen spectrum.",
            problemTamil: "ஹைட்ரஜன் நிறமாலையின் பால்மர் தொடரில் உள்ள H-ஆல்பா வரியின் அலைநீளத்தைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "The Balmer series corresponds to transitions ending at n_f = 2. The H-alpha line is the first line of the series, which corresponds to the smallest energy transition, i.e., from the next higher level, n_i = 3.", explanationTamil: "பால்மர் தொடர் n_f = 2 இல் முடிவடையும் தாவல்களுக்கு ஒத்துள்ளது. H-ஆல்பா வரி என்பது தொடரின் முதல் வரியாகும், இது மிகச்சிறிய ஆற்றல் மாற்றத்திற்கு ஒத்துள்ளது, அதாவது அடுத்த உயர் மட்டத்திலிருந்து, n_i = 3." },
                { step: 2, explanation: "Use the Rydberg formula: 1/λ = R (1/n_f² - 1/n_i²).", calculation: "1/λ = R (1/2² - 1/3²)" },
                { step: 3, explanation: "Simplify the expression.", calculation: "1/λ = R (1/4 - 1/9) = R ((9-4)/36) = 5R/36" },
                { step: 4, explanation: "Solve for λ. Use R ≈ 1.097 x 10⁷ m⁻¹.", calculation: "λ = 36 / (5R) = 36 / (5 * 1.097 × 10⁷) ≈ 6.56 × 10⁻⁷ m = 656 nm" }
            ],
            commonPitfall: "Confusing the initial (n_i) and final (n_f) states. For emission spectra, n_i is always greater than n_f.",
            neetHackTamil: "ஆரம்ப (n_i) மற்றும் இறுதி (n_f) நிலைகளைக் குழப்பிக் கொள்ளுதல். உமிழ்வு நிறமாலைக்கு, n_i எப்போதும் n_f-ஐ விட பெரியது."
        },
        {
            title: "NEET Level: Bohr Radius",
            titleTamil: "நீட் நிலை: போர் ஆரம்",
            difficulty: 'Easy',
            problem: "What is the ratio of the radii of the first orbit of a hydrogen atom to the second orbit of a Li²⁺ ion?",
            problemTamil: "ஹைட்ரஜன் அணுவின் முதல் சுற்றுப்பாதையின் ஆரத்திற்கும், Li²⁺ அயனியின் இரண்டாவது சுற்றுப்பாதையின் ஆரத்திற்கும் உள்ள விகிதம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The formula for the radius of the nth orbit is r_n ∝ n²/Z.", explanationTamil: "n-வது சுற்றுப்பாதையின் ஆரத்திற்கான சூத்திரம் r_n ∝ n²/Z ஆகும்." },
                { step: 2, explanation: "For hydrogen (H), n=1 and Z=1. So, r_H ∝ 1²/1 = 1.", explanationTamil: "ஹைட்ரஜனுக்கு (H), n=1 மற்றும் Z=1. எனவே, r_H ∝ 1." },
                { step: 3, explanation: "For a Lithium ion (Li²⁺), Z=3. We are asked for the second orbit, so n=2. So, r_Li ∝ 2²/3 = 4/3.", explanationTamil: "லித்தியம் அயனிக்கு (Li²⁺), Z=3. இரண்டாவது சுற்றுப்பாதை கேட்கப்படுகிறது, எனவே n=2. எனவே, r_Li ∝ 4/3." },
                { step: 4, explanation: "Find the required ratio r_H / r_Li.", calculation: "r_H / r_Li = 1 / (4/3) = 3/4" }
            ]
        },
        {
            title: "JEE Level: de Broglie Wavelength and Bohr's Postulate",
            titleTamil: "ஜே.இ.இ நிலை: டி பிராய் அலைநீளம் மற்றும் போரின் எடுகோள்",
            difficulty: 'Medium',
            problem: "Show that de Broglie's hypothesis of matter waves supports Bohr's second postulate of quantization of angular momentum.",
            problemTamil: "பருப்பொருள் அலைகள் பற்றிய டி பிராய் கருதுகோள், கோண உந்தத்தின் குவாண்டமாக்கலுக்கான போரின் இரண்டாவது எடுகோளை ஆதரிக்கிறது என்பதைக் காட்டுக.",
            solutionSteps: [
                { step: 1, explanation: "According to de Broglie, an electron in a circular orbit must be a standing wave. For a wave to be a standing wave on a circular path, the circumference of the orbit must be an integral multiple of the wavelength.", calculation: "2πr = nλ, where n = 1, 2, 3,..." },
                { step: 2, explanation: "The de Broglie wavelength is given by λ = h/p = h/mv.", calculation: "2πr = n(h/mv)" },
                { step: 3, explanation: "Rearrange the equation to make the angular momentum (mvr) the subject.", calculation: "mvr = nh / (2π)" },
                { step: 4, explanation: "This is precisely Bohr's second postulate for the quantization of angular momentum. Thus, de Broglie's hypothesis provides a physical justification for Bohr's postulate.", explanationTamil: "இது கோண உந்தத்தின் குவாண்டமாக்கலுக்கான போரின் இரண்டாவது எடுகோள் ஆகும். எனவே, டி பிராய் கருதுகோள் போரின் எடுகோளுக்கு ஒரு பௌதிகரீதியான நியாயத்தை வழங்குகிறது." }
            ]
        },
        {
            title: "NEET Level: Number of Spectral Lines",
            titleTamil: "நீட் நிலை: நிறமாலை வரிகளின் எண்ணிக்கை",
            difficulty: 'Medium',
            problem: "An electron in a hydrogen atom is excited from the ground state (n=1) to the n=4 state. Find the maximum number of spectral lines that can be emitted.",
            problemTamil: "ஹைட்ரஜன் அணுவில் உள்ள ஒரு எலக்ட்ரான் அடி நிலையிலிருந்து (n=1) n=4 நிலைக்கு கிளர்ச்சி அடைகிறது. உமிழப்படக்கூடிய நிறமாலை வரிகளின் பெரும எண்ணிக்கையைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "When an electron is in an excited state (n), it can de-excite to any of the lower states, and from there to further lower states, emitting a photon at each step.", explanationTamil: "ஒரு எலக்ட்ரான் கிளர்ச்சி நிலையில் (n) இருக்கும்போது, அது எந்தவொரு குறைந்த நிலைக்கும் தாவலாம், மேலும் அங்கிருந்து மேலும் குறைந்த நிலைகளுக்கு தாவலாம், ஒவ்வொரு படியிலும் ஒரு ஃபோட்டானை உமிழ்கிறது." },
                { step: 2, explanation: "The formula for the maximum number of spectral lines emitted when an electron de-excites from state n to the ground state is N = n(n-1)/2.", explanationTamil: "ஒரு எலக்ட்ரான் n நிலையிலிருந்து அடி நிலைக்கு தளர்வடையும்போது உமிழப்படும் நிறமாலை வரிகளின் பெரும எண்ணிக்கைக்கான சூத்திரம் N = n(n-1)/2 ஆகும்." },
                { step: 3, explanation: "Here, the electron is excited to the n=4 state.", calculation: "N = 4(4-1)/2 = 4*3/2 = 6" }
            ],
            neetHack: "You can also visualize it: from n=4, it can jump to 3, 2, or 1 (3 lines). From n=3, it can jump to 2 or 1 (2 lines). From n=2, it can jump to 1 (1 line). Total lines = 3+2+1 = 6."
        }
    ],
    mcqs: [
        { question: "The Bohr model of an atom:", options: ["A. Assumes that the angular momentum of electrons is quantized", "B. Uses Einstein's photoelectric equation", "C. Predicts continuous emission spectra for atoms", "D. Is valid for all atoms"], answer: "A. Assumes that the angular momentum of electrons is quantized", explanation: "This is Bohr's second postulate, a cornerstone of his model.", neetFrequency: 5 },
        { question: "The energy of an electron in the nth orbit of a hydrogen atom is proportional to:", options: ["A. n²", "B. n", "C. 1/n", "D. 1/n²"], answer: "D. 1/n²", explanation: "The formula is E_n = -13.6/n² eV. So, E_n is proportional to 1/n².", neetFrequency: 4 },
        { question: "The Balmer series of the hydrogen spectrum lies in which region?", options: ["A. Ultraviolet", "B. Visible", "C. Infrared", "D. Microwave"], answer: "B. Visible", explanation: "The Balmer series (transitions to n=2) is the only series in the hydrogen spectrum that has lines in the visible region.", neetFrequency: 5 },
        { question: "Rutherford's alpha-particle scattering experiment led to the conclusion that:", options: ["A. Mass and energy are related", "B. The mass and positive charge of an atom are concentrated in the nucleus", "C. Electrons are embedded in the atom like plums in a pudding", "D. Atoms are electrically neutral"], answer: "B. The mass and positive charge of an atom are concentrated in the nucleus", explanation: "The large-angle scattering of some alpha particles could only be explained by a small, dense, positively charged nucleus.", neetFrequency: 3 },
        { question: "The radius of the first Bohr orbit in a hydrogen atom is approximately:", options: ["A. 0.529 nm", "B. 0.0529 Å", "C. 5.29 Å", "D. 0.529 Å"], answer: "D. 0.529 Å", explanation: "The Bohr radius (a₀) is a fundamental constant, approximately 0.529 Angstroms.", neetFrequency: 2 },
        { question: "According to Bohr's third postulate, the frequency of an emitted photon is proportional to:", options: ["A. The energy of the initial state", "B. The energy of the final state", "C. The sum of the energies of the initial and final states", "D. The difference in energy between the initial and final states"], answer: "D. The difference in energy between the initial and final states", explanation: "hν = E_i - E_f. The photon's energy (and thus frequency) is equal to the energy difference of the orbits.", neetFrequency: 4 },
        { question: "For a hydrogen-like atom, the radius of the nth orbit is proportional to:", options: ["A. n²/Z", "B. n/Z", "C. Z²/n²", "D. Z/n²"], answer: "A. n²/Z", explanation: "The formula is r_n = (n²/Z) * a₀.", neetFrequency: 4 },
        { question: "The Paschen series in the hydrogen spectrum corresponds to electron transitions ending at:", options: ["A. n = 1", "B. n = 2", "C. n = 3", "D. n = 4"], answer: "C. n = 3", explanation: "Lyman (n=1), Balmer (n=2), Paschen (n=3), Brackett (n=4), Pfund (n=5).", neetFrequency: 3 },
        { question: "The total energy of an electron in a hydrogen atom is -3.4 eV. Its kinetic energy is:", options: ["A. -3.4 eV", "B. +3.4 eV", "C. -6.8 eV", "D. +6.8 eV"], answer: "B. +3.4 eV", explanation: "For an electron in orbit, K.E = -Total Energy. So, K.E = -(-3.4 eV) = +3.4 eV.", neetFrequency: 5 },
        { question: "The potential energy of an electron in a hydrogen atom is -6.8 eV. Its total energy is:", options: ["A. -3.4 eV", "B. +3.4 eV", "C. -6.8 eV", "D. -13.6 eV"], answer: "A. -3.4 eV", explanation: "For an electron in orbit, P.E = 2 * Total Energy. So, Total Energy = P.E / 2 = -6.8 eV / 2 = -3.4 eV.", neetFrequency: 4 },
        { question: "Which spectral series of the hydrogen atom is in the ultraviolet region?", options: ["A. Balmer", "B. Paschen", "C. Lyman", "D. Pfund"], answer: "C. Lyman", explanation: "The Lyman series (transitions to n=1) has the largest energy differences and its lines are in the UV region.", neetFrequency: 3 },
        { question: "The maximum number of spectral lines emitted when an electron jumps from n=5 to n=1 is:", options: ["A. 4", "B. 5", "C. 10", "D. 20"], answer: "C. 10", explanation: "Number of lines = n(n-1)/2 = 5(5-1)/2 = 10.", neetFrequency: 3 },
        { question: "The ratio of the speed of an electron in the ground state of a hydrogen atom to the speed of light is:", options: ["A. 1/137", "B. 1/2", "C. 2/137", "D. 1"], answer: "A. 1/137", explanation: "This ratio is known as the fine structure constant, α ≈ 1/137.", neetFrequency: 2 },
        { question: "Rutherford's model of the atom failed to explain:", options: ["A. The existence of a nucleus", "B. The line spectrum of hydrogen", "C. The scattering of alpha particles", "D. The charge on the nucleus"], answer: "B. The line spectrum of hydrogen", explanation: "The model couldn't explain why atoms emit light at discrete frequencies, nor could it explain the stability of atoms.", neetFrequency: 4 },
        { question: "The shortest wavelength in the Balmer series corresponds to a transition from:", options: ["A. n=3 to n=2", "B. n=4 to n=2", "C. n=∞ to n=2", "D. n=2 to n=1"], answer: "C. n=∞ to n=2", explanation: "Shortest wavelength corresponds to the maximum energy transition, which for the Balmer series is from n=∞ to n_f=2.", neetFrequency: 3 },
        { question: "If the radius of the first Bohr orbit is r, then the radius of the second Bohr orbit will be:", options: ["A. 2r", "B. r/2", "C. 4r", "D. r/4"], answer: "C. 4r", explanation: "Radius r_n ∝ n². So, r₂/r₁ = 2²/1² = 4. r₂ = 4r.", neetFrequency: 5 },
        { question: "The ionization energy of a hydrogen atom is:", options: ["A. 3.4 eV", "B. 10.2 eV", "C. 13.6 eV", "D. 0 eV"], answer: "C. 13.6 eV", explanation: "Ionization energy is the energy required to remove the electron from the ground state (n=1) to infinity (n=∞). E = E_∞ - E₁ = 0 - (-13.6 eV) = 13.6 eV.", neetFrequency: 3 },
        { question: "The Bohr model is applicable to:", options: ["A. All atoms", "B. Only the hydrogen atom", "C. Hydrogen-like atoms (one electron)", "D. Molecules"], answer: "C. Hydrogen-like atoms (one electron)", explanation: "The Bohr model works for systems with one electron, like H, He⁺, Li²⁺, etc.", neetFrequency: 2 },
        { question: "de Broglie's explanation of Bohr's second postulate involves:", options: ["A. Electron spin", "B. Electron as a standing wave", "C. Einstein's mass-energy relation", "D. Quantization of charge"], answer: "B. Electron as a standing wave", explanation: "de Broglie proposed that an electron's orbit is stable if its circumference is an integral multiple of its wavelength, forming a standing wave.", neetFrequency: 2 },
        { question: "The ratio of kinetic energy to total energy for an electron in a Bohr orbit is:", options: ["A. 1", "B. 2", "C. -1", "D. -2"], answer: "C. -1", explanation: "K.E = -E_total. So the ratio is -1.", neetFrequency: 4 },
        { question: "The ratio of potential energy to total energy for an electron in a Bohr orbit is:", options: ["A. 1", "B. 2", "C. -1", "D. -2"], answer: "B. 2", explanation: "P.E = 2 * E_total. So the ratio is 2.", neetFrequency: 3 },
        { question: "When an electron jumps from n=4 to n=2 orbit, the emitted radiation belongs to which series?", options: ["A. Lyman", "B. Balmer", "C. Paschen", "D. Pfund"], answer: "B. Balmer", explanation: "Any transition ending at n=2 belongs to the Balmer series.", neetFrequency: 5 },
        { question: "The total energy of an electron in an atom is negative because:", options: ["A. The electron is negatively charged", "B. The nucleus is positively charged", "C. The electron is bound to the nucleus", "D. The electron is moving"], answer: "C. The electron is bound to the nucleus", explanation: "A negative total energy signifies a bound system, meaning energy must be supplied to free the electron.", neetFrequency: 1 },
        { question: "The Rydberg constant's unit is:", options: ["A. m", "B. m⁻¹", "C. s⁻¹", "D. J"], answer: "B. m⁻¹", explanation: "The Rydberg formula is for 1/λ, so the unit of R must be inverse length, m⁻¹.", neetFrequency: 1 },
        { question: "The angular momentum of an electron in the 3rd orbit of a hydrogen atom is:", options: ["A. 3h/π", "B. 3h/2π", "C. h/2π", "D. 2h/3π"], answer: "B. 3h/2π", explanation: "From Bohr's second postulate, L = nh/2π. For n=3, L = 3h/2π.", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "Bohr's model failed to explain the spectra of multi-electron atoms.", reason: "The model does not account for electron-electron interactions.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Bohr's model only works for single-electron systems because it doesn't include the complex electrostatic interactions between multiple electrons.", neetFrequency: 3 },
        { assertion: "The total energy of an electron in an atom is negative.", reason: "The electron is bound to the nucleus by electrostatic attraction.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. The negative sign indicates that work must be done to separate the electron from the nucleus to a state of zero energy (at infinity).", neetFrequency: 4 },
        { assertion: "The angular momentum of an electron in a hydrogen atom is quantized.", reason: "According to de Broglie, the electron is a standing wave in its orbit.", answer: "A", explanation: "Assertion is Bohr's postulate. Reason provides the physical justification from de Broglie's hypothesis (nλ = 2πr). It is the correct explanation.", neetFrequency: 2 },
        { assertion: "Rutherford's model could not explain the stability of an atom.", reason: "An accelerating classical electron must radiate energy.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation from classical electrodynamics. This radiation would cause the electron to lose energy and spiral into the nucleus.", neetFrequency: 4 },
        { assertion: "The Balmer series of the hydrogen spectrum lies in the visible region.", reason: "It corresponds to electron jumps to the n=1 orbit.", answer: "C", explanation: "The assertion is true. The reason is false. The Balmer series corresponds to jumps to the n=2 orbit. Jumps to n=1 form the Lyman series.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Lyman series", "(b) Balmer series", "(c) Paschen series", "(d) Pfund series"], column2: ["(p) Infrared region", "(q) Visible region", "(r) Ultraviolet region", "(s) n_f = 5"], answer: "a-r, b-q, c-p, d-p,s", explanation: "Matching the spectral series with their region and final quantum number n_f. Pfund is n_f=5 and is in the IR region." },
        { column1: ["(a) Radius of orbit", "(b) Velocity in orbit", "(c) Energy in orbit", "(d) Angular momentum"], column2: ["(p) Proportional to n", "(q) Proportional to n²", "(r) Proportional to 1/n", "(s) Proportional to 1/n²"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching the quantities in Bohr's model with their dependence on the principal quantum number n." },
        { column1: ["(a) Total Energy (E)", "(b) Kinetic Energy (K)", "(c) Potential Energy (U)"], column2: ["(p) -GMm/r", "(q) GMm/2r", "(r) -GMm/2r"], answer: "a-r, b-q, c-p", explanation: "This is for gravitational orbits but the energy relations are analogous for atoms: U = 2E, K = -E." },
        { column1: ["(a) α-particle scattering", "(b) Photoelectric effect", "(c) Electron diffraction", "(d) Bohr's postulates"], column2: ["(p) Wave nature of electron", "(q) Discovery of nucleus", "(r) Particle nature of light", "(s) Quantization of orbits"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching experiments and theories with their key conclusions." },
        { column1: ["(a) Ionization Energy", "(b) Excitation Energy", "(c) Binding Energy", "(d) Work Function"], column2: ["(p) Energy to remove electron from metal", "(q) Energy to remove electron from atom's ground state", "(r) Energy difference between two orbits", "(s) Energy equivalent of mass defect"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching different energy terms with their definitions." }
    ],
    keyTakeaways: [
        "Rutherford's model established the nucleus but failed on stability.",
        "Bohr's model, through quantization postulates, successfully explained the hydrogen spectrum.",
        "The energy of an electron in an atom is quantized and is negative, indicating a bound state.",
        "Spectral lines are produced when electrons transition between these quantized energy levels."
    ],
    mnemonics: [
        { text: "Remember the spectral series order: 'Loud Beer Pong Bounces Forever' (Lyman, Balmer, Paschen, Brackett, Pfund).", tamil: "'லைலா பாப்பா பிராமி ஃபண்டு கேட்டா' (லைமன், பால்மர், பாஷன், பிராக்கெட், ஃபண்ட்)." }
    ],
    neetTips: [
        { text: "Problems relating the radius, velocity, and energy of different orbits or different hydrogen-like species are very common. Master the proportionality relations (r ∝ n²/Z, v ∝ Z/n, E ∝ Z²/n²).", tamil: "வெவ்வேறு சுற்றுப்பாதைகள் அல்லது வெவ்வேறு ஹைட்ரஜன் போன்ற தனிமங்களின் ஆரம், திசைவேகம் மற்றும் ஆற்றல் தொடர்பான கணக்குகள் மிகவும் பொதுவானவை. விகிதாசார உறவுகளை (r ∝ n²/Z, v ∝ Z/n, E ∝ Z²/n²) நன்கு அறிந்திருங்கள்." },
        { text: "The energy relationships K = -E and U = 2E are powerful shortcuts for solving problems about the energies of an orbiting electron.", tamil: "ஒரு சுற்றும் எலக்ட்ரானின் ஆற்றல்கள் பற்றிய கணக்குகளைத் தீர்க்க, K = -E மற்றும் U = 2E ஆகிய ஆற்றல் உறவுகள் சக்திவாய்ந்த குறுக்குவழிகள் ஆகும்." }
    ]
};
