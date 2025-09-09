

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  BrainCircuit,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  XCircle,
  Dna,
  HeartPulse,
  Leaf,
  Wind,
  Atom,
  FlaskConical,
  Sprout,
  AlertTriangle,
  FileText,
  Target,
} from 'lucide-react';
import type { NeetModule } from '@/lib/types';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { BilingualText } from '@/components/exam/bilingual-text';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const takeItEasyBiologyModule: NeetModule = {
  id: 'take-it-easy',
  title: 'Take it Easy: Complex Biology Concepts Simplified',
  chapter: 'Complex Concepts Simplified',
  subject: 'Biology',
  learningObjectives: [
    'Build a strong foundational understanding of the most challenging topics in NEET Biology.',
    'Simplify complex biological processes using relatable analogies and clear explanations.',
    'Master the application of concepts through targeted worked examples.',
    'Learn to identify and avoid common pitfalls in exam questions.',
  ],
  prerequisites: ['Basic high school biology.', 'A willingness to tackle difficult subjects head-on.'],
  conceptOverview:
    "This special module is designed to demystify the seven most challenging and high-yield chapters in the NEET Biology syllabus. We break down each concept into easy-to-understand pieces, provide culturally relevant analogies, and offer practical, exam-oriented tips to help Tamil Nadu students build confidence and achieve mastery.",
  workedExamples: [],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: [],
};


function CheckYourUnderstanding({ question, options, correctIndex, explanation }: { question: string, options: string[], correctIndex: number, explanation: string }) {
    const [selected, setSelected] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="my-4 space-y-3 rounded-lg border bg-background/50 p-4">
            <h4 className="font-bold flex items-center gap-2"><HelpCircle className="text-primary"/> Check Your Understanding</h4>
            <p className="text-sm font-semibold"><MarkdownRenderer>{question}</MarkdownRenderer></p>
            <div className="space-y-2">
                {options.map((option, index) => (
                    <Button
                        key={index}
                        variant={
                           submitted
                            ? index === correctIndex ? 'success' : (selected === index ? 'destructive' : 'outline')
                            : selected === index ? 'secondary' : 'outline'
                        }
                        className="w-full h-auto justify-start text-left"
                        onClick={() => !submitted && setSelected(index)}
                    >
                        {option}
                    </Button>
                ))}
            </div>
            {!submitted && <Button onClick={() => setSubmitted(true)} disabled={selected === null}>Check Answer</Button>}
            {submitted && (
                 <Alert variant={selected === correctIndex ? 'success' : 'destructive'}>
                    <AlertTitle>{selected === correctIndex ? 'Correct!' : 'Incorrect'}</AlertTitle>
                    <AlertDescription>
                        {explanation}
                    </AlertDescription>
                 </Alert>
            )}
        </div>
    )
}

export function TakeItEasyContent() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      
      {/* 1. Cell Structure and Function */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold">1. Cell Structure and Function</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          <p className="text-muted-foreground">Analogy: The Cell is like a Kovil (Temple Complex). Each part has a specific, vital role, just like the different sannidhis and structures in a temple.</p>
          <div className="prose dark:prose-invert max-w-none">
            <ul>
              <li><strong>Cell Wall (கோவில் சுவர் - Temple Wall):</strong> Provides protection and structure. Found in plants, not animals.</li>
              <li><strong>Cell Membrane (வாயில் - Entrance Gate):</strong> Controls what enters and leaves the cell (temple). Selectively permeable.</li>
              <li><strong>Nucleus (மூலவர் சந்நிதி - Main Sanctum):</strong> The most important part, contains the genetic material (DNA), like the main deity. Controls all cell activities.</li>
              <li><strong>Mitochondria (பிரசாதம் தயாரிக்கும் மடப்பள்ளி - Temple Kitchen):</strong> The powerhouse. It generates energy (ATP) for the cell, just as the kitchen prepares prasadham (food offering) that gives energy to devotees.</li>
              <li><strong>Ribosomes (மந்திரம் ஓதுபவர்கள் - Chanters):</strong> They synthesize proteins based on instructions from the nucleus, like priests chanting mantras based on the holy texts.</li>
              <li><strong>Endoplasmic Reticulum (பிரகாரம் - Temple Corridor):</strong> A network for transporting materials within the cell, like the corridors that connect different parts of the temple.</li>
              <li><strong>Golgi Apparatus (பொருட்கள் சேமிக்கும் அறை - Storage Room):</strong> Packages and modifies proteins and lipids for transport, like a storage room where offerings are prepared and packed.</li>
            </ul>
          </div>
          <CheckYourUnderstanding
            question="Which organelle is known as the 'Powerhouse of the Cell' and is analogous to the temple kitchen (மடப்பள்ளி)?"
            options={["Nucleus", "Ribosome", "Mitochondria", "Cell Wall"]}
            correctIndex={2}
            explanation="Mitochondria are responsible for cellular respiration and energy (ATP) production, making them the powerhouse."
          />
           <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><FileText className="text-primary"/>Key Diagrams &amp; Concepts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Fluid Mosaic Model:</strong> Visualize the cell membrane as a sea of lipids with proteins floating in it. It's flexible, not rigid.</p>
                   <p><strong>Prokaryotic vs. Eukaryotic Cell:</strong> The key difference is the **absence of a true nucleus** and membrane-bound organelles in prokaryotes (like bacteria).</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Confusing the functions of Smooth ER (lipid synthesis) and Rough ER (protein synthesis, due to ribosomes).</p>
                   <p><strong>Tip:</strong> Questions often test the "cell within a cell" concept (endosymbiotic theory) for mitochondria and chloroplasts. Remember they have their own DNA and ribosomes.</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

      {/* 2. Biomolecules */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-bold">2. Biomolecules</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
            <p className="text-muted-foreground">Analogy: Biomolecules are Life's Building Blocks (வாழ்வின் கட்டுமானப் பொருட்கள்), like bricks, cement, wires, and plans used to build a house.</p>
            <div className="prose dark:prose-invert max-w-none">
                <ul>
                    <li><strong>Carbohydrates (செங்கல்கள் - Bricks):</strong> Main source of energy. Simple sugars (glucose) are single bricks, while complex carbs (starch) are walls made of many bricks.</li>
                    <li><strong>Lipids (நீர் புகா பூச்சு - Waterproofing):</strong> Store energy for the long term and form cell membranes. Think of them as the waterproof coating and insulation for the house.</li>
                    <li><strong>Proteins (சிமெண்ட் மற்றும் தூண்கள் - Cement and Pillars):</strong> The workhorses. They provide structure (like pillars) and carry out functions as enzymes (like workers). Made of amino acids.</li>
                    <li><strong>Nucleic Acids (கட்டுமானத் திட்டம் - Blueprint):</strong> DNA and RNA. They are the master plan or blueprint for the house, containing all the instructions to build and run it.</li>
                </ul>
            </div>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><FileText className="text-primary"/>Key Diagrams &amp; Concepts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Amino Acid Structure:</strong> Know the basic structure: a central carbon, an amino group (-NH₂), a carboxyl group (-COOH), a hydrogen atom, and a variable 'R' group.</p>
                   <p><strong>Enzyme Action (Lock and Key):</strong> Visualize an enzyme as a lock and the substrate as the specific key that fits into it to initiate a reaction.</p>
                   `{{DNA_MODEL_VIEWER}}`
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Confusing the types of bonds: Peptide bonds (proteins), Glycosidic bonds (carbohydrates), and Phosphodiester bonds (nucleic acids). Make flashcards for these!</p>
                   <p><strong>Tip:</strong> Questions on protein structure (primary, secondary, tertiary, quaternary) are very common. Understand what each level represents.</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

      {/* 3. Plant Physiology */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-bold">3. Plant Physiology</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          <p className="text-muted-foreground">Analogy: A plant is like a Solar-Powered Kitchen (சூரிய சக்தியில் இயங்கும் சமையலறை).</p>
          <div className="prose dark:prose-invert max-w-none">
            <ul>
              <li><strong>Photosynthesis (ஒளிச்சேர்க்கை - Cooking):</strong> The process of making food (glucose) using sunlight, water, and CO₂. Occurs in the chloroplasts (the kitchen stove).</li>
              <li><strong>Respiration (சுவாசம் - Using the food):</strong> Breaking down the prepared food (glucose) to release energy for the plant's activities. This happens all the time, day and night.</li>
              <li><strong>Transpiration (நீர் ஆவியாதல் - Evaporation):</strong> The loss of water from leaves, which creates a "pull" to draw more water up from the roots, like a straw.</li>
              <li><strong>Plant Hormones (சமையல் குறிப்புகள் - Recipes):</strong> Chemicals like Auxins and Gibberellins that regulate growth, telling the plant when to grow taller, when to flower, etc., like different recipes for different occasions.</li>
            </ul>
          </div>
          <CheckYourUnderstanding
            question="What is the primary purpose of Respiration (சுவாசம்) in plants?"
            options={["To create sunlight", "To release energy from glucose", "To absorb water", "To make food"]}
            correctIndex={1}
            explanation="Photosynthesis MAKES the food (glucose). Respiration BREAKS DOWN that food to release energy (ATP) for the plant to use."
          />
           <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><FileText className="text-primary"/>Key Formulas &amp; Diagrams</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Photosynthesis Equation:</strong> `6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`</p>
                   <p><strong>Respiration Equation:</strong> `C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)`</p>
                   <p><strong>Key Diagram:</strong> Structure of a chloroplast (thylakoids, grana, stroma).</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Thinking plants only respire at night. Respiration is a 24/7 process for survival, while photosynthesis only happens in the presence of light.</p>
                   <p><strong>Tip:</strong> Questions comparing C3, C4, and CAM pathways are very common. Focus on understanding their differences in terms of CO₂ fixation and water efficiency.</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

      {/* 4. Human Physiology */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-bold">4. Human Physiology</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          <p className="text-muted-foreground">Focus on the Nervous System: The body's wiring and control center.</p>
           <div className="prose dark:prose-invert max-w-none">
            <ul>
              <li><strong>Neuron (நரம்பு செல்):</strong> The basic wire. It transmits electrical signals (nerve impulses).</li>
              <li><strong>Synapse (நரம்பிணைப்பு):</strong> A tiny gap between two neurons where the signal is passed from one to the next using chemicals called neurotransmitters.</li>
              <li><strong>Action Potential (செயல் மின்னழுத்தம்):</strong> The electrical signal itself. It's an "all-or-nothing" event, like firing a gun. It's created by the rapid movement of Sodium (Na⁺) and Potassium (K⁺) ions across the neuron's membrane.</li>
            </ul>
            {{NEURON_FIRING_ANIMATION}}
          </div>
            <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><BrainCircuit className="text-primary"/>Worked Example: Reflex Arc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Problem:</strong> Trace the path of a reflex arc when you touch a hot object.</p>
                   <ol class="list-decimal list-inside space-y-1">
                       <li><strong>Stimulus:</strong> Hot object.</li>
                       <li><strong>Receptor:</strong> Pain receptors in the skin detect the heat.</li>
                       <li><strong>Sensory Neuron:</strong> Carries the signal from the hand to the spinal cord.</li>
                       <li><strong>Interneuron:</strong> In the spinal cord, it processes the signal and immediately passes it to a motor neuron (the brain is bypassed for speed).</li>
                       <li><strong>Motor Neuron:</strong> Carries the "contract" signal to the muscle.</li>
                       <li><strong>Effector:</strong> The muscle in your arm contracts, pulling your hand away.</li>
                   </ol>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Confusing the roles of different parts of the brain. Make a simple table for the functions of the Cerebrum, Cerebellum, Medulla, etc.</p>
                   <p><strong>Tip:</strong> Questions on hormonal regulation (endocrine system) are high-yield. Focus on the hormones of the pituitary gland, pancreas (insulin/glucagon), and thyroid.</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

      {/* 5. Reproduction */}
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-bold">5. Reproduction</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
            <p className="text-muted-foreground">Focus on Gametogenesis (இனப்பெருக்க செல் உருவாக்கம்) - The making of sperm and eggs.</p>
             <div className="prose dark:prose-invert max-w-none">
                <ul>
                    <li><strong>Spermatogenesis (விந்தணு உருவாக்கம்):</strong> Occurs in males. One primary cell (spermatogonium) undergoes meiosis to produce **four** functional sperm cells. It's a continuous process starting from puberty.</li>
                    <li><strong>Oogenesis (அண்டಾಣு உருவாக்கம்):</strong> Occurs in females. One primary cell (oogonium) undergoes meiosis, but the cytoplasm divides unequally, resulting in **one** large, functional egg (ovum) and smaller, non-functional polar bodies. This process begins before birth and pauses until puberty.</li>
                </ul>
            </div>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><FileText className="text-primary"/>Key Diagrams &amp; Concepts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Menstrual Cycle Diagram:</strong> This is a very high-yield topic. Understand the graph showing the levels of four key hormones (FSH, LH, Estrogen, Progesterone) and how they relate to the uterine cycle.</p>
                   <p><strong>Flower Structure:</strong> Be able to label the parts of a typical flower (Stamen, Anther, Pistil, Stigma, Ovary) and know their functions in pollination.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Confusing gamete formation. Remember: Spermatogenesis = 4 sperm; Oogenesis = 1 egg + polar bodies.</p>
                   <p><strong>Tip:</strong> Hormonal control is key! Questions frequently test which hormone triggers ovulation (LH surge) or maintains pregnancy (Progesterone).</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

      {/* 6. Genetics and Evolution */}
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-bold">6. Genetics and Evolution</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          <p className="text-muted-foreground">Analogy: Genetics is a Cookbook (சமையல் புத்தகம்). DNA is the book, Genes are individual recipes, and Proteins are the finished dishes.</p>
          <div className="prose dark:prose-invert max-w-none">
            <ul>
              <li><strong>DNA (மரபணு):</strong> The master cookbook containing all recipes.</li>
              <li><strong>Gene (மரபணு):</strong> A single recipe for one specific dish (e.g., the recipe for eye color).</li>
              <li><strong>Allele (อัลலீல்):</strong> A variation of a recipe. The recipe for eye color might have variations for blue, brown, or green eyes.</li>
              <li><strong>Dominant vs. Recessive (ஓங்கு vs. ஒடுங்கு):</strong> A dominant allele is like a strong flavor that always comes through (e.g., coffee). A recessive allele is a mild flavor that is only noticeable if the strong one isn't there (e.g., milk).</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><BrainCircuit className="text-primary"/>Worked Example: Monohybrid Cross</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm"><strong>Problem:</strong> A tall pea plant (TT) is crossed with a dwarf pea plant (tt). What is the phenotypic ratio of the F2 generation?</p>
                <ol class="list-decimal list-inside space-y-1 text-sm mt-2">
                    <li><strong>Parental Generation (P):</strong> Genotypes are TT (tall) and tt (dwarf).</li>
                    <li><strong>Gametes from P:</strong> The TT plant only produces T gametes. The tt plant only produces t gametes.</li>
                    <li><strong>First Filial Generation (F1):</strong> All offspring will have the genotype Tt. Since T is dominant, all F1 plants will be tall.</li>
                    <li><strong>F1 Self-Cross:</strong> We cross Tt x Tt.</li>
                    <li><strong>Punnett Square for F2:</strong>
                        <div class="grid grid-cols-3 gap-1 my-2 font-mono text-center">
                            <div class="p-2"></div><div class="p-2 bg-muted rounded">T</div><div class="p-2 bg-muted rounded">t</div>
                            <div class="p-2 bg-muted rounded">T</div><div class="p-2 bg-secondary rounded">TT</div><div class="p-2 bg-secondary rounded">Tt</div>
                            <div class="p-2 bg-muted rounded">t</div><div class="p-2 bg-secondary rounded">Tt</div><div class="p-2 bg-secondary rounded">tt</div>
                        </div>
                    </li>
                    <li><strong>Analyze F2 Genotypes:</strong> We get 1 TT, 2 Tt, and 1 tt. (1:2:1 genotypic ratio).</li>
                    <li><strong>Analyze F2 Phenotypes:</strong> TT and Tt plants are tall. tt plants are dwarf. So, we have 3 tall plants and 1 dwarf plant.</li>
                    <li><strong>Answer:</strong> The phenotypic ratio is 3 (Tall) : 1 (Dwarf).</li>
                </ol>
            </CardContent>
          </Card>
          <CheckYourUnderstanding
            question="In a monohybrid cross between two heterozygous (Tt) individuals, what is the genotypic ratio of the offspring?"
            options={["1:1", "3:1", "1:2:1", "9:3:3:1"]}
            correctIndex={2}
            explanation="The cross Tt x Tt produces TT, Tt, Tt, and tt offspring, which gives a genotypic ratio of 1 (TT) : 2 (Tt) : 1 (tt)."
          />
        </AccordionContent>
      </AccordionItem>

      {/* 7. Ecology and Environment */}
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-lg font-bold">7. Ecology and Environment</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
           <p className="text-muted-foreground">Focus on Ecological Pyramids (சூழலியல் கூம்புகள்).</p>
           <div className="prose dark:prose-invert max-w-none">
                <ul>
                    <li><strong>Pyramid of Numbers:</strong> Shows the total number of individual organisms at each trophic level. Usually upright, but can be inverted (e.g., one large tree supporting thousands of insects).</li>
                    <li><strong>Pyramid of Biomass:</strong> Represents the total dry weight (biomass) of organisms at each level. Also usually upright.</li>
                    <li><strong>Pyramid of Energy:</strong> ALWAYS upright. It shows the flow of energy from one trophic level to the next. Only about 10% of energy is transferred from one level to the next (the 10% law). The rest is lost as heat. This is the most fundamental pyramid.</li>
                </ul>
                {{ECOLOGY_FOOD_WEB_DIAGRAM}}
           </div>
           <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><BrainCircuit className="text-primary"/>Worked Example: Energy Transfer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Problem:</strong> If the producers in an ecosystem have 10,000 Joules of energy, how much energy will be available to the tertiary consumers?</p>
                   <ol class="list-decimal list-inside space-y-1">
                       <li><strong>Producers:</strong> 10,000 J</li>
                       <li><strong>Primary Consumers (Herbivores):</strong> They get 10% of the producer's energy. So, 10% of 10,000 J = 1,000 J.</li>
                       <li><strong>Secondary Consumers (Carnivores):</strong> They get 10% of the primary consumer's energy. So, 10% of 1,000 J = 100 J.</li>
                       <li><strong>Tertiary Consumers (Top Carnivores):</strong> They get 10% of the secondary consumer's energy. So, 10% of 100 J = 10 J.</li>
                       <li><strong>Answer:</strong> Only 10 Joules will be available to the tertiary consumers.</li>
                   </ol>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="text-yellow-500"/>NEET Tips &amp; Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p><strong>Pitfall:</strong> Forgetting that the Pyramid of Energy is *always* upright. The other two can sometimes be inverted or spindle-shaped.</p>
                   <p><strong>Tip:</strong> Understand the difference between primary and secondary succession. Primary starts on bare rock (no soil), while secondary starts where an existing ecosystem was disturbed (soil is present).</p>
                </CardContent>
            </Card>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  );
}

export default takeItEasyBiologyModule;
