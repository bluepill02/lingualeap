
import type { NeetModule } from '@/lib/types';

export const atomicStructure: NeetModule = {
  id: 'chemistry-atomic-structure',
  title: 'Atomic Structure',
  chapter: 'Atomic Structure',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Atomic Structure (வேதியியல் - அணு அமைப்பு)

# 2. Learning Objectives
1.  After this, you will be able to describe the discovery of electrons, protons, and neutrons and compare different atomic models (Thomson, Rutherford).
2.  After this, you will be able to explain the postulates of Bohr's model and calculate the radius and energy of orbits in a hydrogen atom.
3.  After this, you will be able to explain the dual nature of matter, the uncertainty principle, and the significance of quantum numbers.
4.  After this, you will be able to apply the Aufbau principle, Pauli's exclusion principle, and Hund's rule to write the electronic configuration of elements.

# 3. Prerequisites
– Basic knowledge of atoms and elements.
– Understanding of charge and classical mechanics.

# 4. Concept Overview
Just as the beautiful, intricate carvings on a Tanjore (தஞ்சாவூர்) temple pillar are made of smaller, fundamental patterns, all matter is made of atoms. But what are atoms made of? This chapter, **Atomic Structure**, unveils the secrets inside the atom. We will journey from early ideas to the modern quantum mechanical model, understanding how electrons are arranged in specific energy levels, much like the gopuram (கோபுரம்) of a temple has different tiers. Understanding this structure is the key to explaining the chemical behavior of all elements.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 1, Chapter 2**. It is a fundamental chapter with high weightage in NEET, especially questions on quantum numbers, electronic configuration, and Bohr's model calculations.

### 5.1 Discovery of Sub-atomic Particles
*   **Discovery of Electron (J.J. Thomson):** From cathode ray discharge tube experiments.
*   **Discovery of Proton (Goldstein) and Neutron (Chadwick).**

### 5.2 Atomic Models
*   **Thomson's Model (Plum Pudding Model):** Atom is a sphere of positive charge with electrons embedded in it.
*   **Rutherford's Model (Nuclear Model):** Based on the alpha-scattering experiment, it proposed a small, dense, positive nucleus with electrons orbiting it. It failed to explain the stability of the atom.
*   **Bohr's Model for Hydrogen Atom:**
    *   Postulates: Fixed energy shells, quantization of angular momentum (mvr = nh/2π).
    *   Successfully explained the hydrogen spectrum.
    *   Limitations: Failed for multi-electron atoms.

### 5.3 Quantum Mechanical Model of Atom
*   **Dual Nature of Matter (de Broglie):** All moving particles have wave-like properties (\\(\\lambda = h/mv\\)).
*   **Heisenberg's Uncertainty Principle:** It's impossible to determine both the exact position and momentum of a microscopic particle simultaneously (\\(\\Delta x \\cdot \\Delta p \\ge h/4\\pi\\)).
*   **Quantum Numbers (குவாண்டம் எண்கள்):** Four numbers that describe the address of an electron in an atom.
    1.  **Principal (n):** Shell/Energy level (1, 2, 3...).
    2.  **Azimuthal (l):** Subshell/Shape of orbital (0 to n-1). s, p, d, f.
    3.  **Magnetic (mₗ):** Orientation of orbital (-l to +l).
    4.  **Spin (mₛ):** Electron spin (+1/2, -1/2).
*   **Shapes of Atomic Orbitals:** s (spherical), p (dumbbell), d (double dumbbell).

### 5.4 Rules for Filling Electrons
*   **Aufbau Principle:** Orbitals are filled in order of increasing energy (n+l rule).
*   **Pauli's Exclusion Principle:** No two electrons can have the same set of four quantum numbers.
*   **Hund's Rule of Maximum Multiplicity:** Pairing of electrons in orbitals of the same subshell starts only when each orbital is singly occupied.
*   **Electronic Configuration:** Distribution of electrons in orbitals. Stability of half-filled and fully-filled orbitals (e.g., Cr and Cu).

# 6. Worked Examples

**1. Easy:** What are the possible values for all four quantum numbers for the last electron in a sodium atom (Z=11)?
*   **Solution:** The electronic configuration of Na is 1s² 2s² 2p⁶ 3s¹. The last electron is in the 3s orbital.
    *   n = 3 (principal shell)
    *   l = 0 (for s orbital)
    *   mₗ = 0 (since l=0)
    *   mₛ = +1/2 or -1/2

**2. Medium:** Calculate the energy of one mole of photons of radiation whose frequency is 5 x 10¹⁴ Hz.
*   **Solution:**
    *   Energy of one photon, E = hν, where h = 6.626 x 10⁻³⁴ J s.
    *   E = (6.626 x 10⁻³⁴ J s) x (5 x 10¹⁴ s⁻¹) = 33.13 x 10⁻²⁰ J.
    *   Energy of one mole of photons = E × Nₐ = (33.13 x 10⁻²⁰ J) x (6.022 x 10²³ mol⁻¹) = **199.51 kJ/mol**.

**3. Must-Practice:** How many unpaired electrons are present in a Cr atom (Z=24)?
*   **Solution:**
    *   The electronic configuration of Cr is exceptional due to the stability of a half-filled d-orbital.
    *   Expected: [Ar] 4s² 3d⁴. Actual: **[Ar] 4s¹ 3d⁵**.
    *   The 4s orbital has 1 unpaired electron.
    *   The 3d subshell has 5 orbitals, and each is singly occupied, so there are 5 unpaired electrons.
    *   Total unpaired electrons = 1 + 5 = **6**.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(E = h\\nu = hc/\\lambda\\) | Photon Energy (ஃபோட்டான் ஆற்றல்) |
| \\(L = mvr = \\frac{nh}{2\\pi}\\) | Bohr's Quantization of Angular Momentum (கோண உந்தம் குவாண்டமாக்கல்) |
| \\(\\lambda = h/mv\\) | de Broglie Wavelength (டி பிராய் அலைநீளம்) |
| \\(\\Delta x \\cdot \\Delta p \\ge h/4\\pi\\) | Heisenberg's Uncertainty Principle (ஹைசன்பர்க் நிச்சயமற்ற கொள்கை) |

<br>
\`\`\`
DIAGRAM: Shapes of s and p orbitals
A spherical s orbital and three dumbbell-shaped p orbitals (p_x, p_y, p_z) oriented along the X, Y, and Z axes respectively.
s-orbital (கோள வடிவம்), p-orbital (டம்பெல் வடிவம்)
\`\`\`
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
  mcqs: [
    {
        "question": "The number of orbitals in the third principal energy level (n=3) is:",
        "options": [ "3", "6", "9", "12" ],
        "answer": "9",
        "explanation": "The number of orbitals in a shell is given by n². For n=3, the number of orbitals is 3² = 9 (one 3s, three 3p, and five 3d orbitals)."
    },
    {
        "question": "Which of the following sets of quantum numbers is not possible?",
        "options": [
            "n=3, l=2, mₗ=-2, mₛ=+1/2",
            "n=4, l=0, mₗ=0, mₛ=+1/2",
            "n=3, l=3, mₗ=-3, mₛ=-1/2",
            "n=5, l=1, mₗ=0, mₛ=+1/2"
        ],
        "answer": "n=3, l=3, mₗ=-3, mₛ=-1/2",
        "explanation": "The value of the azimuthal quantum number (l) can only range from 0 to n-1. If n=3, the maximum possible value for l is 2. Therefore, l=3 is not possible."
    },
    {
        "question": "According to Bohr's theory, the angular momentum of an electron in the 4th orbit is:",
        "options": [ "4h/π", "2h/π", "h/π", "4.5h/π" ],
        "answer": "2h/π",
        "explanation": "Bohr's quantization condition states that angular momentum L = nh/2π. For the 4th orbit, n=4. So, L = 4h/2π = 2h/π."
    },
    {
        "question": "The shape of a p-orbital is:",
        "options": [ "Spherical", "Dumb-bell", "Double dumb-bell", "Complex" ],
        "answer": "Dumb-bell",
        "explanation": "s-orbitals are spherical, p-orbitals are dumb-bell shaped, and d-orbitals are generally double dumb-bell shaped."
    },
    {
        "question": "Which principle states that no two electrons in an atom can have the same four quantum numbers?",
        "options": [ "Aufbau principle", "Hund's rule", "Pauli exclusion principle", "Heisenberg's uncertainty principle" ],
        "answer": "Pauli exclusion principle",
        "explanation": "The Pauli exclusion principle is the quantum mechanical principle which states that two or more identical fermions cannot occupy the same quantum state within a quantum system simultaneously."
    },
    {
        "question": "The number of radial nodes for a 3p orbital is:",
        "options": [ "0", "1", "2", "3" ],
        "answer": "1",
        "explanation": "The number of radial nodes is given by the formula n - l - 1. For a 3p orbital, n=3 and l=1. So, radial nodes = 3 - 1 - 1 = 1."
    },
    {
        "question": "Which of the following orbitals has the highest energy?",
        "options": [ "4s", "3d", "4p", "5s" ],
        "answer": "5s",
        "explanation": "According to the (n+l) rule, the energy of orbitals is compared. 4s(4+0=4), 3d(3+2=5), 4p(4+1=5), 5s(5+0=5). For orbitals with the same (n+l) value, the one with the higher n value has higher energy. So, comparing 3d, 4p, and 5s, the order is 3d < 4p < 5s."
    },
    {
        "question": "The electronic configuration of Copper (Z=29) is:",
        "options": [
            "[Ar] 4s² 3d⁹",
            "[Ar] 4s¹ 3d¹⁰",
            "[Ar] 4s² 3d⁸ 4p¹",
            "[Ar] 4s¹ 3d⁹ 4p¹"
        ],
        "answer": "[Ar] 4s¹ 3d¹⁰",
        "explanation": "Copper has an exceptional electron configuration. A completely filled d-orbital (d¹⁰) is more stable than a partially filled one, so one electron from the 4s orbital jumps to the 3d orbital."
    },
    {
        "question": "The subatomic particle that was discovered by J. Chadwick is:",
        "options": [ "Electron", "Proton", "Neutron", "Positron" ],
        "answer": "Neutron",
        "explanation": "James Chadwick discovered the neutron in 1932."
    },
    {
        "question": "Isobars are atoms having the same number of:",
        "options": [ "Protons", "Neutrons", "Electrons", "Nucleons" ],
        "answer": "Nucleons",
        "explanation": "Isobars are atoms of different elements having the same mass number (total number of protons + neutrons, i.e., nucleons)."
    },
    {
        "question": "The maximum number of electrons that can be accommodated in a subshell is given by:",
        "options": [ "2l + 1", "4l + 2", "2n²", "n + l" ],
        "answer": "4l + 2",
        "explanation": "A subshell has (2l+1) orbitals, and each orbital can hold a maximum of 2 electrons. So, the maximum number of electrons is 2(2l+1) = 4l+2."
    },
    {
        "question": "The energy of an electron in the nth Bohr orbit of a hydrogen atom is proportional to:",
        "options": [ "n²", "1/n²", "n", "1/n" ],
        "answer": "1/n²",
        "explanation": "The energy of an electron in a hydrogen atom is given by Eₙ = -13.6/n² eV."
    },
    {
        "question": "Which of the following is not a part of the electromagnetic spectrum?",
        "options": [ "X-rays", "Gamma rays", "Microwaves", "Alpha rays" ],
        "answer": "Alpha rays",
        "explanation": "Alpha rays are particles (helium nuclei), not electromagnetic waves."
    },
    {
        "question": "Heisenberg's Uncertainty Principle is applicable to:",
        "options": [
            "Macroscopic objects only",
            "Microscopic objects only",
            "Both macroscopic and microscopic objects",
            "Stationary objects only"
        ],
        "answer": "Microscopic objects only",
        "explanation": "The uncertainty is significant only for microscopic particles like electrons, and is negligible for macroscopic objects."
    },
    {
        "question": "The number of spherical nodes in a 4s orbital is:",
        "options": [ "0", "1", "2", "3" ],
        "answer": "3",
        "explanation": "The number of radial (spherical) nodes is n - l - 1. For a 4s orbital, n=4, l=0. Nodes = 4 - 0 - 1 = 3."
    }
  ],
  assertionReasons: [
    {
        "assertion": "It is impossible to determine the exact position and exact momentum of an electron simultaneously.",
        "reason": "The path of an electron is not clearly defined.",
        "answer": "A",
        "explanation": "This is a statement of Heisenberg's Uncertainty Principle. The wave-particle duality of an electron means it does not have a definite path, which is the underlying reason for the uncertainty."
    },
    {
        "assertion": "The energy of a 2s orbital is greater than the energy of a 2p orbital.",
        "reason": "The (n+l) value for a 2s orbital is greater than that of a 2p orbital.",
        "answer": "D",
        "explanation": "The assertion is false; for multi-electron atoms, the 2p orbital is higher in energy than the 2s. The reason is also false; (n+l) for 2s is 2+0=2, and for 2p is 2+1=3."
    },
    {
        "assertion": "An orbital cannot have more than two electrons.",
        "reason": "The two electrons in an orbital must have opposite spins.",
        "answer": "A",
        "explanation": "This is a consequence of the Pauli Exclusion Principle. The reason provides the condition under which two electrons can occupy the same orbital."
    },
    {
        "assertion": "The electronic configuration of Cr (Z=24) is [Ar] 3d⁵ 4s¹.",
        "reason": "A half-filled d-orbital is more stable than a partially filled d-orbital.",
        "answer": "A",
        "explanation": "The reason correctly explains the exceptional configuration of Chromium. The extra stability of the half-filled d⁵ configuration drives the promotion of an electron from the 4s orbital."
    },
    {
        "assertion": "The charge to mass ratio of cathode rays is constant.",
        "reason": "Cathode rays are composed of electrons.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since all cathode rays are streams of electrons, and all electrons have the same charge and mass, the e/m ratio is constant regardless of the gas in the tube or the cathode material."
    }
  ],
  matchTheColumns: [
    {
        "column1": [ "a) Electron", "b) Proton", "c) Neutron", "d) Nucleus" ],
        "column2": [ "i) Rutherford", "ii) J. J. Thomson", "iii) Goldstein", "iv) Chadwick" ],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": [ "a) s-orbital", "b) p-orbital", "c) d-orbital", "d) f-orbital" ],
        "column2": [ "i) Dumb-bell", "ii) Double dumb-bell", "iii) Spherical", "iv) Complex/diffused" ],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": [ "a) Principal quantum number (n)", "b) Azimuthal quantum number (l)", "c) Magnetic quantum number (mₗ)", "d) Spin quantum number (mₛ)" ],
        "column2": [ "i) Orientation of orbital", "ii) Spin of electron", "iii) Size and energy of shell", "iv) Shape of orbital" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Lyman series", "b) Balmer series", "c) Paschen series", "d) Brackett series" ],
        "column2": [ "i) Infrared region (n₁=3)", "ii) Visible region (n₁=2)", "iii) Ultraviolet region (n₁=1)", "iv) Infrared region (n₁=4)" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Aufbau Principle", "b) Pauli Exclusion Principle", "c) Hund's Rule", "d) Heisenberg's Principle" ],
        "column2": [ "i) Δx ⋅ Δp ≥ h/4π", "ii) No two e⁻ have same 4 quantum numbers", "iii) Filling of orbitals in order of increasing energy", "iv) Pairing starts after orbitals are half-filled" ],
        "answer": "a-iii, b-ii, c-iv, d-i"
    }
  ]
};

