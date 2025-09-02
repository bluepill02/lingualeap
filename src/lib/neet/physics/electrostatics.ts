
import type { NeetModule } from '@/lib/types';

export const electrostatics: NeetModule = {
  id: 'physics-electrostatics',
  title: 'Electrostatics',
  chapter: 'Electrostatics',
  subject: 'Physics',
  conceptNotes: `
### 1. Electric Charge (மின்னூட்டம்)
*   Basic property of matter. Two types: positive and negative.
*   **Quantization of Charge:** Charge exists in discrete packets. q = ne, where n is an integer and e is the charge of an electron.
*   **Conservation of Charge:** The total charge of an isolated system is constant.

### 2. Coulomb's Law (கூலூம் விதி)
*   The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them. F = k |q₁q₂| / r², where k = 1 / (4πε₀).

### 3. Electric Field (மின்புலம்)
*   The space around a charge where its influence can be felt. E = F/q.
*   Electric field due to a point charge: E = kq / r².
*   **Electric Field Lines:** Imaginary lines used to represent an electric field. They start from positive charges and end at negative charges.

### 4. Electric Dipole (மின் இருமுனை)
*   A pair of equal and opposite charges separated by a small distance.
*   **Dipole Moment (p):** p = q × 2a. It's a vector quantity.
*   **Torque on a dipole in a uniform electric field:** τ = p × E = pEsinθ.

### 5. Electric Flux and Gauss's Law (மின்பாயம் மற்றும் காஸ் விதி)
*   **Electric Flux (Φ_E):** The total number of electric field lines passing through a surface. Φ_E = E ⋅ A = EAcosθ.
*   **Gauss's Law:** The total electric flux through a closed surface is 1/ε₀ times the net charge enclosed by the surface. Φ_E = q_enclosed / ε₀. This law is very useful for calculating the electric field for symmetric charge distributions.

### 6. Electric Potential (மின்னழுத்தம்)
*   The work done in moving a unit positive charge from infinity to a point in the electric field. V = W/q.
*   **Potential Difference:** The work done to move a unit charge from one point to another.
*   **Equipotential Surface:** A surface on which the potential is the same at all points. Electric field lines are always perpendicular to equipotential surfaces.

### 7. Capacitance (மின்தேக்குத்திறன்)
*   The ability of a conductor to store charge. C = Q/V. Unit: Farad (F).
*   **Parallel Plate Capacitor:** C = ε₀A/d.
*   **Capacitors in Series:** 1/C_eq = 1/C₁ + 1/C₂ + ...
*   **Capacitors in Parallel:** C_eq = C₁ + C₂ + ...
*   **Energy Stored in a Capacitor:** U = ½CV² = ½Q² / C = ½QV.
`,
  workedExamples: [
    {
        problem: "Two point charges of +2 μC and +6 μC repel each other with a force of 12 N. If a charge of -4 μC is given to each of these charges, what will be the new force?",
        solution: "Initially, F = k(q₁q₂)/r² = 12 N. So, 12 = k(2×6)/r² = 12k/r². This gives k/r² = 1. After adding -4 μC to each, the new charges are q₁' = 2-4 = -2 μC and q₂' = 6-4 = +2 μC. The new force F' = k(q₁'q₂')/r² = k(-2)(2)/r² = -4k/r². Since k/r² = 1, the new force F' = -4 N. The negative sign indicates that the force is now attractive."
    },
    {
        problem: "A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant 6?",
        solution: "The initial capacitance is C = ε₀A/d = 8 pF. The new distance is d' = d/2. The new dielectric constant is K = 6. The new capacitance C' = Kε₀A/d' = Kε₀A/(d/2) = 2K(ε₀A/d) = 2K * C. C' = 2 * 6 * 8 pF = 96 pF."
    },
    {
        problem: "Calculate the torque on an electric dipole of dipole moment 4 x 10⁻⁹ C m when it is placed in a uniform electric field of 5 x 10⁴ N/C at an angle of 30°.",
        solution: "The torque (τ) on a dipole is given by τ = pEsinθ. Given p = 4 x 10⁻⁹ C m, E = 5 x 10⁴ N/C, and θ = 30°. τ = (4 x 10⁻⁹) * (5 x 10⁴) * sin(30°). sin(30°) = 0.5. τ = (20 x 10⁻⁵) * 0.5 = 10 x 10⁻⁵ = 1 x 10⁻⁴ N m."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
