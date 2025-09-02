
import type { NeetModule } from '@/lib/types';

export const atomicStructure: NeetModule = {
  id: 'chemistry-atomic-structure',
  title: 'Atomic Structure',
  chapter: 'Atomic Structure',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Subatomic Particles (துணை அணுத் துகள்கள்)
*   Atoms are made of protons, neutrons, and electrons.
*   **Protons (p⁺):** Positively charged, in the nucleus.
*   **Neutrons (n⁰):** No charge, in the nucleus.
*   **Electrons (e⁻):** Negatively charged, orbit the nucleus.

### 2. Atomic Models (அணு மாதிரிகள்)
*   **Thomson's Model (தாம்சன் மாதிரி):** Plum pudding model. Atom is a sphere of positive charge with electrons embedded. (ஒரு தர்பூசணி பழத்தில் விதைகள் போல).
*   **Rutherford's Model (ரூதர்போர்டு மாதிரி):** Nuclear model based on the alpha-particle scattering experiment. Proposed a dense, positive nucleus with electrons orbiting it.
*   **Bohr's Model (போர் மாதிரி):** Electrons revolve in fixed circular paths called orbits or shells. Energy is quantized.
*   **Quantum Mechanical Model (குவாண்டம் இயக்கவியல் மாதிரி):** Describes electrons in terms of orbitals (3D space with high probability of finding an electron), defined by quantum numbers.

### 3. Quantum Numbers (குவாண்டம் எண்கள்)
*   **Principal Quantum Number (n):** Main energy level or shell. (n=1, 2, 3...).
*   **Azimuthal Quantum Number (l):** Subshell or shape of orbital (s, p, d, f). (l=0 to n-1).
*   **Magnetic Quantum Number (mₗ):** Orientation of orbital in space. (mₗ = -l to +l).
*   **Spin Quantum Number (mₛ):** Electron spin (+1/2 or -1/2).

### 4. Rules for Filling Orbitals
*   **Aufbau Principle:** Electrons fill lower energy orbitals first.
*   **Pauli Exclusion Principle:** No two electrons in an atom can have the same set of four quantum numbers.
*   **Hund's Rule of Maximum Multiplicity:** Pairing of electrons in orbitals of the same subshell does not occur until each orbital is singly occupied.

### 5. Electronic Configuration (எலக்ட்ரான் அமைப்பு)
*   The distribution of electrons into orbitals of an atom. (e.g., Nitrogen (Z=7): 1s² 2s² 2p³).
`,
  workedExamples: [
    {
        problem: "Calculate the energy of one mole of photons of radiation whose frequency is 5 x 10¹⁴ Hz.",
        solution: "Energy of one photon, E = hν, where h = 6.626 x 10⁻³⁴ J s. E = (6.626 x 10⁻³⁴ J s) x (5 x 10¹⁴ s⁻¹) = 33.13 x 10⁻²⁰ J. Energy of one mole of photons = (33.13 x 10⁻²⁰ J) x (6.022 x 10²³ mol⁻¹) = 199.51 kJ/mol."
    },
    {
        problem: "What are the possible values for all four quantum numbers for the last electron in a sodium atom (Z=11)?",
        solution: "The electronic configuration of Na is 1s² 2s² 2p⁶ 3s¹. The last electron is in the 3s orbital. For the 3s electron: Principal quantum number (n) = 3. Azimuthal quantum number (l) = 0 (for s orbital). Magnetic quantum number (mₗ) = 0 (since l=0). Spin quantum number (mₛ) can be +1/2 or -1/2."
    },
    {
        problem: "How many unpaired electrons are present in a Cr atom (Z=24)?",
        solution: "The electronic configuration of Cr is exceptional: [Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²), due to the stability of a half-filled d-orbital. The 3d subshell has 5 unpaired electrons, and the 4s subshell has 1 unpaired electron. Total unpaired electrons = 5 + 1 = 6."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
