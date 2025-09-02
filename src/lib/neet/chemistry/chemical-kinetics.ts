
import type { NeetModule } from '@/lib/types';

export const chemicalKinetics: NeetModule = {
  id: 'chemistry-chemical-kinetics',
  title: 'Chemical Kinetics',
  chapter: 'Chemical Kinetics',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Rate of a Chemical Reaction (வேதிவினையின் வேகம்)
*   The change in concentration of a reactant or product per unit time.
*   Units: mol L⁻¹ s⁻¹.

### 2. Factors Influencing Rate of a Reaction (வினை வேகத்தைப் பாதிக்கும் காரணிகள்)
*   Concentration of reactants, temperature, presence of a catalyst, surface area of reactants.

### 3. Rate Law and Order of a Reaction (வினை வேக விதி மற்றும் வினை வகை)
*   **Rate Law:** An expression relating the rate of a reaction to the concentration of the reactants. For a reaction aA + bB → Products, Rate = k[A]ˣ[B]ʸ.
*   **Order of Reaction:** The sum of powers of the concentration of the reactants in the rate law expression (x + y). It is an experimental quantity and can be zero, fractional, or an integer.

### 4. Integrated Rate Equations (தொகைப்படுத்தப்பட்ட வேக சமன்பாடுகள்)
*   **Zero Order Reaction:** Rate is independent of concentration. k = ([R]₀ - [R])/t. Half-life, t₁/₂ = [R]₀ / 2k.
*   **First Order Reaction:** Rate is proportional to the first power of the concentration. k = (2.303/t) log([R]₀/[R]). Half-life, t₁/₂ = 0.693 / k. The half-life is independent of the initial concentration. (ஒரு ஓட்டப்பந்தயத்தில், முதல் இடத்தை அடைபவர் மற்றவர்களைச் சார்ந்து இருக்க மாட்டார் என்பது போல).

### 5. Temperature Dependence of the Rate of a Reaction
*   The rate of reaction increases with an increase in temperature.
*   **Arrhenius Equation (ஆர்ரீனியஸ் சமன்பாடு):** k = Ae⁻ᴱᵃ/ᴿᵀ, where Eₐ is the activation energy.
*   **Activation Energy (கிளர்வுறு ஆற்றல்):** The minimum extra energy that reactant molecules must possess to form the activated complex and convert into products.

### 6. Collision Theory of Chemical Reactions (வேதி வினைகளின் மோதல் கொள்கை)
*   For a reaction to occur, reactant molecules must collide with sufficient energy (threshold energy) and proper orientation.
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
