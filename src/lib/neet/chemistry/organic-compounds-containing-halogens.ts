
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
