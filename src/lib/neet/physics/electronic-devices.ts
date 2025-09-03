
import type { NeetModule } from '@/lib/types';

export const electronicDevices: NeetModule = {
  metadata: {
    id: 'physics-electronic-devices',
    title: 'Electronic Devices (மின்னணு சாதனங்கள்)',
    chapter: 'Unit 19: Electronic Devices',
    subject: 'Physics',
    glossary: [
      { English: 'Semiconductor', தமிழ்: 'குறைக்கடத்தி' },
      { English: 'Doping', தமிழ்: 'மாசூட்டுதல்' },
      { English: 'p-n Junction', தமிழ்: 'p-n சந்தி' },
      { English: 'Rectification', தமிழ்: 'திருத்துதல்' },
      { English: 'Logic Gate', தமிழ்: 'தர்க்க வாயில்' }
    ],
    learningObjectives: [
      "Differentiate between conductors, insulators, and semiconductors using energy band diagrams.",
      "Explain the working of a p-n junction diode under forward and reverse bias.",
      "Analyze the function of a diode as a half-wave and full-wave rectifier.",
      "Understand the basic operation of special purpose diodes like Zener diodes and photodiodes.",
      "Construct truth tables for basic and universal logic gates (AND, OR, NOT, NAND, NOR)."
    ],
    prerequisites: [
      "Basic understanding of electric current and voltage.",
      "Knowledge of energy levels in atoms.",
      "Familiarity with the concept of electric fields."
    ],
    conceptOverview: "The mobile phone in your hand, the computer you use, the giant LED screens at the M. A. Chidambaram Stadium (சேப்பாக்கம் மைதானம்) in Chennai—all these modern marvels are built on the principles of **Electronic Devices** (மின்னணு சாதனங்கள்). This chapter is the foundation of the digital world. We will explore **semiconductors** (குறைக்கடத்திகள்), materials whose conductivity can be precisely controlled. We will learn how joining two types of semiconductors creates the most important electronic component, the **p-n junction diode**, which allows current to flow in only one direction, and how this property leads to rectifiers and logic gates, the brains of all digital computers.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 2, Chapter 10 ('Electronics and Communication'). For NEET, the most frequently tested topics are the working of p-n junctions, rectifiers, and logic gates. Understanding the I-V characteristics of different diodes is essential.",
    studyTips: [
      {
        tip: "Energy band diagrams are key to understanding the difference between conductors, semiconductors, and insulators. Visually memorize the positions of the valence band, conduction band, and the forbidden energy gap for each.",
        NEET_Hack: "Logic gate questions are like free marks if you practice. Memorize the truth tables and Boolean expressions for all five basic gates. Remember that NAND and NOR are universal gates, meaning any other gate can be constructed from them."
      },
      {
        tip: "For a p-n junction, remember: 'Forward bias, pushes carriers towards junction, narrows depletion layer, low resistance.' 'Reverse bias, pulls carriers away, widens depletion layer, high resistance.'",
        NEET_Hack: "In a full-wave rectifier, the output frequency is double the input AC frequency. In a half-wave rectifier, the output frequency is the same as the input frequency. This is a very common point of confusion and a frequent question."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Electronic Devices (இயற்பியல் - மின்னணு சாதனங்கள்)

# 2. Learning Objectives
1.  After this, you will be able to differentiate between conductors, insulators, and semiconductors using energy band diagrams.
2.  After this, you will be able to explain the working of a p-n junction diode under forward and reverse bias.
3.  After this, you will be able to analyze the function of a diode as a half-wave and full-wave rectifier.
4.  After this, you will be able to understand the basic operation of special purpose diodes like Zener diodes and photodiodes.
5.  After this, you will be able to construct truth tables for basic and universal logic gates (AND, OR, NOT, NAND, NOR).

# 3. Prerequisites
– Basic understanding of electric current and voltage.
– Knowledge of energy levels in atoms.
– Familiarity with the concept of electric fields.

# 4. Concept Overview
The mobile phone in your hand, the computer you use, the giant LED screens at the M. A. Chidambaram Stadium (சேப்பாக்கம் மைதானம்) in Chennai—all these modern marvels are built on the principles of **Electronic Devices** (மின்னணு சாதனங்கள்). This chapter is the foundation of the digital world. We will explore **semiconductors** (குறைக்கடத்திகள்), materials whose conductivity can be precisely controlled. We will learn how joining two types of semiconductors creates the most important electronic component, the **p-n junction diode**, which allows current to flow in only one direction, and how this property leads to rectifiers and logic gates, the brains of all digital computers.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 2, Chapter 10 ('Electronics and Communication')**.

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

# 6. Worked Examples

**1. Easy:** The output of a 2-input NOR gate is 1. What are the inputs?
*   **Solution:**
    *   A NOR gate is an OR gate followed by a NOT gate.
    *   For the NOR output to be 1, the output of the imaginary OR gate in front of it must be 0.
    *   The output of an OR gate is 0 only when both of its inputs are 0.
    *   Therefore, both inputs A and B must be **0**.

**2. Medium:** A Zener diode with a breakdown voltage of 6 V is used as a voltage regulator. The load current is to be 4 mA and the unregulated input is 10 V. What should be the value of the series resistor R_s so that the current through the Zener diode is 5 times the load current?
*   **Solution:**
    1.  The voltage across the load is regulated at the Zener voltage, \\(V_Z = 6 \\text{ V}\\).
    2.  The voltage drop across the series resistor is \\(V_S = V_{in} - V_Z = 10 \\text{ V} - 6 \\text{ V} = 4 \\text{ V}\\).
    3.  Given load current \\(I_L = 4 \\text{ mA}\\). Zener current \\(I_Z = 5 \\times I_L = 5 \\times 4 \\text{ mA} = 20 \\text{ mA}\\).
    4.  The total current from the source flows through the resistor R_s: \\(I_{total} = I_L + I_Z = 4 \\text{ mA} + 20 \\text{ mA} = 24 \\text{ mA}\\).
    5.  Using Ohm's law for R_s: \\(R_s = \\frac{V_S}{I_{total}} = \\frac{4 \\text{ V}}{24 \\times 10^{-3} \\text{ A}} = \\frac{1}{6 \\times 10^{-3}} \\Omega \\approx 167 \\Omega\\).

**3. Must-Practice:** For a transistor, the current amplification factor α = 0.96. If the emitter current is 10 mA, what is the base current?
*   **Solution:**
    1.  The common base current gain is \\(\\alpha = \\frac{I_C}{I_E}\\). Collector current \\(I_C = \\alpha \\times I_E = 0.96 \\times 10 \\text{ mA} = 9.6 \\text{ mA}\\).
    2.  The emitter current is the sum of the base and collector currents: \\(I_E = I_B + I_C\\).
    3.  Base current \\(I_B = I_E - I_C = 10 \\text{ mA} - 9.6 \\text{ mA} = 0.4 \\text{ mA}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( I_E = I_B + I_C \\) | Transistor Current Relation (டிரான்சிஸ்டர் மின்னோட்டத் தொடர்பு) |
| \\( \\beta = \\frac{\\alpha}{1-\\alpha} \\) | Relation between current gains (மின்னோட்ட பெருக்கிகளின் தொடர்பு) |
| \\( V_{out} = -A_v V_{in} \\) | Amplifier Relation (பெருக்கித் தொடர்பு) |
| \\( Y = \\overline{A \\cdot B} \\) | Boolean Expression for NAND gate (NAND வாயிலின் சமன்பாடு) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">p-n Junction Diode (p-n சந்தி டையோடு)</text>
    <rect x="50" y="80" width="100" height="40" style="fill:lightblue;stroke:black" />
    <text x="100" y="105" font-size="12" text-anchor="middle">p-type</text>
    <rect x="150" y="80" width="100" height="40" style="fill:lightcoral;stroke:black" />
    <text x="200" y="105" font-size="12" text-anchor="middle">n-type</text>
    <rect x="140" y="80" width="20" height="40" style="fill:lightyellow;stroke:black" />
    <text x="150" y="135" font-size="10" text-anchor="middle">Depletion Region (வறண்ட பகுதி)</text>
    <line x1="50" y1="100" x2="30" y2="100" stroke="black" stroke-width="2"/>
    <text x="15" y="105">Anode (+)</text>
    <line x1="250" y1="100" x2="270" y2="100" stroke="black" stroke-width="2"/>
    <text x="275" y="105">Cathode (-)</text>
</svg>

\`\`\`
DIAGRAM: p-n Junction Diode (p-n சந்தி டையோடு)
Shows a p-type semiconductor joined to an n-type semiconductor.
The region where they meet is the depletion region (வறண்ட பகுதி), which is devoid of mobile charge carriers.
The p-side is the anode, and the n-side is the cathode.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** லாஜிக் கேட்ஸ் (Logic gates): AND என்றால் பெருக்கல் (multiplication), OR என்றால் கூட்டல் (addition). NAND/NOR என்றால் அதன் எதிர்மறை (inverse). (AND is like multiplication, OR is like addition. NAND/NOR is the inverse of that.)

> **NEET Hack:** For logic gate combination problems, don't try to solve the whole circuit at once. Work step-by-step from the inputs, writing the output of each gate as you go, until you reach the final output. Using a truth table for intermediate steps is very reliable.

[Download PDF Summary of Electronic Devices](/downloads/electronic-devices-summary.pdf)

# 9. Quiz Yourself
1.  Why is a p-n junction diode often called a "valve"?
2.  What is the main difference in the working principle of a photodiode and a solar cell, even though both use light?
3.  Why is the base of a transistor made very thin and lightly doped?

> **Student Tip (மாணவர் கருத்து):** டிரான்சிஸ்டர் பெருக்கி (transistor amplifier) மற்றும் அலைஇயற்றி (oscillator) சுற்றுகள் உங்களுக்கு கடினமாக உள்ளதா? ஒவ்வொரு பாகத்தின் (resistor, capacitor) பங்களிப்பையும் தனித்தனியாகப் புரிந்துகொள்ள முயற்சி செய்யுங்கள்.

# 10. Next Steps & Community Discussion
– **Next Module:** Experimental Skills (சோதனைத் திறன்கள்). We will review the principles behind the key experiments from our entire physics syllabus, focusing on sources of error and data analysis.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** We know NAND is a universal gate. Can you prove it by constructing an OR gate using only NAND gates? Share your circuit diagram on our forum.
`
  
}
