
import type { NeetModule } from '@/lib/types';

export const kineticTheoryOfGases: NeetModule = {
  metadata: {
    id: 'physics-kinetic-theory-of-gases',
    title: 'Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை)',
    chapter: 'Unit 9: Kinetic Theory of Gases',
    subject: 'Physics',
    glossary: [
      { English: 'Ideal Gas', தமிழ்: 'நல்லியல்பு வாயு' },
      { English: 'RMS Speed', தமிழ்: 'சராசரி இருபடி மூல வேகம் (v_rms)' },
      { English: 'Degrees of Freedom', தமிழ்: 'சுதந்திர இயக்கக்கூறுகள்' },
      { English: 'Mean Free Path', தமிழ்: 'சராசரி மோதலிடைத் தூரம்' },
      { English: 'Equipartition', தமிழ்: 'சமபங்கீடு' }
    ],
    learningObjectives: [
      'State the assumptions of the kinetic theory of gases.',
      'Derive the expression for the pressure exerted by an ideal gas.',
      'Relate the macroscopic property of temperature to the microscopic kinetic energy of gas molecules.',
      'Apply the law of equipartition of energy to calculate the specific heats of monatomic and diatomic gases.'
    ],
    prerequisites: [
      "Newton's Laws of Motion.",
      "Concepts of pressure, volume, temperature, and internal energy from Thermodynamics.",
      "Understanding of momentum and kinetic energy."
    ],
    conceptOverview: "We know a gas has pressure and temperature, but why? Imagine the vibrant, crowded Pongal market in a Tamil Nadu village (பொங்கல் சந்தை). People are moving randomly, bumping into each other and the stalls. The Kinetic Theory of Gases views a gas in the same way: as a collection of countless tiny molecules in constant, random motion. This chapter explains the macroscopic properties we observe (like pressure and temperature) as the average result of these microscopic collisions. It's the bridge between the world of tiny, invisible molecules and the gas laws we use every day.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 9: 'Kinetic Theory of Gases'. The TN board book provides a thorough derivation of the pressure formula. For NEET, it's vital to memorize the final formulas for RMS speed and specific heats and understand their relationship with degrees of freedom.",
    studyTips: [
      {
        tip: "Clearly distinguish between the three types of molecular speeds: root mean square speed (v_rms), average speed (v_avg), and most probable speed (v_p). Remember the relation: v_rms > v_avg > v_p.",
        NEET_Hack: "Problems on the ratio of specific heats (γ) are very common. Just remember γ = 1 + 2/f, where f is the degrees of freedom (3 for monatomic, 5 for diatomic). This single formula can solve many questions quickly."
      },
      {
        tip: "The law of equipartition of energy is fundamental. Remember that each degree of freedom contributes ½kT of energy per molecule, or ½RT per mole.",
        NEET_Hack: "When a question asks what happens to RMS speed if temperature is quadrupled, don't recalculate everything. Just remember \\(v_{rms} \\propto \\sqrt{T}\\). So if T becomes 4T, v_rms will double."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Kinetic Theory of Gases (இயற்பியல் - வாயுக்களின் இயக்கவியற் கொள்கை)

# 2. Learning Objectives
1.  After this, you will be able to state the assumptions of the kinetic theory of gases.
2.  After this, you will be able to derive the expression for the pressure exerted by an ideal gas.
3.  After this, you will be able to relate the macroscopic property of temperature to the microscopic kinetic energy of gas molecules.
4.  After this, you will be able to apply the law of equipartition of energy to calculate the specific heats of monatomic and diatomic gases.

# 3. Prerequisites
– Newton's Laws of Motion.
– Concepts of pressure, volume, temperature, and internal energy from Thermodynamics.
– Understanding of momentum and kinetic energy.

# 4. Concept Overview
We know a gas has pressure and temperature, but why? Imagine the vibrant, crowded Pongal market in a Tamil Nadu village (பொங்கல் சந்தை). People are moving randomly, bumping into each other and the stalls. The Kinetic Theory of Gases views a gas in the same way: as a collection of countless tiny molecules in constant, random motion. This chapter explains the macroscopic properties we observe (like pressure and temperature) as the average result of these microscopic collisions. It's the bridge between the world of tiny, invisible molecules and the gas laws we use every day.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 9: 'Kinetic Theory of Gases'**.

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

# 6. Worked Examples

**1. Easy:** Calculate the root mean square speed of oxygen molecules at 27 °C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/mol·K)
*   **Solution:**
    1.  Convert units to SI: T = 27 + 273 = 300 K. M = 32 g/mol = 0.032 kg/mol.
    2.  Use the formula \\(v_{rms} = \\sqrt{\\frac{3RT}{M}}\\).
    3.  \\(v_{rms} = \\sqrt{\\frac{3 \\times 8.314 \\times 300}{0.032}} = \\sqrt{\\frac{7482.6}{0.032}} = \\sqrt{233831} \\approx 483.6 \\text{ m/s}\\).

**2. Medium:** A cylinder contains helium at 2.5 atm and nitrogen at 1.2 atm at room temperature. If the cylinder develops a leak, which gas will leak out faster and by what factor?
*   **Solution:**
    1.  According to Graham's law of diffusion, the rate of effusion (leaking) is inversely proportional to the square root of the molar mass: \\(Rate \\propto \\frac{1}{\\sqrt{M}}\\).
    2.  Molar mass of Helium (He), \\(M_{He} = 4 \\text{ g/mol}\\). Molar mass of Nitrogen (N₂), \\(M_{N_2} = 28 \\text{ g/mol}\\).
    3.  Since Helium has a lower molar mass, it will leak faster.
    4.  Ratio of rates: \\(\\frac{\\text{Rate}_{He}}{\\text{Rate}_{N_2}} = \\frac{\\sqrt{M_{N_2}}}{\\sqrt{M_{He}}} = \\sqrt{\\frac{28}{4}} = \\sqrt{7} \\approx 2.64\\).
    5.  Helium will leak about 2.64 times faster than nitrogen.

**3. Must-Practice:** Calculate the value of γ (ratio of specific heats) for a diatomic gas, assuming it has rotational but no vibrational degrees of freedom.
*   **Solution:**
    *   A diatomic gas has 3 translational and 2 rotational degrees of freedom at moderate temperatures.
    *   Total degrees of freedom, f = 3 + 2 = 5.
    *   The ratio of specific heats is given by the formula \\(\\gamma = 1 + \\frac{2}{f}\\).
    *   \\(\\gamma = 1 + \\frac{2}{5} = 1 + 0.4 = 1.4\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( PV = nRT \\) | Ideal Gas Equation (நல்லியல்பு வாயுச் சமன்பாடு) |
| \\( v_{rms} = \\sqrt{\\frac{3RT}{M}} \\) | Root Mean Square Speed (சராசரி இருபடி மூல வேகம்) |
| \\( U = \\frac{f}{2}nRT \\) | Internal Energy of an Ideal Gas (நல்லியல்பு வாயுவின் அக ஆற்றல்) |
| \\( \\gamma = 1 + \\frac{2}{f} \\) | Ratio of Specific Heats (தன்வெப்ப ஏற்புத்திறன் விகிதம்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Kinetic Theory of Gases</text>
    <text x="150" y="35" font-family="Verdana" font-size="10" text-anchor="middle" fill="gray">(வாயுக்களின் இயக்கவியற் கொள்கை)</text>
    <circle cx="60" cy="80" r="5" fill="blue" />
    <circle cx="150" cy="60" r="5" fill="blue" />
    <circle cx="240" cy="90" r="5" fill="blue" />
    <circle cx="80" cy="150" r="5" fill="blue" />
    <circle cx="200" cy="160" r="5" fill="blue" />
    <line x1="65" y1="80" x2="145" y2="60" stroke="blue" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="155" y1="60" x2="235" y2="90" stroke="blue" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="245" y1="90" x2="85" y2="150" stroke="blue" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="150" y="190" font-size="12" text-anchor="middle">Molecules in random motion (மூலக்கூறுகளின் ஒழுங்கற்ற இயக்கம்)</text>
</svg>

\`\`\`
DIAGRAM: Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை)
Shows several gas molecules inside a container.
The molecules are represented as small spheres.
Dotted lines indicate their paths, showing they are in constant, random motion.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** வாயுக்களின் வேகங்கள் (Speeds of gases): **RAM** என்பதை நினைவில் கொள்ளுங்கள். **R**MS > **A**verage > **M**ost probable. (Remember RAM: R for RMS, A for Average, M for Most Probable to recall the order of speeds).

> **NEET Hack:** For ratio problems involving RMS speed, you only need the relationship \\(v_{rms} \\propto \\sqrt{T/M}\\). If you need to compare the RMS speed of O₂ at 300K and H₂ at 1200K, the ratio \\(v_{O2}/v_{H2} = \\sqrt{(T_{O2}/M_{O2}) / (T_{H2}/M_{H2})} = \\sqrt{(300/32) \\times (2/1200)} = \\sqrt{1/64} = 1/8\\).

[Download PDF Summary of Kinetic Theory](/downloads/kinetic-theory-summary.pdf)

# 9. Quiz Yourself
1.  Why does the kinetic theory assume that collisions are perfectly elastic? What would happen if they were inelastic?
2.  If you heat a gas in a sealed, rigid container, its pressure increases. Explain this using the kinetic theory.
3.  Why is the specific heat of a monatomic gas lower than that of a diatomic gas?

> **Student Tip (மாணவர் கருத்து):** சுதந்திர இயக்கக்கூறுகள் (degrees of freedom) என்ற கருத்து உங்களுக்கு குழப்பமாக உள்ளதா? ஒரு அணு, இரு அணு மூலக்கூறுகளுக்கு அதை எப்படி கணக்கிடுவது? உங்கள் சந்தேகங்களைக் கேளுங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Oscillations and Waves (அலைவுகள் மற்றும் அலைகள்). We will shift from the random motion of many particles to the organized, periodic motion of single particles and the propagation of disturbances.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** The ideal gas law connects P, V, and T. But do real gases always follow this law? Discuss the conditions under which a real gas behaves most like an ideal gas on our forum.
`
};
