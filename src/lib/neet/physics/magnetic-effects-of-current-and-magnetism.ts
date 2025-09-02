
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
