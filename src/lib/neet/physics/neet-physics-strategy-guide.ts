
import type { NeetModule } from '@/lib/types';

interface StrategyPoint {
  point: string;
  explanation: string;
  explanationTamil: string;
}

interface StrategySection {
  title: string;
  titleTamil: string;
  type: 'mistake' | 'trick' | 'rare';
  points: StrategyPoint[];
}

interface ChapterStrategy {
  chapterName: string;
  chapterNameTamil: string;
  sections: StrategySection[];
}

interface StrategyGuide {
  [key: string]: {
    title: string;
    titleTamil: string;
    chapters: ChapterStrategy[];
  }
}

export const strategyGuideContent: StrategyGuide = {
  mechanics: {
    title: "Mechanics",
    titleTamil: "இயக்கவியல்",
    chapters: [
      {
        chapterName: 'Units, Dimensions & Errors',
        chapterNameTamil: 'அலகுகள், பரிமாணங்கள் மற்றும் பிழைகள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Dimensional Analysis Limitations',
                explanation: '**Mistake:** Thinking dimensional analysis can solve everything.\n\n**How to Avoid:** Remember its limits. It cannot determine dimensionless constants (like 2, π, or 1/2 in formulas), and it cannot be used for equations involving trigonometric or exponential functions. It only checks for consistency, not absolute correctness.',
                explanationTamil: '**தவறு:** பரிமாணப் பகுப்பாய்வு அனைத்தையும் தீர்க்கும் என்று நினைப்பது.\n\n**தவிர்ப்பது எப்படி:** அதன் வரம்புகளை நினைவில் கொள்க. அது பரிமாணமற்ற மாறிலிகளை (சூத்திரங்களில் 2, π, அல்லது 1/2 போன்றவை) தீர்மானிக்க முடியாது, மேலும் முக்கோணவியல் அல்லது அடுக்குக்குறிச் சார்புகளை உள்ளடக்கிய சமன்பாடுகளுக்குப் பயன்படுத்த முடியாது. இது நிலைத்தன்மையை மட்டுமே சரிபார்க்கிறது, முழுமையான சரியை அல்ல.',
              },
              {
                point: 'Error Propagation Rules',
                explanation: '**Mistake:** Subtracting errors when quantities are subtracted or divided.\n\n**How to Avoid:** **Errors always add up!** Whether the formula is $Z = A + B$ or $Z = A - B$, the absolute error is $\\Delta Z = \\Delta A + \\Delta B$. For $Z = A/B$ or $Z=A \\times B$, the *relative* errors add: $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$. Errors never cancel out.',
                explanationTamil: '**தவறு:** அளவுகள் கழிக்கப்படும்போது அல்லது வகுக்கப்படும்போது பிழைகளைக் கழித்தல்.\n\n**தவிர்ப்பது எப்படி:** **பிழைகள் எப்போதும் கூட்டப்படும்!** சூத்திரம் $Z = A + B$ அல்லது $Z = A - B$ ஆக இருந்தாலும், தனிப்பிழை $\\Delta Z = \\Delta A + \\Delta B$ ஆகும். $Z = A/B$ அல்லது $Z=A \\times B$ க்கு, *சார்பு* பிழைகள் கூட்டப்படும்: $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$. பிழைகள் ஒருபோதும் நீக்கப்படாது.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Motion in a Straight Line',
        chapterNameTamil: 'நேர்கோட்டு இயக்கம்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Average Speed and Average Velocity',
                explanation: '**Mistake:** Using total displacement to calculate average speed.\n\n**How to Avoid:** Remember: **Average Speed = (Total Distance) / (Total Time)**. **Average Velocity = (Total Displacement) / (Total Time)**. They are only the same if the object moves in a straight line without changing direction.',
                explanationTamil: '**தவறு:** சராசரி வேகத்தைக் கணக்கிட மொத்த இடப்பெயர்ச்சியப் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** நினைவில் கொள்க: **சராசரி வேகம் = (மொத்த தூரம்) / (மொத்த நேரம்)**. **சராசரி திசைவேகம் = (மொத்த இடப்பெயர்ச்சி) / (மொத்த நேரம்)**. பொருள் திசை மாறாமல் ஒரு நேர்க்கோட்டில் சென்றால் மட்டுமே இவை சமமாக இருக்கும்.',
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "Harmonic Mean for Average Speed",
                explanation: "If a body covers the first half of the distance with speed v₁ and the second half with speed v₂, the average speed is the harmonic mean, not the arithmetic mean. **Average Speed = 2v₁v₂ / (v₁ + v₂)**. This is a very common NEET question pattern.",
                explanationTamil: "ஒரு பொருள் முதல் பாதி தூரத்தை v₁ வேகத்திலும், இரண்டாம் பாதி தூரத்தை v₂ வேகத்திலும் கடந்தால், சராசரி வேகம் இசைச் சராசரி ஆகும், கூட்டுச் சராசரி அல்ல. **சராசரி வேகம் = 2v₁v₂ / (v₁ + v₂)**. இது மிகவும் பொதுவான நீட் கேள்வி முறை.",
              }
            ]
          }
        ],
      },
      {
        chapterName: 'Motion in a Plane',
        chapterNameTamil: 'தளத்தில் இயக்கம்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Forgetting Independence of Motion",
                explanation: "**Mistake:** Mixing up horizontal and vertical components in projectile motion. For example, using gravity in horizontal calculations.\n\n**How to Avoid:** Always treat the x (horizontal) and y (vertical) motions completely separately. Horizontal motion has **zero acceleration**. Vertical motion has **constant acceleration g**. Time is the only quantity that connects them.",
                explanationTamil: "**தவறு:** எறியியக்க இயக்கத்தில் கிடைமட்ட மற்றும் செங்குத்து கூறுகளைக் குழப்பிக் கொள்வது. உதாரணமாக, கிடைமட்ட கணக்கீடுகளில் ஈர்ப்பைப் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** எப்போதும் x (கிடைமட்ட) மற்றும் y (செங்குத்து) இயக்கங்களை முற்றிலும் தனித்தனியாகக் கையாளவும். கிடைமட்ட இயக்கத்திற்கு **சுழி முடுக்கம்**. செங்குத்து இயக்கத்திற்கு **மாறிலி முடுக்கம் g**. நேரம் மட்டுமே அவற்றை இணைக்கும் ஒரே அளவு.",
              },
            ]
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "Complementary Angles in Projectile Motion",
                explanation: "The horizontal range of a projectile is the same for two angles of projection that are complementary (e.g., 30° and 60°, or 15° and 75°). If a question asks for a ratio of ranges for complementary angles, the answer is always 1:1.",
                explanationTamil: "ஒரு எறிபொருளின் கிடைத்தள நெடுக்கம், நிரப்பு கோணங்களாக உள்ள இரண்டு எறிகோணங்களுக்கு (எ.கா., 30° மற்றும் 60°, அல்லது 15° மற்றும் 75°) சமமாக இருக்கும். நிரப்பு கோணங்களுக்கான நெடுக்கங்களின் விகிதத்தைக் கேட்கும் கேள்விக்கு, விடை எப்போதும் 1:1 ஆகும்.",
              }
            ]
          }
        ]
      },
      {
        chapterName: 'Laws of Motion',
        chapterNameTamil: 'இயக்க விதிகள்',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Apparent Weight in a Lift',
                explanation: 'Instead of drawing FBDs every time, remember the formula for apparent weight (Normal Reaction N): **$N = m(g \\pm a)$**. Use **+a** for upward acceleration and **-a** for downward acceleration. This is a huge time-saver.',
                explanationTamil: 'ஒவ்வொரு முறையும் FBD வரைவதற்குப் பதிலாக, தோற்ற எடைக்கான (செங்குத்து விசை N) சூத்திரத்தை நினைவில் கொள்க: **$N = m(g \\pm a)$**. மேல்நோக்கிய முடுக்கத்திற்கு **+a** ஐயும், கீழ்நோக்கிய முடுக்கத்திற்கு **-a** ஐயும் பயன்படுத்தவும். இது ஒரு பெரிய நேர சேமிப்பாகும்.',
              },
               {
                point: 'Atwood Machine Shortcut',
                explanation: 'For a simple Atwood machine with masses m₁ and m₂, the acceleration is always **$a = \\frac{\\text{(Difference of masses)}}{\\text{(Sum of masses)}} g$**. The tension is **$T = \\frac{\\text{2 * (Product of masses)}}{\\text{(Sum of masses)}} g$**. Memorizing these two formulas bypasses solving simultaneous equations.',
                explanationTamil: 'ஒரு எளிய அட்வுட் இயந்திரத்திற்கு, முடுக்கம் எப்போதும் **$a = \\frac{\\text{(நிறைகளின் வேறுபாடு)}}{\\text{(நிறைகளின் கூடுதல்)}} g$** ஆகும். இழுவிசை **$T = \\frac{\\text{2 * (நிறைகளின் பெருக்கற்பலன்)}}{\\text{(நிறைகளின் கூடுதல்)}} g$** ஆகும். இந்த இரண்டு சூத்திரங்களையும் மனப்பாடம் செய்வது ஒரே நேரத்தில் சமன்பாடுகளைத் தீர்ப்பதைத் தவிர்க்கிறது.',
              },
            ],
          },
        ],
      },
       {
        chapterName: 'Work, Energy and Power',
        chapterNameTamil: 'வேலை, ஆற்றல் மற்றும் திறன்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Work-Energy Theorem vs Conservation of Energy",
                explanation: "**Mistake:** Confusing when to use which principle.\n\n**How to Avoid:** The **Work-Energy Theorem ($W_{net} = \\Delta K.E.$)** is *always* true, it includes work done by all forces (conservative and non-conservative). The **Conservation of Mechanical Energy ($K_i + U_i = K_f + U_f$)** is a special case that is true *only when* all forces doing work are conservative (like gravity and spring force). If friction is present, you must use the Work-Energy Theorem.",
                explanationTamil: "**தவறு:** எந்தக் கொள்கையை எப்போது பயன்படுத்த வேண்டும் என்று குழப்பிக் கொள்வது.\n\n**தவிர்ப்பது எப்படி:** **வேலை-ஆற்றல் தேற்றம் ($W_{net} = \\Delta K.E.$)** *எப்போதும்* உண்மை, இது அனைத்து விசைகளாலும் (ஆற்றல் மாற்றா மற்றும் ஆற்றல் மாற்றும்) செய்யப்பட்ட வேலையை உள்ளடக்கியது. **இயந்திர ஆற்றல் அழிவின்மை ($K_i + U_i = K_f + U_f$)** என்பது வேலை செய்யும் அனைத்து விசைகளும் ஆற்றல் மாற்றா விசைகளாக (ஈர்ப்பு விசை மற்றும் சுருள்வில் விசை போன்றவை) இருக்கும்போது *மட்டுமே* உண்மையான ஒரு சிறப்பு நிகழ்வு ஆகும். உராய்வு இருந்தால், நீங்கள் வேலை-ஆற்றல் தேற்றத்தைப் பயன்படுத்த வேண்டும்.",
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Comparing K.E. and Momentum',
                explanation: 'Use the relation $K = p^2 / 2m$. If two bodies have the same momentum (p), the lighter body (smaller m) has higher kinetic energy. If they have the same kinetic energy (K), the heavier body (larger m) has higher momentum. This is a very common conceptual question.',
                explanationTamil: 'K = p²/2m என்ற தொடர்பைப் பயன்படுத்தவும். இரண்டு பொருட்கள் ஒரே உந்தத்தைக் (p) கொண்டிருந்தால், இலகுவான பொருள் (சிறிய m) அதிக இயக்க ஆற்றலைக் கொண்டிருக்கும். அவை ஒரே இயக்க ஆற்றலைக் (K) கொண்டிருந்தால், கனமான பொருள் (பெரிய m) அதிக உந்தத்தைக் கொண்டிருக்கும். இது மிகவும் பொதுவான கருத்தியல் கேள்வி.',
              },
            ],
          },
        ],
      },
       {
        chapterName: 'Rotational Motion',
        chapterNameTamil: 'சுழற்சி இயக்கம்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Confusing Torque and Force",
                explanation: "**Mistake:** Thinking that if the net force on a body is zero, the net torque must also be zero. \n\n**How to Avoid:** This is not true. A **couple** (two equal and opposite forces not acting along the same line) produces a net force of zero but a non-zero net torque. Equilibrium requires *both* net force and net torque to be zero.",
                explanationTamil: "**தவறு:** ஒரு பொருளின் மீதுள்ள நிகர விசை சுழியாக இருந்தால், நிகர திருப்புவிசையும் சுழியாக இருக்க வேண்டும் என்று நினைப்பது. \n\n**தவிர்ப்பது எப்படி:** இது உண்மையல்ல. ஒரு **இரட்டை** (ஒரே கோட்டில் செயல்படாத இரண்டு சமமான மற்றும் எதிர் விசைகள்) சுழி நிகர விசையை உருவாக்கும் ஆனால் சுழியற்ற நிகர திருப்புவிசையை உருவாக்கும். சமநிலைக்கு நிகர விசை மற்றும் நிகர திருப்புவிசை ஆகிய இரண்டும் சுழியாக இருக்க வேண்டும்.",
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Velocity of a Rolling Body',
                explanation: "The velocity of a body rolling down an incline from height 'h' can be quickly found using:\n$$v = \\sqrt{\\frac{2gh}{1 + k^2/R^2}}$$\nMemorize the term $k²/R²$ for common shapes: Ring (1), Disc (1/2), Solid Sphere (2/5), Hollow Sphere (2/3). The object with the smallest $k²/R²$ (Solid Sphere) will be the fastest.",
                explanationTamil: "'h' உயரத்திலிருந்து ஒரு சாய்தளத்தில் உருண்டு வரும் ஒரு பொருளின் வேகத்தை விரைவாகக் கண்டுபிடிக்க இதைப் பயன்படுத்தவும்:\n$$v = \\sqrt{\\frac{2gh}{1 + k^2/R^2}}$$\nபொதுவான வடிவங்களுக்கு $k²/R²$ என்ற பதத்தை மனப்பாடம் செய்யுங்கள்: வளையம் (1), வட்டு (1/2), திண்மக் கோளம் (2/5), வெற்றுக் கோளம் (2/3). மிகச்சிறிய $k²/R²$ கொண்ட பொருள் (திண்மக் கோளம்) வேகமாக இருக்கும்.",
              },
            ],
          },
        ],
      },
    ]
  },
  propertiesOfMatter: {
    title: "Properties of Bulk Matter",
    titleTamil: "பருப்பொருட்களின் பண்புகள்",
    chapters: [
      {
        chapterName: 'Mechanical Properties of Solids',
        chapterNameTamil: 'திண்மங்களின் இயந்திரப் பண்புகள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Elasticity with Stretchability',
                explanation: '**Mistake:** Thinking rubber is more elastic than steel.\\n\\n**How to Avoid:** In physics, **elasticity** is the resistance to deformation. A material with a high Young\\\'s modulus (Y) is more elastic. Steel has a much higher Y than rubber, so it resists deformation more and returns to its original shape more forcefully. Therefore, steel is more elastic than rubber.',
                explanationTamil: '**தவறு:** ரப்பர் எஃகை விட அதிக மீட்சித்தன்மை கொண்டது என்று நினைப்பது.\\n\\n**தவிர்ப்பது எப்படி:** இயற்பியலில், **மீட்சித்தன்மை** என்பது உருக்குலைவிற்கு எதிரான எதிர்ப்பு. அதிக யங் குணகம் (Y) கொண்ட ஒரு பொருள் அதிக மீட்சித்தன்மை கொண்டது. எஃகு ரப்பரை விட மிக அதிக Y மதிப்பைக் கொண்டுள்ளது, எனவே அது உருக்குலைவை அதிகமாக எதிர்க்கிறது மற்றும் அதன் அசல் வடிவத்திற்கு அதிக விசையுடன் திரும்புகிறது. எனவே, எஃகு ரப்பரை விட அதிக மீட்சித்தன்மை கொண்டது.',
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Mechanical Properties of Fluids',
        chapterNameTamil: 'பாய்மங்களின் இயந்திரப் பண்புகள்',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Bernoulli\\\'s Principle Insight',
                explanation: "Think of Bernoulli\\'s principle as a trade-off: **'Where speed is high, pressure is low'.** This single concept explains the lift on an airplane wing (air travels faster over the top), the swing of a spinning cricket ball, and the working of an atomizer.",
                explanationTamil: "பெர்னூலியின் தத்துவத்தை ஒரு வர்த்தகமாக நினைத்துப் பாருங்கள்: **'வேகம் அதிகம் உள்ள இடத்தில், அழுத்தம் குறைவு'.** இந்த ஒற்றைக் கருத்து ஒரு விமான இறக்கையின் மீதான தூக்கு விசை, சுழலும் கிரிக்கெட் பந்தின் ஊஞ்சலாட்டம் மற்றும் ஒரு அணுவாக்கியின் செயல்பாடு ஆகியவற்றை விளக்குகிறது.",
              },
            ],
          },
        ]
      },
       {
        chapterName: 'Thermal Properties of Matter',
        chapterNameTamil: 'பருப்பொருளின் வெப்பப் பண்புகள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Heat and Temperature',
                explanation: '**Mistake:** Using the terms heat and temperature interchangeably.\\n\\n**How to Avoid:** **Temperature** is a measure of the average kinetic energy of molecules (how hot or cold something is). **Heat** is the *transfer* of thermal energy from a hotter body to a colder one. An iceberg has a low temperature but contains a huge amount of heat energy.',
                explanationTamil: '**தவறு:** வெப்பம் மற்றும் வெப்பநிலை என்ற சொற்களை மாறி மாறிப் பயன்படுத்துதல்.\\n\\n**தவிர்ப்பது எப்படி:** **வெப்பநிலை** என்பது மூலக்கூறுகளின் சராசரி இயக்க ஆற்றலின் ஒரு அளவீடு (ஒரு பொருள் எவ்வளவு சூடாக அல்லது குளிராக உள்ளது). **வெப்பம்** என்பது ஒரு சூடான பொருளிலிருந்து ஒரு குளிரான பொருளுக்கு வெப்ப ஆற்றலின் *பரிமாற்றம்* ஆகும். ஒரு பனிப்பாறை குறைந்த வெப்பநிலையைக் கொண்டுள்ளது ஆனால் ஒரு பெரிய அளவு வெப்ப ஆற்றலைக் கொண்டுள்ளது.',
              },
            ],
          },
        ]
      },
    ]
  },
  thermodynamics: {
    title: "Thermodynamics & Kinetic Theory",
    titleTamil: "வெப்ப இயக்கவியல் மற்றும் இயக்கவியற் கொள்கை",
    chapters: [
       {
        chapterName: 'Thermodynamics',
        chapterNameTamil: 'வெப்ப இயக்கவியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Sign Conventions for W and Q',
                explanation: '**Mistake:** Mixing up the signs. The physics convention for work (Work done BY system is positive) is opposite to the chemistry convention (Work done ON system is positive).\\n\\n**How to Avoid:** Stick to one convention, usually the one from your textbook. The standard physics convention is based on the First Law: **$\\Delta U = Q - W$**. Here, work done *by* the system is positive. Heat supplied *to* the system is positive.',
                explanationTamil: '**தவறு:** குறிகளைக் குழப்பிக் கொள்வது. இயற்பியல் மரபு (அமைப்பால் செய்யப்படும் வேலை நேர்க்குறி) வேதியியல் மரபுக்கு (அமைப்பின் மீது செய்யப்படும் வேலை நேர்க்குறி) எதிரானது.\\n\\n**தவிர்ப்பது எப்படி:** உங்கள் பாடப்புத்தகத்தில் உள்ள ஒரு மரபைப் பின்பற்றவும். நிலையான இயற்பியல் மரபு முதல் விதியை அடிப்படையாகக் கொண்டது: **$\\Delta U = Q - W$**. இங்கு, அமைப்பால் *செய்யப்பட்ட* வேலை நேர்க்குறியாகும். அமைப்பிற்கு *வழங்கப்பட்ட* வெப்பம் நேர்க்குறியாகும்.',
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "P-V Diagram Areas",
                explanation: "The net work done in any cyclic process is simply the **area enclosed by the loop** on the P-V diagram. If the cycle is **clockwise**, work done by the gas is positive (engine). If it is **anti-clockwise**, work done is negative (refrigerator). This is faster than calculating work for each step individually.",
                explanationTamil: "எந்தவொரு சுழற்சி செயல்முறையிலும் செய்யப்படும் நிகர வேலை என்பது P-V வரைபடத்தில் **வளையத்தால் சூழப்பட்ட பரப்பளவு** ஆகும். சுழற்சி **கடிகார திசையில்** இருந்தால், வாயுவால் செய்யப்பட்ட வேலை நேர்மறையாகும் (இயந்திரம்). அது **கடிகார எதிர் திசையில்** இருந்தால், செய்யப்பட்ட வேலை எதிர்மறையாகும் (குளிர்சாதனப்பெட்டி). இது ஒவ்வொரு படிக்கும் தனித்தனியாக வேலை கணக்கிடுவதை விட வேகமானது.",
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Kinetic Theory of Gases',
        chapterNameTamil: 'வாயுக்களின் இயக்கவியற் கொள்கை',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "RMS Speed Ratios",
                explanation: "For ratio questions involving RMS speed ($v_{rms} = \\sqrt{3RT/M}$), you often don't need the value of R. Use the proportionality **$v \\propto \\sqrt{T/M}$** to quickly find the answer. For example, to compare the speeds of H₂ and O₂ at the same temperature, the ratio is just $\\sqrt{M_{O2}/M_{H2}} = \\sqrt{32/2} = 4$.",
                explanationTamil: "RMS வேகம் ($v_{rms} = \\sqrt{3RT/M}$) சம்பந்தப்பட்ட விகிதக் கேள்விகளுக்கு, உங்களுக்கு பெரும்பாலும் R-இன் மதிப்பு தேவையில்லை. விடையை விரைவாகக் கண்டுபிடிக்க **$v \\propto \\sqrt{T/M}$** என்ற விகிதாசாரத்தைப் பயன்படுத்தவும். உதாரணமாக, ஒரே வெப்பநிலையில் H₂ மற்றும் O₂ இன் வேகங்களை ஒப்பிட, விகிதம் வெறும் $\\sqrt{M_{O2}/M_{H2}} = \\sqrt{32/2} = 4$ ஆகும்.",
              }
            ],
          },
        ]
      },
    ]
  },
   'electromagnetism-optics': {
    title: "Electromagnetism & Optics",
    titleTamil: "மின்காந்தவியல் மற்றும் ஒளியியல்",
    chapters: [
       {
        chapterName: 'Electrostatics',
        chapterNameTamil: 'நிலைமின்னியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Potential vs. Potential Energy',
                explanation: '**Mistake:** Using the terms interchangeably.\\n\\n**How to Avoid:** **Potential (V)** is a property of a *point in space* (Work done per unit charge). **Potential Energy (U)** is a property of a *charge placed at that point* (U = qV). Always check if the question asks for the property of the location or the property of the charge.',
                explanationTamil: '**தவறு:** இந்த வார்த்தைகளை மாறி மாறி பயன்படுத்துதல்.\\n\\n**தவிர்ப்பது எப்படி:** **மின்னழுத்தம் (V)** என்பது *வெளியில் உள்ள ஒரு புள்ளியின்* பண்பு (ஓரலகு மின்னூட்டத்திற்கு செய்யப்படும் வேலை). **நிலை ஆற்றல் (U)** என்பது *அந்தப் புள்ளியில் வைக்கப்பட்டுள்ள ஒரு மின்னூட்டத்தின்* பண்பு (U = qV). கேள்வி இடத்தின் பண்பைக் கேட்கிறதா அல்லது மின்னூட்டத்தின் பண்பைக் கேட்கிறதா என்பதை எப்போதும் சரிபார்க்கவும்.',
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Current Electricity',
        chapterNameTamil: 'மின்னோட்டவியல்',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Symmetry in Resistor Networks',
                explanation: "For complex resistor networks (like cube problems), always look for symmetry. Points that are symmetric with respect to the input and output are at the same potential. You can mentally 'fold' the circuit along the axis of symmetry or join the points of equal potential to simplify the network drastically.",
                explanationTamil: "சிக்கலான மின்தடை வலையமைப்புகளுக்கு (கனசதுரக் கணக்குகள் போன்றவை), எப்போதும் சமச்சீர்மையைத் தேடுங்கள். உள்ளீடு மற்றும் வெளியீட்டைப் பொறுத்து சமச்சீராக உள்ள புள்ளிகள் ஒரே மின்னழுத்தத்தில் உள்ளன. வலையமைப்பை வியக்கத்தக்க रूपத்தில் எளிதாக்க, சமச்சீர் அச்சில் சுற்றை 'மடித்து' அல்லது சம மின்னழுத்தப் புள்ளிகளை இணைக்கலாம்.",
              },
            ],
          },
        ]
      },
       {
        chapterName: 'Moving Charges and Magnetism',
        chapterNameTamil: 'இயங்கும் மின்துகள்களும் காந்தவியலும்',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "Right-Hand Rules",
                explanation: "Don't get confused between the different right-hand rules. Dedicate time to master them:\\n*   **Thumb Rule:** For a straight wire, thumb in direction of current, fingers curl in direction of B-field lines.\\n*   **Palm Rule:** For force on a charge, fingers in direction of B, thumb in direction of v, palm pushes in direction of Force.\\n*   **Grip Rule:** For a solenoid, fingers curl in direction of current, thumb points in direction of B-field inside.",
                explanationTamil: "வெவ்வேறு வலது கை விதிகளைக் குழப்பிக் கொள்ளாதீர்கள். அவற்றை நன்கு கற்க நேரம் ஒதுக்குங்கள்:\\n*   **கட்டைவிரல் விதி:** ஒரு நேர் கம்பிக்கு, கட்டைவிரல் மின்னோட்டத்தின் திசையில், விரல்கள் B-புலக் கோடுகளின் திசையில் சுருளும்.\\n*   **உள்ளங்கை விதி:** ஒரு மின்னூட்டத்தின் மீதான விசைக்கு, விரல்கள் B-இன் திசையில், கட்டைவிரல் v-இன் திசையில், உள்ளங்கை விசையின் திசையில் தள்ளும்.\\n*   **பிடி விதி:** ஒரு வரிச்சுருளுக்கு, விரல்கள் மின்னோட்டத்தின் திசையில் சுருளும், கட்டைவிரல் உள்ளே உள்ள B-புலத்தின் திசையைக் குறிக்கும்.",
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Magnetism and Matter',
        chapterNameTamil: 'காந்தவியல் மற்றும் பருப்பொருட்கள்',
        sections: [
           {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Geographic vs. Magnetic Poles',
                explanation: "**Mistake:** Confusing the Earth's geographic and magnetic poles.\\n\\n**How to Avoid:** Remember they are opposites! The 'north' end of a compass needle (which is a magnetic north pole) points towards the Earth's **Geographic North Pole**. This means that the Earth's magnetic pole in the northern hemisphere is actually a **magnetic South Pole**.",
                explanationTamil: "**தவறு:** பூமியின் புவியியல் மற்றும் காந்த துருவங்களைக் குழப்பிக் கொள்வது.\\n\\n**தவிர்ப்பது எப்படி:** அவை எதிர்மாறானவை என்பதை நினைவில் கொள்க! ஒரு திசைகாட்டியின் 'வடக்கு' முனை (அது ஒரு காந்த வட துருவம்) பூமியின் **புவியியல் வட துருவத்தை** நோக்கிச் செல்கிறது. இதன் பொருள், வட அரைக்கோளத்தில் உள்ள பூமியின் காந்த துருவம் உண்மையில் ஒரு **காந்த தென் துருவம்** ஆகும்.",
              },
            ],
          },
        ]
      },
       {
        chapterName: 'Electromagnetic Induction',
        chapterNameTamil: 'மின்காந்தத் தூண்டல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Direction in Lenz's Law",
                explanation: "**Mistake:** Getting the direction of the induced current wrong.\\n\\n**How to Avoid:** It's simple: Nature opposes change. **1. What is the change?** Is the magnetic flux increasing or decreasing? **2. Oppose the change:** If the flux is increasing, the induced current will create a magnetic field in the *opposite* direction to fight it. If the flux is decreasing, the induced current will create a magnetic field in the *same* direction to help it.",
                explanationTamil: "**தவறு:** தூண்டப்பட்ட மின்னோட்டத்தின் திசையைத் தவறாகப் பெறுவது.\\n\\n**தவிர்ப்பது எப்படி:** இது எளிது: இயற்கை மாற்றத்தை எதிர்க்கிறது. **1. மாற்றம் என்ன?** காந்தப் பாயம் அதிகரிக்கிறதா அல்லது குறைகிறதா? **2. மாற்றத்தை எதிர்க்கவும்:** பாயம் அதிகரித்தால், தூண்டப்பட்ட மின்னோட்டம் அதை எதிர்த்துப் போராட *எதிர்* திசையில் ஒரு காந்தப்புலத்தை உருவாக்கும். பாயம் குறைந்தால், தூண்டப்பட்ட மின்னோட்டம் அதற்கு உதவ *அதே* திசையில் ஒரு காந்தப்புலத்தை உருவாக்கும்.",
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Alternating Current',
        chapterNameTamil: 'மாறுதிசை மின்னோட்டம்',
        sections: [
           {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "ELI the ICE man",
                explanation: "This famous mnemonic helps remember phase leads and lags.\\n*   In an inductor (**L**), Voltage (**E**) leads Current (**I**). -> **ELI**\\n*   In a capacitor (**C**), Current (**I**) leads Voltage (**E**). -> **ICE**",
                explanationTamil: "இந்த புகழ்பெற்ற நினைவூட்டல் கட்ட முந்துதல் மற்றும் பிந்துதலை நினைவில் கொள்ள உதவுகிறது.\\n*   ஒரு மின்தூண்டியில் (**L**), மின்னழுத்தம் (**E**) மின்னோட்டத்தை (**I**) முந்துகிறது. -> **ELI**\\n*   ஒரு மின்தேக்கியில் (**C**), மின்னோட்டம் (**I**) மின்னழுத்தத்தை (**E**) முந்துகிறது. -> **ICE**",
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Ray Optics and Optical Instruments',
        chapterNameTamil: 'கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Sign Convention Errors',
                explanation: '**Mistake:** Applying inconsistent or incorrect signs for u, v, f, and R in mirror and lens formulas.\\n\\n**How to Avoid:** **Master one sign convention and stick to it!** A common one is: 1. Light travels from left to right. 2. The pole/optical center is the origin. 3. Distances measured in the direction of light are positive; against are negative. 4. Heights above the principal axis are positive; below are negative. **Focal length for a concave mirror/lens is negative. For convex, it is positive.**',
                explanationTamil: '**தவறு:** ஆடி மற்றும் லென்ஸ் சூத்திரங்களில் u, v, f, மற்றும் R-க்கு நிலைத்தன்மையற்ற அல்லது தவறான குறிகளைப் பயன்படுத்துதல்.\\n\\n**தவிர்ப்பது எப்படி:** **ஒரு குறியீட்டு மரபை நன்கு கற்றுக்கொண்டு அதையே பின்பற்றுங்கள்!** ஒரு பொதுவானது: 1. ஒளி இடமிருந்து வலமாக பயணிக்கிறது. 2. முனை/ஒளியியல் மையம் ஆதிப்புள்ளி ஆகும். 3. ஒளியின் திசையில் அளவிடப்படும் தூரங்கள் நேர்மறை; எதிராக எதிர்மறை. 4. முதன்மை அச்சிற்கு மேலே உள்ள உயரங்கள் நேர்மறை; கீழே எதிர்மறை. **குழி ஆடி/லென்சுக்கு குவியத்தூரம் எதிர்மறை. குவி ஆடி/லென்சுக்கு நேர்மறை.**',
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Wave Optics',
        chapterNameTamil: 'அலை ஒளியியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Interference and Diffraction Minima/Maxima',
                explanation: '**Mistake:** Using the condition for interference maxima for diffraction maxima, or vice versa.\\n\\n**How to Avoid:** Remember they are opposite for minima!\\n*   **Interference (YDSE):** Bright fringes (maxima) at path difference **$d\\sin\\theta = n\\lambda$**. Dark fringes (minima) at **$d\\sin\\theta = (n+1/2)\\lambda$**.\\n*   **Diffraction (Single Slit):** Dark fringes (minima) at path difference **$a\\sin\\theta = n\\lambda$**. Secondary maxima are approximately halfway between.',
                explanationTamil: '**தவறு:** விளிம்பு விளைவு பெருமங்களுக்கு குறுக்கீட்டு விளைவு பெருமங்களுக்கான நிபந்தனையைப் பயன்படுத்துதல், அல்லது நேர்மாறாக.\\n\\n**தவிர்ப்பது எப்படி:** அவை சிறுமங்களுக்கு எதிர்மாறானவை என்பதை நினைவில் கொள்க!\\n*   **குறுக்கீட்டு விளைவு (YDSE):** பிரகாசமான பட்டைகள் (பெருமங்கள்) பாதை வேறுபாடு **$d\\sin\\theta = n\\lambda$** இல். இருண்ட பட்டைகள் (சிறுமங்கள்) **$d\\sin\\theta = (n+1/2)\\lambda$** இல்.\\n*   **விளிம்பு விளைவு (ஒற்றைப் பிளவு):** இருண்ட பட்டைகள் (சிறுமங்கள்) பாதை வேறுபாடு **$a\\sin\\theta = n\\lambda$** இல். இரண்டாம் நிலை பெருமங்கள் தோராயமாக இடையில் உள்ளன.',
              },
            ]
          }
        ]
      },
    ]
  },
  'modern-physics': {
    title: "Modern Physics",
    titleTamil: "நவீன இயற்பியல்",
    chapters: [
      {
        chapterName: 'Dual Nature of Radiation and Matter',
        chapterNameTamil: 'கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Energy and Wavelength Shortcuts',
                explanation: 'To avoid long calculations with h and c, use this direct conversion:\\n$$E(eV) = \\frac{1240}{\\lambda(nm)} = \\frac{12400}{\\lambda(Å)}$$\\nThis is extremely useful for photoelectric effect problems where energies are often given in eV.',
                explanationTamil: 'h மற்றும் c உடனான நீண்ட கணக்கீடுகளைத் தவிர்க்க, இந்த நேரடி மாற்றத்தைப் பயன்படுத்தவும்:\\n$$E(eV) = \\frac{1240}{\\lambda(nm)} = \\frac{12400}{\\lambda(Å)}$$\\nஒளிமின் விளைவு கணக்குகளுக்கு இது மிகவும் பயனுள்ளதாக இருக்கும், அங்கு ஆற்றல்கள் பெரும்பாலும் eV இல் கொடுக்கப்படுகின்றன.',
              },
               {
                point: "de Broglie Wavelength for an Electron",
                explanation: "For an electron accelerated through a potential difference 'V', the de Broglie wavelength has a specific shortcut:\\n$$ \\lambda = \\frac{12.27}{\\sqrt{V}} Å$$\\nMemorizing this formula for electrons saves several steps of calculation.",
                explanationTamil: "ஒரு 'V' மின்னழுத்த வேறுபாட்டின் மூலம் முடுக்கிவிடப்பட்ட ஒரு எலக்ட்ரானுக்கு, டி பிராய் அலைநீளத்திற்கு ஒரு குறிப்பிட்ட குறுக்குவழி உள்ளது:\\n$$ \\lambda = \\frac{12.27}{\\sqrt{V}} Å$$\\nஎலக்ட்ரான்களுக்கான இந்த சூத்திரத்தை மனப்பாடம் செய்வது பல கணக்கீட்டு படிகளைச் சேமிக்கிறது.",
              },
            ],
          },
        ]
      },
       {
        chapterName: 'Atoms and Nuclei',
        chapterNameTamil: 'அணுக்களும் அணுக்கருக்களும்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Forgetting Energy is Negative",
                explanation: "**Mistake:** Forgetting the negative sign for the total energy of an electron in a Bohr orbit, leading to incorrect calculations for binding energy or transition energy.\\n\\n**How to Avoid:** Always remember $E_n = -13.6 Z^2/n^2$ eV. The negative sign signifies that the electron is **bound** to the nucleus. Energy must be *supplied* to remove it.",
                explanationTamil: "**தவறு:** ஒரு போர் சுற்றுப்பாதையில் ஒரு எலக்ட்ரானின் மொத்த ஆற்றலுக்கான எதிர்மறை குறியை மறப்பது, இது பிணைப்பு ஆற்றல் அல்லது தாவல் ஆற்றலுக்கான தவறான கணக்கீடுகளுக்கு வழிவகுக்கிறது.\\n\\n**தவிர்ப்பது எப்படி:** எப்போதும் $E_n = -13.6 Z^2/n^2$ eV என்பதை நினைவில் கொள்க. எதிர்மறை குறி எலக்ட்ரான் அணுக்கருவுடன் **பிணைக்கப்பட்டுள்ளது** என்பதைக் குறிக்கிறது. அதை அகற்ற ஆற்றல் *வழங்கப்பட* வேண்டும்.",
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "Half-Life Shortcut",
                explanation: "For radioactive decay, always think in terms of half-lives. The fraction remaining after 'n' half-lives is always $(1/2)^n$. To find the time taken for 75% decay (1/4 remaining), it's 2 half-lives. For 87.5% decay (1/8 remaining), it's 3 half-lives. This is much faster than using the exponential formula.",
                explanationTamil: "கதிரியக்கச் சிதைவுக்கு, எப்போதும் அரை ஆயுள் அடிப்படையில் சிந்தியுங்கள். 'n' அரை ஆயுளுக்குப் பிறகு மீதமுள்ள பின்னம் எப்போதும் $(1/2)^n$ ஆகும். 75% சிதைவுக்கு (1/4 மீதம்) ஆகும் நேரம் 2 அரை ஆயுள். 87.5% சிதைவுக்கு (1/8 மீதம்), அது 3 அரை ஆயுள். இது அடுக்குக்குறி சூத்திரத்தைப் பயன்படுத்துவதை விட மிக வேகமானது.",
              },
            ],
          },
        ],
      },
       {
        chapterName: 'Semiconductor Electronics',
        chapterNameTamil: 'குறைக்கடத்தி மின்னணுவியல்',
        sections: [
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Logic Gate Equivalents',
                explanation: "**Concept:** Memorize these simple NAND/NOR gate equivalents to solve complex circuits quickly.\\n*   A **NAND gate** with its inputs tied together acts as a **NOT gate**.\\n*   A **NOR gate** with its inputs tied together also acts as a **NOT gate**.\\n*   Two **NOT gates** in series cancel each other out.\\n*   A **NAND gate followed by a NOT gate** is an **AND gate**.\\n*   A **NOR gate followed by a NOT gate** is an **OR gate**.",
                explanationTamil: "**கருத்து:** சிக்கலான சுற்றுகளை விரைவாகத் தீர்க்க இந்த எளிய NAND/NOR வாயில் சமமான்களை மனப்பாடம் செய்யுங்கள்.\\n*   உள்ளீடுகள் ஒன்றாக இணைக்கப்பட்ட ஒரு **NAND வாயில்** ஒரு **NOT வாயிலாகச்** செயல்படுகிறது.\\n*   உள்ளீடுகள் ஒன்றாக இணைக்கப்பட்ட ஒரு **NOR வாயில்** கூட ஒரு **NOT வாயிலாகச்** செயல்படுகிறது.\\n*   தொடரில் உள்ள இரண்டு **NOT வாயில்கள்** ஒன்றையொன்று ரத்து செய்கின்றன.\\n*   ஒரு **NAND வாயிலைத் தொடர்ந்து ஒரு NOT வாயில்** ஒரு **AND வாயிலாகும்**.\\n*   ஒரு **NOR வாயிலைத் தொடர்ந்து ஒரு NOT வாயில்** ஒரு **OR வாயிலாகும்**.",
              },
            ],
          },
        ]
      },
    ]
  }
};

    