
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
