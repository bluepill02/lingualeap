
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
