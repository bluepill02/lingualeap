
'use client';

import { BilingualText } from "@/components/exam/bilingual-text";

export const strategyGuideContent = {
  mechanics: {
    title: 'Mechanics',
    titleTamil: 'இயக்கவியல்',
    chapters: [
      {
        chapterName: 'Laws of Motion',
        chapterNameTamil: 'இயக்க விதிகள்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Ignoring FBDs',
            titleTamil: 'பொதுவான தவறு: FBD-களை புறக்கணித்தல்',
            points: [
              {
                point: 'Incorrectly identifying forces or their directions.',
                explanation: 'Students often forget to include all forces like normal reaction, tension, or friction, or they draw them in the wrong direction. This is especially true for objects on inclined planes.',
                explanationTamil: 'மாணவர்கள் பெரும்பாலும் செங்குத்து விசை, இழுவிசை அல்லது உராய்வு போன்ற அனைத்து விசைகளையும் சேர்க்க மறந்துவிடுகிறார்கள், அல்லது அவற்றை தவறான திசையில் வரைகிறார்கள். இது குறிப்பாக சாய்தளங்களில் உள்ள பொருட்களுக்கு பொருந்தும்.',
              },
              {
                point: 'Applying F=ma in non-inertial frames without pseudo forces.',
                explanation: 'Newton\'s second law in its basic form (F=ma) is only valid in inertial (non-accelerating) frames of reference. For an accelerating frame (like inside a lift), a "pseudo force" must be added.',
                explanationTamil: 'நியூட்டனின் இரண்டாவது விதி அதன் அடிப்படை வடிவத்தில் (F=ma) நிலைமக் குறிப்பாயங்களில் மட்டுமே செல்லுபடியாகும். ஒரு முடுக்குவிக்கப்பட்ட குறிப்பாயத்திற்கு (லிஃப்டின் உள்ளே போன்றவை), ஒரு "போலி விசை" சேர்க்கப்பட வேண்டும்.',
              }
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Pseudo Forces in Non-Inertial Frames',
                explanation: 'Problems involving accelerating lifts, cars, or wedges often become simpler by working from the non-inertial frame and adding a pseudo force (F_pseudo = -ma) that acts opposite to the frame\'s acceleration.',
                explanationTamil: 'முடுக்குவிக்கப்பட்ட லிஃப்ட்கள், கார்கள் அல்லது சாய்தளங்கள் சம்பந்தப்பட்ட கணக்குகளை, நிலைமமற்ற குறிப்பாயத்திலிருந்து வேலை செய்து, குறிப்பாயத்தின் முடுக்கத்திற்கு எதிர் திசையில் செயல்படும் ஒரு போலி விசையை (F_pseudo = -ma) சேர்ப்பதன் மூலம் எளிதாக்கலாம்.',
              },
              {
                point: 'Variable Mass Systems (Rocket Propulsion)',
                explanation: 'For systems where mass changes over time, like a rocket burning fuel, the standard F=ma is insufficient. The correct formula is F_ext = m(dv/dt) - v_rel(dm/dt), where v_rel is the relative velocity of the ejected mass.',
                explanationTamil: 'ராக்கெட் எரிபொருளை எரிப்பது போன்ற, காலப்போக்கில் நிறை மாறும் அமைப்புகளுக்கு, நிலையான F=ma போதுமானதாக இல்லை. சரியான சூத்திரம் F_ext = m(dv/dt) - v_rel(dm/dt) ஆகும், இதில் v_rel என்பது வெளியேற்றப்பட்ட நிறையின் சார்பு வேகம் ஆகும்.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Lami\'s Theorem for 3-Force Equilibrium',
                explanation: 'If three forces acting at a point are in equilibrium, then each force is proportional to the sine of the angle between the other two forces. (F₁/sin α = F₂/sin β = F₃/sin γ). This is much faster than resolving components for certain problems.',
                explanationTamil: 'ஒரு புள்ளியில் செயல்படும் மூன்று விசைகள் சமநிலையில் இருந்தால், ஒவ்வொரு விசையும் மற்ற இரண்டு விசைகளுக்கு இடையிலான கோணத்தின் சைனுக்கு விகிதாசாரமாக இருக்கும். (F₁/sin α = F₂/sin β = F₃/sin γ). இது சில கணக்குகளுக்கு கூறுகளைத் தீர்ப்பதை விட மிகவும் வேகமானது.',
              },
              {
                point: 'String Constraint Method',
                explanation: 'In complex pulley systems, the total length of the string remains constant. Differentiating the length equation twice with respect to time gives a direct relationship between the accelerations of the connected blocks, saving time.',
                explanationTamil: 'சிக்கலான கப்பி அமைப்புகளில், கயிற்றின் மொத்த நீளம் மாறாமல் இருக்கும். நேரத்தைப் பொறுத்து நீளச் சமன்பாட்டை இருமுறை வகைக்கெழு செய்தால், இணைக்கப்பட்ட தொகுதிகளின் முடுக்கங்களுக்கு இடையே நேரடி உறவு கிடைக்கிறது, இது நேரத்தை மிச்சப்படுத்துகிறது.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Work, Energy, and Power',
        chapterNameTamil: 'வேலை, ஆற்றல் மற்றும் திறன்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Misusing Work-Energy Theorem',
            titleTamil: 'பொதுவான தவறு: வேலை-ஆற்றல் தேற்றத்தை தவறாகப் பயன்படுத்துதல்',
            points: [
              {
                point: 'Confusing the work done by individual forces with net work.',
                explanation: 'The Work-Energy Theorem states that the *net work done by all forces* (conservative and non-conservative) equals the change in kinetic energy. Students often equate the work done by just one force to the change in K.E.',
                explanationTamil: 'வேலை-ஆற்றல் தேற்றம், *அனைத்து விசைகளாலும் செய்யப்பட்ட நிகர வேலை* (ஆற்றல்மாறா மற்றும் ஆற்றல்மாறா விசைகள்) இயக்க ஆற்றலில் ஏற்படும் மாற்றத்திற்கு சமம் என்று கூறுகிறது. மாணவர்கள் பெரும்பாலும் ஒரு விசையால் செய்யப்பட்ட வேலையை இயக்க ஆற்றல் மாற்றத்திற்கு சமன் செய்கிறார்கள்.',
              },
              {
                point: 'Incorrectly applying conservation of mechanical energy.',
                explanation: 'Total mechanical energy (Kinetic + Potential) is conserved *only* when no non-conservative forces (like friction or air resistance) are doing work. If friction is present, the work done by friction results in a loss of mechanical energy.',
                explanationTamil: 'ஆற்றல்மாறா விசைகள் (உராய்வு அல்லது காற்று எதிர்ப்பு போன்றவை) வேலை செய்யாதபோது *மட்டுமே* மொத்த இயந்திர ஆற்றல் (இயக்க ஆற்றல் + நிலை ஆற்றல்) மாறாமல் இருக்கும். உராய்வு இருந்தால், உராய்வினால் செய்யப்பட்ட வேலை இயந்திர ஆற்றல் இழப்பிற்கு வழிவகுக்கிறது.',
              }
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Potential Energy Curves',
                explanation: 'Understanding U-x graphs is key. The force F = -dU/dx. Points where the slope is zero (F=0) are equilibrium points. A minimum on the curve is stable equilibrium, while a maximum is unstable equilibrium.',
                explanationTamil: 'U-x வரைபடங்களைப் புரிந்துகொள்வது முக்கியம். விசை F = -dU/dx. சாய்வு பூஜ்ஜியமாக இருக்கும் புள்ளிகள் (F=0) சமநிலை புள்ளிகள். வளைவில் ஒரு குறைந்தபட்சம் நிலையான சமநிலை, அதே சமயம் அதிகபட்சம் நிலையற்ற சமநிலை.',
              },
              {
                point: 'Work done by a variable force',
                explanation: 'When force is not constant but a function of position (F(x)), the work done is calculated by integrating the force over the displacement: W = ∫F(x)dx. This is graphically represented by the area under the F-x graph.',
                explanationTamil: 'விசை நிலையானதாக இல்லாமல், நிலையின் சார்பாக (F(x)) இருக்கும்போது, செய்யப்பட்ட வேலை, இடப்பெயர்ச்சியின் மீது விசையைத் தொகையீடு செய்வதன் மூலம் கணக்கிடப்படுகிறது: W = ∫F(x)dx. இது F-x வரைபடத்தின் கீழ் உள்ள பரப்பளவால் வரைபடமாகக் குறிக்கப்படுகிறது.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Work-Energy Theorem vs. Kinematics',
                explanation: 'For problems involving variable forces or calculating final speed after moving through a complex path, the Work-Energy Theorem is almost always faster and simpler than using kinematic equations.',
                explanationTamil: 'மாறும் விசைகள் சம்பந்தப்பட்ட கணக்குகளுக்கு அல்லது ஒரு சிக்கலான பாதையில் நகர்ந்த பிறகு இறுதி வேகத்தைக் கணக்கிடுவதற்கு, வேலை-ஆற்றல் தேற்றம் இயக்கவியல் சமன்பாடுகளைப் பயன்படுத்துவதை விட கிட்டத்தட்ட எப்போதும் வேகமாகவும் எளிமையாகவும் இருக்கும்.',
              },
              {
                point: 'Zero Work Conditions',
                explanation: 'Quickly identify when work done is zero: (a) displacement is zero, (b) force is zero, (c) force is perpendicular to displacement (e.g., centripetal force in uniform circular motion).',
                explanationTamil: 'செய்யப்பட்ட வேலை பூஜ்ஜியமாக இருக்கும்போது விரைவாக அடையாளம் காணவும்: (அ) இடப்பெயர்ச்சி பூஜ்ஜியம், (ஆ) விசை பூஜ்ஜியம், (இ) விசை இடப்பெயர்ச்சிக்கு செங்குத்தாக உள்ளது (எ.கா., சீரான வட்ட இயக்கத்தில் மையநோக்கு விசை).',
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
            type: 'mistake',
            title: 'Common Mistake: Mixing Linear and Angular Variables',
            titleTamil: 'பொதுவான தவறு: நேரியல் மற்றும் கோண மாறிகளை கலக்குதல்',
            points: [
              {
                point: 'Incorrectly applying linear equations to rotational problems.',
                explanation: 'Students might use F=ma where they should use Torque τ = Iα. It is crucial to use the rotational analogues of linear quantities: τ for Force, I (Moment of Inertia) for mass, α for acceleration, etc.',
                explanationTamil: 'மாணவர்கள் திருப்புவிசை τ = Iα ஐப் பயன்படுத்த வேண்டிய இடத்தில் F=ma ஐப் பயன்படுத்தலாம். நேரியல் அளவுகளின் சுழற்சி ஒப்புமைகளைப் பயன்படுத்துவது முக்கியம்: விசைக்கு τ, நிறைக்கு I (நிலைமத் திருப்புத்திறன்), முடுக்கத்திற்கு α, போன்றவை.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Instantaneous Axis of Rotation (IAOR)',
                explanation: 'For an object undergoing both translation and rotation (like a rolling wheel), there is always a point that is momentarily at rest. Calculating kinematics about this IAOR can simplify problems, as the motion becomes pure rotation about that point.',
                explanationTamil: 'மொழிபெயர்ப்பு மற்றும் சுழற்சி இரண்டையும் மேற்கொள்ளும் ஒரு பொருளுக்கு (உருளும் சக்கரம் போன்றவை), தற்காலிகமாக ஓய்வில் இருக்கும் ஒரு புள்ளி எப்போதும் இருக்கும். இந்த IAOR ஐப் பற்றி இயக்கவியலைக் கணக்கிடுவது சிக்கல்களை எளிதாக்கும், ஏனெனில் இயக்கம் அந்தப் புள்ளியைப் பற்றிய தூய சுழற்சியாக மாறுகிறது.',
              },
              {
                point: 'Toppling of a Block',
                explanation: 'Toppling occurs when the normal force shifts to the edge of the block. The condition for toppling on an inclined plane is when tan(θ) > a/h, where \'a\' is the base width and \'h\' is the height. This is a classic but often overlooked concept.',
                explanationTamil: 'செங்குத்து விசை தொகுதியின் விளிம்பிற்கு மாறும்போது கவிழ்தல் ஏற்படுகிறது. ஒரு சாய்தளத்தில் கவிழ்தலுக்கான நிபந்தனை tan(θ) > a/h ஆகும், இதில் \'a\' என்பது அடிப்படை அகலம் மற்றும் \'h\' என்பது உயரம். இது ஒரு உன்னதமான ஆனால் பெரும்பாலும் கவனிக்கப்படாத கருத்து.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Conservation of Angular Momentum in Collisions',
                explanation: 'When a particle collides and sticks to the edge of a rotating disc, linear momentum is not conserved, but angular momentum about the center of the disc is. This is a very common NEET question pattern.',
                explanationTamil: 'ஒரு துகள் சுழலும் வட்டின் விளிம்பில் மோதி ஒட்டிக்கொள்ளும்போது, நேரியல் உந்தம் সংরক্ষিতப்படாது, ஆனால் வட்டின் மையத்தைப் பற்றிய கோண உந்தம் সংরক্ষিতப்படும். இது மிகவும் பொதுவான நீட் கேள்வி வடிவமாகும்.',
              },
              {
                point: 'Parallel & Perpendicular Axis Theorems',
                explanation: 'Do not calculate moment of inertia from scratch. Memorize the moments of inertia for standard shapes (rod, ring, disc, sphere) about their center of mass and then use the parallel (I = I_cm + Md²) or perpendicular axis theorems to find it about any other axis.',
                explanationTamil: 'நிலைமத் திருப்புத்திறனை புதிதாக கணக்கிட வேண்டாம். நிலையான வடிவங்களின் (தடி, வளையம், வட்டு, கோளம்) நிறை மையத்தைப் பற்றிய நிலைமத் திருப்புத்திறன்களை மனப்பாடம் செய்து, பின்னர் வேறு எந்த அச்சைப் பற்றியும் அதைக் கண்டுபிடிக்க இணை (I = I_cm + Md²) அல்லது செங்குத்து அச்சு தேற்றங்களைப் பயன்படுத்தவும்.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Gravitation',
        chapterNameTamil: 'ஈர்ப்பியல்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Confusion between g and G',
            titleTamil: 'பொதுவான தவறு: g மற்றும் G இடையே குழப்பம்',
            points: [
              {
                point: 'Using the value of g (9.8 m/s²) at heights or depths.',
                explanation: '\'g\' (acceleration due to gravity) is variable and depends on altitude and depth. \'G\' (Universal Gravitational Constant) is a constant everywhere in the universe. Remember the formulas for variation of g with height and depth.',
                explanationTamil: '\'g\' (ஈர்ப்பு முடுக்கம்) மாறிக்கொண்டே இருக்கும் மற்றும் உயரம் மற்றும் ஆழத்தைப் பொறுத்தது. \'G\' (உலகளாவிய ஈர்ப்பு மாறிலி) பிரபஞ்சத்தில் எல்லா இடங்களிலும் ஒரு மாறிலி. உயரம் மற்றும் ஆழத்துடன் g மாறுபடுவதற்கான சூத்திரங்களை நினைவில் கொள்ளுங்கள்.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Gravitational Self-Energy',
                explanation: 'This is the potential energy of a body due to the mutual gravitational attraction of its own parts. For a uniform solid sphere, the self-energy is U = - (3/5) * (G * M² / R). This is sometimes asked in advanced problems.',
                explanationTamil: 'இது ஒரு பொருளின் சொந்தப் பகுதிகளின் பரஸ்பர ஈர்ப்பு ஈர்ப்பினால் ஏற்படும் நிலை ஆற்றலாகும். ஒரு சீரான திடக் கோளத்திற்கு, சுய ஆற்றல் U = - (3/5) * (G * M² / R) ஆகும். இது சில நேரங்களில் மேம்பட்ட கணக்குகளில் கேட்கப்படுகிறது.',
              },
              {
                point: 'Binary Star Systems',
                explanation: 'For two stars of mass M1 and M2 revolving around their common center of mass, the period of revolution is given by T² = (4π² / G(M₁+M₂)) * r³, where r is the distance between them. This is a variation of Kepler\'s third law.',
                explanationTamil: 'M1 மற்றும் M2 நிறையுடைய இரண்டு நட்சத்திரங்கள் அவற்றின் பொதுவான நிறை மையத்தைச் சுற்றி வரும்போது, சுழற்சி காலம் T² = (4π² / G(M₁+M₂)) * r³ ஆல் வழங்கப்படுகிறது, இதில் r அவற்றுக்கிடையேயான தூரம். இது கெப்லரின் மூன்றாவது விதியின் ஒரு மாறுபாடு.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Using Ratios for Satellite Problems',
                explanation: 'For questions comparing orbital speeds, time periods, or energies of two satellites, use ratios to cancel out constants like G and M. For example, (T₁/T₂)² = (r₁/r₂)³ from Kepler\'s law.',
                explanationTamil: 'இரண்டு செயற்கைக்கோள்களின் சுற்றுப்பாதை வேகங்கள், காலங்கள் அல்லது ஆற்றல்களை ஒப்பிடும் கேள்விகளுக்கு, G மற்றும் M போன்ற மாறிலிகளை ரத்து செய்ய விகிதங்களைப் பயன்படுத்தவும். எடுத்துக்காட்டாக, கெப்லரின் விதியிலிருந்து (T₁/T₂)² = (r₁/r₂)³.',
              },
            ],
          },
        ],
      },
    ]
  },
  thermodynamics: {
    title: 'Thermodynamics',
    titleTamil: 'வெப்ப இயக்கவியல்',
    chapters: [
      {
        chapterName: 'Thermal Properties of Matter',
        chapterNameTamil: 'பருப்பொருளின் வெப்பப் பண்புகள்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Calorimetry Sign Errors',
            titleTamil: 'பொதுவான தவறு: கலோரிमिति குறி தவறுகள்',
            points: [
              {
                point: 'Mixing signs for heat lost and heat gained.',
                explanation: 'The fundamental principle of calorimetry is: Heat Lost = Heat Gained. Always set up your equation as m₁c₁(T₁-T_final) = m₂c₂(T_final-T₂), ensuring the higher temperature is first in the (T_high - T_low) term on both sides.',
                explanationTamil: 'கலோரிமிதியின் அடிப்படைக் கொள்கை: இழந்த வெப்பம் = பெறப்பட்ட வெப்பம். உங்கள் சமன்பாட்டை எப்போதும் m₁c₁(T₁-T_final) = m₂c₂(T_final-T₂) என்று அமைக்கவும், இருபுறமும் (T_high - T_low) என்ற பதத்தில் அதிக வெப்பநிலை முதலில் இருப்பதை உறுதிசெய்யவும்.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Wien\'s Displacement Law & Stefan-Boltzmann Law',
                explanation: 'These laws govern black-body radiation. Wien\'s Law (λ_m * T = constant) relates peak wavelength to temperature. Stefan\'s Law (E = σT⁴) relates total energy radiated to temperature. These are often tested together.',
                explanationTamil: 'இந்த விதிகள் கருப்பொருளின் கதிர்வீச்சை நிர்வகிக்கின்றன. வியனின் விதி (λ_m * T = மாறிலி) உச்ச அலைநீளத்தை வெப்பநிலையுடன் தொடர்புபடுத்துகிறது. ஸ்டீபன் விதி (E = σT⁴) கதிர்வீசப்பட்ட மொத்த ஆற்றலை வெப்பநிலையுடன் தொடர்புபடுத்துகிறது. இவை பெரும்பாலும் ஒன்றாக சோதிக்கப்படுகின்றன.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Newton\'s Law of Cooling Approximation',
                explanation: 'This law is only accurate for small temperature differences between the body and surroundings. For MCQs, check if this condition holds before applying the formula.',
                explanationTamil: 'இந்த விதி பொருள் மற்றும் சுற்றுப்புறங்களுக்கு இடையிலான சிறிய வெப்பநிலை வேறுபாடுகளுக்கு மட்டுமே துல்லியமானது. MCQகளுக்கு, சூத்திரத்தைப் பயன்படுத்துவதற்கு முன்பு இந்த நிபந்தனை பொருந்துகிறதா என்று சரிபார்க்கவும்.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Thermodynamics',
        chapterNameTamil: 'வெப்ப இயக்கவியல்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Work Done Sign Convention',
            titleTamil: 'பொதுவான தவறு: செய்யப்பட்ட வேலைக்கான குறியீட்டு மரபு',
            points: [
              {
                point: 'Using the chemistry sign convention in physics.',
                explanation: 'In Physics, work done *by* the system (expansion) is positive. In Chemistry, work done *on* the system is positive. The First Law of Thermodynamics is written as ΔU = Q - W in physics. Using the wrong sign is a very common error.',
                explanationTamil: 'இயற்பியலில், அமைப்பால் *செய்யப்பட்ட* வேலை (விரிவடைதல்) நேர்மறையாகும். வேதியியலில், அமைப்பின் *மீது* செய்யப்பட்ட வேலை நேர்மறையாகும். வெப்ப இயக்கவியலின் முதல் விதி இயற்பியலில் ΔU = Q - W என்று எழுதப்படுகிறது. தவறான குறியீட்டைப் பயன்படுத்துவது மிகவும் பொதுவான பிழையாகும்.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Entropy',
                explanation: 'While deep calculations are rare, conceptual questions on entropy (measure of disorder) are increasing. Remember that for any irreversible process, the entropy of the universe increases. For a reversible process, it remains constant.',
                explanationTamil: 'ஆழமான கணக்கீடுகள் அரிதானவை என்றாலும், என்ட்ரோபி (ஒழுங்கின்மையின் அளவீடு) பற்றிய கருத்தியல் கேள்விகள் அதிகரித்து வருகின்றன. எந்தவொரு மீளமுடியாத செயல்முறைக்கும், பிரபஞ்சத்தின் என்ட்ரோபி அதிகரிக்கிறது என்பதை நினைவில் கொள்ளுங்கள். ஒரு மீளக்கூடிய செயல்முறைக்கு, அது மாறாமல் இருக்கும்.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Using the Molar Specific Heat Ratio (γ)',
                explanation: 'Quickly find degrees of freedom, C_p, and C_v if you know γ (gamma). γ = 1 + 2/f, where f is degrees of freedom. This saves time over deriving each value separately.',
                explanationTamil: 'γ (காமா) தெரிந்தால், சுதந்திர இயக்கக்கூறுகள், C_p மற்றும் C_v ஐ விரைவாகக் கண்டறியவும். γ = 1 + 2/f, இதில் f என்பது சுதந்திர இயக்கக்கூறுகள். இது ஒவ்வொரு மதிப்பையும் தனித்தனியாகப் பெறுவதை விட நேரத்தை மிச்சப்படுத்துகிறது.',
              },
            ],
          },
        ],
      },
    ]
  },
  'electromagnetism-optics': {
    title: 'Electromagnetism & Optics',
    titleTamil: 'மின்காந்தவியல் மற்றும் ஒளியியல்',
    chapters: [
      {
        chapterName: 'Electric Charges and Fields',
        chapterNameTamil: 'மின்சார கட்டணங்கள் மற்றும் புலங்கள்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Vector Nature of Fields',
            titleTamil: 'பொதுவான தவறு: புலங்களின் வெக்டர் இயல்பு',
            points: [
              {
                point: 'Adding electric fields or forces like scalars.',
                explanation: 'Electric field (E) and electric force (F) are vectors. When finding the net field from multiple charges, you must add them vectorially, considering both magnitude and direction (using principles like superposition and resolving components).',
                explanationTamil: 'மின்புலம் (E) மற்றும் மின்விசை (F) ஆகியவை வெக்டர்கள். பல மின்னூட்டங்களிலிருந்து நிகர புலத்தைக் கண்டறியும்போது, நீங்கள் அவற்றை வெக்டர் ரீதியாகச் சேர்க்க வேண்டும், அளவு மற்றும் திசை இரண்டையும் கருத்தில் கொள்ள வேண்டும் (மேற்பொருந்துதல் தத்துவம் மற்றும் கூறுகளைத் தீர்த்தல் போன்ற கொள்கைகளைப் பயன்படுத்தி).',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Electric Field of a Dipole on the Equatorial Line',
                explanation: 'Students often memorize the axial field but forget the equatorial field. The field on the equatorial line is E = -k * p / r³, and its direction is opposite to the dipole moment vector.',
                explanationTamil: 'மாணவர்கள் பெரும்பாலும் அச்சுப் புலத்தை மனப்பாடம் செய்கிறார்கள், ஆனால் நடுவரைப் புலத்தை மறந்துவிடுகிறார்கள். நடுவரைக் கோட்டில் புலம் E = -k * p / r³ ஆகும், மேலும் அதன் திசை இருமுனை திருப்புத்திறன் வெக்டருக்கு எதிரானது.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Using Gauss\'s Law for Symmetry',
                explanation: 'For charge distributions with high symmetry (sphere, infinite line, infinite sheet), using Gauss\'s Law (∮E·dA = Q_enc/ε₀) to find the electric field is vastly simpler than integrating Coulomb\'s Law.',
                explanationTamil: 'அதிக சமச்சீர்மை கொண்ட மின்னூட்டப் பரவல்களுக்கு (கோளம், முடிவற்ற கோடு, முடிவற்ற தாள்), கூலும் விதியைத் தொகையீடு செய்வதை விட காஸ் விதியைப் (∮E·dA = Q_enc/ε₀) பயன்படுத்தி மின்புலத்தைக் கண்டறிவது மிகவும் எளிமையானது.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Current Electricity',
        chapterNameTamil: 'மின்னோட்டவியல்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Kirchhoff\'s Law Sign Errors',
            titleTamil: 'பொதுவான தவறு: கிர்ச்சாஃப் விதி குறி தவறுகள்',
            points: [
              {
                point: 'Incorrect signs in loop law (KVL).',
                explanation: 'Establish a consistent direction for traversing the loop. A voltage rise (from - to + terminal of a battery) is positive. A voltage drop across a resistor (in the direction of current) is negative. A mistake here will fail the entire problem.',
                explanationTamil: 'சுற்று விதியில் (KVL) தவறான குறிகள். சுற்றைச் சுற்றிவரும் ஒரு நிலையான திசையை நிறுவவும். ஒரு மின்னழுத்த உயர்வு (பேட்டரியின் - முதல் + முனையம் வரை) நேர்மறையானது. ஒரு மின்தடைக்கு குறுக்கே மின்னழுத்த வீழ்ச்சி (மின்னோட்டத்தின் திசையில்) எதிர்மறையானது. இங்கு ஒரு தவறு முழு கணக்கையும் தோல்வியடையச் செய்யும்.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Potentiometer',
                explanation: 'Understanding the principle of the potentiometer to compare emfs or find the internal resistance of a cell is a classic but often confusing topic. The key is that at the balance point, no current flows through the galvanometer.',
                explanationTamil: 'மின்னியக்கு விசைகளை ஒப்பிடுவதற்கோ அல்லது ஒரு கலத்தின் உள் மின்தடையைக் கண்டறிவதற்கோ மின்னழுத்தமானியின் கொள்கையைப் புரிந்துகொள்வது ஒரு உன்னதமான ஆனால் பெரும்பாலும் குழப்பமான தலைப்பு. சமநிலை புள்ளியில், கால்வனோமீட்டர் வழியாக எந்த மின்னோட்டமும் பாயாது என்பதே முக்கியம்.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Symmetry in Resistor Networks',
                explanation: 'For complex cube or infinite ladder resistor problems, look for lines of symmetry. Points on a line of symmetry are at the same potential, allowing you to simplify the circuit by removing connections between them.',
                explanationTamil: 'சிக்கலான கனசதுர அல்லது முடிவற்ற ஏணி மின்தடை கணக்குகளுக்கு, சமச்சீர் கோடுகளைத் தேடுங்கள். ஒரு சமச்சீர் கோட்டில் உள்ள புள்ளிகள் ஒரே மின்னழுத்தத்தில் உள்ளன, இது அவற்றுக்கிடையேயான இணைப்புகளை அகற்றுவதன் மூலம் சுற்றை எளிதாக்க அனுமதிக்கிறது.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Ray Optics',
        chapterNameTamil: 'கதிர் ஒளியியல்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Sign Convention',
            titleTamil: 'பொதுவான தவறு: குறியீட்டு மரபு',
            points: [
              {
                point: 'Applying sign conventions inconsistently.',
                explanation: 'The Cartesian sign convention is standard. Light travels from left to right (+ direction). All distances are measured from the optical center/pole. Distances measured against the light are negative. Failing to apply this consistently for u, v, f, and R is the #1 reason for errors in optics.',
                explanationTamil: 'கார்ட்டீசியன் குறியீட்டு மரபு நிலையானது. ஒளி இடமிருந்து வலமாக (+ திசை) பயணிக்கிறது. அனைத்து தூரங்களும் ஒளியியல் மையம்/துருவத்திலிருந்து அளவிடப்படுகின்றன. ஒளிக்கு எதிராக அளவிடப்படும் தூரங்கள் எதிர்மறையானவை. u, v, f மற்றும் R க்கு இதை சீராகப் பயன்படுத்தத் தவறுவது ஒளியியலில் பிழைகளுக்கு #1 காரணமாகும்.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Lens Aberrations',
                explanation: 'Conceptual questions about chromatic and spherical aberration are sometimes asked. Chromatic aberration occurs because the refractive index is slightly different for different colors. Spherical aberration occurs because rays hitting the edge of a lens focus differently than central rays.',
                explanationTamil: 'நிறப்பிறழ்ச்சி மற்றும் கோளப்பிறழ்ச்சி பற்றிய கருத்தியல் கேள்விகள் சில நேரங்களில் கேட்கப்படுகின்றன. வெவ்வேறு வண்ணங்களுக்கு ஒளிவிலகல் எண் சற்று வித்தியாசமாக இருப்பதால் நிறப்பிறழ்ச்சி ஏற்படுகிறது. ஒரு லென்ஸின் விளிம்பைத் தாக்கும் கதிர்கள் மையக் கதிர்களை விட வித்தியாசமாக கவனம் செலுத்துவதால் கோளப்பிறழ்ச்சி ஏற்படுகிறது.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Silvered Lens Problems',
                explanation: 'A silvered lens acts as a mirror. Its effective focal length can be found using 1/F = 2/f_lens + 1/f_mirror. This is faster than tracing rays through refraction, reflection, and then refraction again.',
                explanationTamil: 'ஒரு வெள்ளியிடப்பட்ட லென்ஸ் கண்ணாடியாக செயல்படுகிறது. அதன் பயனுள்ள குவியத்தூரத்தை 1/F = 2/f_lens + 1/f_mirror ஐப் பயன்படுத்தி காணலாம். இது ஒளிவிலகல், எதிரொளிப்பு, பின்னர் மீண்டும் ஒளிவிலகல் வழியாக கதிர்களைக் கண்டுபிடிப்பதை விட வேகமானது.',
              },
            ],
          },
        ],
      },
    ]
  },
  'modern-physics': {
    title: 'Modern Physics',
    titleTamil: 'நவீன இயற்பியல்',
    chapters: [
      {
        chapterName: 'Dual Nature of Matter and Radiation',
        chapterNameTamil: 'கதிர்வீச்சு மற்றும் பருப்பொருளின் இரட்டை இயல்பு',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Confusing Energy and Intensity',
            titleTamil: 'பொதுவான தவறு: ஆற்றல் மற்றும் செறிவைக் குழப்புதல்',
            points: [
              {
                point: 'Thinking that higher intensity light increases the kinetic energy of photoelectrons.',
                explanation: 'In the photoelectric effect, light intensity (number of photons) affects the number of emitted electrons (photocurrent). The maximum kinetic energy of the electrons is determined *only* by the frequency (or energy) of the individual photons, not their quantity.',
                explanationTamil: 'ஒளிமின்னழுத்த விளைவில், ஒளிச்செறிவு (போட்டான்களின் எண்ணிக்கை) உமிழப்படும் எலக்ட்ரான்களின் எண்ணிக்கையை (ஒளிமின்னோட்டம்) பாதிக்கிறது. எலக்ட்ரான்களின் அதிகபட்ச இயக்க ஆற்றல் தனிப்பட்ட போட்டான்களின் அதிர்வெண் (அல்லது ஆற்றல்) மூலம் *மட்டுமே* தீர்மானிக்கப்படுகிறது, அவற்றின் அளவால் அல்ல.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Davisson-Germer Experiment',
                explanation: 'While the de Broglie wavelength formula is common, the experimental proof via the Davisson-Germer experiment (electron diffraction from a nickel crystal) is often asked conceptually to confirm the wave nature of electrons.',
                explanationTamil: 'டி ப்ரோக்ளி அலைநீள சூத்திரம் பொதுவானது என்றாலும், டேவிசன்-ஜெர்மர் பரிசோதனை (நிக்கல் படிகத்திலிருந்து எலக்ட்ரான் விளிம்பு விளைவு) வழியாக சோதனை ஆதாரம் எலக்ட்ரான்களின் அலை இயல்பை உறுதிப்படுத்த கருத்தியல் ரீதியாக அடிக்கடி கேட்கப்படுகிறது.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Energy Unit Conversion',
                explanation: 'For photoelectric effect problems, remember the shortcut: Energy (in eV) = 1240 / wavelength (in nm). This avoids converting between Joules and electron-volts and saves a lot of calculation time.',
                explanationTamil: 'ஒளிமின்னழுத்த விளைவு கணக்குகளுக்கு, குறுக்குவழியை நினைவில் கொள்ளுங்கள்: ஆற்றல் (eV இல்) = 1240 / அலைநீளம் (nm இல்). இது ஜூல் மற்றும் எலக்ட்ரான்-வோல்ட்டுகளுக்கு இடையில் மாற்றுவதைத் தவிர்க்கிறது மற்றும் நிறைய கணக்கீட்டு நேரத்தை மிச்சப்படுத்துகிறது.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Atoms & Nuclei',
        chapterNameTamil: 'அணுக்கள் மற்றும் கருக்கள்',
        sections: [
          {
            type: 'mistake',
            title: 'Common Mistake: Mass Defect Calculation',
            titleTamil: 'பொதுவான தவறு: நிறை குறைபாடு கணக்கீடு',
            points: [
              {
                point: 'Subtracting masses in the wrong order.',
                explanation: 'Mass defect (Δm) is always [mass of constituents] - [mass of nucleus]. It represents the mass that was converted into binding energy. A negative mass defect is physically impossible.',
                explanationTamil: 'நிறை குறைபாடு (Δm) என்பது எப்போதும் [உறுப்புகளின் நிறை] - [அணுக்கருவின் நிறை] ஆகும். இது பிணைப்பு ஆற்றலாக மாற்றப்பட்ட நிறையை பிரதிபலிக்கிறது. ஒரு எதிர்மறை நிறை குறைபாடு உடல் ரீதியாக சாத்தியமற்றது.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Nuclear Fission vs. Fusion',
                explanation: 'Conceptual questions often probe the difference in binding energy per nucleon. Fission releases energy because heavy nuclei split into lighter ones with higher binding energy per nucleon. Fusion releases energy because light nuclei combine to form heavier ones with higher binding energy per nucleon.',
                explanationTamil: 'கருத்தியல் கேள்விகள் பெரும்பாலும் ஒரு நியூக்ளியானுக்கு பிணைப்பு ஆற்றலில் உள்ள வேறுபாட்டை ஆராய்கின்றன. பிளவு ஆற்றலை வெளியிடுகிறது, ஏனெனில் கனமான கருக்கள் ஒரு நியூக்ளியானுக்கு அதிக பிணைப்பு ஆற்றலுடன் இலகுவானவையாகப் பிரிகின்றன. இணைவு ஆற்றலை வெளியிடுகிறது, ஏனெனில் இலகுவான கருக்கள் இணைந்து ஒரு நியூக்ளியானுக்கு அதிக பிணைப்பு ஆற்றலுடன் கனமானவையாக உருவாகின்றன.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Radioactive Decay Shortcut',
                explanation: 'For questions asking for the amount of substance left after \'n\' half-lives, simply use the formula: N = N₀ * (1/2)ⁿ. This is much faster than repeated calculations.',
                explanationTamil: '\'n\' அரை ஆயுட்காலங்களுக்குப் பிறகு மீதமுள்ள பொருளின் அளவைக் கேட்கும் கேள்விகளுக்கு, N = N₀ * (1/2)ⁿ என்ற சூத்திரத்தை வெறுமனே பயன்படுத்தவும். இது மீண்டும் மீண்டும் செய்யப்படும் கணக்கீடுகளை விட மிகவும் வேகமானது.',
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
            type: 'mistake',
            title: 'Common Mistake: Biasing of Diodes and Transistors',
            titleTamil: 'பொதுவான தவறு: டயோடுகள் மற்றும் டிரான்சிஸ்டர்களின் சார்பளிப்பு',
            points: [
              {
                point: 'Confusing forward and reverse bias.',
                explanation: 'A p-n junction is forward-biased when the p-side is connected to the positive terminal and n-side to the negative. This allows current to flow. Reverse bias is the opposite and blocks current flow. This is a fundamental concept tested frequently.',
                explanationTamil: 'ஒரு p-n சந்தி முன்னோக்கு சார்புடையது, p-பக்கம் நேர்மறை முனையத்துடனும் n-பக்கம் எதிர்மறை முனையத்துடனும் இணைக்கப்படும்போது. இது மின்னோட்டம் பாய அனுமதிக்கிறது. தலைகீழ் சார்பு இதற்கு எதிரானது மற்றும் மின்னோட்டப் பாய்வைத் தடுக்கிறது. இது அடிக்கடி சோதிக்கப்படும் ஒரு அடிப்படைக் கருத்து.',
              },
            ],
          },
          {
            type: 'rare',
            title: 'Rare Concepts & Edge Cases',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் விளிம்பு நிலைகள்',
            points: [
              {
                point: 'Zener Diode as a Voltage Regulator',
                explanation: 'While basic diode function is common, the specific application of a Zener diode in reverse bias to act as a voltage regulator is a high-yield, slightly advanced topic that frequently appears.',
                explanationTamil: 'அடிப்படை டயோடு செயல்பாடு பொதுவானது என்றாலும், மின்னழுத்த சீராக்கியாக செயல்பட தலைகீழ் சார்பில் ஒரு ஜெனர் டயோடின் குறிப்பிட்ட பயன்பாடு என்பது அடிக்கடி தோன்றும் ஒரு உயர் விளைச்சல், சற்று மேம்பட்ட தலைப்பு.',
              },
            ],
          },
          {
            type: 'trick',
            title: 'Strategic Tricks & Shortcuts',
            titleTamil: 'உத்திപരമായ தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            points: [
              {
                point: 'Logic Gate Truth Tables',
                explanation: 'Don\'t analyze complex logic circuits from scratch. Memorize the truth tables for AND, OR, NOT, NAND, and NOR gates. For complex circuits, break them down and solve stage by stage using these basic truth tables.',
                explanationTamil: 'சிக்கலான தர்க்க சுற்றுகளை புதிதாக பகுப்பாய்வு செய்ய வேண்டாம். AND, OR, NOT, NAND, மற்றும் NOR வாயில்களுக்கான உண்மை அட்டவணைகளை மனப்பாடம் செய்யுங்கள். சிக்கலான சுற்றுகளுக்கு, அவற்றை உடைத்து, இந்த அடிப்படை உண்மை அட்டவணைகளைப் பயன்படுத்தி படிப்படியாகத் தீர்க்கவும்.',
              },
            ],
          },
        ],
      },
    ]
  },
};

    