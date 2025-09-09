
import type { NeetModule } from '@/lib/types';

export const module: NeetModule = {
  id: 'take-it-easy',
  title: 'Take it Easy: Complex Biology Concepts Simplified',
  chapter: 'Special Module',
  subject: 'Biology',
  learningObjectives: [
    'Understand the core principles of Human Physiology systems and their interconnections.',
    'Grasp the fundamentals of Mendelian genetics, molecular inheritance, and evolution.',
    'Simplify complex processes in Plant Physiology like photosynthesis and respiration.',
    'Memorize the structure and function of key cell organelles with easy analogies.',
    'Learn to interpret ecological data and understand population dynamics.',
    'Recognize the basic structures and functions of essential biomolecules.',
    'Understand the key stages of human and plant reproduction.',
  ],
  prerequisites: [
    'Basic understanding of high school biology.',
    'Familiarity with the general NEET Biology syllabus.',
  ],
  conceptOverview: `This special module is designed to break down some of the most challenging and high-yield topics in the NEET Biology syllabus. We'll use simple analogies, focused examples, and clear explanations to help you build confidence and master these complex areas.`,

  // This module uses a simplified structure and omits some sections for clarity
  stateBoardGaps: [],
  extraNeetConcepts: [],
  ncertReadingGuide: [],
  
  conceptNotes: [
    {
        heading: {
            english: "Human Physiology Simplified",
            tamil: "மனித உடலியல் எளிதாக்கப்பட்டது"
        },
        content: [
            {
                english: "**Analogy: The City of You**\nThink of the human body as a bustling city. Each organ system is a department with a specific job.\n- **Digestive System (Food Processing Plant):** Takes raw materials (food) and breaks them down into usable energy (nutrients) for the city.\n- **Circulatory System (Transportation Network):** The roads and highways (blood vessels) that transport oxygen, nutrients, and waste products. The heart is the central traffic hub.\n- **Respiratory System (Power Plant):** Brings in oxygen (fuel) and removes carbon dioxide (exhaust fumes).\n- **Excretory System (Waste Management):** Collects and disposes of all the waste produced by the city's activities.\n- **Nervous System (Communication & Control Center):** The internet and phone lines (nerves) that transmit messages instantly. The brain is the central server and command center.\n- **Endocrine System (Postal Service):** A slower, message-based system using hormones (letters) sent through the bloodstream to deliver instructions to different parts of the city.",
                tamil: "**ஒப்புமை: உங்கள் நகரமாகிய உடல்**\nமனித உடலை ஒரு பரபரப்பான நகரமாக நினைத்துப் பாருங்கள். ஒவ்வொரு உறுப்பு மண்டலமும் ஒரு குறிப்பிட்ட வேலையைக் கொண்ட ஒரு துறையாகும்.\n- **செரிமான அமைப்பு (உணவு பதப்படுத்தும் ஆலை):** மூலப்பொருட்களை (உணவு) எடுத்து நகரத்திற்குப் பயன்படுத்தக்கூடிய ஆற்றலாக (ஊட்டச்சத்துக்கள்) உடைக்கிறது.\n- **சுற்றோட்ட அமைப்பு (போக்குவரத்து நெட்வொர்க்):** ஆக்ஸிஜன், ஊட்டச்சத்துக்கள் மற்றும் கழிவுப் பொருட்களைக் கொண்டு செல்லும் சாலைகள் மற்றும் நெடுஞ்சாலைகள் (இரத்த நாளங்கள்). இதயம் மத்திய போக்குவரத்து மையமாகும்.\n- **சுவாச அமைப்பு (மின் நிலையம்):** ஆக்ஸிஜனை (எரிபொருள்) உள்ளே கொண்டு வந்து கார்பன் டை ஆக்சைடை (புகை) நீக்குகிறது.\n- **கழிவு நீக்க அமைப்பு (கழிவு மேலாண்மை):** நகரத்தின் செயல்பாடுகளால் உற்பத்தி செய்யப்படும் அனைத்து கழிவுகளையும் சேகரித்து அப்புறப்படுத்துகிறது.\n- **நரம்பு மண்டலம் (தகவல் தொடர்பு மற்றும் கட்டுப்பாட்டு மையம்):** செய்திகளை உடனடியாக அனுப்பும் இணையம் மற்றும் தொலைபேசி இணைப்புகள் (நரம்புகள்). மூளை மத்திய சர்வர் மற்றும் கட்டளை மையமாகும்.\n- **நாளமில்லாச் சுரப்பி மண்டலம் (தபால் சேவை):** இரத்த ஓட்டம் மூலம் அனுப்பப்படும் ஹார்மோன்கள் (கடிதங்கள்) மூலம் நகரத்தின் வெவ்வேறு பகுதிகளுக்கு வழிமுறைகளை வழங்க மெதுவான, செய்தி அடிப்படையிலான அமைப்பு."
            }
        ]
    },
    {
        heading: {
            english: "Genetics & Evolution Explained",
            tamil: "மரபியல் மற்றும் பரிணாமம் விளக்கப்பட்டது"
        },
        content: [
            {
                english: "**Analogy: The Recipe Book of Life**\n- **DNA (The Master Recipe Book):** Contains all the recipes (genes) to build and run the entire organism.\n- **Gene (A Single Recipe):** One instruction for a specific trait, like eye color or height.\n- **Allele (Recipe Variation):** Different versions of the same recipe. For eye color, the alleles might be 'brown eyes' or 'blue eyes'.\n- **Dominant vs. Recessive Alleles:** A dominant recipe (e.g., brown eyes) will be used even if a recessive one (blue eyes) is present. The recessive recipe is only used if two copies of it exist.\n- **Evolution (Recipe Book Editing):** Over millions of years, small changes (mutations) occur in the recipes. If a new recipe version helps the organism survive better in its environment, it's more likely to be passed on to the next generation. This slow process of recipe improvement is Natural Selection.",
                tamil: "**ஒப்புமை: வாழ்வின் சமையல் புத்தகம்**\n- **டிஎன்ஏ (முதன்மையான சமையல் புத்தகம்):** முழு உயிரினத்தையும் உருவாக்க மற்றும் இயக்க அனைத்து சமையல் குறிப்புகளையும் (மரபணுக்கள்) கொண்டுள்ளது.\n- **மரபணு (ஒரு தனிப்பட்ட சமையல் குறிப்பு):** கண் நிறம் அல்லது உயரம் போன்ற ஒரு குறிப்பிட்ட பண்புக்கான ஒரு அறிவுறுத்தல்.\n- **அலீல் (சமையல் குறிப்பு மாறுபாடு):** ஒரே சமையல் குறிப்பின் வெவ்வேறு பதிப்புகள். கண் நிறத்திற்கு, அலீல்கள் 'பழுப்பு கண்கள்' அல்லது 'நீலக் கண்கள்' ஆக இருக்கலாம்.\n- **ஓங்கு மற்றும் ஒடுங்கு அலீல்கள்:** ஒரு ஓங்கு சமையல் குறிப்பு (எ.கா., பழுப்பு கண்கள்) ஒரு ஒடுங்கு சமையல் குறிப்பு (நீலக் கண்கள்) இருந்தாலும் பயன்படுத்தப்படும். ஒடுங்கு சமையல் குறிப்பு அதன் இரண்டு பிரதிகள் இருந்தால் மட்டுமே பயன்படுத்தப்படும்.\n- **பரிணாமம் (சமையல் புத்தகத் திருத்தம்):** மில்லியன் கணக்கான ஆண்டுகளில், சமையல் குறிப்புகளில் சிறிய மாற்றங்கள் (பிறழ்வுகள்) ஏற்படுகின்றன. ஒரு புதிய சமையல் குறிப்பு பதிப்பு உயிரினம் அதன் சூழலில் சிறப்பாக வாழ உதவினால், அது அடுத்த தலைமுறைக்கு அனுப்பப்படுவதற்கான வாய்ப்புகள் அதிகம். இந்த மெதுவான சமையல் குறிப்பு மேம்பாட்டு செயல்முறை இயற்கைத் தேர்வு ஆகும்."
            }
        ]
    },
    {
        heading: {
            english: "Plant Physiology Made Simple",
            tamil: "தாவர உடலியல் எளிதானது"
        },
        content: [
             {
                english: "**Photosynthesis (The Plant's Kitchen):** Plants use sunlight (the stove), water (from the roots), and carbon dioxide (from the air) to cook their own food (glucose/sugar). Oxygen is the leftover 'steam' that is released.\n\n**Respiration (Eating the Food):** Just like us, plants need to break down the food they made to get energy for growth and other activities. They 'eat' the glucose, using oxygen and releasing carbon dioxide. Yes, plants breathe too!\n\n**Transpiration (The Plant's A/C):** This is how plants 'sweat'. Water evaporates from tiny pores in their leaves called stomata. This process pulls more water up from the roots, bringing nutrients along with it, and also cools the plant down.",
                tamil: "**ஒளிச்சேர்க்கை (தாவரத்தின் சமையலறை):** தாவரங்கள் சூரிய ஒளி (அடுப்பு), நீர் (வேர்களில் இருந்து), மற்றும் கார்பன் டை ஆக்சைடு (காற்றில் இருந்து) ஆகியவற்றைப் பயன்படுத்தி தங்களுக்குத் தேவையான உணவை (குளுக்கோஸ்/சர்க்கரை) சமைக்கின்றன. ஆக்ஸிஜன் என்பது வெளியிடப்படும் மீதமுள்ள 'நீராவி'.\n\n**சுவாசம் (உணவை உண்ணுதல்):** நம்மைப் போலவே, தாவரங்களும் வளர்ச்சி மற்றும் பிற செயல்பாடுகளுக்கு ஆற்றலைப் பெற தாங்கள் தயாரித்த உணவை உடைக்க வேண்டும். அவை குளுக்கோஸை 'சாப்பிடுகின்றன', ஆக்ஸிஜனைப் பயன்படுத்தி கார்பன் டை ஆக்சைடை வெளியிடுகின்றன. ஆம், தாவரங்களும் சுவாசிக்கின்றன!\n\n**நீராவிப்போக்கு (தாவரத்தின் ஏ/சி):** இப்படித்தான் தாவரங்கள் 'வியர்க்கின்றன'. அவற்றின் இலைகளில் உள்ள ஸ்டோமாட்டா எனப்படும் சிறிய துளைகளிலிருந்து நீர் ஆவியாகிறது. இந்த செயல்முறை வேர்களில் இருந்து அதிக நீரை மேலே இழுக்கிறது, அதனுடன் ஊட்டச்சத்துக்களைக் கொண்டுவருகிறது, மேலும் தாவரத்தையும் குளிர்விக்கிறது."
            }
        ]
    },
    {
        heading: {
            english: "Cell Structure & Function At a Glance",
            tamil: "செல் அமைப்பு மற்றும் செயல்பாடு ஒரு பார்வையில்"
        },
        content: [
            {
                english: "**Analogy: The Cell as a Factory**\n- **Cell Membrane (Security Gate):** Controls what comes in and out of the factory.\n- **Nucleus (CEO's Office):** Contains the master blueprint (DNA) and makes all the big decisions.\n- **Mitochondria (Power Generators):** Produces energy (ATP) to power all factory operations.\n- **Ribosomes (Assembly Line Workers):** Small workers that build proteins based on instructions from the nucleus.\n- **Endoplasmic Reticulum (Conveyor Belts):** A network of passages to transport materials around the factory.\n- **Golgi Apparatus (Packaging Department):** Sorts, packages, and ships the finished products (proteins) to where they need to go.\n- **Lysosomes (Recycling & Waste Disposal):** Breaks down old parts and waste materials.",
                tamil: "**ஒப்புமை: ஒரு தொழிற்சாலையாக செல்**\n- **செல் சவ்வு (பாதுகாப்பு வாயில்):** தொழிற்சாலைக்குள் என்ன வருகிறது, வெளியே செல்கிறது என்பதைக் கட்டுப்படுத்துகிறது.\n- **நியூக்ளியஸ் (தலைமை நிர்வாக அதிகாரியின் அலுவலகம்):** முதன்மை வரைபடத்தைக் (டிஎன்ஏ) கொண்டுள்ளது மற்றும் அனைத்து பெரிய முடிவுகளையும் எடுக்கிறது.\n- **மைட்டோகாண்ட்ரியா (மின்னாக்கிகள்):** அனைத்து தொழிற்சாலை செயல்பாடுகளுக்கும் ஆற்றலை (ATP) உற்பத்தி செய்கிறது.\n- **ரைபோசோம்கள் (சட்டசபை வரிசை தொழிலாளர்கள்):** நியூக்ளியஸில் இருந்து வரும் அறிவுறுத்தல்களின் அடிப்படையில் புரதங்களை உருவாக்கும் சிறிய தொழிலாளர்கள்.\n- **எண்டோபிளாச வலைப்பின்னல் (கன்வேயர் பெல்ட்கள்):** தொழிற்சாலையைச் சுற்றி பொருட்களைக் கொண்டு செல்ல உதவும் பாதைகளின் வலையமைப்பு.\n- **கோல்கை உறுப்புகள் (பேக்கேஜிங் துறை):** முடிக்கப்பட்ட தயாரிப்புகளை (புரதங்கள்) வரிசைப்படுத்தி, பேக்கேஜ் செய்து, தேவைப்படும் இடங்களுக்கு அனுப்புகிறது.\n- **லைசோசோம்கள் (மறுசுழற்சி மற்றும் கழிவு அகற்றுதல்):** பழைய பாகங்கள் மற்றும் கழிவுப் பொருட்களை உடைக்கிறது."
            }
        ]
    },
     {
        heading: {
            english: "Ecology & Environment Core Concepts",
            tamil: "சூழலியல் மற்றும் சுற்றுச்சூழல் முக்கியக் கருத்துக்கள்"
        },
        content: [
            {
                english: "**Food Chain vs. Food Web:** A food chain is a simple, straight line (Grass → Deer → Tiger). A food web is more realistic, showing many interconnected food chains (A deer might also be eaten by a leopard, and the tiger might also eat a boar).\n\n**Ecological Pyramids:** These graphs show the distribution of energy, biomass, or numbers at different trophic (feeding) levels. The Pyramid of Energy is always upright because energy is lost as heat at each level (only about 10% is transferred up).",
                tamil: "**உணவுச் சங்கிலி vs. உணவு வலை:** ஒரு உணவுச் சங்கிலி ஒரு எளிய, நேரான கோடு (புல் → மான் → புலி). ஒரு உணவு வலை மிகவும் யதார்த்தமானது, பல ஒன்றோடொன்று இணைக்கப்பட்ட உணவுச் சங்கிலிகளைக் காட்டுகிறது (ஒரு மான் ஒரு சிறுத்தையால் உண்ணப்படலாம், மற்றும் புலி ஒரு பன்றியையும் சாப்பிடலாம்).\n\n**சூழலியல் பிரமிடுகள்:** இந்த வரைபடங்கள் வெவ்வேறு ஊட்ட நிலைகளில் (உண்ணும் நிலைகள்) ஆற்றல், உயிரிநிறை அல்லது எண்களின் விநியோகத்தைக் காட்டுகின்றன. ஆற்றல் பிரமிடு எப்போதும் நேராக இருக்கும், ஏனெனில் ஒவ்வொரு மட்டத்திலும் ஆற்றல் வெப்பமாக இழக்கப்படுகிறது (சுமார் 10% மட்டுமே மேலே மாற்றப்படுகிறது)."
            }
        ]
    },
     {
        heading: {
            english: "Understanding Biomolecules",
            tamil: "உயிரிமூலக்கூறுகளைப் புரிந்துகொள்ளுதல்"
        },
        content: [
            {
                english: "**Analogy: Building Blocks (LEGOs)**\n- **Carbohydrates (Quick Energy Bricks):** Simple sugars like glucose are single LEGO bricks, providing quick energy. Complex carbs like starch are long chains of these bricks, for storing energy.\n- **Lipids/Fats (Insulation & Long-Term Energy Bricks):** These are the 'waterproof' bricks, great for building cell membranes and storing a lot of energy for later.\n- **Proteins (The LEGO Machines):** Made from amino acid bricks, proteins are the machines that do everything: build structures (like collagen), transport things (hemoglobin), and speed up reactions (enzymes).\n- **Nucleic Acids (The Instruction Manual):** DNA and RNA are the instruction manuals for how to put all the other LEGO bricks together correctly.",
                tamil: "**ஒப்புமை: கட்டுமானக் கற்கள் (LEGOs)**\n- **கார்போஹைட்ரேட்டுகள் (விரைவு ஆற்றல் செங்கற்கள்):** குளுக்கோஸ் போன்ற எளிய சர்க்கரைகள் ஒற்றை LEGO செங்கற்கள், விரைவான ஆற்றலை வழங்குகின்றன. ஸ்டார்ச் போன்ற சிக்கலான கார்போஹைட்ரேட்டுகள் இந்த செங்கற்களின் நீண்ட சங்கிலிகள், ஆற்றலைச் சேமிப்பதற்காக.\n- **கொழுப்புகள் (காப்பு மற்றும் நீண்ட கால ஆற்றல் செங்கற்கள்):** இவை 'நீர்ப்புகா' செங்கற்கள், செல் சவ்வுகளைக் கட்டுவதற்கும், பின்னர் பயன்படுத்த அதிக ஆற்றலைச் சேமிப்பதற்கும் சிறந்தவை.\n- **புரதங்கள் (LEGO இயந்திரங்கள்):** அமினோ அமில செங்கற்களால் ஆனது, புரதங்கள் எல்லாவற்றையும் செய்யும் இயந்திரங்கள்: கட்டமைப்புகளை உருவாக்குதல் (கொலாஜன் போன்றவை), பொருட்களைக் கொண்டு செல்லுதல் (ஹீமோகுளோபின்), மற்றும் வினைகளை விரைவுபடுத்துதல் (நொதிகள்).\n- **நியூக்ளிக் அமிலங்கள் (வழிமுறை கையேடு):** டிஎன்ஏ மற்றும் ஆர்என்ஏ ஆகியவை மற்ற அனைத்து LEGO செங்கற்களையும் சரியாக ஒன்றாக வைப்பதற்கான வழிமுறை கையேடுகள்."
            }
        ]
    },
     {
        heading: {
            english: "Reproduction Basics",
            tamil: "இனப்பெருக்க அடிப்படைகள்"
        },
        content: [
            {
                english: "**Gametogenesis (Making the Messengers):** This is the process of creating specialized messenger cells (gametes: sperm and egg) through meiosis. The key point is that these cells have only half the normal number of chromosomes, so when they combine, the baby gets the correct total number.\n\n**Hormonal Regulation (The Project Managers):** Think of hormones like project managers for reproduction.\n- **In Males:** FSH tells the factory (testes) to start making sperm. LH tells it to produce testosterone (the main project supervisor).\n- **In Females:** FSH and LH work together in a monthly cycle to prepare an egg and get the uterus ready for a potential pregnancy. Estrogen and Progesterone are the site managers ensuring everything is built correctly.",
                tamil: "**கேметоஜெனிசிஸ் (தூதர்களை உருவாக்குதல்):** இது மயோசிஸ் மூலம் சிறப்புத் தூதர் செல்களை (கேமட்கள்: விந்து மற்றும் முட்டை) உருவாக்கும் செயல்முறையாகும். முக்கிய அம்சம் என்னவென்றால், இந்த செல்கள் சாதாரண எண்ணிக்கையிலான குரோமோசோம்களில் பாதியை மட்டுமே கொண்டுள்ளன, எனவே அவை இணையும்போது, குழந்தைக்கு சரியான மொத்த எண்ணிக்கை கிடைக்கிறது.\n\n**ஹார்மோன் கட்டுப்பாடு (திட்ட மேலாளர்கள்):** இனப்பெருக்கத்திற்கான திட்ட மேலாளர்களைப் போல ஹார்மோன்களை நினைத்துப் பாருங்கள்.\n- **ஆண்களில்:** FSH தொழிற்சாலைக்கு (விரைகள்) விந்தணுக்களை உருவாக்கத் தொடங்கச் சொல்கிறது. LH அதை டெஸ்டோஸ்டிரோன் (முக்கிய திட்ட மேற்பார்வையாளர்) தயாரிக்கச் சொல்கிறது.\n- **பெண்களில்:** FSH மற்றும் LH ஆகியவை ஒரு முட்டையைத் தயாரித்து, கருப்பையை ஒரு சாத்தியமான கர்ப்பத்திற்குத் தயார்படுத்த மாதாந்திர சுழற்சியில் ஒன்றாக வேலை செய்கின்றன. ஈஸ்ட்ரோஜன் மற்றும் புரோஜெஸ்ட்டிரோன் ஆகியவை அனைத்தும் சரியாகக் கட்டப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தும் தள மேலாளர்கள்."
            }
        ]
    }
  ],

  workedExamples: [
    {
        title: "Monohybrid Cross (Genetics)",
        titleTamil: "ஒருபண்புக் கலப்பு (மரபியல்)",
        difficulty: 'Easy',
        problem: 'In pea plants, tall (T) is dominant to dwarf (t). If a heterozygous tall plant (Tt) is crossed with a dwarf plant (tt), what is the probability of the offspring being dwarf?',
        problemTamil: 'பட்டாணிச் செடிகளில், நெட்டை (T) குட்டைக்கு (t) ஓங்கிய பண்பாகும். ஒரு கலப்பின நெட்டைச் செடியை (Tt) ஒரு குட்டைச் செடியுடன் (tt) கலப்பு செய்தால், சந்ததி குட்டையாக இருப்பதற்கான நிகழ்தகவு என்ன?',
        solutionSteps: [
            {
                step: 1,
                explanation: "First, identify the genotypes of the parents.",
                explanationTamil: "முதலில், பெற்றோரின் மரபணு வகைகளை அடையாளம் காணவும்.",
                calculation: 'Parent 1 (heterozygous tall) = Tt\nParent 2 (dwarf) = tt'
            },
            {
                step: 2,
                explanation: "Next, determine the possible gametes (alleles) each parent can produce.",
                explanationTamil: "அடுத்து, ஒவ்வொரு பெற்றோரும் உருவாக்கக்கூடிய சாத்தியமான கேமட்களை (அலீல்கள்) தீர்மானிக்கவும்.",
                calculation: 'Parent 1 (Tt) can produce T and t gametes.\nParent 2 (tt) can only produce t gametes.'
            },
            {
                step: 3,
                explanation: "Set up a Punnett square to visualize the possible combinations for the offspring.",
                explanationTamil: "சந்ததிக்கான சாத்தியமான சேர்க்கைகளைக் காட்சிப்படுத்த ஒரு புன்னட் கட்டத்தை அமைக்கவும்.",
                calculation: `      t       t\n   +-------+-------+\n T |   Tt    |   Tt    |\n   +-------+-------+\n t |   tt    |   tt    |\n   +-------+-------+`
            },
            {
                step: 4,
                explanation: "Analyze the results from the Punnett square to find the probability.",
                explanationTamil: "நிகழ்தகவைக் கண்டறிய புன்னட் கட்டத்திலிருந்து முடிவுகளைப் பகுப்பாய்வு செய்யுங்கள்.",
                calculation: "The possible genotypes for the offspring are Tt and tt. Out of 4 possible outcomes, 2 are 'tt' (dwarf). Therefore, the probability is 2/4 = 1/2 or 50%."
            }
        ],
        answer: "The probability of the offspring being dwarf (tt) is 50%.",
        neetHack: "For a test cross (crossing with a homozygous recessive individual), the ratio of phenotypes in the offspring directly reveals the gametes produced by the dominant parent. Here, a 1:1 ratio of tall to dwarf offspring confirms the heterozygous (Tt) nature of the tall parent.",
        neetHackTamil: "ஒரு சோதனைக் கலப்பில் (ஒடுங்கிய பண்பு கொண்ட பெற்றோருடன் கலப்பு செய்தல்), சந்ததிகளில் உள்ள புறத்தோற்ற விகிதம் ஓங்கிய பண்பு கொண்ட பெற்றோரால் உருவாக்கப்பட்ட கேமட்களை நேரடியாக வெளிப்படுத்துகிறது. இங்கே, நெட்டை மற்றும் குட்டை சந்ததிகளின் 1:1 விகிதம், நெட்டைப் பெற்றோர் ஒரு கலப்பினம் (Tt) என்பதை உறுதிப்படுத்துகிறது."
    },
    {
      title: "Cardiac Output Calculation (Human Physiology)",
      titleTamil: "இதய வெளியீட்டு கணக்கீடு (மனித உடலியல்)",
      difficulty: 'Medium',
      problem: "If a person's heart rate is 70 beats/minute and their stroke volume (the volume of blood pumped from one ventricle of the heart with each beat) is 70 mL/beat, what is their cardiac output?",
      problemTamil: "ஒரு நபரின் இதயத் துடிப்பு நிமிடத்திற்கு 70 துடிப்புகள் மற்றும் அவரது ஒருதுடிப்பு கொள்ளளவு (ஒவ்வொரு துடிப்பிலும் இதயத்தின் ஒரு வென்ட்ரிக்கிளிலிருந்து வெளியேற்றப்படும் இரத்தத்தின் அளவு) 70 மி.லி/துடிப்பு எனில், அவரது இதய வெளியீடு என்ன?",
      solutionSteps: [
        {
          step: 1,
          explanation: "Recall the formula for Cardiac Output (CO).",
          explanationTamil: "இதய வெளியீட்டிற்கான (CO) சூத்திரத்தை நினைவுகூருங்கள்.",
          calculation: "Cardiac Output (CO) = Heart Rate (HR) × Stroke Volume (SV)"
        },
        {
          step: 2,
          explanation: "Substitute the given values into the formula.",
          explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை சூத்திரத்தில் பிரதியிடவும்.",
          calculation: "CO = 70 beats/min × 70 mL/beat"
        },
        {
          step: 3,
          explanation: "Calculate the result in mL/minute.",
          explanationTamil: "மி.லி/நிமிடத்தில் முடிவைக் கணக்கிடுங்கள்.",
          calculation: "CO = 4900 mL/min"
        },
        {
          step: 4,
          explanation: "Convert the result to Litres/minute for standard representation (since 1000 mL = 1 L).",
          explanationTamil: "நிலையான குறிப்பிடுதலுக்காக முடிவை லிட்டர்/நிமிடத்திற்கு மாற்றவும் (1000 மி.லி = 1 லி).",
          calculation: "CO = 4.9 L/min"
        }
      ],
      answer: "The cardiac output is 4.9 Litres per minute.",
      commonPitfall: "Forgetting to convert the final answer from milliliters (mL) to Liters (L). Most standard values for cardiac output are given in L/min, so this final conversion step is crucial.",
      commonPitfallTamil: "இறுதி பதிலை மில்லிலிட்டரிலிருந்து (mL) லிட்டருக்கு (L) மாற்ற மறப்பது. இதய வெளியீட்டிற்கான பெரும்பாலான நிலையான மதிப்புகள் L/min இல் கொடுக்கப்பட்டுள்ளன, எனவே இந்த இறுதி மாற்றுப் படி முக்கியமானது."
    }
  ],
  
  // Placeholder for other sections
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: [],
  keyTakeaways: [],
  mnemonics: [],
  neetTips: [],
  validationReport: [],
};
