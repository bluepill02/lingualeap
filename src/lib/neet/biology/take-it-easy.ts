
      
import type { NeetModule } from '@/lib/types';

export const takeItEasyBiologyModule: NeetModule = {
    id: 'neet-biology-take-it-easy',
    title: 'Biology - "Take it Easy" Module (கடினமான பகுதிகள் எளிதாக)',
    chapter: 'Take it Easy Module',
    subject: 'Biology',
    learningObjectives: [
        "Simplify the most challenging concepts in NEET Biology.",
        "Provide culturally relevant analogies to make complex topics relatable.",
        "Build a strong conceptual foundation in difficult areas to boost confidence and problem-solving speed."
    ],
    prerequisites: [
        "Basic understanding of Class 11 and 12 Biology concepts.",
    ],
    conceptOverview: "This special module is designed to tackle the seven most challenging units for Tamil Nadu students. Instead of a linear progression, we will use simplified language, relatable analogies from our culture, and targeted examples to demystify complex topics. The goal is to build confidence and provide a strong foundation, making difficult concepts feel easy and intuitive.",
    
    conceptNotes: [
        {
            heading: { english: '1. Cell: The Unit of Life (Cell as a Kovil)', tamil: '1. செல்: வாழ்வின் அலகு (ஒரு கோவில் வளாகமாக செல்)' },
            content: [
                {
                    english: "Don't think of a cell as a boring diagram. Imagine it as a bustling **Kovil (Temple Complex)**, a concept very familiar to us.",
                    tamil: "செல்லை ஒரு சலிப்பான வரைபடமாக நினைக்க வேண்டாம். அதை ஒரு பரபரப்பான **கோவில் வளாகமாக** கற்பனை செய்து பாருங்கள்."
                },
                {
                    english: `*   **Cell Wall/Membrane (செல் சுவர்/சவ்வு):** The temple's outer wall (மதில் சுவர்), protecting everything inside and controlling who comes and goes.
*   **Nucleus (உட்கரு):** The Moolavar Sannidhi (மூலவர் சந்நிதி) or main sanctum. It's the most important, protected part containing the cell's 'divine instructions' (DNA).
*   **Mitochondria (மைட்டோகாண்ட்ரியா):** The temple's 'Madapalli' (மடப்பள்ளி) or kitchen, where food is converted into energy (பிரசாதம்) for all temple activities. It's the powerhouse.
*   **Ribosomes (ரிபோசோம்கள்):** The 'Sthapathis' (சிற்பிகள்) or temple sculptors, who read the instructions from the nucleus to build essential structures (proteins).
*   **Endoplasmic Reticulum (எண்டோபிளாச வலைப்பின்னல்):** The temple's inner corridors (பிரகாரங்கள்), used for transporting materials and constructing things.`,
                    tamil: `*   **செல் சுவர்/சவ்வு:** கோவிலின் வெளிப்புற மதில் சுவர், உள்ளே உள்ள அனைத்தையும் பாதுகாத்து, யார் வருகிறார்கள், போகிறார்கள் என்பதைக் கட்டுப்படுத்துகிறது.
*   **உட்கரு:** மூலவர் சந்நிதி. இது செல்லின் 'தெய்வீக அறிவுறுத்தல்களை' (DNA) கொண்ட மிக முக்கியமான, பாதுகாக்கப்பட்ட பகுதி.
*   **மைட்டோகாண்ட்ரியா:** கோவிலின் 'மடப்பள்ளி', இங்கு அனைத்து கோவில் நடவடிக்கைகளுக்கும் உணவு ஆற்றலாக (பிரசாதம்) மாற்றப்படுகிறது. இதுவே ஆற்றல் மையம்.
*   **ரிபோசோம்கள்:** 'சிற்பிகள்', உட்கருவிலிருந்து வரும் அறிவுறுத்தல்களைப் படித்து அத்தியாவசிய கட்டமைப்புகளை (புரதங்கள்) உருவாக்குகிறார்கள்.
*   **எண்டோபிளாச வலைப்பின்னல்:** கோவிலின் உள் பிரகாரங்கள், பொருட்களைக் கொண்டு செல்லவும், பொருட்களை உருவாக்கவும் பயன்படுகிறது.`
                },
                 {
                    english: `{{CHECK_YOUR_UNDERSTANDING:
"question": "Which part of the 'Cell as a Kovil' analogy represents the powerhouse that generates energy?",
"options": ["Moolavar Sannidhi (Nucleus)", "Madapalli (Mitochondria)", "Praharam (ER)", "Mathil Suvar (Cell Wall)"],
"answer": "Madapalli (Mitochondria)"
}}`
                }
            ]
        },
        {
            heading: { english: '2. Plant Physiology (A Solar-Powered Kitchen)', tamil: '2. தாவர செயலியல் (ஒரு சூரிய சக்தி சமையலறை)' },
            content: [
                {
                    english: `**Photosynthesis (ஒளிச்சேர்க்கை):** It's not just a formula. It's a plant's solar-powered kitchen.
*   **Inputs:** Sunlight (the stove's energy), Water (from the ground via xylem pipelines), Carbon Dioxide (from the air).
*   **Process:** Happens in the chloroplasts (the kitchen). Light reactions are like turning on the stove and gathering energy. The Calvin cycle is the actual cooking process where sugar (food) is made.
*   **Output:** Glucose (the food) and Oxygen (the 'aroma' or byproduct).`,
                    tamil: `**ஒளிச்சேர்க்கை:** இது ஒரு சூத்திரம் மட்டுமல்ல. இது தாவரத்தின் சூரிய சக்தி சமையலறை.
*   **உள்ளீடுகள்:** சூரிய ஒளி (அடுப்பு ஆற்றல்), நீர் (தரையிலிருந்து சைலம் குழாய்கள் வழியாக), கார்பன் டை ஆக்சைடு (காற்றிலிருந்து).
*   **செயல்முறை:** பசுங்கணிகங்களில் (சமையலறை) நிகழ்கிறது. ஒளி வினைகள் அடுப்பைப் பற்றவைத்து ஆற்றலைச் சேகரிப்பது போன்றவை. கால்வின் சுழற்சி என்பது உண்மையான சமையல் செயல்முறை, அங்கு சர்க்கரை (உணவு) தயாரிக்கப்படுகிறது.
*   **வெளியீடு:** குளுக்கோஸ் (உணவு) மற்றும் ஆக்ஸிஜன் ('நறுமணம்' அல்லது துணை விளைபொருள்).`
                },
                {
                    english: `**Respiration (சுவாசம் - Swasam):** This is the plant *eating* its own food to get energy for growth. It happens in the mitochondria (the dining area). It's the reverse of photosynthesis, breaking down sugar to release energy.`,
                    tamil: `**சுவாசம்:** இது தாவரம் வளர்ச்சிக்கு ஆற்றலைப் பெற தனது சொந்த உணவை *சாப்பிடுவது* ஆகும். இது மைட்டோகாண்ட்ரியாவில் (சாப்பாட்டு பகுதி) நிகழ்கிறது. இது ஒளிச்சேர்க்கையின் தலைகீழ் செயல்முறையாகும், சர்க்கரையை உடைத்து ஆற்றலை வெளியிடுகிறது.`
                },
                {
                    english: `{{CHECK_YOUR_UNDERSTANDING:
"question": "In our 'Solar-Powered Kitchen' analogy for photosynthesis, what does the sunlight represent?",
"options": ["The ingredients", "The final dish", "The stove's energy", "The kitchen room"],
"answer": "The stove's energy"
}}`
                }
            ]
        },
        {
            heading: { english: '3. Human Physiology (A Complex Orchestra)', tamil: '3. மனித உடற்செயலியல் (ஒரு சிக்கலான இசைக்குழு)' },
            content: [
                {
                    english: `Instead of memorizing separate systems, think of the body as an orchestra where each section must play in harmony.
*   **Neural System (நரம்பு மண்டலம்):** The Conductor (இசை அமைப்பாளர்). It uses fast electrical signals (nerve impulses) to give instant commands.
*   **Endocrine System (நாளமில்லாச் சுரப்பி மண்டலம்):** The Manager. It uses slower chemical signals (hormones) sent through the bloodstream to manage long-term processes like growth and metabolism.
*   **Digestive & Respiratory Systems:** The 'Supply Crew'. They bring in the fuel (food) and oxygen needed for the orchestra to play.
*   **Circulatory System (சுற்றோட்ட மண்டலம்):** The 'Logistics Team'. It transports the fuel and oxygen to every musician (cell) and removes waste.
*   **Excretory System (கழிவுநீக்க மண்டலம்):** The 'Cleaning Crew'. It filters the blood and removes waste products to keep the concert hall clean.`,
                    tamil: `தனித்தனி அமைப்புகளை மனப்பாடம் செய்வதற்குப் பதிலாக, உடலை ஒரு இசைக்குழுவாக நினையுங்கள், அங்கு ஒவ்வொரு பிரிவும் இணக்கமாக வாசிக்க வேண்டும்.
*   **நரம்பு மண்டலம்:** இசை அமைப்பாளர். இது வேகமான மின் சமிக்ஞைகளைப் (நரம்புத் தூண்டல்கள்) பயன்படுத்தி உடனடி கட்டளைகளை வழங்குகிறது.
*   **நாளமில்லாச் சுரப்பி மண்டலம்:** மேலாளர். இது வளர்ச்சி மற்றும் வளர்சிதை மாற்றம் போன்ற நீண்டகால செயல்முறைகளை நிர்வகிக்க இரத்த ஓட்டம் மூலம் அனுப்பப்படும் மெதுவான இரசாயன சமிக்ஞைகளை (ஹார்மோன்கள்) பயன்படுத்துகிறது.
*   **செரிமான மற்றும் சுவாச அமைப்புகள்:** 'வழங்கல் குழு'. இசைக்குழு வாசிக்கத் தேவையான எரிபொருள் (உணவு) மற்றும் ஆக்ஸிஜனைக் கொண்டு வருகின்றன.
*   **சுற்றோட்ட மண்டலம்:** 'தளவாடக் குழு'. இது எரிபொருள் மற்றும் ஆக்ஸிஜனை ஒவ்வொரு இசைக்கலைஞருக்கும் (செல்) கொண்டு சென்று கழிவுகளை நீக்குகிறது.
*   **கழிவுநீக்க மண்டலம்:** 'துப்புரவுக் குழு'. இது இரத்தத்தை வடிகட்டி, கச்சேரி மண்டபத்தைச் சுத்தமாக வைத்திருக்க கழிவுப் பொருட்களை நீக்குகிறது.`
                }
            ]
        },
        {
            heading: { english: '4. Genetics (A Family Recipe Book)', tamil: '4. மரபியல் (ஒரு குடும்ப சமையல் புத்தகம்)' },
            content: [
                {
                    english: `Genetics is like a family's secret recipe book (the DNA).
*   **Gene (மரபணு):** A single recipe for one dish (one protein).
*   **Allele (அல்லீல்):** A variation of a recipe. For example, the recipe for 'Sambar' could have two versions: spicy (dominant, T) or mild (recessive, t).
*   **Genotype (மரபு வகை):** The combination of recipe versions you have (TT, Tt, or tt).
*   **Phenotype (புறத்தோற்றம்):** The actual dish you taste (Spicy or Mild).
*   **Mendel's Laws:** The rules for how these recipes are passed down from parents to children.`,
                    tamil: `மரபியல் என்பது ஒரு குடும்பத்தின் ரகசிய சமையல் புத்தகம் (DNA) போன்றது.
*   **மரபணு:** ஒரு உணவிற்கான ஒற்றைச் செய்முறை (ஒரு புரதம்).
*   **அல்லீல்:** ஒரு செய்முறையின் மாறுபாடு. உதாரணமாக, 'சாம்பார்' செய்முறைக்கு இரண்டு பதிப்புகள் இருக்கலாம்: காரமானது (ஓங்கு, T) அல்லது லேசானது (ஒடுங்கு, t).
*   **மரபு வகை:** உங்களிடம் உள்ள செய்முறை பதிப்புகளின் கலவை (TT, Tt, அல்லது tt).
*   **புறத்தோற்றம்:** நீங்கள் உண்மையில் சுவைக்கும் உணவு (காரமான அல்லது லேசான).
*   **மெண்டலின் விதிகள்:** இந்த சமையல் குறிப்புகள் பெற்றோரிடமிருந்து குழந்தைகளுக்கு எவ்வாறு அனுப்பப்படுகின்றன என்பதற்கான விதிகள்.`
                }
            ]
        },
         {
            heading: { english: '5. Ecology & Environment (A Village Ecosystem)', tamil: '5. சூழலியல் (ஒரு கிராமச் சூழல் மண்டலம்)' },
            content: [
                {
                    english: `Think of an ecosystem like a village community.
*   **Producers (உற்பத்தியாளர்கள்):** The farmers (தாவரங்கள் - plants) who produce food for the entire village.
*   **Primary Consumers (முதல்நிலை நுகர்வோர்):** The villagers (மாடு, ஆடு - herbivores) who eat the plants.
*   **Secondary Consumers (இரண்டாம் நிலை நுகர்வோர்):** Animals (புலி, சிங்கம் - carnivores) that eat the herbivores.
*   **Decomposers (சிதைப்பவைகள்):** The cleanup crew (பாக்டீரியா, பூஞ்சை) that recycles waste back into useful nutrients for the farmers.`,
                    tamil: `ஒரு சூழல் மண்டலத்தை ஒரு கிராமச் சமூகம் போல நினையுங்கள்.
*   **உற்பத்தியாளர்கள்:** முழு கிராமத்திற்கும் உணவு உற்பத்தி செய்யும் விவசாயிகள் (தாவரங்கள்).
*   **முதல்நிலை நுகர்வோர்:** தாவரங்களை உண்ணும் கிராம மக்கள் (மாடு, ஆடு).
*   **இரண்டாம் நிலை நுகர்வோர்:** தாவர உண்ணிகளை உண்ணும் விலங்குகள் (புலி, சிங்கம்).
*   **சிதைப்பவைகள்:** கழிவுகளை விவசாயிகளுக்குப் பயன்படும் ஊட்டச்சத்துக்களாக மறுசுழற்சி செய்யும் துப்புரவுக் குழு (பாக்டீரியா, பூஞ்சை).`
                }
            ]
        },
        {
            heading: { english: '6. Biomolecules (Life\'s Building Blocks)', tamil: '6. உயிர் மூலக்கூறுகள் (வாழ்வின் கட்டுமானக் கற்கள்)' },
            content: [
                {
                    english: `Imagine building a house. You need different materials for different jobs.
*   **Carbohydrates (கார்போஹைட்ரேட்டுகள்):** The cement and sand. They provide the primary energy for construction.
*   **Proteins (புரதங்கள்):** The bricks and pillars. They form the main structure of the house (muscles, enzymes).
*   **Lipids (கொழுப்புகள்):** The waterproofing and electrical wiring. They store energy and form cell membranes.
*   **Nucleic Acids (நியூக்ளிக் அமிலங்கள்):** The Architect's Blueprint (கட்டிடக்கலை நிபுணரின் வரைபடம்). DNA holds the master plan for the entire house.`,
                    tamil: `ஒரு வீட்டைக் கட்டுவதாகக் கற்பனை செய்யுங்கள். வெவ்வேறு வேலைகளுக்கு வெவ்வேறு பொருட்கள் தேவை.
*   **கார்போஹைட்ரேட்டுகள்:** சிமெண்ட் மற்றும் மணல். அவை கட்டுமானத்திற்கான முதன்மை ஆற்றலை வழங்குகின்றன.
*   **புரதங்கள்:** செங்கற்கள் மற்றும் தூண்கள். அவை வீட்டின் முக்கிய அமைப்பை (தசைகள், நொதிகள்) உருவாக்குகின்றன.
*   **கொழுப்புகள்:** நீர்ப்புகாப்பு மற்றும் மின்சார வயரிங். அவை ஆற்றலைச் சேமித்து, செல் சவ்வுகளை உருவாக்குகின்றன.
*   **நியூக்ளிக் அமிலங்கள்:** கட்டிடக்கலை நிபுணரின் வரைபடம். DNA முழு வீட்டிற்குமான பெருந்திட்டத்தைக் கொண்டுள்ளது.`
                }
            ]
        },
        {
            heading: { english: '7. Reproduction (Ensuring Continuity)', tamil: '7. இனப்பெருக்கம் (தொடர்ச்சியை உறுதி செய்தல்)' },
            content: [
                {
                    english: `This chapter explains the two main strategies for continuing a family line or a species.
*   **Asexual Reproduction (பாலிலா இனப்பெருக்கம்):** Like taking a photocopy (நகல் எடுப்பது). It's fast, easy, and creates an identical copy. Example: A potato sprouting a new plant.
*   **Sexual Reproduction (பாலினப் பெருக்கம்):** Like creating a new recipe by combining two different family recipes. It mixes traits from two parents (male and female gametes), creating variation and a unique new individual. This is the basis of human and flowering plant reproduction.`,
                    tamil: `ஒரு குடும்ப வரியை அல்லது ஒரு சிற்றினத்தைத் தொடர்வதற்கான இரண்டு முக்கிய உத்திகளை இந்த அத்தியாயம் விளக்குகிறது.
*   **பாலிலா இனப்பெருக்கம்:** ஒரு நகல் எடுப்பது போல. இது வேகமானது, எளிதானது மற்றும் ஒரு ஒத்த நகலை உருவாக்குகிறது. எடுத்துக்காட்டு: ஒரு உருளைக்கிழங்கு ஒரு புதிய தாவரத்தை முளைக்கச் செய்வது.
*   **பாலினப் பெருக்கம்:** இரண்டு வெவ்வேறு குடும்ப சமையல் குறிப்புகளை இணைத்து ஒரு புதிய செய்முறையை உருவாக்குவது போல. இது இரண்டு பெற்றோரின் (ஆண் மற்றும் பெண் கேமட்கள்) பண்புகளைக் கலந்து, மாறுபாட்டையும் ஒரு தனித்துவமான புதிய தனிநபரையும் உருவாக்குகிறது. இதுவே மனித மற்றும் பூக்கும் தாவர இனப்பெருக்கத்தின் அடிப்படை.`
                }
            ]
        }
    ],
    workedExamples: [
         {
            title: "Genetics: Dihybrid Cross",
            titleTamil: "மரபியல்: இருபண்புக் கலப்பு",
            difficulty: 'Medium',
            problem: "In pea plants, tall (T) is dominant over dwarf (t), and yellow seeds (Y) are dominant over green seeds (y). A pure tall, yellow-seeded plant (TTYY) is crossed with a pure dwarf, green-seeded plant (ttyy). What is the phenotypic ratio in the F2 generation?",
            problemTamil: "பட்டாணிச் செடிகளில், நெட்டை (T) குட்டைக்கு (t) ஓங்கு பண்பாகவும், மஞ்சள் விதைகள் (Y) பச்சை விதைகளுக்கு (y) ஓங்கு பண்பாகவும் உள்ளன. ஒரு தூய நெட்டை, மஞ்சள் விதை கொண்ட தாவரம் (TTYY), ஒரு தூய குட்டை, பச்சை விதை கொண்ட தாவரத்துடன் (ttyy) கலப்பு செய்யப்படுகிறது. F2 தலைமுறையில் புறத்தோற்ற விகிதம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Determine the F1 generation. The TTYY parent produces only TY gametes. The ttyy parent produces only ty gametes. The F1 offspring will all have the genotype TtYy.",
                    explanationTamil: "F1 தலைமுறையைத் தீர்மானிக்கவும். TTYY பெற்றோர் TY கேமட்களை மட்டுமே உருவாக்கும். ttyy பெற்றோர் ty கேமட்களை மட்டுமே உருவாக்கும். F1 சந்ததிகள் அனைத்தும் TtYy என்ற மரபு வகையைக் கொண்டிருக்கும்."
                },
                {
                    step: 2,
                    explanation: "Determine the gametes produced by the F1 generation (TtYy) through self-pollination. Due to independent assortment, four types of gametes are produced: TY, Ty, tY, and ty, in equal proportions.",
                    explanationTamil: "தன்னூட்டல் மூலம் F1 தலைமுறை (TtYy) உருவாக்கும் கேமட்களைத் தீர்மானிக்கவும். சார்பின்றி ஒதுங்குதல் விதிப்படி, நான்கு வகை கேமட்கள் சம விகிதத்தில் உருவாகின்றன: TY, Ty, tY, மற்றும் ty."
                },
                {
                    step: 3,
                    explanation: "Set up a Punnett square with the four types of gametes from both parents.",
                    explanationTamil: "இரு பெற்றோரிடமிருந்தும் நான்கு வகை கேமட்களுடன் ஒரு புன்னட் கட்டத்தை அமைக்கவும்."
                },
                {
                    step: 4,
                    explanation: "Fill in the Punnett square and count the resulting phenotypes. You will find 9 Tall Yellow, 3 Tall Green, 3 Dwarf Yellow, and 1 Dwarf Green.",
                    explanationTamil: "புன்னட் கட்டத்தை நிரப்பி, உருவாகும் புறத்தோற்றங்களை எண்ணவும். நீங்கள் 9 நெட்டை மஞ்சள், 3 நெட்டை பச்சை, 3 குட்டை மஞ்சள், மற்றும் 1 குட்டை பச்சை ஆகியவற்றைக் காண்பீர்கள்."
                },
                {
                    step: 5,
                    explanation: "The phenotypic ratio for a dihybrid cross is 9:3:3:1.",
                    explanationTamil: "ஒரு இருபண்புக் கலப்பின் புறத்தோற்ற விகிதம் 9:3:3:1 ஆகும்."
                }
            ],
            neetHack: "For any dihybrid cross between two heterozygotes, the 9:3:3:1 ratio is constant. Don't waste time drawing the Punnett square in the exam unless absolutely necessary. Just remember the ratio.",
            neetHackTamil: "இரண்டு ஹெட்டிரோசைகஸ் பெற்றோருக்கு இடையேயான எந்தவொரு இருபண்புக் கலப்பிற்கும், 9:3:3:1 விகிதம் மாறிலி. தேர்வில் புன்னட் கட்டத்தை வரைந்து நேரத்தை வீணாக்காதீர்கள், விகிதத்தை நினைவில் வைத்திருங்கள்."
        },
         {
            title: "Human Physiology: Cardiac Output",
            titleTamil: "மனித உடற்செயலியல்: இதய வெளியேற்ற அளவு",
            difficulty: 'Medium',
            problem: "If a person's heart rate is 72 beats/minute and their stroke volume is 70 mL/beat, what is their cardiac output?",
            problemTamil: "ஒரு நபரின் இதயத் துடிப்பு நிமிடத்திற்கு 72 துடிப்புகள் மற்றும் அவரது ஒரு துடிப்பிற்கான வெளியேற்ற அளவு 70 மி.லி எனில், அவரது இதய வெளியேற்ற அளவு என்ன?",
            solutionSteps: [
                 {
                    step: 1,
                    explanation: "Recall the formula for Cardiac Output (CO).",
                    explanationTamil: "இதய வெளியேற்ற அளவு (CO) க்கான சூத்திரத்தை நினைவுகூர்க.",
                    calculation: "Cardiac Output = Heart Rate (HR) × Stroke Volume (SV)"
                },
                {
                    step: 2,
                    explanation: "Substitute the given values.",
                    explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளைப் பிரதியிடவும்.",
                    calculation: "CO = 72 beats/min × 70 mL/beat"
                },
                {
                    step: 3,
                    explanation: "Calculate the result and convert to Litres/minute.",
                    explanationTamil: "முடிவைக் கணக்கிட்டு, லிட்டர்/நிமிடம் ஆக மாற்றவும்.",
                    calculation: "CO = 5040 mL/min = 5.04 L/min"
                }
            ],
            neetHack: "A healthy adult's cardiac output is roughly 5 Liters per minute, which is approximately the total volume of blood in the body. This can be a useful sanity check for your answer.",
            neetHackTamil: "ஆரோக்கியமான ஒருவரின் இதய வெளியேற்ற அளவு நிமிடத்திற்கு சுமார் 5 லிட்டர் ஆகும், இது உடலில் உள்ள மொத்த இரத்தத்தின் அளவிற்கு சமம். இது உங்கள் விடையைச் சரிபார்க்க ஒரு பயனுள்ள சோதனையாகும்."
        },
        {
            title: "Ecology: Biomagnification",
            titleTamil: "சூழலியல்: உயிரியல் உருப்பெருக்கம்",
            difficulty: 'Easy',
            problem: "In an aquatic food chain, if the concentration of DDT in water is 0.003 ppb, what is the most likely concentration of DDT in fish-eating birds?",
            problemTamil: "ஒரு நீர்வாழ் உணவுச் சங்கிலியில், நீரில் உள்ள DDT-இன் செறிவு 0.003 ppb எனில், மீன் உண்ணும் பறவைகளில் DDT-இன் செறிவு என்னவாக இருக்க வாய்ப்புள்ளது?",
            solutionSteps: [
                { step: 1, explanation: "Understand the concept of Biomagnification. It is the increase in concentration of a toxicant at successive trophic levels.", explanationTamil: "உயிரியல் உருப்பெருக்கம் என்ற கருத்தைப் புரிந்து கொள்ளுங்கள். இது அடுத்தடுத்த உணவூட்ட மட்டங்களில் ஒரு நச்சுப் பொருளின் செறிவு அதிகரிப்பதாகும்." },
                { step: 2, explanation: "Identify the food chain: Water -> Zooplankton -> Small Fish -> Large Fish -> Fish-eating Birds.", explanationTamil: "உணவுச் சங்கிலியை அடையாளம் காணவும்: நீர் -> விலங்கு மிதவை -> சிறிய மீன் -> பெரிய மீன் -> மீன் உண்ணும் பறவைகள்." },
                { step: 3, explanation: "At each trophic level, the concentration of the non-biodegradable toxicant (DDT) increases significantly because it gets accumulated in the fatty tissues.", explanationTamil: "ஒவ்வொரு உணவூட்ட மட்டத்திலும், சிதைவடையாத நச்சுப் பொருளின் (DDT) செறிவு கணிசமாக அதிகரிக்கிறது, ஏனெனில் இது கொழுப்புத் திசுக்களில் சேகரமாகிறது." },
                { step: 4, explanation: "Based on standard data, the concentration can increase by a factor of 10 million or more. Zooplankton (0.04 ppm), Small fish (0.5 ppm), Large fish (2 ppm), Birds (25 ppm). The concentration will be highest in the top consumer.", explanationTamil: "தரவுப்படி, செறிவு 10 மில்லியன் மடங்கு அல்லது அதற்கு மேல் அதிகரிக்கலாம். விலங்கு மிதவை (0.04 ppm), சிறிய மீன் (0.5 ppm), பெரிய மீன் (2 ppm), பறவைகள் (25 ppm). மேல்நிலை நுகர்வோரில் செறிவு மிக அதிகமாக இருக்கும்." }
            ],
            neetHack: "For biomagnification questions, always choose the option with the highest concentration for the organism at the top of the food chain.",
            commonPitfall: "Thinking that the concentration remains the same across trophic levels."
        }
    ],
    mcqs: [
        { question: "The powerhouse of the cell is:", options: ["A. Nucleus", "B. Ribosome", "C. Mitochondrion", "D. Chloroplast"], answer: "C. Mitochondrion", explanation: "Mitochondria are the sites of cellular respiration and ATP synthesis.", neetFrequency: 5 },
        { question: "Which hormone is responsible for the closing of stomata during water stress?", options: ["A. Auxin", "B. Gibberellin", "C. Cytokinin", "D. Abscisic acid (ABA)"], answer: "D. Abscisic acid (ABA)", explanation: "ABA is known as the stress hormone and causes stomatal closure to conserve water.", neetFrequency: 4 },
        { question: "The final product of glycolysis is:", options: ["A. Acetyl-CoA", "B. Pyruvic acid", "C. Glucose-6-phosphate", "D. Citric acid"], answer: "B. Pyruvic acid", explanation: "Glycolysis breaks down one molecule of glucose into two molecules of pyruvic acid.", neetFrequency: 3 },
        { question: "Double fertilization is a characteristic feature of:", options: ["A. Gymnosperms", "B. Algae", "C. Angiosperms", "D. Fungi"], answer: "C. Angiosperms", explanation: "Double fertilization is a unique feature of flowering plants (angiosperms).", neetFrequency: 5 },
        { question: "A test cross involves crossing an F1 hybrid with:", options: ["A. Another F1 hybrid", "B. A homozygous recessive parent", "C. A homozygous dominant parent", "D. Any parent"], answer: "B. A homozygous recessive parent", explanation: "A test cross is used to determine the genotype of an individual with a dominant phenotype.", neetFrequency: 4 },
        { question: "The law of independent assortment is applicable for genes that are:", options: ["A. Located on the same chromosome", "B. Located on different chromosomes", "C. Dominant over each other", "D. Recessive"], answer: "B. Located on different chromosomes", explanation: "Genes located on different chromosomes assort independently during gamete formation.", neetFrequency: 4 },
        { question: "The process of transcription involves the synthesis of:", options: ["A. DNA from DNA", "B. RNA from DNA", "C. Protein from RNA", "D. DNA from RNA"], answer: "B. RNA from DNA", explanation: "Transcription is the process of creating an RNA copy of a DNA sequence.", neetFrequency: 5 },
        { question: "Which of the following is an example of a vestigial organ in humans?", options: ["A. Pancreas", "B. Spleen", "C. Appendix", "D. Liver"], answer: "C. Appendix", explanation: "The appendix is considered a vestigial organ as its function is non-essential.", neetFrequency: 2 },
        { question: "In an ecosystem, the 10% law of energy transfer was given by:", options: ["A. Tansley", "B. Haeckel", "C. Lindeman", "D. Odum"], answer: "C. Lindeman", explanation: "Raymond Lindeman gave the ten percent law of energy transfer between trophic levels.", neetFrequency: 3 },
        { question: "The interaction between an orchid and a mango tree is an example of:", options: ["A. Parasitism", "B. Mutualism", "C. Commensalism", "D. Predation"], answer: "C. Commensalism", explanation: "The orchid benefits by getting a substrate to grow on, while the mango tree is unaffected.", neetFrequency: 5 },
        { question: "Which part of the human eye contains photoreceptor cells?", options: ["A. Cornea", "B. Iris", "C. Lens", "D. Retina"], answer: "D. Retina", neetFrequency: 3 },
        { question: "Which blood group is known as the 'universal donor'?", options: ["A. A", "B. B", "C. AB", "D. O"], answer: "D. O", neetFrequency: 4 },
        { question: "The 'pacemaker' of the human heart is:", options: ["A. SA node", "B. AV node", "C. Purkinje fibers", "D. Bundle of His"], answer: "A. SA node", neetFrequency: 5 },
        { question: "The functional unit of the kidney is:", options: ["A. Neuron", "B. Nephron", "C. Alveolus", "D. Sarcomere"], answer: "B. Nephron", neetFrequency: 4 },
        { question: "Which plant hormone is responsible for fruit ripening?", options: ["A. Auxin", "B. Gibberellin", "C. Ethylene", "D. Cytokinin"], answer: "C. Ethylene", neetFrequency: 5 },
        { question: "A cross between a red flower (RR) and a white flower (rr) producing a pink flower (Rr) is an example of:", options: ["A. Dominance", "B. Co-dominance", "C. Incomplete dominance", "D. Epistasis"], answer: "C. Incomplete dominance", neetFrequency: 4 },
        { question: "The 'operon' concept of gene regulation was given by:", options: ["A. Watson and Crick", "B. Mendel", "C. Jacob and Monod", "D. Morgan"], answer: "C. Jacob and Monod", neetFrequency: 3 },
        { question: "The wings of a bat and the wings of a bird are examples of:", options: ["A. Homologous structures", "B. Analogous structures", "C. Vestigial structures", "D. Atavism"], answer: "B. Analogous structures", neetFrequency: 4 },
        { question: "Which gas is primarily responsible for the greenhouse effect?", options: ["A. Oxygen", "B. Nitrogen", "C. Carbon Dioxide", "D. Hydrogen"], answer: "C. Carbon Dioxide", neetFrequency: 2 },
        { question: "The Montreal Protocol is associated with the protection of:", options: ["A. Biodiversity", "B. Ozone layer", "C. Tropical forests", "D. Wetlands"], answer: "B. Ozone layer", neetFrequency: 3 },
        { question: "The fluid mosaic model explains the structure of:", options: ["A. Cell wall", "B. Nucleus", "C. Cell membrane", "D. Ribosome"], answer: "C. Cell membrane", neetFrequency: 3 },
        { question: "The final electron acceptor in the mitochondrial electron transport chain is:", options: ["A. Water", "B. Oxygen", "C. NAD+", "D. Cytochrome c"], answer: "B. Oxygen", neetFrequency: 4 },
        { question: "The process of spermatogenesis occurs in the:", options: ["A. Epididymis", "B. Vas deferens", "C. Seminiferous tubules", "D. Prostate gland"], answer: "C. Seminiferous tubules", neetFrequency: 3 },
        { question: "Which of the following STDs is not curable?", options: ["A. Syphilis", "B. Gonorrhoea", "C. Genital Herpes", "D. Chlamydiasis"], answer: "C. Genital Herpes", neetFrequency: 2 },
        { question: "The chromosomal condition for Turner's Syndrome is:", options: ["A. XXY", "B. XO", "C. XXX", "D. XYY"], answer: "B. XO", neetFrequency: 3 },
        { question: "The theory of 'use and disuse' was proposed by:", options: ["A. Darwin", "B. Lamarck", "C. Wallace", "D. Weismann"], answer: "B. Lamarck", neetFrequency: 1 },
        { question: "The pyramid of energy in an ecosystem is always:", options: ["A. Upright", "B. Inverted", "C. Spindle-shaped", "D. Can be of any shape"], answer: "A. Upright", neetFrequency: 5 },
        { question: "The enzyme responsible for fixing carbon dioxide in C3 plants is:", options: ["A. PEP carboxylase", "B. RuBisCO", "C. Carbonic anhydrase", "D. Aldolase"], answer: "B. RuBisCO", neetFrequency: 4 },
        { question: "Which part of the human brain is the center for thought, memory, and intelligence?", options: ["A. Cerebellum", "B. Medulla oblongata", "C. Cerebrum", "D. Hypothalamus"], answer: "C. Cerebrum", neetFrequency: 2 },
        { question: "Which of the following is a water-soluble vitamin?", options: ["A. Vitamin A", "B. Vitamin D", "C. Vitamin E", "D. Vitamin C"], answer: "D. Vitamin C", neetFrequency: 1 },
        { question: "The correct sequence of the cell cycle is:", options: ["A. G1 -> G2 -> S -> M", "B. S -> G1 -> G2 -> M", "C. G1 -> S -> G2 -> M", "D. M -> G1 -> G2 -> S"], answer: "C. G1 -> S -> G2 -> M", neetFrequency: 3 },
        { question: "Crossing over occurs during which stage of meiosis?", options: ["A. Leptotene", "B. Zygotene", "C. Pachytene", "D. Diplotene"], answer: "C. Pachytene", neetFrequency: 4 },
        { question: "Which of the following is the most abundant protein in the animal world?", options: ["A. Insulin", "B. Hemoglobin", "C. Collagen", "D. RuBisCO"], answer: "C. Collagen", neetFrequency: 2 },
        { question: "The process of formation of a mature female gamete is called:", options: ["A. Spermatogenesis", "B. Oogenesis", "C. Gametogenesis", "D. Menstruation"], answer: "B. Oogenesis", neetFrequency: 3 },
        { question: "Which of the following is a non-reducing sugar?", options: ["A. Glucose", "B. Maltose", "C. Lactose", "D. Sucrose"], answer: "D. Sucrose", neetFrequency: 4 },
        { question: "The Hardy-Weinberg principle explains:", options: ["A. Genetic drift", "B. Natural selection", "C. Genetic equilibrium", "D. Speciation"], answer: "C. Genetic equilibrium", neetFrequency: 2 },
        { question: "Which of the following is NOT a greenhouse gas?", options: ["A. Methane", "B. Carbon dioxide", "C. Water vapour", "D. Oxygen"], answer: "D. Oxygen", neetFrequency: 1 },
        { question: "The 'lock and key' hypothesis is related to:", options: ["A. DNA replication", "B. Enzyme action", "C. Protein synthesis", "D. Muscle contraction"], answer: "B. Enzyme action", neetFrequency: 3 },
        { question: "Which hormone is known as the 'emergency hormone'?", options: ["A. Thyroxine", "B. Insulin", "C. Adrenaline", "D. Glucagon"], answer: "C. Adrenaline", neetFrequency: 4 },
        { question: "The structure of DNA was given by:", options: ["A. Mendel", "B. Morgan", "C. Watson and Crick", "D. Khorana"], answer: "C. Watson and Crick", neetFrequency: 2 },
        { question: "The process of 'guttation' is a result of:", options: ["A. Diffusion", "B. Root pressure", "C. Transpiration", "D. Osmosis"], answer: "B. Root pressure", neetFrequency: 3 },
        { question: "Which of the following is a link between glycolysis and the Krebs cycle?", options: ["A. Pyruvic acid", "B. Citric acid", "C. Acetyl-CoA", "D. Malic acid"], answer: "C. Acetyl-CoA", neetFrequency: 5 },
        { question: "The part of the human brain that controls body temperature and hunger is:", options: ["A. Thalamus", "B. Hypothalamus", "C. Cerebellum", "D. Pons"], answer: "B. Hypothalamus", neetFrequency: 3 },
        { question: "Which of the following is a primary consumer in a food chain?", options: ["A. Lion", "B. Eagle", "C. Grasshopper", "D. Snake"], answer: "C. Grasshopper", neetFrequency: 2 },
        { question: "The anther contains:", options: ["A. Ovules", "B. Pistil", "C. Pollen grains", "D. Sepals"], answer: "C. Pollen grains", neetFrequency: 1 },
        { question: "Which blood cells are involved in the immune response?", options: ["A. Erythrocytes (RBCs)", "B. Thrombocytes (Platelets)", "C. Leucocytes (WBCs)", "D. All of the above"], answer: "C. Leucocytes (WBCs)", neetFrequency: 3 },
        { question: "In a DNA molecule, the percentage of cytosine is 18%. What will be the percentage of adenine?", options: ["A. 18%", "B. 32%", "C. 36%", "D. 64%"], answer: "B. 32%", neetFrequency: 4 },
        { question: "The process of 'parturition' refers to:", options: ["A. Fertilization", "B. Implantation", "C. Childbirth", "D. Ovulation"], answer: "C. Childbirth", neetFrequency: 2 },
        { question: "The theory of natural selection was proposed by:", options: ["A. Lamarck", "B. Darwin", "C. Mendel", "D. Pasteur"], answer: "B. Darwin", neetFrequency: 3 },
        { question: "The final acceptor of electrons in the light reaction of photosynthesis is:", options: ["A. Oxygen", "B. NADP+", "C. Water", "D. Chlorophyll"], answer: "B. NADP+", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "The total energy of a satellite orbiting the Earth is negative.", reason: "It is a bound system.", answer: "A", explanation: "A negative total energy signifies that the satellite does not have enough energy to escape the Earth's gravitational pull, hence it is a bound system.", neetFrequency: 4 },
        { assertion: "All enzymes are proteins, but all proteins are not enzymes.", reason: "Ribozymes are nucleic acids that act as enzymes.", answer: "B", explanation: "The first statement is a commonly accepted simplification, though technically incorrect due to ribozymes. The second statement is true and highlights an exception. However, it doesn't explain the first part. The reason all proteins aren't enzymes is that they can have other functions (structural, transport, etc.).", neetFrequency: 3 },
        { assertion: "The two strands of a DNA double helix are anti-parallel.", reason: "One strand runs in the 5' to 3' direction, while the other runs in the 3' to 5' direction.", answer: "A", explanation: "The reason is the correct definition and explanation of what 'anti-parallel' means in the context of DNA structure.", neetFrequency: 5 },
        { assertion: "In a food chain, the energy decreases at each successive trophic level.", reason: "A large part of the energy is lost as heat during metabolic activities at each level.", answer: "A", explanation: "The assertion is true (10% law). The reason is also true and is the correct explanation for this energy loss.", neetFrequency: 4 },
        { assertion: "A person with AB blood group is a universal recipient.", reason: "AB blood group has no antibodies (anti-A and anti-B) in the plasma.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation for why they can receive blood from any group without agglutination.", neetFrequency: 3 }
    ],
    matchTheColumns: [
        { column1: ["(a) Photosynthesis", "(b) Respiration", "(c) Transpiration", "(d) Fertilization"], column2: ["(p) Stomata", "(q) Mitochondria", "(r) Fallopian tube", "(s) Chloroplast"], answer: "a-s, b-q, c-p, d-r", explanation: "Matching biological processes with the location where they occur." },
        { column1: ["(a) Darwin", "(b) Mendel", "(c) Watson & Crick", "(d) Pasteur"], column2: ["(p) Laws of Inheritance", "(q) Swan-neck experiment", "(r) Natural Selection", "(s) DNA double helix"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching scientists with their key contributions." },
        { column1: ["(a) Ribosome", "(b) Lysosome", "(c) Nucleus", "(d) Cell Membrane"], column2: ["(p) Suicidal bags", "(q) Control center", "(r) Selective permeability", "(s) Protein factory"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching cell organelles with their nicknames or primary functions." },
        { column1: ["(a) Insulin", "(b) Thyroxine", "(c) Growth Hormone", "(d) Adrenaline"], column2: ["(p) Pituitary gland", "(q) Adrenal gland", "(r) Thyroid gland", "(s) Pancreas"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching hormones with the glands that secrete them." },
        { column1: ["(a) Monohybrid cross ratio", "(b) Dihybrid cross ratio", "(c) Incomplete dominance ratio", "(d) Test cross ratio"], column2: ["(p) 1:2:1", "(q) 1:1", "(r) 3:1", "(s) 9:3:3:1"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching types of genetic crosses with their characteristic phenotypic ratios in F2 (or for test cross)." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "F_net = ma", description: "Newton's Second Law", descriptionTamil: "நியூட்டனின் இரண்டாம் விதி" },
            { formula: "K.E. = 1/2 mv^2", description: "Kinetic Energy", descriptionTamil: "இயக்க ஆற்றல்" },
            { formula: "p^2 + 2pq + q^2 = 1", description: "Hardy-Weinberg Equilibrium", descriptionTamil: "ஹார்டி-வெயின்பெர்க் சமநிலை" }
        ],
        diagrams: [
            { title: "Punnett Square", description: "A diagram used to predict the genotypes of a particular cross or breeding experiment.", diagram: "[[Placeholder for Punnett Square UI]]" },
            { title: "Lac Operon", description: "A diagram showing the regulation of gene expression in prokaryotes.", diagram: "[[Placeholder for Lac Operon UI]]" },
            { title: "Human Heart", description: "A diagram showing the four chambers and major blood vessels of the human heart.", diagram: "[[Placeholder for Human Heart UI]]" }
        ]
    },
    keyTakeaways: [
        "Mastery of these seven chapters provides a very strong foundation for the entire NEET biology syllabus.",
        "Using analogies and connecting concepts to daily life enhances understanding and retention.",
        "Understanding 'why' a concept works is more important than just memorizing the 'what'.",
        "Consistent practice of application-based questions is the key to converting conceptual knowledge into high scores."
    ],
    mnemonics: [
        { text: "For the cell cycle phases: 'Go, Sally, Go! Make Children!' (G1, S, G2, M, Cytokinesis).", tamil: "'போ, சல்லி, போ! குழந்தைகளை உருவாக்கு!' (G1, S, G2, M, சைட்டோகினேசிஸ்)." },
        { text: "For taxonomy classification: 'King Philip Came Over For Good Soup' (Kingdom, Phylum, Class, Order, Family, Genus, Species).", tamil: "'அரசர் பிலிப் நல்ல சூப்பிற்காக வந்தார்' (உலகம், தொகுதி, வகுப்பு, வரிசை, குடும்பம், பேரினம், சிற்றினம்)." }
    ],
    neetTips: [
        { text: "In genetics problems, always write down the genotypes and possible gametes before drawing the Punnett square. It prevents careless mistakes.", tamil: "மரபியல் கணக்குகளில், புன்னட் கட்டத்தை வரைவதற்கு முன்பு எப்போதும் மரபு வகைகள் மற்றும் சாத்தியமான கேமட்களை எழுதவும். இது கவனக்குறைவான தவறுகளைத் தடுக்கிறது." },
        { text: "For human physiology, create flowcharts for hormonal control pathways (e.g., the menstrual cycle). Visualizing the feedback loops is crucial.", tamil: "மனித உடற்செயலியலுக்கு, ஹார்மோன் கட்டுப்பாட்டுப் பாதைகளுக்கு (எ.கா., மாதவிடாய் சுழற்சி) பாய்வு வரைபடங்களை உருவாக்கவும். பின்னூட்ட சுழல்களைக் காட்சிப்படுத்துவது முக்கியம்." }
    ]
};

    