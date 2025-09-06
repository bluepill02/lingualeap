
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingOxygen: NeetModule = {
    id: 'neet-chemistry-organic-compounds-containing-oxygen',
    title: 'Chemistry - Organic Compounds Containing Oxygen (ஆக்ஸிஜன் கொண்ட கரிமச் சேர்மங்கள்)',
    chapter: 'Organic Compounds Containing Oxygen',
    subject: 'Chemistry',
    learningObjectives: [
        "Describe the preparation, properties, and reactions of alcohols and phenols, focusing on their acidic nature.",
        "Understand the preparation and reactions of ethers.",
        "Analyze the chemistry of the carbonyl group in aldehydes and ketones.",
        "Explain key reactions of aldehydes and ketones, such as nucleophilic addition, oxidation, reduction, and condensation (e.g., Aldol, Cannizzaro).",
        "Describe the preparation, properties, and reactions of carboxylic acids, focusing on their acidic strength.",
        "Understand the reactions of carboxylic acid derivatives (esters, acid chlorides)."
    ],
    prerequisites: [
        "Hydrocarbons and Haloalkanes/Haloarenes.",
        "Understanding of reaction mechanisms like nucleophilic addition and substitution."
    ],
    conceptOverview: "This extensive topic covers the most important classes of oxygen-containing organic compounds: alcohols, phenols, ethers, aldehydes, ketones, and carboxylic acids. Each class has a characteristic functional group that dictates its chemical behavior. We will explore the structure, nomenclature, preparation, and key reactions for each class. A central theme is the chemistry of the carbonyl group (C=O) found in aldehydes and ketones, which undergoes characteristic nucleophilic addition reactions. The acidic nature of phenols and carboxylic acids is another crucial concept. This chapter is rich with important name reactions that are fundamental to organic synthesis.",
    tamilConnection: "கரும்புச் சாற்றிலிருந்து சர்க்கரை தயாரிப்பதில் ஆல்கஹால் ஒரு இடைநிலை சேர்மமாக உருவாகிறது. நாம் பயன்படுத்தும் வினிகர் (acetic acid) ஒரு கார்பாக்சிலிக் அமிலம். இந்த அத்தியாயம், நம் அன்றாட வாழ்வில் உள்ள பல பொருட்களின் வேதியியலை ஆழமாகப் புரிந்துகொள்ள உதவுகிறது.",
    culturalContext: "The distinct fragrance of jasmine flowers ('Madurai Malli') is due to a complex mixture of organic compounds, including benzyl acetate (an ester) and benzyl alcohol. Similarly, the aroma of cinnamon ('lavanga pattai') is from cinnamaldehyde. This chapter explores the chemistry of the functional groups (alcohols, aldehydes, esters) that give these culturally significant plants their characteristic scents.",
    syllabusMapping: [
        {
            topic: "Alcohols, Phenols, Ethers, Aldehydes, Ketones, Carboxylic Acids",
            tnBoardChapter: "12th Std Chemistry - Vol 2, Chapters 11 & 12",
            ncertReference: "Class 12 Chemistry - Part 2, Chapters 11 & 12",
            notes: "Extremely high-weightage topic. This is a very large section covering multiple chapters. Name reactions (Aldol, Cannizzaro, Reimer-Tiemann, Kolbe's) and tests to distinguish between different functional groups are very important. Acidity/basicity order questions are also frequently asked.",
            mappingDescription: '12th Std Chemistry - Vol 2, Chapters 11 & 12 maps to NEET Chemistry Unit 24'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Alcohols and Phenols (ஆல்கஹால்கள் மற்றும் ஃபீனால்கள்)', tamil: '1. ஆல்கஹால்கள் மற்றும் ஃபீனால்கள்' },
            content: [
                { english: `**Alcohols:** R-OH. Classified as primary (1°), secondary (2°), and tertiary (3°).`, tamil: `**ஆல்கஹால்கள்:** R-OH. முதன்மை (1°), இரண்டாம் நிலை (2°), மற்றும் மூன்றாம் நிலை (3°) என வகைப்படுத்தப்படுகின்றன.` },
                { english: `**Phenols:** Ar-OH. The -OH group is directly attached to a benzene ring.`, tamil: `**ஃபீனால்கள்:** Ar-OH. -OH தொகுதி நேரடியாக ஒரு பென்சீன் வளையத்துடன் இணைக்கப்பட்டுள்ளது.` },
                { english: `**Acidity:** Phenols are more acidic than alcohols because the phenoxide ion (conjugate base) is stabilized by resonance. Alcohols are weaker acids than water. Acidity of alcohols: 1° > 2° > 3°.`, tamil: `**அமிலத்தன்மை:** ஆல்கஹால்களை விட ஃபீனால்கள் அதிக அமிலத்தன்மை கொண்டவை. ஃபீனாக்சைடு அயனி (இணை காரம்) உடனிசைவால் நிலைப்படுத்தப்படுகிறது. ஆல்கஹால்கள் தண்ணீரை விட பலவீனமான அமிலங்கள். ஆல்கஹால்களின் அமிலத்தன்மை: 1° > 2° > 3°.` },
                { english: `**Key Reactions:** Dehydration to form alkenes, oxidation (1° alcohol → aldehyde → carboxylic acid; 2° alcohol → ketone), esterification.`, tamil: `**முக்கிய வினைகள்:** ஆல்கீன்களை உருவாக்க நீர்நீக்கம், ஆக்ஸிஜனேற்றம் (1° ஆல்கஹால் → ஆல்டிஹைடு → கார்பாக்சிலிக் அமிலம்; 2° ஆல்கஹால் → கீட்டோன்), எஸ்டராக்குதல்.` },
                { english: `**Distinguishing Test:** Lucas test (ZnCl₂ + conc. HCl) distinguishes 1°, 2°, and 3° alcohols. 3° alcohol gives immediate turbidity, 2° gives turbidity in 5 mins, 1° does not react at room temp.`, tamil: `**வேறுபடுத்தும் சோதனை:** லூகாஸ் சோதனை (ZnCl₂ + அடர் HCl) 1°, 2°, மற்றும் 3° ஆல்கஹால்களை வேறுபடுத்துகிறது.` }
            ]
        },
        {
            heading: { english: '2. Ethers (ஈதர்கள்)', tamil: '2. ஈதர்கள்' },
            content: [
                { english: `General formula R-O-R'.`, tamil: `பொதுவான வாய்ப்பாடு R-O-R'.` },
                { english: `**Preparation:** Williamson Synthesis: $R-X + R'-ONa → R-O-R' + NaX$. This is a nucleophilic substitution (SN2) reaction, best for preparing mixed ethers with a primary alkyl halide.`, tamil: `**தயாரிப்பு:** வில்லியம்சன் தொகுப்பு: $R-X + R'-ONa → R-O-R' + NaX$. இது ஒரு கருக்கவர் பொருள் பதிலீட்டு (SN2) வினை, இது முதன்மை அல்கைல் ஹாலைடுடன் கலப்பு ஈதர்களைத் தயாரிக்க சிறந்தது.` },
                { english: `**Properties:** Relatively inert. Cleavage with strong acids like HI is a key reaction.`, tamil: `**பண்புகள்:** ஒப்பீட்டளவில் மந்தமானவை. HI போன்ற வலுவான அமிலங்களுடன் பிளவுபடுதல் ஒரு முக்கிய வினையாகும்.` }
            ]
        },
        {
            heading: { english: '3. Aldehydes and Ketones (ஆல்டிஹைடுகள் மற்றும் கீட்டோன்கள்)', tamil: '3. ஆல்டிஹைடுகள் மற்றும் கீட்டோன்கள்' },
            content: [
                { english: `Contain the carbonyl group (C=O). Aldehydes: R-CHO. Ketones: R-CO-R'.`, tamil: `கார்போனைல் தொகுதியைக் (C=O) கொண்டுள்ளன. ஆல்டிஹைடுகள்: R-CHO. கீட்டோன்கள்: R-CO-R'.` },
                { english: `**Key Reaction Type:** Nucleophilic Addition. The nucleophile attacks the electron-deficient carbonyl carbon.`, tamil: `**முக்கிய வினை வகை:** கருக்கவர் பொருள் சேர்ப்பு. கருக்கவர் பொருள் எலக்ட்ரான்-குறைபாடுள்ள கார்போனைல் கார்பனைத் தாக்குகிறது.` },
                { english: `**Distinguishing Tests:** Aldehydes are easily oxidized, while ketones are not.
    *   **Tollens' Test:** Aldehydes give a silver mirror.
    *   **Fehling's Test:** Aldehydes give a red-brown precipitate of Cu₂O.
    *   **Iodoform Test:** Given by methyl ketones and compounds that can be oxidized to methyl ketones (like ethanol, propan-2-ol).`, tamil: `**வேறுபடுத்தும் சோதனைகள்:** ஆல்டிஹைடுகள் எளிதில் ஆக்ஸிஜனேற்றமடைகின்றன, ஆனால் கீட்டோன்கள் இல்லை.
    *   **டாலன்ஸ் சோதனை:** ஆல்டிஹைடுகள் ஒரு வெள்ளி ஆடியைக் கொடுக்கின்றன.
    *   **ஃபெலிங் சோதனை:** ஆல்டிஹைடுகள் Cu₂O இன் சிவப்பு-பழுப்பு வீழ்படிவைக் கொடுக்கின்றன.
    *   **அயோடோஃபார்ம் சோதனை:** மெத்தில் கீட்டோன்கள் மற்றும் மெத்தில் கீட்டோன்களாக ஆக்ஸிஜனேற்றமடையக்கூடிய சேர்மங்களால் (எ.கா., எத்தனால், புரோப்பேன்-2-ஆல்) கொடுக்கப்படுகிறது.` },
                { english: `**Important Name Reactions:**
    *   **Aldol Condensation:** Reaction of aldehydes/ketones having at least one α-hydrogen in the presence of a dilute base.
    *   **Cannizzaro Reaction:** Reaction of aldehydes with NO α-hydrogen in the presence of a concentrated base (disproportionation).
    *   **Clemmensen Reduction (Zn-Hg/HCl) & Wolff-Kishner Reduction (NH₂NH₂/KOH):** Reduce carbonyl group to -CH₂-.`, tamil: `**முக்கியமான பெயர் வினைகள்:**
    *   **ஆல்டால் குறுக்கம்:** குறைந்தது ஒரு α-ஹைட்ரஜனைக் கொண்ட ஆல்டிஹைடுகள்/கீட்டோன்களின் வினை, நீர்த்த காரத்தின் முன்னிலையில்.
    *   **கேனிசரோ வினை:** α-ஹைட்ரஜன் இல்லாத ஆல்டிஹைடுகளின் வினை, அடர் காரத்தின் முன்னிலையில் (விகிதச் சிதைவு).
    *   **கிளெமென்சன் ஒடுக்கம் & வுல்ஃப்-கிஷ்ணர் ஒடுக்கம்:** கார்போனைல் தொகுதியை -CH₂- ஆக ஒடுக்குகிறது.` }
            ]
        },
        {
            heading: { english: '4. Carboxylic Acids (கார்பாக்சிலிக் அமிலங்கள்)', tamil: '4. கார்பாக்சிலிக் அமிலங்கள்' },
            content: [
                { english: `Contain the carboxyl group (-COOH).`, tamil: `கார்பாக்சில் தொகுதியைக் (-COOH) கொண்டுள்ளன.` },
                { english: `**Acidity:** They are acidic due to the stabilization of the conjugate base (carboxylate ion) by resonance. Electron-withdrawing groups increase acidity, while electron-donating groups decrease it.`, tamil: `**அமிலத்தன்மை:** உடனிசைவால் இணை காரம் (கார்பாக்சிலேட் அயனி) நிலைப்படுத்தப்படுவதால் அவை அமிலத்தன்மை கொண்டவை. எலக்ட்ரானை ஈர்க்கும் குழுக்கள் அமிலத்தன்மையை அதிகரிக்கின்றன, அதேசமயம் எலக்ட்ரான் வழங்கும் குழுக்கள் அதைக் குறைக்கின்றன.` },
                { english: `**Key Reactions:** Formation of salts, esterification (reaction with alcohol), reduction to alcohols, Hell-Volhard-Zelinsky (HVZ) reaction for α-halogenation.`, tamil: `**முக்கிய வினைகள்:** உப்புகள் உருவாதல், எஸ்டராக்குதல் (ஆல்கஹாலுடன் வினை), ஆல்கஹால்களாக ஒடுக்கப்படுதல், α-ஹாலஜனேற்றத்திற்கான ஹெல்-வோல்ஹார்ட்-செலின்ஸ்கி (HVZ) வினை.` }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Acidity Order",
            titleTamil: "நீட் நிலை: அமிலத்தன்மை வரிசை",
            difficulty: 'Medium',
            problem: "Arrange the following in increasing order of their acidic strength: Phenol, Ethanol, p-Nitrophenol, p-Cresol.",
            problemTamil: "பின்வருவனவற்றை அவற்றின் அமில வலிமையின் ஏறுவரிசையில் அடுக்கவும்: ஃபீனால், எத்தனால், p-நைட்ரோஃபீனால், p-கிரெசால்.",
            solutionSteps: [
                { step: 1, explanation: "Acidity depends on the stability of the conjugate base formed after losing a proton. Phenols are more acidic than aliphatic alcohols like ethanol because the phenoxide ion is resonance-stabilized.", explanationTamil: "அமிலத்தன்மை ஒரு புரோட்டானை இழந்த பிறகு உருவாகும் இணை காரத்தின் நிலைப்புத்தன்மையைச் சார்ந்தது. ஃபீனாக்சைடு அயனி உடனிசைவால் நிலைப்படுத்தப்படுவதால், ஃபீனால்கள் எத்தனால் போன்ற அலிபாடிக் ஆல்கஹால்களை விட அதிக அமிலத்தன்மை கொண்டவை." },
                { step: 2, explanation: "Compare the phenols. The -NO₂ group is an electron-withdrawing group (-R and -I effect). It withdraws electron density from the ring and stabilizes the phenoxide ion further, thus increasing acidity.", explanationTamil: "-NO₂ தொகுதி ஒரு எலக்ட்ரான்-ஈர்க்கும் தொகுதி (-R மற்றும் -I விளைவு). இது வளையத்திலிருந்து எலக்ட்ரான் அடர்த்தியை ஈர்த்து, ஃபீனாக்சைடு அயனியை மேலும் நிலைப்படுத்துகிறது, இதனால் அமிலத்தன்மை அதிகரிக்கிறது." },
                { step: 3, explanation: "The -CH₃ group in p-cresol is an electron-donating group (+I and hyperconjugation effect). It pushes electron density into the ring, destabilizing the phenoxide ion and decreasing acidity.", explanationTamil: "p-கிரெசாலில் உள்ள -CH₃ தொகுதி ஒரு எலக்ட்ரான்-வழங்கும் தொகுதி (+I மற்றும் மீள்இணையுதல் விளைவு). இது வளையத்திற்குள் எலக்ட்ரான் அடர்த்தியைத் தள்ளி, ஃபீனாக்சைடு அயனியை நிலைப்புத்தன்மையற்றதாக்கி, அமிலத்தன்மையைக் குறைக்கிறது." },
                { step: 4, explanation: "Therefore, the acidic strength order is: Ethanol < p-Cresol < Phenol < p-Nitrophenol.", explanationTamil: "எனவே, அமில வலிமையின் வரிசை: எத்தனால் < p-கிரெசால் < ஃபீனால் < p-நைட்ரோஃபீனால்." }
            ],
            neetHack: "Electron Withdrawing Groups (EWG) like -NO₂ increase acidity. Electron Donating Groups (EDG) like -CH₃ decrease acidity.",
            neetHackTamil: "-NO₂ போன்ற எலக்ட்ரான் ஈர்க்கும் குழுக்கள் அமிலத்தன்மையை அதிகரிக்கும். -CH₃ போன்ற எலக்ட்ரான் வழங்கும் குழுக்கள் அமிலத்தன்மையைக் குறைக்கும்."
        },
        {
            title: "JEE Level: Aldol Condensation",
            titleTamil: "ஜே.இ.இ நிலை: ஆல்டால் குறுக்கம்",
            difficulty: 'Medium',
            problem: "What is the major product of the cross-Aldol condensation between ethanal and propanal?",
            problemTamil: "எத்தனால் மற்றும் புரோப்பனால் ஆகியவற்றுக்கு இடையேயான குறுக்கு-ஆல்டால் குறுக்கத்தின் முக்கிய விளைபொருள் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Cross-Aldol condensation can form four possible products: self-condensation of ethanal, self-condensation of propanal, and two cross-products.", explanationTamil: "குறுக்கு-ஆல்டால் குறுக்கம் நான்கு சாத்தியமான விளைபொருட்களை உருவாக்க முடியும்." },
                { step: 2, explanation: "The main reaction involves one molecule acting as a nucleophile (enolate) and the other as an electrophile. Here, the enolate of ethanal (⁻CH₂CHO) attacks propanal, or the enolate of propanal attacks ethanal.", explanationTamil: "முக்கிய வினையில் ஒரு மூலக்கூறு கருக்கவர் பொருளாகவும் (ஈனோலேட்) மற்றொன்று எலக்ட்ரான் கவர் பொருளாகவும் செயல்படுகிறது." },
                { step: 3, explanation: "The enolate formed from ethanal is less hindered and generally a better nucleophile than the enolate from propanal. The carbonyl carbon of ethanal is also more electrophilic (less hindered) than that of propanal.", explanationTamil: "எத்தனாலில் இருந்து உருவாகும் ஈனோலேட் குறைவான இடத்தடை கொண்டது மற்றும் புரோப்பனாலில் இருந்து உருவாகும் ஈனோலேட்டை விட சிறந்த கருக்கவர் பொருளாகும்." },
                { step: 4, explanation: "The major product usually comes from the enolate of the smaller aldehyde attacking the larger aldehyde. Here, enolate of ethanal attacks propanal.", calculation: "CH₃CH₂CHO + ⁻CH₂CHO → CH₃CH₂CH(O⁻)-CH₂CHO. After protonation → CH₃CH₂CH(OH)-CH₂CHO" },
                { step: 5, explanation: "The product is 3-Hydroxy-2-methylpentanal. Upon heating, this will dehydrate to form 2-Methylpent-2-enal.", explanationTamil: "விளைபொருள் 3-ஹைட்ராக்ஸி-2-மெத்தில்பென்டனால் ஆகும். சூடாக்கும்போது, இது நீர்நீக்கமடைந்து 2-மெத்தில்பென்ட்-2-ஈனால் ஆக மாறும்." }
            ],
            commonPitfall: "Forgetting that a cross-Aldol reaction gives a mixture of four products unless one of the aldehydes has no α-hydrogen.",
            commonPitfallTamil: "ஆல்டிஹைடுகளில் ஒன்றிற்கு α-ஹைட்ரஜன் இல்லாவிட்டால் தவிர, ஒரு குறுக்கு-ஆல்டால் வினை நான்கு விளைபொருட்களின் கலவையைக் கொடுக்கும் என்பதை மறப்பது."
        },
        {
            title: "NEET Level: Distinguishing Tests",
            titleTamil: "நீட் நிலை: வேறுபடுத்தும் சோதனைகள்",
            difficulty: 'Easy',
            problem: "How would you distinguish between pentan-2-one and pentan-3-one?",
            problemTamil: "பென்டேன்-2-ஓன் மற்றும் பென்டேன்-3-ஓன் ஆகியவற்றை எவ்வாறு வேறுபடுத்துவீர்கள்?",
            solutionSteps: [
                { step: 1, explanation: "Both are ketones and will not react with Tollens' or Fehling's reagent.", explanationTamil: "இரண்டும் கீட்டோன்கள் மற்றும் டாலன்ஸ் அல்லது ஃபெலிங் கரணியுடன் வினைபுரியாது." },
                { step: 2, explanation: "Look at their structures. Pentan-2-one (CH₃COCH₂CH₂CH₃) is a methyl ketone (it has a CH₃CO- group). Pentan-3-one (CH₃CH₂COCH₂CH₃) is not a methyl ketone.", explanationTamil: "அவற்றின் அமைப்புகளைப் பாருங்கள். பென்டேன்-2-ஓன் ஒரு மெத்தில் கீட்டோன். பென்டேன்-3-ஓன் ஒரு மெத்தில் கீட்டோன் அல்ல." },
                { step: 3, explanation: "The Iodoform test is specific for methyl ketones.", explanationTamil: "அயோடோஃபார்ம் சோதனை மெத்தில் கீட்டோன்களுக்கு உரியது." },
                { step: 4, explanation: "Treat both compounds with I₂ and NaOH (or NaOI).", calculation: "Pentan-2-one + I₂/NaOH → Yellow precipitate of iodoform (CHI₃). \\\\ Pentan-3-one + I₂/NaOH → No reaction." },
                { step: 5, explanation: "Thus, the Iodoform test can distinguish between the two isomers.", explanationTamil: "எனவே, அயோடோஃபார்ம் சோதனை இரண்டு மாற்றியங்களையும் வேறுபடுத்த முடியும்." }
            ],
            neetHack: "Always look for a CH₃-C=O group or a CH₃-CH(OH)- group when considering the Iodoform test. These are the two structures that give a positive result.",
            commonPitfall: "Thinking that only aldehydes and ketones can be distinguished. The Iodoform test is excellent for distinguishing specific types of alcohols and ketones."
        },
        {
            title: "JEE Level: Cannizzaro Reaction",
            titleTamil: "ஜே.இ.இ நிலை: கேனிசரோ வினை",
            difficulty: 'Medium',
            problem: "What are the products when formaldehyde (methanal) is treated with concentrated NaOH?",
            problemTamil: "ஃபார்மால்டிஹைடு (மெத்தனால்) அடர் NaOH உடன் வினைபுரியும்போது கிடைக்கும் விளைபொருட்கள் யாவை?",
            solutionSteps: [
                { step: 1, explanation: "Identify the substrate and reagent. Formaldehyde (HCHO) is an aldehyde with no α-hydrogen atoms. Concentrated NaOH is a strong base.", explanationTamil: "வினைபடுபொருள் மற்றும் கரணியை அடையாளம் காணவும். ஃபார்மால்டிஹைடு α-ஹைட்ரஜன் அணுக்கள் இல்லாத ஒரு ஆல்டிஹைடு. அடர் NaOH ஒரு வலிமையான காரம்." },
                { step: 2, explanation: "These are the conditions for the Cannizzaro reaction, which is a redox disproportionation.", explanationTamil: "இவை கேனிசரோ வினைக்கான நிபந்தனைகள், இது ஒரு ஆக்ஸிஜனேற்ற-ஒடுக்க விகிதச் சிதைவு வினையாகும்." },
                { step: 3, explanation: "One molecule of the aldehyde is oxidized to a carboxylic acid salt.", calculation: "HCHO → HCOO⁻Na⁺ (Sodium formate)" },
                { step: 4, explanation: "Another molecule of the aldehyde is reduced to an alcohol.", calculation: "HCHO → CH₃OH (Methanol)" },
                { step: 5, explanation: "The products are sodium formate and methanol.", explanationTamil: "விளைபொருட்கள் சோடியம் ஃபார்மேட் மற்றும் மெத்தனால் ஆகும்." }
            ],
            commonPitfall: "Applying Aldol condensation logic to an aldehyde that has no α-hydrogens.",
            neetHackTamil: "α-ஹைட்ரஜன்கள் இல்லாத ஒரு ஆல்டிஹைடுக்கு ஆல்டால் குறுக்கத் தர்க்கத்தைப் பயன்படுத்துதல்."
        },
        {
            title: "NEET Level: Esterification",
            titleTamil: "நீட் நிலை: எஸ்டராக்குதல்",
            difficulty: 'Easy',
            problem: "What are the products when acetic acid reacts with ethanol in the presence of an acid catalyst?",
            problemTamil: "அசிட்டிக் அமிலம் எத்தனால் உடன் ஒரு அமில வினைவேகமாற்றியின் முன்னிலையில் வினைபுரியும்போது கிடைக்கும் விளைபொருட்கள் யாவை?",
            solutionSteps: [
                { step: 1, explanation: "This is a classic esterification reaction (Fischer esterification).", explanationTamil: "இது ஒரு பாரம்பரிய எஸ்டராக்குதல் வினை (ஃபிஷர் எஸ்டராக்குதல்)." },
                { step: 2, explanation: "The reaction involves the -OH group from the carboxylic acid and the -H from the alcohol's -OH group being eliminated as water.", explanationTamil: "இந்த வினையில் கார்பாக்சிலிக் அமிலத்திலிருந்து -OH குழுவும், ஆல்கஹாலின் -OH குழுவிலிருந்து -H உம் நீராக நீக்கப்படுகிறது." },
                { step: 3, explanation: "The remaining parts of the molecules join to form an ester.", calculation: "CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O" },
                { step: 4, explanation: "The products are ethyl acetate (an ester) and water.", explanationTamil: "விளைபொருட்கள் எத்தில் அசிட்டேட் (ஒரு எஸ்டர்) மற்றும் நீர் ஆகும்." }
            ]
        }
    ],
    mcqs: [
        { question: "Which of the following is most acidic?", options: ["A. Phenol", "B. Ethanol", "C. Water", "D. p-Cresol"], answer: "A. Phenol", explanation: "Phenol is more acidic than alcohols and water because its conjugate base (phenoxide) is stabilized by resonance.", neetFrequency: 5 },
        { question: "Lucas test is used to distinguish between:", options: ["A. Aldehydes and Ketones", "B. 1°, 2°, and 3° Alcohols", "C. Alkenes and Alkanes", "D. Amines"], answer: "B. 1°, 2°, and 3° Alcohols", explanation: "The Lucas test (conc. HCl + anhyd. ZnCl₂) relies on the rate of formation of alkyl chlorides, which is fastest for tertiary alcohols.", neetFrequency: 4 },
        { question: "Which compound gives a positive Iodoform test?", options: ["A. Pentan-3-one", "B. Propanal", "C. Methanol", "D. Ethanol"], answer: "D. Ethanol", explanation: "Ethanol can be oxidized to acetaldehyde (a methyl aldehyde), which gives a positive iodoform test. Pentan-3-one is not a methyl ketone.", neetFrequency: 4 },
        { question: "The reaction of an aldehyde with no α-hydrogen with concentrated alkali is known as:", options: ["A. Aldol condensation", "B. Cannizzaro reaction", "C. Wurtz reaction", "D. Williamson synthesis"], answer: "B. Cannizzaro reaction", explanation: "The Cannizzaro reaction is a disproportionation reaction of aldehydes lacking alpha-hydrogens.", neetFrequency: 5 },
        { question: "The Williamson synthesis is used for the preparation of:", options: ["A. Alcohols", "B. Ethers", "C. Aldehydes", "D. Carboxylic acids"], answer: "B. Ethers", explanation: "It involves the reaction of an alkyl halide with a sodium alkoxide.", neetFrequency: 3 },
        { question: "Which of the following reagents can distinguish between an aldehyde and a ketone?", options: ["A. Fehling's solution", "B. Lucas reagent", "C. Grignard reagent", "D. Sodium bisulphite"], answer: "A. Fehling's solution", explanation: "Aldehydes are easily oxidized and give a positive test with Fehling's solution (red ppt), while ketones do not.", neetFrequency: 5 },
        { question: "The product of the reaction between a carboxylic acid and an alcohol is an:", options: ["A. Ether", "B. Aldehyde", "C. Ester", "D. Anhydride"], answer: "C. Ester", explanation: "This reaction is known as esterification.", neetFrequency: 2 },
        { question: "Which of the following is the strongest acid?", options: ["A. Formic acid", "B. Acetic acid", "C. Propanoic acid", "D. Butanoic acid"], answer: "A. Formic acid", explanation: "Alkyl groups (+I effect) decrease the acidity of carboxylic acids. Formic acid has no alkyl group, making it the strongest among the simple alkanoic acids.", neetFrequency: 4 },
        { question: "The reaction of phenol with chloroform in the presence of NaOH is known as:", options: ["A. Kolbe's reaction", "B. Reimer-Tiemann reaction", "C. Williamson synthesis", "D. Cannizzaro reaction"], answer: "B. Reimer-Tiemann reaction", explanation: "The Reimer-Tiemann reaction introduces a -CHO group onto the benzene ring of phenol, primarily at the ortho position.", neetFrequency: 3 },
        { question: "The Clemmensen reduction reduces a carbonyl group to a:", options: ["A. -CH₂- group", "B. -CH(OH)- group", "C. -COOH group", "D. -CN group"], answer: "A. -CH₂- group", explanation: "Both Clemmensen (Zn-Hg/HCl) and Wolff-Kishner reductions are used to convert a C=O group into a CH₂ group.", neetFrequency: 3 },
        { question: "Which of the following does not have an sp² hybridized carbon?", options: ["A. Acetaldehyde", "B. Acetone", "C. Acetic acid", "D. Diethyl ether"], answer: "D. Diethyl ether", explanation: "Ethers (R-O-R') contain only sp³ hybridized carbons.", neetFrequency: 2 },
        { question: "The boiling points of alcohols are higher than those of corresponding alkanes due to:", options: ["A. Higher molecular weight", "B. Van der Waals forces", "C. Hydrogen bonding", "D. Dipole-dipole interactions"], answer: "C. Hydrogen bonding", explanation: "Intermolecular hydrogen bonding in alcohols requires significant energy to overcome, leading to higher boiling points.", neetFrequency: 4 },
        { question: "The compound formed when ethanol is heated with concentrated H₂SO₄ at 443 K is:", options: ["A. Diethyl ether", "B. Ethene", "C. Ethane", "D. Ethyl hydrogen sulphate"], answer: "B. Ethene", explanation: "This is an example of acid-catalyzed dehydration of an alcohol to form an alkene.", neetFrequency: 3 },
        { question: "Phenol is less acidic than:", options: ["A. Ethanol", "B. o-Nitrophenol", "C. o-Cresol", "D. Water"], answer: "B. o-Nitrophenol", explanation: "The electron-withdrawing nitro group (-NO₂) increases the acidity of phenol.", neetFrequency: 4 },
        { question: "Which reagent is used in the Wolff-Kishner reduction?", options: ["A. Zn-Hg / HCl", "B. H₂ / Pd", "C. LiAlH₄", "D. Hydrazine / KOH"], answer: "D. Hydrazine / KOH", explanation: "Wolff-Kishner reduction uses hydrazine (NH₂NH₂) and a strong base like KOH in a high-boiling solvent.", neetFrequency: 2 },
        { question: "The reaction of Grignard reagent with formaldehyde followed by hydrolysis gives a:", options: ["A. Primary alcohol", "B. Secondary alcohol", "C. Tertiary alcohol", "D. Carboxylic acid"], answer: "A. Primary alcohol", explanation: "Grignard reagents with formaldehyde give primary alcohols. With other aldehydes, they give secondary alcohols, and with ketones, they give tertiary alcohols.", neetFrequency: 5 },
        { question: "The oxidation of toluene with chromyl chloride (Etard reaction) gives:", options: ["A. Benzoic acid", "B. Benzyl alcohol", "C. Benzaldehyde", "D. Benzene"], answer: "C. Benzaldehyde", explanation: "The Etard reaction is a specific method for the partial oxidation of methyl groups on a benzene ring to an aldehyde.", neetFrequency: 3 },
        { question: "Carboxylic acids have higher boiling points than corresponding alcohols because of:", options: ["A. Higher molecular weight", "B. Formation of intermolecular dimers", "C. Stronger C=O bond", "D. Weaker O-H bond"], answer: "B. Formation of intermolecular dimers", explanation: "Carboxylic acids can form stable dimers through two hydrogen bonds, which significantly increases their effective molecular weight and boiling point.", neetFrequency: 4 },
        { question: "Which of the following will not undergo Aldol condensation?", options: ["A. Ethanal", "B. Propanal", "C. Benzaldehyde", "D. Propanone"], answer: "C. Benzaldehyde", explanation: "Aldol condensation requires the presence of at least one α-hydrogen. Benzaldehyde has no α-hydrogens.", neetFrequency: 4 },
        { question: "The common name for methanoic acid is:", options: ["A. Acetic acid", "B. Formic acid", "C. Butyric acid", "D. Oxalic acid"], answer: "B. Formic acid", explanation: "Methanoic acid (HCOOH) is commonly known as formic acid, originally derived from ants (formica in Latin).", neetFrequency: 1 },
        { question: "The reaction to prepare aspirin involves:", options: ["A. Phenol and acetic anhydride", "B. Salicylic acid and acetic anhydride", "C. Benzyl alcohol and acetic acid", "D. Phenol and methanol"], answer: "B. Salicylic acid and acetic anhydride", explanation: "Aspirin (acetylsalicylic acid) is prepared by the acetylation of the hydroxyl group of salicylic acid.", neetFrequency: 2 },
        { question: "On heating with conc. H₂SO₄, diethyl ether gives:", options: ["A. Ethanol", "B. Ethene", "C. Ethane", "D. Water"], answer: "B. Ethene", explanation: "This is a dehydration reaction. Each ethyl group loses water to form ethene. 2CH₃CH₂OH → CH₂=CH₂ + H₂O", neetFrequency: 3 },
        { question: "The end product of the reaction: CH₃MgBr + CO₂ → A --(H₃O⁺)--> B is:", options: ["A. Acetic acid", "B. Formic acid", "C. Acetone", "D. Acetaldehyde"], answer: "A. Acetic acid", explanation: "Grignard reagents react with carbon dioxide (dry ice) followed by hydrolysis to form carboxylic acids. Here, CH₃MgBr forms acetic acid.", neetFrequency: 4 },
        { question: "What is the hybridisation of the carbonyl carbon in aldehydes and ketones?", options: ["A. sp", "B. sp²", "C. sp³", "D. dsp²"], answer: "B. sp²", explanation: "The carbonyl carbon forms three sigma bonds and one pi bond, which corresponds to sp² hybridization and a trigonal planar geometry.", neetFrequency: 2 },
        { question: "Which of the following is also known as carbolic acid?", options: ["A. Acetic acid", "B. Benzoic acid", "C. Phenol", "D. Oxalic acid"], answer: "C. Phenol", explanation: "Phenol (C₆H₅OH) is also commonly known as carbolic acid.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "Phenol is more acidic than ethanol.", reason: "The phenoxide ion is stabilized by resonance.", answer: "A", explanation: "Assertion is true. Reason is also true and correctly explains the assertion. Delocalization of the negative charge on the phenoxide ion makes it more stable than the ethoxide ion, thus making phenol a stronger acid.", neetFrequency: 5 },
        { assertion: "Aldehydes are more reactive than ketones towards nucleophilic addition.", reason: "The carbonyl carbon in aldehydes is more electrophilic and less sterically hindered than in ketones.", answer: "A", explanation: "Both assertion and reason are true, and the reason correctly explains the assertion. Ketones have two alkyl groups which donate electrons (reducing electrophilicity) and cause more steric hindrance.", neetFrequency: 4 },
        { assertion: "Formaldehyde undergoes Cannizzaro reaction.", reason: "Formaldehyde has no α-hydrogen atoms.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct condition for the Cannizzaro reaction.", neetFrequency: 4 },
        { assertion: "The boiling point of diethyl ether is much lower than that of butan-1-ol.", reason: "Alcohols form intermolecular hydrogen bonds, while ethers do not.", answer: "A", explanation: "The assertion is true. Both have the same molecular mass, but the boiling point of butan-1-ol is much higher. The reason is true and is the correct explanation for this difference.", neetFrequency: 3 },
        { assertion: "Carboxylic acids are stronger acids than phenols.", reason: "The carboxylate ion is more resonance stabilized than the phenoxide ion.", answer: "A", explanation: "Both assertion and reason are true. In the carboxylate ion, the negative charge is delocalized over two equally electronegative oxygen atoms, which is a more stable arrangement than in the phenoxide ion where the charge is delocalized over one oxygen and less electronegative carbon atoms.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Aldol Condensation", "(b) Cannizzaro Reaction", "(c) Reimer-Tiemann Reaction", "(d) Williamson Synthesis"], column2: ["(p) Preparation of ethers", "(q) Formation of salicylaldehyde", "(r) Aldehyde with α-hydrogen", "(s) Aldehyde with no α-hydrogen"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching name reactions with their substrates or products." },
        { column1: ["(a) Tollen's Test", "(b) Lucas Test", "(c) Iodoform Test", "(d) Ferric Chloride Test"], column2: ["(p) Distinction of 1°, 2°, 3° alcohols", "(q) Presence of phenolic -OH group", "(r) Presence of an aldehyde", "(s) Presence of a methyl ketone"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching chemical tests with the functional groups they detect." },
        { column1: ["(a) Carboxylic Acid", "(b) Phenol", "(c) Alcohol", "(d) Aldehyde"], column2: ["(p) -ol", "(q) -oic acid", "(r) -al", "(s) -OH group"], answer: "a-q, b-s, c-p,s; d-r", explanation: "Matching functional groups with their IUPAC suffixes or descriptions. Both Phenol and Alcohol have -OH group, but are named differently." },
        { column1: ["(a) Reduction with LiAlH₄", "(b) Oxidation with PCC", "(c) Reaction with Grignard reagent", "(d) Dehydration with H₂SO₄"], column2: ["(p) Forms an alcohol", "(q) Forms an alkene", "(r) Forms an aldehyde (from 1° alcohol)", "(s) Forms an alcohol"], answer: "a-p,s; b-r; c-p,s; d-q", explanation: "Both LiAlH₄ and Grignard reagent reactions lead to alcohols. PCC oxidizes primary alcohols to aldehydes. Dehydration forms alkenes." },
        { column1: ["(a) Most acidic", "(b) Highest boiling point", "(c) Most reactive to nucleophiles", "(d) Gives silver mirror test"], column2: ["(p) Butanal", "(q) Butan-1-ol", "(r) Butanoic acid"], answer: "a-r, b-r, c-p, d-p", explanation: "Butanoic acid is most acidic and has the highest boiling point (due to dimer formation). Butanal (aldehyde) is most reactive to nucleophiles and gives the Tollens' test." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [
        "The properties of oxygen-containing compounds are dictated by their functional groups: -OH (alcohols/phenols), -O- (ethers), -CHO (aldehydes), >C=O (ketones), -COOH (carboxylic acids).",
        "Phenols and Carboxylic acids are acidic due to resonance stabilization of their conjugate bases.",
        "Aldehydes and ketones undergo nucleophilic addition, while carboxylic acids and their derivatives undergo nucleophilic substitution.",
        "Key distinguishing tests like Tollens', Fehling's, and Lucas tests are based on the different reactivities of these functional groups."
    ],
    mnemonics: [
        { text: "Remember the oxidation ladder: Alcohol → Aldehyde/Ketone → Carboxylic Acid. Strong oxidizing agents go all the way, while mild ones (like PCC) stop at the aldehyde/ketone stage.", tamil: "ஆக்ஸிஜனேற்ற ஏணியை நினைவில் கொள்க: ஆல்கஹால் → ஆல்டிஹைடு/கீட்டோன் → கார்பாக்சிலிக் அமிலம். வலிமையான ஆக்ஸிஜனேற்றிகள் இறுதி வரை செல்லும், மென்மையானவை (PCC போன்றவை) ஆல்டிஹைடு/கீட்டோன் நிலையில் நின்றுவிடும்." }
    ],
    neetTips: [
        { text: "Questions comparing the acidity or basicity of different organic compounds are very common. Always analyze the stability of the conjugate acid/base using electronic effects (+I, -I, +R, -R).", tamil: "வெவ்வேறு கரிமச் சேர்மங்களின் அமிலத்தன்மை அல்லது காரத்தன்மையை ஒப்பிடும் கேள்விகள் மிகவும் பொதுவானவை. எப்போதும் மின்னணு விளைவுகளைப் பயன்படுத்தி இணை அமிலம்/காரத்தின் நிலைப்புத்தன்மையை பகுப்பாய்வு செய்யவும்." },
        { text: "Make a chart of all the name reactions in this chapter (Aldol, Cannizzaro, Williamson, Reimer-Tiemann, Kolbe's, etc.) with the reactant, reagent, and product. This is essential for quick recall.", tamil: "இந்த அத்தியாயத்தில் உள்ள அனைத்து பெயர் வினைகளையும் (ஆல்டால், கேனிசரோ, வில்லியம்சன், ரீமர்-டீமன், கோல்பே போன்றவை) வினைபடுபொருள், கரணி மற்றும் விளைபொருளுடன் ஒரு விளக்கப்படத்தை உருவாக்கவும். இது விரைவான நினைவுகூரலுக்கு அவசியம்." }
    ],
    studentTip: {
        english: "This unit covers a huge part of organic chemistry. Don't get overwhelmed. Tackle one functional group at a time, understand its key reactions, and then move to the next. You'll see patterns emerge.",
        tamil: "இந்த அலகு கரிம வேதியியலின் ஒரு பெரிய பகுதியை உள்ளடக்கியது. சோர்வடைய வேண்டாம். ஒரு நேரத்தில் ஒரு வினைசெயல் தொகுதியைக் கையாளவும், அதன் முக்கிய வினைகளைப் புரிந்துகொண்டு, பின்னர் அடுத்ததிற்குச் செல்லவும். நீங்கள் வடிவங்கள் வெளிப்படுவதைக் காண்பீர்கள்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why ketones are generally less reactive than aldehydes towards nucleophiles. Consider both electronic and steric factors.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: கீட்டோன்கள் பொதுவாக ஆல்டிஹைடுகளை விட கருக்கவர் பொருட்களுக்கு ஏன் குறைவாக வினைபுரிகின்றன? மின்னணு மற்றும் இடத்தடை காரணிகள் இரண்டையும் கருத்தில் கொள்ளுங்கள்."
    },
    nextChapter: {
        title: "Organic Compounds Containing Nitrogen",
        titleTamil: "நைட்ரஜன் கொண்ட கரிமச் சேர்மங்கள்"
    },
    validationReport: []
};

    