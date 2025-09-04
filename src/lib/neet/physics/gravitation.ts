
import type { NeetModule } from '@/lib/types';

export const gravitationModule: NeetModule = {
    id: 'neet-physics-gravitation',
    title: 'Physics - Gravitation (ஈர்ப்பியல்)',
    chapter: 'Gravitation',
    subject: 'Physics',
    learningObjectives: [
        "Understand and apply Newton's Law of Universal Gravitation.",
        "Analyze the variation of acceleration due to gravity (g) with altitude, depth, and rotation of the Earth.",
        "Define and calculate gravitational potential and gravitational potential energy.",
        "Derive and apply the concepts of orbital velocity and escape velocity for satellites.",
        "Understand Kepler's laws of planetary motion and their relation to the law of gravitation."
    ],
    prerequisites: [
        "Newton's Laws of Motion",
        "Kinematics (Linear and Circular Motion)",
        "Work, Energy, and Power"
    ],
    conceptOverview: "Gravitation is the universal force of attraction acting between all matter. It's the force that holds the planets in their orbits, forms galaxies, and keeps us on the ground. This chapter builds upon Newton's Laws to describe this fundamental interaction on a cosmic scale. We will explore how the force of gravity changes with location, introduce the concept of gravitational fields and potential energy, and apply these principles to understand the motion of satellites and planets. The concepts here are elegant and have profound implications for our understanding of the universe.",
    tamilConnection: "வானியல் என்பது தமிழ் மரபில் ஒரு நீண்ட வரலாறு கொண்டது. கோள்கள், விண்மீன்கள் ஆகியவற்றின் இயக்கத்தைக் கணிப்பதில் பண்டைக்காலத் தமிழர்கள் சிறந்து விளங்கினர். இந்தக் 'கோள்'களின் இயக்கத்திற்கு அடிப்படைக் காரணம் ஈர்ப்பு விசை என்பதை இந்த அத்தியாயம் அறிவியல் பூர்வமாக விளக்குகிறது. இது பிரபஞ்சத்தை ஆளும் ஒரு கண்ணுக்குத் தெரியாத சக்தி.",
    culturalContext: "Think about the massive stones used to build the great temples of Tamil Nadu. Their stability depends entirely on the constant, predictable force of gravity. Understanding this force allowed ancient engineers to create structures that have lasted for centuries. This chapter formalizes that innate understanding of gravity's power.",
    syllabusMapping: [
         {
            topic: 'Gravitation, Kepler\'s Laws, Satellites',
            tnBoardChapter: '11th Std Physics - Vol 1, Chapter 6: Gravitation',
            ncertReference: 'Class 11 Physics - Part 1, Chapter 8: Gravitation',
            notes: 'A very important chapter for NEET with high weightage. Questions on variation of g, escape velocity, and Kepler\'s laws are frequently asked. The relationship between potential energy, kinetic energy, and total energy of a satellite is a key area.',
            mappingDescription: '11th Std Physics - Vol 1, Chapter 6 maps to NEET Physics Unit 3'
        }
    ],
    conceptNotes: `### 1. Newton's Law of Universal Gravitation (நியூட்டனின் பொது ஈர்ப்பியல் விதி)
Every particle of matter in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers. (பிரபஞ்சத்தில் உள்ள ஒவ்வொரு துகளும் மற்ற ஒவ்வொரு துகளையும் ஒரு விசையுடன் ஈர்க்கிறது. இந்த விசை அவற்றின் நிறைகளின் பெருக்கற்பலனுக்கு நேர்த்தகவிலும், அவற்றின் மையங்களுக்கு இடையிலான தூரத்தின் வர்க்கத்திற்கு எதிர்த்தகவிலும் இருக்கும்.)
$$
\\vec{F} = G \\frac{m_1 m_2}{r^2} \\hat{r}
$$
Here, G is the Universal Gravitational Constant ($G = 6.67 \\times 10^{-11} \\text{ N m}^2/\\text{kg}^2$). This force is always attractive and acts along the line joining the centers of the two bodies. (இங்கு, G என்பது பொது ஈர்ப்பியல் மாறிலி. இந்த விசை எப்போதும் ஈர்ப்பு விசையாகும் மற்றும் இரு பொருட்களின் மையங்களை இணைக்கும் கோட்டின் வழியே செயல்படும்.)

### 2. Acceleration Due to Gravity (g) (ஈர்ப்பு முடுக்கம் (g))
This is the acceleration experienced by a body due to Earth's gravitational pull. For an object of mass m on the Earth's surface (mass M, radius R):
Force $F = G \\frac{Mm}{R^2}$. Also, $F = mg$.
$$
g = \\frac{GM}{R^2}
$$

#### Variation of 'g' (g-இன் மாறுபாடு)
*   **With Altitude (h) (உயரத்தைப் பொறுத்து):** 'g' decreases as we go up. (மேலே செல்லச் செல்ல 'g' குறைகிறது.)
$$ g_h = g \\left(1 - \\frac{2h}{R}\\right) \\quad (\\text{if } h \\ll R) $$
The exact formula is $g_h = g (\\frac{R}{R+h})^2$. (சரியான சூத்திரம் $g_h = g (\\frac{R}{R+h})^2$ ஆகும்.)
*   **With Depth (d) (ஆழத்தைப் பொறுத்து):** 'g' decreases as we go down into the Earth. (பூமிக்குக் கீழே செல்லச் செல்ல 'g' குறைகிறது.)
$$ g_d = g \\left(1 - \\frac{d}{R}\\right) $$
At the center of the Earth, d = R, so g becomes zero. (பூமியின் மையத்தில், d = R, எனவே g சுழியாகிறது.)
*   **Due to Rotation of Earth (பூமியின் சுழற்சியால்):** 'g' is maximum at the poles (ध्रुव) and minimum at the equator (நிலநடுக் கோடு). (துருவங்களில் 'g' பெருமமாகவும், நிலநடுக்கோட்டில் சிறுமமாகவும் இருக்கும்.)
$$ g' = g - R\\omega^2 \\cos^2\\lambda $$
where $\\lambda$ is the latitude. At the equator, $\\lambda=0^\\circ$; at the poles, $\\lambda=90^\\circ$. (இங்கு $\\lambda$ என்பது அட்சரேகை. நிலநடுக்கோட்டில், $\\lambda=0^\\circ$; துருவங்களில், $\\lambda=90^\\circ$.)

{{LIFT_ANIMATION}}

### 3. Gravitational Potential and Potential Energy (ஈர்ப்பு நிலை ஆற்றல் மற்றும் நிலை ஆற்றல்)
*   **Gravitational Potential (V) (ஈர்ப்பு நிலை ஆற்றல்):** The work done in bringing a unit mass from infinity to a point in the gravitational field. (ஈர்ப்புப் புலத்தில் உள்ள ஒரு புள்ளிக்கு முடிவிலியிலிருந்து ஓரலகு நிறையை கொண்டு வர செய்யப்படும் வேலை.)
$$ V = -\\frac{GM}{r} $$
*   **Gravitational Potential Energy (U) (ஈர்ப்பு நிலை ஆற்றல்):** The work done in bringing a given mass 'm' from infinity to a point in the gravitational field. It is the potential energy of the two-mass system. ('m' நிறையுள்ள ஒரு பொருளை முடிவிலியிலிருந்து ஈர்ப்புப் புலத்தில் உள்ள ஒரு புள்ளிக்கு கொண்டு வர செய்யப்படும் வேலை. இது இரண்டு-நிறை அமைப்பின் நிலை ஆற்றல் ஆகும்.)
$$ U = -\\frac{GMm}{r} $$
The negative sign indicates that the force is attractive. (எதிர் குறி விசை ஈர்ப்பு விசையாக இருப்பதைக் குறிக்கிறது.)

### 4. Satellites: Orbital and Escape Velocity (செயற்கைக்கோள்கள்: சுற்றுப்பாதை மற்றும் விடுபடு வேகம்)
*   **Orbital Velocity ($v_o$) (சுற்றுப்பாதை வேகம்):** The minimum velocity required to put a satellite into a circular orbit around a celestial body. The gravitational force provides the necessary centripetal force. (ஒரு செயற்கைக்கோளை ஒரு வான்பொருளைச் சுற்றி வட்டப் பாதையில் நிலைநிறுத்தத் தேவையான குறைந்தபட்ச வேகம். ஈர்ப்பு விசை தேவையான மையநோக்கு விசையை வழங்குகிறது.)
$$ \\frac{mv_o^2}{r} = \\frac{GMm}{r^2} \\implies v_o = \\sqrt{\\frac{GM}{r}} $$
For a satellite orbiting close to Earth's surface (r ≈ R), $v_o \\approx 7.92$ km/s. (பூமியின் மேற்பரப்பிற்கு அருகில் சுற்றும் ஒரு செயற்கைக்கோளுக்கு (r ≈ R), $v_o \\approx 7.92$ கிமீ/வி.)
*   **Escape Velocity ($v_e$) (விடுபடு வேகம்):** The minimum velocity with which a body must be projected from the surface of a celestial body so that it escapes its gravitational field permanently. This is achieved when the total energy (K.E. + P.E.) of the body is zero. (ஒரு பொருள் ஒரு வான்பொருளின் ஈர்ப்புப் புலத்திலிருந்து நிரந்தரமாகத் தப்பிக்க, அதன் மேற்பரப்பிலிருந்து எறியப்பட வேண்டிய குறைந்தபட்ச வேகம். பொருளின் மொத்த ஆற்றல் (K.E. + P.E.) சுழியாக இருக்கும்போது இது அடையப்படுகிறது.)
$$ \\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} $$
*   **Relation between $v_e$ and $v_o$**: $v_e = \\sqrt{2} v_o$. For Earth, $v_e \\approx 11.2$ km/s. ($v_e$ மற்றும் $v_o$ க்கு இடையிலான தொடர்பு: $v_e = \\sqrt{2} v_o$. பூமிக்கு, $v_e \\approx 11.2$ கிமீ/வி.)

### 5. Kepler's Laws of Planetary Motion (கோள் இயக்கத்திற்கான கெப்ளரின் விதிகள்)
1.  **Law of Orbits (சுற்றுப்பாதை விதி):** Every planet revolves around the Sun in an elliptical orbit with the Sun situated at one of the foci. (ஒவ்வொரு கோளும் சூரியனை ஒரு குவியத்தில் கொண்டு நீள்வட்டப் பாதையில் சுற்றி வருகிறது.)
2.  **Law of Areas (பரப்புகளின் விதி):** The line joining the Sun to a planet sweeps out equal areas in equal intervals of time. This implies that the areal velocity ($dA/dt$) is constant. This is a consequence of the **conservation of angular momentum**. (சூரியனையும் ஒரு கோளையும் இணைக்கும் கோடு சம கால இடைவெளிகளில் சம பரப்புகளைத் துடைக்கிறது. இதன் பொருள் பரப்பளவின் திசைவேகம் ($dA/dt$) மாறிலி ஆகும். இது **கோண உந்த அழிவின்மையின்** விளைவாகும்.)
3.  **Law of Periods (சுற்றுக் காலங்களின் விதி):** The square of the time period of revolution of a planet around the Sun is directly proportional to the cube of the semi-major axis of its elliptical orbit. (சூரியனைச் சுற்றி ஒரு கோளின் சுழற்சியின் சுற்றுக் காலத்தின் வர்க்கம் அதன் நீள்வட்டப் பாதையின் அரை-பெரும் அச்சின் முப்படிக்கு நேர்த்தகவில் இருக்கும்.)
$$ T^2 \\propto a^3 $$`,
    workedExamples: [
        {
            title: "NEET Level: Variation in 'g'",
            titleTamil: "நீட் நிலை: 'g' இல் மாறுபாடு",
            difficulty: 'Medium',
            problem: "At what height above the Earth's surface does the acceleration due to gravity become 36% of its value on the surface? (Radius of Earth R = 6400 km)",
            problemTamil: "பூமியின் மேற்பரப்பிற்கு மேலே எந்த உயரத்தில் புவியீர்ப்பு முடுக்கம் அதன் மேற்பரப்பு மதிப்பில் 36% ஆக மாறும்? (பூமியின் ஆரம் R = 6400 கிமீ)",
            solutionSteps: [
                { step: 1, explanation: "Relate the acceleration at height h ($g_h$) to the acceleration at the surface (g).", calculation: "g_h = 0.36g = (36/100)g" },
                { step: 2, explanation: "Use the exact formula for variation of g with height: g_h = g(R / (R+h))².", explanationTamil: "உயரத்துடன் g மாறுபடுவதற்கான சரியான சூத்திரத்தைப் பயன்படுத்தவும்: g_h = g(R / (R+h))²." },
                { step: 3, explanation: "Substitute the given relation and solve for h.", calculation: "(36/100)g = g(R / (R+h))²" },
                { step: 4, explanation: "Take the square root of both sides.", calculation: "√(36/100) = R / (R+h) => 6/10 = R / (R+h)" },
                { step: 5, explanation: "Cross-multiply and solve for h.", calculation: "6(R+h) = 10R => 6R + 6h = 10R => 6h = 4R => h = 4R/6 = 2R/3" },
                { step: 6, explanation: "Calculate the final height in kilometers.", calculation: "h = (2/3) * 6400 km ≈ 4266.67 km" }
            ],
            neetHack: "When g_h is given as a fraction or percentage of g, taking the square root often simplifies the calculation. Remember √(g_h/g) = R/(R+h).",
            neetHackTamil: "g_h என்பது g-இன் பின்னம் அல்லது சதவீதமாகக் கொடுக்கப்பட்டால், வர்க்கமூலம் எடுப்பது கணக்கீட்டை எளிதாக்குகிறது. √(g_h/g) = R/(R+h) என்பதை நினைவில் கொள்க."
        },
        {
            title: "JEE Level: Escape Velocity",
            titleTamil: "ஜே.இ.இ நிலை: விடுபடு வேகம்",
            difficulty: 'Medium',
            problem: "The escape velocity from the Earth's surface is 11.2 km/s. What would be the escape velocity from a planet having twice the radius and the same mean density as Earth?",
            problemTamil: "பூமியின் மேற்பரப்பிலிருந்து விடுபடு வேகம் 11.2 கிமீ/வி ஆகும். பூமியைப் போன்ற அதே சராசரி அடர்த்தியையும், இரு மடங்கு ஆரத்தையும் கொண்ட ஒரு கோளிலிருந்து விடுபடு வேகம் என்னவாக இருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Write the formula for escape velocity: v_e = √(2GM/R).", explanationTamil: "விடுபடு வேகத்திற்கான சூத்திரத்தை எழுதவும்: v_e = √(2GM/R)." },
                { step: 2, explanation: "Express mass M in terms of density (ρ) and radius (R). M = Volume × Density = (4/3)πR³ρ.", explanationTamil: "நிறை M-ஐ அடர்த்தி (ρ) மற்றும் ஆரம் (R) ஆகியவற்றின் அடிப்படையில் எழுதவும். M = பருமன் × அடர்த்தி = (4/3)πR³ρ." },
                { step: 3, explanation: "Substitute M back into the escape velocity formula to find its dependence on R and ρ.", calculation: "v_e = \\sqrt{\\frac{2G}{R} \\left(\\frac{4}{3}\\pi R^3 \\rho\\right)} = \\sqrt{\\frac{8\\pi G}{3} R^2 \\rho} = R \\sqrt{\\frac{8\\pi G\\rho}{3}}" },
                { step: 4, explanation: "From the derived relation, we see that v_e is directly proportional to R when density ρ is constant (v_e ∝ R).", explanationTamil: "பெறப்பட்ட தொடர்பிலிருந்து, அடர்த்தி ρ மாறிலியாக இருக்கும்போது v_e ஆரத்திற்கு நேர்த்தகவில் உள்ளது என்பதை நாம் காண்கிறோம் (v_e ∝ R)." },
                { step: 5, explanation: "Set up the ratio for the new planet (v_p) and Earth (v_e).", calculation: "\\frac{v_p}{v_e} = \\frac{R_p}{R_e}. Given R_p = 2R_e, so v_p = 2v_e" },
                { step: 6, explanation: "Calculate the final escape velocity.", calculation: "v_p = 2 \\times 11.2 \\text{ km/s} = 22.4 \\text{ km/s}" }
            ],
            neetHack: "Knowing the proportionality of v_e is key. v_e ∝ √(M/R) and v_e ∝ R√ρ. Depending on what is kept constant, you can quickly find the ratio.",
            neetHackTamil: "v_e-இன் விகிதாசாரத்தை அறிவது முக்கியம். v_e ∝ √(M/R) மற்றும் v_e ∝ R√ρ. எது மாறிலியாக வைக்கப்படுகிறது என்பதைப் பொறுத்து, நீங்கள் விரைவாக விகிதத்தைக் கண்டறியலாம்."
        },
        {
            title: "NEET Level: Kepler's Third Law",
            titleTamil: "நீட் நிலை: கெப்ளரின் மூன்றாம் விதி",
            difficulty: 'Easy',
            problem: "A satellite is orbiting the Earth at a height of 3R from the surface. What is its time period of revolution in terms of g and R?",
            problemTamil: "ஒரு செயற்கைக்கோள் பூமியின் மேற்பரப்பிலிருந்து 3R உயரத்தில் பூமியைச் சுற்றி வருகிறது. அதன் சுழற்சி காலத்தை g மற்றும் R ஆகியவற்றின் அடிப்படையில் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Apply Kepler's third law as modified by Newton: T² = (4π²/GM)r³. Here, the radius of the orbit 'r' is the distance from the center of the Earth.", explanationTamil: "நியூட்டனால் மாற்றியமைக்கப்பட்ட கெப்ளரின் மூன்றாம் விதியைப் பயன்படுத்தவும்: T² = (4π²/GM)r³. இங்கு, சுற்றுப்பாதை ஆரம் 'r' என்பது பூமியின் மையத்திலிருந்து உள்ள தூரம்." },
                { step: 2, explanation: "Calculate the orbital radius r. r = R (radius of Earth) + h (height) = R + 3R = 4R.", explanationTamil: "சுற்றுப்பாதை ஆரம் r-ஐக் கணக்கிடவும். r = R (பூமியின் ஆரம்) + h (உயரம்) = R + 3R = 4R." },
                { step: 3, explanation: "We know that g = GM/R², so GM = gR². Substitute this into the time period formula.", explanationTamil: "g = GM/R² என நமக்குத் தெரியும், எனவே GM = gR². இதை சுழற்சி கால சூத்திரத்தில் பிரதியிடவும்." },
                { step: 4, explanation: "Substitute the values of r and GM.", calculation: "T^2 = \\frac{4\\pi^2}{gR^2} (4R)^3 = \\frac{4\\pi^2}{gR^2} (64R^3) = \\frac{256\\pi^2 R}{g}" },
                { step: 5, explanation: "Take the square root to find the final expression for T.", calculation: "T = \\sqrt{\\frac{256\\pi^2 R}{g}} = 16\\pi \\sqrt{\\frac{R}{g}}" }
            ],
            neetHack: "Many problems in gravitation can be solved by cleverly substituting g = GM/R² to eliminate G and M, which are often not given.",
            neetHackTamil: "ஈர்ப்பியல் தொடர்பான பல கணக்குகளை, g = GM/R² ஐப் பிரதியிட்டு G மற்றும் M ஐ நீக்குவதன் மூலம் தீர்க்க முடியும், ஏனெனில் அவை பெரும்பாலும் கொடுக்கப்படுவதில்லை."
        },
        {
            title: "JEE Level: Gravitational Potential Energy",
            titleTamil: "ஜே.இ.இ நிலை: ஈர்ப்பு நிலை ஆற்றல்",
            difficulty: 'Medium',
            problem: "A satellite of mass m is orbiting the Earth in a circle of radius r. What is the total energy of the satellite?",
            problemTamil: "m நிறையுள்ள ஒரு செயற்கைக்கோள் r ஆரம் கொண்ட ஒரு வட்டத்தில் பூமியைச் சுற்றி வருகிறது. செயற்கைக்கோளின் மொத்த ஆற்றல் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "The total energy (E) is the sum of its kinetic energy (K.E.) and potential energy (P.E.).", calculation: "E = K.E. + P.E." },
                { step: 2, explanation: "The potential energy of the satellite at a distance r from the center of the Earth is U = -GMm/r.", explanationTamil: "பூமியின் மையத்திலிருந்து r தொலைவில் உள்ள செயற்கைக்கோளின் நிலை ஆற்றல் U = -GMm/r ஆகும்." },
                { step: 3, explanation: "The kinetic energy is K.E. = (1/2)mv². For a stable orbit, the gravitational force provides the centripetal force: mv²/r = GMm/r². So, mv² = GMm/r.", explanationTamil: "இயக்க ஆற்றல் K.E. = (1/2)mv². ஒரு நிலையான சுற்றுப்பாதைக்கு, ஈர்ப்பு விசை மையநோக்கு விசையை வழங்குகிறது: mv²/r = GMm/r². எனவே, mv² = GMm/r." },
                { step: 4, explanation: "Substitute the expression for mv² into the kinetic energy formula.", calculation: "K.E. = \\frac{1}{2} \\left( \\frac{GMm}{r} \\right) = \\frac{GMm}{2r}" },
                { step: 5, explanation: "Add the kinetic and potential energies to find the total energy.", calculation: "E = \\frac{GMm}{2r} + \\left(-\\frac{GMm}{r}\\right) = -\\frac{GMm}{2r}" }
            ],
            neetHack: "For any satellite in a circular orbit, remember these simple energy relations: K.E. = -P.E./2 and Total Energy E = P.E./2 = -K.E. The total energy is always negative, indicating a bound system.",
            neetHackTamil: "ஒரு வட்ட சுற்றுப்பாதையில் உள்ள எந்த செயற்கைக்கோளுக்கும், இந்த எளிய ஆற்றல் தொடர்புகளை நினைவில் கொள்ளுங்கள்: K.E. = -P.E./2 மற்றும் மொத்த ஆற்றல் E = P.E./2 = -K.E. மொத்த ஆற்றல் எப்போதும் எதிர்மறையாக இருக்கும், இது ஒரு பிணைக்கப்பட்ட அமைப்பைக் குறிக்கிறது."
        },
        {
            title: "NEET Level: Comparing g on two planets",
            titleTamil: "நீட் நிலை: இரண்டு கோள்களில் g-ஐ ஒப்பிடுதல்",
            difficulty: 'Easy',
            problem: "The mass of planet A is 1/4th that of planet B, and its radius is 1/2 that of planet B. If the acceleration due to gravity on planet B is gB, what is it on planet A (gA)?",
            solutionSteps: [
                { step: 1, explanation: "Write the formula for acceleration due to gravity: g = GM/R².", explanationTamil: "புவியீர்ப்பு முடுக்கத்திற்கான சூத்திரத்தை எழுதவும்: g = GM/R²." },
                { step: 2, explanation: "Write the expressions for gA and gB using the given information: MA = MB/4 and RA = RB/2.", calculation: "g_A = \\frac{G M_A}{R_A^2} = \\frac{G (M_B/4)}{(R_B/2)^2}" },
                { step: 3, explanation: "Simplify the expression for gA.", calculation: "g_A = \\frac{G M_B/4}{R_B^2/4} = \\frac{G M_B}{R_B^2}" },
                { step: 4, explanation: "Recognize that the simplified expression is the formula for gB.", calculation: "g_A = g_B" }
            ],
            neetHack: "When comparing quantities, setting up a ratio is often the fastest method. gA/gB = (MA/MB) * (RB/RA)². This immediately gives the answer.",
            neetHackTamil: "அளவுகளை ஒப்பிடும்போது, ஒரு விகிதத்தை அமைப்பது பெரும்பாலும் வேகமான முறையாகும். gA/gB = (MA/MB) * (RB/RA)². இது உடனடியாக விடையைத் தரும்."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: '\\vec{F} = G \\frac{m_1 m_2}{r^2} \\hat{r}',
                description: 'Newtons Law of Universal Gravitation'
            },
            {
                formula: 'g = \\frac{GM}{R^2}',
                description: 'Acceleration due to gravity on Earths surface'
            },
            {
                formula: 'v_e = \\sqrt{2GM/R} = \\sqrt{2gR}',
                description: 'Escape Velocity'
            },
            {
                formula: 'T^2 \\propto a^3',
                description: 'Keplers Third Law'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Gravity is a universal, attractive force that follows an inverse square law.",
        "The value of 'g' decreases with both altitude and depth.",
        "For a satellite to escape Earth's gravity, it must be given a total energy of zero or more.",
        "Kepler's laws describe planetary motion, which is a direct result of the gravitational force."
    ],
    mnemonics: [
        { text: "Remember `g` is greatest on the surface. Going up or down, it always goes down.", tamil: "g-ன் மதிப்பு தரைமட்டத்தில் தான் அதிகம். மேலே சென்றாலும், கீழே சென்றாலும் அது குறையும்." }
    ],
    neetTips: [
        { text: "Problems involving ratios of g, v_e, or T for different planets are very common. Master the proportionality relationships.", tamil: "வெவ்வேறு கோள்களுக்கு g, v_e, அல்லது T விகிதங்கள் சம்பந்தப்பட்ட கணக்குகள் மிகவும் பொதுவானவை. விகிதாசார உறவுகளை நன்கு புரிந்து கொள்ளுங்கள்." },
        { text: "Work-energy theorem is often the easiest way to solve problems involving change in speed of satellites or objects moving between points in a gravitational field.", tamil: "ஈர்ப்புப் புலத்தில் புள்ளிகளுக்கு இடையே நகரும் செயற்கைக்கோள்கள் அல்லது பொருட்களின் வேக மாற்றத்தைக் கணக்கிட வேலை-ஆற்றல் தேற்றம் பெரும்பாலும் எளிதான வழியாகும்." }
    ],
    mcqs: [
        {
            question: "The value of acceleration due to gravity (g) is maximum at the:",
            options: ["A. Equator", "B. Poles", "C. Center of the Earth", "D. Tropic of Cancer"],
            answer: "B. Poles",
            explanation: "Due to the Earth's rotation, g is minimum at the equator and maximum at the poles. The formula is g' = g - Rω²cos²λ.",
            neetFrequency: 4
        },
        {
            question: "If the distance between two masses is doubled, the gravitational force between them becomes:",
            options: ["A. 1/4 times", "B. 4 times", "C. 1/2 times", "D. 2 times"],
            answer: "A. 1/4 times",
            explanation: "Gravitational force is inversely proportional to the square of the distance (F ∝ 1/r²). If r becomes 2r, F becomes 1/(2r)² = 1/4r², so it becomes 1/4 times.",
            neetFrequency: 5
        },
        {
            question: "Escape velocity from the surface of the earth is approximately:",
            options: ["A. 7.92 km/s", "B. 11.2 km/s", "C. 9.8 m/s²", "D. 3 x 10⁸ m/s"],
            answer: "B. 11.2 km/s",
            explanation: "The escape velocity from Earth is a standard value, calculated as vₑ = √(2GM/R) ≈ 11.2 km/s.",
            neetFrequency: 3
        },
        {
            question: "Kepler's second law (law of areas) is a consequence of the conservation of:",
            options: ["A. Energy", "B. Linear Momentum", "C. Angular Momentum", "D. Mass"],
            answer: "C. Angular Momentum",
            explanation: "The law of areas, which states that a planet sweeps equal areas in equal times, is a direct consequence of the conservation of angular momentum for a central force like gravity.",
            neetFrequency: 4
        },
        {
            question: "The total energy of a satellite orbiting the Earth is:",
            options: ["A. Always positive", "B. Always negative", "C. Always zero", "D. Can be positive or negative"],
            answer: "B. Always negative",
            explanation: "The total energy of a bound system, like a satellite in orbit, is always negative. E = -GMm/(2r). A positive or zero total energy would mean the satellite escapes the orbit.",
            neetFrequency: 3
        },
        {
            question: "What happens to the acceleration due to gravity as you go down into a mine?",
            options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases, then decreases"],
            answer: "B. Decreases",
            explanation: "g at a depth d is given by g_d = g(1 - d/R). As depth d increases, g_d decreases, becoming zero at the center of the Earth.",
            neetFrequency: 4
        },
        {
            question: "The time period of a geostationary satellite is:",
            options: ["A. 12 hours", "B. 24 hours", "C. 365 days", "D. 30 days"],
            answer: "B. 24 hours",
            explanation: "A geostationary satellite has a time period equal to the Earth's rotational period, so it appears stationary from the ground. This period is 24 hours.",
            neetFrequency: 2
        },
        {
            question: "The relation between escape velocity (vₑ) and orbital velocity (vₒ) for a satellite orbiting close to the Earth's surface is:",
            options: ["A. vₑ = vₒ", "B. vₑ = 2vₒ", "C. vₑ = vₒ/√2", "D. vₑ = √2 vₒ"],
            answer: "D. vₑ = √2 vₒ",
            explanation: "vₒ = √(GM/R) and vₑ = √(2GM/R). The ratio vₑ/vₒ = √2.",
            neetFrequency: 5
        },
        {
            question: "If the Earth were to stop rotating, the value of 'g' at the equator would:",
            options: ["A. Increase", "B. Decrease", "C. Remain the same", "D. Become zero"],
            answer: "A. Increase",
            explanation: "The value of g is reduced by the centrifugal effect Rω². If the Earth stops rotating (ω=0), this negative term disappears, and g would increase to its non-rotational value.",
            neetFrequency: 3
        },
        {
            question: "Two spheres of masses m and M are situated in air and gravitational force between them is F. The space around the masses is now filled with a liquid of specific gravity 3. The gravitational force will now be:",
            options: ["A. 3F", "B. F", "C. F/3", "D. F/9"],
            answer: "B. F",
            explanation: "The gravitational force between two bodies does not depend on the medium between them. The value of the universal gravitational constant G is the same everywhere.",
            neetFrequency: 2
        },
        {
            question: "The weight of a body at the center of the Earth is:",
            options: ["A. Maximum", "B. Minimum", "C. Zero", "D. Same as on the surface"],
            answer: "C. Zero",
            explanation: "At the center of the Earth, the acceleration due to gravity 'g' is zero. Since Weight = mg, the weight is also zero.",
            neetFrequency: 4
        },
        {
            question: "According to Kepler, planets move in:",
            options: ["A. Circular orbits", "B. Elliptical orbits", "C. Parabolic paths", "D. Hyperbolic paths"],
            answer: "B. Elliptical orbits",
            explanation: "Kepler's first law states that all planets revolve around the Sun in elliptical orbits with the Sun at one of the foci.",
            neetFrequency: 1
        },
        {
            question: "The orbital speed of Jupiter is:",
            options: ["A. Greater than the orbital speed of Earth", "B. Less than the orbital speed of Earth", "C. Equal to the orbital speed of Earth", "D. Zero"],
            answer: "B. Less than the orbital speed of Earth",
            explanation: "Orbital speed vₒ = √(GM/r). Since Jupiter is farther from the Sun than Earth (r is larger), its orbital speed is smaller.",
            neetFrequency: 2
        },
        {
            question: "A body of mass m is placed on the Earth's surface. It is taken from the Earth's surface to a height h = 3R. The change in gravitational potential energy is:",
            options: ["A. mgR", "B. (2/3)mgR", "C. (3/4)mgR", "D. (1/2)mgR"],
            answer: "C. (3/4)mgR",
            explanation: "Initial P.E. = -GMm/R. Final P.E. = -GMm/(R+3R) = -GMm/4R. Change in P.E. = Final - Initial = -GMm/4R - (-GMm/R) = (3/4)GMm/R. Since g = GM/R², this is (3/4)mgR.",
            neetFrequency: 3
        },
        {
            question: "The gravitational force is a:",
            options: ["A. Conservative force", "B. Non-conservative force", "C. Contact force", "D. Short-range force"],
            answer: "A. Conservative force",
            explanation: "The work done by the gravitational force is independent of the path taken, which is the definition of a conservative force.",
            neetFrequency: 2
        },
        { question: "If the radius of the earth shrinks by 1% (mass remaining same), the acceleration due to gravity would:", options: ["A. Increase by 1%", "B. Increase by 2%", "C. Decrease by 1%", "D. Decrease by 2%"], answer: "B. Increase by 2%", explanation: "g = GM/R². Taking logs and differentiating, Δg/g = -2(ΔR/R). A 1% decrease in R (-1%) leads to a (-2)*(-1%) = +2% increase in g.", neetFrequency: 4 },
        { question: "The gravitational potential at a point is -20 J/kg. The work done in bringing a mass of 2 kg from infinity to that point is:", options: ["A. -10 J", "B. -20 J", "C. -40 J", "D. 40 J"], answer: "C. -40 J", explanation: "Potential V = W/m. So, Work W = V * m = -20 J/kg * 2 kg = -40 J.", neetFrequency: 3 },
        { question: "A satellite is moving in a circular orbit with speed vₒ. To make it escape, its speed must be increased by:", options: ["A. 100%", "B. 50%", "C. 41.4%", "D. 73.2%"], answer: "C. 41.4%", explanation: "The escape velocity vₑ = √2 * vₒ ≈ 1.414 vₒ. The increase required is vₑ - vₒ = (√2 - 1)vₒ ≈ 0.414vₒ, which is a 41.4% increase.", neetFrequency: 2 },
        { question: "The value of G depends on:", options: ["A. The mass of the objects", "B. The distance between the objects", "C. The medium between the objects", "D. None of the above"], answer: "D. None of the above", explanation: "G is the Universal Gravitational Constant. Its value is the same throughout the universe and does not depend on the masses, distance, or medium.", neetFrequency: 1 },
        { question: "Which of the following graphs represents the variation of g with distance r from the center of the Earth?", options: ["A. A straight line through the origin", "B. A parabola", "C. A hyperbola", "D. Increases linearly to R, then decreases as 1/r²"], answer: "D. Increases linearly to R, then decreases as 1/r²", explanation: "Inside the Earth, g ∝ r (a straight line). Outside the Earth, g ∝ 1/r² (a curve).", neetFrequency: 4 },
        { question: "The kinetic energy of a satellite orbiting close to Earth is E. The additional kinetic energy required for it to escape is:", options: ["A. E", "B. 2E", "C. E/2", "D. √2 E"], answer: "A. E", explanation: "Total energy E_total = -K.E. To escape, the total energy must be zero. So, we must add energy equal to the magnitude of the total energy, which is equal to its initial kinetic energy, E.", neetFrequency: 3 },
        { question: "A planet's period of revolution is T and its distance from the sun is r. Then T² is proportional to:", options: ["A. r", "B. r²", "C. r³", "D. r⁻¹"], answer: "C. r³", explanation: "This is a direct statement of Kepler's Third Law of Periods.", neetFrequency: 5 },
        { question: "Weightlessness experienced while orbiting the earth in a spaceship is the result of:", options: ["A. Zero gravity", "B. Zero acceleration", "C. Being in a state of free fall", "D. A very large distance from Earth"], answer: "C. Being in a state of free fall", explanation: "The spaceship and everything in it are constantly falling towards the Earth, but have enough tangential velocity to keep missing it. This state of continuous free fall results in the sensation of weightlessness.", neetFrequency: 2 },
        { question: "The force of gravitation is:", options: ["A. Repulsive", "B. Attractive", "C. Both repulsive and attractive", "D. Neither repulsive nor attractive"], answer: "B. Attractive", explanation: "Gravitational force as described by Newton's law is always attractive.", neetFrequency: 1 },
        { question: "The dimensional formula for the universal gravitational constant G is:", options: ["A. M⁻¹L³T⁻²", "B. M⁻¹L²T⁻³", "C. ML²T⁻²", "D. MLT⁻¹"], answer: "A. M⁻¹L³T⁻²", explanation: "From F = Gm₁m₂/r², G = Fr²/(m₁m₂). Dimensions are [MLT⁻²][L²]/[M²] = M⁻¹L³T⁻².", neetFrequency: 3 }
    ],
    assertionReasons: [
        {
            assertion: "The force of gravity on a satellite in orbit is zero.",
            reason: "The satellite is in a state of free fall.",
            answer: "D",
            explanation: "Assertion is false. Gravity is the centripetal force that keeps the satellite in orbit. The reason is true; the sensation of weightlessness is due to free fall."
        },
        {
            assertion: "If an object is taken from the equator to the poles, its weight increases.",
            reason: "The value of g is higher at the poles than at the equator.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. The centrifugal effect is zero at the poles, making g maximum."
        },
        {
            assertion: "The square of the period of revolution of a planet is proportional to the cube of the semi-major axis of its orbit.",
            reason: "This is Kepler's third law of planetary motion.",
            answer: "A",
            explanation: "Both assertion and reason are true statements, and the reason is the correct identification of the law stated in the assertion."
        },
        {
            assertion: "The gravitational force between two bodies is independent of the nature of the intervening medium.",
            reason: "G is a universal constant.",
            answer: "A",
            explanation: "Both statements are true and the reason correctly explains the assertion. Unlike electrostatic force, gravitational force is not affected by the medium.",
            neetFrequency: 2
        },
        {
            assertion: "The total energy of a satellite orbiting the Earth is negative.",
            reason: "It is a bound system.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true. A negative total energy signifies that the satellite does not have enough energy to escape the Earth's gravitational pull, hence it is a bound system. The reason correctly explains the assertion.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Kepler's First Law", "(b) Kepler's Second Law", "(c) Kepler's Third Law", "(d) Newton's Law of Gravitation"],
            column2: ["(p) Law of Periods (T² ∝ r³)", "(q) Conservation of Angular Momentum", "(r) Law of Orbits (Elliptical)", "(s) Inverse Square Law (F ∝ 1/r²)"],
            answer: "a-r, b-q, c-p, d-s",
            explanation: "Matching the laws with their descriptions or consequences."
        },
        {
            column1: ["(a) Escape Velocity", "(b) Orbital Velocity", "(c) g at height h<<R", "(d) g at depth d"],
            column2: ["(p) g(1-d/R)", "(q) √(2GM/R)", "(r) g(1-2h/R)", "(s) √(GM/R)"],
            answer: "a-q, b-s, c-r, d-p",
            explanation: "Matching the physical quantities with their approximate or exact formulas."
        },
        {
            column1: ["(a) Gravitational Potential", "(b) Gravitational Field Intensity", "(c) Gravitational Force", "(d) Gravitational Constant G"],
            column2: ["(p) Vector, [LT⁻²]", "(q) Scalar, [L²T⁻²]", "(r) Vector, [MLT⁻²]", "(s) Scalar, [M⁻¹L³T⁻²]"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Matching the quantities with their nature (scalar/vector) and dimensional formula."
        },
        {
            column1: ["(a) Total Energy of satellite", "(b) Potential Energy of satellite", "(c) Kinetic Energy of satellite", "(d) Binding Energy of satellite"],
            column2: ["(p) -GMm/r", "(q) GMm/2r", "(r) -GMm/2r"],
            answer: "a-r, b-p, c-q, d-q",
            explanation: "Matching the energies of a satellite in orbit. Binding energy is the energy required to unbind the system, which is the magnitude of the total energy, hence it's +GMm/2r."
        },
        {
            column1: ["(a) Center of Earth", "(b) Earth's surface", "(c) Geostationary orbit", "(d) Moon's orbit"],
            column2: ["(p) g = 9.8 m/s²", "(q) g = 0", "(r) g ≈ 0.22 m/s²", "(s) g ≈ 0.0027 m/s²"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Matching locations with the approximate value of acceleration due to gravity."
        }
    ]
};
