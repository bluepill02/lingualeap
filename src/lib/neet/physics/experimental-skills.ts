import type { NeetModule } from '@/lib/types';

export const experimentalSkills: NeetModule = {
  id: 'physics-experimental-skills',
  title: 'Experimental Skills',
  chapter: 'Experimental Skills',
  subject: 'Physics',
  conceptNotes: `
### 1. Vernier Calipers (வெர்னியர் அளவி)
*   Used to measure length accurately up to 0.1 mm or 0.01 cm.
*   **Least Count (மீச்சிற்றளவு):** L.C. = (Value of one main scale division) / (Total number of vernier scale divisions).
*   **Zero Error and Correction:** If the zero of the vernier scale does not coincide with the zero of the main scale, there is a zero error. It can be positive or negative.

### 2. Screw Gauge (திருகு அளவி)
*   Used to measure dimensions accurately up to 0.01 mm or 0.001 cm (e.g., diameter of a wire).
*   **Least Count:** L.C. = (Pitch) / (Total number of divisions on the circular scale).
*   **Pitch (புரியிடை):** The distance moved by the screw for one complete rotation of the head scale.

### 3. Simple Pendulum (தனி ஊசல்)
*   Used to determine the acceleration due to gravity (g).
*   The period of a simple pendulum is T = 2π√(L/g), where L is the effective length.
*   A graph of L vs T² is a straight line passing through the origin. The slope can be used to find g.

### 4. Metre Scale (மீட்டர் அளவுகோல்)
*   Used for measuring length. Least count is typically 1 mm.
*   Error of parallax should be avoided while taking readings.

### 5. Ohm's Law Experiment (ஓம் விதி சோதனை)
*   To determine the resistance of a given wire.
*   Requires a voltmeter, ammeter, rheostat, and a key.
*   A graph of V vs I is a straight line, and its slope gives the resistance (R = V/I).

### 6. P-N Junction Diode Characteristics
*   **Forward Bias:** The graph of I vs V is not linear initially and then rises sharply.
*   **Reverse Bias:** The current is very small (in μA) and almost constant until the breakdown voltage is reached.

### 7. Other Key Experiments
*   **Sonometer:** To study the relationship between frequency, length, and tension of a string.
*   **Resonance Column:** To determine the speed of sound in air.
*   **Potentiometer:** To compare the e.m.f. of two cells or find the internal resistance of a cell.
*   **Convex/Concave Mirrors and Lenses:** Finding the focal length using the u-v method (1/f = 1/v - 1/u for lenses, 1/f = 1/v + 1/u for mirrors).
`,
  workedExamples: [
    {
        problem: "In a vernier caliper, 10 divisions of the vernier scale coincide with 9 divisions of the main scale. If one main scale division is 1 mm, what is the least count?",
        solution: "Value of 10 Vernier Scale Divisions (VSD) = Value of 9 Main Scale Divisions (MSD). 10 VSD = 9 mm. So, 1 VSD = 0.9 mm. Least Count (LC) = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm."
    },
    {
        problem: "The pitch of a screw gauge is 1 mm and there are 100 divisions on the circular scale. What is its least count?",
        solution: "Least Count (LC) = Pitch / Number of divisions on circular scale. LC = 1 mm / 100 = 0.01 mm."
    },
    {
        problem: "In a simple pendulum experiment, the length is measured as 100.0 cm and the time for 20 oscillations is measured as 40 s. Calculate the value of g.",
        solution: "The period of oscillation is T = Time / Number of oscillations = 40 s / 20 = 2 s. The formula for the period is T = 2π√(L/g). Squaring both sides, T² = 4π²(L/g). So, g = 4π²L / T². Given L = 100 cm = 1.0 m, and T = 2 s. g = 4 * (3.14)² * (1.0) / (2)² = (3.14)² ≈ 9.86 m/s²."
    }
  ],
  mcqs: [
    {
        "question": "The least count of a screw gauge is 0.001 cm. The number of divisions on its circular scale is 100. The pitch of the screw is:",
        "options": ["0.1 cm", "0.01 cm", "0.001 cm", "1 cm"],
        "answer": "0.1 cm",
        "explanation": "Pitch = Least Count × Number of divisions = 0.001 cm × 100 = 0.1 cm."
    },
    {
        "question": "To convert a galvanometer into an ammeter, one must connect a:",
        "options": ["High resistance in series", "Low resistance in parallel", "High resistance in parallel", "Low resistance in series"],
        "answer": "Low resistance in parallel",
        "explanation": "A low resistance shunt is connected in parallel to divert the main current."
    },
    {
        "question": "In the experiment to determine the focal length of a concave mirror, a student plots a graph of 1/v versus 1/u. The graph is a:",
        "options": ["Straight line with a positive slope", "Straight line with a negative slope", "Parabola", "Hyperbola"],
        "answer": "Straight line with a negative slope",
        "explanation": "The mirror formula is 1/v + 1/u = 1/f. Rearranging gives 1/v = -1/u + 1/f. This is in the form y = mx + c, with a slope (m) of -1."
    },
    {
        "question": "While determining the internal resistance of a cell using a potentiometer, the balance point shifts when:",
        "options": ["The e.m.f. of the driver cell is changed", "The resistance from the resistance box is changed", "The position of the jockey is changed", "The galvanometer is replaced"],
        "answer": "The resistance from the resistance box is changed",
        "explanation": "The formula is r = R(l₁/l₂ - 1). Changing the external resistance R will change the balancing length l₂, thus shifting the balance point."
    },
    {
        "question": "What is the purpose of a rheostat in the Ohm's law experiment?",
        "options": ["To measure current", "To measure voltage", "To vary the current in the circuit", "To provide a fixed resistance"],
        "answer": "To vary the current in the circuit",
        "explanation": "A rheostat is a variable resistor used to control the current flowing through the circuit to obtain multiple readings of V and I."
    },
    {
        "question": "A student measures the diameter of a small steel ball using a screw gauge of least count 0.001 cm. The main scale reading is 5 mm and the 25th division of the circular scale coincides with the baseline. If the screw gauge has a zero error of -0.004 cm, the correct diameter of the ball is:",
        "options": ["0.529 cm", "0.525 cm", "0.521 cm", "0.533 cm"],
        "answer": "0.533 cm",
        "explanation": "Observed reading = MSR + (CSD × LC) = 0.5 cm + (25 × 0.001 cm) = 0.525 cm. Correct reading = Observed reading - Zero Error = 0.525 - (-0.004) = 0.529 cm."
    },
    {
        "question": "In a resonance column experiment, the first resonance is obtained at a length L₁. The second resonance is obtained at a length L₂. The speed of sound is given by:",
        "options": ["v = 2ν(L₂ - L₁)", "v = ν(L₂ - L₁)", "v = 2ν(L₂ + L₁)", "v = 4νL₁"],
        "answer": "v = 2ν(L₂ - L₁)",
        "explanation": "The distance between two successive resonance points is λ/2. So, L₂ - L₁ = λ/2. The speed of sound v = νλ. Substituting λ = 2(L₂ - L₁), we get v = 2ν(L₂ - L₁)."
    },
    {
        "question": "The graph between L and T² for a simple pendulum is a:",
        "options": ["Parabola", "Hyperbola", "Straight line passing through the origin", "Straight line not passing through the origin"],
        "answer": "Straight line passing through the origin",
        "explanation": "T = 2π√(L/g) => T² = (4π²/g)L. This is in the form y = mx, which is a straight line passing through the origin."
    },
    {
        "question": "A Zener diode is used as a:",
        "options": ["Rectifier", "Amplifier", "Voltage regulator", "Oscillator"],
        "answer": "Voltage regulator",
        "explanation": "A Zener diode is designed to operate in the reverse breakdown region to provide a constant voltage across a load."
    },
    {
        "question": "Which error cannot be eliminated by taking multiple readings and their average?",
        "options": ["Random error", "Systematic error", "Personal error", "Instrumental error"],
        "answer": "Systematic error",
        "explanation": "Systematic errors are consistent and unidirectional. Averaging will not remove them. They must be identified and corrected for."
    },
    {
        "question": "To find the focal length of a convex lens, one can use the formula:",
        "options": ["1/f = 1/v + 1/u", "1/f = 1/v - 1/u", "f = R/2", "n = c/v"],
        "answer": "1/f = 1/v - 1/u",
        "explanation": "This is the lens formula relating object distance (u), image distance (v), and focal length (f)."
    },
    {
        "question": "The slope of the graph of current (I) vs. voltage (V) for a conductor is:",
        "options": ["Resistance (R)", "1/Resistance (1/R)", "Resistivity (ρ)", "Conductivity (σ)"],
        "answer": "1/Resistance (1/R)",
        "explanation": "From V=IR, I = (1/R)V. The slope of an I vs V graph is ΔI/ΔV = 1/R, which is the conductance."
    },
    {
        "question": "What is the function of the key in an electrical circuit experiment?",
        "options": ["To measure current", "To vary resistance", "To switch the current on or off", "To measure voltage"],
        "answer": "To switch the current on or off",
        "explanation": "A key or a switch is used to make or break the electrical circuit."
    },
    {
        "question": "Backlash error in a screw gauge is a type of:",
        "options": ["Random error", "Systematic error", "Gross error", "Personal error"],
        "answer": "Systematic error",
        "explanation": "Backlash error is due to wear and tear of the screw threads and is a systematic instrumental error."
    },
    {
        "question": "In a sonometer experiment, the frequency (ν) of the string is related to its length (L) and tension (T) as:",
        "options": ["ν ∝ L√T", "ν ∝ (1/L)√T", "ν ∝ L/T", "ν ∝ T/√L"],
        "answer": "ν ∝ (1/L)√T",
        "explanation": "The formula for the fundamental frequency of a stretched string is ν = (1/2L)√(T/μ), where μ is the mass per unit length. So, ν is proportional to (1/L)√T."
    },
    {
        "question": "The 'end correction' is associated with which experiment?",
        "options": ["Simple Pendulum", "Metre Bridge", "Resonance Column", "Vernier Calipers"],
        "answer": "Resonance Column",
        "explanation": "In a resonance column, the antinode is formed slightly above the open end of the tube. This distance is called the end correction."
    },
    {
        "question": "A positive zero error in a vernier caliper is corrected by:",
        "options": ["Adding the error to the observed reading", "Subtracting the error from the observed reading", "Multiplying the reading by the error", "Ignoring the error"],
        "answer": "Subtracting the error from the observed reading",
        "explanation": "The correction is always the negative of the error. Correction = - (Zero Error). So, a positive error must be subtracted."
    },
    {
        "question": "To determine the resistivity of a wire, one must measure its:",
        "options": ["Resistance only", "Length and area only", "Resistance, length, and area", "Resistance and length only"],
        "answer": "Resistance, length, and area",
        "explanation": "From the formula R = ρ(L/A), resistivity ρ = RA/L. Therefore, R, L, and A must be measured."
    },
    {
        "question": "In a forward-biased p-n junction, the width of the depletion layer:",
        "options": ["Increases", "Decreases", "Remains the same", "Becomes zero"],
        "answer": "Decreases",
        "explanation": "The applied forward voltage opposes the barrier potential, reducing the width of the depletion region and allowing current to flow."
    },
    {
        "question": "Which instrument is used to measure the internal resistance of a cell?",
        "options": ["Ammeter", "Voltmeter", "Galvanometer", "Potentiometer"],
        "answer": "Potentiometer",
        "explanation": "A potentiometer is the standard instrument used to accurately measure the internal resistance of a primary cell."
    },
    {
        "question": "The pitch of a screw is the distance moved by the screw for:",
        "options": ["10 complete rotations", "Half a rotation", "One complete rotation", "One-tenth of a rotation"],
        "answer": "One complete rotation",
        "explanation": "This is the definition of the pitch of a screw."
    },
    {
        "question": "The error due to the thickness of the scale markings is called:",
        "options": ["Parallax error", "Zero error", "Least count error", "Personal error"],
        "answer": "Least count error",
        "explanation": "This is a type of instrumental uncertainty related to the resolution or least count of the scale."
    },
    {
        "question": "A spherometer is used to measure:",
        "options": ["Diameter of a sphere", "Volume of a sphere", "Radius of curvature of a spherical surface", "Surface area of a sphere"],
        "answer": "Radius of curvature of a spherical surface",
        "explanation": "A spherometer is specifically designed to measure the curvature of surfaces like lenses and mirrors."
    },
    {
        "question": "In a Wheatstone bridge, if the galvanometer shows zero deflection, the bridge is said to be:",
        "options": ["Unbalanced", "Balanced", "Open", "Short-circuited"],
        "answer": "Balanced",
        "explanation": "Zero deflection in the galvanometer indicates that no current is flowing through it, which is the condition for a balanced bridge."
    },
    {
        "question": "Which of the following is a vector quantity in experiments?",
        "options": ["Length", "Mass", "Time", "Force"],
        "answer": "Force",
        "explanation": "Force has both magnitude and direction, making it a vector quantity. The others listed are scalars."
    }
  ],
  assertionReasons: [
    {
        "assertion": "A potentiometer is preferred over a voltmeter for accurate measurement of e.m.f.",
        "reason": "At the balance point, the potentiometer draws no current from the cell.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since no current is drawn, it acts as an ideal voltmeter with infinite resistance, measuring the true e.m.f."
    },
    {
        "assertion": "The graph of L vs T² for a simple pendulum is a straight line.",
        "reason": "The time period of a simple pendulum is directly proportional to its length.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. The time period T is proportional to the square root of the length (T ∝ √L), not the length itself. This leads to T² being proportional to L."
    },
    {
        "assertion": "It is essential to avoid the error of parallax while taking readings with a metre scale.",
        "reason": "Parallax error is a type of random error.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; parallax error is a systematic error as it arises from a consistent incorrect viewing angle."
    },
    {
        "assertion": "A screw gauge is more precise than a vernier caliper.",
        "reason": "The least count of a screw gauge is smaller than that of a vernier caliper.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A smaller least count means the instrument can measure smaller differences, making it more precise."
    },
    {
        "assertion": "In a metre bridge, the bridge is most sensitive when the balancing point is near the middle of the wire.",
        "reason": "The percentage error in the measurement of lengths is minimized when the two lengths are nearly equal.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The sensitivity is maximum when the ratio of resistances is close to 1, which occurs when the balancing length is near 50 cm."
    },
    {
        "assertion": "The resistance of a conductor is given by the slope of its V-I graph.",
        "reason": "Ohm's law states that V is directly proportional to I for a conductor.",
        "answer": "A",
        "explanation": "The reason (V ∝ I or V=RI) correctly explains why the slope (ΔV/ΔI) of the V-I graph represents the resistance R."
    },
    {
        "assertion": "The zero error in a vernier caliper must be accounted for to get the correct reading.",
        "reason": "Zero error is a systematic error.",
        "answer": "A",
        "explanation": "The reason correctly explains why the error must be corrected. Systematic errors, unlike random errors, will consistently affect the result if not accounted for."
    },
    {
        "assertion": "The pitch of a screw gauge is 1 mm.",
        "reason": "The least count of the screw gauge must be 0.01 mm.",
        "answer": "E",
        "explanation": "Neither the assertion nor the reason can be confirmed without more information. The pitch could be different, and the least count depends on both the pitch and the number of circular scale divisions."
    },
    {
        "assertion": "A p-n junction diode can be used as a half-wave rectifier.",
        "reason": "It conducts current only when it is forward biased.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The diode allows only one half of the AC cycle to pass (when it's forward biased), thus rectifying the current."
    },
    {
        "assertion": "In a resonance column experiment, the first resonating length is shorter than λ/4.",
        "reason": "The antinode is formed slightly above the open end of the tube.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The distance from the open end to the antinode is the end correction (e). The first resonating length is L₁ + e = λ/4, so L₁ < λ/4."
    },
    {
        "assertion": "A sonometer is used to verify the laws of vibrating strings.",
        "reason": "The frequency of a sonometer wire is inversely proportional to its length.",
        "answer": "B",
        "explanation": "Both statements are true. The second statement is one of the laws that can be verified using a sonometer, but it is not the reason for the sonometer's use. The sonometer is used because its parameters (L, T, μ) can be easily controlled and measured."
    },
    {
        "assertion": "In a potentiometer, a longer wire is preferred.",
        "reason": "A longer wire results in a smaller potential gradient, which increases the sensitivity.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A smaller potential gradient means a larger balancing length for a given voltage, making the measurement more precise."
    },
    {
        "assertion": "A voltmeter should have a high resistance.",
        "reason": "A high resistance voltmeter draws very little current from the main circuit.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. To measure the true potential difference, the voltmeter should not significantly alter the circuit it is measuring, which is achieved by having a high resistance."
    },
    {
        "assertion": "In finding the focal length of a concave mirror, the object and image pins should be placed at the same height.",
        "reason": "This is done to avoid the error of parallax.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. To accurately determine when the object and image coincide, parallax between them must be removed, which is easiest when they are at the same vertical level."
    },
    {
        "assertion": "The time period of a simple pendulum depends on the mass of the bob.",
        "reason": "The formula for the time period is T = 2π√(L/g).",
        "answer": "D",
        "explanation": "The assertion is false. The reason is true, and the formula itself shows that the period is independent of the mass (m)."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Vernier Calipers", "b) Screw Gauge", "c) Spherometer", "d) Simple Pendulum"],
        "column2": ["i) Determine g", "ii) Measure diameter of a wire", "iii) Measure length of a rod", "iv) Measure radius of curvature"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Potentiometer", "b) Metre Bridge", "c) Voltmeter", "d) Ammeter"],
        "column2": ["i) Measures current", "ii) Compares e.m.f.", "iii) Measures P.D. across a resistor", "iv) Based on Wheatstone bridge"],
        "answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        "column1": ["a) Least Count", "b) Zero Error", "c) Parallax Error", "d) Pitch"],
        "column2": ["i) Incorrect position of eye", "ii) Smallest measurement possible", "iii) Instrumental error", "iv) Distance per rotation"],
        "answer": "a-ii, b-iii, c-i, d-iv"
    },
    {
        "column1": ["a) Ohm's Law experiment", "b) p-n junction experiment", "c) Sonometer experiment", "d) Resonance column experiment"],
        "column2": ["i) Determine speed of sound", "ii) Determine resistance", "iii) Verify laws of strings", "iv) Study V-I characteristics"],
        "answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        "column1": ["a) Forward Bias", "b) Reverse Bias", "c) Zener Breakdown", "d) Balanced Bridge"],
        "column2": ["i) No current through galvanometer", "ii) Constant voltage", "iii) Low resistance path", "iv) High resistance path"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) L vs T² graph", "b) V vs I graph (conductor)", "c) 1/v vs 1/u graph (mirror)", "d) I vs V graph (diode)"],
        "column2": ["i) Slope = -1", "ii) Slope = R", "iii) Non-linear curve", "iv) Slope gives g"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Resistance", "b) e.m.f.", "c) Wavelength", "d) Refractive Index"],
        "column2": ["i) Spectrometer", "ii) Potentiometer", "iii) Travelling Microscope", "iv) Wheatstone Bridge"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Correcting positive zero error", "b) Correcting negative zero error", "c) End correction", "d) Backlash error"],
        "column2": ["i) Subtracting from reading", "ii) In screw gauge", "iii) Adding to reading", "iv) In resonance column"],
        "answer": "a-i, b-iii, c-iv, d-ii"
    },
    {
        "column1": ["a) Rheostat", "b) Key", "c) Shunt", "d) High Resistance"],
        "column2": ["i) Protects galvanometer", "ii) Used in Voltmeter", "iii) Variable resistor", "iv) Switch"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Systematic Error", "b) Random Error", "c) Least Count Error", "d) Personal Error"],
        "column2": ["i) Fault in observation", "ii) Due to instrument resolution", "iii) Due to unknown causes", "iv) Due to faulty calibration"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Finding 'u'", "b) Finding 'v'", "c) Finding 'f'", "d) Finding 'R'"],
        "column2": ["i) Spherometer", "ii) Lens formula", "iii) Image distance", "iv) Object distance"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Tension (T)", "b) Mass per unit length (μ)", "c) Length (L)", "d) Frequency (ν)"],
        "column2": ["i) Sonometer experiment variable", "ii) Sonometer experiment variable", "iii) Sonometer experiment variable", "iv) Sonometer experiment result"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Main scale division", "b) Vernier scale division", "c) Circular scale division", "d) Pitch scale"],
        "column2": ["i) Screw Gauge", "ii) Vernier Caliper", "iii) Vernier Caliper", "iv) Screw Gauge"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) I_g", "b) V_g", "c) R_g", "d) S (shunt)"],
        "column2": ["i) Galvanometer resistance", "ii) Galvanometer voltage", "iii) Galvanometer current", "iv) Ammeter conversion"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) y = mx + c", "b) y = mx", "c) y = kx²", "d) y = k/x"],
        "column2": ["i) L vs T² graph", "ii) 1/v vs 1/u (mirror)", "iii) V vs I graph", "iv) P vs V (isothermal)"],
        "answer": "a-ii, b-iii, c-i, d-iv"
    }
  ]
};

    