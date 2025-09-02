
import type { NeetModule } from '@/lib/types';

export const experimentalSkills: NeetModule = {
  id: 'physics-experimental-skills',
  title: 'Experimental Skills',
  chapter: 'Experimental Skills',
  subject: 'Physics',
  conceptNotes: `
### 1. Vernier Calipers (வெர்னியர் அளவி)
*   Used to measure length accurately up to 0.1 mm or 0.01 cm.
*   **Least Count (மீச்சிற்றளவு):** L.C. = (Value of one main scale division) / (Total number of vernier scale divisions).
*   **Zero Error and Correction:** If the zero of the vernier scale does not coincide with the zero of the main scale, there is a zero error. It can be positive or negative.

### 2. Screw Gauge (திருகு அளவி)
*   Used to measure dimensions accurately up to 0.01 mm or 0.001 cm (e.g., diameter of a wire).
*   **Least Count:** L.C. = (Pitch) / (Total number of divisions on the circular scale).
*   **Pitch (புரியிடை):** The distance moved by the screw for one complete rotation of the head scale.

### 3. Simple Pendulum (தனி ஊசல்)
*   Used to determine the acceleration due to gravity (g).
*   The period of a simple pendulum is T = 2π√(L/g), where L is the effective length.
*   A graph of L vs T² is a straight line passing through the origin. The slope can be used to find g.

### 4. Metre Scale (மீட்டர் அளவுகோல்)
*   Used for measuring length. Least count is typically 1 mm.
*   Error of parallax should be avoided while taking readings.

### 5. Ohm's Law Experiment (ஓம் விதி சோதனை)
*   To determine the resistance of a given wire.
*   Requires a voltmeter, ammeter, rheostat, and a key.
*   A graph of V vs I is a straight line, and its slope gives the resistance (R = V/I).

### 6. P-N Junction Diode Characteristics
*   **Forward Bias:** The graph of I vs V is not linear initially and then rises sharply.
*   **Reverse Bias:** The current is very small (in μA) and almost constant until the breakdown voltage is reached.

### 7. Other Key Experiments
*   **Sonometer:** To study the relationship between frequency, length, and tension of a string.
*   **Resonance Column:** To determine the speed of sound in air.
*   **Potentiometer:** To compare the e.m.f. of two cells or find the internal resistance of a cell.
*   **Convex/Concave Mirrors and Lenses:** Finding the focal length using the u-v method (1/f = 1/v - 1/u for lenses, 1/f = 1/v + 1/u for mirrors).
`,
  workedExamples: [
    {
        problem: "In a vernier caliper, 10 divisions of the vernier scale coincide with 9 divisions of the main scale. If one main scale division is 1 mm, what is the least count?",
        solution: "Value of 10 Vernier Scale Divisions (VSD) = Value of 9 Main Scale Divisions (MSD). 10 VSD = 9 mm. So, 1 VSD = 0.9 mm. Least Count (LC) = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm."
    },
    {
        problem: "The pitch of a screw gauge is 1 mm and there are 100 divisions on the circular scale. What is its least count?",
        solution: "Least Count (LC) = Pitch / Number of divisions on circular scale. LC = 1 mm / 100 = 0.01 mm."
    },
    {
        problem: "In a simple pendulum experiment, the length is measured as 100.0 cm and the time for 20 oscillations is measured as 40 s. Calculate the value of g.",
        solution: "The period of oscillation is T = Time / Number of oscillations = 40 s / 20 = 2 s. The formula for the period is T = 2π√(L/g). Squaring both sides, T² = 4π²(L/g). So, g = 4π²L / T². Given L = 100 cm = 1.0 m, and T = 2 s. g = 4 * (3.14)² * (1.0) / (2)² = (3.14)² ≈ 9.86 m/s²."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
