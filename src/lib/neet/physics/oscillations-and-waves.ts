
import type { NeetModule } from '@/lib/types';

export const oscillationsAndWaves: NeetModule = {
  metadata: {
    id: 'physics-oscillations-and-waves',
    title: 'Oscillations and Waves (அலைவுகள் மற்றும் அலைகள்)',
    chapter: 'Unit 10: Oscillations and Waves',
    subject: 'Physics',
    glossary: [
      { English: 'Simple Harmonic Motion (SHM)', தமிழ்: 'தனிச் சீரிசை இயக்கம்' },
      { English: 'Time Period (T)', தமிழ்: 'அலைவு நேரம்' },
      { English: 'Frequency (ν)', தமிழ்: 'அதிர்வெண்' },
      { English: 'Wavelength (λ)', தமிழ்: 'அலைநீளம்' },
      { English: 'Superposition', தமிழ்: 'மேற்பொருந்துதல்' }
    ],
    learningObjectives: [
      'Define Simple Harmonic Motion (SHM) and solve problems using its displacement, velocity, and acceleration equations.',
      'Derive and apply the formula for the time period of a simple pendulum and a spring-mass system.',
      'Differentiate between transverse and longitudinal waves and use the wave equation to describe a progressive wave.',
      'Explain the phenomena of superposition, standing waves, beats, and the Doppler effect.'
    ],
    prerequisites: [
      "Concepts of force and energy, particularly Hooke's Law and potential energy of a spring.",
      "Understanding of uniform circular motion, as SHM can be described as its projection.",
      "Basic calculus (derivatives) to understand the relationship between displacement, velocity, and acceleration."
    ],
    conceptOverview: "Think of the gentle swing of a 'oonjal' (ஊஞ்சல்) in a Tamil household or the rhythmic sound from a 'thavil' (தவில்) drum during a temple procession. These are examples of **Oscillations** (அலைவுகள்) and **Waves** (அலைகள்). This chapter explores periodic, repeating motions. We will first study the simplest and most important type, Simple Harmonic Motion (SHM), and then see how these oscillations can travel through space as waves, carrying energy and information. Understanding waves is key to understanding sound, light, and almost every form of communication.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 10 ('Oscillations') and Chapter 11 ('Waves'). The TN board book has excellent visualizations. For NEET, focus on the energy conservation in SHM, formulas for time periods, and the Doppler effect equations.",
    studyTips: [
      {
        tip: "All SHM problems can be solved by considering either the force (F=-kx) or energy (E = ½kA² = constant). Choose the method that is simpler for the given problem.",
        NEET_Hack: "For a simple pendulum, the time period \\(T = 2\\pi\\sqrt{L/g}\\) is independent of the mass and amplitude (for small angles). Many NEET questions try to trick you by changing the mass of the bob; remember that it has no effect on the time period."
      },
      {
        tip: "Memorize the conditions for nodes and antinodes in standing waves for both strings and pipes (open and closed). Draw the first few harmonics to visualize them.",
        NEET_Hack: "The beat frequency is always the positive difference between the two source frequencies (f_beat = |f₁ - f₂|). The Doppler effect formula has many signs; derive the sign convention from a simple case: when a source moves towards you, the frequency should increase."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Oscillations and Waves (இயற்பியல் - அலைவுகள் மற்றும் அலைகள்)

# 2. Learning Objectives
1.  After this, you will be able to define Simple Harmonic Motion (SHM) and solve problems using its displacement, velocity, and acceleration equations.
2.  After this, you will be able to derive and apply the formula for the time period of a simple pendulum and a spring-mass system.
3.  After this, you will be able to differentiate between transverse and longitudinal waves and use the wave equation to describe a progressive wave.
4.  After this, you will be able to explain the phenomena of superposition, standing waves, beats, and the Doppler effect.

# 3. Prerequisites
– Concepts of force and energy, particularly Hooke's Law and potential energy of a spring.
– Understanding of uniform circular motion, as SHM can be described as its projection.
– Basic calculus (derivatives) to understand the relationship between displacement, velocity, and acceleration.

# 4. Concept Overview
Think of the gentle swing of a 'oonjal' (ஊஞ்சல்) in a Tamil household or the rhythmic sound from a 'thavil' (தவில்) drum during a temple procession. These are examples of **Oscillations** (அலைவுகள்) and **Waves** (அலைகள்). This chapter explores periodic, repeating motions. We will first study the simplest and most important type, Simple Harmonic Motion (SHM), and then see how these oscillations can travel through space as waves, carrying energy and information. Understanding waves is key to understanding sound, light, and almost every form of communication.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 2, Chapter 10 ('Oscillations') and Chapter 11 ('Waves')**.

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

# 6. Worked Examples

**1. Easy:** A particle executes SHM with an amplitude of 5 cm and a period of 2 s. What is its maximum velocity?
*   **Solution:**
    1.  The maximum velocity in SHM is given by \\(v_{max} = A\\omega\\).
    2.  The angular frequency \\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{2} = \\pi \\text{ rad/s}\\).
    3.  Given amplitude \\(A = 5 \\text{ cm} = 0.05 \\text{ m}\\).
    4.  \\(v_{max} = (0.05 \\text{ m}) \\times (\\pi \\text{ rad/s}) = 0.05\\pi \\text{ m/s} \\approx 0.157 \\text{ m/s}\\).

**2. Medium:** A string of length 0.5 m is stretched between two rigid supports. What is the wavelength of the fundamental mode of vibration?
*   **Solution:**
    *   For the fundamental mode (first harmonic) of a string fixed at both ends, the length of the string L corresponds to half a wavelength (λ/2).
    *   \\(L = \\frac{\\lambda}{2}\\).
    *   So, wavelength \\(\\lambda = 2L = 2 \\times 0.5 \\text{ m} = 1.0 \\text{ m}\\).

**3. Must-Practice:** A train moving at a speed of 30 m/s sounds a whistle of frequency 500 Hz. What is the apparent frequency heard by a stationary observer when the train is approaching the observer? (Speed of sound in air = 330 m/s)
*   **Solution:**
    *   This is an application of the Doppler effect for a moving source and a stationary observer.
    *   The formula is \\(\\nu' = \\nu \\left( \\frac{v}{v - v_s} \\right)\\), where v is the speed of sound and v_s is the speed of the source.
    *   Given: ν = 500 Hz, v = 330 m/s, v_s = 30 m/s.
    *   \\(\\nu' = 500 \\left( \\frac{330}{330 - 30} \\right) = 500 \\left( \\frac{330}{300} \\right) = 500 \\times 1.1 = 550 \\text{ Hz}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(y = A \\sin(\\omega t + \\phi)\\) | Equation of SHM (தனிச் சீரிசை இயக்கத்தின் சமன்பாடு) |
| \\(T = 2\\pi\\sqrt{\\frac{L}{g}}\\) | Time Period of Simple Pendulum (தனி ஊசலின் அலைவு நேரம்) |
| \\(v = \\nu\\lambda\\) | Wave Velocity (அலைத் திசைவேகம்) |
| \\(f_{beat} = |\\nu_1 - \\nu_2|\\) | Beat Frequency (விம்மல் அதிர்வெண்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Standing Wave (நிலையான அலை)</text>
    <path d="M 30 100 C 80 40, 130 160, 180 100 S 280 40, 330 100" stroke="blue" stroke-width="2" fill="none" opacity="0.3"/>
    <path d="M 30 100 C 80 160, 130 40, 180 100 S 280 160, 330 100" stroke="blue" stroke-width="2" fill="none" opacity="0.3"/>
    <path d="M 30 100 C 80 40, 130 160, 180 100" stroke="red" stroke-width="2" fill="none"/>
    <circle cx="30" cy="100" r="4" fill="black"/>
    <text x="30" y="120" font-size="12" text-anchor="middle">Node (கணு)</text>
    <circle cx="105" cy="100" r="4" fill="black"/>
    <text x="105" y="120" font-size="12" text-anchor="middle">Antinode</text>
    <text x="105" y="132" font-size="12" text-anchor="middle">(எதிர்க்கணு)</text>
    <circle cx="180" cy="100" r="4" fill="black"/>
    <text x="180" y="120" font-size="12" text-anchor="middle">Node (கணு)</text>
</svg>

\`\`\`
DIAGRAM: Standing Wave (நிலையான அலை)
Shows a standing wave pattern on a string.
Nodes (கணு) are points of zero displacement.
Antinodes (எதிர்க்கணு) are points of maximum displacement.
The solid line shows the wave at one instant, and the faint lines show its oscillation envelope.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** அலைச் சமன்பாட்டில் (wave equation) குறியை நினைவில் கொள்ள: \`kx - ωt\` என்றால் அலை \`+x\` திசையில் செல்கிறது. \`kx + ωt\` என்றால் அலை \`-x\` திசையில் செல்கிறது. குறிகள் எதிர் திசையைக் குறிக்கின்றன! (To remember the sign in the wave equation: If it's \`kx - ωt\`, the wave moves in the \`+x\` direction. If it's \`kx + ωt\`, the wave moves in the \`-x\` direction. The signs indicate the opposite direction of travel!)

> **NEET Hack:** In Doppler effect problems, simplify the logic: If the source and observer are moving closer, the apparent frequency *increases*. If they are moving apart, the apparent frequency *decreases*. Use this to choose the correct sign in the formula \\(\\nu' = \\nu (v \\pm v_o) / (v \\mp v_s)\\) and avoid confusion.

[Download PDF Summary of Oscillations and Waves](/downloads/oscillations-waves-summary.pdf)

# 9. Quiz Yourself
1.  What is the difference between periodic motion and oscillatory motion? Give an example of a motion that is periodic but not oscillatory.
2.  At what point in its swing does a simple pendulum have maximum kinetic energy? Maximum potential energy?
3.  Why can you hear a train coming from far away by putting your ear to the track long before you can hear it through the air?

> **Student Tip (மாணவர் கருத்து):** டாப்ளர் விளைவு (Doppler effect) கணக்குகளில் (+ / -) குறிகளைப் பயன்படுத்துவதில் உங்களுக்கு குழப்பம் ஏற்படுகிறதா? அதை எளிதாக நினைவில் கொள்ள உங்களுக்கு ஏதேனும் வழிமுறைகள் உள்ளதா?

# 10. Next Steps & Community Discussion
– **Next Module:** Electrostatics (நிலைமின்னியல்). We will begin our journey into Electricity and Magnetism, starting with the forces between stationary charges.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If a child on a swing wants to go higher, they "pump" their legs. From a physics perspective, how does this add energy to the oscillating system? Discuss this on our forum.
`
    