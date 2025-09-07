
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
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
};

export default function NeetPhysicsStrategyGuidePage() {
  return (
    <div className="container mx-auto space-y-8 subject-biology">
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

      <Tabs defaultValue="deep-dive" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deep-dive">Concept Deep Dive</TabsTrigger>
          <TabsTrigger value="topper-approach">Topper's Approach</TabsTrigger>
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
        <TabsContent value="topper-approach" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary" />
                <BilingualText english="NEET Physics Mastery: A Topper’s Approach" tamil="நீட் இயற்பியல் தேர்ச்சி: ஒரு டாப்பரின் அணுகுமுறை" />
              </CardTitle>
              <CardDescription>
                 <BilingualText english="Deep Conceptual Understanding, Strategic Learning, and Efficient Problem Solving" tamil="ஆழமான கருத்தியல் புரிதல், உத்தியியல் கற்றல் மற்றும் திறமையான சிக்கல் தீர்த்தல்" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 prose dark:prose-invert max-w-none">
                <BilingualText 
                    english="**Introduction**"
                    tamil="அறிமுகம்"
                />
                <p><BilingualText 
                    english="Physics holds a central, often decisive, role in the National Eligibility cum Entrance Test (NEET), which determines medical admissions for undergraduate medical and dental courses in India. Unlike Biology or Chemistry, where memorization may occasionally suffice, NEET Physics demands a nuanced blend of conceptual mastery, logical reasoning, numerical agility, and strategic time management. Top NEET performers—those who consistently secure 140+ in Physics and propel their total score into the competitive strata—consistently approach the subject with a philosophy that transcends rote learning. Their methodology seamlessly integrates foundational clarity, frequent revision, applied problem-solving, and a robust, structured study plan. This report offers a comprehensive, paragraph-driven exploration of how a NEET topper would approach Physics: delving deeply into conceptual underpinnings, linking major themes, providing visual aids for cognitive mapping, and equipping aspirants with actionable strategies and common pitfall warnings."
                    tamil="[Introduction in Tamil]"
                /></p>

                <BilingualText 
                    english="**The NEET Physics Topper Mindset and Study Approach**"
                    tamil="நீட் இயற்பியல் டாப்பர் மனநிலை மற்றும் படிப்பு அணுகுமுறை"
                />
                 <p><BilingualText 
                    english="The journey from novice to NEET Physics topper is as much about refining one’s mindset as it is about building content knowledge. Toppers understand that Physics is a tool for understanding the world, not a labyrinth of formulas to be memorized. This conceptual approach starts with the “why” behind every law and equation: Why does a force produce acceleration? Why is energy conserved? This intrinsic curiosity leads to a deeper, more permanent understanding."
                    tamil="[Paragraph 1 in Tamil]"
                /></p>
                 <p><BilingualText 
                    english="A common denominator among NEET Physics toppers is a willingness to invest time in building conceptual clarity right from the basics. They do not shy away from spending extra hours on foundational chapters such as Units & Measurements, Kinematics, and Newton's Laws before progressing to higher-order topics like Electrostatics or Modern Physics. This patient, layered methodology ensures there are no knowledge gaps—critical, because NEET problems often interweave multiple concepts from different chapters."
                    tamil="[Paragraph 2 in Tamil]"
                /></p>
                 <p><BilingualText 
                    english="Furthermore, toppers understand the “application-based” demand of NEET. Rather than learning equations in isolation, they focus on understanding real-life applications and experiment with thought experiments, free-body diagrams, and visualization techniques. Such methods foster the ability to adapt to NEET's unpredictable MCQs, which frequently require cross-topic integration, reasoning, and elimination skills."
                    tamil="[Paragraph 3 in Tamil]"
                /></p>
                 <p><BilingualText 
                    english="The topper’s mindset also includes resilience and adaptability. Recognizing that setbacks, errors, and doubts are part of the process, top performers focus on iterative improvement, learning actively from mistakes made during practice tests or topic-wise mock exams. They embrace self-assessment and analysis as fundamental to progress, rather than shying away from their weak points."
                    tamil="[Paragraph 4 in Tamil]"
                /></p>
                 <p><BilingualText 
                    english="Lastly, confidence without complacency is a signature trait. While toppers approach the subject with assurance—grounded in relentless practice and strong basics—they also stay humble, continually reviewing and updating their notes, mind maps, and formula sheets to avoid overconfidence-related errors on the exam day."
                    tamil="[Paragraph 5 in Tamil]"
                /></p>

                <BilingualText 
                    english="**Structured Learning Plan for NEET Physics**"
                    tamil="நீட் இயற்பியலுக்கான கட்டமைக்கப்பட்ட கற்றல் திட்டம்"
                />
                <p><BilingualText
                    english="A NEET Physics topper’s study plan is rooted in structure, discipline, and a deep awareness of the syllabus and exam trends. It delicately balances theory, numericals, revision, and testing."
                    tamil="[Paragraph 6 in Tamil]"
                /></p>

                <BilingualText 
                    english="*Time Management and Daily Routine*"
                    tamil="நேர மேலாண்மை மற்றும் தினசரி வழக்கம்"
                />
                 <p><BilingualText
                    english="Toppers typically adhere to tailored daily and weekly schedules, balancing their time among Physics, Chemistry, and Biology, with an emphasis on Physics during their cognitive peak hours (usually mornings for numericals, evenings for revision). A classic topper routine may involve 2–3 hours of focused Physics study daily, with slots dedicated to..."
                    tamil="[Paragraph 7 in Tamil]"
                /></p>
                
                <BilingualText 
                    english="*Syllabus Prioritization and Sequencing*"
                    tamil="பாடத்திட்ட முன்னுரிமை மற்றும் வரிசைப்படுத்தல்"
                />
                <p><BilingualText
                    english="A common mistake is to treat all Physics chapters with equal immediacy or to proceed linearly as per textbooks. Toppers, in contrast, sequence their preparation based on conceptual hierarchy and NEET weightage. For example, Mechanics (Kinematics, Laws of Motion, Work-Energy, Gravitation, etc.) forms the bedrock for understanding both Class 11 and 12 physics and typically contributes 25–30% to the Physics section. Once the fundamentals are strong, toppers progressively tackle Thermodynamics, Electrodynamics, Optics, and Modern Physics, ensuring each subsequent topic builds upon earlier knowledge."
                    tamil="[Paragraph 8 in Tamil]"
                /></p>
                <p><BilingualText
                    english="A sample “conceptual build-up” progression might look as follows:"
                    tamil="[Sample progression intro in Tamil]"
                /></p>
                <ol>
                    <li><BilingualText english="Units, Measurements, Vectors" tamil="[List item 1 in Tamil]"/></li>
                    <li><BilingualText english="Kinematics → Laws of Motion → Work, Energy, Power → System of Particles → Rotational Motion → Gravitation" tamil="[List item 2 in Tamil]"/></li>
                    <li><BilingualText english="Properties of Matter & Fluid Mechanics" tamil="[List item 3 in Tamil]"/></li>
                    <li><BilingualText english="Thermodynamics" tamil="[List item 4 in Tamil]"/></li>
                    <li><BilingualText english="Oscillations & Waves" tamil="[List item 5 in Tamil]"/></li>
                    <li><BilingualText english="Electrostatics → Current Electricity → Magnetism → Electromagnetic Induction → Alternating Current → Electromagnetic Waves" tamil="[List item 6 in Tamil]"/></li>
                    <li><BilingualText english="Optics (Ray and Wave)" tamil="[List item 7 in Tamil]"/></li>
                    <li><BilingualText english="Modern Physics (Semiconductors, Atoms, Nuclei, Dual Nature)" tamil="[List item 8 in Tamil]"/></li>
                </ol>
                 <p><BilingualText
                    english="By following this order, toppers facilitate natural transitions between related topics. Revision is cyclic, ensuring that earlier chapters remain fresh and connected to newer material."
                    tamil="[Conclusion in Tamil]"
                /></p>

                <BilingualText 
                    english="**Materials and Resources**"
                    tamil="பொருட்கள் மற்றும் ஆதாரங்கள்"
                />
                <p><BilingualText
                    english="Toppers rely primarily on NCERT textbooks, as a significant fraction of NEET Physics questions are directly or indirectly lifted from them. These form the “core,” to be supplemented by select reference books like H.C. Verma, D.C. Pandey, or in-house modules from trusted coaching centers like Allen, PW, or NEET World. Crucially, toppers avoid resource overload—they prefer mastering a few carefully chosen sources instead of dabbling in too many."
                    tamil="[Materials Paragraph 1 in Tamil]"
                /></p>
                 <p><BilingualText
                    english="Structured practice is facilitated via:"
                    tamil="[Structured practice intro in Tamil]"
                /></p>
                <ul>
                    <li><BilingualText english="Allen/PW/NEET World/DPPs (Daily Practice Problems) modules" tamil="[Resource list item 1 in Tamil]"/></li>
                    <li><BilingualText english="Chapterwise MCQ banks and past year question compilations" tamil="[Resource list item 2 in Tamil]"/></li>
                    <li><BilingualText english="Mock test series simulating NEET exam conditions" tamil="[Resource list item 3 in Tamil]"/></li>
                    <li><BilingualText english="Visual aids, mind maps, and short notes for last-minute revision" tamil="[Resource list item 4 in Tamil]"/></li>
                </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
