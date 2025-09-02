
import type { NeetModule } from '@/lib/types';

export const rotationalMotion: NeetModule = {
  id: 'physics-rotational-motion',
  title: 'Rotational Motion',
  chapter: 'Rotational Motion',
  subject: 'Physics',
  conceptNotes: `
### 1. Rotational Variables (சுழற்சி மாறிகள்)
*   **Angular Position (θ):** Angle of rotation.
*   **Angular Velocity (ω):** Rate of change of angular position. ω = dθ/dt.
*   **Angular Acceleration (α):** Rate of change of angular velocity. α = dω/dt.
*   **Equations of Rotational Motion (for constant α):**
    *   ω = ω₀ + αt
    *   θ = ω₀t + ½αt²
    *   ω² = ω₀² + 2αθ

### 2. Torque and Angular Momentum (திருப்புவிசை மற்றும் கோண உந்தம்)
*   **Torque (τ) (திருப்புவிசை):** The rotational analogue of force. It is the turning effect of a force. τ = r × F = rFsinθ.
*   **Angular Momentum (L) (கோண உந்தம்):** The rotational analogue of linear momentum. L = r × p = Iω.
*   **Relation between Torque and Angular Momentum:** τ = dL/dt. This is the rotational analogue of Newton's second law.

### 3. Moment of Inertia (I) (நிலைமத் திருப்புத்திறன்)
*   The rotational analogue of mass. It is a measure of an object's resistance to changes in its rotational motion.
*   For a point mass: I = mr².
*   For a rigid body: I = Σmᵢrᵢ².
*   **Theorems of Moment of Inertia:**
    *   **Parallel Axis Theorem:** I = I_cm + Md².
    *   **Perpendicular Axis Theorem (for planar bodies):** I_z = I_x + I_y.

### 4. Conservation of Angular Momentum (கோண உந்த அழிவின்மை விதி)
*   If the net external torque on a system is zero, its total angular momentum remains constant.
*   If τ_ext = 0, then L = Iω = constant.
*   Example: A ballet dancer spinning faster by pulling her arms in (I decreases, so ω increases). (ஒரு நடனக் கலைஞர் கைகளை உள்ளிழுக்கும்போது வேகமாகச் சுழல்வது போல).

### 5. Rolling Motion (உருளுதல் இயக்கம்)
*   A combination of translational and rotational motion.
*   **Kinetic Energy of Rolling:** K = K_trans + K_rot = ½mv² + ½Iω².
*   For pure rolling without slipping, v = Rω.
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
