
import type { NeetModule } from '@/lib/types';

export const magneticEffectsOfCurrentAndMagnetism: NeetModule = {
  id: 'physics-magnetic-effects-of-current-and-magnetism',
  title: 'Magnetic Effects of Current & Magnetism (மின்னோட்டத்தின் காந்த விளைவுகளும் காந்தவியலும்)',
  chapter: 'Unit 13: Magnetic Effects of Current & Magnetism',
  subject: 'Physics',
  conceptNotes: `
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
`,
  workedExamples: [
    {
        problem: "A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?",
        solution: "The magnetic field due to a long straight wire is given by \\(B = \\frac{\\mu_0 I}{2\\pi r}\\). Given I = 35 A and r = 20 cm = 0.2 m. \\(\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A}\\). \\(B = \\frac{(4\\pi \\times 10^{-7}) \\times 35}{2\\pi \\times 0.2} = \\frac{2 \\times 10^{-7} \\times 35}{0.2} = 35 \\times 10^{-6} \\text{ T} = 3.5 \\times 10^{-5} \\text{ T}\\)."
    },
    {
        problem: "An electron is moving with a speed of 3 x 10⁷ m/s in a magnetic field of 6 x 10⁻⁴ T perpendicular to its path. What is the radius of the path?",
        solution: "1.  The magnetic force provides the centripetal force: \\(qvB = \\frac{mv^2}{r}\\). 2.  Radius \\(r = \\frac{mv}{qB}\\). 3.  Given: m = 9.1×10⁻³¹ kg, v = 3×10⁷ m/s, q = 1.6×10⁻¹⁹ C, B = 6×10⁻⁴ T. 4.  \\(r = \\frac{(9.1 \\times 10^{-31}) \\times (3 \\times 10^7)}{(1.6 \\times 10^{-19}) \\times (6 \\times 10^{-4})} = \\frac{27.3 \\times 10^{-24}}{9.6 \\times 10^{-23}} = 2.84 \\times 10^{-1} \\text{ m} = 28.4 \\text{ cm}\\)."
    },
    {
        problem: "A galvanometer with a coil resistance of 12 Ω shows a full-scale deflection for a current of 3 mA. How will you convert it into a voltmeter of range 0 to 18 V?",
        solution: "1.  To convert a galvanometer into a voltmeter, a high resistance (R) is connected in series. 2.  The total resistance of the voltmeter will be \\(R_v = R_g + R\\). 3.  The voltage across the voltmeter is \\(V = I_g(R_g + R)\\). 4.  Given V = 18 V, \\(I_g = 3 \\text{ mA} = 3 \\times 10^{-3} \\text{ A}\\), \\(R_g = 12 \\Omega\\). 5.  \\(18 = (3 \\times 10^{-3})(12 + R) \\implies 12 + R = \\frac{18}{3 \\times 10^{-3}} = 6000\\). 6.  \\(R = 6000 - 12 = 5988 \\Omega\\). A resistance of 5988 Ω must be connected in series."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
