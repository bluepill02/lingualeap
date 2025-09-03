
import type { NeetModule } from '@/lib/types';

export const pBlockElements: NeetModule = {
  id: 'chemistry-p-block-elements',
  title: 'p-Block Elements',
  chapter: 'p-Block Elements',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – p-Block Elements (வேதியியல் - p-தொகுதி தனிமங்கள்)

# 2. Learning Objectives
1.  After this, you will be able to explain the general trends in properties for p-block elements.
2.  After this, you will be able to describe the anomalous behavior of the first element in each group.
3.  After this, you will be able to explain the inert pair effect and its consequences.
4.  After this, you will be able to discuss the preparation, properties, and structures of important compounds like ammonia, nitric acid, ozone, and interhalogens.

# 3. Prerequisites
– Good understanding of periodic classification and periodic trends.
– Knowledge of chemical bonding, hybridization, and VSEPR theory.

# 4. Concept Overview
The p-block elements are a diverse group, like the variety of shops on a busy street in a Tamil town. You can find everything from a simple metal shop (like Aluminium) to stores selling essential gases (like Oxygen and Nitrogen) and highly reactive elements (like Chlorine). This chapter covers a wide range of chemistry, exploring Groups 13 to 18. We'll examine trends, unique properties like the **Inert Pair Effect (மந்த இணை விளைவு)**, and the chemistry of fundamentally important compounds like ammonia (used in fertilizers) and sulphuric acid (the 'king of chemicals').

# 5. Detailed Explanation
This unit covers the **Tamil Nadu State Board Class 11 Chemistry (Chapters 3 & 4)** and **Class 12 Chemistry (Chapters 2 & 3)**. It is a vast but high-scoring area in NEET. Focus on the trends, structures of oxoacids, and properties of important compounds.

### 5.1 General Introduction
*   **Electronic Configuration:** ns² np¹⁻⁶.
*   **General Trends:** Properties vary significantly, including metals, non-metals, and metalloids.

### 5.2 Group-wise Study
*   **Group 13 (Boron Family):** ns² np¹. Boron shows anomalous properties. Trend of +3 and +1 oxidation states. Boron compounds are electron-deficient.
*   **Group 14 (Carbon Family):** ns² np². Catenation and allotropy (diamond, graphite) are key features of carbon. Trend of +4 and +2 oxidation states.
*   **Group 15 (Nitrogen Family):** ns² np³. Wide range of oxidation states. N₂ is inert due to a strong triple bond. Key compounds: **Ammonia (NH₃)** (Haber's process) and **Nitric Acid (HNO₃)** (Ostwald's process).
*   **Group 16 (Oxygen Family):** ns² np⁴. Key compounds: **Ozone (O₃)** and **Sulphuric Acid (H₂SO₄)** (Contact process).
*   **Group 17 (Halogen Family):** ns² np⁵. Highly reactive non-metals with high electronegativity. Forms interhalogen compounds (e.g., ClF₃, BrF₅).
*   **Group 18 (Noble Gases):** ns² np⁶. Generally unreactive due to stable electron configurations. Heavier gases like Xenon can form compounds (e.g., XeF₂, XeF₄, XeOF₄).

# 6. Worked Examples

**1. Easy:** `PCl₅` is known, but `NCl₅` is not. Why?
*   **Solution:** Nitrogen is in the second period and lacks vacant d-orbitals. It cannot expand its octet to form five bonds. Phosphorus is in the third period and has vacant 3d-orbitals, allowing it to promote an electron and form five bonds.

**2. Medium:** Why is `Bi(V)` a stronger oxidizing agent than `Sb(V)`?
*   **Solution:** This is due to the **Inert Pair Effect**. Down Group 15, the stability of the +5 oxidation state decreases while the +3 state becomes more stable. For Bismuth, the +3 state is much more stable than the +5 state. Therefore, `Bi(V)` has a strong tendency to accept electrons and get reduced to the more stable `Bi(III)`, making it a powerful oxidizing agent.

**3. Must-Practice:** Explain why the bond angle in `NH₃` (107.8°) is greater than in `H₂O` (104.5°).
*   **Solution:**
    *   In both molecules, the central atom is sp³ hybridized.
    *   `NH₃` has 3 bond pairs and 1 lone pair.
    *   `H₂O` has 2 bond pairs and 2 lone pairs.
    *   According to VSEPR theory, the repulsion order is: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair.
    *   Since `H₂O` has two lone pairs, the strong lp-lp repulsion pushes the bonds closer together, reducing the bond angle more significantly than the single lone pair in `NH₃`.

# 7. Key Formulas & Diagrams

| Concept | Structure/Reaction |
| :--- | :--- |
| Haber's Process | \\(N_2 + 3H_2 \\rightleftharpoons 2NH_3\\) |
| Ostwald's Process | \\(NH_3 \\rightarrow NO \\rightarrow NO_2 \\rightarrow HNO_3\\) |
| Contact Process | \\(S \\rightarrow SO_2 \\rightarrow SO_3 \\rightarrow H_2S_2O_7 \\rightarrow H_2SO_4\\) |
| VSEPR Shapes | `XeF₄` (Square Planar), `SF₄` (See-saw) |
`,
  workedExamples: [
    {
        problem: "`PCl₅` is known, but `NCl₅` is not. Why?",
        solution: "Nitrogen (N) is in the second period and has only s and p orbitals in its valence shell. It does not have vacant d-orbitals to expand its octet. Therefore, it can only form a maximum of four covalent bonds. Phosphorus (P) is in the third period and has vacant 3d-orbitals. It can promote one of its 3s electrons to a 3d orbital, making five unpaired electrons available for bonding, thus forming `PCl₅`."
    },
    {
        problem: "Why is `Bi(V)` a stronger oxidizing agent than `Sb(V)`?",
        solution: "This is due to the **Inert Pair Effect**. For heavier p-block elements, the ns² electrons are more reluctant to participate in bonding. Therefore, the +3 oxidation state is more stable than the +5 state for Bi. As a result, `Bi(V)` has a strong tendency to get reduced to the more stable `Bi(III)` state, making it a strong oxidizing agent."
    },
    {
        problem: "Explain why the bond angle in `NH₃` (107.8°) is greater than in `H₂O` (104.5°).",
        solution: "Both N in `NH₃` and O in `H₂O` are sp³ hybridized. According to VSEPR theory, the geometry is determined by the total number of electron pairs. `NH₃` has 3 bond pairs and 1 lone pair. `H₂O` has 2 bond pairs and 2 lone pairs. The repulsion order is: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair. Since `H₂O` has two lone pairs, the lp-lp repulsion is stronger, pushing the bonds closer together and reducing the bond angle more significantly than the single lone pair in `NH₃`."
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

