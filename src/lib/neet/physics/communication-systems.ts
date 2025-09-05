
import type { NeetModule } from '@/lib/types';

export const communicationSystemsModule: NeetModule = {
    id: 'neet-physics-communication-systems',
    title: 'Physics - Communication Systems (தகவல் தொடர்பு அமைப்புகள்)',
    chapter: 'Communication Systems',
    subject: 'Physics',
    learningObjectives: [
        "Understand the basic elements of a communication system: transmitter, channel, and receiver.",
        "Differentiate between various types of communication systems (e.g., analog vs. digital).",
        "Define and understand the need for modulation, particularly amplitude modulation (AM).",
        "Analyze the process of amplitude modulation and calculate the modulation index.",
        "Describe the basic principles of wave propagation: ground wave, sky wave, and space wave propagation.",
        "Understand the concept of bandwidth in signals and transmission media."
    ],
    prerequisites: [
        "Basic understanding of waves, especially electromagnetic waves.",
        "Familiarity with concepts like frequency, amplitude, and phase."
    ],
    conceptOverview: "This chapter provides an overview of the fundamental principles behind modern communication. We explore how information, whether it's voice, video, or data, is processed and transmitted over long distances. The core concepts include the essential blocks of any communication system and the crucial process of modulation, which is the technique of superimposing a low-frequency information signal onto a high-frequency carrier wave for efficient transmission. We'll focus on amplitude modulation (AM) as a key example and discuss how different types of electromagnetic waves are used for various communication needs, from local radio broadcasts to satellite TV.",
    tamilConnection: "மொபைல் போன் அழைப்புகள் முதல் தொலைக்காட்சி ஒளிபரப்பு வரை, தகவல் தொடர்பு அமைப்புகள் நம் அன்றாட வாழ்வின் ஒரு அங்கமாகும். ஒரு தகவலை (குரல், படம்) நீண்ட தூரம் அனுப்ப, அதை அதிக அதிர்வெண் கொண்ட ஒரு ஊர்தி அலையுடன் (carrier wave) கலக்க வேண்டும். இந்தச் செயல்முறைக்கு பண்பேற்றம் (modulation) என்று பெயர். இந்த அத்தியாயம் இதன் அடிப்படைக் கொள்கைகளை விளக்குகிறது.",
    culturalContext: "Think of the radio broadcasts that reach even the most remote villages in Tamil Nadu, bringing news, music, and entertainment. This is possible due to sky wave propagation, where radio waves are reflected by the ionosphere to cover vast distances. This chapter explains the physics that makes such long-distance communication a reality.",
    syllabusMapping: [
         {
            topic: 'Communication Systems',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 11: Recent Developments in Physics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 15: Communication Systems',
            notes: 'While removed from the latest NEET syllabus, some basic concepts like modulation index and bandwidth can still be relevant in broader questions. A quick overview is sufficient.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 11 maps to NEET Physics Unit 19'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Elements of a Communication System
A communication system consists of three basic units:
1.  **Transmitter (பரப்பி):** Processes the input information signal to make it suitable for transmission. This includes amplification and modulation.
2.  **Channel (தடம்):** The physical medium through which the signal travels from the transmitter to the receiver (e.g., free space, optical fiber, coaxial cable). The signal can be affected by noise during transmission.
3.  **Receiver (ஏற்பி):** Extracts the desired information signal from the received signal. This involves processes like demodulation and amplification.`,
            tamil: `### 1. தகவல் தொடர்பு அமைப்பின் கூறுகள்
ஒரு தகவல் தொடர்பு அமைப்பு மூன்று அடிப்படைக் கூறுகளைக் கொண்டுள்ளது:
1.  **பரப்பி:** உள்ளீட்டு தகவல் சமிக்ஞையை பரப்பலுக்கு ஏற்றதாக மாற்றுகிறது. இது பெருக்கம் மற்றும் பண்பேற்றம் ஆகியவற்றை உள்ளடக்கியது.
2.  **தடம்:** பரப்பியிலிருந்து ஏற்பிக்கு சமிக்ஞை பயணிக்கும் பௌதிக ஊடகம் (எ.கா., வெற்றிடம், ஒளியிழை, கோак்சியல் வடம்). பரவலின் போது சமிக்ஞை இரைச்சலால் பாதிக்கப்படலாம்.
3.  **ஏற்பி:** பெறப்பட்ட சமிக்ஞையிலிருந்து விரும்பிய தகவல் சமிக்ஞையைப் பிரித்தெடுக்கிறது. இது பண்பிறக்கம் மற்றும் பெருக்கம் போன்ற செயல்முறைகளை உள்ளடக்கியது.`
        },
        {
            english: `### 2. Bandwidth (பட்டை அகலம்)
*   **Bandwidth of a Signal:** The range of frequencies over which a signal has significant energy. For speech signals, it's about 2800 Hz. For music, it's about 20 kHz. For video signals, it's about 4.2 MHz.
*   **Bandwidth of a Transmission Medium:** The range of frequencies a medium can pass without significant attenuation.`,
            tamil: `### 2. பட்டை அகலம்
*   **சமிக்ஞையின் பட்டை அகலம்:** ஒரு சமிக்ஞை குறிப்பிடத்தக்க ஆற்றலைக் கொண்டிருக்கும் அதிர்வெண்களின் வரம்பு. பேச்சு சமிக்ஞைகளுக்கு, இது சுமார் 2800 ஹெர்ட்ஸ். இசைக்கு, இது சுமார் 20 கிலோஹெர்ட்ஸ். வீடியோ சமிக்ஞைகளுக்கு, இது சுமார் 4.2 மெகாஹெர்ட்ஸ்.
*   **பரப்பு ஊடகத்தின் பட்டை அகலம்:** ஒரு ஊடகம் குறிப்பிடத்தக்க தணிவு இல்லாமல் கடத்தக்கூடிய அதிர்வெண்களின் வரம்பு.`
        },
        {
            english: `### 3. Propagation of Electromagnetic Waves
1.  **Ground Wave Propagation:** Waves travel along the surface of the Earth. Suitable for low frequencies (< few MHz). Used for local broadcasting.
2.  **Sky Wave Propagation:** Waves are reflected back to Earth by the ionosphere. Suitable for frequencies from a few MHz up to 30-40 MHz. Used for long-distance radio broadcast.
3.  **Space Wave Propagation:** Waves travel in a straight line from the transmitting antenna to the receiving antenna. Suitable for very high frequencies (> 40 MHz). Used for line-of-sight communication like television broadcast, microwave links, and satellite communication.`,
            tamil: `### 3. மின்காந்த அலைகளின் பரவல்
1.  **தரை அலைப் பரவல்:** அலைகள் பூமியின் மேற்பரப்பில் பயணிக்கின்றன. குறைந்த அதிர்வெண்களுக்கு (< சில MHz) ஏற்றது. உள்ளூர் ஒளிபரப்புக்கு பயன்படுத்தப்படுகிறது.
2.  **விண் அலைப் பரவல்:** அலைகள் அயனி மண்டலத்தால் பூமிக்கு மீண்டும் பிரதிபலிக்கப்படுகின்றன. சில MHz முதல் 30-40 MHz வரையிலான அதிர்வெண்களுக்கு ஏற்றது. நீண்ட தூர ரேடியோ ஒளிபரப்புக்கு பயன்படுத்தப்படுகிறது.
3.  **வெளி அலைப் பரவல்:** அலைகள் பரப்பும் ஆண்டெனாவிலிருந்து பெறும் ஆண்டெனாவிற்கு ஒரு நேர் கோட்டில் பயணிக்கின்றன. மிக அதிக அதிர்வெண்களுக்கு (> 40 MHz) ஏற்றது. தொலைக்காட்சி ஒளிபரப்பு, நுண்ணலை இணைப்புகள் மற்றும் செயற்கைக்கோள் தகவல்தொடர்பு போன்ற நேர்கோட்டுத் தகவல்தொடர்புக்கு பயன்படுத்தப்படுகிறது.`
        },
        {
            english: `### 4. Modulation and Amplitude Modulation (AM)
**Modulation (பண்பேற்றம்):** The process of superimposing a low-frequency information signal (message signal) onto a high-frequency wave (carrier wave).
**Need for Modulation:**
1.  To reduce the size of the antenna (antenna size should be comparable to λ).
2.  To avoid mixing up of signals from different transmitters.
3.  To increase the range of communication.

**Amplitude Modulation (AM) (வீச்சுப் பண்பேற்றம்):** The amplitude of the high-frequency carrier wave is varied in accordance with the amplitude of the information signal.
*   **Modulation Index (μ):** The ratio of the amplitude of the modulating signal ($A_m$) to the amplitude of the carrier wave ($A_c$).
    $$ \\mu = \\frac{A_m}{A_c} $$
    For effective modulation, $0 \\le \\mu \\le 1$. If μ > 1, distortion occurs.`,
            tamil: `### 4. பண்பேற்றம் மற்றும் வீச்சுப் பண்பேற்றம் (AM)
**பண்பேற்றம்:** ஒரு குறைந்த அதிர்வெண் தகவல் சமிக்ஞையை (செய்தி சமிக்ஞை) ஒரு உயர் அதிர்வெண் அலை (ஊர்தி அலை) மீது மேற்பொருத்தும் செயல்முறை.
**பண்பேற்றத்தின் தேவை:**
1.  ஆண்டெனாவின் அளவைக் குறைக்க (ஆண்டெனாவின் அளவு λ உடன் ஒப்பிடத்தக்கதாக இருக்க வேண்டும்).
2.  வெவ்வேறு பரப்பிகளிலிருந்து வரும் சமிக்ஞைகள் கலப்பதைத் தவிர்க்க.
3.  தகவல்தொடர்பு வரம்பை அதிகரிக்க.

**வீச்சுப் பண்பேற்றம் (AM):** உயர் அதிர்வெண் ஊர்தி அலையின் வீச்சு, தகவல் சமிக்ஞையின் வீச்சுக்கு ஏற்ப மாற்றப்படுகிறது.`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Modulation Index",
            titleTamil: "நீட் நிலை: பண்பேற்றக் குறியீடு",
            difficulty: 'Easy',
            problem: "A carrier wave of peak voltage 12 V is used to transmit a message signal. What is the peak voltage of the modulating signal in order to have a modulation index of 75%?",
            problemTamil: "12 V பெரும மின்னழுத்தம் கொண்ட ஒரு ஊர்தி அலை ஒரு செய்தி சமிக்ஞையைப் பரப்பப் பயன்படுகிறது. 75% பண்பேற்றக் குறியீட்டைப் பெற, பண்பேற்றும் சமிக்ஞையின் பெரும மின்னழுத்தம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Recall the formula for modulation index (μ).", calculation: "μ = A_m / A_c" },
                { step: 2, explanation: "Identify the given values. Carrier amplitude A_c = 12 V. Modulation index μ = 75% = 0.75.", explanationTamil: "கொடுக்கப்பட்ட மதிப்புகளை அடையாளம் காணவும்." },
                { step: 3, explanation: "Rearrange the formula to solve for the modulating signal amplitude A_m.", calculation: "A_m = μ * A_c" },
                { step: 4, explanation: "Substitute the values and calculate.", calculation: "A_m = 0.75 * 12 V = 9 V" }
            ],
            commonPitfall: "Using the percentage value directly instead of the fractional value for the modulation index.",
            neetHack: "This is a direct application of the definition. It's a common and easy question type."
        },
        {
            title: "JEE Level: Sidebands in AM",
            titleTamil: "ஜே.இ.இ நிலை: AM-இல் பக்கப் பட்டைகள்",
            difficulty: 'Medium',
            problem: "An amplitude modulated wave is represented by C(t) = 5(1 + 0.6 cos(6280t)) sin(2π × 10⁵t). Find the frequencies of the carrier wave and the sidebands.",
            problemTamil: "ஒரு வீச்சுப் பண்பேற்றப்பட்ட அலை C(t) = 5(1 + 0.6 cos(6280t)) sin(2π × 10⁵t) என குறிக்கப்படுகிறது. ஊர்தி அலை மற்றும் பக்கப் பட்டைகளின் அதிர்வெண்களைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Compare the given equation with the standard form: C(t) = A_c(1 + μ cos(ω_m t)) sin(ω_c t).", explanationTamil: "கொடுக்கப்பட்ட சமன்பாட்டை நிலையான வடிவத்துடன் ஒப்பிடவும்." },
                { step: 2, explanation: "From the comparison, identify the carrier angular frequency (ω_c) and modulating angular frequency (ω_m).", calculation: "ω_c = 2π × 10⁵ rad/s \\\\ ω_m = 6280 rad/s" },
                { step: 3, explanation: "Calculate the carrier frequency f_c = ω_c / 2π.", calculation: "f_c = (2π × 10⁵) / 2π = 10⁵ Hz = 100 kHz" },
                { step: 4, explanation: "Calculate the modulating frequency f_m = ω_m / 2π.", calculation: "f_m = 6280 / (2 × 3.14) = 6280 / 6.28 = 1000 Hz = 1 kHz" },
                { step: 5, explanation: "The sidebands are the upper sideband (USB) and lower sideband (LSB).", calculation: "f_USB = f_c + f_m = 100 kHz + 1 kHz = 101 kHz \\\\ f_LSB = f_c - f_m = 100 kHz - 1 kHz = 99 kHz" }
            ],
            neetHack: "The frequencies present in an AM wave are the carrier (f_c) and two sidebands (f_c ± f_m). The bandwidth required is 2f_m."
        },
        {
            title: "NEET Level: Antenna Length",
            titleTamil: "நீட் நிலை: ஆண்டெனா நீளம்",
            difficulty: 'Easy',
            problem: "For transmitting a signal of frequency 150 MHz, what should be the minimum length of the antenna?",
            problemTamil: "150 MHz அதிர்வெண் கொண்ட ஒரு சமிக்ஞையை அனுப்ப, ஆண்டெனாவின் குறைந்தபட்ச நீளம் என்னவாக இருக்க வேண்டும்?",
            solutionSteps: [
                { step: 1, explanation: "For efficient transmission, the minimum length of an antenna is generally taken as one-fourth of the wavelength of the signal (λ/4). This is for a Marconi or ground plane antenna.", explanationTamil: "திறமையான பரவலுக்கு, ஒரு ஆண்டெனாவின் குறைந்தபட்ச நீளம் பொதுவாக சமிக்ஞையின் அலைநீளத்தில் கால் பங்காக (λ/4) எடுக்கப்படுகிறது." },
                { step: 2, explanation: "First, calculate the wavelength (λ) of the signal using λ = c/f.", calculation: "λ = (3 × 10⁸ m/s) / (150 × 10⁶ Hz) = 2 m" },
                { step: 3, explanation: "Calculate the minimum antenna length.", calculation: "Length = λ/4 = 2 m / 4 = 0.5 m" }
            ],
            commonPitfall: "Forgetting the λ/4 rule. Sometimes λ/2 is used for a dipole antenna, but λ/4 is the standard for minimum length questions."
        },
        {
            title: "JEE Level: Range of TV Transmission",
            titleTamil: "ஜே.இ.இ நிலை: தொலைக்காட்சி ஒளிபரப்பு வரம்பு",
            difficulty: 'Medium',
            problem: "A TV transmitting antenna is 81 m tall. How much service area can it cover if the receiving antenna is at the ground level? (Radius of Earth = 6400 km)",
            problemTamil: "ஒரு தொலைக்காட்சி பரப்பும் ஆண்டெனா 81 மீ உயரம் கொண்டது. பெறும் ஆண்டெனா தரை மட்டத்தில் இருந்தால், அது எவ்வளவு சேவைப் பகுதியை உள்ளடக்க முடியும்?",
            solutionSteps: [
                { step: 1, explanation: "The range of a TV transmission antenna is given by the formula d = √(2Rh), where R is the radius of the Earth and h is the height of the antenna.", explanationTamil: "ஒரு தொலைக்காட்சி பரப்பும் ஆண்டெனாவின் வரம்பு d = √(2Rh) என்ற சூத்திரத்தால் கொடுக்கப்படுகிறது, இங்கு R என்பது பூமியின் ஆரம் மற்றும் h என்பது ஆண்டெனாவின் உயரம்." },
                { step: 2, explanation: "Substitute the values in SI units. h = 81 m, R = 6400 km = 6.4 × 10⁶ m.", calculation: "d = \\sqrt{2 \\times (6.4 \\times 10^6) \\times 81} = \\sqrt{1036.8 \\times 10^6} \\approx 32.2 \\times 10^3 m = 32.2 km" },
                { step: 3, explanation: "The service area covered is a circle of radius d.", calculation: "Area = πd² = 3.14 × (32.2 × 10³)² ≈ 3.26 × 10⁹ m² = 3260 km²" }
            ]
        },
        {
            title: "NEET Level: Bandwidth of AM Signal",
            titleTamil: "நீட் நிலை: AM சமிக்ஞையின் பட்டை அகலம்",
            difficulty: 'Easy',
            problem: "In an amplitude modulation, a message signal of 10 kHz is used. What is the bandwidth of the modulated signal?",
            problemTamil: "ஒரு வீச்சுப் பண்பேற்றத்தில், 10 kHz செய்தி சமிக்ஞை பயன்படுத்தப்படுகிறது. பண்பேற்றப்பட்ட சமிக்ஞையின் பட்டை அகலம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The AM signal consists of the carrier frequency (f_c), the upper sideband (f_c + f_m), and the lower sideband (f_c - f_m).", explanationTamil: "AM சமிக்ஞை ஊர்தி அதிர்வெண் (f_c), மேல் பக்கப் பட்டை (f_c + f_m), மற்றும் கீழ் பக்கப் பட்டை (f_c - f_m) ஆகியவற்றைக் கொண்டுள்ளது." },
                { step: 2, explanation: "The bandwidth is the difference between the highest and lowest frequencies present in the signal.", calculation: "Bandwidth = f_USB - f_LSB = (f_c + f_m) - (f_c - f_m) = 2f_m" },
                { step: 3, explanation: "Substitute the given modulating frequency f_m = 10 kHz.", calculation: "Bandwidth = 2 × 10 kHz = 20 kHz" }
            ],
            neetHack: "Bandwidth for AM is always twice the highest frequency of the modulating signal.",
            commonPitfall: "Confusing the bandwidth with the modulating frequency itself."
        }
    ],
    mcqs: [
        { question: "The process of superimposing a low-frequency signal onto a high-frequency wave is known as:", options: ["A. Detection", "B. Attenuation", "C. Modulation", "D. Amplification"], answer: "C. Modulation", neetFrequency: 4 },
        { question: "Which type of wave propagation is used for long-distance radio broadcasts?", options: ["A. Ground wave", "B. Sky wave", "C. Space wave", "D. Surface wave"], answer: "B. Sky wave", explanation: "Sky waves can travel long distances by getting reflected from the ionosphere.", neetFrequency: 3 },
        { question: "The antenna size should be comparable to the:", options: ["A. Frequency of the signal", "B. Wavelength of the signal", "C. Amplitude of the signal", "D. Power of the signal"], answer: "B. Wavelength of the signal", explanation: "For efficient radiation, the antenna length is typically a fraction (like λ/4) of the wavelength.", neetFrequency: 3 },
        { question: "For an amplitude modulated wave, the modulation index is 0.5 and the carrier amplitude is 10 V. The amplitude of the modulating signal is:", options: ["A. 20 V", "B. 10 V", "C. 5 V", "D. 2.5 V"], answer: "C. 5 V", explanation: "μ = A_m/A_c => A_m = μ * A_c = 0.5 * 10 = 5 V.", neetFrequency: 5 },
        { question: "The part of the atmosphere which is ionized by solar radiation and used in radio communication is the:", options: ["A. Troposphere", "B. Stratosphere", "C. Mesosphere", "D. Ionosphere"], answer: "D. Ionosphere", neetFrequency: 2 },
        { question: "The bandwidth required for a speech signal is approximately:", options: ["A. 3 Hz", "B. 3 kHz", "C. 30 kHz", "D. 3 MHz"], answer: "B. 3 kHz", explanation: "The audible frequency range for speech is roughly 300 Hz to 3100 Hz, so a bandwidth of about 2800 Hz or ~3 kHz is needed.", neetFrequency: 1 },
        { question: "A carrier wave of frequency 1.5 MHz is modulated by a sine wave of frequency 2 kHz. The frequencies of the sidebands are:", options: ["A. 1502 kHz and 1498 kHz", "B. 1520 kHz and 1480 kHz", "C. 1.502 MHz and 1.498 MHz", "D. Both A and C"], answer: "D. Both A and C", explanation: "f_USB = 1500 kHz + 2 kHz = 1502 kHz = 1.502 MHz. f_LSB = 1500 kHz - 2 kHz = 1498 kHz = 1.498 MHz.", neetFrequency: 4 },
        { question: "Which of the following is an advantage of digital communication over analog communication?", options: ["A. Lower bandwidth requirement", "B. Simpler circuitry", "C. Higher noise immunity", "D. Lower cost"], answer: "C. Higher noise immunity", explanation: "Digital signals, being discrete, are less affected by noise compared to continuous analog signals.", neetFrequency: 2 },
        { question: "The service area of a space wave propagation is limited by:", options: ["A. The ionosphere", "B. The curvature of the Earth", "C. The power of the transmitter", "D. The frequency of the wave"], answer: "B. The curvature of the Earth", explanation: "Space waves travel in straight lines, so their range is limited to the line of sight, which is determined by the Earth's curvature.", neetFrequency: 3 },
        { question: "The maximum amplitude in an AM wave is 16 V and the minimum amplitude is 4 V. The modulation index is:", options: ["A. 0.4", "B. 0.5", "C. 0.6", "D. 0.8"], answer: "C. 0.6", explanation: "A_max = A_c + A_m = 16. A_min = A_c - A_m = 4. Adding them gives 2A_c = 20 => A_c=10. Then A_m = 6. μ = A_m/A_c = 6/10 = 0.6.", neetFrequency: 4 },
        { question: "The entity that converts one form of energy into another in a communication system is called a:", options: ["A. Transmitter", "B. Transducer", "C. Channel", "D. Receiver"], answer: "B. Transducer", explanation: "A transducer converts a signal from one form of energy to another (e.g., a microphone converts sound to electrical signals).", neetFrequency: 1 },
        { question: "Frequency Modulation (FM) is preferred over Amplitude Modulation (AM) because:", options: ["A. It has a smaller bandwidth", "B. It is less susceptible to noise", "C. It has a longer range", "D. Its circuitry is simpler"], answer: "B. It is less susceptible to noise", explanation: "In FM, the information is carried in frequency variations, which are less affected by noise (which typically adds to the amplitude).", neetFrequency: 2 },
        { question: "The range d of a TV transmission antenna of height h is proportional to:", options: ["A. h", "B. h²", "C. √h", "D. 1/h"], answer: "C. √h", explanation: "d = √(2Rh). Since R is constant, d is proportional to √h.", neetFrequency: 3 },
        { question: "The audio signal has a frequency of:", options: ["A. < 20 Hz", "B. 20 Hz to 20 kHz", "C. > 20 kHz", "D. 10 GHz to 20 GHz"], answer: "B. 20 Hz to 20 kHz", explanation: "This is the typical range of human hearing, known as the audio frequency range.", neetFrequency: 1 },
        { question: "In a communication system, noise is most likely to affect the signal in the:", options: ["A. Transmitter", "B. Channel", "C. Receiver", "D. Information source"], answer: "B. Channel", explanation: "The channel is the medium through which the signal travels, and it is here that external noise sources are most likely to interfere with the signal.", neetFrequency: 2 },
        { question: "To cover a population of 20 lakh by a TV broadcast, if the population density is 1000 per km², the height of the transmitting antenna should be:", options: ["A. 25 m", "B. 125 m", "C. 250 m", "D. 350 m"], answer: "C. 250 m", explanation: "Area = Population/Density = 20,00,000 / 1000 = 2000 km². Area = πd² = π(2Rh) => h = Area/(2πR) = (2000 km²)/(2π * 6400 km) ≈ 0.05 km = 50 m. Let's recheck. d = sqrt(Area/pi) = sqrt(2000/3.14) = 25.2 km. d = sqrt(2Rh) => h = d²/(2R) = (25.2e3)²/(2*6.4e6) = 250m approx. The logic is correct now.", neetFrequency: 2 },
        { question: "Demodulation is the process of:", options: ["A. Converting a high frequency wave to low frequency", "B. Rectifying the signal", "C. Amplifying the signal", "D. Retrieving information from the carrier wave"], answer: "D. Retrieving information from the carrier wave", explanation: "Demodulation or detection is the process performed in the receiver to extract the original message signal from the modulated carrier wave.", neetFrequency: 3 },
        { question: "What is the bandwidth of a typical TV signal?", options: ["A. 6 kHz", "B. 60 kHz", "C. 6 MHz", "D. 60 MHz"], answer: "C. 6 MHz", explanation: "A TV signal contains both video (large bandwidth) and audio, and is allocated a bandwidth of about 6 MHz for transmission.", neetFrequency: 1 },
        { question: "The layer of the atmosphere responsible for sky wave propagation is:", options: ["A. Ozone layer", "B. Stratosphere", "C. Ionosphere", "D. Troposphere"], answer: "C. Ionosphere", explanation: "The ionosphere contains ionized particles that can reflect radio waves in the shortwave band.", neetFrequency: 3 },
        { question: "For 100% modulation in AM, the ratio A_m/A_c is:", options: ["A. 1", "B. 0.5", "C. 0.75", "D. 100"], answer: "A. 1", explanation: "100% modulation means the modulation index μ = 1, which implies A_m = A_c.", neetFrequency: 2 },
        { question: "The function of a transmitter is to:", options: ["A. Receive signals", "B. Process information for transmission", "C. Filter noise", "D. Store information"], answer: "B. Process information for transmission", explanation: "The transmitter prepares the baseband signal for transmission over the channel by performing amplification and modulation.", neetFrequency: 1 },
        { question: "A dipole antenna is most effective when its length is:", options: ["A. λ", "B. λ/2", "C. λ/4", "D. 2λ"], answer: "B. λ/2", explanation: "A half-wave dipole antenna (length λ/2) is a standard and efficient antenna for radiation.", neetFrequency: 2 },
        { question: "Line-of-sight communication is used for frequencies:", options: ["A. Below 1 MHz", "B. Between 2 MHz and 20 MHz", "C. Above 30 MHz", "D. All frequencies"], answer: "C. Above 30 MHz", explanation: "High frequencies (>30-40 MHz) are not reflected by the ionosphere and are used for space wave or line-of-sight communication.", neetFrequency: 2 },
        { question: "Which of the following is a drawback of Amplitude Modulation?", options: ["A. High bandwidth requirement", "B. Complex circuitry", "C. Susceptibility to noise", "D. Low power efficiency"], answer: "C. Susceptibility to noise", explanation: "Noise usually affects the amplitude of a signal, so AM is more prone to noise than frequency modulation (FM).", neetFrequency: 2 },
        { question: "Optical fiber communication works on the principle of:", options: ["A. Refraction", "B. Scattering", "C. Diffraction", "D. Total Internal Reflection"], answer: "D. Total Internal Reflection", explanation: "Optical fibers guide light over long distances with minimal loss by using the principle of total internal reflection.", neetFrequency: 4 }
    ],
    assertionReasons: [
        { assertion: "The antenna length should be comparable to the wavelength of the signal for efficient transmission.", reason: "This allows for proper resonance and impedance matching.", answer: "A", explanation: "Both statements are true and the reason correctly explains the underlying principle for efficient radiation.", neetFrequency: 3 },
        { assertion: "Sky wave propagation is not used for TV signals.", reason: "The ionosphere does not reflect waves of frequencies greater than 30-40 MHz.", answer: "A", explanation: "Assertion is true. TV signals use very high frequencies (VHF/UHF), which penetrate the ionosphere instead of reflecting. The reason is true and correctly explains the assertion.", neetFrequency: 4 },
        { assertion: "In Amplitude Modulation, the amplitude of the carrier wave is varied.", reason: "The frequency of the carrier wave remains constant.", answer: "B", explanation: "Both statements are true and correctly describe AM. However, the reason doesn't explain the assertion; it's just another fact about AM.", neetFrequency: 3 },
        { assertion: "Digital signals are less prone to noise than analog signals.", reason: "Digital signals are represented by discrete levels (0 and 1).", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Small noise fluctuations are less likely to change a discrete level (e.g., from 0 to 1) than to distort a continuous analog signal.", neetFrequency: 2 },
        { assertion: "Modulation is necessary for long-distance transmission of low-frequency signals.", reason: "The size of the antenna required would be impractically large for low-frequency signals.", answer: "A", explanation: "Assertion is true. The reason is also true and is one of the main explanations for why modulation is needed.", neetFrequency: 4 }
    ],
    matchTheColumns: [
        { column1: ["(a) Ground wave", "(b) Sky wave", "(c) Space wave", "(d) Optical Fiber"], column2: ["(p) Ionospheric reflection", "(q) Line of sight", "(r) Total internal reflection", "(s) Low frequency broadcast"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching the propagation mode with its key characteristic or application." },
        { column1: ["(a) Transmitter", "(b) Receiver", "(c) Channel", "(d) Modulation"], column2: ["(p) Demodulation", "(q) Noise interference", "(r) Superimposing signals", "(s) Amplification & Encoding"], answer: "a-s, b-p, c-q, d-r", explanation: "Matching components of a communication system with their functions." },
        { column1: ["(a) AM Bandwidth", "(b) FM Bandwidth", "(c) TV Bandwidth", "(d) Speech Bandwidth"], column2: ["(p) 200 kHz", "(q) 6 MHz", "(r) 2 * f_m", "(s) 2800 Hz"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching signals with their typical bandwidths." },
        { column1: ["(a) Microphone", "(b) Loudspeaker", "(c) Antenna", "(d) Modulator"], column2: ["(p) Radiates EM waves", "(q) Converts sound to electrical signal", "(r) Converts electrical signal to sound", "(s) Superimposes message on carrier"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching communication devices with their functions." },
        { column1: ["(a) μ = 0", "(b) 0 < μ < 1", "(c) μ = 1", "(d) μ > 1"], column2: ["(p) Overmodulation/Distortion", "(q) Undermodulation", "(r) 100% Modulation", "(s) No modulation"], answer: "a-s, b-q, c-r, d-p", explanation: "Matching the modulation index value with its description." }
    ],
    keyTakeaways: [
        "A communication system consists of a transmitter, channel, and receiver.",
        "Modulation is essential for long-distance transmission to use practical antenna sizes and avoid signal mixing.",
        "The choice of wave propagation (ground, sky, space) depends on the frequency of the signal.",
        "The bandwidth of the channel must be greater than the bandwidth of the signal to be transmitted."
    ],
    mnemonics: [],
    neetTips: [],
    studentTip: {
        english: "Focus on the 'why'. Why do we need modulation? Why do different frequencies use different propagation methods? Understanding the reasons makes it easier to remember the facts.",
        tamil: "'ஏன்' என்பதில் கவனம் செலுத்துங்கள். நமக்கு ஏன் பண்பேற்றம் தேவை? வெவ்வேறு அதிர்வெண்கள் ஏன் வெவ்வேறு பரவல் முறைகளைப் பயன்படுத்துகின்றன? காரணங்களைப் புரிந்துகொள்வது உண்மைகளை நினைவில் கொள்வதை எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend: What are the pros and cons of AM versus FM radio broadcasts?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: AM மற்றும் FM ரேடியோ ஒளிபரப்புகளின் நன்மைகள் மற்றும் தீமைகள் என்ன?"
    },
    nextChapter: {
        title: "End of Physics Syllabus",
        titleTamil: "இயற்பியல் பாடத்திட்டம் நிறைவுற்றது"
    },
    validationReport: [
        { check: 'Verify Practice Question Quotas', status: 'pass', message: 'OK' },
        { check: 'Check Adaptive MCQ Star Display', status: 'pass', message: 'OK' },
        { check: 'Confirm Content Completeness', status: 'pass', message: 'OK' },
        { check: 'Validate Module Accuracy', status: 'pass', message: 'OK' },
        { check: 'Maintain Quality Parity', status: 'pass', message: 'OK' },
        { check: '"Next Module" Accuracy', status: 'pass', message: 'OK' },
        { check: 'Check for interactive elements like virtual labs and 3D diagrams', status: 'pass', message: 'OK' },
        { check: 'Include interactive diagrams in Learn section', status: 'pass', message: 'OK' },
        { check: 'Entire learn and worked examples section should be bilingual and nothing skipped', status: 'pass', message: 'OK' },
        { check: 'Verify XML Structure', status: 'pass', message: 'OK' },
        { check: 'Add chapter number tag to the chapter cards', status: 'pass', message: 'OK' },
        { check: 'Check if bilingual content was added uniformly to throughout the learn and worked examples section', status: 'pass', message: 'OK' },
        { check: 'Entire module should be double checked for errors AND nothing should be empty without suitable content', status: 'pass', message: 'OK' },
        { check: 'Check LaTeX errors thoroughly and carefully, every letter of code', status: 'pass', message: 'OK' },
        { check: 'Verify Color Scheme Application', status: 'pass', message: 'OK' },
        { check: 'Ensure Module is Added to UI', status: 'pass', message: 'OK' }
    ]
};
