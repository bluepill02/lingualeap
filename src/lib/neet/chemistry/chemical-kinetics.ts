
import type { NeetModule } from '@/lib/types';

export const chemicalKineticsModule: NeetModule = {
    id: 'neet-chemistry-chemical-kinetics',
    title: 'Chemistry - Chemical Kinetics (வேதி வினைவேகவியல்)',
    chapter: 'Chemical Kinetics',
    subject: 'Chemistry',
    learningObjectives: [
        "Define the rate of a chemical reaction and differentiate between average and instantaneous rates.",
        "Understand the factors affecting the rate of a reaction (concentration, temperature, catalyst).",
        "Define rate law, rate constant, and order of a reaction.",
        "Derive and apply integrated rate equations for zero and first-order reactions.",
        "Understand the concept of half-life of a reaction.",
        "Explain the effect of temperature on reaction rate and apply the Arrhenius equation.",
        "Understand the concept of activation energy and the role of catalysts."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions and balancing equations.",
        "Logarithms and basic calculus (for integrated rate laws)."
    ],
    conceptOverview: "While thermodynamics tells us if a reaction is possible, chemical kinetics tells us how fast it will happen. This chapter explores the rates of chemical reactions and the factors that influence them. We will learn how to express reaction rates mathematically through rate laws and determine the order of a reaction. The integrated rate laws for zero and first-order reactions allow us to predict the concentration of reactants at any given time. Finally, we will delve into the Arrhenius equation, which quantitatively describes how temperature dramatically affects reaction speed by influencing the energy of molecular collisions.",
    tamilConnection: "பால் தயிராவது, இரும்பு துருப்பிடிப்பது - இந்த வினைகள் மெதுவாக நடக்கின்றன. பட்டாசு வெடிப்பது போன்ற வினைகள் மிக வேகமாக நடக்கின்றன. ஒரு வேதிவினையின் வேகத்தை பாதிக்கும் காரணிகளான வெப்பநிலை, செறிவு, மற்றும் வினைவேகமாற்றி ஆகியவற்றைப் பற்றி இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "Cooking is a great example of chemical kinetics. We increase the temperature to make reactions (cooking) go faster. A pressure cooker increases both pressure and temperature, speeding up the cooking of dhal or meat significantly. This demonstrates the principles of how temperature and pressure affect reaction rates.",
    syllabusMapping: [
        {
            topic: "Chemical Kinetics",
            tnBoardChapter: "12th Std Chemistry - Vol 1, Chapter 7: Chemical Kinetics",
            ncertReference: "Class 12 Chemistry - Part 1, Chapter 4: Chemical Kinetics",
            notes: "Very important chapter. Problems based on integrated rate laws (especially for first-order reactions), half-life, and the Arrhenius equation are frequently asked in NEET.",
            mappingDescription: '12th Std Chemistry - Vol 1, Chapter 7 maps to NEET Chemistry Unit 14'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Rate of a Chemical Reaction',
                tamil: '1. வேதிவினையின் வேகம்'
            },
            content: [
                {
                    english: 'The rate of a reaction is the change in concentration of any one of the reactants or products per unit time.',
                    tamil: 'ஒரு வினையின் வேகம் என்பது ஓரலகு நேரத்தில் வினைபடு பொருட்கள் அல்லது வினைவிளை பொருட்களின் செறிவில் ஏற்படும் மாற்றம் ஆகும்.'
                },
                {
                    english: `For a reaction $R \\rightarrow P$:
*   **Average Rate:** $\\text{Rate}_{avg} = -\\frac{\\Delta[R]}{\\Delta t} = +\\frac{\\Delta[P]}{\\Delta t}$
*   **Instantaneous Rate:** $\\text{Rate}_{inst} = -\\frac{d[R]}{dt} = +\\frac{d[P]}{dt}$
*   The negative sign indicates the decrease in the concentration of the reactant.`,
                    tamil: `$R \\rightarrow P$ என்ற வினைக்கு:
*   **சராசரி வேகம்:** $\\text{Rate}_{avg} = -\\frac{\\Delta[R]}{\\Delta t} = +\\frac{\\Delta[P]}{\\Delta t}$
*   **கணநேர வேகம்:** $\\text{Rate}_{inst} = -\\frac{d[R]}{dt} = +\\frac{d[P]}{dt}$
*   எதிர்மறை குறி வினைபடு பொருளின் செறிவில் ஏற்படும் குறைவைக் குறிக்கிறது.`
                }
            ]
        },
        {
            heading: {
                english: '2. Rate Law and Order of Reaction',
                tamil: '2. வினைவேக விதி மற்றும் வினை வகை'
            },
            content: [
                {
                    english: `**Rate Law:** An expression which relates the rate of a reaction with the concentration of the reactants. For a general reaction $aA + bB \\rightarrow Products$:
$$ \\text{Rate} = k[A]^x[B]^y $$
*   **k:** Rate constant or specific reaction rate.
*   **x and y:** Orders of the reaction with respect to A and B. They are determined experimentally and may or may not be equal to the stoichiometric coefficients a and b.`,
                    tamil: `**வினைவேக விதி:** ஒரு வினையின் வேகத்தை வினைபடு பொருட்களின் செறிவுகளுடன் தொடர்புபடுத்தும் ஒரு கோவை. ஒரு பொதுவான வினை $aA + bB \\rightarrow Products$-க்கு:
*   **k:** வினைவேக மாறிலி அல்லது தன்வினை வேகம்.
*   **x மற்றும் y:** A மற்றும் B ஐப் பொறுத்து வினையின் வகைகள். அவை சோதனை மூலம் தீர்மானிக்கப்படுகின்றன மற்றும் a, b க்கு சமமாக இருக்கலாம் அல்லது இல்லாமலும் இருக்கலாம்.`
                },
                {
                    english: `**Order of Reaction:** The sum of the powers of the concentration terms in the rate law expression.
$$ \\text{Overall Order} = x + y $$
*   **Zero-Order Reaction:** Rate is independent of the concentration of reactants.
*   **First-Order Reaction:** Rate is directly proportional to the concentration of one reactant.`,
                    tamil: `**வினை வகை:** வினைவேக விதி கோவையில் உள்ள செறிவு உறுப்புகளின் அடுக்குகளின் கூடுதல்.
*   **பூஜ்ஜிய வகை வினை:** வேகம் வினைபடு பொருட்களின் செறிவைச் சார்ந்து இல்லை.
*   **முதல் வகை வினை:** வேகம் ஒரு வினைபடு பொருளின் செறிவிற்கு நேர்த்தகவில் இருக்கும்.`
                }
            ]
        },
        {
            heading: {
                english: '3. Integrated Rate Equations and Half-Life',
                tamil: '3. தொகையிடப்பட்ட வினைவேக சமன்பாடுகள் மற்றும் அரை ஆயுள் காலம்'
            },
            content: [
                {
                    english: `**Zero-Order Reaction:**
*   Integrated Rate Law: $[A]_t = -kt + [A]_0$
*   Half-Life ($t_{1/2}$): $t_{1/2} = \\frac{[A]_0}{2k}$. Half-life is directly proportional to the initial concentration.`,
                    tamil: `**பூஜ்ஜிய வகை வினை:**
*   தொகையிடப்பட்ட வினைவேக விதி: $[A]_t = -kt + [A]_0$
*   அரை ஆயுள் காலம் ($t_{1/2}$): $t_{1/2} = \\frac{[A]_0}{2k}$. அரை ஆயுள் காலம் ஆரம்ப செறிவிற்கு நேர்த்தகவில் இருக்கும்.`
                },
                {
                    english: `**First-Order Reaction:**
*   Integrated Rate Law: $\\ln[A]_t = -kt + \\ln[A]_0$ or $k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]_t}$
*   Half-Life ($t_{1/2}$): $t_{1/2} = \\frac{0.693}{k}$. Half-life is independent of the initial concentration.`,
                    tamil: `**முதல் வகை வினை:**
*   தொகையிடப்பட்ட வினைவேக விதி: $\\ln[A]_t = -kt + \\ln[A]_0$ அல்லது $k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]_t}$
*   அரை ஆயுள் காலம் ($t_{1/2}$): $t_{1/2} = \\frac{0.693}{k}$. அரை ஆயுள் காலம் ஆரம்ப செறிவைச் சார்ந்து இல்லை.`
                }
            ]
        },
        {
            heading: {
                english: '4. Temperature Dependence and Arrhenius Equation',
                tamil: '4. வெப்பநிலை சார்பு மற்றும் அர்ஹீனியஸ் சமன்பாடு'
            },
            content: [
                {
                    english: `The rate of a chemical reaction generally increases with an increase in temperature. A common rule of thumb is that for many reactions, the rate doubles for every 10°C rise in temperature.
*   **Activation Energy ($E_a$) (கிளர்வுறு ஆற்றல்):** The minimum extra energy that reactant molecules must possess to form the activated complex and convert into products.
*   **Arrhenius Equation:** Relates the rate constant (k) to temperature (T) and activation energy ($E_a$).
$$ k = A e^{-E_a/RT} $$
*   **A:** Arrhenius factor or frequency factor.
*   Taking the natural logarithm: $\\ln k = \\ln A - \\frac{E_a}{RT}$.
*   Comparing rate constants at two different temperatures:
$$ \\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303R} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right) $$`,
                    tamil: `ஒரு வேதிவினையின் வேகம் பொதுவாக வெப்பநிலை அதிகரிப்புடன் அதிகரிக்கிறது. பல வினைகளுக்கு, ஒவ்வொரு 10°C வெப்பநிலை உயர்விற்கும் வேகம் இரட்டிப்பாகிறது என்பது ஒரு பொதுவான விதி.
*   **கிளர்வுறு ஆற்றல் ($E_a$):** வினைபடு பொருள் மூலக்கூறுகள் கிளர்வுற்ற அணைவை உருவாக்கி விளைபொருட்களாக மாறத் தேவையான குறைந்தபட்ச கூடுதல் ஆற்றல்.
*   **அர்ஹீனியஸ் சமன்பாடு:** வினைவேக மாறிலியை (k) வெப்பநிலை (T) மற்றும் கிளர்வுறு ஆற்றலுடன் ($E_a$) தொடர்புபடுத்துகிறது.
*   **A:** அர்ஹீனியஸ் காரணி அல்லது அதிர்வெண் காரணி.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: First-Order Kinetics",
            titleTamil: "நீட் நிலை: முதல் வகை வினைவேகவியல்",
            difficulty: 'Medium',
            problem: "A first-order reaction has a rate constant of 1.15 x 10⁻³ s⁻¹. How long will 5 g of this reactant take to reduce to 3 g?",
            problemTamil: "ஒரு முதல் வகை வினையின் வினைவேக மாறிலி 1.15 x 10⁻³ s⁻¹ ஆகும். இந்த வினைபடு பொருளின் 5 கிராம் 3 கிராமாகக் குறைய எவ்வளவு நேரம் ஆகும்?",
            solutionSteps: [
                { step: 1, explanation: "Use the integrated rate law for a first-order reaction.", calculation: "t = \\frac{2.303}{k} \\log \\frac{[A]_0}{[A]_t}" },
                { step: 2, explanation: "For a given substance, the ratio of concentrations is the same as the ratio of masses.", calculation: "[A]₀ = 5 g, [A]_t = 3 g, k = 1.15 × 10⁻³ s⁻¹" },
                { step: 3, explanation: "Substitute the values into the equation.", calculation: "t = \\frac{2.303}{1.15 \\times 10^{-3}} \\log \\frac{5}{3}" },
                { step: 4, explanation: "Calculate the log value: log(5/3) = log(1.667) ≈ 0.2218.", calculation: "t = (2.0026 \\times 10^3) \\times 0.2218" },
                { step: 5, explanation: "Calculate the final time.", calculation: "t ≈ 444 s" }
            ],
            commonPitfall: "Using the wrong form of the integrated rate law (e.g., the natural log form without converting 2.303)."
        },
        {
            title: "JEE Level: Arrhenius Equation",
            titleTamil: "ஜே.இ.இ நிலை: அர்ஹீனியஸ் சமன்பாடு",
            difficulty: "Medium",
            problem: "The rate of a reaction doubles when its temperature changes from 27°C to 37°C. Calculate the activation energy ($E_a$) of the reaction. (R = 8.314 J/mol·K)",
            problemTamil: "ஒரு வினையின் வெப்பநிலை 27°C இலிருந்து 37°C ஆக மாறும்போது அதன் வேகம் இரட்டிப்பாகிறது. வினையின் கிளர்வுறு ஆற்றலைக் ($E_a$) கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "Use the two-temperature form of the Arrhenius equation.", calculation: "\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303R} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)" },
                { step: 2, explanation: "Given that the rate doubles, k₂/k₁ = 2. Convert temperatures to Kelvin: T₁ = 27+273 = 300 K, T₂ = 37+273 = 310 K.", explanationTamil: "வேகம் இரட்டிப்பாவதால், k₂/k₁ = 2. வெப்பநிலைகளை கெல்வின் ஆக மாற்றவும்." },
                { step: 3, explanation: "Substitute the known values.", calculation: "\\log 2 = \\frac{E_a}{2.303 \\times 8.314} \\left( \\frac{310 - 300}{310 \\times 300} \\right)" },
                { step: 4, explanation: "Use log 2 ≈ 0.3010 and solve for E_a.", calculation: "0.3010 = \\frac{E_a}{19.147} \\left( \\frac{10}{93000} \\right) \\implies E_a = \\frac{0.3010 \\times 19.147 \\times 93000}{10}" },
                { step: 5, explanation: "Calculate the final value.", calculation: "E_a ≈ 53598 J/mol ≈ 53.6 kJ/mol" }
            ]
        },
        {
            title: "NEET Level: Half-Life",
            titleTamil: "நீட் நிலை: அரை ஆயுள் காலம்",
            difficulty: "Easy",
            problem: "A first-order reaction takes 40 minutes for 30% decomposition. Calculate its half-life.",
            problemTamil: "ஒரு முதல் வகை வினை 30% சிதைவடைய 40 நிமிடங்கள் எடுத்துக்கொள்கிறது. அதன் அரை ஆயுள் காலத்தைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "First, find the rate constant (k) using the integrated rate law.", calculation: "k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]_t}" },
                { step: 2, explanation: "If 30% has decomposed, 70% remains. So, [A]_t = 0.70 [A]₀. Time t = 40 min.", calculation: "k = \\frac{2.303}{40} \\log \\frac{[A]_0}{0.7[A]_0} = \\frac{2.303}{40} \\log(\\frac{10}{7})" },
                { step: 3, explanation: "Calculate k. log(10/7) = log(10) - log(7) = 1 - 0.845 = 0.155.", calculation: "k = \\frac{2.303}{40} \\times 0.155 \\approx 0.0089 \\text{ min}^{-1}" },
                { step: 4, explanation: "Now, use the half-life formula for a first-order reaction.", calculation: "t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{0.0089} \\approx 77.8 \\text{ minutes}" }
            ],
            commonPitfall: "Using the decomposed percentage directly in the log term. The formula uses the ratio of initial concentration to the concentration remaining at time t.",
            neetHackTamil: "சிதைந்த சதவீதத்தை நேரடியாக மடக்கை உறுப்பில் பயன்படுத்துதல். சூத்திரம் ஆரம்ப செறிவிற்கும், நேரம் t இல் மீதமுள்ள செறிவிற்கும் இடையிலான விகிதத்தைப் பயன்படுத்துகிறது."
        },
        {
            title: "JEE Level: Order of Reaction from Data",
            titleTamil: "ஜே.இ.இ நிலை: தரவிலிருந்து வினை வகை",
            difficulty: 'Medium',
            problem: "For a reaction A + B → Products, the following initial rate data was collected. Determine the rate law.\n\n| Exp | [A] (M) | [B] (M) | Initial Rate (M/s) |\n|---|---|---|---|\n| 1 | 0.1 | 0.1 | 1.2 x 10⁻³ |\n| 2 | 0.2 | 0.1 | 2.4 x 10⁻³ |\n| 3 | 0.1 | 0.2 | 4.8 x 10⁻³ |",
            problemTamil: "A + B → விளைபொருட்கள் என்ற வினைக்கு, பின்வரும் ஆரம்ப வினைவேகத் தரவுகள் சேகரிக்கப்பட்டன. வினைவேக விதியைத் தீர்மானிக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Assume the rate law is Rate = k[A]ˣ[B]ʸ.",
                    explanationTamil: "வினைவேக விதி Rate = k[A]ˣ[B]ʸ என கருதுக."
                },
                {
                    step: 2,
                    explanation: "To find the order with respect to A (x), compare experiments where [B] is constant (Exp 1 and 2).",
                    explanationTamil: "[B] மாறிலியாக உள்ள சோதனைகளை ஒப்பிடுவதன் மூலம் A-ஐப் பொறுத்து வரிசையைக் (x) கண்டறியவும் (Exp 1 மற்றும் 2)."
                },
                {
                    step: 3,
                    explanation: "Divide the rate law for Exp 2 by Exp 1.",
                    calculation: "\\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\frac{k(0.2)^x(0.1)^y}{k(0.1)^x(0.1)^y} = (\\frac{0.2}{0.1})^x = 2^x. \\\\ Also, \\frac{2.4 \\times 10^{-3}}{1.2 \\times 10^{-3}} = 2. So, 2^x = 2, which means x=1."
                },
                {
                    step: 4,
                    explanation: "To find the order with respect to B (y), compare experiments where [A] is constant (Exp 1 and 3).",
                    explanationTamil: "[A] மாறிலியாக உள்ள சோதனைகளை ஒப்பிடுவதன் மூலம் B-ஐப் பொறுத்து வரிசையைக் (y) கண்டறியவும் (Exp 1 மற்றும் 3)."
                },
                {
                    step: 5,
                    explanation: "Divide the rate law for Exp 3 by Exp 1.",
                    calculation: "\\frac{\\text{Rate}_3}{\\text{Rate}_1} = \\frac{k(0.1)^x(0.2)^y}{k(0.1)^x(0.1)^y} = (\\frac{0.2}{0.1})^y = 2^y. \\\\ Also, \\frac{4.8 \\times 10^{-3}}{1.2 \\times 10^{-3}} = 4. So, 2^y = 4, which means y=2."
                },
                {
                    step: 6,
                    explanation: "The rate law is Rate = k[A]¹[B]². The overall order is 1+2=3.",
                    explanationTamil: "வினைவேக விதி Rate = k[A]¹[B]² ஆகும். மொத்த வினை வகை 1+2=3."
                }
            ]
        },
        {
            title: "NEET Level: Rate Expression",
            titleTamil: "நீட் நிலை: வினைவேக கோவை",
            difficulty: "Easy",
            problem: "For the reaction 2A + B → 3C, if the rate of disappearance of A is 0.04 M/s, what is the rate of appearance of C?",
            problemTamil: "2A + B → 3C என்ற வினைக்கு, A மறைந்துபோகும் வேகம் 0.04 M/s எனில், C தோன்றும் வேகம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Write the expression for the rate of reaction in terms of all reactants and products, dividing by their stoichiometric coefficients.",
                    calculation: "Rate = -\\frac{1}{2} \\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{1}{3} \\frac{d[C]}{dt}"
                },
                {
                    step: 2,
                    explanation: "We are given the rate of disappearance of A, which is -d[A]/dt = 0.04 M/s.",
                    explanationTamil: "A மறைந்துபோகும் வேகம், -d[A]/dt = 0.04 M/s என கொடுக்கப்பட்டுள்ளது."
                },
                {
                    step: 3,
                    explanation: "Relate the rate of appearance of C to the rate of disappearance of A.",
                    calculation: "+\\frac{1}{3} \\frac{d[C]}{dt} = -\\frac{1}{2} \\frac{d[A]}{dt}"
                },
                {
                    step: 4,
                    explanation: "Solve for the rate of appearance of C, which is +d[C]/dt.",
                    calculation: "\\frac{d[C]}{dt} = \\frac{3}{2} (-\\frac{d[A]}{dt}) = \\frac{3}{2} (0.04 M/s) = 0.06 M/s"
                }
            ],
            commonPitfall: "Forgetting to use the stoichiometric coefficients when relating the rates of different species."
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [],
    mnemonics: [],
    neetTips: [],
    validationReport: []
};
