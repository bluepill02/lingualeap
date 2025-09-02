
import type { NeetModule } from '@/lib/types';

export const propertiesOfSolidsAndLiquids: NeetModule = {
  id: 'physics-properties-of-solids-and-liquids',
  title: 'Properties of Solids and Liquids',
  chapter: 'Properties of Solids and Liquids',
  subject: 'Physics',
  conceptNotes: `
### 1. Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)
*   **Elasticity (மீட்சிப் பண்பு):** The property of a body to regain its original shape and size after the removal of a deforming force.
*   **Stress (தகைவு):** The restoring force per unit area.
*   **Strain (திரிபு):** The fractional change in dimension.
*   **Hooke's Law (ஹூக் விதி):** Within the elastic limit, stress is proportional to strain.
*   **Modulus of Elasticity:**
    *   **Young's Modulus (Y):** Y = Longitudinal Stress / Longitudinal Strain.
    *   **Bulk Modulus (K):** K = Volume Stress / Volume Strain.
    *   **Shear Modulus (G):** G = Shearing Stress / Shearing Strain.

### 2. Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)
*   **Pressure (அழுத்தம்):** Force per unit area. Pressure in a fluid at rest is the same at all points at the same height.
*   **Pascal's Law (பாஸ்கல் விதி):** A change in pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. (Application: Hydraulic lift).
*   **Viscosity (பாகுநிலை):** The property of a fluid by virtue of which it opposes the relative motion between its different layers. (திரவங்களின் உராய்வு - Friction in fluids).
*   **Stokes' Law:** The viscous force F on a small sphere falling through a viscous medium is F = 6πηrv.
*   **Terminal Velocity:** The constant velocity attained by a body falling through a viscous fluid.
*   **Streamline and Turbulent Flow:** Steady vs. chaotic fluid flow.
*   **Bernoulli's Principle (பெர்னூலியின் தத்துவம்):** For a streamline flow of an ideal fluid, the sum of pressure, kinetic energy per unit volume, and potential energy per unit volume remains constant. P + ½ρv² + ρgh = constant.

### 3. Surface Tension (பரப்பு இழுவிசை)
*   The property of a liquid by virtue of which its free surface behaves like a stretched membrane and tries to minimize its surface area.
*   **Surface Energy:** The excess potential energy per unit area of the surface film.
*   **Angle of Contact:** The angle between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid.
*   **Capillarity (நுண்புழை ஏற்றம்):** The rise or fall of a liquid in a narrow tube.

### 4. Thermal Properties of Matter (பருப்பொருளின் வெப்பப் பண்புகள்)
*   **Heat, Temperature, and Thermal Expansion.**
*   **Specific Heat Capacity (தன்வெப்ப ஏற்புத்திறன்):** The amount of heat required to raise the temperature of a unit mass of a substance by one degree.
*   **Calorimetry:** Measurement of heat. Principle: Heat lost = Heat gained.
*   **Change of State:** Melting, freezing, boiling, condensation. **Latent Heat (உள்ளுறை வெப்பம்)** is the heat required to change the state without changing the temperature.
*   **Heat Transfer:**
    *   **Conduction (வெப்பக் கடத்தல்):** Heat transfer through molecular collisions.
    *   **Convection (வெப்பச் சலனம்):** Heat transfer through the bulk movement of fluid.
    *   **Radiation (வெப்பக் கதிர்வீச்சு):** Heat transfer through electromagnetic waves.
*   **Newton's Law of Cooling:** The rate of loss of heat of a body is directly proportional to the difference in the temperature of the body and its surroundings.
`,
  workedExamples: [
    {
        problem: "A steel wire of length 4.7 m and cross-sectional area 3.0 x 10⁻⁵ m² stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4.0 x 10⁻⁵ m² under a given load. What is the ratio of the Young's modulus of steel to that of copper?",
        solution: "Young's Modulus Y = (F/A) / (ΔL/L) = FL / AΔL. We are given that the load (F) and the stretch (ΔL) are the same for both wires. So, F/ΔL is constant. Y ∝ L/A. Therefore, Y_steel / Y_copper = (L_steel / A_steel) / (L_copper / A_copper) = (L_steel * A_copper) / (L_copper * A_steel). Y_s/Y_c = (4.7 * 4.0 x 10⁻⁵) / (3.5 * 3.0 x 10⁻⁵) = (4.7 * 4) / (3.5 * 3) = 18.8 / 10.5 ≈ 1.79. The ratio is approximately 1.8:1."
    },
    {
        problem: "The terminal velocity of a copper ball of radius 2 mm falling through a tank of oil at 20°C is 6.5 cm/s. Compute the viscosity of the oil at 20°C. (Density of oil = 1.5 × 10³ kg/m³, Density of copper = 8.9 × 10³ kg/m³).",
        solution: "The formula for terminal velocity is v_t = [2r²(ρ - σ)g] / 9η, where ρ is the density of the sphere and σ is the density of the fluid. We need to find viscosity η. η = [2r²(ρ - σ)g] / 9v_t. Given r = 2 mm = 2x10⁻³ m, v_t = 6.5 cm/s = 0.065 m/s, ρ = 8.9x10³, σ = 1.5x10³. η = [2 * (2x10⁻³)² * (8.9x10³ - 1.5x10³) * 9.8] / [9 * 0.065] = [2 * 4x10⁻⁶ * 7.4x10³ * 9.8] / 0.585 = [570.88 x 10⁻³] / 0.585 ≈ 0.976 Pa·s."
    },
    {
        problem: "Water rises in a capillary tube to a height of 2.0 cm. In another capillary tube whose radius is one-third of it, how much will the water rise?",
        solution: "The height (h) to which a liquid rises in a capillary tube is inversely proportional to its radius (r). h ∝ 1/r. So, h₁r₁ = h₂r₂. We are given h₁ = 2.0 cm and r₂ = r₁/3. We need to find h₂. h₂ = h₁r₁ / r₂ = h₁(r₁) / (r₁/3) = 3h₁ = 3 * 2.0 cm = 6.0 cm."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
