
import type { NeetModule } from '@/lib/types';

const metadata = {
  "id": "physics-physics-and-measurement",
  "title": "Physics and Measurement (இயற்பியல் மற்றும் அளவீட்டியல்)",
  "chapter": "Unit 1: Physics and Measurement",
  "subject": "Physics",
  "glossary": [
    { "English": "Unit", "தமிழ்": "அலகு" },
    { "English": "Least Count", "தமிழ்": "மீச்சிற்றளவு" },
    { "English": "Significant Figures", "தமிழ்": "முக்கிய எண்ணுருக்கள்" },
    { "English": "Dimensional Analysis", "தமிழ்": "பரிமாணப் பகுப்பாய்வு" },
    { "English": "Error", "தமிழ்": "பிழை" }
  ],
  "learningObjectives": [
    "Differentiate between fundamental and derived quantities and list their SI units.",
    "Apply the principle of homogeneity to check the dimensional correctness of physical equations.",
    "Calculate the error in a derived quantity based on the errors in individual measurements.",
    "Determine the number of significant figures in a given value and apply the rules in calculations."
  ],
  "prerequisites": [
    "Basic arithmetic operations (addition, subtraction, multiplication, division).",
    "Understanding of powers and exponents (scientific notation).",
    "Familiarity with basic algebraic formulas and equation manipulation."
  ],
  "conceptOverview": "Imagine building a grand temple like the Brihadeeswarar Temple in Thanjavur (தஞ்சாவூர் பெருவுடையார் கோயில்). Every stone must be measured perfectly. If one stone is slightly off, the entire structure could be weak. Physics is like building the universe, and our tools are units and measurements. This chapter is the foundation, teaching us how to measure things accurately, speak the universal language of SI units, and understand the unavoidable errors (பிழைகள்) in every measurement. Mastering this is the first step to becoming a successful scientist or engineer.",
  "tnBoardMapping": "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 1: 'Nature of Physical World and Measurement'. While the TN board provides a strong foundation, NEET requires deeper application skills, especially in error analysis and dimensional analysis.",
  "contentSections": {
    "unitsAndMeasurements": {
      "title": "Units of Measurements",
      "content": "Physics is built on measurement. To measure a physical quantity, we compare it with a standard amount of that quantity, which is called a **unit** (அலகு). A good unit should be well-defined, accessible, and not change with time or physical conditions."
    },
    "systemOfUnits": {
        "title": "System of Units",
        "content": "A complete set of both fundamental and derived units is called a system of units. The **SI system** (Système International) is the modern, internationally accepted system. It is a decimal system, making conversions easy. There are seven **fundamental units** (அடிப்படை அலகுகள்) from which all other **derived units** (வழியலகுகள்) are obtained."
    },
    "errorsInMeasurement": {
        "title": "Errors in Measurement",
        "content": "The difference between the true value and the measured value of a quantity is called an **error** (பிழை). Errors can be systematic (due to faulty instruments or procedures) or random (due to unpredictable fluctuations). Accuracy is the closeness to the true value, while precision is the limit to which the quantity is measured. The smallest value that can be measured by an instrument is its **least count** (மீச்சிற்றளவு). The combination of errors in calculations (addition, subtraction, multiplication, division, powers) is a very important topic for NEET."
    },
    "significantFigures": {
        "title": "Significant Figures",
        "content": "**Significant figures** (முக்கிய எண்ணுருக்கள்) are the reliable digits in a measurement which are known with certainty plus one uncertain digit. They indicate the precision of a measurement. There are specific rules for counting them and for using them in calculations to ensure the result is not more precise than the original measurements."
    },
    "dimensionalAnalysis": {
        "title": "Dimensions and Dimensional Analysis",
        "content": "The **dimensions** of a physical quantity are the powers to which the fundamental units are raised to represent that quantity. For example, velocity = distance/time, so its dimension is [L]/[T] or [LT⁻¹]. **Dimensional analysis** (பரிமாணப் பகுப்பாய்வு) is used to check the correctness of an equation (Principle of Homogeneity) and to derive relationships between physical quantities."
    }
  },
  "studyTips": [
    {
      "tip": "Create a chart of all fundamental and derived quantities with their SI units and dimensional formulas. Review it daily.",
      "NEET_Hack": "NEET often asks for the dimensions of complex quantities like 'Gravitational Constant' or 'Planck's Constant'. Memorizing these directly can save crucial time."
    },
    {
      "tip": "Practice error combination problems extensively. Understand that for addition/subtraction you use absolute errors, but for multiplication/division, you use percentage errors.",
      "NEET_Hack": "The formula for percentage error in `P = a³b² / (√c d)` is a very common NEET question pattern. Master it: `%Error = 3(%a) + 2(%b) + 0.5(%c) + 1(%d)`."
    }
  ],
  "practice": {
    "mcqs": [
        {
            "question": "Which of the following is not a fundamental quantity?",
            "options": ["Length", "Mass", "Time", "Velocity"],
            "answer": "Velocity",
            "explanation": "Velocity is a derived quantity (Length/Time)."
        },
        {
            "question": "The dimensional formula for Planck's constant (h) is:",
            "options": ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]"],
            "answer": "[ML²T⁻¹]",
            "explanation": "From E = hν, h = E/ν. Dimensions are [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]."
        },
        {
            "question": "The number of significant figures in 30.00 m is:",
            "options": ["1", "2", "3", "4"],
            "answer": "4",
            "explanation": "Trailing zeros in a number with a decimal point are significant."
        },
        {
            "question": "A screw gauge has a least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:",
            "options": ["0.25 mm", "0.5 mm", "1.0 mm", "0.01 mm"],
            "answer": "0.5 mm",
            "explanation": "Pitch = Least Count × Number of divisions = 0.01 mm × 50 = 0.5 mm."
        },
        {
            "question": "If the error in the measurement of the radius of a sphere is 2%, then the error in the determination of the volume of the sphere will be:",
            "options": ["2%", "4%", "6%", "8%"],
            "answer": "6%",
            "explanation": "Volume V ∝ r³. So, ΔV/V = 3(Δr/r). Percentage error = 3 × 2% = 6%."
        },
        {
            "question": "The dimensional formula for gravitational constant G is:",
            "options": ["[M⁻¹L³T⁻²]", "[ML²T⁻¹]", "[M⁻¹L²T⁻²]", "[MLT⁻²]"],
            "answer": "[M⁻¹L³T⁻²]",
            "explanation": "From F = Gm₁m₂/r², G = Fr²/m₁m₂. Dimensions are [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]."
        },
        {
            "question": "Which of the following pairs of physical quantities have the same dimensions?",
            "options": ["Work and Torque", "Force and Power", "Momentum and Energy", "Pressure and Force"],
            "answer": "Work and Torque",
            "explanation": "Both Work (Force × distance) and Torque (Force × perpendicular distance) have the dimension [ML²T⁻²]."
        },
        {
            "question": "The sum of the numbers 436.32, 227.2, and 0.301 in appropriate significant figures is:",
            "options": ["663.821", "663.82", "663.8", "664"],
            "answer": "663.8",
            "explanation": "In addition, the result should be rounded off to the same number of decimal places as the number with the least decimal places (227.2 has one)."
        },
        {
            "question": "The density of a cube is measured by measuring its mass and length of its sides. If the maximum error in the measurement of mass and length are 3% and 2% respectively, the maximum error in the measurement of density will be:",
            "options": ["5%", "7%", "9%", "1%"],
            "answer": "9%",
            "explanation": "Density ρ = M/V = M/L³. Δρ/ρ = ΔM/M + 3(ΔL/L) = 3% + 3(2%) = 9%."
        },
        {
            "question": "The SI unit of pressure is:",
            "options": ["Newton", "Joule", "Watt", "Pascal"],
            "answer": "Pascal",
            "explanation": "Pascal (N/m²) is the SI unit of pressure."
        },
        {
            "question": "The principle of homogeneity of dimensions states that:",
            "options": ["Dimensions of all terms in a physical expression are the same", "All physical quantities have dimensions", "A dimensionally correct equation is always physically correct", "All of the above"],
            "answer": "Dimensions of all terms in a physical expression are the same",
            "explanation": "This is the fundamental principle used to check the correctness of an equation."
        },
        {
            "question": "The least count of a vernier caliper is 0.01 cm. When the two jaws are in contact, the zero of the vernier scale is to the right of the main scale zero and the 4th vernier division coincides. The zero error is:",
            "options": ["+0.04 cm", "-0.04 cm", "+0.06 cm", "-0.06 cm"],
            "answer": "+0.04 cm",
            "explanation": "Since the vernier zero is to the right, the error is positive. Error = + (Coinciding division × Least Count) = + (4 × 0.01 cm) = +0.04 cm."
        },
        {
            "question": "A force F is given by F = at + bt², where t is time. The dimensions of a and b are:",
            "options": ["[MLT⁻³] and [MLT⁻⁴]", "[MLT⁻¹] and [MLT⁻²]", "[MLT⁻²] and [MLT⁻³]", "[MLT⁻⁴] and [MLT⁻³]"],
            "answer": "[MLT⁻³] and [MLT⁻⁴]",
            "explanation": "By principle of homogeneity, [at] = [F] and [bt²] = [F]. So, [a] = [F]/[t] = [MLT⁻²]/[T] = [MLT⁻³]. [b] = [F]/[t²] = [MLT⁻²]/[T²] = [MLT⁻⁴]."
        },
        {
            "question": "Which of the following measurements is most precise?",
            "options": ["5.00 mm", "5.00 cm", "5.00 m", "5.00 km"],
            "answer": "5.00 mm",
            "explanation": "Precision refers to the resolution or the least count of the measurement. 5.00 mm has the smallest unit and is measured up to 0.01 mm, making it the most precise."
        },
        {
            "question": "The time period of a body under S.H.M. is represented by T = PᵃDᵇSᶜ where P is pressure, D is density and S is surface tension. The values of a, b, c are:",
            "options": ["-3/2, 1/2, 1", "1, -3/2, 1/2", "1/2, -3/2, 1", "1, 1/2, -3/2"],
            "answer": "-3/2, 1/2, 1",
            "explanation": "By dimensional analysis, [T] = [ML⁻¹T⁻²]ᵃ[ML⁻³]ᵇ[MT⁻²]ᶜ. Comparing powers of M, L, T on both sides gives a=-3/2, b=1/2, c=1."
        },
        {
            "question": "The unit of solid angle is:",
            "options": ["Radian", "Steradian", "Degree", "Candela"],
            "answer": "Steradian",
            "explanation": "Steradian is the SI unit for solid angle."
        },
        {
            "question": "The length, breadth and thickness of a rectangular sheet of metal are 4.234 m, 1.005 m, and 2.01 cm respectively. The volume of the sheet to correct significant figures is:",
            "options": ["0.0855 m³", "0.086 m³", "0.08554 m³", "0.08 m³"],
            "answer": "0.0855 m³",
            "explanation": "Thickness = 2.01 cm = 0.0201 m. Volume = 4.234 × 1.005 × 0.0201 = 0.085528... The result should be rounded to the minimum number of significant figures, which is 3 (from 2.01 cm)."
        },
        {
            "question": "A quantity has dimensions [M¹L¹T⁻¹]. It could be:",
            "options": ["Force", "Momentum", "Power", "Energy"],
            "answer": "Momentum",
            "explanation": "Momentum = mass × velocity = [M][LT⁻¹] = [MLT⁻¹]."
        },
        {
            "question": "Which of the following is not a unit of time?",
            "options": ["Second", "Parsec", "Year", "Minute"],
            "answer": "Parsec",
            "explanation": "Parsec is a unit of distance used in astronomy."
        },
        {
            "question": "If the unit of force is 100 N, unit of length is 10 m and unit of time is 100 s, what is the unit of mass in this system?",
            "options": ["1000 kg", "10⁴ kg", "10⁵ kg", "10 kg"],
            "answer": "10⁵ kg",
            "explanation": "F = ma => M = F/a = F/(L/T²) = FT²/L. M' = (100 N)(100 s)² / (10 m) = 10 * 10000 = 100000 kg = 10⁵ kg."
        },
        {
            "question": "Random errors can be eliminated by:",
            "options": ["Careful observation", "Eliminating the cause", "Measuring the quantity with more than one instrument", "Taking a large number of observations and their average"],
            "answer": "Taking a large number of observations and their average",
            "explanation": "Averaging multiple readings helps to minimize the effect of random errors."
        },
        {
            "question": "The dimensional formula [ML⁻¹T⁻²] corresponds to:",
            "options": ["Pressure", "Energy", "Momentum", "Force"],
            "answer": "Pressure",
            "explanation": "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]."
        },
        {
            "question": "The parallax method is used to measure:",
            "options": ["Very small distances", "Very large distances", "Small time intervals", "Large time intervals"],
            "answer": "Very large distances",
            "explanation": "The parallax method is used in astronomy to measure the distances to nearby stars."
        },
        {
            "question": "The number of significant figures in the number 6.022 × 10²³ is:",
            "options": ["23", "3", "4", "27"],
            "answer": "4",
            "explanation": "The power of 10 is not counted for significant figures. So, 6.022 has four significant figures."
        },
        {
            "question": "The resistance R = V/I where V = (100 ± 5) V and I = (10 ± 0.2) A. The percentage error in R is:",
            "options": ["5%", "2%", "7%", "3%"],
            "answer": "7%",
            "explanation": "% error in R = % error in V + % error in I = (5/100)*100 + (0.2/10)*100 = 5% + 2% = 7%."
        }
    ],
    "assertionReasons": [
        {
            "assertion": "A dimensionally correct equation may be physically incorrect.",
            "reason": "An equation cannot be physically correct if it is not dimensionally correct.",
            "answer": "B",
            "explanation": "Both statements are true. Dimensional analysis can check consistency but not guarantee physical correctness (e.g., it can't check dimensionless constants). However, dimensional incorrectness guarantees the equation is wrong."
        },
        {
            "assertion": "The number of significant figures in 500 and 0.00500 are 1 and 3 respectively.",
            "reason": "Trailing zeros are not significant, and zeros between non-zero digits are significant.",
            "answer": "C",
            "explanation": "Assertion is false. The number of significant figures in 500 is ambiguous (can be 1, 2, or 3) unless written as 5.00 x 10². 0.00500 has 3 significant figures. Reason is partially correct but incomplete."
        },
        {
            "assertion": "The SI unit of force is Newton.",
            "reason": "Newton is a fundamental unit in the SI system.",
            "answer": "C",
            "explanation": "Assertion is true. Reason is false. Newton is a derived unit (kg⋅m/s²)."
        },
        {
            "assertion": "Systematic errors can be eliminated.",
            "reason": "Systematic errors are due to identifiable causes and can be corrected.",
            "answer": "A",
            "explanation": "The reason correctly explains the assertion. Systematic errors arise from faulty instruments or procedures and can be minimized or corrected once identified."
        },
        {
            "assertion": "Parallax error is a type of random error.",
            "reason": "It occurs due to incorrect positioning of the eye while taking readings.",
            "answer": "D",
            "explanation": "Assertion is false. Parallax error is a systematic error, as it will consistently be in one direction if the eye is always positioned incorrectly in the same way. The reason is true."
        },
        {
            "assertion": "The equation v = u + at is dimensionally correct.",
            "reason": "Each term in the equation has the dimension of velocity [LT⁻¹].",
            "answer": "A",
            "explanation": "The reason correctly applies the principle of homogeneity to prove the assertion."
        },
        {
            "assertion": "When adding or subtracting quantities, the result should have the same number of decimal places as the quantity with the least number of decimal places.",
            "reason": "This rule ensures the result is not more precise than the least precise measurement.",
            "answer": "A",
            "explanation": "The reason correctly explains the rule for addition/subtraction with significant figures."
        },
        {
            "assertion": "Light year and Angstrom are both units of distance.",
            "reason": "1 light year is the distance light travels in one year, and 1 Angstrom is 10⁻¹⁰ m.",
            "answer": "A",
            "explanation": "The reason provides the correct definitions, which confirms that both are units of distance, thus explaining the assertion."
        },
        {
            "assertion": "The dimensional formula for power is [ML²T⁻³].",
            "reason": "Power is defined as the rate of doing work.",
            "answer": "A",
            "explanation": "The reason correctly defines power. Power = Work/Time = [ML²T⁻²]/[T] = [ML²T⁻³]."
        },
        {
            "assertion": "Absolute error can be positive or negative.",
            "reason": "Absolute error is the magnitude of the difference between the true value and the measured value.",
            "answer": "D",
            "explanation": "Assertion is false. By definition, absolute error is the *magnitude*, which is always non-negative. The error itself can be positive or negative, but not the *absolute* error."
        },
        {
            "assertion": "The least count of an instrument is the smallest value that can be measured by it.",
            "reason": "The smaller the least count, the greater the precision of the instrument.",
            "answer": "B",
            "explanation": "Both statements are true definitions related to least count, but they are parallel facts, not cause-and-effect."
        },
        {
            "assertion": "The equation `Energy = mass × speed` is dimensionally incorrect.",
            "reason": "The dimension of energy is [ML²T⁻²] while the dimension of `mass × speed` is [MLT⁻¹].",
            "answer": "A",
            "explanation": "The reason correctly shows that the dimensions on both sides do not match, proving the assertion."
        },
        {
            "assertion": "The use of a zero error correction is necessary in a screw gauge.",
            "reason": "It is a systematic error.",
            "answer": "B",
            "explanation": "Both are true. Zero error is a systematic error, and it must be corrected. However, the reason it needs correction is to get an accurate reading, not simply because it's systematic."
        },
        {
            "assertion": "The number of significant figures depends on the system of units used.",
            "reason": "Changing units from meters to centimeters does not change the number of significant figures.",
            "answer": "D",
            "explanation": "Assertion is false. The number of significant figures is a property of the measurement, not the unit system. The reason is true and contradicts the assertion. (e.g., 1.25 m = 125 cm, both have 3 significant figures)."
        },
        {
            "assertion": "The relative error is a dimensionless quantity.",
            "reason": "It is the ratio of two quantities with the same units (mean absolute error / mean value).",
            "answer": "A",
            "explanation": "The reason correctly explains why relative error is dimensionless."
        }
    ],
    "matchTheColumns": [
        {
            "column1": ["a) Force", "b) Energy", "c) Pressure", "d) Momentum"],
            "column2": ["i) [ML²T⁻²]", "ii) [MLT⁻¹]", "iii) [ML⁻¹T⁻²]", "iv) [MLT⁻²]"],
            "answer": "a-iv, b-i, c-iii, d-ii"
        },
        {
            "column1": ["a) Length", "b) Mass", "c) Time", "d) Temperature"],
            "column2": ["i) Kilogram", "ii) Kelvin", "iii) Meter", "iv) Second"],
            "answer": "a-iii, b-i, c-iv, d-ii"
        },
        {
            "column1": ["a) Vernier Calipers", "b) Screw Gauge", "c) Metre Scale", "d) Spherometer"],
            "column2": ["i) Measures radius of curvature", "ii) Least count 1 mm", "iii) Least count 0.1 mm", "iv) Least count 0.01 mm"],
            "answer": "a-iii, b-iv, c-ii, d-i"
        },
        {
            "column1": ["a) Error in Z = A+B", "b) Error in Z = AB", "c) Error in Z = A/B", "d) Error in Z = Aⁿ"],
            "column2": ["i) ΔZ/Z = n(ΔA/A)", "ii) ΔZ = ΔA + ΔB", "iii) ΔZ/Z = ΔA/A + ΔB/B", "iv) ΔZ/Z = ΔA/A + ΔB/B"],
            "answer": "a-ii, b-iii, c-iv, d-i"
        },
        {
            "column1": ["a) Systematic Error", "b) Random Error", "c) Least Count Error", "d) Gross Error"],
            "column2": ["i) Due to carelessness of observer", "ii) Associated with resolution of instrument", "iii) Due to unknown causes", "iv) Due to faulty instrument"],
            "answer": "a-iv, b-iii, c-ii, d-i"
        },
        {
            "column1": ["a) 2.64 x 10²⁴ kg", "b) 0.02340 N", "c) 6.320 J", "d) 80.0 s"],
            "column2": ["i) 4 significant figures", "ii) 3 significant figures", "iii) 3 significant figures", "iv) 4 significant figures"],
            "answer": "a-iii, b-iv, c-i, d-ii"
        },
        {
            "column1": ["a) Frequency", "b) Angular Momentum", "c) Surface Tension", "d) Young's Modulus"],
            "column2": ["i) [ML²T⁻¹]", "ii) [MT⁻²]", "iii) [ML⁻¹T⁻²]", "iv) [T⁻¹]"],
            "answer": "a-iv, b-i, c-ii, d-iii"
        },
        {
            "column1": ["a) Same dimensions", "b) Different dimensions", "c) Dimensionless", "d) Fundamental unit"],
            "column2": ["i) Strain", "ii) Force and Impulse", "iii) Ampere", "iv) Work and Energy"],
            "answer": "a-iv, b-ii, c-i, d-iii"
        },
        {
            "column1": ["a) 1 Light Year", "b) 1 Angstrom", "c) 1 Fermi", "d) 1 Astronomical Unit"],
            "column2": ["i) 10⁻¹⁵ m", "ii) 1.496 x 10¹¹ m", "iii) 10⁻¹⁰ m", "iv) 9.46 x 10¹⁵ m"],
            "answer": "a-iv, b-iii, c-i, d-ii"
        },
        {
            "column1": ["a) Radian", "b) Candela", "c) Mole", "d) Kelvin"],
            "column2": ["i) Luminous Intensity", "ii) Amount of Substance", "iii) Temperature", "iv) Plane Angle"],
            "answer": "a-iv, b-i, c-ii, d-iii"
        },
        {
            "column1": ["a) Positive zero error", "b) Negative zero error", "c) Parallax", "d) Accuracy"],
            "column2": ["i) Closeness to true value", "ii) Vernier zero is right of main scale zero", "iii) Apparent shift in position", "iv) Vernier zero is left of main scale zero"],
            "answer": "a-ii, b-iv, c-iii, d-i"
        },
        {
            "column1": ["a) Dimensional variable", "b) Dimensionless variable", "c) Dimensional constant", "d) Dimensionless constant"],
            "column2": ["i) Gravitational constant (G)", "ii) π, e", "iii) Velocity, Force", "iv) Angle, Strain"],
            "answer": "a-iii, b-iv, c-i, d-ii"
        },
        {
            "column1": ["a) 1 kg m²/s²", "b) 1 kg m/s", "c) 1 kg/m s²", "d) 1 N/m²"],
            "column2": ["i) Pascal", "ii) Joule", "iii) Newton-second", "iv) Pascal"],
            "answer": "a-ii, b-iii, c-i, d-iv"
        },
        {
            "column1": ["a) Checking correctness of equation", "b) Deriving relation between quantities", "c) Converting units", "d) Finding value of constant"],
            "column2": ["i) Limitation of dimensional analysis", "ii) Application of dimensional analysis", "iii) Application of dimensional analysis", "iv) Application of dimensional analysis"],
            "answer": "a-ii, b-iii, c-iv, d-i"
        },
        {
            "column1": ["a) Pitch", "b) Least Count", "c) Backlash Error", "d) Zero Correction"],
            "column2": ["i) - (Zero Error)", "ii) Error in screw gauge due to wear and tear", "iii) Distance per rotation", "iv) Smallest value measured"],
            "answer": "a-iii, b-iv, c-ii, d-i"
        }
    ]
  }
};

const content = `
# 1. Module Title
– Physics – Physics and Measurement (இயற்பியல் - அளவீட்டியல்)

# 2. Learning Objectives
1.  After this, you will be able to differentiate between fundamental and derived quantities and list their SI units.
2.  After this, you will be able to apply the principle of homogeneity to check the dimensional correctness of physical equations.
3.  After this, you will be able to calculate the error in a derived quantity based on the errors in individual measurements.
4.  After this, you will be able to determine the number of significant figures in a given value and apply the rules in calculations.

# 3. Prerequisites
– Basic arithmetic operations (addition, subtraction, multiplication, division).
– Understanding of powers and exponents (scientific notation).
– Familiarity with basic algebraic formulas and equation manipulation.

# 4. Concept Overview
Imagine building a grand temple like the Brihadeeswarar Temple in Thanjavur (தஞ்சாவூர் பெருவுடையார் கோயில்). Every stone must be measured perfectly. If one stone is slightly off, the entire structure could be weak. Physics is like building the universe, and our tools are units and measurements. This chapter is the foundation, teaching us how to measure things accurately, speak the universal language of SI units, and understand the unavoidable errors (பிழைகள்) in every measurement. Mastering this is the first step to becoming a successful scientist or engineer.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 1: 'Nature of Physical World and Measurement'**. While the TN board provides a strong foundation, NEET requires deeper application skills, especially in error analysis and dimensional analysis.

## 5.1 Units and Measurements (அலகுகள் மற்றும் அளவீடுகள்)
Physics is all about quantifying the world. To measure a physical quantity, we compare it with a standard amount of that quantity, which is called a **unit** (*அலகு*). A good unit should be well-defined, accessible, and not change with time or physical conditions.

### System of Units (அலகு முறைகள்)
A complete set of both fundamental and derived units is called a system of units. The **SI system** (Système International) is the modern, internationally accepted system. It is a decimal system, making conversions easy. There are seven **fundamental units** (*அடிப்படை அலகுகள்*) from which all other **derived units** (*வழியலகுகள்*) are obtained.

| Quantity | SI Unit | Symbol |
| :--- | :--- | :--- |
| Length | meter | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | Kelvin | K |
| Electric Current | Ampere | A |
| Luminous Intensity | Candela | cd |
| Amount of Substance | mole | mol |

## 5.2 Errors in Measurement (அளவீட்டுப் பிழைகள்)
The difference between the true value and the measured value of a quantity is called an **error** (*பிழை*). Errors can be systematic (due to faulty instruments or procedures) or random (due to unpredictable fluctuations). Accuracy is the closeness to the true value, while precision is the limit to which the quantity is measured. The smallest value that can be measured by an instrument is its **least count** (*மீச்சிற்றளவு*). The combination of errors in calculations (addition, subtraction, multiplication, division, powers) is a very important topic for NEET.

## 5.3 Significant Figures (முக்கிய எண்ணுருக்கள்)
**Significant figures** (*முக்கிய எண்ணுருக்கள்*) are the reliable digits in a measurement which are known with certainty plus one uncertain digit. They indicate the precision of a measurement. There are specific rules for counting them and for using them in calculations to ensure the result is not more precise than the original measurements.

## 5.4 Dimensional Analysis (பரிமாணப் பகுப்பாய்வு)
The **dimensions** of a physical quantity are the powers to which the fundamental units are raised to represent that quantity. For example, velocity = distance/time, so its dimension is [L]/[T] or [LT⁻¹]. **Dimensional analysis** (*பரிமாணப் பகுப்பாய்வு*) is used to check the correctness of an equation (**Principle of Homogeneity**) and to derive relationships between physical quantities.

# 6. Worked Examples

**1. Easy:** Check the dimensional correctness of the equation \\(v = u + at\\).
*   **Solution:**
    *   Dimension of \\(v\\) (final velocity) = [LT⁻¹]
    *   Dimension of \\(u\\) (initial velocity) = [LT⁻¹]
    *   Dimension of \\(at\\) (acceleration × time) = [LT⁻²] × [T] = [LT⁻¹]
    *   Since all terms have the same dimension [LT⁻¹], the equation is dimensionally correct.

**2. Medium:** A physical quantity P is related to four observables a, b, c, and d as follows: \\(P = \\frac{a^3b^2}{\\sqrt{c} d}\\). The percentage errors of measurement in a, b, c, and d are 1%, 3%, 4%, and 2%, respectively. What is the percentage error in the quantity P?
*   **Solution:**
    *   The relative error in P is given by the formula: \\(\\frac{\\Delta P}{P} = 3\\frac{\\Delta a}{a} + 2\\frac{\\Delta b}{b} + \\frac{1}{2}\\frac{\\Delta c}{c} + \\frac{\\Delta d}{d}\\)
    *   The percentage error is 100 times the relative error.
    *   % Error in P = \\(3(\\% \\text{error in a}) + 2(\\% \\text{error in b}) + \\frac{1}{2}(\\% \\text{error in c}) + 1(\\% \\text{error in d})\\)
    *   % Error in P = \\(3(1\\%) + 2(3\\%) + \\frac{1}{2}(4\\%) + 1(2\\%)\\)
    *   % Error in P = \\(3\\% + 6\\% + 2\\% + 2\\% = 13\\%\\).

**3. Must-Practice:** The period of oscillation of a simple pendulum is \\(T = 2\\pi\\sqrt{\\frac{L}{g}}\\). The measured value of L is 20.0 cm known to 1 mm accuracy and time for 100 oscillations is found to be 90 s using a wrist watch of 1 s resolution. What is the accuracy in the determination of g?
*   **Solution:**
    1.  First, express \\(g\\) in terms of T and L: \\(g = \\frac{4\\pi^2L}{T^2}\\)
    2.  The relative error in \\(g\\) is \\(\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}\\).
    3.  Given: \\(L = 20.0 \\text{ cm}\\), \\(\\Delta L = 1 \\text{ mm} = 0.1 \\text{ cm}\\). So, \\(\\frac{\\Delta L}{L} = \\frac{0.1}{20.0} = 0.005\\).
    4.  The time period \\(T = \\frac{\\text{total time}}{\\text{number of oscillations}} = \\frac{90s}{100} = 0.9 \\text{ s}\\).
    5.  The error in total time \\(\\Delta t = 1 \\text{ s}\\). The error in the period \\(\\Delta T = \\frac{\\Delta t}{100} = \\frac{1s}{100} = 0.01 \\text{ s}\\).
    6.  So, \\(\\frac{\\Delta T}{T} = \\frac{0.01}{0.9} \\approx 0.011\\).
    7.  Substitute into the error formula: \\(\\frac{\\Delta g}{g} = 0.005 + 2(0.011) = 0.005 + 0.022 = 0.027\\).
    8.  The percentage error is \\(0.027 \\times 100 = 2.7\\%\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\[ [Y] = [ML⁻¹T⁻²] \\] | Dimensional formula for Young's Modulus |
| \\[ P = \\frac{a^3b^2}{\\sqrt{c} d} \\] | Error: \\(\\frac{\\Delta P}{P} = 3\\frac{\\Delta a}{a} + 2\\frac{\\Delta b}{b} + \\frac{1}{2}\\frac{\\Delta c}{c} + \\frac{\\Delta d}{d}\\) |
| \\[ LC = 1 \\text{ MSD} - 1 \\text{ VSD} \\] | Least Count of Vernier Caliper (மீச்சிற்றளவு) |
| \\[ LC = \\frac{\\text{Pitch}}{N} \\] | Least Count of Screw Gauge (N = circular divisions) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="30" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Principle of Homogeneity</text>
    <text x="150" y="50" font-family="Verdana" font-size="12" text-anchor="middle" fill="gray">(பரிமாணங்களின் ஒருமைப்பாட்டு தத்துவம்)</text>
    <text x="50" y="100" font-family="monospace" font-size="16" fill="blue">LHS</text>
    <text x="150" y="100" font-family="monospace" font-size="16" fill="black">=</text>
    <text x="250" y="100" font-family="monospace" font-size="16" fill="red">RHS</text>
    <path d="M 60 110 C 100 130, 200 130, 240 110" stroke="black" stroke-width="2" fill="none" />
    <text x="150" y="150" font-family="monospace" font-size="14" text-anchor="middle" fill="green">[Dimension of LHS] = [Dimension of RHS]</text>
    <text x="150" y="170" font-family="Verdana" font-size="10" text-anchor="middle" fill="green">[LHS பரிமாணம்] = [RHS பரிமாணம்]</text>
</svg>

\`\`\`
DIAGRAM: Principle of Homogeneity (பரிமாணங்களின் ஒருமைப்பாட்டு தத்துவம்)
An equation is valid only if the dimensions on the Left Hand Side (LHS) are equal to the dimensions on the Right Hand Side (RHS).
[Dimension of LHS] = [Dimension of RHS]
[LHS பரிமாணம்] = [RHS பரிமாணம்]
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** பரிமாணங்களை நினைவில் கொள்ள: "வேலைக்கு (Work) ஆற்றல் (Energy) தேவை, இரண்டும் ஒன்றே." Work and Energy have the same dimensional formula: [ML²T⁻²].

> **NEET Hack:** In error problems, remember that powers become multipliers. For \\(Z = A^n\\), the percentage error in Z is \\(n\\) times the percentage error in A. This is a very common question type.

[Download PDF Summary of Physics and Measurement](/downloads/physics-measurement-summary.pdf)

# 9. Quiz Yourself
1.  Why are SI units considered superior to other systems like CGS or FPS?
2.  Explain why a dimensionally correct equation is not necessarily a physically correct one. Give an example.
3.  Why is it important to minimize errors in measurements, especially in scientific experiments?

> **Student Tip (மாணவர் கருத்து):** இந்த பாடம் உங்களுக்கு எப்படி உதவியது? மேலும் என்னென்ன சேர்க்கலாம்? உங்கள் கருத்துக்களை எங்களுக்குத் தெரியப்படுத்துங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Kinematics (இயங்கியல்). Learn to describe motion mathematically.
– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Is it possible for a physical quantity to have units but no dimensions? Discuss with your friends on our forum.
`

const neetModuleData: NeetModule = {
  ...metadata,
  practice: metadata.practice,
  conceptNotes: metadata.contentSections, // Simplified mapping for export
};

export default neetModuleData;

    