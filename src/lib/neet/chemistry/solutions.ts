
import type { NeetModule } from '@/lib/types';

export const solutions: NeetModule = {
  id: 'chemistry-solutions',
  title: 'Solutions',
  chapter: 'Solutions',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Solutions (வேதியியல் - கரைசல்கள்)

# 2. Learning Objectives
1.  After this, you will be able to express the concentration of a solution in different units like molarity, molality, and mole fraction.
2.  After this, you will be able to explain Raoult's law and differentiate between ideal and non-ideal solutions.
3.  After this, you will be able to describe the four colligative properties and use their formulas to determine the molar mass of a solute.
4.  After this, you will be able to explain abnormal molar mass and apply the van't Hoff factor to problems.

# 3. Prerequisites
– Understanding of the mole concept and molar mass.
– Basic knowledge of chemical equilibrium and intermolecular forces.

# 4. Concept Overview
When you dissolve sugar in your morning filter coffee (ஃபில்டர் காபி) or salt in a glass of buttermilk (மோர்), you are creating a **solution**. This chapter explores the properties of these homogeneous mixtures. We'll learn how to precisely measure concentration, and how the presence of a solute changes the properties of a solvent, like its boiling and freezing points. These changes, known as **colligative properties (தொகைசார் பண்புகள்)**, are fascinating because they depend only on the *number* of solute particles, not their identity. This principle is used in everything from making ice cream to determining the molar mass of large molecules.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Chemistry Volume 1, Chapter 8**. It is a very important chapter for NEET, with guaranteed numerical problems from colligative properties and the van't Hoff factor.

### 5.1 Concentration of Solutions (கரைசல்களின் செறிவு)
*   **Molarity (M):** Moles of solute / Volume of solution (L).
*   **Molality (m):** Moles of solute / Mass of solvent (kg). (Temperature independent).
*   **Mole Fraction (x):** Moles of a component / Total moles.

### 5.2 Raoult's Law and Vapour Pressure (ரவுல்ட் விதி மற்றும் ஆவி அழுத்தம்)
*   **Raoult's Law:** For a solution of volatile liquids, the partial vapour pressure of a component is proportional to its mole fraction.
*   **Ideal Solutions:** Obey Raoult's law (e.g., benzene + toluene). ΔH_mix = 0, ΔV_mix = 0.
*   **Non-ideal Solutions:**
    *   **Positive Deviation:** Higher vapour pressure than expected (A-B interactions < A-A, B-B). Forms minimum boiling azeotrope.
    *   **Negative Deviation:** Lower vapour pressure than expected (A-B interactions > A-A, B-B). Forms maximum boiling azeotrope.

### 5.3 Colligative Properties (தொகைசார் பண்புகள்)
Properties that depend on the number of solute particles, not their nature.
1.  **Relative Lowering of Vapour Pressure (RLVP):** \\( \\frac{P_1^\\circ - P_1}{P_1^\\circ} = x_2 \\)
2.  **Elevation in Boiling Point (கொதிநிலை ஏற்றம்):** \\( \\Delta T_b = K_b m \\)
3.  **Depression in Freezing Point (உறைநிலைத் தாழ்வு):** \\( \\Delta T_f = K_f m \\)
4.  **Osmotic Pressure (π) (சவ்வூடுபரவல் அழுத்தம்):** \\( \\pi = CRT \\)

### 5.4 Abnormal Molar Mass and van't Hoff Factor (i)
*   Used when solutes associate or dissociate in solution.
*   **van't Hoff Factor (i):** \\( i = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal Molar Mass}} = \\frac{\\text{Observed Colligative Property}}{\\text{Calculated Colligative Property}} \\)
*   Modified colligative property equations: e.g., \\( \\Delta T_b = i K_b m \\).

# 6. Worked Examples

**1. Easy:** 18 g of glucose (C₆H₁₂O₆) is dissolved in 1 kg of water. At what temperature will this solution boil? (Kₑ for water is 0.52 K kg mol⁻¹).
*   **Solution:**
    *   Molar mass of glucose = 180 g/mol.
    *   Moles of glucose = 18 g / 180 g/mol = 0.1 mol.
    *   Molality (m) = 0.1 mol / 1 kg = 0.1 m.
    *   \\(\\Delta T_b = K_b m = 0.52 \\times 0.1 = 0.052\\) K.
    *   Boiling point of solution = 100 °C + 0.052 °C = **100.052 °C**.

**2. Medium:** Calculate the osmotic pressure of a solution prepared by dissolving 1.0 g of a polymer of molar mass 185,000 g/mol in 450 mL of water at 37 °C.
*   **Solution:**
    *   Use \\( \\pi = CRT = (\\frac{n}{V})RT \\).
    *   n = 1.0 g / 185000 g/mol.
    *   V = 450 mL = 0.450 L.
    *   T = 37 + 273 = 310 K.
    *   R = 0.0821 L atm / K mol.
    *   \\( \\pi = (\\frac{1/185000}{0.450}) \\times 0.0821 \\times 310 \\approx 3.09 \\times 10^{-4} \\text{ atm} \\).

**3. Must-Practice:** 2 g of benzoic acid (C₆H₅COOH) dissolved in 25 g of benzene shows a depression in freezing point equal to 1.62 K. Molar depression constant (K_f) for benzene is 4.9 K kg mol⁻¹. What is the percentage association of the acid if it forms a dimer in solution?
*   **Solution:**
    1.  Calculate observed molar mass (M_obs) from \\(\\Delta T_f = K_f m\\).
        \\(1.62 = 4.9 \\times \\frac{2/M_{obs}}{25/1000} \\implies M_{obs} = 241.98 \\text{ g/mol}\\).
    2.  Calculate normal molar mass (M_normal) for C₇H₆O₂ = 122 g/mol.
    3.  Calculate van't Hoff factor: \\( i = \\frac{M_{normal}}{M_{obs}} = \\frac{122}{241.98} = 0.504 \\).
    4.  For dimerization (2A ⇌ A₂), \\( i = 1 - \\frac{\\alpha}{2} \\), where α is the degree of association.
    5.  \\( 0.504 = 1 - \\frac{\\alpha}{2} \\implies \\frac{\\alpha}{2} = 1 - 0.504 = 0.496 \\).
    6.  \\( \\alpha = 0.992 \\). Percentage association is **99.2%**.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( P_A = P_A^\\circ x_A \\) | Raoult's Law (ரவுல்ட் விதி) |
| \\( \\Delta T_b = i K_b m \\) | Elevation in Boiling Point (கொதிநிலை ஏற்றம்) |
| \\( \\Delta T_f = i K_f m \\) | Depression in Freezing Point (உறைநிலைத் தாழ்வு) |
| \\( \\pi = iCRT \\) | Osmotic Pressure (சவ்வூடுபரவல் அழுத்தம்) |
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

