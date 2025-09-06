
import type { NeetModule } from '@/lib/types';

export const redoxReactionsAndElectrochemistry: NeetModule = {
    id: 'neet-chemistry-redox-reactions-and-electrochemistry',
    title: 'Chemistry - Redox Reactions and Electrochemistry (ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் மின் வேதியியல்)',
    chapter: 'Redox Reactions and Electrochemistry',
    subject: 'Chemistry',
    learningObjectives: [
        "Define oxidation and reduction in terms of electron transfer.",
        "Assign oxidation numbers and balance redox reactions using the ion-electron method or oxidation number method.",
        "Understand the functioning of electrochemical cells (Galvanic/Voltaic cells) and electrolytic cells.",
        "Define standard electrode potential and understand the electrochemical series.",
        "Apply the Nernst equation to calculate the emf of a cell under non-standard conditions.",
        "Relate cell potential to Gibbs free energy and the equilibrium constant.",
        "Understand the principles of electrolysis and Faraday's laws of electrolysis."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions and ions.",
        "Concepts of Gibbs free energy from Thermodynamics."
    ],
    conceptOverview: "This chapter combines two related topics: redox reactions and electrochemistry. Redox reactions are those involving the transfer of electrons, resulting in a change in oxidation states. We will learn systematic methods to balance these often-complex reactions. Electrochemistry is the study of the interplay between chemical energy and electrical energy. We'll explore how spontaneous redox reactions can be harnessed to produce electricity in galvanic cells (like batteries) and how electricity can be used to drive non-spontaneous reactions in electrolytic cells. The Nernst equation and Faraday's laws are the key quantitative tools in this field.",
    tamilConnection: "மின்கலங்கள் (batteries) முதல் உலோகங்களைத் தூய்மைப்படுத்துதல் வரை மின் வேதியியல் ஒரு முக்கிய பங்கு வகிக்கிறது. ஒரு வேதிவினையிலிருந்து மின்சாரத்தை எவ்வாறு உருவாக்குவது (கால்வானிக் கலம்), மற்றும் மின்சாரத்தைப் பயன்படுத்தி ஒரு வேதிவினையை எவ்வாறு நிகழ்த்துவது (மின்னாற்பகுப்புக் கலம்) என்பதை இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The process of electroplating, used to coat temple 'kavachams' (ornamental armor for deities) and jewelry with a thin layer of gold or silver, is a direct application of electrolysis. An electric current is used to drive a non-spontaneous redox reaction, depositing a layer of the precious metal onto the object. This chapter explains the scientific principles behind this traditional craft.",
    syllabusMapping: [
        {
            topic: "Redox Reactions, Electrochemistry",
            tnBoardChapter: "11th Chem Vol 2 (Ch 10), 12th Chem Vol 1 (Ch 9)",
            ncertReference: "Class 11 Chem Part 2 (Ch 8), Class 12 Chem Part 1 (Ch 3)",
            notes: "Very important chapter for NEET. Nernst equation problems, Faraday's laws of electrolysis, and questions on the electrochemical series (predicting reactivity) are very common.",
            mappingDescription: 'Covers NEET Chemistry Units 8 and 13'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: "1. Redox Reactions & Oxidation Number",
                tamil: "1. ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் ஆக்ஸிஜனேற்ற எண்"
            },
            content: [
                {
                    english: "**Oxidation (ஆக்ஸிஜனேற்றம்):** Loss of electrons, increase in oxidation number.",
                    tamil: "**ஆக்ஸிஜனேற்றம்:** எலக்ட்ரான்களை இழத்தல், ஆக்ஸிஜனேற்ற எண்ணில் அதிகரிப்பு."
                },
                {
                    english: "**Reduction (ஒடுக்கம்):** Gain of electrons, decrease in oxidation number.",
                    tamil: "**ஒடுக்கம்:** எலக்ட்ரான்களை ஏற்றல், ஆக்ஸிஜனேற்ற எண்ணில் குறைவு."
                },
                {
                    english: "**Oxidation Number:** A number assigned to an element in a compound which represents the number of electrons lost or gained by an atom of that element.",
                    tamil: "**ஆக்ஸிஜனேற்ற எண்:** ஒரு சேர்மத்தில் உள்ள ஒரு தனிமத்திற்கு ஒதுக்கப்படும் ஒரு எண், இது அந்த தனிமத்தின் ஒரு அணுவால் இழக்கப்பட்ட அல்லது ஏற்கப்பட்ட எலக்ட்ரான்களின் எண்ணிக்கையைக் குறிக்கிறது."
                }
            ]
        },
        {
            heading: {
                english: "2. Electrochemical Cells (Galvanic Cell)",
                tamil: "2. மின்வேதிக் கலன்கள் (கால்வானிக் கலம்)"
            },
            content: [
                {
                    english: "A device that converts chemical energy from a spontaneous redox reaction into electrical energy. Example: Daniel cell.",
                    tamil: "ஒரு தன்னிச்சையான ஆக்ஸிஜனேற்ற-ஒடுக்க வினையிலிருந்து வேதி ஆற்றலை மின் ஆற்றலாக மாற்றும் ஒரு சாதனம். எடுத்துக்காட்டு: டேனியல் கலம்."
                },
                {
                    english: "*   **Anode (நேர்முனை):** Oxidation occurs here. It is the negative electrode.",
                    tamil: "*   **நேர்முனை:** ஆக்ஸிஜனேற்றம் இங்கு நிகழ்கிறது. இது எதிர்மின்முனை ஆகும்."
                },
                {
                    english: "*   **Cathode (எதிர்முனை):** Reduction occurs here. It is the positive electrode.",
                    tamil: "*   **எதிர்முனை:** ஒடுக்கம் இங்கு நிகழ்கிறது. இது நேர்மின்முனை ஆகும்."
                },
                {
                    english: "*   **Salt Bridge (உப்புப் பாலம்):** Completes the electrical circuit and maintains electrical neutrality in the half-cells.",
                    tamil: "*   **உப்புப் பாலம்:** மின்சுற்றை நிறைவுசெய்கிறது மற்றும் அரை-கலங்களில் மின் நடுநிலைமையைப் பராமரிக்கிறது."
                },
                {
                    english: "*   **Cell Potential / EMF (E_cell):** The potential difference between the two electrodes. $E_{cell} = E_{cathode} - E_{anode}$. A positive $E_{cell}$ indicates a spontaneous reaction.",
                    tamil: "*   **கல மின்னழுத்தம் / EMF (E_cell):** இரண்டு மின்முனைகளுக்கு இடையேயான மின்னழுத்த வேறுபாடு. $E_{cell} = E_{cathode} - E_{anode}$. ஒரு நேர்மறை $E_{cell}$ தன்னிச்சையான வினையைக் குறிக்கிறது."
                }
            ]
        },
        {
            heading: {
                english: "3. Nernst Equation (நெர்ன்ஸ்ட் சமன்பாடு)",
                tamil: "3. நெர்ன்ஸ்ட் சமன்பாடு"
            },
            content: [
                {
                    english: "It relates the cell potential to the standard cell potential and the concentration of the reacting species. For a reaction $aA + bB \\rightarrow cC + dD$:",
                    tamil: "இது கல மின்னழுத்தத்தை திட்டக் கல மின்னழுத்தம் மற்றும் வினைபுரியும் சிற்றினங்களின் செறிவுகளுடன் தொடர்புபடுத்துகிறது. $aA + bB \\rightarrow cC + dD$ என்ற வினைக்கு:"
                },
                {
                    english: "$$ E_{cell} = E^\\circ_{cell} - \\frac{RT}{nF} \\ln Q = E^\\circ_{cell} - \\frac{2.303RT}{nF} \\log Q $$",
                    tamil: ""
                },
                {
                    english: "At 298 K: $$ E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{n} \\log Q $$ where Q is the reaction quotient, Q = $\\frac{[C]^c[D]^d}{[A]^a[B]^b}$.",
                    tamil: "298 K வெப்பநிலையில்: Q என்பது வினைக்குணகம், Q = $\\frac{[C]^c[D]^d}{[A]^a[B]^b}$."
                }
            ]
        },
        {
            heading: {
                english: "4. Electrolysis and Faraday's Laws",
                tamil: "4. மின்னாற்பகுப்பு மற்றும் ஃபாரடே விதிகள்"
            },
            content: [
                {
                    english: "**Electrolysis (மின்னாற்பகுப்பு):** The process of decomposition of an electrolyte by passing an electric current through its molten state or aqueous solution.",
                    tamil: "**மின்னாற்பகுப்பு:** ஒரு மின்பகுளியின் உருகிய நிலை அல்லது நீர்க்கரைசல் வழியாக மின்சாரத்தைச் செலுத்துவதன் மூலம் அதை சிதைக்கும் செயல்முறை."
                },
                {
                    english: "**Faraday's First Law:** The mass of substance deposited or liberated at any electrode is directly proportional to the quantity of charge passed. $m \\propto Q$, or $m = ZQ = ZIt$, where Z is the electrochemical equivalent.",
                    tamil: "**ஃபாரடேவின் முதல் விதி:** எந்தவொரு மின்முனையிலும் படியும் அல்லது வெளிப்படும் பொருளின் நிறை, செலுத்தப்பட்ட மின்னூட்டத்தின் அளவிற்கு நேர்த்தகவில் இருக்கும். $m \\propto Q$, அல்லது $m = ZQ = ZIt$, இங்கு Z என்பது மின்வேதிச் சமானம்."
                },
                {
                    english: "**Faraday's Second Law:** When the same quantity of charge is passed through different electrolytes, the masses of substances liberated are proportional to their chemical equivalent weights. $\\frac{m_1}{m_2} = \\frac{E_1}{E_2}$.",
                    tamil: "**ஃபாரடேவின் இரண்டாம் விதி:** வெவ்வேறு மின்பகுளிகள் வழியாக ஒரே அளவு மின்னூட்டம் செலுத்தப்படும்போது, வெளிப்படும் பொருட்களின் நிறைகள் அவற்றின் வேதிச் சமான நிறைகளுக்கு விகிதாசாரமாக இருக்கும். $\\frac{m_1}{m_2} = \\frac{E_1}{E_2}$."
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Nernst Equation",
            titleTamil: "நீட் நிலை: நெர்ன்ஸ்ட் சமன்பாடு",
            difficulty: 'Medium',
            problem: "Calculate the emf of the cell: Zn(s) | Zn²⁺(0.1 M) || Ag⁺(0.01 M) | Ag(s) at 298 K. Given E°(Zn²⁺/Zn) = -0.76 V and E°(Ag⁺/Ag) = +0.80 V.",
            problemTamil: "298 K வெப்பநிலையில் Zn(s) | Zn²⁺(0.1 M) || Ag⁺(0.01 M) | Ag(s) என்ற கலத்தின் emf-ஐக் கணக்கிடுக. E°(Zn²⁺/Zn) = -0.76 V மற்றும் E°(Ag⁺/Ag) = +0.80 V என கொடுக்கப்பட்டுள்ளது.",
            solutionSteps: [
                { step: 1, explanation: "Write the cell reaction. Oxidation occurs at the anode (Zn) and reduction at the cathode (Ag).", explanationTamil: "கல வினையை எழுதவும். நேர்முனையில் (Zn) ஆக்ஸிஜனேற்றமும், எதிர்முனையில் (Ag) ஒடுக்கமும் நிகழ்கிறது.", calculation: "Anode: Zn → Zn²⁺ + 2e⁻ \\\\ Cathode: 2Ag⁺ + 2e⁻ → 2Ag \\\\ Overall: Zn + 2Ag⁺ → Zn²⁺ + 2Ag" },
                { step: 2, explanation: "Calculate the standard cell potential E°_cell.", calculation: "E°_cell = E°_cathode - E°_anode = 0.80 V - (-0.76 V) = 1.56 V" },
                { step: 3, explanation: "Determine 'n', the number of electrons transferred in the balanced reaction. Here, n=2.", explanationTamil: "சமன்செய்யப்பட்ட வினையில் பரிமாற்றப்பட்ட எலக்ட்ரான்களின் எண்ணிக்கை 'n'-ஐ தீர்மானிக்கவும். இங்கு, n=2." },
                { step: 4, explanation: "Apply the Nernst equation: E_cell = E°_cell - (0.0591/n) * log(Q). The reaction quotient Q = [Zn²⁺]/[Ag⁺]².", explanationTamil: "நெர்ன்ஸ்ட் சமன்பாட்டைப் பயன்படுத்தவும். வினைக்குணகம் Q = [Zn²⁺]/[Ag⁺]².", calculation: "E_{cell} = 1.56 - \\frac{0.0591}{2} \\log(\\frac{0.1}{(0.01)^2})" },
                { step: 5, explanation: "Calculate the value.", calculation: "E_{cell} = 1.56 - 0.02955 \\log(10^3) = 1.56 - 0.02955(3) = 1.56 - 0.08865 \\approx 1.47 V" }
            ]
        },
        {
            title: "JEE Level: Faraday's Laws",
            titleTamil: "ஜே.இ.இ நிலை: ஃபாரடே விதிகள்",
            difficulty: 'Medium',
            problem: "A current of 1.5 A is passed through a solution of CuSO₄ for 10 minutes. What is the mass of copper deposited at the cathode? (Atomic mass of Cu = 63.5 g/mol)",
            problemTamil: "1.5 A மின்னோட்டம் ஒரு CuSO₄ கரைசல் வழியாக 10 நிமிடங்களுக்கு செலுத்தப்படுகிறது. எதிர்முனையில் படியும் காப்பரின் நிறை என்ன? (Cu-இன் அணு நிறை = 63.5 கி/மோல்)",
            solutionSteps: [
                { step: 1, explanation: "Calculate the total charge Q passed through the solution. Q = I × t.", calculation: "Q = 1.5 A × (10 × 60 s) = 900 C" },
                { step: 2, explanation: "Write the reduction half-reaction at the cathode. Cu²⁺ + 2e⁻ → Cu. This shows that 2 moles of electrons (2 Faradays of charge) are required to deposit 1 mole of copper.", explanationTamil: "எதிர்முனையில் ஒடுக்க அரை-வினையை எழுதவும். இது 1 மோல் காப்பரை படியவைக்க 2 மோல் எலக்ட்ரான்கள் (2 ஃபாரடே மின்னூட்டம்) தேவை என்பதைக் காட்டுகிறது." },
                { step: 3, explanation: "1 Faraday (F) is the charge of one mole of electrons, F ≈ 96500 C/mol. So, 2F = 2 × 96500 C are needed for 1 mole (63.5 g) of Cu.", explanationTamil: "1 ஃபாரடே (F) என்பது ஒரு மோல் எலக்ட்ரான்களின் மின்னூட்டம். எனவே, 1 மோல் (63.5 கி) Cu-க்கு 2F மின்னூட்டம் தேவை." },
                { step: 4, explanation: "Calculate the mass of copper deposited by 900 C of charge using proportionality.", calculation: "Mass deposited = (Mass for 2F) × (Charge passed / 2F) = 63.5 g × \\frac{900 C}{2 \\times 96500 C}" },
                { step: 5, explanation: "Calculate the final mass.", calculation: "Mass = 63.5 × \\frac{900}{193000} \\approx 0.296 g" }
            ],
            neetHack: "Use the formula m = ZIt, where Z = E/F (E=equivalent weight). For Cu, E = Atomic mass / n-factor = 63.5/2. So, m = (E/F)It = (63.5 / (2 * 96500)) * 900 ≈ 0.296 g.",
            commonPitfall: "Forgetting the n-factor (number of electrons) for the deposition reaction. For Cu²⁺ it's 2, for Ag⁺ it's 1, for Al³⁺ it's 3."
        }
    ],
    mcqs: [
        { question: "In a galvanic cell, the electrode at which oxidation occurs is called the:", options: ["A. Cathode", "B. Anode", "C. Salt bridge", "D. Electrolyte"], answer: "B. Anode", explanation: "Oxidation always occurs at the anode. Remember the mnemonic 'AN OX' (Anode Oxidation).", neetFrequency: 5 },
        { question: "The standard electrode potential is measured at:", options: ["A. 25 K and 1 atm", "B. 298 K and 1 M concentration", "C. 0°C and 1 M concentration", "D. 273 K and 1 atm"], answer: "B. 298 K and 1 M concentration", explanation: "Standard conditions for electrochemistry are defined as 298 K (25°C), 1 atm pressure for gases, and 1 M concentration for solutions.", neetFrequency: 4 },
        { question: "The rusting of iron is an example of:", options: ["A. Reduction", "B. Combustion", "C. An electrochemical process", "D. Hydrogenation"], answer: "C. An electrochemical process", explanation: "Rusting involves the formation of tiny electrochemical cells on the surface of the iron, where iron acts as the anode and gets oxidized.", neetFrequency: 3 },
        { question: "One Faraday of charge is equal to the charge on:", options: ["A. One electron", "B. One mole of electrons", "C. One proton", "D. One mole of protons"], answer: "B. One mole of electrons", explanation: "One Faraday is the magnitude of charge of one mole of electrons, approximately 96500 Coulombs.", neetFrequency: 3 },
        { question: "The value of E°_cell for a spontaneous reaction is:", options: ["A. Positive", "B. Negative", "C. Zero", "D. May be positive or negative"], answer: "A. Positive", explanation: "A spontaneous reaction has a negative ΔG. Since ΔG° = -nFE°_cell, a positive E°_cell is required for a spontaneous reaction.", neetFrequency: 5 },
        { question: "The oxidation number of Cr in K₂Cr₂O₇ is:", options: ["A. +3", "B. +6", "C. +7", "D. +2"], answer: "B. +6", explanation: "Let the oxidation number of Cr be x. 2(+1) + 2(x) + 7(-2) = 0 => 2 + 2x - 14 = 0 => 2x = 12 => x = +6.", neetFrequency: 4 },
        { question: "The purpose of a salt bridge is to:", options: ["A. Mix the two half-cells", "B. Provide electrons to the circuit", "C. Maintain electrical neutrality", "D. Increase the cell potential"], answer: "C. Maintain electrical neutrality", explanation: "The salt bridge allows the migration of ions to prevent the buildup of charge in the half-cells, thus maintaining neutrality and completing the circuit.", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "If E°_cell is positive, then the reaction is spontaneous.", reason: "The Gibbs free energy change ΔG° is related to E°_cell by ΔG° = -nFE°_cell.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. If E°_cell is positive, ΔG° will be negative, which is the condition for spontaneity.", neetFrequency: 4 },
        { assertion: "Copper sulphate solution can be stored in a zinc vessel.", reason: "Zinc is less reactive than copper.", answer: "D", explanation: "The assertion is false. Zinc is more reactive than copper (has a more negative standard reduction potential). It will displace copper from the CuSO₄ solution (Zn + CuSO₄ → ZnSO₄ + Cu), so it cannot be stored. The reason is also false.", neetFrequency: 3 },
        { assertion: "In an electrolytic cell, the cathode is the negative electrode.", reason: "Reduction occurs at the cathode.", answer: "B", explanation: "Both assertion and reason are true. In an electrolytic cell, the external source drives electrons to the cathode, making it negative. Reduction (gain of electrons) occurs there. However, the reason is just a fact and does not explain why the cathode is negative.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Anode", "(b) Cathode", "(c) Salt Bridge", "(d) Daniel Cell"], column2: ["(p) Reduction", "(q) Maintains neutrality", "(r) Oxidation", "(s) Zn-Cu cell"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching components of a galvanic cell with their function or example.", neetFrequency: 4 },
        { column1: ["(a) Lead storage battery", "(b) Mercury cell", "(c) Fuel cell", "(d) Dry cell"], column2: ["(p) Constant voltage", "(q) High efficiency", "(r) Used in automobiles", "(s) Leclanché cell"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching different types of commercial cells with their key properties.", neetFrequency: 3 }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "E_{cell} = E_{cathode} - E_{anode}", description: "Standard Cell Potential" },
            { formula: "ΔG° = -nFE°_{cell}", description: "Relation between Gibbs Energy and Cell Potential" },
            { formula: "E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log Q", description: "Nernst Equation (at 298 K)" },
            { formula: "m = ZIt = \\frac{E}{F}It", description: "Faraday's First Law of Electrolysis" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Redox reactions involve the transfer of electrons and can be used to generate electrical energy.",
        "The Nernst equation is crucial for calculating cell potentials under non-standard conditions.",
        "Faraday's laws provide the quantitative relationship between electricity and chemical change during electrolysis.",
        "The electrochemical series helps predict the spontaneity of redox reactions."
    ],
    mnemonics: [
        { text: "Remember 'LEO the lion says GER': Loss of Electrons is Oxidation, Gain of Electrons is Reduction.", tamil: "'LEO the lion says GER': எலக்ட்ரான் இழப்பு ஆக்ஸிஜனேற்றம், எலக்ட்ரான் ஏற்பு ஒடுக்கம்." },
        { text: "Remember 'AN OX' and 'RED CAT' for galvanic cells: At the ANode, OXidation occurs. At the CAThode, REDuction occurs.", tamil: "கால்வானிக் கலங்களுக்கு 'AN OX' மற்றும் 'RED CAT' ஐ நினைவில் கொள்க: நேர்முனையில் (ANode) ஆக்ஸிஜனேற்றம் (OXidation), எதிர்முனையில் (CAThode) ஒடுக்கம் (REDuction)." }
    ],
    neetTips: [
        { text: "For the Nernst equation, always write the balanced overall cell reaction to correctly determine 'n' (number of electrons) and the reaction quotient 'Q'.", tamil: "நெர்ன்ஸ்ட் சமன்பாட்டிற்கு, 'n' (எலக்ட்ரான்களின் எண்ணிக்கை) மற்றும் வினைக்குணகம் 'Q' ஆகியவற்றைச் சரியாகத் தீர்மானிக்க, எப்போதும் சமன்செய்யப்பட்ட ஒட்டுமொத்த கல வினையை எழுதுங்கள்." },
        { text: "In the electrochemical series, a metal higher up (more negative E°) can displace a metal lower down (more positive E°) from its salt solution.", tamil: "மின்வேதித் தொடரில், மேலே உள்ள ஒரு உலோகம் (அதிக எதிர்மறை E°) அதன் உப்புக்கரைசலிலிருந்து கீழே உள்ள ஒரு உலோகத்தை (அதிக நேர்மறை E°) இடப்பெயர்ச்சி செய்ய முடியும்." }
    ],
    studentTip: {
        english: "Electrochemistry is all about electron flow. In a galvanic cell, the electrons want to flow spontaneously from anode to cathode. In an electrolytic cell, an external battery forces them to flow in the non-spontaneous direction.",
        tamil: "மின் வேதியியல் என்பது எலக்ட்ரான் ஓட்டத்தைப் பற்றியது. ஒரு கால்வானிக் கலத்தில், எலக்ட்ரான்கள் தன்னிச்சையாக நேர்முனையிலிருந்து எதிர்முனைக்கு பாய விரும்புகின்றன. ஒரு மின்னாற்பகுப்புக் கலத்தில், ஒரு வெளிப்புற மின்கலம் அவற்றை தன்னிச்சையற்ற திசையில் பாயும்படி கட்டாயப்படுத்துகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is a salt bridge necessary in a galvanic cell? What would happen if it were removed?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஒரு கால்வானிக் கலத்தில் உப்புப் பாலம் ஏன் அவசியம்? அது அகற்றப்பட்டால் என்ன நடக்கும்?"
    },
    nextChapter: {
        title: "Chemical Kinetics",
        titleTamil: "வேதி வினைவேகவியல்"
    },
    validationReport: []
}
