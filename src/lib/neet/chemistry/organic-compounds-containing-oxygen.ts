
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingOxygen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-oxygen',
  title: 'Organic Compounds Containing Oxygen',
  chapter: 'Organic Compounds Containing Oxygen',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Alcohols, Phenols and Ethers (ஆல்கஹால்கள், பீனால்கள் மற்றும் ஈதர்கள்)
*   **Alcohols (ஆல்கஹால்கள்):** -OH group attached to an sp³-hybridized carbon.
*   **Phenols (பீனால்கள்):** -OH group attached directly to an sp²-hybridized carbon of an aromatic ring. Phenols are more acidic than alcohols due to the resonance stabilization of the phenoxide ion.
*   **Ethers (ஈதர்கள்):** R-O-R'.
*   **Key Reactions:**
    *   **Lucas Test:** To distinguish between primary, secondary, and tertiary alcohols using conc. HCl and anhydrous ZnCl₂. (Tertiary > Secondary > Primary reactivity).
    *   **Williamson Synthesis:** To prepare ethers. R-X + R'-ONa → R-O-R' + NaX.
    *   **Reimer-Tiemann Reaction:** Conversion of phenol to salicylaldehyde.
    *   **Kolbe's Reaction:** Conversion of phenol to salicylic acid.

### 2. Aldehydes, Ketones, and Carboxylic Acids (ஆல்டிஹைடுகள், கீட்டோன்கள் மற்றும் கார்பாக்சிலிக் அமிலங்கள்)
*   Contain the carbonyl group (C=O).
*   **Preparation:** Ozonolysis of alkenes, Friedel-Crafts acylation (for ketones), oxidation of alcohols.
*   **Key Reactions:**
    *   **Nucleophilic Addition:** Characteristic reaction of aldehydes and ketones.
    *   **Cannizzaro Reaction:** Aldehydes which do not have an α-hydrogen atom undergo self-oxidation and reduction (disproportionation) on treatment with concentrated alkali.
    *   **Aldol Condensation:** Aldehydes and ketones having at least one α-hydrogen undergo a reaction in the presence of dilute alkali to form β-hydroxy aldehydes (aldol) or β-hydroxy ketones (ketol).
    *   **Tests to distinguish Aldehydes from Ketones:** Tollen's test (silver mirror), Fehling's test (red-brown precipitate). Ketones do not give these tests.
*   **Carboxylic Acids (கார்பாக்சிலிக் அமிலங்கள்):** Contain the carboxyl group (-COOH). They are acidic due to resonance stabilization of the carboxylate ion.
    *   **Hell-Volhard-Zelinsky (HVZ) Reaction:** Halogenation of carboxylic acids at the α-carbon.
`,
  workedExamples: [
    {
        problem: "An organic compound with the formula C₃H₈O gives a positive Lucas test immediately. Identify the compound.",
        solution: "A positive Lucas test immediately indicates the presence of a tertiary alcohol. The only tertiary alcohol with the formula C₃H₈O is not possible. Let's assume the formula is C₄H₁₀O. The tertiary alcohol would be 2-Methylpropan-2-ol, (CH₃)₃COH."
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
