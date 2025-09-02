
import type { NeetModule } from '@/lib/types';

export const redoxReactionsAndElectrochemistry: NeetModule = {
  id: 'chemistry-redox-reactions-and-electrochemistry',
  title: 'Redox Reactions and Electrochemistry',
  chapter: 'Redox Reactions and Electrochemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Redox Reactions (ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள்)
*   Reactions involving both oxidation (loss of electrons, increase in oxidation state) and reduction (gain of electrons, decrease in oxidation state).
*   **Oxidizing Agent:** A substance that oxidizes another substance and gets reduced itself.
*   **Reducing Agent:** A substance that reduces another substance and gets oxidized itself.
*   **Balancing Redox Reactions:** Ion-electron method (half-reaction method) and oxidation number method.

### 2. Electrochemical Cells (மின்வேதியியல் கலன்கள்)
*   Devices that convert chemical energy into electrical energy or vice versa.
*   **Galvanic Cell (கால்வானிக் கலம்) / Voltaic Cell:** Converts chemical energy into electrical energy through a spontaneous redox reaction (e.g., Daniell cell).
    *   **Anode:** Oxidation occurs (negative electrode).
    *   **Cathode:** Reduction occurs (positive electrode).
    *   **Salt Bridge:** Maintains electrical neutrality.
*   **Electrolytic Cell (மின்னார் பகுப்புக் கலம்):** Uses electrical energy to drive a non-spontaneous redox reaction.

### 3. Standard Electrode Potential (திட்ட மின்முனை அழுத்தம்)
*   The potential difference developed between the metal electrode and the electrolyte of unit concentration (1M) at 298 K.
*   **Standard Hydrogen Electrode (SHE):** Reference electrode with a standard potential of 0.00 V.
*   **Electrochemical Series:** Arrangement of electrodes in order of their increasing standard reduction potentials.

### 4. Nernst Equation (நெர்ன்ஸ்ட் சமன்பாடு)
*   Relates the electrode potential to the concentration of the species. E = E° - (RT/nF)lnQ.
*   At 298 K, E = E° - (0.0591/n)logQ.

### 5. Conductance in Electrolytic Solutions (மின்பகுளிக் கரைசல்களில் கடத்துத்திறன்)
*   **Conductivity (κ):** The conductance of a solution of 1 cm length with an area of cross-section of 1 cm².
*   **Molar Conductivity (Λm):** The conductivity of a solution containing one mole of electrolyte. Λm = κ / C.
*   **Kohlrausch's Law:** The limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte.

### 6. Batteries and Corrosion (மின்கலன்கள் மற்றும் அரித்தல்)
*   **Batteries:** Primary (non-rechargeable, e.g., Leclanche cell) and Secondary (rechargeable, e.g., Lead storage battery).
*   **Corrosion (அரித்தல்):** The process of deterioration of metals as a result of their reaction with air or water (e.g., rusting of iron).
`,
  workedExamples: [
    {
        problem: "Calculate the standard cell potential (E°cell) for the Daniell cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). Given E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V.",
        solution: "The standard cell potential is calculated as E°cell = E°(cathode) - E°(anode). In the Daniell cell, copper is the cathode (reduction) and zinc is the anode (oxidation). E°cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 V - (-0.76 V) = 1.10 V."
    },
    {
        problem: "What is the oxidation number of Cr in K₂Cr₂O₇?",
        solution: "Let the oxidation number of Cr be x. The oxidation number of K is +1 and O is -2. The overall charge of the compound is 0. So, 2(+1) + 2(x) + 7(-2) = 0. 2 + 2x - 14 = 0. 2x - 12 = 0. 2x = 12. x = +6. The oxidation number of Cr is +6."
    },
    {
        problem: "A solution of CuSO₄ is electrolyzed for 10 minutes with a current of 1.5 amperes. What is the mass of copper deposited at the cathode? (Atomic mass of Cu = 63.5 g/mol)",
        solution: "According to Faraday's first law of electrolysis, the mass deposited (m) is proportional to the charge passed (Q). Q = I × t = 1.5 A × (10 × 60 s) = 900 C. The reaction at the cathode is Cu²⁺ + 2e⁻ → Cu. This means 2 Faradays (2 × 96500 C) of charge are required to deposit 1 mole (63.5 g) of copper. Mass deposited = (Q / (n × F)) × Molar mass = (900 / (2 × 96500)) × 63.5 ≈ 0.296 g."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
