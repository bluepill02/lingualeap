
import type { NeetModule } from '@/lib/types';

export const gravitation: NeetModule = {
  metadata: {
    id: 'physics-gravitation',
    title: 'Gravitation (ஈர்ப்பியல்)',
    chapter: 'Unit 6: Gravitation',
    subject: 'Physics',
    glossary: [
      { English: 'Gravitational Force', தமிழ்: 'ஈர்ப்பு விசை' },
      { English: 'Kepler\'s Laws', தமிழ்: 'கெப்ளரின் விதிகள்' },
      { English: 'Escape Velocity', தமிழ்: 'விடுபடு வேகம்' },
      { English: 'Orbital Velocity', தமிழ்: 'சுற்றுப்பாதை வேகம்' },
      { English: 'Potential Energy', தமிழ்: 'நிலை ஆற்றல்' }
    ],
    learningObjectives: [
      'State and apply Newton\'s universal law of gravitation.',
      'Analyze the variation of acceleration due to gravity (g) with altitude and depth.',
      'Explain Kepler\'s three laws of planetary motion.',
      'Define and calculate gravitational potential, escape velocity, and the orbital velocity of satellites.'
    ],
    prerequisites: [
      "Newton's Laws of Motion.",
      "Concepts of Work, Energy, and Power.",
      "Understanding of Uniform Circular Motion."
    ],
    conceptOverview: "Watching the majestic Chariot (தேர்) festival in Thiruvarur, one might wonder what keeps the massive chariot firmly on the ground and what keeps the moon from crashing into the Earth. The answer is a universal force: **Gravitation** (ஈர்ப்பியல்). This chapter unveils the law discovered by Newton that governs every interaction from a falling apple to the orbits of entire galaxies. We will explore how this force creates weight, dictates the paths of planets (Kepler's Laws), and determines the speed needed to escape Earth's pull and travel to the stars.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 6: 'Gravitation'. The TN board provides detailed derivations. For NEET, focus on the direct application of formulas for g, escape velocity, and orbital velocity, and the conceptual understanding of Kepler's laws.",
    studyTips: [
      {
        tip: "Remember that 'g' is the acceleration, while 'G' is a universal constant. Don't mix them up in formulas. Also, gravitational potential and potential energy are always negative, with the zero point taken at infinity.",
        NEET_Hack: "Many questions relate orbital velocity (vₒ) and escape velocity (vₑ). Memorize the simple relationship: \\(v_e = \\sqrt{2} v_o\\). This can save a lot of calculation time."
      },
      {
        tip: "Kepler's second law (law of areas) is simply a statement of the conservation of angular momentum. A planet moves faster when it is closer to the sun (perihelion) and slower when it is farther away (aphelion).",
        NEET_Hack: "Problems about satellites often involve ratios. Since \\(T^2 \\propto r^3\\) and \\(v_o \\propto 1/\\sqrt{r}\\), you can quickly solve ratio-based questions without calculating the full values."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Gravitation (இயற்பியல் - ஈர்ப்பியல்)

# 2. Learning Objectives
1.  After this, you will be able to state and apply Newton's universal law of gravitation.
2.  After this, you will be able to analyze the variation of acceleration due to gravity (g) with altitude and depth.
3.  After this, you will be able to explain Kepler's three laws of planetary motion.
4.  After this, you will be able to define and calculate gravitational potential, escape velocity, and the orbital velocity of satellites.

# 3. Prerequisites
– Newton's Laws of Motion.
– Concepts of Work, Energy, and Power.
– Understanding of Uniform Circular Motion.

# 4. Concept Overview
Watching the majestic Chariot (தேர்) festival in Thiruvarur, one might wonder what keeps the massive chariot firmly on the ground and what keeps the moon from crashing into the Earth. The answer is a universal force: **Gravitation** (ஈர்ப்பியல்). This chapter unveils the law discovered by Newton that governs every interaction from a falling apple to the orbits of entire galaxies. We will explore how this force creates weight, dictates the paths of planets (Kepler's Laws), and determines the speed needed to escape Earth's pull and travel to the stars.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 6: 'Gravitation'**.

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

# 6. Worked Examples

**1. Easy:** Calculate the escape velocity from the surface of the Earth. (Given G = 6.67 x 10⁻¹¹ Nm²/kg², M_Earth = 6 x 10²⁴ kg, R_Earth = 6.4 x 10⁶ m).
*   **Solution:**
    *   Escape velocity \\(v_e = \\sqrt{\\frac{2GM}{R}}\\).
    *   \\(v_e = \\sqrt{\\frac{2 \\times (6.67 \\times 10^{-11}) \\times (6 \\times 10^{24})}{6.4 \\times 10^6}} \\).
    *   \\(v_e = \\sqrt{\\frac{80.04 \\times 10^{13}}{6.4 \\times 10^6}} = \\sqrt{12.5 \\times 10^7} = \\sqrt{125 \\times 10^6} \\approx 11.2 \\times 10^3 \\text{ m/s} = 11.2 \\text{ km/s}\\).

**2. Medium:** At what height above the Earth's surface would the acceleration due to gravity be 1/4th of its value at the surface?
*   **Solution:**
    1.  Acceleration due to gravity at height h: \\(g' = \\frac{GM}{(R+h)^2}\\). At the surface: \\(g = \\frac{GM}{R^2}\\).
    2.  Given \\(g' = g/4\\).
    3.  \\(\\frac{GM}{(R+h)^2} = \\frac{1}{4} \\frac{GM}{R^2}\\).
    4.  \\(\\frac{1}{(R+h)^2} = \\frac{1}{4R^2}\\).
    5.  Taking the square root of both sides: \\(R+h = 2R\\).
    6.  Therefore, \\(h = R\\). The height is equal to the radius of the Earth.

**3. Must-Practice:** Two satellites A and B are revolving around the Earth in circular orbits of radii r_A and r_B respectively. If r_A = 4r_B, what is the ratio of their time periods (T_A / T_B)?
*   **Solution:**
    *   According to Kepler's third law, \\(T^2 \\propto r^3\\).
    *   So, \\((\\frac{T_A}{T_B})^2 = (\\frac{r_A}{r_B})^3\\).
    *   Given \\(r_A = 4r_B\\), so \\(\\frac{r_A}{r_B} = 4\\).
    *   \\((\\frac{T_A}{T_B})^2 = (4)^3 = 64\\).
    *   Taking the square root, \\(\\frac{T_A}{T_B} = \\sqrt{64} = 8\\). The ratio is 8:1.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(F = G\\frac{m_1 m_2}{r^2}\\) | Newton's Law of Gravitation (நியூட்டனின் ஈர்ப்பு விதி) |
| \\(g = \\frac{GM}{R^2}\\) | Acceleration due to gravity (புவியீர்ப்பு முடுக்கம்) |
| \\(T^2 \\propto r^3\\) | Kepler's Third Law (கெப்ளரின் மூன்றாம் விதி) |
| \\(v_e = \\sqrt{\\frac{2GM}{R}}\\) | Escape Velocity (விடுபடு வேகம்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <circle cx="150" cy="100" r="20" fill="yellow" stroke="orange" stroke-width="2"/>
    <text x="150" y="105" font-size="12" text-anchor="middle">Sun (சூரியன்)</text>
    <ellipse cx="150" cy="100" rx="120" ry="70" stroke="blue" stroke-width="2" fill="none"/>
    <circle cx="270" cy="100" r="8" fill="green"/>
    <text x="270" y="118" font-size="10" text-anchor="middle">Planet (கோள்)</text>
    <text x="150" y="180" font-size="14" text-anchor="middle">Kepler's First Law (கெப்ளரின் முதல் விதி)</text>
</svg>

\`\`\`
DIAGRAM: Kepler's First Law (கெப்ளரின் முதல் விதி)
Shows a planet moving in an elliptical orbit.
The Sun is not at the center of the ellipse, but at one of the two foci.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** கெப்ளரின் மூன்று விதிகள்: **நி**லையான சுற்றுப்பாதை (Law of Orbits), **ச**மமான பரப்பளவு (Law of Areas), **கா**லத்தின் கனசதுரம் (Law of Periods). (**நிசகா** - NiSaKa)

> **NEET Hack:** For a satellite orbiting close to the Earth's surface (r ≈ R), orbital velocity is approx. 8 km/s and escape velocity is approx. 11.2 km/s. Remember these values to quickly check the sanity of your answers.

[Download PDF Summary of Gravitation](/downloads/gravitation-summary.pdf)

# 9. Quiz Yourself
1.  If the gravitational force of the Earth suddenly disappeared, what would happen to the Moon?
2.  Why do astronauts feel weightless in space, even though the Earth's gravity is still significant at the altitude of the International Space Station?
3.  If the Earth shrank to half its radius without changing its mass, what would happen to your weight?

> **Student Tip (மாணவர் கருத்து):** துணைக்கோள் ஆற்றல் (satellite energy) கணக்குகளில் வரும் எதிர்மறை குறியீடு (-) உங்களுக்கு குழப்பத்தை அளிக்கிறதா? அது ஏன் முக்கியம்? உங்கள் சந்தேகங்களை விவாதிக்கவும்.

# 10. Next Steps & Community Discussion
– **Next Module:** Properties of Solids and Liquids (திண்மங்கள் மற்றும் திரவங்களின் பண்புகள்). We will move from the large scale of planets to the small scale of materials, understanding how forces affect solids and fluids.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If you could drill a tunnel through the center of the Earth and drop a stone into it, how would it move? Discuss the type of motion it would execute on our forum.
`
  