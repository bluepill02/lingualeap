
import type { NeetModule } from '@/lib/types';

export const chemicalKinetics: NeetModule = {
  id: 'chemistry-chemical-kinetics',
  title: 'Chemical Kinetics',
  chapter: 'Chemical Kinetics',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Rate of a Chemical Reaction (வேதிவினையின் வேகம்)
*   The change in concentration of a reactant or product per unit time. Can be expressed as average rate or instantaneous rate.
*   Units: mol L⁻¹ s⁻¹.

### 2. Factors Influencing Rate of a Reaction (வினை வேகத்தைப் பாதிக்கும் காரணிகள்)
*   **Concentration:** Rate generally increases with the concentration of reactants.
*   **Temperature:** Rate usually increases with temperature. A 10°C rise in temperature roughly doubles the reaction rate.
*   **Pressure:** For gaseous reactions, an increase in pressure increases the rate.
*   **Catalyst (வினையூக்கி):** A substance that increases the rate of a reaction without being consumed itself by providing an alternative pathway with lower activation energy.
*   **Surface Area:** For reactions involving solids, a larger surface area increases the rate.

### 3. Rate Law, Order, and Molecularity (வினை வேக விதி, வினை வகை மற்றும் மூலக்கூறு எண்)
*   **Rate Law:** An expression relating the rate of a reaction to the concentration of the reactants. For a reaction aA + bB → Products, Rate = k[A]ˣ[B]ʸ.
*   **Order of Reaction (வினை வகை):** The sum of powers of the concentration of the reactants in the rate law expression (x + y). It is an experimental quantity and can be zero, fractional, or an integer.
*   **Molecularity (மூலக்கூறு எண்):** The number of reacting species taking part in an elementary reaction. It is a theoretical concept and can only be a whole number. It is not defined for complex reactions.
*   **Elementary vs. Complex Reactions:** Elementary reactions occur in a single step. Complex reactions occur in multiple steps.

### 4. Integrated Rate Equations (தொகைப்படுத்தப்பட்ட வேக சமன்பாடுகள்)
*   **Zero Order Reaction:** Rate is independent of concentration. k = ([R]₀ - [R])/t. The plot of [R] vs. t is a straight line.
    *   **Half-life (t₁/₂):** Time taken for the concentration to become half of its initial value. t₁/₂ = [R]₀ / 2k.
*   **First Order Reaction:** Rate is proportional to the first power of the concentration. k = (2.303/t) log([R]₀/[R]). The plot of ln[R] vs. t is a straight line.
    *   **Half-life (t₁/₂):** t₁/₂ = 0.693 / k. The half-life is independent of the initial concentration.

### 5. Temperature Dependence and Collision Theory
*   **Activation Energy (Eₐ) (கிளர்வுறு ஆற்றல்):** The minimum extra energy that reactant molecules must possess to form the activated complex and convert into products. It's the energy barrier for a reaction.
*   **Arrhenius Equation (ஆர்ரீனியஸ் சமன்பாடு):** Relates the rate constant (k) to temperature (T) and activation energy (Eₐ). **k = Ae⁻ᴱᵃ/ᴿᵀ**.
    *   A is the Arrhenius factor or frequency factor.
*   **Collision Theory of Bimolecular Gaseous Reactions:** For a reaction to occur, reactant molecules must collide with:
    1.  **Sufficient energy** (greater than the threshold energy).
    2.  **Proper orientation**.
    *   Rate = P Zₐₑ e⁻ᴱᵃ/ᴿᵀ, where Zₐₑ is the collision frequency and P is the steric factor.
`,
  workedExamples: [
    {
        problem: "The rate constant for a first-order reaction is 60 s⁻¹. How much time will it take to reduce the initial concentration of the reactant to its 1/16th value?",
        solution: "For a first-order reaction, t = (2.303/k) log([R]₀/[R]). Given k = 60 s⁻¹ and [R] = [R]₀/16. So, [R]₀/[R] = 16. t = (2.303/60) log(16) = (2.303/60) * 4 * log(2) = (2.303/60) * 4 * 0.3010 ≈ 4.6 x 10⁻² s."
    },
    {
        problem: "A reaction is first order in A and second order in B. Write the rate law. What is the overall order? How is the rate affected if the concentration of B is increased three times?",
        solution: "The rate law is Rate = k[A]¹[B]². The overall order of the reaction is 1 + 2 = 3. If the concentration of B is tripled, the new rate will be Rate' = k[A][3B]² = 9 * k[A][B]². The rate of the reaction will increase by 9 times."
    },
    {
        problem: "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy (Eₐ).",
        solution: "Using the Arrhenius equation for two temperatures: log(k₂/k₁) = (Eₐ / 2.303R) * [(T₂ - T₁)/(T₁T₂)]. Given k₂/k₁ = 2, R = 8.314 J/mol·K, T₁ = 298 K, T₂ = 308 K. log(2) = (Eₐ / (2.303 * 8.314)) * [(308 - 298)/(308 * 298)]. 0.3010 = (Eₐ / 19.147) * (10 / 91784). Solving for Eₐ gives Eₐ ≈ 52.9 kJ/mol."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};

    