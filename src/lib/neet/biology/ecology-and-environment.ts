
import type { NeetModule } from '@/lib/types';

export const ecologyAndEnvironment: NeetModule = {
    id: 'neet-biology-ecology-and-environment',
    title: 'Biology - Ecology and Environment (சூழலியல் மற்றும் சுற்றுச்சூழல்)',
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
    stateBoardGaps: [
        "The concept of 'age pyramids' (expanding, stable, declining) and their shapes as predictors of future population growth is a key graphical representation in NCERT.",
        "Detailed descriptions of all population interactions with specific examples (e.g., orchid on mango for commensalism, cuckoo and crow for brood parasitism) are crucial.",
        "The 10% law of energy transfer in food chains and the reasons why the pyramid of energy is always upright are conceptually important NCERT topics.",
        "The concepts of Primary and Secondary Succession, including the pioneer species for hydrarch and xerarch succession, are detailed in NCERT.",
        "Specific data points related to biodiversity, such as Robert May's global species diversity estimate and the species-area relationship equation (S = CAᶻ), are frequently asked from NCERT."
    ],
    extraNeetConcepts: [
        "The 'Rivet Popper Hypothesis' proposed by Paul Ehrlich to explain the importance of species richness in an ecosystem.",
        "Distinction between 'Gross Primary Productivity' (GPP) and 'Net Primary Productivity' (NPP), where NPP = GPP - R (Respiration loss).",
        "Understanding the different types of biodiversity: genetic diversity, species diversity, and ecological diversity.",
        "Knowledge of international conventions and protocols for environmental protection, like the Montreal Protocol (for ozone depletion) and the Kyoto Protocol (for greenhouse gases)."
    ],
    ncertReadingGuide: [
        "In 'Organisms and Populations', Figure 13.5 (age pyramids) and Figure 13.6 (population density graphs) are very important for interpretation.",
        "The table summarizing population interactions (Table 13.1) is a high-yield source of questions. Memorize the signs (+, -, 0) for each interaction.",
        "In 'Ecosystem', diagrams of the phosphorus cycle (Figure 14.7) and carbon cycle (Figure 14.6) are important to understand the flow.",
        "The diagrams of ecological pyramids (Figure 14.4) are crucial. Understand why the pyramid of biomass can be inverted in an aquatic ecosystem.",
        "In 'Biodiversity and Conservation', the pie-charts representing biodiversity (Figure 15.1) are a source of direct recall questions on the relative numbers of different taxa.",
        "Memorize the list of biodiversity hotspots and the criteria for identifying them. Also, differentiate clearly between in-situ and ex-situ conservation methods with examples."
    ],
    mcqs: [
        {
            question: "The interaction between an orchid growing on a mango tree is an example of:",
            options: ["A. Parasitism", "B. Mutualism", "C. Commensalism", "D. Competition"],
            answer: "C. Commensalism",
            explanation: "In commensalism, one species benefits while the other is neither harmed nor benefited. The orchid gets a place to grow (benefit), while the mango tree is unaffected.",
            neetFrequency: 5
        },
        {
            question: "Which of the following is an example of ex-situ conservation?",
            options: ["A. National Park", "B. Biosphere Reserve", "C. Sacred Grove", "D. Seed Bank"],
            answer: "D. Seed Bank",
            explanation: "Ex-situ conservation involves protecting a species outside its natural habitat. Seed banks, botanical gardens, and zoological parks are examples. The others are forms of in-situ conservation.",
            neetFrequency: 4
        },
        {
            question: "The pyramid of energy in any ecosystem is always:",
            options: ["A. Upright", "B. Inverted", "C. Spindle-shaped", "D. Can be upright or inverted"],
            answer: "A. Upright",
            explanation: "Energy transfer between trophic levels is always inefficient (around 10% efficiency). Energy always decreases at each successive trophic level, so the pyramid of energy is always upright.",
            neetFrequency: 5
        },
        {
            question: "The Montreal Protocol aims to:",
            options: ["A. Reduce greenhouse gas emissions", "B. Control water pollution", "C. Protect biodiversity", "D. Control the emission of ozone-depleting substances"],
            answer: "D. Control the emission of ozone-depleting substances",
            explanation: "The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out the production of substances like CFCs.",
            neetFrequency: 4
        },
        {
            question: "The term 'Biochemical Oxygen Demand (BOD)' is a measure of:",
            options: ["A. The amount of oxygen in the water", "B. The amount of organic matter in water", "C. The industrial pollution", "D. The amount of carbon dioxide in water"],
            answer: "B. The amount of organic matter in water",
            explanation: "BOD is the amount of dissolved oxygen needed by aerobic bacteria to break down the organic material present in a given water sample. A high BOD indicates high pollution.",
            neetFrequency: 3
        },
        { question: "An age pyramid with a broad base indicates:", options: ["A. A stable population", "B. A declining population", "C. An expanding population", "D. A population with high mortality"], answer: "C. An expanding population", explanation: "A broad base indicates a high proportion of pre-reproductive individuals, which will lead to population growth in the future.", neetFrequency: 4 },
        { question: "The process of decomposition is fastest in:", options: ["A. Cold and anaerobic conditions", "B. Warm and moist conditions", "C. Dry and cold conditions", "D. Acidic and dry conditions"], answer: "B. Warm and moist conditions", explanation: "Warmth and moisture favor the activity of decomposer microbes, accelerating the process.", neetFrequency: 3 },
        { question: "Which of the following is considered a 'hotspot' of biodiversity in India?", options: ["A. Indo-Gangetic Plain", "B. Western Ghats", "C. Thar Desert", "D. Eastern Ghats"], answer: "B. Western Ghats", explanation: "The Western Ghats, along with the Himalayas and the Indo-Burma region, are recognized as biodiversity hotspots in India.", neetFrequency: 4 },
        { question: "The equation for the species-area relationship is:", options: ["A. log S = log C + Z log A", "B. log S = log Z + C log A", "C. log C = log S + Z log A", "D. S = C A²"], answer: "A. log S = log C + Z log A", explanation: "The relationship is S = CAᶻ. Taking the logarithm on both sides gives log S = log C + Z log A, which is the equation of a straight line.", neetFrequency: 3 },
        { question: "Which of the following is a primary pollutant?", options: ["A. Ozone (O₃)", "B. Peroxyacyl nitrate (PAN)", "C. Sulphur dioxide (SO₂)", "D. Acid rain"], answer: "C. Sulphur dioxide (SO₂)", explanation: "Primary pollutants are emitted directly from a source. SO₂ is emitted from burning fossil fuels. Ozone, PAN, and acid rain are secondary pollutants formed from reactions in the atmosphere.", neetFrequency: 2 },
        { question: "The term 'niche' refers to:", options: ["A. The specific place where an organism lives", "B. The range of temperatures an organism can tolerate", "C. The functional role of a species in its ecosystem", "D. The group of organisms of the same species"], answer: "C. The functional role of a species in its ecosystem", explanation: "A niche includes not just the physical space but also the organism's role (its profession), including its resource utilization and interactions with other species.", neetFrequency: 3 },
        { question: "Mycorrhiza is an example of:", options: ["A. Parasitism", "B. Predation", "C. Commensalism", "D. Mutualism"], answer: "D. Mutualism", explanation: "Mycorrhiza is a symbiotic association between a fungus and the roots of a higher plant. The fungus helps in nutrient absorption, and the plant provides carbohydrates.", neetFrequency: 4 },
        { question: "The 10% law of energy transfer in a food chain was given by:", options: ["A. Tansley", "B. Odum", "C. Lindeman", "D. Haeckel"], answer: "C. Lindeman", explanation: "Raymond Lindeman proposed the ten percent law, stating that only about 10% of the energy is transferred from one trophic level to the next.", neetFrequency: 2 },
        { question: "Which of the following ecosystems has the highest gross primary productivity?", options: ["A. Deserts", "B. Tropical rainforests", "C. Temperate forests", "D. Grasslands"], answer: "B. Tropical rainforests", explanation: "Tropical rainforests have high temperature, high rainfall, and abundant sunlight throughout the year, leading to very high productivity.", neetFrequency: 3 },
        { question: "Eutrophication of a water body leads to:", options: ["A. An increase in dissolved oxygen", "B. An increase in biodiversity", "C. An increase in water transparency", "D. A depletion of oxygen and death of aquatic animals"], answer: "D. A depletion of oxygen and death of aquatic animals", explanation: "Eutrophication is the nutrient enrichment of a water body, causing excessive algal growth. The decomposition of these algae consumes a large amount of dissolved oxygen, leading to hypoxia and fish kills.", neetFrequency: 4 },
        { question: "The pioneer species in a xerarch succession are usually:", options: ["A. Mosses", "B. Herbs", "C. Lichens", "D. Shrubs"], answer: "C. Lichens", explanation: "Lichens are able to colonize bare rock surfaces and are the pioneer species in a primary succession on rock (xerarch).", neetFrequency: 2 },
        { question: "The phenomenon where a species' distribution is restricted to a small geographical area is called:", options: ["A. Pandemic", "B. Endemism", "C. Mutualism", "D. Migration"], answer: "B. Endemism", explanation: "Endemic species are those that are found only in a particular region and nowhere else in the world.", neetFrequency: 3 },
        { question: "The main cause of acid rain is:", options: ["A. Carbon dioxide and carbon monoxide", "B. Sulphur dioxide and nitrogen oxides", "C. Methane and ozone", "D. CFCs and hydrocarbons"], answer: "B. Sulphur dioxide and nitrogen oxides", explanation: "SO₂ and NOx released from burning fossil fuels react with water vapor in the atmosphere to form sulfuric acid and nitric acid, which fall as acid rain.", neetFrequency: 3 },
        { question: "Which of the following is an example of a gaseous biogeochemical cycle?", options: ["A. Phosphorus cycle", "B. Sulphur cycle", "C. Carbon cycle", "D. Both B and C"], answer: "D. Both B and C", explanation: "In gaseous cycles, the reservoir is the atmosphere. Both the carbon cycle (as CO₂) and the sulphur cycle (as SO₂) have a significant atmospheric component. The phosphorus cycle is a sedimentary cycle.", neetFrequency: 2 },
        { question: "The 'Rivet Popper Hypothesis' was given by:", options: ["A. Alexander von Humboldt", "B. David Tilman", "C. Paul Ehrlich", "D. Edward Wilson"], answer: "C. Paul Ehrlich", explanation: "Paul Ehrlich used the analogy of rivets on an airplane to explain the importance of each species in an ecosystem.", neetFrequency: 1 },
        { question: "The relationship between a sea anemone and a clownfish is an example of:", options: ["A. Amensalism", "B. Parasitism", "C. Commensalism", "D. Mutualism"], answer: "C. Commensalism", explanation: "The clownfish gets protection from predators by living among the stinging tentacles of the sea anemone, while the anemone is largely unaffected.", neetFrequency: 3 },
        { question: "The correct sequence of stages in a primary succession on land is:", options: ["A. Lichens -> Mosses -> Grasses -> Shrubs -> Trees", "B. Grasses -> Shrubs -> Lichens -> Mosses -> Trees", "C. Mosses -> Lichens -> Grasses -> Shrubs -> Trees", "D. Trees -> Shrubs -> Grasses -> Mosses -> Lichens"], answer: "A. Lichens -> Mosses -> Grasses -> Shrubs -> Trees", explanation: "This represents the typical sequence of ecological succession from pioneer species to a climax community.", neetFrequency: 4 },
        { question: "The concentration of DDT is highest in which trophic level?", options: ["A. Producers (phytoplankton)", "B. Primary consumers (zooplankton)", "C. Secondary consumers (small fish)", "D. Top consumers (large fish-eating birds)"], answer: "D. Top consumers (large fish-eating birds)", explanation: "This is due to biomagnification, where the concentration of a non-biodegradable toxin increases at successive trophic levels.", neetFrequency: 4 },
        { question: "Which of the following is a method of in-situ conservation?", options: ["A. Zoological Park", "B. Botanical Garden", "C. National Park", "D. Cryopreservation"], answer: "C. National Park", explanation: "In-situ conservation means protecting species in their natural habitats. National parks, sanctuaries, and biosphere reserves are examples.", neetFrequency: 3 },
        { question: "The term 'ecosystem' was coined by:", options: ["A. E. Haeckel", "B. E.P. Odum", "C. A.G. Tansley", "D. C. Darwin"], answer: "C. A.G. Tansley", explanation: "Sir Arthur Tansley coined the term ecosystem in 1935.", neetFrequency: 1 },
        { question: "The instrument used to measure the thickness of the ozone layer is:", options: ["A. Spectrometer", "B. Photometer", "C. Dobson spectrophotometer", "D. Barometer"], answer: "C. Dobson spectrophotometer", explanation: "Ozone layer thickness is measured in Dobson Units (DU), using a Dobson spectrophotometer.", neetFrequency: 2 },
        { question: "The pyramid of biomass in a sea is generally:", options: ["A. Upright", "B. Inverted", "C. Spindle-shaped", "D. Linear"], answer: "B. Inverted", explanation: "In an aquatic ecosystem, the biomass of producers (phytoplankton) is very small at any given time compared to the biomass of the primary consumers (zooplankton) that feed on them.", neetFrequency: 4 },
        { question: "Which of the following is not a greenhouse gas?", options: ["A. Methane (CH₄)", "B. Carbon dioxide (CO₂)", "C. Nitrous oxide (N₂O)", "D. Sulphur dioxide (SO₂)"], answer: "D. Sulphur dioxide (SO₂)", explanation: "SO₂ causes acid rain but is not considered a primary greenhouse gas. The main greenhouse gases are CO₂, CH₄, N₂O, and CFCs.", neetFrequency: 3 },
        { question: "The interaction where one species is harmed and the other is unaffected is called:", options: ["A. Predation", "B. Parasitism", "C. Competition", "D. Amensalism"], answer: "D. Amensalism", explanation: "This is the definition of amensalism (-/0 interaction), for example, when a large tree shades a smaller plant.", neetFrequency: 2 },
        { question: "Decomposition is largely an:", options: ["A. Oxygen requiring process", "B. Anaerobic process", "C. Physical process", "D. Chemical process"], answer: "A. Oxygen requiring process", explanation: "Decomposition by microbes is largely an aerobic process that consumes oxygen.", neetFrequency: 1 },
        { question: "Which of the following represents the correct sequence in a food chain?", options: ["A. Grass -> Eagle -> Snake -> Frog", "B. Grass -> Grasshopper -> Frog -> Snake -> Eagle", "C. Frog -> Snake -> Eagle -> Grasshopper -> Grass", "D. Eagle -> Snake -> Frog -> Grasshopper -> Grass"], answer: "B. Grass -> Grasshopper -> Frog -> Snake -> Eagle", explanation: "This shows the correct flow of energy from producer (grass) to successive consumers.", neetFrequency: 3 },
        { question: "The gradual and fairly predictable change in the species composition of a given area is called:", options: ["A. Evolution", "B. Ecological succession", "C. Speciation", "D. Natural selection"], answer: "B. Ecological succession", explanation: "This is the definition of ecological succession.", neetFrequency: 2 },
        { question: "The 'Evil Quartet' refers to the four major causes of:", options: ["A. Air pollution", "B. Water pollution", "C. Biodiversity loss", "D. Soil erosion"], answer: "C. Biodiversity loss", explanation: "The 'Evil Quartet' are Habitat loss and fragmentation, Over-exploitation, Alien species invasions, and Co-extinctions.", neetFrequency: 3 },
        { question: "What is the primary function of a producer in an ecosystem?", options: ["A. To decompose organic matter", "B. To consume other organisms", "C. To convert light energy into chemical energy", "D. To regulate the population of herbivores"], answer: "C. To convert light energy into chemical energy", explanation: "Producers (autotrophs) form the base of the food chain by converting solar energy into organic matter through photosynthesis.", neetFrequency: 2 },
        { question: "The final stable community in an ecological succession is called:", options: ["A. Pioneer community", "B. Seral community", "C. Climax community", "D. Ecotone"], answer: "C. Climax community", explanation: "The climax community is the final, stable, and self-perpetuating community that develops at the end of a succession.", neetFrequency: 3 },
        { question: "A scrubber in the exhaust of a chemical industrial plant removes:", options: ["A. Particulate matter", "B. Gases like sulphur dioxide", "C. Carbon monoxide", "D. Hydrocarbons"], answer: "B. Gases like sulphur dioxide", explanation: "A scrubber can remove gases like SO₂ by passing the exhaust through a spray of water or lime.", neetFrequency: 2 },
        { question: "The functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment is called:", options: ["A. A population", "B. A community", "C. An ecosystem", "D. A biome"], answer: "C. An ecosystem", explanation: "This is the definition of an ecosystem.", neetFrequency: 1 },
        { question: "The total amount of energy stored as biomass by producers in an ecosystem is called:", options: ["A. Gross Primary Productivity (GPP)", "B. Net Primary Productivity (NPP)", "C. Secondary Productivity", "D. Net Community Productivity"], answer: "A. Gross Primary Productivity (GPP)", explanation: "GPP is the rate of production of organic matter during photosynthesis.", neetFrequency: 2 },
        { question: "In a population, unrestricted reproductive capacity is called:", options: ["A. Carrying capacity", "B. Biotic potential", "C. Mortality", "D. Natality"], answer: "B. Biotic potential", explanation: "Biotic potential is the maximum reproductive rate of a population under ideal conditions.", neetFrequency: 1 },
        { question: "Which of the following is not a cause for the loss of biodiversity?", options: ["A. Destruction of habitat", "B. Invasion by alien species", "C. Keeping animals in zoological parks", "D. Over-exploitation of natural resources"], answer: "C. Keeping animals in zoological parks", explanation: "Zoological parks are a form of ex-situ conservation, aimed at protecting species, not causing biodiversity loss.", neetFrequency: 3 },
        { question: "The logistic population growth is expressed by the equation:", options: ["A. dN/dt = rN", "B. dN/dt = rN((K-N)/K)", "C. dN/dt = N((K-N)/K)", "D. dN/dt = r((K-N)/K)"], answer: "B. dN/dt = rN((K-N)/K)", explanation: "This is the Verhulst-Pearl logistic growth equation, where K is the carrying capacity.", neetFrequency: 3 },
        { question: "What is the correct order of the trophic levels?", options: ["A. Producer -> Primary consumer -> Secondary consumer", "B. Primary consumer -> Producer -> Secondary consumer", "C. Secondary consumer -> Primary consumer -> Producer", "D. Producer -> Secondary consumer -> Primary consumer"], answer: "A. Producer -> Primary consumer -> Secondary consumer", explanation: "This shows the correct flow of energy up the food chain.", neetFrequency: 1 },
        { question: "The 'World Summit' on Sustainable Development (2002) was held in:", options: ["A. Rio de Janeiro, Brazil", "B. Kyoto, Japan", "C. Johannesburg, South Africa", "D. Montreal, Canada"], answer: "C. Johannesburg, South Africa", explanation: "This is a fact-based question from the NCERT textbook.", neetFrequency: 1 },
        { question: "The phenomenon of biomagnification is well-known for:", options: ["A. Mercury and DDT", "B. Carbon dioxide and methane", "C. Sulphur dioxide and nitrogen oxides", "D. Organic waste"], answer: "A. Mercury and DDT", explanation: "Mercury and DDT are persistent, non-biodegradable toxins that accumulate in fatty tissues and get magnified up the food chain.", neetFrequency: 3 },
        { question: "Which of the following is an example of brood parasitism?", options: ["A. The cuckoo laying its eggs in the crow's nest", "B. Head lice on humans", "C. Ticks on dogs", "D. Fungi on bread"], answer: "A. The cuckoo laying its eggs in the crow's nest", explanation: "In brood parasitism, one species lays its eggs in the nest of another species and lets the host incubate them.", neetFrequency: 3 },
        { question: "The process of mineralisation by microorganisms helps in the release of:", options: ["A. Organic nutrients from humus", "B. Inorganic nutrients from humus", "C. Organic nutrients from detritus", "D. Both A and C"], answer: "B. Inorganic nutrients from humus", explanation: "Decomposition involves fragmentation, leaching, catabolism, humification, and mineralisation. Mineralisation is the final step where humus is further degraded to release inorganic nutrients.", neetFrequency: 2 },
        { question: "Catalytic converters are fitted into automobiles to reduce the emission of harmful gases. They convert unburnt hydrocarbons into:", options: ["A. Carbon dioxide and water", "B. Methane", "C. Carbon monoxide", "D. Ozone"], answer: "A. Carbon dioxide and water", explanation: "Catalytic converters use platinum-palladium and rhodium as catalysts to convert unburnt hydrocarbons into CO₂ and H₂O, and carbon monoxide and nitric oxide into CO₂ and N₂ gas.", neetFrequency: 2 },
        { question: "The correct sequence of plants in a hydrosere (hydrarch succession) is:", options: ["A. Phytoplankton -> Rooted-submerged plants -> Rooted-floating angiosperms -> Reed-swamp stage", "B. Rooted-submerged plants -> Phytoplankton -> Reed-swamp stage -> Rooted-floating angiosperms", "C. Reed-swamp stage -> Phytoplankton -> Rooted-submerged plants -> Rooted-floating angiosperms", "D. Phytoplankton -> Rooted-floating angiosperms -> Rooted-submerged plants -> Reed-swamp stage"], answer: "A. Phytoplankton -> Rooted-submerged plants -> Rooted-floating angiosperms -> Reed-swamp stage", explanation: "This represents the typical progression from pioneer species (phytoplankton) to later seral stages in an aquatic environment.", neetFrequency: 3 },
        { question: "Which of the following is not a primary function of an ecosystem?", options: ["A. Productivity", "B. Decomposition", "C. Energy flow", "D. Stratification"], answer: "D. Stratification", explanation: "Stratification (the vertical distribution of different species) is a structural feature of an ecosystem, not a primary function like productivity, decomposition, and energy flow.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "The pyramid of energy is always upright.",
            reason: "The energy flow in a food chain is unidirectional and decreases at each successive trophic level.",
            answer: "A",
            explanation: "Assertion is a fundamental rule in ecology. The reason is also true (10% law) and is the correct explanation for why the energy pyramid can never be inverted.",
            neetFrequency: 5
        },
        {
            assertion: "In a parasitic food chain, the pyramid of numbers is inverted.",
            reason: "A single large producer (like a tree) can support a large number of herbivores (like birds), which in turn can support an even larger number of parasites.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and correctly explains the scenario, showing how the number of individuals can increase at higher trophic levels in a parasitic food chain.",
            neetFrequency: 3
        },
        {
            assertion: "Eutrophication is the natural aging of a lake by nutrient enrichment.",
            reason: "Pollutants from human activities like effluents from industries and homes can radically accelerate the aging process.",
            answer: "B",
            explanation: "Both statements are true. The first defines natural eutrophication. The second describes cultural or accelerated eutrophication. However, the reason is about the acceleration of the process, not an explanation of what natural eutrophication is.",
            neetFrequency: 2
        },
        {
            assertion: "Competition is an interaction where both species are harmed.",
            reason: "Interspecific competition occurs when closely related species compete for the same limited resources.",
            answer: "B",
            explanation: "Both statements are true. The first defines competition (-/- interaction). The second describes one type of competition. The reason is an example, not a fundamental explanation of why both are harmed.",
            neetFrequency: 3
        },
        {
            assertion: "Biodiversity must be conserved as it plays an important role in many ecosystem services.",
            reason: "These services include pollination, climate regulation, and production of oxygen.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and provides examples of the ecosystem services mentioned in the assertion, thus correctly explaining it.",
            neetFrequency: 4
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Mutualism", "(b) Commensalism", "(c) Parasitism", "(d) Predation"],
            column2: ["(p) Tiger and deer", "(q) Ticks on dogs", "(r) Lichens", "(s) Orchid on mango"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching population interactions with their classic examples."
        },
        {
            column1: ["(a) Gaseous cycle", "(b) Sedimentary cycle", "(c) Biomagnification", "(d) Greenhouse gas"],
            column2: ["(p) DDT", "(q) Methane", "(r) Phosphorus cycle", "(s) Carbon cycle"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching ecological concepts with their examples."
        },
        {
            column1: ["(a) In-situ conservation", "(b) Ex-situ conservation", "(c) Montreal Protocol", "(d) Kyoto Protocol"],
            column2: ["(p) Botanical Garden", "(q) Biosphere Reserve", "(r) Climate Change", "(s) Ozone depletion"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Matching conservation strategies and protocols with their examples or targets."
        },
        {
            column1: ["(a) Pioneer species in xerarch", "(b) Climax community", "(c) Secondary succession", "(d) Trophic level 1"],
            column2: ["(p) Forest", "(q) Abandoned farmland", "(r) Producers", "(s) Lichens"],
            answer: "a-s, b-p, c-q, d-r",
            explanation: "Matching succession and ecosystem terms with their definitions or examples."
        },
        {
            column1: ["(a) Electrostatic precipitator", "(b) Scrubber", "(c) Catalytic converter", "(d) BOD"],
            column2: ["(p) Removes gaseous pollutants like SO₂", "(q) Removes particulate matter", "(r) Measures organic pollution", "(s) Converts CO and NOx"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Matching pollution control devices/measures with their primary function."
        }
    ],
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
