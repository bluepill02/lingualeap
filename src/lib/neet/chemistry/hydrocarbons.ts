
import type { NeetModule } from '@/lib/types';

export const hydrocarbons: NeetModule = {
  id: 'chemistry-hydrocarbons',
  title: 'Hydrocarbons',
  chapter: 'Hydrocarbons',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Hydrocarbons (வேதியியல் - ஹைட்ரோகார்பன்கள்)

# 2. Learning Objectives
1.  After this, you will be able to write the structures and IUPAC names for alkanes, alkenes, and alkynes.
2.  After this, you will be able to explain the mechanism of free radical halogenation of alkanes.
3.  After this, you will be able to apply Markovnikov's rule and the peroxide effect to predict the products of addition reactions in alkenes.
4.  After this, you will be able to describe the mechanism of electrophilic substitution in benzene and the directive influence of substituents.

# 3. Prerequisites
– Understanding of basic organic chemistry principles (nomenclature, isomerism).
– Knowledge of covalent bonding and hybridization (sp³, sp², sp).
– Familiarity with reaction intermediates like carbocations and free radicals.

# 4. Concept Overview
From the petrol that fuels our bikes to the LPG gas used for cooking in our homes, **hydrocarbons** are the simplest yet most fundamental organic compounds. They are the backbone of organic chemistry. In this chapter, we will explore the different families of hydrocarbons: **Alkanes (ஆல்கேன்கள்)** (single bonds), **Alkenes (ஆல்கீன்கள்)** (double bonds), **Alkynes (ஆல்கைன்கள்)** (triple bonds), and **Aromatic Hydrocarbons (அரோமாட்டிக் ஹைட்ரோகார்பன்கள்)** like Benzene. We will learn their key reactions, such as how to add atoms across a double bond (like adding a passenger to a bus) and how benzene, despite being full of double bonds, prefers to substitute rather than add.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 2, Chapter 13**. This is a core chapter of organic chemistry. For NEET, focus on named reactions (Wurtz, Markovnikov's rule, Friedel-Crafts), reaction mechanisms, and the directive influence of groups in benzene.

### 5.1 Alkanes (ஆல்கேன்கள்)
*   **Conformations:** Staggered and Eclipsed forms of ethane. Staggered is more stable due to minimum torsional strain.
*   **Reactions:** Mainly undergo **free radical substitution** (e.g., halogenation).

### 5.2 Alkenes (ஆல்கீன்கள்)
*   Contain at least one C=C double bond.
*   **Geometrical Isomerism:** Show cis-trans isomerism.
*   **Reactions:** Undergo **electrophilic addition reactions**.
    *   **Markovnikov's Rule:** In the addition of HX to an unsymmetrical alkene, the negative part (X⁻) goes to the carbon with fewer hydrogen atoms.
    *   **Anti-Markovnikov's Rule (Peroxide Effect):** In the presence of peroxide, the addition of HBr occurs opposite to Markovnikov's rule.
    *   **Ozonolysis (ஓசோனேற்றம்):** Cleavage of the double bond by ozone to form aldehydes and/or ketones.

### 5.3 Alkynes (ஆல்கைன்கள்)
*   Contain at least one C≡C triple bond.
*   **Acidic Character:** Terminal alkynes are weakly acidic.

### 5.4 Aromatic Hydrocarbons (அரோமாட்டிக் ஹைட்ரோகார்பன்கள்)
*   **Aromaticity:** Based on Hückel's rule (4n+2)π electrons. Benzene is the primary example.
*   **Reactions:** Undergo **electrophilic substitution**.
    *   Nitration, Halogenation, Sulphonation, Friedel-Crafts Alkylation and Acylation.
    *   **Directive Influence:**
        *   **Activating groups (o, p-directing):** -OH, -NH₂, -CH₃.
        *   **Deactivating groups (m-directing):** -NO₂, -CN, -CHO, -COOH.

# 6. Worked Examples

**1. Easy:** An alkene on ozonolysis gives a mixture of ethanal and propanone. Identify the alkene.
*   **Solution:**
    *   Ozonolysis breaks the double bond and adds an 'O' to each carbon.
    *   The products are ethanal (CH₃CHO) and propanone ((CH₃)₂C=O).
    *   To find the alkene, remove the oxygens and join the carbons with a double bond: CH₃-CH=C(CH₃)₂.
    *   The alkene is **2-Methylbut-2-ene**.

**2. Medium:** Predict the major product of the addition of HBr to propene (CH₃-CH=CH₂).
*   **Solution:**
    *   This follows **Markovnikov's rule**.
    *   The negative part (Br⁻) adds to the carbon with fewer H atoms (the middle carbon).
    *   The H⁺ adds to the carbon with more H atoms (the end carbon).
    *   The major product is **2-Bromopropane** (CH₃-CHBr-CH₃).

**3. Must-Practice:** Explain why the -OH group in phenol is o, p-directing towards electrophilic substitution.
*   **Solution:**
    *   The -OH group is an **activating group**.
    *   The lone pair of electrons on the oxygen atom participates in **resonance** with the benzene ring.
    *   This delocalization of electrons increases the electron density specifically at the **ortho and para positions**.
    *   An incoming electrophile (which is electron-seeking) will preferentially attack these electron-rich ortho and para sites.

# 7. Key Formulas & Diagrams

| Concept | Key Information |
| :--- | :--- |
| Markovnikov's Rule | "Rich gets richer" (The H atom goes to the carbon that already has more H atoms). |
| Hückel's Rule | Aromaticity: Planar, cyclic, conjugated, with (4n+2)π electrons. |
| o,p-Directors | Activating groups (e.g., -OH, -NH₂, -R) |
| m-Directors | Deactivating groups (e.g., -NO₂, -CN, -COOH) |
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

