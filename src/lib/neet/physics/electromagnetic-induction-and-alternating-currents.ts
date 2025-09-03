
import type { NeetModule } from '@/lib/types';

export const electromagneticInductionAndAlternatingCurrents: NeetModule = {
  metadata: {
    id: 'physics-electromagnetic-induction-and-alternating-currents',
    title: 'Electromagnetic Induction & AC (மின்காந்தத் தூண்டல் & மாறுதிசை மின்னோட்டம்)',
    chapter: 'Unit 14: Electromagnetic Induction & Alternating Currents',
    subject: 'Physics',
    glossary: [
      { English: 'Magnetic Flux', தமிழ்: 'காந்தப்பாயம்' },
      { English: 'Induced EMF', தமிழ்: 'தூண்டப்பட்ட மின்னியக்கு விசை' },
      { English: 'Inductance', தமிழ்: 'மின்தூண்டல்' },
      { English: 'Impedance', தமிழ்: 'மின்னெதிர்ப்பு' },
      { English: 'Resonance', தமிழ்: 'ஒத்ததிர்வு' }
    ],
    learningObjectives: [
      "State and apply Faraday's and Lenz's laws of electromagnetic induction.",
      "Define self and mutual inductance and calculate the energy stored in an inductor.",
      "Analyze series LCR circuits, calculating impedance, phase angle, and power factor.",
      "Explain the principle of resonance in an LCR circuit and the working of transformers and AC generators."
    ],
    prerequisites: [
      "Understanding of electric current, voltage, and resistance.",
      "Knowledge of magnetic field and magnetic flux.",
      "Familiarity with vectors and basic calculus."
    ],
    conceptOverview: "We have seen that electric currents can create magnetic fields. But can a magnetic field create a current? This is the question that completes the puzzle of electromagnetism. Imagine the massive generators at the Koodankulam Nuclear Power Plant (கூடங்குளம் அணுமின் நிலையம்); they work on this very principle. This chapter explores **Electromagnetic Induction** (மின்காந்தத் தூண்டல்), the phenomenon where a changing magnetic field induces a current. We will then apply this to understand **Alternating Currents (AC)**, the type of electricity that powers our homes, and the circuits (LCR circuits) that control it.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 4: 'Electromagnetic Induction and Alternating Current'. This is a very important chapter for NEET, with a strong emphasis on LCR circuit analysis and transformers.",
    studyTips: [
      {
        tip: "Master the phase relationships in AC circuits. Remember the mnemonic 'CIVIL': in a Capacitor (C), Current (I) leads Voltage (V); in an Inductor (L), Voltage (V) leads Current (I).",
        NEET_Hack: "For series LCR circuits, draw the phasor diagram. It's a vector diagram for impedance (Z), inductive reactance (X_L), capacitive reactance (X_C), and resistance (R). From this triangle, you can derive all the formulas for impedance and phase angle without memorizing them."
      },
      {
        tip: "Lenz's Law is all about opposition. The induced current will always flow in a direction that creates a magnetic field to oppose the *change* in flux that produced it. If the flux is increasing, the induced field will oppose it; if it's decreasing, the induced field will try to support it.",
        NEET_Hack: "The quality factor (Q-factor) of an LCR circuit determines the sharpness of resonance. A high Q-factor means a sharp, selective resonance curve, which is desirable in tuning circuits like radios. Remember the formula Q = (ω₀L)/R."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Electromagnetic Induction & Alternating Currents (இயற்பியல் - மின்காந்தத் தூண்டல் & மாறுதிசை மின்னோட்டம்)

# 2. Learning Objectives
1.  After this, you will be able to state and apply Faraday's and Lenz's laws of electromagnetic induction.
2.  After this, you will be able to define self and mutual inductance and calculate the energy stored in an inductor.
3.  After this, you will be able to analyze series LCR circuits, calculating impedance, phase angle, and power factor.
4.  After this, you will be able to explain the principle of resonance in an LCR circuit and the working of transformers and AC generators.

# 3. Prerequisites
– Understanding of electric current, voltage, and resistance.
– Knowledge of magnetic field and magnetic flux.
– Familiarity with vectors and basic calculus.

# 4. Concept Overview
We have seen that electric currents can create magnetic fields. But can a magnetic field create a current? This is the question that completes the puzzle of electromagnetism. Imagine the massive generators at the Koodankulam Nuclear Power Plant (கூடங்குளம் அணுமின் நிலையம்); they work on this very principle. This chapter explores **Electromagnetic Induction** (மின்காந்தத் தூண்டல்), the phenomenon where a changing magnetic field induces a current. We will then apply this to understand **Alternating Currents (AC)**, the type of electricity that powers our homes, and the circuits (LCR circuits) that control it.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 4: 'Electromagnetic Induction and Alternating Current'**.

### 5.1 Electromagnetic Induction (EMI) (மின்காந்தத் தூண்டல்)
*   **Faraday's Laws:**
    *   First Law: Whenever the amount of magnetic flux linked with a circuit changes, an EMF is induced in the circuit.
    *   Second Law: The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux. \\[ \\epsilon = -\\frac{d\\Phi_B}{dt} \\]
*   **Lenz’s Law:** The negative sign in Faraday's law is due to Lenz's law. It states that the direction of the induced current is such that it opposes the cause which produces it. This is a consequence of the law of conservation of energy.
*   **Eddy Currents (சுழல் மின்னோட்டங்கள்):** When a bulk piece of conductor is subjected to a changing magnetic flux, induced circulating currents called eddy currents are produced. These are used in magnetic braking and induction furnaces but cause heat loss in transformers.

### 5.2 Inductance (மின்தூண்டல்)
*   **Self-Inductance (L):** The property of a coil by virtue of which it opposes any change of current flowing through it by inducing an EMF in itself. The induced EMF is given by \\(\\epsilon = -L\\frac{dI}{dt}\\).
*   **Mutual Inductance (M):** The phenomenon where a change of current in one coil induces an EMF in a neighbouring coil. The induced EMF in the secondary coil is \\(\\epsilon_2 = -M\\frac{dI_1}{dt}\\).

### 5.3 Alternating Currents (AC) (மாறுதிசை மின்னோட்டம்)
*   **AC Voltage and Current:** An alternating voltage or current varies sinusoidally with time. e.g., \\(V = V_0 \\sin(\\omega t)\\).
*   **Peak and RMS Value:** The **peak value** (V₀, I₀) is the maximum amplitude. The **RMS (Root Mean Square)** value is the effective value, which gives the same heating effect as a DC current of the same magnitude. \\(V_{rms} = V_0/\\sqrt{2}\\) and \\(I_{rms} = I_0/\\sqrt{2}\\).
*   **Reactance and Impedance:**
    *   **Reactance (X):** The opposition offered by an inductor or a capacitor to the flow of AC. Inductive reactance \\(X_L = \\omega L\\), Capacitive reactance \\(X_C = \\frac{1}{\\omega C}\\).
    *   **Impedance (Z) (மின்னெதிர்ப்பு):** The total opposition offered by an LCR circuit to the flow of AC. It is the vector sum of resistance and net reactance. \\(Z = \\sqrt{R^2 + (X_L - X_C)^2}\\).
*   **LCR Series Circuit:** An important circuit containing an inductor (L), capacitor (C), and resistor (R) in series. The phase angle (φ) between voltage and current is given by \\(\\tan{\\phi} = \\frac{X_L - X_C}{R}\\).
*   **Resonance (ஒத்ததிர்வு):** A special condition in an LCR circuit where the inductive reactance equals the capacitive reactance (X_L = X_C). At this resonant frequency (\\(\\omega_0 = 1/\\sqrt{LC}\\)), the impedance is minimum (Z=R) and the current is maximum.
*   **Power in AC Circuits:** The average power consumed is \\(P_{avg} = V_{rms}I_{rms}\\cos{\\phi}\\), where \\(\\cos{\\phi}\\) is the **power factor**.
*   **Wattless Current:** The component of current that does not contribute to the average power consumption (when φ = 90°).

### 5.4 AC Generator and Transformer
*   **AC Generator:** A device that converts mechanical energy into electrical energy based on the principle of electromagnetic induction.
*   **Transformer (மின்மாற்றி):** A device used to increase (step-up) or decrease (step-down) AC voltage based on the principle of mutual induction. For an ideal transformer, \\(\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}\\).

# 6. Worked Examples

**1. Easy:** A coil of self-inductance L = 50 mH carries a current of 2 A. What is the energy stored in the magnetic field?
*   **Solution:**
    *   The energy stored in an inductor is given by the formula \\(U = \\frac{1}{2}LI^2\\).
    *   Given L = 50 mH = 50 × 10⁻³ H and I = 2 A.
    *   \\(U = \\frac{1}{2} \\times (50 \\times 10^{-3}) \\times (2)^2 = \\frac{1}{2} \\times (50 \\times 10^{-3}) \\times 4 = 100 \\times 10^{-3} \\text{ J} = 0.1 \\text{ J}\\).

**2. Medium:** In a series LCR circuit, R = 400 Ω, L = 100 mH, and C = 1 μF. The AC source has V_rms = 100 V and frequency ν = 50 Hz. Calculate the impedance of the circuit.
*   **Solution:**
    1.  Angular frequency \\(\\omega = 2\\pi\\nu = 2 \\times 3.14 \\times 50 = 314 \\text{ rad/s}\\).
    2.  Inductive reactance \\(X_L = \\omega L = 314 \\times (100 \\times 10^{-3}) = 31.4 \\Omega\\).
    3.  Capacitive reactance \\(X_C = \\frac{1}{\\omega C} = \\frac{1}{314 \\times 1 \\times 10^{-6}} \\approx 3185 \\Omega\\).
    4.  Impedance \\(Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{400^2 + (31.4 - 3185)^2}\\).
    5.  \\(Z \\approx \\sqrt{160000 + (-3153.6)^2} \\approx \\sqrt{160000 + 9945193} \\approx \\sqrt{10105193} \\approx 3179 \\Omega\\).

**3. Must-Practice:** A step-down transformer operates on a 2.5 kV line. It supplies a load with 20 A. The ratio of the primary winding to the secondary winding is 10:1. If the transformer is 100% efficient, determine the current in the primary coil.
*   **Solution:**
    *   For an efficient transformer, \\(\\frac{I_p}{I_s} = \\frac{N_s}{N_p}\\).
    *   Given the ratio of primary to secondary turns: \\(\\frac{N_p}{N_s} = \\frac{10}{1}\\).
    *   Therefore, \\(\\frac{N_s}{N_p} = \\frac{1}{10}\\).
    *   We have \\(\\frac{I_p}{20 A} = \\frac{1}{10}\\).
    *   Solving for the primary current: \\(I_p = \\frac{20 A}{10} = 2 \\text{ A}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( \\epsilon = -\\frac{d\\Phi_B}{dt} \\) | Faraday's Law of Induction (பாரடேயின் தூண்டல் விதி) |
| \\( Z = \\sqrt{R^2 + (X_L - X_C)^2} \\) | Impedance of LCR Circuit (LCR சுற்றின் மின்னெதிர்ப்பு) |
| \\( \\omega_0 = \\frac{1}{\\sqrt{LC}} \\) | Resonant Angular Frequency (ஒத்ததிர்வு கோண அதிர்வெண்) |
| \\( P_{avg} = V_{rms}I_{rms}\\cos{\\phi} \\) | Average Power in AC Circuit (சராசரி திறன்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">LCR Circuit Phasor Diagram</text>
    <line x1="50" y1="100" x2="250" y2="100" stroke="black" marker-end="url(#arrow)" />
    <text x="255" y="105">I_rms</text>
    <line x1="50" y1="100" x2="150" y2="100" stroke="red" stroke-width="2" marker-end="url(#arrow)" />
    <text x="100" y="95" fill="red">V_R</text>
    <line x1="150" y1="100" x2="150" y2="40" stroke="blue" stroke-width="2" marker-end="url(#arrow)" />
    <text x="155" y="60" fill="blue">V_L</text>
    <line x1="150" y1="100" x2="150" y2="160" stroke="green" stroke-width="2" marker-end="url(#arrow)" />
    <text x="155" y="140" fill="green">V_C</text>
    <line x1="50" y1="100" x2="150" y2="70" stroke="purple" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4,4"/>
    <text x="90" y="70" fill="purple">V_net</text>
    <path d="M 130 100 A 20 20 0 0 1 125 80" stroke="black" fill="none" />
    <text x="120" y="90">φ</text>
</svg>

\`\`\`
DIAGRAM: LCR Circuit Phasor Diagram (LCR சுற்றுக்கான ஃபேசர் வரைபடம்)
Shows the phase relationship between voltages in a series LCR circuit.
Current (I_rms) is taken as the reference on the horizontal axis.
Voltage across the resistor (V_R) is in phase with the current.
Voltage across the inductor (V_L) leads the current by 90°.
Voltage across the capacitor (V_C) lags the current by 90°.
The net voltage (V_net) is the vector sum, with a phase angle φ.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** மின்மாற்றி (Transformer) விதிகள்: சுற்றுகள் அதிகம் என்றால் மின்னழுத்தம் அதிகம், மின்னோட்டம் குறைவு. (Rules for transformer: More turns means more voltage, less current).

> **NEET Hack:** In a series LCR circuit, the voltage across L and C can be larger than the source voltage, especially near resonance. This is called voltage magnification. Also, remember that at resonance, the circuit is purely resistive and the power factor is 1 (maximum power).

[Download PDF Summary of EMI & AC](/downloads/emi-ac-summary.pdf)

# 9. Quiz Yourself
1.  Explain why eddy currents are undesirable in a transformer core but useful in an induction furnace.
2.  An electric bulb connected to an AC source glows with a certain brightness. If a capacitor is added in series, what happens to the brightness? What if an inductor is added instead?
3.  Why is power transmitted over long distances at high voltage and low current?

> **Student Tip (மாணவர் கருத்து):** LCR சுற்றுகளில் ஃபேசர் வரைபடங்களை (phasor diagrams) வரைவதில் சிரமம் உள்ளதா? எந்த மின்னழுத்தம் முன்னோக்கிச் செல்லும், எது பின்தங்கும் என்பதில் குழப்பமா? உங்கள் சந்தேகங்களைக் கேளுங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Electromagnetic Waves (மின்காந்த அலைகள்). We will see how accelerating charges and time-varying fields lead to the creation of self-propagating waves that travel at the speed of light.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** In our homes, the AC supply is 220V. Is this the RMS value or the peak value? What is the peak voltage that our appliances are subjected to? Discuss on our forum.
`
  
}
