
import type { NeetModule } from '@/lib/types';

export const someBasicPrinciplesOfOrganicChemistry: NeetModule = {
  id: 'chemistry-some-basic-principles-of-organic-chemistry',
  title: 'Some Basic Principles of Organic Chemistry',
  chapter: 'Some Basic Principles of Organic Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Introduction (பொது அறிமுகம்)
*   **Tetravalency of Carbon (கார்பனின் நான்கு இணைதிறன்):** Carbon can form four covalent bonds.
*   **Shapes of simple molecules - hybridization (s and p):** sp³ (tetrahedral), sp² (trigonal planar), sp (linear).
*   **Classification of organic compounds based on functional groups:** and those containing halogens, oxygen, nitrogen, and sulphur.
*   **Homologous series:** A series of compounds with the same functional group and similar chemical properties.
*   **Isomerism (மாற்றியம்):** Structural and stereoisomerism.

### 2. Nomenclature (பெயரிடுதல்)
*   **Trivial (common) and IUPAC nomenclature:** Systematic method of naming organic compounds.

### 3. Covalent Bond Fission (சகப் பிணைப்பு பிளவு)
*   **Homolytic Fission:** Leads to the formation of free radicals (தனி உறுப்புகள்).
*   **Heterolytic Fission:** Leads to the formation of carbocations (கார்பன் நேர் அயனிகள்) and carbanions (கார்பன் எதிர் அயனிகள்).
*   **Stability of carbocations and free radicals:** 3° > 2° > 1°.
*   **Electrophiles and Nucleophiles:** Electron-seeking and nucleus-seeking species.

### 4. Electronic Displacement in a Covalent Bond (சகப் பிணைப்புகளில் எலக்ட்ரான் இடப்பெயர்ச்சி)
*   **Inductive Effect (தூண்டல் விளைவு):** Permanent displacement of sigma (σ) electrons.
*   **Electromeric Effect:** Temporary, complete transfer of a shared pair of π-electrons in the presence of an attacking reagent.
*   **Resonance (உடனிசைவு விளைவு):** Delocalization (பரவுதல்) of pi (π) electrons.
*   **Hyperconjugation (மிகையான உடனிணைப்பு):** Delocalization of sigma (σ) electrons of a C-H bond.

### 5. Common Types of Organic Reactions (கரிம வினைகளின் வகைகள்)
*   **Substitution (பதிலீட்டு வினை):** An atom or group is replaced by another.
*   **Addition (சேர்க்கை வினை):** Atoms are added across a double or triple bond.
*   **Elimination (நீக்க வினை):** Atoms are removed to form a double or triple bond.
*   **Rearrangement (மறுசீரமைப்பு வினை):** Migration of an atom or group within a molecule.
`,
  workedExamples: [
    {
        problem: "Draw the bond-line structures and give the IUPAC names for the isomers of the alkane with molecular formula C₅H₁₂.",
        solution: "The alkane C₅H₁₂ has three structural isomers (chain isomers):\n1.  **n-Pentane:** A straight chain of 5 carbons. IUPAC name: **Pentane**. Bond-line structure is a simple zigzag line with 5 carbon points.\n2.  **Isopentane:** A branched chain with a methyl group on the second carbon. IUPAC name: **2-Methylbutane**. Bond-line structure is a 'Y' shape attached to another line segment.\n3.  **Neopentane:** A central carbon bonded to four other carbon atoms. IUPAC name: **2,2-Dimethylpropane**. Bond-line structure is a cross or plus sign."
    },
    {
        problem: "Explain the order of stability of the following carbocations: (CH₃)₃C⁺, CH₃CH₂⁺, (CH₃)₂CH⁺, CH₃⁺.",
        solution: "The stability of carbocations is determined by the inductive effect and hyperconjugation. Alkyl groups are electron-donating (+I effect) and can also stabilize the positive charge through hyperconjugation.\n- **(CH₃)₃C⁺ (tertiary carbocation):** Has three methyl groups, providing maximum +I effect and 9 hyperconjugative structures.\n- **(CH₃)₂CH⁺ (secondary carbocation):** Has two methyl groups, providing moderate +I effect and 6 hyperconjugative structures.\n- **CH₃CH₂⁺ (primary carbocation):** Has one methyl group, providing a small +I effect and 3 hyperconjugative structures.\n- **CH₃⁺ (methyl carbocation):** Has no alkyl groups for stabilization.\nTherefore, the order of stability is: **(CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺**."
    },
    {
        problem: "Identify the type of electronic displacement effect operating in chloroacetic acid (Cl-CH₂-COOH) that increases its acidic strength compared to acetic acid (CH₃-COOH).",
        solution: "The effect operating is the **Inductive Effect (-I effect)**. The chlorine atom is more electronegative than carbon. It pulls the electron density of the C-Cl bond towards itself. This electron-withdrawing effect is transmitted along the carbon chain to the O-H bond of the carboxyl group. This withdrawal of electrons weakens the O-H bond, making it easier to release the proton (H⁺). Therefore, chloroacetic acid is a stronger acid than acetic acid, where the methyl group (-CH₃) has a weak electron-donating (+I) effect that slightly destabilizes the carboxylate anion."
    }
  ],
  mcqs: [
      {
        "question": "The hybridization of carbon atoms in an ethyne molecule is:",
        "options": [ "sp³", "sp²", "sp", "sp³d" ],
        "answer": "sp",
        "explanation": "In ethyne (C₂H₂), the two carbon atoms are linked by a triple bond, which involves sp hybridization."
    },
    {
        "question": "Which of the following is an electrophile?",
        "options": [ "NH₃", "H₂O", "NO₂⁺", "CN⁻" ],
        "answer": "NO₂⁺",
        "explanation": "An electrophile is an electron-deficient species that accepts an electron pair. The nitronium ion (NO₂⁺) is positively charged and electron-deficient."
    },
    {
        "question": "The most stable carbocation among the following is:",
        "options": [ "(CH₃)₃C⁺", "(CH₃)₂CH⁺", "CH₃CH₂⁺", "CH₃⁺" ],
        "answer": "(CH₃)₃C⁺",
        "explanation": "The stability of carbocations follows the order: Tertiary > Secondary > Primary > Methyl, due to inductive effect and hyperconjugation."
    },
    {
        "question": "Homolytic fission of a covalent bond leads to the formation of:",
        "options": [ "Carbocations", "Carbanions", "Free radicals", "Electrophiles" ],
        "answer": "Free radicals",
        "explanation": "Homolytic fission involves the equal sharing of the bonding electrons, resulting in species with unpaired electrons, known as free radicals."
    },
    {
        "question": "The IUPAC name of the compound CH₃-CH(OH)-CH₃ is:",
        "options": [ "Propan-1-ol", "Propan-2-ol", "Ethanol", "Propanal" ],
        "answer": "Propan-2-ol",
        "explanation": "The principal functional group is -OH on the second carbon of a three-carbon chain (propane)."
    }
],
  assertionReasons: [
    {
        "assertion": "A tertiary carbocation is more stable than a secondary carbocation.",
        "reason": "The stability of carbocations is increased by both inductive effect and hyperconjugation.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A tertiary carbocation has more alkyl groups, leading to a greater stabilizing +I effect and more hyperconjugative structures."
    },
    {
        "assertion": "Benzene undergoes electrophilic substitution reactions.",
        "reason": "Benzene has a high electron density due to the delocalized π-electron cloud.",
        "answer": "A",
        "explanation": "The electron-rich nature of the benzene ring makes it susceptible to attack by electron-deficient electrophiles. The reason correctly explains the assertion."
    },
    {
        "assertion": "All isomers have the same molecular formula.",
        "reason": "Isomers have different physical and chemical properties.",
        "answer": "B",
        "explanation": "Both statements are true definitions related to isomers, but the difference in properties (reason) is a consequence of their different structures, not the explanation for having the same molecular formula."
    },
    {
        "assertion": "The inductive effect is a permanent effect.",
        "reason": "It is caused by the delocalization of π-electrons.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; the inductive effect is caused by the displacement of σ-electrons, not π-electrons."
    },
    {
        "assertion": "Free radicals are highly reactive species.",
        "reason": "They have an unpaired electron.",
        "answer": "A",
        "explanation": "The presence of an unpaired electron (reason) makes the free radical unstable and highly reactive, as it seeks to pair up the electron. The reason explains the assertion."
    }
],
  matchTheColumns: [
    {
        "column1": [ "a) Carbocation", "b) Carbanion", "c) Free radical", "d) Electrophile" ],
        "column2": [ "i) Unpaired electron", "ii) Electron deficient", "iii) Positively charged carbon", "iv) Negatively charged carbon" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Substitution", "b) Addition", "c) Elimination", "d) Rearrangement" ],
        "column2": [ "i) Alkene → Alkane", "ii) Alkyl halide → Alkene", "iii) Isomer formation", "iv) Alkane → Alkyl halide" ],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": [ "a) Inductive effect", "b) Resonance", "c) Electromeric effect", "d) Hyperconjugation" ],
        "column2": [ "i) Temporary effect", "ii) Delocalization of σ-electrons", "iii) Displacement of σ-electrons", "iv) Delocalization of π-electrons" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Chain isomerism", "b) Position isomerism", "c) Functional isomerism", "d) Metamerism" ],
        "column2": [ "i) Ethanol and Dimethyl ether", "ii) Butan-1-ol and Butan-2-ol", "iii) n-Butane and Isobutane", "iv) Diethyl ether and Methyl propyl ether" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) sp³", "b) sp²", "c) sp", "d) Cation" ],
        "column2": [ "i) Linear", "ii) Electron deficient", "iii) Tetrahedral", "iv) Trigonal planar" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};
