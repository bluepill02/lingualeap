import { NeetModule } from '@/types';

const pBlockElementsModule: NeetModule = {
  id: 'p-block-elements',
  title: 'p-Block Elements',
  subject: 'chemistry',
  chapterNumber: 10, // Assuming chapter 10 for p-Block elements
  sections: [
    // LEARN SECTION
    {
      type: 'learn',
      title: 'Concept Notes',
      title_ta: 'கருத்து குறிப்புகள்',
      content: [
        {
          type: 'text',
          content_en: 'The p-block of the periodic table is home to a diverse array of elements, encompassing metals, non-metals, and metalloids. These elements are characterized by the filling of p-orbitals in their outermost shell.',
          content_ta: 'தனிம அட்டவணையின் p-தொகுதியானது, உலோகங்கள், அலோகங்கள் மற்றும் உலோகப்போலிகள் உள்ளிட்ட பல்வேறு வகையான தனிமங்களின் இருப்பிடமாகும். இந்த தனிமங்கள் அவற்றின் வெளிப்புற கூட்டில் p-ஆர்பிட்டால்கள் நிரப்பப்படுவதன் மூலம் வகைப்படுத்தப்படுகின்றன.',
        },
        {
          type: 'text',
          content_en: 'General electronic configuration: $ns^2np^{1-6}$ (except He).',
          content_ta: 'பொது எலக்ட்ரான் அமைப்பு: $ns^2np^{1-6}$ (He தவிர).',
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 13 Elements: The Boron Family',
          content_ta: 'தொகுதி 13 தனிமங்கள்: போரான் குடும்பம்',
        },
        {
          type: 'text',
          content_en: 'Elements: Boron (B), Aluminium (Al), Gallium (Ga), Indium (In), Thallium (Tl).',
          content_ta: 'தனிமங்கள்: போரான் (B), அலுமினியம் (Al), காலியம் (Ga), இண்டியம் (In), தாலியம் (Tl).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^1$.',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^1$.',
            },
            {
              content_en: 'Trends: Atomic radius increases down the group, but there is a slight decrease from Al to Ga due to poor shielding by d-electrons.',
              content_ta: 'போக்குகள்: அணு ஆரம் தொகுதியில் கீழ்நோக்கி அதிகரிக்கிறது, ஆனால் d-எலக்ட்ரான்களின் மோசமான மறைப்பினால் Al இலிருந்து Ga க்கு சற்று குறைகிறது.',
            },
            {
              content_en: 'Oxidation states: +3 is common. +1 state becomes more prominent down the group due to the inert pair effect (e.g., Tl shows +1 more stably than +3).',
              content_ta: 'ஆக்சிஜனேற்ற நிலைகள்: +3 பொதுவானது. மந்த இணை விளைவு காரணமாக தொகுதியில் கீழ்நோக்கி +1 நிலை மிகவும் முக்கியத்துவம் பெறுகிறது (எ.கா., Tl +3 ஐ விட +1 ஐ நிலைத்தன்மையுடன் காட்டுகிறது).',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Important Compounds of Boron and Aluminium',
          content_ta: 'போரான் மற்றும் அலுமினியத்தின் முக்கியமான சேர்மங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Diborane ($B_2H_6$): Electron deficient compound with three-center two-electron (banana) bonds.',
              content_ta: 'டைபோரேன் ($B_2H_6$): மூன்று-மைய இரண்டு-எலக்ட்ரான் (வாழை) பிணைப்புகளைக் கொண்ட எலக்ட்ரான் குறைபாடுள்ள சேர்மம்.',
            },
            {
              content_en: 'Boric acid ($H_3BO_3$): A weak monobasic Lewis acid, acts as a proton donor by accepting $OH^-$ ions from water. Forms layered structure due to hydrogen bonding.',
              content_ta: 'போரிக் அமிலம் ($H_3BO_3$): ஒரு மெல்லிய ஒற்றைக்கார லூயிஸ் அமிலம், நீரிலிருந்து $OH^-$ அயனிகளை ஏற்றுக்கொண்டு புரோட்டான் தானியாக செயல்படுகிறது. ஹைட்ரஜன் பிணைப்பு காரணமாக அடுக்கி வைக்கப்பட்ட அமைப்பை உருவாக்குகிறது.',
            },
            {
              content_en: 'Borax ($Na_2B_4O_7 \cdot 10H_2O$): Used in borax bead test.',
              content_ta: 'போராக்ஸ் ($Na_2B_4O_7 \cdot 10H_2O$): போராக்ஸ் மணிக்கல் சோதனையில் பயன்படுத்தப்படுகிறது.',
            },
            {
              content_en: 'Aluminium chloride ($AlCl_3$): Lewis acid, exists as a dimer ($Al_2Cl_6$) in non-polar solvents and vapor phase.',
              content_ta: 'அலுமினியம் குளோரைடு ($AlCl_3$): லூயிஸ் அமிலம், துருவமற்ற கரைப்பான்கள் மற்றும் ஆவி நிலையில் ஒரு இருபடியாக ($Al_2Cl_6$) உள்ளது.',
            },
          ],
        },
        {
          type: 'interactive',
          title_en: '3D Structure of Diborane',
          title_ta: 'டைபோரேனின் 3D அமைப்பு',
          description_en: 'Explore the unique banana bonds and the spatial arrangement of atoms in Diborane.',
          description_ta: 'டைபோரேனில் உள்ள தனித்துவமான வாழைப் பிணைப்புகள் மற்றும் அணுக்களின் இடஞ்சார்ந்த அமைப்பை ஆராயவும்.',
          url: 'https://example.com/3d/diborane' // Placeholder for an actual 3D model URL
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 14 Elements: The Carbon Family',
          content_ta: 'தொகுதி 14 தனிமங்கள்: கார்பன் குடும்பம்',
        },
        {
          type: 'text',
          content_en: 'Elements: Carbon (C), Silicon (Si), Germanium (Ge), Tin (Sn), Lead (Pb).',
          content_ta: 'தனிமங்கள்: கார்பன் (C), சிலிக்கான் (Si), ஜெர்மானியம் (Ge), தகரம் (Sn), ஈயம் (Pb).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^2$.',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^2$.',
            },
            {
              content_en: 'Catenation: Carbon shows maximum catenation. C-C bond energy is high. Down the group, catenation tendency decreases.',
              content_ta: 'சங்கிலியாக்கம்: கார்பன் அதிகபட்ச சங்கிலியாக்கத்தைக் காட்டுகிறது. C-C பிணைப்பு ஆற்றல் அதிகமாகும். தொகுதியில் கீழ்நோக்கி சங்கிலியாக்கப் போக்கு குறைகிறது.',
            },
            {
              content_en: 'Oxidation states: +4 and +2. +2 state becomes more stable down the group due to the inert pair effect (e.g., $Pb^{2+}$ is more stable than $Pb^{4+}$).',
              content_ta: 'ஆக்சிஜனேற்ற நிலைகள்: +4 மற்றும் +2. மந்த இணை விளைவு காரணமாக தொகுதியில் கீழ்நோக்கி +2 நிலை மிகவும் நிலையானது (எ.கா., $Pb^{2+}$ ஆனது $Pb^{4+}$ ஐ விட நிலையானது).',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Allotropes of Carbon',
          content_ta: 'கார்பனின் புறவேற்றுமை வடிவங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Diamond: $sp^3$ hybridized, tetrahedral, hardest known natural substance, insulator.',
              content_ta: 'வைரம்: $sp^3$ கலப்பினம், நான்முகி அமைப்பு, அறியப்பட்ட இயற்கை பொருட்களிலேயே கடினமானது, மின்காப்புப் பொருள்.',
            },
            {
              content_en: 'Graphite: $sp^2$ hybridized, layered structure, good conductor of electricity, lubricant.',
              content_ta: 'கிராஃபைட்: $sp^2$ கலப்பினம், அடுக்கப்பட்ட அமைப்பு, மின்சாரத்தின் நல்ல கடத்தி, மசகு எண்ணெய்.',
            },
            {
              content_en: 'Fullerenes: Cage-like structures (e.g., $C_{60}$ Buckminsterfullerene).',
              content_ta: 'ஃபுல்லரின்கள்: கூண்டு போன்ற கட்டமைப்புகள் (எ.கா., $C_{60}$ பக்மின்ஸ்டர்ஃபுல்லரின்).',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Important Compounds of Silicon',
          content_ta: 'சிலிக்கானின் முக்கியமான சேர்மங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Silicon dioxide ($SiO_2$): Covalent network solid, main component of sand.',
              content_ta: 'சிலிக்கான் டை ஆக்சைடு ($SiO_2$): சக பிணைப்பு வலைப்பின்னல் திண்மம், மணலின் முக்கிய கூறு.',
            },
            {
              content_en: 'Silicones: Organosilicon polymers containing $R_2SiO$ repeating units. Water repellent, good electrical insulators.',
              content_ta: 'சிலிக்கோன்கள்: $R_2SiO$ தொடர்ச்சியான அலகுகளைக் கொண்ட கரிமசிலிக்கான் பாலிமர்கள். நீர் விரட்டும் தன்மை கொண்டது, நல்ல மின் காப்புப் பொருட்கள்.',
            },
            {
              content_en: 'Silicates: Contain $SiO_4^{4-}$ tetrahedral units. Examples: feldspar, mica, asbestos.',
              content_ta: 'சிலிக்கேட்டுகள்: $SiO_4^{4-}$ நான்முகி அலகுகளைக் கொண்டுள்ளன. எடுத்துக்காட்டுகள்: பெல்ட்ஸ்பார், மைக்கா, கல்நார்.',
            },
          ],
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 15 Elements: The Nitrogen Family',
          content_ta: 'தொகுதி 15 தனிமங்கள்: நைட்ரஜன் குடும்பம்',
        },
        {
          type: 'text',
          content_en: 'Elements: Nitrogen (N), Phosphorus (P), Arsenic (As), Antimony (Sb), Bismuth (Bi).',
          content_ta: 'தனிமங்கள்: நைட்ரஜன் (N), பாஸ்பரஸ் (P), ஆர்சனிக் (As), ஆன்டிமணி (Sb), பிஸ்மத் (Bi).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^3$.',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^3$.',
            },
            {
              content_en: 'Pnictogens: Collective name for Group 15 elements. Tendency to form $-3$ oxidation state (nitride, phosphide).',
              content_ta: 'நைட்ரஜன் குடும்ப தனிமங்கள்: தொகுதி 15 தனிமங்களுக்கான கூட்டுப் பெயர். $-3$ ஆக்சிஜனேற்ற நிலை (நைட்ரைடு, பாஸ்பைடு) உருவாக்கும் போக்கு.',
            },
            {
              content_en: 'Oxidation states: Common states are $-3, +3, +5$. N shows a wide range from $-3$ to $+5$. Bi predominantly shows $+3$ due to inert pair effect.',
              content_ta: 'ஆக்சிஜனேற்ற நிலைகள்: பொதுவான நிலைகள் $-3, +3, +5$. N ஆனது $-3$ முதல் $+5$ வரை பரந்த வரம்பைக் காட்டுகிறது. Bi ஆனது மந்த இணை விளைவு காரணமாக முக்கியமாக $+3$ ஐக் காட்டுகிறது.',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Important Compounds of Nitrogen and Phosphorus',
          content_ta: 'நைட்ரஜன் மற்றும் பாஸ்பரஸின் முக்கியமான சேர்மங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Ammonia ($NH_3$): Haber process for industrial production. Basic nature, forms hydrogen bonds.',
              content_ta: 'அம்மோனியா ($NH_3$): தொழில்துறை உற்பத்திக்கு ஹேபர் முறை. காரத்தன்மை, ஹைட்ரஜன் பிணைப்புகளை உருவாக்குகிறது.',
            },
            {
              content_en: 'Nitric acid ($HNO_3$): Ostwald process for industrial production. Strong oxidizing agent.',
              content_ta: 'நைட்ரிக் அமிலம் ($HNO_3$): தொழில்துறை உற்பத்திக்கு ஆஸ்வால்ட் முறை. வலிமையான ஆக்சிஜனேற்ற காரணி.',
            },
            {
              content_en: 'Phosphine ($PH_3$): Poisonous gas. Less basic than $NH_3$ due to less effective hydrogen bonding.',
              content_ta: 'பாஸ்பின் ($PH_3$): விஷ வாயு. $NH_3$ ஐ விட குறைவான காரத்தன்மை கொண்டது, ஏனெனில் குறைந்த திறம்பட்ட ஹைட்ரஜன் பிணைப்பு.',
            },
            {
              content_en: 'Phosphorus halides ($PCl_3, PCl_5$): $PCl_5$ has a trigonal bipyramidal structure in the gaseous and liquid phase, but in solid state it exists as an ionic solid, $[PCl_4]^+[PCl_6]^-$.',
              content_ta: 'பாஸ்பரஸ் ஹாலைடுகள் ($PCl_3, PCl_5$): $PCl_5$ வாயு மற்றும் திரவ நிலையில் ஒரு முக்கோண இருபிரமிடு அமைப்பைக் கொண்டுள்ளது, ஆனால் திண்ம நிலையில் அது $[PCl_4]^+[PCl_6]^-$ என்ற அயனி திண்மமாக உள்ளது.',
            },
            {
              content_en: 'Oxoacids of Phosphorus: Hypophosphorous acid ($H_3PO_2$), Phosphorous acid ($H_3PO_3$), Phosphoric acid ($H_3PO_4$). $H_3PO_2$ is monobasic, $H_3PO_3$ is dibasic, and $H_3PO_4$ is tribasic. Only P-OH bonds are ionisable.',
              content_ta: 'பாஸ்பரஸின் ஆக்சோஅமிலங்கள்: ஹைப்போபாஸ்பரஸ் அமிலம் ($H_3PO_2$), பாஸ்பரஸ் அமிலம் ($H_3PO_3$), பாஸ்பாரிக் அமிலம் ($H_3PO_4$). $H_3PO_2$ ஒற்றைக்காரமானது, $H_3PO_3$ இருகாரமானது, மற்றும் $H_3PO_4$ மும்மைக்காரமானது. P-OH பிணைப்புகள் மட்டுமே அயனியாக்கக்கூடியவை.',
            },
          ],
        },
        {
          type: 'interactive',
          title_en: 'Trends in p-Block Elements Properties',
          title_ta: 'p-தொகுதி தனிமங்களின் பண்புகளில் போக்குகள்',
          description_en: 'Visualize the trends in atomic radius, electronegativity, and ionization enthalpy across periods and down groups for p-block elements.',
          description_ta: 'p-தொகுதி தனிமங்களுக்கான காலங்கள் மற்றும் தொகுதிகளில் அணு ஆரம், எலக்ட்ரான் கவர்திறன் மற்றும் அயனியாக்கும் ஆற்றல் ஆகியவற்றின் போக்குகளை காட்சிப்படுத்தவும்.',
          url: 'https://example.com/interactive/pblock-trends' // Placeholder for an actual interactive visualization URL
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 16 Elements: The Oxygen Family (Chalcogens)',
          content_ta: 'தொகுதி 16 தனிமங்கள்: ஆக்சிஜன் குடும்பம் (சால்சோஜென்கள்)',
        },
        {
          type: 'text',
          content_en: 'Elements: Oxygen (O), Sulfur (S), Selenium (Se), Tellurium (Te), Polonium (Po).',
          content_ta: 'தனிமங்கள்: ஆக்சிஜன் (O), சல்பர் (S), செலினியம் (Se), டெலூரியம் (Te), பொலோனியம் (Po).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^4$.',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^4$.',
            },
            {
              content_en: 'Oxidation states: Common states are $-2, +2, +4, +6$. Oxygen primarily shows $-2$ (except peroxides, superoxides, $OF_2$).',
              content_ta: 'ஆக்சிஜனேற்ற நிலைகள்: பொதுவான நிலைகள் $-2, +2, +4, +6$. ஆக்சிஜன் முக்கியமாக $-2$ ஐக் காட்டுகிறது (பெராக்சைடுகள், சூப்பராக்சைடுகள், $OF_2$ தவிர).',
            },
            {
              content_en: 'Allotropy: Oxygen ($O_2, O_3$), Sulfur (rhombic, monoclinic, plastic).',
              content_ta: 'புறவேற்றுமை: ஆக்சிஜன் ($O_2, O_3$), சல்பர் (சாய்சதுர, ஒற்றைச்சரிவு, நெகிழி).',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Important Compounds of Oxygen and Sulfur',
          content_ta: 'ஆக்சிஜன் மற்றும் சல்பரின் முக்கியமான சேர்மங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Ozone ($O_3$): Allotrope of oxygen, strong oxidizing agent. Formed from $O_2$ in the presence of UV radiation.',
              content_ta: 'ஓசோன் ($O_3$): ஆக்சிஜனின் புறவேற்றுமை வடிவம், வலிமையான ஆக்சிஜனேற்ற காரணி. புற ஊதா கதிர்வீச்சு முன்னிலையில் $O_2$ இலிருந்து உருவாகிறது.',
            },
            {
              content_en: 'Sulfur dioxide ($SO_2$): Colorless gas with pungent smell. Reduces $Fe^{3+}$ to $Fe^{2+}$, $KMnO_4$ to $Mn^{2+}$.',
              content_ta: 'சல்பர் டை ஆக்சைடு ($SO_2$): கடுமையான வாசனை கொண்ட நிறமற்ற வாயு. $Fe^{3+}$ ஐ $Fe^{2+}$ ஆகவும், $KMnO_4$ ஐ $Mn^{2+}$ ஆகவும் குறைக்கிறது.',
            },
            {
              content_en: 'Sulfuric acid ($H_2SO_4$): King of chemicals. Contact process for industrial production. Strong dehydrating agent, oxidizing agent, and acid.',
              content_ta: 'சல்பியூரிக் அமிலம் ($H_2SO_4$): வேதிப்பொருட்களின் ராஜா. தொழில்துறை உற்பத்திக்கு தொடுமுறை. வலிமையான நீர் நீக்கும் காரணி, ஆக்சிஜனேற்ற காரணி மற்றும் அமிலம்.',
            },
            {
              content_en: 'Oxoacids of Sulfur: Sulfurous acid ($H_2SO_3$), Sulfuric acid ($H_2SO_4$), Peroxodisulfuric acid ($H_2S_2O_8$), Thiosulfuric acid ($H_2S_2O_3$).',
              content_ta: 'சல்பரின் ஆக்சோஅமிலங்கள்: சல்பூரஸ் அமிலம் ($H_2SO_3$), சல்பியூரிக் அமிலம் ($H_2SO_4$), பெராக்சோடிசல்பியூரிக் அமிலம் ($H_2S_2O_8$), தையோசல்பியூரிக் அமிலம் ($H_2S_2O_3$).',
            },
          ],
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 17 Elements: The Halogen Family',
          content_ta: 'தொகுதி 17 தனிமங்கள்: ஹாலஜன் குடும்பம்',
        },
        {
          type: 'text',
          content_en: 'Elements: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I), Astatine (At).',
          content_ta: 'தனிமங்கள்: புளூரின் (F), குளோரின் (Cl), புரோமின் (Br), அயோடின் (I), அஸ்டாடைன் (At).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^5$.',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^5$.',
            },
            {
              content_en: 'Highly reactive non-metals, readily gain one electron to achieve noble gas configuration. Form $X^-$ ions.',
              content_ta: 'அதிக வினைத்திறன் கொண்ட அலோகங்கள், noble gas கட்டமைப்பைப் பெற ஒரு எலக்ட்ரானை எளிதில் பெறுகின்றன. $X^-$ அயனிகளை உருவாக்குகின்றன.',
            },
            {
              content_en: 'Electronegativity decreases down the group. Fluorine is the most electronegative element.',
              content_ta: 'எலக்ட்ரான் கவர்திறன் தொகுதியில் கீழ்நோக்கி குறைகிறது. புளூரின் மிகவும் எலக்ட்ரான் கவர்திறன் கொண்ட தனிமம்.',
            },
            {
              content_en: 'Bond dissociation enthalpy: $Cl_2 > Br_2 > F_2 > I_2$. The unusually low bond dissociation enthalpy of $F_2$ is due to repulsion between lone pairs of electrons on small F atoms.',
              content_ta: 'பிணைப்பு பிரிப்பு ஆற்றல்: $Cl_2 > Br_2 > F_2 > I_2$. $F_2$ இன் அசாதாரணமாக குறைந்த பிணைப்பு பிரிப்பு ஆற்றல் சிறிய F அணுக்களில் உள்ள தனித்த எலக்ட்ரான் இணைகளுக்கு இடையிலான விலக்கு காரணமாகும்.',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Important Compounds of Halogens',
          content_ta: 'ஹாலஜன்களின் முக்கியமான சேர்மங்கள்',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Hydrogen halides (HX): Acidic strength increases from HF to HI. HF forms hydrogen bonds.',
              content_ta: 'ஹைட்ரஜன் ஹாலைடுகள் (HX): அமிலத்தன்மை HF இலிருந்து HI வரை அதிகரிக்கிறது. HF ஹைட்ரஜன் பிணைப்புகளை உருவாக்குகிறது.',
            },
            {
              content_en: 'Oxoacids of Halogens: Hypohalous acid (HOX), Halous acid ($HOXO$), Halic acid ($HOXO_2$), Perhalic acid ($HOXO_3$). Acidic strength increases with increasing oxidation state of halogen.',
              content_ta: 'ஹாலஜன்களின் ஆக்சோஅமிலங்கள்: ஹைப்போஹாலஸ் அமிலம் (HOX), ஹாலஸ் அமிலம் ($HOXO$), ஹாலிக் அமிலம் ($HOXO_2$), பெர்ஹாலிக் அமிலம் ($HOXO_3$). ஹாலஜனின் ஆக்சிஜனேற்ற நிலை அதிகரிக்கும்போது அமிலத்தன்மை அதிகரிக்கிறது.',
            },
            {
              content_en: 'Interhalogen compounds: Formed between two different halogens (e.g., $ClF_3, BrF_5, IF_7$). More reactive than halogens (except $F_2$).',
              content_ta: 'இடை ஹாலஜன் சேர்மங்கள்: இரண்டு வெவ்வேறு ஹாலஜன்களுக்கு இடையே உருவாகின்றன (எ.கா., $ClF_3, BrF_5, IF_7$). ஹாலஜன்களை ( $F_2$ தவிர) விட வினைத்திறன் மிக்கவை.',
            },
          ],
        },
        {
          type: 'heading',
          level: 2,
          content_en: 'Group 18 Elements: The Noble Gases',
          content_ta: 'தொகுதி 18 தனிமங்கள்: மந்த வாயுக்கள்',
        },
        {
          type: 'text',
          content_en: 'Elements: Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn).',
          content_ta: 'தனிமங்கள்: ஹீலியம் (He), நியான் (Ne), ஆர்கான் (Ar), கிரிப்டான் (Kr), செனான் (Xe), ரேடான் (Rn).',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Electronic configuration: $ns^2np^6$ (except He, which is $1s^2$).',
              content_ta: 'எலக்ட்ரான் அமைப்பு: $ns^2np^6$ (He தவிர, அது $1s^2$).',
            },
            {
              content_en: 'Monoatomic gases, chemically unreactive due to stable octet/duet configuration and high ionization enthalpy. Down the group, ionization enthalpy decreases.',
              content_ta: 'ஒற்றை அணு வாயுக்கள், நிலையான ஆக்டேட்/இரட்டை அமைப்பு மற்றும் அதிக அயனியாக்கும் ஆற்றல் காரணமாக வேதியியல் ரீதியாக மந்தமானவை. தொகுதியில் கீழ்நோக்கி, அயனியாக்கும் ஆற்றல் குறைகிறது.',
            },
          ],
        },
        {
          type: 'heading',
          level: 3,
          content_en: 'Compounds of Xenon',
          content_ta: 'செனான் சேர்மங்கள்',
        },
        {
          type: 'text',
          content_en: 'Although noble gases are generally unreactive, Xenon forms compounds with highly electronegative elements like Fluorine and Oxygen.',
          content_ta: 'மந்த வாயுக்கள் பொதுவாக வினைத்திறன் அற்றவையாக இருந்தாலும், செனான் புளூரின் மற்றும் ஆக்சிஜன் போன்ற அதிக எலக்ட்ரான் கவர்திறன் கொண்ட தனிமங்களுடன் சேர்மங்களை உருவாக்குகிறது.',
        },
        {
          type: 'list',
          items: [
            {
              content_en: 'Xenon fluorides: $XeF_2$ (linear), $XeF_4$ (square planar), $XeF_6$ (distorted octahedral). Prepared by direct reaction of Xe and $F_2$ under specific conditions.',
              content_ta: 'செனான் புளூரைடுகள்: $XeF_2$ (நேர்கோட்டு), $XeF_4$ (சதுர தள), $XeF_6$ (சிதைந்த எண்முகி). குறிப்பிட்ட நிலைமைகளின் கீழ் Xe மற்றும் $F_2$ இன் நேரடி வினை மூலம் தயாரிக்கப்படுகிறது.',
            },
            {
              content_en: 'Xenon oxides: $XeO_3$ (pyramidal), $XeO_4$ (tetrahedral). Formed by hydrolysis of fluorides.',
              content_ta: 'செனான் ஆக்சைடுகள்: $XeO_3$ (பிரமிடு), $XeO_4$ (நான்முகி). புளூரைடுகளின் நீர் பகுப்பு மூலம் உருவாகிறது.',
            },
            {
              content_en: 'Xenon oxyfluorides: $XeOF_4$ (square pyramidal).',
              content_ta: 'செனான் ஆக்சிபுளூரைடுகள்: $XeOF_4$ (சதுர பிரமிடு).',
            },
          ],
        },
      ],
    },

    // WORKED EXAMPLES SECTION
    {
      type: 'workedExamples',
      title: 'Worked Examples',
      title_ta: 'தீர்க்கப்பட்ட எடுத்துக்காட்டுகள்',
      examples: [
        {
          id: 'example-1',
          question_en: 'Which of the following statements is incorrect regarding boron and aluminium?',
          question_ta: 'போரான் மற்றும் அலுமினியம் தொடர்பாக பின்வரும் கூற்றுகளில் எது தவறானது?',
          options_en: [
            'Boron has a smaller atomic radius than Aluminium.',
            'Aluminium is a better reducing agent than Boron.',
            'Boron forms covalent compounds while Aluminium forms ionic compounds.',
            'The oxidation state of +1 is more stable for Thallium than for Aluminium.'
          ],
          options_ta: [
            'போரான் அலுமினியத்தை விட சிறிய அணு ஆரத்தைக் கொண்டுள்ளது.',
            'அலுமினியம் போரானை விட சிறந்த ஒடுக்கும் காரணி.',
            'போரான் சக பிணைப்பு சேர்மங்களை உருவாக்குகிறது, அதேசமயம் அலுமினியம் அயனி சேர்மங்களை உருவாக்குகிறது.',
            'தாலியத்திற்கு அலுமினியத்தை விட +1 ஆக்சிஜனேற்ற நிலை மிகவும் நிலையானது.'
          ],
          correctAnswer: 2, // Index of the correct option
          explanation_en: 'Boron forms predominantly covalent compounds due to its small size and high ionization enthalpy. Aluminium also forms covalent compounds, especially in its anhydrous halide form ($AlCl_3$), but it also forms ionic compounds ($AlF_3$). So, the statement that Aluminium only forms ionic compounds is incorrect. Aluminium is a strong reducing agent.',
          explanation_ta: 'போரான் அதன் சிறிய அளவு மற்றும் அதிக அயனியாக்கும் ஆற்றல் காரணமாக முக்கியமாக சக பிணைப்பு சேர்மங்களை உருவாக்குகிறது. அலுமினியம் சக பிணைப்பு சேர்மங்களையும் உருவாக்குகிறது, குறிப்பாக அதன் நீரற்ற ஹாலைடு வடிவத்தில் ($AlCl_3$), ஆனால் அது அயனி சேர்மங்களையும் ($AlF_3$) உருவாக்குகிறது. எனவே, அலுமினியம் அயனி சேர்மங்களை மட்டுமே உருவாக்குகிறது என்ற கூற்று தவறானது. அலுமினியம் ஒரு வலிமையான ஒடுக்கும் காரணி.',
          tip_en: 'Remember that while general trends exist, specific exceptions and nuances, especially for lighter elements, are important. The inert pair effect also plays a crucial role for heavier p-block elements.',
          tip_ta: 'பொதுவான போக்குகள் இருந்தாலும், குறிப்பாக இலகுவான தனிமங்களுக்கு, குறிப்பிட்ட விதிவிலக்குகள் மற்றும் நுணுக்கங்கள் முக்கியமானவை என்பதை நினைவில் கொள்ளுங்கள். மந்த இணை விளைவு கனமான p-தொகுதி தனிமங்களுக்கு ஒரு முக்கிய பங்கைக் வகிக்கிறது.',
        },
        {
          id: 'example-2',
          question_en: 'Identify the incorrect statement about the group 14 elements.',
          question_ta: 'தொகுதி 14 தனிமங்கள் பற்றி தவறான கூற்றை அடையாளம் காணவும்.',
          options_en: [
            'The stability of +2 oxidation state increases down the group.',
            'Carbon shows maximum catenation.',
            'Silicones are water-repellent organosilicon polymers.',
            'Lead (Pb) forms stable $PbI_4$ compound.'
          ],
          options_ta: [
            '+2 ஆக்சிஜனேற்ற நிலையின் நிலைத்தன்மை தொகுதியில் கீழ்நோக்கி அதிகரிக்கிறது.',
            'கார்பன் அதிகபட்ச சங்கிலியாக்கத்தைக் காட்டுகிறது.',
            'சிலிக்கோன்கள் நீர் விரட்டும் கரிமசிலிக்கான் பாலிமர்கள்.',
            'ஈயம் (Pb) நிலையான $PbI_4$ சேர்மத்தை உருவாக்குகிறது.'
          ],
          correctAnswer: 3, // Index of the correct option
          explanation_en: 'Lead (Pb) predominantly shows a +2 oxidation state due to the inert pair effect. The +4 oxidation state of Pb is less stable and acts as a strong oxidizing agent. $PbI_4$ does not exist because $Pb^{4+}$ is a strong oxidizing agent and $I^-$ is a strong reducing agent, leading to the reduction of $Pb^{4+}$ to $Pb^{2+}$ and oxidation of $I^-$ to $I_2$. Thus, $PbI_2$ is formed, not $PbI_4$.',
          explanation_ta: 'மந்த இணை விளைவு காரணமாக ஈயம் (Pb) முக்கியமாக +2 ஆக்சிஜனேற்ற நிலையைக் காட்டுகிறது. Pb இன் +4 ஆக்சிஜனேற்ற நிலை குறைவாக நிலையானது மற்றும் ஒரு வலிமையான ஆக்சிஜனேற்ற காரணியாக செயல்படுகிறது. $PbI_4$ இல்லை, ஏனெனில் $Pb^{4+}$ ஒரு வலிமையான ஆக்சிஜனேற்ற காரணி மற்றும் $I^-$ ஒரு வலிமையான ஒடுக்கும் காரணி, இது $Pb^{4+}$ ஐ $Pb^{2+}$ ஆக குறைப்பதற்கும் $I^-$ ஐ $I_2$ ஆக ஆக்சிஜனேற்றம் செய்வதற்கும் வழிவகுக்கிறது. எனவே, $PbI_2$ உருவாகிறது, $PbI_4$ அல்ல.',
          tip_en: 'Remember the inert pair effect for heavier elements in p-block, which causes lower oxidation states to be more stable. Also, consider redox properties when predicting compound stability.',
          tip_ta: 'p-தொகுதியில் உள்ள கனமான தனிமங்களுக்கு மந்த இணை விளைவை நினைவில் கொள்ளுங்கள், இது குறைந்த ஆக்சிஜனேற்ற நிலைகள் மிகவும் நிலையானதாக இருக்க காரணமாகிறது. மேலும், சேர்ம நிலைத்தன்மையைக் கணிக்கும்போது ரிடாக்ஸ் பண்புகளைக் கருத்தில் கொள்ளுங்கள்.',
        },
        {
          id: 'example-3',
          question_en: 'Which of the following oxoacids of phosphorus is a monobasic acid?',
          question_ta: 'பாஸ்பரஸின் பின்வரும் ஆக்சோஅமிலங்களில் எது ஒற்றைக்கார அமிலமாகும்?',
          options_en: [
            '$H_3PO_4$',
            '$H_3PO_3$',
            '$H_3PO_2$',
            '$H_4P_2O_7$'
          ],
          options_ta: [
            '$H_3PO_4$',
            '$H_3PO_3$',
            '$H_3PO_2$',
            '$H_4P_2O_7$'
          ],
          correctAnswer: 2, // Index of the correct option ($H_3PO_2$)
          explanation_en: 'The basicity of oxoacids of phosphorus is determined by the number of P-OH bonds, as only the hydrogen atoms attached to oxygen are ionisable. In $H_3PO_2$ (hypophosphorous acid), there is one P-OH bond and two P-H bonds. Therefore, it is monobasic. $H_3PO_3$ is dibasic, and $H_3PO_4$ is tribasic.',
          explanation_ta: 'பாஸ்பரஸின் ஆக்சோஅமிலங்களின் காரத்தன்மை, ஆக்ஸிஜனுடன் இணைக்கப்பட்ட ஹைட்ரஜன் அணுக்கள் மட்டுமே அயனியாக்கக்கூடியவை என்பதால், P-OH பிணைப்புகளின் எண்ணிக்கையால் தீர்மானிக்கப்படுகிறது. $H_3PO_2$ (ஹைப்போபாஸ்பரஸ் அமிலம்) இல், ஒரு P-OH பிணைப்பு மற்றும் இரண்டு P-H பிணைப்புகள் உள்ளன. எனவே, இது ஒற்றைக்காரமானது. $H_3PO_3$ இருகாரமானது, மற்றும் $H_3PO_4$ மும்மைக்காரமானது.',
          tip_en: 'To determine the basicity of oxoacids, draw their structures and count the number of P-OH bonds. P-H bonds are not acidic.',
          tip_ta: 'ஆக்சோஅமிலங்களின் காரத்தன்மையைத் தீர்மானிக்க, அவற்றின் கட்டமைப்புகளை வரைந்து P-OH பிணைப்புகளின் எண்ணிக்கையை எண்ணுங்கள். P-H பிணைப்புகள் அமிலத்தன்மை அற்றவை.',
        },
        {
          id: 'example-4',
          question_en: 'Which of the following halogens has the highest bond dissociation enthalpy?',
          question_ta: 'பின்வரும் ஹாலஜன்களில் எது அதிக பிணைப்பு பிரிப்பு ஆற்றலைக் கொண்டுள்ளது?',
          options_en: [
            '$F_2$',
            '$Cl_2$',
            '$Br_2$',
            '$I_2$'
          ],
          options_ta: [
            '$F_2$',
            '$Cl_2$',
            '$Br_2$',
            '$I_2$'
          ],
          correctAnswer: 1, // Index of the correct option ($Cl_2$)
          explanation_en: 'The bond dissociation enthalpies of halogens follow the order: $Cl_2 > Br_2 > F_2 > I_2$. Although Fluorine is the smallest and most electronegative, the unusually low bond dissociation enthalpy of $F_2$ is due to the strong inter-electronic repulsion between the lone pairs of electrons on the small, adjacent fluorine atoms. This repulsion weakens the F-F bond.',
          explanation_ta: 'ஹாலஜன்களின் பிணைப்பு பிரிப்பு ஆற்றல்கள் பின்வரும் வரிசையில் உள்ளன: $Cl_2 > Br_2 > F_2 > I_2$. புளூரின் மிகச்சிறிய மற்றும் அதிக எலக்ட்ரான் கவர்திறன் கொண்ட தனிமமாக இருந்தாலும், $F_2$ இன் அசாதாரணமாக குறைந்த பிணைப்பு பிரிப்பு ஆற்றல் சிறிய, அருகிலுள்ள புளூரின் அணுக்களில் உள்ள தனித்த எலக்ட்ரான் இணைகளுக்கு இடையிலான வலுவான எலக்ட்ரான் விலக்கு காரணமாகும். இந்த விலக்கு F-F பிணைப்பை பலவீனப்படுத்துகிறது.',
          tip_en: 'Be aware of exceptions to general periodic trends. The small size of fluorine atoms leads to significant lone pair-lone pair repulsion, weakening the bond.',
          tip_ta: 'பொதுவான காலப்போக்குகளுக்கு விதிவிலக்குகளை அறிந்திருங்கள். புளூரின் அணுக்களின் சிறிய அளவு தனித்த இணை-தனித்த இணை விலக்கிற்கு வழிவகுக்கிறது, இது பிணைப்பை பலவீனப்படுத்துகிறது.',
        },
        {
          id: 'example-5',
          question_en: 'The shape of $XeF_4$ is:',
          question_ta: '$XeF_4$ இன் வடிவம்:',
          options_en: [
            'Linear',
            'Tetrahedral',
            'Square planar',
            'Trigonal bipyramidal'
          ],
          options_ta: [
            'நேர்கோட்டு',
            'நான்முகி',
            'சதுர தள',
            'முக்கோண இருபிரமிடு'
          ],
          correctAnswer: 2, // Index of the correct option (Square planar)
          explanation_en: 'To determine the shape of $XeF_4$, we use VSEPR theory. Xenon is the central atom. Number of valence electrons in Xe = 8. Number of electrons contributed by 4 F atoms = 4. Total valence electrons = 8 + 4 = 12. Number of electron pairs = 12/2 = 6. Four bond pairs (Xe-F bonds) and two lone pairs. According to VSEPR, 6 electron pairs lead to an octahedral electron geometry. With 4 bond pairs and 2 lone pairs, the lone pairs occupy positions opposite to minimize repulsion, resulting in a square planar molecular geometry.',
          explanation_ta: '$XeF_4$ இன் வடிவத்தை தீர்மானிக்க, நாம் VSEPR கோட்பாட்டைப் பயன்படுத்துகிறோம். செனான் மைய அணு. Xe இல் உள்ள இணைதிறன் எலக்ட்ரான்களின் எண்ணிக்கை = 8. 4 F அணுக்களால் பங்களிக்கப்பட்ட எலக்ட்ரான்களின் எண்ணிக்கை = 4. மொத்த இணைதிறன் எலக்ட்ரான்கள் = 8 + 4 = 12. எலக்ட்ரான் இணைகளின் எண்ணிக்கை = 12/2 = 6. நான்கு பிணைப்பு இணைகள் (Xe-F பிணைப்புகள்) மற்றும் இரண்டு தனித்த இணைகள். VSEPR இன் படி, 6 எலக்ட்ரான் இணைகள் ஒரு எண்முகி எலக்ட்ரான் வடிவவியலுக்கு வழிவகுக்கும். 4 பிணைப்பு இணைகள் மற்றும் 2 தனித்த இணைகளுடன், தனித்த இணைகள் விலக்கைக் குறைக்க எதிர் நிலைகளை ஆக்கிரமிக்கின்றன, இதன் விளைவாக ஒரு சதுர தள மூலக்கூறு வடிவவியல் ஏற்படுகிறது.',
          tip_en: 'For molecules with lone pairs, always determine the electron geometry first, and then the molecular geometry by considering the positions of the lone pairs to minimize repulsion.',
          tip_ta: 'தனித்த இணைகளைக் கொண்ட மூலக்கூறுகளுக்கு, எப்போதும் முதலில் எலக்ட்ரான் வடிவவியலை தீர்மானிக்கவும், பின்னர் தனித்த இணைகளின் நிலைகளை விலக்கைக் குறைக்க கருத்தில் கொண்டு மூலக்கூறு வடிவவியலை தீர்மானிக்கவும்.',
        },
      ],
    },

    // PRACTICE QUESTIONS SECTION
    {
      type: 'practiceQuestions',
      title: 'Practice Questions',
      title_ta: 'பயிற்சி கேள்விகள்',
      mcqs: [
        {
          id: 'mcq-1',
          question_en: 'Which of the following elements does not belong to the p-block?',
          question_ta: 'பின்வரும் தனிமங்களில் எது p-தொகுதிக்கு சொந்தமானது அல்ல?',
          options_en: ['Boron', 'Silicon', 'Oxygen', 'Scandium'],
          options_ta: ['போரான்', 'சிலிக்கான்', 'ஆக்சிஜன்', 'ஸ்காண்டியம்'],
          correctAnswer: 3,
          explanation_en: 'Scandium (Sc) is a d-block element, while Boron, Silicon, and Oxygen are p-block elements.',
          explanation_ta: 'ஸ்காண்டியம் (Sc) ஒரு d-தொகுதி தனிமம், அதேசமயம் போரான், சிலிக்கான் மற்றும் ஆக்சிஜன் p-தொகுதி தனிமங்கள்.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-2',
          question_en: 'The inert pair effect is most prominent in which group?',
          question_ta: 'மந்த இணை விளைவு எந்த தொகுதியில் மிகவும் முக்கியமானது?',
          options_en: ['Group 13', 'Group 14', 'Group 15', 'All of the above in heavier elements'],
          options_ta: ['தொகுதி 13', 'தொகுதி 14', 'தொகுதி 15', 'மேற்கண்ட அனைத்தும் கனமான தனிமங்களில்'],
          correctAnswer: 3,
          explanation_en: 'The inert pair effect, where the $ns^2$ electrons remain inert and do not participate in bonding, becomes significant for heavier elements in groups 13, 14, 15, and 16. It is a general phenomenon across these groups, especially noticeable in lower oxidation states for elements like Tl, Pb, Bi, Po. So, all of the above for heavier elements is the best answer.',
          explanation_ta: 'மந்த இணை விளைவு, $ns^2$ எலக்ட்ரான்கள் மந்தமாக இருந்து பிணைப்பில் பங்கேற்காதது, தொகுதி 13, 14, 15 மற்றும் 16 இல் உள்ள கனமான தனிமங்களுக்கு முக்கியத்துவம் பெறுகிறது. இது இந்த தொகுதிகள் முழுவதும் ஒரு பொதுவான நிகழ்வு, குறிப்பாக Tl, Pb, Bi, Po போன்ற தனிமங்களுக்கு குறைந்த ஆக்சிஜனேற்ற நிலைகளில் கவனிக்கப்படுகிறது. எனவே, கனமான தனிமங்களுக்கு மேற்கண்ட அனைத்தும் சிறந்த பதில்.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-3',
          question_en: 'Which of the following allotropes of carbon is a good conductor of electricity?',
          question_ta: 'கார்பனின் பின்வரும் புறவேற்றுமை வடிவங்களில் எது மின்சாரத்தின் நல்ல கடத்தி?',
          options_en: ['Diamond', 'Graphite', 'Fullerene', 'All of these'],
          options_ta: ['வைரம்', 'கிராஃபைட்', 'ஃபுல்லரின்', 'இவை அனைத்தும்'],
          correctAnswer: 1,
          explanation_en: 'Graphite has a layered structure where each carbon atom is $sp^2$ hybridized and bonded to three other carbon atoms. The remaining unhybridized p-orbital forms a delocalized electron cloud, allowing for electrical conductivity. Diamond is an insulator. Fullerenes are semiconductors.',
          explanation_ta: 'கிராஃபைட் ஒரு அடுக்கப்பட்ட அமைப்பைக் கொண்டுள்ளது, அங்கு ஒவ்வொரு கார்பன் அணுவும் $sp^2$ கலப்பினம் மற்றும் மூன்று பிற கார்பன் அணுக்களுடன் பிணைக்கப்பட்டுள்ளது. மீதமுள்ள கலப்பினமற்ற p-ஆர்பிட்டால் ஒரு பரவலாக்கப்பட்ட எலக்ட்ரான் மேகத்தை உருவாக்குகிறது, இது மின் கடத்துத்திறனை அனுமதிக்கிறது. வைரம் ஒரு மின்காப்புப் பொருள். ஃபுல்லரின்கள் குறைக்கடத்திகள்.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-4',
          question_en: 'Borax bead test is used to identify:',
          question_ta: 'போராக்ஸ் மணிக்கல் சோதனை எதைக் கண்டறியப் பயன்படுகிறது?',
          options_en: [
            'Acidic radicals',
            'Basic radicals',
            'Noble gases',
            'Halogens'
          ],
          options_ta: [
            'அமில மூலக்கூறுகள்',
            'கார மூலக்கூறுகள்',
            'மந்த வாயுக்கள்',
            'ஹாலஜன்கள்'
          ],
          correctAnswer: 1,
          explanation_en: 'Borax bead test is used for the qualitative analysis of metal ions (basic radicals) which form characteristic colored metaborates.',
          explanation_ta: 'போராக்ஸ் மணிக்கல் சோதனை, தனித்துவமான வண்ண மெட்டபோரேட்டுகளை உருவாக்கும் உலோக அயனிகளின் (கார மூலக்கூறுகள்) தரமான பகுப்பாய்வுக்காகப் பயன்படுத்தப்படுகிறது.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-5',
          question_en: 'The strongest reducing agent among Group 15 hydrides is:',
          question_ta: 'தொகுதி 15 ஹைட்ரைடுகளில் வலிமையான ஒடுக்கும் காரணி எது?',
          options_en: ['$NH_3$', '$PH_3$', '$AsH_3$', '$BiH_3$'],
          options_ta: ['$NH_3$', '$PH_3$', '$AsH_3$', '$BiH_3$'],
          correctAnswer: 3, // $BiH_3$
          explanation_en: 'The reducing character of Group 15 hydrides increases down the group. This is because the M-H bond strength decreases down the group (N-H > P-H > As-H > Sb-H > Bi-H), making it easier to release hydrogen. Thus, $BiH_3$ is the strongest reducing agent.',
          explanation_ta: 'தொகுதி 15 ஹைட்ரைடுகளின் ஒடுக்கும் தன்மை தொகுதியில் கீழ்நோக்கி அதிகரிக்கிறது. ஏனெனில் M-H பிணைப்பு வலிமை தொகுதியில் கீழ்நோக்கி குறைகிறது (N-H > P-H > As-H > Sb-H > Bi-H), இது ஹைட்ரஜனை வெளியிடுவதை எளிதாக்குகிறது. எனவே, $BiH_3$ தான் வலிமையான ஒடுக்கும் காரணி.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-6',
          question_en: 'Which of the following represents the correct order of acidic strength of oxoacids of halogens?',
          question_ta: 'ஹாலஜன்களின் ஆக்சோஅமிலங்களின் அமிலத்தன்மையின் சரியான வரிசையை பின்வருவனவற்றுள் எது குறிக்கிறது?',
          options_en: [
            '$HClO < HClO_2 < HClO_3 < HClO_4$',
            '$HClO_4 < HClO_3 < HClO_2 < HClO$',
            '$HClO < HClO_4 < HClO_2 < HClO_3$',
            '$HClO_2 < HClO < HClO_3 < HClO_4$'
          ],
          options_ta: [
            '$HClO < HClO_2 < HClO_3 < HClO_4$',
            '$HClO_4 < HClO_3 < HClO_2 < HClO$',
            '$HClO < HClO_4 < HClO_2 < HClO_3$',
            '$HClO_2 < HClO < HClO_3 < HClO_4$'
          ],
          correctAnswer: 0,
          explanation_en: 'The acidic strength of oxoacids of halogens increases with increasing oxidation state of the central halogen atom. The oxidation states are: HClO (+1), HClO2 (+3), HClO3 (+5), HClO4 (+7). Therefore, the correct order of acidic strength is $HClO < HClO_2 < HClO_3 < HClO_4$.',
          explanation_ta: 'ஹாலஜன்களின் ஆக்சோஅமிலங்களின் அமிலத்தன்மை மைய ஹாலஜன் அணுவின் ஆக்சிஜனேற்ற நிலை அதிகரிக்கும்போது அதிகரிக்கிறது. ஆக்சிஜனேற்ற நிலைகள்: HClO (+1), HClO2 (+3), HClO3 (+5), HClO4 (+7). எனவே, அமிலத்தன்மையின் சரியான வரிசை $HClO < HClO_2 < HClO_3 < HClO_4$.',
          neetFrequency: 5,
        },
        {
          id: 'mcq-7',
          question_en: 'Which noble gas forms the maximum number of compounds?',
          question_ta: 'எந்த மந்த வாயு அதிக எண்ணிக்கையிலான சேர்மங்களை உருவாக்குகிறது?',
          options_en: ['Helium', 'Neon', 'Argon', 'Xenon'],
          options_ta: ['ஹீலியம்', 'நியான்', 'ஆர்கான்', 'செனான்'],
          correctAnswer: 3,
          explanation_en: 'Among noble gases, Xenon (Xe) forms the maximum number of compounds, primarily with highly electronegative elements like Fluorine and Oxygen, due to its larger size and lower ionization enthalpy compared to other noble gases.',
          explanation_ta: 'மந்த வாயுக்களில், செனான் (Xe) அதிக எண்ணிக்கையிலான சேர்மங்களை உருவாக்குகிறது, முக்கியமாக புளூரின் மற்றும் ஆக்சிஜன் போன்ற அதிக எலக்ட்ரான் கவர்திறன் கொண்ட தனிமங்களுடன், அதன் பெரிய அளவு மற்றும் பிற மந்த வாயுக்களுடன் ஒப்பிடும்போது குறைந்த அயனியாக்கும் ஆற்றல் காரணமாக.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-8',
          question_en: 'The incorrect statement about $SF_6$ is:',
          question_ta: '$SF_6$ பற்றி தவறான கூற்று:',
          options_en: [
            'It has an octahedral structure.',
            'It is extremely reactive.',
            'It is thermally stable.',
            'It is used as a gaseous electrical insulator.'
          ],
          options_ta: [
            'இது ஒரு எண்முகி அமைப்பைக் கொண்டுள்ளது.',
            'இது மிகவும் வினைத்திறன் கொண்டது.',
            'இது வெப்பநிலையில் நிலையானது.',
            'இது ஒரு வாயு மின் காப்புப் பொருளாகப் பயன்படுத்தப்படுகிறது.'
          ],
          correctAnswer: 1,
          explanation_en: '$SF_6$ has an octahedral structure and is kinetically very inert. This is because the six fluorine atoms protect the sulfur atom from attack by reagents, preventing its decomposition. It is thermally stable and used as a gaseous electrical insulator.',
          explanation_ta: '$SF_6$ ஒரு எண்முகி அமைப்பைக் கொண்டுள்ளது மற்றும் இயக்கவியல் ரீதியாக மிகவும் மந்தமானது. ஏனெனில் ஆறு புளூரின் அணுக்கள் சல்பர் அணுவை வினையூக்கிகளால் தாக்குதலிலிருந்து பாதுகாக்கின்றன, அதன் சிதைவைத் தடுக்கின்றன. இது வெப்பநிலையில் நிலையானது மற்றும் ஒரு வாயு மின் காப்புப் பொருளாகப் பயன்படுத்தப்படுகிறது.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-9',
          question_en: 'Which of the following compounds has a three-center two-electron bond?',
          question_ta: 'பின்வரும் சேர்மங்களில் எது மூன்று-மைய இரண்டு-எலக்ட்ரான் பிணைப்பைக் கொண்டுள்ளது?',
          options_en: ['$BH_3$', '$CH_4$', '$B_2H_6$', '$SiH_4$'],
          options_ta: ['$BH_3$', '$CH_4$', '$B_2H_6$', '$SiH_4$'],
          correctAnswer: 2,
          explanation_en: 'Diborane ($B_2H_6$) is an electron-deficient compound that contains two three-center two-electron (3c-2e) or banana bonds, where two boron atoms and one hydrogen atom share two electrons.',
          explanation_ta: 'டைபோரேன் ($B_2H_6$) ஒரு எலக்ட்ரான் குறைபாடுள்ள சேர்மம், இது இரண்டு மூன்று-மைய இரண்டு-எலக்ட்ரான் (3c-2e) அல்லது வாழை பிணைப்புகளைக் கொண்டுள்ளது, அங்கு இரண்டு போரான் அணுக்கள் மற்றும் ஒரு ஹைட்ரஜன் அணு இரண்டு எலக்ட்ரான்களைப் பகிர்ந்து கொள்கின்றன.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-10',
          question_en: 'The contact process is used for the manufacture of:',
          question_ta: 'தொடுமுறை எதை உற்பத்தி செய்யப் பயன்படுகிறது?',
          options_en: ['Ammonia', 'Nitric acid', 'Sulfuric acid', 'Phosphoric acid'],
          options_ta: ['அம்மோனியா', 'நைட்ரிக் அமிலம்', 'சல்பியூரிக் அமிலம்', 'பாஸ்பாரிக் அமிலம்'],
          correctAnswer: 2,
          explanation_en: 'The contact process is the industrial method for the manufacture of Sulfuric acid ($H_2SO_4$). Ammonia is made by the Haber process, and nitric acid by the Ostwald process.',
          explanation_ta: 'தொடுமுறை என்பது சல்பியூரிக் அமிலம் ($H_2SO_4$) உற்பத்தி செய்வதற்கான தொழில்துறை முறையாகும். அம்மோனியா ஹேபர் முறையிலும், நைட்ரிக் அமிலம் ஆஸ்வால்ட் முறையிலும் தயாரிக்கப்படுகிறது.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-11',
          question_en: 'Which of the following is an amphoteric oxide?',
          question_ta: 'பின்வரும் ஆக்சைடுகளில் எது ஈரியல்பு ஆக்சைடு?',
          options_en: ['$B_2O_3$', '$Al_2O_3$', '$CO_2$', '$SiO_2$'],
          options_ta: ['$B_2O_3$', '$Al_2O_3$', '$CO_2$', '$SiO_2$'],
          correctAnswer: 1,
          explanation_en: '$Al_2O_3$ (Aluminium oxide) is an amphoteric oxide, meaning it reacts with both acids and bases. $B_2O_3$ is acidic, $CO_2$ is acidic, and $SiO_2$ is acidic.',
          explanation_ta: '$Al_2O_3$ (அலுமினியம் ஆக்சைடு) ஒரு ஈரியல்பு ஆக்சைடு ஆகும், அதாவது இது அமிலங்கள் மற்றும் காரங்கள் இரண்டோடும் வினைபுரிகிறது. $B_2O_3$ அமிலத்தன்மை கொண்டது, $CO_2$ அமிலத்தன்மை கொண்டது, மற்றும் $SiO_2$ அமிலத்தன்மை கொண்டது.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-12',
          question_en: 'The geometry of $PCl_5$ in the solid state is:',
          question_ta: 'திண்ம நிலையில் $PCl_5$ இன் வடிவியல்:',
          options_en: [
            'Trigonal bipyramidal',
            'Tetrahedral and octahedral',
            'Square pyramidal',
            'Pentagonal bipyramidal'
          ],
          options_ta: [
            'முக்கோண இருபிரமிடு',
            'நான்முகி மற்றும் எண்முகி',
            'சதுர பிரமிடு',
            'ஐங்கோண இருபிரமிடு'
          ],
          correctAnswer: 1,
          explanation_en: 'In the solid state, $PCl_5$ exists as an ionic solid, $[PCl_4]^+\ [PCl_6]^-$. The cation $[PCl_4]^+$ is tetrahedral, and the anion $[PCl_6]^-$ is octahedral.',
          explanation_ta: 'திண்ம நிலையில், $PCl_5$ ஒரு அயனி திண்மமாக உள்ளது, $[PCl_4]^+\ [PCl_6]^-$. நேர்மின் அயனி $[PCl_4]^+$ நான்முகி வடிவிலும், எதிர்மின் அயனி $[PCl_6]^-$ எண்முகி வடிவிலும் உள்ளது.',
          neetFrequency: 5,
        },
        {
          id: 'mcq-13',
          question_en: 'The increasing order of the boiling points of the hydrides of Group 16 elements is:',
          question_ta: 'தொகுதி 16 தனிமங்களின் ஹைட்ரைடுகளின் கொதிநிலைகளின் அதிகரிக்கும் வரிசை:',
          options_en: [
            '$H_2S < H_2Se < H_2Te < H_2O$',
            '$H_2O < H_2S < H_2Se < H_2Te$',
            '$H_2S < H_2Se < H_2O < H_2Te$',
            '$H_2O < H_2Te < H_2Se < H_2S$'
          ],
          options_ta: [
            '$H_2S < H_2Se < H_2Te < H_2O$',
            '$H_2O < H_2S < H_2Se < H_2Te$',
            '$H_2S < H_2Se < H_2O < H_2Te$',
            '$H_2O < H_2Te < H_2Se < H_2S$'
          ],
          correctAnswer: 0,
          explanation_en: 'Generally, boiling points increase down the group due to increasing van der Waals forces. However, $H_2O$ has an exceptionally high boiling point due to extensive intermolecular hydrogen bonding. So, the order is $H_2S < H_2Se < H_2Te < H_2O$.',
          explanation_ta: 'பொதுவாக, வான் டெர் வால்ஸ் விசைகள் அதிகரிப்பதால் கொதிநிலைகள் தொகுதியில் கீழ்நோக்கி அதிகரிக்கும். இருப்பினும், $H_2O$ விரிவான மூலக்கூறிடை ஹைட்ரஜன் பிணைப்பு காரணமாக அசாதாரணமாக அதிக கொதிநிலையைக் கொண்டுள்ளது. எனவே, வரிசை $H_2S < H_2Se < H_2Te < H_2O$.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-14',
          question_en: 'Which of the following statements is true regarding ozone ($O_3$)?',
          question_ta: 'ஓசோன் ($O_3$) தொடர்பாக பின்வரும் கூற்றுகளில் எது சரியானது?',
          options_en: [
            'It is a linear molecule.',
            'It is diamagnetic.',
            'It acts as a reducing agent.',
            'It has two O-O bond lengths of equal value.'
          ],
          options_ta: [
            'இது ஒரு நேர்கோட்டு மூலக்கூறு.',
            'இது டயாமக்னடிக்.',
            'இது ஒரு ஒடுக்கும் காரணியாக செயல்படுகிறது.',
            'இது சம மதிப்புடைய இரண்டு O-O பிணைப்பு நீளங்களைக் கொண்டுள்ளது.'
          ],
          correctAnswer: 3,
          explanation_en: 'Ozone ($O_3$) has a bent structure, not linear. It is diamagnetic (all electrons are paired). It is a powerful oxidizing agent. Due to resonance, the two O-O bond lengths in ozone are identical and intermediate between a single and a double bond.',
          explanation_ta: 'ஓசோன் ($O_3$) ஒரு வளைந்த அமைப்பைக் கொண்டுள்ளது, நேர்கோட்டு அல்ல. இது டயாமக்னடிக் (அனைத்து எலக்ட்ரான்களும் இணையாக உள்ளன). இது ஒரு சக்திவாய்ந்த ஆக்சிஜனேற்ற காரணியாகும். ஒத்ததிர்வு காரணமாக, ஓசோனில் உள்ள இரண்டு O-O பிணைப்பு நீளங்கள் ஒரே மாதிரியானவை மற்றும் ஒற்றை மற்றும் இரட்டை பிணைப்புக்கு இடையில் இடைப்பட்டவை.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-15',
          question_en: 'The basic character of the oxides of Group 13 elements ($M_2O_3$) increases in the order:',
          question_ta: 'தொகுதி 13 தனிமங்களின் ஆக்சைடுகளின் ($M_2O_3$) காரத்தன்மை பின்வரும் வரிசையில் அதிகரிக்கிறது:',
          options_en: [
            '$B_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$',
            '$Tl_2O_3 < In_2O_3 < Ga_2O_3 < Al_2O_3 < B_2O_3$',
            '$Al_2O_3 < B_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$',
            '$B_2O_3 < Tl_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3$'
          ],
          options_ta: [
            '$B_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$',
            '$Tl_2O_3 < In_2O_3 < Ga_2O_3 < Al_2O_3 < B_2O_3$',
            '$Al_2O_3 < B_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$',
            '$B_2O_3 < Tl_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3$'
          ],
          correctAnswer: 0,
          explanation_en: 'The acidic character of oxides generally decreases down a group, and conversely, the basic character increases down the group. $B_2O_3$ is acidic, $Al_2O_3$ and $Ga_2O_3$ are amphoteric, and $In_2O_3$ and $Tl_2O_3$ are basic, with $Tl_2O_3$ being the most basic. So the basic character increases in the order $B_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$.',
          explanation_ta: 'ஆக்சைடுகளின் அமிலத்தன்மை பொதுவாக ஒரு தொகுதியில் கீழ்நோக்கி குறைகிறது, மற்றும் அதற்கு மாறாக, காரத்தன்மை தொகுதியில் கீழ்நோக்கி அதிகரிக்கிறது. $B_2O_3$ அமிலத்தன்மை கொண்டது, $Al_2O_3$ மற்றும் $Ga_2O_3$ ஈரியல்பு தன்மை கொண்டவை, மற்றும் $In_2O_3$ மற்றும் $Tl_2O_3$ காரத்தன்மை கொண்டவை, $Tl_2O_3$ மிகவும் காரத்தன்மை கொண்டது. எனவே காரத்தன்மை $B_2O_3 < Al_2O_3 < Ga_2O_3 < In_2O_3 < Tl_2O_3$ என்ற வரிசையில் அதிகரிக்கிறது.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-16',
          question_en: 'Which of the following interhalogen compounds is correctly matched with its shape?',
          question_ta: 'பின்வரும் இடைஹாலஜன் சேர்மங்களில் எது அதன் வடிவத்துடன் சரியாகப் பொருத்தப்பட்டுள்ளது?',
          options_en: [
            '$ClF_3$ : Linear',
            '$BrF_5$ : Trigonal bipyramidal',
            '$IF_7$ : Pentagonal bipyramidal',
            '$ICl_3$ : Tetrahedral'
          ],
          options_ta: [
            '$ClF_3$ : நேர்கோட்டு',
            '$BrF_5$ : முக்கோண இருபிரமிடு',
            '$IF_7$ : ஐங்கோண இருபிரமிடு',
            '$ICl_3$ : நான்முகி'
          ],
          correctAnswer: 2,
          explanation_en: '$ClF_3$ is T-shaped. $BrF_5$ is square pyramidal. $IF_7$ is pentagonal bipyramidal. $ICl_3$ exists as a dimer and has a planar structure.',
          explanation_ta: '$ClF_3$ T-வடிவம் கொண்டது. $BrF_5$ சதுர பிரமிடு. $IF_7$ ஐங்கோண இருபிரமிடு. $ICl_3$ ஒரு இருபடியாக உள்ளது மற்றும் ஒரு தள அமைப்பைக் கொண்டுள்ளது.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-17',
          question_en: 'The shape of $XeOF_4$ is:',
          question_ta: '$XeOF_4$ இன் வடிவம்:',
          options_en: [
            'Linear',
            'Trigonal bipyramidal',
            'Square pyramidal',
            'Octahedral'
          ],
          options_ta: [
            'நேர்கோட்டு',
            'முக்கோண இருபிரமிடு',
            'சதுர பிரமிடு',
            'எண்முகி'
          ],
          correctAnswer: 2,
          explanation_en: 'In $XeOF_4$, Xenon is the central atom. With 5 bond pairs (4 Xe-F, 1 Xe=O) and 1 lone pair, the VSEPR geometry is square pyramidal (based on octahedral electron geometry).',
          explanation_ta: '$XeOF_4$ இல், செனான் மைய அணு. 5 பிணைப்பு இணைகள் (4 Xe-F, 1 Xe=O) மற்றும் 1 தனித்த இணைகளுடன், VSEPR வடிவியல் சதுர பிரமிடு (எண்முகி எலக்ட்ரான் வடிவவியலை அடிப்படையாகக் கொண்டது).',
          neetFrequency: 4,
        },
        {
          id: 'mcq-18',
          question_en: 'Which of the following elements has the highest ionization enthalpy?',
          question_ta: 'பின்வரும் தனிமங்களில் எது அதிக அயனியாக்கும் ஆற்றலைக் கொண்டுள்ளது?',
          options_en: ['Boron', 'Aluminium', 'Gallium', 'Indium'],
          options_ta: ['போரான்', 'அலுமினியம்', 'காலியம்', 'இண்டியம்'],
          correctAnswer: 0,
          explanation_en: 'Ionization enthalpy generally decreases down a group due to increasing atomic size and shielding effect. Therefore, Boron has the highest ionization enthalpy among the given options from Group 13.',
          explanation_ta: 'அயனியாக்கும் ஆற்றல் பொதுவாக தொகுதியில் கீழ்நோக்கி அணு அளவு மற்றும் மறைப்பு விளைவு அதிகரிப்பதால் குறைகிறது. எனவே, தொகுதி 13 இல் கொடுக்கப்பட்ட விருப்பங்களில் போரான் அதிக அயனியாக்கும் ஆற்றலைக் கொண்டுள்ளது.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-19',
          question_en: 'Which of the following is not an allotrope of sulfur?',
          question_ta: 'பின்வருவனவற்றுள் எது சல்பரின் புறவேற்றுமை வடிவம் அல்ல?',
          options_en: ['Rhombic sulfur', 'Monoclinic sulfur', 'Plastic sulfur', 'Ozone'],
          options_ta: ['சாய்சதுர சல்பர்', 'ஒற்றைச்சரிவு சல்பர்', 'நெகிழி சல்பர்', 'ஓசோன்'],
          correctAnswer: 3,
          explanation_en: 'Rhombic, monoclinic, and plastic sulfur are allotropes of sulfur. Ozone ($O_3$) is an allotrope of oxygen, not sulfur.',
          explanation_ta: 'சாய்சதுர, ஒற்றைச்சரிவு மற்றும் நெகிழி சல்பர் ஆகியவை சல்பரின் புறவேற்றுமை வடிவங்கள். ஓசோன் ($O_3$) ஆக்சிஜனின் புறவேற்றுமை வடிவம், சல்பரின் அல்ல.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-20',
          question_en: 'The reducing power of hydrides of Group 17 elements (HX) follows the order:',
          question_ta: 'தொகுதி 17 தனிமங்களின் ஹைட்ரைடுகளின் (HX) ஒடுக்கும் சக்தி பின்வரும் வரிசையில் உள்ளது:',
          options_en: [
            '$HF < HCl < HBr < HI$',
            '$HI < HBr < HCl < HF$',
            '$HCl < HBr < HI < HF$',
            '$HBr < HCl < HF < HI$'
          ],
          options_ta: [
            '$HF < HCl < HBr < HI$',
            '$HI < HBr < HCl < HF$',
            '$HCl < HBr < HI < HF$',
            '$HBr < HCl < HF < HI$'
          ],
          correctAnswer: 0,
          explanation_en: 'The reducing power of hydrogen halides increases down the group because the H-X bond strength decreases from HF to HI, making it easier to release hydrogen and act as a reducing agent. Therefore, HI is the strongest reducing agent, and HF is the weakest.',
          explanation_ta: 'ஹைட்ரஜன் ஹாலைடுகளின் ஒடுக்கும் சக்தி தொகுதியில் கீழ்நோக்கி அதிகரிக்கிறது, ஏனெனில் H-X பிணைப்பு வலிமை HF இலிருந்து HI வரை குறைகிறது, இது ஹைட்ரஜனை எளிதில் வெளியிடவும் ஒடுக்கும் காரணியாக செயல்படவும் செய்கிறது. எனவே, HI மிக வலிமையான ஒடுக்கும் காரணி, மற்றும் HF மிக மெல்லிய ஒடுக்கும் காரணி.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-21',
          question_en: 'Which of the following statements about Nitrogen is incorrect?',
          question_ta: 'நைட்ரஜன் பற்றி பின்வரும் கூற்றுகளில் எது தவறானது?',
          options_en: [
            'It is a diatomic gas.',
            'It has a high ionization enthalpy.',
            'It readily forms multiple bonds.',
            'It shows catenation to a great extent like carbon.'
          ],
          options_ta: [
            'இது ஒரு இரு அணு வாயு.',
            'இது அதிக அயனியாக்கும் ஆற்றலைக் கொண்டுள்ளது.',
            'இது எளிதில் பல பிணைப்புகளை உருவாக்குகிறது.',
            'இது கார்பனைப் போலவே பெருமளவு சங்கிலியாக்கத்தைக் காட்டுகிறது.'
          ],
          correctAnswer: 3,
          explanation_en: 'Nitrogen does not show catenation to a great extent due to the weak N-N single bond. While it forms multiple bonds (like $N_2$ with a triple bond), its tendency for catenation is significantly less than carbon. All other statements are correct.',
          explanation_ta: 'N-N ஒற்றை பிணைப்பின் பலவீனம் காரணமாக நைட்ரஜன் பெருமளவு சங்கிலியாக்கத்தைக் காட்டுவதில்லை. இது பல பிணைப்புகளை உருவாக்கினாலும் ( $N_2$ ஒரு முப்பிணைப்புடன்), அதன் சங்கிலியாக்கப் போக்கு கார்பனை விட கணிசமாகக் குறைவாகும். மற்ற அனைத்து கூற்றுகளும் சரியானவை.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-22',
          question_en: 'The raw material used in the manufacture of sulfuric acid by the Contact process is:',
          question_ta: 'தொடுமுறை மூலம் சல்பியூரிக் அமிலம் தயாரிப்பதில் பயன்படுத்தப்படும் மூலப்பொருள்:',
          options_en: [
            '$SO_3$',
            '$SO_2$',
            '$H_2S$',
            'Oleum'
          ],
          options_ta: [
            '$SO_3$',
            '$SO_2$',
            '$H_2S$',
            'ஓலியம்'
          ],
          correctAnswer: 1,
          explanation_en: 'In the Contact process, sulfur dioxide ($SO_2$) is first oxidized to sulfur trioxide ($SO_3$) using $V_2O_5$ catalyst, which is then absorbed in $H_2SO_4$ to form oleum ($H_2S_2O_7$), and finally diluted to get sulfuric acid.',
          explanation_ta: 'தொடுமுறையில், சல்பர் டை ஆக்சைடு ($SO_2$) முதலில் $V_2O_5$ வினையூக்கி பயன்படுத்தி சல்பர் ட்ரை ஆக்சைடாக ($SO_3$) ஆக்சிஜனேற்றம் செய்யப்படுகிறது, பின்னர் அது $H_2SO_4$ இல் உறிஞ்சப்பட்டு ஓலியம் ($H_2S_2O_7$) உருவாகிறது, இறுதியாக சல்பியூரிக் அமிலம் பெற நீர்த்தப்படுகிறது.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-23',
          question_en: 'Which of the following elements can exhibit an oxidation state of +6?',
          question_ta: 'பின்வரும் தனிமங்களில் எது +6 ஆக்சிஜனேற்ற நிலையைக் காட்ட முடியும்?',
          options_en: ['Oxygen', 'Fluorine', 'Sulfur', 'Nitrogen'],
          options_ta: ['ஆக்சிஜன்', 'புளூரின்', 'சல்பர்', 'நைட்ரஜன்'],
          correctAnswer: 2,
          explanation_en: 'Sulfur (Group 16) can exhibit +6 oxidation state, for example, in $SF_6$ and $H_2SO_4$. Oxygen is usually -2, Fluorine is always -1, and Nitrogen has a maximum of +5.',
          explanation_ta: 'சல்பர் (தொகுதி 16) +6 ஆக்சிஜனேற்ற நிலையைக் காட்ட முடியும், எடுத்துக்காட்டாக $SF_6$ மற்றும் $H_2SO_4$ இல். ஆக்சிஜன் பொதுவாக -2, புளூரின் எப்போதும் -1, மற்றும் நைட்ரஜனின் அதிகபட்சம் +5.',
          neetFrequency: 4,
        },
        {
          id: 'mcq-24',
          question_en: 'Among the halides $NF_3, NCl_3, NBr_3$, which one is the most stable?',
          question_ta: '$NF_3, NCl_3, NBr_3$ ஆகிய ஹாலைடுகளில், எது மிகவும் நிலையானது?',
          options_en: ['$NF_3$', '$NCl_3$', '$NBr_3$', 'All are equally stable'],
          options_ta: ['$NF_3$', '$NCl_3$', '$NBr_3$', 'அனைத்தும் சமமாக நிலையானவை'],
          correctAnswer: 0,
          explanation_en: '$NF_3$ is the most stable among nitrogen halides due to the small size of N and F atoms and strong N-F bonds. As the size of the halogen increases (Cl, Br, I), the N-X bond becomes weaker due to less effective orbital overlap and increased bond length, leading to decreased stability.',
          explanation_ta: '$NF_3$ நைட்ரஜன் ஹாலைடுகளில் மிகவும் நிலையானது, ஏனெனில் N மற்றும் F அணுக்களின் சிறிய அளவு மற்றும் வலுவான N-F பிணைப்புகள். ஹாலஜனின் அளவு அதிகரிக்கும்போது (Cl, Br, I), N-X பிணைப்பு குறைவான பயனுள்ள ஆர்பிட்டால் மேற்பொருந்துதல் மற்றும் அதிகரித்த பிணைப்பு நீளம் காரணமாக பலவீனமடைகிறது, இது நிலைத்தன்மையை குறைக்கிறது.',
          neetFrequency: 3,
        },
        {
          id: 'mcq-25',
          question_en: 'The correct order of thermal stability of hydrides of Group 16 elements is:',
          question_ta: 'தொகுதி 16 தனிமங்களின் ஹைட்ரைடுகளின் வெப்ப நிலைத்தன்மையின் சரியான வரிசை:',
          options_en: [
            '$H_2O < H_2S < H_2Se < H_2Te$',
            '$H_2Te < H_2Se < H_2S < H_2O$',
            '$H_2S < H_2O < H_2Se < H_2Te$',
            '$H_2Se < H_2Te < H_2S < H_2O$'
          ],
          options_ta: [
            '$H_2O < H_2S < H_2Se < H_2Te$',
            '$H_2Te < H_2Se < H_2S < H_2O$',
            '$H_2S < H_2O < H_2Se < H_2Te$',
            '$H_2Se < H_2Te < H_2S < H_2O$'
          ],
          correctAnswer: 1,
          explanation_en: 'Thermal stability of hydrides decreases down the group due to the decrease in bond dissociation enthalpy (M-H bond strength). Thus, $H_2O$ is the most thermally stable, and $H_2Te$ is the least stable.',
          explanation_ta: 'ஹைட்ரைடுகளின் வெப்ப நிலைத்தன்மை தொகுதியில் கீழ்நோக்கி பிணைப்பு பிரிப்பு ஆற்றல் (M-H பிணைப்பு வலிமை) குறைவதால் குறைகிறது. இதனால், $H_2O$ மிகவும் வெப்ப நிலையில் நிலையானது, மற்றும் $H_2Te$ குறைந்த நிலையானது.',
          neetFrequency: 4,
        }
      ],
      assertionReason: [
        {
          id: 'ar-1',
          assertion_en: 'Boron always forms covalent compounds.',
          reason_en: 'Boron has a very small size and high ionization enthalpy, which makes it difficult to lose electrons to form $B^{3+}$ ions.',
          assertion_ta: 'போரான் எப்போதும் சக பிணைப்பு சேர்மங்களை உருவாக்குகிறது.',
          reason_ta: 'போரான் மிகச் சிறிய அளவு மற்றும் அதிக அயனியாக்கும் ஆற்றலைக் கொண்டுள்ளது, இது $B^{3+}$ அயனிகளை உருவாக்க எலக்ட்ரான்களை இழக்க கடினமாக்குகிறது.',
          options_en: [
            'Both Assertion and Reason are correct, and Reason is the correct explanation for Assertion.',
            'Both Assertion and Reason are correct, but Reason is not the correct explanation for Assertion.',
            'Assertion is correct, but Reason is incorrect.',
            'Both Assertion and Reason are incorrect.'
          ],
          options_ta: [
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கம்.',
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, ஆனால் காரணம் கூற்றுக்கு சரியான விளக்கம் அல்ல.',
            'கூற்று சரியானது, ஆனால் காரணம் தவறானது.',
            'கூற்று மற்றும் காரணம் இரண்டும் தவறானது.'
          ],
          correctAnswer: 0,
          explanation_en: 'Both statements are correct and the Reason correctly explains the Assertion. Due to boron\'s small size and high ionization energy, it prefers to form covalent bonds rather than ionic bonds by losing three electrons.',
          explanation_ta: 'இரண்டு கூற்றுகளும் சரியானவை மற்றும் காரணம் கூற்றை சரியாக விளக்குகிறது. போரானின் சிறிய அளவு மற்றும் அதிக அயனியாக்கும் ஆற்றல் காரணமாக, அது மூன்று எலக்ட்ரான்களை இழப்பதன் மூலம் அயனி பிணைப்புகளை உருவாக்குவதை விட சக பிணைப்புகளை உருவாக்க விரும்புகிறது.',
        },
        {
          id: 'ar-2',
          assertion_en: 'Atomic radius of Gallium is slightly less than that of Aluminium.',
          reason_en: 'Poor shielding effect of d-electrons in Gallium causes an increase in the effective nuclear charge, pulling the valence electrons closer to the nucleus.',
          assertion_ta: 'காலியத்தின் அணு ஆரம் அலுமினியத்தை விட சற்று குறைவாக உள்ளது.',
          reason_ta: 'காலியத்தில் d-எலக்ட்ரான்களின் மோசமான மறைப்பு விளைவு பயனுள்ள அணுக்கரு மின்னூட்டத்தின் அதிகரிப்பை ஏற்படுத்துகிறது, இணைதிறன் எலக்ட்ரான்களை கருவுக்கு நெருக்கமாக இழுக்கிறது.',
          options_en: [
            'Both Assertion and Reason are correct, and Reason is the correct explanation for Assertion.',
            'Both Assertion and Reason are correct, but Reason is not the correct explanation for Assertion.',
            'Assertion is correct, but Reason is incorrect.',
            'Both Assertion and Reason are incorrect.'
          ],
          options_ta: [
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கம்.',
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, ஆனால் காரணம் கூற்றுக்கு சரியான விளக்கம் அல்ல.',
            'கூற்று சரியானது, ஆனால் காரணம் தவறானது.',
            'கூற்று மற்றும் காரணம் இரண்டும் தவறானது.'
          ],
          correctAnswer: 0,
          explanation_en: 'Both Assertion and Reason are correct, and Reason is the correct explanation. The presence of 10 d-electrons in gallium, which provide poor shielding, leads to an increased effective nuclear charge, thereby decreasing the atomic radius compared to aluminium.',
          explanation_ta: 'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் சரியான விளக்கம். காலியத்தில் 10 d-எலக்ட்ரான்கள் இருப்பதால், அவை மோசமான மறைப்பை வழங்குகின்றன, இது பயனுள்ள அணுக்கரு மின்னூட்டத்தை அதிகரிக்கிறது, இதனால் அலுமினியத்துடன் ஒப்பிடும்போது அணு ஆரம் குறைகிறது.',
        },
        {
          id: 'ar-3',
          assertion_en: 'Fluorine has lower bond dissociation enthalpy than Chlorine.',
          reason_en: 'Due to its small size, Fluorine atoms experience high inter-electronic repulsion between lone pairs, weakening the F-F bond.',
          assertion_ta: 'குளோரினை விட புளூரின் குறைந்த பிணைப்பு பிரிப்பு ஆற்றலைக் கொண்டுள்ளது.',
          reason_ta: 'அதன் சிறிய அளவு காரணமாக, புளூரின் அணுக்கள் தனித்த இணைகளுக்கு இடையே அதிக எலக்ட்ரான் விலக்கத்தை அனுபவிக்கின்றன, இது F-F பிணைப்பை பலவீனப்படுத்துகிறது.',
          options_en: [
            'Both Assertion and Reason are correct, and Reason is the correct explanation for Assertion.',
            'Both Assertion and Reason are correct, but Reason is not the correct explanation for Assertion.',
            'Assertion is correct, but Reason is incorrect.',
            'Both Assertion and Reason are incorrect.'
          ],
          options_ta: [
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கம்.',
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, ஆனால் காரணம் கூற்றுக்கு சரியான விளக்கம் அல்ல.',
            'கூற்று சரியானது, ஆனால் காரணம் தவறானது.',
            'கூற்று மற்றும் காரணம் இரண்டும் தவறானது.'
          ],
          correctAnswer: 0,
          explanation_en: 'Both the assertion and the reason are correct, and the reason provides the correct explanation for the assertion. The small size of fluorine atoms leads to significant electron-electron repulsion between the lone pairs, weakening the F-F bond and resulting in lower bond dissociation enthalpy compared to chlorine.',
          explanation_ta: 'கூற்று மற்றும் காரணம் இரண்டும் சரியானவை, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கத்தை வழங்குகிறது. புளூரின் அணுக்களின் சிறிய அளவு தனித்த இணைகளுக்கு இடையே குறிப்பிடத்தக்க எலக்ட்ரான்-எலக்ட்ரான் விலக்கிற்கு வழிவகுக்கிறது, இது F-F பிணைப்பை பலவீனப்படுத்துகிறது மற்றும் குளோரினுடன் ஒப்பிடும்போது குறைந்த பிணைப்பு பிரிப்பு ஆற்றலை விளைவிக்கிறது.',
        },
        {
          id: 'ar-4',
          assertion_en: 'Phosphoric acid ($H_3PO_4$) is a tribasic acid.',
          reason_en: 'In $H_3PO_4$, there are three P-OH bonds and one P=O bond.',
          assertion_ta: 'பாஸ்பாரிக் அமிலம் ($H_3PO_4$) ஒரு மும்மைக்கார அமிலமாகும்.',
          reason_ta: '$H_3PO_4$ இல், மூன்று P-OH பிணைப்புகள் மற்றும் ஒரு P=O பிணைப்பு உள்ளன.',
          options_en: [
            'Both Assertion and Reason are correct, and Reason is the correct explanation for Assertion.',
            'Both Assertion and Reason are correct, but Reason is not the correct explanation for Assertion.',
            'Assertion is correct, but Reason is incorrect.',
            'Both Assertion and Reason are incorrect.'
          ],
          options_ta: [
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கம்.',
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, ஆனால் காரணம் கூற்றுக்கு சரியான விளக்கம் அல்ல.',
            'கூற்று சரியானது, ஆனால் காரணம் தவறானது.',
            'கூற்று மற்றும் காரணம் இரண்டும் தவறானது.'
          ],
          correctAnswer: 0,
          explanation_en: 'Both statements are correct. The basicity of oxoacids of phosphorus is determined by the number of P-OH bonds. Since $H_3PO_4$ has three P-OH bonds, it is tribasic. The reason correctly describes the structure justifying its tribasic nature.',
          explanation_ta: 'இரண்டு கூற்றுகளும் சரியானவை. பாஸ்பரஸின் ஆக்சோஅமிலங்களின் காரத்தன்மை P-OH பிணைப்புகளின் எண்ணிக்கையால் தீர்மானிக்கப்படுகிறது. $H_3PO_4$ மூன்று P-OH பிணைப்புகளைக் கொண்டிருப்பதால், அது மும்மைக்காரமானது. காரணம் அதன் மும்மைக்கார தன்மையை நியாயப்படுத்தும் அமைப்பை சரியாக விவரிக்கிறது.',
        },
        {
          id: 'ar-5',
          assertion_en: 'Noble gases are generally unreactive.',
          reason_en: 'Noble gases have stable $ns^2np^6$ (octet) electronic configurations and high ionization enthalpies.',
          assertion_ta: 'மந்த வாயுக்கள் பொதுவாக வினைத்திறன் அற்றவை.',
          reason_ta: 'மந்த வாயுக்கள் நிலையான $ns^2np^6$ (ஆக்டேட்) எலக்ட்ரான் அமைப்புகளையும் அதிக அயனியாக்கும் ஆற்றல்களையும் கொண்டுள்ளன.',
          options_en: [
            'Both Assertion and Reason are correct, and Reason is the correct explanation for Assertion.',
            'Both Assertion and Reason are correct, but Reason is not the correct explanation for Assertion.',
            'Assertion is correct, but Reason is incorrect.',
            'Both Assertion and Reason are incorrect.'
          ],
          options_ta: [
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கம்.',
            'கூற்று மற்றும் காரணம் இரண்டும் சரியானது, ஆனால் காரணம் கூற்றுக்கு சரியான விளக்கம் அல்ல.',
            'கூற்று சரியானது, ஆனால் காரணம் தவறானது.',
            'கூற்று மற்றும் காரணம் இரண்டும் தவறானது.'
          ],
          correctAnswer: 0,
          explanation_en: 'Both Assertion and Reason are correct, and the Reason provides a correct explanation for the Assertion. The fully filled valence shells make them chemically stable and reluctant to gain or lose electrons or share them in bond formation.',
          explanation_ta: 'கூற்று மற்றும் காரணம் இரண்டும் சரியானவை, மற்றும் காரணம் கூற்றுக்கு சரியான விளக்கத்தை வழங்குகிறது. முழுமையாக நிரப்பப்பட்ட இணைதிறன் கூடுகள் அவற்றை வேதியியல் ரீதியாக நிலையானதாகவும், எலக்ட்ரான்களைப் பெறுவதற்கோ அல்லது இழப்பதற்கோ அல்லது பிணைப்பு உருவாக்கத்தில் அவற்றைப் பகிர்ந்துகொள்வதற்கோ தயங்குவதாகவும் ஆக்குகின்றன.',
        },
      ],
      matchTheColumns: [
        {
          id: 'mtc-1',
          columnA_en: ['Group 13', 'Group 14', 'Group 15', 'Group 16', 'Group 17'],
          columnA_ta: ['தொகுதி 13', 'தொகுதி 14', 'தொகுதி 15', 'தொகுதி 16', 'தொகுதி 17'],
          columnB_en: [
            'Chalcogens',
            'Halogens',
            'Boron family',
            'Carbon family',
            'Pnictogens'
          ],
          columnB_ta: [
            'சால்சோஜென்கள்',
            'ஹாலஜன்கள்',
            'போரான் குடும்பம்',
            'கார்பன் குடும்பம்',
            'நைட்ரஜன் குடும்பம்'
          ],
          matches: [
            { A: 0, B: 2 },
            { A: 1, B: 3 },
            { A: 2, B: 4 },
            { A: 3, B: 0 },
            { A: 4, B: 1 }
          ],
          explanation_en: 'Group 13: Boron family, Group 14: Carbon family, Group 15: Pnictogens, Group 16: Chalcogens, Group 17: Halogens.',
          explanation_ta: 'தொகுதி 13: போரான் குடும்பம், தொகுதி 14: கார்பன் குடும்பம், தொகுதி 15: நைட்ரஜன் குடும்பம், தொகுதி 16: சால்சோஜென்கள், தொகுதி 17: ஹாலஜன்கள்.',
        },
        {
          id: 'mtc-2',
          columnA_en: ['Diamond', 'Graphite', 'Fullerene', 'Borax', 'Diborane'],
          columnA_ta: ['வைரம்', 'கிராஃபைட்', 'ஃபுல்லரின்', 'போராக்ஸ்', 'டைபோரேன்'],
          columnB_en: [
            '3c-2e bonds',
            'Hardest substance',
            'Lubricant',
            'Borax bead test',
            'Cage-like structure'
          ],
          columnB_ta: [
            '3c-2e பிணைப்புகள்',
            'மிகவும் கடினமான பொருள்',
            'மசகு எண்ணெய்',
            'போராக்ஸ் மணிக்கல் சோதனை',
            'கூண்டு போன்ற அமைப்பு'
          ],
          matches: [
            { A: 0, B: 1 },
            { A: 1, B: 2 },
            { A: 2, B: 4 },
            { A: 3, B: 3 },
            { A: 4, B: 0 }
          ],
          explanation_en: 'Diamond is the hardest substance. Graphite is a lubricant and good conductor. Fullerenes have cage-like structures. Borax is used in the borax bead test. Diborane has 3c-2e bonds.',
          explanation_ta: 'வைரம் மிகவும் கடினமான பொருள். கிராஃபைட் ஒரு மசகு எண்ணெய் மற்றும் நல்ல கடத்தி. ஃபுல்லரின்கள் கூண்டு போன்ற அமைப்புகளைக் கொண்டுள்ளன. போராக்ஸ் போராக்ஸ் மணிக்கல் சோதனையில் பயன்படுத்தப்படுகிறது. டைபோரேனில் 3c-2e பிணைப்புகள் உள்ளன.',
        },
        {
          id: 'mtc-3',
          columnA_en: ['$NH_3$', '$HNO_3$', '$H_2SO_4$', '$Cl_2$', '$XeF_2$'],
          columnA_ta: ['$NH_3$', '$HNO_3$', '$H_2SO_4$', '$Cl_2$', '$XeF_2$'],
          columnB_en: [
            'Contact process',
            'Ostwald process',
            'Haber process',
            'Linear structure',
            'Disproportionation reaction'
          ],
          columnB_ta: [
            'தொடுமுறை',
            'ஆஸ்வால்ட் முறை',
            'ஹேபர் முறை',
            'நேர்கோட்டு அமைப்பு',
            'சிதைவு வினை'
          ],
          matches: [
            { A: 0, B: 2 },
            { A: 1, B: 1 },
            { A: 2, B: 0 },
            { A: 3, B: 4 },
            { A: 4, B: 3 }
          ],
          explanation_en: '$NH_3$ via Haber process. $HNO_3$ via Ostwald process. $H_2SO_4$ via Contact process. $Cl_2$ undergoes disproportionation (e.g., with NaOH). $XeF_2$ has a linear structure.',
          explanation_ta: 'ஹேபர் முறை மூலம் $NH_3$. ஆஸ்வால்ட் முறை மூலம் $HNO_3$. தொடுமுறை மூலம் $H_2SO_4$. $Cl_2$ சிதைவுறுகிறது (எ.கா., NaOH உடன்). $XeF_2$ ஒரு நேர்கோட்டு அமைப்பைக் கொண்டுள்ளது.',
        },
        {
          id: 'mtc-4',
          columnA_en: ['Strongest oxidizing agent', 'Most acidic hydride (HX)', 'Most electronegative element', 'Strongest reducing agent (Group 15 hydride)', 'Least stable halogen bond'],
          columnA_ta: ['மிக வலிமையான ஆக்சிஜனேற்ற காரணி', 'மிகவும் அமிலத்தன்மை கொண்ட ஹைட்ரைடு (HX)', 'மிகவும் எலக்ட்ரான் கவர்திறன் கொண்ட தனிமம்', 'மிக வலிமையான ஒடுக்கும் காரணி (தொகுதி 15 ஹைட்ரைடு)', 'குறைந்த நிலையான ஹாலஜன் பிணைப்பு'],
          columnB_en: ['Fluorine', 'HI', 'Ozone', 'BiH3', 'F-F bond'],
          columnB_ta: ['புளூரின்', 'HI', 'ஓசோன்', 'BiH3', 'F-F பிணைப்பு'],
          matches: [
            { A: 0, B: 2 }, 
            { A: 1, B: 1 }, 
            { A: 2, B: 0 }, 
            { A: 3, B: 3 }, 
            { A: 4, B: 4 } 
          ],
          explanation_en: 'Fluorine is the most electronegative element. HI is the most acidic hydrogen halide. Ozone ($O_3$) is a strong oxidizing agent. $BiH_3$ is the strongest reducing agent among Group 15 hydrides. The $F-F$ bond has the least bond dissociation enthalpy among halogens.',
          explanation_ta: 'புளூரின் மிகவும் எலக்ட்ரான் கவர்திறன் கொண்ட தனிமம். HI மிகவும் அமிலத்தன்மை கொண்ட ஹைட்ரஜன் ஹாலைடு. ஓசோன் ($O_3$) ஒரு வலிமையான ஆக்சிஜனேற்ற காரணி. $BiH_3$ தொகுதி 15 ஹைட்ரைடுகளில் மிக வலிமையான ஒடுக்கும் காரணி. $F-F$ பிணைப்பு ஹாலஜன்களில் குறைந்த பிணைப்பு பிரிப்பு ஆற்றலைக் கொண்டுள்ளது.',
        },
        {
          id: 'mtc-5',
          columnA_en: ['$XeF_2$', '$XeF_4$', '$XeF_6$', '$XeO_3$', '$XeOF_4$'],
          columnA_ta: ['$XeF_2$', '$XeF_4$', '$XeF_6$', '$XeO_3$', '$XeOF_4$'],
          columnB_en: [
            'Square pyramidal',
            'Pyramidal',
            'Distorted octahedral',
            'Square planar',
            'Linear'
          ],
          columnB_ta: [
            'சதுர பிரமிடு',
            'பிரமிடு',
            'சிதைந்த எண்முகி',
            'சதுர தள',
            'நேர்கோட்டு'
          ],
          matches: [
            { A: 0, B: 4 },
            { A: 1, B: 3 },
            { A: 2, B: 2 },
            { A: 3, B: 1 },
            { A: 4, B: 0 }
          ],
          explanation_en: '$XeF_2$ is linear. $XeF_4$ is square planar. $XeF_6$ is distorted octahedral. $XeO_3$ is pyramidal. $XeOF_4$ is square pyramidal.',
          explanation_ta: '$XeF_2$ நேர்கோட்டு. $XeF_4$ சதுர தள. $XeF_6$ சிதைந்த எண்முகி. $XeO_3$ பிரமிடு. $XeOF_4$ சதுர பிரமிடு.',
        },
      ],
    },
  ],
  nextModule: {
    id: 'd-and-f-block-elements', // Placeholder for the next logical chapter
    title_en: 'd- and f-Block Elements',
    title_ta: 'd மற்றும் f-தொகுதி தனிமங்கள்',
  },
};

export default pBlockElementsModule;
