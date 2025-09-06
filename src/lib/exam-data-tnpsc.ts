
import type { ExamModule as OldExamModule } from './types'; // Keep old type for existing data
import { geographyIndiaTamilNadu } from './exam-data-geography';
import { indianPolityAndGovernance } from './exam-data-polity';
import { indianEconomyAndPlanning } from './exam-data-economy';

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
      tnpscFrequency: number // 1 (low) to 5 (high)
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
        title: "Sangam Age through Thirukkural",
        titleTamil: "சங்க காலம் மற்றும் திருக்குறள்",
        content: "## Sangam Literature & Society\\n\\nThe Sangam period is the period of history of ancient Tamil Nadu, spanning from c. 6th century BCE to c. 3rd century CE. It was named after the famous Sangam academies of poets and scholars centered in the city of Madurai. The literature from this period, categorized into 'Agam' (love, inner life) and 'Puram' (war, public life), provides a rich tapestry of the life, administration, and values of the ancient Tamils. The governance was primarily monarchical, led by the Chera, Chola, and Pandya dynasties. The economy was agrarian and trade-based, with significant maritime trade with Roman and Southeast Asian empires.\\n\\n## Thirukkural: Significance and Philosophy\\n\\nThirukkural, authored by Thiruvalluvar, is a masterpiece of Tamil literature, revered for its secular nature and universal applicability. It consists of 1330 couplets (kurals) divided into 133 chapters, each containing 10 couplets. The text is structured into three parts: Aram (அறம் - Virtue), Porul (பொருள் - Wealth/Governance), and Inbam (இன்பம் - Love). Unlike many ancient texts, it is not tied to any specific religion or ruler, offering timeless ethical, social, political, and economic guidance. Its emphasis on righteousness, just governance, and human relationships makes it a foundational text for understanding Tamil cultural values.",
        contentTamil: "## சங்க இலக்கியம் மற்றும் சமூகம்\\n\\nசங்க காலம் என்பது பண்டைய தமிழ்நாட்டின் வரலாற்றுக் காலமாகும், இது கி.மு. 6 ஆம் நூற்றாண்டு முதல் கி.பி. 3 ஆம் நூற்றாண்டு வரை பரவியுள்ளது. இது மதுரையை மையமாகக் கொண்ட புகழ்பெற்ற சங்கப் புலவர் மற்றும் அறிஞர் அவைகளின் பெயரால் அழைக்கப்படுகிறது. இந்தக் காலத்து இலக்கியம், 'அகம்' (காதல், உள்வாழ்க்கை) மற்றும் 'புறம்' (போர், பொதுவாழ்க்கை) என வகைப்படுத்தப்பட்டு, பண்டைய தமிழர்களின் வாழ்க்கை, நிர்வாகம் மற்றும் விழுமியங்களின் வளமான சித்திரத்தை வழங்குகிறது. சேர, சோழ மற்றும் பாண்டிய வம்சங்களால் வழிநடத்தப்பட்ட முடியாட்சி முதன்மையாக இருந்தது. பொருளாதாரம் வேளாண்மை மற்றும் வர்த்தகத்தை அடிப்படையாகக் கொண்டது, ரோமானிய மற்றும் தென்கிழக்கு ஆசிய பேரரசுகளுடன் குறிப்பிடத்தக்க கடல் வர்த்தகம் இருந்தது.\\n\\n## திருக்குறள்: முக்கியத்துவம் மற்றும் தத்துவம்\\n\\nதிருவள்ளுவரால் இயற்றப்பட்ட திருக்குறள், தமிழ் இலக்கியத்தின் ஒரு தலைசிறந்த படைப்பாகும், அதன் மதச்சார்பற்ற தன்மை மற்றும் உலகளாவிய பயன்பாட்டிற்காக போற்றப்படுகிறது. இது 133 அதிகாரங்களாகப் பிரிக்கப்பட்ட 1330 குறள்களைக் கொண்டுள்ளது, ஒவ்வொரு அதிகாரத்திலும் 10 குறள்கள் உள்ளன. இந்த நூல் மூன்று பகுதிகளாக அமைக்கப்பட்டுள்ளது: அறம், பொருள், மற்றும் இன்பம். பல பழங்கால நூல்களைப் போலல்லாமல், இது எந்தவொரு குறிப்பிட்ட மதத்துடனோ அல்லது ஆட்சியாளருடனோ பிணைக்கப்படவில்லை, காலத்தால் அழியாத நெறிமுறை, சமூக, அரசியல் மற்றும் பொருளாதார வழிகாட்டுதலை வழங்குகிறது. அதன் நீதி, நேர்மையான ஆட்சி, மற்றும் மனித உறவுகளுக்கு அளிக்கும் முக்கியத்துவம், தமிழ் கலாச்சார விழுமியங்களைப் புரிந்துகொள்வதற்கான ஒரு அடித்தள நூலாக அமைகிறது.",
        localContext: [
          "Archaeological sites like Keeladi, Adichanallur, and Kodumanal provide physical evidence for the advanced urban civilization described in Sangam texts.",
          "The concepts of 'Thinai' (five-fold land classification) are unique to Sangam poetry and reflect a deep ecological understanding.",
          "Thirukkural is frequently quoted in Tamil Nadu legislative assembly debates and official communications.",
          "The 133-foot statue of Thiruvalluvar in Kanyakumari symbolizes the 133 chapters of the Kural."
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
        id: "freedom-struggle-tn",
        title: "Role of Tamil Nadu in Freedom Struggle",
        titleTamil: "சுதந்திரப் போராட்டத்தில் தமிழ்நாட்டின் பங்கு",
        content: "## Early Agitations and Key Leaders\\n\\nTamil Nadu played a pioneering role in the struggle against British rule, with resistance dating back to the Palaiyakkarar (Poligar) revolts led by figures like Puli Thevan and Veerapandiya Kattabomman in the 18th century. The Vellore Mutiny of 1806 is considered a precursor to the 1857 Sepoy Mutiny. In the 20th century, leaders like Subramania Bharati (poet), V.O. Chidambaram Pillai (Swadeshi Steam Navigation Company), Tiruppur Kumaran (Kodikkatha Kumaran), and C. Rajagopalachari were at the forefront of the nationalist movement, participating actively in Swadeshi, Non-Cooperation, and Quit India movements.",
        contentTamil: "## ஆரம்பகாலப் போராட்டங்கள் மற்றும் முக்கியத் தலைவர்கள்\\n\\nபிரிட்டிஷ் ஆட்சிக்கு எதிரான போராட்டத்தில் தமிழ்நாடு ஒரு முன்னோடிப் பங்காற்றியது, 18 ஆம் நூற்றாண்டில் பூலித்தேவன் மற்றும் வீரபாண்டிய கட்டபொம்மன் போன்ற தலைவர்களால் வழிநடத்தப்பட்ட பாளையக்காரர் கிளர்ச்சிகள் வரை இதன் எதிர்ப்பு நீண்டது. 1806 ஆம் ஆண்டு வேலூர் சிப்பாய் எழுச்சி, 1857 ஆம் ஆண்டு சிப்பாய் கலகத்திற்கு ஒரு முன்னோடியாகக் கருதப்படுகிறது. 20 ஆம் நூற்றாண்டில், சுப்பிரமணிய பாரதி (கவிஞர்), வ.உ. சிதம்பரம் பிள்ளை (சுதேசி நீராவி கப்பல் நிறுவனம்), திருப்பூர் குமரன் (கொடிகாத்த குமரன்), மற்றும் சி. ராஜகோபாலாச்சாரி போன்ற தலைவர்கள் தேசியவாத இயக்கத்தின் முன்னணியில் இருந்தனர், சுதேசி, ஒத்துழையாமை, மற்றும் வெள்ளையனே வெளியேறு இயக்கங்களில் தீவிரமாகப் பங்கேற்றனர்.",
        localContext: [
          "The Vedaranyam Salt March, led by C. Rajagopalachari, was the southern equivalent of the Dandi March.",
          "Subramania Bharati's poems were a major source of inspiration for freedom fighters across the region."
        ],
        currentAffairs: []
      },
      {
        id: "justice-party",
        title: "Dravidian Movement, Justice Party and Self-Respect Movement",
        titleTamil: "திராவிட இயக்கம், நீதிக் கட்சி மற்றும் சுயமரியாதை இயக்கம்",
        content: "## Social Reformation and Dravidian Ideology\\n\\nThe Dravidian Movement emerged in the late 19th and early 20th centuries as a reaction against Brahminical dominance in society. The Justice Party, officially the South Indian Liberal Federation, was a political party in the Madras Presidency of British India. It was the first major backward class mobilization which created social and political awareness among the non-Brahmin people of south India. The Self-Respect Movement, led by E.V. Ramasamy (Periyar), was a radical social movement with the aim of achieving a society where backward castes have equal human rights, focusing on rationalism, abolition of the caste system, and women's rights. These movements laid the foundation for Dravidian politics in Tamil Nadu, with significant contributions from leaders like C.N. Annadurai and Thiru. Vi. Kalyanasundaram.",
        contentTamil: "## சமூக சீர்திருத்தம் மற்றும் திராவிட சித்தாந்தம்\\n\\nதிராவிட இயக்கம் 19 ஆம் நூற்றாண்டின் பிற்பகுதியிலும் 20 ஆம் நூற்றாண்டின் முற்பகுதியிலும் சமூகத்தில் பிராமண ஆதிக்கத்திற்கு எதிரான ஒரு প্রতিক্রியாக வெளிப்பட்டது. நீதிக் கட்சி, அதிகாரப்பூர்வமாக தென்னிந்திய தாராளவாதக் கூட்டமைப்பு, பிரிட்டிஷ் இந்தியாவின் மெட்ராஸ் பிரசிடென்சியில் ஒரு அரசியல் கட்சியாகும். இது தென்னிந்தியாவின் பிராமணர் அல்லாத மக்களிடையே சமூக மற்றும் அரசியல் விழிப்புணர்வை உருவாக்கிய முதல் பெரிய பின்தங்கிய வகுப்பு அணிதிரட்டலாகும். ஈ.வெ. ராமசாமி (பெரியார்) தலைமையிலான சுயமரியாதை இயக்கம், பின்தங்கிய சாதியினருக்கு சமமான மனித உரிமைகள் உள்ள, பகுத்தறிவு, சாதி ஒழிப்பு மற்றும் பெண்கள் உரிமைகளில் கவனம் செலுத்தும் ஒரு சமூகத்தை அடையும் நோக்கத்துடன் ஒரு தீவிர சமூக இயக்கமாக இருந்தது. சி.என். அண்ணாதுரை மற்றும் திரு. வி. கல்யாணசுந்தரம் போன்ற தலைவர்களின் குறிப்பிடத்தக்க பங்களிப்புகளுடன், இந்த இயக்கங்கள் தமிழ்நாட்டில் திராவிட அரசியலுக்கு அடித்தளமிட்டன.",
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
          tnpscFrequency: 4,
          context: "sangam-age"
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
          tnpscFrequency: 5,
          context: "justice-party"
        },
        {
          question: "The Vedaranyam Salt March was led by?",
          questionTamil: "வேதாரண்யம் உப்பு சத்தியாக்கிரகத்தை வழிநடத்தியவர் யார்?",
          options: ["V.O. Chidambaram Pillai", "Tiruppur Kumaran", "C. Rajagopalachari", "Subramania Bharati"],
          optionsTamil: ["வ.உ. சிதம்பரம் பிள்ளை", "திருப்பூர் குமரன்", "சி. ராஜகோபாலாச்சாரி", "சுப்பிரமணிய பாரதி"],
          correct: 2,
          explanation: "C. Rajagopalachari, also known as Rajaji, led the Vedaranyam March in Tamil Nadu, which was the southern counterpart to Gandhi's Dandi March.",
          explanationTamil: "ராஜாஜி என்று அழைக்கப்படும் சி. ராஜகோபாலாச்சாரி, தமிழ்நாட்டில் வேதாரண்யம் அணிவகுப்பை வழிநடத்தினார், இது காந்தியின் தண்டி அணிவகுப்புக்கு தெற்கில் இணையான நிகழ்வாகும்.",
          yearAsked: [2021],
          difficulty: "Medium",
          tnpscFrequency: 3,
          context: "freedom-struggle-tn"
        },
        {
          question: "Thirukkural is divided into how many parts?",
          questionTamil: "திருக்குறள் எத்தனை பால்களாகப் பிரிக்கப்பட்டுள்ளது?",
          options: ["Two (Irandu)", "Three (Moondru)", "Four (Naangu)", "Five (Aindhu)"],
          optionsTamil: ["இரண்டு", "மூன்று", "நான்கு", "ஐந்து"],
          correct: 1,
          explanation: "Thirukkural is divided into three main parts (paal): Aram (Virtue), Porul (Wealth/Governance), and Inbam (Love).",
          explanationTamil: "திருக்குறள் அறம், பொருள், மற்றும் இன்பம் என மூன்று முக்கியப் பால்களாகப் பிரிக்கப்பட்டுள்ளது.",
          yearAsked: [2022],
          difficulty: "Easy",
          tnpscFrequency: 5,
          context: "sangam-age"
        },
        {
          question: "The Justice Party was formed to primarily represent the interests of?",
          questionTamil: "நீதிக் கட்சி முதன்மையாக யாருடைய நலன்களைப் பிரதிநிதித்துவப்படுத்த உருவாக்கப்பட்டது?",
          options: ["Brahmins", "Non-Brahmins", "Zamindars", "Indian National Congress"],
          optionsTamil: ["பிராமணர்கள்", "பிராமணர் அல்லாதவர்கள்", "ஜமீன்தார்கள்", "இந்திய தேசிய காங்கிரஸ்"],
          correct: 1,
          explanation: "The Justice Party, or South Indian Liberal Federation, was formed to promote the interests of the non-Brahmin community in education, government jobs, and politics.",
          explanationTamil: "நீதிக் கட்சி அல்லது தென்னிந்திய தாராளவாதக் கூட்டமைப்பு, கல்வி, அரசாங்க வேலைகள் மற்றும் அரசியலில் பிராமணர் அல்லாத சமூகத்தின் நலன்களை மேம்படுத்துவதற்காக உருவாக்கப்பட்டது.",
          yearAsked: [2023],
          difficulty: "Medium",
          tnpscFrequency: 4,
          context: "justice-party"
        },
        {
          question: "The concept of 'Agam' in Sangam literature refers to:",
          questionTamil: "சங்க இலக்கியத்தில் 'அகம்' என்ற கருத்து எதைக் குறிக்கிறது?",
          options: ["War and public life", "Love and inner life", "Trade and economy", "Devotional poetry"],
          optionsTamil: ["போர் மற்றும் பொது வாழ்க்கை", "காதல் மற்றும் உள் வாழ்க்கை", "வர்த்தகம் மற்றும் பொருளாதாரம்", "பக்தி கவிதை"],
          correct: 1,
          explanation: "'Agam' poetry deals with personal and emotional themes, particularly love and relationships, while 'Puram' poetry deals with public life, including war and heroism.",
          explanationTamil: "'அகம்' கவிதைகள் தனிப்பட்ட மற்றும் உணர்ச்சிப்பூர்வமான கருப்பொருள்களை, குறிப்பாக காதல் மற்றும் உறவுகளைக் கையாளுகின்றன, அதே நேரத்தில் 'புறம்' கவிதைகள் போர் மற்றும் வீரம் உள்ளிட்ட பொது வாழ்க்கையைக் கையாளுகின்றன.",
          yearAsked: [2021],
          difficulty: "Hard",
          tnpscFrequency: 2,
          context: "sangam-age"
        },
        {
          question: "Who is known as 'Kodikkatha Kumaran'?",
          questionTamil: "'கொடிகாத்த குமரன்' என்று அழைக்கப்படுபவர் யார்?",
          options: ["Subramania Bharati", "V.O. Chidambaram Pillai", "Tiruppur Kumaran", "Puli Thevan"],
          optionsTamil: ["சுப்பிரமணிய பாரதி", "வ.உ. சிதம்பரம் பிள்ளை", "திருப்பூர் குமரன்", "பூலித்தேவன்"],
          correct: 2,
          explanation: "Tiruppur Kumaran is called 'Kodikkatha Kumaran' because he died holding the Indian flag during a protest march and refused to let it fall.",
          explanationTamil: "திருப்பூர் குமரன் ஒரு போராட்ட ஊர்வலத்தின் போது இந்தியக் கொடியைப் பிடித்துக்கொண்டு இறந்தார், அதைக் கீழே விழ விட மறுத்ததால் 'கொடிகாத்த குமரன்' என்று அழைக்கப்படுகிறார்.",
          yearAsked: [2022],
          difficulty: "Easy",
          tnpscFrequency: 3,
          context: "freedom-struggle-tn"
        },
        {
          question: "The Vellore Mutiny took place in which year?",
          questionTamil: "வேலூர் சிப்பாய் எழுச்சி எந்த ஆண்டு நடைபெற்றது?",
          options: ["1757", "1806", "1857", "1906"],
          optionsTamil: ["1757", "1806", "1857", "1906"],
          correct: 1,
          explanation: "The Vellore Mutiny occurred on 10 July 1806 and is considered one of the earliest large-scale uprisings against the British East India Company, predating the 1857 mutiny.",
          explanationTamil: "வேலூர் சிப்பாய் எழுச்சி 1806 ஆம் ஆண்டு ஜூலை 10 ஆம் தேதி நிகழ்ந்தது, இது பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிரான ஆரம்பகால பெரிய அளவிலான கிளர்ச்சிகளில் ஒன்றாகக் கருதப்படுகிறது, இது 1857 ஆம் ஆண்டு கிளர்ச்சிக்கு முந்தையது.",
          yearAsked: [2021],
          difficulty: "Medium",
          tnpscFrequency: 3,
          context: "freedom-struggle-tn"
        },
        {
          question: "The 'Communal G.O.' which provided reservation for non-Brahmins was passed in which year?",
          questionTamil: "பிராமணர் அல்லாதவர்களுக்கு இடஒதுக்கீடு வழங்கிய 'வகுப்புவாரி அரசாணை' எந்த ஆண்டு நிறைவேற்றப்பட்டது?",
          options: ["1919", "1921", "1935", "1947"],
          optionsTamil: ["1919", "1921", "1935", "1947"],
          correct: 1,
          explanation: "The Justice Party government passed the Communal Government Order (G.O.) in 1921, which established reservation quotas for government jobs, a landmark social justice measure.",
          explanationTamil: "நீதிக் கட்சி அரசாங்கம் 1921 இல் வகுப்புவாரி அரசாணையை (G.O.) நிறைவேற்றியது, இது அரசாங்க வேலைகளுக்கான இடஒதுக்கீட்டு ஒதுக்கீடுகளை நிறுவியது, இது ஒரு முக்கிய சமூக நீதி நடவடிக்கையாகும்.",
          yearAsked: [2023],
          difficulty: "Hard",
          tnpscFrequency: 4,
          context: "justice-party"
        },
        {
          question: "V.O. Chidambaram Pillai is famously associated with:",
          questionTamil: "வ.உ. சிதம்பரம் பிள்ளை எதனுடன் பிரபலமாக தொடர்புடையவர்?",
          options: ["The Swadeshi Steam Navigation Company", "The Madras Mahajana Sabha", "The Tirunelveli Conspiracy Case", "All of the above"],
          optionsTamil: ["சுதேசி நீராவி கப்பல் நிறுவனம்", "மெட்ராஸ் மகாஜன சபை", "திருநெல்வேலி சதி வழக்கு", "மேற்கண்ட அனைத்தும்"],
          correct: 3,
          explanation: "V.O.C. was a multifaceted freedom fighter. He launched the Swadeshi Steam Navigation Company to compete with the British, was associated with the Madras Mahajana Sabha, and was implicated in the Tirunelveli Conspiracy Case.",
          explanationTamil: "வ.உ.சி. ஒரு பன்முக சுதந்திரப் போராட்ட வீரர். அவர் ஆங்கிலேயர்களுடன் போட்டியிட சுதேசி நீராவி கப்பல் நிறுவனத்தைத் தொடங்கினார், மெட்ராஸ் மகாஜன சபையுடன் தொடர்புடையவர், மற்றும் திருநெல்வேலி சதி வழக்கில் சிக்கவைக்கப்பட்டார்.",
          yearAsked: [2022],
          difficulty: "Hard",
          tnpscFrequency: 3,
          context: "freedom-struggle-tn"
        },
        {
          question: "The 'Thinai' concept in Sangam literature classifies land based on:",
          questionTamil: "சங்க இலக்கியத்தில் 'திணை' என்ற கருத்து நிலத்தை எதன் அடிப்படையில் வகைப்படுத்துகிறது?",
          options: ["Geographical and Ecological features", "Administrative divisions", "Caste hierarchy", "Economic productivity"],
          optionsTamil: ["புவியியல் மற்றும் சூழலியல் அம்சங்கள்", "நிர்வாகப் பிரிவுகள்", "சாதி படிநிலை", "பொருளாதார உற்பத்தித்திறன்"],
          correct: 0,
          explanation: "The Thinai concept classifies landscapes into five categories (Kurinji, Mullai, Marutham, Neithal, Palai) based on their unique geographical, floral, and faunal characteristics, which in turn influenced the culture and occupation of the people living there.",
          explanationTamil: "திணை என்ற கருத்து நிலப்பரப்புகளை அவற்றின் தனித்துவமான புவியியல், மலர் மற்றும் விலங்கு குணாதிசயங்களின் அடிப்படையில் ஐந்து வகைகளாக (குறிஞ்சி, முல்லை, மருதம், நெய்தல், பாலை) வகைப்படுத்துகிறது, இது அங்கு வாழும் மக்களின் கலாச்சாரம் மற்றும் தொழிலை பாதித்தது.",
          yearAsked: [2021],
          difficulty: "Medium",
          tnpscFrequency: 2,
          context: "sangam-age"
        },
        {
          question: "Periyar E.V. Ramasamy participated in which major protest outside of Tamil Nadu?",
          questionTamil: "பெரியார் ஈ.வெ. ராமசாமி தமிழ்நாட்டிற்கு வெளியே எந்த பெரிய போராட்டத்தில் பங்கேற்றார்?",
          options: ["Dandi March", "Bardoli Satyagraha", "Vaikom Satyagraha", "Chauri Chaura incident"],
          optionsTamil: ["தண்டி அணிவகுப்பு", "பர்டோலி சத்தியாகிரகம்", "வைக்கம் சத்தியாகிரகம்", "சௌரி சௌரா சம்பவம்"],
          correct: 2,
          explanation: "Periyar played a crucial role in the Vaikom Satyagraha in the princely state of Travancore (modern-day Kerala), which demanded the right for lower-caste individuals to use the roads around the Vaikom temple. For his role, he was given the title 'Vaikom Veerar' (Hero of Vaikom).",
          explanationTamil: "திருவிதாங்கூர் சமஸ்தானத்தில் (இன்றைய கேரளா) வைக்கம் சத்தியாகிரகத்தில் பெரியார் ஒரு முக்கியப் பங்காற்றினார், இது வைக்கம் கோவிலைச் சுற்றியுள்ள சாலைகளைப் பயன்படுத்த தாழ்த்தப்பட்ட சாதியினருக்கு உரிமை கோரியது. அவரது பங்களிப்பிற்காக, அவருக்கு 'வைக்கம் வீரர்' என்ற பட்டம் வழங்கப்பட்டது.",
          yearAsked: [2023],
          difficulty: "Medium",
          tnpscFrequency: 4,
          context: "justice-party"
        },
        {
          question: "The 'Porul' section of Thirukkural primarily deals with:",
          questionTamil: "திருக்குறளின் 'பொருள்' பால் முதன்மையாக எதைப் பற்றி பேசுகிறது?",
          options: ["Ethics and Virtue", "Love and Relationships", "Governance, Wealth, and Politics", "Spirituality and Renunciation"],
          optionsTamil: ["அறநெறி மற்றும் நல்லொழுக்கம்", "காதல் மற்றும் உறவுகள்", "ஆட்சி, செல்வம் மற்றும் அரசியல்", "ஆன்மீகம் மற்றும் துறவு"],
          correct: 2,
          explanation: "The 'Porul' (பொருள்) section of the Kural is a comprehensive guide to statecraft, governance, economic matters, and public life, making it a foundational text on political science and administration.",
          explanationTamil: "குறளின் 'பொருள்' பகுதி அரசுமுறை, ஆட்சி, பொருளாதார விஷயங்கள் மற்றும் பொது வாழ்க்கைக்கான ஒரு விரிவான வழிகாட்டியாகும், இது அரசியல் அறிவியல் மற்றும் நிர்வாகத்தின் ஒரு அடித்தள நூலாக அமைகிறது.",
          yearAsked: [2022],
          difficulty: "Easy",
          tnpscFrequency: 4,
          context: "sangam-age"
        },
        {
          question: "Which Sangam-era dynasty had the Tiger as their emblem?",
          questionTamil: "சங்க காலத்தில் எந்த வம்சத்தின் சின்னமாக புலி இருந்தது?",
          options: ["Cheras", "Cholas", "Pandyas", "Pallavas"],
          optionsTamil: ["சேரர்கள்", "சோழர்கள்", "பாண்டியர்கள்", "பல்லவர்கள்"],
          correct: 1,
          explanation: "The Cholas had the Tiger (புலி) as their royal emblem. The Cheras had the Bow and Arrow, and the Pandyas had the Fish.",
          explanationTamil: "சோழர்கள் புலியை தங்கள் அரச சின்னமாக கொண்டிருந்தனர். சேரர்கள் வில் மற்றும் அம்பையும், பாண்டியர்கள் மீனையும் கொண்டிருந்தனர்.",
          yearAsked: [2021],
          difficulty: "Medium",
          tnpscFrequency: 2,
          context: "sangam-age"
        },
        {
          question: "The Anti-Hindi agitations in Tamil Nadu were a major factor in the rise of which party to power?",
          questionTamil: "தமிழ்நாட்டில் இந்தி எதிர்ப்புப் போராட்டங்கள் எந்தக் கட்சியின் ஆட்சிக்கு உயர்வுக்கு ஒரு முக்கிய காரணியாக இருந்தன?",
          options: ["Indian National Congress", "Justice Party", "Swatantra Party", "Dravida Munnetra Kazhagam (DMK)"],
          optionsTamil: ["இந்திய தேசிய காங்கிரஸ்", "நீதிக் கட்சி", "சுதந்திரா கட்சி", "திராவிட முன்னேற்றக் கழகம் (திமுக)"],
          correct: 3,
          explanation: "The Anti-Hindi agitations, particularly the one in 1965, were pivotal in galvanizing support for the DMK, leading to their landmark victory in the 1967 assembly elections.",
          explanationTamil: "இந்தி எதிர்ப்புப் போராட்டங்கள், குறிப்பாக 1965ல் நடந்த போராட்டம், திமுகவுக்கு ஆதரவைத் திரட்டுவதில் முக்கியப் பங்கு வகித்தது, இது 1967 சட்டமன்றத் தேர்தலில் அவர்களின் வரலாற்றுச் சிறப்புமிக்க வெற்றிக்கு வழிவகுத்தது.",
          yearAsked: [2023],
          difficulty: "Medium",
          tnpscFrequency: 3,
          context: "justice-party"
        },
        {
            question: "Who was the first Palaiyakkarar (Poligar) to openly rebel against the British East India Company?",
            questionTamil: "பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிராக வெளிப்படையாகக் கிளர்ச்சி செய்த முதல் பாளையக்காரர் யார்?",
            options: ["Veerapandiya Kattabomman", "Maruthu Pandiyar", "Dheeran Chinnamalai", "Puli Thevan"],
            optionsTamil: ["வீரபாண்டிய கட்டபொம்மன்", "மருது பாண்டியர்", "தீரன் சின்னமலை", "பூலித்தேவன்"],
            correct: 3,
            explanation: "Puli Thevan, the Palaiyakkarar of Nerkattumseval, was one of the earliest opponents of British rule in South India, leading rebellions in the 1750s, well before other famous revolts.",
            explanationTamil: "நெற்கட்டும்செவல் பாளையக்காரரான பூலித்தேவன், தென்னிந்தியாவில் பிரிட்டிஷ் ஆட்சிக்கு எதிரான ஆரம்பகால எதிர்ப்பாளர்களில் ஒருவராக இருந்தார், 1750 களில் மற்ற புகழ்பெற்ற கிளர்ச்சிகளுக்கு முன்பே கிளர்ச்சிகளை வழிநடத்தினார்.",
            yearAsked: [2022],
            difficulty: "Hard",
            tnpscFrequency: 3,
            context: "freedom-struggle-tn"
        },
        {
            question: "The term 'Muvendar' in Sangam literature refers to:",
            questionTamil: "சங்க இலக்கியத்தில் 'மூவேந்தர்' என்ற சொல் யாரைக் குறிக்கிறது?",
            options: ["Three types of poetry", "Three major gods", "The Chera, Chola, and Pandya kings", "Three important cities"],
            optionsTamil: ["மூன்று வகை கவிதைகள்", "மூன்று முக்கிய கடவுள்கள்", "சேர, சோழ மற்றும் பாண்டிய மன்னர்கள்", "மூன்று முக்கிய நகரங்கள்"],
            correct: 2,
            explanation: "'Muvendar' translates to 'The Three Crowned Kings,' and it collectively refers to the rulers of the Chera, Chola, and Pandya dynasties who dominated the political landscape of ancient Tamilakam.",
            explanationTamil: "'மூவேந்தர்' என்பது 'முடிசூடிய மூன்று மன்னர்கள்' என்று மொழிபெயர்க்கப்பட்டுள்ளது, மேலும் இது பண்டைய தமிழகத்தின் அரசியல் நிலப்பரப்பில் ஆதிக்கம் செலுத்திய சேர, சோழ மற்றும் பாண்டிய வம்சங்களின் ஆட்சியாளர்களைக் கூட்டாகக் குறிக்கிறது.",
            yearAsked: [2021],
            difficulty: "Easy",
            tnpscFrequency: 4,
            context: "sangam-age"
        },
        {
            question: "Which social evil did Periyar's Self-Respect Movement primarily fight against?",
            questionTamil: "பெரியாரின் சுயமரியாதை இயக்கம் முதன்மையாக எந்த சமூகத் தீமைக்கு எதிராகப் போராடியது?",
            options: ["Child Marriage", "Sati", "Untouchability and the Caste System", "Dowry"],
            optionsTamil: ["குழந்தைத் திருமணம்", "சதி", "தீண்டாமை மற்றும் சாதி அமைப்பு", "வரதட்சணை"],
            correct: 2,
            explanation: "The central focus of the Self-Respect Movement was the eradication of the caste system and the practice of untouchability, advocating for a society based on equality and rationalism.",
            explanationTamil: "சுயமரியாதை இயக்கத்தின் முக்கிய நோக்கம் சாதி அமைப்பையும் தீண்டாமையையும் ஒழித்து, சமத்துவம் மற்றும் பகுத்தறிவு அடிப்படையில் ஒரு சமூகத்தை உருவாக்குவதாகும்.",
            yearAsked: [2023],
            difficulty: "Easy",
            tnpscFrequency: 5,
            context: "justice-party"
        },
        {
            question: "The Tamil newspaper 'Kudi Arasu' was founded by:",
            questionTamil: "'குடி அரசு' என்ற தமிழ் செய்தித்தாள் யாரால் நிறுவப்பட்டது?",
            options: ["Thiru. Vi. Ka", "C.N. Annadurai", "M. Karunanidhi", "Periyar E.V. Ramasamy"],
            optionsTamil: ["திரு. வி. க", "சி.என். அண்ணாதுரை", "மு. கருணாநிதி", "பெரியார் ஈ.வெ. ராமசாமி"],
            correct: 3,
            explanation: "'Kudi Arasu' (Republic) was the official newspaper of the Self-Respect Movement, founded and edited by Periyar E.V. Ramasamy to propagate its ideals.",
            explanationTamil: "'குடி அரசு' சுயமரியாதை இயக்கத்தின் அதிகாரப்பூர்வ செய்தித்தாள் ஆகும், இது அதன் கொள்கைகளைப் பரப்புவதற்காக பெரியார் ஈ.வெ. ராமசாமியால் நிறுவப்பட்டு திருத்தப்பட்டது.",
            yearAsked: [2022],
            difficulty: "Medium",
            tnpscFrequency: 3,
            context: "justice-party"
        },
        {
            question: "Which of the following sites is NOT associated with the Indus Valley Civilization but is a significant Sangam Age site?",
            questionTamil: "பின்வரும் தளங்களில் சிந்து சமவெளி நாகரிகத்துடன் தொடர்பில்லாத ஆனால் ஒரு முக்கியமான சங்க கால தளம் எது?",
            options: ["Harappa", "Mohenjo-Daro", "Lothal", "Keeladi"],
            optionsTamil: ["ஹரப்பா", "மொகஞ்சதாரோ", "லோத்தல்", "கீழடி"],
            correct: 3,
            explanation: "Harappa, Mohenjo-Daro, and Lothal are key sites of the Indus Valley Civilization. Keeladi is a major archaeological site in Tamil Nadu that has established an urban civilization during the Sangam Age, contemporary with the later phases of the IVC but distinct.",
            explanationTamil: "ஹரப்பா, மொகஞ்சதாரோ மற்றும் லோத்தல் ஆகியவை சிந்து சமவெளி நாகரிகத்தின் முக்கிய தளங்கள். கீழடி என்பது தமிழ்நாட்டில் உள்ள ஒரு முக்கிய தொல்பொருள் தளமாகும், இது சங்க காலத்தில் ஒரு நகர்ப்புற நாகரிகத்தை நிறுவியுள்ளது, இது IVC இன் பிற்கால கட்டங்களுடன் சமகாலமானது ஆனால் வேறுபட்டது.",
            yearAsked: [2023],
            difficulty: "Medium",
            tnpscFrequency: 4,
            context: "sangam-age"
        },
        {
            question: "The introduction of reservation in government jobs for non-Brahmins was a key achievement of:",
            questionTamil: "பிராமணர் அல்லாதவர்களுக்கு அரசு வேலைகளில் இடஒதுக்கீடு அறிமுகப்படுத்தப்பட்டது யாருடைய முக்கிய சாதனையாகும்?",
            options: ["The Indian National Congress", "The Self-Respect Movement", "The Justice Party", "The Swadeshi Movement"],
            optionsTamil: ["இந்திய தேசிய காங்கிரஸ்", "சுயமரியாதை இயக்கம்", "நீதிக் கட்சி", "சுதேசி இயக்கம்"],
            correct: 2,
            explanation: "The Justice Party, during its time in power in the Madras Presidency, passed the Communal G.O. of 1921, which was the first order to institutionalize reservation for various communities in government employment.",
            explanationTamil: "நீதிக் கட்சி, மெட்ராஸ் பிரசிடென்சியில் ஆட்சியில் இருந்த காலத்தில், 1921 ஆம் ஆண்டின் வகுப்புவாரி அரசாணையை நிறைவேற்றியது, இது அரசாங்க வேலைவாய்ப்பில் பல்வேறு சமூகங்களுக்கு இடஒதுக்கீட்டை நிறுவனமயமாக்கிய முதல் உத்தரவாகும்.",
            yearAsked: [2022],
            difficulty: "Medium",
            tnpscFrequency: 4,
            context: "justice-party"
        },
        {
            question: "The ethical treatise Thirukkural contains couplets that are:",
            questionTamil: "திருக்குறள் என்ற அறநூலில் உள்ள குறள்கள்:",
            options: ["Specific to a single religion", "Applicable only to rulers", "Secular and universal in nature", "Focused only on asceticism"],
            optionsTamil: ["ஒரு குறிப்பிட்ட மதத்திற்கு உரியது", "ஆட்சியாளர்களுக்கு மட்டுமே பொருந்தும்", "மதச்சார்பற்ற மற்றும் உலகளாவிய தன்மை கொண்டது", "துறவு பற்றி மட்டுமே கவனம் செலுத்துகிறது"],
            correct: 2,
            explanation: "One of the most celebrated features of the Thirukkural is its secularism. Its teachings on ethics, governance, and love are presented in a universal manner, applicable to all people regardless of their faith or background.",
            explanationTamil: "திருக்குறளின் மிகவும் கொண்டாடப்படும் அம்சங்களில் ஒன்று அதன் மதச்சார்பின்மை. அறம், ஆட்சி மற்றும் காதல் பற்றிய அதன் போதனைகள் உலகளாவிய முறையில் வழங்கப்பட்டுள்ளன, அவை மதம் அல்லது பின்னணியைப் பொருட்படுத்தாமல் அனைவருக்கும் பொருந்தும்.",
            yearAsked: [2021],
            difficulty: "Easy",
            tnpscFrequency: 5,
            context: "sangam-age"
        },
        {
            question: "Who among the following is a prominent Tamil poet known for his patriotic songs during the freedom struggle?",
            questionTamil: "பின்வருவனவற்றில் சுதந்திரப் போராட்டத்தின் போது தனது தேசபக்திப் பாடல்களுக்காக அறியப்பட்ட ஒரு முக்கிய தமிழ்க் கவிஞர் யார்?",
            options: ["Kambar", "Thiruvalluvar", "Subramania Bharati", "Periyar E.V. Ramasamy"],
            optionsTamil: ["கம்பர்", "திருவள்ளுவர்", "சுப்பிரமணிய பாரதி", "பெரியார் ஈ.வெ. ராமசாமி"],
            correct: 2,
            explanation: "Subramania Bharati, often referred to as 'Mahakavi Bharati', was a pioneer of modern Tamil poetry and a fervent nationalist whose poems inspired patriotism and social change during the Indian Independence movement.",
            explanationTamil: "'மகாகவி பாரதி' என்று அடிக்கடி குறிப்பிடப்படும் சுப்பிரமணிய பாரதி, நவீன தமிழ்க் கவிதையின் முன்னோடியாகவும், இந்திய சுதந்திர இயக்கத்தின் போது தேசபக்தி மற்றும் சமூக மாற்றத்தைத் தூண்டிய கவிதைகளைக் கொண்ட ஒரு தீவிர தேசியவாதியாகவும் இருந்தார்.",
            yearAsked: [2022],
            difficulty: "Easy",
            tnpscFrequency: 3,
            context: "freedom-struggle-tn"
        },
        {
            question: "The ancient port city of the Pandyas, known for its pearl fisheries, was:",
            questionTamil: "பாண்டியர்களின் பண்டைய துறைமுக நகரம், அதன் முத்து மீன்பிடிக்கு பெயர் பெற்றது:",
            options: ["Kaveripoompattinam (Puhar)", "Muziris", "Korkai", "Arikamedu"],
            optionsTamil: ["காவேரிபூம்பட்டினம் (புகார்)", "முசிறி", "கொற்கை", "அரிக்கமேடு"],
            correct: 2,
            explanation: "Korkai, located on the Thamirabarani river estuary, was the principal port of the Early Pandya kingdom and was world-renowned for its pearl fishery, as mentioned in Sangam literature and Greco-Roman texts.",
            explanationTamil: "தாமிரபரணி ஆற்றின் முகத்துவாரத்தில் அமைந்துள்ள கொற்கை, ஆரம்பகால பாண்டிய இராச்சியத்தின் முக்கிய துறைமுகமாக இருந்தது, மேலும் சங்க இலக்கியம் மற்றும் கிரேக்க-ரோமானிய நூல்களில் குறிப்பிடப்பட்டுள்ளபடி, அதன் முத்து மீன்பிடிக்காக உலகப் புகழ்பெற்றது.",
            yearAsked: [2021],
            difficulty: "Hard",
            tnpscFrequency: 2,
            context: "sangam-age"
        },
        {
            question: "The Dravidian movement, in its essence, was a movement against:",
            questionTamil: "திராவிட இயக்கம், அதன் சாராம்சத்தில், எதற்கு எதிரான ஒரு இயக்கமாகும்?",
            options: ["British rule only", "The zamindari system", "Brahminical dominance and the caste system", "The monarchical system"],
            optionsTamil: ["பிரிட்டிஷ் ஆட்சிக்கு மட்டும்", "ஜமீன்தாரி முறை", "பிராமண ஆதிக்கம் மற்றும் சாதி அமைப்பு", "முடியாட்சி முறை"],
            correct: 2,
            explanation: "At its core, the Dravidian movement, including the Justice Party and the Self-Respect Movement, was a socio-political uprising against the dominance of the Brahmin caste in religious, social, and political spheres, advocating for the rights of non-Brahmins.",
            explanationTamil: "அதன் மையத்தில், நீதிக் கட்சி மற்றும் சுயமரியாதை இயக்கம் உள்ளிட்ட திராவிட இயக்கம், மத, சமூக மற்றும் அரசியல் துறைகளில் பிராமண சாதியின் ஆதிக்கத்திற்கு எதிரான ஒரு சமூக-அரசியல் எழுச்சியாகும், இது பிராமணர் அல்லாதவர்களின் உரிமைகளுக்காக வாதிட்டது.",
            yearAsked: [2023],
            difficulty: "Medium",
            tnpscFrequency: 4,
            context: "justice-party"
        }
      ],
      shortAnswer: [
        {
          question: "Briefly explain the significance of the Keeladi excavations.",
          questionTamil: "கீழடி அகழ்வாராய்ச்சியின் முக்கியத்துவத்தை சுருக்கமாக விளக்கவும்.",
          marks: 5,
          keyPoints: ["Urban settlement dating back to Sangam age", "Evidence of a literate society (Tamil-Brahmi script)", "Wattle-and-daub structures", "Challenges previous notions about the timeline of Tamil urbanization"],
          sampleAnswer: "The Keeladi excavations near Madurai have revealed a large-scale urban settlement dating back to at least the 6th century BCE. This pushes back the timeline of Tamil urbanization significantly. Key findings include pottery with Tamil-Brahmi inscriptions, indicating a literate society, and evidence of industries like weaving and bead-making. The discovery of brick structures and drainage systems points to a sophisticated and planned city, providing tangible proof for the descriptions found in Sangam literature.",
          sampleAnswerTamil: "மதுரைக்கு அருகிலுள்ள கீழடி அகழ்வாராய்ச்சிகள், குறைந்தது கிமு 6 ஆம் நூற்றாண்டுக்கு முந்தைய ஒரு பெரிய அளவிலான நகர்ப்புற குடியேற்றத்தை வெளிப்படுத்தியுள்ளன. இது தமிழ் நகரமயமாக்கலின் காலவரிசையை கணிசமாக பின்னுக்குத் தள்ளுகிறது. தமிழ்-பிராமி கல்வெட்டுகளுடன் கூடிய மட்பாண்டங்கள் ஒரு எழுத்தறிவு பெற்ற சமூகத்தைக் குறிக்கின்றன, மேலும் நெசவு மற்றும் மணிகள் தயாரித்தல் போன்ற தொழில்களுக்கான சான்றுகள் ஆகியவை முக்கிய கண்டுபிடிப்புகளில் அடங்கும். செங்கல் கட்டமைப்புகள் மற்றும் வடிகால் அமைப்புகளின் கண்டுபிடிப்பு, சங்க இலக்கியத்தில் காணப்படும் വിവரணங்களுக்கு உறுதியான ஆதாரத்தை அளித்து, ஒரு மேம்பட்ட மற்றும் திட்டமிடப்பட்ட நகரத்தைக் குறிக்கிறது.",
          rubric: ["Mentioning location and date", "Literacy evidence", "Urban settlement features", "Connection to Sangam literature"]
        }
      ],
      essay: []
    },
    
    engagement: {
      peerTeaching: [
        {
          topic: "Vaikom Satyagraha's Significance",
          duration: 90,
          criteria: ["Clarity on the core issue", "Mention Periyar's role", "Explain the outcome"],
          prompt: "In 90 seconds, explain the Vaikom Satyagraha to a fellow student. Cover why it started, who the key leaders were (especially from Tamil Nadu), and what its long-term impact was on temple entry movements.",
          promptTamil: "90 வினாடிகளில், வைக்கம் சத்தியாகிரகத்தை சக மாணவருக்கு விளக்கவும். அது ஏன் தொடங்கியது, முக்கியத் தலைவர்கள் யார் (குறிப்பாக தமிழ்நாட்டிலிருந்து), மற்றும் கோயில் நுழைவு இயக்கங்களில் அதன் நீண்டகாலத் தாக்கம் என்ன என்பதை விளக்கவும்."
        }
      ],
      practicalActivities: [
        {
          title: "Timeline of Dravidian Movements",
          type: "research-and-organize",
          description: "Create a visual timeline of the Dravidian movement from the late 19th century to the formation of the DMK.",
          activities: [
            "Research the founding year of the South Indian Liberal Federation (Justice Party).",
            "Identify the year the Self-Respect Movement was launched by Periyar.",
            "Note the year C.N. Annadurai formed the DMK.",
            "Add 2-3 key events or legislative acts for each movement on the timeline."
          ],
          outputs: ["A visual timeline (digital or physical).", "A one-paragraph summary explaining the evolution from social reform to political power."],
          assessment: ["Accuracy of dates.", "Clarity of the timeline.", "Correct association of events with movements."]
        }
      ]
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
        },
        {
          front: "Vaikom Satyagraha",
          frontTamil: "வைக்கம் சத்தியாகிரகம்",
          back: "A movement in Travancore (Kerala) for temple entry rights, in which Periyar played a significant role.",
          backTamil: "கோயில் நுழைவு உரிமைகளுக்காக திருவிதாங்கூரில் (கேரளா) நடந்த ஒரு இயக்கம், இதில் பெரியார் முக்கியப் பங்காற்றினார்.",
          category: "Freedom Struggle",
          difficulty: 3
        },
        {
          front: "Communal G.O.",
          frontTamil: "வகுப்புவாரி அரசாணை",
          back: "The Government Order passed by the Justice Party in 1921 to provide reservation for non-Brahmins.",
          backTamil: "பிராமணர் அல்லாதவர்களுக்கு இடஒதுக்கீடு வழங்க 1921 இல் நீதிக் கட்சியால் நிறைவேற்றப்பட்ட அரசாணை.",
          category: "Dravidian Movement",
          difficulty: 3
        },
        {
          front: "Agam Literature",
          frontTamil: "அகம் இலக்கியம்",
          back: "Sangam literature dealing with personal, inner life, especially love and relationships.",
          backTamil: "தனிப்பட்ட, உள் வாழ்க்கை, குறிப்பாக காதல் மற்றும் உறவுகளைக் கையாளும் சங்க இலக்கியம்.",
          category: "Literature",
          difficulty: 2
        },
        {
          front: "Puli Thevan",
          frontTamil: "பூலித்தேவன்",
          back: "An 18th-century Palaiyakkarar of Nerkattumseval who was one of the earliest to rebel against the British.",
          backTamil: "18 ஆம் நூற்றாண்டின் நெற்கட்டும்செவல் பாளையக்காரர், ஆங்கிலேயருக்கு எதிராக ஆரம்பத்திலேயே கிளர்ச்சி செய்தவர்களில் ஒருவர்.",
          category: "Freedom Struggle",
          difficulty: 4
        },
        {
            front: "Muvendar",
            frontTamil: "மூவேந்தர்",
            back: "The 'Three Crowned Kings' of ancient Tamilakam: the Cheras, Cholas, and Pandyas.",
            backTamil: "பண்டைய தமிழகத்தின் 'முடிசூடிய மூன்று மன்னர்கள்': சேரர், சோழர் மற்றும் பாண்டியர்கள்.",
            category: "Sangam Age",
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
  },
  "geography-india-tamilnadu": geographyIndiaTamilNadu,
  "polity-governance": indianPolityAndGovernance,
  "economy-planning": indianEconomyAndPlanning,
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
