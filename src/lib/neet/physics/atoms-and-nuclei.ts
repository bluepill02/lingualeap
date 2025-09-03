
import type { NeetModule } from '@/lib/types';

export const atomsAndNuclei: NeetModule = {
  metadata: {
    id: 'physics-atoms-and-nuclei',
    title: 'Atoms and Nuclei (அணுக்களும் அணுக்கருக்களும்)',
    chapter: 'Unit 18: Atoms and Nuclei',
    subject: 'Physics',
    glossary: [
      { English: 'Bohr Model', தமிழ்: 'போர் மாதிரி' },
      { English: 'Binding Energy', தமிழ்: 'பிணைப்பு ஆற்றல்' },
      { English: 'Mass Defect', தமிழ்: 'நிறை வழு' },
      { English: 'Nuclear Fission', தமிழ்: 'அணுக்கரு பிளவு' },
      { English: 'Nuclear Fusion', தமிழ்: 'அணுக்கரு இணைவு' }
    ],
    learningObjectives: [
      "Describe Rutherford's alpha-scattering experiment and the conclusions drawn from it.",
      "Apply Bohr's model postulates to calculate the radius and energy levels of the hydrogen atom.",
      "Explain the concepts of mass defect and binding energy and their relation to nuclear stability.",
      "Differentiate between nuclear fission and fusion and their applications."
    ],
    prerequisites: [
      "Understanding of electrostatic force (Coulomb's Law).",
      "Concepts of energy and momentum conservation.",
      "Knowledge of the dual nature of matter and radiation."
    ],
    conceptOverview: "From the smallest particle of gold in a Thirumangalyam (திருமாங்கல்யம்) to the vastness of the universe, everything is made of atoms. But what is inside an atom? This chapter, **Atoms and Nuclei** (அணுக்களும் அணுக்கருக்களும்), takes us on a journey into the heart of matter. We will explore models of the atom, from Rutherford's discovery of the nucleus to Bohr's explanation of atomic spectra. Then, we will dive deeper into the nucleus itself, uncovering the immense energy that binds it together (binding energy) and the processes that can release this energy: fission and fusion, the power behind nuclear reactors and the stars.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 2, Chapter 9 ('Atomic and Nuclear Physics'). This is a very important chapter for NEET, with a high chance of questions from Bohr's model, radioactivity, and binding energy curve.",
    studyTips: [
      {
        tip: "The energy level diagram for the hydrogen atom is crucial. Memorize the energy values for the first few levels (n=1 is -13.6 eV, n=2 is -3.4 eV, etc.). This will help you quickly calculate the energy of photons emitted or absorbed during transitions.",
        NEET_Hack: "Radioactivity problems almost always involve half-life. Remember that after 'n' half-lives, the amount of substance remaining is N = N₀ / 2ⁿ. This is much faster than using the exponential decay formula N = N₀e⁻ˡᵗ for many problems."
      },
      {
        tip: "The binding energy per nucleon curve is key to understanding nuclear stability. Iron (Fe) is at the peak, making it the most stable. Fission (splitting heavy nuclei) and fusion (joining light nuclei) both release energy because they move towards this peak of stability.",
        NEET_Hack: "In nuclear reactions, always check for the conservation of mass number (A) and atomic number (Z). The sum of A on the left side must equal the sum of A on the right side, and the same for Z. This is the fastest way to identify the unknown particle in a reaction."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Atoms and Nuclei (இயற்பியல் - அணுக்களும் அணுக்கருக்களும்)

# 2. Learning Objectives
1.  After this, you will be able to describe Rutherford's alpha-scattering experiment and the conclusions drawn from it.
2.  After this, you will be able to apply Bohr's model postulates to calculate the radius and energy levels of the hydrogen atom.
3.  After this, you will be able to explain the concepts of mass defect and binding energy and their relation to nuclear stability.
4.  After this, you will be able to differentiate between nuclear fission and fusion and their applications.

# 3. Prerequisites
– Understanding of electrostatic force (Coulomb's Law).
– Concepts of energy and momentum conservation.
– Knowledge of the dual nature of matter and radiation.

# 4. Concept Overview
From the smallest particle of gold in a Thirumangalyam (திருமாங்கல்யம்) to the vastness of the universe, everything is made of atoms. But what is inside an atom? This chapter, **Atoms and Nuclei** (அணுக்களும் அணுக்கருக்களும்), takes us on a journey into the heart of matter. We will explore models of the atom, from Rutherford's discovery of the nucleus to Bohr's explanation of atomic spectra. Then, we will dive deeper into the nucleus itself, uncovering the immense energy that binds it together (binding energy) and the processes that can release this energy: fission and fusion, the power behind nuclear reactors and the stars.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 2, Chapter 9 ('Atomic and Nuclear Physics')**.

### 5.1 Atoms (அணுக்கள்)
*   **Alpha-particle scattering experiment; Rutherford's model of atom (ரூதர்போர்டின் அணு மாதிரி):** This experiment involved firing alpha particles at a thin gold foil. Most particles passed through, but some were deflected at large angles. This led to the discovery of a small, dense, positively charged **nucleus** at the center of the atom, with electrons orbiting it.
*   **Bohr model (போர் மாதிரி):** To explain the stability of atoms and the hydrogen spectrum, Bohr proposed three postulates for the hydrogen atom:
    1.  Electrons revolve in specific stable orbits without radiating energy.
    2.  The angular momentum of an electron is quantized: \\(L = mvr = \\frac{nh}{2\\pi}\\).
    3.  An electron emits or absorbs energy (as a photon) when it jumps between these orbits, with \\(E_{photon} = E_{initial} - E_{final}\\).
*   **Energy levels, hydrogen spectrum:** Bohr's model successfully predicted the energy levels of the hydrogen atom (\\(E_n = -13.6/n^2 \\text{ eV}\\)) and explained the different spectral series (Lyman, Balmer, Paschen, etc.) as transitions between these levels.

### 5.2 Nuclei (அணுக்கருக்கள்)
*   **Composition and size of nucleus:** The nucleus is composed of protons and neutrons (collectively called nucleons). Its size is very small, with a radius given by \\(R = R_0A^{1/3}\\), where A is the mass number. This implies that the nuclear density is nearly constant for all nuclei.
*   **Atomic masses, isotopes, isobars; isotones:**
    *   **Isotopes:** Same atomic number (Z), different mass number (A).
    *   **Isobars:** Same A, different Z.
    *   **Isotones:** Same number of neutrons (A-Z).
*   **Mass-energy relation and mass defect (நிறை-ஆற்றல் தொடர்பு, நிறை வழு):** Einstein's equation \\(E = mc^2\\) shows that mass and energy are equivalent. The **mass defect** (Δm) is the difference between the actual mass of a nucleus and the sum of the masses of its constituent free nucleons.
*   **Binding energy (பிணைப்பு ஆற்றல்):** The energy equivalent of the mass defect (\\(E_b = \\Delta m c^2\\)). It represents the energy required to break the nucleus into its constituent nucleons.
*   **Binding energy per nucleon and its variation:** A plot of binding energy per nucleon versus mass number shows the relative stability of nuclei. The curve peaks around A=56 (Iron), indicating maximum stability.
*   **Nuclear fission and fusion (அணுக்கரு பிளவு மற்றும் இணைவு):**
    *   **Fission:** The process where a heavy nucleus (like Uranium-235) splits into two or more lighter nuclei, releasing a huge amount of energy. This is the principle of nuclear reactors.
    *   **Fusion:** The process where two or more light nuclei combine to form a heavier nucleus, also releasing enormous energy. This is the energy source of the Sun and other stars.

# 6. Worked Examples

**1. Easy:** Calculate the energy equivalent of 1 g of substance.
*   **Solution:**
    *   Using Einstein's mass-energy equivalence relation, \\(E = mc^2\\).
    *   Given m = 1 g = 1 × 10⁻³ kg, and c = 3 × 10⁸ m/s.
    *   \\(E = (1 \\times 10^{-3} \\text{ kg}) \\times (3 \\times 10^8 \\text{ m/s})^2 = (1 \\times 10^{-3}) \\times (9 \\times 10^{16}) \\text{ J} = 9 \\times 10^{13} \\text{ J}\\).

**2. Medium:** The half-life of a radioactive substance is 30 days. What is the time taken for 3/4th of its original mass to disintegrate?
*   **Solution:**
    1.  Disintegration of 3/4th of the original mass means 1/4th of the mass is remaining (N = N₀/4).
    2.  We can use the relation \\(N = N_0 / 2^n\\), where n is the number of half-lives.
    3.  \\(N_0/4 = N_0 / 2^n \\implies 4 = 2^n \\implies n = 2\\).
    4.  So, the time taken is equal to two half-lives.
    5.  Time taken = \\(2 \\times T_{1/2} = 2 \\times 30 \\text{ days} = 60 \\text{ days}\\).

**3. Must-Practice:** Find the ratio of the radii of two nuclei with mass numbers 8 and 27.
*   **Solution:**
    *   The radius of a nucleus is given by \\(R = R_0A^{1/3}\\).
    *   So, \\(\\frac{R_1}{R_2} = \\frac{R_0A_1^{1/3}}{R_0A_2^{1/3}} = (\\frac{A_1}{A_2})^{1/3}\\).
    *   Given A₁ = 8 and A₂ = 27.
    *   \\(\\frac{R_1}{R_2} = (\\frac{8}{27})^{1/3} = \\frac{2}{3}\\). The ratio of their radii is 2:3.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( E_n = -\\frac{13.6}{n^2} \\text{ eV} \\) | Energy levels in Hydrogen atom (ஹைட்ரஜன் அணு ஆற்றல் மட்டங்கள்) |
| \\( R = R_0A^{1/3} \\) | Nuclear Radius (அணுக்கரு ஆரம்) |
| \\( E_b = \\Delta m c^2 \\) | Binding Energy (பிணைப்பு ஆற்றல்) |
| \\( N = N_0e^{-\\lambda t} \\) | Law of Radioactive Decay (கதிரியக்கச் சிதைவு விதி) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Binding Energy Curve</text>
    <text x="150" y="35" font-family="Verdana" font-size="10" text-anchor="middle" fill="gray">(பிணைப்பு ஆற்றல் வளைகோடு)</text>
    <path d="M 10 170 Q 30 140, 60 80 T 130 50 T 200 80 Q 250 100, 280 120" stroke="blue" stroke-width="2" fill="none"/>
    <line x1="10" y1="180" x2="290" y2="180" stroke="black" marker-end="url(#arrow)"/>
    <text x="280" y="195">A (Mass No.)</text>
    <line x1="10" y1="180" x2="10" y2="30" stroke="black" marker-end="url(#arrow)"/>
    <text x="0" y="40" font-size="10">B.E./A (MeV)</text>
    <circle cx="130" cy="50" r="3" fill="red"/>
    <text x="130" y="45" font-size="10" text-anchor="middle">Fe (Peak Stability)</text>
</svg>

\`\`\`
DIAGRAM: Binding Energy Curve (பிணைப்பு ஆற்றல் வளைகோடு)
Shows the binding energy per nucleon (B.E./A) plotted against the mass number (A).
The curve rises sharply, peaks around Iron (Fe), and then slowly decreases for heavier nuclei.
This peak represents the most stable nuclei.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** ஹைட்ரஜன் நிறமாலை வரிசைகள் (Hydrogen spectral series): **L**yman **B**almer **P**aschen **B**rackett **P**fund. মনে রাখতে: "**L**ovely **B**eautiful **P**rincess **B**rings **P**eace." (Lyman=UV, Balmer=Visible, others=Infrared).

> **NEET Hack:** During radioactive decay, remember what is emitted to quickly find the new nucleus:
> *   α-decay: Z decreases by 2, A decreases by 4.
> *   β⁻-decay: Z increases by 1, A is unchanged.
> *   β⁺-decay: Z decreases by 1, A is unchanged.

[Download PDF Summary of Atoms and Nuclei](/downloads/atoms-nuclei-summary.pdf)

# 9. Quiz Yourself
1.  What was the main shortcoming of Rutherford's atomic model, and how did Bohr's model address it?
2.  If the binding energy per nucleon of nucleus X is higher than that of nucleus Y, which nucleus is more stable?
3.  Why is a very high temperature required for nuclear fusion to occur, but not for nuclear fission?

> **Student Tip (மாணவர் கருத்து):** அணுக்கரு பிணைப்பு ஆற்றல் (binding energy) மற்றும் நிறை வழு (mass defect) கணக்குகளில் உங்களுக்கு குழப்பம் உள்ளதா? இந்த இரண்டு கருத்துக்களுக்கும் உள்ள தொடர்பை உங்கள் நண்பர்களுடன் விவாதிக்கவும்.

# 10. Next Steps & Community Discussion
– **Next Module:** Electronic Devices (மின்னணு சாதனங்கள்). We will see how our understanding of atoms and energy bands leads to the creation of semiconductors, diodes, and transistors - the building blocks of all modern electronics.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Nuclear fusion releases more energy per nucleon than fission. Why then are all current nuclear power plants based on fission and not fusion? Discuss the practical challenges on our forum.
`
  
}
