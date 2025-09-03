
import type { NeetModule } from '@/lib/types';

export const thermodynamics: NeetModule = {
  id: 'physics-thermodynamics',
  title: 'Thermodynamics (வெப்ப இயக்கவியல்)',
  chapter: 'Unit 8: Thermodynamics',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Zeroth Law and First Law
*   **Thermal equilibrium (வெப்பச் சமநிலை) and Zeroth Law of Thermodynamics:** The Zeroth Law states that if two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law establishes **temperature** as a fundamental property for determining thermal equilibrium.
*   **Heat, work, and internal energy (வெப்பம், வேலை, மற்றும் அக ஆற்றல்):** Internal energy (U) is the total energy contained within a system. Heat (Q) and Work (W) are not properties of a system, but rather modes of energy transfer.
*   **First Law of Thermodynamics (முதல் விதி):** This is the law of conservation of energy applied to a thermodynamic system. It states that the heat (ΔQ) supplied to a system is equal to the sum of the increase in its internal energy (ΔU) and the work done (ΔW) by the system on its surroundings.
    \\[ \\Delta Q = \\Delta U + \\Delta W \\]

### 5.2 Thermodynamic Processes
*   **Isothermal Process (வெப்பநிலை மாறா செயல்முறை):** A process that occurs at a constant temperature (ΔT = 0). For an ideal gas, the internal energy depends only on temperature, so ΔU = 0. The first law becomes ΔQ = ΔW. The P-V graph is a hyperbola (PV = constant). This process is very slow.
*   **Adiabatic Process (வெப்பப் பரிமாற்றமில்லா செயல்முறை):** A process where no heat is exchanged between the system and surroundings (ΔQ = 0). The first law becomes ΔU = -ΔW. This process is very sudden (e.g., bursting of a tyre). The governing equation is \\(PV^\\gamma = \\text{constant}\\), where γ is the ratio of specific heats.

### 5.3 Second Law of Thermodynamics (இரண்டாம் விதி)
This law deals with the direction of heat flow and the efficiency of heat engines. It introduces the concept of entropy.
*   **Reversible and Irreversible Processes:** A reversible process can be retraced in the reverse direction, while an irreversible process cannot. All natural processes are irreversible.
*   The Second Law has several statements:
    *   **Kelvin-Planck Statement:** It is impossible to construct an engine that, operating in a cycle, will produce no effect other than extracting heat from a reservoir and performing an equivalent amount of work. This means no heat engine can be 100% efficient.
    *   **Clausius Statement:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a colder body to a hotter body without any external work done on it. This is the principle behind refrigerators.
`,
  workedExamples: [
    {
        problem: "A Carnot engine has an efficiency of 40% when its sink is at 27 °C. What must be the temperature of the source?",
        solution: "1.  The efficiency of a Carnot engine is \\(\\eta = 1 - \\frac{T_2}{T_1}\\), where T₁ is the source temperature and T₂ is the sink temperature. Temperatures must be in Kelvin. 2.  Sink temperature \\(T_2 = 27 + 273 = 300 \\text{ K}\\). 3.  Efficiency \\(\\eta = 40\\% = 0.4\\). 4.  \\(0.4 = 1 - \\frac{300}{T_1} \\implies \\frac{300}{T_1} = 1 - 0.4 = 0.6\\). 5.  \\(T_1 = \\frac{300}{0.6} = 500 \\text{ K}\\). 6.  In Celsius, \\(T_1 = 500 - 273 = 227 °C\\)."
    },
    {
        problem: "1 mole of an ideal gas expands isothermally from a volume of 1 L to 10 L at 300 K. Calculate the work done.",
        solution: "For an isothermal expansion of an ideal gas, the work done is given by \\(W = nRT \\ln(\\frac{V_2}{V_1})\\). Given: n = 1, R = 8.314 J/mol·K, T = 300 K, V₁ = 1 L, V₂ = 10 L. \\(W = 1 \\times 8.314 \\times 300 \\times \\ln(\\frac{10}{1})\\). Using \\(\\ln(10) \\approx 2.303\\). \\(W = 1 \\times 8.314 \\times 300 \\times 2.303 \\approx 5744 \\text{ J}\\)."
    },
    {
        problem: "In an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. Find the ratio of specific heats (γ) for the gas.",
        solution: "1.  For an adiabatic process, \\(PV^\\gamma = \\text{constant}\\). 2.  From the ideal gas equation, \\(PV = nRT \\implies V \\propto T/P\\). 3.  Substitute V in the adiabatic equation: \\(P(\\frac{T}{P})^\\gamma = \\text{constant} \\implies P^{1-\\gamma}T^\\gamma = \\text{constant}\\). 4.  We are given that \\(P \\propto T^3 \\implies P = cT^3\\), where c is a constant. 5.  Substitute this into our derived equation: \\((cT^3)^{1-\\gamma}T^\\gamma = \\text{constant}\\). 6.  \\(T^{3(1-\\gamma)}T^\\gamma = \\text{constant} \\implies T^{3-3\\gamma+\\gamma} = \\text{constant} \\implies T^{3-2\\gamma} = \\text{constant}\\). 7.  For this to be true, the exponent must be zero. So, \\(3 - 2\\gamma = 0 \\implies 2\\gamma = 3\\). 8.  \\(\\gamma = \\frac{3}{2} = 1.5\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
