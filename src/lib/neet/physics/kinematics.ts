
import type { NeetModule } from '@/lib/types';

const metadata = {
  "id": "physics-kinematics",
  "title": "Kinematics",
  "glossary": [
    { "English": "Displacement", "தமிழ்": "இடப்பெயர்ச்சி" },
    { "English": "Velocity", "தமிழ்": "திசைவேகம்" },
    { "English": "Acceleration", "தமிழ்": "முடுக்கம்" },
    { "English": "Projectile Motion", "தமிழ்": "எறியிய இயக்கம்" },
    { "English": "Centripetal Acceleration", "தமிழ்": "மையநோக்கு முடுக்கம்" }
  ],
  "learningObjectives": [
    "Differentiate between scalar and vector quantities like distance/displacement and speed/velocity.",
    "Apply the equations of motion to solve problems involving uniformly accelerated objects.",
    "Analyze projectile motion by resolving it into independent horizontal and vertical components.",
    "Calculate centripetal acceleration for an object in uniform circular motion."
  ],
  "prerequisites": [
    "Understanding of basic algebra and trigonometry (sin, cos, tan).",
    "Ability to read and interpret graphs.",
    "Familiarity with fundamental units and dimensions from the 'Physics and Measurement' chapter."
  ],
  "conceptOverview": "Imagine watching a thrilling Jallikattu (சல்லிக்கட்டு) event in Madurai. The bull runs in a straight line, the player dodges in a curve, and a thrown cloth flies in an arc. Kinematics (இயங்கியல்) is the branch of physics that helps us describe this motion without asking 'why' it happens. We will learn to be like a super-fast camera, capturing the path (பாதை), speed (வேகம்), and acceleration (முடுக்கம்) of any object, from a cricket ball to a planet. This chapter gives us the language to describe the 'what, where, and when' of movement.",
  "studyTips": [
    {
      "tip": "Create a 'formula sheet' specifically for the three equations of motion and the formulas for projectile motion (Time of Flight, Max Height, Range). Practice deriving one from the others.",
      "NEET_Hack": "For projectile motion, remember that the range is the same for angles θ and (90°-θ). If a question mentions two different angles giving the same range, this is the concept being tested. This can save you calculation time."
    },
    {
      "tip": "Draw diagrams for every problem, especially for relative velocity and projectile motion. Visualizing the vectors makes it much easier to resolve components correctly.",
      "NEET_Hack": "Remember that at the highest point of a projectile's trajectory, the vertical component of velocity is zero, but the acceleration is still 'g'. Many conceptual questions are based on this single point."
    }
  ],
  "practice": {
    "mcqs": [
        {
            "question": "A body starts from rest and travels for t second with uniform acceleration of 2 m/s². If the displacement made by it is 16 m, the time of travel t is:",
            "options": ["4 s", "8 s", "16 s", "2 s"],
            "answer": "4 s",
            "explanation": "Using s = ut + ½at². Here u=0. So, 16 = 0 + ½(2)t². t² = 16, so t = 4 s."
        },
        {
            "question": "For a projectile, the ratio of maximum height reached to the square of time of flight is:",
            "options": ["5:4", "5:2", "g:8", "g:4"],
            "answer": "g:8",
            "explanation": "H = u²sin²θ / 2g and T = 2usinθ / g. So T² = 4u²sin²θ / g². The ratio H/T² = (u²sin²θ / 2g) / (4u²sin²θ / g²) = g/8."
        },
        {
            "question": "The angle between A = i + j and B = i - j is:",
            "options": ["45°", "90°", "180°", "0°"],
            "answer": "90°",
            "explanation": "The dot product A ⋅ B = (1)(1) + (1)(-1) = 1 - 1 = 0. Since the dot product is zero, the vectors are perpendicular."
        },
        {
            "question": "A particle is moving in a circular path of radius r. The displacement after half a circle would be:",
            "options": ["Zero", "πr", "2r", "2πr"],
            "answer": "2r",
            "explanation": "After half a circle, the particle is at the diametrically opposite point. The displacement is the straight-line distance between the start and end points, which is the diameter (2r)."
        },
        {
            "question": "A car travels from A to B at a speed of 20 km/hr and returns at a speed of 30 km/hr. The average speed of the car for the whole journey is:",
            "options": ["25 km/hr", "24 km/hr", "50 km/hr", "5 km/hr"],
            "answer": "24 km/hr",
            "explanation": "Average speed = 2v₁v₂ / (v₁ + v₂) = (2 * 20 * 30) / (20 + 30) = 1200 / 50 = 24 km/hr."
        },
        {
            "question": "If the magnitude of the sum of two vectors is equal to the magnitude of their difference, the angle between the vectors is:",
            "options": ["0°", "45°", "90°", "180°"],
            "answer": "90°",
            "explanation": "|A+B| = |A-B| => √(A²+B²+2ABcosθ) = √(A²+B²-2ABcosθ). Squaring both sides gives A²+B²+2ABcosθ = A²+B²-2ABcosθ. This simplifies to 4ABcosθ = 0, which means cosθ = 0, so θ = 90°."
        },
        {
            "question": "The maximum range of a projectile is 400 m. The maximum height reached by it will be:",
            "options": ["100 m", "200 m", "400 m", "800 m"],
            "answer": "100 m",
            "explanation": "R_max = u²/g = 400 m. The height at the angle of maximum range (45°) is H = u²sin²(45°)/2g = u²(1/2)/2g = u²/4g = R_max/4 = 400/4 = 100 m."
        },
        {
            "question": "The slope of a velocity-time graph represents:",
            "options": ["Displacement", "Distance", "Acceleration", "Speed"],
            "answer": "Acceleration",
            "explanation": "Acceleration is the rate of change of velocity, which is the slope of the v-t graph."
        },
        {
            "question": "The centripetal acceleration of a body moving in a circle of radius 10 m with a uniform speed of 5 m/s is:",
            "options": ["2.5 m/s²", "5 m/s²", "10 m/s²", "0.5 m/s²"],
            "answer": "2.5 m/s²",
            "explanation": "a_c = v²/r = (5)²/10 = 25/10 = 2.5 m/s²."
        },
        {
            "question": "A body is thrown with a velocity of 9.8 m/s making an angle of 30° with the horizontal. It will hit the ground after a time of:",
            "options": ["1.5 s", "1 s", "3 s", "2 s"],
            "answer": "1 s",
            "explanation": "Time of flight T = 2usinθ / g = (2 * 9.8 * sin30°) / 9.8 = 2 * 0.5 = 1 s."
        },
        {
            "question": "What is the dot product of two perpendicular vectors?",
            "options": ["0", "1", "Their product", "Their sum"],
            "answer": "0",
            "explanation": "A ⋅ B = ABcosθ. If the vectors are perpendicular, θ=90° and cos90°=0. So, A ⋅ B = 0."
        },
        {
            "question": "A particle moves along a straight line such that its displacement at any time t is given by s = (t³ - 6t² + 3t + 4) meters. The velocity when the acceleration is zero is:",
            "options": ["-9 m/s", "42 m/s", "-12 m/s", "3 m/s"],
            "answer": "-9 m/s",
            "explanation": "v = ds/dt = 3t² - 12t + 3. a = dv/dt = 6t - 12. Acceleration is zero when 6t - 12 = 0, so t=2s. At t=2s, v = 3(2)² - 12(2) + 3 = 12 - 24 + 3 = -9 m/s."
        },
        {
            "question": "Which of the following is a scalar quantity?",
            "options": ["Displacement", "Velocity", "Force", "Speed"],
            "answer": "Speed",
            "explanation": "Speed has only magnitude, while displacement, velocity, and force have both magnitude and direction."
        },
        {
            "question": "A particle covers half of its total distance with speed v₁ and the rest half distance with speed v₂. Its average speed during the complete journey is:",
            "options": ["(v₁ + v₂)/2", "v₁v₂ / (v₁ + v₂)", "2v₁v₂ / (v₁ + v₂)", "√(v₁v₂)"],
            "answer": "2v₁v₂ / (v₁ + v₂)",
            "explanation": "Let the total distance be 2d. Time taken for the first half is t₁=d/v₁. Time for the second half is t₂=d/v₂. Average speed = Total distance / Total time = 2d / (d/v₁ + d/v₂) = 2 / (1/v₁ + 1/v₂) = 2v₁v₂ / (v₁ + v₂)."
        },
        {
            "question": "At the top of the trajectory of a projectile, the direction of its velocity and acceleration are:",
            "options": ["Parallel to each other", "Anti-parallel to each other", "Perpendicular to each other", "Inclined at an angle of 45° to each other"],
            "answer": "Perpendicular to each other",
            "explanation": "At the highest point, the velocity is purely horizontal, while the acceleration (due to gravity) is purely vertical."
        },
        {
            "question": "The cross product of two parallel vectors is:",
            "options": ["A null vector", "A unit vector", "A scalar", "A vector of magnitude 1"],
            "answer": "A null vector",
            "explanation": "A × B = ABsinθ n̂. For parallel vectors, θ=0°, and sin0°=0. So, the cross product is a null vector (zero vector)."
        },
        {
            "question": "A boat is sent across a river with a velocity of 8 km/hr. If the resultant velocity of the boat is 10 km/hr, then the velocity of the river flow is:",
            "options": ["10 km/hr", "8 km/hr", "6 km/hr", "4 km/hr"],
            "answer": "6 km/hr",
            "explanation": "The boat's velocity and river's velocity are perpendicular. The resultant is the hypotenuse. v_resultant² = v_boat² + v_river². 10² = 8² + v_river². 100 = 64 + v_river². v_river² = 36. v_river = 6 km/hr."
        },
        {
            "question": "The area under the acceleration-time graph represents:",
            "options": ["Displacement", "Change in velocity", "Force", "Work done"],
            "answer": "Change in velocity",
            "explanation": "Since a = dv/dt, dv = a dt. Integrating both sides, ∫dv = ∫a dt. So, Δv = Area under a-t graph."
        },
        {
            "question": "For uniform circular motion, which of the following remains constant?",
            "options": ["Velocity", "Acceleration", "Speed", "Force"],
            "answer": "Speed",
            "explanation": "In uniform circular motion, the magnitude of the velocity (speed) is constant, but its direction continuously changes."
        },
        {
            "question": "The range of a projectile is the same when its angles of projection are:",
            "options": ["30° and 60°", "45° and 60°", "30° and 45°", "θ and (90°-θ)"],
            "answer": "θ and (90°-θ)",
            "explanation": "The range formula R = u²sin(2θ)/g. sin(2(90-θ)) = sin(180-2θ) = sin(2θ). So the range is the same for θ and 90-θ."
        },
        {
            "question": "Which of the following is an example of one-dimensional motion?",
            "options": ["Motion of a planet around the sun", "Motion of a car on a circular track", "A train running on a straight track", "A projectile in motion"],
            "answer": "A train running on a straight track",
            "explanation": "Motion along a straight line is one-dimensional motion."
        },
        {
            "question": "The time of ascent for a body projected vertically upwards is:",
            "options": ["Equal to the time of descent", "Greater than the time of descent", "Less than the time of descent", "Half the time of descent"],
            "answer": "Equal to the time of descent",
            "explanation": "In the absence of air resistance, the time taken to go up is equal to the time taken to come down to the same level."
        },
        {
            "question": "If |A × B| = √3 (A ⋅ B), then the angle between A and B is:",
            "options": ["30°", "45°", "60°", "90°"],
            "answer": "60°",
            "explanation": "ABsinθ = √3 (ABcosθ). tanθ = √3. So, θ = 60°."
        },
        {
            "question": "What is the centripetal force on a 1 kg body moving in a circle of radius 1 m with an angular velocity of 1 rad/s?",
            "options": ["1 N", "2 N", "0.5 N", "10 N"],
            "answer": "1 N",
            "explanation": "F_c = mrω² = (1 kg)(1 m)(1 rad/s)² = 1 N."
        },
        {
            "question": "If displacement of a particle is zero, the distance covered:",
            "options": ["Must be zero", "Cannot be zero", "May or may not be zero", "Is negative"],
            "answer": "May or may not be zero",
            "explanation": "If the particle returns to its starting point, displacement is zero, but distance is not. If it doesn't move, both are zero."
        }
    ],
    "assertionReasons": [
        {
            "assertion": "The speed of a projectile is minimum at the highest point.",
            "reason": "At the highest point, the vertical component of velocity is zero.",
            "answer": "A",
            "explanation": "At the highest point, the velocity is only the horizontal component (v_x = ucosθ), as the vertical component (v_y) becomes zero. This is the minimum speed during the flight. The reason is correct and explains the assertion."
        },
        {
            "assertion": "A body can have acceleration even if its velocity is zero at a given instant.",
            "reason": "When a body is thrown vertically upwards, its velocity is zero at the highest point but acceleration is g.",
            "answer": "A",
            "explanation": "The reason provides a perfect example to prove the assertion. At the peak of its trajectory, a vertically thrown body momentarily stops (v=0) but is still being accelerated downwards by gravity."
        },
        {
            "assertion": "The average velocity of a body over a closed loop path is zero.",
            "reason": "In a closed loop, the displacement of the body is zero.",
            "answer": "A",
            "explanation": "Average velocity is defined as total displacement divided by total time. Since the displacement for a closed loop is zero, the average velocity is also zero. The reason explains the assertion."
        },
        {
            "assertion": "The cross product of two vectors is a scalar quantity.",
            "reason": "The dot product of two vectors is a vector quantity.",
            "answer": "E",
            "explanation": "Both the assertion and the reason are false. The cross product results in a vector, and the dot product results in a scalar."
        },
        {
            "assertion": "An object in uniform circular motion has constant acceleration.",
            "reason": "The centripetal acceleration is constant in magnitude and direction.",
            "answer": "D",
            "explanation": "The assertion is false. While the magnitude of the centripetal acceleration (v²/r) is constant, its direction continuously changes, always pointing towards the center. Therefore, the acceleration vector is not constant."
        },
        {
            "assertion": "The range of a projectile is maximum for an angle of projection of 45°.",
            "reason": "The range of a projectile is given by R = u²sin(2θ)/g.",
            "answer": "A",
            "explanation": "The reason provides the correct formula for the range. The value of sin(2θ) is maximum (1) when 2θ = 90°, which means θ = 45°. This correctly explains the assertion."
        },
        {
            "assertion": "The slope of the displacement-time graph gives the velocity.",
            "reason": "Velocity is the rate of change of displacement.",
            "answer": "A",
            "explanation": "The reason correctly defines velocity, which corresponds to the slope (rate of change) of the s-t graph. The reason explains the assertion."
        },
        {
            "assertion": "Vector addition is commutative.",
            "reason": "A + B = B + A.",
            "answer": "A",
            "explanation": "The reason is the mathematical statement of the commutative law for vector addition, which proves the assertion."
        },
        {
            "assertion": "A body cannot be in one-dimensional motion if its velocity is zero.",
            "reason": "A body in one-dimensional motion must have a constant velocity.",
            "answer": "E",
            "explanation": "Both assertion and reason are false. A body can be momentarily at rest (zero velocity) in 1D motion (e.g., at the peak of a vertical throw). A body in 1D motion can have variable velocity (i.e., acceleration)."
        },
        {
            "assertion": "The dot product of a vector with itself is the square of its magnitude.",
            "reason": "A ⋅ A = A * A * cos(0°) = A².",
            "answer": "A",
            "explanation": "The reason correctly applies the dot product formula, where the angle between a vector and itself is 0°, to prove the assertion."
        },
        {
            "assertion": "If a body is dropped from a moving train, its path as seen by an observer on the ground is a parabola.",
            "reason": "It has a horizontal velocity (of the train) and a vertical acceleration (due to gravity).",
            "answer": "A",
            "explanation": "The reason correctly identifies the components of motion, which are the defining characteristics of projectile motion, resulting in a parabolic path. The reason explains the assertion."
        },
        {
            "assertion": "The magnitude of a vector is always a scalar.",
            "reason": "A scalar quantity is one that has only magnitude and no direction.",
            "answer": "A",
            "explanation": "The reason provides the definition of a scalar, which correctly describes the magnitude of a vector."
        },
        {
            "assertion": "Distance is a scalar quantity, but displacement is a vector quantity.",
            "reason": "Distance has only magnitude, while displacement has both magnitude and direction.",
            "answer": "A",
            "explanation": "The reason correctly states the difference between scalar and vector quantities as they apply to distance and displacement, explaining the assertion."
        },
        {
            "assertion": "A negative acceleration always means the body is slowing down.",
            "reason": "Acceleration is the rate of change of velocity.",
            "answer": "D",
            "explanation": "The assertion is false. Negative acceleration means the acceleration is in the negative direction. If the velocity is also in the negative direction, the body will speed up. The reason is a correct definition but doesn't support the false assertion."
        },
        {
            "assertion": "The sum of the magnitudes of two vectors is always greater than or equal to the magnitude of their resultant.",
            "reason": "The resultant of two vectors is given by the triangle law of vector addition.",
            "answer": "A",
            "explanation": "This is the triangle inequality. The length of one side of a triangle (|A+B|) can never be greater than the sum of the lengths of the other two sides (|A| + |B|). The equality holds when the vectors are in the same direction."
        }
    ],
    "matchTheColumns": [
        {
            "column1": ["a) Distance", "b) Displacement", "c) Speed", "d) Velocity"],
            "column2": ["i) Vector", "ii) Scalar", "iii) Scalar", "iv) Vector"],
            "answer": "a-ii, b-iv, c-iii, d-i"
        },
        {
            "column1": ["a) Centripetal acceleration", "b) Time of flight", "c) Maximum height", "d) Range"],
            "column2": ["i) u²sin²θ / 2g", "ii) v²/r", "iii) u²sin(2θ) / g", "iv) 2usinθ / g"],
            "answer": "a-ii, b-iv, c-i, d-iii"
        },
        {
            "column1": ["a) Dot Product", "b) Cross Product", "c) Unit Vector", "d) Null Vector"],
            "column2": ["i) Scalar quantity", "ii) Vector quantity", "iii) Vector with zero magnitude", "iv) Vector with unit magnitude"],
            "answer": "a-i, b-ii, c-iv, d-iii"
        },
        {
            "column1": ["a) v = u + at", "b) s = ut + ½at²", "c) v² = u² + 2as", "d) s_nth"],
            "column2": ["i) Displacement-time relation", "ii) Velocity-displacement relation", "iii) u + a/2(2n-1)", "iv) Velocity-time relation"],
            "answer": "a-iv, b-i, c-ii, d-iii"
        },
        {
            "column1": ["a) Slope of s-t graph", "b) Slope of v-t graph", "c) Area under v-t graph", "d) Area under a-t graph"],
            "column2": ["i) Acceleration", "ii) Change in velocity", "iii) Velocity", "iv) Displacement"],
            "answer": "a-iii, b-i, c-iv, d-ii"
        },
        {
            "column1": ["a) Range is maximum", "b) Height is maximum", "c) Range = 4 * Height", "d) A ⋅ B = 0"],
            "column2": ["i) θ = 90°", "ii) θ = 45°", "iii) Vectors are perpendicular", "iv) θ = 45°"],
            "answer": "a-ii, b-i, c-iv, d-iii"
        },
        {
            "column1": ["a) Parallelogram Law", "b) Triangle Law", "c) Resolution of vector", "d) Relative velocity"],
            "column2": ["i) V_AB = V_A - V_B", "ii) A = A_x i + A_y j", "iii) Vector addition", "iv) Vector addition"],
            "answer": "a-iii, b-iv, c-ii, d-i"
        },
        {
            "column1": ["a) Uniform motion", "b) Uniformly accelerated motion", "c) Non-uniform acceleration", "d) Uniform circular motion"],
            "column2": ["i) Acceleration is constant", "ii) Speed is constant, velocity changes", "iii) Acceleration is zero", "iv) Acceleration is variable"],
            "answer": "a-iii, b-i, c-iv, d-ii"
        },
        {
            "column1": ["a) |A + B|", "b) |A × B|", "c) A ⋅ B", "d) A / |A|"],
            "column2": ["i) ABsinθ", "ii) Unit vector in direction of A", "iii) ABcosθ", "iv) √(A² + B² + 2ABcosθ)"],
            "answer": "a-iv, b-i, c-iii, d-ii"
        },
        {
            "column1": ["a) Body dropped from a height", "b) Body projected horizontally", "c) Body projected at an angle", "d) Body in circular motion"],
            "column2": ["i) Projectile motion", "ii) One dimensional motion", "iii) Uniform circular motion", "iv) Projectile motion"],
            "answer": "a-ii, b-iv, c-i, d-iii"
        },
        {
            "column1": ["a) 1D motion", "b) 2D motion", "c) 3D motion", "d) Zero velocity"],
            "column2": ["i) Bird flying in the sky", "ii) A body at rest", "iii) Car moving on a straight road", "iv) A billiard ball moving over the table"],
            "answer": "a-iii, b-iv, c-i, d-ii"
        },
        {
            "column1": ["a) Angular velocity (ω)", "b) Angular acceleration (α)", "c) Time period (T)", "d) Frequency (ν)"],
            "column2": ["i) 1/T", "ii) dω/dt", "iii) 2π/ω", "iv) dθ/dt"],
            "answer": "a-iv, b-ii, c-iii, d-i"
        },
        {
            "column1": ["a) v_avg > |v_avg|", "b) distance ≥ |displacement|", "c) a=0, v must be constant", "d) v=0, a must be 0"],
            "column2": ["i) Always true", "ii) True", "iii) Always false", "iv) May be true"],
            "answer": "a-iii, b-i, c-ii, d-iv"
        },
        {
            "column1": ["a) i ⋅ i", "b) i × i", "c) i ⋅ j", "d) i × j"],
            "column2": ["i) 0", "ii) 1", "iii) k", "iv) 0 (null vector)"],
            "answer": "a-ii, b-iv, c-i, d-iii"
        },
        {
            "column1": ["a) Velocity vector", "b) Acceleration vector", "c) Displacement vector", "d) Position vector"],
            "column2": ["i) Points from origin to position", "ii) Joins initial to final position", "iii) Rate of change of position vector", "iv) Rate of change of velocity vector"],
            "answer": "a-iii, b-iv, c-ii, d-i"
        }
    ]
  }
};

const markdownContent = `
# 1. Module Title
– Physics – Kinematics (இயற்பியல் - இயங்கியல்)

# 2. Learning Objectives
1. After this, you will be able to differentiate between scalar and vector quantities like distance/displacement and speed/velocity.
2. After this, you will be able to apply the equations of motion to solve problems involving uniformly accelerated objects.
3. After this, you will be able to analyze projectile motion by resolving it into independent horizontal and vertical components.
4. After this, you will be able to calculate centripetal acceleration for an object in uniform circular motion.

# 3. Prerequisites
– Understanding of basic algebra and trigonometry (sin, cos, tan).
– Ability to read and interpret graphs.
– Familiarity with fundamental units and dimensions from the 'Physics and Measurement' chapter.

# 4. Concept Overview
Imagine watching a thrilling Jallikattu (சல்லிக்கட்டு) event in Madurai. The bull runs in a straight line, the player dodges in a curve, and a thrown cloth flies in an arc. Kinematics (இயங்கியல்) is the branch of physics that helps us describe this motion without asking 'why' it happens. We will learn to be like a super-fast camera, capturing the path (பாதை), speed (வேகம்), and acceleration (முடுக்கம்) of any object, from a cricket ball to a planet. This chapter gives us the language to describe the 'what, where, and when' of movement.

# 5. Detailed Explanation

## 5.1 Straight Line Motion (நேர்க்கோட்டு இயக்கம்)
This is the simplest form of motion. We use key terms to describe it:
*   **Displacement (இடப்பெயர்ச்சி):** The shortest distance between the initial and final points. It's a vector.
*   **Distance (தூரம்):** The total path length covered. It's a scalar.
*   **Velocity (திசைவேகம்):** Rate of change of displacement. \`v = ds/dt\`. Vector.
*   **Acceleration (முடுக்கம்):** Rate of change of velocity. \`a = dv/dt\`. Vector.

For **uniformly accelerated motion**, we use three key equations:
\\[v = u + at\\]
\\[s = ut + \\frac{1}{2}at^2\\]
\\[v^2 = u^2 + 2as\\]

## 5.2 Motion in a Plane (Projectile and Circular Motion)
When an object moves in two dimensions, we analyze the motion along the x and y axes independently.

**Projectile Motion (எறியிய இயக்கம்):**
This is the motion of an object thrown into the air, subject only to gravity. The path is a parabola.
*   Horizontal motion: Constant velocity (\`a_x = 0\`).
*   Vertical motion: Constant acceleration (\`a_y = -g\`).
*   **Time of Flight (T):** \\[T = \\frac{2u \\sin\\theta}{g}\\]
*   **Maximum Height (H):** \\[H = \\frac{u^2 \\sin^2\\theta}{2g}\\]
*   **Horizontal Range (R):** \\[R = \\frac{u^2 \\sin(2\\theta)}{g}\\]

**Uniform Circular Motion (சீரான வட்ட இயக்கம்):**
An object moves in a circle at a constant speed. The velocity vector is always changing direction, so there is an acceleration.
*   **Centripetal Acceleration (மையநோக்கு முடுக்கம்):** Always directed towards the center of the circle.
    \\[a_c = \\frac{v^2}{r} = \\omega^2 r\\]

# 6. Worked Examples

**1. Easy:** A car accelerates from rest to a speed of 20 m/s in 10 s. What is its acceleration?
*   **Solution:**
    *   Using \`v = u + at\`.
    *   Given: initial velocity \`u = 0\`, final velocity \`v = 20 m/s\`, time \`t = 10 s\`.
    *   \`20 = 0 + a(10)\`
    *   \`a = 20 / 10 = 2 m/s²\`.

**2. Medium:** A stone is dropped from a rising balloon at a height of 76 m. The balloon is ascending with a velocity of 30 m/s. What is the velocity of the stone after 2 seconds? (g=10 m/s²)
*   **Solution:**
    *   When dropped, the stone inherits the balloon's upward velocity. So, initial velocity of the stone, \`u = +30 m/s\`.
    *   Acceleration \`a = -g = -10 m/s²\`. Time \`t = 2 s\`.
    *   Using \`v = u + at\`.
    *   \`v = 30 + (-10)(2) = 30 - 20 = 10 m/s\`.
    *   The velocity is 10 m/s in the upward direction.

**3. Must-Practice:** A projectile is fired at an angle of 45° with the horizontal. The elevation angle of the projectile at its highest point as seen from the point of projection is:
*   **Solution:**
    1.  At the highest point, \`y = H = (u²sin²45°)/(2g) = u²/(4g)\`.
    2.  The horizontal distance to this point is \`x = R/2 = (u²sin90°)/(2g) = u²/(2g)\`.
    3.  The elevation angle \`φ\` is the angle of the line connecting the projection point to the highest point.
    4.  \`tan(φ) = y/x = (u²/(4g)) / (u²/(2g)) = (1/4g) * (2g/1) = 2/4 = 1/2\`.
    5.  Therefore, \`φ = tan⁻¹(1/2)\`.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \`v = u + at\` | Velocity-time relation |
| \`R = (u² sin(2θ)) / g\` | Range of a Projectile (எறியத்தின் வீச்சு) |
| \`a_c = v²/r\` | Centripetal Acceleration (மையநோக்கு முடுக்கம்) |
| \`V_AB = V_A - V_B\` | Relative Velocity (சார்பு திசைவேகம்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <path d="M 20 180 C 100 20, 200 20, 280 180" stroke="blue" stroke-width="2" fill="none" stroke-dasharray="4"/>
    <arrow-marker id="arrow" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="black" /></arrow-marker>
    <line x1="20" y1="180" x2="100" y2="180" stroke="black" marker-end="url(#arrow)" />
    <text x="60" y="195" font-size="12" text-anchor="middle">u_x</text>
    <line x1="20" y1="180" x2="20" y2="100" stroke="black" marker-end="url(#arrow)" />
    <text x="10" y="140" font-size="12">u_y</text>
    <line x1="150" y1="50" x2="150" y2="90" stroke="red" marker-end="url(#arrow)" />
    <text x="160" y="75" font-size="12" fill="red">g</text>
    <text x="150" y="195" font-size="14" text-anchor="middle">Projectile Motion (எறியிய இயக்கம்)</text>
</svg>

```text
DIAGRAM: Path of a Projectile (எறியிய இயக்கம்)
The path is a parabola.
Initial velocity 'u' is split into horizontal (u_x) and vertical (u_y) components.
The only acceleration is gravity 'g' acting downwards.
```

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** மூன்று இயக்க சமன்பாடுகளை நினைவில் கொள்ள: "வேகம், இடம், வேகத்தின் வர்க்கம்." (Velocity, place, square of velocity). This helps remember the primary variable in each equation: v = u+at, s = ut+½at², v² = u²+2as.
> **NEET Hack:** For questions involving a body dropped from a moving object (balloon, aeroplane), always remember to give the initial velocity of the dropped body equal to the velocity of the moving object at that instant.

[Download PDF Summary of Kinematics](/downloads/kinematics-summary.pdf)

# 9. Self-Check Quiz
1.  Can a body have a constant speed but still have a varying velocity? Explain with an example.
2.  Under what condition is the distance covered equal to the magnitude of the displacement?
3.  A ball is thrown upwards. At the highest point of its journey, what are its velocity and acceleration?

> **Student Tip (மாணவர் கருத்து):** இந்த பாடத்தில் உள்ள எந்த கருத்து உங்களுக்கு மிகவும் கடினமாக இருந்தது? Projectile motion கணக்குகளை எளிதாக தீர்க்க உங்களுக்கு வேறு ஏதேனும் குறிப்புகள் உள்ளதா?

# 10. Next Steps & Community Discussion
– **Next Module:** Laws of Motion (இயக்க விதிகள்). Now we will learn *why* things move by studying forces.
– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Is the driver of a car moving at a constant 60 km/h on a circular track accelerating? Discuss this with your peers on our forum.
`
