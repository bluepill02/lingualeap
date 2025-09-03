
import type { NeetModule } from '@/lib/types';

export const electrostatics: NeetModule = {
  metadata: {
    id: 'physics-electrostatics',
    title: 'Electrostatics (நிலைமின்னியல்)',
    chapter: 'Unit 11: Electrostatics',
    subject: 'Physics',
    glossary: [
      { English: 'Electric Charge', தமிழ்: 'மின்னூட்டம்' },
      { English: 'Coulomb\'s Law', தமிழ்: 'கூலூம் விதி' },
      { English: 'Electric Field', தமிழ்: 'மின்புலம்' },
      { English: 'Gauss\'s Law', தமிழ்: 'காஸ் விதி' },
      { English: 'Capacitor', தமிழ்: 'மின்தேக்கி' }
    ],
    learningObjectives: [
      "State and apply Coulomb's Law and the principle of superposition to calculate forces between charges.",
      "Define electric field and potential, and calculate them for various charge distributions like dipoles and shells.",
      "Apply Gauss's law to find the electric field for symmetric charge distributions.",
      "Explain the behavior of dielectrics and calculate the capacitance of capacitor combinations and the energy they store."
    ],
    prerequisites: [
      "Understanding of vectors and basic calculus.",
      "Knowledge of forces from Newton's Laws.",
      "Concept of Work and Energy."
    ],
    conceptOverview: "Why does your hair sometimes stand on end when you comb it on a dry day, like during the cool Margazhi (மார்கழி) season in Tamil Nadu? The answer lies in static electricity, the same force that creates lightning. This chapter, **Electrostatics** (நிலைமின்னியல்), deals with the properties of charges at rest. We will explore the fundamental force between charges (Coulomb's Law), the concept of an electric field that surrounds them, and how we can store electrical energy in devices called capacitors—the basis of modern electronics.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 1: 'Electrostatics'. The TN board book is excellent for building strong fundamentals. For NEET, focus on the application of Gauss's law and problems related to capacitors and dipoles.",
    studyTips: [
      {
        tip: "Master the directions. The direction of electric field, dipole moment, and forces are crucial. Always draw a diagram to visualize the vectors before you start calculating.",
        NEET_Hack: "For problems involving a dielectric slab inserted into a capacitor, remember these two cases: 1) If the battery is disconnected, Q remains constant, V decreases, C increases. 2) If the battery remains connected, V remains constant, C increases, Q increases. This is a very common question type."
      },
      {
        tip: "Gauss's law is your best friend for symmetric charge distributions (sphere, cylinder, plane sheet). Don't try to use Coulomb's law integration where Gauss's law provides a simple solution.",
        NEET_Hack: "The electric field inside a charged conducting shell is always zero. This simple fact can be the direct answer to several NEET questions."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Electrostatics (இயற்பியல் - நிலைமின்னியல்)

# 2. Learning Objectives
1.  After this, you will be able to state and apply Coulomb's Law and the principle of superposition to calculate forces between charges.
2.  After this, you will be able to define electric field and potential, and calculate them for various charge distributions like dipoles and shells.
3.  After this, you will be able to apply Gauss's law to find the electric field for symmetric charge distributions.
4.  After this, you will be able to explain the behavior of dielectrics and calculate the capacitance of capacitor combinations and the energy they store.

# 3. Prerequisites
– Understanding of vectors and basic calculus.
– Knowledge of forces from Newton's Laws.
– Concept of Work and Energy.

# 4. Concept Overview
Why does your hair sometimes stand on end when you comb it on a dry day, like during the cool Margazhi (மார்கழி) season in Tamil Nadu? The answer lies in static electricity, the same force that creates lightning. This chapter, **Electrostatics** (நிலைமின்னியல்), deals with the properties of charges at rest. We will explore the fundamental force between charges (Coulomb's Law), the concept of an electric field that surrounds them, and how we can store electrical energy in devices called capacitors—the basis of modern electronics.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 1: 'Electrostatics'**.

### 5.1 Electric Charges and Fields (மின்னூட்டங்கள் மற்றும் மின்புலங்கள்)
*   **Charge Conservation (மின்னூட்ட அழிவின்மை):** The total electric charge in an isolated system remains constant. Charges are not created or destroyed, only transferred from one body to another.
*   **Coulomb’s Law (கூலூம் விதி):** This law quantifies the force between two stationary point charges. The force is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.
    \\[ F = k \\frac{|q_1 q_2|}{r^2} \\]
*   **Superposition Principle (மேற்பொருந்துதல் தத்துவம்):** The total force on any charge due to a number of other charges is the vector sum of all the forces on that charge due to the other charges, taken one at a time.
*   **Continuous Charge Distributions:** For charge distributed over a line, surface, or volume, we use integration to find the total force or field.
*   **Electric Field (மின்புலம்) and Field Lines:** The electric field is the region around a charge where another charge experiences a force. Electric field lines are imaginary curves that represent the direction and strength of the field.
*   **Electric Dipole (மின் இருமுனை):** A system of two equal and opposite charges separated by a small distance. The **dipole moment (p)** is a vector quantity pointing from the negative to the positive charge.
*   **Dipole Field and Torque:** An electric dipole experiences a **torque (τ = p × E)** in a uniform electric field, which tends to align it with the field. It also creates its own electric field, which can be calculated on its axial and equatorial lines.

### 5.2 Electric Flux and Gauss's Law (மின்பாயம் மற்றும் காஸ் விதி)
*   **Electric Flux (Φ_E):** A measure of the number of electric field lines passing through a given surface. It is the dot product of the electric field and the area vector.
*   **Gauss’s Law (காஸ் விதி):** This fundamental law states that the total electric flux through any closed surface is equal to 1/ε₀ times the net charge enclosed by the surface.
    \\[ \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\epsilon_0} \\]
*   **Applications:** Gauss's law is extremely useful for calculating the electric field for symmetric charge distributions like an infinitely long wire, a uniformly charged infinite plane sheet, and a uniformly charged thin spherical shell. For a spherical shell, the field inside is zero.

### 5.3 Electrostatic Potential and Capacitance (நிலைமின்னழுத்தம் மற்றும் மின்தேக்கம்)
*   **Electric Potential (V) (நிலைமின்னழுத்தம்):** The work done per unit positive charge in bringing it from infinity to a point in the electric field. It is a scalar quantity.
*   **Potential due to charges:** We can calculate the potential due to a point charge (V = kq/r), an electric dipole, and a system of multiple charges.
*   **Equipotential Surfaces (சமமின்னழுத்தப் பரப்புகள்):** Surfaces where the potential is the same at every point. The electric field is always perpendicular to these surfaces, and no work is done in moving a charge on them.
*   **Potential Energy (U):** The energy stored in a system of charges due to their positions. For a dipole in an external field, \\(U = -\\vec{p} \\cdot \\vec{E}\\).
*   **Conductors, Insulators, and Dielectrics:** Conductors allow charges to move freely, while insulators do not. Dielectrics are insulators that get polarized (develop an internal opposing field) when placed in an external electric field.
*   **Capacitors and Capacitance (C) (மின்தேக்கிகள்):** A capacitor is a device used to store electrical energy and charge. Its ability to store charge is measured by its capacitance, \\(C = Q/V\\).
*   **Parallel Plate Capacitor:** The capacitance is given by \\(C = \\frac{K\\epsilon_0A}{d}\\), where K is the dielectric constant of the medium between the plates.
*   **Combination of Capacitors:**
    *   In Series: \\(\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + ...\\)
    *   In Parallel: \\(C_{eq} = C_1 + C_2 + ...\\)
*   **Energy Stored in a Capacitor:** The energy stored in the electric field of a capacitor is given by \\(U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}\\).

# 6. Worked Examples

**1. Easy:** Two point charges of +2 μC and +6 μC repel each other with a force of 12 N. If a charge of -4 μC is given to each of these charges, what will be the new force?
*   **Solution:**
    *   Initially, \\(F = k \\frac{q_1q_2}{r^2} = 12 \\text{ N}\\). So, \\(12 = k\\frac{(2)(6)}{r^2} = \\frac{12k}{r^2}\\). This gives \\(k/r^2 = 1\\).
    *   New charges: \\(q'_1 = 2-4 = -2 \\mu C\\) and \\(q'_2 = 6-4 = +2 \\mu C\\).
    *   New force \\(F' = k \\frac{q'_1q'_2}{r^2} = k \\frac{(-2)(2)}{r^2} = -4\\frac{k}{r^2}\\).
    *   Since \\(k/r^2 = 1\\), the new force \\(F' = -4 \\text{ N}\\). The negative sign indicates the force is now attractive.

**2. Medium:** A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant 6?
*   **Solution:**
    1.  The initial capacitance is \\(C = \\frac{\\epsilon_0 A}{d} = 8 \\text{ pF}\\).
    2.  The new distance is \\(d' = d/2\\). The new dielectric constant is \\(K = 6\\).
    3.  The new capacitance \\(C' = \\frac{K\\epsilon_0 A}{d'} = \\frac{K\\epsilon_0 A}{d/2} = 2K(\\frac{\\epsilon_0 A}{d}) = 2K \\times C\\).
    4.  \\(C' = 2 \\times 6 \\times 8 \\text{ pF} = 96 \\text{ pF}\\).

**3. Must-Practice:** Calculate the torque on an electric dipole of dipole moment 4 x 10⁻⁹ C m when it is placed in a uniform electric field of 5 x 10⁴ N/C at an angle of 30°.
*   **Solution:**
    *   The magnitude of the torque (τ) on a dipole is given by \\(\\tau = pE\\sin{\\theta}\\).
    *   Given \\(p = 4 \\times 10^{-9} \\text{ C m}\\), \\(E = 5 \\times 10^4 \\text{ N/C}\\), and \\(\\theta = 30°\\).
    *   \\(\\sin(30°) = 0.5\\).
    *   \\(\\tau = (4 \\times 10^{-9}) \\times (5 \\times 10^4) \\times 0.5\\).
    *   \\(\\tau = (20 \\times 10^{-5}) \\times 0.5 = 10 \\times 10^{-5} = 1 \\times 10^{-4} \\text{ N m}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( F = k \\frac{|q_1 q_2|}{r^2} \\) | Coulomb's Law (கூலூம் விதி) |
| \\( \\Phi_E = \\frac{q_{enc}}{\\epsilon_0} \\) | Gauss's Law (காஸ் விதி) |
| \\( C = \\frac{K\\epsilon_0A}{d} \\) | Capacitance of Parallel Plate Capacitor |
| \\( U = \\frac{1}{2}CV^2 \\) | Energy Stored in a Capacitor |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="blue" />
        </marker>
    </defs>
    <circle cx="150" cy="100" r="10" fill="red"/>
    <text x="150" y="105" font-size="12" text-anchor="middle" fill="white">+q</text>
    <line x1="150" y1="100" x2="250" y2="100" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="50" y2="100" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="150" y2="20" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="150" y2="180" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="220" y2="30" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="80" y2="170" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="220" y2="170" stroke="blue" marker-end="url(#arrow)" />
    <line x1="150" y1="100" x2="80" y2="30" stroke="blue" marker-end="url(#arrow)" />
    <text x="150" y="195" font-size="12" text-anchor="middle">Electric Field Lines from a Point Charge</text>
    <text x="150" y="10" font-size="10" text-anchor="middle">(புள்ளி மின்னூட்டத்தின் மின்புலக் கோடுகள்)</text>
</svg>

\`\`\`
DIAGRAM: Electric Field Lines from a Point Charge (புள்ளி மின்னூட்டத்தின் மின்புலக் கோடுகள்)
Shows a positive point charge (+q) at the center.
Electric field lines are radiating outwards, showing the direction of the force on a positive test charge.
The lines are straight and point away from the positive charge.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** மின்தேக்கி தொடரிணைப்பு (Capacitors in Series) மின்தடைக்கு (resistor) எதிரானது. மின்தடையை தொடரில் கூட்ட வேண்டும் (R = R₁ + R₂). ஆனால், மின்தேக்கியை தொடரில் தலைகீழாகக் கூட்ட வேண்டும் (1/C = 1/C₁ + 1/C₂). (Capacitors in Series is the opposite of resistors. Resistors add directly in series, but capacitors add inversely in series).

> **NEET Hack:** For questions asking for the field or potential due to a dipole at a general point, if the point is far away (r >> a), remember the dependencies: \\(E \\propto 1/r³\\) and \\(V \\propto 1/r²\\). This can help you eliminate options quickly.

[Download PDF Summary of Electrostatics](/downloads/electrostatics-summary.pdf)

# 9. Quiz Yourself
1.  Why do electric field lines never cross each other?
2.  A comb run through dry hair attracts small pieces of paper. Why? What happens if the hair is oily?
3.  Why is it safer to be inside a car during a thunderstorm?

> **Student Tip (மாணவர் கருத்து):** காஸ் விதியின் பயன்பாடுகள் (applications of Gauss's law) உங்களுக்கு கடினமாக உள்ளதா? எந்த வடிவத்திற்கு (sphere, wire, sheet) மின்புலம் கணக்கிடுவது குழப்பமாக உள்ளது? உங்கள் சந்தேகங்களை இங்கே கேளுங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Current Electricity (மின்னோட்டவியல்). We will move from charges at rest to the physics of charges in motion.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If the distance between two charges is doubled, the force becomes one-fourth. If three charges are arranged in a triangle, how do you find the net force on one of them? Discuss the vector nature of Coulomb's law on our forum.
`
  
}
