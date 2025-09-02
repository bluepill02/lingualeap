
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
  mcqs: [
    {
        "question": "Lenz's law is a consequence of the law of conservation of:",
        "options": ["Charge", "Mass", "Energy", "Momentum"],
        "answer": "Energy",
        "explanation": "Lenz's law, which states that the induced current opposes the change that produced it, is a direct consequence of the conservation of energy."
    },
    {
        "question": "The SI unit of inductance is:",
        "options": ["Weber", "Tesla", "Henry", "Farad"],
        "answer": "Henry",
        "explanation": "The Henry (H) is the SI unit for both self and mutual inductance."
    },
    {
        "question": "A transformer works on the principle of:",
        "options": ["Self-induction", "Mutual induction", "Electromagnetic damping", "Eddy currents"],
        "answer": "Mutual induction",
        "explanation": "A transformer operates by a changing current in the primary coil inducing an EMF in the secondary coil through mutual induction."
    },
    {
        "question": "In a pure inductive AC circuit, the current:",
        "options": ["Leads the voltage by π/2", "Lags behind the voltage by π/2", "Is in phase with the voltage", "Lags behind the voltage by π"],
        "answer": "Lags behind the voltage by π/2",
        "explanation": "In a purely inductive circuit, the current lags behind the voltage by a phase angle of 90° or π/2 radians."
    },
    {
        "question": "At resonance in a series LCR circuit, the impedance is:",
        "options": ["Maximum", "Minimum and equal to R", "Zero", "Infinite"],
        "answer": "Minimum and equal to R",
        "explanation": "At resonance, X_L = X_C, so the impedance Z = √(R² + (X_L - X_C)²) becomes Z = √R² = R, which is the minimum possible impedance."
    },
    {
        "question": "The RMS value of an alternating current I = I₀sin(ωt) is:",
        "options": ["I₀", "I₀/2", "I₀/√2", "2I₀"],
        "answer": "I₀/√2",
        "explanation": "The Root Mean Square (RMS) or effective value for a sinusoidal AC is its peak value divided by the square root of 2."
    },
    {
        "question": "A step-up transformer increases:",
        "options": ["Current", "Voltage", "Power", "Frequency"],
        "answer": "Voltage",
        "explanation": "A step-up transformer has more turns in the secondary coil than the primary, which results in an increase in voltage (and a decrease in current)."
    },
    {
        "question": "The energy stored in an inductor is proportional to:",
        "options": ["I", "I²", "1/I", "1/I²"],
        "answer": "I²",
        "explanation": "The energy stored in the magnetic field of an inductor is given by U = ½LI², so it is proportional to the square of the current."
    },
    {
        "question": "The core of a transformer is laminated to reduce:",
        "options": ["Hysteresis loss", "Copper loss", "Flux leakage", "Eddy current loss"],
        "answer": "Eddy current loss",
        "explanation": "Laminating the iron core increases its resistance, which significantly reduces the magnitude of eddy currents and the associated energy loss."
    },
    {
        "question": "In a pure capacitive AC circuit, the power factor is:",
        "options": ["0", "1", "0.5", "Infinite"],
        "answer": "0",
        "explanation": "The power factor is cos(φ). In a pure capacitive circuit, the phase angle φ is π/2 (90°). Since cos(π/2) = 0, the power factor is zero, and no real power is consumed."
    },
    {
        "question": "The resonant frequency of an LCR circuit is given by:",
        "options": ["1/√(LC)", "LC", "L/C", "C/L"],
        "answer": "1/√(LC)",
        "explanation": "Resonance occurs when ω₀L = 1/ω₀C, which gives the angular frequency ω₀ = 1/√(LC)."
    },
    {
        "question": "A choke coil is a coil with:",
        "options": ["High inductance and high resistance", "Low inductance and high resistance", "High inductance and low resistance", "Low inductance and low resistance"],
        "answer": "High inductance and low resistance",
        "explanation": "A choke coil is used to control AC current with minimal power loss. It has high inductive reactance (X_L = ωL) to oppose the current, and low resistance to minimize I²R heat loss."
    },
    {
        "question": "The direction of induced current is found by:",
        "options": ["Fleming's left-hand rule", "Lenz's Law", "Ampere's law", "Biot-Savart law"],
        "answer": "Lenz's Law",
        "explanation": "Lenz's law gives the direction of the induced current, stating that it will flow in a direction that opposes the change in magnetic flux causing it."
    },
    {
        "question": "The phenomenon of electromagnetic induction is used in:",
        "options": ["Motors", "Generators", "Capacitors", "Resistors"],
        "answer": "Generators",
        "explanation": "An electric generator works on the principle of electromagnetic induction, converting mechanical energy into electrical energy."
    },
    {
        "question": "The quality factor (Q-factor) of an LCR circuit is given by:",
        "options": ["(1/R)√(L/C)", "R√(L/C)", "(1/L)√(R/C)", "(1/C)√(L/R)"],
        "answer": "(1/R)√(L/C)",
        "explanation": "The Q-factor is a measure of the sharpness of resonance and is given by Q = ω₀L/R = (1/R)√(L/C)."
    },
    {
        "question": "A transformer cannot be used to step up or step down:",
        "options": ["AC voltage", "DC voltage", "AC current", "Both AC voltage and current"],
        "answer": "DC voltage",
        "explanation": "A transformer works on the principle of changing magnetic flux. A DC voltage produces a constant current and thus a constant magnetic flux, so no induction occurs."
    },
    {
        "question": "The opposition offered by a capacitor to the flow of AC is called:",
        "options": ["Resistance", "Inductance", "Impedance", "Capacitive Reactance"],
        "answer": "Capacitive Reactance",
        "explanation": "Capacitive reactance (X_C) is the opposition to alternating current due to capacitance."
    },
    {
        "question": "For an ideal transformer, the efficiency is:",
        "options": ["100%", "90%", "50%", "0%"],
        "answer": "100%",
        "explanation": "An ideal transformer has no energy losses, so the output power is equal to the input power, and the efficiency is 100%."
    },
    {
        "question": "An AC generator is based on the principle of:",
        "options": ["Heating effect of current", "Magnetic effect of current", "Chemical effect of current", "Electromagnetic induction"],
        "answer": "Electromagnetic induction",
        "explanation": "Rotating a coil in a magnetic field changes the magnetic flux, which induces an EMF according to Faraday's law of electromagnetic induction."
    },
    {
        "question": "The phase angle between voltage and current in a series LCR circuit at resonance is:",
        "options": ["0", "π/2", "π", "π/4"],
        "answer": "0",
        "explanation": "At resonance, X_L = X_C, the circuit behaves as purely resistive, and the voltage and current are in phase (φ=0)."
    },
    {
        "question": "The dimensional formula for mutual inductance is:",
        "options": ["[ML²T⁻²I⁻²]", "[MLT⁻²I⁻²]", "[ML²T⁻¹I⁻¹]", "[ML²T⁻²I⁻¹]"],
        "answer": "[ML²T⁻²I⁻²]",
        "explanation": "From ε = M(dI/dt), M = ε(dt/dI). Dimensions = [ML²T⁻³I⁻¹] * [T]/[I] = [ML²T⁻²I⁻²]."
    },
    {
        "question": "If the number of turns in a solenoid is doubled, its self-inductance becomes:",
        "options": ["Doubled", "Halved", "Four times", "Unchanged"],
        "answer": "Four times",
        "explanation": "Self-inductance of a solenoid L ∝ N², where N is the total number of turns. If N is doubled, L becomes four times larger."
    },
    {
        "question": "The power factor of an AC circuit is given by:",
        "options": ["R/Z", "Z/R", "X_L/R", "X_C/R"],
        "answer": "R/Z",
        "explanation": "The power factor is defined as the cosine of the phase angle, cos(φ), which from the impedance triangle is equal to the ratio of resistance to impedance (R/Z)."
    },
    {
        "question": "LC oscillations are analogous to the oscillations of a:",
        "options": ["Simple pendulum", "Spring-mass system", "Tuning fork", "Bar magnet"],
        "answer": "Spring-mass system",
        "explanation": "The energy oscillates between the electric field of the capacitor (like potential energy in a spring) and the magnetic field of the inductor (like kinetic energy of the mass)."
    },
    {
        "question": "Eddy currents are produced when:",
        "options": ["A metal is kept in a varying magnetic field", "A metal is kept in a uniform magnetic field", "A current is passed through a circular coil", "A metal is kept in a varying electric field"],
        "answer": "A metal is kept in a varying magnetic field",
        "explanation": "Eddy currents are loops of electric current induced within conductors by a changing magnetic field in the conductor, according to Faraday's law of induction."
    }
  ],
  assertionReasons: [
    {
        "assertion": "An inductor is called the inertia of an electric circuit.",
        "reason": "An inductor opposes the change in current flowing through it.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The property of opposing a change in current (due to induced back EMF) is analogous to the property of inertia, which opposes a change in motion."
    },
    {
        "assertion": "A transformer cannot work on a DC supply.",
        "reason": "A transformer works on the principle of mutual induction, which requires a changing magnetic flux.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. DC current produces a constant magnetic flux, so no induction occurs in the secondary coil."
    },
    {
        "assertion": "In a series LCR circuit at resonance, the current is maximum.",
        "reason": "At resonance, the impedance of the circuit is minimum.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since I = V/Z, the current will be maximum when the impedance Z is minimum, which occurs at resonance (Z=R)."
    },
    {
        "assertion": "The core of a transformer is laminated.",
        "reason": "Lamination reduces the energy loss due to eddy currents.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. By splitting the core into insulated laminations, the path for eddy currents is broken, increasing the resistance and reducing the I²R loss."
    },
    {
        "assertion": "An AC generator is based on the principle of electromagnetic induction.",
        "reason": "When a coil is rotated in a magnetic field, the magnetic flux linked with it changes, inducing an EMF.",
        "answer": "A",
        "explanation": "The reason correctly describes the mechanism of an AC generator, which is an application of Faraday's law of electromagnetic induction."
    },
    {
        "assertion": "A choke coil is preferred over a resistor to control AC current.",
        "reason": "A choke coil consumes almost no power.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. An ideal choke (pure inductor) has a phase difference of 90° between voltage and current, so its power factor (cos φ) is zero, and it consumes no average power, unlike a resistor."
    },
    {
        "assertion": "The RMS value of an alternating current is also known as its effective value.",
        "reason": "It is the equivalent DC current that would produce the same amount of heat in the same resistor in the same time.",
        "answer": "A",
        "explanation": "The reason provides the correct definition and justification for why the RMS value is called the effective value."
    },
    {
        "assertion": "In a pure capacitive circuit, the current leads the voltage by 90°.",
        "reason": "The capacitive reactance is inversely proportional to the frequency.",
        "answer": "B",
        "explanation": "Both statements are true facts about a capacitive circuit. However, the frequency dependence of reactance (reason) does not explain the phase relationship (assertion). The phase relationship arises from the capacitor charging and discharging process."
    },
    {
        "assertion": "Lenz's law violates the principle of conservation of energy.",
        "reason": "The induced current opposes the change that produces it.",
        "answer": "D",
        "explanation": "The assertion is false; Lenz's law is a consequence of the conservation of energy. The reason is a true statement of Lenz's law."
    },
    {
        "assertion": "In a series LCR circuit, the voltage across L and C can be greater than the source voltage.",
        "reason": "The voltages across L and C are 180° out of phase.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Because V_L and V_c are out of phase, the net voltage across the LC combination is |V_L - V_C|, while the individual voltages can be very large in a resonant circuit (voltage magnification)."
    },
    {
        "assertion": "A metal plate is placed in a time-varying magnetic field. It gets heated up.",
        "reason": "The heating is due to the eddy currents induced in the plate.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The varying magnetic field induces circulating eddy currents, and the heating is due to the I²R losses caused by these currents flowing through the resistance of the metal."
    },
    {
        "assertion": "The power factor in an AC circuit can be zero.",
        "reason": "This happens when the circuit is purely inductive or purely capacitive.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. In a purely inductive or capacitive circuit, the phase difference between voltage and current is 90°, and the power factor (cos 90°) is zero."
    },
    {
        "assertion": "Faraday's laws are a consequence of conservation of energy.",
        "reason": "The induced EMF is proportional to the rate of change of magnetic flux.",
        "answer": "B",
        "explanation": "Both statements are true. Lenz's law, which is part of Faraday's law, ensures the conservation of energy. The reason is a statement of Faraday's law itself, not an explanation of its connection to energy conservation."
    },
    {
        "assertion": "In a step-up transformer, the current in the secondary coil is less than the current in the primary coil.",
        "reason": "For an ideal transformer, the input power is equal to the output power.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since P_in = P_out, V_pI_p = V_sI_s. In a step-up transformer, V_s > V_p, so for the power to be equal, I_s must be less than I_p."
    },
    {
        "assertion": "An inductor offers an easy path to DC and a resistive path to AC.",
        "reason": "The inductive reactance is zero for DC and non-zero for AC.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. For DC, frequency ω=0, so inductive reactance X_L = ωL = 0. For AC, ω > 0, so X_L is non-zero and opposes the current."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Faraday's Law", "b) Lenz's Law", "c) Mutual Induction", "d) Self Induction"],
        "column2": ["i) ε = -L(dI/dt)", "ii) Principle of transformer", "iii) Direction of induced current", "iv) ε = -dΦ/dt"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Inductive Reactance (X_L)", "b) Capacitive Reactance (X_C)", "c) Impedance (Z)", "d) Resonance frequency (ω₀)"],
        "column2": ["i) 1/ωC", "ii) 1/√(LC)", "iii) ωL", "iv) √(R² + (X_L - X_C)²)"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Transformer", "b) AC Generator", "c) DC Motor", "d) Choke Coil"],
        "column2": ["i) Controls AC with low power loss", "ii) Converts electrical to mechanical energy", "iii) Changes AC voltage levels", "iv) Converts mechanical to electrical energy"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Pure Resistor", "b) Pure Inductor", "c) Pure Capacitor", "d) LCR at resonance"],
        "column2": ["i) Current leads voltage by π/2", "ii) Current lags voltage by π/2", "iii) Current and voltage are in phase", "iv) Current and voltage are in phase"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) I_rms", "b) V_rms", "c) Power Factor", "d) Quality Factor (Q)"],
        "column2": ["i) V₀/√2", "ii) cos(φ)", "iii) I₀/√2", "iv) ω₀L/R"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Unit of Magnetic Flux", "b) Unit of Inductance", "c) Unit of Magnetic Field", "d) Unit of Impedance"],
        "column2": ["i) Ohm", "ii) Tesla", "iii) Henry", "iv) Weber"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Step-up transformer", "b) Step-down transformer", "c) Ideal transformer", "d) Laminated core"],
        "column2": ["i) Reduces eddy currents", "ii) N_s > N_p", "iii) N_s < N_p", "iv) Efficiency is 100%"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Power in AC circuit", "b) Energy in inductor", "c) Energy in capacitor", "d) LC oscillations"],
        "column2": ["i) ½LI²", "ii) ½CV²", "iii) V_rms I_rms cos(φ)", "iv) Exchange of energy between L and C"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) ε = Blv", "b) Φ = BAcosθ", "c) τ = NIABsinθ", "d) Z = R"],
        "column2": ["i) Torque on a current loop", "ii) Condition for resonance", "iii) Motional EMF", "iv) Magnetic Flux"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Wattless Current", "b) Eddy Current", "c) Displacement Current", "d) Conduction Current"],
        "column2": ["i) Due to flow of electrons", "ii) Due to changing electric field", "iii) Power factor is zero", "iv) Induced current in bulk metal"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Phase angle in pure R circuit", "b) Phase angle in pure L circuit", "c) Phase angle in pure C circuit", "d) Phase angle at resonance"],
        "column2": ["i) +π/2 (current leads)", "ii) -π/2 (current lags)", "iii) 0", "iv) 0"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) Admittance", "b) Susceptance", "c) Reactance", "d) Conductance"],
        "column2": ["i) 1/R", "ii) 1/Z", "iii) Imaginary part of admittance", "iv) Imaginary part of impedance"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) AC Dynamo", "b) DC Dynamo", "c) AC Motor", "d) DC Motor"],
        "column2": ["i) Split-ring commutator", "ii) Slip rings", "iii) Converts electrical to mechanical", "iv) Converts mechanical to electrical"],
        "answer": "a-iv, b-iv, c-iii, d-iii (Note: a/b use different commutators, c/d have same function)"
    },
    {
        "column1": ["a) Magnetic shielding", "b) Electromagnetic damping", "c) Hysteresis loss", "d) Copper loss"],
        "column2": ["i) I²R heat loss in windings", "ii) Use of soft iron core", "iii) Use of superconducting materials", "iv) Used in galvanometer brakes"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) For DC, X_L is", "b) For DC, X_C is", "c) For high frequency AC, X_L is", "d) For high frequency AC, X_C is"],
        "column2": ["i) Very high", "ii) Very low", "iii) Zero", "iv) Infinite"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};
