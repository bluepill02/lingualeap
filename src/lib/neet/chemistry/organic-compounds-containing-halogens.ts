
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingHalogens: NeetModule = {
  id: 'chemistry-organic-compounds-containing-halogens',
  title: 'Organic Compounds Containing Halogens',
  chapter: 'Organic Compounds Containing Halogens',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Haloalkanes and Haloarenes (ஹாலோஆல்கேன்கள் மற்றும் ஹாலோஅரீன்கள்)
*   **Haloalkanes:** Halogen atom is attached to an sp³-hybridized carbon atom of an alkyl group.
*   **Haloarenes:** Halogen atom is attached to an sp²-hybridized carbon atom of an aryl group.

### 2. Reactions of Haloalkanes
*   **Nucleophilic Substitution Reactions (கருக்கவர் பதிலீட்டு வினைகள்):** The halogen atom is replaced by a nucleophile.
    *   **SN1 Reaction:** Two-step mechanism, formation of a carbocation intermediate, rate depends only on the concentration of the alkyl halide. Favored by tertiary halides.
    *   **SN2 Reaction:** Single-step mechanism, backside attack of the nucleophile, inversion of configuration (Walden inversion). Rate depends on both alkyl halide and nucleophile concentration. Favored by primary halides.
*   **Elimination Reactions (நீக்க வினைகள்):** Formation of an alkene by the removal of a halogen and a hydrogen atom from adjacent carbons.
    *   **Saytzeff's Rule (சேட்செஃப் விதி):** In dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms (more substituted alkene is more stable).

### 3. Reactions of Haloarenes
*   Haloarenes are much less reactive towards nucleophilic substitution reactions than haloalkanes due to resonance (C-Cl bond acquires partial double bond character).
*   They undergo electrophilic substitution reactions (halogenation, nitration, etc.). The halogen atom is deactivating but o, p-directing.

### 4. Important Polyhalogen Compounds
*   **Dichloromethane (CH₂Cl₂):** Used as a solvent.
*   **Chloroform (CHCl₃):** Used as an anesthetic, but now replaced by safer alternatives.
*   **Carbon Tetrachloride (CCl₄):** Used as a fire extinguisher under the name Pyrene.
*   **DDT (Dichlorodiphenyltrichloroethane):** An effective insecticide but is non-biodegradable and causes environmental problems.
*   **Freons:** Chlorofluorocarbon compounds used as refrigerants, cause ozone layer depletion.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
