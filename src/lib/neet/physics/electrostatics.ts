
import type { NeetModule } from '@/lib/types';

export const electrostatics: NeetModule = {
  id: 'physics-electrostatics',
  title: 'Electrostatics (நிலைமின்னியல்)',
  chapter: 'Unit 11: Electrostatics',
  subject: 'Physics',
  conceptNotes: `
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
`,
  workedExamples: [
    {
        problem: "Two point charges of +2 μC and +6 μC repel each other with a force of 12 N. If a charge of -4 μC is given to each of these charges, what will be the new force?",
        solution: "Initially, \\(F = k \\frac{q_1q_2}{r^2} = 12 \\text{ N}\\). So, \\(12 = k\\frac{(2)(6)}{r^2} = \\frac{12k}{r^2}\\). This gives \\(k/r^2 = 1\\). New charges: \\(q'_1 = 2-4 = -2 \\mu C\\) and \\(q'_2 = 6-4 = +2 \\mu C\\). New force \\(F' = k \\frac{q'_1q'_2}{r^2} = k \\frac{(-2)(2)}{r^2} = -4\\frac{k}{r^2}\\). Since \\(k/r^2 = 1\\), the new force \\(F' = -4 \\text{ N}\\). The negative sign indicates the force is now attractive."
    },
    {
        problem: "A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant 6?",
        solution: "1.  The initial capacitance is \\(C = \\frac{\\epsilon_0 A}{d} = 8 \\text{ pF}\\). 2.  The new distance is \\(d' = d/2\\). The new dielectric constant is \\(K = 6\\). 3.  The new capacitance \\(C' = \\frac{K\\epsilon_0 A}{d'} = \\frac{K\\epsilon_0 A}{d/2} = 2K(\\frac{\\epsilon_0 A}{d}) = 2K \\times C\\). 4.  \\(C' = 2 \\times 6 \\times 8 \\text{ pF} = 96 \\text{ pF}\\)."
    },
    {
        problem: "Calculate the torque on an electric dipole of dipole moment 4 x 10⁻⁹ C m when it is placed in a uniform electric field of 5 x 10⁴ N/C at an angle of 30°.",
        solution: "The magnitude of the torque (τ) on a dipole is given by \\(\\tau = pE\\sin{\\theta}\\). Given \\(p = 4 \\times 10^{-9} \\text{ C m}\\), \\(E = 5 \\times 10^4 \\text{ N/C}\\), and \\(\\theta = 30°\\). \\(\\sin(30°) = 0.5\\). \\(\\tau = (4 \\times 10^{-9}) \\times (5 \\times 10^4) \\times 0.5\\). \\(\\tau = (20 \\times 10^{-5}) \\times 0.5 = 10 \\times 10^{-5} = 1 \\times 10^{-4} \\text{ N m}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
