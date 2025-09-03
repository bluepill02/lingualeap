
import type { NeetModule } from '@/lib/types';

export const solutions: NeetModule = {
  id: 'chemistry-solutions',
  title: 'Solutions',
  chapter: 'Solutions',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Types and Concentration of Solutions (கரைசல்களின் வகைகள் மற்றும் செறிவு)
*   **Solution:** A homogeneous mixture of two or more substances.
*   **Methods for expressing concentration:**
    *   **Molarity (M):** Moles of solute per litre of solution. (Temperature dependent).
    *   **Molality (m):** Moles of solute per kilogram of solvent. (Temperature independent).
    *   **Mole Fraction (x):** Ratio of moles of a component to the total moles of all components.
    *   **Percentage:** By mass (w/w) and by volume (v/v).

### 2. Vapour Pressure and Raoult's Law (ஆவி அழுத்தம் மற்றும் ரவுல்ட் விதி)
*   **Vapour Pressure:** The pressure exerted by the vapour of a liquid when it is in equilibrium with the liquid.
*   **Raoult's Law:** For a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction. Pₐ = Pₐ° xₐ.
*   **Ideal Solutions:** Solutions that obey Raoult's law over the entire range of concentration (ΔH_mix = 0, ΔV_mix = 0). The interactions are similar to pure components. (எ.கா., பென்சீன் மற்றும் டோலுயீன்).
*   **Non-ideal Solutions:** Solutions that do not obey Raoult's law.
    *   **Positive Deviation (நேர் விலகல்):** Vapour pressure is higher than predicted. A-B interactions are weaker than A-A and B-B interactions. (ΔH_mix > 0, ΔV_mix > 0). Forms minimum boiling azeotrope. (எ.கா., எத்தனால் மற்றும் அசிட்டோன்).
    *   **Negative Deviation (எதிர் விலகல்):** Vapour pressure is lower than predicted. A-B interactions are stronger than A-A and B-B interactions. (ΔH_mix < 0, ΔV_mix < 0). Forms maximum boiling azeotrope. (எ.கா., குளோரோஃபார்ம் மற்றும் அசிட்டோன்).
*   **Azeotropes (கொதிநிலை மாறா கலவைகள்):** Binary mixtures having the same composition in liquid and vapour phase and boil at a constant temperature.

### 3. Colligative Properties (தொகைசார் பண்புகள்)
*   Properties of dilute solutions that depend only on the number of solute particles, not on their nature.
    *   **Relative Lowering of Vapour Pressure (RLVP):** (P₁° - P₁)/P₁° = x₂.
    *   **Elevation in Boiling Point (கொதிநிலை ஏற்றம்):** ΔTₑ = Kₑm, where Kₑ is the Ebullioscopic constant.
    *   **Depression in Freezing Point (உறைநிலைத் தாழ்வு):** ΔT_f = K_f m, where K_f is the Cryoscopic constant.
    *   **Osmotic Pressure (π) (சவ்வூடுபரவல் அழுத்தம்):** The excess pressure that must be applied to a solution to prevent osmosis. π = CRT.

### 4. Abnormal Molar Mass (இயல்பற்ற மோலார் நிறை)
*   When the molar mass determined by a colligative property is different from the theoretical value. This happens when the solute undergoes association or dissociation in the solution.
*   **van't Hoff Factor (i) (வான்ட் ஹாஃப் காரணி):** A factor to account for this deviation.
    *   i = (Normal molar mass) / (Abnormal molar mass)
    *   i = (Observed colligative property) / (Calculated colligative property)
    *   For association, i < 1. For dissociation, i > 1. For non-electrolytes, i = 1.
`,
  workedExamples: [
    {
        problem: "18 g of glucose (C₆H₁₂O₆) is dissolved in 1 kg of water. At what temperature will water boil at 1.013 bar? Kₑ for water is 0.52 K kg mol⁻¹.",
        solution: "Molar mass of glucose = 180 g/mol. Moles of glucose = 18 g / 180 g/mol = 0.1 mol. Molality (m) = Moles of solute / Mass of solvent in kg = 0.1 mol / 1 kg = 0.1 m. Elevation in boiling point, ΔTₑ = Kₑm = 0.52 K kg mol⁻¹ * 0.1 mol kg⁻¹ = 0.052 K. Boiling point of pure water is 373.15 K (100 °C). The boiling point of the solution = 373.15 K + 0.052 K = 373.202 K."
    },
    {
        problem: "The partial pressure of ethane over a solution containing 6.56 x 10⁻³ g of ethane is 1 bar. If the solution contains 5.00 x 10⁻² g of ethane, then what shall be the partial pressure of the gas?",
        solution: "According to Henry's law, the mass of the gas dissolved is proportional to its partial pressure (m = Kp). So, m₁/p₁ = m₂/p₂. (6.56 x 10⁻³ g) / 1 bar = (5.00 x 10⁻² g) / p₂. Solving for p₂, p₂ = (5.00 x 10⁻² g * 1 bar) / (6.56 x 10⁻³ g) ≈ 7.62 bar."
    },
    {
        problem: "Calculate the osmotic pressure in pascals exerted by a solution prepared by dissolving 1.0 g of a polymer of molar mass 185,000 in 450 mL of water at 37 °C.",
        solution: "Osmotic pressure π = CRT = (n/V)RT. n = 1.0 g / 185000 g/mol. V = 450 mL = 0.450 L. T = 37 + 273 = 310 K. R = 8.314 Pa m³ K⁻¹ mol⁻¹. π = (1/185000 / 0.450) * 8.314 * 310 ≈ 30.98 Pa."
    }
  ],
  mcqs: [
    {
        "question": "Which of the following is a colligative property?",
        "options": [ "Boiling point", "Vapour pressure", "Osmotic pressure", "Freezing point" ],
        "answer": "Osmotic pressure",
        "explanation": "Colligative properties depend on the number of solute particles. Osmotic pressure, elevation in boiling point, depression in freezing point, and relative lowering of vapour pressure are the four colligative properties."
    },
    {
        "question": "The van't Hoff factor (i) for a solute that associates in a solvent is:",
        "options": [ "Greater than 1", "Less than 1", "Equal to 1", "Equal to 0" ],
        "answer": "Less than 1",
        "explanation": "Association means multiple solute particles combine to form a single larger particle, reducing the total number of particles in the solution. Therefore, i < 1."
    },
    {
        "question": "According to Raoult's law, the relative lowering of vapour pressure is equal to the:",
        "options": [ "Mole fraction of solvent", "Mole fraction of solute", "Molality of the solution", "Molarity of the solution" ],
        "answer": "Mole fraction of solute",
        "explanation": "Raoult's law for non-volatile solutes states that (P₁° - P₁)/P₁° = x₂, where x₂ is the mole fraction of the solute."
    },
    {
        "question": "An ideal solution is formed when its components:",
        "options": [
            "Have no interaction with each other",
            "Have strong interactions",
            "Have similar structures and polarities",
            "Have different structures and polarities"
        ],
        "answer": "Have similar structures and polarities",
        "explanation": "Ideal solutions form when the intermolecular forces between solute-solute, solvent-solvent, and solute-solvent are nearly identical. This is often true for components with similar structures."
    },
    {
        "question": "What is the molality of a solution prepared by dissolving 4 g of NaOH in 250 g of water?",
        "options": [ "0.1 m", "0.2 m", "0.4 m", "0.8 m" ],
        "answer": "0.4 m",
        "explanation": "Molar mass of NaOH = 40 g/mol. Moles of NaOH = 4g / 40 g/mol = 0.1 mol. Molality = Moles of solute / Mass of solvent (kg) = 0.1 mol / 0.250 kg = 0.4 m."
    }
],
  assertionReasons: [
    {
        "assertion": "Osmotic pressure is a colligative property.",
        "reason": "Osmotic pressure depends on the number of solute particles and not on their nature.",
        "answer": "A",
        "explanation": "The reason provides the correct definition of a colligative property, thus explaining why osmotic pressure is one."
    },
    {
        "assertion": "A solution of ethanol and acetone shows positive deviation from Raoult's law.",
        "reason": "The intermolecular forces between ethanol and acetone are weaker than those between ethanol-ethanol and acetone-acetone molecules.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Adding acetone breaks the hydrogen bonds between ethanol molecules, weakening the overall forces and increasing the tendency to escape into the vapour phase."
    },
    {
        "assertion": "The boiling point of a 0.1 M solution of NaCl is higher than that of a 0.1 M solution of glucose.",
        "reason": "The van't Hoff factor for NaCl is greater than that for glucose.",
        "answer": "A",
        "explanation": "NaCl dissociates into two ions (i ≈ 2), while glucose is a non-electrolyte (i = 1). Since boiling point elevation is proportional to the number of particles, the NaCl solution will have a higher boiling point."
    },
    {
        "assertion": "Aquatic species are more comfortable in cold water than in warm water.",
        "reason": "The solubility of oxygen in water decreases with an increase in temperature.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Cold water can hold more dissolved oxygen (according to Henry's Law), which is essential for aquatic life."
    },
    {
        "assertion": "Molality is preferred over molarity for expressing concentration in experiments involving temperature changes.",
        "reason": "Molality is independent of temperature, whereas molarity depends on volume, which changes with temperature.",
        "answer": "A",
        "explanation": "The reason correctly explains why molality is a more robust unit of concentration when temperature is a variable."
    }
],
  matchTheColumns: [
    {
        "column1": [ "a) Raoult's Law", "b) Henry's Law", "c) Osmotic Pressure", "d) van't Hoff factor" ],
        "column2": [ "i) p = Kₕx", "ii) π = CRT", "iii) Abnormal molar mass", "iv) Vapour pressure of solution" ],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": [ "a) Ideal solution", "b) Positive deviation", "c) Negative deviation", "d) Azeotrope" ],
        "column2": [ "i) Chloroform + Acetone", "ii) Benzene + Toluene", "iii) Constant boiling mixture", "iv) Ethanol + Acetone" ],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": [ "a) Elevation in boiling point", "b) Depression in freezing point", "c) Osmotic pressure", "d) Relative lowering of V.P." ],
        "column2": [ "i) Ebullioscopy", "ii) Cryoscopy", "iii) Independent of temperature", "iv) Osmometry" ],
        "answer": "a-i, b-ii, c-iv, d-iii"
    },
    {
        "column1": [ "a) NaCl", "b) Glucose", "c) BaCl₂", "d) CH₃COOH (in benzene)" ],
        "column2": [ "i) i ≈ 3", "ii) i < 1", "iii) i ≈ 2", "iv) i = 1" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Molarity", "b) Molality", "c) Mole fraction", "d) Parts per million" ],
        "column2": [ "i) Temperature independent", "ii) mol L⁻¹", "iii) For very dilute solutions", "iv) Dimensionless" ],
        "answer": "a-ii, b-i, c-iv, d-iii"
    }
  ]
};
