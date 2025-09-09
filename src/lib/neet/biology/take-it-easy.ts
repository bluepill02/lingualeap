
import type { NeetModule } from '@/lib/types';

export const module: NeetModule = {
    id: 'take-it-easy',
    title: "Take it Easy: Complex Topics Simplified",
    chapter: "Special Module: Human Physiology & Genetics",
    subject: 'Biology',
    learningObjectives: [
        "Simplify the intricate processes of human organ systems, focusing on neural and endocrine coordination.",
        "Master the principles of Mendelian inheritance and solve common genetic cross problems.",
        "Understand the molecular basis of inheritance, including DNA replication and protein synthesis.",
        "Clarify complex evolutionary concepts like natural selection and Hardy-Weinberg equilibrium."
    ],
    prerequisites: [
        "Basic knowledge of cell structure and function.",
        "General understanding of human organ systems.",
        "Familiarity with basic chemical concepts like molecules and bonds."
    ],
    conceptNotes: [
        {
            heading: {
                english: "Human Physiology: Neural Control & Coordination",
                tamil: "மனித உடலியல்: நரம்பு கட்டுப்பாடு மற்றும் ஒருங்கிணைப்பு"
            },
            content: [
                {
                    english: "The nervous system's basic unit is the neuron. Think of it as an electrical wire. The key event is the 'Action Potential' - a rapid change in electrical potential across the neuron's membrane. It's an all-or-nothing event, like flipping a switch.",
                    tamil: "நரம்பு மண்டலத்தின் அடிப்படை அலகு நியூரான். அதை ஒரு மின்சாரக் கம்பி என்று நினையுங்கள். முக்கிய நிகழ்வு 'செயல் மின்னழுத்தம்' - இது நியூரானின் சவ்வு முழுவதும் மின் ஆற்றலில் ஏற்படும் விரைவான மாற்றம். இது ஒரு சுவிட்சைப் போடுவது போன்ற ஒரு முழுமையான நிகழ்வு."
                },
                {
                    english: "**Simplified Steps of Nerve Impulse Transmission:**\n1.  **Resting State:** The neuron is polarized (more negative inside). Key player: Sodium-Potassium Pump (Na⁺/K⁺ pump) actively keeps Sodium (Na⁺) out and Potassium (K⁺) in.\n2.  **Stimulus & Depolarization:** A stimulus causes Sodium channels to open. Na⁺ ions rush *in*, making the inside positive. This is the nerve impulse!\n3.  **Repolarization:** Immediately after, Potassium channels open. K⁺ ions rush *out*, making the inside negative again.\n4.  **Synapse:** At the end of the neuron, the electrical signal triggers the release of chemicals called **neurotransmitters** (e.g., Acetylcholine) into a tiny gap (synapse). These chemicals then trigger the next neuron, passing the message along.",
                    tamil: "**நரம்புத் தூண்டல் கடத்தலின் எளிமையான படிகள்:**\n1.  **ஓய்வு நிலை:** நியூரான் முனைவாக்கம் அடைந்துள்ளது (உள்ளே அதிக எதிர்மறை). முக்கியப் பங்கு: சோடியம்-பொட்டாசியம் பம்ப் (Na⁺/K⁺ பம்ப்) சோடியத்தை (Na⁺) வெளியேயும் பொட்டாசியத்தை (K⁺) உள்ளேயும் சுறுசுறுப்பாக வைத்திருக்கிறது.\n2.  **தூண்டுதல் & முனைவிழத்தல்:** ஒரு தூண்டுதல் சோடியம் கால்வாய்களைத் திறக்கச் செய்கிறது. Na⁺ அயனிகள் *உள்ளே* பாய்ந்து, உள்ளே நேர்மறையாகிறது. இதுவே நரம்புத் தூண்டல்!\n3.  **மறுமுனைவாக்கம்:** உடனடியாக, பொட்டாசியம் கால்வாய்கள் திறக்கின்றன. K⁺ அயனிகள் *வெளியே* பாய்ந்து, உள்ளே மீண்டும் எதிர்மறையாகிறது.\n4.  **நரம்பிணைப்பு (Synapse):** நியூரானின் முடிவில், மின் сигнал **நரம்பியக்கடத்திகள்** (எ.கா., அசிடைல்கொலின்) எனப்படும் வேதிப்பொருட்களை ஒரு சிறிய இடைவெளியில் (நரம்பிணைப்பு) வெளியிடுகிறது. இந்த வேதிப்பொருட்கள் அடுத்த நியூரானைத் தூண்டி, செய்தியைக் கடத்துகின்றன."
                }
            ]
        },
        {
            heading: {
                english: "Human Physiology: Endocrine System (Chemical Coordination)",
                tamil: "மனித உடலியல்: நாளமில்லாச் சுரப்பி மண்டலம் (வேதியியல் ஒருங்கிணைப்பு)"
            },
            content: [
                {
                    english: "This system uses chemical messengers called **hormones** that travel through the blood. It's slower than the nervous system but has longer-lasting effects. Analogy: The nervous system is like sending a text message (fast, direct), while the endocrine system is like sending a letter by post (slower, broader audience).",
                    tamil: "இந்த அமைப்பு இரத்தத்தின் மூலம் பயணிக்கும் **ஹார்மோன்கள்** எனப்படும் வேதியியல் தூதர்களைப் பயன்படுத்துகிறது. இது நரம்பு மண்டலத்தை விட மெதுவானது ஆனால் நீண்ட காலம் நீடிக்கும் விளைவுகளைக் கொண்டுள்ளது. ஒப்புமை: நரம்பு மண்டலம் ஒரு குறுஞ்செய்தி அனுப்புவதைப் போன்றது (வேகமானது, நேரடியானது), நாளமில்லாச் சுரப்பி மண்டலம் தபாலில் ஒரு கடிதம் அனுப்புவதைப் போன்றது (மெதுவானது, பரந்த பார்வையாளர்கள்)."
                },
                {
                    english: `{{TABLE_PLACEHOLDER:ENDOCRINE}}`,
                    tamil: `{{TABLE_PLACEHOLDER:ENDOCRINE}}`
                }
            ]
        },
        {
            heading: {
                english: "Genetics Part 1: Mendelian Inheritance",
                tamil: "மரபியல் பகுதி 1: மெண்டலியன் பரம்பரை"
            },
            content: [
                 {
                    english: "This is the foundation of genetics. The key is understanding **dominant** and **recessive** alleles. A dominant allele (like 'T' for tall) will show its trait even if only one copy is present (TT or Tt). A recessive allele ('t' for dwarf) only shows its trait if two copies are present (tt).",
                    tamil: "இது மரபியலின் அடித்தளம். **ஓங்கு** மற்றும் **ஒடுங்கு** அல்லீல்களைப் புரிந்துகொள்வதே முக்கியம். ஒரு ஓங்கு அல்லீல் ('T' உயரத்திற்கு) ஒரு பிரதி இருந்தாலும் (TT அல்லது Tt) அதன் பண்பைக் காட்டும். ஒரு ஒடுங்கு அல்லீல் ('t' குள்ளத்திற்கு) இரண்டு பிரதிகள் இருந்தால் மட்டுமே (tt) அதன் பண்பைக் காட்டும்."
                },
                 {
                    english: "The **Punnett Square** is your most powerful tool here. It helps predict the outcome of a genetic cross. For a monohybrid cross (like Tt x Tt), you get a phenotypic ratio of 3 Tall : 1 Dwarf and a genotypic ratio of 1 TT : 2 Tt : 1 tt.",
                    tamil: "**பன்னட் சதுரம்** இங்கு உங்கள் சக்திவாய்ந்த கருவியாகும். இது ஒரு மரபணு கலப்பின் முடிவைக் கணிக்க உதவுகிறது. ஒரு மோனோஹைப்ரிட் கலப்பிற்கு (Tt x Tt போன்றவை), நீங்கள் 3 உயரமான : 1 குள்ளமான என்ற தோற்ற விகிதத்தையும், 1 TT : 2 Tt : 1 tt என்ற மரபணு விகிதத்தையும் பெறுவீர்கள்."
                }
            ]
        },
        {
            heading: {
                english: "Genetics Part 2: Molecular Basis of Inheritance",
                tamil: "மரபியல் பகுதி 2: பரம்பரையின் மூலக்கூறு அடிப்படை"
            },
            content: [
                 {
                    english: "The 'Central Dogma' of molecular biology is: **DNA → (transcription) → RNA → (translation) → Protein**. This is how the genetic code in DNA is used to build the proteins that make up an organism.",
                    tamil: "மூலக்கூறு உயிரியலின் 'மையக் கோட்பாடு': **DNA → (படியெடுத்தல்) → RNA → (மொழிபெயர்த்தல்) → புரதம்**. டிஎன்ஏவில் உள்ள மரபணுக் குறியீடு ஒரு உயிரினத்தை உருவாக்கும் புரதங்களைக் கட்டமைக்கப் பயன்படுகிறது."
                },
                 {
                    english: "**DNA Replication:** The process of making an identical copy of DNA. It's 'semiconservative' because each new DNA molecule has one old strand and one new strand. The key enzyme is **DNA Polymerase**.\n\n**Transcription:** Making an RNA copy from a DNA template. Key enzyme: **RNA Polymerase**.\n\n**Translation:** Reading the RNA message (in three-letter 'codons') to build a protein. This happens on **ribosomes**.",
                    tamil: "**டிஎன்ஏ இரட்டித்தல்:** டிஎன்ஏவின் ஒரு சரியான நகலை உருவாக்கும் செயல்முறை. இது 'பாதி-பழமையானது' ஏனெனில் ஒவ்வொரு புதிய டிஎன்ஏ மூலக்கூறும் ஒரு பழைய இழையையும் ஒரு புதிய இழையையும் கொண்டுள்ளது. முக்கிய நொதி **டிஎன்ஏ பாலிமரேஸ்**.\n\n**படியெடுத்தல்:** ஒரு டிஎன்ஏ வார்ப்புருவிலிருந்து ஒரு ஆர்என்ஏ நகலை உருவாக்குதல். முக்கிய நொதி: **ஆர்என்ஏ பாலிமரேஸ்**.\n\n**மொழிபெயர்த்தல்:** ஒரு புரதத்தை உருவாக்க ஆர்என்ஏ செய்தியை ('கோடான்கள்' எனப்படும் மூன்று எழுத்துக்களில்) படித்தல். இது **ரைபோசோம்களில்** நடக்கிறது."
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "Dihybrid Cross Problem",
            titleTamil: "இருபண்புக் கலப்பு கணக்கு",
            difficulty: 'Hard',
            problem: "In pea plants, round seeds (R) are dominant to wrinkled seeds (r), and yellow seeds (Y) are dominant to green seeds (y). A plant heterozygous for both traits (RrYy) is self-pollinated. What is the probability of getting offspring with round seeds and green seeds?",
            problemTamil: "பட்டாணிச் செடிகளில், உருண்டை விதைகள் (R) சுருங்கிய விதைகளுக்கு (r) ஓங்கு பண்பாகவும், மஞ்சள் விதைகள் (Y) பச்சை விதைகளுக்கு (y) ஓங்கு பண்பாகவும் உள்ளன. இரு பண்புகளுக்கும் பல்லினக் கலப்பு கொண்ட ஒரு செடி (RrYy) தன்மகரந்தச் சேர்க்கைக்கு உட்படுத்தப்படுகிறது. உருண்டை விதைகள் மற்றும் பச்சை விதைகளைக் கொண்ட சந்ததியைப் பெறுவதற்கான நிகழ்தகவு என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "First, determine the possible gametes from the parent (RrYy). Using the FOIL method (First, Outer, Inner, Last), we get four types of gametes.",
                    explanationTamil: "முதலில், பெற்றோர் (RrYy) இலிருந்து சாத்தியமான கேமட்களைக் கண்டறியவும். FOIL முறையைப் பயன்படுத்தி (முதல், வெளி, உள், கடைசி), நாம் நான்கு வகையான கேமட்களைப் பெறுகிறோம்.",
                    calculation: "Gametes: RY, Ry, rY, ry"
                },
                {
                    step: 2,
                    explanation: "Set up a 4x4 Punnett square with these gametes for both parents since it's a self-cross.",
                    explanationTamil: "இது ஒரு தற்கலப்பு என்பதால், இரு பெற்றோருக்கும் இந்த கேமட்களுடன் ஒரு 4x4 பன்னட் சதுரத்தை அமைக்கவும்."
                },
                {
                    step: 3,
                    explanation: "Fill in the Punnett square. We are looking for the phenotype 'round and green'. This corresponds to genotypes that have at least one 'R' and must have 'yy'. The possible genotypes are RRYy and RrYy.",
                    explanationTamil: "பன்னட் சதுரத்தை நிரப்பவும். நாம் 'உருண்டை மற்றும் பச்சை' தோற்ற வகையைத் தேடுகிறோம். இது குறைந்தபட்சம் ஒரு 'R' மற்றும் கண்டிப்பாக 'yy' கொண்ட மரபணு வகைகளுக்குப் பொருந்தும். சாத்தியமான மரபணு வகைகள் Rryy மற்றும் Rryy ஆகும்."
                },
                {
                    step: 4,
                    explanation: "Count the number of boxes in the Punnett square that match the desired genotypes (Rryy or Rryy).",
                    explanationTamil: "பன்னட் சதுரத்தில் விரும்பிய மரபணு வகைகளுடன் (Rryy அல்லது Rryy) பொருந்தும் கட்டங்களின் எண்ணிக்கையை எண்ணவும்."
                },
                 {
                    step: 5,
                    explanation: "Alternatively, use probability. The probability of getting 'round' (RR or Rr) from a Rr x Rr cross is 3/4. The probability of getting 'green' (yy) from a Yy x Yy cross is 1/4.",
                    explanationTamil: "மாற்றாக, நிகழ்தகவைப் பயன்படுத்தவும். ஒரு Rr x Rr கலப்பிலிருந்து 'உருண்டை' (RR அல்லது Rr) பெறுவதற்கான நிகழ்தகவு 3/4. ஒரு Yy x Yy கலப்பிலிருந்து 'பச்சை' (yy) பெறுவதற்கான நிகழ்தகவு 1/4."
                },
                 {
                    step: 6,
                    explanation: "Multiply the independent probabilities to get the final answer.",
                    explanationTamil: "இறுதி பதிலைப் பெற சுயாதீன நிகழ்தகவுகளைப் பெருக்கவும்.",
                    calculation: "P(round and green) = P(round) * P(green) = (3/4) * (1/4) = 3/16"
                }
            ],
            answer: "The probability of getting offspring with round seeds and green seeds is 3/16.",
            neetHack: "For a standard dihybrid cross (RrYy x RrYy), always remember the phenotypic ratio 9:3:3:1. The '3's represent the combinations of one dominant and one recessive trait. So, Round/green and wrinkled/yellow will both be 3/16. This saves time from drawing a full Punnett square in the exam.",
            neetHackTamil: "ஒரு நிலையான இருபண்புக் கலப்பிற்கு (RrYy x RrYy), எப்போதும் 9:3:3:1 என்ற தோற்ற விகிதத்தை நினைவில் கொள்ளுங்கள். '3'கள் ஒரு ஓங்கு மற்றும் ஒரு ஒடுங்கு பண்பின் சேர்க்கைகளைக் குறிக்கின்றன. எனவே, உருண்டை/பச்சை மற்றும் சுருங்கிய/மஞ்சள் இரண்டும் 3/16 ஆக இருக்கும். இது தேர்வில் ஒரு முழு பன்னட் சதுரத்தை வரைவதிலிருந்து நேரத்தை மிச்சப்படுத்துகிறது."
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Human physiology is a story of coordination between the fast, electrical nervous system and the slow, chemical endocrine system.",
        "Genetics follows predictable mathematical rules (Mendel's Laws), which can be visualized with Punnett squares.",
        "The Central Dogma (DNA -> RNA -> Protein) is the fundamental process that translates genetic code into functional life."
    ],
    validationReport: []
};

// Helper function to create the table markdown
function createEndocrineTable() {
    const headers = ["Gland (சுரப்பி)", "Hormone (ஹார்மோன்)", "Function (செயல்பாடு)"];
    const rows = [
        ["Pituitary (பிட்யூட்டரி)", "Growth Hormone (GH)", "Stimulates growth (வளர்ச்சியைத் தூண்டுகிறது)"],
        ["Thyroid (தைராய்டு)", "Thyroxine (தைராக்ஸின்)", "Regulates metabolism (வளர்சிதை மாற்றத்தை ஒழுங்குபடுத்துகிறது)"],
        ["Pancreas (கணையம்)", "Insulin (இன்சுலின்)", "Lowers blood sugar (இரத்த சர்க்கரையைக் குறைக்கிறது)"],
        ["Adrenal (அட்ரீனல்)", "Adrenaline (அட்ரினலின்)", "Prepares body for 'fight or flight' (சண்டை அல்லது விமானத்திற்கு உடலைத் தயார்படுத்துகிறது)"]
    ];

    let table = `| ${headers.join(" | ")} |\n`;
    table += `|${headers.map(() => '---').join('|')}|\n`;
    rows.forEach(row => {
        table += `| ${row.join(" | ")} |\n`;
    });
    return table;
}

// Inject the table into the content
const endocrineTableMarkdown = createEndocrineTable();
const conceptNoteWithTable = module.conceptNotes?.find(note => note.heading?.english.includes("Endocrine System"));
if (conceptNoteWithTable && 'content' in conceptNoteWithTable) {
    const placeholderIndex = conceptNoteWithTable.content.findIndex(item => typeof item === 'object' && item.english.includes("{{TABLE_PLACEHOLDER:ENDOCRINE}}"));
    if (placeholderIndex !== -1) {
        (conceptNoteWithTable.content[placeholderIndex] as any).english = endocrineTableMarkdown;
        (conceptNoteWithTable.content[placeholderIndex] as any).tamil = ''; // Tamil is already in the table
    }
}
