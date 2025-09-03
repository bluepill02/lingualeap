
import type { NeetModule } from '@/lib/types';

export const chemicalThermodynamics: NeetModule = {
  id: 'chemistry-chemical-thermodynamics',
  title: 'Chemical Thermodynamics',
  chapter: 'Chemical Thermodynamics',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Chemical Thermodynamics (வேதியியல் - வேதி வெப்ப இயக்கவியல்)

# 2. Learning Objectives
1.  After this, you will be able to differentiate between system, surroundings, and various types of thermodynamic processes.
2.  After this, you will be able to state and apply the First Law of Thermodynamics to calculate changes in internal energy.
3.  After this, you will be able to apply Hess's Law to calculate enthalpy changes for various reactions.
4.  After this, you will be able to use the Gibbs free energy equation (ΔG = ΔH - TΔS) to predict the spontaneity of a reaction.

# 3. Prerequisites
– Understanding of basic algebraic manipulation.
– Knowledge of the mole concept and balancing chemical equations.
– Familiarity with the concepts of energy and heat.

# 4. Concept Overview
Imagine making a hot cup of filter coffee (ஃபில்டர் காபி) in Chennai. The coffee is your 'system', and everything else is the 'surroundings'. Heat flows from the hot coffee to the cooler air. Why does this happen naturally? **Thermodynamics** is the branch of science that answers this question. It deals with energy, heat, work, and the direction of change. In this chapter, we will learn the fundamental laws that govern all energy transformations, from a cup of coffee cooling down to every chemical reaction in the universe. We'll learn to predict whether a reaction will happen on its own (spontaneous) using a key concept called Gibbs free energy.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 2, Chapter 7**. This is a crucial chapter for NEET, with a focus on numerical problems involving the First Law, Hess's Law, and the Gibbs equation.

### 5.1 Fundamentals of Thermodynamics (வெப்ப இயக்கவியலின் அடிப்படைகள்)
*   **System and Surroundings:** System is the part under study; surroundings is the rest.
*   **State Functions:** Properties depending only on the state, not the path (e.g., P, V, T, U, H, S, G).
*   **Processes:** Isothermal (constant T), Isobaric (constant P), Isochoric (constant V), Adiabatic (q=0).

### 5.2 First Law of Thermodynamics (முதல் விதி)
*   Based on conservation of energy.
*   **Equation:** \\( \\Delta U = q + w \\), where ΔU is change in internal energy, q is heat absorbed, w is work done *on* the system.
*   **Enthalpy (H):** Heat content of a system, H = U + PV. For a process at constant pressure, \\( \\Delta H = q_p \\).
*   **Hess’s Law:** The total enthalpy change for a reaction is constant, regardless of the path taken. This allows us to calculate enthalpy changes that are difficult to measure directly.
*   **Enthalpies of Reactions:** Enthalpy of formation (\\(\\Delta H_f\\)), combustion (\\(\\Delta H_c\\)), bond dissociation, etc.

### 5.3 Second Law of Thermodynamics (இரண்டாம் விதி)
*   Defines the direction of spontaneous processes.
*   **Entropy (S) (என்ட்ரோபி):** A measure of disorder or randomness. For a spontaneous process, the entropy of the universe increases (\\(\\Delta S_{universe} > 0\\)).
*   **Gibbs Free Energy (G) (கிப்ஸ் கட்டிலா ஆற்றல்):** Determines the spontaneity of a process.
    *   **Gibbs Equation:** \\( \\Delta G = \\Delta H - T\\Delta S \\)
    *   **Spontaneity Criteria:**
        *   \\( \\Delta G < 0 \\): Spontaneous (தன்னிச்சையானது)
        *   \\( \\Delta G > 0 \\): Non-spontaneous
        *   \\( \\Delta G = 0 \\): Equilibrium (சமநிலை)
*   **Relation with Equilibrium Constant (K):** \\( \\Delta G^\\circ = -RT \\ln K \\).

### 5.4 Third Law of Thermodynamics
*   The entropy of a perfect crystal at absolute zero (0 K) is zero.

# 6. Worked Examples

**1. Easy:** Calculate the work done when 2 moles of an ideal gas expand isothermally and reversibly from a volume of 1 L to 10 L at 300 K.
*   **Solution:**
    *   Work done in reversible isothermal expansion: \\( W = -nRT \\ln(\\frac{V_2}{V_1}) \\).
    *   W = -2 mol × 8.314 J/mol·K × 300 K × ln(10/1)
    *   W = -2 × 8.314 × 300 × 2.303 = **-11488 J** or **-11.49 kJ**. (The negative sign indicates work done *by* the system).

**2. Medium:** Calculate the standard enthalpy of formation of CH₄(g) if the standard enthalpies of combustion of C(s), H₂(g) and CH₄(g) are -393.5, -285.8 and -890.3 kJ mol⁻¹ respectively.
*   **Solution:**
    1.  Target equation: C(s) + 2H₂(g) → CH₄(g).
    2.  Use Hess's Law: \\(\\Delta H_{rxn} = \\sum \\Delta H_{f(products)} - \\sum \\Delta H_{f(reactants)}\\) is not useful here. Instead, manipulate the combustion reactions.
    3.  C(s) + O₂(g) → CO₂(g); ΔH = -393.5 kJ
    4.  2H₂(g) + O₂(g) → 2H₂O(l); ΔH = 2(-285.8) = -571.6 kJ
    5.  CO₂(g) + 2H₂O(l) → CH₄(g) + 2O₂(g); ΔH = +890.3 kJ (Reversed reaction)
    6.  Adding these three gives the target equation.
    7.  ΔH_f(CH₄) = -393.5 - 571.6 + 890.3 = **-74.8 kJ/mol**.

**3. Must-Practice:** For a reaction, ΔH = 400 kJ mol⁻¹ and ΔS = 0.2 kJ K⁻¹ mol⁻¹. At what temperature will the reaction become spontaneous?
*   **Solution:**
    *   For a reaction to be spontaneous, ΔG must be negative (ΔG < 0).
    *   Using \\( \\Delta G = \\Delta H - T\\Delta S \\), we need \\( \\Delta H - T\\Delta S < 0 \\).
    *   This means \\( T\\Delta S > \\Delta H \\).
    *   \\( T > \\frac{\\Delta H}{\\Delta S} = \\frac{400 \\text{ kJ mol⁻¹}}{0.2 \\text{ kJ K⁻¹ mol⁻¹}} = 2000 \\text{ K} \\).
    *   The reaction will be spontaneous at temperatures **above 2000 K**.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( \\Delta U = q + w \\) | First Law of Thermodynamics (முதல் விதி) |
| \\( \\Delta H = \\Delta U + P\\Delta V \\) | Enthalpy Change (என்தால்பி மாற்றம்) |
| \\( \\Delta G = \\Delta H - T\\Delta S \\) | Gibbs Free Energy Change (கிப்ஸ் ஆற்றல் மாற்றம்) |
| \\( \\Delta G^\\circ = -RT \\ln K \\) | Relation with Equilibrium Constant (சமநிலை மாறிலியுடன் தொடர்பு) |
`,
  workedExamples: [
    {
        problem: "Calculate the standard enthalpy of formation of CH₄(g) if the standard enthalpies of combustion of C(s), H₂(g) and CH₄(g) are -393.5, -285.8 and -890.3 kJ mol⁻¹ respectively.",
        solution: "The required equation is C(s) + 2H₂(g) → CH₄(g). Using Hess's Law, we can manipulate the combustion equations:\n1. C(s) + O₂(g) → CO₂(g); ΔH = -393.5 kJ\n2. H₂(g) + ½O₂(g) → H₂O(l); ΔH = -285.8 kJ\n3. CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l); ΔH = -890.3 kJ\n\nTo get the target equation, we need: (Eq. 1) + 2*(Eq. 2) - (Eq. 3)\nΔH_f(CH₄) = [ΔH_c(C) + 2 * ΔH_c(H₂)] - [ΔH_c(CH₄)]\nΔH_f(CH₄) = [-393.5 + 2(-285.8)] - (-890.3)\nΔH_f(CH₄) = [-393.5 - 571.6] - (-890.3)\nΔH_f(CH₄) = -965.1 + 890.3 = -74.8 kJ/mol."
    },
    {
        problem: "For a reaction, ΔH = 400 kJ mol⁻¹ and ΔS = 0.2 kJ K⁻¹ mol⁻¹. At what temperature will the reaction become spontaneous?",
        solution: "For a reaction to be spontaneous, ΔG must be negative (ΔG < 0). Using the Gibbs equation, ΔG = ΔH - TΔS.\nWe need ΔH - TΔS < 0.\nTΔS > ΔH\nT > ΔH / ΔS\nT > (400 kJ mol⁻¹) / (0.2 kJ K⁻¹ mol⁻¹) = 2000 K.\nThe reaction will be spontaneous at temperatures above 2000 K."
    },
    {
        problem: "Calculate the entropy change in the surroundings when 1.00 mol of H₂O(l) is formed under standard conditions. ΔH_f° = -286 kJ mol⁻¹.",
        solution: "The reaction for the formation of liquid water is exothermic, meaning it releases heat into the surroundings. The heat absorbed by the surroundings is q_surr = -ΔH_system.\nq_surr = -(-286 kJ/mol) = +286 kJ/mol = 286000 J/mol.\nThe entropy change of the surroundings is given by ΔS_surr = q_surr / T.\nAt standard conditions, T = 298 K.\nΔS_surr = (286000 J mol⁻¹) / (298 K) = 959.7 J K⁻¹ mol⁻¹."
    }
  ],
  mcqs: [
    {
        "question": "Which of the following is an extensive property?",
        "options": ["Temperature", "Density", "Volume", "Pressure"],
        "answer": "Volume",
        "explanation": "Volume depends on the amount of matter in the system, making it an extensive property."
    },
    {
        "question": "For a process to be spontaneous, the Gibbs free energy change (ΔG) must be:",
        "options": ["Positive", "Negative", "Zero", "Equal to ΔH"],
        "answer": "Negative",
        "explanation": "A negative ΔG indicates that a process will occur spontaneously under constant temperature and pressure."
    },
    {
        "question": "The first law of thermodynamics is a statement of:",
        "options": ["Conservation of charge", "Conservation of energy", "Conservation of momentum", "Conservation of mass"],
        "answer": "Conservation of energy",
        "explanation": "The first law states that energy cannot be created or destroyed, only transferred or converted from one form to another (ΔU = q + w)."
    },
    {
        "question": "The enthalpy change for the reaction H₂(g) + Cl₂(g) → 2HCl(g) is ΔH = -185 kJ. What is the standard enthalpy of formation of HCl(g)?",
        "options": ["-185 kJ/mol", "-92.5 kJ/mol", "+185 kJ/mol", "+92.5 kJ/mol"],
        "answer": "-92.5 kJ/mol",
        "explanation": "The standard enthalpy of formation is the enthalpy change when 1 mole of a compound is formed. The given reaction forms 2 moles of HCl. So, ΔH_f(HCl) = -185 kJ / 2 mol = -92.5 kJ/mol."
    },
    {
        "question": "A process in which no heat is exchanged between the system and surroundings is called:",
        "options": ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
        "answer": "Adiabatic",
        "explanation": "An adiabatic process is one where q = 0."
    }
],
  assertionReasons: [
    {
        "assertion": "For a spontaneous process, the total entropy of the universe increases.",
        "reason": "This is the statement of the second law of thermodynamics.",
        "answer": "A",
        "explanation": "The assertion is a direct statement of the second law for spontaneous processes, and the reason correctly identifies it."
    },
    {
        "assertion": "The enthalpy of formation of an element in its standard state is taken as zero.",
        "reason": "This is a convention used for thermodynamic calculations.",
        "answer": "A",
        "explanation": "The assertion is true by convention. This convention (reason) provides a reference point for calculating enthalpies of formation for compounds."
    },
    {
        "assertion": "A reaction with a positive ΔH and a positive ΔS can be spontaneous.",
        "reason": "Spontaneity depends on the temperature, as given by the Gibbs equation ΔG = ΔH - TΔS.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. If ΔH and ΔS are both positive, the TΔS term can outweigh the ΔH term at high temperatures, making ΔG negative and the reaction spontaneous."
    },
    {
        "assertion": "Work done in a reversible isothermal expansion of an ideal gas is greater than in an irreversible expansion.",
        "reason": "In a reversible process, the external pressure is only infinitesimally smaller than the internal pressure at each step.",
        "answer": "A",
        "explanation": "The reason correctly explains why the maximum possible work is obtained during a reversible expansion, thus explaining the assertion."
    },
    {
        "assertion": "Combustion of all organic compounds is an exothermic reaction.",
        "reason": "The enthalpies of formation of CO₂(g) and H₂O(l) are highly negative.",
        "answer": "A",
        "explanation": "Combustion reactions form stable products like CO₂ and H₂O, which have large negative enthalpies of formation. This makes the overall enthalpy change (ΔH_products - ΔH_reactants) negative, meaning the reaction is exothermic."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Isothermal process", "b) Adiabatic process", "c) Isochoric process", "d) Isobaric process"],
        "column2": ["i) ΔV = 0", "ii) ΔP = 0", "iii) ΔT = 0", "iv) Δq = 0"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) First Law", "b) Second Law", "c) Third Law", "d) Hess's Law"],
        "column2": ["i) Entropy of a perfect crystal at 0K is zero", "ii) ΔH_reaction is independent of path", "iii) Conservation of energy", "iv) Direction of spontaneous change"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Spontaneous process", "b) Non-spontaneous process", "c) Equilibrium", "d) Internal Energy"],
        "column2": ["i) ΔG > 0", "ii) ΔG = 0", "iii) State function", "iv) ΔG < 0"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Enthalpy (H)", "b) Entropy (S)", "c) Gibbs Free Energy (G)", "d) Work (w)"],
        "column2": ["i) Measure of useful work", "ii) Path function", "iii) Measure of randomness", "iv) H = U + PV"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) ΔH > 0", "b) ΔH < 0", "c) ΔS > 0", "d) ΔS < 0"],
        "column2": ["i) Exothermic reaction", "ii) Increase in randomness", "iii) Endothermic reaction", "iv) Decrease in randomness"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    }
  ]
};

