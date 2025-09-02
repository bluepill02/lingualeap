
import type { NeetModule } from '@/lib/types';

export const coordinationCompounds: NeetModule = {
  id: 'chemistry-coordination-compounds',
  title: 'Coordination Compounds',
  chapter: 'Coordination Compounds',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Basic Terminology (அடிப்படைச் சொற்கள்)
*   **Coordination Entity:** A central metal atom or ion bonded to a fixed number of ions or molecules (ligands). e.g., [Co(NH₃)₆]³⁺.
*   **Central Atom/Ion:** The metal atom/ion to which ligands are attached.
*   **Ligands (ஈனிகள்):** Ions or molecules that donate a pair of electrons to the central metal atom. Can be unidentate, bidentate, polydentate.
*   **Coordination Number (அணைவு எண்):** The number of ligand donor atoms to which the metal is directly bonded.
*   **Coordination Sphere:** The central atom and the ligands attached to it, enclosed in square brackets.

### 2. Nomenclature of Coordination Compounds (அணைவுச் சேர்மங்களின் பெயரிடுதல்)
*   Cation is named first.
*   Ligands are named in alphabetical order before the metal.
*   Anionic ligands end in -o, neutral ligands are named as the molecule.
*   The oxidation state of the metal is written in Roman numerals in parentheses.
*   If the complex ion is an anion, the name of the metal ends with the suffix -ate.

### 3. Isomerism in Coordination Compounds (அணைவுச் சேர்மங்களில் மாற்றியம்)
*   **Structural Isomerism:** Linkage, Coordination, Ionization, Solvate isomerism.
*   **Stereoisomerism:**
    *   **Geometrical Isomerism:** cis-trans isomerism.
    *   **Optical Isomerism:** Non-superimposable mirror images (enantiomers).

### 4. Bonding in Coordination Compounds (அணைவுச் சேர்மங்களில் பிணைப்பு)
*   **Werner's Theory:** Postulated primary (ionisable) and secondary (non-ionisable) valencies.
*   **Valence Bond Theory (VBT):** Explains bonding in terms of hybridization (e.g., d²sp³, sp³d²) and predicts the geometry and magnetic properties.
*   **Crystal Field Theory (CFT) (படிக புலக் கொள்கை):** Describes the splitting of d-orbitals of the central metal ion in the electric field of the ligands. The magnitude of splitting (Δ) depends on the ligand strength (spectrochemical series).
    *   **Spectrochemical Series:** I⁻ < Br⁻ < ... < H₂O < ... < NH₃ < en < CN⁻ < CO.
    *   Strong field ligands cause large splitting (low spin complexes), weak field ligands cause small splitting (high spin complexes).

### 5. Importance of Coordination Compounds
*   In biological systems (e.g., chlorophyll, haemoglobin).
*   In analytical chemistry, metallurgy, and medicine.
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
