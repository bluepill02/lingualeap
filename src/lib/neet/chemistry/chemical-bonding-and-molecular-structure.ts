
import type { NeetModule } from '@/lib/types';

export const chemicalBondingAndMolecularStructure: NeetModule = {
  id: 'chemistry-chemical-bonding-and-molecular-structure',
  title: 'Chemical Bonding and Molecular Structure',
  chapter: 'Chemical Bonding and Molecular Structure',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Introduction to Chemical Bonding (வேதிப் பிணைப்பு அறிமுகம்)
*   **Kossel-Lewis approach:** Atoms combine to complete their respective octets to attain stable noble gas configuration.
*   **Ionic Bond (அயனிப் பிணைப்பு):** Formed by the complete transfer of electrons from a metal to a non-metal, leading to electrostatic attraction between oppositely charged ions (e.g., NaCl).
    *   **Factors affecting formation:** Low ionization enthalpy of the metal, high electron gain enthalpy of the non-metal, and high lattice enthalpy of the compound.
    *   **Lattice Enthalpy:** The energy required to completely separate one mole of a solid ionic compound into its gaseous constituent ions.
*   **Covalent Bond (சகப் பிணைப்பு):** Formed by the sharing of electrons between atoms.

### 2. Covalent Bonding: Parameters and Theories
*   **Concept of electronegativity:** The tendency of an atom to attract a shared pair of electrons.
*   **Fajan’s rule:** Predicts the degree of covalent character in an ionic bond. Covalent character is favored by: small cation, large anion, and high charge on ions.
*   **Dipole moment (இருமுனைத் திருப்புத்திறன்):** A measure of the polarity of a chemical bond.
*   **Valence Shell Electron Pair Repulsion (VSEPR) Theory:** Predicts the geometry of molecules based on minimizing repulsion between electron pairs in the valence shell. Repulsion order: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair.
*   **Valence Bond Theory (VBT):** A covalent bond forms from the overlap of atomic orbitals.
    *   **Hybridization (கலப்பினமாதல்):** Mixing of atomic orbitals to form new hybrid orbitals. Key types: sp (linear), sp² (trigonal planar), sp³ (tetrahedral), sp³d (trigonal bipyramidal), sp³d² (octahedral).
    *   **Resonance (உடனிசைவு):** The concept that a molecule's actual structure is a hybrid of several contributing Lewis structures.

### 3. Molecular Orbital Theory (MOT) (மூலக்கூறு ஆர்பிட்டால் கொள்கை)
*   Atomic orbitals combine to form molecular orbitals (MOs).
*   **Types of MOs:** Bonding Molecular Orbitals (BMOs - lower energy, stabilizing) and Antibonding Molecular Orbitals (ABMOs - higher energy, destabilizing).
*   **Sigma (σ) and pi (π) bonds.**
*   **Molecular orbital electronic configurations:** Filling electrons into MOs according to energy levels.
*   **Bond Order:** A measure of the number of bonds between two atoms. Bond Order = ½ (No. of electrons in BMOs - No. of electrons in ABMOs).
    *   A positive bond order indicates a stable molecule.
    *   Higher bond order means greater bond strength and shorter bond length.
*   Explains the magnetic nature (paramagnetic/diamagnetic) of molecules like O₂.

### 4. Metallic and Hydrogen Bonding
*   **Metallic Bonding (உலோகப் பிணைப்பு):** The electrostatic attraction between metal cations and delocalized electrons.
*   **Hydrogen Bonding (ஹைட்ரஜன் பிணைப்பு):** A special type of dipole-dipole attraction between a hydrogen atom bonded to a highly electronegative atom (F, O, N) and another nearby electronegative atom. It's responsible for many unique properties of water.
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
