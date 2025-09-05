
import type { NeetModule } from '@/lib/types';

export const electromagneticInductionModule: NeetModule = {
    id: 'neet-physics-electromagnetic-induction',
    title: 'Physics - Electromagnetic Induction (மின்காந்தத் தூண்டல்)',
    chapter: 'Electromagnetic Induction',
    subject: 'Physics',
    learningObjectives: [
        "Define and calculate magnetic flux.",
        "Understand and apply Faraday's laws of electromagnetic induction.",
        "Apply Lenz's law to determine the direction of induced current.",
        "Define and calculate self-inductance and mutual inductance.",
        "Analyze the energy stored in an inductor.",
        "Understand the concept of motional emf.",
        "Describe the working principle of an AC generator."
    ],
    prerequisites: [
        "Understanding of magnetic fields and magnetic forces (Moving Charges and Magnetism).",
        "Basic calculus (differentiation)."
    ],
    conceptOverview: "This chapter explores one of the most profound connections in physics: the link between electricity and magnetism. While Oersted discovered that an electric current produces a magnetic field, Faraday and Henry discovered the reverse: a changing magnetic field can produce an electric current. This phenomenon is called electromagnetic induction. The chapter is built around Faraday's Law, which quantifies the induced emf, and Lenz's Law, which gives the direction of the induced current. We will also introduce the concept of inductance, which is the property of a coil to oppose changes in current, and see how these principles are applied in essential technologies like the electric generator.",
    tamilConnection: "மின்சாரமும் காந்தமும் ஒன்றோடொன்று தொடர்புடையவை. ஒரு மாறும் காந்தப்புலம், ஒரு மின்னோட்டத்தை எவ்வாறு தூண்டுகிறது என்பதை இந்த அத்தியாயம் விளக்குகிறது. இதுவே மின்காந்தத் தூண்டல் எனப்படும். மின்சார ஜெனரேட்டர்கள் முதல், இன்டக்‌ஷன் அடுப்புகள் வரை, அனைத்தும் இந்தக் கொள்கையின் அடிப்படையிலேயே செயல்படுகின்றன.",
    culturalContext: "Think of a dynamo on a bicycle lamp, a common sight in many parts of Tamil Nadu. As the wheel turns, it rotates a magnet inside a coil, creating a changing magnetic field. This induces a current in the coil, which lights up the lamp. This simple device is a perfect demonstration of Faraday's law of electromagnetic induction.",
    syllabusMapping: [
         {
            topic: 'Electromagnetic Induction',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 4: Electromagnetic Induction and Alternating Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 6: Electromagnetic Induction',
            notes: 'A conceptually rich chapter. Faraday\'s and Lenz\'s laws are fundamental. Problems on motional emf and self/mutual inductance are frequently asked in NEET.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 4 maps to NEET Physics Unit 12'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Magnetic Flux ($\\Phi_B$)
Magnetic flux through a surface is the number of magnetic field lines passing normally through that surface. It is a scalar quantity.
$$ \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} = BA \\cos\\theta $$
*   B = Magnetic field strength
*   A = Area of the surface
*   θ = Angle between the magnetic field vector and the normal to the surface area.
*   SI Unit: Weber (Wb) or Tesla-meter² (T·m²).`,
            tamil: `### 1. காந்தப் பாயம் ($\\Phi_B$)
ஒரு பரப்பின் வழியே செல்லும் காந்தப் பாயம் என்பது, அந்தப் பரப்பிற்கு செங்குத்தாகச் செல்லும் காந்தப்புலக் கோடுகளின் எண்ணிக்கையாகும். இது ஒரு ஸ்கேலார் அளவு.
$$ \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} = BA \\cos\\theta $$
*   B = காந்தப்புலத்தின் வலிமை
*   A = பரப்பின் பரப்பு
*   θ = காந்தப்புல வெக்டருக்கும், பரப்புக்கு செங்குத்தான வெக்டருக்கும் இடையேயான கோணம்.
*   SI அலகு: வெப்பர் (Wb) அல்லது டெஸ்லா-மீட்டர்² (T·m²).`
        },
        {
            english: `### 2. Faraday's Law of Induction
The magnitude of the induced electromotive force (emf) in a circuit is equal to the time rate of change of magnetic flux through the circuit.
$$ \\epsilon = -N \\frac{d\\Phi_B}{dt} $$
*   ε = induced emf (தூண்டப்பட்ட மின்னியக்கு விசை)
*   N = number of turns in the coil (சுருளில் உள்ள சுற்றுகளின் எண்ணிக்கை)
*   $d\\Phi_B/dt$ = rate of change of magnetic flux (காந்தப் பாய மாறுபாட்டு வீதம்)
*   The negative sign is due to **Lenz's Law**, which indicates the direction of the induced emf.`,
            tamil: `### 2. பாரடேவின் மின்காந்தத் தூண்டல் விதி
ஒரு சுற்றில் தூண்டப்பட்ட மின்னியக்கு விசையின் (emf) எண்மதிப்பு, அந்தச் சுற்றின் வழியே செல்லும் காந்தப் பாயத்தின் கால மாறுபாட்டு வீதத்திற்கு சமம்.
$$ \\epsilon = -N \\frac{d\\Phi_B}{dt} $$
*   ε = தூண்டப்பட்ட மின்னியக்கு விசை
*   N = சுருளில் உள்ள சுற்றுகளின் எண்ணிக்கை
*   $d\\Phi_B/dt$ = காந்தப் பாய மாறுபாட்டு வீதம்
*   எதிர்மறை குறி **லென்ஸ் விதியால்** ஏற்படுகிறது, இது தூண்டப்பட்ட மின்னியக்கு விசையின் திசையைக் குறிக்கிறது.`
        },
        {
            english: `### 3. Lenz's Law and Conservation of Energy
The polarity of the induced emf is such that it tends to produce a current which opposes the change in magnetic flux that produced it. This law is a consequence of the law of conservation of energy.`,
            tamil: `### 3. லென்ஸ் விதி மற்றும் ஆற்றல் அழிவின்மை
தூண்டப்பட்ட மின்னியக்கு விசையின் முனையானது, அதை உருவாக்கிய காந்தப் பாய மாற்றத்தை எதிர்க்கும் ஒரு மின்னோட்டத்தை உருவாக்கும் வகையில் இருக்கும். இந்த விதி ஆற்றல் அழிவின்மை விதியின் ஒரு விளைவாகும்.`
        },
        {
            english: `### 4. Motional EMF (இயக்க மின்னியக்கு விசை)
The emf induced by the motion of a conductor in a magnetic field. For a straight conductor of length 'l' moving with velocity 'v' perpendicular to a magnetic field 'B', the motional emf is:
$$ \\epsilon = Blv $$`,
            tamil: `### 4. இயக்க மின்னியக்கு விசை
ஒரு காந்தப்புலத்தில் ஒரு கடத்தியின் இயக்கத்தால் தூண்டப்பட்ட மின்னியக்கு விசை. 'l' நீளமுள்ள ஒரு நேர்க்கடத்தி 'v' திசைவேகத்துடன் 'B' காந்தப்புலத்திற்கு செங்குத்தாக நகரும்போது, இயக்க மின்னியக்கு விசை:`
        },
        {
            english: `### 5. Inductance (மின்தூண்டல்)
Inductance is the property of an electrical conductor by which a change in current through it induces an electromotive force in the conductor itself (self-inductance) or in a nearby conductor (mutual inductance).
*   **Self-Inductance (L):** The induced emf is proportional to the rate of change of current in the same coil. $\\Phi_B = LI \\implies \\epsilon = -L \\frac{dI}{dt}$. Unit: Henry (H).
*   **Mutual-Inductance (M):** The induced emf in a secondary coil is proportional to the rate of change of current in the primary coil. $\\Phi_2 = MI_1 \\implies \\epsilon_2 = -M \\frac{dI_1}{dt}$.`,
            tamil: `### 5. மின்தூண்டல்
மின்தூண்டல் என்பது ஒரு மின் கடத்தியின் ஒரு பண்பு ஆகும், இதன் மூலம் அதன் வழியே செல்லும் மின்னோட்டம் மாறும்போது, அந்த கடத்தியிலேயே (தன் மின்தூண்டல்) அல்லது அருகிலுள்ள மற்றொரு கடத்தியில் (பரிமாற்று மின்தூண்டல்) ஒரு மின்னியக்கு விசை தூண்டப்படுகிறது.
*   **தன் மின்தூண்டல் (L):** தூண்டப்பட்ட மின்னியக்கு விசை அதே சுருளில் உள்ள மின்னோட்ட மாறுபாட்டு வீதத்திற்கு விகிதாசாரமாக இருக்கும். $\\Phi_B = LI \\implies \\epsilon = -L \\frac{dI}{dt}$. அலகு: ஹென்றி (H).
*   **பரிமாற்று மின்தூண்டல் (M):** ஒரு துணைச் சுருளில் தூண்டப்பட்ட மின்னியக்கு விசை, முதன்மைச் சுருளில் உள்ள மின்னோட்ட மாறுபாட்டு வீதத்திற்கு விகிதாசாரமாக இருக்கும். $\\Phi_2 = MI_1 \\implies \\epsilon_2 = -M \\frac{dI_1}{dt}$.`
        }
    ],
    workedExamples: [
        {
            title: "Faraday's Law of Induction",
            titleTamil: "பாரடேவின் மின்காந்தத் தூண்டல் விதி",
            difficulty: 'Medium',
            problem: "The magnetic flux linked with a coil at any instant 't' is given by Φ = 10t² - 50t + 250 Wb. Calculate the induced emf at t = 3 s.",
            problemTamil: "ஒரு சுருளுடன் தொடர்புடைய காந்தப் பாயம் எந்தவொரு கண நேரத்திலும் 't' இல் Φ = 10t² - 50t + 250 Wb என கொடுக்கப்பட்டுள்ளது. t = 3 வினாடியில் தூண்டப்பட்ட மின்னியக்கு விசையைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "According to Faraday's law of induction, the magnitude of induced emf is given by ε = |dΦ/dt|.", explanationTamil: "பாரடேவின் மின்காந்தத் தூண்டல் விதிப்படி, தூண்டப்பட்ட மின்னியக்கு விசையின் எண்மதிப்பு ε = |dΦ/dt| என கொடுக்கப்பட்டுள்ளது." },
                { step: 2, explanation: "Differentiate the given expression for flux Φ with respect to time t.", calculation: "dΦ/dt = d/dt (10t² - 50t + 250) = 20t - 50" },
                { step: 3, explanation: "Substitute t = 3 s into the expression for dΦ/dt.", calculation: "ε = |20(3) - 50| = |60 - 50| = 10 V" },
                { step: 4, explanation: "The induced emf at t = 3 s is 10 V.", explanationTamil: "t = 3 வினாடியில் தூண்டப்பட்ட மின்னியக்கு விசை 10 V ஆகும்." }
            ],
            neetHack: "Remember that emf is the rate of change of flux. If the flux is given as a function of time, you almost always need to differentiate it.",
            neetHackTamil: "மின்னியக்கு விசை என்பது பாயத்தின் மாறுபாட்டு வீதம் என்பதை நினைவில் கொள்க. பாயம் நேரத்தின் சார்பாகக் கொடுக்கப்பட்டால், நீங்கள் அதை எப்போதும் வகைக்கெழு செய்ய வேண்டும்."
        },
        {
            title: "Motional EMF",
            titleTamil: "இயக்க மின்னியக்கு விசை",
            difficulty: 'Easy',
            problem: "A 1-meter long metallic rod is rotated with an angular frequency of 400 rad/s about an axis normal to the rod passing through its one end. The other end of the rod is in contact with a circular metallic ring. A constant magnetic field of 0.5 T parallel to the axis exists everywhere. Calculate the emf developed between the center and the ring.",
            problemTamil: "1 மீட்டர் நீளமுள்ள ஒரு உலோகத் தடி, தடிக்கு செங்குத்தான மற்றும் அதன் ஒரு முனை வழியாகச் செல்லும் ஒரு அச்சைப் பற்றி 400 rad/s கோண அதிர்வெண்ணுடன் சுழற்றப்படுகிறது. தடியின் மறுமுனை ஒரு வட்ட உலோக வளையத்துடன் தொடர்பில் உள்ளது. அச்சுக்கு இணையான 0.5 T என்ற மாறா காந்தப்புலம் எல்லா இடங்களிலும் உள்ளது. மையம் மற்றும் வளையத்திற்கு இடையில் உருவாகும் மின்னியக்கு விசையைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "The emf induced across the ends of a rotating rod in a uniform magnetic field is given by the formula ε = (1/2)Bωl².", explanationTamil: "ஒரு சீரான காந்தப்புலத்தில் சுழலும் ஒரு தடியின் முனைகளுக்கு இடையில் தூண்டப்பட்ட மின்னியக்கு விசை ε = (1/2)Bωl² என்ற சூத்திரத்தால் கொடுக்கப்படுகிறது." },
                { step: 2, explanation: "Identify the given values: B = 0.5 T, ω = 400 rad/s, l = 1 m.", explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை அடையாளம் காணவும்: B = 0.5 T, ω = 400 rad/s, l = 1 m." },
                { step: 3, explanation: "Substitute the values into the formula.", calculation: "ε = (1/2) * 0.5 * 400 * (1)²" },
                { step: 4, explanation: "Calculate the final emf.", calculation: "ε = 0.25 * 400 = 100 V" }
            ],
            commonPitfall: "Using the formula for linear motional emf (Blv) instead of the rotational one. For rotation, different points on the rod move at different linear speeds, so integration is needed, which leads to the (1/2)Bωl² formula."
        },
        {
            title: "Self-Inductance",
            titleTamil: "தன் மின்தூண்டல்",
            difficulty: 'Medium',
            problem: "The current in a coil of self-inductance 5 H is increasing at a rate of 2 A/s. What is the emf induced in the coil?",
            problemTamil: "5 H தன் மின்தூண்டல் கொண்ட ஒரு சுருளில் மின்னோட்டம் 2 A/s என்ற வீதத்தில் அதிகரித்து வருகிறது. சுருளில் தூண்டப்பட்ட மின்னியக்கு விசை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The relationship between self-inductance (L), induced emf (ε), and rate of change of current (dI/dt) is ε = -L(dI/dt).", explanationTamil: "தன் மின்தூண்டல் (L), தூண்டப்பட்ட மின்னியக்கு விசை (ε), மற்றும் மின்னோட்ட மாறுபாட்டு வீதம் (dI/dt) ஆகியவற்றுக்கு இடையேயான தொடர்பு ε = -L(dI/dt) ஆகும்." },
                { step: 2, explanation: "The negative sign from Lenz's law indicates the direction of the emf, which opposes the change. We are asked for the magnitude.", explanationTamil: "லென்ஸ் விதியிலிருந்து வரும் எதிர்மறை குறி, மாற்றத்தை எதிர்க்கும் மின்னியக்கு விசையின் திசையைக் குறிக்கிறது. நாம் எண்மதிப்பைக் கண்டுபிடிக்க வேண்டும்." },
                { step: 3, explanation: "Substitute the given values: L = 5 H, dI/dt = 2 A/s.", calculation: "|ε| = L * (dI/dt) = 5 H * 2 A/s = 10 V" }
            ],
            neetHack: "This is a direct formula application, a common type of question. The key is to correctly identify which quantity is given (dI/dt vs I)."
        },
        {
            title: "Energy Stored in an Inductor",
            titleTamil: "மின்தூண்டியில் சேமிக்கப்பட்ட ஆற்றல்",
            difficulty: 'Easy',
            problem: "An inductor of inductance 20 mH carries a current of 5 A. How much energy is stored in the magnetic field of the inductor?",
            problemTamil: "20 mH மின்தூண்டல் கொண்ட ஒரு மின்தூண்டி 5 A மின்னோட்டத்தைக் கொண்டு செல்கிறது. மின்தூண்டியின் காந்தப்புலத்தில் எவ்வளவு ஆற்றல் சேமிக்கப்படுகிறது?",
            solutionSteps: [
                { step: 1, explanation: "The energy (U) stored in an inductor is given by the formula U = (1/2)LI².", explanationTamil: "ஒரு மின்தூண்டியில் சேமிக்கப்பட்ட ஆற்றல் (U) U = (1/2)LI² என்ற சூத்திரத்தால் கொடுக்கப்படுகிறது." },
                { step: 2, explanation: "Convert inductance to SI units: L = 20 mH = 20 x 10⁻³ H.", explanationTamil: "மின்தூண்டலை SI அலகுகளுக்கு மாற்றவும்." },
                { step: 3, explanation: "Substitute the values of L and I into the formula.", calculation: "U = (1/2) * (20 x 10⁻³) * (5)² = (1/2) * (20 x 10⁻³) * 25" },
                { step: 4, explanation: "Calculate the final energy.", calculation: "U = 10 x 10⁻³ * 25 = 250 x 10⁻³ J = 0.25 J" }
            ],
            commonPitfall: "Forgetting to convert millihenries (mH) to Henries (H) or to square the current."
        },
        {
            title: "Mutual Inductance",
            titleTamil: "பரிமாற்று மின்தூண்டல்",
            difficulty: 'Medium',
            problem: "Two coils have a mutual inductance of 1.5 H. If the current in the primary coil changes from 0 to 20 A in 0.5 s, what is the magnitude of the average emf induced in the secondary coil?",
            problemTamil: "இரண்டு சுருள்கள் 1.5 H பரிமாற்று மின்தூண்டலைக் கொண்டுள்ளன. முதன்மைச் சுருளில் உள்ள மின்னோட்டம் 0.5 வினாடிகளில் 0 முதல் 20 A வரை மாறினால், துணைச் சுருளில் தூண்டப்பட்ட சராசரி மின்னியக்கு விசையின் எண்மதிப்பு என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The formula for mutually induced emf is ε₂ = -M(dI₁/dt). We need to find the average emf, so we use ε_avg = -M(ΔI₁/Δt).", explanationTamil: "பரிமாற்று தூண்டப்பட்ட மின்னியக்கு விசைக்கான சூத்திரம் ε₂ = -M(dI₁/dt) ஆகும். நாம் சராசரி மின்னியக்கு விசையைக் கண்டுபிடிக்க வேண்டும், எனவே ε_avg = -M(ΔI₁/Δt) ஐப் பயன்படுத்துகிறோம்." },
                { step: 2, explanation: "Calculate the change in current (ΔI₁) and the time interval (Δt).", calculation: "ΔI₁ = 20 A - 0 A = 20 A. \\\\ Δt = 0.5 s." },
                { step: 3, explanation: "Substitute the values into the formula to find the magnitude of the average emf.", calculation: "|ε_avg| = M * |ΔI₁/Δt| = 1.5 H * (20 A / 0.5 s) = 1.5 * 40 = 60 V" }
            ],
            neetHack: "Mutual inductance problems are very similar to self-inductance ones. Just ensure you are using the rate of change of current from the *other* coil."
        }
    ],
    mcqs: [
        { question: "Lenz's law is a consequence of the law of conservation of:", options: ["A. Charge", "B. Mass", "C. Energy", "D. Momentum"], answer: "C. Energy", explanation: "Lenz's law, which states that the induced current opposes the change that caused it, upholds the principle of conservation of energy.", neetFrequency: 5 },
        { question: "The SI unit of magnetic flux is:", options: ["A. Tesla", "B. Gauss", "C. Weber", "D. Henry"], answer: "C. Weber", explanation: "The SI unit of magnetic flux (Φ) is the Weber (Wb). Tesla is the unit of magnetic field (B). Henry is the unit of inductance.", neetFrequency: 3 },
        { question: "A metallic ring is held horizontally and a bar magnet is dropped through the ring with its length along the axis of the ring. The acceleration of the falling magnet is:", options: ["A. Equal to g", "B. Less than g", "C. More than g", "D. Zero"], answer: "B. Less than g", explanation: "As the magnet falls, the changing magnetic flux induces a current in the ring. By Lenz's law, this induced current creates a magnetic field that opposes the magnet's motion, so the net downward force is less than mg, and acceleration is less than g.", neetFrequency: 4 },
        { question: "The self-inductance of a long solenoid is proportional to:", options: ["A. n", "B. n²", "C. 1/n", "D. 1/n²"], answer: "B. n²", explanation: "The self-inductance of a solenoid is given by L = μ₀n²Al, where n is the number of turns per unit length. Thus, L is proportional to n².", neetFrequency: 4 },
        { question: "A current of 10 A in the primary coil of a circuit is reduced to zero. If the coefficient of mutual inductance is 3 H and emf induced in the secondary coil is 30 kV, the time taken for the change of current is:", options: ["A. 1 s", "B. 0.1 s", "C. 0.01 s", "D. 0.001 s"], answer: "D. 0.001 s", explanation: "|ε| = M|ΔI/Δt|. Δt = M|ΔI/ε| = 3 * |0-10| / (30 * 10³) = 30 / 30000 = 0.001 s.", neetFrequency: 3 },
        { question: "In an AC generator, the induced emf is maximum when the plane of the coil is:", options: ["A. Parallel to the magnetic field", "B. Perpendicular to the magnetic field", "C. At 45° to the magnetic field", "D. Independent of the orientation"], answer: "A. Parallel to the magnetic field", explanation: "Emf ε = NBAωsin(ωt). The rate of change of flux (dΦ/dt) is maximum when the coil moves parallel to the field, cutting the flux lines at the maximum rate.", neetFrequency: 3 },
        { question: "The phenomenon of electromagnetic induction is used in:", options: ["A. Electric motor", "B. Electric generator", "C. Galvanometer", "D. Resistor"], answer: "B. Electric generator", explanation: "An electric generator works on the principle of electromagnetic induction, converting mechanical energy into electrical energy.", neetFrequency: 2 },
        { question: "The energy stored in an inductor of inductance L carrying a current I is proportional to:", options: ["A. I", "B. I²", "C. 1/I", "D. 1/I²"], answer: "B. I²", explanation: "Energy U = (1/2)LI². So, the energy is proportional to the square of the current.", neetFrequency: 4 },
        { question: "A copper rod of length L rotates with an angular velocity ω in a uniform magnetic field B. The emf developed between its ends is:", options: ["A. BLv", "B. (1/2)BωL²", "C. BωL²", "D. BLω"], answer: "B. (1/2)BωL²", explanation: "This is the standard formula for motional emf in a rotating rod.", neetFrequency: 4 },
        { question: "Two coils are placed close to each other. The mutual inductance of the pair of coils depends upon:", options: ["A. The currents in the two coils", "B. The resistances of the two coils", "C. Relative position and orientation of the two coils", "D. The voltages applied across the two coils"], answer: "C. Relative position and orientation of the two coils", explanation: "Mutual inductance is a geometric property depending on the size, shape, number of turns, and relative orientation of the coils.", neetFrequency: 2 },
        { question: "What is the dimensional formula for self-inductance?", options: ["A. [ML²T⁻²A⁻²]", "B. [MLT⁻²A⁻²]", "C. [ML²T⁻¹A⁻²]", "D. [ML²T⁻²A⁻¹]"], answer: "A. [ML²T⁻²A⁻²]", explanation: "From U = (1/2)LI², L = 2U/I². Dimensions are [ML²T⁻²]/[A²] = [ML²T⁻²A⁻²].", neetFrequency: 3 },
        { question: "A horizontal straight wire 10 m long extending from east to west is falling with a speed of 5.0 m/s, at right angles to the horizontal component of the Earth's magnetic field, 0.30 x 10⁻⁴ Wb/m². The instantaneous value of the emf induced in the wire is:", options: ["A. 1.5 mV", "B. 3.0 mV", "C. 4.5 mV", "D. 6.0 mV"], answer: "A. 1.5 mV", explanation: "ε = Blv = (0.30 x 10⁻⁴) * (10) * (5.0) = 1.5 x 10⁻³ V = 1.5 mV.", neetFrequency: 4 },
        { question: "The direction of induced current is found by:", options: ["A. Fleming's left hand rule", "B. Lenz's law", "C. Biot-Savart law", "D. Ampere's law"], answer: "B. Lenz's law", explanation: "Lenz's law gives the direction of the induced current, stating that it will oppose the change that produces it.", neetFrequency: 3 },
        { question: "The unit 'Henry' is equivalent to:", options: ["A. Volt-second/Ampere", "B. Volt-Ampere/second", "C. Ampere-second/Volt", "D. Volt/Ampere"], answer: "A. Volt-second/Ampere", explanation: "From |ε| = L|dI/dt|, L = ε/(dI/dt). The unit is Volt / (Ampere/second) = Volt-second/Ampere.", neetFrequency: 2 },
        { question: "Eddy currents are produced when:", options: ["A. A metal is kept in varying magnetic field", "B. A metal is kept in steady magnetic field", "C. A circular coil is placed in a magnetic field", "D. Current is passed through a circular coil"], answer: "A. A metal is kept in varying magnetic field", explanation: "Eddy currents are loops of current induced within bulk conductors by a changing magnetic field in the conductor, according to Faraday's law.", neetFrequency: 3 },
        { question: "The role of the inductor is equivalent to:", options: ["A. Inertia in mechanics", "B. Force in mechanics", "C. Energy in mechanics", "D. Momentum in mechanics"], answer: "A. Inertia in mechanics", explanation: "An inductor opposes any change in the current flowing through it, just as mass (inertia) opposes any change in the state of motion.", neetFrequency: 1 },
        { question: "If the number of turns in a coil is doubled, its self-inductance becomes:", options: ["A. Doubled", "B. Halved", "C. Four times", "D. Unchanged"], answer: "C. Four times", explanation: "Self-inductance L is proportional to the square of the number of turns (N²). If N is doubled, L becomes 4 times.", neetFrequency: 4 },
        { question: "The induced emf does NOT depend on:", options: ["A. The rate of change of magnetic flux", "B. The number of turns in the coil", "C. The resistance of the circuit", "D. The area of the coil"], answer: "C. The resistance of the circuit", explanation: "ε = -N(dΦ/dt). The induced emf depends on N and the rate of change of flux (which depends on B, A, and θ). The induced *current* (I=ε/R) depends on resistance, but the emf itself does not.", neetFrequency: 3 },
        { question: "Two coaxial solenoids have a mutual inductance M. If the current in the primary is I = I₀sin(ωt), the peak emf induced in the secondary is:", options: ["A. MI₀", "B. MI₀ω", "C. MI₀/ω", "D. MI₀sin(ωt)"], answer: "B. MI₀ω", explanation: "ε = -M(dI/dt) = -M * d/dt(I₀sin(ωt)) = -MI₀ωcos(ωt). The peak value (amplitude) of this emf is MI₀ω.", neetFrequency: 3 },
        { question: "A jet plane is travelling towards west at a speed of 1800 km/h. What is the voltage difference developed between the ends of the wing having a span of 25 m, if the Earth's magnetic field at the location has a magnitude of 5 x 10⁻⁴ T and the dip angle is 30°?", options: ["A. 3.125 V", "B. 3.75 V", "C. 4.0 V", "D. 2.25 V"], answer: "A. 3.125 V", explanation: "The wing cuts the vertical component of the Earth's field (Bv = Bsinθ). v = 1800 km/h = 500 m/s. ε = Bv*l*v = (5x10⁻⁴ * sin30°) * 25 * 500 = (2.5x10⁻⁴) * 12500 = 3.125 V.", neetFrequency: 4 },
        { question: "Which of the following is not an application of eddy currents?", options: ["A. Magnetic braking in trains", "B. Induction furnace", "C. Galvanometer damping", "D. AC generator"], answer: "D. AC generator", explanation: "AC generators work on the principle of electromagnetic induction, but they are not an application of eddy currents. In fact, eddy currents are an undesirable source of energy loss in generators.", neetFrequency: 2 },
        { question: "The flux in a closed circuit of resistance 10 Ω varies with time according to the equation Φ = 6t² - 5t + 1. The induced current at t = 0.25 s is:", options: ["A. 0.2 A", "B. 0.6 A", "C. 0.8 A", "D. 1.2 A"], answer: "A. 0.2 A", explanation: "ε = -dΦ/dt = -(12t - 5). At t=0.25, ε = -(12*0.25 - 5) = -(3-5) = 2 V. Current I = ε/R = 2V / 10Ω = 0.2 A.", neetFrequency: 5 },
        { question: "The magnetic energy stored in a long solenoid of self-inductance L carrying a current I is:", options: ["A. (1/2)LI²", "B. LI²", "C. LI", "D. L/I²"], answer: "A. (1/2)LI²", explanation: "This is the standard formula for energy stored in an inductor.", neetFrequency: 3 },
        { question: "An emf of 200 V is induced in a circuit when current in the circuit falls from 5 A to 0 A in 0.1 second. The self-inductance of the circuit is:", options: ["A. 4 H", "B. 40 H", "C. 4 mH", "D. 400 H"], answer: "A. 4 H", explanation: "|ε| = L|ΔI/Δt|. 200 = L * |(0-5)/0.1|. 200 = L * 50. L = 200/50 = 4 H.", neetFrequency: 4 },
        { question: "The cause of induced emf is:", options: ["A. Change in magnetic flux", "B. Change in electric flux", "C. Constant magnetic flux", "D. Constant electric flux"], answer: "A. Change in magnetic flux", explanation: "According to Faraday's law, an emf is induced whenever the magnetic flux linked with a circuit changes.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "An emf can be induced by moving a conductor in a magnetic field.", reason: "An emf can also be induced by changing the magnetic field.", answer: "B", explanation: "Both statements are true and describe the two ways to induce an emf according to Faraday's law (ε = -d(BAcosθ)/dt). However, the reason does not explain the assertion; they are two separate conditions.", neetFrequency: 3 },
        { assertion: "Lenz’s law violates the principle of conservation of energy.", reason: "The induced current always opposes the change in magnetic flux that produces it.", answer: "D", explanation: "Assertion is false. Lenz's law is a consequence of the conservation of energy. The reason is a true statement (it's the definition of Lenz's law).", neetFrequency: 4 },
        { assertion: "A metal plate is allowed to fall from a height between the poles of a strong magnet. It experiences a retarding force.", reason: "Eddy currents are produced in the plate, which oppose the motion.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. The induced eddy currents create a magnetic field that opposes the change in flux (the motion), resulting in a braking force.", neetFrequency: 3 },
        { assertion: "An inductor is also called a choke coil.", reason: "An inductor has high resistance and low inductance.", answer: "C", explanation: "The assertion is true. The reason is false. A choke coil is designed to have high inductance (to offer high reactance to AC) and very low resistance (to minimize power loss I²R).", neetFrequency: 2 },
        { assertion: "The magnetic flux through a closed surface is always zero.", reason: "Magnetic monopoles do not exist.", answer: "A", explanation: "Assertion is a statement of Gauss's law for magnetism. The reason is true and is the physical basis for this law. Since there are no magnetic 'charges' (monopoles) to act as sources or sinks, any field line that enters a closed surface must also leave it.", neetFrequency: 4 }
    ],
    matchTheColumns: [
        { column1: ["(a) Faraday's Law", "(b) Lenz's Law", "(c) Motional EMF", "(d) Self-Inductance"], column2: ["(p) Energy Conservation", "(q) ε = Blv", "(r) ε = -L(dI/dt)", "(s) ε = -dΦ/dt"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching the laws and concepts with their corresponding formulas or principles." },
        { column1: ["(a) Magnetic Flux", "(b) Self-Inductance", "(c) Magnetic Field", "(d) Mutual Inductance"], column2: ["(p) Henry", "(q) Tesla", "(r) Weber"], answer: "a-r, b-p, c-q, d-p", explanation: "Matching physical quantities with their SI units. Both self and mutual inductance are measured in Henry." },
        { column1: ["(a) Electric Generator", "(b) Transformer", "(c) Electric Motor", "(d) Galvanometer"], column2: ["(p) Force on a current in B-field", "(q) Mutual Induction", "(r) Electromagnetic Induction", "(s) Torque on a current loop"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching devices with their working principles." },
        { column1: ["(a) Ammeter conversion", "(b) Voltmeter conversion", "(c) Cyclotron principle", "(d) Direction of induced current"], column2: ["(p) High resistance in series", "(q) Lenz's Law", "(r) Shunt in parallel", "(s) Resonance"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching applications and concepts with their methods." },
        { column1: ["(a) Energy stored in inductor", "(b) Force between parallel wires", "(c) EMF in rotating rod", "(d) B at center of a loop"], column2: ["(p) (1/2)Bωl²", "(q) (1/2)LI²", "(r) μ₀I/2R", "(s) μ₀I₁I₂/(2πd)"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching formulas for different physical situations." }
    ],
    keyTakeaways: [
        "A changing magnetic flux is the source of an induced emf (Faraday's Law).",
        "The induced current always flows in a direction that opposes the change that caused it (Lenz's Law).",
        "Inductance (L) is the electrical analogue of inertia, opposing changes in current.",
        "Energy can be stored in the magnetic field of an inductor."
    ],
    mnemonics: [
        { text: "Faraday's Law tells you 'how much' (the magnitude), Lenz's Law tells you 'which way' (the direction).", tamil: "பாரடே விதி 'எவ்வளவு' (எண்மதிப்பு) என்பதையும், லென்ஸ் விதி 'எந்த வழி' (திசை) என்பதையும் கூறுகிறது." }
    ],
    neetTips: [
        { text: "Problems involving Lenz's law are very common. To find the direction of induced current, first determine if the flux is increasing or decreasing. The induced field must oppose this change.", tamil: "லென்ஸ் விதி சம்பந்தப்பட்ட கணக்குகள் மிகவும் பொதுவானவை. தூண்டப்பட்ட மின்னோட்டத்தின் திசையைக் கண்டுபிடிக்க, முதலில் பாயம் அதிகரிக்கிறதா அல்லது குறைகிறதா என்பதைத் தீர்மானிக்கவும். தூண்டப்பட்ட புலம் இந்த மாற்றத்தை எதிர்க்க வேண்டும்." },
        { text: "Be careful with units. Inductance is in Henry (H), flux in Weber (Wb), and magnetic field in Tesla (T). Often, values are given in milli (mH) or micro (μH).", tamil: "அலகுகளில் கவனமாக இருங்கள். மின்தூண்டல் ஹென்றி (H), பாயம் வெப்பர் (Wb), மற்றும் காந்தப்புலம் டெஸ்லா (T) ஆகியவற்றில் உள்ளது. பெரும்பாலும், மதிப்புகள் மில்லி (mH) அல்லது மைக்ரோ (μH) இல் கொடுக்கப்படுகின்றன." }
    ]
};
