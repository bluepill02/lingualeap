
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
  Table as TableIcon,
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

// Formula sheet data moved directly into this component
const physicsFormulas = {
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
    thermodynamics: {
      "Thermodynamics": {
        formulas: [
            {
              formula: "\\Delta U = Q - W",
              description: "First law of thermodynamics",
              descriptionTamil: "வெப்ப இயக்கவியலின் முதல் விதி"
            },
            {
              formula: "PV = nRT",
              description: "Ideal gas equation",
              descriptionTamil: "நல்லியல்பு வாயு சமன்பாடு"
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
            }
        ]
      },
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
    'electromagnetism-optics': {
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
              formula: "\\displaystyle \\oint \\vec{E}\\cdot d\\vec{A} = \\tfrac{Q_{enc}}{\\varepsilon_0}",
              description: "Gauss’s law (integral)",
              descriptionTamil: "காஸ் விதி (தொகையீடு)"
            }
        ]
      },
      "Current Electricity": {
        formulas: [
           {
              formula: "V = IR",
              description: "Ohm’s law",
              descriptionTamil: "ஓம் விதி"
            },
            {
              formula: "P = VI = I^2 R",
              description: "Electrical power",
              descriptionTamil: "மின்சக்தி"
            }
        ]
      },
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
              formula: "\\varepsilon = -\\dfrac{d\\Phi_B}{dt}",
              description: "Faraday’s law of induction",
              descriptionTamil: "பாரடேவின் மின்காந்தத் தூண்டல் விதி"
            }
        ]
      },
       "Optics": {
         formulas: [
            {
              formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}",
              description: "Thin lens formula",
              descriptionTamil: "மெல்லிய லென்ஸ் சூத்திரம்"
            },
            {
              formula: "\\beta = \\frac{\\lambda D}{d}",
              description: "Fringe width in YDSE",
              descriptionTamil: "YDSE-இல் பட்டை அகலம்"
            }
        ]
      }
    },
    'modern-physics': {
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
              formula: "E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}",
              description: "Energy levels in Bohr atom",
              descriptionTamil: "போர் அணுவில் ஆற்றல் மட்டங்கள்"
            }
          ]
        }
    },
};


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
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
            A comprehensive list of formulas for NEET Physics, organized by topic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {Object.entries(physicsFormulas).map(([topic, subtopicData]) => (
              <AccordionItem value={topic} key={topic}>
                <AccordionTrigger className="text-xl font-headline capitalize card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                  {topic.replace(/([A-Z])/g, ' $1').trim()}
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[30%]">Formula</TableHead>
                        <TableHead>Description (English)</TableHead>
                        <TableHead>Description (Tamil)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.values(subtopicData)[0].formulas.map((entry: any, index: number) => (
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
