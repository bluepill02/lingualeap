
import { lawsOfMotionModule as lawsOfMotion } from './physics/laws-of-motion';
import { physicsAndMeasurement } from './physics/physics-and-measurement';
import { physicalWorldModule as physicalWorld } from './physics/physical-world';
import { motionInAStraightLineModule as motionInAStraightLine } from './physics/motion-in-a-straight-line';
import { motionInAPlaneModule as motionInAPlane } from './physics/motion-in-a-plane';
import { workEnergyAndPowerModule as workEnergyAndPower } from './physics/work-energy-and-power';
import { rotationalMotion as rotationalMotion } from './physics/rotational-motion';
// Import other modules...

// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  'laws-of-motion': lawsOfMotion,
  'units-and-measurements': physicsAndMeasurement,
  'physical-world': physicalWorld,
  'motion-in-a-straight-line': motionInAStraightLine,
  'motion-in-a-plane': motionInAPlane,
  'work-energy-and-power': workEnergyAndPower,
  'rotational-motion': rotationalMotion,
  // ... other mappings
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
