
import type { TnpscModule } from './exam-data-tnpsc';

export const aptitudeAndMentalAbility: TnpscModule = {
    id: "aptitude-mental-ability",
    title: "Aptitude & Mental Ability",
    titleTamil: "திறனறிவு மற்றும் மனக்கணக்கு நுண்ணறிவு",
    subject: "aptitude",
    weightage: 15,
    difficultyLevel: "Intermediate",
    
    officialSyllabusCode: "TNPSC-G1-U10",
    examPattern: {
      mcqCount: 25,
      shortAnswerCount: 0,
      essayCount: 0,
    },
    
    overview: {
      summary: "This unit is designed to test the candidate's logical, analytical, and numerical reasoning skills. It covers essential topics like logical puzzles, data interpretation from charts and tables, and fundamental numerical abilities including percentages, ratios, and time-based calculations. Mastery of this section is crucial for scoring well, as the questions are often direct and solvable with the right techniques.",
      summaryTamil: "இந்த அலகு தேர்வரின் தர்க்க, பகுப்பாய்வு மற்றும் எண் திறன்களைச் சோதிப்பதற்காக வடிவமைக்கப்பட்டுள்ளது. இது தர்க்கப் புதிர்கள், விளக்கப்படங்கள் மற்றும் அட்டவணைகளிலிருந்து தரவு விளக்கம், மற்றும் சதவீதங்கள், விகிதங்கள் மற்றும் நேரம் சார்ந்த கணக்கீடுகள் உள்ளிட்ட அடிப்படை எண் திறன்கள் போன்ற அத்தியாவசிய தலைப்புகளை உள்ளடக்கியது. சரியான நுட்பங்களுடன் கேள்விகளைத் தீர்க்க முடியும் என்பதால், இந்தப் பிரிவில் தேர்ச்சி பெறுவது நல்ல மதிப்பெண்களைப் பெறுவதற்கு முக்கியமானது.",
      contextualInfo: "While not directly related to administration, these skills are a proxy for a candidate's problem-solving and decision-making capabilities under pressure. The ability to quickly analyze data and deduce logical conclusions is a core competency for any civil servant.",
      contextualInfoTamil: "நிர்வாகத்துடன் நேரடியாகத் தொடர்பில்லாவிட்டாலும், இந்தத் திறன்கள் ஒரு தேர்வரின் சிக்கலைத் தீர்க்கும் மற்றும் அழுத்தத்தின் கீழ் முடிவெடுக்கும் திறன்களுக்கு ஒரு மாற்றாக உள்ளன. தரவை விரைவாகப் பகுப்பாய்வு செய்து தர்க்கரீதியான முடிவுகளை எடுக்கும் திறன் எந்தவொரு அரசு ஊழியருக்கும் ஒரு முக்கியத் திறமையாகும்.",
      relevanceToExam: "High relevance with a fixed weightage. Expect around 25 questions in the Prelims. These questions are often scoring opportunities if practiced well. Speed and accuracy are key.",
      lastYearQuestions: [
        "2023: Find the missing number in the series: 5, 11, 23, 47, ?",
        "2022: If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
        "2021: A train 150m long is running at a speed of 90 km/hr. Time taken by the train to cross a bridge 200m long is?"
      ]
    },
    
    sections: [
       {
        id: "logical-reasoning",
        title: "Logical & Analytical Reasoning",
        titleTamil: "தர்க்க மற்றும் பகுப்பாய்வு ரீதியான காரணம்",
        content: "## Syllogism\nSyllogism questions present two or more statements and ask for a logical conclusion. Use Venn diagrams to solve them. For example: 'All cats are animals. All tigers are cats.' The conclusion is 'All tigers are animals'.\n\n## Coding-Decoding\nThis involves deciphering a code. For example, if 'APPLE' is coded as 'BQQMF', the pattern is +1 for each letter. You would then apply the same pattern to decode or code another word.\n\n## Seating Arrangements\nThese are puzzles involving arranging people or objects in linear or circular patterns based on given conditions. Drawing a diagram and placing individuals step-by-step is the most effective method.",
        contentTamil: "## நியாயவாதம் (Syllogism)\nநியாயவாதக் கேள்விகள் இரண்டு அல்லது அதற்கு மேற்பட்ட அறிக்கைகளை அளித்து தர்க்கரீதியான முடிவைக் கேட்கும். அவற்றைத் தீர்க்க வென் வரைபடங்களைப் பயன்படுத்தவும். எடுத்துக்காட்டாக: 'அனைத்து பூனைகளும் விலங்குகள். அனைத்து புலிகளும் பூனைகள்.' முடிவு 'அனைத்து புலிகளும் விலங்குகள்'.\n\n## குறியீடாக்கம்-குறிவிலக்கம் (Coding-Decoding)\nஇது ஒரு குறியீட்டைப் புரிந்துகொள்வதை உள்ளடக்கியது. எடுத்துக்காட்டாக, 'APPLE' என்பது 'BQQMF' என்று குறியிடப்பட்டால், ஒவ்வொரு எழுத்துக்கும் +1 என்பது முறை. நீங்கள் மற்றொரு வார்த்தையைக் குறியாக்க அல்லது குறிவிலக்க அதே முறையைப் பயன்படுத்துவீர்கள்.\n\n## இருக்கை ஏற்பாடுகள்\nகொடுக்கப்பட்ட நிபந்தனைகளின் அடிப்படையில் நேரியல் அல்லது வட்ட வடிவங்களில் நபர்களை அல்லது பொருட்களை ஏற்பாடு செய்வதை உள்ளடக்கிய புதிர்கள் இவை. ஒரு வரைபடத்தை வரைந்து படிப்படியாக தனிநபர்களை வைப்பது மிகவும் பயனுள்ள முறையாகும்.",
        localContext: [],
        currentAffairs: []
      },
       {
        id: "data-interpretation",
        title: "Data Interpretation",
        titleTamil: "தரவு விளக்கம்",
        content: "## Tables\nTable-based questions require you to read data from rows and columns and perform calculations like finding totals, averages, or percentage changes.\n\n## Charts & Graphs\nThis includes Bar Charts, Pie Charts, and Line Graphs. Key skills include understanding what each axis represents, reading values accurately, and comparing data across different categories or time periods. For pie charts, remember that the total is 360 degrees, and you often need to work with percentages.",
        contentTamil: "## அட்டவணைகள்\nஅட்டவணை அடிப்படையிலான கேள்விகளுக்கு நீங்கள் வரிசைகள் மற்றும் நெடுவரிசைகளிலிருந்து தரவைப் படித்து, மொத்தங்கள், சராசரிகள் அல்லது சதவீத மாற்றங்களைக் கண்டறிதல் போன்ற கணக்கீடுகளைச் செய்ய வேண்டும்.\n\n## விளக்கப்படங்கள் மற்றும் வரைபடங்கள்\nபட்டை விளக்கப்படங்கள், பை விளக்கப்படங்கள் மற்றும் கோட்டு வரைபடங்கள் இதில் அடங்கும். ஒவ்வொரு அச்சும் எதைக் குறிக்கிறது என்பதைப் புரிந்துகொள்வது, மதிப்புகளைத் துல்லியமாகப் படிப்பது, மற்றும் வெவ்வேறு பிரிவுகள் அல்லது காலக்கட்டங்களில் தரவை ஒப்பிடுவது ஆகியவை முக்கியத் திறன்களாகும். பை விளக்கப்படங்களுக்கு, மொத்தம் 360 டிகிரி என்பதை நினைவில் கொள்ளுங்கள், மேலும் நீங்கள் பெரும்பாலும் சதவீதங்களுடன் வேலை செய்ய வேண்டியிருக்கும்.",
        localContext: [],
        currentAffairs: []
      },
      {
        id: "numerical-ability",
        title: "Basic Numerical Ability",
        titleTamil: "அடிப்படை எண் திறன்",
        content: "## Percentages, Ratios, Averages\nThese are the building blocks of quantitative aptitude. **Percentage** questions often involve calculating discounts, profits, or changes. **Ratio and Proportion** are used for comparison and distribution problems. **Average** is simply the sum of all items divided by the number of items.\n\n## Time, Speed, and Distance\nThe core formula is **Distance = Speed × Time**. Be careful with units (km/hr vs. m/s). Problems often involve relative speed (objects moving in the same or opposite directions) or boats and streams.",
        contentTamil: "## சதவீதங்கள், விகிதங்கள், சராசரிகள்\nஇவை அளவுசார் திறனறிவின் அடிப்படைக் கூறுகளாகும். **சதவீத** கேள்விகள் பெரும்பாலும் தள்ளுபடிகள், இலாபங்கள் அல்லது மாற்றங்களைக் கணக்கிடுவதை உள்ளடக்கியது. **விகிதம் மற்றும் விகிதாச்சாரம்** ஒப்பீடு மற்றும் விநியோகச் சிக்கல்களுக்குப் பயன்படுத்தப்படுகின்றன. **சராசரி** என்பது அனைத்து பொருட்களின் கூட்டுத்தொகையை பொருட்களின் எண்ணிக்கையால் வகுப்பதாகும்.\n\n## நேரம், வேகம் மற்றும் தூரம்\nமுக்கிய சூத்திரம் **தூரம் = வேகம் × நேரம்**. அலகுகளில் (கிமீ/மணி vs மீ/வி) கவனமாக இருங்கள். சிக்கல்கள் பெரும்பாலும் சார்பு வேகம் (ஒரே அல்லது எதிர் திசைகளில் நகரும் பொருள்கள்) அல்லது படகுகள் மற்றும் நீரோடைகளை உள்ளடக்கியது.",
        localContext: [],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["Syllogism", "Venn Diagram", "Coding-Decoding", "Seating Arrangement", "Data Interpretation", "Percentage", "Ratio", "Average", "Time and Work", "Simple Interest", "Compound Interest"],
      importantFigures: [],
      significantEvents: []
    },
    
    practice: {
      mcqs: [
        {
          question: "If in a certain language, 'MADRAS' is coded as 'NBESBT', how is 'BOMBAY' coded in that code?",
          questionTamil: "ஒரு குறிப்பிட்ட மொழியில், 'MADRAS' என்பது 'NBESBT' என்று குறியிடப்பட்டால், அந்த குறியீட்டில் 'BOMBAY' எவ்வாறு குறியிடப்படும்?",
          options: ["CPNCBX", "CPNCBZ", "CPOCBZ", "CQOCBZ"],
          optionsTamil: ["CPNCBX", "CPNCBZ", "CPOCBZ", "CQOCBZ"],
          correct: 1,
          explanation: "Each letter in the word is moved one step forward to obtain the corresponding letter of the code. M+1=N, A+1=B, D+1=E, R+1=S, A+1=B, S+1=T. Similarly, for BOMBAY: B+1=C, O+1=P, M+1=N, B+1=C, A+1=B, Y+1=Z. So the code is CPNCBZ.",
          explanationTamil: "வார்த்தையில் உள்ள ஒவ்வொரு எழுத்தும் குறியீட்டின் தொடர்புடைய எழுத்தைப் பெற ஒரு படி முன்னோக்கி நகர்த்தப்படுகிறது. M+1=N, A+1=B, D+1=E, R+1=S, A+1=B, S+1=T. இதேபோல், BOMBAY க்கு: B+1=C, O+1=P, M+1=N, B+1=C, A+1=B, Y+1=Z. எனவே குறியீடு CPNCBZ ஆகும்.",
          yearAsked: [2022],
          difficulty: "Easy",
          tnpscFrequency: 4,
          context: "logical-reasoning"
        },
        {
            question: "A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. The man's speed against the current is:",
            questionTamil: "நீரோட்டத்துடன் ஒரு மனிதனின் வேகம் 15 கிமீ/மணி மற்றும் நீரோட்டத்தின் வேகம் 2.5 கிமீ/மணி. நீரோட்டத்திற்கு எதிராக மனிதனின் வேகம்:",
            options: ["8.5 km/hr", "9 km/hr", "10 km/hr", "12.5 km/hr"],
            optionsTamil: ["8.5 கிமீ/மணி", "9 கிமீ/மணி", "10 கிமீ/மணி", "12.5 கிமீ/மணி"],
            correct: 2,
            explanation: "Man's speed in still water = (Speed with current - Speed of current) = (15 - 2.5) km/hr = 12.5 km/hr. Man's speed against the current = (Man's speed in still water - Speed of current) = (12.5 - 2.5) km/hr = 10 km/hr.",
            explanationTamil: "நிலையான நீரில் மனிதனின் வேகம் = (நீரோட்டத்துடன் வேகம் - நீரோட்டத்தின் வேகம்) = (15 - 2.5) கிமீ/மணி = 12.5 கிமீ/மணி. நீரோட்டத்திற்கு எதிராக மனிதனின் வேகம் = (நிலையான நீரில் மனிதனின் வேகம் - நீரோட்டத்தின் வேகம்) = (12.5 - 2.5) கிமீ/மணி = 10 கிமீ/மணி.",
            yearAsked: [2021],
            difficulty: "Medium",
            tnpscFrequency: 4,
            context: "numerical-ability"
        }
      ],
      shortAnswer: [],
      essay: []
    },
    
    engagement: { 
      peerTeaching: [
          {
              topic: "Time & Work Shortcuts",
              duration: 120,
              criteria: ["Explain the LCM method", "Solve one example problem", "Compare it with the traditional unitary method"],
              prompt: "In 2 minutes, explain the LCM method for solving 'Time and Work' problems to a friend. Demonstrate with an example like: 'A can do a work in 10 days and B in 15 days. In how many days can they do it together?'. Explain why this is faster.",
              promptTamil: "2 நிமிடங்களில், 'நேரம் மற்றும் வேலை' கணக்குகளைத் தீர்க்க LCM முறையை ஒரு நண்பருக்கு விளக்கவும். எடுத்துக்காட்டாக: 'A ஒரு வேலையை 10 நாட்களிலும் B 15 நாட்களிலும் செய்ய முடியும். அவர்கள் இருவரும் சேர்ந்து அதை எத்தனை நாட்களில் செய்வார்கள்?' என்பது போன்ற ஒரு எடுத்துக்காட்டுடன் விளக்கிக் காட்டுங்கள். இது ஏன் வேகமானது என்பதை விளக்கவும்."
          }
      ],
      practicalActivities: [
          {
              title: "Daily Data Interpretation Challenge",
              type: "Data Analysis",
              description: "Analyze a chart/graph from a daily newspaper (like The Hindu's data point section).",
              activities: [
                  "Find a pie chart or bar graph in today's newspaper or a reliable online source.",
                  "Write down three main conclusions you can draw from the data.",
                  "Formulate one TNPSC-style MCQ based on the chart.",
                  "Calculate a percentage change or an average from the data presented."
              ],
              outputs: ["A summary of conclusions.", "A self-made MCQ with options and answer.", "The calculation you performed."],
              assessment: ["Clarity of conclusions.", "Relevance of the MCQ.", "Accuracy of the calculation."]
          }
      ]
    },
    
    spacedRepetition: {
      flashcards: [
        {
          front: "Formula for Speed",
          frontTamil: "வேகத்திற்கான சூத்திரம்",
          back: "Speed = Distance / Time",
          backTamil: "வேகம் = தூரம் / நேரம்",
          category: "Numerical Ability",
          difficulty: 1
        },
        {
          front: "Syllogism: All A are B. All B are C.",
          frontTamil: "நியாயவாதம்: அனைத்து Aயும் B. அனைத்து Bயும் C.",
          back: "Conclusion: All A are C.",
          backTamil: "முடிவு: அனைத்து Aயும் C.",
          category: "Logical Reasoning",
          difficulty: 2
        }
      ],
      intervals: { day1: [], day7: [], day30: [] }
    },
    
    analytics: {
      commonMistakes: ["Unit conversion errors in Time-Speed-Distance problems (km/hr to m/s).", "Incorrectly interpreting Venn diagrams for syllogisms with 'some' and 'no' statements."],
      timeAllocation: [],
      strengthIndicators: [],
      improvementAreas: ["Practicing complex seating arrangement puzzles.", "Improving calculation speed for data interpretation."],
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal", "Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal"],
        websites: ["indiabix.com", "examveda.com"],
        officialSources: ["Previous years' TNPSC question papers"]
      },
      nextModule: ""
    }
  };
