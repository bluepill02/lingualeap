
import type { NeetModule } from '@/lib/types';

export const coordinationCompounds: NeetModule = {
    id: 'neet-chemistry-coordination-compounds',
    title: 'Chemistry - Coordination Compounds (அணைவுச் சேர்மங்கள்)',
    chapter: 'Coordination Compounds',
    subject: 'Chemistry',
    learningObjectives: [
        "Define key terms like coordination entity, central atom, ligand, coordination number, and coordination sphere.",
        "Understand the IUPAC nomenclature of coordination compounds.",
        "Explain Werner's theory of coordination compounds.",
        "Describe bonding in coordination compounds using Valence Bond Theory (VBT) and Crystal Field Theory (CFT).",
        "Predict the geometry, hybridization, and magnetic properties of complexes.",
        "Understand isomerism in coordination compounds (structural and stereoisomerism).",
        "Appreciate the importance of coordination compounds in biological systems (e.g., hemoglobin, chlorophyll) and analytical chemistry."
    ],
    prerequisites: [
        "Chemical Bonding, especially Lewis structures and VSEPR theory.",
        "Understanding of d-block elements and their properties.",
        "Basic knowledge of different types of isomerism."
    ],
    conceptOverview: "Coordination compounds are a fascinating class of compounds, primarily formed by transition metals. They consist of a central metal atom or ion bonded to a group of surrounding molecules or ions, known as ligands. This chapter introduces the unique terminology and nomenclature used to describe these complex structures. We will explore different theories, like Werner's theory, Valence Bond Theory (VBT), and Crystal Field Theory (CFT), to explain the bonding, geometry, and magnetic properties of these compounds. The vibrant colors and diverse applications of coordination compounds, from pigments to catalysts to essential biological molecules like hemoglobin, make this a vital topic.",
    tamilConnection: "நம் இரத்தத்தில் உள்ள ஹீமோகுளோபின், தாவரங்களில் உள்ள பச்சையம் (chlorophyll) ஆகியவை அணைவுச் சேர்மங்களுக்கு சிறந்த எடுத்துக்காட்டுகள். ஒரு மைய உலோக அயனியைச் சுற்றி ஈனிகள் (ligands) எனப்படும் மூலக்கூறுகள் பிணைக்கப்பட்டு இந்த சிக்கலான அமைப்புகள் உருவாகின்றன. இவற்றின் அமைப்பு மற்றும் பண்புகளைப் பற்றி இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The deep blue color of many traditional 'Kanchipuram' silk sarees is often due to pigments based on coordination compounds, like copper phthalocyanine. The specific arrangement of ligands around the central copper ion is responsible for absorbing certain colors of light and reflecting the brilliant blue we see. This is a direct application of the Crystal Field Theory concepts discussed in this chapter.",
    syllabusMapping: [
        {
            topic: "Coordination Compounds",
            tnBoardChapter: "12th Std Chemistry - Vol 1, Chapter 5: Coordination Chemistry",
            ncertReference: "Class 12 Chemistry - Part 1, Chapter 9: Coordination Compounds",
            notes: "A very important chapter in inorganic chemistry. Questions on IUPAC naming, hybridization and geometry (VBT), and crystal field splitting (CFT) are common. Isomerism is also a frequently tested topic.",
            mappingDescription: '12th Std Chemistry - Vol 1, Chapter 5 maps to NEET Chemistry Unit 17'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Werner\'s Theory of Coordination Compounds', tamil: '1. வெர்னரின் அணைவுச் சேர்மங்கள் கோட்பாடு' },
            content: [
                { english: 'Alfred Werner proposed that metals exhibit two types of valencies:', tamil: 'ஆல்ஃபிரட் வெர்னர், உலோகங்கள் இரண்டு வகையான இணைதிறன்களை வெளிப்படுத்துகின்றன என்று முன்மொழிந்தார்:' },
                { english: '**Primary Valency (முதன்மை இணைதிறன்):** This is ionisable and corresponds to the oxidation state of the central metal ion. It is satisfied by negative ions.', tamil: '**முதன்மை இணைதிறன்:** இது அயனியாகக் கூடியது மற்றும் மைய உலோக அயனியின் ஆக்ஸிஜனேற்ற நிலைக்கு ஒத்துள்ளது. இது எதிர்மறை அயனிகளால் பூர்த்தி செய்யப்படுகிறது.' },
                { english: '**Secondary Valency (இரண்டாம் நிலை இணைதிறன்):** This is non-ionisable and corresponds to the coordination number of the metal ion. It is satisfied by neutral molecules or negative ions (ligands). It determines the geometry of the complex.', tamil: '**இரண்டாம் நிலை இணைதிறன்:** இது அயனியாகாதது மற்றும் உலோக அயனியின் அணைவு எண்ணிற்கு ஒத்துள்ளது. இது நடுநிலை மூலக்கூறுகள் அல்லது எதிர்மறை அயனிகளால் (ஈனிகள்) பூர்த்தி செய்யப்படுகிறது. இது அணைவுச் சேர்மத்தின் வடிவவியலைத் தீர்மானிக்கிறது.' }
            ]
        },
        {
            heading: { english: '2. Important Terminology', tamil: '2. முக்கியச் சொற்கள்' },
            content: [
                { english: '**Coordination Entity (அணைவு সত্তை):** A central metal atom/ion bonded to a fixed number of ligands.', tamil: '**அணைவு সত্তை:** ஒரு மைய உலோக அணு/அயனி ஒரு குறிப்பிட்ட எண்ணிக்கையிலான ஈனிகளுடன் பிணைக்கப்பட்டுள்ளது.' },
                { english: '**Ligands (ஈனிகள்):** The ions or molecules bound to the central atom. They are Lewis bases (electron pair donors). They can be monodentate, bidentate, polydentate based on the number of donor atoms.', tamil: '**ஈனிகள்:** மைய அணுவுடன் பிணைக்கப்பட்ட அயனிகள் அல்லது மூலக்கூறுகள். அவை லூயிஸ் காரங்கள் (எலக்ட்ரான் ஜோடி donneurs). அவை வழங்கும் அணுக்களின் எண்ணிக்கையின் அடிப்படையில் ஒருமுனை, இருமுனை, பல்முனை ஈனிகளாக இருக்கலாம்.' },
                { english: '**Coordination Number (அணைவு எண்):** The number of ligand donor atoms to which the metal is directly bonded.', tamil: '**அணைவு எண்:** உலோகம் நேரடியாகப் பிணைக்கப்பட்டுள்ள ஈனி வழங்கும் அணுக்களின் எண்ணிக்கை.' },
                { english: '**Homoleptic and Heteroleptic Complexes:** Complexes with only one type of ligand are homoleptic; those with more than one type are heteroleptic.', tamil: '**ஒரே விதமான மற்றும் பலவிதமான அணைவுச் சேர்மங்கள்:** ஒரே ஒரு வகை ஈனிகளைக் கொண்ட அணைவுச் சேர்மங்கள் ஹோமோலெப்டிக்; ஒன்றுக்கு மேற்பட்ட வகைகளைக் கொண்டவை ஹெட்டிரோலெப்டிக்.' }
            ]
        },
        {
            heading: { english: '3. Valence Bond Theory (VBT) (இணைதிறன் பிணைப்புக் கொள்கை)', tamil: '3. இணைதிறன் பிணைப்புக் கொள்கை (VBT)' },
            content: [
                { english: 'This theory explains the formation of coordinate bonds in terms of hybridization of metal orbitals.', tamil: 'இந்தக் கொள்கை உலோக ஆர்பிட்டால்களின் இனக்கலப்பைக் கொண்டு அணைவு சகப்பிணைப்பு உருவாவதை விளக்குகிறது.' },
                { english: 'The central metal atom makes available a number of empty orbitals for the formation of coordinate bonds with ligands. The number of empty orbitals is equal to its coordination number.', tamil: 'மைய உலோக அணு, ஈனிகளுடன் அணைவு சகப்பிணைப்புகளை உருவாக்க பல காலி ஆர்பிட்டால்களைக் கிடைக்கச் செய்கிறது. காலி ஆர்பிட்டால்களின் எண்ணிக்கை அதன் அணைவு எண்ணிற்கு சமம்.' },
                { english: 'The appropriate atomic orbitals (s, p, d) of the metal hybridise to give a set of equivalent orbitals of definite geometry such as octahedral ($sp^3d^2$ or $d^2sp^3$), tetrahedral ($sp^3$), square planar ($dsp^2$), etc.', tamil: 'உலோகத்தின் பொருத்தமான அணு ஆர்பிட்டால்கள் (s, p, d) இனக்கலப்படைந்து, எண்முகி ($sp^3d^2$ அல்லது $d^2sp^3$), நான்முகி ($sp^3$), சதுர தள ($dsp^2$) போன்ற குறிப்பிட்ட வடிவவியலைக் கொண்ட சமமான ஆர்பிட்டால்களின் தொகுப்பைக் கொடுக்கின்றன.' },
                { english: '**Inner vs. Outer Orbital Complexes:** If the inner (n-1)d orbitals are used in hybridization, it is an inner orbital or low spin complex. If the outer nd orbitals are used, it is an outer orbital or high spin complex.', tamil: '**உள் மற்றும் வெளி ஆர்பிட்டால் அணைவுச் சேர்மங்கள்:** இனக்கலப்பில் உள் (n-1)d ஆர்பிட்டால்கள் பயன்படுத்தப்பட்டால், அது உள் ஆர்பிட்டால் அல்லது குறைந்த சுழற்சி அணைவுச் சேர்மம். வெளி nd ஆர்பிட்டால்கள் பயன்படுத்தப்பட்டால், அது வெளி ஆர்பிட்டால் அல்லது உயர் சுழற்சி அணைவுச் சேர்மம்.' }
            ]
        },
        {
            heading: { english: '4. Crystal Field Theory (CFT) (படிகப் புலக் கொள்கை)', tamil: '4. படிகப் புலக் கொள்கை (CFT)' },
            content: [
                { english: 'This theory assumes the interaction between the metal ion and the ligands to be purely electrostatic.', tamil: 'இந்தக் கொள்கை உலோக அயனி மற்றும் ஈனிகளுக்கு இடையேயான இடைவினையை முற்றிலும் நிலைமின்னியல் சார்ந்தது எனக் கருதுகிறது.' },
                { english: 'The ligands are treated as point charges. In an isolated gaseous metal ion, the five d-orbitals are degenerate (have the same energy).', tamil: 'ஈனிகள் புள்ளி மின்னூட்டங்களாகக் கருதப்படுகின்றன. ஒரு தனிமைப்படுத்தப்பட்ட வாயு நிலை உலோக அயனியில், ஐந்து d-ஆர்பிட்டால்களும் சம ஆற்றல் கொண்டவை.' },
                { english: 'When ligands approach the metal ion, the degeneracy is lost and the d-orbitals split into two sets of different energies. This is called **Crystal Field Splitting ($\\Delta$) (படிகப் புலப் பிளப்பு)**.', tamil: 'ஈனிகள் உலோக அயனியை அணுகும்போது, சம ஆற்றல் நிலை இழக்கப்பட்டு d-ஆர்பிட்டால்கள் வெவ்வேறு ஆற்றல்களைக் கொண்ட இரண்டு தொகுதிகளாகப் பிரிகின்றன. இது **படிகப் புலப் பிளப்பு ($\\Delta$)** எனப்படும்.' },
                { english: '*   In **octahedral** complexes, the d-orbitals split into a lower energy $t_{2g}$ set and a higher energy $e_g$ set.', tamil: '*   **எண்முகி** அணைவுச் சேர்மங்களில், d-ஆர்பிட்டால்கள் குறைந்த ஆற்றல் கொண்ட $t_{2g}$ தொகுதியாகவும், உயர் ஆற்றல் கொண்ட $e_g$ தொகுதியாகவும் பிரிகின்றன.' },
                { english: '*   In **tetrahedral** complexes, the splitting is inverted: the $e$ set has lower energy and the $t_2$ set has higher energy. The splitting energy is smaller: $\\Delta_t = (4/9)\\Delta_o$.', tamil: '*   **நான்முகி** அணைவுச் சேர்மங்களில், பிளப்பு தலைகீழாக உள்ளது: $e$ தொகுதி குறைந்த ஆற்றலையும், $t_2$ தொகுதி உயர் ஆற்றலையும் கொண்டுள்ளது. பிளப்பு ஆற்றல் சிறியது: $\\Delta_t = (4/9)\\Delta_o$.' }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: IUPAC Nomenclature",
            titleTamil: "நீட் நிலை: IUPAC பெயரிடுதல்",
            difficulty: 'Easy',
            problem: "Write the IUPAC name of the compound [Co(NH₃)₅Cl]Cl₂.",
            problemTamil: "[Co(NH₃)₅Cl]Cl₂ என்ற சேர்மத்தின் IUPAC பெயரை எழுதுக.",
            solutionSteps: [
                { step: 1, explanation: "First, name the cation, then the anion. The complex ion [Co(NH₃)₅Cl]²⁺ is the cation and Cl⁻ is the anion.", explanationTamil: "முதலில், நேர் அயனிக்குப் பெயரிடவும், பின்னர் எதிர் அயனிக்குப் பெயரிடவும். அணைவு அயனி [Co(NH₃)₅Cl]²⁺ நேர் அயனியாகும் மற்றும் Cl⁻ எதிர் அயனியாகும்." },
                { step: 2, explanation: "Name the ligands inside the coordination sphere alphabetically. NH₃ is 'ammine', Cl⁻ is 'chlorido'.", explanationTamil: "அணைவு கோளத்திற்குள் உள்ள ஈனிகளுக்கு அகர வரிசைப்படி பெயரிடவும். NH₃ 'அம்மைன்' என்றும், Cl⁻ 'குளோரிடோ' என்றும் பெயரிடப்படுகிறது." },
                { step: 3, explanation: "Use prefixes like di-, tri-, penta- to indicate the number of each ligand. Here we have five ammine and one chlorido.", calculation: "Pentaamminechlorido" },
                { step: 4, explanation: "Name the central metal atom. Since the complex is a cation, the metal name remains 'cobalt'.", explanationTamil: "மைய உலோக அணுவிற்கு பெயரிடவும். அணைவுச் சேர்மம் ஒரு நேர் அயனி என்பதால், உலோகத்தின் பெயர் 'கோபால்ட்' என்றே இருக்கும்." },
                { step: 5, explanation: "Calculate the oxidation state of the central metal. Let it be x. x + 5(0) + 1(-1) = +2 => x = +3. Write it in Roman numerals.", calculation: "Cobalt(III)" },
                { step: 6, explanation: "Name the counter ion. The anion is chloride.", calculation: "Pentaamminechloridocobalt(III) chloride" }
            ],
            commonPitfall: "Forgetting to name the cation first, or naming ligands in non-alphabetical order.",
            neetHackTamil: "நேர் அயனிக்கு முதலில் பெயரிட மறப்பது, அல்லது ஈனிகளுக்கு அகர வரிசைப்படி பெயரிடாமல் இருப்பது."
        },
        {
            title: "JEE Level: VBT and Magnetic Properties",
            titleTamil: "ஜே.இ.இ நிலை: VBT மற்றும் காந்தப் பண்புகள்",
            difficulty: 'Medium',
            problem: "Using VBT, predict the hybridization, geometry, and magnetic character of [Ni(CN)₄]²⁻. (Atomic number of Ni = 28)",
            problemTamil: "VBT-ஐப் பயன்படுத்தி, [Ni(CN)₄]²⁻ இன் இனக்கலப்பு, வடிவவியல் மற்றும் காந்தப் பண்பைக் கணிக்கவும். (Ni-இன் அணு எண் = 28)",
            solutionSteps: [
                { step: 1, explanation: "Determine the oxidation state of Ni. x + 4(-1) = -2 => x = +2.", explanationTamil: "Ni-இன் ஆக்ஸிஜனேற்ற நிலையைக் கண்டறியவும். x = +2." },
                { step: 2, explanation: "Write the electronic configuration of Ni²⁺ ion.", calculation: "Ni (Z=28) is [Ar]3d⁸4s². So, Ni²⁺ is [Ar]3d⁸." },
                { step: 3, explanation: "Consider the ligand. CN⁻ is a strong field ligand, so it will cause the pairing of electrons in the 3d orbitals.", explanationTamil: "ஈனியைக் கருத்தில் கொள்க. CN⁻ ஒரு வலிமையான புல ஈனி, எனவே இது 3d ஆர்பிட்டால்களில் எலக்ட்ரான்களை இணை சேர்க்கும்." },
                { step: 4, explanation: "The 8 d-electrons pair up in four d-orbitals, leaving one 3d orbital empty.", explanationTamil: "8 d-எலக்ட்ரான்கள் நான்கு d-ஆர்பிட்டால்களில் இணையாகின்றன, ஒரு 3d ஆர்பிட்டாலை காலியாக விடுகின்றன." },
                { step: 5, explanation: "The coordination number is 4. For bonding, one empty 3d, one 4s, and two 4p orbitals hybridize to form four dsp² hybrid orbitals.", calculation: "Hybridization: dsp²" },
                { step: 6, explanation: "dsp² hybridization corresponds to a square planar geometry.", explanationTamil: "dsp² இனக்கலப்பு ஒரு சதுர தள வடிவவியலுக்கு ஒத்துள்ளது." },
                { step: 7, explanation: "Since all electrons are paired up, the complex is diamagnetic.", explanationTamil: "அனைத்து எலக்ட்ரான்களும் இணையாக இருப்பதால், அணைவுச் சேர்மம் டயா காந்தத்தன்மை கொண்டது." }
            ],
            commonPitfall: "Not considering the strength of the ligand. For a weak field ligand like Cl⁻, pairing would not occur, leading to sp³ hybridization and a tetrahedral, paramagnetic complex [NiCl₄]²⁻."
        },
        {
            title: "NEET Level: Isomerism",
            titleTamil: "நீட் நிலை: மாற்றியம்",
            difficulty: 'Medium',
            problem: "Draw the geometrical isomers of [Co(NH₃)₄Cl₂]⁺.",
            problemTamil: "[Co(NH₃)₄Cl₂]⁺ இன் வடிவ மாற்றியங்களை வரையவும்.",
            solutionSteps: [
                { step: 1, explanation: "Identify the geometry. This is an octahedral complex of the type MA₄B₂.", explanationTamil: "வடிவவியலை அடையாளம் காணவும். இது MA₄B₂ வகையின் ஒரு எண்முகி அணைவுச் சேர்மம்." },
                { step: 2, explanation: "Geometrical isomers (cis-trans) are possible for this type.", explanationTamil: "இந்த வகைக்கு வடிவ மாற்றியங்கள் (சிஸ்-டிரான்ஸ்) சாத்தியமாகும்." },
                { step: 3, explanation: "Draw the 'cis' isomer, where the two Cl⁻ ligands are adjacent to each other (at a 90° angle).", explanationTamil: "'சிஸ்' மாற்றியத்தை வரையவும், இங்கு இரண்டு Cl⁻ ஈனிகளும் ஒன்றுக்கொன்று அருகில் (90° கோணத்தில்) உள்ளன." },
                { step: 4, explanation: "Draw the 'trans' isomer, where the two Cl⁻ ligands are opposite to each other (at a 180° angle).", explanationTamil: "'டிரான்ஸ்' மாற்றியத்தை வரையவும், இங்கு இரண்டு Cl⁻ ஈனிகளும் ஒன்றுக்கொன்று எதிராக (180° கோணத்தில்) உள்ளன." }
            ],
            neetHack: "For MA₄B₂ type, there are 2 geometrical isomers (cis and trans). For MA₃B₃ type, there are also 2 (facial 'fac' and meridional 'mer'). These are common patterns.",
            commonPitfall: "Confusing geometrical isomerism with optical isomerism. The cis isomer of [Co(NH₃)₄Cl₂]⁺ is chiral and has an optical isomer (enantiomer), but the trans isomer is achiral."
        },
        {
            title: "JEE Level: Crystal Field Theory",
            titleTamil: "ஜே.இ.இ நிலை: படிகப் புலக் கொள்கை",
            difficulty: "Medium",
            problem: "For the complex [Fe(CN)₆]⁴⁻, write the hybridization, magnetic moment and explain its color based on CFT.",
            problemTamil: "[Fe(CN)₆]⁴⁻ அணைவுச் சேர்மத்திற்கு, இனக்கலப்பு, காந்தத் திருப்புத்திறன் ஆகியவற்றைக் எழுதி, CFT அடிப்படையில் அதன் நிறத்தை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "Oxidation state of Fe is x + 6(-1) = -4 => x = +2. Fe²⁺ is a d⁶ system.", explanationTamil: "Fe-இன் ஆக்ஸிஜனேற்ற நிலை +2. Fe²⁺ ஒரு d⁶ அமைப்பு." },
                { step: 2, explanation: "CN⁻ is a strong field ligand. It causes pairing of electrons. The crystal field splitting energy (Δ₀) is large.", explanationTamil: "CN⁻ ஒரு வலிமையான புல ஈனி. இது எலக்ட்ரான்களை இணை சேர்க்கும். படிகப் புலப் பிளப்பு ஆற்றல் (Δ₀) பெரியது." },
                { step: 3, explanation: "For a d⁶ system in an octahedral field with a strong ligand, all six electrons will occupy the lower energy t₂g orbitals (t₂g⁶ e_g⁰).", explanationTamil: "ஒரு வலிமையான ஈனியுடன் கூடிய எண்முகி புலத்தில் உள்ள ஒரு d⁶ அமைப்பிற்கு, ஆறு எலக்ட்ரான்களும் குறைந்த ஆற்றல் கொண்ட t₂g ஆர்பிட்டால்களை (t₂g⁶ e_g⁰) ஆக்கிரமிக்கும்." },
                { step: 4, explanation: "Since there are no unpaired electrons (n=0), the complex is diamagnetic. Magnetic moment μ = √n(n+2) = 0.", explanationTamil: "இணைசேரா எலக்ட்ரான்கள் இல்லாததால் (n=0), அணைவுச் சேர்மம் டயா காந்தத்தன்மை கொண்டது. காந்தத் திருப்புத்திறன் μ = 0." },
                { step: 5, explanation: "Hybridization: Since two inner 3d orbitals are available, it undergoes d²sp³ hybridization, forming an inner orbital complex.", explanationTamil: "இனக்கலப்பு: இரண்டு உள் 3d ஆர்பிட்டால்கள் கிடைப்பதால், இது d²sp³ இனக்கலப்பிற்கு உட்பட்டு, ஒரு உள் ஆர்பிட்டால் அணைவுச் சேர்மத்தை உருவாக்குகிறது." },
                { step: 6, explanation: "Color: The complex appears pale yellow. This is because the crystal field splitting energy Δ₀ is very large due to the strong ligand. It absorbs high-energy light (violet/blue) from the visible spectrum and transmits the complementary low-energy light (yellow).", explanationTamil: "நிறம்: அணைவுச் சேர்மம் வெளிர் மஞ்சளாகத் தெரிகிறது. ஏனெனில் வலிமையான ஈனியால் படிகப் புலப் பிளப்பு ஆற்றல் Δ₀ மிகவும் பெரியது. இது கண்ணுறு நிறமாலையிலிருந்து உயர் ஆற்றல் ஒளியை (ஊதா/நீலம்) உறிஞ்சி, நிரப்பு குறைந்த ஆற்றல் ஒளியை (மஞ்சள்) கடத்துகிறது." }
            ]
        },
        {
            title: "NEET Level: Effective Atomic Number (EAN)",
            titleTamil: "நீட் நிலை: திறனுறு அணு எண் (EAN)",
            difficulty: "Easy",
            problem: "Calculate the EAN of iron in K₄[Fe(CN)₆].",
            problemTamil: "K₄[Fe(CN)₆] இல் உள்ள இரும்பின் திறனுறு அணு எண்ணைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "The formula for EAN is: EAN = Z - (Oxidation State) + 2 * (Coordination Number).", explanationTamil: "EAN க்கான சூத்திரம்: EAN = Z - (ஆக்ஸிஜனேற்ற நிலை) + 2 * (அணைவு எண்)." },
                { step: 2, explanation: "Find the atomic number (Z) of the central metal. For Fe, Z=26.", explanationTamil: "மைய உலோகத்தின் அணு எண்ணை (Z) கண்டறியவும். Fe க்கு, Z=26." },
                { step: 3, explanation: "Determine the oxidation state of Fe. 4(+1) + x + 6(-1) = 0 => x - 2 = 0 => x = +2.", explanationTamil: "Fe-இன் ஆக்ஸிஜனேற்ற நிலையைக் கண்டறியவும். x = +2." },
                { step: 4, explanation: "Determine the coordination number. There are 6 monodentate CN⁻ ligands, so the coordination number is 6.", explanationTamil: "அணைவு எண்ணைக் கண்டறியவும். 6 ஒருமுனை CN⁻ ஈனிகள் உள்ளன, எனவே அணைவு எண் 6 ஆகும்." },
                { step: 5, explanation: "Substitute the values into the EAN formula.", calculation: "EAN = 26 - 2 + 2 * 6 = 24 + 12 = 36" },
                { step: 6, explanation: "The EAN is 36, which is the atomic number of the next noble gas, Krypton. Complexes that obey the EAN rule are generally stable.", explanationTamil: "EAN 36 ஆகும், இது அடுத்த மந்த வாயுவான கிரிப்டானின் அணு எண் ஆகும். EAN விதியைப் பின்பற்றும் அணைவுச் சேர்மங்கள் பொதுவாக நிலையானவை." }
            ]
        }
    ],
    mcqs: [
        { question: "The oxidation state of Ni in [Ni(CO)₄] is:", options: ["A. +4", "B. +2", "C. 0", "D. -4"], answer: "C. 0", explanation: "Carbon monoxide (CO) is a neutral ligand, so the overall charge of the complex is the oxidation state of the metal. Since the complex is neutral, the oxidation state of Ni is 0.", neetFrequency: 5 },
        { question: "Which of the following is a bidentate ligand?", options: ["A. CN⁻", "B. NH₃", "C. H₂O", "D. en (ethylenediamine)"], answer: "D. en (ethylenediamine)", explanation: "Ethylenediamine has two nitrogen donor atoms, so it can form two coordinate bonds with the central metal ion.", neetFrequency: 4 },
        { question: "The IUPAC name for K₃[Fe(CN)₆] is:", options: ["A. Potassium ferricyanide", "B. Potassium hexacyanoferrate(III)", "C. Potassium ferrocyanide", "D. Potassium hexacyanoferrate(II)"], answer: "B. Potassium hexacyanoferrate(III)", explanation: "The cation (Potassium) is named first. The ligand is cyano. The complex is an anion, so the metal name ends in -ate (ferrate). The oxidation state is +3.", neetFrequency: 5 },
        { question: "Which of the following complexes is expected to be colorless?", options: ["A. [Ti(H₂O)₆]³⁺", "B. [Ni(H₂O)₆]²⁺", "C. [Sc(H₂O)₆]³⁺", "D. [V(H₂O)₆]³⁺"], answer: "C. [Sc(H₂O)₆]³⁺", explanation: "Color in transition metal complexes is due to d-d transitions. Scandium in the +3 state (Sc³⁺) has a d⁰ configuration (no d-electrons), so d-d transitions are not possible.", neetFrequency: 4 },
        { question: "The geometry of [NiCl₄]²⁻ is:", options: ["A. Square planar", "B. Tetrahedral", "C. Octahedral", "D. Linear"], answer: "B. Tetrahedral", explanation: "Ni²⁺ is a d⁸ system. Cl⁻ is a weak field ligand, so it does not cause pairing. For coordination number 4, the four empty orbitals used are the 4s and 4p orbitals, leading to sp³ hybridization and tetrahedral geometry.", neetFrequency: 4 },
        { question: "The number of geometrical isomers for [Pt(NH₃)₂(Cl)₂] is:", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "B. 2", explanation: "This is a square planar complex of the type MA₂B₂. It can exist as cis and trans isomers.", neetFrequency: 3 },
        { question: "Which of the following is an ambidentate ligand?", options: ["A. H₂O", "B. NH₃", "C. SCN⁻", "D. C₂O₄²⁻"], answer: "C. SCN⁻", explanation: "The thiocyanate ion (SCN⁻) can coordinate through either the sulfur atom or the nitrogen atom.", neetFrequency: 3 },
        { question: "According to Valence Bond Theory, the hybridization of the cobalt ion in [Co(NH₃)₆]³⁺ is:", options: ["A. sp³", "B. dsp²", "C. sp³d²", "D. d²sp³"], answer: "D. d²sp³", explanation: "Co³⁺ is a d⁶ system. NH₃ is a strong field ligand, causing the six d-electrons to pair up in three d-orbitals. This leaves two inner (3d) orbitals vacant, which participate in d²sp³ hybridization.", neetFrequency: 5 },
        { question: "Hemoglobin is a coordination compound containing:", options: ["A. Iron", "B. Magnesium", "C. Cobalt", "D. Copper"], answer: "A. Iron", explanation: "Hemoglobin contains iron in the +2 oxidation state coordinated to a porphyrin ring.", neetFrequency: 2 },
        { question: "Crystal Field Splitting energy (Δ₀) for octahedral complexes is larger for:", options: ["A. Weak field ligands", "B. Strong field ligands", "C. Cationic ligands", "D. Anionic ligands"], answer: "B. Strong field ligands", explanation: "Strong field ligands cause a larger splitting of the d-orbitals. The spectrochemical series arranges ligands in order of increasing field strength.", neetFrequency: 4 },
        { question: "The coordination number of Co in [Co(en)₃]³⁺ is:", options: ["A. 3", "B. 4", "C. 5", "D. 6"], answer: "D. 6", explanation: "Ethylenediamine (en) is a bidentate ligand, meaning each 'en' molecule forms two coordinate bonds. With three 'en' ligands, the total coordination number is 3 × 2 = 6.", neetFrequency: 4 },
        { question: "EDTA is a:", options: ["A. Monodentate ligand", "B. Bidentate ligand", "C. Tetradentate ligand", "D. Hexadentate ligand"], answer: "D. Hexadentate ligand", explanation: "Ethylenediaminetetraacetate (EDTA) has six donor atoms (two nitrogens and four oxygens) and can form six bonds with a metal ion.", neetFrequency: 2 },
        { question: "Which of the following complexes shows linkage isomerism?", options: ["A. [Co(NH₃)₅(NO₂)]Cl₂", "B. [Co(H₂O)₆]Cl₃", "C. [Pt(NH₃)₂Cl₂]", "D. [Cr(NH₃)₆][Co(CN)₆]"], answer: "A. [Co(NH₃)₅(NO₂)]Cl₂", explanation: "Linkage isomerism occurs with ambidentate ligands. The NO₂⁻ ligand can bind through the nitrogen (nitro) or the oxygen (nitrito).", neetFrequency: 3 },
        { question: "The geometry of [Cu(NH₃)₄]²⁺ is:", options: ["A. Tetrahedral", "B. Octahedral", "C. Square planar", "D. Linear"], answer: "C. Square planar", explanation: "Cu²⁺ is a d⁹ system. For coordination number 4, it undergoes dsp² hybridization, resulting in a square planar geometry.", neetFrequency: 3 },
        { question: "The complex [Co(en)₂Cl₂]Cl exhibits:", options: ["A. Linkage isomerism", "B. Geometrical isomerism", "C. Optical isomerism", "D. Both B and C"], answer: "D. Both B and C", explanation: "It exists as cis and trans geometrical isomers. The cis isomer is chiral and non-superimposable on its mirror image, so it also exhibits optical isomerism.", neetFrequency: 4 },
        { question: "Wilkinson's catalyst, used in the hydrogenation of alkenes, is a coordination compound of:", options: ["A. Rhodium", "B. Platinum", "C. Palladium", "D. Nickel"], answer: "A. Rhodium", explanation: "Wilkinson's catalyst has the formula [RhCl(PPh₃)₃].", neetFrequency: 1 },
        { question: "The magnetic moment of [MnCl₄]²⁻ (spin only) is:", options: ["A. 1.73 BM", "B. 2.83 BM", "C. 4.90 BM", "D. 5.92 BM"], answer: "D. 5.92 BM", explanation: "Mn²⁺ is a d⁵ system. Cl⁻ is a weak field ligand, so no pairing occurs. There are 5 unpaired electrons. μ = √n(n+2) = √5(7) = √35 ≈ 5.92 BM.", neetFrequency: 3 },
        { question: "Chlorophyll, the green pigment in plants, is a coordination compound of:", options: ["A. Iron", "B. Magnesium", "C. Calcium", "D. Manganese"], answer: "B. Magnesium", explanation: "The central metal ion in the porphyrin ring of chlorophyll is Magnesium.", neetFrequency: 2 },
        { question: "A complex that obeys the EAN rule is:", options: ["A. [Fe(CN)₆]³⁻", "B. [Fe(CN)₆]⁴⁻", "C. [Co(NH₃)₆]²⁺", "D. [Ni(CO)₃]"], answer: "B. [Fe(CN)₆]⁴⁻", explanation: "For [Fe(CN)₆]⁴⁻, Fe is +2. Z=26. EAN = 26 - 2 + 2*6 = 36, which is the atomic number of the noble gas Krypton.", neetFrequency: 2 },
        { question: "Which theory can explain the color of coordination compounds?", options: ["A. Werner's theory", "B. Valence Bond Theory", "C. Crystal Field Theory", "D. Lewis theory"], answer: "C. Crystal Field Theory", explanation: "CFT explains color by the splitting of d-orbitals and the absorption of light to promote electrons between these split levels (d-d transitions).", neetFrequency: 4 },
        { question: "Synergic bonding is present in:", options: ["A. [Cu(NH₃)₄]²⁺", "B. [Ag(CN)₂]⁻", "C. [Ni(CO)₄]", "D. [CoCl₄]²⁻"], answer: "C. [Ni(CO)₄]", explanation: "Synergic bonding involves a σ-bond from the ligand to the metal and a π-bond from the metal back to the ligand (back bonding). This is characteristic of metal carbonyls.", neetFrequency: 3 },
        { question: "[Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br are examples of:", options: ["A. Linkage isomerism", "B. Hydrate isomerism", "C. Ionization isomerism", "D. Coordination isomerism"], answer: "C. Ionization isomerism", explanation: "These isomers produce different ions in solution. The first gives SO₄²⁻ ions, and the second gives Br⁻ ions.", neetFrequency: 3 },
        { question: "According to CFT, in a tetrahedral complex, the d-orbitals split into:", options: ["A. Two sets of equal energy", "B. Three sets of different energy", "C. t₂g and e_g sets", "D. e and t₂ sets"], answer: "D. e and t₂ sets", explanation: "In tetrahedral complexes, the splitting is inverted compared to octahedral. The d_xy, d_yz, d_xz orbitals form the higher energy t₂ set, and the d_z², d_x²-y² orbitals form the lower energy e set. The 'g' subscript is dropped as tetrahedral complexes lack a center of symmetry.", neetFrequency: 2 },
        { question: "Which ligand is a π-acid ligand?", options: ["A. NH₃", "B. H₂O", "C. CO", "D. Cl⁻"], answer: "C. CO", explanation: "π-acid ligands can accept electron density from the metal into their own empty π* orbitals (back-bonding). CO is a classic example.", neetFrequency: 2 },
        { question: "The geometry and magnetic character of [Ni(CO)₄] are:", options: ["A. Tetrahedral, diamagnetic", "B. Tetrahedral, paramagnetic", "C. Square planar, diamagnetic", "D. Square planar, paramagnetic"], answer: "A. Tetrahedral, diamagnetic", explanation: "Ni is in the 0 oxidation state (3d⁸4s²). CO is a strong ligand that causes the 4s electrons to move to the 3d orbitals, resulting in a 3d¹⁰ configuration. The empty 4s and 4p orbitals are used for sp³ hybridization, giving a tetrahedral geometry. Since there are no unpaired electrons, it is diamagnetic.", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "The complex [Co(NH₃)₆]³⁺ is diamagnetic.", reason: "NH₃ is a strong field ligand and causes pairing of electrons in the d⁶ Co³⁺ ion.", answer: "A", explanation: "Co³⁺ is d⁶. NH₃ is a strong ligand that forces the 6 electrons to pair up in the t₂g orbitals. Since there are no unpaired electrons, the complex is diamagnetic. The reason correctly explains the assertion.", neetFrequency: 4 },
        { assertion: "The complex [NiCl₄]²⁻ is tetrahedral while [Ni(CN)₄]²⁻ is square planar.", reason: "CN⁻ is a strong field ligand whereas Cl⁻ is a weak field ligand.", answer: "A", explanation: "The assertion is correct. The reason is also correct and is the explanation. The weak field Cl⁻ does not cause pairing, leading to sp³ hybridization (tetrahedral). The strong field CN⁻ causes pairing, making a d-orbital available for dsp² hybridization (square planar).", neetFrequency: 5 },
        { assertion: "[Ti(H₂O)₆]³⁺ is colored while [Sc(H₂O)₆]³⁺ is colorless.", reason: "Ti³⁺ has one d-electron, while Sc³⁺ has no d-electrons.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. The color is due to d-d transitions. Ti³⁺ (d¹) can have a d-d transition, but Sc³⁺ (d⁰) cannot.", neetFrequency: 3 },
        { assertion: "Linkage isomerism arises in coordination compounds containing ambidentate ligands.", reason: "Ambidentate ligands have two different donor atoms.", answer: "A", explanation: "The assertion is true. The reason is also true and provides the correct definition and explanation for linkage isomerism. For example, NO₂⁻ can bind via N (nitro) or O (nitrito).", neetFrequency: 2 },
        { assertion: "The IUPAC name for [Ag(NH₃)₂][Ag(CN)₂] is Diamminesilver(I) dicyanidoargentate(I).", reason: "The cation is named first, and the name of the metal in the anionic complex ends with '-ate'.", answer: "A", explanation: "The assertion provides the correct name. The reason correctly states the relevant IUPAC rules, thus explaining the assertion.", neetFrequency: 1 }
    ],
    matchTheColumns: [
        { column1: ["(a) [Co(NH₃)₆]³⁺", "(b) [Ni(CO)₄]", "(c) [Fe(CN)₆]⁴⁻", "(d) [NiCl₄]²⁻"], column2: ["(p) sp³ hybridization", "(q) d²sp³ hybridization", "(r) dsp² hybridization", "(s) Diamagnetic"], answer: "a-q,s; b-p,s; c-q,s; d-p", explanation: "Matching complexes with their hybridization and magnetic property. [Fe(CN)₆]⁴⁻ is also d²sp³ and diamagnetic." },
        { column1: ["(a) Ligand with N and O donor atoms", "(b) Ligand with only N donor atom", "(c) Polydentate ligand", "(d) π-acid ligand"], column2: ["(p) Ammonia (NH₃)", "(q) EDTA⁴⁻", "(r) Carbon Monoxide (CO)", "(s) Nitrito (ONO⁻)"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching ligand types with examples." },
        { column1: ["(a) Werner's Theory", "(b) Valence Bond Theory", "(c) Crystal Field Theory", "(d) Spectrochemical series"], column2: ["(p) d-orbital splitting", "(q) Primary and secondary valency", "(r) Hybridization", "(s) Ligand field strength"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching theories and concepts with their key ideas." },
        { column1: ["(a) Hemoglobin", "(b) Chlorophyll", "(c) Vitamin B₁₂", "(d) Wilkinson's Catalyst"], column2: ["(p) Cobalt", "(q) Rhodium", "(r) Iron", "(s) Magnesium"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching important coordination compounds with their central metal atom." },
        { column1: ["(a) Geometrical Isomerism", "(b) Ionization Isomerism", "(c) Hydrate Isomerism", "(d) Linkage Isomerism"], column2: ["(p) [Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O", "(q) cis- and trans- isomers", "(r) [Co(NH₃)₅(NO₂)]²⁺ and [Co(NH₃)₅(ONO)]²⁺", "(s) [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching types of isomerism with their correct examples." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "\\mu = \\sqrt{n(n+2)} \\text{ BM}", description: "Spin-only magnetic moment, where n is the number of unpaired electrons.", descriptionTamil: "தற்சுழற்சி-மட்டும் காந்தத் திருப்புத்திறன், இங்கு n என்பது இணைசேரா எலக்ட்ரான்களின் எண்ணிக்கை." }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Coordination compounds consist of a central metal ion bonded to ligands.",
        "The bonding, geometry, and magnetic properties can be explained by theories like VBT and CFT.",
        "Strong field ligands cause electron pairing and lead to low spin complexes, while weak field ligands lead to high spin complexes.",
        "Coordination compounds exhibit various types of isomerism, including structural and stereoisomerism.",
        "They play vital roles in biological systems and industrial catalysis."
    ],
    mnemonics: [
        { text: "Remember the spectrochemical series order (simplified): I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO. 'I Brought Some Classy Food, Others Need Cool Cans'.", tamil: "ஸ்பெக்ட்ரோவேதியியல் வரிசையை நினைவில் கொள்க: 'I Brought Some Classy Food, Others Need Cool Cans'." }
    ],
    neetTips: [
        { text: "Questions asking to predict hybridization, geometry, and magnetic properties based on the ligand strength (strong vs. weak field) are extremely common. Master this for VBT.", tamil: "ஈனியின் வலிமையை (வலிமையான vs. பலவீனமான புலம்) அடிப்படையாகக் கொண்டு இனக்கலப்பு, வடிவவியல் மற்றும் காந்தப் பண்புகளைக் கணிக்கக் கேட்கும் கேள்விகள் மிகவும் பொதுவானவை. VBT-க்கு இதை நன்கு கற்றுக் கொள்ளுங்கள்." },
        { text: "Be able to quickly calculate the oxidation state of the central metal. This is the first and most crucial step for solving almost any problem in this chapter.", tamil: "மைய உலோகத்தின் ஆக்ஸிஜனேற்ற நிலையை விரைவாகக் கணக்கிடக் கற்றுக்கொள்ளுங்கள். இந்த அத்தியாயத்தில் உள்ள எந்தவொரு கணக்கையும் தீர்ப்பதற்கான முதல் மற்றும் மிக முக்கியமான படி இதுவாகும்." }
    ],
    studentTip: {
        english: "Create a flowchart for solving VBT problems: 1. Find oxidation state. 2. Write d-electron configuration. 3. Check ligand strength (strong/weak). 4. Decide on pairing. 5. Determine hybridization from available empty orbitals. 6. State geometry and magnetic property.",
        tamil: "VBT கணக்குகளைத் தீர்க்க ஒரு பாய்வு வரைபடத்தை உருவாக்கவும்: 1. ஆக்ஸிஜனேற்ற நிலையைக் கண்டறியவும். 2. d-எலக்ட்ரான் அமைப்பை எழுதவும். 3. ஈனி வலிமையைச் சரிபார்க்கவும் (வலிமையான/பலவீனமான). 4. இணை சேர்தல் பற்றி முடிவு செய்யவும். 5. கிடைக்கக்கூடிய காலி ஆர்பிட்டால்களிலிருந்து இனக்கலப்பைத் தீர்மானிக்கவும். 6. வடிவவியல் மற்றும் காந்தப் பண்பைக் கூறவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why Crystal Field Theory is considered an improvement over Valence Bond Theory. What can CFT explain that VBT cannot (e.g., color, quantitative magnetic moments)?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: இணைதிறன் பிணைப்புக் கொள்கையை விட படிகப் புலக் கொள்கை ஏன் ஒரு முன்னேற்றமாகக் கருதப்படுகிறது? VBT-ஆல் விளக்க முடியாத எதை CFT விளக்க முடியும் (எ.கா., நிறம், அளவுரீதியான காந்தத் திருப்புத்திறன்கள்)?"
    },
    nextChapter: {
        title: "Hydrocarbons",
        titleTamil: "ஹைட்ரோகார்பன்கள்"
    },
    validationReport: []
};

