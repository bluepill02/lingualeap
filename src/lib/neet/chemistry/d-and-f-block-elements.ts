
import type { NeetModule } from '@/lib/types';

export const dAndFBlockElements: NeetModule = {
  id: 'chemistry-d-and-f-block-elements',
  title: 'd- and f-Block Elements',
  chapter: 'd- and f-Block Elements',
  subject: 'Chemistry',
  conceptNotes: `
### 1. d-Block Elements (Transition Elements) (d-தொகுதி தனிமங்கள்)
*   Elements having partially filled d orbitals in their ground state or any one of their oxidation states.
*   General electronic configuration: (n-1)d¹⁻¹⁰ ns¹⁻².
*   **Properties:**
    *   Form coloured ions due to d-d transition.
    *   Show variable oxidation states.
    *   Form complex compounds.
    *   Act as good catalysts (e.g., Fe in Haber's process).
    *   Form alloys.
*   **Lanthanoid Contraction (லாந்தனைடு சுருக்கம்):** The steady decrease in the size of lanthanoid ions with an increase in atomic number. This is due to the poor shielding effect of 4f electrons. (ஒரு வகுப்பில் மாணவர்கள் அதிகமாகும்போது, கடைசி மாணவனுக்கு ஆசிரியரின் கவனம் குறைவாகக் கிடைப்பது போல). Its consequences are the similar radii of 2nd and 3rd transition series elements (e.g., Zr and Hf).

### 2. Important Compounds of d-Block Elements
*   **Potassium Dichromate (K₂Cr₂O₇):** A strong oxidizing agent. In acidic medium, Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.
*   **Potassium Permanganate (KMnO₄):** A very strong oxidizing agent. Its behavior depends on the pH of the solution (acidic, neutral, or alkaline).

### 3. f-Block Elements (Inner Transition Elements) (f-தொகுதி தனிமங்கள்)
*   The last electron enters the (n-2)f orbital.
*   **Lanthanoids (லாந்தனைடுகள்):** The 14 elements following Lanthanum (La). Electronic configuration: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s². Most common oxidation state is +3.
*   **Actinoids (ஆக்டினைடுகள்):** The 14 elements following Actinium (Ac). Electronic configuration: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s². They are all radioactive. They show a greater range of oxidation states than lanthanoids.

### 4. Comparison of Lanthanoids and Actinoids
*   Actinoid contraction is greater than lanthanoid contraction.
*   Actinoids are more reactive and have more complex magnetic properties than lanthanoids.
`,
  workedExamples: [
    {
        problem: "Why do transition metals show variable oxidation states?",
        solution: "Transition metals have incompletely filled d-orbitals. The energy difference between the (n-1)d and ns orbitals is very small. Therefore, electrons from both (n-1)d and ns orbitals can participate in bond formation, leading to variable oxidation states. For example, Mn (3d⁵ 4s²) can show oxidation states from +2 to +7."
    },
    {
        problem: "Explain why Zr (Z=40) and Hf (Z=72) have almost identical atomic radii.",
        solution: "This is a direct consequence of the **lanthanoid contraction**. The 14 electrons that are added to the 4f subshell before Hf poorly shield the outer electrons from the increasing nuclear charge. This increased effective nuclear charge pulls the electron cloud inwards, causing the atomic radius of Hf to be much smaller than expected. This contraction almost exactly counteracts the expected increase in size from an additional shell, making the radii of Zr and Hf very similar."
    },
    {
        problem: "Calculate the magnetic moment of a divalent ion in an aqueous solution if its atomic number is 25.",
        solution: "The atomic number is 25, which is Manganese (Mn). The electronic configuration of Mn is [Ar] 3d⁵ 4s². A divalent ion (Mn²⁺) is formed by the loss of two 4s electrons, so its configuration is [Ar] 3d⁵. The number of unpaired electrons (n) is 5. The magnetic moment (μ) is calculated using the spin-only formula: μ = √[n(n+2)] Bohr Magnetons (BM). μ = √[5(5+2)] = √35 ≈ 5.92 BM."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
