
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingNitrogen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-nitrogen',
  title: 'Organic Compounds Containing Nitrogen',
  chapter: 'Organic Compounds Containing Nitrogen',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Amines (அமீன்கள்)
*   **Nomenclature, Classification, Structure:** Amines are derivatives of ammonia (NH₃). Classified as Primary (R-NH₂), Secondary (R₂NH), Tertiary (R₃N) based on the number of alkyl/aryl groups attached to Nitrogen. The N atom is sp³ hybridized with a pyramidal geometry.
*   **General methods of preparation:**
    *   Reduction of nitro compounds.
    *   Ammonolysis of alkyl halides.
    *   Reduction of nitriles.
    *   Reduction of amides.
    *   Gabriel phthalimide synthesis (for primary amines).
    *   Hofmann bromamide degradation reaction (steps down the series).
*   **Properties and Reactions:**
    *   **Basic Character of Amines (அமீன்களின் காரத்தன்மை):** Amines are basic due to the lone pair of electrons on the nitrogen atom. Basicity is compared based on the stability of the conjugate acid and electronic effects.
        *   Alkylamines are generally stronger bases than ammonia. In aqueous solution, the order for ethylamines is (C₂H₅)₂NH > C₂H₅NH₂ > (C₂H₅)₃N > NH₃.
        *   Aniline is a much weaker base than ammonia.
    *   **Identification of primary, secondary, and tertiary amines:**
        *   **Hinsberg's Test:** Reaction with benzenesulphonyl chloride.
        *   **Carbylamine Reaction (Isocyanide test):** A test for primary amines only.

### 2. Diazonium Salts (டையசோனியம் உப்புகள்)
*   **General formula:** [ArN₂]⁺X⁻.
*   **Preparation:** By treating a primary aromatic amine (like aniline) with nitrous acid (NaNO₂ + cold dilute HCl) at 0-5 °C. This reaction is called **diazotisation**.
*   **Importance in Synthetic Organic Chemistry:** Diazonium salts are very versatile intermediates. The diazonium group is a very good leaving group and can be replaced by various nucleophiles.
    *   **Sandmeyer Reaction:** Replacement by Cl⁻, Br⁻, CN⁻ using Cu(I) salt.
    *   **Gattermann Reaction:** Replacement by Cl⁻, Br⁻ using copper powder.
    *   Replacement by I⁻ (with KI).
    *   Replacement by F⁻ (Balz-Schiemann reaction).
    *   Replacement by H (hydrolysis) and OH (reduction).
    *   **Coupling Reactions:** Reaction with electron-rich compounds like phenol and aniline to form colored azo dyes.
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
