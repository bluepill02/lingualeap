
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingHalogens: NeetModule = {
    id: 'neet-chemistry-organic-compounds-containing-halogens',
    title: 'Chemistry - Organic Compounds Containing Halogens (ஹாலோஜன் கொண்ட கரிமச் சேர்மங்கள்)',
    chapter: 'Organic Compounds Containing Halogens',
    subject: 'Chemistry',
    learningObjectives: [
        "Classify haloalkanes and haloarenes based on the halogen-bearing carbon's hybridization.",
        "Master the IUPAC nomenclature of halogen compounds.",
        "Describe the methods of preparation of haloalkanes (from alcohols, alkanes, alkenes) and haloarenes (from benzene).",
        "Analyze the physical properties like boiling point and solubility.",
        "Explain the mechanisms of nucleophilic substitution reactions (SN1 and SN2), including stereochemical aspects.",
        "Understand the competition between substitution and elimination reactions (E1 and E2).",
        "Explain the lower reactivity of haloarenes towards nucleophilic substitution and their electrophilic substitution reactions."
    ],
    prerequisites: [
        "Hydrocarbons, especially alkanes and benzene.",
        "Basic principles of organic chemistry, including IUPAC nomenclature, electronic effects, and stereochemistry."
    ],
    conceptOverview: "This chapter introduces the chemistry of organic compounds containing halogen atoms (F, Cl, Br, I). We study two main classes: haloalkanes (where the halogen is attached to an alkyl group) and haloarenes (where it's attached to an aryl group like benzene). A major focus of this chapter is on their characteristic reactions. Haloalkanes are highly versatile and undergo nucleophilic substitution (SN1 and SN2 pathways) and elimination reactions, which are fundamental concepts in organic synthesis. Haloarenes are less reactive towards nucleophilic substitution but readily undergo electrophilic substitution on the benzene ring.",
    tamilConnection: "பூச்சிக்கொல்லிகள் முதல் மருந்துப் பொருட்கள் வரை, ஹாலோஜன் கொண்ட கரிமச் சேர்மங்கள் பல பயன்பாடுகளைக் கொண்டுள்ளன. ஒரு வினை SN1 பாதையில் செல்லுமா அல்லது SN2 பாதையில் செல்லுமா என்பதை தீர்மானிக்கும் காரணிகளைப் புரிந்துகொள்வது, கரிம வேதியியலின் முக்கிய அம்சமாகும். இந்த அத்தியாயம் அந்த வினை வழிமுறைகளை விரிவாக ஆராய்கிறது.",
    culturalContext: "DDT was once widely used in India, including in regions like Tamil Nadu, for malaria control by killing mosquitoes. While effective, its environmental persistence led to a ban. DDT is a well-known haloarene. Studying the properties of such compounds helps us understand both their uses and their environmental impact.",
    syllabusMapping: [
        {
            topic: "Haloalkanes and Haloarenes",
            tnBoardChapter: "12th Std Chemistry - Vol 2, Chapter 11: Hydroxy Compounds and Ethers (includes some related prep)",
            ncertReference: "Class 12 Chemistry - Part 2, Chapter 10: Haloalkanes and Haloarenes",
            notes: "Very important for understanding reaction mechanisms. The distinction between SN1 and SN2 reactions (stereochemistry, kinetics, substrate effects) is a very high-yield topic for NEET.",
            mappingDescription: '12th Std Chemistry - Vol 2, Chapter 11 maps to NEET Chemistry Unit 23'
        }
    ],
    conceptNotes: [
        {
            heading: { english: "1. Classification and Nomenclature", tamil: "1. வகைப்பாடு மற்றும் பெயரிடுதல்" },
            content: [
                { english: "Haloalkanes are classified as primary (1°), secondary (2°), or tertiary (3°) depending on whether the halogen is attached to a primary, secondary, or tertiary carbon atom.", tamil: "ஹாலோஆல்கேன்கள், ஹாலோஜன் ஒரு முதன்மை, இரண்டாம் நிலை, அல்லது மூன்றாம் நிலை கார்பன் அணுவுடன் இணைக்கப்பட்டுள்ளதா என்பதைப் பொறுத்து முதன்மை (1°), இரண்டாம் நிலை (2°), அல்லது மூன்றாம் நிலை (3°) என வகைப்படுத்தப்படுகின்றன." },
                { english: "Haloarenes are compounds in which the halogen is directly bonded to an sp² hybridized carbon atom of an aromatic ring.", tamil: "ஹாலோஅரீன்கள் என்பவை, ஹாலோஜன் நேரடியாக ஒரு அரோமாட்டிக் வளையத்தின் sp² இனக்கலப்பு கார்பன் அணுவுடன் பிணைக்கப்பட்டிருக்கும் சேர்மங்கள் ஆகும்." }
            ]
        },
        {
            heading: { english: "2. Nucleophilic Substitution Reactions (கருக்கவர் பொருள் பதிலீட்டு வினைகள்)", tamil: "2. கருக்கவர் பொருள் பதிலீட்டு வினைகள்" },
            content: [
                { english: "A reaction in which a stronger nucleophile displaces a weaker nucleophile (halide ion). There are two main mechanisms:", tamil: "ஒரு வலிமையான கருக்கவர் பொருள் ஒரு பலவீனமான கருக்கவர் பொருளை (ஹாலைடு அயனி) இடப்பெயர்ச்சி செய்யும் ஒரு வினை. இரண்டு முக்கிய வினைவழிமுறைகள் உள்ளன:" },
                {
                    english: "**SN2 (Substitution Nucleophilic Bimolecular):**\n*   A single-step reaction. The attack of the nucleophile and the departure of the leaving group occur simultaneously.\n*   Rate = k[Alkyl Halide][Nucleophile] (Second-order kinetics).\n*   Leads to **inversion of configuration** (Walden inversion).\n*   Reactivity order of alkyl halides: 1° > 2° > 3° (due to steric hindrance).",
                    tamil: "**SN2 (பதிலீட்டு கருக்கவர் இருமூலக்கூறு வினை):**\n*   ஒரு-படி வினை. கருக்கவர் பொருளின் தாக்குதலும், வெளியேறும் குழுவின் வெளியேற்றமும் ஒரே நேரத்தில் நிகழும்.\n*   வினைவேகம் = k[அல்கைல் ஹாலைடு][கருக்கவர் பொருள்] (இரண்டாம் வகை இயக்கவியல்).\n*   **அமைப்புத் தலைகீழாதலுக்கு** வழிவகுக்கிறது (வால்டன் தலைகீழாதல்).\n*   அல்கைல் ஹாலைடுகளின் வினைத்திறன் வரிசை: 1° > 2° > 3° (இடத்தடை விளைவு காரணமாக)."
                },
                {
                    english: "**SN1 (Substitution Nucleophilic Unimolecular):**\n*   A two-step reaction. The first step is the slow formation of a carbocation intermediate. The second step is the fast attack of the nucleophile on the carbocation.\n*   Rate = k[Alkyl Halide] (First-order kinetics).\n*   Leads to **racemization** (formation of a mixture of enantiomers).\n*   Reactivity order of alkyl halides: 3° > 2° > 1° (due to stability of the carbocation).",
                    tamil: "**SN1 (பதிலீட்டு கருக்கவர் ஒருமூலக்கூறு வினை):**\n*   ஒரு இரண்டு-படி வினை. முதல் படி கார்போகேட்டயன் இடைநிலையின் மெதுவான உருவாக்கம். இரண்டாவது படி கார்போகேட்டயன் மீது கருக்கவர் பொருளின் வேகமான தாக்குதல்.\n*   வினைவேகம் = k[அல்கைல் ஹாலைடு] (முதல் வகை இயக்கவியல்).\n*   **இனக்கலவை உருவாதலுக்கு** வழிவகுக்கிறது (எதிர் ஒளி மாற்றியங்களின் கலவை உருவாதல்).\n*   அல்கைல் ஹாலைடுகளின் வினைத்திறன் வரிசை: 3° > 2° > 1° (கார்போகேட்டயனின் நிலைப்புத்தன்மை காரணமாக)."
                }
            ]
        },
        {
            heading: { english: "3. Elimination Reactions (நீக்கல் வினைகள்)", tamil: "3. நீக்கல் வினைகள்" },
            content: [
                { english: "When a haloalkane with a β-hydrogen is heated with an alcoholic solution of a strong base (like KOH), it undergoes dehydrohalogenation to form an alkene.", tamil: "ஒரு β-ஹைட்ரஜனைக் கொண்ட ஒரு ஹாலோஆல்கேன், ஒரு வலிமையான காரத்தின் (KOH போன்ற) ஆல்கஹால் கரைசலுடன் சூடுபடுத்தும்போது, அது டிஹைட்ரோஹாலஜனேற்றத்திற்கு உட்பட்டு ஒரு ஆல்கீனை உருவாக்குகிறது." },
                { english: "**Saytzeff's Rule (சேட்செஃப் விதி):** In dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the double-bonded carbon atoms (i.e., the more substituted, more stable alkene).", tamil: "**சேட்செஃப் விதி:** டிஹைட்ரோஹாலஜனேற்ற வினைகளில், இரட்டைப் பிணைப்பு கார்பன் அணுக்களுடன் அதிக எண்ணிக்கையிலான அல்கைல் குழுக்கள் இணைக்கப்பட்டுள்ள ஆல்கீன் (அதாவது, அதிக பதிலீடு செய்யப்பட்ட, அதிக நிலையான ஆல்கீன்) விரும்பத்தக்க விளைபொருளாகும்." }
            ]
        },
        {
            heading: { english: "4. Reactions of Haloarenes", tamil: "4. ஹாலோஅரீன்களின் வினைகள்" },
            content: [
                { english: "Haloarenes are much less reactive than haloalkanes towards nucleophilic substitution. This is due to:\n1.  Resonance effect (C-Cl bond acquires partial double bond character).\n2.  Difference in hybridization of the carbon atom (sp² in haloarene, sp³ in haloalkane).\n3.  Instability of the phenyl cation.", tamil: "ஹாலோஅரீன்கள், ஹாலோஆல்கேன்களை விட கருக்கவர் பொருள் பதிலீட்டு வினைகளுக்கு மிகவும் குறைந்த வினைத்திறன் கொண்டவை. இதற்குக் காரணம்:\n1.  உடனிசைவு விளைவு (C-Cl பிணைப்பு பகுதி இரட்டைப் பிணைப்பு தன்மையைப் பெறுகிறது).\n2.  கார்பன் அணுவின் இனக்கலப்பில் வேறுபாடு (ஹாலோஅரீனில் sp², ஹாலோஆல்கேனில் sp³).\n3.  ஃபினைல் கேட்டயனின் நிலைப்புத்தன்மையின்மை." },
                { english: "They undergo electrophilic substitution reactions (halogenation, nitration, etc.). Halogens are deactivating but are ortho, para-directing.", tamil: "அவை எலக்ட்ரான் கவர் பொருள் பதிலீட்டு வினைகளுக்கு (ஹாலஜனேற்றம், நைட்ரோ ஏற்றம் போன்றவை) உட்படுகின்றன. ஹாலஜன்கள் கிளர்வு நீக்கும் பண்புடையவை என்றாலும் ஆர்த்தோ, பாரா-இயக்குநர்களாகும்." }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: SN1 vs SN2 Reactivity",
            titleTamil: "நீட் நிலை: SN1 vs SN2 வினைத்திறன்",
            difficulty: 'Medium',
            problem: "Arrange the following compounds in increasing order of their reactivity towards SN2 reaction: 2-Bromo-2-methylbutane, 1-Bromopentane, 2-Bromopentane.",
            problemTamil: "பின்வரும் சேர்மங்களை SN2 வினைக்கான அவற்றின் வினைத்திறன் ஏறுவரிசையில் அடுக்கவும்: 2-புரோமோ-2-மெத்தில்பியூட்டேன், 1-புரோமோபென்டேன், 2-புரோமோபென்டேன்.",
            solutionSteps: [
                { step: 1, explanation: "SN2 reaction reactivity depends on steric hindrance. The less crowded the carbon atom bearing the halogen, the faster the reaction.", explanationTamil: "SN2 வினையின் வினைத்திறன் இடத்தடை விளைவைச் சார்ந்தது. ஹாலோஜனைக் கொண்ட கார்பன் அணு எவ்வளவு குறைவாக நெரிசலாக உள்ளதோ, அவ்வளவு வேகமாக வினை நிகழும்." },
                { step: 2, explanation: "Classify each compound. 1-Bromopentane is a primary (1°) alkyl halide. 2-Bromopentane is a secondary (2°) alkyl halide. 2-Bromo-2-methylbutane is a tertiary (3°) alkyl halide.", explanationTamil: "ஒவ்வொரு சேர்மத்தையும் வகைப்படுத்தவும். 1-புரோமோபென்டேன் ஒரு முதன்மை (1°) அல்கைல் ஹாலைடு. 2-புரோமோபென்டேன் ஒரு இரண்டாம் நிலை (2°) அல்கைல் ஹாலைடு. 2-புரோமோ-2-மெத்தில்பியூட்டேன் ஒரு மூன்றாம் நிலை (3°) அல்கைல் ஹாலைடு." },
                { step: 3, explanation: "The order of reactivity for SN2 is 1° > 2° > 3°.", explanationTamil: "SN2 க்கான வினைத்திறன் வரிசை 1° > 2° > 3°." },
                { step: 4, explanation: "Therefore, the increasing order of reactivity is: 2-Bromo-2-methylbutane < 2-Bromopentane < 1-Bromopentane.", explanationTamil: "எனவே, வினைத்திறனின் ஏறுவரிசை: 2-புரோமோ-2-மெத்தில்பியூட்டேன் < 2-புரோமோபென்டேன் < 1-புரோமோபென்டேன்." }
            ],
            neetHack: "For substitution reactions, always first identify the alkyl halide as 1°, 2°, or 3°. This will almost always tell you the preferred mechanism (SN2 for 1°, SN1 for 3°, both for 2°).",
            neetHackTamil: "பதிலீட்டு வினைகளுக்கு, எப்போதும் முதலில் அல்கைல் ஹாலைடை 1°, 2°, அல்லது 3° என அடையாளம் காணவும். இது கிட்டத்தட்ட எப்போதும் விரும்பத்தக்க வினைவழிமுறையை உங்களுக்குச் சொல்லும் (1° க்கு SN2, 3° க்கு SN1, 2° க்கு இரண்டும்)."
        },
        {
            title: "JEE Level: Stereochemistry of SN2",
            titleTamil: "ஜே.இ.இ நிலை: SN2-இன் முப்பரிமாண வேதியியல்",
            difficulty: 'Medium',
            problem: "What is the product when (R)-2-Bromobutane is treated with aqueous KOH? What is its stereochemistry?",
            problemTamil: "(R)-2-புரோமோபியூட்டேன் நீரிய KOH உடன் வினைபுரியும்போது கிடைக்கும் விளைபொருள் என்ன? அதன் முப்பரிமாண வேதியியல் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the reaction. Aqueous KOH provides the nucleophile OH⁻, and the substrate is a secondary alkyl halide. This points towards a substitution reaction. Since OH⁻ is a strong nucleophile and water is a polar protic solvent, SN2 is significant.", explanationTamil: "வினையை அடையாளம் காணவும். நீரிய KOH கருக்கவர் பொருள் OH⁻ ஐ வழங்குகிறது, மற்றும் வினைபடுபொருள் ஒரு இரண்டாம் நிலை அல்கைல் ஹாலைடு. இது ஒரு பதிலீட்டு வினையை சுட்டிக்காட்டுகிறது. OH⁻ ஒரு வலிமையான கருக்கவர் பொருள் என்பதால், SN2 வினை நிகழும்." },
                { step: 2, explanation: "Recall the stereochemical outcome of an SN2 reaction. SN2 reactions proceed with inversion of configuration (Walden Inversion).", explanationTamil: "ஒரு SN2 வினையின் முப்பரிமாண வேதியியல் விளைவை நினைவுகூர்க. SN2 வினைகள் அமைப்புத் தலைகீழாதலுடன் (வால்டன் தலைகீழாதல்) நிகழ்கின்றன." },
                { step: 3, explanation: "The nucleophile (OH⁻) attacks the chiral carbon from the side opposite to the leaving group (Br⁻).", explanationTamil: "கருக்கவர் பொருள் (OH⁻) வெளியேறும் குழுவிற்கு (Br⁻) எதிர் பக்கத்திலிருந்து கைரல் கார்பனைத் தாக்குகிறது." },
                { step: 4, explanation: "This means if the starting material is the (R)-enantiomer, the product will be the (S)-enantiomer.", explanationTamil: "இதன் பொருள், ஆரம்பப் பொருள் (R)-எதிர் ஒளி மாற்றியமாக இருந்தால், விளைபொருள் (S)-எதிர் ஒளி மாற்றியமாக இருக்கும்." },
                { step: 5, explanation: "The product is (S)-Butan-2-ol.", explanationTamil: "விளைபொருள் (S)-பியூட்டேன்-2-ஆல் ஆகும்." }
            ],
            commonPitfall: "Forgetting that SN2 causes complete inversion. SN1 reactions lead to racemization (a mix of R and S products).",
            commonPitfallTamil: "SN2 முழுமையான தலைகீழாதலை ஏற்படுத்துகிறது என்பதை மறப்பது. SN1 வினைகள் இனக்கலவைக்கு (R மற்றும் S விளைபொருட்களின் கலவை) வழிவகுக்கின்றன."
        },
        {
            title: "NEET Level: Elimination Reaction (Saytzeff's Rule)",
            titleTamil: "நீட் நிலை: நீக்கல் வினை (சேட்செஃப் விதி)",
            difficulty: 'Medium',
            problem: "What is the major product when 2-bromopentane is treated with alcoholic KOH?",
            problemTamil: "2-புரோமோபென்டேன் ஆல்கஹாலிக் KOH உடன் வினைபுரியும்போது உருவாகும் முக்கிய விளைபொருள் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the reaction. An alkyl halide treated with a strong base in an alcoholic medium indicates an elimination reaction (dehydrohalogenation).", explanationTamil: "வினையை அடையாளம் காணவும். ஒரு அல்கைல் ஹாலைடு ஒரு ஆல்கஹால் ஊடகத்தில் ஒரு வலிமையான காரத்துடன் வினைபுரிவது ஒரு நீக்கல் வினையை (டிஹைட்ரோஹாலஜனேற்றம்) குறிக்கிறது." },
                { step: 2, explanation: "Identify the β-hydrogens. The bromine is on C2. The adjacent carbons are C1 and C3. There are β-hydrogens on both.", explanationTamil: "β-ஹைட்ரஜன்களை அடையாளம் காணவும். புரோமின் C2 இல் உள்ளது. அருகிலுள்ள கார்பன்கள் C1 மற்றும் C3. இரண்டிலும் β-ஹைட்ரஜன்கள் உள்ளன." },
                { step: 3, explanation: "Elimination of H from C1 gives Pent-1-ene. Elimination of H from C3 gives Pent-2-ene.", explanationTamil: "C1-இலிருந்து H-ஐ நீக்குவது பென்ட்-1-ஈனைக் கொடுக்கிறது. C3-இலிருந்து H-ஐ நீக்குவது பென்ட்-2-ஈனைக் கொடுக்கிறது." },
                { step: 4, explanation: "Apply Saytzeff's rule: the more substituted (more stable) alkene is the major product.", explanationTamil: "சேட்செஃப் விதியைப் பயன்படுத்தவும்: அதிக பதிலீடு செய்யப்பட்ட (அதிக நிலையான) ஆல்கீன் முக்கிய விளைபொருளாகும்." },
                { step: 5, explanation: "Pent-2-ene is a disubstituted alkene (two alkyl groups on the double bond carbons), while Pent-1-ene is monosubstituted. Therefore, Pent-2-ene is the major product.", explanationTamil: "பென்ட்-2-ஈன் ஒரு இருபதிலீடு செய்யப்பட்ட ஆல்கீன், அதேசமயம் பென்ட்-1-ஈன் ஒரு ஒற்றை பதிலீடு செய்யப்பட்டது. எனவே, பென்ட்-2-ஈன் முக்கிய விளைபொருளாகும்." }
            ],
            neetHack: "Just look at the carbons next to the halogen. The elimination that forms a double bond with more carbon 'stuff' attached to it is the major product.",
            commonPitfall: "Confusing alcoholic KOH (favors elimination) with aqueous KOH (favors substitution)."
        },
        {
            title: "JEE Level: Reactivity of Haloarenes",
            titleTamil: "ஜே.இ.இ நிலை: ஹாலோஅரீன்களின் வினைத்திறன்",
            difficulty: 'Medium',
            problem: "Arrange the following compounds in order of increasing reactivity towards electrophilic substitution: Chlorobenzene, Benzene, 2,4-Dinitrochlorobenzene.",
            problemTamil: "பின்வரும் சேர்மங்களை எலக்ட்ரான் கவர் பொருள் பதிலீட்டிற்கான அவற்றின் வினைத்திறன் ஏறுவரிசையில் அடுக்கவும்: குளோரோபென்சீன், பென்சீன், 2,4-டைநைட்ரோகுளோரோபென்சீன்.",
            solutionSteps: [
                { step: 1, explanation: "Electrophilic substitution involves the attack of an electrophile on the electron-rich benzene ring. Electron-donating groups increase reactivity, while electron-withdrawing groups decrease reactivity.", explanationTamil: "எலக்ட்ரான் கவர் பொருள் பதிலீடு என்பது எலக்ட்ரான்-செறிந்த பென்சீன் வளையத்தின் மீது ஒரு எலக்ட்ரான் கவர் பொருளின் தாக்குதலை உள்ளடக்கியது. எலக்ட்ரான் வழங்கும் குழுக்கள் வினைத்திறனை அதிகரிக்கின்றன, அதேசமயம் எலக்ட்ரானை ஈர்க்கும் குழுக்கள் வினைத்திறனைக் குறைக்கின்றன." },
                { step: 2, explanation: "Benzene is the baseline reference compound.", explanationTamil: "பென்சீன் அடிப்படை ஒப்பீட்டுச் சேர்மம் ஆகும்." },
                { step: 3, explanation: "In chlorobenzene, the chlorine atom has a strong electron-withdrawing inductive effect (-I) and a weaker electron-donating resonance effect (+R). Overall, the -I effect dominates, making the ring deactivated compared to benzene.", explanationTamil: "குளோரோபென்சீனில், குளோரின் அணு ஒரு வலிமையான எலக்ட்ரான்-ஈர்க்கும் தூண்டல் விளைவையும் (-I) மற்றும் ஒரு பலவீனமான எலக்ட்ரான் வழங்கும் உடனிசைவு விளைவையும் (+R) கொண்டுள்ளது. ஒட்டுமொத்தமாக, -I விளைவு ஆதிக்கம் செலுத்துகிறது, இது வளையத்தை பென்சீனுடன் ஒப்பிடும்போது கிளர்வு நீக்கம் செய்கிறது." },
                { step: 4, explanation: "In 2,4-Dinitrochlorobenzene, we have one deactivating chlorine atom and two strongly deactivating nitro (-NO₂) groups. These groups withdraw electron density significantly, making the ring highly unreactive towards electrophiles.", explanationTamil: "2,4-டைநைட்ரோகுளோரோபென்சீனில், நமக்கு ஒரு கிளர்வு நீக்கும் குளோரின் அணுவும், இரண்டு வலுவான கிளர்வு நீக்கும் நைட்ரோ (-NO₂) குழுக்களும் உள்ளன. இந்தக் குழுக்கள் எலக்ட்ரான் அடர்த்தியை கணிசமாக ஈர்க்கின்றன, இது வளையத்தை எலக்ட்ரான் கவர் பொருள்களுக்கு எதிராக மிகவும் வினைத்திறனற்றதாக ஆக்குகிறது." },
                { step: 5, explanation: "Therefore, the increasing order of reactivity is: 2,4-Dinitrochlorobenzene < Chlorobenzene < Benzene.", explanationTamil: "எனவே, வினைத்திறனின் ஏறுவரிசை: 2,4-டைநைட்ரோகுளோரோபென்சீன் < குளோரோபென்சீன் < பென்சீன்." }
            ]
        },
        {
            title: "NEET Level: Identifying Reaction Types",
            titleTamil: "நீட் நிலை: வினை வகைகளை அடையாளம் காணுதல்",
            difficulty: "Easy",
            problem: "Identify the type of reaction: CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O",
            problemTamil: "வினை வகையை அடையாளம் காணவும்: CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the reactants and products. The reactant is an alkyl halide (bromoethane).",
                    explanationTamil: "வினைபடு பொருட்கள் மற்றும் விளைபொருட்களை பகுப்பாய்வு செய்யவும். வினைபடுபொருள் ஒரு அல்கைல் ஹாலைடு (புரோமோஈத்தேன்) ஆகும்."
                },
                {
                    step: 2,
                    explanation: "The reagent is alcoholic KOH, which is a strong base and favors elimination over substitution.",
                    explanationTamil: "கரணி ஆல்கஹாலிக் KOH ஆகும், இது ஒரு வலிமையான காரம் மற்றும் பதிலீட்டை விட நீக்கத்தை விரும்புகிறது."
                },
                {
                    step: 3,
                    explanation: "The product is an alkene (ethene). A hydrogen atom and a bromine atom have been removed from the reactant.",
                    explanationTamil: "விளைபொருள் ஒரு ஆல்கீன் (ஈத்தீன்) ஆகும். ஒரு ஹைட்ரஜன் அணுவும் ஒரு புரோமின் அணுவும் வினைபடு பொருளிலிருந்து நீக்கப்பட்டுள்ளன."
                },
                {
                    step: 4,
                    explanation: "The removal of small molecules (like HBr) to form a double bond is characteristic of an elimination reaction (specifically, dehydrohalogenation).",
                    explanationTamil: "ஒரு இரட்டைப் பிணைப்பை உருவாக்க சிறிய மூலக்கூறுகளை (HBr போன்றவை) நீக்குவது ஒரு நீக்கல் வினையின் (குறிப்பாக, டிஹைட்ரோஹாலஜனேற்றம்) சிறப்பியல்பு ஆகும்."
                }
            ],
            neetHack: "Spot the reagent! Aqueous KOH -> Substitution. Alcoholic KOH -> Elimination. This is a crucial distinction.",
            commonPitfall: "Not paying attention to the solvent (aqueous vs alcoholic) which completely changes the major product."
        }
    ],
    mcqs: [
        { question: "The order of reactivity of alkyl halides towards SN2 reaction is:", options: ["A. 3° > 2° > 1°", "B. 1° > 2° > 3°", "C. 2° > 1° > 3°", "D. 3° > 1° > 2°"], answer: "B. 1° > 2° > 3°", explanation: "SN2 reactivity is governed by steric hindrance. Primary halides are least hindered, and tertiary are most hindered.", neetFrequency: 5 },
        { question: "Which of the following compounds will undergo racemization when it undergoes hydrolysis?", options: ["A. (CH₃)₂CHCH₂Cl", "B. CH₃CH₂CH₂Cl", "C. CH₃CH₂CH(CH₃)Cl", "D. C₆H₅Cl"], answer: "C. CH₃CH₂CH(CH₃)Cl", explanation: "Racemization occurs in SN1 reactions, which are favored by secondary and tertiary halides that can form stable carbocations. The substrate must also be chiral. 2-chlorobutane is chiral and secondary.", neetFrequency: 4 },
        { question: "The reaction of t-butyl bromide with aqueous NaOH gives t-butyl alcohol. The reaction follows:", options: ["A. SN1 mechanism", "B. SN2 mechanism", "C. E1 mechanism", "D. E2 mechanism"], answer: "A. SN1 mechanism", explanation: "t-butyl bromide is a tertiary halide, which strongly favors the SN1 mechanism due to the stability of the tertiary carbocation intermediate.", neetFrequency: 5 },
        { question: "Which of the following is an example of a gem-dihalide?", options: ["A. Dichloromethane", "B. 1,2-dichloroethane", "C. Ethylidene chloride", "D. Allyl chloride"], answer: "C. Ethylidene chloride", explanation: "Gem-dihalides have both halogen atoms on the same carbon atom. Ethylidene chloride is 1,1-dichloroethane.", neetFrequency: 2 },
        { question: "The major product of the reaction between 2-bromopentane and alcoholic KOH is:", options: ["A. Pent-1-ene", "B. Pent-2-ene", "C. Pentan-2-ol", "D. Pentan-1-ol"], answer: "B. Pent-2-ene", explanation: "Alcoholic KOH favors elimination. According to Saytzeff's rule, the more substituted alkene (Pent-2-ene) is the major product.", neetFrequency: 5 },
        { question: "Chlorobenzene is less reactive than benzyl chloride towards nucleophilic substitution because:", options: ["A. C-Cl bond in chlorobenzene has partial double bond character", "B. Chlorobenzene is non-polar", "C. Benzyl chloride is unstable", "D. The inductive effect of the phenyl group"], answer: "A. C-Cl bond in chlorobenzene has partial double bond character", explanation: "Resonance in chlorobenzene gives the C-Cl bond partial double bond character, making it stronger and harder to break.", neetFrequency: 4 },
        { question: "Which reagent is used for the conversion of an alcohol to an alkyl chloride?", options: ["A. NaCl", "B. Dry HCl", "C. SOCl₂", "D. Cl₂"], answer: "C. SOCl₂", explanation: "Thionyl chloride (SOCl₂) is an excellent reagent for this conversion (Darzen's process) because the byproducts (SO₂ and HCl) are gases and escape easily, giving a pure product.", neetFrequency: 3 },
        { question: "An SN1 reaction is favoured by:", options: ["A. Non-polar solvents", "B. Polar protic solvents", "C. Polar aprotic solvents", "D. Any solvent"], answer: "B. Polar protic solvents", explanation: "Polar protic solvents (like water, alcohol) can solvate both the carbocation intermediate and the leaving group, stabilizing the transition state and favoring the SN1 mechanism.", neetFrequency: 3 },
        { question: "In the Finkelstein reaction, an alkyl iodide is prepared from an alkyl chloride/bromide by treating it with:", options: ["A. NaI in acetone", "B. AgF in alcohol", "C. Hg₂F₂", "D. NaF in water"], answer: "A. NaI in acetone", explanation: "The Finkelstein reaction is a halogen exchange reaction where NaCl or NaBr precipitates in dry acetone, driving the equilibrium forward.", neetFrequency: 2 },
        { question: "Which of the following is most reactive towards SN1 reaction?", options: ["A. C₆H₅CH₂Br", "B. (C₆H₅)₂CHBr", "C. (CH₃)₃CBr", "D. C₆H₅CH(CH₃)Br"], answer: "B. (C₆H₅)₂CHBr", explanation: "SN1 reactivity depends on carbocation stability. The diphenylmethyl carbocation is highly stabilized by resonance from two phenyl rings, making it more stable than the tertiary butyl or benzyl carbocations.", neetFrequency: 4 },
        { question: "The reaction of chloroform with alcoholic KOH and p-toluidine forms:", options: ["A. A pleasant smelling isocyanide", "B. A dye", "C. A nitro compound", "D. A diazonium salt"], answer: "A. A pleasant smelling isocyanide", explanation: "This is the carbylamine reaction (or isocyanide test), used to test for primary amines. It produces a foul-smelling isocyanide.", neetFrequency: 3 },
        { question: "Which of the following undergoes nucleophilic substitution exclusively by SN1 mechanism?", options: ["A. Ethyl chloride", "B. Isopropyl chloride", "C. Chlorobenzene", "D. Benzyl chloride"], answer: "D. Benzyl chloride", explanation: "Benzyl chloride forms a highly stable benzyl carbocation stabilized by resonance, making it highly reactive towards SN1. Ethyl chloride is 1° (SN2), Isopropyl is 2° (both), Chlorobenzene is unreactive.", neetFrequency: 4 },
        { question: "Freon (CCl₂F₂) is used as a:", options: ["A. Fuel", "B. Insecticide", "C. Refrigerant", "D. Solvent"], answer: "C. Refrigerant", explanation: "Freons are chlorofluorocarbons that were widely used as refrigerants and aerosol propellants.", neetFrequency: 1 },
        { question: "The correct order of boiling points for the following compounds is: 1-Chloropropane, Isopropyl chloride, 1-Chlorobutane.", options: ["A. 1 > 2 > 3", "B. 3 > 2 > 1", "C. 3 > 1 > 2", "D. 1 > 3 > 2"], answer: "C. 3 > 1 > 2", explanation: "Boiling point increases with molar mass (1-chlorobutane > others). For isomers, boiling point decreases with branching (1-chloropropane > isopropyl chloride). So, the order is 1-Chlorobutane > 1-Chloropropane > Isopropyl chloride.", neetFrequency: 4 },
        { question: "A Grignard reagent is prepared by the reaction of magnesium with:", options: ["A. Alkene", "B. Alkyne", "C. Alkyl halide", "D. Alcohol"], answer: "C. Alkyl halide", explanation: "Grignard reagents (R-MgX) are prepared by reacting an alkyl or aryl halide with magnesium metal in dry ether.", neetFrequency: 2 },
        { question: "The substitution reaction of an optically active alkyl halide which results in a product with inverted configuration is:", options: ["A. SN1", "B. SN2", "C. E1", "D. E2"], answer: "B. SN2", explanation: "SN2 reaction involves a backside attack by the nucleophile, leading to a complete inversion of stereochemistry (Walden inversion).", neetFrequency: 5 },
        { question: "Which gas is evolved when chloroform is exposed to air and sunlight?", options: ["A. Chlorine", "B. Carbon dioxide", "C. Phosgene", "D. Methane"], answer: "C. Phosgene", explanation: "Chloroform is oxidized by air in the presence of light to form the highly poisonous gas phosgene (carbonyl chloride, COCl₂).", neetFrequency: 2 },
        { question: "The most reactive halide towards SN1 reaction is:", options: ["A. n-Butyl chloride", "B. sec-Butyl chloride", "C. tert-Butyl chloride", "D. Allyl chloride"], answer: "C. tert-Butyl chloride", explanation: "tert-Butyl chloride is a 3° halide which forms the most stable carbocation among the given options, thus it is most reactive towards SN1.", neetFrequency: 4 },
        { question: "The reaction of alkyl halides with aqueous KOH gives:", options: ["A. Alkenes", "B. Alcohols", "C. Ethers", "D. Alkynes"], answer: "B. Alcohols", explanation: "Aqueous KOH provides OH⁻ as a nucleophile, leading to a substitution reaction where the halogen is replaced by -OH, forming an alcohol.", neetFrequency: 3 },
        { question: "The bond between carbon and halogen in an alkyl halide is:", options: ["A. Purely ionic", "B. Purely covalent", "C. Polar covalent", "D. Coordinate"], answer: "C. Polar covalent", explanation: "Due to the difference in electronegativity between carbon and the halogen, the C-X bond is polar covalent, with a partial positive charge on carbon and a partial negative charge on the halogen.", neetFrequency: 1 },
        { question: "Which of the following is used as an antiseptic?", options: ["A. Chloroform", "B. Iodoform", "C. DDT", "D. Freon"], answer: "B. Iodoform", explanation: "Iodoform (CHI₃) was formerly used as an antiseptic due to the liberation of free iodine upon contact with the skin.", neetFrequency: 1 },
        { question: "The Swarts reaction is used to prepare:", options: ["A. Alkyl chlorides", "B. Alkyl bromides", "C. Alkyl iodides", "D. Alkyl fluorides"], answer: "D. Alkyl fluorides", explanation: "The Swarts reaction involves heating an alkyl chloride/bromide in the presence of a metallic fluoride like AgF, Hg₂F₂, or SbF₃ to produce an alkyl fluoride.", neetFrequency: 3 },
        { question: "The reactivity order of halides for dehydrohalogenation is:", options: ["A. R-F > R-Cl > R-Br > R-I", "B. R-I > R-Br > R-Cl > R-F", "C. R-Cl > R-F > R-Br > R-I", "D. R-F > R-I > R-Br > R-Cl"], answer: "B. R-I > R-Br > R-Cl > R-F", explanation: "Dehydrohalogenation (elimination) involves breaking the C-X bond. The C-I bond is the weakest and easiest to break, so alkyl iodides are the most reactive.", neetFrequency: 2 },
        { question: "Chloropicrin is:", options: ["A. CCl₃NO₂", "B. CH₂Cl₂", "C. CCl₄", "D. CHCl₃"], answer: "A. CCl₃NO₂", explanation: "Chloropicrin (trichloronitromethane) is formed by the reaction of chloroform with nitric acid. It is a poisonous substance used as an insecticide.", neetFrequency: 1 },
        { question: "The hydrolysis of 2-bromo-3-methylbutane by SN1 mechanism gives primarily:", options: ["A. 3-methylbutan-2-ol", "B. 2-methylbutan-2-ol", "C. 2-methylbut-2-ene", "D. Pentan-2-ol"], answer: "B. 2-methylbutan-2-ol", explanation: "The SN1 mechanism proceeds via a carbocation intermediate. The initially formed secondary carbocation will rearrange via a 1,2-hydride shift to form a more stable tertiary carbocation. The nucleophile then attacks this tertiary carbocation, leading to 2-methylbutan-2-ol as the major product.", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "SN1 reaction is carried out in the presence of a polar protic solvent.", reason: "A polar protic solvent stabilizes the carbocation intermediate and the leaving group.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Solvents like water or alcohol can solvate both the positive and negative ions formed in the first step, lowering the activation energy.", neetFrequency: 3 },
        { assertion: "Chlorobenzene is less reactive than benzene towards electrophilic substitution.", reason: "The chlorine atom has an electron-withdrawing inductive effect.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. The strong -I effect of chlorine deactivates the ring by withdrawing electron density, making it less attractive to electrophiles compared to benzene.", neetFrequency: 4 },
        { assertion: "The reaction of t-butyl bromide with aqueous KOH follows an SN2 mechanism.", reason: "SN2 is a single-step mechanism.", answer: "D", explanation: "Assertion is false. t-butyl bromide is a tertiary halide and strongly favors the SN1 mechanism due to steric hindrance and carbocation stability. The reason is a true statement about the SN2 mechanism, but it doesn't justify the false assertion.", neetFrequency: 4 },
        { assertion: "Alkyl halides are generally not soluble in water.", reason: "They cannot form hydrogen bonds with water molecules.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Although polar, haloalkanes cannot form H-bonds with water, and the energy required to break the existing H-bonds in water is not compensated by the new interactions.", neetFrequency: 2 },
        { assertion: "Nucleophilic substitution on haloarenes is difficult.", reason: "The C-X bond in haloarenes has a partial double bond character due to resonance.", answer: "A", explanation: "Assertion is true. Reason is also true and is one of the main explanations for the low reactivity of haloarenes in these reactions. The double bond character makes the bond stronger and harder to break.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Finkelstein Reaction", "(b) Swarts Reaction", "(c) Wurtz Reaction", "(d) Carbylamine Reaction"], column2: ["(p) Preparation of alkanes", "(q) Preparation of alkyl fluorides", "(r) Test for primary amines", "(s) Preparation of alkyl iodides"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching the name reactions with their primary product or purpose.", neetFrequency: 5 },
        { column1: ["(a) SN1 reaction", "(b) SN2 reaction", "(c) E1 reaction", "(d) E2 reaction"], column2: ["(p) Inversion of configuration", "(q) Racemization", "(r) Follows Saytzeff's rule", "(s) Carbocation intermediate"], answer: "a-q,s; b-p; c-s; d-r", explanation: "Matching reaction mechanisms with their key characteristics. Both SN1 and E1 proceed via a carbocation intermediate.", neetFrequency: 4 },
        { column1: ["(a) Chloroform", "(b) Iodoform", "(c) DDT", "(d) Freon"], column2: ["(p) Insecticide", "(q) Refrigerant", "(r) Antiseptic", "(s) Anaesthetic"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching common halogen compounds with their uses.", neetFrequency: 2 },
        { column1: ["(a) Primary alkyl halide", "(b) Secondary alkyl halide", "(c) Tertiary alkyl halide", "(d) Aryl halide"], column2: ["(p) SN1 > SN2", "(q) SN2 > SN1", "(r) Low reactivity to nucleophilic substitution", "(s) Can undergo both SN1 and SN2"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching the type of halide with its preferred substitution mechanism.", neetFrequency: 4 },
        { column1: ["(a) Benzyl chloride", "(b) Vinyl chloride", "(c) Allyl chloride", "(d) Chlorobenzene"], column2: ["(p) Halogen on sp² carbon, unreactive", "(q) Halogen on sp² carbon, reactive (due to resonance in intermediate)", "(r) Halogen on sp³ carbon, highly reactive (due to resonance stabilized carbocation)", "(s) Halogen on sp³ carbon adjacent to C=C, reactive"], answer: "a-r, b-p, c-s, d-p", explanation: "Matching different types of halides with their structural description and reactivity. Both vinyl and chlorobenzene have halogen on an sp² carbon and are unreactive.", neetFrequency: 3 }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "\\text{Reactivity (SN1): } 3^\\circ > 2^\\circ > 1^\\circ",
                description: "Order of reactivity of alkyl halides towards SN1 reactions, based on carbocation stability.",
                descriptionTamil: "SN1 வினைகளுக்கான அல்கைல் ஹாலைடுகளின் வினைத்திறன் வரிசை, கார்போகேட்டயன் நிலைப்புத்தன்மையை அடிப்படையாகக் கொண்டது."
            },
            {
                formula: "\\text{Reactivity (SN2): } 1^\\circ > 2^\\circ > 3^\\circ",
                description: "Order of reactivity of alkyl halides towards SN2 reactions, based on steric hindrance.",
                descriptionTamil: "SN2 வினைகளுக்கான அல்கைல் ஹாலைடுகளின் வினைத்திறன் வரிசை, இடத்தடை விளைவை அடிப்படையாகக் கொண்டது."
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The reactivity of haloalkanes is dominated by nucleophilic substitution and elimination reactions.",
        "The choice between SN1/SN2 and E1/E2 depends on the substrate (1°/2°/3°), the strength of the nucleophile/base, and the solvent.",
        "SN1 proceeds via a planar carbocation, leading to racemization. SN2 proceeds via a backside attack, leading to inversion of configuration.",
        "Haloarenes are much less reactive towards nucleophilic substitution due to the partial double bond character of the C-X bond."
    ],
    mnemonics: [
        { text: "Remember SN1 vs SN2: '1' step in SN2, '2' steps in SN1. '1' reactant in rate law for SN1, '2' reactants for SN2. The numbers are swapped!", tamil: "SN1 vs SN2 ஐ நினைவில் கொள்க: SN2 இல் '1' படி, SN1 இல் '2' படிகள். SN1 க்கான வினைவேக விதியில் '1' வினைபடு பொருள், SN2 க்கு '2' வினைபடு பொருட்கள். எண்கள் மாற்றப்பட்டுள்ளன!" }
    ],
    neetTips: [
        { text: "A table comparing SN1 and SN2 reactions based on substrate, nucleophile, solvent, kinetics, and stereochemistry is a must-have for revision. Most questions come from this comparison.", tamil: "வினைபடுபொருள், கருக்கவர் பொருள், கரைப்பான், இயக்கவியல் மற்றும் முப்பரிமாண வேதியியல் ஆகியவற்றின் அடிப்படையில் SN1 மற்றும் SN2 வினைகளை ஒப்பிடும் ஒரு அட்டவணை திருப்புதலுக்கு அவசியமானது. பெரும்பாலான கேள்விகள் இந்த ஒப்பீட்டிலிருந்து வருகின்றன." },
        { text: "Remember the conditions that favor elimination over substitution: strong, bulky bases (like t-butoxide) and high temperatures.", tamil: "பதிலீட்டை விட நீக்கத்தை ஆதரிக்கும் நிபந்தனைகளை நினைவில் கொள்க: வலிமையான, பருமனான காரங்கள் (t-பியூட்டாக்ஸைடு போன்றவை) மற்றும் அதிக வெப்பநிலை." }
    ],
    studentTip: {
        english: "Focus on understanding the 'why'. Why does a tertiary halide prefer SN1? (Stable carbocation). Why does a primary halide prefer SN2? (Less steric hindrance). This is more important than just memorizing the order.",
        tamil: "'ஏன்' என்பதைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள். ஒரு மூன்றாம் நிலை ஹாலைடு ஏன் SN1 ஐ விரும்புகிறது? (நிலையான கார்போகேட்டயன்). ஒரு முதன்மை ஹாலைடு ஏன் SN2 ஐ விரும்புகிறது? (குறைந்த இடத்தடை). வரிசையை மனப்பாடம் செய்வதை விட இது முக்கியமானது."
    },
    peerDiscussion: {
        english: "Discuss with a friend why haloarenes are deactivating yet ortho, para-directing for electrophilic substitution. How do the -I and +R effects of the halogen compete?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஹாலோஅரீன்கள் கிளர்வு நீக்கம் செய்தாலும், எலக்ட்ரான் கவர் பொருள் பதிலீட்டிற்கு ஏன் ஆர்த்தோ, பாரா-இயக்குநர்களாக உள்ளன? ஹாலஜனின் -I மற்றும் +R விளைவுகள் எவ்வாறு போட்டியிடுகின்றன?"
    },
    nextChapter: {
        title: "Organic Compounds Containing Oxygen",
        titleTamil: "ஆக்ஸிஜன் கொண்ட கரிமச் சேர்மங்கள்"
    },
    validationReport: []
}
