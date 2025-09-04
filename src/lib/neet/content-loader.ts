
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

// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  'physical-world': physicalWorldModule,
  'units-and-measurements': unitsAndMeasurementsModule,
  'motion-in-a-straight-line': motionInAStraightLineModule,
  'motion-in-a-plane': motionInAPlaneModule,
  'laws-of-motion': lawsOfMotionModule,
  'work-energy-and-power': workEnergyAndPowerModule,
  'rotational-motion': rotationalMotion,
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
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
