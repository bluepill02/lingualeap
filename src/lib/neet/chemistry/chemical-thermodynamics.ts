
import type { NeetModule } from '@/lib/types';

export const chemicalThermodynamics: NeetModule = {
  id: 'chemistry-chemical-thermodynamics',
  title: 'Chemical Thermodynamics',
  chapter: 'Chemical Thermodynamics',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Fundamentals of Thermodynamics (வெப்ப இயக்கவியலின் அடிப்படைகள்)
*   **System and Surroundings:** The system is the part of the universe under study, and the surroundings are everything else.
*   **Extensive and Intensive Properties:** Extensive properties depend on the amount of matter (e.g., mass, volume). Intensive properties do not (e.g., temperature, density).
*   **State Functions:** Properties whose values depend only on the initial and final states of the system, not on the path taken (e.g., Pressure, Volume, Temperature, Internal Energy, Enthalpy, Entropy, Gibbs Free Energy).
*   **Types of Processes:** Isothermal (constant T), Isobaric (constant P), Isochoric (constant V), Adiabatic (no heat exchange).

### 2. The First Law of Thermodynamics (வெப்ப இயக்கவியலின் முதல் விதி)
*   This is the law of conservation of energy.
*   **Equation:** ΔU = q + w, where ΔU is the change in internal energy, q is heat absorbed by the system, and w is work done on the system.
*   **Concept of work, heat, internal energy (U) and enthalpy (H):**
    *   **Internal Energy (U):** The total energy of a system.
    *   **Enthalpy (H):** A measure of total heat content, H = U + PV.
*   **Heat capacity (C) and Molar heat capacity (Cₘ):** The amount of heat required to raise the temperature of a substance by 1°C or 1K.
*   **Hess’s Law of Constant Heat Summation:** The total enthalpy change for a reaction is the same, whether it occurs in one step or in several steps.
*   **Enthalpies of:** bond dissociation, combustion, formation, atomization, sublimation, phase transition, hydration, ionization, and solution.

### 3. The Second Law of Thermodynamics (வெப்ப இயக்கவியலின் இரண்டாம் விதி)
*   This law defines the direction of spontaneous processes.
*   **Spontaneity of processes:** A process that occurs on its own without any external aid.
*   **Entropy (S) (என்ட்ரோபி):** A measure of the randomness or disorder of a system. For a spontaneous process, the entropy of the universe increases (ΔS_universe > 0). (ஒரு வகுப்பறை, ஆசிரியர் இல்லாதபோது தானாகவே ஒழுங்கற்ற நிலைக்குச் செல்வது போல).
*   **Gibbs Free Energy (G) (கிப்ஸ் கட்டிலா ஆற்றல்):** A thermodynamic potential that is a measure of the "useful" or process-initiating work obtainable from a system.
    *   **Gibbs Equation:** ΔG = ΔH - TΔS.
    *   **Criteria for Spontaneity:**
        *   If ΔG < 0, the process is spontaneous.
        *   If ΔG > 0, the process is non-spontaneous.
        *   If ΔG = 0, the system is at equilibrium.
*   **Standard Gibbs energy change (ΔG°) and equilibrium constant (K):** ΔG° = -RT ln(K).

### 4. Third Law of Thermodynamics (வெப்ப இயக்கவியலின் மூன்றாம் விதி)
*   The entropy of a perfect crystal at absolute zero (0 Kelvin) is zero. This provides a baseline for entropy calculations.
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
