
import type { NeetModule } from '@/lib/types';

export const thermodynamics: NeetModule = {
  metadata: {
    id: 'physics-thermodynamics',
    title: 'Thermodynamics (வெப்ப இயக்கவியல்)',
    chapter: 'Unit 8: Thermodynamics',
    subject: 'Physics',
    glossary: [
      { English: 'Internal Energy', தமிழ்: 'அக ஆற்றல்' },
      { English: 'Isothermal Process', தமிழ்: 'வெப்பநிலை மாறா செயல்முறை' },
      { English: 'Adiabatic Process', தமிழ்: 'வெப்பப் பரிமாற்றமில்லா செயல்முறை' },
      { English: 'Entropy', தமிழ்: 'என்ட்ரோபி' },
      { English: 'Heat Engine', தமிழ்: 'வெப்ப இயந்திரம்' }
    ],
    learningObjectives: [
      'State and differentiate between the Zeroth, First, and Second Laws of Thermodynamics.',
      'Analyze P-V diagrams for different thermodynamic processes (isothermal, adiabatic, isochoric, isobaric).',
      'Explain the working principle of a heat engine and a refrigerator.',
      'Define entropy and understand its significance in determining the direction of natural processes.'
    ],
    prerequisites: [
      "Concepts of heat, temperature, and internal energy from 'Properties of Matter'.",
      "Understanding of pressure, volume, and the ideal gas equation from 'Kinetic Theory'.",
      "Basic knowledge of work and energy."
    ],
    conceptOverview: "Why does a cup of hot coffee (காபி) in a Chennai café always cool down and never spontaneously get hotter? Why can't we build a machine that runs forever without fuel? The rules that govern all energy exchanges in the universe are described by **Thermodynamics** (வெப்ப இயக்கவியல்). This chapter introduces the four fundamental laws that define energy, its movement as heat and work, and its inevitable journey towards disorder (entropy). Understanding these laws is key to understanding everything from car engines and refrigerators to the very fate of the universe itself.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 8: 'Heat and Thermodynamics'. The TN board provides a good conceptual base. For NEET, focus on the application of the First Law to different processes (ΔQ=ΔU+ΔW) and the efficiency calculations for Carnot engines.",
    studyTips: [
      {
        tip: "Create a summary table for the four main thermodynamic processes (Isothermal, Adiabatic, Isochoric, Isobaric). For each process, list what is constant, the change in internal energy (ΔU), the work done (W), and the heat exchanged (Q).",
        NEET_Hack: "The slope of an adiabatic P-V curve is steeper than an isothermal curve by a factor of γ (the ratio of specific heats). Remember, Adiabatic = Sudden, Isothermal = Slow. This helps in identifying curves on P-V diagrams."
      },
      {
        tip: "Pay close attention to the sign conventions for heat and work. A common convention is: Heat *added to* the system is positive. Work done *by* the system is positive.",
        NEET_Hack: "The efficiency of a Carnot engine \\(\\eta = 1 - T_2/T_1\\) only uses temperatures in Kelvin. NEET questions often give one temperature in Celsius to trap students. Always convert to Kelvin first!"
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Thermodynamics (இயற்பியல் - வெப்ப இயக்கவியல்)

# 2. Learning Objectives
1.  After this, you will be able to state and differentiate between the Zeroth, First, and Second Laws of Thermodynamics.
2.  After this, you will be able to analyze P-V diagrams for different thermodynamic processes (isothermal, adiabatic, isochoric, isobaric).
3.  After this, you will be able to explain the working principle of a heat engine and a refrigerator.
4.  After this, you will be able to define entropy and understand its significance in determining the direction of natural processes.

# 3. Prerequisites
– Concepts of heat, temperature, and internal energy from 'Properties of Matter'.
– Understanding of pressure, volume, and the ideal gas equation from 'Kinetic Theory'.
– Basic knowledge of work and energy.

# 4. Concept Overview
Why does a cup of hot coffee (காபி) in a Chennai café always cool down and never spontaneously get hotter? Why can't we build a machine that runs forever without fuel? The rules that govern all energy exchanges in the universe are described by **Thermodynamics** (வெப்ப இயக்கவியல்). This chapter introduces the four fundamental laws that define energy, its movement as heat and work, and its inevitable journey towards disorder (entropy). Understanding these laws is key to understanding everything from car engines and refrigerators to the very fate of the universe itself.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 8: 'Heat and Thermodynamics'**.

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

# 6. Worked Examples

**1. Easy:** A Carnot engine has an efficiency of 40% when its sink is at 27 °C. What must be the temperature of the source?
*   **Solution:**
    1.  The efficiency of a Carnot engine is \\(\\eta = 1 - \\frac{T_2}{T_1}\\), where T₁ is the source temperature and T₂ is the sink temperature. Temperatures must be in Kelvin.
    2.  Sink temperature \\(T_2 = 27 + 273 = 300 \\text{ K}\\).
    3.  Efficiency \\(\\eta = 40\\% = 0.4\\).
    4.  \\(0.4 = 1 - \\frac{300}{T_1} \\implies \\frac{300}{T_1} = 1 - 0.4 = 0.6\\).
    5.  \\(T_1 = \\frac{300}{0.6} = 500 \\text{ K}\\).
    6.  In Celsius, \\(T_1 = 500 - 273 = 227 °C\\).

**2. Medium:** 1 mole of an ideal gas expands isothermally from a volume of 1 L to 10 L at 300 K. Calculate the work done.
*   **Solution:**
    *   For an isothermal expansion of an ideal gas, the work done is given by \\(W = nRT \\ln(\\frac{V_2}{V_1})\\).
    *   Given: n = 1, R = 8.314 J/mol·K, T = 300 K, V₁ = 1 L, V₂ = 10 L.
    *   \\(W = 1 \\times 8.314 \\times 300 \\times \\ln(\\frac{10}{1})\\).
    *   Using \\(\\ln(10) \\approx 2.303\\).
    *   \\(W = 1 \\times 8.314 \\times 300 \\times 2.303 \\approx 5744 \\text{ J}\\).

**3. Must-Practice:** In an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. Find the ratio of specific heats (γ) for the gas.
*   **Solution:**
    1.  For an adiabatic process, \\(PV^\\gamma = \\text{constant}\\).
    2.  From the ideal gas equation, \\(PV = nRT \\implies V \\propto T/P\\).
    3.  Substitute V in the adiabatic equation: \\(P(\\frac{T}{P})^\\gamma = \\text{constant} \\implies P^{1-\\gamma}T^\\gamma = \\text{constant}\\).
    4.  We are given that \\(P \\propto T^3 \\implies P = cT^3\\), where c is a constant.
    5.  Substitute this into our derived equation: \\((cT^3)^{1-\\gamma}T^\\gamma = \\text{constant}\\).
    6.  \\(T^{3(1-\\gamma)}T^\\gamma = \\text{constant} \\implies T^{3-3\\gamma+\\gamma} = \\text{constant} \\implies T^{3-2\\gamma} = \\text{constant}\\).
    7.  For this to be true, the exponent must be zero. So, \\(3 - 2\\gamma = 0 \\implies 2\\gamma = 3\\).
    8.  \\(\\gamma = \\frac{3}{2} = 1.5\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( \\Delta Q = \\Delta U + \\Delta W \\) | First Law of Thermodynamics (முதல் விதி) |
| \\( PV^\\gamma = \\text{constant} \\) | Adiabatic Process Equation (வெப்பப் பரிமாற்றமில்லா செயல்முறை) |
| \\( \\eta = 1 - \\frac{T_2}{T_1} \\) | Carnot Engine Efficiency (கார்னோ இயந்திரத்தின் பயனுறுதிறன்) |
| \\( \\Delta G = \\Delta H - T\\Delta S \\) | Gibbs Free Energy Equation (கிப்ஸ் கட்டிலா ஆற்றல் சமன்பாடு) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">P-V Diagram for Processes</text>
    <line x1="30" y1="180" x2="280" y2="180" stroke="black" marker-end="url(#arrow)" />
    <text x="290" y="185">V</text>
    <line x1="30" y1="180" x2="30" y2="30" stroke="black" marker-end="url(#arrow)" />
    <text x="25" y="25">P</text>
    <path d="M 50 50 C 100 80, 150 150, 250 170" stroke="red" stroke-width="2" fill="none"/>
    <text x="150" y="130" fill="red" font-size="12">Adiabatic (வெப்பப் பரிமாற்றமில்லா)</text>
    <path d="M 50 50 C 120 100, 180 160, 250 170" stroke="blue" stroke-width="2" fill="none" stroke-dasharray="4"/>
    <text x="120" y="100" fill="blue" font-size="12">Isothermal (வெப்பநிலை மாறா)</text>
</svg>

\`\`\`
DIAGRAM: P-V Diagram for Processes
Shows the pressure-volume (P-V) relationship for an expansion process.
The adiabatic curve is always steeper than the isothermal curve.
Slope_adiabatic = γ * Slope_isothermal.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** நான்கு செயல்முறைகள்: "**அ**ழுத்தம் மாறா (Isobaric), **வெ**ப்பநிலை மாறா (Isothermal), **ப**ருமன் மாறா (Isochoric), **வெ**ப்பப் பரிமாற்றமில்லா (Adiabatic)". (**அவெபவெ** - A-Ve-Pa-Ve)

> **NEET Hack:** In P-V diagram problems, always remember that the work done is the area under the curve. For a cyclic process, the net work done is the area enclosed by the loop. The process with the steeper slope is always the adiabatic one.

[Download PDF Summary of Thermodynamics](/downloads/thermodynamics-summary.pdf)

# 9. Quiz Yourself
1.  Can the efficiency of a heat engine be greater than that of a Carnot engine working between the same two temperatures? Why?
2.  In an isothermal expansion, a gas absorbs heat but its temperature does not change. Where does this heat energy go?
3.  Why is the specific heat at constant pressure (Cₚ) always greater than the specific heat at constant volume (Cᵥ)?

> **Student Tip (மாணவர் கருத்து):** உங்களுக்கு எந்த வெப்ப இயக்கவியல் செயல்முறை மிகவும் குழப்பமாக உள்ளது? கார்னோ இயந்திரத்தின் (Carnot engine) கணக்குகளை எளிதாக தீர்ப்பது எப்படி? உங்கள் யோசனைகளைப் பகிருங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை). We will explore the microscopic origin of the thermodynamic properties we have just learned about.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Can the temperature of a gas be increased without supplying any heat to it? If yes, how? Discuss this application of the First Law on our forum.
`
  