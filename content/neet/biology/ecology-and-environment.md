import { NeetModule } from "../../types/neet/module";

const module: NeetModule = {
  chapter: "Ecology and Environment",
  subject: "Biology",
  class: 12,
  nextModule: {
    chapter: "Biodiversity and Conservation",
    slug: "biodiversity-and-conservation",
  },
  sections: [
    {
      type: "Learn",
      content: [
        {
          type: "heading",
          level: 2,
          en: "Introduction to Ecology",
          ta: "சூழலியல் அறிமுகம்",
        },
        {
          type: "paragraph",
          en: "Ecology is the branch of biology that deals with the study of interactions among organisms and between the organism and its physical (abiotic) environment. The term ecology was coined by Ernst Haeckel in 1869. The four levels of biological organisation are organism, population, community and biome.",
          ta: "சூழலியல் என்பது உயிரினங்களுக்கிடையேயான தொடர்புகள் மற்றும் உயிரினங்களுக்கும் அவற்றின் இயற்பியல் (உயிரற்ற) சூழலுக்கும் இடையிலான தொடர்புகளைப் படிக்கும் உயிரியலின் ஒரு கிளையாகும். சூழலியல் என்ற சொல் 1869 இல் எர்ன்ஸ்ட் ஹெக்கல் என்பவரால் உருவாக்கப்பட்டது. உயிரியல் அமைப்பின் நான்கு நிலைகள் உயிரினம், மக்கள் தொகை, சமூகம் மற்றும் உயிரிப்பகுதி ஆகும்.",
        },
        {
          type: "interactive-diagram",
          url: "https://example.com/interactive/ecology_levels_animated",
          alt: "Interactive diagram showing levels of ecological organization from organism to biosphere",
          title: {
            en: "Levels of Ecological Organization",
            ta: "சூழலியல் அமைப்பின் நிலைகள்",
          },
          description: {
            en: "Explore the hierarchy from organism to biosphere, understanding how each level interacts and builds upon the last. Click on each level to see detailed examples and definitions.",
            ta: "உயிரினத்திலிருந்து உயிர்மண்டலம் வரையிலான படிநிலைகளை ஆராய்ந்து, ஒவ்வொரு மட்டமும் எவ்வாறு தொடர்பு கொள்கிறது மற்றும் முந்தைய மட்டத்தின் மீது எவ்வாறு உருவாகிறது என்பதைப் புரிந்து கொள்ளுங்கள். ஒவ்வொரு மட்டத்தையும் கிளிக் செய்து விரிவான எடுத்துக்காட்டுகள் மற்றும் வரையறைகளைப் பார்க்கவும்.",
          },
        },
        {
          type: "heading",
          level: 3,
          en: "Organism and its Environment",
          ta: "உயிரினம் மற்றும் அதன் சூழல்",
        },
        {
          type: "paragraph",
          en: "At the organismic level, ecology tries to understand how different organisms are adapted to their environments in terms of survival and reproduction. The rotation of the Earth around its axis and its annual revolution around the sun cause major annual variations in temperature and intensity of light, resulting in the formation of major biomes like deserts, rainforests, grasslands, etc. Abiotic factors are non-living chemical and physical parts of the environment that affect living organisms and the functioning of ecosystems. Major abiotic factors include temperature, water, light, and soil.",
          ta: "உயிரின மட்டத்தில், சூழலியல் வெவ்வேறு உயிரினங்கள் உயிர்வாழ்வு மற்றும் இனப்பெருக்கம் அடிப்படையில் தங்கள் சூழல்களுக்கு எவ்வாறு ஒத்துப்போகின்றன என்பதைப் புரிந்துகொள்ள முயற்சிக்கிறது. பூமியின் அதன் அச்சில் சுழற்சி மற்றும் சூரியனைச் சுற்றி அதன் ஆண்டுப் புரட்சி ஆகியவை வெப்பநிலை மற்றும் ஒளியின் தீவிரத்தன்மையில் பெரிய ஆண்டு மாறுபாடுகளை ஏற்படுத்துகின்றன, இதன் விளைவாக பாலைவனங்கள், மழைக்காடுகள், புல்வெளிகள் போன்ற முக்கிய உயிர்மண்டலங்கள் உருவாகின்றன. உயிரற்ற காரணிகள் என்பது சுற்றுச்சூழல் அமைப்புகளின் செயல்பாடுகளை பாதிக்கும் உயிரற்ற இரசாயன மற்றும் இயற்பியல் பகுதிகளாகும். முக்கிய உயிரற்ற காரணிகளில் வெப்பநிலை, நீர், ஒளி மற்றும் மண் ஆகியவை அடங்கும்.",
        },
        {
          type: "list",
          items: [
            {
              en: "**Temperature (வெப்பநிலை):** It is the most ecologically relevant environmental factor. It affects the kinetics of enzymes and the metabolic activity and other physiological functions of the organism.",
              ta: "**Temperature (வெப்பநிலை):** இது சூழலியல் ரீதியாக மிகவும் பொருத்தமான சுற்றுச்சூழல் காரணியாகும். இது என்சைம்களின் இயக்கவியல் மற்றும் உயிரினத்தின் வளர்சிதை மாற்ற செயல்பாடு மற்றும் பிற உடலியல் செயல்பாடுகளை பாதிக்கிறது.",
            },
            {
              en: "**Water (நீர்):** Life on Earth originated in water and is unsustainable without water. For aquatic organisms, the quality (chemical composition, pH) of water becomes important.",
              ta: "**Water (நீர்):** பூமியில் உயிர் நீரில் தோன்றியது மற்றும் நீர் இல்லாமல் நிலைத்திருக்க முடியாது. நீர்வாழ் உயிரினங்களுக்கு, நீரின் தரம் (வேதியியல் கலவை, pH) முக்கியமாகிறது.",
            },
            {
              en: "**Light (ஒளி):** For plants, light is essential for photosynthesis. For many animals, light is important in terms of its intensity and photoperiodic requirements for foraging, reproductive, and migratory activities.",
              ta: "**Light (ஒளி):** தாவரங்களுக்கு, ஒளி ஒளிச்சேர்க்கைக்கு அத்தியாவசியமானது. பல விலங்குகளுக்கு, ஒளி அதன் தீவிரம் மற்றும் உணவளித்தல், இனப்பெருக்கம் மற்றும் இடம்பெயர்வு நடவடிக்கைகளுக்கு ஒளிக்கால தேவைகள் அடிப்படையில் முக்கியமானது.",
            },
            {
              en: "**Soil (மண்):** The nature and properties of soil vary with the climate and the weathering process. It determines the type of vegetation and animals in an area. Factors like soil composition, grain size, and aggregation determine the percolation and water holding capacity of the soils.",
              ta: "**Soil (மண்):** மண்ணின் தன்மை மற்றும் பண்புகள் காலநிலை மற்றும் வானிலை செயல்முறைக்கு ஏற்ப மாறுபடும். இது ஒரு பகுதியில் உள்ள தாவரங்கள் மற்றும் விலங்குகளின் வகையை தீர்மானிக்கிறது. மண்ணின் கலவை, தானிய அளவு மற்றும் சேர்க்கை போன்ற காரணிகள் மண்ணின் ஊடுருவல் மற்றும் நீர் பிடிப்பு திறனை தீர்மானிக்கின்றன.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          en: "Responses to Abiotic Factors",
          ta: "உயிரற்ற காரணிகளுக்கு பதில்கள்",
        },
        {
          type: "paragraph",
          en: "Organisms maintain a constant internal environment (homeostasis) despite external fluctuations. This is achieved through various mechanisms:",
          ta: "உயிரினங்கள் வெளிப்புற ஏற்ற இறக்கங்கள் இருந்தபோதிலும் நிலையான உள் சூழலை (சமநிலை) பராமரிக்கின்றன. இது பல்வேறு வழிமுறைகள் மூலம் அடையப்படுகிறது:",
        },
        {
          type: "list",
          items: [
            {
              en: "**Regulate (ஒழுங்குபடுத்துதல்):** Some organisms are able to maintain homeostasis by physiological means, which ensures constant body temperature and constant osmotic concentration. All birds and mammals, and a very few lower vertebrates and invertebrates are indeed capable of such regulation (thermoregulation and osmoregulation).",
              ta: "**Regulate (ஒழுங்குபடுத்துதல்):** சில உயிரினங்கள் உடலியல் வழிமுறைகள் மூலம் சமநிலையை பராமரிக்க முடியும், இது நிலையான உடல் வெப்பநிலையையும் நிலையான சவ்வூடுபரவல் செறிவையும் உறுதி செய்கிறது. அனைத்து பறவைகள் மற்றும் பாலூட்டிகள், மற்றும் மிகச் சில குறைந்த முதுகெலும்பிகள் மற்றும் முதுகெலும்பற்றவை உண்மையில் இத்தகைய ஒழுங்குபடுத்தலை (வெப்ப ஒழுங்குபடுத்தல் மற்றும் சவ்வூடுபரவல் ஒழுங்குபடுத்தல்) செய்யக்கூடியவை.",
            },
            {
              en: "**Conform (இணங்குதல்):** An overwhelming majority (99%) of animals and nearly all plants cannot maintain a constant internal environment. Their body temperature changes with the ambient temperature. In aquatic animals, the osmotic concentration of the body fluids changes with that of the ambient water osmotic concentration. Such animals and plants are simply conformers.",
              ta: "**Conform (இணங்குதல்):** பெரும்பாலான (99%) விலங்குகள் மற்றும் கிட்டத்தட்ட அனைத்து தாவரங்களும் நிலையான உள் சூழலை பராமரிக்க முடியாது. அவற்றின் உடல் வெப்பநிலை சுற்றுப்புற வெப்பநிலைக்கு ஏற்ப மாறுகிறது. நீர்வாழ் விலங்குகளில், உடல் திரவங்களின் சவ்வூடுபரவல் செறிவானது சுற்றுப்புற நீரின் சவ்வூடுபரவல் செறிவுக்கு ஏற்ப மாறுகிறது. இத்தகைய விலங்குகள் மற்றும் தாவரங்கள் வெறுமனே இணங்குபவை.",
            },
            {
              en: "**Migrate (இடம்பெயர்தல்):** The organism can move away temporarily from the stressful habitat to a more hospitable area and return when the stressful period is over. e.g., birds from Siberia to Keoladeo National Park, Rajasthan.",
              ta: "**Migrate (இடம்பெயர்தல்):** உயிரினம் தற்காலிகமாக அழுத்தமான வாழ்விடத்திலிருந்து மிகவும் வசதியான பகுதிக்கு இடம்பெயர்ந்து, அழுத்தமான காலம் முடிந்ததும் திரும்பலாம். எ.கா., சைபீரியாவிலிருந்து ராஜஸ்தானின் கியோலாடியோ தேசிய பூங்காவிற்கு பறவைகள்.",
            },
            {
              en: "**Suspend (தற்காலிகமாக நிறுத்துதல்):** In bacteria, fungi, and lower plants, various kinds of thick-walled spores are formed which help them to survive unfavorable conditions. In higher plants, seeds and some other vegetative propagules serve as means to tide over periods of stress besides helping in dispersal. Some animals can go into hibernation (e.g., bears) or aestivation (e.g., snails, fish).",
              ta: "**Suspend (தற்காலிகமாக நிறுத்துதல்):** பாக்டீரியா, பூஞ்சை மற்றும் குறைந்த தாவரங்களில், பல்வேறு வகையான தடித்த சுவர் கொண்ட ஸ்போர்கள் உருவாகின்றன, அவை பாதகமான நிலைமைகளைத் தாங்க உதவுகின்றன. உயர் தாவரங்களில், விதைகள் மற்றும் சில பிற தாவரப் பரப்புதல்கள் பரவல் தவிர, அழுத்தமான காலங்களைத் தாங்க ஒரு வழியாக செயல்படுகின்றன. சில விலங்குகள் குளிர்கால உறக்கத்திற்கு (எ.கா., கரடிகள்) அல்லது கோடைக்கால உறக்கத்திற்கு (எ.கா., நத்தைகள், மீன்கள்) செல்லலாம்.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          en: "Populations",
          ta: "மக்கள் தொகைகள்",
        },
        {
          type: "paragraph",
          en: "A population is a group of individuals of the same species living in a well-defined geographical area, sharing or competing for similar resources and potentially interbreeding. The size of the population for any species is not a static parameter but changes with time, depending on food availability, predation pressure, and weather.",
          ta: "ஒரு மக்கள் தொகை என்பது ஒரே இனத்தைச் சேர்ந்த உயிரினங்களின் குழுவாகும், அவை நன்கு வரையறுக்கப்பட்ட புவியியல் பகுதியில் வாழ்கின்றன, ஒத்த வளங்களைப் பகிர்ந்து கொள்கின்றன அல்லது போட்டியிடுகின்றன மற்றும் இனப்பெருக்கம் செய்யக்கூடியவை. எந்த இனத்திற்கும் மக்கள் தொகையின் அளவு ஒரு நிலையான அளவுரு அல்ல, ஆனால் உணவு கிடைப்பது, வேட்டையாடுதல் அழுத்தம் மற்றும் வானிலை ஆகியவற்றைப் பொறுத்து காலப்போக்கில் மாறுகிறது.",
        },
        {
          type: "heading",
          level: 3,
          en: "Population Attributes",
          ta: "மக்கள் தொகை பண்புகள்",
        },
        {
          type: "list",
          items: [
            {
              en: "**Birth Rate (பிறப்பு விகிதம்):** The number of births per 1000 individuals in a population per year.",
              ta: "**Birth Rate (பிறப்பு விகிதம்):** ஒரு மக்கள் தொகையில் ஒரு வருடத்திற்கு 1000 நபர்களுக்கு நிகழும் பிறப்புகளின் எண்ணிக்கை.",
            },
            {
              en: "**Death Rate (இறப்பு விகிதம்):** The number of deaths per 1000 individuals in a population per year.",
              ta: "**Death Rate (இறப்பு விகிதம்):** ஒரு மக்கள் தொகையில் ஒரு வருடத்திற்கு 1000 நபர்களுக்கு நிகழும் இறப்புகளின் எண்ணிக்கை.",
            },
            {
              en: "**Sex Ratio (பாலின விகிதம்):** The ratio of males to females in a population.",
              ta: "**Sex Ratio (பாலின விகிதம்):** ஒரு மக்கள் தொகையில் ஆண் மற்றும் பெண் விகிதம்.",
            },
            {
              en: "**Age Pyramids (வயது பிரமிடுகள்):** Represent the age distribution of a population (pre-reproductive, reproductive, post-reproductive individuals). Shapes can be triangular (expanding), urn-shaped (declining), or bell-shaped (stable).",
              ta: "**Age Pyramids (வயது பிரமிடுகள்):** ஒரு மக்கள் தொகையின் வயது விநியோகத்தை (இனப்பெருக்கத்திற்கு முந்தைய, இனப்பெருக்க, இனப்பெருக்கத்திற்கு பிந்தைய நபர்கள்) குறிக்கிறது. வடிவங்கள் முக்கோண (விரிவடையும்), குடம் போன்ற (குறையும்) அல்லது மணி வடிவிலான (நிலையான) இருக்கலாம்.",
            },
            {
              en: "**Population Density (மக்கள் தொகை அடர்த்தி):** The number of individuals per unit area or volume. It can be measured as biomass, relative density, or absolute number.",
              ta: "**Population Density (மக்கள் தொகை அடர்த்தி):** ஒரு அலகு பரப்பளவு அல்லது கன அளவில் உள்ள நபர்களின் எண்ணிக்கை. இது உயிரித்தொகை, சார்பு அடர்த்தி அல்லது முழுமையான எண் என அளவிடப்படலாம்.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          en: "Population Growth Models",
          ta: "மக்கள் தொகை வளர்ச்சி மாதிரிகள்",
        },
        {
          type: "paragraph",
          en: "The growth of a population can be described by different models:",
          ta: "ஒரு மக்கள் தொகையின் வளர்ச்சியை வெவ்வேறு மாதிரிகள் மூலம் விவரிக்கலாம்:",
        },
        {
          type: "list",
          items: [
            {
              en: "**Exponential Growth (அதிவேக வளர்ச்சி):** Occurs when resources are unlimited. The equation is $\frac{dN}{dt} = rN$, where N is population size, t is time, and r is the intrinsic rate of natural increase.",
              ta: "**Exponential Growth (அதிவேக வளர்ச்சி):** வளங்கள் வரம்பற்றதாக இருக்கும்போது நிகழ்கிறது. சமன்பாடு $\frac{dN}{dt} = rN$, இதில் N என்பது மக்கள் தொகை அளவு, t என்பது நேரம், மற்றும் r என்பது இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம்.",
            },
            {
              en: "**Logistic Growth (ஏற்றுமதி வளர்ச்சி):** Occurs when resources are limited, leading to competition. The equation is $\frac{dN}{dt} = rN \left( \frac{K-N}{K} \right)$, where K is the carrying capacity (the maximum population size that the environment can sustain). This growth curve is sigmoid (S-shaped).",
              ta: "**Logistic Growth (ஏற்றுமதி வளர்ச்சி):** வளங்கள் குறைவாக இருக்கும்போது நிகழ்கிறது, இது போட்டிக்கு வழிவகுக்கிறது. சமன்பாடு $\frac{dN}{dt} = rN \left( \frac{K-N}{K} \right)$, இதில் K என்பது தாங்குதிறன் (சூழலால் தாங்கக்கூடிய அதிகபட்ச மக்கள் தொகை அளவு). இந்த வளர்ச்சி வளைவு சிக்மாய்டு (S-வடிவ) ஆகும்.",
            },
          ],
        },
        {
          type: "interactive-diagram",
          url: "https://example.com/interactive/population_growth_curves",
          alt: "Interactive diagram comparing exponential and logistic population growth curves",
          title: {
            en: "Population Growth Curves: Exponential vs. Logistic",
            ta: "மக்கள் தொகை வளர்ச்சி வளைவுகள்: அதிவேக vs. ஏற்றுமதி",
          },
          description: {
            en: "Visualize how populations grow under ideal (J-shaped, exponential) vs. limited (S-shaped, logistic) resource conditions. Adjust parameters like 'r' and 'K' to see their effects on growth patterns.",
            ta: "ஆதரிச (J-வடிவ, அதிவேக) மற்றும் வரையறுக்கப்பட்ட (S-வடிவ, ஏற்றுமதி) வள நிலைமைகளின் கீழ் மக்கள் தொகை எவ்வாறு வளர்கிறது என்பதைப் புரிந்துகொள்ளுங்கள். 'r' மற்றும் 'K' போன்ற அளவுருக்களை சரிசெய்து வளர்ச்சி முறைகளில் அவற்றின் விளைவுகளைக் காணவும்.",
          },
        },
        {
          type: "heading",
          level: 3,
          en: "Population Interactions",
          ta: "மக்கள் தொகை தொடர்புகள்",
        },
        {
          type: "paragraph",
          en: "Different species interact in various ways within a community. These interactions can be beneficial (+), detrimental (-), or neutral (0) to the species involved.",
          ta: "ஒரு சமூகத்தில் வெவ்வேறு இனங்கள் பல்வேறு வழிகளில் தொடர்பு கொள்கின்றன. இந்த தொடர்புகள் சம்பந்தப்பட்ட இனங்களுக்கு நன்மை பயக்கும் (+), தீங்கு விளைவிக்கும் (-) அல்லது நடுநிலை (0) ஆக இருக்கலாம்.",
        },
        {
          type: "table",
          headers: [
            { en: "Interaction", ta: "தொடர்பு" },
            { en: "Species A", ta: "இனம் A" },
            { en: "Species B", ta: "இனம் B" },
            { en: "Description", ta: "விளக்கம்" },
            { en: "Example", ta: "உதாரணம்" },
          ],
          rows: [
            [
              { en: "Mutualism", ta: "ஒத்துழைப்பு" },
              { en: "+", ta: "+" },
              { en: "+", ta: "+" },
              { en: "Both species benefit", ta: "இரண்டு இனங்களும் பயனடைகின்றன" },
              { en: "Lichens (fungi + algae), Mycorrhizae (fungi + higher plant roots)", ta: "லைக்கன்கள் (பூஞ்சை + பாசிகள்), மைக்கோரைசா (பூஞ்சை + உயர் தாவர வேர்கள்)" },
            ],
            [
              { en: "Competition", ta: "போட்டி" },
              { en: "-", ta: "-" },
              { en: "-", ta: "-" },\n              { en: "Both species are harmed by competing for limited resources", ta: "வரையறுக்கப்பட்ட வளங்களுக்காக போட்டியிடுவதால் இரண்டு இனங்களும் பாதிக்கப்படுகின்றன" },
              { en: "Abingdon tortoise and goats on Galapagos islands", ta: "கலபகோஸ் தீவுகளில் அவிங்டன் ஆமை மற்றும் ஆடுகள்" },
            ],
            [
              { en: "Predation", ta: "வேட்டையாடுதல்" },
              { en: "+", ta: "+" },
              { en: "-", ta: "-" },
              { en: "One species (predator) benefits, other (prey) is harmed", ta: "ஒரு இனம் (வேட்டைக்காரன்) பயனடைகிறது, மற்றொன்று (வேட்டை) பாதிக்கப்படுகிறது" },
              { en: "Tiger and deer", ta: "புலி மற்றும் மான்" },
            ],
            [
              { en: "Parasitism", ta: "ஒட்டுண்ணித்தன்மை" },
              { en: "+", ta: "+" },
              { en: "-", ta: "-" },
              { en: "One species (parasite) benefits, other (host) is harmed", ta: "ஒரு இனம் (ஒட்டுண்ணி) பயனடைகிறது, மற்றொன்று (விருந்துப்பேணி) பாதிக்கப்படுகிறது" },
              { en: "Cuscuta on host plant, Human liver fluke", ta: "விருந்துப்பேணி தாவரத்தில் கஸ்குட்டா, மனித கல்லீரல் புழு" },
            ],
            [
              { en: "Commensalism", ta: "கூட்டமைவு" },
              { en: "+", ta: "+" },
              { en: "0", ta: "0" },
              { en: "One species benefits, other is unaffected", ta: "ஒரு இனம் பயனடைகிறது, மற்றொன்று பாதிக்கப்படுவதில்லை" },
              { en: "Orchid on mango tree, Cattle egret and grazing cattle", ta: "மாமரத்தில் ஆர்க்கிட், கால்நடை எக்ரெட் மற்றும் மேய்ச்சல் மாடுகள்" },
            ],
            [
              { en: "Amensalism", ta: "எதிரிடை" },
              { en: "-", ta: "-" },
              { en: "0", ta: "0" },
              { en: "One species is harmed, other is unaffected", ta: "ஒரு இனம் பாதிக்கப்படுகிறது, மற்றொன்று பாதிக்கப்படுவதில்லை" },
              { en: "Penicillium secreting penicillin which kills bacteria", ta: "பாக்டீரியாவைக் கொல்லும் பென்சிலின் சுரக்கும் பென்சிலியம்" },
            ],
          ],
        },
        {
          type: "heading",
          level: 2,
          en: "Ecosystem",
          ta: "சூழல் மண்டலம்",
        },
        {
          type: "paragraph",
          en: "An ecosystem is a functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment. Ecosystems vary greatly in size, from a small pond to a large forest or ocean.",
          ta: "ஒரு சூழல் மண்டலம் என்பது இயற்கையின் ஒரு செயல்பாட்டு அலகு ஆகும், அங்கு வாழும் உயிரினங்கள் தங்களுக்குள்ளேயும் சுற்றியுள்ள இயற்பியல் சூழலுடனும் தொடர்பு கொள்கின்றன. சூழல் மண்டலங்கள் ஒரு சிறிய குளம் முதல் ஒரு பெரிய காடு அல்லது கடல் வரை அளவில் பெரிதும் வேறுபடுகின்றன.",
        },
        {
          type: "heading",
          level: 3,
          en: "Ecosystem Structure and Function",
          ta: "சூழல் மண்டல அமைப்பு மற்றும் செயல்பாடு",
        },
        {
          type: "list",
          items: [
            {
              en: "**Productivity (உற்பத்தித்திறன்):** The rate of biomass production. Gross Primary Productivity (GPP) is the total rate of photosynthesis, Net Primary Productivity (NPP) is GPP minus respiration (R). NPP is the available biomass for heterotrophs. Secondary productivity is the rate of new organic matter formation by consumers.",
              ta: "**Productivity (உற்பத்தித்திறன்):** உயிரித்தொகை உற்பத்தியின் விகிதம். மொத்த முதன்மை உற்பத்தித்திறன் (GPP) என்பது ஒளிச்சேர்க்கையின் மொத்த விகிதம், நிகர முதன்மை உற்பத்தித்திறன் (NPP) என்பது GPP கழித்தல் சுவாசம் (R). NPP என்பது ஹெட்ரோட்ரோப்களுக்கு கிடைக்கும் உயிரித்தொகை. இரண்டாம் நிலை உற்பத்தித்திறன் என்பது நுகர்வோரால் புதிய கரிமப் பொருள் உருவாகும் விகிதம்.",
            },
            {
              en: "**Decomposition (சிதைவுறுதல்):** The process by which decomposers (bacteria, fungi) break down complex organic matter into simpler inorganic substances like $\text{CO}_2$, water, and nutrients. Detritus (dead organic matter) is the raw material. Steps include fragmentation, leaching, catabolism, humification, and mineralization.",
              ta: "**Decomposition (சிதைவுறுதல்):** சிக்கலான கரிமப் பொருட்களை $\text{CO}_2$, நீர் மற்றும் ஊட்டச்சத்துக்கள் போன்ற எளிய கனிமப் பொருட்களாக சிதைப்பவர்கள் (பாக்டீரியா, பூஞ்சை) பிரிக்கும் செயல்முறை. சிதைவு (இறந்த கரிமப் பொருள்) மூலப்பொருள் ஆகும். படிகள் துண்டு துண்டாக்குதல், கசிவு, கேடபாலிசம், ஹியூமிஃபிகேஷன் மற்றும் தாதுமயமாக்கல் ஆகியவை அடங்கும்.",
            },
            {
              en: "**Energy Flow (ஆற்றல் ஓட்டம்):** Energy flows unidirectionally from producers to consumers. The 10% law states that only 10% of the energy is transferred from one trophic level to the next; the rest is lost as heat. Food chain and food web depict energy flow.",
              ta: "**Energy Flow (ஆற்றல் ஓட்டம்):** ஆற்றல் உற்பத்தியாளர்களிடமிருந்து நுகர்வோருக்கு ஒரு திசையில் பாய்கிறது. 10% விதி என்னவென்றால், ஆற்றலில் 10% மட்டுமே ஒரு ஊட்டச்சத்து மட்டத்திலிருந்து அடுத்ததற்கு மாற்றப்படுகிறது; மீதமுள்ளவை வெப்பமாக இழக்கப்படுகின்றன. உணவு சங்கிலி மற்றும் உணவு வலை ஆற்றல் ஓட்டத்தை சித்தரிக்கின்றன.",
            },
            {
              en: "**Nutrient Cycling (ஊட்டச்சத்து சுழற்சி):** The movement of nutrient elements (e.g., carbon, nitrogen, phosphorus, sulfur) through the various components of an ecosystem. Gaseous cycles (carbon, nitrogen) and sedimentary cycles (phosphorus, sulfur) are major types.",
              ta: "**Nutrient Cycling (ஊட்டச்சத்து சுழற்சி):** ஒரு சூழல் மண்டலத்தின் பல்வேறு கூறுகள் வழியாக ஊட்டச்சத்து தனிமங்களின் (எ.கா., கார்பன், நைட்ரஜன், பாஸ்பரஸ், சல்பர்) இயக்கம். வாயு சுழற்சிகள் (கார்பன், நைட்ரஜன்) மற்றும் படிவு சுழற்சிகள் (பாஸ்பரஸ், சல்பர்) முக்கிய வகைகள்.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          en: "Ecological Succession",
          ta: "சூழலியல் தொடர்ச்சி",
        },
        {
          type: "paragraph",
          en: "The gradual and predictable change in the species composition of an area over time. This happens in an orderly and sequential manner. The entire sequence of communities that successively change in a given area is called sere. The individual transitional communities are termed seral stages or seral communities. The community that is in near equilibrium with the environment and is stable is called the climax community.",
          ta: "ஒரு குறிப்பிட்ட பகுதியில் காலப்போக்கில் இன அமைப்பில் ஏற்படும் படிப்படியான மற்றும் கணிக்கக்கூடிய மாற்றம். இது ஒரு ஒழுங்கான மற்றும் தொடர்ச்சியான முறையில் நிகழ்கிறது. ஒரு குறிப்பிட்ட பகுதியில் தொடர்ந்து மாறக்கூடிய சமூகங்களின் முழு வரிசையும் செரே என்று அழைக்கப்படுகிறது. தனிப்பட்ட மாறுதல் சமூகங்கள் செரல் நிலைகள் அல்லது செரல் சமூகங்கள் என்று அழைக்கப்படுகின்றன. சுற்றுச்சூழலுடன் கிட்டத்தட்ட சமநிலையில் இருக்கும் மற்றும் நிலையான சமூகமே உச்சநிலை சமூகமாக அழைக்கப்படுகிறது.",
        },
        {
          type: "list",
          items: [
            {
              en: "**Primary Succession (முதன்மை தொடர்ச்சி):** Starts in an area where no living organisms ever existed, e.g., newly cooled lava, bare rock, newly created pond. It is a very slow process.",
              ta: "**Primary Succession (முதன்மை தொடர்ச்சி):** இதற்கு முன் எந்த உயிரினங்களும் இல்லாத ஒரு பகுதியில் தொடங்குகிறது, எ.கா., புதிதாக குளிர்ந்த எரிமலைக்குழம்பு, வெற்று பாறை, புதிதாக உருவாக்கப்பட்ட குளம். இது ஒரு மிக மெதுவான செயல்முறை.",
            },
            {
              en: "**Secondary Succession (இரண்டாம் நிலை தொடர்ச்சி):** Starts in areas where natural biotic communities have been destroyed, but soil or sediment is still present, e.g., abandoned farmlands, burned or cut forests. It is faster than primary succession.",
              ta: "**Secondary Succession (இரண்டாம் நிலை தொடர்ச்சி):** இயற்கை உயிரியல் சமூகங்கள் அழிக்கப்பட்ட பகுதிகளில் தொடங்குகிறது, ஆனால் மண் அல்லது வண்டல் இன்னும் உள்ளது, எ.கா., கைவிடப்பட்ட விவசாய நிலங்கள், எரிக்கப்பட்ட அல்லது வெட்டப்பட்ட காடுகள். இது முதன்மை தொடர்ச்சியை விட வேகமாக இருக்கும்.",
            },
          ],
        },
        {
          type: "heading",
      
          level: 3,
          en: "Ecological Pyramids",
          ta: "சூழலியல் பிரமிடுகள்",
        },
        {
          type: "paragraph",
          en: "Graphical representations of the relationships between different trophic levels in an ecosystem. They can be pyramids of numbers, biomass, or energy.",
          ta: "ஒரு சூழல் மண்டலத்தில் வெவ்வேறு ஊட்டச்சத்து மட்டங்களுக்கு இடையிலான உறவுகளின் வரைபடப் பிரதிநிதித்துவங்கள். அவை எண்ணிக்கையின் பிரமிடுகள், உயிரித்தொகை அல்லது ஆற்றலின் பிரமிடுகள் ஆக இருக்கலாம்.",
        },
        {
          type: "list",
          items: [
            {
              en: "**Pyramid of Number (எண்ணிக்கை பிரமிடு):** Shows the number of individual organisms at each trophic level. Can be upright or inverted (e.g., a single large tree supporting many birds).",
              ta: "**Pyramid of Number (எண்ணிக்கை பிரமிடு):** ஒவ்வொரு ஊட்டச்சத்து மட்டத்திலும் தனிப்பட்ட உயிரினங்களின் எண்ணிக்கையை காட்டுகிறது. செங்குத்தாக அல்லது தலைகீழாக இருக்கலாம் (எ.கா., பல பறவைகளை ஆதரிக்கும் ஒரு பெரிய மரம்).",
            },
            {
              en: "**Pyramid of Biomass (உயிரித்தொகை பிரமிடு):** Shows the total biomass (dry weight) at each trophic level. Can be upright (e.g., terrestrial ecosystems) or inverted (e.g., aquatic ecosystems where phytoplankton have less biomass than zooplankton).",
              ta: "**Pyramid of Biomass (உயிரித்தொகை பிரமிடு):** ஒவ்வொரு ஊட்டச்சத்து மட்டத்திலும் உள்ள மொத்த உயிரித்தொகையை (உலர் எடை) காட்டுகிறது. செங்குத்தாக (எ.கா., நிலப்பரப்பு சூழல் மண்டலங்கள்) அல்லது தலைகீழாக (எ.கா., ஃபைட்டோபிளாங்க்டன் ஜூப்ளாங்க்டனை விட குறைவான உயிரித்தொகை கொண்ட நீர்வாழ் சூழல் மண்டலங்கள்) இருக்கலாம்.",
            },
            {
              en: "**Pyramid of Energy (ஆற்றல் பிரமிடு):** Always upright, as energy decreases at successive trophic levels. It represents the total amount of energy flowing through each trophic level in a given time.",
              ta: "**Pyramid of Energy (ஆற்றல் பிரமிடு):** எப்போதும் செங்குத்தாக இருக்கும், ஏனெனில் ஆற்றல் அடுத்தடுத்த ஊட்டச்சத்து மட்டங்களில் குறைகிறது. இது ஒரு குறிப்பிட்ட நேரத்தில் ஒவ்வொரு ஊட்டச்சத்து மட்டத்தின் வழியாக பாயும் மொத்த ஆற்றலின் அளவைக் குறிக்கிறது.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          en: "Environmental Issues",
          ta: "சுற்றுச்சூழல் பிரச்சினைகள்",
        },
        {
          type: "paragraph",
          en: "Environmental pollution is the undesirable change in the physical, chemical, or biological characteristics of air, land, and water. Pollutants are agents that cause such undesirable changes.",
          ta: "சுற்றுச்சூழல் மாசுபாடு என்பது காற்று, நிலம் மற்றும் நீரின் இயற்பியல், இரசாயன அல்லது உயிரியல் பண்புகளில் ஏற்படும் விரும்பத்தகாத மாற்றம். மாசுகள் அத்தகைய விரும்பத்தகாத மாற்றங்களை ஏற்படுத்தும் காரணிகள்.",
        },
        {
          type: "heading",
          level: 3,
          en: "Air Pollution and its Control",
          ta: "காற்று மாசுபாடு மற்றும் அதன் கட்டுப்பாடு",
        },
        {
          type: "paragraph",
          en: "Caused by particulate matter (dust, smoke) and gaseous pollutants ($\text{SO}_2$, $\text{NO}_x$, $\text{CO}$, hydrocarbons). Effects include respiratory problems, acid rain, and damage to plants. Control measures include electrostatic precipitators, scrubbers, and catalytic converters in vehicles.",
          ta: "தூசு துகள்கள் (தூசு, புகை) மற்றும் வாயு மாசுகளால் ($\text{SO}_2$, $\text{NO}_x$, $\text{CO}$, ஹைட்ரோகார்பன்கள்) ஏற்படுகிறது. விளைவுகள் சுவாசப் பிரச்சினைகள், அமில மழை மற்றும் தாவரங்களுக்கு சேதம் ஆகியவை அடங்கும். கட்டுப்பாட்டு நடவடிக்கைகளில் எலக்ட்ரோஸ்டேடிக் பிரசிபிடேட்டர்கள், ஸ்க்ரப்பர்கள் மற்றும் வாகனங்களில் வினையூக்கி மாற்றிகள் ஆகியவை அடங்கும்.",
        },
        {
          type: "heading",
          level: 3,
          en: "Water Pollution and its Control",
          ta: "நீர் மாசுபாடு மற்றும் அதன் கட்டுப்பாடு",
        },
        {
          type: "paragraph",
          en: "Caused by domestic sewage, industrial effluents, agricultural chemicals (pesticides, fertilizers). Effects include eutrophication (nutrient enrichment leading to algal bloom and oxygen depletion), biomagnification (increase in pollutant concentration at successive trophic levels), and various diseases. Control involves sewage treatment plants, integrated organic farming.",
          ta: "வீட்டுக் கழிவுநீர், தொழில்துறை கழிவுநீர், விவசாய ரசாயனங்கள் (பூச்சிக்கொல்லிகள், உரங்கள்) ஆகியவற்றால் ஏற்படுகிறது. விளைவுகளில் யூட்ரோஃபிகேஷன் (ஊட்டச்சத்து செறிவூட்டல் ஆல்கா வளர்ச்சி மற்றும் ஆக்ஸிஜன் குறைப்புக்கு வழிவகுக்கும்), உயிரிப்பெருக்கம் (அடுத்தடுத்த ஊட்டச்சத்து மட்டங்களில் மாசின் செறிவு அதிகரித்தல்) மற்றும் பல்வேறு நோய்கள் ஆகியவை அடங்கும். கட்டுப்பாடு கழிவுநீர் சுத்திகரிப்பு நிலையங்கள், ஒருங்கிணைந்த இயற்கை விவசாயம் ஆகியவை அடங்கும்.",
        },
        {
          type: "heading",
          level: 3,
          en: "Solid Wastes",
          ta: "திடக்கழிவுகள்",
        },
        {
          type: "paragraph",
          en: "Municipal solid wastes are generally household and commercial wastes. Management involves segregation of wastes (biodegradable, recyclable, non-biodegradable), recycling, landfilling, and incineration. Hospital wastes, electronic wastes (e-wastes) also pose significant challenges.",
          ta: "நகராட்சி திடக்கழிவுகள் பொதுவாக வீட்டுக் கழிவுகள் மற்றும் வணிகக் கழிவுகள் ஆகும். மேலாண்மை கழிவுகளைப் பிரித்தல் (உயிரியல் ரீதியாக சிதைக்கக்கூடியவை, மறுசுழற்சி செய்யக்கூடியவை, உயிரியல் ரீதியாக சிதைக்க முடியாதவை), மறுசுழற்சி, நிலப்பரப்பு மற்றும் தகனம் ஆகியவை அடங்கும். மருத்துவமனை கழிவுகள், மின்னணு கழிவுகள் (இ-கழிவுகள்) ஆகியவையும் குறிப்பிடத்தக்க சவால்களை ஏற்படுத்துகின்றன.",
        },
        {
          type: "heading",
          level: 3,
          en: "Radioactive Wastes",
          ta: "கதிரியக்க கழிவுகள்",
        },
        {
          type: "paragraph",
          en: "Generated from nuclear power plants and laboratories. Extremely dangerous due to high radioactivity. Requires careful handling and storage, usually deep in the Earth's crust after proper shielding.",
          ta: "அணுமின் நிலையங்கள் மற்றும் ஆய்வகங்களில் இருந்து உருவாகிறது. அதிக கதிரியக்கத்தன்மை காரணமாக மிகவும் ஆபத்தானது. சரியான பாதுகாப்புடன், பொதுவாக பூமியின் மேலோட்டத்தில் ஆழமாக சேமிக்கப்பட வேண்டும்.",
        },
        {
          type: "heading",
          level: 3,
          en: "Greenhouse Effect and Global Warming",
          ta: "பசுமை இல்ல விளைவு மற்றும் புவி வெப்பமயமாதல்",
        },
        {
          type: "paragraph",
          en: "The greenhouse effect is a naturally occurring phenomenon responsible for heating of Earth's surface and atmosphere. Greenhouse gases ($\text{CO}_2$, methane, $\text{CFCs}$, $\text{N}_2\text{O}$) trap solar radiation, preventing it from escaping. Increased concentration of these gases due to human activities leads to global warming, causing climate change, sea-level rise, etc.",
          ta: "பசுமை இல்ல விளைவு என்பது பூமியின் மேற்பரப்பு மற்றும் வளிமண்டலத்தை வெப்பமாக்குவதற்கு பொறுப்பான இயற்கையாக நிகழும் ஒரு நிகழ்வு. பசுமை இல்ல வாயுக்கள் ($\text{CO}_2$, மீத்தேன், $\text{CFCs}$, $\text{N}_2\text{O}$) சூரியக் கதிர்வீச்சை சிக்கவைத்து, அது தப்பிக்க விடாமல் தடுக்கின்றன. மனித நடவடிக்கைகளால் இந்த வாயுக்களின் செறிவு அதிகரிப்பது புவி வெப்பமயமாதலுக்கு வழிவகுக்கிறது, இது காலநிலை மாற்றம், கடல் மட்ட உயர்வு போன்றவற்றை ஏற்படுத்துகிறது.",
        },
        {
          type: "heading",
          level: 3,
          en: "Ozone Depletion",
          ta: "ஓசோன் குறைவு",
        },
        {
          type: "paragraph",
          en: "The ozone layer in the stratosphere protects Earth from harmful UV radiations. Chlorofluorocarbons (CFCs) deplete the ozone layer, leading to the 'ozone hole', especially over Antarctica. Increased UV radiation causes skin cancer, cataracts, and damages DNA.",
          ta: "ஸ்ட்ராடோஸ்பியரில் உள்ள ஓசோன் அடுக்கு பூமியை தீங்கு விளைவிக்கும் UV கதிர்வீச்சுகளிலிருந்து பாதுகாக்கிறது. குளோரோபுளோரோகார்பன்கள் (CFCs) ஓசோன் அடுக்கை குறைத்து, 'ஓசோன் துளைக்கு' வழிவகுக்கிறது, குறிப்பாக அண்டார்டிகாவில். அதிகரித்த UV கதிர்வீச்சு தோல் புற்றுநோய், கண்புரை மற்றும் டிஎன்ஏவை சேதப்படுத்துகிறது.",
        },
        {
          type: "heading",
          level: 3,
          en: "Deforestation",
          ta: "காடழிப்பு",
        },
        {
          type: "paragraph",
          en: "Conversion of forested areas to non-forested ones. Causes include agricultural expansion, timber extraction, urbanization. Consequences include soil erosion, loss of biodiversity, desertification, and increased $\text{CO}_2$ concentration in the atmosphere.",
          ta: "காடுகள் நிறைந்த பகுதிகளை காடுகள் அற்ற பகுதிகளாக மாற்றுவது. காரணங்களில் விவசாய விரிவாக்கம், மர அறுவடை, நகரமயமாக்கல் ஆகியவை அடங்கும். விளைவுகளில் மண் அரிப்பு, பல்லுயிர் இழப்பு, பாலைவனமாக்கல் மற்றும் வளிமண்டலத்தில் $\text{CO}_2$ செறிவு அதிகரிப்பு ஆகியவை அடங்கும்.",
        },
      ],
    },
    {
      type: "Worked Examples",
      content: [
        {
          type: "worked-example",
          id: "WE001",
          question: {
            en: "A population of 100 individuals of a species has 20 births and 5 deaths in a year. What is the intrinsic rate of natural increase (r) for this population?",
            ta: "ஒரு இனத்தின் 100 தனிநபர்களைக் கொண்ட ஒரு மக்கள் தொகையில் ஒரு வருடத்தில் 20 பிறப்புகள் மற்றும் 5 இறப்புகள் உள்ளன. இந்த மக்கள் தொகையின் இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம் (r) என்ன?",
          },
          solution: {
            steps: [
              {
                en: "Given, initial population (N) = 100.",
                ta: "கொடுக்கப்பட்டவை, ஆரம்ப மக்கள் தொகை (N) = 100.",
              },
              {
                en: "Number of births (B) = 20.",
                ta: "பிறப்புகளின் எண்ணிக்கை (B) = 20.",
              },
              {
                en: "Number of deaths (D) = 5.",
                ta: "இறப்புகளின் எண்ணிக்கை (D) = 5.",
              },
              {
                en: "Birth rate per capita (b) = $\frac{\text{Number of births}}{\text{Initial population}} = \frac{20}{100} = 0.2$.",
                ta: "நபர் ஒருவரின் பிறப்பு விகிதம் (b) = $\frac{\text{பிறப்புகளின் எண்ணிக்கை}}{\text{ஆரம்ப மக்கள் தொகை}} = \frac{20}{100} = 0.2$.",
              },
              {
                en: "Death rate per capita (d) = $\frac{\text{Number of deaths}}{\text{Initial population}} = \frac{5}{100} = 0.05$.",
                ta: "நபர் ஒருவரின் இறப்பு விகிதம் (d) = $\frac{\text{இறப்புகளின் எண்ணிக்கை}}{\text{ஆரம்ப மக்கள் தொகை}} = \frac{5}{100} = 0.05$.",
              },
              {
                en: "Intrinsic rate of natural increase (r) = b - d.",
                ta: "இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம் (r) = b - d.",
              },
              {
                en: "r = $0.2 - 0.05 = 0.15$.",
                ta: "r = $0.2 - 0.05 = 0.15$.",
              },
            ],
            finalAnswer: {
              en: "The intrinsic rate of natural increase (r) is 0.15.",
              ta: "இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம் (r) 0.15 ஆகும்.",
            },
          },
          hint: {
            en: "Recall the formula for intrinsic rate of natural increase (r) in terms of per capita birth and death rates.",
            ta: "நபர் ஒருவரின் பிறப்பு மற்றும் இறப்பு விகிதங்களின் அடிப்படையில் இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம் (r) க்கான சூத்திரத்தை நினைவில் கொள்ளுங்கள்.",
          },
        },
        {
          type: "worked-example",
          id: "WE002",
          question: {
            en: "If a lake experiences significant nutrient enrichment, leading to an algal bloom and subsequent oxygen depletion, what is this phenomenon called, and what are its major consequences?",
            ta: "ஒரு ஏரி குறிப்பிடத்தக்க ஊட்டச்சத்து செறிவூட்டலை அனுபவித்து, ஆல்கா வளர்ச்சி மற்றும் அதைத் தொடர்ந்து ஆக்ஸிஜன் குறைப்புக்கு வழிவகுத்தால், இந்த நிகழ்வு என்னவென்று அழைக்கப்படுகிறது, மேலும் அதன் முக்கிய விளைவுகள் என்ன?",
          },
          solution: {
            steps: [
              {
                en: "The phenomenon described is Eutrophication.",
                ta: "விவரிக்கப்பட்ட நிகழ்வு யூட்ரோஃபிகேஷன் ஆகும்.",
              },
              {
                en: "Eutrophication is the natural aging of a lake by nutrient enrichment of its water. In a young lake, the water is cold and clear, supporting little life. With time, streams draining into the lake introduce nutrients like nitrogen and phosphorus, which encourage the growth of aquatic organisms.",
                ta: "யூட்ரோஃபிகேஷன் என்பது ஒரு ஏரியின் நீரின் ஊட்டச்சத்து செறிவூட்டலால் ஏற்படும் இயற்கை முதுமை ஆகும். ஒரு இளம் ஏரியில், நீர் குளிர்ந்தது மற்றும் தெளிவானது, மிகக் குறைந்த உயிர்களை ஆதரிக்கிறது. காலப்போக்கில், ஏரிக்குள் பாயும் நீரோடைகள் நைட்ரஜன் மற்றும் பாஸ்பரஸ் போன்ற ஊட்டச்சத்துக்களை அறிமுகப்படுத்துகின்றன, இது நீர்வாழ் உயிரினங்களின் வளர்ச்சியை ஊக்குவிக்கிறது.",
              },
              {
                en: "Major consequences include:",
                ta: "முக்கிய விளைவுகள் அடங்கும்:",
              },
              {
                en: "a) **Algal bloom:** Excessive growth of algae due to nutrient availability, forming a scum on the water surface.",
                ta: "அ) **ஆல்கா வளர்ச்சி:** ஊட்டச்சத்து கிடைப்பதால் ஆல்காவின் அதிகப்படியான வளர்ச்சி, நீர் மேற்பரப்பில் ஒரு அடுக்கு உருவாகிறது.",
              },
              {
                en: "b) **Oxygen depletion:** As algae die and decompose, decomposers consume large amounts of oxygen, leading to anoxic conditions.",
                ta: "ஆ) **ஆக்ஸிஜன் குறைப்பு:** ஆல்கா இறந்து சிதைவடையும்போது, சிதைப்பவர்கள் அதிக அளவு ஆக்ஸிஜனை உட்கொள்கிறார்கள், இது ஆக்ஸிஜன் இல்லாத நிலைமைகளுக்கு வழிவகுக்கிறது.",
              },
              {
                en: "c) **Death of aquatic life:** Oxygen depletion leads to the death of fish and other aquatic animals.",
                ta: "இ) **நீர்வாழ் உயிரினங்களின் இறப்பு:** ஆக்ஸிஜன் குறைப்பு மீன்கள் மற்றும் பிற நீர்வாழ் விலங்குகளின் இறப்புக்கு வழிவகுக்கிறது.",
              },
              {
                en: "d) **Loss of biodiversity:** Only a few tolerant species may survive.",
                ta: "ஈ) **பல்லுயிர் இழப்பு:** ஒரு சில சகிப்புத்தன்மை கொண்ட இனங்கள் மட்டுமே உயிர்வாழக்கூடும்.",
              },
            ],
            finalAnswer: {
              en: "The phenomenon is Eutrophication, leading to algal blooms, oxygen depletion, and death of aquatic life.",
              ta: "இந்த நிகழ்வு யூட்ரோஃபிகேஷன் ஆகும், இது ஆல்கா வளர்ச்சி, ஆக்ஸிஜன் குறைப்பு மற்றும் நீர்வாழ் உயிரினங்களின் இறப்புக்கு வழிவகுக்கிறது.",
            },
          },
          hint: {
            en: "Consider the effects of nutrient overload in aquatic ecosystems and its impact on oxygen levels.",
            ta: "நீர்வாழ் சூழல் மண்டலங்களில் ஊட்டச்சத்து சுமையின் விளைவுகளையும் ஆக்ஸிஜன் அளவுகளில் அதன் தாக்கத்தையும் கருத்தில் கொள்ளுங்கள்.",
          },
        },
        {
          type: "worked-example",
          id: "WE003",
          question: {
            en: "Explain why the pyramid of energy is always upright, while pyramids of number and biomass can sometimes be inverted.",
            ta: "ஆற்றல் பிரமிடு எப்போதும் நேராக இருக்கும், அதேசமயம் எண்ணிக்கை மற்றும் உயிரித்தொகை பிரமிடுகள் சில சமயங்களில் தலைகீழாக இருக்கக்கூடும் என்பதை விளக்குக.",
          },
          solution: {
            steps: [
              {
                en: "**Pyramid of Energy:**",
                ta: "**ஆற்றல் பிரமிடு:**",
              },
              {
                en: "The pyramid of energy is always upright because, according to the 10% law, only about 10% of the energy is transferred from one trophic level to the next higher trophic level. The remaining 90% is lost as heat during metabolic activities or remains unutilized. Therefore, the energy content always decreases as one moves from lower to higher trophic levels, resulting in an upright pyramid.",
                ta: "ஆற்றல் பிரமிடு எப்போதும் நேராக இருக்கும், ஏனெனில் 10% விதிப்படி, ஆற்றலில் சுமார் 10% மட்டுமே ஒரு ஊட்டச்சத்து மட்டத்திலிருந்து அடுத்த உயர் ஊட்டச்சத்து மட்டத்திற்கு மாற்றப்படுகிறது. மீதமுள்ள 90% வளர்சிதை மாற்ற செயல்பாடுகளின் போது வெப்பமாக இழக்கப்படுகிறது அல்லது பயன்படுத்தப்படாமல் உள்ளது. எனவே, கீழ் ஊட்டச்சத்து மட்டங்களிலிருந்து உயர் ஊட்டச்சத்து மட்டங்களுக்கு செல்லும்போது ஆற்றல் உள்ளடக்கம் எப்போதும் குறைகிறது, இதன் விளைவாக ஒரு நேராக பிரமிடு உருவாகிறது.",
              },
              {
                en: "**Pyramid of Number:**",
                ta: "**எண்ணிக்கை பிரமிடு:**",
              },
              {
                en: "The pyramid of number can be inverted. For example, in a parasitic food chain, a single large producer (like a tree) can support numerous primary consumers (e.g., birds), which in turn support even more secondary consumers (e.g., parasites on birds).",
                ta: "எண்ணிக்கை பிரமிடு தலைகீழாக இருக்கலாம். உதாரணமாக, ஒரு ஒட்டுண்ணி உணவு சங்கிலியில், ஒரு பெரிய உற்பத்தியாளர் (ஒரு மரம் போன்றவை) பல முதன்மை நுகர்வோரை (எ.கா., பறவைகள்) ஆதரிக்க முடியும், அவை மேலும் பல இரண்டாம் நிலை நுகர்வோரை (எ.கா., பறவைகளில் உள்ள ஒட்டுண்ணிகள்) ஆதரிக்கின்றன.",
              },
              {
                en: "**Pyramid of Biomass:**",
                ta: "**உயிரித்தொகை பிரமிடு:**",
              },
              {
                en: "The pyramid of biomass can also be inverted, particularly in aquatic ecosystems. For instance, in an aquatic ecosystem, the biomass of producers (phytoplankton) may be less than the biomass of primary consumers (zooplankton) at a particular time. This is because phytoplankton have a very short lifespan and high turnover rate, meaning they are consumed rapidly but reproduce quickly.",
                ta: "உயிரித்தொகை பிரமிடு குறிப்பாக நீர்வாழ் சூழல் மண்டலங்களில் தலைகீழாக இருக்கலாம். உதாரணமாக, ஒரு நீர்வாழ் சூழல் மண்டலத்தில், உற்பத்தியாளர்களின் (ஃபைட்டோபிளாங்க்டன்) உயிரித்தொகை ஒரு குறிப்பிட்ட நேரத்தில் முதன்மை நுகர்வோரின் (ஜூப்ளாங்க்டன்) உயிரித்தொகையை விட குறைவாக இருக்கலாம். இது ஃபைட்டோபிளாங்க்டன் மிகக் குறுகிய ஆயுட்காலம் மற்றும் அதிக சுழற்சி விகிதத்தைக் கொண்டிருப்பதால், அவை விரைவாக நுகரப்பட்டு விரைவாக இனப்பெருக்கம் செய்கின்றன.",
              },
            ],
            finalAnswer: {
              en: "Energy decreases at each trophic level, making the energy pyramid always upright. Numbers and biomass can vary based on ecosystem type (e.g., tree supporting many birds, or fast-reproducing phytoplankton with lower standing crop biomass than zooplankton).",
              ta: "ஒவ்வொரு ஊட்டச்சத்து மட்டத்திலும் ஆற்றல் குறைவதால், ஆற்றல் பிரமிடு எப்போதும் நேராக இருக்கும். சுற்றுச்சூழல் அமைப்பின் வகையைப் பொறுத்து எண்ணிக்கையும் உயிரித்தொகையும் மாறுபடலாம் (எ.கா., பல பறவைகளை ஆதரிக்கும் மரம், அல்லது ஜூப்ளாங்க்டனை விட குறைந்த நின்ற பயிர் உயிரித்தொகை கொண்ட வேகமாக இனப்பெருக்கம் செய்யும் ஃபைட்டோபிளாங்க்டன்).",
            },
          },
          hint: {
            en: "Consider the 10% energy law for energy pyramids. For number and biomass, think about specific food chains like parasitic ones or aquatic ones.",
            ta: "ஆற்றல் பிரமிடுகளுக்கு 10% ஆற்றல் விதியை கருத்தில் கொள்ளுங்கள். எண்ணிக்கை மற்றும் உயிரித்தொகைக்கு, ஒட்டுண்ணி சங்கிலிகள் அல்லது நீர்வாழ் சங்கிலிகள் போன்ற குறிப்பிட்ட உணவு சங்கிலிகளைப் பற்றி சிந்தியுங்கள்.",
          },
        },
        {
          type: "worked-example",
          id: "WE004",
          question: {
            en: "Give an example of commensalism and mutualism, explaining how each species is affected.",
            ta: "கூட்டமைவு மற்றும் ஒத்துழைப்புக்கு ஒரு உதாரணம் கொடுத்து, ஒவ்வொரு இனமும் எவ்வாறு பாதிக்கப்படுகிறது என்பதை விளக்குக.",
          },
          solution: {
            steps: [
              {
                en: "**Commensalism (+/0):** This is an interaction where one species benefits and the other is neither harmed nor benefited.",
                ta: "**கூட்டமைவு (+/0):** இது ஒரு இனம் பயனடையும் மற்றும் மற்றொன்று பாதிக்கப்படாத அல்லது பயனடையாத ஒரு தொடர்பு.",
              },
              {
                en: "**Example: Orchid growing on a mango tree branch.**",
                ta: "**உதாரணம்: மாமரக் கிளையில் வளரும் ஆர்க்கிட்.**",
              },
              {
                en: "The orchid benefits by getting support and exposure to sunlight, while the mango tree is neither harmed nor benefited. The orchid uses the mango tree only for support, not for nutrition.",
                ta: "ஆர்க்கிட் ஆதரவு மற்றும் சூரிய ஒளி வெளிப்பாட்டைப் பெறுவதன் மூலம் பயனடைகிறது, அதேசமயம் மாமரம் பாதிக்கப்படுவதில்லை அல்லது பயனடைவதில்லை. ஆர்க்கிட் மாமரத்தை ஊட்டச்சத்துக்காக அல்ல, ஆதரவுக்காக மட்டுமே பயன்படுத்துகிறது.",
              },
              {
                en: "**Mutualism (+/+):** This is an interaction where both interacting species benefit from each other.",
                ta: "**ஒத்துழைப்பு (+/+):** இது இரு interacting இனங்களும் ஒருவருக்கொருவர் பயனடையும் ஒரு தொடர்பு.",
              },
              {
                en: "**Example: Lichens (fungi and algae/cyanobacteria).**",
                ta: "**உதாரணம்: லைக்கன்கள் (பூஞ்சை மற்றும் பாசிகள்/சயனோபாக்டீரியா).**",
              },
              {
                en: "Fungi provide shelter, absorb water and minerals for the algae, while the algae (or cyanobacteria) perform photosynthesis and provide food for the fungi. Both organisms are interdependent and mutually benefit.",
                ta: "பூஞ்சை அடைக்கலம் அளிக்கிறது, பாசிகளுக்கு நீர் மற்றும் தாதுக்களை உறிஞ்சுகிறது, அதேசமயம் பாசிகள் (அல்லது சயனோபாக்டீரியா) ஒளிச்சேர்க்கையைச் செய்து பூஞ்சைக்கு உணவை வழங்குகின்றன. இரண்டு உயிரினங்களும் ஒன்றையொன்று சார்ந்துள்ளன மற்றும் பரஸ்பரம் பயனடைகின்றன.",
              },
            ],
            finalAnswer: {
              en: "Commensalism (e.g., orchid on mango tree): Orchid benefits, mango tree is unaffected. Mutualism (e.g., lichens): Both fungi and algae benefit.",
              ta: "கூட்டமைவு (எ.கா., மாமரத்தில் ஆர்க்கிட்): ஆர்க்கிட் பயனடைகிறது, மாமரம் பாதிக்கப்படுவதில்லை. ஒத்துழைப்பு (எ.கா., லைக்கன்கள்): பூஞ்சை மற்றும் பாசிகள் இரண்டும் பயனடைகின்றன.",
            },
          },
          hint: {
            en: "Remember the symbols for interaction types: + for benefit, - for harm, 0 for neutral. Think of classic examples for each.",
            ta: "தொடர்பு வகைகளுக்கான குறியீடுகளை நினைவில் கொள்ளுங்கள்: நன்மைக்கு +, தீங்குக்கு -, நடுநிலைக்கு 0. ஒவ்வொன்றிற்கும் சிறந்த உதாரணங்களை நினைத்துப் பாருங்கள்.",
          },
        },
        {
          type: "worked-example",
          id: "WE005",
          question: {
            en: "List and briefly describe three major consequences of deforestation.",
            ta: "காடழிப்பின் மூன்று முக்கிய விளைவுகளை பட்டியலிட்டு சுருக்கமாக விவரிக்கவும்.",
          },
          solution: {
            steps: [
              {
                en: "Deforestation is the conversion of forested areas to non-forested ones. Its major consequences include:",
                ta: "காடழிப்பு என்பது காடுகள் நிறைந்த பகுதிகளை காடுகள் அற்ற பகுதிகளாக மாற்றுவதாகும். அதன் முக்கிய விளைவுகள் அடங்கும்:",
              },
              {
                en: "1. **Soil Erosion and Desertification:** Trees bind soil particles with their roots. When trees are cut down, the soil becomes loose and is easily washed away by rain or blown away by wind, leading to soil erosion. Prolonged and severe soil erosion can eventually lead to desertification.",
                ta: "1. **மண் அரிப்பு மற்றும் பாலைவனமாக்கல்:** மரங்கள் அவற்றின் வேர்களால் மண் துகள்களை இணைக்கின்றன. மரங்கள் வெட்டப்படும்போது, மண் தளர்வாகி மழை அல்லது காற்றால் எளிதில் அடித்துச் செல்லப்படுகிறது, இது மண் அரிப்புக்கு வழிவகுக்கிறது. நீண்டகால மற்றும் கடுமையான மண் அரிப்பு இறுதியில் பாலைவனமாக்கலுக்கு வழிவகுக்கும்.",
              },
              {
                en: "2. **Loss of Biodiversity:** Forests are home to a vast number of plant and animal species. Deforestation destroys their habitats, leading to a significant loss of biodiversity and pushing many species towards extinction.",
                ta: "2. **பல்லுயிர் இழப்பு:** காடுகள் ஏராளமான தாவர மற்றும் விலங்கு இனங்களின் தாயகமாகும். காடழிப்பு அவற்றின் வாழ்விடங்களை அழித்து, பல்லுயிர் இழப்புக்கு வழிவகுக்கிறது மற்றும் பல இனங்களை அழிவின் விளிம்பிற்கு தள்ளுகிறது.",
              },
              {
                en: "3. **Climate Change (Increased $\text{CO}_2$ concentration):** Trees absorb carbon dioxide during photosynthesis. Deforestation not only reduces the number of trees available to absorb $\text{CO}_2$ but also releases stored carbon into the atmosphere when forests are burned or allowed to decompose. This contributes to increased atmospheric $\text{CO}_2$ levels, intensifying the greenhouse effect and accelerating global warming.",
                ta: "3. **காலநிலை மாற்றம் ($\text{CO}_2$ செறிவு அதிகரிப்பு):** மரங்கள் ஒளிச்சேர்க்கையின் போது கார்பன் டை ஆக்சைடை உறிஞ்சுகின்றன. காடழிப்பு $\text{CO}_2$ ஐ உறிஞ்சும் மரங்களின் எண்ணிக்கையை குறைப்பது மட்டுமல்லாமல், காடுகள் எரிக்கப்படும்போது அல்லது சிதைவடைய அனுமதிக்கும்போது சேமிக்கப்பட்ட கார்பனையும் வளிமண்டலத்தில் வெளியிடுகிறது. இது வளிமண்டல $\text{CO}_2$ அளவை அதிகரிக்க பங்களிக்கிறது, பசுமை இல்ல விளைவை தீவிரப்படுத்துகிறது மற்றும் புவி வெப்பமயமாதலை துரிதப்படுத்துகிறது.",
              },
            ],
            finalAnswer: {
              en: "Major consequences include soil erosion/desertification, loss of biodiversity, and increased atmospheric $\text{CO}_2$ leading to climate change.",
              ta: "முக்கிய விளைவுகளில் மண் அரிப்பு/பாலைவனமாக்கல், பல்லுயிர் இழப்பு மற்றும் வளிமண்டல $\text{CO}_2$ அதிகரிப்பு ஆகியவை அடங்கும், இது காலநிலை மாற்றத்திற்கு வழிவகுக்கிறது.",
            },
          },
          hint: {
            en: "Think about the role of forests in soil conservation, biodiversity, and the global carbon cycle.",
            ta: "மண் பாதுகாப்பு, பல்லுயிர் மற்றும் உலகளாவிய கார்பன் சுழற்சியில் காடுகளின் பங்கை சிந்தியுங்கள்.",
          },
        },
      ],
    },
    {
      type: "Practice Questions",
      content: [
        {
          type: "mcq",
          id: "MCQ001",
          question: {
            en: "Which of the following terms describes the study of interactions between organisms and their environment?",
            ta: "கீழ்க்கண்ட எந்த சொல் உயிரினங்களுக்கும் அவற்றின் சூழலுக்கும் இடையிலான தொடர்புகளின் ஆய்வை விவரிக்கிறது?",
          },
          options: [
            {
              en: "Ethology",
              ta: "நடத்தை உயிரியல்",
            },
            {
              en: "Ecology",
              ta: "சூழலியல்",
            },
            {
              en: "Physiology",
              ta: "உடலியல்",
            },
            {
              en: "Genetics",
              ta: "மரபியல்",
            },
          ],
          correctAnswer: "Ecology",
          solution: "Ecology is the branch of biology that studies the interactions among organisms and their environment.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ002",
          question: {
            en: "The primary succession starts in an area where...",
            ta: "முதன்மை தொடர்ச்சி ஒரு பகுதியில் தொடங்குகிறது, அங்கு...",
          },
          options: [
            {
              en: "natural biotic communities have been destroyed but soil is present.",
              ta: "இயற்கை உயிரியல் சமூகங்கள் அழிக்கப்பட்டுவிட்டன ஆனால் மண் உள்ளது.",
            },
            {
              en: "living organisms never existed before.",
              ta: "முன்பு எந்த உயிரினங்களும் இருந்ததில்லை.",
            },
            {
              en: "a forest fire has occurred.",
              ta: "ஒரு காட்டுத் தீ ஏற்பட்டது.",
            },
            {
              en: "agricultural land is abandoned.",
              ta: "விவசாய நிலம் கைவிடப்பட்டது.",
            },
          ],
          correctAnswer: "living organisms never existed before.",
          solution: "Primary succession starts in areas where no living organisms ever existed, such as bare rock or newly cooled lava. Secondary succession occurs in areas where existing communities have been disturbed but soil remains.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ003",
          question: {
            en: "Which of the following is an example of an organism that conforms to its external environment regarding body temperature?",
            ta: "உடல் வெப்பநிலை தொடர்பாக அதன் வெளிப்புற சூழலுக்கு இணங்கும் ஒரு உயிரினத்திற்கு கீழ்க்கண்ட எது ஒரு எடுத்துக்காட்டு?",
          },
          options: [
            {
              en: "Birds",
              ta: "பறவைகள்",
            },
            {
              en: "Mammals",
              ta: "பாலூட்டிகள்",
            },
            {
              en: "Most plants",
              ta: "பெரும்பாலான தாவரங்கள்",
            },
            {
              en: "All endotherms",
              ta: "அனைத்து வெப்ப உள்ளுயிரினங்கள்",
            },
          ],
          correctAnswer: "Most plants",
          solution: "Most plants and about 99% of animals are conformers, meaning their body temperature changes with the ambient temperature. Birds and mammals are regulators.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ004",
          question: {
            en: "The S-shaped growth curve is characteristic of which population growth model?",
            ta: "S-வடிவ வளர்ச்சி வளைவு எந்த மக்கள் தொகை வளர்ச்சி மாதிரியின் சிறப்பியல்பு?",
          },
          options: [
            {
              en: "Exponential growth",
              ta: "அதிவேக வளர்ச்சி",
            },
            {
              en: "Logistic growth",
              ta: "ஏற்றுமதி வளர்ச்சி",
            },
            {
              en: "Geometric growth",
              ta: "வடிவியல் வளர்ச்சி",
            },
            {
              en: "Arithmetic growth",
              ta: "கணித வளர்ச்சி",
            },
          ],
          correctAnswer: "Logistic growth",
          solution: "Logistic growth occurs when resources are limited and follows an S-shaped (sigmoid) curve, eventually stabilizing at the carrying capacity (K). Exponential growth shows a J-shaped curve.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ005",
          question: {
            en: "Which of the following interactions results in benefit to one species and no effect on the other?",
            ta: "கீழ்க்கண்ட எந்த தொடர்பு ஒரு இனத்திற்கு நன்மை விளைவிக்கும் மற்றும் மற்ற இனத்திற்கு எந்த விளைவையும் ஏற்படுத்தாது?",
          },
          options: [
            {
              en: "Mutualism",
              ta: "ஒத்துழைப்பு",
            },
            {
              en: "Competition",
              ta: "போட்டி",
            },
            {
              en: "Commensalism",
              ta: "கூட்டமைவு",
            },
            {
              en: "Predation",
              ta: "வேட்டையாடுதல்",
            },
          ],
          correctAnswer: "Commensalism",
          solution: "In commensalism, one species benefits (\"+\") and the other is neither harmed nor benefited (\"0\"). Mutualism is (+/+), Competition is (-/-), and Predation is (+/-).",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ006",
          question: {
            en: "Decomposition is faster if the detritus is rich in which of the following?",
            ta: "கீழ்க்கண்டவற்றில் எது அதிகம் இருந்தால் சிதைவு வேகமாக இருக்கும்?",
          },
          options: [
            {
              en: "Lignin and chitin",
              ta: "லிக்னின் மற்றும் கைட்டின்",
            },
            {
              en: "Sugars and nitrogen",
              ta: "சர்க்கரைகள் மற்றும் நைட்ரஜன்",
            },
            {
              en: "Cellulose and pectin",
              ta: "செல்லுலோஸ் மற்றும் பெக்டின்",
            },
            {
              en: "Calcium and magnesium",
              ta: "கால்சியம் மற்றும் மெக்னீசியம்",
            },
          ],
          correctAnswer: "Sugars and nitrogen",
          solution: "Decomposition rate is influenced by the chemical composition of detritus and climatic factors. Detritus rich in lignin and chitin decomposes slowly, while detritus rich in sugars and nitrogen decomposes more quickly.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ007",
          question: {
            en: "Which of the following ecological pyramids is always upright?",
            ta: "கீழ்க்கண்ட எந்த சூழலியல் பிரமிடு எப்போதும் நேராக இருக்கும்?",
          },
          options: [
            {
              en: "Pyramid of numbers",
              ta: "எண்ணிக்கை பிரமிடு",
            },
            {
              en: "Pyramid of biomass",
              ta: "உயிரித்தொகை பிரமிடு",
            },
            {
              en: "Pyramid of energy",
              ta: "ஆற்றல் பிரமிடு",
            },
            {
              en: "All of the above",
              ta: "மேலே உள்ள அனைத்தும்",
            },
          ],
          correctAnswer: "Pyramid of energy",
          solution: "The pyramid of energy is always upright because energy flows unidirectionally and decreases at successive trophic levels, with only about 10% transferred to the next level. Pyramids of number and biomass can be inverted depending on the ecosystem.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ008",
          question: {
            en: "Eutrophication of a lake is caused by...",
            ta: "ஒரு ஏரியின் யூட்ரோஃபிகேஷன் இதன் காரணமாக ஏற்படுகிறது...",
          },
          options: [
            {
              en: "excessive discharge of industrial effluents.",
              ta: "தொழில்துறை கழிவுநீரின் அதிகப்படியான வெளியேற்றம்.",
            },
            {
              en: "accumulation of high amounts of nutrients.",
              ta: "அதிக அளவு ஊட்டச்சத்துக்கள் குவிதல்.",
            },
            {
              en: "increased concentration of heavy metals.",
              ta: "கன உலோகங்களின் செறிவு அதிகரிப்பு.",
            },
            {
              en: "high population of aquatic plants.",
              ta: "நீர்வாழ் தாவரங்களின் அதிக மக்கள் தொகை.",
            },
          ],
          correctAnswer: "accumulation of high amounts of nutrients.",
          solution: "Eutrophication is primarily caused by the accumulation of excessive nutrients, especially nitrogen and phosphorus, from domestic sewage and agricultural runoff, leading to algal blooms and subsequent oxygen depletion.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ009",
          question: {
            en: "What is biomagnification?",
            ta: "உயிரிப்பெருக்கம் என்றால் என்ன?",
          },
          options: [
            {
              en: "Increase in population size of a species over time.",
              ta: "காலப்போக்கில் ஒரு இனத்தின் மக்கள் தொகை அளவு அதிகரிப்பு.",
            },
            {
              en: "Accumulation of toxins at successive trophic levels.",
              ta: "அடுத்தடுத்த ஊட்டச்சத்து மட்டங்களில் நச்சுப் பொருட்கள் குவிதல்.",
            },
            {
              en: "Growth of organisms in polluted water.",
              ta: "மாசுபட்ட நீரில் உயிரினங்களின் வளர்ச்சி.",
            },
            {
              en: "The process of breaking down complex organic matter.",
              ta: "சிக்கலான கரிமப் பொருட்களை சிதைக்கும் செயல்முறை.",
            },
          ],
          correctAnswer: "Accumulation of toxins at successive trophic levels.",
          solution: "Biomagnification refers to the increase in concentration of non-biodegradable pollutants (like DDT, mercury) in organisms at successively higher trophic levels in a food chain.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ010",
          question: {
            en: "Which gas is primarily responsible for the greenhouse effect?",
            ta: "பசுமை இல்ல விளைவுக்கு முக்கியமாக எந்த வாயு காரணம்?",
          },
          options: [
            {
              en: "Oxygen ($\text{O}_2$)",
              ta: "ஆக்ஸிஜன் ($\text{O}_2$)",
            },
            {
              en: "Nitrogen ($\text{N}_2$)",
              ta: "நைட்ரஜன் ($\text{N}_2$)",
            },
            {
              en: "Carbon dioxide ($\text{CO}_2$)",
              ta: "கார்பன் டை ஆக்சைடு ($\text{CO}_2$)",
            },
            {
              en: "Sulphur dioxide ($\text{SO}_2$)",
              ta: "சல்பர் டை ஆக்சைடு ($\text{SO}_2$)",
            },
          ],
          correctAnswer: "Carbon dioxide ($\text{CO}_2$)",
          solution: "Carbon dioxide is the most significant anthropogenic greenhouse gas, contributing the most to the greenhouse effect and global warming.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ011",
          question: {
            en: "Ozone depletion in the stratosphere is mainly caused by...",
            ta: "ஸ்ட்ராடோஸ்பியரில் ஓசோன் குறைபாடு முக்கியமாக இதனால் ஏற்படுகிறது...",
          },
          options: [
            {
              en: "carbon dioxide emissions.",
              ta: "கார்பன் டை ஆக்சைடு வெளியேற்றங்கள்.",
            },
            {
              en: "sulphur dioxide emissions.",
              ta: "சல்பர் டை ஆக்சைடு வெளியேற்றங்கள்.",
            },
            {
              en: "chlorofluorocarbons (CFCs).",
              ta: "குளோரோபுளோரோகார்பன்கள் (CFCs).",
            },
            {
              en: "particulate matter.",
              ta: "துகள்கள்.",
            },
          ],
          correctAnswer: "chlorofluorocarbons (CFCs).",
          solution: "Chlorofluorocarbons (CFCs), released from refrigerants and aerosols, are the primary cause of ozone depletion in the stratosphere.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ012",
          question: {
            en: "The term 'r' in the population growth equation $\frac{dN}{dt} = rN$ represents the...",
            ta: "மக்கள் தொகை வளர்ச்சி சமன்பாட்டில் 'r' என்ற சொல் $\frac{dN}{dt} = rN$ எதைக் குறிக்கிறது?",
          },
          options: [
            {
              en: "carrying capacity.",
              ta: "தாங்குதிறன்.",
            },
            {
              en: "population density.",
              ta: "மக்கள் தொகை அடர்த்தி.",
            },
            {
              en: "intrinsic rate of natural increase.",
              ta: "இயற்கை அதிகரிப்பின் உள்ளார்ந்த விகிதம்.",
            },
            {
              en: "death rate.",
              ta: "இறப்பு விகிதம்.",
            },
          ],
          correctAnswer: "intrinsic rate of natural increase.",
          solution: "In the exponential growth equation, 'r' stands for the intrinsic rate of natural increase, which is a measure of the maximum potential rate of population growth.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ013",
          question: {
            en: "Which of the following is not a major abiotic factor?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஒரு முக்கிய உயிரற்ற காரணி அல்ல?",
          },
          options: [
            {
              en: "Temperature",
              ta: "வெப்பநிலை",
            },
            {
              en: "Water",
              ta: "நீர்",
            },
            {
              en: "Sunlight",
              ta: "சூரிய ஒளி",
            },
            {
              en: "Predators",
              ta: "வேட்டைக்காரர்கள்",
            },
          ],
          correctAnswer: "Predators",
          solution: "Temperature, water, light (sunlight), and soil are major abiotic (non-living) factors. Predators are biotic (living) factors that interact with organisms.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ014",
          question: {
            en: "The process of breaking down detritus into smaller particles by detritivores is called:",
            ta: "சிதைவூட்டிகளால் இறந்த கரிமப் பொருட்களை சிறிய துகள்களாக உடைக்கும் செயல்முறை இவ்வாறு அழைக்கப்படுகிறது:",
          },
          options: [
            {
              en: "Leaching",
              ta: "கசிவு",
            },
            {
              en: "Catabolism",
              ta: "கேடபாலிசம்",
            },
            {
              en: "Fragmentation",
              ta: "துண்டு துண்டாக்குதல்",
            },
            {
              en: "Mineralization",
              ta: "தாதுமயமாக்கல்",
            },
          ],
          correctAnswer: "Fragmentation",
          solution: "Fragmentation is the first step in decomposition, where detritivores (e.g., earthworms) break down detritus into smaller particles. Leaching is the process where water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts. Catabolism is the enzymatic degradation of detritus into simpler inorganic substances. Mineralization is the release of inorganic nutrients from humus.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ015",
          question: {
            en: "Which of the following is a consequence of biomagnification of DDT in aquatic food chains?",
            ta: "நீர்வாழ் உணவுச் சங்கிலிகளில் டிடிடியின் உயிரிப்பெருக்கத்தின் விளைவாக கீழ்க்கண்டவற்றுள் எது ஏற்படும்?",
          },
          options: [
            {
              en: "Increased fish population.",
              ta: "மீன் மக்கள் தொகை அதிகரிப்பு.",
            },
            {
              en: "Thickening of eggshells in birds.",
              ta: "பறவைகளின் முட்டை ஓடுகள் தடிமனாக்குதல்.",
            },
            {
              en: "Premature breaking of eggshells in birds.",
              ta: "பறவைகளின் முட்டை ஓடுகள் முன்கூட்டியே உடைதல்.",
            },
            {
              en: "Enhanced primary productivity.",
              ta: "மேம்படுத்தப்பட்ட முதன்மை உற்பத்தித்திறன்.",
            },
          ],
          correctAnswer: "Premature breaking of eggshells in birds.",
          solution: "High concentrations of DDT accumulated through biomagnification interfere with calcium metabolism in birds, causing thinning of eggshells and their premature breaking, which eventually leads to a decline in bird populations.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ016",
          question: {
            en: "The UN Conference of Parties on climate change in the year 2015 was held in...",
            ta: "2015 ஆம் ஆண்டில் காலநிலை மாற்றம் குறித்த ஐ.நா கட்சிகளின் மாநாடு எங்கு நடைபெற்றது?",
          },
          options: [
            {
              en: "Lima",
              ta: "லிமா",
            },
            {
              en: "Paris",
              ta: "பாரிஸ்",
            },
            {
              en: "Doha",
              ta: "தோஹா",
            },
            {
              en: "Copenhagen",
              ta: "கோபன்ஹேகன்",
            },
          ],
          correctAnswer: "Paris",
          solution: "The 21st Conference of the Parties (COP21) to the UNFCCC, also known as the 2015 Paris Climate Conference, was held in Paris, France.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ017",
          question: {
            en: "Which of the following is an example of a gaseous type of biogeochemical cycle?",
            ta: "கீழ்க்கண்டவற்றுள் எது வாயு வகை உயிரியல் புவி வேதியியல் சுழற்சிக்கு ஒரு எடுத்துக்காட்டு?",
          },
          options: [
            {
              en: "Phosphorus cycle",
              ta: "பாஸ்பரஸ் சுழற்சி",
            },
            {
              en: "Sulphur cycle",
              ta: "சல்பர் சுழற்சி",
            },
            {
              en: "Carbon cycle",
              ta: "கார்பன் சுழற்சி",
            },
            {
              en: "Calcium cycle",
              ta: "கால்சியம் சுழற்சி",
            },
          ],
          correctAnswer: "Carbon cycle",
          solution: "Gaseous cycles have their reservoir in the atmosphere (e.g., carbon, nitrogen), while sedimentary cycles have their reservoir in the Earth's crust (e.g., phosphorus, sulphur, calcium).",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ018",
          question: {
            en: "What is the term for the maximum population size that an environment can sustain indefinitely?",
            ta: "ஒரு சூழலால் காலவரையின்றி தாங்கக்கூடிய அதிகபட்ச மக்கள் தொகை அளவுக்கான சொல் என்ன?",
          },
          options: [
            {
              en: "Biotic potential",
              ta: "உயிரியல் திறன்",
            },
            {
              en: "Population density",
              ta: "மக்கள் தொகை அடர்த்தி",
            },
            {
              en: "Carrying capacity",
              ta: "தாங்குதிறன்",
            },
            {
              en: "Environmental resistance",
              ta: "சுற்றுச்சூழல் எதிர்ப்பு",
            },
          ],
          correctAnswer: "Carrying capacity",
          solution: "Carrying capacity (K) is the maximum population size that the environment can sustain indefinitely, given the available resources and environmental conditions.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ019",
          question: {
            en: "Which of the following is a method for controlling air pollution?",
            ta: "கீழ்க்கண்டவற்றுள் காற்று மாசுபாட்டைக் கட்டுப்படுத்தும் ஒரு முறை எது?",
          },
          options: [
            {
              en: "Sewage treatment plants",
              ta: "கழிவுநீர் சுத்திகரிப்பு நிலையங்கள்",
            },
            {
              en: "Electrostatic precipitator",
              ta: "எலக்ட்ரோஸ்டேடிக் பிரசிபிடேட்டர்",
            },
            {
              en: "Landfilling",
              ta: "நிலப்பரப்பு",
            },
            {
              en: "Composting",
              ta: "உரம் தயாரித்தல்",
            },
          ],
          correctAnswer: "Electrostatic precipitator",
          solution: "Electrostatic precipitators are widely used to remove particulate matter from industrial exhaust. Sewage treatment plants deal with water pollution, and landfilling/composting are methods for solid waste management.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ020",
          question: {
            en: "The primary producers in a deep-sea hydrothermal vent ecosystem are...",
            ta: "ஆழ்கடல் ஹைட்ரோதெர்மல் வென்ட் சூழல் மண்டலத்தில் முதன்மை உற்பத்தியாளர்கள்...",
          },
          options: [
            {
              en: "green algae.",
              ta: "பச்சை பாசிகள்.",
            },
            {
              en: "chemosynthetic bacteria.",
              ta: "வேதிச்சேர்க்கை பாக்டீரியா.",
            },
            {
              en: "phytoplankton.",
              ta: "ஃபைட்டோபிளாங்க்டன்.",
            },
            {
              en: "coral reefs.",
              ta: "பவளப்பாறைகள்.",
            },
          ],
          correctAnswer: "chemosynthetic bacteria.",
          solution: "Deep-sea hydrothermal vents lack sunlight, so primary production is carried out by chemosynthetic bacteria that derive energy from the oxidation of chemical compounds like hydrogen sulfide.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ021",
          question: {
            en: "Which of the following represents the correct sequence of seral stages in hydrarch succession?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஹைட்ரார்ச் தொடர்ச்சியில் செரல் நிலைகளின் சரியான வரிசையை குறிக்கிறது?",
          },
          options: [
            {
              en: "Phytoplankton $\rightarrow$ Submerged plant $\rightarrow$ Floating plant $\rightarrow$ Reed-swamp $\rightarrow$ Marsh-meadow $\rightarrow$ Scrub $\rightarrow$ Forest",
              ta: "ஃபைட்டோபிளாங்க்டன் $\rightarrow$ மூழ்கிய தாவரம் $\rightarrow$ மிதக்கும் தாவரம் $\rightarrow$ நாணல்-சதுப்பு $\rightarrow$ சதுப்பு நிலம் $\rightarrow$ புதர் $\rightarrow$ காடு",
            },
            {
              en: "Phytoplankton $\rightarrow$ Floating plant $\rightarrow$ Submerged plant $\rightarrow$ Reed-swamp $\rightarrow$ Marsh-meadow $\rightarrow$ Scrub $\rightarrow$ Forest",
              ta: "ஃபைட்டோபிளாங்க்டன் $\rightarrow$ மிதக்கும் தாவரம் $\rightarrow$ மூழ்கிய தாவரம் $\rightarrow$ நாணல்-சதுப்பு $\rightarrow$ சதுப்பு நிலம் $\rightarrow$ புதர் $\rightarrow$ காடு",
            },
            {
              en: "Submerged plant $\rightarrow$ Phytoplankton $\rightarrow$ Floating plant $\rightarrow$ Reed-swamp $\rightarrow$ Marsh-meadow $\rightarrow$ Scrub $\rightarrow$ Forest",
              ta: "மூழ்கிய தாவரம் $\rightarrow$ ஃபைட்டோபிளாங்க்டன் $\rightarrow$ மிதக்கும் தாவரம் $\rightarrow$ நாணல்-சதுப்பு $\rightarrow$ சதுப்பு நிலம் $\rightarrow$ புதர் $\rightarrow$ காடு",
            },
            {
              en: "Forest $\rightarrow$ Scrub $\rightarrow$ Marsh-meadow $\rightarrow$ Reed-swamp $\rightarrow$ Floating plant $\rightarrow$ Submerged plant $\rightarrow$ Phytoplankton",
              ta: "காடு $\rightarrow$ புதர் $\rightarrow$ சதுப்பு நிலம் $\rightarrow$ நாணல்-சதுப்பு $\rightarrow$ மிதக்கும் தாவரம் $\rightarrow$ மூழ்கிய தாவரம் $\rightarrow$ ஃபைட்டோபிளாங்க்டன்",
            },
          ],
          correctAnswer: "Phytoplankton $\rightarrow$ Submerged plant $\rightarrow$ Floating plant $\rightarrow$ Reed-swamp $\rightarrow$ Marsh-meadow $\rightarrow$ Scrub $\rightarrow$ Forest",
          solution: "Hydrarch succession starts in water (e.g., pond) and progresses to mesic (medium water condition) conditions. The typical sequence is: Phytoplankton stage, Submerged plant stage, Submerged free-floating stage, Reed-swamp stage, Marsh-meadow stage, Scrub stage, and finally the Climax forest stage.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ022",
          question: {
            en: "Which of the following greenhouse gases has the highest global warming potential?",
            ta: "கீழ்க்கண்ட எந்த பசுமை இல்ல வாயு அதிக உலக வெப்பமயமாதல் ஆற்றலைக் கொண்டுள்ளது?",
          },
          options: [
            {
              en: "Carbon dioxide ($\text{CO}_2$)",
              ta: "கார்பன் டை ஆக்சைடு ($\text{CO}_2$)",
            },
            {
              en: "Methane ($\text{CH}_4$)",
              ta: "மீத்தேன் ($\text{CH}_4$)",
            },
            {
              en: "Nitrous oxide ($\text{N}_2\text{O}$)",
              ta: "நைட்ரஸ் ஆக்சைடு ($\text{N}_2\text{O}$)",
            },
            {
              en: "Chlorofluorocarbons (CFCs)",
              ta: "குளோரோபுளோரோகார்பன்கள் (CFCs)",
            },
          ],
          correctAnswer: "Chlorofluorocarbons (CFCs)",
          solution: "While $\text{CO}_2$ is the most abundant and contributes most to total warming, CFCs have an extremely high global warming potential per molecule, thousands of times greater than $\text{CO}_2$. Methane and $\text{N}_2\text{O}$ also have higher GWP than $\text{CO}_2$ but less than CFCs.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ023",
          question: {
            en: "The phenomenon where an organism temporarily moves away from a stressful habitat to a more hospitable area is called...",
            ta: "ஒரு உயிரினம் தற்காலிகமாக அழுத்தமான வாழ்விடத்திலிருந்து மிகவும் வசதியான பகுதிக்கு இடம்பெயரும் நிகழ்வு இவ்வாறு அழைக்கப்படுகிறது...",
          },
          options: [
            {
              en: "Hibernation",
              ta: "குளிர்கால உறக்கம்",
            },
            {
              en: "Aestivation",
              ta: "கோடைக்கால உறக்கம்",
            },
            {
              en: "Migration",
              ta: "இடம்பெயர்வு",
            },
            {
              en: "Diapause",
              ta: "டயபவுஸ்",
            },
          ],
          correctAnswer: "Migration",
          solution: "Migration is the temporary movement of organisms from a stressful habitat to a more hospitable area. Hibernation and aestivation are forms of suspension, while diapause is a stage of suspended development in zooplankton.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ024",
          question: {
            en: "Which of the following statements about decomposers is correct?",
            ta: "கீழ்க்கண்ட சிதைப்பவர்கள் பற்றிய கூற்றுக்களில் எது சரியானது?",
          },
          options: [
            {
              en: "They are autotrophs.",
              ta: "அவை தன்னூட்ட உயிரினங்கள்.",
            },
            {
              en: "They produce organic matter.",
              ta: "அவை கரிமப் பொருட்களை உற்பத்தி செய்கின்றன.",
            },
            {
              en: "They break down complex organic matter into inorganic substances.",
              ta: "அவை சிக்கலான கரிமப் பொருட்களை கனிமப் பொருட்களாக உடைக்கின்றன.",
            },
            {
              en: "They are always at the top of the food chain.",
              ta: "அவை எப்போதும் உணவுச் சங்கிலியின் உச்சியில் இருக்கும்.",
            },
          ],
          correctAnswer: "They break down complex organic matter into inorganic substances.",
          solution: "Decomposers (like bacteria and fungi) are heterotrophs that break down dead organic matter (detritus) into simpler inorganic substances through the process of decomposition.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ025",
          question: {
            en: "The major cause of increasing skin cancer cases in humans is...",
            ta: "மனிதர்களில் தோல் புற்றுநோய் வழக்குகளின் அதிகரிப்பிற்கு முக்கிய காரணம்...",
          },
          options: [
            {
              en: "acid rain.",
              ta: "அமில மழை.",
            },
            {
              en: "global warming.",
              ta: "புவி வெப்பமயமாதல்.",
            },
            {
              en: "ozone depletion.",
              ta: "ஓசோன் குறைவு.",
            },
            {
              en: "water pollution.",
              ta: "நீர் மாசுபாடு.",
            },
          ],
          correctAnswer: "ozone depletion.",
          solution: "Ozone depletion leads to increased penetration of harmful UV-B radiation to Earth's surface, which can cause skin cancer, cataracts, and damage to the immune system in humans.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ026",
          question: {
            en: "In a logistic growth model, when N = K, the population growth rate (dN/dt) will be...",
            ta: "ஒரு ஏற்றுமதி வளர்ச்சி மாதிரியில், N = K ஆக இருக்கும்போது, மக்கள் தொகை வளர்ச்சி விகிதம் (dN/dt) இருக்கும்...",
          },
          options: [
            {
              en: "maximum.",
              ta: "அதிகபட்சம்.",
            },
            {
              en: "zero.",
              ta: "பூஜ்யம்.",
            },
            {
              en: "increasing.",
              ta: "அதிகரித்து வருகிறது.",
            },
            {
              en: "decreasing.",
              ta: "குறைந்து வருகிறது.",
            },
          ],
          correctAnswer: "zero.",
          solution: "In the logistic growth equation, $\frac{dN}{dt} = rN \left( \frac{K-N}{K} \right)$. When N (population size) equals K (carrying capacity), the term $\left( \frac{K-N}{K} \right)$ becomes zero, making $\frac{dN}{dt} = 0$. This means the population growth rate is zero, and the population has reached its stable size.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ027",
          question: {
            en: "Which of the following is an effect of acid rain?",
            ta: "கீழ்க்கண்டவற்றுள் அமில மழையின் ஒரு விளைவு எது?",
          },
          options: [
            {
              en: "Ozone layer depletion.",
              ta: "ஓசோன் அடுக்கு குறைவு.",
            },
            {
              en: "Damage to buildings and monuments.",
              ta: "கட்டிடங்கள் மற்றும் நினைவுச்சின்னங்களுக்கு சேதம்.",
            },
            {
              en: "Biomagnification in food chains.",
              ta: "உணவுச் சங்கிலிகளில் உயிரிப்பெருக்கம்.",
            },
            {
              en: "Increased skin cancer.",
              ta: "தோல் புற்றுநோய் அதிகரிப்பு.",
            },
          ],
          correctAnswer: "Damage to buildings and monuments.",
          solution: "Acid rain, caused by $\text{SO}_2$ and $\text{NO}_x$ emissions, has detrimental effects on aquatic life, forests, and also corrodes buildings and monuments, especially those made of marble (e.g., Taj Mahal). Ozone layer depletion leads to increased UV radiation and skin cancer. Biomagnification is related to persistent pollutants like DDT.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ028",
          question: {
            en: "The ecological niche of a species is best described as its...",
            ta: "ஒரு இனத்தின் சூழலியல் வாழிடம் சிறந்தது இதன் மூலம் விவரிக்கப்படுகிறது...",
          },
          options: [
            {
              en: "physical address in the ecosystem.",
              ta: "சூழல் மண்டலத்தில் அதன் இயற்பியல் முகவரி.",
            },
            {
              en: "role in the ecosystem, including its resource use and interactions.",
              ta: "சூழல் மண்டலத்தில் அதன் பங்கு, அதன் வள பயன்பாடு மற்றும் தொடர்புகள் உட்பட.",
            },
            {
              en: "geographic distribution.",
              ta: "புவியியல் விநியோகம்.",
            },
            {
              en: "trophic level.",
              ta: "ஊட்டச்சத்து நிலை.",
            },
          ],
          correctAnswer: "role in the ecosystem, including its resource use and interactions.",
          solution: "A niche describes the functional role of a species in its ecosystem, encompassing all its interactions with biotic and abiotic factors, its resource consumption, and its impact on the environment. Habitat is its physical address.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ029",
          question: {
            en: "Which of the following is an adaptation to cope with extreme cold conditions?",
            ta: "கீழ்க்கண்டவற்றுள் எது கடுமையான குளிர் நிலைமைகளை சமாளிக்க ஒரு தகவமைப்பு?",
          },
          options: [
            {
              en: "Desert lizards basking in the sun.",
              ta: "பாலைவன பல்லிகள் சூரிய ஒளியில் குளிப்பது.",
            },
            {
              en: "Kangaroo rat meeting water needs through internal fat oxidation.",
              ta: "உள் கொழுப்பு ஆக்சிஜனேற்றம் மூலம் நீர் தேவைகளை பூர்த்தி செய்யும் கங்காரு எலி.",
            },
            {
              en: "Polar bears going into hibernation.",
              ta: "துருவ கரடிகள் குளிர்கால உறக்கத்திற்கு செல்வது.",
            },
            {
              en: "Many desert plants having thick cuticles and sunken stomata.",
              ta: "பல பாலைவன தாவரங்கள் தடித்த கியூட்டிகள்கள் மற்றும் மூழ்கிய ஸ்டோமேட்டாக்களைக் கொண்டிருப்பது.",
            },
          ],
          correctAnswer: "Polar bears going into hibernation.",
          solution: "Hibernation (winter sleep) is a strategy to escape extreme cold by going into a state of inactivity. Basking is for heat gain in cold desert mornings. Kangaroo rat and desert plants adaptations are for water conservation in hot conditions.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ030",
          question: {
            en: "The process of mineralization in decomposition refers to the...",
            ta: "சிதைவில் உள்ள தாதுமயமாக்கல் செயல்முறை எதைக் குறிக்கிறது...",
          },
          options: [
            {
              en: "breakdown of detritus into smaller fragments.",
              ta: "இறந்த கரிமப் பொருட்களை சிறிய துண்டுகளாக உடைத்தல்.",
            },
            {
              en: "release of inorganic nutrients from humus.",
              ta: "ஹியூமஸில் இருந்து கனிம ஊட்டச்சத்துக்களை வெளியிடுதல்.",
            },
            {
              en: "movement of water-soluble nutrients into soil layers.",
              ta: "நீர்-கரையக்கூடிய ஊட்டச்சத்துக்கள் மண் அடுக்குகளுக்குள் நகர்தல்.",
            },
            {
              en: "enzymatic degradation of detritus.",
              ta: "இறந்த கரிமப் பொருட்களின் நொதி சிதைவு.",
            },
          ],
          correctAnswer: "release of inorganic nutrients from humus.",
          solution: "Mineralization is the final step in decomposition, where humus is further degraded by microbes, releasing inorganic nutrients back into the soil, making them available for plants.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ031",
          question: {
            en: "Which of the following describes the trophic level of a grasshopper?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஒரு வெட்டுக்கிளியின் ஊட்டச்சத்து நிலையை விவரிக்கிறது?",
          },
          options: [
            {
              en: "Primary producer",
              ta: "முதன்மை உற்பத்தியாளர்",
            },
            {
              en: "Primary consumer",
              ta: "முதன்மை நுகர்வோர்",
            },
            {
              en: "Secondary consumer",
              ta: "இரண்டாம் நிலை நுகர்வோர்",
            },
            {
              en: "Decomposer",
              ta: "சிதைப்பவர்",
            },
          ],
          correctAnswer: "Primary consumer",
          solution: "Grasshoppers feed on plants (producers), making them herbivores or primary consumers.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ032",
          question: {
            en: "The process of an ecosystem moving towards a climax community from bare land is called...",
            ta: "வெற்று நிலத்திலிருந்து ஒரு சூழல் மண்டலம் ஒரு உச்சநிலை சமூகத்தை நோக்கி நகரும் செயல்முறை இவ்வாறு அழைக்கப்படுகிறது...",
          },
          options: [
            {
              en: "retrogression.",
              ta: "பிற்போக்கு.",
            },
            {
              en: "ecological succession.",
              ta: "சூழலியல் தொடர்ச்சி.",
            },
            {
              en: "eutrophication.",
              ta: "யூட்ரோஃபிகேஷன்.",
            },
            {
              en: "decomposition.",
              ta: "சிதைவுறுதல்.",
            },
          ],
          correctAnswer: "ecological succession.",
          solution: "Ecological succession is the gradual and predictable change in species composition of an area over time, eventually leading to a stable climax community.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ033",
          question: {
            en: "Which of the following is a major consequence of global warming?",
            ta: "கீழ்க்கண்டவற்றுள் புவி வெப்பமயமாதலின் ஒரு முக்கிய விளைவு எது?",
          },
          options: [
            {
              en: "Decrease in sea level.",
              ta: "கடல் மட்டம் குறைதல்.",
            },
            {
              en: "Increase in biodiversity.",
              ta: "பல்லுயிர் அதிகரிப்பு.",
            },
            {
              en: "Melting of polar ice caps and rising sea levels.",
              ta: "துருவ பனி தொப்பிகள் உருகுதல் மற்றும் கடல் மட்டம் உயர்தல்.",
            },
            {
              en: "Increase in agricultural productivity.",
              ta: "விவசாய உற்பத்தித்திறன் அதிகரிப்பு.",
            },
          ],
          correctAnswer: "Melting of polar ice caps and rising sea levels.",
          solution: "Global warming causes glaciers and polar ice caps to melt, leading to a rise in sea levels, which can inundate coastal areas and displace millions of people.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ034",
          question: {
            en: "The Montreal Protocol is associated with the control of...",
            ta: "மாண்ட்ரீல் புரோட்டோகால் எதைக் கட்டுப்படுத்துவதுடன் தொடர்புடையது?",
          },
          options: [
            {
              en: "global warming.",
              ta: "புவி வெப்பமயமாதல்.",
            },
            {
              en: "ozone depletion.",
              ta: "ஓசோன் குறைவு.",
            },
            {
              en: "water pollution.",
              ta: "நீர் மாசுபாடு.",
            },
            {
              en: "radioactive waste.",
              ta: "கதிரியக்க கழிவுகள்.",
            },
          ],
          correctAnswer: "ozone depletion.",
          solution: "The Montreal Protocol, an international treaty, was designed to protect the ozone layer by phasing out the production of numerous substances responsible for ozone depletion, such as CFCs.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ035",
          question: {
            en: "Which of the following is a sedimentary type of biogeochemical cycle?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஒரு படிவு வகை உயிரியல் புவி வேதியியல் சுழற்சி?",
          },
          options: [
            {
              en: "Nitrogen cycle",
              ta: "நைட்ரஜன் சுழற்சி",
            },
            {
              en: "Oxygen cycle",
              ta: "ஆக்ஸிஜன் சுழற்சி",
            },
            {
              en: "Carbon cycle",
              ta: "கார்பன் சுழற்சி",
            },
            {
              en: "Phosphorus cycle",
              ta: "பாஸ்பரஸ் சுழற்சி",
            },
          ],
          correctAnswer: "Phosphorus cycle",
          solution: "Phosphorus cycle is a sedimentary cycle, meaning its reservoir is in the Earth's crust. Nitrogen, oxygen, and carbon cycles are gaseous cycles with atmospheric reservoirs.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ036",
          question: {
            en: "The phenomenon of organisms moving to a deeper part of a lake or ocean to avoid hot summer conditions is called...",
            ta: "வெப்பமான கோடை கால நிலைமைகளைத் தவிர்க்க ஒரு ஏரி அல்லது கடலின் ஆழமான பகுதிக்கு உயிரினங்கள் நகரும் நிகழ்வு இவ்வாறு அழைக்கப்படுகிறது...",
          },
          options: [
            {
              en: "Diapause",
              ta: "டயபவுஸ்",
            },
            {
              en: "Hibernation",
              ta: "குளிர்கால உறக்கம்",
            },
            {
              en: "Aestivation",
              ta: "கோடைக்கால உறக்கம்",
            },
            {
              en: "Migration",
              ta: "இடம்பெயர்வு",
            },
          ],
          correctAnswer: "Aestivation",
          solution: "Aestivation (summer sleep) is a strategy to avoid heat and desiccation during hot, dry periods. Diapause is a stage of suspended development in zooplankton and insects. Hibernation is for winter. Migration is temporary movement to another habitat.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ037",
          question: {
            en: "Which of the following is the most important factor in determining the type of vegetation in an area?",
            ta: "கீழ்க்கண்டவற்றுள் ஒரு பகுதியில் தாவர வகையை தீர்மானிப்பதில் மிக முக்கியமான காரணி எது?",
          },
          options: [
            {
              en: "Soil composition",
              ta: "மண் கலவை",
            },
            {
              en: "Temperature",
              ta: "வெப்பநிலை",
            },
            {
              en: "Light intensity",
              ta: "ஒளி தீவிரம்",
            },
            {
              en: "Water availability",
              ta: "நீர் கிடைப்பது",
            },
          ],
          correctAnswer: "Water availability",
          solution: "Water is the most crucial factor determining the type of vegetation, especially in terrestrial environments. The amount and distribution of precipitation directly affect what plants can grow in a region.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ038",
          question: {
            en: "The term 'detritivores' refers to organisms that...",
            ta: "'சிதைவூட்டிகள்' என்ற சொல் எந்த உயிரினங்களைக் குறிக்கிறது?",
          },
          options: [
            {
              en: "produce their own food.",
              ta: "தங்களுக்குத் தேவையான உணவை உற்பத்தி செய்கின்றன.",
            },
            {
              en: "feed on living plants.",
              ta: "வாழும் தாவரங்களை உணவாக உட்கொள்கின்றன.",
            },
            {
              en: "feed on dead organic matter.",
              ta: "இறந்த கரிமப் பொருட்களை உணவாக உட்கொள்கின்றன.",
            },
            {
              en: "prey on other animals.",
              ta: "பிற விலங்குகளை வேட்டையாடுகின்றன.",
            },
          ],
          correctAnswer: "feed on dead organic matter.",
          solution: "Detritivores are organisms (like earthworms, some insects) that feed on detritus (dead organic matter), contributing to fragmentation during decomposition.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ039",
          question: {
            en: "Which of the following describes the trophic level of a tiger?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஒரு புலியின் ஊட்டச்சத்து நிலையை விவரிக்கிறது?",
          },
          options: [
            {
              en: "Primary consumer",
              ta: "முதன்மை நுகர்வோர்",
            },
            {
              en: "Secondary consumer",
              ta: "இரண்டாம் நிலை நுகர்வோர்",
            },
            {
              en: "Tertiary consumer",
              ta: "மூன்றாம் நிலை நுகர்வோர்",
            },
            {
              en: "Producer",
              ta: "உற்பத்தியாளர்",
            },
          ],
          correctAnswer: "Tertiary consumer",
          solution: "Tigers are carnivores that typically feed on herbivores (primary consumers) or other carnivores (secondary consumers), placing them generally at the tertiary consumer level or sometimes secondary if they directly eat herbivores.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ040",
          question: {
            en: "The most stable ecosystem is...",
            ta: "மிகவும் நிலையான சூழல் மண்டலம் எது?",
          },
          options: [
            {
              en: "forest.",
              ta: "காடு.",
            },
            {
              en: "ocean.",
              ta: "கடல்.",
            },
            {
              en: "desert.",
              ta: "பாலைவனம்.",
            },
            {
              en: "grassland.",
              ta: "புல்வெளி.",
            },
          ],
          correctAnswer: "ocean.",
          solution: "Oceans are often considered the most stable ecosystems due to their vast size, thermal stability, and high biodiversity. They are less susceptible to rapid changes compared to terrestrial ecosystems.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ041",
          question: {
            en: "The primary role of bacteria and fungi in an ecosystem is as...",
            ta: "ஒரு சூழல் மண்டலத்தில் பாக்டீரியா மற்றும் பூஞ்சைகளின் முதன்மை பங்கு என்னவென்றால்...",
          },
          options: [
            {
              en: "producers.",
              ta: "உற்பத்தியாளர்கள்.",
            },
            {
              en: "consumers.",
              ta: "நுகர்வோர்.",
            },
            {
              en: "decomposers.",
              ta: "சிதைப்பவர்கள்.",
            },
            {
              en: "regulators.",
              ta: "ஒழுங்குபடுத்துபவர்கள்.",
            },
          ],
          correctAnswer: "decomposers.",
          solution: "Bacteria and fungi are the principal decomposers, breaking down dead organic matter and recycling nutrients back into the ecosystem.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ042",
          question: {
            en: "Which of the following is a potential consequence of deforestation for local climate?",
            ta: "கீழ்க்கண்டவற்றுள் உள்ளூர் காலநிலைக்கான காடழிப்பின் சாத்தியமான விளைவு எது?",
          },
          options: [
            {
              en: "Increased rainfall.",
              ta: "மழைப்பொழிவு அதிகரிப்பு.",
            },
            {
              en: "Decreased temperature.",
              ta: "வெப்பநிலை குறைவு.",
            },
            {
              en: "Increased humidity.",
              ta: "ஈரப்பதம் அதிகரிப்பு.",
            },
            {
              en: "Reduced cloud formation and rainfall.",
              ta: "மேகம் உருவாவது மற்றும் மழைப்பொழிவு குறைவு.",
            },
          ],
          correctAnswer: "Reduced cloud formation and rainfall.",
          solution: "Forests play a crucial role in the water cycle through evapotranspiration. Deforestation reduces this process, leading to less moisture in the air, reduced cloud formation, and ultimately decreased rainfall in the region.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ043",
          question: {
            en: "The phenomenon of 'thermal stratification' is most pronounced in which of the following ecosystems?",
            ta: "'வெப்ப அடுக்கிடுதல்' நிகழ்வு கீழ்க்கண்ட எந்த சூழல் மண்டலங்களில் மிகவும் உச்சரிக்கப்படுகிறது?",
          },
          options: [
            {
              en: "Deserts",
              ta: "பாலைவனங்கள்",
            },
            {
              en: "Tropical rainforests",
              ta: "வெப்பமண்டல மழைக்காடுகள்",
            },
            {
              en: "Deep lakes",
              ta: "ஆழமான ஏரிகள்",
            },
            {
              en: "Grasslands",
              ta: "புல்வெளிகள்",
            },
          ],
          correctAnswer: "Deep lakes",
          solution: "Thermal stratification, where a body of water separates into layers with different temperatures, is a common phenomenon in deep lakes, especially during summer and winter. This affects oxygen distribution and nutrient cycling.",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ044",
          question: {
            en: "Which interaction involves one species consuming another for food?",
            ta: "ஒரு இனம் மற்றொன்றை உணவாக உட்கொள்வது எந்த தொடர்பில் அடங்கும்?",
          },
          options: [
            {
              en: "Commensalism",
              ta: "கூட்டமைவு",
            },
            {
              en: "Parasitism",
              ta: "ஒட்டுண்ணித்தன்மை",
            },
            {
              en: "Predation",
              ta: "வேட்டையாடுதல்",
            },
            {
              en: "Mutualism",
              ta: "ஒத்துழைப்பு",
            },
          ],
          correctAnswer: "Predation",
          solution: "Predation is an interaction where one organism (the predator) kills and consumes another organism (the prey) for food. Parasitism involves one organism living on or in another and benefiting at the host's expense, usually without killing it immediately.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ045",
          question: {
            en: "The 'ozone hole' is most prominently observed over which region?",
            ta: "'ஓசோன் துளை' எந்தப் பகுதியில் மிகவும் முக்கியமாக காணப்படுகிறது?",
          },
          options: [
            {
              en: "Equator",
              ta: "நிலநடுக்கோடு",
            },
            {
              en: "Arctic region",
              ta: "ஆர்க்டிக் பகுதி",
            },
            {
              en: "Antarctic region",
              ta: "அண்டார்டிக் பகுதி",
            },
            {
              en: "Temperate regions",
              ta: "மிதவெப்ப மண்டலங்கள்",
            },
          ],
          correctAnswer: "Antarctic region",
          solution: "The ozone hole is a region of exceptionally depleted ozone in the stratosphere over the Antarctic region, particularly prominent during the Southern Hemisphere spring (September to November).",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ046",
          question: {
            en: "Which of the following is an example of an endothermic organism?",
            ta: "கீழ்க்கண்டவற்றுள் எது ஒரு அகவெப்பமுள்ள உயிரினத்திற்கு ஒரு எடுத்துக்காட்டு?",
          },
          options: [
            {
              en: "Frog",
              ta: "தவளை",
            },
            {
              en: "Snake",
              ta: "பாம்பு",
            },
            {
              en: "Fish",
              ta: "மீன்",
            },
            {
              en: "Bird",
              ta: "பறவை",
            },
          ],
          correctAnswer: "Bird",
          solution: "Endothermic organisms (warm-blooded) can regulate their body temperature internally. Birds and mammals are endotherms. Frogs, snakes, and fish are ectothermic (cold-blooded).",
          neetFrequency: 1,
        },
        {
          type: "mcq",
          id: "MCQ047",
          question: {
            en: "The most common type of ecological pyramid that can be inverted is the pyramid of...",
            ta: "தலைகீழாக இருக்கக்கூடிய மிகவும் பொதுவான சூழலியல் பிரமிடு எது?",
          },
          options: [
            {
              en: "energy.",
              ta: "ஆற்றல்.",
            },
            {
              en: "biomass in aquatic ecosystems.",
              ta: "நீர்வாழ் சூழல் மண்டலங்களில் உள்ள உயிரித்தொகை.",
            },
            {
              en: "numbers in grassland ecosystems.",
              ta: "புல்வெளி சூழல் மண்டலங்களில் உள்ள எண்ணிக்கை.",
            },
            {
              en: "biomass in terrestrial ecosystems.",
              ta: "நிலப்பரப்பு சூழல் மண்டலங்களில் உள்ள உயிரித்தொகை.",
            },
          ],
          correctAnswer: "biomass in aquatic ecosystems.",
          solution: "The pyramid of energy is always upright. The pyramid of biomass is inverted in aquatic ecosystems because the biomass of primary producers (phytoplankton) is often less than that of primary consumers (zooplankton) due to rapid turnover rates.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ048",
          question: {
            en: "Acid rain is primarily caused by emissions of...",
            ta: "அமில மழை முக்கியமாக இதன் வெளியேற்றங்களால் ஏற்படுகிறது...",
          },
          options: [
            {
              en: "carbon dioxide and methane.",
              ta: "கார்பன் டை ஆக்சைடு மற்றும் மீத்தேன்.",
            },
            {
              en: "sulfur dioxide and nitrogen oxides.",
              ta: "சல்பர் டை ஆக்சைடு மற்றும் நைட்ரஜன் ஆக்சைடுகள்.",
            },
            {
              en: "chlorofluorocarbons and hydrocarbons.",
              ta: "குளோரோபுளோரோகார்பன்கள் மற்றும் ஹைட்ரோகார்பன்கள்.",
            },
            {
              en: "ozone and particulate matter.",
              ta: "ஓசோன் மற்றும் துகள்கள்.",
            },
          ],
          correctAnswer: "sulfur dioxide and nitrogen oxides.",
          solution: "Acid rain is mainly caused by sulfur dioxide ($\text{SO}_2$) and nitrogen oxides ($\text{NO}_x$) released into the atmosphere, which react with water, oxygen, and other chemicals to form sulfuric and nitric acids.",
          neetFrequency: 3,
        },
        {
          type: "mcq",
          id: "MCQ049",
          question: {
            en: "Which of the following is a major consequence of deforestation on soil?",
            ta: "கீழ்க்கண்டவற்றுள் காடழிப்பின் மண்ணின் மீதான ஒரு முக்கிய விளைவு எது?",
          },
          options: [
            {
              en: "Increased soil fertility.",
              ta: "மண் வளம் அதிகரிப்பு.",
            },
            {
              en: "Reduced soil erosion.",
              ta: "மண் அரிப்பு குறைவு.",
            },
            {
              en: "Desertification.",
              ta: "பாலைவனமாக்கல்.",
            },
            {
              en: "Increased water retention in soil.",
              ta: "மண்ணில் நீர் தக்கவைத்தல் அதிகரிப்பு.",
            },
          ],
          correctAnswer: "Desertification.",
          solution: "Deforestation removes tree cover, leading to increased exposure of soil to wind and rain, resulting in soil erosion. Prolonged and severe soil erosion can degrade land and eventually lead to desertification.",
          neetFrequency: 2,
        },
        {
          type: "mcq",
          id: "MCQ050",
          question: {
            en: "The primary source of energy in most ecosystems is...",
            ta: "பெரும்பாலான சூழல் மண்டலங்களில் ஆற்றலின் முதன்மை ஆதாரம்...",
          },
          options: [
            {
              en: "geothermal energy.",
              ta: "புவிவெப்ப ஆற்றல்.",
            },
            {
              en: "chemical energy.",
              ta: "வேதியியல் ஆற்றல்.",
            },
            {
              en: "solar energy.",
              ta: "சூரிய ஆற்றல்.",
            },
            {
              en: "wind energy.",
              ta: "காற்றாற்றல்.",
            },
          ],
          correctAnswer: "solar energy.",
          solution: "In most ecosystems, primary producers (photosynthetic organisms) capture solar energy and convert it into chemical energy, forming the base of the food web. Geothermal and chemical energy are important in specific ecosystems like hydrothermal vents, but not most.",
          neetFrequency: 1,
        },
        // 5 Assertion-Reason Questions
        {
          type: "assertion-reason",
          id: "AR001",
          assertion: {
            en: "Assertion (A): The pyramid of energy is always upright.",
            ta: "கூற்று (A): ஆற்றல் பிரமிடு எப்போதும் நேராக இருக்கும்.",
          },
          reason: {
            en: "Reason (R): Energy flow in an ecosystem is unidirectional and energy is lost as heat at each trophic level.",
            ta: "காரணம் (R): ஒரு சூழல் மண்டலத்தில் ஆற்றல் ஓட்டம் ஒரு திசையில் உள்ளது மற்றும் ஒவ்வொரு ஊட்டச்சத்து மட்டத்திலும் ஆற்றல் வெப்பமாக இழக்கப்படுகிறது.",
          },
          options: [
            {
              en: "Both A and R are true and R is the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்.",
            },
            {
              en: "Both A and R are true but R is not the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல.",
            },
            {
              en: "A is true but R is false.",
              ta: "A உண்மை ஆனால் R தவறு.",
            },
            {
              en: "A is false but R is true.",
              ta: "A தவறு ஆனால் R உண்மை.",
            },
          ],
          correctAnswer: "Both A and R are true and R is the correct explanation of A.",
          solution: "The pyramid of energy is always upright because, at each successive trophic level, a significant amount of energy is lost as heat (approximately 90%) during metabolic activities, and energy flow is unidirectional. Thus, the energy available decreases at higher trophic levels.",
          neetFrequency: 3,
        },
        {
          type: "assertion-reason",
          id: "AR002",
          assertion: {
            en: "Assertion (A): Eutrophication leads to loss of biodiversity in a lake.",
            ta: "கூற்று (A): யூட்ரோஃபிகேஷன் ஒரு ஏரியில் பல்லுயிர் இழப்புக்கு வழிவகுக்கிறது.",
          },
          reason: {
            en: "Reason (R): It causes algal bloom, which consumes all the oxygen and makes the water anoxic.",
            ta: "காரணம் (R): இது ஆல்கா வளர்ச்சிக்கு காரணமாகிறது, இது அனைத்து ஆக்ஸிஜனையும் உட்கொண்டு நீரை ஆக்ஸிஜன் அற்றதாக ஆக்குகிறது.",
          },
          options: [
            {
              en: "Both A and R are true and R is the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்.",
            },
            {
              en: "Both A and R are true but R is not the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல.",
            },
            {
              en: "A is true but R is false.",
              ta: "A உண்மை ஆனால் R தவறு.",
            },
            {
              en: "A is false but R is true.",
              ta: "A தவறு ஆனால் R உண்மை.",
            },
          ],
          correctAnswer: "Both A and R are true and R is the correct explanation of A.",
          solution: "Eutrophication, driven by nutrient excess, leads to excessive algal growth (algal bloom). When these algae die, decomposers consume them, using up vast amounts of dissolved oxygen. This anoxic condition (lack of oxygen) causes the death of fish and other aquatic organisms, severely reducing biodiversity. So, R correctly explains A.",
          neetFrequency: 3,
        },
        {
          type: "assertion-reason",
          id: "AR003",
          assertion: {
            en: "Assertion (A): Organisms that can maintain a constant body temperature are called regulators.",
            ta: "கூற்று (A): நிலையான உடல் வெப்பநிலையை பராமரிக்கக்கூடிய உயிரினங்கள் ஒழுங்குபடுத்துபவர்கள் என்று அழைக்கப்படுகின்றன.",
          },
          reason: {
            en: "Reason (R): All birds and mammals are good examples of conformers.",
            ta: "காரணம் (R): அனைத்து பறவைகளும் பாலூட்டிகளும் இணங்குபவர்களுக்கு சிறந்த எடுத்துக்காட்டுகள்.",
          },
          options: [
            {
              en: "Both A and R are true and R is the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்.",
            },
            {
              en: "Both A and R are true but R is not the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல.",
            },
            {
              en: "A is true but R is false.",
              ta: "A உண்மை ஆனால் R தவறு.",
            },
            {
              en: "A is false but R is true.",
              ta: "A தவறு ஆனால் R உண்மை.",
            },
          ],
          correctAnswer: "A is true but R is false.",
          solution: "Assertion A is true: organisms that can maintain a constant internal environment are called regulators. However, Reason R is false. All birds and mammals are prime examples of regulators, not conformers. Conformers allow their body temperature or osmotic concentration to change with the ambient environment.",
          neetFrequency: 2,
        },
        {
          type: "assertion-reason",
          id: "AR004",
          assertion: {
            en: "Assertion (A): Deforestation contributes to global warming.",
            ta: "கூற்று (A): காடழிப்பு புவி வெப்பமயமாதலுக்கு பங்களிக்கிறது.",
          },
          reason: {
            en: "Reason (R): Trees absorb carbon dioxide during photosynthesis, and their removal increases atmospheric $\text{CO}_2$ levels.",
            ta: "காரணம் (R): மரங்கள் ஒளிச்சேர்க்கையின் போது கார்பன் டை ஆக்சைடை உறிஞ்சுகின்றன, மேலும் அவற்றை அகற்றுவது வளிமண்டல $\text{CO}_2$ அளவை அதிகரிக்கிறது.",
          },
          options: [
            {
              en: "Both A and R are true and R is the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்.",
            },
            {
              en: "Both A and R are true but R is not the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல.",
            },
            {
              en: "A is true but R is false.",
              ta: "A உண்மை ஆனால் R தவறு.",
            },
            {
              en: "A is false but R is true.",
              ta: "A தவறு ஆனால் R உண்மை.",
            },
          ],
          correctAnswer: "Both A and R are true and R is the correct explanation of A.",
          solution: "Deforestation removes a significant carbon sink (trees), leading to less atmospheric $\text{CO}_2$ absorption. Additionally, burning forests releases stored carbon. Both factors increase atmospheric $\text{CO}_2$ concentration, a major greenhouse gas, thus contributing to global warming. Hence R correctly explains A.",
          neetFrequency: 3,
        },
        {
          type: "assertion-reason",
          id: "AR005",
          assertion: {
            en: "Assertion (A): Competition between species always results in the exclusion of one species.",
            ta: "கூற்று (A): இனங்களுக்கு இடையிலான போட்டி எப்போதும் ஒரு இனத்தின் வெளியேற்றத்திற்கு வழிவகுக்கிறது.",
          },
          reason: {
            en: "Reason (R): Gause's Competitive Exclusion Principle states that two closely related species competing for the same limited resources cannot co-exist indefinitely.",
            ta: "காரணம் (R): கௌஸின் போட்டி வெளியேற்றக் கோட்பாடு, ஒரே வரையறுக்கப்பட்ட வளங்களுக்காக போட்டியிடும் இரண்டு நெருங்கிய தொடர்புடைய இனங்கள் காலவரையின்றி இணைந்து வாழ முடியாது என்று கூறுகிறது.",
          },
          options: [
            {
              en: "Both A and R are true and R is the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்.",
            },
            {
              en: "Both A and R are true but R is not the correct explanation of A.",
              ta: "A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல.",
            },
            {
              en: "A is true but R is false.",
              ta: "A உண்மை ஆனால் R தவறு.",
            },
            {
              en: "A is false but R is true.",
              ta: "A தவறு ஆனால் R உண்மை.",
            },
          ],
          correctAnswer: "Both A and R are true and R is the correct explanation of A.",
          solution: "Gause's Competitive Exclusion Principle states that if two species compete for the same limiting resources, one will eventually be eliminated. While sometimes species can coexist through resource partitioning, the principle highlights that direct and intense competition typically leads to the exclusion of the weaker competitor. So, R explains A in the context of Gause's principle.",
          neetFrequency: 2,
        },
        // 5 Match-the-Columns Questions
        {
          type: "match-the-columns",
          id: "MTC001",
          question: {
            en: "Match Column I with Column II and select the correct option.",
            ta: "பத்தி I ஐ பத்தி II உடன் பொருத்தி சரியான விருப்பத்தைத் தேர்ந்தெடுக்கவும்.",
          },
          column1: {
            en: "Column I (Ecological Interaction)",
            ta: "பத்தி I (சூழலியல் தொடர்பு)",
            items: [
              { id: "A", en: "Mutualism", ta: "ஒத்துழைப்பு" },
              { id: "B", en: "Commensalism", ta: "கூட்டமைவு" },
              { id: "C", en: "Predation", ta: "வேட்டையாடுதல்" },
              { id: "D", en: "Parasitism", ta: "ஒட்டுண்ணித்தன்மை" },
            ],
          },
          column2: {
            en: "Column II (Effect on Species)",
            ta: "பத்தி II (இனங்கள் மீதான விளைவு)",
            items: [
              { id: "1", en: "Species A (+), Species B (-)", ta: "இனம் A (+), இனம் B (-)" },
              { id: "2", en: "Species A (+), Species B (+)", ta: "இனம் A (+), இனம் B (+)" },
              { id: "3", en: "Species A (+), Species B (0)", ta: "இனம் A (+), இனம் B (0)" },
              { id: "4", en: "Species A (-), Species B (0)", ta: "இனம் A (-), இனம் B (0)" },
            ],
          },
          options: [
            {
              en: "A-2, B-3, C-1, D-1",
              ta: "A-2, B-3, C-1, D-1",
            },
            {
              en: "A-2, B-3, C-1, D-4",
              ta: "A-2, B-3, C-1, D-4",
            },
            {
              en: "A-1, B-2, C-3, D-4",
              ta: "A-1, B-2, C-3, D-4",
            },
            {
              en: "A-4, B-3, C-2, D-1",
              ta: "A-4, B-3, C-2, D-1",
            },
          ],
          correctAnswer: "A-2, B-3, C-1, D-1",
          solution: "Mutualism (A) is (+/+), Commensalism (B) is (+/0), Predation (C) is (+/-), and Parasitism (D) is also (+/-). Thus, A-2, B-3, C-1, D-1.",
          neetFrequency: 3,
        },
        {
          type: "match-the-columns",
          id: "MTC002",
          question: {
            en: "Match Column I with Column II regarding environmental issues and their causes.",
            ta: "சுற்றுச்சூழல் பிரச்சினைகள் மற்றும் அவற்றின் காரணங்கள் தொடர்பாக பத்தி I ஐ பத்தி II உடன் பொருத்தவும்.",
          },
          column1: {
            en: "Column I (Environmental Issue)",
            ta: "பத்தி I (சுற்றுச்சூழல் பிரச்சினை)",
            items: [
              { id: "A", en: "Eutrophication", ta: "யூட்ரோஃபிகேஷன்" },
              { id: "B", en: "Ozone depletion", ta: "ஓசோன் குறைவு" },
              { id: "C", en: "Acid Rain", ta: "அமில மழை" },
              { id: "D", en: "Global Warming", ta: "புவி வெப்பமயமாதல்" },
            ],
          },
          column2: {
            en: "Column II (Primary Cause)",
            ta: "பத்தி II (முதன்மை காரணம்)",
            items: [
              { id: "1", en: "Nitrogen and sulfur oxides", ta: "நைட்ரஜன் மற்றும் சல்பர் ஆக்சைடுகள்" },
              { id: "2", en: "Chlorofluorocarbons (CFCs)", ta: "குளோரோபுளோரோகார்பன்கள் (CFCs)" },
              { id: "3", en: "Nutrient enrichment (N, P)", ta: "ஊட்டச்சத்து செறிவூட்டல் (N, P)" },
              { id: "4", en: "Increased greenhouse gases", ta: "பசுமை இல்ல வாயுக்கள் அதிகரிப்பு" },
            ],
          },
          options: [
            {
              en: "A-3, B-2, C-1, D-4",
              ta: "A-3, B-2, C-1, D-4",
            },
            {
              en: "A-2, B-3, C-1, D-4",
              ta: "A-2, B-3, C-1, D-4",
            },
            {
              en: "A-3, B-1, C-2, D-4",
              ta: "A-3, B-1, C-2, D-4",
            },
            {
              en: "A-4, B-3, C-2, D-1",
              ta: "A-4, B-3, C-2, D-1",
            },
          ],
          correctAnswer: "A-3, B-2, C-1, D-4",
          solution: "Eutrophication is caused by nutrient enrichment (N, P). Ozone depletion is due to CFCs. Acid rain results from nitrogen and sulfur oxides. Global warming is caused by increased greenhouse gases.",
          neetFrequency: 3,
        },
        {
          type: "match-the-columns",
          id: "MTC003",
          question: {
            en: "Match the following population interactions with their examples.",
            ta: "கீழ்க்கண்ட மக்கள் தொகை தொடர்புகளை அவற்றின் எடுத்துக்காட்டுகளுடன் பொருத்தவும்.",
          },
          column1: {
            en: "Column I (Interaction Type)",
            ta: "பத்தி I (தொடர்பு வகை)",
            items: [
              { id: "A", en: "Mutualism", ta: "ஒத்துழைப்பு" },
              { id: "B", en: "Competition", ta: "போட்டி" },
              { id: "C", en: "Commensalism", ta: "கூட்டமைவு" },
              { id: "D", en: "Parasitism", ta: "ஒட்டுண்ணித்தன்மை" },
            ],
          },
          column2: {
            en: "Column II (Example)",
            ta: "பத்தி II (உதாரணம்)",
            items: [
              { id: "1", en: "Cattle Egret and grazing cattle", ta: "கால்நடை எக்ரெட் மற்றும் மேய்ச்சல் மாடுகள்" },
              { id: "2", en: "Lichens (algae and fungi)", ta: "லைக்கன்கள் (பாசிகள் மற்றும் பூஞ்சை)" },
              { id: "3", en: "Abingdon tortoise and goats", ta: "அபிங்டன் ஆமை மற்றும் ஆடுகள்" },
              { id: "4", en: "Cuscuta on host plants", ta: "விருந்துப்பேணி தாவரங்களில் கஸ்குட்டா" },
            ],
          },
          options: [
            {
              en: "A-2, B-3, C-1, D-4",
              ta: "A-2, B-3, C-1, D-4",
            },
            {
              en: "A-1, B-2, C-3, D-4",
              ta: "A-1, B-2, C-3, D-4",
            },
            {
              en: "A-3, B-1, C-4, D-2",
              ta: "A-3, B-1, C-4, D-2",
            },
            {
              en: "A-4, B-2, C-1, D-3",
              ta: "A-4, B-2, C-1, D-3",
            },
          ],
          correctAnswer: "A-2, B-3, C-1, D-4",
          solution: "Mutualism: Lichens (algae and fungi). Competition: Abingdon tortoise and goats. Commensalism: Cattle Egret and grazing cattle. Parasitism: Cuscuta on host plants.",
          neetFrequency: 3,
        },
        {
          type: "match-the-columns",
          id: "MTC004",
          question: {
            en: "Match Column I (Organism Response) with Column II (Example).",
            ta: "பத்தி I (உயிரினத்தின் பதில்) ஐ பத்தி II (உதாரணம்) உடன் பொருத்தவும்.",
          },
          column1: {
            en: "Column I (Organism Response)",
            ta: "பத்தி I (உயிரினத்தின் பதில்)",
            items: [
              { id: "A", en: "Regulate", ta: "ஒழுங்குபடுத்துதல்" },
              { id: "B", en: "Conform", ta: "இணங்குதல்" },
              { id: "C", en: "Migrate", ta: "இடம்பெயர்தல்" },
              { id: "D", en: "Suspend", ta: "தற்காலிகமாக நிறுத்துதல்" },
            ],
          },
          column2: {
            en: "Column II (Example)",
            ta: "பத்தி II (உதாரணம்)",
            items: [
              { id: "1", en: "Desert lizards basking in sun", ta: "பாலைவன பல்லிகள் சூரிய ஒளியில் கு