
import type { NeetModule } from '@/lib/types';

export const someBasicPrinciplesOfOrganicChemistry: NeetModule = {
    id: 'neet-chemistry-some-basic-principles-of-organic-chemistry',
    title: 'Chemistry - Some Basic Principles of Organic Chemistry (கரிம வேதியியல் - சில அடிப்படைக் கோட்பாடுகள்)',
    chapter: 'Some Basic Principles of Organic Chemistry',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the tetravalency of carbon and the shapes of simple organic molecules (hybridization).",
        "Master the IUPAC system for naming organic compounds.",
        "Classify organic compounds based on their functional groups.",
        "Define and differentiate between different types of isomerism (structural and stereoisomerism).",
        "Understand the concepts of electrophiles and nucleophiles, and the movement of electrons in organic reactions (electron displacement effects).",
        "Explain the inductive effect, electromeric effect, resonance, and hyperconjugation.",
        "Describe different types of organic reactions (substitution, addition, elimination, rearrangement)."
    ],
    prerequisites: [
        "Chemical Bonding and Molecular Structure.",
        "Basic understanding of chemical reactions."
    ],
    conceptOverview: "This chapter lays the groundwork for all of organic chemistry. It introduces the unique properties of carbon that allow it to form a vast array of compounds. We will learn the systematic language of organic chemistry—the IUPAC nomenclature—which allows us to name any organic compound unambiguously. The chapter then delves into the electronic effects that govern the reactivity of organic molecules, such as the inductive effect and resonance. Understanding these principles is crucial for predicting how and why organic reactions occur. Finally, we classify the main types of organic reactions, setting the stage for studying specific functional groups in subsequent chapters.",
    tamilConnection: "கரிம வேதியியல் என்பது கார்பனின் உலகம். நாம் உண்ணும் உணவு முதல், அணியும் உடை வரை அனைத்தும் கரிமச் சேர்மங்களால் ஆனவை. இந்த அத்தியாயம், இந்த பரந்த உலகத்திற்கான ஒரு வரைபடத்தையும், அதன் மொழியையும் (பெயரிடுதல்) நமக்கு அளிக்கிறது.",
    culturalContext: "The different aromas of spices used in Tamil cuisine, like cloves (eugenol), cardamom (eucalyptol), and cinnamon (cinnamaldehyde), are due to different organic molecules with specific functional groups. The IUPAC nomenclature system, learned in this chapter, provides a universal way to name these complex structures, allowing scientists worldwide to communicate precisely about them.",
    syllabusMapping: [
        {
            topic: "Basic Principles of Organic Chemistry",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 11 & 12",
            ncertReference: "Class 11 Chemistry - Part 2, Chapter 12: Organic Chemistry – Some Basic Principles and Techniques",
            notes: "Extremely important foundation chapter. IUPAC naming, isomerism, and electronic effects (especially resonance and hyperconjugation to compare stability of carbocations/free radicals) are very high-yield topics.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapters 11 & 12 maps to NEET Chemistry Unit 20'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. IUPAC Nomenclature (IUPAC பெயரிடுதல்)',
                tamil: '1. IUPAC பெயரிடுதல்'
            },
            content: [
                {
                    english: `A systematic method of naming organic compounds. The name generally has three parts: **Word Root**, **Suffix**, and **Prefix**.
*   **Word Root (வேர்ச்சொல்):** Indicates the number of carbon atoms in the longest continuous chain (the parent chain). (e.g., Meth- for 1 C, Eth- for 2 C, Prop- for 3 C).
*   **Suffix (பின்ஒட்டு):**
    *   *Primary Suffix:* Indicates saturation (ane for C-C, ene for C=C, yne for C≡C).
    *   *Secondary Suffix:* Indicates the principal functional group (e.g., -ol for alcohol, -oic acid for carboxylic acid).
*   **Prefix (முன்ஒட்டு):** Indicates substituent groups (e.g., methyl-, chloro-) or side chains.`,
                    tamil: `கரிமச் சேர்மங்களுக்குப் பெயரிடுவதற்கான ஒரு முறையான முறை. பொதுவாக ஒரு பெயரில் மூன்று பகுதிகள் உள்ளன: **வேர்ச்சொல்**, **பின்ஒட்டு**, மற்றும் **முன்ஒட்டு**.
*   **வேர்ச்சொல்:** மிக நீண்ட தொடர்ச்சியான சங்கிலியில் (தாய்ச் சங்கிலி) உள்ள கார்பன் அணுக்களின் எண்ணிக்கையைக் குறிக்கிறது. (எ.கா., மெத்- 1 C க்கு, எத்- 2 C க்கு, புரோப்- 3 C க்கு).
*   **பின்ஒட்டு:**
    *   *முதன்மை பின்ஒட்டு:* செறிவூட்டலைக் குறிக்கிறது (C-C க்கு ஏன், C=C க்கு ஈன், C≡C க்கு ஐன்).
    *   *இரண்டாம் நிலை பின்ஒட்டு:* முதன்மை வினைசெயல் தொகுதியைக் குறிக்கிறது (எ.கா., ஆல்கஹாலுக்கு -ஆல், கார்பாக்சிலிக் அமிலத்திற்கு -ஆயிக் அமிலம்).
*   **முன்ஒட்டு:** பதிலீட்டுக் குழுக்கள் (எ.கா., மெத்தில்-, குளோரோ-) அல்லது பக்கச் சங்கிலிகளைக் குறிக்கிறது.`
                }
            ]
        },
        {
            heading: {
                english: '2. Isomerism (மாற்றியம்)',
                tamil: '2. மாற்றியம்'
            },
            content: [
                {
                    english: `Compounds having the same molecular formula but different physical and chemical properties are called isomers.
*   **Structural Isomerism (அமைப்பு மாற்றியம்):** Different connectivity of atoms.
    *   *Chain Isomerism (சங்கிலித் தொடர் மாற்றியம்):* Different carbon skeleton (e.g., butane and isobutane).
    *   *Position Isomerism (இட மாற்றியம்):* Different position of substituent or functional group (e.g., propan-1-ol and propan-2-ol).
    *   *Functional Isomerism (வினைசெயல் தொகுதி மாற்றியம்):* Different functional groups (e.g., ethanol (C₂H₅OH) and methoxymethane (CH₃OCH₃)).
    *   *Metamerism (மெட்டாமெரிசம்):* Different alkyl groups on either side of a functional group (e.g., diethyl ether and methyl propyl ether).
*   **Stereoisomerism (வெளிப்புற அமைப்பு மாற்றியம்):** Same connectivity but different spatial arrangement of atoms.
    *   *Geometrical Isomerism (வடிவ மாற்றியம்):* Restricted rotation around a bond (e.g., cis-trans isomers in alkenes).
    *   *Optical Isomerism (ஒளி சுழற்சி மாற்றியம்):* Non-superimposable mirror images (enantiomers), occurs in chiral molecules.`,
                    tamil: `ஒரே மூலக்கூறு வாய்ப்பாட்டையும் ஆனால் வெவ்வேறு இயற்பியல் மற்றும் வேதியியல் பண்புகளையும் கொண்ட சேர்மங்கள் மாற்றியங்கள் எனப்படும்.
*   **அமைப்பு மாற்றியம்:** அணுக்களின் வெவ்வேறு இணைப்பு.
    *   *சங்கிலித் தொடர் மாற்றியம்:* வெவ்வேறு கார்பன் கூடு (எ.கா., பியூட்டேன் மற்றும் ஐசோபியூட்டேன்).
    *   *இட மாற்றியம்:* பதிலீட்டு அல்லது வினைசெயல் தொகுதியின் வெவ்வேறு நிலை (எ.கா., புரோப்பேன்-1-ஆல் மற்றும் புரோப்பேன்-2-ஆல்).
    *   *வினைசெயல் தொகுதி மாற்றியம்:* வெவ்வேறு வினைசெயல் தொகுதிகள் (எ.கா., எத்தனால் (C₂H₅OH) மற்றும் மெத்தாக்ஸிமீத்தேன் (CH₃OCH₃)).
    *   *மெட்டாமெரிசம்:* ஒரு வினைசெயல் தொகுதியின் இருபுறமும் வெவ்வேறு அல்கைல் குழுக்கள் (எ.கா., டைஎத்தில் ஈதர் மற்றும் மெத்தில் புரோப்பைல் ஈதர்).
*   **வெளிப்புற அமைப்பு மாற்றியம்:** ஒரே இணைப்பு ஆனால் அணுக்களின் வெவ்வேறு இட அமைப்பு.
    *   *வடிவ மாற்றியம்:* ஒரு பிணைப்பைச் சுற்றி கட்டுப்படுத்தப்பட்ட சுழற்சி (எ.கா., ஆல்கீன்களில் சிஸ்-டிரான்ஸ் மாற்றியங்கள்).
    *   *ஒளி சுழற்சி மாற்றியம்:* ஒன்றின் மீது ஒன்று பொருந்தாத கண்ணாடிப் பிம்பங்கள் (எதிர் ஒளி மாற்றியங்கள்), கைரல் மூலக்கூறுகளில் நிகழ்கிறது.`
                }
            ]
        },
        {
            heading: {
                english: '3. Electronic Displacement Effects (எலக்ட்ரான் இடப்பெயர்ச்சி விளைவுகள்)',
                tamil: '3. எலக்ட்ரான் இடப்பெயர்ச்சி விளைவுகள்'
            },
            content: [
                {
                    english: `**Inductive Effect (-I, +I) (தூண்டல் விளைவு):** Permanent displacement of sigma (σ) electrons along a carbon chain due to the presence of an electron-withdrawing or electron-donating group. It's a weak effect that decreases with distance.
*   **-I effect:** Caused by electron-withdrawing groups (e.g., -NO₂, -CN, -Halogens).
*   **+I effect:** Caused by electron-donating groups (e.g., alkyl groups like -CH₃, -C₂H₅).`,
                    tamil: `**தூண்டல் விளைவு (-I, +I):** எலக்ட்ரானை ஈர்க்கும் அல்லது வழங்கும் ஒரு குழு இருப்பதால், கார்பன் சங்கிலி வழியே சிக்மா (σ) எலக்ட்ரான்களின் நிரந்தர இடப்பெயர்ச்சி. இது தூரத்துடன் குறையும் ஒரு பலவீனமான விளைவு.
*   **-I விளைவு:** எலக்ட்ரானை ஈர்க்கும் குழுக்களால் ஏற்படுகிறது (எ.கா., -NO₂, -CN, -ஹாலஜன்கள்).
*   **+I விளைவு:** எலக்ட்ரானை வழங்கும் குழுக்களால் ஏற்படுகிறது (எ.கா., -CH₃, -C₂H₅ போன்ற அல்கைல் குழுக்கள்).`
                },
                {
                    english: `**Resonance or Mesomeric Effect (R/M Effect) (உடனிசைவு அல்லது மீசோமெரிக் விளைவு):** Permanent delocalization of pi (π) electrons in a conjugated system. This leads to resonance structures.
*   **+R effect:** Group donates electrons to the conjugated system (e.g., -OH, -NH₂, -OR).
*   **-R effect:** Group withdraws electrons from the conjugated system (e.g., -NO₂, -CHO, -COOH).`,
                    tamil: `**உடனிசைவு அல்லது மீசோமெரிக் விளைவு (R/M விளைவு):** ஒரு இணைந்த அமைப்பில் பை (π) எலக்ட்ரான்களின் நிரந்தர இடமாற்றம். இது உடனிசைவு அமைப்புகளுக்கு வழிவகுக்கிறது.
*   **+R விளைவு:** குழு இணைந்த அமைப்புக்கு எலக்ட்ரான்களை வழங்குகிறது (எ.கா., -OH, -NH₂, -OR).
*   **-R விளைவு:** குழு இணைந்த அமைப்பிலிருந்து எலக்ட்ரான்களை ஈர்க்கிறது (எ.கா., -NO₂, -CHO, -COOH).`
                },
                {
                    english: `**Hyperconjugation (no-bond resonance) (மீள்இணையுதல்):** Delocalization of sigma (σ) electrons of a C-H bond into an adjacent empty or partially filled p-orbital. It is used to explain the stability of carbocations, free radicals, and alkenes.`,
                    tamil: `**மீள்இணையுதல் (பிணைப்பில்லா உடனிசைவு):** ஒரு C-H பிணைப்பின் சிக்மா (σ) எலக்ட்ரான்களை அருகிலுள்ள காலியான அல்லது பகுதி நிரப்பப்பட்ட p-ஆர்பிட்டாலுக்குள் இடமாற்றம் செய்வது. இது கார்போகேட்டயன்கள், தனி உறுப்புகள் மற்றும் ஆல்கீன்களின் நிலைப்புத்தன்மையை விளக்கப் பயன்படுகிறது.`
                }
            ]
        },
        {
            heading: {
                english: '4. Reaction Intermediates (வினை இடைநிலைகள்)',
                tamil: '4. வினை இடைநிலைகள்'
            },
            content: [
                {
                    english: `Highly reactive, short-lived species formed during a reaction.
*   **Carbocation (கார்போகேட்டயன்):** Positively charged carbon ($C^+$), sp² hybridized, trigonal planar. Stability order: 3° > 2° > 1°.
*   **Carbanion (கார்பேனயன்):** Negatively charged carbon ($C^-$), sp³ hybridized, pyramidal. Stability order: 1° > 2° > 3°.
*   **Free Radical (தனி உறுப்பு):** Neutral carbon with an unpaired electron ($C^•$), sp² hybridized, planar. Stability order: 3° > 2° > 1°.`,
                    tamil: `ஒரு வினையின் போது உருவாகும் அதிக வினைத்திறன் கொண்ட, குறுகிய ஆயுள் கொண்ட வகைகள்.
*   **கார்போகேட்டயன்:** நேர் மின்னூட்டம் கொண்ட கார்பன் ($C^+$), sp² இனக்கலப்பு, முக்கோணத் தளம். நிலைப்புத்தன்மை வரிசை: 3° > 2° > 1°.
*   **கார்பேனயன்:** எதிர் மின்னூட்டம் கொண்ட கார்பன் ($C^-$), sp³ இனக்கலப்பு, பிரமிடு. நிலைப்புத்தன்மை வரிசை: 1° > 2° > 3°.
*   **தனி உறுப்பு:** இணைசேரா எலக்ட்ரானுடன் கூடிய நடுநிலை கார்பன் ($C^•$), sp² இனக்கலப்பு, தளம். நிலைப்புத்தன்மை வரிசை: 3° > 2° > 1°.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: IUPAC Nomenclature",
            titleTamil: "நீட் நிலை: IUPAC பெயரிடுதல்",
            difficulty: 'Medium',
            problem: "Write the IUPAC name for the compound: CH₃-CH(OH)-CH₂-CH(CH₃)-CHO",
            problemTamil: "CH₃-CH(OH)-CH₂-CH(CH₃)-CHO என்ற சேர்மத்தின் IUPAC பெயரை எழுதுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the principal functional group. Here, it is the aldehyde (-CHO) group, which gets the highest priority. This carbon is C1.",
                    explanationTamil: "முதன்மை வினைசெயல் தொகுதியை அடையாளம் காணவும். இங்கு, இது ஆல்டிஹைடு (-CHO) தொகுதி ஆகும், இது மிக உயர்ந்த முன்னுரிமையைப் பெறுகிறது. இந்த கார்பன் C1 ஆகும்."
                },
                {
                    step: 2,
                    explanation: "Find the longest carbon chain containing the principal functional group. The chain is 5 carbons long (pent-).",
                    explanationTamil: "முதன்மை வினைசெயல் தொகுதியைக் கொண்ட மிக நீண்ட கார்பன் சங்கிலியைக் கண்டறியவும். சங்கிலி 5 கார்பன்கள் நீளமானது (பென்ட்-)."
                },
                {
                    step: 3,
                    explanation: "Number the chain starting from the principal functional group. C1 is the aldehyde carbon.",
                    explanationTamil: "முதன்மை வினைசெயல் தொகுதியிலிருந்து சங்கிலியை எண்ணிடவும். C1 என்பது ஆல்டிஹைடு கார்பன் ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Identify the substituents and their positions. There is a methyl group (-CH₃) at C2 and a hydroxyl group (-OH) at C4. The hydroxyl group is treated as a substituent ('hydroxy') because the aldehyde is the principal group.",
                    explanationTamil: "பதிலீடுகள் மற்றும் அவற்றின் நிலைகளை அடையாளம் காணவும். C2 இல் ஒரு மெத்தில் குழுவும் (-CH₃) மற்றும் C4 இல் ஒரு ஹைட்ராக்சில் குழுவும் (-OH) உள்ளது. ஆல்டிஹைடு முதன்மை குழு என்பதால் ஹைட்ராக்சில் குழு ஒரு பதிலீடாக ('ஹைட்ராக்ஸி') கருதப்படுகிறது."
                },
                {
                    step: 5,
                    explanation: "Assemble the name alphabetically: Prefix(es) + Word Root + Primary Suffix + Secondary Suffix. (4-hydroxy, 2-methyl)",
                    explanationTamil: "பெயரை அகர வரிசைப்படி அடுக்கவும்: முன்ஒட்டு(கள்) + வேர்ச்சொல் + முதன்மை பின்ஒட்டு + இரண்டாம் நிலை பின்ஒட்டு. (4-ஹைட்ராக்ஸி, 2-மெத்தில்)"
                },
                {
                    step: 6,
                    explanation: "The final name is 4-Hydroxy-2-methylpentanal.",
                    explanationTamil: "இறுதிப் பெயர் 4-ஹைட்ராக்ஸி-2-மெத்தில்பென்டனால் ஆகும்."
                }
            ],
            neetHack: "Remember the priority order for functional groups. Carboxylic acids > Aldehydes > Ketones > Alcohols > Amines. The highest priority group determines the suffix.",
            neetHackTamil: "வினைசெயல் தொகுதிகளுக்கான முன்னுரிமை வரிசையை நினைவில் கொள்க. கார்பாக்சிலிக் அமிலங்கள் > ஆல்டிஹைடுகள் > கீட்டோன்கள் > ஆல்கஹால்கள் > அமீன்கள். மிக உயர்ந்த முன்னுரிமை கொண்ட குழு பின்ஒட்டைத் தீர்மானிக்கிறது."
        },
        {
            title: "JEE Level: Stability of Carbocations",
            titleTamil: "ஜே.இ.இ நிலை: கார்போகேட்டயன்களின் நிலைப்புத்தன்மை",
            difficulty: 'Medium',
            problem: "Arrange the following carbocations in increasing order of stability: (CH₃)₃C⁺, CH₃CH₂⁺, (CH₃)₂CH⁺, CH₃⁺.",
            problemTamil: "பின்வரும் கார்போகேட்டயன்களை அவற்றின் நிலைப்புத்தன்மை ஏறுவரிசையில் அடுக்கவும்: (CH₃)₃C⁺, CH₃CH₂⁺, (CH₃)₂CH⁺, CH₃⁺.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The stability of carbocations is primarily explained by two effects: the inductive effect (+I) and hyperconjugation.",
                    explanationTamil: "கார்போகேட்டயன்களின் நிலைப்புத்தன்மை முக்கியமாக இரண்டு விளைவுகளால் விளக்கப்படுகிறது: தூண்டல் விளைவு (+I) மற்றும் மீள்இணையுதல்."
                },
                {
                    step: 2,
                    explanation: "Alkyl groups (-CH₃, -C₂H₅) are electron-donating (+I effect). They push electron density towards the positive carbon, reducing its charge and increasing its stability.",
                    explanationTamil: "அல்கைல் குழுக்கள் (-CH₃, -C₂H₅) எலக்ட்ரான் வழங்கும் (+I விளைவு) பண்புடையவை. அவை எலக்ட்ரான் அடர்த்தியை நேர்மறை கார்பனை நோக்கித் தள்ளி, அதன் மின்னூட்டத்தைக் குறைத்து, அதன் நிலைப்புத்தன்மையை அதிகரிக்கின்றன."
                },
                {
                    step: 3,
                    explanation: "Hyperconjugation involves the delocalization of σ-electrons from the C-H bonds of the alkyl groups into the empty p-orbital of the carbocation. The more alkyl groups attached, the more hyperconjugation structures are possible, leading to greater stability.",
                    explanationTamil: "மீள்இணையுதல் என்பது அல்கைல் குழுக்களின் C-H பிணைப்புகளிலிருந்து σ-எலக்ட்ரான்களை கார்போகேட்டயனின் காலியான p-ஆர்பிட்டாலுக்குள் இடமாற்றம் செய்வதை உள்ளடக்கியது. அதிக அல்கைல் குழுக்கள் இணைக்கப்பட்டிருந்தால், அதிக மீள்இணையுதல் அமைப்புகள் சாத்தியமாகும், இது அதிக நிலைப்புத்தன்மைக்கு வழிவகுக்கிறது."
                },
                {
                    step: 4,
                    explanation: "Analyze each carbocation: CH₃⁺ (0 alkyl groups, 0 hyperconjugation H's), CH₃CH₂⁺ (1°: 1 alkyl group, 3 hyperconjugation H's), (CH₃)₂CH⁺ (2°: 2 alkyl groups, 6 hyperconjugation H's), (CH₃)₃C⁺ (3°: 3 alkyl groups, 9 hyperconjugation H's).",
                    explanationTamil: "ஒவ்வொரு கார்போகேட்டயனையும் பகுப்பாய்வு செய்யவும்."
                },
                {
                    step: 5,
                    explanation: "Greater number of alkyl groups leads to greater stability due to both effects. Therefore, the order of stability is: 3° > 2° > 1° > methyl.",
                    explanationTamil: "அதிக எண்ணிக்கையிலான அல்கைல் குழுக்கள் இரண்டு விளைவுகளாலும் அதிக நிலைப்புத்தன்மைக்கு வழிவகுக்கின்றன. எனவே, நிலைப்புத்தன்மையின் வரிசை: 3° > 2° > 1° > மெத்தில்."
                },
                {
                    step: 6,
                    explanation: "The increasing order is: CH₃⁺ < CH₃CH₂⁺ < (CH₃)₂CH⁺ < (CH₃)₃C⁺.",
                    explanationTamil: "ஏறுவரிசை: CH₃⁺ < CH₃CH₂⁺ < (CH₃)₂CH⁺ < (CH₃)₃C⁺."
                }
            ],
            commonPitfall: "Confusing the stability order of carbocations (3°>2°>1°) with that of carbanions (1°>2°>3°). The electron-donating groups that stabilize carbocations will destabilize carbanions.",
            commonPitfallTamil: "கார்போகேட்டயன்களின் நிலைப்புத்தன்மை வரிசையை (3°>2°>1°) கார்பேனயன்களின் வரிசையுடன் (1°>2°>3°) குழப்பிக் கொள்ளுதல். கார்போகேட்டயன்களை நிலைப்படுத்தும் எலக்ட்ரான் வழங்கும் குழுக்கள் கார்பேனயன்களை நிலைப்புத்தன்மையற்றதாக்கும்."
        },
        {
            title: "NEET Level: Identifying Isomers",
            titleTamil: "நீட் நிலை: மாற்றியங்களை அடையாளம் காணுதல்",
            difficulty: "Easy",
            problem: "What is the relationship between pentan-1-ol and 3-methylbutan-1-ol?",
            problemTamil: "பென்டேன்-1-ஆல் மற்றும் 3-மெத்தில்பியூட்டேன்-1-ஆல் ஆகியவற்றுக்கு இடையேயான தொடர்பு என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "First, determine the molecular formula for both compounds.",
                    explanationTamil: "முதலில், இரண்டு சேர்மங்களுக்கும் மூலக்கூறு வாய்ப்பாட்டைக் கண்டறியவும்."
                },
                {
                    step: 2,
                    explanation: "Pentan-1-ol: 5 carbons in a straight chain, with an -OH group. Formula: C₅H₁₂O.",
                    explanationTamil: "பென்டேன்-1-ஆல்: ஒரு நேர் சங்கிலியில் 5 கார்பன்கள், ஒரு -OH தொகுதியுடன். வாய்ப்பாடு: C₅H₁₂O."
                },
                {
                    step: 3,
                    explanation: "3-methylbutan-1-ol: A 4-carbon chain (butane) with a methyl group at C3 and an -OH at C1. Total carbons = 4+1=5. Total hydrogens = 3(CH₃)+1(CH)+2(CH₂)+2(CH₂OH)+1(H) = 12. Formula: C₅H₁₂O.",
                    explanationTamil: "3-மெத்தில்பியூட்டேன்-1-ஆல்: C3 இல் ஒரு மெத்தில் குழுவும், C1 இல் ஒரு -OH தொகுதியும் கொண்ட ஒரு 4-கார்பன் சங்கிலி. மொத்த கார்பன்கள் = 5. மொத்த ஹைட்ரஜன்கள் = 12. வாய்ப்பாடு: C₅H₁₂O."
                },
                {
                    step: 4,
                    explanation: "Since both compounds have the same molecular formula (C₅H₁₂O) but different carbon skeletons (a straight 5-carbon chain vs. a branched 4-carbon chain), they are chain isomers.",
                    explanationTamil: "இரண்டு சேர்மங்களும் ஒரே மூலக்கூறு வாய்ப்பாட்டையும் (C₅H₁₂O) ஆனால் வெவ்வேறு கார்பன் கூடுகளையும் (நேரான 5-கார்பன் சங்கிலி vs. கிளைத்த 4-கார்பன் சங்கிலி) கொண்டிருப்பதால், அவை சங்கிலித் தொடர் மாற்றியங்கள் ஆகும்."
                }
            ]
        },
        {
            title: "JEE Level: Acidity and Resonance",
            titleTamil: "ஜே.இ.இ நிலை: அமிலத்தன்மை மற்றும் உடனிசைவு",
            difficulty: "Medium",
            problem: "Explain why phenol is more acidic than ethanol.",
            problemTamil: "எத்தனாலை விட ஃபீனால் ஏன் அதிக அமிலத்தன்மை கொண்டது என்பதை விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Acidity is related to the stability of the conjugate base formed after donating a proton (H⁺).",
                    explanationTamil: "அமிலத்தன்மை, ஒரு புரோட்டானை (H⁺) வழங்கிய பிறகு உருவாகும் இணை காரத்தின் நிலைப்புத்தன்மையுடன் தொடர்புடையது."
                },
                {
                    step: 2,
                    explanation: "When ethanol (C₂H₅OH) loses a proton, it forms the ethoxide ion (C₂H₅O⁻). The negative charge is localized on the oxygen atom.",
                    explanationTamil: "எத்தனால் (C₂H₅OH) ஒரு புரோட்டானை இழக்கும்போது, அது எத்தாக்சைடு அயனியை (C₂H₅O⁻) உருவாக்குகிறது. எதிர்மறை மின்னூட்டம் ஆக்ஸிஜன் அணுவில் நிலைநிறுத்தப்பட்டுள்ளது."
                },
                {
                    step: 3,
                    explanation: "When phenol (C₆H₅OH) loses a proton, it forms the phenoxide ion (C₆H₅O⁻).",
                    explanationTamil: "ஃபீனால் (C₆H₅OH) ஒரு புரோட்டானை இழக்கும்போது, அது ஃபீனாக்சைடு அயனியை (C₆H₅O⁻) உருவாக்குகிறது."
                },
                {
                    step: 4,
                    explanation: "The negative charge on the oxygen of the phenoxide ion is delocalized into the benzene ring through resonance. This spreads out the negative charge over the entire molecule.",
                    explanationTamil: "ஃபீனாக்சைடு அயனியின் ஆக்ஸிஜன் மீதான எதிர்மறை மின்னூட்டம் உடனிசைவு மூலம் பென்சீன் வளையத்திற்குள் இடமாற்றம் செய்யப்படுகிறது. இது எதிர்மறை மின்னூட்டத்தை மூலக்கூறு முழுவதும் பரப்புகிறது."
                },
                {
                    step: 5,
                    explanation: "Because the negative charge is delocalized and stabilized by resonance, the phenoxide ion is much more stable than the ethoxide ion. Therefore, phenol is more willing to donate a proton and is more acidic than ethanol.",
                    explanationTamil: "எதிர்மறை மின்னூட்டம் உடனிசைவால் இடமாற்றம் செய்யப்பட்டு நிலைப்படுத்தப்படுவதால், ஃபீனாக்சைடு அயனி எத்தாக்சைடு அயனியை விட மிகவும் நிலையானது. எனவே, ஃபீனால் ஒரு புரோட்டானை வழங்க அதிக விருப்பம் காட்டுகிறது மற்றும் எத்தனாலை விட அதிக அமிலத்தன்மை கொண்டது."
                }
            ],
            neetHack: "A key principle in organic chemistry: any factor that stabilizes the conjugate base will increase the acidity of the original compound. Resonance is a powerful stabilizing effect.",
            commonPitfall: "Confusing the +I effect of the ethyl group (which destabilizes the ethoxide ion) with the -R effect of the phenyl group (which stabilizes the phenoxide ion)."
        },
        {
            title: "NEET Level: Geometrical Isomerism",
            titleTamil: "நீட் நிலை: வடிவ மாற்றியம்",
            difficulty: "Easy",
            problem: "Which of the following compounds will exhibit geometrical (cis-trans) isomerism? (a) But-1-ene, (b) But-2-ene, (c) 2-Methylpropene, (d) Butane",
            problemTamil: "பின்வரும் சேர்மங்களில் எது வடிவ (சிஸ்-டிரான்ஸ்) மாற்றியத்தைக் காண்பிக்கும்? (a) பியூட்-1-ஈன், (b) பியூட்-2-ஈன், (c) 2-மெத்தில்புரோப்பீன், (d) பியூட்டேன்",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Geometrical isomerism occurs in alkenes when there is restricted rotation about the C=C double bond, and each carbon atom of the double bond is attached to two different groups.",
                    explanationTamil: "C=C இரட்டைப் பிணைப்பைச் சுற்றி கட்டுப்படுத்தப்பட்ட சுழற்சி இருக்கும்போதும், இரட்டைப் பிணைப்பின் ஒவ்வொரு கார்பன் அணுவும் இரண்டு வெவ்வேறு குழுக்களுடன் இணைக்கப்பட்டிருக்கும்போதும் ஆல்கீன்களில் வடிவ மாற்றியம் ஏற்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "Analyze But-1-ene (CH₂=CH-CH₂-CH₃). The first carbon is attached to two identical hydrogen atoms. So, no geometrical isomerism.",
                    explanationTamil: "பியூட்-1-ஈனை பகுப்பாய்வு செய்யவும் (CH₂=CH-CH₂-CH₃). முதல் கார்பன் இரண்டு ஒத்த ஹைட்ரஜன் அணுக்களுடன் இணைக்கப்பட்டுள்ளது. எனவே, வடிவ மாற்றியம் இல்லை."
                },
                {
                    step: 3,
                    explanation: "Analyze But-2-ene (CH₃-CH=CH-CH₃). The second carbon is attached to H and CH₃ (different). The third carbon is also attached to H and CH₃ (different). So, this compound will exhibit geometrical isomerism.",
                    explanationTamil: "பியூட்-2-ஈனை பகுப்பாய்வு செய்யவும் (CH₃-CH=CH-CH₃). இரண்டாவது கார்பன் H மற்றும் CH₃ (வெவ்வேறு) உடன் இணைக்கப்பட்டுள்ளது. மூன்றாவது கார்பனும் H மற்றும் CH₃ (வெவ்வேறு) உடன் இணைக்கப்பட்டுள்ளது. எனவே, இந்த சேர்மம் வடிவ மாற்றியத்தைக் காண்பிக்கும்."
                },
                {
                    step: 4,
                    explanation: "Analyze 2-Methylpropene (CH₂=C(CH₃)₂). The first carbon is attached to two identical H atoms, and the second carbon is attached to two identical CH₃ groups. So, no geometrical isomerism.",
                    explanationTamil: "2-மெத்தில்புரோப்பீனை பகுப்பாய்வு செய்யவும். முதல் கார்பன் இரண்டு ஒத்த H அணுக்களுடனும், இரண்டாவது கார்பன் இரண்டு ஒத்த CH₃ குழுக்களுடனும் இணைக்கப்பட்டுள்ளது. எனவே, வடிவ மாற்றியம் இல்லை."
                },
                 {
                    step: 5,
                    explanation: "Butane is an alkane and has free rotation about its single bonds, so it does not show geometrical isomerism.",
                    explanationTamil: "பியூட்டேன் ஒரு ஆல்கேன் மற்றும் அதன் ஒற்றைப் பிணைப்புகளைச் சுற்றி சுதந்திரமான சுழற்சி உள்ளது, எனவே அது வடிவ மாற்றியத்தைக் காட்டாது."
                }
            ]
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [],
    mnemonics: [],
    neetTips: [],
    studentTip: {
        english: "Organic chemistry is like building with LEGOs. Understand the basic blocks (functional groups) and the rules of connection (nomenclature, electronic effects), and you can build and understand any molecule.",
        tamil: "கரிம வேதியியல் லெகோவுடன் கட்டுவது போன்றது. அடிப்படைத் தொகுதிகள் (வினைசெயல் தொகுதிகள்) மற்றும் இணைப்பு விதிகள் (பெயரிடுதல், எலக்ட்ரான் விளைவுகள்) ஆகியவற்றைப் புரிந்து கொள்ளுங்கள், நீங்கள் எந்த மூலக்கூறையும் உருவாக்கலாம் மற்றும் புரிந்து கொள்ளலாம்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is the stability order for carbocations (3°>2°>1°) the exact opposite of the stability order for carbanions (1°>2°>3°)? Relate it to inductive effects.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: கார்போகேட்டயன்களுக்கான நிலைப்புத்தன்மை வரிசை (3°>2°>1°) கார்பேனயன்களுக்கான நிலைப்புத்தன்மை வரிசைக்கு (1°>2°>3°) ஏன் நேர் எதிராக உள்ளது? அதை தூண்டல் விளைவுகளுடன் தொடர்புபடுத்துங்கள்."
    },
    nextChapter: {
        title: "Hydrocarbons",
        titleTamil: "ஹைட்ரோகார்பன்கள்"
    },
    validationReport: []
};

    