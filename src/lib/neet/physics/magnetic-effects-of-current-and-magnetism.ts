
import type { NeetModule } from '@/lib/types';

export const magneticEffectsOfCurrentAndMagnetism: NeetModule = {
  id: 'physics-magnetic-effects-of-current-and-magnetism',
  title: 'Magnetic Effects of Current and Magnetism',
  chapter: 'Magnetic Effects of Current and Magnetism',
  subject: 'Physics',
  conceptNotes: `
### 1. Magnetic Field (காந்தப்புலம்)
*   The space around a magnet or a current-carrying conductor where its magnetic influence can be experienced.
*   **Biot-Savart Law (பயோ-சவர்ட் விதி):** Gives the magnetic field produced by a current element. dB = (μ₀/4π) * (Idl sinθ / r²).
*   **Magnetic field due to a straight wire:** B = μ₀I / 2πr.
*   **Magnetic field at the center of a circular loop:** B = μ₀I / 2r.

### 2. Ampere's Circuital Law (ஆம்பியர் சுற்று விதி)
*   The line integral of the magnetic field B around any closed loop is equal to μ₀ times the total current I passing through that loop. ∮B⋅dl = μ₀I.
*   Used to find the magnetic field for symmetric current distributions (e.g., solenoid, toroid).
*   **Solenoid (வரிச்சுருள்):** A long helical coil. The magnetic field inside is uniform: B = μ₀nI, where n is the number of turns per unit length.

### 3. Force on a Moving Charge and a Current-Carrying Wire
*   **Lorentz Force (லாரன்ஸ் விசை):** The total force on a charge q moving with velocity v in electric field E and magnetic field B. F = q(E + v × B).
*   **Force on a charge in a magnetic field:** F = q(v × B) = qvBsinθ. The force is always perpendicular to both v and B.
*   **Force on a current-carrying wire in a magnetic field:** F = I(L × B) = ILBsinθ.

### 4. Torque on a Current Loop, Magnetic Dipole
*   **Torque on a rectangular current loop in a uniform magnetic field:** τ = M × B = MBsinθ, where M is the magnetic dipole moment.
*   **Magnetic Dipole Moment (M):** M = NIA, where N is the number of turns, I is the current, and A is the area.

### 5. Moving Coil Galvanometer (இயங்கு சுருள் கால்வனோமீட்டர்)
*   A device used to detect small electric currents.
*   Works on the principle that a current-carrying coil placed in a magnetic field experiences a torque.
*   Can be converted into an **Ammeter** (by connecting a low resistance shunt in parallel) and a **Voltmeter** (by connecting a high resistance in series).

### 6. Magnetism and Matter (காந்தவியல் மற்றும் பருப்பொருள்)
*   **Bar Magnet:** Has two poles, north and south.
*   **Magnetic Field Lines:** Imaginary lines representing a magnetic field. They form closed loops.
*   **Earth's Magnetism:** The Earth behaves as a large bar magnet.
*   **Classification of Magnetic Materials:**
    *   **Diamagnetic:** Feebly repelled by magnets (e.g., water, copper).
    *   **Paramagnetic:** Feebly attracted by magnets (e.g., aluminum, oxygen).
    *   **Ferromagnetic:** Strongly attracted by magnets (e.g., iron, cobalt, nickel). They can be permanently magnetized.
`,
  workedExamples: [
    {
        problem: "A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?",
        solution: "The magnetic field due to a long straight wire is given by B = μ₀I / 2πr. Given I = 35 A and r = 20 cm = 0.2 m. B = (4π × 10⁻⁷ T·m/A) * (35 A) / (2π * 0.2 m) = (2 × 10⁻⁷ * 35) / 0.2 = 35 × 10⁻⁶ T = 3.5 × 10⁻⁵ T."
    },
    {
        problem: "An electron is moving with a speed of 3 x 10⁷ m/s in a magnetic field of 6 x 10⁻⁴ T perpendicular to its path. What is the radius of the path?",
        solution: "The magnetic force provides the necessary centripetal force for the circular path. qvB = mv²/r. So, the radius r = mv / qB. Given m = 9.1 x 10⁻³¹ kg, v = 3 x 10⁷ m/s, q = 1.6 x 10⁻¹⁹ C, B = 6 x 10⁻⁴ T. r = ((9.1 x 10⁻³¹) * (3 x 10⁷)) / ((1.6 x 10⁻¹⁹) * (6 x 10⁻⁴)) = (27.3 x 10⁻²⁴) / (9.6 x 10⁻²³) = 2.84 x 10⁻¹ m = 28.4 cm."
    },
    {
        problem: "A galvanometer with a coil resistance of 12 Ω shows a full-scale deflection for a current of 3 mA. How will you convert it into a voltmeter of range 0 to 18 V?",
        solution: "To convert a galvanometer into a voltmeter, a high resistance (R) is connected in series with it. The total resistance of the voltmeter will be R_v = R_g + R. The voltage across the voltmeter is V = I_g * (R_g + R). Given V = 18 V, I_g = 3 mA = 3 × 10⁻³ A, R_g = 12 Ω. 18 = (3 × 10⁻³) * (12 + R). 18 / (3 × 10⁻³) = 12 + R. 6000 = 12 + R. R = 5988 Ω. A resistance of 5988 Ω must be connected in series."
    }
  ],
  mcqs: [
    {
        question: "The magnetic field at the center of a circular current-carrying loop of radius r is:",
        options: ["μ₀I / 2r", "μ₀I / 2πr", "μ₀I / 4πr", "0"],
        answer: "μ₀I / 2r",
        explanation: "This is the standard formula derived from the Biot-Savart law for the center of a circular loop."
    },
    {
        question: "A charged particle moves through a magnetic field perpendicular to its direction. Then:",
        options: ["Its momentum changes but kinetic energy is constant", "Both momentum and kinetic energy are constant", "Its kinetic energy changes but momentum is constant", "Both momentum and kinetic energy change"],
        answer": "Its momentum changes but kinetic energy is constant",
        "explanation": "The magnetic force is always perpendicular to velocity, so it does no work and does not change the kinetic energy or speed. However, it changes the direction of velocity, so the momentum (a vector) changes."
    },
    {
        question": "The force on a current-carrying conductor in a uniform magnetic field is maximum when the angle between the wire and the field is:",
        "options": ["0°", "45°", "90°", "180°"],
        "answer": "90°",
        "explanation": "The force F = ILBsinθ. The sine function is maximum (1) when θ = 90°."
    },
    {
        question": "Ampere's circuital law is analogous to which law in electrostatics?",
        "options": ["Coulomb's Law", "Gauss's Law", "Faraday's Law", "Ohm's Law"],
        "answer": "Gauss's Law",
        "explanation": "Both laws relate a field (E or B) integrated over a boundary (a closed surface or a closed loop) to the source (charge or current) inside the boundary."
    },
    {
        question": "A solenoid with a large number of turns has a ____ magnetic field inside.",
        "options": ["Weak and uniform", "Strong and non-uniform", "Strong and uniform", "Weak and non-uniform"],
        "answer": "Strong and uniform",
        "explanation": "An ideal long solenoid produces a strong and nearly uniform magnetic field inside it and a nearly zero field outside."
    },
    {
        question": "To convert a galvanometer into an ammeter, a ____ resistance is connected in ____.",
        "options": ["Low, Series", "High, Series", "Low, Parallel", "High, Parallel"],
        "answer": "Low, Parallel",
        "explanation": "A low-resistance shunt is connected in parallel to allow most of the current to bypass the galvanometer."
    },
    {
        question": "Which of the following materials is ferromagnetic?",
        "options": ["Aluminum", "Copper", "Iron", "Water"],
        "answer": "Iron",
        "explanation": "Iron, cobalt, and nickel are common examples of ferromagnetic materials, which are strongly attracted to magnets."
    },
    {
        question": "The direction of the Lorentz force is given by:",
        "options": ["Right-hand thumb rule", "Fleming's left-hand rule", "Ampere's swimming rule", "Maxwell's corkscrew rule"],
        "answer": "Fleming's left-hand rule",
        "explanation": "Fleming's left-hand rule is used to find the direction of the force on a current-carrying conductor (or a moving charge) in a magnetic field."
    },
    {
        question": "The magnetic field lines due to a bar magnet:",
        "options": ["Start from the north pole and end at the south pole", "Form closed loops", "Never cross each other", "All of the above"],
        "answer": "All of the above",
        "explanation": "All three statements are fundamental properties of magnetic field lines."
    },
    {
        question": "The SI unit of magnetic field strength is:",
        "options": ["Weber", "Henry", "Tesla", "Gauss"],
        "answer": "Tesla",
        "explanation": "The SI unit of magnetic field (B) is the Tesla (T). Gauss is a CGS unit."
    },
    {
        question": "The path of a charged particle entering a uniform magnetic field at a right angle is a:",
        "options": ["Straight line", "Circle", "Parabola", "Helix"],
        "answer": "Circle",
        "explanation": "The magnetic force provides a constant centripetal force, causing the particle to move in a circular path."
    },
    {
        question": "Two parallel wires carrying currents in the same direction will:",
        "options": ["Repel each other", "Attract each other", "Have no effect on each other", "First attract then repel"],
        "answer": "Attract each other",
        "explanation": "Using the right-hand rule, the magnetic field produced by one wire exerts an attractive force on the other wire."
    },
    {
        question": "A cyclotron is used to accelerate:",
        "options": ["Electrons", "Neutrons", "Positive ions", "Photons"],
        "answer": "Positive ions",
        "explanation": "Cyclotrons are used to accelerate heavy charged particles like protons, deuterons, and alpha particles. Electrons are too light and are accelerated in a Betatron."
    },
    {
        question": "The magnetic susceptibility is negative for:",
        "options": ["Paramagnetic materials", "Ferromagnetic materials", "Diamagnetic materials", "All materials"],
        "answer": "Diamagnetic materials",
        "explanation": "Diamagnetic materials are repelled by magnetic fields, which corresponds to a negative magnetic susceptibility."
    },
    {
        question": "The torque on a current loop in a magnetic field is maximum when the plane of the loop is:",
        "options": ["Perpendicular to the field", "Parallel to the field", "At 45° to the field", "At 60° to the field"],
        "answer": "Parallel to the field",
        "explanation": "Torque τ = MBsinθ, where θ is the angle between the magnetic moment M (perpendicular to the plane) and the field B. Torque is maximum when θ=90°, which means the plane of the loop is parallel to the field."
    },
    {
        question": "The unit of magnetic dipole moment is:",
        "options": ["Ampere-meter", "Ampere-meter²", "Tesla-meter", "Weber"],
        "answer": "Ampere-meter²",
        "explanation": "Magnetic moment M = NIA. The unit is (turns)⋅(Ampere)⋅(meter²) = A·m²."
    },
    {
        question": "A toroid is a:",
        "options": ["Straight solenoid", "Circular solenoid", "Square solenoid", "Flat coil"],
        "answer": "Circular solenoid",
        "explanation": "A toroid can be considered a solenoid that has been bent into a circular shape to form a doughnut."
    },
    {
        question": "The magnetic field inside a long current-carrying solenoid is:",
        "options": ["Inversely proportional to the current", "Inversely proportional to the number of turns", "Nearly uniform and parallel to the axis", "Zero"],
        "answer": "Nearly uniform and parallel to the axis",
        "explanation": "For an ideal solenoid, the field inside is uniform (B = μ₀nI) and parallel to the axis."
    },
    {
        question": "What is the force on a charge at rest in a magnetic field?",
        "options": ["qvB", "qE", "Infinite", "Zero"],
        "answer": "Zero",
        "explanation": "The magnetic force F = qvBsinθ. If the charge is at rest, v=0, so the force is zero."
    },
    {
        question": "The materials suitable for making electromagnets should have:",
        "options": ["High retentivity and high coercivity", "Low retentivity and low coercivity", "High retentivity and low coercivity", "Low retentivity and high coercivity"],
        "answer": "Low retentivity and low coercivity",
        "explanation": "An electromagnet should magnetize strongly but also demagnetize easily when the current is turned off. This corresponds to low retentivity and low coercivity (soft iron)."
    },
    {
        question": "At the magnetic poles of the Earth, the angle of dip is:",
        "options": ["0°", "45°", "90°", "180°"],
        "answer": "90°",
        "explanation": "The angle of dip is the angle the Earth's magnetic field makes with the horizontal. At the magnetic poles, the field lines are nearly vertical, so the angle of dip is 90°."
    },
    {
        question": "A galvanometer can be converted into a voltmeter by connecting:",
        "options": ["A high resistance in series", "A low resistance in series", "A high resistance in parallel", "A low resistance in parallel"],
        "answer": "A high resistance in series",
        "explanation": "A high series resistance limits the current flowing through the galvanometer and allows it to measure a large potential difference across it."
    },
    {
        question": "The period of revolution of a charged particle in a magnetic field is independent of its:",
        "options": ["Mass", "Charge", "Magnetic field", "Velocity"],
        "answer": "Velocity",
        "explanation": "The time period T = 2πm/qB. It depends on mass, charge, and magnetic field, but not on the velocity or the radius of the path."
    },
    {
        question": "The strength of the Earth's magnetic field is of the order of:",
        "options": ["10⁻⁵ T", "10⁻² T", "10 T", "10² T"],
        "answer": "10⁻⁵ T",
        "explanation": "The Earth's magnetic field is relatively weak, with a magnitude of about 1 Gauss, which is 10⁻⁴ Tesla. So 10⁻⁵ T is the correct order."
    },
    {
        question": "Which of the following has the highest magnetic permeability?",
        "options": ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Air"],
        "answer": "Ferromagnetic",
        "explanation": "Ferromagnetic materials have very high magnetic permeability, meaning they can be strongly magnetized."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The magnetic field at the center of a current-carrying circular loop is zero.",
        "reason": "The magnetic field lines form closed loops.",
        "answer": "D",
        "explanation": "Assertion is false. The magnetic field at the center is maximum (B = μ₀I/2r). The reason is true but irrelevant to the false assertion."
    },
    {
        "assertion": "A charged particle moving in a uniform magnetic field always moves in a circular path.",
        "reason": "The magnetic force is always perpendicular to the velocity of the particle.",
        "answer": "D",
        "explanation": "Assertion is false. It moves in a circle only if its initial velocity is perpendicular to the field. If there is a component of velocity parallel to the field, the path is helical. The reason is true."
    },
    {
        "assertion": "Two parallel wires carrying current in opposite directions repel each other.",
        "reason": "The magnetic field produced by one wire exerts a force on the other wire.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Using Fleming's left-hand rule on the force exerted by the field of one wire on the other shows that the force is repulsive."
    },
    {
        "assertion": "To convert a galvanometer into an ammeter, a low resistance shunt is connected in parallel.",
        "reason": "The shunt provides a path for the excess current to bypass the galvanometer.",
        "answer": "A",
        "explanation": "The reason correctly explains the function of the shunt and why this conversion works."
    },
    {
        "assertion": "The magnetic field inside a toroid is not uniform.",
        "reason": "The magnetic field depends on the distance from the central axis.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The field B = μ₀NI/2πr, which means it is slightly stronger on the inner side and weaker on the outer side."
    },
    {
        "assertion": "A cyclotron cannot accelerate electrons.",
        "reason": "Electrons have a very small mass.",
        "answer": "A",
        "explanation": "Because of their small mass, electrons reach very high speeds quickly. At these relativistic speeds, their mass increases, and they go out of sync with the oscillating electric field. The reason explains the assertion."
    },
    {
        "assertion": "Magnetic field lines always form closed loops.",
        "reason": "Magnetic monopoles do not exist.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since there are no isolated magnetic poles (monopoles) for field lines to start or end on, they must form continuous closed loops."
    },
    {
        "assertion": "A magnetic field can do no work on a moving charge.",
        "reason": "The magnetic force is always perpendicular to the velocity of the charge.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since work done W = F⋅d and the force is always perpendicular to the displacement, the work done is zero."
    },
    {
        "assertion": "Ferromagnetic materials can be permanently magnetized.",
        "reason": "Ferromagnetic materials have a high retentivity.",
        "answer": "A",
        "explanation": "Retentivity is the ability of a material to retain magnetism after the magnetizing field is removed. This property allows for the creation of permanent magnets. The reason explains the assertion."
    },
    {
        "assertion": "A solenoid tends to shrink when a current passes through it.",
        "reason": "Parallel currents in the adjacent turns of the solenoid attract each other.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The parallel turns of the coil carry current in the same direction, leading to an attractive force between them which causes a compression or shrinking effect."
    },
    {
        "assertion": "The angle of dip is 90° at the magnetic equator.",
        "reason": "The Earth's magnetic field is horizontal at the magnetic equator.",
        "answer": "D",
        "explanation": "The assertion is false; the angle of dip is 0° at the magnetic equator. The reason is a true statement that contradicts the assertion."
    },
    {
        "assertion": "The Biot-Savart law is the magnetic equivalent of Coulomb's law.",
        "reason": "Both are inverse square laws.",
        "answer": "B",
        "explanation": "Both statements are true. There is a strong analogy between the two laws. However, the reason is just one aspect of the similarity and doesn't fully explain the entire analogy."
    },
    {
        "assertion": "The sensitivity of a moving coil galvanometer is increased by increasing the number of turns.",
        "reason": "The torque on the coil is proportional to the number of turns.",
        "answer": "A",
        "explanation": "Torque τ = NIAB. A larger torque for a given current means higher sensitivity. The reason correctly explains the assertion."
    },
    {
        "assertion": "Diamagnetism is a universal property of all materials.",
        "reason": "All materials have electrons which will oppose an external magnetic field according to Lenz's law.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Diamagnetism is present in all substances, although it is often masked by stronger paramagnetic or ferromagnetic effects."
    },
    {
        "assertion": "The magnetic moment of a current loop is a vector quantity.",
        "reason": "Its direction is perpendicular to the plane of the loop.",
        "answer": "A",
        "explanation": "The reason correctly describes the direction of the magnetic moment vector (given by the right-hand rule), thus explaining that it is a vector quantity."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Biot-Savart Law", "b) Ampere's Law", "c) Lorentz Force", "d) Fleming's Left-Hand Rule"],
        column2": ["i) Direction of force", "ii) ∮B⋅dl = μ₀I", "iii) F = q(E + v×B)", "iv) dB ∝ Idl sinθ / r²"],
        answer: "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1": ["a) Ammeter", "b) Voltmeter", "c) Cyclotron", "d) Solenoid"],
        column2": ["i) Accelerates ions", "ii) Measures voltage", "iii) Measures current", "iv) Uniform magnetic field"],
        answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        column1": ["a) Diamagnetic", "b) Paramagnetic", "c) Ferromagnetic", "d) Superconductor"],
        column2": ["i) Strongly attracted", "ii) Perfect diamagnetism", "iii) Feebly attracted", "iv) Feebly repelled"],
        answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Magnetic Field (B)", "b) Magnetic Flux (Φ)", "c) Magnetic Moment (M)", "d) Permeability (μ₀)"],
        column2": ["i) Weber", "ii) A⋅m²", "iii) Tesla", "iv) T⋅m/A"],
        answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        column1": ["a) Force on wire", "b) Force on charge", "c) Torque on loop", "d) Field of solenoid"],
        column2": ["i) qvBsinθ", "ii) NIABsinθ", "iii) μ₀nI", "iv) ILBsinθ"],
        answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1": ["a) Earth's Magnetic Field", "b) Bar Magnet", "c) Current Loop", "d) Straight Wire"],
        column2": ["i) Acts as a magnetic dipole", "ii) μ₀I/2πr", "iii) Dip-Equator", "iv) Two poles (N-S)"],
        answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) Current Sensitivity", "b) Voltage Sensitivity", "c) Shunt Resistance", "d) Series Resistance"],
        column2": ["i) High R in series", "ii) NAB/k", "iii) Low R in parallel", "iv) NAB/kR"],
        answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        column1": ["a) Angle of Dip at poles", "b) Angle of Dip at equator", "c) Angle of declination", "d) Horizontal component of Earth's field"],
        column2": ["i) 90°", "ii) B_H = Bcosδ", "iii) Angle between magnetic and geographic meridian", "iv) 0°"],
        answer": "a-i, b-iv, c-iii, d-ii"
    },
    {
        column1": ["a) Retentivity", "b) Coercivity", "c) Permeability", "d) Susceptibility"],
        column2": ["i) Measure of how a material is magnetized", "ii) Ability to retain magnetism", "iii) Resistance to demagnetization", "iv) Support for forming magnetic fields"],
        answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        column1": ["a) Permanent Magnet", "b) Electromagnet", "c) Core of transformer", "d) Magnetic shielding"],
        column2": ["i) Soft iron", "ii) High retentivity, high coercivity", "iii) Superconductors", "iv) Low retentivity, low coercivity"],
        answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        column1": ["a) Magnetic field lines", "b) Electric field lines", "c) Equipotential surface", "d) Gravitational field"],
        column2": ["i) Conservative", "ii) Never form closed loops", "iii) Always form closed loops", "iv) Perpendicular to E-field"],
        answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        column1": ["a) Path is a circle", "b) Path is a helix", "c) Path is a straight line", "d) Path is unchanged"],
        column2": ["i) Charge moves parallel to B", "ii) Charge is at rest", "iii) v is perpendicular to B", "iv) v has components parallel and perpendicular to B"],
        answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) Curie Temperature", "b) Hysteresis", "c) Meissner Effect", "d) Hall Effect"],
        column2": ["i) Expulsion of magnetic field from a superconductor", "ii) Lagging of magnetization behind magnetizing field", "iii) Ferromagnetic to Paramagnetic transition", "iv) Production of voltage across a conductor in a magnetic field"],
        answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        column1": ["a) B at center of loop", "b) B due to straight wire", "c) B inside solenoid", "d) B inside toroid"],
        column2": ["i) μ₀nI", "ii) μ₀NI/2πr", "iii) μ₀I/2r", "iv) μ₀I/2πr"],
        answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) F = qE", "b) F = qvB", "c) F = GmM/r²", "d) F = kx"],
        column2": ["i) Spring force", "ii) Gravitational force", "iii) Magnetic force", "iv) Electric force"],
        answer": "a-iv, b-iii, c-ii, d-i"
    }
  ]
};
