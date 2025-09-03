
import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
  metadata: {
    id: 'physics-rotational-motion',
    title: 'Rotational Motion (சுழற்சி இயக்கம்)',
    chapter: 'Unit 5: Rotational Motion',
    subject: 'Physics',
    glossary: [
      { English: 'Torque', தமிழ்: 'திருப்புவிசை' },
      { English: 'Angular Momentum', தமிழ்: 'கோண உந்தம்' },
      { English: 'Moment of Inertia', தமிழ்: 'நிலைமத் திருப்புத்திறன்' },
      { English: 'Centre of Mass', தமிழ்: 'நிறை மையம்' },
      { English: 'Rolling Motion', தமிழ்: 'உருளுதல் இயக்கம்' }
    ],
    learningObjectives: [
      'Define torque and angular momentum and apply the principle of conservation of angular momentum.',
      'Calculate the moment of inertia for simple geometrical objects using the parallel and perpendicular axes theorems.',
      'Apply the equations of rotational motion to solve problems involving rigid bodies.',
      'Analyze the dynamics of rolling motion and the energy distribution between translational and rotational kinetic energy.'
    ],
    prerequisites: [
      "Newton's Laws of Motion.",
      "Understanding of vectors, especially the cross product.",
      "Concepts of Work, Energy, and Power."
    ],
    conceptOverview": "Think of a spinning top (பம்பரம்) or the intricate movements of a Bharatanatyam (பரதநாட்டியம்) dancer. While a thrown ball follows a simple path, these objects are spinning. This chapter, Rotational Motion, introduces the physics of spinning objects. We will learn the rotational equivalents of force (Torque - திருப்புவிசை), mass (Moment of Inertia - நிலைமத் திருப்புத்திறன்), and momentum (Angular Momentum - கோண உந்தம்). Understanding these concepts will allow us to predict the motion of everything from a spinning wheel to a rotating planet.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 5: 'Motion of System of Particles and Rigid Bodies'. The TN board provides extensive derivations for moment of inertia. For NEET, it is crucial to memorize the final formulas for common shapes and master the application of the parallel and perpendicular axes theorems.",
    studyTips: [
      {
        tip: "Create a two-column table comparing linear motion quantities (x, v, a, m, F, p) with their rotational analogues (θ, ω, α, I, τ, L). This will help you quickly translate linear motion equations into rotational ones.",
        NEET_Hack: "For objects rolling down an incline, the one with the smallest moment of inertia (or smallest value of k²/R²) will reach the bottom first. A solid sphere (I=2/5 MR²) will always beat a disc (I=1/2 MR²) or a ring (I=MR²)."
      },
      {
        tip: "Master the right-hand rule to find the direction of vector quantities like torque (τ = r × F) and angular momentum (L = r × p).",
        NEET_Hack: "Questions on conservation of angular momentum are very common. Look for scenarios where the moment of inertia changes, like a spinning dancer pulling her arms in, or a planet moving closer to the sun. If external torque is zero, then I₁ω₁ = I₂ω₂."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Rotational Motion (இயற்பியல் - சுழற்சி இயக்கம்)

# 2. Learning Objectives
1.  After this, you will be able to define torque and angular momentum and apply the principle of conservation of angular momentum.
2.  After this, you will be able to calculate the moment of inertia for simple geometrical objects using the parallel and perpendicular axes theorems.
3.  After this, you will be able to apply the equations of rotational motion to solve problems involving rigid bodies.
4.  After this, you will be able to analyze the dynamics of rolling motion and the energy distribution between translational and rotational kinetic energy.

# 3. Prerequisites
– Newton's Laws of Motion.
– Understanding of vectors, especially the cross product.
– Concepts of Work, Energy, and Power.

# 4. Concept Overview
Think of a spinning top (பம்பரம்) or the intricate movements of a Bharatanatyam (பரதநாட்டியம்) dancer. While a thrown ball follows a simple path, these objects are spinning. This chapter, Rotational Motion, introduces the physics of spinning objects. We will learn the rotational equivalents of force (Torque - திருப்புவிசை), mass (Moment of Inertia - நிலைமத் திருப்புத்திறன்), and momentum (Angular Momentum - கோண உந்தம்). Understanding these concepts will allow us to predict the motion of everything from a spinning wheel to a rotating planet.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 5: 'Motion of System of Particles and Rigid Bodies'**.

### 5.1 Centre of Mass and Rotational Basics
*   **Centre of Mass (நிறை மையம்):** This is a unique point where the weighted relative position of the distributed mass sums to zero. It's the point that moves as if all the system's mass were concentrated there. For a two-particle system, \\[ R_{cm} = \\frac{m_1r_1 + m_2r_2}{m_1 + m_2} \\]. For a rigid body, it's a fixed point determined by its shape and mass distribution.
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

# 6. Worked Examples

**1. Easy:** A solid sphere of mass 2 kg and radius 0.1 m is rotating about its diameter with an angular velocity of 10 rad/s. Find its rotational kinetic energy.
*   **Solution:**
    1.  Moment of inertia of a solid sphere about its diameter is \\(I = \\frac{2}{5}MR^2\\).
    2.  \\(I = \\frac{2}{5} \\times (2 \\text{ kg}) \\times (0.1 \\text{ m})^2 = 0.008 \\text{ kg m}^2\\).
    3.  Rotational kinetic energy \\(K_{rot} = \\frac{1}{2}I\\omega^2\\).
    4.  \\(K_{rot} = \\frac{1}{2} \\times (0.008) \\times (10)^2 = 0.4 \\text{ J}\\).

**2. Medium:** The angular momentum of a body changes from 20 kg·m²/s to 40 kg·m²/s in 4 seconds. Find the torque acting on it.
*   **Solution:**
    *   Torque is the rate of change of angular momentum. \\(\\tau = \\frac{\\Delta L}{\\Delta t}\\).
    *   \\(\\Delta L = L_{final} - L_{initial} = 40 - 20 = 20 \\text{ kg m²/s}\\).
    *   \\(\\Delta t = 4 \\text{ s}\\).
    *   \\(\\tau = \\frac{20}{4} = 5 \\text{ Nm}\\).

**3. Must-Practice:** A solid cylinder rolls down an inclined plane of height h without slipping. What is its velocity at the bottom?
*   **Solution:**
    1.  By conservation of energy, the initial potential energy is converted into translational and rotational kinetic energy: \\(Mgh = K_{trans} + K_{rot}\\).
    2.  \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2\\).
    3.  For a solid cylinder, \\(I = \\frac{1}{2}MR^2\\). For pure rolling, \\(v = R\\omega\\), so \\(\\omega = v/R\\).
    4.  Substitute I and ω: \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{1}{2}MR^2)(\\frac{v}{R})^2 = \\frac{1}{2}Mv^2 + \\frac{1}{4}Mv^2 = \\frac{3}{4}Mv^2\\).
    5.  \\(gh = \\frac{3}{4}v^2 \\implies v = \\sqrt{\\frac{4gh}{3}}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( \\vec{\\tau} = \\vec{r} \\times \\vec{F} \\) | Torque (திருப்புவிசை) |
| \\( L = I\\omega \\) | Angular Momentum (கோண உந்தம்) |
| \\( I = I_{cm} + Md^2 \\) | Parallel Axis Theorem (இணை அச்சுத் தேற்றம்) |
| \\( I_z = I_x + I_y \\) | Perpendicular Axis Theorem (செங்குத்து அச்சுத் தேற்றம்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <circle cx="150" cy="100" r="50" stroke="blue" stroke-width="2" fill="lightblue" fill-opacity="0.3"/>
    <circle cx="150" cy="100" r="2" fill="black"/>
    <text x="150" y="95" font-size="12" text-anchor="middle">Axis (அச்சு)</text>
    <line x1="150" y1="100" x2="200" y2="100" stroke="black" marker-end="url(#arrow)"/>
    <text x="175" y="95" font-size="12" text-anchor="middle">r</text>
    <line x1="200" y1="100" x2="200" y2="60" stroke="red" marker-end="url(#arrow)"/>
    <text x="210" y="80" fill="red" font-size="12">v (velocity)</text>
    <path d="M 150,100 a 20,20 0 0,1 14,14" fill="none" stroke="purple" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="175" y="120" fill="purple" font-size="12">ω (angular velocity)</text>
    <text x="150" y="180" font-size="14" text-anchor="middle">Rotational Motion (சுழற்சி இயக்கம்)</text>
</svg>

\`\`\`
DIAGRAM: Rotational Motion (சுழற்சி இயக்கம்)
Shows a body rotating around an axis.
A point at radius 'r' has a tangential linear velocity 'v'.
The entire body rotates with an angular velocity 'ω'.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** திருப்புத்திறன் (Moment of Inertia) சூத்திரங்களை நினைவில் கொள்ள: மோதிரத்திற்கு (Ring) MR², தட்டுக்கு (Disc) அதில் பாதி (½MR²), கோளத்திற்கு (Solid Sphere) அதிலும் குறைவு (²/₅MR²). (To remember MI formulas: Ring is MR², disc is half of that, solid sphere is even less).

> **NEET Hack:** In problems where a rotating object's configuration changes (e.g., a person on a turntable extends their arms), immediately apply the conservation of angular momentum (I₁ω₁ = I₂ω₂). If the mass moves away from the axis, I increases and ω decreases, and vice versa.

[Download PDF Summary of Rotational Motion](/downloads/rotational-motion-summary.pdf)

# 9. Quiz Yourself
1.  Why is it easier to open a door by pushing on the handle far from the hinges rather than close to them?
2.  If the Earth were to suddenly shrink to half its current radius (with its mass remaining the same), what would happen to the length of the day?
3.  Why does a rolling object have more kinetic energy than a sliding object of the same mass and speed?

> **Student Tip (மாணவர் கருத்து):** நிலைமத் திருப்புத்திறன் (Moment of Inertia) கணக்குகளில் எந்த வடிவம் உங்களுக்கு மிகவும் கடினமாக உள்ளது? இணை அச்சு மற்றும் செங்குத்து அச்சுத் தேற்றங்களைப் பயன்படுத்துவதில் உள்ள உங்கள் சந்தேகங்களைப் பகிருங்கள்.

# 10. Next Steps & Community Discussion
– **Next Module:** Gravitation (ஈர்ப்பியல்). We will apply the principles of rotational motion to understand Kepler's laws and the motion of planets and satellites.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Is angular momentum always conserved? Discuss a real-world scenario where angular momentum is *not* conserved and explain what external torque is acting on the system.
`
  