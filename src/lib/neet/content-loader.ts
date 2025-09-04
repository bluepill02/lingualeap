
import { lawsOfMotionModule } from './physics/laws-of-motion';
import { physicsAndMeasurement } from './physics/physics-and-measurement';
import { physicalWorldModule } from './physics/physical-world';
import { motionInAStraightLineModule } from './physics/motion-in-a-straight-line';
import { motionInAPlaneModule } from './physics/motion-in-a-plane';
import { workEnergyAndPowerModule } from './physics/work-energy-and-power';
import { rotationalMotion } from './physics/rotational-motion';
import { gravitationModule } from './physics/gravitation';
import { propertiesOfSolidsAndLiquidsModule } from './physics/properties-of-solids-and-liquids';
import { thermodynamicsModule } from './physics/thermodynamics';
import { kineticTheoryOfGasesModule } from './physics/kinetic-theory-of-gases';
import { oscillationsAndWavesModule } from './physics/oscillations-and-waves';
import { electrostaticsModule } from './physics/electrostatics';
import { currentElectricityModule } from './physics/current-electricity';
import { magneticEffectsOfCurrentAndMagnetismModule } from './physics/magnetic-effects-of-current-and-magnetism';
import { electromagneticInductionAndAlternatingCurrentsModule } from './physics/electromagnetic-induction-and-alternating-currents';
import { electromagneticWavesModule } from './physics/electromagnetic-waves';
import { opticsModule } from './physics/optics';
import { dualNatureOfMatterAndRadiationModule } from './physics/dual-nature-of-matter-and-radiation';
import { atomsAndNucleiModule } from './physics/atoms-and-nuclei';
import { electronicDevicesModule } from './physics/electronic-devices';
import { experimentalSkillsModule } from './physics/experimental-skills';

// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  'laws-of-motion': lawsOfMotionModule,
  'units-and-measurements': physicsAndMeasurement,
  'physical-world': physicalWorldModule,
  'motion-in-a-straight-line': motionInAStraightLineModule,
  'motion-in-a-plane': motionInAPlaneModule,
  'work-energy-and-power': workEnergyAndPowerModule,
  'rotational-motion': rotationalMotion,
  'gravitation': gravitationModule,
  'properties-of-solids-and-liquids': propertiesOfSolidsAndLiquidsModule,
  'thermodynamics': thermodynamicsModule,
  'kinetic-theory-of-gases': kineticTheoryOfGasesModule,
  'oscillations-and-waves': oscillationsAndWavesModule,
  'electrostatics': electrostaticsModule,
  'current-electricity': currentElectricityModule,
  'magnetic-effects-of-current-and-magnetism': magneticEffectsOfCurrentAndMagnetismModule,
  'electromagnetic-induction-and-alternating-currents': electromagneticInductionAndAlternatingCurrentsModule,
  'electromagnetic-waves': electromagneticWavesModule,
  'optics': opticsModule,
  'dual-nature-of-matter-and-radiation': dualNatureOfMatterAndRadiationModule,
  'atoms-and-nuclei': atomsAndNucleiModule,
  'electronic-devices': electronicDevicesModule,
  'experimental-skills': experimentalSkillsModule,
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
