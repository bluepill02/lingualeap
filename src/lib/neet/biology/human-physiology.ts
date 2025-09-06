
import type { NeetModule } from '@/lib/types';

export const humanPhysiology: NeetModule = {
    id: 'neet-biology-human-physiology',
    title: 'Human Physiology',
    chapter: 'Human Physiology',
    subject: 'Biology',
    learningObjectives: [
        "Describe the process of digestion and absorption of nutrients.",
        "Explain the mechanism of breathing and exchange of gases in the lungs and tissues.",
        "Understand the composition of blood and the structure and function of the human heart (cardiac cycle).",
        "Describe the process of urine formation and the role of the kidney in osmoregulation.",
        "Analyze the structure of muscles and the mechanism of muscle contraction.",
        "Explain the transmission of nerve impulses and the functioning of the central and peripheral nervous systems.",
        "Understand the endocrine system and the role of various hormones in chemical coordination."
    ],
    prerequisites: [
        "Understanding of animal tissues.",
        "Knowledge of biomolecules and cell structure.",
        "Basic concepts of diffusion and active transport."
    ],
    conceptOverview: "This is a major unit that explores the functioning of the various organ systems in the human body. It covers digestion and absorption, breathing and gas exchange, blood circulation, excretion, locomotion and movement, neural control and coordination, and chemical coordination (hormones). Understanding the mechanics and regulation of each system is crucial for a complete picture of how the human body maintains homeostasis.",
    tamilConnection: "வர்மக்கலை மற்றும் யோகாசனம் போன்ற தமிழ் மரபுகள், உடலின் நரம்பு மண்டலம் மற்றும் இயக்கத்தைப்பற்றிய ஆழமான அறிவை அடிப்படையாகக் கொண்டவை. இந்த அத்தியாயம், செரிமானம் முதல் சுவாசம், நரம்பு மண்டலத்தின் செயல்பாடு வரை மனித உடலின் சிக்கலான இயக்கவியலை அறிவியல் பூர்வமாக விளக்குகிறது.",
    culturalContext: "The practice of Yoga, with its emphasis on controlled breathing (Pranayama), directly impacts the respiratory and nervous systems studied in this chapter. The different postures (asanas) involve a deep understanding of the musculoskeletal system. Human physiology provides the scientific framework for the benefits observed from these ancient Indian practices.",
    syllabusMapping: [{
        topic: 'Digestion, Breathing, Circulation, Excretion, Locomotion, Neural Control, Chemical Coordination',
        tnBoardChapter: '11th Std Zoology Ch 6 to 12',
        ncertReference: 'Class 11 Biology - Unit 5',
        notes: 'The most important unit in Biology for NEET. Every chapter is high-yield. Focus on diagrams, mechanisms, and hormonal regulation.',
        mappingDescription: 'Maps to the entire second half of the TN Board Std 11 Zoology book.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "The human body is a complex system of interconnected organ systems that work together to maintain homeostasis.",
        "Digestion breaks down complex food molecules into simpler ones that can be absorbed.",
        "The cardiac cycle describes the sequence of events in one heartbeat, and an ECG is its graphical representation.",
        "The nephron is the functional unit of the kidney, responsible for urine formation through filtration, reabsorption, and secretion.",
        "Nerve impulses are transmitted as electrical signals (action potentials) along neurons and as chemical signals across synapses.",
        "Hormones act as chemical messengers that regulate various physiological processes."
    ],
    mnemonics: [
        { text: "For cranial nerves: 'On Old Olympus' Towering Top, A Finn And German Viewed Some Hops'.", tamil: "மண்டையோட்டு நரம்புகளுக்கு: 'On Old Olympus' Towering Top, A Finn And German Viewed Some Hops'." },
        { text: "For hormones of the anterior pituitary: 'FLAG TOP' (FSH, LH, ACTH, GH, TSH, Prolactin).", tamil: "முன்புற பிட்யூட்டரியின் ஹார்மோன்களுக்கு: 'FLAG TOP'." }
    ],
    neetTips: [
        { text: "Diagrams of the nephron, sarcomere, and the human heart are extremely important. Practice drawing and labeling them.", tamil: "நெஃப்ரான், சார்க்கோமியர் மற்றும் மனித இதயத்தின் வரைபடங்கள் மிகவும் முக்கியமானவை. அவற்றை வரைந்து பெயரிட்டுப் பயிற்சி செய்யுங்கள்." },
        { text: "Hormones and their functions/disorders are a very high-yield topic. Create a table listing the hormone, its source gland, its function, and the diseases caused by its hyper/hyposecretion.", tamil: "ஹார்மோன்கள் மற்றும் அவற்றின் செயல்பாடுகள்/குறைபாடுகள் ஒரு மிகவும் அதிக மகசூல் தரும் தலைப்பு. ஹார்மோன், அதன் மூல சுரப்பி, அதன் செயல்பாடு மற்றும் அதன் அதிக/குறைந்த சுரப்பால் ஏற்படும் நோய்களைப் பட்டியலிடும் ஒரு அட்டவணையை உருவாக்கவும்." }
    ],
    studentTip: {
        english: "Try to create flowcharts to understand complex processes like the cardiac cycle, urine formation, or muscle contraction. Breaking them down into sequential steps makes them easier to learn.",
        tamil: "இதயச் சுழற்சி, சிறுநீர் உருவாக்கம், அல்லது தசைச் சுருக்கம் போன்ற சிக்கலான செயல்முறைகளைப் புரிந்துகொள்ள பாய்வு வரைபடங்களை உருவாக்க முயற்சிக்கவும். அவற்றை வரிசைமுறையான படிகளாக உடைப்பது கற்றுக்கொள்வதை எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend how the nervous system and the endocrine system work together to control and coordinate the body. What are the key differences in their mode of action?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: நரம்பு மண்டலம் மற்றும் நாளமில்லாச் சுரப்பி மண்டலம் எவ்வாறு இணைந்து உடலைக் கட்டுப்படுத்தி ஒருங்கிணைக்கின்றன? அவற்றின் செயல்பாட்டு முறையில் உள்ள முக்கிய வேறுபாடுகள் என்ன?"
    },
    nextChapter: {
        title: "Reproduction",
        titleTamil: "இனப்பெருக்கம்"
    },
    validationReport: []
};

    