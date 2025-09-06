
import type { NeetModule } from '@/lib/types';

export const atomicStructureModule: NeetModule = {
    id: 'neet-chemistry-atomic-structure',
    title: 'Chemistry - Atomic Structure (அணு அமைப்பு)',
    chapter: 'Atomic Structure',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the discovery of subatomic particles (electron, proton, neutron).",
        "Describe Thomson's, Rutherford's, and Bohr's models of the atom and their limitations.",
        "Understand the dual nature of matter, de Broglie's equation, and Heisenberg's uncertainty principle.",
        "Explain the significance of quantum numbers (n, l, m, s) and the shapes of s, p, and d orbitals.",
        "Apply rules for filling electrons in orbitals: Aufbau principle, Pauli exclusion principle, and Hund's rule."
    ],
    prerequisites: [
        "Basic understanding of charge and mass.",
        "Concept of atoms as the basic unit of matter."
    ],
    conceptOverview: "This chapter unravels the structure of the atom, the fundamental building block of all matter. We journey from early models to the modern quantum mechanical model. Key concepts include the discovery of subatomic particles, the revolutionary Bohr model which explained the hydrogen spectrum, and the quantum mechanical model which introduced the idea of orbitals and quantum numbers to describe electron behavior. Understanding atomic structure is essential as it governs all chemical properties and bonding.",
    tamilConnection: "பண்டைய இந்திய தத்துவஞானி கணாதர், பிரிக்க முடியாத துகள்களான 'பரமாணு' பற்றி பேசினார். நவீன அறிவியல், அந்த அணுவையும் புரோட்டான், நியூட்ரான், எலக்ட்ரான் என பிரிக்கலாம் என்றும், அவற்றின் இயக்கத்தை குவாண்டம் விதிகள் தீர்மானிக்கின்றன என்றும் விளக்குகிறது. இது நம் முன்னோர்களின் சிந்தனைக்கு அறிவியல் வடிவம் கொடுப்பதைப் போன்றது.",
    culturalContext: "The vibrant colors of fireworks seen during festivals like Deepavali are a direct result of electron transitions between different energy levels in atoms, a concept explained by Bohr's model. When an electron jumps from a higher energy level to a lower one, it emits light of a specific color, creating the dazzling displays.",
    syllabusMapping: [
        {
            topic: "Atomic Structure",
            tnBoardChapter: "11th Std Chemistry - Vol 1, Chapter 2: Quantum Mechanical Model of Atom",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 2: Structure of Atom",
            notes: "A fundamental and high-weightage chapter. Quantum numbers, electronic configuration, and Bohr's model calculations are very important topics for NEET.",
            mappingDescription: '11th Std Chemistry - Vol 1, Chapter 2 maps to NEET Chemistry Unit 2'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Bohr\'s Model for Hydrogen Atom',
                tamil: '1. ஹைட்ரஜன் அணுவிற்கான போர் மாதிரி'
            },
            content: [
                {
                    english: 'Bohr proposed that electrons revolve in specific, stable orbits where their angular momentum is quantized. The energy of an electron is determined by its orbit.',
                    tamil: 'எலக்ட்ரான்கள் குறிப்பிட்ட, நிலையான சுற்றுப்பாதைகளில் சுற்றுகின்றன என்றும், அங்கு அவற்றின் கோண உந்தம் குவாண்டமாக்கப்பட்டுள்ளது என்றும் போர் முன்மொழிந்தார். ஒரு எலக்ட்ரானின் ஆற்றல் அதன் சுற்றுப்பாதையால் தீர்மானிக்கப்படுகிறது.'
                },
                {
                    english: 'Key formulas: Radius of nth orbit $r_n = 0.529 \\frac{n^2}{Z}$ Å, Energy of nth orbit $E_n = -13.6 \\frac{Z^2}{n^2}$ eV.',
                    tamil: 'முக்கிய சூத்திரங்கள்: n-வது சுற்றுப்பாதையின் ஆரம் $r_n = 0.529 \\frac{n^2}{Z}$ Å, n-வது சுற்றுப்பாதையின் ஆற்றல் $E_n = -13.6 \\frac{Z^2}{n^2}$ eV.'
                }
            ]
        },
        {
            heading: {
                english: '2. Quantum Mechanical Model of Atom',
                tamil: '2. அணுவின் குவாண்டம் இயக்கவியல் மாதிரி'
            },
            content: [
                {
                    english: 'This model treats the electron as a wave. The Schrödinger equation describes the behavior of this electron wave. Its solution gives us orbitals and quantum numbers.',
                    tamil: 'இந்த மாதிரி எலக்ட்ரானை ஒரு அலையாகக் கருதுகிறது. ஷ்ரோடிங்கர் சமன்பாடு இந்த எலக்ட்ரான் அலையின் நடத்தையை விவரிக்கிறது. அதன் தீர்வு நமக்கு ஆர்பிட்டால்கள் மற்றும் குவாண்டம் எண்களை அளிக்கிறது.'
                },
                {
                    english: 'Heisenberg\'s Uncertainty Principle states that it is impossible to determine simultaneously, the exact position and exact momentum of an electron.',
                    tamil: 'ஹைசன்பர்க்கின் நிச்சயமற்ற கோட்பாடு, ஒரு எலக்ட்ரானின் சரியான நிலை மற்றும் சரியான உந்தத்தை ஒரே நேரத்தில் தீர்மானிக்க இயலாது என்று கூறுகிறது.'
                }
            ]
        },
        {
            heading: {
                english: '3. Quantum Numbers',
                tamil: '3. குவாண்டம் எண்கள்'
            },
            content: [
                {
                    english: 'Four quantum numbers are used to describe an electron in an atom: Principal (n), Azimuthal (l), Magnetic (m_l), and Spin (m_s).',
                    tamil: 'ஒரு அணுவில் உள்ள ஒரு எலக்ட்ரானை விவரிக்க நான்கு குவாண்டம் எண்கள் பயன்படுத்தப்படுகின்றன: முதன்மை (n), திசைக்கோண (l), காந்த (m_l), மற்றும் தற்சுழற்சி (m_s).'
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Energy Level Transition",
            titleTamil: "நீட் நிலை: ஆற்றல் மட்ட தாவல்",
            difficulty: 'Medium',
            problem: "Calculate the wavelength of radiation emitted when an electron in a hydrogen atom jumps from n=4 to n=2.",
            problemTamil: "ஹைட்ரஜன் அணுவில் ஒரு எலக்ட்ரான் n=4-இலிருந்து n=2-க்கு தாவும்போது உமிழப்படும் கதிர்வீச்சின் அலைநீளத்தைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Use the Rydberg formula for the wavelength of emitted radiation.",
                    explanationTamil: "உமிழப்படும் கதிர்வீச்சின் அலைநீளத்திற்கான ரிட்பெர்க் சூத்திரத்தைப் பயன்படுத்தவும்.",
                    calculation: "\\frac{1}{\\lambda} = R_H (\\frac{1}{n_1^2} - \\frac{1}{n_2^2})"
                },
                {
                    step: 2,
                    explanation: "Substitute the given values: n₁=2, n₂=4, and R_H = 1.097 x 10⁷ m⁻¹.",
                    explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளைப் பிரதியிடவும்: n₁=2, n₂=4, மற்றும் R_H = 1.097 x 10⁷ m⁻¹.",
                    calculation: "\\frac{1}{\\lambda} = 1.097 \\times 10^7 (\\frac{1}{2^2} - \\frac{1}{4^2}) = 1.097 \\times 10^7 (\\frac{1}{4} - \\frac{1}{16})"
                },
                {
                    step: 3,
                    explanation: "Simplify the expression to find 1/λ.",
                    explanationTamil: "1/λ-ஐக் கண்டுபிடிக்க கோவையை எளிதாக்கவும்.",
                    calculation: "\\frac{1}{\\lambda} = 1.097 \\times 10^7 (\\frac{4-1}{16}) = \\frac{3 \\times 1.097 \\times 10^7}{16}"
                },
                {
                    step: 4,
                    explanation: "Calculate the wavelength λ.",
                    explanationTamil: "அலைநீளம் λ-ஐக் கணக்கிடவும்.",
                    calculation: "\\lambda \\approx 4.86 \\times 10^{-7} m = 486 nm"
                }
            ],
            neetHack: "This transition (n=4 to n=2) corresponds to the second line (H-beta) of the Balmer series, which lies in the visible region (blue-green light).",
            neetHackTamil: "இந்தத் தாவல் (n=4 முதல் n=2 வரை) பால்மர் தொடரின் இரண்டாவது வரியுடன் (H-beta) ஒத்துள்ளது, இது கண்ணுறு ஒளிப் பகுதியில் (நீல-பச்சை ஒளி) அமைந்துள்ளது."
        },
        {
            title: "JEE Level: de Broglie Wavelength",
            titleTamil: "ஜே.இ.இ நிலை: டி பிராய் அலைநீளம்",
            difficulty: "Medium",
            problem: "Calculate the de Broglie wavelength of an electron moving with a velocity of 10% of the speed of light.",
            problemTamil: "ஒளியின் வேகத்தில் 10% திசைவேகத்துடன் நகரும் ஒரு எலக்ட்ரானின் டி பிராய் அலைநீளத்தைக் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the velocity of the electron.",
                    explanationTamil: "எலக்ட்ரானின் திசைவேகத்தைக் கணக்கிடவும்.",
                    calculation: "v = 0.10 \\times c = 0.10 \\times (3 \\times 10^8 \\text{ m/s}) = 3 \\times 10^7 \\text{ m/s}"
                },
                {
                    step: 2,
                    explanation: "Use the de Broglie wavelength formula: λ = h / mv.",
                    explanationTamil: "டி பிராய் அலைநீள சூத்திரத்தைப் பயன்படுத்தவும்: λ = h / mv.",
                    calculation: "h = 6.626 \\times 10^{-34} \\text{ J·s}, m_e = 9.11 \\times 10^{-31} \\text{ kg}"
                },
                {
                    step: 3,
                    explanation: "Substitute the values and calculate the wavelength.",
                    explanationTamil: "மதிப்புகளைப் பிரதியிட்டு அலைநீளத்தைக் கணக்கிடவும்.",
                    calculation: "\\lambda = \\frac{6.626 \\times 10^{-34}}{(9.11 \\times 10^{-31}) \\times (3 \\times 10^7)} = \\frac{6.626 \\times 10^{-34}}{27.33 \\times 10^{-24}} \\approx 0.242 \\times 10^{-10} \\text{ m}"
                },
                {
                    step: 4,
                    explanation: "Convert the wavelength to a more convenient unit like Angstroms (1 Å = 10⁻¹⁰ m).",
                    explanationTamil: "அலைநீளத்தை ஆங்ஸ்ட்ராம் (1 Å = 10⁻¹⁰ மீ) போன்ற ஒரு வசதியான அலகிற்கு மாற்றவும்.",
                    calculation: "\\lambda \\approx 0.242 \\text{ Å}"
                }
            ],
            neetHack: "For electrons accelerated by a potential V, the shortcut λ ≈ 12.27/√V Å is very useful. For velocity-based problems, direct calculation is necessary.",
            neetHackTamil: "ஒரு மின்னழுத்தம் V மூலம் முடுக்கப்பட்ட எலக்ட்ரான்களுக்கு, λ ≈ 12.27/√V Å என்ற குறுக்குவழி மிகவும் பயனுள்ளதாக இருக்கும். திசைவேகம் அடிப்படையிலான கணக்குகளுக்கு, நேரடி கணக்கீடு அவசியம்."
        },
        {
            title: "NEET Level: Quantum Numbers",
            titleTamil: "நீட் நிலை: குவாண்டம் எண்கள்",
            difficulty: "Easy",
            problem: "Which of the following sets of quantum numbers is not possible for an electron?",
            problemTamil: "பின்வரும் குவாண்டம் எண்களின் தொகுப்புகளில் எது ஒரு எலக்ட்ரானுக்கு சாத்தியமில்லை?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze each set based on the rules for quantum numbers: (n, l, m_l, m_s).",
                    explanationTamil: "ஒவ்வொரு தொகுப்பையும் குவாண்டம் எண்களுக்கான விதிகளின் அடிப்படையில் பகுப்பாய்வு செய்யவும்: (n, l, m_l, m_s)."
                },
                {
                    step: 2,
                    explanation: "Rules: n > 0 (integer); 0 ≤ l < n; -l ≤ m_l ≤ +l; m_s = +1/2 or -1/2.",
                    explanationTamil: "விதிகள்: n > 0 (முழு எண்); 0 ≤ l < n; -l ≤ m_l ≤ +l; m_s = +1/2 அல்லது -1/2."
                },
                {
                    step: 3,
                    explanation: "Let's assume the options were: a) (3, 2, -1, +1/2), b) (3, 3, -1, +1/2), c) (2, 1, 0, -1/2), d) (4, 0, 0, +1/2).",
                    explanationTamil: "விருப்பங்கள்: a) (3, 2, -1, +1/2), b) (3, 3, -1, +1/2), c) (2, 1, 0, -1/2), d) (4, 0, 0, +1/2) என வைத்துக்கொள்வோம்."
                },
                {
                    step: 4,
                    explanation: "Check option (b): (3, 3, -1, +1/2). Here, n=3 and l=3. This violates the rule that l must be less than n (l < n).",
                    explanationTamil: "விருப்பம் (b) ஐ சரிபார்க்கவும்: (3, 3, -1, +1/2). இங்கு, n=3 மற்றும் l=3. இது l ஆனது n-ஐ விட குறைவாக இருக்க வேண்டும் (l < n) என்ற விதியை மீறுகிறது."
                },
                {
                    step: 5,
                    explanation: "Therefore, the set (3, 3, -1, +1/2) is not possible.",
                    explanationTamil: "எனவே, (3, 3, -1, +1/2) என்ற தொகுப்பு சாத்தியமில்லை."
                }
            ],
            commonPitfall: "Forgetting the condition that l must be strictly less than n. It can be 0 but cannot be equal to n.",
            commonPitfallTamil: "l ஆனது n-ஐ விட கண்டிப்பாக குறைவாக இருக்க வேண்டும் என்ற நிபந்தனையை மறந்துவிடுவது. அது 0 ஆக இருக்கலாம் ஆனால் n-க்கு சமமாக இருக்க முடியாது."
        },
        {
            title: "JEE Level: Uncertainty Principle",
            titleTamil: "ஜே.இ.இ நிலை: நிச்சயமற்ற கோட்பாடு",
            difficulty: "Medium",
            problem: "If the uncertainty in the position of an electron is equal to its de Broglie wavelength, show that its uncertainty in velocity is equal to its velocity divided by 4π.",
            problemTamil: "ஒரு எலக்ட்ரானின் நிலையில் உள்ள நிச்சயமற்ற தன்மை அதன் டி பிராய் அலைநீளத்திற்கு சமமாக இருந்தால், அதன் திசைவேகத்தில் உள்ள நிச்சயமற்ற தன்மை அதன் திசைவேகத்தை 4π ஆல் வகுப்பதற்கு சமம் என்று காட்டுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "State Heisenberg's Uncertainty Principle: Δx · Δp ≥ h / 4π.",
                    explanationTamil: "ஹைசன்பர்க்கின் நிச்சயமற்ற கோட்பாட்டைக் கூறவும்: Δx · Δp ≥ h / 4π."
                },
                {
                    step: 2,
                    explanation: "State the de Broglie wavelength formula: λ = h / p = h / mv.",
                    explanationTamil: "டி பிராய் அலைநீள சூத்திரத்தைக் கூறவும்: λ = h / p = h / mv."
                },
                {
                    step: 3,
                    explanation: "Use the given condition: uncertainty in position Δx = λ.",
                    explanationTamil: "கொடுக்கப்பட்ட நிபந்தனையைப் பயன்படுத்தவும்: நிலையில் நிச்சயமற்ற தன்மை Δx = λ."
                },
                {
                    step: 4,
                    explanation: "Substitute Δx = λ into the uncertainty principle. Also, Δp = mΔv.",
                    explanationTamil: "நிச்சயமற்ற கோட்பாட்டில் Δx = λ ஐ பிரதியிடவும். மேலும், Δp = mΔv.",
                    calculation: "λ · (mΔv) ≥ h / 4π"
                },
                {
                    step: 5,
                    explanation: "Substitute the expression for λ from de Broglie's formula.",
                    explanationTamil: "டி பிராய் சூத்திரத்திலிருந்து λ-க்கான கோவையைப் பிரதியிடவும்.",
                    calculation: "(h / mv) · (mΔv) ≥ h / 4π"
                },
                {
                    step: 6,
                    explanation: "Simplify the expression to find the relationship between Δv and v.",
                    explanationTamil: "Δv மற்றும் v-க்கு இடையேயான உறவைக் கண்டறிய கோவையை எளிதாக்கவும்.",
                    calculation: "(hΔv / v) ≥ h / 4π \\implies Δv / v ≥ 1 / 4π \\implies Δv ≥ v / 4π"
                }
            ],
            neetHack: "Problems involving the uncertainty principle often require combining it with the de Broglie relation. Remember to substitute one into the other to find the required relationship.",
            neetHackTamil: "நிச்சயமற்ற கோட்பாட்டை உள்ளடக்கிய கணக்குகளுக்கு, அதை டி பிராய் உறவுடன் இணைக்க வேண்டியிருக்கும். தேவையான உறவைக் கண்டறிய ஒன்றை மற்றொன்றில் பிரதியிடவும்."
        },
        {
            title: "NEET Level: Electronic Configuration",
            titleTamil: "நீட் நிலை: எலக்ட்ரான் அமைப்பு",
            difficulty: "Easy",
            problem: "Write the electronic configuration for the element Chromium (Cr, Z=24) and explain why it is an exception to the Aufbau principle.",
            problemTamil: "குரோமியம் (Cr, Z=24) தனிமத்திற்கான எலக்ட்ரான் அமைப்பை எழுதி, அது ஏன் Aufbau கொள்கைக்கு ஒரு விதிவிலக்கு என்பதை விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Based on the Aufbau principle (building up), the expected configuration would be to fill the 4s orbital before the 3d orbital is completely filled.",
                    explanationTamil: "Aufbau கொள்கையின் அடிப்படையில் (கட்டமைப்பு), எதிர்பார்க்கப்படும் அமைப்பு 3d ஆர்பிட்டால் முழுமையாக நிரப்பப்படுவதற்கு முன்பு 4s ஆர்பிட்டாலை நிரப்புவதாகும்."
                },
                {
                    step: 2,
                    explanation: "The expected configuration would be: [Ar] 4s² 3d⁴.",
                    explanationTamil: "எதிர்பார்க்கப்படும் அமைப்பு: [Ar] 4s² 3d⁴."
                },
                {
                    step: 3,
                    explanation: "However, the actual observed configuration is [Ar] 4s¹ 3d⁵.",
                    explanationTamil: "இருப்பினும், உண்மையில் காணப்பட்ட அமைப்பு [Ar] 4s¹ 3d⁵ ஆகும்."
                },
                {
                    step: 4,
                    explanation: "This exception occurs because half-filled (d⁵) and fully-filled (d¹⁰) d-orbitals have extra stability due to symmetry and exchange energy.",
                    explanationTamil: "இந்த விதிவிலக்கு ஏற்படுகிறது ஏனெனில் பாதி நிரம்பிய (d⁵) மற்றும் முழுமையாக நிரம்பிய (d¹⁰) d-ஆர்பிட்டால்கள் சமச்சீர் மற்றும் பரிமாற்ற ஆற்றல் காரணமாக கூடுதல் நிலைப்புத்தன்மையைக் கொண்டுள்ளன."
                },
                {
                    step: 5,
                    explanation: "By promoting one electron from the 4s to the 3d orbital, the atom achieves a stable half-filled 3d orbital and a half-filled 4s orbital, which is an overall lower energy (more stable) state.",
                    explanationTamil: "ஒரு எலக்ட்ரானை 4s-லிருந்து 3d ஆர்பிட்டாலுக்கு உயர்த்துவதன் மூலம், அணு ஒரு நிலையான பாதி நிரம்பிய 3d ஆர்பிட்டாலையும் மற்றும் ஒரு பாதி நிரம்பிய 4s ஆர்பிட்டாலையும் அடைகிறது, இது ஒட்டுமொத்தமாக குறைந்த ஆற்றல் (அதிக நிலைப்புத்தன்மை) கொண்ட நிலையாகும்."
                }
            ],
            commonPitfall: "Applying the Aufbau principle rigidly without remembering the key exceptions for Chromium (Cr) and Copper (Cu).",
            commonPitfallTamil: "குரோமியம் (Cr) மற்றும் காப்பர் (Cu) ஆகியவற்றிற்கான முக்கிய விதிவிலக்குகளை நினைவில் கொள்ளாமல் Aufbau கொள்கையை கடுமையாகப் பயன்படுத்துதல்."
        }
    ],
    mcqs: [
        {
            question: "The number of orbitals in the n=3 shell is:",
            options: ["A. 3", "B. 6", "C. 9", "D. 12"],
            answer: "C. 9",
            explanation: "The number of orbitals in a shell is given by n². For n=3, the number of orbitals is 3² = 9 (one 3s, three 3p, and five 3d orbitals).",
            neetFrequency: 4
        },
        {
            question: "Which of the following quantum numbers determines the shape of an orbital?",
            options: ["A. Principal quantum number (n)", "B. Azimuthal quantum number (l)", "C. Magnetic quantum number (m_l)", "D. Spin quantum number (m_s)"],
            answer: "B. Azimuthal quantum number (l)",
            explanation: "The azimuthal quantum number (l) determines the shape of the orbital (l=0 is s-orbital/spherical, l=1 is p-orbital/dumbbell-shaped, etc.).",
            neetFrequency: 5
        },
        {
            question: "According to Heisenberg's Uncertainty Principle, it is impossible to determine simultaneously the:",
            options: ["A. Position and charge of an electron", "B. Mass and velocity of an electron", "C. Position and momentum of an electron", "D. Charge and mass of an electron"],
            answer: "C. Position and momentum of an electron",
            explanation: "The uncertainty principle specifically relates the uncertainties in position (Δx) and momentum (Δp).",
            neetFrequency: 4
        },
        {
            question: "The energy of an electron in the Bohr's model of a hydrogen atom is proportional to:",
            options: ["A. n", "B. n²", "C. 1/n", "D. 1/n²"],
            answer: "D. 1/n²",
            explanation: "The energy of the nth orbit is given by E_n = -13.6/n² eV. It is inversely proportional to the square of the principal quantum number.",
            neetFrequency: 4
        },
        {
            question: "The de Broglie wavelength of a particle is given by:",
            options: ["A. λ = h / (mv²)", "B. λ = mv / h", "C. λ = h / (mv)", "D. λ = hv / m"],
            answer: "C. λ = h / (mv)",
            explanation: "The de Broglie wavelength (λ) is inversely proportional to the momentum (p = mv) of the particle.",
            neetFrequency: 5
        },
        {
            question: "The maximum number of electrons in a subshell with azimuthal quantum number l=3 is:",
            options: ["A. 6", "B. 10", "C. 14", "D. 18"],
            answer: "C. 14",
            explanation: "l=3 corresponds to the f-subshell. The number of orbitals is 2l+1 = 2(3)+1 = 7. Each orbital can hold 2 electrons, so the maximum number of electrons is 7 x 2 = 14.",
            neetFrequency: 3
        },
        {
            question: "Rutherford's alpha-particle scattering experiment led to the discovery of the:",
            options: ["A. Electron", "B. Proton", "C. Nucleus", "D. Neutron"],
            answer: "C. Nucleus",
            explanation: "The large-angle scattering of some alpha particles led Rutherford to conclude that the positive charge and mass of an atom are concentrated in a tiny, dense core called the nucleus.",
            neetFrequency: 3
        },
        {
            question: "Which of the following rules states that no two electrons in an atom can have the same set of four quantum numbers?",
            options: ["A. Hund's Rule", "B. Aufbau Principle", "C. Pauli Exclusion Principle", "D. Heisenberg's Principle"],
            answer: "C. Pauli Exclusion Principle",
            explanation: "This is the definition of the Pauli Exclusion Principle.",
            neetFrequency: 4
        },
        {
            question: "The shape of a p-orbital is:",
            options: ["A. Spherical", "B. Dumbbell", "C. Double dumbbell", "D. Cloverleaf"],
            answer: "B. Dumbbell",
            explanation: "s-orbitals are spherical, p-orbitals are dumbbell-shaped, and d-orbitals are typically double dumbbell-shaped.",
            neetFrequency: 2
        },
        {
            question: "The radius of the first Bohr orbit for hydrogen is approximately 0.53 Å. The radius of the third Bohr orbit is:",
            options: ["A. 1.59 Å", "B. 0.17 Å", "C. 4.77 Å", "D. 2.12 Å"],
            answer: "C. 4.77 Å",
            explanation: "The radius r_n ∝ n². So, r₃ = r₁ * (3²/1²) = 0.53 * 9 = 4.77 Å.",
            neetFrequency: 4
        },
        {
            question: "Which electronic configuration is an exception to the Aufbau principle?",
            options: ["A. Nitrogen (Z=7)", "B. Copper (Z=29)", "C. Sodium (Z=11)", "D. Argon (Z=18)"],
            answer: "B. Copper (Z=29)",
            explanation: "Copper has the configuration [Ar] 4s¹ 3d¹⁰ instead of the expected [Ar] 4s² 3d⁹, due to the extra stability of a fully-filled d-orbital.",
            neetFrequency: 4
        },
        {
            question: "An orbital is described by the three quantum numbers n, l, and m_l. How many electrons can it accommodate?",
            options: ["A. 1", "B. 2", "C. 6", "D. 10"],
            answer: "B. 2",
            explanation: "Any single orbital can hold a maximum of two electrons, which must have opposite spins (m_s = +1/2 and -1/2).",
            neetFrequency: 3
        },
        {
            question: "The Balmer series of the hydrogen spectrum lies in which region?",
            options: ["A. Ultraviolet", "B. Visible", "C. Infrared", "D. Microwave"],
            answer: "B. Visible",
            explanation: "The Balmer series involves transitions to the n=2 energy level and is the only series in the hydrogen spectrum that has lines in the visible region.",
            neetFrequency: 3
        },
        {
            question: "The orbital with n=3 and l=1 is designated as:",
            options: ["A. 3s", "B. 3p", "C. 3d", "D. 1p"],
            answer: "B. 3p",
            explanation: "n gives the principal shell number (3), and l=1 corresponds to the p-subshell.",
            neetFrequency: 2
        },
        {
            question: "If an electron and a proton have the same de Broglie wavelength, then:",
            options: ["A. They have the same kinetic energy", "B. They have the same velocity", "C. They have the same momentum", "D. Both A and B"],
            answer: "C. They have the same momentum",
            explanation: "From λ = h/p, if λ is the same, then the momentum p must also be the same.",
            neetFrequency: 4
        },
        {
            question: "The number of nodes in a 3s orbital is:",
            options: ["A. 0", "B. 1", "C. 2", "D. 3"],
            answer: "C. 2",
            explanation: "The number of radial nodes for any orbital is given by n - l - 1. For a 3s orbital, n=3 and l=0, so the number of nodes is 3 - 0 - 1 = 2.",
            neetFrequency: 3
        },
        {
            question: "When an electron jumps from n=4 to n=1 in a hydrogen atom, the number of spectral lines that can be emitted is:",
            options: ["A. 3", "B. 4", "C. 6", "D. 8"],
            answer: "C. 6",
            explanation: "The maximum number of spectral lines is given by N = (n₂-n₁)(n₂-n₁+1)/2 = (4-1)(4-1+1)/2 = 3*4/2 = 6.",
            neetFrequency: 3
        },
        {
            question: "The magnetic quantum number (m_l) specifies the:",
            options: ["A. Size of the orbital", "B. Shape of the orbital", "C. Spatial orientation of the orbital", "D. Spin of the electron"],
            answer: "C. Spatial orientation of the orbital",
            explanation: "The magnetic quantum number specifies the orientation of the orbital in space relative to an external magnetic field (e.g., p_x, p_y, p_z orbitals).",
            neetFrequency: 3
        },
        {
            question: "Which of the following is not a permissible value for any of the quantum numbers?",
            options: ["A. n=3", "B. l=0", "C. m_l = -3", "D. m_s = +1/2"],
            answer: "C. m_l = -3",
            explanation: "If l=0, m_l can only be 0. If l=1, m_l can be -1,0,1. If l=2, m_l can be -2,-1,0,1,2. In no case where n is a reasonable integer can m_l be -3.",
            neetFrequency: 2
        },
        {
            question: "The energy of a photon of wavelength 6000 Å is approximately:",
            options: ["A. 2 eV", "B. 4 eV", "C. 6 eV", "D. 1 eV"],
            answer: "A. 2 eV",
            explanation: "Using the shortcut E(eV) ≈ 12400 / λ(Å) = 12400 / 6000 ≈ 2.07 eV.",
            neetFrequency: 4
        },
        {
            question: "The d-orbitals can accommodate a maximum of how many electrons?",
            options: ["A. 2", "B. 6", "C. 10", "D. 14"],
            answer: "C. 10",
            explanation: "The d-subshell (l=2) has 2l+1 = 5 orbitals. Each orbital can hold 2 electrons, for a total of 10.",
            neetFrequency: 1
        },
        {
            question: "The photoelectric effect provides evidence for:",
            options: ["A. The wave nature of light", "B. The particle nature of light", "C. The wave nature of electrons", "D. The dual nature of electrons"],
            answer: "B. The particle nature of light",
            explanation: "Features of the photoelectric effect, like the threshold frequency and instantaneous emission, can only be explained if light consists of discrete energy packets (photons).",
            neetFrequency: 3
        },
        {
            question: "Which principle is violated in the configuration 1s² 2s¹ 2p⁴?",
            options: ["A. Aufbau Principle", "B. Hund's Rule", "C. Pauli Exclusion Principle", "D. None of the above"],
            answer: "A. Aufbau Principle",
            explanation: "The Aufbau principle states that orbitals of lower energy should be filled first. The 2s orbital should be completely filled before electrons are placed in the 2p orbital.",
            neetFrequency: 3
        },
        {
            question: "The Lyman series of the hydrogen spectrum corresponds to transitions to the state:",
            options: ["A. n=1", "B. n=2", "C. n=3", "D. n=4"],
            answer: "A. n=1",
            explanation: "The Lyman series consists of all transitions that end at the n=1 ground state.",
            neetFrequency: 2
        },
        {
            question: "Which of the following orbitals is not possible?",
            options: ["A. 2p", "B. 3f", "C. 4d", "D. 5s"],
            answer: "B. 3f",
            explanation: "For the f-orbital, l=3. The rule is n > l. For n=3, the maximum value of l is 2 (d-orbital). Therefore, a 3f orbital is not possible.",
            neetFrequency: 3
        }
    ],
    assertionReasons: [
        {
            assertion: "It is impossible to determine the exact position and momentum of an electron simultaneously.",
            reason: "The path of an electron in an atom is not clearly defined.",
            answer: "B",
            explanation: "Both statements are true according to the quantum mechanical model. The assertion is Heisenberg's Uncertainty Principle. The reason is a consequence of the wave nature of the electron. However, the reason is not the direct explanation for the uncertainty principle, which is a fundamental property of wave-particle duality itself.",
            neetFrequency: 3
        },
        {
            assertion: "The energy of an electron is taken to be negative for any bound orbit.",
            reason: "The energy of an electron at infinity is taken to be zero.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. Since the electron is bound to the nucleus, work must be done to move it to infinity (where PE=0). Therefore, its energy in the bound state must be negative.",
            neetFrequency: 4
        },
        {
            assertion: "A 3d orbital has higher energy than a 4s orbital.",
            reason: "The energy of an orbital is determined by the (n+l) rule.",
            answer: "D",
            explanation: "The assertion is false. According to the (n+l) rule, the 4s orbital (n+l = 4+0=4) has lower energy than the 3d orbital (n+l = 3+2=5), so 4s is filled first. The reason is a true statement.",
            neetFrequency: 4
        },
        {
            assertion: "The configuration of Cr is [Ar] 4s¹ 3d⁵.",
            reason: "Half-filled and fully-filled orbitals have extra stability.",
            answer: "A",
            explanation: "The assertion states the correct exceptional configuration for Chromium. The reason is also true and is the correct explanation for this exception.",
            neetFrequency: 5
        },
        {
            assertion: "The p_z orbital is spherically symmetric.",
            reason: "The angular probability distribution is independent of the angles θ and φ.",
            answer: "D",
            explanation: "The assertion is false. Only s-orbitals are spherically symmetric. The p_z orbital has a dumbbell shape along the z-axis. The reason is also false; the probability distribution for p_z depends on the angle θ.",
            neetFrequency: 2
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Principal quantum number (n)", "(b) Azimuthal quantum number (l)", "(c) Magnetic quantum number (m_l)", "(d) Spin quantum number (m_s)"],
            column2: ["(p) Shape of orbital", "(q) Orientation of orbital", "(r) Spin of electron", "(s) Size and energy of shell"],
            answer: "a-s, b-p, c-q, d-r",
            explanation: "Matching the quantum numbers with the properties they describe.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Lyman series", "(b) Balmer series", "(c) Paschen series", "(d) Brackett series"],
            column2: ["(p) Infrared region", "(q) Visible region", "(r) Ultraviolet region", "(s) n_f = 2"],
            answer: "a-r, b-q,s; c-p; d-p",
            explanation: "Matching the spectral series with their final state (n_f) and the region of the EM spectrum they belong to. Balmer series ends at n=2 and is in the visible region.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Aufbau Principle", "(b) Hund's Rule", "(c) Pauli Exclusion Principle", "(d) Heisenberg's Principle"],
            column2: ["(p) No two electrons can have the same four quantum numbers", "(q) Electrons fill orbitals of lowest energy first", "(r) Δx · Δp ≥ h/4π", "(s) Pairing occurs after all orbitals are half-filled"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the fundamental principles with their correct statements.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Number of orbitals in a shell", "(b) Number of electrons in a shell", "(c) Number of orbitals in a subshell", "(d) Number of electrons in a subshell"],
            column2: ["(p) 2(2l+1)", "(q) 2n²", "(r) 2l+1", "(s) n²"],
            answer: "a-s, b-q, c-r, d-p",
            explanation: "Matching the quantities with their respective formulas based on quantum numbers n and l.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Rutherford", "(b) J.J. Thomson", "(c) Bohr", "(d) de Broglie"],
            column2: ["(p) Plum pudding model", "(q) Wave nature of matter", "(r) Discovery of nucleus", "(s) Quantized orbits"],
            answer: "a-r, b-p, c-s, d-q",
            explanation: "Matching the scientists with their key contributions to atomic theory.",
            neetFrequency: 2
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}",
                description: "Energy of an electron in the nth orbit for a hydrogen-like atom.",
                descriptionTamil: "ஹைட்ரஜன் போன்ற அணுவிற்கு n-வது சுற்றுப்பாதையில் உள்ள எலக்ட்ரானின் ஆற்றல்."
            },
            {
                formula: "\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}",
                description: "Heisenberg's Uncertainty Principle.",
                descriptionTamil: "ஹைசன்பர்க்கின் நிச்சயமற்ற கோட்பாடு."
            },
            {
                formula: "\\lambda = \\frac{h}{mv}",
                description: "de Broglie Wavelength",
                descriptionTamil: "டி பிராய் அலைநீளம்"
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The modern model of the atom is based on quantum mechanics, where electrons exhibit wave-particle duality.",
        "Quantum numbers describe the energy state and location of an electron in an atom.",
        "Electron configuration follows specific rules (Aufbau, Pauli, Hund) that determine the chemical properties of an element."
    ],
    mnemonics: [
        {
            text: "To remember the order of filling orbitals: 'School, School, Public School, Public School, Delhi Public School, Delhi Public School...'. This gives the sequence s, s, p, s, p, s, d, p, s, d...",
            tamil: "ஆர்பிட்டால்களை நிரப்பும் வரிசையை நினைவில் கொள்ள: 'பள்ளி, பள்ளி, பொதுப் பள்ளி, பொதுப் பள்ளி, டெல்லி பொதுப் பள்ளி, டெல்லி பொதுப் பள்ளி...'. இது s, s, p, s, p, s, d, p, s, d... என்ற வரிசையைத் தருகிறது."
        }
    ],
    neetTips: [
        {
            text: "Questions related to quantum numbers and identifying valid/invalid sets are very common. Practice them thoroughly.",
            tamil: "குவாண்டம் எண்கள் மற்றும் செல்லுபடியாகும்/செல்லுபடியாகாத தொகுப்புகளை அடையாளம் காண்பது தொடர்பான கேள்விகள் மிகவும் பொதுவானவை. அவற்றை முழுமையாகப் பயிற்சி செய்யுங்கள்."
        }
    ],
    studentTip: {
        english: "Try to visualize the shapes of s, p, and d orbitals. Understanding their geometry helps in understanding chemical bonding later.",
        tamil: "s, p, மற்றும் d ஆர்பிட்டால்களின் வடிவங்களைக் கற்பனை செய்து பார்க்க முயற்சி செய்யுங்கள். அவற்றின் வடிவவியலைப் புரிந்துகொள்வது பின்னர் வேதிப் பிணைப்பைப் புரிந்துகொள்ள உதவுகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why are the concepts of 'orbit' from Bohr's model and 'orbital' from the quantum mechanical model fundamentally different? What does each one represent?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: போரின் மாதிரியிலிருந்து 'சுற்றுப்பாதை' மற்றும் குவாண்டம் இயக்கவியல் மாதிரியிலிருந்து 'ஆர்பிட்டால்' என்ற கருத்துக்கள் ஏன் அடிப்படையில் வேறுபடுகின்றன? ஒவ்வொன்றும் எதைக் குறிக்கிறது?"
    },
    nextChapter: {
        title: "Chemical Bonding and Molecular Structure",
        titleTamil: "வேதிப் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு"
    },
    validationReport: []
};
