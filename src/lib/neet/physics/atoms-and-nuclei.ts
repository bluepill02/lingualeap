
import type { NeetModule } from '@/lib/types';

export const atomsAndNuclei: NeetModule = {
  id: 'physics-atoms-and-nuclei',
  title: 'Atoms and Nuclei',
  chapter: 'Atoms and Nuclei',
  subject: 'Physics',
  conceptNotes: `
### 1. Atomic Models (அணு மாதிரிகள்)
*   **Rutherford's Model:** Based on the α-particle scattering experiment, proposed a nuclear model of the atom.
*   **Bohr's Model for Hydrogen Atom:**
    1.  Electrons revolve in stable, circular orbits.
    2.  Angular momentum is quantized: L = mvr = n(h/2π).
    3.  An electron emits radiation when it jumps from a higher to a lower energy orbit.

### 2. Atomic Spectra (அணு நிறமாலை)
*   **Emission Spectra:** When an electron jumps from a higher energy level (n₂) to a lower level (n₁), a photon of frequency ν is emitted. hν = Eₙ₂ - Eₙ₁.
*   **Spectral Series of Hydrogen:**
    *   **Lyman Series:** Jumps to n=1 (UV region).
    *   **Balmer Series:** Jumps to n=2 (Visible region).
    *   **Paschen, Brackett, Pfund Series:** Jumps to n=3, 4, 5 respectively (Infrared region).

### 3. Nucleus (அணுக்கரு)
*   **Composition:** Protons and neutrons (collectively called nucleons).
*   **Atomic Number (Z):** Number of protons.
*   **Mass Number (A):** Total number of protons and neutrons (A = Z + N).
*   **Nuclear Size:** The radius of a nucleus is R = R₀A¹/³, where R₀ is a constant. This implies that the density of the nucleus is constant and independent of the mass number. (ஒரு பெரிய குடும்பத்தில் ஆட்கள் அதிகமாக இருந்தாலும், வீட்டின் அடர்த்தி மாறாமல் இருப்பது போல).
*   **Mass-Energy Equivalence:** E = mc².
*   **Binding Energy (பிணைப்பு ஆற்றல்):** The energy required to break a nucleus into its constituent nucleons. The binding energy per nucleon curve shows that nuclei with intermediate mass numbers (like Iron, Fe-56) are the most stable.

### 4. Radioactivity (கதிரியக்கம்)
*   The spontaneous disintegration of a nucleus.
*   **Law of Radioactive Decay:** The rate of decay is proportional to the number of undecayed nuclei present at that instant. N(t) = N₀e⁻ˡᵗ, where λ is the decay constant.
*   **Half-life (T₁/₂):** The time in which half of the radioactive nuclei decay. T₁/₂ = 0.693 / λ.
*   **Types of Decay:** Alpha (α) decay, Beta (β) decay (β⁻ and β⁺), and Gamma (γ) decay.

### 5. Nuclear Energy (அணுக்கரு ஆற்றல்)
*   **Nuclear Fission (அணுக்கரு பிளவு):** A heavy nucleus splits into two or more lighter nuclei, releasing a large amount of energy. Used in nuclear reactors.
*   **Nuclear Fusion (அணுக்கரு இணைவு):** Two or more light nuclei fuse to form a heavier nucleus, releasing immense energy. This is the process that powers the Sun.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
