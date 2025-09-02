
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
  mcqs: [
    {
        "question": "The work done is zero if the angle between the force and displacement is:",
        "options": ["0°", "45°", "90°", "180°"],
        "answer": "90°",
        "explanation": "Work done W = Fdcosθ. If θ = 90°, cos90° = 0, so W = 0."
    },
    {
        "question": "A light and a heavy body have equal momentum. Which one has greater kinetic energy?",
        "options": ["The light body", "The heavy body", "Both have equal kinetic energy", "Cannot be determined"],
        "answer": "The light body",
        "explanation": "Kinetic energy K.E. = p²/2m. Since momentum p is the same, K.E. is inversely proportional to mass m. The lighter body will have greater kinetic energy."
    },
    {
        "question": "The potential energy of a spring when stretched by 2 cm is U. If it is stretched by 8 cm, the potential energy stored in it will be:",
        "options": ["4U", "8U", "16U", "2U"],
        "answer": "16U",
        "explanation": "Potential energy in a spring U = ½kx². So, U is proportional to x². If x is increased by 4 times (from 2 cm to 8 cm), U will increase by 4² = 16 times."
    },
    {
        "question": "In an elastic collision:",
        "options": ["Only momentum is conserved", "Only kinetic energy is conserved", "Both momentum and kinetic energy are conserved", "Neither momentum nor kinetic energy is conserved"],
        "answer": "Both momentum and kinetic energy are conserved",
        "explanation": "This is the definition of a perfectly elastic collision."
    },
    {
        "question": "The unit of power is:",
        "options": ["Joule", "Newton", "Watt", "Pascal"],
        "answer": "Watt",
        "explanation": "The SI unit of power is the Watt (W), which is equivalent to Joules per second (J/s)."
    },
    {
        "question": "A man pushes a wall and fails to displace it. He does:",
        "options": ["Negative work", "Positive but not maximum work", "No work at all", "Maximum work"],
        "answer": "No work at all",
        "explanation": "Work is done only when there is a displacement. Since the wall is not displaced, the work done is zero."
    },
    {
        "question": "The work done by a conservative force is:",
        "options": ["Path dependent", "Path independent", "Always positive", "Always negative"],
        "answer": "Path independent",
        "explanation": "The work done by a conservative force (like gravity) depends only on the initial and final positions, not on the path taken."
    },
    {
        "question": "The kinetic energy of a body of mass m moving with velocity v is:",
        "options": ["mv²", "½mv", "½mv²", "mv"],
        "answer": "½mv²",
        "explanation": "This is the standard formula for kinetic energy."
    },
    {
        "question": "For a perfectly inelastic collision, the coefficient of restitution (e) is:",
        "options": ["1", "0", "-1", "0.5"],
        "answer": "0",
        "explanation": "For a perfectly inelastic collision, the bodies stick together after collision, so their relative velocity of separation is zero, making e=0."
    },
    {
        "question": "Power can be expressed as:",
        "options": ["F × v", "F ⋅ v", "F / v", "F × d"],
        "answer": "F ⋅ v",
        "explanation": "Instantaneous power P = dW/dt = d(F⋅d)/dt = F ⋅ (dd/dt) = F ⋅ v."
    },
    {
        "question": "If the kinetic energy of a body is doubled, its momentum will be:",
        "options": ["Doubled", "Halved", "√2 times", "1/√2 times"],
        "answer": "√2 times",
        "explanation": "Momentum p = √(2mK.E.). If K.E. is doubled, the new momentum p' = √(2m(2K.E.)) = √2 * √(2mK.E.) = √2 p."
    },
    {
        "question": "Work done by the force of friction is always:",
        "options": ["Positive", "Negative", "Zero", "Either positive or negative"],
        "answer": "Negative",
        "explanation": "The force of friction always opposes motion, so the angle between the frictional force and displacement is 180°, and cos180° = -1."
    },
    {
        "question": "Which of the following is a unit of energy?",
        "options": ["Watt", "Newton", "Kilowatt-hour", "Pascal"],
        "answer": "Kilowatt-hour",
        "explanation": "Kilowatt-hour (kWh) is a commercial unit of electrical energy. 1 kWh = 3.6 × 10⁶ J."
    },
    {
        "question": "When a body is lifted by a person, the work done by the person is:",
        "options": ["Positive", "Negative", "Zero", "Depends on the height"],
        "answer": "Positive",
        "explanation": "The applied force by the person is in the same direction as the displacement, so the work done is positive."
    },
    {
        "question": "In a one-dimensional elastic collision, the relative velocity of approach before collision is equal to:",
        "options": ["The relative velocity of separation after collision", "Half the relative velocity of separation", "Twice the relative velocity of separation", "The square of the relative velocity of separation"],
        "answer": "The relative velocity of separation after collision",
        "explanation": "This is the definition of an elastic collision, where the coefficient of restitution e = 1."
    },
    {
        "question": "The area under the force-displacement graph represents:",
        "options": ["Impulse", "Work done", "Power", "Momentum"],
        "answer": "Work done",
        "explanation": "Work done W = ∫F dx, which is the area under the F-x graph."
    },
    {
        "question": "A body of mass 10 kg is at rest. A force of 20 N is applied on it for 5 s. The work done is:",
        "options": ["500 J", "1000 J", "250 J", "2000 J"],
        "answer": "500 J",
        "explanation": "First find the displacement. a = F/m = 20/10 = 2 m/s². s = ut + ½at² = 0 + ½(2)(5)² = 25 m. Work W = Fd = 20 N * 25 m = 500 J."
    },
    {
        "question": "Which of the following is a non-conservative force?",
        "options": ["Gravitational force", "Electrostatic force", "Frictional force", "Spring force"],
        "answer": "Frictional force",
        "explanation": "Work done against friction depends on the path taken and is dissipated as heat."
    },
    {
        "question": "If the momentum of a body is increased by 100%, its kinetic energy will increase by:",
        "options": ["100%", "200%", "300%", "400%"],
        "answer": "300%",
        "explanation": "If momentum p is increased by 100%, the new momentum p' = 2p. K.E. ∝ p². The new K.E' = (2p)² = 4p². So, the new K.E. is 4 times the original. The increase is (4K.E. - K.E.)/K.E. * 100% = 300%."
    },
    {
        "question": "The slope of the kinetic energy vs. time graph for a particle moving under a constant force is:",
        "options": ["Constant", "Increasing", "Decreasing", "Zero"],
        "answer": "Increasing",
        "explanation": "KE = ½mv² = ½m(u+at)². d(KE)/dt = m(u+at)a. The slope is proportional to time 't', so it is increasing linearly."
    },
    {
        "question": "What is the work done in holding a 15 kg suitcase while waiting for a bus for 15 minutes?",
        "options": ["225 J", "1500 J", "0 J", "15 J"],
        "answer": "0 J",
        "explanation": "Although a force is applied to hold the suitcase, there is no displacement. Therefore, the work done is zero."
    },
    {
        "question": "A bomb of mass 30 kg at rest explodes into two pieces of masses 18 kg and 12 kg. The velocity of the 18 kg mass is 6 m/s. The kinetic energy of the other mass is:",
        "options": ["486 J", "540 J", "243 J", "1080 J"],
        "answer": "486 J",
        "explanation": "By conservation of momentum, m₁v₁ + m₂v₂ = 0. 18*6 + 12*v₂ = 0. v₂ = -9 m/s. K.E. of the 12 kg mass = ½m₂v₂² = ½ * 12 * (-9)² = 6 * 81 = 486 J."
    },
    {
        "question": "A particle moves from a point (-2i + 5j) to (4j + 3k) when a force of (4i + 3j) N is applied. How much work has been done by the force?",
        "options": ["8 J", "11 J", "5 J", "-3 J"],
        "answer": "5 J",
        "explanation": "Displacement d = final position - initial position = (4j+3k) - (-2i+5j) = 2i - j + 3k. Work W = F ⋅ d = (4i+3j) ⋅ (2i-j+3k) = (4*2) + (3*-1) + (0*3) = 8 - 3 = 5 J."
    },
    {
        "question": "The relationship between kinetic energy (K) and momentum (p) is:",
        "options": ["K = p²/2m", "K = 2mp²", "K = p/2m", "K = mp²/2"],
        "answer": "K = p²/2m",
        "explanation": "K = ½mv². Since p=mv, v=p/m. K = ½m(p/m)² = ½m(p²/m²) = p²/2m."
    },
    {
        "question": "If two bodies stick together after collision and move as a single body, the collision is said to be:",
        "options": ["Elastic", "Partially inelastic", "Perfectly inelastic", "Partially elastic"],
        "answer": "Perfectly inelastic",
        "explanation": "This is the definition of a perfectly inelastic collision."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The work done by the centripetal force is always zero.",
        "reason": "The centripetal force is always perpendicular to the direction of motion.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since W = Fdcosθ and θ=90°, the work done is zero."
    },
    {
        "assertion": "Kinetic energy is conserved in all types of collisions.",
        "reason": "The total momentum of a system is always conserved.",
        "answer": "D",
        "explanation": "Assertion is false. Kinetic energy is conserved only in elastic collisions. The reason is a true statement (for an isolated system) but doesn't support the false assertion."
    },
    {
        "assertion": "The work done by a conservative force on a particle moving once round a closed path is zero.",
        "reason": "The work done by a conservative force depends only on the initial and final positions.",
        "answer": "A",
        "explanation": "For a closed path, the initial and final positions are the same, so the displacement is zero, and the net work done by a conservative force is zero. The reason correctly states the property of a conservative force."
    },
    {
        "assertion": "Frictional force is a non-conservative force.",
        "reason": "The work done against friction depends on the path taken.",
        "answer": "A",
        "explanation": "The reason provides the correct definition for a non-conservative force, which friction is an example of."
    },
    {
        "assertion": "Power is a vector quantity.",
        "reason": "Power is the dot product of two vector quantities, force and velocity.",
        "answer": "D",
        "explanation": "The assertion is false; power is a scalar quantity. The reason is true, and the dot product of two vectors results in a scalar, which contradicts the assertion."
    },
    {
        "assertion": "When a body is dropped from a certain height, its potential energy is converted into kinetic energy.",
        "reason": "The total mechanical energy of the body remains conserved if air resistance is neglected.",
        "answer": "A",
        "explanation": "The reason (conservation of energy) correctly explains why the loss in potential energy must be equal to the gain in kinetic energy."
    },
    {
        "assertion": "A body can have energy without having momentum.",
        "reason": "A body at rest at a certain height has potential energy but no momentum.",
        "answer": "A",
        "explanation": "The reason provides a valid example (a body with potential energy but zero velocity) that proves the assertion."
    },
    {
        "assertion": "A body can have momentum without having energy.",
        "reason": "Momentum is a vector, while energy is a scalar.",
        "answer": "E",
        "explanation": "Assertion is false. If a body has momentum (p=mv), it must have mass and velocity, and therefore must have kinetic energy (½mv²). The reason is true but irrelevant."
    },
    {
        "assertion": "In a perfectly inelastic collision, the kinetic energy is not conserved.",
        "reason": "Some kinetic energy is lost in the form of heat and sound.",
        "answer": "A",
        "explanation": "The reason correctly explains why kinetic energy is not conserved in inelastic collisions."
    },
    {
        "assertion": "The work-energy theorem is not applicable in the presence of non-conservative forces.",
        "reason": "The work done by non-conservative forces is path-dependent.",
        "answer": "D",
        "explanation": "Assertion is false. The work-energy theorem states that the work done by the *net* force (including non-conservative forces) is equal to the change in kinetic energy. The reason is a true statement about non-conservative forces."
    },
    {
        "assertion": "The slope of the Potential Energy vs. Position graph gives the force.",
        "reason": "Force is defined as the negative gradient of potential energy, F = -dU/dx.",
        "answer": "A",
        "explanation": "The reason correctly provides the mathematical relationship that defines the slope of the U-x graph as the negative of the conservative force."
    },
    {
        "assertion": "The coefficient of restitution 'e' is a dimensionless quantity.",
        "reason": "It is the ratio of relative velocity of separation to the relative velocity of approach.",
        "answer": "A",
        "explanation": "The reason correctly defines 'e'. Since it is a ratio of two velocities, the units cancel out, making it dimensionless."
    },
    {
        "assertion": "The rate of change of total momentum of a many-particle system is proportional to the net external force on the system.",
        "reason": "The internal forces between pairs of particles in the system sum to zero.",
        "answer": "A",
        "explanation": "The reason correctly explains why only external forces contribute to the change in the total momentum of the system, which is what the assertion (Newton's second law for a system) states."
    },
    {
        "assertion": "The kinetic energy of a body can be negative.",
        "reason": "Kinetic energy is given by K.E. = ½mv².",
        "answer": "D",
        "explanation": "Assertion is false. Since mass (m) is always positive and velocity squared (v²) is always non-negative, kinetic energy can never be negative. The reason is a correct formula but proves the assertion wrong."
    },
    {
        "assertion": "Work and energy have the same SI unit.",
        "reason": "Work is a form of energy transfer.",
        "answer": "A",
        "explanation": "The reason correctly states the physical relationship between work and energy, which is why they share the same unit (Joule)."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Kinetic Energy", "b) Potential Energy", "c) Work", "d) Power"],
        "column2": ["i) Fdcosθ", "ii) W/t", "iii) mgh", "iv) ½mv²"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Elastic Collision", "b) Inelastic Collision", "c) Perfectly Inelastic Collision", "d) Conservative Force"],
        "column2": ["i) Momentum conserved, KE not", "ii) e = 0", "iii) Work is path independent", "iv) e = 1"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Work-Energy Theorem", "b) Conservation of Momentum", "c) Conservation of Energy", "d) Newton's Second Law"],
        "column2": ["i) If F_ext = 0, p = constant", "ii) If F_cons acts, E = constant", "iii) W_net = ΔK.E.", "iv) F = dp/dt"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Unit of Work", "b) Unit of Power", "c) Unit of Force", "d) Unit of Momentum"],
        "column2": ["i) Watt", "ii) Newton", "iii) Joule", "iv) kg⋅m/s"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Positive Work", "b) Negative Work", "c) Zero Work", "d) Power"],
        "column2": ["i) Force opposes displacement", "ii) Force is perpendicular to displacement", "iii) Force supports displacement", "iv) Rate of doing work"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Gravitational PE", "b) Elastic PE", "c) Relation K and p", "d) Horsepower"],
        "column2": ["i) ½kx²", "ii) p²/2m", "iii) 746 W", "iv) mgh"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) F ⋅ v", "b) F ⋅ d", "c) FΔt", "d) ½mv²"],
        "column2": ["i) Work", "ii) Kinetic Energy", "iii) Impulse", "iv) Instantaneous Power"],
        "answer": "a-iv, b-i, c-iii, d-ii"
    },
    {
        "column1": ["a) Collision of two billiard balls", "b) A bullet hitting a sandbag", "c) A man pushing a wall", "d) An object falling freely"],
        "column2": ["i) No work done", "ii) PE converts to KE", "iii) Nearly elastic collision", "iv) Perfectly inelastic collision"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Slope of K-t graph", "b) Area under F-x graph", "c) Slope of U-x graph", "d) Area under P-t graph"],
        "column2": ["i) -Force", "ii) Work done", "iii) Work done", "iv) Power"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) 1 kWh", "b) 1 eV", "c) 1 Joule", "d) 1 erg"],
        "column2": ["i) 10⁻⁷ J", "ii) 1.6 x 10⁻¹⁹ J", "iii) 3.6 x 10⁶ J", "iv) 1 N⋅m"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Work done by friction", "b) Work done by gravity (upward motion)", "c) Work done by spring force (stretching)", "d) Work done by centripetal force"],
        "column2": ["i) Negative", "ii) Negative", "iii) Negative", "iv) Zero"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) P = constant", "b) v = constant", "c) p = constant", "d) K.E = constant"],
        "column2": ["i) F_net = 0", "ii) W_net = 0", "iii) W = P * t", "iv) F_net = 0, no friction"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Conservative Force", "b) Non-conservative Force", "c) External Force", "d) Internal Force"],
        "column2": ["i) Changes momentum of system", "ii) Work done is path independent", "iii) Work done is path dependent", "iv) Does not change momentum of system"],
        "answer": "a-ii, b-iii, c-i, d-iv"
    },
    {
        "column1": ["a) K.E. increases by 44%", "b) K.E. doubles", "c) p increases by 50%", "d) p is constant"],
        "column2": ["i) v increases by ~22%", "ii) p increases by ~41%", "iii) K.E. increases by 125%", "iv) Elastic collision"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Elastic collision (m₁=m₂, v₂=0)", "b) Inelastic collision", "c) Oblique collision", "d) Head-on collision"],
        "column2": ["i) Momentum conserved in one dimension", "ii) Momentum conserved in two dimensions", "iii) Velocities are exchanged", "iv) K.E. is lost"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    }
  ]
};

    