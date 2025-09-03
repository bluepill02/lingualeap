
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
  mcqs: [
    {
        "question": "Which reagent is used to distinguish between an aldehyde and a ketone?",
        "options": ["Lucas reagent", "Tollen's reagent", "Baeyer's reagent", "Fehling's solution"],
        "answer": "Tollen's reagent",
        "explanation": "Tollen's reagent (ammoniacal silver nitrate) gives a silver mirror with aldehydes but does not react with ketones. Fehling's solution also works, but Tollen's is more general."
    },
    {
        "question": "The brown ring test is used for the detection of which anion?",
        "options": ["`Cl⁻`", "`SO₄²⁻`", "`NO₃⁻`", "`CO₃²⁻`"],
        "answer": "`NO₃⁻`",
        "explanation": "The brown ring test involves adding ferrous sulphate to the solution containing nitrate, and then carefully adding concentrated sulphuric acid along the sides of the test tube. A brown ring at the interface confirms the presence of the nitrate ion."
    },
    {
        "question": "In the titration of Mohr's salt against `KMnO₄`, the indicator used is:",
        "options": ["Phenolphthalein", "Methyl orange", "`KMnO₄` itself", "Starch"],
        "answer": "`KMnO₄` itself",
        "explanation": "`KMnO₄` is a self-indicator. The appearance of a permanent pale pink color indicates the endpoint, as the purple `MnO₄⁻` ion is consumed during the reaction."
    },
    {
        "question": "Which functional group gives a violet coloration with neutral `FeCl₃` solution?",
        "options": ["Alcoholic -OH", "Phenolic -OH", "Carboxylic acid", "Aldehyde"],
        "answer": "Phenolic -OH",
        "explanation": "Phenols react with neutral ferric chloride solution to form a violet-colored complex. This test is used to distinguish phenols from alcohols."
    },
    {
        "question": "The reagent for Group III cations (`Al³⁺`, `Fe³⁺`) in qualitative analysis is:",
        "options": ["Dilute HCl", "`H₂S` in presence of dilute HCl", "`NH₄OH` in presence of `NH₄Cl`", "`NH₄₂CO₃` in presence of `NH₄OH`"],
        "answer": "`NH₄OH` in presence of `NH₄Cl`",
        "explanation": "Group III cations are precipitated as their hydroxides in a buffered solution of ammonium hydroxide and ammonium chloride."
    }
],
  assertionReasons: [
    {
        "assertion": "Phenol gives a violet colour with neutral ferric chloride solution.",
        "reason": "Phenol forms a coloured iron complex.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The formation of the ferric-phenoxide complex is responsible for the characteristic violet colour."
    },
    {
        "assertion": "In the titration of oxalic acid vs `KMnO₄`, the mixture is heated before titration.",
        "reason": "The reaction between oxalate ions and permanganate ions is slow at room temperature.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Heating increases the rate of the redox reaction, allowing for a sharp and timely endpoint. Also, Mn²⁺ produced acts as an auto-catalyst."
    },
    {
        "assertion": "In qualitative analysis, `NH₄Cl` is added before `NH₄OH` for the precipitation of Group III cations.",
        "reason": "The addition of `NH₄Cl` suppresses the ionization of `NH₄OH` due to the common ion effect.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. This ensures that the `OH⁻` ion concentration is just enough to precipitate the Group III hydroxides (`Ksp` is low) but not the Group IV or V hydroxides (`Ksp` is high)."
    },
    {
        "assertion": "All aldehydes give a positive Fehling's test.",
        "reason": "Aromatic aldehydes do not react with Fehling's solution.",
        "answer": "D",
        "explanation": "The assertion is false. Aromatic aldehydes like benzaldehyde do not give a positive Fehling's test. The reason is true and contradicts the assertion."
    },
    {
        "assertion": "The enthalpy of neutralization of a strong acid and a strong base is always constant (-57.1 kJ/mol).",
        "reason": "It is the heat evolved for the formation of 1 mole of water from H⁺ and OH⁻ ions.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since strong acids and bases are completely ionized, the net reaction is always H⁺(aq) + OH⁻(aq) → H₂O(l), which has a constant enthalpy change."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Aldehyde", "b) Phenol", "c) Primary Amine", "d) Unsaturation"],
        "column2": ["i) Carbylamine test", "ii) Baeyer's test", "iii) Tollen's test", "iv) Ferric chloride test"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Group I Cation", "b) Group II Cation", "c) Group III Cation", "d) Group IV Cation"],
        "column2": ["i) `Al³⁺`", "ii) `Zn²⁺`", "iii) `Pb²⁺`", "iv) `Cu²⁺`"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) `CO₃²⁻` test", "b) `Cl⁻` test", "c) `NO₃⁻` test", "d) `S²⁻` test"],
        "column2": ["i) Sodium nitroprusside test", "ii) Brown ring test", "iii) Chromyl chloride test", "iv) Effervescence with dil. acid"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Lyophilic sol", "b) Lyophobic sol", "c) Mohr's salt", "d) Potash alum"],
        "column2": ["i) Needs stabilizing agent", "ii) Double salt", "iii) Reversible sol", "iv) Double salt"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Acid-Base Titration", "b) Redox Titration", "c) Iodoform preparation", "d) Acetanilide preparation"],
        "column2": ["i) `NaOH` vs `HCl`", "ii) `KMnO₄` vs `FeSO₄`", "iii) Acetylation of aniline", "iv) Reaction of ethanol with I₂/NaOH"],
        "answer": "a-i, b-ii, c-iv, d-iii"
    }
  ]
};
