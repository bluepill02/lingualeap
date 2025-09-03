
import type { NeetModule } from '@/lib/types';

export const dAndFBlockElements: NeetModule = {
  id: 'chemistry-d-and-f-block-elements',
  title: 'd- and f-Block Elements',
  chapter: 'd- and f-Block Elements',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Transition Elements (d-Block)
*   **General Introduction:** Elements having partially filled d orbitals in their ground state or any one of their common oxidation states. They are placed between s-block and p-block elements.
*   **Electronic Configuration:** General configuration is (n-1)d¹⁻¹⁰ ns¹⁻².
*   **Occurrence and Characteristics:** Found in nature, mostly as minerals. They are typically hard, malleable, ductile metals with high melting and boiling points.
*   **General trends in properties of the first-row transition elements:**
    *   **Physical Properties:** High density, high melting/boiling points, high enthalpy of atomization.
    *   **Ionization Enthalpy:** Generally increases across a series, but not very regularly.
    *   **Oxidation States:** Show variable oxidation states due to the small energy difference between (n-1)d and ns orbitals.
    *   **Atomic Radii:** Decrease initially and then become almost constant towards the end of the series.
    *   **Colour:** Most transition metal compounds are coloured due to d-d electronic transitions.
    *   **Catalytic Behaviour:** Act as good catalysts due to their ability to show variable oxidation states and form intermediate complexes.
    *   **Magnetic Properties:** Most are paramagnetic due to the presence of unpaired d-electrons.
    *   **Complex Formation:** Strong tendency to form coordination complexes due to their small size, high ionic charge, and availability of d-orbitals.
    *   **Interstitial Compounds:** Formed by trapping small atoms like H, C, or N in the crystal lattices.
    *   **Alloy Formation:** Form alloys due to their similar atomic sizes.

### 2. Preparation, Properties, and Uses of K₂Cr₂O₇ and KMnO₄
*   **Potassium Dichromate (K₂Cr₂O₇):** A strong oxidizing agent, especially in acidic medium. Used in volumetric analysis.
*   **Potassium Permanganate (KMnO₄):** A very strong oxidizing agent. Its behavior depends on the pH of the solution (acidic, neutral, or alkaline). Used as a disinfectant and in titrations.

### 3. Inner Transition Elements (f-Block)
*   **Lanthanoids:**
    *   **Electronic Configuration:** [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s².
    *   **Oxidation States:** The most common and stable oxidation state is +3.
    *   **Lanthanoid Contraction:** The steady decrease in atomic and ionic radii with increasing atomic number due to the poor shielding effect of 4f electrons.
*   **Actinoids:**
    *   **Electronic Configuration:** [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s².
    *   **Oxidation States:** Show a much larger range of oxidation states than lanthanoids due to the comparable energies of 5f, 6d, and 7s orbitals. All actinoids are radioactive.
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
        "question": "Which of the following elements shows the maximum number of oxidation states?",
        "options": ["Sc", "Mn", "Fe", "Zn"],
        "answer": "Mn",
        "explanation": "Manganese (Mn) has the electronic configuration [Ar] 3d⁵ 4s², and it can exhibit oxidation states from +2 to +7 by using its 3d and 4s electrons."
    },
    {
        "question": "The lanthanoid contraction is responsible for the fact that:",
        "options": ["Zr and Y have about the same radius", "Zr and Hf have about the same radius", "Zr and Nb have similar oxidation states", "Zr and Zn are in the same group"],
        "answer": "Zr and Hf have about the same radius",
        "explanation": "The poor shielding by 4f electrons causes the atomic radius of hafnium to be nearly identical to that of zirconium."
    },
    {
        "question": "Which of the following ions is colorless in aqueous solution?",
        "options": ["Cu²⁺", "Ti³⁺", "Sc³⁺", "V³⁺"],
        "answer": "Sc³⁺",
        "explanation": "Sc³⁺ has an electronic configuration of [Ar] 3d⁰. Since it has no d-electrons, d-d transitions are not possible, and the ion is colorless."
    },
    {
        "question": "The catalytic activity of transition metals is attributed to their:",
        "options": ["High melting points", "Variable oxidation states and ability to form complexes", "High density", "Paramagnetic nature"],
        "answer": "Variable oxidation states and ability to form complexes",
        "explanation": "Their ability to adopt multiple oxidation states and form intermediate complexes allows them to provide an alternative reaction pathway with lower activation energy."
    },
    {
        "question": "The oxidation state of Cr in the dichromate ion (Cr₂O₇²⁻) is:",
        "options": ["+3", "+4", "+6", "+7"],
        "answer": "+6",
        "explanation": "Let the oxidation state of Cr be x. 2x + 7(-2) = -2. 2x - 14 = -2. 2x = 12. x = +6."
    }
],
  assertionReasons: [
    {
        "assertion": "Transition metals show variable oxidation states.",
        "reason": "The energy difference between (n-1)d and ns orbitals is very small.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Because the energy levels are close, electrons from both ns and (n-1)d orbitals can participate in bonding, leading to variable oxidation states."
    },
    {
        "assertion": "The atomic radii of the elements of the third transition series are virtually the same as those of the corresponding members of the second series.",
        "reason": "This is due to the effect of lanthanoid contraction.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The poor shielding by 4f electrons causes the radius to contract, counteracting the expected increase due to an additional shell."
    },
    {
        "assertion": "Aqueous Cu²⁺ ions are blue in colour.",
        "reason": "The colour is due to the absorption of light in the red region of the spectrum to promote a d-electron, and the transmitted light is blue.",
        "answer": "A",
        "explanation": "The reason correctly explains the phenomenon of colour in transition metal ions through d-d transition and complementary colour."
    },
    {
        "assertion": "Zn, Cd, and Hg are not considered as transition elements.",
        "reason": "They have a completely filled d-orbital in their ground state and common oxidation state.",
        "answer": "A",
        "explanation": "The reason provides the correct definition-based explanation for why these elements are often excluded from the transition series."
    },
    {
        "assertion": "KMnO₄ acts as an oxidizing agent in both acidic and alkaline media.",
        "reason": "The oxidation state of Mn in KMnO₄ is +7.",
        "answer": "B",
        "explanation": "Both statements are true. However, the fact that Mn is in its highest oxidation state (+7) is the reason it *can* act as an oxidizing agent, but it doesn't explain why it works in *both* media. The reactions and reduction potentials are different in each medium."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Lanthanoid", "b) Actinoid", "c) Transition metal", "d) d-block but not transition"],
        "column2": ["i) Iron (Fe)", "ii) Zinc (Zn)", "iii) Uranium (U)", "iv) Cerium (Ce)"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Colored ion", "b) Paramagnetic", "c) Diamagnetic", "d) Variable oxidation state"],
        "column2": ["i) Unpaired electrons present", "ii) Partially filled d-orbital", "iii) All electrons paired", "iv) d-d transition"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) K₂Cr₂O₇", "b) KMnO₄", "c) Lanthanoid Contraction", "d) Interstitial compounds"],
        "column2": ["i) Trapping of small atoms", "ii) Strong oxidizing agent (purple)", "iii) Similar radii of Zr and Hf", "iv) Strong oxidizing agent (orange)"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) Highest oxidation state of Mn", "b) Most common oxidation state of Lanthanoids", "c) Electronic configuration of Cu", "d) Electronic configuration of Cr"],
        "column2": ["i) +3", "ii) [Ar] 3d⁵ 4s¹", "iii) +7", "iv) [Ar] 3d¹⁰ 4s¹"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Mischmetal", "b) Coinage metal", "c) Catalyst in Haber's process", "d) Radioactive f-block element"],
        "column2": ["i) Iron", "ii) Promethium", "iii) An alloy of lanthanoid metals", "iv) Copper"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};
