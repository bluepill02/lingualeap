
import type { NeetModule } from '@/lib/types';

export const lawsOfMotionModule: NeetModule = {
  "metadata": {
    "id": "physics-laws-of-motion",
    "title": "Laws of Motion (இயக்க விதிகள்)",
    "chapter": "Unit 3: Laws of Motion",
    "subject": "Physics",
    "glossary": [
      { "English": "Inertia", "தமிழ்": "நிலைமம்" },
      { "English": "Momentum", "தமிழ்": "உந்தம்" },
      { "English": "Impulse", "தமிழ்": "கணத்தாக்கு" },
      { "English": "Friction", "தமிழ்": "உராய்வு" },
      { "English": "Centripetal Force", "தமிழ்": "மையநோக்கு விசை" }
    ],
    "learningObjectives": [
      "Differentiate between inertia, momentum, and force, and state Newton's three laws of motion.",
      "Apply the law of conservation of linear momentum to solve problems like the recoil of a gun.",
      "Analyze the forces acting on a body in equilibrium, including static and kinetic friction.",
      "Calculate the centripetal force required for an object in uniform circular motion and apply it to real-world scenarios like banked roads."
    ],
    "prerequisites": [
      "Newton's Laws of Motion.",
      "Understanding of vectors, especially the cross product.",
      "Concepts of Work, Energy, and Power."
    ],
    "conceptOverview": "Imagine a thrilling Vadam Izhuthal (வடம் இழுத்தல்) or tug-of-war contest at a village festival in Tamil Nadu. Why does the rope move? Why is it hard to pull the other team? This chapter, Laws of Motion, answers the fundamental 'why' behind all movement. We move from just describing motion (kinematics) to understanding its cause: Force (விசை). We will learn Newton's three powerful laws, which are the ultimate rules governing every push, pull, and collision in the universe, from the tug-of-war rope to planets orbiting the sun.",
    "tnBoardMapping": "This unit corresponds to the Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 3: 'Laws of Motion'. The TN board provides a very clear explanation of concepts like impulse and friction. NEET will test your ability to apply these laws quickly in complex scenarios, often involving multiple connected bodies.",
    "studyTips": [
      {
        "tip": "Create a two-column table comparing linear motion quantities (x, v, a, m, F, p) with their rotational analogues (θ, ω, α, I, τ, L). This will help you quickly translate linear motion equations into rotational ones.",
        "NEET_Hack": "For objects rolling down an incline, the one with the smallest moment of inertia (or smallest value of k²/R²) will reach the bottom first. A solid sphere (I=2/5 MR²) will always beat a disc (I=1/2 MR²) or a ring (I=MR²)."
      },
      {
        "tip": "Master the right-hand rule to find the direction of vector quantities like torque (τ = r × F) and angular momentum (L = r × p).",
        "NEET_Hack": "Questions on conservation of angular momentum are very common. Look for scenarios where the moment of inertia changes, like a spinning dancer pulling her arms in, or a planet moving closer to the sun. If external torque is zero, then I₁ω₁ = I₂ω₂."
      }
    ]
  },
  "content": `
# 1. Module Title
– Physics – Laws of Motion (இயற்பியல் - இயக்க விதிகள்)

# 2. Learning Objectives
1. After this, you will be able to differentiate between inertia, momentum, and force, and state Newton's three laws of motion.
2. After this, you will be able to apply the law of conservation of linear momentum to solve problems like the recoil of a gun.
3. After this, you will be able to analyze the forces acting on a body in equilibrium, including static and kinetic friction.
4. After this, you will be able to calculate the centripetal force required for an object in uniform circular motion and apply it to real-world scenarios like banked roads.

# 3. Prerequisites
– Understanding of vectors and their resolution (from Kinematics).
– Ability to draw free-body diagrams to represent forces.
– Familiarity with the equations of motion for uniformly accelerated objects.

# 4. Concept Overview
Imagine a thrilling Vadam Izhuthal (வடம் இழுத்தல்) or tug-of-war contest at a village festival in Tamil Nadu. Why does the rope move? Why is it hard to pull the other team? This chapter, Laws of Motion, answers the fundamental 'why' behind all movement. We move from just describing motion (kinematics) to understanding its cause: Force (விசை). We will learn Newton's three powerful laws, which are the ultimate rules governing every push, pull, and collision in the universe, from the tug-of-war rope to planets orbiting the sun.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 11 Physics Volume 1, Chapter 3: 'Laws of Motion'**. The TN board provides a very clear explanation of concepts like impulse and friction. NEET will test your ability to apply these laws quickly in complex scenarios, often involving multiple connected bodies.

## 5.1 Force and Newton's Laws (விசை மற்றும் நியூட்டனின் விதிகள்)
*   **Force and Inertia (விசை மற்றும் நிலைமம்):** A force is a push or pull that can change an object's state of motion. Inertia is the property of an object to resist this change in motion. Inertia is essentially a measure of an object's mass; more mass means more inertia.

*   **Newton’s first law of motion (நியூட்டனின் முதல் இயக்க விதி):** Also known as the law of inertia. It states that an object will stay at rest or in uniform motion in a straight line unless a net external force acts on it. This law defines both force and inertia conceptually.

*   **Momentum (p) (உந்தம்):** This is the 'quantity of motion' an object has. It is defined as the product of the object's mass and its velocity (p = mv). It is a vector quantity, meaning it has direction.

*   **Newton’s second law of motion (நியூட்டனின் இரண்டாம் இயக்க விதி):** This is the most fundamental law. It states that the rate of change of a body's momentum is directly proportional to the net external force applied to it. Mathematically, \\\\[F = \\\\frac{dp}{dt} = \\\\frac{d(mv)}{dt}\\\\\]. If mass is constant, this simplifies to the famous equation \\\\[F = ma\\\\\].

*   **Impulse (கணத்தாக்கு):** This is the change in momentum of an object when a force is applied over a short time. Impulse is equal to the product of the force and the time duration (Impulse = FΔt = Δp). A cricketer pulling his hands back while catching a ball increases the time of impact, thus reducing the force on his hands.

*   **Newton’s third law of motion (நியூட்டனின் மூன்றாம் இயக்க விதி):** For every action, there is an equal and opposite reaction (ஒவ்வொரு வினைக்கும் சமமான எதிர் வினை உண்டு). It's crucial to remember that the action and reaction forces always act on two different bodies.

## 5.2 Conservation of Momentum and Equilibrium (உந்தம் அழிவின்மை மற்றும் சமநிலை)
*   **Law of conservation of linear momentum (நேர்கோட்டு உந்தம் அழிவின்மை விதி):** This law is a direct consequence of Newton's second and third laws. It states that if the net external force acting on a system of interacting particles is zero, the total linear momentum of the system remains constant. This principle explains the recoil of a gun and the propulsion of rockets.

*   **Equilibrium of concurrent forces (ஒருதள விசைகளின் சமநிலை):** A particle is in equilibrium when the net external force acting on it is zero (\\\\(\\Sigma F = 0\\\\)). If three forces act on a body in equilibrium, they can be represented by the sides of a closed triangle (Lami's Theorem).

## 5.3 Friction and Circular Motion (உராய்வு மற்றும் வட்ட இயக்கம்)
*   **Friction (உராய்வு):** This is a force that opposes the relative motion (or tendency of relative motion) between surfaces in contact. 
    *   **Static and kinetic friction (நிலை மற்றும் இயக்க உராய்வு):** Static friction acts when there is no relative motion, and it is a self-adjusting force up to a maximum value called limiting friction (\\\\(f_s \\leq \\mu_sN\\\\)). Kinetic friction acts when there is relative motion and is roughly constant (\\\\(f_k = \\mu_kN\\\\)).
    *   **Rolling friction (உருளும் உராய்வு):** The friction that occurs when an object rolls over a surface. It is significantly smaller than static or kinetic friction, which is why wheels are so effective.

*   **Dynamics of uniform circular motion (சீரான வட்ட இயக்கத்தின் இயக்கவியல்):** For an object to move in a circle at a constant speed, a net force must act on it, directed towards the center of the circle. This force is called the **centripetal force** (மையநோக்கு விசை), and its magnitude is given by \\\\[F_c = \\\\frac{mv^2}{r}\\\\\]. This force is not a new kind of force; it is provided by other forces like tension, gravity, or friction.
    *   **Applications:** When a vehicle takes a turn on a level circular road, the centripetal force is provided by static friction. On a **banked road**, the road is tilted inwards so that a component of the normal force provides the necessary centripetal force, reducing the need for friction.


# 6. Worked Examples
**1. Easy:** A batsman hits back a ball straight in the direction of the bowler without changing its initial speed of 12 m/s. If the mass of the ball is 0.15 kg, determine the impulse imparted to the ball. (ஒரு மட்டையாளர் 12 மீ/வி ஆரம்ப வேகத்தில் வரும் பந்தை, பந்துவீச்சாளரின் திசைக்கு நேராகத் திருப்பி அடிக்கிறார். பந்தின் நிறை 0.15 கிகி எனில், பந்திற்கு அளிக்கப்பட்ட கணத்தாக்கைக் கண்டறியவும்.)
*   **Solution:**
    *   Impulse is the change in momentum (Δp).
    *   Initial momentum \\\\[p_i = mv = 0.15 \\\\text{ kg} \\times 12 \\\\text{ m/s}\\\\\].
    *   Final momentum \\\\[p_f = m(-v) = 0.15 \\\\text{ kg} \\times (-12 \\\\text{ m/s})\\\\\\] (since the direction is reversed).
    *   Impulse = \\\\[\\\\Delta p = p_f - p_i = m(-v) - mv = -2mv = -2 \\times 0.15 \\times 12 = -3.6 \\\\text{ Ns}\\\\\].
    *   The magnitude of the impulse is 3.6 Ns.

**2. Medium:** A block of mass 10 kg is placed on a rough horizontal surface whose coefficient of static friction is 0.5. If a horizontal force of 30 N is applied on the block, what is the force of friction on the block? (g = 10 m/s²) (ஒரு சொரசொரப்பான கிடைமட்டப் பரப்பில் 10 கிகி நிறையுள்ள ஒரு பொருள் வைக்கப்பட்டுள்ளது. அதன் நிலை உராய்வுக் குணகம் 0.5 ஆகும். பொருளின் மீது 30 N கிடைமட்ட விசை செலுத்தப்பட்டால், பொருளின் மீதான உராய்வு விசை என்ன?)
*   **Solution:**
    1.  First, calculate the maximum possible static friction (limiting friction).
    2.  \\\\(f_{s(max)} = \\mu_s N = \\mu_s mg = 0.5 \\times 10 \\times 10 = 50 \\\\text{ N}\\\\\).
    3.  The applied horizontal force is 30 N.
    4.  Since the applied force (30 N) is less than the limiting friction (50 N), the block will not move.
    5.  In this case, static friction is a self-adjusting force that will be equal and opposite to the applied force. Therefore, the force of friction is 30 N.

**3. Must-Practice:** A gun of mass 5 kg fires a bullet of mass 20 g with a speed of 500 m/s. What is the recoil speed of the gun? (5 கிகி நிறையுள்ள ஒரு துப்பாக்கியிலிருந்து 20 கி நிறையுள்ள ஒரு தோட்டா 500 மீ/வி வேகத்தில் சுடப்படுகிறது. துப்பாக்கியின் பின்னியக்க வேகம் என்ன?)
*   **Solution:**
    *   According to the law of conservation of linear momentum, the total initial momentum is zero (since both are at rest).
    *   The total final momentum must also be zero.
    *   Let M and V be the mass and recoil velocity of the gun, and m and v be the mass and velocity of the bullet.
    *   \\\\(MV + mv = 0\\\\).
    *   \\\\((5 \\\\text{ kg}) \\times V + (0.020 \\\\text{ kg}) \\times (500 \\\\text{ m/s}) = 0\\\\).
    *   \\\\(5V + 10 = 0 \\implies 5V = -10\\\\).
    *   \\\\(V = -2 \\\\text{ m/s}\\\\\). The recoil speed of the gun is 2 m/s (the negative sign indicates the opposite direction).


# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\\\[F = \\\\frac{dp}{dt} = ma\\\\\\] | Newton's Second Law (நியூட்டனின் இரண்டாம் விதி) |
| \\\\[f_s \\leq \\mu_sN\\\\\\] | Static Friction (நிலை உராய்வு) |
| \\\\[f_k = \\mu_kN\\\\\\] | Kinetic Friction (இயக்க உராய்வு) |
| \\\\[F_c = \\\\frac{mv^2}{r}\\\\\\] | Centripetal Force (மையநோக்கு விசை) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="30" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Free Body Diagram (தனித்த பொருள் விசைப்படம்)</text>
    <rect x="125" y="80" width="50" height="30" style="fill:lightblue;stroke:black" />
    <text x="150" y="100" font-size="12" text-anchor="middle">m</text>
    
    <line x1="150" y1="110" x2="150" y2="160" stroke="red" marker-end="url(#arrow)" />
    <text x="160" y="140" fill="red">mg (Weight)</text>

    <line x1="150" y1="80" x2="150" y2="30" stroke="green" marker-end="url(#arrow)" />
    <text x="160" y="55" fill="green">N (Normal Force)</text>

    <line x1="175" y1="95" x2="250" y2="95" stroke="blue" marker-end="url(#arrow)" />
    <text x="215" y="90" fill="blue">F_applied</text>

    <line x1="125" y1="95" x2="50" y2="95" stroke="orange" marker-end="url(#arrow)" />
    <text x="85" y="90" fill="orange">f (Friction)</text>
</svg>

\`\`\`
DIAGRAM: Free Body Diagram (தனித்த பொருள் விசைப்படம்)
Shows all forces acting on a block of mass 'm' on a surface.
N (Normal Force / செங்குத்து விசை) upwards, mg (Weight / எடை) downwards.
F_applied (Applied Force / செலுத்தப்பட்ட விசை) to the right, f (Friction / உராய்வு) to the left.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** நியூட்டனின் மூன்று விதிகளை நினைவில் கொள்ள: "**நி**லைமம், **வி**சை, **வி**னை.\" (**நிவிவி** - NiViVi). This helps remember Inertia (First Law), Force (F=ma, Second Law), and Action-Reaction (வினை-எதிர்வினை, Third Law).

> **NEET Hack:** In problems involving connected blocks (with strings or in contact), always consider the entire system first (F_net = m_total * a) to find the acceleration. Then, isolate one block to find internal forces like tension. This two-step process simplifies most problems.

[Download PDF Summary of Laws of Motion](/downloads/laws-of-motion-summary.pdf)

# 9. Quiz Yourself
1.  Can action and reaction forces cancel each other out? Why or why not?
2.  You are in a lift that is accelerating downwards. Will your apparent weight increase, decrease, or remain the same?
3.  Why is it easier to roll a barrel than to slide it?

> **Student Tip (மாணவர் கருத்து):** இந்த பாடத்தில் உள்ள எந்த கருத்து உங்களுக்கு மிகவும் கடினமாக இருந்தது? குறிப்பாக, உராய்வு மற்றும் வட்ட இயக்க கணக்குகளை தீர்க்க வேறு ஏதேனும் எளிய வழிகள் உள்ளதா? உங்கள் கருத்துக்களைப் பகிருங்கள்!

# 10. Next Steps & Community Discussion
– **Next Module:** Work, Energy, and Power (வேலை, ஆற்றல் மற்றும் திறன்). Now that we understand forces, we will explore how they do work and change the energy of a system.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** If you are sitting in a car that suddenly turns right, you feel pushed to the left. Is there a real force pushing you left? Discuss this concept of 'centrifugal force' on our forum.
`
};

