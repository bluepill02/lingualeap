
export interface FormulaEntry {
  formula: string;
  description: string;
  descriptionTamil: string;
}

export interface TopicFormulas {
  [subtopic: string]: {
    formulas: FormulaEntry[];
  };
}

export interface NeetJeeFormulaSheet {
  physics: TopicFormulas;
  chemistry: TopicFormulas;
}

export const neetJeeFormulaSheet: NeetJeeFormulaSheet = {
  physics: {
    mechanics: {
      formulas: [
        {
          formula: "s = ut + \\tfrac12 a t^2",
          description: "Displacement under constant acceleration",
          descriptionTamil: "நிலையான முடுக்கத்தின் கீழ் இடப்பெயர்ச்சி"
        },
        {
          formula: "v = u + a t",
          description: "Velocity–time relation",
          descriptionTamil: "திசைவேக–கால சமன்பாடு"
        },
        {
          formula: "v^2 = u^2 + 2 a s",
          description: "Velocity–displacement relation",
          descriptionTamil: "திசைவேக–இடப்பெயர்ச்சி சமன்பாடு"
        },
        {
          formula: "F = m a",
          description: "Newton’s second law",
          descriptionTamil: "நியூட்டனின் இரண்டாம் விதி"
        },
        {
          formula: "P = F/A",
          description: "Pressure definition",
          descriptionTamil: "அழுத்த வரையறை"
        }
      ]
    },
    kinematics2D: {
      formulas: [
        {
          formula: "\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}",
          description: "Position vector in plane",
          descriptionTamil: "தளத்தில் நிலை வெக்டர்"
        },
        {
          formula: "x = u_x t, \\quad y = u_y t - \\tfrac12 g t^2",
          description: "Projectile motion coordinates",
          descriptionTamil: "எறியியக்க ஆயங்கள்"
        },
        {
          formula: "R = \\dfrac{u^2\\sin2\\theta}{g}",
          description: "Range of projectile",
          descriptionTamil: "எறியத்தின் நெடுக்கம்"
        },
        {
          formula: "T = \\dfrac{2u\\sin\\theta}{g}",
          description: "Time of flight",
          descriptionTamil: "பறக்கும் நேரம்"
        },
        {
          formula: "H = \\dfrac{u^2\\sin^2\\theta}{2g}",
          description: "Maximum height",
          descriptionTamil: "பெரும உயரம்"
        }
      ]
    },
    lawsMotion: {
      formulas: [
        {
          formula: "F_{12} = -F_{21}",
          description: "Newton’s third law",
          descriptionTamil: "நியூட்டனின் மூன்றாம் விதி"
        },
        {
          formula: "\\tau = r \\times F",
          description: "Torque definition",
          descriptionTamil: "திருப்புவிசை வரையறை"
        },
        {
          formula: "I = \\sum m_i r_i^2",
          description: "Moment of inertia",
          descriptionTamil: "நிலைமத் திருப்புத்திறன்"
        }
      ]
    },
    energy: {
      formulas: [
        {
          formula: "K = \\tfrac12 m v^2",
          description: "Kinetic energy",
          descriptionTamil: "இயக்க ஆற்றல்"
        },
        {
          formula: "U = m g h",
          description: "Gravitational potential energy",
          descriptionTamil: "ஈர்ப்பு நிலை ஆற்றல்"
        },
        {
          formula: "W = F \\cdot s",
          description: "Work done",
          descriptionTamil: "செய்யப்பட்ட வேலை"
        },
        {
          formula: "P = \\dfrac{W}{t}",
          description: "Power",
          descriptionTamil: "திறன்"
        },
        {
          formula: "E_{mech} = K + U",
          description: "Mechanical energy conservation",
          descriptionTamil: "இயந்திர ஆற்றல் அழிவின்மை"
        }
      ]
    },
    rotationalMotion: {
      formulas: [
        {
          formula: "\\omega = \\dfrac{d\\theta}{dt}",
          description: "Angular velocity",
          descriptionTamil: "கோண திசைவேகம்"
        },
        {
          formula: "\\alpha = \\dfrac{d\\omega}{dt}",
          description: "Angular acceleration",
          descriptionTamil: "கோண முடுக்கம்"
        },
        {
          formula: "v = r \\omega, \\quad a_c = \\tfrac{v^2}{r}",
          description: "Linear speed and centripetal acceleration",
          descriptionTamil: "நேர்கோட்டு வேகம் & மையநோக்கு முடுக்கம்"
        },
        {
          formula: "L = I \\omega",
          description: "Angular momentum",
          descriptionTamil: "கோண உந்தம்"
        }
      ]
    },
    gravitation: {
      formulas: [
        {
          formula: "F = G \\dfrac{m_1 m_2}{r^2}",
          description: "Newton’s law of gravitation",
          descriptionTamil: "நியூட்டனின் ஈர்ப்பியல் விதி"
        },
        {
          formula: "g = \\dfrac{GM}{r^2}",
          description: "Gravitational field",
          descriptionTamil: "ஈர்ப்புப் புலம்"
        },
        {
          formula: "U = -G \\dfrac{m_1 m_2}{r}",
          description: "Gravitational potential energy",
          descriptionTamil: "ஈர்ப்பு நிலை ஆற்றல்"
        },
        {
          formula: "v_{esc} = \\sqrt{\\tfrac{2GM}{R}}",
          description: "Escape velocity",
          descriptionTamil: "விடுபடு வேகம்"
        }
      ]
    },
    fluidMechanics: {
      formulas: [
        {
          formula: "P = P_0 + \\rho g h",
          description: "Hydrostatic pressure",
          descriptionTamil: "நிலை நீரியல் அழுத்தம்"
        },
        {
          formula: "F_b = \\rho V g",
          description: "Buoyant force",
          descriptionTamil: "மிதப்பு விசை"
        },
        {
          formula: "A_1 v_1 = A_2 v_2",
          description: "Continuity equation",
          descriptionTamil: "தொடர்ச்சிச் சமன்பாடு"
        },
        {
          formula: "P + \\tfrac12 \\rho v^2 + \\rho g h = \\text{constant}",
          description: "Bernoulli’s equation",
          descriptionTamil: "பெர்னூலியின் சமன்பாடு"
        },
        {
          formula: "Q = \\dfrac{\\pi r^4 \\Delta P}{8 \\eta l}",
          description: "Poiseuille’s law",
          descriptionTamil: "பாய்சியூலின் விதி"
        }
      ]
    },
    oscillations: {
      formulas: [
        {
          formula: "T = 2\\pi \\sqrt{\\tfrac{m}{k}}",
          description: "Period of mass-spring",
          descriptionTamil: "நிறை–சுருள்வில் அலைவுக்காலம்"
        },
        {
          formula: "T = 2\\pi \\sqrt{\\tfrac{l}{g}}",
          description: "Period of simple pendulum",
          descriptionTamil: "தனி ஊசல் அலைவுக்காலம்"
        },
        {
          formula: "E = K + U = \\text{constant}",
          description: "Energy in simple harmonic motion",
          descriptionTamil: "தனிச் சீரிசை இயக்கத்தில் ஆற்றல்"
        }
      ]
    },
    wavesOptics: {
      formulas: [
        {
          formula: "v = f \\lambda",
          description: "Wave speed relation",
          descriptionTamil: "அலை வேக சமன்பாடு"
        },
        {
          formula: "\\Delta = d \\sin\\theta",
          description: "Path difference (double-slit)",
          descriptionTamil: "பாதை வேறுபாடு (இரட்டைப் பிளவு)"
        },
        {
          formula: "d \\sin\\theta = m\\lambda",
          description: "Grating equation",
          descriptionTamil: "கீற்றணிச் சமன்பாடு"
        },
        {
          formula: "1/f = 1/v - 1/u",
          description: "Lens/mirror formula",
          descriptionTamil: "லென்ஸ்/ஆடி சமன்பாடு"
        },
        {
          formula: "I = I_0 \\cos^2\\theta",
          description: "Malus’s law",
          descriptionTamil: "மாலஸின் விதி"
        }
      ]
    },
    thermodynamics: {
      formulas: [
        {
          formula: "\\Delta U = Q - W",
          description: "First law of thermodynamics",
          descriptionTamil: "வெப்ப இயக்கவியலின் முதல் விதி"
        },
        {
          formula: "PV = nRT",
          description: "Ideal gas equation",
          descriptionTamil: "நல்லியல்பு வாயுச் சமன்பாடு"
        },
        {
          formula: "W_{adiabatic} = \\frac{P_2 V_2 - P_1 V_1}{1 - \\gamma}",
          description: "Work in adiabatic process",
          descriptionTamil: "வெப்பப் பரிமாற்றமில்லா செயல்முறையில் வேலை"
        },
        {
          formula: "\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}",
          description: "Carnot efficiency",
          descriptionTamil: "கார்னோ திறன்"
        },
        {
          formula: "T_{1/2} = \\frac{\\ln2}{\\lambda}",
          description: "Half-life relation",
          descriptionTamil: "அரை ஆயுள் தொடர்பு"
        }
      ]
    },
    kineticTheory: {
      formulas: [
        {
          formula: "P = \\tfrac13 \\bigl(N/V\\bigr) m \\langle v^2\\rangle",
          description: "Pressure from molecular collisions",
          descriptionTamil: "மூலக்கூறு மோதல்களால் அழுத்தம்"
        },
        {
          formula: "v_{rms} = \\sqrt{\\tfrac{3RT}{M}}",
          description: "Root-mean-square speed",
          descriptionTamil: "மூல சராசரி வர்க்க வேகம்"
        },
        {
          formula: "\\lambda = \\frac{kT}{\\sqrt2 \\pi d^2 P}",
          description: "Mean free path",
          descriptionTamil: "சராசரி மோதலிடைத் தூரம்"
        }
      ]
    },
    electrostatics: {
      formulas: [
        {
          formula: "F = k \\dfrac{q_1 q_2}{r^2}",
          description: "Coulomb’s law",
          descriptionTamil: "கூலூம் விதி"
        },
        {
          formula: "E = \\dfrac{F}{q} = k \\dfrac{Q}{r^2}",
          description: "Electric field",
          descriptionTamil: "மின்புலம்"
        },
        {
          formula: "V = k \\dfrac{Q}{r}",
          description: "Electric potential",
          descriptionTamil: "மின்னழுத்தம்"
        },
        {
          formula: "\\nabla \\cdot \\vec{E} = \\tfrac{\\rho}{\\varepsilon_0}",
          description: "Gauss’s law (differential)",
          descriptionTamil: "காஸ் விதி (வகைக்கெழு)"
        },
        {
          formula: "\\displaystyle \\oint \\vec{E}\\cdot d\\vec{A} = \\tfrac{Q_{enc}}{\\varepsilon_0}",
          description: "Gauss’s law (integral)",
          descriptionTamil: "காஸ் விதி (தொகையீடு)"
        }
      ]
    },
    currentElectricity: {
      formulas: [
        {
          formula: "I = \\dfrac{dq}{dt}",
          description: "Current definition",
          descriptionTamil: "மின்னோட்ட வரையறை"
        },
        {
          formula: "V = IR",
          description: "Ohm’s law",
          descriptionTamil: "ஓம் விதி"
        },
        {
          formula: "\\rho = R \\tfrac{A}{l}",
          description: "Resistivity",
          descriptionTamil: "மின்தடை எண்"
        },
        {
          formula: "P = I^2 R = VI",
          description: "Electrical power",
          descriptionTamil: "மின் திறன்"
        },
        {
          formula: "\\tau = RC",
          description: "Time constant (RC circuit)",
          descriptionTamil: "கால மாறிலி (RC சுற்று)"
        }
      ]
    },
    magnetism: {
      formulas: [
        {
          formula: "\\vec{F} = q (\\vec{v} \\times \\vec{B})",
          description: "Lorentz force",
          descriptionTamil: "லாரன்ஸ் விசை"
        },
        {
          formula: "\\displaystyle \\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}",
          description: "Ampère’s law",
          descriptionTamil: "ஆம்பியர் விதி"
        },
        {
          formula: "d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\,d\\vec{l}\\times \\hat{r}}{r^2}",
          description: "Biot–Savart law",
          descriptionTamil: "பயோ-சவர்ட் விதி"
        },
        {
          formula: "\\mu = I A",
          description: "Magnetic dipole moment",
          descriptionTamil: "காந்த இருமுனைத் திருப்புத்திறன்"
        },
        {
          formula: "\\varepsilon = -\\dfrac{d\\Phi}{dt}",
          description: "Faraday’s law",
          descriptionTamil: "பாரடே விதி"
        }
      ]
    },
    emWavesMaxwell: {
      formulas: [
        {
          formula: "c = \\dfrac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}",
          description: "Speed of light",
          descriptionTamil: "ஒளியின் வேகம்"
        },
        {
          formula: "\\nabla \\cdot \\vec{E} = \\tfrac{\\rho}{\\varepsilon_0}",
          description: "Maxwell’s first equation",
          descriptionTamil: "மாக்ஸ்வெல்லின் முதல் சமன்பாடு"
        },
        {
          formula: "\\nabla \\times \\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t}",
          description: "Maxwell–Faraday equation",
          descriptionTamil: "மாக்ஸ்வெல்-பாரடே சமன்பாடு"
        },
        {
          formula: "\\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\dfrac{\\partial \\vec{E}}{\\partial t}",
          description: "Ampère–Maxwell law",
          descriptionTamil: "ஆம்பியர்-மாக்ஸ்வெல் விதி"
        }
      ]
    },
    modernPhysics: {
      formulas: [
        {
          formula: "E = h \\nu",
          description: "Photon energy",
          descriptionTamil: "ஃபோட்டான் ஆற்றல்"
        },
        {
          formula: "K_{max} = h \\nu - \\phi",
          description: "Photoelectric equation",
          descriptionTamil: "ஒளிமின் சமன்பாடு"
        },
        {
          formula: "\\lambda = \\dfrac{h}{p}",
          description: "de Broglie wavelength",
          descriptionTamil: "டி பிராய் அலை நீளம்"
        },
        {
          formula: "N(t) = N_0 e^{-\\lambda t}",
          description: "Radioactive decay law",
          descriptionTamil: "கதிரியக்கச் சிதைவு விதி"
        },
        {
          formula: "Q = (m_i - m_f)c^2",
          description: "Nuclear reaction Q-value",
          descriptionTamil: "அணுக்கரு வினை Q-மதிப்பு"
        }
      ]
    },
     nucleus: {
      formulas: [
        {
          formula: "R = R₀ A^{1/3}",
          description: "Nuclear radius",
          descriptionTamil: "அணுக்கரு ஆரம்"
        },
        {
          formula: "Δm = Z m_{p} + N m_{n} − m_{nucleus}",
          description: "Mass defect",
          descriptionTamil: "நிறைக் குறைபாடு"
        },
        {
          formula: "B = Δm c²",
          description: "Total binding energy",
          descriptionTamil: "மொத்தப் பிணைப்பு ஆற்றல்"
        },
        {
          formula: "B/A",
          description: "Binding energy per nucleon",
          descriptionTamil: "ஒரு நியூக்ளியானுக்கான பிணைப்பு ஆற்றல்"
        },
        {
          formula: "N(t) = N₀ e^{−λ t}",
          description: "Radioactive decay law",
          descriptionTamil: "கதிரியக்கச் சிதைவு விதி"
        },
        {
          formula: "T_{1/2} = \\frac{\\ln 2}{λ}",
          description: "Half-life relation",
          descriptionTamil: "அரை ஆயுள் தொடர்பு"
        },
        {
          formula: "A = λ N",
          description: "Activity of a sample",
          descriptionTamil: "மாதிரியின் செயல்பாடு"
        },
        {
          formula: "Q = (m_{i} − m_{f}) c²",
          description: "Q-value of nuclear reaction",
          descriptionTamil: "அணுக்கரு வினை Q-மதிப்பு"
        },
        {
          formula: "V_{C} = \\frac{1}{4π ε₀} \\frac{Z₁ Z₂ e²}{r}",
          description: "Coulomb barrier",
          descriptionTamil: "கூலூம் தடை"
        },
        {
          formula: "ρ_{nucleus} = \\frac{A m_{u}}{(4/3) π R³} \\approx constant",
          description: "Average nuclear density",
          descriptionTamil: "சராசரி அணுக்கரு அடர்த்தி"
        }
      ]
    }
  },
  chemistry: {
      // Placeholder for chemistry formulas
      thermodynamics: {
          formulas: []
      }
  }
};
