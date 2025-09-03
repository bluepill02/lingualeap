
import type { NeetModule } from '@/lib/types';

export const propertiesOfSolidsAndLiquids: NeetModule = {
  id: 'physics-properties-of-solids-and-liquids',
  title: 'Properties of Solids and Liquids (திண்மங்கள் மற்றும் திரவங்களின் பண்புகள்)',
  chapter: 'Unit 7: Properties of Solids and Liquids',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)
*   **Elastic behaviour (மீட்சிப் பண்பு):** The property of a body to regain its original configuration after the removal of deforming forces.
*   **Stress (தகைவு):** The internal restoring force per unit area.
*   **Strain (திரிபு):** The fractional change in dimension. It is a dimensionless quantity.
*   **Hooke's Law (ஹூக் விதி):** Within the elastic limit, stress is directly proportional to strain. The constant of proportionality is called the Modulus of Elasticity.
*   **Moduli of Elasticity:**
    *   **Young's Modulus (Y):** Ratio of longitudinal stress to longitudinal strain.
    *   **Bulk Modulus (K):** Ratio of volume stress to volume strain.
    *   **Modulus of Rigidity (G):** Ratio of shearing stress to shearing strain.

### 5.2 Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)
*   **Pressure due to a fluid column; Pascal's law:** The pressure at a depth h in a fluid is \\(P = h\\rho g\\). Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. This is the principle behind hydraulic lifts.
*   **Viscosity (பாகுநிலை) and Stokes' law:** Viscosity is the internal friction in a fluid. Stokes' law gives the viscous drag force on a sphere moving through a fluid: \\(F = 6\\pi\\eta rv\\).
*   **Terminal velocity (முற்றுத் திசைவேகம்):** The constant maximum velocity attained by a body falling through a viscous fluid when the drag force equals the net downward force.
*   **Streamline and turbulent flow:** Streamline flow is smooth and orderly, while turbulent flow is chaotic. The transition is determined by the Reynolds number.
*   **Bernoulli's principle (பெர்னூலியின் தேற்றம்):** Based on the conservation of energy for a flowing fluid. It states that for a streamline flow, the sum of pressure energy, kinetic energy per unit volume, and potential energy per unit volume is constant.
    \\[ P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant} \\]

### 5.3 Surface Tension (பரப்பு இழுவிசை)
*   **Surface energy and surface tension:** Surface tension is the property of a liquid surface to behave like a stretched membrane and to acquire the minimum possible surface area. It is defined as the force per unit length.
*   **Angle of contact:** The angle between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid.
*   **Excess pressure across a curved surface:** The pressure inside a liquid drop or bubble is greater than the pressure outside. For a drop, \\(\\Delta P = 2S/r\\); for a bubble, \\(\\Delta P = 4S/r\\).
*   **Capillary rise (நுண்புழை ஏற்றம்):** The rise or fall of a liquid in a narrow tube (capillary) due to surface tension.

### 5.4 Thermal Properties of Matter (பருப்பொருளின் வெப்பப் பண்புகள்)
*   **Heat, temperature, thermal expansion:** Heat is energy in transit. Temperature is a measure of the degree of hotness. Thermal expansion is the tendency of matter to change in volume in response to a change in temperature.
*   **Specific heat capacity (s) and Calorimetry:** The amount of heat required to raise the temperature of a unit mass by one degree (\\(Q = ms\\Delta T\\)).
*   **Change of state and latent heat (L):** Latent heat is the heat required to change the state of a substance without any change in its temperature (\\(Q = mL\\)).
*   **Heat transfer:**
    *   **Conduction:** Heat transfer through molecular collisions, without bulk movement of matter.
    *   **Convection:** Heat transfer through the bulk movement of fluid.
    *   **Radiation:** Heat transfer through electromagnetic waves, which does not require a medium.
`,
  workedExamples: [
    {
        problem: "A steel wire of length 4.7 m and cross-sectional area 3.0 x 10⁻⁵ m² stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4.0 x 10⁻⁵ m² under a given load. What is the ratio of the Young's modulus of steel to that of copper?",
        solution: "Young's Modulus \\(Y = \\frac{Stress}{Strain} = \\frac{F/A}{\\Delta L/L} = \\frac{FL}{A\\Delta L}\\). Given F and ΔL are the same for both. So, \\(Y \\propto \\frac{L}{A}\\). \\(\\frac{Y_{steel}}{Y_{copper}} = \\frac{L_{steel}/A_{steel}}{L_{copper}/A_{copper}} = \\frac{L_{steel} \\times A_{copper}}{L_{copper} \\times A_{steel}}\\). \\(\\frac{Y_{steel}}{Y_{copper}} = \\frac{4.7 \\times (4.0 \\times 10^{-5})}{3.5 \\times (3.0 \\times 10^{-5})} = \\frac{18.8}{10.5} \\approx 1.79\\). The ratio is ~1.8:1."
    },
    {
        problem: "The terminal velocity of a copper ball of radius 2 mm falling through a tank of oil is 6.5 cm/s. Compute the viscosity of the oil. (Density of oil ≈ 1.5 × 10³ kg/m³, Density of copper ≈ 8.9 × 10³ kg/m³).",
        solution: "1.  The formula for terminal velocity is \\(v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}\\), where ρ is sphere density and σ is fluid density. 2.  We need to find viscosity η. \\(\\eta = \\frac{2r^2(\\rho - \\sigma)g}{9v_t}\\). 3.  Convert all units to SI: r = 2 mm = 2×10⁻³ m, v_t = 6.5 cm/s = 0.065 m/s. 4.  \\(\\eta = \\frac{2(2\\times10^{-3})^2(8.9\\times10^3 - 1.5\\times10^3)9.8}{9 \\times 0.065}\\). 5.  \\(\\eta = \\frac{2(4\\times10^{-6})(7.4\\times10^3)9.8}{0.585} = \\frac{570.88 \\times 10^{-3}}{0.585} \\approx 0.976 \\text{ Pa·s}\\)."
    },
    {
        problem: "Water rises in a capillary tube to a height of 2.0 cm. In another capillary tube whose radius is one-third of it, how much will the water rise?",
        solution: "The height (h) to which a liquid rises in a capillary tube is inversely proportional to its radius (r). \\(h \\propto \\frac{1}{r}\\). This means \\(h_1r_1 = h_2r_2\\). Given: \\(h_1 = 2.0 \\text{ cm}\\) and \\(r_2 = r_1/3\\). We need to find \\(h_2\\). \\(h_2 = \\frac{h_1r_1}{r_2} = \\frac{h_1r_1}{r_1/3} = 3h_1 = 3 \\times 2.0 \\text{ cm} = 6.0 \\text{ cm}\\)."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
