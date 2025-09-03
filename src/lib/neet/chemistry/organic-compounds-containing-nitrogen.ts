
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingNitrogen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-nitrogen',
  title: 'Organic Compounds Containing Nitrogen',
  chapter: 'Organic Compounds Containing Nitrogen',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Organic Compounds Containing Nitrogen (வேதியியல் - நைட்ரஜனைக் கொண்ட கரிமச் சேர்மங்கள்)

# 2. Learning Objectives
1.  After this, you will be able to classify amines and write their IUPAC names.
2.  After this, you will be able to compare the basic strength of different amines.
3.  After this, you will be able to describe the preparation of diazonium salts.
4.  After this, you will be able to explain the importance of diazonium salts in synthesis, especially the Sandmeyer reaction.

# 3. Prerequisites
– Knowledge of organic nomenclature and functional groups.
– Understanding of basicity and electronic effects (inductive, resonance).

# 4. Concept Overview
Nitrogen is a vital element, a key component of the proteins that make up our bodies. This chapter deals with organic compounds containing nitrogen, focusing mainly on **Amines (அமீன்கள்)** and **Diazonium Salts (டையசோனியம் உப்புகள்)**. Amines are the organic 'bases' of chemistry, much like how Tulsi (துளசி) is a fundamental base in traditional Tamil medicine. We'll explore why they are basic and what makes some amines stronger bases than others. We'll then look at diazonium salts, which are incredibly versatile 'building blocks' in organic synthesis, allowing chemists to create a huge variety of other compounds.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Chemistry Volume 2, Chapter 13**. This is a very important chapter. Key areas for NEET are the basicity order of amines, the carbylamine test, and the various synthetic reactions of diazonium salts.

### 5.1 Amines (அமீன்கள்)
*   **Classification:** Primary (1°), Secondary (2°), Tertiary (3°).
*   **Preparation:** Reduction of nitro compounds, ammonolysis, reduction of nitriles, Hofmann bromamide degradation.
*   **Basicity of Amines (அமீன்களின் காரத்தன்மை):** Amines are basic due to the lone pair on the nitrogen atom.
    *   **Aliphatic amines vs. Ammonia:** Alkylamines are generally stronger bases than ammonia due to the +I effect of alkyl groups.
    *   **Aromatic amines vs. Ammonia:** Arylamines (like aniline) are much weaker bases than ammonia because the lone pair is delocalized into the benzene ring by resonance.
*   **Identification Tests:**
    *   **Hinsberg's Test:** To distinguish between 1°, 2°, and 3° amines.
    *   **Carbylamine Reaction:** A test for 1° amines only, which produce a foul-smelling isocyanide.

### 5.2 Diazonium Salts (டையசோனியம் உப்புகள்)
*   **Preparation (Diazotisation):** Formed by treating a primary aromatic amine with nitrous acid (NaNO₂ + cold HCl) at 0-5 °C.
*   **Synthetic Importance:** The diazonium group (-N₂⁺) is an excellent leaving group and can be easily replaced by other groups.
    *   **Sandmeyer Reaction:** Replacement by -Cl, -Br, -CN using a cuprous salt.
    *   **Gattermann Reaction:** Replacement by -Cl, -Br using copper powder.
    *   **Replacement by -I, -F, -H, -OH.**
    *   **Coupling Reactions:** Reaction with phenols or anilines to form brightly colored **azo dyes**.

# 6. Worked Examples

**1. Easy:** Arrange the following in increasing order of their basic strength in the gaseous phase: \`NH₃\`, \`CH₃NH₂\`, \`(CH₃)₂NH\`, \`(CH₃)₃N\`.
*   **Solution:**
    *   In the gaseous phase, only the inductive effect (+I effect) matters. More alkyl groups mean a stronger +I effect, which increases electron density on the nitrogen, making it more basic.
    *   Therefore, the order is: **\`NH₃ < CH₃NH₂ < (CH₃)₂NH < (CH₃)₃N\`**.

**2. Medium:** How will you distinguish between aniline and N-methylaniline?
*   **Solution:** Use the **Carbylamine Test**.
    *   **Aniline (C₆H₅NH₂)** is a primary amine. When heated with chloroform (CHCl₃) and alcoholic KOH, it will produce a foul-smelling phenyl isocyanide.
    *   **N-methylaniline (C₆H₅NHCH₃)** is a secondary amine. It will not give this test.

**3. Must-Practice:** How will you convert aniline to chlorobenzene?
*   **Solution:** This is a two-step process:
    1.  **Diazotisation:** React aniline with NaNO₂ and dilute HCl at 0-5°C. This forms benzenediazonium chloride ([C₆H₅N₂]⁺Cl⁻).
        \\[ C_6H_5NH_2 + NaNO_2 + 2HCl \\xrightarrow{0-5^\\circ C} [C_6H_5N_2]^+Cl^- + NaCl + 2H_2O \\]
    2.  **Sandmeyer Reaction:** Treat the resulting diazonium salt with cuprous chloride (CuCl) dissolved in HCl. The diazonium group is replaced by -Cl.
        \\[ [C_6H_5N_2]^+Cl^- \\xrightarrow{CuCl/HCl} C_6H_5Cl + N_2 \\]

# 7. Key Formulas & Diagrams

| Concept | Key Information |
| :--- | :--- |
| Basicity Order (Aqueous) | (C₂H₅)₂NH > C₂H₅NH₂ > (C₂H₅)₃N > NH₃ |
| Basicity Order (Gas) | 3° > 2° > 1° > NH₃ |
| Carbylamine Test | 1° Amine + CHCl₃ + KOH → Foul smell (Isocyanide) |
| Sandmeyer Reaction | ArN₂⁺X⁻ + CuY → ArY + N₂ (Y=Cl, Br, CN) |
`,
  workedExamples: [
    {
        problem: "Arrange the following in increasing order of their basic strength in aqueous solution: C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, NH₃.",
        solution: "In aqueous solution, the basicity of amines is determined by the interplay of +I effect (inductive effect), steric hindrance, and solvation (hydrogen bonding with water). The +I effect increases electron density on N, increasing basicity. Steric hindrance and better solvation of the conjugate acid stabilize it, also affecting basicity. The combined effect for ethylamines results in the order: **NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH**."
    },
    {
        problem: "An organic compound 'A' on treatment with Br₂ and KOH gives a compound 'B'. 'B' on treatment with CHCl₃ and alcoholic KOH gives a foul-smelling compound 'C'. Identify A, B, and C.",
        solution: "This is a sequence of named reactions. 1. The reaction with Br₂ and KOH to give an amine is the **Hofmann Bromamide Degradation**. This means 'A' is an amide (R-CO-NH₂). 2. The product 'B' is an amine (R-NH₂) with one less carbon than 'A'. 3. The reaction of the amine 'B' with CHCl₃ and alcoholic KOH to give a foul-smelling compound 'C' is the **Carbylamine Test**, which is positive for primary amines. 'C' is an isocyanide (R-NC). So, A is an amide, B is a primary amine, and C is an isocyanide."
    },
    {
        problem: "How will you convert aniline to chlorobenzene?",
        solution: "This can be done in two steps: 1. **Diazotisation:** Treat aniline with nitrous acid (NaNO₂ + cold dilute HCl) at 0-5 °C to form benzenediazonium chloride ([C₆H₅N₂]⁺Cl⁻). 2. **Sandmeyer Reaction:** Treat the benzenediazonium chloride with cuprous chloride (CuCl) dissolved in HCl. This will replace the diazonium group with -Cl, forming chlorobenzene. C₆H₅N₂⁺Cl⁻ --(CuCl/HCl)--> C₆H₅Cl + N₂."
    }
  ],
  mcqs: [
    {
        "question": "Which of the following is a primary amine?",
        "options": ["Aniline", "Diphenylamine", "Trimethylamine", "N-methylaniline"],
        "answer": "Aniline",
        "explanation": "Aniline (`C₆H₅NH₂`) has one aryl group attached to the nitrogen atom, making it a primary amine."
    },
    {
        "question": "The reaction of an amide with Br₂ and aqueous NaOH to give a primary amine with one less carbon atom is called:",
        "options": ["Gabriel synthesis", "Hofmann bromamide degradation", "Carbylamine reaction", "Sandmeyer reaction"],
        "answer": "Hofmann bromamide degradation",
        "explanation": "This is the definition of the Hofmann bromamide degradation reaction, a method for preparing primary amines."
    },
    {
        "question": "Which of the following tests is used to distinguish between primary, secondary, and tertiary amines?",
        "options": ["Carbylamine test", "Tollen's test", "Fehling's test", "Hinsberg's test"],
        "answer": "Hinsberg's test",
        "explanation": "Hinsberg's test uses benzenesulphonyl chloride to distinguish the three types of amines based on the solubility of the resulting sulphonamide."
    },
    {
        "question": "The conversion of aniline to benzenediazonium chloride is known as:",
        "options": ["Diazotisation", "Coupling", "Nitration", "Sulphonation"],
        "answer": "Diazotisation",
        "explanation": "Diazotisation is the process of converting a primary aromatic amine into a diazonium salt using nitrous acid at low temperatures."
    },
    {
        "question": "Which of the following is the most basic in the gaseous phase?",
        "options": ["`NH₃`", "`CH₃NH₂`", "`(CH₃)₂NH`", "`(CH₃)₃N`"],
        "answer": "`(CH₃)₃N`",
        "explanation": "In the gaseous phase, only the inductive effect (+I effect) is significant. The tertiary amine has three methyl groups, which have the strongest combined +I effect, making it the most basic."
    }
],
  assertionReasons: [
    {
        "assertion": "Aniline is a weaker base than ammonia.",
        "reason": "The lone pair of electrons on the nitrogen atom in aniline is delocalized into the benzene ring.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Due to resonance, the lone pair on nitrogen is less available for donation to a proton, making aniline a weaker base."
    },
    {
        "assertion": "Gabriel phthalimide synthesis is used for the preparation of primary aromatic amines.",
        "reason": "Aryl halides do not undergo nucleophilic substitution with the anion formed by phthalimide.",
        "answer": "D",
        "explanation": "The assertion is false; this method is used for primary aliphatic amines. The reason is true and explains why it cannot be used for aromatic amines."
    },
    {
        "assertion": "The carbylamine test is given only by primary amines.",
        "reason": "The reaction involves the formation of a foul-smelling isocyanide.",
        "answer": "B",
        "explanation": "Both statements are true. The formation of an isocyanide is the characteristic result of the test, and only primary amines give this reaction. However, the reason describes the outcome, not the chemical principle explaining the specificity."
    },
    {
        "assertion": "Diazonium salts are stable only at low temperatures (0-5 °C).",
        "reason": "Above this temperature, the diazonium salt decomposes to form phenol and nitrogen gas.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The instability of the diazonium salt at higher temperatures is why diazotisation must be carried out in an ice bath."
    },
    {
        "assertion": "The order of basicity of amines in the gaseous state is 3° > 2° > 1° > NH₃.",
        "reason": "The basicity is determined by the electron-donating inductive effect of the alkyl groups.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. In the gas phase, where solvation effects are absent, the inductive effect is the dominant factor determining basicity."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Carbylamine test", "b) Hofmann bromamide reaction", "c) Sandmeyer reaction", "d) Coupling reaction"],
        "column2": ["i) Formation of azo dye", "ii) Amide → Amine", "iii) Isocyanide formation", "iv) Diazonium salt → Haloarene"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Primary amine", "b) Secondary amine", "c) Tertiary amine", "d) Diazonium salt"],
        "column2": ["i) `(C₂H₅)₂NH`", "ii) `C₆H₅N₂⁺Cl⁻`", "iii) `C₂H₅NH₂`", "iv) `(CH₃)₃N`"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) `R-NO₂ → R-NH₂`", "b) `R-CN → R-CH₂-NH₂`", "c) `Ar-NH₂ → Ar-N₂⁺X⁻`", "d) `R-CO-NH₂ → R-NH₂`"],
        "column2": ["i) Diazotisation", "ii) Hofmann reaction", "iii) Reduction", "iv) Reduction"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Hinsberg's reagent", "b) Tollen's reagent", "c) Lucas reagent", "d) Fehling's solution"],
        "column2": ["i) Test for aldehydes", "ii) Distinguishing alcohols", "iii) Distinguishing amines", "iv) Test for aldehydes"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Strongest base in aqueous solution (ethyl)", "b) Weakest base", "c) Gaseous phase basicity order", "d) Aromatic amine"],
        "column2": ["i) `Aniline`", "ii) `(C₂H₅)₂NH`", "iii) `NH₃`", "iv) `3° > 2° > 1°`"],
        "answer": "a-ii, b-i, c-iv, d-i"
    }
  ]
};
