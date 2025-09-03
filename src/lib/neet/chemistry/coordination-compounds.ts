
import type { NeetModule } from '@/lib/types';

export const coordinationCompounds: NeetModule = {
  id: 'chemistry-coordination-compounds',
  title: 'Coordination Compounds',
  chapter: 'Coordination Compounds',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Introduction to Coordination Compounds
*   **Werner's Theory:** Postulated primary (ionisable) and secondary (non-ionisable) valencies. Secondary valencies are directed in space and determine the geometry.
*   **Basic Terminology:**
    *   **Coordination Entity:** A central metal atom or ion bonded to a fixed number of ions or molecules (ligands). e.g., [Co(NH₃)₆]³⁺.
    *   **Central Atom/Ion:** The metal atom/ion to which ligands are attached.
    *   **Ligands:** Ions or molecules that donate a pair of electrons to the central metal atom. Can be **unidentate, bidentate, polydentate**. **Chelation** is the formation of a ring structure by a bidentate or polydentate ligand.
    *   **Coordination Number:** The number of ligand donor atoms to which the metal is directly bonded.
    *   **Coordination Sphere:** The central atom and the ligands attached to it, enclosed in square brackets.

### 2. IUPAC Nomenclature of Mononuclear Coordination Compounds
*   Cation is named first, then the anion.
*   Ligands are named alphabetically. Anionic ligands end in '-o'.
*   Metal's oxidation state is in Roman numerals in parentheses.
*   If the complex is an anion, the metal name ends in '-ate'.

### 3. Isomerism
*   **Structural Isomerism:** Linkage, Coordination, Ionization, Solvate isomerism.
*   **Stereoisomerism:**
    *   **Geometrical Isomerism:** cis-trans isomerism in square planar ([MA₂B₂]) and octahedral ([MA₄B₂]) complexes.
    *   **Optical Isomerism:** Non-superimposable mirror images (enantiomers) in octahedral complexes like [M(en)₃].

### 4. Bonding in Coordination Compounds
*   **Valence Bond Theory (VBT):** Explains bonding, geometry, and magnetic properties using hybridization (sp³, dsp², sp³d², d²sp³).
*   **Crystal Field Theory (CFT):** An electrostatic model. It describes the splitting of the d-orbitals of the central metal ion in the electric field of the ligands.
    *   **Octahedral field:** d-orbitals split into two sets: t₂g (lower energy) and e_g (higher energy).
    *   **Tetrahedral field:** Splitting is inverted and smaller than in octahedral fields.
    *   The magnitude of splitting (Δ) depends on the ligand strength, given by the **spectrochemical series**.
    *   Strong field ligands cause large splitting (low spin complexes, pairing occurs). Weak field ligands cause small splitting (high spin complexes).
*   **Colour and Magnetic Properties:** Colour is due to d-d electronic transitions. Magnetic properties depend on the number of unpaired electrons.

### 5. Importance of Coordination Compounds
*   In qualitative analysis, extraction of metals (e.g., cyanidation process for Au, Ag), and in biological systems (e.g., chlorophyll, haemoglobin, vitamin B₁₂).
`,
  workedExamples: [
    {
        problem: "Write the IUPAC name of the compound [Co(NH₃)₅Cl]Cl₂.",
        solution: "The complex ion is [Co(NH₃)₅Cl]²⁺. Ligands are ammine (NH₃) and chlorido (Cl⁻). Named alphabetically: pentaamminechlorido. The oxidation state of Co is x + 5(0) + (-1) = +2, so x = +3. The metal is in a cationic complex, so it's cobalt(III). The counter ion is chloride. Name: **Pentaamminechloridocobalt(III) chloride**."
    },
    {
        problem: "Using VBT, predict the hybridization, geometry, and magnetic character of [Ni(CN)₄]²⁻.",
        solution: "In [Ni(CN)₄]²⁻, Ni is in the +2 oxidation state (Ni²⁺: 3d⁸). CN⁻ is a strong field ligand, so it forces the pairing of electrons. The configuration becomes 3d⁸ with one empty d orbital. Hybridization is **dsp²**. The geometry is **square planar**. Since all electrons are paired, the complex is **diamagnetic**."
    },
    {
        problem: "What is the Crystal Field Stabilization Energy (CFSE) for a d⁶ ion in an octahedral field with a strong field ligand?",
        solution: "In an octahedral field, the d-orbitals split into t₂g (lower energy) and e_g (higher energy). For a d⁶ ion with a strong field ligand, pairing occurs. All 6 electrons will go into the lower energy t₂g orbitals (t₂g⁶ e_g⁰). The CFSE formula is (-0.4 * n(t₂g) + 0.6 * n(e_g))Δₒ + P. CFSE = (-0.4 * 6 + 0.6 * 0)Δₒ + 2P = **-2.4Δₒ + 2P**, where P is the pairing energy."
    }
  ],
  mcqs: [
    {
        "question": "The oxidation state of Ni in `[Ni(CO)₄]` is:",
        "options": ["+2", "+4", "0", "-4"],
        "answer": "0",
        "explanation": "Carbonyl (CO) is a neutral ligand. Since the overall charge of the complex is zero, the oxidation state of Ni must also be zero."
    },
    {
        "question": "Which of the following is a bidentate ligand?",
        "options": ["`NH₃`", "`CN⁻`", "`H₂O`", "`en` (ethylenediamine)"],
        "answer": "`en` (ethylenediamine)",
        "explanation": "Ethylenediamine (`H₂N-CH₂-CH₂-NH₂`) has two donor nitrogen atoms and can bind to the metal at two positions."
    },
    {
        "question": "The complex `[Co(NH₃)₆][Cr(CN)₆]` and `[Cr(NH₃)₆][Co(CN)₆]` are examples of:",
        "options": ["Linkage isomerism", "Ionization isomerism", "Coordination isomerism", "Geometrical isomerism"],
        "answer": "Coordination isomerism",
        "explanation": "This type of isomerism arises from the interchange of ligands between the cationic and anionic coordination entities."
    },
    {
        "question": "According to Crystal Field Theory, the colour of transition metal complexes is due to:",
        "options": ["Charge transfer", "d-d transitions", "Ionization", "Covalent bonding"],
        "answer": "d-d transitions",
        "explanation": "The absorption of light promotes an electron from a lower energy d-orbital (t₂g) to a higher energy d-orbital (e_g). The transmitted light appears as the complementary colour."
    },
    {
        "question": "Which of the following ligands is expected to be a strong field ligand?",
        "options": ["`I⁻`", "`Cl⁻`", "`H₂O`", "`CN⁻`"],
        "answer": "`CN⁻`",
        "explanation": "According to the spectrochemical series, `CN⁻` is a strong field ligand that causes large splitting of the d-orbitals."
    }
],
  assertionReasons: [
    {
        "assertion": "The complex `[Ni(CN)₄]²⁻` is square planar and diamagnetic.",
        "reason": "`CN⁻` is a strong field ligand which causes the pairing of electrons in the 3d orbitals of Ni²⁺, leading to dsp² hybridization.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The strong field ligand forces pairing, making one d-orbital available for dsp² hybridization and leaving no unpaired electrons."
    },
    {
        "assertion": "`[CoF₆]³⁻` is a high spin complex.",
        "reason": "`F⁻` is a weak field ligand.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A weak field ligand like `F⁻` causes a small crystal field splitting (Δₒ). It is energetically more favorable for electrons to occupy the higher energy e_g orbitals than to pair up in the t₂g orbitals."
    },
    {
        "assertion": "A solution of `[Ti(H₂O)₆]³⁺` is coloured.",
        "reason": "It has one unpaired electron in the d-orbital which can undergo d-d transition.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Ti³⁺ has a d¹ configuration. The absorption of light promotes this electron from the t₂g to the e_g level, causing the complex to appear coloured."
    },
    {
        "assertion": "EDTA is a hexadentate ligand.",
        "reason": "EDTA can bind through two nitrogen and four oxygen atoms to a central metal ion.",
        "answer": "A",
        "explanation": "The reason correctly explains why EDTA is hexadentate, as it has six donor sites available for coordination."
    },
    {
        "assertion": "Linkage isomerism arises in coordination compounds containing ambidentate ligands.",
        "reason": "Ambidentate ligands can ligate through two different atoms.",
        "answer": "A",
        "explanation": "The reason provides the correct definition for an ambidentate ligand and explains why this property leads to linkage isomerism (e.g., `-NO₂` can bind through N or O)."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) `[Co(NH₃)₆]³⁺`", "b) `[Ni(CN)₄]²⁻`", "c) `[Fe(H₂O)₆]²⁺`", "d) `[NiCl₄]²⁻`"],
        "column2": ["i) `sp³` hybridization, tetrahedral", "ii) `dsp²` hybridization, square planar", "iii) `d²sp³` hybridization, diamagnetic", "iv) `sp³d²` hybridization, paramagnetic"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) `en`", "b) `Cl⁻`", "c) `EDTA⁴⁻`", "d) `SCN⁻`"],
        "column2": ["i) Ambidentate ligand", "ii) Hexadentate ligand", "iii) Unidentate ligand", "iv) Bidentate ligand"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Werner's Theory", "b) VBT", "c) CFT", "d) Ligand"],
        "column2": ["i) Splitting of d-orbitals", "ii) Electron pair donor", "iii) Primary and secondary valency", "iv) Hybridization"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Chlorophyll", "b) Haemoglobin", "c) Vitamin B₁₂", "d) Cisplatin"],
        "column2": ["i) Cobalt", "ii) Platinum", "iii) Magnesium", "iv) Iron"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Ionization isomerism", "b) Linkage isomerism", "c) Hydrate isomerism", "d) Geometrical isomerism"],
        "column2": ["i) `[Cr(H₂O)₆]Cl₃` and `[Cr(H₂O)₅Cl]Cl₂·H₂O`", "ii) `[Co(NH₃)₅(NO₂)]Cl₂` and `[Co(NH₃)₅(ONO)]Cl₂`", "iii) `cis-[Pt(NH₃)₂(Cl)₂]`", "iv) `[Co(NH₃)₅SO₄]Br` and `[Co(NH₃)₅Br]SO₄`"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    }
  ]
};
