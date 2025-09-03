
import type { NeetModule } from '@/lib/types';

export const experimentalSkills: NeetModule = {
  id: 'physics-experimental-skills',
  title: 'Experimental Skills (சோதனைத் திறன்கள்)',
  chapter: 'Unit 20: Experimental Skills',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Measurement Instruments
*   **Vernier Calipers:** Used to measure length, diameter, and depth with a precision higher than a regular scale. Its accuracy is determined by its **least count** (மீச்சிற்றளவு). One must also account for **zero error**.
*   **Screw Gauge:** Used to measure the diameter of thin wires or the thickness of thin sheets with even higher precision. It works on the principle of a screw. Key concepts are **pitch** and **least count**.

### 5.2 Mechanics Experiments
*   **Simple Pendulum:** Used to determine the acceleration due to gravity (g). The experiment involves measuring the length (L) and the time period (T) and using the formula \\(g = 4\\pi^2L/T^2\\). Plotting L vs T² gives a straight line.
*   **Metre Scale:** Used to determine the mass of an object by the **principle of moments**, where clockwise moments are balanced by anti-clockwise moments.
*   **Young's Modulus (Y):** Determined for a wire using Searle's apparatus. It involves measuring the extension (ΔL) for a given load (F) and using the formula \\(Y = \\frac{FL}{A\\Delta L}\\).
*   **Surface Tension (S):** Measured using the **capillary rise method**. The height (h) to which the liquid rises is measured, and S is calculated from \\(h = \\frac{2S\\cos{\\theta}}{r\\rho g}\\).
*   **Coefficient of Viscosity (η):** Determined by measuring the **terminal velocity (v_t)** of a small sphere falling through a viscous liquid and using **Stokes' Law**. \\(v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}\\).

### 5.3 Sound and Heat Experiments
*   **Speed of Sound:** Measured using a **resonance tube**. This is an application of standing waves in a closed organ pipe. The speed of sound is found using \\(v = 2\\nu(L_2 - L_1)\\), where L₁ and L₂ are the first and second resonating lengths.
*   **Specific Heat Capacity:** Determined by the **method of mixtures** (calorimetry), based on the principle that heat lost by a hot body equals the heat gained by a cold body.

### 5.4 Electricity & Magnetism Experiments
*   **Resistivity (ρ):** Determined using a **metre bridge**. The resistance (R) of the wire is found first using the balanced bridge principle, then ρ is calculated from \\(R = \\rho L/A\\).
*   **Resistance (R):** Verified using **Ohm's law**, by measuring corresponding values of V and I and plotting a graph. The slope of the V-I graph gives R.
*   **Galvanometer:** Its resistance (G) and figure of merit are found using the **half-deflection method**.

### 5.5 Optics and Electronics Experiments
*   **Focal Length (f):** For a **concave mirror** and **convex lens**, 'f' can be found by plotting a graph of 1/v versus 1/u. The intercepts give 1/f. For a **convex mirror**, a convex lens is used to form a real image which then acts as a virtual object.
*   **Prism:** The plot of the **angle of deviation (δ) vs angle of incidence (i)** gives a characteristic U-shaped curve. The minimum deviation (δ_m) is used to find the refractive index of the prism material.
*   **Refractive Index (n):** For a glass slab, it is measured using a **travelling microscope** by finding the real depth and apparent depth.
*   **Diode Characteristics:** The **I-V characteristic curves** for a **p-n junction diode** show its low resistance in forward bias and high resistance in reverse bias. The curve for a **Zener diode** shows a sharp breakdown at the Zener voltage in reverse bias.
*   **Component Identification:** Basic identification of a Diode, LED, Resistor, and Capacitor based on their appearance and properties (e.g., polarity for diodes/LEDs, color code for resistors).
`,
  workedExamples: [
    {
        problem: "In a vernier caliper, 10 divisions of the vernier scale coincide with 9 divisions of the main scale. If one main scale division is 1 mm, what is the least count?",
        solution: "Value of 10 Vernier Scale Divisions (VSD) = Value of 9 Main Scale Divisions (MSD). 10 VSD = 9 mm. So, 1 VSD = 0.9 mm. Least Count (LC) = 1 MSD - 1 VSD = 1 mm - 0.9 mm = **0.1 mm**."
    },
    {
        problem: "The pitch of a screw gauge is 1 mm and there are 100 divisions on the circular scale. A student measures the diameter of a wire and the main scale reading is 2 mm and the 45th division of the circular scale coincides with the baseline. Find the diameter.",
        solution: "1.  Least Count (LC) = Pitch / Number of divisions = 1 mm / 100 = 0.01 mm. 2.  Circular Scale Reading (CSR) = Coinciding division × LC = 45 × 0.01 mm = 0.45 mm. 3.  Total Reading = Main Scale Reading (MSR) + CSR = 2 mm + 0.45 mm = **2.45 mm**."
    },
    {
        problem: "In a metre bridge experiment, the balance point is found to be at 30 cm from the left end (A). If a known resistance of 10 Ω is in the right gap, what is the value of the unknown resistance in the left gap?",
        solution: "The metre bridge works on the principle of a balanced Wheatstone bridge: \\(\\frac{X}{Y} = \\frac{l_1}{l_2}\\). Given: Balancing length from left \\(l_1 = 30 \\text{ cm}\\). Therefore, \\(l_2 = 100 - l_1 = 100 - 30 = 70 \\text{ cm}\\). The known resistance in the right gap is \\(Y = 10 \\Omega\\). \\(\\frac{X}{10} = \\frac{30}{70}\\). \\(X = 10 \\times \\frac{3}{7} = \\frac{30}{7} \\approx 4.28 \\Omega\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
