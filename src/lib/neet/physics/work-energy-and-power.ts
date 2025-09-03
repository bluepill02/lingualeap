
import type { NeetModule } from '@/lib/types';

export const workEnergyAndPower: NeetModule = {
  metadata: {
    id: 'physics-work-energy-and-power',
    title: 'Work, Energy, and Power (வேலை, ஆற்றல் மற்றும் திறன்)',
    chapter: 'Unit 4: Work, Energy, and Power',
    subject: 'Physics',
    glossary: [
      { English: 'Work', தமிழ்: 'வேலை' },
      { English: 'Kinetic Energy', தமிழ்: 'இயக்க ஆற்றல்' },
      { English: 'Potential Energy', தமிழ்: 'நிலை ஆற்றல்' },
      { English: 'Power', தமிழ்: 'திறன்' },
      { English: 'Collision', தமிழ்: 'மோதல்' }
    ],
    learningObjectives: [
      'Define work, energy, and power, and calculate the work done by constant and variable forces.',
      'Apply the work-energy theorem to relate the work done on a body to the change in its kinetic energy.',
      'Differentiate between conservative and non-conservative forces and apply the principle of conservation of mechanical energy.',
      'Analyze elastic and inelastic collisions in one and two dimensions using the principles of conservation of momentum and energy.'
    ],
    prerequisites: [
      "Newton's Laws of Motion.",
      "Understanding of vectors, including the dot product.",
      "Basic concepts of calculus (integration for variable force work)."
    ],
    conceptOverview: "Imagine lifting a heavy Kavadi (காவடி) during a Thaipusam festival. The effort you put in to lift it against gravity is **Work** (வேலை). The ability to do this work comes from your body's **Energy** (ஆற்றல்). How quickly you can lift it determines your **Power** (திறன்). This chapter connects these three fundamental concepts, showing how work is a means of energy transfer and how power is the rate of this transfer. We will explore how energy changes form but is never lost, a powerful idea that governs everything from simple machines to collisions.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 4: 'Work, Energy and Power'. The TN board book provides a solid foundation, while NEET will emphasize application-based problems involving the work-energy theorem and collisions.",
    studyTips: [
      {
        tip: "Clearly distinguish between the work done by different forces acting on a body (e.g., applied force, gravity, friction). The work-energy theorem applies to the work done by the *net* force.",
        NEET_Hack: "In collision problems, linear momentum is *always* conserved (for an isolated system). Kinetic energy is conserved *only* in elastic collisions. This distinction is the key to solving most collision questions."
      },
      {
        tip: "Remember that the work done by a conservative force (like gravity) is stored as potential energy and is recoverable.",
        NEET_Hack: "A negative sign for work done is very important. Work done by friction is always negative. Work done by gravity is negative when an object moves up."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Work, Energy, and Power (இயற்பியல் - வேலை, ஆற்றல் மற்றும் திறன்)

# 2. Learning Objectives
1.  After this, you will be able to define work, energy, and power, and calculate the work done by constant and variable forces.
2.  After this, you will be able to apply the work-energy theorem to relate the work done on a body to the change in its kinetic energy.
3.  After this, you will be able to differentiate between conservative and non-conservative forces and apply the principle of conservation of mechanical energy.
4.  After this, you will be able to analyze elastic and inelastic collisions in one and two dimensions using the principles of conservation of momentum and energy.

# 3. Prerequisites
– Newton's Laws of Motion.
– Understanding of vectors, including the dot product.
– Basic concepts of calculus (integration for variable force work).

# 4. Concept Overview
Imagine lifting a heavy Kavadi (காவடி) during a Thaipusam festival. The effort you put in to lift it against gravity is **Work** (வேலை). The ability to do this work comes from your body's **Energy** (ஆற்றல்). How quickly you can lift it determines your **Power** (திறன்). This chapter connects these three fundamental concepts, showing how work is a means of energy transfer and how power is the rate of this transfer. We will explore how energy changes form but is never lost, a powerful idea that governs everything from simple machines to collisions.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 4: 'Work, Energy and Power'**.

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

# 6. Worked Examples

**1. Easy:** A body of mass 5 kg is lifted vertically to a height of 10 m by a force of 100 N. Find the work done by the applied force and the work done by the gravitational force. (g = 10 m/s²)
*   **Solution:**
    *   Work done by the applied force (W_app) = F * d * cos(0°) = 100 N * 10 m * 1 = **1000 J**.
    *   Work done by the gravitational force (W_g) = F_g * d * cos(180°) = (mg) * d * (-1) = (5 * 10) * 10 * (-1) = **-500 J**.

**2. Medium:** An engine pumps water continuously through a hose. Water leaves the hose with a velocity v and m is the mass per unit length of the water jet. What is the rate at which kinetic energy is imparted to the water?
*   **Solution:**
    1. The mass of water leaving the hose per second is \\(\\frac{dM}{dt}\\).
    2. In one second, a length 'v' of water leaves the hose. The mass of this length is m*v. So, \\(\\frac{dM}{dt} = mv\\).
    3. The rate at which kinetic energy is imparted is the power, \\(P = \\frac{d(K.E.)}{dt} = \\frac{d(\\frac{1}{2}Mv^2)}{dt}\\).
    4. Since v is constant, \\(P = \\frac{1}{2}v^2 \\frac{dM}{dt} = \\frac{1}{2}v^2(mv) = \\frac{1}{2}mv^3\\).

**3. Must-Practice:** A ball of mass 0.1 kg is dropped from a height of 10 m. It rebounds to a height of 5 m after hitting the ground. Calculate the loss of energy during the collision.
*   **Solution:**
    1.  Initial potential energy before dropping, \\(PE_i = mgh_1 = 0.1 \\times 10 \\times 10 = 10 \\text{ J}\\). This is the total mechanical energy before impact.
    2.  Final potential energy after rebound, \\(PE_f = mgh_2 = 0.1 \\times 10 \\times 5 = 5 \\text{ J}\\). This is the total mechanical energy after impact.
    3.  The loss of energy during the collision is the difference between the initial and final mechanical energy.
    4.  Loss of energy = \\(PE_i - PE_f = 10 \\text{ J} - 5 \\text{ J} = 5 \\text{ J}\\). This energy is converted into heat and sound.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(W = \\vec{F} \\cdot \\vec{d}\\) | Work done by a constant force (மாறா விசையால் செய்யப்பட்ட வேலை) |
| \\(K.E. = \\frac{1}{2}mv^2\\) | Kinetic Energy (இயக்க ஆற்றல்) |
| \\(W_{net} = \\Delta K.E.\\) | Work-Energy Theorem (வேலை-ஆற்றல் தேற்றம்) |
| \\(P = \\vec{F} \\cdot \\vec{v}\\) | Instantaneous Power (உடனடித் திறன்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="30" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Conservation of Energy (ஆற்றல் அழிவின்மை)</text>
    <rect x="20" y="50" width="100" height="20" style="fill:lightblue;"/>
    <text x="70" y="65" font-family="Verdana" font-size="12" text-anchor="middle">PE</text>
    <rect x="180" y="50" width="100" height="20" style="fill:lightgreen;"/>
    <text x="230" y="65" font-family="Verdana" font-size="12" text-anchor="middle">KE</text>
    <text x="150" y="65" font-family="Verdana" font-size="16" text-anchor="middle">+</text>
    <text x="150" y="90" font-family="Verdana" font-size="16" text-anchor="middle">=</text>
    <rect x="100" y="110" width="100" height="20" style="fill:yellow;"/>
    <text x="150" y="125" font-family="Verdana" font-size="12" text-anchor="middle">Total Energy (Constant)</text>
    <text x="150" y="150" font-family="Verdana" font-size="10" text-anchor="middle">(மொத்த ஆற்றல் - மாறிலி)</text>
    <path d="M 70 80 C 70 110, 230 110, 230 80" stroke="blue" stroke-width="2" fill="none"/>
    <polygon points="65,80 75,80 70,70" style="fill:blue;" />
    <polygon points="225,80 235,80 230,70" style="fill:lightgreen;" />
</svg>

\`\`\`
DIAGRAM: Conservation of Energy (ஆற்றல் அழிவின்மை)
The total mechanical energy of a system is the sum of its Potential Energy (PE) and Kinetic Energy (KE). In the absence of non-conservative forces like friction, this total energy remains constant, though PE can convert into KE and vice versa.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** மோதல்களுக்கு (collisions), **உந்தம்** எப்போதும் மாறாது. **ஆற்றல்** மீட்சி (elastic) இருந்தால் மட்டுமே மாறாது. (For collisions, momentum is always conserved. Energy is conserved only if it is elastic).

> **NEET Hack:** For a body moving in a vertical circle, remember the minimum speeds required at different points: \\(v_{bottom} = \\sqrt{5gR}\\), \\(v_{mid} = \\sqrt{3gR}\\), and \\(v_{top} = \\sqrt{gR}\\). These are frequently asked.

[Download PDF Summary of Work, Energy, and Power](/downloads/work-energy-power-summary.pdf)

# 9. Quiz Yourself
1.  Is it possible for the kinetic energy of a body to be negative? Why or why not?
2.  A person carries a heavy suitcase and walks on a level road. What is the work done by the force of gravity on the suitcase?
3.  In a one-dimensional elastic collision of two equal masses, what happens to their velocities after the collision?

> **Student Tip (மாணவர் கருத்து):** ஆற்றல் அழிவின்மை விதியைப் பயன்படுத்தும் எந்த கணக்குகள் உங்களுக்கு குழப்பத்தை ஏற்படுத்துகின்றன? குறிப்பாக, உராய்வு (friction) இருக்கும்போது எப்படி கணக்கிடுவது? உங்கள் சந்தேகங்களைப் பகிர்ந்து கொள்ளுங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Rotational Motion (சுழற்சி இயக்கம்). We will extend the concepts of force, momentum, and energy to objects that are spinning or rotating.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If a light body and a heavy body have the same kinetic energy, which one has greater momentum? Discuss this classic problem on our forum.
`
};
