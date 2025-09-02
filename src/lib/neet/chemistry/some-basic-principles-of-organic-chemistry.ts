
import type { NeetModule } from '@/lib/types';

export const someBasicPrinciplesOfOrganicChemistry: NeetModule = {
  id: 'chemistry-some-basic-principles-of-organic-chemistry',
  title: 'Some Basic Principles of Organic Chemistry',
  chapter: 'Some Basic Principles of Organic Chemistry',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Introduction (பொது அறிமுகம்)
*   **Tetravalency of Carbon (கார்பனின் நான்கு இணைதிறன்):** Carbon can form four covalent bonds, allowing it to form long chains and rings.
*   **Shapes of Organic Compounds:** Based on hybridization. sp³ (tetrahedral), sp² (trigonal planar), sp (linear).
*   **Structural Representations:** Complete (விரிந்த), condensed (சுருங்கிய), and bond-line (பிணைப்புக் கோடு) formulas are used to represent organic molecules.

### 2. Nomenclature (IUPAC) (பெயரிடுதல்)
*   A systematic method of naming organic compounds developed by the International Union of Pure and Applied Chemistry.
*   Components: Root word (மூல வார்த்தை - indicates number of C atoms), Primary Suffix (முதன்மை பின்னொட்டு - indicates saturation), Secondary Suffix (இரண்டாம் பின்னொட்டு - indicates functional group), Prefix (முன்னொட்டு - indicates substituents).

### 3. Isomerism (மாற்றியம்)
*   Compounds having the same molecular formula but different structures or spatial arrangements. (ஒரே மூலக்கூறு வாய்ப்பாடு, ஆனால் வெவ்வேறு பண்புகள் - ஒரே மாதிரி தோற்றமளிக்கும் இரட்டையர்கள் ஆனால் வேறு வேறு குணங்கள் இருப்பது போல).
*   **Structural Isomerism (அமைப்பு மாற்றியம்):** Chain, Position, Functional, Metamerism.
*   **Stereoisomerism (வெளிப்புற மாற்றியம்):** Geometrical (cis-trans), Optical isomerism (enantiomers).

### 4. Electronic Displacements in Covalent Bonds (சகப் பிணைப்புகளில் எலக்ட்ரான் இடப்பெயர்ச்சி)
*   **Inductive Effect (தூண்டல் விளைவு):** Permanent displacement of sigma (σ) electrons along a carbon chain due to an electronegativity difference. It's a weak effect that diminishes with distance.
*   **Resonance Effect (உடனிசைவு விளைவு):** Delocalization (பரவுதல்) of pi (π) electrons in conjugated systems. Leads to resonance structures.
*   **Electromeric Effect:** Complete transfer of a shared pair of π-electrons to one of the atoms in the presence of an attacking reagent. It's a temporary effect.
*   **Hyperconjugation (மிகையான உடனிணைப்பு):** Delocalization of sigma (σ) electrons of a C-H bond of an alkyl group attached to an atom of an unsaturated system or to an atom with an unshared p-orbital. Also known as no-bond resonance.

### 5. Reaction Intermediates (வினை இடைநிலைகள்)
*   Highly reactive, short-lived species formed during a reaction.
*   **Carbocations (கார்பன் நேர் அயனிகள்):** Positively charged carbon (sp² hybridized). Stability: 3° > 2° > 1°.
*   **Carbanions (கார்பன் எதிர் அயனிகள்):** Negatively charged carbon (sp³ hybridized). Stability: 1° > 2° > 3°.
*   **Free Radicals (தனி உறுப்புகள்):** Neutral species with an unpaired electron.

### 6. Types of Organic Reactions (கரிம வினைகளின் வகைகள்)
*   **Substitution (பதிலீட்டு வினை):** An atom or group is replaced by another atom or group.
*   **Addition (சேர்க்கை வினை):** Atoms are added across a double or triple bond.
*   **Elimination (நீக்க வினை):** Atoms are removed from adjacent carbons to form a double or triple bond.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
