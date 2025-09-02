
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
