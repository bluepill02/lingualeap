
      
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
            answer: "9:3:3:1",
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
            answer: "5.04 L/min",
            neetHack: "A healthy adult's cardiac output is roughly 5 Liters per minute, which is approximately the total volume of blood in the body. This can be a useful sanity check for your answer.",
            neetHackTamil: "ஆரோக்கியமான ஒருவரின் இதய வெளியேற்ற அளவு நிமிடத்திற்கு சுமார் 5 லிட்டர் ஆகும், இது உடலில் உள்ள மொத்த இரத்தத்தின் அளவிற்கு சமம். இது உங்கள் விடையைச் சரிபார்க்க ஒரு பயனுள்ள சோதனையாகும்."
        },
        {
            title: "Cell Biology: Identifying an Organelle",
            titleTamil: "செல் உயிரியல்: ஒரு நுண்ணுறுப்பை அடையாளம் காணுதல்",
            difficulty: "Easy",
            problem: "Which of the following is known as the 'powerhouse of the cell'?",
            problemTamil: "பின்வருவனவற்றில் எது 'செல்லின் ஆற்றல் மையம்' என்று அழைக்கப்படுகிறது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the function of each option. The 'powerhouse' is the organelle responsible for generating most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
                    explanationTamil: "ஒவ்வொரு விருப்பத்தின் செயல்பாட்டையும் பகுப்பாய்வு செய்யவும். 'ஆற்றல் மையம்' என்பது செல்லின் அடினோசின் டிரைபாஸ்பேட் (ATP) விநியோகத்தின் பெரும்பகுதியை உருவாக்கும் நுண்ணுருப்பாகும், இது வேதியியல் ஆற்றலின் மூலமாகப் பயன்படுத்தப்படுகிறது."
                },
                {
                    step: 2,
                    explanation: "Ribosomes are involved in protein synthesis. The Nucleus contains the genetic material. Lysosomes are involved in digestion and waste removal.",
                    explanationTamil: "ரிபோசோம்கள் புரதத் தொகுப்பில் ஈடுபட்டுள்ளன. உட்கரு மரபணுப் பொருளைக் கொண்டுள்ளது. லைசோசோம்கள் செரிமானம் மற்றும் கழிவு நீக்கத்தில் ஈடுபட்டுள்ளன."
                },
                {
                    step: 3,
                    explanation: "Mitochondria are the sites of cellular respiration, the process that generates ATP. Therefore, they are correctly called the 'powerhouse of the cell'.",
                    explanationTamil: "மைட்டோகாண்ட்ரியா செல்லுலார் சுவாசத்தின் தளங்களாகும், இது ATP ஐ உருவாக்கும் செயல்முறையாகும். எனவே, அவை சரியாக 'செல்லின் ஆற்றல் மையம்' என்று அழைக்கப்படுகின்றன."
                }
            ],
            answer: "Mitochondrion",
            neetHack: "This is one of the most fundamental facts in biology. It's a direct recall question.",
            commonPitfall: "Confusing mitochondria (energy) with chloroplasts (energy production in plants) or ribosomes (protein production)."
        },
        {
            title: "Plant Physiology: Identifying a Hormone Function",
            titleTamil: "தாவர செயலியல்: ஒரு ஹார்மோன் செயல்பாட்டை அடையாளம் காணுதல்",
            difficulty: "Easy",
            problem: "Which plant hormone is responsible for fruit ripening?",
            problemTamil: "பழம் பழுக்க எந்த தாவர ஹார்மோன் காரணமாகும்?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Recall the major functions of the five main plant hormones.",
                    explanationTamil: "ஐந்து முக்கிய தாவர ஹார்மோன்களின் முக்கிய செயல்பாடுகளை நினைவுகூர்க."
                },
                {
                    step: 2,
                    explanation: "Auxin is primarily involved in cell elongation and apical dominance. Gibberellin promotes stem elongation and germination. Cytokinin promotes cell division. Abscisic acid is involved in dormancy and stress responses.",
                    explanationTamil: "ஆக்சின் செல் நீட்சி மற்றும் நுனி ஆதிக்கத்தில் முதன்மையாக ஈடுபட்டுள்ளது. ஜிப்ரலின் தண்டு நீட்சி மற்றும் முளைத்தலை ஊக்குவிக்கிறது. சைட்டோகைனின் செல் பிரிவை ஊக்குவிக்கிறது. அப்சிசிக் அமிலம் உறக்கம் மற்றும் மன அழுத்த பதில்களில் ஈடுபட்டுள்ளது."
                },
                {
                    step: 3,
                    explanation: "Ethylene is a gaseous hormone that is unique in its role of promoting fruit ripening, senescence, and abscission.",
                    explanationTamil: "எத்திலீன் ஒரு வாயு ஹார்மோன் ஆகும், இது பழம் பழுத்தல், மூப்படைதல் மற்றும் உதிர்தல் ஆகியவற்றை ஊக்குவிக்கும் அதன் பாத்திரத்தில் தனித்துவமானது."
                }
            ],
            answer: "Ethylene",
            neetHack: "Think of ripening bananas in a bag. They produce ethylene gas which accelerates the ripening of other fruits with them.",
            neetHackTamil: "ஒரு பையில் பழுக்கும் வாழைப்பழங்களை நினையுங்கள். அவை எத்திலீன் வாயுவை உற்பத்தி செய்கின்றன, இது அவற்றுடன் உள்ள மற்ற பழங்களின் பழுத்தலை வேகப்படுத்துகிறது."
        },
        {
            title: "Ecology: Identifying Population Interactions",
            titleTamil: "சூழலியல்: மக்கள்தொகை இடைவினைகளை அடையாளம் காணுதல்",
            difficulty: "Medium",
            problem: "The interaction where one species benefits and the other is neither harmed nor benefited is called:",
            problemTamil: "ஒரு சிற்றினம் பயனடையும் மற்றும் மற்றொன்று பாதிக்கப்படாமலும் பயனடையாமலும் இருக்கும் இடைவினை என்னவென்று அழைக்கப்படுகிறது?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Analyze the interaction type based on the outcomes for the two species (+, -, 0).",
                    explanationTamil: "இரண்டு சிற்றினங்களுக்கான விளைவுகளின் அடிப்படையில் (+, -, 0) இடைவினை வகையை பகுப்பாய்வு செய்யவும்."
                },
                {
                    step: 2,
                    explanation: "Parasitism is (+,-). Mutualism is (+,+). Competition is (-,-). Predation is (+,-).",
                    explanationTamil: "ஒட்டுண்ணிவாழ்க்கை (+,-). ஒன்றியவாழ்வு (+,+). போட்டி (-,-). இரைகொல்லி (+,-)."
                },
                {
                    step: 3,
                    explanation: "The given interaction is (+, 0). This defines commensalism.",
                    explanationTamil: "கொடுக்கப்பட்ட இடைவினை (+, 0) ஆகும். இது உடன்வாழ்வை வரையறுக்கிறது."
                },
                {
                    step: 4,
                    explanation: "A classic example is an orchid growing on a mango tree. The orchid gets a place to grow (benefit, +), while the mango tree is unaffected (neutral, 0).",
                    explanationTamil: "ஒரு மாமரத்தில் வளரும் ஆர்க்கிட் ஒரு சிறந்த எடுத்துக்காட்டு. ஆர்க்கிட் வளர ஒரு இடத்தைப் பெறுகிறது (பயன், +), அதேசமயம் மாமரம் பாதிக்கப்படவில்லை (நடுநிலை, 0)."
                }
            ],
            answer: "Commensalism",
            neetHack: "Create a simple table with all six interactions and their (+, -, 0) signs for quick recall. This is a very common conceptual question.",
            commonPitfall: "Confusing commensalism (+, 0) with mutualism (+, +)."
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "Phenotypic Ratio (Dihybrid Cross) = 9:3:3:1",
                description: "The standard phenotypic ratio for an F2 generation in a dihybrid cross involving independent assortment.",
                descriptionTamil: "ஒரு இருபண்புக் கலப்பில் F2 தலைமுறைக்கான நிலையான புறத்தோற்ற விகிதம்."
            },
            {
                formula: "CO = HR × SV",
                description: "Cardiac Output = Heart Rate × Stroke Volume",
                descriptionTamil: "இதய வெளியேற்ற அளவு = இதயத் துடிப்பு × ஒரு துடிப்பிற்கான வெளியேற்ற அளவு"
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Mastery of these seven chapters provides a very strong foundation for the entire NEET biology syllabus.",
        "Using analogies and connecting concepts to daily life enhances understanding and retention.",
        "Understanding 'why' a biological process works is more important than just memorizing the 'what'.",
        "Consistent practice of application-based questions is the key to converting conceptual knowledge into high scores."
    ],
    mnemonics: [
        { text: "For the cell cycle phases: 'Go, Sally, Go! Make Children!' (G1, S, G2, M, Cytokinesis).", tamil: "'போ, சல்லி, போ! குழந்தைகளை உருவாக்கு!' (G1, S, G2, M, சைட்டோகினேசிஸ்)." },
        { text: "For taxonomy classification: 'King Philip Came Over For Good Soup' (Kingdom, Phylum, Class, Order, Family, Genus, Species).", tamil: "'அரசர் பிலிப் நல்ல சூப்பிற்காக வந்தார்' (உலகம், தொகுதி, வகுப்பு, வரிசை, குடும்பம், பேரினம், சிற்றினம்)." }
    ],
    neetTips: [
        { text: "In genetics problems, always write down the genotypes and possible gametes before drawing the Punnett square. It prevents careless mistakes.", tamil: "மரபியல் கணக்குகளில், புன்னட் கட்டத்தை வரைவதற்கு முன்பு எப்போதும் மரபு வகைகளையும் சாத்தியமான கேமட்களையும் எழுதவும். இது கவனக்குறைவான தவறுகளைத் தடுக்கிறது." },
        { text: "For human physiology, create flowcharts for hormonal control pathways (e.g., the menstrual cycle). Visualizing the feedback loops is crucial.", tamil: "மனித உடற்செயலியலுக்கு, ஹார்மோன் கட்டுப்பாட்டுப் பாதைகளுக்கு (எ.கா., மாதவிடாய் சுழற்சி) பாய்வு வரைபடங்களை உருவாக்கவும். பின்னூட்ட சுழல்களைக் காட்சிப்படுத்துவது முக்கியம்." }
    ]
};

    
