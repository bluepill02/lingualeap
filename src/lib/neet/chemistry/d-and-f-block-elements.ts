
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
    },
    {
        "question": "Which of the following is not considered a transition element?",
        "options": ["Fe", "Cu", "Ag", "Zn"],
        "answer": "Zn",
        "explanation": "Zinc (Zn) has a completely filled d-orbital (3d¹⁰) in both its ground state and its common oxidation state (+2), so it is not considered a transition element."
    },
    {
        "question": "The general electronic configuration of actinoids is:",
        "options": ["[Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²", "[Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²", "[Xe] 4f¹⁻¹⁴ 5d¹⁰ 6s²", "[Rn] 5f⁰⁻¹ 6d¹⁻¹⁰ 7s²"],
        "answer": "[Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²",
        "explanation": "Actinoids are the 5f-series elements, following Radon (Rn)."
    },
    {
        "question": "The magnetic moment is calculated using the formula μ = √[n(n+2)]. What does 'n' represent?",
        "options": ["Number of protons", "Number of neutrons", "Number of unpaired electrons", "Principal quantum number"],
        "answer": "Number of unpaired electrons",
        "explanation": "The spin-only magnetic moment depends on the number of unpaired electrons in the d-orbitals of the transition metal ion."
    },
    {
        "question": "Alloys are formed by transition metals because they:",
        "options": ["Are highly reactive", "Have similar atomic sizes", "Are soft metals", "Have low melting points"],
        "answer": "Have similar atomic sizes",
        "explanation": "Due to their similar atomic sizes, atoms of one transition metal can easily replace atoms of another in the crystal lattice to form substitutional alloys."
    },
    {
        "question": "Which statement is incorrect about potassium permanganate (KMnO₄)?",
        "options": ["It is a strong oxidizing agent", "Its aqueous solution is purple", "It is used in the titration of oxalic acid", "It acts as an oxidizing agent only in acidic medium"],
        "answer": "It acts as an oxidizing agent only in acidic medium",
        "explanation": "KMnO₄ is a versatile oxidizing agent that works in acidic, alkaline, and neutral media, though its oxidizing power is strongest in acidic medium."
    },
    {
        "question": "The most common oxidation state of lanthanoids is:",
        "options": ["+2", "+3", "+4", "+1"],
        "answer": "+3",
        "explanation": "+3 is the most stable and common oxidation state for all lanthanoid elements."
    },
    {
        "question": "Transition metals form interstitial compounds because:",
        "options": ["They have vacant d-orbitals", "They have high density", "They have small atoms like H, C, N that can fit into the voids in their crystal lattice", "They are highly malleable"],
        "answer": "They have small atoms like H, C, N that can fit into the voids in their crystal lattice",
        "explanation": "The trapping of small non-metal atoms in the interstitial voids of the transition metal lattice leads to the formation of interstitial compounds."
    },
    {
        "question": "Which actinoid is used as fuel in nuclear reactors?",
        "options": ["Thorium", "Uranium", "Plutonium", "Both Uranium and Plutonium"],
        "answer": "Both Uranium and Plutonium",
        "explanation": "Uranium-235 is a fissile fuel, and Plutonium-239, produced from Uranium-238, is also used as a nuclear fuel."
    },
    {
        "question": "The colour of transition metal ions is due to:",
        "options": ["Charge transfer", "d-d transitions", "Polarisation", "Large ionic size"],
        "answer": "d-d transitions",
        "explanation": "The absorption of light energy to promote an electron from a lower energy d-orbital to a higher energy d-orbital (d-d transition) is responsible for the colour of most transition metal complexes."
    },
    {
        "question": "Which of the following lanthanoid ions is diamagnetic?",
        "options": ["Ce⁴⁺", "Sm²⁺", "Eu²⁺", "Yb²⁺"],
        "answer": "Yb²⁺",
        "explanation": "Yb (Z=70) is [Xe] 4f¹⁴ 6s². Yb²⁺ is [Xe] 4f¹⁴, which has a completely filled f-orbital and no unpaired electrons, making it diamagnetic. Ce⁴⁺ is 4f⁰, also diamagnetic, but Yb²⁺ is a more common example of a filled shell."
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
    },
    {
        "assertion": "Actinoids exhibit a greater range of oxidation states than lanthanoids.",
        "reason": "The 5f, 6d, and 7s levels have comparable energies in actinoids.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The close energies of these orbitals allow for the participation of more electrons in bonding, leading to a wider range of oxidation states."
    },
    {
        "assertion": "Transition metals are good catalysts.",
        "reason": "They have high melting and boiling points.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is also a true property of transition metals, but it does not explain their catalytic activity. Catalytic activity is due to variable oxidation states and the ability to provide a surface for adsorption."
    },
    {
        "assertion": "The chemistry of all lanthanoids is very similar.",
        "reason": "Lanthanoids have a similar outer electronic configuration (6s²) and show a common +3 oxidation state.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The electrons are added to the inner 4f shell, leaving the outer shell configuration almost unchanged, which leads to very similar chemical properties."
    },
    {
        "assertion": "Most transition metal ions are paramagnetic.",
        "reason": "They contain unpaired electrons in their d-orbitals.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The presence of unpaired electrons gives rise to a net magnetic moment, causing paramagnetism."
    },
    {
        "assertion": "In the titration of FeSO₄ with KMnO₄ in acidic medium, HCl is not used to acidify the solution.",
        "reason": "KMnO₄ oxidizes HCl to Cl₂ gas.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The oxidation of HCl would interfere with the titration, leading to an incorrect result for the amount of FeSO₄."
    },
    {
        "assertion": "Transition metals have high enthalpies of atomization.",
        "reason": "They have a large number of unpaired electrons, leading to strong metallic bonding.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The strong interatomic bonding due to the participation of both ns and (n-1)d electrons results in a high enthalpy of atomization."
    },
    {
        "assertion": "The second ionization enthalpy of copper is exceptionally high.",
        "reason": "To form Cu²⁺, an electron has to be removed from the very stable, fully-filled 3d¹⁰ configuration of Cu⁺.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Removing an electron from a stable, fully-filled d-orbital requires a large amount of energy."
    },
    {
        "assertion": "Actinoid contraction is greater from element to element than lanthanoid contraction.",
        "reason": "The 5f electrons have a poorer shielding effect than 4f electrons.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The more diffuse nature and poorer shielding of 5f orbitals result in a stronger effective nuclear charge and a greater contraction across the series."
    },
    {
        "assertion": "The chromate ion (CrO₄²⁻) and dichromate ion (Cr₂O₇²⁻) exist in equilibrium.",
        "reason": "The interconversion is dependent on the pH of the solution.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. In acidic solution, chromate ions convert to dichromate ions, and in basic solution, dichromate ions convert back to chromate ions."
    },
    {
        "assertion": "The melting point of Mn is abnormally low in the first transition series.",
        "reason": "Manganese has a stable half-filled d-orbital (3d⁵), which results in weaker metallic bonding.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The stability of the 3d⁵ configuration reduces the delocalization of electrons into the metallic bond, weakening it and lowering the melting point compared to its neighbors."
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
    },
    {
        "column1": ["a) Highest density", "b) Lowest melting point", "c) Highest melting point", "d) Highest oxidation state"],
        "column2": ["i) Mn", "ii) Os, Ir", "iii) W, Cr", "iv) Os, Ru"],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": ["a) Cr³⁺", "b) Mn²⁺", "c) Fe³⁺", "d) Ni²⁺"],
        "column2": ["i) 5 unpaired electrons", "ii) 2 unpaired electrons", "iii) 3 unpaired electrons", "iv) 5 unpaired electrons"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) CrO₄²⁻ (Chromate)", "b) MnO₄⁻ (Permanganate)", "c) Cr₂O₇²⁻ (Dichromate)", "d) MnO₄²⁻ (Manganate)"],
        "column2": ["i) Orange", "ii) Green", "iii) Yellow", "iv) Purple"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Zn²⁺", "b) Cu⁺", "c) Ti⁴⁺", "d) V⁵⁺"],
        "column2": ["i) 3d⁰ configuration", "ii) 3d¹⁰ configuration", "iii) 3d⁰ configuration", "iv) 3d¹⁰ configuration"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Actinoid contraction", "b) Variable valency", "c) d-block elements", "d) f-block elements"],
        "column2": ["i) Inner transition elements", "ii) Poorer shielding of 5f electrons", "iii) Transition elements", "iv) Partially filled (n-1)d orbitals"],
        "answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        "column1": ["a) Alloy formation", "b) Complex formation", "c) Coloured ions", "d) Paramagnetism"],
        "column2": ["i) Presence of unpaired electrons", "ii) d-d transition", "iii) Similar atomic radii", "iv) Small size and high charge"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Oxidation state of Mn in MnO₂", "b) Oxidation state of Cr in CrO₅", "c) Oxidation state of Fe in Fe₃O₄", "d) Oxidation state of S in Caro's acid"],
        "column2": ["i) +6", "ii) +8/3", "iii) +6", "iv) +4"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Gadolinium (Gd)", "b) Lutetium (Lu)", "c) Cerium (Ce)", "d) Europium (Eu)"],
        "column2": ["i) 4f¹ configuration", "ii) 4f¹⁴ configuration", "iii) 4f⁷ configuration", "iv) 4f⁷5d¹ configuration"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Amphoteric oxide", "b) Acidic oxide", "c) Basic oxide", "d) Neutral oxide"],
        "column2": ["i) Mn₂O₇", "ii) MnO", "iii) CO", "iv) V₂O₅"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Number of d-electrons in Fe²⁺", "b) Number of d-electrons in Cr³⁺", "c) Number of d-electrons in Cu²⁺", "d) Number of d-electrons in Zn²⁺"],
        "column2": ["i) 9", "ii) 3", "iii) 10", "iv) 6"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    }
  ]
};
