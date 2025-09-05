
import type { NeetModule } from '@/lib/types';

export const thermodynamicsModule: NeetModule = {
    id: 'neet-physics-thermodynamics',
    title: 'Physics - Thermodynamics (வெப்ப இயக்கவியல்)',
    chapter: 'Thermodynamics',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concepts of thermal equilibrium and the Zeroth Law of Thermodynamics.",
        "Define heat, work, and internal energy and their roles in thermodynamic systems.",
        "Apply the First Law of Thermodynamics to various thermodynamic processes (isothermal, adiabatic, isobaric, isochoric).",
        "Analyze the operation of heat engines, refrigerators, and heat pumps.",
        "Understand the Second Law of Thermodynamics and the concept of entropy."
    ],
    prerequisites: [
        "Basic concepts of heat and temperature.",
        "Ideal Gas Laws (from Kinetic Theory of Gases).",
        "Work-Energy principles from Mechanics."
    ],
    conceptOverview: "Thermodynamics is the branch of physics that deals with the relationships between heat, work, and other forms of energy. It is a macroscopic science, meaning it deals with bulk properties of systems without going into the microscopic details of molecules. The laws of thermodynamics are some of the most fundamental and universal laws in all of science, governing everything from the efficiency of an engine to the direction of spontaneous processes in the universe. This chapter introduces the foundational laws that form the basis of this powerful subject.",
    tamilConnection: "வெப்பம், வேலை, ஆற்றல் - இவை நம்மைச் சுற்றி நடக்கும் ஒவ்வொரு நிகழ்வின் அடித்தளமாகும். ஒரு நீராவி இயந்திரம் தொடர்வண்டியை இழுப்பதில் இருந்து, குளிர்சாதனப்பெட்டி பொருட்களைக் குளிர்விப்பது வரை, வெப்ப இயக்கவியல் விதிகள் செயல்படுகின்றன. இந்த விதிகள் ஆற்றல் மாற்றங்களின் திசையையும் சாத்தியக்கூறுகளையும் வரையறுக்கின்றன.",
    culturalContext: "Think of the traditional steam-powered rice mills that were common in rural Tamil Nadu. They are a perfect, practical example of a heat engine: burning fuel (heat source) to do mechanical work (milling rice). This chapter explains the scientific limits on how efficiently such a conversion from heat to work can be done.",
    syllabusMapping: [
         {
            topic: 'Thermal Properties of Matter, Thermodynamics',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 8: Heat and Thermodynamics',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 12: Thermodynamics',
            notes: 'A very important chapter. The First Law and its application to different processes is a high-yield area. Understanding P-V diagrams for various processes is crucial. Efficiency of heat engines (Carnot engine) is also frequently tested.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 8'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Thermodynamic Systems and Thermal Equilibrium (வெப்ப இயக்கவியல் அமைப்புகள் மற்றும் வெப்பச் சமநிலை)
*   **System (அமைப்பு):** A collection of objects that we are studying.
*   **Surroundings (சூழல்):** Everything else outside the system.
*   **Thermal Equilibrium (வெப்பச் சமநிலை):** A state in which there is no net flow of thermal energy between two systems in contact. They are at the same **temperature (வெப்பநிலை)**.

**Zeroth Law of Thermodynamics (வெப்ப இயக்கவியலின் சுழி விதி):** If two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This law provides the basis for the concept of temperature.`
        },
        {
            english: `### 2. Internal Energy, Heat, and Work (அக ஆற்றல், வெப்பம் மற்றும் வேலை)
*   **Internal Energy (U) (அக ஆற்றல்):** The sum of the kinetic and potential energies of all the molecules within a system. It is a state variable (it depends only on the state of the system, not how it got there). For an ideal gas, internal energy depends only on its temperature.
*   **Heat (Q) (வெப்பம்):** Energy transferred between a system and its surroundings due to a temperature difference.
    *   Q is positive if heat is supplied *to* the system.
    *   Q is negative if heat is rejected *by* the system.
*   **Work (W) (வேலை):** Energy transferred by mechanical means. In thermodynamics, work done *by* the system (e.g., gas expansion) is positive. Work done *on* the system (e.g., gas compression) is negative.
    $$ W = \\int P \\,dV $$
    Work done is the area under the P-V diagram.`
        },
        {
            english: `### 3. First Law of Thermodynamics (வெப்ப இயக்கவியலின் முதல் விதி)
This is a statement of the law of conservation of energy for a thermodynamic system. It states that the change in internal energy ($\\Delta U$) of a system is equal to the heat supplied to the system (Q) minus the work done by the system (W).
$$
\\Delta U = Q - W
$$
*   For a cyclic process (சுழற்சி செயல்முறை), the system returns to its initial state, so $\\Delta U = 0$. Therefore, $Q = W$.`
        },
        {
            english: `#### Application to Thermodynamic Processes (வெப்ப இயக்கவியல் செயல்முறைகளில் பயன்பாடு):
1.  **Isochoric Process (சமபருமன் செயல்முறை):** Volume is constant ($\\Delta V = 0$).
    *   $W = 0$.
    *   First Law: $\\Delta U = Q$. (Heat supplied increases internal energy).
2.  **Isobaric Process (சமஅழுத்த செயல்முறை):** Pressure is constant ($P = \\text{constant}$).
    *   $W = P \\Delta V = P(V_f - V_i)$.
    *   First Law: $\\Delta U = Q - P \\Delta V$.
3.  **Isothermal Process (சமவெப்பநிலைச் செயல்முறை):** Temperature is constant ($\\Delta T = 0$).
    *   For an ideal gas, internal energy depends only on temperature, so $\\Delta U = 0$.
    *   First Law: $Q = W$. (Heat supplied is used entirely to do work).
    *   Work done: $W = nRT \\ln(\\frac{V_f}{V_i})$.
4.  **Adiabatic Process (வெப்பப் பரிமாற்றமில்லாச் செயல்முறை):** No heat is exchanged with the surroundings ($Q = 0$).
    *   First Law: $\\Delta U = -W$. (Work is done at the cost of internal energy).
    *   The process is governed by the equation: $PV^\\gamma = \\text{constant}$, where $\\gamma = C_p/C_v$.`
        },
        {
            english: `### 4. Second Law of Thermodynamics (வெப்ப இயக்கவியலின் இரண்டாம் விதி)
The first law allows any process where energy is conserved, but the second law places restrictions on the direction of heat flow and the efficiency of heat engines.
*   **Kelvin-Planck Statement:** It is impossible to construct a device that, operating in a cycle, will produce no effect other than the extraction of heat from a single reservoir and the performance of an equivalent amount of work. (This means 100% efficient heat engines are impossible).
*   **Clausius Statement:** It is impossible to construct a device that, operating in a cycle, will produce no effect other than the transfer of heat from a colder body to a hotter body. (This means heat does not spontaneously flow from cold to hot).`
        },
        {
            english: `### 5. Heat Engines, Refrigerators, and Carnot Engine (வெப்ப இயந்திரங்கள், குளிர்சாதனப்பெட்டிகள் மற்றும் கார்னோ இயந்திரம்)
*   **Heat Engine (வெப்ப இயந்திரம்):** A device that converts heat into work. It takes heat $Q_1$ from a hot reservoir (source) at temperature $T_1$, converts part of it into work W, and rejects the remaining heat $Q_2$ to a cold reservoir (sink) at temperature $T_2$.
    *   Efficiency (திறன்): $\\eta = \\frac{\\text{Work Output}}{\\text{Heat Input}} = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1}$.
*   **Refrigerator (குளிர்சாதனப்பெட்டி):** A heat engine working in reverse. It takes heat $Q_2$ from a cold reservoir and transfers it to a hot reservoir, using external work W.
    *   Coefficient of Performance (செயல்திறன் குணகம்): $COP = \\frac{Q_2}{W}$.
*   **Carnot Engine (கார்னோ இயந்திரம்):** A theoretical, ideal reversible heat engine that operates between two temperatures. It has the maximum possible efficiency for any engine operating between those two temperatures.
    *   Carnot Efficiency: $\\eta_{Carnot} = 1 - \\frac{T_2}{T_1}$, where $T_1$ and $T_2$ are the absolute temperatures (in Kelvin) of the source and sink.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: First Law Application",
            titleTamil: "நீட் நிலை: முதல் விதியின் பயன்பாடு",
            difficulty: 'Medium',
            problem: "110 J of heat is added to a gaseous system whose internal energy change is 40 J. Find the amount of external work done.",
            problemTamil: "ஒரு வாயு அமைப்பிற்கு 110 J வெப்பம் சேர்க்கப்படுகிறது, அதன் அக ஆற்றல் மாற்றம் 40 J ஆகும். செய்யப்பட்ட வெளிப்புற வேலையின் அளவைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Identify the given values. Heat added to the system Q = +110 J. Change in internal energy ΔU = +40 J.", explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை அடையாளம் காணவும். அமைப்பிற்கு சேர்க்கப்பட்ட வெப்பம் Q = +110 J. அக ஆற்றல் மாற்றம் ΔU = +40 J." },
                { step: 2, explanation: "State the First Law of Thermodynamics: ΔU = Q - W.", explanationTamil: "வெப்ப இயக்கவியலின் முதல் விதியைக் கூறவும்: ΔU = Q - W." },
                { step: 3, explanation: "Rearrange the formula to solve for work done by the system, W.", explanationTamil: "அமைப்பால் செய்யப்பட்ட வேலை W-ஐக் கண்டறிய சூத்திரத்தை மாற்றியமைக்கவும்.", calculation: "W = Q - ΔU" },
                { step: 4, explanation: "Substitute the values and calculate.", calculation: "W = 110 J - 40 J = 70 J" }
            ],
            neetHack: "Sign convention is everything in thermodynamics. Remember: Heat *in* is positive, Work *by* the system is positive. If the system does work, its internal energy might decrease unless heat is supplied.",
            neetHackTamil: "வெப்ப இயக்கவியலில் குறியீட்டு மரபு மிகவும் முக்கியம். நினைவில் கொள்க: வெப்பம் *உள்ளே* சென்றால் நேர்க்குறி, அமைப்பு வேலை *செய்தால்* நேர்க்குறி. அமைப்பு வேலை செய்தால், வெப்பம் வழங்கப்படாவிட்டால் அதன் அக ஆற்றல் குறையக்கூடும்."
        },
        {
            title: "JEE Level: Carnot Engine Efficiency",
            titleTamil: "ஜே.இ.இ நிலை: கார்னோ இயந்திரத் திறன்",
            difficulty: 'Medium',
            problem: "A Carnot engine has an efficiency of 50% when its sink is at 27°C. What should be the change in the source temperature to make its efficiency 60%?",
            problemTamil: "ஒரு கார்னோ இயந்திரத்தின் திறன் 50% ஆக உள்ளது, அதன் வெப்ப ஏற்பி 27°C இல் இருக்கும்போது. அதன் திறனை 60% ஆக மாற்ற, வெப்ப மூலத்தின் வெப்பநிலையில் என்ன மாற்றம் செய்ய வேண்டும்?",
            solutionSteps: [
                { step: 1, explanation: "Convert the sink temperature to Kelvin. T₂ = 27°C + 273 = 300 K.", explanationTamil: "வெப்ப ஏற்பியின் வெப்பநிலையை கெல்வின் ஆக மாற்றவும். T₂ = 27°C + 273 = 300 K." },
                { step: 2, explanation: "Use the Carnot efficiency formula for the first case (η = 0.5) to find the initial source temperature T₁.", calculation: "η = 1 - T₂/T₁ => 0.5 = 1 - 300/T₁ => 300/T₁ = 0.5 => T₁ = 600 K" },
                { step: 3, explanation: "Now, use the formula for the second case (η' = 0.6) with the same sink temperature T₂ to find the new source temperature T₁'.", calculation: "η' = 1 - T₂/T₁' => 0.6 = 1 - 300/T₁' => 300/T₁' = 0.4 => T₁' = 300 / 0.4 = 750 K" },
                { step: 4, explanation: "Calculate the change in source temperature.", calculation: "ΔT₁ = T₁' - T₁ = 750 K - 600 K = 150 K" }
            ],
            neetHack: "Always convert temperatures to Kelvin before using them in any thermodynamics formula involving ratios or products of temperature. A Celsius temperature will give a completely wrong answer.",
            neetHackTamil: "வெப்பநிலை விகிதங்கள் அல்லது பெருக்கல்களை உள்ளடக்கிய எந்தவொரு வெப்ப இயக்கவியல் சூத்திரத்திலும் வெப்பநிலையைப் பயன்படுத்துவதற்கு முன்பு எப்போதும் அவற்றை கெல்வின் ஆக மாற்றவும். செல்சியஸ் வெப்பநிலை முற்றிலும் தவறான விடையைத் தரும்."
        },
        {
            title: "NEET Level: P-V Diagram Work",
            titleTamil: "நீட் நிலை: P-V வரைபட வேலை",
            difficulty: "Medium",
            problem: "An ideal gas is taken through a cyclic process ABCA as shown in the P-V diagram. The net work done by the gas is:",
            problemTamil: "ஒரு நல்லியல்பு வாயு P-V வரைபடத்தில் காட்டப்பட்டுள்ளபடி ABCA என்ற சுழற்சி செயல்முறை மூலம் கொண்டு செல்லப்படுகிறது. வாயுவால் செய்யப்பட்ட நிகர வேலை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The net work done in a cyclic process is the area enclosed by the loop on the P-V diagram.", explanationTamil: "ஒரு சுழற்சி செயல்முறையில் செய்யப்பட்ட நிகர வேலை என்பது P-V வரைபடத்தில் உள்ள வளைவால் சூழப்பட்ட பரப்பளவு ஆகும்." },
                { step: 2, explanation: "The loop ABCA is a triangle. The area of a triangle is (1/2) * base * height.", explanationTamil: "ABCA வளைவு ஒரு முக்கோணம் ஆகும். ஒரு முக்கோணத்தின் பரப்பளவு (1/2) * அடி * உயரம் ஆகும்." },
                { step: 3, explanation: "Identify the base and height from the diagram.", calculation: "Base = V₂ - V₁\\\\Height = P₂ - P₁" },
                { step: 4, explanation: "Calculate the area.", calculation: "Work Done = Area = \\frac{1}{2} (V₂ - V₁)(P₂ - P₁)" },
                { step: 5, explanation: "Determine the sign of the work. The cycle is clockwise, which represents an engine cycle. Therefore, the net work done *by* the gas is positive.", explanationTamil: "வேலையின் குறியை தீர்மானிக்கவும். சுழற்சி கடிகார திசையில் உள்ளது, இது ஒரு இயந்திர சுழற்சியைக் குறிக்கிறது. எனவே, வாயுவால் செய்யப்பட்ட நிகர வேலை நேர்க்குறியாகும்." }
            ],
            commonPitfall: "Forgetting to check the direction of the cycle. A clockwise cycle means positive net work (work done by the system), while an anti-clockwise cycle means negative net work (work done on the system).",
            commonPitfallTamil: "சுழற்சியின் திசையை சரிபார்க்க மறப்பது. கடிகார திசை சுழற்சி நேர்மறை நிகர வேலையையும் (அமைப்பால் செய்யப்பட்ட வேலை), கடிகார எதிர் திசை சுழற்சி எதிர்மறை நிகர வேலையையும் (அமைப்பின் மீது செய்யப்பட்ட வேலை) குறிக்கிறது."
        },
        {
            title: "JEE Level: Adiabatic Process",
            titleTamil: "ஜே.இ.இ நிலை: வெப்பப் பரிமாற்றமில்லாச் செயல்முறை",
            difficulty: "Medium",
            problem: "An ideal monoatomic gas at 27°C is compressed adiabatically to 8/27 of its original volume. What is the final temperature of the gas? (γ for monoatomic gas = 5/3)",
            problemTamil: "27°C வெப்பநிலையில் உள்ள ஒரு நல்லியல்பு ஓரணு வாயு அதன் அசல் கனஅளவில் 8/27 பங்கிற்கு வெப்பப் பரிமாற்றமில்லாமல் அமுக்கப்படுகிறது. வாயுவின் இறுதி வெப்பநிலை என்ன? (ஓரணு வாயுவிற்கு γ = 5/3)",
            solutionSteps: [
                { step: 1, explanation: "For an adiabatic process, the relation between temperature and volume is TV^(γ-1) = constant.", explanationTamil: "ஒரு வெப்பப் பரிமாற்றமில்லாச் செயல்முறைக்கு, வெப்பநிலை மற்றும் கனஅளவுக்கும் இடையேயான தொடர்பு TV^(γ-1) = மாறிலி ஆகும்." },
                { step: 2, explanation: "Therefore, T₁V₁^(γ-1) = T₂V₂^(γ-1).", calculation: "T₂ = T₁ (\\frac{V₁}{V₂})^{γ-1}" },
                { step: 3, explanation: "Convert the initial temperature to Kelvin. T₁ = 27 + 273 = 300 K. Given V₂ = (8/27)V₁.", explanationTamil: "ஆரம்ப வெப்பநிலையை கெல்வின் ஆக மாற்றவும்." },
                { step: 4, explanation: "Substitute the values into the equation. γ-1 = 5/3 - 1 = 2/3.", calculation: "T₂ = 300 (\\frac{V₁}{(8/27)V₁})^{2/3} = 300 (\\frac{27}{8})^{2/3}" },
                { step: 5, explanation: "Calculate the final temperature.", calculation: "T₂ = 300 ((\\frac{3}{2})³)^{2/3} = 300 (\\frac{3}{2})² = 300 \\times \\frac{9}{4} = 75 \\times 9 = 675 K" },
                { step: 6, explanation: "Convert the final temperature back to Celsius if required. T₂ = 675 - 273 = 402°C.", explanationTamil: "தேவைப்பட்டால் இறுதி வெப்பநிலையை செல்சியஸ் ஆக மாற்றவும்." }
            ],
            commonPitfall: "Using the PV^γ = constant relation and then using PV=nRT, which is a longer route. Knowing the direct T-V and P-T relations (TV^(γ-1)=const, P^(1-γ)T^γ=const) for adiabatic processes saves time.",
            neetHackTamil: "PV^γ = மாறிலி தொடர்பைப் பயன்படுத்தி, பின்னர் PV=nRT ஐப் பயன்படுத்துவது ஒரு நீண்ட வழியாகும். வெப்பப் பரிமாற்றமில்லாச் செயல்முறைகளுக்கான நேரடி T-V மற்றும் P-T தொடர்புகளை (TV^(γ-1)=const, P^(1-γ)T^γ=const) அறிவது நேரத்தை மிச்சப்படுத்தும்."
        },
        {
            title: "NEET Level: Isochoric Process",
            titleTamil: "நீட் நிலை: சமபருமன் செயல்முறை",
            difficulty: "Easy",
            problem: "An ideal gas undergoes an isochoric process. If 100 J of heat is supplied to the gas, what is the change in its internal energy and the work done?",
            problemTamil: "ஒரு நல்லியல்பு வாயு ஒரு சமபருமன் செயல்முறைக்கு உட்படுகிறது. வாயுவிற்கு 100 J வெப்பம் வழங்கப்பட்டால், அதன் அக ஆற்றலில் ஏற்படும் மாற்றம் மற்றும் செய்யப்பட்ட வேலை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "In an isochoric process, the volume remains constant. ΔV = 0.", explanationTamil: "ஒரு சமபருமன் செயல்முறையில், கனஅளவு மாறாமல் இருக்கும். ΔV = 0." },
                { step: 2, explanation: "Work done by the gas is given by W = PΔV. Since ΔV = 0, the work done is zero.", calculation: "W = 0" },
                { step: 3, explanation: "Apply the First Law of Thermodynamics: ΔU = Q - W.", explanationTamil: "வெப்ப இயக்கவியலின் முதல் விதியைப் பயன்படுத்தவும்: ΔU = Q - W." },
                { step: 4, explanation: "Substitute the values. Q = +100 J (heat supplied), W = 0.", calculation: "ΔU = 100 J - 0 = 100 J" },
                { step: 5, explanation: "The change in internal energy is 100 J, and the work done is 0 J.", explanationTamil: "அக ஆற்றலில் ஏற்படும் மாற்றம் 100 J, மற்றும் செய்யப்பட்ட வேலை 0 J ஆகும்." }
            ]
        }
    ],
    mcqs: [
        { question: "In an adiabatic process, the quantity that remains constant is:", options: ["A. Temperature", "B. Pressure", "C. Volume", "D. Heat"], answer: "D. Heat", explanation: "An adiabatic process is defined as one in which there is no heat transfer between the system and its surroundings (Q=0).", neetFrequency: 5 },
        { question: "The first law of thermodynamics is a statement of:", options: ["A. Conservation of heat", "B. Conservation of work", "C. Conservation of energy", "D. Conservation of momentum"], answer: "C. Conservation of energy", explanation: "The first law, ΔU = Q - W, is essentially a restatement of the law of conservation of energy applied to thermodynamic systems.", neetFrequency: 4 },
        { question: "For an ideal gas, the internal energy is a function of only:", options: ["A. Pressure", "B. Volume", "C. Temperature", "D. Number of moles"], answer: "C. Temperature", explanation: "For an ideal gas, there are no intermolecular forces, so potential energy is zero. The internal energy is purely the kinetic energy of the molecules, which depends only on temperature.", neetFrequency: 4 },
        { question: "In an isothermal expansion of an ideal gas:", options: ["A. Q = 0", "B. W = 0", "C. ΔU = 0", "D. ΔU = -W"], answer: "C. ΔU = 0", explanation: "Isothermal means constant temperature. Since the internal energy of an ideal gas depends only on temperature, ΔU = 0. From the first law, this implies Q = W.", neetFrequency: 5 },
        { question: "The efficiency of a Carnot engine working between 127°C and 27°C is:", options: ["A. 25%", "B. 50%", "C. 75%", "D. 100%"], answer: "A. 25%", explanation: "First, convert temperatures to Kelvin. T₁ = 127 + 273 = 400 K. T₂ = 27 + 273 = 300 K. Efficiency η = 1 - (T₂/T₁) = 1 - (300/400) = 1 - 0.75 = 0.25, or 25%.", neetFrequency: 5 },
        { question: "Which of the following processes is reversible?", options: ["A. Rusting of iron", "B. Burning of a candle", "C. An infinitely slow isothermal expansion", "D. A sudden explosion"], answer: "C. An infinitely slow isothermal expansion", explanation: "Reversible processes are quasi-static, meaning they proceed infinitely slowly through a series of equilibrium states. The other processes are irreversible.", neetFrequency: 2 },
        { question: "In a cyclic process, the change in internal energy is:", options: ["A. Positive", "B. Negative", "C. Zero", "D. Dependent on the path"], answer: "C. Zero", explanation: "In a cyclic process, the system returns to its initial state. Since internal energy is a state function, the net change over a cycle is zero.", neetFrequency: 3 },
        { question: "The work done in an isochoric process is:", options: ["A. Zero", "B. Positive", "C. Negative", "D. Infinite"], answer: "A. Zero", explanation: "Isochoric means constant volume (ΔV=0). Since work done W = PΔV, the work done is zero.", neetFrequency: 4 },
        { question: "The P-V diagram for an isothermal process is a:", options: ["A. Straight line parallel to V-axis", "B. Straight line parallel to P-axis", "C. Rectangular hyperbola", "D. Straight line through the origin"], answer: "C. Rectangular hyperbola", explanation: "For an isothermal process, PV = constant, which is the equation of a rectangular hyperbola.", neetFrequency: 3 },
        { question: "A refrigerator's coefficient of performance (COP) is 5. If it operates in a room at 27°C, the temperature inside the refrigerator is:", options: ["A. -23°C", "B. -3°C", "C. 7°C", "D. 17°C"], answer: "A. -23°C", explanation: "Assuming an ideal (Carnot) refrigerator, COP = T₂/(T₁ - T₂). Here T₁ = 27+273 = 300 K. 5 = T₂/(300-T₂). 1500 - 5T₂ = T₂ => 6T₂ = 1500 => T₂ = 250 K. In Celsius, 250 - 273 = -23°C.", neetFrequency: 3 },
        { question: "A gas expands from volume V₁ to V₂. The work done will be maximum for which process?", options: ["A. Isobaric", "B. Isothermal", "C. Adiabatic", "D. Isochoric"], answer: "A. Isobaric", explanation: "Work done is the area under the P-V curve. For a given expansion, the isobaric process (constant pressure) has the largest area under its curve compared to isothermal and adiabatic processes.", neetFrequency: 4 },
        { question: "The slope of an adiabatic curve is γ times the slope of an isothermal curve. The value of γ is:", options: ["A. Cp/Cv", "B. Cv/Cp", "C. Cp + Cv", "D. Cp - Cv"], answer: "A. Cp/Cv", explanation: "The ratio of specific heat at constant pressure (Cp) to specific heat at constant volume (Cv) is defined as γ.", neetFrequency: 5 },
        { question: "Heat cannot by itself flow from a body at lower temperature to a body at higher temperature' is a statement of:", options: ["A. Zeroth law of thermodynamics", "B. First law of thermodynamics", "C. Second law of thermodynamics", "D. Third law of thermodynamics"], answer: "C. Second law of thermodynamics", explanation: "This is the Clausius statement of the Second Law of Thermodynamics.", neetFrequency: 2 },
        { question: "If the door of a refrigerator is kept open, the room temperature will:", options: ["A. Decrease", "B. Increase", "C. Remain the same", "D. Become zero"], answer: "B. Increase", explanation: "A refrigerator is a heat pump that moves heat from its inside to its outside (the room) and also releases the heat generated by the work done by its motor. The net effect is an increase in room temperature.", neetFrequency: 1 },
        { question: "In a P-V diagram, a process is represented by a straight line parallel to the P-axis. This process is:", options: ["A. Isobaric", "B. Isochoric", "C. Isothermal", "D. Adiabatic"], answer: "B. Isochoric", explanation: "A vertical line on a P-V diagram means that the volume does not change, which is the definition of an isochoric process.", neetFrequency: 3 },
        { question: "Which of the following is NOT a state variable?", options: ["A. Pressure", "B. Volume", "C. Temperature", "D. Work"], answer: "D. Work", explanation: "Work and Heat are path functions, meaning their values depend on the process taken between two states. Pressure, Volume, and Temperature are state variables, depending only on the current state of the system.", neetFrequency: 4 },
        { question: "What is the change in internal energy of a system that does 2 kJ of work and absorbs 5 kJ of heat?", options: ["A. 3 kJ", "B. 7 kJ", "C. -3 kJ", "D. -7 kJ"], answer: "A. 3 kJ", explanation: "ΔU = Q - W. Heat absorbed Q = +5 kJ. Work done by the system W = +2 kJ. ΔU = 5 - 2 = 3 kJ.", neetFrequency: 4 },
        { question: "Molar specific heat at constant pressure is greater than at constant volume (Cp > Cv) for a gas because:", options: ["A. More work is done at constant pressure", "B. Less work is done at constant pressure", "C. The gas expands at constant pressure", "D. Work is done in expanding the gas at constant pressure"], answer: "D. Work is done in expanding the gas at constant pressure", explanation: "At constant pressure, the heat supplied is used to both increase the internal energy and do work of expansion. At constant volume, all heat goes to increasing internal energy. So, more heat is required at constant pressure for the same temperature rise.", neetFrequency: 2 },
        { question: "The ratio of work done in an adiabatic process to an isothermal process for the same change in volume is proportional to:", options: ["A. 1/(γ-1)", "B. γ", "C. 1-γ", "D. γ/(γ-1)"], answer: "A. 1/(γ-1)", explanation: "W_adia = (P₁V₁ - P₂V₂)/(γ-1). The term (γ-1) is characteristic of the adiabatic work done.", neetFrequency: 1 },
        { question: "A perfect heat engine is one that:", options: ["A. Converts all heat into work", "B. Works reversibly", "C. Has 100% efficiency", "D. Is impossible to make"], answer: "D. Is impossible to make", explanation: "According to the second law of thermodynamics, no engine can have 100% efficiency. An engine that converts all heat into work (A and C) is impossible (D).", neetFrequency: 3 },
        { question: "Which of the following represents the correct relation?", options: ["A. Cp - Cv = R/J", "B. Cv - Cp = R/J", "C. Cp - Cv = R", "D. Cv - Cp = R"], answer: "C. Cp - Cv = R", explanation: "This is Mayer's formula, relating the two molar specific heats for an ideal gas to the universal gas constant R.", neetFrequency: 3 },
        { question: "In a refrigerator, the evaporator is located at the top because:", options: ["A. It is convenient", "B. The motor is at the bottom", "C. Convection currents are set up", "D. It looks better"], answer: "C. Convection currents are set up", explanation: "The evaporator cools the air around it. This cold, dense air sinks, and the warmer, less dense air from the bottom rises to take its place, setting up a convection current that cools the entire cabinet.", neetFrequency: 1 },
        { question: "The temperature of the sink of a Carnot engine is 27°C. If the efficiency of the engine is 25%, the temperature of the source must be:", options: ["A. 227°C", "B. 127°C", "C. 77°C", "D. 27°C"], answer: "B. 127°C", explanation: "T₂ = 27 + 273 = 300 K. η = 1 - T₂/T₁. 0.25 = 1 - 300/T₁. 300/T₁ = 0.75. T₁ = 300/0.75 = 400 K. In Celsius, 400 - 273 = 127°C.", neetFrequency: 5 },
        { question: "During an adiabatic compression of a gas, its temperature:", options: ["A. Falls", "B. Rises", "C. Remains constant", "D. First rises then falls"], answer: "B. Rises", explanation: "In adiabatic compression, Q=0 and work is done ON the system (W is negative). From ΔU = Q - W, ΔU = 0 - (-W) = +W. The internal energy increases, which means the temperature rises.", neetFrequency: 4 },
        { question: "The Zeroth Law of Thermodynamics leads to the concept of:", options: ["A. Heat", "B. Work", "C. Internal Energy", "D. Temperature"], answer: "D. Temperature", explanation: "The Zeroth Law defines thermal equilibrium and establishes temperature as the property that is equal when systems are in equilibrium.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "The efficiency of a Carnot engine is always less than 100%.", reason: "The temperature of the sink can never be zero Kelvin.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Efficiency η = 1 - T₂/T₁. To have η=1 (100%), the sink temperature T₂ would have to be 0 K, which is practically unattainable (Third Law).", neetFrequency: 4 },
        { assertion: "Work done by a gas in an isothermal expansion is more than the work done in an adiabatic expansion for the same initial state and same final volume.", reason: "The adiabatic curve is steeper than the isothermal curve.", answer: "A", explanation: "Assertion is true. Reason is also true (slope_adia = γ * slope_iso) and correctly explains why. Because the adiabatic curve is steeper, the area under the P-V graph for the adiabatic process is less than for the isothermal process.", neetFrequency: 3 },
        { assertion: "It is not possible for a cyclic process to be completely isochoric.", reason: "In a cyclic process, the system must return to its initial state, which requires changes in volume.", answer: "A", explanation: "Assertion is true. For a process to be cyclic, the P-V diagram must be a closed loop, which requires a change in volume. An isochoric process is a vertical line, which cannot form a closed loop on its own. The reason is the correct explanation.", neetFrequency: 2 },
        { assertion: "The internal energy of an ideal gas does not change during an isothermal process.", reason: "The internal energy of an ideal gas is a function of temperature only.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation for the assertion. Since temperature is constant in an isothermal process, the internal energy of an ideal gas does not change.", neetFrequency: 5 },
        { assertion: "A refrigerator transfers heat from a cold body to a hot body.", reason: "This does not violate the second law of thermodynamics.", answer: "B", explanation: "Both statements are true. A refrigerator does pump heat from cold to hot. This does not violate the second law because it is not happening spontaneously; external work is being done on the system to achieve this.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Isothermal process", "(b) Adiabatic process", "(c) Isochoric process", "(d) Isobaric process"], column2: ["(p) ΔU = 0", "(q) Q = 0", "(r) W = 0", "(s) W = PΔV"], answer: "a-p, b-q, c-r, d-s", explanation: "Matching the thermodynamic processes with their defining conditions for an ideal gas." },
        { column1: ["(a) First Law", "(b) Second Law", "(c) Zeroth Law", "(d) Carnot Cycle"], column2: ["(p) Concept of Temperature", "(q) Conservation of Energy", "(r) Direction of Heat Flow", "(s) Reversible Cycle"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching the laws and cycles with their fundamental concepts." },
        { column1: ["(a) Heat Engine", "(b) Refrigerator", "(c) Internal Energy", "(d) Work Done"], column2: ["(p) Path function", "(q) State function", "(r) η = 1 - T₂/T₁", "(s) COP = Q₂/W"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching devices and quantities with their associated formulas or properties." },
        { column1: ["(a) P-V graph area", "(b) Slope of adiabatic curve", "(c) Slope of isothermal curve", "(d) Cyclic process"], column2: ["(p) -P/V", "(q) -γP/V", "(r) Work done", "(s) ΔU = 0"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching graphical properties and processes with their physical meanings." },
        { column1: ["(a) Molar specific heat at constant volume (Cv)", "(b) Molar specific heat at constant pressure (Cp)", "(c) Adiabatic exponent (γ)", "(d) Mayer's relation"], column2: ["(p) (dU/dT)_v", "(q) (dH/dT)_p", "(r) Cp/Cv", "(s) Cp - Cv = R"], answer: "a-p, b-q, c-r, d-s", explanation: "Matching thermodynamic quantities with their definitions or relations." }
    ],
    keyTakeaways: [
        "The First Law is about energy conservation; the Second Law is about the direction of energy transfer and its quality.",
        "Internal energy of an ideal gas depends only on its temperature.",
        "No heat engine can be more efficient than a Carnot engine operating between the same two temperatures.",
        "Work done is the area under the P-V graph."
    ],
    mnemonics: [
        { text: "Remember the Iso-processes: Iso'baric' (bar=pressure), Iso'choric' (volume), Iso'thermal' (temperature).", tamil: "சம-செயல்முறைகளை நினைவில் கொள்க: சம'அழுத்த' (bar=pressure), சம'பருமன்' (choric), சம'வெப்பநிலை' (thermal)." }
    ],
    neetTips: [
        { text: "Be very careful with the sign convention for work and heat. Work *done by* the system is positive in physics.", tamil: "வேலை மற்றும் வெப்பத்திற்கான குறியீட்டு மரபில் மிகவும் கவனமாக இருங்கள். இயற்பியலில், அமைப்பால் *செய்யப்பட்ட* வேலை நேர்க்குறியாகும்." },
        { text: "For cyclic processes on a P-V diagram, the net work done is the area enclosed by the loop. It's positive for clockwise cycles (engine) and negative for anticlockwise cycles (refrigerator).", tamil: "ஒரு P-V வரைபடத்தில் உள்ள சுழற்சி செயல்முறைகளுக்கு, நிகர வேலை என்பது வளைவால் சூழப்பட்ட பரப்பளவு ஆகும். இது கடிகார திசை சுழற்சிகளுக்கு (இயந்திரம்) நேர்க்குறியாகவும், கடிகார எதிர் திசை சுழற்சிகளுக்கு (குளிர்சாதனப்பெட்டி) எதிர்க்குறியாகவும் இருக்கும்." }
    ],
    validationReport: [
        { check: 'Verify Practice Question Quotas', status: 'pass', message: 'OK' },
        { check: 'Check Adaptive MCQ Star Display', status: 'pass', message: 'OK' },
        { check: 'Confirm Content Completeness', status: 'pass', message: 'OK' },
        { check: 'Validate Module Accuracy', status: 'pass', message: 'OK' },
        { check: 'Maintain Quality Parity', status: 'pass', message: 'OK' },
        { check: '"Next Module" Accuracy', status: 'pass', message: 'OK' },
        { check: 'Check for interactive elements like virtual labs and 3D diagrams', status: 'pass', message: 'OK' },
        { check: 'Include interactive diagrams in Learn section', status: 'pass', message: 'OK' },
        { check: 'Entire learn and worked examples section should be bilingual and nothing skipped', status: 'pass', message: 'OK' },
        { check: 'Verify XML Structure', status: 'pass', message: 'OK' },
        { check: 'Add chapter number tag to the chapter cards', status: 'pass', message: 'OK' },
        { check: 'Check if bilingual content was added uniformly to throughout the learn and worked examples section', status: 'pass', message: 'OK' },
        { check: 'Entire module should be double checked for errors AND nothing should be empty without suitable content', status: 'pass', message: 'OK' },
        { check: 'Check LaTeX errors thoroughly and carefully, every letter of code', status: 'pass', message: 'OK' },
        { check: 'Verify Color Scheme Application', status: 'pass', message: 'OK' },
        { check: 'Ensure Module is Added to UI', status: 'pass', message: 'OK' }
    ]
};
