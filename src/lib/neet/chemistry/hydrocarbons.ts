
import type { NeetModule } from '@/lib/types';

export const hydrocarbons: NeetModule = {
  id: 'chemistry-hydrocarbons',
  title: 'Hydrocarbons',
  chapter: 'Hydrocarbons',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Classification, Isomerism, and Nomenclature
*   **Classification:** Alkanes, Alkenes, Alkynes, Aromatic hydrocarbons.
*   **Isomerism:** Structural and geometrical isomerism.
*   **IUPAC Nomenclature:** Systematic naming of hydrocarbons.

### 2. Alkanes (ஆல்கேன்கள்)
*   **Preparation:** From unsaturated hydrocarbons (hydrogenation), from alkyl halides (Wurtz reaction), from carboxylic acids (decarboxylation).
*   **Properties and Reactions:**
    *   **Conformations:** Sawhorse and Newman projections of ethane. Staggered and eclipsed conformations.
    *   **Mechanism of Halogenation:** Free radical mechanism (initiation, propagation, termination).

### 3. Alkenes (ஆல்கீன்கள்)
*   **Geometrical Isomerism:** cis-trans isomerism due to restricted rotation around the C=C double bond.
*   **Preparation:** From alkynes, alkyl halides (dehydrohalogenation).
*   **Properties and Reactions:**
    *   **Mechanism of Electrophilic Addition:** Addition of hydrogen, halogens, water (hydration), hydrogen halides (Markownikoff's rule and peroxide effect/anti-Markownikoff).
    *   **Ozonolysis (ஓசோனேற்றம்):** Cleavage of the double bond to form carbonyl compounds.
    *   **Polymerization:** Formation of polymers like polyethene.

### 4. Alkynes (ஆல்கைன்கள்)
*   **Acidic Character:** Terminal alkynes are acidic due to the sp-hybridized carbon.
*   **Preparation:** From calcium carbide, from vicinal dihalides.
*   **Properties and Reactions:**
    *   **Addition Reactions:** Addition of hydrogen, halogens, water, and hydrogen halides.
    *   **Polymerization:** Linear and cyclic polymerization (e.g., formation of benzene from ethyne).

### 5. Aromatic Hydrocarbons (அரோமாட்டிக் ஹைட்ரோகார்பன்கள்)
*   **Nomenclature and Isomerism.**
*   **Benzene (பென்சீன்):** Structure and Aromaticity (Hückel's rule).
*   **Mechanism of Electrophilic Substitution:**
    *   **Halogenation:** Reaction with halogens in the presence of a Lewis acid.
    *   **Nitration:** Reaction with conc. HNO₃ and conc. H₂SO₄.
    *   **Sulphonation:** Reaction with fuming H₂SO₄.
    *   **Friedel-Crafts Alkylation and Acylation:** Reaction with alkyl/acyl halide and a Lewis acid.
*   **Directive influence of functional group in mono-substituted benzene:** Activating (o,p-directing) and deactivating (m-directing) groups.
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
