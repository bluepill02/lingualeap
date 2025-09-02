
import type { NeetModule } from '@/lib/types';

export const redoxReactionsAndElectrochemistry: NeetModule = {
  id: 'chemistry-redox-reactions-and-electrochemistry',
  title: 'Redox Reactions and Electrochemistry',
  chapter: 'Redox Reactions and Electrochemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Redox Reactions (ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள்)
*   **Electronic concepts of oxidation and reduction:** Oxidation is the loss of electrons, and reduction is the gain of electrons (OIL RIG - Oxidation Is Loss, Reduction Is Gain).
*   **Oxidation Number (ஆக்ஸிஜனேற்ற எண்):** A number assigned to an element in a compound that represents the number of electrons lost or gained. There are specific rules for assigning oxidation numbers.
*   **Balancing Redox Reactions:** Two methods are used:
    *   **Ion-Electron Method (Half-Reaction Method):** The overall reaction is split into two half-reactions (oxidation and reduction), which are balanced separately and then added.
    *   **Oxidation Number Method:** The change in oxidation numbers is used to balance the number of electrons lost and gained.

### 2. Electrochemistry (மின்வேதியியல்)
*   **Electrolytic and metallic conduction:** Conduction of electricity by the movement of ions (electrolytic) or electrons (metallic).
*   **Conductance in electrolytic solutions:**
    *   **Molar Conductivity (Λm):** The conductivity of a solution containing one mole of electrolyte. Λm = κ / C. It increases with dilution.
    *   **Kohlrausch's Law (கோல்ராஷ் விதி):** The limiting molar conductivity of an electrolyte (at infinite dilution) can be represented as the sum of the individual contributions of the anion and cation of the electrolyte. Λ°m = ν⁺λ°⁺ + ν⁻λ°⁻.
*   **Electrochemical Cells:** Devices that convert chemical energy into electrical energy or vice versa.
    *   **Galvanic Cell (கால்வானிக் கலம்) / Voltaic Cell:** Converts chemical energy from a spontaneous redox reaction into electrical energy (e.g., Daniell cell). Anode is negative, Cathode is positive.
    *   **Electrolytic Cell (மின்னார் பகுப்புக் கலம்):** Uses electrical energy to drive a non-spontaneous redox reaction. Anode is positive, Cathode is negative.
*   **Electrode Potentials:**
    *   **Standard Electrode Potential (E°):** The potential of an electrode determined relative to the Standard Hydrogen Electrode (SHE) under standard conditions (1 M concentration, 1 atm pressure, 298 K).
    *   **EMF of a Galvanic Cell:** E°cell = E°(cathode) - E°(anode).
*   **Nernst Equation (நெர்ன்ஸ்ட் சமன்பாடு):** Relates the electrode potential to the concentration of the species and temperature. E = E° - (RT/nF)lnQ.
*   **Relationship between Cell Potential and Gibbs Energy:** ΔG° = -nFE°cell.
*   **Batteries:**
    *   **Dry Cell:** A primary (non-rechargeable) cell.
    *   **Lead Accumulator:** A secondary (rechargeable) cell used in automobiles.
*   **Fuel Cells (எரிபொருள் கலன்கள்):** Galvanic cells that convert the energy of combustion of fuels like hydrogen directly into electrical energy.
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


    