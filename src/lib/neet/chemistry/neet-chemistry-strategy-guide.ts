
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
  physical: {
    title: "Physical Chemistry",
    titleTamil: "இயற்பியல் வேதியியல்",
    chapters: [
      {
        chapterName: 'Some Basic Concepts in Chemistry',
        chapterNameTamil: 'வேதியியலின் சில அடிப்படைக் கருத்துக்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Molarity and Molality',
                explanation: '**Mistake:** Using molarity in formulas that require a temperature-independent concentration (like colligative properties) or vice-versa.\n\n**How to Avoid:** Remember **Molarity** has an \'r\' like \'litre\', so it depends on volume (which changes with temperature). **Molality** has an \'l\' like \'kilogram\', so it depends on mass of solvent (which is constant). Always use molality for colligative property calculations.',
                explanationTamil: '**தவறு:** வெப்பநிலை சாராத செறிவு தேவைப்படும் சூத்திரங்களில் (தொகுப்பண்புகள் போன்றவை) மோலாரிட்டியைப் பயன்படுத்துதல் அல்லது நேர்மாறாக.\n\n**தவிர்ப்பது எப்படி:** **மோலாரிட்டி** (Molarity) என்பதில் \'r\' இருப்பதால், அது கனஅளவைச் (litre) சார்ந்தது (வெப்பநிலையுடன் மாறும்). **மோலாலிட்டி** (Molality) என்பதில் \'l\' இருப்பதால், அது கரைப்பானின் நிறையைச் (kilogram) சார்ந்தது (மாறிலி). தொகுப்பண்பு கணக்கீடுகளுக்கு எப்போதும் மோலாலிட்டியைப் பயன்படுத்தவும்.',
              },
              {
                point: 'Incorrectly Identifying the Limiting Reagent',
                explanation: '**Mistake:** Assuming the reactant with the smaller given mass is the limiting reagent.\n\n**How to Avoid:** Always convert the mass of all reactants to **moles** first. Then, divide the moles of each reactant by its stoichiometric coefficient from the balanced equation. The reactant with the *smallest resulting ratio* is the limiting reagent.',
                explanationTamil: '**தவறு:** கொடுக்கப்பட்ட நிறையில் குறைவான வினைபடுபொருளே வரம்பு வினைபொருள் என்று கருதுவது.\n\n**தவிர்ப்பது எப்படி:** எப்போதும் அனைத்து வினைபடு பொருட்களின் நிறைகளையும் முதலில் **மோல்களாக** மாற்றவும். பின்னர், ஒவ்வொரு வினைபடு பொருளின் மோல்களையும் சமன்செய்யப்பட்ட சமன்பாட்டிலிருந்து அதன் வினைக்கூறு குணகத்தால் வகுக்கவும். *மிகச்சிறிய விகிதத்தை* கொண்ட வினைபடுபொருளே வரம்பு வினைபொருள் ஆகும்.',
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Normality Equation for Titrations',
                explanation: 'For acid-base titrations, using the normality equation $N_1V_1 = N_2V_2$ is often much faster than using the molarity equation and balancing the reaction. Remember, Normality = Molarity × n-factor.',
                explanationTamil: 'அமில-கார தரம் பார்த்தலுக்கு, நார்மாலிட்டி சமன்பாடு $N_1V_1 = N_2V_2$ ஐப் பயன்படுத்துவது, மோலாரிட்டி சமன்பாட்டைப் பயன்படுத்தி வினையை சமன் செய்வதை விட மிக வேகமானது. நினைவில் கொள்க, நார்மாலிட்டி = மோலாரிட்டி × n-காரணி.',
              },
            ],
          },
        ],
      },
      {
        chapterName: 'Atomic Structure',
        chapterNameTamil: 'அணு அமைப்பு',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Orbit and Orbital',
                explanation: '**Mistake:** Using the terms interchangeably. They represent completely different models.\n\n**How to Avoid:** An **orbit** (Bohr model) is a well-defined circular path. An **orbital** (Quantum model) is a 3D region of space where the probability of finding an electron is maximum. Orbit is a 2D concept of certainty; orbital is a 3D concept of probability.',
                explanationTamil: '**தவறு:** இந்த வார்த்தைகளை மாறி மாறி பயன்படுத்துதல். அவை முற்றிலும் மாறுபட்ட மாதிரிகளைக் குறிக்கின்றன.\n\n**தவிர்ப்பது எப்படி:** ஒரு **சுற்றுப்பாதை** (போர் மாதிரி) என்பது நன்கு வரையறுக்கப்பட்ட வட்டப் பாதை. ஒரு **ஆர்பிட்டால்** (குவாண்டம் மாதிரி) என்பது ஒரு எலக்ட்ரானைக் கண்டுபிடிப்பதற்கான நிகழ்தகவு பெருமமாக உள்ள முப்பரிமாணப் பகுதி ஆகும். சுற்றுப்பாதை என்பது உறுதியான 2D கருத்து; ஆர்பிட்டால் என்பது நிகழ்தகவின் 3D கருத்து.',
              },
              {
                point: 'Forgetting Exceptions to Aufbau Principle',
                explanation: '**Mistake:** Writing the configuration for Cr as [Ar]4s²3d⁴ or for Cu as [Ar]4s²3d⁹.\n\n**How to Avoid:** Memorize these two key exceptions. The extra stability of half-filled (d⁵) and fully-filled (d¹⁰) orbitals drives the promotion of a 4s electron. **Cr is [Ar]4s¹3d⁵** and **Cu is [Ar]4s¹3d¹⁰**.',
                explanationTamil: '**தவறு:** Cr-க்கு [Ar]4s²3d⁴ அல்லது Cu-க்கு [Ar]4s²3d⁹ என அமைப்பை எழுதுவது.\n\n**தவிர்ப்பது எப்படி:** இந்த இரண்டு முக்கிய விதிவிலக்குகளை மனப்பாடம் செய்யுங்கள். பாதி நிரம்பிய (d⁵) மற்றும் முழுமையாக நிரம்பிய (d¹⁰) ஆர்பிட்டால்களின் கூடுதல் நிலைப்புத்தன்மை ஒரு 4s எலக்ட்ரானின் பதவி உயர்வுக்கு காரணமாகிறது. **Cr என்பது [Ar]4s¹3d⁵** மற்றும் **Cu என்பது [Ar]4s¹3d¹⁰** ஆகும்.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: 'Radial and Angular Nodes',
                explanation: 'Sometimes questions ask about the number of nodes. Remember these formulas:\n*   **Total Nodes:** n - 1\n*   **Angular Nodes (or nodal planes):** l\n*   **Radial Nodes:** n - l - 1\nFor example, a 3p orbital has n=3, l=1. Total nodes = 2, Angular nodes = 1 (the plane), Radial nodes = 3-1-1=1.',
                explanationTamil: 'சில நேரங்களில் கணுக்களின் எண்ணிக்கையைப் பற்றி கேள்விகள் கேட்கப்படுகின்றன. இந்த சூத்திரங்களை நினைவில் கொள்க:\n*   **மொத்த கணுக்கள்:** n - 1\n*   **கோணக் கணுக்கள் (அல்லது கணுத் தளங்கள்):** l\n*   **ஆரக் கணுக்கள்:** n - l - 1\nஉதாரணமாக, ஒரு 3p ஆர்பிட்டாலுக்கு n=3, l=1. மொத்த கணுக்கள் = 2, கோணக் கணுக்கள் = 1 (தளம்), ஆரக் கணுக்கள் = 3-1-1=1.',
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Energy of Photon Shortcut',
                explanation: 'To calculate photon energy quickly, use the formula:\n$$E (in~eV) = \\frac{12400}{\\lambda (in~Å)}$$\nOr, if wavelength is in nanometers:\n$$E (in~eV) = \\frac{1240}{\\lambda (in~nm)}$$\nThis is much faster than using E = hc/λ and converting from Joules to eV.',
                explanationTamil: 'ஃபோட்டான் ஆற்றலை விரைவாகக் கணக்கிட, இந்த சூத்திரத்தைப் பயன்படுத்தவும்:\n$$E (eV-ல்) = \\frac{12400}{\\lambda (Å-ல்)}$$\nஅல்லது, அலைநீளம் நானோமீட்டரில் இருந்தால்:\n$$E (eV-ல்) = \\frac{1240}{\\lambda (nm-ல்)}$$\nஇது E = hc/λ ஐப் பயன்படுத்தி ஜூல்-இலிருந்து eV-க்கு மாற்றுவதை விட மிக வேகமானது.',
              },
            ],
          },
        ],
      },
       {
        chapterName: 'Chemical Bonding and Molecular Structure',
        chapterNameTamil: 'வேதிப் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Confusing Geometry and Shape',
                explanation: '**Mistake:** Stating the geometry when the question asks for the shape.\n\n**How to Avoid:** **Geometry** describes the arrangement of *all electron pairs* (bonding and lone pairs). **Shape** describes the arrangement of *only the atoms* (bonding pairs). For example, in ammonia (NH₃), there are 4 electron pairs, so the geometry is tetrahedral. But due to one lone pair, the shape is trigonal pyramidal.',
                explanationTamil: '**தவறு:** கேள்வி வடிவத்தைக் கேட்கும்போது வடிவியலைக் கூறுவது.\n\n**தவிர்ப்பது எப்படி:** **வடிவியல்** என்பது *அனைத்து எலக்ட்ரான் இரட்டைகளின்* (பிணைப்பு மற்றும் தனித்த இரட்டைகள்) அமைப்பை விவரிக்கிறது. **வடிவம்** என்பது *அணுக்களின்* (பிணைப்பு இரட்டைகள்) அமைப்பை மட்டுமே விவரிக்கிறது. உதாரணமாக, அம்மோனியாவில் (NH₃), 4 எலக்ட்ரான் இரட்டைகள் உள்ளன, எனவே வடிவியல் நான்முகி ஆகும். ஆனால் ஒரு தனித்த இரட்டை இருப்பதால், வடிவம் முக்கோணப் பிரமிடு ஆகும்.',
              },
              {
                point: 'MOT Configuration Order',
                explanation: '**Mistake:** Using the same molecular orbital energy order for all diatomic molecules.\n\n**How to Avoid:** The order changes for molecules after N₂. \n*   **For B₂, C₂, N₂:**  ... (π2pₓ = π2pᵧ) (σ2p₂) ...\n*   **For O₂, F₂, Ne₂:** ... (σ2p₂) (π2pₓ = π2pᵧ) ...\nRemembering this switch is crucial for calculating bond order and magnetic properties correctly.',
                explanationTamil: '**தவறு:** அனைத்து ஈரணு மூலக்கூறுகளுக்கும் ஒரே மூலக்கூறு ஆர்பிட்டால் ஆற்றல் வரிசையைப் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** N₂ க்குப் பிறகு உள்ள மூலக்கூறுகளுக்கு வரிசை மாறுகிறது. \n*   **B₂, C₂, N₂ க்கு:**  ... (π2pₓ = π2pᵧ) (σ2p₂) ...\n*   **O₂, F₂, Ne₂ க்கு:** ... (σ2p₂) (π2pₓ = π2pᵧ) ...\nஇந்த மாற்றத்தை நினைவில் கொள்வது பிணைப்புத் தரம் மற்றும் காந்தப் பண்புகளை சரியாகக் கணக்கிட முக்கியம்.',
              },
            ],
          },
           {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Quick Hybridization Calculation',
                explanation: 'To find the hybridization of a central atom, calculate the steric number:\n**Steric Number = (Number of sigma bonds) + (Number of lone pairs)**\n*   2 -> sp\n*   3 -> sp²\n*   4 -> sp³\n*   5 -> sp³d\n*   6 -> sp³d²\nThis is much faster than drawing the full orbital diagram.',
                explanationTamil: 'ஒரு மைய அணுவின் இனக்கலப்பைக் கண்டறிய, ஸ்டெரிக் எண்ணைக் கணக்கிடவும்:\n**ஸ்டெரிக் எண் = (சிக்மா பிணைப்புகளின் எண்ணிக்கை) + (தனித்த இரட்டைகளின் எண்ணிக்கை)**\n*   2 -> sp\n*   3 -> sp²\n*   4 -> sp³\n*   5 -> sp³d\n*   6 -> sp³d²\nஇது முழு ஆர்பிட்டால் வரைபடத்தை வரைவதை விட மிக வேகமானது.',
              },
              {
                point: 'Bond Order from Electron Count (for diatomics)',
                explanation: 'For species with 14 to 20 electrons, remember this pattern:\n*   14 e⁻ (N₂) -> B.O. = 3\n*   15 e⁻ (O₂⁺) -> B.O. = 2.5\n*   16 e⁻ (O₂) -> B.O. = 2\n*   17 e⁻ (O₂⁻) -> B.O. = 1.5\n*   18 e⁻ (F₂) -> B.O. = 1\nThis allows you to quickly compare stability and bond length without writing the full MOT configuration.',
                explanationTamil: '14 முதல் 20 எலக்ட்ரான்களைக் கொண்ட இனங்களுக்கு, இந்த முறையை நினைவில் கொள்க:\n*   14 e⁻ (N₂) -> பி.த. = 3\n*   15 e⁻ (O₂⁺) -> பி.த. = 2.5\n*   16 e⁻ (O₂) -> பி.த. = 2\n*   17 e⁻ (O₂⁻) -> பி.த. = 1.5\n*   18 e⁻ (F₂) -> பி.த. = 1\nஇது முழு MOT அமைப்பை எழுதாமல் நிலைப்புத்தன்மை மற்றும் பிணைப்பு நீளத்தை விரைவாக ஒப்பிட உங்களை அனுமதிக்கிறது.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Fajan's Rules and Covalent Character",
                explanation: "**Concept:** No bond is 100% ionic. Ionic bonds have some covalent character. Fajan's rules predict the extent of this character:\n1.  **Small cation, large anion** -> More covalent.\n2.  **High charge on cation/anion** -> More covalent.\n3.  **Cations with pseudo-noble gas configuration** (e.g., Cu⁺) are more polarizing than those with noble gas configuration (e.g., Na⁺).\n\n**Application:** This explains why AgCl is less soluble than NaCl. Ag⁺ is more polarizing than Na⁺.",
                explanationTamil: "**கருத்து:** எந்தப் பிணைப்பும் 100% அயனிப் பிணைப்பு அல்ல. அயனிப் பிணைப்புகள் சில சகப் பிணைப்புத் தன்மையைக் கொண்டுள்ளன. ஃபாஜனின் விதிகள் இந்தத் தன்மையின் அளவைக் கணிக்கின்றன:\n1.  **சிறிய நேர் அயனி, பெரிய எதிர் அயனி** -> அதிக சகப் பிணைப்பு.\n2.  **நேர்/எதிர் அயனி மீது அதிக மின்னூட்டம்** -> அதிக சகப் பிணைப்பு.\n3.  **போலி மந்த வாயு அமைப்புள்ள நேர் அயனிகள்** (எ.கா., Cu⁺) மந்த வாயு அமைப்புள்ளவற்றை (எ.கா., Na⁺) விட அதிக முனைவுறுத்தும் தன்மையுடையவை.\n\n**பயன்பாடு:** NaCl-ஐ விட AgCl ஏன் குறைவாக கரைகிறது என்பதை இது விளக்குகிறது. Ag⁺, Na⁺-ஐ விட அதிக முனைவுறுத்தும் தன்மையுடையது.",
              },
            ]
          }
        ],
      },
       {
        chapterName: 'Chemical Thermodynamics',
        chapterNameTamil: 'வேதி வெப்ப இயக்கவியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Sign Conventions for Q and W',
                explanation: '**Mistake:** Mixing up the sign conventions. The physics convention for work (Work done BY system is positive) is opposite to the chemistry convention (Work done ON system is positive).\n\n**How to Avoid:** Stick to one convention, usually the one from your textbook. The standard chemistry convention is based on the First Law: **ΔU = Q + W**. Here, work done *on* the system is positive. If a gas expands, it does work on the surroundings, so W is negative.',
                explanationTamil: '**தவறு:** குறியீட்டு மரபுகளைக் குழப்பிக் கொள்வது. இயற்பியல் மரபு (அமைப்பால் செய்யப்படும் வேலை நேர்க்குறி) வேதியியல் மரபுக்கு (அமைப்பின் மீது செய்யப்படும் வேலை நேர்க்குறி) எதிரானது.\n\n**தவிர்ப்பது எப்படி:** உங்கள் பாடப்புத்தகத்தில் உள்ள ஒரு மரபைப் பின்பற்றவும். நிலையான வேதியியல் மரபு முதல் விதியை அடிப்படையாகக் கொண்டது: **ΔU = Q + W**. இங்கு, அமைப்பின் *மீது* செய்யப்படும் வேலை நேர்க்குறியாகும். ஒரு வாயு விரிவடைந்தால், அது சூழலின் மீது வேலை செய்கிறது, எனவே W எதிர்க்குறியாகும்.',
              },
              {
                point: 'Units of ΔH, ΔS, and Temperature',
                explanation: '**Mistake:** Using ΔH in Joules while R is in kJ, or using ΔS in J/K while ΔH is in kJ, or using Temperature in Celsius in the Gibbs equation.\n\n**How to Avoid:** Always be consistent. Before using **ΔG = ΔH - TΔS**, convert ΔH and ΔS to the same energy unit (usually kJ) and ALWAYS convert Temperature to **Kelvin (K)**.',
                explanationTamil: '**தவறு:** R kJ-ல் இருக்கும்போது ΔH-ஐ ஜூல்-ல் பயன்படுத்துதல், அல்லது ΔH kJ-ல் இருக்கும்போது ΔS-ஐ J/K-ல் பயன்படுத்துதல், அல்லது கிப்ஸ் சமன்பாட்டில் வெப்பநிலையை செல்டியஸில் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** எப்போதும் சீராக இருங்கள். **ΔG = ΔH - TΔS**-ஐப் பயன்படுத்துவதற்கு முன்பு, ΔH மற்றும் ΔS-ஐ ஒரே ஆற்றல் அலகிற்கு (வழக்கமாக kJ) மாற்றவும், மற்றும் எப்போதும் வெப்பநிலையை **கெல்வின் (K)** ஆக மாற்றவும்.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Third Law of Thermodynamics",
                explanation: "**Concept:** The entropy of a perfectly crystalline solid at absolute zero (0 K) is zero. \n\n**Implication:** This law allows us to determine the absolute entropy of a substance at a given temperature, which is not possible for enthalpy or internal energy. It sets a rational baseline for entropy.",
                explanationTamil: "**கருத்து:** தனிச்சுழி வெப்பநிலையில் (0 K) ஒரு hoàn hảo படிகத் திண்மத்தின் என்ட்ரோபி சுழியாகும்.\n\n**விளைவு:** இந்த விதி, ஒரு குறிப்பிட்ட வெப்பநிலையில் ஒரு பொருளின் தனித்த என்ட்ரோபியை தீர்மானிக்க அனுமதிக்கிறது, இது என்தால்பி அல்லது அக ஆற்றலுக்கு சாத்தியமில்லை. இது என்ட்ரோபிக்கு ஒரு பகுத்தறிவு அடிப்படையை அமைக்கிறது.",
              },
            ],
          },
        ]
      },
      {
        chapterName: 'Solutions',
        chapterNameTamil: 'கரைசல்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Forgetting the van't Hoff Factor (i)",
                explanation: '**Mistake:** Calculating colligative properties for electrolytes (like NaCl, CaCl₂) without multiplying by the van\'t Hoff factor \'i\'.\n\n**How to Avoid:** Always check if the solute is an electrolyte (ionic salt, strong acid/base) or a non-electrolyte (urea, glucose, sucrose). If it is an electrolyte, use the modified formulas: **ΔT_f = i·K_f·m**, **π = i·CRT**, etc. For 100% dissociation, \'i\' is the number of ions produced (e.g., i=2 for NaCl, i=3 for CaCl₂).',
                explanationTamil: '**தவறு:** மின்பகுளிகளுக்கு (NaCl, CaCl₂ போன்றவை) வான்ட் ஹாஃப் காரணி \'i\' ஆல் பெருக்காமல் தொகுப்பண்புகளைக் கணக்கிடுதல்.\n\n**தவிர்ப்பது எப்படி:** கரைபொருள் ஒரு மின்பகுளியா (அயனி உப்பு, வலிமையான அமிலம்/காரம்) அல்லது மின்பகுளி அல்லாததா (யூரியா, குளுக்கோஸ், சுக்ரோஸ்) என்பதை எப்போதும் சரிபார்க்கவும். அது ஒரு மின்பகுளியாக இருந்தால், மாற்றியமைக்கப்பட்ட சூத்திரங்களைப் பயன்படுத்தவும்: **ΔT_f = i·K_f·m**, **π = i·CRT**, போன்றவை. 100% பிரிகைக்கு, \'i\' என்பது உற்பத்தி செய்யப்படும் அயனிகளின் எண்ணிக்கை (எ.கா., NaCl க்கு i=2, CaCl₂ க்கு i=3).',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
               {
                point: "Azeotropes (Minimum and Maximum Boiling)",
                explanation: "**Concept:** Azeotropes are binary mixtures having the same composition in liquid and vapour phase and boil at a constant temperature.\n*   **Minimum boiling azeotrope:** Formed by solutions showing large positive deviation from Raoult's law (e.g., Ethanol-water). The boiling point of the azeotrope is lower than either component.\n*   **Maximum boiling azeotrope:** Formed by solutions showing large negative deviation from Raoult's law (e.g., Nitric acid-water). The boiling point is higher than either component. \n**Key takeaway:** Components of an azeotropic mixture cannot be separated by fractional distillation.",
                explanationTamil: "**கருத்து:** அசியோட்ரோப்கள் என்பவை திரவ மற்றும் ஆவி நிலையில் ஒரே இயைபைக் கொண்ட மற்றும் ஒரு மாறா வெப்பநிலையில் கொதிக்கும் இருகூறு கலவைகள் ஆகும்.\n*   **குறைந்தபட்ச கொதிநிலை அசியோட்ரோப்:** ரௌலட் விதியிலிருந்து பெரிய நேர்மறை விலகலைக் காட்டும் கரைசல்களால் உருவாகிறது (எ.கா., எத்தனால்-நீர்).\n*   **அதிகபட்ச கொதிநிலை அசியோட்ரோப்:** ரௌலட் விதியிலிருந்து பெரிய எதிர்மறை விலகலைக் காட்டும் கரைசல்களால் உருவாகிறது (எ.கா., நைட்ரிக் அமிலம்-நீர்).\n**முக்கிய குறிப்பு:** ஒரு அசியோட்ரோபிக் கலவையின் கூறுகளை பின்னக் காய்ச்சி வடித்தல் மூலம் பிரிக்க முடியாது.",
              },
            ]
          }
        ]
      },
      {
        chapterName: 'Equilibrium',
        chapterNameTamil: 'சமநிலை',
        sections: [
           {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Effect of Inert Gas Addition",
                explanation: "**Mistake:** Thinking that adding an inert gas always shifts the equilibrium.\n\n**How to Avoid:** It depends on the condition!\n*   **At constant volume:** Adding an inert gas increases the total pressure, but the partial pressures of the reactants and products do not change. So, there is **NO effect** on the equilibrium.\n*   **At constant pressure:** To keep the pressure constant, the volume must increase. This decreases the partial pressure of all gaseous species, so the equilibrium shifts towards the side with a **greater number of gaseous moles**.",
                explanationTamil: "**தவறு:** ஒரு மந்த வாயுவைச் சேர்ப்பது எப்போதும் சமநிலையை மாற்றும் என்று நினைப்பது.\n\n**தவிர்ப்பது எப்படி:** இது நிபந்தனையைப் பொறுத்தது!\n*   **மாறா பருமனில்:** ஒரு மந்த வாயுவைச் சேர்ப்பது மொத்த அழுத்தத்தை அதிகரிக்கிறது, ஆனால் வினைபடு பொருட்கள் மற்றும் வினைவிளை பொருட்களின் பகுதி அழுத்தங்கள் மாறாது. எனவே, சமநிலையில் **எந்த விளைவும் இல்லை**.\n*   **மாறா அழுத்தத்தில்:** அழுத்தத்தை மாறிலியாக வைத்திருக்க, பருமன் அதிகரிக்க வேண்டும். இது அனைத்து வாயு சிற்றினங்களின் பகுதி அழுத்தத்தையும் குறைக்கிறது, எனவே சமநிலை **அதிக எண்ணிக்கையிலான வாயு மோல்கள்** உள்ள பக்கத்திற்கு நகரும்.",
              },
              {
                point: "pH of Very Dilute Strong Acids/Bases",
                explanation: "**Mistake:** Calculating the pH of a 10⁻⁸ M HCl solution as 8.\n\n**How to Avoid:** A solution of an acid can never have a pH > 7. For very dilute solutions, you must also consider the H⁺ ions from the autoionization of water ([H⁺]_water ≈ 10⁻⁷ M). The total [H⁺] = [H⁺]_acid + [H⁺]_water = 10⁻⁸ + 10⁻⁷ = 1.1 × 10⁻⁷ M. The pH = -log(1.1 × 10⁻⁷), which is slightly less than 7 (approx. 6.96).",
                explanationTamil: "**தவறு:** ஒரு 10⁻⁸ M HCl கரைசலின் pH-ஐ 8 எனக் கணக்கிடுதல்.\n\n**தவிர்ப்பது எப்படி:** ஒரு அமிலத்தின் கரைசல் ஒருபோதும் pH > 7-ஐக் கொண்டிருக்க முடியாது. மிகவும் நீர்த்த கரைசல்களுக்கு, நீரின் சுய-அயனியாதலிலிருந்து வரும் H⁺ அயனிகளையும் கருத்தில் கொள்ள வேண்டும் ([H⁺]_நீர் ≈ 10⁻⁷ M). மொத்த [H⁺] = [H⁺]_அமிலம் + [H⁺]_நீர் = 10⁻⁸ + 10⁻⁷ = 1.1 × 10⁻⁷ M. pH = -log(1.1 × 10⁻⁷), இது 7-ஐ விட சற்றே குறைவானது (தோராயமாக 6.96).",
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Simultaneous Equilibrium",
                explanation: "**Concept:** In some cases, two or more equilibrium reactions may occur simultaneously in the same container. For example, the dissociation of a weak diprotic acid like H₂S. \n*   H₂S ⇌ H⁺ + HS⁻  (Kₐ₁)\n*   HS⁻ ⇌ H⁺ + S²⁻  (Kₐ₂)\n**Key Idea:** The [H⁺] from the first, stronger dissociation suppresses the second dissociation due to the common ion effect. Thus, for calculations involving the second step, the [H⁺] is almost entirely determined by the first step.",
                explanationTamil: "**கருத்து:** சில நேரங்களில், இரண்டு அல்லது அதற்கு மேற்பட்ட சமநிலை வினைகள் ஒரே கொள்கலனில் ஒரே நேரத்தில் நிகழலாம். உதாரணமாக, H₂S போன்ற ஒரு பலவீனமான இருபுரோட்டான் அமிலத்தின் பிரிகை.\n*   H₂S ⇌ H⁺ + HS⁻  (Kₐ₁)\n*   HS⁻ ⇌ H⁺ + S²⁻  (Kₐ₂)\n**முக்கிய கருத்து:** முதல், வலுவான பிரிகையிலிருந்து வரும் [H⁺], பொது அயனி விளைவு காரணமாக இரண்டாவது பிரிகையை அடக்குகிறது. எனவே, இரண்டாவது படியை உள்ளடக்கிய கணக்கீடுகளுக்கு, [H⁺] கிட்டத்தட்ட முழுமையாக முதல் படியால் தீர்மானிக்கப்படுகிறது.",
              },
            ]
          }
        ]
      },
      {
        chapterName: 'Redox Reactions and Electrochemistry',
        chapterNameTamil: 'ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் மின் வேதியியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Anode/Cathode Signs in Galvanic vs. Electrolytic Cells',
                explanation: '**Mistake:** Confusing the signs of the electrodes.\n\n**How to Avoid:** Remember **"AN OX, RED CAT"** (ANode is OXidation, REDuction at CAThode). This is always true. The *sign* changes.\n*   **Galvanic Cell (Battery):** Spontaneous reaction. Anode (oxidation) is the source of electrons, so it is the **negative** terminal. Cathode (reduction) is the destination, so it is the **positive** terminal.\n*   **Electrolytic Cell:** Non-spontaneous reaction driven by an external battery. The external battery pulls electrons from the anode, making it **positive**. It pushes electrons to the cathode, making it **negative**.',
                explanationTamil: '**தவறு:** மின்முனைகளின் குறிகளைக் குழப்பிக் கொள்வது.\n\n**தவிர்ப்பது எப்படி:** **"AN OX, RED CAT"** என்பதை நினைவில் கொள்க (ANode-ல் OXidation, CAThode-ல் REDuction). இது எப்போதும் உண்மை. *குறி* மாறுகிறது.\n*   **கால்வானிக் கலம் (மின்கலம்):** தன்னிச்சையான வினை. நேர்முனை (ஆக்ஸிஜனேற்றம்) எலக்ட்ரான்களின் மூலம், எனவே அது **எதிர்மறை** முனையம். எதிர்முனை (ஒடுக்கம்) சேரும் இடம், எனவே அது **நேர்மறை** முனையம்.\n*   **மின்னாற்பகுப்புக் கலம்:** வெளிப்புற மின்கலத்தால் இயக்கப்படும் தன்னிச்சையற்ற வினை. வெளிப்புற மின்கலம் நேர்முனையிலிருந்து எலக்ட்ரான்களை இழுத்து, அதை **நேர்மறை** ஆக்குகிறது. அது எதிர்முனைக்கு எலக்ட்ரான்களைத் தள்ளி, அதை **எதிர்மறை** ஆக்குகிறது.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
               {
                point: "Concentration Cells",
                explanation: "**Concept:** A galvanic cell constructed from two half-cells composed of the same material but differing in the concentration of the electrolyte. \n*   Example: Zn | Zn²⁺(C₁) || Zn²⁺(C₂) | Zn, where C₁ < C₂.\n*   **How it works:** The system will spontaneously try to equalize the concentrations. Oxidation occurs at the anode (lower concentration, C₁) and reduction occurs at the cathode (higher concentration, C₂).\n*   **EMF Calculation:** Using the Nernst equation, $E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log Q$. Here, $E°_{cell}$ is zero because the electrodes are the same. $E_{cell} = - \\frac{0.0591}{n} \\log(\\frac{C_{anode}}{C_{cathode}})$.",
                explanationTamil: "**கருத்து:** ஒரே பொருளாலான ஆனால் மின்பகுளியின் செறிவில் வேறுபடும் இரண்டு அரை-கலன்களிலிருந்து உருவாக்கப்பட்ட ஒரு கால்வானிக் கலம்.\n*   உதாரணம்: Zn | Zn²⁺(C₁) || Zn²⁺(C₂) | Zn, இங்கு C₁ < C₂.\n*   **செயல்படும் விதம்:** அமைப்பு தன்னிச்சையாக செறிவுகளை சமப்படுத்த முயற்சிக்கும். நேர்முனையில் (குறைந்த செறிவு, C₁) ஆக்ஸிஜனேற்றமும், எதிர்முனையில் (அதிக செறிவு, C₂) ஒடுக்கமும் நிகழ்கிறது.\n*   **EMF கணக்கீடு:** நெர்ன்ஸ்ட் சமன்பாட்டைப் பயன்படுத்தி, $E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log Q$. இங்கு, மின்முனைகள் ஒரே மாதிரியாக இருப்பதால் $E°_{cell}$ சுழியாகும். $E_{cell} = - \\frac{0.0591}{n} \\log(\\frac{C_{anode}}{C_{cathode}})$.",
              },
            ]
          }
        ]
      },
      {
        chapterName: 'Chemical Kinetics',
        chapterNameTamil: 'வேதி வினைவேகவியல்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: "Confusing Order and Molecularity",
                explanation: "**Mistake:** Assuming the order of a reaction is the same as the stoichiometric coefficients.\n\n**How to Avoid:** **Order** is an *experimental* quantity determined from the rate law. It can be zero, fractional, or an integer. **Molecularity** is a *theoretical* concept that applies only to a single elementary step. It is the number of molecules colliding in that step and must be an integer (usually 1, 2, or rarely 3). For complex reactions, the order is determined by the slowest step (rate-determining step) and is not related to the overall stoichiometry.",
                explanationTamil: "**தவறு:** ஒரு வினையின் வகை அதன் வினைக்கூறு குணகங்களுக்கு சமம் என்று கருதுவது.\n\n**தவிர்ப்பது எப்படி:** **வகை** என்பது வினைவேக விதியிலிருந்து தீர்மானிக்கப்படும் ஒரு *சோதனை ரீதியான* அளவு. அது சுழி, பின்னம், அல்லது ஒரு முழு எண்ணாக இருக்கலாம். **மூலக்கூறுத்துவம்** என்பது ஒரு ஒற்றை அடிப்படைப் படிக்கு மட்டுமே பொருந்தும் ஒரு *கோட்பாட்டு* கருத்து. அது அந்தப் படியில் மோதும் மூலக்கூறுகளின் எண்ணிக்கை மற்றும் ஒரு முழு எண்ணாக இருக்க வேண்டும் (வழக்கமாக 1, 2, அல்லது அரிதாக 3). சிக்கலான வினைகளுக்கு, வகை மெதுவான படியால் (வினைவேகத்தை தீர்மானிக்கும் படி) தீர்மானிக்கப்படுகிறது மற்றும் ஒட்டுமொத்த வினைக்கூறு விகிதவியலுடன் தொடர்புடையது அல்ல.",
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: "Half-Life Relations for First-Order Reactions",
                explanation: "Remember the time required for a certain percentage completion in terms of half-life (t₁/₂):\n*   **50% completion (1 half-life):** t = t₁/₂\n*   **75% completion (2 half-lives):** t = 2 × t₁/₂\n*   **87.5% completion (3 half-lives):** t = 3 × t₁/₂\n*   **90% completion:** t ≈ 3.3 × t₁/₂\n*   **99% completion:** t ≈ 6.6 × t₁/₂\n*   **99.9% completion:** t ≈ 10 × t₁/₂\nRecognizing these patterns can save a lot of calculation time.",
                explanationTamil: "அரை ஆயுள் காலத்தின் (t₁/₂) அடிப்படையில் ஒரு குறிப்பிட்ட சதவீத நிறைவுக்கான நேரத்தை நினைவில் கொள்க:\n*   **50% நிறைவு (1 அரை ஆயுள்):** t = t₁/₂\n*   **75% நிறைவு (2 அரை ஆயுள்):** t = 2 × t₁/₂\n*   **87.5% நிறைவு (3 அரை ஆயுள்):** t = 3 × t₁/₂\n*   **90% நிறைவு:** t ≈ 3.3 × t₁/₂\n*   **99% நிறைவு:** t ≈ 6.6 × t₁/₂\n*   **99.9% நிறைவு:** t ≈ 10 × t₁/₂\nஇந்த முறைகளை அறிந்துகொள்வது கணக்கீட்டு நேரத்தை மிச்சப்படுத்தும்.",
              },
            ],
          }
        ]
      },
    ]
  },
  inorganic: {
    title: "Inorganic Chemistry",
    titleTamil: "கனிம வேதியியல்",
    chapters: [
       {
        chapterName: 'Classification of Elements and Periodicity in Properties',
        chapterNameTamil: 'தனிமங்களின் வகைப்பாடு மற்றும் பண்புகளில் ஆவர்த்தனத் தன்மை',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Ionization Enthalpy (IE) and Electron Gain Enthalpy (EGE) Exceptions',
                explanation: '**Mistake:** Strictly following the general trend (IE increases across a period, EGE becomes more negative) without remembering key exceptions.\n\n**How to Avoid:** Memorize and understand these exceptions:\n*   **IE:** Be > B and N > O. This is due to the stable fully-filled (Be: 2s²) and half-filled (N: 2p³) configurations.\n*   **EGE:** Cl > F. The electron gain enthalpy of Chlorine is more negative than Fluorine. This is because the small size of the Fluorine atom leads to strong electron-electron repulsion in the compact 2p orbital when an extra electron is added.',
                explanationTamil: '**தவறு:** முக்கிய விதிவிலக்குகளை நினைவில் கொள்ளாமல் பொதுவான போக்கை (IE ஒரு தொடரில் அதிகரிக்கும், EGE அதிக எதிர்மறையாக மாறும்) கண்டிப்பாகப் பின்பற்றுதல்.\n\n**தவிர்ப்பது எப்படி:** இந்த விதிவிலக்குகளை மனப்பாடம் செய்து புரிந்து கொள்ளுங்கள்:\n*   **IE:** Be > B மற்றும் N > O. இது நிலையான முழுமையாக நிரம்பிய (Be: 2s²) மற்றும் பாதி நிரம்பிய (N: 2p³) அமைப்புகளால் ஏற்படுகிறது.\n*   **EGE:** Cl > F. குளோரினின் எலக்ட்ரான் நாட்ட ஆற்றல் ஃபுளோரினை விட அதிக எதிர்மறையாக உள்ளது. ஏனெனில் ஃபுளோரின் சிறிய அளவு, ஒரு கூடுதல் எலக்ட்ரானைச் சேர்க்கும்போது சிறிய 2p ஆர்பிட்டாலில் வலுவான எலக்ட்ரான்-எலக்ட்ரான் விலக்கத்திற்கு வழிவகுக்கிறது.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Diagonal Relationship",
                explanation: "**Concept:** Elements of the second period show similarities with elements of the third period placed diagonally to them (e.g., Li & Mg, Be & Al). This is due to their similar ionic size and charge/radius ratio. \n\n**Application:** This explains why Lithium behaves more like Magnesium than other alkali metals (e.g., forming nitrides, having covalent character in its halides).",
                explanationTamil: "**கருத்து:** இரண்டாம் தொடர் தனிமங்கள், அவற்றுக்கு மூலைவிட்டமாக அமைந்துள்ள மூன்றாம் தொடர் தனிமங்களுடன் ஒற்றுமையைக் காட்டுகின்றன (எ.கா., Li & Mg, Be & Al). இது அவற்றின் ஒத்த அயனி அளவு மற்றும் மின்னூட்டம்/ஆரம் விகிதம் காரணமாகும்.\n\n**பயன்பாடு:** மற்ற கார உலோகங்களை விட லித்தியம் ஏன் மெக்னீசியத்தைப் போல அதிகமாகச் செயல்படுகிறது என்பதை இது விளக்குகிறது (எ.கா., நைட்ரைடுகளை உருவாக்குதல், அதன் ஹேலைடுகளில் சகப்பிணைப்புத் தன்மையைக் கொண்டிருத்தல்).",
              },
              {
                point: "Nature of Oxides",
                explanation: "**Concept:** Across a period, the nature of oxides changes from basic to amphoteric to acidic. Down a group, the basic character of oxides increases.\n*   **Example (Period 3):** Na₂O (strongly basic) -> MgO (basic) -> Al₂O₃ (amphoteric) -> SiO₂ (acidic) -> P₄O₁₀ (strongly acidic) -> SO₃ (very strongly acidic) -> Cl₂O₇ (most acidic).\nThis trend is frequently asked conceptually.",
                explanationTamil: "**கருத்து:** ஒரு தொடரில், ஆக்சைடுகளின் தன்மை காரத்திலிருந்து ஈரியல்பு வழியாக அமிலமாக மாறுகிறது. ஒரு தொகுதியில் கீழே செல்லும்போது, ஆக்சைடுகளின் காரப் பண்பு அதிகரிக்கிறது.\n*   **உதாரணம் (தொடர் 3):** Na₂O (வலுவான காரம்) -> MgO (காரம்) -> Al₂O₃ (ஈரியல்பு) -> SiO₂ (அமிலம்) -> P₄O₁₀ (வலுவான அமிலம்) -> SO₃ (மிக வலுவான அமிலம்) -> Cl₂O₇ (மிகவும் அமிலம்).\nஇந்த போக்கு கருத்தியலாக அடிக்கடி கேட்கப்படுகிறது.",
              },
            ]
          }
        ],
      },
      {
        chapterName: 'p-Block Elements',
        chapterNameTamil: 'p-தொகுதி தனிமங்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Inert Pair Effect',
                explanation: '**Mistake:** Forgetting how the stability of oxidation states changes down the group for heavier p-block elements.\n\n**How to Avoid:** Remember that due to the **inert pair effect**, the stability of the lower oxidation state (Group number - 2) increases down the group. For example, in Group 14, SnCl₄ is more stable than SnCl₂, but PbCl₂ is more stable than PbCl₄.',
                explanationTamil: '**தவறு:** கனமான p-தொகுதி தனிமங்களுக்கு ஒரு தொகுதியில் கீழே செல்லும்போது ஆக்சிஜனேற்ற நிலைகளின் நிலைப்புத்தன்மை எவ்வாறு மாறுகிறது என்பதை மறப்பது.\n\n**தவிர்ப்பது எப்படி:** **மந்த இணை விளைவு** காரணமாக, குறைந்த ஆக்சிஜனேற்ற நிலையின் (தொகுதி எண் - 2) நிலைப்புத்தன்மை தொகுதியில் கீழே செல்லும்போது அதிகரிக்கிறது என்பதை நினைவில் கொள்க. உதாரணமாக, தொகுதி 14 இல், SnCl₄, SnCl₂-ஐ விட நிலையானது, ஆனால் PbCl₂, PbCl₄-ஐ விட நிலையானது.',
              },
              {
                point: 'Structures of Oxoacids',
                explanation: '**Mistake:** Incorrectly drawing the structures of oxoacids of phosphorus and sulphur, leading to wrong conclusions about basicity or number of P-O-P bonds.\n\n**How to Avoid:** Practice drawing them. **Key rule for Phosphorus:** Each P atom is tetrahedral, must have one P=O bond and at least one P-OH bond. Any remaining bonds can be P-H (makes it reducing) or P-O-P (in polyacids). **Basicity = number of P-OH groups**.',
                explanationTamil: '**தவறு:** பாஸ்பரஸ் மற்றும் கந்தகத்தின் ஆக்சோஅமிலங்களின் அமைப்புகளைத் தவறாக வரைவது, இது காரத்தன்மை அல்லது P-O-P பிணைப்புகளின் எண்ணிக்கை பற்றிய தவறான முடிவுகளுக்கு வழிவகுக்கிறது.\n\n**தவிர்ப்பது எப்படி:** அவற்றை வரைந்து பயிற்சி செய்யுங்கள். **பாஸ்பரஸிற்கான முக்கிய விதி:** ஒவ்வொரு P அணுவும் நான்முகி, ஒரு P=O பிணைப்பு மற்றும் குறைந்தது ஒரு P-OH பிணைப்பைக் கொண்டிருக்க வேண்டும். மீதமுள்ள பிணைப்புகள் P-H (ஒடுக்கும் பண்பைக் கொடுக்கும்) அல்லது P-O-P (பல்லமிலங்களில்) ஆக இருக்கலாம். **காரத்தன்மை = P-OH குழுக்களின் எண்ணிக்கை**.',
              },
            ]
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: 'Structure of Diborane (B₂H₆)',
                explanation: "**Concept:** Diborane is an electron-deficient molecule. It has two **3-center-2-electron (3c-2e) bonds**, often called 'banana bonds'. The two boron atoms and four terminal hydrogen atoms lie in one plane. The two bridging hydrogen atoms lie above and below this plane.",
                explanationTamil: "**கருத்து:** டைபோரேன் ஒரு எலக்ட்ரான் குறைபாடுள்ள மூலக்கூறு. இது இரண்டு **3-மைய-2-எலக்ட்ரான் (3c-2e) பிணைப்புகளைக்** கொண்டுள்ளது, இவை பெரும்பாலும் 'வாழைப்பழப் பிணைப்புகள்' என்று அழைக்கப்படுகின்றன. இரண்டு போரான் அணுக்கள் மற்றும் நான்கு முனைய ஹைட்ரஜன் அணுக்கள் ஒரே தளத்தில் உள்ளன. இரண்டு பாலம் அமைக்கும் ஹைட்ரஜன் அணுக்கள் இந்த தளத்திற்கு மேலும் கீழும் அமைந்துள்ளன.",
              },
              {
                point: 'Interhalogen Compounds',
                explanation: "**Concept:** Compounds formed between two different halogens (e.g., ClF₃, BrF₅). They are generally more reactive than the parent halogens (except F₂) because the X-X' bond is weaker than the X-X bond. Their structures can be predicted using VSEPR theory (e.g., ClF₃ is T-shaped).",
                explanationTamil: "**கருத்து:** இரண்டு வெவ்வேறு ஹாலஜன்களுக்கு இடையில் உருவாகும் சேர்மங்கள் (எ.கா., ClF₃, BrF₅). அவை பொதுவாக தாய் ஹாலஜன்களை விட (F₂ தவிர) அதிக வினைத்திறன் கொண்டவை, ஏனெனில் X-X' பிணைப்பு X-X பிணைப்பை விட பலவீனமானது. அவற்றின் அமைப்புகளை VSEPR கோட்பாட்டைப் பயன்படுத்தி கணிக்க முடியும் (எ.கா., ClF₃ T-வடிவமுடையது).",
              }
            ]
          }
        ]
      },
      {
        chapterName: 'd- and f-Block Elements',
        chapterNameTamil: 'd- மற்றும் f-தொகுதி தனிமங்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Cause of Color in KMnO₄',
                explanation: '**Mistake:** Attributing the intense purple color of KMnO₄ to d-d transitions.\n\n**How to Avoid:** In KMnO₄, the oxidation state of Mn is +7, which means it has a d⁰ configuration (no d-electrons). Therefore, d-d transitions are impossible. The color is due to a phenomenon called **Ligand to Metal Charge Transfer (LMCT)**, where an electron from an oxygen ligand momentarily jumps to an empty orbital on the metal.',
                explanationTamil: '**தவறு:** KMnO₄-இன் தீவிர ஊதா நிறத்தை d-d தாவல்களுக்குக் காரணம் கூறுவது.\n\n**தவிர்ப்பது எப்படி:** KMnO₄-இல், Mn-இன் ஆக்ஸிஜனேற்ற நிலை +7 ஆகும், அதாவது இது ஒரு d⁰ அமைப்பைக் கொண்டுள்ளது (d-எலக்ட்ரான்கள் இல்லை). எனவே, d-d தாவல்கள் சாத்தியமற்றது. இந்த நிறம் **ஈனியிலிருந்து உலோகத்திற்கு மின்னூட்டப் பரிமாற்றம் (LMCT)** எனப்படும் ஒரு நிகழ்வால் ஏற்படுகிறது, இங்கு ஒரு ஆக்ஸிஜன் ஈனியிலிருந்து ஒரு எலக்ட்ரான் தற்காலிகமாக உலோகத்தின் மீதுள்ள ஒரு காலி ஆர்பிட்டாலுக்குத் தாவுகிறது.',
              },
              {
                point: 'Consequences of Lanthanoid Contraction',
                explanation: '**Mistake:** Only memorizing the definition of lanthanoid contraction without understanding its effects.\n\n**How to Avoid:** The most important consequence is the similarity in size between the second (4d) and third (5d) transition series elements. This makes elements like **Zr and Hf**, or **Nb and Ta**, have almost identical radii and chemical properties, making them very difficult to separate.',
                explanationTamil: '**தவறு:** அதன் விளைவுகளைப் புரிந்து கொள்ளாமல் லாந்தனைடு குறுக்கத்தின் வரையறையை மட்டும் மனப்பாடம் செய்வது.\n\n**தவிர்ப்பது எப்படி:** மிக முக்கியமான விளைவு, இரண்டாவது (4d) மற்றும் மூன்றாவது (5d) இடைநிலைத் தொடர் தனிமங்களுக்கு இடையில் உள்ள அளவு ஒற்றுமை ஆகும். இது **Zr மற்றும் Hf**, அல்லது **Nb மற்றும் Ta** போன்ற தனிமங்கள் கிட்டத்தட்ட ஒரே மாதிரியான ஆரங்களையும் வேதியியல் பண்புகளையும் கொண்டிருக்கச் செய்கிறது, இது அவற்றைப் பிரிப்பதை மிகவும் கடினமாக்குகிறது.',
              },
            ]
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Disproportionation of Cu⁺",
                explanation: "**Concept:** In aqueous solution, the Copper(I) ion is unstable and undergoes disproportionation (simultaneous oxidation and reduction).\n**Reaction:** $2Cu^+(aq) \\rightarrow Cu^{2+}(aq) + Cu(s)$. \n**Reason:** The hydration enthalpy of Cu²⁺ is much more negative than that of Cu⁺, which compensates for the high second ionization enthalpy of Copper. This drives the reaction forward.",
                explanationTamil: "**கருத்து:** நீர்க்கரைசலில், காப்பர்(I) அயனி நிலையற்றது மற்றும் விகிதச்சிதைவுக்கு (ஒரே நேரத்தில் ஆக்சிஜனேற்றம் மற்றும் ஒடுக்கம்) உட்படுகிறது.\n**வினை:** $2Cu^+(aq) \\rightarrow Cu^{2+}(aq) + Cu(s)$. \n**காரணம்:** Cu²⁺-இன் நீரேற்ற என்தால்பி Cu⁺-ஐ விட மிகவும் எதிர்மறையாகும், இது காப்பரின் உயர் இரண்டாம் அயனியாக்கும் என்தால்பியை ஈடுசெய்கிறது. இது வினையை முன்னோக்கி செலுத்துகிறது.",
              },
            ]
          }
        ]
      },
       {
        chapterName: 'Coordination Compounds',
        chapterNameTamil: 'அணைவுச் சேர்மங்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Weak vs. Strong Field Ligands for VBT',
                explanation: '**Mistake:** Incorrectly predicting spin pairing and geometry because the ligand strength is not known or misremembered.\n\n**How to Avoid:** Memorize the spectrochemical series, at least the common ligands. **Strong field (causes pairing, forms low spin/inner orbital complexes):** CN⁻, CO, NO₂, en, NH₃. **Weak field (no pairing, forms high spin/outer orbital complexes):** H₂O, ox, OH⁻, F⁻, Cl⁻, Br⁻, I⁻. This distinction is crucial for VBT hybridization problems.',
                explanationTamil: '**தவறு:** ஈனியின் வலிமை தெரியாததால் அல்லது தவறாக நினைவில் வைத்திருப்பதால், சுழல் இணைதல் மற்றும் வடிவவியலை தவறாகக் கணித்தல்.\n\n**தவிர்ப்பது எப்படி:** நிறமாலை வேதியியல் தொடரை, குறைந்தபட்சம் பொதுவான ஈனிகளையாவது மனப்பாடம் செய்யுங்கள். **வலிமையான புலம் (இணைதல் நிகழும், குறைந்த சுழற்சி/உள் ஆர்பிட்டால் அணைவுச் சேர்மங்களை உருவாக்கும்):** CN⁻, CO, NO₂, en, NH₃. **பலவீனமான புலம் (இணைதல் இல்லை, உயர் சுழற்சி/வெளி ஆர்பிட்டால் அணைவுச் சேர்மங்களை உருவாக்கும்):** H₂O, ox, OH⁻, F⁻, Cl⁻, Br⁻, I⁻. VBT இனக்கலப்பு கணக்குகளுக்கு இந்த வேறுபாடு மிகவும் முக்கியம்.',
              },
              {
                point: 'IUPAC Naming Conventions',
                explanation: '**Mistake:** Forgetting to put "-ate" at the end of the metal name for an anionic complex, or getting the order of ligands wrong.\n\n**How to Avoid:** Always check if the coordination sphere is a cation, anion, or neutral. If it\'s an anion (e.g., [Fe(CN)₆]⁴⁻), the metal name ends in -ate (ferrate). Ligands are always named alphabetically, regardless of their charge. Prefixes like di-, tri- do not count for alphabetization.',
                explanationTamil: '**தவறு:** ஒரு எதிரயனி அணைவுச் சேர்மத்திற்கு உலோகப் பெயரின் இறுதியில் "-ate" என்று சேர்க்க மறப்பது, அல்லது ஈனிகளின் வரிசையைத் தவறாகப் பெறுவது.\n\n**தவிர்ப்பது எப்படி:** அணைவு கோளம் ஒரு நேரயனியா, எதிரயனியா அல்லது நடுநிலையானதா என்பதை எப்போதும் சரிபார்க்கவும். அது ஒரு எதிரயனியாக இருந்தால் (எ.கா., [Fe(CN)₆]⁴⁻), உலோகப் பெயர் -ate (ஃபெர்ரேட்) இல் முடியும். ஈனிகள் எப்போதும் அவற்றின் மின்னூட்டத்தைப் பொருட்படுத்தாமல் அகர வரிசைப்படி பெயரிடப்படுகின்றன. டை-, டிரை- போன்ற முன்னொட்டுகள் அகர வரிசைப்படுத்துதலுக்கு கணக்கில் கொள்ளப்படாது.',
              },
            ],
          },
          {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Synergic Bonding in Metal Carbonyls",
                explanation: "**Concept:** In metal carbonyls like [Ni(CO)₄], the bond consists of two components: a σ bond from the lone pair of carbon to the empty orbital of the metal, and a π bond from a filled d-orbital of the metal back to the empty π* anti-bonding orbital of CO. This back-bonding strengthens the M-C bond but weakens the C-O bond. This is called synergic bonding.",
                explanationTamil: "**கருத்து:** [Ni(CO)₄] போன்ற உலோக கார்போனைல்களில், பிணைப்பு இரண்டு கூறுகளைக் கொண்டுள்ளது: கார்பனின் தனித்த ஜோடியிலிருந்து உலோகத்தின் காலி ஆர்பிட்டாலுக்கு ஒரு σ பிணைப்பு, மற்றும் உலோகத்தின் நிரம்பிய d-ஆர்பிட்டாலிலிருந்து CO-இன் காலி π* எதிர்பிணைப்பு ஆர்பிட்டாலுக்கு ஒரு π பிணைப்பு. இந்த பின்தொடர் பிணைப்பு M-C பிணைப்பை வலுப்படுத்துகிறது ஆனால் C-O பிணைப்பை பலவீனப்படுத்துகிறது. இது ஒருங்கிணைந்த பிணைப்பு எனப்படும்.",
              },
              {
                point: "Chelate Effect",
                explanation: "**Concept:** Polydentate ligands (like ethylenediamine 'en' or oxalate 'ox') form more stable complexes than monodentate ligands. This is because they form stable ring structures with the central metal atom. This enhanced stability is known as the chelate effect.",
                explanationTamil: "**கீலேட் விளைவு:** பாலிடென்டேட் ஈனிகள் (எத்திலினிடயமீன் 'en' அல்லது ஆக்சலேட் 'ox' போன்றவை) மோனோடென்டேட் ஈனிகளை விட நிலையான அணைவுச் சேர்மங்களை உருவாக்குகின்றன. ஏனெனில் அவை மைய உலோக அணுவுடன் நிலையான வளைய அமைப்புகளை உருவாக்குகின்றன. இந்த மேம்பட்ட நிலைப்புத்தன்மை கீலேட் விளைவு என அழைக்கப்படுகிறது.",
              },
            ],
          },
        ],
      }
    ]
  },
  organic: {
    title: "Organic Chemistry",
    titleTamil: "கரிம வேதியியல்",
    chapters: [
      {
        chapterName: 'Aldehydes, Ketones, and Carboxylic Acids',
        chapterNameTamil: 'ஆல்டிஹைடுகள், கீட்டோன்கள் மற்றும் கார்பாக்சிலிக் அமிலங்கள்',
        sections: [
          {
            title: 'Common Mistakes & Doubts',
            titleTamil: 'பொதுவான தவறுகள் மற்றும் சந்தேகங்கள்',
            type: 'mistake',
            points: [
              {
                point: 'Aldol vs. Cannizzaro Reaction',
                explanation: '**Mistake:** Applying the wrong reaction to a given aldehyde.\n\n**How to Avoid:** The key is the **α-hydrogen**. **Aldol condensation** requires at least one α-hydrogen. **Cannizzaro reaction** is for aldehydes that have **NO** α-hydrogen (like formaldehyde, benzaldehyde).',
                explanationTamil: '**தவறு:** கொடுக்கப்பட்ட ஒரு ஆல்டிஹைடுக்கு தவறான வினையைப் பயன்படுத்துதல்.\n\n**தவிர்ப்பது எப்படி:** முக்கியமானது **α-ஹைட்ரஜன்** ஆகும். **ஆல்டால் குறுக்கத்திற்கு** குறைந்தது ஒரு α-ஹைட்ரஜன் தேவை. **கேனிசரோ வினை** என்பது α-ஹைட்ரஜன் **இல்லாத** ஆல்டிஹைடுகளுக்கு (ஃபார்மால்டிஹைடு, பென்சால்டிஹைடு போன்றவை) ஆகும்.',
              },
              {
                point: 'Distinguishing Aldehydes and Ketones',
                explanation: '**Mistake:** Forgetting which tests are positive for aldehydes only.\n\n**How to Avoid:** Aldehydes are easily oxidized, ketones are not. Remember: **Tollens\' test (silver mirror)** and **Fehling\'s test (red precipitate)** are positive ONLY for aldehydes. The 2,4-DNP test is positive for both.',
                explanationTamil: '**தவறு:** எந்த சோதனைகள் ஆல்டிஹைடுகளுக்கு மட்டுமே நேர்மறையானவை என்பதை மறப்பது.\n\n**தவிர்ப்பது எப்படி:** ஆல்டிஹைடுகள் எளிதில் ஆக்ஸிஜனேற்றமடைகின்றன, கீட்டோன்கள் இல்லை. நினைவில் கொள்க: **டாலன்ஸ் சோதனை (வெள்ளி ஆடி)** மற்றும் **ஃபெலிங் சோதனை (சிவப்பு வீழ்படிவு)** ஆகியவை ஆல்டிஹைடுகளுக்கு மட்டுமே நேர்மறையானவை. 2,4-DNP சோதனை இரண்டிற்கும் நேர்மறையானது.',
              },
            ],
          },
           {
            title: 'Rare Concepts & Problems',
            titleTamil: 'அரிய கருத்துக்கள் மற்றும் கணக்குகள்',
            type: 'rare',
            points: [
              {
                point: "Haloform Reaction Mechanism",
                explanation: "**Concept:** The Iodoform test (a type of Haloform reaction) works for methyl ketones or alcohols that can be oxidized to methyl ketones. The mechanism involves the repeated halogenation of the α-carbon in basic medium until a trihalo-ketone is formed, which is then cleaved by the base to form a haloform (CHI₃) and a carboxylate salt.",
                explanationTamil: "**கருத்து:** அயோடோஃபார்ம் சோதனை (ஒரு வகை ஹாலோஃபார்ம் வினை) மெத்தில் கீட்டோன்கள் அல்லது மெத்தில் கீட்டோன்களாக ஆக்ஸிஜனேற்றப்படக்கூடிய ஆல்கஹால்களுக்கு வேலை செய்கிறது. இந்த வினைவழிமுறை கார ஊடகத்தில் α-கார்பனின் தொடர்ச்சியான ஹாலஜனேற்றத்தை உள்ளடக்கியது, இது ஒரு டிரைஹாலோ-கீட்டோன் உருவாகும் வரை தொடர்கிறது, அது பின்னர் காரத்தால் பிளக்கப்பட்டு ஒரு ஹாலோஃபார்ம் (CHI₃) மற்றும் ஒரு கார்பாக்சிலேட் உப்பை உருவாக்குகிறது.",
              },
            ],
          },
          {
            title: 'Tricks & Shortcuts',
            titleTamil: 'தந்திரங்கள் மற்றும் குறுக்குவழிகள்',
            type: 'trick',
            points: [
              {
                point: 'Identifying Name Reactions',
                explanation: '**Trick:** Look for the key reagent!\n*   **Aldol:** Dilute base (NaOH, KOH).\n*   **Cannizzaro:** Concentrated base (50% NaOH).\n*   **Clemmensen:** Zn-Hg, HCl.\n*   **Wolff-Kishner:** Hydrazine (NH₂NH₂), KOH, Ethylene glycol.\n*   **Rosenmund:** H₂, Pd/BaSO₄.\n*   **Stephen:** SnCl₂, HCl.\nRecognizing the reagent is half the battle in solving name reaction problems.',
                explanationTamil: '**தந்திரம்:** முக்கிய கரணியைத் தேடுங்கள்!\n*   **ஆல்டால்:** நீர்த்த காரம் (NaOH, KOH).\n*   **கேனிசரோ:** அடர் காரம் (50% NaOH).\n*   **கிளெமென்சன்:** Zn-Hg, HCl.\n*   **வுல்ஃப்-கிஷ்ணர்:** ஹைட்ரசின் (NH₂NH₂), KOH, எத்திலீன் கிளைக்கால்.\n*   **ரோசன்மண்ட்:** H₂, Pd/BaSO₄.\n*   **ஸ்டீஃபன்:** SnCl₂, HCl.\nகரணியை அறிந்துகொள்வது பெயர் வினை கணக்குகளைத் தீர்ப்பதில் பாதி வெற்றியாகும்.',
              },
            ],
          }
        ],
      }
    ]
  },
};
