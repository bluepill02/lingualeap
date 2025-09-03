
import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
  id: 'physics-rotational-motion',
  title: 'Rotational Motion (சுழற்சி இயக்கம்)',
  chapter: 'Unit 5: Rotational Motion',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Centre of Mass and Rotational Basics
*   **Centre of Mass (நிறை மையம்):** This is a unique point where the weighted relative position of the distributed mass sums to zero. It's the point that moves as if all the system's mass were concentrated there. For a two-particle system, \\\\[ R_{cm} = \\frac{m_1r_1 + m_2r_2}{m_1 + m_2} \\\\]. For a rigid body, it's a fixed point determined by its shape and mass distribution.
*   **Basic concepts of rotational motion:** We use angular variables to describe rotation.
    *   Angular Position (θ): Angle in radians.
    *   Angular Velocity (ω): Rate of change of angular position (ω = dθ/dt).
    *   Angular Acceleration (α): Rate of change of angular velocity (α = dω/dt).

### 5.2 Torque and Angular Momentum (திருப்புவிசை மற்றும் கோண உந்தம்)
*   **Moment of a force (Torque, τ):** The turning effect of a force, which is the rotational analogue of force. It is defined by the cross product of the position vector (r) and the force (F).
    \\[ \\vec{\\tau} = \\vec{r} \\times \\vec{F} \\]
*   **Angular momentum (L):** The rotational analogue of linear momentum. For a point particle, it is defined by the cross product of the position vector (r) and the linear momentum (p). For a rigid body, it is the product of its moment of inertia and angular velocity.
    \\[ \\vec{L} = \\vec{r} \\times \\vec{p} \\]
    \\[ L = I\\omega \\]
*   **Conservation of angular momentum:** If the net external torque on a system is zero, its total angular momentum remains constant. This is why a spinning ice skater speeds up when she pulls her arms in (decreasing I, thus increasing ω).

### 5.3 Moment of Inertia and Rotational Dynamics
*   **Moment of inertia (I) (நிலைமத் திருப்புத்திறன்):** A measure of an object's resistance to angular acceleration. It is the rotational analogue of mass and depends on the mass of the body and the distribution of the mass about the axis of rotation (I = Σmᵢrᵢ²).
*   **Radius of gyration (k):** The distance from the axis of rotation to a point where the body's entire mass could be concentrated without changing its moment of inertia. \\(I = Mk²\\).
*   **Theorems of moment of inertia:**
    *   **Perpendicular Axis Theorem (for planar bodies):** \\(I_z = I_x + I_y\\).
    *   **Parallel Axis Theorem:** \\(I = I_{cm} + Md²\\), where I_cm is the moment of inertia about a parallel axis through the center of mass.
*   **Equilibrium of rigid bodies:** For complete equilibrium, both the net external force and the net external torque on the body must be zero. (ΣF_ext = 0 and Στ_ext = 0).
*   **Equations of rotational motion (for constant α):** These are analogous to the linear equations of motion.
    \\[ \\omega = \\omega_0 + \\alpha t \\]
    \\[ \\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 \\]
    \\[ \\omega^2 = \\omega_0^2 + 2\\alpha \\theta \\]
`,
  workedExamples: [
    {
        problem: "A solid sphere of mass 2 kg and radius 0.1 m is rotating about its diameter with an angular velocity of 10 rad/s. Find its rotational kinetic energy.",
        solution: "1.  Moment of inertia of a solid sphere about its diameter is \\(I = \\frac{2}{5}MR^2\\). 2.  \\(I = \\frac{2}{5} \\times (2 \\text{ kg}) \\times (0.1 \\text{ m})^2 = 0.008 \\text{ kg m}^2\\). 3.  Rotational kinetic energy \\(K_{rot} = \\frac{1}{2}I\\omega^2\\). 4.  \\(K_{rot} = \\frac{1}{2} \\times (0.008) \\times (10)^2 = 0.4 \\text{ J}\\)."
    },
    {
        problem: "The angular momentum of a body changes from 20 kg·m²/s to 40 kg·m²/s in 4 seconds. Find the torque acting on it.",
        solution: "Torque is the rate of change of angular momentum. \\(\\tau = \\frac{\\Delta L}{\\Delta t}\\). \\(\\Delta L = L_{final} - L_{initial} = 40 - 20 = 20 \\text{ kg m²/s}\\). \\(\\Delta t = 4 \\text{ s}\\). \\(\\tau = \\frac{20}{4} = 5 \\text{ Nm}\\)."
    },
    {
        problem: "A solid cylinder rolls down an inclined plane of height h without slipping. What is its velocity at the bottom?",
        solution: "1.  By conservation of energy, the initial potential energy is converted into translational and rotational kinetic energy: \\(Mgh = K_{trans} + K_{rot}\\). 2.  \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2\\). 3.  For a solid cylinder, \\(I = \\frac{1}{2}MR^2\\). For pure rolling, \\(v = R\\omega\\), so \\(\\omega = v/R\\). 4.  Substitute I and ω: \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{1}{2}MR^2)(\\frac{v}{R})^2 = \\frac{1}{2}Mv^2 + \\frac{1}{4}Mv^2 = \\frac{3}{4}Mv^2\\). 5.  \\(gh = \\frac{3}{4}v^2 \\implies v = \\sqrt{\\frac{4gh}{3}}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
