
import type { ExamModule as OldExamModule } from './types'; // Keep old type for existing data

// New, comprehensive data structure for TNPSC
export interface TnpscModule {
  id: string
  title: string
  titleTamil: string
  subject: string  // Customize based on your exam categories
  weightage: number // Based on exam analysis
  difficultyLevel: 'Foundation' | 'Intermediate' | 'Advanced'
  
  // Syllabus Mapping
  officialSyllabusCode: string
  examPattern: {
    mcqCount: number
    shortAnswerCount: number
    essayCount: number
    practicalCount?: number
  }
  
  // Content Structure
  overview: {
    summary: string
    summaryTamil: string
    contextualInfo: string
    contextualInfoTamil: string
    relevanceToExam: string
    lastYearQuestions: string[]
  }
  
  sections: {
    id: string
    title: string
    titleTamil: string
    content: string
    contentTamil: string
    localContext: string[]  // Context specific to your region/field
    currentAffairs: {
      year: number
      topic: string
      relevance: string
    }[]
    diagrams?: {
      title: string
      description: string
      asciiArt: string
      labels: { english: string; tamil: string }[]
    }[]
  }[]
  
  // Region/Field Specific Data
  specificData: {
    keyTerms: string[]
    importantFigures: string[]
    significantEvents: string[]
    relevantLaws?: string[]
    institutions?: string[]
  }
  
  // Practice Components
  practice: {
    mcqs: {
      question: string
      questionTamil: string
      options: string[]
      optionsTamil: string[]
      correct: number
      explanation: string
      explanationTamil: string
      yearAsked: number[]
      difficulty: 'Easy' | 'Medium' | 'Hard'
      context: string
    }[]
    
    shortAnswer: {
      question: string
      questionTamil: string
      marks: number
      keyPoints: string[]
      sampleAnswer: string
      sampleAnswerTamil: string
      rubric: string[]
    }[]
    
    essay: {
      question: string
      questionTamil: string
      marks: number
      outline: string[]
      introduction: string
      bodyPoints: string[]
      conclusion: string
      examples: string[]
    }[]
  }
  
  // Engagement Features
  engagement: {
    peerTeaching: {
      topic: string
      duration: number
      criteria: string[]
      prompt: string
      promptTamil: string
    }[]
    
    practicalActivities: {
      title: string
      type: string
      description: string
      activities: string[]
      outputs: string[]
      assessment: string[]
    }[]
  }
  
  // Spaced Repetition
  spacedRepetition: {
    flashcards: {
      front: string
      frontTamil: string
      back: string
      backTamil: string
      category: string
      difficulty: number
    }[]
    
    intervals: {
      day1: string[]
      day7: string[]
      day30: string[]
    }
  }
  
  // Analytics & Performance
  analytics: {
    commonMistakes: string[]
    timeAllocation: { section: string; minutes: number }[]
    strengthIndicators: string[]
    improvementAreas: string[]
  }
  
  // Resources
  resources: {
    offlineContent: {
      videos: string[]
      pdfs: string[]
      diagrams: string[]
    }
    references: {
      books: string[]
      websites: string[]
      officialSources: string[]
    }
    nextModule: string
  }
}

// Sample Database
export const TnpscContentDatabase: Record<string, TnpscModule> = {
  "history-culture-heritage": {
    id: "history-culture-heritage",
    title: "History, Culture, Heritage and Socio-Political Movements in Tamil Nadu",
    titleTamil: "தமிழ்நாட்டின் வரலாறு, மரபு, பண்பாடு மற்றும் சமூக-அரசியல் இயக்கங்கள்",
    subject: "history",
    weightage: 25,
    difficultyLevel: "Advanced",
    
    officialSyllabusCode: "TNPSC-G1-U8",
    examPattern: {
      mcqCount: 40,
      shortAnswerCount: 0,
      essayCount: 0
    },
    
    overview: {
      summary: "This unit offers a deep dive into the rich and ancient history of Tamil society. It begins with the classical Sangam era, exploring its literature and governance, moves through the significant contributions of Tamil Nadu to the Indian freedom struggle, and culminates in the analysis of the major socio-political movements like the Justice Party and the Self-Respect movement that have shaped the modern state. The philosophical depth of Thirukkural is also a key component, highlighting its enduring relevance.",
      summaryTamil: "இந்த அலகு தமிழ் சமூகத்தின் வளமான மற்றும் பழங்கால வரலாற்றை ஆழமாக ஆராய்கிறது. இது செம்மொழி சங்க காலத்திலிருந்து தொடங்கி, அதன் இலக்கியம் மற்றும் நிர்வாகத்தை ஆராய்கிறது, இந்திய சுதந்திரப் போராட்டத்தில் தமிழ்நாட்டின் குறிப்பிடத்தக்க பங்களிப்புகளைக் கடந்து, நவீன மாநிலத்தை வடிவமைத்த நீதிக் கட்சி மற்றும் சுயமரியாதை இயக்கம் போன்ற முக்கிய சமூக-அரசியல் இயக்கங்களின் பகுப்பாய்வில் முடிவடைகிறது. திருக்குறளின் தத்துவ ஆழமும் ஒரு முக்கிய அங்கமாகும், அதன் நீடித்த பொருத்தத்தை எடுத்துக்காட்டுகிறது.",
      contextualInfo: "Understanding this unit is non-negotiable for any serious TNPSC aspirant. It forms the very identity of the state's administrative and social fabric. Questions are often designed to test not just factual recall but a deep, analytical understanding of how the past influences the present socio-political landscape of Tamil Nadu.",
      contextualInfoTamil: "தீவிரமான எந்தவொரு TNPSC ஆர்வலருக்கும் இந்த அலகைப் புரிந்துகொள்வது கட்டாயமாகும். இது மாநிலத்தின் நிர்வாக மற்றும் சமூக கட்டமைப்பின் அடையாளத்தை உருவாக்குகிறது. கேள்விகள் பெரும்பாலும் உண்மைத் தகவல்களைச் சோதிப்பதற்காக மட்டுமல்லாமல், தமிழ்நாட்டின் தற்போதைய சமூக-அரசியல் நிலப்பரப்பில் கடந்த காலம் எவ்வாறு செல்வாக்கு செலுத்துகிறது என்பதைப் பற்றிய ஆழமான, பகுப்பாய்வுப் புரிதலைச் சோதிக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளன.",
      relevanceToExam: "Extremely high importance. As a cornerstone of the TNPSC syllabus (Unit-8), approximately 30-40 questions can be expected from this unit in the prelims, making it a deciding factor for qualification.",
      lastYearQuestions: [
        "2023: Explain the role of the Justice Party in the social reformation of Tamil Nadu.",
        "2022: Describe the archaeological findings at Keeladi and their significance for understanding the Sangam Age.",
        "2021: Who authored the Tirukkural and what are its main teachings on 'Aram' (Virtue)?"
      ]
    },
    
    sections: [
      {
        id: "sangam-age",
        title: "Sangam Age",
        titleTamil: "சங்க காலம்",
        content: "## Sangam Literature & Society\n\nThe Sangam period is the period of history of ancient Tamil Nadu, spanning from c. 6th century BCE to c. 3rd century CE. It was named after the famous Sangam academies of poets and scholars centered in the city of Madurai. The literature from this period, categorized into 'Agam' (love, inner life) and 'Puram' (war, public life), provides a rich tapestry of the life, administration, and values of the ancient Tamils. The governance was primarily monarchical, led by the Chera, Chola, and Pandya dynasties. The economy was agrarian and trade-based, with significant maritime trade with Roman and Southeast Asian empires.",
        contentTamil: "## சங்க இலக்கியம் மற்றும் சமூகம்\n\nசங்க காலம் என்பது பண்டைய தமிழ்நாட்டின் வரலாற்றுக் காலமாகும், இது கி.மு. 6 ஆம் நூற்றாண்டு முதல் கி.பி. 3 ஆம் நூற்றாண்டு வரை பரவியுள்ளது. இது மதுரையை மையமாகக் கொண்ட புகழ்பெற்ற சங்கப் புலவர் மற்றும் அறிஞர் அவைகளின் பெயரால் அழைக்கப்படுகிறது. இந்தக் காலத்து இலக்கியம், 'அகம்' (காதல், உள்வாழ்க்கை) மற்றும் 'புறம்' (போர், பொதுவாழ்க்கை) என வகைப்படுத்தப்பட்டு, பண்டைய தமிழர்களின் வாழ்க்கை, நிர்வாகம் மற்றும் விழுமியங்களின் வளமான சித்திரத்தை வழங்குகிறது. சேர, சோழ மற்றும் பாண்டிய வம்சங்களால் வழிநடத்தப்பட்ட முடியாட்சி முதன்மையாக இருந்தது. பொருளாதாரம் வேளாண்மை மற்றும் வர்த்தகத்தை அடிப்படையாகக் கொண்டது, ரோமானிய மற்றும் தென்கிழக்கு ஆசிய பேரரசுகளுடன் குறிப்பிடத்தக்க கடல் வர்த்தகம் இருந்தது.",
        localContext: [
          "Archaeological sites like Keeladi, Adichanallur, and Kodumanal provide physical evidence for the advanced urban civilization described in Sangam texts.",
          "The concepts of 'Thinai' (five-fold land classification) are unique to Sangam poetry and reflect a deep ecological understanding."
        ],
        currentAffairs: [
          {
            year: 2024,
            topic: "Recent Keeladi findings",
            relevance: "High probability of questions based on new archaeological discoveries about urban planning and literacy."
          }
        ]
      },
      {
        id: "thirukkural",
        title: "Thirukkural: Significance and Philosophy",
        titleTamil: "திருக்குறள்: முக்கியத்துவம் மற்றும் தத்துவம்",
        content: "## A Secular and Universal Text\n\nThirukkural, authored by Thiruvalluvar, is a masterpiece of Tamil literature, revered for its secular nature and universal applicability. It consists of 1330 couplets (kurals) divided into 133 chapters, each containing 10 couplets. The text is structured into three parts: Aram (அறம் - Virtue), Porul (பொருள் - Wealth/Governance), and Inbam (இன்பம் - Love). Unlike many ancient texts, it is not tied to any specific religion or ruler, offering timeless ethical, social, political, and economic guidance. Its emphasis on righteousness, just governance, and human relationships makes it a foundational text for understanding Tamil cultural values.",
        contentTamil: "## ஒரு மதச்சார்பற்ற மற்றும் உலகளாவிய நூல்\n\nதிருவள்ளுவரால் இயற்றப்பட்ட திருக்குறள், தமிழ் இலக்கியத்தின் ஒரு தலைசிறந்த படைப்பாகும், அதன் மதச்சார்பற்ற தன்மை மற்றும் உலகளாவிய பயன்பாட்டிற்காக போற்றப்படுகிறது. இது 133 அதிகாரங்களாகப் பிரிக்கப்பட்ட 1330 குறள்களைக் கொண்டுள்ளது, ஒவ்வொரு அதிகாரத்திலும் 10 குறள்கள் உள்ளன. இந்த நூல் மூன்று பகுதிகளாக அமைக்கப்பட்டுள்ளது: அறம், பொருள், மற்றும் இன்பம். பல பழங்கால நூல்களைப் போலல்லாமல், இது எந்தவொரு குறிப்பிட்ட மதத்துடனோ அல்லது ஆட்சியாளருடனோ பிணைக்கப்படவில்லை, காலத்தால் அழியாத நெறிமுறை, சமூக, அரசியல் மற்றும் பொருளாதார வழிகாட்டுதலை வழங்குகிறது. அதன் நீதி, நேர்மையான ஆட்சி, மற்றும் மனித உறவுகளுக்கு அளிக்கும் முக்கியத்துவம், தமிழ் கலாச்சார விழுமியங்களைப் புரிந்துகொள்வதற்கான ஒரு அடித்தள நூலாக அமைகிறது.",
        localContext: [
          "Thirukkural is frequently quoted in Tamil Nadu legislative assembly debates and official communications.",
          "The 133-foot statue of Thiruvalluvar in Kanyakumari symbolizes the 133 chapters of the Kural."
        ],
        currentAffairs: []
      },
       {
        id: "freedom-struggle-tn",
        title: "Role of Tamil Nadu in Freedom Struggle",
        titleTamil: "சுதந்திரப் போராட்டத்தில் தமிழ்நாட்டின் பங்கு",
        content: "## Early Agitations and Key Leaders\n\nTamil Nadu played a pioneering role in the struggle against British rule, with resistance dating back to the Palaiyakkarar (Poligar) revolts led by figures like Puli Thevan and Veerapandiya Kattabomman in the 18th century. The Vellore Mutiny of 1806 is considered a precursor to the 1857 Sepoy Mutiny. In the 20th century, leaders like Subramania Bharati (poet), V.O. Chidambaram Pillai (Swadeshi Steam Navigation Company), Tiruppur Kumaran (Kodikkatha Kumaran), and C. Rajagopalachari were at the forefront of the nationalist movement, participating actively in Swadeshi, Non-Cooperation, and Quit India movements.",
        contentTamil: "## ஆரம்பகாலப் போராட்டங்கள் மற்றும் முக்கியத் தலைவர்கள்\n\nபிரிட்டிஷ் ஆட்சிக்கு எதிரான போராட்டத்தில் தமிழ்நாடு ஒரு முன்னோடிப் பங்காற்றியது, 18 ஆம் நூற்றாண்டில் பூலித்தேவன் மற்றும் வீரபாண்டிய கட்டபொம்மன் போன்ற தலைவர்களால் வழிநடத்தப்பட்ட பாளையக்காரர் கிளர்ச்சிகள் வரை இதன் எதிர்ப்பு நீண்டது. 1806 ஆம் ஆண்டு வேலூர் சிப்பாய் எழுச்சி, 1857 ஆம் ஆண்டு சிப்பாய் கலகத்திற்கு ஒரு முன்னோடியாகக் கருதப்படுகிறது. 20 ஆம் நூற்றாண்டில், சுப்பிரமணிய பாரதி (கவிஞர்), வ.உ. சிதம்பரம் பிள்ளை (சுதேசி நீராவி கப்பல் நிறுவனம்), திருப்பூர் குமரன் (கொடிகாத்த குமரன்), மற்றும் சி. ராஜகோபாலாச்சாரி போன்ற தலைவர்கள் தேசியவாத இயக்கத்தின் முன்னணியில் இருந்தனர், சுதேசி, ஒத்துழையாமை, மற்றும் வெள்ளையனே வெளியேறு இயக்கங்களில் தீவிரமாகப் பங்கேற்றனர்.",
        localContext: [
          "The Vedaranyam Salt March, led by C. Rajagopalachari, was the southern equivalent of the Dandi March.",
          "Subramania Bharati's poems were a major source of inspiration for freedom fighters across the region."
        ],
        currentAffairs: []
      },
      {
        id: "justice-party",
        title: "Justice Party and Self-Respect Movement",
        titleTamil: "நீதிக் கட்சி மற்றும் சுயமரியாதை இயக்கம்",
        content: "## Social Reformation and Dravidian Ideology\n\nThe Justice Party, officially the South Indian Liberal Federation, was a political party in the Madras Presidency of British India. It was the first major backward class mobilization which created social and political awareness among the non-Brahmin people of south India. The Self-Respect Movement, led by E.V. Ramasamy (Periyar), was a radical social movement with the aim of achieving a society where backward castes have equal human rights, focusing on rationalism, abolition of the caste system, and women's rights. These movements laid the foundation for Dravidian politics in Tamil Nadu.",
        contentTamil: "## சமூக சீர்திருத்தம் மற்றும் திராவிட சித்தாந்தம்\n\nநீதிக் கட்சி, அதிகாரப்பூர்வமாக தென்னிந்திய தாராளவாதக் கூட்டமைப்பு, பிரிட்டிஷ் இந்தியாவின் மெட்ராஸ் பிரசிடென்சியில் ஒரு அரசியல் கட்சியாகும். இது தென்னிந்தியாவின் பிராமணர் அல்லாத மக்களிடையே சமூக மற்றும் அரசியல் விழிப்புணர்வை உருவாக்கிய முதல் பெரிய பின்தங்கிய வகுப்பு அணிதிரட்டலாகும். ஈ.வெ. ராமசாமி (பெரியார்) தலைமையிலான சுயமரியாதை இயக்கம், பின்தங்கிய சாதியினருக்கு சமமான மனித உரிமைகள் உள்ள, பகுத்தறிவு, சாதி ஒழிப்பு மற்றும் பெண்கள் உரிமைகளில் கவனம் செலுத்தும் ஒரு சமூகத்தை அடையும் நோக்கத்துடன் ஒரு தீவிர சமூக இயக்கமாக இருந்தது. இந்த இயக்கங்கள் தமிழ்நாட்டில் திராவிட அரசியலுக்கு அடித்தளமிட்டன.",
        localContext: [
          "The reservation policy in Tamil Nadu is a direct outcome of these movements.",
          "Statues and memorials for Periyar are common across Tamil Nadu, reflecting his profound impact on the state."
        ],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["Sangam", "Thinai", "Agam", "Puram", "Tirukkural", "Aram", "Porul", "Inbam", "Justice Party", "Self-Respect Movement", "Dravidian Movement", "Palaiyakkarar", "Vellore Mutiny", "Swadeshi"],
      importantFigures: ["Thiruvalluvar", "Periyar E.V. Ramasamy", "C.N. Annadurai", "K. Kamarajar", "Puli Thevan", "Veerapandiya Kattabomman", "Subramania Bharati", "V.O. Chidambaram Pillai", "Tiruppur Kumaran"],
      significantEvents: ["First, Second, and Third Sangam", "Vaikom Satyagraha", "Anti-Hindi Agitations of 1937 & 1965", "Vedaranyam Salt March", "Vellore Mutiny (1806)"],
      relevantLaws: ["Communal G.O. of 1921"],
      institutions: ["Tamil Nadu Archaeological Department", "Central Institute of Classical Tamil", "Periyar Memorial Museum, Vaikom"]
    },
    
    practice: {
      mcqs: [
        {
          question: "Which of the following is considered a primary source for the Sangam period?",
          questionTamil: "பின்வருவனவற்றில் எது சங்க காலத்திற்கான முதன்மை ஆதாரமாகக் கருதப்படுகிறது?",
          options: ["Tirukkural", "Silappathikaram", "Tholkappiyam", "All of the above"],
          optionsTamil: ["திருக்குறள்", "சிலப்பதிகாரம்", "தொல்காப்பியம்", "மேற்கண்ட அனைத்தும்"],
          correct: 3,
          explanation: "All three texts are cornerstones of Sangam literature, providing insights into the society, grammar, and ethics of the period. Tholkappiyam is the oldest, but all are primary sources.",
          explanationTamil: "திருக்குறள், சிலப்பதிகாரம், மற்றும் தொல்காப்பியம் ஆகிய மூன்றும் சங்க இலக்கியத்தின் மூலக்கற்களாகும், அவை அக்கால சமூகம், இலக்கணம், மற்றும் அறநெறிகள் பற்றிய பார்வைகளை வழங்குகின்றன. தொல்காப்பியம் பழமையானது, ஆனால் அனைத்தும் முதன்மை ஆதாரங்களே.",
          yearAsked: [2022],
          difficulty: "Medium",
          context: "This tests the knowledge of foundational Sangam texts."
        },
        {
          question: "The Self-Respect Movement was primarily founded by whom?",
          questionTamil: "சுயமரியாதை இயக்கம் முதன்மையாக யாரால் நிறுவப்பட்டது?",
          options: ["C. Rajagopalachari", "K. Kamaraj", "Periyar E.V. Ramasamy", "C.N. Annadurai"],
          optionsTamil: ["சி. ராஜகோபாலாச்சாரி", "கே. காமராஜ்", "பெரியார் ஈ.வெ. ராமசாமி", "சி.என். அண்ணாதுரை"],
          correct: 2,
          explanation: "Periyar E.V. Ramasamy was the founder of the Self-Respect Movement, which advocated for rationalism, women's rights, and the abolition of the caste system.",
          explanationTamil: "பெரியார் ஈ.வெ. ராமசாமி சுயமரியாதை இயக்கத்தின் நிறுவனர் ஆவார், இது பகுத்தறிவு, பெண்கள் உரிமைகள் மற்றும் சாதி அமைப்பை ஒழிப்பதற்காக வாதிட்டது.",
          yearAsked: [2023],
          difficulty: "Easy",
          context: "This tests knowledge of major leaders of social movements in Tamil Nadu."
        }
      ],
      shortAnswer: [
        {
          question: "Briefly explain the significance of the Keeladi excavations.",
          questionTamil: "கீழடி அகழ்வாராய்ச்சியின் முக்கியத்துவத்தை சுருக்கமாக விளக்கவும்.",
          marks: 5,
          keyPoints: ["Urban settlement dating back to Sangam age", "Evidence of a literate society (Tamil-Brahmi script)", "Wattle-and-daub structures", "Challenges previous notions about the timeline of Tamil urbanization"],
          sampleAnswer: "The Keeladi excavations near Madurai have revealed a large-scale urban settlement dating back to at least the 6th century BCE. This pushes back the timeline of Tamil urbanization significantly. Key findings include pottery with Tamil-Brahmi inscriptions, indicating a literate society, and evidence of industries like weaving and bead-making. The discovery of brick structures and drainage systems points to a sophisticated and planned city, providing tangible proof for the descriptions found in Sangam literature.",
          sampleAnswerTamil: "மதுரைக்கு அருகிலுள்ள கீழடி அகழ்வாராய்ச்சிகள், குறைந்தது கிமு 6 ஆம் நூற்றாண்டுக்கு முந்தைய ஒரு பெரிய அளவிலான நகர்ப்புற குடியேற்றத்தை வெளிப்படுத்தியுள்ளன. இது தமிழ் நகரமயமாக்கலின் காலவரிசையை கணிசமாக பின்னுக்குத் தள்ளுகிறது. தமிழ்-பிராமி கல்வெட்டுகளுடன் கூடிய மட்பாண்டங்கள் ஒரு எழுத்தறிவு பெற்ற சமூகத்தைக் குறிக்கின்றன, மேலும் நெசவு மற்றும் மணிகள் தயாரித்தல் போன்ற தொழில்களுக்கான சான்றுகள் ஆகியவை முக்கிய கண்டுபிடிப்புகளில் அடங்கும். செங்கல் கட்டமைப்புகள் மற்றும் வடிகால் அமைப்புகளின் கண்டுபிடிப்பு, சங்க இலக்கியத்தில் காணப்படும் വിവരണங்களுக்கு உறுதியான ஆதாரத்தை அளித்து, ஒரு மேம்பட்ட மற்றும் திட்டமிடப்பட்ட நகரத்தைக் குறிக்கிறது.",
          rubric: ["Mentioning location and date", "Literacy evidence", "Urban settlement features", "Connection to Sangam literature"]
        }
      ],
      essay: []
    },
    
    engagement: {
      peerTeaching: [],
      practicalActivities: []
    },
    
    spacedRepetition: {
      flashcards: [
        {
          front: "Tholkappiyam",
          frontTamil: "தொல்காப்பியம்",
          back: "An ancient Tamil grammar text and the oldest surviving work of Tamil literature.",
          backTamil: "ஒரு பண்டைய தமிழ் இலக்கண நூல் மற்றும் தமிழ் இலக்கியத்தின் மிகப் பழமையான நூல்.",
          category: "Literature",
          difficulty: 2
        },
        {
          front: "Keeladi",
          frontTamil: "கீழடி",
          back: "An archaeological site in Sivaganga district, revealing a Sangam-era urban settlement.",
          backTamil: "சிவகங்கை மாவட்டத்தில் உள்ள ஒரு தொல்பொருள் தளம், சங்க கால நகர்ப்புற குடியேற்றத்தை வெளிப்படுத்துகிறது.",
          category: "Archaeology",
          difficulty: 1
        }
      ],
      intervals: {
        day1: ["Key Terms"],
        day7: ["Important Figures"],
        day30: ["Concepts like Thinai"]
      }
    },
    
    analytics: {
      commonMistakes: ["Confusing the timelines of the Chera, Chola, and Pandya dynasties during the Sangam period.", "Misattributing social reforms between the Justice Party and the Self-Respect Movement."],
      timeAllocation: [{ section: "Sangam Age", minutes: 60 }, { section: "Justice Party and Self-Respect Movement", minutes: 45 }],
      strengthIndicators: ["Good recall of literary works.", "Understanding of major social reformers."],
      improvementAreas: ["Connecting archaeological evidence with literary sources.", "Understanding the nuances between different Dravidian movements."]
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["A Social History of the Tamils by K.K. Pillay", "Tamil Nadu State Board History textbooks (Std 6, 9, 11)"],
        websites: ["https://www.tnarch.gov.in/"],
        officialSources: ["Publications from the Central Institute of Classical Tamil"]
      },
      nextModule: "unit-9"
    }
  }
};

export function getTnpscModuleById(moduleId: string): TnpscModule | null {
  return TnpscContentDatabase[moduleId] || null;
}

export function getTnpscModulesBySubject(subject: string): TnpscModule[] {
  return Object.values(TnpscContentDatabase).filter(module => module.subject === subject);
}

export function getHighWeightageTnpscModules(): TnpscModule[] {
  return Object.values(TnpscContentDatabase)
    .filter(module => module.weightage >= 10)
    .sort((a, b) => b.weightage - a.weightage);
}
