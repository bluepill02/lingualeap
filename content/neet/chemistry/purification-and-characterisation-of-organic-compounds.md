import { NeetModule } from './neet-module.model';

export const PurificationAndCharacterisationOfOrganicCompounds: NeetModule = {
  id: 'purification-characterisation-organic-compounds',
  name: 'Purification and Characterisation of Organic Compounds',
  nameTamil: 'கரிமச் சேர்மங்களை தூய்மைப்படுத்துதல் மற்றும் சிறப்பியல்புப்படுத்துதல்',
  subject: 'chemistry',
  chapter: 'Purification and Characterisation of Organic Compounds',
  order: 6,
  chapterNumberTag: 'Chapter 6',
  learn: [
    {
      type: 'text',
      title: 'Introduction',
      titleTamil: 'அறிமுகம்',
      content: [
        {
          type: 'paragraph',
          text: 'Organic compounds obtained from natural sources or synthesized in the laboratory are rarely pure. They are often contaminated with impurities. Therefore, it is essential to purify them before their analysis and characterisation. The methods of purification are based on the nature of the organic compound and the impurities present in it.',
          textTamil: 'இயற்கை மூலங்களிலிருந்து பெறப்பட்ட அல்லது ஆய்வகத்தில் தயாரிக்கப்பட்ட கரிமச் சேர்மங்கள் அரிதாகவே தூய்மையாக இருக்கும். அவை பெரும்பாலும் அசுத்தங்களால் மாசுபடுகின்றன. எனவே, அவற்றின் பகுப்பாய்வு மற்றும் சிறப்பியல்புப்படுத்துதலுக்கு முன் அவற்றை தூய்மைப்படுத்துவது அவசியம். தூய்மைப்படுத்தும் முறைகள் கரிமச் சேர்மத்தின் தன்மை மற்றும் அதில் உள்ள அசுத்தங்களின் அடிப்படையில் அமைகின்றன.'
        },
        {
          type: 'paragraph',
          text: 'After purification, the organic compounds need to be characterized to determine their elemental composition (qualitative analysis), the percentage of each element (quantitative analysis), molecular mass, and structural formula. This module will cover various methods of purification and characterisation of organic compounds.',
          textTamil: 'தூய்மைப்படுத்தலுக்குப் பிறகு, கரிமச் சேர்மங்கள் அவற்றின் தனிம கலவை (பண்பறி பகுப்பாய்வு), ஒவ்வொரு தனிமத்தின் சதவீதம் (அளவறி பகுப்பாய்வு), மூலக்கூறு எடை மற்றும் கட்டமைப்பு சூத்திரத்தை தீர்மானிக்க சிறப்பியல்புப்படுத்தப்பட வேண்டும். இந்த தொகுதி கரிமச் சேர்மங்களை தூய்மைப்படுத்துதல் மற்றும் சிறப்பியல்புப்படுத்துதலின் பல்வேறு முறைகளை உள்ளடக்கும்.'
        }
      ]
    },
    {
      type: 'text',
      title: 'Methods of Purification of Organic Compounds',
      titleTamil: 'கரிமச் சேர்மங்களை தூய்மைப்படுத்தும் முறைகள்',
      content: [
        {
          type: 'paragraph',
          text: 'The common methods used for purification of organic compounds are:',
          textTamil: 'கரிமச் சேர்மங்களை தூய்மைப்படுத்த பொதுவாகப் பயன்படுத்தப்படும் முறைகள்:'
        },
        {
          type: 'list',
          items: [
            { text: 'Crystallisation (படிகமாக்குதல்)', textTamil: 'படிகமாக்குதல்' },
            { text: 'Sublimation (பதங்கமாதல்)', textTamil: 'பதங்கமாதல்' },
            { text: 'Distillation (காய்ச்சிவடித்தல்)', textTamil: 'காய்ச்சிவடித்தல்' },
            { text: 'Differential Extraction (பகுபிரித்தெடுத்தல்)', textTamil: 'பகுபிரித்தெடுத்தல்' },
            { text: 'Chromatography (நிறப்பகுப்பாய்வு)', textTamil: 'நிறப்பகுப்பாய்வு' }
          ]
        }
      ]
    },
    {
      type: 'text',
      title: '1. Crystallisation (படிகமாக்குதல்)',
      titleTamil: '1. படிகமாக்குதல்',
      content: [
        {
          type: 'paragraph',
          text: 'Crystallisation is one of the most common and effective methods for purifying solid organic compounds. It is based on the difference in the solubilities of the compound and the impurities in a suitable solvent.',
          textTamil: 'படிகமாக்குதல் என்பது திட கரிமச் சேர்மங்களை தூய்மைப்படுத்துவதற்கான மிகவும் பொதுவான மற்றும் பயனுள்ள முறைகளில் ஒன்றாகும். இது ஒரு பொருத்தமான கரைப்பானில் சேர்மம் மற்றும் அசுத்தங்களின் கரைதிறனில் உள்ள வேறுபாட்டின் அடிப்படையில் அமைந்துள்ளது.'
        },
        {
          type: 'subheading',
          text: 'Principle (கோட்பாடு)',
          textTamil: 'கோட்பாடு'
        },
        {
          type: 'paragraph',
          text: 'The impure compound is dissolved in a minimum amount of a suitable solvent at a high temperature to form a saturated solution. On cooling, the pure compound crystallises out, while the impurities, being either less soluble or remaining in the mother liquor (highly soluble), do not crystallise.',
          textTamil: 'மாசுபட்ட சேர்மம் அதிக வெப்பநிலையில் குறைந்த அளவு பொருத்தமான கரைப்பானில் கரைக்கப்பட்டு ஒரு நிறைவுற்ற கரைசலை உருவாக்குகிறது. குளிர்விக்கும்போது, தூய சேர்மம் படிகமாகிறது, அதே சமயம் அசுத்தங்கள், குறைவாக கரையக்கூடியவையாகவோ அல்லது தாய் திரவத்தில் (அதிகம் கரையக்கூடியவை) எஞ்சியிருப்பவையாகவோ இருப்பதால், படிகமாகாது.'
        },
        {
          type: 'subheading',
          text: 'Selection of Solvent (கரைப்பான் தேர்வு)',
          textTamil: 'கரைப்பான் தேர்வு'
        },
        {
          type: 'paragraph',
          text: 'The ideal solvent should:',
          textTamil: 'சிறந்த கரைப்பான் கொண்டிருக்க வேண்டியவை:'
        },
        {
          type: 'list',
          items: [
            { text: 'Dissolve the compound sparingly at room temperature but appreciably at higher temperatures.', textTamil: 'அறை வெப்பநிலையில் சேர்மத்தை குறைவாகவும், அதிக வெப்பநிலையில் கணிசமாகவும் கரைக்க வேண்டும்.' },
            { text: 'Dissolve the impurities readily or not at all.', textTamil: 'அசுத்தங்களை எளிதில் கரைக்க வேண்டும் அல்லது அறவே கரைக்கக்கூடாது.' },
            { text: 'Be non-reactive with the compound.', textTamil: 'சேர்மத்துடன் வினைபுரியாமல் இருக்க வேண்டும்.' },
            { text: 'Be volatile enough to be easily removed.', textTamil: 'எளிதில் அகற்றக்கூடிய அளவுக்கு ஆவியாகக்கூடியதாக இருக்க வேண்டும்.' }
          ]
        },
        {
          type: 'paragraph',
          text: 'Common solvents: Water, ethanol, methanol, acetone, ether, chloroform, ethyl acetate, petroleum ether.',
          textTamil: 'பொதுவான கரைப்பான்கள்: நீர், எத்தனால், மெத்தனால், அசிட்டோன், ஈதர், குளோரோஃபார்ம், எத்தில் அசிட்டேட், பெட்ரோலியம் ஈதர்.'
        }
      ]
    },
    {
      type: 'text',
      title: '2. Sublimation (பதங்கமாதல்)',
      titleTamil: '2. பதங்கமாதல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used to separate volatile solid compounds from non-volatile impurities. Some solid substances, when heated, change directly from solid to vapour state without passing through the liquid state, and on cooling, the vapours again solidify.',
          textTamil: 'இந்த முறை ஆவியாகும் திட சேர்மங்களை ஆவியாகாத அசுத்தங்களிலிருந்து பிரித்தெடுக்கப் பயன்படுகிறது. சில திடப் பொருட்கள், சூடாக்கும்போது, திரவ நிலைக்குச் செல்லாமல் நேரடியாக திடத்திலிருந்து ஆவி நிலைக்கு மாறுகின்றன, மேலும் குளிர்விக்கும்போது, ஆவிகள் மீண்டும் திடமாகின்றன.'
        },
        {
          type: 'subheading',
          text: 'Principle (கோட்பாடு)',
          textTamil: 'கோட்பாடு'
        },
        {
          type: 'paragraph',
          text: 'The impure solid is heated in a suitable apparatus, causing the volatile pure compound to sublime and deposit as a pure solid on a cooled surface. The non-volatile impurities remain behind.',
          textTamil: 'மாசுபட்ட திடப்பொருள் பொருத்தமான கருவியில் சூடுபடுத்தப்படுகிறது, இதனால் ஆவியாகும் தூய சேர்மம் பதங்கமாகி, குளிர்விக்கப்பட்ட மேற்பரப்பில் தூய திடப்பொருளாக படியும். ஆவியாகாத அசுத்தங்கள் பின்னால் எஞ்சியிருக்கும்.'
        },
        {
          type: 'paragraph',
          text: 'Examples: Naphthalene, benzoic acid, camphor, anthracene, iodine, solid carbon dioxide.',
          textTamil: 'எடுத்துக்காட்டுகள்: நாப்தலீன், பென்சாயிக் அமிலம், கற்பூரம், ஆந்த்ரசீன், அயோடின், திட கார்பன் டை ஆக்சைடு.'
        }
      ]
    },
    {
      type: 'text',
      title: '3. Distillation (காய்ச்சிவடித்தல்)',
      titleTamil: '3. காய்ச்சிவடித்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'Distillation is a method used for separating:',
          textTamil: 'காய்ச்சிவடித்தல் என்பது பிரித்தெடுக்கப் பயன்படும் ஒரு முறை:'
        },
        {
          type: 'list',
          items: [
            { text: 'Volatile liquids from non-volatile impurities.', textTamil: 'ஆவியாகும் திரவங்களை ஆவியாகாத அசுத்தங்களிலிருந்து.' },
            { text: 'Liquids having sufficient difference in their boiling points.', textTamil: 'தங்கள் கொதிநிலைகளில் போதுமான வேறுபாட்டைக் கொண்ட திரவங்களை.' }
          ]
        },
        {
          type: 'paragraph',
          text: 'The process involves heating a liquid to its boiling point, converting it into vapour, and then condensing the vapour back into liquid form.',
          textTamil: 'இந்த செயல்முறை ஒரு திரவத்தை அதன் கொதிநிலைக்கு சூடுபடுத்துதல், அதை ஆவியாக மாற்றுதல், பின்னர் ஆவியை மீண்டும் திரவமாக ஒடுக்குதல் ஆகியவற்றை உள்ளடக்கியது.'
        },
        {
          type: 'subheading',
          text: 'Types of Distillation (காய்ச்சிவடித்தலின் வகைகள்)',
          textTamil: 'காய்ச்சிவடித்தலின் வகைகள்'
        },
        {
          type: 'list',
          items: [
            { text: 'Simple Distillation (எளிய காய்ச்சிவடித்தல்)', textTamil: 'எளிய காய்ச்சிவடித்தல்' },
            { text: 'Fractional Distillation (பின்னக் காய்ச்சிவடித்தல்)', textTamil: 'பின்னக் காய்ச்சிவடித்தல்' },
            { text: 'Steam Distillation (நீராவிக் காய்ச்சிவடித்தல்)', textTamil: 'நீராவிக் காய்ச்சிவடித்தல்' },
            { text: 'Distillation under Reduced Pressure (குறைக்கப்பட்ட அழுத்தத்தின் கீழ் காய்ச்சிவடித்தல்)', textTamil: 'குறைக்கப்பட்ட அழுத்தத்தின் கீழ் காய்ச்சிவடித்தல்' }
          ]
        }
      ]
    },
    {
      type: 'text',
      title: 'Simple Distillation (எளிய காய்ச்சிவடித்தல்)',
      titleTamil: 'எளிய காய்ச்சிவடித்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used to purify liquids that boil without decomposition and contain non-volatile impurities or to separate liquids having boiling points that differ by 25 K or more.',
          textTamil: 'இந்த முறை சிதைவடையாமல் கொதிக்கும் திரவங்களை தூய்மைப்படுத்த அல்லது 25 K அல்லது அதற்கு மேற்பட்ட கொதிநிலை வேறுபாடுகளைக் கொண்ட திரவங்களை பிரித்தெடுக்கப் பயன்படுகிறது.'
        },
        {
          type: 'paragraph',
          text: 'Example: Separation of chloroform (b.p. 334 K) and aniline (b.p. 457 K).',// Changed example to a pair with large b.p. difference. ethanol (351K) and water (373K) is better for fractional. This one is good for simple. Let me reconsider. Ethanol and water have 22K difference, so fractional is usually used. Chloroform and Aniline would be good for simple distillation. Wait, simple distillation for two liquids is when the boiling point difference is *large*. Ethanol and water is fractional. I will change the example to something like saltwater solution to purify water. Or just say, "water from saltwater".
          textTamil: 'எடுத்துக்காட்டு: உப்புக் கரைசலில் இருந்து நீரை பிரித்தெடுத்தல்.'
        }
      ]
    },
    {
      type: 'text',
      title: 'Fractional Distillation (பின்னக் காய்ச்சிவடித்தல்)',
      titleTamil: 'பின்னக் காய்ச்சிவடித்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used to separate a mixture of two or more miscible liquids having boiling points close to each other (difference less than 25 K). The process is carried out using a fractionating column fitted between the distillation flask and the condenser.',
          textTamil: 'இந்த முறை ஒன்றுக்கொன்று நெருங்கிய கொதிநிலைகளைக் கொண்ட (25 K க்கும் குறைவான வேறுபாடு) இரண்டு அல்லது அதற்கு மேற்பட்ட கலக்கும் திரவங்களின் கலவையைப் பிரித்தெடுக்கப் பயன்படுகிறது. இந்த செயல்முறை காய்ச்சிவடித்தல் குடுவைக்கும் ஒடுக்கிக்கும் இடையில் பொருத்தப்பட்ட ஒரு பின்னக்காய்ச்சிவடித்தல் பத்தியைப் பயன்படுத்தி செய்யப்படுகிறது.'
        },
        {
          type: 'paragraph',
          text: 'Example: Separation of ethanol (b.p. 351 K) and water (b.p. 373 K).',
          textTamil: 'எடுத்துக்காட்டு: எத்தனால் (கொதிநிலை 351 K) மற்றும் நீர் (கொதிநிலை 373 K) பிரித்தெடுத்தல்.'
        }
      ]
    },
    {
      type: 'diagram',
      title: 'Fractional Distillation Apparatus',
      titleTamil: 'பின்னக் காய்ச்சிவடித்தல் கருவி',
      imageUrl: 'https://lingualeap.com/images/fractional_distillation.png', // Placeholder URL
      altText: 'Diagram showing fractional distillation apparatus with a fractionating column, flask, condenser, and receiver.',
      altTextTamil: 'ஒரு பின்னக்காய்ச்சிவடித்தல் பத்தி, குடுவை, ஒடுக்கி மற்றும் பெறுவிப்பான் கொண்ட பின்னக் காய்ச்சிவடித்தல் கருவியைக் காட்டும் வரைபடம்.',
      caption: 'Interactive diagram: Observe how the mixture separates into different fractions based on boiling points as vapors rise and condense along the column.',
      captionTamil: 'ஊடாடும் வரைபடம்: ஆவிகள் பத்தி வழியாக உயர்ந்து ஒடுங்கும்போது, கொதிநிலைகளின் அடிப்படையில் கலவை எவ்வாறு வெவ்வேறு பின்னங்களாகப் பிரிக்கப்படுகிறது என்பதைக் கவனிக்கவும்.'
    },
    {
      type: 'text',
      title: 'Steam Distillation (நீராவிக் காய்ச்சிவடித்தல்)',
      titleTamil: 'நீராவிக் காய்ச்சிவடித்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used for purifying compounds which are steam volatile and immiscible with water. The compound should also have a high boiling point and should decompose at or below its boiling point. Such compounds are purified by distillation in steam at a temperature lower than their boiling points.',
          textTamil: 'இந்த முறை நீராவியில் ஆவியாகக்கூடிய மற்றும் நீரில் கலக்காத சேர்மங்களை தூய்மைப்படுத்தப் பயன்படுகிறது. சேர்மம் அதிக கொதிநிலையைக் கொண்டிருக்க வேண்டும் மற்றும் அதன் கொதிநிலையில் அல்லது அதற்கு கீழ் சிதைவடைய வேண்டும். அத்தகைய சேர்மங்கள் அவற்றின் கொதிநிலையை விட குறைந்த வெப்பநிலையில் நீராவியில் காய்ச்சிவடித்தல் மூலம் தூய்மைப்படுத்தப்படுகின்றன.'
        },
        {
          type: 'paragraph',
          text: 'Example: Aniline, nitrobenzene, essential oils (e.g., eucalyptus oil, clove oil).',
          textTamil: 'எடுத்துக்காட்டு: அனிலின், நைட்ரோபென்சீன், அத்தியாவசிய எண்ணெய்கள் (எ.கா., யூகலிப்டஸ் எண்ணெய், கிராம்பு எண்ணெய்).' 
        }
      ]
    },
    {
      type: 'text',
      title: 'Distillation under Reduced Pressure (குறைக்கப்பட்ட அழுத்தத்தின் கீழ் காய்ச்சிவடித்தல்)',
      titleTamil: 'குறைக்கப்பட்ட அழுத்தத்தின் கீழ் காய்ச்சிவடித்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used to purify liquids that have very high boiling points and/or decompose at or below their normal boiling points. By reducing the external pressure, the liquid boils at a lower temperature, preventing its decomposition.',
          textTamil: 'இந்த முறை மிக அதிக கொதிநிலைகளைக் கொண்ட மற்றும்/அல்லது அவற்றின் இயல்பான கொதிநிலைகளில் அல்லது அதற்கு கீழ் சிதைவடையும் திரவங்களை தூய்மைப்படுத்தப் பயன்படுகிறது. வெளிப்புற அழுத்தத்தைக் குறைப்பதன் மூலம், திரவம் குறைந்த வெப்பநிலையில் கொதிக்கும், அதன் சிதைவைத் தடுக்கும்.'
        },
        {
          type: 'paragraph',
          text: 'Example: Glycerol can be distilled at 453 K under 12 mm of Hg, whereas its normal boiling point is 563 K (at which it decomposes). Sugar factory waste (molasses) is also purified by this method.',
          textTamil: 'எடுத்துக்காட்டு: கிளிசரால் 12 மி.மீ. பாதரச அழுத்தத்தின் கீழ் 453 K இல் காய்ச்சிவடித்தல் செய்யப்படலாம், அதேசமயம் அதன் இயல்பான கொதிநிலை 563 K ஆகும் (அதில் அது சிதைவடைகிறது). சர்க்கரை ஆலை கழிவு (கரும்புச்சாறு) இந்த முறையால் தூய்மைப்படுத்தப்படுகிறது.'
        }
      ]
    },
    {
      type: 'text',
      title: '4. Differential Extraction (பகுபிரித்தெடுத்தல்)',
      titleTamil: '4. பகுபிரித்தெடுத்தல்',
      content: [
        {
          type: 'paragraph',
          text: 'This method is used to separate an organic compound present in an aqueous solution by shaking it with an organic solvent in which the organic compound is more soluble than in water. The organic solvent should be immiscible with water.',
          textTamil: 'இந்த முறை ஒரு கரிமச் சேர்மத்தை நீரில் உள்ள ஒரு கரைசலில் இருந்து, அந்த கரிமச் சேர்மம் நீரில் இருப்பதை விட அதிகமாக கரையக்கூடிய ஒரு கரிமக் கரைப்பான் கொண்டு அசைப்பதன் மூலம் பிரித்தெடுக்கப் பயன்படுகிறது. கரிமக் கரைப்பான் நீருடன் கலக்காததாக இருக்க வேண்டும்.'
        },
        {
          type: 'paragraph',
          text: 'When the two immiscible liquids (aqueous layer and organic solvent layer) are shaken, the organic compound preferentially dissolves in the organic solvent. The organic solvent layer is then separated, and the solvent is removed by distillation to obtain the pure compound.',
          textTamil: 'இரண்டு கலக்காத திரவங்கள் (நீர் அடுக்கு மற்றும் கரிமக் கரைப்பான் அடுக்கு) அசைக்கப்படும்போது, கரிமச் சேர்மம் கரிமக் கரைப்பானில் முன்னுரிமையுடன் கரையும். பின்னர் கரிமக் கரைப்பான் அடுக்கு பிரிக்கப்பட்டு, தூய சேர்மத்தைப் பெற காய்ச்சிவடித்தல் மூலம் கரைப்பான் அகற்றப்படுகிறது.'
        },
        {
          type: 'paragraph',
          text: 'This technique is also used to remove organic compounds from plant or animal tissues.',
          textTamil: 'இந்த நுட்பம் தாவர அல்லது விலங்கு திசுக்களிலிருந்து கரிமச் சேர்மங்களை அகற்றவும் பயன்படுகிறது.'
        }
      ]
    },
    {
      type: 'text',
      title: '5. Chromatography (நிறப்பகுப்பாய்வு)',
      titleTamil: '5. நிறப்பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'Chromatography is a highly versatile technique used for the separation, purification, and testing of purity of organic compounds. It is based on the principle of differential adsorption or partition of the components of a mixture between two phases: a stationary phase and a mobile phase.',
          textTamil: 'நிறப்பகுப்பாய்வு என்பது கரிமச் சேர்மங்களின் பிரித்தெடுத்தல், தூய்மைப்படுத்துதல் மற்றும் தூய்மையை சோதித்தல் ஆகியவற்றிற்குப் பயன்படும் மிகவும் பல்துறை வாய்ந்த ஒரு நுட்பமாகும். இது ஒரு கலவையின் கூறுகள் இரண்டு நிலைகளுக்கு இடையில் (ஒரு நிலைத்த நிலை மற்றும் ஒரு நகரும் நிலை) வேறுபட்ட உறிஞ்சுதல் அல்லது பகிர்வின் கொள்கையின் அடிப்படையில் அமைந்துள்ளது.'
        },
        {
          type: 'subheading',
          text: 'Classification (வகைப்பாடு)',
          textTamil: 'வகைப்பாடு'
        },
        {
          type: 'paragraph',
          text: 'Chromatography can be broadly classified into two main types based on the principle involved:',
          textTamil: 'நிறப்பகுப்பாய்வு சம்பந்தப்பட்ட கொள்கையின் அடிப்படையில் இரண்டு முக்கிய வகைகளாக பரவலாக வகைப்படுத்தலாம்:'
        },
        {
          type: 'list',
          items: [
            { text: 'Adsorption Chromatography (உறிஞ்சுதல் நிறப்பகுப்பாய்வு)', textTamil: 'உறிஞ்சுதல் நிறப்பகுப்பாய்வு' },
            { text: 'Partition Chromatography (பகிர்வு நிறப்பகுப்பாய்வு)', textTamil: 'பகிர்வு நிறப்பகுப்பாய்வு' }
          ]
        }
      ]
    },
    {
      type: 'text',
      title: 'Adsorption Chromatography (உறிஞ்சுதல் நிறப்பகுப்பாய்வு)',
      titleTamil: 'உறிஞ்சுதல் நிறப்பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'This type of chromatography is based on the principle of differential adsorption of different components of a mixture on an adsorbent. The stationary phase is a solid adsorbent (e.g., silica gel, alumina) and the mobile phase is a liquid or gas.',
          textTamil: 'இந்த வகை நிறப்பகுப்பாய்வு ஒரு கலவையின் வெவ்வேறு கூறுகள் ஒரு உறிஞ்சியில் வேறுபட்ட உறிஞ்சுதல் கொள்கையின் அடிப்படையில் அமைந்துள்ளது. நிலைத்த நிலை ஒரு திட உறிஞ்சி (எ.கா., சிலிக்கா ஜெல், அலுமினா) மற்றும் நகரும் நிலை ஒரு திரவம் அல்லது வாயு ஆகும்.'
        },
        {
          type: 'subheading',
          text: 'Types of Adsorption Chromatography (உறிஞ்சுதல் நிறப்பகுப்பாய்வின் வகைகள்)',
          textTamil: 'உறிஞ்சுதல் நிறப்பகுப்பாய்வின் வகைகள்'
        },
        {
          type: 'list',
          items: [
            { text: 'Column Chromatography (பத்தி நிறப்பகுப்பாய்வு)', textTamil: 'பத்தி நிறப்பகுப்பாய்வு' },
            { text: 'Thin Layer Chromatography (TLC) (மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு)', textTamil: 'மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு' }
          ]
        }
      ]
    },\n    {
      type: 'text',
      title: 'Column Chromatography (பத்தி நிறப்பகுப்பாய்வு)',
      titleTamil: 'பத்தி நிறப்பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'In column chromatography, a column is packed with an adsorbent (stationary phase). The mixture to be separated is loaded on top of the column and a suitable mobile phase (eluent) is allowed to flow through the column. The components of the mixture are adsorbed to different extents, and move down the column at different speeds, leading to their separation. The separated components are collected in fractions.',
          textTamil: 'பத்தி நிறப்பகுப்பாய்வில், ஒரு பத்தி ஒரு உறிஞ்சி (நிலைத்த நிலை) கொண்டு நிரப்பப்படுகிறது. பிரிக்கப்பட வேண்டிய கலவை பத்தியின் உச்சியில் ஏற்றப்பட்டு, பொருத்தமான நகரும் நிலை (அகர்நீக்கி) பத்தி வழியாக பாய அனுமதிக்கப்படுகிறது. கலவையின் கூறுகள் வெவ்வேறு அளவுகளில் உறிஞ்சப்பட்டு, வெவ்வேறு வேகத்தில் பத்தி வழியாக கீழே நகர்ந்து, அவை பிரிக்கப்படுகின்றன. பிரிக்கப்பட்ட கூறுகள் பின்னங்களாக சேகரிக்கப்படுகின்றன.'
        }
      ]
    },
    {
      type: 'diagram',
      title: 'Thin Layer Chromatography (TLC)',
      titleTamil: 'மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு (TLC)',
      imageUrl: 'https://lingualeap.com/images/tlc_diagram.png', // Placeholder URL
      altText: 'Diagram illustrating Thin Layer Chromatography showing a TLC plate, solvent front, and separated spots.',
      altTextTamil: 'மெல்லிய அடுக்கு நிறப்பகுப்பாய்வை விளக்கும் வரைபடம், TLC தகடு, கரைப்பான் முன் பகுதி மற்றும் பிரிக்கப்பட்ட புள்ளிகளைக் காட்டுகிறது.',
      caption: 'Interactive diagram: Click on the spots to see how the Rf value is calculated. Rf = (distance travelled by substance) / (distance travelled by solvent front).', 
      captionTamil: 'ஊடாடும் வரைபடம்: Rf மதிப்பு எவ்வாறு கணக்கிடப்படுகிறது என்பதைக் காண புள்ளிகளைக் கிளிக் செய்யவும். Rf = (பொருள் கடந்த தூரம்) / (கரைப்பான் முன் பகுதி கடந்த தூரம்).'
    },
    {
      type: 'text',
      title: 'Thin Layer Chromatography (TLC) (மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு)',
      titleTamil: 'மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'In TLC, a thin layer of adsorbent (silica gel or alumina) is spread over a glass plate. The solution of the mixture is spotted at one end of the plate. The plate is then placed in a developing chamber containing a suitable solvent (mobile phase). The solvent rises up the plate by capillary action, carrying the components of the mixture with it. Different components move to different heights depending on their differential adsorption and the extent to which they are carried by the solvent. The relative retardation factor ($R_f$) is characteristic for each substance and is defined as: \(R_f = \frac{\text{Distance travelled by the substance}}{\text{Distance travelled by the solvent front}}\
          textTamil: 'TLC இல், ஒரு கண்ணாடித் தகட்டின் மீது ஒரு மெல்லிய உறிஞ்சி அடுக்கு (சிலிக்கா ஜெல் அல்லது அலுமினா) பரப்பப்படுகிறது. கலவையின் கரைசல் தகட்டின் ஒரு முனையில் புள்ளியிடப்படுகிறது. பின்னர் தகடு ஒரு பொருத்தமான கரைப்பான் (நகரும் நிலை) கொண்ட ஒரு வளர்ச்சி அறையில் வைக்கப்படுகிறது. கரைப்பான் நுண்புழை கவர்ச்சி மூலம் தகட்டின் மீது உயர்கிறது, கலவையின் கூறுகளை தன்னுடன் எடுத்துச் செல்கிறது. வெவ்வேறு கூறுகள் அவற்றின் வேறுபட்ட உறிஞ்சுதல் மற்றும் கரைப்பானால் எவ்வளவு தூரம் எடுத்துச் செல்லப்படுகின்றன என்பதைப் பொறுத்து வெவ்வேறு உயரங்களுக்கு நகரும். ஒவ்வொரு பொருளுக்கும் சார்பு பின்னிழுப்பு காரணி ($R_f$) தனித்துவமானது மற்றும் இவ்வாறு வரையறுக்கப்படுகிறது: \(R_f = \frac{\text{பொருள் கடந்த தூரம்}}{\text{கரைப்பான் முன் பகுதி கடந்த தூரம்}}\)'
        }
      ]
    },
    {
      type: 'text',
      title: 'Partition Chromatography (பகிர்வு நிறப்பகுப்பாய்வு)',
      titleTamil: 'பகிர்வு நிறப்பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'This type of chromatography is based on the continuous differential partitioning of components of a mixture between two immiscible liquid phases: a stationary liquid phase and a mobile liquid phase.',
          textTamil: 'இந்த வகை நிறப்பகுப்பாய்வு ஒரு கலவையின் கூறுகளின் இரண்டு கலக்காத திரவ நிலைகளுக்கு (ஒரு நிலைத்த திரவ நிலை மற்றும் ஒரு நகரும் திரவ நிலை) இடையில் தொடர்ச்சியான வேறுபட்ட பகிர்வின் அடிப்படையில் அமைந்துள்ளது.'
        },
        {
          type: 'subheading',
          text: 'Paper Chromatography (தாள் நிறப்பகுப்பாய்வு)',
          textTamil: 'தாள் நிறப்பகுப்பாய்வு'
        },
        {
          type: 'paragraph',
          text: 'In paper chromatography, a strip of filter paper acts as the stationary phase (water adsorbed on it) and a suitable solvent acts as the mobile phase. The mixture is spotted on the paper, and the solvent moves up, separating the components based on their different partition coefficients between the stationary water and the moving solvent.',
          textTamil: 'தாள் நிறப்பகுப்பாய்வில், ஒரு வடிகட்டித் தாள் ஒரு நிலைத்த நிலையாக (அதில் நீர் உறிஞ்சப்படுகிறது) செயல்படுகிறது, மேலும் ஒரு பொருத்தமான கரைப்பான் நகரும் நிலையாக செயல்படுகிறது. கலவை தாளில் புள்ளியிடப்படுகிறது, மேலும் கரைப்பான் மேலே நகர்ந்து, நிலைத்த நீர் மற்றும் நகரும் கரைப்பான் இடையே அவற்றின் வெவ்வேறு பகிர்வு குணகங்களின் அடிப்படையில் கூறுகளைப் பிரிக்கிறது.'
        }
      ]
    },
    {
      type: 'text',
      title: 'Qualitative Analysis of Organic Compounds',
      titleTamil: 'கரிமச் சேர்மங்களின் பண்பறி பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'The qualitative analysis of organic compounds involves the detection of various elements present in them, such as carbon, hydrogen, nitrogen, sulfur, halogens, and phosphorus.',
          textTamil: 'கரிமச் சேர்மங்களின் பண்பறி பகுப்பாய்வு அவற்றில் உள்ள கார்பன், ஹைட்ரஜன், நைட்ரஜன், சல்பர், ஹாலோஜன்கள் மற்றும் பாஸ்பரஸ் போன்ற பல்வேறு தனிமங்களைக் கண்டறிவதை உள்ளடக்கியது.'
        }
      ]
    },
    {
      type: 'text',
      title: '1. Detection of Carbon and Hydrogen (கார்பன் மற்றும் ஹைட்ரஜன் கண்டறிதல்)',
      titleTamil: '1. கார்பன் மற்றும் ஹைட்ரஜன் கண்டறிதல்',
      content: [
        {
          type: 'paragraph',
          text: 'Carbon and hydrogen are detected by heating the organic compound with copper(II) oxide (CuO). Carbon is oxidised to carbon dioxide, which turns lime water (calcium hydroxide solution) milky. Hydrogen is oxidised to water, which turns anhydrous copper(II) sulphate white to blue.',
          textTamil: 'கார்பன் மற்றும் ஹைட்ரஜன் கரிமச் சேர்மத்தை காப்பர்(II) ஆக்சைடு (CuO) உடன் சூடுபடுத்துவதன் மூலம் கண்டறியப்படுகிறது. கார்பன் கார்பன் டை ஆக்சைடாக ஆக்ஸிஜனேற்றப்படுகிறது, இது சுண்ணாம்பு நீரை (கால்சியம் ஹைட்ராக்சைடு கரைசல்) பால் போன்றதாக மாற்றுகிறது. ஹைட்ரஜன் நீராக ஆக்ஸிஜனேற்றப்படுகிறது, இது நீரற்ற காப்பர்(II) சல்பேட்டை வெள்ளையிலிருந்து நீல நிறமாக மாற்றுகிறது.'
        },
        {
          type: 'math',
          content: '$\ce{C + 2CuO \xrightarrow{\Delta} 2Cu + CO2}$',
          contentTamil: '$\ce{C + 2CuO \xrightarrow{\Delta} 2Cu + CO2}$'
        },
        {
          type: 'math',
          content: '$\ce{CO2 + Ca(OH)2 \rightarrow CaCO3 (milky) + H2O}$',
          contentTamil: '$\ce{CO2 + Ca(OH)2 \rightarrow CaCO3 (பால் போன்றது) + H2O}$'
        },
        {
          type: 'math',
          content: '$\ce{2H + CuO \xrightarrow{\Delta} Cu + H2O}$',
          contentTamil: '$\ce{2H + CuO \xrightarrow{\Delta} Cu + H2O}$'
        },
        {
          type: 'math',
          content: '$\ce{CuSO4 (anhydrous, white) + 5H2O \rightarrow CuSO4.5H2O (blue)}$',
          contentTamil: '$\ce{CuSO4 (நீரற்ற, வெள்ளை) + 5H2O \rightarrow CuSO4.5H2O (நீலம்)}$'
        }
      ]
    },
    {
      type: 'text',
      title: '2. Detection of Nitrogen, Sulfur, and Halogens (நைட்ரஜன், சல்பர் மற்றும் ஹாலோஜன்கள் கண்டறிதல்) - Lassaigne\'s Test',
      titleTamil: '2. நைட்ரஜன், சல்பர் மற்றும் ஹாலோஜன்கள் கண்டறிதல் - லேசைன் சோதனை',
      content: [
        {
          type: 'paragraph',
          text: 'Organic compounds containing nitrogen, sulfur, and halogens are converted into ionic compounds by fusing them with sodium metal. This converts the elements into sodium cyanide (NaCN), sodium sulfide (Na2S), and sodium halides (NaX), respectively. These are then extracted with distilled water to form a sodium fusion extract (SFE) or Lassaigne\'s extract. The covalent organic compounds become ionic and can be tested by simple chemical tests.',
          textTamil: 'நைட்ரஜன், சல்பர் மற்றும் ஹாலோஜன்களைக் கொண்ட கரிமச் சேர்மங்கள் சோடியம் உலோகம் கொண்டு உருகுவதன் மூலம் அயனிச் சேர்மங்களாக மாற்றப்படுகின்றன. இது தனிமங்களை முறையே சோடியம் சயனைடு (NaCN), சோடியம் சல்பைட் (Na2S) மற்றும் சோடியம் ஹாலைடுகளாக (NaX) மாற்றுகிறது. பின்னர் இவை காய்ச்சிவடித்த நீர் கொண்டு பிரித்தெடுக்கப்பட்டு ஒரு சோடியம் உருகுதல் சாற்றை (SFE) அல்லது லேசைன் சாற்றை உருவாக்குகின்றன. சகப்பிணைப்பு கரிமச் சேர்மங்கள் அயனிச் சேர்மங்களாக மாறி எளிய வேதியியல் சோதனைகள் மூலம் சோதிக்கப்படலாம்.'
        },
        {
          type: 'math',
          content: '$\ce{Na + C + N \xrightarrow{Fusion} NaCN}$',
          contentTamil: '$\ce{Na + C + N \xrightarrow{உருகுதல்} NaCN}$'
        },
        {
          type: 'math',
          content: '$\ce{2Na + S \xrightarrow{Fusion} Na2S}$',
          contentTamil: '$\ce{2Na + S \xrightarrow{உருகுதல்} Na2S}$'
        },
        {
          type: 'math',
          content: '$\ce{Na + X \xrightarrow{Fusion} NaX \quad (X = Cl, Br, I)}$',
          contentTamil: '$\ce{Na + X \xrightarrow{உருகுதல்} NaX \quad (X = Cl, Br, I)}$'
        },
        {
          type: 'subheading',
          text: 'Detection of Nitrogen (நைட்ரஜன் கண்டறிதல்)',
          textTamil: 'நைட்ரஜன் கண்டறிதல்'
        },
        {
          type: 'paragraph',
          text: 'The sodium fusion extract is boiled with iron(II) sulfate and then acidified with concentrated sulfuric acid. A Prussian blue or green colour indicates the presence of nitrogen.',
          textTamil: 'சோடியம் உருகுதல் சாறு இரும்பு(II) சல்பேட்டுடன் கொதிக்க வைக்கப்பட்டு, பின்னர் அடர் சல்பூரிக் அமிலம் கொண்டு அமிலப்படுத்தப்படுகிறது. ப்ருஷ்யன் நீலம் அல்லது பச்சை நிறம் நைட்ரஜன் இருப்பதை குறிக்கிறது.'
        },
        {
          type: 'math',
          content: '$\ce{6CN- + Fe^{2+} \rightarrow [Fe(CN)6]^{4-}}$',
          contentTamil: '$\ce{6CN- + Fe^{2+} \rightarrow [Fe(CN)6]^{4-}}$'
        },
        {
          type: 'math',
          content: '$\ce{3[Fe(CN)6]^{4-} + 4Fe^{3+} + xH2O \rightarrow Fe4[Fe(CN)6]3.xH2O (Prussian Blue)}$',
          contentTamil: '$\ce{3[Fe(CN)6]^{4-} + 4Fe^{3+} + xH2O \rightarrow Fe4[Fe(CN)6]3.xH2O (ப்ருஷ்யன் நீலம்)}$'
        },
        {
          type: 'subheading',
          text: 'Detection of Sulfur (சல்பர் கண்டறிதல்)',
          textTamil: 'சல்பர் கண்டறிதல்'
        },
        {
          type: 'list',
          items: [
            {
              type: 'paragraph',
              text: 'The SFE is treated with lead acetate solution. A black precipitate of lead sulfide indicates sulfur.',
              textTamil: 'SFE ஈய அசிட்டேட் கரைசலுடன் வினைப்படுத்தப்படுகிறது. ஈய சல்பைட்டின் கருப்பு வீழ்படிவு சல்பரைக் குறிக்கிறது.'
            },
            {
              type: 'math',
              content: '$\ce{Na2S + (CH3COO)2Pb \rightarrow PbS (black ppt.) + 2CH3COONa}$',
              contentTamil: '$\ce{Na2S + (CH3COO)2Pb \rightarrow PbS (கருப்பு வீழ்படிவு) + 2CH3COONa}$'
            },
            {
              type: 'paragraph',
              text: 'Alternatively, SFE is treated with sodium nitroprusside solution. A violet colour indicates sulfur.',
              textTamil: 'மாற்றாக, SFE சோடியம் நைட்ரோப்ரூசைட் கரைசலுடன் வினைப்படுத்தப்படுகிறது. ஒரு வயலட் நிறம் சல்பரைக் குறிக்கிறது.'
            },
            {
              type: 'math',
              content: '$\ce{Na2S + Na2[Fe(CN)5NO] \rightarrow Na4[Fe(CN)5NOS] (violet colour)}$',
              contentTamil: '$\ce{Na2S + Na2[Fe(CN)5NO] \rightarrow Na4[Fe(CN)5NOS] (வயலட் நிறம்)}$'
            }
          ]
        },
        {
          type: 'subheading',
          text: 'Detection of Halogens (ஹாலோஜன்கள் கண்டறிதல்)',
          textTamil: 'ஹாலோஜன்கள் கண்டறிதல்'
        },
        {
          type: 'paragraph',
          text: 'The SFE is acidified with dilute nitric acid and then treated with silver nitrate solution. A white precipitate soluble in ammonium hydroxide indicates chlorine. A yellowish precipitate sparingly soluble in ammonium hydroxide indicates bromine. A yellow precipitate insoluble in ammonium hydroxide indicates iodine.',
          textTamil: 'SFE நீர்த்த நைட்ரிக் அமிலம் கொண்டு அமிலப்படுத்தப்பட்டு, பின்னர் சில்வர் நைட்ரேட் கரைசலுடன் வினைப்படுத்தப்படுகிறது. அம்மோனியம் ஹைட்ராக்சைடில் கரையக்கூடிய ஒரு வெள்ளை வீழ்படிவு குளோரினைக் குறிக்கிறது. அம்மோனியம் ஹைட்ராக்சைடில் குறைவாக கரையக்கூடிய ஒரு மஞ்சள் கலந்த வீழ்படிவு புரோமினைக் குறிக்கிறது. அம்மோனியம் ஹைட்ராக்சைடில் கரையாத ஒரு மஞ்சள் வீழ்படிவு அயோடினைக் குறிக்கிறது.'
        },
        {
          type: 'math',
          content: '$\ce{NaX + AgNO3 \rightarrow AgX (ppt.) + NaNO3}$',
          contentTamil: '$\ce{NaX + AgNO3 \rightarrow AgX (வீழ்படிவு) + NaNO3}$'
        },
        {
          type: 'list',
          items: [
            { text: '$\ce{AgCl}$ (white ppt.) - soluble in $\ce{NH4OH}$', textTamil: '$\ce{AgCl}$ (வெள்ளை வீழ்படிவு) - $\ce{NH4OH}$ இல் கரையக்கூடியது' },
            { text: '$\ce{AgBr}$ (pale yellow ppt.) - sparingly soluble in $\ce{NH4OH}$', textTamil: '$\ce{AgBr}$ (மங்கலான மஞ்சள் வீழ்படிவு) - $\ce{NH4OH}$ இல் குறைவாக கரையக்கூடியது' },
            { text: '$\ce{AgI}$ (yellow ppt.) - insoluble in $\ce{NH4OH}$', textTamil: '$\ce{AgI}$ (மஞ்சள் வீழ்படிவு) - $\ce{NH4OH}$ இல் கரையாதது' }
          ]
        }
      ]
    },
    {
      type: 'text',
      title: '3. Detection of Phosphorus (பாஸ்பரஸ் கண்டறிதல்)',
      titleTamil: '3. பாஸ்பரஸ் கண்டறிதல்',
      content: [
        {
          type: 'paragraph',
          text: 'The organic compound is heated with an oxidising agent (e.g., sodium peroxide) to oxidise phosphorus to phosphate. The solution is then acidified with nitric acid and treated with ammonium molybdate. A yellow colouration or precipitate indicates the presence of phosphorus.',
          textTamil: 'கரிமச் சேர்மம் ஒரு ஆக்ஸிஜனேற்ற காரணியுடன் (எ.கா., சோடியம் பெராக்சைடு) சூடுபடுத்தப்பட்டு பாஸ்பரஸ் பாஸ்பேட்டாக ஆக்ஸிஜனேற்றப்படுகிறது. பின்னர் கரைசல் நைட்ரிக் அமிலம் கொண்டு அமிலப்படுத்தப்பட்டு, அம்மோனியம் மொலிப்டேட் கொண்டு வினைப்படுத்தப்படுகிறது. ஒரு மஞ்சள் நிறம் அல்லது வீழ்படிவு பாஸ்பரஸ் இருப்பதை குறிக்கிறது.'
        },
        {
          type: 'math',
          content: '$\ce{P + Na2O2 \xrightarrow{Heat} Phosphate}$',
          contentTamil: '$\ce{P + Na2O2 \xrightarrow{வெப்பம்} பாஸ்பேட்}$'
        },
        {
          type: 'math',
          content: '$\ce{PO4^{3-} + 12(NH4)2MoO4 + 21HNO3 \rightarrow (NH4)3[PMo12O40] (yellow ppt.) + 21NH4NO3 + 12H2O}$',
          contentTamil: '$\ce{PO4^{3-} + 12(NH4)2MoO4 + 21HNO3 \rightarrow (NH4)3[PMo12O40] (மஞ்சள் வீழ்படிவு) + 21NH4NO3 + 12H2O}$'
        }
      ]
    },
    {
      type: 'virtual-lab',
      title: 'Virtual Lab: Performing Lassaigne\'s Test',
      titleTamil: 'மெய்நிகர் ஆய்வகம்: லேசைன் சோதனையை நிகழ்த்துதல்',
      description: 'Explore an interactive virtual lab to perform Lassaigne\'s test for the detection of Nitrogen, Sulfur, and Halogens in organic compounds. Learn about the safety precautions, fusion process, and specific tests for each element. Observe color changes and precipitate formations in a simulated environment.',
      descriptionTamil: 'கரிமச் சேர்மங்களில் நைட்ரஜன், சல்பர் மற்றும் ஹாலோஜன்களைக் கண்டறிவதற்கான லேசைன் சோதனையை செய்ய ஒரு ஊடாடும் மெய்நிகர் ஆய்வகத்தை ஆராயுங்கள். பாதுகாப்பு முன்னெச்சரிக்கைகள், உருகுதல் செயல்முறை மற்றும் ஒவ்வொரு தனிமத்திற்கான குறிப்பிட்ட சோதனைகள் பற்றி அறியவும். ஒரு உருவகப்படுத்தப்பட்ட சூழலில் நிற மாற்றங்கள் மற்றும் வீழ்படிவு உருவாக்கங்களைக் கவனிக்கவும்.',
      labUrl: 'https://virtual-labs.example.com/lassaignes-test' // Placeholder for an actual virtual lab URL
    },
    {
      type: 'text',
      title: 'Quantitative Analysis of Organic Compounds',
      titleTamil: 'கரிமச் சேர்மங்களின் அளவறி பகுப்பாய்வு',
      content: [
        {
          type: 'paragraph',
          text: 'Quantitative analysis involves determining the percentage composition of various elements present in an organic compound. This is crucial for determining the empirical and molecular formulas.',
          textTamil: 'அளவறி பகுப்பாய்வு ஒரு கரிமச் சேர்மத்தில் உள்ள பல்வேறு தனிமங்களின் சதவீத கலவையை தீர்மானிப்பதை உள்ளடக்கியது. இது அனுபவ சூத்திரம் மற்றும் மூலக்கூறு சூத்திரத்தை தீர்மானிக்க முக்கியமானது.'
        }
      ]
    },
    {
      type: 'text',
      title: '1. Estimation of Carbon and Hydrogen (கார்பன் மற்றும் ஹைட்ரஜன் மதிப்பீடு) - Liebig\'s Method',
      titleTamil: '1. கார்பன் மற்றும் ஹைட்ரஜன் மதிப்பீடு - லீபிக் முறை',
      content: [
        {
          type: 'paragraph',
          text: 'In Liebig\'s method, a known mass of the organic compound is heated in a current of dry oxygen with copper(II) oxide. Carbon is oxidised to carbon dioxide, and hydrogen is oxidised to water. The masses of $\ce{CO2}$ and $\ce{H2O}$ produced are determined by absorbing them in pre-weighed U-tubes containing anhydrous calcium chloride (for $\ce{H2O}$) and KOH solution (for $\ce{CO2}$).',
          textTamil: 'லீபிக் முறையில், ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் உலர் ஆக்ஸிஜன் ஓட்டத்தில் காப்பர்(II) ஆக்சைடுடன் சூடுபடுத்தப்படுகிறது. கார்பன் கார்பன் டை ஆக்சைடாக ஆக்ஸிஜனேற்றப்படுகிறது, மற்றும் ஹைட்ரஜன் நீராக ஆக்ஸிஜனேற்றப்படுகிறது. உற்பத்தி செய்யப்படும் $\ce{CO2}$ மற்றும் $\ce{H2O}$ இன் நிறைகள் முன்-எடையிடப்பட்ட U-குழாய்களில் நீரற்ற கால்சியம் குளோரைடு ($\ce{H2O}$ க்காக) மற்றும் KOH கரைசல் ($\ce{CO2}$ க்காக) கொண்டு உறிஞ்சுவதன் மூலம் தீர்மானிக்கப்படுகிறது.'
        },
        {
          type: 'subheading',
          text: 'Calculations (கணக்கீடுகள்)',
          textTamil: 'கணக்கீடுகள்'
        },
        {
          type: 'paragraph',
          text: 'If $w$ is the mass of the organic compound, $w_1$ is the mass of water, and $w_2$ is the mass of carbon dioxide produced, then:',
          textTamil: 'கரிமச் சேர்மத்தின் நிறை $w$ ஆகவும், உற்பத்தி செய்யப்பட்ட நீரின் நிறை $w_1$ ஆகவும், கார்பன் டை ஆக்சைட்டின் நிறை $w_2$ ஆகவும் இருந்தால்,:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Carbon} = \frac{12}{44} \times \frac{w_2}{w} \times 100$',
          contentTamil: '$\text{கார்பனின் சதவீதம்} = \frac{12}{44} \times \frac{w_2}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Hydrogen} = \frac{2}{18} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{ஹைட்ரஜனின் சதவீதம்} = \frac{2}{18} \times \frac{w_1}{w} \times 100$'
        }
      ]
    },
    {
      type: 'text',
      title: '2. Estimation of Nitrogen (நைட்ரஜன் மதிப்பீடு)',
      titleTamil: '2. நைட்ரஜன் மதிப்பீடு',
      content: [
        {
          type: 'subheading',
          text: 'Dumas Method (டுமாஸ் முறை)',
          textTamil: 'டுமாஸ் முறை'
        },
        {
          type: 'paragraph',
          text: 'A known mass of the organic compound is heated with copper(II) oxide in an atmosphere of carbon dioxide. The nitrogen in the compound is converted to free nitrogen gas. The mixture of gases ($\ce{N2}$ and excess $\ce{CO2}$) is collected over an aqueous solution of KOH. $\ce{CO2}$ is absorbed by KOH, and the volume of $\ce{N2}$ gas is measured.',
          textTamil: 'ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் கார்பன் டை ஆக்சைடு வளிமண்டலத்தில் காப்பர்(II) ஆக்சைடுடன் சூடுபடுத்தப்படுகிறது. சேர்மத்தில் உள்ள நைட்ரஜன் தனி நைட்ரஜன் வாயுவாக மாற்றப்படுகிறது. வாயுக்களின் கலவை ($\ce{N2}$ மற்றும் அதிகப்படியான $\ce{CO2}$) KOH இன் நீர்மக் கரைசலின் மீது சேகரிக்கப்படுகிறது. $\ce{CO2}$ KOH ஆல் உறிஞ்சப்படுகிறது, மற்றும் $\ce{N2}$ வாயுவின் கனஅளவு அளவிடப்படுகிறது.'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Nitrogen} = \frac{28}{22400} \times \frac{V_{N2}}{w} \times 100 \quad \text{(at STP)}$',
          contentTamil: '$\text{நைட்ரஜனின் சதவீதம்} = \frac{28}{22400} \times \frac{V_{N2}}{w} \times 100 \quad \text{(STP இல்)}$'
        },
        {
          type: 'paragraph',
          text: 'Where $V_{N2}$ is the volume of $\ce{N2}$ at STP, $w$ is the mass of the organic compound.',
          textTamil: 'இங்கு $V_{N2}$ என்பது STP இல் $\ce{N2}$ இன் கனஅளவு, $w$ என்பது கரிமச் சேர்மத்தின் நிறை.'
        },
        {
          type: 'subheading',
          text: 'Kjeldahl\'s Method (கெல்டால் முறை)',
          textTamil: 'கெல்டால் முறை'
        },
        {
          type: 'paragraph',
          text: 'This method is used for estimating nitrogen in organic compounds, except those containing nitrogen in nitro and azo groups, and nitrogen present in the ring (e.g., pyridine). A known mass of the organic compound is heated with concentrated $\ce{H2SO4}$ in the presence of $\ce{K2SO4}$ (to raise boiling point) and $\ce{CuSO4}$ (catalyst). Nitrogen is converted to ammonium sulfate. The ammonium sulfate is then heated with excess NaOH solution, liberating ammonia gas. The liberated ammonia is absorbed in a known volume of standard acid and the unreacted acid is back-titrated with standard alkali.',
          textTamil: 'நைட்ரோ மற்றும் அசோ குழுக்களில் உள்ள நைட்ரஜன் மற்றும் வளையத்தில் உள்ள நைட்ரஜன் (எ.கா., பைரிடின்) கொண்ட சேர்மங்கள் தவிர, கரிமச் சேர்மங்களில் உள்ள நைட்ரஜனை மதிப்பிடுவதற்கு இந்த முறை பயன்படுத்தப்படுகிறது. ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் அடர் $\ce{H2SO4}$ உடன் $\ce{K2SO4}$ (கொதிநிலையை அதிகரிக்க) மற்றும் $\ce{CuSO4}$ (வினையூக்கி) முன்னிலையில் சூடுபடுத்தப்படுகிறது. நைட்ரஜன் அம்மோனியம் சல்பேட்டாக மாற்றப்படுகிறது. பின்னர் அம்மோனியம் சல்பேட் அதிகப்படியான NaOH கரைசலுடன் சூடுபடுத்தப்பட்டு, அம்மோனியா வாயுவை விடுவிக்கிறது. விடுவிக்கப்பட்ட அம்மோனியா ஒரு குறிப்பிட்ட கனஅளவு நிலையான அமிலத்தில் உறிஞ்சப்பட்டு, வினைபுரியாத அமிலம் நிலையான காரம் கொண்டு மீண்டும் டைட்ரேட் செய்யப்படுகிறது.'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Nitrogen} = \frac{1.4 \times N \times V}{w}$',
          contentTamil: '$\text{நைட்ரஜனின் சதவீதம்} = \frac{1.4 \times N \times V}{w}$'
        },
        {
          type: 'paragraph',
          text: 'Where $N$ is the normality of the acid, $V$ is the volume of acid consumed by ammonia, and $w$ is the mass of the organic compound.',
          textTamil: 'இங்கு $N$ என்பது அமிலத்தின் இயல்புநிலை, $V$ என்பது அம்மோனியாவால் உட்கொள்ளப்பட்ட அமிலத்தின் கனஅளவு, மற்றும் $w$ என்பது கரிமச் சேர்மத்தின் நிறை.'
        }
      ]
    },
    {
      type: 'text',
      title: '3. Estimation of Halogens (ஹாலோஜன்கள் மதிப்பீடு) - Carius Method',
      titleTamil: '3. ஹாலோஜன்கள் மதிப்பீடு - கேரியஸ் முறை',
      content: [
        {
          type: 'paragraph',
          text: 'In Carius method, a known mass of the organic compound is heated with fuming nitric acid in the presence of silver nitrate in a sealed glass tube (Carius tube). Carbon and hydrogen are oxidised to $\ce{CO2}$ and $\ce{H2O}$. Halogen is converted to silver halide (AgX). The AgX is filtered, washed, dried, and weighed.',
          textTamil: 'கேரியஸ் முறையில், ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் ஒரு சீல் செய்யப்பட்ட கண்ணாடி குழாயில் (கேரியஸ் குழாய்) சில்வர் நைட்ரேட் முன்னிலையில் புகையும் நைட்ரிக் அமிலம் கொண்டு சூடுபடுத்தப்படுகிறது. கார்பன் மற்றும் ஹைட்ரஜன் $\ce{CO2}$ மற்றும் $\ce{H2O}$ ஆக ஆக்ஸிஜனேற்றப்படுகின்றன. ஹாலோஜன் சில்வர் ஹாலைடாக (AgX) மாற்றப்படுகிறது. AgX வடிகட்டப்பட்டு, கழுவப்பட்டு, உலர்த்தப்பட்டு, எடையிடப்படுகிறது.'
        },
        {
          type: 'subheading',
          text: 'Calculations (கணக்கீடுகள்)',
          textTamil: 'கணக்கீடுகள்'
        },
        {
          type: 'paragraph',
          text: 'If $w$ is the mass of the organic compound, $w_1$ is the mass of AgX produced, and $M_{AgX}$ is the molar mass of AgX, then:',
          textTamil: 'கரிமச் சேர்மத்தின் நிறை $w$ ஆகவும், உற்பத்தி செய்யப்பட்ட AgX இன் நிறை $w_1$ ஆகவும், AgX இன் மோலார் நிறை $M_{AgX}$ ஆகவும் இருந்தால்,:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Halogen} = \frac{\text{Atomic mass of halogen}}{M_{AgX}} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{ஹாலோஜனின் சதவீதம்} = \frac{\text{ஹாலோஜனின் அணு நிறை}}{M_{AgX}} \times \frac{w_1}{w} \times 100$'
        }
      ]
    },
    {
      type: 'text',
      title: '4. Estimation of Sulfur (சல்பர் மதிப்பீடு) - Carius Method',
      titleTamil: '4. சல்பர் மதிப்பீடு - கேரியஸ் முறை',
      content: [
        {
          type: 'paragraph',
          text: 'A known mass of the organic compound is heated in a Carius tube with fuming nitric acid. Sulfur is oxidised to sulfuric acid. The sulfuric acid is then precipitated as barium sulfate ($\ce{BaSO4}$) by adding barium chloride solution. The $\ce{BaSO4}$ precipitate is filtered, washed, dried, and weighed.',
          textTamil: 'ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் ஒரு கேரியஸ் குழாயில் புகையும் நைட்ரிக் அமிலம் கொண்டு சூடுபடுத்தப்படுகிறது. சல்பர் சல்பூரிக் அமிலமாக ஆக்ஸிஜனேற்றப்படுகிறது. பின்னர் சல்பூரிக் அமிலம் பேரியம் குளோரைடு கரைசலைச் சேர்ப்பதன் மூலம் பேரியம் சல்பேட்டாக ($\ce{BaSO4}$) வீழ்படிவாக்கப்படுகிறது. $\ce{BaSO4}$ வீழ்படிவு வடிகட்டப்பட்டு, கழுவப்பட்டு, உலர்த்தப்பட்டு, எடையிடப்படுகிறது.'
        },
        {
          type: 'subheading',
          text: 'Calculations (கணக்கீடுகள்)',
          textTamil: 'கணக்கீடுகள்'
        },
        {
          type: 'paragraph',
          text: 'If $w$ is the mass of the organic compound, and $w_1$ is the mass of $\ce{BaSO4}$ produced, then:',
          textTamil: 'கரிமச் சேர்மத்தின் நிறை $w$ ஆகவும், உற்பத்தி செய்யப்பட்ட $\ce{BaSO4}$ இன் நிறை $w_1$ ஆகவும் இருந்தால்,:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Sulfur} = \frac{32}{233} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{சல்பரின் சதவீதம்} = \frac{32}{233} \times \frac{w_1}{w} \times 100$'
        }
      ]
    },
    {
      type: 'text',
      title: '5. Estimation of Phosphorus (பாஸ்பரஸ் மதிப்பீடு) - Carius Method',
      titleTamil: '5. பாஸ்பரஸ் மதிப்பீடு - கேரியஸ் முறை',
      content: [
        {
          type: 'paragraph',
          text: 'A known mass of the organic compound is heated with fuming nitric acid in a Carius tube. Phosphorus is oxidised to phosphoric acid. The phosphoric acid is then precipitated as ammonium phosphomolybdate or magnesium ammonium phosphate. The magnesium ammonium phosphate is ignited to magnesium pyrophosphate ($\ce{Mg2P2O7}$), which is then weighed.',
          textTamil: 'ஒரு குறிப்பிட்ட நிறை கரிமச் சேர்மம் ஒரு கேரியஸ் குழாயில் புகையும் நைட்ரிக் அமிலம் கொண்டு சூடுபடுத்தப்படுகிறது. பாஸ்பரஸ் பாஸ்போரிக் அமிலமாக ஆக்ஸிஜனேற்றப்படுகிறது. பின்னர் பாஸ்போரிக் அமிலம் அம்மோனியம் பாஸ்போமோலிப்டேட்டாக அல்லது மெக்னீசியம் அம்மோனியம் பாஸ்பேட்டாக வீழ்படிவாக்கப்படுகிறது. மெக்னீசியம் அம்மோனியம் பாஸ்பேட் மெக்னீசியம் பைரோபாஸ்பேட்டாக ($\ce{Mg2P2O7}$) எரிக்கப்பட்டு, பின்னர் எடையிடப்படுகிறது.'
        },
        {
          type: 'subheading',
          text: 'Calculations (கணக்கீடுகள்)',
          textTamil: 'கணக்கீடுகள்'
        },
        {
          type: 'paragraph',
          text: 'If $w$ is the mass of the organic compound, and $w_1$ is the mass of $\ce{Mg2P2O7}$ produced, then:',
          textTamil: 'கரிமச் சேர்மத்தின் நிறை $w$ ஆகவும், உற்பத்தி செய்யப்பட்ட $\ce{Mg2P2O7}$ இன் நிறை $w_1$ ஆகவும் இருந்தால்,:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Phosphorus} = \frac{2 \times 31}{222} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{பாஸ்பரஸின் சதவீதம்} = \frac{2 \times 31}{222} \times \frac{w_1}{w} \times 100$'
        }
      ]
    },
    {
      type: 'text',
      title: '6. Estimation of Oxygen (ஆக்ஸிஜன் மதிப்பீடு)',
      titleTamil: '6. ஆக்ஸிஜன் மதிப்பீடு',
      content: [
        {
          type: 'paragraph',
          text: 'The percentage of oxygen in an organic compound is usually determined by the difference method, i.e., by subtracting the sum of percentages of all other elements from 100.',
          textTamil: 'ஒரு கரிமச் சேர்மத்தில் உள்ள ஆக்ஸிஜனின் சதவீதம் பொதுவாக வேறுபாடு முறை மூலம் தீர்மானிக்கப்படுகிறது, அதாவது மற்ற அனைத்து தனிமங்களின் சதவீதங்களின் கூடுதலை 100 இலிருந்து கழிப்பதன் மூலம்.'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Oxygen} = 100 - (\% C + \% H + \% N + \% S + \% Halogens)$',
          contentTamil: '$\text{ஆக்ஸிஜனின் சதவீதம்} = 100 - (\% C + \% H + \% N + \% S + \% ஹாலோஜன்கள்)$'
        }
      ]
    }
  ],
  workedExamples: [
    {
      id: 'we-1',
      title: 'Worked Example 1: Carbon and Hydrogen Estimation',
      titleTamil: 'தீர்வு காணப்பட்ட எடுத்துக்காட்டு 1: கார்பன் மற்றும் ஹைட்ரஜன் மதிப்பீடு',
      description: 'In an estimation of carbon and hydrogen, 0.246 g of an organic compound gave 0.198 g of water and 0.505 g of carbon dioxide. Calculate the percentage of carbon and hydrogen in the compound.',
      descriptionTamil: 'கார்பன் மற்றும் ஹைட்ரஜன் மதிப்பீட்டில், 0.246 கிராம் ஒரு கரிமச் சேர்மம் 0.198 கிராம் நீரையும் 0.505 கிராம் கார்பன் டை ஆக்சைடையும் கொடுத்தது. சேர்மத்தில் கார்பன் மற்றும் ஹைட்ரஜனின் சதவீதத்தைக் கணக்கிடுக.',
      steps: [
        {
          type: 'paragraph',
          text: 'Given: Mass of organic compound ($w$) = 0.246 g, Mass of water ($w_1$) = 0.198 g, Mass of carbon dioxide ($w_2$) = 0.505 g.',
          textTamil: 'கொடுக்கப்பட்டவை: கரிமச் சேர்மத்தின் நிறை ($w$) = 0.246 கிராம், நீரின் நிறை ($w_1$) = 0.198 கிராம், கார்பன் டை ஆக்சைட்டின் நிறை ($w_2$) = 0.505 கிராம்.'
        },
        {
          type: 'subheading',
          text: 'Percentage of Carbon:',
          textTamil: 'கார்பனின் சதவீதம்:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of C} = \frac{12}{44} \times \frac{w_2}{w} \times 100$',
          contentTamil: '$\text{C இன் சதவீதம்} = \frac{12}{44} \times \frac{w_2}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$= \frac{12}{44} \times \frac{0.505}{0.246} \times 100 = 56.03 \%$',
          contentTamil: '$= \frac{12}{44} \times \frac{0.505}{0.246} \times 100 = 56.03 \%$'
        },
        {
          type: 'subheading',
          text: 'Percentage of Hydrogen:',
          textTamil: 'ஹைட்ரஜனின் சதவீதம்:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of H} = \frac{2}{18} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{H இன் சதவீதம்} = \frac{2}{18} \times \frac{w_1}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$= \frac{2}{18} \times \frac{0.198}{0.246} \times 100 = 8.94 \%$',
          contentTamil: '$= \frac{2}{18} \times \frac{0.198}{0.246} \times 100 = 8.94 \%$'
        }
      ],
      answer: 'Percentage of Carbon = 56.03%, Percentage of Hydrogen = 8.94%',
      answerTamil: 'கார்பனின் சதவீதம் = 56.03%, ஹைட்ரஜனின் சதவீதம் = 8.94%'
    },
    {
      id: 'we-2',
      title: 'Worked Example 2: Nitrogen Estimation (Dumas Method)',
      titleTamil: 'தீர்வு காணப்பட்ட எடுத்துக்காட்டு 2: நைட்ரஜன் மதிப்பீடு (டுமாஸ் முறை)',
      description: '0.30 g of an organic compound gave 50 mL of nitrogen collected at 300 K and 715 mm pressure. Calculate the percentage of nitrogen in the compound. (Aqueous tension at 300 K = 15 mm)',
      descriptionTamil: '0.30 கிராம் ஒரு கரிமச் சேர்மம் 300 K மற்றும் 715 மி.மீ. அழுத்தத்தில் 50 மி.லி. நைட்ரஜனை கொடுத்தது. சேர்மத்தில் நைட்ரஜனின் சதவீதத்தைக் கணக்கிடுக. (300 K இல் நீர்ம பதற்றம் = 15 மி.மீ.)',
      steps: [
        {
          type: 'paragraph',
          text: 'Given: Mass of organic compound ($w$) = 0.30 g, Volume of $\ce{N2}$ collected ($V_{obs}$) = 50 mL, Temperature (T) = 300 K, Pressure ($P_{obs}$) = 715 mm, Aqueous tension = 15 mm.',
          textTamil: 'கொடுக்கப்பட்டவை: கரிமச் சேர்மத்தின் நிறை ($w$) = 0.30 கிராம், சேகரிக்கப்பட்ட $\ce{N2}$ இன் கனஅளவு ($V_{obs}$) = 50 மி.லி., வெப்பநிலை (T) = 300 K, அழுத்தம் ($P_{obs}$) = 715 மி.மீ., நீர்ம பதற்றம் = 15 மி.மீ.'
        },
        {
          type: 'subheading',
          text: 'Pressure of dry nitrogen ($P_{N2}$):',
          textTamil: 'உலர் நைட்ரஜனின் அழுத்தம் ($P_{N2}$):'
        },
        {
          type: 'math',
          content: '$\text{P}_{N2} = P_{obs} - \text{Aqueous tension} = 715 - 15 = 700 \text{ mm}$',
          contentTamil: '$\text{P}_{N2} = P_{obs} - \text{நீர்ம பதற்றம்} = 715 - 15 = 700 \text{ மி.மீ.}$'
        },
        {
          type: 'subheading',
          text: 'Volume of $\ce{N2}$ at STP ($V_0$):',
          textTamil: 'STP இல் $\ce{N2}$ இன் கனஅளவு ($V_0$):'
        },
        {
          type: 'paragraph',
          text: 'Using combined gas law $\frac{P_1V_1}{T_1} = \frac{P_0V_0}{T_0}$',
          textTamil: 'சேர்க்கப்பட்ட வாயு விதியைப் பயன்படுத்துதல் $\frac{P_1V_1}{T_1} = \frac{P_0V_0}{T_0}$'
        },
        {
          type: 'math',
          content: '$\frac{700 \times 50}{300} = \frac{760 \times V_0}{273}$',
          contentTamil: '$\frac{700 \times 50}{300} = \frac{760 \times V_0}{273}$'
        },
        {
          type: 'math',
          content: '$\implies V_0 = \frac{700 \times 50 \times 273}{300 \times 760} = 41.97 \text{ mL}$',
          contentTamil: '$\implies V_0 = \frac{700 \times 50 \times 273}{300 \times 760} = 41.97 \text{ மி.லி.}$'
        },
        {
          type: 'subheading',
          text: 'Percentage of Nitrogen:',
          textTamil: 'நைட்ரஜனின் சதவீதம்:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of N} = \frac{28}{22400} \times \frac{V_0}{w} \times 100$',
          contentTamil: '$\text{N இன் சதவீதம்} = \frac{28}{22400} \times \frac{V_0}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$= \frac{28}{22400} \times \frac{41.97}{0.30} \times 100 = 17.48 \%$',
          contentTamil: '$= \frac{28}{22400} \times \frac{41.97}{0.30} \times 100 = 17.48 \%$'
        }
      ],
      answer: 'Percentage of Nitrogen = 17.48%',
      answerTamil: 'நைட்ரஜனின் சதவீதம் = 17.48%'
    },
    {
      id: 'we-3',
      title: 'Worked Example 3: Halogen Estimation (Carius Method)',
      titleTamil: 'தீர்வு காணப்பட்ட எடுத்துக்காட்டு 3: ஹாலோஜன் மதிப்பீடு (கேரியஸ் முறை)',
      description: '0.15 g of an organic compound gave 0.12 g of AgBr by Carius method. Find the percentage of bromine in the compound. (Atomic mass of Br = 80, Ag = 108)',
      descriptionTamil: '0.15 கிராம் ஒரு கரிமச் சேர்மம் கேரியஸ் முறைப்படி 0.12 கிராம் AgBr ஐ கொடுத்தது. சேர்மத்தில் புரோமினின் சதவீதத்தைக் கண்டறியவும். (Br இன் அணு நிறை = 80, Ag = 108)',
      steps: [
        {
          type: 'paragraph',
          text: 'Given: Mass of organic compound ($w$) = 0.15 g, Mass of AgBr ($w_1$) = 0.12 g.',
          textTamil: 'கொடுக்கப்பட்டவை: கரிமச் சேர்மத்தின் நிறை ($w$) = 0.15 கிராம், AgBr இன் நிறை ($w_1$) = 0.12 கிராம்.'
        },
        {
          type: 'subheading',
          text: 'Molar mass of AgBr ($M_{AgBr}$):',
          textTamil: 'AgBr இன் மோலார் நிறை ($M_{AgBr}$):'
        },
        {
          type: 'math',
          content: '$\text{M}_{AgBr} = 108 (Ag) + 80 (Br) = 188 \text{ g/mol}$',
          contentTamil: '$\text{M}_{AgBr} = 108 (Ag) + 80 (Br) = 188 \text{ கி/மோல்}$'
        },
        {
          type: 'subheading',
          text: 'Percentage of Bromine:',
          textTamil: 'புரோமினின் சதவீதம்:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of Br} = \frac{\text{Atomic mass of Br}}{M_{AgBr}} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{Br இன் சதவீதம்} = \frac{\text{Br இன் அணு நிறை}}{M_{AgBr}} \times \frac{w_1}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$= \frac{80}{188} \times \frac{0.12}{0.15} \times 100 = 34.04 \%$',
          contentTamil: '$= \frac{80}{188} \times \frac{0.12}{0.15} \times 100 = 34.04 \%$'
        }
      ],
      answer: 'Percentage of Bromine = 34.04%',
      answerTamil: 'புரோமினின் சதவீதம் = 34.04%'
    },
    {
      id: 'we-4',
      title: 'Worked Example 4: Sulfur Estimation (Carius Method)',
      titleTamil: 'தீர்வு காணப்பட்ட எடுத்துக்காட்டு 4: சல்பர் மதிப்பீடு (கேரியஸ் முறை)',
      description: 'In Carius method for estimation of sulfur, 0.2175 g of an organic compound gave 0.5825 g of barium sulfate. Calculate the percentage of sulfur in the compound. (Atomic mass of S = 32, Ba = 137, O = 16)',
      descriptionTamil: 'சல்பர் மதிப்பீட்டிற்கான கேரியஸ் முறையில், 0.2175 கிராம் ஒரு கரிமச் சேர்மம் 0.5825 கிராம் பேரியம் சல்பேட்டை கொடுத்தது. சேர்மத்தில் சல்பரின் சதவீதத்தைக் கணக்கிடுக. (S இன் அணு நிறை = 32, Ba = 137, O = 16)',
      steps: [
        {
          type: 'paragraph',
          text: 'Given: Mass of organic compound ($w$) = 0.2175 g, Mass of $\ce{BaSO4}$ ($w_1$) = 0.5825 g.',
          textTamil: 'கொடுக்கப்பட்டவை: கரிமச் சேர்மத்தின் நிறை ($w$) = 0.2175 கிராம், $\ce{BaSO4}$ இன் நிறை ($w_1$) = 0.5825 கிராம்.'
        },
        {
          type: 'subheading',
          text: 'Molar mass of $\ce{BaSO4}$:',
          textTamil: '$\ce{BaSO4}$ இன் மோலார் நிறை:'
        },
        {
          type: 'math',
          content: '$\text{M}_{BaSO4} = 137 (Ba) + 32 (S) + 4 \times 16 (O) = 137 + 32 + 64 = 233 \text{ g/mol}$',
          contentTamil: '$\text{M}_{BaSO4} = 137 (Ba) + 32 (S) + 4 \times 16 (O) = 137 + 32 + 64 = 233 \text{ கி/மோல்}$'
        },
        {
          type: 'subheading',
          text: 'Percentage of Sulfur:',
          textTamil: 'சல்பரின் சதவீதம்:'
        },
        {
          type: 'math',
          content: '$\text{Percentage of S} = \frac{\text{Atomic mass of S}}{M_{BaSO4}} \times \frac{w_1}{w} \times 100$',
          contentTamil: '$\text{S இன் சதவீதம்} = \frac{\text{S இன் அணு நிறை}}{M_{BaSO4}} \times \frac{w_1}{w} \times 100$'
        },
        {
          type: 'math',
          content: '$= \frac{32}{233} \times \frac{0.5825}{0.2175} \times 100 = 36.87 \%$',
          contentTamil: '$= \frac{32}{233} \times \frac{0.5825}{0.2175} \times 100 = 36.87 \%$'
        }
      ],
      answer: 'Percentage of Sulfur = 36.87%',
      answerTamil: 'சல்பரின் சதவீதம் = 36.87%'
    },
    {
      id: 'we-5',
      title: 'Worked Example 5: Rf Value Calculation (TLC)',
      titleTamil: 'தீர்வு காணப்பட்ட எடுத்துக்காட்டு 5: Rf மதிப்பு கணக்கீடு (TLC)',
      description: 'In a thin layer chromatography experiment, a substance moved 4.5 cm from the origin, while the solvent front moved 7.5 cm from the origin. Calculate the Rf value for the substance.',
      descriptionTamil: 'ஒரு மெல்லிய அடுக்கு நிறப்பகுப்பாய்வு சோதனையில், ஒரு பொருள் தொடக்க புள்ளியிலிருந்து 4.5 செ.மீ. நகர்ந்தது, அதேசமயம் கரைப்பான் முன் பகுதி தொடக்க புள்ளியிலிருந்து 7.5 செ.மீ. நகர்ந்தது. பொருளுக்கான Rf மதிப்பைக் கணக்கிடுக.',
      steps: [
        {
          type: 'paragraph',
          text: 'Given: Distance travelled by substance = 4.5 cm, Distance travelled by solvent front = 7.5 cm.',
          textTamil: 'கொடுக்கப்பட்டவை: பொருள் கடந்த தூரம் = 4.5 செ.மீ., கரைப்பான் முன் பகுதி கடந்த தூரம் = 7.5 செ.மீ.'
        },
        {
          type: 'subheading',
          text: 'Formula for Rf value:',
          textTamil: 'Rf மதிப்பிற்கான சூத்திரம்:'
        },
        {
          type: 'math',
          content: '$\text{R}_f = \frac{\text{Distance travelled by the substance}}{\text{Distance travelled by the solvent front}}$',
          contentTamil: '$\text{R}_f = \frac{\text{பொருள் கடந்த தூரம்}}{\text{கரைப்பான் முன் பகுதி கடந்த தூரம்}}$'
        },
        {
          type: 'subheading',
          text: 'Calculation:',
          textTamil: 'கணக்கீடு:'
        },
        {
          type: 'math',
          content: '$\text{R}_f = \frac{4.5 \text{ cm}}{7.5 \text{ cm}} = 0.6$',
          contentTamil: '$\text{R}_f = \frac{4.5 \text{ செ.மீ.}}{7.5 \text{ செ.மீ.}} = 0.6$'
        }
      ],
      answer: 'The Rf value for the substance is 0.6.',
      answerTamil: 'பொருளுக்கான Rf மதிப்பு 0.6 ஆகும்.'
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-1',
      type: 'mcq',
      question: 'Which of the following methods is suitable for the purification of a volatile liquid containing non-volatile impurities?',
      options: [
        { text: 'Crystallisation' },
        { text: 'Sublimation' },
        { text: 'Simple Distillation' },
        { text: 'Fractional Distillation' }
      ],
      answer: 'Simple Distillation',
      neetFrequency: 3
    },
    {
      id: 'pq-2',
      type: 'mcq',
      question: 'Lassaigne\'s test is used for the detection of which of the following elements in an organic compound?',
      options: [
        { text: 'Carbon and Hydrogen' },
        { text: 'Oxygen and Phosphorus' },
        { text: 'Nitrogen, Sulfur, and Halogens' },
        { text: 'All of the above' }
      ],
      answer: 'Nitrogen, Sulfur, and Halogens',
      neetFrequency: 4
    },
    {
      id: 'pq-3',
      type: 'mcq',
      question: 'Which of the following organic compounds cannot be purified by Kjeldahl\'s method for nitrogen estimation?',
      options: [
        { text: 'Aniline' },
        { text: 'Urea' },
        { text: 'Nitrobenzene' },
        { text: 'Amino acids' }
      ],
      answer: 'Nitrobenzene',
      neetFrequency: 3
    },
    {
      id: 'pq-4',
      type: 'mcq',
      question: 'The principle of chromatography is based on:',
      options: [
        { text: 'Differential solubility' },
        { text: 'Differential adsorption or partition' },
        { text: 'Differential boiling points' },
        { text: 'Differential melting points' }
      ],
      answer: 'Differential adsorption or partition',
      neetFrequency: 3
    },
    {
      id: 'pq-5',
      type: 'mcq',
      question: 'In Liebig\'s method for the estimation of carbon and hydrogen, water is absorbed by:',
      options: [
        { text: 'Anhydrous CaCl2' },
        { text: 'KOH solution' },
        { text: 'Concentrated H2SO4' },
        { text: 'AgNO3 solution' }
      ],
      answer: 'Anhydrous CaCl2',
      neetFrequency: 3
    },
    {
      id: 'pq-6',
      type: 'mcq',
      question: 'An organic compound contains C, H and O. 0.2 g of the compound on combustion gave 0.18 g of water and 0.44 g of CO2. What is the percentage of Carbon and Hydrogen?',
      options: [
        { text: 'C=60%, H=10%' },
        { text: 'C=50%, H=10%' },
        { text: 'C=60%, H=5%' },
        { text: 'C=55%, H=5%' }
      ],
      answer: 'C=60%, H=10%',
      neetFrequency: 4,
      solution: 'Mass of organic compound (w) = 0.2 g
Mass of water (w1) = 0.18 g
Mass of carbon dioxide (w2) = 0.44 g
Percentage of C = (12/44) * (w2/w) * 100 = (12/44) * (0.44/0.2) * 100 = 60%
Percentage of H = (2/18) * (w1/w) * 100 = (2/18) * (0.18/0.2) * 100 = 10%'
    },
    {
      id: 'pq-7',
      type: 'mcq',
      question: 'Which of the following is not a suitable solvent for crystallisation?',
      options: [
        { text: 'A solvent that dissolves the compound readily at all temperatures.' },
        { text: 'A solvent that dissolves the compound sparingly at room temperature but appreciably at higher temperatures.' },
        { text: 'A solvent that does not react with the compound.' },
        { text: 'A solvent that dissolves impurities readily or not at all.' }
      ],
      answer: 'A solvent that dissolves the compound readily at all temperatures.',
      neetFrequency: 2
    },
    {
      id: 'pq-8',
      type: 'mcq',
      question: 'Which technique is used to purify a liquid that decomposes at its boiling point?',
      options: [
        { text: 'Simple distillation' },
        { text: 'Fractional distillation' },
        { text: 'Steam distillation' },
        { text: 'Distillation under reduced pressure' }
      ],
      answer: 'Distillation under reduced pressure',
      neetFrequency: 3
    },
    {
      id: 'pq-9',
      type: 'mcq',
      question: 'In paper chromatography, the stationary phase is:',
      options: [
        { text: 'Silica gel' },
        { text: 'Alumina' },
        { text: 'Water adsorbed on filter paper' },
        { text: 'An organic solvent' }
      ],
      answer: 'Water adsorbed on filter paper',
      neetFrequency: 2
    },
    {
      id: 'pq-10',
      type: 'mcq',
      question: 'A violet colour produced in sodium nitroprusside test with Lassaigne\'s extract indicates the presence of:',
      options: [
        { text: 'Nitrogen' },
        { text: 'Sulfur' },
        { text: 'Halogens' },
        { text: 'Phosphorus' }
      ],
      answer: 'Sulfur',
      neetFrequency: 3
    },
    {
      id: 'pq-11',
      type: 'mcq',
      question: 'The separation of ethanol and water can be best achieved by:',
      options: [
        { text: 'Simple distillation' },
        { text: 'Fractional distillation' },
        { text: 'Steam distillation' },
        { text: 'Sublimation' }
      ],
      answer: 'Fractional distillation',
      neetFrequency: 4
    },
    {
      id: 'pq-12',
      type: 'mcq',
      question: 'Which of the following methods is used for the quantitative estimation of halogens?',
      options: [
        { text: 'Dumas method' },
        { text: 'Kjeldahl\'s method' },
        { text: 'Liebig\'s method' },
        { text: 'Carius method' }
      ],
      answer: 'Carius method',
      neetFrequency: 3
    },
    {
      id: 'pq-13',
      type: 'mcq',
      question: 'In Lassaigne\'s test, if both nitrogen and sulfur are present in an organic compound, then the sodium fusion extract contains:',
      options: [
        { text: 'NaCN' },
        { text: 'Na2S' },
        { text: 'NaCNS' },
        { text: 'Both NaCN and Na2S' }
      ],
      answer: 'NaCNS',
      neetFrequency: 4,
      solution: 'When both N and S are present, they combine with Na to form sodium thiocyanate (NaCNS).'
    },
    {
      id: 'pq-14',
      type: 'mcq',
      question: 'The Rf value in chromatography depends on:',
      options: [
        { text: 'Nature of the solvent only' },
        { text: 'Nature of the substance only' },
        { text: 'Nature of the stationary phase only' },
        { text: 'Nature of the solvent, stationary phase, and temperature' }
      ],
      answer: 'Nature of the solvent, stationary phase, and temperature',
      neetFrequency: 3
    },
    {
      id: 'pq-15',
      type: 'mcq',
      question: 'Glycerol can be purified by:',
      options: [
        { text: 'Simple distillation' },
        { text: 'Fractional distillation' },
        { text: 'Steam distillation' },
        { text: 'Distillation under reduced pressure' }
      ],
      answer: 'Distillation under reduced pressure',
      neetFrequency: 3
    },
    {
      id: 'pq-16',
      type: 'mcq',
      question: 'Prussian blue colour in Lassaigne\'s test confirms the presence of:',
      options: [
        { text: 'Sulfur' },
        { text: 'Halogens' },
        { text: 'Nitrogen' },
        { text: 'Phosphorus' }
      ],
      answer: 'Nitrogen',
      neetFrequency: 3
    },
    {
      id: 'pq-17',
      type: 'mcq',
      question: 'A yellowish precipitate sparingly soluble in ammonium hydroxide in Carius test for halogens indicates the presence of:',
      options: [
        { text: 'Chlorine' },
        { text: 'Bromine' },
        { text: 'Iodine' },
        { text: 'Fluorine' }
      ],
      answer: 'Bromine',
      neetFrequency: 2
    },
    {
      id: 'pq-18',
      type: 'mcq',
      question: 'The principle of differential extraction is based on:',
      options: [
        { text: 'Difference in boiling points' },
        { text: 'Difference in melting points' },
        { text: 'Difference in solubilities in two immiscible solvents' },
        { text: 'Difference in adsorption properties' }
      ],
      answer: 'Difference in solubilities in two immiscible solvents',
      neetFrequency: 2
    },
    {
      id: 'pq-19',
      type: 'mcq',
      question: 'Which of the following organic compounds can be purified by sublimation?',
      options: [
        { text: 'Sugar' },
        { text: 'Urea' },
        { text: 'Naphthalene' },
        { text: 'Glucose' }
      ],
      answer: 'Naphthalene',
      neetFrequency: 3
    },
    {
      id: 'pq-20',
      type: 'mcq',
      question: 'In estimation of carbon and hydrogen, the role of CuO is to:',
      options: [
        { text: 'Act as a catalyst' },
        { text: 'Oxidise C to CO2 and H to H2O' },
        { text: 'Absorb CO2' },
        { text: 'Absorb H2O' }
      ],
      answer: 'Oxidise C to CO2 and H to H2O',
      neetFrequency: 3
    },
    {
      id: 'pq-21',
      type: 'mcq',
      question: 'If 0.25 g of an organic compound containing phosphorus gave 0.35 g of $\ce{Mg2P2O7}$, the percentage of phosphorus in the compound is approximately (Atomic mass of P = 31, Mg = 24, O = 16):',
      options: [
        { text: '18.6%' },
        { text: '31.0%' },
        { text: '22.4%' },
        { text: '25.0%' }
      ],
      answer: '18.6%',
      neetFrequency: 4,
      solution: 'Mass of compound (w) = 0.25 g
Mass of Mg2P2O7 (w1) = 0.35 g
Molar mass of Mg2P2O7 = 2*24 + 2*31 + 7*16 = 48 + 62 + 112 = 222 g/mol
Percentage of P = (2 * Atomic mass of P / Molar mass of Mg2P2O7) * (w1/w) * 100
= (2 * 31 / 222) * (0.35 / 0.25) * 100 = (62 / 222) * 1.4 * 100 = 0.279 * 1.4 * 100 = 39.06 / 2.1 = 18.6%'
    },
    {
      id: 'pq-22',
      type: 'mcq',
      question: 'The most efficient method for the separation of components of a mixture containing trace amounts of organic compounds is:',
      options: [
        { text: 'Crystallisation' },
        { text: 'Distillation' },
        { text: 'Chromatography' },
        { text: 'Differential extraction' }
      ],
      answer: 'Chromatography',
      neetFrequency: 3
    },
    {
      id: 'pq-23',
      type: 'mcq',
      question: 'Which of the following statements about steam distillation is INCORRECT?',
      options: [
        { text: 'It is used for steam volatile compounds.' },
        { text: 'The compound must be miscible with water.' },
        { text: 'The compound should decompose at its boiling point.' },
        { text: 'The sum of partial pressures of water and the organic compound equals atmospheric pressure.' }
      ],
      answer: 'The compound must be miscible with water.',
      neetFrequency: 3
    },
    {
      id: 'pq-24',
      type: 'mcq',
      question: 'In Kjeldahl\'s method, the percentage of nitrogen is calculated from the volume of ammonia produced. This ammonia is typically absorbed in:',
      options: [
        { text: 'NaOH solution' },
        { text: 'Water' },
        { text: 'Standard acid solution' },
        { text: 'KOH solution' }
      ],
      answer: 'Standard acid solution',
      neetFrequency: 3
    },
    {
      id: 'pq-25',
      type: 'mcq',
      question: 'Which of the following elements is usually estimated by the difference method?',
      options: [
        { text: 'Carbon' },
        { text: 'Hydrogen' },
        { text: 'Nitrogen' },
        { text: 'Oxygen' }
      ],
      answer: 'Oxygen',
      neetFrequency: 2
    },
    {
      id: 'pq-26',
      type: 'mcq',
      question: 'The Rf value for a compound in TLC is 0.5. If the solvent front travels 10 cm, how far did the compound travel from the origin?',
      options: [
        { text: '20 cm' },
        { text: '5 cm' },
        { text: '10 cm' },
        { text: '2 cm' }
      ],
      answer: '5 cm',
      neetFrequency: 3,
      solution: 'Rf = Distance travelled by substance / Distance travelled by solvent front
0.5 = Distance by substance / 10 cm
Distance by substance = 0.5 * 10 cm = 5 cm'
    },
    {
      id: 'pq-27',
      type: 'mcq',
      question: 'Anhydrous copper (II) sulfate is used in the detection of hydrogen because it:',
      options: [
        { text: 'Turns blue in presence of water' },
        { text: 'Turns green in presence of water' },
        { text: 'Reacts with carbon dioxide' },
        { text: 'Is a good oxidizing agent' }
      ],
      answer: 'Turns blue in presence of water',
      neetFrequency: 2
    },
    {
      id: 'pq-28',
      type: 'mcq',
      question: 'Which method would be most appropriate to separate a mixture of acetone (b.p. 56°C) and water (b.p. 100°C)?',
      options: [
        { text: 'Simple distillation' },
        { text: 'Fractional distillation' },
        { text: 'Steam distillation' },
        { text: 'Differential extraction' }
      ],
      answer: 'Fractional distillation',
      neetFrequency: 3,
      solution: 'The boiling point difference (100-56 = 44°C) is not large enough for simple distillation for pure separation, but also not extremely small. However, for efficient separation of miscible liquids with moderately different boiling points, fractional distillation is preferred.'
    },
    {
      id: 'pq-29',
      type: 'mcq',
      question: 'The purpose of fuming nitric acid in Carius method for sulfur estimation is to:',
      options: [
        { text: 'Precipitate barium sulfate' },
        { text: 'Oxidise sulfur to sulfuric acid' },
        { text: 'Absorb CO2' },
        { text: 'Act as a solvent' }
      ],
      answer: 'Oxidise sulfur to sulfuric acid',
      neetFrequency: 3
    },
    {
      id: 'pq-30',
      type: 'mcq',
      question: 'Which of the following organic compounds will not give a positive Lassaigne\'s test for nitrogen?',
      options: [
        { text: 'Aniline' },
        { text: 'Nitrobenzene' },
        { text: 'Urea' },
        { text: 'Pyridine' }
      ],
      answer: 'Nitrobenzene',
      neetFrequency: 4,
      solution: 'Nitro compounds and azo compounds do not give Lassaigne\'s test for nitrogen because nitrogen in these compounds is not converted into cyanide ions upon fusion with sodium. Also, nitrogen in heterocyclic rings like pyridine may not respond readily.'
    },
    {
      id: 'ar-1',
      type: 'assertionReason',
      assertion: 'Assertion (A): Fractional distillation is used to separate two liquids with boiling points differing by 25 K or more.',
      reason: 'Reason (R): The fractionating column provides a larger surface area for heat exchange and repeated vaporisation and condensation.',
      options: [
        { text: 'Both A and R are true and R is the correct explanation of A.' },
        { text: 'Both A and R are true but R is not the correct explanation of A.' },
        { text: 'A is true but R is false.' },
        { text: 'A is false but R is true.' },
        { text: 'Both A and R are false.' }
      ],
      answer: 'A is false but R is true.',
      neetFrequency: 3
    },
    {
      id: 'ar-2',
      type: 'assertionReason',
      assertion: 'Assertion (A): Lassaigne\'s test is not shown by diazonium salts.',
      reason: 'Reason (R): Diazonium salts decompose explosively on heating and do not form NaCN.',
      options: [
        { text: 'Both A and R are true and R is the correct explanation of A.' },
        { text: 'Both A and R are true but R is not the correct explanation of A.' },
        { text: 'A is true but R is false.' },
        { text: 'A is false but R is true.' },
        { text: 'Both A and R are false.' }
      ],
      answer: 'Both A and R are true and R is the correct explanation of A.',
      neetFrequency: 4
    },
    {
      id: 'ar-3',
      type: 'assertionReason',
      assertion: 'Assertion (A): Carius method is used for the estimation of halogens, sulfur, and phosphorus.',
      reason: 'Reason (R): In Carius method, these elements are converted into their respective inorganic salts by oxidation with fuming nitric acid.',
      options: [
        { text: 'Both A and R are true and R is the correct explanation of A.' },
        { text: 'Both A and R are true but R is not the correct explanation of A.' },
        { text: 'A is true but R is false.' },
        { text: 'A is false but R is true.' },
        { text: 'Both A and R are false.' }
      ],
      answer: 'Both A and R are true and R is the correct explanation of A.',
      neetFrequency: 3
    },
    {
      id: 'ar-4',
      type: 'assertionReason',
      assertion: 'Assertion (A): Glycerol is purified by distillation under reduced pressure.',
      reason: 'Reason (R): Glycerol has a very high boiling point and decomposes at its normal boiling temperature.',
      options: [
        { text: 'Both A and R are true and R is the correct explanation of A.' },
        { text: 'Both A and R are true but R is not the correct explanation of A.' },
        { text: 'A is true but R is false.' },
        { text: 'A is false but R is true.' },
        { text: 'Both A and R are false.' }
      ],
      answer: 'Both A and R are true and R is the correct explanation of A.',
      neetFrequency: 3
    },
    {
      id: 'ar-5',
      type: 'assertionReason',
      assertion: 'Assertion (A): Water is removed by anhydrous calcium chloride in Liebig\'s method.',
      reason: 'Reason (R): Anhydrous calcium chloride absorbs water.',
      options: [
        { text: 'Both A and R are true and R is the correct explanation of A.' },
        { text: 'Both A and R are true but R is not the correct explanation of A.' },
        { text: 'A is true but R is false.' },
        { text: 'A is false but R is true.' },
        { text: 'Both A and R are false.' }
      ],
      answer: 'Both A and R are true and R is the correct explanation of A.',
      neetFrequency: 2
    },
    {
      id: 'mtc-1',
      type: 'matchTheColumn',
      question: 'Match the purification method with its principle.',
      column1: [
        { id: '1', text: 'Crystallisation' },
        { id: '2', text: 'Sublimation' },
        { id: '3', text: 'Differential Extraction' },
        { id: '4', text: 'Chromatography' }
      ],
      column2: [
        { id: 'A', text: 'Differential adsorption/partition' },
        { id: 'B', text: 'Direct solid to gas conversion' },
        { id: 'C', text: 'Difference in solubilities in two immiscible solvents' },
        { id: 'D', text: 'Difference in solubilities in a single solvent at different temperatures' }
      ],
      answer: { '1': 'D', '2': 'B', '3': 'C', '4': 'A' },
      neetFrequency: 3
    },
    {
      id: 'mtc-2',
      type: 'matchTheColumn',
      question: 'Match the element detection method with the characteristic observation.',
      column1: [
        { id: '1', text: 'Nitrogen (Lassaigne\'s)' },
        { id: '2', text: 'Sulfur (Lassaigne\'s)' },
        { id: '3', text: 'Chlorine (Lassaigne\'s)' },
        { id: '4', text: 'Hydrogen (Liebig\'s)' }
      ],
      column2: [
        { id: 'A', text: 'White precipitate soluble in NH4OH' },
        { id: 'B', text: 'Prussian blue colour' },
        { id: 'C', text: 'Anhydrous CuSO4 turns blue' },
        { id: 'D', text: 'Violet colour with sodium nitroprusside' }
      ],
      answer: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
      neetFrequency: 4
    },
    {
      id: 'mtc-3',
      type: 'matchTheColumn',
      question: 'Match the estimation method with the element it estimates.',
      column1: [
        { id: '1', text: 'Liebig\'s Method' },
        { id: '2', text: 'Dumas Method' },
        { id: '3', text: 'Kjeldahl\'s Method' },
        { id: '4', text: 'Carius Method' }
      ],
      column2: [
        { id: 'A', text: 'Nitrogen (most compounds)' },
        { id: 'B', text: 'Carbon and Hydrogen' },
        { id: 'C', text: 'Nitrogen (all compounds)' },
        { id: 'D', text: 'Halogens, Sulfur, Phosphorus' }
      ],
      answer: { '1': 'B', '2': 'C', '3': 'A', '4': 'D' },
      neetFrequency: 3
    },
    {
      id: 'mtc-4',
      type: 'matchTheColumn',
      question: 'Match the distillation type with its application.',
      column1: [
        { id: '1', text: 'Simple Distillation' },
        { id: '2', text: 'Fractional Distillation' },
        { id: '3', text: 'Steam Distillation' },
        { id: '4', text: 'Distillation under Reduced Pressure' }
      ],
      column2: [
        { id: 'A', text: 'Separation of glycerol' },
        { id: 'B', text: 'Purification of aniline' },
        { id: 'C', text: 'Separation of ethanol and water' },
        { id: 'D', text: 'Separation of salt solution' }
      ],
      answer: { '1': 'D', '2': 'C', '3': 'B', '4': 'A' },
      neetFrequency: 3
    },
    {
      id: 'mtc-5',
      type: 'matchTheColumn',
      question: 'Match the precipitate/color with the detected element in Carius method.',
      column1: [
        { id: '1', text: 'Yellow ppt insoluble in NH4OH' },
        { id: '2', text: 'White ppt soluble in NH4OH' },
        { id: '3', text: 'Yellowish ppt sparingly soluble in NH4OH' },
        { id: '4', text: 'BaSO4 precipitate' }
      ],
      column2: [
        { id: 'A', text: 'Chlorine' },
        { id: 'B', text: 'Iodine' },
        { id: 'C', text: 'Bromine' },
        { id: 'D', text: 'Sulfur' }
      ],
      answer: { '1': 'B', '2': 'A', '3': 'C', '4': 'D' },
      neetFrequency: 3
    }
  ],
  nextModule: {
    id: 'hydrocarbons',
    name: 'Hydrocarbons',
    nameTamil: 'ஹைட்ரோகார்பன்கள்',
  },
};
