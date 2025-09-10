
import type { TnpscModule } from './exam-data-tnpsc';

export const languagePapersModule: TnpscModule = {
    id: "language-papers",
    title: "Language Papers (Tamil & English)",
    titleTamil: "மொழித் தாள்கள் (தமிழ் & ஆங்கிலம்)",
    subject: "language",
    weightage: 30, // Qualifying but mandatory
    difficultyLevel: "Advanced",
    
    officialSyllabusCode: "TNPSC-G1-Paper-I&II",
    examPattern: {
      mcqCount: 100, // For Tamil Eligibility
      shortAnswerCount: 0,
      essayCount: 2, // For General English
    },
    
    overview: {
      summary: "This unit covers the two crucial language papers in TNPSC Group I Mains: the mandatory Tamil Eligibility Test and the General English paper. The Tamil paper tests proficiency in grammar, literature, and comprehension up to the SSLC standard and is qualifying in nature. The General English paper assesses a candidate's ability to understand and express ideas clearly and correctly in English through comprehension, précis writing, and vocabulary.",
      summaryTamil: "இந்த அலகு TNPSC குரூப் I முதன்மைத் தேர்வில் உள்ள இரண்டு முக்கிய மொழித் தாள்களை உள்ளடக்கியது: கட்டாயத் தமிழ் மொழித் தகுதித் தேர்வு மற்றும் பொது ஆங்கிலத் தாள். தமிழ்த் தாள் SSLC தரம் வரையிலான இலக்கணம், இலக்கியம் மற்றும் புரிந்துகொள்ளும் திறனைச் சோதிக்கிறது மற்றும் இது தகுதித் தேர்வாகும். பொது ஆங்கிலத் தாள், புரிந்துகொள்ளுதல், சுருக்கி வரைதல் மற்றும் சொல்லகராதி மூலம் ஆங்கிலத்தில் கருத்துக்களைத் தெளிவாகவும் சரியாகவும் வெளிப்படுத்தும் திறனை மதிப்பிடுகிறது.",
      contextualInfo: "Strong language and communication skills are fundamental for an administrator to understand government orders, draft clear communications, and interact effectively with the public. While one is qualifying, excellence in both is a hallmark of a good officer.",
      contextualInfoTamil: "அரசாணைகளைப் புரிந்துகொள்வதற்கும், தெளிவான தகவல்களை உருவாக்குவதற்கும், பொதுமக்களுடன் திறம்படத் தொடர்புகொள்வதற்கும் ஒரு நிர்வாகிக்கு வலுவான மொழி மற்றும் தகவல்தொடர்பு திறன்கள் அடிப்படையானவை. ஒன்று தகுதித் தேர்வாக இருந்தாலும், இரண்டிலும் சிறந்து விளங்குவது ஒரு நல்ல அதிகாரியின் அடையாளமாகும்.",
      relevanceToExam: "The Tamil paper is mandatory and qualifying. Failure to secure minimum marks (40%) will result in other papers not being evaluated. The English paper score is counted towards the final ranking, making it critical for success.",
      lastYearQuestions: [
        "2022 Tamil: திருக்குறளின் மதச்சார்பற்ற தன்மையை விளக்குக. (Explain the secular nature of Tirukkural)",
        "2022 English: Write a précis of the given passage and give it a suitable title.",
        "2022 English: Correct the grammatical errors in the given sentences."
      ]
    },
    
    sections: [
       {
        id: "tamil-eligibility",
        title: "Tamil Eligibility Test",
        titleTamil: "கட்டாயத் தமிழ் மொழித் தகுதித் தேர்வு",
        content: "## இலக்கணம் (Grammar)\nThis section focuses on key areas of Tamil grammar. Topics include: **வல்லினம் மிகுமிடங்கள், மிகா இடங்கள்** (Rules for hard consonant addition), **பிரித்தெழுதுக** (Splitting words), **சேர்த்தெழுதுக** (Joining words), **எதிர்ச்சொல்** (Antonyms), **பொருந்தாச் சொல்லைக் கண்டறிதல்** (Finding the odd one out), and **பிழை திருத்தம்** (Error correction).\n\n## இலக்கியம் (Literature)\nKnowledge of significant Tamil literary works and authors is tested. This includes **திருக்குறள்**, **சங்க இலக்கியம்** (Ettuthokai, Pathuppattu), **ஐம்பெருங்காப்பியங்கள்** (Five Great Epics like Silappathikaram), and works of modern poets like **பாரதியார்** and **பாரதிதாசன்**.\n\n## தமிழ் அறிஞர்களும் தமிழ்த்தொண்டும்\nThis part covers the contributions of Tamil scholars to the language and society. Understanding the work of figures like **பெரியார்**, **அண்ணா**, and **மறைமலையடிகள்** is crucial.",
        contentTamil: "## இலக்கணம்\nஇந்தப் பகுதி தமிழ் இலக்கணத்தின் முக்கியப் பகுதிகளில் கவனம் செலுத்துகிறது. தலைப்புகள்: **வல்லினம் மிகுமிடங்கள், மிகா இடங்கள்**, **பிரித்தெழுதுக**, **சேர்த்தெழுதுக**, **எதிர்ச்சொல்**, **பொருந்தாச் சொல்லைக் கண்டறிதல்**, மற்றும் **பிழை திருத்தம்** ஆகியவை அடங்கும்.\n\n## இலக்கியம்\nமுக்கியமான தமிழ் இலக்கியப் படைப்புகள் மற்றும் ஆசிரியர்கள் பற்றிய அறிவு சோதிக்கப்படுகிறது. இதில் **திருக்குறள்**, **சங்க இலக்கியம்** (எட்டுத்தொகை, பத்துப்பாட்டு), **ஐம்பெருங்காப்பியங்கள்** (சிலப்பதிகாரம் போன்றவை), மற்றும் **பாரதியார்**, **பாரதிதாசன்** போன்ற நவீன கவிஞர்களின் படைப்புகள் அடங்கும்.\n\n## தமிழ் அறிஞர்களும் தமிழ்த்தொண்டும்\nமொழிக்கும் சமூகத்திற்கும் தமிழ் அறிஞர்களின் பங்களிப்புகளை இந்தப் பகுதி உள்ளடக்கியது. **பெரியார்**, **அண்ணா**, மற்றும் **மறைமலையடிகள்** போன்றவர்களின் பணிகளைப் புரிந்துகொள்வது முக்கியம்.",
        localContext: [],
        currentAffairs: []
      },
       {
        id: "general-english",
        title: "General English",
        titleTamil: "பொது ஆங்கிலம்",
        content: "## Comprehension\nThe ability to read and understand a given passage and answer questions based on it. This tests vocabulary, inference skills, and attention to detail.\n\n## Précis Writing\nThis involves summarizing a long passage into a shorter one (usually one-third of the original length) while retaining its essential meaning. A suitable title must also be provided. It tests your ability to identify the core message and express it concisely.\n\n## Vocabulary and Grammar\nThis includes synonyms, antonyms, sentence correction (error-spotting), filling in the blanks with appropriate words, and understanding idioms and phrases.",
        contentTamil: "## Comprehension\nஒரு பத்தியைப் படித்துப் புரிந்துகொண்டு, அதன் அடிப்படையில் கேள்விகளுக்கு பதிலளிக்கும் திறன். இது சொல்லகராதி, அனுமானத் திறன் மற்றும் விவரங்களில் கவனம் ஆகியவற்றைச் சோதிக்கிறது.\n\n## Précis Writing\nஒரு நீண்ட பத்தியின் முக்கியப் பொருளைத் தக்கவைத்துக்கொண்டு அதைச் சுருக்கமாக (பொதுவாக அசல் நீளத்தில் மூன்றில் ஒரு பங்கு) எழுதுவதை இது உள்ளடக்கியது. பொருத்தமான தலைப்பும் வழங்கப்பட வேண்டும். இது முக்கிய செய்தியைக் கண்டறிந்து சுருக்கமாக வெளிப்படுத்தும் உங்கள் திறனைச் சோதிக்கிறது.\n\n## Vocabulary and Grammar\nஇதில் ஒத்த சொற்கள், எதிர்ச்சொற்கள், வாக்கியத் திருத்தம் (பிழை கண்டறிதல்), பொருத்தமான சொற்களைக் கொண்டு வெற்றிடங்களை நிரப்புதல் மற்றும் மரபுத்தொடர்கள் மற்றும் சொற்றொடர்களைப் புரிந்துகொள்ளுதல் ஆகியவை அடங்கும்.",
        localContext: [],
        currentAffairs: []
      }
    ],
    
    specificData: {
      keyTerms: ["வல்லினம்", "எழுவாய்", "பயனிலை", "Synonym", "Antonym", "Précis", "Comprehension", "Error Spotting"],
      importantFigures: ["Thiruvalluvar", "Bharathiyar", "Periyar E.V.R", "C.N. Annadurai"],
      significantEvents: []
    },
    
    practice: {
      mcqs: [
        {
          question: "'மரக்கலம்' - இச்சொல்லைப் பிரித்து எழுதக் கிடைப்பது",
          questionTamil: "'மரக்கலம்' - இச்சொல்லைப் பிரித்து எழுதக் கிடைப்பது",
          options: ["மரம் + கலம்", "மர + கலம்", "மரக் + கலம்", "மரக + கலம்"],
          optionsTamil: ["மரம் + கலம்", "மர + கலம்", "மரக் + கலம்", "மரக + கலம்"],
          correct: 0,
          explanation: "நிலைமொழி ஈற்றில் 'ம்' இருந்து, வருமொழி முதலில் க,ச,த,ப வந்தால், 'ம்' கெட்டு, அதற்கு இனமான வல்லின மெய் மிகும். இங்கு 'ம்' கெட்டு 'க்' மிகும். ஆனால், புணர்ச்சி விதிப்படி சரியான பிரிப்பு முறை 'மரம் + கலம்' ஆகும்.",
          explanationTamil: "நிலைமொழி ஈற்றில் 'ம்' இருந்து, வருமொழி முதலில் க,ச,த,ப வந்தால், 'ம்' கெட்டு, அதற்கு இனமான வல்லின மெய் மிகும். இங்கு 'ம்' கெட்டு 'க்' மிகும். ஆனால், புணர்ச்சி விதிப்படி சரியான பிரிப்பு முறை 'மரம் + கலம்' ஆகும்.",
          yearAsked: [2022, 2018],
          difficulty: "Medium",
          tnpscFrequency: 4,
          context: "tamil-eligibility"
        },
        {
            question: "Choose the correct antonym for the word 'EXPAND'.",
            questionTamil: "'EXPAND' என்ற சொல்லின் சரியான எதிர்ச்சொல்லைத் தேர்ந்தெடுக்கவும்.",
            options: ["Enlarge", "Widen", "Compress", "Stretch"],
            optionsTamil: ["பெரிதாக்கு", "அகலப்படுத்து", "அமுக்கு", "நீட்டு"],
            correct: 2,
            explanation: "Expand means to become or make larger or more extensive. Compress means to flatten by pressure; squeeze or press. Therefore, Compress is the antonym of Expand.",
            explanationTamil: "Expand என்றால் பெரிதாகுதல் அல்லது விரிவடைதல். Compress என்றால் அழுத்தத்தால் தட்டையாக்குதல்; பிழிதல் அல்லது அழுத்துதல். எனவே, Compress என்பது Expand என்பதன் எதிர்ச்சொல் ஆகும்.",
            yearAsked: [2022, 2019],
            difficulty: "Easy",
            tnpscFrequency: 3,
            context: "general-english"
        }
      ],
      shortAnswer: [],
      essay: []
    },
    
    engagement: {
      peerTeaching: [
        {
          topic: "Thirukkural's Secularism",
          duration: 120,
          criteria: ["Explain what secularism means in this context", "Give at least two examples from the Kural", "Conclude why it's considered universally applicable"],
          prompt: "In 2 minutes, explain to a study partner why Thirukkural is considered a secular text. Use examples to show how its teachings apply to all of humanity, irrespective of religion or culture.",
          promptTamil: "2 நிமிடங்களில், திருக்குறள் ஏன் ஒரு மதச்சார்பற்ற நூலாகக் கருதப்படுகிறது என்பதை ஒரு படிப்புத் தோழருக்கு விளக்கவும். அதன் போதனைகள் மதம் அல்லது கலாச்சாரத்தைப் பொருட்படுத்தாமல் அனைத்து மனிதகுலத்திற்கும் எவ்வாறு பொருந்தும் என்பதைக் காட்ட எடுத்துக்காட்டுகளைப் பயன்படுத்தவும்."
        }
      ],
      practicalActivities: [
        {
          title: "Précis Writing Practice",
          type: "Writing Skill",
          description: "Practice summarizing a newspaper editorial into one-third of its original length.",
          activities: [
            "Select an editorial of about 300 words from The Hindu or The Indian Express.",
            "Read it carefully to identify the main argument and supporting points.",
            "Write a rough draft of the summary.",
            "Edit the draft to bring it down to approximately 100 words, ensuring it is coherent and captures the essence of the original.",
            "Give your précis a suitable title."
          ],
          outputs: ["A précis of the selected editorial.", "A suitable title for the précis."],
          assessment: ["Clarity and conciseness.", "Inclusion of all essential points.", "Adherence to the word limit."]
        }
      ]
    },
    
    spacedRepetition: {
      flashcards: [
        {
          front: "Vallinam Migum Idangal",
          frontTamil: "வல்லினம் மிகுமிடங்கள்",
          back: "Places where the hard consonants (க்,ச்,ட்,த்,ப்,ற்) are added between two words. Example: 'பூ + கூடை' becomes 'பூக்கூடை'.",
          backTamil: "இரண்டு சொற்களுக்கு இடையில் வல்லின மெய்யெழுத்துக்கள் (க்,ச்,ட்,த்,ப்,ற்) சேர்க்கப்படும் இடங்கள். எடுத்துக்காட்டு: 'பூ + கூடை' என்பது 'பூக்கூடை' ஆகும்.",
          category: "Tamil Grammar",
          difficulty: 3
        },
        {
          front: "Précis Writing",
          frontTamil: "சுருக்கி வரைதல்",
          back: "Condensing a passage to one-third of its original length while preserving the core message and providing a suitable title.",
          backTamil: "ஒரு பத்தியின் முக்கிய செய்தியைப் பாதுகாத்துக்கொண்டு அதன் அசல் நீளத்தில் மூன்றில் ஒரு பங்காக சுருக்குதல் மற்றும் பொருத்தமான தலைப்பை வழங்குதல்.",
          category: "English Skill",
          difficulty: 2
        }
      ],
      intervals: { day1: [], day7: [], day30: [] }
    },
    
    analytics: {
      commonMistakes: ["Incorrect application of 'Vallinam' rules.", "Failing to identify the central theme in a précis passage.", "Grammatical errors (tense, subject-verb agreement) in the English paper."],
      timeAllocation: [],
      strengthIndicators: [],
      improvementAreas: ["Daily reading of Tamil and English newspapers.", "Practicing précis writing with a timer.", "Revising high school level Tamil grammar rules."],
      mnemonics: [
        {
          text: "To remember Tamil hard consonants (வல்லினம்), think of a tough phrase: 'கசடதபற' (Ka-Sa-Da-Tha-Pa-Ra).",
          tamil: "தமிழ் வல்லின மெய்யெழுத்துக்களை நினைவில் கொள்ள, 'கசடதபற' என்ற கடினமான சொற்றொடரை நினையுங்கள்."
        },
        {
          text: "For English précis writing, remember the 'KISS' principle: Keep It Short and Simple.",
          tamil: "ஆங்கிலத்தில் சுருக்கி வரைவதற்கு, 'KISS' கோட்பாட்டை நினைவில் கொள்க: Keep It Short and Simple (சுருக்கமாகவும் எளிமையாகவும் வைக்கவும்)."
        }
      ],
      neetTips: [
        {
          text: "For the Tamil paper, focus heavily on grammar rules from the Samacheer Kalvi books (6th-10th). Most questions come directly from there.",
          tamil: "தமிழ்த் தாளுக்கு, சமச்சீர் கல்வி புத்தகங்களில் (6-10 ஆம் வகுப்பு) உள்ள இலக்கண விதிகளில் அதிக கவனம் செலுத்துங்கள். பெரும்பாலான கேள்விகள் நேரடியாக அங்கிருந்து வருகின்றன."
        },
        {
          text: "In the English paper, time management is key for précis and comprehension. Allocate a fixed time for each and stick to it.",
          tamil: "ஆங்கிலத் தாளில், சுருக்கி வரைதல் மற்றும் புரிந்துகொள்ளுதலுக்கு நேர மேலாண்மை முக்கியம். ஒவ்வொன்றிற்கும் ஒரு குறிப்பிட்ட நேரத்தை ஒதுக்கி, அதைக் கடைப்பிடிக்கவும்."
        }
      ]
    },
    
    resources: {
      offlineContent: { videos: [], pdfs: [], diagrams: [] },
      references: {
        books: ["Tholkappiyam", "Nannool", "Wren & Martin's High School English Grammar and Composition"],
        websites: ["Official TNPSC website for previous year papers"],
        officialSources: ["Tamil Nadu State Board textbooks (6th to 12th)"]
      },
      nextModule: ""
    }
  };
