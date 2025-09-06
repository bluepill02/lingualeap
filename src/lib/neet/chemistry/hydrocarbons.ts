
import type { NeetModule } from '@/lib/types';

export const hydrocarbons: NeetModule = {
    id: 'neet-chemistry-hydrocarbons',
    title: 'Chemistry - Hydrocarbons (ஹைட்ரோகார்பன்கள்)',
    chapter: 'Hydrocarbons',
    subject: 'Chemistry',
    learningObjectives: [
        "Classify hydrocarbons into alkanes, alkenes, alkynes, and aromatic hydrocarbons.",
        "Understand the IUPAC nomenclature for different classes of hydrocarbons.",
        "Describe the methods of preparation for alkanes, alkenes, and alkynes.",
        "Analyze the physical and chemical properties of each class, including key reactions like substitution, addition, and elimination.",
        "Understand the concept of aromaticity and the structure of benzene.",
        "Explain the mechanism of electrophilic substitution reactions in benzene (nitration, halogenation, sulfonation, Friedel-Crafts).",
    ],
    prerequisites: [
        "Basic Principles of Organic Chemistry, including IUPAC nomenclature and electronic effects.",
        "Understanding of chemical bonding and hybridization."
    ],
    conceptOverview: "Hydrocarbons are the simplest organic compounds, consisting entirely of carbon and hydrogen, but they form the backbone of all organic chemistry. This chapter systematically studies the four main classes: alkanes (single bonds), alkenes (double bonds), alkynes (triple bonds), and aromatic hydrocarbons (like benzene). For each class, we will explore their structure, methods of preparation, and their characteristic chemical reactions. A major focus is on understanding the mechanisms of these reactions, such as free-radical substitution in alkanes and electrophilic addition in alkenes. The unique stability and reactions of aromatic compounds like benzene are also a key part of the chapter.",
    tamilConnection: "சமையல் எரிவாயு (LPG) முதல் பெட்ரோல், டீசல் வரை நாம் பயன்படுத்தும் எரிபொருட்கள் அனைத்தும் ஹைட்ரோகார்பன்களே. கார்பன் மற்றும் ஹைட்ரஜனை மட்டுமே கொண்ட இந்த எளிய மூலக்கூறுகள், கரிம வேதியியலின் அடித்தளமாக விளங்குகின்றன. அவற்றின் அமைப்பு மற்றும் வினைகளைப் பற்றி இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "Natural rubber, obtained from the latex of the rubber tree (Hevea brasiliensis) found in plantations in Tamil Nadu and Kerala, is a polymer of the hydrocarbon isoprene. The properties of rubber are directly related to the structure of this alkene-based monomer. This chapter provides the foundation for understanding the chemistry of such important natural products.",
    syllabusMapping: [
        {
            topic: "Hydrocarbons",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 13: Hydrocarbons",
            ncertReference: "Class 11 Chemistry - Part 2, Chapter 13: Hydrocarbons",
            notes: "A very large and important chapter. Name reactions (Wurtz, Grignard, Friedel-Crafts) and reaction mechanisms are crucial. The stability of alkenes (Saytzeff's rule) and Markovnikov's rule for addition are frequently tested.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapter 13 maps to NEET Chemistry Unit 22'
        }
    ],
    conceptNotes: [
        {
            heading: { english: "1. Alkanes (ஆல்கேன்கள்)", tamil: "1. ஆல்கேன்கள்" },
            content: [
                { english: "Saturated hydrocarbons with the general formula CₙH₂ₙ₊₂. They contain only carbon-carbon single bonds. Carbons are sp³ hybridized.", tamil: "CₙH₂ₙ₊₂ என்ற பொதுவான வாய்ப்பாட்டைக் கொண்ட நிறைவுற்ற ஹைட்ரோகார்பன்கள். அவை கார்பன்-கார்பன் ஒற்றைப் பிணைப்புகளை மட்டுமே கொண்டுள்ளன. கார்பன்கள் sp³ இனக்கலப்பு அடைந்தவை." },
                { english: "**Preparation:** Wurtz reaction: $2R-X + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$. Used to prepare alkanes with an even number of carbon atoms.", tamil: "**தயாரிப்பு:** வூர்ட்ஸ் வினை: $2R-X + 2Na \\xrightarrow{\\text{உலர் ஈதர்}} R-R + 2NaX$. இரட்டைப்படை எண்ணிக்கையிலான கார்பன் அணுக்களைக் கொண்ட ஆல்கேன்களைத் தயாரிக்கப் பயன்படுகிறது." },
                { english: "**Chemical Properties:** Relatively unreactive. Undergo free-radical substitution reactions. Example: Halogenation of methane in the presence of UV light.", tamil: "**வேதியியல் பண்புகள்:** ஒப்பீட்டளவில் வினைத்திறன் குறைவானவை. தனி உறுப்பு பதிலீட்டு வினைகளில் ஈடுபடுகின்றன. எடுத்துக்காட்டு: புற ஊதா ஒளியின் முன்னிலையில் மீத்தேன் ஹாலஜனேற்றம்." }
            ]
        },
        {
            heading: { english: "2. Alkenes (ஆல்கீன்கள்)", tamil: "2. ஆல்கீன்கள்" },
            content: [
                { english: "Unsaturated hydrocarbons with at least one carbon-carbon double bond. General formula CₙH₂ₙ. Carbons in the double bond are sp² hybridized.", tamil: "குறைந்தது ஒரு கார்பன்-கார்பன் இரட்டைப் பிணைப்பைக் கொண்ட நிறைவுறா ஹைட்ரோகார்பன்கள். பொதுவான வாய்ப்பாடு CₙH₂ₙ. இரட்டைப் பிணைப்பில் உள்ள கார்பன்கள் sp² இனக்கலப்பு அடைந்தவை." },
                { english: "**Preparation:** Dehydration of alcohols, dehydrohalogenation of alkyl halides.", tamil: "**தயாரிப்பு:** ஆல்கஹால்களின் நீர்நீக்கம், அல்கைல் ஹேலைடுகளின் டிஹைட்ரோஹாலஜனேற்றம்." },
                { english: "**Chemical Properties:** The double bond is a site of high electron density, making alkenes reactive. They undergo electrophilic addition reactions.", tamil: "**வேதியியல் பண்புகள்:** இரட்டைப் பிணைப்பு அதிக எலக்ட்ரான் அடர்த்தி கொண்ட ஒரு தளமாகும், இது ஆல்கீன்களை வினைத்திறன் மிக்கதாக ஆக்குகிறது. அவை எலக்ட்ரான் கவர் பொருள் சேர்ப்பு வினைகளில் ஈடுபடுகின்றன." },
                { english: "**Markovnikov's Rule (மார்க்கோனிகாவ் விதி):** In the addition of an unsymmetrical reagent (like HBr) to an unsymmetrical alkene, the negative part of the addendum gets attached to the carbon atom which possesses a lesser number of hydrogen atoms.", tamil: "**மார்க்கோனிகாவ் விதி:** ஒரு சமச்சீரற்ற ஆல்கீனுடன் ஒரு சமச்சீரற்ற கரணியை (HBr போன்றவை) சேர்க்கும்போது, சேர்க்கப்படும் பொருளின் எதிர்மறைப் பகுதி குறைந்த எண்ணிக்கையிலான ஹைட்ரஜன் அணுக்களைக் கொண்ட கார்பன் அணுவுடன் இணைகிறது." }
            ]
        },
        {
            heading: { english: "3. Alkynes (ஆல்கைன்கள்)", tamil: "3. ஆல்கைன்கள்" },
            content: [
                { english: "Unsaturated hydrocarbons with at least one carbon-carbon triple bond. General formula CₙH₂ₙ₋₂. Carbons in the triple bond are sp hybridized.", tamil: "குறைந்தது ஒரு கார்பன்-கார்பன் முப்பிணைப்பைக் கொண்ட நிறைவுறா ஹைட்ரோகார்பன்கள். பொதுவான வாய்ப்பாடு CₙH₂ₙ₋₂. முப்பிணைப்பில் உள்ள கார்பன்கள் sp இனக்கலப்பு அடைந்தவை." },
                { english: "**Acidity:** Alkynes with a hydrogen attached to the triply bonded carbon (terminal alkynes) are weakly acidic. This is due to the high s-character (50%) of the sp hybridized orbital, which makes the C-H bond polar.", tamil: "**அமிலத்தன்மை:** முப்பிணைப்பு கார்பனுடன் இணைக்கப்பட்ட ஹைட்ரஜனைக் கொண்ட ஆல்கைன்கள் (முனைய ஆல்கைன்கள்) பலவீனமான அமிலத்தன்மை கொண்டவை. இது sp இனக்கலப்பு ஆர்பிட்டாலின் அதிக s-பண்பு (50%) காரணமாகும், இது C-H பிணைப்பை முனைவுள்ளதாக்குகிறது." }
            ]
        },
        {
            heading: { english: "4. Aromatic Hydrocarbons (அரோமாட்டிக் ஹைட்ரோகார்பன்கள்)", tamil: "4. அரோமாட்டிக் ஹைட்ரோகார்பன்கள்" },
            content: [
                { english: "**Aromaticity (அரோமாட்டிக் தன்மை) - Huckel's Rule:** For a compound to be aromatic, it must be planar, cyclic, completely conjugated, and contain $(4n+2)π$ electrons, where n is an integer (0, 1, 2...). Benzene is the classic example.", tamil: "**அரோமாட்டிக் தன்மை - ஹக்கல் விதி:** ஒரு சேர்மம் அரோமாட்டிக்காக இருக்க, அது தள அமைப்புடையதாகவும், வளையமாகவும், முழுமையாக இணைந்ததாகவும், மற்றும் $(4n+2)π$ எலக்ட்ரான்களைக் கொண்டிருக்க வேண்டும், இங்கு n ஒரு முழு எண் (0, 1, 2...)." },
                { english: "**Benzene ($C_6H_6$):** A planar ring of six sp² hybridized carbon atoms with a delocalized cloud of π electrons above and below the ring. This delocalization makes benzene exceptionally stable.", tamil: "**பென்சீன் ($C_6H_6$):** ஆறு sp² இனக்கலப்பு கார்பன் அணுக்களைக் கொண்ட ஒரு தள வளையம், வளையத்திற்கு மேலும் கீழும் π எலக்ட்ரான்களின் ஒரு பரவிய மேகம் உள்ளது. இந்த இடமாற்றம் பென்சீனை விதிவிலக்காக நிலையானதாக ஆக்குகிறது." },
                { english: "**Electrophilic Aromatic Substitution:** The characteristic reaction of benzene. An electrophile attacks the electron-rich benzene ring, substituting one of the hydrogen atoms.", tamil: "**எலக்ட்ரான் கவர் பொருள் பதிலீட்டு வினை:** பென்சீனின் சிறப்பியல்பு வினை. ஒரு எலக்ட்ரான் கவர் பொருள், எலக்ட்ரான் நிறைந்த பென்சீன் வளையத்தைத் தாக்கி, ஹைட்ரஜன் அணுக்களில் ஒன்றை பதிலீடு செய்கிறது." }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Markovnikov's Rule",
            titleTamil: "நீட் நிலை: மார்க்கோனிகாவ் விதி",
            difficulty: 'Easy',
            problem: "What is the major product formed when propene (CH₃-CH=CH₂) reacts with HBr?",
            problemTamil: "புரோப்பீன் (CH₃-CH=CH₂) HBr உடன் வினைபுரியும்போது உருவாகும் முக்கிய விளைபொருள் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the reactants: Propene is an unsymmetrical alkene, and HBr is an unsymmetrical reagent.", explanationTamil: "வினைபடு பொருட்களை அடையாளம் காணவும்: புரோப்பீன் ஒரு சமச்சீரற்ற ஆல்கீன், மற்றும் HBr ஒரு சமச்சீரற்ற கரணி." },
                { step: 2, explanation: "Apply Markovnikov's rule, which states that the negative part of the addendum (Br⁻) attaches to the carbon atom with fewer hydrogen atoms.", explanationTamil: "மார்க்கோனிகாவ் விதியைப் பயன்படுத்தவும், இது சேர்க்கப்படும் பொருளின் எதிர்மறைப் பகுதி (Br⁻) குறைந்த ஹைட்ரஜன் அணுக்களைக் கொண்ட கார்பன் அணுவுடன் இணைகிறது என்று கூறுகிறது." },
                { step: 3, explanation: "In propene (CH₃-CH=CH₂), the middle carbon (C2) has one hydrogen, and the end carbon (C1) has two hydrogens. Therefore, Br⁻ will attach to C2.", explanationTamil: "புரோப்பீனில் (CH₃-CH=CH₂), நடு கார்பன் (C2) ஒரு ஹைட்ரஜனையும், இறுதி கார்பன் (C1) இரண்டு ஹைட்ரஜன்களையும் கொண்டுள்ளது. எனவே, Br⁻ C2 உடன் இணையும்." },
                { step: 4, explanation: "The positive part (H⁺) attaches to the other carbon (C1). The major product is 2-bromopropane (CH₃-CHBr-CH₃).", explanationTamil: "நேர்மறைப் பகுதி (H⁺) மற்ற கார்பனுடன் (C1) இணைகிறது. முக்கிய விளைபொருள் 2-புரோமோபுரோப்பேன் (CH₃-CHBr-CH₃) ஆகும்." }
            ],
            neetHack: "This rule is based on the stability of the intermediate carbocation. The addition of H⁺ to C1 forms a more stable secondary carbocation (at C2), which is then attacked by Br⁻.",
            neetHackTamil: "இந்த விதி இடைநிலை கார்போகேட்டயனின் நிலைப்புத்தன்மையை அடிப்படையாகக் கொண்டது. H⁺ ஐ C1 இல் சேர்ப்பது ஒரு அதிக நிலையான இரண்டாம் நிலை கார்போகேட்டயனை (C2 இல்) உருவாக்குகிறது, அது பின்னர் Br⁻ ஆல் தாக்கப்படுகிறது."
        },
        {
            title: "JEE Level: Ozonolysis",
            titleTamil: "ஜே.இ.இ நிலை: ஓசோனேற்றம்",
            difficulty: 'Medium',
            problem: "An alkene on ozonolysis gives a mixture of ethanal and pentan-3-one. What is the structure and IUPAC name of the alkene?",
            problemTamil: "ஒரு ஆல்கீன் ஓசோனேற்றத்தின் போது எத்தனால் மற்றும் பென்டேன்-3-ஓன் ஆகியவற்றின் கலவையைக் கொடுக்கிறது. அந்த ஆல்கீனின் அமைப்பு மற்றும் IUPAC பெயர் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Ozonolysis cleaves the double bond and adds an oxygen atom to each of the double-bonded carbons, forming carbonyl compounds (aldehydes or ketones).", explanationTamil: "ஓசோனேற்றம் இரட்டைப் பிணைப்பை பிளந்து, இரட்டைப் பிணைப்பு கார்பன்களில் ஒவ்வொன்றிலும் ஒரு ஆக்ஸிஜன் அணுவைச் சேர்த்து, கார்போனைல் சேர்மங்களை (ஆல்டிஹைடுகள் அல்லது கீட்டோன்கள்) உருவாக்குகிறது." },
                { step: 2, explanation: "Write the structures of the products: Ethanal (CH₃CHO) and Pentan-3-one (CH₃CH₂COCH₂CH₃).", explanationTamil: "விளைபொருட்களின் அமைப்புகளை எழுதவும்: எத்தனால் (CH₃CHO) மற்றும் பென்டேன்-3-ஓன் (CH₃CH₂COCH₂CH₃)." },
                { step: 3, explanation: "To find the original alkene, remove the oxygen atoms from the carbonyl groups and join the two carbon atoms with a double bond.", explanationTamil: "அசல் ஆல்கீனைக் கண்டுபிடிக்க, கார்போனைல் குழுக்களிலிருந்து ஆக்ஸிஜன் அணுக்களை நீக்கி, இரண்டு கார்பன் அணுக்களையும் ஒரு இரட்டைப் பிணைப்புடன் இணைக்கவும்." },
                { step: 4, explanation: "The resulting structure is CH₃-CH=C(CH₂CH₃)₂.", explanationTamil: "கிடைக்கும் அமைப்பு CH₃-CH=C(CH₂CH₃)₂ ஆகும்." },
                { step: 5, explanation: "Determine the IUPAC name. The longest chain containing the double bond has 5 carbons. The substituents are a methyl group at C2 and an ethyl group at C3. The name is 3-Ethyl-2-methylpent-2-ene.", explanationTamil: "IUPAC பெயரைத் தீர்மானிக்கவும். இரட்டைப் பிணைப்பைக் கொண்ட மிக நீண்ட சங்கிலி 5 கார்பன்களைக் கொண்டுள்ளது. பதிலீடுகள் C2 இல் ஒரு மெத்தில் குழு மற்றும் C3 இல் ஒரு எத்தில் குழு ஆகும். பெயர் 3-எத்தில்-2-மெத்தில்பென்ட்-2-ஈன் ஆகும்." }
            ],
            neetHack: "Ozonolysis problems are like solving a puzzle backwards. Write down the products, remove the oxygens, and connect the carbons with a C=C bond.",
            commonPitfall: "Incorrectly numbering the chain for the final IUPAC name."
        },
        {
            title: "NEET Level: Acidity of Alkynes",
            titleTamil: "நீட் நிலை: ஆல்கைன்களின் அமிலத்தன்மை",
            difficulty: 'Easy',
            problem: "Which of the following hydrocarbons is acidic in nature? (a) Ethane, (b) Ethene, (c) Ethyne, (d) Benzene",
            problemTamil: "பின்வரும் ஹைட்ரோகார்பன்களில் எது அமிலத்தன்மை கொண்டது? (a) ஈத்தேன், (b) ஈத்தீன், (c) ஈத்தைன், (d) பென்சீன்",
            solutionSteps: [
                { step: 1, explanation: "Acidity in hydrocarbons is related to the stability of the conjugate base (carbanion) formed after losing a proton (H⁺).", explanationTamil: "ஹைட்ரோகார்பன்களில் அமிலத்தன்மை, ஒரு புரோட்டானை (H⁺) இழந்த பிறகு உருவாகும் இணை காரத்தின் (கார்பேனயன்) நிலைப்புத்தன்மையுடன் தொடர்புடையது." },
                { step: 2, explanation: "The stability of the carbanion depends on the hybridization of the carbon atom bearing the negative charge. Higher s-character leads to greater stability because the electrons are held closer to the nucleus.", explanationTamil: "கார்பேனயனின் நிலைப்புத்தன்மை, எதிர்மறை மின்னூட்டத்தைக் கொண்ட கார்பன் அணுவின் இனக்கலப்பைப் பொறுத்தது. அதிக s-பண்பு அதிக நிலைப்புத்தன்மைக்கு வழிவகுக்கிறது, ஏனெனில் எலக்ட்ரான்கள் அணுக்கருவிற்கு நெருக்கமாகப் பிடிக்கப்படுகின்றன." },
                { step: 3, explanation: "Hybridization and s-character are: Ethane (sp³, 25% s), Ethene (sp², 33.3% s), Ethyne (sp, 50% s).", explanationTamil: "இனக்கலப்பு மற்றும் s-பண்பு: ஈத்தேன் (sp³, 25% s), ஈத்தீன் (sp², 33.3% s), ஈத்தைன் (sp, 50% s)." },
                { step: 4, explanation: "Since the sp-hybridized carbon in ethyne has the highest s-character, the resulting acetylide anion (HC≡C⁻) is the most stable. Therefore, ethyne is the most acidic among the choices.", explanationTamil: "ஈத்தைனில் உள்ள sp-இனக்கலப்பு கார்பன் அதிக s-பண்பைக் கொண்டிருப்பதால், உருவாகும் அசிட்டிலைட் அயனி (HC≡C⁻) மிகவும் நிலையானது. எனவே, விருப்பங்களில் ஈத்தைன் மிகவும் அமிலத்தன்மை கொண்டது." }
            ]
        },
        {
            title: "JEE Level: Electrophilic Substitution",
            titleTamil: "ஜே.இ.இ நிலை: எலக்ட்ரான் கவர் பொருள் பதிலீடு",
            difficulty: 'Medium',
            problem: "What is the major product when toluene (methylbenzene) undergoes Friedel-Crafts alkylation with chloromethane in the presence of anhydrous AlCl₃?",
            problemTamil: "நீரற்ற AlCl₃ முன்னிலையில், டோலுயீன் (மெத்தில்பென்சீன்) குளோரோமீத்தேனுடன் பிரீடல்-கிராஃப்ட்ஸ் அல்கைலேற்றத்திற்கு உட்படும்போது உருவாகும் முக்கிய விளைபொருள் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the reactants and the reaction type. This is a Friedel-Crafts alkylation, an electrophilic aromatic substitution reaction.", explanationTamil: "வினைபடு பொருட்கள் மற்றும் வினை வகையை அடையாளம் காணவும். இது ஒரு பிரீடல்-கிராஃப்ட்ஸ் அல்கைலேற்றம், ஒரு எலக்ட்ரான் கவர் பொருள் அரோமாட்டிக் பதிலீட்டு வினை." },
                { step: 2, explanation: "Identify the directing influence of the substituent already on the ring. The methyl group (-CH₃) is an electron-donating group (+I effect and hyperconjugation).", explanationTamil: "வளையத்தில் ஏற்கனவே உள்ள பதிலீட்டின் இயக்கும் செல்வாக்கை அடையாளம் காணவும். மெத்தில் குழு (-CH₃) ஒரு எலக்ட்ரான் வழங்கும் குழு (+I விளைவு மற்றும் மீள்இணையுதல்)." },
                { step: 3, explanation: "Electron-donating groups are ortho-para directing. They activate the benzene ring towards electrophilic attack, particularly at the ortho and para positions.", explanationTamil: "எலக்ட்ரான் வழங்கும் குழுக்கள் ஆர்த்தோ-பாரா இயக்கும் பண்புடையவை. அவை பென்சீன் வளையத்தை எலக்ட்ரான் கவர் பொருள் தாக்குதலுக்கு, குறிப்பாக ஆர்த்தோ மற்றும் பாரா நிலைகளில், கிளர்வுறுத்துகின்றன." },
                { step: 4, explanation: "The electrophile generated is the methyl carbocation (CH₃⁺) from CH₃Cl and AlCl₃.", explanationTamil: "உருவாகும் எலக்ட்ரான் கவர் பொருள் மெத்தில் கார்போகேட்டயன் (CH₃⁺) ஆகும்." },
                { step: 5, explanation: "Two products will be formed: 1,2-dimethylbenzene (o-xylene) and 1,4-dimethylbenzene (p-xylene).", explanationTamil: "இரண்டு விளைபொருட்கள் உருவாகும்: 1,2-டைமெத்தில்பென்சீன் (o-சைலீன்) மற்றும் 1,4-டைமெத்தில்பென்சீன் (p-சைலீன்)." },
                { step: 6, explanation: "Due to steric hindrance (தடை விளைவு) from the existing methyl group, the para product is usually the major product. The incoming group prefers the less crowded para position.", explanationTamil: "ஏற்கனவே உள்ள மெத்தில் குழுவிலிருந்து ஏற்படும் தடை விளைவு காரணமாக, பாரா விளைபொருள் பொதுவாக முக்கிய விளைபொருளாக இருக்கும். உள்வரும் குழு நெரிசல் குறைந்த பாரா நிலையை விரும்புகிறது." }
            ],
            commonPitfall: "Forgetting that activating groups are ortho-para directing and deactivating groups are meta-directing (except for halogens)."
        },
        {
            title: "NEET Level: Wurtz Reaction",
            titleTamil: "நீட் நிலை: வூர்ட்ஸ் வினை",
            difficulty: 'Easy',
            problem: "Which of the following alkanes cannot be prepared in good yield by the Wurtz reaction? (a) Hexane, (b) Butane, (c) Propane, (d) Ethane",
            problemTamil: "பின்வரும் ஆல்கேன்களில் எது வூர்ட்ஸ் வினையால் நல்ல விளைச்சலில் தயாரிக்க முடியாது? (a) ஹெக்சேன், (b) பியூட்டேன், (c) புரோப்பேன், (d) ஈத்தேன்",
            solutionSteps: [
                { step: 1, explanation: "The Wurtz reaction involves coupling two alkyl halides (2R-X + 2Na → R-R). It is best suited for preparing symmetrical alkanes (R-R) where the product has an even number of carbon atoms.", explanationTamil: "வூர்ட்ஸ் வினை இரண்டு அல்கைல் ஹேலைடுகளை இணைப்பதை உள்ளடக்கியது (2R-X + 2Na → R-R). சமச்சீரான ஆல்கேன்களை (R-R) தயாரிக்க இது மிகவும் பொருத்தமானது, இங்கு விளைபொருளில் இரட்டைப்படை எண்ணிக்கையிலான கார்பன் அணுக்கள் உள்ளன." },
                { step: 2, explanation: "To prepare an alkane with an odd number of carbon atoms, like propane (3 carbons), one would have to use a mixture of two different alkyl halides (e.g., methyl chloride and ethyl chloride).", explanationTamil: "புரோப்பேன் (3 கார்பன்கள்) போன்ற ஒற்றைப்படை எண்ணிக்கையிலான கார்பன் அணுக்களைக் கொண்ட ஒரு ஆல்கேனைத் தயாரிக்க, இரண்டு வெவ்வேறு அல்கைல் ஹேலைடுகளின் கலவையைப் பயன்படுத்த வேண்டும் (எ.கா., மெத்தில் குளோரைடு மற்றும் எத்தில் குளோரைடு)." },
                { step: 3, explanation: "Using a mixture of alkyl halides (R-X and R'-X) leads to a mixture of products (R-R, R'-R', and R-R'), which are difficult to separate and result in a poor yield of the desired odd-carbon alkane.", explanationTamil: "அல்கைல் ஹேலைடுகளின் கலவையைப் பயன்படுத்துவது (R-X மற்றும் R'-X) விளைபொருட்களின் கலவைக்கு (R-R, R'-R', மற்றும் R-R') வழிவகுக்கிறது, அவற்றை பிரிப்பது கடினம் மற்றும் விரும்பிய ஒற்றைப்படை-கார்பன் ஆல்கேனின் குறைந்த விளைச்சலை விளைவிக்கிறது." },
                { step: 4, explanation: "Ethane (2C), Butane (4C), and Hexane (6C) are all symmetrical alkanes with an even number of carbons and can be prepared in good yield. Propane (3C) has an odd number of carbons and cannot.", explanationTamil: "ஈத்தேன் (2C), பியூட்டேன் (4C), மற்றும் ஹெக்சேன் (6C) ஆகியவை அனைத்தும் இரட்டைப்படை எண்ணிக்கையிலான கார்பன்களைக் கொண்ட சமச்சீரான ஆல்கேன்கள் மற்றும் நல்ல விளைச்சலில் தயாரிக்கப்படலாம். புரோப்பேன் (3C) ஒற்றைப்படை எண்ணிக்கையிலான கார்பன்களைக் கொண்டுள்ளது மற்றும் தயாரிக்க முடியாது." }
            ]
        }
    ],
    mcqs: [
        {
            question: "Which of the following compounds will react with NaNH₂ to form sodium salt?",
            options: ["A. Ethene", "B. Ethane", "C. Ethyne", "D. Benzene"],
            answer: "C. Ethyne",
            explanation: "Ethyne is a terminal alkyne and is acidic in nature. It reacts with a strong base like sodamide (NaNH₂) to form sodium acetylide.",
            neetFrequency: 4
        },
        {
            question: "The reaction of HBr with propene in the presence of peroxide follows:",
            options: ["A. Markovnikov's rule", "B. Anti-Markovnikov's rule", "C. Saytzeff's rule", "D. Huckel's rule"],
            answer: "B. Anti-Markovnikov's rule",
            explanation: "The addition of HBr to an unsymmetrical alkene in the presence of peroxide proceeds via a free-radical mechanism, leading to the Anti-Markovnikov product.",
            neetFrequency: 5
        },
        {
            question: "The number of sigma (σ) and pi (π) bonds in benzene are:",
            options: ["A. 12σ, 3π", "B. 6σ, 6π", "C. 3σ, 12π", "D. 12σ, 6π"],
            answer: "A. 12σ, 3π",
            explanation: "Benzene has a planar ring structure with 6 C-C sigma bonds, 6 C-H sigma bonds (total 12σ), and 3 delocalized pi bonds.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is not an electrophile?",
            options: ["A. NO₂⁺", "B. SO₃", "C. Cl⁺", "D. H₂O"],
            answer: "D. H₂O",
            explanation: "H₂O has lone pairs of electrons on the oxygen atom and acts as a nucleophile (electron donor), not an electrophile.",
            neetFrequency: 4
        },
        {
            question: "Ozonolysis of 2-methylbut-2-ene will give:",
            options: ["A. Propanone and Ethanal", "B. Propanal and Methanal", "C. Propanone and Methanal", "D. Butanone and Methanal"],
            answer: "A. Propanone and Ethanal",
            explanation: "2-methylbut-2-ene is (CH₃)₂C=CHCH₃. Ozonolysis cleaves the double bond, giving (CH₃)₂C=O (Propanone or Acetone) and CH₃CH=O (Ethanal or Acetaldehyde).",
            neetFrequency: 5
        },
        {
            question: "Which of the following is the most stable carbocation?",
            options: ["A. CH₃⁺", "B. CH₃CH₂⁺", "C. (CH₃)₂CH⁺", "D. (CH₃)₃C⁺"],
            answer: "D. (CH₃)₃C⁺",
            explanation: "The stability of carbocations follows the order 3° > 2° > 1°. The tertiary carbocation is the most stable due to hyperconjugation and inductive effects.",
            neetFrequency: 4
        },
        {
            question: "The IUPAC name for neopentane is:",
            options: ["A. 2-Methylbutane", "B. 2,2-Dimethylpropane", "C. Pentane", "D. Dimethylpropane"],
            answer: "B. 2,2-Dimethylpropane",
            explanation: "The longest carbon chain has 3 carbons (propane), and there are two methyl groups on the second carbon.",
            neetFrequency: 2
        },
        {
            question: "Benzene reacts with CH₃Cl in the presence of anhydrous AlCl₃ to form:",
            options: ["A. Chlorobenzene", "B. Toluene", "C. Benzyl chloride", "D. Xylene"],
            answer: "B. Toluene",
            explanation: "This is the Friedel-Crafts alkylation reaction, which attaches the methyl group to the benzene ring, forming toluene.",
            neetFrequency: 3
        },
        {
            question: "Which of the following has the highest boiling point?",
            options: ["A. n-pentane", "B. isopentane (2-methylbutane)", "C. neopentane (2,2-dimethylpropane)", "D. n-butane"],
            answer: "A. n-pentane",
            explanation: "For alkanes with the same number of carbon atoms, the boiling point decreases with increasing branching due to a smaller surface area and weaker van der Waals forces.",
            neetFrequency: 3
        },
        {
            question: "The test for unsaturation (presence of double or triple bonds) is:",
            options: ["A. Tollen's test", "B. Fehling's test", "C. Baeyer's test (cold, dilute KMnO₄)", "D. Lassaigne's test"],
            answer: "C. Baeyer's test (cold, dilute KMnO₄)",
            explanation: "Alkenes and alkynes decolorize the purple color of cold, dilute, alkaline KMnO₄ solution (Baeyer's reagent).",
            neetFrequency: 4
        },
        { question: "Hybridization of carbon atoms in ethyne is:", options: ["A. sp³", "B. sp²", "C. sp", "D. sp³d"], answer: "C. sp", explanation: "In ethyne (C₂H₂), there is a triple bond between the carbon atoms, which corresponds to sp hybridization.", neetFrequency: 2 },
        { question: "Which conformation of ethane is most stable?", options: ["A. Eclipsed", "B. Skew", "C. Staggered", "D. Gauche"], answer: "C. Staggered", explanation: "The staggered conformation has the least torsional strain as the hydrogen atoms are farthest apart.", neetFrequency: 3 },
        { question: "Saytzeff's rule predicts the major product in:", options: ["A. Addition reactions", "B. Substitution reactions", "C. Elimination reactions", "D. Rearrangement reactions"], answer: "C. Elimination reactions", explanation: "Saytzeff's rule states that in dehydrohalogenation reactions, the preferred product is the alkene which has the greater number of alkyl groups attached to the double bonded carbon atoms (i.e., the more substituted alkene).", neetFrequency: 3 },
        { question: "Which of the following is not aromatic?", options: ["A. Benzene", "B. Cyclooctatetraene", "C. Pyridine", "D. Naphthalene"], answer: "B. Cyclooctatetraene", explanation: "Cyclooctatetraene has 8 π-electrons, which does not follow Huckel's rule (4n+2). It is also non-planar and tub-shaped.", neetFrequency: 3 },
        { question: "The catalyst used in the hydration of alkynes to form aldehydes/ketones is:", options: ["A. H₂SO₄/HgSO₄", "B. Anhydrous AlCl₃", "C. Na/Liquid NH₃", "D. Pd/C"], answer: "A. H₂SO₄/HgSO₄", explanation: "The hydration of alkynes is catalyzed by a mixture of dilute sulfuric acid and mercuric sulphate.", neetFrequency: 4 },
        { question: "The conversion of n-hexane into benzene by heating in the presence of a catalyst is called:", options: ["A. Isomerization", "B. Aromatization", "C. Pyrolysis", "D. Cracking"], answer: "B. Aromatization", explanation: "Aromatization is the process of converting non-aromatic hydrocarbons into aromatic ones.", neetFrequency: 2 },
        { question: "Which of the following is an ortho, para-directing group for electrophilic substitution?", options: ["A. -NO₂", "B. -CN", "C. -COOH", "D. -OH"], answer: "D. -OH", explanation: "The -OH group is an activating, electron-donating group, which directs incoming electrophiles to the ortho and para positions.", neetFrequency: 5 },
        { question: "Which of the following is used to distinguish between ethene and ethyne?", options: ["A. Bromine water", "B. Baeyer's reagent", "C. Ammoniacal AgNO₃", "D. Hydrogenation"], answer: "C. Ammoniacal AgNO₃", explanation: "Ethyne, being a terminal alkyne, is acidic and gives a white precipitate with Tollens' reagent (ammoniacal silver nitrate). Ethene does not react.", neetFrequency: 3 },
        { question: "The anti-Markovnikov addition of HBr is not observed in:", options: ["A. Propene", "B. But-1-ene", "C. But-2-ene", "D. Pent-1-ene"], answer: "C. But-2-ene", explanation: "But-2-ene is a symmetrical alkene. The addition of HBr gives only one product (2-bromobutane), so Markovnikov's and anti-Markovnikov's rules do not apply.", neetFrequency: 4 },
        { question: "Polymerization of acetylene gives:", options: ["A. Polythene", "B. Polypropene", "C. Polystyrene", "D. Benzene"], answer: "D. Benzene", explanation: "When acetylene is passed through a red-hot iron tube at 873 K, it undergoes cyclic polymerization to form benzene.", neetFrequency: 2 },
        { question: "Which reaction is used to prepare pure alkanes?", options: ["A. Wurtz reaction", "B. Kolbe's electrolysis", "C. Hydrogenation of alkenes", "D. All of the above"], answer: "C. Hydrogenation of alkenes", explanation: "Hydrogenation of a pure alkene gives a pure alkane. Wurtz and Kolbe's reactions often produce side products.", neetFrequency: 2 },
        { question: "The most stable free radical is:", options: ["A. Methyl", "B. Primary", "C. Secondary", "D. Tertiary"], answer: "D. Tertiary", explanation: "The stability of free radicals follows the same order as carbocations (3° > 2° > 1°) due to hyperconjugation.", neetFrequency: 3 },
        { question: "Benzene on treatment with excess chlorine in the presence of sunlight gives:", options: ["A. Hexachlorobenzene", "B. Benzene hexachloride (BHC)", "C. Chlorobenzene", "D. o-dichlorobenzene"], answer: "B. Benzene hexachloride (BHC)", explanation: "In the presence of UV light, benzene undergoes an addition reaction with chlorine, not substitution, to form benzene hexachloride (gammexane).", neetFrequency: 2 },
        { question: "Which reagent can be used to distinguish between alkane and alkene?", options: ["A. Conc. H₂SO₄", "B. Tollen's reagent", "C. Schiff's reagent", "D. Bromine in CCl₄"], answer: "D. Bromine in CCl₄", explanation: "Alkenes undergo an addition reaction with bromine in CCl₄, decolorizing the reddish-brown solution. Alkanes do not react under these conditions.", neetFrequency: 3 },
        { question: "The nitrating agent for the nitration of benzene is:", options: ["A. HNO₃", "B. NO₂", "C. Conc. HNO₃ + Conc. H₂SO₄", "D. HNO₂"], answer: "C. Conc. HNO₃ + Conc. H₂SO₄", explanation: "The mixture of concentrated nitric acid and concentrated sulfuric acid generates the nitronium ion (NO₂⁺) electrophile required for the reaction.", neetFrequency: 4 }
    ],
    assertionReasons: [
        {
            assertion: "Benzene is more stable than a hypothetical cyclohexatriene.",
            reason: "The delocalization of π-electrons in benzene gives it extra stability (resonance energy).",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation for the stability of benzene.",
            neetFrequency: 4
        },
        {
            assertion: "Terminal alkynes are acidic in nature.",
            reason: "The hydrogen atom is attached to an sp hybridized carbon atom, which has high s-character.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. The high s-character makes the sp carbon more electronegative, polarizing the C-H bond and making the hydrogen acidic.",
            neetFrequency: 3
        },
        {
            assertion: "The Wurtz reaction cannot be used to prepare alkanes with an odd number of carbon atoms in good yield.",
            reason: "Using a mixture of two different alkyl halides gives a mixture of three different alkane products.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and correctly explains why the yield is poor due to the formation of multiple side products.",
            neetFrequency: 2
        },
        {
            assertion: "Addition of HBr to but-2-ene gives a single product.",
            reason: "But-2-ene is a symmetrical alkene.",
            answer: "A",
            explanation: "Assertion is true. The product is 2-bromobutane. The reason is also true and is the correct explanation. Since the alkene is symmetrical, addition to either carbon of the double bond gives the same product.",
            neetFrequency: 3
        },
        {
            assertion: "All C-C bonds in benzene are of equal length.",
            reason: "Benzene has two resonance structures with alternating single and double bonds.",
            answer: "B",
            explanation: "Both assertion and reason are true. However, the reason is an incomplete explanation. The true structure is a resonance hybrid of these two structures, where the electron density is evenly distributed, making all C-C bonds identical and intermediate in length between a single and a double bond.",
            neetFrequency: 4
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Wurtz Reaction", "(b) Friedel-Crafts Reaction", "(c) Ozonolysis", "(d) Hydrogenation"],
            column2: ["(p) Formation of carbonyl compounds", "(q) Preparation of alkanes from alkyl halides", "(r) Addition of hydrogen", "(s) Alkylation of benzene"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the name reactions with their primary function or product type.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Alkane", "(b) Alkene", "(c) Alkyne", "(d) Arene"],
            column2: ["(p) Electrophilic addition", "(q) Electrophilic substitution", "(r) sp hybridization", "(s) Free radical substitution"],
            answer: "a-s, b-p, c-p,r; d-q",
            explanation: "Matching the hydrocarbon class with its characteristic reaction or property. Alkynes also undergo electrophilic addition."
        },
        {
            column1: ["(a) Markovnikov's rule", "(b) Saytzeff's rule", "(c) Huckel's rule", "(d) Baeyer's test"],
            column2: ["(p) Aromaticity", "(q) Test for unsaturation", "(r) Product of dehydrohalogenation", "(s) Product of HBr addition"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching the rules and tests with the reactions or concepts they apply to.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Ortho-para directing", "(b) Meta directing", "(c) Activating group", "(d) Deactivating group"],
            column2: ["(p) -NO₂", "(q) -OH", "(r) Electron donating", "(s) Electron withdrawing"],
            answer: "a-q, b-p, c-q,r; d-p,s",
            explanation: "Matching substituent effects. -OH is an activating, o,p-directing group. -NO₂ is a deactivating, m-directing group."
        },
        {
            column1: ["(a) Ethane", "(b) Ethene", "(c) Ethyne", "(d) Benzene"],
            column2: ["(p) sp² hybridization", "(q) sp³ hybridization", "(r) C₆H₆", "(s) sp hybridization"],
            answer: "a-q, b-p, c-s, d-p,r",
            explanation: "Matching the compounds with their hybridization or formula. Benzene also has sp² hybridized carbons.",
            neetFrequency: 3
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "R-X + 2Na + X-R \\xrightarrow{\\text{dry ether}} R-R + 2NaX", description: "Wurtz Reaction for preparing symmetrical alkanes.", descriptionTamil: "சமச்சீர் ஆல்கேன்களைத் தயாரிப்பதற்கான வூர்ட்ஸ் வினை." },
            { formula: "Markovnikov's Rule: Negative part adds to carbon with fewer H's.", description: "Rule for addition of unsymmetrical reagents to unsymmetrical alkenes.", descriptionTamil: "சமச்சீரற்ற ஆல்கீன்களுடன் சமச்சீரற்ற கரணிகளைச் சேர்ப்பதற்கான விதி." },
            { formula: "Huckel's Rule: (4n+2)π electrons", description: "The rule for determining aromaticity in a planar, cyclic, conjugated system.", descriptionTamil: "ஒரு தள, வளைய, இணைந்த அமைப்பில் அரோமாட்டிக் தன்மையைத் தீர்மானிப்பதற்கான விதி." }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Alkanes undergo substitution, while alkenes and alkynes undergo addition reactions.",
        "Markovnikov's rule governs the addition of unsymmetrical reagents to alkenes based on carbocation stability.",
        "Aromatic compounds like benzene are unusually stable due to electron delocalization and undergo electrophilic substitution rather than addition.",
        "The directing influence of a substituent on a benzene ring determines the position of the next incoming electrophile."
    ],
    mnemonics: [
        { text: "Remember activating groups are 'Ortho-Para Directors': 'A'ctivating 'O'r 'P'eople. Deactivating groups are 'Meta Directors'.", tamil: "கிளர்வூட்டும் குழுக்கள் 'ஆர்த்தோ-பாரா இயக்குநர்கள்' என்பதை நினைவில் கொள்க. கிளர்வு நீக்கும் குழுக்கள் 'மெட்டா இயக்குநர்கள்'." },
        { text: "For Markovnikov: 'The rich get richer'. The carbon that already has more hydrogens gets the new hydrogen.", tamil: "மார்க்கோனிகாவ் விதிக்கு: 'பணக்காரர்கள் மேலும் பணக்காரர்கள் ஆகிறார்கள்'. ஏற்கனவே அதிக ஹைட்ரஜன்களைக் கொண்ட கார்பன் புதிய ஹைட்ரஜனைப் பெறுகிறது." }
    ],
    neetTips: [
        { text: "Ozonolysis problems are very common. Practice working them backwards: identify the carbonyl products and 'glue' them back together at the carbonyl carbons to find the original alkene.", tamil: "ஓசோனேற்ற கணக்குகள் மிகவும் பொதுவானவை. அவற்றை பின்னோக்கிச் செய்யப் பயிற்சி செய்யுங்கள்: கார்போனைல் விளைபொருட்களை அடையாளம் கண்டு, அவற்றை கார்போனைல் கார்பன்களில் மீண்டும் 'ஒட்டவும்' để அசல் ஆல்கீனைக் கண்டறியவும்." },
        { text: "Mastering the concepts of activating/deactivating and ortho-para/meta directing groups is crucial for predicting the products of aromatic substitution reactions.", tamil: "அரோமாட்டிக் பதிலீட்டு வினைகளின் விளைபொருட்களைக் கணிக்க, கிளர்வூட்டும்/கிளர்வு நீக்கும் மற்றும் ஆர்த்தோ-பாரா/மெட்டா இயக்கும் குழுக்களின் கருத்துக்களை நன்கு அறிந்திருப்பது அவசியம்." }
    ],
    studentTip: {
        english: "Organic chemistry is cumulative. Make sure you have a very strong foundation in nomenclature and electronic effects from this chapter before moving on. It will make subsequent chapters much easier.",
        tamil: "கரிம வேதியியல் ஒரு தொடர் நிகழ்வு. அடுத்த அத்தியாயங்களுக்குச் செல்வதற்கு முன், இந்த அத்தியாயத்திலிருந்து பெயரிடுதல் மற்றும் எலக்ட்ரான் விளைவுகளில் மிகவும் வலுவான அடித்தளத்தை உறுதிப்படுத்திக் கொள்ளுங்கள். இது அடுத்தடுத்த அத்தியாயங்களை மிகவும் எளிதாக்கும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why halogens (like -Cl) are deactivating yet ortho-para directing. How do the inductive (-I) and resonance (+R) effects compete in this case?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஏன் ஹாலஜன்கள் (-Cl போன்றவை) கிளர்வு நீக்கும் பண்புடையதாக இருந்தாலும் ஆர்த்தோ-பாரா இயக்கும் பண்பைக் கொண்டுள்ளன? இந்த விஷயத்தில் தூண்டல் (-I) மற்றும் உடனிசைவு (+R) விளைவுகள் எவ்வாறு போட்டியிடுகின்றன?"
    },
    nextChapter: {
        title: "Organic Compounds Containing Halogens",
        titleTamil: "ஹாலோஜன் கொண்ட கரிமச் சேர்மங்கள்"
    },
    validationReport: []
};
