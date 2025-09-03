
import type { NeetModule } from '@/lib/types';

export const chemicalBondingAndMolecularStructure: NeetModule = {
  id: 'chemistry-chemical-bonding-and-molecular-structure',
  title: 'Chemical Bonding and Molecular Structure',
  chapter: 'Chemical Bonding and Molecular Structure',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Chemical Bonding and Molecular Structure (வேதியியல் - வேதிப் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு)

# 2. Learning Objectives
1.  After this, you will be able to explain the formation of ionic and covalent bonds.
2.  After this, you will be able to apply VSEPR theory to predict the shapes of simple molecules.
3.  After this, you will be able to describe hybridization and its role in determining molecular geometry.
4.  After this, you will be able to use Molecular Orbital Theory to determine the bond order and magnetic properties of simple diatomic molecules.

# 3. Prerequisites
– Knowledge of atomic structure, electronic configuration, and quantum numbers.
– Basic understanding of periodic trends like electronegativity.

# 4. Concept Overview
Imagine building a complex temple gopuram (கோபுரம்). The way each brick is connected to another determines the final, stable structure. Similarly, **Chemical Bonding** explains how atoms connect to form stable molecules. This chapter is the 'architecture' of chemistry. We will explore how atoms share (covalent bond) or transfer (ionic bond) electrons to stick together. We'll learn powerful theories like VSEPR and Hybridization (கலப்பினமாதல்) to predict the 3D shapes of molecules, and use Molecular Orbital Theory to understand the nature of bonds in molecules like oxygen.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 1, Chapter 4**. It is one of the most important chapters in all of chemistry, with a very high weightage in NEET. Questions are often asked from VSEPR theory, hybridization, MOT, and dipole moment.

### 5.1 Types of Chemical Bonds
*   **Ionic Bond (அயனிப் பிணைப்பு):** Formed by the complete transfer of electrons, creating an electrostatic attraction between ions (e.g., NaCl).
*   **Covalent Bond (சகப் பிணைப்பு):** Formed by the mutual sharing of electrons.
    *   **Bond Parameters:** Bond length, bond angle, bond enthalpy, bond order.
*   **Coordinate Bond:** A type of covalent bond where both shared electrons are donated by one atom.

### 5.2 Theories of Covalent Bonding
*   **VSEPR Theory (இணைதிறன் கூட்டில் உள்ள எலக்ட்ரான் இரட்டைகளின் விலக்குக் கொள்கை):** The shape of a molecule is determined by the repulsion between electron pairs in the valence shell. The order of repulsion is: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair.
*   **Valence Bond Theory (VBT):** Explains bond formation through the overlapping of atomic orbitals.
    *   **Hybridization (கலப்பினமாதல்):** The concept of mixing atomic orbitals to form new hybrid orbitals with specific shapes and energies (e.g., sp³, sp², sp). This determines the geometry of molecules.
    *   **Resonance (உடனிசைவு):** When a single Lewis structure cannot describe a molecule accurately, its true structure is a resonance hybrid of multiple contributing structures.

### 5.3 Molecular Orbital Theory (MOT)
*   Atomic orbitals combine to form an equal number of molecular orbitals (MOs).
*   **Bonding MOs (பிணைப்பு மூலக்கூறு ஆர்பிட்டால்கள்):** Lower energy, stable.
*   **Antibonding MOs (எதிர்-பிணைப்பு மூலக்கூறு ஆர்பிட்டால்கள்):** Higher energy, unstable.
*   **Bond Order:** \\( \\frac{1}{2} (N_b - N_a) \\), where Nₑ is electrons in bonding MOs and Nₐ is electrons in antibonding MOs. A higher bond order indicates a stronger bond.
*   Explains the paramagnetism of O₂ and the existence/non-existence of molecules like He₂.

### 5.4 Hydrogen Bonding (ஹைட்ரஜன் பிணைப்பு)
*   A special dipole-dipole attraction between a hydrogen atom bonded to a highly electronegative atom (F, O, N) and another electronegative atom. It is responsible for the unique properties of water.

# 6. Worked Examples

**1. Easy:** Predict the shape of the SF₄ molecule using VSEPR theory.
*   **Solution:**
    *   Central atom S has 6 valence electrons.
    *   It forms 4 single bonds with F atoms.
    *   Total electron pairs = (6 valence e⁻ from S + 4 e⁻ from 4F) / 2 = 5 pairs.
    *   Bond pairs = 4, Lone pairs = 1.
    *   The electron geometry for 5 pairs is trigonal bipyramidal. The lone pair occupies an equatorial position to minimize repulsion.
    *   Therefore, the molecular shape is a **see-saw (சீசா வடிவம்)**.

**2. Medium:** Calculate the bond order of the N₂ molecule using MOT and determine its magnetic nature.
*   **Solution:**
    *   N₂ has a total of 14 electrons.
    *   MOT configuration: \\((\\sigma1s)^2 (\\sigma^*1s)^2 (\\sigma2s)^2 (\\sigma^*2s)^2 (\\pi2p_x)^2 (\\pi2p_y)^2 (\\sigma2p_z)^2\\).
    *   Number of bonding electrons (Nₑ) = 10.
    *   Number of antibonding electrons (Nₐ) = 4.
    *   Bond Order = \\(\\frac{1}{2}(N_b - N_a) = \\frac{1}{2}(10 - 4) = 3\\).
    *   Since there are no unpaired electrons, N₂ is **diamagnetic (டயாகாந்தத் தன்மை)**.

**3. Must-Practice:** Why is the H₂O molecule bent while the BeF₂ molecule is linear?
*   **Solution:**
    *   **In H₂O:** The central O atom undergoes sp³ hybridization. It has 2 bond pairs and 2 lone pairs. The strong repulsion from the two lone pairs pushes the bond pairs closer, resulting in a bent shape (104.5°).
    *   **In BeF₂:** The central Be atom undergoes sp hybridization. It has only 2 bond pairs and no lone pairs. To be as far apart as possible, they arrange themselves 180° apart, resulting in a linear shape.

# 7. Key Formulas & Diagrams

| Concept | Formula / Representation |
| :--- | :--- |
| Hybridization & Shape | sp (Linear), sp² (Trigonal Planar), sp³ (Tetrahedral) |
| VSEPR Repulsion Order | lp-lp > lp-bp > bp-bp |
| Bond Order (MOT) | \\( \\frac{1}{2} (N_b - N_a) \\) |
| Dipole Moment (μ) | Zero for symmetrical molecules (CO₂, CCl₄) |

<br>
\`\`\`
DIAGRAM: Hybridization Shapes
Shows sp (linear, 180°), sp² (trigonal planar, 120°), and sp³ (tetrahedral, 109.5°) geometries with example molecules like BeCl₂, BF₃, and CH₄.
sp (நேர்க்கோட்டு), sp² (தள முக்கோணம்), sp³ (நான்முகி)
\`\`\`
`,
  workedExamples: [
    {
        problem: "Predict the shape of the SF₄ molecule using VSEPR theory.",
        solution: "In SF₄, the central atom is S. Valence electrons of S = 6. Electrons from 4 F atoms = 4. Total valence electrons = 10. Total electron pairs = 10/2 = 5. No. of bond pairs = 4. No. of lone pairs = 5 - 4 = 1. The electron geometry for 5 pairs is trigonal bipyramidal. With one lone pair occupying an equatorial position to minimize repulsion, the molecular shape is a see-saw (சீசா வடிவம்)."
    },
    {
        problem: "Calculate the bond order of the N₂ molecule using MOT and determine its magnetic nature.",
        solution: "N₂ has 14 electrons. The MOT configuration is (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (π2pₓ)² (π2pᵧ)² (σ2p₂)². Bonding electrons (Nb) = 10. Antibonding electrons (Na) = 4. Bond Order = ½ (Nb - Na) = ½ (10 - 4) = 3. This corresponds to the triple bond in N≡N. Since there are no unpaired electrons, N₂ is diamagnetic (டயாகாந்தத் தன்மை)."
    },
    {
        problem: "Why is the H₂O molecule bent while the BeF₂ molecule is linear?",
        solution: "In H₂O, the central O atom undergoes sp³ hybridization. It has 2 bond pairs and 2 lone pairs. The strong lone pair-lone pair and lone pair-bond pair repulsions push the bonds closer together, resulting in a bent shape (approx. 104.5°). In BeF₂, the central Be atom undergoes sp hybridization. It has only 2 bond pairs and no lone pairs. To minimize repulsion, the bond pairs arrange themselves 180° apart, resulting in a linear shape."
    }
  ],
  mcqs: [
    {
        "question": "The geometry of the `SF₆` molecule is:",
        "options": ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar"],
        "answer": "Octahedral",
        "explanation": "In `SF₆`, the central sulfur atom has 6 bond pairs and 0 lone pairs, leading to `sp³d²` hybridization and an octahedral geometry."
    },
    {
        "question": "Which of the following molecules has a zero dipole moment?",
        "options": ["`NH₃`", "`H₂O`", "`CO₂`", "`CHCl₃`"],
        "answer": "`CO₂`",
        "explanation": "`CO₂` is a linear molecule with two polar C=O bonds that are equal and opposite, so their dipole moments cancel out."
    },
    {
        "question": "According to Molecular Orbital Theory, which of the following is paramagnetic?",
        "options": ["`N₂`", "`O₂`", "`F₂`", "`H₂`"],
        "answer": "`O₂`",
        "explanation": "The MOT configuration of `O₂` shows two unpaired electrons in the π* antibonding orbitals, making it paramagnetic."
    },
    {
        "question": "The type of hybridization of the carbon atoms in ethyne (acetylene) is:",
        "options": ["`sp³`", "`sp²`", "`sp`", "`dsp²`"],
        "answer": "`sp`",
        "explanation": "Ethyne (`C₂H₂`) has a carbon-carbon triple bond, which involves `sp` hybridization, leading to a linear geometry."
    },
    {
        "question": "Which of the following exhibits hydrogen bonding?",
        "options": ["`CH₄`", "`H₂S`", "`HCl`", "`HF`"],
        "answer": "`HF`",
        "explanation": "Hydrogen bonding occurs when hydrogen is bonded to a highly electronegative atom like F, O, or N. `HF` has strong hydrogen bonds."
    }
],
  assertionReasons: [
    {
        "assertion": "`BF₃` is a planar molecule.",
        "reason": "The central boron atom in `BF₃` undergoes `sp²` hybridization.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. `sp²` hybridization leads to a trigonal planar geometry."
    },
    {
        "assertion": "The bond order of `O₂` is 2.",
        "reason": "According to MOT, the number of electrons in bonding molecular orbitals is 10 and in antibonding molecular orbitals is 6.",
        "answer": "A",
        "explanation": "The reason provides the correct electron count from the MOT diagram of `O₂`. Bond order = ½(10 - 6) = 2, which explains the assertion."
    },
    {
        "assertion": "A triple bond is stronger and shorter than a double bond.",
        "reason": "Bond order is directly proportional to bond strength and inversely proportional to bond length.",
        "answer": "A",
        "explanation": "The reason correctly states the relationship between bond order, strength, and length, which explains the assertion (triple bond has bond order 3, double bond has 2)."
    },
    {
        "assertion": "`H₂O` has a higher boiling point than `H₂S`.",
        "reason": "`H₂O` molecules are associated with intermolecular hydrogen bonding, while `H₂S` molecules are not.",
        "answer": "A",
        "explanation": "The presence of strong hydrogen bonds in water requires more energy to overcome, leading to a higher boiling point. This correctly explains the assertion."
    },
    {
        "assertion": "The `Be₂` molecule does not exist.",
        "reason": "The bond order of `Be₂` is zero.",
        "answer": "A",
        "explanation": "The MOT configuration of `Be₂` (8 electrons) is `(σ1s)²(σ*1s)²(σ2s)²(σ*2s)²`. Bond order = ½(4-4) = 0. A zero bond order indicates that the molecule is unstable and does not exist."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) `sp`", "b) `sp²`", "c) `sp³`", "d) `sp³d²`"],
        "column2": ["i) Tetrahedral", "ii) Octahedral", "iii) Linear", "iv) Trigonal planar"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) `NH₃`", "b) `CH₄`", "c) `H₂O`", "d) `SF₄`"],
        "column2": ["i) See-saw", "ii) Bent", "iii) Pyramidal", "iv) Tetrahedral"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Bond Order 1", "b) Bond Order 2", "c) Bond Order 3", "d) Bond Order 0"],
        "column2": ["i) `N₂`", "ii) `Ne₂`", "iii) `F₂`", "iv) `O₂`"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Ionic Bond", "b) Covalent Bond", "c) Hydrogen Bond", "d) Metallic Bond"],
        "column2": ["i) Sharing of electrons", "ii) Electron sea model", "iii) Transfer of electrons", "iv) Dipole-dipole interaction with H"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) `PCl₅`", "b) `BeCl₂`", "c) `XeF₄`", "d) `IF₇`"],
        "column2": ["i) Square planar", "ii) Pentagonal bipyramidal", "iii) Trigonal bipyramidal", "iv) Linear"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};

