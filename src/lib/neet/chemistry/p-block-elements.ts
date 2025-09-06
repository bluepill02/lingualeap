
import type { NeetModule } from '@/lib/types';

export const pBlockElementsModule: NeetModule = {
    id: 'neet-chemistry-p-block-elements',
    title: 'Chemistry - p-Block Elements (p-தொகுதி தனிமங்கள்)',
    chapter: 'p-Block Elements',
    subject: 'Chemistry',
    learningObjectives: [
        "Explain the general trends in properties (electronic configuration, oxidation states, atomic radii, ionization enthalpy, electronegativity) for elements of Groups 13 to 18.",
        "Discuss the anomalous behavior of the first element in each group.",
        "Describe the preparation, properties, and structures of important compounds of boron (borax, diborane) and aluminum.",
        "Understand allotropes of carbon (diamond, graphite, fullerenes).",
        "Describe the preparation, properties, and structures of important compounds of nitrogen (ammonia, nitric acid) and phosphorus (phosphine, halides, oxoacids).",
        "Explain the preparation, properties, and structures of compounds of oxygen (ozone), sulfur (sulfuric acid), and the halogens (interhalogen compounds, oxoacids).",
        "Discuss the properties and uses of noble gases, and the structures of xenon compounds."
    ],
    prerequisites: [
        "Periodic Classification of Elements and understanding of periodic trends.",
        "Chemical Bonding, including VSEPR theory and hybridization."
    ],
    conceptOverview: "The p-block elements, comprising Groups 13 to 18, exhibit a vast diversity in chemical properties, containing metals, metalloids, and non-metals. This chapter systematically studies each group, focusing on the trends in their physical and chemical properties. A key theme is the 'anomalous' behavior of the first member of each group due to its small size, high electronegativity, and absence of d-orbitals. We will explore the structure and chemistry of some of the most important industrial and laboratory compounds, such as ammonia, nitric acid, sulfuric acid, and ozone, as well as the unique chemistry of the noble gases.",
    tamilConnection: "நாம் சுவாசிக்கும் காற்றில் உள்ள நைட்ரஜன் மற்றும் ஆக்ஸிஜன், நாம் எழுதும் பென்சிலில் உள்ள கிராஃபைட் (கார்பன்) என p-தொகுதி தனிமங்கள் நம்மைச் சுற்றியுள்ளன. ஒரு தொகுதியில் மேலிருந்து கீழாகச் செல்லும்போது பண்புகள் எவ்வாறு சீராக மாறுகின்றன, மற்றும் ஒவ்வொரு தொகுதியின் முதல் தனிமம் ஏன் மற்றவற்றிலிருந்து வேறுபடுகிறது என்பதைப் புரிந்துகொள்வது இந்த அத்தியாயத்தின் முக்கிய நோக்கமாகும்.",
    culturalContext: "The usage of sulfur in traditional Siddha medicine and in fireworks for festivals like Deepavali highlights its importance. The brilliant white light in some fireworks comes from burning metals like aluminum. This chapter delves into the chemistry of these p-block elements and their compounds, which have been part of our culture for centuries.",
    syllabusMapping: [
        {
            topic: "p-Block Elements",
            tnBoardChapter: "11th Std Chem Vol 1 (Group 13, 14), 12th Std Chem Vol 1 (Group 15-18)",
            ncertReference: "Class 11 Chem Part 2 (Ch 11, 12), Class 12 Chem Part 1 (Ch 7)",
            notes: "This is a very large and fact-intensive unit, but crucial for NEET. Questions often focus on the structures of oxoacids (of P, S, Cl), properties of compounds like ammonia and nitric acid, and the inert pair effect.",
            mappingDescription: 'Covers NEET Chemistry Units 11 and 18'
        }
    ],
    conceptNotes: [
        {
            heading: { english: 'General Trends in the p-Block', tamil: 'p-தொகுதியில் உள்ள பொதுவான போக்குகள்' },
            content: [
                { english: 'The p-block elements are those in which the last electron enters the p-orbital. Their general electronic configuration is ns²np¹⁻⁶.', tamil: 'p-தொகுதி தனிமங்கள் என்பவை கடைசி எலக்ட்ரான் p-ஆர்பிட்டாலில் நுழையும் தனிமங்கள் ஆகும். அவற்றின் பொதுவான எலக்ட்ரான் அமைப்பு ns²np¹⁻⁶ ஆகும்.' },
                { english: '**Oxidation State:** They show variable oxidation states. The group oxidation state is (+n), but due to the **inert pair effect**, the stability of the lower oxidation state (+n-2) increases down the group.', tamil: '**ஆக்ஸிஜனேற்ற நிலை:** அவை மாறும் ஆக்ஸிஜனேற்ற நிலைகளைக் காட்டுகின்றன. தொகுதி ஆக்ஸிஜனேற்ற நிலை (+n) ஆகும், ஆனால் **மந்த இணை விளைவு** காரணமாக, குறைந்த ஆக்ஸிஜனேற்ற நிலையின் (+n-2) நிலைப்புத்தன்மை தொகுதியில் கீழே செல்லும்போது அதிகரிக்கிறது.' },
                { english: '**Anomalous Behavior:** The first member of each group shows anomalous properties due to its small size, high electronegativity, high ionization enthalpy, and absence of d-orbitals.', tamil: '**முரண்பட்ட பண்புகள்:** ஒவ்வொரு தொகுதியின் முதல் உறுப்பினர் அதன் சிறிய அளவு, அதிக எலக்ட்ரான் கவர்தன்மை, அதிக அயனியாக்கும் ஆற்றல் மற்றும் d-ஆர்பிட்டால்கள் இல்லாததால் முரண்பட்ட பண்புகளைக் காட்டுகிறது.' }
            ]
        },
        {
            heading: { english: 'Group 15 Elements (The Nitrogen Family)', tamil: 'தொகுதி 15 தனிமங்கள் (நைட்ரஜன் குடும்பம்)' },
            content: [
                { english: 'Nitrogen exhibits a wide range of oxidation states from -3 to +5. It exists as a diatomic molecule (N₂) with a triple bond, making it very inert.', tamil: 'நைட்ரஜன் -3 முதல் +5 வரை பரந்த அளவிலான ஆக்ஸிஜனேற்ற நிலைகளை வெளிப்படுத்துகிறது. இது ஒரு மும்மைப் பிணைப்புடன் கூடிய ஈரணு மூலக்கூறாக (N₂) உள்ளது, இது அதை மிகவும் மந்தமாக்குகிறது.' },
                { english: '**Ammonia ($NH_3$):** Prepared by Haber\'s process. It is a Lewis base. The structure is pyramidal.', tamil: '**அம்மோனியா ($NH_3$):** ஹேபர் முறையில் தயாரிக்கப்படுகிறது. இது ஒரு லூயிஸ் காரம் ஆகும். இதன் வடிவம் பிரமிடு.' },
                { english: '**Nitric Acid ($HNO_3$):** Prepared by Ostwald\'s process. It is a strong oxidizing agent.', tamil: '**நைட்ரிக் அமிலம் ($HNO_3$):** ஆஸ்ட்வால்ட் முறையில் தயாரிக்கப்படுகிறது. இது ஒரு வலிமையான ஆக்ஸிஜனேற்றி.' },
                { english: '**Allotropes of Phosphorus:** White phosphorus (P₄, highly reactive, tetrahedral), Red phosphorus (polymeric), Black phosphorus (most stable).', tamil: '**பாஸ்பரஸின் புறவேற்றுமை வடிவங்கள்:** வெண்பாஸ்பரஸ் (P₄, அதிக வினைத்திறன், நான்முகி), செம்பாஸ்பரஸ் (பல்படி), கருப்புப் பாஸ்பரஸ் (மிகவும் நிலையானது).' }
            ]
        },
        {
            heading: { english: 'Group 16 Elements (The Oxygen Family or Chalcogens)', tamil: 'தொகுதி 16 தனிமங்கள் (ஆக்ஸிஜன் குடும்பம் அல்லது சால்கோஜென்கள்)' },
            content: [
                { english: 'Oxygen is a gas, while sulfur, selenium, and tellurium are solids. They show a -2 oxidation state, but S, Se, Te also show +2, +4, +6 states.', tamil: 'ஆக்ஸிஜன் ஒரு வாயு, அதேசமயம் சல்பர், செலினியம் மற்றும் டெல்லூரியம் ஆகியவை திண்மங்கள். அவை -2 ஆக்ஸிஜனேற்ற நிலையைக் காட்டுகின்றன, ஆனால் S, Se, Te ஆகியவை +2, +4, +6 நிலைகளையும் காட்டுகின்றன.' },
                { english: '**Ozone ($O_3$):** An allotropic form of oxygen. It is a powerful oxidizing agent.', tamil: '**ஓசோன் ($O_3$):** ஆக்ஸிஜனின் ஒரு புறவேற்றுமை வடிவம். இது ஒரு சக்திவாய்ந்த ஆக்ஸிஜனேற்றி.' },
                { english: '**Sulfuric Acid ($H_2SO_4$):** "King of Chemicals". Prepared by the Contact process. It is a strong dehydrating agent and oxidizing agent.', tamil: '**சல்பியூரிக் அமிலம் ($H_2SO_4$):** "வேதிப்பொருட்களின் ராஜா". தொடர்பு முறையில் தயாரிக்கப்படுகிறது. இது ஒரு வலிமையான நீர்நீக்கி மற்றும் ஆக்ஸிஜனேற்றி.' }
            ]
        },
        {
            heading: { english: 'Group 17 Elements (The Halogens)', tamil: 'தொகுதி 17 தனிமங்கள் (ஹாலஜன்கள்)' },
            content: [
                { english: 'They are highly reactive non-metals with a general configuration of ns²np⁵. They have very high electron gain enthalpies.', tamil: 'அவை ns²np⁵ என்ற பொதுவான எலக்ட்ரான் அமைப்புடன் கூடிய அதிக வினைத்திறன் கொண்ட அலோகங்கள் ஆகும். அவை மிக அதிக எலக்ட்ரான் நாட்ட ஆற்றல்களைக் கொண்டுள்ளன.' },
                { english: '**Interhalogen Compounds:** Compounds formed between two different halogens (e.g., ClF₃, BrF₅). They are generally more reactive than the parent halogens.', tamil: '**ஹாலஜனிடைச் சேர்மங்கள்:** இரண்டு வெவ்வேறு ஹாலஜன்களுக்கு இடையில் உருவாகும் சேர்மங்கள் (எ.கா., ClF₃, BrF₅). அவை பொதுவாக தாய் ஹாலஜன்களை விட அதிக வினைத்திறன் கொண்டவை.' },
                { english: '**Oxoacids of Halogens:** The acidic strength increases with the number of oxygen atoms (e.g., HClO₄ > HClO₃ > HClO₂ > HClO).', tamil: '**ஹாலஜன்களின் ஆக்சோஅமிலங்கள்:** ஆக்ஸிஜன் அணுக்களின் எண்ணிக்கை அதிகரிக்க, அமில வலிமை அதிகரிக்கிறது (எ.கா., HClO₄ > HClO₃ > HClO₂ > HClO).' }
            ]
        },
        {
            heading: { english: 'Group 18 Elements (The Noble Gases)', tamil: 'தொகுதி 18 தனிமங்கள் (மந்த வாயுக்கள்)' },
            content: [
                { english: 'They have completely filled valence shells (ns²np⁶), making them very stable and chemically inert. They have high ionization enthalpies and large positive electron gain enthalpies.', tamil: 'அவை முழுமையாக நிரப்பப்பட்ட இணைதிறன் கூடுகளை (ns²np⁶) கொண்டுள்ளன, இது அவற்றை மிகவும் நிலையானதாகவும், வேதியியல் ரீதியாக மந்தமாகவும் ஆக்குகிறது. அவை அதிக அயனியாக்கும் ஆற்றல்களையும், பெரிய நேர்மறை எலக்ட்ரான் நாட்ட ஆற்றல்களையும் கொண்டுள்ளன.' },
                { english: '**Xenon Compounds:** Neil Bartlett discovered that Xenon can form compounds with highly electronegative elements like Fluorine and Oxygen (e.g., XeF₂, XeF₄, XeO₃). The structures of these compounds (e.g., XeF₄ is square planar) can be predicted by VSEPR theory.', tamil: '**செனான் சேர்மங்கள்:** செனான், ஃபுளோரின் மற்றும் ஆக்ஸிஜன் போன்ற அதிக எலக்ட்ரான் கவர்தன்மை கொண்ட தனிமங்களுடன் சேர்மங்களை உருவாக்க முடியும் என்று நீல் பார்ட்லெட் கண்டுபிடித்தார் (எ.கா., XeF₂, XeF₄, XeO₃). இந்த சேர்மங்களின் வடிவங்களை (எ.கா., XeF₄ சதுர தள அமைப்பு) VSEPR கோட்பாட்டின் மூலம் கணிக்க முடியும்.' }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Inert Pair Effect",
            titleTamil: "நீட் நிலை: மந்த இணை விளைவு",
            difficulty: 'Medium',
            problem: "Explain why PbCl₂ is more stable than PbCl₄, but SnCl₄ is more stable than SnCl₂.",
            problemTamil: "PbCl₂ ஏன் PbCl₄ ஐ விட நிலையானது, ஆனால் SnCl₄ ஏன் SnCl₂ ஐ விட நிலையானது என்பதை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "Tin (Sn) and Lead (Pb) are in Group 14. Their group oxidation state is +4.", explanationTamil: "வெள்ளீயம் (Sn) மற்றும் ஈயம் (Pb) ஆகியவை தொகுதி 14 இல் உள்ளன. அவற்றின் தொகுதி ஆக்ஸிஜனேற்ற நிலை +4 ஆகும்." },
                { step: 2, explanation: "As we move down a group in the p-block, the stability of the lower oxidation state (Group oxidation state - 2) increases. This is called the inert pair effect.", explanationTamil: "p-தொகுதியில் ஒரு தொகுதியில் கீழே செல்லும்போது, குறைந்த ஆக்ஸிஜனேற்ற நிலையின் (தொகுதி ஆக்ஸிஜனேற்ற நிலை - 2) நிலைப்புத்தன்மை அதிகரிக்கிறது. இது மந்த இணை விளைவு எனப்படும்." },
                { step: 3, explanation: "For Tin (Sn), the +4 oxidation state is more stable than the +2 state. Therefore, SnCl₄ is more stable than SnCl₂.", explanationTamil: "வெள்ளீயத்திற்கு (Sn), +4 ஆக்ஸிஜனேற்ற நிலை +2 நிலையை விட நிலையானது. எனவே, SnCl₄, SnCl₂ ஐ விட நிலையானது." },
                { step: 4, explanation: "For Lead (Pb), which is below Tin, the inert pair effect is more pronounced. The lower oxidation state (+2) becomes more stable than the +4 state. Therefore, PbCl₂ is more stable than PbCl₄.", explanationTamil: "ஈயத்திற்கு (Pb), வெள்ளீயத்திற்கு கீழே இருப்பதால், மந்த இணை விளைவு மிகவும் முக்கியத்துவம் பெறுகிறது. குறைந்த ஆக்ஸிஜனேற்ற நிலை (+2) +4 நிலையை விட நிலையானதாகிறது. எனவே, PbCl₂, PbCl₄ ஐ விட நிலையானது." }
            ]
        },
        {
            title: "JEE Level: Structure of Oxoacids",
            titleTamil: "ஜே.இ.இ நிலை: ஆக்சோஅமிலங்களின் அமைப்பு",
            difficulty: 'Medium',
            problem: "Draw the structure of peroxomonosulphuric acid (Caro's acid) and find the oxidation state of sulphur.",
            problemTamil: "பெராக்ஸோமோனோசல்பியூரிக் அமிலத்தின் (காரோவின் அமிலம்) அமைப்பை வரைந்து, கந்தகத்தின் ஆக்ஸிஜனேற்ற நிலையைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "The chemical formula is H₂SO₅.", explanationTamil: "வேதியியல் வாய்ப்பாடு H₂SO₅ ஆகும்." },
                { step: 2, explanation: "Draw the structure. Sulphur is the central atom. It is bonded to one -OH group, two oxygen atoms with double bonds, and one peroxide linkage (-O-OH).", calculation: "Structure: HO - S(=O)₂ - O - OH" },
                { step: 3, explanation: "Calculate the oxidation state from the structure. O in the peroxide linkage has an oxidation state of -1. The other three O atoms have -2. H has +1.", calculation: "Let the oxidation state of S be x. (+1) + x + 3(-2) + (-1) + (+1) = 0 => x - 6 = 0 => x = +6" },
                { step: 4, explanation: "The oxidation state of sulphur in Caro's acid is +6.", explanationTamil: "காரோவின் அமிலத்தில் கந்தகத்தின் ஆக்ஸிஜனேற்ற நிலை +6 ஆகும்." }
            ],
            commonPitfall: "Calculating the oxidation state algebraically from the formula H₂SO₅ (2(+1) + x + 5(-2) = 0) gives x = +8, which is incorrect as sulphur cannot have an oxidation state greater than +6. This indicates the presence of a peroxide linkage."
        },
        {
            title: "NEET Level: Properties of Interhalogens",
            titleTamil: "நீட் நிலை: ஹாலஜனிடைச் சேர்மங்களின் பண்புகள்",
            difficulty: 'Easy',
            problem: "Why are interhalogen compounds more reactive than the corresponding halogens?",
            problemTamil: "ஹாலஜனிடைச் சேர்மங்கள் ஏன் அவற்றின் தாய் ஹாலஜன்களை விட அதிக வினைத்திறன் கொண்டவை?",
            solutionSteps: [
                { step: 1, explanation: "Interhalogen compounds are formed between two different halogens, for example, ClF.", explanationTamil: "ஹாலஜனிடைச் சேர்மங்கள் இரண்டு வெவ்வேறு ஹாலஜன்களுக்கு இடையில் உருவாகின்றன, எடுத்துக்காட்டாக, ClF." },
                { step: 2, explanation: "The bond formed between two different halogen atoms (e.g., Cl-F) is polar due to the difference in electronegativity.", explanationTamil: "இரண்டு வெவ்வேறு ஹாலஜன் அணுக்களுக்கு இடையில் உருவாகும் பிணைப்பு (எ.கா., Cl-F) எலக்ட்ரான் கவர்தன்மை வேறுபாடு காரணமாக முனைவுற்றது." },
                { step: 3, explanation: "The bond formed between two identical halogen atoms in a halogen molecule (e.g., Cl-Cl or F-F) is purely covalent and non-polar.", explanationTamil: "ஒரு ஹாலஜன் மூலக்கூறில் இரண்டு ஒத்த ஹாலஜன் அணுக்களுக்கு இடையில் உருவாகும் பிணைப்பு (எ.கா., Cl-Cl அல்லது F-F) முற்றிலும் சகப்பிணைப்பு மற்றும் முனைவற்றது." },
                { step: 4, explanation: "The X-X' bond in interhalogens is weaker than the X-X bond in halogens (except for F-F bond). Because of this weaker and more polar bond, interhalogen compounds are more reactive.", explanationTamil: "ஹாலஜனிடைச் சேர்மங்களில் உள்ள X-X' பிணைப்பு, ஹாலஜன்களில் உள்ள X-X பிணைப்பை விட பலவீனமானது (F-F பிணைப்பைத் தவிர). இந்த பலவீனமான மற்றும் அதிக முனைவுற்ற பிணைப்பின் காரணமாக, ஹாலஜனிடைச் சேர்மங்கள் அதிக வினைத்திறன் கொண்டவை." }
            ]
        },
        {
            title: "JEE Level: Structure of Xenon Compounds",
            titleTamil: "ஜே.இ.இ நிலை: செனான் சேர்மங்களின் அமைப்பு",
            difficulty: 'Medium',
            problem: "Predict the geometry and shape of XeF₄ using VSEPR theory.",
            problemTamil: "VSEPR கோட்பாட்டைப் பயன்படுத்தி XeF₄ இன் வடிவியல் மற்றும் வடிவத்தைக் கணிக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "Determine the number of valence electrons for the central atom, Xenon (Xe), which is a noble gas.", calculation: "Valence electrons of Xe = 8" },
                { step: 2, explanation: "Xenon forms 4 single bonds with 4 fluorine atoms, using 4 of its valence electrons.", calculation: "Bond pairs = 4" },
                { step: 3, explanation: "Calculate the number of remaining electrons and lone pairs.", calculation: "Remaining electrons = 8 - 4 = 4. Lone pairs = 4 / 2 = 2." },
                { step: 4, explanation: "The total number of electron pairs around the central atom is 4 (bond pairs) + 2 (lone pairs) = 6.", explanationTamil: "மைய அணுவைச் சுற்றியுள்ள எலக்ட்ரான் இரட்டைகளின் மொத்த எண்ணிக்கை 4 (பிணைப்பு இரட்டைகள்) + 2 (தனித்த இரட்டைகள்) = 6." },
                { step: 5, explanation: "The geometry for 6 electron pairs is octahedral. To minimize repulsion, the two lone pairs occupy the axial positions, which are opposite to each other.", explanationTamil: "6 எலக்ட்ரான் இரட்டைகளுக்கான வடிவியல் எண்முகி ஆகும். விலக்கத்தைக் குறைக்க, இரண்டு தனித்த இரட்டைகளும் ஒன்றுக்கொன்று எதிரான அச்சு நிலைகளை ஆக்கிரமிக்கின்றன." },
                { step: 6, explanation: "This arrangement results in the four fluorine atoms being in a single plane around the central Xe atom, giving the molecule a square planar shape.", explanationTamil: "இந்த ஏற்பாடு, நான்கு ஃபுளோரின் அணுக்களையும் மைய Xe அணுவைச் சுற்றி ஒரே தளத்தில் விளைவிக்கிறது, இது மூலக்கூறுக்கு ஒரு சதுர தள வடிவத்தைக் கொடுக்கிறது." }
            ]
        },
        {
            title: "NEET Level: Allotropes of Carbon",
            titleTamil: "நீட் நிலை: கார்பனின் புறவேற்றுமை வடிவங்கள்",
            difficulty: 'Easy',
            problem: "Explain why graphite is a good conductor of electricity while diamond is an insulator.",
            problemTamil: "வைரம் ஒரு காப்பானாக இருக்கும்போது, கிராஃபைட் ஏன் மின்சாரத்தின் ஒரு நல்ல கடத்தி என்பதை விளக்கவும்.",
            solutionSteps: [
                { step: 1, explanation: "In diamond, each carbon atom is sp³ hybridized and is bonded to four other carbon atoms in a tetrahedral structure.", explanationTamil: "வைரத்தில், ஒவ்வொரு கார்பன் அணுவும் sp³ இனக்கலப்பு செய்யப்பட்டு, நான்கு மற்ற கார்பன் அணுக்களுடன் ஒரு நான்முகி அமைப்பில் பிணைக்கப்பட்டுள்ளது." },
                { step: 2, explanation: "All four valence electrons of each carbon atom are used in forming these strong covalent bonds. There are no free electrons to conduct electricity.", explanationTamil: "ஒவ்வொரு கார்பன் அணுவின் நான்கு இணைதிறன் எலக்ட்ரான்களும் இந்த வலுவான சகப்பிணைப்புகளை உருவாக்கப் பயன்படுத்தப்படுகின்றன. மின்சாரத்தைக் கடத்த சுதந்திரமான எலக்ட்ரான்கள் இல்லை." },
                { step: 3, explanation: "In graphite, each carbon atom is sp² hybridized and is bonded to three other carbon atoms in the same plane, forming hexagonal layers.", explanationTamil: "கிராஃபைட்டில், ஒவ்வொரு கார்பன் அணுவும் sp² இனக்கலப்பு செய்யப்பட்டு, ஒரே தளத்தில் மூன்று மற்ற கார்பன் அணுக்களுடன் பிணைக்கப்பட்டு, அறுகோண அடுக்குகளை உருவாக்குகிறது." },
                { step: 4, explanation: "The fourth valence electron of each carbon atom is delocalized and free to move within the layers. These mobile electrons are responsible for the electrical conductivity of graphite.", explanationTamil: "ஒவ்வொரு கார்பன் அணுவின் நான்காவது இணைதிறன் எலக்ட்ரானும் இடமாற்றம் செய்யப்பட்டு, அடுக்குகளுக்குள் நகர சுதந்திரமாக உள்ளது. இந்த நகரும் எலக்ட்ரான்களே கிராஃபைட்டின் மின் கடத்துத்திறனுக்கு காரணமாகும்." }
            ]
        }
    ],
    mcqs: [
        { question: "Which of the following is the correct order of acidic strength?", options: ["A. Cl₂O₇ > SO₃ > P₄O₁₀", "B. P₄O₁₀ > SO₃ > Cl₂O₇", "C. SO₃ > Cl₂O₇ > P₄O₁₀", "D. Cl₂O₇ > P₄O₁₀ > SO₃"], answer: "A. Cl₂O₇ > SO₃ > P₄O₁₀", explanation: "Across a period, the acidic character of oxides increases with increasing electronegativity of the central atom. Cl is the most electronegative, followed by S, then P.", neetFrequency: 4 },
        { question: "The structure of XeF₄ is:", options: ["A. Tetrahedral", "B. Pyramidal", "C. Square planar", "D. Linear"], answer: "C. Square planar", explanation: "Xe has 8 valence electrons. 4 form bonds with F. Remaining are 4 electrons = 2 lone pairs. Total 6 electron pairs (4 BP + 2 LP) give an octahedral geometry, and the shape is square planar to minimize lone pair repulsion.", neetFrequency: 5 },
        { question: "Which of the following is known as 'inorganic benzene'?", options: ["A. Borazine (B₃N₃H₆)", "B. Diborane (B₂H₆)", "C. Boron nitride (BN)", "D. Borax (Na₂B₄O₇·10H₂O)"], answer: "A. Borazine (B₃N₃H₆)", explanation: "Borazine is isoelectronic and isostructural with benzene, hence it is called inorganic benzene.", neetFrequency: 3 },
        { question: "The oxidation state of phosphorus in H₄P₂O₇ is:", options: ["A. +3", "B. +5", "C. +4", "D. +1"], answer: "B. +5", explanation: "Let the oxidation state of P be x. 4(+1) + 2x + 7(-2) = 0 => 4 + 2x - 14 = 0 => 2x = 10 => x = +5.", neetFrequency: 4 },
        { question: "Inert pair effect is most prominent in:", options: ["A. Group 13", "B. Group 14", "C. Group 15", "D. Group 16"], answer: "C. Group 15", explanation: "While present in all heavier p-block elements, it is very significant in groups 13, 14, and 15, leading to stable +1, +2, and +3 states for Tl, Pb, and Bi respectively. Among the choices, it's a key feature of Group 15.", neetFrequency: 4 },
        { question: "Which of the following does not exist?", options: ["A. NCl₅", "B. PCl₅", "C. AsF₅", "D. SbCl₅"], answer: "A. NCl₅", explanation: "Nitrogen cannot form pentahalides because it does not have vacant d-orbitals to expand its octet.", neetFrequency: 5 },
        { question: "Which halogen is a liquid at room temperature?", options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"], answer: "C. Bromine", explanation: "F₂ and Cl₂ are gases, Br₂ is a liquid, and I₂ is a solid at room temperature.", neetFrequency: 2 },
        { question: "The correct order of bond angles in H₂O, H₂S, H₂Se, H₂Te is:", options: ["A. H₂O > H₂S > H₂Se > H₂Te", "B. H₂Te > H₂Se > H₂S > H₂O", "C. H₂O > H₂Te > H₂Se > H₂S", "D. H₂S > H₂O > H₂Se > H₂Te"], answer: "A. H₂O > H₂S > H₂Se > H₂Te", explanation: "As we go down the group, the electronegativity of the central atom decreases, so the bond pair-bond pair repulsion decreases, leading to a smaller bond angle.", neetFrequency: 4 },
        { question: "Diborane (B₂H₆) has:", options: ["A. Four 2c-2e bonds and two 3c-2e bonds", "B. Six 2c-2e bonds", "C. Two 2c-2e bonds and four 3c-2e bonds", "D. Four 2c-2e bonds and four 3c-2e bonds"], answer: "A. Four 2c-2e bonds and two 3c-2e bonds", explanation: "Diborane has two 'banana bonds' which are three-center-two-electron bonds, and four normal terminal B-H bonds.", neetFrequency: 3 },
        { question: "Which noble gas is most abundant in the atmosphere?", options: ["A. Helium", "B. Neon", "C. Argon", "D. Krypton"], answer: "C. Argon", explanation: "Argon constitutes about 0.93% of the Earth's atmosphere by volume, making it the most abundant noble gas.", neetFrequency: 1 },
        { question: "The strongest reducing agent among the hydrogen halides is:", options: ["A. HF", "B. HCl", "C. HBr", "D. HI"], answer: "D. HI", explanation: "The bond strength decreases down the group (H-I bond is weakest). Therefore, HI can most easily lose its hydrogen and get oxidized, making it the strongest reducing agent.", neetFrequency: 4 },
        { question: "Which of the following is a Lewis acid?", options: ["A. NH₃", "B. H₂O", "C. BCl₃", "D. PH₃"], answer: "C. BCl₃", explanation: "Boron in BCl₃ has an incomplete octet and can accept a lone pair of electrons, making it a Lewis acid.", neetFrequency: 3 },
        { question: "Ozone layer is depleted by:", options: ["A. CO₂", "B. CFCs (Chlorofluorocarbons)", "C. SO₂", "D. H₂S"], answer: "B. CFCs (Chlorofluorocarbons)", explanation: "CFCs release chlorine free radicals in the stratosphere, which catalytically destroy ozone molecules.", neetFrequency: 2 },
        { question: "Which of the following is used in Haber's process for the manufacture of ammonia?", options: ["A. Iron catalyst with Molybdenum promoter", "B. Vanadium pentoxide", "C. Platinum gauze", "D. Nickel catalyst"], answer: "A. Iron catalyst with Molybdenum promoter", explanation: "Haber's process uses an iron catalyst, often with a molybdenum promoter, at high temperature and pressure.", neetFrequency: 3 },
        { question: "The shape of the ClF₃ molecule is:", options: ["A. Trigonal planar", "B. T-shaped", "C. Trigonal pyramidal", "D. Linear"], answer: "B. T-shaped", explanation: "Chlorine has 7 valence electrons. 3 form bonds with F. Remaining 4 electrons = 2 lone pairs. Total 5 electron pairs give a trigonal bipyramidal geometry. The two lone pairs occupy equatorial positions, resulting in a T-shape.", neetFrequency: 4 },
        { question: "The correct order of boiling points of hydrides of Group 16 is:", options: ["A. H₂O > H₂S > H₂Se > H₂Te", "B. H₂Te > H₂Se > H₂S > H₂O", "C. H₂O > H₂Te > H₂Se > H₂S", "D. H₂S < H₂Se < H₂Te < H₂O"], answer: "D. H₂S < H₂Se < H₂Te < H₂O", explanation: "Water has an exceptionally high boiling point due to extensive hydrogen bonding. For the others, the boiling point increases down the group due to increasing van der Waals forces.", neetFrequency: 3 },
        { question: "Which of the following oxoacids of phosphorus has a P-P bond?", options: ["A. Hypophosphorous acid (H₃PO₂)", "B. Orthophosphoric acid (H₃PO₄)", "C. Pyrophosphoric acid (H₄P₂O₇)", "D. Hypophosphoric acid (H₄P₂O₆)"], answer: "D. Hypophosphoric acid (H₄P₂O₆)", explanation: "Hypophosphoric acid has the structure HO(O)P-P(O)OH, containing a direct P-P bond.", neetFrequency: 2 },
        { question: "The gas used in balloons which is lighter than air and non-inflammable is:", options: ["A. Hydrogen", "B. Nitrogen", "C. Helium", "D. Neon"], answer: "C. Helium", explanation: "Helium is the second lightest gas and is non-inflammable, making it safe for use in balloons and airships.", neetFrequency: 1 },
        { question: "Which of the following is not a use of Argon?", options: ["A. Filling incandescent bulbs", "B. Providing an inert atmosphere for welding", "C. In gas-filled lasers", "D. As a cryogenic agent"], answer: "D. As a cryogenic agent", explanation: "Liquid helium and liquid nitrogen are used as cryogenic agents. Argon is used for the other applications.", neetFrequency: 2 },
        { question: "The halogen which shows only a -1 oxidation state is:", options: ["A. F", "B. Cl", "C. Br", "D. I"], answer: "A. F", explanation: "Fluorine is the most electronegative element, so it can only exhibit a -1 oxidation state. Other halogens can show positive oxidation states in compounds with more electronegative elements like oxygen or fluorine.", neetFrequency: 4 },
        { question: "The number of S-S bonds in rhombic sulphur (S₈) is:", options: ["A. 4", "B. 6", "C. 8", "D. 10"], answer: "C. 8", explanation: "Rhombic sulphur has a puckered ring or crown structure with 8 sulphur atoms, each bonded to two others, forming 8 S-S single bonds.", neetFrequency: 3 },
        { question: "Thermite is a mixture of:", options: ["A. Iron(III) oxide and aluminum powder", "B. Zinc oxide and aluminum powder", "C. Copper oxide and iron powder", "D. Iron(III) oxide and copper powder"], answer: "A. Iron(III) oxide and aluminum powder", explanation: "The thermite reaction (Aluminothermy) uses the high affinity of aluminum for oxygen to reduce metal oxides, typically Fe₂O₃.", neetFrequency: 1 },
        { question: "The hybridization of Xe in XeOF₄ is:", options: ["A. sp³", "B. sp³d", "C. sp³d²", "D. sp²"], answer: "C. sp³d²", explanation: "Xe has 8 valence electrons. It forms one double bond with O (uses 2e⁻) and 4 single bonds with F (uses 4e⁻). Remaining are 2 electrons = 1 lone pair. Total electron pairs = 5 sigma bonds + 1 lone pair = 6. This corresponds to sp³d² hybridization.", neetFrequency: 4 },
        { question: "Which gas is produced when copper reacts with dilute HNO₃?", options: ["A. NO₂", "B. N₂O", "C. NO", "D. N₂"], answer: "C. NO", explanation: "Copper is a less reactive metal. It reacts with dilute nitric acid to produce nitric oxide (NO), not hydrogen. With concentrated HNO₃, it produces nitrogen dioxide (NO₂).", neetFrequency: 3 },
        { question: "The basic structural unit of silicates is:", options: ["A. SiO₂", "B. SiO₃²⁻", "C. SiO₄⁴⁻", "D. Si₂O₇⁶⁻"], answer: "C. SiO₄⁴⁻", explanation: "The basic unit of all silicates is the tetrahedral SiO₄⁴⁻ anion.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "Ammonia is a Lewis base.", reason: "The nitrogen atom in ammonia has one lone pair of electrons.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. A Lewis base is an electron pair donor, and the lone pair on nitrogen allows ammonia to act as one.", neetFrequency: 4 },
        { assertion: "The bond angle in H₂O is greater than in H₂S.", reason: "Oxygen is more electronegative than sulphur.", answer: "A", explanation: "Assertion is true (104.5° vs 92.1°). The reason is also true and is the correct explanation. The more electronegative oxygen atom pulls the bonding electron pairs closer to itself, increasing the bond pair-bond pair repulsion and thus the bond angle.", neetFrequency: 3 },
        { assertion: "Helium is used in diving apparatus.", reason: "Helium is less soluble in blood than nitrogen.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Because of its low solubility in blood, using a helium-oxygen mixture (Heliox) avoids the painful and dangerous condition called 'the bends' when divers resurface.", neetFrequency: 2 },
        { assertion: "SF₆ is known, but SH₆ is not.", reason: "The size of the fluorine atom is small and its electronegativity is high.", answer: "B", explanation: "Both statements are true. However, the reason doesn't fully explain the assertion. The high electronegativity and small size of fluorine atoms allow them to polarize and cause the expansion of sulphur's octet to accommodate six bonds, a feat which the less electronegative and larger hydrogen atoms cannot achieve.", neetFrequency: 3 },
        { assertion: "The acidic strength of oxoacids of chlorine is in the order HClO₄ > HClO₃ > HClO₂ > HClO.", reason: "The stability of the conjugate base increases as the number of oxygen atoms increases due to better delocalization of the negative charge.", answer: "A", explanation: "Assertion is true. Reason is also true and provides the correct explanation for the trend in acidic strength.", neetFrequency: 4 }
    ],
    matchTheColumns: [
        { column1: ["(a) Haber's Process", "(b) Ostwald's Process", "(c) Contact Process", "(d) Hall-Héroult Process"], column2: ["(p) Manufacture of H₂SO₄", "(q) Manufacture of Al", "(r) Manufacture of NH₃", "(s) Manufacture of HNO₃"], answer: "a-r, b-s, c-p, d-q" },
        { column1: ["(a) Diamond", "(b) Graphite", "(c) White Phosphorus", "(d) Rhombic Sulphur"], column2: ["(p) P₄ tetrahedral units", "(q) Crown-shaped S₈ rings", "(r) sp³ hybridization", "(s) sp² hybridization"], answer: "a-r, b-s, c-p, d-q" },
        { column1: ["(a) Lewis Acid", "(b) Interhalogen Compound", "(c) Strongest Reducing Halide", "(d) Amphoteric Oxide"], column2: ["(p) I⁻", "(q) Al₂O₃", "(r) ClF₃", "(s) BCl₃"], answer: "a-s, b-r, c-p, d-q" },
        { column1: ["(a) Group 13", "(b) Group 14", "(c) Group 15", "(d) Group 16"], column2: ["(p) Chalcogens", "(q) Pnictogens", "(r) Carbon family", "(s) Boron family"], answer: "a-s, b-r, c-q, d-p" },
        { column1: ["(a) XeF₂", "(b) XeF₄", "(c) XeF₆", "(d) XeO₃"], column2: ["(p) Square planar", "(q) Distorted octahedral", "(r) Pyramidal", "(s) Linear"], answer: "a-s, b-p, c-q, d-r" }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "B_2H_6", description: "Diborane (contains 3c-2e bonds)", descriptionTamil: "டைபோரேன் (3c-2e பிணைப்புகளைக் கொண்டுள்ளது)" },
            { formula: "H_2SO_4", description: "Sulfuric Acid", descriptionTamil: "கந்தக அமிலம்" },
            { formula: "HNO_3", description: "Nitric Acid", descriptionTamil: "நைட்ரிக் அமிலம்" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Properties of p-block elements show regular trends across periods and down groups, with notable exceptions for the first member of each group.",
        "The inert pair effect explains the increasing stability of the lower oxidation state for heavier elements in the block.",
        "The structures of many p-block compounds (especially those of non-metals) can be predicted using VSEPR theory.",
        "Important industrial processes like Haber's, Ostwald's, and the Contact process are used to manufacture key p-block compounds."
    ],
    mnemonics: [
        { text: "For Group 13: 'Bears Always Gave Indians Trouble' (Boron, Aluminum, Gallium, Indium, Thallium).", tamil: "தொகுதி 13-க்கு: 'போண்டா, அல்வா, கேசரி இந்தியன் தட்டில்' (போரான், அலுமினியம், கேலியம், இண்டியம், தாலியம்)." },
        { text: "For Group 14: 'Chemistry Sir Gives Sangeetha Problems' (Carbon, Silicon, Germanium, Tin (Sn), Lead (Pb)).", tamil: "தொகுதி 14-க்கு: 'கார் ஓட்டும் சில ஜெர்மானியர்கள் தின்பண்டம் தேடி லண்டன் சென்றனர்' (கார்பன், சிலிக்கான், ஜெர்மானியம், டின், லெட்)." }
    ],
    neetTips: [
        { text: "Questions on the structures of oxoacids of phosphorus and sulphur are very common. Practice drawing them to identify the number of P-O-P, P-H, S=O bonds, etc.", tamil: "பாஸ்பரஸ் மற்றும் கந்தகத்தின் ஆக்சோஅமிலங்களின் அமைப்புகள் பற்றிய கேள்விகள் மிகவும் பொதுவானவை. P-O-P, P-H, S=O பிணைப்புகளின் எண்ணிக்கையை அடையாளம் காண அவற்றை வரைந்து பயிற்சி செய்யுங்கள்." },
        { text: "Pay close attention to the products of reactions involving nitric acid and sulphuric acid under different conditions (e.g., dilute vs. concentrated).", tamil: "நைட்ரிக் அமிலம் மற்றும் கந்தக அமிலம் சம்பந்தப்பட்ட வினைகளின் விளைபொருட்களை வெவ்வேறு நிலைகளில் (எ.கா., நீர்த்த vs. அடர்) கூர்ந்து கவனியுங்கள்." }
    ],
    studentTip: {
        english: "The p-block is vast. Don't try to memorize everything. Focus on understanding the *trends* and the *reasons* for anomalous behavior. This will help you predict properties rather than just recalling them.",
        tamil: "p-தொகுதி பரந்தது. எல்லாவற்றையும் மனப்பாடம் செய்ய முயற்சிக்காதீர்கள். *போக்குகள்* மற்றும் முரண்பட்ட நடத்தைக்கான *காரணங்கள்* ஆகியவற்றைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள். இது பண்புகளை வெறும் நினைவுகூருவதை விட கணிக்க உதவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why nitrogen exists as a diatomic gas (N₂) while phosphorus exists as a solid (P₄). How does the ability to form pπ-pπ multiple bonds influence this?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: நைட்ரஜன் ஏன் ஒரு ஈரணு வாயுவாக (N₂) உள்ளது, அதேசமயம் பாஸ்பரஸ் ஒரு திண்மமாக (P₄) உள்ளது? pπ-pπ பன்மடங்கு பிணைப்புகளை உருவாக்கும் திறன் இதை எவ்வாறு பாதிக்கிறது?"
    },
    nextChapter: {
        title: "d- and f-Block Elements",
        titleTamil: "d- மற்றும் f-தொகுதி தனிமங்கள்"
    },
    validationReport: []
};
