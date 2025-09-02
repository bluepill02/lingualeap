
import type { NeetModule } from '@/lib/types';

export const biomolecules: NeetModule = {
  id: 'chemistry-biomolecules',
  title: 'Biomolecules',
  chapter: 'Biomolecules',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Carbohydrates (கார்போஹைட்ரேட்டுகள்)
*   Polyhydroxy aldehydes or ketones. Also called saccharides.
*   **Monosaccharides:** Simple sugars that cannot be hydrolyzed further (e.g., glucose, fructose).
*   **Disaccharides:** Yield two monosaccharide units on hydrolysis (e.g., sucrose → glucose + fructose). The bond linking them is called a **glycosidic linkage**.
*   **Polysaccharides:** Polymers of monosaccharides (e.g., starch, cellulose, glycogen). They are not sweet.

### 2. Proteins (புரதங்கள்)
*   Polymers of α-amino acids.
*   **Amino Acids:** Have both an amino group (-NH₂) and a carboxyl group (-COOH). They exist as **Zwitterions** (a dipolar ion).
*   **Peptide Bond (பெப்டைடு பிணைப்பு):** The amide bond (-CO-NH-) linking two amino acids.
*   **Structure of Proteins:** Primary (sequence of amino acids), Secondary (α-helix, β-pleated sheet), Tertiary (overall 3D folding), and Quaternary structures.
*   **Denaturation of Proteins (புரதங்களின் இயல்பு திரிதல்):** Loss of biological activity of a protein due to disruption of secondary and tertiary structures by heat or pH change. (வேகவைத்த முட்டை மீண்டும் பழைய நிலைக்குத் திரும்பாதது போல).

### 3. Enzymes (நொதிகள்)
*   Biological catalysts. Almost all enzymes are globular proteins. They are highly specific in their action.

### 4. Vitamins (வைட்டமின்கள்)
*   Organic compounds required in small amounts to perform specific biological functions.
*   **Fat-soluble:** Vitamins A, D, E, K.
*   **Water-soluble:** Vitamins B complex, C.
*   Deficiency of vitamins causes specific diseases.

### 5. Nucleic Acids (நியூக்ளிக் அமிலங்கள்)
*   Polymers of nucleotides. Also known as polynucleotides. They are the basis of heredity.
*   **DNA (Deoxyribonucleic Acid):** Contains deoxyribose sugar, a phosphate group, and nitrogenous bases (Adenine, Guanine, Cytosine, Thymine). It has a double helix structure.
*   **RNA (Ribonucleic Acid):** Contains ribose sugar, a phosphate group, and nitrogenous bases (A, G, C, Uracil). It is usually single-stranded.
`,
  workedExamples: [
    {
        problem: "What is the basic structural difference between starch and cellulose?",
        solution: "Both starch and cellulose are polymers of glucose. The key difference lies in the glycosidic linkages between the glucose units. Starch consists of α-D-glucose units linked by α-1,4-glycosidic bonds. Cellulose consists of β-D-glucose units linked by β-1,4-glycosidic bonds. Humans can digest starch (α-linkages) but not cellulose (β-linkages) because we lack the necessary enzymes to break the β-linkages."
    },
    {
        problem: "Explain what is meant by a zwitterion with respect to an amino acid.",
        solution: "An amino acid has both a basic amino group (-NH₂) and an acidic carboxyl group (-COOH). In aqueous solution, the carboxyl group can lose a proton, and the amino group can accept a proton, forming a dipolar ion called a zwitterion. In the zwitterionic form, the amino group is protonated (-NH₃⁺) and the carboxyl group is deprotonated (-COO⁻). The overall charge of the molecule is zero."
    },
    {
        problem: "How are DNA and RNA different in terms of their nitrogenous bases and sugar components?",
        solution: "1. **Sugar:** DNA contains 2-deoxy-D-ribose sugar, while RNA contains D-ribose sugar. The difference is the absence of an -OH group at the 2' position in deoxyribose.\n2. **Nitrogenous Bases:** Both contain Adenine (A), Guanine (G), and Cytosine (C). However, DNA contains Thymine (T), while RNA contains Uracil (U) in its place."
    }
  ],
  mcqs: [
    {
        "question": "Which of the following is a non-reducing sugar?",
        "options": ["Glucose", "Fructose", "Sucrose", "Lactose"],
        "answer": "Sucrose",
        "explanation": "In sucrose, the anomeric carbons of both glucose and fructose are involved in the glycosidic bond, so there is no free hemiacetal group to be oxidized. Hence, it is a non-reducing sugar."
    },
    {
        "question": "The primary structure of a protein refers to:",
        "options": ["The sequence of amino acids", "The folding of the polypeptide chain", "The arrangement of multiple subunits", "The presence of α-helices and β-sheets"],
        "answer": "The sequence of amino acids",
        "explanation": "The primary structure is the unique linear sequence of amino acids in a polypeptide chain."
    },
    {
        "question": "Denaturation of a protein does not affect its:",
        "options": ["Secondary structure", "Tertiary structure", "Biological activity", "Primary structure"],
        "answer": "Primary structure",
        "explanation": "Denaturation disrupts the secondary and tertiary structures, but the primary sequence of amino acids held by peptide bonds remains intact."
    },
    {
        "question": "Which vitamin deficiency causes scurvy?",
        "options": ["Vitamin A", "Vitamin B₁₂", "Vitamin C", "Vitamin D"],
        "answer": "Vitamin C",
        "explanation": "Deficiency of Vitamin C (ascorbic acid) leads to scurvy, characterized by bleeding gums and poor wound healing."
    },
    {
        "question": "The base that is present in RNA but not in DNA is:",
        "options": ["Adenine", "Guanine", "Thymine", "Uracil"],
        "answer": "Uracil",
        "explanation": "RNA contains Uracil (U) in place of Thymine (T), which is found in DNA."
    },
    {
        "question": "The linkage that holds monosaccharide units together in a polysaccharide is called:",
        "options": ["Peptide bond", "Glycosidic bond", "Hydrogen bond", "Ester bond"],
        "answer": "Glycosidic bond",
        "explanation": "A glycosidic bond is a type of covalent bond that joins a carbohydrate (sugar) molecule to another group."
    },
    {
        "question": "Which of the following is a fat-soluble vitamin?",
        "options": ["Vitamin B₁", "Vitamin C", "Vitamin B₆", "Vitamin K"],
        "answer": "Vitamin K",
        "explanation": "Vitamins A, D, E, and K are fat-soluble, while vitamins of the B complex and C are water-soluble."
    },
    {
        "question": "The two strands of DNA are held together by:",
        "options": ["Covalent bonds", "Ionic bonds", "Hydrogen bonds", "van der Waals forces"],
        "answer": "Hydrogen bonds",
        "explanation": "Hydrogen bonds form between the complementary base pairs (A with T, and G with C), holding the two strands of the DNA double helix together."
    },
    {
        "question": "Which of the following is an example of a ketose sugar?",
        "options": ["Glucose", "Galactose", "Fructose", "Mannose"],
        "answer": "Fructose",
        "explanation": "Fructose is a ketohexose, meaning it is a six-carbon sugar with a ketone functional group. Glucose, galactose, and mannose are aldoses."
    },
    {
        "question": "Enzymes act as biological catalysts by:",
        "options": ["Increasing the activation energy", "Decreasing the activation energy", "Increasing the temperature", "Changing the equilibrium constant"],
        "answer": "Decreasing the activation energy",
        "explanation": "Enzymes provide an alternative reaction pathway with a lower activation energy, thereby increasing the rate of the reaction."
    },
    {
        "question": "The α-helix and β-pleated sheet are examples of which level of protein structure?",
        "options": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "answer": "Secondary",
        "explanation": "The secondary structure refers to the regular, repeating local structures, such as the α-helix and β-pleated sheet, stabilized by hydrogen bonds."
    },
    {
        "question": "Which of the following is also known as invert sugar?",
        "options": ["Glucose", "Fructose", "Sucrose", "A mixture of glucose and fructose"],
        "answer": "A mixture of glucose and fructose",
        "explanation": "The hydrolysis of sucrose produces an equimolar mixture of D-(+)-glucose and D-(-)-fructose. This mixture is called invert sugar because the sign of optical rotation changes from dextro (sucrose) to laevo (the mixture)."
    },
    {
        "question": "Which of the following is an essential amino acid?",
        "options": ["Alanine", "Glycine", "Lysine", "Serine"],
        "answer": "Lysine",
        "explanation": "Essential amino acids cannot be synthesized by the human body and must be obtained through diet. Lysine is an essential amino acid."
    },
    {
        "question": "The sugar component of a nucleotide in DNA is:",
        "options": ["Ribose", "Deoxyribose", "Arabinose", "Xylose"],
        "answer": "Deoxyribose",
        "explanation": "The sugar in DNA is 2-deoxy-D-ribose."
    },
    {
        "question": "Cellulose is a polymer of:",
        "options": ["α-D-glucose", "β-D-glucose", "α-D-fructose", "β-D-fructose"],
        "answer": "β-D-glucose",
        "explanation": "Cellulose is a straight-chain polysaccharide composed of β-D-glucose units joined by β-1,4-glycosidic linkages."
    },
    {
        "question": "The disease 'rickets' is caused by the deficiency of:",
        "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "answer": "Vitamin D",
        "explanation": "Deficiency of Vitamin D affects calcium absorption, leading to bone deformities like rickets in children."
    },
    {
        "question": "In a DNA molecule, adenine pairs with:",
        "options": ["Guanine", "Cytosine", "Thymine", "Uracil"],
        "answer": "Thymine",
        "explanation": "According to the principle of complementary base pairing in DNA, adenine (A) always pairs with thymine (T) through two hydrogen bonds."
    },
    {
        "question": "The zwitterionic form of an amino acid exists at its:",
        "options": ["Boiling point", "Melting point", "Isoelectric point", "Freezing point"],
        "answer": "Isoelectric point",
        "explanation": "The isoelectric point (pI) is the pH at which the net charge on the amino acid is zero, and it exists predominantly as a zwitterion."
    },
    {
        "question": "Glycogen is a storage polysaccharide found in:",
        "options": ["Plants", "Animals", "Fungi", "Bacteria"],
        "answer": "Animals",
        "explanation": "Glycogen is the main form of glucose storage in animals and fungi, primarily stored in the liver and muscle cells."
    },
    {
        "question": "The helical structure of proteins is stabilized by:",
        "options": ["Peptide bonds", "Hydrogen bonds", "Disulfide bridges", "Ionic bonds"],
        "answer": "Hydrogen bonds",
        "explanation": "The α-helix secondary structure is stabilized by intramolecular hydrogen bonds between the C=O group of one amino acid and the N-H group of the fourth amino acid in the chain."
    },
    {
        "question": "Which of the following is a monosaccharide?",
        "options": ["Starch", "Sucrose", "Glucose", "Cellulose"],
        "answer": "Glucose",
        "explanation": "Glucose is a simple sugar (monosaccharide), while sucrose is a disaccharide, and starch and cellulose are polysaccharides."
    },
    {
        "question": "A nucleotide consists of:",
        "options": ["A base and a sugar", "A base and a phosphate", "A sugar and a phosphate", "A base, a sugar, and a phosphate"],
        "answer": "A base, a sugar, and a phosphate",
        "explanation": "A nucleotide is composed of three components: a nitrogenous base, a five-carbon sugar (ribose or deoxyribose), and at least one phosphate group."
    },
    {
        "question": "The process of protein synthesis occurs in:",
        "options": ["Nucleus", "Mitochondria", "Ribosomes", "Lysosomes"],
        "answer": "Ribosomes",
        "explanation": "Ribosomes are the cellular machinery responsible for translating mRNA into proteins."
    },
    {
        "question": "Which of the following statements about enzymes is incorrect?",
        "options": ["They are highly specific", "They are mostly proteins", "They change the equilibrium of a reaction", "They lower the activation energy"],
        "answer": "They change the equilibrium of a reaction",
        "explanation": "Enzymes do not alter the equilibrium position (Keq) of a reaction; they only increase the rate at which equilibrium is achieved."
    },
    {
        "question": "The two monosaccharide units in lactose are:",
        "options": ["Glucose and glucose", "Glucose and fructose", "Glucose and galactose", "Fructose and galactose"],
        "answer": "Glucose and galactose",
        "explanation": "Lactose, or milk sugar, is a disaccharide composed of β-D-galactose and β-D-glucose."
    }
],
  assertionReasons: [
    {
        "assertion": "Sucrose is a non-reducing sugar.",
        "reason": "In sucrose, the anomeric carbons of both glucose and fructose are involved in the glycosidic linkage.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The absence of a free hemiacetal group makes sucrose unable to be oxidized by Tollen's or Fehling's reagent."
    },
    {
        "assertion": "All amino acids are optically active.",
        "reason": "All amino acids contain an asymmetric carbon atom.",
        "answer": "D",
        "explanation": "The assertion is false. Glycine (H₂N-CH₂-COOH) does not have an asymmetric carbon atom (its α-carbon is attached to two hydrogen atoms) and is therefore optically inactive. The reason is also false for the same reason."
    },
    {
        "assertion": "The two strands of DNA are complementary to each other.",
        "reason": "The hydrogen bonds are formed between specific pairs of bases.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The specific pairing of A with T and G with C ensures that the sequence of one strand dictates the sequence of the other, making them complementary."
    },
    {
        "assertion": "Denaturation of a protein leads to the loss of its biological activity.",
        "reason": "Denaturation involves the disruption of the primary structure of the protein.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; denaturation disrupts the secondary and tertiary structures, but the primary structure (peptide bonds) remains intact."
    },
    {
        "assertion": "Starch and cellulose are both polymers of glucose.",
        "reason": "Starch and cellulose have different glycosidic linkages.",
        "answer": "B",
        "explanation": "Both statements are true. However, the difference in linkages (reason) is the cause for their different properties, not an explanation of why they are both polymers of glucose."
    },
    {
        "assertion": "Enzymes are highly specific in their action.",
        "reason": "The specificity of an enzyme is due to the unique three-dimensional shape of its active site.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The specific shape of the active site allows only a specific substrate to bind, following a lock-and-key or induced-fit model."
    },
    {
        "assertion": "Vitamins are required in large quantities by the body.",
        "reason": "Vitamins act as catalysts for biological reactions.",
        "answer": "D",
        "explanation": "The assertion is false; vitamins are micronutrients required in small quantities. The reason is also false; enzymes are biological catalysts, while many vitamins function as coenzymes."
    },
    {
        "assertion": "Amino acids exist as zwitterions.",
        "reason": "Amino acids have both an acidic carboxyl group and a basic amino group.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The presence of both acidic and basic groups in the same molecule allows for internal acid-base reaction to form a dipolar zwitterion."
    },
    {
        "assertion": "Glucose is a reducing sugar.",
        "reason": "Glucose has a free aldehyde group in its open-chain form.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The free aldehyde group can be oxidized, allowing glucose to act as a reducing agent in tests like Tollen's and Fehling's."
    },
    {
        "assertion": "The melting points of amino acids are higher than those of corresponding haloacids.",
        "reason": "Amino acids exist as ionic zwitterions, leading to strong intermolecular electrostatic forces.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The strong ionic interactions in the crystal lattice of amino acids require more energy to break than the intermolecular forces in haloacids."
    },
    {
        "assertion": "In DNA, the two chains are anti-parallel.",
        "reason": "This means one chain has a 5'→3' polarity and the other has a 3'→5' polarity.",
        "answer": "A",
        "explanation": "The reason provides the correct definition and explanation of the anti-parallel nature of the DNA strands."
    },
    {
        "assertion": "Hydrolysis of sucrose is called inversion.",
        "reason": "Sucrose is dextrorotatory, but after hydrolysis, the mixture of glucose and fructose is laevorotatory.",
        "answer": "A",
        "explanation": "The reason correctly explains why the process is called inversion - the sign of optical rotation inverts from (+) to (-)."
    },
    {
        "assertion": "All proteins are enzymes.",
        "reason": "All enzymes are proteins.",
        "answer": "D",
        "explanation": "The assertion is false (e.g., structural proteins like collagen are not enzymes). The reason is also largely false; while most enzymes are proteins, some RNA molecules (ribozymes) also act as enzymes."
    },
    {
        "assertion": "The deficiency of Vitamin B₁ causes Beri-Beri.",
        "reason": "Vitamin B₁ is also known as thiamine.",
        "answer": "B",
        "explanation": "Both statements are true. However, the fact that its chemical name is thiamine does not explain why its deficiency causes Beri-Beri. They are two separate correct facts."
    },
    {
        "assertion": "DNA is more stable than RNA.",
        "reason": "The presence of the 2'-OH group in RNA makes it more susceptible to hydrolysis.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The 2'-OH group in ribose can act as a nucleophile, facilitating the cleavage of the phosphodiester backbone, making RNA less stable than DNA which lacks this group."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Glucose", "b) Sucrose", "c) Starch", "d) Fructose"],
        "column2": ["i) Polysaccharide", "ii) Monosaccharide (ketose)", "iii) Disaccharide", "iv) Monosaccharide (aldose)"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Proteins", "b) Carbohydrates", "c) Nucleic Acids", "d) Lipids"],
        "column2": ["i) Phosphodiester bond", "ii) Ester bond", "iii) Glycosidic bond", "iv) Peptide bond"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Vitamin A", "b) Vitamin C", "c) Vitamin D", "d) Vitamin B₁₂"],
        "column2": ["i) Scurvy", "ii) Rickets", "iii) Night blindness", "iv) Pernicious anemia"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Primary structure", "b) Secondary structure", "c) Tertiary structure", "d) Quaternary structure"],
        "column2": ["i) α-helix", "ii) Assembly of subunits", "iii) 3D folding", "iv) Amino acid sequence"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) DNA", "b) RNA", "c) ATP", "d) Amino acid"],
        "column2": ["i) Energy currency", "ii) Zwitterion", "iii) Contains Uracil", "iv) Contains Thymine"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Enzyme", "b) Hormone", "c) Antibody", "d) Structural protein"],
        "column2": ["i) Fights foreign particles", "ii) Collagen", "iii) Biological catalyst", "iv) Insulin"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Reducing sugar", "b) Non-reducing sugar", "c) Aldose", "d) Ketose"],
        "column2": ["i) Sucrose", "ii) Fructose", "iii) Glucose", "iv) Lactose"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) Cellulose", "b) Glycogen", "c) Starch", "d) Chitin"],
        "column2": ["i) Animal storage polysaccharide", "ii) Plant structural polysaccharide", "iii) Fungal structural polysaccharide", "iv) Plant storage polysaccharide"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Adenine (A)", "b) Guanine (G)", "c) Cytosine (C)", "d) Thymine (T)"],
        "column2": ["i) Pyrimidine", "ii) Purine", "iii) Pyrimidine", "iv) Purine"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Denaturation", "b) Hydrolysis", "c) Zwitterion", "d) Peptide bond"],
        "column2": ["i) Breaking of bonds by water", "ii) -CO-NH- linkage", "iii) Loss of protein structure", "iv) Dipolar ion"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Night blindness", "b) Beri-beri", "c) Scurvy", "d) Rickets"],
        "column2": ["i) Vitamin D", "ii) Vitamin C", "iii) Vitamin B₁", "iv) Vitamin A"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Maltose", "b) Lactose", "c) Sucrose", "d) Amylose"],
        "column2": ["i) Glucose + Fructose", "ii) Polymer of α-glucose", "iii) Glucose + Galactose", "iv) Glucose + Glucose"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Fibrous protein", "b) Globular protein", "c) Nucleoside", "d) Nucleotide"],
        "column2": ["i) Sugar + Base + Phosphate", "ii) Insulin", "iii) Sugar + Base", "iv) Keratin"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) A-T", "b) G-C", "c) DNA sugar", "d) RNA sugar"],
        "column2": ["i) Three hydrogen bonds", "ii) Two hydrogen bonds", "iii) Ribose", "iv) Deoxyribose"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Essential amino acid", "b) Non-essential amino acid", "c) Water-soluble vitamin", "d) Fat-soluble vitamin"],
        "column2": ["i) Glycine", "ii) Valine", "iii) Vitamin E", "iv) Vitamin C"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    }
  ]
};

  