
import type { NeetModule } from '@/lib/types';

export const plantPhysiology: NeetModule = {
    id: 'neet-biology-plant-physiology',
    title: 'Plant Physiology',
    chapter: 'Plant Physiology',
    subject: 'Biology',
    learningObjectives: [
        "Understand the mechanisms of water transport in plants, including transpiration.",
        "Describe the role of essential mineral nutrients in plant growth.",
        "Explain the process of photosynthesis, including light-dependent and light-independent reactions (Calvin cycle).",
        "Describe the process of cellular respiration in plants, including glycolysis, Krebs cycle, and electron transport chain.",
        "Analyze the role of plant growth regulators (hormones) like auxins, gibberellins, cytokinins, etc."
    ],
    prerequisites: [
        "Understanding of plant anatomy (xylem, phloem).",
        "Knowledge of cell structure, especially chloroplasts and mitochondria.",
        "Basic chemistry of photosynthesis and respiration."
    ],
    conceptOverview: "This unit focuses on the life processes of plants. It covers how plants transport water and minerals, the process of mineral nutrition, and the two most critical metabolic processes on Earth: photosynthesis (how plants make food) and respiration (how they use that food). The unit concludes with an examination of plant growth and development, including the role of plant hormones (phytohormones).",
    tamilConnection: "பண்டைய தமிழர்கள், குறிப்பாக சோழர்கள், நீர் மேலாண்மையில் சிறந்து விளங்கினர். கல்லணை போன்ற கட்டமைப்புகள், தாவரங்களுக்கு நீர் எவ்வளவு அவசியம் என்பதை அவர்கள் அறிந்திருந்ததைக் காட்டுகிறது. தாவரங்கள் எவ்வாறு நீரையும், சத்துக்களையும் கடத்துகின்றன, எவ்வாறு உணவைத் தயாரிக்கின்றன (ஒளிச்சேர்க்கை) என்பதை இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The agricultural practices across India, from the paddy fields of the Kaveri delta to the wheat fields of Punjab, are all practical applications of plant physiology. Understanding how plants absorb nutrients, respond to light, and grow is fundamental to improving crop yields and ensuring food security for the nation.",
    syllabusMapping: [{
        topic: 'Transport in Plants, Mineral Nutrition, Photosynthesis, Respiration, Plant Growth',
        tnBoardChapter: '11th Std Botany Ch 9 to 13',
        ncertReference: 'Class 11 Biology - Unit 4',
        notes: 'A crucial unit. Photosynthesis and Respiration cycles (C3, C4, Glycolysis, Krebs) are very important. Plant hormones are also a high-yield topic.',
        mappingDescription: 'Maps to the plant physiology section in the TN Board Std 11 Botany book.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Photosynthesis (in chloroplasts) converts light energy into chemical energy (food), while respiration (in mitochondria) releases that chemical energy for cellular work.",
        "Water transport in plants is primarily driven by the transpiration pull.",
        "The Calvin cycle (C3 cycle) is the primary pathway for carbon fixation in most plants.",
        "Plant growth regulators (hormones) control all aspects of plant growth and development, often working in conjunction or opposition to each other."
    ],
    mnemonics: [
        { text: "For plant hormones and their main function: 'Auxin makes you Grow, Gibberellin makes you Sprout, Cytokinin makes you Divide, Ethylene makes you Ripe, ABA makes you Sleep'.", tamil: "தாவர ஹார்மோன்களுக்கு: 'ஆக்சின் வளரச் செய்யும், ஜிப்ரலின் முளைக்க வைக்கும், சைட்டோகைனின் பிரிக்க வைக்கும், எத்திலீன் பழுக்க வைக்கும், ABA தூங்க வைக்கும்'." }
    ],
    neetTips: [
        { text: "Make flowcharts for the C3, C4, Glycolysis, and Krebs cycles. Focus on the key inputs, outputs, and locations of each process. Direct questions on the number of ATP/NADPH used or produced are very common.", tamil: "C3, C4, கிளைகோலைசிஸ், மற்றும் கிரெப்ஸ் சுழற்சிகளுக்கு பாய்வு வரைபடங்களை உருவாக்கவும். ஒவ்வொரு செயல்முறையின் முக்கிய உள்ளீடுகள், வெளியீடுகள் மற்றும் இடங்கள் ஆகியவற்றில் கவனம் செலுத்துங்கள். பயன்படுத்தப்பட்ட அல்லது உற்பத்தி செய்யப்பட்ட ATP/NADPH எண்ணிக்கை குறித்த நேரடி கேள்விகள் மிகவும் பொதுவானவை." },
        { text: "Create a table for plant growth regulators, listing their functions, whether they are growth promoters or inhibitors, and a key application.", tamil: "தாவர வளர்ச்சி சீராக்கிகளுக்கு ஒரு அட்டவணையை உருவாக்கவும், அவற்றின் செயல்பாடுகள், அவை வளர்ச்சி ஊக்குவிப்பாளர்களா அல்லது தடுப்பாளர்களா, மற்றும் ஒரு முக்கிய பயன்பாட்டைப் பட்டியலிடவும்." }
    ],
    studentTip: {
        english: "Try to see these processes as a connected whole. Photosynthesis produces the glucose that respiration uses. Transport brings the water needed for photosynthesis. It's all one interconnected system.",
        tamil: "இந்த செயல்முறைகளை ஒரு இணைக்கப்பட்ட முழுமையாகப் பார்க்க முயற்சிக்கவும். ஒளிச்சேர்க்கை சுவாசம் பயன்படுத்தும் குளுக்கோஸை உற்பத்தி செய்கிறது. போக்குவரத்து ஒளிச்சேர்க்கைக்குத் தேவையான நீரைக் கொண்டுவருகிறது. இது அனைத்தும் ஒன்றுக்கொன்று இணைக்கப்பட்ட ஒரு அமைப்பு."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why did C4 plants evolve? What is the advantage of having the C4 pathway, especially in hot and dry climates?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: C4 தாவரங்கள் ஏன் பரிணமித்தன? C4 பாதையைக் கொண்டிருப்பதன் நன்மை என்ன, குறிப்பாக வெப்பமான மற்றும் வறண்ட காலநிலைகளில்?"
    },
    nextChapter: {
        title: "Human Physiology",
        titleTamil: "மனித உடற்செயலியல்"
    },
    validationReport: []
};

    