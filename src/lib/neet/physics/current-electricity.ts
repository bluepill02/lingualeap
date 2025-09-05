
import type { NeetModule } from '@/lib/types';

export const currentElectricityModule: NeetModule = {
    id: 'neet-physics-current-electricity',
    title: 'Physics - Current Electricity (மின்னோட்டவியல்)',
    chapter: 'Current Electricity',
    subject: 'Physics',
    learningObjectives: [
        "Define electric current, drift velocity, and understand their relationship.",
        "Understand and apply Ohm's law, and analyze the factors affecting resistance and resistivity.",
        "Analyze series and parallel combinations of resistors and cells.",
        "Apply Kirchhoff's laws (Junction Rule and Loop Rule) to solve complex circuits.",
        "Understand the principle of the Wheatstone bridge and its application in the meter bridge.",
        "Describe the principle of the potentiometer and its applications in comparing emfs and measuring internal resistance."
    ],
    prerequisites: [
        "Basic concepts of Electrostatics (electric potential, electric field).",
        "Understanding of simple algebraic equations."
    ],
    conceptOverview: "While electrostatics deals with charges at rest, this chapter focuses on charges in motion, which constitutes an electric current. We'll define current and explore the microscopic model of how electrons drift through a conductor. The chapter is built around a few fundamental laws: Ohm's law, which relates voltage, current, and resistance, and Kirchhoff's laws, which are powerful tools for analyzing any electrical circuit. We will also study important practical devices like the Wheatstone bridge and the potentiometer, which are used for precise measurements of resistance and emf.",
    tamilConnection: "நம் வீடுகளில் உள்ள மின்விளக்குகள், மின்விசிறிகள் அனைத்தும் மின்னோட்டத்தால் இயங்குகின்றன. ஒரு மின்சுற்றில் மின்னோட்டம் எவ்வாறு பாய்கிறது, அதன் மதிப்பு என்ன என்பதை ஓம் விதி மற்றும் கிர்க்காஃப் விதிகள் மூலம் கணக்கிடலாம். இந்த விதிகள் மின்சுற்றுகளைப் பகுப்பாய்வு செய்வதற்கான அடிப்படை கருவிகளாகும்.",
    culturalContext: "Think of the complex electrical wiring in a temple gopuram, lighting up hundreds of bulbs simultaneously. The principles of series and parallel circuits, governed by Kirchhoff's laws, ensure that each bulb gets the correct voltage and the entire system works safely and efficiently. This chapter explains the fundamental physics behind such elaborate electrical designs.",
    syllabusMapping: [
         {
            topic: 'Current Electricity',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 2: Current Electricity',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 3: Current Electricity',
            notes: 'Extremely high-yield chapter for NEET. Questions from Kirchhoff\'s laws, resistor combinations (especially cube problems), meter bridge, and potentiometer are very frequent. A thorough understanding is essential.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 2 maps to NEET Physics Unit 12'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Electric Current and Drift Velocity
*   **Electric Current (I):** The rate of flow of electric charge through a conductor. $I = dQ/dt$. SI unit: Ampere (A).
*   **Drift Velocity (v_d):** The average velocity with which free electrons get drifted towards the positive end of the conductor under the influence of an external electric field.
*   **Relation:** $I = n e A v_d$, where n is the number density of free electrons, e is the charge of an electron, and A is the cross-sectional area.`,
            tamil: `### 1. மின்னோட்டம் மற்றும் இழுவை திசைவேகம்
*   **மின்னோட்டம் (I):** ஒரு கடத்தியின் வழியே மின்னூட்டம் பாயும் வீதம். $I = dQ/dt$. SI அலகு: ஆம்பியர் (A).
*   **இழுவை திசைவேகம் (v_d):** புற மின்புலத்தின் செல்வாக்கின் கீழ், கட்டுறா எலக்ட்ரான்கள் கடத்தியின் நேர்மறை முனைக்கு இழுக்கப்படும் சராசரி திசைவேகம்.
*   **தொடர்பு:** $I = n e A v_d$, இங்கு n என்பது கட்டுறா எலக்ட்ரான்களின் எண் அடர்த்தி, e என்பது எலக்ட்ரானின் மின்னூட்டம், மற்றும் A என்பது குறுக்குவெட்டுப் பரப்பு.`
        },
        {
            english: `### 2. Ohm's Law and Resistance
*   **Ohm's Law:** At constant temperature, the current flowing through a conductor is directly proportional to the potential difference across its ends. $V \\propto I \\implies V = IR$.
*   **Resistance (R):** The opposition to the flow of current. $R = V/I$. SI unit: Ohm (Ω).
*   **Resistivity (ρ):** Resistance depends on the material and dimensions of the conductor: $R = \\rho \\frac{L}{A}$. Resistivity (ρ) is a property of the material.
*   **Temperature Dependence:** Resistance of most conductors increases with temperature: $R_T = R_0(1 + \\alpha(T-T_0))$.`,
            tamil: `### 2. ஓம் விதி மற்றும் மின்தடை
*   **ஓம் விதி:** மாறா வெப்பநிலையில், ஒரு கடத்தியின் வழியே பாயும் மின்னோட்டம் அதன் முனைகளுக்கு இடையேயான மின்னழுத்த வேறுபாட்டிற்கு நேர்த்தகவில் இருக்கும். $V \\propto I \\implies V = IR$.
*   **மின்தடை (R):** மின்னோட்டப் பாய்விற்கான எதிர்ப்பு. $R = V/I$. SI அலகு: ஓம் (Ω).
*   **மின்தடை எண் (ρ):** மின்தடை கடத்தியின் பொருள் மற்றும் பரிமாணங்களைப் பொறுத்தது: $R = \\rho \\frac{L}{A}$. மின்தடை எண் (ρ) என்பது பொருளின் பண்பு ஆகும்.
*   **வெப்பநிலை சார்பு:** பெரும்பாலான கடத்திகளின் மின்தடை வெப்பநிலையுடன் அதிகரிக்கும்: $R_T = R_0(1 + \\alpha(T-T_0))$.`
        },
        {
            english: `### 3. Combination of Resistors and Cells
*   **Resistors in Series:** $R_s = R_1 + R_2 + ...$
*   **Resistors in Parallel:** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$
*   **Cells:** A device that provides emf (electromotive force). It has an internal resistance (r).
*   **Cells in Series:** $E_{eq} = E_1 + E_2$, $r_{eq} = r_1 + r_2$.
*   **Cells in Parallel:** $\\frac{E_{eq}}{r_{eq}} = \\frac{E_1}{r_1} + \\frac{E_2}{r_2}$, $\\frac{1}{r_{eq}} = \\frac{1}{r_1} + \\frac{1}{r_2}$.`,
            tamil: `### 3. மின்தடையாக்கிகள் மற்றும் மின்கலன்களின் இணைப்பு
*   **தொடரிணைப்பில் மின்தடையாக்கிகள்:** $R_s = R_1 + R_2 + ...$
*   **பக்க இணைப்பில் மின்தடையாக்கிகள்:** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$
*   **மின்கலன்கள்:** மின்னியக்கு விசையை (emf) வழங்கும் ஒரு சாதனம். இது ஒரு அக மின்தடையைக் (r) கொண்டுள்ளது.
*   **தொடரிணைப்பில் மின்கலன்கள்:** $E_{eq} = E_1 + E_2$, $r_{eq} = r_1 + r_2$.
*   **பக்க இணைப்பில் மின்கலன்கள்:** $\\frac{E_{eq}}{r_{eq}} = \\frac{E_1}{r_1} + \\frac{E_2}{r_2}$, $\\frac{1}{r_{eq}} = \\frac{1}{r_1} + \\frac{1}{r_2}$.`
        },
        {
            english: `### 4. Kirchhoff's Laws
*   **Junction Rule (First Law):** The algebraic sum of currents entering a junction is zero (ΣI = 0). This is based on the conservation of charge.
*   **Loop Rule (Second Law):** The algebraic sum of changes in potential around any closed loop involving resistors and cells in the loop is zero (ΣΔV = 0). This is based on the conservation of energy.`,
            tamil: `### 4. கிர்க்காஃப் விதிகள்
*   **சந்தி விதி (முதல் விதி):** ஒரு சந்தியில் நுழையும் மின்னோட்டங்களின் இயற்கணிதக் கூடுதல் சுழியாகும் (ΣI = 0). இது மின்னூட்ட அழிவின்மை விதியை அடிப்படையாகக் கொண்டது.
*   **சுற்று விதி (இரண்டாம் விதி):** ஒரு சுற்றில் உள்ள மின்தடையாக்கிகள் மற்றும் மின்கலன்களை உள்ளடக்கிய எந்தவொரு மூடிய சுற்றைச் சுற்றியுள்ள மின்னழுத்த மாற்றங்களின் இயற்கணிதக் கூடுதல் சுழியாகும் (ΣΔV = 0). இது ஆற்றல் அழிவின்மை விதியை அடிப்படையாகக் கொண்டது.`
        },
        {
            english: `### 5. Electrical Instruments
*   **Wheatstone Bridge:** An arrangement of four resistors used to measure an unknown resistance. The bridge is balanced when the galvanometer shows zero deflection. At balance: $\\frac{P}{Q} = \\frac{R}{S}$.
*   **Meter Bridge:** A practical form of the Wheatstone bridge.
*   **Potentiometer:** A device used to measure potential differences accurately without drawing any current from the circuit. It is used to compare emfs of two cells and to measure the internal resistance of a cell.`,
            tamil: `### 5. மின் கருவிகள்
*   **வீட்ஸ்டோன் சமனச்சுற்று:** தெரியாத மின்தடையை அளவிடப் பயன்படும் நான்கு மின்தடையாக்கிகளின் ஒரு அமைப்பு. கால்வனோமீட்டர் சுழி விலக்கத்தைக் காட்டும்போது சமனச்சுற்று சமநிலையில் இருக்கும். சமநிலையில்: $\\frac{P}{Q} = \\frac{R}{S}$.
*   **மீட்டர் சமனச்சுற்று:** வீட்ஸ்டோன் சமனச்சுற்றின் ஒரு நடைமுறை வடிவம்.
*   **மின்னழுத்தமானி:** சுற்றிலிருந்து எந்த மின்னோட்டத்தையும் எடுக்காமல் மின்னழுத்த வேறுபாடுகளைத் துல்லியமாக அளவிடப் பயன்படும் ஒரு சாதனம். இது இரண்டு மின்கலன்களின் மின்னியக்கு விசைகளை ஒப்பிடவும், ஒரு மின்கலத்தின் அக மின்தடையை அளவிடவும் பயன்படுகிறது.`
        }
    ],
    workedExamples: [
        {
            title: "Kirchhoff's Laws Application",
            titleTamil: "கிர்க்காஃப் விதிகளின் பயன்பாடு",
            difficulty: 'Hard',
            problem: "Find the currents I₁, I₂, and I₃ in the circuit shown, using Kirchhoff's laws. (Assume a circuit diagram with a 10V cell, a 5V cell, and three resistors).",
            problemTamil: "கிர்க்காஃப் விதிகளைப் பயன்படுத்தி, காட்டப்பட்டுள்ள மின்சுற்றில் I₁, I₂, மற்றும் I₃ மின்னோட்டங்களைக் கண்டறியவும். (10V மின்கலம், 5V மின்கலம், மற்றும் மூன்று மின்தடையாக்கிகள் கொண்ட ஒரு மின்சுற்று வரைபடத்தை கருதுக).",
            solutionSteps: [
                { step: 1, explanation: "Apply Kirchhoff's Junction Rule at junction 'c'.", explanationTamil: "'c' சந்தியில் கிர்க்காஃப்பின் சந்தி விதியைப் பயன்படுத்தவும்.", calculation: "I₁ + I₂ = I₃  ---(1)" },
                { step: 2, explanation: "Apply Kirchhoff's Loop Rule to the loop 'abcfa'.", explanationTamil: "'abcfa' சுற்றிற்கு கிர்க்காஃப்பின் சுற்று விதியைப் பயன்படுத்தவும்.", calculation: "-10 + 4(I₁ + I₂) + 2I₁ = 0 => 6I₁ + 4I₂ = 10  ---(2)" },
                { step: 3, explanation: "Apply Kirchhoff's Loop Rule to the loop 'cdefc'.", explanationTamil: "'cdefc' சுற்றிற்கு கிர்க்காஃப்பின் சுற்று விதியைப் பயன்படுத்தவும்.", calculation: "-5 + 1(I₂) - 4(I₁ + I₂) = 0 => -4I₁ - 3I₂ = 5  ---(3)" },
                { step: 4, explanation: "Solve the linear equations (2) and (3) for I₁ and I₂.", explanationTamil: "I₁ மற்றும் I₂ க்காக நேரியல் சமன்பாடுகளை (2) மற்றும் (3) தீர்க்கவும்.", calculation: "From (3), 4I₁ = -5-3I₂. Substitute into (2): 6(-5-3I₂)/4 + 4I₂ = 10 => -7.5 - 4.5I₂ + 4I₂ = 10 => -0.5I₂ = 17.5 => I₂ = -35 A (sign indicates opposite direction). I₁ ≈ 25 A." },
                { step: 5, explanation: "Find I₃ using the junction rule.", explanationTamil: "சந்தி விதியைப் பயன்படுத்தி I₃ ஐக் கண்டறியவும்.", calculation: "I₃ = I₁ + I₂ ≈ 25 - 35 = -10 A." }
            ],
            neetHack: "Always be consistent with your assumed current directions and loop paths. If you get a negative current, it simply means the actual current flows in the opposite direction to your assumption.",
            neetHackTamil: "நீங்கள் கருதும் மின்னோட்ட திசைகள் மற்றும் சுற்றுப் பாதைகளில் எப்போதும் சீராக இருங்கள். உங்களுக்கு எதிர்மறை மின்னோட்டம் கிடைத்தால், உண்மையான மின்னோட்டம் நீங்கள் கருதிய திசைக்கு எதிர் திசையில் பாய்கிறது என்று அர்த்தம்!"
        },
        {
            title: "Meter Bridge Calculation",
            titleTamil: "மீட்டர் சமனச்சுற்று கணக்கீடு",
            difficulty: 'Medium',
            problem: "In a meter bridge, the balance point is found to be at 39.5 cm from the end A, when the resistor Y is of 12.5 Ω. Determine the resistance of X. Why are the connections between resistors in a Wheatstone or meter bridge made of thick copper strips?",
            problemTamil: "ஒரு மீட்டர் சமனச்சுற்றில், Y மின்தடை 12.5 Ω ஆக இருக்கும்போது, சமநிலை புள்ளி A முனையிலிருந்து 39.5 செ.மீ தொலைவில் காணப்படுகிறது. X இன் மின்தடையைக் கண்டறியவும். வீட்ஸ்டோன் அல்லது மீட்டர் சமனச்சுற்றில் மின்தடையாக்கிகளுக்கு இடையேயான இணைப்புகள் ஏன் தடிமனான செப்புப் பட்டைகளால் செய்யப்படுகின்றன?",
            solutionSteps: [
                { step: 1, explanation: "The meter bridge works on the principle of a balanced Wheatstone bridge. The formula is R/S = l₁/l₂.", explanationTamil: "மீட்டர் சமனச்சுற்று ஒரு சமநிலையான வீட்ஸ்டோன் சமனச்சுற்றின் கொள்கையில் செயல்படுகிறது. சூத்திரம் R/S = l₁/l₂ ஆகும்." },
                { step: 2, explanation: "Identify the given values. Here R=X, S=Y=12.5 Ω, l₁=39.5 cm, l₂=100-39.5 = 60.5 cm.", explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை அடையாளம் காணவும்." },
                { step: 3, explanation: "Substitute the values into the formula and solve for X.", calculation: "X / 12.5 = 39.5 / 60.5 => X = 12.5 * (39.5 / 60.5) ≈ 8.16 Ω" },
                { step: 4, explanation: "The connections are made of thick copper strips to minimize their resistance, as it is not accounted for in the formula, thereby reducing error in the measurement.", explanationTamil: "இணைப்புகள் தடிமனான செப்புப் பட்டைகளால் செய்யப்படுவதன் காரணம், அவற்றின் மின்தடையைக் குறைப்பதாகும், ஏனெனில் அது சூத்திரத்தில் கணக்கில் கொள்ளப்படவில்லை, இதன் மூலம் அளவீட்டில் பிழை குறைகிறது." }
            ],
            commonPitfall: "Interchanging l₁ and l₂ in the ratio. Always be careful which side corresponds to which length.",
            commonPitfallTamil: "விகிதத்தில் l₁ மற்றும் l₂ ஐ மாற்றிவிடுவது. எந்தப் பக்கம் எந்த நீளத்திற்கு ஒத்திருக்கிறது என்பதில் எப்போதும் கவனமாக இருங்கள்."
        },
        {
            title: "Potentiometer Application",
            titleTamil: "மின்னழுத்தமானி பயன்பாடு",
            difficulty: 'Medium',
            problem: "A potentiometer wire of length 10 m and resistance 20 Ω is connected to a 6 V battery and a series resistance of 10 Ω. What is the potential gradient along the wire?",
            problemTamil: "10 மீ நீளம் மற்றும் 20 Ω மின்தடை கொண்ட ஒரு மின்னழுத்தமானி கம்பி, 6 V மின்கலம் மற்றும் 10 Ω தொடர் மின்தடையுடன் இணைக்கப்பட்டுள்ளது. கம்பியின் வழியே மின்னழுத்த சரிவு என்ன?",
            solutionSteps: [
                { step: 1, explanation: "First, calculate the total resistance of the primary circuit.", calculation: "R_total = R_wire + R_series = 20 Ω + 10 Ω = 30 Ω" },
                { step: 2, explanation: "Calculate the current flowing through the potentiometer wire using Ohm's law.", calculation: "I = V / R_total = 6 V / 30 Ω = 0.2 A" },
                { step: 3, explanation: "Calculate the potential difference across the potentiometer wire.", calculation: "V_wire = I * R_wire = 0.2 A * 20 Ω = 4 V" },
                { step: 4, explanation: "Potential gradient is the potential difference per unit length.", calculation: "Potential Gradient (k) = V_wire / L_wire = 4 V / 10 m = 0.4 V/m" }
            ],
            neetHack: "Potential gradient problems are very common. The key is to find the current in the primary circuit first, then find the voltage *only across the potentiometer wire*.",
            commonPitfall: "Using the total battery EMF (6V) to calculate the potential gradient instead of the potential drop across the wire (4V)."
        },
        {
            title: "Combination of Cells",
            titleTamil: "மின்கலன்களின் இணைப்பு",
            difficulty: 'Medium',
            problem: "Twelve cells, each of emf 1.5 V and internal resistance 0.5 Ω, are arranged in a matrix of m rows and n columns where mn=12. What arrangement will give the maximum current through an external resistance of 3 Ω?",
            problemTamil: "ஒவ்வொன்றும் 1.5 V மின்னியக்கு விசை மற்றும் 0.5 Ω அக மின்தடை கொண்ட பன்னிரண்டு மின்கலன்கள், mn=12 ஆக இருக்கும் ஒரு m வரிசைகள் மற்றும் n பத்திகள் கொண்ட அணியில் அடுக்கப்பட்டுள்ளன. 3 Ω புற மின்தடை வழியாக அதிகபட்ச மின்னோட்டத்தை எந்த அமைப்பு கொடுக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "The current in a mixed grouping of cells is given by I = nE / (R_ext + nr/m).", explanationTamil: "மின்கலன்களின் கலப்பு தொகுப்பில் மின்னோட்டம் I = nE / (R_ext + nr/m) என கொடுக்கப்பட்டுள்ளது." },
                { step: 2, explanation: "For the current to be maximum, the internal resistance of the combination must be equal to the external resistance.", calculation: "R_ext = nr/m => 3 = n(0.5)/m => 6m = n" },
                { step: 3, explanation: "We also have the condition mn = 12.", explanationTamil: "நம்மிடம் mn = 12 என்ற நிபந்தனையும் உள்ளது." },
                { step: 4, explanation: "Substitute n=6m into the condition: m(6m) = 12 => 6m² = 12 => m² = 2. This doesn't give an integer solution, meaning the exact condition cannot be met. We must check integer pairs of (m,n) that give mn=12.", explanationTamil: "நிபந்தனையில் n=6m ஐ பிரதியிடவும். இது ஒரு முழு எண் தீர்வைக் கொடுக்காது, அதாவது சரியான நிபந்தனையை பூர்த்தி செய்ய முடியாது. mn=12 ஐக் கொடுக்கும் (m,n) இன் முழு எண் ஜோடிகளை நாம் சரிபார்க்க வேண்டும்." },
                { step: 5, explanation: "The integer pairs for (m,n) are (1,12), (2,6), (3,4), (4,3), (6,2), (12,1). The pair closest to satisfying nr/m = R_ext (n*0.5/m = 3 => n=6m) is m=2, n=6. Let's check.", calculation: "With m=2, n=6, the internal resistance is nr/m = 6*0.5/2 = 1.5 Ω. The current I = (6 * 1.5) / (3 + 1.5) = 9/4.5 = 2 A." }
            ],
            neetHack: "For maximum current in a mixed grouping, the total internal resistance should be as close as possible to the external resistance. Calculate nr/m for different combinations and see which is closest to R_ext.",
            commonPitfall: "Assuming that the maximum power theorem (R_int = R_ext) always has an exact integer solution for m and n."
        },
        {
            title: "Drift Velocity Calculation",
            titleTamil: "இழுவை திசைவேகம் கணக்கீடு",
            difficulty: 'Easy',
            problem: "A copper wire has a cross-sectional area of 1.0 x 10⁻⁷ m² and carries a current of 1.5 A. Assuming the number density of free electrons is 8.5 x 10²⁸ m⁻³, calculate the drift speed of the electrons.",
            problemTamil: "ஒரு செப்பு கம்பி 1.0 x 10⁻⁷ மீ² குறுக்குவெட்டுப் பரப்பளவைக் கொண்டுள்ளது மற்றும் 1.5 A மின்னோட்டத்தைக் கொண்டு செல்கிறது. கட்டுறா எலக்ட்ரான்களின் எண் அடர்த்தி 8.5 x 10²⁸ மீ⁻³ எனில், எலக்ட்ரான்களின் இழுவை வேகத்தைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "Recall the relationship between current and drift velocity: I = n e A v_d.", explanationTamil: "மின்னோட்டம் மற்றும் இழுவை திசைவேகத்திற்கு இடையேயான தொடர்பை நினைவுகூர்க: I = n e A v_d." },
                { step: 2, explanation: "Rearrange the formula to solve for drift velocity v_d.", calculation: "v_d = I / (n e A)" },
                { step: 3, explanation: "Substitute the given values. e = 1.6 x 10⁻¹⁹ C.", calculation: "v_d = 1.5 / ( (8.5 \\times 10^{28}) \\times (1.6 \\times 10^{-19}) \\times (1.0 \\times 10^{-7}) )" },
                { step: 4, explanation: "Perform the calculation.", calculation: "v_d = 1.5 / (13.6 \\times 10^{2}) = 1.5 / 1360 \\approx 1.1 \\times 10^{-3} m/s \\text{ or } 1.1 \\text{ mm/s}" }
            ],
            neetHack: "Drift velocity is surprisingly slow, usually on the order of mm/s. If you get a very large number, you've likely made a calculation error, probably with the powers of 10.",
            commonPitfall: "Forgetting the charge of an electron (e) or making errors in exponent arithmetic."
        }
    ],
    mcqs: [
        { question: "Kirchhoff's first law (junction rule) is a statement of conservation of:", options: ["A. Energy", "B. Charge", "C. Momentum", "D. Angular momentum"], answer: "B. Charge", explanation: "The junction rule states that the sum of currents entering a junction equals the sum of currents leaving it, which implies that charge is conserved.", neetFrequency: 5 },
        { question: "The resistance of a wire is R ohms. If it is stretched to double its original length, its new resistance will be:", options: ["A. 2R", "B. 4R", "C. R/2", "D. R/4"], answer: "B. 4R", explanation: "When a wire is stretched, its length L doubles and its area A is halved (volume AL remains constant). New resistance R' = ρ(2L)/(A/2) = 4(ρL/A) = 4R.", neetFrequency: 4 },
        { question: "A potentiometer is an accurate and versatile device to make electrical measurements of EMF because the method involves:", options: ["A. A potential gradient", "B. A condition of no current flow through the galvanometer", "C. A combination of cells, galvanometer and resistances", "D. Cells"], answer: "B. A condition of no current flow through the galvanometer", explanation: "The null-deflection method ensures that no current is drawn from the cell whose EMF is being measured, giving a very accurate reading.", neetFrequency: 4 },
        { question: "The resistivity of a material depends on:", options: ["A. Its length", "B. Its thickness", "C. Its temperature", "D. Its shape"], answer: "C. Its temperature", explanation: "Resistivity is an intrinsic property of a material, but it changes with temperature. It does not depend on the dimensions (length, thickness, shape) of the object.", neetFrequency: 3 },
        { question: "In a Wheatstone bridge, if the battery and galvanometer are interchanged, then the deflection in the galvanometer will:", options: ["A. Change in previous direction", "B. Not change", "C. Change in opposite direction", "D. Become zero"], answer: "B. Not change", explanation: "The condition for a balanced Wheatstone bridge remains the same (P/Q = R/S) even if the positions of the battery and galvanometer are interchanged. The sensitivity might change, but the balance condition does not.", neetFrequency: 3 },
        { question: "Ohm's law is valid when the temperature of the conductor is:", options: ["A. Changing", "B. Constant", "C. Very high", "D. Very low"], answer: "B. Constant", explanation: "Ohm's law (V=IR) assumes that physical conditions like temperature are kept constant, as resistance changes with temperature.", neetFrequency: 2 },
        { question: "Two resistors R and 2R are connected in parallel in an electric circuit. The ratio of the heat generated in R and 2R is:", options: ["A. 1:2", "B. 2:1", "C. 4:1", "D. 1:4"], answer: "B. 2:1", explanation: "In a parallel circuit, the voltage V is the same across both. Heat generated H = V²/R * t. So, H is inversely proportional to R. H₁/H₂ = R₂/R₁ = 2R/R = 2/1.", neetFrequency: 4 },
        { question: "A wire of resistance 4Ω is stretched to twice its original length. The resistance of the stretched wire would be:", options: ["A. 2Ω", "B. 4Ω", "C. 8Ω", "D. 16Ω"], answer: "D. 16Ω", explanation: "As in a previous question, when length is doubled, area is halved. R' = ρ(2L)/(A/2) = 4R = 4 * 4Ω = 16Ω.", neetFrequency: 5 },
        { question: "The SI unit of specific resistance (resistivity) is:", options: ["A. Ω", "B. Ω m", "C. Ω m⁻¹", "D. Ω m²"], answer: "B. Ω m", explanation: "From R = ρL/A, ρ = RA/L. Unit is (Ω * m²)/m = Ω m.", neetFrequency: 1 },
        { question: "The internal resistance of an ideal cell is:", options: ["A. Zero", "B. Infinite", "C. High", "D. Low"], answer: "A. Zero", explanation: "An ideal cell has no internal resistance, meaning there is no voltage drop within the cell itself.", neetFrequency: 2 },
        { question: "To convert a galvanometer into an ammeter, one needs to connect a:", options: ["A. Low resistance in series", "B. High resistance in series", "C. Low resistance in parallel", "D. High resistance in parallel"], answer: "C. Low resistance in parallel", explanation: "A low resistance shunt is connected in parallel to bypass most of the current, allowing the galvanometer to measure a much larger total current.", neetFrequency: 4 },
        { question: "To convert a galvanometer into a voltmeter, one needs to connect a:", options: ["A. Low resistance in series", "B. High resistance in series", "C. Low resistance in parallel", "D. High resistance in parallel"], answer: "B. High resistance in series", explanation: "A high resistance is connected in series to limit the current flowing through the galvanometer when a high voltage is applied across the combination.", neetFrequency: 4 },
        { question: "The potential gradient of a potentiometer wire can be increased by:", options: ["A. Increasing its length", "B. Decreasing the current", "C. Increasing the current", "D. Increasing its area of cross-section"], answer: "C. Increasing the current", explanation: "Potential gradient = V/L = IR/L. It is directly proportional to the current I.", neetFrequency: 3 },
        { question: "In a meter bridge experiment, the null point is obtained at 20 cm from one end. The value of the unknown resistance, if the known resistance is 10 Ω, is:", options: ["A. 2.5 Ω", "B. 40 Ω", "C. 10 Ω", "D. 5 Ω"], answer: "A. 2.5 Ω", explanation: "From the Wheatstone principle, R/S = l₁/l₂. R/10 = 20/(100-20) = 20/80 = 1/4. R = 10/4 = 2.5 Ω.", neetFrequency: 5 },
        { question: "A current of 1 A is drawn by a filament of an electric bulb. Number of electrons passing through a cross-section of the filament in 16 seconds would be approximately:", options: ["A. 10²⁰", "B. 10¹⁶", "C. 10¹⁸", "D. 10²³"], answer: "A. 10²⁰", explanation: "Q = It = 1 * 16 = 16 C. Q = ne, so n = Q/e = 16 / (1.6 * 10⁻¹⁹) = 10 * 10¹⁹ = 10²⁰.", neetFrequency: 3 },
        { question: "Kirchhoff's second law is based on the law of conservation of:", options: ["A. Charge", "B. Energy", "C. Momentum", "D. Mass"], answer: "B. Energy", explanation: "The loop rule states that the sum of potential changes around a closed loop is zero, which is a statement of conservation of energy.", neetFrequency: 5 },
        { question: "The heat produced by a 100 W heater in 2 minutes is equal to:", options: ["A. 10.5 kJ", "B. 12.0 kJ", "C. 16.3 kJ", "D. 14.2 kJ"], answer: "B. 12.0 kJ", explanation: "Energy (Heat) = Power × Time = 100 W × (2 × 60 s) = 12000 J = 12.0 kJ.", neetFrequency: 2 },
        { question: "The specific resistance of a conductor increases with:", options: ["A. Increase in temperature", "B. Increase in cross-sectional area", "C. Decrease in length", "D. Decrease in cross-sectional area"], answer: "A. Increase in temperature", explanation: "For conductors, resistivity increases with temperature due to increased collisions of electrons with lattice ions.", neetFrequency: 3 },
        { question: "For a cell, the terminal voltage is equal to its emf when:", options: ["A. The cell is being charged", "B. The cell is being discharged", "C. The circuit is open", "D. The internal resistance is zero"], answer: "C. The circuit is open", explanation: "V = E - Ir. When the circuit is open, the current I is zero, so V = E.", neetFrequency: 4 },
        { question: "In the balanced condition of a Wheatstone bridge:", options: ["A. The current is zero in the battery", "B. The current is zero in the galvanometer", "C. The potential difference is zero across the battery", "D. The potential difference is zero across the arms"], answer: "B. The current is zero in the galvanometer", explanation: "The bridge is balanced when the potential at the two points connected by the galvanometer is equal, resulting in zero current flow through it.", neetFrequency: 3 },
        { question: "The slope of the V-I graph for a metallic conductor gives:", options: ["A. Resistance", "B. Resistivity", "C. Conductance", "D. Conductivity"], answer: "A. Resistance", explanation: "From V=IR, the slope V/I is equal to the resistance R.", neetFrequency: 2 },
        { question: "A current of 5 A is passing through a metallic wire of cross-sectional area 4 × 10⁻⁶ m². If the density of charge carriers is 5 × 10²⁶ m⁻³, the drift velocity is:", options: ["A. 1/16 m/s", "B. 1/32 m/s", "C. 1/64 m/s", "D. 1/128 m/s"], answer: "C. 1/64 m/s", explanation: "I = neAv_d. v_d = I/(neA) = 5 / (5e26 * 1.6e-19 * 4e-6) = 5 / (32 * 10¹) = 5/320 = 1/64 m/s.", neetFrequency: 4 },
        { question: "Two batteries of emf 4V and 8V with internal resistances 1Ω and 2Ω are connected in a circuit with a resistance of 9Ω as shown. The current and potential difference between points P and Q are:", options: ["A. 1/3 A, 3V", "B. 1/6 A, 4V", "C. 1/9 A, 3V", "D. 1/12 A, 5V"], answer: "A. 1/3 A, 3V", explanation: "The cells are in opposition. Net emf = 8-4 = 4V. Total resistance = 9+1+2 = 12Ω. Current I = 4/12 = 1/3 A. Potential difference across the 9Ω resistor V = IR = (1/3)*9 = 3V.", neetFrequency: 5 },
        { question: "The potentiometer is best for measuring voltage as:", options: ["A. it has a sensitive galvanometer", "B. it does not disturb the circuit it measures", "C. it is a null method", "D. both B and C"], answer: "D. both B and C", explanation: "It is a null method, so it draws no current from the circuit being measured, thus not disturbing its potential difference. Both B and C are correct and contribute to its accuracy.", neetFrequency: 3 },
        { question: "Drift velocity of electrons is of the order of:", options: ["A. 10⁻⁴ m/s", "B. 10⁶ m/s", "C. 10¹⁰ m/s", "D. 10⁻¹ m/s"], answer: "A. 10⁻⁴ m/s", explanation: "Despite high current, the average drift velocity of electrons is surprisingly slow, typically on the order of mm/s or 10⁻³ to 10⁻⁴ m/s.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "The resistance of a conductor increases with a rise in temperature.", reason: "The number of collisions between free electrons and lattice ions increases with temperature.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Increased temperature leads to greater thermal agitation of lattice ions, which increases the frequency of collisions and thus the resistance.", neetFrequency: 4 },
        { assertion: "Kirchhoff's junction law follows from the conservation of charge.", reason: "Kirchhoff's loop law follows from the conservation of energy.", answer: "B", explanation: "Both statements are true but the reason does not explain the assertion. They are two independent laws based on two different conservation principles.", neetFrequency: 3 },
        { assertion: "A potentiometer is preferred over a voltmeter for measuring the emf of a cell.", reason: "A potentiometer draws no current from the cell at the balance point.", answer: "A", explanation: "Assertion is true. Reason is also true and correctly explains why. A voltmeter always draws some current, causing a potential drop across the internal resistance, so it measures terminal voltage, not the true emf.", neetFrequency: 5 },
        { assertion: "In a series combination of resistors, the equivalent resistance is greater than the greatest individual resistance.", reason: "Resistances in series add up.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. R_eq = R₁ + R₂ + ... will always be greater than any individual R.", neetFrequency: 2 },
        { assertion: "Ohm's law is not applicable to semiconductors and electrolytes.", reason: "Semiconductors and electrolytes are not ohmic devices; their V-I relationship is non-linear.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation for the assertion. Ohm's law only applies to materials where V is directly proportional to I.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Ohm's Law", "(b) Kirchhoff's Junction Law", "(c) Kirchhoff's Loop Law", "(d) Wheatstone Bridge"], column2: ["(p) Conservation of Energy", "(q) Balanced condition R₁/R₂ = R₃/R₄", "(r) V = IR", "(s) Conservation of Charge"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching laws and principles with their corresponding equations or conservation laws." },
        { column1: ["(a) Resistivity", "(b) Conductance", "(c) Current Density", "(d) Mobility"], column2: ["(p) A/m²", "(q) Ω⁻¹", "(r) Ω m", "(s) m²/Vs"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching physical quantities with their SI units." },
        { column1: ["(a) Resistors in Series", "(b) Resistors in Parallel", "(c) Cells in Series", "(d) Cells in Parallel"], column2: ["(p) Same current", "(q) Same potential difference", "(r) Equivalent EMF is sum of EMFs", "(s) Equivalent internal resistance is complex"], answer: "a-p, b-q, c-r, d-s", explanation: "Matching circuit combinations with their key properties." },
        { column1: ["(a) Ammeter", "(b) Voltmeter", "(c) Potentiometer", "(d) Meter Bridge"], column2: ["(p) Measures EMF accurately", "(q) Based on Wheatstone bridge", "(r) Shunt resistance in parallel", "(s) High resistance in series"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching electrical instruments with their construction or principle." },
        { column1: ["(a) Ideal Voltmeter", "(b) Ideal Ammeter", "(c) Ideal Cell", "(d) Superconductor"], column2: ["(p) Zero internal resistance", "(q) Zero resistance", "(r) Infinite resistance", "(s) Zero resistance"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching ideal devices with their resistance properties. Note: Ideal ammeter and superconductor both have zero resistance." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "I = n e A v_d", description: "Current and Drift Velocity Relation", descriptionTamil: "மின்னோட்டம் மற்றும் இழுவை திசைவேகத் தொடர்பு" },
            { formula: "R = \\rho \\frac{L}{A}", description: "Resistance and Resistivity", descriptionTamil: "மின்தடை மற்றும் மின்தடை எண்" },
            { formula: "\\sum I = 0", description: "Kirchhoff's Junction Rule", descriptionTamil: "கிர்க்காஃப்பின் சந்தி விதி" },
            { formula: "\\sum \\Delta V = 0", description: "Kirchhoff's Loop Rule", descriptionTamil: "கிர்க்காஃப்பின் சுற்று விதி" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Ohm's law is fundamental but only applies to ohmic conductors under constant temperature.",
        "Kirchhoff's laws are universally applicable to any electrical circuit.",
        "The potentiometer is superior to the voltmeter for measuring EMF because it draws no current at balance.",
        "Understanding series and parallel combinations is crucial for simplifying complex circuits."
    ],
    mnemonics: [
        { text: "Kirchhoff's Current Law (KCL): 'Currents In = Currents Out'. Think of it as a water pipe junction; what flows in must flow out.", tamil: "கிர்க்காஃப் மின்னோட்ட விதி (KCL): 'உள்வரும் மின்னோட்டங்கள் = வெளியேறும் மின்னோட்டங்கள்'. இதை ஒரு நீர்க் குழாய் சந்திப்பாக நினைத்துப் பாருங்கள்; உள்ளே பாய்வது வெளியேற வேண்டும்." }
    ],
    neetTips: [
        { text: "For complex resistor networks (like cube problems), look for symmetry to simplify the circuit. Points at the same potential can be connected together.", tamil: "சிக்கலான மின்தடை வலையமைப்புகளுக்கு (கனசதுரக் கணக்குகள் போன்றவை), சுற்றை எளிதாக்க சமச்சீர்மையைத் தேடுங்கள். ஒரே மின்னழுத்தத்தில் உள்ள புள்ளிகளை ஒன்றாக இணைக்கலாம்." },
        { text: "In potentiometer problems, the first step is always to find the potential gradient (V/L) of the wire.", tamil: "மின்னழுத்தமானி கணக்குகளில், முதல் படி எப்போதும் கம்பியின் மின்னழுத்த சரிவைக் (V/L) கண்டுபிடிப்பதுதான்." }
    ],
    studentTip: {
        english: "When solving complex circuits with Kirchhoff's laws, be very systematic. Clearly mark your assumed current directions and loop paths on the diagram. Even if your assumed current direction is wrong, the math will work out and give you a negative answer, which just means the current flows the other way!",
        tamil: "கிர்க்காஃப் விதிகளைப் பயன்படுத்தி சிக்கலான மின்சுற்றுக்களைத் தீர்க்கும்போது, மிகவும் முறையாக இருங்கள். நீங்கள் கருதும் மின்னோட்ட திசைகளையும் சுற்றுப் பாதைகளையும் வரைபடத்தில் தெளிவாகக் குறிக்கவும். உங்கள் மின்னோட்ட திசை தவறாக இருந்தாலும், கணிதம் சரியாக வேலை செய்து உங்களுக்கு எதிர்மறை விடையைக் கொடுக்கும், அதாவது மின்னோட்டம் எதிர் திசையில் பாய்கிறது என்று அர்த்தம்!"
    },
    peerDiscussion: {
        english: "Discuss with your friends: Why is household wiring done in parallel and not in series? What would happen if all your home appliances were connected in series?",
        tamil: "உங்கள் நண்பர்களுடன் விவாதிக்கவும்: வீட்டு மின்சுற்றுகள் ஏன் தொடரிணைப்பில் இல்லாமல் பக்க இணைப்பில் செய்யப்படுகின்றன? உங்கள் வீட்டு உபகரணங்கள் அனைத்தும் தொடரிணைப்பில் இணைக்கப்பட்டால் என்ன நடக்கும்?"
    },
     validationReport: []
}
    
    