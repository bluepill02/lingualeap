
import type { NeetModule } from '@/lib/types';

export const biotechnologyAndItsApplications: NeetModule = {
    id: 'neet-biology-biotechnology-and-its-applications',
    title: 'Biotechnology and Its Applications',
    chapter: 'Biotechnology and Its Applications',
    subject: 'Biology',
    learningObjectives: [
        "Understand the principles of biotechnology, including recombinant DNA technology and genetic engineering.",
        "Describe the applications of biotechnology in agriculture, such as the production of pest-resistant plants (e.g., Bt-cotton).",
        "Explain the applications of biotechnology in medicine, including the production of insulin, gene therapy, and molecular diagnosis (PCR, ELISA).",
        "Discuss the use of transgenic animals.",
        "Analyze the ethical issues related to genetic modification and biotechnology."
    ],
    prerequisites: [
        "Molecular Basis of Inheritance (DNA structure, replication, transcription).",
        "Understanding of enzymes and basic biochemical pathways.",
        "Knowledge of cell structure and function."
    ],
    conceptOverview: "This unit focuses on the practical applications of biotechnology. It covers the use of genetically modified organisms in agriculture (like Bt-cotton), medicine (like insulin production), and other fields. Key topics include gene therapy, molecular diagnosis (PCR, ELISA), and transgenic animals. It also delves into the ethical issues related to genetic modification.",
    tamilConnection: "தமிழ்நாட்டின் விவசாயத்தில், வறட்சியைத் தாங்கும் பயிர்களை உருவாக்குவது போன்ற உயிரி தொழில்நுட்பத்தின் பயன்பாடுகள் மிக முக்கியமானவை. இட்லி, தோசை மாவு புளிப்பது முதல், தயிர் உறைவது வரை, நம் சமையலறையில் நடக்கும் நொதித்தல் செயல்முறைகள், நுண்ணுயிரிகளின் உயிரி தொழில்நுட்பப் பயன்பாடுகளுக்கு சிறந்த எடுத்துக்காட்டுகளாகும்.",
    culturalContext: "The development of Bt-cotton has had a significant impact on the cotton farming industry in states like Tamil Nadu and Maharashtra, by providing resistance against bollworm pests. This is a real-world, large-scale application of the genetic engineering principles discussed in this chapter.",
    syllabusMapping: [{
        topic: 'Biotechnology',
        tnBoardChapter: '12th Std Botany Ch 5, 6; 12th Std Zoology Ch 5',
        ncertReference: 'Class 12 Biology - Unit 9',
        notes: 'Conceptual and application-based questions are common. Focus on processes like PCR, rDNA technology and applications like Bt-cotton.',
        mappingDescription: 'Maps to chapters on Plant and Animal Biotechnology in TN Board Std 12.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Recombinant DNA (rDNA) technology is the core technique that allows us to combine DNA from different species.",
        "Key tools of rDNA technology include restriction enzymes, cloning vectors (like plasmids), and ligase.",
        "Polymerase Chain Reaction (PCR) is a technique used to amplify a specific segment of DNA.",
        "Biotechnology has wide-ranging applications in agriculture (GMOs like Bt-cotton), medicine (production of insulin, gene therapy), and industry.",
        "The use of biotechnology raises important ethical concerns that need to be addressed (e.g., via organizations like GEAC)."
    ],
    mnemonics: [
        { text: "For the steps of PCR: 'Denature, Anneal, Extend' (DAE).", tamil: "PCR படிகளுக்கு: 'Denature, Anneal, Extend' (DAE)." }
    ],
    neetTips: [
        { text: "Applications like Bt-cotton, RNA interference (RNAi) in pest resistance, and the production of human insulin using E. coli are extremely high-yield topics. Understand the mechanism behind each.", tamil: "Bt-பருத்தி, பூச்சி எதிர்ப்புக்கான ஆர்.என்.ஏ குறுக்கீடு (RNAi), மற்றும் ஈ.கோலியைப் பயன்படுத்தி மனித இன்சுலின் உற்பத்தி போன்ற பயன்பாடுகள் மிகவும் அதிக மகசூல் தரும் தலைப்புகள். ஒவ்வொன்றின் பின்னணியில் உள்ள பொறிமுறையைப் புரிந்து கொள்ளுங்கள்." },
        { text: "Remember the specific restriction enzyme names and their recognition sites if mentioned in the textbook, especially EcoRI.", tamil: "குறிப்பிட்ட ரெஸ்ட்ரிக்ஷன் நொதிகளின் பெயர்கள் மற்றும் அவற்றின் அங்கீகார தளங்களை பாடப்புத்தகத்தில் குறிப்பிட்டிருந்தால், குறிப்பாக EcoRI-ஐ நினைவில் கொள்ளுங்கள்." }
    ],
    studentTip: {
        english: "Try to create a simple flowchart for the process of creating a recombinant DNA molecule. This will help you visualize the roles of restriction enzymes, the vector, the foreign DNA, and ligase.",
        tamil: "ஒரு மீள்சேர்க்கை DNA மூலக்கூறை உருவாக்கும் செயல்முறைக்கு ஒரு எளிய பாய்வு வரைபடத்தை உருவாக்க முயற்சிக்கவும். இது ரெஸ்ட்ரிக்ஷன் நொதிகள், கடத்தி, அயல் DNA, மற்றும் லைகேஸ் ஆகியவற்றின் பங்குகளைக் காட்சிப்படுத்த உதவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend the ethical pros and cons of Genetically Modified (GM) crops. What are the potential benefits for farmers and consumers, and what are the potential risks for the environment and biodiversity?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: மரபணு மாற்றப்பட்ட (GM) பயிர்களின் நெறிமுறை சார்ந்த நன்மைகள் மற்றும் தீமைகள் என்ன? விவசாயிகள் மற்றும் நுகர்வோருக்கு ஏற்படக்கூடிய நன்மைகள் என்ன, மற்றும் சுற்றுச்சூழல் மற்றும் பல்லுயிர் பெருக்கத்திற்கு ஏற்படக்கூடிய அபாயங்கள் என்ன?"
    },
    nextChapter: {
        title: "Ecology and Environment",
        titleTamil: "சூழலியல் மற்றும் சுற்றுச்சூழல்"
    },
    validationReport: []
};
