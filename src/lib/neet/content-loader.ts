
import { physicalWorldModule } from './physics/physical-world';
import { unitsAndMeasurementsModule } from './physics/units-and-measurements';
import { motionInAStraightLineModule } from './physics/motion-in-a-straight-line';
import { motionInAPlaneModule } from './physics/motion-in-a-plane';
import { lawsOfMotionModule } from './physics/laws-of-motion';
import { workEnergyAndPowerModule } from './physics/work-energy-and-power';
import { rotationalMotion } from './physics/rotational-motion';
import { gravitationModule } from './physics/gravitation';
import { mechanicalPropertiesOfSolidsModule } from './physics/mechanical-properties-of-solids';
import { mechanicalPropertiesOfFluidsModule } from './physics/mechanical-properties-of-fluids';
import { thermalPropertiesOfMatterModule } from './physics/thermal-properties-of-matter';
import { thermodynamicsModule } from './physics/thermodynamics';
import { kineticTheoryOfGasesModule } from './physics/kinetic-theory-of-gases';
import { oscillationsModule } from './physics/oscillations';
import { wavesModule } from './physics/waves';
import { electrostaticsModule } from './physics/electrostatics';
import { currentElectricityModule } from './physics/current-electricity';
import { movingChargesAndMagnetismModule } from './physics/moving-charges-and-magnetism';
import { magnetismAndMatterModule } from './physics/magnetism-and-matter';
import { electromagneticInductionModule } from './physics/electromagnetic-induction';
import { alternatingCurrentModule } from './physics/alternating-current';
import { electromagneticWavesModule } from './physics/electromagnetic-waves';
import { rayOpticsAndOpticalInstrumentsModule } from './physics/ray-optics-and-optical-instruments';
import { waveOpticsModule } from './physics/wave-optics';
import { dualNatureOfRadiationAndMatterModule } from './physics/dual-nature-of-radiation-and-matter';
import { atomsModule } from './physics/atoms';
import { nucleiModule } from './physics/nuclei';
import { semiconductorElectronicsModule } from './physics/semiconductor-electronics';
import { communicationSystemsModule } from './physics/communication-systems';
import { someBasicConceptsInChemistry } from './chemistry/some-basic-concepts-in-chemistry';
import { atomicStructureModule } from './chemistry/atomic-structure';
import { chemicalBondingAndMolecularStructure } from './chemistry/chemical-bonding-and-molecular-structure';
import { chemicalThermodynamicsModule as chemicalThermodynamics } from './chemistry/chemical-thermodynamics';
import { solutions } from './chemistry/solutions';
import { equilibrium } from './chemistry/equilibrium';
import { redoxReactionsAndElectrochemistry } from './chemistry/redox-reactions-and-electrochemistry';
import { chemicalKineticsModule as chemicalKinetics } from './chemistry/chemical-kinetics';
import { classificationOfElementsAndPeriodicityInProperties } from './chemistry/classification-of-elements-and-periodicity-in-properties';
import { pBlockElementsModule } from './chemistry/p-block-elements';
import { dAndFBlockElementsModule } from './chemistry/d--and-f-block-elements';
import { coordinationCompounds } from './chemistry/coordination-compounds';
import { purificationAndCharacterisationOfOrganicCompoundsModule } from './chemistry/purification-and-characterisation-of-organic-compounds';
import { someBasicPrinciplesOfOrganicChemistry } from './chemistry/some-basic-principles-of-organic-chemistry';
import { hydrocarbons } from './chemistry/hydrocarbons';
import { organicCompoundsContainingHalogens } from './chemistry/organic-compounds-containing-halogens';
import { organicCompoundsContainingOxygen } from './chemistry/organic-compounds-containing-oxygen';
import { organicCompoundsContainingNitrogen } from './chemistry/organic-compounds-containing-nitrogen';
import { biomolecules } from './chemistry/biomolecules';
import { principlesRelatedToPracticalChemistry } from './chemistry/principles-related-to-practical-chemistry';

// Biology
import { diversityInTheLivingWorld } from '@/lib/neet/biology/diversity-in-the-living-world';
import { structuralOrganisationInAnimalsAndPlants } from '@/lib/neet/biology/structural-organisation-in-animals-and-plants';
import { cellStructureAndFunction } from '@/lib/neet/biology/cell-structure-and-function';
import { plantPhysiology } from '@/lib/neet/biology/plant-physiology';
import { humanPhysiology } from '@/lib/neet/biology/human-physiology';
import { reproduction } from '@/lib/neet/biology/reproduction';
import { geneticsAndEvolution } from '@/lib/neet/biology/genetics-and-evolution';
import { biologyAndHumanWelfare } from '@/lib/neet/biology/biology-and-human-welfare';
import { biotechnologyAndItsApplications } from '@/lib/neet/biology/biotechnology-and-its-applications';
import { ecologyAndEnvironment } from '@/lib/neet/biology/ecology-and-environment';


// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  // Physics
  'physical-world': physicalWorldModule,
  'units-and-measurements': unitsAndMeasurementsModule,
  'motion-in-a-straight-line': motionInAStraightLineModule,
  'motion-in-a-plane': motionInAPlaneModule,
  'laws-of-motion': lawsOfMotionModule,
  'work-energy-and-power': workEnergyAndPowerModule,
  'system-of-particles-and-rotational-motion': rotationalMotion,
  'gravitation': gravitationModule,
  'mechanical-properties-of-solids': mechanicalPropertiesOfSolidsModule,
  'mechanical-properties-of-fluids': mechanicalPropertiesOfFluidsModule,
  'thermal-properties-of-matter': thermalPropertiesOfMatterModule,
  'thermodynamics': thermodynamicsModule,
  'kinetic-theory-of-gases': kineticTheoryOfGasesModule,
  'oscillations': oscillationsModule,
  'waves': wavesModule,
  'electrostatics': electrostaticsModule,
  'current-electricity': currentElectricityModule,
  'moving-charges-and-magnetism': movingChargesAndMagnetismModule,
  'magnetism-and-matter': magnetismAndMatterModule,
  'electromagnetic-induction': electromagneticInductionModule,
  'alternating-current': alternatingCurrentModule,
  'electromagnetic-waves': electromagneticWavesModule,
  'ray-optics-and-optical-instruments': rayOpticsAndOpticalInstrumentsModule,
  'wave-optics': waveOpticsModule,
  'dual-nature-of-radiation-and-matter': dualNatureOfRadiationAndMatterModule,
  'atoms': atomsModule,
  'nuclei': nucleiModule,
  'semiconductor-electronics': semiconductorElectronicsModule,
  'communication-systems': communicationSystemsModule,

  // Chemistry
  'some-basic-concepts-in-chemistry': someBasicConceptsInChemistry,
  'atomic-structure': atomicStructureModule,
  'chemical-bonding-and-molecular-structure': chemicalBondingAndMolecularStructure,
  'chemical-thermodynamics': chemicalThermodynamics,
  'solutions': solutions,
  'equilibrium': equilibrium,
  'redox-reactions-and-electrochemistry': redoxReactionsAndElectrochemistry,
  'chemical-kinetics': chemicalKinetics,
  'classification-of-elements-and-periodicity-in-properties': classificationOfElementsAndPeriodicityInProperties,
  'p-block-elements': pBlockElementsModule,
  'd--and-f-block-elements': dAndFBlockElementsModule,
  'coordination-compounds': coordinationCompounds,
  'purification-and-characterisation-of-organic-compounds': purificationAndCharacterisationOfOrganicCompoundsModule,
  'some-basic-principles-of-organic-chemistry': someBasicPrinciplesOfOrganicChemistry,
  'hydrocarbons': hydrocarbons,
  'organic-compounds-containing-halogens': organicCompoundsContainingHalogens,
  'organic-compounds-containing-oxygen': organicCompoundsContainingOxygen,
  'organic-compounds-containing-nitrogen': organicCompoundsContainingNitrogen,
  'biomolecules': biomolecules,
  'principles-related-to-practical-chemistry': principlesRelatedToPracticalChemistry,

  // Biology
  'diversity-in-living-world': diversityInTheLivingWorld,
  'structural-organisation-in-animals-and-plants': structuralOrganisationInAnimalsAndPlants,
  'cell-structure-and-function': cellStructureAndFunction,
  'plant-physiology': plantPhysiology,
  'human-physiology': humanPhysiology,
  'reproduction': reproduction,
  'genetics-and-evolution': geneticsAndEvolution,
  'biology-and-human-welfare': biologyAndHumanWelfare,
  'biotechnology-and-its-applications': biotechnologyAndItsApplications,
  'ecology-and-environment': ecologyAndEnvironment,
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
