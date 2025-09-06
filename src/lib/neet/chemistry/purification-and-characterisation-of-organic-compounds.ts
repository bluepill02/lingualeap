
import type { NeetModule } from '@/lib/types';

export const PurificationAndCharacterisationOfOrganicCompounds: NeetModule = {
    id: 'neet-chemistry-purification-and-characterisation-of-organic-compounds',
    title: 'Chemistry - Purification and Characterisation of Organic Compounds (கரிமச் சேர்மங்களைத் தூய்மைப்படுத்துதல் மற்றும் பண்பறிதல்)',
    chapter: 'Purification and Characterisation of Organic Compounds',
    subject: 'Chemistry',
    learningObjectives: [
        "Describe various methods for the purification of organic compounds: sublimation, crystallisation, distillation, differential extraction, and chromatography.",
        "Understand the principles behind each purification technique.",
        "Explain qualitative analysis for the detection of nitrogen, sulphur, phosphorus, and halogens in organic compounds (Lassaigne's test).",
        "Understand the principles of quantitative analysis for the estimation of carbon, hydrogen, nitrogen, halogens, sulphur, and phosphorus (Dumas method, Kjeldahl's method, Carius method).",
    ],
    prerequisites: [
        "Basic understanding of states of matter and phase transitions.",
        "Familiarity with simple organic compounds."
    ],
    conceptOverview: "Before the structure of an organic compound can be determined, it must be isolated in a pure form. This chapter deals with the common laboratory techniques used for the purification of organic substances. We will explore methods based on differences in physical properties like solubility (crystallisation), boiling point (distillation), and adsorption (chromatography). Following purification, the chapter introduces methods for characterization. Qualitative analysis helps us determine which elements (besides C and H) are present, while quantitative analysis allows us to determine the exact percentage composition, which is crucial for deducing the empirical and molecular formula of a new compound.",
    tamilConnection: "ஒரு புதிய மூலிகைச் செடியிலிருந்து மருந்துப் பொருளைப் பிரித்தெடுப்பது இந்த அத்தியாயத்தில் உள்ள கொள்கைகளைப் பயன்படுத்துகிறது. வடித்தல், படிகமாக்கல், மற்றும் வண்ணப்பிரிகை போன்ற தூய்மையாக்கல் முறைகள், ஒரு கலவையிலிருந்து ஒரு குறிப்பிட்ட சேர்மத்தை தனியாகப் பிரிக்க உதவுகின்றன. இது நவீன வேதியியல் மற்றும் மருந்துத் துறையின் ஒரு முக்கிய பகுதியாகும்.",
    culturalContext: "The traditional process of making 'karupatti' (palm jaggery) from palmyra palm sap involves purification steps. The sap is filtered and then heated in large pans to evaporate water, causing the jaggery to crystallize out. This is a large-scale application of the principles of filtration and crystallization discussed in this chapter.",
    syllabusMapping: [
        {
            topic: "Purification and Characterisation of Organic Compounds",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 11: Fundamentals of Organic Chemistry",
            ncertReference: "Class 11 Chemistry - Part 2, Chapter 12: Organic Chemistry – Some Basic Principles and Techniques",
            notes: "A factual chapter. The principles of different chromatography techniques (especially paper and column) and the chemical reactions involved in Lassaigne's test for element detection are important.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapter 11 maps to NEET Chemistry Unit 21'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Methods of Purification of Organic Compounds',
                tamil: '1. கரிமச் சேர்மங்களைத் தூய்மையாக்கும் முறைகள்'
            },
            content: [
                {
                    english: `**Crystallisation (படிகமாக்கல்):** Based on the difference in the solubilities of the compound and the impurities in a suitable solvent. The impure compound is dissolved in a solvent at a higher temperature and then allowed to cool. The pure compound crystallises out, leaving the impurities dissolved in the solvent.`,
                    tamil: `**படிகமாக்கல்:** ஒரு பொருத்தமான கரைப்பானில் சேர்மம் மற்றும் மாசுகளின் கரைதிறன் வேறுபாட்டை அடிப்படையாகக் கொண்டது. மாசடைந்த சேர்மம் உயர் வெப்பநிலையில் ஒரு கரைப்பானில் கரைக்கப்பட்டு பின்னர் குளிர்விக்கப்படுகிறது. தூய சேர்மம் படிகமாகிறது, மாசுகள் கரைப்பானில் கரைந்த நிலையில் இருக்கும்.`
                },
                {
                    english: `**Sublimation (பதங்கமாதல்):** Used to separate sublimable compounds from non-sublimable impurities. The process involves heating a solid until it turns directly into a gas, and then cooling the gas to get the solid back. Examples: Camphor, Naphthalene.`,
                    tamil: `**பதங்கமாதல்:** பதங்கமாகும் சேர்மங்களை பதங்கமாகாத மாசுகளிலிருந்து பிரிக்கப் பயன்படுகிறது. இந்த செயல்முறை ஒரு திண்மத்தை நேரடியாக வாயுவாக மாற்றும் வரை சூடாக்குவதையும், பின்னர் வாயுவைக் குளிர்வித்து மீண்டும் திண்மத்தைப் பெறுவதையும் உள்ளடக்கியது. எடுத்துக்காட்டுகள்: கற்பூரம், நாப்தலீன்.`
                },
                {
                    english: `**Distillation (வடித்தல்):** Used to separate (i) volatile liquids from non-volatile solutes, or (ii) liquids having a sufficient difference in their boiling points. Fractional distillation is used when the boiling point difference is small. Distillation under reduced pressure is used for liquids that decompose at their boiling points.`,
                    tamil: `**வடித்தல்:** (i) ஆவியாகும் திரவங்களை ஆவியாகாத கரைப்பான்களிலிருந்து பிரிக்க, அல்லது (ii) கொதிநிலைகளில் போதுமான வேறுபாடு கொண்ட திரவங்களைப் பிரிக்கப் பயன்படுகிறது. கொதிநிலை வேறுபாடு குறைவாக இருக்கும்போது பின்னக் காய்ச்சி வடித்தல் பயன்படுத்தப்படுகிறது. கொதிநிலையில் சிதைவடையும் திரவங்களுக்கு குறைந்த அழுத்தத்தில் வடித்தல் பயன்படுத்தப்படுகிறது.`
                },
                {
                    english: `**Chromatography (வண்ணப்பிரிகையியல்):** A powerful technique based on the differential adsorption of components of a mixture on a stationary phase as a mobile phase passes over it.
                    *   **Adsorption Chromatography:** Column and Thin-Layer Chromatography (TLC).
                    *   **Partition Chromatography:** Paper Chromatography.`,
                    tamil: `**வண்ணப்பிரிகையியல்:** ஒரு கலவையின் கூறுகள் ஒரு நிலைத்த கட்டத்தின் மீது ஒரு நகரும் கட்டம் செல்லும்போது வேறுபட்ட பரப்புக் கவர்தலை அடிப்படையாகக் கொண்ட ஒரு சக்திவாய்ந்த நுட்பமாகும்.
                    *   **பரப்புக் கவர்ச்சி வண்ணப்பிரிகை:** பத்தி மற்றும் மெல்லிய அடுக்கு வண்ணப்பிரிகை (TLC).
                    *   **பங்கீட்டு வண்ணப்பிரிகை:** தாள் வண்ணப்பிரிகை.`
                }
            ]
        },
        {
            heading: {
                english: '2. Qualitative Analysis of Organic Compounds (Lassaigne\'s Test)',
                tamil: '2. கரிமச் சேர்மங்களின் பண்பறி பகுப்பாய்வு (லசைன் சோதனை)'
            },
            content: [
                {
                    english: `This test is used to detect the presence of extra elements like Nitrogen, Sulphur, and Halogens in an organic compound. The organic compound is fused with sodium metal to convert these elements into ionic sodium salts.`,
                    tamil: `இந்த சோதனை ஒரு கரிமச் சேர்மத்தில் நைட்ரஜன், கந்தகம், மற்றும் ஹாலஜன்கள் போன்ற கூடுதல் தனிமங்கள் இருப்பதை கண்டறியப் பயன்படுகிறது. கரிமச் சேர்மம் சோடியம் உலோகத்துடன் உருக்கப்பட்டு இந்த தனிமங்களை அயனி சோடியம் உப்புகளாக மாற்றுகிறது.`
                },
                {
                    english: `*   **For Nitrogen:** Sodium fusion extract + FeSO₄ + H₂SO₄ → Prussian blue colour indicates N.
*   **For Sulphur:** Sodium fusion extract + Sodium nitroprusside → Violet colour indicates S.
*   **For Halogens:** Sodium fusion extract + HNO₃ + AgNO₃ → White ppt (AgCl), Pale yellow ppt (AgBr), Yellow ppt (AgI) indicates Halogens.`,
                    tamil: `*   **நைட்ரஜனுக்கு:** சோடியம் உருக்குச் சாறு + FeSO₄ + H₂SO₄ → புருசியன் நீல நிறம் N இருப்பதைக் குறிக்கிறது.
*   **கந்தகத்திற்கு:** சோடியம் உருக்குச் சாறு + சோடியம் நைட்ரோபுரூசைடு → ஊதா நிறம் S இருப்பதைக் குறிக்கிறது.
*   **ஹாலஜன்களுக்கு:** சோடியம் உருக்குச் சாறு + HNO₃ + AgNO₃ → வெள்ளை வீழ்படிவு (AgCl), வெளிர் மஞ்சள் வீழ்படிவு (AgBr), மஞ்சள் வீழ்படிவு (AgI) ஹாலஜன்கள் இருப்பதைக் குறிக்கிறது.`
                }
            ]
        },
        {
            heading: {
                english: '3. Quantitative Analysis (அளவறி பகுப்பாய்வு)',
                tamil: '3. அளவறி பகுப்பாய்வு'
            },
            content: [
                {
                    english: `**Dumas Method (டூமாஸ் முறை) for Nitrogen:** A known mass of the organic compound is heated with excess CuO. The nitrogen gas produced is collected over KOH solution and its volume is measured.`,
                    tamil: `**நைட்ரஜனுக்கான டூமாஸ் முறை:** ஒரு கரிமச் சேர்மத்தின் அறியப்பட்ட நிறை அதிகப்படியான CuO உடன் சூடாக்கப்படுகிறது. உற்பத்தி செய்யப்படும் நைட்ரஜன் வாயு KOH கரைசலின் மீது சேகரிக்கப்பட்டு அதன் கனஅளவு அளவிடப்படுகிறது.`
                },
                {
                    english: `**Kjeldahl's Method (கெல்டால் முறை) for Nitrogen:** The compound is heated with conc. H₂SO₄. The nitrogen in the compound gets converted to (NH₄)₂SO₄. The ammonia evolved is then titrated. Not applicable for nitro and azo compounds.`,
                    tamil: `**நைட்ரஜனுக்கான கெல்டால் முறை:** சேர்மம் அடர் H₂SO₄ உடன் சூடாக்கப்படுகிறது. சேர்மத்தில் உள்ள நைட்ரஜன் (NH₄)₂SO₄ ஆக மாற்றப்படுகிறது. பின்னர் வெளிப்படும் அம்மோனியா தரம் பார்க்கப்படுகிறது. நைட்ரோ மற்றும் அசோ சேர்மங்களுக்குப் பொருந்தாது.`
                },
                {
                    english: `**Carius Method (கேரியஸ் முறை) for Halogens/Sulphur:** A known mass of the compound is heated with fuming HNO₃ in a sealed Carius tube. The halogen is converted to silver halide (AgX) and sulphur to barium sulphate (BaSO₄), which are then weighed.`,
                    tamil: `**ஹாலஜன்கள்/கந்தகத்திற்கான கேரியஸ் முறை:** ஒரு சேர்மத்தின் அறியப்பட்ட நிறை புகையும் HNO₃ உடன் ஒரு மூடிய கேரியஸ் குழாயில் சூடாக்கப்படுகிறது. ஹாலஜன் வெள்ளி ஹாலைடாகவும் (AgX) கந்தகம் பேரியம் சல்பேட்டாகவும் (BaSO₄) மாற்றப்பட்டு, பின்னர் அவை எடையிடப்படுகின்றன.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Chromatography Principle",
            titleTamil: "நீட் நிலை: வண்ணப்பிரிகையியல் கொள்கை",
            difficulty: 'Easy',
            problem: "In paper chromatography, a spot of ink is placed on a filter paper. The paper is then dipped in a solvent. If the ink separates into two spots, what can you conclude about the components and their properties?",
            problemTamil: "தாள் வண்ணப்பிரிகையில், ஒரு மை புள்ளி ஒரு வடிகட்டித் தாளில் வைக்கப்படுகிறது. பின்னர் அந்தத் தாள் ஒரு கரைப்பானில் நனைக்கப்படுகிறது. மை இரண்டு புள்ளிகளாகப் பிரிந்தால், கூறுகளையும் அவற்றின் பண்புகளையும் பற்றி நீங்கள் என்ன முடிவுக்கு வர முடியும்?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Paper chromatography works on the principle of partition chromatography. The filter paper contains water trapped in it which acts as the stationary phase.",
                    explanationTamil: "தாள் வண்ணப்பிரிகை பங்கீட்டு வண்ணப்பிரிகைக் கொள்கையில் செயல்படுகிறது. வடிகட்டித் தாளில் சிக்கியுள்ள நீர் நிலைத்த கட்டமாக செயல்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "The fact that the ink separates into two spots means that the original ink was a mixture of at least two different chemical compounds.",
                    explanationTamil: "மை இரண்டு புள்ளிகளாகப் பிரிவது அசல் மை குறைந்தது இரண்டு வெவ்வேறு வேதிச் சேர்மங்களின் கலவை என்பதைக் குறிக்கிறது."
                },
                {
                    step: 3,
                    explanation: "The spot that travels further up the paper is more soluble in the mobile phase (the solvent) and less strongly adsorbed by the stationary phase (the paper).",
                    explanationTamil: "தாளில் மேலும் மேலே பயணிக்கும் புள்ளி நகரும் கட்டத்தில் (கரைப்பான்) அதிக கரைதிறன் கொண்டது மற்றும் நிலைத்த கட்டத்தால் (தாள்) குறைவாக பரப்புக் கவரப்படுகிறது."
                },
                {
                    step: 4,
                    explanation: "The spot that travels a shorter distance is less soluble in the mobile phase and more strongly adsorbed by the stationary phase.",
                    explanationTamil: "குறைந்த தூரம் பயணிக்கும் புள்ளி நகரும் கட்டத்தில் குறைந்த கரைதிறன் கொண்டது மற்றும் நிலைத்த கட்டத்தால் அதிகமாக பரப்புக் கவரப்படுகிறது."
                }
            ],
            neetHack: "Remember: 'Mobile means Move'. The component more 'friendly' with the mobile phase moves further. The component more 'sticky' to the stationary phase moves less.",
            neetHackTamil: "'நகரும் என்றால் நகரு'. நகரும் கட்டத்துடன் அதிக 'நட்பாக' உள்ள கூறு மேலும் நகரும். நிலைத்த கட்டத்துடன் அதிக 'ஒட்டும்' தன்மை கொண்ட கூறு குறைவாக நகரும்.",
            commonPitfall: "Confusing the properties. High solubility in the mobile phase and low adsorption on the stationary phase lead to a higher Rf value (travels further).",
            commonPitfallTamil: "பண்புகளைக் குழப்பிக் கொள்ளுதல். நகரும் கட்டத்தில் அதிக கரைதிறன் மற்றும் நிலைத்த கட்டத்தில் குறைந்த பரப்புக் கவர்தல் ஆகியவை அதிக Rf மதிப்புக்கு (அதிக தூரம் பயணிக்கும்) வழிவகுக்கிறது."
        },
        {
            title: "JEE Level: Duma's Method Calculation",
            titleTamil: "ஜே.இ.இ நிலை: டூமாஸ் முறை கணக்கீடு",
            difficulty: 'Medium',
            problem: "In Duma's method for estimation of nitrogen, 0.3 g of an organic compound gave 50 mL of nitrogen collected at 300 K temperature and 715 mm pressure. Calculate the percentage composition of nitrogen in the compound. (Aqueous tension at 300 K = 15 mm)",
            problemTamil: "நைட்ரஜன் மதிப்பீட்டிற்கான டூமாஸ் முறையில், 0.3 கிராம் கரிமச் சேர்மம் 300 K வெப்பநிலை மற்றும் 715 மிமீ அழுத்தத்தில் 50 மி.லி நைட்ரஜனை சேகரித்துக் கொடுத்தது. சேர்மத்தில் உள்ள நைட்ரஜனின் சதவீத இயைபைக் கணக்கிடுக. (300 K இல் நீரியல் இழுவிசை = 15 மிமீ)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the pressure of the dry nitrogen gas by subtracting the aqueous tension from the total pressure.",
                    explanationTamil: "மொத்த அழுத்தத்திலிருந்து நீரியல் இழுவிசையைக் கழிப்பதன் மூலம் உலர்ந்த நைட்ரஜன் வாயுவின் அழுத்தத்தைக் கணக்கிடவும்.",
                    calculation: "P = 715 - 15 = 700 mm Hg"
                },
                {
                    step: 2,
                    explanation: "Convert the experimental conditions to STP conditions (P₀=760mm, T₀=273K) using the combined gas law: (P₁V₁/T₁) = (P₀V₀/T₀).",
                    explanationTamil: "இணைந்த வாயு விதியைப் பயன்படுத்தி சோதனை நிலைமைகளை திட்ட நிலைமைகளுக்கு (P₀=760mm, T₀=273K) மாற்றவும்: (P₁V₁/T₁) = (P₀V₀/T₀).",
                    calculation: "V₀ = \\frac{P₁V₁T₀}{P₀T₁} = \\frac{700 \\times 50 \\times 273}{760 \\times 300} \\approx 41.9 mL"
                },
                {
                    step: 3,
                    explanation: "We know that 22400 mL of N₂ at STP weighs 28 g.",
                    explanationTamil: "திட்ட நிலையில் 22400 மி.லி N₂ இன் எடை 28 கிராம் என நமக்குத் தெரியும்."
                },
                {
                    step: 4,
                    explanation: "Calculate the mass of 41.9 mL of N₂ at STP.",
                    explanationTamil: "திட்ட நிலையில் 41.9 மி.லி N₂ இன் நிறையைக் கணக்கிடவும்.",
                    calculation: "Mass of N₂ = \\frac{28}{22400} \\times 41.9 \\approx 0.0524 g"
                },
                {
                    step: 5,
                    explanation: "Calculate the percentage of nitrogen in the organic compound.",
                    explanationTamil: "கரிமச் சேர்மத்தில் உள்ள நைட்ரஜனின் சதவீதத்தைக் கணக்கிடவும்.",
                    calculation: "\\% \\text{ of N} = \\frac{\\text{Mass of N₂}}{\\text{Mass of compound}} \\times 100 = \\frac{0.0524}{0.3} \\times 100 \\approx 17.46\\%"
                }
            ],
            neetHack: "A direct formula for percentage of Nitrogen by Duma's method is (28/22400) * (Volume of N₂ at STP / Mass of substance) * 100. The key is correctly converting the given volume to STP volume.",
            neetHackTamil: "டூமாஸ் முறையால் நைட்ரஜனின் சதவீதத்திற்கான நேரடி சூத்திரம் (28/22400) * (திட்ட நிலையில் N₂ இன் கனஅளவு / பொருளின் நிறை) * 100 ஆகும். முக்கியமானது கொடுக்கப்பட்ட கனஅளவை திட்ட நிலை கனஅளவிற்கு சரியாக மாற்றுவதாகும்."
        },
        {
            title: "NEET Level: Lassaigne's Test Interpretation",
            titleTamil: "நீட் நிலை: லசைன் சோதனை விளக்கம்",
            difficulty: 'Easy',
            problem: "An organic compound gives a Prussian blue colour in Lassaigne's test for nitrogen. What is the chemical formula of the Prussian blue compound?",
            problemTamil: "ஒரு கரிமச் சேர்மம் நைட்ரஜனுக்கான லசைன் சோதனையில் புருசியன் நீல நிறத்தைக் கொடுக்கிறது. புருசியன் நீலச் சேர்மத்தின் வேதியியல் வாய்ப்பாடு என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "In Lassaigne's test, nitrogen from the organic compound reacts with sodium to form sodium cyanide (NaCN).",
                    explanationTamil: "லசைன் சோதனையில், கரிமச் சேர்மத்திலிருந்து வரும் நைட்ரஜன் சோடியத்துடன் வினைபுரிந்து சோடியம் சயனைடை (NaCN) உருவாக்குகிறது."
                },
                {
                    step: 2,
                    explanation: "This NaCN then reacts with ferrous sulphate (FeSO₄) to form sodium ferrocyanide.",
                    explanationTamil: "இந்த NaCN பின்னர் ஃபெரஸ் சல்பேட்டுடன் (FeSO₄) வினைபுரிந்து சோடியம் ஃபெரோசயனைடை உருவாக்குகிறது.",
                    calculation: "FeSO₄ + 6NaCN → Na₄[Fe(CN)₆] + Na₂SO₄"
                },
                {
                    step: 3,
                    explanation: "On adding ferric ions (from H₂SO₄ + FeSO₄), the sodium ferrocyanide reacts to form a blue precipitate of Ferric ferrocyanide, which is Prussian blue.",
                    explanationTamil: "ஃபெரிக் அயனிகளைச் சேர்க்கும்போது (H₂SO₄ + FeSO₄ இலிருந்து), சோடியம் ஃபெரோசயனைடு வினைபுரிந்து ஃபெரிக் ஃபெரோசயனைடின் நீல வீழ்படிவை உருவாக்குகிறது, இதுவே புருசியன் நீலமாகும்.",
                    calculation: "3Na₄[Fe(CN)₆] + 4Fe³⁺ → Fe₄[Fe(CN)₆]₃ + 12Na⁺"
                },
                {
                    step: 4,
                    explanation: "The chemical formula for Prussian blue is Fe₄[Fe(CN)₆]₃.",
                    explanationTamil: "புருசியன் நீலத்திற்கான வேதியியல் வாய்ப்பாடு Fe₄[Fe(CN)₆]₃ ஆகும்."
                }
            ],
            neetHack: "Just remember 'Prussian blue' involves iron in two different oxidation states (+2 and +3) and the cyanide ligand. The formula Fe₄[Fe(CN)₆]₃ is a common memorization point.",
            neetHackTamil: "'புருசியன் நீலம்' என்பது இரண்டு வெவ்வேறு ஆக்சிஜனேற்ற நிலைகளில் (+2 மற்றும் +3) இரும்பு மற்றும் சயனைடு ஈனியை உள்ளடக்கியது என்பதை நினைவில் கொள்க. Fe₄[Fe(CN)₆]₃ என்ற சூத்திரம் ஒரு பொதுவான மனப்பாடப் புள்ளி ஆகும்."
        },
        {
            title: "JEE Level: Carius Method Calculation",
            titleTamil: "ஜே.இ.இ நிலை: கேரியஸ் முறை கணக்கீடு",
            difficulty: 'Medium',
            problem: "0.25 g of an organic compound containing chlorine gave 0.40 g of silver chloride in Carius estimation. Find the percentage of chlorine in the compound. (Atomic mass: Ag=108, Cl=35.5)",
            problemTamil: "குளோரின் கொண்ட 0.25 கிராம் கரிமச் சேர்மம் கேரியஸ் மதிப்பீட்டில் 0.40 கிராம் வெள்ளி குளோரைடைத் தந்தது. சேர்மத்தில் உள்ள குளோரின் சதவீதத்தைக் கண்டறியவும். (அணு நிறை: Ag=108, Cl=35.5)",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Calculate the molar mass of silver chloride (AgCl).",
                    explanationTamil: "வெள்ளி குளோரைடின் (AgCl) மோலார் நிறையைக் கணக்கிடவும்.",
                    calculation: "Molar mass of AgCl = 108 + 35.5 = 143.5 g/mol"
                },
                {
                    step: 2,
                    explanation: "Find the mass of chlorine present in the 0.40 g of AgCl formed.",
                    explanationTamil: "உருவான 0.40 கிராம் AgCl இல் உள்ள குளோரின் நிறையைக் கண்டறியவும்.",
                    calculation: "Mass of Cl = (Atomic mass of Cl / Molar mass of AgCl) * Mass of AgCl = (35.5 / 143.5) * 0.40 g ≈ 0.0989 g"
                },
                {
                    step: 3,
                    explanation: "Calculate the percentage of chlorine in the original organic compound.",
                    explanationTamil: "அசல் கரிமச் சேர்மத்தில் உள்ள குளோரின் சதவீதத்தைக் கணக்கிடவும்.",
                    calculation: "% of Cl = (Mass of Cl / Mass of organic compound) * 100 = (0.0989 / 0.25) * 100 ≈ 39.56%"
                }
            ],
            neetHack: "The direct formula for % of Halogen in Carius method is: (Atomic mass of Halogen / Molar mass of AgX) * (Mass of AgX formed / Mass of substance) * 100.",
            neetHackTamil: "கேரியஸ் முறையில் ஹாலஜனின் சதவீதத்திற்கான நேரடி சூத்திரம்: (ஹாலஜனின் அணு நிறை / AgX இன் மோலார் நிறை) * (உருவான AgX இன் நிறை / பொருளின் நிறை) * 100."
        },
        {
            title: "NEET Level: Choosing Purification Technique",
            titleTamil: "நீட் நிலை: தூய்மையாக்கல் நுட்பத்தைத் தேர்ந்தெடுத்தல்",
            difficulty: 'Easy',
            problem: "A mixture contains camphor and sand. Which method is most suitable for separating them?",
            problemTamil: "ஒரு கலவையில் கற்பூரம் மற்றும் மணல் உள்ளது. அவற்றைப் பிரிக்க மிகவும் பொருத்தமான முறை எது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the properties of the components. Camphor is a solid that sublimes on heating (turns directly to gas), while sand is a non-volatile, non-sublimable solid.",
                    explanationTamil: "கூறுகளின் பண்புகளை பகுப்பாய்வு செய்யவும். கற்பூரம் என்பது சூடாக்கும்போது பதங்கமாகும் (நேரடியாக வாயுவாக மாறும்) ஒரு திண்மம் ஆகும், அதேசமயம் மணல் ஒரு ஆவியாகாத, பதங்கமாகாத திண்மம் ஆகும்."
                },
                {
                    step: 2,
                    explanation: "Choose a technique that exploits this difference in property. Sublimation is the ideal method to separate a sublimable solid from a non-sublimable one.",
                    explanationTamil: "இந்த பண்பு வேறுபாட்டைப் பயன்படுத்தும் ஒரு நுட்பத்தைத் தேர்வு செய்யவும். பதங்கமாகும் திண்மத்தை பதங்கமாகாத ஒன்றிலிருந்து பிரிக்க பதங்கமாதல் ஒரு சிறந்த முறையாகும்."
                },
                {
                    step: 3,
                    explanation: "The process involves gently heating the mixture. The camphor will turn into vapour, which can be collected and cooled on a separate surface to get pure camphor crystals, leaving the sand behind.",
                    explanationTamil: "இந்த செயல்முறை கலவையை மெதுவாக சூடாக்குவதை உள்ளடக்கியது. கற்பூரம் ஆவியாக மாறும், அதை சேகரித்து ஒரு தனி பரப்பில் குளிர்வித்து தூய கற்பூர படிகங்களைப் பெறலாம், மணல் பின்தங்கிவிடும்."
                }
            ],
            commonPitfall: "Considering techniques like filtration or evaporation which would not work here since both components are insoluble solids and camphor is volatile.",
            commonPitfallTamil: "வடிகட்டுதல் அல்லது ஆவியாதல் போன்ற நுட்பங்களைக் கருத்தில் கொள்வது, இங்கு இரண்டு கூறுகளும் கரையாத திண்மங்கள் மற்றும் கற்பூரம் ஆவியாகக்கூடியது என்பதால் வேலை செய்யாது."
        }
    ],
    mcqs: [
        {
            question: "Glycerol can be purified by:",
            options: ["A. Simple distillation", "B. Distillation under reduced pressure", "C. Fractional distillation", "D. Steam distillation"],
            answer: "B. Distillation under reduced pressure",
            explanation: "Glycerol has a high boiling point and decomposes before it is reached. Distillation under reduced pressure allows it to boil at a lower temperature, preventing decomposition.",
            neetFrequency: 4
        },
        {
            question: "In the Lassaigne's test for nitrogen in an organic compound, the Prussian blue colour is obtained due to the formation of:",
            options: ["A. Ferric ferrocyanide", "B. Sodium ferrocyanide", "C. Sodium cyanide", "D. Ferrous ferricyanide"],
            answer: "A. Ferric ferrocyanide",
            explanation: "The final blue compound formed is Ferric ferrocyanide, Fe₄[Fe(CN)₆]₃.",
            neetFrequency: 5
        },
        {
            question: "Chromatography is based on the principle of:",
            options: ["A. Different boiling points", "B. Different solubilities", "C. Differential adsorption or partition", "D. Different melting points"],
            answer: "C. Differential adsorption or partition",
            explanation: "Chromatography techniques separate components based on their differential distribution between a stationary phase and a mobile phase.",
            neetFrequency: 4
        },
        {
            question: "Kjeldahl's method is not applicable for compounds containing nitrogen in:",
            options: ["A. Amino groups", "B. Amide groups", "C. Nitro groups", "D. Imine groups"],
            answer: "C. Nitro groups",
            explanation: "Kjeldahl's method is not applicable to compounds containing nitrogen in nitro and azo groups, and nitrogen present in a ring (e.g., pyridine), as the nitrogen in these compounds does not get converted to ammonium sulphate under the reaction conditions.",
            neetFrequency: 3
        },
        {
            question: "The most suitable method for separation of a mixture of ortho-nitrophenol and para-nitrophenol is:",
            options: ["A. Sublimation", "B. Crystallisation", "C. Steam distillation", "D. Chromatography"],
            answer: "C. Steam distillation",
            explanation: "Ortho-nitrophenol is steam volatile due to intramolecular hydrogen bonding, while para-nitrophenol is not due to intermolecular hydrogen bonding. This difference allows for their separation by steam distillation.",
            neetFrequency: 4
        },
        { question: "Which of the following elements is detected by a violet colouration with sodium nitroprusside in Lassaigne's test?", options: ["A. Nitrogen", "B. Sulphur", "C. Chlorine", "D. Phosphorus"], answer: "B. Sulphur", explanation: "The sodium fusion extract gives a violet colour with sodium nitroprusside solution, indicating the presence of sulphur.", neetFrequency: 3 },
        { question: "The principle of paper chromatography is:", options: ["A. Adsorption", "B. Partition", "C. Ion exchange", "D. Molecular sieving"], answer: "B. Partition", explanation: "Paper chromatography is a type of partition chromatography where the components are distributed between the stationary phase (water trapped in paper) and the mobile phase (solvent).", neetFrequency: 3 },
        { question: "In the Carius method for the estimation of halogens, the organic compound is heated with:", options: ["A. Fuming nitric acid and silver nitrate", "B. Sulphuric acid and sodium peroxide", "C. Hydrochloric acid", "D. Sodium metal"], answer: "A. Fuming nitric acid and silver nitrate", explanation: "The compound is heated with fuming nitric acid in the presence of silver nitrate to form a precipitate of silver halide.", neetFrequency: 2 },
        { question: "The separation of a mixture of liquids by fractional distillation is based on the difference in their:", options: ["A. Densities", "B. Solubilities", "C. Boiling points", "D. Melting points"], answer: "C. Boiling points", explanation: "Fractional distillation is used to separate liquids that have a small difference in their boiling points.", neetFrequency: 2 },
        { question: "In Thin Layer Chromatography (TLC), the stationary phase is:", options: ["A. A liquid", "B. A solid adsorbent on a glass plate", "C. A paper strip", "D. A gas"], answer: "B. A solid adsorbent on a glass plate", explanation: "In TLC, the stationary phase is a thin layer of an adsorbent like silica gel or alumina coated on a glass plate.", neetFrequency: 3 },
        { question: "A positive test for nitrogen in Lassaigne's test involves the formation of:", options: ["A. Fe(OH)₃", "B. Na₄[Fe(CN)₆]", "C. Fe₄[Fe(CN)₆]₃", "D. Fe(CNS)₃"], answer: "C. Fe₄[Fe(CN)₆]₃", explanation: "The final Prussian blue coloured compound is Ferric ferrocyanide, which confirms the presence of nitrogen.", neetFrequency: 4 },
        { question: "Which of the following cannot be purified by sublimation?", options: ["A. Naphthalene", "B. Camphor", "C. Sodium chloride", "D. Iodine"], answer: "C. Sodium chloride", explanation: "Sodium chloride is an ionic compound with a very high melting point and does not sublime under normal conditions.", neetFrequency: 1 },
        { question: "The function of copper oxide (CuO) in Duma's method is:", options: ["A. To reduce nitrogen", "B. To oxidize carbon and hydrogen", "C. To absorb CO₂", "D. To act as a catalyst"], answer: "B. To oxidize carbon and hydrogen", explanation: "CuO acts as an oxidizing agent, converting carbon to CO₂ and hydrogen to H₂O.", neetFrequency: 2 },
        { question: "The moving phase in paper chromatography is:", options: ["A. The paper", "B. Water trapped in the paper", "C. A liquid solvent", "D. Air"], answer: "C. A liquid solvent", explanation: "The liquid solvent that moves up the paper due to capillary action is the mobile phase.", neetFrequency: 2 },
        { question: "In Kjeldahl's method, the nitrogen present is estimated as:", options: ["A. N₂ gas", "B. NH₃ gas", "C. NO₂ gas", "D. NaCN"], answer: "B. NH₃ gas", explanation: "The nitrogen is converted to ammonium sulphate, which upon treatment with alkali liberates ammonia gas. This ammonia is then titrated to estimate the nitrogen.", neetFrequency: 3 },
        { question: "If an organic compound contains both nitrogen and sulphur, the Lassaigne's extract gives a blood-red colour with FeCl₃ due to the formation of:", options: ["A. Fe(CN)₂", "B. Fe(CNS)₃", "C. Na₂S", "D. FeSO₄"], answer: "B. Fe(CNS)₃", explanation: "When both N and S are present, they form sodium thiocyanate (NaSCN). This gives a blood-red coloration with ferric chloride, forming ferric thiocyanate.", neetFrequency: 3 },
        { question: "Which technique is most suitable for separating a mixture of glucose and fructose?", options: ["A. Distillation", "B. Sublimation", "C. Crystallisation", "D. Chromatography"], answer: "D. Chromatography", explanation: "Glucose and fructose are isomers with very similar chemical and physical properties, making them difficult to separate by other means. Chromatography is the most effective method.", neetFrequency: 4 },
        { question: "The term R_f value is associated with:", options: ["A. Distillation", "B. Crystallisation", "C. Chromatography", "D. Sublimation"], answer: "C. Chromatography", explanation: "The Retention Factor (R_f) value is used in paper and thin-layer chromatography to identify compounds. R_f = (Distance travelled by solute) / (Distance travelled by solvent).", neetFrequency: 2 },
        { question: "Differential extraction is based on the difference in:", options: ["A. Boiling points", "B. Solubilities", "C. Densities", "D. Adsorption"], answer: "B. Solubilities", explanation: "Differential extraction separates a substance from a solution by shaking it with another solvent in which the substance is more soluble and the original solvent is immiscible.", neetFrequency: 2 },
        { question: "A liquid which decomposes at its normal boiling point can be purified by:", options: ["A. Simple distillation", "B. Steam distillation", "C. Fractional distillation", "D. Distillation under reduced pressure"], answer: "D. Distillation under reduced pressure", explanation: "Reducing the pressure lowers the boiling point, allowing the liquid to distill without reaching its decomposition temperature.", neetFrequency: 3 },
        { question: "In the estimation of sulphur by Carius method, sulphur is converted into:", options: ["A. H₂S", "B. SO₂", "C. BaSO₄", "D. Na₂SO₄"], answer: "C. BaSO₄", explanation: "The sulphur is first oxidized to sulphuric acid (H₂SO₄) by fuming nitric acid, and then precipitated as barium sulphate (BaSO₄) by adding barium chloride.", neetFrequency: 3 },
        { question: "A substance which is sparingly soluble at room temperature but highly soluble at high temperature can be purified by:", options: ["A. Distillation", "B. Crystallisation", "C. Chromatography", "D. Sublimation"], answer: "B. Crystallisation", explanation: "This significant difference in solubility with temperature is the ideal condition for purification by crystallisation.", neetFrequency: 2 },
        { question: "The final confirmation of halogens in Lassaigne's test is done using:", options: ["A. FeSO₄", "B. Na₂S", "C. AgNO₃", "D. NaOH"], answer: "C. AgNO₃", explanation: "After acidifying with nitric acid, silver nitrate (AgNO₃) is added, which precipitates the halogens as silver halides (AgCl, AgBr, AgI).", neetFrequency: 3 },
        { question: "The function of KOH solution in Duma's method is to absorb:", options: ["A. Nitrogen", "B. Carbon dioxide", "C. Oxygen", "D. Water vapour"], answer: "B. Carbon dioxide", explanation: "The gaseous mixture of N₂ and CO₂ is passed over a concentrated solution of KOH, which absorbs the acidic gas CO₂, leaving only nitrogen to be collected.", neetFrequency: 2 },
        { question: "Which method is used to separate aniline from aniline-water mixture?", options: ["A. Sublimation", "B. Steam distillation", "C. Fractional distillation", "D. Distillation under reduced pressure"], answer: "B. Steam distillation", explanation: "Aniline is steam volatile and immiscible with water, making steam distillation the ideal method for its purification.", neetFrequency: 3 }
    ],
    assertionReasons: [
        {
            assertion: "Chromatography is a technique for separation, purification, and identification of components of a mixture.",
            reason: "It is based on the differential distribution of the components between a stationary phase and a mobile phase.",
            answer: "A",
            explanation: "The assertion is true, and the reason correctly explains the fundamental principle of chromatography."
        },
        {
            assertion: "Kjeldahl's method is not applicable to compounds containing nitrogen in a nitro group.",
            reason: "The nitrogen in nitro compounds is not converted to ammonium sulphate under the conditions of the experiment.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation for why Kjeldahl's method fails for nitro compounds."
        },
        {
            assertion: "Glycerol is purified by distillation under reduced pressure.",
            reason: "Glycerol is a volatile liquid.",
            answer: "C",
            explanation: "The assertion is true. However, the reason is false. Glycerol is not volatile; it has a very high boiling point (290°C) and decomposes before reaching it. Distillation under reduced pressure is used to lower its boiling point to prevent decomposition.",
            neetFrequency: 3
        },
        {
            assertion: "Lassaigne's test for nitrogen requires fusing the organic compound with sodium metal.",
            reason: "Sodium fusion converts the covalent nitrogen into ionic sodium cyanide.",
            answer: "A",
            explanation: "The assertion describes the first step of the test. The reason correctly explains why this step is necessary—to convert the non-reactive covalent nitrogen into an ionic form (CN⁻) that can be easily detected by chemical tests."
        },
        {
            assertion: "In paper chromatography, the stationary phase is a solid.",
            reason: "The paper used in paper chromatography is made of cellulose.",
            answer: "D",
            explanation: "The assertion is false. Paper chromatography is a type of partition chromatography. The stationary phase is the water trapped in the pores of the cellulose paper, which is a liquid. The reason is true, the paper is made of cellulose, but this doesn't make the stationary phase a solid in the context of the separation mechanism."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Sublimation", "(b) Fractional Distillation", "(c) Steam Distillation", "(d) Crystallisation"],
            column2: ["(p) Difference in boiling points is small", "(q) Component is steam volatile", "(r) Component sublimes", "(s) Difference in solubilities"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the purification technique with its underlying principle.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Nitrogen detection", "(b) Sulphur detection", "(c) Halogen detection (Cl)", "(d) N and S together"],
            column2: ["(p) White precipitate with AgNO₃", "(q) Blood-red colour with FeCl₃", "(r) Prussian blue colour", "(s) Violet colour with sodium nitroprusside"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the element detected in Lassaigne's test with the corresponding observation.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Dumas Method", "(b) Kjeldahl's Method", "(c) Carius Method", "(d) Chromatography"],
            column2: ["(p) Estimation of halogens", "(q) Separation of amino acids", "(r) Estimation of nitrogen (except nitro/azo)", "(s) Estimation of nitrogen"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching the analytical method with its primary application.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Stationary Phase", "(b) Mobile Phase", "(c) R_f value", "(d) Eluent"],
            column2: ["(p) Solvent that moves through the column", "(q) Adsorbent like silica or alumina", "(r) Ratio of distances travelled", "(s) The solvent system that moves"],
            answer: "a-q, b-s, c-r, d-p",
            explanation: "Matching terms used in chromatography with their definitions. The mobile phase is the solvent system, and the eluent is the solvent carrying the sample out of the column.",
            neetFrequency: 2
        },
        {
            column1: ["(a) Separation of camphor and sand", "(b) Separation of crude oil fractions", "(c) Separation of amino acids", "(d) Separation of aniline from water"],
            column2: ["(p) Fractional distillation", "(q) Steam distillation", "(r) Sublimation", "(s) Chromatography"],
            answer: "a-r, b-p, c-s, d-q",
            explanation: "Matching the mixture with the most appropriate separation technique.",
            neetFrequency: 3
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "\\% \\text{ of N (Duma)} = \\frac{28}{22400} \\times \\frac{\\text{Vol. of N₂ at STP (mL)}}{\\text{Mass of substance (g)}} \\times 100",
                description: "Formula for calculating percentage of Nitrogen by Duma's method.",
                descriptionTamil: "டூமாஸ் முறையில் நைட்ரஜனின் சதவீதத்தைக் கணக்கிடுவதற்கான சூத்திரம்."
            },
            {
                formula: "\\% \\text{ of Halogen (Carius)} = \\frac{\\text{Atomic mass of X}}{\\text{Molar mass of AgX}} \\times \\frac{\\text{Mass of AgX}}{\\text{Mass of substance}} \\times 100",
                description: "Formula for calculating percentage of Halogen by Carius method.",
                descriptionTamil: "கேரியஸ் முறையில் ஹாலஜனின் சதவீதத்தைக் கணக்கிடுவதற்கான சூத்திரம்."
            },
            {
                formula: "R_f = \\frac{\\text{Distance travelled by substance}}{\\text{Distance travelled by solvent front}}",
                description: "Retention Factor (R_f) in Chromatography.",
                descriptionTamil: "வண்ணப்பிரிகையில் தக்கவைப்புக் காரணி (R_f)."
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The choice of purification method depends on the physical properties of the compound and its impurities (solubility, boiling point, volatility).",
        "Chromatography is a versatile technique based on the differential distribution of components between a stationary and a mobile phase.",
        "Lassaigne's test converts covalently bonded elements (N, S, X) into ionic salts for easy detection.",
        "Quantitative estimation methods like Dumas, Kjeldahl, and Carius allow for the determination of the elemental composition of an organic compound."
    ],
    mnemonics: [
        {
            text: "Remember for chromatography: 'Stationary Stays, Mobile Moves'. The phase that stays put is stationary, the one that travels is mobile.",
            tamil: "'நிலைத்தது நிற்கும், நகர்வது நகரும்' என்று வண்ணப்பிரிகையை நினைவில் கொள்க. அசையாமல் இருக்கும் கட்டம் நிலைத்தது, பயணிப்பது நகரும் கட்டம்."
        }
    ],
    neetTips: [
        {
            text: "The exceptions for Kjeldahl's method (nitro, azo, and ring nitrogen compounds) are a very common theory question.",
            tamil: "கெல்டால் முறையின் விதிவிலக்குகள் (நைட்ரோ, அசோ, மற்றும் வளைய நைட்ரஜன் சேர்மங்கள்) ஒரு மிகவும் பொதுவான கோட்பாட்டுக் கேள்வி."
        },
        {
            text: "Be very careful with unit conversions in quantitative analysis problems, especially converting volumes to STP in Duma's method.",
            tamil: "அளவறி பகுப்பாய்வு கணக்குகளில் அலகு மாற்றங்களில் மிகவும் கவனமாக இருங்கள், குறிப்பாக டூமாஸ் முறையில் கனஅளவுகளை திட்ட நிலைக்கு மாற்றும்போது."
        }
    ],
    studentTip: {
        english: "Try to visualize the separation process for each technique. For chromatography, imagine a 'race' where components run at different speeds based on how much they 'like' the stationary vs. mobile phase.",
        tamil: "ஒவ்வொரு நுட்பத்திற்கும் பிரித்தல் செயல்முறையை கற்பனை செய்து பார்க்கவும். வண்ணப்பிரிகைக்கு, ஒரு 'பந்தயம்' போல கற்பனை செய்யுங்கள், அங்கு கூறுகள் நிலைத்த மற்றும் நகரும் கட்டங்களை எவ்வளவு 'விரும்புகின்றன' என்பதைப் பொறுத்து வெவ்வேறு வேகங்களில் ஓடுகின்றன."
    },
    peerDiscussion: {
        english: "Discuss with a friend why ortho-nitrophenol is steam volatile but para-nitrophenol is not. Draw the structures and show the hydrogen bonding in each.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஏன் ஆர்த்தோ-நைட்ரோஃபீனால் நீராவியில் ஆவியாகிறது ஆனால் பாரா-நைட்ரோஃபீனால் ஆவியாவதில்லை? கட்டமைப்புகளை வரைந்து ஒவ்வொன்றிலும் உள்ள ஹைட்ரஜன் பிணைப்பைக் காட்டவும்."
    },
    nextChapter: {
        title: "Some Basic Principles of Organic Chemistry",
        titleTamil: "கரிம வேதியியல் - சில அடிப்படைக் கோட்பாடுகள்"
    },
    validationReport: []
};
