
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
  mcqs: [
    {
        "question": "In Simple Harmonic Motion, the acceleration of the particle is directly proportional to the:",
        "options": ["Velocity", "Time period", "Displacement from the mean position", "Frequency"],
        "answer": "Displacement from the mean position",
        "explanation": "The defining condition for SHM is that the restoring force (and thus acceleration) is directly proportional to the displacement and directed opposite to it (a ∝ -x)."
    },
    {
        "question": "The time period of a simple pendulum depends on:",
        "options": ["Its mass", "Its length", "The amplitude of oscillation", "The material of the bob"],
        "answer": "Its length",
        "explanation": "The formula T = 2π√(L/g) shows that the time period depends on the length (L) and acceleration due to gravity (g), but not on the mass or amplitude (for small oscillations)."
    },
    {
        "question": "Sound waves in air are:",
        "options": ["Transverse", "Longitudinal", "Electromagnetic", "Polarized"],
        "answer": "Longitudinal",
        "explanation": "Sound waves are longitudinal, meaning the particles of the medium (air) vibrate parallel to the direction of wave propagation."
    },
    {
        "question": "The phenomenon of beats is produced by the superposition of two waves with:",
        "options": ["Slightly different amplitudes", "Slightly different frequencies", "A phase difference of π", "The same frequency"],
        "answer": "Slightly different frequencies",
        "explanation": "Beats are the periodic variation in intensity at a given point due to the superposition of two sound waves having slightly different frequencies."
    },
    {
        "question": "In a standing wave, the points of maximum displacement are called:",
        "options": ["Nodes", "Antinodes", "Crests", "Troughs"],
        "answer": "Antinodes",
        "explanation": "Antinodes are the points where the amplitude of oscillation is maximum."
    },
    {
        "question": "A closed organ pipe produces:",
        "options": ["Only odd harmonics", "Only even harmonics", "All harmonics", "No harmonics"],
        "answer": "Only odd harmonics",
        "explanation": "Due to the boundary conditions (node at the closed end, antinode at the open end), only odd multiples of the fundamental frequency are possible."
    },
    {
        "question": "The Doppler effect is applicable for:",
        "options": ["Sound waves only", "Light waves only", "Both sound and light waves", "Neither sound nor light waves"],
        "answer": "Both sound and light waves",
        "explanation": "The Doppler effect is a general phenomenon observed for all types of waves when there is relative motion between the source and the observer."
    },
    {
        "question": "The total energy of a particle executing SHM is proportional to:",
        "options": ["The amplitude", "The square of the amplitude", "The frequency", "The velocity"],
        "answer": "The square of the amplitude",
        "explanation": "The total energy in SHM is E = ½kA², so it is proportional to the square of the amplitude."
    },
    {
        "question": "The relation between wave velocity (v), frequency (ν), and wavelength (λ) is:",
        "options": ["v = ν/λ", "v = λ/ν", "v = νλ", "v = ν²λ"],
        "answer": "v = νλ",
        "explanation": "Wave velocity is the product of its frequency and wavelength."
    },
    {
        "question": "When a wave is reflected from a rigid boundary, the phase change is:",
        "options": ["0", "π/4", "π/2", "π"],
        "answer": "π",
        "explanation": "On reflection from a denser (rigid) medium, a wave undergoes a phase reversal of π radians (180°)."
    },
    {
        "question": "The equation of a simple harmonic motion is given by y = 10 sin(20t + π/3). The initial phase is:",
        "options": ["20t", "π/3", "10", "20"],
        "answer": "π/3",
        "explanation": "The general equation is y = A sin(ωt + φ), where φ is the initial phase. Comparing, φ = π/3."
    },
    {
        "question": "Two tuning forks produce 5 beats per second. If the frequency of one is 256 Hz, the frequency of the other could be:",
        "options": ["251 Hz", "266 Hz", "250 Hz", "260 Hz"],
        "answer": "251 Hz",
        "explanation": "Beat frequency = |ν₁ - ν₂|. So, 5 = |256 - ν₂|. This gives two possibilities: ν₂ = 256 - 5 = 251 Hz or ν₂ = 256 + 5 = 261 Hz. Of the options, 251 Hz is present."
    },
    {
        "question": "A simple pendulum is taken to the moon. Its time period will:",
        "options": ["Decrease", "Increase", "Remain the same", "Become zero"],
        "answer": "Increase",
        "explanation": "The acceleration due to gravity on the moon is less than on Earth. Since T = 2π√(L/g), a smaller g results in a larger time period T."
    },
    {
        "question": "The distance between a node and the next antinode in a standing wave is:",
        "options": ["λ", "λ/2", "λ/4", "2λ"],
        "answer": "λ/4",
        "explanation": "The distance between two consecutive nodes (or antinodes) is λ/2. The distance between a node and an adjacent antinode is half of that, i.e., λ/4."
    },
    {
        "question": "The speed of sound is maximum in:",
        "options": ["Gases", "Liquids", "Solids", "Vacuum"],
        "answer": "Solids",
        "explanation": "The speed of sound depends on the elasticity and density of the medium. It is generally fastest in solids, slower in liquids, and slowest in gases."
    },
    {
        "question": "Which of the following is not an example of SHM?",
        "options": ["Oscillations of a simple pendulum", "Motion of the Earth around the Sun", "Oscillations of a loaded spring", "Vibrations of a tuning fork"],
        "answer": "Motion of the Earth around the Sun",
        "explanation": "The motion of the Earth is periodic, but it is not oscillatory (to and fro about a mean position)."
    },
    {
        "question": "The phase difference between displacement and velocity in SHM is:",
        "options": ["0", "π/2", "π", "π/4"],
        "answer": "π/2",
        "explanation": "If displacement y = Asin(ωt), then velocity v = dy/dt = Aωcos(ωt) = Aωsin(ωt + π/2). The phase difference is π/2, with velocity leading the displacement."
    },
    {
        "question": "The pitch of a sound depends on its:",
        "options": ["Amplitude", "Frequency", "Wavelength", "Speed"],
        "answer": "Frequency",
        "explanation": "Pitch is the subjective perception of frequency. A higher frequency corresponds to a higher pitch."
    },
    {
        "question": "An open organ pipe has a fundamental frequency ν. The fundamental frequency of a closed organ pipe of the same length will be:",
        "options": ["ν/2", "ν", "2ν", "ν/4"],
        "answer": "ν/2",
        "explanation": "For an open pipe, ν_open = v/2L. For a closed pipe, ν_closed = v/4L. Therefore, ν_closed = (1/2) * (v/2L) = ν_open / 2."
    },
    {
        "question": "The source of a sound wave moves towards a stationary listener. The apparent frequency will:",
        "options": ["Increase", "Decrease", "Remain the same", "Become zero"],
        "answer": "Increase",
        "explanation": "This is a direct application of the Doppler effect. When the source moves towards the listener, the waves are compressed, leading to a higher perceived frequency."
    },
    {
        "question": "The energy of a particle in SHM is maximum at:",
        "options": ["Mean position", "Extreme position", "Midway between mean and extreme", "All positions"],
        "answer": "All positions",
        "explanation": "The total mechanical energy of a particle in SHM is conserved and remains constant at all points, although the ratio of kinetic to potential energy changes."
    },
    {
        "question": "What happens to the time period of a simple pendulum if its length is made four times?",
        "options": ["Becomes half", "Doubles", "Becomes four times", "Remains same"],
        "answer": "Doubles",
        "explanation": "T = 2π√(L/g). If L becomes 4L, the new period T' = 2π√(4L/g) = 2 * (2π√(L/g)) = 2T. It doubles."
    },
    {
        "question": "The intensity of a wave is proportional to:",
        "options": ["The frequency", "The wavelength", "The square of the amplitude", "The speed"],
        "answer": "The square of the amplitude",
        "explanation": "The intensity (energy per unit area per unit time) of a wave is proportional to the square of its amplitude (I ∝ A²)."
    },
    {
        "question": "The phenomenon that cannot be explained by the wave nature of sound is:",
        "options": ["Reflection", "Refraction", "Interference", "Photoelectric effect"],
        "answer": "Photoelectric effect",
        "explanation": "The photoelectric effect is a quantum phenomenon related to the particle nature of light, not sound."
    },
    {
        "question": "In a damped oscillation, which of the following decreases?",
        "options": ["Time period", "Frequency", "Amplitude", "Wavelength"],
        "answer": "Amplitude",
        "explanation": "Damping is the loss of energy from an oscillating system, which results in a gradual decrease in the amplitude of the oscillations."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The time period of a simple pendulum depends on the mass of the bob.",
        "reason": "The restoring force on the bob is proportional to its mass.",
        "answer": "D",
        "explanation": "Assertion is false. T = 2π√(L/g) is independent of mass. Reason is true (Restoring force = -mgsinθ), but it doesn't make the assertion correct because the 'm' cancels out when calculating acceleration."
    },
    {
        "assertion": "Sound waves cannot be polarized.",
        "reason": "Sound waves are longitudinal waves.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Only transverse waves, which have oscillations perpendicular to the direction of propagation, can be polarized."
    },
    {
        "assertion": "In a standing wave, energy is not transported from one point to another.",
        "reason": "The energy at any point in a standing wave is constant.",
        "answer": "C",
        "explanation": "Assertion is true. Energy is confined between the nodes. Reason is false; the energy at any point oscillates between kinetic and potential, it is not constant, but the total energy in a segment between nodes is."
    },
    {
        "assertion": "An open organ pipe is preferred over a closed organ pipe for producing musical sounds.",
        "reason": "An open organ pipe produces all harmonics, which results in a richer sound quality.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The presence of all harmonics (both odd and even) in an open pipe gives it a richer timbre compared to a closed pipe which only has odd harmonics."
    },
    {
        "assertion": "The Doppler effect in sound is symmetric.",
        "reason": "The apparent frequency depends on the relative motion between the source and the observer.",
        "answer": "D",
        "explanation": "Assertion is false. The Doppler effect in sound is asymmetric, meaning the frequency shift is different when the source moves towards a stationary observer versus when the observer moves towards a stationary source with the same speed. The reason is a true statement."
    },
    {
        "assertion": "All periodic motions are oscillatory.",
        "reason": "Oscillatory motion is the to and fro motion about a mean position.",
        "answer": "D",
        "explanation": "Assertion is false. For example, uniform circular motion is periodic but not oscillatory. The reason is a true definition of oscillatory motion."
    },
    {
        "assertion": "The velocity of a particle in SHM is maximum at the mean position.",
        "reason": "At the mean position, the potential energy is minimum and the kinetic energy is maximum.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. By conservation of energy, when potential energy is minimum (at the mean position), kinetic energy, and thus velocity, must be maximum."
    },
    {
        "assertion": "When a wave travels from a rarer to a denser medium, its speed decreases.",
        "reason": "The wavelength of the wave decreases, but the frequency remains constant.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Frequency is a property of the source and does not change. From v = νλ, if v decreases and ν is constant, then wavelength λ must also decrease."
    },
    {
        "assertion": "Beats can be heard when the difference in frequencies of two sound sources is more than 10 Hz.",
        "reason": "The persistence of hearing for the human ear is about 0.1 seconds.",
        "answer": "D",
        "explanation": "Assertion is false. If the beat frequency is more than about 10 Hz, the ear cannot distinguish the separate beats. The reason is true and explains why beats cannot be heard above this frequency."
    },
    {
        "assertion": "The equation y = A sin(kx - ωt) represents a transverse wave.",
        "reason": "The displacement y is a function of both position x and time t.",
        "answer": "B",
        "explanation": "Both are true. The equation does represent a wave. It represents a transverse wave because the displacement y is perpendicular to the direction of propagation x. The reason is a necessary condition for any wave but doesn't explain why it is transverse."
    },
    {
        "assertion": "The total energy of a particle in SHM is constant.",
        "reason": "The restoring force in SHM is a conservative force.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. For a conservative force, the total mechanical energy of the system is conserved."
    },
    {
        "assertion": "A wooden ball and an iron ball of the same size, suspended from the same point by identical strings, will have the same time period.",
        "reason": "The time period of a simple pendulum is independent of its mass.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. T = 2π√(L/g) does not depend on the mass or material of the bob."
    },
    {
        "assertion": "The speed of sound in a gas is independent of pressure.",
        "reason": "The ratio of pressure to density (P/ρ) for a gas at constant temperature is constant.",
        "answer": "A",
        "explanation": "The speed of sound in a gas is v = √(γP/ρ). Since P/ρ is constant at a given temperature, the speed is independent of pressure. The reason explains the assertion."
    },
    {
        "assertion": "Superposition of two identical waves moving in opposite directions results in a standing wave.",
        "reason": "In a standing wave, there is no net transfer of energy.",
        "answer": "B",
        "explanation": "Both statements are true and are key properties of standing waves, but the second statement is a consequence of the first, not its explanation."
    },
    {
        "assertion": "The fundamental frequency of a sonometer wire increases if the tension is increased.",
        "reason": "Frequency is directly proportional to the square root of the tension.",
        "answer": "A",
        "explanation": "The reason correctly states the relationship ν ∝ √T, which explains the assertion."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) SHM", "b) Damped Oscillation", "c) Forced Oscillation", "d) Resonance"],
        "column2": ["i) Amplitude decreases with time", "ii) External periodic force", "iii) F = -kx", "iv) Frequency matching"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Amplitude", "b) Frequency", "c) Wavelength", "d) Speed"],
        "column2": ["i) meters", "ii) m/s", "iii) meters", "iv) Hertz"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Transverse wave", "b) Longitudinal wave", "c) Standing wave", "d) Beats"],
        "column2": ["i) Compressions and rarefactions", "ii) Nodes and antinodes", "iii) Varying intensity", "iv) Crests and troughs"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Open organ pipe", "b) Closed organ pipe", "c) Stretched string", "d) Simple pendulum"],
        "column2": ["i) T = 2π√(L/g)", "ii) Only odd harmonics", "iii) All harmonics", "iv) All harmonics"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Doppler Effect", "b) Superposition", "c) Reflection", "d) Refraction"],
        "column2": ["i) Bouncing back of wave", "ii) Change in wave direction at a boundary", "iii) Apparent change in frequency", "iv) Two waves meeting"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) y = A sin(ωt)", "b) v = Aω cos(ωt)", "c) a = -Aω² sin(ωt)", "d) K.E. = ½mω²(A²-y²)"],
        "column2": ["i) Acceleration in SHM", "ii) Kinetic energy in SHM", "iii) Displacement in SHM", "iv) Velocity in SHM"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Angular frequency (ω)", "b) Time period (T)", "c) Frequency (ν)", "d) Phase constant (φ)"],
        "column2": ["i) 1/T", "ii) Initial state of motion", "iii) 2π/T", "iv) Time for one oscillation"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) At mean position (y=0)", "b) At extreme position (y=A)", "c) Total energy in SHM", "d) Restoring force"],
        "column2": ["i) Velocity is zero, acceleration is max", "ii) Proportional to displacement", "iii) Velocity is max, acceleration is zero", "iv) ½kA²"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Sound", "b) Light", "c) X-rays", "d) Water waves"],
        "column2": ["i) Can be both transverse and longitudinal", "ii) Electromagnetic", "iii) Longitudinal", "iv) Electromagnetic"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Pitch", "b) Loudness", "c) Quality (Timbre)", "d) Intensity"],
        "column2": ["i) Amplitude", "ii) Waveform (harmonics)", "iii) Power per unit area", "iv) Frequency"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) v = √(γP/ρ)", "b) v = √(T/μ)", "c) v = νλ", "d) ν_beat = |ν₁ - ν₂|"],
        "column2": ["i) Beat frequency", "ii) Speed of sound in gas", "iii) Speed of transverse wave on string", "iv) General wave speed relation"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Node", "b) Antinode", "c) Crest", "d) Trough"],
        "column2": ["i) Point of maximum positive displacement", "ii) Point of zero displacement", "iii) Point of maximum negative displacement", "iv) Point of maximum displacement"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) Lissajous figures", "b) Echo", "c) Reverberation", "d) Resonance"],
        "column2": ["i) Persistence of sound", "ii) Superposition of perpendicular SHMs", "iii) Frequency matching", "iv) Reflection of sound"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) Source moving towards stationary observer", "b) Observer moving towards stationary source", "c) Source moving away from stationary observer", "d) Observer moving away from stationary source"],
        "column2": ["i) ν' = ν(v-v₀)/v", "ii) ν' = νv/(v-vₛ)", "iii) ν' = ν(v+v₀)/v", "iv) ν' = νv/(v+vₛ)"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Spring-mass system", "b) Torsional pendulum", "c) Physical pendulum", "d) LC circuit"],
        "column2": ["i) T = 2π√(I/mgd)", "ii) T = 2π√(I/C)", "iii) T = 2π√(m/k)", "iv) T = 2π√(L/C)"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    }
  ]
};

