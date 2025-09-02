
import type { NeetModule } from '@/lib/types';

export const kineticTheoryOfGases: NeetModule = {
  id: 'physics-kinetic-theory-of-gases',
  title: 'Kinetic Theory of Gases',
  chapter: 'Kinetic Theory of Gases',
  subject: 'Physics',
  conceptNotes: `
### 1. Kinetic Theory of an Ideal Gas (நல்லியல்பு வாயுவின் இயக்கவியற் கொள்கை)
*   **Postulates:**
    1.  A gas consists of a large number of identical, tiny particles (atoms/molecules) which are in constant, random motion.
    2.  The volume of the molecules is negligible compared to the volume of the gas.
    3.  There are no intermolecular forces of attraction.
    4.  Collisions between molecules and with the walls of the container are perfectly elastic.
*   **Pressure Exerted by a Gas:** The pressure is due to the collisions of gas molecules with the walls of the container. P = (1/3)ρv_rms², where ρ is the density and v_rms is the root mean square speed.

### 2. Gas Laws (வாயு விதிகள்)
*   **Boyle's Law:** At constant temperature, P ∝ 1/V.
*   **Charles's Law:** At constant pressure, V ∝ T.
*   **Ideal Gas Equation:** PV = nRT, where n is the number of moles and R is the universal gas constant.

### 3. Kinetic Interpretation of Temperature (வெப்பநிலையின் இயக்கவியல் விளக்கம்)
*   The average kinetic energy of a gas molecule is directly proportional to the absolute temperature of the gas.
*   Average K.E. per molecule = (3/2)kT, where k is the Boltzmann constant.

### 4. Root Mean Square (RMS) Speed (சராசரி இருமடி மூல வேகம்)
*   v_rms = √(3RT/M) = √(3kT/m), where M is molar mass and m is molecular mass.

### 5. Degrees of Freedom (சுதந்திர இயக்கக்கூறுகள்)
*   The total number of independent ways in which a system can possess energy.
*   **Monatomic gas (e.g., He, Ar):** 3 degrees of freedom (all translational).
*   **Diatomic gas (e.g., O₂, N₂):** 5 degrees of freedom at moderate temperatures (3 translational, 2 rotational).
*   **Triatomic gas (linear):** 7 degrees of freedom.
*   **Triatomic gas (non-linear, e.g., H₂O):** 6 degrees of freedom.

### 6. Law of Equipartition of Energy (ஆற்றல் சமபங்கீட்டு விதி)
*   For any dynamic system in thermal equilibrium, the total energy is distributed equally amongst all the degrees of freedom.
*   The energy associated with each degree of freedom per molecule is ½kT.
*   **Internal Energy (U) of n moles of a gas:** U = (f/2)nRT, where f is the number of degrees of freedom.

### 7. Specific Heat Capacity (தன்வெப்ப ஏற்புத்திறன்)
*   **Molar Specific Heat at Constant Volume (C_v):** C_v = (f/2)R.
*   **Molar Specific Heat at Constant Pressure (C_p):** C_p = C_v + R = ((f/2)+1)R.
*   **Ratio of Specific Heats (γ):** γ = C_p / C_v = 1 + 2/f.
`,
  workedExamples: [
    {
        problem: "Calculate the root mean square speed of oxygen molecules at 27 °C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/mol·K)",
        solution: "First, convert the temperature to Kelvin: T = 27 + 273 = 300 K. Convert molar mass to kg/mol: M = 32 g/mol = 0.032 kg/mol. The formula for rms speed is v_rms = √(3RT/M). v_rms = √[3 * (8.314) * (300) / (0.032)] = √[7482.6 / 0.032] = √233831 ≈ 483.6 m/s."
    },
    {
        problem: "A cylinder contains helium at 2.5 atm and nitrogen at 1.2 atm at room temperature. If the cylinder is leaking, which gas will leak faster?",
        solution: "According to Graham's law of diffusion, the rate of diffusion is inversely proportional to the square root of the molar mass. Rate ∝ 1/√M. Molar mass of Helium (He) = 4 g/mol. Molar mass of Nitrogen (N₂) = 28 g/mol. Since Helium has a much lower molar mass, it will have a higher rate of diffusion and will leak faster."
    },
    {
        problem: "Calculate the value of γ (ratio of specific heats) for a diatomic gas. Assume the molecules have 5 degrees of freedom.",
        solution: "The number of degrees of freedom (f) for a diatomic gas is 5. The ratio of specific heats is given by γ = 1 + 2/f. γ = 1 + 2/5 = 1 + 0.4 = 1.4."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
