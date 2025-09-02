
import type { NeetModule } from '@/lib/types';

export const ecologyAndEnvironment: NeetModule = {
  id: 'biology-ecology-and-environment',
  title: 'Ecology and Environment',
  chapter: 'Ecology and Environment',
  subject: 'Biology',
  conceptNotes: `
### 1. Organisms and Populations (உயிரினங்கள் மற்றும் இனக்கூட்டம்)

*   **Ecology (சூழலியல்):** The study of interactions among organisms and between the organism and its physical (abiotic) environment.
*   **Population (இனக்கூட்டம்):** A group of individuals of the same species living in a given area.
    *   **Population Attributes (இனக்கூட்ட பண்புகள்):** Birth rate (பிறப்பு விகிதம்), Death rate (இறப்பு விகிதம்), Sex ratio (பாலின விகிதம்), Age pyramid (வயது பிரமிடு).
*   **Population Growth (இனக்கூட்ட வளர்ச்சி):**
    *   **Exponential Growth (அடுக்குக்குறி வளர்ச்சி):** Occurs when resources are unlimited. Results in a J-shaped curve. (கட்டுப்பாடற்ற வளர்ச்சி, திருவிழாக் கூட்டம்போல). Formula: dN/dt = rN.
    *   **Logistic Growth (லாஜிஸ்டிக் வளர்ச்சி):** Occurs when resources are limited. Results in a sigmoid or S-shaped curve. Includes the concept of Carrying Capacity (K) (தாங்குதிறன்). Formula: dN/dt = rN((K-N)/K).
*   **Population Interactions (இனக்கூட்ட இடையீடுகள்):**
    *   **Mutualism (+/+):** Both species benefit (e.g., Lichens). (கூட்டணி வியாபாரம் போல).
    *   **Competition (-/-):** Both species are harmed.
    *   **Predation (+/-):** Predator benefits, prey is harmed.
    *   **Parasitism (+/-):** Parasite benefits, host is harmed.
    *   **Commensalism (+/0):** One benefits, the other is unaffected (e.g., Orchid on a mango tree).
    *   **Amensalism (-/0):** One is harmed, the other is unaffected.

### 2. Ecosystem (சூழ்நிலை மண்டலம்)

*   **Definition:** A functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment.
*   **Components:**
    *   **Producers (உற்பத்தியாளர்கள்):** Autotrophs, mainly photosynthetic plants.
    *   **Consumers (நுகர்வோர்கள்):** Heterotrophs (Herbivores, Carnivores, Omnivores).
    *   **Decomposers (சிதைப்பவைகள்):** Fungi and bacteria that break down dead organic matter.
*   **Energy Flow (ஆற்றல் ஓட்டம்):** Unidirectional. Follows the 10% law (Lindeman's 10% law), where only 10% of the energy is transferred from one trophic level to the next.
*   **Ecological Pyramids (சூழலியல் பிரமிடுகள்):** Graphical representation of the relationship between different organisms in an ecosystem. Can be Pyramid of Number, Biomass, or Energy. The Pyramid of Energy is always upright.
*   **Nutrient Cycling (ஊட்டச்சத்து சுழற்சி):** Movement of nutrient elements through the various components of an ecosystem (e.g., Carbon cycle, Phosphorus cycle).

### 3. Biodiversity and Conservation (பல்லுயிரியம் மற்றும் அதன் பாதுகாப்பு)

*   **Biodiversity (பல்லுயிரியம்):** The variety of life forms at all levels of biological organization (genetic, species, and ecosystem diversity).
*   **Patterns of Biodiversity:** Latitudinal gradients (diversity increases from poles to equator).
*   **Loss of Biodiversity:** The "Evil Quartet" - Habitat loss and fragmentation, Over-exploitation, Alien species invasions, and Co-extinctions.
*   **Conservation of Biodiversity:**
    *   **In-situ Conservation (உள் வாழிடப் பாதுகாப்பு):** Conserving organisms in their natural habitat (e.g., National Parks, Sanctuaries, Biosphere Reserves). (வீட்டிலேயே வைத்துப் பாதுகாப்பது போல).
    *   **Ex-situ Conservation (வெளி வாழிடப் பாதுகாப்பு):** Conserving organisms outside their natural habitat (e.g., Botanical gardens, Zoological parks, Gene banks). (மருத்துவமனையில் வைத்துப் பாதுகாப்பது போல).

### 4. Environmental Issues (சுற்றுச்சூழல் பிரச்சினைகள்)

*   **Pollution (மாசுபாடு):** Air, Water, Soil pollution.
    *   **Greenhouse Effect and Global Warming (பசுங்குடில் விளைவும் புவி வெப்பமயமாதலும்):** Caused by increased levels of greenhouse gases (CO₂, CH₄, N₂O, CFCs).
    *   **Ozone Depletion (ஓசோன் சிதைவு):** Depletion of the ozone layer in the stratosphere by chlorofluorocarbons (CFCs).
    *   **Eutrophication (யூட்ரோஃபிகேஷன்):** The natural aging of a lake by nutrient enrichment. Cultural or accelerated eutrophication is caused by human activities.
*   **Deforestation (காடழிப்பு):** Conversion of forested areas to non-forested ones.
  `,
  workedExamples: [
    {
        problem: 'In a pond, there were 200 lotus plants last year and through reproduction, 40 new plants are added. Taking the current population as 240, calculate the birth rate.',
        solution: 'The birth rate is calculated as the number of new individuals produced per unit of population per unit time. \nFormula: Birth Rate = (Number of new plants) / (Initial population) \nGiven: \n- New plants added = 40 \n- Initial population = 200 \nCalculation: Birth Rate = 40 / 200 = 0.2 offspring per lotus per year. (பிறப்பு விகிதம் = புதிய தாவரங்களின் எண்ணிக்கை / ஆரம்ப இனக்கூட்டம் = 40 / 200 = 0.2)'
    },
    {
        problem: 'If the energy available at the producer level (T1) in a food chain is 10,000 Joules, how much energy will be available to the tertiary consumer (T4)?',
        solution: 'According to Lindeman\'s 10% law of energy transfer, only 10% of the energy is transferred from one trophic level to the next. \n1.  **Energy at T1 (Producers):** 10,000 J \n2.  **Energy at T2 (Primary Consumers):** 10% of 10,000 J = 1,000 J \n3.  **Energy at T3 (Secondary Consumers):** 10% of 1,000 J = 100 J \n4.  **Energy at T4 (Tertiary Consumers):** 10% of 100 J = **10 J** \nTherefore, only 10 Joules of energy will be available to the tertiary consumer. (ஒவ்வொரு டிராபிக் மட்டத்திலும் 10% ஆற்றல் மட்டுமே மாற்றப்படுகிறது, எனவே மூன்றாம் நிலை நுகர்வோருக்கு 10 ஜூல் ஆற்றல் கிடைக்கும்.)'
    },
    {
        problem: 'A new invasive weed is introduced into a fragile island ecosystem. Explain two potential consequences based on the principles of biodiversity loss.',
        solution: 'The introduction of an invasive weed can have severe consequences: \n1.  **Alien Species Invasion:** The new weed, lacking natural predators or competitors in the island ecosystem, can grow unchecked. It will compete with native plant species for resources like sunlight, water, and nutrients, potentially driving the native species to extinction. This directly reduces the species diversity of the island. \n2.  **Habitat Loss and Fragmentation:** The rampant growth of the invasive weed can alter the physical structure of the habitat. It might form dense thickets that prevent other plants from growing and change the soil composition, making the habitat unsuitable for native fauna that depend on the original plants for food or shelter. This is a form of habitat loss for the native species. (புதிய அயல் இனங்கள், உள்ளூர் இனங்களுடன் போட்டியிட்டு, அவைகளின் வாழ்விடத்தை அழித்து, பல்லுயிர் இழப்புக்கு வழிவகுக்கும்.)'
    }
  ],
  mcqs: [
    {
      question: 'Which of the following is considered an attribute of a population?',
      options: ['Births', 'Deaths', 'Sex Ratio', 'Individuals'],
      answer: 'Sex Ratio',
      explanation: 'Birth rate and death rate (not individual births/deaths) and sex ratio are population attributes, while an individual has birth and death.'
    },
    {
      question: 'The interaction between an orchid growing on a mango tree is an example of:',
      options: ['Mutualism', 'Parasitism', 'Commensalism', 'Competition'],
      answer: 'Commensalism',
      explanation: 'The orchid benefits by getting a place to grow, while the mango tree is neither harmed nor benefited.'
    },
    {
      question: 'The 10% law of energy transfer in a food chain was given by:',
      options: ['Tansley', 'Odum', 'Lindeman', 'Haeckel'],
      answer: 'Lindeman',
      explanation: 'Raymond Lindeman proposed the ten percent law for the transfer of energy from one trophic level to the next.'
    },
    {
      question: 'Which ecological pyramid is always upright?',
      options: ['Pyramid of number', 'Pyramid of biomass', 'Pyramid of energy', 'Both A and B'],
      answer: 'Pyramid of energy',
      explanation: 'The pyramid of energy is always upright because energy always flows from a lower to a higher trophic level, and some energy is lost as heat at each step.'
    },
    {
      question: 'Which of the following is an example of ex-situ conservation?',
      options: ['National Park', 'Biosphere Reserve', 'Sacred Grove', 'Seed Bank'],
      answer: 'Seed Bank',
      explanation: 'Ex-situ conservation involves protecting species outside their natural habitats. Seed banks, zoos, and botanical gardens are examples.'
    },
    {
        question: 'The term "Ecology" was coined by:',
        options: ['Ernst Haeckel', 'A.G. Tansley', 'E.P. Odum', 'Charles Darwin'],
        answer: 'Ernst Haeckel',
        explanation: 'Ernst Haeckel, a German biologist, coined the term "ecology" in 1866.'
    },
    {
        question: 'The formula for exponential population growth is:',
        options: ['dN/dt = rN(K-N)/K', 'dN/dt = rN', 'dN/dt = N/r', 'dN/dt = K/N'],
        answer: 'dN/dt = rN',
        explanation: 'The equation dN/dt = rN describes exponential or geometric growth in a population with unlimited resources.'
    },
    {
        question: 'Which of the following is a primary consumer?',
        options: ['Lion', 'Grass', 'Eagle', 'Cow'],
        answer: 'Cow',
        explanation: 'Primary consumers are herbivores that feed on producers (plants). A cow eats grass.'
    },
    {
        question: 'The "Evil Quartet" is a term used to describe the major causes of:',
        options: ['Pollution', 'Biodiversity Loss', 'Climate Change', 'Ozone Depletion'],
        answer: 'Biodiversity Loss',
        explanation: 'The "Evil Quartet" refers to the four major causes of biodiversity loss: habitat loss, over-exploitation, alien species invasion, and co-extinctions.'
    },
    {
        question: 'Which gas is primarily responsible for ozone layer depletion?',
        options: ['Carbon Dioxide (CO2)', 'Methane (CH4)', 'Chlorofluorocarbons (CFCs)', 'Sulphur Dioxide (SO2)'],
        answer: 'Chlorofluorocarbons (CFCs)',
        explanation: 'CFCs released into the atmosphere break down the ozone layer in the stratosphere.'
    },
    {
        question: 'The functional unit of an ecosystem is the:',
        options: ['Producer', 'Consumer', 'Ecosystem itself', 'Food chain'],
        answer: 'Ecosystem itself',
        explanation: 'An ecosystem is defined as the functional unit of nature.'
    },
    {
        question: 'The gradual and predictable change in the species composition of a given area is called:',
        options: ['Extinction', 'Evolution', 'Ecological succession', 'Speciation'],
      answer: 'Ecological succession',
        explanation: 'Ecological succession is the process of change in the species structure of an ecological community over time.'
    },
    {
        question: 'Which of the following is NOT a greenhouse gas?',
        options: ['CO2', 'CH4', 'N2O', 'O2'],
        answer: 'O2',
        explanation: 'Oxygen (O2) is not a greenhouse gas. CO2, Methane (CH4), and Nitrous Oxide (N2O) are all potent greenhouse gases.'
    },
    {
        question: 'The Montreal Protocol was signed to control the emission of:',
        options: ['Greenhouse gases', 'Ozone depleting substances', 'Persistent organic pollutants', 'Heavy metals'],
        answer: 'Ozone depleting substances',
        explanation: 'The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out the production of substances like CFCs.'
    },
    {
        question: 'In a parasitic food chain, the pyramid of numbers is:',
        options: ['Always upright', 'Always inverted', 'Spindle-shaped', 'Can be upright or inverted'],
        answer: 'Always inverted',
        explanation: 'In a parasitic food chain (e.g., a single tree supporting many birds, which in turn support many parasites), the number of individuals increases at successive trophic levels, resulting in an inverted pyramid.'
    },
    {
        question: 'The term "niche" refers to:',
        options: ['The physical space where an organism lives', 'The range of temperature that an organism can tolerate', 'The functional role of a species in its ecosystem', 'The trophic level of an organism'],
        answer: 'The functional role of a species in its ecosystem',
        explanation: 'A niche describes not only the physical space occupied by an organism but also its functional role in the community (e.g., what it eats, what eats it).'
    },
    {
        question: 'The process of nutrient enrichment of a water body is called:',
        options: ['Biomagnification', 'Eutrophication', 'Sedimentation', 'Decomposition'],
        answer: 'Eutrophication',
        explanation: 'Eutrophication is the process by which a body of water becomes overly enriched with minerals and nutrients, which induces excessive growth of algae.'
    },
    {
        question: 'Which biome is characterized by permafrost?',
        options: ['Tropical rainforest', 'Desert', 'Tundra', 'Temperate grassland'],
        answer: 'Tundra',
        explanation: 'The Arctic Tundra is characterized by a layer of permanently frozen subsoil called permafrost.'
    },
    {
        question: 'Gause\'s "Competitive Exclusion Principle" states that:',
        options: ['Two species can coexist if they have the same niche', 'Two closely related species competing for the same resources cannot coexist indefinitely', 'Competition is always harmful to both species', 'Predation is a form of competition'],
        answer: 'Two closely related species competing for the same resources cannot coexist indefinitely',
        explanation: 'The principle states that the competitor with even the slightest advantage will eventually dominate and the other will be eliminated.'
    },
    {
        question: 'The study of a single species and its environmental factors is called:',
        options: ['Synecology', 'Autecology', 'Genecology', 'Paleoecology'],
        answer: 'Autecology',
        explanation: 'Autecology (or population ecology) deals with the study of an individual species or population in relation to its environment.'
    },
    {
        question: 'The main cause of the current high rate of extinction is:',
        options: ['Climate change', 'Habitat loss and fragmentation', 'Pollution', 'Alien species invasions'],
        answer: 'Habitat loss and fragmentation',
        explanation: 'Habitat loss, driven by human activities like deforestation and urbanization, is the single greatest cause of biodiversity loss today.'
    },
    {
        question: 'Which of the following biogeochemical cycles is a sedimentary cycle?',
        options: ['Carbon cycle', 'Nitrogen cycle', 'Sulphur cycle', 'Phosphorus cycle'],
        answer: 'Phosphorus cycle',
        explanation: 'The phosphorus cycle is a sedimentary cycle because its main reservoir is rock and soil, unlike the gaseous cycles of carbon and nitrogen.'
    },
    {
        question: 'The thickness of the ozone layer is measured in:',
        options: ['Decibels (dB)', 'Dobson Units (DU)', 'Pascals (Pa)', 'Sieverts (Sv)'],
        answer: 'Dobson Units (DU)',
        explanation: 'The Dobson Unit is the standard unit for measuring the total amount of ozone in a column overhead.'
    },
    {
        question: 'Organisms that can tolerate a wide range of temperatures are called:',
        options: ['Stenothermal', 'Eurythermal', 'Stenohaline', 'Euryhaline'],
        answer: 'Eurythermal',
        explanation: 'Eurythermal organisms can tolerate a wide range of temperatures, while stenothermal organisms have a narrow tolerance range.'
    },
    {
        question: 'A food web is:',
        options: ['A single linear pathway of energy flow', 'An interconnected network of food chains', 'The total biomass at a trophic level', 'The rate of energy storage by producers'],
        answer: 'An interconnected network of food chains',
        explanation: 'A food web represents all the possible pathways of energy flow in an ecosystem, which is a more realistic model than a single food chain.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'The pyramid of energy is always upright.',
      reason: 'When energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step.',
      answer: 'A',
      explanation: 'The reason correctly explains why the energy pyramid is always upright. The 10% law dictates that energy decreases at each successive trophic level.'
    },
    {
      assertion: 'In-situ conservation is the most appropriate method for biodiversity conservation.',
      reason: 'It involves protecting the entire ecosystem and its biodiversity at all levels.',
      answer: 'A',
      explanation: 'Protecting an entire ecosystem (in-situ) is generally considered the best strategy as it preserves the species along with all the complex interactions it has evolved with, which is a key part of the reason.'
    },
    {
        assertion: 'Exponential growth occurs when resources are unlimited.',
        reason: 'The logistic growth model includes the concept of carrying capacity (K).',
        answer: 'B',
        explanation: 'Both statements are true, but the reason describes the logistic growth model, not the exponential one. It does not explain the assertion.'
    },
    {
        assertion: 'The greenhouse effect is essential for life on Earth.',
        reason: 'Greenhouse gases trap heat, keeping the Earth\'s surface warm.',
        answer: 'A',
        explanation: 'The reason correctly explains the assertion. Without the natural greenhouse effect, Earth would be too cold to support life. The problem arises from the enhanced greenhouse effect due to human activities.'
    },
    {
        assertion: 'Competition is an interaction where both species are negatively affected.',
        reason: 'Both species compete for the same limited resources.',
        answer: 'A',
        explanation: 'The reason provides the correct explanation for the assertion. The struggle for limited resources results in reduced fitness for both competing species.'
    },
    {
        assertion: 'Tropical regions have greater biodiversity than temperate regions.',
        reason: 'Tropical latitudes have remained relatively undisturbed for millions of years and received more solar energy.',
        answer: 'A',
        explanation: 'The reason provides the primary hypotheses for why the tropics are more biodiverse: a longer evolutionary time and a more constant, high-energy environment allowed for greater speciation.'
    },
    {
        assertion: 'Decomposers are essential components of an ecosystem.',
        reason: 'Decomposers break down complex organic matter into inorganic substances that can be used by producers.',
        answer: 'A',
        explanation: 'The reason correctly explains the crucial role of decomposers in nutrient cycling, which is why they are essential.'
    },
    {
        assertion: 'The pyramid of biomass in a sea is generally inverted.',
        reason: 'The biomass of fishes far exceeds that of phytoplankton.',
        answer: 'A',
        explanation: 'The reason is the correct explanation. Phytoplankton (producers) have a short life span and are consumed rapidly, so their standing crop (biomass) at any given time is much lower than the biomass of the fish (consumers) that feed on them.'
    },
    {
        assertion: 'Introduction of an alien species can cause biodiversity loss.',
        reason: 'Alien species often have no natural predators in the new habitat and can outcompete native species.',
        answer: 'A',
        explanation: 'The lack of natural predators and competition with native species are the main reasons why invasive alien species can be so destructive, thus the reason explains the assertion.'
    },
    {
        assertion: 'All parasites are host-specific.',
        reason: 'Parasites have evolved to thrive on a particular host.',
        answer: 'D',
        explanation: 'The assertion is false; many parasites can infect multiple host species. The reason is a general statement that is true for many host-specific parasites but doesn\'t make the assertion correct.'
    },
    {
        assertion: 'The phosphorus cycle is a gaseous cycle.',
        reason: 'The main reservoir for phosphorus is rock.',
        answer: 'D',
        explanation: 'The assertion is false; the phosphorus cycle is a sedimentary cycle. The reason is true and actually contradicts the assertion.'
    },
    {
        assertion: 'Commensalism is an interaction where one species is benefited and the other is harmed.',
        reason: 'An orchid growing on a mango branch is an example of commensalism.',
        answer: 'D',
        explanation: 'The assertion is false; in commensalism, one species benefits and the other is unaffected (+/0). The reason is true, as this is a classic example of commensalism.'
    },
    {
        assertion: 'Biomagnification is the increase in the concentration of a toxicant at successive trophic levels.',
        reason: 'This happens because a toxic substance accumulated by an organism cannot be metabolized or excreted.',
        answer: 'A',
        explanation: 'The reason correctly explains how toxicants get passed up the food chain in increasing concentrations, which is the definition of biomagnification.'
    },
    {
        assertion: 'A J-shaped growth curve is characteristic of a population growing in a resource-limited environment.',
        reason: 'The J-shaped curve represents exponential growth.',
        answer: 'D',
        explanation: 'The assertion is false; a J-shaped curve is for a resource-unlimited environment. The reason is true, it does represent exponential growth.'
    },
    {
        assertion: 'Sacred groves are an example of in-situ conservation.',
        reason: 'They are tracts of forest set aside, and all the trees and wildlife within are given total protection by local communities.',
        answer: 'A',
        explanation: 'The reason perfectly explains what sacred groves are and why they are a form of in-situ (on-site) conservation.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Mutualism', 'b) Commensalism', 'c) Parasitism', 'd) Competition'],
      column2: ['i) Orchid on mango', 'ii) Ticks on dogs', 'iii) Lichens', 'iv) Lions and hyenas'],
      answer: 'a-iii, b-i, c-ii, d-iv'
    },
    {
      column1: ['a) Producer', 'b) Primary Consumer', 'c) Decomposer', 'd) Tertiary Consumer'],
      column2: ['i) Bacteria', 'ii) Grass', 'iii) Lion', 'iv) Grasshopper'],
      answer: 'a-ii, b-iv, c-i, d-iii'
    },
    {
      column1: ['a) In-situ conservation', 'b) Ex-situ conservation', 'c) The Evil Quartet', 'd) Biodiversity Hotspot'],
      column2: ['i) Botanical Garden', 'ii) High species richness', 'iii) National Park', 'iv) Over-exploitation'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) Greenhouse Gas', 'b) Ozone Depletion', 'c) Eutrophication', 'd) Biomagnification'],
      column2: ['i) Algal bloom', 'ii) DDT', 'iii) Methane', 'iv) CFCs'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) Exponential Growth', 'b) Logistic Growth', 'c) Birth Rate', 'd) Death Rate'],
      column2: ['i) Carrying capacity', 'ii) J-shaped curve', 'iii) Mortality', 'iv) Natality'],
      answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
      column1: ['a) Montreal Protocol', 'b) Kyoto Protocol', 'c) Earth Summit', 'd) World Summit on Sustainable Development'],
      column2: ['i) Rio de Janeiro, 1992', 'ii) Johannesburg, 2002', 'iii) Control of greenhouse gas emissions', 'iv) Protection of ozone layer'],
      answer: 'a-iv, b-iii, c-i, d-ii'
    },
    {
      column1: ['a) Abiotic component', 'b) Biotic component', 'c) Food Chain', 'd) Food Web'],
      column2: ['i) Producer', 'ii) Temperature', 'iii) Interconnected food chains', 'iv) Linear sequence of energy transfer'],
      answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
      column1: ['a) Pioneer species', 'b) Climax community', 'c) Sere', 'd) Primary succession'],
      column2: ['i) Entire sequence of communities', 'ii) Stable, self-perpetuating community', 'iii) Starts on bare rock', 'iv) Lichens'],
      answer: 'a-iv, b-ii, c-i, d-iii'
    },
    {
      column1: ['a) Autecology', 'b) Synecology', 'c) Demography', 'd) Ethology'],
      column2: ['i) Study of animal behavior', 'ii) Study of communities', 'iii) Study of populations', 'iv) Study of a single species'],
      answer: 'a-iv, b-ii, c-iii, d-i'
    },
    {
      column1: ['a) Stenohaline', 'b) Euryhaline', 'c) Stenothermal', 'd) Eurythermal'],
      column2: ['i) Tolerates wide range of salinity', 'ii) Tolerates narrow range of temperature', 'iii) Tolerates wide range of temperature', 'iv) Tolerates narrow range of salinity'],
      answer: 'a-iv, b-i, c-ii, d-iii'
    },
    {
        column1: ['a) Population', 'b) Community', 'c) Ecosystem', 'd) Biome'],
        column2: ['i) Community + Abiotic factors', 'ii) Large unit with major vegetation type', 'iii) Group of individuals of same species', 'iv) Assemblage of different populations'],
        answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
        column1: ['a) Detritus Food Chain', 'b) Grazing Food Chain', 'c) GPP', 'd) NPP'],
        column2: ['i) Starts with dead organic matter', 'ii) Rate of biomass production', 'iii) GPP - Respiration', 'iv) Starts with producers'],
        answer: 'a-i, b-iv, c-ii, d-iii'
    },
    {
        column1: ['a) India\'s share of global species diversity', 'b) Total number of biodiversity hotspots in the world', 'c) Genetic diversity', 'd) Species diversity'],
        column2: ['i) Diversity at species level', 'ii) 8.1 percent', 'iii) Diversity within a species', 'iv) 34'],
        answer: 'a-ii, b-iv, c-iii, d-i'
    },
    {
        column1: ['a) Robert May', 'b) Alexander von Humboldt', 'c) David Tilman', 'd) Edward Wilson'],
        column2: ['i) Coined the term "biodiversity"', 'ii) Global species diversity estimate', 'iii) Species-Area relationship', 'iv) Long-term ecosystem experiments'],
        answer: 'a-ii, b-iii, c-iv, d-i'
    },
    {
        column1: ['a) Catalytic converter', 'b) Electrostatic precipitator', 'c) Scrubber', 'd) CNG'],
        column2: ['i) Removes particulate matter', 'ii) Removes gases like SO2', 'iii) Cleaner fuel', 'iv) Reduces emission of poisonous gases'],
        answer: 'a-iv, b-i, c-ii, d-iii'
    }
  ]
}

    