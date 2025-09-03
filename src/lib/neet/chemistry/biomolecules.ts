
import type { NeetModule } from '@/lib/types';

export const biomolecules: NeetModule = {
  id: 'chemistry-biomolecules',
  title: 'Biomolecules',
  chapter: 'Biomolecules',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Biomolecules (வேதியியல் - உயிர்வேதி மூலக்கூறுகள்)

# 2. Learning Objectives
1.  After this, you will be able to classify carbohydrates into monosaccharides, oligosaccharides, and polysaccharides.
2.  After this, you will be able to describe the four levels of protein structure.
3.  After this, you will be able to classify vitamins based on their solubility.
4.  After this, you will be able to explain the structural differences between DNA and RNA.

# 3. Prerequisites
– Basic knowledge of organic functional groups (alcohols, aldehydes, ketones, carboxylic acids, amines).
– Understanding of polymers and monomers.

# 4. Concept Overview
The food we eat, like a simple grain of rice (அரிசி) from a paddy field in the Kaveri delta, is full of complex molecules that give us life and energy. This chapter on **Biomolecules** explores the chemistry of these essential molecules of life. We'll look at **Carbohydrates** (sugars for energy), **Proteins** (the building blocks of our body), **Vitamins** (essential helpers), and **Nucleic Acids** (the 'blueprint' of life, DNA & RNA). Understanding these molecules is the bridge between chemistry and biology.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Chemistry Volume 2, Chapter 14**. NEET questions often focus on the classification of carbohydrates, the structures of proteins, and the differences between DNA and RNA.

### 5.1 Carbohydrates (கார்போஹைட்ரேட்டுகள்)
*   **Classification:** Monosaccharides (glucose, fructose), Disaccharides (sucrose, lactose), Polysaccharides (starch, cellulose).
*   **Monosaccharides:** Structure of glucose and fructose.
*   **Reducing and Non-reducing Sugars:** Sugars that can reduce Tollen's or Fehling's reagent. Sucrose is a non-reducing sugar.

### 5.2 Proteins (புரதங்கள்)
*   Polymers of α-amino acids, linked by **peptide bonds (பெப்டைடு பிணைப்பு)**.
*   **Structure of Proteins:**
    *   **Primary:** Sequence of amino acids.
    *   **Secondary:** α-helix and β-pleated sheet structures.
    *   **Tertiary:** Overall 3D folding of the polypeptide chain.
    *   **Quaternary:** Arrangement of multiple polypeptide subunits.
*   **Denaturation (இயல்பு திரிதல்):** Loss of biological activity due to disruption of 2°, 3°, and 4° structures.

### 5.3 Enzymes and Vitamins
*   **Enzymes (நொதிகள்):** Biological catalysts (mostly proteins).
*   **Vitamins (வைட்டமின்கள்):** Essential micronutrients.
    *   **Fat-soluble:** A, D, E, K.
    *   **Water-soluble:** B complex, C.

### 5.4 Nucleic Acids (நியூக்ளிக் அமிலங்கள்)
*   Polymers of nucleotides. A nucleotide consists of a sugar, a phosphate group, and a nitrogenous base.
*   **DNA (Deoxyribonucleic Acid):** Contains deoxyribose sugar and bases A, G, C, T. It is the carrier of genetic information. It has a double helix structure.
*   **RNA (Ribonucleic Acid):** Contains ribose sugar and bases A, G, C, U. It is involved in protein synthesis.

### 5.5 Hormones
*   Molecules that act as intercellular messengers (e.g., Insulin).

# 6. Worked Examples

**1. Easy:** What are the hydrolysis products of Sucrose?
*   **Solution:** Sucrose is a disaccharide. On hydrolysis, it gives one molecule of **α-D-Glucose** and one molecule of **β-D-Fructose**.

**2. Medium:** Explain what is meant by a zwitterion with respect to an amino acid.
*   **Solution:** An amino acid has both a basic amino group (-NH₂) and an acidic carboxyl group (-COOH). In aqueous solution, the carboxyl group loses a proton and the amino group accepts it. This forms a dipolar ion called a **zwitterion**, which has both a positive charge (-NH₃⁺) and a negative charge (-COO⁻) but is electrically neutral overall.

**3. Must-Practice:** How are DNA and RNA different in their nitrogenous bases and sugar components?
*   **Solution:**
    1.  **Sugar:** DNA contains 2-deoxy-D-ribose sugar. RNA contains D-ribose sugar.
    2.  **Bases:** Both contain Adenine (A), Guanine (G), and Cytosine (C). However, DNA's fourth base is **Thymine (T)**, while RNA's fourth base is **Uracil (U)**.

# 7. Key Formulas & Diagrams

| Biomolecule | Monomer | Linkage |
| :--- | :--- | :--- |
| Polysaccharide | Monosaccharide | Glycosidic bond |
| Protein | Amino Acid | Peptide bond |
| Nucleic Acid | Nucleotide | Phosphodiester bond |
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

