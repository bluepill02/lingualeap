
import type { TnpscModule } from './exam-data-tnpsc';

export const generalScienceAndTech: TnpscModule = {
    id: "science-technology",
    title: "General Science & Technology",
    titleTamil: "பொது அறிவியல் மற்றும் தொழில்நுட்பம்",
    subject: "science",
    weightage: 15,
    difficultyLevel: "Intermediate",
    
    officialSyllabusCode: "TNPSC-G1-U4",
    examPattern: {
      mcqCount: 15,
      shortAnswerCount: 0,
      essayCount: 0,
    },
    
    overview: {
      summary: "This unit covers the fundamental principles of Physics, Chemistry, and Biology relevant to general competitive exams, aligned with the Samacheer Kalvi syllabus up to Class 10. It also explores crucial topics in Environment and Ecology, including biodiversity and conservation efforts. A key focus is on modern and emerging technologies such as India's space program, developments in IT, biotechnology, and the growing importance of renewable energy sources.",
      summaryTamil: "இந்த அலகு இயற்பியல், வேதியியல் மற்றும் உயிரியலின் அடிப்படைக் கோட்பாடுகளை உள்ளடக்கியது, இது 10 ஆம் வகுப்பு வரையிலான சமச்சீர் கல்வி பாடத்திட்டத்துடன் ஒத்துப்போகிறது. இது பல்லுயிர் மற்றும் பாதுகாப்பு முயற்சிகள் உள்ளிட்ட சுற்றுச்சூழல் மற்றும் சூழலியல் தொடர்பான முக்கிய தலைப்புகளையும் ஆராய்கிறது. இந்தியாவின் விண்வெளித் திட்டம், தகவல் தொழில்நுட்பத்தில் முன்னேற்றங்கள், உயிரி தொழில்நுட்பம் மற்றும் புதுப்பிக்கத்தக்க ஆற்றல் மூலங்களின் வளர்ந்து வரும் முக்கியத்துவம் போன்ற நவீன மற்றும் வளர்ந்து வரும் தொழில்நுட்பங்களில் முக்கிய கவனம் செலுத்தப்படுகிறது.",
      contextualInfo: "A foundational understanding of science and technology is essential for administrators to make informed decisions on public health, environmental policies, and infrastructure development. This unit tests the candidate's scientific literacy and awareness of technological advancements.",
      contextualInfoTamil: "பொது சுகாதாரம், சுற்றுச்சூழல் கொள்கைகள் மற்றும் உள்கட்டமைப்பு மேம்பாடு ஆகியவற்றில் தகவலறிந்த முடிவுகளை எடுக்க நிர்வாகிகளுக்கு அறிவியல் மற்றும் தொழில்நுட்பம் பற்றிய அடிப்படை புரிதல் அவசியம். இந்த அலகு தேர்வரின் அறிவியல் எழுத்தறிவு மற்றும் தொழில்நுட்ப முன்னேற்றங்கள் பற்றிய விழிப்புணர்வை சோதிக்கிறது.",
      relevanceToExam: "High relevance. Around 12-15 questions are expected in Prelims, covering all sub-sections. Questions are often practical and application-oriented, especially from the environment and technology sections.",
      lastYearQuestions: [
        "2023: What is the main objective of ISRO's Gaganyaan mission?",
        "2022: Explain the principle of a convex lens with a real-life example.",
        "2021: What is 'bioremediation' and how does it help in controlling pollution?"
      ]
    },
    
    sections: [
       {
        id: "basic-sciences",
        title: "Basics of Physics, Chemistry & Biology",
        titleTamil: "இயற்பியல், வேதியியல் மற்றும் உயிரியலின் அடிப்படைகள்",
        content: "## Physics\nKey concepts include **Units and Measurements** (SI units), **Laws of Motion** (Newton's Laws), **Work, Energy, and Power**, basic properties of **Light** (reflection, refraction, lenses), **Electricity** (Ohm's law, circuits), and **Magnetism**.\\n\\n## Chemistry\\nFocuses on the **Structure of Atom**, **Acids, Bases, and Salts** (pH scale), **Carbon and its Compounds** (introduction to organic chemistry), **Periodic Classification of Elements**, and common chemical reactions like oxidation and reduction.\\n\\n## Biology\\nCovers **Cell Biology** (structure of plant and animal cells), **Human Physiology** (digestive, circulatory, nervous systems), **Genetics** (basic concepts of heredity), **Nutrition** (vitamins, minerals), and classification of living organisms.",
        contentTamil: "## இயற்பியல்\nமுக்கிய கருத்துகளில் **அலகுகள் மற்றும் அளவீடுகள்** (SI அலகுகள்), **இயக்க விதிகள்** (நியூட்டனின் விதிகள்), **வேலை, ஆற்றல், மற்றும் திறன்**, **ஒளியின்** அடிப்படை பண்புகள் (எதிரொளிப்பு, ஒளிவிலகல், லென்சுகள்), **மின்னியல்** (ஓம் விதி, மின்சுற்றுகள்), மற்றும் **காந்தவியல்** ஆகியவை அடங்கும்.\\n\\n## வேதியியல்\n**அணுவின் அமைப்பு**, **அமிலங்கள், காரங்கள், மற்றும் உப்புகள்** (pH அளவுகோல்), **கார்பன் மற்றும் அதன் சேர்மங்கள்** (கரிம வேதியியலுக்கு ஒரு அறிமுகம்), **தனிமங்களின் ஆவர்த்தன வகைப்பாடு**, மற்றும் ஆக்ஸிஜனேற்றம் மற்றும் ஒடுக்கம் போன்ற பொதுவான வேதியியல் வினைகள் மீது கவனம் செலுத்துகிறது.\\n\\n## உயிரியல்\n**செல் உயிரியல்** (தாவர மற்றும் விலங்கு செல்களின் அமைப்பு), **மனித உடலியல்** (செரிமான, சுற்றோட்ட, நரம்பு மண்டலங்கள்), **மரபியல்** (பரம்பரையின் அடிப்படைக் கருத்துக்கள்), **ஊட்டச்சத்து** (வைட்டமின்கள், தாதுக்கள்), மற்றும் உயிரினங்களின் வகைப்பாடு ஆகியவற்றை உள்ளடக்கியது.",
        localContext: ["Understanding Ohm's law is practical for everyday electrical safety.", "The concept of pH is essential for understanding soil quality in agriculture."],
        currentAffairs: []
      },
       {
        id: "environment-ecology",
        title: "Environment & Ecology",
        titleTamil: "சுற்றுச்சூழல் மற்றும் சூழலியல்",
        content: "## Biodiversity & Conservation\n**Biodiversity** refers to the variety of life on Earth. India is a mega-diverse country. Key concepts include **ecosystems**, **food chains**, and **biodiversity hotspots**. Conservation efforts include **National Parks**, **Wildlife Sanctuaries**, and international conventions like the **Ramsar Convention** on wetlands.\\n\\n## Pollution & Climate Change\nThis covers major types of pollution: **Air, Water, Soil, and Noise**. Important topics include the **Greenhouse Effect**, **Global Warming**, **Ozone Layer Depletion**, and **Acid Rain**. Key government acts for pollution control in India include the **Environment (Protection) Act, 1986** and the **Water (Prevention and Control of Pollution) Act, 1974**.",
        contentTamil: "## பல்லுயிர் மற்றும் பாதுகாப்பு\n**பல்லுயிர்** என்பது பூமியில் உள்ள உயிரினங்களின் பன்முகத்தன்மையைக் குறிக்கிறது. இந்தியா ஒரு பெரும் பன்முகத்தன்மை கொண்ட நாடு. **சூழல் மண்டலங்கள்**, **உணவுச் சங்கிலிகள்**, மற்றும் **பல்லுயிர் வெப்பப்பகுதிகள்** ஆகியவை முக்கியக் கருத்துக்களாகும். பாதுகாப்பு முயற்சிகளில் **தேசிய பூங்காக்கள்**, **வனவிலங்கு சரணாலயங்கள்**, மற்றும் ஈரநிலங்கள் மீதான **ராம்சர் மாநாடு** போன்ற சர்வதேச மாநாடுகள் அடங்கும்.\\n\\n## மாசுபாடு மற்றும் காலநிலை மாற்றம்\nஇது **காற்று, நீர், மண், மற்றும் ஒலி** மாசுபாடு ஆகிய முக்கிய வகைகளை உள்ளடக்கியது. **பசுமை இல்ல விளைவு**, **உலக வெப்பமயமாதல்**, **ஓசோன் படலச் சிதைவு**, மற்றும் **அமில மழை** ஆகியவை முக்கிய தலைப்புகளாகும். இந்தியாவில் மாசுக் கட்டுப்பாட்டிற்கான முக்கிய அரசாங்கச் சட்டங்களில் **சுற்றுச்சூழல் (பாதுகாப்பு) சட்டம், 1986** மற்றும் **நீர் (மாசு தடுப்பு மற்றும் கட்டுப்பாடு) சட்டம், 1974** ஆகியவை அடங்கும்.",
        localContext: ["The Gulf of Mannar in Tamil Nadu is a significant biodiversity hotspot.", "Air pollution in major cities like Chennai is a pressing environmental concern."],
        currentAffairs: []
      },
      {
        id: "emerging-tech",
        title: "Emerging Technologies",
        titleTamil: "வளர்ந்து வரும் தொழில்நுட்பங்கள்",
        content: "## IT & Space Programs\nFocus on the basics of **Information Technology** (IT), computers, and the internet. India's space program, managed by the **Indian Space Research Organisation (ISRO)**, is a key area. Know about famous missions like **Chandrayaan** (Moon mission), **Mangalyaan** (Mars Orbiter Mission), and the upcoming **Gaganyaan** (human spaceflight mission). Understand the different types of satellites and launch vehicles (PSLV, GSLV).\\n\\n## Biotechnology & Energy\n**Biotechnology** has applications in medicine (vaccines, gene therapy), agriculture (genetically modified crops), and industry. Key concepts include DNA and RNA. **Renewable Energy** is crucial for sustainable development. Understand the basics of **Solar Energy** (National Solar Mission), **Wind Energy**, and **Nuclear Energy** (major nuclear power plants in India).",
        contentTamil: "## தகவல் தொழில்நுட்பம் மற்றும் விண்வெளித் திட்டங்கள்\n**தகவல் தொழில்நுட்பம்**, கணினிகள் மற்றும் இணையத்தின் அடிப்படைகளில் கவனம் செலுத்துங்கள். **இந்திய விண்வெளி ஆராய்ச்சி நிறுவனம் (ISRO)** ஆல் நிர்வகிக்கப்படும் இந்தியாவின் விண்வெளித் திட்டம் ஒரு முக்கியப் பகுதியாகும். **சந்திரயான்** (சந்திரப் பயணம்), **மங்கல்யான்** (செவ்வாய் சுற்றுக்கலன் திட்டம்), மற்றும் வரவிருக்கும் **ககன்யான்** (மனித விண்வெளிப் பயணத் திட்டம்) போன்ற புகழ்பெற்ற திட்டங்களைப் பற்றி அறிந்து கொள்ளுங்கள். பல்வேறு வகையான செயற்கைக்கோள்கள் மற்றும் ஏவுகணை வாகனங்கள் (PSLV, GSLV) பற்றிப் புரிந்து கொள்ளுங்கள்.\\n\\n## உயிரி தொழில்நுட்பம் மற்றும் ஆற்றல்\n**உயிரி தொழில்நுட்பம்** மருத்துவம் (தடுப்பூசிகள், மரபணு சிகிச்சை), வேளாண்மை (மரபணு மாற்றப்பட்ட பயிர்கள்), மற்றும் தொழில்துறையில் பயன்பாடுகளைக் கொண்டுள்ளது. DNA மற்றும் RNA ஆகியவை முக்கியக் கருத்துக்களாகும். **புதுப்பிக்கத்தக்க ஆற்றல்** நிலையான வளர்ச்சிக்கு இன்றியமையாதது. **சூரிய ஆற்றல்** (தேசிய சூரிய இயக்கம்), **காற்றாலை ஆற்றல்**, மற்றும் **அணுசக்தி** (இந்தியாவில் உள்ள முக்கிய அணுமின் நிலையங்கள்) ஆகியவற்றின் அடிப்படைகளைப் புரிந்து கொள்ளுங்கள்.",
        localContext: ["ISRO's launch facility is located at Sriharikota, not far from Tamil Nadu.", "Tamil Nadu is a leader in India for wind power generation."],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["SI units", "Newton's Laws", "pH scale", "DNA", "RNA", "Ecosystem", "Biodiversity", "Greenhouse Effect", "ISRO", "PSLV", "GSLV", "Chandrayaan", "Renewable Energy"],
      importantFigures: ["Sir C.V. Raman", "Dr. A.P.J. Abdul Kalam", "Dr. Vikram Sarabhai"],
      significantEvents: ["Pokhran Nuclear Tests", "Launch of Aryabhata satellite", "Paris Agreement on Climate Change"],
      relevantLaws: ["Environment (Protection) Act, 1986", "Wildlife Protection Act, 1972", "Biodiversity Act, 2002"],
      institutions: ["ISRO", "DRDO", "BARC", "CSIR"],
    },
    
    practice: {
      mcqs: [
        {
          question: "The bending of light as it passes from one medium to another is known as:",
          questionTamil: "ஒளி ஒரு ஊடகத்திலிருந்து மற்றொரு ஊடகத்திற்குச் செல்லும்போது வளையும் நிகழ்வு எவ்வாறு அழைக்கப்படுகிறது?",
          options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
          optionsTamil: ["எதிரொளிப்பு", "ஒளிவிலகல்", "விளிம்பு விளைவு", "நிறப்பிரிகை"],
          correct: 1,
          explanation: "Refraction is the phenomenon where light bends when it passes from one transparent medium to another. This is due to the change in the speed of light.",
          explanationTamil: "ஒளி ஒரு ஒளிபுகும் ஊடகத்திலிருந்து மற்றொரு ஊடகத்திற்குச் செல்லும்போது வளையும் நிகழ்வு ஒளிவிலகல் ஆகும். இது ஒளியின் வேகத்தில் ஏற்படும் மாற்றத்தால் நிகழ்கிறது.",
          yearAsked: [2022],
          difficulty: "Easy",
          tnpscFrequency: 4,
          context: "basic-sciences"
        },
        {
          question: "Which of the following is responsible for the greenhouse effect?",
          questionTamil: "பின்வருவனவற்றில் பசுமை இல்ல விளைவுக்குக் காரணமானது எது?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
          optionsTamil: ["ஆக்ஸிஜன்", "நைட்ரஜன்", "கார்பன் டை ஆக்சைடு", "ஆர்கான்"],
          correct: 2,
          explanation: "Carbon Dioxide (CO₂) is a major greenhouse gas. It traps heat in the atmosphere, leading to a rise in the Earth's temperature, a phenomenon known as the greenhouse effect.",
          explanationTamil: "கார்பன் டை ஆக்சைடு (CO₂) ஒரு முக்கியப் பசுமை இல்ல வாயு ஆகும். இது வளிமண்டலத்தில் வெப்பத்தைப் பிடித்து வைத்து, பூமியின் வெப்பநிலை உயர்வுக்கு வழிவகுக்கிறது, இது பசுமை இல்ல விளைவு என்று அழைக்கப்படுகிறது.",
          yearAsked: [2023],
          difficulty: "Easy",
          tnpscFrequency: 5,
          context: "environment-ecology"
        },
        {
          question: "India's first human spaceflight mission is named:",
          questionTamil: "இந்தியாவின் முதல் மனித விண்வெளிப் பயணத் திட்டத்தின் பெயர்:",
          options: ["Chandrayaan-3", "Mangalyaan-2", "Gaganyaan", "Aditya-L1"],
          optionsTamil: ["சந்திரயான்-3", "மங்கல்யான்-2", "ககன்யான்", "ஆதித்யா-L1"],
          correct: 2,
          explanation: "Gaganyaan is the name of the Indian Human Spaceflight Programme, which aims to demonstrate indigenous capability to undertake human space flight missions to Low Earth Orbit (LEO).",
          explanationTamil: "ககன்யான் என்பது இந்திய மனித விண்வெளிப் பயணத் திட்டத்தின் பெயர், இது தாழ் புவி சுற்றுப்பாதைக்கு (LEO) மனித விண்வெளிப் பயணப் பணிகளை மேற்கொள்ளும் உள்நாட்டுத் திறனை வெளிப்படுத்துவதை நோக்கமாகக் கொண்டுள்ளது.",
          yearAsked: [2023],
          difficulty: "Medium",
          tnpscFrequency: 4,
          context: "emerging-tech"
        }
      ],
      shortAnswer: [],
      essay: []
    },
    
    engagement: {
      peerTeaching: [
        {
          topic: "PSLV vs. GSLV",
          duration: 90,
          criteria: ["Explain the full form of both", "Mention the primary purpose/orbit for each", "State which is more powerful"],
          prompt: "In 90 seconds, explain the key differences between ISRO's PSLV and GSLV launch vehicles. Focus on their primary orbits and payload capacity.",
          promptTamil: "90 வினாடிகளில், இஸ்ரோவின் பிஎஸ்எல்வி மற்றும் ஜிஎஸ்எல்வி ஏவுகணை வாகனங்களுக்கு இடையிலான முக்கிய வேறுபாடுகளை விளக்கவும். அவற்றின் முதன்மைச் சுற்றுப்பாதைகள் மற்றும் சுமைத் திறனில் கவனம் செலுத்துங்கள்."
        }
      ],
      practicalActivities: [
        {
          title: "Home Energy Audit",
          type: "Data Collection",
          description: "Analyze your household's electricity bill to understand consumption patterns.",
          activities: [
            "Find your electricity bill from the last two months.",
            "Note down the total units consumed for each month.",
            "Identify one appliance at home that you believe consumes the most electricity.",
            "List two ways you could reduce your household's electricity consumption."
          ],
          outputs: ["A summary of units consumed.", "A list of potential energy-saving measures."],
          assessment: ["Accurate data collection from the bill.", "Practicality of the suggested energy-saving measures."]
        }
      ]
    },
    
    spacedRepetition: {
      flashcards: [
        {
          front: "Newton's First Law of Motion",
          frontTamil: "நியூட்டனின் முதல் இயக்க விதி",
          back: "An object remains at rest or continues to move at a constant velocity, unless acted upon by a net external force. Also known as the law of inertia.",
          backTamil: "ஒரு பொருளின் மீது புறவிசை ஏதும் செயல்படாதவரை, அது தனது ஓய்வு நிலையிலோ அல்லது நேர்க்கோட்டில் அமைந்த சீரான இயக்க நிலையிலோ தொடர்ந்து இருக்கும். இது நிலைம விதி என்றும் அழைக்கப்படுகிறது.",
          category: "Physics",
          difficulty: 2
        },
        {
          front: "pH Scale",
          frontTamil: "pH அளவுகோல்",
          back: "A scale used to specify the acidity or basicity of an aqueous solution. pH < 7 is acidic, pH > 7 is alkaline, and pH = 7 is neutral.",
          backTamil: "ஒரு நீர்க்கரைசலின் அமிலத்தன்மை அல்லது காரத்தன்மையைக் குறிப்பிடப் பயன்படும் ஒரு அளவுகோல். pH < 7 அமிலத்தன்மை, pH > 7 காரத்தன்மை, மற்றும் pH = 7 நடுநிலை.",
          category: "Chemistry",
          difficulty: 1
        },
        {
          front: "Biodiversity Hotspot",
          frontTamil: "பல்லுயிர் வெப்பப்பகுதி",
          back: "A biogeographic region with significant levels of biodiversity that is threatened by human habitation.",
          backTamil: "மனித வாழ்விடத்தால் அச்சுறுத்தப்படும் குறிப்பிடத்தக்க அளவிலான பல்லுயிர் பெருக்கத்தைக் கொண்ட ஒரு உயிர் புவியியல் பகுதி.",
          category: "Ecology",
          difficulty: 3
        },
        {
          front: "PSLV",
          frontTamil: "பி.எஸ்.எல்.வி",
          back: "Polar Satellite Launch Vehicle. It is the third generation launch vehicle of India, known as the workhorse of ISRO.",
          backTamil: "துருவ செயற்கைக்கோள் ஏவுகணை வாகனம். இது இந்தியாவின் மூன்றாம் தலைமுறை ஏவுகணை வாகனம், இஸ்ரோவின் வேலைக்குதிரை என்று அழைக்கப்படுகிறது.",
          category: "Technology",
          difficulty: 2
        }
      ],
      intervals: {
        day1: [],
        day7: [],
        day30: []
      }
    },
    
    analytics: {
      commonMistakes: ["Confusing between mass and weight.", "Mistaking acids for bases based on common names without knowing their chemical properties.", "Not knowing the difference between PSLV and GSLV launch vehicles."],
      timeAllocation: [],
      strengthIndicators: [],
      improvementAreas: ["Understanding application-based questions in Biology.", "Memorizing key environmental acts and their years of enactment."],
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["Science textbooks from 6th to 10th Standard (Samacheer Kalvi)", "NCERT Science textbooks"],
        websites: ["https://www.isro.gov.in/", "https://envfor.nic.in/"],
        officialSources: ["Annual reports from the Ministry of Environment, Forest and Climate Change"]
      },
      nextModule: ""
    }
  };
