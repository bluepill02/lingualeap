
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
  Thermometer,
  Sigma,
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
import { strategyGuideContent } from '@/lib/neet/chemistry/neet-chemistry-strategy-guide';
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


const sectionIcons = {
  physical: <Thermometer className="text-blue-400" />,
  inorganic: <Sigma className="text-green-400" />,
  organic: <Atom className="text-orange-400" />,
};

export default function NeetChemistryStrategyGuidePage() {
  const [deepDiveLanguage, setDeepDiveLanguage] = useState<'english' | 'tamil'>('english');
  const [topperLanguage, setTopperLanguage] = useState<'english' | 'tamil'>('english');


  return (
    <div className="container mx-auto space-y-8 subject-chemistry">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet/chemistry">
          <Button variant="ghost" size="icon" aria-label="Back to NEET Chemistry">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
            <Star />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">
              NEET Chemistry Strategy Guide
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
            <div className="flex justify-end mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                    <Button
                        size="sm"
                        variant={deepDiveLanguage === 'english' ? 'secondary' : 'ghost'}
                        onClick={() => setDeepDiveLanguage('english')}
                    >
                        EN
                    </Button>
                    <Button
                        size="sm"
                        variant={deepDiveLanguage === 'tamil' ? 'secondary' : 'ghost'}
                        onClick={() => setDeepDiveLanguage('tamil')}
                    >
                        தமிழ்
                    </Button>
                </div>
            </div>
          {Object.entries(strategyGuideContent).map(([key, sectionData]) => (
            <div key={key} className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                {sectionIcons[key as keyof typeof sectionIcons]}
                <h2 className="text-3xl font-bold font-headline tracking-tight">
                  {deepDiveLanguage === 'english' ? sectionData.title : sectionData.titleTamil}
                </h2>
              </div>
              <Accordion type="multiple" className="w-full space-y-4">
                {sectionData.chapters.map((chapter, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-bold font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                      <div className="text-left">
                        {deepDiveLanguage === 'english' ? chapter.chapterName : chapter.chapterNameTamil}
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
                              {deepDiveLanguage === 'english' ? section.title : section.titleTamil}
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
                                      <MarkdownRenderer>
                                          {deepDiveLanguage === 'english' ? point.explanation : point.explanationTamil}
                                      </MarkdownRenderer>
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
                        variant={topperLanguage === 'english' ? 'secondary' : 'ghost'}
                        onClick={() => setTopperLanguage('english')}
                    >
                        EN
                    </Button>
                    <Button
                        size="sm"
                        variant={topperLanguage === 'tamil' ? 'secondary' : 'ghost'}
                        onClick={() => setTopperLanguage('tamil')}
                    >
                        தமிழ்
                    </Button>
                </div>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <TrendingUp className="text-primary" />
                         {topperLanguage === 'english' ? 'High-Level NEET Chemistry Study Toolkit: Conceptual Mastery Beyond Memorization' : 'உயர்நிலை நீட் வேதியியல் ஆய்வுக் கருவிப்பெட்டி: மனப்பாடத்தைக் கடந்த கருத்தியல் தேர்ச்சி'}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                     <p>
                        <b>{topperLanguage === 'english' ? 'Introduction: The NEET Chemistry Edge' : 'அறிமுகம்: நீட் வேதியியல் மேன்மை'}</b>
                     </p>
                     <p>
                        {topperLanguage === 'english' 
                         ? 'Success in NEET Chemistry hinges not just on rote memorization, but on deep conceptual understanding and smart, strategic application. Toppers stand out because they master the “why” and “how” behind every equation or trend, not merely the “what.” This report is meticulously crafted to empower aspirants with the structured, principle-driven insights, advanced tactics, and visual concept maps that high achievers leverage for peak performance in NEET Chemistry. Each section—Organic, Physical, and Inorganic Chemistry—presents analytic notes, core equations, flowcharts, and bilingual (English-Tamil) terms where meaningful, providing a holistic and visual learning path.' 
                         : 'நீட் வேதியியலில் வெற்றி என்பது மனப்பாடம் செய்வதை மட்டும் சார்ந்தது அல்ல, மாறாக ஆழமான கருத்தியல் புரிதல் மற்றும் புத்திசாலித்தனமான, உத்தியியல் பயன்பாடு ஆகியவற்றைப் பொறுத்தது. உயர் சாதனையாளர்கள் ஒவ்வொரு சமன்பாடு அல்லது போக்கின் பின்னணியில் உள்ள "ஏன்" மற்றும் "எப்படி" என்பதை முழுமையாகப் புரிந்துகொள்வதால் தனித்து நிற்கிறார்கள். இந்த அறிக்கை, நீட் வேதியியலில் உச்ச செயல்திறனுக்காக உயர் சாதனையாளர்கள் பயன்படுத்தும் கட்டமைக்கப்பட்ட, கொள்கை சார்ந்த நுண்ணறிவுகள், மேம்பட்ட தந்திரங்கள் மற்றும் காட்சி கருத்து வரைபடங்களுடன் ஆர்வலர்களுக்கு அதிகாரம் அளிக்க உன்னிப்பாக வடிவமைக்கப்பட்டுள்ளது. ஒவ்வொரு பிரிவும்—கரிம, இயற்பியல், மற்றும் கனிம வேதியியல்—பகுப்பாய்வுக் குறிப்புகள், முக்கியச் சமன்பாடுகள், செயல்வழிப் படங்கள் மற்றும் அர்த்தமுள்ள இடங்களில் இருமொழி (ஆங்கிலம்-தமிழ்) சொற்களை அளித்து, ஒரு முழுமையான மற்றும் காட்சி அடிப்படையிலான கற்றல் பாதையை வழங்குகிறது.'}
                    </p>
                </CardContent>
            </Card>

            <Accordion type="multiple" defaultValue={['organic']} className="w-full space-y-4">
                
                <AccordionItem value="organic">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                        <div className="flex items-center gap-3">
                           <Atom className="text-orange-400"/>
                           {topperLanguage === 'english' ? 'Organic Chemistry: Mechanisms, Principles, and Strategic Shortcuts' : 'கரிம வேதியியல்: வினைவழிமுறைகள், கோட்பாடுகள் மற்றும் உத்திப்பூர்வ குறுக்குவழிகள்'}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Alert variant="info">
                            <Lightbulb className="w-4 h-4" />
                            <AlertTitle>{topperLanguage === 'english' ? '1. Core Mechanistic Principles: “Why Reactions Occur”' : '1. முக்கிய வினைவழிமுறைக் கோட்பாடுகள்: “வினைகள் ஏன் நிகழ்கின்றன”'}</AlertTitle>
                            <AlertDescription>
                                {topperLanguage === 'english' ? 'Before diving into equations and steps, recognize that every organic reaction is governed by: Electronic Effects (Inductive, resonance, etc.), Steric Effects, and Reaction Pathways. A true NEET topper can always identify not just what will happen, but why it happens that way.' : 'சமன்பாடுகள் மற்றும் படிகளுக்குள் நுழைவதற்கு முன், ஒவ்வொரு கரிம வினையும் இவற்றால் நிர்வகிக்கப்படுகிறது என்பதை அங்கீகரிக்கவும்: மின்னணு விளைவுகள் (தூண்டல், உடனிசைவு போன்றவை), ஸ்டெரிக் விளைவுகள், மற்றும் வினைப் பாதைகள். ஒரு உண்மையான நீட் டாப்பர் என்ன நடக்கும் என்பதை மட்டுமல்ல, அது ஏன் அப்படி நடக்கிறது என்பதையும் எப்போதும் அடையாளம் காண முடியும்.'}
                            </AlertDescription>
                        </Alert>

                        <Card>
                            <CardHeader>
                                <CardTitle>{topperLanguage === 'english' ? '2. Nucleophilic Substitution: SN1 vs. SN2—Detailed Concepts' : '2. கருக்கவர் பதிலீடு: SN1 vs. SN2—விரிவான கருத்துக்கள்'}</CardTitle>
                                <CardDescription>{topperLanguage === 'english' ? 'Equations and Mechanisms' : 'சமன்பாடுகள் மற்றும் வினைவழிமுறைகள்'}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p><strong>{topperLanguage === 'english' ? 'General Equation' : 'பொதுச் சமன்பாடு'}:</strong> R–X + Nu⁻ → R–Nu + X⁻</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <Accordion type="single" collapsible>
                                      <AccordionItem value="sn1">
                                        <AccordionTrigger>SN1 {topperLanguage === 'english' ? 'Mechanism' : 'வினைவழிமுறை'}</AccordionTrigger>
                                        <AccordionContent className="space-y-2 p-2 text-sm">
                                          <p><strong>{topperLanguage === 'english' ? 'Rate Law' : 'வினைவேக விதி'}:</strong> Rate = k[R–X]</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Key Principle' : 'முக்கியக் கொள்கை'}:</strong> {topperLanguage === 'english' ? 'Rate depends on forming a stable carbocation (3° > 2° > 1°).' : 'வினைவேகம் ஒரு நிலையான கார்போகேட்டயான் உருவாவதைப் பொறுத்தது (3° > 2° > 1°).'}</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Stereochemistry' : 'முப்பரிமாண வேதியியல்'}:</strong> {topperLanguage === 'english' ? 'Racemization' : 'இனக்கலவை உருவாதல்'}</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Favored By' : 'சாதகமானவை'}:</strong> {topperLanguage === 'english' ? 'Polar protic solvents, weak nucleophiles, tertiary substrates.' : 'முனைவுள்ள புரோட்டிக் கரைப்பான்கள், బలహీనமான நியூக்ளியோஃபைல்கள், மூன்றாம் நிலை அடி மூலக்கூறுகள்.'}</p>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                     <Accordion type="single" collapsible>
                                      <AccordionItem value="sn2">
                                        <AccordionTrigger>SN2 {topperLanguage === 'english' ? 'Mechanism' : 'வினைவழிமுறை'}</AccordionTrigger>
                                         <AccordionContent className="space-y-2 p-2 text-sm">
                                          <p><strong>{topperLanguage === 'english' ? 'Rate Law' : 'வினைவேக விதி'}:</strong> Rate = k[R–X][Nu⁻]</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Key Principle' : 'முக்கியக் கொள்கை'}:</strong> {topperLanguage === 'english' ? 'Steric hindrance is key (methyl > 1° > 2° > 3°).' : 'ஸ்டெரிக் தடை முக்கியமானது (மெத்தில் > 1° > 2° > 3°).'}</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Stereochemistry' : 'முப்பரிமாண வேதியியல்'}:</strong> {topperLanguage === 'english' ? 'Inversion (Walden)' : 'பிரட்டல் (வால்டன்)'}</p>
                                          <p><strong>{topperLanguage === 'english' ? 'Favored By' : 'சாதகமானவை'}:</strong> {topperLanguage === 'english' ? 'Strong nucleophiles, polar aprotic solvents, less hindered substrates.' : 'வலுவான நியூக்ளியோஃபைல்கள், முனைவுள்ள அப்ரோட்டிக் கரைப்பான்கள், குறைந்த தடையுள்ள அடி மூலக்கூறுகள்.'}</p>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {topperLanguage === 'english' ? 'Analysis: Understanding the underlying electronic logic is central: SN1 is supported by anything that stabilizes carbocations (hyperconjugation, resonance, —அதிக கார்போ சுதந்திரம் ["more carbocation freedom" in Tamil]). Steric hindrance is the nemesis of SN2 since both substrate and nucleophile must “fit” together in the transition state, like a lock and key (or “தடுப்பு”—meaning “hindrance” in Tamil). Recognizing these controlling factors helps instantly justify which reaction path predominates for NEET mechanism and prediction questions.' : 'பகுப்பாய்வு: அடிப்படையான மின்னணு தர்க்கத்தைப் புரிந்துகொள்வது மையமானது: SN1 கார்போகேட்டயான்களை உறுதிப்படுத்தும் எதனாலும் ஆதரிக்கப்படுகிறது (ஹைபர்கான்ஜுகேஷன், உடனிசைவு, —அதிக கார்போ சுதந்திரம்). ஸ்டெரிக் தடை SN2-க்கு எதிரானது, ஏனெனில் அடி மூலக்கூறும் நியூக்ளியோஃபைலும் மாற்ற நிலையில் ஒரு பூட்டு மற்றும் சாவி போல (“தடுப்பு”) ஒன்றாகப் பொருந்த வேண்டும். இந்தக் கட்டுப்பாட்டுக் காரணிகளை அறிந்துகொள்வது, நீட் வினைவழிமுறை மற்றும் முன்கணிப்புக் கேள்விகளுக்கு எந்த வினைப்பாதை ஆதிக்கம் செலுத்துகிறது என்பதை உடனடியாக நியாயப்படுத்த உதவுகிறது.'}
                                </p>
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="physical">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                         <div className="flex items-center gap-3">
                            <Thermometer className="text-blue-400"/>
                            {topperLanguage === 'english' ? 'Physical Chemistry: Conceptual Formulas and Application Logic' : 'இயற்பியல் வேதியியல்: கருத்தியல் சூத்திரங்கள் மற்றும் பயன்பாட்டு தர்க்கம்'}
                         </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Card>
                            <CardHeader><CardTitle>{topperLanguage === 'english' ? '1. Thermodynamics: Gibbs Free Energy (G), Spontaneity, and Chemical Work' : '1. வெப்ப இயக்கவியல்: கிப்ஸ் கட்டிலா ஆற்றல் (G), தன்னிச்சை மற்றும் வேதியியல் வேலை'}</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                <p><strong>{topperLanguage === 'english' ? 'Key Equations' : 'முக்கிய சமன்பாடுகள்'}:</strong></p>
                                <p>ΔG = ΔH – TΔS</p>
                                <p>ΔG° = -RT ln K</p>
                                <p><strong>{topperLanguage === 'english' ? 'Conceptual Notes' : 'கருத்துக் குறிப்புகள்'}:</strong></p>
                                <p>{topperLanguage === 'english' ? 'Why does this formula work? ΔH is total heat content. TΔS is the effect of disorder. The formula assumes constant T and P. At equilibrium (ΔG = 0), maximum possible useful work is achieved.' : 'இந்த சூத்திரம் ஏன் வேலை செய்கிறது? ΔH என்பது மொத்த வெப்ப உள்ளடக்கம். TΔS என்பது ஒழுங்கின்மையின் விளைவு. சூத்திரம் நிலையான T மற்றும் P ஐக் கருதுகிறது. சமநிலையில் (ΔG = 0), சாத்தியமான அதிகபட்ச பயனுள்ள வேலை அடையப்படுகிறது.'}</p>
                                <p><strong>{topperLanguage === 'english' ? 'NEET Insight' : 'நீட் நுண்ணறிவு'}:</strong> {topperLanguage === 'english' ? 'In NEET MCQs, use signs and physical meaning: Will a reaction proceed? Plug in values, and recall, negative ΔG means spontaneous—no need to memorize exceptions if you understand this.' : 'நீட் MCQக்களில், குறிகள் மற்றும் இயற்பியல் அர்த்தத்தைப் பயன்படுத்தவும்: ஒரு வினை தொடருமா? மதிப்புகளை உள்ளிடவும், நினைவில் கொள்ளவும், எதிர்மறை ΔG தன்னிச்சையானது—இதைப் புரிந்துகொண்டால் விதிவிலக்குகளை மனப்பாடம் செய்யத் தேவையில்லை.'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader><CardTitle>{topperLanguage === 'english' ? '2. Chemical Equilibrium: Constants and Derivations' : '2. வேதியியல் சமநிலை: மாறிலிகள் மற்றும் தருவித்தல்கள்'}</CardTitle></CardHeader>
                             <CardContent className="space-y-2">
                                <p><strong>{topperLanguage === 'english' ? 'Key Equations' : 'முக்கிய சமன்பாடுகள்'}:</strong></p>
                                <p>Kc = [C]^c [D]^d / [A]^a [B]^b</p>
                                <p>Kp = Kc(RT)^Δn</p>
                                <p><strong>{topperLanguage === 'english' ? 'Conceptual Highlights' : 'கருத்தியல் சிறப்பம்சங்கள்'}:</strong></p>
                                <p>{topperLanguage === 'english' ? 'Why is K constant? Set by temperature: At equilibrium, rates of forward and reverse reactions are equal; their ratio is the equilibrium constant. K = k_forward / k_reverse.' : 'K ஏன் மாறிலி? வெப்பநிலையால் அமைக்கப்பட்டது: சமநிலையில், முன்னோக்கு மற்றும் தலைகீழ் வினைகளின் விகிதங்கள் சமம்; அவற்றின் விகிதம் சமநிலை மாறிலி ஆகும். K = k_முன்னோக்கு / k_தலைகீழ்.'}</p>
                             </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="inorganic">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                         <div className="flex items-center gap-3">
                           <Sigma className="text-green-400"/>
                           {topperLanguage === 'english' ? 'Inorganic Chemistry: Trends, Bonding, and Visualization' : 'கனிம வேதியியல்: போக்குகள், பிணைப்பு மற்றும் காட்சிப்படுத்தல்'}
                         </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                       <Alert variant="info">
                            <Lightbulb className="w-4 h-4" />
                            <AlertTitle>{topperLanguage === 'english' ? 'Core Principle: “Visualize Trends and Structures”' : 'முக்கியக் கொள்கை: “போக்குகள் மற்றும் கட்டமைப்புகளைக் காட்சிப்படுத்துங்கள்”'}</AlertTitle>
                            <AlertDescription>
                                {topperLanguage === 'english' ? 'Don’t just memorize periodic trends; understand the "why" behind them (nuclear charge vs. shielding). Use VBT and MOT to visualize bonding and predict properties like magnetism.' : 'தனிம வரிசை அட்டவணையின் போக்குகளை மனப்பாடம் செய்யாதீர்கள்; அவற்றின் பின்னணியில் உள்ள "ஏன்" என்பதைப் புரிந்து கொள்ளுங்கள் (அணுக்கரு மின்சுமை மற்றும் மறைத்தல் விளைவு). பிணைப்பைக் காட்சிப்படுத்தவும், காந்தத்தன்மை போன்ற பண்புகளைக் கணிக்கவும் VBT மற்றும் MOT ஐப் பயன்படுத்தவும்.'}
                            </AlertDescription>
                        </Alert>
                        <Card>
                             <CardHeader><CardTitle>{topperLanguage === 'english' ? '1. Periodic Table Trends' : '1. தனிம வரிசைப் பண்புகள்'}</CardTitle></CardHeader>
                             <CardContent className="space-y-2">
                                <p><strong>{topperLanguage === 'english' ? 'Atomic Radius (அணு ஆரம்)' : 'அணு ஆரம்'}:</strong> {topperLanguage === 'english' ? 'Decreases across, increases down.' : 'இடமிருந்து வலம் குறைகிறது, மேலிருந்து கீழ் அதிகரிக்கிறது.'}</p>
                                <p><strong>{topperLanguage === 'english' ? 'Ionization Energy (அயனியாக்கும் ஆற்றல்)' : 'அயனியாக்கும் ஆற்றல்'}:</strong> {topperLanguage === 'english' ? 'Increases across, decreases down.' : 'இடமிருந்து வலம் அதிகரிக்கிறது, மேலிருந்து கீழ் குறைகிறது.'}</p>
                                <p><strong>{topperLanguage === 'english' ? 'Logic' : 'தர்க்கம்'}:</strong> {topperLanguage === 'english' ? 'Across a period, nuclear charge increases while shielding is constant. Down a group, the number of shells increases.' : 'ஒரு வரிசையில், அணுக்கரு மின்சுமை அதிகரிக்கிறது, மறைத்தல் விளைவு மாறாமல் உள்ளது. ஒரு தொகுதியில், கூடுகளின் எண்ணிக்கை அதிகரிக்கிறது.'}</p>
                             </CardContent>
                        </Card>
                        <Card>
                             <CardHeader><CardTitle>{topperLanguage === 'english' ? '2. Chemical Bonding: VBT vs. MOT' : '2. வேதியியல் பிணைப்பு: VBT vs. MOT'}</CardTitle></CardHeader>
                             <CardContent className="space-y-2">
                                <p><strong>VBT:</strong> {topperLanguage === 'english' ? 'Explains geometry via hybridization.' : 'இனக்கலப்பு மூலம் வடிவவியலை விளக்குகிறது.'}</p>
                                <p><strong>MOT:</strong> {topperLanguage === 'english' ? 'Explains properties like paramagnetism more accurately.' : 'பாரா காந்தத்தன்மை போன்ற பண்புகளை மிகவும் துல்லியமாக விளக்குகிறது.'}</p>
                             </CardContent>
                        </Card>
                         <Card>
                             <CardHeader><CardTitle>{topperLanguage === 'english' ? '3. Coordination Chemistry' : '3. அணைவுச் சேர்ம வேதியியல்'}</CardTitle></CardHeader>
                             <CardContent className="space-y-2">
                                <p><strong>{topperLanguage === 'english' ? 'Stability Constants' : 'நிலைப்பு மாறிலிகள்'}:</strong> {topperLanguage === 'english' ? 'Larger β means more stable complex.' : 'பெரிய β என்பது அதிக நிலைப்புத்தன்மையுள்ள அணைவுச் சேர்மத்தைக் குறிக்கிறது.'}</p>
                                <p><strong>{topperLanguage === 'english' ? 'Isomerism' : 'மாற்றியம்'}:</strong> {topperLanguage === 'english' ? 'Sketch geometrical (cis/trans) and optical isomers to solve problems.' : 'சிக்கல்களைத் தீர்க்க வடிவியல் (சிஸ்/டிரான்ஸ்) மற்றும் ஒளி மாற்றியங்களை வரையவும்.'}</p>
                             </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="bilingual-glossary">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                      <div className="flex items-center gap-3">
                        <Languages className="text-purple-400" />
                        {topperLanguage === 'english' ? 'Bilingual Glossary for Essential Terms' : 'முக்கியமான சொற்களுக்கான இருமொழி சொற்களஞ்சியம்'}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>English Term</TableHead>
                            <TableHead>Tamil Term</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow><TableCell>Atomic radius</TableCell><TableCell>அணு ஆரம் (Anu aaram)</TableCell></TableRow>
                          <TableRow><TableCell>Ionization energy</TableCell><TableCell>அயனியாக்கும் ஆற்றல் (Ayaniyakum aatral)</TableCell></TableRow>
                          <TableRow><TableCell>Electronegativity</TableCell><TableCell>எதிர்மின்னி கவர் ஆற்றல் (Ethirminni kavar aatral)</TableCell></TableRow>
                          <TableRow><TableCell>Nucleophile</TableCell><TableCell>கருக்கவர் பொருள் (Karukkavar porul)</TableCell></TableRow>
                          <TableRow><TableCell>Electrophile</TableCell><TableCell>எலக்ட்ரான் கவர் பொருள் (Electron kavar porul)</TableCell></TableRow>
                          <TableRow><TableCell>Transition state</TableCell><TableCell>நிலைமாற்று நிலை (Nilaimaattru nilai)</TableCell></TableRow>
                          <TableRow><TableCell>Carbocation</TableCell><TableCell>கார்போகேட்டையான் (Carbocation)</TableCell></TableRow>
                          <TableRow><TableCell>Aldol reaction</TableCell><TableCell>ஆல்டால் வினை (Aaldol vinai)</TableCell></TableRow>
                          <TableRow><TableCell>Coordination complex</TableCell><TableCell>அணைவுச் சேர்மம் (Anaivu sermam)</TableCell></TableRow>
                          <TableRow><TableCell>Hybridization</TableCell><TableCell>இனக்கலப்பு (Inakkalappu)</TableCell></TableRow>
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>

                <AccordionItem value="final-strategies">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                         <div className="flex items-center gap-3">
                           <Goal className="text-destructive"/>
                           {topperLanguage === 'english' ? "Universal Strategies & Final Note" : "உலகளாவிய உத்திகள் மற்றும் இறுதிக்குறிப்பு"}
                         </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Card>
                            <CardHeader><CardTitle>{topperLanguage === 'english' ? "NEET Toppers’ Universal Strategies" : "நீட் டாப்பர்களின் உலகளாவிய உத்திகள்"}</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>{topperLanguage === 'english' ? "Active Visualization: Always draw mechanism arrows, energy diagrams, or property trend arrows." : "செயல்வழி காட்சிப்படுத்தல்: எப்போதும் வினைவழிமுறை அம்புக்குறிகள், ஆற்றல் வரைபடங்கள், அல்லது பண்புப் போக்கு அம்புக்குறிகளை வரையவும்."}</li>
                                    <li>{topperLanguage === 'english' ? "Reasoning Over Rote: When presented with a reaction/problem, ask not simply “what is the answer,” but, “what principle is at work, and why?”" : "மனப்பாடத்தை விட பகுத்தறிவு: ஒரு வினை/சிக்கலைக் காணும்போது, “பதில் என்ன” என்று கேட்பதை விட, “என்ன கொள்கை செயல்படுகிறது, மற்றும் ஏன்?” என்று கேளுங்கள்."}</li>
                                    <li>{topperLanguage === 'english' ? "Pattern Recognition: Group similar reactions (e.g., “all nucleophilic additions to carbonyls”) and exceptions." : "வடிவ அங்கீகாரம்: ஒத்த வினைகளை (எ.கா., “கார்போனைல்களுக்கான அனைத்து கருக்கவர் கூடுதல் வினைகள்”) மற்றும் விதிவிலக்குகளைக் குழுவாக்குங்கள்."}</li>
                                    <li>{topperLanguage === 'english' ? "Error Analysis: Spend as much time reviewing why incorrect options in MCQs are wrong." : "பிழை பகுப்பாய்வு: MCQக்களில் தவறான விருப்பங்கள் ஏன் தவறானவை என்பதை மதிப்பாய்வு செய்ய அதிக நேரம் செலவிடுங்கள்."}</li>
                                    <li>{topperLanguage === 'english' ? "Bilingual Clarity: Use native language for initial understanding, and English for final exam writing—minimizes confusion and strengthens memory." : "இருமொழித் தெளிவு: ஆரம்ப புரிதலுக்கு தாய்மொழியைப் பயன்படுத்தவும், மற்றும் இறுதித் தேர்வு எழுதுவதற்கு ஆங்கிலத்தைப் பயன்படுத்தவும்—குழப்பத்தைக் குறைத்து நினைவகத்தை வலுப்படுத்துகிறது."}</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Alert>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>{topperLanguage === 'english' ? "Final Note: Dynamic Learning for NEET Chemistry Mastery" : "இறுதிக் குறிப்பு: நீட் வேதியியல் தேர்ச்சிக்கான ஆற்றல்மிக்க கற்றல்"}</AlertTitle>
                            <AlertDescription>
                               {topperLanguage === 'english' ? "This high-level conceptual toolkit is not a replacement for foundational study, but a compass for mastering the advanced thinking needed to excel in NEET Chemistry. By reviewing the mechanisms, formula logic, trend rationales, and mind maps above, and integrating bilingual terminology for core ideas, aspirants can approach even the trickiest NEET questions with the insight and confidence of a topper. Strategic, analytic learning—not memorization—is the shortcut to both high scores and enduring scientific understanding." : "இந்த உயர் மட்ட கருத்தியல் கருவிப்பெட்டி, அடித்தளப் படிப்பிற்கு மாற்றாகாது, ஆனால் நீட் வேதியியலில் சிறந்து விளங்கத் தேவையான மேம்பட்ட சிந்தனையில் தேர்ச்சி பெறுவதற்கான ஒரு திசைகாட்டியாகும். மேலே உள்ள வினைவழிமுறைகள், சூத்திர தர்க்கம், போக்கு பகுத்தறிவுகள், மற்றும் மன வரைபடங்களை மதிப்பாய்வு செய்வதன் மூலமும், மற்றும் முக்கிய யோசனைகளுக்கு இருமொழி சொற்களஞ்சியத்தை ஒருங்கிணைப்பதன் மூலமும், ஆர்வலர்கள் மிகவும் தந்திரமான நீட் கேள்விகளைக் கூட ஒரு டாப்பரின் நுண்ணறிவு மற்றும் நம்பிக்கையுடன் அணுக முடியும். மூலோபாய, பகுப்பாய்வுக் கற்றல்—மனப்பாடம் அல்ல—உயர் மதிப்பெண்கள் மற்றும் நீடித்த அறிவியல் புரிதல் இரண்டிற்கும் குறுக்குவழியாகும்."}
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
