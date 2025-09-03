
import type { NeetModule } from '@/lib/types';

export const oscillationsAndWaves: NeetModule = {
  id: 'physics-oscillations-and-waves',
  title: 'Oscillations and Waves (அலைவுகள் மற்றும் அலைகள்)',
  chapter: 'Unit 10: Oscillations and Waves',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Oscillations (அலைவுகள்)
*   **Periodic motion** is any motion that repeats itself at regular intervals of time (Time Period, T). Frequency (ν) is the number of repetitions per unit time (ν = 1/T).
*   **Simple Harmonic Motion (S.H.M.) (தனிச் சீரிசை இயக்கம்):** A special type of periodic motion where the restoring force is directly proportional to the displacement from the mean position and is directed towards the mean position. \\(F = -kx\\).
    *   **Equation of S.H.M.:** The displacement as a function of time is given by \\(y = A \\sin(\\omega t + \\phi)\\), where A is amplitude, ω is angular frequency, and φ is the phase constant.
*   **Energy in S.H.M.:** The total mechanical energy is conserved. Energy continuously oscillates between potential energy (maximum at extremes) and kinetic energy (maximum at mean position). Total Energy \\(E = \\frac{1}{2}kA^2\\).
*   **Oscillations of a spring:** The motion of a mass attached to a spring is SHM. The time period is \\(T = 2\\pi\\sqrt{\\frac{m}{k}}\\).
*   **Simple pendulum:** For small oscillations, the motion is SHM. The time period is \\(T = 2\\pi\\sqrt{\\frac{L}{g}}\\).

### 5.2 Waves (அலைகள்)
*   **Wave motion:** A wave is a disturbance that propagates energy without the net transport of matter.
*   **Longitudinal and transverse waves:** In transverse waves (e.g., light, waves on a string), particles oscillate perpendicular to the wave's direction. In longitudinal waves (e.g., sound), particles oscillate parallel to the wave's direction.
*   **Displacement relation for a progressive wave:** The equation for a wave travelling in the +x direction is \\(y(x, t) = A \\sin(kx - \\omega t + \\phi)\\), where k is the wave number (k = 2π/λ). The speed of the wave is \\(v = \\frac{\\omega}{k}\\).
*   **Principle of superposition of waves (மேற்பொருந்துதல் தத்துவம்):** When two or more waves overlap, the resultant displacement at any point and at any instant is the vector sum of the displacements of the individual waves.
*   **Reflection of waves:** When a wave strikes a boundary, it is reflected. If the boundary is rigid, the wave is reflected with a phase change of π (180°).
*   **Standing waves (நிலையான அலைகள்):** Formed by the superposition of two identical waves travelling in opposite directions. They have points of zero displacement (nodes) and maximum displacement (antinodes).
    *   **In strings and organ pipes:** Standing waves are formed with specific resonant frequencies called harmonics or overtones.
*   **Beats (விம்மல்கள்):** A phenomenon of periodic variation in the intensity of sound due to the superposition of two sound waves of slightly different frequencies. The beat frequency is \\(f_{beat} = |\\nu_1 - \\nu_2|\\).
`,
  workedExamples: [
    {
        problem: "A particle executes SHM with an amplitude of 5 cm and a period of 2 s. What is its maximum velocity?",
        solution: "1.  The maximum velocity in SHM is given by \\(v_{max} = A\\omega\\). 2.  The angular frequency \\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{2} = \\pi \\text{ rad/s}\\). 3.  Given amplitude \\(A = 5 \\text{ cm} = 0.05 \\text{ m}\\). 4.  \\(v_{max} = (0.05 \\text{ m}) \\times (\\pi \\text{ rad/s}) = 0.05\\pi \\text{ m/s} \\approx 0.157 \\text{ m/s}\\)."
    },
    {
        problem: "A string of length 0.5 m is stretched between two rigid supports. What is the wavelength of the fundamental mode of vibration?",
        solution: "For the fundamental mode (first harmonic) of a string fixed at both ends, the length of the string L corresponds to half a wavelength (λ/2). \\(L = \\frac{\\lambda}{2}\\). So, wavelength \\(\\lambda = 2L = 2 \\times 0.5 \\text{ m} = 1.0 \\text{ m}\\)."
    },
    {
        problem: "A train moving at a speed of 30 m/s sounds a whistle of frequency 500 Hz. What is the apparent frequency heard by a stationary observer when the train is approaching the observer? (Speed of sound in air = 330 m/s)",
        solution: "This is an application of the Doppler effect for a moving source and a stationary observer. The formula is \\(\\nu' = \\nu \\left( \\frac{v}{v - v_s} \\right)\\), where v is the speed of sound and v_s is the speed of the source. Given: ν = 500 Hz, v = 330 m/s, v_s = 30 m/s. \\(\\nu' = 500 \\left( \\frac{330}{330 - 30} \\right) = 500 \\left( \\frac{330}{300} \\right) = 500 \\times 1.1 = 550 \\text{ Hz}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
