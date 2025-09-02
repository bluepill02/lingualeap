
import type { NeetModule } from '@/lib/types';

export const lawsOfMotion: NeetModule = {
  id: 'physics-laws-of-motion',
  title: 'Laws of Motion',
  chapter: 'Laws of Motion',
  subject: 'Physics',
  conceptNotes: `
### 1. Newton's Laws of Motion (நியூட்டனின் இயக்க விதிகள்)
*   **First Law (நிலைம விதி):** An object remains at rest or in uniform motion in a straight line unless acted upon by a net external force. This is the law of inertia.
*   **Second Law (விசைக்கான விதி):** The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction in which the force acts. F = dp/dt = ma.
*   **Third Law (வினை மற்றும் எதிர்வினை விதி):** For every action, there is an equal and opposite reaction.

### 2. Inertia and Momentum (நிலைமம் மற்றும் உந்தம்)
*   **Inertia (நிலைமம்):** The inability of a body to change its state of rest or uniform motion by itself.
*   **Momentum (p) (உந்தம்):** The product of mass and velocity. p = mv. It's a vector quantity.
*   **Impulse (கணத்தாக்கு):** The change in momentum. Impulse = FΔt = Δp.

### 3. Friction (உராய்வு)
*   A force that opposes relative motion between surfaces in contact.
*   **Static Friction (நிலை உராய்வு):** Opposes impending motion. It is self-adjusting.
*   **Kinetic Friction (இயக்க உராய்வு):** Opposes actual motion. It is less than the limiting static friction.
*   **Coefficient of Friction (μ):** f = μN, where N is the normal reaction.

### 4. Circular Motion Dynamics (வட்ட இயக்க விசையியல்)
*   **Centripetal Force (மையநோக்கு விசை):** The force required to keep an object in circular motion. F_c = mv²/r. It acts towards the center. (This is not a new force, but a net force provided by other forces like tension, gravity, or friction).
*   **Banking of Roads:** The outer edge of a road is raised to provide the necessary centripetal force from the components of normal reaction and friction, allowing vehicles to take a turn safely.

### 5. Conservation of Linear Momentum (நேர்க்கோட்டு உந்த அழிவின்மை விதி)
*   If the net external force on a system is zero, the total linear momentum of the system remains constant.
*   This principle is applied in cases of collisions, explosions, and recoil of a gun. (ஒரு துப்பாக்கி சுடும்போது, தோட்டா முன்னோக்கிச் செல்ல, துப்பாக்கி பின்னோக்கி நகர்வது போல).

### 6. Equilibrium of a Particle (ஒரு துகளின் சமநிலை)
*   A particle is in equilibrium when the net external force on it is zero. ΣF = 0.
`,
  workedExamples: [
    {
        problem: "A batsman hits back a ball straight in the direction of the bowler without changing its initial speed of 12 m/s. If the mass of the ball is 0.15 kg, determine the impulse imparted to the ball.",
        solution: "Impulse is the change in momentum (Δp). Initial momentum p_i = mv = 0.15 kg * 12 m/s. Final momentum p_f = m(-v) = 0.15 kg * (-12 m/s) (since the direction is reversed). Impulse = Δp = p_f - p_i = m(-v) - mv = -2mv = -2 * 0.15 * 12 = -3.6 Ns. The magnitude of the impulse is 3.6 Ns."
    },
    {
        problem: "A block of mass 10 kg is placed on a rough horizontal surface whose coefficient of static friction is 0.5. If a horizontal force of 30 N is applied on the block, what is the force of friction on the block? (g = 10 m/s²)",
        solution: "First, calculate the maximum possible static friction (limiting friction). f_s(max) = μ_s * N = μ_s * mg = 0.5 * 10 * 10 = 50 N. The applied horizontal force is 30 N. Since the applied force (30 N) is less than the limiting friction (50 N), the block will not move. In this case, the static friction is a self-adjusting force that will be equal and opposite to the applied force. Therefore, the force of friction is 30 N."
    },
    {
        problem: "A gun of mass 5 kg fires a bullet of mass 20 g with a speed of 500 m/s. What is the recoil speed of the gun?",
        solution: "According to the law of conservation of linear momentum, the total initial momentum is zero. The total final momentum must also be zero. Let M and V be the mass and recoil velocity of the gun, and m and v be the mass and velocity of the bullet. MV + mv = 0. (5 kg) * V + (0.020 kg) * (500 m/s) = 0. 5V + 10 = 0. 5V = -10. V = -2 m/s. The recoil speed of the gun is 2 m/s (the negative sign indicates the opposite direction)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
