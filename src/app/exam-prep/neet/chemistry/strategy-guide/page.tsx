
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
  FlaskConical,
  Atom,
  Thermometer,
  Sigma,
  Star,
  BrainCircuit,
  TrendingUp,
  BookOpen,
  ClipboardList,
  Target,
  Goal,
  RefreshCw,
  Network,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { strategyGuideContent } from '@/lib/neet/chemistry/neet-chemistry-strategy-guide';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';


const sectionIcons = {
  physical: <Thermometer className="text-blue-400" />,
  inorganic: <Sigma className="text-green-400" />,
  organic: <Atom className="text-orange-400" />,
};

export default function NeetChemistryStrategyGuidePage() {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  const [deepDiveLanguage, setDeepDiveLanguage] = useState<'english' | 'tamil'>('english');


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
            {/* Introduction Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <TrendingUp className="text-primary" />
                        {language === 'english' ? 'The NEET Chemistry Edge' : 'நீட் வேதியியல் மேன்மை'}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>
                        {language === 'english' 
                         ? 'Success in NEET Chemistry hinges not just on rote memorization, but on deep conceptual understanding and smart, strategic application. Toppers stand out because they master the “why” and “how” behind every equation or trend, not merely the “what.” This report is meticulously crafted to empower aspirants with the structured, principle-driven insights, advanced tactics, and visual concept maps that high achievers leverage for peak performance in NEET Chemistry.' 
                         : 'நீட் வேதியியலில் வெற்றி என்பது மனப்பாடம் செய்வதை மட்டும் சார்ந்தது அல்ல, மாறாக ஆழமான கருத்தியல் புரிதல் மற்றும் புத்திசாலித்தனமான, உத்தியியல் பயன்பாடு ஆகியவற்றைப் பொறுத்தது. உயர் சாதனையாளர்கள் ஒவ்வொரு சமன்பாடு அல்லது போக்கின் பின்னணியில் உள்ள "ஏன்" மற்றும் "எப்படி" என்பதை முழுமையாகப் புரிந்துகொள்வதால் தனித்து நிற்கிறார்கள். இந்த அறிக்கை, நீட் வேதியியலில் உச்ச செயல்திறனுக்காக உயர் சாதனையாளர்கள் பயன்படுத்தும் கட்டமைக்கப்பட்ட, கொள்கை சார்ந்த நுண்ணறிவுகள், மேம்பட்ட தந்திரங்கள் மற்றும் காட்சி கருத்து வரைபடங்களுடன் ஆர்வலர்களுக்கு அதிகாரம் அளிக்க உன்னிப்பாக வடிவமைக்கப்பட்டுள்ளது.'}
                    </p>
                </CardContent>
            </Card>

            {/* Accordion for Main Topics */}
            <Accordion type="multiple" defaultValue={['organic']} className="w-full space-y-4">
                {/* Organic Chemistry */}
                <AccordionItem value="organic">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                        <div className="flex items-center gap-3">
                           <Atom className="text-orange-400"/>
                           {language === 'english' ? 'Organic Chemistry' : 'கரிம வேதியியல்'}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Alert variant="info">
                            <Lightbulb className="w-4 h-4" />
                            <AlertTitle>{language === 'english' ? 'Core Principle: "Why Reactions Occur"' : 'முக்கியக் கொள்கை: "வினைகள் ஏன் நிகழ்கின்றன"'}</AlertTitle>
                            <AlertDescription>
                                {language === 'english' ? 'Every organic reaction is governed by Electronic Effects, Steric Effects, and Reaction Pathways. Master these to predict outcomes, not just memorize them.' : 'ஒவ்வொரு கரிம வினையும் எலக்ட்ரானிக் விளைவுகள், ஸ்டெரிக் விளைவுகள் மற்றும் வினைப் பாதைகளால் நிர்வகிக்கப்படுகிறது. முடிவுகளை மனப்பாடம் செய்யாமல், கணிக்க இவற்றை முழுமையாகப் புரிந்து கொள்ளுங்கள்.'}
                            </AlertDescription>
                        </Alert>
                        {/* SN1 vs SN2 */}
                        <Card>
                            <CardHeader><CardTitle>{language === 'english' ? 'Nucleophilic Substitution: SN1 vs. SN2' : 'கருக்கவர் பதிலீடு: SN1 vs. SN2'}</CardTitle></CardHeader>
                            <CardContent>
                               <MarkdownRenderer>
                                {language === 'english' ? 
                                `**Analysis**: Understanding the underlying electronic logic is central: SN1 is supported by anything that stabilizes carbocations (hyperconjugation, resonance). Steric hindrance is the nemesis of SN2 since both substrate and nucleophile must “fit” together in the transition state.` :
                                `**பகுப்பாய்வு**: அடிப்படை மின்னணு தர்க்கத்தைப் புரிந்துகொள்வது மையமானது: கார்போகேட்டயான்களை உறுதிப்படுத்தும் எதுவும் (ஹைபர்கான்ஜுகேஷன், ரெசனன்ஸ்) SN1 வினைக்கு ஆதரவளிக்கிறது. SN2 வினைக்கு ஸ்டெரிக் தடை ஒரு எதிரி, ஏனெனில் அடி மூலக்கூறு மற்றும் கருக்கவர் இரண்டும் இடைநிலை நிலையில் ஒன்றாகப் பொருந்த வேண்டும்.`
                                }
                               </MarkdownRenderer>
                                <BilingualText english="more carbocation freedom" tamil="அதிக கார்போ சுதந்திரம்" className="italic text-sm text-primary"/> / 
                                <BilingualText english="hindrance" tamil="தடுப்பு" className="italic text-sm text-primary"/>
                            </CardContent>
                        </Card>
                         {/* Other Organic Topics */}
                        <Accordion type="single" collapsible className="w-full space-y-2">
                           <AccordionItem value="elimination">
                                <AccordionTrigger>{language === 'english' ? 'Elimination Reactions (E1 & E2)' : 'நீக்கு வினைகள் (E1 & E2)'}</AccordionTrigger>
                                <AccordionContent className="p-2 space-y-2">
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `**Key Principle**: E2 requires a strong base and anti-periplanar geometry. E1 proceeds via a carbocation and can rearrange. **Zaitsev’s Rule** applies: the most substituted alkene is favored unless a bulky base is used.` :
                                        `**முக்கியக் கொள்கை**: E2 வினைக்கு ஒரு வலுவான காரம் மற்றும் ஆன்டி-பெரிப்ளானர் வடிவியல் தேவை. E1 கார்போகேட்டயான் வழியாகச் சென்று மறுசீரமைப்புக்கு உள்ளாகலாம். **Zaitsev விதி** பொருந்தும்: பருமனான காரத்தைப் பயன்படுத்தாவிட்டால், அதிக பதிலீடு செய்யப்பட்ட அல்கீன் விரும்பப்படுகிறது.`
                                        }
                                    </MarkdownRenderer>
                                    <BilingualText english="most substituted alkene" tamil="ஏதாவது அதிகமாக வாசிகப்பட்ட அல்கீன்" className="italic text-sm text-primary"/>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="eas">
                                <AccordionTrigger>{language === 'english' ? 'Electrophilic Aromatic Substitution (EAS)' : 'எலக்ட்ரான் கவர் அரோமேட்டிக் பதிலீடு'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `**Mechanism**: Benzene π electrons attack an electrophile (E⁺), forming a resonance-stabilized arenium ion, then a proton is removed to restore aromaticity. \n\n- **Activating groups** (-OH, -NH₂) are ortho-para directing. \n- **Deactivating groups** (-NO₂, -COOH) are meta directing.` :
                                        `**வினைமுறை**: பென்சீன் π எலக்ட்ரான்கள் ஒரு எலக்ட்ரான் கவரியை (E⁺) தாக்கி, ஒரு ரெசனன்ஸ்-உறுதிப்படுத்தப்பட்ட அரேனியம் அயனியை உருவாக்குகின்றன, பின்னர் அரோமேட்டிக் தன்மையை மீட்டெடுக்க ஒரு புரோட்டான் அகற்றப்படுகிறது.\n\n- **கிளர்வுறுத்தும் தொகுதிகள்** (-OH, -NH₂) ஆர்த்தோ-பாரா வழிநடத்தும்.\n- **கிளர்வு நீக்கும் தொகுதிகள்** (-NO₂, -COOH) மெட்டா வழிநடத்தும்.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="carbonyl">
                                <AccordionTrigger>{language === 'english' ? 'Carbonyl Chemistry & Aldol Condensation' : 'கார்போனைல் வேதியியல் மற்றும் ஆல்டால் குறுக்கம்'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                    <BilingualText english="Aldol Condensation" tamil="ஆல்டோல் சேர்க்கை" className="font-bold"/>
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `The C=O bond is polarized (δ⁺ on C), making it susceptible to nucleophilic attack. Aldehydes react faster than ketones. For Aldol condensation, a base abstracts an α-hydrogen to form an enolate, which then attacks another carbonyl carbon.` :
                                        `C=O பிணைப்பு முனைவுற்றது (C மீது δ⁺), இது கருக்கவர் தாக்குதலுக்கு உள்ளாகிறது. கீட்டோன்களை விட ஆல்டிஹைடுகள் வேகமாக வினைபுரிகின்றன. ஆல்டால் குறுக்கத்திற்கு, ஒரு காரம் ஒரு α-ஹைட்ரஜனை அகற்றி ஒரு ஈனோலேட்டை உருவாக்குகிறது, இது பின்னர் மற்றொரு கார்போனைல் கார்பனைத் தாக்குகிறது.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>

                {/* Physical Chemistry */}
                <AccordionItem value="physical">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                         <div className="flex items-center gap-3">
                            <Thermometer className="text-blue-400"/>
                            {language === 'english' ? 'Physical Chemistry' : 'இயற்பியல் வேதியியல்'}
                         </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Alert variant="info">
                            <Lightbulb className="w-4 h-4" />
                            <AlertTitle>{language === 'english' ? 'Core Principle: "Connect Equations to Concepts"' : 'முக்கியக் கொள்கை: "சமன்பாடுகளைக் கருத்துகளுடன் இணைக்கவும்"'}</AlertTitle>
                            <AlertDescription>
                                {language === 'english' ? 'Don’t just memorize formulas. Understand the "why" behind them—like how ΔG = ΔH – TΔS balances enthalpy and entropy to predict spontaneity.' : 'சூத்திரங்களை மனப்பாடம் செய்யாதீர்கள். వాటి వెనుక ఉన్న "ఎందుకు" అని అర్థం చేసుకోండి—ΔG = ΔH – TΔS వంటివి ఎంతల్పీ మరియు ఎంట్రోపీని సమతుల్యం చేసి స్పాంటేనిటీని ఎలా అంచనా వేస్తాయో తెలుసుకోండి.'}
                            </AlertDescription>
                        </Alert>
                        <Accordion type="single" collapsible className="w-full space-y-2">
                           <AccordionItem value="thermo">
                                <AccordionTrigger>{language === 'english' ? 'Thermodynamics & Gibbs Free Energy' : 'வெப்ப இயக்கவியல் மற்றும் கிப்ஸ் கட்டிலா ஆற்றல்'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                    <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `Key Equation: **ΔG = ΔH – TΔS**. A negative ΔG indicates a spontaneous process. At equilibrium, ΔG = 0.` :
                                        `முக்கிய சமன்பாடு: **ΔG = ΔH – TΔS**. ஒரு எதிர்மறை ΔG தன்னிச்சையான செயல்முறையைக் குறிக்கிறது. சமநிலையில், ΔG = 0.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="equilibrium">
                                <AccordionTrigger>{language === 'english' ? 'Chemical Equilibrium' : 'வேதியியல் சமநிலை'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                    <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `The equilibrium constant **Kp = Kc(RT)^Δn**. It relates to free energy via **ΔG° = -RT ln K**. If K > 1, the reaction favors products.` :
                                        `சமநிலை மாறிலி **Kp = Kc(RT)^Δn**. ఇది கட்டிலா ஆற்றலுடன் **ΔG° = -RT ln K** ద్వారా సంబంధం కలిగి ఉంటుంది. K > 1 అయితే, வினை விளைபொருட்களுக்குச் சாதகமாக அமையும்.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="electrochem">
                                <AccordionTrigger>{language === 'english' ? 'Electrochemistry & Nernst Equation' : 'மின்னிரசாயனவியல் மற்றும் நெர்ன்ஸ்ட் சமன்பாடு'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `The **Nernst Equation** (E_cell = E°_cell – (0.0591/n) log Q) calculates cell potential under non-standard conditions. A positive E_cell means the reaction is spontaneous.` :
                                        `**நெர்ன்ஸ்ட் சமன்பாடு** (E_cell = E°_cell – (0.0591/n) log Q) தரமற்ற நிலைகளில் செல் மின்னழுத்தத்தைக் கணக்கிடுகிறது. ஒரு நேர்மறை E_cell வினையின் தன்னிச்சையான போக்கைக் குறிக்கிறது.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="kinetics">
                                <AccordionTrigger>{language === 'english' ? 'Chemical Kinetics' : 'வேதி வினைவேகவியல்'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                    <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `Key concepts: **Rate law** (rate = k[A]ˣ[B]ʸ), **order**, and **integrated rate laws**. For first-order reactions, half-life is constant: **t₁/₂ = 0.693/k**.` :
                                        `முக்கியக் கருத்துகள்: **வினைவேக விதி** (வினைவேகம் = k[A]ˣ[B]ʸ), **வினை வகை**, மற்றும் **ஒருங்கிணைந்த வினைவேக விதிகள்**. முதல் வகை வினைகளுக்கு, அரைவாழ்வுக் காலம் மாறிலி: **t₁/₂ = 0.693/k**.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>

                 {/* Inorganic Chemistry */}
                <AccordionItem value="inorganic">
                    <AccordionTrigger className="text-2xl font-headline card-padding-md bg-muted/50 rounded-md hover:bg-muted/80">
                         <div className="flex items-center gap-3">
                           <Sigma className="text-green-400"/>
                           {language === 'english' ? 'Inorganic Chemistry' : 'கனிம வேதியியல்'}
                         </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                        <Alert variant="info">
                            <Lightbulb className="w-4 h-4" />
                            <AlertTitle>{language === 'english' ? 'Core Principle: "Visualize Trends and Structures"' : 'முக்கியக் கொள்கை: "போக்குகள் மற்றும் கட்டமைப்புகளைக் காட்சிப்படுத்துங்கள்"'}</AlertTitle>
                            <AlertDescription>
                                {language === 'english' ? 'Don’t just memorize periodic trends; understand the "why" behind them (nuclear charge vs. shielding). Use VBT and MOT to visualize bonding and predict properties like magnetism.' : 'தனிம வரிசை அட்டவணையின் போக்குகளை மனப்பாடம் செய்யாதீர்கள்; அவற்றின் பின்னணியில் உள்ள "ஏன்" என்பதைப் புரிந்து கொள்ளுங்கள் (அணுக்கரு மின்சுமை மற்றும் மறைத்தல் விளைவு). பிணைப்பைக் காட்சிப்படுத்தவும், காந்தத்தன்மை போன்ற பண்புகளைக் கணிக்கவும் VBT மற்றும் MOT ஐப் பயன்படுத்தவும்.'}
                            </AlertDescription>
                        </Alert>
                         <Accordion type="single" collapsible className="w-full space-y-2">
                           <AccordionItem value="periodic">
                                <AccordionTrigger>{language === 'english' ? 'Periodic Trends' : 'தனிம வரிசைப் பண்புகள்'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                    <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `- **Atomic Radius**: Decreases across a period (→), increases down a group (↓). \n- **Ionization Energy**: Increases across a period (→), decreases down a group (↓). \n- **Electronegativity**: Increases across a period (→), decreases down a group (↓).` :
                                        `- **அணு ஆரம்**: ஒரு வரிசையில் குறைகிறது (→), ஒரு தொகுதியில் அதிகரிக்கிறது (↓). \n- **அயனியாக்கும் ஆற்றல்**: ஒரு வரிசையில் அதிகரிக்கிறது (→), ஒரு தொகுதியில் குறைகிறது (↓). \n- **எலக்ட்ரான் கவர்தன்மை**: ஒரு வரிசையில் அதிகரிக்கிறது (→), ஒரு தொகுதியில் குறைகிறது (↓).`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="bonding">
                                <AccordionTrigger>{language === 'english' ? 'Chemical Bonding (VBT vs. MOT)' : 'வேதியியற் பிணைப்பு (VBT vs. MOT)'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `**VBT** explains geometry via hybridization (sp³, sp², sp). **MOT** explains properties like paramagnetism (e.g., in O₂) and bond order more accurately.` :
                                        `**VBT** இனக்கலப்பு (sp³, sp², sp) மூலம் வடிவவியலை விளக்குகிறது. **MOT** பாரா காந்தத்தன்மை (எ.கா., O₂) மற்றும் பிணைப்புத் தரம் போன்ற பண்புகளை மிகவும் துல்லியமாக விளக்குகிறது.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="coordination">
                                <AccordionTrigger>{language === 'english' ? 'Coordination Chemistry' : 'அணைவுச் சேர்ம வேதியியல்'}</AccordionTrigger>
                                <AccordionContent className="p-2">
                                     <MarkdownRenderer>
                                        {language === 'english' ? 
                                        `Focus on **stability constants (β)** and **isomerism** (geometrical and optical). Use the Effective Atomic Number (EAN) rule to quickly check stability.` :
                                        `**நிலைப்புத்தன்மை மாறிலிகள் (β)** மற்றும் **மாற்றியம்** (வடிவியல் மற்றும் ஒளியியல்) ஆகியவற்றில் கவனம் செலுத்துங்கள். நிலைப்புத்தன்மையை விரைவாகச் சரிபார்க்க பயனுள்ள அணு எண் (EAN) விதியைப் பயன்படுத்தவும்.`
                                        }
                                    </MarkdownRenderer>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </TabsContent>

      </Tabs>
    </div>
  );
}

    