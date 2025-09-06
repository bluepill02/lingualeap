
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
    stateBoardGaps: [
      "NCERT provides a more detailed explanation of the Fluid Mosaic Model of the cell membrane, including the role of different types of proteins and cholesterol. TN board texts might cover it more superficially.",
      "The classification and detailed structures of biomolecules, particularly the different levels of protein structure (primary, secondary, tertiary, quaternary), are often more emphasized in NCERT-based materials.",
      "While the stages of mitosis and meiosis are covered in both syllabi, NCERT questions often focus more on the conceptual understanding of the events in each stage (e.g., when chromosome number is halved, when sister chromatids separate).",
      "The concept of 'metabolic basis for living' in the biomolecules chapter is a unique NCERT perspective that might not be explicitly framed in the state board syllabus."
    ],
    extraNeetConcepts: [
      "The concept of 'dynamic state of body constituents' and how biomolecules are constantly being changed and replaced.",
      "Detailed structure and function of different types of RNA (mRNA, tRNA, rRNA) beyond a basic definition.",
      "Anomeric forms of monosaccharides (α and β glucose) and their significance in polysaccharide structure (starch vs. cellulose).",
      "Factors affecting enzyme activity in detail, including competitive and non-competitive inhibition, with graphical representations.",
      "The concept of G₀ (quiescent stage) in the cell cycle is a key detail for NEET.",
      "Meiosis in different organisms, like haplontic, diplontic, and haplo-diplontic life cycles."
    ],
    ncertReadingGuide: [
      "Pay close attention to the diagrams of the eukaryotic cell, chloroplast, and mitochondrion. Labelled diagram questions are common.",
      "In the 'Biomolecules' chapter, Table 9.3 (Average Composition of Cells) and Table 9.5 (Amino Acid Structures) are important for direct recall questions.",
      "Master the diagrams of the stages of mitosis and meiosis. Be able to identify any stage from a given diagram and state the key event occurring.",
      "The graph showing the effect of pH and temperature on enzyme activity is a very high-yield concept.",
      "Focus on the chemical nature of bonds that stabilize protein structures (peptide, hydrogen, disulfide, ionic, hydrophobic interactions).",
      "Understand the difference between a nucleoside and a nucleotide very clearly.",
      "For the cell cycle, the diagram showing the duration of different phases is important. Understand what happens in G₁, S, and G₂ phases."
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: [
            {
                title: "Ultra Structure of a Plant Cell",
                description: "Diagram showing the key organelles of a typical plant cell, including the cell wall, cell membrane, nucleus, chloroplasts, mitochondria, and a large central vacuole.",
                diagram: `
+------------------------------------------------------+
| Cell Wall (outermost)                                |
|   +--------------------------------------------------+   |
|   | Cell Membrane                                    |   |
|   |   +------------------------------------------+   |   |
|   |   |        Large Central Vacuole           |   |   |
|   |   +------------------------------------------+   |   |
|   |                                                  |   |
|   |    Cytoplasm                                     |   |
|   |       .---.                                      |   |
|   |      ( Nu  ) Nucleus                             |   |
|   |       '---'                                      |   |
|   |     .--.      .--.                               |   |
|   |    ( Ch )    ( Mt )  <-- Chloroplast & Mitochondrion |   |
|   |     '--'      '--'                               |   |
|   |      . . . Ribosomes                             |   |
|   +--------------------------------------------------+   |
+------------------------------------------------------+`
            },
            {
                title: "Stages of Mitosis",
                description: "A simplified representation of the key events in mitosis.",
                diagram: `
Prophase      --->   Metaphase      --->   Anaphase      --->   Telophase
(Chromosomes         (Chromosomes          (Sister              (Chromosomes
 condense)            align at plate)      chromatids separate)   decondense,
                                                                   cells divide)`
            }
        ]
    },
    mcqs: [
        {
            question: "Which of the following is known as the 'powerhouse of the cell'?",
            options: ["A. Ribosome", "B. Nucleus", "C. Mitochondrion", "D. Lysosome"],
            answer: "C. Mitochondrion",
            explanation: "Mitochondria are the sites of cellular respiration, which generates ATP, the main energy currency of the cell.",
            neetFrequency: 5
        },
        {
            question: "The Fluid Mosaic Model of the cell membrane was proposed by:",
            options: ["A. Watson and Crick", "B. Schleiden and Schwann", "C. Singer and Nicolson", "D. Robert Hooke"],
            answer: "C. Singer and Nicolson",
            explanation: "Singer and Nicolson proposed the widely accepted Fluid Mosaic Model in 1972.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is not a part of the endomembrane system?",
            options: ["A. Endoplasmic Reticulum", "B. Golgi complex", "C. Lysosomes", "D. Peroxisomes"],
            answer: "D. Peroxisomes",
            explanation: "The endomembrane system includes the ER, Golgi complex, lysosomes, and vacuoles. The functions of mitochondria, chloroplasts, and peroxisomes are not coordinated with these components.",
            neetFrequency: 4
        },
        {
            question: "The synthesis of proteins occurs in which cell organelle?",
            options: ["A. Mitochondria", "B. Nucleus", "C. Ribosomes", "D. Golgi apparatus"],
            answer: "C. Ribosomes",
            explanation: "Ribosomes are the sites of protein synthesis (translation).",
            neetFrequency: 5
        },
        {
            question: "In which stage of the cell cycle does DNA replication take place?",
            options: ["A. G₁ phase", "B. S phase", "C. G₂ phase", "D. M phase"],
            answer: "B. S phase",
            explanation: "The 'S' in S phase stands for Synthesis, where the cell synthesizes a complete copy of the DNA in its nucleus.",
            neetFrequency: 5
        },
        {
            question: "Crossing over occurs during which stage of meiosis?",
            options: ["A. Leptotene", "B. Zygotene", "C. Pachytene", "D. Diplotene"],
            answer: "C. Pachytene",
            explanation: "Crossing over, the exchange of genetic material between non-sister chromatids of homologous chromosomes, is a key event of the Pachytene stage of Prophase I.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a polysaccharide?",
            options: ["A. Glucose", "B. Sucrose", "C. Lactose", "D. Starch"],
            answer: "D. Starch",
            explanation: "Starch is a polymer made up of many glucose (monosaccharide) units. Sucrose and Lactose are disaccharides.",
            neetFrequency: 3
        },
        {
            question: "The primary structure of a protein is determined by:",
            options: ["A. The sequence of amino acids", "B. The formation of α-helices", "C. The 3D folding", "D. The interaction of subunits"],
            answer: "A. The sequence of amino acids",
            explanation: "The primary structure is the unique linear sequence of amino acids linked by peptide bonds.",
            neetFrequency: 4
        },
        {
            question: "A prokaryotic cell is characterized by the absence of:",
            options: ["A. Ribosomes", "B. A cell membrane", "C. A nucleus", "D. DNA"],
            answer: "C. A nucleus",
            explanation: "Prokaryotic cells lack a membrane-bound nucleus and other membrane-bound organelles.",
            neetFrequency: 3
        },
        {
            question: "The 'suicidal bags' of the cell are:",
            options: ["A. Ribosomes", "B. Lysosomes", "C. Vacuoles", "D. Mitochondria"],
            answer: "B. Lysosomes",
            explanation: "Lysosomes contain hydrolytic enzymes and can digest worn-out organelles or the entire cell, hence the name 'suicidal bags'.",
            neetFrequency: 2
        },
        {
            question: "The two subunits of ribosomes remain united at a critical ion level of:",
            options: ["A. Magnesium", "B. Calcium", "C. Sodium", "D. Potassium"],
            answer: "A. Magnesium",
            explanation: "Magnesium ions (Mg²⁺) are essential for binding the large and small subunits of ribosomes together.",
            neetFrequency: 2
        },
        {
            question: "The main function of the Golgi apparatus is:",
            options: ["A. Protein synthesis", "B. Energy production", "C. Packaging and modification of materials", "D. Fat synthesis"],
            answer: "C. Packaging and modification of materials",
            explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is an example of a saturated fatty acid?",
            options: ["A. Oleic acid", "B. Linoleic acid", "C. Arachidonic acid", "D. Palmitic acid"],
            answer: "D. Palmitic acid",
            explanation: "Palmitic acid (16 carbons) has no double bonds in its hydrocarbon chain, making it saturated. The others are unsaturated fatty acids.",
            neetFrequency: 1
        },
        {
            question: "In meiosis, the separation of homologous chromosomes occurs during:",
            options: ["A. Anaphase I", "B. Anaphase II", "C. Metaphase I", "D. Metaphase II"],
            answer: "A. Anaphase I",
            explanation: "Anaphase I is characterized by the separation of homologous chromosomes to opposite poles. Sister chromatids separate in Anaphase II.",
            neetFrequency: 5
        },
        {
            question: "The cell theory was proposed by:",
            options: ["A. Robert Hooke", "B. Antonie van Leeuwenhoek", "C. Schleiden and Schwann", "D. Watson and Crick"],
            answer: "C. Schleiden and Schwann",
            explanation: "Theodor Schwann and Matthias Schleiden are credited with developing the cell theory in the 1830s.",
            neetFrequency: 2
        },
        {
            question: "The most abundant protein in the animal world is:",
            options: ["A. Insulin", "B. Hemoglobin", "C. Collagen", "D. Trypsin"],
            answer: "C. Collagen",
            explanation: "Collagen is the main structural protein in the extracellular matrix in various connective tissues in animals.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is not a component of a nucleotide?",
            options: ["A. A pentose sugar", "B. A nitrogenous base", "C. A phosphate group", "D. An amino acid"],
            answer: "D. An amino acid",
            explanation: "Amino acids are the building blocks of proteins, not nucleic acids.",
            neetFrequency: 4
        },
        {
            question: "Which type of cell junction is responsible for cell-to-cell communication?",
            options: ["A. Tight junctions", "B. Adhering junctions", "C. Gap junctions", "D. Desmosomes"],
            answer: "C. Gap junctions",
            explanation: "Gap junctions are channels that directly connect the cytoplasm of two cells, allowing for communication and passage of small molecules.",
            neetFrequency: 2
        },
        {
            question: "The cell organelle involved in the synthesis of lipids and steroids is:",
            options: ["A. Rough Endoplasmic Reticulum", "B. Smooth Endoplasmic Reticulum", "C. Ribosome", "D. Golgi apparatus"],
            answer: "B. Smooth Endoplasmic Reticulum",
            explanation: "The Smooth ER is the major site for synthesis of lipids and steroid hormones.",
            neetFrequency: 4
        },
        {
            question: "The G₀ phase of the cell cycle is a:",
            options: ["A. State of active division", "B. Quiescent stage", "C. Phase where DNA is synthesized", "D. Phase before cytokinesis"],
            answer: "B. Quiescent stage",
            explanation: "Cells in the G₀ phase are metabolically active but no longer proliferate unless called on to do so. It is an inactive or quiescent stage.",
            neetFrequency: 3
        },
        {
            question: "An enzyme increases the rate of a reaction by:",
            options: ["A. Increasing the activation energy", "B. Decreasing the activation energy", "C. Increasing the temperature", "D. Decreasing the substrate concentration"],
            answer: "B. Decreasing the activation energy",
            explanation: "Enzymes are biological catalysts that provide an alternative reaction pathway with a lower activation energy, thus speeding up the reaction.",
            neetFrequency: 5
        },
        {
            question: "The structure of DNA is a:",
            options: ["A. Single helix", "B. Double helix", "C. Triple helix", "D. Beta-pleated sheet"],
            answer: "B. Double helix",
            explanation: "The Watson-Crick model describes DNA as a double helix with two antiparallel strands.",
            neetFrequency: 3
        },
        {
            question: "Which of the following cell organelles is not membrane-bound?",
            options: ["A. Nucleus", "B. Ribosome", "C. Mitochondrion", "D. Chloroplast"],
            answer: "B. Ribosome",
            explanation: "Ribosomes are composed of rRNA and proteins and are not enclosed by a membrane.",
            neetFrequency: 4
        },
        {
            question: "Synapsis, the pairing of homologous chromosomes, occurs during:",
            options: ["A. Leptotene", "B. Zygotene", "C. Pachytene", "D. Diakinesis"],
            answer: "B. Zygotene",
            explanation: "During the Zygotene stage of Prophase I, homologous chromosomes pair up to form bivalents. This process is called synapsis.",
            neetFrequency: 3
        },
        {
            question: "A competitive inhibitor of an enzyme:",
            options: ["A. Binds to the allosteric site", "B. Resembles the substrate and binds to the active site", "C. Increases the reaction rate", "D. Binds permanently to the enzyme"],
            answer: "B. Resembles the substrate and binds to the active site",
            explanation: "A competitive inhibitor has a structure similar to the substrate and competes for binding to the enzyme's active site.",
            neetFrequency: 4
        },
        { question: "The 'S' in 70S and 80S ribosomes stands for:", options: ["A. Sedimentation coefficient", "B. Subunit", "C. Surface area", "D. Solubility"], answer: "A. Sedimentation coefficient", explanation: "S stands for Svedberg unit, a measure of the sedimentation rate during centrifugation, which depends on size and shape.", neetFrequency: 2 },
        { question: "Which of the following is a structural polysaccharide?", options: ["A. Starch", "B. Glycogen", "C. Chitin", "D. Sucrose"], answer: "C. Chitin", explanation: "Chitin forms the exoskeleton of arthropods and the cell walls of fungi. Starch and glycogen are storage polysaccharides.", neetFrequency: 3 },
        { question: "The final stage of meiotic prophase I is:", options: ["A. Diplotene", "B. Pachytene", "C. Diakinesis", "D. Zygotene"], answer: "C. Diakinesis", explanation: "Diakinesis is marked by terminalisation of chiasmata and disappearance of the nucleolus.", neetFrequency: 3 },
        { question: "A phospholipid molecule has a:", options: ["A. Hydrophilic head and hydrophilic tail", "B. Hydrophobic head and hydrophobic tail", "C. Hydrophilic head and hydrophobic tail", "D. Hydrophobic head and hydrophilic tail"], answer: "C. Hydrophilic head and hydrophobic tail", explanation: "The phosphate head is polar (hydrophilic), and the fatty acid tails are non-polar (hydrophobic). This amphipathic nature is key to forming cell membranes.", neetFrequency: 4 },
        { question: "Which of the following is an example of a secondary metabolite in plants?", options: ["A. Glucose", "B. Amino acid", "C. Rubber", "D. Protein"], answer: "C. Rubber", explanation: "Rubber, gums, alkaloids, and pigments are examples of secondary metabolites which are not directly involved in primary growth and development.", neetFrequency: 2 },
        { question: "The chromosome number is reduced to half during:", options: ["A. Mitosis", "B. Meiosis I", "C. Meiosis II", "D. Interphase"], answer: "B. Meiosis I", explanation: "Meiosis I is the reductional division where homologous chromosomes separate, halving the chromosome number.", neetFrequency: 5 },
        { question: "The term 'Cell' was first coined by:", options: ["A. Robert Brown", "B. Robert Hooke", "C. Rudolf Virchow", "D. Schwann"], answer: "B. Robert Hooke", explanation: "Robert Hooke observed cork cells under a microscope in 1665 and coined the term 'cell'.", neetFrequency: 1 },
        { question: "The correct sequence of phases in the cell cycle is:", options: ["A. G₁ → G₂ → S → M", "B. S → G₁ → G₂ → M", "C. G₁ → S → G₂ → M", "D. M → G₁ → S → G₂"], answer: "C. G₁ → S → G₂ → M", explanation: "This represents the correct order of interphase (G₁, S, G₂) followed by the mitotic (M) phase.", neetFrequency: 3 },
        { question: "Which level of protein structure is not affected by denaturation?", options: ["A. Primary", "B. Secondary", "C. Tertiary", "D. Quaternary"], answer: "A. Primary", explanation: "Denaturation disrupts weaker bonds (H-bonds, ionic bonds), affecting the 2°, 3°, and 4° structures, but not the strong covalent peptide bonds of the primary structure.", neetFrequency: 4 },
        { question: "The 'Cell drinking' process is known as:", options: ["A. Phagocytosis", "B. Pinocytosis", "C. Exocytosis", "D. Endocytosis"], answer: "B. Pinocytosis", explanation: "Pinocytosis (cell drinking) is the ingestion of liquid into a cell by the budding of small vesicles from the cell membrane. Phagocytosis is cell eating.", neetFrequency: 1 },
        { question: "Which of the following are called 'semi-autonomous' organelles?", options: ["A. Mitochondria and Ribosomes", "B. Chloroplasts and Lysosomes", "C. Mitochondria and Chloroplasts", "D. Nucleus and Ribosomes"], answer: "C. Mitochondria and Chloroplasts", explanation: "They are called semi-autonomous because they have their own DNA, ribosomes, and can synthesize some of their own proteins.", neetFrequency: 3 },
        { question: "A chromosome with the centromere slightly away from the middle resulting in one shorter arm and one longer arm is:", options: ["A. Metacentric", "B. Sub-metacentric", "C. Acrocentric", "D. Telocentric"], answer: "B. Sub-metacentric", explanation: "This describes a sub-metacentric chromosome, which has a p (short) arm and a q (long) arm.", neetFrequency: 2 },
        { question: "Which of the following is not a polymer?", options: ["A. Starch", "B. DNA", "C. Protein", "D. Lipid"], answer: "D. Lipid", explanation: "Lipids are large biomolecules but are not polymers in the strict sense as they are not made of repeating monomer units.", neetFrequency: 3 },
        { question: "The separation of sister chromatids occurs during:", options: ["A. Anaphase I", "B. Metaphase II", "C. Anaphase II", "D. Telophase I"], answer: "C. Anaphase II", explanation: "Anaphase II of meiosis is where sister chromatids finally separate and move to opposite poles.", neetFrequency: 5 },
        { question: "The '9+2' arrangement of microtubules is found in:", options: ["A. Cilia and Flagella", "B. Centrioles", "C. Basal bodies", "D. Both A and C"], answer: "D. Both A and C", explanation: "The axoneme of cilia and flagella has a 9+2 arrangement. Centrioles and basal bodies have a 9+0 arrangement.", neetFrequency: 4 },
        { question: "The most abundant biomolecule on earth is:", options: ["A. Protein", "B. Nucleic Acid", "C. Carbohydrate", "D. Lipid"], answer: "C. Carbohydrate", explanation: "Cellulose, a carbohydrate, is the most abundant organic polymer on Earth, making up the cell walls of plants.", neetFrequency: 2 },
        { question: "In a eukaryotic cell, the DNA is mainly found in the:", options: ["A. Cytoplasm", "B. Nucleus", "C. Ribosome", "D. Cell wall"], answer: "B. Nucleus", explanation: "The vast majority of a eukaryotic cell's genetic material is contained within the nucleus.", neetFrequency: 1 },
        { question: "Which of the following is an example of a feedback inhibition of an enzyme?", options: ["A. The inhibition of hexokinase by glucose-6-phosphate", "B. The inhibition of succinate dehydrogenase by malonate", "C. The reaction of a poison with an enzyme", "D. The denaturation of an enzyme by heat"], answer: "A. The inhibition of hexokinase by glucose-6-phosphate", explanation: "This is a classic example where the product of a metabolic pathway inhibits an early enzyme in the pathway.", neetFrequency: 2 },
        { question: "Which is the correct statement about the fluid mosaic model?", options: ["A. The lipids are sandwiched between two protein layers", "B. The proteins are embedded in a lipid bilayer", "C. The membrane is a rigid structure", "D. The membrane is impermeable"], answer: "B. The proteins are embedded in a lipid bilayer", explanation: "The model describes a fluid lipid bilayer with proteins embedded within it, able to move laterally.", neetFrequency: 3 },
        { question: "The term 'chromatin' refers to:", options: ["A. A condensed chromosome", "B. The complex of DNA and proteins in the nucleus", "C. The fluid inside the nucleus", "D. The site of ribosome synthesis"], answer: "B. The complex of DNA and proteins in the nucleus", explanation: "Chromatin is the material of which chromosomes are composed, consisting of DNA, histones, and other proteins.", neetFrequency: 2 },
        { question: "Which of the following represents the correct order of M-phase?", options: ["A. Prophase, Anaphase, Metaphase, Telophase", "B. Prophase, Metaphase, Telophase, Anaphase", "C. Metaphase, Prophase, Anaphase, Telophase", "D. Prophase, Metaphase, Anaphase, Telophase"], answer: "D. Prophase, Metaphase, Anaphase, Telophase", explanation: "Remember the mnemonic PMAT for the correct sequence of mitosis.", neetFrequency: 4 },
        { question: "Which of the following statements about enzymes is true?", options: ["A. They increase the activation energy", "B. They are consumed in the reaction", "C. They are highly specific in their action", "D. They work best at any temperature"], answer: "C. They are highly specific in their action", explanation: "Enzymes are highly specific for their substrates due to the unique shape of their active site.", neetFrequency: 3 },
        { question: "The backbone of a DNA strand is formed by:", options: ["A. Sugar and nitrogenous base", "B. Phosphate and nitrogenous base", "C. Sugar and phosphate", "D. Sugar, phosphate, and nitrogenous base"], answer: "C. Sugar and phosphate", explanation: "The sugar-phosphate backbone is formed by alternating deoxyribose sugar and phosphate groups linked by phosphodiester bonds.", neetFrequency: 4 },
        { question: "Middle lamella is mainly composed of:", options: ["A. Hemicellulose", "B. Calcium pectate", "C. Muramic acid", "D. Lignin"], answer: "B. Calcium pectate", explanation: "The middle lamella is a layer which cements the cell walls of two adjoining plant cells together and is rich in calcium pectate.", neetFrequency: 2 },
        { question: "Which statement is correct for the cell cycle?", options: ["A. G₂ phase follows mitotic phase", "B. DNA is replicated in G₂ phase", "C. In G₁ phase, cell growth occurs", "D. The cell cycle is the same for all cells"], answer: "C. In G₁ phase, cell growth occurs", explanation: "G₁ is a period of cell growth and metabolic activity before DNA synthesis begins.", neetFrequency: 3 }
    ],
    assertionReasons: [
        {
            assertion: "Mitochondria and chloroplasts are semi-autonomous organelles.",
            reason: "They have their own DNA, ribosomes, and can synthesize some of their own proteins.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation for why they are considered semi-autonomous.",
            neetFrequency: 4
        },
        {
            assertion: "In meiosis, the number of chromosomes is reduced to half, but in mitosis it remains the same.",
            reason: "Meiosis involves two cycles of nuclear division but only one cycle of DNA replication.",
            answer: "A",
            explanation: "Assertion is a correct statement of the key difference. The reason is also true and is the correct explanation for how the chromosome number is halved in meiosis.",
            neetFrequency: 5
        },
        {
            assertion: "All enzymes are proteins, but all proteins are not enzymes.",
            reason: "Enzymes are biocatalysts with a specific three-dimensional structure.",
            answer: "B",
            explanation: "Both statements are true. However, the reason describes what an enzyme is but does not logically explain why all proteins are not enzymes. The explanation is that proteins can have other functions (structural like collagen, transport like hemoglobin, etc.). Note: a few RNA molecules (ribozymes) also act as catalysts, making the first statement not universally true, but it is considered true for NEET purposes.",
            neetFrequency: 3
        },
        {
            assertion: "Prokaryotic cells do not have a nucleus.",
            reason: "The genetic material in prokaryotes is not enclosed by a membrane.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct definition and explanation for the absence of a true nucleus in prokaryotes. Their genetic material lies in a region called the nucleoid.",
            neetFrequency: 4
        },
        {
            assertion: "The cell membrane is described as 'protein iceberg in a sea of lipid'.",
            reason: "The fluid mosaic model shows that proteins are embedded or floating within a fluid lipid bilayer.",
            answer: "A",
            explanation: "The assertion is a common analogy for the cell membrane structure. The reason is a correct description of the fluid mosaic model, which explains the analogy. Therefore, the reason explains the assertion.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Ribosome", "(b) Lysosome", "(c) Mitochondrion", "(d) Nucleolus"],
            column2: ["(p) ATP synthesis", "(q) Protein synthesis", "(r) rRNA synthesis", "(s) Hydrolytic enzymes"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching cell organelles with their primary functions.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Prophase I", "(b) Metaphase I", "(c) Anaphase I", "(d) Telophase I"],
            column2: ["(p) Separation of homologous chromosomes", "(q) Pairing of homologous chromosomes", "(r) Formation of diad of cells", "(s) Alignment of bivalents at equatorial plate"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the stages of Meiosis I with the key events occurring in them.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Carbohydrate", "(b) Protein", "(c) Nucleic Acid", "(d) Lipid"],
            column2: ["(p) Phosphodiester bond", "(q) Ester bond", "(r) Peptide bond", "(s) Glycosidic bond"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching biomolecules with the type of covalent bond that links their monomers.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Primary structure", "(b) Secondary structure", "(c) Tertiary structure", "(d) Quaternary structure"],
            column2: ["(p) 3D folding of a polypeptide", "(q) α-helix and β-sheet", "(r) Assembly of two or more polypeptides", "(s) Sequence of amino acids"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching the levels of protein structure with their descriptions.",
            neetFrequency: 3
        },
        {
            column1: ["(a) G₁ phase", "(b) S phase", "(c) G₂ phase", "(d) M phase"],
            column2: ["(p) DNA replication", "(q) Cell growth, proteins are synthesized", "(r) Interval between mitosis and initiation of DNA replication", "(s) Mitosis"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the phases of the cell cycle with their key events. G₂ involves protein synthesis for mitosis. G₁ is the main growth phase.",
            neetFrequency: 4
        }
    ],
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
