
import type { NeetModule } from '@/lib/types';

export const chemicalBondingAndMolecularStructure: NeetModule = {
    id: 'neet-chemistry-chemical-bonding-and-molecular-structure',
    title: 'Chemistry - Chemical Bonding and Molecular Structure (வேதிப் பிணைப்பு மற்றும் மூலக்கூறு அமைப்பு)',
    chapter: 'Chemical Bonding and Molecular Structure',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand why atoms combine and define different types of chemical bonds (ionic, covalent, coordinate).",
        "Draw Lewis structures for simple molecules.",
        "Apply the Valence Shell Electron Pair Repulsion (VSEPR) theory to predict the geometry of molecules.",
        "Understand the concepts of hybridization (sp, sp², sp³) and its role in determining molecular shapes.",
        "Explain the Molecular Orbital Theory (MOT) and draw energy level diagrams for simple diatomic molecules.",
        "Define bond parameters like bond length, bond angle, and bond order."
    ],
    prerequisites: [
        "Atomic Structure, including electronic configuration and quantum numbers.",
        "Basic understanding of electrostatic forces."
    ],
    conceptOverview: "This chapter is at the very heart of chemistry, explaining how atoms join together to form the molecules and compounds that make up our world. We explore the 'glue' that holds atoms together—the chemical bond. The chapter covers the main types of bonds and introduces powerful theories like VSEPR, Valence Bond Theory (including hybridization), and Molecular Orbital Theory, which allow us to predict the three-dimensional shape of molecules. A molecule's shape is crucial as it determines many of its physical and chemical properties.",
    tamilConnection: "ஒரு கட்டிடத்தின் வலிமை அதன் செங்கற்கள் எவ்வாறு அடுக்கப்பட்டுள்ளன என்பதைப் பொறுத்தது. அதுபோல, ஒரு பொருளின் பண்புகள் அதன் அணுக்கள் எவ்வாறு பிணைக்கப்பட்டுள்ளன என்பதைப் பொறுத்தது. இந்த அத்தியாயம், அந்த 'வேதிப் பிணைப்பு' என்ற சிமெண்ட்டைப் பற்றி விரிவாக விளக்குகிறது.",
    culturalContext: "The structure of water (H₂O) is bent due to its sp³ hybridization, resulting in a polar molecule. This polarity is why water is an excellent solvent, capable of dissolving salts and sugars, a property fundamental to all cooking and life processes. Understanding the geometry of a simple molecule like water explains its profound importance.",
    syllabusMapping: [
        {
            topic: "Chemical Bonding and Molecular Structure",
            tnBoardChapter: "11th Std Chemistry - Vol 1, Chapter 4: Chemical Bonding",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 4: Chemical Bonding and Molecular Structure",
            notes: "Extremely important and high-yield chapter. VSEPR theory, hybridization, and MOT are favorite topics for questions. A solid understanding of predicting shapes and bond orders is essential.",
            mappingDescription: '11th Std Chemistry - Vol 1, Chapter 4 maps to NEET Chemistry Unit 4'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Types of Chemical Bonds',
                tamil: '1. வேதிப் பிணைப்புகளின் வகைகள்'
            },
            content: [
                {
                    english: `**Ionic Bond (அயனிப் பிணைப்பு):** Formed by the complete transfer of one or more electrons from one atom to another, creating ions. The electrostatic force of attraction between the oppositely charged ions holds them together. Example: NaCl.`,
                    tamil: `**அயனிப் பிணைப்பு:** ஒன்று அல்லது அதற்கு மேற்பட்ட எலக்ட்ரான்களை ஒரு அணுவிலிருந்து மற்றொரு அணுவிற்கு முழுமையாக மாற்றுவதன் மூலம் உருவாகிறது, இது அயனிகளை உருவாக்குகிறது. எதிர் மின்னூட்டம் கொண்ட அயனிகளுக்கு இடையிலான நிலைமின்னியல் ஈர்ப்பு விசை அவற்றை ஒன்றாக வைத்திருக்கிறது. எடுத்துக்காட்டு: NaCl.`
                },
                {
                    english: `**Covalent Bond (சகப் பிணைப்பு):** Formed by the mutual sharing of one or more electron pairs between two atoms. The shared pair of electrons belongs to both atoms. Example: Cl₂.`,
                    tamil: `**சகப் பிணைப்பு:** இரண்டு அணுக்களுக்கு இடையில் ஒன்று அல்லது அதற்கு மேற்பட்ட எலக்ட்ரான் ஜோடிகளை பரஸ்பரம் பகிர்ந்து கொள்வதன் மூலம் உருவாகிறது. பகிரப்பட்ட எலக்ட்ரான் ஜோடி இரண்டு அணுக்களுக்கும் சொந்தமானது. எடுத்துக்காட்டு: Cl₂.`
                },
                {
                    english: `**Coordinate Bond (ஈதற் சகப் பிணைப்பு):** A type of covalent bond where both electrons in the shared pair are contributed by one of the atoms. Example: The bond between NH₃ and BF₃.`,
                    tamil: `**ஈதற் சகப் பிணைப்பு:** ஒரு வகை சகப் பிணைப்பு, இதில் பகிரப்பட்ட ஜோடியில் உள்ள இரண்டு எலக்ட்ரான்களும் அணுக்களில் ஒன்றால் வழங்கப்படுகின்றன. எடுத்துக்காட்டு: NH₃ மற்றும் BF₃ க்கு இடையிலான பிணைப்பு.`
                }
            ]
        },
        {
            heading: {
                english: '2. VSEPR Theory (Valence Shell Electron Pair Repulsion Theory)',
                tamil: '2. VSEPR கோட்பாடு (இணைதிறன் கூட்டு எலக்ட்ரான் இரட்டை விலக்குக் கோட்பாடு)'
            },
            content: [
                {
                    english: `This theory predicts the geometry of molecules based on minimizing the electrostatic repulsion between electron pairs in the valence shell of the central atom. The order of repulsion is: Lone pair-Lone pair (LP-LP) > Lone pair-Bond pair (LP-BP) > Bond pair-Bond pair (BP-BP).`,
                    tamil: `இந்தக் கோட்பாடு ஒரு மூலக்கூறின் வடிவவியலை, மைய அணுவின் இணைதிறன் கூட்டில் உள்ள எலக்ட்ரான் இரட்டைகளுக்கு இடையேயான நிலைமின்னியல் விலக்கத்தைக் குறைப்பதன் அடிப்படையில் கணிக்கிறது. விலக்கு விசையின் வரிசை: தனித்த இரட்டை-தனித்த இரட்டை > தனித்த இரட்டை-பிணைப்பு இரட்டை > பிணைப்பு இரட்டை-பிணைப்பு இரட்டை.`
                }
            ]
        },
        {
            heading: {
                english: '3. Hybridization (இனக்கலத்தல்)',
                tamil: '3. இனக்கலத்தல்'
            },
            content: [
                {
                    english: `The concept of mixing atomic orbitals of slightly different energies to form a new set of equivalent orbitals, called hybrid orbitals. The number of hybrid orbitals formed is equal to the number of atomic orbitals mixed.
*   **sp hybridization:** Linear geometry, 180° bond angle (e.g., BeCl₂).
*   **sp² hybridization:** Trigonal planar geometry, 120° bond angle (e.g., BCl₃).
*   **sp³ hybridization:** Tetrahedral geometry, 109.5° bond angle (e.g., CH₄).`,
                    tamil: `சற்று மாறுபட்ட ஆற்றல்களைக் கொண்ட அணு ஆர்பிட்டால்களைக் கலந்து, இனக்கலப்பு ஆர்பிட்டால்கள் எனப்படும் புதிய சமமான ஆர்பிட்டால்களின் தொகுப்பை உருவாக்கும் கருத்து. உருவாக்கப்பட்ட இனக்கலப்பு ஆர்பிட்டால்களின் எண்ணிக்கை கலந்த அணு ஆர்பிட்டால்களின் எண்ணிக்கைக்கு சமம்.
*   **sp இனக்கலப்பு:** நேர்கோட்டு வடிவம், 180° பிணைப்புக் கோணம் (எ.கா., BeCl₂).
*   **sp² இனக்கலப்பு:** முக்கோணத் தள வடிவம், 120° பிணைப்புக் கோணம் (எ.கா., BCl₃).
*   **sp³ இனக்கலப்பு:** நான்முகி வடிவம், 109.5° பிணைப்புக் கோணம் (எ.கா., CH₄).`
                }
            ]
        },
        {
            heading: {
                english: '4. Molecular Orbital Theory (MOT) (மூலக்கூறு ஆர்பிட்டால் கோட்பாடு)',
                tamil: '4. மூலக்கூறு ஆர்பிட்டால் கோட்பாடு (MOT)'
            },
            content: [
                {
                    english: `Atomic orbitals combine to form molecular orbitals (MOs). The number of MOs formed equals the number of combining atomic orbitals. MOs are of two types:
*   **Bonding Molecular Orbitals (BMO):** Lower energy, higher stability.
*   **Antibonding Molecular Orbitals (ABMO):** Higher energy, lower stability.
*   **Bond Order (பிணைப்புத் தரம்):** A key parameter derived from MOT.
$$ \\text{Bond Order} = \\frac{1}{2} (N_b - N_a) $$
    where $N_b$ is the number of electrons in BMOs and $N_a$ is the number of electrons in ABMOs. A higher bond order implies greater stability and a shorter bond length.`,
                    tamil: `அணு ஆர்பிட்டால்கள் இணைந்து மூலக்கூறு ஆர்பிட்டால்களை (MOs) உருவாக்குகின்றன. உருவான MOகளின் எண்ணிக்கை இணைந்த அணு ஆர்பிட்டால்களின் எண்ணிக்கைக்கு சமம். MOகள் இரண்டு வகைப்படும்:
*   **பிணைப்பு மூலக்கூறு ஆர்பிட்டால்கள் (BMO):** குறைந்த ஆற்றல், அதிக நிலைப்புத்தன்மை.
*   **எதிர்பிணைப்பு மூலக்கூறு ஆர்பிட்டால்கள் (ABMO):** அதிக ஆற்றல், குறைந்த நிலைப்புத்தன்மை.
*   **பிணைப்புத் தரம்:** MOT-இலிருந்து பெறப்பட்ட ஒரு முக்கிய அளவுரு.
$$ \\text{பிணைப்புத் தரம்} = \\frac{1}{2} (N_b - N_a) $$
    இங்கு $N_b$ என்பது BMO களில் உள்ள எலக்ட்ரான்களின் எண்ணிக்கை மற்றும் $N_a$ என்பது ABMO களில் உள்ள எலக்ட்ரான்களின் எண்ணிக்கை. அதிக பிணைப்புத் தரம் அதிக நிலைப்புத்தன்மையையும், குறைந்த பிணைப்பு நீளத்தையும் குறிக்கிறது.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: VSEPR Theory and Shape",
            titleTamil: "நீட் நிலை: VSEPR கோட்பாடு மற்றும் வடிவம்",
            difficulty: 'Medium',
            problem: "Predict the shape of the SF₄ molecule using VSEPR theory.",
            problemTamil: "VSEPR கோட்பாட்டைப் பயன்படுத்தி SF₄ மூலக்கூறின் வடிவத்தைக் கணிக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Find the total number of valence electrons around the central atom, Sulfur (S). Sulfur is in Group 16, so it has 6 valence electrons. Fluorine (F) is a halogen and forms a single bond.",
                    explanationTamil: "மைய அணுவான கந்தகத்தைச் (S) சுற்றியுள்ள இணைதிறன் எலக்ட்ரான்களின் மொத்த எண்ணிக்கையைக் கண்டறியவும். கந்தகம் தொகுதி 16 இல் உள்ளது, எனவே அதற்கு 6 இணைதிறன் எலக்ட்ரான்கள் உள்ளன. ஃபுளோரின் (F) ஒரு ஹாலஜன் மற்றும் ஒற்றைப் பிணைப்பை உருவாக்குகிறது."
                },
                {
                    step: 2,
                    explanation: "Sulfur forms 4 single bonds with 4 fluorine atoms, using 4 of its valence electrons. This leaves 6 - 4 = 2 electrons as one lone pair.",
                    explanationTamil: "கந்தகம் 4 ஃபுளோரின் அணுக்களுடன் 4 ஒற்றைப் பிணைப்புகளை உருவாக்குகிறது, அதன் 4 இணைதிறன் எலக்ட்ரான்களைப் பயன்படுத்துகிறது. இது 6 - 4 = 2 எலக்ட்ரான்களை ஒரு தனித்த இரட்டையாக விட்டுச்செல்கிறது."
                },
                {
                    step: 3,
                    explanation: "The total number of electron pairs around the central atom is 4 (bond pairs) + 1 (lone pair) = 5. The geometry for 5 electron pairs is Trigonal Bipyramidal (முக்கோண இருபிரமிடு).",
                    explanationTamil: "மைய அணுவைச் சுற்றியுள்ள எலக்ட்ரான் இரட்டைகளின் மொத்த எண்ணிக்கை 4 (பிணைப்பு இரட்டைகள்) + 1 (தனித்த இரட்டை) = 5. 5 எலக்ட்ரான் இரட்டைகளுக்கான வடிவியல் முக்கோண இருபிரமிடு ஆகும்."
                },
                {
                    step: 4,
                    explanation: "According to VSEPR, the lone pair occupies an equatorial position to minimize repulsion. This results in a shape called a See-Saw (ஊசல் வடிவம் அல்லது தராசு வடிவம்).",
                    explanationTamil: "VSEPR-இன் படி, தனித்த இரட்டை விலக்கத்தைக் குறைக்க ஒரு நடுவரை நிலையை ஆக்கிரமிக்கிறது. இது சீ-சா (See-Saw) அல்லது ஊசல் வடிவம் எனப்படும் ஒரு வடிவத்தை விளைவிக்கிறது."
                }
            ],
            neetHack: "A shortcut to find the number of electron pairs is (V+M-C+A)/2, where V=valence electrons of central atom, M=monovalent atoms attached, C=cationic charge, A=anionic charge. For SF₄, it's (6+4-0+0)/2 = 5.",
            neetHackTamil: "எலக்ட்ரான் இரட்டைகளின் எண்ணிக்கையைக் கண்டறிய ஒரு குறுக்குவழி (V+M-C+A)/2 ஆகும், இங்கு V=மைய அணுவின் இணைதிறன் எலக்ட்ரான்கள், M=இணைக்கப்பட்ட ஒற்றை இணைதிறன் அணுக்கள், C=நேரயனி மின்னூட்டம், A=எதிரயனி மின்னூட்டம். SF₄ க்கு, இது (6+4-0+0)/2 = 5 ஆகும்.",
            commonPitfall: "Confusing the 'geometry' (arrangement of all electron pairs) with the 'shape' (arrangement of only the atoms/bond pairs).",
            commonPitfallTamil: "'வடிவியல்' (அனைத்து எலக்ட்ரான் இரட்டைகளின் ஏற்பாடு) மற்றும் 'வடிவம்' (அணுக்கள்/பிணைப்பு இரட்டைகளின் ஏற்பாடு மட்டும்) ஆகியவற்றை குழப்பிக் கொள்ளுதல்."
        },
        {
            title: "JEE Level: Molecular Orbital Theory",
            titleTamil: "ஜே.இ.இ நிலை: மூலக்கூறு ஆர்பிட்டால் கோட்பாடு",
            difficulty: 'Medium',
            problem: "Compare the stability of O₂, O₂⁺, O₂⁻, and O₂²⁻ using Molecular Orbital Theory.",
            problemTamil: "மூலக்கூறு ஆர்பிட்டால் கோட்பாட்டைப் பயன்படுத்தி O₂, O₂⁺, O₂⁻, மற்றும் O₂²⁻ ஆகியவற்றின் நிலைப்புத்தன்மையை ஒப்பிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Write the number of electrons for each species. O₂ has 16, O₂⁺ has 15, O₂⁻ has 17, O₂²⁻ has 18.",
                    explanationTamil: "ஒவ்வொரு வகைக்கும் எலக்ட்ரான்களின் எண்ணிக்கையை எழுதவும். O₂ க்கு 16, O₂⁺ க்கு 15, O₂⁻ க்கு 17, O₂²⁻ க்கு 18."
                },
                {
                    step: 2,
                    explanation: "Write the MOT configuration for O₂ (16 electrons): ... (σ2p_z)² (π2p_x)² (π2p_y)² (π*2p_x)¹ (π*2p_y)¹.",
                    explanationTamil: "O₂ (16 எலக்ட்ரான்கள்) க்கான MOT அமைப்பை எழுதவும்: ... (σ2p_z)² (π2p_x)² (π2p_y)² (π*2p_x)¹ (π*2p_y)¹."
                },
                {
                    step: 3,
                    explanation: "Calculate the bond order for each species using B.O. = (N_b - N_a)/2. For O₂, N_b=10, N_a=6. B.O.(O₂) = (10-6)/2 = 2.0.",
                    explanationTamil: "ஒவ்வொரு வகைக்கும் பிணைப்புத் தரத்தை B.O. = (N_b - N_a)/2 ஐப் பயன்படுத்தி கணக்கிடவும். O₂ க்கு, N_b=10, N_a=6. B.O.(O₂) = (10-6)/2 = 2.0."
                },
                {
                    step: 4,
                    explanation: "For O₂⁺ (15e), one antibonding electron is removed. N_b=10, N_a=5. B.O.(O₂⁺) = (10-5)/2 = 2.5.",
                    explanationTamil: "O₂⁺ (15e) க்கு, ஒரு எதிர்பிணைப்பு எலக்ட்ரான் நீக்கப்படுகிறது. N_b=10, N_a=5. B.O.(O₂⁺) = (10-5)/2 = 2.5."
                },
                {
                    step: 5,
                    explanation: "For O₂⁻ (17e), one antibonding electron is added. N_b=10, N_a=7. B.O.(O₂⁻) = (10-7)/2 = 1.5.",
                    explanationTamil: "O₂⁻ (17e) க்கு, ஒரு எதிர்பிணைப்பு எலக்ட்ரான் சேர்க்கப்படுகிறது. N_b=10, N_a=7. B.O.(O₂⁻) = (10-7)/2 = 1.5."
                },
                {
                    step: 6,
                    explanation: "For O₂²⁻ (18e), two antibonding electrons are added. N_b=10, N_a=8. B.O.(O₂²⁻) = (10-8)/2 = 1.0.",
                    explanationTamil: "O₂²⁻ (18e) க்கு, இரண்டு எதிர்பிணைப்பு எலக்ட்ரான்கள் சேர்க்கப்படுகின்றன. N_b=10, N_a=8. B.O.(O₂²⁻) = (10-8)/2 = 1.0."
                },
                {
                    step: 7,
                    explanation: "Stability is directly proportional to bond order. Therefore, the order of stability is O₂⁺ > O₂ > O₂⁻ > O₂²⁻.",
                    explanationTamil: "நிலைப்புத்தன்மை பிணைப்புத் தரத்திற்கு நேர்த்தகவில் உள்ளது. எனவே, நிலைப்புத்தன்மையின் வரிசை O₂⁺ > O₂ > O₂⁻ > O₂²⁻ ஆகும்."
                }
            ],
            neetHack: "For diatomic species with 14-20 electrons, remember the bond orders: 14e (N₂) -> 3.0, 15e -> 2.5, 16e (O₂) -> 2.0, 17e -> 1.5, 18e -> 1.0. This pattern allows you to quickly determine stability without writing the full configuration.",
            neetHackTamil: "14-20 எலக்ட்ரான்களைக் கொண்ட ஈரணு வகைகளுக்கு, பிணைப்புத் தரங்களை நினைவில் கொள்க: 14e (N₂) -> 3.0, 15e -> 2.5, 16e (O₂) -> 2.0, 17e -> 1.5, 18e -> 1.0. இந்த முறை முழு அமைப்பையும் எழுதாமல் நிலைப்புத்தன்மையை விரைவாக தீர்மானிக்க உங்களை அனுமதிக்கிறது."
        },
        {
            title: "NEET Level: Hybridization and Bond Angles",
            titleTamil: "நீட் நிலை: இனக்கலத்தல் மற்றும் பிணைப்புக் கோணங்கள்",
            difficulty: 'Medium',
            problem: "Compare the bond angles of CH₄, NH₃, and H₂O.",
            problemTamil: "CH₄, NH₃, மற்றும் H₂O ஆகியவற்றின் பிணைப்புக் கோணங்களை ஒப்பிடுக.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Determine the hybridization of the central atom in each molecule. In all three cases (C, N, O), there are 4 electron pairs (bond pairs + lone pairs), so the hybridization is sp³.",
                    explanationTamil: "ஒவ்வொரு மூலக்கூறிலும் மைய அணுவின் இனக்கலத்தலைத் தீர்மானிக்கவும். மூன்று சந்தர்ப்பங்களிலும் (C, N, O), 4 எலக்ட்ரான் இரட்டைகள் (பிணைப்பு இரட்டைகள் + தனித்த இரட்டைகள்) உள்ளன, எனவே இனக்கலத்தல் sp³ ஆகும்."
                },
                {
                    step: 2,
                    explanation: "The ideal geometry for sp³ hybridization is tetrahedral with a bond angle of 109.5°.",
                    explanationTamil: "sp³ இனக்கலத்தலுக்கான இலட்சிய வடிவியல் 109.5° பிணைப்புக் கோணத்துடன் நான்முகி ஆகும்."
                },
                {
                    step: 3,
                    explanation: "Analyze the number of lone pairs on the central atom. CH₄: 0 LP. NH₃: 1 LP. H₂O: 2 LPs.",
                    explanationTamil: "மைய அணுவில் உள்ள தனித்த இரட்டைகளின் எண்ணிக்கையை பகுப்பாய்வு செய்யவும். CH₄: 0 LP. NH₃: 1 LP. H₂O: 2 LPs."
                },
                {
                    step: 4,
                    explanation: "According to VSEPR theory, lone pair-bond pair repulsion is stronger than bond pair-bond pair repulsion. Lone pairs push the bond pairs closer together, reducing the bond angle.",
                    explanationTamil: "VSEPR கோட்பாட்டின் படி, தனித்த இரட்டை-பிணைப்பு இரட்டை விலக்கு, பிணைப்பு இரட்டை-பிணைப்பு இரட்டை விலக்கை விட வலிமையானது. தனித்த இரட்டைகள் பிணைப்பு இரட்டைகளை நெருக்கமாகத் தள்ளுகின்றன, இது பிணைப்புக் கோணத்தைக் குறைக்கிறது."
                },
                {
                    step: 5,
                    explanation: "More lone pairs cause greater repulsion and a smaller bond angle. Therefore, the order of bond angles is CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°).",
                    explanationTamil: "அதிக தனித்த இரட்டைகள் அதிக விலக்கத்தையும், ஒரு சிறிய பிணைப்புக் கோணத்தையும் ஏற்படுத்துகின்றன. எனவே, பிணைப்புக் கோணங்களின் வரிசை CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°) ஆகும்."
                }
            ],
            commonPitfall: "Assuming that all sp³ hybridized molecules have a 109.5° bond angle. The presence of lone pairs always distorts the ideal geometry.",
            commonPitfallTamil: "அனைத்து sp³ இனக்கலப்பு மூலக்கூறுகளும் 109.5° பிணைப்புக் கோணத்தைக் கொண்டுள்ளன என்று கருதுவது. தனித்த இரட்டைகளின் இருப்பு எப்போதும் இலட்சிய வடிவவியலை சிதைக்கிறது."
        },
        {
            title: "JEE Level: Dipole Moment",
            titleTamil: "ஜே.இ.இ நிலை: இருமுனைத் திருப்புத்திறன்",
            difficulty: 'Medium',
            problem: "Explain why NF₃ has a smaller dipole moment than NH₃, even though fluorine is more electronegative than hydrogen.",
            problemTamil: "ஃபுளோரின் ஹைட்ரஜனை விட அதிக எலக்ட்ரான் கவர்தன்மை கொண்டிருந்தாலும், NF₃ ஏன் NH₃ ஐ விட சிறிய இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது என்பதை விளக்கவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Both NH₃ and NF₃ have a pyramidal shape with one lone pair, due to sp³ hybridization of Nitrogen.",
                    explanationTamil: "NH₃ மற்றும் NF₃ இரண்டும் நைட்ரஜனின் sp³ இனக்கலத்தல் காரணமாக, ஒரு தனித்த இரட்டையுடன் ஒரு பிரமிடு வடிவத்தைக் கொண்டுள்ளன."
                },
                {
                    step: 2,
                    explanation: "In NH₃, the N-H bond dipoles point from H towards N. The orbital dipole due to the lone pair also points away from the N atom in the same general direction. The resultant dipole moment is the sum of these vectors.",
                    explanationTamil: "NH₃ இல், N-H பிணைப்பு இருமுனைகள் H-இலிருந்து N-ஐ நோக்கிச் செல்கின்றன. தனித்த இரட்டையின் காரணமாக ஏற்படும் ஆர்பிட்டால் இருமுனையும் N அணுவிலிருந்து அதே பொது திசையில் விலகிச் செல்கிறது. விளைவு இருமுனைத் திருப்புத்திறன் இந்த வெக்டர்களின் கூடுதலாகும்."
                },
                {
                    step: 3,
                    explanation: "In NF₃, Fluorine is more electronegative than Nitrogen. So, the N-F bond dipoles point away from N towards each F atom.",
                    explanationTamil: "NF₃ இல், ஃபுளோரின் நைட்ரஜனை விட அதிக எலக்ட்ரான் கவர்தன்மை கொண்டது. எனவே, N-F பிணைப்பு இருமுனைகள் N-இலிருந்து விலகி ஒவ்வொரு F அணுவை நோக்கியும் செல்கின்றன."
                },
                {
                    step: 4,
                    explanation: "The orbital dipole of the lone pair points away from N, but in the opposite direction to the resultant of the three N-F bond dipoles. A significant portion of the bond dipole moments cancels out the orbital dipole moment.",
                    explanationTamil: "தனித்த இரட்டையின் ஆர்பிட்டால் இருமுனை N-இலிருந்து விலகிச் செல்கிறது, ஆனால் மூன்று N-F பிணைப்பு இருமுனைகளின் விளைவுக்கு எதிர் திசையில் உள்ளது. பிணைப்பு இருமுனைத் திருப்புத்திறன்களின் ஒரு குறிப்பிடத்தக்க பகுதி ஆர்பிட்டால் இருமுனைத் திருப்புத்திறனை நீக்குகிறது."
                },
                {
                    step: 5,
                    explanation: "Due to this partial cancellation in NF₃, its net dipole moment is much smaller than that of NH₃, where the dipoles add up.",
                    explanationTamil: "NF₃ இல் இந்த பகுதி நீக்கத்தின் காரணமாக, அதன் நிகர இருமுனைத் திருப்புத்திறன் NH₃ ஐ விட மிகவும் சிறியது, அங்கு இருமுனைகள் கூட்டப்படுகின்றன."
                }
            ],
            commonPitfall: "Only considering bond polarity and ignoring the effect of the lone pair's orbital dipole and the overall vector sum.",
            commonPitfallTamil: "பிணைப்பு முனைவுத்தன்மையை மட்டும் கருத்தில் கொண்டு, தனித்த இரட்டையின் ஆர்பிட்டால் இருமுனை மற்றும் ஒட்டுமொத்த வெக்டர் கூடுதலின் விளைவைப் புறக்கணிப்பது."
        },
        {
            title: "NEET Level: Identifying Polar Molecules",
            titleTamil: "நீட் நிலை: முனைவுற்ற மூலக்கூறுகளை அடையாளம் காணுதல்",
            difficulty: 'Easy',
            problem: "Which of the following molecules has a zero dipole moment: H₂O, CO₂, SO₂, NH₃?",
            problemTamil: "பின்வரும் மூலக்கூறுகளில் எது சுழி இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது: H₂O, CO₂, SO₂, NH₃?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "A molecule has a zero dipole moment if its individual bond dipoles cancel each other out due to a symmetrical shape.",
                    explanationTamil: "ஒரு சமச்சீர் வடிவத்தின் காரணமாக அதன் தனிப்பட்ட பிணைப்பு இருமுனைகள் ஒன்றையொன்று நீக்கினால், ஒரு மூலக்கூறு சுழி இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது."
                },
                {
                    step: 2,
                    explanation: "H₂O is bent (V-shape) and has a net dipole moment.",
                    explanationTamil: "H₂O வளைந்த வடிவம் கொண்டது மற்றும் நிகர இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது."
                },
                {
                    step: 3,
                    explanation: "NH₃ is pyramidal and has a net dipole moment.",
                    explanationTamil: "NH₃ பிரமிடு வடிவம் கொண்டது மற்றும் நிகர இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது."
                },
                 {
                    step: 4,
                    explanation: "SO₂ is bent (like water) and has a net dipole moment.",
                    explanationTamil: "SO₂ வளைந்த வடிவம் கொண்டது மற்றும் நிகர இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது."
                },
                {
                    step: 5,
                    explanation: "CO₂ is a linear molecule (O=C=O). The two C=O bond dipoles are equal and opposite, so they cancel each other out completely.",
                    explanationTamil: "CO₂ ஒரு நேர்கோட்டு மூலக்கூறு (O=C=O). இரண்டு C=O பிணைப்பு இருமுனைகளும் சமமாகவும் எதிராகவும் உள்ளன, எனவே அவை ஒன்றையொன்று முழுமையாக நீக்குகின்றன."
                },
                {
                    step: 6,
                    explanation: "Therefore, CO₂ has a zero dipole moment.",
                    explanationTamil: "எனவே, CO₂ சுழி இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளது."
                }
            ],
            neetHack: "Symmetrical molecules like CO₂, BF₃, CH₄, CCl₄, PCl₅, and SF₆ have zero dipole moment even though their bonds are polar.",
            neetHackTamil: "CO₂, BF₃, CH₄, CCl₄, PCl₅, மற்றும் SF₆ போன்ற சமச்சீர் மூலக்கூறுகள் அவற்றின் பிணைப்புகள் முனைவுற்றதாக இருந்தாலும், சுழி இருமுனைத் திருப்புத்திறனைக் கொண்டுள்ளன."
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    keyTakeaways: [],
    mnemonics: [],
    neetTips: [],
    nextChapter: {
        title: "Chemical Thermodynamics",
        titleTamil: "வேதி வெப்ப இயக்கவியல்"
    },
    studentTip: {
        english: "Understanding molecular geometry is like learning to see in 3D. Practice drawing the shapes predicted by VSEPR theory to develop a strong intuition for them.",
        tamil: "மூலக்கூறு வடிவவியலைப் புரிந்துகொள்வது 3D இல் பார்க்கக் கற்றுக்கொள்வது போன்றது. VSEPR கோட்பாட்டால் கணிக்கப்பட்ட வடிவங்களை வரைந்து பயிற்சி செய்வது அவற்றுக்கான ஒரு வலுவான உள்ளுணர்வை வளர்க்க உதவும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why does the bond angle in H₂O (104.5°) deviate more from the ideal tetrahedral angle than in NH₃ (107°)?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: NH₃ (107°) ஐ விட H₂O இல் (104.5°) பிணைப்புக் கோணம் ஏன் இலட்சிய நான்முகி கோணத்திலிருந்து அதிகமாக விலகுகிறது?"
    },
    validationReport: []
};

