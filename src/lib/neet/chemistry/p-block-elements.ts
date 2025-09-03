
import type { NeetModule } from '@/lib/types';

export const pBlockElements: NeetModule = {
  id: 'chemistry-p-block-elements',
  title: 'p-Block Elements',
  chapter: 'p-Block Elements',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Introduction to p-Block Elements (Groups 13 to 18)

*   **Definition:** Elements in which the last electron enters the outermost p orbital. They include metals, non-metals, and metalloids.
*   **General Electronic Configuration:** ns² np¹⁻⁶.
*   **General Trends:**
    *   **Across a Period (Left to Right):** Atomic size decreases, ionization enthalpy and electronegativity increase.
    *   **Down a Group:** Atomic size increases, ionization enthalpy and electronegativity decrease.
*   **Unique Behaviour of the First Element:** The first element of each group (B, C, N, O, F) shows anomalous properties due to its small size, high electronegativity, high ionization enthalpy, and absence of d-orbitals.

### 2. Group 13: The Boron Family
*   **Configuration:** ns² np¹
*   **Properties:** Boron is a non-metal, others are metals. Show +3 and +1 oxidation states. Stability of +1 state increases down the group (**Inert Pair Effect**). Boron compounds are electron-deficient (Lewis acids).

### 3. Group 14: The Carbon Family
*   **Configuration:** ns² np²
*   **Properties:** Carbon is a non-metal, Si & Ge are metalloids, Sn & Pb are metals. Show +4 and +2 oxidation states. Stability of +2 state increases down the group. **Catenation** (self-linking) is maximum for carbon. Carbon shows allotropy (diamond, graphite, fullerenes).

### 4. Group 15: The Nitrogen Family
*   **Configuration:** ns² np³
*   **Properties:** N & P are non-metals, As & Sb are metalloids, Bi is a metal. Show a wide range of oxidation states from -3 to +5. N₂ is a diatomic gas with a triple bond, making it inert. Phosphorus shows allotropy (white, red, black).

### 5. Group 16: The Oxygen Family (Chalcogens)
*   **Configuration:** ns² np⁴
*   **Properties:** O, S, Se are non-metals, Te is a metalloid, Po is a radioactive metal. Show -2, +2, +4, +6 oxidation states. Oxygen is a diatomic gas (O₂), others are solids. Ozone (O₃) is an important allotrope of oxygen.

### 6. Group 17: The Halogen Family
*   **Configuration:** ns² np⁵
*   **Properties:** Highly reactive non-metals. They have high electronegativity and high negative electron gain enthalpy. Show -1, +1, +3, +5, +7 oxidation states (except F, which shows only -1).

### 7. Group 18: The Noble Gases
*   **Configuration:** ns² np⁶ (except He: 1s²)
*   **Properties:** Have completely filled valence shells, making them very stable and unreactive. They have very high ionization enthalpies and large positive electron gain enthalpies. Heavier noble gases (Kr, Xe) can form compounds with highly electronegative elements like F and O.
`,
  workedExamples: [
    {
        problem: '`PCl₅` is known, but `NCl₅` is not. Why?',
        solution: 'Nitrogen (N) is in the second period and has only s and p orbitals in its valence shell. It does not have vacant d-orbitals to expand its octet. Therefore, it can only form a maximum of four covalent bonds. Phosphorus (P) is in the third period and has vacant 3d-orbitals. It can promote one of its 3s electrons to a 3d orbital, making five unpaired electrons available for bonding, thus forming `PCl₅`.'
    },
    {
        problem: 'Why is `Bi(V)` a stronger oxidizing agent than `Sb(V)`?',
        solution: 'This is due to the **Inert Pair Effect**. For heavier p-block elements, the ns² electrons are more reluctant to participate in bonding. Therefore, the +3 oxidation state is more stable than the +5 state for Bi. As a result, `Bi(V)` has a strong tendency to get reduced to the more stable `Bi(III)` state, making it a strong oxidizing agent.'
    },
    {
        problem: 'Explain why the bond angle in `NH₃` (107.8°) is greater than in `H₂O` (104.5°).',
        solution: 'Both N in `NH₃` and O in `H₂O` are sp³ hybridized. According to VSEPR theory, the geometry is determined by the total number of electron pairs. `NH₃` has 3 bond pairs and 1 lone pair. `H₂O` has 2 bond pairs and 2 lone pairs. The repulsion order is: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair. Since `H₂O` has two lone pairs, the lp-lp repulsion is stronger, pushing the bonds closer together and reducing the bond angle more significantly than the single lone pair in `NH₃`.'
    }
  ],
  mcqs: [
    {
        "question": "Which of the following elements shows the most prominent inert pair effect?",
        "options": ["Al", "Ga", "In", "Tl"],
        "answer": "Tl",
        "explanation": "The inert pair effect, the reluctance of the ns² electrons to participate in bonding, is most significant for the heaviest elements in groups 13-16. Thallium (Tl) is the heaviest in Group 13."
    },
    {
        "question": "The allotrope of carbon that is a good conductor of electricity is:",
        "options": ["Diamond", "Graphite", "Fullerene", "Coal"],
        "answer": "Graphite",
        "explanation": "In graphite, each carbon is sp² hybridized, and the remaining unhybridized p-orbital forms a delocalized π-electron system across the layers, allowing for electrical conductivity."
    },
    {
        "question": "Which of the following is the strongest oxidizing agent?",
        "options": ["F₂", "Cl₂", "Br₂", "I₂"],
        "answer": "F₂",
        "explanation": "Fluorine is the most electronegative element and has the highest standard reduction potential, making it the strongest oxidizing agent among the halogens."
    },
    {
        "question": "The shape of the `XeF₄` molecule is:",
        "options": ["Tetrahedral", "Square planar", "Pyramidal", "Linear"],
        "answer": "Square planar",
        "explanation": "In `XeF₄`, Xe undergoes sp³d² hybridization. There are 4 bond pairs and 2 lone pairs. To minimize repulsion, the two lone pairs occupy the axial positions, resulting in a square planar shape."
    },
    {
        "question": "Which gas is produced when copper reacts with dilute HNO₃?",
        "options": ["`NO`", "`N₂O`", "`NO₂`", "`N₂`"],
        "answer": "`NO`",
        "explanation": "Copper, being a less reactive metal, reacts with dilute nitric acid to produce nitric oxide (NO) gas."
    }
],
  assertionReasons: [
    {
        "assertion": "Nitrogen is less reactive than phosphorus.",
        "reason": "Nitrogen exists as a diatomic molecule with a strong `N≡N` triple bond.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The high bond enthalpy of the N≡N triple bond makes N₂ very inert and unreactive under normal conditions."
    },
    {
        "assertion": "Fluorine exhibits only a -1 oxidation state.",
        "reason": "Fluorine is the most electronegative element and has no d-orbitals in its valence shell.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. As the most electronegative element, it will always attract electrons, and its lack of d-orbitals prevents it from expanding its octet to show positive oxidation states."
    },
    {
        "assertion": "`H₂S` is more acidic than `H₂O`.",
        "reason": "The `S-H` bond is weaker and longer than the `O-H` bond.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Down a group, the bond dissociation enthalpy decreases. The weaker `S-H` bond can break more easily to release a proton, making `H₂S` more acidic than `H₂O`."
    },
    {
        "assertion": "Boron forms only covalent compounds.",
        "reason": "The sum of the first three ionization enthalpies of boron is very high.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The very high energy required to remove all three valence electrons prevents boron from forming the `B³⁺` ion, so it forms compounds by sharing electrons (covalent bonds)."
    },
    {
        "assertion": "Noble gases have very low boiling points.",
        "reason": "Being monatomic, they have only weak van der Waals forces of attraction.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The only intermolecular forces present are weak dispersion forces, which are easily overcome, resulting in low boiling points."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Haber's process", "b) Ostwald's process", "c) Contact process", "d) Deacon's process"],
        "column2": ["i) Production of H₂SO₄", "ii) Production of Cl₂", "iii) Production of NH₃", "iv) Production of HNO₃"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Group 13", "b) Group 15", "c) Group 17", "d) Group 18"],
        "column2": ["i) Halogens", "ii) Noble gases", "iii) Boron family", "iv) Nitrogen family (Pnictogens)"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Diamond", "b) Graphite", "c) `CO₂`", "d) `SiC`"],
        "column2": ["i) Linear", "ii) `sp²` hybridized", "iii) `sp³` hybridized", "iv) Hardest substance"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) Interhalogen compound", "b) Pseudohalogen", "c) Allotrope", "d) Inert pair effect"],
        "column2": ["i) Ozone (`O₃`)", "ii) Cyanogen (`(CN)₂`)", "iii) `ClF₃`", "iv) Stability of Pb²⁺"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) `H₃PO₂`", "b) `H₃PO₃`", "c) `H₃PO₄`", "d) `H₄P₂O₇`"],
        "column2": ["i) Tribasic", "ii) Tetrabasic", "iii) Monobasic", "iv) Dibasic"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};
