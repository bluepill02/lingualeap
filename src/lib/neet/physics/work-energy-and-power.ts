
import type { NeetModule } from '@/lib/types';

export const workEnergyAndPower: NeetModule = {
  id: 'physics-work-energy-and-power',
  title: 'Work, Energy, and Power (வேலை, ஆற்றல் மற்றும் திறன்)',
  chapter: 'Unit 4: Work, Energy, and Power',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Work (வேலை)
*   **Work done by a constant force and a variable force:** Work is done when a force causes displacement. For a constant force, it's the dot product \\( W = \\vec{F} \\cdot \\vec{d} = Fd\\cos{\\theta} \\). For a variable force, work is the area under the F-x graph, found by integration \\( W = \\int F dx \\).

### 5.2 Kinetic and Potential Energies (இயக்க மற்றும் நிலை ஆற்றல்)
*   **Kinetic Energy (K.E.):** This is the energy an object possesses due to its motion. It is calculated as \\( K.E. = \\frac{1}{2}mv^2 \\).
*   **Potential Energy (P.E.):** This is energy stored in a system due to its position or configuration. For gravity, it is \\(U = mgh\\).
*   **Potential energy of a spring:** A stretched or compressed spring stores potential energy given by \\(U = \\frac{1}{2}kx^2\\), where k is the spring constant.

### 5.3 Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்)
*   This fundamental theorem states that the work done by the net force on a body is equal to the change in its kinetic energy.
    \\[ W_{net} = \\Delta K.E. = K.E._f - K.E._i \\]

### 5.4 Power (திறன்)
*   Power is the rate at which work is done or energy is transferred.
    *   Average Power: \\(P_{avg} = \\frac{W}{t}\\)
    *   Instantaneous Power: \\(P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}\\)
*   Its SI unit is the Watt (W).

### 5.5 Conservation of Mechanical Energy
*   **Conservative and nonconservative forces:** A force is conservative if the work done by it is path-independent (e.g., gravity, spring force). A non-conservative force's work depends on the path (e.g., friction).
*   **Conservation of Mechanical Energy:** For a system under the action of only conservative forces, the total mechanical energy (sum of kinetic and potential energy) remains constant.
    \\[ K.E._i + P.E._i = K.E._f + P.E._f \\]
*   **Motion in a vertical circle:** A classic application where energy conservation is used to find minimum speeds at various points to complete the loop.

### 5.6 Collisions (மோதல்கள்)
*   **Elastic and inelastic collisions in one and two dimensions:** A collision is an event where bodies exert strong forces on each other for a short time. In any isolated collision, linear momentum is conserved.
    *   **Elastic Collision:** Kinetic energy is also conserved.
    *   **Inelastic Collision:** Kinetic energy is not conserved (some is lost as heat, sound, etc.).
`,
  workedExamples: [
    {
        problem: "A body of mass 5 kg is lifted vertically to a height of 10 m by a force of 100 N. Find the work done by the applied force and the work done by the gravitational force. (g = 10 m/s²)",
        solution: "Work done by the applied force (W_app) = F * d * cos(0°) = 100 N * 10 m * 1 = **1000 J**. Work done by the gravitational force (W_g) = F_g * d * cos(180°) = (mg) * d * (-1) = (5 * 10) * 10 * (-1) = **-500 J**."
    },
    {
        problem: "An engine pumps water continuously through a hose. Water leaves the hose with a velocity v and m is the mass per unit length of the water jet. What is the rate at which kinetic energy is imparted to the water?",
        solution: "1. The mass of water leaving the hose per second is \\(\\frac{dM}{dt}\\). 2. In one second, a length 'v' of water leaves the hose. The mass of this length is m*v. So, \\(\\frac{dM}{dt} = mv\\). 3. The rate at which kinetic energy is imparted is the power, \\(P = \\frac{d(K.E.)}{dt} = \\frac{d(\\frac{1}{2}Mv^2)}{dt}\\). 4. Since v is constant, \\(P = \\frac{1}{2}v^2 \\frac{dM}{dt} = \\frac{1}{2}v^2(mv) = \\frac{1}{2}mv^3\\)."
    },
    {
        problem: "A ball of mass 0.1 kg is dropped from a height of 10 m. It rebounds to a height of 5 m after hitting the ground. Calculate the loss of energy during the collision.",
        solution: "1.  Initial potential energy before dropping, \\(PE_i = mgh_1 = 0.1 \\times 10 \\times 10 = 10 \\text{ J}\\). This is the total mechanical energy before impact. 2.  Final potential energy after rebound, \\(PE_f = mgh_2 = 0.1 \\times 10 \\times 5 = 5 \\text{ J}\\). This is the total mechanical energy after impact. 3.  The loss of energy during the collision is the difference between the initial and final mechanical energy. 4.  Loss of energy = \\(PE_i - PE_f = 10 \\text{ J} - 5 \\text{ J} = 5 \\text{ J}\\). This energy is converted into heat and sound."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
