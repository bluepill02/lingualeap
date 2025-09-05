
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
            english: `### 1. Units and Systems of Units`,
            tamil: `### 1. அலகுகளும் அலகு முறைகளும்`
        },
        {
            english: `*   **Physical Quantity:** Any quantity that can be measured.\n*   **Fundamental Quantities:** Independent quantities (e.g., Length, Mass, Time).\n*   **Derived Quantities:** Derived from fundamental ones (e.g., Speed = Length/Time).\n*   **SI System:** The standard international system with 7 fundamental units (meter, kilogram, second, ampere, kelvin, mole, candela).`,
            tamil: `*   **பௌதிக அளவு:** அளவிடக்கூடிய எந்தவொரு அளவும்.\n*   **அடிப்படை அளவுகள்:** மற்றவற்றைச் சாராத அளவுகள் (எ.கா., நீளம், நிறை, காலம்).\n*   **வழி அளவுகள்:** அடிப்படை அளவுகளிலிருந்து பெறப்பட்டவை (எ.கா., வேகம் = நீளம்/காலம்).\n*   **SI அலகு முறை:** 7 அடிப்படை அலகுகளைக் கொண்ட பன்னாட்டு அலகு முறை (மீட்டர், கிலோகிராம், வினாடி, ஆம்பியர், கெல்வின், மோல், கேண்டெலா).`
        },
        {
            english: `### 2. Dimensional Analysis`,
            tamil: `### 2. பரிமாணப் பகுப்பாய்வு`
        },
        {
            english: `Dimensions are the powers to which fundamental units are raised. E.g., Force = $[MLT^{-2}]$.\n#### Applications:\n1.  **Principle of Homogeneity:** All terms in an equation must have the same dimensions.\n2.  **Checking Correctness:** Verify if LHS dimensions = RHS dimensions.\n3.  **Deriving Relationships:** Find how one quantity depends on others.\n4.  **Converting Units:** Using the principle $n_1 u_1 = n_2 u_2$.`,
            tamil: `பரிமாணங்கள் என்பவை அடிப்படை அலகுகளின் அடுக்குகளாகும். எ.கா., விசை = $[MLT^{-2}]$.\n#### பயன்பாடுகள்:\n1.  **பரிமாணங்களின் ஒருபடித்தான நெறிமுறை:** ஒரு சமன்பாட்டில் உள்ள அனைத்து உறுப்புகளும் ஒரே பரிமாணங்களைக் கொண்டிருக்க வேண்டும்.\n2.  **சமன்பாட்டின் சரிய்த்தன்மையை சோதித்தல்:** LHS பரிமாணங்கள் = RHS பரிமாணங்கள் என சரிபார்க்கவும்.\n3.  **தொடர்புகளை வருவித்தல்:** ஒரு அளவு மற்றவற்றை எவ்வாறு சார்ந்துள்ளது என்பதைக் கண்டறியவும்.\n4.  **அலகுகளை மாற்றுதல்:** $n_1 u_1 = n_2 u_2$ என்ற கொள்கையைப் பயன்படுத்துதல்.`
        },
        {
            english: `### 3. Errors and Significant Figures`,
            tamil: `### 3. பிழைகள் மற்றும் முக்கிய எண்ணுருக்கள்`
        },
        {
            english: `*   **Significant Figures:** Reliable digits + the first uncertain digit in a measurement.\n*   **Error Propagation:** If $Z = A^n B^m$, the relative error is $\\frac{\\Delta Z}{Z} = n\\frac{\\Delta A}{A} + m\\frac{\\Delta B}{B}$. Errors are always added.`,
            tamil: `*   **முக்கிய எண்ணுருக்கள்:** ஒரு அளவீட்டில் உள்ள நம்பகமான இலக்கங்கள் மற்றும் முதல் நிச்சயமற்ற இலக்கம்.\n*   **பிழைகளின் பரவல்:** $Z = A^n B^m$ எனில், ஒப்புப்பிழை $\\frac{\\Delta Z}{Z} = n\\frac{\\Delta A}{A} + m\\frac{\\Delta B}{B}$ ஆகும். பிழைகள் எப்போதும் கூட்டப்படும்.`
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
                    explanation: "Write the dimensional formula for each term.",
                    explanationTamil: "ஒவ்வொரு உறுப்பின் பரிமாண வாய்ப்பாட்டையும் எழுதவும்.",
                    calculation: "[v²] = (LT⁻¹)² = L²T⁻². [u²] = (LT⁻¹)² = L²T⁻². [2as] = [a][s] = (LT⁻²)(L) = L²T⁻²."
                },
                {
                    step: 2,
                    explanation: "Compare the dimensions. Since all terms have the dimension L²T⁻², the equation is dimensionally correct.",
                    explanationTamil: "பரிமாணங்களை ஒப்பிடவும். அனைத்து உறுப்புகளும் L²T⁻² என்ற பரிமாணத்தைக் கொண்டிருப்பதால், சமன்பாடு பரிமாண முறைப்படி சரியானது."
                }
            ],
            neetHack: "For equations involving addition, just check if the dimensions of any two terms are equal. This saves time.",
            neetHackTamil: "கூட்டல் உள்ள சமன்பாடுகளுக்கு, ஏதேனும் இரண்டு உறுப்புகளின் பரிமாணங்கள் சமமாக உள்ளதா எனச் சரிபார்த்தால் போதும். இது நேரத்தை மிச்சப்படுத்தும்."
        },
        {
            title: "JEE Level: Error Propagation",
            titleTamil: "ஜே.இ.இ நிலை: பிழை பரவல்",
            difficulty: 'Medium',
            problem: "The resistance R = V/I. The percentage errors in V and I are 2% and 3% respectively. What is the maximum percentage error in R?",
            problemTamil: "மின்தடை R = V/I. V மற்றும் I இன் அளவீட்டில் சதவீதப் பிழைகள் முறையே 2% மற்றும் 3% ஆகும். R இன் அளவீட்டில் பெரும சதவீதப் பிழை என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "For Z = A/B, the fractional errors add up: ΔZ/Z = ΔA/A + ΔB/B.",
                    explanationTamil: "Z = A/B எனில், பின்னப் பிழைகள் கூட்டப்படும்: ΔZ/Z = ΔA/A + ΔB/B."
                },
                {
                    step: 2,
                    explanation: "The percentage error in R is the sum of the percentage errors in V and I.",
                    explanationTamil: "R இல் உள்ள சதவீதப் பிழை V மற்றும் I இல் உள்ள சதவீதப் பிழைகளின் கூடுதலாகும்.",
                    calculation: "% Error in R = (% Error in V) + (% Error in I) = 2% + 3% = 5%"
                }
            ],
            neetHack: "When dealing with powers (e.g., Z = A²B³), the percentage error is simply (2 * %error in A) + (3 * %error in B).",
            neetHackTamil: "அடுக்குகள் வரும்போது (எ.கா., Z = A²B³), சதவீதப் பிழை என்பது (2 * A-யின் சதவீதப் பிழை) + (3 * B-யின் சதவீதப் பிழை) ஆகும்."
        }
    ],
    keyTakeaways: [
        "Every valid physical equation must be dimensionally homogeneous.",
        "Dimensional analysis is a powerful tool for checking formulas and deriving relations.",
        "The number of significant figures reflects the precision of a measurement.",
        "When combining measurements, errors always add up."
    ],
    mnemonics: [
        { text: "For sig figs: Addition/Subtraction -> Decimal Places. Multiplication/Division -> Total Figures.", tamil: "முக்கிய எண்ணுருக்கள்: கூட்டல்/கழித்தல் -> தசம இடங்கள். பெருக்கல்/வகுத்தல் -> மொத்த இலக்கங்கள்." }
    ],
    neetTips: [
        { text: "Dimensional analysis can quickly eliminate incorrect options in MCQ questions.", tamil: "பரிமாணப் பகுப்பாய்வு மூலம் MCQ கேள்விகளில் தவறான விருப்பங்களை விரைவாக நீக்கலாம்." },
        { text: "In error analysis, always add the percentage errors for multiplication, division, and powers.", tamil: "பிழைப் பகுப்பாய்வில், பெருக்கல், வகுத்தல் மற்றும் அடுக்குகளுக்கு சதவீதப் பிழைகளை எப்போதும் கூட்டவும்." }
    ],
    mcqs: [
        { question: "The dimensions of Planck's constant are the same as that of:", options: ["A. Linear Momentum", "B. Angular Momentum", "C. Energy", "D. Power"], answer: "B. Angular Momentum", explanation: "From E = hν, [h] = [E]/[ν] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. Angular momentum L = mvr has dimensions [M][L/T][L] = [ML²T⁻¹].", neetFrequency: 5 },
        { question: "The number of significant figures in 0.06900 is:", options: ["A. 5", "B. 4", "C. 2", "D. 3"], answer: "B. 4", explanation: "Leading zeros are not significant. Trailing zeros after a decimal point are significant. So, 6, 9, 0, 0 are significant.", neetFrequency: 3 },
        { question: "The density of a cube is measured by measuring its mass and length. If the maximum errors in mass and length are 3% and 2% respectively, the maximum error in density is:", options: ["A. 5%", "B. 1%", "C. 7%", "D. 9%"], answer: "D. 9%", explanation: "Density ρ = M/L³. %error in ρ = %error in M + 3 * (%error in L) = 3% + 3(2%) = 9%.", neetFrequency: 5 },
        { question: "Which pair of quantities have the same dimensions?", options: ["A. Impulse and Surface Tension", "B. Angular momentum and Work", "C. Work and Torque", "D. Young's modulus and Energy"], answer: "C. Work and Torque", explanation: "Both Work (Fs) and Torque (rF) have dimensions of energy, [ML²T⁻²].", neetFrequency: 3 },
        { question: "The dimensional formula for pressure is:", options: ["A. [MLT⁻²]", "B. [ML⁻¹T⁻²]", "C. [ML²T⁻²]", "D. [ML⁻²T⁻²]"], answer: "B. [ML⁻¹T⁻²]", explanation: "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²].", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "The equation y = a sin(ωt - kx) is dimensionally correct.", reason: "The argument of any trigonometric function must be dimensionless.", answer: "A", explanation: "The assertion is correct. The reason is also correct and explains why. [ωt] = [T⁻¹][T] = [M⁰L⁰T⁰] and [kx] = [L⁻¹][L] = [M⁰L⁰T⁰], so the argument is dimensionless.", neetFrequency: 4 },
        { assertion: "Adding two quantities with different dimensions is physically meaningless.", reason: "This violates the principle of homogeneity of dimensions.", answer: "A", explanation: "The assertion is true (you cannot add mass to length). The reason is true and provides the fundamental principle that is violated.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Latent Heat", "(b) Gravitational Potential", "(c) Specific Heat", "(d) Stress"], column2: ["(p) [ML⁻¹T⁻²]", "(q) [L²T⁻²]", "(r) [L²T⁻²K⁻¹]"], answer: "a-q, b-q, c-r, d-p", explanation: "Matching physical quantities with their dimensional formulas.", neetFrequency: 4 }
    ]
};
