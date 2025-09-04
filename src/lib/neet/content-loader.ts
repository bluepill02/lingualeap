
import { lawsOfMotionModule as lawsOfMotion } from './physics/laws-of-motion';
import { physicsAndMeasurement } from './physics/physics-and-measurement';
import { physicalWorldModule as physicalWorld } from './physics/physical-world';
import { motionInAStraightLineModule as motionInAStraightLine } from './physics/motion-in-a-straight-line';
// Import other modules...

// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  'laws-of-motion': lawsOfMotion,
  'units-and-measurements': physicsAndMeasurement,
  'physical-world': physicalWorld,
  'motion-in-a-straight-line': motionInAStraightLine,
  // ... other mappings
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
