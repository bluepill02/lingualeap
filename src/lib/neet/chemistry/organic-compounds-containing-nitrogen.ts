
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingNitrogen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-nitrogen',
  title: 'Organic Compounds Containing Nitrogen',
  chapter: 'Organic Compounds Containing Nitrogen',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Amines (அமீன்கள்)
*   Derivatives of ammonia (NH₃) where one or more hydrogen atoms are replaced by alkyl or aryl groups.
*   **Classification:** Primary (R-NH₂), Secondary (R₂NH), Tertiary (R₃N).
*   **Basicity of Amines (அமீன்களின் காரத்தன்மை):** Amines are basic due to the lone pair of electrons on the nitrogen atom.
    *   In the gaseous phase, the order of basicity is: Tertiary > Secondary > Primary.
    *   In an aqueous solution, the order is generally: Secondary > Primary > Tertiary for ethyl groups, due to a combination of inductive effect, solvation effect, and steric hindrance.
*   **Aniline vs. Alkylamines:** Aniline is a much weaker base than alkylamines because the lone pair on nitrogen is delocalized into the benzene ring and is less available for donation.

### 2. Preparation of Amines
*   **Reduction of Nitro compounds (Hofmann's reduction):** R-NO₂ → R-NH₂.
*   **Hofmann Bromamide Degradation Reaction:** R-CO-NH₂ + Br₂ + 4NaOH → R-NH₂ + Na₂CO₃ + 2NaBr + 2H₂O. This reaction is used to step down a series (the amine formed has one carbon less than the amide).

### 3. Chemical Reactions of Amines
*   **Carbylamine Reaction (கார்பைல்அமீன் வினை):** Primary amines react with chloroform and alcoholic KOH to form isocyanides (carbylamines), which have a very foul smell. This is a test for primary amines.
*   **Hinsberg's Test:** Used to distinguish between primary, secondary, and tertiary amines using benzenesulphonyl chloride.

### 4. Diazonium Salts (டையசோனியம் உப்புகள்)
*   General formula: [RN₂]⁺X⁻. Prepared by treating a primary aromatic amine with nitrous acid (NaNO₂ + HCl) at low temperatures (0-5 °C). This reaction is called **diazotisation**.
*   **Sandmeyer Reaction:** A method for synthesizing aryl halides from aryl diazonium salts using copper(I) salts as catalysts.
*   **Gattermann Reaction:** Similar to Sandmeyer, but uses copper powder instead of copper salt.
*   **Coupling Reactions:** Diazonium salts react with electron-rich aromatic compounds like phenol and aniline to form brightly colored azo compounds. This is the basis of azo dyes.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
