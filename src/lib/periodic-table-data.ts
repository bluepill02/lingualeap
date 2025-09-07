
export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  nameTamil: string;
  group: number;
  period: number;
  atomicMass: number;
  category: 'alkali-metal' | 'alkaline-earth-metal' | 'lanthanide' | 'actinide' | 'transition-metal' | 'post-transition-metal' | 'metalloid' | 'reactive-nonmetal' | 'noble-gas';
  properties: {
    atomicRadius: { value: number; explanation: string; explanationTamil: string };
    electronegativity: { value: number | null; explanation: string; explanationTamil: string };
    ionizationEnergy: { value: number; explanation: string; explanationTamil: string };
  };
}

export const periodicTableData: ElementData[] = [
  // Period 1
  {
    atomicNumber: 1, symbol: 'H', name: 'Hydrogen', nameTamil: 'ஹைட்ரஜன்', group: 1, period: 1, atomicMass: 1.008, category: 'reactive-nonmetal',
    properties: {
      atomicRadius: { value: 53, explanation: 'Smallest element with only one proton pulling one electron.', explanationTamil: 'ஒரே ஒரு புரோட்டான் ஒரு எலக்ட்ரானை இழுப்பதால் இது மிகச்சிறிய தனிமம்.' },
      electronegativity: { value: 2.20, explanation: 'Moderately electronegative. Can gain or lose an electron.', explanationTamil: 'மிதமான எலக்ட்ரான் கவர்தன்மை கொண்டது. எலக்ட்ரானை ஏற்கவும் இழக்கவும் முடியும்.' },
      ionizationEnergy: { value: 1312.0, explanation: 'High ionization energy because the single electron is held tightly by the nucleus.', explanationTamil: 'ஒற்றை எலக்ட்ரான் அணுக்கருவால் இறுக்கமாகப் பிடிக்கப்படுவதால் அதிக அயனியாக்கும் ஆற்றல் கொண்டது.' }
    }
  },
  {
    atomicNumber: 2, symbol: 'He', name: 'Helium', nameTamil: 'ஹீலியம்', group: 18, period: 1, atomicMass: 4.0026, category: 'noble-gas',
    properties: {
      atomicRadius: { value: 31, explanation: 'Very small due to high effective nuclear charge for its period.', explanationTamil: 'அதன் வரிசைக்கு அதிக பயனுள்ள அணுக்கரு மின்னூட்டம் இருப்பதால் மிகவும் சிறியது.' },
      electronegativity: { value: null, explanation: 'Generally considered inert and does not form chemical bonds.', explanationTamil: 'பொதுவாக மந்தமானது மற்றும் வேதியியல் பிணைப்புகளை உருவாக்குவதில்லை.' },
      ionizationEnergy: { value: 2372.3, explanation: 'Highest ionization energy of all elements due to its full valence shell and small size.', explanationTamil: 'முழுமையான இணைதிறன் கூடு மற்றும் சிறிய அளவு காரணமாக அனைத்து தனிமங்களிலும் அதிக அயனியாக்கும் ஆற்றலைக் கொண்டுள்ளது.' }
    }
  },
  // Period 2
  {
    atomicNumber: 3, symbol: 'Li', name: 'Lithium', nameTamil: 'லித்தியம்', group: 1, period: 2, atomicMass: 6.94, category: 'alkali-metal',
    properties: {
      atomicRadius: { value: 167, explanation: 'Largest radius in its period due to low effective nuclear charge.', explanationTamil: 'குறைந்த பயனுள்ள அணுக்கரு மின்னூட்டம் காரணமாக அதன் வரிசையில் மிகப்பெரிய ஆரம் கொண்டது.' },
      electronegativity: { value: 0.98, explanation: 'Low electronegativity; readily loses its single valence electron.', explanationTamil: 'குறைந்த எலக்ட்ரான் கவர்தன்மை; அதன் ஒற்றை இணைதிறன் எலக்ட்ரானை எளிதில் இழக்கிறது.' },
      ionizationEnergy: { value: 520.2, explanation: 'Low ionization energy, as the valence electron is easily removed.', explanationTamil: 'இணைதிறன் எலக்ட்ரானை எளிதில் அகற்றிவிடலாம் என்பதால் குறைந்த அயனியாக்கும் ஆற்றல் கொண்டது.' }
    }
  },
  {
    atomicNumber: 4, symbol: 'Be', name: 'Beryllium', nameTamil: 'பெரிலியம்', group: 2, period: 2, atomicMass: 9.0122, category: 'alkaline-earth-metal',
    properties: {
      atomicRadius: { value: 112, explanation: 'Smaller than Lithium due to increased nuclear charge.', explanationTamil: 'அதிகரித்த அணுக்கரு மின்னூட்டம் காரணமாக லித்தியத்தை விடச் சிறியது.' },
      electronegativity: { value: 1.57, explanation: 'Higher than Lithium; holds its two valence electrons more tightly.', explanationTamil: 'லித்தியத்தை விட அதிகம்; அதன் இரண்டு இணைதிறன் எலக்ட்ரான்களை இறுக்கமாகப் பிடிக்கிறது.' },
      ionizationEnergy: { value: 899.5, explanation: 'Higher than Lithium due to increased nuclear charge and full s-orbital.', explanationTamil: 'அதிகரித்த அணுக்கரு மின்னூட்டம் மற்றும் முழுமையான s-ஆர்பிட்டால் காரணமாக லித்தியத்தை விட அதிகம்.' }
    }
  },
  {
    atomicNumber: 5, symbol: 'B', name: 'Boron', nameTamil: 'போரான்', group: 13, period: 2, atomicMass: 10.81, category: 'metalloid',
    properties: {
      atomicRadius: { value: 87, explanation: 'Smaller due to higher nuclear charge pulling electrons closer.', explanationTamil: 'அதிக அணுக்கரு மின்னூட்டம் எலக்ட்ரான்களை நெருக்கமாக இழுப்பதால் சிறியதாக உள்ளது.' },
      electronegativity: { value: 2.04, explanation: 'A metalloid with intermediate electronegativity.', explanationTamil: 'இடைநிலை எலக்ட்ரான் கவர்தன்மை கொண்ட ஒரு உலோகப்போலி.' },
      ionizationEnergy: { value: 800.6, explanation: 'Slightly lower than Beryllium as it involves removing a p-electron, which is easier.', explanationTamil: 'p-எலக்ட்ரானை அகற்றுவதை உள்ளடக்கியிருப்பதால் பெரிலியத்தை விட சற்றே குறைவு, இது எளிதானது.' }
    }
  },
  {
    atomicNumber: 6, symbol: 'C', name: 'Carbon', nameTamil: 'கார்பன்', group: 14, period: 2, atomicMass: 12.011, category: 'reactive-nonmetal',
    properties: {
      atomicRadius: { value: 67, explanation: 'Forms the basis of organic chemistry. Radius continues to decrease across the period.', explanationTamil: 'கரிம வேதியியலின் அடிப்படையை உருவாக்குகிறது. ஆரம் வரிசை முழுவதும் தொடர்ந்து குறைகிறது.' },
      electronegativity: { value: 2.55, explanation: 'Key value. Can form four covalent bonds, neither strongly gaining nor losing electrons.', explanationTamil: 'முக்கிய மதிப்பு. நான்கு சகப்பிணைப்புகளை உருவாக்க முடியும், எலக்ட்ரான்களை வலுவாக ஏற்கவோ இழக்கவோ இல்லை.' },
      ionizationEnergy: { value: 1086.5, explanation: 'Higher due to increased nuclear charge.', explanationTamil: 'அதிகரித்த அணுக்கரு மின்னூட்டம் காரணமாக அதிகம்.' }
    }
  },
  {
    atomicNumber: 7, symbol: 'N', name: 'Nitrogen', nameTamil: 'நைட்ரஜன்', group: 15, period: 2, atomicMass: 14.007, category: 'reactive-nonmetal',
    properties: {
      atomicRadius: { value: 56, explanation: 'Smaller radius due to stronger pull from the nucleus.', explanationTamil: 'அணுக்கருவிலிருந்து வலுவான ஈர்ப்பு காரணமாக சிறிய ஆரம்.' },
      electronegativity: { value: 3.04, explanation: 'High electronegativity, important for hydrogen bonding.', explanationTamil: 'அதிக எலக்ட்ரான் கவர்தன்மை, ஹைட்ரஜன் பிணைப்புக்கு முக்கியமானது.' },
      ionizationEnergy: { value: 1402.3, explanation: 'High energy due to stable half-filled p-orbital.', explanationTamil: 'நிலையான பாதி நிரம்பிய p-ஆர்பிட்டால் காரணமாக அதிக ஆற்றல்.' }
    }
  },
  {
    atomicNumber: 8, symbol: 'O', name: 'Oxygen', nameTamil: 'ஆக்ஸிஜன்', group: 16, period: 2, atomicMass: 15.999, category: 'reactive-nonmetal',
    properties: {
      atomicRadius: { value: 48, explanation: 'Very small radius due to high nuclear charge.', explanationTamil: 'அதிக அணுக்கரு மின்னூட்டம் காரணமாக மிகவும் சிறிய ஆரம்.' },
      electronegativity: { value: 3.44, explanation: 'Second most electronegative element; crucial for life and reactions.', explanationTamil: 'இரண்டாவது அதிக எலக்ட்ரான் கவர்தன்மை கொண்ட தனிமம்; வாழ்க்கைக்கும் வினைகளுக்கும் முக்கியமானது.' },
      ionizationEnergy: { value: 1313.9, explanation: 'Slightly lower than Nitrogen because removing an electron from a paired p-orbital is easier due to repulsion.', explanationTamil: 'ஜோடியான p-ஆர்பிட்டாலில் இருந்து ஒரு எலக்ட்ரானை அகற்றுவது தள்ளுகை காரணமாக எளிதானது என்பதால் நைட்ரஜனை விட சற்றே குறைவு.' }
    }
  },
  {
    atomicNumber: 9, symbol: 'F', name: 'Fluorine', nameTamil: 'ஃபுளோரின்', group: 17, period: 2, atomicMass: 18.998, category: 'reactive-nonmetal',
    properties: {
      atomicRadius: { value: 42, explanation: 'One of the smallest atomic radii.', explanationTamil: 'மிகச்சிறிய அணு ஆரங்களில் ஒன்று.' },
      electronegativity: { value: 3.98, explanation: 'The most electronegative element on the periodic table.', explanationTamil: 'தனிம வரிசை அட்டவணையில் மிகவும் எலக்ட்ரான் கவர்தன்மை கொண்ட தனிமம்.' },
      ionizationEnergy: { value: 1681.0, explanation: 'Very high ionization energy as it is close to achieving a stable octet.', explanationTamil: 'நிலையான எண்கோணத்தை அடைய நெருக்கமாக இருப்பதால் மிகவும் அதிக அயனியாக்கும் ஆற்றல் கொண்டது.' }
    }
  },
  {
    atomicNumber: 10, symbol: 'Ne', name: 'Neon', nameTamil: 'நியான்', group: 18, period: 2, atomicMass: 20.180, category: 'noble-gas',
    properties: {
      atomicRadius: { value: 38, explanation: 'Smallest in its period due to maximum nuclear charge for the shell.', explanationTamil: 'கூட்டிற்கு அதிகபட்ச அணுக்கரு மின்னூட்டம் இருப்பதால் அதன் வரிசையில் மிகச்சிறியது.' },
      electronegativity: { value: null, explanation: 'Inert noble gas with a full valence shell.', explanationTamil: 'முழுமையான இணைதிறன் கூடு கொண்ட மந்த வாயு.' },
      ionizationEnergy: { value: 2080.7, explanation: 'Very high energy required to remove an electron from a stable, full octet.', explanationTamil: 'நிலையான, முழுமையான எண்கோணத்திலிருந்து ஒரு எலக்ட்ரானை அகற்ற மிகவும் அதிக ஆற்றல் தேவைப்படுகிறது.' }
    }
  }
];
