
import type { NeetModule } from '@/lib/types';

export const biologyAndHumanWelfare: NeetModule = {
    id: 'neet-biology-biology-and-human-welfare',
    title: 'Biology and Human Welfare',
    chapter: 'Biology and Human Welfare',
    subject: 'Biology',
    learningObjectives: [
        "Understand common human diseases (causative agents, symptoms, prevention).",
        "Explain the human immune system, including innate and acquired immunity, and concepts like vaccination.",
        "Describe the role of microbes in industrial production of antibiotics, enzymes, and beverages.",
        "Understand the principles of sewage treatment and biogas production.",
        "Explain strategies for enhancement in food production, such as plant breeding and animal husbandry."
    ],
    prerequisites: [
        "Basic knowledge of cell biology.",
        "Understanding of microorganisms like bacteria, viruses, and fungi.",
        "Concepts of genetics and inheritance."
    ],
    conceptOverview: "This unit covers the application of biology for the welfare of humanity. It includes topics like human health and diseases, the immune system, common infections, and the role of microbes in producing antibiotics, beverages, and other industrial products. It emphasizes strategies for enhancement in food production and the welfare of society.",
    tamilConnection: "சித்த மருத்துவம் மற்றும் பாட்டி வைத்தியம் போன்ற தமிழ் மரபு மருத்துவ முறைகள், நோய்களைத் தடுப்பதற்கும் குணப்படுத்துவதற்கும் தாவரங்கள் மற்றும் நுண்ணுயிரிகளின் பயன்பாட்டை நீண்டகாலமாகப் புரிந்து வைத்துள்ளன. இந்த அத்தியாயம், அந்தப் பாரம்பரிய அறிவிற்கான நவீன அறிவியல் விளக்கத்தை அளிக்கிறது.",
    culturalContext: "The mass production of antibiotics like Penicillin, derived from microbes, revolutionized medicine globally and in India, drastically reducing mortality from bacterial infections. Similarly, the use of microbes in large-scale fermentation for producing beverages and foods like yogurt (தயிர்) is a direct application of principles studied in this chapter.",
    syllabusMapping: [{
        topic: 'Biology and Human Welfare',
        tnBoardChapter: '12th Std Zoology Ch 6, 8; 12th Std Botany Ch 8',
        ncertReference: 'Class 12 Biology - Unit 8',
        notes: 'Covers Human Health and Disease, Microbes in Human Welfare. Very important and scoring unit.',
        mappingDescription: 'Maps to various chapters in TN Board Std 12 Zoology and Botany.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease.",
        "The immune system provides defense against pathogens through innate (non-specific) and acquired (specific) immunity.",
        "Vaccination is based on the property of 'memory' of the immune system.",
        "Microbes are not always harmful; they are essential in industrial production, sewage treatment, and as biocontrol agents.",
        "Plant breeding and animal husbandry are key strategies to meet the increasing demand for food."
    ],
    mnemonics: [
        { text: "For common fungal diseases: 'Ringworm is a Fun Guy (Fungi)'.", tamil: "பொதுவான பூஞ்சை நோய்களுக்கு: 'படர்தாமரை ஒரு வேடிக்கையான பையன் (பூஞ்சை)'." },
        { text: "For cancer detection: 'Biopsy is Best' (Biopsy and histopathological studies are the most conclusive tests for cancer).", tamil: "புற்றுநோய் கண்டறிதலுக்கு: 'பயாப்ஸி சிறந்தது'." }
    ],
    neetTips: [
        { text: "Create a table for common diseases listing the causative organism, mode of transmission, and key symptoms. This is a very high-yield topic for matching questions.", tamil: "பொதுவான நோய்களுக்கு ஒரு அட்டவணையை உருவாக்கவும், அதில் நோய்க்காரணி, பரவும் முறை மற்றும் முக்கிய அறிகுறிகளைப் பட்டியலிடவும். இது பொருத்துக கேள்விகளுக்கு மிகவும் அதிக மகசூல் தரும் தலைப்பு." },
        { text: "Understand the difference between active and passive immunity with examples. This is a frequently asked conceptual question.", tamil: "செயல்மிகு மற்றும் மந்தமான நோயெதிர்ப்பு சக்திக்கு இடையிலான வேறுபாட்டை எடுத்துக்காட்டுகளுடன் புரிந்து கொள்ளுங்கள். இது அடிக்கடி கேட்கப்படும் ஒரு கருத்தியல் கேள்வி." }
    ],
    studentTip: {
        english: "This chapter has many examples. Instead of just memorizing them, try to understand the 'role' of each microbe or breeding technique. For example, 'What problem does this microbe solve?' or 'What trait is this breeding technique trying to improve?'.",
        tamil: "இந்த அத்தியாயத்தில் பல எடுத்துக்காட்டுகள் உள்ளன. அவற்றை வெறுமனே மனப்பாடம் செய்வதற்கு பதிலாக, ஒவ்வொரு நுண்ணுயிரி அல்லது இனப்பெருக்க நுட்பத்தின் 'பங்கை' புரிந்து கொள்ள முயற்சிக்கவும். உதாரணமாக, 'இந்த நுண்ணுயிரி என்ன சிக்கலைத் தீர்க்கிறது?' அல்லது 'இந்த இனப்பெருக்க நுட்பம் எந்தப் பண்பை மேம்படுத்த முயற்சிக்கிறது?'."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is the overuse of antibiotics a major public health concern? Relate this to the concept of natural selection and evolution of resistant bacteria.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: நுண்ணுயிர் எதிர்ப்பிகளின் அதிகப்படியான பயன்பாடு ஏன் ஒரு பெரிய பொது சுகாதாரக் கவலையாக உள்ளது? இதை இயற்கைத் தேர்வு மற்றும் எதிர்ப்புத்திறன் கொண்ட பாக்டீரியாக்களின் பரிணாமம் என்ற கருத்துடன் தொடர்புபடுத்துங்கள்."
    },
    nextChapter: {
        title: "Biotechnology and Its Applications",
        titleTamil: "உயிரித் தொழில்நுட்பவியல் மற்றும் அதன் பயன்பாடுகள்"
    },
    validationReport: []
};

    