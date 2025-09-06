
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingNitrogen: NeetModule = {
    id: 'neet-chemistry-organic-compounds-containing-nitrogen',
    title: 'Chemistry - Organic Compounds Containing Nitrogen (நைட்ரஜன் கொண்ட கரிமச் சேர்மங்கள்)',
    chapter: 'Organic Compounds Containing Nitrogen',
    subject: 'Chemistry',
    learningObjectives: [
        "Classify amines as primary, secondary, and tertiary.",
        "Understand the IUPAC nomenclature of amines.",
        "Describe the methods of preparation of amines.",
        "Analyze the basic character of amines and compare the basicity of different types of amines.",
        "Explain the key chemical reactions of amines, including acylation, carbylamine reaction, and reaction with nitrous acid.",
        "Understand the preparation, properties, and reactions of diazonium salts.",
        "Describe the importance of diazonium salts in the synthesis of other aromatic compounds."
    ],
    prerequisites: [
        "Basic principles of organic chemistry.",
        "Understanding of acids and bases, and the concept of basicity.",
        "Knowledge of organic compounds containing halogens and oxygen."
    ],
    conceptOverview: "This chapter focuses on organic compounds containing nitrogen, primarily amines. Amines are organic derivatives of ammonia and are fundamentally basic in nature. We will explore their structure, classification, and methods of preparation. A key part of the chapter is analyzing their chemical reactivity, with a special focus on their basicity and how it's influenced by their structure. The chapter also covers diazonium salts, which are extremely versatile intermediates in organic synthesis, allowing for the preparation of a wide variety of substituted aromatic compounds from a single starting material (aniline).",
    tamilConnection: "புரதங்கள் மற்றும் நியூக்ளிக் அமிலங்கள் போன்ற உயிர் மூலக்கூறுகளின் முக்கிய கூறு நைட்ரஜன் ஆகும். அமீன்கள், அதன் காரப் பண்புகளால், பல உயிர்வேதியியல் வினைகளில் முக்கிய பங்கு வகிக்கின்றன. இந்த அத்தியாயம், இந்த முக்கிய நைட்ரஜன் சேர்மங்களின் வேதியியலை விளக்குகிறது.",
    culturalContext: "Many of the dyes used in the textile industry in places like Tiruppur are azo dyes. These vibrant dyes are synthesized using diazonium salts, a key topic in this chapter. The Sandmeyer and Gattermann reactions, which use diazonium salts, are industrially important processes for creating these colorful compounds.",
    syllabusMapping: [
        {
            topic: "Organic Compounds Containing Nitrogen",
            tnBoardChapter: "12th Std Chemistry - Vol 2, Chapter 13: Organic Nitrogen Compounds",
            ncertReference: "Class 12 Chemistry - Part 2, Chapter 13: Amines",
            notes: "A very important chapter. The basicity of amines (comparing primary, secondary, tertiary, and aniline) is a favorite conceptual question. Reactions of diazonium salts (Sandmeyer, Gattermann, coupling reactions) are also frequently tested.",
            mappingDescription: '12th Std Chemistry - Vol 2, Chapter 13 maps to NEET Chemistry Unit 25'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Amines: Structure and Basicity', tamil: '1. அமீன்கள்: அமைப்பு மற்றும் காரத்தன்மை' },
            content: [
                { english: 'Amines are derivatives of ammonia (NH₃) where one or more hydrogen atoms are replaced by alkyl or aryl groups. They are classified as primary (1°), secondary (2°), and tertiary (3°).', tamil: 'அமீன்கள் அம்மோனியாவின் (NH₃) வழித்தோன்றல்கள் ஆகும், இங்கு ஒன்று அல்லது அதற்கு மேற்பட்ட ஹைட்ரஜன் அணுக்கள் அல்கைல் அல்லது அரைல் குழுக்களால் மாற்றப்படுகின்றன. அவை முதன்மை (1°), இரண்டாம் நிலை (2°), மற்றும் மூன்றாம் நிலை (3°) என வகைப்படுத்தப்படுகின்றன.' },
                { english: `**Basicity of Amines (அமீன்களின் காரத்தன்மை):** Amines are basic due to the presence of a lone pair of electrons on the nitrogen atom, which can be donated. Their basic strength depends on the availability of this lone pair.`, tamil: '**அமீன்களின் காரத்தன்மை:** நைட்ரஜன் அணுவில் உள்ள ஒரு தனித்த எலக்ட்ரான் ஜோடியின் இருப்பு காரணமாக அமீன்கள் காரத்தன்மை கொண்டவை, இதை வழங்க முடியும். அவற்றின் கார வலிமை இந்த தனித்த ஜோடியின் கிடைப்பதைப் பொறுத்தது.' },
                { english: `*   **Aliphatic amines vs. Ammonia:** Alkyl groups (+I effect) increase electron density on nitrogen, making aliphatic amines stronger bases than ammonia. Order in gaseous phase: 3° > 2° > 1° > NH₃.`, tamil: `*   **அலிபாடிக் அமீன்கள் vs. அம்மோனியா:** அல்கைல் குழுக்கள் (+I விளைவு) நைட்ரஜன் மீது எலக்ட்ரான் அடர்த்தியை அதிகரித்து, அலிபாடிக் அமீன்களை அம்மோனியாவை விட வலிமையான காரங்களாக ஆக்குகின்றன. வாயு நிலையில் வரிசை: 3° > 2° > 1° > NH₃.` },
                { english: `*   **Aromatic amines vs. Ammonia:** Aryl groups (-R effect) pull the lone pair into the benzene ring for resonance, making it less available for donation. Thus, aromatic amines like aniline are much weaker bases than ammonia.`, tamil: `*   **அரோமாட்டிக் அமீன்கள் vs. அம்மோனியா:** அரைல் குழுக்கள் (-R விளைவு) தனித்த ஜோடியை பென்சீன் வளையத்திற்குள் உடனிசைவிற்காக இழுக்கின்றன, இது அதை வழங்குவதற்கு குறைவாகக் கிடைக்கச் செய்கிறது. இதனால், அனிலின் போன்ற அரோமாட்டிக் அமீன்கள் அம்மோனியாவை விட மிகவும் பலவீனமான காரங்கள்.` },
                { english: `*   **Order in aqueous solution:** The order is complex due to a combination of +I effect, solvation effect (stabilization of the conjugate acid by H-bonding), and steric hindrance. For ethyl amines, the order is (C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃.`, tamil: `*   **நீர்க்கரைசலில் வரிசை:** +I விளைவு, கரைப்பானேற்ற விளைவு (இணை அமிலத்தின் நிலைப்படுத்தல்), மற்றும் இடத்தடை ஆகியவற்றின் கலவையால் வரிசை சிக்கலானது. எத்தில் அமீன்களுக்கு, வரிசை (C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃.` }
            ]
        },
        {
            heading: { english: '2. Preparation of Amines', tamil: '2. அமீன்களின் தயாரிப்பு' },
            content: [
                { english: '**Reduction of Nitro Compounds:** Nitro compounds are reduced to amines using H₂/Pd or Sn/HCl. This is a common method for preparing aniline from nitrobenzene.', tamil: '**நைட்ரோ சேர்மங்களின் ஒடுக்கம்:** நைட்ரோ சேர்மங்கள் H₂/Pd அல்லது Sn/HCl ஐப் பயன்படுத்தி அமீன்களாக ஒடுக்கப்படுகின்றன. இது நைட்ரோபென்சீனிலிருந்து அனிலினைத் தயாரிப்பதற்கான ஒரு பொதுவான முறையாகும்.' },
                { english: '**Ammonolysis of Alkyl Halides (Hoffmann Ammonolysis):** Reaction of alkyl halides with ammonia. A disadvantage is that it produces a mixture of 1°, 2°, 3° amines and a quaternary ammonium salt.', tamil: '**அல்கைல் ஹாலைடுகளின் அம்மோனolysis (ஹாஃப்மேன் அம்மோனolysis):** அல்கைல் ஹாலைடுகளின் அம்மோனியாவுடன் வினை. ஒரு தீமை என்னவென்றால், இது 1°, 2°, 3° அமீன்கள் மற்றும் ஒரு நான்கிணைய அம்மோனியம் உப்பு ஆகியவற்றின் கலவையை உருவாக்குகிறது.' },
                { english: '**Gabriel Phthalimide Synthesis:** Used for the preparation of pure primary amines. Phthalimide is treated with ethanolic KOH, then with an alkyl halide, and finally hydrolyzed.', tamil: '**கேப்ரியல் தாலிமைடு தொகுப்பு:** தூய முதன்மை அமீன்களைத் தயாரிக்கப் பயன்படுகிறது. தாலிமைடு எத்தனாலிக் KOH உடன், பின்னர் ஒரு அல்கைல் ஹாலைடுடன், மற்றும் இறுதியாக நீராற்பகுக்கப்படுகிறது.' },
                { english: '**Hoffmann Bromamide Degradation Reaction:** An amide is treated with bromine in an aqueous or ethanolic solution of NaOH. The amine formed has one carbon atom less than the parent amide.', tamil: '**ஹாஃப்மேன் புரோமாமைடு சிதைவு வினை:** ஒரு அமைடு புரோமினுடன் NaOH இன் நீரியல் அல்லது எத்தனாலிக் கரைசலில் வினைபுரிகிறது. உருவாகும் அமீன் தாய் அமைடை விட ஒரு கார்பன் அணு குறைவாகக் கொண்டுள்ளது.' }
            ]
        },
        {
            heading: { english: '3. Chemical Reactions of Amines', tamil: '3. அமீன்களின் வேதி வினைகள்' },
            content: [
                { english: '**Carbylamine Reaction (Isocyanide Test):** Only primary amines (aliphatic and aromatic) give this test. They are heated with chloroform and alcoholic KOH to form foul-smelling isocyanides.', tamil: '**கார்பைலமீன் வினை (ஐசோசயனைடு சோதனை):** முதன்மை அமீன்கள் (அலிபாடிக் மற்றும் அரோமாட்டிக்) மட்டுமே இந்த சோதனையைக் கொடுக்கின்றன. அவை குளோரோஃபார்ம் மற்றும் ஆல்கஹாலிக் KOH உடன் சூடாக்கப்பட்டு துர்நாற்றமுள்ள ஐசோசயனைடுகளை உருவாக்குகின்றன.' },
                { english: '**Reaction with Nitrous Acid (HNO₂):** Used to distinguish between 1°, 2°, and 3° amines. Primary aliphatic amines give nitrogen gas. Primary aromatic amines form diazonium salts at low temperatures.', tamil: '**நைட்ரஸ் அமிலத்துடன் (HNO₂) வினை:** 1°, 2°, மற்றும் 3° அமீன்களை வேறுபடுத்தப் பயன்படுகிறது. முதன்மை அலிபாடிக் அமீன்கள் நைட்ரஜன் வாயுவைக் கொடுக்கின்றன. முதன்மை அரோமாட்டிக் அமீன்கள் குறைந்த வெப்பநிலையில் டயசோனியம் உப்புகளை உருவாக்குகின்றன.' },
                { english: '**Hinsberg\'s Test:** Reaction with benzenesulphonyl chloride. Used to distinguish between 1°, 2°, and 3° amines.', tamil: '**ஹின்ஸ்பெர்க் சோதனை:** பென்சீன்சல்ஃபோனைல் குளோரைடுடன் வினை. 1°, 2°, மற்றும் 3° அமீன்களை வேறுபடுத்தப் பயன்படுகிறது.' }
            ]
        },
        {
            heading: { english: '4. Diazonium Salts (டயசோனியம் உப்புகள்)', tamil: '4. டயசோனியம் உப்புகள்' },
            content: [
                { english: 'General formula $ArN_2^+X^-$. They are prepared by treating a primary aromatic amine with nitrous acid at low temperatures (0-5°C). This reaction is called **diazotization (டயசோஆக்குதல்)**.', tamil: 'பொதுவான வாய்ப்பாடு $ArN_2^+X^-$. அவை ஒரு முதன்மை அரோமாட்டிக் அமீனை குறைந்த வெப்பநிலையில் (0-5°C) நைட்ரஸ் அமிலத்துடன் வினைபுரியச் செய்வதன் மூலம் தயாரிக்கப்படுகின்றன. இந்த வினை **டயசோஆக்குதல்** எனப்படும்.' },
                { english: '**Importance:** They are very versatile intermediates in organic synthesis.', tamil: '**முக்கியத்துவம்:** அவை கரிமத் தொகுப்பில் மிகவும் பல்துறை இடைநிலைகளாகும்.' },
                { english: '**Sandmeyer Reaction:** Replacement of the diazonium group with -Cl, -Br, or -CN using Cu(I) salt.', tamil: '**சாண்ட்மேயர் வினை:** Cu(I) உப்பைப் பயன்படுத்தி டயசோனியம் குழுவை -Cl, -Br, அல்லது -CN ஆல் மாற்றுதல்.' },
                { english: '**Gattermann Reaction:** Similar to Sandmeyer, but uses copper powder instead of cuprous salt.', tamil: '**கேட்டர்மேன் வினை:** சாண்ட்மேயரைப் போன்றது, ஆனால் குப்ரஸ் உப்பிற்கு பதிலாக செப்புத் தூளைப் பயன்படுத்துகிறது.' },
                { english: '**Coupling Reaction:** Reaction with electron-rich aromatic compounds like phenols or anilines to form brightly colored azo compounds (dyes). This is an electrophilic substitution reaction.', tamil: '**இணைப்பு வினை:** ஃபீனால்கள் அல்லது அனிலின்கள் போன்ற எலக்ட்ரான்-செறிந்த அரோமாட்டிக் சேர்மங்களுடன் வினைபுரிந்து பிரகாசமான வண்ணமுடைய அசோ சேர்மங்களை (சாயங்கள்) உருவாக்குகிறது. இது ஒரு எலக்ட்ரான் கவர் பொருள் பதிலீட்டு வினையாகும்.' }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Basicity of Amines",
            titleTamil: "நீட் நிலை: அமீன்களின் காரத்தன்மை",
            difficulty: 'Medium',
            problem: "Arrange the following in increasing order of their basic strength in aqueous solution: NH₃, C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, C₆H₅NH₂.",
            problemTamil: "பின்வருவனவற்றை அவற்றின் நீர்க்கரைசலில் உள்ள கார வலிமையின் ஏறுவரிசையில் அடுக்கவும்: NH₃, C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, C₆H₅NH₂.",
            solutionSteps: [
                { step: 1, explanation: "Aniline (C₆H₅NH₂) is the weakest base because the lone pair on nitrogen is delocalized into the benzene ring by resonance, making it less available for donation.", explanationTamil: "அனிலின் (C₆H₅NH₂) மிகவும் பலவீனமான காரமாகும், ஏனெனில் நைட்ரஜன் மீதான தனித்த ஜோடி உடனிசைவு மூலம் பென்சீன் வளையத்திற்குள் இடமாற்றம் செய்யப்படுகிறது, இது அதை வழங்குவதற்கு குறைவாகக் கிடைக்கச் செய்கிறது." },
                { step: 2, explanation: "Aliphatic amines are stronger bases than ammonia due to the electron-donating (+I) effect of alkyl groups.", explanationTamil: "அல்கைல் குழுக்களின் எலக்ட்ரான் வழங்கும் (+I) விளைவு காரணமாக அலிபாடிக் அமீன்கள் அம்மோனியாவை விட வலிமையான காரங்கள்." },
                { step: 3, explanation: "In aqueous solution, the basicity of aliphatic amines is a combined effect of +I effect, steric hindrance, and solvation of the conjugate acid.", explanationTamil: "நீர்க்கரைசலில், அலிபாடிக் அமீன்களின் காரத்தன்மை +I விளைவு, இடத்தடை, மற்றும் இணை அமிலத்தின் கரைப்பானேற்றம் ஆகியவற்றின் ஒருங்கிணைந்த விளைவாகும்." },
                { step: 4, explanation: "For ethyl groups, the combined effects lead to the order: Secondary (2°) > Tertiary (3°) > Primary (1°).", explanationTamil: "எத்தில் குழுக்களுக்கு, ஒருங்கிணைந்த விளைவுகள் வரிசைக்கு வழிவகுக்கின்றன: இரண்டாம் நிலை (2°) > மூன்றாம் நிலை (3°) > முதன்மை (1°)." },
                { step: 5, explanation: "Combining all these facts, the increasing order of basic strength is: C₆H₅NH₂ < NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH. Note: For methyl amines, the order is 2°>1°>3°.", calculation: "C₆H₅NH₂ < NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH" }
            ],
            commonPitfall: "Applying the gaseous phase order (3°>2°>1°) to aqueous solutions. The order in water is different due to solvation effects."
        },
        {
            title: "JEE Level: Multi-step Synthesis using Diazonium Salts",
            titleTamil: "ஜே.இ.இ நிலை: டயசோனியம் உப்புகளைப் பயன்படுத்தி பல-படி தொகுப்பு",
            difficulty: "Hard",
            problem: "How would you convert nitrobenzene to 1,3,5-tribromobenzene?",
            problemTamil: "நைட்ரோபென்சீனை 1,3,5-டிரைபுரோமோபென்சீனாக எவ்வாறு மாற்றுவீர்கள்?",
            solutionSteps: [
                { step: 1, explanation: "Step 1: Reduction. Reduce nitrobenzene to aniline using Sn/HCl or H₂/Pd.", calculation: "C₆H₅NO₂ → C₆H₅NH₂" },
                { step: 2, explanation: "Step 2: Bromination. The -NH₂ group is a very strong activating group. Reacting aniline with excess bromine water (Br₂(aq)) leads to the precipitation of 2,4,6-tribromoaniline.", calculation: "C₆H₅NH₂ + 3Br₂ → C₆H₂(Br)₃NH₂" },
                { step: 3, explanation: "Step 3: Diazotization. Convert the amino group of 2,4,6-tribromoaniline into a diazonium salt by reacting with NaNO₂/HCl at 0-5°C.", calculation: "C₆H₂(Br)₃NH₂ → C₆H₂(Br)₃N₂⁺Cl⁻" },
                { step: 4, explanation: "Step 4: Deamination (Removal of diazo group). The diazonium group can be replaced by hydrogen by treating it with a mild reducing agent like hypophosphorous acid (H₃PO₂) or ethanol.", calculation: "C₆H₂(Br)₃N₂⁺Cl⁻ + H₃PO₂ + H₂O → C₆H₃Br₃ + N₂ + H₃PO₃ + HCl" },
                { step: 5, explanation: "The final product is 1,3,5-tribromobenzene.", explanationTamil: "இறுதி விளைபொருள் 1,3,5-டிரைபுரோமோபென்சீன் ஆகும்." }
            ],
            neetHack: "Diazonium salts are the key to many aromatic syntheses. Remember the two-step trick: activate the ring with -NH₂, perform the substitution, then remove the -NH₂ group via diazotization and deamination.",
            commonPitfall: "Trying to brominate nitrobenzene directly. The -NO₂ group is a meta-director and deactivating, so direct bromination would give m-bromonitrobenzene, not the 1,3,5-isomer."
        },
        {
            title: "NEET Level: Carbylamine Test",
            titleTamil: "நீட் நிலை: கார்பைலமீன் சோதனை",
            difficulty: 'Easy',
            problem: "Which of the following compounds will give a positive carbylamine test? (a) Aniline, (b) N-methylaniline, (c) Triethylamine, (d) N,N-dimethylaniline",
            problemTamil: "பின்வரும் சேர்மங்களில் எது நேர்மறை கார்பைலமீன் சோதனையைக் கொடுக்கும்? (a) அனிலின், (b) N-மெத்திலனிலின், (c) டிரைஎத்திலமீன், (d) N,N-டைமெத்திலனிலின்",
            solutionSteps: [
                { step: 1, explanation: "The carbylamine test (or isocyanide test) is a characteristic test for primary amines only.", explanationTamil: "கார்பைலமீன் சோதனை (அல்லது ஐசோசயனைடு சோதனை) முதன்மை அமீன்களுக்கு மட்டுமேயான ஒரு சிறப்பியல்பு சோதனையாகும்." },
                { step: 2, explanation: "Identify the type of each amine.", calculation: "Aniline (C₆H₅NH₂): Primary aromatic amine. \\ N-methylaniline (C₆H₅NHCH₃): Secondary amine. \\ Triethylamine ((C₂H₅)₃N): Tertiary amine. \\ N,N-dimethylaniline (C₆H₅N(CH₃)₂): Tertiary amine." },
                { step: 3, explanation: "Since only primary amines give the test, only aniline will react.", calculation: "C₆H₅NH₂ + CHCl₃ + 3KOH → C₆H₅NC + 3KCl + 3H₂O" },
                { step: 4, explanation: "The product, phenyl isocyanide (C₆H₅NC), has a very foul smell.", explanationTamil: "விளைபொருளான, பினைல் ஐசோசயனைடு (C₆H₅NC), மிகவும் துர்நாற்றமுடையது." }
            ]
        },
        {
            title: "JEE Level: Hoffmann Bromamide Degradation",
            titleTamil: "ஜே.இ.இ நிலை: ஹாஃப்மேன் புரோமாமைடு சிதைவு",
            difficulty: 'Medium',
            problem: "What is the product when benzamide is treated with Br₂ in the presence of aqueous NaOH?",
            problemTamil: "பென்சமைடு Br₂ உடன் நீரிய NaOH முன்னிலையில் வினைபுரியும்போது கிடைக்கும் விளைபொருள் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the reaction. This is the Hoffmann bromamide degradation reaction, which converts an amide to a primary amine.", explanationTamil: "வினையை அடையாளம் காணவும். இது ஹாஃப்மேன் புரோமாமைடு சிதைவு வினை, இது ஒரு அமைடை ஒரு முதன்மை அமீனாக மாற்றுகிறது." },
                { step: 2, explanation: "A key feature of this reaction is that the product amine has one carbon atom less than the parent amide. The carbonyl carbon (C=O) is lost.", explanationTamil: "இந்த வினையின் ஒரு முக்கிய அம்சம் என்னவென்றால், விளைபொருள் அமீன் தாய் அமைடை விட ஒரு கார்பன் அணு குறைவாகக் கொண்டுள்ளது. கார்போனைல் கார்பன் (C=O) இழக்கப்படுகிறது." },
                { step: 3, explanation: "The reactant is benzamide (C₆H₅CONH₂).", explanationTamil: "வினைபடுபொருள் பென்சமைடு (C₆H₅CONH₂) ஆகும்." },
                { step: 4, explanation: "Removing the carbonyl group gives the amine C₆H₅NH₂.", explanationTamil: "கார்போனைல் குழுவை நீக்குவது அமீன் C₆H₅NH₂ ஐக் கொடுக்கிறது." },
                { step: 5, explanation: "The product is aniline.", explanationTamil: "விளைபொருள் அனிலின் ஆகும்." }
            ],
            neetHack: "For Hoffmann degradation, just mentally 'erase' the C=O group from the amide to find the product amine.",
            commonPitfall: "Thinking it's a simple substitution and not realizing it's a degradation reaction where a carbon atom is removed."
        },
        {
            title: "NEET Level: Diazonium Salt Reactions",
            titleTamil: "நீட் நிலை: டயசோனியம் உப்பு வினைகள்",
            difficulty: 'Easy',
            problem: "Identify the product X in the following reaction: Aniline --(NaNO₂/HCl, 0-5°C)--> A --(Cu/HCl)--> X.",
            problemTamil: "பின்வரும் வினையில் விளைபொருள் X ஐ அடையாளம் காணவும்: அனிலின் --(NaNO₂/HCl, 0-5°C)--> A --(Cu/HCl)--> X.",
            solutionSteps: [
                { step: 1, explanation: "The first step is the diazotization of aniline to form benzenediazonium chloride (A).", calculation: "A = C₆H₅N₂⁺Cl⁻" },
                { step: 2, explanation: "The second step is the reaction of the diazonium salt with Cu/HCl. This is the Gattermann reaction.", explanationTamil: "இரண்டாவது படி டயசோனியம் உப்பின் Cu/HCl உடன் வினை. இது கேட்டர்மேன் வினை ஆகும்." },
                { step: 3, explanation: "The Gattermann reaction replaces the diazonium group (-N₂⁺Cl⁻) with a chlorine atom.", explanationTamil: "கேட்டர்மேன் வினை டயசோனியம் குழுவை (-N₂⁺Cl⁻) ஒரு குளோரின் அணுவால் மாற்றுகிறது." },
                { step: 4, explanation: "The final product X is chlorobenzene (C₆H₅Cl).", explanationTamil: "இறுதி விளைபொருள் X குளோரோபென்சீன் (C₆H₅Cl) ஆகும்." }
            ],
            commonPitfall: "Confusing the Gattermann reaction (Cu/HX) with the Sandmeyer reaction (Cu₂X₂/HX). Both give the same product but use slightly different reagents."
        }
    ],
    mcqs: [
        { question: "Which of the following is a tertiary amine?", options: ["A. 1-Propanamine", "B. N-methylpropanamine", "C. N,N-dimethylpropanamine", "D. Aniline"], answer: "C. N,N-dimethylpropanamine", explanation: "In a tertiary amine, the nitrogen atom is bonded to three alkyl/aryl groups.", neetFrequency: 3 },
        { question: "The most basic amine in aqueous solution among the following is:", options: ["A. Ammonia", "B. Aniline", "C. Diethylamine", "D. Triethylamine"], answer: "C. Diethylamine", explanation: "For ethyl groups in aqueous solution, the order of basicity is 2° > 3° > 1° > NH₃ > Aniline. Diethylamine is a secondary amine.", neetFrequency: 5 },
        { question: "The carbylamine test is given by:", options: ["A. Primary amines only", "B. Secondary amines only", "C. Tertiary amines only", "D. All amines"], answer: "A. Primary amines only", explanation: "Only primary amines react with chloroform and KOH to form foul-smelling isocyanides.", neetFrequency: 4 },
        { question: "Aniline reacts with nitrous acid at low temperature to form:", options: ["A. Phenol", "B. Nitrobenzene", "C. Benzenediazonium chloride", "D. Benzene"], answer: "C. Benzenediazonium chloride", explanation: "This reaction, called diazotization, is the standard method for preparing diazonium salts.", neetFrequency: 4 },
        { question: "The reaction of aniline with bromine water gives:", options: ["A. o-Bromoaniline", "B. p-Bromoaniline", "C. A mixture of o- and p-bromoaniline", "D. 2,4,6-Tribromoaniline"], answer: "D. 2,4,6-Tribromoaniline", explanation: "The -NH₂ group is a very strong activating group, and the reaction with bromine water is so vigorous that it leads to substitution at all available ortho and para positions.", neetFrequency: 3 },
        { question: "The Hoffmann bromamide degradation reaction is used for the preparation of:", options: ["A. Amines from amides with one carbon less", "B. Amides from amines", "C. Alcohols from amines", "D. Amines from amides with the same number of carbons"], answer: "A. Amines from amides with one carbon less", explanation: "This is a degradation reaction where the carbonyl group of the amide is removed.", neetFrequency: 4 },
        { question: "Which of the following is the weakest base?", options: ["A. Aniline", "B. Cyclohexylamine", "C. Ammonia", "D. Methylamine"], answer: "A. Aniline", explanation: "The lone pair on aniline's nitrogen is involved in resonance with the benzene ring, making it much less available for donation.", neetFrequency: 5 },
        { question: "The reagent used to distinguish primary, secondary, and tertiary amines is:", options: ["A. Tollen's reagent", "B. Fehling's solution", "C. Benzenesulphonyl chloride", "D. Grignard reagent"], answer: "C. Benzenesulphonyl chloride", explanation: "This is Hinsberg's reagent, which reacts differently with 1°, 2°, and 3° amines.", neetFrequency: 3 },
        { question: "Gabriel phthalimide synthesis is used for the preparation of:", options: ["A. Primary aromatic amines", "B. Secondary amines", "C. Tertiary amines", "D. Primary aliphatic amines"], answer: "D. Primary aliphatic amines", explanation: "It cannot be used for aromatic amines because aryl halides do not undergo nucleophilic substitution with the phthalimide anion.", neetFrequency: 4 },
        { question: "The reaction of benzenediazonium chloride with CuCl/HCl to form chlorobenzene is known as:", options: ["A. Gattermann reaction", "B. Sandmeyer reaction", "C. Williamson synthesis", "D. Wurtz-Fittig reaction"], answer: "B. Sandmeyer reaction", explanation: "The Sandmeyer reaction uses a cuprous halide (CuX) to replace the diazonium group.", neetFrequency: 4 },
        { question: "Aniline is purified by:", options: ["A. Simple distillation", "B. Steam distillation", "C. Fractional distillation", "D. Sublimation"], answer: "B. Steam distillation", explanation: "Aniline is immiscible with water but is steam volatile, making steam distillation a suitable method for its purification.", neetFrequency: 2 },
        { question: "The reaction of diazonium salts with phenols or anilines to form azo compounds is called:", options: ["A. Sandmeyer reaction", "B. Gattermann reaction", "C. Coupling reaction", "D. Carbylamine reaction"], answer: "C. Coupling reaction", explanation: "This reaction is the basis for the formation of azo dyes.", neetFrequency: 3 },
        { question: "The reduction of nitrobenzene in a strongly acidic medium gives:", options: ["A. Aniline", "B. P-aminophenol", "C. Nitrosobenzene", "D. Azoxybenzene"], answer: "B. P-aminophenol", explanation: "While reduction normally gives aniline, in a strongly acidic medium, a rearrangement occurs to form p-aminophenol.", neetFrequency: 2 },
        { question: "The basic character of amines is due to:", options: ["A. The presence of a nitrogen atom", "B. The presence of a lone pair on nitrogen", "C. The presence of hydrogen atoms", "D. Their high molecular weight"], answer: "B. The presence of a lone pair on nitrogen", explanation: "The lone pair of electrons on the nitrogen atom can be donated to a proton, which is the definition of a Lewis base.", neetFrequency: 1 },
        { question: "Which of the following will not undergo diazotization?", options: ["A. Aniline", "B. p-Toluidine", "C. N-methylaniline", "D. p-Nitroaniline"], answer: "C. N-methylaniline", explanation: "Diazotization is a reaction of primary aromatic amines. N-methylaniline is a secondary amine.", neetFrequency: 3 },
        { question: "In the reaction: C₆H₅NH₂ + H₂SO₄(conc.) → X. X is:", options: ["A. Anilinium hydrogen sulphate", "B. Sulphanilic acid", "C. Orthanilic acid", "D. No reaction"], answer: "A. Anilinium hydrogen sulphate", explanation: "Aniline, being a base, reacts with a strong acid like sulfuric acid to form a salt, anilinium hydrogen sulphate. Further heating is required to form sulphanilic acid.", neetFrequency: 2 },
        { question: "Which of the following is used as a mild reducing agent for the deamination of diazonium salts?", options: ["A. H₃PO₂", "B. LiAlH₄", "C. NaBH₄", "D. Sn/HCl"], answer: "A. H₃PO₂", explanation: "Hypophosphorous acid (H₃PO₂) or ethanol is used to replace the diazonium group with a hydrogen atom.", neetFrequency: 3 },
        { question: "The hybridization of nitrogen in amines is:", options: ["A. sp", "B. sp²", "C. sp³", "D. dsp²"], answer: "C. sp³", explanation: "Similar to ammonia, the nitrogen in amines has three bond pairs and one lone pair, leading to sp³ hybridization and a pyramidal geometry.", neetFrequency: 2 },
        { question: "Which gas is evolved when ethylamine reacts with nitrous acid?", options: ["A. H₂", "B. N₂", "C. O₂", "D. NH₃"], answer: "B. N₂", explanation: "Primary aliphatic amines react with nitrous acid to form an unstable diazonium salt which decomposes to release nitrogen gas.", neetFrequency: 4 },
        { question: "The final product C in the reaction sequence: C₆H₅NO₂ --(Fe/HCl)--> A --(NaNO₂/HCl, 273K)--> B --(H₂O/warm)--> C, is:", options: ["A. Phenol", "B. Benzene", "C. Aniline", "D. Chlorobenzene"], answer: "A. Phenol", explanation: "A is aniline. B is benzenediazonium chloride. Warming the diazonium salt with water replaces the N₂⁺Cl⁻ group with -OH, forming phenol.", neetFrequency: 5 },
        { question: "The order of basicity of amines in the gaseous phase is:", options: ["A. 1° > 2° > 3°", "B. 3° > 2° > 1°", "C. 2° > 1° > 3°", "D. 2° > 3° > 1°"], answer: "B. 3° > 2° > 1°", explanation: "In the gaseous phase, only the electron-donating inductive effect matters. The more alkyl groups, the stronger the base.", neetFrequency: 3 },
        { question: "Which of the following is a quaternary ammonium salt?", options: ["A. (CH₃)₂NH₂⁺Cl⁻", "B. (CH₃)₃N", "C. (CH₃)₄N⁺Cl⁻", "D. CH₃NH₃⁺Cl⁻"], answer: "C. (CH₃)₄N⁺Cl⁻", explanation: "A quaternary ammonium salt has a nitrogen atom bonded to four alkyl/aryl groups, giving it a positive charge.", neetFrequency: 1 },
        { question: "Aniline on acetylation gives:", options: ["A. N-acetylaniline", "B. o-aminoacetophenone", "C. p-aminoacetophenone", "D. Benzamide"], answer: "A. N-acetylaniline", explanation: "Acetylation occurs at the nitrogen atom of the amino group, forming an amide known as acetanilide or N-acetylaniline.", neetFrequency: 3 },
        { question: "The boiling points of amines are lower than those of corresponding alcohols because:", options: ["A. Nitrogen is less electronegative than oxygen", "B. Hydrogen bonds in amines are weaker than in alcohols", "C. Amines have lower molecular weight", "D. Both A and B"], answer: "D. Both A and B", explanation: "Since nitrogen is less electronegative than oxygen, the N-H bond is less polar than the O-H bond, leading to weaker hydrogen bonds and thus lower boiling points.", neetFrequency: 2 },
        { question: "Aniline does not undergo Friedel-Crafts reaction because:", options: ["A. Aniline is a deactivating group", "B. Aniline is a meta-directing group", "C. Aniline forms a salt with the AlCl₃ catalyst", "D. Aniline is a liquid"], answer: "C. Aniline forms a salt with the AlCl₃ catalyst", explanation: "Aniline is a Lewis base and reacts with the Lewis acid catalyst AlCl₃ to form a salt. This deactivates the ring and prevents the reaction.", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "Aniline is a weaker base than ammonia.", reason: "The lone pair of electrons on the nitrogen atom in aniline is delocalized into the benzene ring.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation for the decreased basicity of aniline.", neetFrequency: 5 },
        { assertion: "Gabriel synthesis is used for the preparation of primary aromatic amines.", reason: "Aryl halides do not undergo nucleophilic substitution with the anion formed by phthalimide.", answer: "D", explanation: "The assertion is false; Gabriel synthesis cannot be used for primary aromatic amines. The reason is a true statement and correctly explains why the assertion is false.", neetFrequency: 4 },
        { assertion: "The order of basicity of amines in aqueous solution is 2° > 1° > 3° for methyl amines.", reason: "The basicity is affected by a combination of inductive effect, solvation effect, and steric hindrance.", answer: "A", explanation: "Assertion is a known experimental fact. The reason correctly lists the three factors whose interplay determines the order of basicity in aqueous solution.", neetFrequency: 3 },
        { assertion: "Benzenediazonium chloride is stable at low temperatures (0-5°C).", reason: "The delocalization of charge into the benzene ring provides some stability to the diazonium ion.", answer: "B", explanation: "Both statements are true. The diazonium salt is stable enough to be used as an intermediate at low temperatures. Resonance does contribute to its stability compared to an aliphatic diazonium ion. However, the primary reason it's only stable at low temperatures is its overall reactive nature, so the reason is not a complete explanation of the assertion which includes temperature.", neetFrequency: 2 },
        { assertion: "Tertiary amines do not give the carbylamine test.", reason: "Tertiary amines do not have a hydrogen atom attached to the nitrogen.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. The mechanism of the carbylamine reaction requires a hydrogen atom on the nitrogen to be removed.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Carbylamine Test", "(b) Hinsberg's Test", "(c) Hoffmann Bromamide", "(d) Sandmeyer Reaction"], column2: ["(p) Amide to amine", "(q) Distinguishing 1°, 2°, 3° amines", "(r) Test for primary amine", "(s) Diazonium salt to halobenzene"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching name reactions/tests with their purpose or transformation." },
        { column1: ["(a) Weakest Base", "(b) Strongest Base (aqueous, ethyl)", "(c) Universal Gate", "(d) Azo Dye"], column2: ["(p) Orange color", "(q) Aniline", "(r) Diethylamine", "(s) NAND gate"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching concepts with their correct examples." },
        { column1: ["(a) Primary Amine", "(b) Secondary Amine", "(c) Tertiary Amine", "(d) Diazonium Salt"], column2: ["(p) -N(R)₂", "(q) -NH₂", "(r) -N₂⁺Cl⁻", "(s) -NHR"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching the class of compound with its general functional group structure." },
        { column1: ["(a) Gabriel Synthesis", "(b) Reduction of Nitriles", "(c) Ammonolysis", "(d) Hoffmann Degradation"], column2: ["(p) Step-down reaction (C loss)", "(q) Mixture of amines", "(r) Forms only primary amines", "(s) Uses LiAlH₄"], answer: "a-r, b-r,s; c-q; d-p", explanation: "Matching preparation methods with their key features. Both Gabriel synthesis and reduction of nitriles give primary amines." },
        { column1: ["(a) Electrophile in nitration of aniline", "(b) Electrophile in coupling reaction", "(c) Reagent for carbylamine test", "(d) Reagent for Hinsberg test"], column2: ["(p) Benzenediazonium ion", "(q) Benzenesulphonyl chloride", "(r) Dichlorocarbene", "(s) Nitronium ion (from H₂SO₄+HNO₃)"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching reactions with their active electrophiles or key reagents." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "R-NH₂ + CHCl₃ + 3KOH → R-NC + 3KCl + 3H₂O",
                description: "Carbylamine Reaction (Isocyanide Test)",
                descriptionTamil: "கார்பைலமீன் வினை (ஐசோசயனைடு சோதனை)"
            },
            {
                formula: "Ar-N₂⁺X⁻",
                description: "General formula for an Aryl Diazonium Salt",
                descriptionTamil: "அரைல் டயசோனியம் உப்பின் பொதுவான வாய்ப்பாடு"
            },
            {
                formula: "\\text{Basicity (aq, C₂H₅): } 2^\\circ > 3^\\circ > 1^\\circ",
                description: "Order of basicity for ethyl amines in water.",
                descriptionTamil: "நீரில் எத்தில் அமீன்களின் காரத்தன்மை வரிசை."
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The basicity of amines is a key property governed by inductive effects, resonance, and solvation.",
        "Primary amines can be identified using the carbylamine test.",
        "Diazonium salts are highly useful synthetic intermediates for preparing a variety of aromatic compounds.",
        "Reactions like Hoffmann bromamide are 'step-down' reactions, which decrease the number of carbon atoms in the chain."
    ],
    mnemonics: [
        { text: "Remember Sandmeyer's reagents: 'Cu in the Sand'. Sandmeyer uses Copper(I) salts (Cu₂Cl₂, Cu₂Br₂, CuCN).", tamil: "சாண்ட்மேயர் கரணிகளை நினைவில் கொள்க: 'மணலில் செம்பு'. சாண்ட்மேயர் காப்பர்(I) உப்புகளைப் (Cu₂Cl₂, Cu₂Br₂, CuCN) பயன்படுத்துகிறது." }
    ],
    neetTips: [
        { text: "The comparison of basicity of amines is one of the most important conceptual topics. Make sure you understand the difference between the order in the gaseous phase and the aqueous phase.", tamil: "அமீன்களின் காரத்தன்மையை ஒப்பிடுவது மிக முக்கியமான கருத்தியல் தலைப்புகளில் ஒன்றாகும். வாயு நிலை மற்றும் நீர்க்கரைசல் நிலையில் உள்ள வரிசைக்கு இடையேயான வேறுபாட்டை நீங்கள் புரிந்துகொண்டுள்ளீர்கள் என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்." },
        { text: "Master the reactions of diazonium salts. Questions often involve multi-step synthesis starting from aniline.", tamil: "டயசோனியம் உப்புகளின் வினைகளை நன்கு கற்றுக் கொள்ளுங்கள். கேள்விகள் பெரும்பாலும் அனிலினில் தொடங்கி பல-படி தொகுப்புகளை உள்ளடக்கியிருக்கும்." }
    ],
    studentTip: {
        english: "Create a flowchart for distinguishing between 1°, 2°, and 3° amines using the Hinsberg test and the reaction with nitrous acid. This will help you organize the information.",
        tamil: "ஹின்ஸ்பெர்க் சோதனை மற்றும் நைட்ரஸ் அமிலத்துடன் வினை ஆகியவற்றைப் பயன்படுத்தி 1°, 2°, மற்றும் 3° அமீன்களை வேறுபடுத்துவதற்கான ஒரு பாய்வு வரைபடத்தை உருவாக்கவும். இது தகவலை ஒழுங்கமைக்க உதவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why aniline does not undergo Friedel-Crafts reaction. What does the Lewis acid catalyst do to the aniline molecule?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: அனிலின் ஏன் பிரீடல்-கிராஃப்ட்ஸ் வினைக்கு உட்படாது? லூயிஸ் அமில வினைவேகமாற்றி அனிலின் மூலக்கூறுக்கு என்ன செய்கிறது?"
    },
    nextChapter: {
        title: "Biomolecules",
        titleTamil: "உயிர் மூலக்கூறுகள்"
    },
    validationReport: []
}
