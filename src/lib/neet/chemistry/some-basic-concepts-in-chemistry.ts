
import type { NeetModule } from '@/lib/types';

export const someBasicConceptsInChemistry: NeetModule = {
  id: 'chemistry-some-basic-concepts-in-chemistry',
  title: 'Some Basic Concepts in Chemistry',
  chapter: 'Some Basic Concepts in Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Importance of Chemistry (வேதியியலின் முக்கியத்துவம்)
*   Chemistry deals with the composition, structure, properties, and interaction of matter. It plays a central role in science and is often intertwined with other branches of science.

### 2. Laws of Chemical Combinations (வேதிச் சேர்க்கை விதிகள்)
*   **Law of Conservation of Mass (நிறை அழிவின்மை விதி):** Mass can neither be created nor destroyed in a chemical reaction.
*   **Law of Definite Proportions (மாறா விகித விதி):** A given compound always contains exactly the same proportion of elements by weight.
*   **Law of Multiple Proportions (மடங்கு விகித விதி):** If two elements can combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in the ratio of small whole numbers.
*   **Gay Lussac's Law of Gaseous Volumes:** When gases combine or are produced in a chemical reaction they do so in a simple ratio by volume provided all gases are at the same temperature and pressure.
*   **Avogadro's Law (அவகாட்ரோ விதி):** Equal volumes of all gases at the same temperature and pressure should contain an equal number of molecules.

### 3. Mole Concept and Molar Masses (மோல் கருத்து மற்றும் மோலார் நிறைகள்)
*   **Mole (மோல்):** The amount of a substance that contains as many particles or entities as there are atoms in exactly 12 g of the C-12 isotope.
*   **Avogadro's Number (Nₐ):** 6.022 x 10²³ particles/mol.
*   **Molar Mass:** The mass of one mole of a substance in grams.

### 4. Stoichiometry and Stoichiometric Calculations (வினைக்கூறு விகிதம்)
*   Stoichiometry deals with the calculation of masses (or sometimes volumes) of the reactants and the products involved in a chemical reaction.
*   **Limiting Reagent (வரையறுக்கும் காரணி):** The reactant which gets consumed first in a reaction and limits the amount of product formed. (ஒரு பிரியாணி செய்யும்போது, முதலில் தீர்ந்து போகும் பொருள் எதுவோ, அது பிரியாணியின் அளவைத் தீர்மானிப்பது போல).

### 5. Concentration Terms (செறிவு அலகுகள்)
*   Mass percent, Mole fraction, Molarity, and Molality.
`,
  workedExamples: [
    {
        problem: "Calculate the mass of CO₂ that could be obtained by heating 20 g of pure limestone (CaCO₃).",
        solution: "The reaction is CaCO₃(s) → CaO(s) + CO₂(g). Molar mass of CaCO₃ = 40+12+3(16) = 100 g/mol. Molar mass of CO₂ = 12+2(16) = 44 g/mol. According to the equation, 100 g of CaCO₃ produces 44 g of CO₂. Therefore, 20 g of CaCO₃ will produce (44/100) * 20 = 8.8 g of CO₂."
    },
    {
        problem: "50 kg of N₂(g) and 10 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent.",
        solution: "The balanced equation is N₂(g) + 3H₂(g) → 2NH₃(g). Moles of N₂ = 50000 g / 28 g/mol ≈ 1786 mol. Moles of H₂ = 10000 g / 2 g/mol = 5000 mol. According to the stoichiometry, 1 mole of N₂ requires 3 moles of H₂. So, 1786 moles of N₂ would require 1786 * 3 = 5358 moles of H₂. However, we only have 5000 moles of H₂. Therefore, **H₂ is the limiting reagent**."
    },
    {
        problem: "Calculate the molarity of a solution of ethanol in water in which the mole fraction of ethanol is 0.040. (Assume the density of water is 1 g/mL).",
        solution: "Let nₑ be moles of ethanol and nₙ be moles of water. Mole fraction of ethanol, xₑ = nₑ / (nₑ + nₙ) = 0.040. This means nₑ = 0.040 and (nₑ + nₙ) = 1 (assuming 1 mole total for ratio). So, nₙ = 1 - 0.040 = 0.96 mol. Mass of water = 0.96 mol * 18 g/mol = 17.28 g. Volume of water (solution, since solute is small) ≈ 17.28 mL = 0.01728 L. Molarity = Moles of ethanol / Volume of solution in L = 0.040 mol / 0.01728 L ≈ 2.31 M."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
