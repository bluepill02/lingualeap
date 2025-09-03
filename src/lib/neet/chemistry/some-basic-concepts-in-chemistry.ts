
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
    },
    {
        "question": "The law of multiple proportions was proposed by:",
        "options": [
            "Lavoisier",
            "Proust",
            "Dalton",
            "Gay Lussac"
        ],
        "answer": "Dalton",
        "explanation": "John Dalton proposed the law of multiple proportions in the early 19th century."
    },
    {
        "question": "The total number of atoms in 1 mole of a substance is equal to:",
        "options": [
            "Atomic mass",
            "Molar mass",
            "Avogadro's number",
            "Gas constant"
        ],
        "answer": "Avogadro's number",
        "explanation": "One mole of any substance contains Avogadro's number (6.022 x 10²³) of particles."
    },
    {
        "question": "Which of the following has the maximum number of atoms?",
        "options": [
            "1g of Mg (At. mass 24)",
            "1g of O₂ (At. mass 16)",
            "1g of Li (At. mass 7)",
            "1g of Ag (At. mass 108)"
        ],
        "answer": "1g of Li (At. mass 7)",
        "explanation": "Number of atoms = (mass / molar mass) * Nₐ. Since the mass is the same (1g), the substance with the lowest molar mass will have the maximum number of atoms."
    },
    {
        "question": "The reactant that is entirely consumed when a reaction goes to completion is known as:",
        "options": [
            "Excess reagent",
            "Limiting reagent",
            "Catalyst",
            "Product"
        ],
        "answer": "Limiting reagent",
        "explanation": "The limiting reagent determines the amount of product formed because it is completely used up in the reaction."
    },
    {
        "question": "The volume of one mole of a gas at STP is:",
        "options": [
            "22.4 L",
            "1 L",
            "10 L",
            "2.24 L"
        ],
        "answer": "22.4 L",
        "explanation": "At Standard Temperature and Pressure (STP), one mole of any ideal gas occupies a volume of 22.4 litres."
    },
    {
        "question": "The percentage composition of carbon in CO₂ is:",
        "options": [
            "27.27%",
            "72.73%",
            "25%",
            "75%"
        ],
        "answer": "27.27%",
        "explanation": "Molar mass of CO₂ = 44 g/mol. Mass of C = 12 g/mol. %C = (12/44) * 100 = 27.27%."
    },
    {
        "question": "Avogadro's law relates volume of a gas to:",
        "options": [
            "Pressure",
            "Temperature",
            "Number of moles",
            "Mass"
        ],
        "answer": "Number of moles",
        "explanation": "Avogadro's law states that V ∝ n (at constant T and P)."
    },
    {
        "question": "The number of atoms in 4.25 g of NH₃ is approximately:",
        "options": [
            "1 x 10²³",
            "2 x 10²³",
            "4 x 10²³",
            "6 x 10²³"
        ],
        "answer": "6 x 10²³",
        "explanation": "Molar mass of NH₃ = 17 g/mol. Moles = 4.25/17 = 0.25 mol. No. of molecules = 0.25 * Nₐ. No. of atoms = 4 * 0.25 * Nₐ = 1 * Nₐ = 6.022 x 10²³."
    },
    {
        "question": "Which of the following is not a mixture?",
        "options": [
            "Air",
            "Milk",
            "Distilled water",
            "Soil"
        ],
        "answer": "Distilled water",
        "explanation": "Distilled water is a pure compound (H₂O). Air, milk, and soil are mixtures."
    },
    {
        "question": "According to the law of definite proportions, water obtained from different sources will always contain hydrogen and oxygen in the ratio of:",
        "options": [
            "1:8 by mass",
            "8:1 by mass",
            "1:2 by volume",
            "2:1 by volume"
        ],
        "answer": "1:8 by mass",
        "explanation": "In H₂O, the mass ratio of H:O is 2:16, which simplifies to 1:8."
    },
    {
        "question": "What is the mass of 0.5 mole of O₂ gas?",
        "options": [
            "8 g",
            "16 g",
            "32 g",
            "64 g"
        ],
        "answer": "16 g",
        "explanation": "Molar mass of O₂ = 32 g/mol. Mass = moles * molar mass = 0.5 * 32 = 16 g."
    },
    {
        "question": "The S.I. unit of amount of substance is:",
        "options": [
            "Gram",
            "Kilogram",
            "Mole",
            "Litre"
        ],
        "answer": "Mole",
        "explanation": "Mole is the SI unit for the amount of a substance."
    },
    {
        "question": "The number 234,000 can be written in scientific notation as:",
        "options": [
            "2.34 x 10³",
            "2.34 x 10⁴",
            "2.34 x 10⁵",
            "2.34 x 10⁶"
        ],
        "answer": "2.34 x 10⁵",
        "explanation": "Scientific notation expresses a number as a product of a number between 1 and 10 and a power of 10."
    },
    {
        "question": "What is the mole fraction of the solute in a 1.00 m aqueous solution?",
        "options": [
            "0.0177",
            "0.177",
            "1.77",
            "0.00177"
        ],
        "answer": "0.0177",
        "explanation": "1.00 m solution means 1 mole of solute in 1000 g (1 kg) of water. Moles of water = 1000g / 18 g/mol = 55.55 mol. Mole fraction of solute = 1 / (1 + 55.55) = 1 / 56.55 ≈ 0.0177."
    },
    {
        "question": "A balanced chemical equation is based on:",
        "options": [
            "Law of definite proportions",
            "Law of multiple proportions",
            "Law of conservation of mass",
            "Gay Lussac's law"
        ],
        "answer": "Law of conservation of mass",
        "explanation": "Balancing ensures that the number of atoms of each element is the same on both sides, conserving mass."
    },
    {
        "question": "Which of the following terms is used to define the mass of 1/12th of the mass of a carbon-12 atom?",
        "options": [
            "Atomic mass unit",
            "Molar mass",
            "Gram molecular mass",
            "Equivalent mass"
        ],
        "answer": "Atomic mass unit",
        "explanation": "An atomic mass unit (amu) is defined as 1/12th the mass of a C-12 atom."
    },
    {
        "question": "What is the number of atoms in one molecule of Sulphuric acid (H₂SO₄)?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7",
        "explanation": "The formula H₂SO₄ indicates 2 Hydrogen atoms, 1 Sulphur atom, and 4 Oxygen atoms, for a total of 2+1+4 = 7 atoms."
    },
    {
        "question": "The prefix 'pico' stands for:",
        "options": [
            "10⁻⁹",
            "10⁻¹²",
            "10⁻¹⁵",
            "10⁻⁶"
        ],
        "answer": "10⁻¹²",
        "explanation": "The SI prefix 'pico' represents a factor of 10⁻¹²."
    },
    {
        "question": "If 10 L of H₂ gas reacts with 5 L of O₂ gas, how many litres of water vapour would be produced?",
        "options": [
            "5 L",
            "10 L",
            "15 L",
            "20 L"
        ],
        "answer": "10 L",
        "explanation": "The reaction is 2H₂(g) + O₂(g) → 2H₂O(g). According to Gay Lussac's Law, 2 volumes of H₂ react with 1 volume of O₂ to produce 2 volumes of H₂O. Here, 10L H₂ reacts with 5L O₂ to produce 10L H₂O."
    },
    {
        "question": "The molar mass of a substance is the mass of:",
        "options": [
            "One atom",
            "One molecule",
            "One mole of the substance",
            "One gram of the substance"
        ],
        "answer": "One mole of the substance",
        "explanation": "Molar mass is defined as the mass (in grams) of one mole of a substance."
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
    },
    {
        "assertion": "The limiting reagent determines the amount of product formed in a reaction.",
        "reason": "The limiting reagent is the reactant that is present in the smallest amount by mass.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. The limiting reagent is the reactant that is completely consumed first, determined by stoichiometric mole ratios, not necessarily the smallest mass."
    },
    {
        "assertion": "Combustion of 16 g of CH₄ gives 18 g of water.",
        "reason": "In the combustion of methane, water is one of the products.",
        "answer": "D",
        "explanation": "The assertion is false. CH₄ + 2O₂ → CO₂ + 2H₂O. 16g (1 mole) of CH₄ produces 2 moles of H₂O, which is 36g. The reason is true."
    },
    {
        "assertion": "The mole fraction of a component in a solution is always less than 1.",
        "reason": "Mole fraction is the ratio of moles of one component to the total moles of all components.",
        "answer": "A",
        "explanation": "The reason correctly defines mole fraction, which mathematically ensures that its value will always be less than 1 for a component in a mixture."
    },
    {
        "assertion": "The number 0.0050 has two significant figures.",
        "reason": "Zeros to the left of the first non-zero digit are not significant.",
        "answer": "A",
        "explanation": "The reason correctly states the rule. The trailing zero is significant because it is to the right of the decimal point and a non-zero digit."
    },
    {
        "assertion": "Equal volumes of all gases under the same conditions of temperature and pressure contain an equal number of molecules.",
        "reason": "This is stated by Gay Lussac's Law.",
        "answer": "C",
        "explanation": "The assertion is true, but it is a statement of Avogadro's Law, not Gay Lussac's Law. Gay Lussac's law deals with the ratio of volumes of reacting gases."
    },
    {
        "assertion": "The molecular weight of SO₂ is double that of O₂.",
        "reason": "One mole of SO₂ contains double the number of atoms present in one mole of O₂.",
        "answer": "C",
        "explanation": "The assertion is true (SO₂≈64, O₂=32). The reason is false. One mole of SO₂ contains 3 * Nₐ atoms, while one mole of O₂ contains 2 * Nₐ atoms."
    },
    {
        "assertion": "Stoichiometry is the calculation of the masses of reactants and products.",
        "reason": "The coefficients in a balanced chemical equation represent the molar ratio of reactants and products.",
        "answer": "A",
        "explanation": "The molar ratio given by the coefficients (reason) is the fundamental basis for performing stoichiometric calculations (assertion)."
    },
    {
        "assertion": "The sum of the mole fractions of all components in a solution is equal to one.",
        "reason": "The mole fraction is a dimensionless quantity.",
        "answer": "B",
        "explanation": "Both statements are true, but the reason (being dimensionless) does not explain why the sum must be one. The sum is one by definition."
    },
    {
        "assertion": "Atomic mass is a relative mass.",
        "reason": "It is expressed as the mass relative to 1/12th the mass of a C-12 atom.",
        "answer": "A",
        "explanation": "The reason provides the correct definition for the relative scale of atomic mass, explaining why it is a relative quantity."
    },
    {
        "assertion": "22.4 L of N₂ at STP and 22.4 L of O₂ at STP contain equal number of molecules.",
        "reason": "The volume of one mole of any gas at STP is 22.4 L.",
        "answer": "A",
        "explanation": "The reason correctly states the molar volume at STP. Since both volumes correspond to 1 mole, they contain an equal number of molecules (Avogadro's number)."
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
    },
    {
        "column1": [ "a) 10³", "b) 10⁻³", "c) 10⁶", "d) 10⁻⁶" ],
        "column2": [ "i) Micro", "ii) Kilo", "iii) Milli", "iv) Mega" ],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": [ "a) H₂ + Cl₂ → 2HCl", "b) CaCO₃ → CaO + CO₂", "c) N₂ + 3H₂ → 2NH₃", "d) 2Mg + O₂ → 2MgO" ],
        "column2": [ "i) Decomposition", "ii) Synthesis", "iii) Combination", "iv) Haber's Process" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Precision", "b) Accuracy", "c) Systematic Error", "d) Random Error" ],
        "column2": [ "i) Error in one direction", "ii) Closeness to true value", "iii) Closeness of various measurements", "iv) Irregular error" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Number of atoms in 12g of C-12", "b) Mass of 1 mole of a substance", "c) Amount of substance", "d) Volume of 1 mole gas at STP" ],
        "column2": [ "i) Molar Mass", "ii) 22.4 L", "iii) Mole", "iv) Avogadro's Number" ],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": [ "a) 12.011", "b) 1.008", "c) 16.00", "d) 14.007" ],
        "column2": [ "i) Oxygen", "ii) Hydrogen", "iii) Carbon", "iv) Nitrogen" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Grams to Moles", "b) Moles to Atoms", "c) Grams to Atoms", "d) Moles of A to Moles of B" ],
        "column2": [ "i) Use Avogadro's Number", "ii) Use Molar Mass", "iii) Use Mole Ratio from balanced equation", "iv) Use Molar Mass then Avogadro's Number" ],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": [ "a) Pressure", "b) Temperature", "c) Volume", "d) Mass" ],
        "column2": [ "i) Kilogram", "ii) Litre", "iii) Kelvin", "iv) Pascal" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": [ "a) CH", "b) CH₂O", "c) P₂O₅", "d) NaCl" ],
        "column2": [ "i) Formaldehyde", "ii) Sodium Chloride", "iii) Benzene", "iv) Phosphorus Pentoxide" ],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": [ "a) Mole", "b) Molecule", "c) Atom", "d) Ion" ],
        "column2": [ "i) Smallest particle of an element", "ii) Charged particle", "iii) Smallest particle of a compound", "iv) 6.022 x 10²³ particles" ],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": [ "a) 2 significant figures", "b) 3 significant figures", "c) 4 significant figures", "d) 5 significant figures" ],
        "column2": [ "i) 2.030", "ii) 1.66 x 10⁻²⁴", "iii) 0.020", "iv) 6.0220" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    }
]
};

    