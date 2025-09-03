
import type { NeetModule } from '@/lib/types';

export const chemicalKinetics: NeetModule = {
  id: 'chemistry-chemical-kinetics',
  title: 'Chemical Kinetics',
  chapter: 'Chemical Kinetics',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Chemical Kinetics (வேதியியல் - வேதி வினைவேகவியல்)

# 2. Learning Objectives
1.  After this, you will be able to define the rate of a reaction and the factors affecting it.
2.  After this, you will be able to differentiate between the order and molecularity of a reaction.
3.  After this, you will be able to derive and use the integrated rate equations for zero and first-order reactions to calculate half-life.
4.  After this, you will be able to explain the effect of temperature on reaction rate using the Arrhenius equation and activation energy.

# 3. Prerequisites
– Understanding of concentration terms (molarity).
– Ability to interpret graphs and perform logarithmic calculations.
– Knowledge of basic chemical reactions.

# 4. Concept Overview
Imagine a Pongal (பொங்கல்) race where some people run very fast and some run slow. What determines their speed? **Chemical Kinetics** is the branch of chemistry that studies the speed, or 'rate', of chemical reactions. It answers the question, "How fast does a reaction go?". We'll explore the factors that control this speed, like temperature and concentration. We will also learn about a crucial concept called **activation energy (கிளர்வுறு ஆற்றல்)**, which is like the initial push needed to start a race. Understanding kinetics is vital for controlling chemical processes in industry and biology.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Chemistry Volume 1, Chapter 7**. This chapter is heavily numerical-based for NEET, focusing on integrated rate laws, half-life calculations, and the Arrhenius equation.

### 5.1 Rate of a Chemical Reaction (வேதிவினையின் வேகம்)
*   The change in concentration of a reactant or product per unit time.
*   **Factors influencing rate:** Concentration, Temperature, Catalyst, Pressure, Surface Area.

### 5.2 Rate Law, Order, and Molecularity
*   **Rate Law:** An expression relating the reaction rate to reactant concentrations. Rate = k[A]ˣ[B]ʸ.
*   **Order of Reaction (வினை வகை):** The sum of the powers (x+y) in the rate law. It's an experimental value.
*   **Molecularity (மூலக்கூறு எண்):** The number of reacting species in an elementary reaction. It's a theoretical concept.

### 5.3 Integrated Rate Equations
*   **Zero-Order Reaction:** Rate is independent of concentration. \\( [A] = [A]_0 - kt \\). Half-life \\( t_{1/2} = \\frac{[A]_0}{2k} \\).
*   **First-Order Reaction:** Rate is proportional to concentration. \\( k = \\frac{2.303}{t} \\log{\\frac{[A]_0}{[A]}} \\). Half-life \\( t_{1/2} = \\frac{0.693}{k} \\), which is independent of initial concentration.

### 5.4 Collision Theory and Arrhenius Equation
*   **Collision Theory:** For a reaction to occur, molecules must collide with proper orientation and sufficient energy.
*   **Activation Energy (Eₐ) (கிளர்வுறு ஆற்றல்):** The minimum energy required to start a reaction.
*   **Arrhenius Equation:** Relates the rate constant (k) to temperature (T) and activation energy (Eₐ).
    \\[ k = Ae^{-E_a/RT} \\]
    where A is the frequency factor.

# 6. Worked Examples

**1. Easy:** The rate constant for a first-order reaction is 60 s⁻¹. How much time will it take to reduce the initial concentration of the reactant to its 1/16th value?
*   **Solution:**
    *   For a first-order reaction, \\( t = \\frac{2.303}{k} \\log{\\frac{[R]_0}{[R]}} \\).
    *   Given k = 60 s⁻¹ and \\([R] = [R]_0/16\\). So, \\(\\frac{[R]_0}{[R]} = 16\\).
    *   \\( t = \\frac{2.303}{60} \\log(16) = \\frac{2.303}{60} \\times 4 \\log(2) = \\frac{2.303}{60} \\times 4 \\times 0.3010 \\approx 4.6 \\times 10^{-2} \\text{ s} \\).

**2. Medium:** A reaction is first order in A and second order in B. Write the rate law. How is the rate affected if the concentration of B is tripled?
*   **Solution:**
    *   Rate Law: Rate = k[A]¹[B]².
    *   Overall order = 1 + 2 = 3.
    *   If [B] becomes 3[B], the new rate Rate' = k[A](3[B])² = 9k[A][B]² = 9 × (original Rate).
    *   The rate increases by **9 times**.

**3. Must-Practice:** The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy (Eₐ).
*   **Solution:**
    *   Use the Arrhenius equation for two temperatures: \\( \\log{\\frac{k_2}{k_1}} = \\frac{E_a}{2.303R} (\\frac{T_2 - T_1}{T_1T_2}) \\).
    *   Given \\(k_2/k_1 = 2\\), R = 8.314 J/mol·K, T₁ = 298 K, T₂ = 308 K.
    *   \\( \\log(2) = \\frac{E_a}{2.303 \\times 8.314} (\\frac{308 - 298}{308 \\times 298}) \\).
    *   \\( 0.3010 = \\frac{E_a}{19.147} (\\frac{10}{91784}) \\).
    *   Solving for Eₐ gives Eₐ ≈ 52900 J/mol or **52.9 kJ/mol**.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( t_{1/2} = \\frac{0.693}{k} \\) | Half-life for First-Order Reaction (முதல் வகை வினை அரை ஆயுள்) |
| \\( t_{1/2} \\propto [A]_0 \\) | Half-life for Zero-Order Reaction |
| \\( k = Ae^{-E_a/RT} \\) | Arrhenius Equation (ஆர்ரீனியஸ் சமன்பாடு) |
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
  mcqs: [
    {
        "question": "For a first-order reaction, the half-life period is independent of:",
        "options": ["Rate constant", "Initial concentration", "Temperature", "Pressure"],
        "answer": "Initial concentration",
        "explanation": "The formula for the half-life of a first-order reaction is t₁/₂ = 0.693/k. It does not depend on the initial concentration of the reactant."
    },
    {
        "question": "The rate of a reaction is doubled for every 10°C rise in temperature. If the temperature is raised by 50°C, the rate of the reaction will increase by a factor of:",
        "options": ["10", "25", "32", "64"],
        "answer": "32",
        "explanation": "The increase is by a factor of 2 for every 10°C rise. A 50°C rise is five such 10°C rises. So, the factor is 2⁵ = 32."
    },
    {
        "question": "The units of the rate constant for a zero-order reaction are:",
        "options": ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer": "mol L⁻¹ s⁻¹",
        "explanation": "For a zero-order reaction, Rate = k. The units of rate are mol L⁻¹ s⁻¹, so the units of k are also mol L⁻¹ s⁻¹."
    },
    {
        "question": "A catalyst increases the rate of a reaction by:",
        "options": ["Increasing the activation energy", "Decreasing the activation energy", "Increasing the enthalpy change", "Decreasing the equilibrium constant"],
        "answer": "Decreasing the activation energy",
        "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy, thus increasing the number of effective collisions."
    },
    {
        "question": "For a reaction A + B → Products, the rate law is given by Rate = k[A][B]². What is the order of the reaction?",
        "options": ["1", "2", "3", "0"],
        "answer": "3",
        "explanation": "The overall order is the sum of the powers of the concentration terms in the rate law. Order = 1 + 2 = 3."
    }
],
  assertionReasons: [
    {
        "assertion": "The molecularity of a reaction is always a whole number.",
        "reason": "Molecularity is the number of molecules taking part in an elementary step of the reaction.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since molecularity represents a count of molecules, it cannot be zero, negative, or fractional."
    },
    {
        "assertion": "The rate of a reaction is determined by the slowest step in the reaction mechanism.",
        "reason": "The slowest step is the rate-determining step.",
        "answer": "A",
        "explanation": "The overall rate of a multi-step reaction cannot be faster than its slowest step. Therefore, the slowest step acts as a bottleneck and determines the overall rate."
    },
    {
        "assertion": "The half-life of a zero-order reaction is proportional to the initial concentration.",
        "reason": "The formula for the half-life of a zero-order reaction is t₁/₂ = [R]₀ / 2k.",
        "answer": "A",
        "explanation": "The reason provides the correct formula which shows that t₁/₂ is directly proportional to the initial concentration [R]₀."
    },
    {
        "assertion": "All collisions between reactant molecules lead to product formation.",
        "reason": "Only those collisions in which molecules have proper orientation and sufficient kinetic energy lead to the formation of products.",
        "answer": "D",
        "explanation": "The assertion is false. The reason is true and explains the concept of effective collisions."
    },
    {
        "assertion": "A catalyst does not alter the Gibbs free energy (ΔG) of a reaction.",
        "reason": "A catalyst only lowers the activation energy of a reaction.",
        "answer": "B",
        "explanation": "Both statements are true. A catalyst affects the rate but not the thermodynamics (ΔG, ΔH) or the equilibrium position of a reaction. However, the reason doesn't fully explain the assertion; ΔG depends only on the initial and final states, which the catalyst does not change."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) First-order reaction", "b) Zero-order reaction", "c) Rate constant (k)", "d) Activation energy (Eₐ)"],
        "column2": ["i) Units are mol L⁻¹ s⁻¹", "ii) Arrhenius equation", "iii) Units are s⁻¹", "iv) Energy barrier"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Half-life (t₁/₂)", "b) Molecularity", "c) Order of reaction", "d) Collision frequency (Z)"],
        "column2": ["i) Sum of powers in rate law", "ii) Theoretical concept", "iii) Number of collisions per second per unit volume", "iv) Time for 50% completion"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Rate = k[A]⁰", "b) Rate = k[A]¹", "c) Rate = k[A]²", "d) Rate = k[A]¹[B]¹"],
        "column2": ["i) Overall order = 2", "ii) First-order reaction", "iii) Zero-order reaction", "iv) Second-order reaction"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Temperature", "b) Catalyst", "c) Concentration", "d) Surface area"],
        "column2": ["i) Increases number of collisions", "ii) Increases kinetic energy of molecules", "iii) Provides alternative path", "iv) Increases contact between reactants"],
        "answer": "a-ii, b-iii, c-i, d-iv"
    },
    {
        "column1": ["a) Integrated rate equation for first order", "b) Half-life for first order", "c) Arrhenius equation", "d) Half-life for zero order"],
        "column2": ["i) t₁/₂ = [R]₀/2k", "ii) k = Ae⁻ᴱᵃ/ᴿᵀ", "iii) t₁/₂ = 0.693/k", "iv) k = (2.303/t)log([R]₀/[R])"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    }
  ]
};

