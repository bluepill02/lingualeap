
import type { NeetModule } from '@/lib/types';

export const dAndFBlockElementsModule: NeetModule = {
    id: 'neet-chemistry-d-and-f-block-elements',
    title: 'Chemistry - d- and f-Block Elements (d- மற்றும் f-தொகுதி தனிமங்கள்)',
    chapter: 'd- and f-Block Elements',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the position of d- and f-block elements in the periodic table.",
        "Explain the general electronic configuration and characteristics of transition metals (d-block).",
        "Analyze trends in properties of the first row of transition metals (e.g., atomic radii, ionization enthalpy, oxidation states, magnetic properties, color).",
        "Describe the preparation and properties of important compounds like K₂Cr₂O₇ and KMnO₄.",
        "Understand the characteristics of inner transition metals (f-block), including lanthanoid contraction.",
        "Compare the properties of lanthanoids and actinoids."
    ],
    prerequisites: [
        "Periodic Classification of Elements and understanding of periodic trends.",
        "Atomic Structure and electronic configurations."
    ],
    conceptOverview: "This chapter focuses on the transition metals (d-block) and inner transition metals (f-block), which occupy the central part of the periodic table. These elements are characterized by the filling of inner d and f orbitals, which gives rise to their unique properties. We will explore why these elements exhibit variable oxidation states, form colored ions, show catalytic activity, and have interesting magnetic properties. The chapter also covers the lanthanoids and actinoids (f-block), paying special attention to the phenomenon of lanthanoid contraction and its consequences.",
    tamilConnection: "இரும்பு, செம்பு, தங்கம், வெள்ளி போன்ற நாம் அன்றாடம் பயன்படுத்தும் பல முக்கிய உலோகங்கள் இடைநிலைத் தனிமங்கள் (d-block) ஆகும். இவை ஏன் வண்ணமயமான சேர்மங்களை உருவாக்குகின்றன, ஏன் வெவ்வேறு ஆக்சிஜனேற்ற நிலைகளைக் காட்டுகின்றன என்பதை இந்த அத்தியாயம் விளக்குகிறது. இது நம்மைச் சுற்றியுள்ள பொருட்களின் பண்புகளுக்கான வேதியியல் காரணத்தை அளிக்கிறது.",
    culturalContext: "The vibrant colors of the murals in temples like those in Thanjavur or the detailed ornamentation of classical dancers often use pigments made from compounds of transition metals. For example, copper compounds give blues and greens, while iron compounds give reds, yellows, and browns. The ability of these d-block elements to form colored compounds is a key topic of this chapter.",
    syllabusMapping: [
        {
            topic: "d- and f-Block Elements",
            tnBoardChapter: "12th Std Chemistry - Vol 1, Chapter 4: Transition and Inner Transition Elements",
            ncertReference: "Class 12 Chemistry - Part 1, Chapter 8: The d- and f-Block Elements",
            notes: "An important chapter for NEET. Questions often focus on the reasons for the characteristic properties of transition metals (color, magnetism, variable oxidation states) and the consequences of lanthanoid contraction.",
            mappingDescription: '12th Std Chemistry - Vol 1, Chapter 4 maps to NEET Chemistry Unit 16'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Position and Electronic Configuration', tamil: '1. நிலை மற்றும் எலக்ட்ரான் அமைப்பு' },
            content: [
                { english: 'd-block elements are placed between s-block and p-block elements, from Group 3 to 12. They are called transition elements because their properties are intermediate between s- and p-block elements.', tamil: 'd-தொகுதி தனிமங்கள் s-தொகுதி மற்றும் p-தொகுதி தனிமங்களுக்கு இடையில், தொகுதி 3 முதல் 12 வரை வைக்கப்பட்டுள்ளன. அவற்றின் பண்புகள் s- மற்றும் p-தொகுதி தனிமங்களுக்கு இடைப்பட்டதாக இருப்பதால் அவை இடைநிலைத் தனிமங்கள் என்று அழைக்கப்படுகின்றன.' },
                { english: 'Their general outer electronic configuration is (n-1)d¹⁻¹⁰ ns¹⁻².', tamil: 'அவற்றின் பொதுவான வெளிக்கூட்டு எலக்ட்ரான் அமைப்பு (n-1)d¹⁻¹⁰ ns¹⁻² ஆகும்.' },
                { english: 'f-block elements are placed separately at the bottom of the periodic table. They are called inner transition elements. Their general configuration is (n-2)f¹⁻¹⁴(n-1)d⁰⁻¹ns².', tamil: 'f-தொகுதி தனிமங்கள் ஆவர்த்தன அட்டவணையின் கீழே தனியாக வைக்கப்பட்டுள்ளன. அவை உள் இடைநிலைத் தனிமங்கள் என்று அழைக்கப்படுகின்றன. அவற்றின் பொதுவான அமைப்பு (n-2)f¹⁻¹⁴(n-1)d⁰⁻¹ns² ஆகும்.' }
            ]
        },
        {
            heading: { english: '2. General Properties of Transition Elements (d-Block)', tamil: '2. இடைநிலைத் தனிமங்களின் பொதுப் பண்புகள் (d-தொகுதி)' },
            content: [
                { english: '**Variable Oxidation States:** They show multiple oxidation states due to the participation of both (n-1)d and ns electrons in bonding, as the energy difference between them is small.', tamil: '**மாறும் ஆக்ஸிஜனேற்ற நிலைகள்:** (n-1)d மற்றும் ns எலக்ட்ரான்களுக்கு இடையேயான ஆற்றல் வேறுபாடு குறைவாக இருப்பதால், இரண்டும் பிணைப்பில் பங்கேற்பதால் அவை பல ஆக்ஸிஜனேற்ற நிலைகளைக் காட்டுகின்றன.' },
                { english: '**Formation of Coloured Ions:** Most of their compounds are coloured due to the presence of unpaired electrons in d-orbitals, which allows for d-d transitions by absorbing light from the visible region.', tamil: '**நிறமுள்ள அயனிகள் உருவாதல்:** d-ஆர்பிட்டால்களில் உள்ள இணைசேரா எலக்ட்ரான்களின் இருப்பு காரணமாக அவற்றின் பெரும்பாலான சேர்மங்கள் நிறമുള്ളவையாக உள்ளன, இது கண்ணுறு ஒளிப் பகுதியிலிருந்து ஒளியை உறிஞ்சி d-d தாவல்களுக்கு அனுமதிக்கிறது.' },
                { english: '**Magnetic Properties:** Most transition metals are paramagnetic due to the presence of unpaired d-electrons.', tamil: '**காந்தப் பண்புகள்:** இணைசேரா d-எலக்ட்ரான்கள் இருப்பதால் பெரும்பாலான இடைநிலை உலோகங்கள் பாரா காந்தத்தன்மை கொண்டவை.' },
                { english: '**Catalytic Properties:** They show catalytic activity due to their ability to show variable oxidation states and form intermediate complexes.', tamil: '**வினைவேகமாற்றிப் பண்புகள்:** மாறும் ஆக்ஸிஜனேற்ற நிலைகளைக் காட்டும் மற்றும் இடைநிலை அணைவுச் சேர்மங்களை உருவாக்கும் திறன் காரணமாக அவை வினைவேகமாற்றிச் செயல்பாட்டைக் காட்டுகின்றன.' },
                { english: '**Formation of Complex Compounds:** They have a great tendency to form coordination compounds due to their small size, high ionic charge, and availability of vacant d-orbitals.', tamil: '**அணைவுச் சேர்மங்கள் உருவாதல்:** அவற்றின் சிறிய அளவு, அதிக அயனி மின்னூட்டம் மற்றும் காலியான d-ஆர்பிட்டால்கள் கிடைப்பதால் அணைவுச் சேர்மங்களை உருவாக்கும் பெரும் போக்கைக் கொண்டுள்ளன.' }
            ]
        },
        {
            heading: { english: '3. Potassium Dichromate (K₂Cr₂O₇) and Potassium Permanganate (KMnO₄)', tamil: '3. பொட்டாசியம் டைகுரோமேட் மற்றும் பொட்டாசியம் பெர்மாங்கனேட்' },
            content: [
                { english: 'Both are strong oxidizing agents, especially in acidic medium.', tamil: 'இரண்டும் வலிமையான ஆக்ஸிஜனேற்றிகள், குறிப்பாக அமில ஊடகத்தில்.' },
                { english: 'In acidic solution, Dichromate ion (Cr₂O₇²⁻, orange) is reduced to Cr³⁺ (green). $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$.', tamil: 'அமிலக் கரைசலில், டைகுரோமேட் அயனி (Cr₂O₇²⁻, ஆரஞ்சு) Cr³⁺ (பச்சை) ஆக ஒடுக்கப்படுகிறது.' },
                { english: 'In acidic solution, Permanganate ion (MnO₄⁻, purple) is reduced to Mn²⁺ (colourless). $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$.', tamil: 'அமிலக் கரைசலில், பெர்மாங்கனேட் அயனி (MnO₄⁻, ஊதா) Mn²⁺ (நிறமற்றது) ஆக ஒடுக்கப்படுகிறது.' }
            ]
        },
        {
            heading: { english: '4. The Lanthanoids and Actinoids (f-Block)', tamil: '4. லாந்தனைடுகள் மற்றும் ஆக்டினைடுகள் (f-தொகுதி)' },
            content: [
                { english: '**Lanthanoid Contraction (லாந்தனைடுக் குறுக்கம்):** The steady decrease in the atomic and ionic radii of lanthanoid elements with increasing atomic number. This is due to the poor shielding effect of 4f electrons.', tamil: '**லாந்தனைடுக் குறுக்கம்:** அணு எண் அதிகரிக்கும்போது லாந்தனைடு தனிமங்களின் அணு மற்றும் அயனி ஆரங்களில் ஏற்படும் சீரான குறைவு. இது 4f எலக்ட்ரான்களின் குறைவான திரைமறைப்பு விளைவால் ஏற்படுகிறது.' },
                { english: '**Consequences of Lanthanoid Contraction:** The radii of the second (4d) and third (5d) transition series are almost identical (e.g., Zr and Hf), making their separation difficult.', tamil: '**லாந்தனைடுக் குறுக்கத்தின் விளைவுகள்:** இரண்டாவது (4d) மற்றும் மூன்றாவது (5d) இடைநிலைத் தொடர்களின் ஆரங்கள் கிட்டத்தட்ட ஒத்தவை (எ.கா., Zr மற்றும் Hf), இது அவற்றைப் பிரிப்பதை கடினமாக்குகிறது.' },
                { english: '**Actinoids:** They are all radioactive. They exhibit a greater range of oxidation states than lanthanoids because of the smaller energy difference between 5f, 6d and 7s orbitals.', tamil: '**ஆக்டினைடுகள்:** அவை அனைத்தும் கதிரியக்கத் தன்மை கொண்டவை. 5f, 6d மற்றும் 7s ஆர்பிட்டால்களுக்கு இடையேயான குறைந்த ஆற்றல் வேறுபாடு காரணமாக அவை லாந்தனைடுகளை விட அதிக அளவிலான ஆக்ஸிஜனேற்ற நிலைகளை வெளிப்படுத்துகின்றன.' }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Electronic Configuration and Oxidation State",
            titleTamil: "நீட் நிலை: எலக்ட்ரான் அமைப்பு மற்றும் ஆக்ஸிஜனேற்ற நிலை",
            difficulty: 'Easy',
            problem: "Write the electronic configuration of Cr³⁺ ion (Atomic number of Cr = 24).",
            problemTamil: "Cr³⁺ அயனியின் எலக்ட்ரான் அமைப்பை எழுதுக (Cr-இன் அணு எண் = 24).",
            solutionSteps: [
                { step: 1, explanation: "First, write the electronic configuration of the neutral Cr atom. Remember that Cr is an exception to the Aufbau principle.", calculation: "Cr (Z=24): [Ar] 4s¹ 3d⁵" },
                { step: 2, explanation: "To form a cation, electrons are first removed from the outermost shell (the ns orbital) and then from the (n-1)d orbital.", explanationTamil: "ஒரு நேரயனியை உருவாக்க, எலக்ட்ரான்கள் முதலில் வெளிப்புற கூட்டிலிருந்தும் (ns ஆர்பிட்டால்) பின்னர் (n-1)d ஆர்பிட்டாலிலிருந்தும் நீக்கப்படுகின்றன." },
                { step: 3, explanation: "To form Cr³⁺, we need to remove 3 electrons. The first electron is removed from the 4s orbital, and the next two are removed from the 3d orbitals.", calculation: "Cr → Cr⁺ + e⁻ ([Ar] 3d⁵) \\\\ Cr⁺ → Cr²⁺ + e⁻ ([Ar] 3d⁴) \\\\ Cr²⁺ → Cr³⁺ + e⁻ ([Ar] 3d³)" },
                { step: 4, explanation: "The final electronic configuration of Cr³⁺ is [Ar] 3d³.", calculation: "Cr³⁺: [Ar] 3d³" }
            ],
            neetHack: "For cations of transition metals, always remove electrons from the ns orbital before the (n-1)d orbital.",
            neetHackTamil: "இடைநிலை உலோகங்களின் நேரயனிகளுக்கு, எப்போதும் (n-1)d ஆர்பிட்டாலுக்கு முன்பு ns ஆர்பிட்டாலிலிருந்து எலக்ட்ரான்களை நீக்கவும்."
        },
        {
            title: "JEE Level: Magnetic Moment",
            titleTamil: "ஜே.இ.இ நிலை: காந்தத் திருப்புத்திறன்",
            difficulty: 'Medium',
            problem: "Calculate the spin-only magnetic moment of the Fe²⁺ ion (Atomic number of Fe = 26).",
            problemTamil: "Fe²⁺ அயனியின் தற்சுழற்சி-மட்டும் காந்தத் திருப்புத்திறனைக் கணக்கிடுக (Fe-இன் அணு எண் = 26).",
            solutionSteps: [
                { step: 1, explanation: "Write the electronic configuration of the neutral Fe atom.", calculation: "Fe (Z=26): [Ar] 4s² 3d⁶" },
                { step: 2, explanation: "Write the electronic configuration of the Fe²⁺ ion by removing two electrons from the outermost 4s orbital.", calculation: "Fe²⁺: [Ar] 3d⁶" },
                { step: 3, explanation: "Determine the number of unpaired electrons (n) in the 3d orbital. The 3d⁶ configuration is filled as: one pair and four unpaired electrons.", calculation: "Number of unpaired electrons, n = 4" },
                { step: 4, explanation: "Use the spin-only magnetic moment formula: μ = √[n(n+2)] Bohr Magnetons (BM).", calculation: "μ = \\sqrt{4(4+2)} = \\sqrt{4 \\times 6} = \\sqrt{24}" },
                { step: 5, explanation: "Calculate the final value.", calculation: "μ ≈ 4.90 BM" }
            ],
            commonPitfall: "Incorrectly counting the number of unpaired electrons. Always draw out the d-orbitals and fill them according to Hund's rule.",
            neetHackTamil: "இணைசேரா எலக்ட்ரான்களின் எண்ணிக்கையை தவறாகக் கணக்கிடுதல். எப்போதும் d-ஆர்பிட்டால்களை வரைந்து ஹுண்டின் விதிப்படி அவற்றை நிரப்பவும்."
        },
        {
            title: "NEET Level: Lanthanoid Contraction",
            titleTamil: "நீட் நிலை: லாந்தனைடுக் குறுக்கம்",
            difficulty: 'Medium',
            problem: "Explain why Zirconium (Zr) and Hafnium (Hf) have almost identical atomic radii.",
            problemTamil: "சிர்க்கோனியம் (Zr) மற்றும் ஹாஃப்னியம் (Hf) ஆகியவை ஏன் கிட்டத்தட்ட ஒரே மாதிரியான அணு ஆரங்களைக் கொண்டுள்ளன என்பதை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "Identify the positions of Zr and Hf in the periodic table. Zr is in the second transition series (4d series), and Hf is directly below it in the third transition series (5d series).", explanationTamil: "ஆவர்த்தன அட்டவணையில் Zr மற்றும் Hf-இன் நிலைகளை அடையாளம் காணவும். Zr இரண்டாவது இடைநிலைத் தொடரிலும் (4d தொடர்), Hf அதற்கு நேர் கீழே மூன்றாவது இடைநிலைத் தொடரிலும் (5d தொடர்) உள்ளது." },
                { step: 2, explanation: "Normally, atomic radius increases significantly down a group due to the addition of a new electron shell.", explanationTamil: "சாதாரணமாக, ஒரு புதிய எலக்ட்ரான் கூடு சேர்க்கப்படுவதால் ஒரு தொகுதியில் கீழே செல்லும்போது அணு ஆரம் குறிப்பிடத்தக்க அளவு அதிகரிக்கிறது." },
                { step: 3, explanation: "However, between the second and third transition series, the 14 lanthanoid elements are filled, where electrons are added to the inner 4f orbitals.", explanationTamil: "இருப்பினும், இரண்டாவது மற்றும் மூன்றாவது இடைநிலைத் தொடர்களுக்கு இடையில், 14 லாந்தனைடு தனிமங்கள் நிரப்பப்படுகின்றன, அங்கு எலக்ட்ரான்கள் உள் 4f ஆர்பிட்டால்களில் சேர்க்கப்படுகின்றன." },
                { step: 4, explanation: "The 4f electrons have a very poor shielding effect. This means they are not effective at shielding the outer electrons from the increasing nuclear charge.", explanationTamil: "4f எலக்ட்ரான்கள் மிகவும் குறைவான திரைமறைப்பு விளைவைக் கொண்டுள்ளன. இதன் பொருள், அவை வெளிப்புற எலக்ட்ரான்களை அதிகரிக்கும் அணுக்கரு மின்னூட்டத்திலிருந்து திறம்பட மறைப்பதில்லை." },
                { step: 5, explanation: "This poor shielding leads to a gradual decrease in size across the lanthanoid series, known as the lanthanoid contraction. This contraction effect almost exactly cancels out the expected increase in size from the extra shell. As a result, Hf has nearly the same atomic radius as Zr.", explanationTamil: "இந்தக் குறைவான திரைமறைப்பு லாந்தனைடு தொடர் முழுவதும் படிப்படியாக அளவு குறைவதற்கு வழிவகுக்கிறது, இது லாந்தனைடுக் குறுக்கம் என அழைக்கப்படுகிறது. இந்தக் குறுக்க விளைவு, கூடுதல் கூட்டினால் எதிர்பார்க்கப்படும் அளவு அதிகரிப்பை கிட்டத்தட்ட சரியாக நீக்குகிறது. இதன் விளைவாக, Hf கிட்டத்தட்ட Zr-இன் அதே அணு ஆரத்தைக் கொண்டுள்ளது." }
            ]
        },
        {
            title: "JEE Level: Oxidizing Action of KMnO₄",
            titleTamil: "ஜே.இ.இ நிலை: KMnO₄-இன் ஆக்ஸிஜனேற்ற செயல்",
            difficulty: 'Medium',
            problem: "Balance the redox reaction between potassium permanganate (KMnO₄) and ferrous sulphate (FeSO₄) in an acidic medium.",
            problemTamil: "அமில ஊடகத்தில் பொட்டாசியம் பெர்மாங்கனேட் (KMnO₄) மற்றும் ஃபெரஸ் சல்பேட் (FeSO₄) ஆகியவற்றுக்கு இடையேயான ஆக்ஸிஜனேற்ற-ஒடுக்க வினையை சமன் செய்யவும்.",
            solutionSteps: [
                { step: 1, explanation: "Write the unbalanced ionic equation.", calculation: "MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺" },
                { step: 2, explanation: "Write and balance the oxidation half-reaction.", calculation: "Fe²⁺ → Fe³⁺ + e⁻" },
                { step: 3, explanation: "Write and balance the reduction half-reaction. Balance O with H₂O, H with H⁺, and charge with e⁻.", calculation: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O" },
                { step: 4, explanation: "Equalize the electrons transferred. Multiply the oxidation half-reaction by 5.", calculation: "5Fe²⁺ → 5Fe³⁺ + 5e⁻" },
                { step: 5, explanation: "Add the two balanced half-reactions. The electrons will cancel out.", calculation: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O" },
                { step: 6, explanation: "This is the balanced ionic equation. The full molecular equation would be 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → K₂SO₄ + 2MnSO₄ + 5Fe₂(SO₄)₃ + 8H₂O." }
            ]
        },
        {
            title: "NEET Level: Color of Ions",
            titleTamil: "நீட் நிலை: அயனிகளின் நிறம்",
            difficulty: "Easy",
            problem: "Explain why Cu⁺ is colorless while Cu²⁺ is blue.",
            problemTamil: "Cu⁺ ஏன் நிறமற்றது, அதேசமயம் Cu²⁺ நீல நிறமாக உள்ளது என்பதை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "Write the electronic configuration for Cu (Z=29), Cu⁺, and Cu²⁺.", calculation: "Cu: [Ar]4s¹3d¹⁰ \\\\ Cu⁺: [Ar]3d¹⁰ \\\\ Cu²⁺: [Ar]3d⁹" },
                { step: 2, explanation: "The color of transition metal ions is due to d-d transitions, which require the presence of partially filled d-orbitals.", explanationTamil: "இடைநிலை உலோக அயனிகளின் நிறம் d-d தாவல்களால் ஏற்படுகிறது, இதற்கு பகுதி நிரம்பிய d-ஆர்பிட்டால்கள் தேவை." },
                { step: 3, explanation: "The Cu⁺ ion has a completely filled d-orbital (3d¹⁰). There are no vacant d-orbitals for an electron to jump to. Therefore, d-d transitions are not possible, and it is colorless.", explanationTamil: "Cu⁺ அயனி முழுமையாக நிரப்பப்பட்ட d-ஆர்பிட்டாலை (3d¹⁰) கொண்டுள்ளது. ஒரு எலக்ட்ரான் தாவಲುக்கு காலியான d-ஆர்பிட்டால்கள் இல்லை. எனவே, d-d தாவல்கள் சாத்தியமில்லை, மேலும் அது நிறமற்றது." },
                { step: 4, explanation: "The Cu²⁺ ion has a partially filled d-orbital (3d⁹). An electron can absorb light from the visible spectrum (red-orange light) and jump to the vacant space in the d-orbital. The complementary color (blue) is transmitted, which is why the ion appears blue in solution.", explanationTamil: "Cu²⁺ அயனி பகுதி நிரம்பிய d-ஆர்பிட்டாலை (3d⁹) கொண்டுள்ளது. ஒரு எலக்ட்ரான் கண்ணுறு ஒளிப் பகுதியிலிருந்து (சிவப்பு-ஆரஞ்சு ஒளி) ஒளியை உறிஞ்சி d-ஆர்பிட்டாலில் உள்ள காலியான இடத்திற்கு தாவ முடியும். நிரப்பு நிறம் (நீலம்) கடத்தப்படுகிறது, இதனால்தான் அயனி கரைசலில் நீல நிறமாகத் தெரிகிறது." }
            ]
        }
    ],
    mcqs: [
        { question: "Which of the following elements shows a maximum number of oxidation states?", options: ["A. Sc (21)", "B. Fe (26)", "C. Mn (25)", "D. Zn (30)"], answer: "C. Mn (25)", explanation: "Manganese (Mn) has the configuration [Ar]3d⁵4s². It can lose all 7 valence electrons, showing oxidation states from +2 to +7.", neetFrequency: 5 },
        { question: "Lanthanoid contraction is due to the increase in:", options: ["A. Atomic number", "B. Shielding effect", "C. Atomic radius", "D. Effective nuclear charge"], answer: "D. Effective nuclear charge", explanation: "The poor shielding by 4f electrons cannot compensate for the increase in nuclear charge, leading to a stronger pull on the outer electrons and a contraction in size.", neetFrequency: 4 },
        { question: "Which of the following ions is colorless?", options: ["A. Cu²⁺", "B. Ti³⁺", "C. Sc³⁺", "D. V³⁺"], answer: "C. Sc³⁺", explanation: "Sc³⁺ has the configuration [Ar]3d⁰. Since it has no d-electrons, d-d transitions are not possible, and it is colorless.", neetFrequency: 4 },
        { question: "In acidic medium, KMnO₄ acts as an oxidizing agent. The oxidation number of Mn changes from:", options: ["A. +7 to +2", "B. +7 to +4", "C. +7 to +6", "D. +6 to +2"], answer: "A. +7 to +2", explanation: "In acidic medium, the permanganate ion MnO₄⁻ (Mn is +7) is reduced to the Mn²⁺ ion.", neetFrequency: 3 },
        { question: "The general electronic configuration of transition elements is:", options: ["A. ns¹⁻²", "B. (n-1)d¹⁻¹⁰ ns¹⁻²", "C. ns²np¹⁻⁶", "D. (n-2)f¹⁻¹⁴(n-1)d⁰⁻¹ns²"], answer: "B. (n-1)d¹⁻¹⁰ ns¹⁻²", explanation: "This configuration represents the filling of the (n-1)d subshell.", neetFrequency: 2 },
        { question: "Which of the following pairs of elements have almost similar atomic radii?", options: ["A. Zr and Hf", "B. Fe and Co", "C. Sc and Y", "D. Ag and Au"], answer: "A. Zr and Hf", explanation: "Due to the lanthanoid contraction, the atomic radius of Hafnium (Hf), which is in the 5d series, is almost identical to that of Zirconium (Zr) in the 4d series.", neetFrequency: 4 },
        { question: "The catalytic activity of transition metals is attributed to their:", options: ["A. High melting points", "B. Ability to form colored ions", "C. Variable oxidation states", "D. High density"], answer: "C. Variable oxidation states", explanation: "Their ability to adopt multiple oxidation states allows them to form temporary intermediate compounds, providing a new reaction path with lower activation energy.", neetFrequency: 3 },
        { question: "Which of the following is not a characteristic of transition metals?", options: ["A. Paramagnetism", "B. Formation of complex ions", "C. Variable oxidation states", "D. Natural radioactivity"], answer: "D. Natural radioactivity", explanation: "While some heavy transition metals can be radioactive, it is not a general characteristic. Natural radioactivity is a defining feature of the actinoids.", neetFrequency: 2 },
        { question: "The color of K₂Cr₂O₇ solution is:", options: ["A. Green", "B. Orange", "C. Purple", "D. Blue"], answer: "B. Orange", explanation: "The dichromate ion (Cr₂O₇²⁻) is orange in color.", neetFrequency: 1 },
        { question: "The magnetic moment of a transition metal ion is found to be 3.87 BM. The number of unpaired electrons present in it is:", options: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: "B. 3", explanation: "Using μ = √[n(n+2)]. For n=3, μ = √[3(5)] = √15 ≈ 3.87 BM.", neetFrequency: 4 },
        { question: "Which of the following is an alloy of copper and zinc?", options: ["A. Bronze", "B. Brass", "C. German Silver", "D. Bell metal"], answer: "B. Brass", explanation: "Brass is an alloy of copper and zinc. Bronze is copper and tin.", neetFrequency: 1 },
        { question: "The most common oxidation state of lanthanoids is:", options: ["A. +1", "B. +2", "C. +3", "D. +4"], answer: "C. +3", explanation: "The +3 oxidation state is the most stable and common for all lanthanoid elements.", neetFrequency: 3 },
        { question: "Actinoids exhibit a greater range of oxidation states than lanthanoids because:", options: ["A. The 5f orbitals are more buried than the 4f orbitals", "B. The 5f orbitals have a greater shielding effect", "C. There is a smaller energy difference between 5f, 6d and 7s orbitals", "D. They are all radioactive"], answer: "C. There is a smaller energy difference between 5f, 6d and 7s orbitals", explanation: "The smaller energy gap allows electrons from all three subshells to participate in bonding.", neetFrequency: 2 },
        { question: "Which of the following elements does not belong to the first transition series (3d series)?", options: ["A. Vanadium (23)", "B. Chromium (24)", "C. Silver (47)", "D. Copper (29)"], answer: "C. Silver (47)", explanation: "Silver (Ag) belongs to the second transition series (4d series).", neetFrequency: 1 },
        { question: "The formula for chromyl chloride is:", options: ["A. CrO₂Cl₂", "B. CrOCl₃", "C. CrCl₃", "D. Cr₂O₃"], answer: "A. CrO₂Cl₂", explanation: "The chromyl chloride test gives reddish-brown vapors of CrO₂Cl₂.", neetFrequency: 2 },
        { question: "The green color of the Cr³⁺ ion is due to:", options: ["A. d-d transition", "B. Charge transfer", "C. Its small size", "D. Its high charge"], answer: "A. d-d transition", explanation: "The color of transition metal ions with partially filled d-orbitals is due to d-d transitions.", neetFrequency: 3 },
        { question: "Which element is known as a coinage metal?", options: ["A. Iron", "B. Zinc", "C. Copper", "D. Scandium"], answer: "C. Copper", explanation: "Group 11 elements (Copper, Silver, Gold) are known as coinage metals.", neetFrequency: 1 },
        { question: "Interstitial compounds are formed when small atoms are trapped inside the crystal lattice of:", options: ["A. s-block metals", "B. p-block elements", "C. Transition metals", "D. f-block metals"], answer: "C. Transition metals", explanation: "Transition metals have voids or interstices in their crystal lattices that can accommodate small atoms like H, C, or N.", neetFrequency: 2 },
        { question: "Zinc is not considered a transition element because:", options: ["A. It is a soft metal", "B. It has a completely filled d-orbital in its ground state and common oxidation state", "C. It is diamagnetic", "D. It has a low melting point"], answer: "B. It has a completely filled d-orbital in its ground state and common oxidation state", explanation: "A transition element must have an incompletely filled d-orbital in its elemental state or in any of its common ions. Zn ([Ar]3d¹⁰4s²) and its only common ion Zn²⁺ ([Ar]3d¹⁰) have completely filled d-orbitals.", neetFrequency: 4 },
        { question: "Which of the following is a component of Vitamin B₁₂?", options: ["A. Iron", "B. Cobalt", "C. Magnesium", "D. Zinc"], answer: "B. Cobalt", explanation: "Vitamin B₁₂ (cobalamin) is a coordination compound containing a cobalt ion.", neetFrequency: 1 },
        { question: "The color of KMnO₄ is due to:", options: ["A. d-d transition", "B. Charge transfer from ligand to metal", "C. Presence of unpaired electrons", "D. Polarisation"], answer: "B. Charge transfer from ligand to metal", explanation: "In MnO₄⁻, Mn is in a +7 state (3d⁰). There are no d-electrons for a d-d transition. The intense purple color is due to a ligand-to-metal charge transfer (LMCT) spectrum.", neetFrequency: 3 },
        { question: "The general electronic configuration of actinoids is:", options: ["A. (n-2)f¹⁻¹⁴(n-1)d⁰⁻¹ns²", "B. (n-1)f¹⁻¹⁴nd⁰⁻¹ns²", "C. 5f¹⁻¹⁴6d⁰⁻¹7s²", "D. Both A and C"], answer: "D. Both A and C", explanation: "A is the general formula where n=7 for actinoids. C is the specific formula for the actinoid series.", neetFrequency: 2 },
        { question: "Amalgam is an alloy of a metal with:", options: ["A. Carbon", "B. Silicon", "C. Mercury", "D. Gold"], answer: "C. Mercury", explanation: "An amalgam is an alloy of mercury with another metal.", neetFrequency: 1 },
        { question: "Transition elements form alloys easily because they have:", options: ["A. Similar atomic sizes", "B. High melting points", "C. High density", "D. Similar chemical properties"], answer: "A. Similar atomic sizes", explanation: "The similar atomic radii of transition metals allow atoms of one metal to easily substitute for atoms of another in the crystal lattice, facilitating alloy formation.", neetFrequency: 2 },
        { question: "Mischmetal is an alloy of:", options: ["A. Lanthanoid metals", "B. Actinoid metals", "C. Transition metals", "D. s-block metals"], answer: "A. Lanthanoid metals", explanation: "Mischmetal is an alloy consisting mainly of lanthanoid metals (about 95%) and iron (about 5%).", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "Transition metals have high melting points.", reason: "They have strong metallic bonds due to the involvement of both ns and (n-1)d electrons.", answer: "A", explanation: "Both statements are true, and the reason correctly explains the assertion. The delocalization of both s and d electrons leads to very strong metallic bonding.", neetFrequency: 3 },
        { assertion: "The atomic radii of the elements of the 4d and 5d series are almost the same.", reason: "This is due to the poor shielding effect of f-electrons, known as lanthanoid contraction.", answer: "A", explanation: "Both statements are true and the reason is the correct explanation for the assertion.", neetFrequency: 4 },
        { assertion: "Zn, Cd, and Hg are not considered transition elements.", reason: "They have a completely filled d-orbital in their ground state as well as in their most common oxidation state.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct definition-based explanation for why they are excluded.", neetFrequency: 4 },
        { assertion: "K₂Cr₂O₇ is a stronger oxidizing agent in acidic medium than in alkaline medium.", reason: "The oxidation state of Cr in K₂Cr₂O₇ is +6.", answer: "B", explanation: "Both assertion and reason are true statements. However, the reason (oxidation state is +6) doesn't explain why it's a stronger oxidant in acid. The explanation lies in the redox potential, which is higher in acidic medium (Cr₂O₇²⁻/Cr³⁺).", neetFrequency: 2 },
        { assertion: "Actinoids show a wider range of oxidation states than lanthanoids.", reason: "The 5f, 6d, and 7s orbitals have comparable energies.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. The similar energy levels allow electrons from all three subshells to participate in bonding.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Sc³⁺", "(b) Mn²⁺", "(c) Fe³⁺", "(d) Ni²⁺"], column2: ["(p) 5 unpaired electrons", "(q) 0 unpaired electrons", "(r) 2 unpaired electrons", "(s) 4 unpaired electrons"], answer: "a-q, b-p, c-p, d-r", explanation: "Matching ions with their number of unpaired d-electrons. Both Mn²⁺ and Fe³⁺ have a d⁵ configuration." },
        { column1: ["(a) Paramagnetic", "(b) Diamagnetic", "(c) Ferromagnetic", "(d) Lanthanoid"], column2: ["(p) Cerium", "(q) Zinc", "(r) Iron", "(s) Copper(II)"], answer: "a-s, b-q, c-r, d-p", explanation: "Matching the magnetic property or element type with a correct example." },
        { column1: ["(a) Green vitriol", "(b) Blue vitriol", "(c) Potassium dichromate", "(d) Potassium permanganate"], column2: ["(p) Orange crystals", "(q) Purple crystals", "(r) FeSO₄·7H₂O", "(s) CuSO₄·5H₂O"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching common names with chemical formulas or descriptions." },
        { column1: ["(a) Formation of colored ions", "(b) Variable oxidation states", "(c) Catalytic activity", "(d) Lanthanoid contraction"], column2: ["(p) Similar radii of 4d and 5d series", "(q) d-d transition", "(r) Participation of ns and (n-1)d electrons", "(s) Formation of intermediate complexes"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching the properties of transition elements with their underlying reasons." },
        { column1: ["(a) +7 oxidation state", "(b) +3 oxidation state is most stable", "(c) Forms a colorless ion M²⁺", "(d) Shows only +3 oxidation state"], column2: ["(p) Lanthanum (La)", "(q) Zinc (Zn)", "(r) Scandium (Sc)", "(s) Manganese (Mn)"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching elements with their characteristic oxidation state properties." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "\\mu = \\sqrt{n(n+2)} \\text{ BM}", description: "Spin-only magnetic moment formula, where n is the number of unpaired electrons.", descriptionTamil: "தற்சுழற்சி-மட்டும் காந்தத் திருப்புத்திறன் சூத்திரம், இங்கு n என்பது இணைசேரா எலக்ட்ரான்களின் எண்ணிக்கை." }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Transition metals are characterized by partially filled d-orbitals, leading to variable oxidation states, colored compounds, and catalytic activity.",
        "The lanthanoid contraction explains the similarity in size and properties between the second and third transition series elements.",
        "KMnO₄ and K₂Cr₂O₇ are strong oxidizing agents widely used in titrations.",
        "The magnetic properties of transition metal ions are determined by the number of unpaired electrons."
    ],
    mnemonics: [
        { text: "Remember the first transition series (3d): 'Scary Ti Vainly Cries `Maniac!` Ferociously, `Cowardly Nuisance!` Cries Zinc.' (Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn)", tamil: "'Scary Ti Vainly Cries `Maniac!` Ferociously, `Cowardly Nuisance!` Cries Zinc.' (Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn)" }
    ],
    neetTips: [
        { text: "Questions asking to identify colored/colorless or paramagnetic/diamagnetic ions are very common. The key is to quickly write the electronic configuration and count the number of unpaired d-electrons.", tamil: "நிறமுள்ள/நிறமற்ற அல்லது பாரா காந்த/டயா காந்த அயனிகளை அடையாளம் காணும் கேள்விகள் மிகவும் பொதுவானவை. முக்கியமானது, எலக்ட்ரான் அமைப்பை விரைவாக எழுதி, இணைசேரா d-எலக்ட்ரான்களின் எண்ணிக்கையைக் கணக்கிடுவதாகும்." },
        { text: "Memorize the colors of common transition metal ions like Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (yellow/brown), and the ions KMnO₄ (purple) and K₂Cr₂O₇ (orange).", tamil: "Cu²⁺ (நீலம்), Fe²⁺ (பச்சை), Fe³⁺ (மஞ்சள்/பழுப்பு) போன்ற பொதுவான இடைநிலை உலோக அயனிகளின் நிறங்களையும், KMnO₄ (ஊதா) மற்றும் K₂Cr₂O₇ (ஆரஞ்சு) அயனிகளின் நிறங்களையும் மனப்பாடம் செய்யவும்." }
    ],
    studentTip: {
        english: "Create a summary table for the first transition series (Sc to Zn) listing their configuration, common oxidation states, and magnetic properties. This will be an invaluable tool for quick revision.",
        tamil: "முதல் இடைநிலைத் தொடருக்கு (Sc முதல் Zn வரை) அவற்றின் கட்டமைப்பு, பொதுவான ஆக்சிஜனேற்ற நிலைகள் மற்றும் காந்தப் பண்புகளை பட்டியலிடும் ஒரு சுருக்க அட்டவணையை உருவாக்கவும். இது விரைவான திருத்தத்திற்கு ஒரு விலைமதிப்பற்ற கருவியாக இருக்கும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why the melting points of transition metals are very high, but that of zinc, cadmium, and mercury are comparatively low.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: இடைநிலை உலோகங்களின் உருகுநிலைகள் ஏன் மிக அதிகம், ஆனால் துத்தநாகம், காட்மியம் மற்றும் பாதரசத்தின் உருகுநிலைகள் ஒப்பீட்டளவில் ஏன் குறைவாக உள்ளன?"
    },
    nextChapter: {
        title: "Coordination Compounds",
        titleTamil: "அணைவுச் சேர்மங்கள்"
    },
    validationReport: []
};
