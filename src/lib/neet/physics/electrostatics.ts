
import type { NeetModule } from '@/lib/types';

export const electrostatics: NeetModule = {
  id: 'physics-electrostatics',
  title: 'Electrostatics',
  chapter: 'Electrostatics',
  subject: 'Physics',
  conceptNotes: `
### 1. Electric Charge (மின்னூட்டம்)
*   Basic property of matter. Two types: positive and negative.
*   **Quantization of Charge:** Charge exists in discrete packets. q = ne, where n is an integer and e is the charge of an electron.
*   **Conservation of Charge:** The total charge of an isolated system is constant.

### 2. Coulomb's Law (கூலூம் விதி)
*   The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them. F = k |q₁q₂| / r², where k = 1 / (4πε₀).

### 3. Electric Field (மின்புலம்)
*   The space around a charge where its influence can be felt. E = F/q.
*   Electric field due to a point charge: E = kq / r².
*   **Electric Field Lines:** Imaginary lines used to represent an electric field. They start from positive charges and end at negative charges.

### 4. Electric Dipole (மின் இருமுனை)
*   A pair of equal and opposite charges separated by a small distance.
*   **Dipole Moment (p):** p = q × 2a. It's a vector quantity.
*   **Torque on a dipole in a uniform electric field:** τ = p × E = pEsinθ.

### 5. Electric Flux and Gauss's Law (மின்பாயம் மற்றும் காஸ் விதி)
*   **Electric Flux (Φ_E):** The total number of electric field lines passing through a surface. Φ_E = E ⋅ A = EAcosθ.
*   **Gauss's Law:** The total electric flux through a closed surface is 1/ε₀ times the net charge enclosed by the surface. Φ_E = q_enclosed / ε₀. This law is very useful for calculating the electric field for symmetric charge distributions.

### 6. Electric Potential (மின்னழுத்தம்)
*   The work done in moving a unit positive charge from infinity to a point in the electric field. V = W/q.
*   **Potential Difference:** The work done to move a unit charge from one point to another.
*   **Equipotential Surface:** A surface on which the potential is the same at all points. Electric field lines are always perpendicular to equipotential surfaces.

### 7. Capacitance (மின்தேக்குத்திறன்)
*   The ability of a conductor to store charge. C = Q/V. Unit: Farad (F).
*   **Parallel Plate Capacitor:** C = ε₀A/d.
*   **Capacitors in Series:** 1/C_eq = 1/C₁ + 1/C₂ + ...
*   **Capacitors in Parallel:** C_eq = C₁ + C₂ + ...
*   **Energy Stored in a Capacitor:** U = ½CV² = ½Q² / C = ½QV.
`,
  workedExamples: [
    {
        problem: "Two point charges of +2 μC and +6 μC repel each other with a force of 12 N. If a charge of -4 μC is given to each of these charges, what will be the new force?",
        solution: "Initially, F = k(q₁q₂)/r² = 12 N. So, 12 = k(2×6)/r² = 12k/r². This gives k/r² = 1. After adding -4 μC to each, the new charges are q₁' = 2-4 = -2 μC and q₂' = 6-4 = +2 μC. The new force F' = k(q₁'q₂')/r² = k(-2)(2)/r² = -4k/r². Since k/r² = 1, the new force F' = -4 N. The negative sign indicates that the force is now attractive."
    },
    {
        problem: "A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant 6?",
        solution: "The initial capacitance is C = ε₀A/d = 8 pF. The new distance is d' = d/2. The new dielectric constant is K = 6. The new capacitance C' = Kε₀A/d' = Kε₀A/(d/2) = 2K(ε₀A/d) = 2K * C. C' = 2 * 6 * 8 pF = 96 pF."
    },
    {
        problem: "Calculate the torque on an electric dipole of dipole moment 4 x 10⁻⁹ C m when it is placed in a uniform electric field of 5 x 10⁴ N/C at an angle of 30°.",
        solution: "The torque (τ) on a dipole is given by τ = pEsinθ. Given p = 4 x 10⁻⁹ C m, E = 5 x 10⁴ N/C, and θ = 30°. τ = (4 x 10⁻⁹) * (5 x 10⁴) * sin(30°). sin(30°) = 0.5. τ = (20 x 10⁻⁵) * 0.5 = 10 x 10⁻⁵ = 1 x 10⁻⁴ N m."
    }
  ],
  mcqs: [
    {
        question: "The SI unit of electric charge is:",
        options: ["Volt", "Farad", "Ampere", "Coulomb"],
        answer: "Coulomb",
        explanation: "The Coulomb (C) is the SI unit of electric charge."
    },
    {
        question: "Two charges are placed at a distance 'd'. If a glass slab is placed between them, the force between them will:",
        options: ["Increase", "Decrease", "Remain the same", "Become zero"],
        answer: "Decrease",
        explanation: "The force between charges in a medium is F = F_air / K, where K is the dielectric constant. For glass, K>1, so the force decreases."
    },
    {
        question: "Electric field lines start from a ____ charge and end at a ____ charge.",
        options: ["Positive, Negative", "Negative, Positive", "Positive, Positive", "Negative, Negative"],
        answer": "Positive, Negative",
        "explanation": "By convention, electric field lines originate from positive charges and terminate on negative charges."
    },
    {
        question": "The work done in moving a charge on an equipotential surface is:",
        "options": ["Positive", "Negative", "Zero", "Infinite"],
        "answer": "Zero",
        "explanation": "On an equipotential surface, the potential difference between any two points is zero. Work done W = qΔV = q(0) = 0."
    },
    {
        question": "Three capacitors of 2F, 3F, and 6F are connected in series. The equivalent capacitance is:",
        "options": ["11 F", "1 F", "1/11 F", "6 F"],
        "answer": "1 F",
        "explanation": "For series connection, 1/C_eq = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1. So, C_eq = 1 F."
    },
    {
        question": "The energy stored in a capacitor is given by:",
        "options": ["CV", "½CV", "½C²V", "½CV²"],
        "answer": "½CV²",
        "explanation": "The energy stored in a capacitor is U = ½CV² = ½Q²/C = ½QV."
    },
    {
        question": "Gauss's law is applicable for:",
        "options": ["Any surface", "A closed surface only", "An open surface only", "A symmetrical surface only"],
        "answer": "A closed surface only",
        "explanation": "Gauss's law relates the flux through a closed surface (a Gaussian surface) to the charge enclosed within it."
    },
    {
        question": "The electric field inside a charged hollow spherical conductor is:",
        "options": ["Constant", "Zero", "Varies with distance", "Infinite"],
        "answer": "Zero",
        "explanation": "According to Gauss's law, since there is no charge enclosed inside the hollow conductor, the electric field inside is zero."
    },
    {
        question": "The SI unit of electric flux is:",
        "options": ["N/C", "V·m", "V/m", "N·m"],
        "answer": "V·m",
        "explanation": "Electric flux Φ = E⋅A. Units are (V/m)⋅(m²) = V·m. Another unit is N·m²/C."
    },
    {
        question": "An electric dipole placed in a uniform electric field experiences:",
        "options": ["A net force but no torque", "A torque but no net force", "Both a net force and a torque", "Neither a force nor a torque"],
        "answer": "A torque but no net force",
        "explanation": "In a uniform field, the forces on the two charges are equal and opposite, so the net force is zero. However, these forces form a couple, resulting in a net torque."
    },
    {
        question": "The capacitance of a parallel plate capacitor increases when:",
        "options": ["The area of the plates is decreased", "The distance between the plates is increased", "A dielectric is introduced between the plates", "The charge on the plates is increased"],
        "answer": "A dielectric is introduced between the plates",
        "explanation": "Capacitance C = Kε₀A/d. Capacitance increases with the dielectric constant K (>1) and area A, and decreases with distance d."
    },
    {
        question": "The property of electric charge that states q = ne is called:",
        "options": ["Conservation of charge", "Quantization of charge", "Additivity of charge", "Invariance of charge"],
        "answer": "Quantization of charge",
        "explanation": "Quantization means that charge exists in discrete integral multiples of the fundamental charge 'e'."
    },
    {
        question": "What is the angle between an electric field line and an equipotential surface?",
        "options": ["0°", "45°", "90°", "180°"],
        "answer": "90°",
        "explanation": "Electric field lines are always perpendicular to equipotential surfaces."
    },
    {
        question": "When a dielectric is introduced into a capacitor while the battery is still connected, the:",
        "options": ["Charge decreases, voltage remains constant", "Charge increases, voltage remains constant", "Charge remains constant, voltage decreases", "Charge remains constant, voltage increases"],
        "answer": "Charge increases, voltage remains constant",
        "explanation": "Since the battery is connected, the voltage V remains constant. The capacitance increases to C' = KC. The new charge is Q' = C'V = (KC)V = K(CV) = KQ. The charge increases."
    },
    {
        question": "The direction of the electric dipole moment vector is from:",
        "options": ["Positive charge to negative charge", "Negative charge to positive charge", "Center of the dipole outwards", "North to South"],
        "answer": "Negative charge to positive charge",
        "explanation": "By convention in physics, the dipole moment vector points from the negative charge to the positive charge."
    },
    {
        question": "The electric potential due to a point charge 'q' at a distance 'r' is:",
        "options": ["kq/r²", "kq²/r", "kq/r", "kqr"],
        "answer": "kq/r",
        "explanation": "This is the standard formula for electric potential due to a point charge."
    },
    {
        question": "Two capacitors of 4 μF and 6 μF are connected in parallel. The equivalent capacitance is:",
        "options": ["10 μF", "2.4 μF", "0.41 μF", "24 μF"],
        "answer": "10 μF",
        "explanation": "For parallel connection, C_eq = C₁ + C₂ = 4 + 6 = 10 μF."
    },
    {
        question": "The force per unit charge is known as:",
        "options": ["Electric flux", "Electric field", "Electric potential", "Electric current"],
        "answer": "Electric field",
        "explanation": "This is the definition of electric field intensity, E = F/q."
    },
    {
        question": "The electric field at a point on the axial line of a dipole is:",
        "options": ["Proportional to 1/r", "Proportional to 1/r²", "Proportional to 1/r³", "Proportional to r"],
        "answer": "Proportional to 1/r³",
        "explanation": "For a short dipole, the electric field on the axial line is E = k(2p)/r³, so it is proportional to 1/r³."
    },
    {
        question": "Van de Graaff generator is used to:",
        "options": ["Store charge", "Generate high voltages", "Measure current", "Measure charge"],
        "answer": "Generate high voltages",
        "explanation": "A Van de Graaff generator is an electrostatic generator that uses a moving belt to accumulate electric charge, creating a very high electric potential."
    },
    {
        question": "The dimensional formula for capacitance is:",
        "options": ["[M⁻¹L⁻²T⁴I²]", "[M⁻¹L⁻²T³I]", "[ML²T⁻³I⁻¹]", "[M⁻¹L⁻¹T²I²]"],
        "answer": "[M⁻¹L⁻²T⁴I²]",
        "explanation": "C = Q/V. Q=IT. V = W/Q = [ML²T⁻²]/[IT]. So V=[ML²T⁻³I⁻¹]. C = [IT]/[ML²T⁻³I⁻¹] = [M⁻¹L⁻²T⁴I²]."
    },
    {
        question": "What happens to the force between two charges if the distance between them is halved?",
        "options": ["Becomes half", "Becomes double", "Becomes one-fourth", "Becomes four times"],
        "answer": "Becomes four times",
        "explanation": "F ∝ 1/r². If r becomes r/2, F ∝ 1/(r/2)² = 4/r². The force becomes four times larger."
    },
    {
        question": "The dielectric constant of a metal is:",
        "options": ["Zero", "One", "Infinite", "Less than one"],
        "answer": "Infinite",
        "explanation": "For a conductor (metal), the electric field inside is zero. Since E = E₀/K, for E to be zero, the dielectric constant K must be infinite."
    },
    {
        question": "A capacitor blocks ____ but allows ____ to pass.",
        "options": ["AC, DC", "DC, AC", "Both AC and DC", "Neither AC nor DC"],
        "answer": "DC, AC",
        "explanation": "A capacitor offers infinite resistance to DC current after being fully charged, effectively blocking it. For AC, its capacitive reactance Xc = 1/ωC is finite, allowing AC to pass."
    },
    {
        question": "If an electric dipole is placed in a non-uniform electric field, it will experience:",
        "options": ["A force only", "A torque only", "Both a force and a torque", "No force and no torque"],
        "answer": "Both a force and a torque",
        "explanation": "In a non-uniform field, the forces on the two charges will not be equal and opposite, resulting in a net force as well as a net torque."
    }
  ],
  assertionReasons: [
    {
        assertion: "The electric field inside a charged conducting shell is zero.",
        reason: "There is no charge enclosed within the shell's cavity.",
        answer": "A",
        "explanation": "According to Gauss's law, the electric flux through a Gaussian surface inside the cavity is zero because no charge is enclosed. Due to symmetry, this implies the electric field is zero everywhere inside."
    },
    {
        assertion: "Electric field lines never cross each other.",
        reason: "If they crossed, there would be two directions of the electric field at the point of intersection, which is not possible.",
        answer": "A",
        "explanation": "The reason correctly explains the assertion. The tangent to a field line at any point gives the unique direction of the net electric field at that point."
    },
    {
        assertion: "When a dielectric slab is inserted between the plates of a capacitor, its capacitance increases.",
        reason: "The dielectric material reduces the electric field between the plates.",
        answer": "A",
        "explanation": "The reason correctly explains the assertion. The induced field in the dielectric opposes the external field, reducing the net field. Since C = Q/V and V = Ed, a smaller E leads to a smaller V for the same Q, thus increasing C."
    },
    {
        assertion": "The work done in moving a charge between two points on an equipotential surface is zero.",
        "reason": "The potential difference between any two points on an equipotential surface is zero.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Work done W = qΔV. Since ΔV=0 for an equipotential surface, W=0."
    },
    {
        assertion": "Coulomb's force is a conservative force.",
        reason": "The work done by the electrostatic force in moving a charge along a closed loop is zero.",
        "answer": "A",
        "explanation": "The reason provides the definition of a conservative force, which is true for the electrostatic force, thus explaining the assertion."
    },
    {
        assertion": "On going away from a point charge, the electric field decreases.",
        reason": "The electric field is inversely proportional to the square of the distance from the charge.",
        "answer": "A",
        "explanation": "The reason (E ∝ 1/r²) correctly explains why the field strength decreases as the distance increases."
    },
    {
        assertion": "Two capacitors connected in parallel have an equivalent capacitance greater than either of the individual capacitances.",
        "reason": "In a parallel connection, the effective area of the plates increases.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Connecting capacitors in parallel is like increasing the plate area, and since C ∝ A, the total capacitance increases (C_eq = C₁ + C₂)."
    },
    {
        assertion": "An electric dipole placed in a uniform electric field experiences no net force.",
        reason": "The forces on the two charges of the dipole are equal and opposite.",
        "answer": "A",
        "explanation": "The reason correctly explains why the net force is zero in a uniform field."
    },
    {
        assertion": "The charge on a body is always an integral multiple of the charge of an electron.",
        reason": "This is the principle of conservation of charge.",
        "answer": "C",
        "explanation": "Assertion is true and is the principle of *quantization* of charge. The reason is false; it describes a different principle."
    },
    {
        assertion": "Gauss's law is useful for calculating the electric field of symmetric charge distributions.",
        reason": "Gauss's law relates the electric flux through a closed surface to the enclosed charge.",
        "answer": "B",
        "explanation": "Both statements are true. Gauss's law is most useful when symmetry allows the electric field E to be taken out of the integral ∮E⋅dA. The reason is a true statement of the law but doesn't fully explain *why* it's particularly useful for symmetric cases."
    },
    {
        assertion": "A parallel plate capacitor is connected to a battery. If a dielectric slab is inserted between the plates, the energy stored increases.",
        reason": "The capacitance of the capacitor increases.",
        "answer": "A",
        "explanation": "The reason is true (C' = KC). Since the battery is connected, V is constant. The energy stored is U = ½CV². Since C increases, U also increases. The reason explains the assertion."
    },
    {
        assertion": "Electric field lines are always straight.",
        reason": "Electric field lines represent the path of a positive test charge.",
        "answer": "D",
        "explanation": "Assertion is false. Field lines are curved around dipoles or multiple charges. The reason is also false; field lines show the direction of the force on a test charge, not its path, as the charge's inertia would cause it to continue moving."
    },
    {
        assertion": "The SI unit of capacitance is Farad.",
        reason": "One Farad is defined as one Coulomb per Volt.",
        answer": "A",
        "explanation": "The reason provides the correct definition (from C=Q/V) that explains the assertion."
    },
    {
        assertion": "When capacitors are connected in series, the charge on each capacitor is the same.",
        reason": "The equivalent capacitance in series is the sum of the individual capacitances.",
        "answer": "C",
        "explanation": "Assertion is true. Reason is false; the reciprocal of the equivalent capacitance is the sum of the reciprocals of individual capacitances (1/C_eq = 1/C₁ + 1/C₂)."
    },
    {
        assertion": "The potential at a point on the equatorial line of a dipole is zero.",
        reason": "The two charges of the dipole are equal and opposite.",
        "answer": "A",
        "explanation": "The reason explains the assertion. At any point on the equatorial line, the distance to the positive charge is the same as the distance to the negative charge. Since potential is a scalar (V = kq/r), the potentials due to the equal and opposite charges cancel out, V_net = kq/r + k(-q)/r = 0."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Electric Field", "b) Electric Potential", "c) Capacitance", "d) Electric Dipole Moment"],
        column2": ["i) C m", "ii) Farad", "iii) V/m", "iv) Volt"],
        answer: "a-iii, b-iv, c-ii, d-i"
    },
    {
        column1: ["a) Gauss's Law", "b) Coulomb's Law", "c) Quantization of Charge", "d) Conservation of Charge"],
        column2": ["i) q = ne", "ii) F = kq₁q₂/r²", "iii) Total charge is constant", "iv) Φ = q_in/ε₀"],
        answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        column1": ["a) Parallel plate capacitor", "b) Energy in capacitor", "c) Torque on dipole", "d) Field of dipole (axial)"],
        "column2": ["i) pEsinθ", "ii) k(2p)/r³", "iii) ε₀A/d", "iv) ½CV²"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) Capacitors in Series", "b) Capacitors in Parallel", "c) Resistors in Series", "d) Resistors in Parallel"],
        "column2": ["i) R₁ + R₂", "ii) 1/R₁ + 1/R₂", "iii) C₁ + C₂", "iv) 1/C₁ + 1/C₂"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Conductor", "b) Insulator", "c) Dielectric", "d) Semiconductor"],
        "column2": ["i) Allows partial flow of charge", "ii) Allows free flow of charge", "iii) Does not allow charge flow", "iv) Becomes polarized in E-field"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        column1": ["a) Unit of Force", "b) Unit of Work", "c) Unit of Power", "d) Unit of Charge"],
        "column2": ["i) Watt", "ii) Coulomb", "iii) Newton", "iv) Joule"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) Uniform E-field", "b) E-field due to point charge", "c) E-field due to dipole", "d) E-field inside conductor"],
        "column2": ["i) ∝ 1/r³", "ii) Zero", "iii) ∝ 1/r²", "iv) Constant"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Electric field lines", "b) Equipotential surfaces", "c) Electric flux", "d) Dielectric constant"],
        "column2": ["i) Perpendicular to E-field", "ii) Number of field lines per unit area", "iii) Dimensionless", "iv) Never cross each other"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1": ["a) Force", "b) Field", "c) Potential", "d) Potential Energy"],
        "column2": ["i) kq/r", "ii) kqQ/r", "iii) kq/r²", "iv) kqQ/r²"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Dipole in uniform E-field", "b) Dipole in non-uniform E-field", "c) Stable equilibrium of dipole", "d) Unstable equilibrium of dipole"],
        "column2": ["i) θ = 180°", "ii) Force and Torque", "iii) θ = 0°", "iv) Torque only, no net force"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1": ["a) C_air", "b) C_dielectric", "c) E_air", "d) E_dielectric"],
        "column2": ["i) E₀/K", "ii) K * C_air", "iii) V/d", "iv) ε₀A/d"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1": ["a) Charge is scalar", "b) Force is vector", "c) Field is vector", "d) Potential is scalar"],
        "column2": ["i) True", "ii) True", "iii) True", "iv) True"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        column1": ["a) Van de Graaff Generator", "b) Capacitor", "c) Resistor", "d) Inductor"],
        "column2": ["i) Opposes current", "ii) Stores magnetic energy", "iii) Stores electric energy", "iv) Creates high voltage"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Potential energy of dipole", "b) Work done to rotate dipole", "c) Torque on dipole", "d) Dipole moment"],
        "column2": ["i) pE(cosθ₁ - cosθ₂)", "ii) q × 2a", "iii) -pEcosθ", "iv) pEsinθ"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1": ["a) [ML²T⁻²]", "b) [MLT⁻²]", "c) [ML²T⁻³I⁻¹]", "d) [M⁻¹L⁻²T⁴I²]"],
        "column2": ["i) Electric Potential", "ii) Capacitance", "iii) Force", "iv) Work/Energy"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    }
  ]
};
