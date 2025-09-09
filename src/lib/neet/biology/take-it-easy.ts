
import type { NeetModule } from '@/lib/types';

export const takeItEasyBiologyModule: NeetModule = {
  id: 'take-it-easy',
  title: 'Take it Easy: Complex Biology Topics Simplified',
  chapter: 'Take it Easy',
  subject: 'Biology',
  learningObjectives: [
    "To build a strong foundational understanding of the most challenging topics in the NEET biology syllabus.",
    "To use simplified analogies and real-world examples to demystify complex biological processes.",
    "To provide targeted practice and problem-solving strategies for high-yield concepts.",
    "To bridge the gap between Tamil-medium education and English-based NEET questions."
  ],
  prerequisites: [
    'Basic knowledge of high school level science.',
    'A willingness to approach difficult topics with a fresh perspective.'
  ],
  conceptOverview: `This special 'Take it Easy' module is designed to tackle the seven most challenging chapters for NEET aspirants from the Tamil Nadu government school syllabus. We will break down each concept into simple, understandable parts, using analogies that connect with your daily life and culture. Our goal is to build your confidence and provide a solid foundation for mastery.`,
  conceptNotes: [
    {
      heading: {
        english: "1. The Cell: A Living Kovil (Temple Complex)",
        tamil: "1. செல்: ஒரு உயிருள்ள கோவில் வளாகம்"
      },
      content: [
        `Instead of a factory, let's imagine a cell as a bustling **Kovil (கோவில்)**, a temple complex. This analogy connects with our culture and helps visualize the functions.
- **Cell Wall (செல் சுவர்):** The strong outer wall of the temple, providing structure and protection (found in plant cells).
- **Cell Membrane (செல் சவ்வு):** The main entrance gate (*Gopuram* gate) that controls who and what comes in and out.
- **Nucleus (உட்கரு):** The *Moolavar Sannidhi* (main sanctum) containing the main deity (DNA). It holds all the sacred instructions and controls everything.
- **Mitochondria (மைட்டோகாண்ட்ரியா):** The temple's *Madapalli* (kitchen) where food offerings (glucose) are converted into energy (ATP) for all temple activities. It's the powerhouse.
- **Ribosomes (ரிபோசோம்கள்):** The priests (*Archakars*) who read the instructions from the nucleus (DNA) to perform rituals (build proteins).
- **Endoplasmic Reticulum (ER):** The corridors and pathways that transport priests and materials throughout the temple.
- **Golgi Apparatus (கோல்கை உறுப்புகள்):** The place where offerings (*Prasadam*) are packaged and distributed to devotees. It processes and packages proteins.
- **Vacuoles (வெற்றிடங்கள்):** The temple water tank (*Theppakulam*) that stores water and other essential materials.`
      ]
    },
    {
      heading: {
        english: "2. Plant Physiology: The Plant's Solar-Powered Kitchen",
        tamil: "2. தாவர செயலியல்: தாவரத்தின் சூரியசக்தி சமையலறை"
      },
      content: [
        `**Photosynthesis (ஒளிச்சேர்க்கை):** Think of it as a plant making its own food in a solar-powered kitchen.
- **Ingredients (மூலப்பொருட்கள்):** Carbon Dioxide (from air), Water (from soil), and Sunlight.
- **Kitchen (சமையலறை):** The Chloroplast (பசுங்கணிகம்) in the leaves.
- **Final Dish (இறுதி உணவு):** Glucose (Sugar/Energy) and Oxygen (as a byproduct).
- **Key Takeaway:** The plant uses light energy to convert simple inorganic molecules (CO₂, H₂O) into complex organic food (glucose). This is the foundation of almost all life on Earth.

**Check Your Understanding:**
{{QUIZ:{"question": "In photosynthesis, what is the primary role of chlorophyll (பச்சையம்)?", "options": ["To absorb water", "To absorb sunlight", "To produce Carbon Dioxide", "To store glucose"], "answer": "To absorb sunlight", "explanation": "Chlorophyll is the green pigment that captures light energy, acting like a solar panel for the plant's kitchen."}}}
`
      ]
    },
    {
      heading: {
        english: "3. Genetics & Evolution: Life's Cookbook",
        tamil: "3. மரபியல் மற்றும் பரிணாமம்: வாழ்வின் சமையல் புத்தகம்"
      },
      content: [
        `**DNA (டிஎன்ஏ):** It's the master cookbook containing all the recipes (genes) to build and run an entire organism.
- **Gene (ஜீன்):** A single recipe for one specific protein (e.g., the recipe for eye color or hair type).
- **Allele (அல்லீல்):** A variation of a recipe. For example, the gene for flower color could have a purple allele and a white allele.
- **Dominant vs. Recessive (ஓங்கு மற்றும் ஒடுங்கு பண்பு):** A dominant allele is like a strong, flavorful ingredient that always shows up. A recessive allele is a subtle flavor that only appears if the dominant one is absent.`
      ]
    },
    {
      heading: {
        english: "4. Human Physiology: The Body's Interconnected Systems",
        tamil: "4. மனித உடலியல்: உடலின் ஒன்றோடொன்று இணைக்கப்பட்ட அமைப்புகள்"
      },
      content: [
        `**Nervous System (நரம்பு மண்டலம்):** The body's electrical wiring and command center. A nerve impulse is like an electrical signal traveling down a wire.
{{NEURON_FIRING_ANIMATION}}

**Digestive System (செரிமான மண்டலம்):** A disassembly line that breaks down large food molecules (like a complex machine) into tiny parts (nuts and bolts) that the body can absorb and use.`
      ]
    },
    {
      heading: {
        english: "5. Ecology & Environment: The Web of Life",
        tamil: "5. சூழலியல் மற்றும் சுற்றுச்சூழல்: வாழ்வின் வலை"
      },
      content: [
        `**Ecosystem (சூழல் மண்டலம்):** A community of living organisms (like a village) interacting with their non-living environment (the land, water, and air).
- **Food Web (உணவு வலை):** Not a simple chain, but a complex web showing 'who eats whom'. A change in one population (e.g., fewer grasshoppers) can affect many others (frogs, birds, snakes).
{{FOOD_WEB_DIAGRAM}}`
      ]
    },
    {
      heading: {
        english: "6. Biomolecules: Life's Building Blocks",
        tamil: "6. உயிர் மூலக்கூறுகள்: வாழ்வின் கட்டமைப்புப் பொருட்கள்"
      },
      content: [
        `Think of biomolecules as the different types of bricks and materials needed to build a house:
- **Carbohydrates (கார்போஹைட்ரேட்டுகள்):** The quick energy source. Like the electricity or fuel used by the builders.
- **Proteins (புரதங்கள்):** The actual bricks, beams, and workers. They form the structure and do most of the work in the cell.
- **Lipids (கொழுப்புகள்):** The waterproofing, insulation, and long-term energy storage. Like the paint, insulation, and backup generator.
- **Nucleic Acids (நியூக்ளிக் அமிலங்கள்):** The blueprints and architectural plans (DNA and RNA) that direct the construction.
{{ATOM_MODEL_VIEWER}}
`
      ]
    },
    {
      heading: {
        english: "7. Reproduction: The Continuation of Life",
        tamil: "7. இனப்பெருக்கம்: வாழ்வின் தொடர்ச்சி"
      },
      content: [
        `**Gametogenesis (கேметоஜெனிசிஸ்):** The process of creating specialized reproductive cells (gametes). Think of it as preparing two half-sets of blueprints (sperm and egg) that can combine to create a new, complete blueprint.
- **Key Concept:** Meiosis (குன்றல் பகுப்பு) is the special cell division that halves the chromosome number to create these gametes.
**Check Your Understanding:**
{{QUIZ:{"question": "The process of meiosis results in:", "options": ["Two diploid cells", "Four diploid cells", "Two haploid cells", "Four haploid cells"], "answer": "Four haploid cells", "explanation": "Meiosis is a reductional division that produces four genetically unique haploid cells from one diploid cell, ensuring the correct chromosome number after fertilization."}}}
`
      ]
    }
  ],
  workedExamples: [
    {
      title: "Monohybrid Cross in Genetics",
      titleTamil: "மரபியலில் ஒரு பண்பு கலப்பு",
      difficulty: 'Medium',
      problem: "In pea plants, tall (T) is dominant to dwarf (t). If a heterozygous tall plant (Tt) is crossed with a dwarf plant (tt), what is the probability of the offspring being tall?",
      problemTamil: "பட்டாணி செடிகளில், நெட்டை (T) குட்டைக்கு (t) ஓங்கு பண்பு. ஒரு கலப்பின நெட்டை செடியை (Tt) ஒரு குட்டை செடியுடன் (tt) கலப்பு செய்தால், சந்ததிகள் நெட்டையாக இருப்பதற்கான நிகழ்தகவு என்ன?",
      solutionSteps: [
        {
          step: 1,
          explanation: "First, identify the genotypes of the parents.",
          explanationTamil: "முதலில், பெற்றோர்களின் மரபணு வகைகளை அடையாளம் காணவும்.",
          calculation: "Parent 1: Tt (Heterozygous Tall)\nParent 2: tt (Dwarf)"
        },
        {
          step: 2,
          explanation: "Next, determine the possible gametes (alleles) each parent can produce. Parent 1 can produce 'T' and 't' gametes. Parent 2 can only produce 't' gametes.",
          explanationTamil: "அடுத்து, ஒவ்வொரு பெற்றோரும் உருவாக்கக்கூடிய கேமீட்களை (அல்லீல்கள்) தீர்மானிக்கவும். பெற்றோர் 1 'T' மற்றும் 't' கேமீட்களை உருவாக்க முடியும். பெற்றோர் 2 't' கேமீட்களை மட்டுமே உருவாக்க முடியும்."
        },
        {
          step: 3,
          explanation: "Set up a Punnett square to visualize the cross.",
          explanationTamil: "கலப்பை காட்சிப்படுத்த ஒரு புன்னட் கட்டத்தை அமைக்கவும்.",
          calculation: "      t      t\n   +------|------+\nT  |  Tt  |  Tt  |\n   +------|------+\nt  |  tt  |  tt  |"
        },
        {
          step: 4,
          explanation: "Analyze the genotypes of the offspring from the Punnett square. We have two 'Tt' and two 'tt' genotypes.",
          explanationTamil: "புன்னட் கட்டத்திலிருந்து சந்ததிகளின் மரபணு வகைகளை பகுப்பாய்வு செய்யவும். நம்மிடம் இரண்டு 'Tt' மற்றும் இரண்டு 'tt' மரபணு வகைகள் உள்ளன."
        },
        {
          step: 5,
          explanation: "Determine the phenotype (physical appearance) for each genotype. 'Tt' is Tall (since T is dominant). 'tt' is dwarf. Therefore, we have 2 tall plants and 2 dwarf plants.",
          explanationTamil: "ஒவ்வொரு மரபணு வகைக்கும் தோற்றவகை (உருவத் தோற்றம்) தீர்மானிக்கவும். 'Tt' நெட்டையாகும் ('T' ஓங்கு பண்பு என்பதால்). 'tt' குட்டையாகும். எனவே, நம்மிடம் 2 நெட்டை செடிகள் மற்றும் 2 குட்டை செடிகள் உள்ளன."
        },
        {
          step: 6,
          explanation: "Calculate the probability. Out of 4 possible offspring, 2 are tall. The probability is 2/4, which simplifies to 1/2 or 50%.",
          explanationTamil: "நிகழ்தகவைக் கணக்கிடவும். 4 சாத்தியமான சந்ததிகளில், 2 நெட்டையாக உள்ளன. நிகழ்தகவு 2/4, இது 1/2 அல்லது 50% ஆக எளிமைப்படுத்தப்படுகிறது."
        }
      ],
      answer: "The probability of the offspring being tall is 50%.",
      neetHack: "For a test cross (a cross between a heterozygous individual and a homozygous recessive individual), the phenotypic ratio is always 1:1. So, you can instantly know the probability is 50% for each trait without drawing the full Punnett square, saving time in the exam.",
      neetHackTamil: "ஒரு சோதனை கலப்பிற்கு (ஒரு கலப்பின தனிநபர் மற்றும் ஒரு ஒடுங்கு பண்பு தனிநபருக்கு இடையேயான கலப்பு), தோற்றவகை விகிதம் எப்போதும் 1:1 ஆக இருக்கும். எனவே, முழு புன்னட் கட்டத்தை வரையாமலேயே ஒவ்வொரு பண்பிற்கும் 50% நிகழ்தகவு என்பதை நீங்கள் உடனடியாக அறிந்து கொள்ளலாம், இது தேர்வில் நேரத்தை மிச்சப்படுத்தும்."
    }
  ],
  mcqs: [], // Kept empty as this is a conceptual module
  assertionReasons: [],
  matchTheColumns: []
};
