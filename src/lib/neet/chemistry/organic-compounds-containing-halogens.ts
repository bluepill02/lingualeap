
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingHalogens: NeetModule = {
  id: 'chemistry-organic-compounds-containing-halogens',
  title: 'Organic Compounds Containing Halogens',
  chapter: 'Organic Compounds Containing Halogens',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Organic Compounds Containing Halogens (வேதியியல் - ஹாலோஜன் கொண்ட கரிமச் சேர்மங்கள்)

# 2. Learning Objectives
1.  After this, you will be able to classify haloalkanes and haloarenes.
2.  After this, you will be able to describe the general methods of preparation for haloalkanes and haloarenes.
3.  After this, you will be able to explain the mechanisms of SN1 and SN2 nucleophilic substitution reactions.
4.  After this, you will be able to describe the uses and environmental effects of compounds like Chloroform, DDT, and Freons.

# 3. Prerequisites
– Understanding of hydrocarbons and IUPAC nomenclature.
– Knowledge of reaction intermediates (carbocations) and electronic effects (inductive effect, resonance).

# 4. Concept Overview
Imagine you have a simple string of jasmine flowers (மல்லிகைப் பூ) and you replace one of the flowers with a colourful hibiscus. You have just changed the property of the entire string. Similarly, when we replace a hydrogen atom in a hydrocarbon with a halogen atom (F, Cl, Br, I), we create a **haloalkane** or **haloarene**. These compounds are incredibly useful as solvents, refrigerants, and starting materials for making other organic compounds. This chapter focuses on their preparation and, most importantly, on a fundamental type of reaction in organic chemistry: **nucleophilic substitution (கருக்கவர் பதிலீட்டு வினை)**, where one group is kicked out and replaced by another.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Chemistry Volume 2, Chapter 10**. For NEET, the most important topics are the SN1 and SN2 mechanisms, their stereochemistry, and the difference in reactivity between haloalkanes and haloarenes.

### 5.1 Classification and Nomenclature
*   **Haloalkanes (R-X) & Haloarenes (Ar-X):** Classified as primary (1°), secondary (2°), or tertiary (3°) based on the carbon atom bonded to the halogen.

### 5.2 Preparation
*   **Haloalkanes:** From alcohols (using HX, PCl₅, SOCl₂), from hydrocarbons (free-radical halogenation).
*   **Haloarenes:** From aromatic hydrocarbons (electrophilic substitution), from diazonium salts (**Sandmeyer reaction**).

### 5.3 Nature of C-X Bond
*   The C-X bond is polar, with a partial positive charge on carbon and a partial negative charge on the halogen.

### 5.4 Nucleophilic Substitution Reactions (கருக்கவர் பதிலீட்டு வினைகள்)
*   **Mechanism:**
    *   **SN1 (Substitution Nucleophilic Unimolecular):** A two-step reaction involving the formation of a carbocation intermediate. The rate depends only on the haloalkane concentration. Favored by 3° halides. Results in **racemization**.
    *   **SN2 (Substitution Nucleophilic Bimolecular):** A single-step reaction involving a backside attack by the nucleophile. The rate depends on both haloalkane and nucleophile concentrations. Favored by 1° halides. Results in **inversion of configuration** (Walden inversion).
*   **Elimination Reactions:** Often compete with substitution, leading to the formation of alkenes (Saytzeff's rule).

### 5.5 Polyhalogen Compounds
*   **Chloroform (CHCl₃), Iodoform (CHI₃), Freons, DDT:** Their uses and significant environmental impacts (e.g., ozone layer depletion by Freons, bio-accumulation of DDT).

# 6. Worked Examples

**1. Easy:** Which compound in the pair CH₃CH₂CH₂Cl and CH₃CH(Cl)CH₃ will react faster in an SN2 reaction with OH⁻?
*   **Solution:** The rate of an SN2 reaction is inversely proportional to steric hindrance.
    *   CH₃CH₂CH₂Cl (1-chloropropane) is a primary (1°) halide.
    *   CH₃CH(Cl)CH₃ (2-chloropropane) is a secondary (2°) halide.
    *   Primary halides have less steric hindrance than secondary halides.
    *   Therefore, **CH₃CH₂CH₂Cl will react faster**.

**2. Medium:** Predict the major product of the dehydrohalogenation of 2-bromopentane.
*   **Solution:**
    *   Dehydrohalogenation is an elimination reaction that forms an alkene.
    *   Removing HBr from 2-bromopentane can form two possible products by removing a hydrogen from either C1 or C3.
    *   **Saytzeff's Rule:** In elimination reactions, the more substituted (more stable) alkene is the major product.
    *   Removing H from C1 gives Pent-1-ene.
    *   Removing H from C3 gives Pent-2-ene.
    *   Pent-2-ene is more substituted than Pent-1-ene.
    *   Therefore, the major product is **Pent-2-ene**.

**3. Must-Practice:** Why is chlorobenzene extremely less reactive than cyclohexyl chloride towards nucleophilic substitution?
*   **Solution:**
    1.  **Resonance:** The lone pair on the chlorine atom in chlorobenzene delocalizes into the benzene ring. This gives the C-Cl bond a partial double bond character, making it stronger and harder to break.
    2.  **Hybridization:** The carbon atom attached to Cl in chlorobenzene is sp² hybridized (more electronegative) compared to the sp³ hybridized carbon in cyclohexyl chloride. The sp² carbon holds the Cl more tightly.
    3.  **Instability of Phenyl Cation:** An SN1 reaction is not possible as the resulting phenyl cation is highly unstable.

# 7. Key Formulas & Diagrams

| Concept | Key Information |
| :--- | :--- |
| Reactivity (SN2) | 1° > 2° > 3° (due to steric hindrance) |
| Reactivity (SN1) | 3° > 2° > 1° (due to carbocation stability) |
| Saytzeff's Rule | More substituted alkene is the major product in elimination. |
`,
  workedExamples: [
    {
        problem: "Which compound in the pair CH₃CH₂CH₂Cl and CH₃CH(Cl)CH₃ will react faster in an SN2 reaction with OH⁻?",
        solution: "The SN2 reaction is favored by primary halides due to less steric hindrance. CH₃CH₂CH₂Cl (1-chloropropane) is a primary alkyl halide, while CH₃CH(Cl)CH₃ (2-chloropropane) is a secondary alkyl halide. The primary halide has less steric hindrance for the backside attack of the nucleophile. Therefore, **CH₃CH₂CH₂Cl will react faster**."
    },
    {
        problem: "Predict the major product of the dehydrohalogenation of 2-bromopentane.",
        solution: "Dehydrohalogenation of 2-bromopentane can form two possible alkenes: Pent-1-ene and Pent-2-ene. According to Saytzeff's rule, the more substituted alkene is the major product. Pent-2-ene is more substituted (has two alkyl groups on the double bond carbons) than Pent-1-ene (one alkyl group). Therefore, the major product is **Pent-2-ene**."
    },
    {
        problem: "Why is chlorobenzene less reactive than cyclohexyl chloride towards nucleophilic substitution?",
        solution: "Chlorobenzene is less reactive due to several factors: 1. **Resonance:** The lone pair on the chlorine atom in chlorobenzene delocalizes into the benzene ring, giving the C-Cl bond a partial double bond character, which is stronger and harder to break. 2. **Hybridization:** The carbon atom attached to the chlorine in chlorobenzene is sp² hybridized, which is more electronegative and holds the chlorine atom more tightly than the sp³ hybridized carbon in cyclohexyl chloride. 3. **Instability of phenyl cation:** The phenyl cation formed during an SN1 reaction would be highly unstable."
    }
  ],
  mcqs: [
    {
        "question": "The reaction of t-butyl bromide with aqueous NaOH follows which mechanism?",
        "options": ["`SN1`", "`SN2`", "`E1`", "`E2`"],
        "answer": "`SN1`",
        "explanation": "Tertiary alkyl halides (`t-butyl bromide`) favor the `SN1` mechanism because they can form stable tertiary carbocation intermediates."
    },
    {
        "question": "Which of the following compounds is used as a refrigerant?",
        "options": ["`DDT`", "`Chloroform`", "`Freon-12 (CCl₂F₂)`", "`Carbon tetrachloride`"],
        "answer": "`Freon-12 (CCl₂F₂)`",
        "explanation": "Freons (chlorofluorocarbons) like `CCl₂F₂` were widely used as refrigerants."
    },
    {
        "question": "The order of reactivity of alkyl halides towards an `SN2` reaction is:",
        "options": ["`3° > 2° > 1°`", "`1° > 2° > 3°`", "`2° > 1° > 3°`", "`1° > 3° > 2°`"],
        "answer": "`1° > 2° > 3°`",
        "explanation": "The `SN2` reaction rate is primarily governed by steric hindrance. Primary halides are the least hindered, making them the most reactive."
    },
    {
        "question": "The Sandmeyer reaction is used to prepare haloarenes from:",
        "options": ["Phenols", "Diazonium salts", "Anilines directly", "Alkylbenzenes"],
        "answer": "Diazonium salts",
        "explanation": "The Sandmeyer reaction involves treating a diazonium salt with a cuprous halide (`CuCl`, `CuBr`) to replace the diazonium group."
    },
    {
        "question": "Which of the following has the highest boiling point?",
        "options": ["`CH₃Cl`", "`CH₃Br`", "`CH₃I`", "`CH₂Cl₂`"],
        "answer": "`CH₃I`",
        "explanation": "For alkyl halides with the same alkyl group, the boiling point increases with the size and mass of the halogen atom due to stronger van der Waals forces. `CH₃I` has the highest molar mass."
    }
],
  assertionReasons: [
    {
        "assertion": "`SN1` reaction is carried out in the presence of a polar protic solvent.",
        "reason": "A polar protic solvent helps in stabilizing the carbocation intermediate formed in an `SN1` reaction.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Solvents like water or ethanol can solvate both the carbocation and the leaving group, stabilizing the transition state and favoring the `SN1` mechanism."
    },
    {
        "assertion": "The `C-X` bond in haloarenes is shorter and stronger than in haloalkanes.",
        "reason": "This is due to the partial double bond character of the `C-X` bond in haloarenes because of resonance.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Resonance delocalizes the lone pair of the halogen into the ring, making the `C-X` bond stronger and more difficult to break."
    },
    {
        "assertion": "A primary alkyl halide undergoes `SN2` reaction faster than a secondary alkyl halide.",
        "reason": "The `SN2` reaction involves a backside attack of the nucleophile which is hindered in secondary halides.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The presence of two alkyl groups in a secondary halide creates more steric hindrance compared to one in a primary halide, slowing down the `SN2` reaction."
    },
    {
        "assertion": "`DDT` is a non-biodegradable pollutant.",
        "reason": "It is resistant to metabolism by microorganisms.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The stability of the `DDT` molecule makes it resistant to natural degradation processes, allowing it to persist in the environment and bioaccumulate."
    },
    {
        "assertion": "`SN1` reactions are accompanied by racemization.",
        "reason": "The carbocation intermediate formed in an `SN1` reaction is planar.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The planar `sp²`-hybridized carbocation can be attacked by the nucleophile from either the front or the back with equal probability, leading to a racemic mixture of enantiomers."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) `SN1` reaction", "b) `SN2` reaction", "c) Wurtz reaction", "d) Sandmeyer reaction"],
        "column2": ["i) Inversion of configuration", "ii) Racemization", "iii) Preparation of haloarenes", "iv) Preparation of higher alkanes"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Chloroform", "b) Iodoform", "c) DDT", "d) Freon"],
        "column2": ["i) Insecticide", "ii) Refrigerant", "iii) Anesthetic", "iv) Antiseptic"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Primary halide", "b) Tertiary halide", "c) Allylic halide", "d) Vinylic halide"],
        "column2": ["i) Halogen on `sp²` carbon of C=C", "ii) Halogen on carbon next to C=C", "iii) Favors `SN2`", "iv) Favors `SN1`"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Finkelstein reaction", "b) Swarts reaction", "c) Dehydrohalogenation", "d) Halogenation"],
        "column2": ["i) Formation of alkene", "ii) Preparation of fluoroalkanes", "iii) Halogen exchange (NaI)", "iv) Free radical substitution"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) `CH₃F`", "b) `CH₃Cl`", "c) `CH₃Br`", "d) `CH₃I`"],
        "column2": ["i) Highest dipole moment", "ii) Highest boiling point", "iii) Best leaving group", "iv) Lowest bond energy"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    }
  ]
};

