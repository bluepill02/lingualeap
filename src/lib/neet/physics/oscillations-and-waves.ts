
import type { NeetModule } from '@/lib/types';

export const oscillationsAndWaves: NeetModule = {
  id: 'physics-oscillations-and-waves',
  title: 'Oscillations and Waves',
  chapter: 'Oscillations and Waves',
  subject: 'Physics',
  conceptNotes: `
### 1. Oscillations (அலைவுகள்)
*   **Periodic Motion:** Motion that repeats itself at regular intervals of time.
*   **Oscillatory Motion:** To and fro motion about a mean position. All oscillatory motions are periodic, but not all periodic motions are oscillatory.
*   **Simple Harmonic Motion (SHM) (தனிச் சீரிசை இயக்கம்):** A special type of oscillatory motion where the restoring force is directly proportional to the displacement from the mean position and is directed towards it. F = -kx.
    *   Equation of SHM: y = A sin(ωt + φ).
    *   **Angular Frequency (ω):** ω = 2π/T = 2πν.
    *   **Energy in SHM:** Total energy is conserved. E = K.E. + P.E. = ½kA².
*   **Simple Pendulum:** For small oscillations, it exhibits SHM. T = 2π√(L/g).

### 2. Waves (அலைகள்)
*   A disturbance that transfers energy and momentum from one point to another without the transport of matter.
*   **Transverse Waves (குறுக்கலைகள்):** Particles of the medium oscillate perpendicular to the direction of wave propagation (e.g., light waves, waves on a string).
*   **Longitudinal Waves (நெட்டலைகள்):** Particles of the medium oscillate parallel to the direction of wave propagation (e.g., sound waves). They travel as compressions and rarefactions.
*   **Equation of a Progressive Wave:** y(x, t) = A sin(kx - ωt + φ).
*   **Speed of a wave:** v = νλ = ω/k.

### 3. Superposition of Waves (அலைகளின் மேற்பொருந்துதல்)
*   **Principle of Superposition:** When two or more waves overlap, the resultant displacement is the vector sum of the individual displacements.
*   **Interference:** Superposition of two waves of the same frequency.
*   **Beats (விம்மல்கள்):** Superposition of two waves of slightly different frequencies. Beat frequency = |ν₁ - ν₂|.
*   **Standing Waves (நிலையான அலைகள்):** Formed by the superposition of two identical waves traveling in opposite directions.
    *   **Nodes (கணுக்கள்):** Points of zero amplitude.
    *   **Antinodes (எதிர்க்கணுக்கள்):** Points of maximum amplitude.
*   **Modes of Vibration of a Stretched String:** Frequencies are harmonics, ν ∝ 1/L.
*   **Modes of Vibration in Organ Pipes:**
    *   **Closed Organ Pipe:** Only odd harmonics are present.
    *   **Open Organ Pipe:** All harmonics are present.

### 4. Doppler Effect (டாப்ளர் விளைவு)
*   The apparent change in the frequency of a wave due to relative motion between the source and the observer. (ஒரு ஆம்புலன்ஸ் நம்மை நோக்கி வரும்போது அதன் ஒலி அதிகமாகவும், நம்மை விட்டு விலகிச் செல்லும்போது குறைவாகவும் கேட்பது போல).
`,
  workedExamples: [
    {
        problem: "A particle executes SHM with an amplitude of 5 cm and a period of 2 s. What is its maximum velocity?",
        solution: "The maximum velocity in SHM is given by v_max = Aω. The angular frequency ω = 2π/T = 2π/2 = π rad/s. Given amplitude A = 5 cm = 0.05 m. v_max = (0.05 m) * (π rad/s) = 0.05π m/s ≈ 0.157 m/s."
    },
    {
        problem: "A string of length 0.5 m is stretched between two rigid supports. What is the wavelength of the fundamental mode of vibration?",
        solution: "For the fundamental mode (first harmonic) of a stretched string, the length of the string L is equal to half the wavelength (λ/2). L = λ/2. So, λ = 2L = 2 * 0.5 m = 1.0 m."
    },
    {
        problem: "A train moving at a speed of 30 m/s sounds a whistle of frequency 500 Hz. What is the apparent frequency heard by a stationary observer when the train is approaching the observer? (Speed of sound = 330 m/s)",
        solution: "Using the Doppler effect formula for a moving source approaching a stationary observer: ν' = ν * [v / (v - v_s)]. Here, ν = 500 Hz, v = 330 m/s, v_s = 30 m/s. ν' = 500 * [330 / (330 - 30)] = 500 * [330 / 300] = 500 * 1.1 = 550 Hz."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
