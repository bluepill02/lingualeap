
import type { NeetModule } from '@/lib/types';

export const gravitation: NeetModule = {
  id: 'physics-gravitation',
  title: 'Gravitation',
  chapter: 'Gravitation',
  subject: 'Physics',
  conceptNotes: `
### 1. Newton's Law of Gravitation (நியூட்டனின் ஈர்ப்பு விதி)
*   Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers. F = G(m₁m₂)/r².
*   G is the universal gravitational constant.

### 2. Acceleration Due to Gravity (g) (புவியீர்ப்பு முடுக்கம்)
*   The acceleration produced in a freely falling body due to the Earth's gravitational pull.
*   g = GM/R², where M and R are the mass and radius of the Earth.
*   **Variation of g:**
    *   **With Altitude (h):** g' = g(1 - 2h/R) for h << R.
    *   **With Depth (d):** g' = g(1 - d/R).
    *   **With Rotation of Earth:** g decreases due to rotation, with the maximum decrease at the equator and no change at the poles.

### 3. Gravitational Potential and Potential Energy (ஈர்ப்பு அழுத்தம் மற்றும் நிலை ஆற்றல்)
*   **Gravitational Potential Energy (U):** U = -GMm/r.
*   **Gravitational Potential (V):** V = -GM/r.

### 4. Satellites (துணைக்கோள்கள்)
*   **Orbital Velocity (vₒ):** The velocity required to put a satellite into a circular orbit around a planet. vₒ = √(GM/r), where r is the radius of the orbit.
*   **Escape Velocity (vₑ):** The minimum velocity with which a body must be projected from the surface of a planet so that it escapes its gravitational field. vₑ = √(2GM/R) = √2 * vₒ (for an orbit close to the surface).
*   **Geostationary Satellite:** A satellite that appears stationary from the Earth. It revolves in an equatorial orbit with a time period of 24 hours.

### 5. Kepler's Laws of Planetary Motion (கெப்ளரின் கோள் இயக்க விதிகள்)
1.  **Law of Orbits:** All planets move in elliptical orbits with the Sun at one of the foci.
2.  **Law of Areas:** The line that joins any planet to the Sun sweeps equal areas in equal intervals of time. (This implies that the angular momentum of the planet is conserved). (ஒரு கோள் சூரியனுக்கு அருகில் வரும்போது வேகமாகச் செல்லும், தொலைவில் செல்லும்போது மெதுவாகச் செல்லும்).
3.  **Law of Periods:** The square of the time period of revolution of a planet is proportional to the cube of the semi-major axis of its elliptical orbit. T² ∝ a³.
`,
  workedExamples: [
    {
        problem: "Calculate the escape velocity from the surface of the Earth. (Given G = 6.67 x 10⁻¹¹ Nm²/kg², Mass of Earth M = 6 x 10²⁴ kg, Radius of Earth R = 6.4 x 10⁶ m).",
        solution: "Escape velocity vₑ = √(2GM/R). vₑ = √[2 * (6.67 x 10⁻¹¹) * (6 x 10²⁴) / (6.4 x 10⁶)]. vₑ = √[(80.04 x 10¹³) / (6.4 x 10⁶)] = √(12.5 x 10⁷) = √(125 x 10⁶) ≈ 11.2 x 10³ m/s = 11.2 km/s."
    },
    {
        problem: "At what height above the Earth's surface would the acceleration due to gravity be 1/4th of its value at the surface?",
        solution: "The acceleration due to gravity at a height h is g' = GM / (R+h)². At the surface, g = GM / R². We are given g' = g/4. So, GM / (R+h)² = (1/4) * (GM / R²). 1 / (R+h)² = 1 / (4R²). (R+h)² = 4R². Taking the square root, R+h = 2R. h = R. The height is equal to the radius of the Earth."
    },
    {
        problem: "Two satellites A and B are revolving around the Earth in circular orbits of radii r_A and r_B respectively. If r_A = 4r_B, what is the ratio of their time periods (T_A / T_B)?",
        solution: "According to Kepler's third law, T² ∝ r³. So, (T_A / T_B)² = (r_A / r_B)³. Given r_A = 4r_B, so r_A / r_B = 4. (T_A / T_B)² = (4)³ = 64. Taking the square root, T_A / T_B = √64 = 8. The ratio of their time periods is 8:1."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
