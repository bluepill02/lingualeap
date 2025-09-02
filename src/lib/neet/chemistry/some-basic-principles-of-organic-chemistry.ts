
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
    },
    {
        "question": "Which of the following shows geometrical isomerism?",
        "options": [ "But-1-ene", "But-2-ene", "Butane", "2-Methylpropene" ],
        "answer": "But-2-ene",
        "explanation": "But-2-ene (CH₃-CH=CH-CH₃) can exist as cis and trans isomers because each doubly bonded carbon atom is attached to two different groups (H and CH₃)."
    },
    {
        "question": "The inductive effect is a:",
        "options": [
            "Permanent effect involving σ-electrons",
            "Temporary effect involving σ-electrons",
            "Permanent effect involving π-electrons",
            "Temporary effect involving π-electrons"
        ],
        "answer": "Permanent effect involving σ-electrons",
        "explanation": "The inductive effect is the permanent polarization of a sigma bond due to the electronegativity difference between the bonded atoms."
    },
    {
        "question": "Which of the following is a nucleophile?",
        "options": [ "BF₃", "AlCl₃", "H₂O", "NO₂⁺" ],
        "answer": "H₂O",
        "explanation": "A nucleophile is an electron-rich species that donates an electron pair. Water has lone pairs of electrons on the oxygen atom and can act as a nucleophile."
    },
    {
        "question": "The C-C bond length is maximum in:",
        "options": [ "Ethane", "Ethene", "Ethyne", "Benzene" ],
        "answer": "Ethane",
        "explanation": "The C-C single bond in ethane is the longest, followed by the double bond in ethene, and the triple bond in ethyne is the shortest."
    },
    {
        "question": "The stability of carbanions follows the order:",
        "options": [ "1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°" ],
        "answer": "1° > 2° > 3°",
        "explanation": "Alkyl groups are electron-donating, which destabilize the negative charge on the carbon. Therefore, primary carbanions are the most stable."
    },
    {
        "question": "The delocalization of π-electrons is known as:",
        "options": [ "Inductive effect", "Electromeric effect", "Hyperconjugation", "Resonance" ],
        "answer": "Resonance",
        "explanation": "Resonance involves the delocalization of pi electrons within a conjugated system."
    },
    {
        "question": "Which of the following is not an isomer of pentane (C₅H₁₂)?",
        "options": [ "2-Methylbutane", "2,2-Dimethylpropane", "Cyclopentane", "n-Pentane" ],
        "answer": "Cyclopentane",
        "explanation": "Cyclopentane has the molecular formula C₅H₁₀, not C₅H₁₂."
    },
    {
        "question": "The primary suffix '-ene' in IUPAC nomenclature indicates:",
        "options": [ "A single bond", "A double bond", "A triple bond", "A functional group" ],
        "answer": "A double bond",
        "explanation": "'-ane' is for single bonds, '-ene' for double bonds, and '-yne' for triple bonds."
    },
    {
        "question": "Hyperconjugation is also known as:",
        "options": [ "No-bond resonance", "Pi-bond resonance", "Sigma-bond resonance", "Alpha-effect" ],
        "answer": "No-bond resonance",
        "explanation": "Hyperconjugation involves the delocalization of σ-electrons and is sometimes referred to as no-bond resonance."
    },
    {
        "question": "A reaction in which an atom or group is replaced by another atom or group is called a:",
        "options": [ "Addition reaction", "Elimination reaction", "Substitution reaction", "Rearrangement reaction" ],
        "answer": "Substitution reaction",
        "explanation": "This is the definition of a substitution reaction."
    },
    {
        "question": "The general formula for alkynes is:",
        "options": [ "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁" ],
        "answer": "CₙH₂ₙ₋₂",
        "explanation": "Alkynes contain a carbon-carbon triple bond and follow the general formula CₙH₂ₙ₋₂."
    },
    {
        "question": "Functional isomers have:",
        "options": [
            "Same functional group but different carbon chain",
            "Same molecular formula but different functional group",
            "Same carbon chain but different position of functional group",
            "Different arrangement of atoms in space"
        ],
        "answer": "Same molecular formula but different functional group",
        "explanation": "For example, ethanol (C₂H₅OH) and dimethyl ether (CH₃-O-CH₃) are functional isomers."
    },
    {
        "question": "The temporary effect which takes place in the presence of an attacking reagent is:",
        "options": [ "Inductive effect", "Resonance effect", "Hyperconjugation", "Electromeric effect" ],
        "answer": "Electromeric effect",
        "explanation": "The electromeric effect is a temporary effect involving the complete transfer of a pi-electron pair to one of the bonded atoms in the presence of an attacking reagent."
    },
    {
        "question": "The correct IUPAC name for neopentane is:",
        "options": [ "2-Methylbutane", "2,2-Dimethylpropane", "Pentane", "2-Ethylpropane" ],
        "answer": "2,2-Dimethylpropane",
        "explanation": "The longest chain has three carbons (propane) with two methyl groups on the second carbon."
    },
    {
        "question": "Which of the following species acts as a carbanion?",
        "options": [ "CH₃⁺", "CH₃•", "CH₃⁻", "CCl₂" ],
        "answer": "CH₃⁻",
        "explanation": "A carbanion is a species containing a carbon atom with a negative charge."
    },
    {
        "question": "The property of carbon that allows it to form long chains is called:",
        "options": [ "Tetravalency", "Hybridization", "Catenation", "Isomerism" ],
        "answer": "Catenation",
        "explanation": "Catenation is the ability of an atom to form covalent bonds with other atoms of the same element, forming a chain or ring."
    },
    {
        "question": "The bond angle in a molecule with sp² hybridization is:",
        "options": [ "180°", "120°", "109.5°", "90°" ],
        "answer": "120°",
        "explanation": "sp² hybridization leads to a trigonal planar geometry with bond angles of 120°."
    },
    {
        "question": "Which type of reaction is characteristic of alkanes?",
        "options": [ "Addition", "Elimination", "Free-radical substitution", "Electrophilic substitution" ],
        "answer": "Free-radical substitution",
        "explanation": "Due to their saturated nature, alkanes typically undergo substitution reactions, most commonly via a free-radical mechanism (e.g., halogenation in the presence of UV light)."
    },
    {
        "question": "Optical isomerism is shown by molecules that are:",
        "options": [ "Superimposable on their mirror images", "Non-superimposable on their mirror images", "Geometrically different", "Containing double bonds" ],
        "answer": "Non-superimposable on their mirror images",
        "explanation": "Molecules that are chiral (non-superimposable on their mirror images) exhibit optical isomerism."
    },
    {
        "question": "An electron-donating group shows which inductive effect?",
        "options": [ "+I effect", "-I effect", "+E effect", "-E effect" ],
        "answer": "+I effect",
        "explanation": "Groups that donate electron density through the sigma bond are said to have a positive inductive effect (+I)."
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
    },
    {
        "assertion": "But-1-ene and But-2-ene are position isomers.",
        "reason": "They have the same molecular formula but differ in the position of the double bond.",
        "answer": "A",
        "explanation": "The reason correctly defines position isomerism and applies it to the given example, explaining the assertion."
    },
    {
        "assertion": "A carbanion is planar in shape.",
        "reason": "The carbon atom in a carbanion is sp² hybridized.",
        "answer": "D",
        "explanation": "The assertion is false. A simple carbanion (like CH₃⁻) is pyramidal in shape. The reason is also false; the carbon atom is sp³ hybridized."
    },
    {
        "assertion": "The resonance effect is stronger than the inductive effect.",
        "reason": "The resonance effect involves the complete transfer of π-electrons.",
        "answer": "A",
        "explanation": "Resonance is generally a more dominant effect as it involves delocalization of pi electrons over a larger part of the molecule, while the inductive effect is transmitted weakly through sigma bonds."
    },
    {
        "assertion": "Geometrical isomerism is a type of stereoisomerism.",
        "reason": "It arises due to restricted rotation around a carbon-carbon double bond.",
        "answer": "A",
        "explanation": "The reason correctly states the condition for geometrical isomerism, which explains why it's a form of stereoisomerism (isomers with the same connectivity but different spatial arrangement)."
    },
    {
        "assertion": "The IUPAC name for isobutane is 2-Methylpropane.",
        "reason": "The longest carbon chain contains three carbon atoms.",
        "answer": "A",
        "explanation": "The reason correctly identifies the parent chain, which is the basis for the IUPAC name given in the assertion."
    },
    {
        "assertion": "Heterolytic cleavage results in the formation of ions.",
        "reason": "In heterolytic cleavage, one of the atoms takes both the bonding electrons.",
        "answer": "A",
        "explanation": "The reason correctly describes heterolytic cleavage, which leads to the formation of a cation and an anion."
    },
    {
        "assertion": "A nucleophile attacks the region of high electron density in a substrate.",
        "reason": "Nucleophiles are electron-rich species.",
        "answer": "D",
        "explanation": "The assertion is false. Nucleophiles, being electron-rich, attack regions of low electron density (electron-deficient centers). The reason is true."
    },
    {
        "assertion": "Alkenes are more reactive than alkanes.",
        "reason": "The π-bond in alkenes is a loose source of electrons.",
        "answer": "A",
        "explanation": "The presence of the weak, accessible π-bond (reason) is why alkenes readily undergo addition reactions, making them more reactive than the saturated alkanes (assertion)."
    },
    {
        "assertion": "The C-C bond length in benzene is intermediate between a single and a double bond.",
        "reason": "Benzene exhibits resonance.",
        "answer": "A",
        "explanation": "Resonance in benzene delocalizes the pi electrons, resulting in all C-C bonds having a partial double bond character, with a bond length intermediate between a pure single and pure double bond. The reason explains the assertion."
    },
    {
        "assertion": "Elimination reactions lead to the formation of unsaturated compounds.",
        "reason": "In an elimination reaction, atoms are removed from adjacent carbon atoms.",
        "answer": "A",
        "explanation": "The removal of atoms from adjacent carbons (reason) leads to the formation of a new pi bond between those carbons, resulting in an unsaturated compound (assertion)."
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
    },
    {
        "column1": [ "a) Homolysis", "b) Heterolysis", "c) Nucleophile", "d) Electrophile" ],
        "column2": [ "i) Electron loving", "ii) Nucleus loving", "iii) Unequal bond cleavage", "iv) Equal bond cleavage" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": [ "a) -NO₂ group", "b) -OH group", "c) -Cl group", "d) -CH₃ group" ],
        "column2": [ "i) +I effect", "ii) -I and +R effect", "iii) -I and -R effect", "iv) -I and +R effect (weak)" ],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": [ "a) cis-trans isomerism", "b) Optical isomerism", "c) Catenation", "d) Tetravalency" ],
        "column2": [ "i) Self-linking property", "ii) Chiral carbon", "iii) Restricted rotation", "iv) Four bonds of carbon" ],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": [ "a) Alkane", "b) Alkene", "c) Alkyne", "d) Arene" ],
        "column2": [ "i) CₙH₂ₙ₋₂", "ii) CₙH₂ₙ₊₂", "iii) Hückel's rule", "iv) CₙH₂ₙ" ],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": [ "a) Root word", "b) Primary suffix", "c) Secondary suffix", "d) Prefix" ],
        "column2": [ "i) Substituent", "ii) Saturation", "iii) Number of carbon atoms", "iv) Main functional group" ],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": [ "a) 1° carbocation", "b) 2° carbocation", "c) 3° carbocation", "d) Methyl carbocation" ],
        "column2": [ "i) 9 alpha-hydrogens for hyperconjugation", "ii) 0 alpha-hydrogens", "iii) 3 alpha-hydrogens", "iv) 6 alpha-hydrogens" ],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": [ "a) Complete formula", "b) Condensed formula", "c) Bond-line formula", "d) Molecular formula" ],
        "column2": [ "i) C₄H₁₀", "ii) CH₃CH₂CH₂CH₃", "iii) Zig-zag line", "iv) Shows all bonds" ],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": [ "a) Enantiomers", "b) Diastereomers", "c) Geometrical isomers", "d) Structural isomers" ],
        "column2": [ "i) Different connectivity", "ii) Non-superimposable mirror images", "iii) Stereoisomers that are not mirror images", "iv) cis-trans" ],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": [ "a) -COOH", "b) -CHO", "c) -OH", "d) -NH₂" ],
        "column2": [ "i) Hydroxyl", "ii) Carboxyl", "iii) Amino", "iv) Carbonyl (aldehyde)" ],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": [ "a) Activating group", "b) Deactivating group", "c) ortho-para directing", "d) meta directing" ],
        "column2": [ "i) -NO₂", "ii) -OH", "iii) Electron withdrawing group", "iv) Electron donating group" ],
        "answer": "a-iv, b-iii, c-ii, d-i"
    }
]
};

    
