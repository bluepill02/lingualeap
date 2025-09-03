
import type { NeetModule } from '@/lib/types';

export const magneticEffectsOfCurrentAndMagnetism: NeetModule = {
  metadata: {
    id: 'physics-magnetic-effects-of-current-and-magnetism',
    title: 'Magnetic Effects of Current & Magnetism (மின்னோட்டத்தின் காந்த விளைவுகளும் காந்தவியலும்)',
    chapter: 'Unit 13: Magnetic Effects of Current & Magnetism',
    subject: 'Physics',
    glossary: [
      { English: 'Biot-Savart Law', தமிழ்: 'பயோ-சவர்ட் விதி' },
      { English: 'Ampere\'s Law', தமிழ்: 'ஆம்பியர் விதி' },
      { English: 'Lorentz Force', தமிழ்: 'லாரன்ஸ் விசை' },
      { English: 'Magnetic Moment', தமிழ்: 'காந்த இருமுனைத் திருப்புத்திறன்' },
      { English: 'Ferromagnetism', தமிழ்: 'ஃபெர்ரோகாந்தவியல்' }
    ],
    learningObjectives: [
      "Apply Biot-Savart law and Ampere's law to calculate the magnetic field produced by various current distributions.",
      "Calculate the Lorentz force on a moving charge and the force on a current-carrying wire in a magnetic field.",
      "Analyze the torque on a current loop in a magnetic field and understand the working of a moving coil galvanometer.",
      "Differentiate between para-, dia-, and ferromagnetic materials based on their properties."
    ],
    prerequisites: [
      "Understanding of electric current and basic circuits.",
      "Knowledge of vectors, especially the cross product.",
      "Familiarity with forces and torque from mechanics."
    ],
    conceptOverview: "For centuries, people have been fascinated by magnets, like the ones that might be sold near the Kanyakumari (கன்னியாகுமரி) shore, always pointing north. But the real revolution came when it was discovered that electricity and magnetism are two sides of the same coin. This chapter, **Magnetic Effects of Current and Magnetism** (மின்னோட்டத்தின் காந்த விளைவுகளும் காந்தவியலும்), reveals this deep connection. We will learn how moving charges (currents) create magnetic fields, how these fields in turn exert forces on other moving charges, and how this interplay is the basis for electric motors, galvanometers, and our understanding of magnetic materials.",
    tnBoardMapping: "This unit covers topics from the Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 3 ('Magnetism and Magnetic Effects of Electric Current') and Chapter 5 ('Electromagnetic Waves' - some magnetism aspects). NEET questions frequently test the application of Biot-Savart law, Ampere's law, and the force on moving charges in combined fields.",
    studyTips: [
      {
        tip: "Master the various 'Right-Hand Rules'. Use the Right-Hand Thumb Rule to find the direction of the magnetic field around a current-carrying wire. Use Fleming's Left-Hand Rule to find the direction of the force on a current in a magnetic field. Drawing diagrams is essential.",
        NEET_Hack: "The force between two long parallel wires is a very common topic. Remember: 'Same direction, attraction. Opposite direction, repulsion.' The formula is \\(F/L = \\mu_0 I_1 I_2 / 2\\pi d\\), memorize it well."
      },
      {
        tip: "Differentiate clearly between Biot-Savart law (for finding B due to a small current element) and Ampere's Law (for finding B for symmetric current distributions using a loop). Ampere's law is the magnetic analogue of Gauss's law.",
        NEET_Hack: "For a charged particle entering a magnetic field, if v is perpendicular to B, the path is a circle. If v is parallel to B, the path is a straight line (no force). If v is at an angle, the path is a helix. Identifying the path is often the first step to solving the problem."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Magnetic Effects of Current & Magnetism (இயற்பியல் - மின்னோட்டத்தின் காந்த விளைவுகளும் காந்தவியலும்)

# 2. Learning Objectives
1.  After this, you will be able to apply Biot-Savart law and Ampere's law to calculate the magnetic field produced by various current distributions.
2.  After this, you will be able to calculate the Lorentz force on a moving charge and the force on a current-carrying wire in a magnetic field.
3.  After this, you will be able to analyze the torque on a current loop in a magnetic field and understand the working of a moving coil galvanometer.
4.  After this, you will be able to differentiate between para-, dia-, and ferromagnetic materials based on their properties.

# 3. Prerequisites
– Understanding of electric current and basic circuits.
– Knowledge of vectors, especially the cross product.
– Familiarity with forces and torque from mechanics.

# 4. Concept Overview
For centuries, people have been fascinated by magnets, like the ones that might be sold near the Kanyakumari (கன்னியாகுமரி) shore, always pointing north. But the real revolution came when it was discovered that electricity and magnetism are two sides of the same coin. This chapter, **Magnetic Effects of Current and Magnetism** (மின்னோட்டத்தின் காந்த விளைவுகளும் காந்தவியலும்), reveals this deep connection. We will learn how moving charges (currents) create magnetic fields, how these fields in turn exert forces on other moving charges, and how this interplay is the basis for electric motors, galvanometers, and our understanding of magnetic materials.

# 5. Detailed Explanation
This unit covers topics from the **Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 3 ('Magnetism and Magnetic Effects of Electric Current')**.

### 5.1 Sources of Magnetic Field
*   **Biot-Savart Law (பயோ-சவர்ட் விதி):** This law gives the magnetic field produced by a small current element (Idl). It is the magnetic equivalent of Coulomb's law.
    \\[ d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\vec{r})}{r^3} \\]
    *   **Application:** Its most important application is finding the magnetic field at the axis of a **current-carrying circular loop**.
*   **Ampere's Law (ஆம்பியர் விதி):** This law relates the line integral of the magnetic field around a closed loop to the net current passing through the loop. \\(\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}\\).
    *   **Applications:** It is used to easily find the magnetic field for symmetric current distributions, such as an **infinitely long straight wire** and a **solenoid**.

### 5.2 Force on Charges and Currents
*   **Force on a moving charge:** A charge 'q' moving with velocity 'v' in electric field 'E' and magnetic field 'B' experiences a force called the **Lorentz Force (லாரன்ஸ் விசை)**.
    \\[ \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) \\]
*   **Force on a current-carrying conductor:** A straight conductor of length L carrying current I in a uniform magnetic field B experiences a force.
    \\[ \\vec{F} = I(\\vec{L} \\times \\vec{B}) \\]
*   **Force between two parallel currents:** Two parallel wires attract if their currents are in the same direction and repel if they are in opposite directions. This phenomenon is used to give the formal **definition of the Ampere**.

### 5.3 Torque and Galvanometer
*   **Torque on a current loop:** A rectangular current loop placed in a uniform magnetic field experiences a torque that tends to align its magnetic moment with the field. \\(\\vec{\\tau} = \\vec{M} \\times \\vec{B}\\), where M = NIA is the magnetic dipole moment.
*   **Moving Coil Galvanometer:** A device that uses this torque principle to detect small currents. Its **current sensitivity** is the deflection per unit current.
*   **Conversion to Ammeter and Voltmeter:** A galvanometer can be converted into an **ammeter** by connecting a low resistance (shunt) in parallel, and into a **voltmeter** by connecting a high resistance in series.

### 5.4 Magnetism and Matter
*   **Bar magnet as an equivalent solenoid:** The magnetic field lines of a bar magnet are very similar to those of a solenoid, suggesting that magnetism originates from circulating currents.
*   **Magnetic field due to a magnetic dipole:** Expressions for the magnetic field along the **axis and perpendicular to the axis** of a bar magnet are analogous to those for an electric dipole.
*   **Torque on a magnetic dipole:** A magnetic dipole (like a bar magnet or a compass needle) experiences a torque in a uniform magnetic field. \\(\\vec{\\tau} = \\vec{m} \\times \\vec{B}\\).
*   **Classification of Magnetic Materials:**
    *   **Diamagnetic:** Feebly repelled by magnetic fields (e.g., copper, water).
    *   **Paramagnetic:** Feebly attracted by magnetic fields (e.g., aluminum, sodium).
    *   **Ferromagnetic:** Strongly attracted by magnetic fields (e.g., iron, cobalt, nickel). They exhibit hysteresis.
*   **Effect of temperature:** Ferromagnetism disappears above a certain temperature called the **Curie temperature**, and the substance becomes paramagnetic.

# 6. Worked Examples

**1. Easy:** A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?
*   **Solution:**
    *   The magnetic field due to a long straight wire is given by \\(B = \\frac{\\mu_0 I}{2\\pi r}\\).
    *   Given I = 35 A and r = 20 cm = 0.2 m. \\(\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A}\\).
    *   \\(B = \\frac{(4\\pi \\times 10^{-7}) \\times 35}{2\\pi \\times 0.2} = \\frac{2 \\times 10^{-7} \\times 35}{0.2} = 35 \\times 10^{-6} \\text{ T} = 3.5 \\times 10^{-5} \\text{ T}\\).

**2. Medium:** An electron is moving with a speed of 3 x 10⁷ m/s in a magnetic field of 6 x 10⁻⁴ T perpendicular to its path. What is the radius of the path?
*   **Solution:**
    1.  The magnetic force provides the centripetal force: \\(qvB = \\frac{mv^2}{r}\\).
    2.  Radius \\(r = \\frac{mv}{qB}\\).
    3.  Given: m = 9.1×10⁻³¹ kg, v = 3×10⁷ m/s, q = 1.6×10⁻¹⁹ C, B = 6×10⁻⁴ T.
    4.  \\(r = \\frac{(9.1 \\times 10^{-31}) \\times (3 \\times 10^7)}{(1.6 \\times 10^{-19}) \\times (6 \\times 10^{-4})} = \\frac{27.3 \\times 10^{-24}}{9.6 \\times 10^{-23}} = 2.84 \\times 10^{-1} \\text{ m} = 28.4 \\text{ cm}\\).

**3. Must-Practice:** A galvanometer with a coil resistance of 12 Ω shows a full-scale deflection for a current of 3 mA. How will you convert it into a voltmeter of range 0 to 18 V?
*   **Solution:**
    1.  To convert a galvanometer into a voltmeter, a high resistance (R) is connected in series.
    2.  The total resistance of the voltmeter will be \\(R_v = R_g + R\\).
    3.  The voltage across the voltmeter is \\(V = I_g(R_g + R)\\).
    4.  Given V = 18 V, \\(I_g = 3 \\text{ mA} = 3 \\times 10^{-3} \\text{ A}\\), \\(R_g = 12 \\Omega\\).
    5.  \\(18 = (3 \\times 10^{-3})(12 + R) \\implies 12 + R = \\frac{18}{3 \\times 10^{-3}} = 6000\\).
    6.  \\(R = 6000 - 12 = 5988 \\Omega\\). A resistance of 5988 Ω must be connected in series.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\vec{r})}{r^3} \\) | Biot-Savart Law (பயோ-சவர்ட் விதி) |
| \\( \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc} \\) | Ampere's Law (ஆம்பியர் விதி) |
| \\( \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) \\) | Lorentz Force (லாரன்ஸ் விசை) |
| \\( \\vec{\\tau} = \\vec{M} \\times \\vec{B} \\) | Torque on a Current Loop (மின்னோட்ட வளையத்தின் மீது திருப்புவிசை) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Force on Parallel Wires</text>
    <text x="150" y="35" font-family="Verdana" font-size="10" text-anchor="middle" fill="gray">(இணை மின்னோட்ட கம்பிகளுக்கிடையே விசை)</text>
    <!-- Wire 1 -->
    <line x1="100" y1="50" x2="100" y2="180" stroke="black" stroke-width="2" />
    <line x1="100" y1="50" x2="100" y2="30" stroke="red" stroke-width="2" marker-end="url(#arrow)" />
    <text x="90" y="45" fill="red" font-size="12">I₁</text>
    <!-- Wire 2 -->
    <line x1="200" y1="50" x2="200" y2="180" stroke="black" stroke-width="2" />
    <line x1="200" y1="50" x2="200" y2="30" stroke="red" stroke-width="2" marker-end="url(#arrow)" />
    <text x="210" y="45" fill="red" font-size="12">I₂</text>
    <!-- Force Arrows -->
    <line x1="105" y1="110" x2="195" y2="110" stroke="blue" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
    <text x="150" y="105" fill="blue" font-size="12" text-anchor="middle">Attraction (ஈர்ப்பு)</text>
</svg>

\`\`\`
DIAGRAM: Force on Parallel Wires (இணை மின்னோட்ட கம்பிகளுக்கிடையே விசை)
Shows two parallel vertical wires with currents I₁ and I₂ flowing upwards (same direction).
Blue arrows between the wires point inwards, indicating an attractive force between them.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** காந்தப்புல திசையைக் கண்டுபிடிக்க, உங்கள் வலது கையைப் பயன்படுத்துங்கள். மின்னோட்டத்தின் திசையில் உங்கள் கட்டை விரலை வைத்தால், உங்கள் விரல்கள் சுற்றும் திசையே காந்தப்புலத்தின் திசையாகும். (To find the direction of the magnetic field, use your right hand. If you point your thumb in the direction of the current, the direction your fingers curl is the direction of the magnetic field).

> **NEET Hack:** To find the magnetic field at the center of an arc of a circle subtending an angle θ (in radians), use \\(B = \\frac{\\mu_0 I \\theta}{4\\pi R}\\). For a full circle, θ=2π, giving \\(B = \\frac{\\mu_0 I}{2R}\\). For a semi-circle, θ=π, giving \\(B = \\frac{\\mu_0 I}{4R}\\). This single formula covers many cases.

[Download PDF Summary of Magnetic Effects](/downloads/magnetic-effects-summary.pdf)

# 9. Quiz Yourself
1.  What is the main difference in application between Biot-Savart law and Ampere's law?
2.  Can a magnetic field change the speed of a charged particle? Can it change the velocity? Explain.
3.  Why are the pole pieces of a galvanometer made concave?

> **Student Tip (மாணவர் கருத்து):** வலது கை விதிகளைப் (Right-Hand Rules) பயன்படுத்துவதில் உங்களுக்கு குழப்பம் உள்ளதா? எந்த விதியை எப்போது பயன்படுத்த வேண்டும்? உங்கள் சந்தேகங்களை விவாதித்து தெளிவு பெறுங்கள்.

# 10. Next Steps & Community Discussion
– **Next Module:** Electromagnetic Induction and Alternating Currents (மின்காந்தத் தூண்டல் மற்றும் மாறுதிசை மின்னோட்டம்). We will now see how a changing magnetic field can create an electric current, completing the beautiful symmetry between electricity and magnetism.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If a current loop is free to rotate in a magnetic field, it will align itself. In which orientation will its potential energy be minimum? In which orientation will it be maximum? Discuss this on our forum.
`
  
}
