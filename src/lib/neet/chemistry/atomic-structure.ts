
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
        }
    ],
    mcqs: [
        {
            question: "The number of orbitals in the n=3 shell is:",
            options: ["A. 3", "B. 6", "C. 9", "D. 12"],
            answer: "C. 9",
            explanation: "The number of orbitals in a shell is given by n². For n=3, the number of orbitals is 3² = 9 (one 3s, three 3p, and five 3d orbitals).",
            neetFrequency: 4
        }
    ],
    assertionReasons: [
        {
            assertion: "It is impossible to determine the exact position and momentum of an electron simultaneously.",
            reason: "The path of an electron in an atom is not clearly defined.",
            answer: "B",
            explanation: "Both statements are true according to the quantum mechanical model. The assertion is Heisenberg's Uncertainty Principle. The reason is a consequence of the wave nature of the electron. However, the reason is not the direct explanation for the uncertainty principle, which is a fundamental property of wave-particle duality itself.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Aufbau Principle", "(b) Pauli Exclusion Principle", "(c) Hund's Rule", "(d) Heisenberg's Principle"],
            column2: ["(p) No two electrons can have the same four quantum numbers", "(q) Pairing of electrons starts only when all orbitals of a subshell are half-filled", "(r) Orbitals are filled in order of increasing energy", "(s) Uncertainty in position and momentum"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the principles of atomic structure with their correct statements.",
            neetFrequency: 5
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
        tamil: "s, p, மற்றும் d ஆர்பிட்டால்களின் வடிவங்களைக் கற்பனை செய்து பார்க்க চেষ্টা செய்யுங்கள். அவற்றின் வடிவவியலைப் புரிந்துகொள்வது பின்னர் வேதிப் பிணைப்பைப் புரிந்துகொள்ள உதவுகிறது."
    },
    nextChapter: {
        title: "Chemical Bonding and Molecular Structure",
        titleTamil: "வேதிப் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு"
    },
    validationReport: []
};
