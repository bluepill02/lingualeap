
import type { NeetModule } from '@/lib/types';

export const redoxReactionsAndElectrochemistry: NeetModule = {
  id: 'chemistry-redox-reactions-and-electrochemistry',
  title: 'Redox Reactions and Electrochemistry',
  chapter: 'Redox Reactions and Electrochemistry',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Redox Reactions and Electrochemistry (வேதியியல் - ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் மின்வேதியியல்)

# 2. Learning Objectives
1.  After this, you will be able to determine the oxidation number of elements in compounds.
2.  After this, you will be able to balance redox reactions using the ion-electron method and the oxidation number method.
3.  After this, you will be able to explain the functioning of galvanic and electrolytic cells.
4.  After this, you will be able to apply the Nernst equation and Kohlrausch's law to solve problems.

# 3. Prerequisites
– Understanding of the mole concept and balancing equations.
– Basic knowledge of chemical equilibrium and thermodynamics.

# 4. Concept Overview
From the battery in your TV remote to the process of rusting, many crucial chemical phenomena involve the transfer of electrons. This chapter covers two related topics: **Redox Reactions**, which describe the loss and gain of electrons, and **Electrochemistry**, which is the study of how this electron transfer can produce electricity (like in a battery) or how electricity can be used to drive chemical reactions (like in electroplating). It's like a two-way street connecting chemical energy and electrical energy.

# 5. Detailed Explanation
This unit combines topics from **Tamil Nadu State Board Class 11 Chemistry Chapter 9 ('Redox Reactions')** and **Class 12 Chemistry Chapter 9 ('Electrochemistry')**. NEET questions often integrate concepts from both parts, especially in balancing and cell potential calculations.

### 5.1 Redox Reactions (ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள்)
*   **Oxidation and Reduction:** Oxidation is Loss of electrons (OIL), Reduction is Gain of electrons (RIG).
*   **Oxidation Number (ஆக்ஸிஜனேற்ற எண்):** A number assigned to an element representing its degree of oxidation.
*   **Balancing Redox Reactions:**
    *   **Ion-Electron Method:** Split into oxidation and reduction half-reactions and balance them separately.
    *   **Oxidation Number Method:** Balance the increase and decrease in oxidation numbers.

### 5.2 Electrochemistry (மின்வேதியியல்)
*   **Electrochemical Cells:**
    *   **Galvanic Cell (கால்வானிக் கலம்):** A device that converts the chemical energy of a spontaneous redox reaction into electrical energy (e.g., Daniell cell). Anode is negative; Cathode is positive.
    *   **Electrolytic Cell (மின்னார் பகுப்புக் கலம்):** A device that uses electrical energy to cause a non-spontaneous reaction. Anode is positive; Cathode is negative.
*   **Electrode Potential and EMF:**
    *   **Standard Electrode Potential (E°):** The potential of an electrode relative to the Standard Hydrogen Electrode (SHE).
    *   **EMF of a Cell:** \\(E°_{cell} = E°_{cathode} - E°_{anode}\\).
*   **Nernst Equation (நெர்ன்ஸ்ட் சமன்பாடு):** Relates cell potential to concentration. \\(E_{cell} = E°_{cell} - \\frac{RT}{nF} \\ln Q\\).
*   **Conductance in Electrolytic Solutions:**
    *   **Molar Conductivity (Λm):** Increases with dilution.
    *   **Kohlrausch's Law (கோல்ராஷ் விதி):** The limiting molar conductivity of an electrolyte is the sum of the individual contributions of its ions.
*   **Batteries and Fuel Cells:** Practical applications of electrochemical cells.

# 6. Worked Examples

**1. Easy:** What is the oxidation number of Cr in K₂Cr₂O₇?
*   **Solution:**
    *   Let the oxidation number of Cr be x. K is +1, O is -2.
    *   2(+1) + 2(x) + 7(-2) = 0
    *   2 + 2x - 14 = 0
    *   2x = 12, so **x = +6**.

**2. Medium:** Calculate the standard cell potential (E°cell) for the Daniell cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). Given E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V.
*   **Solution:**
    *   \\(E°_{cell} = E°_{cathode} - E°_{anode}\\).
    *   Cathode (Reduction): Cu²⁺ + 2e⁻ → Cu. Anode (Oxidation): Zn → Zn²⁺ + 2e⁻.
    *   \\(E°_{cell} = (+0.34 V) - (-0.76 V) = 0.34 + 0.76 = 1.10 V\\).

**3. Must-Practice:** A solution of CuSO₄ is electrolyzed for 10 minutes with a current of 1.5 amperes. What is the mass of copper deposited at the cathode? (Molar mass of Cu = 63.5 g/mol, F = 96500 C/mol).
*   **Solution:**
    1.  Calculate total charge passed: Q = I × t = 1.5 A × (10 × 60 s) = 900 C.
    2.  The cathode reaction is Cu²⁺ + 2e⁻ → Cu. This shows n = 2 moles of electrons are needed per mole of Cu.
    3.  According to Faraday's law, mass deposited \\(m = \\frac{M \\times Q}{n \\times F}\\).
    4.  \\(m = \\frac{63.5 \\times 900}{2 \\times 96500} = \\frac{57150}{193000} \\approx 0.296 \\text{ g}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(E°_{cell} = E°_{cathode} - E°_{anode}\\) | Standard EMF of Cell (கலத்தின் திட்ட மின்னியக்கு விசை) |
| \\(\\Delta G° = -nFE°_{cell}\\) | Gibbs Energy and Cell Potential (கிப்ஸ் ஆற்றல் மற்றும் மின்னழுத்தம்) |
| \\(E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log Q\\) | Nernst Equation at 298K (நெர்ன்ஸ்ட் சமன்பாடு) |
| \\(\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ\\) | Kohlrausch's Law (கோல்ராஷ் விதி) |
`,
  workedExamples: [
    {
        problem: "Calculate the standard cell potential (E°cell) for the Daniell cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). Given E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V.",
        solution: "The standard cell potential is calculated as E°cell = E°(cathode) - E°(anode). In the Daniell cell, copper is the cathode (reduction) and zinc is the anode (oxidation). E°cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 V - (-0.76 V) = 1.10 V."
    },
    {
        problem: "What is the oxidation number of Cr in K₂Cr₂O₇?",
        solution: "Let the oxidation number of Cr be x. The oxidation number of K is +1 and O is -2. The overall charge of the compound is 0. So, 2(+1) + 2(x) + 7(-2) = 0. 2 + 2x - 14 = 0. 2x - 12 = 0. 2x = +6. The oxidation number of Cr is +6."
    },
    {
        problem: "A solution of CuSO₄ is electrolyzed for 10 minutes with a current of 1.5 amperes. What is the mass of copper deposited at the cathode? (Atomic mass of Cu = 63.5 g/mol)",
        solution: "According to Faraday's first law of electrolysis, the mass deposited (m) is proportional to the charge passed (Q). Q = I × t = 1.5 A × (10 × 60 s) = 900 C. The reaction at the cathode is Cu²⁺ + 2e⁻ → Cu. This means 2 Faradays (2 × 96500 C) of charge are required to deposit 1 mole (63.5 g) of copper. Mass deposited = (Q / (n × F)) × Molar mass = (900 / (2 × 96500)) × 63.5 ≈ 0.296 g."
    }
  ],
  mcqs: [
    {
        "question": "In the Daniell cell, the anode is:",
        "options": ["Copper", "Zinc", "Graphite", "Platinum"],
        "answer": "Zinc",
        "explanation": "In a Daniell cell, zinc is more reactive and undergoes oxidation (Zn → Zn²⁺ + 2e⁻), so it acts as the negative electrode, the anode."
    },
    {
        "question": "The relationship between standard cell potential (E°cell) and standard Gibbs free energy (ΔG°) is:",
        "options": ["`ΔG° = nFE°cell`", "`ΔG° = -nFE°cell`", "`E°cell = nFΔG°`", "`E°cell = -nFΔG°`"],
        "answer": "`ΔG° = -nFE°cell`",
        "explanation": "This fundamental equation connects the thermodynamic feasibility (ΔG°) of a reaction to its electrochemical potential (E°cell)."
    },
    {
        "question": "Which of the following is a secondary battery?",
        "options": ["Leclanché cell (Dry cell)", "Mercury cell", "Lead storage battery", "Fuel cell"],
        "answer": "Lead storage battery",
        "explanation": "A secondary battery is rechargeable. The lead storage battery used in cars can be recharged by reversing the cell reactions."
    },
    {
        "question": "The molar conductivity of an electrolytic solution:",
        "options": ["Decreases with dilution", "Increases with dilution", "Remains constant with dilution", "Becomes zero at infinite dilution"],
        "answer": "Increases with dilution",
        "explanation": "Upon dilution, the number of ions per unit volume decreases, but the increase in the degree of dissociation (for weak electrolytes) and the decrease in inter-ionic forces cause the molar conductivity to increase."
    },
    {
        "question": "The oxidation number of Mn in `KMnO₄` is:",
        "options": ["+2", "+4", "+6", "+7"],
        "answer": "+7",
        "explanation": "Let the oxidation number of Mn be x. K is +1, O is -2. So, (+1) + x + 4(-2) = 0. 1 + x - 8 = 0. x = +7."
    }
],
  assertionReasons: [
    {
        "assertion": "For a strong electrolyte, the molar conductivity increases slowly with dilution.",
        "reason": "A strong electrolyte is completely dissociated at all concentrations.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since a strong electrolyte is already fully dissociated, dilution only increases the distance between ions, reducing inter-ionic attraction and slightly increasing conductivity. There is no significant increase in the number of ions."
    },
    {
        "assertion": "In an electrolytic cell, the electrode at which oxidation occurs is the anode.",
        "reason": "The anode in an electrolytic cell is the positive electrode.",
        "answer": "B",
        "explanation": "Both statements are true. By definition, oxidation always occurs at the anode. In an electrolytic cell, the anode is connected to the positive terminal of the external source. However, the reason doesn't explain the assertion; they are two separate conventions for electrolytic cells."
    },
    {
        "assertion": "If `E°cell` is positive, then `ΔG°` is negative and the reaction is spontaneous.",
        "reason": "The relationship is `ΔG° = -nFE°cell`.",
        "answer": "A",
        "explanation": "The reason correctly provides the mathematical relationship that explains the assertion. If `E°cell` is positive, then `ΔG°` will be negative, which is the condition for a spontaneous reaction."
    },
    {
        "assertion": "Copper cannot displace zinc from a zinc sulphate solution.",
        "reason": "The standard reduction potential of zinc is higher than that of copper.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. A metal can only displace another metal from its salt solution if it is more reactive, which means it has a *lower* standard reduction potential. E°(Zn²⁺/Zn) = -0.76 V, which is lower than E°(Cu²⁺/Cu) = +0.34 V. So, zinc is more reactive than copper."
    },
    {
        "assertion": "Kohlrausch's law is applicable for calculating the limiting molar conductivity of weak electrolytes.",
        "reason": "The limiting molar conductivity of a weak electrolyte cannot be determined directly by extrapolation.",
        "answer": "A",
        "explanation": "The reason correctly explains why Kohlrausch's law is so important for weak electrolytes. Since they don't dissociate completely, their molar conductivity does not approach a linear limit, making extrapolation impossible. Kohlrausch's law allows for its calculation from the values of strong electrolytes."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Galvanic Cell", "b) Electrolytic Cell", "c) Molar Conductivity", "d) Kohlrausch's Law"],
        "column2": ["i) `Λ°m = ν⁺λ°⁺ + ν⁻λ°⁻`", "ii) Converts electrical to chemical energy", "iii) Converts chemical to electrical energy", "iv) `Λm = κ / C`"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Anode in Galvanic cell", "b) Cathode in Galvanic cell", "c) Anode in Electrolytic cell", "d) Cathode in Electrolytic cell"],
        "column2": ["i) Positive, Reduction", "ii) Negative, Oxidation", "iii) Positive, Oxidation", "iv) Negative, Reduction"],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": ["a) Lead Storage Battery", "b) Dry Cell (Leclanché)", "c) Fuel Cell", "d) Nernst Equation"],
        "column2": ["i) Primary battery", "ii) `E = E° - (RT/nF)lnQ`", "iii) Secondary battery", "iv) High efficiency, non-polluting"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Oxidation", "b) Reduction", "c) Oxidizing Agent", "d) Reducing Agent"],
        "column2": ["i) Gains electrons", "ii) Loses electrons", "iii) Gets reduced", "iv) Gets oxidized"],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": ["a) E°cell", "b) ΔG°", "c) Kw at 298K", "d) Faraday constant (F)"],
        "column2": ["i) `10⁻¹⁴`", "ii) `96500 C/mol`", "iii) `E°(cathode) - E°(anode)`", "iv) `-nFE°cell`"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};

