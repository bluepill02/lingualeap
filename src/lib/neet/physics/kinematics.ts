
import type { NeetModule } from '@/lib/types';

export const kinematics: NeetModule = {
  id: 'physics-kinematics',
  title: 'Kinematics',
  chapter: 'Kinematics',
  subject: 'Physics',
  conceptNotes: `
### 1. Motion in a Straight Line (நேர்கோட்டு இயக்கம்)
*   **Distance vs. Displacement:** Distance is the total path length (scalar). Displacement is the change in position (vector).
*   **Speed vs. Velocity:** Speed is the rate of change of distance (scalar). Velocity is the rate of change of displacement (vector).
*   **Acceleration (முடுக்கம்):** The rate of change of velocity.
*   **Equations of Motion (for constant acceleration):**
    1.  v = u + at
    2.  s = ut + ½at²
    3.  v² = u² + 2as
*   **Motion under Gravity:** Same as above, but a = -g (for upward motion) or a = +g (for downward motion).

### 2. Motion in a Plane (தளத்தில் இயக்கம்)
*   **Vectors (வெக்டர்கள்):** Quantities with both magnitude and direction.
    *   **Vector Addition:** Triangle law, Parallelogram law.
    *   **Resolution of Vectors:** Splitting a vector into perpendicular components.
    *   **Dot Product (புள்ளிப் பெருக்கல்):** A ⋅ B = ABcosθ (results in a scalar).
    *   **Cross Product (குறுக்குப் பெருக்கல்):** A × B = ABsinθ n̂ (results in a vector).
*   **Projectile Motion (எறியிய இயக்கம்):** Motion of an object thrown into the air. It's a combination of horizontal motion (constant velocity) and vertical motion (constant acceleration, g).
    *   **Time of Flight (T):** T = 2usinθ / g
    *   **Maximum Height (H):** H = u²sin²θ / 2g
    *   **Range (R):** R = u²sin(2θ) / g. The range is maximum when θ = 45°.
*   **Uniform Circular Motion (சீரான வட்ட இயக்கம்):** Motion in a circle at a constant speed.
    *   The velocity is always changing (direction changes), so there is an acceleration.
    *   **Centripetal Acceleration (மையநோக்கு முடுக்கம்):** a_c = v²/r. It is always directed towards the center of the circle.
    *   **Centripetal Force:** The force required to maintain circular motion, F_c = mv²/r.
`,
  workedExamples: [
    {
        problem: "A ball is thrown vertically upwards with a velocity of 20 m/s. What is the maximum height it reaches? (Take g = 10 m/s²)",
        solution: "At the maximum height, the final velocity (v) is 0. Using the equation of motion v² = u² + 2as, we have 0² = (20)² + 2(-10)s. 0 = 400 - 20s. 20s = 400. s = 20 m. The maximum height reached is 20 meters."
    },
    {
        problem: "A cricketer can throw a ball to a maximum horizontal distance of 100 m. How high above the ground can the cricketer throw the same ball?",
        solution: "The maximum horizontal range (R_max) occurs at θ = 45°. R_max = u²sin(2*45°)/g = u²/g. We are given R_max = 100 m, so u²/g = 100. To throw the ball to the maximum height, it must be thrown vertically upwards (θ = 90°). The maximum height H_max = u²sin²(90°)/(2g) = u²/(2g). Since u²/g = 100, H_max = 100 / 2 = 50 m."
    },
    {
        problem: "Find the angle between two vectors A = 2i + 3j and B = 3i - 2j.",
        solution: "We use the dot product formula: A ⋅ B = |A| |B| cosθ. First, calculate the dot product: A ⋅ B = (2)(3) + (3)(-2) = 6 - 6 = 0. Since the dot product is zero, the vectors are perpendicular to each other, and the angle θ = 90°."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
