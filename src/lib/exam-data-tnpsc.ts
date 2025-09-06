
import type { ExamModule as OldExamModule } from './types'; // Keep old type for existing data

// New, comprehensive data structure for TNPSC
export interface TnpscModule {
  id: string
  title: string
  titleTamil: string
  subject: string
  weightage: number
  difficultyLevel: 'Foundation' | 'Intermediate' | 'Advanced'
  
  officialSyllabusCode: string
  examPattern: {
    mcqCount: number
    shortAnswerCount: number
    essayCount: number
    practicalCount?: number
  }
  
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
    localContext: string[]
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
  
  specificData: {
    keyTerms: string[]
    importantFigures: string[]
    significantEvents: string[]
    relevantLaws?: string[]
    institutions?: string[]
  }
  
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
  
  analytics: {
    commonMistakes: string[]
    timeAllocation: { section: string; minutes: number }[]
    strengthIndicators: string[]
    improvementAreas: string[]
  }
  
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
  "unit-8": {
    id: "unit-8",
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
      contextualInfoTamil: "இந்த அலகு TNPSC குரூப் 1, 2, மற்றும் 4 தேர்வுகளில் ஒரு குறிப்பிடத்தக்க பகுதியாக இருப்பதால், இதைப் புரிந்துகொள்வது முக்கியம். ఇది రాష్ట్రం యొక్క ప్రత్యేక వారసత్వത്തിന് ప్రాముఖ్యత ఇస్తుంది.",
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
      }
    ],
    
    specificData: {
      keyTerms: ["Sangam", "Thinai", "Agam", "Puram", "Tirukkural"],
      importantFigures: ["Thiruvalluvar", "Avvaiyar", "Tholkappiyar"],
      significantEvents: ["First, Second, and Third Sangam", "Kalabhra interregnum"],
      relevantLaws: [],
      institutions: ["Tamil Nadu Archaeological Department", "Central Institute of Classical Tamil"]
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
          explanationTamil: "திருக்குறள், சிலப்பதிகாரம், மற்றும் தொல்காப்பியம் ஆகிய மூன்றும் சங்க இலக்கியத்தின் மூலக்கற்களாகும், அவை அக்கால समाज, व्याकरणம், மற்றும் அறநெறிகள் பற்றிய பார்வைகளை வழங்குகின்றன. தொல்காப்பியம் பழமையானது, ஆனால் அனைத்தும் முதன்மை ஆதாரங்களே.",
          yearAsked: [2022],
          difficulty: "Medium",
          context: "This tests the knowledge of foundational Sangam texts."
        }
      ],
      shortAnswer: [],
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
        }
      ],
      intervals: {
        day1: ["Key Terms"],
        day7: ["Important Figures"],
        day30: ["Concepts like Thinai"]
      }
    },
    
    analytics: {
      commonMistakes: ["Confusing the timelines of the Chera, Chola, and Pandya dynasties during the Sangam period."],
      timeAllocation: [{ section: "Sangam Age", minutes: 60 }],
      strengthIndicators: ["Good recall of literary works."],
      improvementAreas: ["Connecting archaeological evidence with literary sources."]
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["A Social History of the Tamils by K.K. Pillay", "Tamil Nadu State Board History textbooks"],
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
