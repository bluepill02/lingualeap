
import type { NeetModule } from '@/lib/types';

export const biomolecules: NeetModule = {
  id: 'chemistry-biomolecules',
  title: 'Biomolecules',
  chapter: 'Biomolecules',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Introduction and Importance
*   Biomolecules are complex organic molecules that build up living organisms and are required for their growth, maintenance, and metabolic processes.

### 2. Carbohydrates (கார்போஹைட்ரேட்டுகள்)
*   **Classification:** Based on their behaviour on hydrolysis.
    *   **Monosaccharides:** Simple sugars that cannot be hydrolyzed further (e.g., glucose, fructose). Classified as aldoses or ketoses.
    *   **Oligosaccharides:** Yield 2 to 10 monosaccharide units on hydrolysis. Disaccharides are most common (e.g., sucrose, lactose, maltose).
    *   **Polysaccharides:** Polymers of monosaccharides (e.g., starch, cellulose, glycogen). They are not sweet.
*   **Monosaccharides (Glucose and Fructose):** Structure and basic properties.
*   **Constituent monosaccharides of oligosaccharides:**
    *   Sucrose → α-D-Glucose + β-D-Fructose
    *   Lactose → β-D-Galactose + β-D-Glucose
    *   Maltose → α-D-Glucose + α-D-Glucose

### 3. Proteins (புரதங்கள்)
*   Polymers of α-amino acids.
*   **Elementary Idea of α-amino acids:** Have an amino group (-NH₂) and a carboxyl group (-COOH) attached to the same α-carbon.
*   **Peptide Bond (பெப்டைடு பிணைப்பு):** The amide bond (-CO-NH-) linking two α-amino acids. A polypeptide is a chain of amino acids linked by peptide bonds.
*   **Proteins:** Polypeptides with more than 100 amino acid residues and a molecular mass higher than 10,000u.
*   **Structure of Proteins (Qualitative idea only):**
    *   **Primary:** The specific sequence of amino acids.
    *   **Secondary:** Local folding of the polypeptide chain (α-helix and β-pleated sheet).
    *   **Tertiary:** Overall 3D folding of the polypeptide chain.
    *   **Quaternary:** Arrangement of multiple polypeptide subunits.
*   **Denaturation of Proteins (புரதங்களின் இயல்பு திரிதல்):** Loss of biological activity of a protein due to disruption of its secondary, tertiary, and quaternary structures.

### 4. Enzymes (நொதிகள்)
*   Biological catalysts, typically globular proteins. Highly specific in their action.

### 5. Vitamins (வைட்டமின்கள்)
*   **Classification and functions:** Organic compounds required in the diet in small amounts.
    *   **Fat-soluble:** Vitamins A, D, E, K.
    *   **Water-soluble:** Vitamins B complex, C.

### 6. Nucleic Acids (நியூக்ளிக் அமிலங்கள்)
*   **Chemical constitution of DNA and RNA:** They are polynucleotides. A nucleotide has three components: a pentose sugar, a nitrogenous base, and a phosphate group.
    *   **DNA:** Sugar is Deoxyribose. Bases are A, G, C, T.
    *   **RNA:** Sugar is Ribose. Bases are A, G, C, U.
*   **Biological functions of nucleic acids:** DNA is the chemical basis of heredity (stores genetic information). RNA is involved in protein synthesis.

### 7. Hormones (ஹார்மோன்கள்)
*   **General introduction:** Molecules that act as intercellular messengers. They are produced by endocrine glands. (e.g., Insulin, Testosterone).
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
    }
  ]
};
