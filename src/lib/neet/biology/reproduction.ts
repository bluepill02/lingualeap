
import type { NeetModule } from '@/lib/types';

export const reproduction: NeetModule = {
    id: 'neet-biology-reproduction',
    title: 'Reproduction',
    chapter: 'Reproduction',
    subject: 'Biology',
    learningObjectives: [
        "Differentiate between asexual and sexual reproduction.",
        "Describe the process of sexual reproduction in flowering plants, including pollination, fertilization, and development of seed and fruit.",
        "Explain the structure and function of the human male and female reproductive systems.",
        "Understand the process of gametogenesis (spermatogenesis and oogenesis) and the menstrual cycle.",
        "Describe fertilization, implantation, pregnancy, and embryonic development in humans.",
        "Discuss various methods of birth control and sexually transmitted diseases (STDs)."
    ],
    prerequisites: [
        "Knowledge of plant and animal cell structure.",
        "Understanding of cell division (mitosis and meiosis).",
        "Basic familiarity with the human body systems."
    ],
    conceptOverview: "This unit covers the fundamental biological process of reproduction, ensuring the continuity of species. It includes reproduction in organisms, the detailed process of sexual reproduction in flowering plants (from pollination to fertilization and fruit development), human reproduction (including male and female reproductive systems, gametogenesis, menstrual cycle, fertilization, and embryonic development), and reproductive health (covering sexually transmitted diseases and birth control methods).",
    tamilConnection: "சங்க இலக்கியங்களில் அகத்திணைகள், காதல் மற்றும் குடும்ப வாழ்க்கையின் முக்கியத்துவத்தை விவரிக்கின்றன. இது, மனித இனப்பெருக்கத்தின் சமூக மற்றும் கலாச்சார அம்சங்களைப் பிரதிபலிக்கிறது. இந்த அத்தியாயம், அந்த வாழ்க்கைச் சுழற்சியின் உயிரியல் அடிப்படையை, அதாவது இனப்பெருக்க உறுப்புகளின் அமைப்பு மற்றும் செயல்பாடுகளை விளக்குகிறது.",
    culturalContext: "Traditional Indian wedding ceremonies often include rituals and symbolism associated with fertility and the continuation of the family line. These cultural practices are deeply connected to the biological imperatives of reproduction, which are explained scientifically in this chapter, covering everything from the menstrual cycle to fertilization.",
    syllabusMapping: [{
        topic: 'Reproduction in Organisms, Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health',
        tnBoardChapter: '12th Std Botany Ch 1; 12th Std Zoology Ch 1, 2',
        ncertReference: 'Class 12 Biology - Unit 6',
        notes: 'High weightage unit. Diagrams from human reproduction and processes in plant reproduction (pollination, fertilization) are very important.',
        mappingDescription: 'Maps to the first few chapters of TN Board Std 12 Botany and Zoology.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Sexual reproduction involves the fusion of gametes, leading to genetic variation, while asexual reproduction does not.",
        "In flowering plants, double fertilization is a unique process resulting in the formation of a diploid zygote and a triploid endosperm.",
        "The human menstrual cycle is a complex interplay of hormones from the hypothalamus, pituitary gland, and ovaries.",
        "Reproductive health involves not just the absence of disease, but also physical, emotional, and social well-being in all matters relating to the reproductive system."
    ],
    mnemonics: [
        { text: "For hormones in the menstrual cycle: 'FOL(d) M(a)P' - FSH, Oestrogen, LH, Progesterone. FSH/LH from Pituitary, Oestrogen/Progesterone from Ovary.", tamil: "மாதவிடாய் சுழற்சியில் உள்ள ஹார்மோன்களுக்கு: 'FOL(d) M(a)P' - FSH, ஈஸ்ட்ரோஜன், LH, புரோஜெஸ்ட்டிரோன்." }
    ],
    neetTips: [
        { text: "Draw the diagrams of the male and female reproductive systems and label all the parts. Questions often ask about the function or location of a specific part.", tamil: "ஆண் மற்றும் பெண் இனப்பெருக்க அமைப்புகளின் வரைபடங்களை வரைந்து அனைத்து பாகங்களையும் பெயரிடுங்கள். கேள்விகள் பெரும்பாலும் ஒரு குறிப்பிட்ட பகுதியின் செயல்பாடு அல்லது இருப்பிடம் பற்றிக் கேட்கின்றன." },
        { text: "Create a flowchart for spermatogenesis and oogenesis, highlighting the key differences (e.g., equal vs. unequal cytokinesis, number of gametes produced).", tamil: "விந்தணு உருவாக்கம் மற்றும் அண்ட அணு உருவாக்கத்திற்கு ஒரு பாய்வு வரைபடத்தை உருவாக்கவும், முக்கிய வேறுபாடுகளை முன்னிலைப்படுத்தவும் (எ.கா., சமமான vs. சமமற்ற சைட்டோகைனிசிஸ், உற்பத்தி செய்யப்படும் கேமட்களின் எண்ணிக்கை)." }
    ],
    studentTip: {
        english: "Understanding the hormonal control of the menstrual cycle is key. Try to draw a graph showing the levels of FSH, LH, estrogen, and progesterone over the 28-day cycle and correlate it with the events in the ovary and uterus.",
        tamil: "மாதவிடாய் சுழற்சியின் ஹார்மோன் கட்டுப்பாட்டைப் புரிந்துகொள்வது முக்கியம். 28-நாள் சுழற்சியில் FSH, LH, ஈஸ்ட்ரோஜன், மற்றும் புரோஜெஸ்ட்டிரோன் அளவுகளைக் காட்டும் ஒரு வரைபடத்தை வரைய முயற்சிக்கவும், அதை கருப்பை மற்றும் கருப்பையில் நிகழும் நிகழ்வுகளுடன் தொடர்புபடுத்தவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend the pros and cons of different methods of contraception (e.g., barrier methods, hormonal methods, IUDs) from a biological perspective.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: வெவ்வேறு கருத்தடை முறைகளின் (எ.கா., தடை முறைகள், ஹார்மோன் முறைகள், IUDகள்) நன்மைகள் மற்றும் தீமைகள் என்ன?"
    },
    nextChapter: {
        title: "Genetics and Evolution",
        titleTamil: "மரபியல் மற்றும் பரிணாமம்"
    },
    validationReport: []
};
