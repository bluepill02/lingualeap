
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
  mcqs: [
    {
        question: "Which of the following is not a fundamental quantity?",
        options: ["Length", "Mass", "Time", "Velocity"],
        answer: "Velocity",
        explanation: "Velocity is a derived quantity (Length/Time)."
    },
    {
        question: "The dimensional formula for Planck's constant (h) is:",
        options: ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]"],
        answer: "[ML²T⁻¹]",
        explanation: "From E = hν, h = E/ν. Dimensions are [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]."
    },
    {
        question: "The number of significant figures in 30.00 m is:",
        options: ["1", "2", "3", "4"],
        answer: "4",
        explanation: "Trailing zeros in a number with a decimal point are significant."
    },
    {
        question: "A screw gauge has a least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:",
        options: ["0.25 mm", "0.5 mm", "1.0 mm", "0.01 mm"],
        answer: "0.5 mm",
        explanation: "Pitch = Least Count × Number of divisions = 0.01 mm × 50 = 0.5 mm."
    },
    {
        question: "If the error in the measurement of the radius of a sphere is 2%, then the error in the determination of the volume of the sphere will be:",
        options: ["2%", "4%", "6%", "8%"],
        answer: "6%",
        explanation: "Volume V ∝ r³. So, ΔV/V = 3(Δr/r). Percentage error = 3 × 2% = 6%."
    },
    {
        question: "The dimensional formula for gravitational constant G is:",
        options: ["[M⁻¹L³T⁻²]", "[ML²T⁻¹]", "[M⁻¹L²T⁻²]", "[MLT⁻²]"],
        answer: "[M⁻¹L³T⁻²]",
        explanation: "From F = Gm₁m₂/r², G = Fr²/m₁m₂. Dimensions are [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]."
    },
    {
        question: "Which of the following pairs of physical quantities have the same dimensions?",
        options: ["Work and Torque", "Force and Power", "Momentum and Energy", "Pressure and Force"],
        answer: "Work and Torque",
        explanation: "Both Work (Force × distance) and Torque (Force × perpendicular distance) have the dimension [ML²T⁻²]."
    },
    {
        question: "The sum of the numbers 436.32, 227.2, and 0.301 in appropriate significant figures is:",
        options: ["663.821", "663.82", "663.8", "664"],
        answer: "663.8",
        explanation: "In addition, the result should be rounded off to the same number of decimal places as the number with the least decimal places (227.2 has one)."
    },
    {
        question: "The density of a cube is measured by measuring its mass and length of its sides. If the maximum error in the measurement of mass and length are 3% and 2% respectively, the maximum error in the measurement of density will be:",
        options: ["5%", "7%", "9%", "1%"],
        answer: "9%",
        explanation: "Density ρ = M/V = M/L³. Δρ/ρ = ΔM/M + 3(ΔL/L) = 3% + 3(2%) = 9%."
    },
    {
        question: "The SI unit of pressure is:",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: "Pascal",
        explanation: "Pascal (N/m²) is the SI unit of pressure."
    },
    {
        question: "The principle of homogeneity of dimensions states that:",
        options: ["Dimensions of all terms in a physical expression are the same", "All physical quantities have dimensions", "A dimensionally correct equation is always physically correct", "All of the above"],
        answer: "Dimensions of all terms in a physical expression are the same",
        explanation: "This is the fundamental principle used to check the correctness of an equation."
    },
    {
        question: "The least count of a vernier caliper is 0.01 cm. When the two jaws are in contact, the zero of the vernier scale is to the right of the main scale zero and the 4th vernier division coincides. The zero error is:",
        options: ["+0.04 cm", "-0.04 cm", "+0.06 cm", "-0.06 cm"],
        answer: "+0.04 cm",
        explanation: "Since the vernier zero is to the right, the error is positive. Error = + (Coinciding division × Least Count) = + (4 × 0.01 cm) = +0.04 cm."
    },
    {
        question: "A force F is given by F = at + bt², where t is time. The dimensions of a and b are:",
        options: ["[MLT⁻³] and [MLT⁻⁴]", "[MLT⁻¹] and [MLT⁻²]", "[MLT⁻²] and [MLT⁻³]", "[MLT⁻⁴] and [MLT⁻³]"],
        answer: "[MLT⁻³] and [MLT⁻⁴]",
        explanation: "By principle of homogeneity, [at] = [F] and [bt²] = [F]. So, [a] = [F]/[t] = [MLT⁻²]/[T] = [MLT⁻³]. [b] = [F]/[t²] = [MLT⁻²]/[T²] = [MLT⁻⁴]."
    },
    {
        question: "Which of the following measurements is most precise?",
        options: ["5.00 mm", "5.00 cm", "5.00 m", "5.00 km"],
        answer: "5.00 mm",
        explanation: "Precision refers to the resolution or the least count of the measurement. 5.00 mm has the smallest unit and is measured up to 0.01 mm, making it the most precise."
    },
    {
        question: "The time period of a body under S.H.M. is represented by T = PᵃDᵇSᶜ where P is pressure, D is density and S is surface tension. The values of a, b, c are:",
        options: ["-3/2, 1/2, 1", "1, -3/2, 1/2", "1/2, -3/2, 1", "1, 1/2, -3/2"],
        answer: "-3/2, 1/2, 1",
        explanation: "By dimensional analysis, [T] = [ML⁻¹T⁻²]ᵃ[ML⁻³]ᵇ[MT⁻²]ᶜ. Comparing powers of M, L, T on both sides gives a=-3/2, b=1/2, c=1."
    },
    {
        question: "The unit of solid angle is:",
        options: ["Radian", "Steradian", "Degree", "Candela"],
        answer: "Steradian",
        explanation: "Steradian is the SI unit for solid angle."
    },
    {
        question: "The length, breadth and thickness of a rectangular sheet of metal are 4.234 m, 1.005 m, and 2.01 cm respectively. The volume of the sheet to correct significant figures is:",
        options: ["0.0855 m³", "0.086 m³", "0.08554 m³", "0.08 m³"],
        answer: "0.0855 m³",
        explanation: "Thickness = 2.01 cm = 0.0201 m. Volume = 4.234 × 1.005 × 0.0201 = 0.085528... The result should be rounded to the minimum number of significant figures, which is 3 (from 2.01 cm)."
    },
    {
        question: "A quantity has dimensions [M¹L¹T⁻¹]. It could be:",
        options: ["Force", "Momentum", "Power", "Energy"],
        answer: "Momentum",
        explanation: "Momentum = mass × velocity = [M][LT⁻¹] = [MLT⁻¹]."
    },
    {
        question: "Which of the following is not a unit of time?",
        options: ["Second", "Parsec", "Year", "Minute"],
        answer: "Parsec",
        explanation: "Parsec is a unit of distance used in astronomy."
    },
    {
        question: "If the unit of force is 100 N, unit of length is 10 m and unit of time is 100 s, what is the unit of mass in this system?",
        options: ["1000 kg", "10⁴ kg", "10⁵ kg", "10 kg"],
        answer: "10⁵ kg",
        explanation: "F = ma => M = F/a = F/(L/T²) = FT²/L. M' = (100 N)(100 s)² / (10 m) = 10 * 10000 = 100000 kg = 10⁵ kg."
    },
    {
        question: "Random errors can be eliminated by:",
        options: ["Careful observation", "Eliminating the cause", "Measuring the quantity with more than one instrument", "Taking a large number of observations and their average"],
        answer: "Taking a large number of observations and their average",
        explanation: "Averaging multiple readings helps to minimize the effect of random errors."
    },
    {
        question: "The dimensional formula [ML⁻¹T⁻²] corresponds to:",
        options: ["Pressure", "Energy", "Momentum", "Force"],
        answer: "Pressure",
        explanation: "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]."
    },
    {
        question: "The parallax method is used to measure:",
        options: ["Very small distances", "Very large distances", "Small time intervals", "Large time intervals"],
        answer: "Very large distances",
        explanation: "The parallax method is used in astronomy to measure the distances to nearby stars."
    },
    {
        question: "The number of significant figures in the number 6.022 × 10²³ is:",
        options: ["23", "3", "4", "27"],
        answer: "4",
        explanation: "The power of 10 is not counted for significant figures. So, 6.022 has four significant figures."
    },
    {
        question: "The resistance R = V/I where V = (100 ± 5) V and I = (10 ± 0.2) A. The percentage error in R is:",
        options: ["5%", "2%", "7%", "3%"],
        answer: "7%",
        explanation: "% error in R = % error in V + % error in I = (5/100)*100 + (0.2/10)*100 = 5% + 2% = 7%."
    }
  ],
  assertionReasons: [
    {
        assertion: "A dimensionally correct equation may be physically incorrect.",
        reason: "An equation cannot be physically correct if it is not dimensionally correct.",
        answer: "B",
        explanation: "Both statements are true. Dimensional analysis can check consistency but not guarantee physical correctness (e.g., it can't check dimensionless constants). However, dimensional incorrectness guarantees the equation is wrong."
    },
    {
        assertion: "The number of significant figures in 500 and 0.00500 are 1 and 3 respectively.",
        reason: "Trailing zeros are not significant, and zeros between non-zero digits are significant.",
        answer: "C",
        explanation: "Assertion is false. The number of significant figures in 500 is ambiguous (can be 1, 2, or 3) unless written as 5.00 x 10². 0.00500 has 3 significant figures. Reason is partially correct but incomplete."
    },
    {
        assertion: "The SI unit of force is Newton.",
        reason: "Newton is a fundamental unit in the SI system.",
        answer: "C",
        explanation: "Assertion is true. Reason is false. Newton is a derived unit (kg⋅m/s²)."
    },
    {
        assertion: "Systematic errors can be eliminated.",
        reason: "Systematic errors are due to identifiable causes and can be corrected.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Systematic errors arise from faulty instruments or procedures and can be minimized or corrected once identified."
    },
    {
        assertion: "Parallax error is a type of random error.",
        reason: "It occurs due to incorrect positioning of the eye while taking readings.",
        answer: "D",
        explanation: "Assertion is false. Parallax error is a systematic error, as it will consistently be in one direction if the eye is always positioned incorrectly in the same way. The reason is true."
    },
    {
        assertion: "The equation v = u + at is dimensionally correct.",
        reason: "Each term in the equation has the dimension of velocity [LT⁻¹].",
        answer: "A",
        explanation: "The reason correctly applies the principle of homogeneity to prove the assertion."
    },
    {
        assertion: "When adding or subtracting quantities, the result should have the same number of decimal places as the quantity with the least number of decimal places.",
        reason: "This rule ensures the result is not more precise than the least precise measurement.",
        answer: "A",
        explanation: "The reason correctly explains the rule for addition/subtraction with significant figures."
    },
    {
        assertion: "Light year and Angstrom are both units of distance.",
        reason: "1 light year is the distance light travels in one year, and 1 Angstrom is 10⁻¹⁰ m.",
        answer: "A",
        explanation: "The reason provides the correct definitions, which confirms that both are units of distance, thus explaining the assertion."
    },
    {
        assertion: "The dimensional formula for power is [ML²T⁻³].",
        reason: "Power is defined as the rate of doing work.",
        answer: "A",
        explanation: "The reason correctly defines power. Power = Work/Time = [ML²T⁻²]/[T] = [ML²T⁻³]."
    },
    {
        assertion: "Absolute error can be positive or negative.",
        reason: "Absolute error is the magnitude of the difference between the true value and the measured value.",
        answer: "D",
        explanation: "Assertion is false. By definition, absolute error is the *magnitude*, which is always non-negative. The error itself can be positive or negative, but not the *absolute* error."
    },
    {
        assertion: "The least count of an instrument is the smallest value that can be measured by it.",
        reason: "The smaller the least count, the greater the precision of the instrument.",
        answer: "B",
        explanation: "Both statements are true definitions related to least count, but they are parallel facts, not cause-and-effect."
    },
    {
        assertion: "The equation `Energy = mass × speed` is dimensionally incorrect.",
        reason: "The dimension of energy is [ML²T⁻²] while the dimension of `mass × speed` is [MLT⁻¹].",
        answer: "A",
        explanation: "The reason correctly shows that the dimensions on both sides do not match, proving the assertion."
    },
    {
        assertion: "The use of a zero error correction is necessary in a screw gauge.",
        reason: "It is a systematic error.",
        answer: "B",
        explanation: "Both are true. Zero error is a systematic error, and it must be corrected. However, the reason it needs correction is to get an accurate reading, not simply because it's systematic."
    },
    {
        assertion: "The number of significant figures depends on the system of units used.",
        reason: "Changing units from meters to centimeters does not change the number of significant figures.",
        answer: "D",
        explanation: "Assertion is false. The number of significant figures is a property of the measurement, not the unit system. The reason is true and contradicts the assertion. (e.g., 1.25 m = 125 cm, both have 3 significant figures)."
    },
    {
        assertion: "The relative error is a dimensionless quantity.",
        reason: "It is the ratio of two quantities with the same units (mean absolute error / mean value).",
        answer: "A",
        explanation: "The reason correctly explains why relative error is dimensionless."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Force", "b) Energy", "c) Pressure", "d) Momentum"],
        column2: ["i) [ML²T⁻²]", "ii) [MLT⁻¹]", "iii) [ML⁻¹T⁻²]", "iv) [MLT⁻²]"],
        answer: "a-iv, b-i, c-iii, d-ii"
    },
    {
        column1: ["a) Length", "b) Mass", "c) Time", "d) Temperature"],
        column2: ["i) Kilogram", "ii) Kelvin", "iii) Meter", "iv) Second"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Vernier Calipers", "b) Screw Gauge", "c) Metre Scale", "d) Spherometer"],
        column2: ["i) Measures radius of curvature", "ii) Least count 1 mm", "iii) Least count 0.1 mm", "iv) Least count 0.01 mm"],
        answer: "a-iii, b-iv, c-ii, d-i"
    },
    {
        column1: ["a) Error in Z = A+B", "b) Error in Z = AB", "c) Error in Z = A/B", "d) Error in Z = Aⁿ"],
        column2: ["i) ΔZ/Z = n(ΔA/A)", "ii) ΔZ = ΔA + ΔB", "iii) ΔZ/Z = ΔA/A + ΔB/B", "iv) ΔZ/Z = ΔA/A + ΔB/B"],
        answer: "a-ii, b-iii, c-iv, d-i"
    },
    {
        column1: ["a) Systematic Error", "b) Random Error", "c) Least Count Error", "d) Gross Error"],
        column2: ["i) Due to carelessness of observer", "ii) Associated with resolution of instrument", "iii) Due to unknown causes", "iv) Due to faulty instrument"],
        answer: "a-iv, b-iii, c-ii, d-i"
    },
    {
        column1: ["a) 2.64 x 10²⁴ kg", "b) 0.02340 N", "c) 6.320 J", "d) 80.0 s"],
        column2: ["i) 4 significant figures", "ii) 3 significant figures", "iii) 3 significant figures", "iv) 4 significant figures"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) Frequency", "b) Angular Momentum", "c) Surface Tension", "d) Young's Modulus"],
        column2: ["i) [ML²T⁻¹]", "ii) [MT⁻²]", "iii) [ML⁻¹T⁻²]", "iv) [T⁻¹]"],
        answer: "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1: ["a) Same dimensions", "b) Different dimensions", "c) Dimensionless", "d) Fundamental unit"],
        column2: ["i) Strain", "ii) Force and Impulse", "iii) Ampere", "iv) Work and Energy"],
        answer: "a-iv, b-ii, c-i, d-iii"
    },
    {
        column1: ["a) 1 Light Year", "b) 1 Angstrom", "c) 1 Fermi", "d) 1 Astronomical Unit"],
        column2: ["i) 10⁻¹⁵ m", "ii) 1.496 x 10¹¹ m", "iii) 10⁻¹⁰ m", "iv) 9.46 x 10¹⁵ m"],
        answer: "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1: ["a) Radian", "b) Candela", "c) Mole", "d) Kelvin"],
        column2: ["i) Luminous Intensity", "ii) Amount of Substance", "iii) Temperature", "iv) Plane Angle"],
        answer: "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1: ["a) Positive zero error", "b) Negative zero error", "c) Parallax", "d) Accuracy"],
        column2: ["i) Closeness to true value", "ii) Vernier zero is right of main scale zero", "iii) Apparent shift in position", "iv) Vernier zero is left of main scale zero"],
        answer: "a-ii, b-iv, c-iii, d-i"
    },
    {
        column1: ["a) Dimensional variable", "b) Dimensionless variable", "c) Dimensional constant", "d) Dimensionless constant"],
        column2: ["i) Gravitational constant (G)", "ii) π, e", "iii) Velocity, Force", "iv) Angle, Strain"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) 1 kg m²/s²", "b) 1 kg m/s", "c) 1 kg/m s²", "d) 1 N/m²"],
        column2: ["i) Pascal", "ii) Joule", "iii) Newton-second", "iv) Pascal"],
        answer: "a-ii, b-iii, c-i, d-iv"
    },
    {
        column1: ["a) Checking correctness of equation", "b) Deriving relation between quantities", "c) Converting units", "d) Finding value of constant"],
        column2: ["i) Limitation of dimensional analysis", "ii) Application of dimensional analysis", "iii) Application of dimensional analysis", "iv) Application of dimensional analysis"],
        answer: "a-ii, b-iii, c-iv, d-i"
    },
    {
        column1: ["a) Pitch", "b) Least Count", "c) Backlash Error", "d) Zero Correction"],
        column2: ["i) - (Zero Error)", "ii) Error in screw gauge due to wear and tear", "iii) Distance per rotation", "iv) Smallest value measured"],
        answer: "a-iii, b-iv, c-ii, d-i"
    }
  ]
};

    