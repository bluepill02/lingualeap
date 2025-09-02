
import type { NeetModule } from '@/lib/types';

export const chemicalThermodynamics: NeetModule = {
  id: 'chemistry-chemical-thermodynamics',
  title: 'Chemical Thermodynamics',
  chapter: 'Chemical Thermodynamics',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Basic Concepts (அடிப்படை கருத்துக்கள்)
*   **System (அமைப்பு):** The part of the universe under observation.
*   **Surroundings (சூழல்):** Everything else in the universe.
*   **Types of Systems:** Open (mass & energy exchange), Closed (only energy exchange), Isolated (no exchange).
*   **State Functions:** Properties that depend only on the state of the system, not the path taken (e.g., Pressure, Volume, Temperature, Enthalpy, Entropy, Gibbs Free Energy).

### 2. First Law of Thermodynamics (வெப்ப இயக்கவியலின் முதல் விதி)
*   The law of conservation of energy. ΔU = q + w, where ΔU is the change in internal energy, q is heat, and w is work.
*   **Enthalpy (H):** A measure of total heat content. ΔH = ΔU + PΔV.
*   **Exothermic Reaction (வெப்பம் உமிழ் வினை):** Releases heat, ΔH is negative.
*   **Endothermic Reaction (வெப்பம் கொள் வினை):** Absorbs heat, ΔH is positive.

### 3. Second Law of Thermodynamics (வெப்ப இயக்கவியலின் இரண்டாம் விதி)
*   The entropy of an isolated system always increases over time.
*   **Entropy (S) (என்ட்ரோபி):** A measure of the randomness or disorder of a system. For a spontaneous process, the total entropy change (system + surroundings) is positive. (ஒரு வகுப்பறை, ஆசிரியர் இல்லாதபோது தானாகவே ஒழுங்கற்ற நிலைக்குச் செல்வது போல).
*   ΔS_total = ΔS_sys + ΔS_surr > 0 for a spontaneous process.

### 4. Gibbs Free Energy (G) (கிப்ஸ் கட்டிலா ஆற்றல்)
*   A thermodynamic potential that can be used to calculate the maximum reversible work that may be performed by a thermodynamic system at a constant temperature and pressure.
*   **Gibbs Equation:** ΔG = ΔH - TΔS.
*   **Spontaneity of a Reaction (ஒரு வினையின் தன்னிச்சை):**
    *   If ΔG < 0, the process is spontaneous.
    *   If ΔG > 0, the process is non-spontaneous.
    *   If ΔG = 0, the system is at equilibrium.

### 5. Third Law of Thermodynamics (வெப்ப இயக்கவியலின் மூன்றாம் விதி)
*   The entropy of a perfect crystal at absolute zero (0 Kelvin) is zero.
`,
  workedExamples: [
    {
        problem: "Calculate the standard enthalpy of formation of CH₄(g) if the standard enthalpies of combustion of C(s), H₂(g) and CH₄(g) are -393.5, -285.8 and -890.3 kJ mol⁻¹ respectively.",
        solution: "The required equation is C(s) + 2H₂(g) → CH₄(g). Using Hess's Law: ΔH_f(CH₄) = [ΔH_c(C) + 2 * ΔH_c(H₂)] - ΔH_c(CH₄). ΔH_f(CH₄) = [-393.5 + 2(-285.8)] - (-890.3) = [-393.5 - 571.6] + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol."
    },
    {
        problem: "For a reaction, ΔH = 400 kJ mol⁻¹ and ΔS = 0.2 kJ K⁻¹ mol⁻¹. At what temperature will the reaction become spontaneous?",
        solution: "For a reaction to be spontaneous, ΔG < 0. That is, ΔH - TΔS < 0. So, TΔS > ΔH, or T > ΔH/ΔS. T > (400 kJ mol⁻¹) / (0.2 kJ K⁻¹ mol⁻¹) = 2000 K. The reaction will be spontaneous above 2000 K."
    },
    {
        problem: "Calculate the entropy change in the surroundings when 1.00 mol of H₂O(l) is formed under standard conditions. ΔH_f° = -286 kJ mol⁻¹.",
        solution: "The reaction is the formation of liquid water, which releases heat into the surroundings. So, q_surr = -ΔH_f° = +286 kJ mol⁻¹. ΔS_surr = q_surr / T. At standard conditions, T = 298 K. ΔS_surr = (286000 J mol⁻¹) / (298 K) = 959.7 J K⁻¹ mol⁻¹."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
