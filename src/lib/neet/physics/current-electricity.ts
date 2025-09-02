
import type { NeetModule } from '@/lib/types';

export const currentElectricity: NeetModule = {
  id: 'physics-current-electricity',
  title: 'Current Electricity',
  chapter: 'Current Electricity',
  subject: 'Physics',
  conceptNotes: `
### 1. Electric Current (மின்னோட்டம்)
*   The rate of flow of electric charge. I = Q/t. Unit: Ampere (A).
*   **Ohm's Law (ஓம் விதி):** At constant temperature, the current flowing through a conductor is directly proportional to the potential difference across its ends. V = IR, where R is resistance.

### 2. Resistance (மின்தடை)
*   The opposition to the flow of current. R = ρ(L/A), where ρ is resistivity, L is length, and A is the area of cross-section.
*   **Series Combination:** R_eq = R₁ + R₂ + ...
*   **Parallel Combination:** 1/R_eq = 1/R₁ + 1/R₂ + ...

### 3. Electrical Energy and Power (மின் ஆற்றல் மற்றும் திறன்)
*   **Power (P):** The rate at which electrical energy is consumed. P = VI = I²R = V²/R. Unit: Watt (W).
*   **Energy (E):** E = P × t.

### 4. Kirchhoff's Laws (கிர்க்காஃப் விதிகள்)
*   **Kirchhoff's First Law (Junction Rule):** The algebraic sum of currents entering a junction is zero. (Based on conservation of charge). (ஒரு சந்திப்பில் வரும் மின்னோட்டங்களின் கூட்டுத்தொகை பூஜ்ஜியம்).
*   **Kirchhoff's Second Law (Loop Rule):** The algebraic sum of changes in potential around any closed loop is zero. (Based on conservation of energy).

### 5. Electrical Instruments (மின் கருவிகள்)
*   **Wheatstone Bridge (வீட்ஸ்டோன் சமனச் சுற்று):** Used to measure an unknown resistance. The bridge is balanced when P/Q = R/S.
*   **Metre Bridge:** An application of the Wheatstone bridge.
*   **Potentiometer (மின்னழுத்தமானி):** A device used to measure the potential difference or compare the e.m.f. of two cells accurately. Its principle is that the potential drop across any portion of the wire is directly proportional to the length of that portion.

### 6. Cells, EMF, and Internal Resistance (மின்கலன்கள், மின்னியக்கு விசை மற்றும் அக மின்தடை)
*   **EMF (ε):** The potential difference of a source when no current is drawn from it.
*   **Internal Resistance (r):** The resistance offered by the electrolyte and electrodes of a cell.
*   The terminal voltage V = ε - Ir.
`,
  workedExamples: [
    {
        problem: "Three resistors of 2Ω, 4Ω, and 6Ω are connected in parallel. Find the equivalent resistance of the combination.",
        solution: "For resistors in parallel, 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃. 1/R_eq = 1/2 + 1/4 + 1/6. The common denominator is 12. 1/R_eq = (6+3+2)/12 = 11/12. Therefore, R_eq = 12/11 Ω ≈ 1.09 Ω."
    },
    {
        problem: "A wire of resistance R is cut into five equal parts. These parts are then connected in parallel. What is the equivalent resistance of this combination?",
        solution: "Let the resistance of the wire be R. When cut into five equal parts, the resistance of each part becomes R/5. When these five parts are connected in parallel, the equivalent resistance R' is given by: 1/R' = 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) + 1/(R/5) = 5/(R/5) + 5/(R/5) + 5/(R/5) + 5/(R/5) + 5/(R/5) = 5 * (5/R) = 25/R. So, R' = R/25. The new resistance is 1/25th of the original resistance."
    },
    {
        problem: "In a metre bridge, the balance point is found to be at 40 cm from the end A, when the resistor Y is of 12.5 Ω. Determine the resistance of X.",
        solution: "A metre bridge works on the principle of a balanced Wheatstone bridge. Let the balance point be at length l₁ from end A. Then l₁ = 40 cm, and l₂ = 100 - 40 = 60 cm. According to the principle, X/Y = l₁/l₂. X / 12.5 = 40 / 60 = 2/3. X = (2/3) * 12.5 = 25/3 ≈ 8.33 Ω."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
