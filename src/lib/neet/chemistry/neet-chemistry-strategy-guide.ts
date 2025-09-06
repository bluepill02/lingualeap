
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

export const strategyGuideContent: ChapterStrategy[] = [
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
    ],
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
            point: 'Weak vs. Strong Field Ligands',
            explanation: '**Mistake:** Incorrectly predicting spin pairing and geometry because the ligand strength is not known.\n\n**How to Avoid:** Memorize the spectrochemical series, at least the common ligands. **Strong field (pairing occurs):** CN⁻, CO, en, NH₃. **Weak field (no pairing):** H₂O, ox, F⁻, Cl⁻, Br⁻, I⁻. This is crucial for VBT problems.',
            explanationTamil: '**தவறு:** ஈனியின் வலிமை தெரியாததால், சுழல் இணைதல் மற்றும் வடிவவியலை தவறாகக் கணித்தல்.\n\n**தவிர்ப்பது எப்படி:** நிறமாலை வேதியியல் தொடரை, குறைந்தபட்சம் பொதுவான ஈனிகளையாவது மனப்பாடம் செய்யுங்கள். **வலிமையான புலம் (இணைதல் நிகழும்):** CN⁻, CO, en, NH₃. **பலவீனமான புலம் (இணைதல் இல்லை):** H₂O, ox, F⁻, Cl⁻, Br⁻, I⁻. இது VBT கணக்குகளுக்கு மிகவும் முக்கியம்.',
          },
          {
            point: 'IUPAC Naming Conventions',
            explanation: '**Mistake:** Forgetting to put "-ate" at the end of the metal name for an anionic complex, or getting the order of ligands wrong.\n\n**How to Avoid:** Always check if the coordination sphere is a cation or an anion. If it\'s an anion (e.g., [Fe(CN)₆]⁴⁻), the metal name ends in -ate (ferrate). Ligands are always named alphabetically, regardless of their charge.',
            explanationTamil: '**தவறு:** ஒரு எதிரயனி அணைவுச் சேர்மத்திற்கு உலோகப் பெயரின் இறுதியில் "-ate" என்று சேர்க்க மறப்பது, அல்லது ஈனிகளின் வரிசையைத் தவறாகப் பெறுவது.\n\n**தவிர்ப்பது எப்படி:** அணைவு கோளம் ஒரு நேரயனியா அல்லது எதிரயனியா என்பதை எப்போதும் சரிபார்க்கவும். அது ஒரு எதிரயனியாக இருந்தால் (எ.கா., [Fe(CN)₆]⁴⁻), உலோகப் பெயர் -ate (ஃபெர்ரேட்) இல் முடியும். ஈனிகள் எப்போதும் அவற்றின் மின்னூட்டத்தைப் பொருட்படுத்தாமல் அகர வரிசைப்படி பெயரிடப்படுகின்றன.',
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
  },
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
    ],
  },
];

    