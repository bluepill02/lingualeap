
import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
  id: 'physics-rotational-motion',
  title: 'Rotational Motion',
  chapter: 'Rotational Motion',
  subject: 'Physics',
  conceptNotes: `
### 1. Centre of Mass and Rotational Motion Basics (நிறை மையம் மற்றும் சுழற்சி இயக்க அடிப்படைகள்)
*   **Centre of the mass of a two-particle system:** The point that moves as though all of the system's mass were concentrated there. R_cm = (m₁r₁ + m₂r₂)/(m₁ + m₂).
*   **Centre of the mass of a rigid body:** The point where the entire mass of the body is assumed to be concentrated for describing its translational motion.
*   **Basic concepts of rotational motion:** Angular position (θ), angular velocity (ω), and angular acceleration (α).

### 2. Torque and Angular Momentum (திருப்புவிசை மற்றும் கோண உந்தம்)
*   **Moment of a force (Torque):** The turning effect of a force. It is the rotational analogue of force. **τ = r × F**.
*   **Angular momentum (L):** The rotational analogue of linear momentum. **L = r × p** for a point particle, and **L = Iω** for a rigid body.
*   **Conservation of angular momentum and its applications:** If the net external torque on a system is zero, its total angular momentum remains constant. (τ_ext = 0 ⇒ L = constant). This is seen in spinning ice skaters and planets orbiting the Sun.

### 3. Moment of Inertia and Rotational Dynamics (நிலைமத் திருப்புத்திறன் மற்றும் சுழற்சி இயக்கவியல்)
*   **Moment of inertia (I):** A measure of an object's resistance to changes in its rotational motion. It is the rotational analogue of mass. I = Σmᵢrᵢ².
*   **Radius of gyration (k):** The distance from the axis of rotation to a point where the total mass of the body is supposed to be concentrated. I = Mk².
*   **Values of moments of inertia for simple geometrical objects:** (e.g., ring, disc, rod, solid sphere, hollow sphere - memorizing these is crucial).
*   **Parallel and perpendicular axes theorems and their applications:**
    *   **Perpendicular Axis Theorem (for planar bodies):** I_z = I_x + I_y.
    *   **Parallel Axis Theorem:** I = I_cm + Md².
*   **Equilibrium of rigid bodies:** For translational equilibrium, ΣF_ext = 0. For rotational equilibrium, Στ_ext = 0.
*   **Rigid body rotation and equations of rotational motion (for constant α):**
    *   ω = ω₀ + αt
    *   θ = ω₀t + ½αt²
    *   ω² = ω₀² + 2αθ
*   **Comparison of linear and rotational motions:** Analogies between linear variables (x, v, a, m, F, p) and rotational variables (θ, ω, α, I, τ, L).
`,
  workedExamples: [
    {
        problem: "A solid sphere of mass 2 kg and radius 0.1 m is rotating about its diameter with an angular velocity of 10 rad/s. Find its rotational kinetic energy.",
        solution: "The moment of inertia of a solid sphere about its diameter is I = (2/5)MR². I = (2/5) * (2 kg) * (0.1 m)² = (2/5) * 2 * 0.01 = 0.008 kg·m². The rotational kinetic energy is K_rot = ½Iω². K_rot = ½ * (0.008) * (10)² = ½ * 0.008 * 100 = 0.4 J."
    },
    {
        problem: "The angular momentum of a body changes from 20 kg·m²/s to 40 kg·m²/s in 4 seconds. Find the torque acting on it.",
        solution: "Torque is the rate of change of angular momentum. τ = ΔL / Δt. ΔL = L_final - L_initial = 40 - 20 = 20 kg·m²/s. Δt = 4 s. τ = 20 / 4 = 5 N·m."
    },
    {
        problem: "A solid cylinder rolls down an inclined plane of height h without slipping. What is its velocity at the bottom?",
        solution: "By conservation of energy, the initial potential energy is converted into translational and rotational kinetic energy. Mgh = ½Mv² + ½Iω². For a solid cylinder, I = ½MR². For pure rolling, v = Rω, so ω = v/R. Mgh = ½Mv² + ½(½MR²)(v/R)² = ½Mv² + ¼Mv² = ¾Mv². gh = ¾v². v = √(4gh/3)."
    }
  ],
  mcqs: [
    {
        question: "The rotational analogue of mass in linear motion is:",
        options: ["Torque", "Angular momentum", "Moment of inertia", "Angular velocity"],
        answer: "Moment of inertia",
        explanation: "Moment of inertia (I) is the measure of an object's resistance to angular acceleration, just as mass is the resistance to linear acceleration."
    },
    {
        question: "A flywheel rotating at 120 rpm is brought to rest in 10 seconds. The angular retardation is:",
        options: ["2π rad/s²", "0.4π rad/s²", "π rad/s²", "4π rad/s²"],
        answer: "0.4π rad/s²",
        explanation: "Initial angular velocity ω₀ = 120 rpm = 120 * 2π/60 = 4π rad/s. Final ω = 0. Using ω = ω₀ + αt, 0 = 4π + α(10). α = -4π/10 = -0.4π rad/s². The retardation is 0.4π rad/s²."
    },
    {
        question: "The radius of gyration of a solid sphere of radius R about its diameter is:",
        options: ["R", "R/√2", "√(2/5) R", "√(3/5) R"],
        answer: "√(2/5) R",
        explanation: "Moment of inertia I = MK². For a solid sphere, I = (2/5)MR². So, MK² = (2/5)MR², which gives K = √(2/5) R."
    },
    {
        question: "If the net external torque on a system is zero, which of the following will be conserved?",
        options: ["Force", "Linear momentum", "Angular momentum", "Kinetic energy"],
        answer: "Angular momentum",
        explanation: "This is the principle of conservation of angular momentum (τ = dL/dt)."
    },
    {
        question: "The moment of inertia of a body does not depend upon:",
        options: ["The mass of the body", "The axis of rotation", "The angular velocity of the body", "The distribution of mass"],
        answer: "The angular velocity of the body",
        explanation: "Moment of inertia is an intrinsic property of the body and its axis of rotation, independent of its state of motion."
    },
    {
        question: "A solid cylinder of mass M and radius R rolls without slipping down an inclined plane of height h. The kinetic energy of the cylinder at the bottom is:",
        options: ["Mgh", "½ Mgh", "¾ Mgh", "5/7 Mgh"],
        answer: "Mgh",
        explanation: "By conservation of energy, the total kinetic energy (translational + rotational) at the bottom is equal to the initial potential energy, which is Mgh."
    },
    {
        question: "The relation between linear velocity (v) and angular velocity (ω) is:",
        options: ["v = ω × r", "ω = v × r", "r = v × ω", "v = ω ⋅ r"],
        answer: "v = ω × r",
        explanation: "This is the vector relationship between linear and angular velocity."
    },
    {
        question: "A ballet dancer spins with her arms outstretched. When she folds her arms, her:",
        options: ["Moment of inertia decreases", "Angular velocity decreases", "Angular momentum increases", "Rotational kinetic energy is conserved"],
        answer: "Moment of inertia decreases",
        explanation: "By folding her arms, she brings her mass closer to the axis of rotation, which decreases her moment of inertia. By conservation of angular momentum (L=Iω), her angular velocity (ω) must increase."
    },
    {
        question: "Which of the following has the largest moment of inertia for the same mass M and radius R, about an axis through its center?",
        options: ["A solid sphere", "A hollow sphere", "A solid cylinder", "A circular ring"],
        answer: "A circular ring",
        explanation: "The moments of inertia are: Ring (MR²), Hollow Sphere (2/3 MR²), Solid Cylinder (1/2 MR²), Solid Sphere (2/5 MR²). MR² is the largest value."
    },
    {
        question: "The dimensional formula for torque is:",
        options: ["[MLT⁻²]", "[ML²T⁻²]", "[ML²T⁻¹]", "[MLT⁻¹]"],
        answer: "[ML²T⁻²]",
        explanation: "Torque = Force × distance. Dimensions are [MLT⁻²] × [L] = [ML²T⁻²]."
    },
    {
        question: "When a body is rolling without slipping, the ratio of its rotational kinetic energy to its total kinetic energy is (for a solid sphere):",
        options: ["2/7", "5/7", "2/5", "3/5"],
        answer: "2/7",
        explanation: "For a solid sphere, I = 2/5 MR². K_rot = ½Iω² = ½(2/5 MR²)ω² = 1/5 M(Rω)² = 1/5 Mv². K_total = K_trans + K_rot = ½Mv² + 1/5 Mv² = 7/10 Mv². Ratio = (1/5 Mv²) / (7/10 Mv²) = 2/7."
    },
    {
        question: "The perpendicular axis theorem is applicable for:",
        options: ["Any rigid body", "Only spherical bodies", "Only planar bodies (laminas)", "Only linear bodies"],
        answer: "Only planar bodies (laminas)",
        explanation: "The perpendicular axis theorem (I_z = I_x + I_y) is valid only for two-dimensional or planar bodies."
    },
    {
        question: "The angular momentum is directed:",
        options: ["Along the radius", "Tangent to the path", "Along the axis of rotation", "Opposite to the velocity"],
        answer: "Along the axis of rotation",
        explanation: "Angular momentum (L = r × p) is an axial vector, and its direction is given by the right-hand rule, which is along the axis of rotation."
    },
    {
        question: "A wheel starts from rest and acquires an angular velocity of 20 rad/s in 5 seconds. The angular acceleration is:",
        options: ["2 rad/s²", "4 rad/s²", "10 rad/s²", "100 rad/s²"],
        answer: "4 rad/s²",
        explanation: "α = (ω_f - ω_i)/t = (20 - 0)/5 = 4 rad/s²."
    },
    {
        question: "If a body is rotating about an axis passing through its center of mass, the angular momentum is directed along the:",
        options: ["Radius", "Tangent", "Axis of rotation", "None of these"],
        answer: "Axis of rotation",
        explanation: "As an axial vector, its direction is along the axis."
    },
    {
        question: "The center of mass of a system of particles does not depend on:",
        options: ["Masses of the particles", "Positions of the particles", "Relative distances between particles", "Forces acting on the particles"],
        answer: "Forces acting on the particles",
        explanation: "The center of mass is a geometric property of the mass distribution, independent of the forces acting on the system."
    },
    {
        question: "The work done by a torque is:",
        options: ["τ × θ", "τ ⋅ θ", "τ / θ", "τ² θ"],
        answer: "τ ⋅ θ",
        explanation: "The work done by a torque τ through an angular displacement θ is W = τθ (for constant torque)."
    },
    {
        question: "A couple produces:",
        options: ["Purely linear motion", "Purely rotational motion", "Both linear and rotational motion", "No motion"],
        answer: "Purely rotational motion",
        explanation: "A couple consists of two equal and opposite forces that are not collinear. The net force is zero (no linear motion), but the net torque is non-zero, causing rotation."
    },
    {
        question: "The unit of moment of inertia is:",
        options: ["kg/m²", "kg m", "kg m²", "kg/m"],
        answer: "kg m²",
        explanation: "From I = Σmr², the SI unit is kg⋅m²."
    },
    {
        question: "For a body in pure rotational motion, all its particles move in:",
        options: ["Straight lines", "Parabolas", "Circles", "Ellipses"],
        answer: "Circles",
        explanation: "In pure rotation, every particle of the rigid body moves in a circle, with the center of the circle lying on the axis of rotation."
    },
    {
        question: "The product of the moment of inertia and angular velocity is:",
        options: ["Force", "Torque", "Angular momentum", "Work"],
        answer: "Angular momentum",
        explanation: "L = Iω is the definition of angular momentum for a rigid body."
    },
    {
        question: "The condition for a body to be in rotational equilibrium is that:",
        options: ["The net force is zero", "The net torque is zero", "The angular velocity is zero", "The angular acceleration is constant"],
        answer: "The net torque is zero",
        explanation: "Rotational equilibrium means the angular acceleration is zero, which implies the net external torque is zero."
    },
    {
        question: "A particle performs uniform circular motion with an angular momentum L. If its angular frequency is doubled and its kinetic energy is halved, then the new angular momentum is:",
        options: ["L/2", "L/4", "2L", "4L"],
        answer: "L/4",
        explanation: "K.E. = ½Iω². L = Iω. So, K.E. = ½(L/ω)ω² = ½Lω. L = 2K.E./ω. New K' = K/2, new ω' = 2ω. L' = 2K'/ω' = 2(K/2)/(2ω) = K/(2ω) = (½Lω)/(2ω) = L/4."
    },
    {
        question: "A rope is wound around a hollow cylinder of mass 3 kg and radius 40 cm. What is the angular acceleration of the cylinder if the rope is pulled with a force of 30 N?",
        options: ["25 rad/s²", "0.25 rad/s²", "25 m/s²", "5 m/s²"],
        answer: "25 rad/s²",
        explanation: "Torque τ = Iα. Also τ = F × R. For a hollow cylinder, I = MR². So, FR = MR²α. F = MRα. α = F/(MR) = 30 / (3 * 0.4) = 30 / 1.2 = 25 rad/s²."
    },
    {
        question: "The center of mass of a uniform semi-circular disc of radius R lies at a distance of ____ from the center.",
        options: ["4R/3π", "3R/4π", "2R/π", "R/2"],
        answer: "4R/3π",
        explanation: "This is a standard result for the center of mass of a semi-circular lamina, along the axis of symmetry."
    }
  ],
  assertionReasons: [
    {
        assertion: "The center of mass of a rigid body may lie outside the body.",
        reason: "The center of mass of a uniform ring is at its center, which is outside the material of the body.",
        answer: "A",
        explanation: "The reason provides a perfect example (a ring or a boomerang) to prove the assertion."
    },
    {
        assertion: "If a body is in rotational equilibrium, it must also be in translational equilibrium.",
        reason: "For rotational equilibrium, the net torque must be zero.",
        answer: "D",
        explanation: "Assertion is false. A body can be in rotational equilibrium (Στ=0) but not translational equilibrium (ΣF≠0), e.g., a wheel spinning down while falling. The reason is a true statement."
    },
    {
        assertion: "Torque is the rotational analogue of force.",
        reason: "Torque is given by the cross product of the position vector and the force vector.",
        answer: "B",
        explanation: "Both statements are true. The first is a conceptual analogy, and the second is the mathematical definition. The definition doesn't fully 'explain' the analogy, but they are both correct and related statements."
    },
    {
        assertion: "A ballet dancer can increase her angular speed by folding her arms.",
        reason: "This is due to the conservation of angular momentum.",
        answer: "A",
        explanation: "By folding her arms, she decreases her moment of inertia (I). Since angular momentum (L=Iω) is conserved, her angular speed (ω) must increase. The reason explains the assertion."
    },
    {
        assertion: "The moment of inertia of a body depends on the axis of rotation.",
        reason: "Moment of inertia is the sum of the product of the mass of each particle and the square of its distance from the axis of rotation.",
        answer: "A",
        explanation: "The reason correctly defines the moment of inertia (I = Σmr²), which clearly shows its dependence on the distance (r) from the axis of rotation."
    },
    {
        assertion: "The kinetic energy of a body in pure rolling motion is the sum of its translational and rotational kinetic energies.",
        reason: "The condition for pure rolling is v_cm = Rω.",
        answer: "B",
        explanation: "Both statements are true. The first defines the total kinetic energy in rolling. The second gives the condition for pure rolling. They are both correct statements about rolling but the reason doesn't explain the assertion."
    },
    {
        assertion: "The parallel axis theorem is applicable to any rigid body.",
        reason: "It states that I = I_cm + Md².",
        answer: "B",
        explanation: "The assertion is true, and the reason gives the correct formula. However, the formula is the statement of the theorem, not the reason why it's applicable. It's applicable because of the mathematical derivation based on the definition of moment of inertia."
    },
    {
        assertion: "If angular momentum is conserved, then the net external torque is zero.",
        reason: "Torque is equal to the rate of change of angular momentum.",
        answer: "A",
        explanation: "The reason (τ = dL/dt) correctly explains the assertion. If L is conserved (constant), then dL/dt must be zero, meaning the net torque is zero."
    },
    {
        assertion: "A solid sphere and a hollow sphere of the same mass and radius are allowed to roll down an incline. The solid sphere will reach the bottom first.",
        reason: "The solid sphere has a smaller moment of inertia than the hollow sphere.",
        answer: "A",
        explanation: "Acceleration down an incline is a = gsinθ / (1 + I/MR²). A smaller moment of inertia (I) leads to a larger acceleration. The reason correctly states that the solid sphere has a smaller I, which explains why it reaches the bottom first."
    },
    {
        assertion: "The angular velocity of a particle in uniform circular motion is constant.",
        reason: "The speed of the particle is constant.",
        answer: "D",
        explanation: "Assertion is false. The angular velocity *vector* is constant in direction (along the axis) but can change if the rotation speeds up or slows down. In *uniform* circular motion, its magnitude is constant, but the vector nature is key. A better way to state this: Assertion is true, the angular velocity vector is constant. Reason is true, speed is constant. BUT this is not a full explanation. The vector is constant because direction and magnitude are constant. Let's rephrase. Assertion: The *magnitude* of angular velocity is constant. Reason is true, and they are directly related by v=ωr."
    },
    {
        assertion: "The center of mass of a two-particle system lies on the line joining the two particles.",
        reason: "The center of mass is a weighted average of the positions of the particles.",
        answer: "A",
        explanation: "The reason correctly defines the center of mass, which mathematically ensures it must lie on the line connecting the particles."
    },
    {
        assertion: "The perpendicular axis theorem states I_z = I_x + I_y.",
        reason: "It is applicable only for three-dimensional bodies.",
        answer: "C",
        explanation: "The assertion is a correct statement of the theorem. The reason is false; it is applicable only for planar (2D) bodies."
    },
    {
        assertion: "Torque has the same dimensions as work.",
        reason: "Torque and work are both measured in Joules.",
        answer: "C",
        explanation: "Assertion is true. Both have dimensions [ML²T⁻²]. Reason is false. The SI unit of work is Joule, but the unit of torque is Newton-meter (N·m), which is dimensionally equivalent but kept distinct to represent its vector nature."
    },
    {
        assertion: "When a rigid body rotates, all its particles have the same angular velocity.",
        reason: "All particles of the body rotate through the same angle in the same time interval.",
        answer: "A",
        explanation: "The reason correctly explains the assertion. Since angular velocity ω = dθ/dt, if all particles have the same dθ in the same dt, their ω must be the same."
    },
    {
        assertion: "A body can be in translational equilibrium without being in rotational equilibrium.",
        reason: "For translational equilibrium, the net force must be zero.",
        answer: "B",
        explanation: "Both statements are true. A couple (two equal and opposite forces) results in zero net force (translational equilibrium) but a non-zero net torque (no rotational equilibrium). The reason is a correct definition but does not explain the assertion."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Moment of Inertia", "b) Torque", "c) Angular Momentum", "d) Angular Velocity"],
        column2: ["i) rad/s", "ii) N⋅m", "iii) kg⋅m²", "iv) kg⋅m²/s"],
        answer: "a-iii, b-ii, c-iv, d-i"
    },
    {
        column1: ["a) Ring (about axis)", "b) Disc (about axis)", "c) Solid Sphere (about diameter)", "d) Hollow Sphere (about diameter)"],
        column2: ["i) (2/5)MR²", "ii) MR²", "iii) (2/3)MR²", "iv) (1/2)MR²"],
        answer: "a-ii, b-iv, c-i, d-iii"
    },
    {
        column1: ["a) L = Iω", "b) τ = Iα", "c) K_rot = ½Iω²", "d) P = τω"],
        column2: ["i) Rotational Kinetic Energy", "ii) Rotational Power", "iii) Angular Momentum", "iv) Torque (Newton's 2nd law for rotation)"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) Parallel Axis Theorem", "b) Perpendicular Axis Theorem", "c) Conservation of L", "d) Rolling without slipping"],
        column2: ["i) I_z = I_x + I_y", "ii) v = Rω", "iii) I = I_cm + Md²", "iv) If τ_ext = 0"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Rotational analogue of Force", "b) Rotational analogue of Mass", "c) Rotational analogue of Momentum", "d) Rotational analogue of Velocity"],
        column2: ["i) Moment of Inertia", "ii) Angular Momentum", "iii) Angular Velocity", "iv) Torque"],
        answer: "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1: ["a) Center of mass of uniform rod", "b) Center of mass of uniform ring", "c) Center of mass of uniform disc", "d) Center of mass of solid hemisphere"],
        column2: ["i) Center", "ii) Center", "iii) Midpoint", "iv) 3R/8 from base"],
        answer: "a-iii, b-i, c-ii, d-iv"
    },
    {
        column1: ["a) dL/dt", "b) dθ/dt", "c) dω/dt", "d) dK/dt"],
        column2: ["i) Angular acceleration (α)", "ii) Power (P)", "iii) Torque (τ)", "iv) Angular velocity (ω)"],
        answer: "a-iii, b-iv, c-i, d-ii"
    },
    {
        column1: ["a) Linear Motion", "b) Rotational Motion", "c) Linear Variable", "d) Rotational Variable"],
        column2: ["i) Force (F)", "ii) Mass (m)", "iii) Torque (τ)", "iv) Moment of Inertia (I)"],
        answer: "a-i, b-iii, c-ii, d-iv"
    },
    {
        column1: ["a) Rolling KE of Disc", "b) Rolling KE of Sphere", "c) Rolling KE of Ring", "d) Translational KE"],
        column2: ["i) ½mv²", "ii) mv²", "iii) ¾mv²", "iv) 7/10 mv²"],
        answer: "a-iii, b-iv, c-ii, d-i"
    },
    {
        column1: ["a) Body speeds up", "b) Body slows down", "c) Constant angular velocity", "d) Reverses direction"],
        column2: ["i) α is opposite to ω", "ii) α = 0", "iii) α is in same direction as ω", "iv) ω becomes negative"],
        answer: "a-iii, b-i, c-ii, d-iv"
    },
    {
        column1: ["a) r × F", "b) r × p", "c) ω × r", "d) F × d"],
        column2: ["i) Angular Momentum (L)", "ii) Linear Velocity (v)", "iii) Work (Scalar)", "iv) Torque (τ)"],
        answer: "a-iv, b-i, c-ii, d-iii"
    },
    {
        column1: ["a) Radius of gyration (K)", "b) Angular Impulse", "c) Rotational Equilibrium", "d) Translational Equilibrium"],
        column2: ["i) ΣF_ext = 0", "ii) ΔL", "iii) Στ_ext = 0", "iv) √(I/M)"],
        answer: "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1: ["a) Speed at bottom of incline (Ring)", "b) Speed at bottom of incline (Disc)", "c) Speed at bottom of incline (Sphere)", "d) Body sliding without friction"],
        column2: ["i) √(10gh/7)", "ii) √(4gh/3)", "iii) √(2gh)", "iv) √(gh)"],
        answer: "a-iv, b-ii, c-i, d-iii"
    },
    {
        column1: ["a) I_z for a disc", "b) I_tangent for a disc", "c) I_diameter for a disc", "d) I_tangent for a ring"],
        column2: ["i) ¾ MR²", "ii) MR²/2", "iii) MR²/4", "iv) 3/2 MR²"],
        answer: "a-ii, b-i, c-iii, d-iv"
    },
    {
        column1: ["a) Vector", "b) Scalar", "c) Axial Vector", "d) Tensor"],
        column2: ["i) Moment of Inertia", "ii) Angular Velocity", "iii) Rotational Kinetic Energy", "iv) Work"],
        answer: "a-ii, b-iii, c-i, d-iv"
    }
  ]
};
