
import type { NeetModule } from '@/lib/types';

export const electronicDevices: NeetModule = {
  id: 'physics-electronic-devices',
  title: 'Electronic Devices',
  chapter: 'Electronic Devices',
  subject: 'Physics',
  conceptNotes: `
### 1. Semiconductors (குறைக்கடத்திகள்)
*   Materials with conductivity between conductors and insulators (e.g., Silicon, Germanium).
*   **Intrinsic Semiconductors:** Pure semiconductors.
*   **Extrinsic Semiconductors:** Doped semiconductors.
    *   **n-type:** Doped with pentavalent impurities (e.g., Phosphorus, Arsenic). Majority carriers are electrons.
    *   **p-type:** Doped with trivalent impurities (e.g., Boron, Aluminium). Majority carriers are holes.

### 2. p-n Junction Diode (p-n சந்தி டையோடு)
*   Formed when a p-type semiconductor is joined to an n-type semiconductor.
*   A **depletion region (வெறுமைப் பகுதி)** is formed at the junction with no free charge carriers.
*   **Forward Bias:** When the p-side is connected to the positive terminal and the n-side to the negative terminal. The depletion region narrows, and current flows.
*   **Reverse Bias:** When the p-side is connected to the negative terminal and the n-side to the positive terminal. The depletion region widens, and almost no current flows.
*   **Rectifier (திருத்தி):** A p-n junction diode can be used as a rectifier to convert AC to DC. (Half-wave and Full-wave rectifiers).

### 3. Special Purpose p-n Junction Diodes
*   **Zener Diode (செனர் டையோடு):** Designed to operate under reverse bias in the breakdown region. Used as a voltage regulator.
*   **Photodiode:** Used to detect optical signals.
*   **Light Emitting Diode (LED):** Converts electrical energy into light.
*   **Solar Cell:** Converts solar energy into electrical energy.

### 4. Transistors (டிரான்சிஸ்டர்கள்)
*   A semiconductor device used to amplify or switch electronic signals and electrical power.
*   **Bipolar Junction Transistor (BJT):** n-p-n or p-n-p. Has three terminals: Emitter, Base, and Collector.
*   **Transistor as an Amplifier:** A small change in the input signal results in a large change in the output signal. The common-emitter configuration is widely used.
*   **Transistor as a Switch:** Can be operated in the cut-off region (OFF) or saturation region (ON).

### 5. Logic Gates (தர்க்க வாயில்கள்)
*   Digital circuits that perform a logical operation on one or more binary inputs to produce a single binary output.
*   **Basic Gates:**
    *   **NOT Gate:** Inverter.
    *   **OR Gate:** Output is 1 if any input is 1.
    *   **AND Gate:** Output is 1 only if all inputs are 1.
*   **Universal Gates:** NAND and NOR gates, from which all other gates can be constructed.
`,
  workedExamples: [
    {
        problem: "In a common-emitter transistor amplifier, the audio signal voltage across the collector resistance of 2 kΩ is 2 V. If the current amplification factor (β) of the transistor is 100 and the base resistance is 1 kΩ, what is the input signal voltage?",
        solution: "Output voltage V_o = I_c * R_c. So, collector current I_c = V_o / R_c = 2 V / 2000 Ω = 1 mA. The current gain β = I_c / I_b. So, base current I_b = I_c / β = 1 mA / 100 = 0.01 mA = 10 μA. The input signal voltage V_i = I_b * R_b = (10 × 10⁻⁶ A) * (1000 Ω) = 10 × 10⁻³ V = 10 mV."
    },
    {
        problem: "A Zener diode with a breakdown voltage of 6 V is used as a voltage regulator. The load current is 4 mA and the unregulated input is 10 V. What should be the value of the series resistor R_s so that the current through the Zener diode is 20 mA?",
        solution: "The voltage across the load is regulated at the Zener voltage, V_z = 6 V. The voltage across the series resistor R_s is V_s = V_in - V_z = 10 V - 6 V = 4 V. The total current from the source is the sum of the Zener current (I_z) and the load current (I_L). I_total = I_z + I_L = 20 mA + 4 mA = 24 mA. Using Ohm's law for the series resistor, R_s = V_s / I_total = 4 V / (24 × 10⁻³ A) ≈ 167 Ω."
    },
    {
        problem: "For a logic gate, if the output is HIGH only when both inputs are LOW, what type of gate is it?",
        solution: "Let the inputs be A and B, and the output be Y. The condition is Y=1 only when A=0 and B=0. This corresponds to a **NOR gate**. The OR gate output is A+B, which is 0 only when A=0 and B=0. The NOR gate is the inverse of OR, so its output is HIGH (1) only when the OR output is LOW (0), which happens only when both inputs are LOW."
    }
  ],
  mcqs: [
    {
        question: "In an n-type semiconductor, the majority charge carriers are:",
        options: ["Holes", "Protons", "Electrons", "Neutrons"],
        answer": "Electrons",
        "explanation": "n-type semiconductors are created by doping with pentavalent impurities, which provide excess free electrons."
    },
    {
        question: "A p-n junction diode acts as a rectifier because it conducts current:",
        options: ["Only when forward biased", "Only when reverse biased", "In both biases", "Never"],
        answer": "Only when forward biased",
        "explanation": "A diode offers very low resistance in forward bias and very high resistance in reverse bias, allowing current to flow effectively in only one direction."
    },
    {
        question": "Which of the following is used as a voltage regulator?",
        "options": ["Photodiode", "LED", "Zener diode", "Solar cell"],
        "answer": "Zener diode",
        "explanation": "A Zener diode is specifically designed to operate in the reverse breakdown region to maintain a constant voltage across its terminals."
    },
    {
        question": "A transistor has three terminals named:",
        "options": ["Anode, Cathode, Grid", "Source, Drain, Gate", "Emitter, Base, Collector", "Primary, Secondary, Core"],
        "answer": "Emitter, Base, Collector",
        "explanation": "These are the three terminals of a Bipolar Junction Transistor (BJT)."
    },
    {
        question": "Which logic gate is known as the universal gate?",
        "options": ["AND", "OR", "NOT", "NAND"],
        "answer": "NAND",
        "explanation": "Both NAND and NOR gates are universal gates because any other logic gate can be constructed using only NAND gates or only NOR gates."
    },
    {
        question": "The depletion region in a p-n junction diode consists of:",
        "options": ["Free electrons only", "Free holes only", "Both electrons and holes", "Immobile ions"],
        "answer": "Immobile ions",
        "explanation": "The depletion region is cleared of mobile charge carriers (electrons and holes), leaving behind the fixed, immobile donor and acceptor ions."
    },
    {
        question": "The relationship between the current gains α and β of a transistor is:",
        "options": ["β = α / (1 - α)", "α = β / (1 - β)", "β = α / (1 + α)", "α = β + 1"],
        "answer": "β = α / (1 - α)",
        "explanation": "This is the standard relationship between the common-base current gain (α) and the common-emitter current gain (β)."
    },
    {
        question": "A Light Emitting Diode (LED) emits light when it is:",
        "options": ["Forward biased", "Reverse biased", "In breakdown region", "Not connected"],
        "answer": "Forward biased",
        "explanation": "When an LED is forward biased, electrons and holes recombine at the junction, releasing energy in the form of photons (light)."
    },
    {
        question": "The output of an OR gate is 1 when:",
        "options": ["Both inputs are 1", "Both inputs are 0", "Any one input is 1", "The inputs are different"],
        "answer": "Any one input is 1",
        "explanation": "The OR gate performs logical addition. Its output is HIGH (1) if at least one of its inputs is HIGH."
    },
    {
        question": "The energy gap is maximum in:",
        "options": ["Conductors", "Insulators", "Semiconductors", "Superconductors"],
        "answer": "Insulators",
        "explanation": "Insulators have a very large energy gap between the valence band and the conduction band, which makes it very difficult for electrons to conduct electricity."
    },
    {
        question": "Doping a semiconductor is done to:",
        "options": ["Increase its purity", "Change its resistance", "Make it a conductor", "Increase the number of charge carriers"],
        "answer": "Increase the number of charge carriers",
        "explanation": "Doping is the process of intentionally adding impurities to an intrinsic semiconductor to increase the number of majority charge carriers (either electrons or holes)."
    },
    {
        question": "The ripple factor for a full-wave rectifier is:",
        "options": ["1.21", "0.48", "0.81", "1.0"],
        "answer": "0.48",
        "explanation": "The ripple factor is a measure of the remaining AC component in the rectified DC output. It is about 0.48 for a full-wave rectifier and 1.21 for a half-wave rectifier."
    },
    {
        question": "A transistor is a:",
        "options": ["Voltage controlled device", "Current controlled device", "Power controlled device", "Resistance controlled device"],
        "answer": "Current controlled device",
        "explanation": "In a BJT, a small base current is used to control a much larger collector current."
    },
    {
        question": "The Boolean expression for a NAND gate is:",
        "options": ["Y = A + B", "Y = A ⋅ B", "Y = (A ⋅ B)'", "Y = (A + B)'"],
        "answer": "Y = (A ⋅ B)'",
        "explanation": "A NAND gate is an AND gate followed by a NOT gate, so its expression is the negation of the AND operation."
    },
    {
        question": "The reverse bias in a junction diode:",
        "options": ["Increases the potential barrier", "Decreases the potential barrier", "Increases the majority carrier current", "Decreases the minority carrier current"],
        "answer": "Increases the potential barrier",
        "explanation": "The applied reverse voltage adds to the built-in potential barrier, widening the depletion region and increasing the barrier height."
    },
    {
        question": "A solar cell works on the principle of:",
        "options": ["Photoelectric effect", "Photovoltaic effect", "Seebeck effect", "Peltier effect"],
        "answer": "Photovoltaic effect",
        "explanation": "The photovoltaic effect is the generation of a voltage and electric current in a material upon exposure to light. This is the principle behind solar cells."
    },
    {
        question": "In a common-emitter amplifier, the phase difference between the input and output voltage is:",
        "options": ["0°", "90°", "180°", "270°"],
        "answer": "180°",
        "explanation": "The common-emitter amplifier provides a 180° phase shift, meaning the output signal is an inverted version of the input signal."
    },
    {
        question": "The forbidden energy gap for Germanium is approximately:",
        "options": ["0.3 eV", "0.7 eV", "1.1 eV", "6 eV"],
        "answer": "0.7 eV",
        "explanation": "The band gap for Germanium (Ge) is about 0.72 eV, and for Silicon (Si) it is about 1.1 eV at room temperature."
    },
    {
        question": "The NOT gate is a circuit that:",
        "options": ["Has one input and one output", "Has two inputs and one output", "Inverts the input signal", "Both A and C"],
        "answer": "Both A and C",
        "explanation": "A NOT gate is an inverter with one input and one output. The output is the logical inverse of the input."
    },
    {
        question": "The process of converting AC into DC is called:",
        "options": ["Amplification", "Rectification", "Oscillation", "Modulation"],
        "answer": "Rectification",
        "explanation": "Rectification is the conversion of alternating current (AC) to direct current (DC)."
    },
    {
        question": "When a pentavalent impurity is added to a pure semiconductor, it becomes:",
        "options": ["An insulator", "An intrinsic semiconductor", "A p-type semiconductor", "An n-type semiconductor"],
        "answer": "An n-type semiconductor",
        "explanation": "Pentavalent impurities (like Phosphorus) have five valence electrons. Four form bonds, and the fifth becomes a free electron, creating an n-type semiconductor."
    },
    {
        question": "The 'knee voltage' of a silicon diode is approximately:",
        "options": ["0.3 V", "0.7 V", "1.1 V", "1.5 V"],
        "answer": "0.7 V",
        "explanation": "The knee voltage is the forward voltage at which the current through the diode starts to increase rapidly. It's about 0.7V for silicon and 0.3V for germanium."
    },
    {
        question": "Which of the following is the fastest switching device?",
        "options": ["JFET", "BJT", "MOSFET", "Diode"],
        "answer": "MOSFET",
        "explanation": "MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistor) generally have higher switching speeds compared to BJTs."
    },
    {
        question": "The base of a transistor is made very thin and lightly doped because:",
        "options": ["To reduce collector current", "To reduce base current", "To allow most charge carriers from emitter to pass to collector", "To increase the emitter current"],
        "answer": "To allow most charge carriers from emitter to pass to collector",
        "explanation": "A thin, lightly doped base ensures that very few charge carriers from the emitter recombine in the base, and most of them are swept into the collector, leading to a high current gain."
    },
    {
        question": "The output of a two-input AND gate is 0 when:",
        "options": ["Both inputs are 0", "Any one input is 0", "Both inputs are 1", "Inputs are different"],
        "answer": "Any one input is 0",
        "explanation": "The AND gate output is HIGH (1) only if ALL inputs are HIGH. If any input is LOW (0), the output will be LOW (0)."
    }
  ],
  assertionReasons: [
    {
        assertion: "The energy gap between the valence band and conduction band is greater in silicon than in germanium.",
        reason: "Silicon is preferred over germanium for making semiconductor devices.",
        answer": "B",
        "explanation": "Both statements are true. Si has a bandgap of ~1.1eV and Ge has ~0.7eV. Si is preferred because of its higher bandgap, which gives it better thermal stability and lower leakage currents. The reason is a consequence of the assertion, not the explanation for it."
    },
    {
        assertion: "A p-n junction diode is used as a rectifier.",
        reason": "It allows current to flow only in one direction (forward bias).",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The unidirectional current flow property is what allows a diode to convert AC to DC."
    },
    {
        assertion: "In a common-emitter transistor amplifier, the output is 180° out of phase with the input.",
        reason": "The base-emitter junction is forward biased, and the base-collector junction is reverse biased.",
        "answer": "B",
        "explanation": "Both statements are true. The reason describes the biasing condition for the active region of an amplifier, but it doesn't directly explain the phase inversion, which is due to how the currents and voltages are related in the CE configuration."
    },
    {
        assertion": "A Zener diode is used for voltage regulation.",
        "reason": "When reverse biased, the voltage across a Zener diode remains constant even if the current through it changes.",
        "answer": "A",
        "explanation": "The reason correctly describes the characteristic of a Zener diode in its breakdown region, which is the principle behind its use as a voltage regulator."
    },
    {
        assertion": "The base of a transistor is made very thin and lightly doped.",
        "reason": "This is to ensure that most of the charge carriers from the emitter pass on to the collector.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A thin, lightly doped base minimizes recombination, allowing a high percentage of emitter carriers to reach the collector, which is essential for high current gain."
    },
    {
        assertion": "NAND and NOR gates are called universal gates.",
        "reason": "All other logic gates like AND, OR, NOT can be created by using only NAND or only NOR gates.",
        "answer": "A",
        "explanation": "The reason correctly explains why these gates are called universal."
    },
    {
        assertion": "The depletion region of a p-n junction contains no mobile charge carriers.",
        "reason": "The electrons and holes diffuse across the junction and recombine.",
        "answer": "A",
        "explanation": "The reason correctly explains the formation of the depletion region. The diffusion and subsequent recombination of mobile carriers leave behind immobile ions."
    },
    {
        assertion": "The conductivity of an intrinsic semiconductor increases with temperature.",
        "reason": "An increase in temperature creates more electron-hole pairs.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Higher temperature provides more thermal energy to break covalent bonds, increasing the number of free charge carriers and thus conductivity."
    },
    {
        assertion": "The color of light emitted by an LED depends on its reverse bias voltage.",
        "reason": "The energy of the emitted photon is approximately equal to the band gap energy.",
        "answer": "D",
        "explanation": "Assertion is false. An LED works in forward bias, and the color depends on the band gap of the semiconductor material, not the voltage. The reason is a true statement."
    },
    {
        assertion": "A full-wave rectifier is more efficient than a half-wave rectifier.",
        "reason": "A full-wave rectifier utilizes both halves of the AC input cycle.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. By using both halves of the AC cycle, the full-wave rectifier produces a more continuous DC output with less ripple and higher average power."
    },
    {
        assertion": "A photodiode is operated in reverse bias.",
        reason": "The fractional change in minority carrier current is more easily measurable than the change in majority carrier current.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. In reverse bias, the dark current is very low, so the small change in current due to incident light (photocurrent) is easily detectable."
    },
    {
        assertion": "The current gain α is always less than 1.",
        reason": "The collector current is always slightly less than the emitter current.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. α = I_c / I_e. Since a small base current I_b exists (I_e = I_b + I_c), the collector current I_c is always slightly less than the emitter current I_e."
    },
    {
        assertion": "The output of an AND gate is 1 if and only if all inputs are 1.",
        reason": "An AND gate performs logical multiplication.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The result of logical multiplication is 1 only when all operands are 1."
    },
    {
        assertion": "In a transistor, the emitter is the most heavily doped region.",
        reason": "The emitter has to supply a large number of charge carriers.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The function of the emitter is to inject a large number of majority carriers into the base, so it is heavily doped."
    },
    {
        assertion": "The resistance of a forward-biased p-n junction is very low.",
        reason": "In forward bias, the depletion region becomes very thin.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A thin depletion region offers very little opposition to the flow of majority charge carriers across the junction."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) n-type semiconductor", "b) p-type semiconductor", "c) Intrinsic semiconductor", "d) Insulator"],
        column2": ["i) Trivalent impurity", "ii) Large energy gap", "iii) Pentavalent impurity", "iv) n_e = n_h"],
        answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1": ["a) Rectifier", "b) Amplifier", "c) Oscillator", "d) Voltage Regulator"],
        column2": ["i) Zener diode", "ii) Transistor", "iii) p-n junction diode", "iv) Transistor (with feedback)"],
        answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        column1": ["a) AND Gate", "b) OR Gate", "c) NOT Gate", "d) NAND Gate"],
        column2": ["i) Y = A'", "ii) Y = (A.B)'", "iii) Y = A + B", "iv) Y = A.B"],
        answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Forward Bias", "b) Reverse Bias", "c) Zener Breakdown", "d) No Bias"],
        column2": ["i) Depletion region widens", "ii) Potential barrier forms", "iii) Heavy doping", "iv) Depletion region narrows"],
        answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        column1": ["a) Transistor", "b) LED", "c) Solar Cell", "d) Photodiode"],
        column2": ["i) Converts light to electricity", "ii) Detects light signals", "iii) Amplifies signals", "iv) Converts electricity to light"],
        answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) Common Emitter gain (β)", "b) Common Base gain (α)", "c) Emitter current (I_e)", "d) Transconductance (g_m)"],
        column2": ["i) I_b + I_c", "ii) ΔI_c / ΔV_be", "iii) I_c / I_e", "iv) I_c / I_b"],
        answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) Depletion region", "b) Valence band", "c) Conduction band", "d) Forbidden gap"],
        column2": ["i) Contains free electrons", "ii) No charge carriers", "iii) Energy difference", "iv) Contains valence electrons"],
        answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        column1": ["a) Hole", "b) Electron", "c) Donor ion", "d) Acceptor ion"],
        column2": ["i) Negative charge", "ii) Positive charge (vacancy)", "iii) Negative immobile ion", "iv) Positive immobile ion"],
        answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        column1": ["a) Universal Gate", "b) Basic Gate", "c) Inverter", "d) Buffer"],
        column2": ["i) AND", "ii) Y = A", "iii) NOT", "iv) NOR"],
        answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        column1": ["a) Half-wave rectifier efficiency", "b) Full-wave rectifier efficiency", "c) Ripple factor (Half-wave)", "d) Ripple factor (Full-wave)"],
        column2": ["i) 81.2%", "ii) 0.48", "iii) 40.6%", "iv) 1.21"],
        answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1": ["a) Emitter", "b) Base", "c) Collector", "d) Depletion Layer"],
        column2": ["i) Largest area, moderate doping", "ii) Very thin, lightly doped", "iii) Heavily doped", "iv) Potential barrier"],
        answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        column1": ["a) Silicon (Si)", "b) Germanium (Ge)", "c) Copper (Cu)", "d) Glass"],
        column2": ["i) Conductor", "ii) Insulator", "iii) E_g ≈ 1.1 eV", "iv) E_g ≈ 0.7 eV"],
        answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1": ["a) A + A'", "b) A ⋅ A'", "c) A + 1", "d) A ⋅ 1"],
        column2": ["i) 1", "ii) A", "iii) 0", "iv) 1"],
        answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1": ["a) De Morgan's First Law", "b) De Morgan's Second Law", "c) Associative Law", "d) Distributive Law"],
        column2": ["i) A(B+C) = AB + AC", "ii) (A.B)' = A' + B'", "iii) A+(B+C) = (A+B)+C", "iv) (A+B)' = A'.B'"],
        answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1": ["a) Active region", "b) Saturation region", "c) Cut-off region", "d) Breakdown region"],
        column2": ["i) Transistor acts as closed switch", "ii) For amplification", "iii) Zener diode operation", "iv) Transistor acts as open switch"],
        answer": "a-ii, b-i, c-iv, d-iii"
    }
  ]
};
