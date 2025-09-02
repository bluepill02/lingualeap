
import type { NeetModule } from '@/lib/types';

export const equilibrium: NeetModule = {
  id: 'chemistry-equilibrium',
  title: 'Equilibrium',
  chapter: 'Equilibrium',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Physical and Chemical Equilibrium (இயற் மற்றும் வேதிச் சமநிலை)
*   **Equilibrium:** A state in a process when observable properties like concentration, pressure, and temperature do not show any change with time. It is a dynamic equilibrium, meaning forward and reverse processes occur at the same rate.
*   **Physical Equilibria:** Solid-liquid (melting), liquid-gas (boiling), solid-gas (sublimation).
*   **Chemical Equilibrium:** The state in a reversible reaction where the rate of the forward reaction equals the rate of the reverse reaction.

### 2. Law of Chemical Equilibrium and Equilibrium Constant (வேதிச் சமநிலை விதி மற்றும் சமநிலை மாறிலி)
*   **Law of Mass Action:** The rate of a chemical reaction is proportional to the product of the active masses of the reactants.
*   For a reversible reaction aA + bB ⇌ cC + dD, the equilibrium constant **Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ**.
*   For gaseous reactions, the equilibrium constant in terms of partial pressures is **Kp**.
*   **Relationship between Kp and Kc:** Kp = Kc(RT)Δⁿ, where Δn = (moles of gaseous products) - (moles of gaseous reactants).
*   **Significance of ΔG and ΔG°:** The relationship ΔG = ΔG° + RT lnQ relates free energy change to the reaction quotient. At equilibrium, ΔG = 0, so **ΔG° = -RT lnK**.

### 3. Le Chatelier's Principle (லீ சாட்லியர் கொள்கை)
*   If a change of concentration, pressure, or temperature is applied to a system in equilibrium, the system will shift in a direction that counteracts the change. (ஒரு சமநிலை அமைப்பில் மாற்றம் ஏற்பட்டால், அந்த மாற்றத்தின் விளைவைக் குறைக்க அமைப்பு முயற்சிக்கும்).
    *   **Concentration:** Increasing reactant concentration shifts equilibrium to the right (products).
    *   **Pressure:** Increasing pressure shifts equilibrium to the side with fewer moles of gas.
    *   **Temperature:** Increasing temperature favors the endothermic reaction (where ΔH is positive).
    *   **Catalyst:** A catalyst increases the rate of both forward and reverse reactions equally, so it does not affect the position of equilibrium. It only helps to attain equilibrium faster.

### 4. Ionic Equilibrium (அயனிச் சமநிலை)
*   **Electrolytes:** Weak and strong electrolytes based on their degree of ionization.
*   **Acids and Bases Concepts:**
    *   **Arrhenius:** Acids give H⁺ ions, bases give OH⁻ ions in water.
    *   **Brønsted-Lowry:** Acids are proton donors, bases are proton acceptors.
    *   **Lewis:** Acids are electron-pair acceptors, bases are electron-pair donors.
*   **Ionization of Acids and Bases:** Dissociation constants (Ka and Kb), multistage ionization.
*   **Ionization of Water and pH Scale:** Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 298K. The **pH scale** (pH = -log[H⁺]) is used to express acidity.
*   **Common Ion Effect (பொது அயனி விளைவு):** The suppression of the dissociation of a weak electrolyte by the addition of a strong electrolyte containing a common ion.
*   **Hydrolysis of Salts and pH of their solutions:** The reaction of the anion or cation of a salt with water to produce an acidic or basic solution.
*   **Buffer Solutions (தாங்கல் கரைசல்கள்):** Solutions that resist a change in pH on the addition of a small amount of acid or base. (e.g., a mixture of a weak acid and its salt, CH₃COOH + CH₃COONa).
*   **Solubility Product (Ksp) (கரைதிறன் பெருக்கம்):** The equilibrium constant for a sparingly soluble salt dissolving in a solution. For AxBy ⇌ xAʸ⁺ + yBˣ⁻, Ksp = [Aʸ⁺]ˣ[Bˣ⁻]ʸ.
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
  mcqs: [
    {
        "question": "Which of the following is a Lewis acid?",
        "options": [ "NH₃", "H₂O", "BF₃", "OH⁻" ],
        "answer": "BF₃",
        "explanation": "BF₃ is electron-deficient and can accept an electron pair, making it a Lewis acid."
    },
    {
        "question": "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the relationship between Kp and Kc is:",
        "options": [ "Kp = Kc", "Kp = Kc(RT)⁻²", "Kp = Kc(RT)²", "Kp = Kc(RT)" ],
        "answer": "Kp = Kc(RT)⁻²",
        "explanation": "The relationship is Kp = Kc(RT)Δⁿ. Here, Δn = (moles of gaseous products) - (moles of gaseous reactants) = 2 - (1+3) = -2."
    },
    {
        "question": "The pH of a 0.001 M solution of HCl is:",
        "options": [ "1", "2", "3", "4" ],
        "answer": "3",
        "explanation": "HCl is a strong acid, so it completely dissociates. [H⁺] = 0.001 M = 10⁻³ M. pH = -log(10⁻³) = 3."
    },
    {
        "question": "According to Le Chatelier's principle, adding heat to a solid ⇌ liquid equilibrium will:",
        "options": [
            "Shift the equilibrium to the left",
            "Shift the equilibrium to the right",
            "Not affect the equilibrium",
            "Increase the melting point"
        ],
        "answer": "Shift the equilibrium to the right",
        "explanation": "Melting (solid to liquid) is an endothermic process. Adding heat will favor the endothermic direction, thus shifting the equilibrium towards the liquid phase."
    },
    {
        "question": "The conjugate base of H₂SO₄ is:",
        "options": [ "H₃SO₄⁺", "HSO₄⁻", "SO₄²⁻", "H₂O" ],
        "answer": "HSO₄⁻",
        "explanation": "A conjugate base is formed when an acid donates a proton (H⁺). When H₂SO₄ donates a proton, it forms the bisulphate ion, HSO₄⁻."
    },
    {
        "question": "Which of the following is a buffer solution?",
        "options": [
            "HCl + NaCl",
            "HNO₃ + NaNO₃",
            "CH₃COOH + CH₃COONa",
            "NaOH + NaCl"
        ],
        "answer": "CH₃COOH + CH₃COONa",
        "explanation": "A buffer solution consists of a weak acid and its salt with a strong base (or a weak base and its salt with a strong acid). Acetic acid (CH₃COOH) is a weak acid."
    },
    {
        "question": "For a reaction at equilibrium, the value of ΔG is:",
        "options": [ "Positive", "Negative", "Zero", "Can be any value" ],
        "answer": "Zero",
        "explanation": "At equilibrium, the rates of the forward and reverse reactions are equal, and there is no net change in free energy (ΔG = 0)."
    },
    {
        "question": "The solubility product (Ksp) expression for Ca₃(PO₄)₂ is:",
        "options": [
            "[Ca²⁺]³[PO₄³⁻]²",
            "[Ca²⁺]²[PO₄³⁻]³",
            "[3Ca²⁺][2PO₄³⁻]",
            "[Ca²⁺][PO₄³⁻]"
        ],
        "answer": "[Ca²⁺]³[PO₄³⁻]²",
        "explanation": "Ca₃(PO₄)₂ dissociates into 3 Ca²⁺ ions and 2 PO₄³⁻ ions. The Ksp expression is the product of the ion concentrations raised to the power of their stoichiometric coefficients."
    },
    {
        "question": "The pH of pure water at 298 K is:",
        "options": [ "0", "7", "14", "1" ],
        "answer": "7",
        "explanation": "In pure water at 298 K, [H⁺] = [OH⁻] = 10⁻⁷ M, so the pH is 7, which is neutral."
    },
    {
        "question": "Adding a catalyst to a reversible reaction at equilibrium:",
        "options": [
            "Shifts the equilibrium to the right",
            "Shifts the equilibrium to the left",
            "Increases the value of Kp",
            "Attains the equilibrium faster"
        ],
        "answer": "Attains the equilibrium faster",
        "explanation": "A catalyst increases the rates of both the forward and reverse reactions equally, so it does not change the position of equilibrium but helps it to be reached more quickly."
    },
    {
        "question": "Which of the following is the strongest acid?",
        "options": [ "HClO", "HClO₂", "HClO₃", "HClO₄" ],
        "answer": "HClO₄",
        "explanation": "For oxoacids with the same central atom, the acidity increases with the increase in the oxidation number of the central atom. In HClO₄, Cl has the highest oxidation state (+7)."
    },
    {
        "question": "The common ion effect is an application of:",
        "options": [ "Henry's Law", "Raoult's Law", "Le Chatelier's Principle", "Kohlrausch's Law" ],
        "answer": "Le Chatelier's Principle",
        "explanation": "Adding a common ion increases the concentration of one of the products, causing the equilibrium to shift to the left, suppressing the dissociation of the weak electrolyte."
    },
    {
        "question": "A solution with pH = 9 is:",
        "options": [ "Acidic", "Basic", "Neutral", "Amphoteric" ],
        "answer": "Basic",
        "explanation": "A pH greater than 7 indicates a basic (alkaline) solution."
    },
    {
        "question": "The units of the equilibrium constant Kc for the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) are:",
        "options": [ "mol L⁻¹", "mol⁻¹ L", "mol² L⁻²", "Dimensionless" ],
        "answer": "mol L⁻¹",
        "explanation": "Kc = [PCl₃][Cl₂] / [PCl₅]. Units = (mol/L)(mol/L) / (mol/L) = mol/L or mol L⁻¹."
    },
    {
        "question": "The value of pKw at 298K is:",
        "options": [ "7", "0", "14", "1" ],
        "answer": "14",
        "explanation": "The ionic product of water, Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 298K. pKw = -log(Kw) = 14."
    },
    {
        "question": "Which of the following acts as a Brønsted acid as well as a Brønsted base?",
        "options": [ "H₂O", "NH₄⁺", "SO₄²⁻", "HCl" ],
        "answer": "H₂O",
        "explanation": "Water is amphoteric. It can donate a proton to act as an acid (forming OH⁻) or accept a proton to act as a base (forming H₃O⁺)."
    },
    {
        "question": "The equilibrium constant for a reaction is 10. What will be the equilibrium constant for the reverse reaction?",
        "options": [ "10", "1", "0.1", "100" ],
        "answer": "0.1",
        "explanation": "The equilibrium constant for the reverse reaction is the reciprocal of the equilibrium constant for the forward reaction. K_rev = 1/K_fwd = 1/10 = 0.1."
    },
    {
        "question": "For which of the following reactions is Kp equal to Kc?",
        "options": [
            "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
            "H₂(g) + I₂(g) ⇌ 2HI(g)",
            "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)",
            "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)"
        ],
        "answer": "H₂(g) + I₂(g) ⇌ 2HI(g)",
        "explanation": "Kp = Kc when Δn = 0. For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), Δn = 2 - (1+1) = 0."
    },
    {
        "question": "The degree of dissociation of a weak acid is suppressed by the addition of a strong acid. This is known as:",
        "options": [ "Buffer action", "Common ion effect", "Salt hydrolysis", "Neutralization" ],
        "answer": "Common ion effect",
        "explanation": "Adding a strong acid increases the concentration of H⁺ ions, which is a common ion to the dissociation of the weak acid, shifting the equilibrium to the left."
    },
    {
        "question": "A buffer solution is prepared by mixing:",
        "options": [
            "A strong acid and its salt",
            "A strong base and its salt",
            "A weak acid and its salt with a strong base",
            "A weak acid and a weak base"
        ],
        "answer": "A weak acid and its salt with a strong base",
        "explanation": "This is the definition of an acidic buffer. An example is CH₃COOH and CH₃COONa."
    },
    {
        "question": "What is the pH of 10⁻⁸ M HCl solution?",
        "options": [ "8", "6", "Slightly less than 7", "Slightly more than 7" ],
        "answer": "Slightly less than 7",
        "explanation": "For very dilute strong acids, the contribution of H⁺ from the autoionization of water cannot be neglected. The total [H⁺] will be slightly more than 10⁻⁷ M, making the pH slightly less than 7."
    },
    {
        "question": "The solubility of AgCl will be minimum in:",
        "options": [ "Pure water", "0.1 M NaCl", "0.1 M NaNO₃", "0.1 M NaBr" ],
        "answer": "0.1 M NaCl",
        "explanation": "Due to the common ion effect, the solubility of a sparingly soluble salt is decreased by the addition of a soluble salt containing a common ion. NaCl provides the common ion Cl⁻."
    },
    {
        "question": "The conjugate acid of NH₃ is:",
        "options": [ "NH₂⁻", "NH₄⁺", "N₂H₄", "NH₂OH" ],
        "answer": "NH₄⁺",
        "explanation": "A conjugate acid is formed when a base accepts a proton. When NH₃ accepts H⁺, it forms the ammonium ion, NH₄⁺."
    },
    {
        "question": "If the equilibrium constant for a reaction is very large (>>1), it indicates that:",
        "options": [
            "The reaction is slow",
            "The reaction is fast",
            "The equilibrium lies to the right (product-favored)",
            "The equilibrium lies to the left (reactant-favored)"
        ],
        "answer": "The equilibrium lies to the right (product-favored)",
        "explanation": "A large K value means the concentration of products is much higher than the concentration of reactants at equilibrium."
    },
    {
        "question": "The pH of a buffer solution can be calculated using the:",
        "options": [ "Nernst equation", "Henderson-Hasselbalch equation", "Arrhenius equation", "Gibbs-Helmholtz equation" ],
        "answer": "Henderson-Hasselbalch equation",
        "explanation": "The Henderson-Hasselbalch equation, pH = pKa + log([Salt]/[Acid]), is used to calculate the pH of a buffer solution."
    }
  ],
  "assertionReasons": [
    {
        "assertion": "A catalyst does not affect the position of equilibrium.",
        "reason": "A catalyst increases the rate of the forward and reverse reactions to the same extent.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since both rates are increased equally, the ratio of rates (which determines the equilibrium constant) remains unchanged."
    },
    {
        "assertion": "The solubility of a sparingly soluble salt decreases in the presence of a common ion.",
        "reason": "This is due to the Le Chatelier's principle.",
        "answer": "A",
        "explanation": "The addition of a common ion is a stress on the solubility equilibrium. According to Le Chatelier's principle, the equilibrium shifts to the left (towards the undissociated salt) to counteract this stress, thus decreasing solubility."
    },
    {
        "assertion": "The pH of a buffer solution remains constant on the addition of a small amount of acid or base.",
        "reason": "A buffer solution contains a weak acid and its conjugate base.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The weak acid component neutralizes the added base, and the conjugate base component neutralizes the added acid, thus resisting a change in pH."
    },
    {
        "assertion": "For H₂(g) + I₂(g) ⇌ 2HI(g), Kp = Kc.",
        "reason": "In this reaction, the number of moles of gaseous products is equal to the number of moles of gaseous reactants.",
        "answer": "A",
        "explanation": "The relationship is Kp = Kc(RT)Δⁿ. The reason correctly states that Δn = 2 - (1+1) = 0, which makes the (RT)Δⁿ term equal to 1, thus Kp = Kc."
    },
    {
        "assertion": "All Lewis acids are Brønsted acids.",
        "reason": "A Brønsted acid is a proton donor.",
        "answer": "D",
        "explanation": "The assertion is false. For example, BF₃ is a Lewis acid but has no proton to donate, so it is not a Brønsted acid. The reason is a true statement, but it does not support the assertion."
    },
    {
        "assertion": "An aqueous solution of CH₃COONa is basic.",
        "reason": "The acetate ion (CH₃COO⁻) undergoes hydrolysis to produce OH⁻ ions.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Acetate is the conjugate base of a weak acid and reacts with water (hydrolyzes) as follows: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, increasing the OH⁻ concentration."
    },
    {
        "assertion": "The ionic product of water (Kw) increases with an increase in temperature.",
        "reason": "The autoionization of water is an endothermic process.",
        "answer": "A",
        "explanation": "According to Le Chatelier's principle, increasing the temperature for an endothermic process (the autoionization of water) will shift the equilibrium to the right, increasing the concentrations of H⁺ and OH⁻, and thus increasing Kw."
    },
    {
        "assertion": "For a reaction to be spontaneous, ΔG must be negative.",
        "reason": "ΔG = ΔH - TΔS.",
        "answer": "B",
        "explanation": "Both statements are true. The first is the condition for spontaneity, and the second is the Gibbs-Helmholtz equation. However, the equation itself does not explain *why* ΔG must be negative; it only shows how it is calculated."
    },
    {
        "assertion": "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), an increase in pressure favors the forward reaction.",
        "reason": "The forward reaction proceeds with a decrease in the number of moles.",
        "answer": "A",
        "explanation": "According to Le Chatelier's principle, increasing the pressure will shift the equilibrium to the side with fewer moles of gas. The reason correctly identifies that the forward reaction reduces the number of moles (from 4 to 2)."
    },
    {
        "assertion": "The pH of a 10⁻⁸ M HCl solution is 8.",
        "reason": "pH is the negative logarithm of the H⁺ ion concentration.",
        "answer": "D",
        "explanation": "The assertion is false. The pH of an acidic solution can never be greater than 7. The reason is true, but it is misapplied in the assertion, which neglects the H⁺ contribution from water."
    },
    {
        "assertion": "BF₃ is a stronger Lewis acid than BCl₃.",
        "reason": "The extent of back-bonding is greater in BCl₃ than in BF₃.",
        "answer": "D",
        "explanation": "The assertion is false. BCl₃ is a stronger Lewis acid than BF₃. The reason is also false. Back-bonding is more effective in BF₃ due to better orbital size matching between B and F, which reduces the electron deficiency of boron in BF₃, making it a weaker Lewis acid."
    },
    {
        "assertion": "The equilibrium constant is affected by temperature.",
        "reason": "The value of K depends on the stoichiometry of the reaction.",
        "answer": "B",
        "explanation": "Both statements are true. The equilibrium constant K is indeed dependent on temperature. The way K is expressed also depends on stoichiometry. However, the stoichiometry doesn't explain the temperature dependence."
    },
    {
        "assertion": "The conjugate base of a strong acid is a weak base.",
        "reason": "A strong acid has a high tendency to donate a proton.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Because a strong acid readily donates its proton, its conjugate base has very little tendency to accept it back, making it a weak base."
    },
    {
        "assertion": "A solution of NH₄Cl in water is acidic.",
        "reason": "NH₄Cl is a salt of a weak acid and a strong base.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. NH₄Cl is a salt of a weak base (NH₄OH) and a strong acid (HCl)."
    },
    {
        "assertion": "The pH of a buffer solution does not change upon dilution.",
        "reason": "The ratio of the concentrations of the salt and acid remains the same.",
        "answer": "A",
        "explanation": "The Henderson-Hasselbalch equation is pH = pKa + log([Salt]/[Acid]). Upon dilution, both [Salt] and [Acid] decrease by the same factor, so their ratio remains constant, and the pH does not change. The reason explains the assertion."
    }
  ],
  "matchTheColumns": [
    {
        "column1": [ "a) Arrhenius Acid", "b) Brønsted-Lowry Base", "c) Lewis Acid", "d) Conjugate Acid" ],
        "column2": [ "i) Proton acceptor", "ii) H⁺ donor", "iii) Electron pair acceptor", "iv) Gives H⁺ in water" ],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": [ "a) pH < 7", "b) pH = 7", "c) pH > 7", "d) pOH" ],
        "column2": [ "i) Basic solution", "ii) Neutral solution", "iii) 14 - pH", "iv) Acidic solution" ],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": [ "a) Le Chatelier's Principle", "b) Common Ion Effect", "c) Buffer Solution", "d) Solubility Product" ],
        "column2": [ "i) Resists pH change", "ii) Ksp", "iii) Effect of change on equilibrium", "iv) Suppresses dissociation" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Haber's Process for NH₃", "b) Dissociation of PCl₅", "c) Melting of ice", "d) Formation of HI" ],
        "column2": [ "i) Δn = 0", "ii) Endothermic", "iii) Exothermic, Δn < 0", "iv) Endothermic, Δn > 0" ],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": [ "a) pH of 10⁻³ M HCl", "b) pH of 10⁻³ M NaOH", "c) pOH of 10⁻⁴ M NaOH", "d) pH of pure water" ],
        "column2": [ "i) 11", "ii) 4", "iii) 7", "iv) 3" ],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": [ "a) H₂O", "b) BF₃", "c) NH₃", "d) Ag⁺" ],
        "column2": [ "i) Lewis Acid", "ii) Lewis Base", "iii) Lewis Acid", "iv) Amphoteric (Lewis acid &amp; base)" ],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": [ "a) Kp > Kc", "b) Kp < Kc", "c) Kp = Kc", "d) Equilibrium constant" ],
        "column2": [ "i) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)", "ii) H₂(g) + I₂(g) ⇌ 2HI(g)", "iii) PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)", "iv) Ratio of rate constants" ],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": [ "a) Acidic Buffer", "b) Basic Buffer", "c) Salt of weak acid and strong base", "d) Salt of strong acid and weak base" ],
        "column2": [ "i) NH₄Cl", "ii) CH₃COONa", "iii) NH₄OH + NH₄Cl", "iv) CH₃COOH + CH₃COONa" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": [ "a) [H⁺] > 10⁻⁷ M", "b) [OH⁻] > 10⁻⁷ M", "c) [H⁺] = [OH⁻]", "d) Kw" ],
        "column2": [ "i) Neutral solution", "ii) Ionic product of water", "iii) Acidic solution", "iv) Basic solution" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Increase in temperature", "b) Increase in pressure", "c) Addition of reactant", "d) Addition of catalyst" ],
        "column2": [ "i) Favors side with fewer moles", "ii) No effect on equilibrium position", "iii) Favors forward reaction", "iv) Favors endothermic reaction" ],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": [ "a) Conjugate acid of H₂O", "b) Conjugate base of H₂O", "c) Conjugate acid of NH₂⁻", "d) Conjugate base of H₃O⁺" ],
        "column2": [ "i) OH⁻", "ii) H₂O", "iii) H₃O⁺", "iv) NH₃" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Strong acid", "b) Weak acid", "c) Strong base", "d) Weak base" ],
        "column2": [ "i) High pKa", "ii) High pKb", "iii) Low pKa", "iv) Low pKb" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Solubility of AgCl in 0.1 M HCl", "b) Solubility of H₂S in acidic solution", "c) pH of CH₃COONH₄ solution", "d) Hydrolysis" ],
        "column2": [ "i) Independent of concentration", "ii) Decreases", "iii) Reaction of an ion with water", "iv) Decreases" ],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": [ "a) ΔG > 0", "b) ΔG < 0", "c) ΔG = 0", "d) ΔG°" ],
        "column2": [ "i) Equilibrium", "ii) Standard free energy change", "iii) Spontaneous", "iv) Non-spontaneous" ],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": [ "a) pKa", "b) pKb", "c) pH", "d) pOH" ],
        "column2": [ "i) -log[OH⁻]", "ii) -log[H⁺]", "iii) -log(Ka)", "iv) -log(Kb)" ],
        "answer": "a-iii, b-iv, c-ii, d-i (Assuming pOH is not an option for 'i')"
    }
]

};
