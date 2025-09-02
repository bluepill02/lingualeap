
import type { NeetModule } from '@/lib/types';

export const cellStructureAndFunction: NeetModule = {
  id: 'biology-cell-structure-and-function',
  title: 'Cell Structure and Function',
  chapter: 'Cell Structure and Function',
  subject: 'Biology',
  conceptNotes: `
### 1. Cell Theory and Cell as the Basic Unit of Life (செல் கோட்பாடு மற்றும் செல் வாழ்வின் அடிப்படை அலகு)
*   **Cell Theory:** Proposed by Schleiden and Schwann, and later modified by Rudolf Virchow. Its main tenets are:
    1.  All living organisms are composed of cells and products of cells.
    2.  All cells arise from pre-existing cells (*Omnis cellula-e cellula*).
*   **Structure of Prokaryotic and Eukaryotic Cells:** A key distinction in biology. Prokaryotes lack a true nucleus and membrane-bound organelles, while Eukaryotes have them.
*   **Plant Cell and Animal Cell:** Key differences include the presence of a cell wall, large central vacuole, and plastids in plant cells, which are absent in animal cells. Animal cells have centrioles, which are absent in higher plant cells.

### 2. Cell Organelles: Structure and Function (செல் உறுப்புகள்: அமைப்பு மற்றும் செயல்பாடு)
*   **Cell Envelope, Cell Membrane, Cell Wall:** The outer layers of the cell. The cell membrane is a semi-permeable lipid bilayer (Fluid Mosaic Model). The cell wall provides structural support.
*   **Endomembrane System:** A group of membranes and organelles that work together.
    *   **Endoplasmic Reticulum (ER):** Network of membranes. Rough ER (RER) has ribosomes for protein synthesis; Smooth ER (SER) for lipid synthesis.
    *   **Golgi bodies (Golgi apparatus):** Modifies, sorts, and packages proteins and lipids.
    *   **Lysosomes:** "Suicidal bags" containing digestive enzymes.
    *   **Vacuoles:** Storage sacs, large and central in plant cells.
*   **Mitochondria:** The "powerhouse" of the cell, site of aerobic respiration and ATP synthesis.
*   **Ribosomes:** "Protein factories," site of protein synthesis. No membrane.
*   **Plastids:** Found in plant cells (e.g., Chloroplasts for photosynthesis).
*   **Microbodies:** Membrane-bound vesicles (e.g., peroxisomes).
*   **Cytoskeleton, cilia, flagella, centrioles:** Involved in cell shape, motility, and cell division.
*   **Nucleus:** Contains the cell's genetic material (DNA). Enclosed by a nuclear membrane and contains chromatin and a nucleolus (site of ribosome synthesis).

### 3. Chemical Constituents of Living Cells (உயிருள்ள செல்களின் வேதியல் கூறுகள்)
*   **Biomolecules:** Organic molecules essential for life.
    *   **Proteins:** Polymers of amino acids, performing various functions (structural, enzymes, transport).
    *   **Carbohydrates:** Main energy source (e.g., glucose, starch).
    *   **Lipids:** Fats and oils, used for energy storage and membrane structure.
    *   **Nucleic Acids:** DNA and RNA, which store and transmit genetic information.
*   **Enzymes:** Biological catalysts, typically proteins.
    *   **Types, properties, enzyme action:** Highly specific, work by lowering activation energy.
    *   **Classification and nomenclature of enzymes:** Named based on the reaction they catalyze (e.g., oxidoreductases, transferases).

### 4. Cell Division (செல் பிரிவு)
*   **Cell Cycle:** The sequence of events by which a cell duplicates its genome, synthesizes other constituents, and divides into two daughter cells. Phases: Interphase (G₁, S, G₂) and M phase.
*   **Mitosis:** Equational division where a parent cell divides into two genetically identical daughter cells. Used for growth and repair. Stages: Prophase, Metaphase, Anaphase, Telophase.
*   **Meiosis:** Reductional division that produces four genetically different haploid cells (gametes) from a single diploid cell. Occurs in two stages: Meiosis I and Meiosis II. It is essential for sexual reproduction and introducing genetic variation.
  `,
  workedExamples: [
    {
        problem: 'A scientist observes a cell that has a distinct cell wall made of peptidoglycan, 70S ribosomes, and no visible nucleus. Classify this cell and justify your answer.',
        solution: 'This cell is a **Prokaryotic cell**. \n**Justification:**\n1. The presence of a cell wall made of **peptidoglycan** is a characteristic feature of bacteria, which are prokaryotes.\n2. The presence of **70S ribosomes** is typical for prokaryotes (eukaryotic cytoplasm has 80S ribosomes).\n3. The absence of a visible, membrane-bound nucleus ("no visible nucleus") is the defining feature of a prokaryote. The genetic material would be located in a region called the nucleoid. (பெப்டிடோகிளைக்கான் செல் சுவர், 70S ரிபோசோம்கள், மற்றும் உட்கரு இல்லாதது ஆகியவை புரோகேரியோட்டின் பண்புகள்.)'
    },
    {
        problem: 'Explain why mitochondria are often called the "powerhouses" of the cell.',
        solution: 'Mitochondria are called the "powerhouses" because they are the primary sites of **aerobic cellular respiration**. This process breaks down glucose and other fuel molecules in the presence of oxygen to produce a large amount of **ATP (Adenosine Triphosphate)**. ATP is the main energy currency of the cell, providing the energy required for almost all cellular activities like muscle contraction, nerve impulse transmission, and synthesis of molecules. Without mitochondria, the cell would not be able to produce enough energy to survive. (மைட்டோகாண்ட்ரியா செல்லுலார் சுவாசம் மூலம் ATPயை உருவாக்குகிறது, இது செல்லின் அனைத்து செயல்பாடுகளுக்கும் ஆற்றலை வழங்குகிறது.)'
    },
    {
        problem: 'Describe the key events of the Anaphase stage of mitosis.',
        solution: 'During Anaphase of mitosis, the following key events occur:\n1.  **Centromeres Split:** The centromere of each chromosome splits longitudinally.\n2.  **Sister Chromatids Separate:** The sister chromatids of each chromosome separate and are now referred to as individual chromosomes.\n3.  **Chromosomes Move to Opposite Poles:** The separated chromosomes are pulled towards opposite poles of the cell by the shortening of the spindle fibers attached to their kinetochores.'
    }
  ],
  mcqs: [
    {
      question: 'Which organelle is known as the "powerhouse" of the cell?',
      options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Lysosome'],
      answer: 'Mitochondrion',
      explanation: 'Mitochondria are the sites of cellular respiration and ATP production, providing energy for the cell.'
    },
    {
      question: 'The cell theory was formulated by:',
      options: ['Watson and Crick', 'Schleiden and Schwann', 'Hooke and Leeuwenhoek', 'Darwin and Wallace'],
      answer: 'Schleiden and Schwann',
      explanation: 'Theodor Schwann and Matthias Schleiden are credited with developing the cell theory in 1839.'
    },
    {
      question: 'Which of the following is NOT found in a prokaryotic cell?',
      options: ['Ribosomes', 'Plasma membrane', 'Nucleus', 'Cell wall'],
      answer: 'Nucleus',
      explanation: 'Prokaryotic cells lack a true, membrane-bound nucleus. Their genetic material is located in a region called the nucleoid.'
    },
    {
      question: 'The main function of the Golgi apparatus is:',
      options: ['Protein synthesis', 'Lipid synthesis', 'Processing and packaging of proteins', 'Digestion of waste'],
      answer: 'Processing and packaging of proteins',
      explanation: 'The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles.'
    },
    {
      question: 'The fluid mosaic model describes the structure of:',
      options: ['Cell wall', 'Nucleus', 'Plasma membrane', 'Cytoplasm'],
      answer: 'Plasma membrane',
      explanation: 'The fluid mosaic model, proposed by Singer and Nicolson, describes the plasma membrane as a fluid lipid bilayer with embedded proteins.'
    },
    {
        question: 'Which organelle contains its own DNA and ribosomes?',
        options: ['Golgi apparatus', 'Lysosome', 'Mitochondrion', 'Endoplasmic reticulum'],
        answer: 'Mitochondrion',
        explanation: 'Mitochondria (and chloroplasts) are semi-autonomous organelles that contain their own DNA and 70S ribosomes.'
    },
    {
        question: 'Lysosomes are known as "suicidal bags" because they contain:',
        options: ['Photosynthetic pigments', 'Hydrolytic enzymes', 'Genetic material', 'Respiratory enzymes'],
        answer: 'Hydrolytic enzymes',
        explanation: 'Lysosomes contain powerful digestive (hydrolytic) enzymes that can break down cellular components if the lysosome ruptures.'
    },
    {
        question: 'The cell wall of fungi is made of:',
        options: ['Cellulose', 'Peptidoglycan', 'Chitin', 'Hemicellulose'],
        answer: 'Chitin',
        explanation: 'The cell wall of fungi is primarily composed of chitin, while plant cell walls are made of cellulose and bacterial cell walls of peptidoglycan.'
    },
    {
        question: 'Ribosomes are the site of:',
        options: ['ATP synthesis', 'Photosynthesis', 'Lipid synthesis', 'Protein synthesis'],
        answer: 'Protein synthesis',
        explanation: 'Ribosomes are responsible for translating mRNA into polypeptide chains, the process of protein synthesis.'
    },
    {
        question: 'Which of the following is an example of a prokaryote?',
        options: ['Yeast', 'Amoeba', 'Bacterium', 'Fern'],
        answer: 'Bacterium',
        explanation: 'Bacteria are the most common examples of prokaryotic organisms.'
    },
    {
        question: 'The term "Omnis cellula-e cellula" was given by:',
        options: ['Robert Hooke', 'Theodor Schwann', 'Rudolf Virchow', 'M. J. Schleiden'],
        answer: 'Rudolf Virchow',
        explanation: 'Rudolf Virchow modified the cell theory by stating that all cells arise from pre-existing cells.'
    },
    {
        question: 'Which organelle is responsible for the synthesis of lipids and steroids?',
        options: ['Rough Endoplasmic Reticulum', 'Smooth Endoplasmic Reticulum', 'Golgi apparatus', 'Ribosomes'],
        answer: 'Smooth Endoplasmic Reticulum',
        explanation: 'The Smooth ER lacks ribosomes and is the major site for synthesizing lipids and steroid hormones.'
    },
    {
        question: 'The structural elements of the cytoskeleton are made of:',
        options: ['Carbohydrates', 'Lipids', 'Nucleic acids', 'Proteins'],
        answer: 'Proteins',
        explanation: 'The cytoskeleton is composed of protein filaments like microtubules (tubulin) and microfilaments (actin).'
    },
    {
        question: 'What is the size of ribosomes in the cytoplasm of eukaryotic cells?',
        options: ['70S', '80S', '50S', '30S'],
        answer: '80S',
        explanation: 'Eukaryotic cytoplasm contains 80S ribosomes, while their mitochondria and chloroplasts contain 70S ribosomes.'
    },
    {
        question: 'Which plastid is responsible for storing starch, oils, and proteins?',
        options: ['Chloroplast', 'Chromoplast', 'Leucoplast', 'Amyloplast'],
        answer: 'Leucoplast',
        explanation: 'Leucoplasts are colorless plastids that store various nutrients; amyloplasts specifically store starch.'
    },
    {
        question: 'The selective permeability is a property of the:',
        options: ['Cell wall', 'Nuclear envelope', 'Plasma membrane', 'Cytoplasm'],
        answer: 'Plasma membrane',
        explanation: 'The plasma membrane regulates which substances can enter and leave the cell.'
    },
    {
        question: 'In a plant cell, the large central vacuole:',
        options: ['Contains the genetic material', 'Synthesizes proteins', 'Maintains turgor pressure', 'Produces energy'],
        answer: 'Maintains turgor pressure',
        explanation: 'The large central vacuole in a plant cell stores water, nutrients, and waste products, and plays a crucial role in maintaining turgor pressure against the cell wall.'
    },
    {
        question: 'Which of the following cellular structures lacks a membrane?',
        options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Lysosome'],
        answer: 'Ribosome',
        explanation: 'Ribosomes are not membrane-bound organelles; they are complexes of rRNA and proteins.'
    },
    {
        question: 'The infoldings of the inner mitochondrial membrane are called:',
        options: ['Grana', 'Thylakoids', 'Cristae', 'Stroma'],
        answer: 'Cristae',
        explanation: 'The inner membrane of the mitochondria is folded into cristae to increase the surface area for ATP synthesis.'
    },
    {
        question: 'The most abundant chemical in a living organism could be:',
        options: ['Protein', 'Water', 'Carbohydrate', 'Nucleic acid'],
        answer: 'Water',
        explanation: 'Water is the most abundant chemical component of cells and organisms, typically making up 70% or more of the total weight.'
    },
    {
        question: 'Which of the following is not a part of the endomembrane system?',
        options: ['Golgi complex', 'Endoplasmic reticulum', 'Vacuoles', 'Mitochondria'],
        answer: 'Mitochondria',
        explanation: 'The endomembrane system includes the ER, Golgi complex, lysosomes, and vacuoles. Mitochondria are not considered part of this system as their functions are separate.'
    },
    {
        question: 'The "Middle lamella" in plant cells is mainly composed of:',
        options: ['Cellulose', 'Hemicellulose', 'Pectin', 'Lignin'],
        answer: 'Pectin',
        explanation: 'The middle lamella is a layer rich in calcium pectate which glues the neighbouring cells together.'
    },
    {
        question: 'Centrioles are associated with:',
        options: ['Protein synthesis', 'Cell division in animal cells', 'Photosynthesis', 'Lipid storage'],
        answer: 'Cell division in animal cells',
        explanation: 'Centrioles are part of the centrosome and play a key role in forming the spindle fibers during cell division in animal cells.'
    },
    {
        question: 'A chromosome with the centromere slightly away from the middle, resulting in one shorter arm and one longer arm, is called:',
        options: ['Metacentric', 'Sub-metacentric', 'Acrocentric', 'Telocentric'],
        answer: 'Sub-metacentric',
        explanation: 'In a sub-metacentric chromosome, the centromere is located near the center, creating arms of unequal length.'
    },
    {
        question: 'The main arena of various activities of a cell is:',
        options: ['Nucleus', 'Plasma membrane', 'Mitochondrion', 'Cytoplasm'],
        answer: 'Cytoplasm',
        explanation: 'The cytoplasm is the site of many metabolic pathways (like glycolysis) and is where most cellular activities occur.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Mitochondria and chloroplasts are semi-autonomous organelles.',
      reason: 'They have their own DNA and ribosomes.',
      answer: 'A',
      explanation: 'The reason is correct and explains the assertion. The presence of their own genetic material and protein-synthesizing machinery (ribosomes) allows them to function with a degree of independence from the nucleus.'
    },
    {
      assertion: 'A plant cell does not burst in a hypotonic solution.',
      reason: 'The cell wall is fully permeable.',
      answer: 'C',
      explanation: 'The assertion is true, but the reason is false. The cell wall prevents bursting due to its rigidity, not its permeability. Permeability allows water to enter, but rigidity provides the turgor pressure to resist bursting.'
    },
    {
        assertion: 'Lysosomes are called "suicidal bags" of the cell.',
        reason: 'Lysosomes contain powerful hydrolytic enzymes which can digest the entire cell.',
        answer: 'A',
        explanation: 'Both statements are true, and the reason correctly explains the assertion. If a lysosome bursts, its digestive enzymes can destroy the cell.'
    },
    {
        assertion: 'The plasma membrane is selectively permeable.',
        reason: 'The plasma membrane is made up of a lipid bilayer and proteins.',
        answer: 'B',
        explanation: 'Both statements are true, but the reason (composition) doesn\'t fully explain the assertion (function). The specific arrangement and nature of the lipids and proteins are what confer selective permeability, not just their presence.'
    },
    {
        assertion: 'Prokaryotic cells lack a true nucleus.',
        reason: 'The genetic material in prokaryotes is not enclosed by a nuclear membrane.',
        answer: 'A',
        explanation: 'The reason is the definition of why a prokaryotic nucleus is not considered "true," thus correctly explaining the assertion.'
    },
    {
        assertion: 'Ribosomes are involved in protein synthesis.',
        reason: 'Ribosomes are found only in eukaryotic cells.',
        answer: 'C',
        explanation: 'The assertion is true, but the reason is false. Ribosomes are found in both prokaryotic and eukaryotic cells.'
    },
    {
        assertion: 'Rough Endoplasmic Reticulum (RER) is frequently observed in cells actively involved in protein synthesis and secretion.',
        reason: 'RER has ribosomes attached to its surface.',
        answer: 'A',
        explanation: 'The presence of ribosomes (the site of protein synthesis) on its surface is the reason why RER is associated with protein synthesis.'
    },
    {
        assertion: 'The cell is the fundamental unit of life.',
        reason: 'Anything less than a complete structure of a cell does not ensure independent living.',
        answer: 'A',
        explanation: 'The reason correctly explains why the cell is considered the basic unit capable of independent existence.'
    },
    {
        assertion: 'Leucoplasts are colorless plastids.',
        reason: 'They store nutrients like carbohydrates, lipids, and proteins.',
        answer: 'B',
        explanation: 'Both statements are true. Leucoplasts are colorless and they do store nutrients. However, their lack of color is due to the absence of pigments, not because they store nutrients. The reason does not explain the assertion.'
    },
    {
        assertion: 'The inner membrane of mitochondria is highly convoluted.',
        reason: 'The convolutions, called cristae, decrease the surface area for ATP synthesis.',
        answer: 'C',
        explanation: 'The assertion is true, but the reason is false. The cristae *increase* the surface area available for the electron transport chain and ATP synthesis.'
    },
    {
        assertion: 'In a eukaryotic cell, the cytoplasm is the main arena of cellular activities.',
        reason: 'Both the living and non-living constituents are present in the cytoplasm.',
        answer: 'B',
        explanation: 'Both are true, but the presence of living/non-living parts doesn\'t fully explain why it\'s the main arena. Its role in housing organelles and metabolic pathways is the more direct explanation.'
    },
    {
        assertion: 'The middle lamella is a layer mainly of calcium pectate.',
        reason: 'It holds or glues the different neighbouring cells together.',
        answer: 'B',
        explanation: 'Both statements are true and related, but one is a description of composition and the other of function. They describe the middle lamella but don\'t have a strict cause-and-effect relationship.'
    },
    {
        assertion: 'Eukaryotic ribosomes are of 80S type.',
        reason: 'They are composed of 60S and 40S subunits.',
        answer: 'A',
        explanation: 'The reason is the correct description of the composition of an 80S ribosome. The Svedberg units are not additive.'
    },
    {
        assertion: 'Centrioles are essential for cell division in all organisms.',
        reason: 'Centrioles form the basal body of cilia and flagella.',
        answer: 'D',
        explanation: 'The assertion is false; centrioles are absent in higher plants, which still undergo cell division. The reason is a true statement about another function of centrioles, but it doesn\'t support the incorrect assertion.'
    },
    {
        assertion: 'The cell wall protects the cell from mechanical damage and infection.',
        reason: 'The cell wall is a rigid, non-living structure.',
        answer: 'A',
        explanation: 'The rigid and non-living nature of the cell wall is precisely what gives it its protective and structural properties.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Golgi apparatus', 'b) Lysosomes', 'c) Mitochondria', 'd) Ribosomes'],
      column2: ['i) Protein synthesis', 'ii) Suicidal bags', 'iii) Powerhouse', 'iv) Packaging and secretion'],
      answer: 'a-iv, b-ii, c-iii, d-i'
    },
    {
      column1: ['a) Chloroplast', 'b) Cell wall (Plant)', 'c) Cell wall (Fungus)', 'd) Smooth ER'],
      column2: ['i) Chitin', 'ii) Lipid synthesis', 'iii) Photosynthesis', 'iv) Cellulose'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
        column1: ['a) Robert Hooke', 'b) Leeuwenhoek', 'c) Schleiden', 'd) Schwann'],
        column2: ['i) Described a live cell', 'ii) German botanist', 'iii) British zoologist', 'iv) Coined the term "cell"'],
        answer: 'a-iv, b-i, c-ii, d-iii'
    },
    {
        column1: ['a) 70S Ribosome', 'b) 80S Ribosome', 'c) Nucleolus', 'd) Cristae'],
        column2: ['i) Site of rRNA synthesis', 'ii) Eukaryotic cytoplasm', 'iii) Infoldings of inner mitochondrial membrane', 'iv) Prokaryotes'],
        answer: 'a-iv, b-ii, c-i, d-iii'
    },
    {
        column1: ['a) Amyloplast', 'b) Elaioplast', 'c) Aleuroplast', 'd) Chromoplast'],
        column2: ['i) Stores proteins', 'ii) Contains colored pigments', 'iii) Stores starch', 'iv) Stores oils and fats'],
        answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
        column1: ['a) Metacentric', 'b) Sub-metacentric', 'c) Acrocentric', 'd) Telocentric'],
        column2: ['i) Centromere at the terminal end', 'ii) Centromere in the middle', 'iii) Centromere slightly away from middle', 'iv) Centromere close to one end'],
        answer: 'a-ii, b-iii, c-iv, d-i'
    },
    {
        column1: ['a) Cell Sap', 'b) Cytosol', 'c) Protoplasm', 'd) Cytoplasm'],
        column2: ['i) Cytoplasm minus organelles', 'ii) Fluid in vacuole', 'iii) Living content of cell', 'iv) Protoplasm minus nucleus'],
        answer: 'a-ii, b-i, c-iii, d-iv'
    },
    {
        column1: ['a) Thylakoids', 'b) Cisternae', 'c) Axoneme', 'd) Nucleoid'],
        column2: ['i) Core of cilia/flagella', 'ii) Disc-shaped sacs in Golgi', 'iii) Flattened sacs in chloroplast stroma', 'iv) Genetic material of prokaryote'],
        answer: 'a-iii, b-ii, c-i, d-iv'
    },
    {
        column1: ['a) Plasmodesmata', 'b) Middle lamella', 'c) Secondary wall', 'd) Primary wall'],
        column2: ['i) Found on inner side of cell', 'ii) Capable of growth', 'iii) Connects cytoplasm of neighboring cells', 'iv) Glues cells together'],
        answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
        column1: ['a) Microtubules', 'b) Microfilaments', 'c) Intermediate filaments', 'd) Flagella'],
        column2: ['i) Composed of actin', 'ii) Proteinaceous hollow cylinders', 'iii) Motility', 'iv) Maintains cell shape'],
        answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
        column1: ['a) Peroxisome', 'b) Glyoxysome', 'c) Sphaerosome', 'd) Vacuole'],
        column2: ['i) Contains enzymes for glyoxylate cycle', 'ii) Synthesis and storage of lipids', 'iii) Contains catalase enzyme', 'iv) Tonoplast'],
        answer: 'a-iii, b-i, c-ii, d-iv'
    },
    {
        column1: ['a) ER', 'b) Golgi', 'c) Lysosome', 'd) Vacuole'],
        column2: ['i) Intracellular scavenging', 'ii) Storage', 'iii) Glycosylation', 'iv) Synthesis of proteins/lipids'],
        answer: 'a-iv, b-iii, c-i, d-ii'
    },
    {
        column1: ['a) No membrane', 'b) Single membrane', 'c) Double membrane', 'd) Fluid mosaic'],
        column2: ['i) Lysosome', 'ii) Mitochondrion', 'iii) Plasma membrane', 'iv) Ribosome'],
        answer: 'a-iv, b-i, c-ii, d-iii'
    },
    {
        column1: ['a) DNA', 'b) RNA', 'c) Histone', 'd) Chromatin'],
        column2: ['i) Ribozyme', 'ii) Positively charged protein', 'iii) DNA + Histone', 'iv) Genetic material'],
        answer: 'a-iv, b-i, c-ii, d-iii'
    },
    {
        column1: ['a) Cell shape', 'b) Cell movement', 'c) Cell division', 'd) Cell signaling'],
        column2: ['i) Spindle formation', 'ii) Receptor proteins', 'iii) Cytoskeleton', 'iv) Cilia/Flagella'],
        answer: 'a-iii, b-iv, c-i, d-ii'
    }
  ]
};
