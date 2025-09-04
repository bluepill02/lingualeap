
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
    check: "Check Summary Relevance",
    details: "Verify that NEET Tips, Chapter Summary, and Mnemonics are highly relevant to the specific chapter's content.",
  },
  {
    check: '"Next Module" Accuracy',
    details: 'Ensure the "Next Module" information in the UI points to the correct subsequent chapter.',
  },
  {
    check: "Verify XML Structure",
    details: "All file modifications must be delivered in the strict, complete XML format.",
  },
];
