
import type { NeetModule } from '@/lib/types';

export const ecologyAndEnvironment: NeetModule = {
    id: 'neet-biology-ecology-and-environment',
    title: 'Ecology and Environment',
    chapter: 'Ecology and Environment',
    subject: 'Biology',
    learningObjectives: [
        "Understand the concepts of organisms, populations, communities, and ecosystems.",
        "Analyze population interactions like mutualism, competition, predation, and parasitism.",
        "Describe the components of an ecosystem and concepts like productivity, decomposition, and energy flow (food chains, food webs).",
        "Explain different ecological pyramids and biogeochemical cycles (carbon, phosphorus).",
        "Understand the concept of biodiversity, its patterns, importance, and threats.",
        "Discuss major environmental issues like pollution and climate change, and strategies for conservation."
    ],
    prerequisites: [
        "Basic understanding of different life forms (plants, animals, microbes).",
        "Knowledge of basic chemical cycles from earlier classes."
    ],
    conceptOverview: "Ecology is the study of the interactions among organisms and between organisms and their physical environment. This unit covers various levels of organization, from organisms and populations to ecosystems and biomes. It explores concepts like population interactions, nutrient cycling, energy flow, ecological pyramids, and biodiversity. Finally, it addresses pressing environmental issues like pollution and climate change, and the importance of biodiversity conservation.",
    tamilConnection: "சுற்றுச்சூழல் பாதுகாப்பு என்பது தமிழ் மரபில் ஆழமாக வேரூன்றியுள்ளது. 'மரம் வளர்த்தால், மழை பெறலாம்' போன்ற பழமொழிகள், சூழலியல் சமநிலையின் முக்கியத்துவத்தை உணர்த்துகின்றன. இந்த அத்தியாயம், உயிரினங்களுக்கும் அவற்றின் சுற்றுப்புறத்திற்கும் இடையிலான சிக்கலான வலைப்பின்னலை அறிவியல் ரீதியாக விளக்குகிறது.",
    culturalContext: "The concept of 'sacred groves' (கோவில் காடுகள்) found across Tamil Nadu is a traditional form of biodiversity conservation. These patches of forest protected on religious grounds act as reservoirs for native species. This aligns with the modern ecological concepts of 'in-situ conservation' and protecting biodiversity hotspots, which are discussed in this unit.",
    syllabusMapping: [{
        topic: 'Organisms and Populations, Ecosystem, Biodiversity, Environmental Issues',
        tnBoardChapter: '12th Std Botany Ch 9, 10; 12th Std Zoology Ch 11, 12',
        ncertReference: 'Class 12 Biology - Unit 10',
        notes: 'High weightage unit. Focus on population interactions, ecological pyramids, biodiversity hotspots, and pollution.',
        mappingDescription: 'Maps to the final ecology units in TN Board Std 12 Books.'
    }],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: [],
    keyTakeaways: [
        "Ecology deals with the interactions at four levels: organism, population, community, and ecosystem.",
        "Population interactions can be beneficial (+), detrimental (-), or neutral (0) to the interacting species.",
        "Energy flows unidirectionally through an ecosystem (from producers to consumers), while nutrients are cycled.",
        "Biodiversity is crucial for ecosystem stability and provides numerous ecosystem services.",
        "Human activities are the primary cause of major environmental issues like pollution, deforestation, and climate change."
    ],
    mnemonics: [
        { text: "For population interactions: Use '+', '-', '0'. Mutualism(+,+), Competition(-,-), Predation(+,-), Parasitism(+,-), Commensalism(+,0), Amensalism(-,0).", tamil: "மக்கள் தொகை தொடர்புகளுக்கு: '+', '-', '0' ஐப் பயன்படுத்தவும். ஒன்றியவாழ்வு(+,+), போட்டி(-,-), இரைகொல்லி(+,-), ஒட்டுண்ணி(+,-), உடன்வாழ்வு(+,0), எதிர்வாழ்வு(-,0)." }
    ],
    neetTips: [
        { text: "Ecological pyramids (of number, biomass, and energy) are a very important topic. Remember that the pyramid of energy is always upright.", tamil: "சூழலியல் கூம்புகள் (எண்ணிக்கை, உயிரி நிறை, மற்றும் ஆற்றல்) ஒரு மிக முக்கியமான தலைப்பு. ஆற்றல் கூம்பு எப்போதும் நேராக இருக்கும் என்பதை நினைவில் கொள்ளுங்கள்." },
        { text: "Questions related to biodiversity hotspots, in-situ vs. ex-situ conservation, and environmental acts/protocols (like Montreal Protocol, Kyoto Protocol) are frequently asked.", tamil: "பல்லுயிர் பெருக்கத்தின் முக்கிய இடங்கள், உள்ளிடப் பாதுகாப்பு vs. அயலிடப் பாதுகாப்பு, மற்றும் சுற்றுச்சூழல் சட்டங்கள்/நெறிமுறைகள் (மாண்ட்ரீல் நெறிமுறை, கியோட்டோ நெறிமுறை போன்றவை) தொடர்பான கேள்விகள் அடிக்கடி கேட்கப்படுகின்றன." }
    ],
    studentTip: {
        english: "Ecology is very relatable. Try to identify different population interactions in a garden or park near you. Observe a food chain. This will make the concepts less abstract.",
        tamil: "சூழலியல் மிகவும் தொடர்புபடுத்தக்கூடியது. உங்களுக்கு அருகிலுள்ள ஒரு தோட்டத்தில் அல்லது பூங்காவில் வெவ்வேறு மக்கள் தொகை தொடர்புகளை அடையாளம் காண முயற்சிக்கவும். ஒரு உணவுச் சங்கிலியைக் கவனிக்கவும். இது கருத்துக்களை குறைவான நுட்பமானதாக மாற்றும்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is the pyramid of energy always upright, while the pyramid of biomass can sometimes be inverted (e.g., in an aquatic ecosystem)?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: ஆற்றல் கூம்பு ஏன் எப்போதும் நேராக உள்ளது, அதேசமயம் உயிரி நிறைக் கூம்பு சில நேரங்களில் தலைகீழாக இருக்க முடியும் (எ.கா., ஒரு நீர்வாழ் சூழல் அமைப்பில்)?"
    },
    nextChapter: {
        title: "End of Biology Syllabus",
        titleTamil: "உயிரியல் பாடத்திட்டம் நிறைவுற்றது"
    },
    validationReport: []
};
