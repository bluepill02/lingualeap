
import type { NeetModule } from '@/lib/types';

export const workEnergyAndPower: NeetModule = {
  id: 'physics-work-energy-and-power',
  title: 'Work, Energy, and Power',
  chapter: 'Work, Energy, and Power',
  subject: 'Physics',
  conceptNotes: `
### 1. Work (வேலை)
*   Work is said to be done when a force applied to an object causes a displacement.
*   **Work done by a constant force:** W = F ⋅ d = Fdcosθ.
*   Work is a scalar quantity. Its SI unit is the Joule (J).
*   Work can be positive, negative, or zero.

### 2. Energy (ஆற்றல்)
*   The capacity to do work. It is a scalar quantity.
*   **Kinetic Energy (K.E.) (இயக்க ஆற்றல்):** The energy possessed by a body by virtue of its motion. K.E. = ½mv².
*   **Potential Energy (P.E.) (நிலை ஆற்றல்):** The energy possessed by a body by virtue of its position or configuration.
    *   **Gravitational Potential Energy:** U = mgh.
    *   **Elastic Potential Energy (in a spring):** U = ½kx².
*   **Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்):** The work done by the net force on an object is equal to the change in its kinetic energy. W_net = ΔK.E. = ½mv² - ½mu².

### 3. Conservation of Mechanical Energy (இயந்திர ஆற்றல் அழிவின்மை)
*   The total mechanical energy (sum of kinetic and potential energy) of a system is conserved if the forces doing work on it are conservative.
*   If only conservative forces (like gravity, spring force) are acting, K.E. + P.E. = constant.
*   Friction is a non-conservative force. Work done by friction is dissipated as heat.

### 4. Power (திறன்)
*   The rate at which work is done or energy is transferred.
*   **Average Power:** P_avg = Work / Time = W/t.
*   **Instantaneous Power:** P = dW/dt = F ⋅ v.
*   The SI unit of power is the Watt (W). 1 horsepower (hp) ≈ 746 W.

### 5. Collisions (மோதல்கள்)
*   **Elastic Collision (மீட்சி மோதல்):** Both momentum and kinetic energy are conserved.
*   **Inelastic Collision (மீட்சியற்ற மோதல்):** Momentum is conserved, but kinetic energy is not.
    *   **Perfectly Inelastic Collision:** The objects stick together after the collision. Maximum loss of kinetic energy occurs.
*   **Coefficient of Restitution (e):** e = (Relative velocity of separation) / (Relative velocity of approach).
    *   For a perfectly elastic collision, e = 1.
    *   For a perfectly inelastic collision, e = 0.
`,
  workedExamples: [
    {
        problem: "A body of mass 5 kg is lifted vertically to a height of 10 m by a force of 100 N. Find the work done by the applied force and the work done by the gravitational force. (g = 10 m/s²)",
        solution: "Work done by the applied force (W_app) = F * d * cos(0°) = 100 N * 10 m * 1 = 1000 J. Work done by the gravitational force (W_g) = F_g * d * cos(180°) = (mg) * d * (-1) = (5 * 10) * 10 * (-1) = -500 J. The negative sign indicates that the gravitational force is opposite to the direction of displacement."
    },
    {
        problem: "An engine pumps water continuously through a hose. Water leaves the hose with a velocity v and m is the mass per unit length of the water jet. What is the rate at which kinetic energy is imparted to the water?",
        solution: "The mass of water leaving the hose per second is (dm/dt). The velocity of this mass is v. The mass per unit length is m, so in one second, a length 'v' of water leaves the hose. The mass leaving per second is dm/dt = m*v. The rate at which kinetic energy is imparted is the power. Power = d(K.E.)/dt = d(½Mv²)/dt = ½(dm/dt)v² (since v is constant). Power = ½(mv)v² = ½mv³."
    },
    {
        problem: "A ball of mass 0.1 kg is dropped from a height of 10 m. It rebounds to a height of 5 m after hitting the ground. Calculate the loss of energy during the collision.",
        solution: "Initial potential energy before dropping, PE_i = mgh₁ = 0.1 * 10 * 10 = 10 J. Final potential energy after rebound, PE_f = mgh₂ = 0.1 * 10 * 5 = 5 J. The loss of energy during the collision is the difference between the initial and final mechanical energy. Loss of energy = PE_i - PE_f = 10 J - 5 J = 5 J. This energy is converted into heat and sound during the inelastic collision with the ground."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
