import type { NeetModule } from '@/lib/types';

export const currentElectricity: NeetModule = {
  id: 'physics-current-electricity',
  title: 'Current Electricity',
  chapter: 'Current Electricity',
  subject: 'Physics',
  conceptNotes: `
### 1. Electric Current and Resistance (மின்னோட்டம் மற்றும் மின்தடை)
*   **Electric current:** The rate of flow of electric charge. I = Q/t.
*   **Drift velocity (இழுப்புத் திசைவேகம்), mobility (இயங்கு எண்)** and their relation with electric current.
*   **Ohm's Law (ஓம் விதி):** V = IR.
*   **V-l characteristics** of Ohmic and non-ohmic conductors.
*   **Electrical resistance (மின்தடை):** The opposition to the flow of current. R = ρ(L/A).
*   **Electrical resistivity (மின்தடை எண்) and conductivity (மின்கடத்துத்திறன்).**
*   **Temperature dependence of resistance.**
*   **Series and parallel combinations of resistors.**

### 2. EMF, Power, and Circuits (மின்னியக்கு விசை, திறன் மற்றும் சுற்றுகள்)
*   **Electrical energy and power:** P = VI = I²R = V²/R.
*   **Internal resistance (r), potential difference (V) and emf (ε) of a cell.** V = ε - Ir.
*   **Combination of cells in series and in parallel.**
*   **Kirchhoff’s laws and their applications:**
    *   **Junction Rule:** Based on conservation of charge.
    *   **Loop Rule:** Based on conservation of energy.
*   **Wheatstone bridge (வீட்ஸ்டோன் சமனச் சுற்று):** Balanced when P/Q = R/S.
*   **Metre Bridge:** An application of the Wheatstone bridge for measuring unknown resistance.
`,
  workedExamples: [
    {
        problem: "Three resistors of 2Ω, 4Ω, and 6Ω are connected in parallel. Find the equivalent resistance of the combination.",
        solution: "For resistors in parallel, 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃. 1/R_eq = 1/2 + 1/4 + 1/6. The common denominator is 12. 1/R_eq = (6+3+2)/12 = 11/12. Therefore, R_eq = 12/11 Ω ≈ 1.09 Ω."
    },
    {
        problem: "A wire of resistance R is cut into five equal parts. These parts are then connected in parallel. What is the equivalent resistance of this combination?",
        solution: "Let the resistance of the wire be R. When cut into five equal parts, the resistance of each part becomes R/5. When these five parts are connected in parallel, the equivalent resistance R' is given by: 1/R' = 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) = 5/(R/5) = 25/R. So, R' = R/25. The new resistance is 1/25th of the original resistance."
    },
    {
        problem: "In a metre bridge, the balance point is found to be at 40 cm from the end A, when the resistor Y is of 12.5 Ω. Determine the resistance of X.",
        solution: "A metre bridge works on the principle of a balanced Wheatstone bridge. Let the balance point be at length l₁ from end A. Then l₁ = 40 cm, and l₂ = 100 - 40 = 60 cm. According to the principle, X/Y = l₁/l₂. X / 12.5 = 40 / 60 = 2/3. X = (2/3) * 12.5 = 25/3 ≈ 8.33 Ω."
    }
  ],
  mcqs: [
    {
        question: "The SI unit of electric current is:",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ampere",
        explanation: "The Ampere (A) is the SI base unit for electric current."
    },
    {
        question: "Ohm's law is valid when the temperature of the conductor is:",
        options: ["Variable", "Constant", "Very high", "Very low"],
        answer: "Constant",
        explanation: "Ohm's law (V=IR) holds true only when physical conditions like temperature and pressure remain constant."
    },
    {
        question: "Two resistors of 5Ω and 10Ω are connected in series. The equivalent resistance is:",
        options: ["15Ω", "5Ω", "3.33Ω", "50Ω"],
        answer: "15Ω",
        explanation: "In a series combination, the equivalent resistance is the sum of individual resistances: R_eq = R₁ + R₂ = 5 + 10 = 15Ω."
    },
    {
        question: "The resistivity of a material depends on its:",
        options: ["Length", "Area of cross-section", "Temperature", "Both length and area"],
        answer: "Temperature",
        explanation: "Resistivity (ρ) is an intrinsic property of a material that depends on the nature of the material and its temperature."
    },
    {
        question: "Kirchhoff's junction rule is based on the conservation of:",
        options: ["Energy", "Momentum", "Charge", "Mass"],
        answer: "Charge",
        explanation: "The junction rule states that the sum of currents entering a junction equals the sum of currents leaving it, which implies that charge is conserved."
    },
    {
        question: "A potentiometer is a device used to measure:",
        options: ["Current accurately", "Resistance accurately", "Potential difference accurately", "Power accurately"],
        answer: "Potential difference accurately",
        explanation: "A potentiometer is an ideal voltmeter because it measures potential difference without drawing any current from the circuit."
    },
    {
        question: "The terminal voltage of a cell is greater than its e.m.f. when it is:",
        options: ["Being charged", "Being discharged", "In open circuit", "Short-circuited"],
        answer: "Being charged",
        explanation: "When a cell is being charged, the terminal voltage is V = ε + Ir, which is greater than the e.m.f. (ε)."
    },
    {
        question: "A heater coil is cut into two equal parts and only one part is now used in the heater. The heat generated will now be:",
        options: ["Doubled", "Halved", "Four times", "One-fourth"],
        answer: "Doubled",
        explanation: "When cut in half, the resistance becomes R/2. Power P = V²/R. The new power P' = V²/(R/2) = 2(V²/R) = 2P. The heat generated will be doubled."
    },
    {
        question: "The condition for a balanced Wheatstone bridge is:",
        options: ["P/Q = S/R", "P/S = R/Q", "P/R = Q/S", "P+Q = R+S"],
        answer: "P/R = Q/S",
        explanation: "For a balanced bridge with arms P, Q, R, S in order, the condition is P/Q = R/S or P/R = Q/S."
    },
    {
        question: "The reciprocal of resistivity is called:",
        options: ["Resistance", "Conductance", "Conductivity", "Inductance"],
        answer: "Conductivity",
        explanation: "Conductivity (σ) is the inverse of resistivity (ρ)."
    },
    {
        question: "The slope of a V-I graph for a metallic conductor gives:",
        options: ["Resistance", "Resistivity", "Conductance", "Conductivity"],
        answer: "Resistance",
        explanation: "According to Ohm's law, V = IR. The slope of a V vs I graph is ΔV/ΔI = R."
    },
    {
        question: "To convert a galvanometer into an ammeter, one needs to connect a:",
        options: ["Low resistance in series", "High resistance in series", "Low resistance in parallel", "High resistance in parallel"],
        answer: "Low resistance in parallel",
        explanation: "A low resistance shunt is connected in parallel to divert most of the current, allowing the galvanometer to measure a larger total current."
    },
    {
        question: "A carbon resistor is colored with four bands: red, green, orange, and gold. The resistance is:",
        options: ["25 kΩ ± 5%", "250 Ω ± 5%", "2.5 kΩ ± 10%", "25 kΩ ± 10%"],
        answer: "25 kΩ ± 5%",
        explanation: "Red=2, Green=5, Orange=10³. Gold=±5%. So, the resistance is 25 × 10³ Ω ± 5%, which is 25 kΩ ± 5%."
    },
    {
        question: "What is the total resistance across A and B in the given circuit? (Assuming three resistors of value R in a triangle)",
        options: ["R", "2R/3", "3R/2", "R/3"],
        answer: "2R/3",
        explanation: "The two resistors on the far side are in series (2R), and this combination is in parallel with the first resistor (R). R_eq = (2R * R) / (2R + R) = 2R²/3R = 2R/3."
    },
    {
        question: "The e.m.f. of a cell is a measure of:",
        options: ["Force", "Energy", "Work per unit charge", "Power"],
        answer: "Work per unit charge",
        explanation: "EMF is defined as the work done by the cell in moving a unit positive charge through the entire circuit, including the cell itself."
    },
    {
        question: "Kirchhoff's loop rule is based on the conservation of:",
        options: ["Energy", "Charge", "Momentum", "Mass"],
        answer: "Energy",
        explanation: "The loop rule states that the sum of potential changes around a closed loop is zero, which is a statement of conservation of energy."
    },
    {
        question: "A wire of resistance 4Ω is stretched to twice its original length. The resistance of the stretched wire would be:",
        options: ["2Ω", "4Ω", "8Ω", "16Ω"],
        answer: "16Ω",
        explanation: "When stretched, length L' = 2L and area A' = A/2. The new resistance R' = ρ(L'/A') = ρ(2L / (A/2)) = 4(ρL/A) = 4R = 4 * 4Ω = 16Ω."
    },
    {
        question: "The specific resistance of a conductor increases with:",
        options: ["Increase in temperature", "Increase in cross-sectional area", "Decrease in length", "Decrease in temperature"],
        answer: "Increase in temperature",
        explanation: "For metallic conductors, resistivity (specific resistance) increases with an increase in temperature due to more frequent collisions of electrons."
    },
    {
        question: "The potential difference between the terminals of a cell in an open circuit is:",
        options: ["Zero", "Less than its e.m.f.", "Equal to its e.m.f.", "Greater than its e.m.f."],
        answer: "Equal to its e.m.f.",
        explanation: "In an open circuit, no current is drawn (I=0), so the terminal voltage V = ε - Ir = ε."
    },
    {
        question: "In a metre bridge experiment, the balancing length from the left end is 20 cm. If a known resistance of 3Ω is in the right gap, the unknown resistance is:",
        options: ["0.75 Ω", "1.5 Ω", "12 Ω", "6 Ω"],
        answer: "0.75 Ω",
        explanation: "X/Y = l₁/l₂. X/3 = 20/(100-20) = 20/80 = 1/4. X = 3/4 = 0.75 Ω."
    },
    {
        question: "The sensitivity of a potentiometer can be increased by:",
        options: ["Increasing the length of the wire", "Decreasing the length of the wire", "Increasing the current in the main circuit", "Decreasing the resistance in the main circuit"],
        answer: "Increasing the length of the wire",
        explanation: "Increasing the length of the wire decreases the potential gradient (potential drop per unit length), which makes the instrument more sensitive."
    },
    {
        question: "An electric bulb is rated 220V-100W. The power consumed by it when operated on 110V will be:",
        options: ["100 W", "75 W", "50 W", "25 W"],
        answer: "25 W",
        explanation: "First, find the resistance R = V²/P = (220)²/100 = 484 Ω. Now, the new power P' = (V')²/R = (110)²/484 = 12100/484 = 25 W."
    },
    {
        question: "A cell of e.m.f. E and internal resistance r is connected to an external resistance R. The maximum power is delivered when:",
        options: ["R > r", "R < r", "R = r", "R = 0"],
        answer: "R = r",
        explanation: "This is the condition for maximum power transfer theorem."
    },
    {
        question: "The drift velocity of electrons is of the order of:",
        options: ["10⁸ m/s", "10⁻⁴ m/s", "10⁶ m/s", "10⁻¹⁰ m/s"],
        answer: "10⁻⁴ m/s",
        explanation: "Drift velocity, the average velocity of free electrons in a conductor under an electric field, is very slow, typically of the order of mm/s or 10⁻⁴ m/s."
    },
    {
        question: "The temperature coefficient of resistance is negative for:",
        options: ["Metals", "Semiconductors", "Alloys", "Insulators"],
        answer: "Semiconductors",
        explanation: "For semiconductors, resistance decreases as temperature increases, meaning their temperature coefficient of resistance is negative."
    }
  ],
  assertionReasons: [
    {
        assertion: "The drift velocity of electrons in a conductor is very small, yet a bulb glows instantly when switched on.",
        reason: "The electric field is set up throughout the wire with the speed of light.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. The electric field propagates at nearly the speed of light, causing all free electrons along the entire length of the wire to start drifting almost simultaneously."
    },
    {
        assertion: "A potentiometer is preferred over a voltmeter for measuring the e.m.f. of a cell.",
        reason: "A potentiometer does not draw any current from the cell at the balance point.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Since it draws no current, it measures the true e.m.f. (potential difference in an open circuit), making it an ideal voltmeter."
    },
    {
        assertion: "When resistors are connected in parallel, the equivalent resistance is less than the smallest individual resistance.",
        reason: "In a parallel connection, the total current is divided among the branches, providing more paths for the current.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Adding more paths in parallel always decreases the overall opposition to the flow of current."
    },
    {
        assertion: "Kirchhoff's junction law follows from the conservation of charge.",
        reason: "Kirchhoff's loop law follows from the conservation of energy.",
        answer: "B",
        explanation: "Both statements are true and are the fundamental principles behind Kirchhoff's laws. However, the reason does not explain the assertion; they are two independent principles."
    },
    {
        assertion: "Alloys like constantan and manganin are used for making standard resistors.",
        reason: "They have a high temperature coefficient of resistance.",
        answer: "C",
        explanation: "The assertion is true. The reason is false. These alloys are used because they have a very low (nearly zero) temperature coefficient of resistance, meaning their resistance does not change significantly with temperature."
    },
    {
        assertion: "A wire is stretched to double its length. Its resistance becomes four times.",
        reason: "Resistance is directly proportional to length and inversely proportional to the area of cross-section.",
        answer: "A",
        explanation: "The reason correctly states the formula R = ρ(L/A). When stretched, volume (AL) is constant. So, if L becomes 2L, A becomes A/2. The new resistance R' = ρ(2L)/(A/2) = 4(ρL/A) = 4R."
    },
    {
        assertion: "A larger dry cell has a higher e.m.f.",
        reason: "The e.m.f. of a dry cell is dependent on the materials of the electrodes and the electrolyte.",
        answer: "D",
        explanation: "The assertion is false. A larger cell of the same type has the same e.m.f. but can deliver more current (has lower internal resistance). The reason is a true statement."
    },
    {
        assertion: "The electric field inside a current-carrying conductor is zero.",
        reason: "The net charge on a current-carrying conductor is zero.",
        answer: "D",
        explanation: "The assertion is false. For a current to flow, there must be an electric field inside the conductor to drive the electrons (F=qE). The reason is true, the conductor is overall neutral."
    },
    {
        assertion: "The equivalent resistance of resistors connected in series is the algebraic sum of their individual resistances.",
        reason: "In a series connection, the current through each resistor is the same.",
        answer: "A",
        explanation: "The reason is the key principle used to derive the formula for series resistance (V = V₁ + V₂ => IR_eq = IR₁ + IR₂ => R_eq = R₁ + R₂). It correctly explains the assertion."
    },
    {
        assertion: "The temperature coefficient of resistance for an insulator is negative.",
        reason: "The resistance of an insulator decreases with an increase in temperature.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Increased temperature provides more energy for electrons to jump into the conduction band, increasing conductivity and decreasing resistance."
    },
    {
        assertion: "The balancing length in a metre bridge is independent of the position of the galvanometer.",
        reason: "The galvanometer shows zero deflection at the balance point.",
        answer: "B",
        explanation: "Both statements are true. The galvanometer is a null detector, and at the balance point, no current flows through it, so its position along the bridge wire doesn't matter. The reason states a fact but doesn't fully explain why its position doesn't matter."
    },
    {
        assertion: "When a cell is being charged, its terminal voltage is less than its e.m.f.",
        reason: "The charging current flows in the opposite direction to the normal discharge current.",
        answer: "D",
        explanation: "The assertion is false; the terminal voltage is V = ε + Ir, which is greater than the e.m.f. The reason is true."
    },
    {
        assertion: "Resistivity is the resistance of a unit cube of a material.",
        reason: "The SI unit of resistivity is ohm-meter (Ω m).",
        answer: "B",
        explanation: "Both statements are true definitions related to resistivity. However, the unit (reason) does not explain the definition (assertion)."
    },
    {
        assertion: "Ohm's law is not applicable to semiconductors.",
        reason: "The V-I characteristic for semiconductors is non-linear.",
        answer: "A",
        explanation: "The reason correctly explains why semiconductors are non-ohmic devices and do not obey Ohm's law."
    },
    {
        assertion: "To measure a large current with a galvanometer, a shunt resistance is used.",
        reason: "The shunt provides an alternate path for the excess current.",
        answer: "A",
        explanation: "The reason correctly explains the function of a shunt, which is to bypass most of the current, allowing the sensitive galvanometer to measure a small fraction of it."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Ohm's Law", "b) Kirchhoff's Junction Law", "c) Kirchhoff's Loop Law", "d) Resistance"],
        column2: ["i) Conservation of Energy", "ii) V = IR", "iii) ρ(L/A)", "iv) Conservation of Charge"],
        answer: "a-ii, b-iv, c-i, d-iii"
    },
    {
        column1: ["a) Ammeter", "b) Voltmeter", "c) Potentiometer", "d) Metre Bridge"],
        column2: ["i) Measures e.m.f.", "ii) Measures unknown resistance", "iii) Measures current", "iv) Measures potential difference"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) Series Combination", "b) Parallel Combination", "c) Power", "d) Resistivity"],
        column2: ["i) Voltage is same", "ii) Current is same", "iii) Ω m", "iv) V²/R"],
        answer: "a-ii, b-i, c-iv, d-iii"
    },
    {
        column1: ["a) Galvanometer to Ammeter", "b) Galvanometer to Voltmeter", "c) Drift Velocity", "d) EMF"],
        column2: ["i) I = n_e A v_d", "ii) High resistance in series", "iii) Low resistance in parallel (shunt)", "iv) Work done per unit charge"],
        answer: "a-iii, b-ii, c-i, d-iv"
    },
    {
        column1: ["a) Conductivity", "b) Conductance", "c) Electric Current", "d) Electric Charge"],
        column2: ["i) Ampere", "ii) Siemens (S) or mho", "iii) Coulomb", "iv) Siemens/meter (S/m)"],
        answer: "a-iv, b-ii, c-i, d-iii"
    },
    {
        column1: ["a) Internal resistance (r)", "b) Terminal voltage (V)", "c) e.m.f. (ε)", "d) Short circuit current"],
        column2: ["i) V = ε - Ir", "ii) Opposition by electrolyte", "iii) ε/r", "iv) Potential difference in open circuit"],
        answer: "a-ii, b-i, c-iv, d-iii"
    },
    {
        column1: ["a) Thermistor", "b) Superconductor", "c) Ohmic conductor", "d) Semiconductor"],
        column2: ["i) V-I graph is linear", "ii) Negative temperature coefficient", "iii) Zero resistance at low temperatures", "iv) Resistance decreases with temperature"],
        answer: "a-ii, b-iii, c-i, d-iv"
    },
    {
        column1: ["a) Color Code: Black", "b) Color Code: Brown", "c) Color Code: Red", "d) Color Code: Yellow"],
        column2: ["i) 1", "ii) 4", "iii) 0", "iv) 2"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Multiplier: Gold", "b) Multiplier: Silver", "c) Tolerance: Gold", "d) Tolerance: Silver"],
        column2: ["i) 10⁻²", "ii) ± 10%", "iii) 10⁻¹", "iv) ± 5%"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Current Density (J)", "b) Mobility (μ)", "c) Relaxation Time (τ)", "d) Potential Gradient"],
        column2: ["i) V/L", "ii) v_d / E", "iii) I/A", "iv) Average time between collisions"],
        answer: "a-iii, b-ii, c-iv, d-i"
    },
    {
        column1: ["a) Maximum power transfer", "b) Balanced Wheatstone bridge", "c) Potentiometer principle", "d) Resistivity of alloy"],
        column2: ["i) Nearly independent of temperature", "ii) V ∝ L", "iii) R_ext = r_int", "iv) I_g = 0"],
        answer: "a-iii, b-iv, c-ii, d-i"
    },
    {
        column1: ["a) Joule's law of heating", "b) Seebeck effect", "c) Peltier effect", "d) Thomson effect"],
        column2: ["i) Heat evolved/absorbed at a junction", "ii) Production of thermo-e.m.f.", "iii) H = I²Rt", "iv) Heat evolved/absorbed along a conductor"],
        answer: "a-iii, b-ii, c-i, d-iv"
    },
    {
        column1: ["a) R₁ and R₂ in series", "b) R₁ and R₂ in parallel", "c) C₁ and C₂ in series", "d) C₁ and C₂ in parallel"],
        column2: ["i) C₁ + C₂", "ii) (C₁C₂)/(C₁+C₂)", "iii) (R₁R₂)/(R₁+R₂)", "iv) R₁ + R₂"],
        answer: "a-iv, b-iii, c-ii, d-i"
    },
    {
        column1: ["a) Fuse wire", "b) Heating element", "c) Standard resistor", "d) Semiconductor diode"],
        column2: ["i) Non-linear V-I graph", "ii) High resistivity, low melting point", "iii) High resistivity, high melting point", "iv) Low temperature coefficient of resistance"],
        answer: "a-ii, b-iii, c-iv, d-i"
    },
    {
        column1: ["a) Insulator", "b) Conductor", "c) Semiconductor", "d) Alloy (e.g., Nichrome)"],
        column2: ["i) High resistivity", "ii) Very high resistivity", "iii) Low resistivity", "iv) Resistivity between conductor and insulator"],
        answer: "a-ii, b-iii, c-iv, d-i"
    }
  ]
};

    