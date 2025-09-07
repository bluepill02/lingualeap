
import type { TnpscModule } from './exam-data-tnpsc';

export const currentAffairsModule: TnpscModule = {
    id: "current-affairs",
    title: "Current Affairs (National & International)",
    titleTamil: "நடப்பு நிகழ்வுகள் (தேசியம் மற்றும் சர்வதேசம்)",
    subject: "current-affairs",
    weightage: 25,
    difficultyLevel: "Advanced",
    
    officialSyllabusCode: "TNPSC-G1-U2",
    examPattern: {
      mcqCount: 30,
      shortAnswerCount: 0,
      essayCount: 0,
    },
    
    overview: {
      summary: "This unit covers significant events of the last 12-18 months at the national, international, and state (Tamil Nadu) levels. It requires awareness of developments in politics, economy, science & technology, sports, and major awards and honors. A key aspect is linking static syllabus topics with current events.",
      summaryTamil: "இந்த அலகு கடந்த 12-18 மாதங்களில் தேசிய, சர்வதேச மற்றும் மாநில (தமிழ்நாடு) மட்டங்களில் நடந்த முக்கிய நிகழ்வுகளை உள்ளடக்கியது. இது அரசியல், பொருளாதாரம், அறிவியல் மற்றும் தொழில்நுட்பம், விளையாட்டு மற்றும் முக்கிய விருதுகள் மற்றும் கௌரவங்களில் ஏற்பட்டுள்ள முன்னேற்றங்கள் குறித்த விழிப்புணர்வை கோருகிறது. நிலையான பாடத்திட்ட தலைப்புகளை நடப்பு நிகழ்வுகளுடன் இணைப்பது ஒரு முக்கிய அம்சமாகும்.",
      contextualInfo: "For an administrator, being updated with current affairs is crucial for policy implementation, public communication, and understanding the contemporary context of governance challenges. This section tests a candidate's awareness and analytical skills regarding ongoing issues.",
      contextualInfoTamil: "ஒரு நிர்வாகிக்கு, கொள்கை அமலாக்கம், பொதுத் தொடர்பு மற்றும் நிர்வாக சவால்களின் சமகால சூழலைப் புரிந்துகொள்வதற்கு நடப்பு நிகழ்வுகளுடன் புதுப்பித்த நிலையில் இருப்பது மிக முக்கியம். இந்தப் பிரிவு ஒரு தேர்வரின் தற்போதைய பிரச்சினைகள் தொடர்பான விழிப்புணர்வு மற்றும் பகுப்பாய்வுத் திறன்களை சோதிக்கிறது.",
      relevanceToExam: "Extremely high relevance. Current affairs questions are spread across all papers and form a substantial part of the prelims score. Questions are dynamic and can be drawn from any recent significant event.",
      lastYearQuestions: [
        "2023: Who was awarded the Nobel Prize in Physics 2023 and for what discovery?",
        "2023: What is the primary objective of the 'Naan Mudhalvan' scheme launched by the Tamil Nadu government?",
        "2022: Discuss the significance of India's G20 presidency."
      ]
    },
    
    sections: [
       {
        id: "national-international",
        title: "National & International Events",
        titleTamil: "தேசிய மற்றும் சர்வதேச நிகழ்வுகள்",
        content: "## Key Political Developments\nRecent elections in major states, landmark Supreme Court judgements (e.g., on electoral bonds), and significant constitutional amendments or bills passed in Parliament are crucial. Internationally, focus on major conflicts (e.g., Russia-Ukraine, Israel-Palestine), India's role in international forums like G20, SCO, and bilateral relations with key partners.\n\n## Economic Trends\nThe Union Budget and Economic Survey are primary sources. Key topics include India's GDP growth projections, measures to control inflation, major infrastructure projects (e.g., National Infrastructure Pipeline), and initiatives like the PLI (Production Linked Incentive) scheme. Global economic reports from the IMF and World Bank are also relevant.",
        contentTamil: "## முக்கிய அரசியல் முன்னேற்றங்கள்\nமுக்கிய மாநிலங்களில் சமீபத்திய தேர்தல்கள், உச்ச நீதிமன்றத்தின் முக்கிய தீர்ப்புகள் (எ.கா., தேர்தல் பத்திரங்கள்), மற்றும் நாடாளுமன்றத்தில் நிறைவேற்றப்பட்ட குறிப்பிடத்தக்க அரசியலமைப்புத் திருத்தங்கள் அல்லது மசோதாக்கள் முக்கியமானவை. சர்வதேச அளவில், முக்கிய மோதல்கள் (எ.கா., ரஷ்யா-உக்ரைன், இஸ்ரேல்-பாலஸ்தீனம்), ஜி20, எஸ்சிஓ போன்ற சர்வதேச மன்றங்களில் இந்தியாவின் பங்கு மற்றும் முக்கிய கூட்டாளிகளுடனான இருதரப்பு உறவுகளில் கவனம் செலுத்துங்கள்.\n\n## பொருளாதாரப் போக்குகள்\nமத்திய பட்ஜெட் மற்றும் பொருளாதார ஆய்வு ஆகியவை முதன்மை ஆதாரங்கள். முக்கிய தலைப்புகளில் இந்தியாவின் மொத்த உள்நாட்டு உற்பத்தி வளர்ச்சி கணிப்புகள், பணவீக்கத்தைக் கட்டுப்படுத்தும் நடவடிக்கைகள், முக்கிய உள்கட்டமைப்புத் திட்டங்கள் (எ.கா., தேசிய உள்கட்டமைப்பு பைப்லைன்), மற்றும் PLI (உற்பத்தியுடன் இணைக்கப்பட்ட ஊக்கத்தொகை) திட்டம் போன்ற முயற்சிகள் அடங்கும். IMF மற்றும் உலக வங்கியின் உலகளாவிய பொருளாதார அறிக்கைகளும் பொருத்தமானவை.",
        localContext: [],
        currentAffairs: []
      },
       {
        id: "tn-specific",
        title: "Tamil Nadu Specific Current Affairs",
        titleTamil: "தமிழ்நாடு சார்ந்த நடப்பு நிகழ்வுகள்",
        content: "## Flagship Schemes\nBe thorough with recent and ongoing schemes launched by the Government of Tamil Nadu. This includes their objectives, target beneficiaries, and implementing departments. Examples: 'Naan Mudhalvan' (skill development), 'Makkalai Thedi Maruthuvam' (healthcare at doorstep), and 'Pudhumai Penn' (financial aid for girl students).\n\n## State Policies & Events\nFollow new policies released by the state government (e.g., TN Data Centre Policy, R&D Policy). Major investments, MoUs signed during Global Investors Meets, significant cultural events or archaeological findings (like those at Keeladi), and state-specific awards are important.",
        contentTamil: "## முன்னோடித் திட்டங்கள்\nதமிழ்நாடு அரசால் தொடங்கப்பட்ட சமீபத்திய மற்றும் চলমান திட்டங்களில் முழுமையாகப் படியுங்கள். இது அவற்றின் நோக்கங்கள், இலக்கு பயனாளிகள் மற்றும் செயல்படுத்தும் துறைகளை உள்ளடக்கியது. எடுத்துக்காட்டுகள்: 'நான் முதல்வன்' (திறன் மேம்பாடு), 'மக்களைத் தேடி மருத்துவம்' (வீட்டு வாசலில் சுகாதாரம்), மற்றும் 'புதுமைப் பெண்' (மாணவிகளுக்கு நிதி உதவி).\n\n## மாநிலக் கொள்கைகள் மற்றும் நிகழ்வுகள்\nமாநில அரசால் வெளியிடப்பட்ட புதிய கொள்கைகளைப் பின்பற்றவும் (எ.கா., TN தரவு மையக் கொள்கை, R&D கொள்கை). உலக முதலீட்டாளர்கள் சந்திப்பின் போது கையெழுத்திடப்பட்ட முக்கிய முதலீடுகள், புரிந்துணர்வு ஒப்பந்தங்கள், குறிப்பிடத்தக்க கலாச்சார நிகழ்வுகள் அல்லது தொல்பொருள் கண்டுபிடிப்புகள் (கீழடியில் உள்ளவை போன்றவை) மற்றும் மாநில அளவிலான விருதுகள் முக்கியமானவை.",
        localContext: [],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["G20", "SCO", "Electoral Bonds", "Repo Rate", "GDP", "Keeladi", "Naan Mudhalvan Scheme"],
      importantFigures: ["Current Chief Ministers of major states", "Heads of international organizations (UN, IMF, World Bank)", "Nobel Prize winners"],
      significantEvents: ["India's G20 Presidency", "Chandrayaan-3 Mission", "Recent State Assembly Elections", "Tamil Nadu Global Investors Meet"],
    },
    
    practice: {
      mcqs: [
        {
          question: "Which country hosted the G20 Summit in 2023?",
          questionTamil: "2023 இல் ஜி20 உச்சி மாநாட்டை நடத்திய நாடு எது?",
          options: ["Brazil", "South Africa", "India", "Indonesia"],
          optionsTamil: ["பிரேசில்", "தென்னாப்பிரிக்கா", "இந்தியா", "இந்தோனேசியா"],
          correct: 2,
          explanation: "India hosted the G20 Summit in September 2023 in New Delhi. The theme was 'Vasudhaiva Kutumbakam' or 'One Earth, One Family, One Future'.",
          explanationTamil: "இந்தியா 2023 செப்டம்பரில் புது தில்லியில் ஜி20 உச்சி மாநாட்டை நடத்தியது. 'வசுதைவ குடும்பகம்' அல்லது 'ஒரே பூமி, ஒரே குடும்பம், ஒரே எதிர்காலம்' என்பது இதன் கருப்பொருள்.",
          yearAsked: [2023],
          difficulty: "Easy",
          tnpscFrequency: 5,
          context: "national-international"
        },
        {
          question: "The 'Pudhumai Penn' scheme in Tamil Nadu is aimed at:",
          questionTamil: "தமிழ்நாட்டில் 'புதுமைப் பெண்' திட்டம் எதை நோக்கமாகக் கொண்டது?",
          options: ["Providing financial aid to pregnant women", "Promoting skill development for youth", "Providing monthly financial assistance to female students pursuing higher education", "Ensuring healthcare at the doorstep"],
          optionsTamil: ["கர்ப்பிணிப் பெண்களுக்கு நிதியுதவி வழங்குதல்", "இளைஞர்களுக்கு திறன் மேம்பாட்டை ஊக்குவித்தல்", "உயர்கல்வி பயிலும் மாணவிகளுக்கு மாதாந்திர நிதியுதவி வழங்குதல்", "வீட்டு வாசலில் சுகாதாரத்தை உறுதி செய்தல்"],
          correct: 2,
          explanation: "The Pudhumai Penn scheme provides a monthly financial assistance of ₹1000 to female students who have studied in government schools from classes 6 to 12, to encourage them to pursue higher education.",
          explanationTamil: "புதுமைப் பெண் திட்டம், 6 முதல் 12 ஆம் வகுப்பு வரை அரசுப் பள்ளிகளில் படித்த மாணவிகளை உயர்கல்வி பயில ஊக்குவிக்கும் வகையில் அவர்களுக்கு மாதம் ₹1000 நிதி உதவி வழங்குகிறது.",
          yearAsked: [2023, 2022],
          difficulty: "Medium",
          tnpscFrequency: 4,
          context: "tn-specific"
        }
      ],
      shortAnswer: [],
      essay: []
    },
    
    engagement: {
      peerTeaching: [
        {
          topic: "India's G20 Presidency",
          duration: 120,
          criteria: ["Explain the theme", "Mention one key outcome (e.g., African Union's inclusion)", "State its significance for India's global standing"],
          prompt: "In 2 minutes, explain the significance of India's G20 Presidency to a friend. Cover the official theme and one major achievement from the summit.",
          promptTamil: "2 நிமிடங்களில், இந்தியாவின் ஜி20 தலைமையின் முக்கியத்துவத்தை ஒரு நண்பருக்கு விளக்கவும். உச்சிமாநாட்டின் அதிகாரப்பூர்வ கருப்பொருள் மற்றும் ஒரு முக்கிய சாதனையை விளக்கவும்."
        }
      ],
      practicalActivities: [
        {
          title: "Weekly Current Affairs Summary",
          type: "Note-making",
          description: "Create a one-page summary of the most important national, international, and Tamil Nadu-specific news from the past week.",
          activities: [
            "Read the weekly news summary from a reliable source (e.g., The Hindu weekly review).",
            "Categorize the news into headings: National, International, Tamil Nadu, Sports, Awards.",
            "Under each heading, write 2-3 bullet points on the most critical events.",
            "For one Tamil Nadu scheme mentioned, write its objective in one line."
          ],
          outputs: ["A one-page PDF or handwritten note.", "A list of 5 keywords from the week's news for quick revision."],
          assessment: ["Coverage of all categories.", "Conciseness of the notes.", "Accuracy of the scheme's objective."]
        }
      ]
    },
    
    spacedRepetition: {
      flashcards: [
        {
          front: "Naan Mudhalvan Scheme",
          frontTamil: "நான் முதல்வன் திட்டம்",
          back: "A skill development scheme by the Tamil Nadu government for college students to make them industry-ready.",
          backTamil: "கல்லூரி மாணவர்களை தொழில்துறைக்குத் தயார்படுத்தும் வகையில் தமிழ்நாடு அரசின் ஒரு திறன் மேம்பாட்டுத் திட்டம்.",
          category: "TN Schemes",
          difficulty: 1
        },
        {
          front: "G20 Presidency 2023",
          frontTamil: "ஜி20 தலைமை 2023",
          back: "Held by India. Theme: 'One Earth, One Family, One Future'. The African Union was admitted as a permanent member.",
          backTamil: "இந்தியாவால் நடத்தப்பட்டது. கருப்பொருள்: 'ஒரே பூமி, ஒரே குடும்பம், ஒரே எதிர்காலம்'. ஆப்பிரிக்க ஒன்றியம் நிரந்தர உறுப்பினராக சேர்க்கப்பட்டது.",
          category: "International",
          difficulty: 2
        }
      ],
      intervals: { day1: [], day7: [], day30: [] }
    },
    
    analytics: {
      commonMistakes: ["Confusing the objectives of different government schemes.", "Not remembering the host countries of major international summits.", "Failing to connect economic indicators like repo rate changes to their real-world impact."],
      timeAllocation: [],
      strengthIndicators: [],
      improvementAreas: ["Regularly reading newspapers and current affairs magazines.", "Making concise notes of important appointments, awards, and summit outcomes."],
       mnemonics: [
        {
          text: "Remember the G7 countries with 'Juice-GFB': Japan, USA, Italy, Canada, England (UK), Germany, France, Brazil (Just kidding, Brazil is not in it!). The trick helps you remember the list and a common mistake.",
          tamil: "ஜி7 நாடுகளை 'ஜூஸ்-ஜிஎஃப்பி' என்று நினைவில் கொள்க: ஜப்பான், அமெரிக்கா, இத்தாலி, கனடா, இங்கிலாந்து (யுகே), ஜெர்மனி, பிரான்ஸ், பிரேசில் (சும்மா சொன்னேன், பிரேசில் அதில் இல்லை!). இந்த தந்திரம் பட்டியலையும் பொதுவான தவறையும் நினைவில் கொள்ள உதவுகிறது."
        },
        {
          text: "For Nobel Prizes, create a simple table: Prize, Person, Contribution. Review it weekly.",
          tamil: "நோபல் பரிசுகளுக்கு, ஒரு எளிய அட்டவணையை உருவாக்கவும்: பரிசு, நபர், பங்களிப்பு. அதை வாரந்தோறும் மதிப்பாய்வு செய்யவும்."
        }
      ],
      neetTips: [
        {
          text: "Don't just read headlines. Read about the background and significance of an event. TNPSC asks 'why' and 'how', not just 'what'.",
          tamil: "தலைப்புச் செய்திகளை மட்டும் படிக்காதீர்கள். ஒரு நிகழ்வின் பின்னணி மற்றும் முக்கியத்துவம் பற்றிப் படியுங்கள். TNPSC 'என்ன' என்று மட்டும் கேட்பதில்லை, 'ஏன்' மற்றும் 'எப்படி' என்றும் கேட்கிறது."
        },
        {
          text: "For Tamil Nadu schemes, focus on the target beneficiaries, objectives, and any recent updates or expansions. These are frequent question areas.",
          tamil: "தமிழ்நாடு திட்டங்களுக்கு, இலக்கு பயனாளிகள், நோக்கங்கள் மற்றும் சமீபத்திய புதுப்பிப்புகள் அல்லது விரிவாக்கங்களில் கவனம் செலுத்துங்கள். இவை அடிக்கடி கேட்கப்படும் கேள்விப் பகுதிகள்."
        }
      ]
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["The Hindu (daily newspaper)", "Yojana and Kurukshetra magazines"],
        websites: ["pib.gov.in", "tn.gov.in"],
        officialSources: ["Union Budget and Economic Survey documents", "Tamil Nadu State Policy Notes"]
      },
      nextModule: ""
    }
  };
