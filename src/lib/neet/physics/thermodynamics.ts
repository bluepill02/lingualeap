
import type { NeetModule } from '@/lib/types';

export const thermodynamics: NeetModule = {
  id: 'physics-thermodynamics',
  title: 'Thermodynamics',
  chapter: 'Thermodynamics',
  subject: 'Physics',
  conceptNotes: `
### 1. Thermal Equilibrium and Zeroth Law (வெப்பச் சமநிலை மற்றும் சுழி விதி)
*   **Zeroth Law of Thermodynamics:** If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other. This law introduces the concept of temperature.

### 2. First Law of Thermodynamics (வெப்ப இயக்கவியலின் முதல் விதி)
*   A statement of the law of conservation of energy.
*   ΔQ = ΔU + ΔW, where ΔQ is the heat supplied, ΔU is the change in internal energy, and ΔW is the work done by the system.
*   Work done during volume change: W = ∫P dV.

### 3. Thermodynamic Processes (வெப்ப இயக்கவியல் செயல்முறைகள்)
*   **Isothermal Process (வெப்பநிலை மாறா செயல்முறை):** Temperature remains constant (ΔT = 0, ΔU = 0). ΔQ = ΔW.
*   **Adiabatic Process (வெப்பப் பரிமாற்றமில்லா செயல்முறை):** No heat is exchanged with the surroundings (ΔQ = 0). ΔU = -ΔW. The process is very sudden. Equation: PV^γ = constant.
*   **Isobaric Process (அழுத்தம் மாறா செயல்முறை):** Pressure remains constant.
*   **Isochoric Process (பருமன் மாறா செயல்முறை):** Volume remains constant (ΔV = 0, ΔW = 0). ΔQ = ΔU.

### 4. Second Law of Thermodynamics (வெப்ப இயக்கவியலின் இரண்டாம் விதி)
*   **Kelvin-Planck Statement:** It is impossible to construct a device that operates in a cycle and produces no other effect than the extraction of heat from a single body and the performance of an equivalent amount of work. (No heat engine can have 100% efficiency).
*   **Clausius Statement:** It is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a colder body to a hotter body. (Heat cannot spontaneously flow from cold to hot).
*   **Entropy (என்ட்ரோபி):** A measure of molecular disorder or randomness. The entropy of the universe always increases in any spontaneous process. (ஒரு வகுப்பறை, ஆசிரியர் இல்லாதபோது தானாகவே ஒழுங்கற்ற நிலைக்குச் செல்வது போல).
*   ΔS_total = ΔS_sys + ΔS_surr > 0 for a spontaneous process.

### 5. Gibbs Free Energy (G) (கிப்ஸ் கட்டிலா ஆற்றல்)
*   A thermodynamic potential that can be used to calculate the maximum reversible work that may be performed by a thermodynamic system at a constant temperature and pressure.
*   **Gibbs Equation:** ΔG = ΔH - TΔS.
*   **Spontaneity of a Reaction (ஒரு வினையின் தன்னிச்சை):**
    *   If ΔG < 0, the process is spontaneous.
    *   If ΔG > 0, the process is non-spontaneous.
    *   If ΔG = 0, the system is at equilibrium.

### 6. Third Law of Thermodynamics (வெப்ப இயக்கவியலின் மூன்றாம் விதி)
*   The entropy of a perfect crystal at absolute zero (0 Kelvin) is zero.
`,
  workedExamples: [
    {
        problem: "A Carnot engine has an efficiency of 40% when its sink is at 27 °C. What must be the temperature of the source?",
        solution: "The efficiency of a Carnot engine is η = 1 - T₂/T₁, where T₁ is the source temperature and T₂ is the sink temperature. First, convert the sink temperature to Kelvin: T₂ = 27 + 273 = 300 K. The efficiency η = 40% = 0.4. 0.4 = 1 - 300/T₁. 300/T₁ = 1 - 0.4 = 0.6. T₁ = 300 / 0.6 = 500 K. In Celsius, T₁ = 500 - 273 = 227 °C."
    },
    {
        problem: "1 mole of an ideal gas expands isothermally from a volume of 1 L to 10 L at 300 K. Calculate the work done.",
        solution: "For an isothermal process, the work done is W = nRT ln(V₂/V₁). Given n = 1, R = 8.314 J/mol·K, T = 300 K, V₁ = 1 L, V₂ = 10 L. W = 1 * 8.314 * 300 * ln(10/1). ln(10) ≈ 2.303. W = 8.314 * 300 * 2.303 ≈ 5744 J."
    },
    {
        problem: "In an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. Find the ratio of specific heats (γ) for the gas.",
        solution: "For an adiabatic process, PV^γ = constant. The ideal gas equation is PV = nRT, so P = nRT/V. Substituting this into the adiabatic equation gives (nRT/V)V^γ = constant, which means TV^(γ-1) = constant. We are given that P ∝ T³. From the ideal gas law, V ∝ T/P. So, P ∝ T / V. T³ ∝ T/V, which means V ∝ T⁻². TV² = constant. Comparing this with TV^(γ-1) = constant, we get γ-1 = 2. Therefore, γ = 3."
    }
  ],
  mcqs: [
    {
        "question": "The first law of thermodynamics is a statement of:",
        "options": ["Conservation of heat", "Conservation of work", "Conservation of energy", "Conservation of momentum"],
        "answer": "Conservation of energy",
        "explanation": "The first law (ΔQ = ΔU + ΔW) states that energy can neither be created nor destroyed, only transformed from one form to another."
    },
    {
        "question": "In an isothermal process, which of the following remains constant?",
        "options": ["Pressure", "Volume", "Temperature", "Heat"],
        "answer": "Temperature",
        "explanation": "An isothermal process is defined as a process that occurs at a constant temperature (ΔT = 0)."
    },
    {
        "question": "For an adiabatic process, which of the following is true?",
        "options": ["ΔQ = 0", "ΔW = 0", "ΔU = 0", "ΔT = 0"],
        "answer": "ΔQ = 0",
        "explanation": "An adiabatic process is one in which no heat is transferred into or out of the system (ΔQ = 0)."
    },
    {
        "question": "The efficiency of a Carnot engine depends on:",
        "options": ["The working substance", "The temperatures of the source and sink", "The design of the engine", "The pressure of the gas"],
        "answer": "The temperatures of the source and sink",
        "explanation": "The efficiency of an ideal Carnot engine is given by η = 1 - T₂/T₁, which depends only on the absolute temperatures of the hot source (T₁) and the cold sink (T₂)."
    },
    {
        "question": "Which of the following is an example of an irreversible process?",
        "options": ["Slow isothermal expansion of a gas", "Free expansion of a gas", "Slow adiabatic compression of a gas", "Melting of ice at its melting point"],
        "answer": "Free expansion of a gas",
        "explanation": "Free expansion is a spontaneous and irreversible process where a gas expands into a vacuum. The system cannot be returned to its initial state without external work."
    },
    {
        "question": "The second law of thermodynamics introduces the concept of:",
        "options": ["Internal energy", "Enthalpy", "Work", "Entropy"],
        "answer": "Entropy",
        "explanation": "The second law is often stated in terms of entropy, stating that the total entropy of an isolated system always increases for any spontaneous process."
    },
    {
        "question": "In an isochoric process, the work done by the system is:",
        "options": ["Positive", "Negative", "Zero", "Infinite"],
        "answer": "Zero",
        "explanation": "An isochoric process occurs at constant volume (ΔV = 0). Since work done W = PΔV, the work done is zero."
    },
    {
        "question": "The coefficient of performance (COP) of a refrigerator is given by:",
        "options": ["T₁/T₂ - 1", "T₂/(T₁ - T₂)", "T₁/(T₁ - T₂)", "1 - T₂/T₁"],
        "answer": "T₂/(T₁ - T₂)",
        "explanation": "For an ideal refrigerator (reverse Carnot engine), COP = Q₂/W = T₂/(T₁-T₂), where T₂ is the temperature of the cold reservoir."
    },
    {
        "question": "Which law of thermodynamics states that 'heat cannot by itself flow from a body at a lower temperature to a body at a higher temperature'?",
        "options": ["Zeroth Law", "First Law", "Second Law (Clausius Statement)", "Third Law"],
        "answer": "Second Law (Clausius Statement)",
        "explanation": "This is the Clausius statement of the second law of thermodynamics."
    },
    {
        "question": "For a cyclic process, the change in internal energy (ΔU) is:",
        "options": ["Positive", "Negative", "Zero", "Depends on the path"],
        "answer": "Zero",
        "explanation": "Internal energy is a state function. In a cyclic process, the initial and final states are the same, so the change in internal energy is zero."
    },
    {
        "question": "A gas expands from volume V₁ to V₂. The work done by the gas is maximum in which process?",
        "options": ["Isobaric", "Isothermal", "Adiabatic", "Isochoric"],
        "answer": "Isobaric",
        "explanation": "The work done is the area under the P-V graph. For the same volume expansion, the area is largest for the isobaric process (constant pressure)."
    },
    {
        "question": "The efficiency of a heat engine can never be:",
        "options": ["0.5", "0.9", "1.0", "0.2"],
        "answer": "1.0",
        "explanation": "According to the Kelvin-Planck statement of the second law, no heat engine can have 100% efficiency (η=1), as some heat must be rejected to a cold sink."
    },
    {
        "question": "Which of the following is a state function?",
        "options": ["Work", "Heat", "Internal Energy", "Both heat and work"],
        "answer": "Internal Energy",
        "explanation": "Internal energy depends only on the state of the system, not on the path taken to reach that state. Work and heat are path functions."
    },
    {
        "question": "The relation for an adiabatic process is:",
        "options": ["PV = constant", "P/T = constant", "PV^γ = constant", "V/T = constant"],
        "answer": "PV^γ = constant",
        "explanation": "This is the standard equation that relates pressure and volume for a reversible adiabatic process."
    },
    {
        "question": "The internal energy of an ideal gas depends on:",
        "options": ["Pressure only", "Volume only", "Temperature only", "Both pressure and volume"],
        "answer": "Temperature only",
        "explanation": "For an ideal gas, there are no intermolecular forces, so the internal energy is purely the kinetic energy of the molecules, which depends only on temperature."
    },
    {
        "question": "A heat engine takes 1000 J of heat from a source at 500 K and rejects 600 J to a sink. The temperature of the sink is:",
        "options": ["300 K", "400 K", "200 K", "250 K"],
        "answer": "300 K",
        "explanation": "For a Carnot engine (maximum efficiency), Q₁/T₁ = Q₂/T₂. 1000/500 = 600/T₂. 2 = 600/T₂. T₂ = 300 K."
    },
    {
        "question": "Which of the following processes is the fastest?",
        "options": ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
        "answer": "Adiabatic",
        "explanation": "An adiabatic process occurs very rapidly so that there is no time for heat exchange with the surroundings."
    },
    {
        "question": "The Zeroth Law of Thermodynamics leads to the concept of:",
        "options": ["Heat", "Work", "Internal Energy", "Temperature"],
        "answer": "Temperature",
        "explanation": "The Zeroth Law defines thermal equilibrium and allows for the definition of temperature as a fundamental property."
    },
    {
        "question": "In an isothermal expansion of an ideal gas, the change in internal energy is:",
        "options": ["Positive", "Negative", "Zero", "Depends on the gas"],
        "answer": "Zero",
        "explanation": "The internal energy of an ideal gas depends only on temperature. In an isothermal process, ΔT=0, so ΔU=0."
    },
    {
        "question": "A refrigerator works between 4°C and 30°C. The coefficient of performance is:",
        "options": ["10.65", "1.065", "11.65", "9.65"],
        "answer": "10.65",
        "explanation": "T₂ = 4°C = 277 K. T₁ = 30°C = 303 K. COP = T₂/(T₁-T₂) = 277/(303-277) = 277/26 ≈ 10.65."
    },
    {
        "question": "When a gas is compressed adiabatically, its temperature:",
        "options": ["Decreases", "Increases", "Remains constant", "Becomes zero"],
        "answer": "Increases",
        "explanation": "In adiabatic compression, work is done on the gas (ΔW is negative). Since ΔQ=0, from the first law ΔU = -ΔW. Since ΔW is negative, ΔU is positive, which means the internal energy and thus the temperature increases."
    },
    {
        "question": "A process in which the pressure remains constant is called:",
        "options": ["Isothermal", "Adiabatic", "Isochoric", "Isobaric"],
        "answer": "Isobaric",
        "explanation": "This is the definition of an isobaric process."
    },
    {
        "question": "The measure of the degree of disorder or randomness in a system is called:",
        "options": ["Enthalpy", "Entropy", "Internal Energy", "Gibbs Free Energy"],
        "answer": "Entropy",
        "explanation": "Entropy (S) is the thermodynamic quantity that represents the unavailability of a system's thermal energy for conversion into mechanical work, often interpreted as the degree of disorder or randomness."
    },
    {
        "question": "The slope of an adiabatic curve is γ times the slope of an isothermal curve. What is γ?",
        "options": ["The ratio of specific heats", "The gas constant", "The coefficient of performance", "The efficiency"],
        "answer": "The ratio of specific heats",
        "explanation": "The slope of the P-V graph for an isothermal process is -P/V, while for an adiabatic process it is -γP/V. Thus, the adiabatic curve is steeper by a factor of γ = C_p/C_v."
    },
    {
        "question": "Which of the following is not a path function?",
        "options": ["Work (W)", "Heat (Q)", "Internal Energy (U)", "None of the above"],
        "answer": "Internal Energy (U)",
        "explanation": "Internal energy is a state function, meaning its value depends only on the current state of the system, not on how it got there. Work and heat are path functions."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The efficiency of a heat engine can never be 100%.",
        "reason": "According to the second law of thermodynamics, some heat must always be rejected to a sink at a lower temperature.",
        "answer": "A",
        "explanation": "The reason (Kelvin-Planck statement) correctly explains the assertion. A heat engine must operate between two temperatures, and it's impossible to convert all the heat from the source into work."
    },
    {
        "assertion": "In an adiabatic compression, the temperature of a gas increases.",
        "reason": "In an adiabatic process, there is no heat exchange with the surroundings.",
        "answer": "B",
        "explanation": "Both statements are true. During adiabatic compression, work is done on the gas, which increases its internal energy and temperature. The reason is the definition of an adiabatic process but doesn't explain *why* the temperature increases (which is due to the work done)."
    },
    {
        "assertion": "The first law of thermodynamics is based on the conservation of energy.",
        "reason": "Energy can be converted from one form to another, but it cannot be created or destroyed.",
        "answer": "A",
        "explanation": "The reason is a statement of the law of conservation of energy, which is the fundamental principle behind the first law of thermodynamics."
    },
    {
        "assertion": "Work done in an isochoric process is zero.",
        "reason": "In an isochoric process, the volume remains constant.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since work done by a gas is W = ∫P dV, if the volume is constant (dV=0), then the work done is zero."
    },
    {
        "assertion": "A refrigerator transfers heat from a cold body to a hot body.",
        "reason": "This is a natural process that occurs spontaneously.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. This process is non-spontaneous and requires external work to be done on the system, as stated by the Clausius statement of the second law."
    },
    {
        "assertion": "The internal energy of an ideal gas is a function of temperature only.",
        "reason": "For an ideal gas, the intermolecular potential energy is zero.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since there are no intermolecular forces, the internal energy consists only of the kinetic energy of the molecules, which is a function of temperature."
    },
    {
        "assertion": "The slope of an adiabatic P-V curve is steeper than that of an isothermal curve.",
        "reason": "The ratio of specific heats, γ, is always greater than 1.",
        "answer": "A",
        "explanation": "The slope of an adiabatic curve is -γ(P/V) and for an isothermal curve is -(P/V). Since γ > 1, the adiabatic curve is steeper. The reason explains the assertion."
    },
    {
        "assertion": "It is not possible to design a heat engine that is 100% efficient.",
        "reason": "The Carnot cycle is the most efficient cycle for a heat engine.",
        "answer": "B",
        "explanation": "Both statements are true. The first is a statement of the second law. The second is also true. However, the fact that the Carnot cycle is the most efficient doesn't, by itself, explain why 100% efficiency is impossible."
    },
    {
        "assertion": "The Zeroth Law of Thermodynamics defines temperature.",
        "reason": "It states that if two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.",
        "answer": "A",
        "explanation": "The reason correctly states the Zeroth Law, which establishes temperature as a fundamental property that determines thermal equilibrium."
    },
    {
        "assertion": "In a cyclic process, the net work done is equal to the net heat supplied.",
        "reason": "In a cyclic process, the change in internal energy is zero.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. From the first law, ΔQ = ΔU + ΔW. For a cyclic process, ΔU = 0, so ΔQ = ΔW."
    },
    {
        "assertion": "The coefficient of performance of a refrigerator can be greater than 1.",
        "reason": "A refrigerator can remove more heat from the cold reservoir than the work done on it.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. COP = Q₂/W. It is common for a refrigerator to have a COP > 1, meaning it moves more heat energy than the work energy it consumes."
    },
    {
        "assertion": "Entropy is a measure of disorder.",
        "reason": "The entropy of the universe is always decreasing.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; the second law of thermodynamics states that the entropy of an isolated system (the universe) always increases or remains constant."
    },
    {
        "assertion": "All reversible cycles have the same efficiency.",
        "reason": "The efficiency of a reversible engine depends only on the temperatures of the source and the sink.",
        "answer": "D",
        "explanation": "The assertion is false. Only reversible cycles operating between the *same two temperatures* have the same efficiency (Carnot's theorem). The reason is a true statement."
    },
    {
        "assertion": "Work and heat are state functions.",
        "reason": "The values of work and heat depend on the path taken between two states.",
        "answer": "D",
        "explanation": "The assertion is false. Work and heat are path functions. The reason is a true statement that contradicts the assertion."
    },
    {
        "assertion": "The specific heat at constant pressure (C_p) is greater than the specific heat at constant volume (C_v).",
        "reason": "At constant pressure, heat is supplied not only to increase the temperature but also to do work during expansion.",
        "answer": "A",
        "explanation": "The reason correctly explains why more heat is required at constant pressure than at constant volume for the same temperature rise, thus explaining why C_p > C_v."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Isothermal process", "b) Adiabatic process", "c) Isochoric process", "d) Isobaric process"],
        "column2": ["i) ΔQ = 0", "ii) ΔV = 0", "iii) ΔT = 0", "iv) ΔP = 0"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) First Law", "b) Second Law", "c) Zeroth Law", "d) Carnot Engine"],
        "column2": ["i) Concept of Entropy", "ii) Concept of Temperature", "iii) Ideal heat engine", "iv) Conservation of Energy"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Work done in Isochoric", "b) Work done in Isobaric", "c) Change in internal energy in cyclic", "d) Change in internal energy in isothermal"],
        "column2": ["i) Zero", "ii) PΔV", "iii) Zero", "iv) Zero"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Heat Engine", "b) Refrigerator", "c) Enthalpy", "d) Entropy"],
        "column2": ["i) Measure of disorder", "ii) Coefficient of Performance", "iii) Efficiency", "iv) H = U + PV"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) PV^γ = constant", "b) PV = constant", "c) V/T = constant", "d) P/T = constant"],
        "column2": ["i) Isobaric process", "ii) Isothermal process", "iii) Isochoric process", "iv) Adiabatic process"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) C_p - C_v", "b) C_p / C_v", "c) ΔU", "d) ΔQ"],
        "column2": ["i) Ratio of specific heats (γ)", "ii) ΔU + ΔW", "iii) nC_vΔT", "iv) R (Mayer's relation)"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) Kelvin-Planck Statement", "b) Clausius Statement", "c) Spontaneous Process", "d) Reversible Process"],
        "column2": ["i) ΔS_universe > 0", "ii) Impossible to reach absolute zero", "iii) Heat flows from hot to cold", "iv) 100% efficient engine is impossible"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) State Function", "b) Path Function", "c) Extensive Property", "d) Intensive Property"],
        "column2": ["i) Heat (Q)", "ii) Temperature (T)", "iii) Internal Energy (U)", "iv) Volume (V)"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Source Temperature", "b) Sink Temperature", "c) Work done by engine", "d) Heat rejected to sink"],
        "column2": ["i) T₂", "ii) Q₂", "iii) T₁", "iv) W = Q₁ - Q₂"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) γ for monatomic gas", "b) γ for diatomic gas", "c) γ for polyatomic gas", "d) Slope of adiabatic"],
        "column2": ["i) 1.4", "ii) γ * (slope of isothermal)", "iii) 1.33", "iv) 1.67"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) Free expansion", "b) Melting of ice", "c) Combustion of fuel", "d) Carnot cycle"],
        "column2": ["i) Reversible process", "ii) Irreversible process", "iii) Irreversible process", "iv) Irreversible process"],
        "answer": "a-ii, b-i, c-iii, d-i"
    },
    {
        "column1": ["a) Efficiency (η)", "b) COP", "c) ΔS", "d) ΔG"],
        "column2": ["i) T₂/(T₁-T₂)", "ii) Q/T", "iii) ΔH - TΔS", "iv) 1 - T₂/T₁"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Pressure", "b) Volume", "c) Temperature", "d) Internal Energy"],
        "column2": ["i) Kelvin", "ii) Joule", "iii) Pascal", "iv) Cubic meter"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Adiabatic expansion", "b) Adiabatic compression", "c) Isothermal expansion", "d) Isothermal compression"],
        "column2": ["i) Work done on gas, T increases", "ii) Work done by gas, T decreases", "iii) Work done by gas, U is constant", "iv) Work done on gas, U is constant"],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": ["a) Pumping a bicycle tyre", "b) Bursting of a tyre", "c) Boiling of water", "d) Freezing of water"],
        "column2": ["i) Isobaric & Isothermal", "ii) Nearly Adiabatic", "iii) Nearly Adiabatic", "iv) Nearly Isothermal"],
        "answer": "a-ii, b-iii, c-i, d-i"
    }
  ]
};

    
