
import type { NeetModule } from '@/lib/types';

export const kineticTheoryOfGases: NeetModule = {
  id: 'physics-kinetic-theory-of-gases',
  title: 'Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை)',
  chapter: 'Unit 9: Kinetic Theory of Gases',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Ideal Gas and Kinetic Theory
*   **Equation of State of a Perfect Gas (நல்லியல்பு வாயுச் சமன்பாடு):** This law relates the macroscopic properties of a gas.
    \\[ PV = nRT \\]
    where n is the number of moles and R is the universal gas constant.
*   **Kinetic theory of gases: Assumptions:**
    1.  A gas consists of a large number of identical, tiny particles (molecules) in constant, random motion.
    2.  The volume of the molecules is negligible compared to the volume of the container.
    3.  There are no intermolecular forces between molecules.
    4.  Collisions between molecules and with the walls are perfectly elastic.
*   **Concept of Pressure:** The pressure of a gas results from the continuous bombardment of its molecules on the walls of the container. The theory derives the formula:
    \\[ P = \\frac{1}{3} \\frac{nM}{V} v_{rms}^2 = \\frac{1}{3} \\rho v_{rms}^2 \\]
    where n is the number of moles, M is the molar mass, ρ is the density, and v_rms is the root mean square speed.

### 5.2 Temperature and Energy
*   **Kinetic interpretation of temperature:** This is a crucial link. The theory shows that the absolute temperature of a gas is directly proportional to the average translational kinetic energy of its molecules.
    \\[ \\text{Average K.E. per molecule} = \\frac{1}{2}m v_{rms}^2 = \\frac{3}{2}kT \\]
    where k is the Boltzmann constant. This means temperature is a measure of the microscopic motion of particles.
*   **RMS speed of gas molecules (சராசரி இருபடி மூல வேகம்):** From the above relations, we can find the typical speed of a gas molecule.
    \\[ v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3kT}{m}} \\]

### 5.3 Degrees of Freedom and Equipartition of Energy
*   **Degrees of Freedom (f) (சுதந்திர இயக்கக்கூறுகள்):** This is the number of independent ways a molecule can store energy.
    *   Monatomic gas (e.g., He, Ne): f = 3 (translational only).
    *   Diatomic gas (e.g., O₂, N₂): f = 5 (3 translational + 2 rotational) at normal temperatures. At very high temperatures, 2 vibrational modes are added, making f=7.
*   **Law of equipartition of energy (ஆற்றல் சமபங்கீட்டு விதி):** This law states that for a system in thermal equilibrium, the total energy is distributed equally among all its degrees of freedom. The energy associated with each degree of freedom per molecule is \\(\\frac{1}{2}kT\\).
*   **Application to specific heat capacities:** This law helps predict the molar specific heats.
    *   Internal Energy of n moles: \\(U = \\frac{f}{2}nRT\\)
    *   Molar Specific Heat at Constant Volume: \\(C_v = \\frac{dU}{ndT} = \\frac{f}{2}R\\)
    *   Molar Specific Heat at Constant Pressure: \\(C_p = C_v + R = (\\frac{f}{2} + 1)R\\)
    *   Ratio of Specific Heats (Adiabatic index): \\(\\gamma = \\frac{C_p}{C_v} = 1 + \\frac{2}{f}\\)

### 5.4 Mean Free Path
*   **Mean Free Path (λ) (சராசரி மோதலிடைத் தூரம்):** This is the average distance a gas molecule travels between two successive collisions. It is inversely proportional to the density of the gas.
`,
  workedExamples: [
    {
        problem: "Calculate the root mean square speed of oxygen molecules at 27 °C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/mol·K)",
        solution: "1.  Convert units to SI: T = 27 + 273 = 300 K. M = 32 g/mol = 0.032 kg/mol. 2.  Use the formula \\(v_{rms} = \\sqrt{\\frac{3RT}{M}}\\). 3.  \\(v_{rms} = \\sqrt{\\frac{3 \\times 8.314 \\times 300}{0.032}} = \\sqrt{\\frac{7482.6}{0.032}} = \\sqrt{233831} \\approx 483.6 \\text{ m/s}\\)."
    },
    {
        problem: "A cylinder contains helium at 2.5 atm and nitrogen at 1.2 atm at room temperature. If the cylinder develops a leak, which gas will leak out faster and by what factor?",
        solution: "1.  According to Graham's law of diffusion, the rate of effusion (leaking) is inversely proportional to the square root of the molar mass: \\(Rate \\propto \\frac{1}{\\sqrt{M}}\\). 2.  Molar mass of Helium (He), \\(M_{He} = 4 \\text{ g/mol}\\). Molar mass of Nitrogen (N₂), \\(M_{N_2} = 28 \\text{ g/mol}\\). 3.  Since Helium has a lower molar mass, it will leak faster. 4.  Ratio of rates: \\(\\frac{\\text{Rate}_{He}}{\\text{Rate}_{N_2}} = \\frac{\\sqrt{M_{N_2}}}{\\sqrt{M_{He}}} = \\sqrt{\\frac{28}{4}} = \\sqrt{7} \\approx 2.64\\). 5.  Helium will leak about 2.64 times faster than nitrogen."
    },
    {
        problem: "Calculate the value of γ (ratio of specific heats) for a diatomic gas, assuming it has rotational but no vibrational degrees of freedom.",
        solution: "A diatomic gas has 3 translational and 2 rotational degrees of freedom at moderate temperatures. Total degrees of freedom, f = 3 + 2 = 5. The ratio of specific heats is given by the formula \\(\\gamma = 1 + \\frac{2}{f}\\). \\(\\gamma = 1 + \\frac{2}{5} = 1 + 0.4 = 1.4\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
