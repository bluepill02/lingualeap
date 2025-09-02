
import type { NeetModule } from '@/lib/types';

export const physicsAndMeasurement: NeetModule = {
  id: 'physics-physics-and-measurement',
  title: 'Physics and Measurement',
  chapter: 'Physics and Measurement',
  subject: 'Physics',
  conceptNotes: `
### 1. Units and Measurements (அலகுகள் மற்றும் அளவீடுகள்)
*   **Physical Quantities:** Quantities that can be measured.
*   **Fundamental Quantities:** Independent quantities (e.g., Length, Mass, Time).
*   **Derived Quantities:** Quantities derived from fundamental quantities (e.g., Velocity, Force).
*   **SI System:** The International System of Units. Contains 7 fundamental units and 2 supplementary units.

### 2. Dimensions and Dimensional Analysis (பரிமாணங்கள் மற்றும் பரிமாணப் பகுப்பாய்வு)
*   **Dimensions:** The powers to which the fundamental units are raised to represent a physical quantity.
*   **Dimensional Formula:** An expression showing how and which of the fundamental units are required to represent the unit of a physical quantity. (e.g., Force [F] = [MLT⁻²]).
*   **Principle of Homogeneity:** The dimensions of all the terms in a physical expression should be the same.
*   **Uses of Dimensional Analysis:**
    1.  To check the dimensional correctness of a given physical equation.
    2.  To derive the relationship between different physical quantities.
    3.  To convert a physical quantity from one system of units to another.

### 3. Errors in Measurement (அளவீட்டுப் பிழைகள்)
*   **Error:** The difference between the true value and the measured value.
*   **Systematic Errors:** Errors that tend to be in one direction, either positive or negative.
*   **Random Errors:** Errors that occur irregularly and are random in sign and size.
*   **Absolute Error, Relative Error, and Percentage Error:**
    *   **Absolute Error (தனிப்பிழை):** The magnitude of the difference between the true value and the individual measured value.
    *   **Relative Error (ஒப்புப் பிழை):** The ratio of the mean absolute error to the mean value.
    *   **Percentage Error (விழுக்காட்டுப் பிழை):** The relative error expressed in percent.

### 4. Propagation of Errors (பிழைகளின் பரவல்)
*   **Error in Sum/Difference:** If Z = A + B or Z = A - B, then ΔZ = ΔA + ΔB.
*   **Error in Product/Division:** If Z = AB or Z = A/B, then ΔZ/Z = ΔA/A + ΔB/B.
*   **Error in Case of a Measured Quantity Raised to a Power:** If Z = Aⁿ, then ΔZ/Z = n(ΔA/A).

### 5. Significant Figures (முக்கிய எண்ணுருக்கள்)
*   The reliable digits plus the first uncertain digit in a measurement.
*   **Rules for determining significant figures** and for arithmetic operations with them are crucial for representing results accurately.
`,
  workedExamples: [
    {
        problem: "The period of oscillation of a simple pendulum is T = 2π√(L/g). The measured value of L is 20.0 cm known to 1 mm accuracy and time for 100 oscillations is found to be 90 s using a wrist watch of 1 s resolution. What is the accuracy in the determination of g?",
        solution: "From the formula, T² = 4π²(L/g), so g = 4π²L/T². The relative error in g is Δg/g = ΔL/L + 2(ΔT/T). Given ΔL = 1 mm = 0.1 cm, L = 20.0 cm. So, ΔL/L = 0.1/20.0 = 0.005. The time period T = 90s/100 = 0.9 s. The error in time measurement Δt = 1 s for 100 oscillations. So, the error in the period T is ΔT = Δt/100 = 1/100 = 0.01 s. ΔT/T = 0.01/0.9 ≈ 0.011. Now, Δg/g = 0.005 + 2(0.011) = 0.005 + 0.022 = 0.027. The percentage accuracy is 0.027 * 100 = 2.7%, which is approximately 3%."
    },
    {
        problem: "Check the dimensional correctness of the equation ½mv² = mgh.",
        solution: "Dimension of LHS = Dimension of ½mv² = [M][LT⁻¹]² = [ML²T⁻²]. Dimension of RHS = Dimension of mgh = [M][LT⁻²][L] = [ML²T⁻²]. Since the dimensions of the LHS and RHS are the same, the equation is dimensionally correct."
    },
    {
        problem: "A physical quantity P is related to four observables a, b, c, and d as follows: P = a³b² / (√c d). The percentage errors of measurement in a, b, c, and d are 1%, 3%, 4%, and 2%, respectively. What is the percentage error in the quantity P?",
        solution: "The relative error in P is given by ΔP/P = 3(Δa/a) + 2(Δb/b) + (1/2)(Δc/c) + (Δd/d). The percentage error in P is 100(ΔP/P) = 3(1%) + 2(3%) + (1/2)(4%) + (2%) = 3% + 6% + 2% + 2% = 13%."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
