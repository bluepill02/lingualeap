
import type { NeetModule } from '@/lib/types';

export const movingChargesAndMagnetismModule: NeetModule = {
    id: 'neet-physics-moving-charges-and-magnetism',
    title: 'Physics - Moving Charges and Magnetism (இயங்கும் மின்துகள்களும் காந்தவியலும்)',
    chapter: 'Moving Charges and Magnetism',
    subject: 'Physics',
    learningObjectives: [
        "Understand that moving charges produce magnetic fields.",
        "Define and apply the Biot-Savart law to calculate the magnetic field due to various current configurations (straight wire, circular loop).",
        "Understand and apply Ampere's circuital law for symmetric current distributions.",
        "Analyze the motion of a charged particle in uniform magnetic and electric fields (Lorentz force).",
        "Understand the working principle of a cyclotron.",
        "Calculate the force on a current-carrying conductor in a magnetic field.",
        "Analyze the force and torque between two parallel current-carrying conductors.",
        "Describe the working principles of a moving coil galvanometer and its conversion into an ammeter and voltmeter."
    ],
    prerequisites: [
        "Electrostatics (electric field, forces).",
        "Current Electricity (concept of current).",
        "Vector cross product."
    ],
    conceptOverview: "This chapter establishes the fundamental connection between electricity and magnetism. Oersted's discovery that an electric current produces a magnetic field is the starting point. We introduce two key laws, the Biot-Savart law and Ampere's circuital law, which are the magnetic equivalents of Coulomb's law and Gauss's law in electrostatics, allowing us to calculate magnetic fields from currents. We then explore the other side of the interaction: the force experienced by a moving charge (or a current) when it enters a magnetic field, described by the Lorentz force. These principles are the basis for electric motors, galvanometers, and many other crucial technologies.",
    tamilConnection: "மின்னோட்டம் ஒரு காந்தப்புலத்தை உருவாக்கும் என்ற கண்டுபிடிப்பு, இயற்பியலில் ஒரு மாபெரும் திருப்புமுனை. ஒரு மின்சார மோட்டார் சுற்றுவது முதல், நம் காது கேட்கும் ஒலிபெருக்கி வரை, இதன் அடிப்படையில் தான் இயங்குகிறது. இந்த அத்தியாயம், மின்னோட்டத்திற்கும் காந்தவியலுக்கும் உள்ள ஆழமான தொடர்பை விவரிக்கிறது.",
    culturalContext: "Think of an electric motor used to pump water from a well in a Tamil Nadu village. Inside this motor, current flows through coils of wire placed in a magnetic field. The magnetic force on these wires creates a torque, causing the motor to spin and do work. This chapter explains the physics that makes this essential device function.",
    syllabusMapping: [
         {
            topic: 'Magnetic Effects of Current and Magnetism',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 3: Magnetism and Magnetic Effects of Electric Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 4: Moving Charges and Magnetism',
            notes: 'A very important chapter for NEET. Problems on Lorentz force, motion of charged particles in B-field, force on a current-carrying wire, and Biot-Savart law applications (especially for loops and straight wires) are common.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 3 maps to NEET Physics Unit 13'
        }
    ],
    conceptNotes: [
      {
        english: `### 1. Magnetic Field and Lorentz Force (காந்தப்புலம் மற்றும் லாரன்ஸ் விசை)
*   **Source of Magnetic Field:** A moving charge or an electric current produces a magnetic field ($\\vec{B}$) in the surrounding space.
*   **Lorentz Force:** The total force experienced by a charge q moving with velocity v in the presence of both electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields.
$$ \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) = \\vec{F}_e + \\vec{F}_m $$
*   **Magnetic Force ($\\vec{F}_m$):** The force on a moving charge due to a magnetic field.
$$ \\vec{F}_m = q(\\vec{v} \\times \\vec{B}) $$
*   **Properties of Magnetic Force:**
    *   It depends on q, v, and B. A stationary charge (v=0) does not experience a magnetic force.
    *   The direction of the force is perpendicular to both $\\vec{v}$ and $\\vec{B}$, given by the Right-Hand Rule.
    *   Since the force is always perpendicular to the velocity, the magnetic force does **no work** and cannot change the kinetic energy or speed of the particle; it only changes its direction.`
      },
      {
        english: `### 2. Motion of a Charged Particle in a Magnetic Field
*   **Path is a Circle:** If velocity $\\vec{v}$ is perpendicular to $\\vec{B}$, the magnetic force provides the necessary centripetal force, and the particle moves in a circle.
    *   $qvB = \\frac{mv^2}{r} \\implies$ Radius $r = \\frac{mv}{qB} = \\frac{p}{qB}$
    *   Time period $T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$ (Independent of velocity and radius!)
*   **Path is a Helix:** If $\\vec{v}$ has components both parallel and perpendicular to $\\vec{B}$, the particle moves in a helical path.`
      },
      {
        english: `### 3. Biot-Savart Law (பயோ-சவர்ட் விதி)
This law gives the magnetic field produced by a small current-carrying element ($d\\vec{l}$). It is the magnetic equivalent of Coulomb's Law.
$$ d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\hat{r})}{r^2} $$
where $\\mu_0$ is the permeability of free space.
*   **Magnetic field due to a long straight wire:** $B = \\frac{\\mu_0 I}{2\\pi r}$
*   **Magnetic field at the center of a circular loop:** $B = \\frac{\\mu_0 I}{2R}$`
      },
      {
        english: `### 4. Ampere's Circuital Law (ஆம்பியரின் சுற்று விதி)
This law provides an easy way to calculate the magnetic field for symmetric current distributions. It is the magnetic equivalent of Gauss's Law.
The line integral of the magnetic field $\\vec{B}$ around any closed loop is equal to $\\mu_0$ times the total current passing through that loop.
$$ \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed} $$
*   **Application to Solenoid (வரிச்சுருள்):** $B = \\mu_0 nI$, where n is the number of turns per unit length.
*   **Application to Toroid (வளைய வரிச்சுருள்):** $B = \\frac{\\mu_0 NI}{2\\pi r}$`
      },
      {
        english: `### 5. Force on a Current-Carrying Conductor
A conductor of length L carrying a current I placed in a magnetic field $\\vec{B}$ experiences a force:
$$ \\vec{F} = I (\\vec{L} \\times \\vec{B}) $$
*   **Force between two parallel currents:**
    *   **Attractive** if currents are in the same direction.
    *   **Repulsive** if currents are in opposite directions.
    *   Force per unit length: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$`
      }
    ],
    workedExamples: [
        {
            title: "NEET Level: Motion in a Magnetic Field",
            titleTamil: "நீட் நிலை: காந்தப்புலத்தில் இயக்கம்",
            difficulty: 'Medium',
            problem: "A proton and an alpha particle enter a uniform magnetic field perpendicularly with the same kinetic energy. Find the ratio of the radii of their circular paths.",
            problemTamil: "ஒரு புரோட்டான் மற்றும் ஒரு ஆல்பா துகள் ஒரே இயக்க ஆற்றலுடன் ஒரு சீரான காந்தப்புலத்திற்கு செங்குத்தாக நுழைகின்றன. அவற்றின் வட்டப் பாதைகளின் ஆரங்களின் விகிதத்தைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Recall the formula for the radius of the circular path: r = mv/qB = p/qB. We can also express it in terms of kinetic energy (K) since p = √(2mK).", calculation: "r = \\frac{\\sqrt{2mK}}{qB}" },
                { step: 2, explanation: "Given that K and B are the same for both particles. So, the radius r is proportional to √m/q.", calculation: "r \\propto \\frac{\\sqrt{m}}{q}" },
                { step: 3, explanation: "Set up the ratio of the radii of the alpha particle (r_α) to the proton (r_p).", calculation: "\\frac{r_{\\alpha}}{r_p} = \\frac{\\sqrt{m_{\\alpha}}}{q_{\\alpha}} \\times \\frac{q_p}{\\sqrt{m_p}}" },
                { step: 4, explanation: "Recall the properties of an alpha particle and a proton. An alpha particle is a helium nucleus (₂He⁴). m_α = 4m_p and q_α = 2q_p.", explanationTamil: "ஆல்பா துகள் மற்றும் புரோட்டானின் பண்புகளை நினைவுகூர்க. ஆல்பா துகள் என்பது ஹீலியம் அணுக்கரு. m_α = 4m_p மற்றும் q_α = 2q_p." },
                { step: 5, explanation: "Substitute these relations into the ratio and solve.", calculation: "\\frac{r_{\\alpha}}{r_p} = \\frac{\\sqrt{4m_p}}{2q_p} \\times \\frac{q_p}{\\sqrt{m_p}} = \\frac{2\\sqrt{m_p}}{2q_p} \\times \\frac{q_p}{\\sqrt{m_p}} = 1" }
            ],
            neetHack: "For problems comparing paths of different particles in a B-field, the formula r = √(2mK)/qB is extremely useful when kinetic energy is constant, and r = p/qB is useful when momentum is constant.",
            commonPitfall: "Forgetting the correct mass and charge relationship for common particles like protons, deuterons, and alpha particles."
        },
        {
            title: "JEE Level: Magnetic Field of a Solenoid",
            titleTamil: "ஜே.இ.இ நிலை: வரிச்சுருளின் காந்தப்புலம்",
            difficulty: 'Medium',
            problem: "A long solenoid has 200 turns per cm and carries a current of 2.5 A. What is the magnetic field at its center?",
            problemTamil: "ஒரு நீண்ட வரிச்சுருள் செ.மீ-க்கு 200 சுற்றுகளைக் கொண்டுள்ளது மற்றும் 2.5 A மின்னோட்டத்தைக் கொண்டு செல்கிறது. அதன் மையத்தில் காந்தப்புலம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The formula for the magnetic field inside a long solenoid is B = μ₀nI.", explanationTamil: "ஒரு நீண்ட வரிச்சுருளின் உள்ளே காந்தப்புலத்திற்கான சூத்திரம் B = μ₀nI ஆகும்." },
                { step: 2, explanation: "Identify the given values and convert them to SI units. n is the number of turns per *meter*.", calculation: "n = 200 turns/cm = 200 turns / (10⁻² m) = 20000 turns/m. \\\\ I = 2.5 A. \\\\ μ₀ = 4π × 10⁻⁷ T·m/A" },
                { step: 3, explanation: "Substitute the values into the formula.", calculation: "B = (4\\pi \\times 10^{-7}) \\times (20000) \\times (2.5)" },
                { step: 4, explanation: "Calculate the final result.", calculation: "B = 4\\pi \\times 10^{-7} \\times 50000 = 20\\pi \\times 10^{-3} T = 0.02\\pi T \\approx 0.0628 T" }
            ],
            commonPitfall: "Using the number of turns per cm directly in the formula. 'n' must be in turns per meter."
        },
        {
            title: "NEET Level: Force between Parallel Wires",
            titleTamil: "நீட் நிலை: இணை கம்பிகளுக்கு இடையே விசை",
            difficulty: 'Medium',
            problem: "Two long and parallel straight wires A and B carrying currents of 8.0 A and 5.0 A in the same direction are separated by a distance of 4.0 cm. Estimate the force on a 10 cm section of wire A.",
            problemTamil: "8.0 A மற்றும் 5.0 A மின்னோட்டங்களை ஒரே திசையில் கொண்டு செல்லும் இரண்டு நீண்ட மற்றும் இணை நேரான கம்பிகள் A மற்றும் B, 4.0 செ.மீ தூரத்தால் பிரிக்கப்பட்டுள்ளன. கம்பி A இன் 10 செ.மீ பிரிவின் மீதான விசையைக் கணக்கிடவும்.",
            solutionSteps: [
                { step: 1, explanation: "Recall the formula for the force per unit length between two parallel wires.", calculation: "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}" },
                { step: 2, explanation: "Since the currents are in the same direction, the force will be attractive.", explanationTamil: "மின்னோட்டங்கள் ஒரே திசையில் இருப்பதால், விசை ஈர்க்கக்கூடியதாக இருக்கும்." },
                { step: 3, explanation: "Calculate the force per unit length. Ensure distance 'd' is in meters.", calculation: "\\frac{F}{L} = \\frac{(4\\pi \\times 10^{-7}) \\times 8 \\times 5}{2\\pi \\times (0.04)} = \\frac{2 \\times 10^{-7} \\times 40}{0.04} = 2 \\times 10^{-4} N/m" },
                { step: 4, explanation: "Calculate the total force on the 10 cm (0.1 m) section of wire A.", calculation: "F = (\\frac{F}{L}) \\times L_{section} = (2 \\times 10^{-4} N/m) \\times (0.1 m) = 2 \\times 10^{-5} N" }
            ],
            neetHack: "Remember that the value of μ₀/(2π) is 2 x 10⁻⁷. This simplifies calculations for forces between wires.",
            commonPitfall: "Forgetting to convert distances from cm to m."
        },
        {
            title: "JEE Level: Cyclotron",
            titleTamil: "ஜே.இ.இ நிலை: சைக்ளோட்ரான்",
            difficulty: 'Hard',
            problem: "A cyclotron's oscillator frequency is 10 MHz. What should be the operating magnetic field for accelerating protons? If the radius of its dees is 60 cm, what is the kinetic energy (in MeV) of the proton beam produced by the accelerator? (m_p = 1.67 x 10⁻²⁷ kg, e = 1.6 x 10⁻¹⁹ C)",
            problemTamil: "ஒரு சைக்ளோட்ரானின் அலைவு அதிர்வெண் 10 MHz ஆகும். புரோட்டான்களை முடுக்கிவிடுவதற்கான இயக்க காந்தப்புலம் என்னவாக இருக்க வேண்டும்? அதன் 'D' களின் ஆரம் 60 செ.மீ எனில், முடுக்கியால் உற்பத்தி செய்யப்படும் புரோட்டான் கற்றையின் இயக்க ஆற்றல் (MeV இல்) என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The cyclotron resonance condition is that the oscillator frequency (f) must equal the particle's revolution frequency. f = qB / (2πm).", explanationTamil: "சைக்ளோட்ரான் ஒத்ததிர்வு நிபந்தனை என்னவென்றால், அலைவு அதிர்வெண் (f) துகளின் சுழற்சி அதிர்வெண்ணுக்கு சமமாக இருக்க வேண்டும்." },
                { step: 2, explanation: "Solve for the magnetic field B.", calculation: "B = \\frac{2\\pi m f}{q} = \\frac{2 \\times 3.14 \\times (1.67 \\times 10^{-27}) \\times (10 \\times 10^6)}{1.6 \\times 10^{-19}} \\approx 0.66 T" },
                { step: 3, explanation: "The maximum kinetic energy is determined by the radius of the dees. From r = mv/qB, the maximum velocity is v_max = qBr_max / m.", explanationTamil: "பெரும இயக்க ஆற்றல் 'D' களின் ஆரத்தால் தீர்மானிக்கப்படுகிறது." },
                { step: 4, explanation: "The maximum kinetic energy is K_max = (1/2)mv_max².", calculation: "K_{max} = \\frac{1}{2} m (\\frac{qBr_{max}}{m})^2 = \\frac{q^2 B^2 r_{max}^2}{2m}" },
                { step: 5, explanation: "Substitute the values to find K_max in Joules. r_max = 0.6 m.", calculation: "K_{max} = \\frac{(1.6 \\times 10^{-19})^2 (0.66)^2 (0.6)^2}{2 \\times (1.67 \\times 10^{-27})} \\approx 1.2 \\times 10^{-12} J" },
                { step: 6, explanation: "Convert the energy from Joules to MeV. 1 MeV = 1.6 x 10⁻¹³ J.", calculation: "K_{max} (MeV) = \\frac{1.2 \\times 10^{-12} J}{1.6 \\times 10^{-13} J/MeV} \\approx 7.5 MeV" }
            ],
            neetHack: "A useful formula for cyclotron kinetic energy is K = 2π²mf²r². This avoids calculating B first if frequency is given."
        },
        {
            title: "NEET Level: Galvanometer Conversion",
            titleTamil: "நீட் நிலை: கால்வனோமீட்டர் மாற்றம்",
            difficulty: 'Medium',
            problem: "A galvanometer with a coil resistance of 12 Ω shows a full-scale deflection for a current of 2.5 mA. How will you convert it into an ammeter of range 0 to 7.5 A?",
            problemTamil: "12 Ω சுருள் மின்தடையுள்ள ஒரு கால்வனோமீட்டர் 2.5 mA மின்னோட்டத்திற்கு முழு அளவு விலக்கத்தைக் காட்டுகிறது. இதை 0 முதல் 7.5 A வரையிலான ஒரு அம்மீட்டராக எவ்வாறு மாற்றுவீர்கள்?",
            solutionSteps: [
                { step: 1, explanation: "To convert a galvanometer to an ammeter, a low resistance called a shunt (S) must be connected in parallel with it.", explanationTamil: "ஒரு கால்வனோமீட்டரை அம்மீட்டராக மாற்ற, ஷண்ட் (S) எனப்படும் ஒரு குறைந்த மின்தடையை அதனுடன் பக்க இணைப்பில் இணைக்க வேண்டும்." },
                { step: 2, explanation: "The potential difference across the galvanometer and the shunt must be the same: I_g * G = I_s * S.", explanationTamil: "கால்வனோமீட்டர் மற்றும் ஷண்ட் முழுவதும் உள்ள மின்னழுத்த வேறுபாடு சமமாக இருக்க வேண்டும்." },
                { step: 3, explanation: "The total current I = I_g + I_s, so the current through the shunt is I_s = I - I_g.", explanationTamil: "மொத்த மின்னோட்டம் I = I_g + I_s, எனவே ஷண்ட் வழியாக செல்லும் மின்னோட்டம் I_s = I - I_g ஆகும்." },
                { step: 4, explanation: "Substitute I_s into the voltage equation: I_g * G = (I - I_g) * S. Solve for S.", calculation: "S = \\frac{I_g G}{I - I_g}" },
                { step: 5, explanation: "Substitute the given values. I = 7.5 A, I_g = 2.5 mA = 0.0025 A, G = 12 Ω.", calculation: "S = \\frac{0.0025 \\times 12}{7.5 - 0.0025} = \\frac{0.03}{7.4975} \\approx 0.004 \\Omega" },
                { step: 6, explanation: "So, a shunt resistance of approximately 4 mΩ should be connected in parallel.", explanationTamil: "எனவே, சுமார் 4 mΩ ஷண்ட் மின்தடையை பக்க இணைப்பில் இணைக்க வேண்டும்." }
            ]
        }
    ],
    mcqs: [
        { question: "A stationary charge produces:", options: ["A. Only a magnetic field", "B. Only an electric field", "C. Both electric and magnetic fields", "D. No field"], answer: "B. Only an electric field", explanation: "A stationary charge produces only an electrostatic field. A moving charge produces both electric and magnetic fields.", neetFrequency: 4 },
        { question: "The magnetic force on a moving charge is F = q(v x B). The force is:", options: ["A. Parallel to v", "B. Parallel to B", "C. Perpendicular to both v and B", "D. Parallel to v but perpendicular to B"], answer: "C. Perpendicular to both v and B", explanation: "The cross product of two vectors results in a vector that is perpendicular to the plane containing the original two vectors.", neetFrequency: 5 },
        { question: "The SI unit of magnetic field is:", options: ["A. Weber", "B. Gauss", "C. Tesla", "D. Oersted"], answer: "C. Tesla", explanation: "Tesla (T) is the SI unit of magnetic field strength. Gauss is a CGS unit (1 T = 10⁴ Gauss). Weber is the unit of magnetic flux.", neetFrequency: 3 },
        { question: "A long straight wire carries a current. The magnetic field lines are:", options: ["A. Straight lines parallel to the wire", "B. Straight lines perpendicular to the wire", "C. Concentric circles around the wire", "D. Radial, pointing outwards"], answer: "C. Concentric circles around the wire", explanation: "According to the right-hand thumb rule, the magnetic field lines form concentric circles in a plane perpendicular to the wire.", neetFrequency: 4 },
        { question: "Ampere's circuital law is analogous to which law in electrostatics?", options: ["A. Coulomb's law", "B. Gauss's law", "C. Ohm's law", "D. Kirchhoff's law"], answer: "B. Gauss's law", explanation: "Both laws relate a field (E or B) integrated over a closed surface/path to the source (charge or current) enclosed. Ampere's law simplifies B-field calculations for symmetric currents, just as Gauss's law simplifies E-field calculations.", neetFrequency: 3 },
        { question: "The force between two parallel currents is attractive if the currents are:", options: ["A. In the same direction", "B. In opposite directions", "C. Perpendicular", "D. Equal in magnitude"], answer: "A. In the same direction", explanation: "Parallel currents attract, anti-parallel currents repel.", neetFrequency: 5 },
        { question: "To convert a galvanometer into a voltmeter, we connect a:", options: ["A. Low resistance in series", "B. High resistance in series", "C. Low resistance in parallel", "D. High resistance in parallel"], answer: "B. High resistance in series", explanation: "A high series resistance is connected to limit the current through the galvanometer when a high voltage is applied across the combination.", neetFrequency: 4 },
        { question: "The path of a charged particle entering a uniform magnetic field perpendicular to its velocity is a:", options: ["A. Straight line", "B. Circle", "C. Parabola", "D. Helix"], answer: "B. Circle", explanation: "The magnetic force provides the constant centripetal force required for circular motion.", neetFrequency: 5 },
        { question: "A cyclotron is used to accelerate:", options: ["A. Electrons", "B. Neutrons", "C. Positive ions", "D. All of the above"], answer: "C. Positive ions", explanation: "Cyclotrons are used for accelerating heavy positive ions like protons, deuterons, and alpha particles. Electrons are too light and quickly become relativistic.", neetFrequency: 3 },
        { question: "The magnetic field at the center of a circular coil of radius R carrying current I is proportional to:", options: ["A. R", "B. 1/R", "C. R²", "D. 1/R²"], answer: "B. 1/R", explanation: "From the Biot-Savart law, the field at the center of a circular loop is B = μ₀I / (2R). So, B is proportional to 1/R.", neetFrequency: 4 },
        { question: "A proton enters a magnetic field of 1 T with a velocity of 10⁶ m/s at an angle of 30° with the field. The force on the proton is:", options: ["A. 8 x 10⁻¹⁴ N", "B. 1.6 x 10⁻¹³ N", "C. 0.8 x 10⁻¹³ N", "D. 16 x 10⁻¹³ N"], answer: "A. 8 x 10⁻¹⁴ N", explanation: "F = qvBsin(θ) = (1.6x10⁻¹⁹)(10⁶)(1)sin(30°) = 1.6x10⁻¹³ * 0.5 = 0.8x10⁻¹³ N.", neetFrequency: 4},
        { question: "A wire in the form of a circular loop of one turn carrying a current produces a magnetic field B at the center. If the same wire is looped to form a coil of 2 turns, the magnetic field at the center will be:", options: ["A. B", "B. 2B", "C. 4B", "D. B/2"], answer: "C. 4B", explanation: "B ∝ n/R. When looped to 2 turns, the new radius R' = R/2. So B' ∝ n'/R' = (2n)/(R/2) = 4n/R. So, B' = 4B.", neetFrequency: 3 },
        { question: "The magnetic field at a distance r from a long straight wire carrying current I is 0.4 T. The magnetic field at a distance 2r is:", options: ["A. 0.2 T", "B. 0.1 T", "C. 0.8 T", "D. 1.6 T"], answer: "A. 0.2 T", explanation: "B = μ₀I/(2πr), so B is inversely proportional to r. If r is doubled, B is halved. 0.4/2 = 0.2 T.", neetFrequency: 4 },
        { question: "A voltmeter should have:", options: ["A. Low resistance", "B. High resistance", "C. Zero resistance", "D. Infinite resistance"], answer: "B. High resistance", explanation: "An ideal voltmeter has infinite resistance. In practice, it has a very high resistance so that it draws negligible current from the main circuit.", neetFrequency: 2 },
        { question: "A neutron, a proton, an electron and an alpha particle enter a region of constant magnetic field with equal velocities. The track of which particle will be most curved?", options: ["A. Electron", "B. Proton", "C. Neutron", "D. Alpha particle"], answer: "A. Electron", explanation: "Radius r = mv/qB. Curvature is 1/r = qB/mv. The particle with the smallest mass-to-charge ratio (m/q) will have the largest curvature. For an electron, this ratio is the smallest.", neetFrequency: 3},
        { question: "Two parallel wires carry currents of 2A and 4A respectively in opposite directions. If the force per unit length on the first wire is F, the force per unit length on the second wire is:", options: ["A. F", "B. -F", "C. 2F", "D. F/2"], answer: "B. -F", explanation: "By Newton's third law, the force on wire 2 due to wire 1 is equal and opposite to the force on wire 1 due to wire 2.", neetFrequency: 4 },
        { question: "The sensitivity of a moving coil galvanometer can be increased by:", options: ["A. Decreasing the number of turns", "B. Increasing the magnetic field", "C. Increasing the torsional constant of the spring", "D. Decreasing the area of the coil"], answer: "B. Increasing the magnetic field", explanation: "Voltage sensitivity is (NBA)/(kR) and current sensitivity is (NBA)/k. Increasing the magnetic field B increases sensitivity.", neetFrequency: 3 },
        { question: "The magnetic moment of a current loop is independent of:", options: ["A. Number of turns", "B. Area of the loop", "C. Current in the loop", "D. Magnetic field in which it is lying"], answer: "D. Magnetic field in which it is lying", explanation: "Magnetic moment m = NIA. It is an intrinsic property of the current loop and does not depend on the external magnetic field.", neetFrequency: 2 },
        { question: "A charged particle moves through a magnetic field perpendicular to its direction. Then:", options: ["A. Kinetic energy changes but momentum is constant", "B. Both momentum and kinetic energy of the particle are not constant", "C. Both momentum and kinetic energy of the particle are constant", "D. Kinetic energy is constant but momentum changes"], answer: "D. Kinetic energy is constant but momentum changes", explanation: "The magnetic force changes the direction of velocity but not its magnitude (speed). So, kinetic energy (1/2 mv²) remains constant, but momentum (mv, a vector) changes due to the change in direction.", neetFrequency: 5 },
        { question: "The magnetic field B inside a long solenoid carrying current I is:", options: ["A. Proportional to I", "B. Proportional to 1/I", "C. Proportional to I²", "D. Independent of I"], answer: "A. Proportional to I", explanation: "The formula is B = μ₀nI, so the magnetic field is directly proportional to the current I.", neetFrequency: 2 },
        { question: "A current carrying loop is placed in a uniform magnetic field. The torque acting on it does not depend upon:", options: ["A. Shape of the loop", "B. Area of the loop", "C. Value of the current", "D. Magnetic field"], answer: "A. Shape of the loop", explanation: "Torque τ = NIABsinθ. It depends on the area (A), current (I), number of turns (N), and magnetic field (B), but not on the specific shape of the loop for a given area.", neetFrequency: 2 },
        { question: "The time period of a charged particle undergoing a circular motion in a uniform magnetic field is independent of:", options: ["A. Its mass", "B. Its charge", "C. The magnetic field", "D. Its speed"], answer: "D. Its speed", explanation: "T = 2πm/qB. The formula shows that the time period depends on mass, charge, and magnetic field, but not on the speed or radius of the circular path.", neetFrequency: 4 },
        { question: "An ammeter should have:", options: ["A. Low resistance", "B. High resistance", "C. High voltage", "D. Low current capacity"], answer: "A. Low resistance", explanation: "An ideal ammeter has zero resistance. In practice, it should have very low resistance to not alter the current of the circuit it is measuring.", neetFrequency: 2 },
        { question: "The nature of a magnetic field around a long straight current carrying wire is:", options: ["A. Uniform", "B. Radially outward", "C. Concentric circles", "D. Helical"], answer: "C. Concentric circles", explanation: "The magnetic field lines form concentric circles around the wire in a plane perpendicular to it, as described by the right-hand rule.", neetFrequency: 3 },
        { question: "A circular coil of 100 turns, radius 10 cm carries a current of 1 A. The magnetic moment of the coil is:", options: ["A. π A m²", "B. 10π A m²", "C. 0.1π A m²", "D. 100π A m²"], answer: "A. π A m²", explanation: "m = NIA = 100 * 1 * π * (0.1)² = 100 * π * 0.01 = π A m².", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "The magnetic force does no work on a moving charged particle.", reason: "The magnetic force is always perpendicular to the velocity of the particle.", answer: "A", explanation: "Reason is correct. Work done W = F⋅s = FvΔt cos(θ). Since the force is always perpendicular to the velocity (and displacement), θ=90° and cos(90°)=0. So, W=0. Reason correctly explains the assertion.", neetFrequency: 5 },
        { assertion: "Ampere's circuital law is not valid for all situations.", reason: "It is not valid for non-steady currents or situations where there is a changing electric field.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Ampere's law in its basic form fails for non-steady currents, which led Maxwell to introduce the concept of displacement current.", neetFrequency: 2 },
        { assertion: "An ammeter is a low-resistance galvanometer.", reason: "It is connected in parallel to the circuit.", answer: "C", explanation: "The assertion is true; an ammeter should have very low resistance so it doesn't significantly affect the current it is measuring. The reason is false; an ammeter is connected in series in the circuit.", neetFrequency: 4 },
        { assertion: "It is not possible for a cyclotron to accelerate electrons.", reason: "Electrons are too light and gain speed very quickly, going out of phase with the oscillating electric field.", answer: "A", explanation: "Assertion is true. The reason is also true and correctly explains why. Due to their small mass, electrons reach relativistic speeds quickly, and their mass changes, which disrupts the cyclotron resonance condition.", neetFrequency: 3 },
        { assertion: "The magnetic field inside a long solenoid is uniform and parallel to its axis.", reason: "The field outside the solenoid is nearly zero.", answer: "B", explanation: "Both statements are true for an ideal long solenoid. However, the fact that the field outside is zero is a consequence of the geometry and Ampere's law, not the direct reason for the uniformity of the field inside. The uniformity inside is due to the superposition of fields from all the turns.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Lorentz Force", "(b) Biot-Savart Law", "(c) Ampere's Law", "(d) Force on wire"], column2: ["(p) `∮B⋅dl = μ₀I`", "(q) `F = I(L x B)`", "(r) `F = q(E + v x B)`", "(s) `dB = (μ₀/4π) I(dl x r)/r³`"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching the physical laws/quantities with their mathematical expressions." },
        { column1: ["(a) Ammeter", "(b) Voltmeter", "(c) Cyclotron", "(d) Solenoid"], column2: ["(p) High resistance in series", "(q) Uniform magnetic field", "(r) Resonance condition", "(s) Low resistance in parallel"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching devices with their key principle or construction feature." },
        { column1: ["(a) Magnetic field unit", "(b) Magnetic flux unit", "(c) Permeability unit", "(d) Magnetic moment unit"], column2: ["(p) Weber", "(q) A m²", "(r) T m/A", "(s) Tesla"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching physical quantities with their SI units." },
        { column1: ["(a) Motion of charge in B-field", "(b) Torque on a current loop", "(c) Force on a straight wire", "(d) Force between parallel wires"], column2: ["(p) `F = BILsinθ`", "(q) `τ = NIABsinθ`", "(r) `F/L = μ₀I₁I₂/2πd`", "(s) `r = mv/qB`"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching the physical situation with its corresponding formula." },
        { column1: ["(a) Current carrying straight wire", "(b) Current carrying circular loop (at center)", "(c) Current carrying solenoid (inside)", "(d) Current carrying toroid (inside)"], column2: ["(p) B = μ₀I/(2R)", "(q) B = μ₀nI", "(r) B = μ₀NI/(2πr)", "(s) B = μ₀I/(2πr)"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching different current configurations with the formula for the magnetic field they produce." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
          {
            formula: `\\vec{F} = q \\bigl(\\vec{v} \\times \\vec{B}\\bigr)`,
            description: "Lorentz force on a moving charge",
            descriptionTamil: "நகரும் மினக்கணத்தின் மீது லொரென்ஸ் விசை"
          },
          {
            formula: `d\\vec{F} = I\\,d\\vec{l} \\times \\vec{B}`,
            description: "Force on a current element",
            descriptionTamil: "மின் ஓட்டு கூறின் மீது விசை"
          },
          {
            formula: `d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\,d\\vec{l} \\times \\hat{r}}{r^2}`,
            description: "Biot–Savart law for field due to current element",
            descriptionTamil: "Biot–Savart விதி மூலம் மின்ஒட்டுக் கூறால் உருவாகும் புலம்"
          },
          {
            formula: `\\displaystyle \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}`,
            description: "Ampère’s circuital law",
            descriptionTamil: "Ampère சுற்றுப் பாதைச் சட்டம்"
          },
          {
            formula: `r = \\frac{m v_{\\perp}}{q B}, \\quad \\omega = \\frac{q B}{m}`,
            description: "Radius and angular frequency of circular motion",
            descriptionTamil: "சுற்று இயக்கத்தின் வீதி மற்றும் கோண வேகம்"
          },
          {
            formula: `\\vec{\\mu} = I\\,\\vec{A}, \\quad \\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}`,
            description: "Magnetic dipole moment and torque on a loop",
            descriptionTamil: "காந்த இருமுகத் தன்மை மற்றும் கட்டுமoment"
          },
          {
            formula: `U = -\\vec{\\mu} \\cdot \\vec{B}`,
            description: "Potential energy of a magnetic dipole",
            descriptionTamil: "காந்த இருமுகத்தின் சக்தி நிலை"
          },
          {
            formula: `\\varepsilon = -\\dfrac{d\\Phi}{dt}`,
            description: "Faraday’s law of electromagnetic induction",
            descriptionTamil: "மின்னோக்கும விதி"
          }
        ],
        diagrams: []
    },    
    keyTakeaways: [
        "Moving charges and currents are the sources of magnetic fields.",
        "A magnetic field exerts a force only on a moving charge, and this force does no work.",
        "The path of a charged particle in a uniform magnetic field is a circle or a helix.",
        "Parallel currents attract, and anti-parallel currents repel."
    ],
    mnemonics: [
        { text: "Biot-Savart is 'bottom-up' (calculates B from small elements), Ampere's Law is 'top-down' (relates B on a large loop to the current inside).", tamil: "பயோ-சவர்ட் 'கீழிருந்து-மேல்' (சிறிய கூறுகளிலிருந்து B கணக்கிடுகிறது), ஆம்பியரின் விதி 'மேலிருந்து-கீழ்' (ஒரு பெரிய வளையத்தில் B-ஐ உள்ளே உள்ள மின்னோட்டத்துடன் தொடர்புபடுத்துகிறது)." }
    ],
    neetTips: [
        { text: "The Right-Hand Rule is essential. Practice it for finding the direction of B-field (thumb points along I, fingers curl in direction of B) and the direction of force (F = q(v x B)).", tamil: "வலது-கை விதி அவசியம். B-புலத்தின் திசையைக் கண்டறிய (கட்டைவிரல் I-ன் திசையில், விரல்கள் B-ன் திசையில் சுருளும்) மற்றும் விசையின் திசையைக் கண்டறிய (F = q(v x B)) பயிற்சி செய்யுங்கள்." },
        { text: "Problems involving the motion of a charged particle in a magnetic field are very common. Remember that the time period and frequency are independent of the particle's speed.", tamil: "ஒரு காந்தப்புலத்தில் ஒரு மின்னூட்டத் துகளின் இயக்கம் சம்பந்தப்பட்ட கணக்குகள் மிகவும் பொதுவானவை. நேர காலம் மற்றும் அதிர்வெண் ஆகியவை துகளின் வேகத்தைச் சார்ந்து இல்லை என்பதை நினைவில் கொள்க." }
    ],
    studentTip: {
        english: "Always draw the velocity vector and magnetic field lines before applying F = q (v × B). Confirm both magnitude and direction with the right-hand rule to avoid sign mistakes.",
        tamil: "F = q (v × B) பயன்படுத்துவதற்கு முன் வேகம் வெக்டர் மற்றும் காந்த புல வரிகளை வரைந்து வையுங்கள். வலது கை விதியால் திசையையும் சந்ததியையும் உறுதிசெய்து பிழைகளை தவிர்க்கவும்."
      },
      peerDiscussion: {
        english: "Discuss how crossed electric and magnetic fields produce a drift velocity v_d = E × B / B² independent of charge sign, and explore its application in mass spectrometers.",
        tamil: "ஒருங்குகிற மின் மற்றும் காந்த புலங்கள் E × B/B² திசையில் சுழற்சி வேகத்தை உருவாக்குவது எப்படி, மற்றும் இதன் பயன்பாட்டை மாஸ் ஸ்பெக்டிரோமீட்டர்களில் ஆராயுங்கள்."
      }
};

    