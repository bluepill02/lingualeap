
import type { NeetModule } from '@/lib/types';

export const geneticsAndEvolution: NeetModule = {
    id: 'neet-biology-genetics-and-evolution',
    title: 'Genetics and Evolution',
    chapter: 'Genetics and Evolution',
    subject: 'Biology',
    learningObjectives: [
        "Understand and apply Mendel's Laws of Inheritance (Dominance, Segregation, Independent Assortment).",
        "Solve genetics problems involving monohybrid and dihybrid crosses, and understand concepts like incomplete dominance and co-dominance.",
        "Describe the chromosomal theory of inheritance and concepts of linkage and recombination.",
        "Explain the molecular basis of inheritance, including the structure of DNA, replication, transcription, and translation.",
        "Understand the evidence for evolution and the theories of Lamarck, Darwin (natural selection), and the modern synthetic theory.",
        "Analyze the mechanisms of evolution, including Hardy-Weinberg principle, genetic drift, and speciation."
    ],
    prerequisites: [
        "Understanding of cell division (mitosis and meiosis).",
        "Knowledge of reproduction in organisms.",
        "Basic concepts of biomolecules, especially nucleic acids."
    ],
    conceptOverview: "This unit covers the science of heredity and variation. It begins with Mendel's Laws of Inheritance and moves on to the chromosomal theory of inheritance. The 'Molecular Basis of Inheritance' delves into the structure of DNA, its replication, transcription, and translation (the central dogma of molecular biology). Finally, the 'Evolution' section explores the origin of life and the mechanisms, like natural selection, that drive the evolution of new species.",
    tamilConnection: "'தாய் எட்டடி பாய்ந்தால், குட்டி பதினாறு அடி பாயும்' என்ற பழமொழி, மரபுப் பண்புகள் கடத்தப்படுவதை குறிக்கிறது. மெண்டலின் விதிகள், இந்த மரபுப் பண்புகள் எவ்வாறு ஒரு தலைமுறையிலிருந்து அடுத்த தலைமுறைக்கு கடத்தப்படுகின்றன என்பதற்கான அறிவியல் அடிப்படையை வழங்குகின்றன.",
    culturalContext: "The Jallikattu bulls of Tamil Nadu are a product of centuries of artificial selection, where humans have selectively bred bulls for specific traits like strength, aggression, and stamina. This is a powerful example of how selection (in this case, artificial) can lead to changes in a population over time, a core concept in the study of evolution.",
    syllabusMapping: [{
        topic: 'Principles of Inheritance, Molecular Basis, Evolution',
        tnBoardChapter: '12th Std Botany Ch 2, 3, 4; 12th Std Zoology Ch 3, 4',
        ncertReference: 'Class 12 Biology - Unit 7',
        notes: 'A very high-yield and conceptual unit. Mendelian genetics problems, molecular basis concepts (replication, transcription, translation), and evidence for evolution are key topics.',
        mappingDescription: 'Maps to Genetics and Evolution chapters in TN Board Std 12.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Mendel's laws form the foundation of classical genetics, explaining how traits are passed from parents to offspring.",
        "The Central Dogma of Molecular Biology describes the flow of genetic information: DNA → RNA → Protein.",
        "DNA replication is semi-conservative.",
        "Evolution by natural selection is the cornerstone of modern biology, explaining the diversity of life on Earth.",
        "The Hardy-Weinberg principle provides a baseline to detect evolutionary changes in a population."
    ],
    mnemonics: [
        { text: "For the stop codons in the genetic code: 'U Are Annoying, U Go Away, U Are Gone' (UAA, UGA, UAG).", tamil: "மரபணு குறியீட்டில் உள்ள நிறுத்தக் குறியீடுகளுக்கு: 'U Are Annoying, U Go Away, U Are Gone' (UAA, UGA, UAG)." }
    ],
    neetTips: [
        { text: "Practice Punnett squares for monohybrid, dihybrid, and test crosses until you can do them quickly and accurately. These are guaranteed marks.", tamil: "ஒருபண்பு, இருபண்பு, மற்றும் சோதனை கலப்புகளுக்கான புன்னட் கட்டங்களைப் விரைவாகவும் துல்லியமாகவும் செய்யும் வரை பயிற்சி செய்யுங்கள். இவை உறுதியான மதிப்பெண்கள்." },
        { text: "Understand the differences between homologous and analogous structures, and convergent and divergent evolution. These are very common conceptual questions.", tamil: "செயல் ஒத்த மற்றும் அமைப்பு ஒத்த உறுப்புகள், மற்றும் குவியும் மற்றும் விரியும் பரிணாமத்திற்கு இடையேயான வேறுபாடுகளைப் புரிந்து கொள்ளுங்கள். இவை மிகவும் பொதுவான கருத்தியல் கேள்விகள்." }
    ],
    studentTip: {
        english: "Genetics problems can seem like puzzles. Always write down the genotypes of the parents, list the possible gametes, and then fill out the Punnett square systematically. Don't rush!",
        tamil: "மரபியல் கணக்குகள் புதிர்கள் போல் தோன்றலாம். எப்போதும் பெற்றோரின் மரபணு வகைகளை எழுதுங்கள், சாத்தியமான கேமட்களைப் பட்டியலிடுங்கள், பின்னர் புன்னட் கட்டத்தை முறையாக நிரப்பவும். அவசரப்பட வேண்டாம்!"
    },
    peerDiscussion: {
        english: "Discuss with a friend: Is a point mutation (like the one causing sickle-cell anemia) always harmful? Can you think of a scenario where it might be beneficial?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஒரு புள்ளி சடுதி மாற்றம் (அரிவாள்-செல் சோகையை ஏற்படுத்துவது போல) எப்போதும் தீங்கு விளைவிப்பதா? அது நன்மை பயக்கும் ஒரு சூழ்நிலையை உங்களால் நினைக்க முடியுமா?"
    },
    nextChapter: {
        title: "Biology and Human Welfare",
        titleTamil: "உயிரியலும் மனித நலனும்"
    },
    validationReport: []
};
