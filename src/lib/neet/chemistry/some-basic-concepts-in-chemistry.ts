
import type { NeetModule } from '@/lib/types';

export const someBasicConceptsInChemistry: NeetModule = {
  id: 'chemistry-some-basic-concepts-in-chemistry',
  title: 'Some Basic Concepts in Chemistry',
  chapter: 'Some Basic Concepts in Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Matter and its nature (பருப்பொருள் மற்றும் அதன் தன்மை)
*   Chemistry deals with the composition, structure, properties, and interaction of matter. Matter is anything that has mass and occupies space.
*   **Dalton's atomic theory:** Proposed that matter consists of indivisible atoms. Key postulates include:
    *   All matter is made of atoms.
    *   Atoms of a given element are identical in mass and properties.
    *   Compounds are formed by a combination of two or more different kinds of atoms.
    *   A chemical reaction is a rearrangement of atoms.
*   **Concept of atom, molecule, element, and compound:**
    *   **Atom (அணு):** The smallest particle of an element.
    *   **Molecule (மூலக்கூறு):** The smallest particle of a substance that can exist independently.
    *   **Element (தனிமம்):** A pure substance containing only one kind of atom.
    *   **Compound (சேர்மம்):** A substance formed when two or more elements are chemically combined.

### 2. Laws of Chemical Combinations (வேதிச் சேர்க்கை விதிகள்)
*   **Law of Conservation of Mass (நிறை அழிவின்மை விதி):** Mass can neither be created nor destroyed in a chemical reaction.
*   **Law of Definite Proportions (மாறா விகித விதி):** A given compound always contains exactly the same proportion of elements by weight.
*   **Law of Multiple Proportions (மடங்கு விகித விதி):** If two elements can combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in the ratio of small whole numbers.
*   **Gay Lussac's Law of Gaseous Volumes:** When gases combine or are produced in a chemical reaction they do so in a simple ratio by volume provided all gases are at the same temperature and pressure.
*   **Avogadro's Law (அவகாட்ரோ விதி):** Equal volumes of all gases at the same temperature and pressure should contain an equal number of molecules.

### 3. Atomic and Molecular Masses (அணு மற்றும் மூலக்கூறு நிறைகள்)
*   **Atomic Mass:** The mass of an atom, usually expressed in atomic mass units (amu).
*   **Molecular Mass:** The sum of the atomic masses of the elements present in a molecule.

### 4. Mole Concept and Molar Masses (மோல் கருத்து மற்றும் மோலார் நிறைகள்)
*   **Mole (மோல்):** The amount of a substance that contains as many particles or entities as there are atoms in exactly 12 g of the C-12 isotope.
*   **Avogadro's Number (Nₐ):** 6.022 x 10²³ particles/mol.
*   **Molar Mass:** The mass of one mole of a substance in grams.

### 5. Percentage Composition, Empirical and Molecular Formulae
*   **Percentage Composition:** The percentage by mass of each element in a compound.
*   **Empirical Formula:** Represents the simplest whole-number ratio of various atoms present in a compound.
*   **Molecular Formula:** Shows the exact number of different types of atoms present in a molecule of a compound. (Molecular Formula = n × Empirical Formula).

### 6. Chemical Equations and Stoichiometry (வேதிச் சமன்பாடுகள் மற்றும் வினைக்கூறு விகிதம்)
*   **Stoichiometry:** Deals with the calculation of masses (or sometimes volumes) of the reactants and the products involved in a chemical reaction.
*   **Limiting Reagent (வரையறுக்கும் காரணி):** The reactant which gets consumed first in a reaction and limits the amount of product formed. (ஒரு பிரியாணி செய்யும்போது, முதலில் தீர்ந்து போகும் பொருள் எதுவோ, அது பிரியாணியின் அளவைத் தீர்மானிப்பது போல).
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
  mcqs: [
    {
        "question": "The number of moles of solute present in 1 kg of a solvent is called its",
        "options": [
            "Molarity",
            "Molality",
            "Normality",
            "Formality"
        ],
        "answer": "Molality",
        "explanation": "Molality is defined as the number of moles of solute dissolved in 1 kg of solvent."
    },
    {
        "question": "What is the molarity of a solution containing 10g of NaOH in 500mL of solution?",
        "options": [
            "0.25 M",
            "0.5 M",
            "1.0 M",
            "2.0 M"
        ],
        "answer": "0.5 M",
        "explanation": "Molar mass of NaOH = 40 g/mol. Moles of NaOH = 10g / 40 g/mol = 0.25 mol. Molarity = Moles / Volume (L) = 0.25 mol / 0.5 L = 0.5 M."
    },
    {
        "question": "Which of the following is independent of temperature?",
        "options": [
            "Molarity",
            "Molality",
            "Normality",
            "Formality"
        ],
        "answer": "Molality",
        "explanation": "Molality depends on the mass of the solvent, which does not change with temperature. Molarity depends on volume, which does change with temperature."
    },
    {
        "question": "The empirical formula of a compound is CH₂O and its molecular mass is 180. The molecular formula of the compound is:",
        "options": [
            "C₂H₄O₂",
            "C₆H₁₂O₆",
            "C₃H₆O₃",
            "C₄H₈O₄"
        ],
        "answer": "C₆H₁₂O₆",
        "explanation": "Empirical formula mass = 12+2+16 = 30. n = Molecular mass / Empirical formula mass = 180 / 30 = 6. Molecular formula = (CH₂O)₆ = C₆H₁₂O₆."
    },
    {
        "question": "How many significant figures are present in 0.0025?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "2",
        "explanation": "Leading zeros are not significant. Therefore, only 2 and 5 are significant figures."
    }
],
  assertionReasons: [
    {
        "assertion": "The molality of a solution is independent of temperature.",
        "reason": "Molality is defined in terms of mass of solvent, which is a temperature-independent quantity.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Molarity, which uses volume, is temperature-dependent."
    },
    {
        "assertion": "A balanced chemical equation has the same number of atoms of each element on both sides.",
        "reason": "This is based on the law of conservation of mass.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Mass conservation requires that atoms are not created or destroyed in a reaction."
    },
    {
        "assertion": "The empirical formula of glucose is CH₂O.",
        "reason": "The molecular formula of glucose is C₆H₁₂O₆.",
        "answer": "A",
        "explanation": "The empirical formula is the simplest whole-number ratio of atoms, which for C₆H₁₂O₆ is indeed CH₂O. The reason correctly states the molecular formula from which the empirical formula is derived."
    },
    {
        "assertion": "One mole of any substance contains 6.022 x 10²³ particles.",
        "reason": "This number is known as Dalton's number.",
        "answer": "C",
        "explanation": "The assertion is true, but the reason is false. This number is known as Avogadro's number, not Dalton's number."
    },
    {
        "assertion": "When 10g of CaCO₃ is decomposed, 4.4g of CO₂ is produced.",
        "reason": "The molar mass of CaCO₃ is 100 g/mol and CO₂ is 44 g/mol.",
        "answer": "A",
        "explanation": "The reaction is CaCO₃ → CaO + CO₂. 100g CaCO₃ gives 44g CO₂. So, 10g CaCO₃ gives 4.4g CO₂. The reason provides the correct molar masses needed for this stoichiometric calculation."
    }
],
  matchTheColumns: [
    {
        "column1": [ "a) Molarity", "b) Molality", "c) Mole fraction", "d) Mass percent" ],
        "column2": [ "i) Moles of solute / kg of solvent", "ii) (Mass of solute / Mass of solution) x 100", "iii) Moles of solute / L of solution", "iv) Moles of component / Total moles" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Law of Conservation of Mass", "b) Law of Definite Proportions", "c) Law of Multiple Proportions", "d) Avogadro's Law" ],
        "column2": [ "i) Proust", "ii) Dalton", "iii) Lavoisier", "iv) Avogadro" ],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": [ "a) C₆H₁₂O₆", "b) H₂O", "c) CH₄", "d) NH₃" ],
        "column2": [ "i) 17", "ii) 16", "iii) 18", "iv) 180" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": [ "a) 1 mole of O₂", "b) 1 mole of H₂O", "c) 1 mole of C", "d) 1 mole of NaCl" ],
        "column2": [ "i) 12 g", "ii) 58.5 g", "iii) 32 g", "iv) 18 g" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Limiting Reagent", "b) Excess Reagent", "c) Stoichiometry", "d) Empirical Formula" ],
        "column2": [ "i) Reactant left over", "ii) Simplest whole number ratio", "iii) Consumed completely", "iv) Calculation based on balanced equation" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    }
  ]
};
