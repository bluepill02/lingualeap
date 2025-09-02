
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
    },
    {
        "question": "Which experiment led to the discovery of the nucleus?",
        "options": [
            "Cathode ray experiment",
            "Oil drop experiment",
            "Alpha-particle scattering experiment",
            "Photoelectric effect"
        ],
        "answer": "Alpha-particle scattering experiment",
        "explanation": "Rutherford's gold foil experiment (alpha-particle scattering) led to the discovery of a dense, positively charged nucleus."
    },
    {
        "question": "The de Broglie wavelength of a particle is given by:",
        "options": [ "λ = h/mv", "λ = mv/h", "λ = h/m", "λ = h/v" ],
        "answer": "λ = h/mv",
        "explanation": "The de Broglie equation relates the wavelength of a particle to its momentum (p=mv)."
    },
    {
        "question": "Which rule explains the filling of electrons in degenerate orbitals?",
        "options": [ "Aufbau principle", "Hund's rule", "Pauli exclusion principle", "(n+l) rule" ],
        "answer": "Hund's rule",
        "explanation": "Hund's rule of maximum multiplicity states that electrons will singly occupy degenerate orbitals before pairing up."
    },
    {
        "question": "The mass number of an atom is equal to:",
        "options": [
            "The number of protons",
            "The number of neutrons",
            "The sum of protons and neutrons",
            "The sum of protons and electrons"
        ],
        "answer": "The sum of protons and neutrons",
        "explanation": "The mass number (A) represents the total number of nucleons (protons and neutrons) in the nucleus."
    },
    {
        "question": "The Balmer series of the hydrogen spectrum lies in which region?",
        "options": [ "Ultraviolet", "Visible", "Infrared", "Far-infrared" ],
        "answer": "Visible",
        "explanation": "The spectral lines of the Balmer series (transitions to n=2) fall within the visible region of the electromagnetic spectrum."
    },
    {
        "question": "The magnetic quantum number (mₗ) specifies the:",
        "options": [ "Size of the orbital", "Shape of the orbital", "Spatial orientation of the orbital", "Spin of the electron" ],
        "answer": "Spatial orientation of the orbital",
        "explanation": "The magnetic quantum number describes the orientation of an orbital in three-dimensional space."
    },
    {
        "question": "What is the charge of an alpha particle?",
        "options": [ "+1", "+2", "-1", "-2" ],
        "answer": "+2",
        "explanation": "An alpha particle is a helium nucleus (He²⁺), consisting of two protons and two neutrons, giving it a +2 charge."
    },
    {
        "question": "The photoelectric effect demonstrates the:",
        "options": [ "Wave nature of light", "Particle nature of light", "Wave nature of electrons", "Particle nature of electrons" ],
        "answer": "Particle nature of light",
        "explanation": "The photoelectric effect, explained by Einstein, shows that light consists of discrete energy packets (photons), demonstrating its particle nature."
    },
    {
        "question": "Which of the following species is isoelectronic with Ne?",
        "options": [ "O²⁻", "F", "Mg⁺", "Ar" ],
        "answer": "O²⁻",
        "explanation": "Ne has 10 electrons. O (Z=8) gaining 2 electrons becomes O²⁻ with 10 electrons. F has 9 electrons, Mg⁺ has 11 electrons, and Ar has 18 electrons."
    },
    {
        "question": "The energy difference between the shells goes on ____ when we move away from the nucleus.",
        "options": [ "Increasing", "Decreasing", "Remaining the same", "First increasing then decreasing" ],
        "answer": "Decreasing",
        "explanation": "The energy levels get closer to each other as the principal quantum number (n) increases. The difference between n=2 and n=1 is greater than between n=3 and n=2, and so on."
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
    },
    {
        "assertion": "The mass of an atom is concentrated in its nucleus.",
        "reason": "The nucleus contains protons and neutrons, which are much heavier than electrons.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The mass of electrons is negligible compared to the mass of nucleons."
    },
    {
        "assertion": "The radius of the first orbit of a hydrogen atom is 0.529 Å.",
        "reason": "The radius of the nth orbit in a hydrogen atom is given by rₙ = 0.529 * n² Å.",
        "answer": "A",
        "explanation": "The reason provides the correct formula. For the first orbit, n=1, so r₁ = 0.529 * 1² = 0.529 Å, which proves the assertion."
    },
    {
        "assertion": "A 3d orbital is more energetic than a 4s orbital.",
        "reason": "The (n+l) value for a 3d orbital is 5, while for a 4s orbital it is 4.",
        "answer": "A",
        "explanation": "According to the (n+l) rule, the orbital with the higher (n+l) value has higher energy. The reason correctly applies this rule to explain the assertion."
    },
    {
        "assertion": "The shape of a d_z² orbital is different from other d orbitals.",
        "reason": "It has a dumb-bell shape with a doughnut-shaped ring around the center.",
        "answer": "A",
        "explanation": "The reason correctly describes the unique shape of the d_z² orbital, which explains why it is different from the other four double dumb-bell shaped d orbitals."
    },
    {
        "assertion": "The emission spectrum of hydrogen consists of several series of lines.",
        "reason": "Electrons can jump from any higher energy level to any lower energy level.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Each series (Lyman, Balmer, etc.) corresponds to transitions ending at a specific lower energy level (n=1, n=2, etc.) from various higher levels."
    },
    {
        "assertion": "Thomson's atomic model is known as the plum pudding model.",
        "reason": "It assumes the atom is a sphere of positive charge with electrons embedded in it.",
        "answer": "A",
        "explanation": "The reason correctly describes the model, which is analogous to plums (electrons) in a pudding (positive sphere)."
    },
    {
        "assertion": "The Bohr model could not explain the spectra of multi-electron atoms.",
        "reason": "The Bohr model does not account for electron-electron repulsions.",
        "answer": "A",
        "explanation": "The reason is the primary failing of the Bohr model. It works perfectly for hydrogen (one electron) but fails when inter-electronic repulsions are present."
    },
    {
        "assertion": "The number of angular nodes in a p-orbital is one.",
        "reason": "The number of angular nodes is equal to the azimuthal quantum number (l).",
        "answer": "A",
        "explanation": "The reason correctly states the rule. For a p-orbital, l=1, so it has one angular node (a plane)."
    },
    {
        "assertion": "The size of an atom is of the order of 10⁻¹⁰ m.",
        "reason": "The size of a nucleus is of the order of 10⁻¹⁵ m.",
        "answer": "B",
        "explanation": "Both statements are true and provide correct orders of magnitude for the atom and nucleus, but the size of the nucleus does not explain the size of the atom. They are just two related facts."
    },
    {
        "assertion": "An electron with quantum numbers n=2, l=1, mₗ=0 is in a 2p_z orbital.",
        "reason": "For p-orbitals, mₗ=0 corresponds to the p_z orbital by convention.",
        "answer": "A",
        "explanation": "The reason correctly states the convention used to assign mₗ values to specific p-orbitals, explaining the assertion."
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
    },
    {
        "column1": [ "a) Isotopes", "b) Isobars", "c) Isotones", "d) Isoelectronic species" ],
        "column2": [ "i) Same mass number", "ii) Same number of electrons", "iii) Same atomic number", "iv) Same number of neutrons" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Photoelectric effect", "b) de Broglie", "c) Bohr's model", "d) Quantum mechanics" ],
        "column2": [ "i) Quantization of angular momentum", "ii) Wave-particle duality of matter", "iii) Ejection of electrons by light", "iv) Probability distribution of electron" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Number of protons", "b) Number of neutrons", "c) Number of electrons in Cr³⁺", "d) Number of electrons in F⁻" ],
        "column2": [ "i) 21", "ii) Atomic number (Z)", "iii) 10", "iv) Mass number - Atomic number (A-Z)" ],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": [ "a) Planck's constant (h)", "b) Rydberg constant (R)", "c) Speed of light (c)", "d) Avogadro's number (Nₐ)" ],
        "column2": [ "i) 6.022 x 10²³", "ii) 3 x 10⁸ m/s", "iii) 1.097 x 10⁷ m⁻¹", "iv) 6.626 x 10⁻³⁴ J s" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": [ "a) 2n²", "b) n²", "c) 2l + 1", "d) 4l + 2" ],
        "column2": [ "i) Max electrons in a subshell", "ii) Number of orbitals in a shell", "iii) Max electrons in a shell", "iv) Number of orbitals in a subshell" ],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": [ "a) Number of angular nodes", "b) Number of radial nodes", "c) Total number of nodes", "d) Orbital angular momentum" ],
        "column2": [ "i) n - l - 1", "ii) l", "iii) n - 1", "iv) √[l(l+1)] h/2π" ],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": [ "a) Cation", "b) Anion", "c) Nucleus", "d) Electron cloud" ],
        "column2": [ "i) Negatively charged ion", "ii) Contains most of the atom's volume", "iii) Positively charged ion", "iv) Contains most of the atom's mass" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) ¹H₁", "b) ²H₁", "c) ³H₁", "d) ⁴He₂" ],
        "column2": [ "i) Alpha particle", "ii) Deuterium", "iii) Tritium", "iv) Protium" ],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": [ "a) K shell", "b) L shell", "c) M shell", "d) N shell" ],
        "column2": [ "i) n=3", "ii) n=4", "iii) n=1", "iv) n=2" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) n=2, l=1", "b) n=3, l=0", "c) n=4, l=2", "d) n=5, l=3" ],
        "column2": [ "i) 3s", "ii) 4d", "iii) 5f", "iv) 2p" ],
        "answer": "a-iv, b-i, c-ii, d-iii"
    }
]

};

