
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
  'electromagnetism-optics': {
    title: "Electromagnetism & Optics",
    titleTamil: "மின்காந்தவியல் மற்றும் ஒளியியல்",
    chapters: [
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
                explanation: '**Mistake:** Applying inconsistent or incorrect signs for u, v, f, and R in mirror and lens formulas.\n\n**How to Avoid:** **Master one sign convention and stick to it!** A common one is: 1. Light travels from left to right. 2. The pole/optical center is the origin. 3. Distances measured in the direction of light are positive; against are negative. 4. Heights above the principal axis are positive; below are negative. **Focal length for a concave mirror/lens is negative. For convex, it is positive.**',
                explanationTamil: '**தவறு:** ஆடி மற்றும் லென்ஸ் சூத்திரங்களில் u, v, f, மற்றும் R-க்கு நிலைத்தன்மையற்ற அல்லது தவறான குறிகளைப் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** **ஒரு குறியீட்டு மரபை நன்கு கற்றுக்கொண்டு அதையே பின்பற்றுங்கள்!** ஒரு பொதுவானது: 1. ஒளி இடமிருந்து வலமாக பயணிக்கிறது. 2. முனை/ஒளியியல் மையம் ஆதிப்புள்ளி ஆகும். 3. ஒளியின் திசையில் அளவிடப்படும் தூரங்கள் நேர்மறை; எதிராக எதிர்மறை. 4. முதன்மை அச்சிற்கு மேலே உள்ள உயரங்கள் நேர்மறை; கீழே எதிர்மறை. **குழி ஆடி/லென்சுக்கு குவியத்தூரம் எதிர்மறை. குவி ஆடி/லென்சுக்கு நேர்மறை.**',
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
               {
                point: 'Combination of Thin Lenses',
                explanation: 'Instead of finding the final image step-by-step, use the equivalent power formula for lenses in contact: **$P_{eq} = P_1 + P_2 + ...$**. Remember to use the correct sign for power (+ for convex, - for concave) and that $P = 1/f$ where f is in meters. This is much faster.',
                explanationTamil: 'இறுதி பிம்பத்தை படிப்படியாகக் கண்டுபிடிப்பதற்குப் பதிலாக, தொடர்பில் உள்ள லென்சுகளுக்கு சமமான திறன் சூத்திரத்தைப் பயன்படுத்தவும்: **$P_{eq} = P_1 + P_2 + ...$**. திறனுக்கு சரியான குறியைப் பயன்படுத்த நினைவில் கொள்ளுங்கள் (குவிக்கு +, குழிக்கு -) மற்றும் f மீட்டரில் இருக்கும்போது $P = 1/f$. இது மிக வேகமானது.',
              },
            ]
          }
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
                explanation: '**Mistake:** Using the condition for interference maxima for diffraction maxima, or vice versa.\n\n**How to Avoid:** Remember they are opposite for minima!\n*   **Interference (YDSE):** Bright fringes (maxima) at path difference **$d\\sin\\theta = n\\lambda$**. Dark fringes (minima) at **$d\\sin\\theta = (n+1/2)\\lambda$**.\n*   **Diffraction (Single Slit):** Dark fringes (minima) at path difference **$a\\sin\\theta = n\\lambda$**. Secondary maxima are approximately halfway between.',
                explanationTamil: '**தவறு:** விளிம்பு விளைவு பெருமங்களுக்கு குறுக்கீட்டு விளைவு பெருமங்களுக்கான நிபந்தனையைப் பயன்படுத்துதல், அல்லது நேர்மாறாக.\n\n**தவிர்ப்பது எப்படி:** அவை சிறுமங்களுக்கு எதிர்மாறானவை என்பதை நினைவில் கொள்க!\n*   **குறுக்கீட்டு விளைவு (YDSE):** பிரகாசமான பட்டைகள் (பெருமங்கள்) பாதை வேறுபாடு **$d\\sin\\theta = n\\lambda$** இல். இருண்ட பட்டைகள் (சிறுமங்கள்) **$d\\sin\\theta = (n+1/2)\\lambda$** இல்.\n*   **விளிம்பு விளைவு (ஒற்றைப் பிளவு):** இருண்ட பட்டைகள் (சிறுமங்கள்) பாதை வேறுபாடு **$a\\sin\\theta = n\\lambda$** இல். இரண்டாம் நிலை பெருமங்கள் தோராயமாக இடையில் உள்ளன.',
              },
            ]
          }
        ]
      }
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
                explanation: 'To avoid long calculations with h and c, use this direct conversion:\n$$E(eV) = \\frac{1240}{\\lambda(nm)} = \\frac{12400}{\\lambda(Å)}$$\nThis is extremely useful for photoelectric effect problems where energies are often given in eV.',
                explanationTamil: 'h மற்றும் c உடனான நீண்ட கணக்கீடுகளைத் தவிர்க்க, இந்த நேரடி மாற்றத்தைப் பயன்படுத்தவும்:\n$$E(eV) = \\frac{1240}{\\lambda(nm)} = \\frac{12400}{\\lambda(Å)}$$\nஒளிமின் விளைவு கணக்குகளுக்கு இது மிகவும் பயனுள்ளதாக இருக்கும், அங்கு ஆற்றல்கள் பெரும்பாலும் eV இல் கொடுக்கப்படுகின்றன.',
              },
               {
                point: "de Broglie Wavelength for an Electron",
                explanation: "For an electron accelerated through a potential difference 'V', the de Broglie wavelength has a specific shortcut:\n$$ \\lambda = \\frac{12.27}{\\sqrt{V}} Å$$\nMemorizing this formula for electrons saves several steps of calculation.",
                explanationTamil: "ஒரு 'V' மின்னழுத்த வேறுபாட்டின் மூலம் முடுக்கிவிடப்பட்ட ஒரு எலக்ட்ரானுக்கு, டி பிராய் அலைநீளத்திற்கு ஒரு குறிப்பிட்ட குறுக்குவழி உள்ளது:\n$$ \\lambda = \\frac{12.27}{\\sqrt{V}} Å$$\nஎலக்ட்ரான்களுக்கான இந்த சூத்திரத்தை மனப்பாடம் செய்வது பல கணக்கீட்டு படிகளைச் சேமிக்கிறது.",
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
                explanation: "**Mistake:** Forgetting the negative sign for the total energy of an electron in a Bohr orbit, leading to incorrect calculations for binding energy or transition energy.\n\n**How to Avoid:** Always remember $E_n = -13.6 Z^2/n^2$ eV. The negative sign signifies that the electron is **bound** to the nucleus. Energy must be *supplied* to remove it.",
                explanationTamil: "**தவறு:** ஒரு போர் சுற்றுப்பாதையில் ஒரு எலக்ட்ரானின் மொத்த ஆற்றலுக்கான எதிர்மறை குறியை மறப்பது, இது பிணைப்பு ஆற்றல் அல்லது தாவல் ஆற்றலுக்கான தவறான கணக்கீடுகளுக்கு வழிவகுக்கிறது.\n\n**தவிர்ப்பது எப்படி:** எப்போதும் $E_n = -13.6 Z^2/n^2$ eV என்பதை நினைவில் கொள்க. எதிர்மறை குறி எலக்ட்ரான் அணுக்கருவுடன் **பிணைக்கப்பட்டுள்ளது** என்பதைக் குறிக்கிறது. அதை அகற்ற ஆற்றல் *வழங்கப்பட* வேண்டும்.",
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
                explanation: "**Concept:** Memorize these simple NAND/NOR gate equivalents to solve complex circuits quickly.\n*   A **NAND gate** with its inputs tied together acts as a **NOT gate**.\n*   A **NOR gate** with its inputs tied together also acts as a **NOT gate**.\n*   Two **NOT gates** in series cancel each other out.\n*   A **NAND gate followed by a NOT gate** is an **AND gate**.\n*   A **NOR gate followed by a NOT gate** is an **OR gate**.",
                explanationTamil: "**கருத்து:** சிக்கலான சுற்றுகளை விரைவாகத் தீர்க்க இந்த எளிய NAND/NOR வாயில் சமமான்களை மனப்பாடம் செய்யுங்கள்.\n*   உள்ளீடுகள் ஒன்றாக இணைக்கப்பட்ட ஒரு **NAND வாயில்** ஒரு **NOT வாயிலாகச்** செயல்படுகிறது.\n*   உள்ளீடுகள் ஒன்றாக இணைக்கப்பட்ட ஒரு **NOR வாயில்** கூட ஒரு **NOT வாயிலாகச்** செயல்படுகிறது.\n*   தொடரில் உள்ள இரண்டு **NOT வாயில்கள்** ஒன்றையொன்று ரத்து செய்கின்றன.\n*   ஒரு **NAND வாயிலைத் தொடர்ந்து ஒரு NOT வாயில்** ஒரு **AND வாயிலாகும்**.\n*   ஒரு **NOR வாயிலைத் தொடர்ந்து ஒரு NOT வாயில்** ஒரு **OR வாயிலாகும்**.",
              },
            ],
          },
        ]
      },
    ]
  }
};
