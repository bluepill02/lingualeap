
import type { NeetModule } from '@/lib/types';

export const electromagneticInductionAndAlternatingCurrents: NeetModule = {
  id: 'physics-electromagnetic-induction-and-alternating-currents',
  title: 'Electromagnetic Induction & AC (மின்காந்தத் தூண்டல் & மாறுதிசை மின்னோட்டம்)',
  chapter: 'Unit 14: Electromagnetic Induction & Alternating Currents',
  subject: 'Physics',
  conceptNotes: `
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
`,
  workedExamples: [
    {
        problem: "A coil of self-inductance L = 50 mH carries a current of 2 A. What is the energy stored in the magnetic field?",
        solution: "The energy stored in an inductor is given by the formula \\(U = \\frac{1}{2}LI^2\\). Given L = 50 mH = 50 × 10⁻³ H and I = 2 A. \\(U = \\frac{1}{2} \\times (50 \\times 10^{-3}) \\times (2)^2 = \\frac{1}{2} \\times (50 \\times 10^{-3}) \\times 4 = 100 \\times 10^{-3} \\text{ J} = 0.1 \\text{ J}\\)."
    },
    {
        problem: "In a series LCR circuit, R = 400 Ω, L = 100 mH, and C = 1 μF. The AC source has V_rms = 100 V and frequency ν = 50 Hz. Calculate the impedance of the circuit.",
        solution: "1.  Angular frequency \\(\\omega = 2\\pi\\nu = 2 \\times 3.14 \\times 50 = 314 \\text{ rad/s}\\). 2.  Inductive reactance \\(X_L = \\omega L = 314 \\times (100 \\times 10^{-3}) = 31.4 \\Omega\\). 3.  Capacitive reactance \\(X_C = \\frac{1}{\\omega C} = \\frac{1}{314 \\times 1 \\times 10^{-6}} \\approx 3185 \\Omega\\). 4.  Impedance \\(Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{400^2 + (31.4 - 3185)^2}\\). 5.  \\(Z \\approx \\sqrt{160000 + (-3153.6)^2} \\approx \\sqrt{160000 + 9945193} \\approx \\sqrt{10105193} \\approx 3179 \\Omega\\)."
    },
    {
        problem: "A step-down transformer operates on a 2.5 kV line. It supplies a load with 20 A. The ratio of the primary winding to the secondary winding is 10:1. If the transformer is 100% efficient, determine the current in the primary coil.",
        solution: "For an efficient transformer, \\(\\frac{I_p}{I_s} = \\frac{N_s}{N_p}\\). Given the ratio of primary to secondary turns: \\(\\frac{N_p}{N_s} = \\frac{10}{1}\\). Therefore, \\(\\frac{N_s}{N_p} = \\frac{1}{10}\\). We have \\(\\frac{I_p}{20 A} = \\frac{1}{10}\\). Solving for the primary current: \\(I_p = \\frac{20 A}{10} = 2 \\text{ A}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
