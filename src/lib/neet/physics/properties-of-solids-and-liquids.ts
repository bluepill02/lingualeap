
import type { NeetModule } from '@/lib/types';

export const propertiesOfSolidsAndLiquids: NeetModule = {
  id: 'physics-properties-of-solids-and-liquids',
  title: 'Properties of Solids and Liquids',
  chapter: 'Properties of Solids and Liquids',
  subject: 'Physics',
  conceptNotes: `
### 1. Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)
*   **Elastic behaviour:** The property of a body to regain its original shape and size after the removal of a deforming force.
*   **Stress-strain relationship, Hooke's Law:** Within the elastic limit, stress is proportional to strain.
*   **Young's modulus (Y), bulk modulus (K), modulus of rigidity (G):** Measures of a material's stiffness related to length, volume, and shape, respectively.

### 2. Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)
*   **Pressure due to a fluid column; Pascal's law and its applications:** Pressure P = hρg. Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished.
*   **Effect of gravity on fluid pressure.**
*   **Viscosity (பாகுநிலை):** The internal friction of a fluid.
*   **Stokes' law, terminal velocity:** The viscous drag force on a sphere (F=6πηrv) leads to a constant maximum velocity (terminal velocity) for a falling object.
*   **Streamline and turbulent flow, critical velocity:** Smooth, layered flow versus chaotic flow. Critical velocity is the speed at which flow transitions from streamline to turbulent.
*   **Bernoulli's principle and its applications:** For a streamline flow, P + ½ρv² + ρgh = constant. It's a statement of energy conservation for flowing fluids.

### 3. Surface Tension and Surface Energy (பரப்பு இழுவிசை மற்றும் பரப்பு ஆற்றல்)
*   **Surface energy and surface tension:** The tendency of liquid surfaces to shrink into the minimum surface area possible.
*   **Angle of contact, excess of pressure across a curved surface:** The angle where a liquid-solid interface meets. Pressure is higher on the concave side of a curved surface.
*   **Application of surface tension - drops, bubbles, and capillary rise:** Explains why drops are spherical and how liquids rise in narrow tubes.

### 4. Thermal Properties of Matter (பருப்பொருளின் வெப்பப் பண்புகள்)
*   **Heat, temperature, thermal expansion:** Basics of heat energy and its effects on matter.
*   **Specific heat capacity (s), calorimetry (m s ΔT):** The heat required to change the temperature of a substance. Calorimetry is the science of measuring heat exchange.
*   **Change of state, latent heat (L):** Heat absorbed or released during a phase change at a constant temperature (Q = mL).
*   **Heat transfer - conduction, convection, and radiation:** The three modes of heat transfer.
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
  mcqs: [
    {
        "question": "According to Hooke's law of elasticity, within the elastic limit, stress is proportional to:",
        "options": ["Strain", "1/Strain", "Strain²", "1/Strain²"],
        "answer": "Strain",
        "explanation": "Hooke's Law states that stress ∝ strain."
    },
    {
        "question": "The property of a fluid to oppose the relative motion between its layers is called:",
        "options": ["Surface tension", "Viscosity", "Elasticity", "Cohesion"],
        "answer": "Viscosity",
        "explanation": "Viscosity is the internal friction of a fluid."
    },
    {
        "question": "Bernoulli's principle is based on the conservation of:",
        "options": ["Mass", "Momentum", "Energy", "Charge"],
        "answer": "Energy",
        "explanation": "Bernoulli's principle relates pressure, velocity, and height and is a statement of the conservation of energy for a flowing fluid."
    },
    {
        "question": "The rise of liquid in a capillary tube is due to:",
        "options": ["Viscosity", "Gravity", "Surface tension", "Pressure"],
        "answer": "Surface tension",
        "explanation": "Capillarity is a phenomenon driven by surface tension and the forces of cohesion and adhesion."
    },
    {
        "question": "Which of the following is the most elastic material?",
        "options": ["Rubber", "Glass", "Steel", "Plastic"],
        "answer": "Steel",
        "explanation": "Elasticity is the ability to resist deformation. Steel has a very high Young's modulus, meaning a large stress is required for a small strain, making it more elastic than rubber."
    },
    {
        "question": "The pressure at the bottom of a liquid tank does not depend on:",
        "options": ["The acceleration due to gravity", "The density of the liquid", "The height of the liquid", "The area of the bottom of the tank"],
        "answer": "The area of the bottom of the tank",
        "explanation": "The pressure at a depth h is given by P = P₀ + ρgh, which is independent of the area of the tank."
    },
    {
        "question": "When the temperature increases, the viscosity of liquids:",
        "options": ["Increases", "Decreases", "Remains the same", "First increases then decreases"],
        "answer": "Decreases",
        "explanation": "For liquids, viscosity decreases as temperature increases because the intermolecular cohesive forces weaken."
    },
    {
        "question": "The working of a hydraulic lift is based on:",
        "options": ["Hooke's Law", "Bernoulli's Principle", "Stokes' Law", "Pascal's Law"],
        "answer": "Pascal's Law",
        "explanation": "Hydraulic systems work on Pascal's principle that pressure applied to an enclosed fluid is transmitted undiminished."
    },
    {
        "question": "The SI unit of stress is the same as that of:",
        "options": ["Force", "Pressure", "Work", "Strain"],
        "answer": "Pressure",
        "explanation": "Both stress and pressure are defined as force per unit area, and their SI unit is Pascal (N/m²)."
    },
    {
        "question": "A small drop of liquid is spherical due to:",
        "options": ["Viscosity", "Surface tension", "Low pressure inside", "High pressure inside"],
        "answer": "Surface tension",
        "explanation": "Surface tension causes the liquid to minimize its surface area, and for a given volume, a sphere has the minimum surface area."
    },
    {
        "question": "The rate of cooling of a body is proportional to the temperature difference between the body and the surroundings. This is:",
        "options": ["Newton's Law of Cooling", "Stefan's Law", "Wien's Law", "Kirchhoff's Law"],
        "answer": "Newton's Law of Cooling",
        "explanation": "This is the statement of Newton's Law of Cooling, applicable for small temperature differences."
    },
    {
        "question": "The work done in blowing a soap bubble of radius R is proportional to:",
        "options": ["R", "R²", "R³", "1/R"],
        "answer": "R²",
        "explanation": "Work done = Surface tension × Change in area. A soap bubble has two surfaces. The area is 2 × (4πR²). So, work done is proportional to R²."
    },
    {
        "question": "What is the dimensional formula for Young's Modulus?",
        "options": ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻¹]"],
        "answer": "[ML⁻¹T⁻²]",
        "explanation": "Young's modulus = Stress/Strain. Strain is dimensionless. Stress = Force/Area. So, dimensions are [MLT⁻²]/[L²] = [ML⁻¹T⁻²]."
    },
    {
        "question": "When impurities are added to water, its surface tension generally:",
        "options": ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
        "answer": "Decreases",
        "explanation": "Soluble impurities like soap and detergent decrease the surface tension of water."
    },
    {
        "question": "The terminal velocity of a body falling in a viscous fluid depends on:",
        "options": ["The radius of the body", "The density of the body", "The density of the fluid", "All of the above"],
        "answer": "All of the above",
        "explanation": "The formula v_t = [2r²(ρ - σ)g] / 9η shows that it depends on radius, densities of body and fluid, and viscosity."
    },
    {
        "question": "The fastest mode of heat transfer is:",
        "options": ["Conduction", "Convection", "Radiation", "All are equally fast"],
        "answer": "Radiation",
        "explanation": "Heat transfer by radiation occurs at the speed of light."
    },
    {
        "question": "Strain is a:",
        "options": ["Scalar quantity", "Vector quantity", "Dimensionless quantity", "Fundamental quantity"],
        "answer": "Dimensionless quantity",
        "explanation": "Strain is the ratio of change in dimension to the original dimension, so it has no units or dimensions."
    },
    {
        "question": "The wings of an aeroplane are designed based on:",
        "options": ["Pascal's Law", "Hooke's Law", "Bernoulli's Principle", "Stokes' Law"],
        "answer": "Bernoulli's Principle",
        "explanation": "The airfoil shape creates a pressure difference between the top and bottom surfaces, generating lift, which is an application of Bernoulli's principle."
    },
    {
        "question": "The amount of heat required to change the state of a unit mass of a substance at constant temperature is called:",
        "options": ["Specific heat", "Thermal capacity", "Latent heat", "Water equivalent"],
        "answer": "Latent heat",
        "explanation": "This is the definition of latent heat."
    },
    {
        "question": "Two wires A and B are of the same material. The length of A is double that of B and the diameter of A is half that of B. If they are stretched by the same load, the ratio of elongation in A to that in B will be:",
        "options": ["1:8", "8:1", "1:4", "4:1"],
        "answer": "8:1",
        "explanation": "ΔL = FL/AY. ΔL ∝ L/A ∝ L/d². ΔL_A / ΔL_B = (L_A/d_A²) / (L_B/d_B²) = (2L_B / (d_B/2)²) / (L_B/d_B²) = (2L_B / (d_B²/4)) * (d_B²/L_B) = 8."
    },
    {
        "question": "A liquid does not wet the surface of a solid if the angle of contact is:",
        "options": ["Acute (less than 90°)", "Obtuse (greater than 90°)", "Zero", "90°"],
        "answer": "Obtuse (greater than 90°)",
        "explanation": "An obtuse angle of contact means the cohesive forces within the liquid are stronger than the adhesive forces with the solid, so the liquid does not wet the surface (e.g., mercury on glass)."
    },
    {
        "question": "The specific heat of water is:",
        "options": ["Maximum at 4°C", "Minimum at 4°C", "Maximum at 0°C", "Constant at all temperatures"],
        "answer": "Minimum at 4°C",
        "explanation": "The specific heat of water is minimum at about 3.8 °C and is taken to be minimum at 4°C for practical purposes. This is related to the anomalous expansion of water."
    },
    {
        "question": "The bulk modulus for an incompressible liquid is:",
        "options": ["Zero", "One", "Infinite", "Depends on pressure"],
        "answer": "Infinite",
        "explanation": "An incompressible liquid means the volume cannot be changed by pressure, so the volume strain is zero. Bulk modulus K = Stress/Strain = Stress/0 = Infinite."
    },
    {
        "question": "A beaker is filled with water at 4°C. The water will:",
        "options": ["Overflow if cooled or heated", "Overflow only if cooled", "Overflow only if heated", "Not overflow in either case"],
        "answer": "Overflow if cooled or heated",
        "explanation": "Water has its maximum density at 4°C. If it is cooled to 0°C or heated above 4°C, its density will decrease and its volume will increase, causing it to overflow."
    },
    {
        "question": "Reynold's number is used to determine if a fluid flow is:",
        "options": ["Compressible or incompressible", "Rotational or irrotational", "Streamline or turbulent", "Steady or unsteady"],
        "answer": "Streamline or turbulent",
        "explanation": "A low Reynold's number indicates laminar (streamline) flow, while a high Reynold's number indicates turbulent flow."
    }
  ],
  assertionReasons: [
    {
        "assertion": "It is easier to spray water with soap dissolved in it.",
        "reason": "Soap reduces the surface tension of water.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Lower surface tension makes it easier to form small droplets, which is what spraying is."
    },
    {
        "assertion": "The velocity of a fluid increases where the pressure is low.",
        "reason": "This is according to Bernoulli's principle.",
        "answer": "A",
        "explanation": "The reason correctly identifies the principle that describes this inverse relationship between speed and pressure for a moving fluid."
    },
    {
        "assertion": "Steel is more elastic than rubber.",
        "reason": "For a given strain, steel produces more stress than rubber.",
        "answer": "A",
        "explanation": "Elasticity is the resistance to deformation. Since Young's modulus (Stress/Strain) for steel is much higher than for rubber, for a given strain, steel develops a much larger restoring force (stress). The reason explains the assertion."
    },
    {
        "assertion": "A needle placed carefully on the surface of water can float.",
        "reason": "The floating is due to the buoyancy of water.",
        "answer": "C",
        "explanation": "Assertion is true. Reason is false. The floating is due to the force of surface tension, not buoyancy (as the needle is denser than water and would sink if submerged)."
    },
    {
        "assertion": "In a pressure cooker, the cooking time is reduced.",
        "reason": "The boiling point of water inside the cooker increases.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Increased pressure inside the cooker raises the boiling point of water, allowing food to be cooked at a higher temperature, which is faster."
    },
    {
        "assertion": "The viscosity of gases increases with an increase in temperature.",
        "reason": "The number of collisions between gas molecules increases with temperature.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. For gases, viscosity arises from the transfer of momentum through collisions. Higher temperature means more frequent collisions and more effective momentum transfer, increasing viscosity."
    },
    {
        "assertion": "A body that absorbs all radiation incident on it is called a perfectly black body.",
        "reason": "A perfectly black body is also a perfect emitter of radiation.",
        "answer": "B",
        "explanation": "Both statements are true definitions related to a black body (according to Kirchhoff's law of radiation). However, being a perfect emitter is a consequence of being a perfect absorber, not the explanation of the definition itself."
    },
    {
        "assertion": "A drop of liquid under no external forces is always spherical in shape.",
        "reason": "For a given volume, a sphere has the minimum surface area.",
        "answer": "A",
        "explanation": "Liquids tend to minimize their surface energy, which is proportional to surface area. The reason correctly states that a sphere has the minimum surface area for a given volume, thus explaining the assertion."
    },
    {
        "assertion": "The work done by the restoring force in a spring is always negative.",
        "reason": "The restoring force is always opposite to the direction of displacement.",
        "answer": "C",
        "explanation": "Assertion is false. When the spring is returning to its equilibrium position from a stretched state, the displacement and restoring force are in the same direction, and the work done is positive. The reason is true."
    },
    {
        "assertion": "Water rises up in a narrow capillary tube.",
        "reason": "The adhesive force between water and glass is greater than the cohesive force of water.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Stronger adhesion causes the water to 'climb' the glass walls, leading to a concave meniscus and capillary rise."
    },
    {
        "assertion": "The terminal velocity of a sphere is directly proportional to the square of its radius.",
        "reason": "This is according to Stokes' law.",
        "answer": "A",
        "explanation": "The formula for terminal velocity (v_t = [2r²(ρ - σ)g] / 9η) is derived by equating the gravitational force with the buoyant force and the Stokes' viscous drag force. The formula shows v_t ∝ r²."
    },
    {
        "assertion": "Pascal's law is the working principle of a hydraulic lift.",
        "reason": "Pressure is transmitted equally to all parts of an enclosed fluid.",
        "answer": "A",
        "explanation": "The reason is a statement of Pascal's law, which is the principle behind the operation of a hydraulic lift. It explains the assertion."
    },
    {
        "assertion": "Convection is a mode of heat transfer in solids.",
        "reason": "Convection involves the bulk movement of matter.",
        "answer": "D",
        "explanation": "Assertion is false. Convection occurs in fluids (liquids and gases), not solids. The reason is true."
    },
    {
        "assertion": "Strain has no units and no dimensions.",
        "reason": "Strain is the ratio of two like quantities.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since strain = Change in dimension / Original dimension, the units cancel out."
    },
    {
        "assertion": "Latent heat of vaporization is greater than the latent heat of fusion.",
        "reason": "In vaporization, a larger amount of work is done against intermolecular forces as the substance changes from liquid to gas.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The change in volume and the work done against intermolecular forces is much greater in the liquid-to-gas transition than in the solid-to-liquid transition."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Elasticity", "b) Viscosity", "c) Surface Tension", "d) Pressure"],
        "column2": ["i) Force per unit area", "ii) Opposes relative motion in fluids", "iii) Property to regain original shape", "iv) Tendency to minimize surface area"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Young's Modulus", "b) Bulk Modulus", "c) Shear Modulus", "d) Strain"],
        "column2": ["i) Change in shape", "ii) Change in length", "iii) Dimensionless", "iv) Change in volume"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) Pascal's Law", "b) Bernoulli's Principle", "c) Stokes' Law", "d) Hooke's Law"],
        "column2": ["i) Stress ∝ Strain", "ii) Viscous drag force", "iii) Hydraulic lift", "iv) Conservation of energy in fluid flow"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Streamline Flow", "b) Turbulent Flow", "c) Terminal Velocity", "d) Capillarity"],
        "column2": ["i) High Reynold's number", "ii) Net force is zero", "iii) Low Reynold's number", "iv) Rise in a narrow tube"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Conduction", "b) Convection", "c) Radiation", "d) Specific Heat"],
        "column2": ["i) Heat transfer without a medium", "ii) Heat transfer by bulk fluid motion", "iii) Heat required to raise temp by 1°C", "iv) Heat transfer by molecular collision"],
        "answer": "a-iv, b-ii, c-i, d-iii"
    },
    {
        "column1": ["a) Latent heat of fusion", "b) Latent heat of vaporization", "c) Water equivalent", "d) Calorimetry"],
        "column2": ["i) Gas to liquid", "ii) Solid to liquid", "iii) Principle of heat exchange", "iv) Mass of water with same thermal capacity"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Unit of Stress", "b) Unit of Surface Tension", "c) Unit of Viscosity", "d) Unit of Strain"],
        "column2": ["i) No unit", "ii) N/m", "iii) Pa·s", "iv) N/m² or Pa"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) Angle of contact > 90°", "b) Angle of contact < 90°", "c) Angle of contact = 0°", "d) Angle of contact = 90°"],
        "column2": ["i) Liquid wets the surface completely", "ii) Meniscus is flat", "iii) Liquid wets the surface", "iv) Liquid does not wet the surface"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Hydraulic Brakes", "b) Atomizer/Sprayer", "c) Hot air balloon", "d) Walking on sand"],
        "column2": ["i) Bernoulli's Principle", "ii) Convection", "iii) Pressure concept", "iv) Pascal's Law"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Newton's law of cooling", "b) Stefan-Boltzmann law", "c) Wien's displacement law", "d) Ideal gas law"],
        "column2": ["i) E ∝ T⁴", "ii) λ_m T = constant", "iii) dQ/dt ∝ ΔT", "iv) PV=nRT"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Compressibility", "b) Elasticity", "c) Plasticity", "d) Ductility"],
        "column2": ["i) Property to be drawn into wires", "ii) Permanent deformation", "iii) Reciprocal of Bulk Modulus", "iv) Ability to regain original shape"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Excess pressure in a drop", "b) Excess pressure in a bubble", "c) Ascent formula for capillarity", "d) Poiseuille's formula"],
        "column2": ["i) 4T/R", "ii) 2Tcosθ/rρg", "iii) Volume flow rate through a pipe", "iv) 2T/R"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Venturi-meter", "b) Manometer", "c) Hydrometer", "d) Lactometer"],
        "column2": ["i) Measures density of liquids", "ii) Measures pressure difference", "iii) Measures flow speed of a fluid", "iv) Measures purity of milk"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) Cohesive force", "b) Adhesive force", "c) Elastic limit", "d) Breaking stress"],
        "column2": ["i) Force between molecules of different substances", "ii) Max stress before permanent deformation", "iii) Force between molecules of the same substance", "iv) Stress at which fracture occurs"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Thermal conductivity", "b) Coefficient of linear expansion", "c) Coefficient of viscosity", "d) Surface tension"],
        "column2": ["i) [ML⁻¹T⁻¹]", "ii) [MT⁻²]", "iii) [MLT⁻³K⁻¹]", "iv) [K⁻¹]"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    }
  ]
};

    