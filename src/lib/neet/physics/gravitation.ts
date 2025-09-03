
import type { NeetModule } from '@/lib/types';

export const gravitation: NeetModule = {
  id: 'physics-gravitation',
  title: 'Gravitation (ஈர்ப்பியல்)',
  chapter: 'Unit 6: Gravitation',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Universal Law of Gravitation (பொது ஈர்ப்பு விதி)
*   **Newton's Law:** Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.
    \\[ F_g = G \\frac{m_1 m_2}{r^2} \\]
    Here, G is the universal gravitational constant (G = 6.67 × 10⁻¹¹ Nm²/kg²). This force is always attractive and acts along the line joining the centers of the bodies.

### 5.2 Acceleration Due to Gravity (g) (புவியீர்ப்பு முடுக்கம்)
*   This is the acceleration experienced by a body in free fall due to Earth's gravity. On the Earth's surface, \\(g = \\frac{GM}{R^2}\\).
*   **Variation of g:**
    *   **With Altitude (h):** The value of g decreases as we go up from the Earth's surface.
        \\[ g_h = \\frac{GM}{(R+h)^2} = g \\left( \\frac{R}{R+h} \\right)^2 \\]
        For h << R, a useful approximation is \\(g_h \\approx g \\left(1 - \\frac{2h}{R}\\right)\\).
    *   **With Depth (d):** The value of g also decreases as we go down into the Earth.
        \\[ g_d = g \\left(1 - \\frac{d}{R}\\right) \\]
        At the center of the Earth (d=R), g is zero.

### 5.3 Kepler's Laws and Satellites (கெப்ளரின் விதிகள் மற்றும் துணைக்கோள்கள்)
*   **Kepler’s laws of planetary motion:** These are three empirical laws describing the motion of planets around the sun.
    1.  **Law of Orbits:** All planets move in elliptical orbits with the Sun situated at one of the foci.
    2.  **Law of Areas:** The line that joins any planet to the Sun sweeps out equal areas in equal intervals of time. This implies that the angular momentum of the planet is conserved.
    3.  **Law of Periods:** The square of the time period of revolution (T) of a planet is proportional to the cube of the semi-major axis (a) of its orbit. \\(T^2 \\propto a^3\\).
*   **Gravitational Potential Energy (U) (ஈர்ப்பு நிலை ஆற்றல்):** This is the work done in bringing a mass from infinity to a point in the gravitational field. It is always negative.
    \\[ U = -\\frac{GMm}{r} \\]
*   **Gravitational Potential (V):** This is the potential energy per unit mass. \\(V = U/m = -\\frac{GM}{r}\\).
*   **Escape Velocity (vₑ) (விடுபடு வேகம்):** The minimum velocity required for an object to escape the gravitational field of a planet permanently. It is the speed at which the total energy of the object is zero.
    \\[ v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\]
*   **Motion of a satellite:**
    *   **Orbital Velocity (vₒ) (சுற்றுப்பாதை வேகம்):** The velocity required to keep a satellite in a circular orbit of radius r. The gravitational force provides the necessary centripetal force.
        \\[ v_o = \\sqrt{\\frac{GM}{r}} \\]
    *   **Time Period and Energy:** The time for one orbit is T. The total energy of an orbiting satellite is negative, indicating a bound system. \\(E_{total} = -\\frac{GMm}{2r}\\).
`,
  workedExamples: [
    {
        problem: "Calculate the escape velocity from the surface of the Earth. (Given G = 6.67 x 10⁻¹¹ Nm²/kg², M_Earth = 6 x 10²⁴ kg, R_Earth = 6.4 x 10⁶ m).",
        solution: "Escape velocity \\(v_e = \\sqrt{\\frac{2GM}{R}}\\). \\(v_e = \\sqrt{\\frac{2 \\times (6.67 \\times 10^{-11}) \\times (6 \\times 10^{24})}{6.4 \\times 10^6}} \\). \\(v_e = \\sqrt{\\frac{80.04 \\times 10^{13}}{6.4 \\times 10^6}} = \\sqrt{12.5 \\times 10^7} = \\sqrt{125 \\times 10^6} \\approx 11.2 \\times 10^3 \\text{ m/s} = 11.2 \\text{ km/s}\\)."
    },
    {
        problem: "At what height above the Earth's surface would the acceleration due to gravity be 1/4th of its value at the surface?",
        solution: "1.  Acceleration due to gravity at height h: \\(g' = \\frac{GM}{(R+h)^2}\\). At the surface: \\(g = \\frac{GM}{R^2}\\). 2.  Given \\(g' = g/4\\). 3.  \\(\\frac{GM}{(R+h)^2} = \\frac{1}{4} \\frac{GM}{R^2}\\). 4.  \\(\\frac{1}{(R+h)^2} = \\frac{1}{4R^2}\\). 5.  Taking the square root of both sides: \\(R+h = 2R\\). 6.  Therefore, \\(h = R\\). The height is equal to the radius of the Earth."
    },
    {
        problem: "Two satellites A and B are revolving around the Earth in circular orbits of radii r_A and r_B respectively. If r_A = 4r_B, what is the ratio of their time periods (T_A / T_B)?",
        solution: "According to Kepler's third law, \\(T^2 \\propto r^3\\). So, \\((\\frac{T_A}{T_B})^2 = (\\frac{r_A}{r_B})^3\\). Given \\(r_A = 4r_B\\), so \\(\\frac{r_A}{r_B} = 4\\). \\((\\frac{T_A}{T_B})^2 = (4)^3 = 64\\). Taking the square root, \\(\\frac{T_A}{T_B} = \\sqrt{64} = 8\\). The ratio is 8:1."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
