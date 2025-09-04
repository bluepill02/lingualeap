
import type { NeetModule } from '@/lib/types';

export const unitsAndMeasurementsModule: NeetModule = {
    id: 'neet-physics-units-and-measurements',
    title: 'Physics - Units and Measurements (அலகுகளும் அளவீட்டியலும்)',
    chapter: 'Units and Measurements',
    subject: 'Physics',
    learningObjectives: [
        "Clearly differentiate between fundamental and derived units and understand the SI system.",
        "Master the principle of dimensional analysis to check the correctness of equations and derive relationships between physical quantities.",
        "Accurately determine the number of significant figures in a measurement and apply rules for arithmetic operations.",
        "Analyze and propagate errors in experimental measurements, understanding the difference between precision and accuracy."
    ],
    prerequisites: [
        "Basic arithmetic and algebraic manipulation.",
        "Familiarity with powers and exponents (scientific notation)."
    ],
    conceptOverview: "This chapter is the grammar of physics. Just as language needs grammar for clear communication, physics needs a standardized system of units and a method for handling measurements and their inherent uncertainties. Mastering dimensional analysis is a superpower that allows you to check equations and even guess formulas without a full derivation. Understanding errors and significant figures is crucial for interpreting experimental data, a key skill for any science student.",
    tamilConnection: "சங்க இலக்கியமான பட்டினப்பாலையில், 'கொள்வதும் மிகை கொளாது கொடுப்பதும் குறை கொடாது' என்ற வரி, அக்காலத்தில் துல்லியமான அளவீடுகளின் முக்கியத்துவத்தைக் காட்டுகிறது. இந்த அத்தியாயம், அந்தத் துல்லியத்தை அறிவியல்பூர்வமாக அணுகும் முறைகளை நமக்குக் கற்றுத்தருகிறது.",
    culturalContext: "Think of the intricate gold jewelry made in Tamil Nadu. The goldsmith (தட்டார்) must use incredibly precise measurements (e.g., in milligrams) and understand tolerances (errors) to create a perfect piece. This chapter provides the scientific foundation for that kind of precision work.",
    syllabusMapping: [
         {
            topic: 'Units, Dimensions, Errors',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 1: Nature of Physical World and Measurement',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 2: Units and Measurement',
            notes: 'A guaranteed source of at least one question in NEET. Dimensional analysis problems are very common. Error propagation is another high-yield area.',
            mappingDescription: ''
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Units and Systems of Units (அலகுகளும் அலகு முறைகளும்)
*   **Physical Quantity (பௌதிக அளவு):** Any quantity that can be measured.
*   **Fundamental Quantities:** Quantities that are independent of others (e.g., Length, Mass, Time).
*   **Derived Quantities:** Quantities that are derived from fundamental quantities (e.g., Speed = Length/Time).
*   **Unit (அலகு):** The standard used for measuring a physical quantity.
*   **SI System (பன்னாட்டு அலகு முறை):** The internationally accepted system with seven fundamental units:
    1.  Length (நீளம்) - meter (m)
    2.  Mass (நிறை) - kilogram (kg)
    3.  Time (காலம்) - second (s)
    4.  Electric Current (மின்னோட்டம்) - ampere (A)
    5.  Temperature (வெப்பநிலை) - kelvin (K)
    6.  Amount of Substance (பொருளின் அளவு) - mole (mol)
    7.  Luminous Intensity (ஒளிச்செறிவு) - candela (cd)`
        },
        {
            english: `### 2. Dimensional Analysis (பரிமாணப் பகுப்பாய்வு)
Dimensions of a physical quantity are the powers to which the fundamental units are raised to represent that quantity. We denote them with square brackets, e.g., [L], [M], [T].
*   **Dimensional Formula:** An expression showing how a derived quantity depends on fundamental ones. E.g., Force = Mass × Acceleration = M × (L/T²) => $[MLT^{-2}]$.`
        },
        {
            english: `#### Applications:
1.  **Principle of Homogeneity (பரிமாணங்களின் ஒருபடித்தான நெறிமுறை):** An equation is dimensionally correct only if the dimensions of all the terms on both sides are the same. You can only add or subtract quantities that have the same dimensions.
2.  **Checking Correctness of Equations:** Verify if the dimensions on the LHS equal the dimensions on the RHS.
3.  **Deriving Relationships:** If you know a quantity depends on others, you can find the relationship between them. E.g., if Time period T depends on length (l) and gravity (g), we can say $T \\propto l^a g^b$ and solve for a and b using dimensional analysis.
4.  **Converting Units:** Converting a quantity from one system of units to another. The principle is $n_1 u_1 = n_2 u_2$, where n is the numerical value and u is the unit.`
        },
        {
            english: `### 3. Significant Figures (முக்கிய எண்ணுருக்கள்)
Significant figures in a measurement are the reliable digits plus the first uncertain digit. They indicate the precision of a measurement.
#### Rules:
1.  All non-zero digits are significant. (e.g., 123.45 has 5 s.f.)
2.  Zeros between non-zero digits are significant. (e.g., 1007 has 4 s.f.)
3.  Leading zeros (zeros before non-zero digits) are NOT significant. (e.g., 0.0045 has 2 s.f.)
4.  Trailing zeros in a number without a decimal point are ambiguous (e.g., 1200 m). Use scientific notation: $1.2 \\times 10^3$ (2 s.f.), $1.200 \\times 10^3$ (4 s.f.).
5.  Trailing zeros in a number with a decimal point ARE significant. (e.g., 12.30 has 4 s.f., 0.05400 has 4 s.f.)`
        },
        {
            english: `#### Rules for Arithmetic:
*   **Multiplication/Division:** The final result should have the same number of significant figures as the original number with the *least* number of significant figures.
*   **Addition/Subtraction:** The final result should have the same number of decimal places as the original number with the *least* number of decimal places.`
        },
        {
            english: `### 4. Errors in Measurement (அளவீட்டில் பிழைகள்)
*   **Accuracy (துல்லியம்):** How close a measured value is to the true value.
*   **Precision (நுட்பம்):** How close repeated measurements are to each other (resolution of the measurement).
*   **Absolute Error (தனிப்பிழை):** Magnitude of the difference between the true value and the measured value.
*   **Relative Error (ஒப்புப்பிழை):** Ratio of the mean absolute error to the mean value.  $\\frac{\\Delta a_{mean}}{a_{mean}}$.
*   **Percentage Error (சதவீதப் பிழை):** Relative error expressed in percent. $(\\frac{\\Delta a_{mean}}{a_{mean}}) \\times 100\\%$.`
        },
        {
            english: `#### Combination of Errors (பிழைகளின் பரவல்):
If $Z = A \\pm B$, then the absolute error is $\\Delta Z = \\Delta A + \\Delta B$.
If $Z = A \\times B$ or $Z = A / B$, then the relative error is $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$.
If $Z = A^n$, then $\\frac{\\Delta Z}{Z} = n(\\frac{\\Delta A}{A})$.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Dimensional Correctness",
            titleTamil: "நீட் நிலை: பரிமாண சரிபார்ப்பு",
            difficulty: 'Easy',
            problem: "Check the dimensional correctness of the equation v² = u² + 2as, where u and v are velocities, a is acceleration, and s is displacement.",
            problemTamil: "v² = u² + 2as என்ற சமன்பாட்டின் பரிமாண முறைப்படி சரியானதா என சரிபார்க்கவும், இங்கு u மற்றும் v திசைவேகங்கள், a முடுக்கம், மற்றும் s இடப்பெயர்ச்சி.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Write down the dimensional formula for each term in the equation according to the Principle of Homogeneity. Each term must have the same dimensions.",
                    explanationTamil: "ஒருபடித்தான நெறிமுறையின்படி சமன்பாட்டில் உள்ள ஒவ்வொரு உறுப்பின் பரிமாண வாய்ப்பாட்டையும் எழுதவும். ஒவ்வொரு உறுப்பும் ஒரே பரிமாணத்தைக் கொண்டிருக்க வேண்டும்."
                },
                {
                    step: 2,
                    explanation: "Find the dimensions of the term v².",
                    calculation: "[v²] = ([v])² = (L T⁻¹)² = L² T⁻²"
                },
                {
                    step: 3,
                    explanation: "Find the dimensions of the term u².",
                    calculation: "[u²] = ([u])² = (L T⁻¹)² = L² T⁻²"
                },
                {
                    step: 4,
                    explanation: "Find the dimensions of the term 2as. Note that the number 2 is a dimensionless constant.",
                    calculation: "[2as] = [a][s] = (L T⁻²) (L) = L² T⁻²"
                },
                {
                    step: 5,
                    explanation: "Compare the dimensions of all terms. Since [v²] = [u²] = [2as], all terms have the same dimensions.",
                    explanationTamil: "அனைத்து உறுப்புகளின் பரிமாணங்களையும் ஒப்பிடவும். [v²] = [u²] = [2as] என்பதால், அனைத்து உறுப்புகளும் ஒரே பரிமாணத்தைக் கொண்டுள்ளன."
                }
            ],
            neetHack: "For equations involving addition or subtraction, you don't need to check every term. Just check if the dimensions of any two terms are equal. If they are, the equation is likely dimensionally correct. This saves time.",
            neetHackTamil: "கூட்டல் அல்லது கழித்தல் உள்ள சமன்பாடுகளுக்கு, ஒவ்வொரு உறுப்பையும் சரிபார்க்கத் தேவையில்லை. ஏதேனும் இரண்டு உறுப்புகளின் பரிமாணங்கள் சமமாக உள்ளதா எனச் சரிபார்த்தால் போதும். அவை சமமாக இருந்தால், சமன்பாடு பரிமாண முறைப்படி சரியாக இருக்க வாய்ப்புள்ளது.",
            commonPitfall: "Forgetting that constants like 2, π, etc., are dimensionless. Also, trigonometric functions (sinθ), exponential functions (eˣ), and logarithmic functions (log x) are dimensionless.",
            commonPitfallTamil: "2, π போன்ற மாறிலிகள் பரிமாணமற்றவை என்பதை மறந்துவிடுவது. மேலும், முக்கோணவியல் சார்புகள் (sinθ), அடுக்குக்குறிச் சார்புகள் (eˣ), மற்றும் மடக்கைச் சார்புகள் (log x) ஆகியவை பரிமாணமற்றவை."
        },
        {
            title: "JEE Level: Error Propagation",
            titleTamil: "ஜே.இ.இ நிலை: பிழை பரவல்",
            difficulty: 'Medium',
            problem: "The resistance R of a conductor is given by R = V/I. The percentage errors in the measurement of voltage V and current I are 2% and 3% respectively. What is the maximum percentage error in the measurement of resistance R?",
            problemTamil: "ஒரு கடத்தியின் மின்தடை R = V/I என கொடுக்கப்பட்டுள்ளது. மின்னழுத்தம் V மற்றும் மின்னோட்டம் I ஆகியவற்றின் அளவீட்டில் ஏற்படும் சதவீதப் பிழைகள் முறையே 2% மற்றும் 3% ஆகும். மின்தடை R-ஐ அளவிடுவதில் ஏற்படும் பெரும சதவீதப் பிழை என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Identify the formula relating the quantities. The given relation is R = V / I.",
                    explanationTamil: "அளவுகளுக்கு இடையேயான சூத்திரத்தை அடையாளம் காணவும். கொடுக்கப்பட்ட தொடர்பு R = V/I ஆகும்."
                },
                {
                    step: 2,
                    explanation: "Apply the rule for propagation of errors in division. For Z = A/B, the fractional errors add up: ΔZ/Z = ΔA/A + ΔB/B.",
                    explanationTamil: "வகுத்தலில் பிழைகள் பரவுவதற்கான விதியைப் பயன்படுத்தவும். Z = A/B எனில், பின்னப் பிழைகள் கூட்டப்படும்: ΔZ/Z = ΔA/A + ΔB/B."
                },
                {
                    step: 3,
                    explanation: "Write the error propagation formula for resistance R.",
                    calculation: "\\frac{\\Delta R}{R} = \\frac{\\Delta V}{V} + \\frac{\\Delta I}{I}"
                },
                {
                    step: 4,
                    explanation: "To find the percentage error, multiply the entire equation by 100. Note that errors are always added to find the maximum possible error.",
                    calculation: "(\\frac{\\Delta R}{R} \\times 100) = (\\frac{\\Delta V}{V} \\times 100) + (\\frac{\\Delta I}{I} \\times 100)"
                },
                 {
                    step: 5,
                    explanation: "Substitute the given percentage error values to find the final answer.",
                    calculation: "% Error in R = (% Error in V) + (% Error in I) = 2% + 3% = 5%"
                }
            ],
            neetHack: "When dealing with powers (e.g., Z = A²B³), the percentage error is simply (2 * %error in A) + (3 * %error in B). The powers become multipliers for the percentage errors. This is a very common question pattern.",
            neetHackTamil: "அடுக்குகள் வரும்போது (எ.கா., Z = A²B³), சதவீதப் பிழை என்பது (2 * A-யின் சதவீதப் பிழை) + (3 * B-யின் சதவீதப் பிழை) ஆகும். அடுக்குகள் சதவீதப் பிழைகளின் பெருக்கிகளாக மாறும். இது ஒரு பொதுவான கேள்வி முறை."
        },
        {
            title: "NEET Level: Deriving Relations",
            titleTamil: "நீட் நிலை: தொடர்புகளை வருவித்தல்",
            difficulty: 'Medium',
            problem: "The time period (T) of a simple pendulum depends on its length (l) and acceleration due to gravity (g). Derive the expression for T using dimensional analysis.",
            solutionSteps: [
                { step: 1, explanation: "Assume the relationship T ∝ lᵃgᵇ, where 'a' and 'b' are exponents to be determined. T = k lᵃ gᵇ, where k is a dimensionless constant.", explanationTamil: "T ∝ lᵃgᵇ என்ற உறவை எடுத்துக்கொள்வோம், இங்கு 'a' மற்றும் 'b' ஆகியவை கண்டறியப்பட வேண்டிய அடுக்குகள். T = k lᵃ gᵇ, இங்கு k ஒரு பரிமாணமற்ற மாறிலி." },
                { step: 2, explanation: "Write the dimensional formula for each quantity. [T] = T. [l] = L. [g] = LT⁻².", explanationTamil: "ஒவ்வொரு அளவுக்கும் பரிமாண வாய்ப்பாட்டை எழுதவும். [T] = T. [l] = L. [g] = LT⁻²." },
                { step: 3, explanation: "Substitute the dimensions into the assumed relation.", calculation: "[T] = [L]ᵃ [LT⁻²]ᵇ = Lᵃ Lᵇ T⁻²ᵇ = Lᵃ⁺ᵇ T⁻²ᵇ" },
                { step: 4, explanation: "Equate the powers of M, L, and T on both sides. On LHS: M⁰L⁰T¹. On RHS: M⁰Lᵃ⁺ᵇT⁻²ᵇ.", calculation: "For L: a + b = 0. For T: -2b = 1 => b = -1/2." },
                { step: 5, explanation: "Solve for 'a'. From a + b = 0, we get a = -b = 1/2.", calculation: "So, T = k l¹/² g⁻¹/² = k√(l/g). (Experimentally, k = 2π)." }
            ],
            commonPitfall: "Dimensional analysis cannot determine the value of dimensionless constants like 'k' (which is 2π in this case). It only provides the relationship between the physical quantities.",
            commonPitfallTamil: "பரிமாணப் பகுப்பாய்வு மூலம் 'k' (இந்த விஷயத்தில் 2π) போன்ற பரிமாணமற்ற மாறிலிகளின் மதிப்பைக் கண்டறிய முடியாது. இது பௌதிக அளவுகளுக்கு இடையிலான உறவை மட்டுமே வழங்குகிறது."
        },
        {
            title: "JEE Level: Significant Figures in Calculation",
            titleTamil: "ஜே.இ.இ நிலை: கணக்கீட்டில் முக்கிய எண்ணுருக்கள்",
            difficulty: 'Easy',
            problem: "A cube has a side of length 1.2 x 10⁻² m. Calculate its volume with due regard to significant figures.",
            solutionSteps: [
                { step: 1, explanation: "The number of significant figures in the side length (1.2 x 10⁻²) is two.", explanationTamil: "பக்க நீளத்தில் (1.2 x 10⁻²) உள்ள முக்கிய எண்ணுருக்களின் எண்ணிக்கை இரண்டு." },
                { step: 2, explanation: "Calculate the volume: V = (side)³.", calculation: "V = (1.2 x 10⁻²)³ = 1.728 x 10⁻⁶ m³." },
                { step: 3, explanation: "Apply the rule for multiplication. The final result should be rounded off to the same number of significant figures as the number with the least significant figures.", explanationTamil: "பெருக்கலுக்கான விதியைப் பயன்படுத்தவும். இறுதி முடிவை, குறைந்த முக்கிய எண்ணுருக்களைக் கொண்ட எண்ணின் அதே எண்ணிக்கையிலான முக்கிய எண்ணுருக்களுக்கு முழுமையாக்க வேண்டும்." },
                { step: 4, explanation: "The side length has two significant figures, so the volume must be rounded to two significant figures.", calculation: "V = 1.7 x 10⁻⁶ m³." }
            ],
            neetHack: "In multi-step calculations, retain one extra digit than required during intermediate steps and round off only the final answer to avoid rounding errors.",
            neetHackTamil: "பல-படி கணக்கீடுகளில், இடைநிலை படிகளின் போது தேவைப்படுவதை விட ஒரு கூடுதல் இலக்கத்தை வைத்துக்கொண்டு, இறுதி விடையை மட்டுமே முழுமையாக்கவும். இது முழுமையாக்கல் பிழைகளைத் தவிர்க்க உதவும்."
        },
        {
            title: "NEET Level: Dimensional Formula of Constants",
            titleTamil: "நீட் நிலை: மாறிலிகளின் பரிமாண வாய்ப்பாடு",
            difficulty: 'Medium',
            problem: "Find the dimensional formula for the universal gravitational constant G.",
            solutionSteps: [
                { step: 1, explanation: "Start with Newton's law of gravitation: F = Gm₁m₂/r².", explanationTamil: "நியூட்டனின் ஈர்ப்பியல் விதியுடன் தொடங்கவும்: F = Gm₁m₂/r²." },
                { step: 2, explanation: "Rearrange the formula to solve for G.", calculation: "G = Fr² / (m₁m₂)" },
                { step: 3, explanation: "Substitute the dimensional formulas for Force [MLT⁻²], distance [L], and mass [M].", calculation: "[G] = [MLT⁻²][L]² / ([M][M])" },
                { step: 4, explanation: "Simplify the expression to get the final dimensional formula.", calculation: "[G] = [ML³T⁻²] / [M²] = [M⁻¹L³T⁻²]" }
            ],
            commonPitfall: "Making mistakes in algebraic manipulation when rearranging the formula. Always isolate the constant you are solving for first.",
            commonPitfallTamil: "சூத்திரத்தை மாற்றியமைக்கும்போது இயற்கணித கையாளுதலில் தவறுகள் செய்வது. நீங்கள் தீர்க்கும் மாறிலியை எப்போதும் முதலில் தனிமைப்படுத்தவும்."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '[Force] = [MLT^{-2}]',
                description: 'Dimensional formula for Force. (விசையின் பரிமாண வாய்ப்பாடு)'
            },
             {
                formula: '[Energy] = [ML^2T^{-2}]',
                description: 'Dimensional formula for Energy/Work/Torque. (ஆற்றல்/வேலை/திருப்புவிசையின் பரிமாண வாய்ப்பாடு)'
            },
            {
                formula: '\\frac{\\Delta Z}{Z} = n\\frac{\\Delta A}{A} + m\\frac{\\Delta B}{B}',
                description: 'General formula for error propagation for Z = AⁿBᵐ.'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Every valid physical equation must be dimensionally homogeneous.",
        "Dimensional analysis is a powerful tool for checking formulas and deriving relations, but it cannot determine dimensionless constants.",
        "The number of significant figures reflects the precision of a measurement.",
        "When combining measurements, errors always add up to give the maximum possible error in the result."
    ],
    mnemonics: [
        { text: "For sig figs in Addition/Subtraction, think 'Decimal Places'. For Multiplication/Division, think 'Total Figures'.", tamil: "கூட்டல்/கழித்தலுக்கு 'தசம இடங்கள்'. பெருக்கல்/வகுத்தலுக்கு 'மொத்த இலக்கங்கள்' என நினைவில் கொள்க." }
    ],
    neetTips: [
        { text: "Questions asking to find which quantity cannot be the result of a formula can often be solved quickly using dimensional analysis.", tamil: "ஒரு சூத்திரத்தின் விளைவாக இருக்க முடியாத அளவைக் கேட்கும் கேள்விகளைப் பரிமாணப் பகுாய்வு மூலம் விரைவாகத் தீர்க்கலாம்." },
        { text: "In error analysis, always add the errors, even if the formula involves subtraction or division.", tamil: "பிழைப் பகுப்பாய்வில், சூத்திரத்தில் கழித்தல் அல்லது வகுத்தல் இருந்தாலும், பிழைகளை எப்போதும் கூட்ட வேண்டும்." }
    ],
    mcqs: [
        {
            question: "The dimensions of Planck's constant (h) are the same as that of:",
            options: ["A. Linear Momentum", "B. Angular Momentum", "C. Energy", "D. Power"],
            answer: "B. Angular Momentum",
            explanation: "From E = hν, the dimensions of h are [E]/[ν] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. The dimensions of angular momentum (L = mvr) are [M][L T⁻¹][L] = [ML²T⁻¹]. They are the same.",
            neetFrequency: 5
        }
    ],
    assertionReasons: [
        {
            assertion: "The equation y = a sin(ωt - kx) is dimensionally correct.",
            reason: "The argument of any trigonometric function must be dimensionless.",
            answer: "A",
            explanation: "The assertion is correct. The reason is also correct and explains why. The argument (ωt - kx) must be dimensionless. [ωt] = [T⁻¹][T] = [M⁰L⁰T⁰] and [kx] = [L⁻¹][L] = [M⁰L⁰T⁰]. Since both terms are dimensionless, their difference is also dimensionless, making the equation valid."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Latent Heat", "(b) Gravitational Potential", "(c) Specific Heat", "(d) Stress"],
            column2: ["(p) [ML⁻¹T⁻²]", "(q) [L²T⁻²]", "(r) [L²T⁻²K⁻¹]"],
            answer: "a-q, b-q, c-r, d-p",
            explanation: "Latent Heat (Q=mL) and Gravitational Potential (U/m) both have dimensions of [L²T⁻²]. Specific heat (Q=mcΔT) has dimensions [L²T⁻²K⁻¹]. Stress (F/A) has dimensions [ML⁻¹T⁻²]."
        }
    ]
};
