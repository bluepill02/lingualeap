import { NeetModule } from '../../src/types/neet-module';

const atomicStructureModule: NeetModule = {
  id: 'atomic-structure',
  title: {
    en: 'Atomic Structure',
    ta: 'அணு அமைப்பு',
  },
  chapterNumber: 2, // Assuming it's the second chapter in Chemistry
  subject: 'chemistry',
  nextModule: {
    id: 'chemical-bonding',
    title: {
      en: 'Chemical Bonding and Molecular Structure',
      ta: 'வேதியியல் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு',
    },
  },
  learn: {
    title: {
      en: 'Concept Notes',
      ta: 'கருத்து குறிப்புகள்',
    },
    sections: [
      {
        id: 'introduction-early-models',
        title: {
          en: 'Introduction and Early Atomic Models',
          ta: 'அறிமுகம் மற்றும் ஆரம்பகால அணு மாதிரிகள்',
        },
        content: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The journey to understand the atom began with philosophical ideas and evolved into scientific models. Early models like Dalton\'s, Thomson\'s, and Rutherford\'s laid the foundation for our current understanding.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'அணுவைப் புரிந்துகொள்வதற்கான பயணம் தத்துவக் கருத்துக்களுடன் தொடங்கி அறிவியல் மாதிரிகளாக உருவெடுத்தது. டால்டன், தாம்சன் மற்றும் ரூதர்ஃபோர்ட் போன்ற ஆரம்பகால மாதிரிகள் நமது தற்போதைய புரிதலுக்கான அடித்தளத்தை அமைத்தன.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Dalton\'s Atomic Theory (1808)',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'டால்டனின் அணுக்கொள்கை (1808)',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Matter consists of indivisible atoms.',
              },
              {
                lang: 'ta',
                text: 'பொருள் பிரிக்க முடியாத அணுக்களால் ஆனது.',
              },
              {
                lang: 'en',
                text: 'Atoms of a given element are identical in mass and properties.',
              },
              {
                lang: 'ta',
                text: 'ஒரு குறிப்பிட்ட தனிமத்தின் அணுக்கள் நிறை மற்றும் பண்புகளில் ஒத்தவை.',
              },
              {
                lang: 'en',
                text: 'Atoms of different elements differ in mass and properties.',
              },
              {
                lang: 'ta',
                text: 'வெவ்வேறு தனிமங்களின் அணுக்கள் நிறை மற்றும் பண்புகளில் வேறுபடுகின்றன.',
              },
              {
                lang: 'en',
                text: 'Atoms combine in simple whole-number ratios to form compounds.',
              },
              {
                lang: 'ta',
                text: 'அணுக்கள் எளிய முழு எண் விகிதங்களில் இணைந்து சேர்மங்களை உருவாக்குகின்றன.',
              },
              {
                lang: 'en',
                text: 'Atoms are neither created nor destroyed in a chemical reaction.',
              },
              {
                lang: 'ta',
                text: 'வேதியியல் வினையில் அணுக்கள் உருவாக்கப்படுவதில்லை அல்லது அழிக்கப்படுவதில்லை.',
              },
            ],
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Limitations: Failed to explain subatomic particles, isotopes, and isobars.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'வரம்புகள்: துணை அணுத்துகள்கள், ஐசோடோப்புகள் மற்றும் ஐசோபார்கள் ஆகியவற்றை விளக்கத் தவறிவிட்டது.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Thomson\'s Plum Pudding Model (1898)',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'தாம்சனின் பிளம் புட்டிங் மாதிரி (1898)',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'J.J. Thomson proposed that an atom consists of a uniformly positive sphere with electrons embedded in it, like plums in a pudding. The total positive charge is equal to the total negative charge of electrons, making the atom electrically neutral.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஜே.ஜே. தாம்சன், ஒரு அணு என்பது சீரான நேர்மின் கோளத்தால் ஆனது என்றும், அதில் எலக்ட்ரான்கள், ஒரு புட்டிங்கில் பிளம்ஸ்கள் போல, பதிக்கப்பட்டிருப்பதாகவும் முன்மொழிந்தார். மொத்த நேர்மின் சுமை, எலக்ட்ரான்களின் மொத்த எதிர்மின் சுமைக்கு சமமாக இருக்கும், இதனால் அணு மின்சாரம் நடுநிலை வகிக்கிறது.',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Limitations: Failed to explain the results of Rutherford\'s alpha-scattering experiment.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'வரம்புகள்: ரூதர்ஃபோர்டின் ஆல்பா-சிதறல் பரிசோதனையின் முடிவுகளை விளக்கத் தவறிவிட்டது.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Rutherford\'s Nuclear Model (1911)',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'ரூதர்ஃபோர்டின் அணுக்கரு மாதிரி (1911)',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Based on his famous alpha-scattering experiment, Rutherford proposed the nuclear model of an atom.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'தனது பிரபலமான ஆல்பா-சிதறல் பரிசோதனையின் அடிப்படையில், ரூதர்ஃபோர்ட் ஒரு அணுவின் அணுக்கரு மாதிரியை முன்மொழிந்தார்.',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Alpha-Scattering Experiment (Interactive Diagram)',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'ஆல்பா-சிதறல் பரிசோதனை (ஊடாடும் வரைபடம்)',
          },
          {
            type: 'interactive-diagram',
            id: 'rutherford-experiment',
            title: {
              en: 'Rutherford\'s Gold Foil Experiment',
              ta: 'ரூதர்ஃபோர்டின் தங்கத் தகடு பரிசோதனை',
            },
            description: {
              en: 'Observe how alpha particles interact with a thin gold foil, demonstrating the presence of a small, dense, positively charged nucleus.',
              ta: 'தங்கத் தகடுடன் ஆல்பா துகள்கள் எவ்வாறு வினைபுரிகின்றன என்பதைக் கவனியுங்கள், இது ஒரு சிறிய, அடர்த்தியான, நேர்மின் சுமை கொண்ட அணுக்கருவின் இருப்பை நிரூபிக்கிறது.',
            },
            url: 'https://phet.colorado.edu/sims/html/rutherford-scattering/latest/rutherford-scattering_en.html', // Placeholder URL, replace with actual high-quality interactive content
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Observations:',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'கவனிப்புகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Most alpha particles passed straight through the foil without deflection.',
              },
              {
                lang: 'ta',
                text: 'பெரும்பாலான ஆல்பா துகள்கள் எந்த விலகலும் இல்லாமல் தகடு வழியாக நேராகச் சென்றன.',
              },
              {
                lang: 'en',
                text: 'A few particles were deflected by small angles.',
              },
              {
                lang: 'ta',
                text: 'சில துகள்கள் சிறிய கோணங்களில் விலகின.',
              },
              {
                lang: 'en',
                text: 'Very few (1 in 20,000) were deflected by large angles, even bouncing back.',
              },
              {
                lang: 'ta',
                text: 'மிகச் சில (20,000ல் 1) பெரிய கோணங்களில் விலகின, சில திரும்பி வந்தன.',
              },
            ],
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Conclusions:',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'முடிவுகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Most of the atom is empty space.',
              },
              {
                lang: 'ta',
                text: 'அணுவின் பெரும்பாலான பகுதி வெற்று இடமாகும்.',
              },
              {
                lang: 'en',
                text: 'There is a small, dense, positively charged center called the nucleus.',
              },
              {
                lang: 'ta',
                text: 'அணுவின் மையத்தில் ஒரு சிறிய, அடர்த்தியான, நேர்மின் சுமை கொண்ட பகுதி உள்ளது, அது அணுக்கரு எனப்படுகிறது.',
              },
              {
                lang: 'en',
                text: 'Electrons revolve around the nucleus in circular paths.',
              },
              {
                lang: 'ta',
                text: 'எலக்ட்ரான்கள் அணுக்கருவைச் சுற்றி வட்டப் பாதைகளில் சுழல்கின்றன.',
              },
            ],
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Limitations:',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'வரம்புகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Could not explain the stability of the atom (revolving electrons should lose energy and fall into the nucleus according to classical electromagnetism).',
              },
              {
                lang: 'ta',
                text: 'அணுவின் நிலைத்தன்மையை விளக்க முடியவில்லை (சுழலும் எலக்ட்ரான்கள் கிளாசிக்கல் மின்காந்தவியல் படி ஆற்றலை இழந்து அணுக்கருவில் விழ வேண்டும்).',
              },
              {
                lang: 'en',
                text: 'Could not explain the line spectrum of hydrogen and other atoms.',
              },
              {
                lang: 'ta',
                text: 'ஹைட்ரஜன் மற்றும் பிற அணுக்களின் வரி நிறமாலையை விளக்க முடியவில்லை.',
              },
            ],
          },
        ],
      },
      {
        id: 'bohr-model',
        title: {
          en: 'Bohr\'s Model of Hydrogen Atom',
          ta: 'போரின் ஹைட்ரஜன் அணு மாதிரி',
        },
        content: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Niels Bohr (1913) proposed a model for the hydrogen atom based on Planck\'s quantum theory, overcoming the limitations of Rutherford\'s model.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'நீல்ஸ் போர் (1913) பிளாங்கின் குவாண்டம் கோட்பாட்டின் அடிப்படையில் ஹைட்ரஜன் அணுவிற்கு ஒரு மாதிரியை முன்மொழிந்தார், இது ரூதர்ஃபோர்ட் மாதிரியின் வரம்புகளை நீக்கியது.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Postulates:',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'கோட்பாடுகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Electrons revolve around the nucleus in fixed circular paths called orbits or stationary states. Each orbit has a definite energy.',
              },
              {
                lang: 'ta',
                text: 'எலக்ட்ரான்கள் அணுக்கருவைச் சுற்றி நிலையான வட்டப் பாதைகளில் (சுற்றுப்பாதைகள் அல்லது நிலையான நிலைகள்) சுழல்கின்றன. ஒவ்வொரு சுற்றுப்பாதைக்கும் ஒரு குறிப்பிட்ட ஆற்றல் உண்டு.',
              },
              {
                lang: 'en',
                text: 'Electrons do not radiate energy while in a stationary orbit.',
              },
              {
                lang: 'ta',
                text: 'எலக்ட்ரான்கள் ஒரு நிலையான சுற்றுப்பாதையில் இருக்கும்போது ஆற்றலை உமிழ்வதில்லை.',
              },
              {
                lang: 'en',
                text: 'Electrons can move from a lower energy orbit to a higher energy orbit by absorbing energy, or from a higher energy orbit to a lower energy orbit by emitting energy. The energy difference is given by $\Delta E = E_2 - E_1 = h\nu$.',
              },
              {
                lang: 'ta',
                text: 'எலக்ட்ரான்கள் ஆற்றலை உறிஞ்சி குறைந்த ஆற்றல் சுற்றுப்பாதையிலிருந்து அதிக ஆற்றல் சுற்றுப்பாதைக்கு செல்லலாம், அல்லது ஆற்றலை உமிழ்ந்து அதிக ஆற்றல் சுற்றுப்பாதையிலிருந்து குறைந்த ஆற்றல் சுற்றுப்பாதைக்கு செல்லலாம். ஆற்றல் வேறுபாடு $\Delta E = E_2 - E_1 = h\nu$ என கொடுக்கப்படுகிறது.',
              },
              {
                lang: 'en',
                text: 'The angular momentum of an electron in a given orbit is quantized, i.e., an integral multiple of $h/(2\pi)$. $mvr = n\frac{h}{2\pi}$, where $n = 1, 2, 3, \dots$ (principal quantum number).',
              },
              {
                lang: 'ta',
                text: 'ஒரு குறிப்பிட்ட சுற்றுப்பாதையில் உள்ள ஒரு எலக்ட்ரானின் கோண உந்தம் குவாண்டம் செய்யப்பட்டது, அதாவது $h/(2\pi)$-ன் முழு எண் மடங்கு. $mvr = n\frac{h}{2\pi}$, இங்கு $n = 1, 2, 3, \dots$ (முதன்மை குவாண்டம் எண்).',
              },
            ],
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Important Formulas for Hydrogen-like Atoms ($Z$ is atomic number):',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'ஹைட்ரஜன் போன்ற அணுக்களுக்கான முக்கியமான சூத்திரங்கள் ($Z$ என்பது அணு எண்):',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Radius of $n^{th}$ orbit ($r_n$):',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: '$n$-வது சுற்றுப்பாதையின் ஆரம் ($r_n$):',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_n = 0.529 \times \frac{n^2}{Z} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_n = 0.529 \times \frac{n^2}{Z} \mathring{A}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'For hydrogen ($Z=1$), $r_n = 0.529 n^2 \mathring{A}$. $r_1 = 0.529 \mathring{A}$ (Bohr radius).',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஹைட்ரஜனுக்கு ($Z=1$), $r_n = 0.529 n^2 \mathring{A}$. $r_1 = 0.529 \mathring{A}$ (போர் ஆரம்).',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Energy of electron in $n^{th}$ orbit ($E_n$):',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: '$n$-வது சுற்றுப்பாதையில் எலக்ட்ரானின் ஆற்றல் ($E_n$):',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$E_n = -13.6 \times \frac{Z^2}{n^2} \text{ eV/atom}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$E_n = -13.6 \times \frac{Z^2}{n^2} \text{ eV/atom}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'For hydrogen ($Z=1$), $E_n = -13.6/n^2 \text{ eV/atom}$. Lowest energy is $E_1 = -13.6 \text{ eV}$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஹைட்ரஜனுக்கு ($Z=1$), $E_n = -13.6/n^2 \text{ eV/atom}$. குறைந்த ஆற்றல் $E_1 = -13.6 \text{ eV}$.',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Velocity of electron in $n^{th}$ orbit ($v_n$):',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: '$n$-வது சுற்றுப்பாதையில் எலக்ட்ரானின் திசைவேகம் ($v_n$):',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$v_n = 2.18 \times 10^6 \times \frac{Z}{n} \text{ m/s}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$v_n = 2.18 \times 10^6 \times \frac{Z}{n} \text{ m/s}$$',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Hydrogen Spectrum and Spectral Series:',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'ஹைட்ரஜன் நிறமாலை மற்றும் நிறமாலைத் தொடர்கள்:',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'When an electron jumps from a higher energy level ($n_2$) to a lower energy level ($n_1$), it emits radiation of a specific wavelength. The wavenumber ($\bar{\nu}$) of the emitted radiation is given by Rydberg\'s formula:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஒரு எலக்ட்ரான் அதிக ஆற்றல் மட்டத்திலிருந்து ($n_2$) குறைந்த ஆற்றல் மட்டத்திற்கு ($n_1$) குதிக்கும்போது, அது ஒரு குறிப்பிட்ட அலைநீளத்தின் கதிர்வீச்சை உமிழ்கிறது. உமிழப்படும் கதிர்வீச்சின் அலைவெண் ($\bar{\nu}$) ரிட்பெர்க்கின் சூத்திரத்தால் கொடுக்கப்படுகிறது:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\bar{\nu} = \frac{1}{\lambda} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\bar{\nu} = \frac{1}{\lambda} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Where $R_H$ is Rydberg constant ($1.097 \times 10^7 \text{ m}^{-1}$). For hydrogen, $Z=1$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'இங்கு $R_H$ என்பது ரிட்பெர்க் மாறிலி ($1.097 \times 10^7 \text{ m}^{-1}$). ஹைட்ரஜனுக்கு, $Z=1$.',
          },
          {
            type: 'table',
            headers: [
              { lang: 'en', text: 'Series' },
              { lang: 'ta', text: 'தொடர்' },
              { lang: 'en', text: '$n_1$' },
              { lang: 'ta', text: '$n_1$' },
              { lang: 'en', text: '$n_2$' },
              { lang: 'ta', text: '$n_2$' },
              { lang: 'en', text: 'Region' },
              { lang: 'ta', text: 'பகுதி' },
            ],
            rows: [
              [
                { lang: 'en', text: 'Lyman' },
                { lang: 'ta', text: 'லைமன்' },
                { lang: 'en', text: '1' },
                { lang: 'ta', text: '1' },
                { lang: 'en', text: '2, 3, ...' },
                { lang: 'ta', text: '2, 3, ...' },
                { lang: 'en', text: 'Ultraviolet' },
                { lang: 'ta', text: 'புற ஊதா' },
              ],
              [
                { lang: 'en', text: 'Balmer' },
                { lang: 'ta', text: 'பால்மர்' },
                { lang: 'en', text: '2' },
                { lang: 'ta', text: '2' },
                { lang: 'en', text: '3, 4, ...' },
                { lang: 'ta', text: '3, 4, ...' },
                { lang: 'en', text: 'Visible' },
                { lang: 'ta', text: 'கண்ணுக்குப் புலப்படும்' },
              ],
              [
                { lang: 'en', text: 'Paschen' },
                { lang: 'ta', text: 'பாஸ்சன்' },
                { lang: 'en', text: '3' },
                { lang: 'ta', text: '3' },
                { lang: 'en', text: '4, 5, ...' },
                { lang: 'ta', text: '4, 5, ...' },
                { lang: 'en', text: 'Infrared' },
                { lang: 'ta', text: 'அகச்சிவப்பு' },
              ],
              [
                { lang: 'en', text: 'Brackett' },
                { lang: 'ta', text: 'பிராக்கெட்' },
                { lang: 'en', text: '4' },
                { lang: 'ta', text: '4' },
                { lang: 'en', text: '5, 6, ...' },
                { lang: 'ta', text: '5, 6, ...' },
                { lang: 'en', text: 'Infrared' },
                { lang: 'ta', text: 'அகச்சிவப்பு' },
              ],
              [
                { lang: 'en', text: 'Pfund' },
                { lang: 'ta', text: 'ஃபண்ட்' },
                { lang: 'en', text: '5' },
                { lang: 'ta', text: '5' },
                { lang: 'en', text: '6, 7, ...' },
                { lang: 'ta', text: '6, 7, ...' },
                { lang: 'en', text: 'Infrared' },
                { lang: 'ta', text: 'அகச்சிவப்பு' },
              ],
            ],
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Limitations of Bohr\'s Model:',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'போரின் மாதிரியின் வரம்புகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: 'Applicable only to hydrogen and hydrogen-like ions (single electron species).',
              },
              {
                lang: 'ta',
                text: 'ஹைட்ரஜன் மற்றும் ஹைட்ரஜன் போன்ற அயனிகளுக்கு (ஒற்றை எலக்ட்ரான் இனங்கள்) மட்டுமே பொருந்தும்.',
              },
              {
                lang: 'en',
                text: 'Failed to explain the spectra of multi-electron atoms.',
              },
              {
                lang: 'ta',
                text: 'பல-எலக்ட்ரான் அணுக்களின் நிறமாலையை விளக்கத் தவறிவிட்டது.',
              },
              {
                lang: 'en',
                text: 'Could not explain the splitting of spectral lines in a magnetic field (Zeeman effect) or an electric field (Stark effect).',
              },
              {
                lang: 'ta',
                text: 'காந்தப்புலத்தில் (சீமான் விளைவு) அல்லது மின்புலத்தில் (ஸ்டார்க் விளைவு) நிறமாலை கோடுகள் பிளப்பதை விளக்க முடியவில்லை.',
              },
              {
                lang: 'en',
                text: 'Contradicted Heisenberg\'s Uncertainty Principle.',
              },
              {
                lang: 'ta',
                text: 'ஹைசன்பர்க்கின் நிச்சயமற்ற கொள்கைக்கு முரணாக இருந்தது.',
              },
            ],
          },
        ],
      },
      {
        id: 'dual-nature-quantum-mechanics',
        title: {
          en: 'Dual Nature of Matter and Quantum Mechanical Model',
          ta: 'பொருளின் இருமைத் தன்மை மற்றும் குவாண்டம் இயக்கவியல் மாதிரி',
        },
        content: [
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'De Broglie Hypothesis (1924)',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'டி ப்ரோக்லி கொள்கை (1924)',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Louis de Broglie proposed that like light, matter also exhibits dual nature (particle and wave). The wavelength ($\lambda$) of a material particle is given by:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'லூயிஸ் டி ப்ரோக்லி, ஒளியைப் போலவே, பொருளும் இருமைத் தன்மையை (துகள் மற்றும் அலை) வெளிப்படுத்துகிறது என்று முன்மொழிந்தார். ஒரு பொருளின் அலைநீளம் ($\lambda$) பின்வருமாறு கொடுக்கப்படுகிறது:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda = \frac{h}{mv} = \frac{h}{p}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda = \frac{h}{mv} = \frac{h}{p}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Where $h$ is Planck\'s constant, $m$ is mass, $v$ is velocity, and $p$ is momentum. This was experimentally verified by Davisson and Germer (electron diffraction).',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'இங்கு $h$ என்பது பிளாங்க் மாறிலி, $m$ என்பது நிறை, $v$ என்பது திசைவேகம், மற்றும் $p$ என்பது உந்தம். இது டேவிசன் மற்றும் ஜெர்மர் (எலக்ட்ரான் விளிம்புவிலகல்) மூலம் பரிசோதனை ரீதியாக சரிபார்க்கப்பட்டது.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Heisenberg\'s Uncertainty Principle (1927)',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'ஹைசன்பர்க்கின் நிச்சயமற்ற கொள்கை (1927)',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'It states that it is impossible to determine simultaneously, with absolute precision, both the position and momentum of a subatomic particle like an electron.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஒரு எலக்ட்ரான் போன்ற துணை அணுத்துகளின் நிலை மற்றும் உந்தம் இரண்டையும் ஒரே நேரத்தில், முழுமையான துல்லியத்துடன் தீர்மானிப்பது சாத்தியமற்றது என்று இது கூறுகிறது.',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} \quad \text{or} \quad \Delta x \cdot m\Delta v \ge \frac{h}{4\pi}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} \quad \text{or} \quad \Delta x \cdot m\Delta v \ge \frac{h}{4\pi}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Where $\Delta x$ is uncertainty in position, $\Delta p$ is uncertainty in momentum, $\Delta v$ is uncertainty in velocity.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'இங்கு $\Delta x$ என்பது நிலையில் உள்ள நிச்சயமற்ற தன்மை, $\Delta p$ என்பது உந்தத்தில் உள்ள நிச்சயமற்ற தன்மை, $\Delta v$ என்பது திசைவேகத்தில் உள்ள நிச்சயமற்ற தன்மை.',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Quantum Mechanical Model of Atom',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'அணுவின் குவாண்டம் இயக்கவியல் மாதிரி',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'This model describes the electron as a wave and uses mathematical equations (Schrödinger equation) to determine the probability of finding an electron in a particular region of space around the nucleus. This region is called an atomic orbital.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'இந்த மாதிரி எலக்ட்ரானை ஒரு அலையாக விவரிக்கிறது மற்றும் அணுக்கருவைச் சுற்றியுள்ள ஒரு குறிப்பிட்ட விண்வெளிப் பகுதியில் எலக்ட்ரானைக் கண்டறியும் நிகழ்தகவை தீர்மானிக்க கணித சமன்பாடுகளை (ஷ்ரோடிங்கர் சமன்பாடு) பயன்படுத்துகிறது. இந்த பகுதி ஒரு அணு ஆர்பிட்டால் என்று அழைக்கப்படுகிறது.',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Quantum Numbers:',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'குவாண்டம் எண்கள்:',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'These are a set of four numbers that completely describe the position and energy of an electron in an atom.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'இவை ஒரு அணுவில் உள்ள எலக்ட்ரானின் நிலை மற்றும் ஆற்றலை முழுமையாக விவரிக்கும் நான்கு எண்களின் தொகுப்பாகும்.',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: '<strong>Principal Quantum Number ($n$):</strong> Determines the main energy level or shell. $n = 1, 2, 3, \dots$. Larger $n$ means larger size and higher energy of the orbit. It also corresponds to K, L, M, N shells.',
              },
              {
                lang: 'ta',
                text: '<strong>முதன்மை குவாண்டம் எண் ($n$):</strong> முக்கிய ஆற்றல் நிலை அல்லது கூட்டினை தீர்மானிக்கிறது. $n = 1, 2, 3, \dots$. $n$ பெரியதாக இருந்தால், சுற்றுப்பாதையின் அளவு பெரியதாகவும் ஆற்றல் அதிகமாகவும் இருக்கும். இது K, L, M, N கூடுகளுக்கும் ஒத்துள்ளது.',
              },
              {
                lang: 'en',
                text: '<strong>Azimuthal or Angular Momentum Quantum Number ($l$):</strong> Determines the shape of the orbital and the subshell. $l = 0, 1, 2, \dots, (n-1)$. Values $0, 1, 2, 3$ correspond to s, p, d, f subshells, respectively.',
              },
              {
                lang: 'ta',
                text: '<strong>அசிமுத்தல் அல்லது கோண உந்த குவாண்டம் எண் ($l$):</strong> ஆர்பிட்டாலின் வடிவம் மற்றும் துணைக்கூட்டினை தீர்மானிக்கிறது. $l = 0, 1, 2, \dots, (n-1)$. $0, 1, 2, 3$ மதிப்புகள் முறையே s, p, d, f துணைக்கூடுகளுக்கு ஒத்தவை.',
              },
              {
                lang: 'en',
                text: '<strong>Magnetic Quantum Number ($m_l$):</strong> Determines the orientation of the orbital in space. $m_l = -l, \dots, 0, \dots, +l$. For a given $l$, there are $(2l+1)$ values of $m_l$.',
              },
              {
                lang: 'ta',
                text: '<strong>காந்த குவாண்டம் எண் ($m_l$):</strong> விண்வெளியில் ஆர்பிட்டாலின் நோக்குநிலையை தீர்மானிக்கிறது. $m_l = -l, \dots, 0, \dots, +l$. ஒரு குறிப்பிட்ட $l$-க்கு, $m_l$-ன் $(2l+1)$ மதிப்புகள் உள்ளன.',
              },
              {
                lang: 'en',
                text: '<strong>Spin Quantum Number ($m_s$):</strong> Describes the spin orientation of the electron. $m_s = +1/2$ (spin up) or $-1/2$ (spin down).',
              },
              {
                lang: 'ta',
                text: '<strong>சுழல் குவாண்டம் எண் ($m_s$):</strong> எலக்ட்ரானின் சுழல் நோக்குநிலையை விவரிக்கிறது. $m_s = +1/2$ (மேல்நோக்கிய சுழல்) அல்லது $-1/2$ (கீழ்நோக்கிய சுழல்).',
              },
            ],
          },
          {
            type: 'heading',
            level: 4,
            lang: 'en',
            text: 'Shapes of Atomic Orbitals (Interactive Diagram):',
          },
          {
            type: 'heading',
            level: 4,
            lang: 'ta',
            text: 'அணு ஆர்பிட்டால்களின் வடிவங்கள் (ஊடாடும் வரைபடம்):',
          },
          {
            type: 'interactive-diagram',
            id: 'orbital-shapes',
            title: {
              en: 'Shapes of s, p, and d Orbitals',
              ta: 's, p மற்றும் d ஆர்பிட்டால்களின் வடிவங்கள்',
            },
            description: {
              en: 'Explore the three-dimensional shapes and orientations of different atomic orbitals (s, p, d) that describe electron probability distributions.',
              ta: 'எலக்ட்ரான் நிகழ்தகவு விநியோகங்களை விவரிக்கும் வெவ்வேறு அணு ஆர்பிட்டால்களின் (s, p, d) முப்பரிமாண வடிவங்கள் மற்றும் நோக்குநிலைகளை ஆராயுங்கள்.',
            },
            url: 'https://www.chemtube3d.com/orbitals/', // Placeholder URL, replace with actual high-quality interactive content
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Rules for Filling Electrons in Orbitals:',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'ஆர்பிட்டால்களில் எலக்ட்ரான்களை நிரப்புவதற்கான விதிகள்:',
          },
          {
            type: 'list',
            items: [
              {
                lang: 'en',
                text: '<strong>Aufbau Principle:</strong> Electrons fill orbitals in order of increasing energy. The order is generally $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s ...$',
              },
              {
                lang: 'ta',
                text: '<strong>ஆஃபா கொள்கை:</strong> எலக்ட்ரான்கள் அதிகரிக்கும் ஆற்றல் வரிசையில் ஆர்பிட்டால்களை நிரப்புகின்றன. வரிசை பொதுவாக $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s ...$',
              },
              {
                lang: 'en',
                text: '<strong>Pauli Exclusion Principle:</strong> No two electrons in an atom can have the same set of four quantum numbers. This means an orbital can hold a maximum of two electrons, and they must have opposite spins.',
              },
              {
                lang: 'ta',
                text: '<strong>பவுலி விலக்கு கொள்கை:</strong> ஒரு அணுவில் உள்ள எந்த இரண்டு எலக்ட்ரான்களுக்கும் ஒரே மாதிரியான நான்கு குவாண்டம் எண்கள் இருக்க முடியாது. இதன் பொருள் ஒரு ஆர்பிட்டால் அதிகபட்சமாக இரண்டு எலக்ட்ரான்களைக் கொண்டிருக்கும், அவை எதிர் சுழல்களைக் கொண்டிருக்க வேண்டும்.',
              },
              {
                lang: 'en',
                text: '<strong>Hund\'s Rule of Maximum Multiplicity:</strong> For degenerate orbitals (orbitals of the same energy), electron pairing does not occur until each orbital in the subshell is singly occupied with parallel spins.',
              },
              {
                lang: 'ta',
                text: '<strong>ஹண்ட் விதியின் அதிகபட்ச பெருக்கம்:</strong> சிதைந்த ஆர்பிட்டால்களுக்கு (ஒரே ஆற்றல் கொண்ட ஆர்பிட்டால்கள்), துணைக்கூட்டில் உள்ள ஒவ்வொரு ஆர்பிட்டாலும் ஒற்றை இணை சுழலுடன் தனித்தனியாக ஆக்கிரமிக்கப்படும் வரை எலக்ட்ரான் இணையாக்கம் நடைபெறாது.',
              },
            ],
          },
          {
            type: 'heading',
            level: 3,
            lang: 'en',
            text: 'Electronic Configuration:',
          },
          {
            type: 'heading',
            level: 3,
            lang: 'ta',
            text: 'மின்னணு கட்டமைப்பு:',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The distribution of electrons into orbitals of an atom. E.g., Nitrogen (Z=7): $1s^2 2s^2 2p^3$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஒரு அணுவின் ஆர்பிட்டால்களில் எலக்ட்ரான்களின் விநியோகம். எ.கா., நைட்ரஜன் (Z=7): $1s^2 2s^2 2p^3$.',
          },
        ],
      },
    ],
  },
  workedExamples: {
    title: {
      en: 'Worked Examples',
      ta: 'தீர்க்கப்பட்ட எடுத்துக்காட்டுகள்',
    },
    examples: [
      {
        id: 'we1',
        title: {
          en: 'Rutherford\'s Experiment - Closest Approach',
          ta: 'ரூதர்ஃபோர்ட் பரிசோதனை - நெருங்கிய அணுகுமுறை',
        },
        question: {
          lang: 'en',
          text: 'An alpha particle with kinetic energy 5.0 MeV is directed towards a gold nucleus ($Z=79$). Calculate the distance of closest approach.',
        },
        question_ta: {
          lang: 'ta',
          text: '5.0 MeV இயக்க ஆற்றல் கொண்ட ஒரு ஆல்பா துகள் ஒரு தங்க அணுக்கருவை ($Z=79$) நோக்கி செலுத்தப்படுகிறது. நெருங்கிய அணுகுமுறை தூரத்தைக் கணக்கிடுங்கள்.',
        },
        solution: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'At the distance of closest approach ($r_0$), the kinetic energy of the alpha particle is completely converted into electrostatic potential energy.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'நெருங்கிய அணுகுமுறை தூரத்தில் ($r_0$), ஆல்பா துகளின் இயக்க ஆற்றல் முழுவதுமாக மின்நிலை ஆற்றலாக மாற்றப்படுகிறது.',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Given: Kinetic Energy, $K = 5.0 \text{ MeV} = 5.0 \times 1.6 \times 10^{-13} \text{ J} = 8.0 \times 10^{-13} \text{ J}$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'கொடுக்கப்பட்டவை: இயக்க ஆற்றல், $K = 5.0 \text{ MeV} = 5.0 \times 1.6 \times 10^{-13} \text{ J} = 8.0 \times 10^{-13} \text{ J}$.',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Charge of alpha particle, $q_1 = +2e$. Charge of gold nucleus, $q_2 = +Ze = +79e$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஆல்பா துகளின் மின்னூட்டம், $q_1 = +2e$. தங்க அணுக்கருவின் மின்னூட்டம், $q_2 = +Ze = +79e$.',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$K = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r_0}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$K = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r_0}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_0 = \frac{1}{4\pi\epsilon_0} \frac{(2e)(Ze)}{K} = \frac{9 \times 10^9 \times 2 \times 79 \times (1.6 \times 10^{-19})^2}{8.0 \times 10^{-13}}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_0 = \frac{1}{4\pi\epsilon_0} \frac{(2e)(Ze)}{K} = \frac{9 \times 10^9 \times 2 \times 79 \times (1.6 \times 10^{-19})^2}{8.0 \times 10^{-13}}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_0 = \frac{9 \times 10^9 \times 158 \times 2.56 \times 10^{-38}}{8.0 \times 10^{-13}}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_0 = \frac{9 \times 10^9 \times 158 \times 2.56 \times 10^{-38}}{8.0 \times 10^{-13}}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_0 \approx 5.7 \times 10^{-14} \text{ m}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_0 \approx 5.7 \times 10^{-14} \text{ m}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The distance of closest approach is approximately $5.7 \times 10^{-14}$ m.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'நெருங்கிய அணுகுமுறை தூரம் தோராயமாக $5.7 \times 10^{-14}$ m.',
          },
        ],
      },
      {
        id: 'we2',
        title: {
          en: 'Bohr\'s Radius Calculation',
          ta: 'போரின் ஆரம் கணக்கீடு',
        },
        question: {
          lang: 'en',
          text: 'Calculate the radius of the third Bohr orbit for the Li$^{2+}$ ion.',
        },
        question_ta: {
          lang: 'ta',
          text: 'Li$^{2+}$ அயனிக்கான மூன்றாவது போர் சுற்றுப்பாதையின் ஆரத்தைக் கணக்கிடுங்கள்.',
        },
        solution: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'For Li$^{2+}$, atomic number $Z=3$. We need to find the radius for the third orbit, so $n=3$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'Li$^{2+}$ க்கு, அணு எண் $Z=3$. மூன்றாவது சுற்றுப்பாதையின் ஆரத்தை நாம் கண்டுபிடிக்க வேண்டும், எனவே $n=3$.',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The formula for the radius of the $n^{th}$ Bohr orbit for a hydrogen-like species is:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஹைட்ரஜன் போன்ற இனங்களுக்கான $n$-வது போர் சுற்றுப்பாதையின் ஆரத்திற்கான சூத்திரம்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_n = 0.529 \times \frac{n^2}{Z} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_n = 0.529 \times \frac{n^2}{Z} \mathring{A}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Substitute the values:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'மதிப்புகளைப் பிரதியிடவும்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_3 = 0.529 \times \frac{3^2}{3} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_3 = 0.529 \times \frac{3^2}{3} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_3 = 0.529 \times \frac{9}{3} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_3 = 0.529 \times \frac{9}{3} \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_3 = 0.529 \times 3 \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_3 = 0.529 \times 3 \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$r_3 = 1.587 \mathring{A}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$r_3 = 1.587 \mathring{A}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The radius of the third Bohr orbit for Li$^{2+}$ ion is $1.587 \mathring{A}$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'Li$^{2+}$ அயனிக்கான மூன்றாவது போர் சுற்றுப்பாதையின் ஆரம் $1.587 \mathring{A}$.',
          },
        ],
      },
      {
        id: 'we3',
        title: {
          en: 'Spectral Line Wavelength',
          ta: 'நிறமாலை கோட்டின் அலைநீளம்',
        },
        question: {
          lang: 'en',
          text: 'Calculate the wavelength of the first line of the Balmer series in the hydrogen spectrum. ($R_H = 1.097 \times 10^7 \text{ m}^{-1}$)',
        },
        question_ta: {
          lang: 'ta',
          text: 'ஹைட்ரஜன் நிறமாலையில் பால்மர் தொடரின் முதல் கோட்டின் அலைநீளத்தைக் கணக்கிடுங்கள். ($R_H = 1.097 \times 10^7 \text{ m}^{-1}$)',
        },
        solution: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'For the Balmer series, $n_1 = 2$. The first line corresponds to the transition from $n_2 = 3$ to $n_1 = 2$. For hydrogen, $Z=1$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'பால்மர் தொடருக்கு, $n_1 = 2$. முதல் கோடு $n_2 = 3$ இலிருந்து $n_1 = 2$ க்கு மாறுவதைக் குறிக்கிறது. ஹைட்ரஜனுக்கு, $Z=1$.',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Rydberg formula:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ரிட்பெர்க் சூத்திரம்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\frac{1}{\lambda} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\frac{1}{\lambda} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Substitute the values for hydrogen spectrum:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஹைட்ரஜன் நிறமாலையின் மதிப்புகளைப் பிரதியிடவும்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) (1)^2 \left(\frac{1}{2^2} - \frac{1}{3^2}\right)$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) (1)^2 \left(\frac{1}{2^2} - \frac{1}{3^2}\right)$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \left(\frac{1}{4} - \frac{1}{9}\right)$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \left(\frac{1}{4} - \frac{1}{9}\right)$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \left(\frac{9-4}{36}\right)$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \left(\frac{9-4}{36}\right)$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \times \frac{5}{36}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\frac{1}{\lambda} = (1.097 \times 10^7) \times \frac{5}{36}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda = \frac{36}{5 \times 1.097 \times 10^7} \text{ m}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda = \frac{36}{5 \times 1.097 \times 10^7} \text{ m}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda \approx 6.56 \times 10^{-7} \text{ m} = 656 \text{ nm}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda \approx 6.56 \times 10^{-7} \text{ m} = 656 \text{ nm}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The wavelength of the first line of the Balmer series is approximately 656 nm.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'பால்மர் தொடரின் முதல் கோட்டின் அலைநீளம் தோராயமாக 656 nm.',
          },
        ],
      },
      {
        id: 'we4',
        title: {
          en: 'De Broglie Wavelength',
          ta: 'டி ப்ரோக்லி அலைநீளம்',
        },
        question: {
          lang: 'en',
          text: 'Calculate the de Broglie wavelength of an electron moving with a velocity of $1.0 \times 10^6 \text{ m/s}$. (Mass of electron $m_e = 9.1 \times 10^{-31} \text{ kg}$, Planck\'s constant $h = 6.626 \times 10^{-34} \text{ Js}$)',
        },
        question_ta: {
          lang: 'ta',
          text: '$1.0 \times 10^6 \text{ m/s}$ திசைவேகத்தில் நகரும் ஒரு எலக்ட்ரானின் டி ப்ரோக்லி அலைநீளத்தைக் கணக்கிடுங்கள். (எலக்ட்ரானின் நிறை $m_e = 9.1 \times 10^{-31} \text{ kg}$, பிளாங்க் மாறிலி $h = 6.626 \times 10^{-34} \text{ Js}$)',
        },
        solution: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'De Broglie wavelength formula:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'டி ப்ரோக்லி அலைநீள சூத்திரம்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda = \frac{h}{mv}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda = \frac{h}{mv}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Given: $h = 6.626 \times 10^{-34} \text{ Js}$, $m = 9.1 \times 10^{-31} \text{ kg}$, $v = 1.0 \times 10^6 \text{ m/s}$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'கொடுக்கப்பட்டவை: $h = 6.626 \times 10^{-34} \text{ Js}$, $m = 9.1 \times 10^{-31} \text{ kg}$, $v = 1.0 \times 10^6 \text{ m/s}$.',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda = \frac{6.626 \times 10^{-34}}{(9.1 \times 10^{-31}) \times (1.0 \times 10^6)}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda = \frac{6.626 \times 10^{-34}}{(9.1 \times 10^{-31}) \times (1.0 \times 10^6)}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda = \frac{6.626 \times 10^{-34}}{9.1 \times 10^{-25}}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda = \frac{6.626 \times 10^{-34}}{9.1 \times 10^{-25}}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\lambda \approx 0.728 \times 10^{-9} \text{ m} = 0.728 \text{ nm}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\lambda \approx 0.728 \times 10^{-9} \text{ m} = 0.728 \text{ nm}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The de Broglie wavelength of the electron is approximately 0.728 nm.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'எலக்ட்ரானின் டி ப்ரோக்லி அலைநீளம் தோராயமாக 0.728 nm.',
          },
        ],
      },
      {
        id: 'we5',
        title: {
          en: 'Heisenberg\'s Uncertainty Principle',
          ta: 'ஹைசன்பர்க்கின் நிச்சயமற்ற கொள்கை',
        },
        question: {
          lang: 'en',
          text: 'If the uncertainty in the position of an electron is $10^{-10}$ m, what is the minimum uncertainty in its velocity? ($m_e = 9.1 \times 10^{-31} \text{ kg}$, $h = 6.626 \times 10^{-34} \text{ Js}$)',
        },
        question_ta: {
          lang: 'ta',
          text: 'ஒரு எலக்ட்ரானின் நிலையில் உள்ள நிச்சயமற்ற தன்மை $10^{-10}$ m ஆக இருந்தால், அதன் திசைவேகத்தில் உள்ள குறைந்தபட்ச நிச்சயமற்ற தன்மை என்ன? ($m_e = 9.1 \times 10^{-31} \text{ kg}$, $h = 6.626 \times 10^{-34} \text{ Js}$)',
        },
        solution: [
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Heisenberg\'s Uncertainty Principle:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'ஹைசன்பர்க்கின் நிச்சயமற்ற கொள்கை:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta x \cdot m\Delta v \ge \frac{h}{4\pi}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta x \cdot m\Delta v \ge \frac{h}{4\pi}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'For minimum uncertainty, we use the equality:',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'குறைந்தபட்ச நிச்சயமற்ற தன்மைக்கு, சமத்துவத்தைப் பயன்படுத்துகிறோம்:',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta v = \frac{h}{4\pi m \Delta x}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta v = \frac{h}{4\pi m \Delta x}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'Given: $\Delta x = 10^{-10} \text{ m}$, $m = 9.1 \times 10^{-31} \text{ kg}$, $h = 6.626 \times 10^{-34} \text{ Js}$, $\pi = 3.14159$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'கொடுக்கப்பட்டவை: $\Delta x = 10^{-10} \text{ m}$, $m = 9.1 \times 10^{-31} \text{ kg}$, $h = 6.626 \times 10^{-34} \text{ Js}$, $\pi = 3.14159$.',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta v = \frac{6.626 \times 10^{-34}}{4 \times 3.14159 \times 9.1 \times 10^{-31} \times 10^{-10}}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta v = \frac{6.626 \times 10^{-34}}{4 \times 3.14159 \times 9.1 \times 10^{-31} \times 10^{-10}}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta v = \frac{6.626 \times 10^{-34}}{114.39 \times 10^{-41}}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta v = \frac{6.626 \times 10^{-34}}{114.39 \times 10^{-41}}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta v \approx 0.0579 \times 10^7 \text{ m/s}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta v \approx 0.0579 \times 10^7 \text{ m/s}$$',
          },
          {
            type: 'math',
            lang: 'en',
            text: '$$\Delta v \approx 5.79 \times 10^5 \text{ m/s}$$',
          },
          {
            type: 'math',
            lang: 'ta',
            text: '$$\Delta v \approx 5.79 \times 10^5 \text{ m/s}$$',
          },
          {
            type: 'paragraph',
            lang: 'en',
            text: 'The minimum uncertainty in the velocity of the electron is approximately $5.79 \times 10^5 \text{ m/s}$.',
          },
          {
            type: 'paragraph',
            lang: 'ta',
            text: 'எலக்ட்ரானின் திசைவேகத்தில் உள்ள குறைந்தபட்ச நிச்சயமற்ற தன்மை தோராயமாக $5.79 \times 10^5 \text{ m/s}$.',
          },
        ],
      },
    ],
  },
  mcqs: [
    {
      id: 'mcq1',
      question: 'Which of the following statements is INCORRECT regarding Rutherford\'s model of the atom?',
      options: [
        'Most of the atom is empty space.',
        'The entire positive charge and nearly the entire mass are concentrated in the nucleus.',
        'Electrons revolve around the nucleus in fixed orbits.',
        'The size of the nucleus is very small compared to the size of the atom.',
      ],
      answer: 3,
      explanation: 'Rutherford\'s model stated that electrons revolve around the nucleus, but it did not specify fixed orbits. This was a postulate of Bohr\'s model. Rutherford\'s model could not explain the stability of the atom due to continuous energy loss by accelerating electrons.',
      neetFrequency: 3,
    },
    {
      id: 'mcq2',
      question: 'The energy of an electron in the first Bohr orbit of the hydrogen atom is -13.6 eV. The energy of an electron in the second Bohr orbit of the He$^+$ ion would be:',
      options: [
        '-13.6 eV',
        '-27.2 eV',
        '-54.4 eV',
        '-6.8 eV',
      ],
      answer: 1,
      explanation: 'For hydrogen-like atoms, $E_n = -13.6 \times \frac{Z^2}{n^2}$ eV. For He$^+$, $Z=2$. For the second orbit, $n=2$. So, $E_2 = -13.6 \times \frac{2^2}{2^2} = -13.6 \times \frac{4}{4} = -13.6 \text{ eV}$.',
      neetFrequency: 4,
    },
    {
      id: 'mcq3',
      question: 'According to Bohr\'s model, the angular momentum of an electron in a stationary orbit is:',
      options: [
        'Directly proportional to the principal quantum number.',
        'Inversely proportional to the principal quantum number.',
        'Independent of the principal quantum number.',
        'Quantized as an integral multiple of $h/(2\pi)$.',
      ],
      answer: 4,
      explanation: 'Bohr\'s postulate states that the angular momentum of an electron is quantized and is an integral multiple of $h/(2\pi)$, i.e., $mvr = n\frac{h}{2\pi}$.',
      neetFrequency: 3,
    },
    {
      id: 'mcq4',
      question: 'Which series of lines in the hydrogen spectrum lies in the visible region?',
      options: [
        'Lyman series',
        'Balmer series',
        'Paschen series',
        'Brackett series',
      ],
      answer: 2,
      explanation: 'The Balmer series corresponds to electron transitions to the $n=2$ orbit, and its lines fall in the visible region of the electromagnetic spectrum.',
      neetFrequency: 4,
    },
    {
      id: 'mcq5',
      question: 'What is the maximum number of electrons that can be accommodated in the $n=3$ shell?',
      options: [
        '2',
        '8',
        '18',
        '32',
      ],
      answer: 3,
      explanation: 'The maximum number of electrons in a shell is given by $2n^2$. For $n=3$, maximum electrons = $2 \times 3^2 = 2 \times 9 = 18$.',
      neetFrequency: 5,
    },
    {
      id: 'mcq6',
      question: 'The de Broglie wavelength of a particle is inversely proportional to its:',
      options: [
        'Charge',
        'Energy',
        'Momentum',
        'Frequency',
      ],
      answer: 3,
      explanation: 'According to de Broglie hypothesis, $\lambda = h/p$, where $p$ is the momentum of the particle. Thus, wavelength is inversely proportional to momentum.',
      neetFrequency: 3,
    },
    {
      id: 'mcq7',
      question: 'Heisenberg\'s Uncertainty Principle states that it is impossible to precisely determine simultaneously:',
      options: [
        'Energy and momentum',
        'Position and momentum',
        'Velocity and acceleration',
        'Time and frequency',
      ],
      answer: 2,
      explanation: 'Heisenberg\'s Uncertainty Principle states that for a subatomic particle, the position and momentum cannot be simultaneously determined with absolute precision: $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$.',
      neetFrequency: 4,
    },
    {
      id: 'mcq8',
      question: 'Which quantum number determines the shape of an atomic orbital?',
      options: [
        'Principal quantum number ($n$)',
        'Azimuthal quantum number ($l$)',
        'Magnetic quantum number ($m_l$)',
        'Spin quantum number ($m_s$)',
      ],
      answer: 2,
      explanation: 'The azimuthal (or angular momentum) quantum number ($l$) determines the shape of the orbital. For $l=0$, it\'s s-orbital (spherical); for $l=1$, p-orbital (dumbbell-shaped), etc.',
      neetFrequency: 5,
    },
    {
      id: 'mcq9',
      question: 'How many orbitals are possible for $n=3$ and $l=1$?',
      options: [
        '1',
        '3',
        '5',
        '7',
      ],
      answer: 2,
      explanation: 'For $l=1$, the possible values of $m_l$ are $-1, 0, +1$. These three values correspond to three orbitals (p_x, p_y, p_z) within the $l=1$ subshell. So, there are 3 orbitals.',
      neetFrequency: 4,
    },
    {
      id: 'mcq10',
      question: 'According to Aufbau principle, electrons fill orbitals in the order of:',
      options: [
        'Decreasing energy',
        'Increasing stability',
        'Increasing energy',
        'Randomly',
      ],
      answer: 3,
      explanation: 'The Aufbau principle states that electrons first occupy the lowest energy orbitals available before filling higher energy orbitals.',
      neetFrequency: 3,
    },
    {
      id: 'mcq11',
      question: 'Which of the following sets of quantum numbers is NOT possible?',
      options: [
        'n=2, l=1, m_l=0, m_s=+1/2',
        'n=3, l=2, m_l=-2, m_s=-1/2',
        'n=1, l=1, m_l=0, m_s=+1/2',
        'n=4, l=0, m_l=0, m_s=-1/2',
      ],
      answer: 3,
      explanation: 'For $n=1$, the only possible value for $l$ is $0$. So, $l=1$ is not allowed for $n=1$.',
      neetFrequency: 5,
    },
    {
      id: 'mcq12',
      question: 'The maximum number of electrons in a subshell is given by:',
      options: [
        '$2l+1$',
        '$2n^2$',
        '$4l+2$',
        '$2(2l+1)$',
      ],
      answer: 4,
      explanation: 'For a given $l$, there are $(2l+1)$ orbitals. Each orbital can hold a maximum of 2 electrons (Pauli exclusion principle). So, maximum electrons in a subshell = $2(2l+1)$.',
      neetFrequency: 4,
    },
    {
      id: 'mcq13',
      question: 'Which rule states that "electron pairing in degenerate orbitals does not occur until each orbital in a subshell is singly occupied with parallel spins"?',
      options: [
        'Pauli Exclusion Principle',
        'Aufbau Principle',
        'Hund\'s Rule',
        'Heisenberg\'s Uncertainty Principle',
      ],
      answer: 3,
      explanation: 'This statement is the definition of Hund\'s Rule of Maximum Multiplicity.',
      neetFrequency: 4,
    },
    {
      id: 'mcq14',
      question: 'What is the electronic configuration of Chromium (Cr, Z=24)?',
      options: [
        '$[Ar] 3d^4 4s^2$',
        '$[Ar] 3d^5 4s^1$',
        '$[Ar] 3d^3 4s^2 4p^1$',
        '$[Ar] 3d^6$',
      ],
      answer: 2,
      explanation: 'Chromium exhibits an anomalous electronic configuration due to the extra stability of half-filled d-orbitals. It is $[Ar] 3d^5 4s^1$ instead of $[Ar] 3d^4 4s^2$.',
      neetFrequency: 5,
    },
    {
      id: 'mcq15',
      question: 'The number of radial nodes for a 3p orbital is:',
      options: [
        '0',
        '1',
        '2',
        '3',
      ],
      answer: 1,
      explanation: 'Number of radial nodes = $n - l - 1$. For a 3p orbital, $n=3$ and $l=1$. So, radial nodes = $3 - 1 - 1 = 1$.',
      neetFrequency: 3,
    },
    {
      id: 'mcq16',
      question: 'Which of the following is correct regarding the photoelectric effect?',
      options: [
        'It is explained by the wave nature of light.',
        'It demonstrates the particle nature of light.',
        'The kinetic energy of emitted electrons depends on the intensity of incident light.',
        'There is a time delay between the incidence of light and the emission of electrons.',
      ],
      answer: 2,
      explanation: 'The photoelectric effect, along with blackbody radiation and atomic spectra, can only be explained by considering the particle nature of light (photons).',
      neetFrequency: 3,
    },
    {
      id: 'mcq17',
      question: 'If the principal quantum number $n=4$, what are the possible values for the azimuthal quantum number $l$?',
      options: [
        '0, 1, 2, 3',
        '1, 2, 3, 4',
        '0, 1, 2',
        '0, 1, 2, 3, 4',
      ],
      answer: 1,
      explanation: 'The azimuthal quantum number $l$ can take integer values from $0$ to $n-1$. For $n=4$, $l$ can be $0, 1, 2, 3$.',
      neetFrequency: 4,
    },
    {
      id: 'mcq18',
      question: 'The total number of electrons in all orbitals with $n=2, l=1$ is:',
      options: [
        '2',
        '6',
        '10',
        '14',
      ],
      answer: 2,
      explanation: 'For $n=2, l=1$, we are talking about the 2p subshell. A p-subshell has 3 orbitals ($m_l = -1, 0, +1$). Each orbital can hold 2 electrons. So, total electrons = $3 \times 2 = 6$.',
      neetFrequency: 4,
    },
    {
      id: 'mcq19',
      question: 'Which of the following atomic orbitals is NOT possible?',
      options: [
        '1s',
        '2p',
        '3f',
        '4d',
      ],
      answer: 3,
      explanation: 'For $n=3$, the maximum value of $l$ is $n-1 = 3-1 = 2$. So, $l=0, 1, 2$ (s, p, d orbitals) are possible. An f-orbital corresponds to $l=3$, which is not possible for $n=3$. Hence, 3f is not possible.',
      neetFrequency: 5,
    },
    {
      id: 'mcq20',
      question: 'The minimum energy required to remove an electron from the ground state of a hydrogen atom is:',
      options: [
        '0 eV',
        '13.6 eV',
        '-13.6 eV',
        '27.2 eV',
      ],
      answer: 2,
      explanation: 'The ground state energy of a hydrogen atom ($n=1, Z=1$) is $E_1 = -13.6 \text{ eV}$. To remove this electron to infinity (where energy is 0), the energy required is $0 - (-13.6) = +13.6 \text{ eV}$. This is also known as the ionization energy.',
      neetFrequency: 4,
    },
    {
      id: 'mcq21',
      question: 'What is the value of the magnetic quantum number ($m_l$) for an electron in a d-orbital?',
      options: [
        '0',
        '-1, 0, +1',
        '-2, -1, 0, +1, +2',
        '+1/2, -1/2',
      ],
      answer: 3,
      explanation: 'For a d-orbital, $l=2$. The magnetic quantum number $m_l$ can take values from $-l$ to $+l$, including $0$. So, for $l=2$, $m_l = -2, -1, 0, +1, +2$.',
      neetFrequency: 3,
    },
    {
      id: 'mcq22',
      question: 'The number of angular nodes for a 2s orbital is:',
      options: [
        '0',
        '1',
        '2',
        '3',
      ],
      answer: 1,
      explanation: 'The number of angular nodes is equal to the azimuthal quantum number $l$. For a 2s orbital, $l=0$. So, angular nodes = 0.',
      neetFrequency: 3,
    },
    {
      id: 'mcq23',
      question: 'Which of the following elements has an electronic configuration of $[Ne] 3s^2 3p^3$?',
      options: [
        'Aluminum (Al)',
        'Silicon (Si)',
        'Phosphorus (P)',
        'Sulfur (S)',
      ],
      answer: 3,
      explanation: 'The electronic configuration $[Ne] 3s^2 3p^3$ indicates 2 (from Ne) + 2 (from 3s) + 3 (from 3p) = 17 electrons. This corresponds to the atomic number of Phosphorus (P, Z=15). Wait, total electrons should be Z. Ne is 10 electrons. So 10 + 2 + 3 = 15. Phosphorus (P) has Z=15.',
      neetFrequency: 4,
    },
    {
      id: 'mcq24',
      question: 'The phenomenon of splitting of spectral lines in an external magnetic field is called:',
      options: [
        'Stark effect',
        'Zeeman effect',
        'Photoelectric effect',
        'Compton effect',
      ],
      answer: 2,
      explanation: 'The splitting of spectral lines in the presence of a magnetic field is known as the Zeeman effect. The splitting in an electric field is the Stark effect.',
      neetFrequency: 3,
    },
    {
      id: 'mcq25',
      question: 'Which of the following particles has the longest de Broglie wavelength when moving with the same velocity?',
      options: [
        'Electron',
        'Proton',
        'Alpha particle',
        'Neutron',
      ],
      answer: 1,
      explanation: 'De Broglie wavelength $\lambda = h/mv$. For the same velocity, $\lambda$ is inversely proportional to mass ($m$). An electron has the smallest mass among the given options, so it will have the longest de Broglie wavelength.',
      neetFrequency: 4,
    },
  ],
  assertionReason: [
    {
      id: 'ar1',
      assertion: 'Assertion (A): Bohr\'s model is not applicable to multi-electron atoms.',
      reason: 'Reason (R): Bohr\'s model does not consider the electron-electron repulsion and the screening effect of the inner electrons on the outer electrons.',
      options: [
        'Both A and R are true and R is the correct explanation of A.',
        'Both A and R are true but R is not the correct explanation of A.',
        'A is true but R is false.',
        'A is false but R is true.',
      ],
      answer: 1,
      explanation: 'Bohr\'s model was developed for a single-electron system (like H, He$^+$, Li$^{2+}$) and hence fails to explain the spectra of multi-electron atoms because it does not account for the complex electron-electron interactions (repulsion and shielding).',
    },
    {
      id: 'ar2',
      assertion: 'Assertion (A): The angular momentum of an electron in any orbit is an integral multiple of $h/(2\pi)$.',
      reason: 'Reason (R): Electrons in stationary orbits do not radiate energy.',
      options: [
        'Both A and R are true and R is the correct explanation of A.',
        'Both A and R are true but R is not the correct explanation of A.',
        'A is true but R is false.',
        'A is false but R is true.',
      ],
      answer: 2,
      explanation: 'Both statements are true postulates of Bohr\'s model. However, the reason (R) is not a direct explanation for the quantization of angular momentum (A). The quantization of angular momentum is an independent postulate, while non-radiation in stationary orbits explains the stability of atoms, a separate postulate.',
    },
    {
      id: 'ar3',
      assertion: 'Assertion (A): It is impossible to determine the exact position and exact momentum of an electron simultaneously.',
      reason: 'Reason (R): The path of an electron in an atom is precisely known.',
      options: [
        'Both A and R are true and R is the correct explanation of A.',
        'Both A and R are true but R is not the correct explanation of A.',
        'A is true but R is false.',
        'A is false but R is true.',
      ],
      answer: 3,
      explanation: 'Assertion (A) is the statement of Heisenberg\'s Uncertainty Principle and is true. Reason (R) is false; the path of an electron is not precisely known due to its wave nature and the uncertainty principle. We only talk about the probability of finding an electron in a region (orbital).',
    },
    {
      id: 'ar4',
      assertion: 'Assertion (A): An atom is electrically neutral.',
      reason: 'Reason (R): The number of protons is equal to the number of electrons in an atom.',
      options: [
        'Both A and R are true and R is the correct explanation of A.',
        'Both A and R are true but R is not the correct explanation of A.',
        'A is true but R is false.',
        'A is false but R is true.',
      ],
      answer: 1,
      explanation: 'A neutral atom has an equal number of positively charged protons in the nucleus and negatively charged electrons revolving around it, hence their charges cancel out making the atom electrically neutral. So, R is the correct explanation for A.',
    },
    {
      id: 'ar5',
      assertion: 'Assertion (A): The orbital designated by $n=2, l=0$ is called a 2s orbital.',
      reason: 'Reason (R): The value $l=0$ corresponds to an s-orbital.',
      options: [
        'Both A and R are true and R is the correct explanation of A.',
        'Both A and R are true but R is not the correct explanation of A.',
        'A is true but R is false.',
        'A is false but R is true.',
      ],
      answer: 1,
      explanation: 'The principal quantum number $n$ indicates the main shell (2 in this case), and the azimuthal quantum number $l$ indicates the subshell type ($l=0$ is an s-subshell). Therefore, an orbital with $n=2, l=0$ is indeed a 2s orbital, and the reason correctly explains why.',
    },
  ],
  matchTheColumns: [
    {
      id: 'mtc1',
      columnA: [
        'J.J. Thomson',
        'E. Rutherford',
        'Niels Bohr',
        'Louis de Broglie',
      ],
      columnB: [
        'Quantization of energy levels',
        'Dual nature of matter',
        'Plum pudding model',
        'Discovery of nucleus',
      ],
      matches: {
        'J.J. Thomson': 'Plum pudding model',
        'E. Rutherford': 'Discovery of nucleus',
        'Niels Bohr': 'Quantization of energy levels',
        'Louis de Broglie': 'Dual nature of matter',
      },
      explanation: 'J.J. Thomson proposed the plum pudding model. E. Rutherford discovered the nucleus through his alpha-scattering experiment. Niels Bohr introduced the concept of quantized energy levels. Louis de Broglie proposed the dual nature of matter.',
    },
    {
      id: 'mtc2',
      columnA: [
        'Lyman series',
        'Balmer series',
        'Paschen series',
        'Pfund series',
      ],
      columnB: [
        'Visible region',
        'Ultraviolet region',
        'Infrared region ($n_1=3$)',
        'Infrared region ($n_1=5$)',
      ],
      matches: {
        'Lyman series': 'Ultraviolet region',
        'Balmer series': 'Visible region',
        'Paschen series': 'Infrared region ($n_1=3$)',
        'Pfund series': 'Infrared region ($n_1=5$)',
      },
      explanation: 'Lyman series is in the UV region ($n_1=1$). Balmer series is in the visible region ($n_1=2$). Paschen series is in the IR region ($n_1=3$). Pfund series is in the IR region ($n_1=5$).',
    },
    {
      id: 'mtc3',
      columnA: [
        'Principal quantum number ($n$)',
        'Azimuthal quantum number ($l$)',
        'Magnetic quantum number ($m_l$)',
        'Spin quantum number ($m_s$)',
      ],
      columnB: [
        'Orientation of orbital',
        'Main energy level and size',
        'Spin of electron',
        'Shape of orbital and subshell',
      ],
      matches: {
        'Principal quantum number ($n$)': 'Main energy level and size',
        'Azimuthal quantum number ($l$)': 'Shape of orbital and subshell',
        'Magnetic quantum number ($m_l$)': 'Orientation of orbital',
        'Spin quantum number ($m_s$)': 'Spin of electron',
      },
      explanation: 'Each quantum number has a specific role in describing an electron in an atom.',
    },
    {
      id: 'mtc4',
      columnA: [
        'Aufbau Principle',
        'Pauli Exclusion Principle',
        'Hund\'s Rule',
        'Heisenberg\'s Uncertainty Principle',
      ],
      columnB: [
        'Maximum two electrons per orbital with opposite spins',
        'Electrons occupy lowest energy orbitals first',
        'Cannot simultaneously determine position and momentum accurately',
        'Pairing in degenerate orbitals only after each is singly occupied',
      ],
      matches: {
        'Aufbau Principle': 'Electrons occupy lowest energy orbitals first',
        'Pauli Exclusion Principle': 'Maximum two electrons per orbital with opposite spins',
        'Hund\'s Rule': 'Pairing in degenerate orbitals only after each is singly occupied',
        'Heisenberg\'s Uncertainty Principle': 'Cannot simultaneously determine position and momentum accurately',
      },
      explanation: 'These are the fundamental rules and principles governing electron behavior and distribution in atoms.',
    },
    {
      id: 'mtc5',
      columnA: [
        's-orbital',
        'p-orbital',
        'd-orbital',
        'f-orbital',
      ],
      columnB: [
        'Dumbbell shaped',
        'Spherical',
        'Complex shapes (e.g., double dumbbell)',
        'Very complex shapes',
      ],
      matches: {
        's-orbital': 'Spherical',
        'p-orbital': 'Dumbbell shaped',
        'd-orbital': 'Complex shapes (e.g., double dumbbell)',
        'f-orbital': 'Very complex shapes',
      },
      explanation: 'The shapes of atomic orbitals are determined by the azimuthal quantum number ($l$). s-orbitals are spherical ($l=0$), p-orbitals are dumbbell shaped ($l=1$), d-orbitals have more complex shapes, often described as double dumbbells ($l=2$), and f-orbitals are even more complex ($l=3$).',
    },
  ],
};

export default atomicStructureModule;
