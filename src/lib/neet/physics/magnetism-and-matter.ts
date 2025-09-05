
import type { NeetModule } from '@/lib/types';

export const magnetismAndMatterModule: NeetModule = {
    id: 'neet-physics-magnetism-and-matter',
    title: 'Physics - Magnetism and Matter (காந்தவியல் மற்றும் பருப்பொருட்கள்)',
    chapter: 'Magnetism and Matter',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of a bar magnet as an equivalent solenoid.",
        "Define magnetic field lines and their properties.",
        "Analyze the torque on a magnetic dipole (bar magnet) in a uniform magnetic field.",
        "Understand Gauss's law for magnetism, implying that magnetic monopoles do not exist.",
        "Describe the Earth's magnetic field and its elements (declination, dip, horizontal component).",
        "Classify materials based on their magnetic properties: diamagnetic, paramagnetic, and ferromagnetic.",
        "Define and understand magnetization, magnetic intensity, and magnetic susceptibility."
    ],
    prerequisites: [
        "Basic concepts from 'Moving Charges and Magnetism'.",
        "Analogy with concepts from Electrostatics (dipoles, fields)."
    ],
    conceptOverview: "This chapter delves into the behavior of magnetic fields and materials. We start by treating the familiar bar magnet as a magnetic dipole, drawing strong analogies to the electric dipole studied in electrostatics. A key concept is Gauss's law for magnetism, which mathematically states that isolated magnetic poles (monopoles) do not exist. We then explore the Earth's own magnetic field, a crucial element for navigation. Finally, the chapter classifies all materials based on how they respond to an external magnetic field, introducing diamagnetism, paramagnetism, and ferromagnetism. This provides a microscopic understanding of why some materials are strongly magnetic while others are not.",
    tamilConnection: "திசைகாட்டி (compass) காந்த ஊசி வடக்கு-தெற்கு திசையிலேயே நிற்பதற்குக் காரணம், பூமி ஒரு பெரிய காந்தம் போல செயல்படுவதுதான். இந்த அத்தியாயம், பூமியின் காந்தப்புலம் பற்றியும், வெவ்வேறு பொருட்கள் காந்தப்புலத்தில் எவ்வாறு செயல்படுகின்றன என்பதையும் விளக்குகிறது. இரும்பு போன்ற சில பொருட்கள் ஏன் காந்தத்தால் வலுவாக ஈர்க்கப்படுகின்றன என்பதையும் இது தெளிவுபடுத்துகிறது.",
    culturalContext: "Ancient Tamil mariners were known for their navigational skills. While they primarily used stars, an intuitive understanding of direction, possibly aided by naturally occurring magnetic stones (lodestones), was crucial. This chapter provides the scientific basis for the Earth's magnetic field, the very principle that makes a modern magnetic compass work.",
    syllabusMapping: [
         {
            topic: 'Magnetism and Matter',
            tnBoardChapter: '12th Std Physics - Vol 1, Chapter 3: Magnetism and Magnetic Effects of Electric Current',
            ncertReference: 'Class 12 Physics - Part 1, Chapter 5: Magnetism and Matter',
            notes: 'A chapter with more theoretical concepts. Earth\'s magnetism and the classification of magnetic materials (dia, para, ferro) are important topics. Questions are often conceptual.',
            mappingDescription: '12th Std Physics - Vol 1, Chapter 3 maps to NEET Physics Unit 13'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. The Bar Magnet as an Equivalent Solenoid (சட்டக் காந்தம் ஒரு வரிச்சுருளுக்கு சமமானது)
A current loop acts as a magnetic dipole. A long solenoid carrying current can be considered as an arrangement of many such circular current loops, and it produces a magnetic field similar to that of a bar magnet. The magnetic moment ($\\vec{m}$) of a solenoid is $m = NIA$.`,
            tamil: `ஒரு மின்னோட்ட வளையம் ஒரு காந்த இருமுனையாக செயல்படுகிறது. மின்னோட்டத்தைக் கொண்டு செல்லும் ஒரு நீண்ட வரிச்சுருளை, பல வட்ட வடிவ மின்னோட்ட வளையங்களின் ஒரு அமைப்பாகக் கருதலாம், மேலும் இது ஒரு சட்டக் காந்தத்தைப் போன்ற ஒரு காந்தப்புலத்தை உருவாக்குகிறது. ஒரு வரிச்சுருளின் காந்தத் திருப்புத்திறன் ($\\vec{m}$) $m = NIA$ ஆகும்.`
        },
        {
            english: `### 2. Gauss's Law for Magnetism (காந்தவியலுக்கான காஸ் விதி)
The net magnetic flux through any closed surface is always zero.
$$ \\oint \\vec{B} \\cdot d\\vec{A} = 0 $$
This law implies that magnetic monopoles (isolated North or South poles) do not exist. Magnetic field lines are always closed loops.`,
            tamil: `எந்தவொரு மூடிய பரப்பின் வழியாகவும் செல்லும் நிகர காந்தப் பாயம் எப்போதும் சுழியாகும்.
$$ \\oint \\vec{B} \\cdot d\\vec{A} = 0 $$
இந்த விதி காந்த ஒற்றை முனைகள் (தனித்த வட அல்லது தென் முனைகள்) இல்லை என்பதைக் குறிக்கிறது. காந்தப்புலக் கோடுகள் எப்போதும் மூடிய வளைவுகளாகும்.`
        },
        {
            english: `### 3. Earth's Magnetism (புவிக் காந்தவியல்)
The Earth behaves as if a giant bar magnet is placed deep inside it. The elements of Earth's magnetic field at a place are:
*   **Magnetic Declination ($\\delta$):** The angle between the geographic meridian and the magnetic meridian.
*   **Angle of Dip or Inclination (I):** The angle that the Earth's total magnetic field $\\vec{B}_E$ makes with the horizontal.
*   **Horizontal Component ($B_H$):** The component of the Earth's magnetic field in the horizontal direction. $B_H = B_E \\cos(I)$.`
        },
        {
            english: `### 4. Magnetization and Magnetic Intensity
*   **Magnetic Intensity ($\\vec{H}$):** The degree to which a magnetic field can magnetize a material.
*   **Magnetization ($\\vec{M}$):** The magnetic dipole moment developed per unit volume of a material when placed in a magnetizing field.
*   **Magnetic Susceptibility ($\\chi$):** A measure of how easily a material can be magnetized. $\\chi = M/H$. It is a dimensionless quantity.
*   **Relationship:** $B = \\mu_0 (H + M) = \\mu_0 (1+\\chi)H = \\mu H$. Here $\\mu$ is the magnetic permeability of the material.`
        },
        {
            english: `### 5. Classification of Magnetic Materials

| Property | Diamagnetic (டயா காந்தப் பொருட்கள்) | Paramagnetic (பாரா காந்தப் பொருட்கள்) | Ferromagnetic (ஃபெர்ரோ காந்தப் பொருட்கள்) |
| :--- | :--- | :--- | :--- |
| **Cause** | Orbital motion of electrons | Electron spin | Formation of domains |
| **Behavior in Field** | Feebly repelled | Feebly attracted | Strongly attracted |
| **Susceptibility $\\chi$** | Small and negative | Small and positive | Large and positive |
| **Permeability $\\mu_r$** | Slightly < 1 | Slightly > 1 | Much >> 1 |
| **Temperature Dep.**| Independent | Obeys Curie's Law ($\\chi \\propto 1/T$) | Obeys Curie-Weiss Law |
| **Examples** | Bismuth, Copper, Water | Aluminum, Calcium, Oxygen | Iron, Cobalt, Nickel |`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Earth's Magnetism",
            titleTamil: "நீட் நிலை: புவிக் காந்தவியல்",
            difficulty: 'Medium',
            problem: "At a certain location, the horizontal component of the Earth's magnetic field is √3 times the vertical component. What is the angle of dip at this location?",
            problemTamil: "ஒரு குறிப்பிட்ட இடத்தில், புவியின் காந்தப்புலத்தின் கிடைமட்டக் கூறு அதன் செங்குத்துக் கூறைப் போல √3 மடங்கு உள்ளது. அந்த இடத்தில் சரிவுக் கோணம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Recall the relationship between the horizontal component (B_H), vertical component (B_V), and the angle of dip (I).", calculation: "B_H = B_E cos(I) and B_V = B_E sin(I)" },
                { step: 2, explanation: "From the above, we can write tan(I) = B_V / B_H.", explanationTamil: "மேற்கண்டவற்றிலிருந்து, tan(I) = B_V / B_H என எழுதலாம்." },
                { step: 3, explanation: "Use the given condition: B_H = √3 * B_V.", explanationTamil: "கொடுக்கப்பட்ட நிபந்தனையைப் பயன்படுத்தவும்: B_H = √3 * B_V." },
                { step: 4, explanation: "Substitute this into the tan(I) formula.", calculation: "tan(I) = B_V / (√3 * B_V) = 1/√3" },
                { step: 5, explanation: "Find the angle I for which tan(I) = 1/√3.", calculation: "I = 30°" }
            ],
            neetHack: "Remember tan(I) = V/H (Vertical over Horizontal). This is a very direct and frequently used formula.",
            commonPitfall: "Mixing up the ratio, i.e., calculating B_H/B_V instead of B_V/B_H for tan(I)."
        },
        {
            title: "JEE Level: Magnetic Properties",
            titleTamil: "ஜே.இ.இ நிலை: காந்தப் பண்புகள்",
            difficulty: 'Medium',
            problem: "The magnetic susceptibility of a paramagnetic substance at -73°C is 0.0060. What will be its susceptibility at -173°C?",
            problemTamil: "-73°C வெப்பநிலையில் ஒரு பாரா காந்தப் பொருளின் காந்த ஏற்புத்திறன் 0.0060 ஆகும். -173°C இல் அதன் ஏற்புத்திறன் என்னவாக இருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "According to Curie's Law, the susceptibility (χ) of a paramagnetic substance is inversely proportional to the absolute temperature (T). χ ∝ 1/T.", explanationTamil: "கியூரி விதிப்படி, ஒரு பாரா காந்தப் பொருளின் ஏற்புத்திறன் (χ) தனி வெப்பநிலைக்கு (T) எதிர்விகிதத்தில் இருக்கும். χ ∝ 1/T." },
                { step: 2, explanation: "This means χ₁T₁ = χ₂T₂.", explanationTamil: "அதாவது χ₁T₁ = χ₂T₂." },
                { step: 3, explanation: "Convert the given temperatures to Kelvin. T₁ = -73°C + 273 = 200 K. T₂ = -173°C + 273 = 100 K.", explanationTamil: "கொடுக்கப்பட்ட வெப்பநிலைகளை கெல்வின் ஆக மாற்றவும்." },
                { step: 4, explanation: "Substitute the values into the relation to find the new susceptibility χ₂.", calculation: "χ₂ = χ₁ (T₁/T₂) = 0.0060 * (200 K / 100 K) = 0.0060 * 2 = 0.0120" }
            ],
            commonPitfall: "Forgetting to convert Celsius to Kelvin. All laws involving temperature proportionality in thermodynamics and magnetism use absolute temperature (Kelvin).",
            neetHackTamil: "செல்சியஸை கெல்வின் ஆக மாற்ற மறப்பது. வெப்ப இயக்கவியல் மற்றும் காந்தவியலில் வெப்பநிலை விகிதாசாரத்தை உள்ளடக்கிய அனைத்து விதிகளும் தனி வெப்பநிலையை (கெல்வின்) பயன்படுத்துகின்றன."
        },
        {
            title: "NEET Level: Torque on a Bar Magnet",
            titleTamil: "நீட் நிலை: சட்டக் காந்தத்தின் மீதான திருப்புவிசை",
            difficulty: 'Easy',
            problem: "A bar magnet of magnetic moment 1.5 J/T lies aligned with the direction of a uniform magnetic field of 0.22 T. What is the amount of work required to turn the magnet so as to align its magnetic moment normal to the field direction?",
            problemTamil: "1.5 J/T காந்தத் திருப்புத்திறன் கொண்ட ஒரு சட்டக் காந்தம், 0.22 T சீரான காந்தப்புலத்தின் திசையுடன் சீரமைக்கப்பட்டுள்ளது. காந்தத்தின் காந்தத் திருப்புத்திறனை புலத்தின் திசைக்கு செங்குத்தாக சீரமைக்கத் தேவையான வேலையின் அளவு என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Work done in rotating a magnetic dipole in a magnetic field is W = ΔU = U_f - U_i.", explanationTamil: "ஒரு காந்தப்புலத்தில் ஒரு காந்த இருமுனையை சுழற்றுவதில் செய்யப்படும் வேலை W = ΔU = U_f - U_i." },
                { step: 2, explanation: "The potential energy of a dipole is U = -mBcosθ.", explanationTamil: "ஒரு இருமுனையின் நிலை ஆற்றல் U = -mBcosθ." },
                { step: 3, explanation: "Initial position: aligned with the field, so θ₁ = 0°. U_i = -mBcos(0°) = -mB.", explanationTamil: "ஆரம்ப நிலை: புலத்துடன் சீரமைக்கப்பட்டுள்ளது, எனவே θ₁ = 0°." },
                { step: 4, explanation: "Final position: normal to the field, so θ₂ = 90°. U_f = -mBcos(90°) = 0.", explanationTamil: "இறுதி நிலை: புலத்திற்கு செங்குத்தாக, எனவே θ₂ = 90°." },
                { step: 5, explanation: "Calculate the work done.", calculation: "W = U_f - U_i = 0 - (-mB) = mB = (1.5 J/T) * (0.22 T) = 0.33 J" }
            ],
            commonPitfall: "Confusing the formula for torque (τ = mBsinθ) with the formula for potential energy (U = -mBcosθ)."
        },
        {
            title: "JEE Level: Hysteresis Loop",
            titleTamil: "ஜே.இ.இ நிலை: காந்தத் தயக்கச் சுற்று",
            difficulty: 'Medium',
            problem: "The area of the hysteresis loop of a substance is 250 J/m³. Find the energy loss per hour in a specimen of mass 5 kg and density 7.5 g/cm³ if it is carried through 50 cycles per second.",
            problemTamil: "ஒரு பொருளின் காந்தத் தயக்கச் சுற்றின் பரப்பளவு 250 J/m³ ஆகும். 5 கிகி நிறை மற்றும் 7.5 கி/செமீ³ அடர்த்தி கொண்ட ஒரு மாதிரியில் ஒரு வினாடிக்கு 50 சுழற்சிகள் மேற்கொள்ளப்பட்டால், ஒரு மணி நேரத்திற்கு ஏற்படும் ஆற்றல் இழப்பைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "The area of the hysteresis loop gives the energy loss per unit volume per cycle.", explanationTamil: "காந்தத் தயக்கச் சுற்றின் பரப்பளவு ஒரு சுழற்சிக்கு ஒரு அலகு பருமனுக்கான ஆற்றல் இழப்பைக் கொடுக்கிறது." },
                { step: 2, explanation: "Calculate the volume of the specimen. Convert density to SI units. Density = 7.5 g/cm³ = 7500 kg/m³.", calculation: "Volume V = Mass / Density = 5 kg / 7500 kg/m³ = 1/1500 m³" },
                { step: 3, explanation: "Calculate the total energy loss per cycle for the entire specimen.", calculation: "Energy loss per cycle = (Area) * (Volume) = 250 J/m³ * (1/1500 m³) = 1/6 J" },
                { step: 4, explanation: "Calculate the energy loss per second. The frequency is 50 cycles/second.", calculation: "Energy loss per second = (Energy loss per cycle) * (cycles per second) = (1/6 J) * 50 = 50/6 J/s = 25/3 W" },
                { step: 5, explanation: "Calculate the total energy loss in one hour (3600 seconds).", calculation: "Total energy loss = (25/3 J/s) * 3600 s = 25 * 1200 = 30000 J = 30 kJ" }
            ],
            commonPitfall: "Mixing up energy loss per unit volume, per cycle, and per second. Break the problem down step-by-step."
        },
        {
            title: "NEET Level: Properties of Magnetic Materials",
            titleTamil: "நீட் நிலை: காந்தப் பொருட்களின் பண்புகள்",
            difficulty: 'Easy',
            problem: "A diamagnetic substance is brought near the north pole of a bar magnet. What will happen?",
            problemTamil: "ஒரு டயா காந்தப் பொருள் ஒரு சட்டக் காந்தத்தின் வட முனைக்கு அருகில் கொண்டு வரப்படுகிறது. என்ன நடக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Recall the fundamental property of diamagnetic materials.", explanationTamil: "டயா காந்தப் பொருட்களின் அடிப்படைப் பண்பை நினைவுகூர்க." },
                { step: 2, explanation: "Diamagnetic materials are feebly repelled by magnetic fields. This repulsion occurs regardless of whether it is a north or a south pole.", explanationTamil: "டயா காந்தப் பொருட்கள் காந்தப்புலங்களால் மெலிதாக விரட்டப்படுகின்றன. இது வட முனை அல்லது தென் முனையாக இருந்தாலும் இந்த விலக்கு ஏற்படும்." },
                { step: 3, explanation: "Therefore, the diamagnetic substance will be repelled by the north pole of the bar magnet.", explanationTamil: "எனவே, டயா காந்தப் பொருள் சட்டக் காந்தத்தின் வட முனையால் விரட்டப்படும்." }
            ]
        }
    ],
    mcqs: [
        { question: "Magnetic monopoles:", options: ["A. Exist in ferromagnetic materials", "B. Exist in paramagnetic materials", "C. Exist in diamagnetic materials", "D. Do not exist"], answer: "D. Do not exist", explanation: "According to Gauss's law for magnetism, the net magnetic flux through any closed surface is zero. This implies that isolated magnetic poles (monopoles) do not exist.", neetFrequency: 4 },
        { question: "Which of the following is a diamagnetic material?", options: ["A. Aluminum", "B. Iron", "C. Copper", "D. Sodium"], answer: "C. Copper", explanation: "Copper is a classic example of a diamagnetic material. Iron is ferromagnetic, and Aluminum and Sodium are paramagnetic.", neetFrequency: 3 },
        { question: "The angle of dip at the magnetic equator of the Earth is:", options: ["A. 0°", "B. 30°", "C. 45°", "D. 90°"], answer: "A. 0°", explanation: "At the magnetic equator, the Earth's magnetic field lines are horizontal, so the angle of dip (the angle with the horizontal) is zero.", neetFrequency: 5 },
        { question: "The magnetic susceptibility is negative for:", options: ["A. Paramagnetic materials", "B. Ferromagnetic materials", "C. Diamagnetic materials", "D. All of the above"], answer: "C. Diamagnetic materials", explanation: "Diamagnetic materials are repelled by magnetic fields, and their magnetic susceptibility (χ) is small and negative.", neetFrequency: 4 },
        { question: "A bar magnet is cut into two equal halves perpendicular to its length. The magnetic moment of each half will be:", options: ["A. Doubled", "B. Halved", "C. Same", "D. Zero"], answer: "B. Halved", explanation: "Magnetic moment m = pole strength (q_m) × length (2l). When cut perpendicular to the length, the new length becomes l, so the new magnetic moment m' = q_m × l = m/2.", neetFrequency: 3 },
        { question: "Which of the following statements about magnetic field lines is incorrect?", options: ["A. They form continuous closed loops.", "B. The tangent at any point gives the direction of the magnetic field.", "C. They can intersect each other.", "D. They emerge from the North pole and enter the South pole outside the magnet."], answer: "C. They can intersect each other.", explanation: "If two magnetic field lines were to intersect, it would mean that there are two directions of the magnetic field at the same point, which is physically impossible.", neetFrequency: 4 },
        { question: "The temperature above which a ferromagnetic material becomes paramagnetic is called the:", options: ["A. Critical temperature", "B. Boyle temperature", "C. Curie temperature", "D. Inversion temperature"], answer: "C. Curie temperature", explanation: "The Curie temperature is the critical point at which a ferromagnetic material loses its permanent magnetic properties and becomes paramagnetic.", neetFrequency: 5 },
        { question: "The relationship between magnetic permeability (μ) and magnetic susceptibility (χ) is:", options: ["A. μ = μ₀(1 + χ)", "B. μ = μ₀(1 - χ)", "C. μ = μ₀χ", "D. χ = μ₀(1 + μ)"], answer: "A. μ = μ₀(1 + χ)", explanation: "This is the fundamental relationship connecting permeability, susceptibility, and the permeability of free space.", neetFrequency: 3 },
        { question: "The work done in rotating a magnet of magnetic moment M in a magnetic field B from the direction of the field (θ=0) to the opposite direction (θ=180°) is:", options: ["A. 0", "B. MB", "C. -2MB", "D. 2MB"], answer: "D. 2MB", explanation: "Work W = ΔU = U_f - U_i = (-MBcos180°) - (-MBcos0°) = (-MB(-1)) - (-MB(1)) = MB + MB = 2MB.", neetFrequency: 4 },
        { question: "Superconductors are perfect:", options: ["A. Ferromagnets", "B. Paramagnets", "C. Diamagnets", "D. Insulators"], answer: "C. Diamagnets", explanation: "Superconductors exhibit perfect diamagnetism (Meissner effect), where they expel all magnetic fields from their interior. Their susceptibility χ = -1.", neetFrequency: 2 },
        { question: "The SI unit of magnetic pole strength is:", options: ["A. Ampere-meter²", "B. Ampere/meter", "C. Ampere-meter", "D. Tesla"], answer: "C. Ampere-meter", explanation: "From m = q_m * 2l, the unit of pole strength q_m is (A m²)/m = A m.", neetFrequency: 1 },
        { question: "The value of the angle of dip is 90° at the:", options: ["A. Equator", "B. Tropic of Cancer", "C. Magnetic poles", "D. 45° latitude"], answer: "C. Magnetic poles", explanation: "At the magnetic poles, the Earth's magnetic field is vertical, so the dip angle is 90°.", neetFrequency: 4 },
        { question: "According to Curie's law, the magnetic susceptibility of a paramagnetic substance is:", options: ["A. Directly proportional to temperature", "B. Inversely proportional to temperature", "C. Independent of temperature", "D. Proportional to the square of temperature"], answer: "B. Inversely proportional to temperature", explanation: "Curie's Law states that χ ∝ 1/T for paramagnetic materials.", neetFrequency: 3 },
        { question: "A soft iron bar is inserted inside a current-carrying solenoid. The magnetic field inside the solenoid:", options: ["A. Will decrease", "B. Will increase", "C. Will become zero", "D. Will remain unchanged"], answer: "B. Will increase", explanation: "Soft iron is a ferromagnetic material, which gets strongly magnetized in the direction of the field, thus greatly increasing the net magnetic field.", neetFrequency: 4 },
        { question: "The source of the Earth's magnetic field is believed to be:", options: ["A. A large bar magnet in the core", "B. Circulating currents in the liquid core", "C. The sun's magnetic field", "D. Cosmic rays"], answer: "B. Circulating currents in the liquid core", explanation: "The dynamo effect, caused by convection currents of molten iron and nickel in the Earth's outer core, is the most accepted theory for the origin of Earth's magnetism.", neetFrequency: 1 },
        { question: "Which material is used for making the core of electromagnets?", options: ["A. Steel", "B. Soft iron", "C. Alnico", "D. Copper"], answer: "B. Soft iron", explanation: "Soft iron is used because it has high permeability and low retentivity, meaning it can be easily magnetized and demagnetized.", neetFrequency: 3 },
        { question: "The direction of the Earth's magnetic field at a place is from:", options: ["A. Geographic South to North", "B. Geographic North to South", "C. Magnetic South to North", "D. Magnetic North to South"], answer: "C. Magnetic South to North", explanation: "The 'North' pole of a compass needle (which is itself a north magnetic pole) points towards the Earth's geographic North. This means the Earth's magnetic pole in the northern hemisphere is actually a magnetic South pole.", neetFrequency: 2 },
        { question: "If a diamagnetic solution is poured into a U-tube and one arm is placed in a strong magnetic field, the liquid level in that arm will:", options: ["A. Rise", "B. Fall", "C. Remain the same", "D. Oscillate"], answer: "B. Fall", explanation: "Diamagnetic materials are repelled by magnetic fields. The liquid will move from the stronger field region to the weaker field region, causing the level to fall.", neetFrequency: 2 },
        { question: "The relative permeability (μ_r) of a ferromagnetic substance is:", options: ["A. Less than 1", "B. Slightly more than 1", "C. Equal to 1", "D. Much greater than 1"], answer: "D. Much greater than 1", explanation: "Ferromagnetic materials are strongly magnetized, so their relative permeability is very large (often in the hundreds or thousands).", neetFrequency: 3 },
        { question: "Torque on a bar magnet in a magnetic field is maximum when the angle between the magnetic moment and the field is:", options: ["A. 0°", "B. 45°", "C. 90°", "D. 180°"], answer: "C. 90°", explanation: "Torque τ = mBsinθ. The sine function is maximum (1) when θ = 90°.", neetFrequency: 4 },
        { question: "The potential energy of a magnetic dipole in a magnetic field is minimum when it is:", options: ["A. Perpendicular to the field", "B. Parallel to the field", "C. Anti-parallel to the field", "D. At 45° to the field"], answer: "B. Parallel to the field", explanation: "Potential energy U = -mBcosθ. It is minimum (most negative) when cosθ is maximum (+1), which occurs at θ = 0° (parallel).", neetFrequency: 3 },
        { question: "Magnetic field lines:", options: ["A. Start from N-pole and end on S-pole", "B. Form closed loops", "C. Can intersect each other", "D. Are crowded where the field is weak"], answer: "B. Form closed loops", explanation: "Unlike electric field lines, magnetic field lines do not have a starting or ending point; they always form continuous closed loops.", neetFrequency: 2 },
        { question: "Hysteresis loss is minimized by using a material with:", options: ["A. High retentivity, high coercivity", "B. Low retentivity, high coercivity", "C. High retentivity, low coercivity", "D. Low retentivity, low coercivity"], answer: "D. Low retentivity, low coercivity", explanation: "The area of the hysteresis loop represents energy loss. A thin loop (low retentivity and low coercivity) has a small area, minimizing energy loss. Soft iron is an example.", neetFrequency: 3 },
        { question: "The vertical component of Earth's magnetic field at a place is √3 times the horizontal component. The value of angle of dip at this place is:", options: ["A. 30°", "B. 45°", "C. 60°", "D. 90°"], answer: "C. 60°", explanation: "tan(I) = B_V/B_H. Given B_V = √3 * B_H. So, tan(I) = (√3 * B_H) / B_H = √3. This means I = 60°.", neetFrequency: 4 },
        { question: "A magnetic needle is kept in a non-uniform magnetic field. It experiences:", options: ["A. A force but not a torque", "B. A torque but not a force", "C. A force and a torque", "D. Neither a force nor a torque"], answer: "C. A force and a torque", explanation: "In a non-uniform field, the forces on the two poles will not be equal and opposite, resulting in a net force. There will also be a torque unless the needle is aligned with the field.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "The poles of a magnet cannot be separated by breaking it into two pieces.", reason: "Magnetic monopoles do not exist.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. Every piece of a magnet, no matter how small, will have its own north and south pole.", neetFrequency: 4 },
        { assertion: "Diamagnetism is present in all materials.", reason: "Diamagnetism is the result of changes in the orbital motion of electrons due to an external magnetic field.", answer: "A", explanation: "Assertion is true. All materials have electrons in orbits, so diamagnetism is a universal property. However, it is a very weak effect and is often overshadowed by stronger paramagnetic or ferromagnetic effects. The reason correctly explains the origin of diamagnetism.", neetFrequency: 2 },
        { assertion: "The angle of dip is 90° at the magnetic poles of the Earth.", reason: "At the magnetic poles, the Earth's magnetic field is purely vertical.", answer: "A", explanation: "Assertion is true. The reason is also true and correctly explains why the dip angle is 90°. The dip needle would stand vertically at the magnetic poles.", neetFrequency: 3 },
        { assertion: "Ferromagnetic substances make permanent magnets.", reason: "They have high retentivity and high coercivity.", answer: "A", explanation: "The assertion is true. The reason is also true and correctly explains the properties needed for a permanent magnet. High retentivity means it stays magnetized, and high coercivity means it resists demagnetization.", neetFrequency: 3 },
        { assertion: "A compass needle placed at a magnetic pole will be free to rotate in any horizontal direction.", reason: "At the magnetic poles, the horizontal component of the Earth's magnetic field is zero.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. Since B_H = 0, there is no horizontal force to align the compass needle in any particular horizontal direction.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Diamagnetic", "(b) Paramagnetic", "(c) Ferromagnetic", "(d) Superconductor"], column2: ["(p) χ is large and positive", "(q) χ = -1", "(r) χ is small and positive", "(s) χ is small and negative"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching magnetic materials with their susceptibility (χ) values." },
        { column1: ["(a) Gauss's Law for Magnetism", "(b) Curie's Law", "(c) Malus's Law", "(d) Brewster's Law"], column2: ["(p) `I = I₀ cos²θ`", "(q) `∮B⋅dA = 0`", "(r) `μ = tan(i_p)`", "(s) `χ ∝ 1/T`"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching the physical laws with their corresponding mathematical expressions. Malus's and Brewster's laws are from optics but often related." },
        { column1: ["(a) Magnetic Declination", "(b) Angle of Dip", "(c) Horizontal Component of B_E", "(d) Geographic North"], column2: ["(p) Angle with horizontal", "(q) True North", "(r) Angle between geographic and magnetic meridian", "(s) B_E cos(I)"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching elements of Earth's magnetism with their definitions." },
        { column1: ["(a) Soft Iron", "(b) Steel", "(c) Alnico", "(d) Copper"], column2: ["(p) Permanent magnet", "(q) Diamagnetic", "(r) Electromagnet core", "(s) Ferromagnetic"], answer: "a-r, b-p,s; c-p; d-q", explanation: "Matching materials with their primary magnetic application or property. Steel and Alnico are for permanent magnets. Soft iron for electromagnets. Copper is diamagnetic. Both steel and alnico are ferromagnetic." },
        { column1: ["(a) Retentivity", "(b) Coercivity", "(c) Permeability", "(d) Susceptibility"], column2: ["(p) Ability to resist demagnetization", "(q) M/H", "(r) Ability to retain magnetism", "(s) B/H"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching magnetic properties with their definitions." }
    ],
    keyTakeaways: [
        "Magnetic field lines are always closed loops; magnetic monopoles do not exist.",
        "Materials are classified as diamagnetic, paramagnetic, or ferromagnetic based on their response to an external magnetic field.",
        "Earth has its own magnetic field, which is crucial for navigation and protecting us from solar wind.",
        "The analogy between electrostatics and magnetism (electric dipole vs. magnetic dipole, Gauss's law) is a powerful tool for understanding."
    ],
    mnemonics: [
        { text: "Remember the magnetic material properties: Dia(magnetic) means 'die-magnetic' - it repels. Para(magnetic) means 'partially' attracted. Ferro(magnetic) means 'ferociously' attracted.", tamil: "காந்தப் பொருட்களின் பண்புகளை நினைவில் கொள்க: டயா(காந்தம்) என்றால் 'விலக்கு' - அது விரட்டுகிறது. பாரா(காந்தம்) என்றால் 'பகுதி' ஈர்க்கப்படுகிறது. ஃபெர்ரோ(காந்தம்) என்றால் 'கடுமையாக' ஈர்க்கப்படுகிறது." }
    ],
    neetTips: [
        { text: "Questions on the properties of Dia-, Para-, and Ferro-magnetic materials are very common and are often theory-based. Make a table and memorize the key differences in susceptibility, permeability, and temperature dependence.", tamil: "டயா-, பாரா-, மற்றும் ஃபெர்ரோ-காந்தப் பொருட்களின் பண்புகள் பற்றிய கேள்விகள் மிகவும் பொதுவானவை மற்றும் பெரும்பாலும் கோட்பாடு அடிப்படையிலானவை. ஒரு அட்டவணையை உருவாக்கி, ஏற்புத்திறன், உட்புகுதிறன் மற்றும் வெப்பநிலை சார்பு ஆகியவற்றில் உள்ள முக்கிய வேறுபாடுகளை மனப்பாடம் செய்யுங்கள்." },
        { text: "For Earth's magnetism, be very clear with the definitions of declination, dip, and horizontal component, and the formula tan(I) = B_V / B_H.", tamil: "புவிக் காந்தவியலுக்கு, ஒதுக்கம், சரிவு மற்றும் கிடைமட்டக் கூறு ஆகியவற்றின் வரையறைகள் மற்றும் tan(I) = B_V / B_H சூத்திரம் ஆகியவற்றில் மிகவும் தெளிவாக இருங்கள்." }
    ]
};

    