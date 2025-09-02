
import type { NeetModule } from '@/lib/types';

export const principlesRelatedToPracticalChemistry: NeetModule = {
  id: 'chemistry-principles-related-to-practical-chemistry',
  title: 'Principles Related to Practical Chemistry',
  chapter: 'Principles Related to Practical Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Detection of Functional Groups (செயல்பாட்டு தொகுதிகளின் கண்டறிதல்)
*   **Unsaturation:** Baeyer's test (cold, dilute KMnO₄), Bromine water test.
*   **Alcoholic and Phenolic groups:** Ferric chloride test (for phenols), Lucas test (for alcohols).
*   **Carbonyl groups (Aldehydes and Ketones):** 2,4-DNP test. Tollen's test and Fehling's test (to distinguish aldehydes).
*   **Carboxyl groups:** Sodium bicarbonate effervescence test, Litmus test.
*   **Amino groups:** Carbylamine test (for primary amines).

### 2. Chemistry Involved in Preparation of Compounds
*   **Inorganic Compounds:** Mohr’s salt, Potash alum. (Understanding the reaction and stoichiometry).
*   **Organic Compounds:** Acetanilide, p-nitroacetanilide, Aniline yellow, Iodoform. (Understanding the reaction mechanism and conditions).

### 3. Chemistry Involved in Titrimetric Exercises (தரம் பார்த்தல்)
*   **Acid-Base Titrations:** Use of indicators like phenolphthalein and methyl orange.
*   **Redox Titrations:**
    *   **Oxalic acid vs KMnO₄:** Self-indicator (KMnO₄). Requires heating of oxalic acid.
    *   **Mohr’s salt vs KMnO₄:** Redox titration not requiring heating.

### 4. Chemical Principles in Qualitative Salt Analysis (கனிம உப்பு பகுப்பாய்வு)
*   **Cations (நேர்மின் அயனிகள்):** Systematic analysis using group reagents to precipitate ions based on their solubility products.
    *   Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺.
*   **Anions (எதிர்மின் அயனிகள்):** Preliminary tests and confirmatory tests.
    *   CO₃²⁻, S²⁻, SO₃²⁻, NO₂⁻, NO₃⁻, Cl⁻, Br⁻, I⁻. (Insoluble salts excluded).

### 5. Chemical Principles in Experiments
*   **Enthalpy of solution of CuSO₄:** Measuring temperature change upon dissolution to calculate heat absorbed or released.
*   **Enthalpy of neutralization of strong acid and strong base:** The heat released when 1 mole of H⁺ ions reacts with 1 mole of OH⁻ ions.
*   **Preparation of lyophilic and lyophobic sols:** Understanding the difference in preparation and stability of colloids.
*   **Kinetic study of the reaction of iodide ions with hydrogen peroxide:** Studying the effect of concentration or temperature on the rate of reaction.
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
