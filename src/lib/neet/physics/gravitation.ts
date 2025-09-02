
import type { NeetModule } from '@/lib/types';

export const gravitation: NeetModule = {
  id: 'physics-gravitation',
  title: 'Gravitation',
  chapter: 'Gravitation',
  subject: 'Physics',
  conceptNotes: `
### 1. The Universal Law of Gravitation (நியூட்டனின் ஈர்ப்பு விதி)
*   Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers. F = G(m₁m₂)/r².
*   G is the universal gravitational constant.

### 2. Acceleration Due to Gravity (g) (புவியீர்ப்பு முடுக்கம்)
*   The acceleration produced in a freely falling body due to the Earth's gravitational pull.
*   g = GM/R², where M and R are the mass and radius of the Earth.
*   **Variation of g:**
    *   With Altitude (h): g' = g(1 - 2h/R) for h << R. Or more generally, g' = GM / (R+h)².
    *   With Depth (d): g' = g(1 - d/R).

### 3. Kepler's Laws of Planetary Motion (கெப்ளரின் கோள் இயக்க விதிகள்)
1.  **Law of Orbits:** All planets move in elliptical orbits with the Sun at one of the foci.
2.  **Law of Areas:** The line that joins any planet to the Sun sweeps equal areas in equal intervals of time. (This implies that the angular momentum of the planet is conserved).
3.  **Law of Periods:** The square of the time period of revolution of a planet is proportional to the cube of the semi-major axis of its elliptical orbit. T² ∝ a³.

### 4. Gravitational Potential Energy and Potential (ஈர்ப்பு நிலை ஆற்றல் மற்றும் ஈர்ப்பு அழுத்தம்)
*   **Gravitational Potential Energy (U):** The work done in bringing a body from infinity to a point in the gravitational field. U = -GMm/r.
*   **Gravitational Potential (V):** The potential energy per unit mass. V = -GM/r.

### 5. Motion of a Satellite (துணைக்கோள் இயக்கம்)
*   **Escape Velocity (vₑ):** The minimum velocity with which a body must be projected from the surface of a planet so that it escapes its gravitational field. vₑ = √(2GM/R).
*   **Orbital Velocity (vₒ):** The velocity required to put a satellite into a circular orbit around a planet. vₒ = √(GM/r), where r is the radius of the orbit.
*   **Time Period and Energy of Satellite:** The time taken for one complete orbit. T = 2πr / vₒ. The total energy of an orbiting satellite is negative, E = -GMm/2r.
`,
  workedExamples: [
    {
        problem: "Calculate the escape velocity from the surface of the Earth. (Given G = 6.67 x 10⁻¹¹ Nm²/kg², Mass of Earth M = 6 x 10²⁴ kg, Radius of Earth R = 6.4 x 10⁶ m).",
        solution: "Escape velocity vₑ = √(2GM/R). vₑ = √[2 * (6.67 x 10⁻¹¹) * (6 x 10²⁴) / (6.4 x 10⁶)]. vₑ = √[(80.04 x 10¹³) / (6.4 x 10⁶)] = √(12.5 x 10⁷) = √(125 x 10⁶) ≈ 11.2 x 10³ m/s = 11.2 km/s."
    },
    {
        problem: "At what height above the Earth's surface would the acceleration due to gravity be 1/4th of its value at the surface?",
        solution: "The acceleration due to gravity at a height h is g' = GM / (R+h)². At the surface, g = GM / R². We are given g' = g/4. So, GM / (R+h)² = (1/4) * (GM / R²). 1 / (R+h)² = 1 / (4R²). Taking the square root, R+h = 2R. h = R. The height is equal to the radius of the Earth."
    },
    {
        problem: "Two satellites A and B are revolving around the Earth in circular orbits of radii r_A and r_B respectively. If r_A = 4r_B, what is the ratio of their time periods (T_A / T_B)?",
        solution: "According to Kepler's third law, T² ∝ r³. So, (T_A / T_B)² = (r_A / r_B)³. Given r_A = 4r_B, so r_A / r_B = 4. (T_A / T_B)² = (4)³ = 64. Taking the square root, T_A / T_B = √64 = 8. The ratio of their time periods is 8:1."
    }
  ],
  mcqs: [
    {
        question: "Kepler's second law regarding constancy of areal velocity of a planet is a consequence of the law of conservation of:",
        options: ["Energy", "Angular momentum", "Linear momentum", "Mass"],
        answer: "Angular momentum",
        explanation: "The law of areas is equivalent to the statement that the angular momentum of the planet about the Sun is constant."
    },
    {
        question: "The value of acceleration due to gravity 'g' is maximum at the:",
        options: ["Equator", "Poles", "Center of the Earth", "Tropic of Capricorn"],
        answer: "Poles",
        explanation: "The Earth is slightly flattened at the poles, so the polar radius is less than the equatorial radius. Since g ∝ 1/R², 'g' is maximum at the poles."
    },
    {
        question: "The escape velocity from the Earth's surface is approximately:",
        options: ["7 km/s", "11.2 km/s", "9.8 km/s", "1.12 km/s"],
        answer: "11.2 km/s",
        explanation: "The escape velocity from the Earth is calculated to be approximately 11.2 km/s."
    },
    {
        question: "A geostationary satellite revolves around the Earth in an orbit that is:",
        options: ["Polar", "Equatorial", "Inclined at 45°", "Any orbit"],
        answer: "Equatorial",
        explanation: "A geostationary satellite must be in an equatorial orbit to remain stationary above a single point on Earth."
    },
    {
        question: "If the distance between two masses is doubled, the gravitational force between them becomes:",
        options: ["Double", "Half", "Four times", "One-fourth"],
        answer: "One-fourth",
        explanation: "Gravitational force F ∝ 1/r². If the distance r is doubled, the force becomes 1/(2r)² = 1/4r², i.e., one-fourth."
    },
    {
        question: "The gravitational potential energy of a body at the surface of the Earth is:",
        options: ["Zero", "Positive", "Negative", "Infinite"],
        answer: "Negative",
        explanation: "The gravitational potential energy is taken to be zero at infinity. Since gravity is an attractive force, work is done by the field to bring a mass from infinity, so the potential energy is negative."
    },
    {
        question: "The time period of a simple pendulum inside a satellite orbiting the Earth is:",
        options: ["Zero", "Infinite", "Same as on Earth", "Less than on Earth"],
        answer: "Infinite",
        explanation: "Inside an orbiting satellite, the effective gravity is zero (state of weightlessness). Since T = 2π√(L/g), if g=0, T becomes infinite."
    },
    {
        question: "The orbital velocity of a satellite very close to the Earth's surface is:",
        options: ["√(2gR)", "√(gR)", "√(3gR/2)", "gR"],
        answer: "√(gR)",
        explanation: "Orbital velocity vₒ = √(GM/R). Since g = GM/R², GM = gR². So, vₒ = √(gR²/R) = √(gR)."
    },
    {
        question: "According to Kepler's third law, if a planet's orbital radius is increased by 4 times, its time period will increase by:",
        options: ["4 times", "8 times", "16 times", "2 times"],
        answer: "8 times",
        explanation: "T² ∝ R³. So T ∝ R³/². If R becomes 4R, T' ∝ (4R)³/² = 4³/² * R³/² = 8 * R³/². The time period increases by 8 times."
    },
    {
        question: "The value of 'g' at the center of the Earth is:",
        options: ["Maximum", "Minimum", "Zero", "Same as at the surface"],
        answer: "Zero",
        explanation: "The value of g at a depth d is g' = g(1 - d/R). At the center, d=R, so g' = g(1 - R/R) = 0."
    },
    {
        question: "Which of the following statements about the gravitational constant G is true?",
        options: ["It has no units", "It has no dimensions", "It depends on the medium between the masses", "It is a universal constant"],
        answer: "It is a universal constant",
        explanation: "G is called the universal gravitational constant because its value is the same throughout the universe and is independent of the medium."
    },
    {
        question: "If the Earth stops rotating, the value of 'g' at the equator will:",
        options: ["Increase", "Decrease", "Remain the same", "Become zero"],
        answer: "Increase",
        explanation: "The rotation of the Earth reduces the effective value of 'g' at the equator (g' = g - Rω²). If rotation stops (ω=0), this reduction term becomes zero, and the value of 'g' increases."
    },
    {
        question: "The escape velocity of a body depends on its mass as:",
        options: ["m⁰", "m¹", "m²", "m⁻¹"],
        answer: "m⁰",
        explanation: "The formula for escape velocity is vₑ = √(2GM/R). It depends on the mass (M) and radius (R) of the planet, but not on the mass (m) of the body being projected."
    },
    {
        question: "Weightlessness experienced while orbiting the Earth in a spaceship is the result of:",
        options: ["Zero gravity", "Zero acceleration", "Free fall", "High speed"],
        answer: "Free fall",
        explanation: "The spaceship and everything inside it are in a constant state of free fall around the Earth, which creates the sensation of weightlessness."
    },
    {
        question: "Two spheres of masses m and M are situated in air and the gravitational force between them is F. The space around the masses is now filled with a liquid of specific gravity 3. The gravitational force will now be:",
        options: ["F", "3F", "F/3", "F/9"],
        answer: "F",
        explanation: "The gravitational force does not depend on the medium between the masses."
    },
    {
        question: "The tidal waves in the sea are primarily due to:",
        options: ["The gravitational effect of the Moon on the Earth", "The gravitational effect of the Sun on the Earth", "The gravitational effect of Venus on the Earth", "The rotation of the Earth"],
        answer: "The gravitational effect of the Moon on the Earth",
        explanation: "Tides are caused by the differential gravitational forces exerted by the Moon (and to a lesser extent, the Sun) on different parts of the Earth."
    },
    {
        question: "If the radius of the Earth were to shrink by 1% while its mass remains the same, the acceleration due to gravity on the Earth's surface would:",
        options: ["Decrease by 2%", "Increase by 2%", "Decrease by 1%", "Increase by 1%"],
        answer: "Increase by 2%",
        explanation: "g = GM/R². Taking logs and differentiating, Δg/g = -2(ΔR/R). So, % change in g = -2 * (% change in R) = -2 * (-1%) = +2%."
    },
    {
        question: "The potential energy of a satellite of mass m and revolving at a height h above the surface of the earth is:",
        options: ["-GMm/(R+h)", "-GMm/R", "GMm/(R+h)", "GMm/R"],
        answer: "-GMm/(R+h)",
        explanation: "The gravitational potential energy U = -GMm/r, where r is the distance from the center of the Earth, which is R+h."
    },
    {
        question: "The total energy of a satellite in orbit is:",
        options: ["Positive", "Zero", "Negative", "Infinite"],
        answer: "Negative",
        explanation: "A negative total energy indicates a bound system, meaning the satellite is gravitationally bound to the Earth and cannot escape."
    },
    {
        question: "The dimensional formula for the universal gravitational constant G is:",
        options: ["[M⁻¹L³T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[M⁻¹L²T⁻¹]"],
        answer: "[M⁻¹L³T⁻²]",
        explanation: "From F = Gm₁m₂/r², G = Fr²/m₁m₂. Dimensions = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]."
    },
    {
        question: "A body weighs 72 N on the surface of the Earth. What is the gravitational force on it at a height equal to half the radius of the Earth?",
        options: ["32 N", "36 N", "48 N", "72 N"],
        answer: "32 N",
        explanation: "Weight on surface w = mg = 72 N. At height h, g' = GM/(R+h)². Here h=R/2, so r = R+R/2 = 3R/2. g' = GM/(3R/2)² = (4/9)GM/R² = (4/9)g. New weight w' = mg' = m(4/9)g = (4/9)*72 = 32 N."
    },
    {
        question: "The period of a satellite in a circular orbit of radius R is T. The period of another satellite in a circular orbit of radius 4R is:",
        options: ["4T", "8T", "T/4", "T/8"],
        answer: "8T",
        explanation: "From Kepler's third law, T² ∝ R³. (T₂/T₁)² = (R₂/R₁)³. (T₂/T)² = (4R/R)³ = 64. T₂/T = √64 = 8. So T₂ = 8T."
    },
    {
        question: "Which of the following is the evidence to show that there must be a force acting on Earth and directed towards the Sun?",
        options: ["Deviation of the falling bodies towards east", "Revolution of the Earth around the Sun", "Phenomenon of day and night", "Apparent motion of Sun around the Earth"],
        answer: "Revolution of the Earth around the Sun",
        explanation: "For the Earth to follow a curved path (orbit) around the Sun, there must be a continuous centripetal force directed towards the Sun."
    },
    {
        question: "What is the work done in moving a satellite of mass m from one circular orbit of radius 2R to another of radius 3R around the Earth?",
        options: ["GMm/6R", "GMm/3R", "GMm/2R", "GMm/12R"],
        answer": "GMm/12R",
        "explanation": "Work done is the change in total energy. Total energy E = -GMm/(2r). W = E_f - E_i = (-GMm/(2*3R)) - (-GMm/(2*2R)) = -GMm/6R + GMm/4R = GMm(1/4R - 1/6R) = GMm((3-2)/12R) = GMm/12R."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The value of acceleration due to gravity is maximum at the poles.",
        "reason": "The Earth is flattened at the poles and bulging at the equator.",
        "answer": "A",
        "explanation": "The reason is correct. Because the Earth is flattened, the polar radius is smaller than the equatorial radius. Since g ∝ 1/R², 'g' is maximum at the poles."
    },
    {
        "assertion": "A satellite in orbit is in a state of free fall.",
        "reason": "The satellite and its contents experience weightlessness.",
        "answer": "A",
        "explanation": "The reason is a direct consequence of the state of free fall. The continuous falling motion around the Earth is what creates the sensation of weightlessness. The reason explains the assertion."
    },
    {
        "assertion": "The time period of a geostationary satellite is 24 hours.",
        "reason": "A geostationary satellite must appear stationary from a point on Earth.",
        "answer": "A",
        "explanation": "To appear stationary, it must complete one orbit in the same time the Earth completes one rotation. The reason correctly explains why the time period must be 24 hours."
    },
    {
        "assertion": "The gravitational force between two bodies does not depend on the medium between them.",
        "reason": "The universal gravitational constant G is independent of the medium.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since G is a universal constant, the force F=G(m₁m₂)/r² is not affected by the intervening medium."
    },
    {
        "assertion": "The total energy of a bound satellite is negative.",
        "reason": "The potential energy of a satellite is negative and greater in magnitude than its positive kinetic energy.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Total energy E = K.E. + P.E. = (GMm/2r) + (-GMm/r) = -GMm/2r, which is negative."
    },
    {
        "assertion": "A planet moves faster when it is closer to the Sun.",
        "reason": "This is a consequence of the law of conservation of angular momentum.",
        "answer": "A",
        "explanation": "According to the conservation of angular momentum (L = mvr = constant), when the distance (r) from the Sun decreases, the velocity (v) must increase to keep L constant."
    },
    {
        "assertion": "The escape velocity is independent of the angle of projection.",
        "reason": "Escape velocity is the minimum speed required to escape the Earth's gravitational field.",
        "answer": "B",
        "explanation": "Both statements are true. Escape velocity depends on energy conservation, not the direction of projection (as long as it is away from the Earth). The reason is a correct definition but does not explain why the angle doesn't matter."
    },
    {
        "assertion": "The value of g decreases with an increase in altitude.",
        "reason": "The acceleration due to gravity is inversely proportional to the square of the distance from the center of the Earth.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. As altitude increases, the distance 'r' from the center increases, and since g ∝ 1/r², 'g' decreases."
    },
    {
        "assertion": "A person feels weightless in an elevator moving downwards with an acceleration equal to g.",
        "reason": "The apparent weight is given by N = m(g-a).",
        "answer": "A",
        "explanation": "The reason provides the correct formula. If a=g, then N = m(g-g) = 0. The apparent weight is zero, which is the condition for weightlessness."
    },
    {
        "assertion": "The universal gravitational constant G is a vector quantity.",
        "reason": "Gravitational force is a vector quantity.",
        "answer": "D",
        "explanation": "The assertion is false; G is a scalar constant. The reason is true; force is a vector."
    },
    {
        "assertion": "The total mechanical energy of a satellite is conserved as it moves in its orbit.",
        "reason": "The gravitational force is a conservative force.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since the only force doing work is gravity (a conservative force), the total mechanical energy is conserved."
    },
    {
        "assertion": "Kepler's laws of planetary motion are applicable to satellites orbiting the Earth.",
        "reason": "The gravitational force is the central force in both cases.",
        "answer": "A",
        "explanation": "Kepler's laws are a consequence of the inverse square law of gravitation. Since the same law governs both planetary motion and satellite motion, the laws are applicable in both cases."
    },
    {
        "assertion": "An astronaut in an orbiting satellite cannot sip a drink with a straw.",
        "reason": "The absence of gravity makes it difficult to suck liquids.",
        "answer": "C",
        "explanation": "Assertion is true. The reason is false. The astronaut cannot sip because the liquid would not stay at the bottom of the cup in a weightless environment. Sucking itself works fine regardless of gravity."
    },
    {
        "assertion": "The binding energy of a satellite is GMm/2r.",
        "reason": "The total energy of a satellite is -GMm/2r.",
        "answer": "A",
        "explanation": "Binding energy is the energy required to remove the satellite from its orbit to infinity (i.e., to make its total energy zero). It is the negative of the total energy. The reason correctly explains the assertion."
    },
    {
        "assertion": "The force of gravity is the weakest fundamental force.",
        "reason": "The gravitational force between two protons is much smaller than the electrostatic force between them.",
        "answer": "A",
        "explanation": "The reason provides a valid comparison that demonstrates the weakness of the gravitational force relative to the electrostatic force, thus explaining the assertion."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Kepler's First Law", "b) Kepler's Second Law", "c) Kepler's Third Law", "d) Newton's Law of Gravitation"],
        "column2": ["i) T² ∝ r³", "ii) Law of orbits (elliptical)", "iii) F = Gm₁m₂/r²", "iv) Law of areas (conservation of L)"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) Escape velocity (vₑ)", "b) Orbital velocity (vₒ)", "c) g at height h", "d) g at depth d"],
        "column2": ["i) g(1-d/R)", "ii) √(2GM/R)", "iii) √(GM/r)", "iv) GM/(R+h)²"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Gravitational Potential Energy", "b) Gravitational Potential", "c) Gravitational Force", "d) Gravitational Field Intensity"],
        "column2": ["i) -GM/r", "ii) GMm/r²", "iii) F/m", "iv) -GMm/r"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Geostationary Satellite", "b) Polar Satellite", "c) Total Energy of Satellite", "d) Binding Energy of Satellite"],
        "column2": ["i) Negative", "ii) Positive", "iii) Time period = 24 hours", "iv) Orbits over poles"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) vₑ and vₒ relation", "b) g and G relation", "c) Weight", "d) Universal Gravitational Constant"],
        "column2": ["i) mg", "ii) vₑ = √2 vₒ", "iii) G", "iv) g = GM/R²"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) Law of periods", "b) Law of areas", "c) Law of orbits", "d) Law of force"],
        "column2": ["i) Conservation of angular momentum", "ii) Inverse square law", "iii) T² ∝ a³", "iv) Elliptical path"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) g at equator", "b) g at poles", "c) g at center of Earth", "d) g at infinity"],
        "column2": ["i) Zero", "ii) Zero", "iii) Maximum", "iv) Minimum (non-zero)"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Scalar quantity", "b) Vector quantity", "c) Dimensionless", "d) Constant"],
        "column2": ["i) Gravitational field", "ii) Gravitational potential", "iii) G", "iv) Orbital velocity / Escape velocity"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Cavendish", "b) Kepler", "c) Newton", "d) Galileo"],
        "column2": ["i) Law of Inertia", "ii) Determined value of G", "iii) Laws of planetary motion", "iv) Law of universal gravitation"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Kinetic Energy of Satellite", "b) Potential Energy of Satellite", "c) Total Energy of Satellite", "d) Escape Energy"],
        "column2": ["i) -GMm/2r", "ii) GMm/r", "iii) GMm/2r", "iv) -GMm/r"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Unit of G", "b) Unit of g", "c) Unit of V (potential)", "d) Unit of U (potential energy)"],
        "column2": ["i) m/s²", "ii) J/kg", "iii) J", "iv) Nm²/kg²"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Time period of satellite", "b) Height of geostationary satellite", "c) Weightlessness", "d) Black hole"],
        "column2": ["i) High escape velocity", "ii) State of freefall", "iii) ~36000 km", "iv) 2π√(r³/GM)"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) When h << R, g' is", "b) At height h=R, g' is", "c) At depth d=R/2, g' is", "d) At center, d=R, g' is"],
        "column2": ["i) g/2", "ii) 0", "iii) g/4", "iv) g(1-2h/R)"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Conservative force", "b) Central force", "c) Long-range force", "d) Weakest fundamental force"],
        "column2": ["i) Gravitational force", "ii) Gravitational force", "iii) Gravitational force", "iv) Gravitational force"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Areal velocity", "b) Angular momentum", "c) Linear velocity", "d) Angular velocity"],
        "column2": ["i) Varies in elliptical orbit", "ii) Constant in elliptical orbit", "iii) Varies in elliptical orbit", "iv) Constant in elliptical orbit"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    }
  ]
};
