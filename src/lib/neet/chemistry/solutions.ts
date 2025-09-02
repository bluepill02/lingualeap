
import type { NeetModule } from '@/lib/types';

export const solutions: NeetModule = {
  id: 'chemistry-solutions',
  title: 'Solutions',
  chapter: 'Solutions',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Types of Solutions (கரைசல்களின் வகைகள்)
*   A solution is a homogeneous mixture of two or more substances.
*   **Solute (கரைபொருள்):** The component present in a smaller amount.
*   **Solvent (கரைப்பான்):** The component present in a larger amount.

### 2. Expressing Concentration of Solutions (கரைசல்களின் செறிவை வெளிப்படுத்துதல்)
*   **Molarity (M):** Moles of solute per litre of solution.
*   **Molality (m):** Moles of solute per kilogram of solvent. (Molality is temperature-independent).
*   **Mole Fraction (x):** Ratio of moles of a component to the total moles of all components.

### 3. Solubility (கரைதிறன்)
*   The maximum amount of a substance that will dissolve in a given amount of solvent at a specific temperature.
*   **Henry's Law (ஹென்றி விதி):** The partial pressure of a gas in the vapour phase (p) is proportional to the mole fraction of the gas (x) in the solution. p = Kₕx, where Kₕ is Henry's law constant.

### 4. Vapour Pressure of Liquid Solutions (திரவக் கரைசல்களின் ஆவி அழுத்தம்)
*   **Raoult's Law (ரவுல்ட் விதி):** For a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction.
*   **Ideal Solutions:** Solutions that obey Raoult's law over the entire range of concentration.
*   **Non-ideal Solutions:**
    *   **Positive Deviation:** Show higher vapour pressure than predicted by Raoult's law (e.g., ethanol and acetone).
    *   **Negative Deviation:** Show lower vapour pressure than predicted by Raoult's law (e.g., chloroform and acetone).
*   **Azeotropes (கொதிநிலை மாறா கலவைகள்):** Binary mixtures having the same composition in liquid and vapour phase and boil at a constant temperature.

### 5. Colligative Properties (தொகைசார் பண்புகள்)
*   Properties of solutions that depend on the number of solute particles, not on their nature.
    *   **Relative Lowering of Vapour Pressure:** (P₁° - P₁)/P₁° = x₂.
    *   **Elevation in Boiling Point:** ΔTₑ = Kₑm.
    *   **Depression in Freezing Point:** ΔT_f = K_f m.
    *   **Osmotic Pressure (π):** π = CRT.
*   **van't Hoff Factor (i) (வான்ட் ஹாஃப் காரணி):** Used for electrolytes to account for dissociation or association. i = (Normal molar mass) / (Abnormal molar mass).

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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
