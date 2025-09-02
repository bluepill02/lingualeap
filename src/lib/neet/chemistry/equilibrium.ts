
import type { NeetModule } from '@/lib/types';

export const equilibrium: NeetModule = {
  id: 'chemistry-equilibrium',
  title: 'Equilibrium',
  chapter: 'Equilibrium',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Physical and Chemical Equilibrium (இயற் 및 வேதிச் சமநிலை)
*   **Equilibrium:** A state in a process when observable properties like concentration, pressure, and temperature do not show any change with time.
*   **Chemical Equilibrium:** The state in a reversible reaction where the rate of the forward reaction equals the rate of the reverse reaction.

### 2. Law of Mass Action and Equilibrium Constant (நிறை தாக்க விதி மற்றும் சமநிலை மாறிலி)
*   For a reversible reaction aA + bB ⇌ cC + dD, the equilibrium constant Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ.
*   Kp = Kc(RT)Δⁿ, where Δn = (moles of gaseous products) - (moles of gaseous reactants).

### 3. Le Chatelier's Principle (லீ சாட்லியர் கொள்கை)
*   If a change of concentration, pressure, or temperature is applied to a system in equilibrium, the system will shift in a direction that counteracts the change. (ஒரு சமநிலை அமைப்பில் மாற்றம் ஏற்பட்டால், அந்த மாற்றத்தின் விளைவைக் குறைக்க அமைப்பு முயற்சிக்கும்).
    *   **Concentration:** Increasing reactant concentration shifts equilibrium to the right.
    *   **Pressure:** Increasing pressure shifts equilibrium to the side with fewer moles of gas.
    *   **Temperature:** Increasing temperature favors the endothermic reaction.
    *   **Catalyst:** A catalyst increases the rate of both forward and reverse reactions equally, so it does not affect the position of equilibrium. It only helps to attain equilibrium faster.

### 4. Ionic Equilibrium (அயனிச் சமநிலை)
*   **Acids and Bases:**
    *   **Arrhenius:** Acids give H⁺ ions, bases give OH⁻ ions in water.
    *   **Brønsted-Lowry:** Acids are proton donors, bases are proton acceptors.
    *   **Lewis:** Acids are electron-pair acceptors, bases are electron-pair donors.
*   **pH Scale:** pH = -log[H⁺].
*   **Buffer Solutions (தாங்கல் கரைசல்கள்):** Solutions that resist a change in pH on the addition of a small amount of acid or base. (e.g., a mixture of a weak acid and its salt, CH₃COOH + CH₃COONa).
*   **Solubility Product (Ksp) (கரைதிறன் பெருக்கம்):** The equilibrium constant for a solid substance dissolving in an aqueous solution. For AxBy ⇌ xAʸ⁺ + yBˣ⁻, Ksp = [Aʸ⁺]ˣ[Bˣ⁻]ʸ.

### 5. Common Ion Effect (பொது அயனி விளைவு)
*   The suppression of the dissociation of a weak electrolyte by the addition of a strong electrolyte containing a common ion.
`,
  workedExamples: [
    {
        problem: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.2 kJ/mol. How will the equilibrium be affected by (a) increasing the pressure, (b) increasing the temperature, and (c) adding a catalyst?",
        solution: "(a) **Increasing Pressure:** The forward reaction proceeds with a decrease in the number of moles of gas (1+3 = 4 moles on left, 2 moles on right). According to Le Chatelier's principle, increasing the pressure will shift the equilibrium to the right, favoring the formation of ammonia. (b) **Increasing Temperature:** The forward reaction is exothermic (ΔH is negative). Increasing the temperature will favor the endothermic (reverse) reaction. The equilibrium will shift to the left. (c) **Adding a Catalyst:** A catalyst will increase the rate of both the forward and reverse reactions equally. It will help the reaction to reach equilibrium faster, but it will not affect the position of the equilibrium."
    },
    {
        problem: "The pH of a solution is 4. Calculate the hydrogen ion concentration.",
        solution: "pH = -log[H⁺]. Therefore, [H⁺] = 10⁻ᵖᴴ. Given pH = 4, the hydrogen ion concentration [H⁺] = 10⁻⁴ M."
    },
    {
        problem: "The solubility product (Ksp) of AgCl is 1.8 x 10⁻¹⁰. Calculate the solubility of AgCl in pure water.",
        solution: "The equilibrium is AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let the solubility of AgCl be 's' mol/L. Then, [Ag⁺] = s and [Cl⁻] = s. Ksp = [Ag⁺][Cl⁻] = (s)(s) = s². So, s = √Ksp = √(1.8 x 10⁻¹⁰) = 1.34 x 10⁻⁵ mol/L."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
