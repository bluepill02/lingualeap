
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
*   **Entropy (என்ட்ரோபி):** A measure of molecular disorder or randomness. The entropy of the universe always increases in any spontaneous process.

### 5. Heat Engines and Refrigerators (வெப்ப இயந்திரங்கள் மற்றும் குளிர்பதனிகள்)
*   **Heat Engine:** A device that converts heat energy into mechanical work. Efficiency, η = 1 - T₂/T₁, where T₁ is the source temperature and T₂ is the sink temperature.
*   **Refrigerator (and Heat Pump):** A device that works in a reverse cycle to transfer heat from a cold body to a hot body.
*   **Coefficient of Performance (COP):** For a refrigerator, COP = Q₂ / W.

### 6. Carnot Engine (கார்னோ இயந்திரம்)
*   A reversible, ideal heat engine that operates in a cycle between two temperatures. It has the maximum possible efficiency for any heat engine operating between two given temperatures.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
