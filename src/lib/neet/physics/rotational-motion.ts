
import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
    id: 'neet-physics-rotational-motion',
    title: 'Physics - System of Particles and Rotational Motion (துகள்களின் அமைப்பு மற்றும் சுழற்சி இயக்கம்)',
    chapter: 'System of Particles and Rotational Motion',
    subject: 'Physics',
    learningObjectives: [
        "Define and calculate the center of mass for discrete and continuous systems.",
        "Understand the concepts of torque and angular momentum and their relationship.",
        "Define moment of inertia and understand its role as rotational inertia.",
        "Apply the theorems of parallel and perpendicular axes to calculate moment of inertia.",
        "Analyze rotational kinematics and dynamics using equations analogous to linear motion.",
        "Apply the principle of conservation of angular momentum."
    ],
    prerequisites: [
        "Newton's Laws of Motion",
        "Work, Energy, and Power",
        "Vector cross product"
    ],
    conceptOverview: "This chapter extends the principles of mechanics from point masses to extended bodies and systems of particles. We introduce rotational motion, a new type of motion where an object spins about an axis. Key concepts like center of mass, torque, moment of inertia, and angular momentum are the rotational analogues of position, force, mass, and linear momentum. Mastering the analogy between linear and rotational motion is the key to simplifying this chapter. We will explore the conditions for rotational equilibrium and the dynamics of rotating bodies, culminating in the powerful law of conservation of angular momentum.",
    tamilConnection: "பம்பரம் சுற்றுவது, கதவு திறப்பது, கிரகங்கள் சூரியனைச் சுற்றுவது என சுழற்சி இயக்கம் நம்மைச் சுற்றி எங்கும் உள்ளது. ஒரு பொருளை ஒரு புள்ளியாகக் கருதாமல், அதன் முழு வடிவத்தையும், நிறையின் பரவலையும் கருத்தில் கொள்ளும்போது, அதன் இயக்கத்தை விவரிக்க புதிய அளவுகள் தேவைப்படுகின்றன. இந்த அத்தியாயம் அந்த சுழற்சி இயக்கத்தின் அறிவியலை அறிமுகப்படுத்துகிறது.",
    culturalContext: "Consider the art of making pottery on a potter's wheel (குயவன் சக்கரம்). The potter applies a torque to spin the wheel and uses the principle of conservation of angular momentum when shaping the clay (pulling the clay inwards makes the wheel spin faster). This ancient craft is a beautiful demonstration of rotational dynamics.",
    syllabusMapping: [
         {
            topic: 'System of Particles, Center of Mass, Rotational Motion',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 5: Motion of System of Particles and Rigid Bodies',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 7: System of Particles and Rotational Motion',
            notes: 'Extremely important for NEET. Questions on moment of inertia (especially using parallel/perpendicular axes theorems), conservation of angular momentum, and rolling motion are very frequent.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 5 maps to NEET Physics Unit 3'
        }
    ],
    conceptNotes: `### 1. Center of Mass (நிறை மையம்)
The center of mass (CM) of a system of particles is a point that moves as though all the mass of the system were concentrated at that point and all external forces were applied at that point.

For a system of n particles:
$$
\\vec{R}_{CM} = \\frac{m_1\\vec{r}_1 + m_2\\vec{r}_2 + ... + m_n\\vec{r}_n}{m_1 + m_2 + ... + m_n} = \\frac{\\sum m_i\\vec{r}_i}{M}
$$
For a continuous body, we integrate:
$$
\\vec{R}_{CM} = \\frac{1}{M} \\int \\vec{r} \\,dm
$$
The velocity of the center of mass is $\\vec{V}_{CM} = \\frac{\\sum m_i\\vec{v}_i}{M}$. Newton's second law for a system is $\\vec{F}_{ext} = M \\vec{A}_{CM}$.

### 2. Torque and Angular Momentum (திருப்புவிசை மற்றும் கோண உந்தம்)
*   **Torque ($\vec{\tau}$):** The rotational analogue of force. It is the turning effect of a force.
$$
\\vec{\\tau} = \\vec{r} \\times \\vec{F}
$$
Magnitude: $\\tau = rF \\sin\\theta$. Direction is given by the right-hand rule.

*   **Angular Momentum ($\vec{L}$):** The rotational analogue of linear momentum. For a single particle:
$$
\\vec{L} = \\vec{r} \\times \\vec{p}
$$
where $\\vec{p}$ is the linear momentum. Magnitude: $L = rp \\sin\\theta = mvr \\sin\\theta$.

*   **Rotational Second Law:** The net external torque on a system is equal to the rate of change of its angular momentum.
$$
\\vec{\\tau}_{ext} = \\frac{d\\vec{L}}{dt}
$$

### 3. Moment of Inertia and Rotational Dynamics (நிலைமத் திருப்புத்திறன் மற்றும் சுழற்சி இயக்கவியல்)
*   **Moment of Inertia (I):** The rotational analogue of mass. It is a measure of an object's resistance to changes in its rotational motion. It depends not only on the mass but also on how the mass is distributed about the axis of rotation.
For a system of particles: $I = \\sum m_i r_i^2$
For a rigid body: $I = \\int r^2 \\,dm$

*   **Relationship for a Rigid Body:** For a rigid body rotating about a fixed axis, the torque, moment of inertia, and angular acceleration (α) are related by:
$$
\\tau = I \\alpha
$$
This is the rotational analogue of $F=ma$. Similarly, angular momentum is $L = I \\omega$.

#### Theorems of Moment of Inertia:
1.  **Parallel Axis Theorem (இணை அச்சுத் தேற்றம்):** The moment of inertia (I) about any axis is the sum of the moment of inertia about a parallel axis passing through the center of mass ($I_{CM}$) and the product of the total mass (M) and the square of the distance (d) between the two axes.
$$
I = I_{CM} + Md^2
$$
2.  **Perpendicular Axis Theorem (செங்குத்து அச்சுத் தேற்றம்):** For a planar body (lamina), the moment of inertia about an axis perpendicular to its plane ($I_z$) is the sum of the moments of inertia about two perpendicular axes in its plane and intersecting at the point where the perpendicular axis passes through it ($I_x$ and $I_y$).
$$
I_z = I_x + I_y
$$

### 4. Rolling Motion (உருளுதல் இயக்கம்)
Rolling motion is a combination of translational motion and rotational motion. For a body rolling without slipping, the condition is $v_{CM} = R\\omega$.
The total kinetic energy of a rolling body is the sum of its translational and rotational kinetic energies.
$$
K_{total} = K_{trans} + K_{rot} = \\frac{1}{2}Mv_{CM}^2 + \\frac{1}{2}I_{CM}\\omega^2
$$

### 5. Conservation of Angular Momentum (கோண உந்த அழிவின்மை விதி)
If the **net external torque** on a system is zero, its total angular momentum remains constant.
$$
\\text{If } \\vec{\\tau}_{ext} = 0, \\text{ then } \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}
$$
This means $L_i = L_f$, or $I_i \\omega_i = I_f \\omega_f$. This principle explains why a spinning ice skater spins faster when she pulls her arms in (moment of inertia 'I' decreases, so angular velocity 'ω' must increase).
`,
    workedExamples: [
        {
            title: "NEET Level: Center of Mass",
            difficulty: 'Easy',
            problem: "Three point masses of 1 kg, 2 kg, and 3 kg are placed at the vertices of an equilateral triangle of side 1 m. Find the coordinates of the center of mass, assuming the 1 kg mass is at the origin and the 2 kg mass is on the x-axis.",
            solutionSteps: [
                { step: 1, explanation: "Assign coordinates to each mass. m₁=1kg at (0,0). m₂=2kg at (1,0). For m₃=3kg, the x-coordinate is 0.5 m. The y-coordinate (height of equilateral triangle) is (√3/2)*side = √3/2. So, m₃ is at (0.5, √3/2)." },
                { step: 2, explanation: "Use the formula for the x-coordinate of the center of mass: X_cm = (m₁x₁ + m₂x₂ + m₃x₃) / (m₁ + m₂ + m₃).", calculation: "X_cm = (1*0 + 2*1 + 3*0.5) / (1+2+3) = (2 + 1.5) / 6 = 3.5 / 6 = 7/12 m" },
                { step: 3, explanation: "Use the formula for the y-coordinate of the center of mass: Y_cm = (m₁y₁ + m₂y₂ + m₃y₃) / (m₁ + m₂ + m₃).", calculation: "Y_cm = (1*0 + 2*0 + 3*(√3/2)) / (1+2+3) = (3√3 / 2) / 6 = √3 / 4 m" }
            ],
            neetHack: "For systems with symmetry, the center of mass often lies at the geometric center. For two-particle systems, the CM is always on the line joining them.",
            commonPitfall: "Forgetting to correctly calculate the coordinates of all particles before applying the formula. Drawing a simple diagram is crucial."
        },
        {
            title: "JEE Level: Conservation of Angular Momentum",
            difficulty: 'Medium',
            problem: "A circular platform is rotating with an angular velocity of 10 rad/s. A man of mass 80 kg is standing on the edge. If he walks to the center of the platform, what will be the new angular velocity? The moment of inertia of the platform is 400 kg m² and its radius is 2 m.",
            solutionSteps: [
                { step: 1, explanation: "Identify the principle: Since there is no external torque, angular momentum is conserved. L_initial = L_final.", calculation: "I_i * ω_i = I_f * ω_f" },
                { step: 2, explanation: "Calculate the initial total moment of inertia (platform + man at edge). The man is treated as a point mass.", calculation: "I_i = I_platform + I_man = 400 + mr² = 400 + 80*(2)² = 400 + 320 = 720 kg m²" },
                { step: 3, explanation: "Calculate the final total moment of inertia (platform + man at center). When the man is at the center, his distance from the axis r=0.", calculation: "I_f = I_platform + I_man = 400 + m(0)² = 400 kg m²" },
                { step: 4, explanation: "Apply the conservation law and solve for the final angular velocity ω_f.", calculation: "720 * 10 = 400 * ω_f => ω_f = 7200 / 400 = 18 rad/s" }
            ],
            neetHack: "In conservation of angular momentum problems (L=Iω), if I decreases, ω must increase, and vice versa. This can help you quickly check if your answer makes sense.",
            commonPitfall: "Forgetting to include the man's moment of inertia in the total system moment of inertia in both the initial and final states."
        },
        {
            title: "NEET Level: Parallel Axis Theorem",
            difficulty: 'Medium',
            problem: "Find the moment of inertia of a solid sphere of mass M and radius R about a tangent to the sphere.",
            solutionSteps: [
                { step: 1, explanation: "Recall the moment of inertia of a solid sphere about an axis through its center of mass.", calculation: "I_cm = (2/5)MR²" },
                { step: 2, explanation: "A tangent is an axis parallel to a diameter, at a distance 'd' from the center.", calculation: "The distance d between the center and the tangent is equal to the radius R. So, d = R." },
                { step: 3, explanation: "Apply the Parallel Axis Theorem: I = I_cm + Md².", calculation: "I_tangent = (2/5)MR² + MR²" },
                { step: 4, explanation: "Simplify the expression to get the final answer.", calculation: "I_tangent = (2/5 + 1)MR² = (7/5)MR²" }
            ],
            neetHack: "Memorize the standard moments of inertia for common shapes (rod, ring, disk, sphere). Most problems will require you to apply the parallel or perpendicular axis theorems to these standard results.",
            commonPitfall: "Confusing the parallel and perpendicular axis theorems. The parallel axis theorem can be applied to any body, but the perpendicular axis theorem is only valid for planar bodies (laminas)."
        },
        {
            title: "JEE Level: Rolling without Slipping",
            difficulty: 'Hard',
            problem: "A solid sphere rolls down an inclined plane of height 'h' without slipping. What is its velocity at the bottom?",
            solutionSteps: [
                { step: 1, explanation: "Apply the principle of conservation of energy. The initial potential energy at the top is converted into total kinetic energy (translational + rotational) at the bottom.", calculation: "mgh = (1/2)mv² + (1/2)Iω²" },
                { step: 2, explanation: "For a solid sphere, I = (2/5)mr². For rolling without slipping, ω = v/r.", calculation: "mgh = (1/2)mv² + (1/2)(2/5)mr²(v/r)²" },
                { step: 3, explanation: "Simplify the equation. The mass 'm' and radius 'r' will cancel out.", calculation: "gh = (1/2)v² + (1/5)v² = (7/10)v²" },
                { step: 4, explanation: "Solve for the final velocity v.", calculation: "v² = 10gh/7 => v = √(10gh/7)" }
            ],
            neetHack: "For any object rolling down an incline, the final velocity is given by v = √(2gh / (1 + k²/R²)), where 'k' is the radius of gyration (I = mk²). For a sphere, k²/R² = 2/5. For a disk, k²/R² = 1/2. For a ring, k²/R² = 1. The smaller the factor (1 + k²/R²), the faster the object.",
            commonPitfall: "Forgetting to include the rotational kinetic energy term. When an object is rolling, it has both translational and rotational kinetic energy."
        },
        {
            title: "NEET Level: Torque Calculation",
            difficulty: 'Easy',
            problem: "A force $\\vec{F} = (2\\hat{i} + 3\\hat{j} - \\hat{k})$ N acts at a point with position vector $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k})$ m from the origin. Find the torque.",
            solutionSteps: [
                { step: 1, explanation: "Use the formula for torque, which is the cross product of the position vector and the force vector: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$." },
                { step: 2, explanation: "Set up the determinant for the cross product.", calculation: "\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 2 \\\\ 2 & 3 & -1 \\end{vmatrix}" },
                { step: 3, explanation: "Calculate the determinant.", calculation: "\\vec{\\tau} = \\hat{i}((-1)(-1) - (2)(3)) - \\hat{j}((1)(-1) - (2)(2)) + \\hat{k}((1)(3) - (-1)(2))" },
                { step: 4, explanation: "Simplify the components to get the final torque vector.", calculation: "\\vec{\\tau} = \\hat{i}(1 - 6) - \\hat{j}(-1 - 4) + \\hat{k}(3 + 2) = -5\\hat{i} + 5\\hat{j} + 5\\hat{k} \\text{ N·m}" }
            ],
            commonPitfall: "Calculating F x r instead of r x F. The cross product is not commutative ($\vec{r} \\times \\vec{F} = -(\\vec{F} \\times \\vec{r})$), so the order is critical."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "I = I_{CM} + Md^2", description: "Parallel Axis Theorem" },
            { formula: "I_z = I_x + I_y", description: "Perpendicular Axis Theorem (for planar bodies only)" },
            { formula: "\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\vec{\\alpha}", description: "Torque (Rotational analogue of Force)" },
            { formula: "\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}", description: "Angular Momentum (Rotational analogue of Momentum)" },
            { formula: "K_{rolling} = \\frac{1}{2}mv^2(1 + \\frac{k^2}{R^2})", description: "Total kinetic energy of a rolling body" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Torque causes angular acceleration.",
        "Moment of Inertia is the resistance to angular acceleration.",
        "If net external torque is zero, the total angular momentum of a system is conserved.",
        "Rolling motion combines translational and rotational kinetic energy."
    ],
    mnemonics: [
        { text: "Remember the linear to rotational analogy: Force -> Torque, Mass -> Moment of Inertia, Momentum -> Angular Momentum.", tamil: "நேர்கோட்டு-சுழற்சி ஒப்புமையை நினைவில் கொள்க: விசை -> திருப்புவிசை, நிறை -> நிலைமத் திருப்புத்திறன், உந்தம் -> கோண உந்தம்." }
    ],
    neetTips: [
        { text: "For rolling on an incline, acceleration `a = g sin(θ) / (1 + I/mR²)`. The object with the smallest I reaches the bottom first (sphere > disk > ring).", tamil: "சாய்வில் உருளும்போது, முடுக்கம் `a = g sin(θ) / (1 + I/mR²)`. குறைந்த I கொண்ட பொருள் முதலில் அடியை அடையும் (கோளம் > வட்டு > வளையம்)." },
        { text: "In conservation of angular momentum problems, look for actions that change the mass distribution, like a person walking on a turntable or an ice skater pulling in their arms.", tamil: "கோண உந்த அழிவின்மை கணக்குகளில், சுழலும் மேடையில் நடப்பது அல்லது கைகளை உள்ளிழுப்பது போன்ற நிறை பரவலை மாற்றும் செயல்களைத் தேடுங்கள்." }
    ],
    mcqs: [
        { question: "The moment of inertia of a body does not depend upon:", options: ["A. Mass of the body", "B. Axis of rotation", "C. Distribution of mass", "D. Angular velocity of the body"], answer: "D. Angular velocity of the body", explanation: "Moment of inertia (I = Σmr²) depends on mass and its distribution relative to the axis, but not on how fast it's spinning (angular velocity).", neetFrequency: 4 },
        { question: "A solid sphere is rotating in free space. If the radius of the sphere is increased keeping its mass same, which one of the following will not be affected?", options: ["A. Moment of inertia", "B. Angular momentum", "C. Angular velocity", "D. Rotational kinetic energy"], answer: "B. Angular momentum", explanation: "Since there is no external torque, angular momentum (L) must be conserved. Moment of inertia (I) will increase, so angular velocity (ω) and rotational K.E. (L²/2I) will decrease.", neetFrequency: 5 },
        { question: "The radius of gyration of a solid sphere of radius R about its diameter is:", options: ["A. R", "B. R/√2", "C. √(2/5)R", "D. √(3/5)R"], answer: "C. √(2/5)R", explanation: "Moment of inertia I = Mk². For a solid sphere, I = (2/5)MR². Equating them gives Mk² = (2/5)MR², so k = √(2/5)R.", neetFrequency: 3 },
        { question: "A couple produces:", options: ["A. Purely linear motion", "B. Purely rotational motion", "C. Both linear and rotational motion", "D. No motion"], answer: "B. Purely rotational motion", explanation: "A couple consists of two equal and opposite forces, so the net force is zero (no linear motion), but they produce a net torque, causing purely rotational motion.", neetFrequency: 2 },
        { question: "If the net external torque on a system is zero, then:", options: ["A. The angular velocity will be zero", "B. The angular momentum will be zero", "C. The angular momentum will be conserved", "D. The angular velocity will be conserved"], answer: "C. The angular momentum will be conserved", explanation: "This is the statement of the law of conservation of angular momentum. Angular velocity is not necessarily conserved, as the moment of inertia can change.", neetFrequency: 5 },
        { question: "A solid cylinder of mass M and radius R rolls down an inclined plane of height h. The rotational kinetic energy of the cylinder at the bottom of the plane is:", options: ["A. (1/2)Mgh", "B. (1/3)Mgh", "C. (1/4)Mgh", "D. (2/5)Mgh"], answer: "B. (1/3)Mgh", explanation: "Total K.E. = K_trans + K_rot = Mgh. For a solid cylinder, K_trans / K_rot = 2. So K_rot = (1/3) * Total Energy = (1/3)Mgh.", neetFrequency: 4 },
        { question: "The center of mass of a system of particles:", options: ["A. Always coincides with one of the particles", "B. May lie where there is no mass", "C. Is always inside the body", "D. Is always outside the body"], answer: "B. May lie where there is no mass", explanation: "For example, the center of mass of a ring is at its geometric center, where there is no material.", neetFrequency: 3 },
        { question: "The angular momentum of a particle moving with a constant velocity:", options: ["A. Is always zero", "B. Is constant", "C. Is constant only if it passes through the origin", "D. Varies with time"], answer: "C. Is constant only if it passes through the origin", explanation: "L = r x p. If v is constant, p is constant. If the particle is moving along a line not passing through the origin, r changes, so L changes. L is constant only if the line of motion passes through the origin (r is parallel to p, so L=0).", neetFrequency: 2 },
        { question: "The moment of inertia of a circular ring about an axis passing through its center and perpendicular to its plane is MR². What is its moment of inertia about its diameter?", options: ["A. MR²", "B. (1/2)MR²", "C. (1/4)MR²", "D. 2MR²"], answer: "B. (1/2)MR²", explanation: "By the perpendicular axis theorem, I_z = I_x + I_y. For a ring, I_z = MR² and by symmetry, I_x = I_y. So, MR² = 2I_diameter. I_diameter = (1/2)MR².", neetFrequency: 5 },
        { question: "A man is sitting on a rotating stool with his arms outstretched. If he suddenly folds his arms, his angular velocity will:", options: ["A. Decrease", "B. Increase", "C. Remain the same", "D. Become zero"], answer: "B. Increase", explanation: "By folding his arms, he decreases his moment of inertia (I). Since angular momentum (L = Iω) is conserved, his angular velocity (ω) must increase.", neetFrequency: 4 },
        { question: "Torque has the same dimensions as:", options: ["A. Force", "B. Work", "C. Power", "D. Linear Momentum"], answer: "B. Work", explanation: "Torque (τ = rF) has dimensions [M L² T⁻²]. Work (W = Fs) also has dimensions [M L² T⁻²].", neetFrequency: 1 },
        { question: "The relationship between torque ($\vec{τ}$) and angular acceleration ($\vec{α}$) is:", options: ["A. $\vec{τ} = I/\vec{α}$", "B. $\vec{τ} = I\vec{α}$", "C. $\vec{α} = I\vec{τ}$", "D. $\vec{τ} = \vec{α}/I$"], answer: "B. $\vec{τ} = I\vec{α}$", explanation: "This is the rotational equivalent of Newton's second law, F = ma.", neetFrequency: 2 },
        { question: "For a body in rotational equilibrium:", options: ["A. The net force is zero", "B. The net torque is zero", "C. The velocity is zero", "D. The angular velocity is zero"], answer: "B. The net torque is zero", explanation: "Rotational equilibrium means no change in rotational motion (α=0), which implies the net external torque is zero. Net force being zero is the condition for translational equilibrium.", neetFrequency: 3 },
        { question: "Which of the following has the largest moment of inertia for the same mass M and radius R, about their central axes?", options: ["A. A ring", "B. A disc", "C. A solid cylinder", "D. A solid sphere"], answer: "A. A ring", explanation: "Ring (MR²), Disc/Cylinder (1/2 MR²), Sphere (2/5 MR²). A ring has the largest moment of inertia because all its mass is concentrated at the maximum distance from the axis.", neetFrequency: 4 },
        { question: "The motion of the center of mass of a system of two particles is unaffected by their:", options: ["A. External forces", "B. Internal forces", "C. Masses", "D. Positions"], answer: "B. Internal forces", explanation: "Internal forces occur in equal and opposite pairs (Newton's 3rd law), so their vector sum is zero and they do not affect the motion of the center of mass.", neetFrequency: 3 },
        { question: "A solid sphere and a hollow sphere of same mass and radius are rolling down an incline. Which will reach the bottom first?", options: ["A. Solid sphere", "B. Hollow sphere", "C. Both will reach at the same time", "D. Cannot be determined"], answer: "A. Solid sphere", explanation: "The object with the smaller moment of inertia will have greater acceleration and reach first. I_solid = (2/5)MR², I_hollow = (2/3)MR². Since I_solid < I_hollow, the solid sphere reaches first.", neetFrequency: 5 },
        { question: "The vector product of two non-zero vectors is zero if they are:", options: ["A. Perpendicular to each other", "B. Parallel to each other", "C. At an angle of 45°", "D. At an angle of 60°"], answer: "B. Parallel to each other", explanation: "The magnitude of the vector product (cross product) is |A||B|sinθ. This is zero when sinθ = 0, which means θ = 0° or 180° (parallel or anti-parallel).", neetFrequency: 1 },
        { question: "The position of the center of mass of a uniform semi-circular disc of radius R from the center is:", options: ["A. 4R/3π", "B. 3R/4π", "C. 2R/π", "D. R/2"], answer: "A. 4R/3π", explanation: "This is a standard result derived from integration. It's useful to memorize the CM positions for common shapes like a semi-circular disc, ring, and cone.", neetFrequency: 3 },
        { question: "A particle performs uniform circular motion with an angular momentum L. If its angular frequency is doubled and its kinetic energy is halved, then the new angular momentum is:", options: ["A. L/4", "B. L/2", "C. 2L", "D. 4L"], answer: "A. L/4", explanation: "Rotational K.E. = (1/2)Iω² = (1/2)Lω. So L = 2(K.E)/ω. New K.E' = K.E/2, New ω' = 2ω. New L' = 2(K.E/2)/(2ω) = (K.E)/ω = L/2.", neetFrequency: 3 },
        { question: "A flywheel rotating at 300 rpm slows down to a constant rate of 180 rpm in 2 seconds. The angular deceleration is:", options: ["A. π rad/s²", "B. 2π rad/s²", "C. 3π rad/s²", "D. 4π rad/s²"], answer: "B. 2π rad/s²", explanation: "ω_i = 300 * 2π/60 = 10π rad/s. ω_f = 180 * 2π/60 = 6π rad/s. α = (ω_f - ω_i)/t = (6π - 10π)/2 = -4π/2 = -2π rad/s². The deceleration is 2π rad/s².", neetFrequency: 2 },
        { question: "The physical quantity in rotational motion which is analogous to mass in linear motion is:", options: ["A. Torque", "B. Angular momentum", "C. Moment of inertia", "D. Radius of gyration"], answer: "C. Moment of inertia", explanation: "Moment of inertia (I) plays the same role in rotational dynamics (τ = Iα) as mass (m) does in linear dynamics (F = ma).", neetFrequency: 1 },
        { question: "A particle is moving on a circular path with constant speed. What is the nature of its angular momentum?", options: ["A. Constant in magnitude and direction", "B. Constant in magnitude but variable in direction", "C. Variable in magnitude but constant in direction", "D. Variable in both magnitude and direction"], answer: "A. Constant in magnitude and direction", explanation: "For a particle in a circular path, L = mvr. Since m, v, and r are constant, the magnitude of L is constant. The direction of L (r x p) is perpendicular to the plane of motion, which is also constant.", neetFrequency: 3 },
        { question: "If the earth shrinks to half its radius without change in mass, the duration of the day will be:", options: ["A. 24 hours", "B. 12 hours", "C. 6 hours", "D. 48 hours"], answer: "C. 6 hours", explanation: "Angular momentum L = Iω is conserved. I_earth ∝ R². If R' = R/2, then I' = I/4. So, (I/4)ω' = Iω => ω' = 4ω. Since T = 2π/ω, T' = T/4. New day = 24/4 = 6 hours.", neetFrequency: 4 },
        { question: "The moment of inertia of a thin rod of mass M and length L about an axis perpendicular to the rod at its midpoint is:", options: ["A. ML²/3", "B. ML²/12", "C. ML²/2", "D. ML²"], answer: "B. ML²/12", explanation: "This is a standard result for the moment of inertia of a thin rod about its center.", neetFrequency: 2 },
        { question: "The product of the moment of inertia and angular velocity is known as:", options: ["A. Torque", "B. Work", "C. Power", "D. Angular momentum"], answer: "D. Angular momentum", explanation: "L = Iω is the definition of angular momentum for a rigid body.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "The center of mass of a body may lie where there is no mass.", reason: "The center of mass of a uniform ring is at its center.", answer: "A", explanation: "The assertion is true, and the reason provides a perfect example (a ring or a hollow sphere). The reason correctly explains the assertion." },
        { assertion: "Torque is a vector quantity.", reason: "Torque is the cross product of two vectors, position vector and force vector.", answer: "A", explanation: "Both statements are true. The cross product of two vectors results in a third vector, so the reason is the correct explanation for the assertion." },
        { assertion: "The moment of inertia of a body is not a fixed quantity.", reason: "The moment of inertia depends on the axis of rotation and the distribution of mass.", answer: "A", explanation: "The assertion is true. The reason is also true and correctly explains why the moment of inertia changes. For the same body, I is different for different axes.", neetFrequency: 3 },
        { assertion: "In a purely rotational motion, every particle of the body moves in a circle.", reason: "The particles on the axis of rotation are stationary.", answer: "C", explanation: "The assertion is true for particles not on the axis. However, the reason is also true, which contradicts the 'every particle' part of the assertion, making the assertion false as a universal statement. So, Assertion is false but Reason is true (this seems to be a common trick question format). Let me re-evaluate. The assertion is *mostly* true but technically false because of the particles on the axis. The reason is true. So Assertion is False, Reason is True. Answer is D. Wait. Let's re-read the options for A/R. A: A,R true, R explains A. B: A,R true, R not explains A. C: A true, R false. D: A false, R true. Ok, my analysis points to D. Let me re-check the user's provided A/R for previous modules. `answer: 'C'` means Assertion is true, but Reason is false. `answer: 'D'` means Assertion is false but Reason is true. My analysis stands. Assertion is False, Reason is True. Hence, D.", answer: "D" },
        { assertion: "If there is no external torque on a system, its angular velocity remains constant.", reason: "The angular momentum of the system remains constant if the net external torque is zero.", answer: "D", explanation: "Assertion is false. Angular velocity can change if the moment of inertia changes (e.g., an ice skater pulling in her arms). The reason is true, as it is the statement of the law of conservation of angular momentum." }
    ],
    matchTheColumns: [
        { column1: ["(a) Torque", "(b) Angular Momentum", "(c) Moment of Inertia", "(d) Angular Velocity"], column2: ["(p) Iω", "(q) Iα", "(r) Σmr²", "(s) dθ/dt"], answer: "a-q, b-p, c-r, d-s", explanation: "Matching the rotational quantities with their corresponding formulas." },
        { column1: ["(a) Ring (about axis)", "(b) Disc (about axis)", "(c) Solid Sphere (about diameter)", "(d) Rod (about end)"], column2: ["(p) ML²/3", "(q) MR²", "(r) (1/2)MR²", "(s) (2/5)MR²"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching common objects with their standard moments of inertia." },
        { column1: ["(a) Force", "(b) Linear Momentum", "(c) Mass", "(d) Velocity"], column2: ["(p) Angular Velocity", "(q) Torque", "(r) Angular Momentum", "(s) Moment of Inertia"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching linear motion quantities with their rotational analogues." },
        { column1: ["(a) Translational Equilibrium", "(b) Rotational Equilibrium", "(c) Rolling without slipping", "(d) Conservation of L"], column2: ["(p) Στ = 0", "(q) v = Rω", "(r) ΣF = 0", "(s) No external torque"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching physical conditions with their mathematical statements." },
        { column1: ["(a) Work", "(b) Power", "(c) Radius of Gyration", "(d) Angular Impulse"], column2: ["(p) √(I/M)", "(q) τΔt", "(r) τ·θ", "(s) τ·ω"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching quantities with their rotational formulas. Work = torque * angular displacement. Power = torque * angular velocity. Radius of gyration k=√(I/M). Angular impulse = change in angular momentum = τΔt." }
    ]
};
