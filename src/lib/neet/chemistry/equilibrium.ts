
import type { NeetModule } from '@/lib/types';

export const equilibrium: NeetModule = {
  id: 'chemistry-equilibrium',
  title: 'Equilibrium',
  chapter: 'Equilibrium',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Equilibrium (வேதியியல் - சமநிலை)

# 2. Learning Objectives
1.  After this, you will be able to write expressions for equilibrium constants (Kp and Kc) and relate them.
2.  After this, you will be able to apply Le Chatelier's principle to predict the effect of changes in concentration, pressure, and temperature on a system at equilibrium.
3.  After this, you will be able to differentiate between Arrhenius, Brønsted-Lowry, and Lewis acids and bases.
4.  After this, you will be able to solve problems involving pH, buffer solutions, and solubility product (Ksp).

# 3. Prerequisites
– Understanding of mole concept and concentrations.
– Knowledge of basic chemical reactions and stoichiometry.
– Familiarity with logarithms.

# 4. Concept Overview
Imagine a bustling market in a town like Erode (ஈரோடு), a major center for turmeric. There is a constant buying and selling of turmeric, but if the rate of buying becomes equal to the rate of selling, the overall stock in the market appears constant. This state of balance is **equilibrium (சமநிலை)**. In chemistry, we study reversible reactions that reach a similar dynamic balance. This chapter explores both physical and chemical equilibria. We will learn how to predict the direction a reaction will shift using **Le Chatelier's principle**, and we will dive into **Ionic Equilibrium**, which governs everything from the pH of our blood to how a simple salt dissolves in water.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 2, Chapter 8**. It is a very important chapter for NEET, with numerical problems frequently asked from Le Chatelier's principle, pH calculations, and solubility products.

### 5.1 Physical and Chemical Equilibrium
*   **Equilibrium:** A dynamic state where the rates of forward and reverse processes are equal.
*   **Law of Mass Action and Equilibrium Constant:** For aA + bB ⇌ cC + dD, the equilibrium constant \\(K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}\\).
*   **Relationship between Kp and Kc:** \\( K_p = K_c(RT)^{\\Delta n} \\), where Δn is the change in moles of gas.

### 5.2 Le Chatelier's Principle (லீ சாட்லியர் கொள்கை)
*   A system at equilibrium, when disturbed, will shift to nullify the effect of the change.
    *   **Concentration:** Adding reactants shifts equilibrium to the right.
    *   **Pressure:** Increasing pressure favors the side with fewer gas moles.
    *   **Temperature:** Increasing temperature favors the endothermic reaction.
    *   **Catalyst:** Affects only the rate, not the equilibrium position.

### 5.3 Ionic Equilibrium in Solutions (கரைசல்களில் அயனிச் சமநிலை)
*   **Acids, Bases and Salts:** Arrhenius, Brønsted-Lowry, and Lewis concepts.
*   **Ionization of Acids and Bases:**
    *   **Dissociation constants (Ka and Kb):** Measure the strength of weak acids and bases.
    *   **Ionization of water and pH scale:** \\(K_w = [H^+][OH^-] = 10^{-14}\\) at 298K. \\(pH = -log[H^+]\\).
*   **Common Ion Effect (பொது அயனி விளைவு):** Suppression of dissociation of a weak electrolyte by adding a strong electrolyte with a common ion.
*   **Buffer Solutions (தாங்கல் கரைசல்கள்):** Resist change in pH. Typically a mixture of a weak acid and its salt (e.g., CH₃COOH + CH₃COONa).
*   **Hydrolysis of Salts:** Reaction of ions of a salt with water, which can make the solution acidic or basic.
*   **Solubility Product (Ksp) (கரைதிறன் பெருக்கம்):** The equilibrium constant for a sparingly soluble salt. For AxBy, \\(K_{sp} = [A^{y+}]^x[B^{x-}]^y\\).

# 6. Worked Examples

**1. Easy:** The pH of a solution is 4. Calculate the hydrogen ion concentration.
*   **Solution:**
    *   pH = -log[H⁺].
    *   Therefore, [H⁺] = 10⁻ᵖᴴ.
    *   Given pH = 4, the hydrogen ion concentration [H⁺] = **10⁻⁴ M**.

**2. Medium:** For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.2 kJ/mol. How will the equilibrium be affected by (a) increasing the pressure, (b) increasing the temperature?
*   **Solution:**
    *   **(a) Increasing Pressure:** The forward reaction proceeds with a decrease in the number of moles of gas (1+3=4 on left, 2 on right). Increasing pressure will shift the equilibrium to the **right**, favoring the formation of ammonia.
    *   **(b) Increasing Temperature:** The forward reaction is exothermic (ΔH is negative). Increasing the temperature will favor the endothermic (reverse) reaction. The equilibrium will shift to the **left**.

**3. Must-Practice:** The solubility product (Ksp) of AgCl is 1.8 x 10⁻¹⁰. Calculate the solubility of AgCl in a 0.1 M NaCl solution.
*   **Solution:**
    1.  Equilibrium: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let the solubility of AgCl be 's'.
    2.  So, [Ag⁺] = s.
    3.  The Cl⁻ ions come from two sources: 's' from AgCl and 0.1 M from NaCl. So, [Cl⁻] = s + 0.1.
    4.  Since s is very small compared to 0.1, we can approximate [Cl⁻] ≈ 0.1 M.
    5.  \\(K_{sp} = [Ag^+][Cl^-] \\implies 1.8 \\times 10^{-10} = (s)(0.1)\\).
    6.  \\(s = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9} \\text{ mol/L}\\). This shows the solubility is greatly reduced due to the common ion effect.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( K_p = K_c(RT)^{\\Delta n} \\) | Relation between Kp and Kc |
| \\( pH = -log[H^+] \\) | pH Scale (pH அளவுகோல்) |
| \\( pK_a = -logK_a \\) | Acid Dissociation Constant (அமிலப் பிரிகை மாறிலி) |
| \\( K_{sp} = [A^{y+}]^x[B^{x-}]^y \\) | Solubility Product (கரைதிறன் பெருக்கம்) |
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
    }
],
  assertionReasons: [
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
    }
],
  matchTheColumns: [
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
    }
  ]
};

