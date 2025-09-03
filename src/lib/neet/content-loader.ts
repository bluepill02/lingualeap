
import { biologyAndHumanWelfare } from './biology/biology-and-human-welfare';
import { biotechnologyAndItsApplications } from './biology/biotechnology-and-its-applications';
import { cellStructureAndFunction } from './biology/cell-structure-and-function';
import { diversityInLivingWorld } from './biology/diversity-in-living-world';
import { ecologyAndEnvironment } from './biology/ecology-and-environment';
import { geneticsAndEvolution } from './biology/genetics-and-evolution';
import { humanPhysiology } from './biology/human-physiology';
import { plantPhysiology } from './biology/plant-physiology';
import { reproduction } from './biology/reproduction';
import { structuralOrganisationInAnimalsAndPlants } from './biology/structural-organisation-in-animals-and-plants';
import { someBasicConceptsInChemistry } from './chemistry/some-basic-concepts-in-chemistry';
import { atomicStructure } from './chemistry/atomic-structure';
import { chemicalBondingAndMolecularStructure } from './chemistry/chemical-bonding-and-molecular-structure';
import { chemicalThermodynamics } from './chemistry/chemical-thermodynamics';
import { solutions } from './chemistry/solutions';
import { equilibrium } from './chemistry/equilibrium';
import { redoxReactionsAndElectrochemistry } from './chemistry/redox-reactions-and-electrochemistry';
import { chemicalKinetics } from './chemistry/chemical-kinetics';
import { classificationOfElementsAndPeriodicityInProperties } from './chemistry/classification-of-elements-and-periodicity-in-properties';
import { pBlockElements } from './chemistry/p-block-elements';
import { dAndFBlockElements } from './chemistry/d-and-f-block-elements';
import { coordinationCompounds } from './chemistry/coordination-compounds';
import { purificationAndCharacterisationOfOrganicCompounds } from './chemistry/purification-and-characterisation-of-organic-compounds';
import { someBasicPrinciplesOfOrganicChemistry } from './chemistry/some-basic-principles-of-organic-chemistry';
import { hydrocarbons } from './chemistry/hydrocarbons';
import { organicCompoundsContainingHalogens } from './chemistry/organic-compounds-containing-halogens';
import { organicCompoundsContainingOxygen } from './chemistry/organic-compounds-containing-oxygen';
import { organicCompoundsContainingNitrogen } from './chemistry/organic-compounds-containing-nitrogen';
import { biomolecules } from './chemistry/biomolecules';
import { principlesRelatedToPracticalChemistry } from './chemistry/principles-related-to-practical-chemistry';
import { physicsAndMeasurement } from './physics/physics-and-measurement';
import { kinematicsModule as kinematics } from './physics/kinematics';
import { lawsOfMotionModule as lawsOfMotion } from './physics/laws-of-motion';
import { workEnergyAndPower } from './physics/work-energy-and-power';
import { rotationalMotion } from './physics/rotational-motion';
import { gravitation } from './physics/gravitation';
import { propertiesOfSolidsAndLiquids } from './physics/properties-of-solids-and-liquids';
import { thermodynamics } from './physics/thermodynamics';
import { kineticTheoryOfGases } from './physics/kinetic-theory-of-gases';
import { oscillationsAndWaves } from './physics/oscillations-and-waves';
import { electrostatics } from './physics/electrostatics';
import { currentElectricity } from './physics/current-electricity';
import { magneticEffectsOfCurrentAndMagnetism } from './physics/magnetic-effects-of-current-and-magnetism';
import { electromagneticInductionAndAlternatingCurrents } from './physics/electromagnetic-induction-and-alternating-currents';
import { electromagneticWaves } from './physics/electromagnetic-waves';
import { optics } from './physics/optics';
import { dualNatureOfMatterAndRadiation } from './physics/dual-nature-of-matter-and-radiation';
import { atomsAndNuclei } from './physics/atoms-and-nuclei';
import { electronicDevices } from './physics/electronic-devices';
import { experimentalSkills } from './physics/experimental-skills';
import type { NeetModule } from '@/lib/types';

const neetContent: Record<string, Record<string, NeetModule>> = {
    biology: {
        'biology-and-human-welfare': biologyAndHumanWelfare,
        'biotechnology-and-its-applications': biotechnologyAndItsApplications,
        'cell-structure-and-function': cellStructureAndFunction,
        'diversity-in-living-world': diversityInLivingWorld,
        'ecology-and-environment': ecologyAndEnvironment,
        'genetics-and-evolution': geneticsAndEvolution,
        'human-physiology': humanPhysiology,
        'plant-physiology': plantPhysiology,
        'reproduction': reproduction,
        'structural-organisation-in-animals-and-plants': structuralOrganisationInAnimalsAndPlants,
    },
    chemistry: {
        'some-basic-concepts-in-chemistry': someBasicConceptsInChemistry,
        'atomic-structure': atomicStructure,
        'chemical-bonding-and-molecular-structure': chemicalBondingAndMolecularStructure,
        'chemical-thermodynamics': chemicalThermodynamics,
        'solutions': solutions,
        'equilibrium': equilibrium,
        'redox-reactions-and-electrochemistry': redoxReactionsAndElectrochemistry,
        'chemical-kinetics': chemicalKinetics,
        'classification-of-elements-and-periodicity-in-properties': classificationOfElementsAndPeriodicityInProperties,
        'p-block-elements': pBlockElements,
        'd-and-f-block-elements': dAndFBlockElements,
        'coordination-compounds': coordinationCompounds,
        'purification-and-characterisation-of-organic-compounds': purificationAndCharacterisationOfOrganicCompounds,
        'some-basic-principles-of-organic-chemistry': someBasicPrinciplesOfOrganicChemistry,
        'hydrocarbons': hydrocarbons,
        'organic-compounds-containing-halogens': organicCompoundsContainingHalogens,
        'organic-compounds-containing-oxygen': organicCompoundsContainingOxygen,
        'organic-compounds-containing-nitrogen': organicCompoundsContainingNitrogen,
        'biomolecules': biomolecules,
        'principles-related-to-practical-chemistry': principlesRelatedToPracticalChemistry,
    },
    physics: {
        'physics-and-measurement': physicsAndMeasurement,
        'kinematics': kinematics,
        'laws-of-motion': lawsOfMotion,
        'work-energy-and-power': workEnergyAndPower,
        'rotational-motion': rotationalMotion,
        'gravitation': gravitation,
        'properties-of-solids-and-liquids': propertiesOfSolidsAndLiquids,
        'thermodynamics': thermodynamics,
        'kinetic-theory-of-gases': kineticTheoryOfGases,
        'oscillations-and-waves': oscillationsAndWaves,
        'electrostatics': electrostatics,
        'current-electricity': currentElectricity,
        'magnetic-effects-of-current-and-magnetism': magneticEffectsOfCurrentAndMagnetism,
        'electromagnetic-induction-and-alternating-currents': electromagneticInductionAndAlternatingCurrents,
        'electromagnetic-waves': electromagneticWaves,
        'optics': optics,
        'dual-nature-of-matter-and-radiation': dualNatureOfMatterAndRadiation,
        'atoms-and-nuclei': atomsAndNuclei,
        'electronic-devices': electronicDevices,
        'experimental-skills': experimentalSkills,
    },
};

export function getNeetChapterContent(subject: string, chapter: string): NeetModule | null {
    // The chapter slug from the URL might be different from the module ID.
    // e.g., URL has 'd-and-f-block-elements' but module ID might be 'chemistry-d-and-f-block-elements'
    const moduleKey = Object.keys(neetContent[subject] || {}).find(key => key.endsWith(chapter));
    if (moduleKey) {
        return neetContent[subject][moduleKey];
    }
    return null;
}
