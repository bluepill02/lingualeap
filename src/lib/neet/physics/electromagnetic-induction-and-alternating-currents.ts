
import type { NeetModule } from '@/lib/types';

export const electromagneticInductionAndAlternatingCurrents: NeetModule = {
  id: 'physics-electromagnetic-induction-and-alternating-currents',
  title: 'Electromagnetic Induction and Alternating Currents',
  chapter: 'Electromagnetic Induction and Alternating Currents',
  subject: 'Physics',
  conceptNotes: `
### 1. Electromagnetic Induction (மின்காந்தத் தூண்டல்)
*   **Magnetic Flux (Φ_B):** The number of magnetic field lines passing through a surface. Φ_B = B⋅A = BAcosθ.
*   **Faraday's Law of Induction:** The magnitude of the induced EMF in a circuit is equal to the time rate of change of magnetic flux through the circuit. ε = -dΦ_B/dt.
*   **Lenz's Law:** The direction of the induced current is such that it opposes the change in magnetic flux that produced it. (This is the significance of the negative sign in Faraday's law).

### 2. Inductance (தூண்டல்)
*   **Self-Inductance (L):** The property of a coil by which it opposes any change in the current flowing through it. The induced EMF is ε = -L(dI/dt).
*   **Mutual-Inductance (M):** The phenomenon where a changing current in one coil induces an EMF in a neighboring coil.

### 3. Alternating Current (AC) (மாறுதிசை மின்னோட்டம்)
*   Current that periodically reverses direction. Described by I = I₀sin(ωt).
*   **Root Mean Square (RMS) Value:** The effective value of AC. I_rms = I₀/√2, V_rms = V₀/√2.
*   **Reactance (மறுப்பு):** Opposition to AC flow.
    *   **Inductive Reactance (X_L):** X_L = ωL.
    *   **Capacitive Reactance (X_C):** X_C = 1/ωC.
*   **Impedance (Z):** The total opposition to current flow in an AC circuit. Z = √(R² + (X_L - X_C)²).

### 4. AC Circuits (AC சுற்றுகள்)
*   **LCR Series Circuit:** An important circuit containing an inductor (L), capacitor (C), and resistor (R).
*   **Resonance (ஒத்ததிர்வு):** A condition in an LCR circuit where the current is maximum. This occurs when X_L = X_C, which means the resonant frequency is ω₀ = 1/√(LC). At resonance, the circuit behaves as a purely resistive circuit. (வானொலியில் ஒரு குறிப்பிட்ட நிலையத்தைத் தேர்ந்தெடுப்பது போல).

### 5. LC Oscillations (LC அலைவுகள்)
*   The oscillation of charge between the capacitor and inductor in an LC circuit, analogous to a mechanical simple harmonic oscillator.

### 6. Transformers (மின்மாற்றிகள்)
*   A device used to change AC voltages. Works on the principle of mutual induction.
*   **Step-up Transformer:** Increases voltage (V_s > V_p, N_s > N_p).
*   **Step-down Transformer:** Decreases voltage (V_s < V_p, N_s < N_p).
*   Transformation Ratio: V_s/V_p = N_s/N_p = I_p/I_s.
`,
  workedExamples: [
    {
        problem: "A coil of self-inductance L = 50 mH carries a current of 2 A. What is the energy stored in the magnetic field?",
        solution: "The energy stored in an inductor is given by the formula U = ½LI². Given L = 50 mH = 50 × 10⁻³ H and I = 2 A. U = ½ * (50 × 10⁻³) * (2)² = ½ * (50 × 10⁻³) * 4 = 100 × 10⁻³ J = 0.1 J."
    },
    {
        problem: "In an LCR series circuit, R = 400 Ω, L = 100 mH, and C = 1 μF. The AC source has V_rms = 100 V and frequency ν = 50 Hz. Calculate the impedance of the circuit.",
        solution: "First, calculate the reactances. Angular frequency ω = 2πν = 2 * 3.14 * 50 = 314 rad/s. Inductive reactance X_L = ωL = 314 * (100 × 10⁻³) = 31.4 Ω. Capacitive reactance X_C = 1/ωC = 1 / (314 * 1 × 10⁻⁶) = 1 / (314 × 10⁻⁶) ≈ 3185 Ω. Impedance Z = √(R² + (X_L - X_C)²) = √(400² + (31.4 - 3185)²). Z ≈ √(160000 + (-3153.6)²) ≈ √(160000 + 9945193) ≈ √10105193 ≈ 3179 Ω."
    },
    {
        problem: "A step-down transformer operates on a 2.5 kV line. It supplies a load with 20 A. The ratio of the primary winding to the secondary winding is 10:1. If the transformer is 100% efficient, determine the current in the primary coil.",
        solution: "For an efficient transformer, the power is constant: P_p = P_s, which means V_pI_p = V_sI_s. The transformation ratio gives N_p/N_s = V_p/V_s = I_s/I_p = 10. We are given the secondary current I_s = 20 A. We need to find the primary current I_p. Using the current ratio: I_s/I_p = 10. 20 A / I_p = 10. I_p = 20 A / 10 = 2 A."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
