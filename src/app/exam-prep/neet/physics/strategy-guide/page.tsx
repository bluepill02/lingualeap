
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  AlertTriangle,
  Lightbulb,
  Zap,
  ArrowLeft,
  Atom,
  Wind,
  Thermometer,
  Waves,
  Star,
  TrendingUp,
  BrainCircuit,
  BookOpen,
  ClipboardList,
  Target,
  Goal,
  RefreshCw,
  Network,
  BarChart3,
  GitCompare,
  Ruler,
  TableIcon,
  Languages,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { topperApproachData } from '@/lib/neet/physics/neet-physics-topper-approach';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// --- FORMULA SHEET DATA ---

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

const physicsFormulas: TopicFormulas = {
    mechanics: {
      "Kinematics": {
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
      }
    },
    kinematics2D: {
      "Projectile and Circular Motion": {
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
      }
    },
    lawsMotion: {
        "Forces and Momentum": {
            formulas: [
                {
                  formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
                  description: "Newton’s third law",
                  descriptionTamil: "நியூட்டனின் மூன்றாம் விதி"
                },
                {
                  formula: "\\vec{\\tau} = \\vec{r} \\times \\vec{F}",
                  description: "Torque definition",
                  descriptionTamil: "திருப்புவிசை வரையறை"
                },
                {
                  formula: "I = \\sum m_i r_i^2",
                  description: "Moment of inertia",
                  descriptionTamil: "நிலைமத் திருப்புத்திறன்"
                }
            ]
        }
    },
    energy: {
        "Work, Energy, Power": {
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
                  formula: "W = \\vec{F} \\cdot \\vec{s}",
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
        }
    },
    rotationalMotion: {
        "Rotational Dynamics": {
            formulas: [
                {
                  formula: "\\omega = \\dfrac{d\\theta}{dt}",
                  description: "Angular velocity",
                  descriptionTamil: "கோண வேகம்"
                },
                {
                  formula: "\\alpha = \\dfrac{d\\omega}{dt}",
                  description: "Angular acceleration",
                  descriptionTamil: "கோண முடுக்கம்"
                },
                {
                  formula: "v = r \\omega, \\quad a_c = \\tfrac{v^2}{r}",
                  description: "Linear speed and centripetal acceleration",
                  descriptionTamil: "நேரியல் வேகம் & மையநோக்கு முடுக்கம்"
                },
                {
                  formula: "L = I \\omega",
                  description: "Angular momentum",
                  descriptionTamil: "கோண உந்தம்"
                }
            ]
        }
    },
    gravitation: {
        "Gravitation": {
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
        }
    },
    fluidMechanics: {
        "Fluids": {
            formulas: [
                {
                  formula: "P = P_0 + \\rho g h",
                  description: "Hydrostatic pressure",
                  descriptionTamil: "நீரியல் அழுத்தம்"
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
                  descriptionTamil: "பாய்சியூல் விதி"
                }
            ]
        }
    },
    oscillations: {
        "Oscillations": {
            formulas: [
                {
                  formula: "T = 2\\pi \\sqrt{\\tfrac{m}{k}}",
                  description: "Period of mass-spring system",
                  descriptionTamil: "சுருள்வில்-நிறை அமைப்பின் அலைவு நேரம்"
                },
                {
                  formula: "T = 2\\pi \\sqrt{\\tfrac{l}{g}}",
                  description: "Period of simple pendulum",
                  descriptionTamil: "தனி ஊசலின் அலைவு நேரம்"
                },
                {
                  formula: "E = K + U = \\text{constant}",
                  description: "Energy in simple harmonic motion",
                  descriptionTamil: "தனிச் சீரிசை இயக்கத்தில் ஆற்றல்"
                }
            ]
        }
    },
    wavesOptics: {
        "Waves and Optics": {
            formulas: [
                {
                  formula: "v = f \\lambda",
                  description: "Wave speed relation",
                  descriptionTamil: "அலை வேகத் தொடர்பு"
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
                  formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}",
                  description: "Thin lens formula",
                  descriptionTamil: "மெல்லிய லென்சு சூத்திரம்"
                },
                {
                  formula: "I = I_0 \\cos^2\\theta",
                  description: "Malus’s law",
                  descriptionTamil: "மாலஸின் விதி"
                }
            ]
        }
    },
    thermodynamics: {
        "Thermodynamics": {
            formulas: [
                {
                  formula: "\\Delta U = Q - W",
                  description: "First law of thermodynamics (Physics convention)",
                  descriptionTamil: "வெப்ப இயக்கவியலின் முதல் விதி (இயற்பியல் மரபு)"
                },
                {
                  formula: "PV = nRT",
                  description: "Ideal gas equation",
                  descriptionTamil: "நல்லியல்பு வாயுச் சமன்பாடு"
                },
                {
                  formula: "W_{\\text{adiabatic}} = \\frac{P_2 V_2 - P_1 V_1}{1 - \\gamma}",
                  description: "Work in adiabatic process",
                  descriptionTamil: "வெப்பப் பரிமாற்றமில்லாச் செயல்முறையில் வேலை"
                },
                {
                  formula: "\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h}",
                  description: "Carnot efficiency",
                  descriptionTamil: "கார்னோ திறன்"
                }
            ]
        }
    },
    kineticTheory: {
        "Kinetic Theory": {
            formulas: [
                {
                  formula: "P = \\tfrac13 \\rho \\langle v^2\\rangle",
                  description: "Pressure from molecular collisions",
                  descriptionTamil: "மூலக்கூறு மோதல்களிலிருந்து அழுத்தம்"
                },
                {
                  formula: "v_{rms} = \\sqrt{\\tfrac{3RT}{M}}",
                  description: "Root-mean-square speed",
                  descriptionTamil: "மூல சராசரி வர்க்க வேகம்"
                },
                {
                  formula: "\\lambda = \\frac{1}{\\sqrt2 \\pi n d^2}",
                  description: "Mean free path",
                  descriptionTamil: "சராசரி மோதலிடைத் தூரம்"
                }
            ]
        }
    },
    electrostatics: {
        "Electrostatics": {
            formulas: [
                {
                  formula: "F = k \\dfrac{q_1 q_2}{r^2}",
                  description: "Coulomb’s law",
                  descriptionTamil: "கூலூம் விதி"
                },
                {
                  formula: "E = k \\dfrac{Q}{r^2}",
                  description: "Electric field",
                  descriptionTamil: "மின்புலம்"
                },
                {
                  formula: "V = k \\dfrac{Q}{r}",
                  description: "Electric potential",
                  descriptionTamil: "மின்னழுத்தம்"
                },
                {
                  formula: "\\displaystyle \\oint \\vec{E}\\cdot d\\vec{A} = \\tfrac{Q_{enc}}{\\varepsilon_0}",
                  description: "Gauss’s law (integral)",
                  descriptionTamil: "காஸ் விதி (தொகையீடு)"
                }
            ]
        }
    },
    currentElectricity: {
        "Current Electricity": {
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
                  descriptionTamil: "மின்சக்தி"
                },
                {
                  formula: "\\tau = RC",
                  description: "Time constant (RC circuit)",
                  descriptionTamil: "நேர மாறிலி (RC சுற்று)"
                }
            ]
        }
    },
    magnetism: {
        "Magnetism & EMI": {
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
                  formula: "d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\,d\\vec{l} \\times \\hat{r}}{r^2}",
                  description: "Biot–Savart law",
                  descriptionTamil: "பயோ-சவர்ட் விதி"
                },
                {
                  formula: "\\mu = I A",
                  description: "Magnetic dipole moment",
                  descriptionTamil: "காந்த இருமுனைத் திருப்புத்திறன்"
                },
                {
                  formula: "\\varepsilon = -\\dfrac{d\\Phi_B}{dt}",
                  description: "Faraday’s law",
                  descriptionTamil: "பாரடேவின் மின்காந்தத் தூண்டல் விதி"
                }
            ]
        }
    },
    emWavesMaxwell: {
        "EM Waves": {
            formulas: [
                {
                  formula: "c = \\dfrac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}",
                  description: "Speed of light",
                  descriptionTamil: "ஒளியின் வேகம்"
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
        }
    },
    modernPhysics: {
        "Modern Physics": {
            formulas: [
                {
                  formula: "E = h \\nu",
                  description: "Photon energy",
                  descriptionTamil: "ஃபோட்டான் ஆற்றல்"
                },
                {
                  formula: "K_{max} = h \\nu - \\phi",
                  description: "Photoelectric equation",
                  descriptionTamil: "ஒளிமின் விளைவு சமன்பாடு"
                },
                {
                  formula: "\\lambda = \\dfrac{h}{p}",
                  description: "de Broglie wavelength",
                  descriptionTamil: "டி பிராய் அலைநீளம்"
                },
                {
                  formula: "N(t) = N_0 e^{-\\lambda t}",
                  description: "Radioactive decay law",
                  descriptionTamil: "கதிரியக்கச் சிதைவு விதி"
                },
                {
                  formula: "E = mc^2",
                  description: "Mass-energy equivalence",
                  descriptionTamil: "நிறை-ஆற்றல் சமன்பாடு"
                }
            ]
        }
    },
     nucleus: {
        "Nucleus": {
            formulas: [
                {
                  formula: "R = R_0 A^{1/3}",
                  description: "Nuclear radius",
                  descriptionTamil: "அணுக்கரு ஆரம்"
                },
                {
                  formula: "\\Delta m = Z m_{p} + N m_{n} - m_{\\text{nucleus}}",
                  description: "Mass defect",
                  descriptionTamil: "நிறைக் குறைபாடு"
                },
                {
                  formula: "B = \\Delta m c^2",
                  description: "Total binding energy",
                  descriptionTamil: "மொத்தப் பிணைப்பு ஆற்றல்"
                },
                {
                  formula: "T_{1/2} = \\frac{\\ln 2}{\\lambda}",
                  description: "Half-life relation",
                  descriptionTamil: "அரை ஆயுள் தொடர்பு"
                },
                {
                  formula: "Q = (m_{i} - m_{f}) c^2",
                  description: "Q-value of nuclear reaction",
                  descriptionTamil: "அணுக்கரு வினையின் Q-மதிப்பு"
                }
            ]
        }
     }
  }
};


// --- END OF FORMULA SHEET DATA ---


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
  kinematics2D: <GitCompare className="text-blue-400" />,
  lawsMotion: <GitCompare className="text-blue-400" />,
  energy: <GitCompare className="text-blue-400" />,
  rotationalMotion: <GitCompare className="text-blue-400" />,
  gravitation: <GitCompare className="text-blue-400" />,
  fluidMechanics: <GitCompare className="text-blue-400" />,
  oscillations: <GitCompare className="text-blue-400" />,
  wavesOptics: <Waves className="text-purple-400" />,
  kineticTheory: <Thermometer className="text-orange-400" />,
  electrostatics: <Waves className="text-purple-400" />,
  currentElectricity: <Waves className="text-purple-400" />,
  magnetism: <Waves className="text-purple-400" />,
  emWavesMaxwell: <Waves className="text-purple-400" />,
  nucleus: <Atom className="text-green-400" />,
};

const cardColors = [
    "border-primary",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-red-500",
    "border-purple-500",
    "border-pink-500",
    "border-indigo-500",
    "border-teal-500",
    "border-cyan-500"
];


export default function NeetPhysicsStrategyGuidePage() {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  
  const TopperApproachContent = () => {
    const content = topperApproachData;
    return (
      <div className="space-y-6">
        {content.map((section, index) => (
           <Card key={index} className={`border-l-4 ${cardColors[index % cardColors.length]} bg-primary/5 shadow-md hover:shadow-lg transition-shadow`}>
            <CardHeader className="card-padding-lg">
              <CardTitle className="flex items-center gap-3">
                {section.icon && <section.icon className="h-6 w-6 text-primary" />}
                <span className="text-left text-xl font-headline">
                    {language === 'english' ? section.title : section.titleTamil}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding-lg pt-0 prose dark:prose-invert max-w-none text-muted-foreground">
               <MarkdownRenderer>
                {language === 'english' ? section.content : section.contentTamil}
              </MarkdownRenderer>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const FormulaSheetContent = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Physics Formula & Equation Sheet</CardTitle>
          <CardDescription>
            A comprehensive list of formulas for NEET & JEE Physics, organized by topic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {Object.entries(physicsFormulas).map(([topic, subtopicData], topicIndex) => (
              <AccordionItem value={topic} key={topic}>
                <AccordionTrigger className="text-xl font-headline capitalize card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                  <div className="flex items-center gap-3">
                     {(sectionIcons as any)[topic] || <BookOpen />}
                     {topic.replace(/([A-Z])/g, ' $1').replace('kinematics2-d', 'Kinematics 2D').trim()}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  {Object.entries(subtopicData).map(([subtopic, data]) => (
                    <div key={subtopic}>
                      <h4 className="font-bold text-lg mb-2">{subtopic}</h4>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[30%]">Formula</TableHead>
                              <TableHead>Description (English)</TableHead>
                              <TableHead>Description (Tamil)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {data.formulas.map((entry, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-base">
                                  <MarkdownRenderer>{`$$${entry.formula}$$`}</MarkdownRenderer>
                                </TableCell>
                                <TableCell>{entry.description}</TableCell>
                                <TableCell className="font-headline">{entry.descriptionTamil}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    );
  };


  return (
    <div className="container mx-auto space-y-8 subject-physics">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet/physics">
          <Button variant="ghost" size="icon" aria-label="Back to NEET Physics">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
            <Star />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">
              NEET Physics Strategy Guide
            </h1>
            <p className="text-muted-foreground">
              Master common mistakes, rare concepts, and strategic tricks.
            </p>
          </div>
        </div>
      </header>

      <Tabs defaultValue="topper-approach" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="deep-dive">Concept Deep Dive</TabsTrigger>
          <TabsTrigger value="topper-approach">Topper's Approach</TabsTrigger>
          <TabsTrigger value="formula-sheet">Formula Sheet</TabsTrigger>
        </TabsList>
        <TabsContent value="deep-dive" className="mt-6">
           {Object.entries(strategyGuideContent).map(([key, sectionData]) => (
            <div key={key} className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                {sectionIcons[key as keyof typeof sectionIcons]}
                <h2 className="text-3xl font-bold font-headline tracking-tight">
                  <BilingualText english={sectionData.title} tamil={sectionData.titleTamil} />
                </h2>
              </div>
              <Accordion type="multiple" className="w-full space-y-4">
                {sectionData.chapters.map((chapter, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-bold font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                      <div className="text-left">
                        <BilingualText english={chapter.chapterName} tamil={chapter.chapterNameTamil} />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                      {chapter.sections.map((section, secIndex) => (
                        <Card key={secIndex}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              {section.type === 'mistake' && (
                                <AlertTriangle className="text-destructive" />
                              )}
                              {section.type === 'trick' && (
                                <Zap className="text-yellow-500" />
                              )}
                              {section.type === 'rare' && (
                                <Lightbulb className="text-blue-400" />
                              )}
                              <BilingualText english={section.title} tamil={section.titleTamil} />
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="card-padding-lg space-y-4">
                            {section.points.map((point, pointIndex) => (
                              <Alert
                                key={pointIndex}
                                variant={
                                  section.type === 'mistake'
                                    ? 'destructive'
                                    : section.type === 'trick'
                                    ? 'warning'
                                    : 'default'
                                }
                                className="bg-card"
                              >
                                <AlertTitle>{point.point}</AlertTitle>
                                <AlertDescription>
                                  <div className="prose dark:prose-invert max-w-none">
                                    <MarkdownRenderer>{point.explanation}</MarkdownRenderer>
                                    <div className="mt-2 p-2 border-l-2 border-accent/30 bg-accent/10 rounded-r-md">
                                        <MarkdownRenderer>{point.explanationTamil}</MarkdownRenderer>
                                    </div>
                                  </div>
                                </AlertDescription>
                              </Alert>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="topper-approach" className="mt-6 space-y-8">
            <div className="flex justify-end mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                    <Button
                        size="sm"
                        variant={language === 'english' ? 'secondary' : 'ghost'}
                        onClick={() => setLanguage('english')}
                    >
                        EN
                    </Button>
                    <Button
                        size="sm"
                        variant={language === 'tamil' ? 'secondary' : 'ghost'}
                        onClick={() => setLanguage('tamil')}
                    >
                        தமிழ்
                    </Button>
                </div>
            </div>
            <TopperApproachContent />
        </TabsContent>
        <TabsContent value="formula-sheet" className="mt-6">
            <FormulaSheetContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
