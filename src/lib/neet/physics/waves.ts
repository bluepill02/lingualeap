
import type { NeetModule } from '../../types';

export const wavesModule: NeetModule = {
  id: 'neet-physics-waves',
  title: 'Waves',
  chapter: '15',
  subject: 'Physics',
  learningObjectives: [
    'Understand the properties of transverse and longitudinal waves.',
    'Analyze the superposition of waves and the phenomena of interference and beats.',
    'Explain the formation of stationary waves and the concept of resonance.',
    "Apply the Doppler effect formula to various scenarios involving moving sources and observers.",
  ],
  prerequisites: [
    'Simple Harmonic Motion (from Oscillations chapter)',
    'Basic Calculus',
    'Energy and Momentum concepts',
    'Differential Equations (Basics)',
  ],
  conceptNotes: [
    {
        heading: {
            english: "Wave Motion",
            tamil: "அலை இயக்கம்"
        },
        content: [
            {
                english: "A wave is a disturbance that transfers energy through matter or space, with little or no associated mass transport. Waves consist of oscillations or vibrations of a physical medium or a field, around relatively fixed locations.",
                tamil: "அலை என்பது ஒரு இடையூறு ஆகும், இது பொருள் அல்லது விண்வெளியின் வழியாக ஆற்றலை மாற்றுகிறது, அதனுடன் சிறிதளவு அல்லது நிறை போக்குவரத்து இல்லாமல். அலைகள் ஒரு பௌதீக ஊடகம் அல்லது ஒரு புலத்தின் அலைவுகள் அல்லது அதிர்வுகளைக் கொண்டிருக்கும், ஒப்பீட்டளவில் நிலையான இடங்களைச் சுற்றி."
            },
            {
                english: "**Transverse Waves:** The particles of the medium oscillate perpendicular to the direction of wave propagation. Examples: Light waves, waves on a string.",
                tamil: "**குறுக்கலைகள்:** ஊடகத்தின் துகள்கள் அலை பரவும் திசைக்கு செங்குத்தாக அலைகின்றன. எடுத்துக்காட்டுகள்: ஒளி அலைகள், ஒரு கம்பியில் அலைகள்."
            },
            {
                english: "**Longitudinal Waves:** The particles of the medium oscillate parallel to the direction of wave propagation. They consist of compressions and rarefactions. Example: Sound waves.",
                tamil: "**நெட்டலைகள்:** ஊடகத்தின் துகள்கள் அலை பரவும் திசைக்கு இணையாக அலைகின்றன. அவை இறுக்கங்கள் மற்றும் தளர்வுகளைக் கொண்டிருக்கும். எடுத்துக்காட்டு: ஒலி அலைகள்."
            },
            {
                english: "The general equation for a progressive wave is given by: `y(x, t) = A sin(kx - ωt + φ)` where A is amplitude, k is the wave number (2π/λ), ω is the angular frequency (2πf), and φ is the phase constant.",
                tamil: "ஒரு முன்னேறு அலையின் பொதுவான சமன்பாடு: `y(x, t) = A sin(kx - ωt + φ)` இதில் A என்பது வீச்சு, k என்பது அலை எண் (2π/λ), ω என்பது கோண அதிர்வெண் (2πf), மற்றும் φ என்பது கட்ட மாறிலி."
            },
        ]
    },
    {
        heading: {
            english: "Superposition and Interference",
            tamil: "மேற்பொருந்துதல் மற்றும் குறுக்கீட்டு விளைவு"
        },
        content: [
             {
                english: "The principle of superposition states that when two or more waves overlap, the resultant displacement at any point and at any instant is the vector sum of the displacements that each wave would produce individually. `y_total = y₁ + y₂`.",
                tamil: "மேற்பொருந்துதல் தத்துவத்தின்படி, இரண்டு அல்லது அதற்கு மேற்பட்ட அலைகள் ஒன்றன்மேல் ஒன்று பொருந்தும்போது, எந்தவொரு புள்ளியிலும் மற்றும் எந்தவொரு நேரத்திலும் ஏற்படும் விளைவு இடப்பெயர்ச்சி, ஒவ்வொரு அலையும் தனித்தனியாக உருவாக்கும் இடப்பெயர்ச்சிகளின் திசையன் கூடுதலுக்குச் சமம். `y_total = y₁ + y₂`."
            },
            {
                english: "**Constructive Interference:** Occurs when waves are in phase. The amplitudes add up, resulting in a wave of greater amplitude. Path difference is `nλ`.",
                tamil: "**ஆக்கக் குறுக்கீட்டு விளைவு:** அலைகள் ஒரே கட்டத்தில் இருக்கும்போது ஏற்படுகிறது. வீச்சுகள் கூடி, அதிக வீச்சு கொண்ட அலை உருவாகிறது. பாதை வேறுபாடு `nλ`."
            },
            {
                english: "**Destructive Interference:** Occurs when waves are out of phase. The amplitudes subtract, resulting in a wave of smaller amplitude. Path difference is `(n + 1/2)λ`.",
                tamil: "**அழிவுக் குறுக்கீட்டு விளைவு:** அலைகள் கட்டத்திற்கு வெளியே இருக்கும்போது ஏற்படுகிறது. வீச்சுகள் கழிக்கப்பட்டு, சிறிய வீச்சு கொண்ட அலை உருவாகிறது. பாதை வேறுபாடு `(n + 1/2)λ`."
            },
        ]
    },
    {
        heading: {
            english: "Stationary Waves and Resonance",
            tamil: "நிலையான அலைகள் மற்றும் ஒத்ததிர்வு"
        },
        content: [
            {
                english: "When two identical waves traveling in opposite directions superpose, a stationary or standing wave is formed. There are points called nodes (zero displacement) and antinodes (maximum displacement).",
                tamil: "ஒரே மாதிரியான இரண்டு அலைகள் எதிர் திசைகளில் பயணித்து ஒன்றன்மேல் ஒன்று பொருந்தும்போது, ஒரு நிலையான அலை உருவாகிறது. கணுக்கள் (பூஜ்ஜிய இடப்பெயர்ச்சி) மற்றும் எதிர்க்கணுக்கள் (அதிகபட்ச இடப்பெயர்ச்சி) எனப்படும் புள்ளிகள் உள்ளன."
            },
            {
                english: "**Resonance:** This is the phenomenon where a vibrating system or external force drives another system to oscillate with greater amplitude at specific preferential frequencies. These frequencies are known as the system's resonant frequencies.",
                tamil: "**ஒத்ததிர்வு:** இது ஒரு அதிர்வுறும் அமைப்பு அல்லது வெளிப்புற விசை மற்றொரு அமைப்பை குறிப்பிட்ட முன்னுரிமை அதிர்வெண்களில் அதிக வீச்சுடன் அலைவுறச் செய்யும் நிகழ்வாகும். இந்த அதிர்வெண்கள் அமைப்பின் ஒத்ததிர்வு அதிர்வெண்கள் என்று அழைக்கப்படுகின்றன."
            }
        ]
    },
    {
        heading: {
            english: "Doppler Effect",
            tamil: "டாப்ளர் விளைவு"
        },
        content: [
           {
                english: "The Doppler effect is the apparent change in the frequency of a wave in relation to an observer who is moving relative to the wave source. The general formula is `f' = f * (v ± vₒ) / (v ∓ vₛ)`, where f' is the apparent frequency, f is the actual frequency, v is the speed of the wave, vₒ is the speed of the observer, and vₛ is the speed of the source.",
                tamil: "டாப்ளர் விளைவு என்பது அலை மூலத்திற்கு சார்பாக நகரும் ஒரு பார்வையாளரைப் பொறுத்து ஒரு அலையின் அதிர்வெண்ணில் ஏற்படும் தோற்ற மாற்றமாகும். பொதுவான சூத்திரம்: `f' = f * (v ± vₒ) / (v ∓ vₛ)`, இதில் f' என்பது தோற்ற அதிர்வெண், f என்பது உண்மையான அதிர்வெண், v என்பது அலையின் வேகம், vₒ என்பது பார்வையாளரின் வேகம், மற்றும் vₛ என்பது மூலத்தின் வேகம்."
            },
            {
                english: "Sign convention: Use the top sign in the numerator/denominator when the observer/source moves towards the other. Use the bottom sign when they move away.",
                tamil: "குறியீட்டு மரபு: பார்வையாளர்/மூலம் மற்றொன்றை நோக்கி நகரும்போது தொகுதி/பகுதியில் உள்ள மேல் குறியைப் பயன்படுத்தவும். அவை விலகிச் செல்லும்போது கீழ் குறியைப் பயன்படுத்தவும்."
            }
        ]
    }
  ],
  workedExamples: [
    {
      title: "Wave Equation Analysis",
      titleTamil: "அலை சமன்பாடு பகுப்பாய்வு",
      difficulty: 'Medium',
      problem: "A progressive wave is represented by the equation `y(x, t) = 0.5 sin(2πt - πx)`. All parameters are in SI units. Determine its (i) amplitude, (ii) wavelength, (iii) frequency, and (iv) velocity of the wave.",
      problemTamil: "ஒரு முன்னேறு அலை `y(x, t) = 0.5 sin(2πt - πx)` என்ற சமன்பாட்டால் குறிக்கப்படுகிறது. அனைத்து அளவுருக்களும் SI அலகுகளில் உள்ளன. அதன் (i) வீச்சு, (ii) அலைநீளம், (iii) அதிர்வெண் மற்றும் (iv) அலையின் திசைவேகத்தைக் கண்டறியவும்.",
      solutionSteps: [
        {
          step: 1,
          explanation: "Compare the given equation with the standard wave equation `y(x, t) = A sin(ωt - kx)`.",
          explanationTamil: "கொடுக்கப்பட்ட சமன்பாட்டை நிலையான அலை சமன்பாட்டுடன் `y(x, t) = A sin(ωt - kx)` ஒப்பிடவும்."
        },
        {
          step: 2,
          explanation: "By direct comparison, we can find the amplitude (A), angular frequency (ω), and wave number (k).",
          explanationTamil: "நேரடி ஒப்பீட்டின் மூலம், வீச்சு (A), கோண அதிர்வெண் (ω), மற்றும் அலை எண் (k) ஆகியவற்றைக் காணலாம்.",
          calculation: "A = 0.5 m\nω = 2π rad/s\nk = π rad/m"
        },
        {
          step: 3,
          explanation: "Calculate the wavelength (λ) from the wave number (k) using the formula k = 2π/λ.",
          explanationTamil: "k = 2π/λ என்ற சூத்திரத்தைப் பயன்படுத்தி அலை எண்ணிலிருந்து (k) அலைநீளத்தை (λ) கணக்கிடவும்.",
          calculation: "λ = 2π / k = 2π / π = 2 m"
        },
        {
          step: 4,
          explanation: "Calculate the frequency (f) from the angular frequency (ω) using the formula ω = 2πf.",
          explanationTamil: "ω = 2πf என்ற சூத்திரத்தைப் பயன்படுத்தி கோண அதிர்வெண்ணிலிருந்து (ω) அதிர்வெண்ணைக் (f) கணக்கிடவும்.",
          calculation: "f = ω / 2π = 2π / 2π = 1 Hz"
        },
        {
          step: 5,
          explanation: "Calculate the wave velocity (v) using the formula v = fλ or v = ω/k.",
          explanationTamil: "v = fλ அல்லது v = ω/k என்ற சூத்திரத்தைப் பயன்படுத்தி அலை திசைவேகத்தைக் (v) கணக்கிடவும்.",
          calculation: "v = fλ = 1 Hz * 2 m = 2 m/s"
        }
      ],
      answer: "The amplitude is 0.5 m, wavelength is 2 m, frequency is 1 Hz, and wave velocity is 2 m/s."
    },
    {
      title: "Doppler Effect Calculation",
      titleTamil: "டாப்ளர் விளைவு கணக்கீடு",
      difficulty: 'Hard',
      problem: "A train moving at a speed of 220 m/s towards a stationary object emits a sound of frequency 1000 Hz. Some of the sound reaching the object gets reflected back to the train as an echo. The speed of sound in air is 330 m/s. What is the frequency of the echo as detected by the driver of the train?",
      problemTamil: "ஒரு ரயில் நிலையான பொருளை நோக்கி 220 மீ/வி வேகத்தில் நகர்ந்து 1000 ஹெர்ட்ஸ் அதிர்வெண் கொண்ட ஒலியை வெளியிடுகிறது. பொருளை அடையும் ஒலியின் ஒரு பகுதி எதிரொலியாக ரயிலுக்குத் திரும்புகிறது. காற்றில் ஒலியின் வேகம் 330 மீ/வி. ரயில் ஓட்டுநரால் கண்டறியப்பட்ட எதிரொலியின் அதிர்வெண் என்ன?",
      solutionSteps: [
        {
          step: 1,
          explanation: "This problem has two parts. First, the train is the source and the stationary object is the observer. Calculate the frequency (f') received by the object.",
          explanationTamil: "இந்தப் பிரச்சனைக்கு இரண்டு பகுதிகள் உள்ளன. முதலில், ரயில் மூலம் மற்றும் நிலையான பொருள் பார்வையாளர். பொருளால் பெறப்பட்ட அதிர்வெண்ணைக் (f') கணக்கிடவும்."
        },
        {
          step: 2,
          explanation: "Use the Doppler effect formula for a moving source and stationary observer. The source is moving towards the observer.",
          explanationTamil: "நகரும் மூலம் மற்றும் நிலையான பார்வையாளருக்கான டாப்ளர் விளைவு சூத்திரத்தைப் பயன்படுத்தவும். மூலம் பார்வையாளரை நோக்கி நகர்கிறது.",
          calculation: "f' = f * (v / (v - vₛ)) = 1000 * (330 / (330 - 220)) = 1000 * (330 / 110) = 3000 Hz"
        },
        {
          step: 3,
          explanation: "Now, the stationary object acts as the source of the reflected sound (with frequency f'), and the moving train is the observer, moving towards this new source.",
          explanationTamil: "இப்போது, நிலையான பொருள் பிரதிபலித்த ஒலியின் மூலமாக (அதிர்வெண் f') செயல்படுகிறது, மேலும் நகரும் ரயில் இந்த புதிய மூலத்தை நோக்கி நகரும் பார்வையாளர் ஆகும்."
        },
        {
          step: 4,
          explanation: "Use the Doppler effect formula for a stationary source and moving observer. The observer is moving towards the source.",
          explanationTamil: "நிலையான மூலம் மற்றும் நகரும் பார்வையாளருக்கான டாப்ளர் விளைவு சூத்திரத்தைப் பயன்படுத்தவும். பார்வையாளர் மூலத்தை நோக்கி நகர்கிறார்.",
          calculation: "f'' = f' * ((v + vₒ) / v) = 3000 * ((330 + 220) / 330) = 3000 * (550 / 330)"
        },
        {
          step: 5,
          explanation: "Calculate the final apparent frequency (f'').",
          explanationTamil: "இறுதி தோற்ற அதிர்வெண்ணை (f'') கணக்கிடவும்.",
          calculation: "f'' = 3000 * (5 / 3) = 5000 Hz"
        }
      ],
      answer: "The frequency of the echo as detected by the driver is 5000 Hz.",
      neetHack: "For reflection problems, apply the Doppler formula twice. First, with the moving object as the source/observer, then treat the stationary object as the new source and reverse the roles.",
      neetHackTamil: "எதிரொலிப்பு பிரச்சனைகளுக்கு, டாப்ளர் சூத்திரத்தை இரண்டு முறை பயன்படுத்தவும். முதலில், நகரும் பொருளை மூலம்/பார்வையாளராகக் கொண்டு, பின்னர் நிலையான பொருளை புதிய மூலமாகக் கருதி பாத்திரங்களை மாற்றவும்."
    }
  ],
  mcqs: [
    {
        question: "Which of the following properties of a wave changes when it travels from one medium to another?",
        options: ["Frequency", "Wavelength", "Amplitude", "Time Period"],
        answer: "Wavelength",
        explanation: "When a wave enters a new medium, its speed changes. Since frequency (f) is a property of the source and remains constant, the wavelength (λ) must change according to the wave equation v = fλ.",
        neetFrequency: 4
    },
    {
        question: "The phenomenon of sound propagation in air is:",
        options: ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"],
        answer: "Longitudinal",
        explanation: "Sound waves are longitudinal waves because the particles of the medium (air) vibrate parallel to the direction of wave propagation, creating compressions and rarefactions.",
        neetFrequency: 3
    },
    {
        question: "For constructive interference to occur between two waves, the phase difference should be:",
        options: ["(2n+1)π", "nπ", "(n+1/2)π", "2nπ"],
        answer: "2nπ",
        explanation: "Constructive interference occurs when two waves are in phase, meaning their crests and troughs align. This corresponds to a phase difference of 0, 2π, 4π, ..., which can be generalized as 2nπ, where n is an integer.",
        neetFrequency: 4
    },
    {
        question: "The points of maximum displacement in a stationary wave are called:",
        options: ["Nodes", "Antinodes", "Crests", "Troughs"],
        answer: "Antinodes",
        explanation: "In a stationary wave, nodes are points of zero displacement, while antinodes are points of maximum displacement (maximum amplitude).",
        neetFrequency: 5
    },
    {
        question: "When a source of sound moves towards a stationary listener, the apparent frequency heard by the listener is:",
        options: ["Higher than the actual frequency", "Lower than the actual frequency", "Same as the actual frequency", "Zero"],
        answer: "Higher than the actual frequency",
        explanation: "According to the Doppler effect, when the source moves towards the observer, the wavefronts are compressed, leading to a shorter perceived wavelength and thus a higher apparent frequency.",
        neetFrequency: 4
    },
    {
        question: "The speed 'v' of a transverse wave on a string depends on tension 'T' and linear mass density 'μ' as:",
        options: ["v ∝ √(T/μ)", "v ∝ √(μ/T)", "v ∝ T/μ", "v ∝ μ/T"],
        answer: "v ∝ √(T/μ)",
        explanation: "The formula for the speed of a transverse wave on a stretched string is v = √(T/μ). This shows that the speed increases with tension and decreases with linear mass density.",
        neetFrequency: 3
    },
    {
        question: "Beats are produced by the superposition of two waves with:",
        options: ["Same frequency and same amplitude", "Slightly different frequencies", "Same frequency but different amplitudes", "Different frequencies and different amplitudes"],
        answer: "Slightly different frequencies",
        explanation: "Beats are the periodic variation in amplitude at a given point due to the superposition of two sound waves having slightly different frequencies. The beat frequency is equal to the difference in the frequencies of the two waves.",
        neetFrequency: 4
    },
    {
        question: "Which of the following is not an example of a wave phenomenon?",
        options: ["Interference", "Diffraction", "Refraction", "Photoelectric effect"],
        answer: "Photoelectric effect",
        explanation: "Interference, diffraction, and refraction are characteristic properties of waves. The photoelectric effect demonstrates the particle nature of light (photons) and is not a wave phenomenon.",
        neetFrequency: 3
    },
    {
        question: "The distance between two consecutive nodes in a stationary wave is:",
        options: ["λ/4", "λ/2", "λ", "2λ"],
        answer: "λ/2",
        explanation: "In a stationary wave, the distance between a node and the next antinode is λ/4. Therefore, the distance between two consecutive nodes (or two consecutive antinodes) is λ/4 + λ/4 = λ/2.",
        neetFrequency: 5
    },
    {
        question: "The Doppler effect is applicable for:",
        options: ["Sound waves only", "Light waves only", "Both sound and light waves", "Neither sound nor light waves"],
        answer: "Both sound and light waves",
        explanation: "The Doppler effect is a general phenomenon observed in all types of waves, including sound and electromagnetic waves like light. For light, it leads to redshift or blueshift.",
        neetFrequency: 3
    },
    {
        question: "The wave number 'k' is related to wavelength 'λ' by the relation:",
        options: ["k = 2πλ", "k = 2π/λ", "k = λ/2π", "k = 1/λ"],
        answer: "k = 2π/λ",
        explanation: "The wave number (or propagation constant) 'k' represents the number of radians per unit distance. It is defined as k = 2π/λ.",
        neetFrequency: 4
    },
    {
        question: "The intensity of a wave is proportional to:",
        options: ["its frequency", "its wavelength", "the square of its amplitude", "its velocity"],
        answer: "the square of its amplitude",
        explanation: "The intensity of a wave, which is the power transferred per unit area, is directly proportional to the square of the amplitude of the wave (I ∝ A²).",
        neetFrequency: 3
    },
    {
        question: "A pipe of length L is closed at one end. Which harmonic can it NOT produce?",
        options: ["First harmonic", "Second harmonic", "Third harmonic", "Fifth harmonic"],
        answer: "Second harmonic",
        explanation: "A pipe closed at one end can only produce odd harmonics (1st, 3rd, 5th, etc.). It cannot produce even harmonics because it must have a node at the closed end and an antinode at the open end.",
        neetFrequency: 4
    },
    {
        question: "What happens to the speed of sound in air as temperature increases?",
        options: ["It increases", "It decreases", "It remains constant", "It becomes zero"],
        answer: "It increases",
        explanation: "The speed of sound in a gas is proportional to the square root of its absolute temperature (v ∝ √T). As the temperature increases, the molecules move faster, transmitting the sound vibrations more quickly.",
        neetFrequency: 3
    },
    {
        question: "Two sound sources produce 4 beats per second. If the frequency of one source is 256 Hz, the frequency of the other could be:",
        options: ["256 Hz", "258 Hz or 254 Hz", "260 Hz or 252 Hz", "262 Hz"],
        answer: "260 Hz or 252 Hz",
        explanation: "The beat frequency is the difference between the two frequencies. So, |f₁ - f₂| = 4. If f₁ = 256 Hz, then f₂ could be 256 + 4 = 260 Hz or 256 - 4 = 252 Hz.",
        neetFrequency: 4
    },
    {
        question: "In which of the following media will sound travel the fastest?",
        options: ["Vacuum", "Air", "Water", "Steel"],
        answer: "Steel",
        explanation: "Sound travels fastest in solids, slower in liquids, and slowest in gases. It cannot travel in a vacuum. The speed of sound is highest in steel because its molecules are tightly packed, allowing for rapid transmission of vibrations.",
        neetFrequency: 3
    },
    {
        question: "A 'shock wave' is produced when the speed of the source is:",
        options: ["Less than the speed of the wave", "Equal to the speed of the wave", "Greater than the speed of the wave", "Zero"],
        answer: "Greater than the speed of the wave",
        explanation: "A shock wave (like a sonic boom) is produced when a source moves faster than the speed of the waves it produces in the medium. The wave crests pile up and form a conical wavefront.",
        neetFrequency: 2
    },
    {
        question: "The phenomenon that allows us to distinguish between two sounds of the same pitch and loudness is:",
        options: ["Frequency", "Intensity", "Quality or Timbre", "Wavelength"],
        answer: "Quality or Timbre",
        explanation: "Quality, or timbre, is the characteristic of a sound that distinguishes different types of sound production. It is determined by the harmonic content of a sound and its dynamic characteristics.",
        neetFrequency: 3
    },
    {
        question: "If a string is plucked in the middle, which harmonic is least likely to be present?",
        options: ["First harmonic (fundamental)", "Second harmonic", "Third harmonic", "All are equally likely"],
        answer: "Second harmonic",
        explanation: "Plucking a string in the middle creates an antinode at that point. The second harmonic has a node at the center, so it is not excited when the string is plucked from the middle.",
        neetFrequency: 2
    },
    {
        question: "The equation y = A sin(kx) cos(ωt) represents:",
        options: ["A progressive wave", "A longitudinal wave", "A stationary wave", "A transverse wave"],
        answer: "A stationary wave",
        explanation: "A stationary wave's equation has its space and time parts separated by multiplication, not as a function of (kx ± ωt). The term `A sin(kx)` gives the amplitude at position x, and `cos(ωt)` gives the oscillation in time.",
        neetFrequency: 4
    },
    {
        question: "The Laplace correction to the formula for the speed of sound in a gas accounts for the process being:",
        options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"],
        answer: "Adiabatic",
        explanation: "Newton assumed the process of sound propagation was isothermal, which was incorrect. Laplace corrected this by stating that the compressions and rarefactions happen so quickly that the process is adiabatic (no heat exchange).",
        neetFrequency: 3
    },
    {
        question: "If a star is moving away from Earth, the light from it will show a:",
        options: ["Blueshift", "Redshift", "No shift", "A shift towards green"],
        answer: "Redshift",
        explanation: "Due to the Doppler effect for light, when a light source moves away from an observer, the apparent wavelength of the light increases, shifting it towards the red end of the spectrum. This is known as redshift.",
        neetFrequency: 4
    },
    {
        question: "Two waves are y₁ = A sin(ωt - kx) and y₂ = A sin(ωt - kx + π). The resultant amplitude of their superposition is:",
        options: ["2A", "A", "A√2", "0"],
        answer: "0",
        explanation: "The phase difference between the two waves is π radians (or 180°). This means they are perfectly out of phase. This results in complete destructive interference, and the resultant amplitude is A - A = 0.",
        neetFrequency: 3
    },
    {
        question: "The tension in a piano wire is 10 N. What should be done to the tension to double the wave speed?",
        options: ["Halve the tension", "Double the tension", "Quadruple the tension", "Make it √10 N"],
        answer: "Quadruple the tension",
        explanation: "Wave speed 'v' is proportional to the square root of tension 'T' (v ∝ √T). To double the speed (2v), the tension must be increased by a factor of 4, since √(4T) = 2√T.",
        neetFrequency: 4
    },
    {
        question: "The intensity ratio of two interfering waves is 9:1. What is the ratio of maximum to minimum intensity?",
        options: ["10:8", "4:1", "3:1", "100:64"],
        answer: "4:1",
        explanation: "Intensity is proportional to amplitude squared (I ∝ A²). So, A₁/A₂ = √9/√1 = 3/1. Maximum intensity I_max ∝ (A₁ + A₂)² = (3+1)² = 16. Minimum intensity I_min ∝ (A₁ - A₂)² = (3-1)² = 4. The ratio I_max / I_min is 16/4 = 4:1.",
        neetFrequency: 4
    }
],
  assertionReasons: [
    {
      assertion: "Sound waves cannot be polarized.",
      reason: "Sound waves are longitudinal waves.",
      answer: 'A',
      explanation: "Polarization is a phenomenon exclusive to transverse waves, where oscillations can be restricted to a single plane. Since sound waves are longitudinal (oscillations are parallel to propagation), they cannot be polarized. The reason correctly explains the assertion."
    },
    {
      assertion: "The Doppler effect is symmetric for sound waves.",
      reason: "The apparent frequency change depends on the relative motion between the source and the observer.",
      answer: 'D',
      explanation: "The assertion is false. The Doppler effect for sound is asymmetric. The formula is different when the source moves versus when the observer moves. The reason is true, but it doesn't lead to the conclusion that the effect is symmetric."
    },
    {
      assertion: "When a wave travels from a rarer to a denser medium, its wavelength decreases.",
      reason: "The frequency of the wave remains unchanged when the medium changes.",
      answer: 'A',
      explanation: "When entering a denser medium, the speed of the wave decreases. Since frequency (determined by the source) remains constant, the wavelength must decrease according to v = fλ. The reason correctly explains the assertion."
    },
    {
      assertion: "To hear beats, the difference in frequencies of the two sound waves should be small.",
      reason: "The persistence of hearing for the human ear is about 0.1 seconds.",
      answer: 'A',
      explanation: "If the frequency difference is large (more than about 10 Hz), the ear cannot distinguish the individual variations in intensity and hears a rough sound instead of distinct beats. This is due to the persistence of hearing. The reason correctly explains the assertion."
    },
    {
      assertion: "A transverse wave can be produced in a solid but not in a gas.",
      reason: "Gases do not possess shear elasticity.",
      answer: 'A',
      explanation: "Transverse waves require a medium that can sustain shear stress. Solids have shear elasticity, allowing them to support transverse waves. Gases and ideal fluids do not have shear elasticity and cannot support transverse waves. The reason is the correct explanation for the assertion."
    }
  ],
  matchTheColumns: [
    {
      column1: ['(A) Beats', '(B) Stationary wave', '(C) Doppler effect', '(D) Polarization'],
      column2: ['(p) Transverse waves only', '(q) Apparent change in frequency', '(r) Superposition of waves with slightly different frequencies', '(s) Superposition of identical waves in opposite directions'],
      answer: "A-r, B-s, C-q, D-p",
      explanation: "Beats are formed by superposing waves of slightly different frequencies. Stationary waves are formed by superposing identical waves traveling oppositely. Doppler effect is the apparent frequency change. Polarization is a property of transverse waves only."
    },
    {
      column1: ['(A) Pitch', '(B) Loudness', '(C) Quality/Timbre', '(D) Beat Frequency'],
      column2: ['(p) Intensity / Amplitude', '(q) |f₁ - f₂|', '(r) Frequency', '(s) Waveform / Harmonics'],
      answer: "A-r, B-p, C-s, D-q",
      explanation: "Pitch is determined by frequency. Loudness is determined by intensity/amplitude. Quality/Timbre is determined by the waveform and its harmonic content. Beat frequency is the difference between the two source frequencies."
    },
    {
      column1: ['(A) Speed of sound', '(B) Wavelength', '(C) Frequency', '(D) Phase'],
      column2: ['(p) Depends on the source', '(q) Changes in a new medium', '(r) Depends on the properties of the medium', '(s) Relative position in a cycle'],
      answer: "A-r, B-q, C-p, D-s",
      explanation: "Speed of sound depends on the medium's properties. Wavelength changes when the medium changes. Frequency is a characteristic of the source. Phase describes a point's position in its cycle."
    },
    {
      column1: ['(A) Open organ pipe', '(B) Closed organ pipe', '(C) Stretched string', '(D) Echo'],
      column2: ['(p) All harmonics are present', '(q) Reflection of sound', '(r) Only odd harmonics are present', '(s) Transverse stationary waves'],
      answer: "A-p, B-r, C-s, D-q",
      explanation: "An open organ pipe can produce all harmonics. A closed organ pipe produces only odd harmonics. A stretched string produces transverse stationary waves. An echo is a reflection of sound."
    },
    {
      column1: ['(A) y = A sin(ωt - kx)', '(B) v = ω/k', '(C) ω = 2πf', '(D) k = 2π/λ'],
      column2: ['(p) Angular frequency', '(q) Progressive wave equation', '(r) Wave number', '(s) Wave velocity'],
      answer: "A-q, B-s, C-p, D-r",
      explanation: "The terms match their respective definitions and formulas in wave mechanics."
    }
  ],
  keyTakeaways: [
    "Waves transfer energy, not matter. They can be transverse (like light) or longitudinal (like sound).",
    "The principle of superposition governs how waves interact, leading to constructive or destructive interference and the formation of beats.",
    "Stationary waves are formed from the superposition of two identical waves traveling in opposite directions, creating nodes and antinodes.",
    "The Doppler effect explains the apparent change in frequency due to relative motion between a source and an observer. This is fundamental for applications like RADAR and understanding astronomical redshift.",
    "The speed of a wave depends on the properties of the medium it travels through. For a string, it's tension and mass density; for sound in gas, it's temperature and molar mass."
  ],
  mnemonics: [
    { text: "For the Doppler effect formula signs, remember 'TOWARDS = TOP sign positive'. If the observer moves TOWARDS the source, the top of the fraction is (v + vₒ). If the source moves TOWARDS the observer, the bottom is (v - vₛ), which also increases the overall fraction.", tamil: "டாப்ளர் விளைவு சூத்திரக் குறிகளுக்கு, 'நோக்கிச் சென்றால் = மேல் குறி நேர்மறை' என நினைவில் கொள்க. பார்வையாளர் மூலத்தை நோக்கிச் சென்றால், பின்னத்தின் மேல் பகுதி (v + vₒ). மூலம் பார்வையாளரை நோக்கிச் சென்றால், கீழ் பகுதி (v - vₛ), இதுவும் மொத்த பின்னத்தை அதிகரிக்கிறது." }
  ],
  neetTips: [
    { text: "Many Doppler effect questions involve reflection. Treat these as two separate Doppler shifts: first from source to reflector, then from reflector (as a new source) to observer.", tamil: "பல டாப்ளர் விளைவு கேள்விகள் எதிரொலிப்பைக் கொண்டுள்ளன. இவற்றை இரண்டு தனித்தனி டாப்ளர் மாற்றங்களாகக் கருதுங்கள்: முதலில் மூலத்திலிருந்து எதிரொலிப்பானுக்கு, பின்னர் எதிரொலிப்பானிலிருந்து (ஒரு புதிய மூலமாக) பார்வையாளருக்கு." },
    { text: "For organ pipes, remember: 'Closed = Odd'. A closed pipe can only have odd harmonics (f, 3f, 5f...). An open pipe can have all harmonics (f, 2f, 3f...). This is a very common question type.", tamil: "ஆர்கன் குழாய்களுக்கு, 'மூடியது = ஒற்றைப்படை' என நினைவில் கொள்க. ஒரு மூடிய குழாய் ஒற்றைப்படை இசை উপসੁਰங்களை (f, 3f, 5f...) மட்டுமே கொண்டிருக்க முடியும். ஒரு திறந்த குழாய் அனைத்து இசை উপসੁਰங்களையும் (f, 2f, 3f...) கொண்டிருக்க முடியும். இது மிகவும் பொதுவான கேள்வி வகையாகும்." }
  ],
  studentTip: {
    english: "Try to visualize wave superposition. Use online PhET simulations for 'Wave on a String' to see how amplitude, frequency, and tension affect wave behavior in real-time. This builds intuition that formulas alone cannot.",
    tamil: "அலைகளின் மேற்பொருந்துதலைக் காட்சிப்படுத்த முயற்சிக்கவும். 'கம்பியில் அலை' போன்ற ஆன்லைன் PhET சிமுலேஷன்களைப் பயன்படுத்தி, வீச்சு, அதிர்வெண் மற்றும் இழுவிசை ஆகியவை உண்மையான நேரத்தில் அலை நடத்தையை எவ்வாறு பாதிக்கின்றன என்பதைப் பார்க்கவும். இது சூத்திரங்களால் மட்டும் உருவாக்க முடியாத உள்ளுணர்வை உருவாக்குகிறது."
  },
  peerDiscussion: {
      english: "Discuss with a friend: 'If you are in a supersonic jet, would you hear the sound of the jet's own engines?' Why or why not? Relate it to the concept of shock waves.",
      tamil: "ஒரு நண்பருடன் விவாதிக்கவும்: 'நீங்கள் ஒரு சூப்பர்சோனிக் ஜெட்டில் இருந்தால், ஜெட்டின் சொந்த இயந்திரங்களின் ஒலியைக் கேட்பீர்களா?' ஏன் அல்லது ஏன் இல்லை? இதை அதிர்ச்சி அலைகள் என்ற கருத்துடன் தொடர்புபடுத்துங்கள்."
  },
  nextChapter: {
    title: 'Ray Optics and Optical Instruments',
    titleTamil: 'கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்'
  }
};
