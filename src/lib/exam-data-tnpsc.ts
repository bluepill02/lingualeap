
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
      summary: "This unit covers the rich history of Tamil society, from ancient times to the modern era, including the Sangam period, the role of Tamil Nadu in the freedom struggle, and the evolution of socio-political movements.",
      summaryTamil: "இந்த அலகு தமிழ் சமூகத்தின் வளமான வரலாற்றை, பண்டைய காலம் முதல் நவீன காலம் வரை உள்ளடக்கியது, இதில் சங்க காலம், சுதந்திரப் போராட்டத்தில் தமிழ்நாட்டின் பங்கு மற்றும் சமூக-அரசியல் இயக்கங்களின் பரிணாமம் ஆகியவை அடங்கும்.",
      contextualInfo: "Understanding this unit is crucial as it forms a significant portion of the TNPSC Group 1, 2, and 4 exams, reflecting the state's emphasis on its unique heritage.",
      contextualInfoTamil: "இந்த அலகு TNPSC குரூப் 1, 2, மற்றும் 4 தேர்வுகளில் ஒரு குறிப்பிடத்தக்க பகுதியாக இருப்பதால், இதைப் புரிந்துகொள்வது முக்கியம். இது மாநிலத்தின் தனித்துவமான பாரம்பரியத்திற்கு முக்கியத்துவம் அளிக்கிறது.",
      relevanceToExam: "Extremely high importance; approximately 30-40 questions can be expected from this unit in the prelims.",
      lastYearQuestions: [
        "2023: Explain the role of the Justice Party in the social reformation of Tamil Nadu.",
        "2022: Describe the archaeological findings at Keeladi and their significance.",
        "2021: Who authored the Tirukkural and what are its main teachings?"
      ]
    },
    
    sections: [
      {
        id: "sangam-age",
        title: "Sangam Age",
        titleTamil: "சங்க காலம்",
        content: "## Sangam Literature\n\nThe Sangam period is the period of history of ancient Tamil Nadu, Kerala and parts of Sri Lanka spanning from c. 6th century BCE to c. 3rd century CE. It was named after the famous Sangam academies of poets and scholars centered in the city of Madurai.",
        contentTamil: "## சங்க இலக்கியம்\n\nசங்க காலம் என்பது பண்டைய தமிழ்நாடு, கேரளா மற்றும் இலங்கையின் சில பகுதிகளை உள்ளடக்கிய வரலாற்றுக் காலமாகும், இது கி.மு. 6 ஆம் நூற்றாண்டு முதல் கி.பி. 3 ஆம் நூற்றாண்டு வரை பரவியுள்ளது. இது மதுரையை மையமாகக் கொண்ட புகழ்பெற்ற சங்கப் புலவர் மற்றும் அறிஞர் அவைகளின் பெயரால் அழைக்கப்படுகிறது.",
        localContext: [
          "Archaeological sites like Keeladi, Adichanallur provide physical evidence for this period.",
          "The concepts of 'Thinai' (landscapes) are unique to Sangam poetry."
        ],
        currentAffairs: [
          {
            year: 2024,
            topic: "Recent Keeladi findings",
            relevance: "High probability of questions based on new archaeological discoveries."
          }
        ]
      },
      {
        id: "justice-party",
        title: "Justice Party and Self-Respect Movement",
        titleTamil: "நீதிக் கட்சி மற்றும் சுயமரியாதை இயக்கம்",
        content: "## Social Reformation\n\nThe Justice Party, officially the South Indian Liberal Federation, was a political party in the Madras Presidency of British India. It was the first backward class mobilization which created social and political awareness among the non-brahmin people of south India. The Self-Respect Movement, led by E.V. Ramasamy (Periyar), was a movement with the aim of achieving a society where backward castes have equal human rights.",
        contentTamil: "## சமூக சீர்திருத்தம்\n\nநீதிக் கட்சி, அதிகாரப்பூர்வமாக தென்னிந்திய தாராளவாதக் கூட்டமைப்பு, பிரிட்டிஷ் இந்தியாவின் மெட்ராஸ் பிரசிடென்சியில் ஒரு அரசியல் கட்சியாகும். இது தென்னிந்தியாவின் பிராமணர் அல்லாத மக்களிடையே சமூக மற்றும் அரசியல் விழிப்புணர்வை உருவாக்கிய முதல் பின்தங்கிய வகுப்பு அணிதிரட்டலாகும். ஈ.வெ. ராமசாமி (பெரியார்) தலைமையிலான சுயமரியாதை இயக்கம், பின்தங்கிய சாதியினருக்கு சமமான மனித உரிமைகள் உள்ள ஒரு சமூகத்தை அடையும் நோக்கத்துடன் ஒரு இயக்கமாக இருந்தது.",
        localContext: [
          "The reservation policy in Tamil Nadu is a direct outcome of these movements.",
          "Statues and memorials for Periyar are common across Tamil Nadu."
        ],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["Sangam", "Thinai", "Agam", "Puram", "Tirukkural", "Justice Party", "Self-Respect Movement", "Dravidian Movement"],
      importantFigures: ["Thiruvalluvar", "Periyar E.V. Ramasamy", "C.N. Annadurai", "Kamarajar"],
      significantEvents: ["First, Second, and Third Sangam", "Vaikom Satyagraha", "Anti-Hindi Agitations"],
      relevantLaws: ["Communal G.O. of 1921"],
      institutions: ["Tamil Nadu Archaeological Department", "Central Institute of Classical Tamil", "Periyar Memorial Museum"]
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
