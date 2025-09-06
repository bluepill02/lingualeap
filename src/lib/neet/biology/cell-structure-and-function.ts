
import type { NeetModule } from '@/lib/types';

export const cellStructureAndFunction: NeetModule = {
    id: 'neet-biology-cell-structure-and-function',
    title: 'Cell Structure and Function',
    chapter: 'Cell Structure and Function',
    subject: 'Biology',
    learningObjectives: [
        "Differentiate between prokaryotic and eukaryotic cells.",
        "Describe the structure and function of various cell organelles (nucleus, mitochondria, chloroplasts, ribosomes, etc.).",
        "Understand the fluid mosaic model of the cell membrane.",
        "Classify and describe the structure of biomolecules like carbohydrates, proteins, lipids, and nucleic acids.",
        "Explain the different stages of the cell cycle and the processes of mitosis and meiosis."
    ],
    prerequisites: [
        "Basic understanding of what a cell is.",
        "Basic chemical concepts of atoms and molecules."
    ],
    conceptOverview: "This unit explores the fundamental unit of life: the cell. It covers the details of prokaryotic and eukaryotic cells, the structure and function of various cell organelles (like mitochondria, ribosomes, nucleus), and the composition of the cell membrane. It also delves into biomolecules—the chemical building blocks of life, such as proteins, carbohydrates, and nucleic acids—and concludes with the process of cell division (mitosis and meiosis), which is essential for growth and reproduction.",
    tamilConnection: "ஒரு பெரிய கோவில் (கோபுரம்) எவ்வாறு பல சிறிய சன்னதிகள், பிரகாரங்கள், மற்றும் மண்டபங்களால் ஆனதோ, அதுபோலவே ஒவ்வொரு உயிரினமும் செல்களால் ஆனது. ஒவ்வொரு செல்லின் உள்ளேயும், மைட்டோகாண்ட்ரியா (சக்தி நிலையம்), உட்கரு (கட்டுப்பாட்டு அறை) போன்ற பல நுண்ணுறுப்புகள் குறிப்பிட்ட பணிகளைச் செய்கின்றன. இந்த அத்தியாயம், உயிரின் இந்த அடிப்படைக் கட்டுமானத்தைப் பற்றி விளக்குகிறது.",
    culturalContext: "The structure of a cell can be compared to a bustling city like Chennai. The nucleus is the 'Fort St. George' or city hall, mitochondria are the power plants, ribosomes are the factories producing proteins, and the cell membrane is the city's boundary controlling what comes in and out. Understanding the function of each part helps in understanding the city (the cell) as a whole.",
    syllabusMapping: [{
        topic: 'Cell: The Unit of Life, Biomolecules, Cell Cycle',
        tnBoardChapter: '11th Std Botany Ch 6, 7, 8; 11th Std Zoology Ch 4, 5',
        ncertReference: 'Class 11 Biology - Unit 3',
        notes: 'Extremely important unit. Questions from cell organelles and the cell cycle (mitosis, meiosis) are guaranteed.',
        mappingDescription: 'Maps to several chapters in TN Board Std 11 Botany and Zoology.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "The cell is the fundamental structural and functional unit of all living organisms.",
        "Eukaryotic cells are characterized by membrane-bound organelles, most notably the nucleus.",
        "The cell cycle consists of Interphase (G1, S, G2) and M phase (Mitosis/Meiosis).",
        "Mitosis results in two identical daughter cells (for growth and repair), while meiosis results in four genetically different haploid cells (for sexual reproduction).",
        "Primary and secondary structures of proteins (alpha-helix, beta-sheet) are crucial for their function."
    ],
    mnemonics: [
        { text: "For the stages of Prophase I in Meiosis: 'Lazy Zebra Pushed Down Dog' (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis).", tamil: "மியோசிஸின் புரோபேஸ் I நிலைகளுக்கு: 'Lazy Zebra Pushed Down Dog' (லெப்டோடீன், சைகோடீன், பாக்கிடீன், டிப்ளோடீன், டயாகைனிசிஸ்)." },
        { text: "For essential amino acids: 'PVT TIM HALL' (Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine).", tamil: "அத்தியாவசிய அமினோ அமிலங்களுக்கு: 'PVT TIM HALL'." }
    ],
    neetTips: [
        { text: "Make a table comparing Mitosis and Meiosis based on the number of divisions, chromosome number in daughter cells, and purpose. This is a very high-yield topic.", tamil: "பிரிவுகளின் எண்ணிக்கை, சேய் செல்களில் உள்ள குரோமோசோம் எண்ணிக்கை மற்றும் நோக்கம் ஆகியவற்றின் அடிப்படையில் மைட்டாசிஸ் மற்றும் மியோசிஸை ஒப்பிட்டு ஒரு அட்டவணையை உருவாக்கவும். இது மிகவும் அதிக மகசூல் தரும் தலைப்பு." },
        { text: "Questions identifying the stage of cell division based on a diagram are very common. Pay close attention to chromosome behavior in each stage.", tamil: "ஒரு வரைபடத்தின் அடிப்படையில் செல் பிரிவின் நிலையை அடையாளம் காணும் கேள்விகள் மிகவும் பொதுவானவை. ஒவ்வொரு நிலையிலும் குரோமோசோம் நடத்தை மீது கவனம் செலுத்துங்கள்." }
    ],
    studentTip: {
        english: "Try to draw the stages of mitosis and meiosis yourself without looking at the book. This active recall will solidify your understanding much better than just reading.",
        tamil: "புத்தகத்தைப் பார்க்காமல் மைட்டாசிஸ் மற்றும் மியோசிஸின் நிலைகளை நீங்களே வரைய முயற்சிக்கவும். இந்த செயல்முறை உங்கள் புரிதலை வெறும் வாசிப்பை விட மிகச் சிறப்பாக வலுப்படுத்தும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is crossing over in Pachytene of Meiosis I so important for evolution?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: மியோசிஸ் I இன் பாக்கிடீன் நிலையில் நிகழும் குறுக்கே கலத்தல் பரிணாமத்திற்கு ஏன் மிகவும் முக்கியமானது?"
    },
    nextChapter: {
        title: "Plant Physiology",
        titleTamil: "தாவரச் செயலியல்"
    },
    validationReport: []
};
