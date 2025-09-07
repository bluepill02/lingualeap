
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
  Book,
  ClipboardList,
  Target,
  Goal,
  RefreshCw,
  Sigma,
  Network,
  BarChart,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/physics/neet-physics-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';


const sectionIcons = {
  mechanics: <Wind className="text-blue-400" />,
  thermodynamics: <Thermometer className="text-orange-400" />,
  'electromagnetism-optics': <Waves className="text-purple-400" />,
  'modern-physics': <Atom className="text-green-400" />,
};

export default function NeetPhysicsStrategyGuidePage() {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');

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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="text-primary" />
                 {language === 'english' ? "NEET Physics Mastery: A Topper’s Approach" : "நீட் இயற்பியல் தேர்ச்சி: ஒரு டாப்பரின் அணுகுமுறை"}
              </CardTitle>
              <CardDescription>
                  {language === 'english' ? "Deep Conceptual Understanding, Strategic Learning, and Efficient Problem Solving" : "ஆழமான கருத்தியல் புரிதல், உத்தியியல் கற்றல் மற்றும் திறமையான சிக்கல் தீர்த்தல்"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>{language === 'english' ? "Physics holds a central, often decisive, role in the National Eligibility cum Entrance Test (NEET), which determines medical admissions for undergraduate medical and dental courses in India. Unlike Biology or Chemistry, where memorization may occasionally suffice, NEET Physics demands a nuanced blend of conceptual mastery, logical reasoning, numerical agility, and strategic time management. Top NEET performers—those who consistently secure 140+ in Physics and propel their total score into the competitive strata—consistently approach the subject with a philosophy that transcends rote learning. Their methodology seamlessly integrates foundational clarity, frequent revision, applied problem-solving, and a robust, structured study plan. This report offers a comprehensive, paragraph-driven exploration of how a NEET topper would approach Physics: delving deeply into conceptual underpinnings, linking major themes, providing visual aids for cognitive mapping, and equipping aspirants with actionable strategies and common pitfall warnings." : "இந்தியாவில் இளங்கலை மருத்துவ மற்றும் பல் மருத்துவ படிப்புகளுக்கான மாணவர் சேர்க்கையை தீர்மானிக்கும் தேசிய தகுதி மற்றும் நுழைவுத் தேர்வில் (நீட்) இயற்பியல் ஒரு மையமான, பெரும்பாலும் தீர்க்கமான பாத்திரத்தை வகிக்கிறது. உயிரியல் அல்லது வேதியியலைப் போலல்லாமல், மனப்பாடம் செய்வது எப்போதாவது போதுமானதாக இருக்கலாம், நீட் இயற்பியலுக்கு கருத்தியல் தேர்ச்சி, தர்க்கரீதியான பகுத்தறிவு, எண் சுறுசுறுப்பு மற்றும் உத்திപരമായ நேர மேலாண்மை ஆகியவற்றின் நுணுக்கமான கலவை தேவைப்படுகிறது. நீட் தேர்வில் சிறந்து விளங்குபவர்கள்—அதாவது இயற்பியலில் தொடர்ந்து 140+ மதிப்பெண்களைப் பெற்று, தங்கள் மொத்த மதிப்பெண்ணை போட்டித் தரத்திற்கு உயர்த்துபவர்கள்—தொடர்ந்து மனப்பாடம் செய்வதைக் கடந்த ஒரு தத்துவத்துடன் பாடத்தை அணுகுகிறார்கள். அவர்களின் வழிமுறை அடித்தளத் தெளிவு, அடிக்கடி திருப்புதல், பயன்பாட்டுச் சிக்கல் தீர்த்தல் மற்றும் ஒரு வலுவான, கட்டமைக்கப்பட்ட படிப்புத் திட்டம் ஆகியவற்றை தடையின்றி ஒருங்கிணைக்கிறது. இந்த அறிக்கை ஒரு நீட் டாப்பர் இயற்பியலை எவ்வாறு அணுகுவார் என்பதற்கான ஒரு விரிவான, பத்தி சார்ந்த ஆய்வை வழங்குகிறது: கருத்தியல் அடிப்படைகளை ஆழமாக ஆராய்வது, முக்கிய கருப்பொருள்களை இணைப்பது, அறிவாற்றல் வரைபடத்திற்கான காட்சி உதவிகளை வழங்குவது, மற்றும் ஆர்வமுள்ளவர்களுக்கு செயல்படுத்தக்கூடிய உத்திகள் மற்றும் பொதுவான ஆபத்து எச்சரிக்கைகளுடன் ஆயுதபாணியாக்குவது."}</p>
                 <Alert variant="info" className="bg-primary/10 border-primary/20">
                    <BrainCircuit className="h-4 w-4 text-primary" />
                    <AlertTitle className="font-bold text-primary">{language === 'english' ? "The Topper's Mindset" : "டாப்பரின் மனநிலை"}</AlertTitle>
                    <AlertDescription>
                        {language === 'english' ? "The journey from novice to NEET Physics topper is as much about refining one’s mindset as it is about building content knowledge. Toppers understand that Physics is a tool for understanding the world, not a labyrinth of formulas to be memorized. This conceptual approach starts with the “why” behind every law and equation. This intrinsic curiosity leads to a deeper, more permanent understanding. Confidence without complacency is a signature trait." : "நீட் இயற்பியல் டாப்பராக மாறுவதற்கான பயணம், உள்ளடக்க அறிவை உருவாக்குவதைப் போலவே ஒருவரின் மனநிலையைச் செம்மைப்படுத்துவதைப் பற்றியது. டாப்பர்கள் இயற்பியலை உலகைப் புரிந்துகொள்வதற்கான ஒரு கருவியாகப் புரிந்துகொள்கிறார்கள், மனப்பாடம் செய்ய வேண்டிய சூத்திரங்களின் சிக்கலான வலையாக அல்ல. இந்த கருத்தியல் அணுகுமுறை ஒவ்வொரு விதி மற்றும் சமன்பாட்டிற்கும் பின்னால் உள்ள 'ஏன்' என்பதிலிருந்து தொடங்குகிறது. இந்த உள்ளார்ந்த ஆர்வம் ஒரு ஆழமான, நிரந்தரமான புரிதலுக்கு வழிவகுக்கிறது. மனநிறைவு இல்லாத நம்பிக்கை ஒரு தனித்துவமான குணமாகும்."}
                    </AlertDescription>
                </Alert>
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardList className="text-primary"/>{language === 'english' ? 'Structured Learning & Resources' : 'கட்டமைக்கப்பட்ட கற்றல் மற்றும் ஆதாரங்கள்'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Alert>
                        <Target className="h-4 w-4" />
                        <AlertTitle>{language === 'english' ? 'Time Management' : 'நேர மேலாண்மை'}</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc list-inside text-xs space-y-1">
                                <li>{language === 'english' ? '2-3 hours daily for Physics' : 'இயற்பியலுக்கு தினமும் 2-3 மணி நேரம்'}</li>
                                <li>{language === 'english' ? 'Morning for numericals, evening for revision' : 'காலை எண்களுக்கும், மாலை திருப்புதலுக்கும்'}</li>
                                <li>{language === 'english' ? '30-50 MCQs daily' : 'தினமும் 30-50 MCQகள்'}</li>
                                <li>{language === 'english' ? 'Regular timed mock tests' : 'வழக்கமான நேரக் கட்டுப்பாட்டுடன் கூடிய மாதிரித் தேர்வுகள்'}</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                    <Alert>
                        <Book className="h-4 w-4" />
                        <AlertTitle>{language === 'english' ? 'Core Resources' : 'முக்கிய ஆதாரங்கள்'}</AlertTitle>
                         <AlertDescription>
                            <ul className="list-disc list-inside text-xs space-y-1">
                                <li>{language === 'english' ? 'NCERT Textbooks (Core)' : 'NCERT பாடப்புத்தகங்கள் (முக்கியமானவை)'}</li>
                                <li>{language === 'english' ? 'Select reference books (H.C. Verma, etc.)' : 'தேர்ந்தெடுக்கப்பட்ட குறிப்புப் புத்தகங்கள் (எச்.சி. வர்மா போன்றவை)'}</li>
                                <li>{language === 'english' ? 'Coaching Modules/DPPs' : 'பயிற்சி மைய தொகுதிகள்/DPPகள்'}</li>
                                <li>{language === 'english' ? 'Past Year Question Banks' : 'கடந்த ஆண்டு வினா வங்கிகள்'}</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                 <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{language === 'english' ? 'View Recommended Syllabus Progression' : 'பரிந்துரைக்கப்பட்ட பாடத்திட்ட முன்னேற்றத்தைக் காண்க'}</AccordionTrigger>
                        <AccordionContent>
                           <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground pl-4">
                                <li>{language === 'english' ? "Units, Measurements, Vectors" : "அலகுகள், அளவீடுகள், வெக்டர்கள்"}</li>
                                <li>{language === 'english' ? "Kinematics → Laws of Motion → Work, Energy, Power → Gravitation" : "இயக்கவியல் → இயக்க விதிகள் → வேலை, ஆற்றல், திறன் → ஈர்ப்பு"}</li>
                                <li>{language === 'english' ? "Properties of Matter & Fluid Mechanics" : "பருப்பொருட்களின் பண்புகள் மற்றும் திரவ இயக்கவியல்"}</li>
                                <li>{language === 'english' ? "Thermodynamics" : "வெப்ப இயக்கவியல்"}</li>
                                <li>{language === 'english' ? "Oscillations & Waves" : "அலைவுகள் மற்றும் அலைகள்"}</li>
                                <li>{language === 'english' ? "Electrostatics → Current Electricity → Magnetism & EMI → AC" : "நிலைமின்னியல் → மின்னோட்டவியல் → காந்தவியல் & EMI → AC"}</li>
                                <li>{language === 'english' ? "Optics (Ray and Wave)" : "ஒளியியல் (கதிர் மற்றும் அலை)"}</li>
                                <li>{language === 'english' ? "Modern Physics" : "நவீன இயற்பியல்"}</li>
                           </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Goal className="text-primary"/>{language === 'english' ? 'Mastery Through Deep Concepts & Problem-Solving' : 'ஆழமான கருத்துக்கள் மற்றும் சிக்கல் தீர்த்தல் மூலம் தேர்ச்சி'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <Alert variant="warning">
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>{language === 'english' ? 'Focus on Conceptual Clarity' : 'கருத்தியல் தெளிவில் கவனம் செலுத்துங்கள்'}</AlertTitle>
                    <AlertDescription>
                        {language === 'english' ? "Don't just memorize formulas; understand the 'why' behind every law. Use active learning: ask 'what if?', explain concepts in your own words, and visualize with diagrams. This builds confidence and reduces errors." : "சூத்திரங்களை மனப்பாடம் செய்யாதீர்கள்; ஒவ்வொரு விதிக்கும் பின்னால் உள்ள 'ஏன்' என்பதைப் புரிந்து கொள்ளுங்கள். செயல்வழிக் கற்றலைப் பயன்படுத்துங்கள்: 'என்ன நடந்தால்?' என்று கேளுங்கள், கருத்துக்களை உங்கள் சொந்த வார்த்தைகளில் விளக்குங்கள், மற்றும் வரைபடங்களுடன் காட்சிப்படுத்துங்கள். இது நம்பிக்கையை உருவாக்குகிறது மற்றும் பிழைகளைக் குறைக்கிறது."}
                    </AlertDescription>
                </Alert>
                 <Accordion type="multiple" className="w-full space-y-2">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-base bg-muted/50 px-4 rounded-md hover:bg-muted/80">{language === 'english' ? 'Systematic Problem-Solving Steps' : 'முறையான சிக்கல் தீர்க்கும் படிகள்'}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                           <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground p-4">
                                <li>{language === 'english' ? "Read carefully, note data." : "கவனமாகப் படியுங்கள், தரவைக் கவனியுங்கள்."}</li>
                                <li>{language === 'english' ? "Identify the core physics principle." : "முக்கிய இயற்பியல் கொள்கையைக் கண்டறியவும்."}</li>
                                <li>{language === 'english' ? "Draw a diagram (FBD, circuit, etc.)." : "ஒரு வரைபடத்தை வரையவும் (FBD, மின்சுற்று போன்றவை)."}</li>
                                <li>{language === 'english' ? "Select the correct formula." : "சரியான சூத்திரத்தைத் தேர்ந்தெடுக்கவும்."}</li>
                                <li>{language === 'english' ? "Use logical elimination on options." : "விருப்பங்களில் தர்க்கரீதியான நீக்குதலைப் பயன்படுத்தவும்."}</li>
                                <li>{language === 'english' ? "Calculate and check if the answer makes sense." : "கணக்கிட்டு பதில் அர்த்தமுள்ளதா என்பதைச் சரிபார்க்கவும்."}</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-base bg-muted/50 px-4 rounded-md hover:bg-muted/80">{language === 'english' ? 'Key Problem-Solving Tactics' : 'முக்கிய சிக்கல் தீர்க்கும் தந்திரங்கள்'}</AccordionTrigger>
                        <AccordionContent className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                <li>{language === 'english' ? "Reverse Engineering from options" : "விருப்பங்களிலிருந்து தலைகீழ் பொறியியல்"}</li>
                                <li>{language === 'english' ? "Using formula sheets & mind maps" : "சூத்திரத் தாள்கள் மற்றும் மன வரைபடங்களைப் பயன்படுத்துதல்"}</li>
                                <li>{language === 'english' ? "Dimensional Analysis" : "பரிமாணப் பகுப்பாய்வு"}</li>
                                <li>{language === 'english' ? "Visual Pattern Recognition" : "காட்சி வடிவ அங்கீகாரம்"}</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><RefreshCw className="text-primary"/>{language === 'english' ? 'Revision & Improvement' : 'திருப்புதல் மற்றும் முன்னேற்றம்'}</CardTitle>
            </CardHeader>
             <CardContent className="space-y-4">
                 <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{language === 'english' ? 'Avoid Common Pitfalls' : 'பொதுவான ஆபத்துகளைத் தவிர்க்கவும்'}</AlertTitle>
                    <AlertDescription>
                       <ul className="list-disc list-inside text-xs space-y-1">
                           <li>{language === 'english' ? "Don't skip basics or ignore derivations." : "அடிப்படைகளைத் தவிர்க்காதீர்கள் அல்லது தருவிப்புகளைப் புறக்கணிக்காதீர்கள்."}</li>
                           <li>{language === 'english' ? "Avoid resource overload; master a few good sources." : "வளங்களின் அதிகப்படியான சுமையைத் தவிர்க்கவும்; சில நல்ல ஆதாரங்களில் தேர்ச்சி பெறுங்கள்."}</li>
                           <li>{language === 'english' ? "Practice varied, multi-step numericals, not just theory." : "கோட்பாட்டை மட்டுமல்ல, பல-படி, ஒருங்கிணைந்த எண்சார் கணக்குகளைப் பயிற்சி செய்யுங்கள்."}</li>
                           <li>{language === 'english' ? "Always use diagrams (FBDs) for Mechanics and Optics." : "இயக்கவியல் மற்றும் ஒளியியலுக்கு எப்போதும் வரைபடங்களைப் (FBDs) பயன்படுத்துங்கள்."}</li>
                       </ul>
                    </AlertDescription>
                </Alert>
                <Alert>
                    <Network className="h-4 w-4"/>
                    <AlertTitle>{language === 'english' ? 'Interlink Concepts' : 'கருத்துக்களை ஒன்றோடொன்று இணைக்கவும்'}</AlertTitle>
                    <AlertDescription>
                        {language === 'english' ? "Connect ideas across different chapters, like Mechanics with Thermodynamics or Electrodynamics with Modern Physics. This helps in solving integrative NEET questions." : "வெவ்வேறு அத்தியாயங்களில் உள்ள கருத்துக்களை இணைக்கவும், எ.கா., இயக்கவியலை வெப்ப இயக்கவியலுடனோ அல்லது மின்காந்தவியலை நவீன இயற்பியலுடனோ. இது ஒருங்கிணைந்த நீட் கேள்விகளைத் தீர்க்க உதவுகிறது."}
                    </AlertDescription>
                </Alert>
             </CardContent>
          </Card>

        </TabsContent>
      </Tabs>
    </div>
  );
}

    