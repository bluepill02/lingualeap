
import type { NeetModule } from '@/lib/types';

export const chemicalBondingAndMolecularStructure: NeetModule = {
  id: 'chemistry-chemical-bonding-and-molecular-structure',
  title: 'Chemical Bonding and Molecular Structure',
  chapter: 'Chemical Bonding and Molecular Structure',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Types of Chemical Bonds (வேதிப் பிணைப்புகளின் வகைகள்)
*   **Ionic Bond (அயனிப் பிணைப்பு):** Formed by the complete transfer of electrons from a metal to a non-metal (e.g., NaCl). (ஒருவர் பொருளைக் கொடுத்துவிட்டு, மற்றொருவர் வாங்கிக் கொள்வது போல).
*   **Covalent Bond (சகப் பிணைப்பு):** Formed by the sharing of electrons between two non-metals (e.g., Cl₂, CH₄).
    *   **Polar Covalent Bond:** Unequal sharing of electrons due to electronegativity difference (e.g., H₂O).
    *   **Nonpolar Covalent Bond:** Equal sharing of electrons (e.g., H₂, O₂).
*   **Coordinate Bond (ஈதற் சகப் பிணைப்பு):** A type of covalent bond where both shared electrons are donated by one atom (e.g., in NH₄⁺).

### 2. VSEPR Theory (இணைதிறன் கூட்டு எலக்ட்ரான் விலக்கு கொள்கை)
*   Valence Shell Electron Pair Repulsion theory helps predict the shape of molecules.
*   The geometry is determined by minimizing the repulsion between electron pairs in the valence shell.
*   Repulsion order: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair.

### 3. Valence Bond Theory (VBT) and Hybridization (இணைதிறன் பிணைப்புக் கொள்கை மற்றும் கலப்பினமாதல்)
*   A covalent bond is formed by the overlapping of atomic orbitals.
*   **Hybridization (கலப்பினமாதல்):** The concept of mixing atomic orbitals to form new hybrid orbitals with equivalent energies and shapes.
    *   **sp³:** Tetrahedral geometry (e.g., CH₄).
    *   **sp²:** Trigonal planar geometry (e.g., BCl₃).
    *   **sp:** Linear geometry (e.g., BeCl₂).

### 4. Molecular Orbital Theory (MOT) (மூலக்கூறு ஆர்பிட்டால் கொள்கை)
*   Atomic orbitals combine to form molecular orbitals (bonding and antibonding).
*   **Bond Order:** ½ (No. of electrons in Bonding MOs - No. of electrons in Antibonding MOs).
*   MOT explains the magnetic properties (paramagnetic/diamagnetic) of molecules like O₂.

### 5. Hydrogen Bonding (ஹைட்ரஜன் பிணைப்பு)
*   An electrostatic attraction between a hydrogen atom covalently bonded to a highly electronegative atom (N, O, F) and another nearby electronegative atom.
*   Responsible for the high boiling point of water.
`,
  workedExamples: [
    {
        problem: "Predict the shape of the SF₄ molecule using VSEPR theory.",
        solution: "In SF₄, the central atom is S. Valence electrons of S = 6. Electrons from 4 F atoms = 4. Total valence electrons = 10. Total electron pairs = 10/2 = 5. No. of bond pairs = 4. No. of lone pairs = 5 - 4 = 1. The electron geometry for 5 pairs is trigonal bipyramidal. With one lone pair, the molecular shape is a see-saw (சீசா வடிவம்)."
    },
    {
        problem: "Calculate the bond order of the N₂ molecule using MOT and determine its magnetic nature.",
        solution: "N₂ has 14 electrons. The MOT configuration is (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (π2pₓ)² (π2pᵧ)² (σ2p₂)². Bonding electrons (Nb) = 10. Antibonding electrons (Na) = 4. Bond Order = ½ (Nb - Na) = ½ (10 - 4) = 3. Since there are no unpaired electrons, N₂ is diamagnetic (டயாகாந்தத் தன்மை)."
    },
    {
        problem: "Why is the H₂O molecule bent while the BeF₂ molecule is linear?",
        solution: "In H₂O, the central O atom has 2 bond pairs and 2 lone pairs (sp³ hybridization). The lone pair-lone pair and lone pair-bond pair repulsions are stronger than bond pair-bond pair repulsion, pushing the bonds closer and resulting in a bent shape. In BeF₂, the central Be atom has only 2 bond pairs and no lone pairs (sp hybridization). To minimize repulsion, the bond pairs arrange themselves 180° apart, resulting in a linear shape."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
