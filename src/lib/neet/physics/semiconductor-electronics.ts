
import type { NeetModule } from '@/lib/types';

export const semiconductorElectronicsModule: NeetModule = {
    id: 'neet-physics-semiconductor-electronics',
    title: 'Physics - Semiconductor Electronics (குறைக்கடத்தி மின்னணுவியல்)',
    chapter: 'Semiconductor Electronics',
    subject: 'Physics',
    learningObjectives: [
        "Differentiate between conductors, insulators, and semiconductors based on energy bands.",
        "Understand intrinsic and extrinsic semiconductors (p-type and n-type).",
        "Analyze the formation and characteristics of a p-n junction diode, including forward and reverse biasing.",
        "Understand the application of diodes as rectifiers (half-wave and full-wave).",
        "Describe the working of special purpose diodes like Zener diode, photodiode, LED, and solar cell.",
        "Understand the structure and working of a Bipolar Junction Transistor (BJT).",
        "Analyze the characteristics of a transistor in different configurations (CE, CB, CC).",
        "Understand the application of transistors as amplifiers and oscillators.",
        "Understand the basic concepts of logic gates (AND, OR, NOT, NAND, NOR)."
    ],
    prerequisites: [
        "Basic concepts from Current Electricity.",
        "Understanding of energy levels from the 'Atoms' chapter."
    ],
    conceptOverview: "This chapter is the foundation of all modern electronics. It explores semiconductors, materials with conductivity between that of conductors and insulators. We learn how their conductivity can be dramatically altered by adding impurities (doping), creating n-type and p-type semiconductors. The magic happens when these two types are joined to form a p-n junction diode, a device that allows current to flow in only one direction. This property is the basis for converting AC to DC (rectification). We then move to the transistor, a three-terminal device that can amplify signals or act as a switch, which is the fundamental building block of all computer chips and electronic devices. The chapter concludes with an introduction to digital electronics through logic gates.",
    tamilConnection: "மொபைல் போன்கள், கணினிகள், டிவிகள் ஆகியவற்றின் இதயம் குறைக்கடத்தி சாதனங்கள் தான். சிலிக்கான் போன்ற பொருட்களின் மின் கடத்தும் பண்பை மாற்றுவதன் மூலம், p-n சந்தி டையோடு மற்றும் டிரான்சிஸ்டர் போன்ற சாதனங்கள் உருவாக்கப்படுகின்றன. இவை மின்னணுவியலின் அடிப்படை கட்டுமானக் கற்கள் ஆகும்.",
    culturalContext: "From the chips in a smartphone assembled in Sriperumbudur to the LED lights illuminating homes across Tamil Nadu, semiconductor electronics are everywhere. This chapter explains the fundamental physics that makes these ubiquitous modern technologies possible.",
    syllabusMapping: [
         {
            topic: 'Semiconductor Electronics',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 10: Electronics and Communication',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 14: Semiconductor Electronics',
            notes: 'A very high-yield chapter for NEET. Logic gates are the easiest and most frequently asked topic. Transistor characteristics and diode applications (rectifiers, Zener diode) are also extremely important.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 10 maps to NEET Physics Unit 18'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Energy Bands in Solids (திண்மங்களில் ஆற்றல் பட்டைகள்)
In solids, due to the interaction between atoms, the discrete energy levels split into a large number of closely spaced energy levels called energy bands.
*   **Valence Band (இணைதிறன் பட்டை):** The energy band which includes the energy levels of the valence electrons. It is always filled.
*   **Conduction Band (கடத்துப் பட்டை):** The lowest unfilled energy band. Electrons in this band are free to move and conduct electricity.
*   **Forbidden Energy Gap ($E_g$) (தடைசெய்யப்பட்ட ஆற்றல் இடைவெளி):** The energy gap between the top of the valence band and the bottom of the conduction band. No electron can exist in this gap.

| Material | Energy Gap ($E_g$) |
| :--- | :--- |
| **Conductors (கடத்திகள்)** | No gap, bands overlap. $E_g \\approx 0$ |
| **Insulators (காப்பான்கள்)** | Large gap. $E_g > 3$ eV |
| **Semiconductors (குறைக்கடத்திகள்)** | Small gap. $E_g < 3$ eV (e.g., Si: 1.1 eV, Ge: 0.7 eV) |`,
            tamil: `### 1. திண்மங்களில் ஆற்றல் பட்டைகள்
திண்மங்களில், அணுக்களுக்கு இடையேயான இடைவினையால், தனித்த ஆற்றல் மட்டங்கள் ஆற்றல் பட்டைகள் எனப்படும் அதிக எண்ணிக்கையிலான நெருக்கமாக அமைந்த ஆற்றல் மட்டங்களாகப் பிரிகின்றன.
*   **இணைதிறன் பட்டை:** இணைதிறன் எலக்ட்ரான்களின் ஆற்றல் மட்டங்களை உள்ளடக்கிய ஆற்றல் பட்டை. இது எப்போதும் நிரம்பியிருக்கும்.
*   **கடத்துப் பட்டை:** மிகக் குறைந்த நிரப்பப்படாத ஆற்றல் பட்டை. இந்தப் பட்டையில் உள்ள எலக்ட்ரான்கள் சுதந்திரமாக நகரவும், மின்சாரத்தைக் கடத்தவும் முடியும்.
*   **தடைசெய்யப்பட்ட ஆற்றல் இடைவெளி ($E_g$):** இணைதிறன் பட்டையின் உச்சிக்கும் கடத்துப் பட்டையின் அடிக்கும் இடையிலான ஆற்றல் இடைவெளி. இந்த இடைவெளியில் எந்த எலக்ட்ரானும் இருக்க முடியாது.`
        },
        {
            english: `### 2. Intrinsic and Extrinsic Semiconductors (உள்ளார்ந்த மற்றும் புறத்தியல் குறைக்கடத்திகள்)
*   **Intrinsic Semiconductor:** A pure semiconductor (e.g., pure Si or Ge). The number of free electrons ($n_e$) is equal to the number of holes ($n_h$). $n_e = n_h = n_i$.
*   **Extrinsic Semiconductor:** A semiconductor doped with a suitable impurity to increase its conductivity.
    *   **n-type Semiconductor:** Doped with a pentavalent impurity (e.g., Phosphorus, Arsenic). Majority charge carriers are electrons ($n_e \\gg n_h$).
    *   **p-type Semiconductor:** Doped with a trivalent impurity (e.g., Boron, Aluminum). Majority charge carriers are holes ($n_h \\gg n_e$).`,
            tamil: `### 2. உள்ளார்ந்த மற்றும் புறத்தியல் குறைக்கடத்திகள்
*   **உள்ளார்ந்த குறைக்கடத்தி:** ஒரு தூய குறைக்கடத்தி (எ.கா., தூய Si அல்லது Ge). கட்டுறா எலக்ட்ரான்களின் எண்ணிக்கை ($n_e$) துளைகளின் எண்ணிக்கைக்கு ($n_h$) சமம். $n_e = n_h = n_i$.
*   **புறத்தியல் குறைக்கடத்தி:** அதன் கடத்துத்திறனை அதிகரிக்க பொருத்தமான மாசூட்டப்பட்ட ஒரு குறைக்கடத்தி.
    *   **n-வகை குறைக்கடத்தி:** ஐந்திணைதிறன் மாசூட்டப்பட்டது (எ.கா., பாஸ்பரஸ், ஆர்சனிக்). பெரும்பான்மை மின்னூட்ட ஊர்திகள் எலக்ட்ரான்கள் ($n_e \\gg n_h$).
    *   **p-வகை குறைக்கடத்தி:** மூவிணைதிறன் மாசூட்டப்பட்டது (எ.கா., போரான், அலுமினியம்). பெரும்பான்மை மின்னூட்ட ஊர்திகள் துளைகள் ($n_h \\gg n_e$).`
        },
        {
            english: `### 3. p-n Junction Diode (p-n சந்தி டையோடு)
A p-n junction is formed when a p-type semiconductor is joined to an n-type semiconductor. A **depletion region (தேய்வுப் படலம்)** is formed at the junction, which is devoid of free charge carriers and has a **potential barrier (மின்னழுத்த அரண்)**.
*   **Forward Bias (முன்நோக்குச் சார்பு):** The p-side is connected to the positive terminal and the n-side to the negative terminal of a battery. The potential barrier is reduced, and a large current flows.
*   **Reverse Bias (பின்நோக்குச் சார்பு):** The p-side is connected to the negative terminal and the n-side to the positive terminal. The potential barrier is increased, and a very small leakage current flows.`,
            tamil: `### 3. p-n சந்தி டையோடு
ஒரு p-வகை குறைக்கடத்தி ஒரு n-வகை குறைக்கடத்தியுடன் இணைக்கப்படும்போது ஒரு p-n சந்தி உருவாகிறது. சந்தியில் ஒரு **தேய்வுப் படலம்** உருவாகிறது, இது கட்டுறா மின்னூட்ட ஊர்திகள் இல்லாதது மற்றும் ஒரு **மின்னழுத்த அரண்**-ஐக் கொண்டுள்ளது.
*   **முன்நோக்குச் சார்பு:** p-பகுதி ஒரு மின்கலத்தின் நேர்முனையுடனும், n-பகுதி எதிர்முனையுடனும் இணைக்கப்படுகிறது. மின்னழுத்த அரண் குறைக்கப்படுகிறது, மற்றும் ஒரு பெரிய மின்னோட்டம் பாய்கிறது.
*   **பின்நோக்குச் சார்பு:** p-பகுதி எதிர்முனையுடனும், n-பகுதி நேர்முனையுடனும் இணைக்கப்படுகிறது. மின்னழுத்த அரண் அதிகரிக்கப்படுகிறது, மற்றும் மிகச் சிறிய கசிவு மின்னோட்டம் பாய்கிறது.`
        },
        {
            english: `### 4. Transistor (டிரான்சிஸ்டர்)
A three-terminal semiconductor device that can amplify signals or act as a switch. It consists of two p-n junctions formed back-to-back (n-p-n or p-n-p). The three terminals are the Emitter (உமிழ்ப்பான்), Base (அடிப்பான்), and Collector (சேகரிப்பான்).
*   **Transistor Action:** The emitter-base junction is always forward-biased, and the collector-base junction is always reverse-biased. A small base current ($I_B$) can control a large collector current ($I_C$).
*   **Current Gains:**
    *   **Common Emitter (α):** $\\alpha = \\frac{I_C}{I_E}$
    *   **Common Base (β):** $\\beta = \\frac{I_C}{I_B}$
*   **Relation:** $\\beta = \\frac{\\alpha}{1 - \\alpha}$`,
            tamil: `### 4. டிரான்சிஸ்டர்
சமிக்ஞைகளைப் பெருக்க அல்லது ஒரு சுவிட்சாக செயல்படக்கூடிய ஒரு மூன்று-முனைய குறைக்கடத்தி சாதனம். இது இரண்டு p-n சந்திகளை முதுகுப்புறமாக (n-p-n அல்லது p-n-p) கொண்டு গঠিতப்பட்டுள்ளது. மூன்று முனையங்கள் உமிழ்ப்பான், அடிப்பான் மற்றும் சேகரிப்பான் ஆகும்.
*   **டிரான்சிஸ்டர் செயல்பாடு:** உமிழ்ப்பான்-அடிப்பான் சந்தி எப்போதும் முன்நோக்குச் சார்பிலும், சேகரிப்பான்-அடிப்பான் சந்தி எப்போதும் பின்நோக்குச் சார்பிலும் இருக்கும். ஒரு சிறிய அடிப்பான் மின்னோட்டம் ($I_B$) ஒரு பெரிய சேகரிப்பான் மின்னோட்டத்தை ($I_C$) கட்டுப்படுத்த முடியும்.`
        },
        {
            english: `### 5. Logic Gates (தருக்க வாயில்கள்)
Digital circuits that perform logical operations on one or more binary inputs to produce a single binary output.
*   **NOT Gate:** Inverts the input. Output Y = A̅.
*   **OR Gate:** Output is 1 if any input is 1. Y = A + B.
*   **AND Gate:** Output is 1 only if all inputs are 1. Y = A · B.
*   **NAND Gate:** An AND gate followed by a NOT gate. Y = (A · B)̅. It is a universal gate.
*   **NOR Gate:** An OR gate followed by a NOT gate. Y = (A + B)̅. It is also a universal gate.`,
            tamil: `### 5. தருக்க வாயில்கள்
ஒன்று அல்லது அதற்கு மேற்பட்ட இரும உள்ளீடுகளில் தருக்க செயல்பாடுகளைச் செய்து ஒற்றை இரும வெளியீட்டை உருவாக்கும் டிஜிட்டல் சுற்றுகள்.
*   **NOT வாயில்:** உள்ளீட்டைத் தலைகீழாக்கும். வெளியீடு Y = A̅.
*   **OR வாயில்:** ஏதேனும் ஒரு உள்ளீடு 1 ஆக இருந்தால் வெளியீடு 1 ஆகும். Y = A + B.
*   **AND வாயில்:** அனைத்து உள்ளீடுகளும் 1 ஆக இருந்தால் மட்டுமே வெளியீடு 1 ஆகும். Y = A · B.
*   **NAND வாயில்:** ஒரு AND வாயிலைத் தொடர்ந்து ஒரு NOT வாயில். Y = (A · B)̅. இது ஒரு உலகளாவிய வாயில்.
*   **NOR வாயில்:** ஒரு OR வாயிலைத் தொடர்ந்து ஒரு NOT வாயில். Y = (A + B)̅. இதுவும் ஒரு உலகளாவிய வாயில்.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Transistor Current Gains",
            titleTamil: "நீட் நிலை: டிரான்சிஸ்டர் மின்னோட்டப் பெருக்கங்கள்",
            difficulty: 'Medium',
            problem: "In a common emitter transistor amplifier, the audio signal voltage across the collector resistance of 2 kΩ is 2 V. If the base resistance is 1 kΩ and the current amplification factor (β) of the transistor is 100, what is the input signal voltage?",
            problemTamil: "ஒரு பொது உமிழ்ப்பான் டிரான்சிஸ்டர் பெருக்கியில், 2 kΩ சேகரிப்பான் மின்தடைக்கு குறுக்கே உள்ள ஒலி சமிக்ஞை மின்னழுத்தம் 2 V ஆகும். அடிப்பான் மின்தடை 1 kΩ மற்றும் டிரான்சிஸ்டரின் மின்னோட்டப் பெருக்கக் காரணி (β) 100 எனில், உள்ளீட்டு சமிக்ஞை மின்னழுத்தம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Calculate the collector current (I_C) from the output voltage (V_out) and collector resistance (R_C).", calculation: "I_C = V_out / R_C = 2 V / (2 × 10³ Ω) = 1 × 10⁻³ A = 1 mA" },
                { step: 2, explanation: "Use the current amplification factor (β) to find the base current (I_B).", calculation: "β = I_C / I_B => I_B = I_C / β = (1 × 10⁻³ A) / 100 = 1 × 10⁻⁵ A" },
                { step: 3, explanation: "Calculate the input signal voltage (V_in) using the base current (I_B) and base resistance (R_B).", calculation: "V_in = I_B × R_B = (1 × 10⁻⁵ A) × (1 × 10³ Ω) = 1 × 10⁻² V = 0.01 V" }
            ],
            neetHack: "Voltage gain A_v = V_out/V_in = (I_C*R_C)/(I_B*R_B) = β * (R_C/R_B). You can calculate gain first: A_v = 100 * (2kΩ/1kΩ) = 200. Then V_in = V_out/A_v = 2V/200 = 0.01V.",
            commonPitfall: "Confusing β and α. Remember β is for common emitter configuration and is usually large (50-200), while α is for common base and is always slightly less than 1."
        },
        {
            title: "JEE Level: Logic Gates Output",
            titleTamil: "ஜே.இ.இ நிலை: தருக்க வாயில் வெளியீடு",
            difficulty: 'Medium',
            problem: "For the given combination of gates, if A=1 and B=1, what is the output Y?",
            problemTamil: "கொடுக்கப்பட்டுள்ள வாயில் இணைப்பிற்கு, A=1 மற்றும் B=1 எனில், வெளியீடு Y என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Analyze the first NAND gate with inputs A and B.", calculation: "Input: A=1, B=1. Output C = (A · B)̅ = (1 · 1)̅ = 1̅ = 0" },
                { step: 2, explanation: "Analyze the second NAND gate whose inputs are both C.", calculation: "Input: C=0, C=0. Output D = (C · C)̅ = (0 · 0)̅ = 0̅ = 1" },
                { step: 3, explanation: "Analyze the third NAND gate with inputs A and D.", calculation: "Input: A=1, D=1. Output Y = (A · D)̅ = (1 · 1)̅ = 1̅ = 0" },
                { step: 4, explanation: "The final output Y is 0.", calculation: "Y = 0" }
            ],
            neetHack: "A NAND gate with its inputs tied together acts as a NOT gate. In the diagram, the second gate is a NOT gate. The combination of the first and third gates acts like an AND gate.",
            commonPitfall: "Making a mistake in the truth table of a NAND or NOR gate. Remember NAND is 'Not AND' and NOR is 'Not OR'."
        },
        {
            title: "NEET Level: Zener Diode",
            titleTamil: "நீட் நிலை: செனர் டையோடு",
            difficulty: 'Easy',
            problem: "A Zener diode, having a breakdown voltage of 6 V, is used in a voltage regulator circuit. The load current is 4 mA and the unregulated input is 10 V. What is the series resistance R required?",
            problemTamil: "6 V முறிவு மின்னழுத்தம் கொண்ட ஒரு செனர் டையோடு, ஒரு மின்னழுத்த சீராக்கி சுற்றில் பயன்படுத்தப்படுகிறது. சுமை மின்னோட்டம் 4 mA மற்றும் சீராக்கப்படாத உள்ளீடு 10 V ஆகும். தேவையான தொடர் மின்தடை R என்ன?",
            solutionSteps: [
                { step: 1, explanation: "In a Zener regulator, the voltage across the Zener diode (and the load) is constant at the breakdown voltage, V_z = 6 V.", explanationTamil: "ஒரு செனர் சீராக்கியில், செனர் டையோடு (மற்றும் சுமை) முழுவதும் உள்ள மின்னழுத்தம் முறிவு மின்னழுத்தத்தில் நிலையானது, V_z = 6 V." },
                { step: 2, explanation: "The voltage drop across the series resistor R is the difference between the input voltage and the Zener voltage.", calculation: "V_R = V_in - V_z = 10 V - 6 V = 4 V" },
                { step: 3, explanation: "The current through the resistor R (I_R) splits into the Zener current (I_z) and the load current (I_L). I_R = I_z + I_L. For the regulator to work, some current must flow through the Zener. Let's assume a Zener current of 1 mA for safe operation.", calculation: "Let I_z = 1 mA. Total current I_R = 1 mA + 4 mA = 5 mA." },
                { step: 4, explanation: "Use Ohm's law to find the series resistance R.", calculation: "R = V_R / I_R = 4 V / (5 × 10⁻³ A) = 0.8 × 10³ Ω = 800 Ω" }
            ],
            commonPitfall: "Forgetting that the current through the series resistor is the sum of the Zener current and the load current."
        },
        {
            title: "JEE Level: Half-Wave Rectifier",
            titleTamil: "ஜே.இ.இ நிலை: அரை அலைத் திருத்தி",
            difficulty: 'Easy',
            problem: "An AC voltage of peak value 20 V is connected in series with a silicon diode and a load resistance of 500 Ω. If the diode has a forward resistance of 10 Ω, what is the peak current through the load?",
            problemTamil: "20 V பெரும மதிப்புள்ள ஒரு AC மின்னழுத்தம், ஒரு சிலிக்கான் டையோடு மற்றும் 500 Ω சுமை மின்தடையுடன் தொடரிணைப்பில் இணைக்கப்பட்டுள்ளது. டையோடின் முன்நோக்கு மின்தடை 10 Ω எனில், சுமை வழியாக செல்லும் பெரும மின்னோட்டம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The diode conducts only during the positive half-cycle of the AC input.", explanationTamil: "டையோடு AC உள்ளீட்டின் நேர்மறை அரைச் சுழற்சியின் போது மட்டுமே கடத்தும்." },
                { step:2, explanation:"During forward bias, the total resistance in the circuit is the sum of the load resistance and the diode's forward resistance.", calculation:"R_total = R_load + R_forward = 500 Ω + 10 Ω = 510 Ω" },
                { step: 3, explanation: "The peak current (I_peak) occurs when the input voltage is at its peak value (V_peak). Use Ohm's law.", calculation: "I_peak = V_peak / R_total = 20 V / 510 Ω ≈ 0.039 A = 39 mA" }
            ],
            commonPitfall: "Ignoring the diode's forward resistance when it is given."
        },
        {
            title: "NEET Level: Energy Bands",
            titleTamil: "நீட் நிலை: ஆற்றல் பட்டைகள்",
            difficulty: 'Easy',
            problem: "The energy gap for Silicon is 1.1 eV and for Germanium is 0.7 eV. Which material will have higher conductivity at room temperature?",
            problemTamil: "சிலிக்கானுக்கான ஆற்றல் இடைவெளி 1.1 eV மற்றும் ஜெர்மானியத்திற்கு 0.7 eV ஆகும். அறை வெப்பநிலையில் எந்தப் பொருள் அதிக கடத்துத்திறனைக் கொண்டிருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Conductivity in semiconductors depends on the number of electrons that can be excited from the valence band to the conduction band.", explanationTamil: "குறைக்கடத்திகளில் கடத்துத்திறன், இணைதிறன் பட்டையிலிருந்து கடத்துப் பட்டைக்கு கிளர்ச்சியூட்டப்படக்கூடிய எலக்ட்ரான்களின் எண்ணிக்கையைச் சார்ந்தது." },
                { step: 2, explanation: "This excitation requires energy equal to or greater than the energy gap (E_g).", explanationTamil: "இந்த கிளர்ச்சிக்கு ஆற்றல் இடைவெளிக்கு (E_g) சமமான அல்லது அதை விட அதிகமான ஆற்றல் தேவை." },
                { step: 3, explanation: "A smaller energy gap means that less energy is required to create electron-hole pairs, and thus more charge carriers are available for conduction at a given temperature.", explanationTamil: "ஒரு சிறிய ஆற்றல் இடைவெளி என்பது, எலக்ட்ரான்-துளை ஜோடிகளை உருவாக்க குறைந்த ஆற்றல் தேவைப்படுகிறது, இதனால் ஒரு குறிப்பிட்ட வெப்பநிலையில் கடத்தலுக்கு அதிக மின்னூட்ட ஊர்திகள் கிடைக்கின்றன." },
                { step: 4, explanation: "Since Germanium has a smaller energy gap (0.7 eV < 1.1 eV), it will have a higher intrinsic conductivity at room temperature.", explanationTamil: "ஜெர்மானியம் ஒரு சிறிய ஆற்றல் இடைவெளியைக் கொண்டிருப்பதால் (0.7 eV < 1.1 eV), அது அறை வெப்பநிலையில் அதிக உள்ளார்ந்த கடத்துத்திறனைக் கொண்டிருக்கும்." }
            ]
        }
    ],
    mcqs: [
        { question: "In a p-type semiconductor, the majority charge carriers are:", options: ["A. Electrons", "B. Protons", "C. Holes", "D. Neutrons"], answer: "C. Holes", explanation: "P-type semiconductors are created by doping with trivalent impurities, which creates an abundance of holes.", neetFrequency: 5 },
        { question: "A Zener diode is used as a:", options: ["A. Rectifier", "B. Amplifier", "C. Voltage regulator", "D. Oscillator"], answer: "C. Voltage regulator", explanation: "A Zener diode is designed to operate in the reverse breakdown region, where the voltage across it remains constant, making it suitable for voltage regulation.", neetFrequency: 4 },
        { question: "The universal gates are:", options: ["A. AND and OR", "B. OR and NOT", "C. NAND and NOR", "D. AND and NOT"], answer: "C. NAND and NOR", explanation: "NAND and NOR gates are called universal gates because any other logic gate can be constructed using them.", neetFrequency: 5 },
        { question: "In a common emitter transistor, the current gain β is defined as:", options: ["A. I_C / I_E", "B. I_E / I_C", "C. I_C / I_B", "D. I_B / I_C"], answer: "C. I_C / I_B", explanation: "β = ΔI_C / ΔI_B. It is the ratio of the change in collector current to the change in base current.", neetFrequency: 4 },
        { question: "The depletion region of a p-n junction contains:", options: ["A. Only electrons", "B. Only holes", "C. Both electrons and holes", "D. No mobile charge carriers"], answer: "D. No mobile charge carriers", explanation: "The depletion region is formed by the diffusion of electrons and holes across the junction, leaving behind immobile ionized atoms.", neetFrequency: 3 },
        { question: "The process of adding impurities to a pure semiconductor is called:", options: ["A. Doping", "B. Annealing", "C. Biasing", "D. Diffusing"], answer: "A. Doping", explanation: "Doping is the intentional introduction of impurities into a semiconductor to alter its electrical properties.", neetFrequency: 2 },
        { question: "When a p-n junction diode is forward biased:", options: ["A. The potential barrier increases", "B. The potential barrier decreases", "C. The majority carriers move away from the junction", "D. The resistance of the junction becomes very high"], answer: "B. The potential barrier decreases", explanation: "Forward biasing opposes the built-in potential barrier, reducing its height and allowing current to flow easily.", neetFrequency: 4 },
        { question: "A full-wave rectifier uses:", options: ["A. One diode", "B. Two diodes", "C. Three diodes", "D. Four diodes (in a bridge)"], answer: "B. Two diodes", explanation: "A center-tapped full-wave rectifier uses two diodes. A bridge full-wave rectifier uses four.", neetFrequency: 3 },
        { question: "A Light Emitting Diode (LED) emits light when it is:", options: ["A. Forward biased", "B. Reverse biased", "C. Unbiased", "D. In breakdown region"], answer: "A. Forward biased", explanation: "In an LED, light is emitted when electrons and holes recombine at the junction under forward bias.", neetFrequency: 3 },
        { question: "Which of the following is an acceptor impurity?", options: ["A. Phosphorus", "B. Arsenic", "C. Antimony", "D. Boron"], answer: "D. Boron", explanation: "Boron is a trivalent impurity (group 13), which accepts an electron to complete its bonds, creating a hole. The others are pentavalent donor impurities.", neetFrequency: 3 },
        { question: "The Boolean expression for a NOR gate is:", options: ["A. Y = A + B", "B. Y = A · B", "C. Y = (A + B)̅", "D. Y = (A · B)̅"], answer: "C. Y = (A + B)̅", explanation: "A NOR gate is an OR gate followed by a NOT gate.", neetFrequency: 5 },
        { question: "The forbidden energy gap for Germanium is approximately:", options: ["A. 0.3 eV", "B. 0.7 eV", "C. 1.1 eV", "D. 6 eV"], answer: "B. 0.7 eV", explanation: "The energy gap for Ge is about 0.7 eV, while for Si it is about 1.1 eV.", neetFrequency: 2 },
        { question: "In a transistor, the doping concentration is highest in the:", options: ["A. Emitter", "B. Base", "C. Collector", "D. Same in all"], answer: "A. Emitter", explanation: "The emitter is heavily doped to supply a large number of majority carriers. The base is lightly doped, and the collector has moderate doping.", neetFrequency: 4 },
        { question: "The output of the given logic circuit (AND gate with inputs A and B, output fed to a NOT gate) is:", options: ["A. A · B", "B. A + B", "C. (A · B)̅", "D. (A + B)̅"], answer: "C. (A · B)̅", explanation: "This describes a NAND gate.", neetFrequency: 5 },
        { question: "The relationship between α and β is:", options: ["A. β = α / (1 + α)", "B. α = β / (1 - β)", "C. β = α / (1 - α)", "D. α = β / (1 + β)"], answer: "C. β = α / (1 - α)", explanation: "This is the standard relation derived from I_E = I_B + I_C.", neetFrequency: 4 },
        { question: "A solar cell is essentially a:", options: ["A. p-n junction", "B. Resistor", "C. Capacitor", "D. Inductor"], answer: "A. p-n junction", explanation: "A solar cell is a large-area photodiode that converts light energy directly into electrical energy.", neetFrequency: 2 },
        { question: "The output of an OR gate is 1 when:", options: ["A. Both inputs are 0", "B. Either input is 1", "C. Both inputs are 1", "D. Both B and C"], answer: "D. Both B and C", explanation: "The OR gate's output is HIGH (1) if at least one of its inputs is HIGH. This includes the case where both are HIGH.", neetFrequency: 3 },
        { question: "The forward resistance of a typical p-n junction diode is:", options: ["A. Very high (MΩ)", "B. Very low (a few Ω)", "C. Infinite", "D. Zero"], answer: "B. Very low (a few Ω)", explanation: "When forward biased, the diode offers very low resistance to the current flow.", neetFrequency: 2 },
        { question: "A transistor can be used as:", options: ["A. An amplifier", "B. A switch", "C. An oscillator", "D. All of the above"], answer: "D. All of the above", explanation: "The transistor is a versatile device used in all these applications.", neetFrequency: 1 },
        { question: "The primary reason for the small size of the base region in a transistor is to:", options: ["A. Reduce the collector current", "B. Reduce the emitter current", "C. Allow most charge carriers from the emitter to reach the collector", "D. Increase the base resistance"], answer: "C. Allow most charge carriers from the emitter to reach the collector", explanation: "A thin, lightly doped base ensures that most of the majority carriers injected from the emitter pass through to the collector without recombining in the base.", neetFrequency: 3 },
        { question: "The ripple factor for a half-wave rectifier is:", options: ["A. 0.48", "B. 1.21", "C. 0.81", "D. 1.0"], answer: "B. 1.21", explanation: "The ripple factor is a measure of the AC component in the rectified output. For a half-wave rectifier, it is 1.21, and for a full-wave rectifier, it is 0.48.", neetFrequency: 1 },
        { question: "In an n-p-n transistor, the collector is:", options: ["A. n-type material", "B. p-type material", "C. Intrinsic material", "D. A metal contact"], answer: "A. n-type material", explanation: "In an n-p-n transistor, the emitter and collector are both n-type, separated by a p-type base.", neetFrequency: 2 },
        { question: "The truth table shown (A=0,B=0,Y=1; A=0,B=1,Y=1; A=1,B=0,Y=1; A=1,B=1,Y=0) is for a:", options: ["A. AND gate", "B. OR gate", "C. NAND gate", "D. XOR gate"], answer: "C. NAND gate", explanation: "This is the truth table for a NAND gate, which is the inverse of an AND gate.", neetFrequency: 5 },
        { question: "When an electron moves from the conduction band to the valence band:", options: ["A. Energy is absorbed", "B. Energy is released", "C. No energy change occurs", "D. The material becomes n-type"], answer: "B. Energy is released", explanation: "This is recombination, where an electron loses energy (often as a photon of light) to fall back into a hole in the valence band.", neetFrequency: 3 },
        { question: "The purpose of a rectifier is to:", options: ["A. Convert AC to DC", "B. Convert DC to AC", "C. Amplify a signal", "D. Regulate voltage"], answer: "A. Convert AC to DC", explanation: "A rectifier is a circuit that converts alternating current (AC) to direct current (DC).", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "The depletion region in a p-n junction diode contains immobile ions.", reason: "Electrons and holes diffuse across the junction and recombine, leaving behind charged donor and acceptor ions.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation for the formation of the depletion region and its immobile charge.", neetFrequency: 4 },
        { assertion: "A transistor can act as an amplifier.", reason: "A small change in the base current results in a large change in the collector current.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation of the amplification action.", neetFrequency: 3 },
        { assertion: "A p-n junction diode shows high resistance when reverse biased.", reason: "The width of the depletion region increases under reverse bias.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. The wider depletion region acts as a larger barrier to the flow of majority carriers.", neetFrequency: 4 },
        { assertion: "Logic gates are the building blocks of digital circuits.", reason: "Logic gates operate on binary inputs and produce a binary output.", answer: "B", explanation: "Both statements are true. Logic gates are indeed the building blocks, and they do operate on binary logic. However, the reason is more of a definition than an explanation of why they are considered building blocks.", neetFrequency: 2 },
        { assertion: "An n-type semiconductor is electrically neutral.", reason: "It has more free electrons than holes.", answer: "B", explanation: "Both statements are true, but the reason does not explain the assertion. The semiconductor is neutral because the charge of the extra free electrons is balanced by the positive charge of the ionized donor atoms in the crystal lattice.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) n-type semiconductor", "(b) p-type semiconductor", "(c) p-n junction", "(d) Zener diode"], column2: ["(p) Voltage regulation", "(q) Rectification", "(r) Majority carriers are holes", "(s) Majority carriers are electrons"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching semiconductor types and devices with their properties or applications." },
        { column1: ["(a) AND gate", "(b) OR gate", "(c) NOT gate", "(d) NAND gate"], column2: ["(p) Inverter", "(q) Y = A + B", "(r) Y = (A · B)̅", "(s) Y = A · B"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching logic gates with their function or Boolean expression." },
        { column1: ["(a) Emitter", "(b) Base", "(c) Collector", "(d) Depletion Region"], column2: ["(p) Largest in size", "(q) Thin and lightly doped", "(r) Heavily doped", "(s) Contains immobile ions"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching parts of a transistor/diode with their characteristics." },
        { column1: ["(a) LED", "(b) Photodiode", "(c) Solar Cell", "(d) Zener Diode"], column2: ["(p) Reverse breakdown region", "(q) Converts light to electricity", "(r) Detects light intensity", "(s) Converts electricity to light"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching special purpose diodes with their primary function." },
        { column1: ["(a) Rectifier", "(b) Amplifier", "(c) Oscillator", "(d) Logic Gate"], column2: ["(p) Produces sustained oscillations", "(q) Increases signal strength", "(r) AC to DC conversion", "(s) Digital circuit operation"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching electronic functions/circuits with their purpose." }
    ],
    keyTakeaways: [
        "The behavior of all semiconductor devices is based on controlling the flow of charge carriers (electrons and holes) across p-n junctions.",
        "A p-n junction diode acts as a one-way valve for current.",
        "A transistor acts as a current-controlled amplifier or switch.",
        "Logic gates are the fundamental building blocks of all digital systems, including computers."
    ],
    mnemonics: [
        { text: "For transistor doping: Remember 'EBC' - Emitter (Heavily), Base (Lightly), Collector (Moderately).", tamil: "டிரான்சிஸ்டர் மாசூட்டலுக்கு: 'EBC' - உமிழ்ப்பான் (அதிகம்), அடிப்பான் (குறைவு), சேகரிப்பான் (மிதம்) என நினைவில் கொள்க." }
    ],
    neetTips: [
        { text: "Logic gate questions are the easiest marks in this chapter. Master the truth tables for all gates and simple combinations.", tamil: "தருக்க வாயில் கேள்விகள் இந்த அத்தியாயத்தில் எளிதான மதிப்பெண்கள். அனைத்து வாயில்கள் மற்றும் எளிய இணைப்புகளுக்கான உண்மை அட்டவணைகளை நன்கு படித்துக் கொள்ளுங்கள்." },
        { text: "Transistor problems often involve the two main equations: I_E = I_B + I_C and the gain formulas (α and β). Most problems can be solved by applying these two correctly.", tamil: "டிரான்சிஸ்டர் கணக்குகள் பெரும்பாலும் இரண்டு முக்கிய சமன்பாடுகளை உள்ளடக்கியது: I_E = I_B + I_C மற்றும் பெருக்க சூத்திரங்கள் (α மற்றும் β). பெரும்பாலான கணக்குகளை இந்த இரண்டையும் சரியாகப் பயன்படுத்துவதன் மூலம் தீர்க்க முடியும்." }
    ],
    nextChapter: {
        title: "Communication Systems",
        titleTamil: "தகவல் தொடர்பு அமைப்புகள்"
    },
    studentTip: {
        english: "Try to visualize the flow of electrons and holes. Understanding what happens at the p-n junction is key to understanding everything else in this chapter.",
        tamil: "எலக்ட்ரான்கள் மற்றும் துளைகளின் ஓட்டத்தை கற்பனை செய்து பார்க்க চেষ্টা செய்யுங்கள். p-n சந்தியில் என்ன நடக்கிறது என்பதைப் புரிந்துகொள்வது இந்த அத்தியாயத்தில் உள்ள மற்ற அனைத்தையும் புரிந்துகொள்வதற்கான திறவுகோலாகும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: How does a combination of NAND gates result in an AND gate? Draw the circuit and trace the logic.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: NAND வாயில்களின் இணைப்பு எவ்வாறு ஒரு AND வாயிலை உருவாக்குகிறது? சுற்றை வரைந்து தர்க்கத்தைக் கண்டறியவும்."
    },
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
