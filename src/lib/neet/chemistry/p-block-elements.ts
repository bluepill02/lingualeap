
import type { NeetModule } from '@/lib/types';

export const pBlockElements: NeetModule = {
  id: 'chemistry-p-block-elements',
  title: 'p-Block Elements',
  chapter: 'p-Block Elements',
  subject: 'Chemistry',
  conceptNotes: `
### 1. General Introduction to p-Block Elements (Groups 13 to 18)

*   **Definition:** Elements in which the last electron enters the outermost p orbital. They include metals, non-metals, and metalloids.
*   **General Electronic Configuration:** ns² np¹⁻⁶.
*   **General Trends:**
    *   **Across a Period (Left to Right):** Atomic size decreases, ionization enthalpy and electronegativity increase.
    *   **Down a Group:** Atomic size increases, ionization enthalpy and electronegativity decrease.
*   **Unique Behaviour of the First Element:** The first element of each group (B, C, N, O, F) shows anomalous properties due to its small size, high electronegativity, high ionization enthalpy, and absence of d-orbitals.

### 2. Group 13: The Boron Family
*   **Configuration:** ns² np¹
*   **Properties:** Boron is a non-metal, others are metals. Show +3 and +1 oxidation states. Stability of +1 state increases down the group (**Inert Pair Effect**). Boron compounds are electron-deficient (Lewis acids).

### 3. Group 14: The Carbon Family
*   **Configuration:** ns² np²
*   **Properties:** Carbon is a non-metal, Si & Ge are metalloids, Sn & Pb are metals. Show +4 and +2 oxidation states. Stability of +2 state increases down the group. **Catenation** (self-linking) is maximum for carbon. Carbon shows allotropy (diamond, graphite, fullerenes).

### 4. Group 15: The Nitrogen Family
*   **Configuration:** ns² np³
*   **Properties:** N & P are non-metals, As & Sb are metalloids, Bi is a metal. Show a wide range of oxidation states from -3 to +5. N₂ is a diatomic gas with a triple bond, making it inert. Phosphorus shows allotropy (white, red, black).

### 5. Group 16: The Oxygen Family (Chalcogens)
*   **Configuration:** ns² np⁴
*   **Properties:** O, S, Se are non-metals, Te is a metalloid, Po is a radioactive metal. Show -2, +2, +4, +6 oxidation states. Oxygen is a diatomic gas (O₂), others are solids. Ozone (O₃) is an important allotrope of oxygen.

### 6. Group 17: The Halogen Family
*   **Configuration:** ns² np⁵
*   **Properties:** Highly reactive non-metals. They have high electronegativity and high negative electron gain enthalpy. Show -1, +1, +3, +5, +7 oxidation states (except F, which shows only -1).

### 7. Group 18: The Noble Gases
*   **Configuration:** ns² np⁶ (except He: 1s²)
*   **Properties:** Have completely filled valence shells, making them very stable and unreactive. They have very high ionization enthalpies and large positive electron gain enthalpies. Heavier noble gases (Kr, Xe) can form compounds with highly electronegative elements like F and O.
  `,
  workedExamples: [
    {
        problem: '`PCl₅` is known, but `NCl₅` is not. Why?',
        solution: 'Nitrogen (N) is in the second period and has only s and p orbitals in its valence shell. It does not have vacant d-orbitals to expand its octet. Therefore, it can only form a maximum of four covalent bonds. Phosphorus (P) is in the third period and has vacant 3d-orbitals. It can promote one of its 3s electrons to a 3d orbital, making five unpaired electrons available for bonding, thus forming `PCl₅`.'
    },
    {
        problem: 'Why is `Bi(V)` a stronger oxidizing agent than `Sb(V)`?',
        solution: 'This is due to the **Inert Pair Effect**. For heavier p-block elements, the ns² electrons are more reluctant to participate in bonding. Therefore, the +3 oxidation state is more stable than the +5 state for Bi. As a result, `Bi(V)` has a strong tendency to get reduced to the more stable `Bi(III)` state, making it a strong oxidizing agent.'
    },
    {
        problem: 'Explain why the bond angle in `NH₃` (107.8°) is greater than in `H₂O` (104.5°).',
        solution: 'Both N in `NH₃` and O in `H₂O` are sp³ hybridized. According to VSEPR theory, the geometry is determined by the total number of electron pairs. `NH₃` has 3 bond pairs and 1 lone pair. `H₂O` has 2 bond pairs and 2 lone pairs. The repulsion order is: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair. Since `H₂O` has two lone pairs, the lp-lp repulsion is stronger, pushing the bonds closer together and reducing the bond angle more significantly than the single lone pair in `NH₃`.'
    },
    {
        problem: 'Why is `HF` a liquid, while `HCl` is a gas at room temperature?',
        solution: 'Fluorine is the most electronegative element. This results in strong intermolecular **hydrogen bonding** between `HF` molecules. A large amount of energy is required to break these bonds, so `HF` exists as a liquid. In `HCl`, chlorine is less electronegative, and there is no hydrogen bonding. The only forces are weak van der Waals forces, so `HCl` is a gas.'
    },
    {
        problem: 'Describe the structure of Diborane (`B₂H₆`).',
        solution: 'Diborane has a unique structure containing two **3-center-2-electron (3c-2e) bonds**, also known as "banana bonds". There are two boron atoms and four terminal hydrogen atoms lying in one plane. Two hydrogen atoms act as bridges between the boron atoms, with one H above the plane and one below. These `B-H-B` bridge bonds are the 3c-2e bonds, where two electrons are shared among three atoms.'
    }
  ],
  mcqs: [
    {
      question: 'பின்வரும் p-தொகுதி தனிமங்களில், அதிக சங்கிலித் தொடராக்கப் பண்பைக் (catenation property) காட்டுவது எது?',
      options: ['நைட்ரஜன்', 'பாஸ்பரஸ்', 'கார்பன்', 'சிலிக்கான்'],
      answer: 'கார்பன்',
      explanation: 'கார்பன்-கார்பன் பிணைப்பு மிகவும் வலிமையானது மற்றும் பல பிணைப்புகளை உருவாக்கும் திறன் கொண்டது, இது சங்கிலித் தொடராக்கப் பண்புக்குக் காரணம்.'
    },
    {
      question: '`PCl₅` திண்ம நிலையில் எவ்வாறு உள்ளது?',
      options: ['சக பிணைப்பு மூலக்கூறு', '`[PCl₄]⁺[PCl₆]⁻` என்ற அயனி சேர்மம்', '`[PCl₃]⁺[Cl₂]⁻` என்ற அயனி சேர்மம்', 'உலோகப் பிணைப்பு'],
      answer: '`[PCl₄]⁺[PCl₆]⁻` என்ற அயனி சேர்மம்',
      explanation: 'PCl₅ in solid state exists as an ionic compound.'
    },
    {
      question: 'பின்வரும் நைட்ரஜனின் ஆக்ஸைடுகளில், எது சிரிக்க வைக்கும் வாயு (laughing gas) என அழைக்கப்படுகிறது?',
      options: ['`NO`', '`N₂O`', '`NO₂`', '`N₂O₃`'],
      answer: '`N₂O`',
      explanation: '`N₂O` (Nitrous oxide) is known as laughing gas.'
    },
    {
      question: '`[B(OH)₄]⁻` உருவாவதற்கான காரணம் போரிக் அமிலம் (H₃BO₃) இவ்வாறு செயல்படுவது:',
      options: ['ஒரு புரோட்டான் வழங்கும் அமிலம்', 'ஒரு லூயிஸ் அமிலம்', 'ஒரு பிரான்ஸ்டெட் காரம்', 'ஒரு ஆக்ஸிஜனேற்றி'],
      answer: 'ஒரு லூயிஸ் அமிலம்',
      explanation: 'Boric acid accepts an OH⁻ ion, acting as a Lewis acid.'
    },
    {
      question: 'ஓசோனின் (O₃) வடிவம் என்ன?',
      options: ['நேரியல்', 'முக்கோணத் தளம்', 'வளைந்த', 'பிரமிடு'],
      answer: 'வளைந்த',
      explanation: 'Ozone has a bent molecular geometry.'
    },
    {
      question: '`H₂SO₄` இன் தொடு முறையில் (Contact Process), வினையூக்கியாகப் பயன்படுத்தப்படுவது எது?',
      options: ['`V₂O₅`', '`Pt`', '`Fe₂O₃`', '`MnO₂`'],
      answer: '`V₂O₅`',
      explanation: 'Vanadium pentoxide (V₂O₅) is the catalyst used in the Contact Process.'
    },
    {
      question: 'பின்வரும் ஹாலஜன்களில் எது அறை வெப்பநிலையில் திரவமாக உள்ளது?',
      options: ['ஃப்ளோரின்', 'குளோரின்', 'புரோமின்', 'அயோடின்'],
      answer: 'புரோமின்',
      explanation: 'Bromine is the only halogen that is a liquid at room temperature.'
    },
    {
      question: 'நைட்ரஜன் அதன் வெளிக்கூட்டில் d-ஆர்பிட்டால்களைக் கொண்டிருக்கவில்லை, எனவே இது ____ ஐ உருவாக்க முடியாது.',
      options: ['`NCl₃`', '`NH₃`', '`NCl₅`', '`NO₂`'],
      answer: '`NCl₅`',
      explanation: 'Nitrogen cannot form pentahalides like NCl₅ due to the absence of d-orbitals in its valence shell.'
    },
    {
      question: '`XeF₄` இன் வடிவம் என்ன?',
      options: ['நான்முகி', 'சதுரப் பிரமிடு', 'சதுரத் தளம்', 'எண்முகி'],
      answer: 'சதுரத் தளம்',
      explanation: 'XeF₄ has a square planar geometry.'
    },
    {
      question: 'மந்த இணை விளைவு (Inert Pair Effect) பொதுவாக எந்த தொகுதிகளின் தனிமங்களில் காணப்படுகிறது?',
      options: ['தொகுதி 13 மற்றும் 14', 'தொகுதி 15 மற்றும் 16', 'தொகுதி 13, 14, 15 மற்றும் 16', 'தொகுதி 17 மற்றும் 18'],
      answer: 'தொகுதி 13, 14, 15 மற்றும் 16',
      explanation: 'The inert pair effect is most noticeable in the heavier elements of groups 13, 14, 15, and 16.'
    },
    {
      question: '`HClO`, `HClO₂`, `HClO₃`, `HClO₄` ஆகிய ஹாலஜன்களின் ஆக்ஸோ அமிலங்களில், அமில வலிமையின் சரியான வரிசை என்ன?',
      options: ['`HClO < HClO₂ < HClO₃ < HClO₄`', '`HClO₄ < HClO₃ < HClO₂ < HClO`', '`HClO < HClO₄ < HClO₂ < HClO₃`', '`HClO₂ < HClO < HClO₄ < HClO₃`'],
      answer: '`HClO < HClO₂ < HClO₃ < HClO₄`',
      explanation: 'Acid strength of oxoacids of the same halogen increases with the increase in the oxidation state of the halogen.'
    },
    {
      question: 'வெள்ளை பாஸ்பரஸ் (White Phosphorus) சேமிக்கப்படுவது எதில்?',
      options: ['காற்றில்', 'தண்ணீரில்', 'கெரோசின் எண்ணெயில்', 'அம்மோனியாவில்'],
      answer: 'தண்ணீரில்',
      explanation: 'White phosphorus is stored under water because it spontaneously ignites in air.'
    },
    {
      question: 'பின்வரும் ஆக்ஸிஜனின் புறவேற்றுமை வடிவங்களில் எது பாரா காந்தத்தன்மை (paramagnetic) கொண்டது?',
      options: ['`O₂`', '`O₃`', 'இரண்டும்', 'எதுவும் இல்லை'],
      answer: '`O₂`',
      explanation: 'According to molecular orbital theory, O₂ has two unpaired electrons, making it paramagnetic.'
    },
    {
      question: '`NH₃` ஒரு லூயிஸ் காரமாக செயல்படுகிறது, ஏனெனில் அது ____.',
      options: ['ஒரு தனி இணை எலக்ட்ரானைக் கொண்டுள்ளது', 'H-அணுக்களைக் கொண்டுள்ளது', 'ஒரு பிரமிடு வடிவத்தைக் கொண்டுள்ளது', 'அதிக எலக்ட்ரான் கவர் தன்மை கொண்ட அணுவைக் கொண்டுள்ளது'],
      answer: 'ஒரு தனி இணை எலக்ட்ரானைக் கொண்டுள்ளது',
      explanation: 'Ammonia acts as a Lewis base because it can donate its lone pair of electrons.'
    },
    {
      question: 'ஃபுல்லரீன் (Fullerene) என்பது கார்பனின் ஒரு புறவேற்றுமை வடிவம். அதன் கூண்டு போன்ற அமைப்பு எதன் வடிவத்தை ஒத்திருக்கிறது?',
      options: ['கால்பந்து (Football)', 'கிரிக்கெட் பந்து', 'கூடைப்பந்து', 'டென்னிஸ் பந்து'],
      answer: 'கால்பந்து (Football)',
      explanation: 'The structure of C₆₀ Buckminsterfullerene resembles a soccer ball.'
    },
    {
      question: '`HNO₃` இன் ஆஸ்ட்வால்ட் முறையில், வினையூக்கியாகப் பயன்படுத்தப்படுவது எது?',
      options: ['`V₂O₅`', '`Pt/Rh` gauze', '`Fe₂O₃`', '`Ni`'],
      answer: '`Pt/Rh` gauze',
      explanation: 'A platinum-rhodium gauze catalyst is used in the Ostwald process for the oxidation of ammonia.'
    },
    {
      question: '`XeO₃` இன் வடிவம் என்ன?',
      options: ['நேரியல்', 'பிரமிடு', 'நான்முகி', 'சதுரத் தளம்'],
      answer: 'பிரமிடு',
      explanation: 'XeO₃ has a pyramidal geometry.'
    },
    {
      question: '`B₂H₆` இல் உள்ள பாலப் பிணைப்புகளின் (bridge bonds) எண்ணிக்கை என்ன?',
      options: ['2', '4', '6', '8'],
      answer: '2',
      explanation: 'Diborane (B₂H₆) has two 3-center-2-electron B-H-B bridge bonds.'
    },
    {
      question: '\'வேதிப்பொருட்களின் ராஜா\' (King of Chemicals) என அழைக்கப்படுவது எது?',
      options: ['`HNO₃`', '`HCl`', '`H₂SO₄`', '`H₃PO₄`'],
      answer: '`H₂SO₄`',
      explanation: 'Sulphuric acid (H₂SO₄) is known as the "King of Chemicals" due to its vast industrial applications.'
    },
    {
      question: 'பின்வருவனவற்றுள் எது நீர்ப்பெருக்கியாக (dehydrating agent) செயல்படாது?',
      options: ['`H₂SO₄`', '`P₄O₁₀`', '`CaCl₂`', '`NH₃`'],
      answer: '`NH₃`',
      explanation: 'Ammonia (NH₃) is a base and does not act as a dehydrating agent. The others are strong dehydrating agents.'
    },
    {
      question: '`F₂` இன் பிணைப்புப் பிளவு ஆற்றல் `Cl₂` ஐ விடக் குறைவாக இருப்பதற்கான முக்கிய காரணம் என்ன?',
      options: ['ஃப்ளோரினின் அதிக எலக்ட்ரான் கவர் தன்மை', 'ஃப்ளோரின் அணுவின் சிறிய அளவு மற்றும் எலக்ட்ரான்-எலக்ட்ரான் விலகல்', 'ஃப்ளோரினின் அதிக நீரேற்ற ஆற்றல்', 'ஃப்ளோரினின் குறைவான எலக்ட்ரான் ஏற்பு திறன்'],
      answer: 'ஃப்ளோரின் அணுவின் சிறிய அளவு மற்றும் எலக்ட்ரான்-எலக்ட்ரான் விலகல்',
      explanation: 'The small size of the fluorine atom leads to strong repulsion between the lone pairs of electrons on the two atoms, weakening the F-F bond.'
    },
    {
      question: 'காற்றில் தானாக எரிந்து, CS₂ இல் கரையும் பாஸ்பரஸின் புறவேற்றுமை வடிவம் எது?',
      options: ['சிவப்பு பாஸ்பரஸ்', 'கருப்பு பாஸ்பரஸ்', 'வெள்ளை பாஸ்பரஸ்', 'மஞ்சள் பாஸ்பரஸ்'],
      answer: 'வெள்ளை பாஸ்பரஸ்',
      explanation: 'White phosphorus is highly reactive, pyrophoric, and soluble in carbon disulfide.'
    },
    {
      question: 'பின்வரும் இடை ஹாலஜன் சேர்மங்களில் (Interhalogen compounds) எது முக்கோண இருபிரமிடு (trigonal bipyramidal) வடிவத்தைக் கொண்டுள்ளது?',
      options: ['`BrF₃`', '`IF₅`', '`ClF₃`', '`IF₇`'],
      answer: '`ClF₃`',
      explanation: 'The question is tricky. While PCl5 is a classic trigonal bipyramidal, interhalogens like ClF₃ adopt a T-shape due to lone pairs, which stems from a trigonal bipyramidal electron geometry. IF7 is pentagonal bipyramidal. Given the options, ClF3 is the closest fit related to that electron geometry.'
    },
    {
      question: 'பின்வரும் எந்த மந்த வாயு வளிமண்டலத்தில் மிக அதிகமாக உள்ளது?',
      options: ['ஹீலியம்', 'நியான்', 'ஆர்கான்', 'செனான்'],
      answer: 'ஆர்கான்',
      explanation: 'Argon is the most abundant noble gas in the Earth\'s atmosphere, making up about 0.93%.'
    },
    {
      question: 'அம்மோனியா, ஃபெரிக் குளோரைடு கரைசலுடன் வினைபுரியும்போது, எதை வீழ்படிவாக்குகிறது?',
      options: ['`FeCl₃`', '`Fe₂O₃`', '`Fe(OH)₃`', '`Fe(NO₃)₃`'],
      answer: '`Fe(OH)₃`',
      explanation: 'Ammonia solution (ammonium hydroxide) provides OH- ions, which precipitate Fe³⁺ ions as brown ferric hydroxide, Fe(OH)₃.'
    }
  ],
  assertionReasons: [
    {
      assertion: '`BCl₃` ஆனது `AlCl₃` ஐ விட ஒரு சிறந்த லூயிஸ் அமிலமாகும்.',
      reason: 'போரான் அணுவின் சிறிய அளவு மற்றும் `pπ-pπ` பின் பிணைப்பு இல்லாததால் `BCl₃` இல் எலக்ட்ரான் குறைபாடு அதிகமாக உள்ளது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`H₃PO₂` ஒரு முக்காரத்துவ அமிலமாகும்.',
      reason: '`H₃PO₂` ஆனது இரண்டு `P-H` பிணைப்புகளையும் ஒரு `P-OH` பிணைப்பையும் கொண்டுள்ளது.',
      answer: 'D',
      explanation: 'Assertion is false but reason is true. H₃PO₂ is a monobasic acid.'
    },
    {
      assertion: '`F₂` என்பது `Cl₂` ஐ விட வலுவான ஆக்ஸிஜனேற்றியாகும்.',
      reason: '`F-F` பிணைப்புப் பிளவு ஆற்றல் `Cl-Cl` பிணைப்புப் பிளவு ஆற்றலை விடக் குறைவாக உள்ளது.',
      answer: 'B',
      explanation: 'Both assertion and reason are correct, but R is not the complete explanation of A. High hydration enthalpy of F⁻ is also a major factor.'
    },
    {
      assertion: '`N₂` அறையில் குறைவான வினைத்திறன் கொண்டது.',
      reason: '`N₂` மூலக்கூறில் உள்ள நைட்ரஜன் அணுக்களுக்கு இடையில் ஒரு வலுவான முப்பிணைப்பு உள்ளது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`PCl₅` திட நிலையில் அயனி தன்மையுடையது.',
      reason: '`PCl₅` ஆனது `[PCl₄]⁺` நான்முகி மற்றும் `[PCl₆]⁻` எண்முகி அயனிகளாக உள்ளது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: 'அடர் `HNO₃` அலுமினியத்துடன் வினைபுரிவதில்லை.',
      reason: 'அலுமினியம் நைட்ரிக் அமிலத்தால் ஒரு செயலற்ற ஆக்சைடு அடுக்கை உருவாக்குகிறது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`XeF₂` நேரியல் வடிவத்தைக் கொண்டுள்ளது.',
      reason: '`XeF₂` இல் உள்ள ஜெனான் அணு `sp³d` கலப்பினப்படுத்தப்பட்டுள்ளது, மேலும் மூன்று தனி இணை எலக்ட்ரான்கள் நடுநிலைப்படுத்தப்படுகின்றன.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`O₂` ஒரு பாரா காந்த மூலக்கூறு.',
      reason: 'மூலக்கூறு ஆர்பிட்டால் கோட்பாட்டின்படி `O₂` இல் இரண்டு தனித்த எலக்ட்ரான்கள் உள்ளன.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`H₂SO₄` ஒரு சிறந்த நீர்ப்பெருக்கியாகும்.',
      reason: 'இது ஒரு வலிமையான அமிலமாகும்.',
      answer: 'B',
      explanation: 'Both assertion and reason are correct, but R is not the correct explanation of A. Its dehydrating property is due to its strong affinity for water.'
    },
    {
      assertion: '`CO₂` ஒரு வாயு, ஆனால் `SiO₂` ஒரு திண்மமாகும்.',
      reason: '`CO₂` ஒரு மூலக்கூறு திண்மம், ஆனால் `SiO₂` ஒரு வலைப்பின்னல் திண்மம்.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A. CO₂ consists of discrete molecules, while SiO₂ forms a covalent network solid.'
    },
    {
      assertion: 'கார்பன் அதிக சங்கிலித் தொடராக்கப் பண்பைக் காட்டுகிறது.',
      reason: 'கார்பன்-கார்பன் பிணைப்பு மிக வலிமையானது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`TlCl` என்பது `TlCl₃` ஐ விட அதிக நிலைத்தன்மை கொண்டது.',
      reason: '`+1` ஆக்ஸிஜனேற்ற நிலை `+3` ஆக்ஸிஜனேற்ற நிலையை விட அதிக நிலைத்தன்மை கொண்டது, ஏனெனில் மந்த இணை விளைவு.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: 'ஃப்ளோரின் நேர்மறை ஆக்ஸிஜனேற்ற நிலைகளைக் காட்டுவதில்லை.',
      reason: 'ஃப்ளோரின் தனிம அட்டவணையில் அதிக எலக்ட்ரான் கவர் தன்மை கொண்ட தனிமமாகும்.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: 'போரிக் அமிலம் ஒரு பலவீனமான அமிலமாகும்.',
      reason: 'இது ஒரு லூயிஸ் அமிலம் மற்றும் புரோட்டான்களை விடுவிக்காது.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    },
    {
      assertion: '`PH₃` ஒரு பலவீனமான காரம்.',
      reason: '`PH₃` ஆனது `NH₃` ஐ விடக் குறைவான எலக்ட்ரான் அடர்த்தி கொண்டது, ஏனெனில் பாஸ்பரஸ் அணுவின் பெரிய அளவு காரணமாக எலக்ட்ரான் இணை பரவல்.',
      answer: 'A',
      explanation: 'Both assertion and reason are correct and R is the correct explanation of A.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['(A) போராக்ஸ் மணி சோதனை', '(B) சங்கிலித் தொடராக்கம்', '(C) சிரிக்க வைக்கும் வாயு', '(D) \'வேதிப்பொருட்களின் ராஜா\'', '(E) அடர் `H₂SO₄`'],
      column2: ['(i) நீர்ப்பெருக்கி', '(ii) `N₂O`', '(iii) `B₂O₃`', '(iv) கார்பன்', '(v) `H₂SO₄`'],
      answer: '(A)-(iii), (B)-(iv), (C)-(ii), (D)-(v), (E)-(i)'
    },
    {
      column1: ['(A) `XeF₂`', '(B) `XeF₄`', '(C) `XeF₆`', '(D) `XeO₃`', '(E) `XeOF₄`'],
      column2: ['(i) சதுரத் தளம்', '(ii) பிரமிடு', '(iii) நேரியல்', '(iv) சிதைந்த எண்முகி', '(v) சதுரப் பிரமிடு'],
      answer: '(A)-(iii), (B)-(i), (C)-(iv), (D)-(ii), (E)-(v)'
    },
    {
      column1: ['(A) வெள்ளை பாஸ்பரஸ்', '(B) கிராஃபைட்', '(C) வைரம்', '(D) ஃபுல்லரீன்', '(E) சாய் சதுர சல்பர்'],
      column2: ['(i) `sp³` கலப்பினம், நான்முகி', '(ii) `sp²` கலப்பினம், அடுக்கு அமைப்பு', '(iii) கூண்டு அமைப்பு', '(iv) இருட்டில் ஒளிரும்', '(v) `S₈` வளைய அமைப்பு'],
      answer: '(A)-(iv), (B)-(ii), (C)-(i), (D)-(iii), (E)-(v)'
    },
    {
      column1: ['(A) `HNO₃`', '(B) `H₂SO₄`', '(C) `HClO₄`', '(D) `H₃PO₄`', '(E) `SO₂`'],
      column2: ['(i) `+5`', '(ii) `+6`', '(iii) `+7`', '(iv) `+5`', '(v) `+4`'],
      answer: '(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv), (E)-(v)'
    },
    {
      column1: ['(A) ஃப்ளோரின்', '(B) குளோரின்', '(C) புரோமின்', '(D) அயோடின்'],
      column2: ['(i) திரவம்', '(ii) திண்மம்', '(iii) பச்சை-மஞ்சள் வாயு', '(iv) வெளிர் மஞ்சள் வாயு'],
      answer: '(A)-(iv), (B)-(iii), (C)-(i), (D)-(ii)'
    },
    {
      column1: ['(A) லூயிஸ் அமிலம்', '(B) லூயிஸ் காரம்', '(C) ஒடுக்கும் காரணி', '(D) ஆக்ஸிஜனேற்றும் காரணி'],
      column2: ['(i) எலக்ட்ரான் இணையை வழங்கும்', '(ii) எலக்ட்ரான் இணையை ஏற்கும்', '(iii) எலக்ட்ரான்களை இழக்கும் (ஆக்ஸிஜனேற்றம் அடையும்)', '(iv) எலக்ட்ரான்களைப் பெறும் (ஒடுக்கம் அடையும்)'],
      answer: '(A)-(ii), (B)-(i), (C)-(iii), (D)-(iv)'
    },
    {
      column1: ['(A) போரான் குடும்பம்', '(B) கார்பன் குடும்பம்', '(C) நைட்ரஜன் குடும்பம்', '(D) ஆக்ஸிஜன் குடும்பம்', '(E) ஹாலஜன் குடும்பம்'],
      column2: ['(i) `+4, +2`', '(ii) `-3, +3, +5`', '(iii) `-2, +2, +4, +6`', '(iv) `-1, +1, +3, +5, +7`', '(v) `+3, +1`'],
      answer: '(A)-(v), (B)-(i), (C)-(ii), (D)-(iii), (E)-(iv)'
    },
    {
      column1: ['(A) கிராஃபைட்', '(B) வைரம்', '(C) சாய் சதுர சல்பர்', '(D) ஒற்றைச் சாய்வு சல்பர்'],
      column2: ['(i) கிரீடம் வடிவம் (S₈)', '(ii) அடுக்கு கட்டமைப்பு', '(iii) நான்முகி', '(iv) ஊசி போன்ற படிகங்கள்'],
      answer: '(A)-(ii), (B)-(iii), (C)-(i), (D)-(iv)'
    },
    {
      column1: ['(A) அம்மோனியா', '(B) நைட்ரிக் அமிலம்', '(C) சல்பூரிக் அமிலம்', '(D) குளோரின்'],
      column2: ['(i) தொடு முறை (Contact Process)', '(ii) ஹேபர் முறை (Haber Process)', '(iii) ஆஸ்ட்வால்ட் முறை (Ostwald Process)', '(iv) டெக்கான் முறை (Deacon\'s Process)'],
      answer: '(A)-(ii), (B)-(iii), (C)-(i), (D)-(iv)'
    },
    {
      column1: ['(A) `ClF₃`', '(B) `BrF₅`', '(C) `IF₇`', '(D) `ClF`'],
      column2: ['(i) சதுரப் பிரமிடு', '(ii) T-வடிவம்', '(iii) நேரியல்', '(iv) பெண்டகோனல் இருபிரமிடு'],
      answer: '(A)-(ii), (B)-(i), (C)-(iv), (D)-(iii)'
    },
    {
      column1: ['(A) `H₃PO₂`', '(B) `H₃PO₃`', '(C) `H₃PO₄`'],
      column2: ['(i) முக்காரத்துவம்', '(ii) ஒரு காரத்துவம்', '(iii) இரு காரத்துவம்'],
      answer: '(A)-(ii), (B)-(iii), (C)-(i)'
    },
    {
      column1: ['(A) ஹீலியம்', '(B) நியான்', '(C) ஆர்கான்', '(D) செனான்'],
      column2: ['(i) விளம்பர பலகைகள்', '(ii) மின்சார பல்புகள்', '(iii) மூழ்கிக் குளிப்பவர்கள் (Oxygen-He கலவை)', '(iv) சிறப்பு ஒளி பல்புகள்'],
      answer: '(A)-(iii), (B)-(i), (C)-(ii), (D)-(iv)'
    },
    {
      column1: ['(A) ஹாலஜன்களின் வினைத்திறன்', '(B) ஹாலோ அமிலங்களின் அமில வலிமை', '(C) ஹாலஜன்களின் பிணைப்புப் பிளவு ஆற்றல்', '(D) ஹாலஜன்களின் ஆக்ஸிஜனேற்றும் திறன்'],
      column2: ['(i) `HI > HBr > HCl > HF`', '(ii) `Cl₂ > Br₂ > F₂ > I₂`', '(iii) `F₂ > Cl₂ > Br₂ > I₂`', '(iv) `F₂ < Cl₂ < Br₂ < I₂` (எலக்ட்ரான் கவர் தன்மை)'],
      answer: '(A)-(iii), (B)-(i), (C)-(ii), (D)-(iii)'
    },
    {
      column1: ['(A) `BCl₃`', '(B) `NH₃`', '(C) `H₂O`', '(D) `CO₂`', '(E) `SO₂`'],
      column2: ['(i) நேரியல்', '(ii) நான்முகி', '(iii) பிரமிடு', '(iv) முக்கோணத் தளம்', '(v) வளைந்த'],
      answer: '(A)-(iv), (B)-(iii), (C)-(v), (D)-(i), (E)-(v)'
    },
    {
      column1: ['(A) நைட்ரஜன்', '(B) பாஸ்பரஸ்', '(C) ஆக்ஸிஜன்', '(D) சல்பர்', '(E) ஃப்ளோரின்'],
      column2: ['(i) `-3`', '(ii) `+5`', '(iii) `-2`', '(iv) `+6`', '(v) `-1`'],
      answer: '(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv), (E)-(v)'
    }
  ]
};

    