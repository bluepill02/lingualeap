
import type { NeetModule } from '@/lib/types';

export const oscillationsAndWavesModule: NeetModule = {
    id: 'neet-physics-oscillations-and-waves',
    title: 'Physics - Oscillations and Waves (அலைவுகளும் அலைகளும்)',
    chapter: 'Oscillations and Waves',
    subject: 'Physics',
    learningObjectives: [
        "Define and analyze Simple Harmonic Motion (SHM) as a special type of oscillatory motion.",
        "Understand the concepts of phase, amplitude, frequency, and time period in SHM.",
        "Analyze the energy in SHM (kinetic and potential).",
        "Differentiate between free, damped, forced oscillations, and resonance.",
        "Understand wave motion, including transverse and longitudinal waves.",
        "Apply the principle of superposition of waves, leading to interference, standing waves, and beats.",
        "Analyze the Doppler effect in sound."
    ],
    prerequisites: [
        "Newton's Laws of Motion",
        "Uniform Circular Motion",
        "Work, Energy, and Power"
    ],
    conceptOverview: "This chapter delves into two interconnected topics: oscillations (the 'to and fro' motion of objects about an equilibrium point) and waves (the propagation of disturbances). We'll focus heavily on Simple Harmonic Motion (SHM), the simplest and most important type of oscillation, which serves as a model for many physical phenomena. We'll then see how oscillations of particles in a medium lead to the formation of waves. Understanding wave properties like superposition is key to explaining complex phenomena like interference (the pattern from two merging waves), beats (the throbbing sound from two slightly different frequencies), and the Doppler effect (the change in pitch of a moving siren).",
    tamilConnection: "சங்கீதக் கருவிகளின் струதி முதல் கோயில் மணி ஓசை வரை, அலைவுகளும் அலைகளும் நம்மைச் சூழ்ந்துள்ளன. ஒரு ஊஞ்சலின் ஆட்டம் ஒரு அலைவு, அந்த ஆட்டத்தால் காற்றில் பரவும் சத்தம் ஒரு அலை. இந்த அத்தியாயம், இந்த இரு நிகழ்வுகளுக்குமான அடிப்படை இயற்பியல் விதிகளை விளக்குகிறது.",
    culturalContext: "Consider the rhythmic swaying of a traditional 'Thavil' drum during a temple festival. The drum skin's vibration is an oscillation. The sound that travels from the drum to our ears is a wave. This chapter provides the physics to understand how the drum's oscillation creates the sound wave we hear.",
    syllabusMapping: [
         {
            topic: 'Oscillations and Waves',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 10 & 11',
            ncertReference: 'Class 11 Physics - Part 2, Chapters 14 & 15',
            notes: 'A very important unit. SHM equations and energy conservation are frequently tested. In waves, Doppler effect and standing waves in strings/pipes are high-yield topics.',
            mappingDescription: '11th Std Physics - Vol 2, Chapters 10 & 11 map to NEET Physics Unit 10'
        }
    ],
    conceptNotes: `### Part A: Oscillations (அலைவுகள்)

#### 1. Simple Harmonic Motion (SHM) (தனிச் சீரிசை இயக்கம்)
SHM is a special type of periodic motion where the restoring force is directly proportional to the displacement from the mean position and is always directed towards the mean position.
$$
F = -kx
$$
Here, k is the force constant. The negative sign indicates that the force is always opposite to the displacement.
Since $F=ma$, we have $ma = -kx$, so the acceleration is $a = -(k/m)x$. We write this as:
$$
a = -\\omega^2 x
$$
where $\\omega = \\sqrt{k/m}$ is the **angular frequency (கோண அதிர்வெண்)**. This is the defining equation for SHM.

#### 2. Equation of SHM (SHM-இன் சமன்பாடு)
The displacement of a particle executing SHM at any time 't' is given by:
$$
x(t) = A \\sin(\\omega t + \\phi)
$$
*   **A (Amplitude - வீச்சு):** Maximum displacement from the mean position.
*   **ω (Angular Frequency):** $\\omega = 2\\pi f = 2\\pi/T$.
*   **$\\phi$ (Phase Constant or Epoch - கட்ட மாறிலி):** Determines the initial position of the particle at t=0.
*   **($\\omega t + \\phi$) (Phase - கட்டம்):** The state of the particle at time t.

#### 3. Velocity and Acceleration in SHM (SHM-இல் திசைவேகம் மற்றும் முடுக்கம்)
*   **Velocity (v):** $v = \\frac{dx}{dt} = A\\omega \\cos(\\omega t + \\phi) = \\pm\\omega\\sqrt{A^2 - x^2}$
    *   Velocity is maximum at the mean position (x=0): $v_{max} = A\\omega$.
    *   Velocity is zero at the extreme positions (x=±A).
*   **Acceleration (a):** $a = \\frac{dv}{dt} = -A\\omega^2 \\sin(\\omega t + \\phi) = -\\omega^2 x$
    *   Acceleration is zero at the mean position (x=0).
    *   Acceleration is maximum at the extreme positions (x=±A): $a_{max} = A\\omega^2$.

#### 4. Energy in SHM (SHM-இல் ஆற்றல்)
*   **Kinetic Energy (K.E.):** $K.E. = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2(A^2 - x^2)$
*   **Potential Energy (P.E.):** $P.E. = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2x^2$
*   **Total Energy (E):** $E = K.E. + P.E. = \\frac{1}{2}m\\omega^2A^2 = \\frac{1}{2}kA^2$.
    The total energy in SHM is constant and proportional to the square of the amplitude.

### Part B: Waves (அலைகள்)

#### 1. Wave Motion (அலை இயக்கம்)
A wave is a disturbance that propagates through a medium, transporting energy and momentum without the net transport of the medium itself.
*   **Transverse Waves (குறுக்கலைகள்):** Particle oscillation is perpendicular to the direction of wave propagation. E.g., Waves on a string, light waves.
*   **Longitudinal Waves (நெட்டலைகள்):** Particle oscillation is parallel to the direction of wave propagation. E.g., Sound waves.

#### 2. Equation of a Progressive Wave (ஒரு முன்னேறு அலையின் சமன்பாடு)
A wave traveling in the +x direction can be represented by:
$$
y(x, t) = A \\sin(kx - \\omega t + \\phi)
$$
*   **k (Angular Wave Number - கோண அலை எண்):** $k = 2\\pi/\\lambda$, where λ is the **wavelength (அலைநீளம்)**.
*   **Wave Speed (அலை வேகம்):** $v = f\\lambda = \\frac{\\omega}{k}$.

#### 3. Superposition Principle (மேற்பொருந்துதல் தத்துவம்)
When two or more waves overlap, the resultant displacement at any point and at any instant is the vector sum of the displacements due to individual waves. This leads to:
*   **Interference (குறுக்கீட்டு விளைவு):** Modification in the distribution of intensity in the region of superposition. Constructive (ஆக்க) and destructive (அழிவுக்) interference depend on the phase difference.
*   **Standing Waves (நிலையான அலைகள்):** Formed by the superposition of two identical waves traveling in opposite directions. There are points of zero amplitude called **nodes (கணுக்கள்)** and points of maximum amplitude called **antinodes (எதிர்க்கணுக்கள்)**.
*   **Beats (விம்மல்கள்):** The periodic variation in the intensity of sound due to the superposition of two sound waves of slightly different frequencies. Beat frequency = $|f_1 - f_2|$.

#### 4. Doppler Effect (டாப்ளர் விளைவு)
The apparent change in the frequency of a wave due to relative motion between the source, the observer, and the medium.
The general formula for the apparent frequency ($f'$) is:
$$
f' = f \\left( \\frac{v + v_o}{v - v_s} \\right)
$$
where:
*   f = actual frequency
*   v = speed of sound
*   v_o = speed of observer (+ if moving towards the source)
*   v_s = speed of source (+ if moving away from the observer)
`,
    workedExamples: [
        {
            title: "NEET Level: Energy in SHM",
            titleTamil: "நீட் நிலை: SHM-இல் ஆற்றல்",
            difficulty: 'Medium',
            problem: "A particle executes SHM with an amplitude of 5 cm. At what displacement from the mean position is its kinetic energy equal to its potential energy?",
            problemTamil: "ஒரு துகள் 5 செ.மீ வீச்சுடன் தனிச் சீரிசை இயக்கத்தை மேற்கொள்கிறது. நடுநிலையிலிருந்து எந்த இடப்பெயர்ச்சியில் அதன் இயக்க ஆற்றல் அதன் நிலை ஆற்றலுக்கு சமமாக இருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Write the formulas for Kinetic Energy and Potential Energy in SHM.", calculation: "K.E. = (1/2)mω²(A² - x²)\\\\P.E. = (1/2)mω²x²" },
                { step: 2, explanation: "Set K.E. = P.E. as per the condition in the question.", calculation: "(1/2)mω²(A² - x²) = (1/2)mω²x²" },
                { step: 3, explanation: "Cancel the common terms (1/2)mω² from both sides and solve for x.", calculation: "A² - x² = x² => A² = 2x² => x² = A²/2" },
                { step: 4, explanation: "Find the value of x by taking the square root.", calculation: "x = ± A/√2" },
                { step: 5, explanation: "Substitute the given amplitude A = 5 cm.", calculation: "x = ± 5/√2 cm" }
            ],
            neetHack: "Remember this standard result: K.E. = P.E. when the displacement is A/√2. Also, at x=A/2, the ratio P.E/K.E is 1/3.",
            neetHackTamil: "இந்த நிலையான முடிவை நினைவில் கொள்க: இடப்பெயர்ச்சி A/√2 ஆக இருக்கும்போது K.E. = P.E. ஆகும். மேலும், x=A/2 இல், P.E/K.E விகிதம் 1/3 ஆகும்."
        },
        {
            title: "JEE Level: Doppler Effect with Reflection",
            titleTamil: "ஜே.இ.இ நிலை: எதிரொளிப்புடன் டாப்ளர் விளைவு",
            difficulty: 'Hard',
            problem: "A car moving at 20 m/s with its horn blowing at a frequency of 600 Hz is moving towards a large wall. Find the frequency of the reflected sound as heard by the driver. (Speed of sound = 340 m/s)",
            problemTamil: "ஒரு கார் 20 மீ/வி வேகத்தில் 600 ஹெர்ட்ஸ் அதிர்வெண்ணில் ஒலி எழுப்பிக்கொண்டு ஒரு பெரிய சுவரை நோக்கி நகர்கிறது. ஓட்டுநரால் கேட்கப்படும் எதிரொலிக்கப்பட்ட ஒலியின் அதிர்வெண்ணைக் கண்டறியவும். (ஒலியின் வேகம் = 340 மீ/வி)",
            solutionSteps: [
                { step: 1, explanation: "This problem has two steps. First, the wall acts as a stationary observer listening to the moving car. Find the frequency (f') received by the wall.", explanationTamil: "இந்த கணக்கில் இரண்டு படிகள் உள்ளன. முதலில், சுவர் ஒரு நிலையான பார்வையாளராக நகரும் காரைக் கேட்கிறது. சுவரால் பெறப்பட்ட அதிர்வெண்ணைக் (f') கண்டறியவும்." },
                { step: 2, explanation: "Use the Doppler formula. Here, observer (wall) is stationary (v_o=0) and source (car) is moving towards it (v_s = +20 m/s, but the formula has -v_s in denominator, so it becomes v-v_s).", calculation: "f' = f (v / (v - v_s)) = 600 (340 / (340 - 20)) = 600 (340 / 320) = 637.5 Hz" },
                { step: 3, explanation: "Now, the wall acts as a stationary source emitting this new frequency f'. The car driver is an observer moving towards this source. Find the final frequency (f'') heard by the driver.", explanationTamil: "இப்போது, சுவர் இந்த புதிய அதிர்வெண் f'-ஐ வெளியிடும் ஒரு நிலையான மூலமாக செயல்படுகிறது. கார் ஓட்டுநர் இந்த மூலத்தை நோக்கி நகரும் ஒரு பார்வையாளர். ஓட்டுநரால் கேட்கப்படும் இறுதி அதிர்வெண்ணைக் (f'') கண்டறியவும்." },
                { step: 4, explanation: "Use the Doppler formula again. Here, source (wall) is stationary (v_s=0) and observer (driver) is moving towards it (v_o = +20 m/s).", calculation: "f'' = f' ((v + v_o) / v) = 637.5 ((340 + 20) / 340) = 637.5 (360 / 340) ≈ 675 Hz" }
            ],
            commonPitfall: "The most common mistake is applying the formula only once. You must treat reflection as a two-step process: source to reflector, then reflector to observer.",
            commonPitfallTamil: "சூத்திரத்தை ஒரு முறை மட்டுமே பயன்படுத்துவது மிகவும் பொதுவான தவறு. எதிரொளிப்பை இரண்டு-படி செயல்முறையாகக் கருத வேண்டும்: மூலத்திலிருந்து எதிரொளிப்பான் வரை, பின்னர் எதிரொளிப்பனிலிருந்து பார்வையாளர் வரை."
        },
        {
            title: "NEET Level: Superposition of Waves",
            titleTamil: "நீட் நிலை: அலைகளின் மேற்பொருந்துதல்",
            difficulty: 'Medium',
            problem: "Two waves are represented by y₁ = 5 sin(2πt - 0.1πx) and y₂ = 5 sin(2πt - 0.1πx - π/3). What is the amplitude of the resultant wave?",
            problemTamil: "இரண்டு அலைகள் y₁ = 5 sin(2πt - 0.1πx) மற்றும் y₂ = 5 sin(2πt - 0.1πx - π/3) என குறிக்கப்படுகின்றன. விளைவு அலையின் வீச்சு என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Identify the amplitudes (A₁ and A₂) and the phase difference (φ) of the two waves.", calculation: "A₁ = 5, A₂ = 5. The phase difference φ is π/3." },
                { step: 2, explanation: "Use the formula for the resultant amplitude (R) of two waves with the same frequency: R = √(A₁² + A₂² + 2A₁A₂cosφ).", calculation: "R = \\sqrt{5^2 + 5^2 + 2(5)(5)\\cos(\\pi/3)}" },
                { step: 3, explanation: "Substitute the value of cos(π/3) = 1/2.", calculation: "R = \\sqrt{25 + 25 + 2(25)(1/2)} = \\sqrt{50 + 25} = \\sqrt{75}" },
                { step: 4, explanation: "Simplify the result.", calculation: "R = \\sqrt{25 \\times 3} = 5\\sqrt{3}" }
            ],
            neetHack: "For the special case where amplitudes are equal (A₁=A₂=A), the resultant amplitude is R = 2A cos(φ/2). Here, R = 2(5)cos((π/3)/2) = 10cos(π/6) = 10(√3/2) = 5√3.",
            neetHackTamil: "வீச்சுகள் சமமாக இருக்கும் சிறப்பு நிலையில் (A₁=A₂=A), விளைவு வீச்சு R = 2A cos(φ/2) ஆகும். இங்கு, R = 2(5)cos((π/3)/2) = 10cos(π/6) = 10(√3/2) = 5√3."
        },
        {
            title: "JEE Level: Damped Oscillations",
            titleTamil: "ஜே.இ.இ நிலை: தணிவுறும் அலைவுகள்",
            difficulty: 'Medium',
            problem: "The amplitude of a damped oscillator becomes half in 2 minutes. What will be the amplitude after 6 minutes?",
            solutionSteps: [
                { step: 1, explanation: "The amplitude of a damped oscillator decays exponentially: A(t) = A₀e^(-bt/2m), where b is the damping constant.", calculation: "A(t) = A₀e^{-γt}" },
                { step: 2, explanation: "From the given information, at t=2 min, A(2) = A₀/2.", calculation: "A₀/2 = A₀e^{-γ(2)} => 1/2 = e^{-2γ} => 2 = e^{2γ}" },
                { step: 3, explanation: "We need to find the amplitude at t = 6 minutes, which is A(6).", calculation: "A(6) = A₀e^{-γ(6)} = A₀(e^{-2γ})³" },
                { step: 4, explanation: "Substitute the value of e⁻²γ from step 2.", calculation: "A(6) = A₀(1/2)³ = A₀/8" }
            ],
            neetHack: "For exponential decay, if the quantity becomes half in a time T, it will become (1/2)ⁿ in a time nT. Here, the time is 6 minutes, which is 3 times the half-amplitude time of 2 minutes. So the amplitude will be (1/2)³ = 1/8 of the original.",
            commonPitfall: "Assuming linear decay instead of exponential decay. The amplitude does not decrease by the same amount in every 2-minute interval."
        },
        {
            title: "NEET Level: Standing Waves in a Pipe",
            titleTamil: "நீட் நிலை: குழாயில் நிலையான அலைகள்",
            difficulty: 'Medium',
            problem: "An organ pipe closed at one end has a fundamental frequency of 100 Hz. What is the fundamental frequency of an organ pipe of the same length but open at both ends?",
            solutionSteps: [
                { step: 1, explanation: "For a pipe closed at one end, only odd harmonics are present. The fundamental frequency is given by f_c = v/4L.", calculation: "100 = v/4L" },
                { step: 2, explanation: "For a pipe open at both ends, all harmonics are present. The fundamental frequency is given by f_o = v/2L.", calculation: "f_o = v/2L" },
                { step: 3, explanation: "Find the relationship between f_o and f_c.", calculation: "f_o = 2 * (v/4L) = 2 * f_c" },
                { step: 4, explanation: "Substitute the given value of f_c to find f_o.", calculation: "f_o = 2 * 100 Hz = 200 Hz" }
            ],
            neetHack: "For the same length L, the fundamental frequency of an open pipe is always double that of a closed pipe. Remember this simple ratio.",
            commonPitfall: "Confusing the formulas for open and closed pipes. A closed pipe has a node at the closed end and an antinode at the open end (L = λ/4, 3λ/4, ...). An open pipe has antinodes at both ends (L = λ/2, λ, ...)."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "x(t) = A \\sin(\\omega t + \\phi)", description: "Displacement in SHM (தனிச் சீரிசை இயக்கத்தில் இடப்பெயர்ச்சி)" },
            { formula: "E = \\frac{1}{2}kA^2", description: "Total Energy in SHM (தனிச் சீரிசை இயக்கத்தில் மொத்த ஆற்றல்)" },
            { formula: "v = f\\lambda = \\frac{\\omega}{k}", description: "Wave Speed (அலை வேகம்)" },
            { formula: "f' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)", description: "Doppler Effect (general form) (டாப்ளர் விளைவு)" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "SHM is defined by the condition a = -ω²x.",
        "Total energy in SHM is constant and depends on the square of the amplitude.",
        "Wave motion transfers energy, not matter.",
        "Superposition is the key to understanding interference, standing waves, and beats."
    ],
    mnemonics: [
        { text: "Doppler Effect signs: 'Towards gets Higher'. If the observer or source move towards each other, the apparent frequency increases.", tamil: "டாப்ளர் விளைவு குறிகள்: 'நோக்கிச் சென்றால் அதிர்வெண் கூடும்'. பார்வையாளர் அல்லது மூலம் ஒன்றுக்கொன்று நோக்கிச் சென்றால், தோற்ற அதிர்வெண் அதிகரிக்கும்." }
    ],
    neetTips: [
        { text: "Beats problems are very common. Remember beat frequency is always the positive difference: |f₁ - f₂|.", tamil: "விம்மல்கள் கணக்குகள் மிகவும் பொதுவானவை. விம்மல் அதிர்வெண் எப்போதும் நேர்மறை வேறுபாடு என்பதை நினைவில் கொள்க: |f₁ - f₂|." },
        { text: "For standing waves in pipes, carefully note if the pipe is open at both ends or closed at one end, as the harmonic series is different (all harmonics vs. only odd harmonics).", tamil: "குழாய்களில் உள்ள நிலையான அலைகளுக்கு, குழாய் இரு முனைகளிலும் திறந்ததா அல்லது ஒரு முனையில் மூடப்பட்டதா என்பதை கவனமாகக் கவனிக்கவும், ஏனெனில் இசைவுக் தொடர் வேறுபட்டது (அனைத்து இசைவுகளும் vs. ஒற்றைப்படை இசைவுகள் மட்டும்)." }
    ],
    mcqs: [
        { question: "Which of the following is NOT an example of simple harmonic motion?", options: ["A. Motion of a simple pendulum (small amplitude)", "B. Motion of a mass attached to a spring", "C. A ball bouncing on the floor", "D. Uniform circular motion's projection on a diameter"], answer: "C. A ball bouncing on the floor", explanation: "A bouncing ball is a periodic motion, but the restoring force (gravity) is constant, not proportional to displacement, so it's not SHM.", neetFrequency: 3 },
        { question: "In SHM, the total energy of the particle is proportional to:", options: ["A. The amplitude", "B. The square of the amplitude", "C. The square root of the amplitude", "D. The inverse of the amplitude"], answer: "B. The square of the amplitude", explanation: "The total energy E = (1/2)kA², so it is directly proportional to the square of the amplitude.", neetFrequency: 5 },
        { question: "Sound waves in air are:", options: ["A. Transverse", "B. Longitudinal", "C. Electromagnetic", "D. Polarized"], answer: "B. Longitudinal", explanation: "Sound travels as compressions and rarefactions, where the particle oscillation is parallel to the direction of wave propagation.", neetFrequency: 2 },
        { question: "The phenomenon of beats is produced by the superposition of two waves with:", options: ["A. Same frequency", "B. Same amplitude", "C. Slightly different frequencies", "D. A large phase difference"], answer: "C. Slightly different frequencies", explanation: "Beats are the periodic variations in loudness that occur when two sound waves of slightly different frequencies are superimposed.", neetFrequency: 4 },
        { question: "An ambulance is moving towards a stationary observer with its siren on. The observer will hear a sound with:", options: ["A. Higher pitch", "B. Lower pitch", "C. Same pitch", "D. Changing pitch"], answer: "A. Higher pitch", explanation: "This is a direct application of the Doppler effect. When the source moves towards a stationary observer, the apparent frequency (pitch) increases.", neetFrequency: 5 },
        { question: "What is the phase difference between displacement and velocity in SHM?", options: ["A. 0", "B. π/4", "C. π/2", "D. π"], answer: "C. π/2", explanation: "If x = A sin(ωt), then v = Aω cos(ωt) = Aω sin(ωt + π/2). The phase difference is π/2.", neetFrequency: 4 },
        { question: "The time period of a simple pendulum depends on:", options: ["A. Mass of the bob", "B. Amplitude of oscillation", "C. Length of the pendulum", "D. Material of the bob"], answer: "C. Length of the pendulum", explanation: "The time period T = 2π√(L/g). It depends on the length (L) and acceleration due to gravity (g), but not on the mass or amplitude (for small angles).", neetFrequency: 3 },
        { question: "A transverse wave is described by y = A sin(kx - ωt). The maximum particle velocity is given by:", options: ["A. Aω", "B. Ak", "C. ω/k", "D. x/t"], answer: "A. Aω", explanation: "Particle velocity is v_p = dy/dt = -Aω cos(kx - ωt). Its maximum value is Aω.", neetFrequency: 4 },
        { question: "In a standing wave, the distance between two consecutive nodes is:", options: ["A. λ", "B. λ/2", "C. λ/4", "D. 2λ"], answer: "B. λ/2", explanation: "Nodes are points of zero displacement. They occur every half-wavelength.", neetFrequency: 3 },
        { question: "When a wave is reflected from a rigid boundary, the phase change is:", options: ["A. 0", "B. π/2", "C. π", "D. 2π"], answer: "C. π", explanation: "Reflection from a denser (rigid) medium causes a phase change of π (or 180°). Reflection from a rarer medium causes no phase change.", neetFrequency: 2 },
        { question: "The fundamental frequency of a stretched string is proportional to:", options: ["A. Length", "B. Tension", "C. √Tension", "D. Mass per unit length"], answer: "C. √Tension", explanation: "The formula is f = (1/2L)√(T/μ). So, frequency is directly proportional to the square root of the tension.", neetFrequency: 4 },
        { question: "The Doppler effect is applicable for:", options: ["A. Sound waves only", "B. Light waves only", "C. Both sound and light waves", "D. Neither sound nor light waves"], answer: "C. Both sound and light waves", explanation: "The Doppler effect is a general wave phenomenon, although the formulas for sound (requiring a medium) and light (not requiring a medium) are slightly different.", neetFrequency: 1 },
        { question: "Two tuning forks produce 5 beats per second. If the frequency of one is 256 Hz, the frequency of the other could be:", options: ["A. 251 Hz", "B. 256 Hz", "C. 5 Hz", "D. 250 Hz"], answer: "A. 251 Hz", explanation: "Beat frequency = |f₁ - f₂|. So, 5 = |256 - f₂|. This gives two possibilities: f₂ = 256 - 5 = 251 Hz, or f₂ = 256 + 5 = 261 Hz. Of the options, 251 Hz is present.", neetFrequency: 5 },
        { question: "At which position in SHM is the speed of the particle half of its maximum speed?", options: ["A. A/2", "B. A/√2", "C. (√3/2)A", "D. A"], answer: "C. (√3/2)A", explanation: "v = ω√(A²-x²). v_max = Aω. We want v = v_max/2, so Aω/2 = ω√(A²-x²). Squaring both sides: A²/4 = A²-x² => x² = 3A²/4 => x = (√3/2)A.", neetFrequency: 3 },
        { question: "Which of the following does not affect the speed of sound in a gas?", options: ["A. Temperature", "B. Pressure", "C. Humidity", "D. Molar mass"], answer: "B. Pressure", explanation: "The speed of sound in a gas is v = √(γRT/M). At constant temperature, if pressure is changed, the density also changes such that the ratio P/ρ remains constant. So, speed is independent of pressure.", neetFrequency: 2 },
        { question: "A simple pendulum is taken to the moon. Its time period will:", options: ["A. Decrease", "B. Increase", "C. Remain the same", "D. Become infinite"], answer: "B. Increase", explanation: "T = 2π√(L/g). The acceleration due to gravity 'g' is less on the moon. Since g is in the denominator, the time period T will increase.", neetFrequency: 4 },
        { question: "The equation y = A cos²(ωt - kx) represents:", options: ["A. A simple harmonic wave", "B. A wave with amplitude A/2", "C. A non-periodic wave", "D. Two simple harmonic waves superimposed"], answer: "D. Two simple harmonic waves superimposed", explanation: "Using the identity cos²θ = (1+cos(2θ))/2, we get y = A/2 + (A/2)cos(2ωt - 2kx). This represents an oscillation about a shifted mean position, not a simple harmonic wave. It's a superposition of a constant displacement and a SHW of twice the frequency.", neetFrequency: 1 },
        { question: "What is the number of degrees of freedom for a particle constrained to move on a line?", options: ["A. 1", "B. 2", "C. 3", "D. 0"], answer: "A. 1", explanation: "Motion on a line is one-dimensional, so there is only one degree of freedom.", neetFrequency: 1 },
        { question: "The restoring force in a simple pendulum for small angles is proportional to:", options: ["A. θ", "B. sin(θ)", "C. cos(θ)", "D. tan(θ)"], answer: "B. sin(θ)", explanation: "The restoring force is F = -mg sin(θ). For small angles, sin(θ) ≈ θ, which makes the motion approximately SHM.", neetFrequency: 2 },
        { question: "Two springs of spring constants k₁ and k₂ are connected in series. The effective spring constant is:", options: ["A. k₁ + k₂", "B. (k₁ + k₂)/2", "C. k₁k₂/(k₁ + k₂)", "D. √(k₁k₂)"], answer: "C. k₁k₂/(k₁ + k₂)", explanation: "For series combination, 1/k_eff = 1/k₁ + 1/k₂. This is analogous to resistors in parallel.", neetFrequency: 3 },
        { question: "The phase of a particle in SHM at its positive extreme position is:", options: ["A. 0", "B. π/2", "C. π", "D. 3π/2"], answer: "B. π/2", explanation: "If x = A sin(ωt + φ), for x=+A, we need sin(ωt + φ)=1, which means the phase (ωt + φ) is π/2.", neetFrequency: 2 },
        { question: "What is the basic condition for the formation of standing waves?", options: ["A. The medium must be stationary", "B. The waves must have the same frequency and amplitude", "C. Two identical waves must travel in opposite directions", "D. The medium must be unrestricted"], answer: "C. Two identical waves must travel in opposite directions", explanation: "The superposition of two identical waves traveling in opposite directions results in a standing wave pattern.", neetFrequency: 4 },
        { question: "Resonance is a special case of:", options: ["A. Free oscillations", "B. Damped oscillations", "C. Forced oscillations", "D. Transverse waves"], answer: "C. Forced oscillations", explanation: "Resonance occurs in forced oscillations when the driving frequency matches the natural frequency of the system, leading to a large amplitude.", neetFrequency: 3 },
        { question: "The tension in a string is doubled. The speed of the transverse wave will:", options: ["A. Be doubled", "B. Be halved", "C. Increase by a factor of √2", "D. Decrease by a factor of √2"], answer: "C. Increase by a factor of √2", explanation: "Speed v = √(T/μ). If tension T becomes 2T, the new speed v' = √(2T/μ) = √2 * v.", neetFrequency: 4 },
        { question: "The energy of a wave is proportional to:", options: ["A. Its amplitude", "B. Its frequency", "C. The square of its amplitude", "D. Its wavelength"], answer: "C. The square of its amplitude", explanation: "The intensity (energy per unit area per unit time) of a wave is proportional to the square of its amplitude.", neetFrequency: 2 }
    ],
    assertionReasons: [
        { assertion: "In SHM, the acceleration is always directed towards the mean position.", reason: "The restoring force in SHM is always directed towards the mean position.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. Since F = -kx and F=ma, the acceleration a = -(k/m)x is also always directed towards the mean position (x=0).", neetFrequency: 5 },
        { assertion: "The time period of a simple pendulum on a satellite orbiting the Earth is infinite.", reason: "The satellite is in a state of free-fall, so the effective acceleration due to gravity is zero.", answer: "A", explanation: "Reason is true, g_eff = 0 inside an orbiting satellite. Assertion is also true because T = 2π√(L/g_eff). If g_eff is zero, T becomes infinite (it will not oscillate).", neetFrequency: 3 },
        { assertion: "All periodic motions are oscillatory.", reason: "Oscillatory motion is the to and fro motion about a mean position.", answer: "D", explanation: "Assertion is false. Uniform circular motion is periodic but not oscillatory. The reason is a true statement defining oscillatory motion.", neetFrequency: 2 },
        { assertion: "When a person talks in front of a campfire, the sound seems to tremble.", reason: "The speed of sound depends on the temperature of the medium.", answer: "A", explanation: "Assertion is a known phenomenon. The reason is true (v ∝ √T). The air above the fire has varying temperatures, causing the speed of sound to change constantly. This leads to refraction and interference, making the sound tremble. Reason explains the assertion.", neetFrequency: 1 },
        { assertion: "Transverse waves can be polarized.", reason: "Transverse waves have oscillations perpendicular to the direction of propagation.", answer: "A", explanation: "Polarization is the restriction of oscillations to a single plane. This is only possible if the oscillations are perpendicular to the direction of motion (transverse). Longitudinal waves cannot be polarized. Reason is the correct explanation.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Amplitude", "(b) Time Period", "(c) Phase", "(d) Frequency"], column2: ["(p) Reciprocal of time period", "(q) State of oscillation", "(r) Maximum displacement", "(s) Time for one oscillation"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching the terms of SHM with their definitions." },
        { column1: ["(a) Longitudinal Wave", "(b) Transverse Wave", "(c) Standing Wave", "(d) Beats"], column2: ["(p) Nodes and Antinodes", "(q) Light", "(r) Sound", "(s) Slightly different frequencies"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching wave types and phenomena with their examples or characteristics." },
        { column1: ["(a) At mean position (x=0)", "(b) At extreme position (x=A)", "(c) At x = A/√2", "(d) At all positions"], column2: ["(p) K.E. = P.E.", "(q) Max velocity, Zero acceleration", "(r) Max acceleration, Zero velocity", "(s) Total energy is constant"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching positions in SHM with the state of energy, velocity, and acceleration." },
        { column1: ["(a) Resonance", "(b) Interference", "(c) Diffraction", "(d) Polarization"], column2: ["(p) Bending of waves around obstacles", "(q) Restriction of wave vibration", "(r) Superposition of waves from coherent sources", "(s) Large amplitude oscillation at natural frequency"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching wave phenomena with their definitions." },
        { column1: ["(a) Simple Pendulum", "(b) Spring-Mass System", "(c) Open Organ Pipe", "(d) Closed Organ Pipe"], column2: ["(p) T = 2π√(m/k)", "(q) Fundamental freq = v/4L", "(r) T = 2π√(L/g)", "(s) Fundamental freq = v/2L"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching systems with their corresponding formulas for time period or fundamental frequency." }
    ]
};
