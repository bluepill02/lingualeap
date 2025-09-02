
import type { NeetModule } from '@/lib/types';

export const hydrocarbons: NeetModule = {
  id: 'chemistry-hydrocarbons',
  title: 'Hydrocarbons',
  chapter: 'Hydrocarbons',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Alkanes (ஆல்கேன்கள்)
*   Saturated hydrocarbons with the general formula CₙH₂ₙ₊₂.
*   Undergo substitution reactions (e.g., halogenation).
*   **Conformations:** Different spatial arrangements of atoms that can be converted into one another by rotation around C-C single bonds (e.g., staggered and eclipsed conformations of ethane).

### 2. Alkenes (ஆல்கீன்கள்)
*   Unsaturated hydrocarbons with at least one C=C double bond. General formula CₙH₂ₙ.
*   The double bond is a source of electrons, making them more reactive than alkanes.
*   Undergo addition reactions (e.g., addition of H₂, halogens, H₂O, HX).
*   **Markovnikov's Rule:** In the addition of H-X to an unsymmetrical alkene, the negative part of the addendum (X⁻) gets attached to the carbon atom which possesses a lesser number of hydrogen atoms. (பணக்காரன் மேலும் பணக்காரன் ஆவது போல - The rich get richer).
*   **Ozonolysis (ஓசோனேற்றம்):** Reaction with ozone followed by hydrolysis, which cleaves the double bond and forms carbonyl compounds.

### 3. Alkynes (ஆல்கைன்கள்)
*   Unsaturated hydrocarbons with at least one C≡C triple bond. General formula CₙH₂ₙ₋₂.
*   Undergo addition reactions similar to alkenes.
*   **Acidity of Alkynes:** Terminal alkynes (with H attached to a triply bonded carbon) are acidic due to the high s-character of the sp-hybridized carbon.

### 4. Aromatic Hydrocarbons (அரோமாட்டிக் ஹைட்ரோகார்பன்கள்)
*   Cyclic, planar, conjugated systems that obey **Hückel's Rule** (possess (4n+2)π electrons).
*   **Benzene (பென்சீன், C₆H₆):** The parent aromatic hydrocarbon.
*   Undergo electrophilic substitution reactions (e.g., nitration, halogenation, Friedel-Crafts alkylation and acylation).
*   **Directing Influence of Functional Groups:**
    *   **Activating groups (o, p-directing):** -OH, -NH₂, -OR, -CH₃.
    *   **Deactivating groups (m-directing):** -NO₂, -CN, -COOH, -CHO.
`,
  workedExamples: [
    {
        problem: "An alkene on ozonolysis gives a mixture of ethanal and propanone. Identify the alkene.",
        solution: "Ozonolysis breaks the double bond and adds an oxygen atom to each carbon of the double bond. The products are ethanal (CH₃CHO) and propanone (CH₃COCH₃). To find the original alkene, remove the oxygen atoms from the carbonyl groups and join the carbons with a double bond: CH₃-CH=C(CH₃)₂. The alkene is 2-Methylbut-2-ene."
    },
    {
        problem: "Predict the major product of the addition of HBr to propene (CH₃-CH=CH₂).",
        solution: "This is the addition of an unsymmetrical reagent (HBr) to an unsymmetrical alkene (propene). According to Markovnikov's rule, the negative part (Br⁻) will attach to the carbon with fewer hydrogen atoms (the middle carbon). The positive part (H⁺) will attach to the carbon with more hydrogen atoms (the terminal carbon). The major product is 2-Bromopropane (CH₃-CHBr-CH₃)."
    },
    {
        problem: "Explain why phenol (-OH group on benzene) is o, p-directing towards electrophilic substitution.",
        solution: "The -OH group is an activating group. The lone pair of electrons on the oxygen atom can be delocalized into the benzene ring through resonance. This increases the electron density at the ortho and para positions of the ring. Therefore, an incoming electrophile (which is electron-seeking) is more likely to attack at these electron-rich ortho and para positions."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
