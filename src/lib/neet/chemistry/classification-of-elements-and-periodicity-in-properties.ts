
import type { NeetModule } from '@/lib/types';

export const classificationOfElementsAndPeriodicityInProperties: NeetModule = {
    id: 'neet-chemistry-classification-of-elements-and-periodicity-in-properties',
    title: 'Chemistry - Classification of Elements and Periodicity in Properties (தனிமங்களின் வகைப்பாடு மற்றும் பண்புகளில் ஆவர்த்தனத் தன்மை)',
    chapter: 'Classification of Elements and Periodicity in Properties',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the historical development of the periodic table, including Mendeleev's contributions.",
        "State the Modern Periodic Law and describe the features of the modern periodic table (groups and periods).",
        "Classify elements into s, p, d, and f blocks based on their electronic configurations.",
        "Analyze and predict periodic trends in properties like atomic radius, ionization enthalpy, electron gain enthalpy, and electronegativity.",
        "Understand the concept of valency and oxidation states and their periodic trends."
    ],
    prerequisites: [
        "Atomic Structure, especially electronic configuration.",
        "Basic understanding of atomic number and mass number."
    ],
    conceptOverview: "The periodic table is the most important organizational tool in chemistry. This chapter explains the logic behind its structure. We'll see how elements are arranged based on their atomic number and electronic configuration, leading to a periodic recurrence of properties. Understanding these periodic trends—how properties like size, ionization energy, and electronegativity change across a period and down a group—is fundamental. It allows us to predict the chemical behavior of elements without having to memorize individual facts for each one.",
    tamilConnection: "ஒரு நூலகத்தில் புத்தகங்களை வகைப்படுத்தி அடுக்குவது போல, வேதியியலாளர்கள் தனிமங்களை ஆவர்த்தன அட்டவணையில் வகைப்படுத்தியுள்ளனர். இந்த அமைப்பு, தனிமங்களின் பண்புகளை எளிதாகப் புரிந்துகொள்ளவும், புதிய தனிமங்களின் பண்புகளைக் கணிக்கவும் உதவுகிறது. இது வேதியியலின் ஒரு வழிகாட்டி வரைபடம் போன்றது.",
    culturalContext: "The salt we use in our food is Sodium Chloride (NaCl). Sodium (Na) is a reactive alkali metal from Group 1, and Chlorine (Cl) is a reactive halogen from Group 17. The periodic table predicts that they will readily react to form a stable ionic compound by transferring an electron. Understanding their positions in the table explains why they form the salt that is so essential to our cuisine.",
    syllabusMapping: [
        {
            topic: "Classification of Elements and Periodicity",
            tnBoardChapter: "11th Std Chemistry - Vol 1, Chapter 3: Periodic Classification of Elements",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 3: Classification of Elements and Periodicity in Properties",
            notes: "A cornerstone chapter for inorganic chemistry. Questions on periodic trends are guaranteed. Pay special attention to the exceptions in trends for ionization enthalpy and electron gain enthalpy.",
            mappingDescription: '11th Std Chemistry - Vol 1, Chapter 3 maps to NEET Chemistry Unit 3'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Modern Periodic Law and the Periodic Table',
                tamil: '1. நவீன ஆவர்த்தன விதி மற்றும் ஆவர்த்தன அட்டவணை'
            },
            content: [
                {
                    english: 'The physical and chemical properties of the elements are periodic functions of their atomic numbers.',
                    tamil: 'தனிமங்களின் இயற்பியல் மற்றும் வேதியியல் பண்புகள் அவற்றின் அணு எண்களின் ஆவர்த்தன சார்புகளாகும்.'
                },
                {
                    english: 'The modern periodic table consists of 18 vertical columns called **groups** and 7 horizontal rows called **periods**.',
                    tamil: 'நவீன ஆவர்த்தன அட்டவணை 18 செங்குத்துப் பத்திகளையும் (தொகுதிகள்) மற்றும் 7 கிடைமட்ட வரிசைகளையும் (ஆவர்த்தனங்கள்) கொண்டுள்ளது.'
                },
                {
                    english: 'Elements are classified into four blocks: **s-block** (Groups 1-2), **p-block** (Groups 13-18), **d-block** (Transition metals, Groups 3-12), and **f-block** (Inner transition metals, Lanthanoids and Actinoids).',
                    tamil: 'தனிமங்கள் நான்கு தொகுதிகளாக வகைப்படுத்தப்பட்டுள்ளன: **s-தொகுதி** (தொகுதிகள் 1-2), **p-தொகுதி** (தொகுதிகள் 13-18), **d-தொகுதி** (இடைநிலை உலோகங்கள், தொகுதிகள் 3-12), மற்றும் **f-தொகுதி** (உள் இடைநிலை உலோகங்கள், லாந்தனைடுகள் மற்றும் ஆக்டினைடுகள்).'
                }
            ]
        },
        {
            heading: {
                english: '2. Periodic Trends in Properties',
                tamil: '2. பண்புகளில் ஆவர்த்தனப் போக்குகள்'
            },
            content: [
                {
                    english: `**Atomic Radius (அணு ஆரம்):**
*   **Across a Period (இடமிருந்து வலம்):** Decreases due to an increase in effective nuclear charge ($Z_{eff}$).
*   **Down a Group (மேலிருந்து கீழ்):** Increases due to the addition of new electron shells.`,
                    tamil: `**அணு ஆரம்:**
*   **ஒரு ஆவர்த்தனத்தில் (இடமிருந்து வலம்):** பயனுறு அணுக்கரு மின்னூட்டம் ($Z_{eff}$) அதிகரிப்பதால் குறைகிறது.
*   **ஒரு தொகுதியில் (மேலிருந்து கீழ்):** புதிய எலக்ட்ரான் கூடுகள் சேர்க்கப்படுவதால் அதிகரிக்கிறது.`
                },
                {
                    english: `**Ionization Enthalpy ($\\Delta_i H$) (அயனியாக்கும் ஆற்றல்):** The energy required to remove an electron from an isolated gaseous atom.
*   **Across a Period:** Generally increases due to increased $Z_{eff}$ and smaller size.
*   **Down a Group:** Generally decreases due to increased size and shielding effect.
*   **Exceptions:** Half-filled ($p^3, d^5$) and fully-filled ($p^6, d^{10}$) orbitals are more stable and have higher ionization enthalpies (e.g., N > O, Be > B).`,
                    tamil: `**அயனியாக்கும் ஆற்றல் ($\\Delta_i H$):** ஒரு தனிமைப்படுத்தப்பட்ட வாயு நிலை அணுவிலிருந்து ஒரு எலக்ட்ரானை நீக்கத் தேவையான ஆற்றல்.
*   **ஒரு ஆவர்த்தனத்தில்:** $Z_{eff}$ அதிகரிப்பு மற்றும் சிறிய அளவு காரணமாக பொதுவாக அதிகரிக்கிறது.
*   **ஒரு தொகுதியில்:** அதிகரித்த அளவு மற்றும் திரை மறைப்பு விளைவு காரணமாக பொதுவாக குறைகிறது.
*   **விதிவிலக்குகள்:** பாதி நிரம்பிய ($p^3, d^5$) மற்றும் முழுமையாக நிரம்பிய ($p^6, d^{10}$) ஆர்பிட்டால்கள் அதிக நிலைப்புத்தன்மை கொண்டவை மற்றும் அதிக அயனியாக்கும் ஆற்றல்களைக் கொண்டுள்ளன (எ.கா., N > O, Be > B).`
                },
                {
                    english: `**Electron Gain Enthalpy ($\\Delta_{eg} H$) (எலக்ட்ரான் நாட்ட ஆற்றல்):** The enthalpy change when an electron is added to an isolated gaseous atom.
*   **Across a Period:** Generally becomes more negative (more energy released).
*   **Down a Group:** Generally becomes less negative.
*   **Exceptions:** Halogens have the most negative values. Noble gases have large positive values. Electron gain enthalpy of Fluorine is less negative than Chlorine due to the small size and high electron density of F.`,
                    tamil: `**எலக்ட்ரான் நாட்ட ஆற்றல் ($\\Delta_{eg} H$):** ஒரு தனிமைப்படுத்தப்பட்ட வாயு நிலை அணுவுடன் ஒரு எலக்ட்ரான் சேர்க்கப்படும்போது ஏற்படும் என்தால்பி மாற்றம்.
*   **ஒரு ஆவர்த்தனத்தில்:** பொதுவாக அதிக எதிர்மறையாகிறது (அதிக ஆற்றல் வெளியிடப்படுகிறது).
*   **ஒரு தொகுதியில்:** பொதுவாக குறைந்த எதிர்மறையாகிறது.
*   **விதிவிலக்குகள்:** ஹாலஜன்கள் மிகவும் எதிர்மறையான மதிப்புகளைக் கொண்டுள்ளன. மந்த வாயுக்கள் பெரிய நேர்மறை மதிப்புகளைக் கொண்டுள்ளன. ஃபுளோரின் சிறிய அளவு மற்றும் அதிக எலக்ட்ரான் அடர்த்தி காரணமாக அதன் எலக்ட்ரான் நாட்ட ஆற்றல் குளோரினை விட குறைவாக எதிர்மறையாக உள்ளது.`
                },
                {
                    english: `**Electronegativity (கவர் திறன்):** The ability of an atom in a chemical compound to attract the shared pair of electrons towards itself.
*   **Across a Period:** Increases.
*   **Down a Group:** Decreases.
*   Fluorine is the most electronegative element.`,
                    tamil: `**கவர் திறன்:** ஒரு வேதிச் சேர்மத்தில் உள்ள ஒரு அணு, பிணைப்பில் பங்கிடப்பட்ட எலக்ட்ரான் ζוגையைத் தன்னை நோக்கி ஈர்க்கும் திறன்.
*   **ஒரு ஆவர்த்தனத்தில்:** அதிகரிக்கிறது.
*   **ஒரு தொகுதியில்:** குறைகிறது.
*   ஃபுளோரின் மிகவும் அதிக கவர் திறன் கொண்ட தனிமம் ஆகும்.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: 'NEET Level: Identifying Periodic Trends',
            titleTamil: 'நீட் நிலை: ஆவர்த்தனப் போக்குలను గుర్తించడం',
            difficulty: 'Easy',
            problem: 'Arrange the following elements in order of increasing atomic radius: F, Cl, Br, I.',
            problemTamil: 'பின்வரும் தனிமங்களை அணு ஆரத்தின் ஏறுவரிசையில் அடுக்கவும்: F, Cl, Br, I.',
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'Identify the position of the elements in the periodic table. F, Cl, Br, and I are all in the same group (Group 17, Halogens).',
                    explanationTamil: 'ஆவர்த்தன அட்டவணையில் தனிமங்களின் நிலையை அடையாளம் காணவும். F, Cl, Br, மற்றும் I அனைத்தும் ஒரே தொகுதியில் (தொகுதி 17, ஹாலஜன்கள்) உள்ளன.'
                },
                {
                    step: 2,
                    explanation: 'Recall the trend for atomic radius down a group. Atomic radius increases as we move down a group due to the addition of new electron shells.',
                    explanationTamil: 'ஒரு தொகுதியில் கீழ்நோக்கிச் செல்லும்போது அணு ஆரத்திற்கான போக்கை நினைவுகூர்க. புதிய எலக்ட்ரான் கூடுகள் சேர்க்கப்படுவதால் ஒரு தொகுதியில் கீழ்நோக்கிச் செல்லும்போது அணு ஆரம் அதிகரிக்கிறது.'
                },
                {
                    step: 3,
                    explanation: 'Apply the trend to the given elements. The order from top to bottom in the group is F, Cl, Br, I.',
                    explanationTamil: 'கொடுக்கப்பட்ட தனிமங்களுக்கு இந்த போக்கைப் பயன்படுத்தவும். தொகுதியில் மேலிருந்து கீழாக வரிசை F, Cl, Br, I ஆகும்.'
                },
                {
                    step: 4,
                    explanation: 'Therefore, the atomic radius increases in the same order. The increasing order is F < Cl < Br < I.',
                    explanationTamil: 'எனவே, அணு ஆரம் அதே வரிசையில் அதிகரிக்கிறது. ஏறுவரிசை F < Cl < Br < I ஆகும்.'
                }
            ],
            neetHack: 'For atomic radius, remember this simple rule: Down and to the Left, it gets Bigger!',
            neetHackTamil: 'அணு ஆரத்திற்கு, இந்த எளிய விதியை நினைவில் கொள்ளுங்கள்: கீழே மற்றும் இடதுபுறம் சென்றால், அது பெரியதாகிறது!'
        },
        {
            title: 'JEE Level: Ionization Enthalpy Exceptions',
            titleTamil: 'ஜே.இ.இ நிலை: அயனியாக்கும் ஆற்றல் விதிவிலக்குகள்',
            difficulty: 'Medium',
            problem: 'Explain why the first ionization enthalpy of Nitrogen is greater than that of Oxygen, even though Oxygen is to the right of Nitrogen in the period.',
            problemTamil: 'ஒரு ஆவர்த்தனத்தில் நைட்ரஜனுக்கு வலதுபுறம் ஆக்ஸிஜன் இருந்தாலும், நைட்ரஜனின் முதல் அயனியாக்கும் ஆற்றல் ஆக்ஸிஜனை விட ஏன் அதிகமாக உள்ளது என்பதை விளக்கவும்.',
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'Write the electronic configurations of Nitrogen (Z=7) and Oxygen (Z=8).',
                    explanationTamil: 'நைட்ரஜன் (Z=7) மற்றும் ஆக்ஸிஜன் (Z=8) ஆகியவற்றின் எலக்ட்ரான் அமைப்புகளை எழுதவும்.',
                    calculation: 'Nitrogen (N): 1s²2s²2p³\\\\Oxygen (O): 1s²2s²2p⁴'
                },
                {
                    step: 2,
                    explanation: 'Analyze the stability of their p-orbitals. Nitrogen has a half-filled 2p orbital (2p³), which is a particularly stable configuration.',
                    explanationTamil: 'அவற்றின் p-ஆர்பிட்டால்களின் நிலைப்புத்தன்மையை பகுப்பாய்வு செய்யவும். நைட்ரஜன் ஒரு பாதி நிரம்பிய 2p ஆர்பிட்டாலை (2p³) கொண்டுள்ளது, இது ஒரு குறிப்பாக நிலையான அமைப்பாகும்.'
                },
                {
                    step: 3,
                    explanation: 'Oxygen has four electrons in its 2p orbital (2p⁴). Removing one electron from Oxygen results in a stable, half-filled 2p³ configuration for the O⁺ ion.',
                    explanationTamil: 'ஆக்ஸிஜன் அதன் 2p ஆர்பிட்டாலில் (2p⁴) நான்கு எலக்ட்ரான்களைக் கொண்டுள்ளது. ஆக்ஸிஜனிலிருந்து ஒரு எலக்ட்ரானை நீக்குவது O⁺ அயனிக்கு ஒரு நிலையான, பாதி நிரம்பிய 2p³ அமைப்பை அளிக்கிறது.'
                },
                {
                    step: 4,
                    explanation: 'Because Nitrogen starts with a more stable half-filled configuration, more energy is required to remove an electron from it compared to Oxygen. Therefore, the first ionization enthalpy of Nitrogen is greater than that of Oxygen.',
                    explanationTamil: 'நைட்ரஜன் ஒரு அதிக நிலைப்புத்தன்மை கொண்ட பாதி நிரம்பிய அமைப்புடன் தொடங்குவதால், ஆக்ஸிஜனுடன் ஒப்பிடும்போது அதிலிருந்து ஒரு எலக்ட்ரானை நீக்க அதிக ஆற்றல் தேவைப்படுகிறது. எனவே, நைட்ரஜனின் முதல் அயனியாக்கும் ஆற்றல் ஆக்ஸிஜனை விட அதிகமாகும்.'
                }
            ],
            commonPitfall: 'Blindly following the general trend without considering the special stability of half-filled and fully-filled electronic configurations.',
            commonPitfallTamil: 'பாதி நிரம்பிய மற்றும் முழுமையாக நிரம்பிய எலக்ட்ரான் அமைப்புகளின் சிறப்பு நிலைப்புத்தன்மையைக் கருத்தில் கொள்ளாமல், பொதுவான போக்கை கண்மூடித்தனமாகப் பின்பற்றுவது.'
        },
        {
            title: 'NEET Level: Isoelectronic Species',
            titleTamil: 'நீட் நிலை: சம எலக்ட்ரான் அயனிகள்',
            difficulty: 'Medium',
            problem: 'Arrange the following isoelectronic species in order of increasing ionic radius: Na⁺, Mg²⁺, F⁻, O²⁻.',
            problemTamil: 'பின்வரும் சம எலக்ட்ரான் அயனிகளை அயனி ஆரத்தின் ஏறுவரிசையில் அடுக்கவும்: Na⁺, Mg²⁺, F⁻, O²⁻.',
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'First, confirm they are isoelectronic. All these ions have 10 electrons (like Neon).',
                    explanationTamil: 'முதலில், அவை சம எலக்ட்ரான் கொண்டவையா என்பதை உறுதிப்படுத்தவும். இந்த அயனிகள் அனைத்தும் 10 எலக்ட்ரான்களைக் கொண்டுள்ளன (நியானைப் போல).'
                },
                {
                    step: 2,
                    explanation: 'For isoelectronic species, the radius depends on the nuclear charge (number of protons, Z). A higher nuclear charge pulls the electrons more strongly, resulting in a smaller radius.',
                    explanationTamil: 'சம எலக்ட்ரான் அயனிகளுக்கு, ஆரம் அணுக்கரு மின்னூட்டத்தைச் (புரோட்டான்களின் எண்ணிக்கை, Z) சார்ந்தது. அதிக அணுக்கரு மின்னூட்டம் எலக்ட்ரான்களை வலுவாக இழுக்கிறது, இதன் விளைவாக சிறிய ஆரம் ஏற்படுகிறது.'
                },
                {
                    step: 3,
                    explanation: 'List the number of protons for each ion: O (Z=8), F (Z=9), Na (Z=11), Mg (Z=12).',
                    explanationTamil: 'ஒவ்வொரு அயனிக்குமான புரோட்டான்களின் எண்ணிக்கையைப் பட்டியலிடவும்: O (Z=8), F (Z=9), Na (Z=11), Mg (Z=12).'
                },
                {
                    step: 4,
                    explanation: 'The species with the highest nuclear charge (Mg²⁺) will be the smallest, and the one with the lowest nuclear charge (O²⁻) will be the largest. Therefore, the order of increasing ionic radius is Mg²⁺ < Na⁺ < F⁻ < O²⁻.',
                    explanationTamil: 'அதிக அணுக்கரு மின்னூட்டம் கொண்ட அயனி (Mg²⁺) மிகச் சிறியதாகவும், குறைந்த அணுக்கரு மின்னூட்டம் கொண்ட அயனி (O²⁻) மிகப் பெரியதாகவும் இருக்கும். எனவே, அயனி ஆரத்தின் ஏறுவரிசை Mg²⁺ < Na⁺ < F⁻ < O²⁻ ஆகும்.'
                }
            ],
            neetHack: 'For isoelectronic species, just remember: More positive charge = smaller radius. More negative charge = larger radius.',
            neetHackTamil: 'சம எலக்ட்ரான் அயனிகளுக்கு, இதை நினைவில் கொள்ளுங்கள்: அதிக நேர் மின்னூட்டம் = சிறிய ஆரம். அதிக எதிர் மின்னூட்டம் = பெரிய ஆரம்.'
        },
        {
            title: 'JEE Level: Successive Ionization Enthalpies',
            titleTamil: 'ஜே.இ.இ நிலை: தொடர் அயனியாக்கும் ஆற்றல்கள்',
            difficulty: 'Medium',
            problem: 'Why is the second ionization enthalpy of Sodium (Na) much higher than its first ionization enthalpy?',
            problemTamil: 'சோடியத்தின் (Na) இரண்டாவது அயனியாக்கும் ஆற்றல் அதன் முதல் அயனியாக்கும் ஆற்றலை விட ஏன் மிக அதிகமாக உள்ளது?',
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'Write the electronic configuration of a neutral Sodium atom (Na, Z=11).',
                    explanationTamil: 'ஒரு நடுநிலை சோடியம் அணுவின் (Na, Z=11) எலக்ட்ரான் அமைப்பை எழுதவும்.',
                    calculation: 'Na: 1s²2s²2p⁶3s¹'
                },
                {
                    step: 2,
                    explanation: 'The first ionization enthalpy involves removing the outermost 3s¹ electron. This results in the Na⁺ ion.',
                    explanationTamil: 'முதல் அயனியாக்கும் ஆற்றல் வெளிப்புற 3s¹ எலக்ட்ரானை நீக்குவதை உள்ளடக்கியது. இது Na⁺ அயனியை உருவாக்குகிறது.'
                },
                {
                    step: 3,
                    explanation: 'Write the electronic configuration of the Na⁺ ion.',
                    explanationTamil: 'Na⁺ அயனியின் எலக்ட்ரான் அமைப்பை எழுதவும்.',
                    calculation: 'Na⁺: 1s²2s²2p⁶'
                },
                {
                    step: 4,
                    explanation: 'Observe that the Na⁺ ion has a stable, fully-filled p-orbital configuration, identical to the noble gas Neon. The second ionization enthalpy involves removing an electron from this extremely stable noble gas core.',
                    explanationTamil: 'Na⁺ அயனி ஒரு நிலையான, முழுமையாக நிரம்பிய p-ஆர்பிட்டால் அமைப்பைக் கொண்டுள்ளது, இது மந்த வாயுவான நியானைப் போன்றது. இரண்டாவது அயனியாக்கும் ஆற்றல் இந்த மிகவும் நிலையான மந்த வாயு மையத்திலிருந்து ஒரு எலக்ட்ரானை நீக்குவதை உள்ளடக்கியது.'
                },
                {
                    step: 5,
                    explanation: 'Removing an electron from a stable, fully-filled orbital requires a very large amount of energy. Therefore, the second ionization enthalpy of Sodium is exceptionally high.',
                    explanationTamil: 'ஒரு நிலையான, முழுமையாக நிரம்பிய ஆர்பிட்டாலிலிருந்து ஒரு எலக்ட்ரானை நீக்க மிக அதிக அளவு ஆற்றல் தேவைப்படுகிறது. எனவே, சோடியத்தின் இரண்டாவது அயனியாக்கும் ஆற்றல் விதிவிலக்காக அதிகமாகும்.'
                }
            ],
            commonPitfall: 'Only considering the increase in effective nuclear charge for successive ionizations and forgetting the much larger effect of breaking into a stable noble gas configuration.',
            commonPitfallTamil: 'தொடர்ச்சியான அயனியாக்கங்களுக்கு பயனுறு அணுக்கரு மின்னூட்டத்தின் அதிகரிப்பை மட்டுமே கருத்தில் கொண்டு, ஒரு நிலையான மந்த வாயு அமைப்பை உடைப்பதன் மிகப் பெரிய விளைவை மறந்துவிடுவது.'
        },
        {
            title: 'NEET Level: Electronegativity and Bond Type',
            titleTamil: 'நீட் நிலை: கவர் திறன் மற்றும் பிணைப்பு வகை',
            difficulty: 'Easy',
            problem: 'The electronegativities of F, Cl, Br, and I are 4.0, 3.0, 2.8, and 2.5 respectively. Which of the following bonds is the most polar: H-F, H-Cl, H-Br, H-I? (Electronegativity of H is 2.1)',
            problemTamil: 'F, Cl, Br, மற்றும் I ஆகியவற்றின் கவர் திறன்கள் முறையே 4.0, 3.0, 2.8, மற்றும் 2.5 ஆகும். பின்வரும் பிணைப்புகளில் எது மிகவும் முனைவுற்றது: H-F, H-Cl, H-Br, H-I? (H-இன் கவர் திறன் 2.1)',
            solutionSteps: [
                {
                    step: 1,
                    explanation: 'The polarity of a covalent bond is determined by the difference in electronegativity (ΔEN) between the two bonded atoms.',
                    explanationTamil: 'ஒரு சகப்பிணைப்பின் முனைவுத்தன்மை, பிணைக்கப்பட்ட இரண்டு அணுக்களுக்கு இடையிலான கவர் திறன் வேறுபாட்டால் (ΔEN) தீர்மானிக்கப்படுகிறது.'
                },
                {
                    step: 2,
                    explanation: 'A larger difference in electronegativity leads to a more polar bond.',
                    explanationTamil: 'கவர் திறனில் பெரிய வேறுபாடு அதிக முனைவுற்ற பிணைப்பிற்கு வழிவகுக்கிறது.'
                },
                {
                    step: 3,
                    explanation: 'Calculate the electronegativity difference for each bond.',
                    explanationTamil: 'ஒவ்வொரு பிணைப்புக்குமான கவர் திறன் வேறுபாட்டைக் கணக்கிடவும்.',
                    calculation: 'ΔEN(H-F) = 4.0 - 2.1 = 1.9\\\\ΔEN(H-Cl) = 3.0 - 2.1 = 0.9\\\\ΔEN(H-Br) = 2.8 - 2.1 = 0.7\\\\ΔEN(H-I) = 2.5 - 2.1 = 0.4'
                },
                {
                    step: 4,
                    explanation: 'The H-F bond has the largest electronegativity difference (1.9).',
                    explanationTamil: 'H-F பிணைப்பு மிகப்பெரிய கவர் திறன் வேறுபாட்டைக் (1.9) கொண்டுள்ளது.'
                },
                 {
                    step: 5,
                    explanation: 'Therefore, the H-F bond is the most polar.',
                    explanationTamil: 'எனவே, H-F பிணைப்பு மிகவும் முனைவுற்றது ஆகும்.'
                }
            ],
            neetHack: 'Polarity increases with the electronegativity difference. Since H is common, the bond with the most electronegative element (F) will be the most polar.',
            neetHackTamil: 'கவர் திறன் வேறுபாட்டுடன் முனைவுத்தன்மை அதிகரிக்கிறது. H பொதுவானதாக இருப்பதால், மிகவும் அதிக கவர் திறன் கொண்ட தனிமத்துடனான (F) பிணைப்பு மிகவும் முனைவுற்றதாக இருக்கும்.'
        }
    ],
    mcqs: [
        { question: "The modern periodic law is based on:", options: ["A. Atomic mass", "B. Atomic number", "C. Number of neutrons", "D. Avogadro's number"], answer: "B. Atomic number", explanation: "The modern periodic law states that the properties of elements are a periodic function of their atomic number.", neetFrequency: 2 },
        { question: "Which of the following has the largest atomic radius?", options: ["A. Na", "B. K", "C. Mg", "D. Ca"], answer: "B. K", explanation: "Atomic radius increases down a group and decreases across a period. K is in period 4, group 1. Ca is in period 4, group 2. Na and Mg are in period 3. K is to the left of Ca and below Na, so it is the largest.", neetFrequency: 5 },
        { question: "The element with the highest electronegativity is:", options: ["A. Chlorine", "B. Oxygen", "C. Fluorine", "D. Nitrogen"], answer: "C. Fluorine", explanation: "Electronegativity increases across a period and decreases down a group. Fluorine is at the top right of the periodic table (excluding noble gases), making it the most electronegative element.", neetFrequency: 4 },
        { question: "The first ionization enthalpy of Nitrogen is greater than that of Oxygen because of:", options: ["A. Larger size of Nitrogen", "B. Higher nuclear charge of Nitrogen", "C. Stable half-filled p-orbital in Nitrogen", "D. Higher shielding effect in Nitrogen"], answer: "C. Stable half-filled p-orbital in Nitrogen", explanation: "Nitrogen has a stable 2p³ configuration, which requires more energy to disturb by removing an electron compared to Oxygen's 2p⁴ configuration.", neetFrequency: 5 },
        { question: "Which of the following is an s-block element?", options: ["A. Aluminum", "B. Carbon", "C. Sodium", "D. Chlorine"], answer: "C. Sodium", explanation: "Sodium (Na) is in Group 1, which is part of the s-block.", neetFrequency: 1 },
        { question: "In the periodic table, elements are arranged in order of increasing:", options: ["A. Mass number", "B. Atomic mass", "C. Number of neutrons", "D. Atomic number"], answer: "D. Atomic number", explanation: "The modern periodic table arranges elements by their atomic number (Z).", neetFrequency: 1 },
        { question: "Which of the following has the most negative electron gain enthalpy?", options: ["A. F", "B. Cl", "C. Br", "D. I"], answer: "B. Cl", explanation: "This is a key exception. Although electronegativity decreases down the group, Chlorine has a more negative electron gain enthalpy than Fluorine due to the smaller size and higher electron-electron repulsion in the 2p orbital of Fluorine.", neetFrequency: 4 },
        { question: "The general electronic configuration of p-block elements is:", options: ["A. ns¹⁻²", "B. ns²np¹⁻⁶", "C. (n-1)d¹⁻¹⁰ns¹⁻²", "D. ns⁰⁻²np¹⁻⁶"], answer: "B. ns²np¹⁻⁶", explanation: "p-block elements have their last electron entering the p-orbital of the outermost shell.", neetFrequency: 2 },
        { question: "Among Na⁺, Mg²⁺, O²⁻, and F⁻, which one is the smallest in size?", options: ["A. Na⁺", "B. Mg²⁺", "C. O²⁻", "D. F⁻"], answer: "B. Mg²⁺", explanation: "All are isoelectronic (10 electrons). For isoelectronic species, the one with the highest nuclear charge (most protons) is the smallest. Mg has 12 protons, making Mg²⁺ the smallest.", neetFrequency: 5 },
        { question: "The tendency to lose electrons ____ down a group and ____ across a period.", options: ["A. increases, decreases", "B. decreases, increases", "C. increases, increases", "D. decreases, decreases"], answer: "A. increases, decreases", explanation: "The tendency to lose electrons is related to low ionization enthalpy. IE decreases down a group (easier to lose) and increases across a period (harder to lose).", neetFrequency: 3 },
        { question: "The elements of Group 17 are known as:", options: ["A. Alkali metals", "B. Alkaline earth metals", "C. Halogens", "D. Noble gases"], answer: "C. Halogens", explanation: "Group 17 elements (F, Cl, Br, I) are called halogens, which means 'salt-formers'.", neetFrequency: 1 },
        { question: "What is the atomic number of the element with electronic configuration [Ar] 3d¹⁰ 4s² 4p³?", options: ["A. 15", "B. 25", "C. 33", "D. 35"], answer: "C. 33", explanation: "Argon (Ar) has Z=18. Total electrons = 18 + 10 (3d) + 2 (4s) + 3 (4p) = 33. The element is Arsenic (As).", neetFrequency: 3 },
        { question: "Which property remains almost constant in a period?", options: ["A. Atomic radius", "B. Electronegativity", "C. Ionization enthalpy", "D. Shielding effect"], answer: "D. Shielding effect", explanation: "Across a period, electrons are added to the same shell. So, the number of inner shells (which provide shielding) remains constant. The other properties show significant trends.", neetFrequency: 2 },
        { question: "The second ionization enthalpy is always higher than the first ionization enthalpy because:", options: ["A. The size of the atom increases", "B. It is harder to remove an electron from a positive ion", "C. The shielding effect increases", "D. The nuclear charge decreases"], answer: "B. It is harder to remove an electron from a positive ion", explanation: "After one electron is removed, the effective nuclear charge experienced by the remaining electrons increases, making it harder to remove a second electron.", neetFrequency: 4 },
        { question: "The correct order of increasing metallic character is:", options: ["A. P < Si < Be < Mg < Na", "B. Be < Mg < Na < Si < P", "C. Na < Mg < Be < Si < P", "D. Si < P < Be < Mg < Na"], answer: "A. P < Si < Be < Mg < Na", explanation: "Metallic character decreases across a period and increases down a group. P and Si are non-metal/metalloid. Be, Mg, Na are metals. Na is the most metallic.", neetFrequency: 3 },
        { question: "The electronic configuration of an element is 1s²2s²2p⁶3s²3p³. It belongs to which group and period?", options: ["A. Group 13, Period 3", "B. Group 15, Period 3", "C. Group 3, Period 3", "D. Group 15, Period 2"], answer: "B. Group 15, Period 3", explanation: "The outermost shell is n=3, so it is in Period 3. It is a p-block element with 3+2=5 valence electrons. For p-block, Group number = 10 + valence electrons = 10+5 = 15.", neetFrequency: 4 },
        { question: "Which of the following oxides is amphoteric in nature?", options: ["A. Na₂O", "B. Al₂O₃", "C. Cl₂O₇", "D. CO₂"], answer: "B. Al₂O₃", explanation: "Oxides of metals are basic, oxides of non-metals are acidic. Oxides of metalloids like Al, Zn, Be are amphoteric, meaning they react with both acids and bases.", neetFrequency: 4 },
        { question: "The IUPAC name for the element with atomic number 104 is:", options: ["A. Unnilquadium", "B. Unnilpentium", "C. Unnilunium", "D. Rutherfordium"], answer: "A. Unnilquadium", explanation: "Using IUPAC nomenclature: 1(un) + 0(nil) + 4(quad) + ium = Unnilquadium. Its official name is Rutherfordium.", neetFrequency: 1 },
        { question: "The shielding effect of d-electrons is:", options: ["A. Equal to that of p-electrons", "B. More than that of p-electrons", "C. Less than that of p-electrons", "D. Zero"], answer: "C. Less than that of p-electrons", explanation: "The order of shielding effect is s > p > d > f. Due to their diffuse shape, d-electrons are poor at shielding the outer electrons from the nuclear charge.", neetFrequency: 3 },
        { question: "Which of the following pairs of elements shows a diagonal relationship?", options: ["A. Li and Mg", "B. Na and K", "C. B and Si", "D. Both A and C"], answer: "D. Both A and C", explanation: "Diagonal relationships exist between elements of the second and third periods due to similar ionic size and charge/radius ratio. Key pairs are Li-Mg, Be-Al, and B-Si.", neetFrequency: 3 },
        { question: "The correct order of ionic radii is:", options: ["A. H⁻ > H > H⁺", "B. H⁺ > H > H⁻", "C. H⁻ = H = H⁺", "D. H⁻ > H⁺ > H"], answer: "A. H⁻ > H > H⁺", explanation: "An anion (H⁻) is larger than its parent atom because of increased electron-electron repulsion. A cation (H⁺) is smaller because of increased effective nuclear charge.", neetFrequency: 2 },
        { question: "The energy required to remove an electron from a gaseous cation is called:", options: ["A. First ionization enthalpy", "B. Electron gain enthalpy", "C. Second ionization enthalpy", "D. Electronegativity"], answer: "C. Second ionization enthalpy", explanation: "The removal of the first electron is the first ionization enthalpy. The removal of a second electron from the resulting positive ion is the second ionization enthalpy.", neetFrequency: 1 },
        { question: "The most electropositive element in the periodic table is:", options: ["A. Fluorine", "B. Cesium", "C. Lithium", "D. Hydrogen"], answer: "B. Cesium", explanation: "Electropositivity (metallic character) is the tendency to lose electrons. It increases down a group and decreases across a period. Cesium (Cs) is at the bottom-left of the periodic table.", neetFrequency: 2 },
        { question: "The d-block elements are also known as:", options: ["A. Alkali metals", "B. Halogens", "C. Inner transition elements", "D. Transition elements"], answer: "D. Transition elements", explanation: "The d-block elements are located between the s-block and p-block and show a transition of properties, hence they are called transition elements.", neetFrequency: 1 },
        { question: "An element X forms an oxide X₂O₅. In which group of the periodic table is this element placed?", options: ["A. Group 2", "B. Group 13", "C. Group 14", "D. Group 15"], answer: "D. Group 15", explanation: "In X₂O₅, the oxidation state of oxygen is -2. To balance, 2X + 5(-2) = 0 => 2X = 10 => X = +5. A +5 oxidation state is characteristic of Group 15 elements (like N, P, As).", neetFrequency: 3 }
    ],
    assertionReasons: [
        {
            assertion: "The first ionization enthalpy of Be is greater than that of B.",
            reason: "Be has a stable, fully-filled 2s orbital, while B has a single electron in the 2p orbital.",
            answer: "A",
            explanation: "Assertion is a known exception to the general trend. The reason correctly explains this. Removing an electron from the stable, filled 2s orbital of Beryllium requires more energy than removing the single, less tightly held 2p electron from Boron."
        },
        {
            assertion: "Electron gain enthalpy of noble gases is positive.",
            reason: "Noble gases have stable, completely filled electronic configurations.",
            answer: "A",
            explanation: "The assertion is true; energy must be supplied to add an electron to a noble gas. The reason is also true and is the correct explanation. Due to their stable configuration, noble gases have no tendency to accept an additional electron."
        },
        {
            assertion: "Atomic radius decreases across a period.",
            reason: "The number of shells remains the same, but the effective nuclear charge increases.",
            answer: "A",
            explanation: "The assertion is the correct general trend. The reason is also correct and provides the physical explanation for this trend. The increasing nuclear charge pulls the electrons in the same shell more tightly."
        },
        {
            assertion: "The ionic radius of a cation is smaller than its parent atom.",
            reason: "A cation is formed by adding electrons to an atom.",
            answer: "C",
            explanation: "The assertion is true. The reason is false. A cation is formed by *removing* electrons, which leads to a greater effective nuclear charge pulling the remaining electrons closer."
        },
        {
            assertion: "Fluorine is the most electronegative element.",
            reason: "Fluorine has the most negative electron gain enthalpy.",
            answer: "C",
            explanation: "The assertion is true. The reason is false. Chlorine has the most negative electron gain enthalpy, not Fluorine. Fluorine's high electronegativity is due to its small size and high nuclear charge."
        }
    ],
    matchTheColumns: [
        { column1: ["(a) Alkali Metals", "(b) Halogens", "(c) Noble Gases", "(d) Chalcogens"], column2: ["(p) Group 18", "(q) Group 17", "(r) Group 1", "(s) Group 16"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching the family names of elements with their corresponding group numbers." },
        { column1: ["(a) Largest atomic radius in Period 2", "(b) Most electronegative element", "(c) Element with stable ns²np³ configuration", "(d) A metalloid"], column2: ["(p) Nitrogen", "(q) Silicon", "(r) Lithium", "(s) Fluorine"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching elements with their described properties." },
        { column1: ["(a) s-block", "(b) p-block", "(c) d-block", "(d) f-block"], column2: ["(p) Transition elements", "(q) Inner transition elements", "(r) Representative elements", "(s) Alkali and Alkaline earth metals"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching the blocks of the periodic table with the names of the elements they contain. s and p block are together called representative elements." },
        { column1: ["(a) Electronegativity", "(b) Ionization Enthalpy", "(c) Electron Gain Enthalpy", "(d) Atomic Radius"], column2: ["(p) Increases down a group", "(q) Decreases down a group", "(r) Becomes less negative down a group", "(s) Increases across a period"], answer: "a-q, b-q, c-r, d-p", explanation: "Matching the periodic properties with their trend when moving down a group." },
        { column1: ["(a) Isoelectronic with Ne", "(b) A halogen", "(c) An alkaline earth metal", "(d) An element with Z=35"], column2: ["(p) Bromine", "(q) Calcium", "(r) Fluoride ion (F⁻)", "(s) A p-block element"], answer: "a-r, b-p,s; c-q; d-p,s", explanation: "Matching the descriptions with the correct examples. Bromine is both a halogen and a p-block element." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [
        "The properties of elements are a periodic function of their atomic number.",
        "Atomic radius generally decreases across a period and increases down a group.",
        "Ionization enthalpy and electronegativity generally increase across a period and decrease down a group.",
        "The stability of half-filled and fully-filled orbitals leads to exceptions in periodic trends."
    ],
    mnemonics: [
        {
            text: "Remember the trend for electronegativity: 'FONClBrISCH' (F>O>N>Cl>Br>I>S>C>H). This covers most common elements.",
            tamil: "கவர் திறன் வரிசையை நினைவில் கொள்க: 'FONClBrISCH'. இது பொதுவான தனிமங்களை உள்ளடக்கியது."
        }
    ],
    neetTips: [
        {
            text: "Questions about exceptions to periodic trends (like IE of N > O, or EA of Cl > F) are very common. Understand the reason behind these exceptions (stable configuration, electron-electron repulsion).",
            tamil: "ஆவர்த்தனப் போக்குகளின் விதிவிலக்குகள் (N > O இன் IE, Cl > F இன் EA போன்றவை) பற்றிய கேள்விகள் மிகவும் பொதுவானவை. இந்த விதிவிலக்குகளுக்குப் பின்னால் உள்ள காரணத்தைப் (நிலையான கட்டமைப்பு, எலக்ட்ரான்-எலக்ட்ரான் விலக்கு) புரிந்துகொள்ளுங்கள்."
        },
        {
            text: "For ionic radius of isoelectronic species, just look at the number of protons (Z). More protons = stronger pull = smaller radius.",
            tamil: "சம எலக்ட்ரான் அயனிகளின் அயனி ஆரத்திற்கு, புரோட்டான்களின் எண்ணிக்கையை (Z) மட்டும் பாருங்கள். அதிக புரோட்டான்கள் = வலுவான ஈர்ப்பு = சிறிய ஆரம்."
        }
    ],
    studentTip: {
        english: "Don't just memorize the trends. Try to explain them based on two fundamental factors: effective nuclear charge and the number of electron shells. This will help you reason out the answers even for tricky questions.",
        tamil: "போக்குபோக்குகளை மனப்பாடம் செய்ய வேண்டாம். பயனுறு அணுக்கரு மின்னூட்டம் மற்றும் எலக்ட்ரான் கூடுகளின் எண்ணிக்கை ஆகிய இரண்டு அடிப்படைக் காரணிகளின் அடிப்படையில் அவற்றை விளக்க முயற்சிக்கவும். இது தந்திரமான கேள்விகளுக்கும் விடையளிக்க உதவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is the second ionization enthalpy always greater than the first, for any atom? And why is the jump in ionization enthalpy particularly large when an electron is removed from a core noble gas configuration?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: எந்தவொரு அணுவிற்கும், இரண்டாவது அயனியாக்கும் ஆற்றல் ஏன் எப்போதும் முதலாவதை விட அதிகமாக உள்ளது? ஒரு மந்த வாயு மைய அமைப்பிலிருந்து ஒரு எலக்ட்ரான் அகற்றப்படும்போது அயனியாக்கும் ஆற்றலில் ஏற்படும் தாவல் ஏன் குறிப்பாக பெரியதாக உள்ளது?"
    },
    nextChapter: {
        title: "p-Block Elements",
        titleTamil: "p-தொகுதி தனிமங்கள்"
    },
    validationReport: []
};

    