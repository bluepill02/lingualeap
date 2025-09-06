
import type { NeetModule } from '@/lib/types';

export const biomolecules: NeetModule = {
    id: 'neet-chemistry-biomolecules',
    title: 'Chemistry - Biomolecules (உயிர் மூலக்கூறுகள்)',
    chapter: 'Biomolecules',
    subject: 'Chemistry',
    learningObjectives: [
        "Classify carbohydrates and understand the structure of monosaccharides (glucose, fructose) and disaccharides (sucrose, lactose).",
        "Describe the structure and functions of proteins, including amino acids, peptide bonds, and the four levels of protein structure.",
        "Understand the role of enzymes as biocatalysts.",
        "Explain the structure of nucleic acids (DNA and RNA) and their components.",
        "Classify vitamins and understand their deficiency diseases."
    ],
    prerequisites: [
        "Basic concepts of organic chemistry, including functional groups.",
        "Understanding of chemical bonding and stereochemistry."
    ],
    conceptOverview: "Biomolecules are the molecules of life, forming the building blocks of living organisms and performing crucial functions. This chapter explores the main classes of these organic molecules: carbohydrates (our primary energy source), proteins (which perform a vast array of tasks), lipids (fats and oils), and nucleic acids (which carry genetic information). Understanding the structure and function of these molecules is fundamental to the field of biochemistry and provides a chemical basis for all of biology.",
    tamilConnection: "நம் பாரம்பரிய உணவான அரிசி, பருப்பு, மற்றும் காய்கறிகளில் கார்போஹைட்ரேட்டுகள், புரதங்கள், மற்றும் வைட்டமின்கள் நிறைந்துள்ளன. இந்த உயிர் மூலக்கூறுகளே நம் உடலுக்கு ஆற்றலையும், வளர்ச்சியையும் தருகின்றன. இந்த அத்தியாயம், நம் உணவின் பின்னால் உள்ள வேதியியலை விளக்குகிறது.",
    culturalContext: "The process of fermentation used to make idli and dosa batter involves enzymes produced by microorganisms. These enzymes break down complex carbohydrates into simpler ones, making the batter rise and giving idlis their characteristic soft texture. This is a practical, everyday example of the biochemical reactions studied in this chapter.",
    syllabusMapping: [
        {
            topic: "Biomolecules",
            tnBoardChapter: "12th Std Chemistry - Vol 2, Chapter 14: Biomolecules",
            ncertReference: "Class 12 Chemistry - Part 2, Chapter 14: Biomolecules",
            notes: "This chapter has significant overlap with biology. Focus on the chemical structures, especially of glucose and amino acids, and the differences between DNA and RNA.",
            mappingDescription: '12th Std Chemistry - Vol 2, Chapter 14 maps to NEET Chemistry Unit 26'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Carbohydrates (கார்போஹைட்ரேட்டுகள்)', tamil: '1. கார்போஹைட்ரேட்டுகள்' },
            content: [
                { english: 'Carbohydrates are polyhydroxy aldehydes or ketones, or substances that yield these on hydrolysis. They are also known as saccharides.', tamil: 'கார்போஹைட்ரேட்டுகள் பாலிஹைட்ராக்ஸி ஆல்டிஹைடுகள் அல்லது கீட்டோன்கள், அல்லது நீராற்பகுப்பின் மூலம் இவற்றைத் தரும் பொருட்கள் ஆகும். இவை சாக்கரைடுகள் என்றும் அழைக்கப்படுகின்றன.' },
                { english: '*   **Monosaccharides:** Simplest carbohydrates that cannot be hydrolyzed further. E.g., Glucose, Fructose.', tamil: '*   **ஒற்றை சாக்கரைடுகள்:** மேலும் நீராற்பகுக்க முடியாத எளிய கார்போஹைட்ரேட்டுகள். எ.கா., குளுக்கோஸ், பிரக்டோஸ்.' },
                { english: '*   **Disaccharides:** Yield two monosaccharide units on hydrolysis. E.g., Sucrose (yields glucose + fructose), Maltose (yields 2 glucose).', tamil: '*   **இரட்டை சாக்கரைடுகள்:** நீராற்பகுப்பின் மூலம் இரண்டு ஒற்றை சாக்கரைடு அலகுகளைத் தரும். எ.கா., சுக்ரோஸ் (குளுக்கோஸ் + பிரக்டோஸ்), மால்டோஸ் (2 குளுக்கோஸ்).' },
                { english: '*   **Polysaccharides:** Yield a large number of monosaccharide units on hydrolysis. E.g., Starch, Cellulose.', tamil: '*   **பல் சாக்கரைடுகள்:** நீராற்பகுப்பின் மூலம் அதிக எண்ணிக்கையிலான ஒற்றை சாக்கரைடு அலகுகளைத் தரும். எ.கா., ஸ்டார்ச், செல்லுலோஸ்.' },
                { english: `**Reducing vs. Non-reducing Sugars:** Sugars which reduce Fehling's solution and Tollens' reagent are reducing sugars. All monosaccharides are reducing sugars. In disaccharides, if the anomeric carbons of the monosaccharide units are involved in a glycosidic bond, it is a non-reducing sugar (e.g., Sucrose).`, tamil: `**ஒடுக்கும் மற்றும் ஒடுக்கா சர்க்கரைகள்:** ஃபெலிங் கரைசல் மற்றும் டாலன்ஸ் கரணியை ஒடுக்கும் சர்க்கரைகள் ஒடுக்கும் சர்க்கரைகள் எனப்படும். அனைத்து ஒற்றை சாக்கரைடுகளும் ஒடுக்கும் சர்க்கரைகள். இரட்டை சாக்கரைடுகளில், ஒற்றை சாக்கரைடு அலகுகளின் அனோமெரிக் கார்பன்கள் கிளைகோசைடிக் பிணைப்பில் ஈடுபட்டிருந்தால், அது ஒரு ஒடுக்கா சர்க்கரை (எ.கா., சுக்ரோஸ்).` }
            ]
        },
        {
            heading: { english: '2. Proteins (புரதங்கள்)', tamil: '2. புரதங்கள்' },
            content: [
                { english: 'Proteins are high molecular mass complex biopolymers of amino acids. They are crucial for the structure, function, and regulation of the body\'s tissues and organs.', tamil: 'புரதங்கள் என்பவை அமினோ அமிலங்களின் உயர் மூலக்கூறு நிறை கொண்ட சிக்கலான உயிரியல் பல்படிகள் ஆகும். அவை உடலின் திசுக்கள் மற்றும் உறுப்புகளின் அமைப்பு, செயல்பாடு மற்றும் ஒழுங்குமுறைக்கு முக்கியமானவை.' },
                { english: `**Amino Acids (அமினோ அமிலங்கள்):** Compounds containing both an amino (-NH₂) group and a carboxyl (-COOH) group. In aqueous solution, they can exist as a dipolar ion known as a **zwitterion (இருமுனை அயனி)**.`, tamil: `**அமினோ அமிலங்கள்:** ஒரு அமினோ (-NH₂) தொகுதி மற்றும் ஒரு கார்பாக்சில் (-COOH) தொகுதி இரண்டையும் கொண்ட சேர்மங்கள். நீர்க்கரைசலில், அவை **இருமுனை அயனி** எனப்படும் இருமுனை அயனியாக இருக்கலாம்.` },
                { english: `**Peptide Bond (பெப்டைடு பிணைப்பு):** The amide bond (-CO-NH-) formed between the carboxyl group of one amino acid and the amino group of another. The resulting chain is a polypeptide.`, tamil: `**பெப்டைடு பிணைப்பு:** ஒரு அமினோ அமிலத்தின் கார்பாக்சில் தொகுதிக்கும் மற்றொரு அமினோ அமிலத்தின் அமினோ தொகுதிக்கும் இடையில் உருவாகும் அமைடு பிணைப்பு (-CO-NH-). இதன் விளைவாக உருவாகும் சங்கிலி ஒரு பாலிபெப்டைடு ஆகும்.` },
                { english: '**Structure of Proteins:**\n*   **Primary (முதன்மை):** The specific sequence of amino acids.\n*   **Secondary (இரண்டாம் நிலை):** Local folding of the polypeptide chain into regular structures like α-helix and β-pleated sheet, stabilized by hydrogen bonds.\n*   **Tertiary (மூன்றாம் நிலை):** Overall 3D folding of the polypeptide chain, forming a compact globular or fibrous shape. Stabilized by various bonds like hydrogen bonds, disulfide bridges, ionic bonds.\n*   **Quaternary (நான்கிணைய):** Arrangement of multiple polypeptide subunits.', tamil: '**புரதங்களின் அமைப்பு:**\n*   **முதன்மை:** அமினோ அமிலங்களின் குறிப்பிட்ட வரிசை.\n*   **இரண்டாம் நிலை:** பாலிபெப்டைடு சங்கிலியின் உள்ளூர் மடிப்பு α-ஹெலிக்ஸ் மற்றும் β-மடிப்புத் தாள் போன்ற வழக்கமான அமைப்புகளாக, ஹைட்ரஜன் பிணைப்புகளால் நிலைப்படுத்தப்படுகிறது.\n*   **மூன்றாம் நிலை:** பாலிபெப்டைடு சங்கிலியின் ஒட்டுமொத்த 3D மடிப்பு, ஒரு சிறிய கோள அல்லது இழை வடிவத்தை உருவாக்குகிறது. ஹைட்ரஜன் பிணைப்புகள், டைசல்பைடு பாலங்கள், அயனிப் பிணைப்புகள் போன்ற பல்வேறு பிணைப்புகளால் நிலைப்படுத்தப்படுகிறது.\n*   **நான்கிணைய:** பல பாலிபெப்டைடு துணை அலகுகளின் ஏற்பாடு.' }
            ]
        },
        {
            heading: { english: '3. Nucleic Acids (நியூக்ளிக் அமிலங்கள்)', tamil: '3. நியூக்ளிக் அமிலங்கள்' },
            content: [
                { english: 'Nucleic acids are polymers of nucleotides, responsible for the storage and transmission of genetic information. They are of two types: DNA and RNA.', tamil: 'நியூக்ளிக் அமிலங்கள் நியூக்ளியோடைடுகளின் பல்படிகள் ஆகும், அவை மரபணு தகவல்களை சேமிப்பதற்கும் கடத்துவதற்கும் பொறுப்பாகும். அவை இரண்டு வகைப்படும்: DNA மற்றும் RNA.' },
                { english: 'A nucleotide consists of three components: a pentose sugar, a nitrogenous base, and a phosphate group.', tamil: 'ஒரு நியூக்ளியோடைடு மூன்று கூறுகளைக் கொண்டுள்ளது: ஒரு பென்டோஸ் சர்க்கரை, ஒரு நைட்ரஜன் காரம், மற்றும் ஒரு பாஸ்பேட் தொகுதி.' },
                { english: '| Feature | DNA (Deoxyribonucleic Acid) | RNA (Ribonucleic Acid) |\n| :--- | :--- | :--- |\n| **Sugar** | Deoxyribose | Ribose |\n| **Bases** | Adenine (A), Guanine (G), Cytosine (C), **Thymine (T)** | Adenine (A), Guanine (G), Cytosine (C), **Uracil (U)** |\n| **Structure** | Double helix | Single strand |\n| **Function**| Stores and transfers genetic info | Protein synthesis |', tamil: '| அம்சம் | DNA (டிஆக்சிரிபோநியூக்ளிக் அமிலம்) | RNA (ரிபோநியூக்ளிக் அமிலம்) |\n| :--- | :--- | :--- |\n| **சர்க்கரை** | டிஆக்சிரிபோஸ் | ரிபோஸ் |\n| **காரங்கள்** | அடினைன் (A), குவானைன் (G), சைட்டோசின் (C), **தைமின் (T)** | அடினைன் (A), குவானைன் (G), சைட்டோசின் (C), **யுராசில் (U)** |\n| **அமைப்பு** | இரட்டைச் சுருள் | ஒற்றை இழை |\n| **செயல்பாடு**| மரபணு தகவல்களை சேமித்து கடத்துகிறது | புரதத் தொகுப்பு |' }
            ]
        },
        {
            heading: { english: '4. Vitamins (வைட்டமின்கள்)', tamil: '4. வைட்டமின்கள்' },
            content: [
                { english: 'Organic compounds required in small amounts in our diet to perform specific biological functions for normal maintenance of optimum growth and health of the organism.', tamil: 'உயிரினத்தின் உகந்த வளர்ச்சி மற்றும் ஆரோக்கியத்தின் சாதாரண பராமரிப்பிற்காக குறிப்பிட்ட உயிரியல் செயல்பாடுகளைச் செய்ய நமது உணவில் சிறிய அளவில் தேவைப்படும் கரிமச் சேர்மங்கள்.' },
                { english: '*   **Fat-soluble Vitamins:** Vitamins A, D, E, and K. They are stored in the liver and adipose tissue.', tamil: '*   **கொழுப்பில் கரையும் வைட்டமின்கள்:** வைட்டமின்கள் A, D, E, மற்றும் K. அவை கல்லீரல் மற்றும் கொழுப்புத் திசுக்களில் சேமிக்கப்படுகின்றன.' },
                { english: '*   **Water-soluble Vitamins:** Vitamins B complex and Vitamin C. They must be supplied regularly in the diet because they are readily excreted.', tamil: '*   **நீரில் கரையும் வைட்டமின்கள்:** வைட்டமின் B காம்ப்ளக்ஸ் மற்றும் வைட்டமின் C. அவை எளிதில் வெளியேற்றப்படுவதால் உணவில் தவறாமல் வழங்கப்பட வேண்டும்.' }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Carbohydrate Structure",
            titleTamil: "நீட் நிலை: கார்போஹைட்ரேட் அமைப்பு",
            difficulty: 'Medium',
            problem: "Sucrose is a non-reducing sugar. Explain why, based on its structure.",
            problemTamil: "சுக்ரோஸ் ஒரு ஒடுக்கா சர்க்கரை ஆகும். அதன் அமைப்பின் அடிப்படையில் ஏன் என்பதை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "A sugar is reducing if it has a free hemiacetal group, which means the anomeric carbon is free to open up into an aldehyde or ketone form.", explanationTamil: "ஒரு சர்க்கரை ஒரு சுதந்திரமான ஹெமிஅசிட்டால் தொகுதியைக் கொண்டிருந்தால் அது ஒடுக்கும் சர்க்கரையாகும், அதாவது அனோமெரிக் கார்பன் ஒரு ஆல்டிஹைடு அல்லது கீட்டோன் வடிவமாகத் திறக்க சுதந்திரமாக உள்ளது." },
                { step: 2, explanation: "Sucrose is a disaccharide made up of α-D-glucose and β-D-fructose.", explanationTamil: "சுக்ரோஸ் என்பது α-D-குளுக்கோஸ் மற்றும் β-D-பிரக்டோஸால் ஆன ஒரு இரட்டை சாக்கரைடு ஆகும்." },
                { step: 3, explanation: "The glycosidic bond in sucrose is formed between the anomeric carbon of glucose (C1) and the anomeric carbon of fructose (C2).", explanationTamil: "சுக்ரோஸில் உள்ள கிளைகோசைடிக் பிணைப்பு குளுக்கோஸின் அனோமெரிக் கார்பனுக்கும் (C1) மற்றும் பிரக்டோஸின் அனோமெரிக் கார்பனுக்கும் (C2) இடையில் உருவாகிறது." },
                { step: 4, explanation: "Since both anomeric carbons (the potentially reducing carbons) are locked in the glycosidic bond, there is no free hemiacetal group available to open up. Therefore, sucrose cannot reduce Tollens' or Fehling's reagent and is a non-reducing sugar.", explanationTamil: "இரண்டு அனோமெரிக் கார்பன்களும் (ஒடுக்கும் திறன் கொண்ட கார்பன்கள்) கிளைகோசைடிக் பிணைப்பில் பூட்டப்பட்டிருப்பதால், திறக்கக்கூடிய சுதந்திரமான ஹெமிஅசிட்டால் தொகுதி எதுவும் இல்லை. எனவே, சுக்ரோஸ் டாலன்ஸ் அல்லது ஃபெலிங் கரணியை ஒடுக்க முடியாது மற்றும் இது ஒரு ஒடுக்கா சர்க்கரை ஆகும்." }
            ]
        },
        {
            title: "JEE Level: Amino Acids and pI",
            titleTamil: "ஜே.இ.இ நிலை: அமினோ அமிலங்கள் மற்றும் pI",
            difficulty: 'Medium',
            problem: "The structure of alanine is CH₃-CH(NH₂)-COOH. Draw its structure at pH=2 and pH=10. What is a zwitterion?",
            problemTamil: "அலனைனின் அமைப்பு CH₃-CH(NH₂)-COOH ஆகும். pH=2 மற்றும் pH=10 இல் அதன் அமைப்பை வரையவும். ஒரு இருமுனை அயனி (zwitterion) என்றால் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the acidic (-COOH) and basic (-NH₂) groups. A zwitterion is a neutral molecule with both a positive and a negative electrical charge at different locations within that molecule. At physiological pH (~7), the amino acid exists as a zwitterion: CH₃-CH(NH₃⁺)-COO⁻.", explanationTamil: "அமில (-COOH) மற்றும் கார (-NH₂) தொகுதிகளை அடையாளம் காணவும். ஒரு இருமுனை அயனி என்பது ஒரு மூலக்கூறுக்குள் வெவ்வேறு இடங்களில் ஒரு நேர்மறை மற்றும் ஒரு எதிர்மறை மின்சுமையைக் கொண்ட ஒரு நடுநிலை மூலக்கூறு ஆகும்." },
                { step: 2, explanation: "At very low pH (acidic conditions, pH=2), there is a high concentration of H⁺ ions. The basic carboxylate group (-COO⁻) will be protonated.", calculation: "At pH=2, structure is CH₃-CH(NH₃⁺)-COOH (cationic form)." },
                { step: 3, explanation: "At very high pH (basic conditions, pH=10), there is a high concentration of OH⁻ ions. The acidic ammonium group (-NH₃⁺) will be deprotonated.", calculation: "At pH=10, structure is CH₃-CH(NH₂)-COO⁻ (anionic form)." }
            ],
            commonPitfall: "Forgetting that both groups can be protonated or deprotonated depending on the pH. The zwitterionic form is dominant only near the isoelectric point (pI)."
        },
        {
            title: "NEET Level: DNA vs RNA",
            titleTamil: "நீட் நிலை: DNA vs RNA",
            difficulty: 'Easy',
            problem: "List two structural differences between DNA and RNA.",
            problemTamil: "DNA மற்றும் RNA க்கு இடையேயான இரண்டு கட்டமைப்பு வேறுபாடுகளைப் பட்டியலிடுக.",
            solutionSteps: [
                { step: 1, explanation: "First difference is the pentose sugar. DNA contains 2-deoxy-D-ribose, while RNA contains D-ribose.", explanationTamil: "முதல் வேறுபாடு பென்டோஸ் சர்க்கரை. DNA 2-டீஆக்ஸி-D-ரிபோஸையும், RNA D-ரிபோஸையும் கொண்டுள்ளது." },
                { step: 2, explanation: "Second difference is the nitrogenous bases. DNA contains Adenine, Guanine, Cytosine, and Thymine (A, G, C, T). RNA contains Adenine, Guanine, Cytosine, and Uracil (A, G, C, U). Thymine in DNA is replaced by Uracil in RNA.", explanationTamil: "இரண்டாவது வேறுபாடு நைட்ரஜன் காரங்கள். DNA அடினைன், குவானைன், சைட்டோசின், மற்றும் தைமின் (A, G, C, T) ஆகியவற்றைக் கொண்டுள்ளது. RNA அடினைன், குவானைன், சைட்டோசின், மற்றும் யுராசில் (A, G, C, U) ஆகியவற்றைக் கொண்டுள்ளது." }
            ],
            neetHack: "Remember: RNA has 'U' (Uracil). DNA has 'T' (Thymine)."
        },
        {
            title: "JEE Level: Denaturation of Proteins",
            titleTamil: "ஜே.இ.இ நிலை: புரதங்களின் இயல்பு திரிதல்",
            difficulty: 'Medium',
            problem: "When an egg is boiled, the egg white (albumin) coagulates. What is this process called, and which level(s) of protein structure are lost?",
            problemTamil: "ஒரு முட்டையை வேகவைக்கும்போது, முட்டையின் வெள்ளைக்கரு (அல்புமின்) உறைகிறது. இந்த செயல்முறை என்ன அழைக்கப்படுகிறது, மற்றும் புரத அமைப்பின் எந்த நிலை(கள்) இழக்கப்படுகிறது?",
            solutionSteps: [
                { step: 1, explanation: "This process is called denaturation of protein.", explanationTamil: "இந்த செயல்முறை புரதத்தின் இயல்பு திரிதல் என அழைக்கப்படுகிறது." },
                { step: 2, explanation: "Denaturation is a process in which proteins lose their native shape due to the disruption of weak chemical bonds and interactions, such as hydrogen bonds, ionic bonds, and hydrophobic interactions.", explanationTamil: "இயல்பு திரிதல் என்பது, ஹைட்ரஜன் பிணைப்புகள், அயனிப் பிணைப்புகள் மற்றும் நீர்வெறுப்பு இடைவினைகள் போன்ற பலவீனமான வேதிப் பிணைப்புகள் மற்றும் இடைவினைகளின் சீர்குலைவு காரணமாக புரதங்கள் அவற்றின் இயல்பான வடிவத்தை இழக்கும் ஒரு செயல்முறையாகும்." },
                { step: 3, explanation: "During denaturation, the secondary (α-helix, β-sheet), tertiary (3D folding), and quaternary (subunit arrangement) structures are disrupted.", explanationTamil: "இயல்பு திரிதலின் போது, இரண்டாம் நிலை, மூன்றாம் நிலை மற்றும் நான்கிணைய அமைப்புகள் சீர்குலைக்கப்படுகின்றன." },
                { step: 4, explanation: "However, the primary structure, which is the sequence of amino acids held together by strong covalent peptide bonds, remains intact.", explanationTamil: "இருப்பினும், முதன்மை அமைப்பு, அதாவது வலுவான சகப்பிணைப்பு பெப்டைடு பிணைப்புகளால் ஒன்றாகப் பிடிக்கப்பட்ட அமினோ அமிலங்களின் வரிசை, அப்படியே உள்ளது." }
            ]
        },
        {
            title: "NEET Level: Vitamin Deficiency",
            titleTamil: "நீட் நிலை: வைட்டமின் குறைபாடு",
            difficulty: 'Easy',
            problem: "Which vitamin deficiency causes the disease 'scurvy', characterized by bleeding gums?",
            problemTamil: "'ஸ்கர்வி' என்ற நோய், ஈறுகளில் இரத்தப்போக்கு மூலம் வகைப்படுத்தப்படுகிறது, எந்த வைட்டமின் குறைபாட்டால் ஏற்படுகிறது?",
            solutionSteps: [
                { step: 1, explanation: "Identify the disease and its key symptom. Disease: Scurvy. Symptom: Bleeding gums.", explanationTamil: "நோய் மற்றும் அதன் முக்கிய அறிகுறியை அடையாளம் காணவும்." },
                { step: 2, explanation: "Recall the functions and deficiency diseases of common vitamins.", explanationTamil: "பொதுவான வைட்டமின்களின் செயல்பாடுகள் மற்றும் குறைபாட்டு நோய்களை நினைவுகூர்க." },
                { step: 3, explanation: "The deficiency of Vitamin C (Ascorbic acid) causes scurvy. Vitamin C is essential for collagen synthesis, which is important for healthy gums and skin.", explanationTamil: "வைட்டமின் C (அஸ்கார்பிக் அமிலம்) குறைபாடு ஸ்கர்வியை ஏற்படுத்துகிறது. கொலாஜன் தொகுப்புக்கு வைட்டமின் C அவசியம், இது ஆரோக்கியமான ஈறுகள் மற்றும் தோலுக்கு முக்கியமானது." }
            ]
        }
    ],
    mcqs: [
        { question: "Which of the following is a non-reducing sugar?", options: ["A. Glucose", "B. Fructose", "C. Maltose", "D. Sucrose"], answer: "D. Sucrose", explanation: "In sucrose, the anomeric carbons of both glucose and fructose are involved in the glycosidic bond, so it has no free hemiacetal group.", neetFrequency: 5 },
        { question: "The primary structure of a protein refers to:", options: ["A. The sequence of amino acids", "B. The α-helix or β-sheet formation", "C. The 3D folding of the polypeptide", "D. The assembly of subunits"], answer: "A. The sequence of amino acids", explanation: "The primary structure is the linear sequence of amino acids in the polypeptide chain.", neetFrequency: 4 },
        { question: "Which base is present in RNA but not in DNA?", options: ["A. Adenine", "B. Guanine", "C. Cytosine", "D. Uracil"], answer: "D. Uracil", explanation: "In RNA, Thymine is replaced by Uracil.", neetFrequency: 5 },
        { question: "Which of the following is a fat-soluble vitamin?", options: ["A. Vitamin B", "B. Vitamin C", "C. Vitamin D", "D. Vitamin P"], answer: "C. Vitamin D", explanation: "Vitamins A, D, E, and K are fat-soluble.", neetFrequency: 3 },
        { question: "The bond connecting two amino acids is called a:", options: ["A. Glycosidic bond", "B. Peptide bond", "C. Hydrogen bond", "D. Phosphodiester bond"], answer: "B. Peptide bond", explanation: "A peptide bond (-CO-NH-) is an amide bond that links amino acids together.", neetFrequency: 4 },
        { question: "The sweetest carbohydrate is:", options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Lactose"], answer: "B. Fructose", explanation: "Fructose, often found in fruits, is the sweetest of all natural sugars.", neetFrequency: 2 },
        { question: "Denaturation of protein leads to the loss of its biological activity by:", options: ["A. Disruption of primary structure", "B. Formation of amino acids", "C. Disruption of secondary and tertiary structures", "D. Formation of peptide bonds"], answer: "C. Disruption of secondary and tertiary structures", explanation: "Denaturation disrupts the higher-level structures (2°, 3°, 4°) responsible for a protein's function, but not the primary sequence.", neetFrequency: 4 },
        { question: "The sugar present in DNA is:", options: ["A. Ribose", "B. Deoxyribose", "C. Glucose", "D. Fructose"], answer: "B. Deoxyribose", explanation: "The 'D' in DNA stands for Deoxyribonucleic acid, referring to the deoxyribose sugar.", neetFrequency: 3 },
        { question: "Night blindness is caused by the deficiency of:", options: ["A. Vitamin A", "B. Vitamin B₁₂", "C. Vitamin C", "D. Vitamin K"], answer: "A. Vitamin A", explanation: "Vitamin A (Retinol) is essential for vision.", neetFrequency: 3 },
        { question: "Which of the following is an example of a globular protein?", options: ["A. Keratin", "B. Myosin", "C. Collagen", "D. Insulin"], answer: "D. Insulin", explanation: "Insulin is a globular protein that functions as a hormone. Keratin, myosin, and collagen are fibrous proteins.", neetFrequency: 2 },
        { question: "The linkage that joins two nucleotides together is a:", options: ["A. Peptide bond", "B. Glycosidic bond", "C. Phosphodiester bond", "D. Hydrogen bond"], answer: "C. Phosphodiester bond", explanation: "A phosphodiester bond links the 3' carbon of one sugar to the 5' carbon of the next through a phosphate group.", neetFrequency: 4 },
        { question: "Starch is a polymer of:", options: ["A. α-D-glucose", "B. β-D-glucose", "C. α-D-fructose", "D. β-D-fructose"], answer: "A. α-D-glucose", explanation: "Starch consists of two components, amylose and amylopectin, both of which are polymers of α-D-glucose.", neetFrequency: 3 },
        { question: "An amino acid exists as a zwitterion at its:", options: ["A. Isoelectric point", "B. Melting point", "C. Boiling point", "D. Low pH"], answer: "A. Isoelectric point", explanation: "The isoelectric point (pI) is the pH at which the amino acid has a net charge of zero and exists predominantly as a zwitterion.", neetFrequency: 3 },
        { question: "The deficiency of which vitamin causes Beri-Beri?", options: ["A. Vitamin B₂", "B. Vitamin B₆", "C. Vitamin B₁", "D. Vitamin B₁₂"], answer: "C. Vitamin B₁", explanation: "Deficiency of Vitamin B₁ (Thiamine) causes Beri-Beri.", neetFrequency: 2 },
        { question: "The secondary structure of a protein is mainly stabilized by:", options: ["A. Ionic bonds", "B. Covalent bonds", "C. Hydrogen bonds", "D. van der Waals forces"], answer: "C. Hydrogen bonds", explanation: "The α-helix and β-pleated sheet structures are stabilized by hydrogen bonds between the C=O and N-H groups of the polypeptide backbone.", neetFrequency: 4 },
        { question: "The base pairing in DNA is:", options: ["A. A-G and C-T", "B. A-T and G-C", "C. A-C and G-T", "D. A-U and G-C"], answer: "B. A-T and G-C", explanation: "Adenine pairs with Thymine (with 2 hydrogen bonds), and Guanine pairs with Cytosine (with 3 hydrogen bonds).", neetFrequency: 5 },
        { question: "Lactose on hydrolysis gives:", options: ["A. Glucose + Fructose", "B. Glucose + Glucose", "C. Glucose + Galactose", "D. Fructose + Galactose"], answer: "C. Glucose + Galactose", explanation: "Lactose, the sugar in milk, is a disaccharide composed of galactose and glucose.", neetFrequency: 3 },
        { question: "Enzymes are:", options: ["A. Carbohydrates", "B. Lipids", "C. Proteins", "D. Nucleic acids"], answer: "C. Proteins", explanation: "Almost all enzymes are globular proteins that act as biological catalysts.", neetFrequency: 2 },
        { question: "Which of the following is an essential amino acid?", options: ["A. Alanine", "B. Glycine", "C. Lysine", "D. Serine"], answer: "C. Lysine", explanation: "Essential amino acids cannot be synthesized by the body and must be obtained from the diet. Lysine is an essential amino acid.", neetFrequency: 1 },
        { question: "The sugar linkage in sucrose is:", options: ["A. α-1,4", "B. β-1,4", "C. α-1, β-2", "D. α-1,6"], answer: "C. α-1, β-2", explanation: "The glycosidic linkage in sucrose is between the C1 of α-glucose and the C2 of β-fructose.", neetFrequency: 3 },
        { question: "The protein responsible for blood clotting is:", options: ["A. Albumin", "B. Hemoglobin", "C. Fibrinogen", "D. Myosin"], answer: "C. Fibrinogen", explanation: "Fibrinogen is converted into fibrin, which forms the meshwork of a blood clot.", neetFrequency: 1 },
        { question: "The helical structure of a protein is which type of structure?", options: ["A. Primary", "B. Secondary", "C. Tertiary", "D. Quaternary"], answer: "B. Secondary", explanation: "The α-helix is a common type of secondary structure in proteins.", neetFrequency: 4 },
        { question: "Which of the following is also known as ascorbic acid?", options: ["A. Vitamin A", "B. Vitamin B", "C. Vitamin C", "D. Vitamin D"], answer: "C. Vitamin C", explanation: "The chemical name for Vitamin C is ascorbic acid.", neetFrequency: 2 },
        { question: "In a nucleotide, the phosphate group is linked to which carbon of the sugar?", options: ["A. C1", "B. C2", "C. C3", "D. C5"], answer: "D. C5", explanation: "The phosphate group is attached to the 5' carbon of the pentose sugar.", neetFrequency: 3 },
        { question: "The process of converting glucose into ethanol is:", options: ["A. Oxidation", "B. Reduction", "C. Fermentation", "D. Hydrolysis"], answer: "C. Fermentation", explanation: "Fermentation is an anaerobic process where microorganisms like yeast convert sugars into ethanol and carbon dioxide.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "Sucrose is a non-reducing sugar.", reason: "In sucrose, the reducing groups of glucose and fructose are involved in the glycosidic bond.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Since the anomeric carbons of both monosaccharides are locked in the bond, there is no free hemiacetal group to act as a reducing agent.", neetFrequency: 4 },
        { assertion: "All amino acids exist as zwitterions.", reason: "Amino acids have both acidic and basic groups.", answer: "C", explanation: "The assertion is not entirely true. They exist as zwitterions *at a specific pH* (the isoelectric point). In strongly acidic or basic solutions, they exist as cations or anions, respectively. The reason is true.", neetFrequency: 3 },
        { assertion: "The two strands of DNA are complementary to each other.", reason: "The hydrogen bonds are formed between specific pairs of bases: A with T, and G with C.", answer: "A", explanation: "Assertion is true. The reason is also true and correctly explains the principle of complementarity in DNA.", neetFrequency: 5 },
        { assertion: "Denaturation of a protein does not change its primary structure.", reason: "Denaturation disrupts hydrogen bonds and other non-covalent interactions, but not the strong covalent peptide bonds.", answer: "A", explanation: "Both statements are true. Denaturation affects the 2°, 3°, and 4° structures, but the primary sequence of amino acids remains intact because peptide bonds are not broken.", neetFrequency: 4 },
        { assertion: "Starch and cellulose are both polymers of glucose.", reason: "Starch and cellulose have different chemical properties.", answer: "B", explanation: "Both statements are true but the reason is not an explanation of the assertion. Starch is a polymer of α-glucose and cellulose is a polymer of β-glucose. This difference in linkage (α vs β) leads to their very different properties (digestible vs indigestible for humans), but the reason doesn't explain the first statement.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Starch", "(b) Protein", "(c) Nucleic Acid", "(d) Lipid"], column2: ["(p) Phosphodiester bond", "(q) Peptide bond", "(r) Ester bond", "(s) Glycosidic bond"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching the biomolecule with the primary type of linkage it contains." },
        { column1: ["(a) Vitamin A", "(b) Vitamin B₁₂", "(c) Vitamin C", "(d) Vitamin K"], column2: ["(p) Scurvy", "(q) Pernicious anemia", "(r) Blood clotting", "(s) Night blindness"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching vitamins with their deficiency diseases or functions." },
        { column1: ["(a) Glucose", "(b) Sucrose", "(c) Keratin", "(d) RNA"], column2: ["(p) Fibrous protein", "(q) Monosaccharide", "(r) Disaccharide", "(s) Contains Uracil"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching the substance with its correct classification." },
        { column1: ["(a) α-helix", "(b) DNA double helix", "(c) Enzyme", "(d) Zwitterion"], column2: ["(p) Biological catalyst", "(q) Dipolar ion", "(r) Hydrogen bonds", "(s) Secondary structure"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching concepts with their definitions or key features. Both helices are stabilized by H-bonds." },
        { column1: ["(a) Reducing sugar test", "(b) Test for proteins", "(c) Test for unsaturation", "(d) Test for primary amines"], column2: ["(p) Carbylamine test", "(q) Biuret test", "(r) Tollens' reagent", "(s) Bromine water"], answer: "a-r, b-q, c-s, d-p", explanation: "Matching chemical tests with the substances they detect." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [
        "The structure of biomolecules dictates their function (e.g., the sequence of amino acids determines protein folding and function).",
        "Carbohydrates are classified as mono-, di-, or polysaccharides, and as reducing or non-reducing sugars.",
        "Proteins have four levels of structure, each crucial for their biological role.",
        "DNA and RNA differ in their sugar, one of their bases, and their overall structure, leading to different functions.",
        "Vitamins are essential micronutrients classified as either fat-soluble or water-soluble."
    ],
    mnemonics: [
        { text: "Essential Amino Acids: 'PVT TIM HALL' (Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine).", tamil: "அத்தியாவசிய அமினோ அமிலங்கள்: 'PVT TIM HALL'." }
    ],
    neetTips: [
        { text: "Questions distinguishing between DNA and RNA are very common. Make a table of the differences (sugar, bases, structure) for quick revision.", tamil: "DNA மற்றும் RNA-ஐ வேறுபடுத்தும் கேள்விகள் மிகவும் பொதுவானவை. விரைவான திருத்தத்திற்கு வேறுபாடுகளின் (சர்க்கரை, காரங்கள், அமைப்பு) ஒரு அட்டவணையை உருவாக்கவும்." },
        { text: "The difference between reducing and non-reducing sugars, especially sucrose vs. maltose/lactose, is a high-yield concept.", tamil: "ஒடுக்கும் மற்றும் ஒடுக்கா சர்க்கரைகளுக்கு இடையிலான வேறுபாடு, குறிப்பாக சுக்ரோஸ் மற்றும் மால்டோஸ்/லாக்டோஸ், ஒரு உயர்-மகசூல் கருத்து ஆகும்." }
    ],
    studentTip: {
        english: "Biomolecules can seem like a lot of memorization, but focus on the patterns. For example, understand *why* the α and β linkages in starch and cellulose lead to such different properties. This makes remembering easier.",
        tamil: "உயிர் மூலக்கூறுகள் நிறைய மனப்பாடம் செய்வது போல் தோன்றலாம், ஆனால் வடிவங்களில் கவனம் செலுத்துங்கள். எடுத்துக்காட்டாக, ஸ்டார்ச் மற்றும் செல்லுலோஸில் உள்ள α மற்றும் β இணைப்புகள் ஏன் அத்தகைய வெவ்வேறு பண்புகளுக்கு வழிவகுக்கின்றன என்பதைப் புரிந்து கொள்ளுங்கள். இது நினைவில் கொள்வதை எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend why denaturation is sometimes reversible and sometimes irreversible. What determines whether a boiled egg can be 'unboiled'?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஏன் இயல்பு திரிதல் சில நேரங்களில் மீளக்கூடியதாகவும், சில நேரங்களில் மீள முடியாததாகவும் உள்ளது? வேகவைத்த முட்டையை 'அவிக்காமல்' செய்ய முடியுமா என்பதை எது தீர்மானிக்கிறது?"
    },
    nextChapter: {
        title: "Principles Related to Practical Chemistry",
        titleTamil: "செய்முறை வேதியியல் தொடர்பான கோட்பாடுகள்"
    },
    validationReport: []
};
