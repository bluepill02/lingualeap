
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
                    tamil: `**வினைவேக விதி:** ஒரு வினையின் வேகத்தை வினைபடு பொருட்களின் செறிவுகளுடன் தொடர்புபடுத்தும் ஒரு கோவை. ஒரு பொதுவான வினை $aA + bB \\rightarrow Products$-க்கு: Rate = k[A]ˣ[B]ʸ
*   **k:** வினைவேக மாறிலி அல்லது தன்வினை வேகம்.
*   **x மற்றும் y:** A மற்றும் B ஐப் பொறுத்து வினையின் வகைகள். அவை சோதனை மூலம் தீர்மானிக்கப்படுகின்றன மற்றும் a, b க்கு சமமாக இருக்கலாம் அல்லது இல்லாமலும் இருக்கலாம்.`
                },
                {
                    english: `**Order of Reaction:** The sum of the powers of the concentration terms in the rate law expression.
$$ \\text{Overall Order} = x + y $$
*   **Zero-Order Reaction:** Rate is independent of the concentration of reactants.
*   **First-Order Reaction:** Rate is directly proportional to the concentration of one reactant.`,
                    tamil: `**வினை வகை:** வினைவேக விதி கோவையில் உள்ள செறிவு உறுப்புகளின் அடுக்குகளின் கூடுதல். Overall Order = x + y
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
            neetHack: "For first-order reactions, the time taken for a certain *fraction* to react is constant. You don't always need absolute concentrations.",
            neetHackTamil: "முதல் வகை வினைகளுக்கு, ஒரு குறிப்பிட்ட *பின்னம்* வினைபுரிய எடுக்கும் நேரம் மாறிலி. உங்களுக்கு எப்போதும் தனிப்பட்ட செறிவுகள் தேவையில்லை.",
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
     mcqs: [
        {
            question: "The rate of a first-order reaction depends on the:",
            options: ["A. Concentration of the reactant", "B. Square of the concentration of the reactant", "C. Cube of the concentration of the reactant", "D. Concentration of the product"],
            answer: "A. Concentration of the reactant",
            explanation: "For a first-order reaction, Rate = k[A]¹, so the rate is directly proportional to the first power of the reactant's concentration.",
            neetFrequency: 4
        },
        {
            question: "The unit of the rate constant for a zero-order reaction is:",
            options: ["A. s⁻¹", "B. mol L⁻¹ s⁻¹", "C. L mol⁻¹ s⁻¹", "D. L² mol⁻² s⁻¹"],
            answer: "B. mol L⁻¹ s⁻¹",
            explanation: "For a zero-order reaction, Rate = k. The unit of rate is mol L⁻¹ s⁻¹, so the unit of k is also mol L⁻¹ s⁻¹.",
            neetFrequency: 5
        },
        {
            question: "The half-life period of a first-order reaction is 1386 s. The specific rate constant of the reaction is:",
            options: ["A. 0.5 x 10⁻² s⁻¹", "B. 0.5 x 10⁻³ s⁻¹", "C. 5.0 x 10⁻² s⁻¹", "D. 5.0 x 10⁻³ s⁻¹"],
            answer: "B. 0.5 x 10⁻³ s⁻¹",
            explanation: "For a first-order reaction, t₁/₂ = 0.693/k. So, k = 0.693 / 1386 ≈ 0.0005 = 0.5 x 10⁻³ s⁻¹.",
            neetFrequency: 5
        },
        {
            question: "The role of a catalyst is to change:",
            options: ["A. Gibbs energy of reaction", "B. Enthalpy of reaction", "C. Activation energy of reaction", "D. Equilibrium constant"],
            answer: "C. Activation energy of reaction",
            explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy, thereby increasing the rate of both forward and reverse reactions.",
            neetFrequency: 4
        },
        {
            question: "For the reaction 2A + B → 3C + D, which of the following does not express the reaction rate?",
            options: ["A. -d[A]/2dt", "B. -d[C]/3dt", "C. -d[B]/dt", "D. d[D]/dt"],
            answer: "B. -d[C]/3dt",
            explanation: "The rate of appearance of a product is positive. The expression should be +d[C]/3dt. The negative sign is incorrect for a product.",
            neetFrequency: 4
        },
        {
            question: "The half-life of a zero-order reaction is:",
            options: ["A. Proportional to initial concentration", "B. Inversely proportional to initial concentration", "C. Independent of initial concentration", "D. Proportional to the square of initial concentration"],
            answer: "A. Proportional to initial concentration",
            explanation: "t₁/₂ = [A]₀ / 2k. The half-life is directly proportional to the initial concentration.",
            neetFrequency: 3
        },
        {
            question: "According to the Arrhenius equation, the rate constant increases with:",
            options: ["A. Increasing activation energy", "B. Decreasing temperature", "C. Increasing temperature", "D. Increasing pressure"],
            answer: "C. Increasing temperature",
            explanation: "k = Ae^(-Ea/RT). As temperature T increases, the exponential term becomes less negative, so the rate constant k increases.",
            neetFrequency: 4
        },
        {
            question: "The order of a reaction is determined by:",
            options: ["A. The stoichiometry of the reaction", "B. The temperature", "C. The pressure", "D. Experiment"],
            answer: "D. Experiment",
            explanation: "The order of a reaction is an experimental quantity and cannot be determined from the balanced chemical equation alone.",
            neetFrequency: 2
        },
        {
            question: "In the reaction A → B, the concentration of A decreases from 0.8 M to 0.4 M in 10 minutes. The time taken for the concentration to change from 0.1 M to 0.025 M is:",
            options: ["A. 10 minutes", "B. 20 minutes", "C. 5 minutes", "D. 25 minutes"],
            answer: "B. 20 minutes",
            explanation: "The first statement shows that the half-life is 10 minutes. The second change is from 0.1 M to 0.025 M, which is two half-lives (0.1 -> 0.05 -> 0.025). So the time taken is 2 * 10 = 20 minutes.",
            neetFrequency: 5
        },
        {
            question: "The rate constant of a reaction is 2.0 x 10⁻⁵ L mol⁻¹ s⁻¹. The order of the reaction is:",
            options: ["A. 0", "B. 1", "C. 2", "D. 3"],
            answer: "C. 2",
            explanation: "The unit of the rate constant for an nth order reaction is (mol/L)^(1-n) s⁻¹. Here the unit is L mol⁻¹ s⁻¹, which corresponds to n=2.",
            neetFrequency: 3
        },
        {
            question: "For a reaction, the rate law is Rate = k[A][B]². If the concentration of both A and B are doubled, the rate will increase by a factor of:",
            options: ["A. 2", "B. 4", "C. 6", "D. 8"],
            answer: "D. 8",
            explanation: "New Rate = k[2A][2B]² = k(2A)(4B²) = 8 * k[A][B]². The rate increases by a factor of 8.",
            neetFrequency: 4
        },
        {
            question: "The plot of ln(k) vs 1/T for the Arrhenius equation gives a straight line with a slope of:",
            options: ["A. -Ea/R", "B. -R/Ea", "C. Ea/R", "D. A"],
            answer: "A. -Ea/R",
            explanation: "The Arrhenius equation is ln(k) = ln(A) - Ea/RT. This is in the form y = c + mx, where y = ln(k), x = 1/T, and the slope m = -Ea/R.",
            neetFrequency: 4
        },
        {
            question: "A reaction having equal energies of activation for forward and reverse reactions has:",
            options: ["A. ΔH = 0", "B. ΔS = 0", "C. ΔG = 0", "D. Zero order"],
            answer: "A. ΔH = 0",
            explanation: "The enthalpy change of a reaction is ΔH = Ea(forward) - Ea(reverse). If these are equal, ΔH = 0.",
            neetFrequency: 2
        },
        {
            question: "The molecularity of a reaction:",
            options: ["A. Can be zero", "B. Can be a fraction", "C. Is always an integer", "D. Is the same as the order"],
            answer: "C. Is always an integer",
            explanation: "Molecularity is the number of reacting species in an elementary reaction and must be a whole number (1, 2, or rarely 3). It cannot be zero or a fraction.",
            neetFrequency: 1
        },
        {
            question: "A first-order reaction is 75% complete in 32 minutes. When was it 50% complete?",
            options: ["A. 16 minutes", "B. 8 minutes", "C. 24 minutes", "D. 4 minutes"],
            answer: "A. 16 minutes",
            explanation: "75% completion means two half-lives have passed (100% -> 50% -> 25%). If 2 * t₁/₂ = 32 minutes, then one half-life is t₁/₂ = 16 minutes.",
            neetFrequency: 5
        },
        {
            question: "Which of the following will react fastest?",
            options: ["A. A reaction with high activation energy and high temperature", "B. A reaction with high activation energy and low temperature", "C. A reaction with low activation energy and high temperature", "D. A reaction with low activation energy and low temperature"],
            answer: "C. A reaction with low activation energy and high temperature",
            explanation: "From k = Ae^(-Ea/RT), the rate constant k is largest when the activation energy Ea is low and the temperature T is high.",
            neetFrequency: 3
        },
        {
            question: "The unit of rate of reaction is:",
            options: ["A. mol⁻¹ L s⁻¹", "B. mol L⁻¹ s⁻¹", "C. mol L⁻¹ s", "D. L mol⁻¹ s⁻¹"],
            answer: "B. mol L⁻¹ s⁻¹",
            explanation: "Rate is defined as change in concentration (mol/L) per unit time (s).",
            neetFrequency: 1
        },
        {
            question: "The time taken for 99.9% completion of a first-order reaction is approximately:",
            options: ["A. 2 times the half-life", "B. 5 times the half-life", "C. 10 times the half-life", "D. 100 times the half-life"],
            answer: "C. 10 times the half-life",
            explanation: "For 99.9% completion, [A]t = 0.001[A]₀. t = (2.303/k)log(1000) = (2.303/k)*3. Since t₁/₂ = 0.693/k, k=0.693/t₁/₂. t = (2.303 * 3 / (0.693/t₁/₂)) ≈ 10 * t₁/₂.",
            neetFrequency: 3
        },
        {
            question: "The term 'A' in the Arrhenius equation is called:",
            options: ["A. Activation Energy", "B. Boltzmann Constant", "C. Collision Frequency", "D. Frequency Factor"],
            answer: "D. Frequency Factor",
            explanation: "A is the pre-exponential factor or frequency factor, which is related to the frequency of collisions with the correct orientation.",
            neetFrequency: 2
        },
        {
            question: "For a complex reaction A + B → C, the rate law is Rate = k[A]. The order of reaction is:",
            options: ["A. 0", "B. 1", "C. 2", "D. 3"],
            answer: "B. 1",
            explanation: "The order is the sum of the powers in the experimentally determined rate law. Here, it is 1. The stoichiometry does not determine the order.",
            neetFrequency: 4
        },
        {
            question: "The half-life of a radioactive substance is 100 years. The time after which its activity will be 1/8th of its original value is:",
            options: ["A. 100 years", "B. 200 years", "C. 300 years", "D. 400 years"],
            answer: "C. 300 years",
            explanation: "Radioactive decay follows first-order kinetics. To get to 1/8th, it takes 3 half-lives (1 -> 1/2 -> 1/4 -> 1/8). So, time = 3 * 100 = 300 years.",
            neetFrequency: 5
        },
        {
            question: "The differential rate law for the reaction H₂ + I₂ → 2HI is:",
            options: ["A. -d[H₂]/dt = -d[I₂]/dt = d[HI]/dt", "B. -d[H₂]/dt = -d[I₂]/dt = (1/2)d[HI]/dt", "C. d[H₂]/dt = d[I₂]/dt = (1/2)d[HI]/dt", "D. -2d[H₂]/dt = -2d[I₂]/dt = d[HI]/dt"],
            answer: "B. -d[H₂]/dt = -d[I₂]/dt = (1/2)d[HI]/dt",
            explanation: "The rate is expressed by dividing the rate of change of each species by its stoichiometric coefficient. Reactants get a negative sign.",
            neetFrequency: 3
        },
        {
            question: "A catalyst increases the rate of reaction by:",
            options: ["A. Increasing the activation energy", "B. Increasing the temperature", "C. Decreasing the activation energy", "D. Decreasing the enthalpy change"],
            answer: "C. Decreasing the activation energy",
            explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy barrier.",
            neetFrequency: 4
        },
        {
            question: "If the rate of a reaction is independent of the concentration of reactants, the order is:",
            options: ["A. 0", "B. 1", "C. 2", "D. 3"],
            answer: "A. 0",
            explanation: "For a zero-order reaction, Rate = k[A]⁰ = k, which is independent of concentration.",
            neetFrequency: 2
        },
        {
            question: "For a first-order reaction, the time required for 90% completion is approximately:",
            options: ["A. 2.2 x t₁/₂", "B. 3.3 x t₁/₂", "C. 4.4 x t₁/₂", "D. 1.1 x t₁/₂"],
            answer: "B. 3.3 x t₁/₂",
            explanation: "t₉₀ = (2.303/k)log(100/10) = 2.303/k. t₁/₂ = 0.693/k. The ratio t₉₀/t₁/₂ = 2.303/0.693 ≈ 3.3.",
            neetFrequency: 4
        }
    ],
    assertionReasons: [
        {
            assertion: "The rate of a reaction is doubled for every 10°C rise in temperature.",
            reason: "The activation energy of the reaction decreases with an increase in temperature.",
            answer: "C",
            explanation: "Assertion is a common rule of thumb and is generally true for many reactions. However, the reason is false. Activation energy is a property of the reaction and does not change with temperature. The rate increases because more molecules have sufficient energy to overcome the activation barrier at higher temperatures.",
            neetFrequency: 4
        },
        {
            assertion: "The order of a reaction can be zero or a fraction.",
            reason: "The order of a reaction is an experimental quantity.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. Because the order is determined experimentally from the rate law, it is not restricted to the integer values of stoichiometric coefficients.",
            neetFrequency: 3
        },
        {
            assertion: "A catalyst does not alter the equilibrium constant of a reaction.",
            reason: "A catalyst increases the rate of both the forward and backward reactions to the same extent.",
            answer: "A",
            explanation: "Both statements are true. The reason correctly explains why the equilibrium constant (the ratio of forward to reverse rate constants, K = k_f/k_r) remains unchanged.",
            neetFrequency: 4
        },
        {
            assertion: "The half-life of a first-order reaction is independent of the initial concentration.",
            reason: "The half-life for a first-order reaction is given by t₁/₂ = 0.693/k.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation, as the formula for half-life does not contain the initial concentration term [A]₀.",
            neetFrequency: 5
        },
        {
            assertion: "Molecularity has no meaning for a complex reaction.",
            reason: "The overall molecularity of a complex reaction is equal to the molecularity of the slowest step.",
            answer: "C",
            explanation: "Assertion is true. Molecularity is defined only for elementary steps. The reason is false. The rate of a complex reaction is determined by the slowest step (rate-determining step), but the concept of overall molecularity is not defined.",
            neetFrequency: 2
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Zero-order reaction", "(b) First-order reaction", "(c) Second-order reaction", "(d) Third-order reaction"],
            column2: ["(p) s⁻¹", "(q) L mol⁻¹ s⁻¹", "(r) mol L⁻¹ s⁻¹", "(s) L² mol⁻² s⁻¹"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the order of the reaction with the units of its rate constant.",
            neetFrequency: 4
        },
        {
            column1: ["(a) t₁/₂ ∝ 1/a", "(b) t₁/₂ ∝ a", "(c) t₁/₂ independent of a", "(d) t₁/₂ ∝ 1/a²"],
            column2: ["(p) First order", "(q) Second order", "(r) Zero order", "(s) Third order"],
            answer: "a-q, b-r, c-p, d-s",
            explanation: "Matching the dependence of half-life on initial concentration (a) for different orders."
        },
        {
            column1: ["(a) Rate of reaction", "(b) Rate constant", "(c) Order of reaction", "(d) Molecularity"],
            column2: ["(p) Can be fractional", "(q) Theoretical concept", "(r) Depends on temperature", "(s) Depends on concentration"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching kinetic terms with their properties."
        },
        {
            column1: ["(a) Arrhenius Equation", "(b) Integrated rate law (1st order)", "(c) Half-life (1st order)", "(d) Activation Energy"],
            column2: ["(p) t₁/₂ = 0.693/k", "(q) k = Ae^(-Ea/RT)", "(r) Energy barrier", "(s) k = (2.303/t)log([A]₀/[A])"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the concepts with their corresponding equations or definitions."
        },
        {
            column1: ["(a) Catalyst", "(b) Temperature", "(c) Concentration", "(d) Surface Area"],
            column2: ["(p) Increases collision frequency", "(q) Increases effective collisions", "(r) Increases number of active sites", "(s) Lowers activation energy"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching factors affecting reaction rate with how they work. Higher temperature increases the energy of collisions, making them more effective. Higher concentration increases the frequency of collisions."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]_t}",
                description: "Integrated Rate Law for First-Order Reaction",
                descriptionTamil: "முதல் வகை வினைக்கான தொகையிடப்பட்ட வினைவேக விதி"
            },
            {
                formula: "t_{1/2} = \\frac{0.693}{k}",
                description: "Half-Life for First-Order Reaction",
                descriptionTamil: "முதல் வகை வினைக்கான அரை ஆயுள் காலம்"
            },
            {
                formula: "k = A e^{-E_a/RT}",
                description: "Arrhenius Equation",
                descriptionTamil: "அர்ஹீனியஸ் சமன்பாடு"
            },
            {
                formula: "\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303R} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)",
                description: "Arrhenius Equation at Two Temperatures",
                descriptionTamil: "இரண்டு வெப்பநிலைகளில் அர்ஹீனியஸ் சமன்பாடு"
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "The order of a reaction is an experimental quantity that must be determined from the rate law.",
        "The half-life of a first-order reaction is constant and independent of the initial concentration.",
        "Increasing the temperature increases the reaction rate primarily by increasing the number of molecules with energy greater than the activation energy.",
        "A catalyst increases the rate of reaction by providing an alternative pathway with a lower activation energy."
    ],
    mnemonics: [
        { text: "For rate constant units (mol/L)^(1-n) s⁻¹, just remember for Zero-order (n=0) it's the same as the rate, mol L⁻¹ s⁻¹. For first-order (n=1) it's just s⁻¹.", tamil: "வினைவேக மாறிலி அலகுகளுக்கு, பூஜ்ஜிய-வகைக்கு (n=0) அது வேகத்தின் அலகுக்கு சமம், mol L⁻¹ s⁻¹. முதல்-வகைக்கு (n=1) அது வெறுமனே s⁻¹." }
    ],
    neetTips: [
        {
            text: "Questions relating half-life with the percentage of reaction completed are very common for first-order reactions. Remember that 75% completion is 2 half-lives, 87.5% is 3 half-lives, and 99.9% is approx. 10 half-lives.",
            tamil: "முதல் வகை வினைகளுக்கு அரை ஆயுள் காலத்தை வினை முடிந்த சதவீதத்துடன் தொடர்புபடுத்தும் கேள்விகள் மிகவும் பொதுவானவை. 75% நிறைவு 2 அரை ஆயுள், 87.5% 3 அரை ஆயுள், மற்றும் 99.9% தோராயமாக 10 அரை ஆயுள் என்பதை நினைவில் கொள்க."
        },
        {
            text: "Graphical questions are important. Know the plots for zero and first-order reactions: [A] vs t, log[A] vs t, and t₁/₂ vs [A]₀.",
            tamil: "வரைபட கேள்விகள் முக்கியமானவை. பூஜ்ஜிய மற்றும் முதல்-வகை வினைகளுக்கான வரைபடங்களை அறிந்து கொள்ளுங்கள்: [A] vs t, log[A] vs t, மற்றும் t₁/₂ vs [A]₀."
        }
    ],
    studentTip: {
        english: "Chemical kinetics is about 'how fast'. Differentiate this from thermodynamics, which is about 'how far' a reaction will go. A reaction can be thermodynamically favorable but kinetically very slow (like the conversion of diamond to graphite).",
        tamil: "வேதி வினைவேகவியல் என்பது 'எவ்வளவு வேகமாக' என்பதைப் பற்றியது. இதை வெப்ப இயக்கவியலிலிருந்து வேறுபடுத்துங்கள், அது ஒரு வினை 'எவ்வளவு தூரம்' செல்லும் என்பதைப் பற்றியது. ஒரு வினை வெப்ப இயக்கவியல் ரீதியாக சாதகமாக இருக்கலாம் ஆனால் இயக்கவியல் ரீதியாக மிகவும் மெதுவாக இருக்கலாம் (வைரம் கிராஃபைட்டாக மாறுவது போல)."
    },
    peerDiscussion: {
        english: "Discuss with a friend why the order of a reaction can be different from the stoichiometric coefficients in the balanced equation, but the molecularity of an elementary step cannot.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஒரு வினையின் வகை ஏன் சமன்செய்யப்பட்ட சமன்பாட்டில் உள்ள வினைக்கூறு குணகங்களிலிருந்து வேறுபடலாம், ஆனால் ஒரு அடிப்படைப் படியின் மூலக்கூறுத்துவம் ஏன் அவ்வாறு இருக்க முடியாது?"
    },
    nextChapter: {
        title: "p-Block Elements",
        titleTamil: "p-தொகுதி தனிமங்கள்"
    },
    validationReport: []
};

    