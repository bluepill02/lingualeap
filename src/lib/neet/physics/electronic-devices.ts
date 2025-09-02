
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
