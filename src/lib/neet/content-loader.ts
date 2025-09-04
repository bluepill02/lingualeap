
import { lawsOfMotionModule as lawsOfMotion } from './physics/laws-of-motion';
import { physicsAndMeasurement } from './physics/physics-and-measurement';
// Import other modules...

// This object maps the URL-friendly chapter slug to the imported module
export const neetContent: { [key: string]: any } = {
  'laws-of-motion': lawsOfMotion,
  'physics-and-measurement': physicsAndMeasurement,
  // ... other mappings
};

export function getNeetContent(chapterSlug: string) {
  return neetContent[chapterSlug];
}
