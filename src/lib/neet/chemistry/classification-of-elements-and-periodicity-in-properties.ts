
import type { NeetModule } from '@/lib/types';

export const classificationOfElementsAndPeriodicityInProperties: NeetModule = {
  id: 'chemistry-classification-of-elements-and-periodicity-in-properties',
  title: 'Classification of Elements and Periodicity in Properties',
  chapter: 'Classification of Elements and Periodicity in Properties',
  subject: 'Chemistry',
  conceptNotes: `
# 1. Module Title
– Chemistry – Classification of Elements and Periodicity in Properties (வேதியியல் - தனிமங்களின் வகைப்பாடு மற்றும் பண்புகளில் ஆவர்த்தனத் தன்மை)

# 2. Learning Objectives
1.  After this, you will be able to state the Modern Periodic Law and describe the structure of the modern periodic table.
2.  After this, you will be able to classify elements into s, p, d, and f blocks based on their electronic configuration.
3.  After this, you will be able to explain the periodic trends in atomic radius, ionization enthalpy, and electron gain enthalpy.
4.  After this, you will be able to explain the trend in electronegativity and its relation to the chemical properties of elements.

# 3. Prerequisites
– Knowledge of atomic structure and electronic configuration.
– Basic understanding of atoms and elements.

# 4. Concept Overview
Just like how the streets and houses in a planned city like Madurai (மதுரை) are arranged in a logical grid, the chemical elements are arranged in a beautiful, logical table called the **Periodic Table (ஆவர்த்தன அட்டவணை)**. This chapter explains the 'master plan' of chemistry. We will learn how elements are organized based on their atomic number, and more importantly, how their properties—like size and reactivity—change in predictable patterns (periodicity) as we move across or down the table. Understanding these trends allows us to predict the chemical behavior of any element without memorizing everything!

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Chemistry Volume 1, Chapter 3**. This chapter is fundamental. NEET questions are often direct, testing the understanding of trends and the reasons for exceptions (like the ionization enthalpy of N vs O, or electron gain enthalpy of F vs Cl).

### 5.1 Modern Periodic Law and Periodic Table
*   **Modern Periodic Law:** The physical and chemical properties of the elements are periodic functions of their **atomic numbers**.
*   **Structure:** 7 periods (horizontal rows) and 18 groups (vertical columns).

### 5.2 Classification into s, p, d, f blocks
*   Elements are classified based on the orbital into which the last electron enters.
    *   **s-Block:** Groups 1 & 2.
    *   **p-Block:** Groups 13 to 18.
    *   **d-Block:** Transition elements, Groups 3 to 12.
    *   **f-Block:** Inner transition elements (Lanthanoids and Actinoids).

### 5.3 Periodic Trends in Properties (பண்புகளில் ஆவர்த்தனத் தன்மை)
*   **Atomic Radius (அணு ஆரம்):**
    *   **Across a period:** Decreases, due to increasing effective nuclear charge.
    *   **Down a group:** Increases, due to the addition of new electron shells.
    *   **Ionic Radius:** Cations are smaller than their parent atoms; anions are larger.
*   **Ionization Enthalpy (IE) (அயனியாக்கும் ஆற்றல்):** Energy needed to remove an electron.
    *   **Across a period:** Increases.
    *   **Down a group:** Decreases.
    *   **Exceptions:** Stable half-filled (e.g., Nitrogen) and fully-filled (e.g., Beryllium, Noble gases) configurations have higher IE.
*   **Electron Gain Enthalpy (ΔegH) (எலக்ட்ரான் நாட்ட ஆற்றல்):** Energy released when an electron is added.
    *   **Across a period:** Becomes more negative (more energy released).
    *   **Down a group:** Becomes less negative.
    *   **Exception:** Chlorine has a more negative electron gain enthalpy than Fluorine due to the small size and high electron density of Fluorine.
*   **Electronegativity (எலக்ட்ரான் கவர்தன்மை):** Tendency of an atom to attract a shared pair of electrons. Follows the same general trend as ionization enthalpy.

# 6. Worked Examples

**1. Easy:** Arrange the following in order of increasing ionic radius: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺.
*   **Solution:** These are all **isoelectronic species** (they all have 10 electrons). For isoelectronic species, the radius decreases as the nuclear charge (atomic number) increases, because the same number of electrons are pulled by a stronger nucleus.
    *   Nuclear charges: Mg(12) > Na(11) > F(9) > O(8) > N(7).
    *   Therefore, the order of increasing ionic radius is: **Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻**.

**2. Medium:** Why does the first ionization enthalpy of Nitrogen (N) is higher than that of Oxygen (O), despite the general trend?
*   **Solution:**
    *   Nitrogen's electronic configuration is [He] 2s² 2p³. It has a **stable, exactly half-filled p-orbital**.
    *   Oxygen's electronic configuration is [He] 2s² 2p⁴.
    *   Removing an electron from the stable, symmetrical half-filled configuration of Nitrogen requires more energy than removing an electron from the 2p⁴ configuration of Oxygen. This stability outweighs the effect of the increased nuclear charge in Oxygen.

**3. Must-Practice:** Explain why the electron gain enthalpy of Fluorine is less negative than that of Chlorine.
*   **Solution:**
    *   This is a major exception to the general trend. Down a group, electron gain enthalpy should become less negative.
    *   However, Fluorine is a very small atom. The existing electrons in its compact 2p orbitals create a significant amount of **inter-electronic repulsion**.
    *   This repulsion partially counteracts the nucleus's attraction for the incoming electron.
    *   Chlorine, being larger, has its incoming electron enter the 3p orbital, where there is more space and less electron-electron repulsion. Thus, the net attraction is greater, and more energy is released.

# 7. Key Formulas & Diagrams

| Property | Trend Across a Period (→) | Trend Down a Group (↓) |
| :--- | :--- | :--- |
| Atomic Radius | Decreases | Increases |
| Ionization Enthalpy | Increases | Decreases |
| Electron Gain Enthalpy | Becomes more negative | Becomes less negative |
| Electronegativity | Increases | Decreases |
`,
  workedExamples: [
    {
        problem: "Arrange the following in order of increasing ionic radius: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺.",
        solution: "These are isoelectronic species (all have 10 electrons). For isoelectronic species, the radius decreases as the nuclear charge (atomic number) increases. Atomic numbers are N(7), O(8), F(9), Na(11), Mg(12). Therefore, the order of increasing ionic radius is: Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻."
    },
    {
        problem: "Why does the first ionization enthalpy of Boron (B) is slightly less than that of Beryllium (Be), even though B is to the right of Be in the periodic table?",
        solution: "Beryllium has the electronic configuration [He] 2s². Boron has [He] 2s² 2p¹. The electron to be removed from Beryllium is from a more stable, fully-filled 2s orbital. The electron to be removed from Boron is from a less stable, higher-energy 2p orbital. Removing an electron from the stable 2s orbital of Be requires more energy than removing an electron from the 2p orbital of B. Hence, the first ionization enthalpy of Be is higher than B."
    },
    {
        problem: "Explain why the electron gain enthalpy of Fluorine is less negative than that of Chlorine.",
        solution: "This is an exception to the general trend. Fluorine has a very small atomic size. The incoming electron experiences strong repulsion from the already present electrons in the small 2p orbital of Fluorine. In Chlorine, the atom is larger (electron enters the 3p orbital), so the electron-electron repulsion is less. Therefore, Chlorine has a greater attraction for the incoming electron, resulting in a more negative electron gain enthalpy."
    }
  ],
  mcqs: [
    {
        "question": "The element with atomic number 35 belongs to which block of the periodic table?",
        "options": ["s-block", "p-block", "d-block", "f-block"],
        "answer": "p-block",
        "explanation": "The electronic configuration of Z=35 (Bromine) is [Ar] 3d¹⁰ 4s² 4p⁵. The last electron enters the p-orbital, so it belongs to the p-block."
    },
    {
        "question": "Which of the following has the smallest atomic radius?",
        "options": ["Na", "Mg", "Si", "Cl"],
        "answer": "Cl",
        "explanation": "Atomic radius decreases across a period from left to right due to increasing effective nuclear charge. All these elements are in the 3rd period, so Cl will be the smallest."
    },
    {
        "question": "The first ionization enthalpy of Nitrogen is higher than that of Oxygen because:",
        "options": ["Nitrogen is smaller than Oxygen", "Nitrogen has a half-filled p-orbital", "Oxygen has a higher nuclear charge", "Oxygen is more electronegative"],
        "answer": "Nitrogen has a half-filled p-orbital",
        "explanation": "Nitrogen has a stable, half-filled p-orbital (2p³), which requires more energy to disturb by removing an electron compared to Oxygen (2p⁴)."
    },
    {
        "question": "Which of the following has the most negative electron gain enthalpy?",
        "options": ["F", "Cl", "Br", "I"],
        "answer": "Cl",
        "explanation": "Chlorine has the most negative electron gain enthalpy in the periodic table due to its optimal size and high effective nuclear charge. The value for Fluorine is less negative due to strong inter-electronic repulsions in its small 2p orbital."
    },
    {
        "question": "Which of the following sets of ions are isoelectronic?",
        "options": ["Na⁺, Mg²⁺, F⁻, O²⁻", "K⁺, Ca²⁺, Cl⁻, S³⁻", "Li⁺, Na⁺, K⁺, Rb⁺", "N, O, F, Ne"],
        "answer": "Na⁺, Mg²⁺, F⁻, O²⁻",
        "explanation": "All ions in this set have 10 electrons (Na⁺: 11-1=10; Mg²⁺: 12-2=10; F⁻: 9+1=10; O²⁻: 8+2=10)."
    }
],
  assertionReasons: [
    {
        "assertion": "The atomic radius decreases across a period.",
        "reason": "Across a period, the effective nuclear charge increases while the principal quantum number remains the same.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The increasing pull from the nucleus on the same electron shell causes the radius to contract."
    },
    {
        "assertion": "The second ionization enthalpy of an element is always higher than the first ionization enthalpy.",
        "reason": "It is more difficult to remove an electron from a positive ion than from a neutral atom.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. After one electron is removed, the effective nuclear charge per remaining electron increases, making it harder to remove the second electron."
    },
    {
        "assertion": "Noble gases have large positive electron gain enthalpies.",
        "reason": "The added electron has to enter the next higher principal quantum level.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Noble gases have stable, completely filled electron shells. The next electron must enter a new, higher-energy shell, which is an energetically unfavorable process, requiring energy input (positive ΔegH)."
    },
    {
        "assertion": "Anions are larger in size than their parent atoms.",
        "reason": "The addition of one or more electrons results in increased repulsion among the electrons and a decrease in effective nuclear charge.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The added electron increases inter-electronic repulsion, causing the electron cloud to expand, and the effective nuclear charge felt by each electron decreases."
    },
    {
        "assertion": "The Pauling scale is used to measure electronegativity.",
        "reason": "Fluorine is the most electronegative element.",
        "answer": "B",
        "explanation": "Both statements are true facts, but the fact that fluorine is the most electronegative is a result of the scale, not the reason why the scale is used. They are not a cause-and-effect pair."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Highest Ionization Enthalpy", "b) Highest Electron Gain Enthalpy", "c) Highest Electronegativity", "d) Largest Atomic Radius (in its period)"],
        "column2": ["i) Chlorine", "ii) Fluorine", "iii) Helium", "iv) Alkali Metal"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) s-block", "b) p-block", "c) d-block", "d) f-block"],
        "column2": ["i) Inner transition elements", "ii) Representative elements", "iii) Transition elements", "iv) Alkali and Alkaline earth metals"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) Diagonal relationship", "b) Inert Pair Effect", "c) Lanthanoid Contraction", "d) Periodicity"],
        "column2": ["i) Repetition of properties after regular intervals", "ii) Similarity between Li and Mg", "iii) Reluctance of s-electrons to participate in bonding", "iv) Similar size of Zr and Hf"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Isoelectronic", "b) Isotopes", "c) Isobars", "d) Isotones"],
        "column2": ["i) Same number of neutrons", "ii) Same mass number", "iii) Same number of electrons", "iv) Same atomic number"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Group 1", "b) Group 2", "c) Group 17", "d) Group 18"],
        "column2": ["i) Noble Gases", "ii) Halogens", "iii) Alkali Metals", "iv) Alkaline Earth Metals"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    }
  ]
};

