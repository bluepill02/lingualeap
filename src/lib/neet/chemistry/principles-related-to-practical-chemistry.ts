import type { NeetModule } from '@/lib/types';

export const principlesRelatedToPracticalChemistry: NeetModule = {
    id: 'neet-chemistry-principles-related-to-practical-chemistry',
    title: 'Chemistry - Principles Related to Practical Chemistry (செய்முறை வேதியியல் தொடர்பான கோட்பாடுகள்)',
    chapter: 'Principles Related to Practical Chemistry',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the principles of qualitative analysis for the detection of cations and anions in an inorganic salt.",
        "Explain the common ion effect and its application in the selective precipitation of cations in qualitative analysis.",
        "Describe the chemical tests used to identify common functional groups in organic compounds (e.g., unsaturation, alcohols, phenols, aldehydes, ketones, carboxylic acids).",
        "Understand the principles behind basic laboratory techniques like titration, crystallization, and sublimation."
    ],
    prerequisites: [
        "Equilibrium, especially ionic equilibrium and solubility product.",
        "Knowledge of the reactions of various functional groups from organic chemistry."
    ],
    conceptOverview: "This chapter bridges the gap between theoretical chemistry and laboratory practice. It focuses on the chemical principles behind the experiments you perform in the lab. A major part is qualitative inorganic analysis, which involves the systematic identification of ions in a salt mixture. This process relies heavily on the principles of ionic equilibrium, solubility product, and the common ion effect to selectively precipitate different groups of cations. The chapter also covers the characteristic chemical tests used to identify different functional groups in organic compounds, providing a practical application for the reactions learned in organic chemistry.",
    tamilConnection: "ஆய்வகத்தில் ஒரு உப்பின் கூறுகளைக் கண்டறியும் பகுப்பாய்வு சோதனைகள், வேதியியல் கோட்பாடுகளின் நடைமுறைப் பயன்பாடு ஆகும். ஒரு கரைசலில் குறிப்பிட்ட அயனிகளை மட்டும் எவ்வாறு வீழ்படிவாக்குவது என்பதற்கு, சமநிலை மற்றும் கரைதிறன் பெருக்கம் பற்றிய புரிதல் அவசியம். இது கோட்பாட்டைச் செயலுடன் இணைக்கும் ஒரு முக்கிய பாடம்.",
    culturalContext: "The traditional method of checking the purity of gold involves rubbing it on a touchstone ('urai kal') and observing the color of the streak, often followed by testing with nitric acid. This is a form of qualitative analysis. Modern lab techniques, as discussed in this chapter, provide a more systematic and precise way to identify chemical substances.",
    syllabusMapping: [
        {
            topic: "Practical Chemistry",
            tnBoardChapter: "Spread across 11th & 12th Std Practical Manuals",
            ncertReference: "Class 11 & 12 Chemistry Lab Manuals",
            notes: "This is a relatively new section in the NEET syllabus. Questions are expected to be based on the principles behind common laboratory tests (e.g., flame tests, borax bead test, tests for functional groups) rather than rote memorization of procedures.",
            mappingDescription: 'Based on NEET Practical Syllabus'
        }
    ],
    conceptNotes: [
        {
            heading: { english: '1. Principles of Inorganic Qualitative Analysis', tamil: '1. கனிம பண்பறி பகுப்பாய்வின் கோட்பாடுகள்' },
            content: [
                { english: `Qualitative analysis involves the identification of cations (basic radicals) and anions (acidic radicals) in an inorganic salt. The process relies heavily on two key principles of ionic equilibrium:`, tamil: `பண்பறி பகுப்பாய்வு என்பது ஒரு கனிம உப்பில் உள்ள நேர் அயனிகள் (கார உறுப்புகள்) மற்றும் எதிர் அயனிகளை (அமில உறுப்புகள்) அடையாளம் காண்பதை உள்ளடக்கியது. இந்த செயல்முறை அயனி சமநிலையின் இரண்டு முக்கிய கொள்கைகளை பெரிதும் சார்ந்துள்ளது:` },
                {
                    english: `**Solubility Product ($K_{sp}$):** For a sparingly soluble salt like $A_xB_y$, there is an equilibrium between the solid salt and its ions in solution: $A_xB_y(s) \\rightleftharpoons xA^{y+}(aq) + yB^{x-}(aq)$. The product of the ion concentrations raised to their stoichiometric coefficients is a constant, known as the solubility product, $K_{sp} = [A^{y+}]^x[B^{x-}]^y$. **Precipitation occurs only when the Ionic Product > $K_{sp}$**.`,
                    tamil: `**கரைதிறன் பெருக்கம் ($K_{sp}$):** $A_xB_y$ போன்ற குறைவாக கரையும் உப்பிற்கு, திண்ம உப்புக்கும் அதன் அயனிகளுக்கும் இடையில் ஒரு சமநிலை உள்ளது. அயனி செறிவுகளின் பெருக்கற்பலன், அவற்றின் வினைக்கூறு குணகங்களின் அடுக்குகளுக்கு உயர்த்தப்பட்டது, கரைதிறன் பெருக்கம் எனப்படும் ஒரு மாறிலியாகும். **அயனிப் பெருக்கம் > $K_{sp}$ எனும்போது மட்டுமே வீழ்படிவாதல் நிகழும்**.`
                },
                {
                    english: `**Common Ion Effect (பொது அயனி விளைவு):** The suppression of the dissociation of a weak electrolyte by the addition of a strong electrolyte containing a common ion. For example, the dissociation of H₂S (a weak acid) is suppressed by adding HCl (a strong acid), which provides H⁺ ions. This principle is used to control the concentration of the precipitating agent.`,
                    tamil: `**பொது அயனி விளைவு:** ஒரு பொதுவான அயனியைக் கொண்ட ஒரு வலிமையான மின்பகுளியைச் சேர்ப்பதன் மூலம் ஒரு வலிமை குறைந்த மின்பகுளியின் பிரிகையை அடக்குதல். எடுத்துக்காட்டாக, H₂S-இன் பிரிகை, H⁺ அயனிகளை வழங்கும் HCl-ஐ சேர்ப்பதன் மூலம் அடக்கப்படுகிறது. இந்த கொள்கை வீழ்படிவாக்கும் கரணியின் செறிவைக் கட்டுப்படுத்தப் பயன்படுகிறது.`
                },
                {
                    english: `**Example - Cation Analysis:** Cations are separated into groups based on their solubility products. Group II cations (like Cu²⁺, Pb²⁺) are precipitated as sulphides using H₂S in an acidic medium. The high H⁺ concentration from HCl suppresses H₂S dissociation, providing just enough S²⁻ ions to precipitate Group II sulphides (which have very low K_sp) but not Group IV sulphides (which have higher K_sp).`,
                    tamil: `**உதாரணம் - நேர் அயனி பகுப்பாய்வு:** நேர் அயனிகள் அவற்றின் கரைதிறன் பெருக்கங்களின் அடிப்படையில் குழுக்களாகப் பிரிக்கப்படுகின்றன. தொகுதி II நேர் அயனிகள் (Cu²⁺, Pb²⁺ போன்றவை) அமில ஊடகத்தில் H₂S ஐப் பயன்படுத்தி சல்பைடுகளாக வீழ்படிவாக்கப்படுகின்றன. HCl-இலிருந்து வரும் அதிக H⁺ செறிவு H₂S பிரிகையை அடக்குகிறது, இது தொகுதி II சல்பைடுகளை (மிகக் குறைந்த K_sp கொண்டவை) வீழ்படிவாக்க போதுமான S²⁻ அயனிகளை வழங்குகிறது, ஆனால் தொகுதி IV சல்பைடுகளை (அதிக K_sp கொண்டவை) வீழ்படிவாக்காது.`
                }
            ]
        },
        {
            heading: { english: '2. Tests for Functional Groups in Organic Compounds', tamil: '2. கரிமச் சேர்மங்களில் உள்ள வினைசெயல் தொகுதிகளுக்கான சோதனைகள்' },
            content: [
                {
                    english: `**Test for Unsaturation (-C=C- or -C≡C-):**
*   **Baeyer's Test:** Adding cold, dilute, alkaline KMnO₄ solution. The purple color disappears. This is due to the oxidation of the double/triple bond.
*   **Bromine Water Test:** Adding bromine water (Br₂ in CCl₄). The reddish-brown color of bromine disappears as it adds across the multiple bond.`,
                    tamil: `**நிறைவுறாத் தன்மைக்கான சோதனை (-C=C- அல்லது -C≡C-):**
*   **பேயர் சோதனை:** குளிர், நீர்த்த, கார KMnO₄ கரைசலைச் சேர்த்தல். ஊதா நிறம் மறைகிறது.
*   **புரோமின் நீர் சோதனை:** புரோமின் நீரைச் சேர்ப்பது (Br₂ CCl₄-ல்). புரோமினின் செம்பழுப்பு நிறம் மறைகிறது.`
                },
                {
                    english: `**Test for Alcohols (-OH):**
*   **Lucas Test:** Reaction with Lucas reagent (conc. HCl + anhyd. ZnCl₂). Appearance of turbidity distinguishes 1°, 2°, and 3° alcohols. (3°: immediate, 2°: after 5-10 min, 1°: no reaction at room temp).`,
                    tamil: `**ஆல்கஹால்களுக்கான சோதனை (-OH):**
*   **லூகாஸ் சோதனை:** லூகாஸ் கரணியுடன் (அடர் HCl + நீரற்ற ZnCl₂) வினை. கலங்கல் தோன்றுவது 1°, 2°, மற்றும் 3° ஆல்கஹால்களை வேறுபடுத்துகிறது.`
                },
                {
                    english: `**Test for Phenols (Ar-OH):**
*   **Ferric Chloride Test:** Adding neutral FeCl₃ solution. An intense violet, green, or blue color appears due to the formation of a colored iron-phenol complex.`,
                    tamil: `**ஃபீனால்களுக்கான சோதனை (Ar-OH):**
*   **ஃபெர்ரிக் குளோரைடு சோதனை:** நடுநிலை FeCl₃ கரைசலைச் சேர்ப்பது. ஒரு வண்ண இரும்பு-ஃபீனால் அணைவுச் சேர்மம் உருவாவதால் ஒரு தீவிர ஊதா, பச்சை அல்லது நீல நிறம் தோன்றுகிறது.`
                },
                {
                    english: `**Test for Aldehydes and Ketones (>C=O):**
*   **2,4-DNP Test (Brady's Test):** Both aldehydes and ketones give a yellow/orange/red precipitate with 2,4-dinitrophenylhydrazine.
*   **Tollens' Test (Silver Mirror Test):** Only aldehydes give a positive test, forming a silver mirror on the walls of the test tube.
*   **Fehling's Test:** Only aliphatic aldehydes give a positive test, forming a red-brown precipitate of Cu₂O.`,
                    tamil: `**ஆல்டிஹைடுகள் மற்றும் கீட்டோன்களுக்கான சோதனை (>C=O):**
*   **2,4-DNP சோதனை:** ஆல்டிஹைடுகள் மற்றும் கீட்டோன்கள் இரண்டும் 2,4-டைநைட்ரோபினைல்ஹைட்ரசினுடன் ஒரு மஞ்சள்/ஆரஞ்சு/சிவப்பு வீழ்படிவைக் கொடுக்கின்றன.
*   **டாலன்ஸ் சோதனை (வெள்ளி ஆடி சோதனை):** ஆல்டிஹைடுகள் மட்டுமே நேர்மறை சோதனை கொடுத்து, சோதனைக்குழாயின் சுவர்களில் ஒரு வெள்ளி ஆடியை உருவாக்குகின்றன.
*   **ஃபெலிங் சோதனை:** அலிபாடிக் ஆல்டிஹைடுகள் மட்டுமே நேர்மறை சோதனை கொடுத்து, Cu₂O-இன் சிவப்பு-பழுப்பு வீழ்படிவை உருவாக்குகின்றன.`
                },
                {
                    english: `**Test for Carboxylic Acids (-COOH):**
*   **Sodium Bicarbonate Test:** Addition of sodium bicarbonate solution produces brisk effervescence due to the liberation of CO₂ gas.`,
                    tamil: `**கார்பாக்சிலிக் அமிலங்களுக்கான சோதனை (-COOH):**
*   **சோடியம் பைகார்பனேட் சோதனை:** சோடியம் பைகார்பனேட் கரைசலைச் சேர்ப்பது CO₂ வாயு வெளிப்படுவதால் ஒரு விறுவிறுப்பான நுரைத்தலை உருவாக்குகிறது.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "Concept Application: Qualitative Analysis",
            titleTamil: "கருத்து பயன்பாடு: பண்பறி பகுப்பாய்வு",
            difficulty: 'Medium',
            problem: "In the qualitative analysis of cations, H₂S gas is passed through an acidic solution to precipitate Group II cations (like Cu²⁺), but it does not precipitate Group IV cations (like Zn²⁺). Explain the principle.",
            problemTamil: "நேர் அயனிகளின் பண்பறி பகுப்பாய்வில், தொகுதி II நேர் அயனிகளை (Cu²⁺ போன்றவை) வீழ்படிவாக்க ஒரு அமிலக் கரைசல் வழியாக H₂S வாயு செலுத்தப்படுகிறது, ஆனால் அது தொகுதி IV நேர் அயனிகளை (Zn²⁺ போன்றவை) வீழ்படிவாக்காது. கொள்கையை விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The precipitation of metal sulphides depends on their solubility product (K_sp). Precipitation occurs only if the ionic product [M²⁺][S²⁻] exceeds the K_sp value.",
                    explanationTamil: "உலோக சல்பைடுகளின் வீழ்படிவாதல் அவற்றின் கரைதிறன் பெருக்கத்தைச் (K_sp) சார்ந்தது. அயனிப் பெருக்கம் [M²⁺][S²⁻] K_sp மதிப்பை விட அதிகமாக இருந்தால் மட்டுமே வீழ்படிவாதல் நிகழும்."
                },
                {
                    step: 2,
                    explanation: "Group II sulphides (like CuS) have a very low K_sp, while Group IV sulphides (like ZnS) have a much higher K_sp.",
                    explanationTamil: "தொகுதி II சல்பைடுகள் (CuS போன்றவை) மிகக் குறைந்த K_sp-ஐக் கொண்டுள்ளன, அதேசமயம் தொகுதி IV சல்பைடுகள் (ZnS போன்றவை) மிக அதிக K_sp-ஐக் கொண்டுள்ளன."
                },
                {
                    step: 3,
                    explanation: "H₂S is a weak acid: H₂S ⇌ 2H⁺ + S²⁻. To control the concentration of S²⁻ ions, we use the common ion effect.",
                    explanationTamil: "H₂S ஒரு வலிமை குறைந்த அமிலம்: H₂S ⇌ 2H⁺ + S²⁻. S²⁻ அயனிகளின் செறிவைக் கட்டுப்படுத்த, நாம் பொது அயனி விளைவைப் பயன்படுத்துகிறோம்."
                },
                {
                    step: 4,
                    explanation: "By passing H₂S in the presence of HCl (an acidic medium), the high concentration of H⁺ ions from HCl shifts the H₂S equilibrium to the left, suppressing its dissociation. This produces a very low concentration of S²⁻ ions.",
                    explanationTamil: "HCl-இன் முன்னிலையில் (ஒரு அமில ஊடகம்) H₂S-ஐச் செலுத்துவதன் மூலம், HCl-இலிருந்து வரும் அதிக H⁺ செறிவு H₂S சமநிலையை இடதுபுறமாக நகர்த்தி, அதன் பிரிகையை அடக்குகிறது. இது S²⁻ அயனிகளின் மிகக் குறைந்த செறிவை உருவாக்குகிறது."
                },
                {
                    step: 5,
                    explanation: "This low [S²⁻] is sufficient to exceed the K_sp of the low-solubility Group II sulphides (so they precipitate), but it is not sufficient to exceed the K_sp of the higher-solubility Group IV sulphides (so they remain in solution).",
                    explanationTamil: "இந்தக் குறைந்த [S²⁻] குறைந்த கரைதிறன் கொண்ட தொகுதி II சல்பைடுகளின் K_sp-ஐ விட அதிகமாக இருக்கப் போதுமானது (எனவே அவை வீழ்படிவாகின்றன), ஆனால் அதிக கரைதிறன் கொண்ட தொகுதி IV சல்பைடுகளின் K_sp-ஐ விட அதிகமாக இருக்கப் போதுமானதாக இல்லை (எனவே அவை கரைசலில் நீடிக்கின்றன)."
                }
            ]
        },
        {
            title: "Concept Application: Distinguishing Organic Compounds",
            titleTamil: "கருத்து பயன்பாடு: கரிமச் சேர்மங்களை வேறுபடுத்துதல்",
            difficulty: 'Medium',
            problem: "How would you distinguish between Propanal and Propanone using a chemical test?",
            problemTamil: "புரோப்பனால் மற்றும் புரோப்பனோன் ஆகியவற்றை ஒரு வேதியியல் சோதனையைப் பயன்படுத்தி எவ்வாறு வேறுபடுத்துவீர்கள்?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the functional groups. Propanal (CH₃CH₂CHO) is an aldehyde. Propanone (CH₃COCH₃) is a ketone.",
                    explanationTamil: "வினைசெயல் தொகுதிகளை அடையாளம் காணவும். புரோப்பனால் ஒரு ஆல்டிஹைடு. புரோப்பனோன் ஒரு கீட்டோன்."
                },
                {
                    step: 2,
                    explanation: "Choose a test that gives a positive result for aldehydes but not for ketones.",
                    explanationTamil: "ஆல்டிஹைடுகளுக்கு நேர்மறை முடிவையும், கீட்டோன்களுக்கு எதிர்மறை முடிவையும் கொடுக்கும் ஒரு சோதனையைத் தேர்வு செய்யவும்."
                },
                {
                    step: 3,
                    explanation: "Tollens' test is a suitable choice. Tollens' reagent is an ammoniacal silver nitrate solution [Ag(NH₃)₂]⁺.",
                    explanationTamil: "டாலன்ஸ் சோதனை ஒரு பொருத்தமான தேர்வாகும். டாலன்ஸ் கரணி என்பது அம்மோனியா கலந்த வெள்ளி நைட்ரேட் கரைசல் ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Procedure: Add Tollens' reagent to both test tubes and warm gently.",
                    explanationTamil: "செயல்முறை: இரண்டு சோதனைக்குழாய்களிலும் டாலன்ஸ் கரணியைச் சேர்த்து மெதுவாக சூடாக்கவும்."
                },
                {
                    step: 5,
                    explanation: "Observation: Propanal, being an aldehyde, will be oxidized to propanoate ion, and it will reduce the Ag⁺ ions to metallic silver, forming a silver mirror on the inner side of the test tube. Propanone, a ketone, will not react and no silver mirror will be formed.",
                    explanationTamil: "கவனிப்பு: புரோப்பனால், ஒரு ஆல்டிஹைடு என்பதால், புரோப்பனோயேட் அயனியாக ஆக்ஸிஜனேற்றமடையும், மேலும் அது Ag⁺ அயனிகளை உலோக வெள்ளியாக ஒடுக்கி, சோதனைக்குழாயின் உட்புறத்தில் ஒரு வெள்ளி ஆடியை உருவாக்கும். புரோப்பனோன், ஒரு கீட்டோன், வினைபுரியாது மற்றும் வெள்ளி ஆடி உருவாகாது."
                }
            ]
        },
        {
            title: "Concept Application: Lassaigne's Test Logic",
            titleTamil: "கருத்து பயன்பாடு: லசைன் சோதனை தர்க்கம்",
            difficulty: 'Medium',
            problem: "In the Lassaigne's test for halogens, why is the sodium fusion extract first boiled with concentrated nitric acid before adding silver nitrate?",
            problemTamil: "ஹாலஜன்களுக்கான லசைன் சோதனையில், வெள்ளி நைட்ரேட்டைச் சேர்ப்பதற்கு முன்பு சோடியம் உருக்குச் சாறு ஏன் அடர் நைட்ரிக் அமிலத்துடன் முதலில் கொதிக்க வைக்கப்படுகிறது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The sodium fusion converts all elements like N, S, and halogens (X) into ionic salts: NaCN, Na₂S, and NaX.",
                    explanationTamil: "சோடியம் உருக்குதல் N, S, மற்றும் ஹாலஜன்கள் (X) போன்ற அனைத்து தனிமங்களையும் அயனி உப்புகளாக மாற்றுகிறது: NaCN, Na₂S, மற்றும் NaX."
                },
                {
                    step: 2,
                    explanation: "The test for halogens involves precipitation with silver nitrate (AgNO₃) to form AgX.",
                    explanationTamil: "ஹாலஜன்களுக்கான சோதனை வெள்ளி நைட்ரேட்டுடன் (AgNO₃) வீழ்படிவாக்குதலை உள்ளடக்கியது."
                },
                {
                    step: 3,
                    explanation: "If nitrogen and/or sulphur are also present in the organic compound, the sodium extract will contain NaCN and/or Na₂S.",
                    explanationTamil: "கரிமச் சேர்மத்தில் நைட்ரஜன் மற்றும்/அல்லது கந்தகம் இருந்தால், சோடியம் சாற்றில் NaCN மற்றும்/அல்லது Na₂S இருக்கும்."
                },
                {
                    step: 4,
                    explanation: "Both NaCN and Na₂S would react with AgNO₃ to form precipitates (AgCN and Ag₂S), which would interfere with the test for halogens.",
                    explanationTamil: "NaCN மற்றும் Na₂S இரண்டும் AgNO₃ உடன் வினைபுரிந்து வீழ்படிவுகளை (AgCN மற்றும் Ag₂S) உருவாக்கும், இது ஹாலஜன்களுக்கான சோதனையில் குறுக்கிடும்."
                },
                {
                    step: 5,
                    explanation: "Boiling with concentrated HNO₃ decomposes NaCN and Na₂S into gases (HCN and H₂S), removing these interfering ions from the solution before the silver nitrate is added, thus ensuring a reliable test for halogens.",
                    explanationTamil: "அடர் HNO₃ உடன் கொதிக்க வைப்பது NaCN மற்றும் Na₂S ஐ வாயுக்களாக (HCN மற்றும் H₂S) சிதைக்கிறது, வெள்ளி நைட்ரேட்டைச் சேர்ப்பதற்கு முன்பு இந்த குறுக்கிடும் அயனிகளை கரைசலிலிருந்து நீக்குகிறது, இதனால் ஹாலஜன்களுக்கு ஒரு நம்பகமான சோதனையை உறுதி செய்கிறது."
                }
            ]
        },
        {
            title: "Concept Application: Flame Test",
            titleTamil: "கருத்து பயன்பாடு: சுடர்ச் சோதனை",
            difficulty: 'Easy',
            problem: "A salt gives a crimson red color in the flame test. Which cation is likely present?",
            problemTamil: "ஒரு உப்பு சுடர்ச் சோதனையில் கருஞ்சிவப்பு நிறத்தைக் கொடுக்கிறது. எந்த நேர் அயனி இருக்க வாய்ப்புள்ளது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The flame test is used to detect the presence of certain metal cations based on the characteristic color they impart to a flame.",
                    explanationTamil: "சுடர்ச் சோதனை சில உலோக நேர் அயனிகள் இருப்பதை, அவை சுடருக்கு கொடுக்கும் சிறப்பியல்பு நிறத்தின் அடிப்படையில் கண்டறியப் பயன்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "The heat of the flame excites the electrons of the metal ions to higher energy levels.",
                    explanationTamil: "சுடரின் வெப்பம் உலோக அயனிகளின் எலக்ட்ரான்களை உயர் ஆற்றல் மட்டங்களுக்கு கிளர்ச்சியூட்டுகிறது."
                },
                {
                    step: 3,
                    explanation: "When these electrons return to their ground state, they emit light of a specific wavelength (color) which is characteristic of that element.",
                    explanationTamil: "இந்த எலக்ட்ரான்கள் அவற்றின் அடி நிலைக்குத் திரும்பும்போது, அவை அந்த தனிமத்திற்குரிய ஒரு குறிப்பிட்ட அலைநீள (நிறம்) ஒளியை உமிழ்கின்றன."
                },
                {
                    step: 4,
                    explanation: "A crimson red color is characteristic of the Strontium (Sr²⁺) ion. Other common colors include: Sodium (golden yellow), Potassium (lilac), Calcium (brick red), Barium (apple green).",
                    explanationTamil: "ஒரு கருஞ்சிவப்பு நிறம் ஸ்ட்ரான்டியம் (Sr²⁺) அயனியின் சிறப்பியல்பு ஆகும். மற்ற பொதுவான நிறங்கள்: சோடியம் (தங்க மஞ்சள்), பொட்டாசியம் (இளஞ்சிவப்பு), கால்சியம் (செங்கல் சிவப்பு), பேரியம் (ஆப்பிள் பச்சை)."
                }
            ]
        },
        {
            title: "Concept Application: Borax Bead Test",
            titleTamil: "கருத்து பயன்பாடு: போராக்ஸ் மணி சோதனை",
            difficulty: 'Medium',
            problem: "In a borax bead test, a salt containing cobalt gives a blue colored bead. Explain the chemistry involved.",
            problemTamil: "ஒரு போராக்ஸ் மணி சோதனையில், கோபால்ட் கொண்ட ஒரு உப்பு நீல நிற மணியைக் கொடுக்கிறது. சம்பந்தப்பட்ட வேதியியலை விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The borax bead test is a qualitative test used for the detection of certain transition metal ions.",
                    explanationTamil: "போராக்ஸ் மணி சோதனை சில இடைநிலை உலோக அயனிகளைக் கண்டறியப் பயன்படும் ஒரு பண்பறி சோதனையாகும்."
                },
                {
                    step: 2,
                    explanation: "Borax (Na₂B₄O₇·10H₂O) on heating first loses water and then melts to form a colorless, transparent glassy bead of sodium metaborate (NaBO₂) and boric anhydride (B₂O₃).",
                    explanationTamil: "போராக்ஸ் (Na₂B₄O₇·10H₂O) சூடுபடுத்தும்போது முதலில் நீரை இழந்து பின்னர் உருகி சோடியம் மெட்டாபோரேட் (NaBO₂) மற்றும் போரிக் நீரிலி (B₂O₃) ஆகியவற்றின் நிறமற்ற, ஒளிபுகும் கண்ணாடி மணியை உருவாக்குகிறது."
                },
                {
                    step: 3,
                    explanation: "When this hot bead is touched with a salt containing a transition metal like cobalt, the salt adheres to it.",
                    explanationTamil: "இந்த சூடான மணியை கோபால்ட் போன்ற ஒரு இடைநிலை உலோகம் கொண்ட ஒரு உப்புடன் தொடும்போது, உப்பு அதனுடன் ஒட்டிக்கொள்கிறது."
                },
                {
                    step: 4,
                    explanation: "On reheating, the cobalt salt decomposes to form cobalt(II) oxide (CoO). This oxide then reacts with the boric anhydride to form cobalt metaborate.",
                    explanationTamil: "மீண்டும் சூடுபடுத்தும்போது, கோபால்ட் உப்பு சிதைந்து கோபால்ட்(II) ஆக்சைடை (CoO) உருவாக்குகிறது. இந்த ஆக்சைடு பின்னர் போரிக் நீரிலியுடன் வினைபுரிந்து கோபால்ட் மெட்டாபோரேட்டை உருவாக்குகிறது."
                },
                {
                    step: 5,
                    explanation: "Cobalt metaborate, Co(BO₂)₂, is blue in color. The formation of this colored metaborate is the basis of the test. The color is characteristic of the metal ion.",
                    explanationTamil: "கோபால்ட் மெட்டாபோரேட், Co(BO₂)₂, நீல நிறத்தில் உள்ளது. இந்த வண்ண மெட்டாபோரேட் உருவாதல் சோதனையின் அடிப்படையாகும். நிறம் உலோக அயனியின் சிறப்பியல்பு ஆகும்."
                }
            ]
        }
    ],
    mcqs: [
        {
            question: "In the Lassaigne's test for nitrogen, the Prussian blue colour is due to the formation of:",
            options: ["A. Ferrous sulphate", "B. Ferric ferrocyanide", "C. Sodium ferrocyanide", "D. Ferric cyanide"],
            answer: "B. Ferric ferrocyanide",
            explanation: "The final blue compound is Ferric ferrocyanide, Fe₄[Fe(CN)₆]₃.",
            neetFrequency: 5
        },
        {
            question: "Which of the following functional groups gives a positive Tollens' test?",
            options: ["A. Ketone", "B. Alcohol", "C. Aldehyde", "D. Ether"],
            answer: "C. Aldehyde",
            explanation: "Tollens' reagent (ammoniacal silver nitrate) is a mild oxidizing agent that is reduced by aldehydes to form a silver mirror, but it does not oxidize ketones.",
            neetFrequency: 5
        },
        {
            question: "In the qualitative analysis of cations, H₂S is passed in the presence of dilute HCl to precipitate Group II cations. The role of HCl is:",
            options: ["A. To increase the concentration of S²⁻ ions", "B. To decrease the concentration of S²⁻ ions", "C. To oxidize H₂S", "D. To act as a catalyst"],
            answer: "B. To decrease the concentration of S²⁻ ions",
            explanation: "Due to the common ion effect of H⁺ ions from the strong acid HCl, the dissociation of the weak acid H₂S is suppressed, leading to a low concentration of S²⁻ ions.",
            neetFrequency: 4
        },
        {
            question: "A red-brown precipitate with Fehling's solution is given by:",
            options: ["A. Acetone", "B. Benzaldehyde", "C. Acetaldehyde", "D. Formic acid"],
            answer: "C. Acetaldehyde",
            explanation: "Fehling's test is given by aliphatic aldehydes. Aromatic aldehydes like benzaldehyde do not give this test. Ketones like acetone also do not react.",
            neetFrequency: 4
        },
        {
            question: "The chromyl chloride test is used for the confirmation of which anion?",
            options: ["A. Sulphate (SO₄²⁻)", "B. Nitrate (NO₃⁻)", "C. Chloride (Cl⁻)", "D. Carbonate (CO₃²⁻)"],
            answer: "C. Chloride (Cl⁻)",
            explanation: "When a salt containing chloride is heated with K₂Cr₂O₇ and conc. H₂SO₄, reddish-brown fumes of chromyl chloride (CrO₂Cl₂) are evolved.",
            neetFrequency: 3
        },
        {
            question: "Which method is most suitable for separating a mixture of camphor and sand?",
            options: ["A. Distillation", "B. Crystallisation", "C. Sublimation", "D. Chromatography"],
            answer: "C. Sublimation",
            explanation: "Camphor is a sublimable solid, while sand is non-volatile. Sublimation is the ideal technique to separate them.",
            neetFrequency: 3
        },
        {
            question: "The flame test gives a lilac (pale violet) color. This indicates the presence of which cation?",
            options: ["A. Na⁺", "B. K⁺", "C. Ca²⁺", "D. Ba²⁺"],
            answer: "B. K⁺",
            explanation: "Potassium (K⁺) imparts a characteristic lilac color to the flame.",
            neetFrequency: 2
        },
        {
            question: "The iodoform test is NOT given by:",
            options: ["A. Ethanol", "B. Propan-2-one (Acetone)", "C. Propan-1-ol", "D. Acetaldehyde"],
            answer: "C. Propan-1-ol",
            explanation: "The iodoform test is given by compounds containing the CH₃-CO- group or the CH₃-CH(OH)- group. Propan-1-ol does not have this structure.",
            neetFrequency: 4
        },
        {
            question: "The brown ring test for nitrate ions involves the formation of the complex:",
            options: ["A. [Fe(H₂O)₅(NO)]SO₄", "B. [Fe(CN)₆]³⁻", "C. Fe(OH)₃", "D. FeSO₄·NO"],
            answer: "A. [Fe(H₂O)₅(NO)]SO₄",
            explanation: "The brown ring is due to the formation of the complex ion [Fe(H₂O)₅(NO)]²⁺.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is the principle of column chromatography?",
            options: ["A. Partition", "B. Absorption", "C. Differential Adsorption", "D. Size exclusion"],
            answer: "C. Differential Adsorption",
            explanation: "Column chromatography separates components based on their different degrees of adsorption on a solid stationary phase.",
            neetFrequency: 3
        },
        {
            question: "An organic compound gives a blood-red coloration with FeCl₃ in Lassaigne's test. This indicates the presence of:",
            options: ["A. Nitrogen only", "B. Sulphur only", "C. Both Nitrogen and Sulphur", "D. Halogen"],
            answer: "C. Both Nitrogen and Sulphur",
            explanation: "When both N and S are present, they form sodium thiocyanate (NaSCN) during fusion, which gives a blood-red color with ferric ions.",
            neetFrequency: 4
        },
        {
            question: "In the Carius method for the estimation of sulphur, it is precipitated as:",
            options: ["A. SO₂", "B. H₂S", "C. PbSO₄", "D. BaSO₄"],
            answer: "D. BaSO₄",
            explanation: "Sulphur is first oxidized to sulphuric acid and then precipitated as barium sulphate, which is then weighed.",
            neetFrequency: 2
        },
        {
            question: "Kjeldahl's method is not used for the estimation of nitrogen in:",
            options: ["A. Aniline", "B. Urea", "C. Pyridine", "D. Acetanilide"],
            answer: "C. Pyridine",
            explanation: "Nitrogen present in a ring (like in pyridine) is not converted to ammonium sulphate under the conditions of Kjeldahl's method.",
            neetFrequency: 3
        },
        {
            question: "The test for a carboxylic acid group involves observing effervescence with:",
            options: ["A. Sodium chloride solution", "B. Sodium hydroxide solution", "C. Sodium bicarbonate solution", "D. Sodium sulphate solution"],
            answer: "C. Sodium bicarbonate solution",
            explanation: "Carboxylic acids are acidic enough to react with sodium bicarbonate (a weak base) to liberate CO₂ gas, causing effervescence.",
            neetFrequency: 4
        },
        {
            question: "The reagent used to distinguish a primary, secondary and tertiary amine is:",
            options: ["A. Lucas reagent", "B. Tollen's reagent", "C. Fehling's solution", "D. Hinsberg's reagent"],
            answer: "D. Hinsberg's reagent",
            explanation: "Hinsberg's reagent (benzenesulphonyl chloride) reacts differently with 1°, 2°, and 3° amines, allowing them to be distinguished.",
            neetFrequency: 3
        },
        {
            question: "Which of the following cations belongs to Group I of qualitative analysis?",
            options: ["A. Pb²⁺", "B. Cu²⁺", "C. Al³⁺", "D. Zn²⁺"],
            answer: "A. Pb²⁺",
            explanation: "Group I cations (Ag⁺, Hg₂²⁺, Pb²⁺) are precipitated as chlorides by dilute HCl. Note that PbCl₂ is sparingly soluble and also precipitates in Group II.",
            neetFrequency: 1
        },
        {
            question: "The borax bead test is generally used for the detection of:",
            options: ["A. Alkali metals", "B. Alkaline earth metals", "C. Transition metals", "D. Halogens"],
            answer: "C. Transition metals",
            explanation: "Transition metals form colored metaborates in the borax bead test.",
            neetFrequency: 2
        },
        {
            question: "The purple color in the Lassaigne's test for sulphur is due to the formation of:",
            options: ["A. Fe(CNS)₃", "B. Na₄[Fe(CN)₅NOS]", "C. Na₂S", "D. Fe₂S₃"],
            answer: "B. Na₄[Fe(CN)₅NOS]",
            explanation: "The sodium extract containing Na₂S reacts with sodium nitroprusside to form a violet-colored complex.",
            neetFrequency: 2
        },
        {
            question: "The technique used to separate glycerol from spent-lye in the soap industry is:",
            options: ["A. Simple distillation", "B. Fractional distillation", "C. Steam distillation", "D. Distillation under reduced pressure"],
            answer: "D. Distillation under reduced pressure",
            explanation: "Glycerol has a high boiling point and decomposes before reaching it. Distillation under reduced pressure lowers the boiling point, allowing it to be purified.",
            neetFrequency: 3
        },
        {
            question: "The R_f value in chromatography is the ratio of the distance travelled by the solute to the distance travelled by the:",
            options: ["A. Stationary phase", "B. Solvent front", "C. Mixture", "D. Adsorbent"],
            answer: "B. Solvent front",
            explanation: "R_f = (Distance travelled by substance) / (Distance travelled by solvent front).",
            neetFrequency: 1
        },
        {
            question: "The confirmatory test for carbonate ion (CO₃²⁻) is:",
            options: ["A. Formation of a white precipitate with BaCl₂", "B. Turning limewater milky", "C. Formation of a yellow precipitate with AgNO₃", "D. Evolution of a colorless, odorless gas with dilute acid"],
            answer: "B. Turning limewater milky",
            explanation: "Carbonates react with dilute acids to produce CO₂ gas, which turns limewater (calcium hydroxide solution) milky due to the formation of a white precipitate of calcium carbonate.",
            neetFrequency: 3
        },
        {
            question: "A white precipitate is formed when BaCl₂ is added to a salt solution. The precipitate is insoluble in HCl. This confirms the presence of which anion?",
            options: ["A. CO₃²⁻", "B. SO₃²⁻", "C. SO₄²⁻", "D. NO₃⁻"],
            answer: "C. SO₄²⁻",
            explanation: "Both sulphates, sulphites, and carbonates give a white ppt with BaCl₂. However, barium sulphate (BaSO₄) is insoluble in dilute HCl, while barium sulphite and barium carbonate are soluble.",
            neetFrequency: 4
        },
        {
            question: "What is the color of the bead formed in a borax bead test with a copper salt in the oxidizing flame?",
            options: ["A. Green", "B. Blue", "C. Red", "D. Yellow"],
            answer: "B. Blue",
            explanation: "Copper salts give a blue bead in the oxidizing flame and a red bead in the reducing flame.",
            neetFrequency: 2
        },
        {
            question: "Which of the following is the principle of differential extraction?",
            options: ["A. Differential adsorption", "B. Differential solubility in two immiscible solvents", "C. Differential boiling points", "D. Differential volatility"],
            answer: "B. Differential solubility in two immiscible solvents",
            explanation: "This technique is used to separate a substance from an aqueous solution by shaking it with an organic solvent in which the substance is more soluble.",
            neetFrequency: 2
        },
        {
            question: "In the qualitative analysis scheme, Group IV cations (e.g., Zn²⁺, Ni²⁺) are precipitated as sulphides in:",
            options: ["A. Acidic medium", "B. Basic medium", "C. Neutral medium", "D. Hot water"],
            answer: "B. Basic medium",
            explanation: "H₂S is passed in an ammoniacal (basic) medium. The OH⁻ ions react with H⁺ from H₂S, shifting the equilibrium to the right and increasing the [S²⁻] enough to precipitate the Group IV sulphides.",
            neetFrequency: 3
        }
    ],
    assertionReasons: [
        {
            assertion: "A mixture of o-nitrophenol and p-nitrophenol can be separated by steam distillation.",
            reason: "o-nitrophenol is steam volatile due to intramolecular hydrogen bonding, while p-nitrophenol is not due to intermolecular hydrogen bonding.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation for why steam distillation is an effective separation method for this mixture.",
            neetFrequency: 4
        },
        {
            assertion: "In the test for halogen, the sodium fusion extract is first boiled with concentrated nitric acid before adding silver nitrate.",
            reason: "Nitric acid decomposes any sodium cyanide or sodium sulphide present, which would otherwise interfere with the test.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and provides the correct explanation for this crucial step in the procedure.",
            neetFrequency: 3
        },
        {
            assertion: "All aldehydes give a positive Fehling's test.",
            reason: "Fehling's solution is a weak oxidizing agent.",
            answer: "D",
            explanation: "Assertion is false. Aromatic aldehydes like benzaldehyde do not give a positive Fehling's test. The reason is true; Fehling's solution is a weaker oxidizing agent than Tollens' reagent.",
            neetFrequency: 4
        },
        {
            assertion: "It is necessary to use a fresh sample of ferrous sulphate solution for the brown ring test.",
            reason: "Ferrous sulphate is slowly oxidized to ferric sulphate by air.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and correctly explains why a freshly prepared solution is needed. If Fe²⁺ is oxidized to Fe³⁺, it will not form the brown ring complex.",
            neetFrequency: 2
        },
        {
            assertion: "In paper chromatography, the stationary phase is the paper.",
            reason: "Paper chromatography is a type of partition chromatography.",
            answer: "D",
            explanation: "Assertion is false. The stationary phase is the water adsorbed on the cellulose fibers of the paper. The paper itself is just the support. The reason is a true statement.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Aldehyde", "(b) Phenol", "(c) Primary Amine", "(d) Unsaturation"],
            column2: ["(p) Carbylamine test", "(q) Baeyer's test", "(r) Tollens' test", "(s) Ferric chloride test"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching functional groups with their characteristic chemical tests."
        },
        {
            column1: ["(a) Distillation", "(b) Chromatography", "(c) Crystallisation", "(d) Sublimation"],
            column2: ["(p) Difference in solubilities", "(q) Volatile solid from non-volatile solid", "(r) Differential adsorption", "(s) Difference in boiling points"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching purification techniques with the physical property they are based on."
        },
        {
            column1: ["(a) Lassaigne's test for N", "(b) Lassaigne's test for S", "(c) Brown Ring Test", "(d) Iodoform Test"],
            column2: ["(p) Violet color", "(q) Yellow precipitate", "(r) Prussian blue color", "(s) Formation of [Fe(H₂O)₅NO]SO₄"],
            answer: "a-r, b-p, c-s, d-q",
            explanation: "Matching chemical tests with their characteristic positive results."
        },
        {
            column1: ["(a) Group I cations", "(b) Group II cations", "(c) Group III cations", "(d) Group IV cations"],
            column2: ["(p) Precipitated as hydroxides in NH₄OH/NH₄Cl", "(q) Precipitated as sulphides in basic medium", "(r) Precipitated as chlorides with dil. HCl", "(s) Precipitated as sulphides in acidic medium"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the cation groups with their respective group reagents and precipitate types."
        },
        {
            column1: ["(a) Lucas Test", "(b) Fehling's Test", "(c) Carius Method", "(d) Duma's Method"],
            column2: ["(p) Estimation of Nitrogen", "(q) Estimation of Halogens", "(r) Distinguishing 1°, 2°, 3° alcohols", "(s) Distinguishing aliphatic aldehydes"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching various tests and methods with their specific applications."
        }
    ],
    keyTakeaways: [
        "Qualitative analysis of inorganic salts is a systematic process based on the principles of solubility product and the common ion effect.",
        "Specific chemical tests can be used to reliably identify the presence of different functional groups in organic compounds.",
        "Purification of organic compounds is a crucial first step in their study, and the method chosen depends on the physical properties of the substance and its impurities.",
        "Quantitative analysis methods like Dumas, Kjeldahl, and Carius allow for the determination of the elemental composition and, ultimately, the molecular formula of a compound."
    ],
    mnemonics: [
        {
            text: "For organic tests: 'Tollens' is for Aldehydes (Silver mirror), 'Lucas' is for Alcohols (Turbidity), 'Fehling's' Fails for Aromatic aldehydes.",
            tamil: "கரிம சோதனைகளுக்கு: 'டாலன்ஸ்' ஆல்டிஹைடுகளுக்கு (வெள்ளி ஆடி), 'லூகாஸ்' ஆல்கஹால்களுக்கு (கலங்கல்), 'ஃபெலிங்' அரோமாட்டிக் ஆல்டிஹைடுகளுக்கு தோல்வியடையும்."
        }
    ],
    neetTips: [
        {
            text: "Questions on the confirmatory tests for anions (e.g., Brown Ring test for nitrate, Chromyl chloride test for chloride) and the chemical reactions involved are frequently asked.",
            tamil: "எதிர் அயனிகளுக்கான உறுதிப்படுத்தும் சோதனைகள் (எ.கா., நைட்ரேட்டுக்கான பழுப்பு வளைய சோதனை, குளோரைடுக்கான குரோமைல் குளோரைடு சோதனை) மற்றும் சம்பந்தப்பட்ட வேதி வினைகள் பற்றிய கேள்விகள் அடிக்கடி கேட்கப்படுகின்றன."
        },
        {
            text: "Understand the logic behind the cation analysis groups. Why is HCl added before H₂S? Why is NH₄Cl added before NH₄OH? These questions test your understanding of the common ion effect.",
            tamil: "நேர் அயனி பகுப்பாய்வு குழுக்களுக்குப் பின்னால் உள்ள தர்க்கத்தைப் புரிந்து கொள்ளுங்கள். H₂S-க்கு முன் ஏன் HCl சேர்க்கப்படுகிறது? NH₄OH-க்கு முன் ஏன் NH₄Cl சேர்க்கப்படுகிறது? இந்த கேள்விகள் பொது அயனி விளைவு பற்றிய உங்கள் புரிதலை சோதிக்கின்றன."
        }
    ],
    studentTip: {
        english: "Practical chemistry connects all the theory you've learned. When you learn a test, try to write down the balanced chemical equation for the reaction. This will strengthen your understanding of both theory and practical work.",
        tamil: "செய்முறை வேதியியல் நீங்கள் கற்ற அனைத்து கோட்பாடுகளையும் இணைக்கிறது. நீங்கள் ஒரு சோதனையைக் கற்கும்போது, வினைக்கான சமன்செய்யப்பட்ட வேதிச் சமன்பாட்டை எழுத முயற்சிக்கவும். இது கோட்பாடு மற்றும் செய்முறை இரண்டிலும் உங்கள் புரிதலை வலுப்படுத்தும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why a flame test works for some metal ions (like Na⁺, K⁺) but not for others (like Mg²⁺, Al³⁺). What does this tell you about their electronic energy levels?",
        tamil: "சில உலோக அயனிகளுக்கு (Na⁺, K⁺ போன்றவை) சுடர்ச் சோதனை ஏன் வேலை செய்கிறது, ஆனால் மற்றவற்றுக்கு (Mg²⁺, Al³⁺ போன்றவை) ஏன் வேலை செய்யவில்லை என்று உங்கள் நண்பருடன் விவாதிக்கவும். இது அவற்றின் எலக்ட்ரான் ஆற்றல் மட்டங்களைப் பற்றி உங்களுக்கு என்ன சொல்கிறது?"
    },
    nextChapter: {
        title: "End of Chemistry Syllabus",
        titleTamil: "வேதியியல் பாடத்திட்டம் நிறைவுற்றது"
    },
    validationReport: []
};
