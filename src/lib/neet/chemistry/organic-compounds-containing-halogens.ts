
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingHalogens: NeetModule = {
  id: 'chemistry-organic-compounds-containing-halogens',
  title: 'Organic Compounds Containing Halogens',
  chapter: 'Organic Compounds Containing Halogens',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Methods of Preparation, Properties, and Reactions
*   **Haloalkanes:**
    *   **Preparation:** From alcohols, from hydrocarbons (free-radical halogenation), from alkenes (addition of HX).
    *   **Properties:** Physical properties like boiling point, solubility.
    *   **Reactions:** Nucleophilic substitution, elimination reactions.
*   **Haloarenes:**
    *   **Preparation:** From hydrocarbons by electrophilic substitution, from diazonium salts (Sandmeyer reaction).
    *   **Properties:** Physical properties.
    *   **Reactions:** Nucleophilic substitution (less reactive), electrophilic substitution (halogen is o,p-directing but deactivating).

### 2. Nature of C-X bond (C-X பிணைப்பின் தன்மை)
*   The carbon-halogen bond is polar due to the higher electronegativity of the halogen atom. The carbon atom bears a partial positive charge, and the halogen atom bears a partial negative charge.

### 3. Mechanisms of Substitution Reactions (பதிலீட்டு வினைகளின் வினைவழிமுறை)
*   **SN1 Reaction:** Two-step mechanism, formation of a carbocation intermediate. Favored by tertiary halides. Racemization occurs.
*   **SN2 Reaction:** Single-step mechanism, backside attack of the nucleophile, inversion of configuration (Walden inversion). Favored by primary halides.

### 4. Uses and Environmental Effects (பயன்கள் மற்றும் சுற்றுச்சூழல் விளைவுகள்)
*   **Chloroform (குளோரோஃபார்ம் - CHCl₃):** Formerly used as an anesthetic.
*   **Iodoform (ஐயோடோஃபார்ம் - CHI₃):** Used as an antiseptic.
*   **Freons (ஃபிரீயான்கள்):** Chlorofluorocarbons used as refrigerants and propellants. Cause ozone layer depletion.
*   **DDT (Dichlorodiphenyltrichloroethane):** A powerful insecticide, but it is non-biodegradable and accumulates in the food chain.
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
        solution: "Chlorobenzene is less reactive due to several factors: 1. **Resonance:** The lone pair on the chlorine atom delocalizes into the benzene ring, giving the C-Cl bond a partial double bond character, which is stronger and harder to break. 2. **Hybridization:** The carbon atom attached to the chlorine in chlorobenzene is sp² hybridized, which is more electronegative and holds the chlorine atom more tightly than the sp³ hybridized carbon in cyclohexyl chloride. 3. **Instability of phenyl cation:** The phenyl cation formed during an SN1 reaction would be highly unstable."
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
