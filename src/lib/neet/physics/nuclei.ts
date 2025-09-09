
import type { NeetModule } from '@/lib/types';

export const nucleiModule: NeetModule = {
    id: 'neet-physics-nuclei',
    title: 'Physics - Nuclei (அணுக்கருக்கள்)',
    chapter: 'Nuclei',
    subject: 'Physics',
    learningObjectives: [
        "Describe the composition and size of the nucleus.",
        "Understand the concepts of mass-energy equivalence (E=mc²), mass defect, and binding energy.",
        "Analyze the binding energy per nucleon curve and its implications for nuclear stability, fission, and fusion.",
        "Understand the law of radioactive decay, half-life, and mean life.",
        "Differentiate between alpha, beta, and gamma decay.",
        "Understand the principles of nuclear fission and nuclear fusion as sources of energy."
    ],
    prerequisites: [
        "Basic concepts from 'Atoms'.",
        "Understanding of conservation laws (energy, momentum, charge)."
    ],
    conceptOverview: "This chapter focuses on the heart of the atom: the nucleus. We explore its composition (protons and neutrons) and the immense forces that hold it together. The concepts of mass defect and binding energy are introduced, revealing the source of nuclear energy through Einstein's famous equation, E=mc². The binding energy curve is a crucial tool for understanding why some nuclei are stable and why processes like nuclear fission (splitting of a heavy nucleus) and nuclear fusion (joining of light nuclei) release enormous amounts of energy. We will also study radioactivity—the spontaneous decay of unstable nuclei—and the mathematical law that governs this random process.",
    tamilConnection: "சூரியன் ஒளிர்வது முதல், அணு உலைகளில் மின்சாரம் தயாரிப்பது வரை, அணுக்கருவின் ஆற்றலே அடிப்படை. ஒரு அணுக்கருவின் நிறையை விட, அதன் தனித்த நியூக்ளியான்களின் (புரோட்டான், நியூட்ரான்) மொத்த நிறை அதிகமாக இருக்கும். இந்த நிறை வேறுபாடு (mass defect) தான், E=mc² என்ற சமன்பாட்டின்படி, பிணைப்பு ஆற்றலாக (binding energy) மாறுகிறது. இந்த ஆற்றலின் வெளிப்பாடே அணுக்கருப் பிளவு (fission) மற்றும் இணைவு (fusion) ஆகும்.",
    culturalContext: "The Kalpakkam Atomic Power Station is a major source of electricity for Tamil Nadu. It operates on the principle of nuclear fission, where the controlled splitting of uranium nuclei releases a massive amount of energy to produce steam and turn turbines. This chapter explains the fundamental nuclear physics that powers such technologies.",
    syllabusMapping: [
         {
            topic: 'Atoms & Nuclei',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 8: Atomic and Nuclear Physics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 13: Nuclei',
            notes: 'Radioactive decay law, half-life, and binding energy calculations are very important for NEET. The binding energy curve and its consequences (fission/fusion) are key conceptual areas.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 17'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Composition and Size of the Nucleus (அணுக்கருவின் அமைப்பு மற்றும் அளவு)
*   **Nucleons (நியூக்ளியான்கள்):** Protons and neutrons, which reside in the nucleus.
*   **Atomic Number (Z) (அணு எண்):** Number of protons.
*   **Mass Number (A) (நிறை எண்):** Total number of protons and neutrons (nucleons). A = Z + N.
*   **Nuclear Radius (அணுக்கரு ஆரம்):** The radius of the nucleus is proportional to the cube root of the mass number.
    $$ R = R_0 A^{1/3} $$
    where $R_0 \\approx 1.2 \\times 10^{-15} \\text{ m} = 1.2$ fm (fermi).
*   **Nuclear Density (அணுக்கரு அடர்த்தி):** The density of the nucleus is nearly constant for all nuclei and is extremely high (≈ $2.3 \\times 10^{17} \\text{ kg/m³}$).`
        },
        {
            english: `### 2. Mass-Energy Equivalence and Binding Energy (நிறை-ஆற்றல் சமன்பாடு மற்றும் பிணைப்பு ஆற்றல்)
*   **Mass-Energy Equivalence:** Einstein showed that mass is another form of energy. $E = mc^2$.
*   **Atomic Mass Unit (amu or u):** $1 \\text{ u} = 1.660539 \\times 10^{-27} \\text{ kg}$. The energy equivalent of 1 u is $931.5 \\text{ MeV}/c^2$.
*   **Mass Defect ($\\Delta m$) (நிறைக் குறைபாடு):** The mass of a nucleus is always slightly less than the sum of the masses of its constituent free nucleons. This difference in mass is called the mass defect.
    $$ \\Delta m = [Zm_p + (A-Z)m_n] - M_{nucleus} $$
*   **Binding Energy (B.E.) (பிணைப்பு ஆற்றல்):** The energy equivalent of the mass defect. It is the energy required to break a nucleus into its constituent protons and neutrons.
    $$ B.E. = \\Delta m \\cdot c^2 = \\{[Zm_p + (A-Z)m_n] - M_{nucleus}\\} c^2 $$`
        },
        {
            english: `### 3. Binding Energy Curve (பிணைப்பு ஆற்றல் வளைகோடு)
A graph of binding energy per nucleon (B.E./A) versus mass number (A).
*   **Key Features:**
    *   The B.E. per nucleon is low for light nuclei.
    *   It increases rapidly and reaches a maximum value of about 8.8 MeV for nuclei around A=56 (Iron).
    *   It then slowly decreases for heavier nuclei.
*   **Implications:**
    *   **Nuclear Stability:** Nuclei with a higher B.E. per nucleon are more stable. Iron is one of the most stable nuclei.
    *   **Nuclear Fusion (அணுக்கரு இணைவு):** When light nuclei (like hydrogen) combine to form a heavier nucleus, the B.E. per nucleon increases, and energy is released. This powers the Sun.
    *   **Nuclear Fission (அணுக்கருப் பிளவு):** When a heavy nucleus (like uranium) splits into two or more lighter nuclei, the B.E. per nucleon of the products is higher than the parent, and energy is released. This is used in nuclear reactors.`
        },
        {
            english: `### 4. Radioactivity (கதிரியக்கம்)
The spontaneous disintegration of the nuclei of heavy elements.
*   **Law of Radioactive Decay:** The rate of decay is directly proportional to the number of undecayed nuclei present at that instant.
    $$ \\frac{dN}{dt} = -\\lambda N \\implies N(t) = N_0 e^{-\\lambda t} $$
    where N₀ is the initial number of nuclei and λ is the **decay constant (சிதைவு மாறிலி)**.
*   **Half-Life ($T_{1/2}$):** The time in which half of the radioactive nuclei disintegrate.
    $$ T_{1/2} = \\frac{\\ln(2)}{\\lambda} = \\frac{0.693}{\\lambda} $$
*   **Mean Life or Average Life ($\\tau$):** The average lifetime of a nucleus.
    $$ \\tau = \\frac{1}{\\lambda} = \\frac{T_{1/2}}{0.693} $$
*   **Activity (A) (செயல்பாடு):** The rate of decay. $A = \\lambda N$. Unit: Becquerel (Bq) or Curie (Ci).`
        },
        {
            english: `### 5. Alpha, Beta, and Gamma Decay (ஆல்பா, பீட்டா மற்றும் காமா சிதைவு)
*   **Alpha Decay:** Emission of a helium nucleus ($₂^4\\text{He}$). The daughter nucleus has Z reduced by 2 and A reduced by 4.
*   **Beta Decay:**
    *   **β⁻ Decay:** A neutron converts into a proton, emitting an electron ($_{-1}^0e$) and an antineutrino. Z increases by 1, A remains the same.
    *   **β⁺ Decay:** A proton converts into a neutron, emitting a positron ($_{+1}^0e$) and a neutrino. Z decreases by 1, A remains the same.
*   **Gamma Decay:** Emission of a high-energy photon (gamma ray). It occurs when a nucleus de-excites from a higher energy state to a lower energy state. Z and A remain unchanged.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Half-Life Calculation",
            titleTamil: "நீட் நிலை: அரை ஆயுள் கணக்கீடு",
            difficulty: 'Easy',
            problem: "The half-life of a radioactive substance is 20 minutes. What is the time interval between 33% decay and 67% decay?",
            problemTamil: "ஒரு கதிரியக்கப் பொருளின் அரை ஆயுள் 20 நிமிடங்கள். 33% சிதைவுக்கும் 67% சிதைவுக்கும் இடையிலான கால இடைவெளி என்ன?",
            solutionSteps: [
                { step: 1, explanation: "At 33% decay, the fraction of the substance remaining is N₁/N₀ = 1 - 0.33 = 0.67 (approximately 2/3).", explanationTamil: "33% சிதைவில், மீதமுள்ள பொருளின் பின்னம் N₁/N₀ = 1 - 0.33 = 0.67 (தோராயமாக 2/3)." },
                { step: 2, explanation: "At 67% decay, the fraction of the substance remaining is N₂/N₀ = 1 - 0.67 = 0.33 (approximately 1/3).", explanationTamil: "67% சிதைவில், மீதமுள்ள பொருளின் பின்னம் N₂/N₀ = 1 - 0.67 = 0.33 (தோராயமாக 1/3)." },
                { step: 3, explanation: "Notice that the amount remaining at the second point (1/3) is half the amount remaining at the first point (2/3).", calculation: "N₂ = (1/2)N₁" },
                { step: 4, explanation: "The time taken for the number of nuclei to become half is, by definition, one half-life.", explanationTamil: "அணுக்கருக்களின் எண்ணிக்கை பாதியாக ஆகும் நேரம், வரையறையின்படி, ஒரு அரை ஆயுள் ஆகும்." },
                { step: 5, explanation: "Therefore, the time interval between these two points is one half-life, which is 20 minutes.", calculation: "Time interval = T_{1/2} = 20 minutes" }
            ],
            neetHack: "For decay problems, focus on the fraction remaining: N₀ → N₀/2 → N₀/4 → N₀/8... Each step takes one half-life. Here, the amount goes from ~2/3 to ~1/3, which is a halving, so the time taken is one half-life.",
            commonPitfall: "Trying to solve using the formula N=N₀e⁻ˡᵗ for both points. Recognizing the halving relationship is much faster."
        },
        {
            title: "JEE Level: Binding Energy Calculation",
            titleTamil: "ஜே.இ.இ நிலை: பிணைப்பு ஆற்றல் கணக்கீடு",
            difficulty: 'Medium',
            problem: "Calculate the binding energy per nucleon for an alpha particle ($₂^4He$) from the following data: Mass of proton = 1.007276 u, Mass of neutron = 1.008665 u, Mass of Helium nucleus = 4.001506 u.",
            problemTamil: "பின்வரும் தரவுகளிலிருந்து ஒரு ஆல்பா துகளுக்கு ($₂^4He$) ஒரு நியூக்ளியானுக்கான பிணைப்பு ஆற்றலைக் கணக்கிடுக: புரோட்டான் நிறை = 1.007276 u, நியூட்ரான் நிறை = 1.008665 u, ஹீலியம் அணுக்கரு நிறை = 4.001506 u.",
            solutionSteps: [
                { step: 1, explanation: "An alpha particle has 2 protons and 2 neutrons.", explanationTamil: "ஒரு ஆல்பா துகளில் 2 புரோட்டான்கள் மற்றும் 2 நியூட்ரான்கள் உள்ளன." },
                { step: 2, explanation: "Calculate the total mass of the constituent nucleons.", calculation: "Mass of 2 protons = 2 × 1.007276 = 2.014552 u\\\\Mass of 2 neutrons = 2 × 1.008665 = 2.017330 u\\\\Total nucleon mass = 2.014552 + 2.017330 = 4.031882 u" },
                { step: 3, explanation: "Calculate the mass defect (Δm) = (Total nucleon mass) - (Mass of nucleus).", calculation: "Δm = 4.031882 u - 4.001506 u = 0.030376 u" },
                { step: 4, explanation: "Convert the mass defect into energy (Binding Energy). Use the conversion 1 u = 931.5 MeV/c².", calculation: "B.E. = Δm × 931.5 MeV = 0.030376 × 931.5 MeV ≈ 28.3 MeV" },
                { step: 5, explanation: "Calculate the binding energy per nucleon by dividing the total B.E. by the mass number (A=4).", calculation: "B.E./nucleon = 28.3 MeV / 4 ≈ 7.075 MeV/nucleon" }
            ],
            commonPitfall: "Using the mass of the atom instead of the nucleus, or vice versa. Be careful about what mass is given in the problem."
        },
        {
            title: "NEET Level: Radioactive Decay Law",
            titleTamil: "நீட் நிலை: கதிரியக்கச் சிதைவு விதி",
            difficulty: 'Easy',
            problem: "The decay constant of a radioactive sample is λ. What fraction of the original sample will remain undecayed after a time t = 1/λ?",
            problemTamil: "ஒரு கதிரியக்க மாதிரியின் சிதைவு மாறிலி λ ஆகும். t = 1/λ நேரத்திற்குப் பிறகு, அசல் மாதிரியின் எந்தப் பின்னம் சிதையாமல் இருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Start with the law of radioactive decay: N = N₀e^(-λt).", explanationTamil: "கதிரியக்கச் சிதைவு விதியுடன் தொடங்கவும்: N = N₀e^(-λt)." },
                { step: 2, explanation: "We need to find the fraction remaining, which is N/N₀.", calculation: "N/N₀ = e^(-λt)" },
                { step: 3, explanation: "Substitute the given time t = 1/λ into the equation.", calculation: "N/N₀ = e^(-λ * (1/λ)) = e⁻¹" },
                { step: 4, explanation: "The fraction remaining is 1/e.", explanationTamil: "மீதமுள்ள பின்னம் 1/e ஆகும்." }
            ],
            neetHack: "The time t = 1/λ is the mean life (τ). After one mean life, the number of active nuclei becomes 1/e (or about 37%) of the original number. This is a standard result worth remembering."
        },
        {
            title: "JEE Level: Q-Value of a Reaction",
            titleTamil: "ஜே.இ.இ நிலை: ஒரு வினையின் Q-மதிப்பு",
            difficulty: "Medium",
            problem: "Find the Q-value of the nuclear reaction: ¹H + ³H → ²H + ²H. Given masses: m(¹H)=1.007825 u, m(³H)=3.016049 u, m(²H)=2.014102 u.",
            problemTamil: "¹H + ³H → ²H + ²H என்ற அணுக்கரு வினையின் Q-மதிப்பைக் கண்டறியவும். கொடுக்கப்பட்ட நிறைகள்: m(¹H)=1.007825 u, m(³H)=3.016049 u, m(²H)=2.014102 u.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The Q-value of a reaction is the energy released, given by Q = (Mass_reactants - Mass_products) * c². If Q is positive, energy is released (exothermic). If Q is negative, energy is absorbed (endothermic).",
                    explanationTamil: "ஒரு வினையின் Q-மதிப்பு என்பது வெளியிடப்பட்ட ஆற்றல் ஆகும், Q = (வினைபடு பொருட்களின் நிறை - வினைவிளை பொருட்களின் நிறை) * c² என கொடுக்கப்பட்டுள்ளது. Q நேர்மறையாக இருந்தால், ஆற்றல் வெளியிடப்படுகிறது. Q எதிர்மறையாக இருந்தால், ஆற்றல் உறிஞ்சப்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "Calculate the total mass of the reactants.",
                    calculation: "Mass_reactants = m(¹H) + m(³H) = 1.007825 + 3.016049 = 4.023874 u"
                },
                {
                    step: 3,
                    explanation: "Calculate the total mass of the products.",
                    calculation: "Mass_products = m(²H) + m(²H) = 2 * 2.014102 = 4.028204 u"
                },
                {
                    step: 4,
                    explanation: "Calculate the mass difference, Δm = Mass_reactants - Mass_products.",
                    calculation: "Δm = 4.023874 - 4.028204 = -0.00433 u"
                },
                {
                    step: 5,
                    explanation: "Calculate the Q-value in MeV by multiplying Δm by 931.5 MeV/u.",
                    calculation: "Q = -0.00433 u * 931.5 MeV/u ≈ -4.033 MeV"
                },
                 {
                    step: 6,
                    explanation: "Since the Q-value is negative, the reaction is endothermic and requires 4.033 MeV of energy to proceed.",
                    explanationTamil: "Q-மதிப்பு எதிர்மறையாக இருப்பதால், வினை வெப்பம் கொள் செயல்முறை ஆகும் மற்றும் தொடர 4.033 MeV ஆற்றல் தேவைப்படுகிறது."
                }
            ]
        },
        {
            title: "NEET Level: Nuclear Radius",
            titleTamil: "நீட் நிலை: அணுக்கரு ஆரம்",
            difficulty: "Easy",
            problem: "The ratio of the radii of the nuclei of ¹³Al²⁷ and ⁵²Te¹²⁵ is approximately:",
            problemTamil: "¹³Al²⁷ மற்றும் ⁵²Te¹²⁵ ஆகியவற்றின் அணுக்கருக்களின் ஆரங்களின் விகிதம் தோராயமாக:",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The nuclear radius is given by the formula R = R₀A¹/³.",
                    explanationTamil: "அணுக்கரு ஆரம் R = R₀A¹/³ என்ற சூத்திரத்தால் கொடுக்கப்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "This means the radius is proportional to the cube root of the mass number (A).",
                    calculation: "R ∝ A¹/³"
                },
                {
                    step: 3,
                    explanation: "Set up the ratio of the radii.",
                    calculation: "\\frac{R_{Al}}{R_{Te}} = (\\frac{A_{Al}}{A_{Te}})^{1/3} = (\\frac{27}{125})^{1/3}"
                },
                {
                    step: 4,
                    explanation: "Calculate the cube root.",
                    calculation: "\\frac{R_{Al}}{R_{Te}} = \\frac{\\sqrt[3]{27}}{\\sqrt[3]{125}} = \\frac{3}{5}"
                },
                {
                    step: 5,
                    explanation: "The ratio is 3:5.",
                    explanationTamil: "விகிதம் 3:5 ஆகும்."
                }
            ]
        }
    ],
    mcqs: [
        { question: "The radius of a nucleus is proportional to:", options: ["A. A", "B. A²", "C. A¹/³", "D. A²³/³"], answer: "C. A¹/³", explanation: "The nuclear radius is given by R = R₀A¹/³, where A is the mass number.", neetFrequency: 4 },
        { question: "The energy equivalent of 1 atomic mass unit (amu) is approximately:", options: ["A. 1.6 x 10⁻¹⁹ J", "B. 931.5 MeV", "C. 13.6 eV", "D. 3 x 10⁸ J"], answer: "B. 931.5 MeV", explanation: "Using E=mc², the energy equivalent of 1 amu is about 931.5 MeV.", neetFrequency: 3 },
        { question: "The process of splitting a heavy nucleus into two lighter nuclei is called:", options: ["A. Nuclear fusion", "B. Nuclear fission", "C. Beta decay", "D. Chain reaction"], answer: "B. Nuclear fission", explanation: "This is the definition of nuclear fission.", neetFrequency: 5 },
        { question: "In the nuclear reaction, X → Y + $₂^₄He$, the particle X is:", options: ["A. An alpha particle", "B. A beta particle", "C. A proton", "D. A nucleus"], answer: "D. A nucleus", explanation: "This represents alpha decay, where a parent nucleus X decays into a daughter nucleus Y and an alpha particle.", neetFrequency: 2},
        { question: "The half-life of a radioactive substance is 10 days. The time taken for 7/8 of the original mass to disintegrate is:", options: ["A. 10 days", "B. 20 days", "C. 30 days", "D. 40 days"], answer: "C. 30 days", explanation: "If 7/8 disintegrates, 1/8 remains. N₀ → N₀/2 (1 T₁/₂) → N₀/4 (2 T₁/₂) → N₀/8 (3 T₁/₂). It takes 3 half-lives. 3 * 10 = 30 days.", neetFrequency: 5 },
        { question: "The binding energy per nucleon is maximum for:", options: ["A. Helium", "B. Iron", "C. Uranium", "D. Hydrogen"], answer: "B. Iron", explanation: "The binding energy curve peaks around A=56, which corresponds to iron, making it one of the most stable nuclei.", neetFrequency: 4 },
        { question: "Which of the following is not emitted during radioactive decay?", options: ["A. Alpha particles", "B. Beta particles", "C. Gamma rays", "D. Protons"], answer: "D. Protons", explanation: "Alpha, beta, and gamma emissions are the three primary types of radioactive decay. Proton emission is a very rare type of decay not typically considered standard.", neetFrequency: 2 },
        { question: "The law of radioactive decay is given by N = N₀e⁻ˡᵗ. The term λ represents:", options: ["A. Half-life", "B. Mean life", "C. Decay constant", "D. Wavelength"], answer: "C. Decay constant", explanation: "λ is the decay constant, which determines the rate of decay.", neetFrequency: 3 },
        { question: "In β⁻ decay, a:", options: ["A. Proton converts to a neutron", "B. Neutron converts to a proton", "C. Nucleus emits an electron from its orbit", "D. Nucleus emits a positron"], answer: "B. Neutron converts to a proton", explanation: "In β⁻ decay, a neutron within the nucleus transforms into a proton, an electron (the beta particle), and an antineutrino.", neetFrequency: 4 },
        { question: "The density of a nucleus is:", options: ["A. Proportional to A", "B. Proportional to A²", "C. Proportional to 1/A", "D. Nearly constant for all nuclei"], answer: "D. Nearly constant for all nuclei", explanation: "Since radius R ∝ A¹/³ and mass M ∝ A, the density ρ = M/V ∝ A/(R³) ∝ A/(A¹/³)³ = A/A = constant.", neetFrequency: 3 },
        { question: "The relationship between half-life (T₁/₂) and decay constant (λ) is:", options: ["A. T₁/₂ = λ", "B. T₁/₂ = 1/λ", "C. T₁/₂ = 0.693/λ", "D. T₁/₂ = 0.693λ"], answer: "C. T₁/₂ = 0.693/λ", explanation: "The half-life is inversely proportional to the decay constant, with the constant of proportionality being ln(2) ≈ 0.693.", neetFrequency: 5 },
        { question: "The sun's energy is due to:", options: ["A. Nuclear fission", "B. Nuclear fusion", "C. Chemical reactions", "D. Radioactive decay"], answer: "B. Nuclear fusion", explanation: "The sun and other stars generate energy by fusing light nuclei, primarily hydrogen, into helium.", neetFrequency: 4 },
        { question: "Which of the following has the highest penetrating power?", options: ["A. Alpha particles", "B. Beta particles", "C. Gamma rays", "D. Protons"], answer: "C. Gamma rays", explanation: "Gamma rays are high-energy photons and have the greatest penetrating power, followed by beta particles, and then alpha particles.", neetFrequency: 3 },
        { question: "If the binding energy per nucleon for ¹²C is 7.68 MeV and for ¹³C is 7.47 MeV, the energy required to remove a neutron from ¹³C is:", options: ["A. 4.96 MeV", "B. 0.21 MeV", "C. 15.15 MeV", "D. 1.21 MeV"], answer: "A. 4.96 MeV", explanation: "Energy = B.E(¹³C) - B.E(¹²C) = (13 * 7.47) - (12 * 7.68) = 97.11 - 92.16 = 4.95 MeV.", neetFrequency: 3 },
        { question: "The unit of activity of a radioactive substance is:", options: ["A. Joule", "B. Henry", "C. Becquerel", "D. Tesla"], answer: "C. Becquerel", explanation: "The SI unit of activity is the Becquerel (Bq), where 1 Bq = 1 decay per second. The Curie (Ci) is another common unit.", neetFrequency: 1 },
        { question: "After two half-lives, the fraction of the radioactive nuclei remaining is:", options: ["A. 1/2", "B. 1/4", "C. 1/8", "D. 0"], answer: "B. 1/4", explanation: "After 1 half-life, 1/2 remains. After 2 half-lives, (1/2) * (1/2) = 1/4 remains.", neetFrequency: 5 },
        { question: "The mass defect per nucleon is called:", options: ["A. Packing fraction", "B. Binding energy", "C. Mass number", "D. Isotope number"], answer: "A. Packing fraction", explanation: "Packing fraction is defined as (M-A)/A, which is related to the mass defect per nucleon.", neetFrequency: 1 },
        { question: "The force holding the nucleons together in a nucleus is:", options: ["A. Gravitational", "B. Electromagnetic", "C. Strong Nuclear", "D. Weak Nuclear"], answer: "C. Strong Nuclear", explanation: "The strong nuclear force is the fundamental force that binds protons and neutrons together in the nucleus.", neetFrequency: 2 },
        { question: "The atomic number Z of a nucleus changes during which type of decay?", options: ["A. Alpha decay only", "B. Beta decay only", "C. Both alpha and beta decay", "D. Gamma decay only"], answer: "C. Both alpha and beta decay", explanation: "In alpha decay, Z decreases by 2. In beta decay, Z changes by +1 or -1. In gamma decay, Z does not change.", neetFrequency: 3 },
        { question: "The half-life of a substance is 30 days. The time taken for 3/4 of its original mass to disintegrate is:", options: ["A. 30 days", "B. 45 days", "C. 60 days", "D. 90 days"], answer: "C. 60 days", explanation: "If 3/4 disintegrates, 1/4 remains. This takes two half-lives. 2 * 30 = 60 days.", neetFrequency: 5 },
        { question: "The process of a pair of electron and positron annihilating to form two gamma rays is an example of:", options: ["A. Mass-energy conversion", "B. Charge conservation", "C. Momentum conservation", "D. All of the above"], answer: "D. All of the above", explanation: "This process converts mass into energy (E=mc²), conserves charge (net charge is zero before and after), and conserves momentum.", neetFrequency: 2 },
        { question: "The mean life (τ) and half-life (T₁/₂) are related by:", options: ["A. τ = T₁/₂", "B. τ = 0.693 * T₁/₂", "C. T₁/₂ = 0.693 * τ", "D. τ = 2 * T₁/₂"], answer: "C. T₁/₂ = 0.693 * τ", explanation: "τ = 1/λ and T₁/₂ = 0.693/λ. Therefore, T₁/₂ = 0.693τ.", neetFrequency: 4 },
        { question: "Heavy water is used in nuclear reactors as a:", options: ["A. Fuel", "B. Coolant", "C. Moderator", "D. Both B and C"], answer: "D. Both B and C", explanation: "Heavy water (D₂O) is an excellent moderator (it slows down neutrons effectively) and is also used as a coolant to transfer heat.", neetFrequency: 1 },
        { question: "Isotopes of an element have:", options: ["A. Same number of protons, different number of neutrons", "B. Same number of neutrons, different number of protons", "C. Same number of protons and neutrons", "D. Different number of protons and neutrons"], answer: "A. Same number of protons, different number of neutrons", explanation: "Isotopes have the same atomic number (Z) but different mass numbers (A), meaning they differ in the number of neutrons.", neetFrequency: 3 },
        { question: "Which of the following pairs are isobars?", options: ["A. ¹H¹ and ¹H²", "B. ¹²C⁶ and ¹⁴C⁶", "C. ⁴⁰Ar¹⁸ and ⁴⁰Ca²⁰", "D. ³He² and ⁴He²"], answer: "C. ⁴⁰Ar¹⁸ and ⁴⁰Ca²⁰", explanation: "Isobars are nuclides of different elements having the same mass number (A). Both Argon-40 and Calcium-40 have A=40.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "The density of a nucleus is independent of its mass number.", reason: "The radius of a nucleus is proportional to the cube root of its mass number.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Since ρ = M/V and M ∝ A and V ∝ R³ ∝ (A¹/³)³, we get ρ ∝ A/A = constant.", neetFrequency: 3 },
        { assertion: "Nuclear forces are short-range forces.", reason: "The binding energy per nucleon is roughly constant for nuclei with mass numbers between 30 and 170.", answer: "B", explanation: "Both statements are true. The saturation property of nuclear forces (a nucleon interacts only with its immediate neighbors) leads to the near-constant B.E./A, and this saturation is a consequence of the short-range nature. However, the reason is more a consequence than an explanation of the assertion.", neetFrequency: 2 },
        { assertion: "It is not possible to have a fusion reaction of two heavy nuclei.", reason: "The binding energy per nucleon for heavy nuclei is less than that for medium-sized nuclei.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Fusing two heavy nuclei would result in a product with even lower binding energy per nucleon, meaning the process would require a huge input of energy rather than releasing it.", neetFrequency: 4 },
        { assertion: "Gamma rays are electromagnetic radiations.", reason: "Gamma rays are emitted by the nucleus.", answer: "B", explanation: "Both statements are true. Gamma rays are high-energy photons. They are emitted from an excited nucleus. However, the reason doesn't explain why they are electromagnetic radiations.", neetFrequency: 3 },
        { assertion: "The half-life of a radioactive substance is a constant.", reason: "The rate of decay is proportional to the number of active nuclei.", answer: "A", explanation: "Assertion is true. Reason is also true (the law of radioactive decay) and is the correct explanation. Because the decay is a first-order process, the time for half the sample to decay is a constant, independent of the initial amount.", neetFrequency: 4 }
    ],
    matchTheColumns: [
        { column1: ["(a) Alpha Decay", "(b) Beta-minus Decay", "(c) Gamma Decay", "(d) Nuclear Fission"], column2: ["(p) Z increases by 1", "(q) No change in Z or A", "(r) Z decreases by 2, A decreases by 4", "(s) Heavy nucleus splits"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching nuclear processes with their outcomes." },
        { column1: ["(a) Binding Energy", "(b) Half-life", "(c) Activity", "(d) Mass Defect"], column2: ["(p) Decays per second", "(q) 0.693/λ", "(r) Δm * c²", "(s) (Zm_p + Nm_n) - M_nuc"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching nuclear physics terms with their definitions or formulas." },
        { column1: ["(a) Moderator", "(b) Control Rods", "(c) Coolant", "(d) Nuclear Fuel"], column2: ["(p) Cadmium or Boron", "(q) Uranium or Plutonium", "(r) Heavy water or Graphite", "(s) Water or liquid sodium"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching components of a nuclear reactor with the materials used." },
        { column1: ["(a) Isotopes", "(b) Isobars", "(c) Isotones", "(d) Isomers"], column2: ["(p) Same A, different Z", "(q) Same A and Z, different energy state", "(r) Same Z, different A", "(s) Same N, different Z"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching nuclear classification terms with their definitions." },
        { column1: ["(a) Nuclear Fusion", "(b) Chain Reaction", "(c) Critical Mass", "(d) Pair Production"], column2: ["(p) Minimum mass for sustained fission", "(q) Basis of a hydrogen bomb", "(r) γ → e⁺ + e⁻", "(s) Self-sustaining fission process"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching nuclear phenomena with their descriptions." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
          {
            formula: `R = R_{0} A^{1/3}`,
            description: "Nuclear radius",
            descriptionTamil: "அணுஇரு"
          },
          {
            formula: `\\Delta m = Z m_{p} + N m_{n} - m_{\\text{nucleus}}`,
            description: "Mass defect",
            descriptionTamil: "மாஸ் குறைவு"
          },
          {
            formula: `B = \\Delta m \\;c^{2}`,
            description: "Total binding energy",
            descriptionTamil: "மொத்த இணைப்பு ஆற்றல்"
          },
          {
            formula: `\\frac{B}{A}`,
            description: "Binding energy per nucleon",
            descriptionTamil: "ஒன்றரை பொருந்திய விகிதம்"
          },
          {
            formula: `N(t) = N_{0} e^{-\\lambda t}`,
            description: "Radioactive decay law",
            descriptionTamil: "மின்கடத்தல் விதி"
          },
          {
            formula: `T_{1/2} = \\frac{\\ln 2}{\\lambda}`,
            description: "Half-life relation",
            descriptionTamil: "அரை-வயது"
          },
          {
            formula: `A = \\lambda N`,
            description: "Activity of a sample",
            descriptionTamil: "செயல்திறன்"
          },
          {
            formula: `Q = (\\text{mass}_{\\text{i}} - \\text{mass}_{\\text{f}}) \\;c^{2}`,
            description: "Q-value of nuclear reaction",
            descriptionTamil: "செயலினை மதிப்பிடும் ஆற்றல்"
          },
          {
            formula: `V_{C} = \\frac{1}{4\\pi\\varepsilon_{0}} \\frac{Z_{1}Z_{2} e^{2}}{r}`,
            description: "Coulomb barrier between nuclei",
            descriptionTamil: "கூலம்ப் தடுப்பு"
          },
          {
            formula: `\\rho_{\\text{nucleus}} = \\frac{A m_{u}}{\\tfrac{4}{3}\\pi R^{3}} \\approx \\text{constant}`,
            description: "Average nuclear density",
            descriptionTamil: "சராசரி அணுஅணுக்கம்"
          }
        ],
        diagrams: []
    },    
    keyTakeaways: [
        "The nucleus is incredibly dense, held together by the strong nuclear force against electrostatic repulsion.",
        "The stability of a nucleus is determined by its binding energy per nucleon.",
        "Energy is released when light nuclei fuse (fusion) or heavy nuclei split (fission), moving towards the peak of the binding energy curve.",
        "Radioactive decay is a random, exponential process characterized by its half-life."
    ],
    mnemonics: [
        { text: "Remember the radioactive particles' charges: Alpha is positive (+2), Beta is negative (-1), Gamma is neutral (0).", tamil: "கதிரியக்கத் துகள்களின் மின்னூட்டங்களை நினைவில் கொள்க: ஆல்பா நேர்மறை (+2), பீட்டா எதிர்மறை (-1), காமா நடுநிலை (0)." }
    ],
    neetTips: [
        { text: "Half-life problems are very common. Remember the sequence: 100% -> 50% -> 25% -> 12.5% ... Each arrow represents one half-life.", tamil: "அரை ஆயுள் கணக்குகள் மிகவும் பொதுவானவை. வரிசையை நினைவில் கொள்க: 100% -> 50% -> 25% -> 12.5% ... ஒவ்வொரு அம்புக்குறியும் ஒரு அரை ஆயுளைக் குறிக்கிறது." },
        { text: "Be very careful with units in binding energy calculations. Ensure you are using the correct mass (atomic vs. nuclear) and the correct conversion factor (931.5 MeV/u).", tamil: "பிணைப்பு ஆற்றல் கணக்கீடுகளில் அலகுகளில் மிகவும் கவனமாக இருங்கள். நீங்கள் சரியான நிறையை (அணு vs. அணுக்கரு) மற்றும் சரியான மாற்று காரணியை (931.5 MeV/u) பயன்படுத்துவதை உறுதிப்படுத்திக் கொள்ளுங்கள்." }
    ],
    studentTip: {
        english: "Draw a cartoon nucleus showing separate proton and neutron masses, then annotate Δm calculation and convert step-by-step to MeV to cement the mass defect concept.",
        tamil: "மின்கசாய்ப் பிரிவு மற்றும் நியூட்ரானின் தனி கழிவுகளை காட்டும் எளிய வரைபடம் வரைந்து Δm கணக்கீட்டையும் MeV ஆக மாற்றும் படிநிலைகளையும் குறியிட்டு உறுதிப்படுத்து."
      },
      peerDiscussion: {
        english: "Discuss why light nuclei release energy via fusion while heavy nuclei release energy via fission. How does the shape of the binding-energy curve govern which process is energetically favorable?",
        tamil: "என்ஂ லைட் அணுக்கள் fusion மூலம், ஹேவி அணுக்கள் fission மூலம் ஏன் ஆற்றலை வெளியிடுகின்றன என்பதைப் பற்றி Binding-Energy வளைவு உருவம் எப்படி தீர்மானிக்கிறது என விவாதியுங்கள்."
      }
};
