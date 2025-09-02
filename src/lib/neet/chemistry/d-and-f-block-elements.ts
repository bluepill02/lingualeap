
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
  mcqs: [
    {
      question: "Which of the following elements shows a maximum number of oxidation states?",
      options: ["Sc", "Mn", "Fe", "Zn"],
      answer: "Mn",
      explanation: "Manganese (Mn) has the electronic configuration [Ar] 3d⁵ 4s², and it can exhibit oxidation states from +2 to +7 by using its 3d and 4s electrons."
    },
    {
      question: "The lanthanoid contraction is responsible for the fact that:",
      options: ["Zr and Y have about the same radius", "Zr and Hf have about the same radius", "Zr and Nb have similar oxidation states", "Zr and Zn are in the same group"],
      answer: "Zr and Hf have about the same radius",
      explanation: "The poor shielding by 4f electrons causes the atomic radius of hafnium to be nearly identical to that of zirconium."
    },
    {
      question: "Which of the following ions is colorless?",
      options: ["Cu²⁺", "Ti³⁺", "Sc³⁺", "V³⁺"],
      answer: "Sc³⁺",
      explanation: "Sc³⁺ has an electronic configuration of [Ar] 3d⁰. Since it has no d-electrons, d-d transitions are not possible, and the ion is colorless."
    },
    {
      question: "The catalytic activity of transition metals is attributed to their:",
      options: ["High melting points", "Variable oxidation states", "High density", "Paramagnetic nature"],
      answer: "Variable oxidation states",
      explanation: "Their ability to adopt multiple oxidation states allows them to form temporary intermediates in chemical reactions, providing an alternative pathway with lower activation energy."
    },
    {
      question: "Potassium dichromate (K₂Cr₂O₇) is a strong oxidizing agent. The oxidation state of Cr in the dichromate ion is:",
      options: ["+3", "+4", "+6", "+7"],
      answer: "+6",
      explanation: "In Cr₂O₇²⁻, let the oxidation state of Cr be x. 2x + 7(-2) = -2. 2x - 14 = -2. 2x = 12. x = +6."
    }
  ],
  assertionReasons: [
    {
      assertion: "Transition metals form a large number of complex compounds.",
      reason: "Transition metals have small size, high ionic charge, and vacant d-orbitals.",
      answer: "A",
      explanation: "The reason correctly lists the key properties that enable transition metals to act as central metal ions and accept electron pairs from ligands to form coordination complexes."
    },
    {
      assertion: "Zn, Cd, and Hg are generally not considered transition metals.",
      reason: "They have completely filled d-orbitals in their ground state as well as in their common oxidation states.",
      answer: "A",
      explanation: "The reason provides the correct definition-based explanation for why these elements are often excluded from the transition series. A transition metal must have a partially filled d-orbital in at least one of its common oxidation states."
    }
  ],
  matchTheColumns: [
    {
      column1: ["a) Lanthanoid", "b) Actinoid", "c) Transition metal", "d) d-block but not transition"],
      column2: ["i) Iron (Fe)", "ii) Zinc (Zn)", "iii) Uranium (U)", "iv) Cerium (Ce)"],
      answer: "a-iv, b-iii, c-i, d-ii"
    },
    {
      column1: ["a) Colored ion", "b) Paramagnetic", "c) Diamagnetic", "d) Variable oxidation state"],
      column2: ["i) Unpaired electrons present", "ii) Partially filled d-orbital", "iii) All electrons paired", "iv) d-d transition"],
      answer: "a-iv, b-i, c-iii, d-ii"
    }
  ]
};

    