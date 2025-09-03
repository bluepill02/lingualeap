
import type { NeetModule } from '@/lib/types';

export const currentElectricity: NeetModule = {
  metadata: {
    id: 'physics-current-electricity',
    title: 'Current Electricity (மின்னோட்டவியல்)',
    chapter: 'Unit 12: Current Electricity',
    subject: 'Physics',
    glossary: [
      { English: 'Electric Current', தமிழ்: 'மின்னோட்டம்' },
      { English: 'Resistance', தமிழ்: 'மின்தடை' },
      { English: 'EMF (Electromotive Force)', தமிழ்: 'மின்னியக்கு விசை' },
      { English: 'Kirchhoff\'s Laws', தமிழ்: 'கிர்க்காஃபின் விதிகள்' },
      { English: 'Wheatstone Bridge', தமிழ்: 'வீட்ஸ்டோன் சமனச் சுற்று' }
    ],
    learningObjectives: [
      "Define electric current, drift velocity, and resistivity, and apply Ohm's law to simple circuits.",
      "Analyze series and parallel combinations of resistors and cells.",
      "Apply Kirchhoff's junction and loop rules to solve complex circuits.",
      "Explain the working principles of the metre bridge and potentiometer and their applications."
    ],
    prerequisites: [
      "Understanding of electric charge, potential, and potential difference from Electrostatics.",
      "Basic algebraic manipulation of equations.",
      "Concept of conservation of energy and conservation of charge."
    ],
    conceptOverview: "From the bright lights of Chennai's T. Nagar shopping district to the electric trains connecting towns across Tamil Nadu, our modern life runs on moving charges. This chapter, **Current Electricity** (மின்னோட்டவியல்), shifts our focus from stationary charges to charges in motion. We will explore what defines a current, what opposes its flow (resistance), and the fundamental laws (Ohm's Law and Kirchhoff's Laws) that govern all electrical circuits. Understanding these principles is like learning the grammar of electronics, essential for everything that follows.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 2: 'Current Electricity'. This is a very high-yield chapter for NEET. Pay special attention to Kirchhoff's laws and potentiometer applications, as they are frequently tested.",
    studyTips: [
      {
        tip: "Always be careful with the sign conventions when applying Kirchhoff's loop rule. Decide on a loop direction (clockwise or anti-clockwise) and stick to it. A potential rise (e.g., from - to + in a battery) is positive, and a potential drop (e.g., across a resistor in the direction of current) is negative.",
        NEET_Hack: "For problems with complex resistor networks, always look for symmetry first. If the circuit is symmetric, points at the same potential can be joined together, simplifying the network significantly. The Wheatstone bridge is a special case of this."
      },
      {
        tip: "Differentiate clearly between EMF and Terminal Potential Difference. EMF (ε) is the total energy supplied by the cell, while Terminal Voltage (V) is what is available to the external circuit (V = ε - Ir).",
        NEET_Hack: "For finding equivalent resistance between two points in a cube or infinite ladder network, there are standard results. Memorizing the result for a cube of 12 identical resistors (e.g., 5R/6 across the body diagonal) can save a lot of time."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Current Electricity (இயற்பியல் - மின்னோட்டவியல்)

# 2. Learning Objectives
1.  After this, you will be able to define electric current, drift velocity, and resistivity, and apply Ohm's law to simple circuits.
2.  After this, you will be able to analyze series and parallel combinations of resistors and cells.
3.  After this, you will be able to apply Kirchhoff's junction and loop rules to solve complex circuits.
4.  After this, you will be able to explain the working principles of the metre bridge and potentiometer and their applications.

# 3. Prerequisites
– Understanding of electric charge, potential, and potential difference from Electrostatics.
– Basic algebraic manipulation of equations.
– Concept of conservation of energy and conservation of charge.

# 4. Concept Overview
From the bright lights of Chennai's T. Nagar shopping district to the electric trains connecting towns across Tamil Nadu, our modern life runs on moving charges. This chapter, **Current Electricity** (மின்னோட்டவியல்), shifts our focus from stationary charges to charges in motion. We will explore what defines a current, what opposes its flow (resistance), and the fundamental laws (Ohm's Law and Kirchhoff's Laws) that govern all electrical circuits. Understanding these principles is like learning the grammar of electronics, essential for everything that follows.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 2: 'Current Electricity'**.

### 5.1 Electric Current and Ohm's Law (மின்னோட்டம் மற்றும் ஓம் விதி)
*   **Electric Current (மின்னோட்டம்):** The rate of flow of electric charge through a conductor. It's a scalar quantity, although it has a direction. \\(I = \\frac{dQ}{dt}\\). The SI unit is Ampere (A).
*   **Drift Velocity (vₐ) (இழுப்புத் திசைவேகம்) and Mobility (μ):** Drift velocity is the average velocity attained by charged particles in a material due to an electric field. It's very slow. Mobility is the drift velocity per unit electric field.
*   **Ohm's Law (ஓம் விதி):** This fundamental law states that at a constant temperature, the current flowing through a conductor is directly proportional to the potential difference across its ends. \\(V \\propto I \\implies V = IR\\), where R is the resistance.
*   **V-I Characteristics:** For Ohmic conductors (like metals), the V-I graph is a straight line. for non-Ohmic devices (like semiconductors), it is a curve.
*   **Electrical Resistivity (ρ) (மின்தடை எண்) and Conductivity (σ):** Resistance \\(R = \\rho \\frac{L}{A}\\), where ρ is the resistivity, an intrinsic property of the material. Conductivity is the reciprocal of resistivity (\\(\\sigma = 1/\\rho\\)).
*   **Temperature Dependence of Resistance:** For conductors, resistance increases with temperature. For semiconductors, it decreases.

### 5.2 Combinations of Resistors and Cells
*   **Resistors in Series:** Resistors are connected end-to-end. The current is the same through each, and the equivalent resistance is the sum.
    \\[ R_{eq} = R_1 + R_2 + ... \\]
*   **Resistors in Parallel:** Both ends of the resistors are connected to common points. The voltage is the same across each, and the reciprocal of the equivalent resistance is the sum of the reciprocals.
    \\[ \\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ... \\]
*   **Internal Resistance (r), EMF (ε) and Potential Difference (V):** A real cell has an internal resistance. The EMF (Electromotive Force) is the maximum potential difference the cell can provide. The terminal potential difference (V) when a current I is drawn is \\(V = \\epsilon - Ir\\).
*   **Combination of Cells:** Cells can also be connected in series and parallel to obtain a desired voltage and current.

### 5.3 Kirchhoff’s Laws and Applications (கிர்க்காஃபின் விதிகள் மற்றும் பயன்பாடுகள்)
*   **Kirchhoff’s First Law (Junction Rule):** The algebraic sum of currents entering a junction is zero (ΣI = 0). This is based on the conservation of charge.
*   **Kirchhoff’s Second Law (Loop Rule):** The algebraic sum of the changes in potential around any closed loop involving resistors and cells is zero (ΣΔV = 0). This is based on the conservation of energy.
*   **Wheatstone Bridge (வீட்ஸ்டோன் சமனச் சுற்று):** A circuit used to measure an unknown resistance. When the bridge is balanced (no current through the galvanometer), the condition is \\(\\frac{P}{Q} = \\frac{R}{S}\\).
*   **Metre Bridge:** A practical application of the Wheatstone bridge. It consists of a 1-meter long wire, and the unknown resistance is found by finding the balancing point.

### 5.4 Electrical Energy and Power (மின்னழுத்த ஆற்றல் மற்றும் திறன்)
*   **Electrical Power (P):** The rate at which electrical energy is consumed in a circuit.
    \\[ P = VI = I^2R = \\frac{V^2}{R} \\]
    The SI unit is Watt (W).

# 6. Worked Examples

**1. Easy:** Three resistors of 2Ω, 4Ω, and 6Ω are connected in parallel. Find the equivalent resistance of the combination.
*   **Solution:**
    *   For resistors in parallel, \\(\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\).
    *   \\(\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6}\\). The common denominator is 12.
    *   \\(\\frac{1}{R_{eq}} = \\frac{6+3+2}{12} = \\frac{11}{12}\\).
    *   Therefore, \\(R_{eq} = \\frac{12}{11} \\Omega \\approx 1.09 \\Omega\\).

**2. Medium:** A wire of resistance 4Ω is stretched to twice its original length. Find the new resistance.
*   **Solution:**
    1.  Resistance \\(R = \\rho \\frac{L}{A}\\). The volume of the wire remains constant. Volume \\(V = AL\\). So, \\(A = V/L\\).
    2.  Substituting A, we get \\(R = \\rho \\frac{L^2}{V}\\). This shows \\(R \\propto L^2\\).
    3.  The new length \\(L' = 2L\\).
    4.  The new resistance \\(R' \\propto (L')^2 = (2L)^2 = 4L^2\\).
    5.  So, \\(R' = 4R = 4 \\times 4\\Omega = 16\\Omega\\).

**3. Must-Practice:** In a metre bridge, the balance point is found to be at 40 cm from end A, when the resistor Y in the right gap is 12.5 Ω. Determine the resistance of X in the left gap. What happens if the galvanometer and cell are interchanged?
*   **Solution:**
    *   A metre bridge works on the principle of a balanced Wheatstone bridge. Let the balance point be at length l₁ = 40 cm. Then l₂ = 100 - 40 = 60 cm.
    *   The condition is \\(\\frac{X}{Y} = \\frac{l_1}{l_2}\\).
    *   \\(\\frac{X}{12.5} = \\frac{40}{60} = \\frac{2}{3}\\).
    *   \\(X = \\frac{2}{3} \\times 12.5 = \\frac{25}{3} \\approx 8.33 \\Omega\\).
    *   If the galvanometer and cell are interchanged, the condition for a balanced Wheatstone bridge remains the same. Therefore, the balance point will **not change**.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( V = IR \\) | Ohm's Law (ஓம் விதி) |
| \\( R_{eq} = R_1 + R_2 \\) | Resistors in Series (தொடரிணைப்பு மின்தடை) |
| \\( \\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\) | Resistors in Parallel (பக்க இணைப்பு மின்தடை) |
| \\( \\frac{P}{Q} = \\frac{R}{S} \\) | Wheatstone Bridge Condition (வீட்ஸ்டோன் சமனச் சுற்று) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Kirchhoff's Junction Rule (சந்தி விதி)</text>
    <circle cx="150" cy="100" r="5" fill="black" />
    <line x1="50" y1="100" x2="145" y2="100" stroke="blue" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="95" y="95" font-size="12">I₁</text>
    <line x1="155" y1="100" x2="250" y2="100" stroke="red" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="205" y="95" font-size="12">I₂</text>
    <line x1="150" y1="105" x2="150" y2="180" stroke="red" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="160" y="145" font-size="12">I₃</text>
    <text x="150" y="195" font-size="12" text-anchor="middle">ΣI_in = ΣI_out  =>  I₁ = I₂ + I₃</text>
</svg>

\`\`\`
DIAGRAM: Kirchhoff's Junction Rule (சந்தி விதி)
Shows a junction point where multiple wires meet.
Current I₁ is shown entering the junction.
Currents I₂ and I₃ are shown leaving the junction.
The rule states that the total current entering must equal the total current leaving: I₁ = I₂ + I₃.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** கிர்க்காஃபின் விதிகளை நினைவில் கொள்ள: சந்திக்கு **வரும்** மின்னோட்டம் = சந்திப்பை விட்டு **செல்லும்** மின்னோட்டம் (Junction rule). ஒரு மூடிய சுற்றில் மின்னழுத்தங்களின் கூட்டுத்தொகை **சுழியம்** (பூஜ்யம்) (Loop rule). (Current **arriving** = Current **leaving**. Sum of voltages in a loop is **zero**.)

> **NEET Hack:** In problems with an infinite ladder of resistors, assume the equivalent resistance of the infinite part is 'X', add one more repeating section to it, and equate the new equivalent resistance back to 'X'. This creates a quadratic equation that is easy to solve.

[Download PDF Summary of Current Electricity](/downloads/current-electricity-summary.pdf)

# 9. Quiz Yourself
1.  Why are the connecting wires in a circuit made of thick copper?
2.  Can the terminal voltage of a cell be greater than its EMF? If so, under what condition?
3.  A potentiometer is often called an "ideal voltmeter." Why?

> **Student Tip (மாணவர் கருத்து):** கிர்க்காஃபின் லூப் விதியைப் பயன்படுத்தும்போது குறியீட்டு மரபில் (+/-) உங்களுக்கு குழப்பம் ஏற்படுகிறதா? எந்த திசையில் செல்ல வேண்டும், எப்போது கூட்ட வேண்டும், எப்போது கழிக்க வேண்டும்? உங்கள் சந்தேகங்களை விவாதியுங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Magnetic Effects of Current and Magnetism (மின்னோட்டத்தின் காந்த விளைவுகள் மற்றும் காந்தவியல்). We will see how moving charges (currents) create magnetic fields, leading to the unification of electricity and magnetism.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** In a house, are the electrical appliances connected in series or in parallel? What would happen if they were connected the other way? Discuss the practical reasons on our forum.
`
  
}
