
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
        },
        {
            title: "NEET Level: Balancing Redox Reactions",
            titleTamil: "நீட் நிலை: ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகளை சமன்செய்தல்",
            difficulty: 'Medium',
            problem: "Balance the following redox reaction in acidic medium using the ion-electron method: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺",
            problemTamil: "அமில ஊடகத்தில் பின்வரும் ஆக்ஸிஜனேற்ற-ஒடுக்க வினையை அயனி-எலக்ட்ரான் முறையைப் பயன்படுத்தி சமன் செய்க: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺",
            solutionSteps: [
                { step: 1, explanation: "Separate the reaction into two half-reactions: oxidation and reduction.", calculation: "Oxidation: Fe²⁺ → Fe³⁺ \\\\ Reduction: MnO₄⁻ → Mn²⁺" },
                { step: 2, explanation: "Balance the oxidation half-reaction. Atoms are balanced. Balance charge by adding electrons.", calculation: "Fe²⁺ → Fe³⁺ + e⁻" },
                { step: 3, explanation: "Balance the reduction half-reaction. Balance O atoms by adding H₂O. Balance H atoms by adding H⁺. Then balance charge with electrons.", calculation: "MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O \\\\ MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O" },
                { step: 4, explanation: "Equalize the number of electrons in both half-reactions. Multiply the oxidation half-reaction by 5.", calculation: "5Fe²⁺ → 5Fe³⁺ + 5e⁻" },
                { step: 5, explanation: "Add the two balanced half-reactions. The electrons will cancel out.", calculation: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O" }
            ],
            commonPitfall: "Forgetting to balance oxygen with H₂O and hydrogen with H⁺ in acidic medium (or with OH⁻ in basic medium)."
        },
        {
            title: "JEE Level: Gibbs Energy and EMF",
            titleTamil: "ஜே.இ.இ நிலை: கிப்ஸ் ஆற்றல் மற்றும் EMF",
            difficulty: 'Medium',
            problem: "The standard electrode potential for the Daniel cell is 1.1 V. Calculate the standard Gibbs energy for the reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s).",
            problemTamil: "டேனியல் கலத்தின் திட்ட மின்முனை மின்னழுத்தம் 1.1 V ஆகும். Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) என்ற வினைக்கான திட்ட கிப்ஸ் ஆற்றலைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "The relationship between standard Gibbs energy change (ΔG°) and standard cell potential (E°_cell) is ΔG° = -nFE°_cell.", explanationTamil: "திட்ட கிப்ஸ் ஆற்றல் மாற்றம் (ΔG°) மற்றும் திட்ட கல மின்னழுத்தம் (E°_cell) ஆகியவற்றுக்கு இடையேயான தொடர்பு ΔG° = -nFE°_cell ஆகும்." },
                { step: 2, explanation: "Identify the number of moles of electrons transferred (n). In this reaction, Zn loses 2 electrons and Cu²⁺ gains 2 electrons, so n=2.", explanationTamil: "பரிமாற்றப்பட்ட எலக்ட்ரான்களின் மோல்களின் எண்ணிக்கையை (n) அடையாளம் காணவும். இந்த வினையில், Zn 2 எலக்ட்ரான்களை இழக்கிறது மற்றும் Cu²⁺ 2 எலக்ட்ரான்களை ஏற்கிறது, எனவே n=2." },
                { step: 3, explanation: "Use the values for Faraday's constant (F ≈ 96500 C/mol) and the given E°_cell.", calculation: "ΔG° = -2 × 96500 × 1.1" },
                { step: 4, explanation: "Calculate the final result in Joules and convert to kJ.", calculation: "ΔG° = -212300 J = -212.3 kJ" }
            ],
            commonPitfall: "Getting the sign wrong. A spontaneous reaction has a positive E° and a negative ΔG°, which is consistent with the formula ΔG° = -nFE°."
        },
        {
            title: "NEET Level: Electrochemical Series",
            titleTamil: "நீட் நிலை: மின்வேதித் தொடர்",
            difficulty: 'Easy',
            problem: "Given the standard electrode potentials: E°(Zn²⁺/Zn) = -0.76 V, E°(Fe²⁺/Fe) = -0.44 V. Can a solution of zinc sulphate be stored in an iron pot?",
            problemTamil: "திட்ட மின்முனை மின்னழுத்தங்கள் கொடுக்கப்பட்டுள்ளன: E°(Zn²⁺/Zn) = -0.76 V, E°(Fe²⁺/Fe) = -0.44 V. துத்தநாக சல்பேட் கரைசலை ஒரு இரும்புப் பாத்திரத்தில் சேமிக்க முடியுமா?",
            solutionSteps: [
                { step: 1, explanation: "A more reactive metal displaces a less reactive metal from its salt solution. In the electrochemical series, a metal with a more negative standard reduction potential is more reactive.", explanationTamil: "அதிக வினைத்திறன் கொண்ட ஒரு உலோகம், குறைந்த வினைத்திறன் கொண்ட ஒரு உலோகத்தை அதன் உப்புக்கரைசலிலிருந்து இடப்பெயர்ச்சி செய்யும். மின்வேதித் தொடரில், அதிக எதிர்மறை திட்ட ஒடுக்க மின்னழுத்தம் கொண்ட ஒரு உலோகம் அதிக வினைத்திறன் கொண்டது." },
                { step: 2, explanation: "Compare the standard potentials. E°(Zn) = -0.76 V and E°(Fe) = -0.44 V. Since Zinc has a more negative potential, it is more reactive than iron.", explanationTamil: "திட்ட மின்னழுத்தங்களை ஒப்பிடவும். ஜிங்க் இரும்பை விட அதிக வினைத்திறன் கொண்டது." },
                { step: 3, explanation: "Since iron is less reactive than zinc, it cannot displace zinc from its salt solution (ZnSO₄).", explanationTamil: "இரும்பு துத்தநாகத்தை விட குறைந்த வினைத்திறன் கொண்டது என்பதால், அது துத்தநாகத்தை அதன் உப்புக்கரைசலிலிருந்து (ZnSO₄) இடப்பெயர்ச்சி செய்ய முடியாது." },
                { step: 4, explanation: "Therefore, no reaction will occur, and the zinc sulphate solution can be stored in an iron pot.", explanationTamil: "எனவே, எந்த வினையும் நிகழாது, மேலும் துத்தநாக சல்பேட் கரைசலை ஒரு இரும்புப் பாத்திரத்தில் சேமிக்கலாம்." }
            ]
        }
    ],
    mcqs: [
        { question: "Oxidation is the:", options: ["A. Gain of electrons", "B. Loss of electrons", "C. Gain of hydrogen", "D. Decrease in oxidation number"], answer: "B. Loss of electrons", explanation: "Oxidation is defined as the loss of electrons, which results in an increase in oxidation number.", neetFrequency: 5 },
        { question: "In a Daniel cell, the anode is made of:", options: ["A. Copper", "B. Zinc", "C. Platinum", "D. Carbon"], answer: "B. Zinc", explanation: "In a Daniel cell, Zinc is more reactive and gets oxidized, so it acts as the anode.", neetFrequency: 3 },
        { question: "The standard electrode potential of an electrode is measured with respect to:", options: ["A. Calomel electrode", "B. Standard Hydrogen Electrode (SHE)", "C. Saturated calomel electrode", "D. Any electrode"], answer: "B. Standard Hydrogen Electrode (SHE)", explanation: "The potential of the Standard Hydrogen Electrode is arbitrarily defined as zero, and all other electrode potentials are measured relative to it.", neetFrequency: 4 },
        { question: "When a lead storage battery is discharged:", options: ["A. Lead is formed at the anode", "B. Sulphuric acid is consumed", "C. Lead sulphate is consumed", "D. Water is formed at the anode"], answer: "B. Sulphuric acid is consumed", explanation: "During discharge, both electrodes are converted to lead sulphate, and sulphuric acid from the electrolyte is consumed.", neetFrequency: 3 },
        { question: "The Nernst equation relates the cell potential to:", options: ["A. Temperature only", "B. Concentration only", "C. Both temperature and concentration", "D. Pressure only"], answer: "C. Both temperature and concentration", explanation: "The Nernst equation, E = E° - (RT/nF)lnQ, shows the dependence on both temperature (T) and concentration (in Q).", neetFrequency: 5 },
        { question: "The oxidation number of Mn in KMnO₄ is:", options: ["A. +2", "B. +4", "C. +6", "D. +7"], answer: "D. +7", explanation: "Let x be the oxidation number of Mn. K is +1, O is -2. (+1) + x + 4(-2) = 0 => x - 7 = 0 => x = +7.", neetFrequency: 4 },
        { question: "The unit of Faraday's constant is:", options: ["A. Coulombs", "B. Coulombs per mole", "C. Amperes", "D. Amperes per mole"], answer: "B. Coulombs per mole", explanation: "Faraday's constant is the charge of one mole of electrons.", neetFrequency: 2 },
        { question: "The rusting of iron is an example of:", options: ["A. Reduction", "B. An electrochemical process", "C. Hydrogenation", "D. A non-redox reaction"], answer: "B. An electrochemical process", explanation: "Rusting involves the formation of tiny galvanic cells on the iron surface, where iron is oxidized.", neetFrequency: 2 },
        { question: "An oxidizing agent is a substance which:", options: ["A. Donates electrons", "B. Increases its oxidation number", "C. Gets oxidized", "D. Accepts electrons"], answer: "D. Accepts electrons", explanation: "An oxidizing agent causes oxidation in another substance by accepting electrons and getting reduced itself.", neetFrequency: 3 },
        { question: "The charge required to deposit one mole of silver from a solution of AgNO₃ is:", options: ["A. 1 Faraday", "B. 2 Faradays", "C. 3 Faradays", "D. 96500 Coulombs"], answer: "A. 1 Faraday", explanation: "The reaction is Ag⁺ + e⁻ → Ag. One mole of electrons is required to deposit one mole of silver. The charge of one mole of electrons is 1 Faraday.", neetFrequency: 4 },
        { question: "In the electrolysis of molten NaCl, the product obtained at the cathode is:", options: ["A. Chlorine gas", "B. Sodium metal", "C. Sodium hydroxide", "D. Oxygen gas"], answer: "B. Sodium metal", explanation: "At the cathode, reduction occurs. Na⁺ ions gain electrons to form sodium metal: Na⁺ + e⁻ → Na.", neetFrequency: 3 },
        { question: "The standard reduction potential of Zn is -0.76 V and that of Cu is +0.34 V. The emf of the Daniel cell is:", options: ["A. 1.10 V", "B. 0.42 V", "C. -0.42 V", "D. -1.10 V"], answer: "A. 1.10 V", explanation: "E°_cell = E°_cathode - E°_anode = E°(Cu) - E°(Zn) = 0.34 - (-0.76) = 1.10 V.", neetFrequency: 5 },
        { question: "The relationship between standard Gibbs energy and standard cell potential is:", options: ["A. ΔG° = nFE°", "B. ΔG° = -nFE°", "C. ΔG° = -nRT ln E°", "D. E° = nFΔG°"], answer: "B. ΔG° = -nFE°", explanation: "This is the fundamental equation connecting thermodynamics and electrochemistry.", neetFrequency: 4 },
        { question: "During the electrolysis of aqueous CuSO₄ using inert electrodes, the product at the anode is:", options: ["A. Copper metal", "B. Sulphur dioxide", "C. Hydrogen gas", "D. Oxygen gas"], answer: "D. Oxygen gas", explanation: "At the anode (oxidation), water has a lower oxidation potential than the sulphate ion, so water is oxidized: 2H₂O → O₂ + 4H⁺ + 4e⁻.", neetFrequency: 4 },
        { question: "If the E° for a given reaction is negative, which of the following gives the correct relationships for the values of ΔG° and K_eq?", options: ["A. ΔG° > 0; K_eq < 1", "B. ΔG° < 0; K_eq > 1", "C. ΔG° < 0; K_eq < 1", "D. ΔG° > 0; K_eq > 1"], answer: "A. ΔG° > 0; K_eq < 1", explanation: "If E° is negative, ΔG° = -nFE° will be positive, indicating a non-spontaneous reaction. A non-spontaneous reaction has an equilibrium constant K_eq < 1.", neetFrequency: 3 },
        { question: "The salt bridge in an electrochemical cell:", options: ["A. Allows the mixing of solutions", "B. Provides a path for electrons", "C. Completes the circuit and maintains neutrality", "D. Increases the cell's EMF"], answer: "C. Completes the circuit and maintains neutrality", explanation: "The primary functions are to allow ion flow to complete the circuit and to prevent charge buildup in the half-cells.", neetFrequency: 3 },
        { question: "In the reaction 2K + F₂ → 2KF, which species is oxidized?", options: ["A. K", "B. F₂", "C. KF", "D. No oxidation occurs"], answer: "A. K", explanation: "Potassium (K) goes from an oxidation state of 0 to +1, so it is oxidized.", neetFrequency: 2 },
        { question: "How many coulombs are required to produce 20 g of Calcium from molten CaCl₂? (Atomic mass of Ca = 40 g/mol)", options: ["A. 96500 C", "B. 48250 C", "C. 193000 C", "D. 20 C"], answer: "A. 96500 C", explanation: "Ca²⁺ + 2e⁻ → Ca. To produce 1 mole (40g) of Ca, 2 Faradays of charge are needed. To produce 0.5 mole (20g), 1 Faraday (96500 C) is needed.", neetFrequency: 4 },
        { question: "The process of coating one metal with another using electricity is called:", options: ["A. Electro-refining", "B. Electrometallurgy", "C. Electroplating", "D. Electrolysis"], answer: "C. Electroplating", explanation: "This is the definition of electroplating.", neetFrequency: 1 },
        { question: "A fuel cell is a device that converts:", options: ["A. Chemical energy of fuel directly into electrical energy", "B. Electrical energy into chemical energy", "C. Heat energy into electrical energy", "D. Mechanical energy into electrical energy"], answer: "A. Chemical energy of fuel directly into electrical energy", explanation: "Fuel cells, like the hydrogen-oxygen fuel cell, produce electricity directly from the chemical reaction of a fuel.", neetFrequency: 2 },
        { question: "The oxidation number of oxygen in H₂O₂ is:", options: ["A. -2", "B. -1", "C. 0", "D. +1"], answer: "B. -1", explanation: "This is an exception to the usual -2 rule for oxygen. In peroxides, oxygen has an oxidation state of -1.", neetFrequency: 3 },
        { question: "Which of the following is the strongest reducing agent?", options: ["A. Zn", "B. Mg", "C. Fe", "D. Cu"], answer: "B. Mg", explanation: "The strongest reducing agent is the one that is most easily oxidized. This corresponds to the metal with the most negative standard reduction potential. Mg has a more negative E° than Zn, Fe, or Cu.", neetFrequency: 4 },
        { question: "What is the cell notation for a standard Daniel cell?", options: ["A. Zn | Zn²⁺ || Cu²⁺ | Cu", "B. Cu | Cu²⁺ || Zn²⁺ | Zn", "C. Zn | Cu²⁺ || Zn²⁺ | Cu", "D. Cu | Zn²⁺ || Cu²⁺ | Zn"], answer: "A. Zn | Zn²⁺ || Cu²⁺ | Cu", explanation: "The convention is Anode | Anode Ion || Cathode Ion | Cathode. In a Daniel cell, Zinc is the anode.", neetFrequency: 2 },
        { question: "The units of electrochemical equivalent (Z) are:", options: ["A. g/C", "B. C/g", "C. g", "D. C"], answer: "A. g/C", explanation: "From m = ZQ, Z = m/Q. The units are grams per Coulomb.", neetFrequency: 1 },
        { question: "According to Faraday's second law, if the same charge is passed through solutions of CuSO₄ and AgNO₃, the ratio of the mass of Cu deposited to the mass of Ag deposited is:", options: ["A. 63.5 : 108", "B. 31.75 : 108", "C. 108 : 31.75", "D. 63.5 : 216"], answer: "B. 31.75 : 108", explanation: "The masses deposited are proportional to their equivalent weights. Eq. wt. of Cu = 63.5/2 = 31.75. Eq. wt. of Ag = 108/1 = 108. The ratio is 31.75 : 108.", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "The reaction Cu + 2Ag⁺ → Cu²⁺ + 2Ag is spontaneous.", reason: "The standard reduction potential of copper is less than that of silver.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Since E°(Cu) < E°(Ag), copper is more reactive and will displace silver. This results in a positive E°_cell, making the reaction spontaneous.", neetFrequency: 4 },
        { assertion: "The conductivity of an electrolyte solution increases with dilution.", reason: "On dilution, the degree of dissociation of the electrolyte increases.", answer: "D", explanation: "Assertion is false. Conductivity (κ) decreases with dilution because the number of ions per unit volume decreases. The reason is true; molar conductivity (Λ_m) increases with dilution due to increased dissociation, but not conductivity.", neetFrequency: 3 },
        { assertion: "For a reaction to be a redox reaction, both oxidation and reduction must occur simultaneously.", reason: "Oxidation and reduction are complementary half-reactions.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Electrons lost in oxidation must be gained in reduction.", neetFrequency: 2 },
        { assertion: "In the electrolysis of aqueous NaCl, H₂ gas is liberated at the cathode.", reason: "The standard reduction potential of H₂O is higher than that of Na⁺.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. At the cathode, water is more easily reduced than sodium ions.", neetFrequency: 4 },
        { assertion: "A salt bridge is used to maintain electrical neutrality.", reason: "The ions of the inert electrolyte in the salt bridge migrate into the two half-cells to neutralize excess charge.", answer: "A", explanation: "Both assertion and reason are true, and the reason correctly explains the function of the salt bridge.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Anode", "(b) Cathode", "(c) Faraday", "(d) Nernst"], column2: ["(p) Reduction", "(q) Oxidation", "(r) Effect of concentration on EMF", "(s) 96500 C/mol"], answer: "a-q, b-p, c-s, d-r", explanation: "Matching terms with their definitions or associated concepts." },
        { column1: ["(a) Dry Cell", "(b) Mercury Cell", "(c) Lead Storage", "(d) H₂-O₂ Fuel Cell"], column2: ["(p) Secondary Cell", "(q) Constant Voltage", "(r) Leclanché Cell", "(s) High Efficiency"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching types of batteries/cells with their key characteristics." },
        { column1: ["(a) Oxidizing Agent", "(b) Reducing Agent", "(c) Redox Reaction", "(d) Disproportionation"], column2: ["(p) Element is both oxidized and reduced", "(q) Electron acceptor", "(r) Electron donor", "(s) Change in oxidation states"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching redox terminology with definitions." },
        { column1: ["(a) Balancing in acidic medium", "(b) Balancing in basic medium", "(c) Oxidation number of O in OF₂", "(d) Oxidation number of S in H₂SO₅"], column2: ["(p) +2", "(q) +6", "(r) Use H⁺", "(s) Use OH⁻"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching concepts with their rules or values. In H₂SO₅ (Caro's acid), there is a peroxide linkage, giving S an oxidation state of +6.", neetFrequency: 3 },
        { column1: ["(a) Strongest Oxidizing Agent", "(b) Strongest Reducing Agent", "(c) E° = 0", "(d) Used in electroplating"], column2: ["(p) Lithium (Li)", "(q) Fluorine (F₂)", "(r) Electrolytic Cell", "(s) Standard Hydrogen Electrode"], answer: "a-q, b-p, c-s, d-r", explanation: "Fluorine has the highest standard reduction potential, making it the strongest oxidizing agent. Lithium has the lowest, making it the strongest reducing agent." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\Delta G^\\circ = -nFE^\\circ_{cell}',
                description: 'Gibbs Energy and Cell Potential',
                descriptionTamil: 'கிப்ஸ் ஆற்றல் மற்றும் கல மின்னழுத்தம்'
            },
            {
                formula: 'E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{n} \\log Q',
                description: 'Nernst Equation (at 298 K)',
                descriptionTamil: 'நெர்ன்ஸ்ட் சமன்பாடு (298 K இல்)'
            },
            {
                formula: 'm = ZIt = \\frac{E}{F}It',
                description: "Faraday's First Law",
                descriptionTamil: 'ஃபாரடே முதல் விதி'
            }
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
