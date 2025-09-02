
import type { NeetModule } from '@/lib/types';

export const atomsAndNuclei: NeetModule = {
  id: 'physics-atoms-and-nuclei',
  title: 'Atoms and Nuclei',
  chapter: 'Atoms and Nuclei',
  subject: 'Physics',
  conceptNotes: `
### 1. Atoms (அணுக்கள்)
*   **Alpha-particle scattering experiment; Rutherford's model of atom:** Based on the scattering experiment, proposed a nuclear model of the atom with a dense, positive nucleus and orbiting electrons.
*   **Bohr model, energy levels, hydrogen spectrum:** A model for the hydrogen atom where electrons revolve in stable orbits with quantized angular momentum. It successfully explains the hydrogen spectrum, including series like Lyman, Balmer, etc.

### 2. Nuclei (அணுக்கருக்கள்)
*   **Composition and size of nucleus:** Composed of protons and neutrons. The radius is given by R = R₀A¹/³.
*   **Atomic masses, isotopes, isobars; isotones.**
*   **Mass-energy relation, mass defect:** E = mc². The mass defect is the difference between the mass of a nucleus and the sum of the masses of its constituent nucleons.
*   **Binding energy per nucleon and its variation with mass number:** A curve showing the stability of nuclei. Nuclei with intermediate mass numbers are most stable.
*   **Nuclear fission and fusion:** Fission is the splitting of a heavy nucleus, and fusion is the combining of light nuclei. Both processes release enormous amounts of energy.
`,
  workedExamples: [
    {
        problem: "The half-life of a radioactive substance is 30 days. What is the time taken for 3/4th of its original mass to disintegrate?",
        solution: "Disintegration of 3/4th of the original mass means 1/4th of the mass is remaining. Let N₀ be the initial mass. After one half-life (T₁/₂), the mass remaining is N₀/2. After two half-lives (2 * T₁/₂), the mass remaining is (N₀/2)/2 = N₀/4. So, the time taken for 3/4th disintegration is equal to two half-lives. Time taken = 2 × 30 days = 60 days."
    },
    {
        problem: "Calculate the energy equivalent of 1 g of substance.",
        solution: "Using Einstein's mass-energy equivalence relation, E = mc². Given m = 1 g = 1 × 10⁻³ kg, and c = 3 × 10⁸ m/s. E = (1 × 10⁻³) kg × (3 × 10⁸ m/s)² = (1 × 10⁻³) × (9 × 10¹⁶) J = 9 × 10¹³ J."
    },
    {
        problem: "Find the ratio of the radii of two nuclei with mass numbers 8 and 27.",
        solution: "The radius of a nucleus is given by R = R₀A¹/³. So, R₁/R₂ = (R₀A₁¹/³)/(R₀A₂¹/³) = (A₁/A₂)¹/³. Given A₁ = 8 and A₂ = 27. R₁/R₂ = (8/27)¹/³ = 2/3. The ratio of their radii is 2:3."
    }
  ],
  mcqs: [
    {
        question: "The spectral series of hydrogen atom that lies in the visible region is:",
        options: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
        answer: "Balmer series",
        explanation: "The Balmer series corresponds to electron transitions ending at n=2, and its spectral lines fall within the visible part of the spectrum."
    },
    {
        question: "The radius of a nucleus is related to its mass number A by:",
        options: ["R ∝ A²", "R ∝ A", "R ∝ A¹/³", "R ∝ A¹/²"],
        answer: "R ∝ A¹/³",
        explanation: "The nuclear radius is experimentally found to be R = R₀A¹/³, where R₀ is a constant."
    },
    {
        question: "In a nuclear reactor, the purpose of a moderator is to:",
        options: ["Absorb neutrons", "Speed up neutrons", "Slow down fast neutrons", "Produce neutrons"],
        answer: "Slow down fast neutrons",
        explanation: "Moderators like heavy water or graphite are used to slow down the fast neutrons produced during fission to thermal energies, which are more effective in causing further fission."
    },
    {
        question: "The half-life of a radioactive substance is 10 days. The time taken for 7/8th of its original mass to disintegrate is:",
        options: ["10 days", "20 days", "30 days", "40 days"],
        answer: "30 days",
        explanation: "Disintegration of 7/8 means 1/8 remains. N₀ → N₀/2 (1 half-life) → N₀/4 (2 half-lives) → N₀/8 (3 half-lives). So, time taken = 3 * T₁/₂ = 3 * 10 = 30 days."
    },
    {
        question: "Which of the following is used as a moderator in a nuclear reactor?",
        options: ["Uranium", "Cadmium", "Heavy water", "Plutonium"],
        answer: "Heavy water",
        explanation: "Heavy water (D₂O) and graphite are common moderators used in nuclear reactors."
    },
    {
        question: "The energy source of the Sun is:",
        options: ["Nuclear fission", "Chemical reaction", "Nuclear fusion", "Gravitational contraction"],
        answer: "Nuclear fusion",
        explanation: "The Sun's energy is produced by the fusion of light nuclei (hydrogen) into heavier nuclei (helium)."
    },
    {
        question: "Which of the following particles is emitted during β⁻ decay?",
        options: ["Electron", "Positron", "Proton", "Neutron"],
        answer: "Electron",
        explanation: "In β⁻ decay, a neutron inside the nucleus converts into a proton, an electron, and an antineutrino. The electron is emitted from the nucleus."
    },
    {
        question: "The binding energy per nucleon is maximum for:",
        options: ["Helium", "Iron", "Uranium", "Hydrogen"],
        answer: "Iron",
        explanation: "The binding energy per nucleon curve peaks at iron (Fe-56), making it one of the most stable nuclei."
    },
    {
        question: "The rate of radioactive decay is proportional to:",
        options: ["The time elapsed", "The temperature", "The number of undecayed nuclei", "The pressure"],
        answer: "The number of undecayed nuclei",
        explanation: "The law of radioactive decay states that dN/dt = -λN."
    },
    {
        question: "The relation between half-life (T₁/₂) and decay constant (λ) is:",
        options: ["T₁/₂ = λ", "T₁/₂ = 1/λ", "T₁/₂ = 0.693/λ", "T₁/₂ = 0.693 * λ"],
        answer: "T₁/₂ = 0.693/λ",
        explanation: "This is the standard formula relating half-life and the decay constant."
    },
    {
        question: "Rutherford's alpha-particle scattering experiment was responsible for the discovery of:",
        options: ["Electron", "Proton", "Atomic Nucleus", "Neutron"],
        answer: "Atomic Nucleus",
        explanation: "The scattering of alpha particles indicated the presence of a small, dense, positively charged nucleus at the center of the atom."
    },
    {
        question: "The ratio of the size of the nucleus to the size of the atom is of the order of:",
        options: ["10⁻¹", "10⁻⁵", "10⁻¹⁰", "10⁻¹⁵"],
        answer: "10⁻⁵",
        explanation: "The nucleus radius is of the order of 10⁻¹⁵ m and the atomic radius is of the order of 10⁻¹⁰ m. The ratio is 10⁻¹⁵/10⁻¹⁰ = 10⁻⁵."
    },
    {
        question: "Isobars are nuclei with the same number of:",
        options: ["Protons", "Neutrons", "Electrons", "Nucleons"],
        answer: "Nucleons",
        explanation: "Isobars are atoms of different elements having the same mass number (A), which is the total number of nucleons (protons + neutrons)."
    },
    {
        question: "The angular momentum of an electron in the nth orbit of a hydrogen atom, according to Bohr's model, is:",
        options: ["nh", "nh/2π", "n²h/2π", "h/n"],
        answer: "nh/2π",
        explanation: "Bohr's second postulate states that the angular momentum is an integral multiple of h/2π."
    },
    {
        question: "What happens to the atomic number and mass number of a nucleus when it emits a gamma ray?",
        options: ["Atomic number decreases by 1, mass number is unchanged", "Atomic number increases by 1, mass number is unchanged", "Both remain unchanged", "Both decrease by 4 and 2 respectively"],
        answer: "Both remain unchanged",
        explanation: "Gamma decay involves the emission of a high-energy photon from an excited nucleus to a lower energy state. It does not change the number of protons or neutrons."
    },
    {
        question: "One atomic mass unit (amu) is equivalent to:",
        options: ["931.5 MeV", "1.6 x 10⁻¹⁹ J", "1 MeV", "9.1 x 10⁻³¹ kg"],
        answer: "931.5 MeV",
        explanation: "From E=mc², the energy equivalent of 1 amu is approximately 931.5 MeV."
    },
    {
        question: "In the reaction ¹⁴N + ⁴He → ¹⁷O + X, the particle X is:",
        options: ["An electron", "A proton", "A neutron", "A positron"],
        answer: "A proton",
        explanation: "To balance the mass number: 14+4 = 17+A, so A=1. To balance the atomic number: 7+2 = 8+Z, so Z=1. A particle with A=1 and Z=1 is a proton (¹H)."
    },
    {
        question: "The process in which a heavy nucleus splits into two lighter nuclei is called:",
        options: ["Fusion", "Fission", "Alpha decay", "Beta decay"],
        answer: "Fission",
        explanation: "Nuclear fission is the splitting of a heavy, unstable nucleus into two lighter nuclei."
    },
    {
        question: "The shortest wavelength in the Balmer series corresponds to a transition from:",
        options: ["n=3 to n=2", "n=∞ to n=2", "n=2 to n=1", "n=∞ to n=1"],
        answer: "n=∞ to n=2",
        explanation: "The shortest wavelength corresponds to the highest energy transition. For the Balmer series (transitions to n=2), the highest energy transition is from n=∞."
    },
    {
        question: "The activity of a radioactive sample is measured in:",
        options: ["Joule", "Becquerel", "Tesla", "Weber"],
        answer: "Becquerel",
        explanation: "The SI unit of radioactivity is the Becquerel (Bq), where 1 Bq = 1 decay per second. Another common unit is the Curie (Ci)."
    },
    {
        question: "Which of the following is not conserved in a nuclear reaction?",
        options: ["Charge", "Momentum", "Mass", "Energy"],
        answer: "Mass",
        explanation: "In nuclear reactions, a small amount of mass is converted into a large amount of energy (or vice versa) according to E=mc². Thus, mass is not conserved, but mass-energy is."
    },
    {
        question: "The force that binds the nucleons together in a nucleus is the:",
        options: ["Gravitational force", "Electrostatic force", "Strong nuclear force", "Weak nuclear force"],
        answer: "Strong nuclear force",
        explanation: "The strong nuclear force is the fundamental force that holds protons and neutrons together in the nucleus, overcoming the electrostatic repulsion between protons."
    },
    {
        question: "The average life (τ) of a radioactive substance is related to its half-life (T₁/₂) by:",
        options: ["τ = T₁/₂", "τ = 0.693 * T₁/₂", "τ = T₁/₂ / 0.693", "τ = 2 * T₁/₂"],
        answer: "τ = T₁/₂ / 0.693",
        explanation: "The average life τ = 1/λ and the half-life T₁/₂ = ln(2)/λ = 0.693/λ. Therefore, τ = T₁/₂ / 0.693."
    },
    {
        question: "During alpha decay, the mass number of the nucleus:",
        options: ["Decreases by 2", "Decreases by 4", "Increases by 2", "Remains unchanged"],
        answer: "Decreases by 4",
        explanation: "An alpha particle is a helium nucleus (⁴He₂), so its emission decreases the mass number by 4 and the atomic number by 2."
    },
    {
        "question": "Bohr's model of the atom:",
        options: ["Assumes that the angular momentum of electrons is quantized", "Uses Einstein's photoelectric equation", "Predicts the same emission spectra for all types of atoms", "Could explain the Zeeman effect"],
        answer: "Assumes that the angular momentum of electrons is quantized",
        explanation: "The quantization of angular momentum (L = nh/2π) is one of the fundamental postulates of Bohr's model."
    }
  ],
  assertionReasons: [
    {
        assertion: "The density of a nucleus is independent of its mass number.",
        reason: "The radius of a nucleus is proportional to the cube root of its mass number (R ∝ A¹/³).",
        answer: "A",
        explanation: "Density ρ = Mass/Volume ∝ A / R³ ∝ A / (A¹/³ )³ ∝ A/A = constant. The reason correctly explains why the density is constant."
    },
    {
        assertion: "Nuclear fusion is the source of energy in stars.",
        reason: "In fusion, lighter nuclei combine to form a heavier nucleus, releasing a large amount of energy.",
        answer: "A",
        explanation: "The reason correctly describes the process of nuclear fusion, which explains why it is the energy source of stars."
    },
    {
        assertion: "The force holding the nucleons together inside a nucleus is the strong nuclear force.",
        reason: "The strong nuclear force is a short-range, charge-independent force.",
        answer: "B",
        explanation: "Both statements are true descriptions of the strong nuclear force. However, the reason describes its properties rather than explaining why it is the binding force."
    },
    {
        assertion: "Gamma rays are high-energy photons.",
        reason: "Gamma decay occurs when an excited nucleus transitions to a lower energy state.",
        answer: "A",
        explanation: "The energy difference between the nuclear energy levels is released in the form of a high-energy photon, which is a gamma ray. The reason explains the assertion."
    },
    {
        assertion: "The half-life of a radioactive substance is constant.",
        reason: "The rate of decay of a radioactive substance depends on the number of undecayed nuclei.",
        answer: "B",
        explanation: "Both statements are true. The half-life is a constant characteristic of a given isotope. The rate of decay does depend on the number of nuclei present. However, the second statement doesn't explain why the half-life is constant."
    },
    {
        assertion: "It is not possible for a hydrogen atom to emit an alpha particle.",
        reason: "A hydrogen atom contains only one proton and one electron.",
        answer: "A",
        explanation: "An alpha particle consists of two protons and two neutrons. Since a hydrogen atom does not contain these particles, it cannot emit one. The reason correctly explains the assertion."
    },
    {
        assertion: "Bohr's model violates Heisenberg's Uncertainty Principle.",
        reason: "Bohr's model assumes that both the position and momentum of an electron in an atom are known with certainty.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. By defining fixed orbits (position) and a fixed velocity/momentum in that orbit, Bohr's model contradicts the uncertainty principle."
    },
    {
        assertion: "The binding energy per nucleon is lower for both light and heavy nuclei.",
        reason: "This is why both fusion of light nuclei and fission of heavy nuclei release energy.",
        answer: "A",
        explanation: "The reason correctly explains the consequence of the binding energy curve mentioned in the assertion. Reactions that move towards the peak of the binding energy curve (more stable nuclei) will release energy."
    },
    {
        assertion: "The law of radioactive decay is an exponential law.",
        reason: "The number of undecayed nuclei decreases exponentially with time.",
        answer: "A",
        explanation: "The reason is a statement of the result of the decay law (N = N₀e⁻ˡᵗ), which is the definition of an exponential decay process."
    },
    {
        assertion: "During β⁻ decay, a neutron is converted into a proton.",
        reason: "This results in an increase in the atomic number by one.",
        answer: "A",
        explanation: "The reason is a direct consequence of the process described in the assertion (n → p⁺ + e⁻ + ν̅). The number of protons (atomic number) increases by one."
    },
    {
        assertion: "Isotopes are atoms of the same element with different mass numbers.",
        reason: "Isotopes have the same number of protons but a different number of neutrons.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Same number of protons means it's the same element, while a different number of neutrons leads to a different mass number."
    },
    {
        assertion: "The Paschen series of the hydrogen spectrum lies in the infrared region.",
        reason: "The Paschen series corresponds to electron transitions to the n=3 energy level.",
        answer: "A",
        explanation: "The reason correctly describes the Paschen series. The energy differences for transitions to n=3 are small enough that the emitted photons fall in the infrared region."
    },
    {
        assertion: "A free neutron is unstable.",
        reason: "A free neutron decays into a proton, an electron, and an antineutrino.",
        answer: "A",
        explanation: "The reason describes the decay process that is the evidence of the instability mentioned in the assertion."
    },
    {
        assertion: "Nuclear forces are charge-independent.",
        reason: "The nuclear force between a proton-proton, a neutron-neutron, and a proton-neutron is approximately the same.",
        answer: "A",
        explanation: "The reason provides the experimental evidence for the charge-independent nature of nuclear forces stated in the assertion."
    },
    {
        assertion: "The mass of a nucleus is always less than the sum of the masses of its constituent nucleons.",
        reason: "The difference in mass is converted into binding energy.",
        answer: "A",
        explanation: "The reason correctly explains the concept of mass defect, which is the physical basis for the assertion."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Alpha decay", "b) Beta (β⁻) decay", "c) Gamma decay", "d) Fission"],
        column2: ["i) Z increases by 1", "ii) No change in Z or A", "iii) Heavy nucleus splits", "iv) A decreases by 4"],
        answer: "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1: ["a) Lyman series", "b) Balmer series", "c) Paschen series", "d) Pfund series"],
        column2: ["i) Visible region", "ii) Infrared region (n₁=5)", "iii) UV region", "iv) Infrared region (n₁=3)"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Half-life", "b) Activity", "c) Mass defect", "d) Binding energy"],
        column2: ["i) Δm = [Zm_p + (A-Z)m_n] - M_nuc", "ii) E_b = Δmc²", "iii) T₁/₂ = 0.693/λ", "iv) R = λN"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) Isotopes", "b) Isobars", "c) Isotones", "d) Isomers"],
        column2: ["i) Same A, different Z", "ii) Same Z, same A, different energy state", "iii) Same number of neutrons", "iv) Same Z, different A"],
        answer: "a-iv, b-i, c-iii, d-ii"
    },
    {
        column1: ["a) Nuclear Reactor", "b) Sun", "c) Atomic Bomb", "d) Hydrogen Bomb"],
        column2: ["i) Uncontrolled fusion", "ii) Controlled fission", "iii) Controlled fusion", "iv) Uncontrolled fission"],
        answer: "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Rutherford", "b) Bohr", "c) Pauli", "d) Fermi"],
        "column2": ["i) Controlled nuclear fission", "ii) Exclusion principle", "iii) Nuclear model of atom", "iv) Quantization of angular momentum"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Repulsive force", "b) Attractive force", "c) Nuclear radius", "d) Nuclear density"],
        "column2": ["i) Constant for all nuclei", "ii) R₀A¹/³", "iii) Electrostatic force between protons", "iv) Strong nuclear force"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) 1 amu", "b) 1 Curie (Ci)", "c) 1 Becquerel (Bq)", "d) 1 MeV"],
        "column2": ["i) 1 decay/sec", "ii) 1.6 x 10⁻¹³ J", "iii) 3.7 x 10¹⁰ decays/sec", "iv) 931.5 MeV/c²"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Moderator", "b) Control rods", "c) Coolant", "d) Shielding"],
        "column2": ["i) Absorbs neutrons (e.g., Cadmium)", "ii) Protects from radiation", "iii) Slows down neutrons (e.g., D₂O)", "iv) Removes heat from the core"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Shortest wavelength in Lyman series", "b) Longest wavelength in Balmer series", "c) Shortest wavelength in Paschen series", "d) Longest wavelength in Pfund series"],
        "column2": ["i) n=6 to n=5", "ii) n=∞ to n=3", "iii) n=3 to n=2", "iv) n=∞ to n=1"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) ¹⁴C", "b) ⁶⁰Co", "c) ²³⁵U", "d) ³H"],
        "column2": ["i) Fissile material", "ii) Cancer therapy", "iii) Tritium", "iv) Radiocarbon dating"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Mass number", "b) Atomic number", "c) Electron", "d) Neutron"],
        "column2": ["i) No charge", "ii) Number of protons", "iii) Negatively charged", "iv) Number of nucleons"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) Fusion requires high temperature", "b) Fission is initiated by neutrons", "c) Chain reaction", "d) Bohr's postulate"],
        "column2": ["i) E = E₁ - E₂", "ii) Self-propagating process", "iii) To overcome electrostatic repulsion", "iv) Thermal neutrons"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Average life", "b) Activity", "c) Decay constant", "d) Half-life"],
        "column2": ["i) T₁/₂", "ii) R", "iii) λ", "iv) τ"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) During α-decay", "b) During β⁻-decay", "c) During β⁺-decay", "d) During γ-decay"],
        "column2": ["i) Z → Z-1", "ii) Z → Z+1", "iii) Z → Z-2", "iv) Z remains same"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    }
  ]
}
