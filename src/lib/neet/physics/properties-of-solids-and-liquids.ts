
import type { NeetModule } from '@/lib/types';

export const propertiesOfSolidsAndLiquids: NeetModule = {
  metadata: {
    id: 'physics-properties-of-solids-and-liquids',
    title: 'Properties of Solids and Liquids (திண்மங்கள் மற்றும் திரவங்களின் பண்புகள்)',
    chapter: 'Unit 7: Properties of Solids and Liquids',
    subject: 'Physics',
    glossary: [
      { English: 'Elasticity', தமிழ்: 'மீட்சிப் பண்பு' },
      { English: 'Stress', தமிழ்: 'தகைவு' },
      { English: 'Strain', தமிழ்: 'திரிபு' },
      { English: 'Viscosity', தமிழ்: 'பாகுநிலை' },
      { English: 'Surface Tension', தமிழ்: 'பரப்பு இழுவிசை' }
    ],
    learningObjectives: [
      'Define stress, strain, and Young\'s modulus, and apply Hooke\'s Law to problems.',
      'Explain Pascal\'s law and Bernoulli\'s principle and their real-world applications.',
      'Differentiate between streamline and turbulent flow, and calculate terminal velocity using Stokes\' law.',
      'Describe the phenomena of surface tension and capillarity, and solve related problems.',
      'Analyze the three modes of heat transfer: conduction, convection, and radiation.'
    ],
    prerequisites: [
      "Understanding of Force, Pressure, and Energy.",
      "Basic concepts of Kinematics and Dynamics.",
      "Familiarity with the concept of density."
    ],
    conceptOverview: "Why is steel more elastic than rubber? How do airplanes fly? Why do small insects walk on water? The answers lie in the collective behavior of atoms and molecules. Imagine the Madurai Meenakshi Amman Temple's massive stone pillars (கல் தூண்கள்) - they must be strong enough to withstand immense stress. This chapter explores the mechanical and thermal properties of matter, explaining how solids resist deformation (elasticity), how fluids flow (viscosity and Bernoulli's principle), and why liquid surfaces behave like a stretched membrane (surface tension). It's the physics of the materials that make up our world.",
    tnBoardMapping: "This unit covers topics from multiple chapters in the Tamil Nadu State Board Class 11 Physics textbooks, primarily Volume 1, Chapter 7 ('Properties of Matter') and Volume 2, Chapter 8 ('Heat and Thermodynamics'). NEET requires a strong conceptual understanding and quick formula application for these topics.",
    studyTips: [
      {
        tip: "Create a comparison table for the three moduli of elasticity (Young's, Bulk, Rigidity) noting what type of stress and strain each corresponds to.",
        NEET_Hack: "For Bernoulli's principle problems, remember it's just a statement of energy conservation for a fluid. Look for what stays constant. If the pipe is horizontal, the 'ρgh' term is constant and can be ignored. If a tank is open to the atmosphere, the pressure at the top surface is atmospheric pressure."
      },
      {
        tip: "Pay close attention to the conditions under which each formula is valid, e.g., Hooke's Law within the elastic limit, Stokes' law for small spherical bodies, and Bernoulli's principle for streamline flow.",
        NEET_Hack: "The formula for capillary rise, \\(h = \\frac{2S\\cos{\\theta}}{r\\rho g}\\), is very important. Most questions involve ratios. Remember that 'h' is inversely proportional to the radius 'r' of the tube. If the radius is halved, the height doubles."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Properties of Solids and Liquids (இயற்பியல் - திண்மங்கள் மற்றும் திரவங்களின் பண்புகள்)

# 2. Learning Objectives
1.  After this, you will be able to define stress, strain, and Young's modulus, and apply Hooke's Law to problems.
2.  After this, you will be able to explain Pascal's law and Bernoulli's principle and their real-world applications.
3.  After this, you will be able to differentiate between streamline and turbulent flow, and calculate terminal velocity using Stokes' law.
4.  After this, you will be able to describe the phenomena of surface tension and capillarity, and solve related problems.
5.  After this, you will be able to analyze the three modes of heat transfer: conduction, convection, and radiation.

# 3. Prerequisites
– Understanding of Force, Pressure, and Energy.
– Basic concepts of Kinematics and Dynamics.
– Familiarity with the concept of density.

# 4. Concept Overview
Why is steel more elastic than rubber? How do airplanes fly? Why do small insects walk on water? The answers lie in the collective behavior of atoms and molecules. Imagine the Madurai Meenakshi Amman Temple's massive stone pillars (கல் தூண்கள்) - they must be strong enough to withstand immense stress. This chapter explores the mechanical and thermal properties of matter, explaining how solids resist deformation (elasticity), how fluids flow (viscosity and Bernoulli's principle), and why liquid surfaces behave like a stretched membrane (surface tension). It's the physics of the materials that make up our world.

# 5. Detailed Explanation
This unit covers topics from **Tamil Nadu State Board Class 11 Physics, Volume 1, Chapter 7 ('Properties of Matter') and Volume 2, Chapter 8 ('Heat and Thermodynamics')**.

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

# 6. Worked Examples

**1. Easy:** A steel wire of length 4.7 m and cross-sectional area 3.0 x 10⁻⁵ m² stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4.0 x 10⁻⁵ m² under a given load. What is the ratio of the Young's modulus of steel to that of copper?
*   **Solution:**
    *   Young's Modulus \\(Y = \\frac{Stress}{Strain} = \\frac{F/A}{\\Delta L/L} = \\frac{FL}{A\\Delta L}\\).
    *   Given F and ΔL are the same for both. So, \\(Y \\propto \\frac{L}{A}\\).
    *   \\(\\frac{Y_{steel}}{Y_{copper}} = \\frac{L_{steel}/A_{steel}}{L_{copper}/A_{copper}} = \\frac{L_{steel} \\times A_{copper}}{L_{copper} \\times A_{steel}}\\).
    *   \\(\\frac{Y_{steel}}{Y_{copper}} = \\frac{4.7 \\times (4.0 \\times 10^{-5})}{3.5 \\times (3.0 \\times 10^{-5})} = \\frac{18.8}{10.5} \\approx 1.79\\). The ratio is ~1.8:1.

**2. Medium:** The terminal velocity of a copper ball of radius 2 mm falling through a tank of oil is 6.5 cm/s. Compute the viscosity of the oil. (Density of oil ≈ 1.5 × 10³ kg/m³, Density of copper ≈ 8.9 × 10³ kg/m³).
*   **Solution:**
    1.  The formula for terminal velocity is \\(v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}\\), where ρ is sphere density and σ is fluid density.
    2.  We need to find viscosity η. \\(\\eta = \\frac{2r^2(\\rho - \\sigma)g}{9v_t}\\).
    3.  Convert all units to SI: r = 2 mm = 2×10⁻³ m, v_t = 6.5 cm/s = 0.065 m/s.
    4.  \\(\\eta = \\frac{2(2\\times10^{-3})^2(8.9\\times10^3 - 1.5\\times10^3)9.8}{9 \\times 0.065}\\).
    5.  \\(\\eta = \\frac{2(4\\times10^{-6})(7.4\\times10^3)9.8}{0.585} = \\frac{570.88 \\times 10^{-3}}{0.585} \\approx 0.976 \\text{ Pa·s}\\).

**3. Must-Practice:** Water rises in a capillary tube to a height of 2.0 cm. In another capillary tube whose radius is one-third of it, how much will the water rise?
*   **Solution:**
    *   The height (h) to which a liquid rises in a capillary tube is inversely proportional to its radius (r). \\(h \\propto \\frac{1}{r}\\).
    *   This means \\(h_1r_1 = h_2r_2\\).
    *   Given: \\(h_1 = 2.0 \\text{ cm}\\) and \\(r_2 = r_1/3\\).
    *   We need to find \\(h_2\\).
    *   \\(h_2 = \\frac{h_1r_1}{r_2} = \\frac{h_1r_1}{r_1/3} = 3h_1 = 3 \\times 2.0 \\text{ cm} = 6.0 \\text{ cm}\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\(Y = \\frac{Stress}{Strain}\\) | Young's Modulus (யங் குணகம்) |
| \\(P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}\\) | Bernoulli's Principle (பெர்னூலியின் தேற்றம்) |
| \\(h = \\frac{2S\\cos{\\theta}}{r\\rho g}\\) | Capillary Rise (நுண்புழை ஏற்றம்) |
| \\(Q = mL\\) | Latent Heat (உள்ளுறை வெப்பம்) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Bernoulli's Principle (பெர்னூலியின் தேற்றம்)</text>
    <path d="M 30 150 C 60 150, 60 80, 90 80 L 210 80 C 240 80, 240 150, 270 150 Z" stroke="gray" stroke-width="2" fill="lightblue" fill-opacity="0.5"/>
    <line x1="90" y1="150" x2="90" y2="80" stroke="black"/>
    <line x1="210" y1="150" x2="210" y2="80" stroke="black"/>
    <text x="150" y="70" font-size="12" text-anchor="middle">Region 2 (பகுதி 2)</text>
    <text x="150" y="55" font-size="10" text-anchor="middle">Low P, High v (குறைந்த P, அதிக v)</text>
    <text x="50" y="165" font-size="12" text-anchor="middle">Region 1 (பகுதி 1)</text>
    <text x="50" y="180" font-size="10" text-anchor="middle">High P, Low v</text>
    <text x="250" y="165" font-size="12" text-anchor="middle">Region 3 (பகுதி 3)</text>
    <text x="250" y="180" font-size="10" text-anchor="middle">High P, Low v</text>
</svg>

\`\`\`
DIAGRAM: Bernoulli's Principle (பெர்னூலியின் தேற்றம்)
Shows a fluid flowing through a constricted pipe.
In the narrow region (Region 2), the fluid speed (v) is high, and the pressure (P) is low.
In the wider regions (Regions 1 & 3), the speed is low, and the pressure is high.
This demonstrates the inverse relationship between pressure and velocity.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** மூன்று குணகங்கள் (moduli): **Y**oung's நீளத்திற்கு (for length), **B**ulk பருமனுக்கு (for volume), **R**igidity வடிவத்திற்கு (for shape). (Remember Y for length, B for volume, R for shape).

> **NEET Hack:** In problems involving terminal velocity, remember that \\(v_t \\propto r^2\\). If the radius of a drop doubles, its terminal velocity will become four times larger. This is a very common ratio-based question.

[Download PDF Summary of Properties of Matter](/downloads/properties-of-matter-summary.pdf)

# 9. Quiz Yourself
1.  Why are steel ropes used in cranes instead of rubber ropes, even though rubber can stretch more?
2.  Explain in terms of Bernoulli's principle why the roof of a hut might blow off during a strong windstorm.
3.  Why do we feel cool after applying shaving cream but warm after applying a balm? (Hint: Think about evaporation and surface tension).

> **Student Tip (மாணவர் கருத்து):** உங்களுக்கு பெர்னூலியின் தேற்றத்தின் பயன்பாடுகள் கடினமாக உள்ளதா? அல்லது பாகுநிலை (viscosity) கணக்குகளில் குழப்பம் உள்ளதா? உங்கள் கடினமான பகுதிகளைப் பற்றி இங்கே விவாதிக்கவும்.

# 10. Next Steps & Community Discussion
– **Next Module:** Thermodynamics (வெப்ப இயக்கவியல்). We will delve deeper into the laws governing heat and its conversion into work.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** Can a ship made of iron float, while a small iron nail sinks? Discuss the role of pressure, buoyancy, and Archimedes' principle on our forum.
`
};

