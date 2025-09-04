
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
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
