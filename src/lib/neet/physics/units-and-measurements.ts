
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
            mappingDescription: '11th Std Physics - Vol 1, Chapter 1 maps to NEET Physics Unit 1'
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
*   **Dimensional Formula:** An expression showing how a derived quantity depends on fundamental ones. E.g., Force = Mass × Acceleration = M × (L/T²) => $[MLT^{-2}]$.

#### Applications:
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
5.  Trailing zeros in a number with a decimal point ARE significant. (e.g., 12.30 has 4 s.f., 0.05400 has 4 s.f.)

#### Rules for Arithmetic:
*   **Multiplication/Division:** The final result should have the same number of significant figures as the original number with the *least* number of significant figures.
*   **Addition/Subtraction:** The final result should have the same number of decimal places as the original number with the *least* number of decimal places.`
        },
        {
            english: `### 4. Errors in Measurement (அளவீட்டில் பிழைகள்)
*   **Accuracy (துல்லியம்):** How close a measured value is to the true value.
*   **Precision (நுட்பம்):** How close repeated measurements are to each other (resolution of the measurement).
*   **Absolute Error (தனிப்பிழை):** Magnitude of the difference between the true value and the measured value.
*   **Relative Error (ஒப்புப்பிழை):** Ratio of the mean absolute error to the mean value.  $\\frac{\\Delta a_{mean}}{a_{mean}}$.
*   **Percentage Error (சதவீதப் பிழை):** Relative error expressed in percent. $(\\frac{\\Delta a_{mean}}{a_{mean}}) \\times 100\\%$.

#### Combination of Errors (பிழைகளின் பரவல்):
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
            title: "NEET Level: Significant Figures",
            titleTamil: "நீட் நிலை: முக்கிய எண்ணுருக்கள்",
            difficulty: 'Easy',
            problem: "A cube has a side of length 1.2 x 10⁻² m. Calculate its volume in appropriate significant figures.",
            problemTamil: "ஒரு கனசதுரத்தின் பக்கத்தின் நீளம் 1.2 x 10⁻² மீ ஆகும். அதன் கனஅளவை பொருத்தமான முக்கிய எண்ணுருக்களில் கணக்கிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "The formula for the volume of a cube is V = l³.",
                    explanationTamil: "ஒரு கனசதுரத்தின் கனஅளவுக்கான சூத்திரம் V = l³ ஆகும்."
                },
                {
                    step: 2,
                    explanation: "Calculate the volume.",
                    explanationTamil: "கனஅளவைக் கணக்கிடவும்.",
                    calculation: "V = (1.2 \\times 10^{-2} m)³ = 1.728 \\times 10^{-6} m³"
                },
                {
                    step: 3,
                    explanation: "Apply the rule for significant figures in multiplication. The original number (1.2) has two significant figures.",
                    explanationTamil: "பெருக்கலில் முக்கிய எண்ணுருக்களுக்கான விதியைப் பயன்படுத்தவும். அசல் எண் (1.2) இரண்டு முக்கிய எண்ணுருக்களைக் கொண்டுள்ளது."
                },
                {
                    step: 4,
                    explanation: "Round the result to two significant figures.",
                    explanationTamil: "முடிவை இரண்டு முக்கிய எண்ணுருக்களுக்கு முழுமையாக்கவும்.",
                    calculation: "V = 1.7 \\times 10^{-6} m³"
                }
            ],
            commonPitfall: "Rounding off too early in intermediate steps. Carry extra digits during calculation and only round the final answer.",
            commonPitfallTamil: "இடைநிலைப்படிகளில் முன்கூட்டியே முழுமையாக்குதல். கணக்கீட்டின் போது கூடுதல் இலக்கங்களை எடுத்துச் சென்று, இறுதி விடையை மட்டுமே முழுமையாக்கவும்."
        },
        {
            title: "JEE Level: Deriving Relations",
            titleTamil: "ஜே.இ.இ நிலை: தொடர்புகளை வருவித்தல்",
            difficulty: 'Medium',
            problem: "The time period (T) of a simple pendulum may depend on its mass (m), length (l), and acceleration due to gravity (g). Derive the expression for its time period using dimensional analysis.",
            problemTamil: "ஒரு தனி ஊசலின் அலைவு நேரம் (T) அதன் நிறை (m), நீளம் (l), மற்றும் ஈர்ப்பு முடுக்கம் (g) ஆகியவற்றைப் பொறுத்து இருக்கலாம். பரிமாணப் பகுப்பாய்வைப் பயன்படுத்தி அதன் அலைவு நேரத்திற்கான கோவையை வருவிக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Assume the relationship T ∝ mᵃlᵇgᶜ, where 'a', 'b', and 'c' are the powers we need to find. T = k mᵃlᵇgᶜ, where k is a dimensionless constant.",
                    explanationTamil: "T ∝ mᵃlᵇgᶜ என உறவைக் கருதுக, இங்கு 'a', 'b', மற்றும் 'c' நாம் கண்டுபிடிக்க வேண்டிய அடுக்குகளாகும். T = k mᵃlᵇgᶜ, இங்கு k ஒரு பரிமாணமற்ற மாறிலி."
                },
                {
                    step: 2,
                    explanation: "Write the dimensional formulas for all quantities. [T] = T¹, [m] = M¹, [l] = L¹, [g] = LT⁻².",
                    explanationTamil: "அனைத்து அளவுகளுக்கும் பரிமாண வாய்ப்பாடுகளை எழுதவும். [T] = T¹, [m] = M¹, [l] = L¹, [g] = LT⁻²."
                },
                {
                    step: 3,
                    explanation: "Substitute the dimensions into the assumed relation. [T] = [M]ᵃ[L]ᵇ[LT⁻²]ᶜ = MᵃLᵇ⁺ᶜT⁻²ᶜ.",
                    explanationTamil: "கருதப்பட்ட உறவில் பரிமாணங்களைப் பிரதியிடவும். [T] = [M]ᵃ[L]ᵇ[LT⁻²]ᶜ = MᵃLᵇ⁺ᶜT⁻²ᶜ."
                },
                {
                    step: 4,
                    explanation: "Apply the principle of homogeneity by equating the powers of M, L, and T on both sides. LHS: M⁰L⁰T¹.",
                    explanationTamil: "இருபுறமும் M, L, மற்றும் T இன் அடுக்குகளை சமப்படுத்துவதன் மூலம் ஒருபடித்தான நெறிமுறையைப் பயன்படுத்தவும். LHS: M⁰L⁰T¹."
                },
                {
                    step: 5,
                    explanation: "Equating powers: For M: a=0. For T: -2c=1 => c=-1/2. For L: b+c=0 => b = -c = 1/2.",
                    explanationTamil: "அடுக்குகளை சமப்படுத்துதல்: M-க்கு: a=0. T-க்கு: -2c=1 => c=-1/2. L-க்கு: b+c=0 => b = -c = 1/2."
                },
                {
                    step: 6,
                    explanation: "Substitute the values of a, b, and c back into the relation. T = k m⁰l¹/²g⁻¹/². Therefore, T = k√(l/g).",
                    explanationTamil: "a, b, மற்றும் c இன் மதிப்புகளை உறவில் மீண்டும் பிரதியிடவும். T = k m⁰l¹/²g⁻¹/². எனவே, T = k√(l/g)."
                }
            ],
            neetHack: "Dimensional analysis cannot determine the value of the dimensionless constant 'k'. For a simple pendulum, experiments show k = 2π.",
            neetHackTamil: "பரிமாணப் பகுப்பாய்வு மூலம் பரிமாணமற்ற மாறிலி 'k' இன் மதிப்பைக் கண்டறிய முடியாது. ஒரு தனி ஊசலுக்கு, சோதனைகள் k = 2π என்பதைக் காட்டுகின்றன."
        },
        {
            title: "NEET Level: Error Propagation with Powers",
            titleTamil: "நீட் நிலை: அடுக்குகளுடன் பிழை பரவல்",
            difficulty: 'Medium',
            problem: "A physical quantity P is given by P = a³b²/(√c d). The percentage errors in a, b, c, d are 1%, 3%, 4%, 2% respectively. Find the percentage error in P.",
            problemTamil: "ஒரு பௌதிக அளவு P = a³b²/(√c d) என கொடுக்கப்பட்டுள்ளது. a, b, c, d ஆகியவற்றில் சதவீதப் பிழைகள் முறையே 1%, 3%, 4%, 2% ஆகும். P இல் சதவீதப் பிழையைக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Use the general rule for error propagation: If Z = AⁿBᵐ/Cᵖ, then ΔZ/Z = n(ΔA/A) + m(ΔB/B) + p(ΔC/C). All errors are added.",
                    explanationTamil: "பிழைப் பரவலுக்கான பொது விதியைப் பயன்படுத்தவும்: Z = AⁿBᵐ/Cᵖ எனில், ΔZ/Z = n(ΔA/A) + m(ΔB/B) + p(ΔC/C). அனைத்துப் பிழைகளும் கூட்டப்படுகின்றன."
                },
                {
                    step: 2,
                    explanation: "Apply this rule to the given quantity P = a³b²c⁻¹/²d⁻¹.",
                    explanationTamil: "கொடுக்கப்பட்ட அளவு P = a³b²c⁻¹/²d⁻¹ க்கு இந்த விதியைப் பயன்படுத்தவும்.",
                    calculation: "%Error(P) = 3 * %Error(a) + 2 * %Error(b) + (1/2) * %Error(c) + 1 * %Error(d)"
                },
                {
                    step: 3,
                    explanation: "Substitute the given percentage errors.",
                    explanationTamil: "கொடுக்கப்பட்ட சதவீதப் பிழைகளைப் பிரதியிடவும்.",
                    calculation: "%Error(P) = 3(1%) + 2(3%) + (1/2)(4%) + 1(2%) = 3% + 6% + 2% + 2% = 13%"
                }
            ]
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '[Force] = [MLT^{-2}]',
                description: 'Dimensional formula for Force.',
                descriptionTamil: 'விசையின் பரிமாண வாய்ப்பாடு'
            },
             {
                formula: '[Energy] = [ML^2T^{-2}]',
                description: 'Dimensional formula for Energy/Work/Torque.',
                descriptionTamil: 'ஆற்றல்/வேலை/திருப்புவிசையின் பரிமாண வாய்ப்பாடு'
            },
            {
                formula: '\\frac{\\Delta Z}{Z} = n\\frac{\\Delta A}{A} + m\\frac{\\Delta B}{B}',
                description: 'General formula for error propagation for Z = AⁿBᵐ.',
                descriptionTamil: 'Z = AⁿBᵐ க்கான பிழை பரவல் பொது சூத்திரம்'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Every valid physical equation must be dimensionally homogeneous.",
        "Dimensional analysis is a powerful tool for checking formulas and deriving relations, but it cannot determine dimensionless constants.",
        "The number of significant figures reflects the precision of a measurement.",
        "When combining measurements, percentage errors always add up to give the maximum possible error in the result."
    ],
    mnemonics: [
        { text: "For sig figs in Addition/Subtraction, think 'Decimal Places'. For Multiplication/Division, think 'Total Figures'.", tamil: "முக்கிய எண்ணுருக்கள்: கூட்டல்/கழித்தலுக்கு 'தசம இடங்கள்'. பெருக்கல்/வகுத்தலுக்கு 'மொத்த இலக்கங்கள்' என நினைவில் கொள்க." }
    ],
    neetTips: [
        { text: "Questions asking to find which quantity cannot be the result of a formula can often be solved quickly using dimensional analysis.", tamil: "ஒரு சூத்திரத்தின் விளைவாக இருக்க முடியாத அளவைக் கேட்கும் கேள்விகளைப் பரிமாணப் பகுப்பாய்வு மூலம் விரைவாகத் தீர்க்கலாம்." },
        { text: "In error analysis, always add the percentage errors for multiplication, division, and powers, regardless of the operation.", tamil: "பிழைப் பகுப்பாய்வில், பெருக்கல், வகுத்தல் மற்றும் அடுக்குகளுக்கு சதவீதப் பிழைகளை எப்போதும் கூட்டவும்." }
    ],
    mcqs: [
        {
            question: "The dimensions of Planck's constant (h) are the same as that of:",
            options: ["A. Linear Momentum", "B. Angular Momentum", "C. Energy", "D. Power"],
            answer: "B. Angular Momentum",
            explanation: "From E = hν, the dimensions of h are [E]/[ν] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. The dimensions of angular momentum (L = mvr) are [M][L T⁻¹][L] = [ML²T⁻¹]. They are the same.",
            neetFrequency: 5
        },
        {
            question: "The number of significant figures in 0.06900 is:",
            options: ["A. 5", "B. 4", "C. 2", "D. 3"],
            answer: "B. 4",
            explanation: "Leading zeros are not significant. Trailing zeros after a decimal point are significant. So, 6, 9, 0, 0 are significant.",
            neetFrequency: 3
        },
        {
            question: "The density of a cube is measured by measuring its mass and length. If the maximum errors in mass and length are 3% and 2% respectively, the maximum error in density is:",
            options: ["A. 5%", "B. 1%", "C. 7%", "D. 9%"],
            answer: "D. 9%",
            explanation: "Density ρ = M/L³. %error in ρ = %error in M + 3 * (%error in L) = 3% + 3(2%) = 9%.",
            neetFrequency: 5
        },
        {
            question: "Which pair of quantities have the same dimensions?",
            options: ["A. Impulse and Surface Tension", "B. Angular momentum and Work", "C. Work and Torque", "D. Young's modulus and Energy"],
            answer: "C. Work and Torque",
            explanation: "Both Work (Fs) and Torque (rF) have dimensions of energy, [ML²T⁻²].",
            neetFrequency: 3
        },
        {
            question: "The dimensional formula for pressure is:",
            options: ["A. [MLT⁻²]", "B. [ML⁻¹T⁻²]", "C. [ML²T⁻²]", "D. [ML⁻²T⁻²]"],
            answer: "B. [ML⁻¹T⁻²]",
            explanation: "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²].",
            neetFrequency: 2
        },
        {
            question: "The dimensions of gravitational constant G are:",
            options: ["A. [ML³T⁻²]", "B. [M⁻¹L³T⁻²]", "C. [M⁻¹L²T⁻³]", "D. [ML²T⁻³]"],
            answer: "B. [M⁻¹L³T⁻²]",
            explanation: "From F = Gm₁m₂/r², G = Fr²/(m₁m₂). Dimensions are [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²].",
            neetFrequency: 4
        },
        {
            question: "A physical quantity P is related to four observables a, b, c, and d as follows: P = a³b²/ (√c d). The percentage errors of measurement in a, b, c, and d are 1%, 3%, 4%, and 2% respectively. What is the percentage error in the quantity P?",
            options: ["A. 13%", "B. 12%", "C. 14%", "D. 15%"],
            answer: "A. 13%",
            explanation: "% error in P = 3(% error in a) + 2(% error in b) + (1/2)(% error in c) + 1(% error in d) = 3(1%) + 2(3%) + (1/2)(4%) + 1(2%) = 3% + 6% + 2% + 2% = 13%.",
            neetFrequency: 5
        },
        {
            question: "If the unit of force is 100 N, unit of length is 10 m and unit of time is 100 s, what is the unit of mass in this system?",
            options: ["A. 1000 kg", "B. 10 kg", "C. 100 kg", "D. 100000 kg"],
            answer: "D. 100000 kg",
            explanation: "F = ma = m(L/T²). So, m = FT²/L. New mass unit = (100 N)(100 s)² / (10 m) = 10 * 10000 = 100000 kg.",
            neetFrequency: 3
        },
        {
            question: "The dimensional formula for Impulse is same as the dimensional formula for",
            options: ["A. Force", "B. Power", "C. Energy", "D. Linear Momentum"],
            answer: "D. Linear Momentum",
            explanation: "Impulse = Force × time = [MLT⁻²][T] = [MLT⁻¹]. Momentum = mass × velocity = [M][LT⁻¹] = [MLT⁻¹].",
            neetFrequency: 2
        },
        {
            question: "The number of significant figures in the number 2.70 x 10³ is:",
            options: ["A. 2", "B. 3", "C. 4", "D. 1"],
            answer: "B. 3",
            explanation: "In scientific notation, all digits in the coefficient are significant. So, 2, 7, and 0 are significant.",
            neetFrequency: 2
        },
        {
            question: "Which of the following is not a unit of time?",
            options: ["A. Second", "B. Parsec", "C. Year", "D. Hour"],
            answer: "B. Parsec",
            explanation: "Parsec is a unit of distance used in astronomy (3.26 light-years). Second, year, and hour are units of time.",
            neetFrequency: 1
        },
        {
            question: "The value of g is 9.8 m/s². Its value in km/h² is:",
            options: ["A. 127008", "B. 129600", "C. 12550", "D. 12960"],
            answer: "A. 127008",
            explanation: "g = 9.8 m/s² = 9.8 * (1/1000 km) / (1/3600 h)² = 9.8 * (1/1000) * (3600*3600) km/h² = 9.8 * 12960 = 127008 km/h².",
            neetFrequency: 2
        },
        {
            question: "The length and breadth of a rectangle are (5.7 ± 0.1) cm and (3.4 ± 0.2) cm. The area of the rectangle with error limits is:",
            options: ["A. (19.4 ± 1.5) cm²", "B. (19.4 ± 1.1) cm²", "C. (19.4 ± 2.0) cm²", "D. (19.4 ± 1.8) cm²"],
            answer: "A. (19.4 ± 1.5) cm²",
            explanation: "Area A = l*b = 5.7 * 3.4 = 19.38 ≈ 19.4 cm². Relative error ΔA/A = Δl/l + Δb/b = 0.1/5.7 + 0.2/3.4 ≈ 0.0175 + 0.0588 ≈ 0.0763. Absolute error ΔA = 0.0763 * 19.38 ≈ 1.48. Rounding error to one significant figure gives 1.5. So, Area = (19.4 ± 1.5) cm².",
            neetFrequency: 4
        },
        {
            question: "The dimensional formula for coefficient of viscosity is:",
            options: ["A. [MLT⁻¹]", "B. [ML⁻¹T⁻¹]", "C. [ML⁻¹T⁻²]", "D. [MLT⁻²]"],
            answer: "B. [ML⁻¹T⁻¹]",
            explanation: "From Stokes' law F = 6πηrv, η = F/(6πrv). Dimensions are [MLT⁻²]/([L][LT⁻¹]) = [MLT⁻²]/[L²T⁻¹] = [ML⁻¹T⁻¹].",
            neetFrequency: 3
        },
        {
            question: "Which of the following measurements is the most precise?",
            options: ["A. 5.00 mm", "B. 5.00 cm", "C. 5.00 m", "D. 5.00 km"],
            answer: "A. 5.00 mm",
            explanation: "Precision is related to the least count of the measuring instrument. 5.00 mm has the smallest unit and is measured up to 0.01 mm, making it the most precise.",
            neetFrequency: 2
        },
        {
            question: "The sum of the numbers 436.32, 227.2, and 0.301 in appropriate significant figures is:",
            options: ["A. 663.821", "B. 663.8", "C. 664", "D. 663.82"],
            answer: "B. 663.8",
            explanation: "In addition, the result should be rounded off to the same number of decimal places as the number with the least decimal places. Here, 227.2 has only one decimal place. Sum = 663.821, which rounds to 663.8.",
            neetFrequency: 4
        },
        {
            question: "The dimensions of (μ₀ε₀)^(-1/2) are:",
            options: ["A. [L⁻¹T]", "B. [LT⁻¹]", "C. [L¹/²T⁻¹/²]", "D. [L⁻¹/²T¹/²]"],
            answer: "B. [LT⁻¹]",
            explanation: "The speed of light in vacuum is c = 1/√(μ₀ε₀). Therefore, (μ₀ε₀)^(-1/2) has the dimensions of speed, which is [LT⁻¹].",
            neetFrequency: 5
        },
        {
            question: "Which of the following is a dimensionless quantity?",
            options: ["A. Strain", "B. Stress", "C. Specific gravity", "D. Both A and C"],
            answer: "D. Both A and C",
            explanation: "Strain is the ratio of change in dimension to the original dimension (e.g., ΔL/L), so it's dimensionless. Specific gravity is the ratio of the density of a substance to the density of water, so it's also dimensionless.",
            neetFrequency: 3
        },
        {
            question: "The time dependence of a physical quantity P is given by P = P₀ exp(-αt²), where α is a constant and t is time. The constant α is:",
            options: ["A. Dimensionless", "B. Has dimensions of T⁻²", "C. Has dimensions of T²", "D. Has dimensions of P"],
            answer: "B. Has dimensions of T⁻²",
            explanation: "The argument of an exponential function must be dimensionless. Therefore, the dimensions of αt² must be [M⁰L⁰T⁰]. So, [α][T²] = 1, which means [α] = [T⁻²].",
            neetFrequency: 4
        },
        {
            question: "The unit of torque is:",
            options: ["A. N m⁻¹", "B. N m", "C. N m⁻²", "D. N s"],
            answer: "B. N m",
            explanation: "Torque = Force × perpendicular distance. Its unit is Newton-meter (N m).",
            neetFrequency: 1
        },
        {
            question: "A vernier caliper has a least count of 0.01 cm. If the zero error is +0.03 cm, the correction to be made is:",
            options: ["A. +0.03 cm", "B. -0.03 cm", "C. +0.01 cm", "D. -0.01 cm"],
            answer: "B. -0.03 cm",
            explanation: "The correction is always the negative of the zero error. Correction = - (Zero Error) = -(+0.03 cm) = -0.03 cm.",
            neetFrequency: 3
        },
        {
            question: "What is the dimensional formula of angular momentum?",
            options: ["A. [ML²T⁻¹]", "B. [ML²T⁻²]", "C. [MLT⁻¹]", "D. [M²L²T⁻¹]"],
            answer: "A. [ML²T⁻¹]",
            explanation: "Angular momentum L = mvr. Dimensions are [M][LT⁻¹][L] = [ML²T⁻¹].",
            neetFrequency: 2
        },
        {
            question: "If Force (F), Velocity (V) and Time (T) are taken as fundamental units, the dimensions of mass are:",
            options: ["A. [FVT⁻¹]", "B. [FV⁻¹T]", "C. [FVT]", "D. [FV⁻¹T⁻¹]"],
            answer: "B. [FV⁻¹T]",
            explanation: "F = ma = m(v/t). So, m = Ft/v = [F T V⁻¹].",
            neetFrequency: 4
        },
        {
            question: "A screw gauge has a least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:",
            options: ["A. 0.25 mm", "B. 0.5 mm", "C. 1.0 mm", "D. 0.01 mm"],
            answer: "B. 0.5 mm",
            explanation: "Least Count = Pitch / Number of circular scale divisions. Pitch = Least Count × Number of divisions = 0.01 mm × 50 = 0.5 mm.",
            neetFrequency: 3
        },
        {
            question: "The resistance of a wire is given by R = ρl/A. If the percentage error in ρ, l, and A are 1%, 2%, and 3% respectively, then the percentage error in R is:",
            options: ["A. 6%", "B. 0%", "C. 5%", "D. 7%"],
            answer: "A. 6%",
            explanation: "% error in R = % error in ρ + % error in l + % error in A = 1% + 2% + 3% = 6%.",
            neetFrequency: 5
        }
    ],
    assertionReasons: [
        {
            assertion: "The equation y = a sin(ωt - kx) is dimensionally correct.",
            reason: "The argument of any trigonometric function must be dimensionless.",
            answer: "A",
            explanation: "The assertion is correct. The reason is also correct and explains why. [ωt] = [T⁻¹][T] = [M⁰L⁰T⁰] and [kx] = [L⁻¹][L] = [M⁰L⁰T⁰], so the argument is dimensionless, making the equation valid.",
            neetFrequency: 4
        },
        {
            assertion: "Adding two quantities with different dimensions is physically meaningless.",
            reason: "This violates the principle of homogeneity of dimensions.",
            answer: "A",
            explanation: "The assertion is true (you cannot add mass to length). The reason is true and provides the fundamental principle that is violated.",
            neetFrequency: 3
        },
        {
            assertion: "Parallax method cannot be used for measuring distances of stars more than 100 light years away.",
            reason: "The parallax angle becomes too small to be measured accurately.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. As the distance increases, the parallax angle decreases, eventually becoming too small to be measured with sufficient precision by ground-based telescopes.",
            neetFrequency: 2
        },
        {
            assertion: "The number of significant figures depends on the system of units used.",
            reason: "Changing the unit does not change the number of significant digits.",
            answer: "D",
            explanation: "Assertion is false. The number of significant figures is a property of the measurement, not the units. For example, 1.52 m = 152 cm = 1520 mm all have 3 significant figures. The reason is a true statement.",
            neetFrequency: 1
        },
        {
            assertion: "The error in the measurement of radius of a sphere is 0.3%. The error in the measurement of its volume is 0.9%.",
            reason: "The error in volume is three times the error in radius.",
            answer: "A",
            explanation: "Volume of a sphere V = (4/3)πR³. The relative error ΔV/V = 3(ΔR/R). Therefore, the percentage error in volume is 3 times the percentage error in radius. 3 * 0.3% = 0.9%. The reason correctly explains the assertion.",
            neetFrequency: 5
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Latent Heat", "(b) Gravitational Potential", "(c) Specific Heat", "(d) Stress"],
            column2: ["(p) [ML⁻¹T⁻²]", "(q) [L²T⁻²]", "(r) [L²T⁻²K⁻¹]"],
            answer: "a-q, b-q, c-r, d-p",
            explanation: "Matching physical quantities with their dimensional formulas. Latent Heat (Q/m) and Gravitational Potential (U/m) both have dimensions [L²T⁻²]. Specific heat (Q=mcΔT) has dimensions [L²T⁻²K⁻¹]. Stress (F/A) has dimensions [ML⁻¹T⁻²].",
            neetFrequency: 4
        },
        {
            column1: ["(a) Distance", "(b) Force", "(c) Energy", "(d) Pressure"],
            column2: ["(p) Scalar", "(q) Vector"],
            answer: "a-p, b-q, c-p, d-p",
            explanation: "Force is a vector. Distance, Energy, and Pressure are scalar quantities.",
            neetFrequency: 2
        },
        {
            column1: ["(a) Light year", "(b) Angstrom", "(c) Fermi", "(d) Parsec"],
            column2: ["(p) 10⁻¹⁰ m", "(q) 10⁻¹⁵ m", "(r) 9.46 x 10¹⁵ m", "(s) 3.26 light years"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching units of length with their corresponding values or definitions.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Vernier Calipers", "(b) Screw Gauge", "(c) Spherometer", "(d) Simple Pendulum"],
            column2: ["(p) Measurement of g", "(q) Radius of curvature", "(r) Diameter of a wire", "(s) Diameter of a beaker"],
            answer: "a-s, b-r, c-q, d-p",
            explanation: "Matching measuring instruments with their primary use cases.",
            neetFrequency: 2
        },
        {
            column1: ["(a) Work", "(b) Power", "(c) Frequency", "(d) Momentum"],
            column2: ["(p) Hertz", "(q) Watt", "(r) Joule", "(s) kg m/s"],
            answer: "a-r, b-q, c-p, d-s",
            explanation: "Matching physical quantities with their SI units.",
            neetFrequency: 1
        }
    ],
    studentTip: {
        english: "Dimensional analysis is your best friend for checking answers. If the dimensions don't match, your formula is definitely wrong. It's a quick and powerful sanity check during the exam.",
        tamil: "பரிமாணப் பகுப்பாய்வு உங்கள் பதில்களைச் சரிபார்க்க சிறந்த நண்பன். பரிமாணங்கள் பொருந்தவில்லை என்றால், உங்கள் சூத்திரம் நிச்சயமாகத் தவறு. இது தேர்வின் போது ஒரு விரைவான மற்றும் சக்திவாய்ந்த சரிபார்ப்பு முறையாகும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why dimensionless quantities like 'strain' or 'refractive index' are so important in physics. Can you name three more dimensionless quantities?",
        tamil: "'திரிபு' அல்லது 'ஒளிவிலகல் எண்' போன்ற பரிமாணமற்ற அளவுகள் இயற்பியலில் ஏன் மிகவும் முக்கியமானவை என்று உங்கள் நண்பருடன் விவாதிக்கவும். மேலும் மூன்று பரிமாணமற்ற அளவுகளை உங்களால் கூற முடியுமா?"
    },
    nextChapter: {
        title: "Motion in a Straight Line",
        titleTamil: "நேர்கோட்டு இயக்கம்"
    },
    validationReport: []
};
