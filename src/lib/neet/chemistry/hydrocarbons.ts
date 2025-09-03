
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
  mcqs: [
    {
        "question": "The addition of HBr to propene in the presence of peroxide follows:",
        "options": ["Markovnikov's rule", "Anti-Markovnikov's rule", "Saytzeff's rule", "Hofmann's rule"],
        "answer": "Anti-Markovnikov's rule",
        "explanation": "In the presence of peroxide, the addition of HBr proceeds via a free-radical mechanism, leading to the anti-Markovnikov product (1-Bromopropane)."
    },
    {
        "question": "Which of the following compounds is aromatic?",
        "options": ["Cyclohexane", "Cyclohexene", "Benzene", "Cyclohexyne"],
        "answer": "Benzene",
        "explanation": "Benzene is aromatic because it is cyclic, planar, has a delocalized system of 6 π-electrons, and follows Hückel's rule (4n+2 π electrons, where n=1)."
    },
    {
        "question": "The reaction of an alkene with ozone followed by hydrolysis is called:",
        "options": ["Wurtz reaction", "Ozonolysis", "Friedel-Crafts reaction", "Dehydration"],
        "answer": "Ozonolysis",
        "explanation": "Ozonolysis is a method used to cleave carbon-carbon double or triple bonds using ozone."
    },
    {
        "question": "Which of the following is the most acidic?",
        "options": ["Ethane", "Ethene", "Ethyne", "Benzene"],
        "answer": "Ethyne",
        "explanation": "The carbon atoms in ethyne are sp-hybridized. The sp hybrid orbital has 50% s-character, making it more electronegative. This pulls the C-H bond electron density closer to carbon, making the hydrogen atom acidic."
    },
    {
        "question": "Which of the following groups is meta-directing in electrophilic aromatic substitution?",
        "options": ["-OH", "-NH₂", "-CH₃", "-NO₂"],
        "answer": "-NO₂",
        "explanation": "The -NO₂ group is a strong electron-withdrawing group and deactivates the benzene ring, directing incoming electrophiles to the meta position."
    }
],
  assertionReasons: [
    {
        "assertion": "Benzene undergoes electrophilic substitution reactions more easily than addition reactions.",
        "reason": "The delocalized π-electron system of benzene is highly stable.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. An addition reaction would destroy the stable aromatic system, whereas a substitution reaction preserves it."
    },
    {
        "assertion": "Terminal alkynes are acidic in nature.",
        "reason": "The carbon atom in a terminal alkyne is sp-hybridized, which has high s-character and is more electronegative.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The high electronegativity of the sp-hybridized carbon atom makes the C-H bond polar, facilitating the release of the hydrogen as a proton."
    },
    {
        "assertion": "The staggered conformation of ethane is more stable than the eclipsed conformation.",
        "reason": "The staggered conformation has minimum torsional strain.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. In the staggered form, the hydrogen atoms on adjacent carbons are as far apart as possible, minimizing the repulsive forces (torsional strain)."
    },
    {
        "assertion": "Propene reacts with HBr to form 2-bromopropane.",
        "reason": "The reaction follows Markovnikov's rule where the negative part of the addendum adds to the carbon with fewer hydrogen atoms.",
        "answer": "A",
        "explanation": "The reason correctly states Markovnikov's rule and explains the formation of the major product, 2-bromopropane."
    },
    {
        "assertion": "The -OH group is an ortho, para-directing group.",
        "reason": "The -OH group activates the benzene ring by increasing the electron density at the ortho and para positions through resonance.",
        "answer": "A",
        "explanation": "The reason correctly explains why the -OH group is activating and directs incoming electrophiles to the o- and p-positions."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Wurtz reaction", "b) Ozonolysis", "c) Friedel-Crafts reaction", "d) Hydrogenation"],
        "column2": ["i) Alkene → Aldehyde/Ketone", "ii) Alkene → Alkane", "iii) Alkyl halide → Alkane", "iv) Benzene → Alkylbenzene"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Markovnikov's rule", "b) Anti-Markovnikov's rule", "c) Saytzeff's rule", "d) Hückel's rule"],
        "column2": ["i) Peroxide effect", "ii) Aromaticity", "iii) Electrophilic addition", "iv) Elimination reaction"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Free radical", "b) Carbocation", "c) Carbanion", "d) Electrophile"],
        "column2": ["i) `BF₃`", "ii) `CH₃⁻`", "iii) `CH₃•`", "iv) `CH₃⁺`"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) `cis-But-2-ene`", "b) `trans-But-2-ene`", "c) `n-Butane`", "d) `Isobutane`"],
        "column2": ["i) Chain isomer", "ii) Geometrical isomer", "iii) Conformational isomer", "iv) Geometrical isomer"],
        "answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        "column1": ["a) Activating group", "b) Deactivating group", "c) o,p-directing", "d) m-directing"],
        "column2": ["i) `-NO₂`", "ii) `-OH`", "iii) `-COOH`", "iv) `-NH₂`"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    }
  ]
};
