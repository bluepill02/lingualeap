/**
 * @fileOverview This file contains the official checklist and guidelines for creating and validating NEET Physics modules.
 * This serves as a programmatic source of truth for content strategy and quality assurance.
 */

export interface ContentStrategy {
  guideline: string;
  description: string;
}

export interface QAChecklistItem {
  check: string;
  details: string;
}

export const contentStrategyGuidelines: Record<string, ContentStrategy> = {
  coreChapters: {
    guideline: "Core Chapters (High-Yield + TN Board Overlap)",
    description: "Prioritize bilingual clarity, abundant worked examples, and a comprehensive set of MCQs to ensure mastery.",
  },
  bridgeChapters: {
    guideline: "Bridge Chapters (NEET-heavy but TN-light)",
    description: "Provide extra scaffolding, culturally relevant analogies, and Tamil-first summaries to ease onboarding and bridge curriculum gaps for Tamil Nadu students.",
  },
  foundationChapters: {
    guideline: "Foundation Chapters (Conceptual but less weightage)",
    description: "Focus on clear conceptual explanations, highlighting how these ideas (like units and dimensional analysis) link across different chapters.",
  },
};

export const qaChecklist: QAChecklistItem[] = [
  {
    check: "Verify Practice Question Quotas",
    details: "Ensure 5 Worked Examples, 25 MCQs, 5 Assertion-Reason, and 5 Match-the-Columns questions.",
  },
  {
    check: "Check Adaptive MCQ Star Display",
    details: "Confirm `neetFrequency` is present for all MCQs and stars display correctly.",
  },
  {
    check: "Confirm Content Completeness",
    details: "Ensure all sections of the module are fully populated.",
  },
  {
    check: "Validate Module Accuracy",
    details: "Review all concepts, formulas, and solutions for scientific and pedagogical correctness.",
  },
  {
    check: "Maintain Quality Parity",
    details: "Use the 'Laws of Motion' module as the definitive quality benchmark for structure and depth.",
  },
  {
    check: '"Next Module" Accuracy',
    details: 'Ensure the "Next Module" information in the UI points to the correct subsequent chapter.',
  },
  {
    check: "Ensure diagrams are interactive",
    details: "Where applicable, diagrams should be interactive components rather than static text or images.",
  },
  {
    check: "Ensure all content is of very high quality",
    details: "All generated content, including notes, examples, and questions, must be accurate, clear, and pedagogically sound.",
  },
  {
    check: "Include interactive diagrams in Learn section",
    details: "The Learn section (Concept Notes) should feature approximately 2 interactive diagrams to visually explain complex concepts.",
  },
  {
    check: "Entire learn and worked examples section should be bilingual and nothing skipped",
    details: "Ensure that all paragraphs, headings, steps, explanations, and tips within the Concept Notes and Worked Examples sections have corresponding Tamil translations. No English-only text should be left in these bilingual sections.",
  },
  {
    check: "Verify XML Structure",
    details: "All file modifications must be delivered in the strict, complete XML format.",
  },
  {
    check: "Add chapter number tag to the chapter cards",
    details: "The UI for listing chapters should display a 'Chapter X' tag for clear organization."
  },
  {
    check: "Check if bilingual content was added uniformly to throughout the learn and worked examples section",
    details: "Ensure every piece of text, including headers, paragraphs, list items, and tips in the 'Learn' and 'Worked Examples' sections, has a corresponding Tamil translation."
  },
  {
    check: "Entire module should be double checked for errors AND nothing should be empty without suitable content",
    details: "Perform a final, comprehensive review of the entire module file to catch any content errors, logical flaws, or empty sections. Ensure every part of the module is complete and accurate."
  },
  {
    check: "Tamil parts for bilingual support should be in colored brackets",
    details: "The Tamil translations in bilingual sections should be enclosed in colored brackets to visually distinguish them from the English text, enhancing readability."
  }
];
