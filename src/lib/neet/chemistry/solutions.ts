
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
    *   **Elevation in Boiling Point (கொதிநிலை ஏற்றம்)::** ΔTₑ = Kₑm, where Kₑ is the Ebullioscopic constant.
    *   **Depression in Freezing Point (உறைநிலைத் தாழ்வு)::** ΔT_f = K_f m, where K_f is the Cryoscopic constant.
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
    },
    {
        "question": "Henry's law constant (Kₕ) value for a gas:",
        "options": [
            "Increases with increase in temperature",
            "Decreases with increase in temperature",
            "Remains constant with temperature",
            "Is independent of the nature of the gas"
        ],
        "answer": "Increases with increase in temperature",
        "explanation": "The solubility of gases in liquids decreases with an increase in temperature. Since p = Kₕx, for a given pressure, if solubility (x) decreases, Kₕ must increase."
    },
    {
        "question": "A solution that shows a positive deviation from Raoult's law is one in which:",
        "options": [
            "Solute-solvent interactions are stronger than solute-solute and solvent-solvent interactions",
            "Solute-solvent interactions are weaker than solute-solute and solvent-solvent interactions",
            "Volume of solution is less than the sum of volumes of components",
            "Enthalpy of mixing is negative"
        ],
        "answer": "Solute-solvent interactions are weaker than solute-solute and solvent-solvent interactions",
        "explanation": "Weaker solute-solvent interactions make it easier for molecules to escape into the vapour phase, resulting in a higher vapour pressure than predicted (positive deviation)."
    },
    {
        "question": "Which of the following aqueous solutions will have the highest boiling point?",
        "options": [ "0.1 M glucose", "0.1 M NaCl", "0.1 M BaCl₂", "0.1 M sucrose" ],
        "answer": "0.1 M BaCl₂",
        "explanation": "Boiling point elevation is a colligative property. BaCl₂ dissociates into three ions (Ba²⁺ and 2Cl⁻), giving the highest number of particles (highest van't Hoff factor, i=3) for the same molar concentration."
    },
    {
        "question": "The process of a solvent moving through a semipermeable membrane from a dilute solution to a concentrated solution is called:",
        "options": [ "Diffusion", "Osmosis", "Plasmolysis", "Dialysis" ],
        "answer": "Osmosis",
        "explanation": "This is the definition of osmosis, driven by the difference in solvent concentration (or water potential)."
    },
    {
        "question": "Two solutions having the same osmotic pressure at a given temperature are called:",
        "options": [ "Hypertonic", "Hypotonic", "Isotonic", "Ideal" ],
        "answer": "Isotonic",
        "explanation": "Isotonic solutions have the same solute concentration and hence the same osmotic pressure."
    },
    {
        "question": "The cryoscopic constant (K_f) depends on:",
        "options": [
            "The nature of the solute",
            "The nature of the solvent",
            "The concentration of the solution",
            "The temperature of the solution"
        ],
        "answer": "The nature of the solvent",
        "explanation": "The molal freezing point depression constant (cryoscopic constant) is a property of the solvent only."
    },
    {
        "question": "An azeotropic mixture of two liquids boils at a lower temperature than either of them when it shows:",
        "options": [
            "No deviation from Raoult's law",
            "Positive deviation from Raoult's law",
            "Negative deviation from Raoult's law",
            "Insolubility"
        ],
        "answer": "Positive deviation from Raoult's law",
        "explanation": "A positive deviation means a higher vapour pressure, which corresponds to a lower boiling point. This forms a minimum-boiling azeotrope."
    },
    {
        "question": "The mole fraction of water in a solution containing 1 mole of solute in 180 g of water is:",
        "options": [ "0.1", "0.9", "0.5", "0.909" ],
        "answer": "0.909",
        "explanation": "Moles of solute = 1 mol. Moles of water = 180g / 18 g/mol = 10 mol. Total moles = 1 + 10 = 11 mol. Mole fraction of water = 10 / 11 ≈ 0.909."
    },
    {
        "question": "For which of the following solutes is the van't Hoff factor not equal to 1?",
        "options": [ "Glucose", "Urea", "Sucrose", "KCl" ],
        "answer": "KCl",
        "explanation": "KCl is an electrolyte that dissociates into K⁺ and Cl⁻ ions in solution, so its van't Hoff factor (i) is approximately 2. The others are non-electrolytes (i=1)."
    },
    {
        "question": "The reverse of osmosis is called:",
        "options": [ "Diffusion", "Active transport", "Reverse osmosis", "Dialysis" ],
        "answer": "Reverse osmosis",
        "explanation": "Reverse osmosis occurs when a pressure greater than the osmotic pressure is applied to the solution side, forcing the solvent to move from the concentrated to the dilute side."
    },
    {
        "question": "Which concentration unit is most convenient for relating a colligative property to the concentration of a solution?",
        "options": [ "Molarity", "Molality", "Mole fraction", "Mass percent" ],
        "answer": "Molality",
        "explanation": "Molality is used for boiling point elevation and freezing point depression because it is based on the mass of the solvent and is independent of temperature changes."
    },
    {
        "question": "When a non-volatile solute is added to a solvent, its vapour pressure:",
        "options": [ "Increases", "Decreases", "Remains the same", "May increase or decrease" ],
        "answer": "Decreases",
        "explanation": "The solute particles occupy some of the surface area of the solvent, reducing the rate of evaporation and thus lowering the vapour pressure."
    },
    {
        "question": "The unit of the ebullioscopic constant (Kₑ) is:",
        "options": [ "K kg mol⁻¹", "K mol kg⁻¹", "kg mol⁻¹ K⁻¹", "K mol⁻¹" ],
        "answer": "K kg mol⁻¹",
        "explanation": "From the formula ΔTₑ = Kₑm, Kₑ = ΔTₑ / m. The units are Kelvin / (mol/kg), which simplifies to K kg mol⁻¹."
    },
    {
        "question": "A liquid mixture that can be separated by fractional distillation must be:",
        "options": [ "Azeotropic", "Ideal", "Non-ideal", "A solution of non-volatile solute" ],
        "answer": "Ideal",
        "explanation": "Ideal or near-ideal solutions with different boiling points can be separated by fractional distillation. Azeotropes cannot be separated by this method."
    },
    {
        "question": "At high altitudes, people suffer from a condition called anoxia. This is due to:",
        "options": [
            "Low temperature",
            "High atmospheric pressure",
            "Low atmospheric pressure",
            "High temperature"
        ],
        "answer": "Low atmospheric pressure",
        "explanation": "At high altitudes, the partial pressure of oxygen is low. According to Henry's law, this leads to a lower concentration of dissolved oxygen in the blood, causing anoxia."
    },
    {
        "question": "The freezing point of a solution is ____ the freezing point of the pure solvent.",
        "options": [ "Higher than", "Lower than", "Equal to", "Unrelated to" ],
        "answer": "Lower than",
        "explanation": "The presence of a solute disrupts the formation of the solvent's crystal lattice, requiring a lower temperature to freeze. This is known as depression in freezing point."
    },
    {
        "question": "Which of the following will form an ideal solution?",
        "options": [
            "Ethanol and water",
            "Nitric acid and water",
            "Benzene and toluene",
            "Chloroform and acetone"
        ],
        "answer": "Benzene and toluene",
        "explanation": "Benzene and toluene have very similar structures and intermolecular forces, so they form a nearly ideal solution."
    },
    {
        "question": "The value of the van't Hoff factor for ethanoic acid in benzene is:",
        "options": [ "Greater than 1", "Less than 1", "Equal to 1", "Equal to 0" ],
        "answer": "Less than 1",
        "explanation": "Ethanoic acid (acetic acid) dimerizes (associates) in benzene through hydrogen bonding, reducing the effective number of particles. Thus, i < 1."
    },
    {
        "question": "The unit of osmotic pressure is:",
        "options": [ "atm", "mol/L", "K", "Joule" ],
        "answer": "atm",
        "explanation": "Osmotic pressure is a pressure and is typically measured in atmospheres (atm), pascals (Pa), or bar."
    },
    {
        "question": "Which colligative property is preferred for the determination of molar masses of macromolecules like proteins?",
        "options": [
            "Elevation in boiling point",
            "Depression in freezing point",
            "Osmotic pressure",
            "Relative lowering of vapour pressure"
        ],
        "answer": "Osmotic pressure",
        "explanation": "Osmotic pressure measurement is preferred because the magnitude of the pressure change is large even for dilute solutions, and the measurement is done at room temperature, which prevents denaturation of macromolecules."
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
    },
    {
        "assertion": "Reverse osmosis is used for the desalination of sea water.",
        "reason": "In reverse osmosis, a pressure greater than the osmotic pressure is applied to the solution.",
        "answer": "A",
        "explanation": "Applying high pressure reverses the natural osmotic flow, forcing pure water out of the salt water through a semipermeable membrane. The reason correctly describes the principle of the process."
    },
    {
        "assertion": "An azeotropic mixture cannot be separated by fractional distillation.",
        "reason": "The composition of the liquid and vapour phases is the same for an azeotrope.",
        "answer": "A",
        "explanation": "Fractional distillation relies on the difference in composition between liquid and vapour phases. Since this difference is zero for an azeotrope, it cannot be separated by this method."
    },
    {
        "assertion": "A raw mango placed in a concentrated salt solution shrivels.",
        "reason": "This is due to the process of osmosis.",
        "answer": "A",
        "explanation": "Water moves from the mango (higher water potential) to the concentrated salt solution (lower water potential) through the mango's skin (semipermeable membrane), causing it to shrivel. This is osmosis."
    },
    {
        "assertion": "The value of the ebullioscopic constant (Kₑ) is the same for all solvents.",
        "reason": "It is a property of the solute.",
        "answer": "E",
        "explanation": "Both the assertion and the reason are false. The ebullioscopic constant is a characteristic property of the solvent, not the solute, and it is different for different solvents."
    },
    {
        "assertion": "When a non-volatile solute is added to a solvent, the boiling point is elevated.",
        "reason": "The addition of a non-volatile solute lowers the vapour pressure of the solvent.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The solution must be heated to a higher temperature to make its lowered vapour pressure equal to the atmospheric pressure, which is the condition for boiling."
    },
    {
        "assertion": "The van't Hoff factor for a dilute aqueous solution of BaCl₂ is approximately 3.",
        "reason": "BaCl₂ dissociates into one Ba²⁺ ion and two Cl⁻ ions.",
        "answer": "A",
        "explanation": "The reason correctly states that one formula unit of BaCl₂ produces three ions in solution, which explains why the van't Hoff factor (i) is 3."
    },
    {
        "assertion": "A mixture of chloroform and acetone shows negative deviation from Raoult's law.",
        "reason": "There is a formation of a hydrogen bond between chloroform and acetone molecules.",
        "answer": "A",
        "explanation": "The new hydrogen bond creates a stronger interaction between the solute and solvent molecules than the original interactions, reducing the escaping tendency (vapour pressure) and causing a negative deviation."
    },
    {
        "assertion": "The unit of molal depression constant (K_f) is K kg mol⁻¹.",
        "reason": "The formula is ΔT_f = K_f * m.",
        "answer": "A",
        "explanation": "The reason provides the formula from which the units can be derived (K_f = ΔT_f / m), correctly explaining the units in the assertion."
    },
    {
        "assertion": "Ideal solutions obey Raoult's law.",
        "reason": "For ideal solutions, ΔH_mix = 0 and ΔV_mix = 0.",
        "answer": "B",
        "explanation": "Both statements are true definitions of an ideal solution. However, the enthalpy and volume changes being zero are conditions for ideality, just like obeying Raoult's law is. They are parallel properties, not a cause-and-effect explanation."
    },
    {
        "assertion": "Adding salt to water increases its freezing point.",
        "reason": "The solute particles interfere with the formation of the ice crystal lattice.",
        "answer": "D",
        "explanation": "The assertion is false; adding a solute *decreases* the freezing point (depression in freezing point). The reason is true and explains why the freezing point is depressed."
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
    },
    {
        "column1": [ "a) Hypertonic solution", "b) Hypotonic solution", "c) Isotonic solution", "d) Semipermeable membrane" ],
        "column2": [ "i) Same osmotic pressure", "ii) Higher osmotic pressure", "iii) Allows only solvent to pass", "iv) Lower osmotic pressure" ],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": [ "a) Ebullioscopic constant (Kₑ)", "b) Cryoscopic constant (K_f)", "c) Henry's constant (Kₕ)", "d) Gas constant (R)" ],
        "column2": [ "i) Depends on nature of gas", "ii) Depends on nature of solvent", "iii) Universal constant", "iv) Also called molal elevation constant" ],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": [ "a) Freezing", "b) Boiling", "c) Osmosis", "d) Evaporation" ],
        "column2": [ "i) Vapour pressure = Atmospheric pressure", "ii) Solid-liquid equilibrium", "iii) Surface phenomenon", "iv) Solvent flow due to concentration difference" ],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": [ "a) ΔH_mix > 0", "b) ΔH_mix < 0", "c) ΔV_mix > 0", "d) ΔV_mix = 0" ],
        "column2": [ "i) Negative deviation", "ii) Ideal solution", "iii) Positive deviation", "iv) Positive deviation" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Reverse Osmosis", "b) Plasmolysis", "c) De-icing roads", "d) Scuba diving" ],
        "column2": [ "i) Henry's Law application", "ii) Depression in freezing point application", "iii) Water purification", "iv) Cell shrinkage in hypertonic solution" ],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": [ "a) Colligative property", "b) Intensive property", "c) Extensive property", "d) Thermodynamic property" ],
        "column2": [ "i) Depends on amount of substance (e.g., mass)", "ii) Independent of amount of substance (e.g., density)", "iii) Depends on number of solute particles", "iv) Enthalpy" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Solid in gas", "b) Gas in liquid", "c) Liquid in liquid", "d) Solid in solid" ],
        "column2": [ "i) Alloys like brass", "ii) Smoke", "iii) Soda water", "iv) Alcohol in water" ],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": [ "a) Saturated solution", "b) Unsaturated solution", "c) Supersaturated solution", "d) Dilute solution" ],
        "column2": [ "i) More solute can be dissolved", "ii) Small amount of solute", "iii) No more solute can be dissolved", "iv) Contains more solute than saturation level" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Effect of pressure on solubility of solids", "b) Effect of temperature on solubility of gases", "c) Effect of temperature on solubility of solids", "d) Effect of pressure on boiling point" ],
        "column2": [ "i) Usually increases", "ii) Decreases", "iii) Increases (Pressure Cooker)", "iv) Insignificant" ],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": [ "a) Abnormal Molar Mass", "b) Vapour Pressure", "c) Boiling Point", "d) Freezing Point" ],
        "column2": [ "i) Pressure exerted by vapour in equilibrium with liquid", "ii) Temperature at which solid and liquid are in equilibrium", "iii) Caused by association or dissociation of solute", "iv) Temperature at which vapour pressure equals external pressure" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    }
]

};



    