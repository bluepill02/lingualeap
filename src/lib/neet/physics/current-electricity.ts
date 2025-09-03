
import type { NeetModule } from '@/lib/types';

export const currentElectricity: NeetModule = {
  id: 'physics-current-electricity',
  title: 'Current Electricity (மின்னோட்டவியல்)',
  chapter: 'Unit 12: Current Electricity',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Electric Current and Ohm's Law (மின்னோட்டம் மற்றும் ஓம் விதி)
*   **Electric Current (மின்னோட்டம்):** The rate of flow of electric charge through a conductor. It's a scalar quantity, although it has a direction. \\(I = \\frac{dQ}{dt}\\). The SI unit is Ampere (A).
*   **Drift Velocity (vₐ) (இழுப்புத் திசைவேகம்) and Mobility (μ):** Drift velocity is the average velocity attained by charged particles in a material due to an electric field. It's very slow. Mobility is the drift velocity per unit electric field.
*   **Ohm's Law (ஓம் விதி):** This fundamental law states that at a constant temperature, the current flowing through a conductor is directly proportional to the potential difference across its ends. \\(V \\propto I \\implies V = IR\\), where R is the resistance.
*   **V-I Characteristics:** For Ohmic conductors (like metals), the V-I graph is a straight line. for non-Ohmic devices (like semiconductors), it is a curve.
*   **Electrical Resistivity (ρ) (மின்தடை எண்) and Conductivity (σ):** Resistance \\(R = \\rho \\frac{L}{A}\\), where ρ is the resistivity, an intrinsic property of the material. Conductivity is the reciprocal of resistivity (\\(\\sigma = 1/\\rho\\)).
*   **Temperature Dependence of Resistance:** For conductors, resistance increases with temperature. For semiconductors, it decreases.

### 5.2 Combinations of Resistors and Cells
*   **Resistors in Series:** Resistors are connected end-to-end. The current is the same through each, and the equivalent resistance is the sum.
    \\[ R_{eq} = R_1 + R_2 + ... \\]
*   **Resistors in Parallel:** Both ends of the resistors are connected to common points. The voltage is the same across each, and the reciprocal of the equivalent resistance is the sum of the reciprocals.
    \\[ \\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ... \\]
*   **Internal Resistance (r), EMF (ε) and Potential Difference (V):** A real cell has an internal resistance. The EMF (Electromotive Force) is the maximum potential difference the cell can provide. The terminal potential difference (V) when a current I is drawn is \\(V = \\epsilon - Ir\\).
*   **Combination of Cells:** Cells can also be connected in series and parallel to obtain a desired voltage and current.

### 5.3 Kirchhoff’s Laws and Applications (கிர்க்காஃபின் விதிகள் மற்றும் பயன்பாடுகள்)
*   **Kirchhoff’s First Law (Junction Rule):** The algebraic sum of currents entering a junction is zero (ΣI = 0). This is based on the conservation of charge.
*   **Kirchhoff’s Second Law (Loop Rule):** The algebraic sum of the changes in potential around any closed loop involving resistors and cells is zero (ΣΔV = 0). This is based on the conservation of energy.
*   **Wheatstone Bridge (வீட்ஸ்டோன் சமனச் சுற்று):** A circuit used to measure an unknown resistance. When the bridge is balanced (no current through the galvanometer), the condition is \\(\\frac{P}{Q} = \\frac{R}{S}\\).
*   **Metre Bridge:** A practical application of the Wheatstone bridge. It consists of a 1-meter long wire, and the unknown resistance is found by finding the balancing point.

### 5.4 Electrical Energy and Power (மின்னழுத்த ஆற்றல் மற்றும் திறன்)
*   **Electrical Power (P):** The rate at which electrical energy is consumed in a circuit.
    \\[ P = VI = I^2R = \\frac{V^2}{R} \\]
    The SI unit is Watt (W).
`,
  workedExamples: [
    {
        problem: "Three resistors of 2Ω, 4Ω, and 6Ω are connected in parallel. Find the equivalent resistance of the combination.",
        solution: "For resistors in parallel, \\(\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\). \\(\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6}\\). The common denominator is 12. \\(\\frac{1}{R_{eq}} = \\frac{6+3+2}{12} = \\frac{11}{12}\\). Therefore, \\(R_{eq} = \\frac{12}{11} \\Omega \\approx 1.09 \\Omega\\)."
    },
    {
        problem: "A wire of resistance 4Ω is stretched to twice its original length. Find the new resistance.",
        solution: "1.  Resistance \\(R = \\rho \\frac{L}{A}\\). The volume of the wire remains constant. Volume \\(V = AL\\). So, \\(A = V/L\\). 2.  Substituting A, we get \\(R = \\rho \\frac{L^2}{V}\\). This shows \\(R \\propto L^2\\). 3.  The new length \\(L' = 2L\\). 4.  The new resistance \\(R' \\propto (L')^2 = (2L)^2 = 4L^2\\). 5.  So, \\(R' = 4R = 4 \\times 4\\Omega = 16\\Omega\\)."
    },
    {
        problem: "In a metre bridge, the balance point is found to be at 40 cm from end A, when the resistor Y in the right gap is 12.5 Ω. Determine the resistance of X in the left gap. What happens if the galvanometer and cell are interchanged?",
        solution: "A metre bridge works on the principle of a balanced Wheatstone bridge. Let the balance point be at length l₁ = 40 cm. Then l₂ = 100 - 40 = 60 cm. The condition is \\(\\frac{X}{Y} = \\frac{l_1}{l_2}\\). \\(\\frac{X}{12.5} = \\frac{40}{60} = \\frac{2}{3}\\). \\(X = \\frac{2}{3} \\times 12.5 = \\frac{25}{3} \\approx 8.33 \\Omega\\). If the galvanometer and cell are interchanged, the condition for a balanced Wheatstone bridge remains the same. Therefore, the balance point will **not change**."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
