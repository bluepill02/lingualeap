
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingOxygen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-oxygen',
  title: 'Organic Compounds Containing Oxygen',
  chapter: 'Organic Compounds Containing Oxygen',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Alcohols, Phenols, and Ethers (ஆல்கஹால்கள், பீனால்கள் மற்றும் ஈதர்கள்)
*   **General methods of preparation, properties, reactions, and uses.**
*   **Alcohols (ஆல்கஹால்கள்):**
    *   **Identification of primary, secondary, and tertiary alcohols:** Lucas Test is a key method.
    *   **Mechanism of dehydration:** Formation of alkenes from alcohols.
*   **Phenols (பீனால்கள்):**
    *   **Acidic nature:** Phenols are acidic due to the stability of the phenoxide ion.
    *   **Electrophilic substitution reactions:** Halogenation, nitration, and sulphonation.
    *   **Reimer-Tiemann reaction:** A key named reaction for ortho-formylation of phenols.
*   **Ethers (ஈதர்கள்):** Structure and basic properties.

### 2. Aldehydes and Ketones (ஆல்டிஹைடுகள் மற்றும் கீட்டோன்கள்)
*   **Nature of carbonyl group (>C=O):** Polar nature.
*   **Nucleophilic addition to >C=O group:** The characteristic reaction.
*   **Relative reactivities of aldehydes and ketones:** Aldehydes are generally more reactive than ketones towards nucleophilic addition.
*   **Important reactions:**
    *   Nucleophilic addition reactions (addition of HCN, NH₃ and its derivatives), Grignard reagent.
    *   **Oxidation:** Aldehydes are easily oxidized.
    *   **Reduction:** Reduction to alcohols (e.g., using NaBH₄) and to hydrocarbons (**Wolf Kishner and Clemmensen** reductions).
    *   **Acidity of α-hydrogen:** The α-hydrogen is acidic.
    *   **Aldol condensation:** A key reaction for aldehydes/ketones with α-hydrogen.
    *   **Cannizzaro reaction:** A key reaction for aldehydes without α-hydrogen.
    *   **Haloform reaction:** A test for methyl ketones.
*   **Chemical tests to distinguish between aldehydes and Ketones:** Tollen's test, Fehling's test.

### 3. Carboxylic Acids (கார்பாக்சிலிக் அமிலங்கள்)
*   **Acidic strength and factors affecting it:** The presence of electron-withdrawing groups increases acidity, while electron-donating groups decrease it.
`,
  workedExamples: [
    {
        problem: "An organic compound with the formula C₄H₁₀O gives a positive Lucas test immediately. Identify the compound.",
        solution: "A positive Lucas test immediately indicates the presence of a tertiary alcohol. The only tertiary alcohol with the formula C₄H₁₀O is **2-Methylpropan-2-ol**, (CH₃)₃COH."
    },
    {
        problem: "How would you distinguish between propanal (CH₃CH₂CHO) and propanone (CH₃COCH₃)?",
        solution: "You can use Tollen's test or Fehling's test. **Tollen's Test:** Warm the compound with Tollen's reagent (ammoniacal silver nitrate solution). Propanal (an aldehyde) will give a silver mirror. Propanone (a ketone) will not react. **Fehling's Test:** Warm the compound with Fehling's solution. Propanal will give a red-brown precipitate of Cu₂O. Propanone will not react."
    },
    {
        problem: "Explain why phenol is more acidic than ethanol.",
        solution: "The acidity is determined by the stability of the conjugate base formed after losing a proton. When phenol loses a proton, it forms the phenoxide ion (C₆H₅O⁻). This ion is highly stabilized by resonance, as the negative charge is delocalized over the benzene ring. When ethanol loses a proton, it forms the ethoxide ion (C₂H₅O⁻). There is no resonance stabilization for the ethoxide ion; in fact, the ethyl group is electron-donating, which destabilizes the negative charge. Due to the greater stability of the phenoxide ion, phenol is a stronger acid than ethanol."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
