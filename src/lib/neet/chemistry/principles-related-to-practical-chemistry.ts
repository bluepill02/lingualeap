
import type { NeetModule } from '@/lib/types';

export const principlesRelatedToPracticalChemistry: NeetModule = {
  id: 'chemistry-principles-related-to-practical-chemistry',
  title: 'Principles Related to Practical Chemistry',
  chapter: 'Principles Related to Practical Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Detection of Functional Groups (செயல்பாட்டு தொகுதிகளின் கண்டறிதல்)
*   **Unsaturation (நிறைவுறாத் தன்மை):** Baeyer's test (decolorization of cold, dilute, alkaline KMnO₄ solution) or Bromine water test (decolorization of bromine water).
*   **Alcohols (-OH):** Lucas test ( turbidity with Lucas reagent - conc. HCl + anhyd. ZnCl₂), Ceric ammonium nitrate test (red color).
*   **Phenols:** Ferric chloride test (violet/blue/green coloration).
*   **Aldehydes & Ketones (C=O):** 2,4-DNP test (yellow/orange precipitate).
    *   **Aldehydes only:** Tollen's test (silver mirror), Fehling's test (red precipitate).
*   **Carboxylic Acids (-COOH):** Litmus test (blue to red), Sodium bicarbonate test (brisk effervescence of CO₂).

### 2. Qualitative Analysis of Inorganic Salts (கனிம உப்புகளின் பண்பறி பகுப்பாய்வு)
*   **Analysis of Anions (எதிர்மின் அயனி):**
    *   **Dilute H₂SO₄ group:** CO₃²⁻, SO₃²⁻, S²⁻, NO₂⁻.
    *   **Conc. H₂SO₄ group:** Cl⁻, Br⁻, I⁻, NO₃⁻, CH₃COO⁻.
    *   **Independent group:** SO₄²⁻, PO₄³⁻.
*   **Analysis of Cations (நேர்மின் அயனி):** Based on selective precipitation using group reagents.
    *   Group I: Pb²⁺ (as chlorides).
    *   Group II: Cu²⁺, As³⁺ (as sulfides in acidic medium).
    *   Group III: Al³⁺, Fe³⁺ (as hydroxides).
    *   Group IV: Zn²⁺, Mn²⁺ (as sulfides in basic medium).
    *   Group V: Ba²⁺, Sr²⁺, Ca²⁺ (as carbonates).
    *   Group VI: Mg²⁺.

### 3. Volumetric Analysis (பருமன் பகுப்பாய்வு) / Titration (தரம் பார்த்தல்)
*   Quantitative analysis to determine the concentration of a solution.
*   **Equivalence Point:** The point at which the reaction between the two solutions is complete.
*   **Indicator:** A substance that indicates the completion of the reaction by a color change.
*   **Types:** Acid-base titration, Redox titration (e.g., KMnO₄ vs. Oxalic acid).
`,
  workedExamples: [
    {
        problem: "An aqueous solution of a salt gives a white precipitate with BaCl₂ solution, which is insoluble in concentrated HCl. What is the anion?",
        solution: "The formation of a white precipitate with BaCl₂ indicates the presence of either sulphate (SO₄²⁻) or sulphite (SO₃²⁻). The precipitate of barium sulphite (BaSO₃) is soluble in HCl, while the precipitate of barium sulphate (BaSO₄) is insoluble in HCl. Since the precipitate is insoluble in concentrated HCl, the anion is **sulphate (SO₄²⁻)**."
    },
    {
        problem: "An organic compound gives a silver mirror with Tollen's reagent but does not decolorize Baeyer's reagent. What functional group is present?",
        solution: "A positive Tollen's test (silver mirror) indicates the presence of an **aldehyde group (-CHO)**. A negative Baeyer's test indicates the absence of C=C or C≡C double/triple bonds (unsaturation). Therefore, the compound is a saturated aldehyde."
    },
    {
        problem: "In the titration of oxalic acid against KMnO₄ in an acidic medium, what is the role of H₂SO₄?",
        solution: "The reaction between KMnO₄ (oxidizing agent) and oxalic acid (reducing agent) requires an acidic medium. Sulphuric acid (H₂SO₄) is used to provide the acidic medium. It does not interfere with the redox reaction, as HCl would (Cl⁻ can be oxidized by KMnO₄) or HNO₃ would (it is itself an oxidizing agent)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
