
import type { NeetModule } from '@/lib/types';

export const electronicDevices: NeetModule = {
  id: 'physics-electronic-devices',
  title: 'Electronic Devices (மின்னணு சாதனங்கள்)',
  chapter: 'Unit 19: Electronic Devices',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Semiconductors and Diodes
*   **Energy bands in solids (ஆற்றல் பட்டைகள்):** In solids, atomic energy levels split into bands. The highest filled band is the **Valence Band**, and the next empty band is the **Conduction Band**. The gap between them is the **Forbidden Energy Gap (E_g)**.
    *   **Conductors:** Valence and conduction bands overlap (E_g ≈ 0).
    *   **Insulators:** Large energy gap (E_g > 3 eV).
    *   **Semiconductors:** Small energy gap (E_g < 3 eV).
*   **Semiconductors (குறைக்கடத்திகள்):**
    *   **Intrinsic:** Pure semiconductors like Silicon (Si) and Germanium (Ge).
    *   **Extrinsic:** Doped semiconductors. Doping is the process of adding impurities to increase conductivity.
        *   **n-type:** Doped with pentavalent impurities (e.g., Phosphorus). Majority carriers are electrons.
        *   **p-type:** Doped with trivalent impurities (e.g., Boron). Majority carriers are holes.
*   **p-n Junction:** Formed when a p-type and n-type semiconductor are joined. A **depletion region** (where there are no mobile charge carriers) forms at the junction, creating a potential barrier.
*   **Semiconductor Diode:** A p-n junction. It allows current to flow easily in one direction.
    *   **Forward Bias (முன்னோக்குச் சார்பு):** The p-side is connected to the positive terminal and the n-side to the negative. The potential barrier is reduced, and a large current flows.
    *   **Reverse Bias (பின்னோக்குச் சார்பு):** The p-side is connected to the negative terminal and the n-side to the positive. The potential barrier is increased, and only a very small leakage current flows.
    *   **I-V Characteristics:** The graph of current versus voltage for a diode, showing the different behaviors in forward and reverse bias.
*   **Diode as a Rectifier (திருத்தி):** The property of a diode to conduct in only one direction is used to convert AC into DC. A single diode gives half-wave rectification, while a configuration of two or four diodes gives full-wave rectification.

### 5.2 Special Purpose Diodes and Logic Gates
*   **Special purpose p-n junction diodes:**
    *   **LED (Light Emitting Diode):** A heavily doped p-n junction which emits light when forward biased due to the recombination of electrons and holes.
    *   **Photodiode:** A p-n junction operated in reverse bias that detects light. When light falls on it, electron-hole pairs are created, increasing the reverse current.
    *   **Solar Cell:** A p-n junction that generates an EMF when illuminated. It converts solar energy into electrical energy.
    *   **Zener Diode:** A heavily doped p-n junction designed to operate in the reverse breakdown region. It is used as a **voltage regulator** because the voltage across it remains constant in the breakdown region.
*   **Logic Gates (தர்க்க வாயில்கள்):** These are the basic building blocks of digital circuits.
    *   **OR Gate:** Output is HIGH (1) if any input is HIGH.
    *   **AND Gate:** Output is HIGH (1) only if all inputs are HIGH.
    *   **NOT Gate (Inverter):** Output is the opposite of the input.
    *   **NAND Gate:** An AND gate followed by a NOT gate. It is a **universal gate**.
    *   **NOR Gate:** An OR gate followed by a NOT gate. It is also a **universal gate**.
`,
  workedExamples: [
    {
        problem: "The output of a 2-input NOR gate is 1. What are the inputs?",
        solution: "A NOR gate is an OR gate followed by a NOT gate. For the NOR output to be 1, the output of the imaginary OR gate in front of it must be 0. The output of an OR gate is 0 only when both of its inputs are 0. Therefore, both inputs A and B must be **0**."
    },
    {
        problem: "A Zener diode with a breakdown voltage of 6 V is used as a voltage regulator. The load current is to be 4 mA and the unregulated input is 10 V. What should be the value of the series resistor R_s so that the current through the Zener diode is 5 times the load current?",
        solution: "1.  The voltage across the load is regulated at the Zener voltage, \\(V_Z = 6 \\text{ V}\\). 2.  The voltage drop across the series resistor is \\(V_S = V_{in} - V_Z = 10 \\text{ V} - 6 \\text{ V} = 4 \\text{ V}\\). 3.  Given load current \\(I_L = 4 \\text{ mA}\\). Zener current \\(I_Z = 5 \\times I_L = 5 \\times 4 \\text{ mA} = 20 \\text{ mA}\\). 4.  The total current from the source flows through the resistor R_s: \\(I_{total} = I_L + I_Z = 4 \\text{ mA} + 20 \\text{ mA} = 24 \\text{ mA}\\). 5.  Using Ohm's law for R_s: \\(R_s = \\frac{V_S}{I_{total}} = \\frac{4 \\text{ V}}{24 \\times 10^{-3} \\text{ A}} = \\frac{1}{6 \\times 10^{-3}} \\Omega \\approx 167 \\Omega\\)."
    },
    {
        problem: "For a transistor, the current amplification factor α = 0.96. If the emitter current is 10 mA, what is the base current?",
        solution: "1.  The common base current gain is \\(\\alpha = \\frac{I_C}{I_E}\\). Collector current \\(I_C = \\alpha \\times I_E = 0.96 \\times 10 \\text{ mA} = 9.6 \\text{ mA}\\). 2.  The emitter current is the sum of the base and collector currents: \\(I_E = I_B + I_C\\). 3.  Base current \\(I_B = I_E - I_C = 10 \\text{ mA} - 9.6 \\text{ mA} = 0.4 \\text{ mA}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
