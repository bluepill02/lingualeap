
import type { NeetModule } from '@/lib/types';

export const organicCompoundsContainingOxygen: NeetModule = {
  id: 'chemistry-organic-compounds-containing-oxygen',
  title: 'Organic Compounds Containing Oxygen',
  chapter: 'Organic Compounds Containing Oxygen',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Alcohols, Phenols, and Ethers (ஆல்கஹால்கள், பீனால்கள் மற்றும் ஈதர்கள்)
*   **General methods of preparation, properties, reactions, and uses.**
*   **Alcohols (ஆல்கஹால்கள்):**
    *   **Identification of primary, secondary, and tertiary alcohols:** Lucas Test is a key method.
    *   **Mechanism of dehydration:** Formation of alkenes from alcohols.
*   **Phenols (பீனால்கள்):**
    *   **Acidic nature:** Phenols are acidic due to the stability of the phenoxide ion.
    *   **Electrophilic substitution reactions:** Halogenation, nitration, and sulphonation.
    *   **Reimer-Tiemann reaction:** A key named reaction for ortho-formylation of phenols.
*   **Ethers (ஈதர்கள்):** Structure and basic properties.

### 2. Aldehydes and Ketones (ஆல்டிஹைடுகள் மற்றும் கீட்டோன்கள்)
*   **Nature of carbonyl group (>C=O):** Polar nature.
*   **Nucleophilic addition to >C=O group:** The characteristic reaction.
*   **Relative reactivities of aldehydes and ketones:** Aldehydes are generally more reactive than ketones towards nucleophilic addition.
*   **Important reactions:**
    *   Nucleophilic addition reactions (addition of HCN, NH₃ and its derivatives), Grignard reagent.
    *   **Oxidation:** Aldehydes are easily oxidized.
    *   **Reduction:** Reduction to alcohols (e.g., using NaBH₄) and to hydrocarbons (**Wolf Kishner and Clemmensen** reductions).
    *   **Acidity of α-hydrogen:** The α-hydrogen is acidic.
    *   **Aldol condensation:** A key reaction for aldehydes/ketones with α-hydrogen.
    *   **Cannizzaro reaction:** A key reaction for aldehydes without α-hydrogen.
    *   **Haloform reaction:** A test for methyl ketones.
*   **Chemical tests to distinguish between aldehydes and Ketones:** Tollen's test, Fehling's test.

### 3. Carboxylic Acids (கார்பாக்சிலிக் அமிலங்கள்)
*   **Acidic strength and factors affecting it:** The presence of electron-withdrawing groups increases acidity, while electron-donating groups decrease it.
`,
  workedExamples: [
    {
        problem: "An organic compound with the formula C₄H₁₀O gives a positive Lucas test immediately. Identify the compound.",
        solution: "A positive Lucas test immediately indicates the presence of a tertiary alcohol. The only tertiary alcohol with the formula C₄H₁₀O is **2-Methylpropan-2-ol**, (CH₃)₃COH."
    },
    {
        problem: "How would you distinguish between propanal (CH₃CH₂CHO) and propanone (CH₃COCH₃)?",
        solution: "You can use Tollen's test or Fehling's test. **Tollen's Test:** Warm the compound with Tollen's reagent (ammoniacal silver nitrate solution). Propanal (an aldehyde) will give a silver mirror. Propanone (a ketone) will not react. **Fehling's Test:** Warm the compound with Fehling's solution. Propanal will give a red-brown precipitate of Cu₂O. Propanone will not react."
    },
    {
        problem: "Explain why phenol is more acidic than ethanol.",
        solution: "The acidity is determined by the stability of the conjugate base formed after losing a proton. When phenol loses a proton, it forms the phenoxide ion (C₆H₅O⁻). This ion is highly stabilized by resonance, as the negative charge is delocalized over the benzene ring. When ethanol loses a proton, it forms the ethoxide ion (C₂H₅O⁻). There is no resonance stabilization for the ethoxide ion; in fact, the ethyl group is electron-donating, which destabilizes the negative charge. Due to the greater stability of the phenoxide ion, phenol is a stronger acid than ethanol."
    }
  ],
  mcqs: [
    {
        "question": "Which reagent is used in the Lucas test to distinguish between primary, secondary, and tertiary alcohols?",
        "options": ["`Conc. HCl + anhydrous ZnCl₂`", "`Ammoniacal AgNO₃`", "`Fehling's solution A + B`", "`Br₂ water`"],
        "answer": "`Conc. HCl + anhydrous ZnCl₂`",
        "explanation": "Lucas reagent is a solution of anhydrous zinc chloride in concentrated hydrochloric acid. It is used to differentiate alcohols based on the rate of formation of a cloudy alkyl chloride."
    },
    {
        "question": "The reaction of phenol with chloroform in the presence of aqueous alkali is known as:",
        "options": ["Kolbe's reaction", "Reimer-Tiemann reaction", "Aldol condensation", "Cannizzaro reaction"],
        "answer": "Reimer-Tiemann reaction",
        "explanation": "The Reimer-Tiemann reaction introduces a `-CHO` group (formyl group) onto the ortho position of the phenol ring."
    },
    {
        "question": "Which of the following compounds will give a positive Tollen's test?",
        "options": ["Acetone", "Benzophenone", "Ethanal", "Ethanol"],
        "answer": "Ethanal",
        "explanation": "Tollen's test (silver mirror test) is a characteristic test for aldehydes. Ethanal is an aldehyde."
    },
    {
        "question": "The Cannizzaro reaction is NOT given by:",
        "options": ["Formaldehyde", "Benzaldehyde", "Acetaldehyde", "Furfural"],
        "answer": "Acetaldehyde",
        "explanation": "The Cannizzaro reaction is a disproportionation reaction given by aldehydes that do not have an α-hydrogen atom. Acetaldehyde (`CH₃CHO`) has α-hydrogens."
    },
    {
        "question": "Which of the following is the most acidic?",
        "options": ["Phenol", "Ethanol", "Acetic acid", "Water"],
        "answer": "Acetic acid",
        "explanation": "Carboxylic acids (like acetic acid) are significantly more acidic than phenols and alcohols because the resulting carboxylate ion is stabilized by resonance between two equivalent structures."
    }
],
  assertionReasons: [
    {
        "assertion": "Phenol is more acidic than ethanol.",
        "reason": "The phenoxide ion is stabilized by resonance.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The delocalization of the negative charge over the benzene ring makes the phenoxide ion very stable, thus facilitating the release of the proton from phenol."
    },
    {
        "assertion": "Aldehydes are more reactive than ketones towards nucleophilic addition.",
        "reason": "Aldehydes have less steric hindrance and the carbonyl carbon is more electrophilic compared to ketones.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Ketones have two bulky alkyl groups which hinder the attack of the nucleophile, whereas aldehydes have only one. Also, the two alkyl groups in ketones reduce the positive charge on the carbonyl carbon."
    },
    {
        "assertion": "Formaldehyde undergoes Cannizzaro reaction.",
        "reason": "Formaldehyde does not have any α-hydrogen atoms.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The absence of α-hydrogen is the necessary condition for an aldehyde to undergo the Cannizzaro reaction."
    },
    {
        "assertion": "The boiling points of alcohols are higher than those of corresponding alkanes.",
        "reason": "Alcohols can form intermolecular hydrogen bonds.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The presence of strong intermolecular hydrogen bonds in alcohols requires more energy to overcome, leading to higher boiling points compared to non-polar alkanes."
    },
    {
        "assertion": "Benzoic acid is a stronger acid than acetic acid.",
        "reason": "The phenyl group is electron-withdrawing.",
        "answer": "D",
        "explanation": "The assertion is false. Acetic acid is slightly stronger than benzoic acid. The reason is also not entirely correct; the phenyl group has a -I effect but a +R effect, the overall effect is complex and doesn't lead to higher acidity than acetic acid where the methyl group is weakly donating."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Lucas test", "b) Tollen's test", "c) Reimer-Tiemann reaction", "d) Aldol condensation"],
        "column2": ["i) Aldehyde vs Ketone", "ii) Aldehyde with α-H", "iii) 1°, 2°, 3° Alcohols", "iv) Phenol → Salicylaldehyde"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Williamson synthesis", "b) Kolbe's reaction", "c) Clemmensen reduction", "d) Cannizzaro reaction"],
        "column2": ["i) Aldehyde → Hydrocarbon", "ii) Preparation of ethers", "iii) Phenol → Salicylic acid", "iv) Aldehyde without α-H"],
        "answer": "a-ii, b-iii, c-i, d-iv"
    },
    {
        "column1": ["a) Ethanol", "b) Phenol", "c) Benzaldehyde", "d) Acetic acid"],
        "column2": ["i) Carboxylic acid", "ii) Aldehyde", "iii) Alcohol", "iv) Aromatic alcohol"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Primary alcohol oxidation (strong)", "b) Primary alcohol oxidation (mild)", "c) Secondary alcohol oxidation", "d) Tertiary alcohol oxidation"],
        "column2": ["i) Ketone", "ii) No reaction under normal conditions", "iii) Aldehyde", "iv) Carboxylic acid"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Grignard reagent + Formaldehyde", "b) Grignard reagent + Aldehyde", "c) Grignard reagent + Ketone", "d) Grignard reagent + CO₂"],
        "column2": ["i) Tertiary alcohol", "ii) Carboxylic acid", "iii) Primary alcohol", "iv) Secondary alcohol"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};
