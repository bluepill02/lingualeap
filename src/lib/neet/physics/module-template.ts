
import type { NeetModule } from '@/lib/types';

/**
 * @fileoverview This file serves as a master template for creating new NEET Physics modules.
 * It outlines the complete structure and provides descriptions for each section to ensure
 * consistency, quality, and compliance with all validation checks.
 */
export const moduleTemplate: NeetModule = {
    // --- METADATA ---
    id: 'neet-physics-[chapter-name-slug]', // Unique identifier, e.g., 'neet-physics-work-energy-and-power'
    title: 'Physics - [Chapter Name] ([தமிழ் பெயர்])', // Full title for display, e.g., 'Physics - Work, Energy and Power (வேலை, ஆற்றல் மற்றும் திறன்)'
    chapter: '[Chapter Name]', // The specific chapter name, e.g., 'Work, Energy and Power'
    subject: 'Physics',

    // --- PEDAGOGICAL CONTENT ---
    learningObjectives: [
        "A clear, action-oriented learning goal (e.g., 'Define and calculate work done by constant and variable forces.').",
        "A second specific skill or concept the student will master.",
        "A third key takeaway for the chapter.",
        // (Add more as needed)
    ],
    prerequisites: [
        "A prerequisite concept (e.g., 'Newton\'s Laws of Motion').",
        "Another foundational skill needed (e.g., 'Vector dot product').",
    ],
    syllabusMapping: [
         {
            topic: '[Syllabus Topic]', // e.g., 'Work, Energy, Power, Collisions'
            tnBoardChapter: '[TN Board Reference]', // e.g., '11th Std Physics - Vol 1, Chapter 4: Work, Energy and Power'
            ncertReference: '[NCERT Reference]', // e.g., 'Class 11 Physics - Part 1, Chapter 6: Work, Energy and Power'
            notes: '[Strategic Notes]', // e.g., 'Work-Energy Theorem is a very high-yield topic. Collision problems are also common.'
            mappingDescription: '[UI Description]' // e.g., '11th Std Physics - Vol 1, Chapter 4 maps to NEET Physics Unit 4'
        }
    ],
    conceptOverview: "A high-level, engaging summary of the chapter's core concepts. This section explains the 'why' behind the physics, its importance, and how it connects to other topics. It should be written in clear, simple language.",
    tamilConnection: "A brief paragraph connecting the chapter's concepts to Tamil language, culture, or history to make it more relatable for Tamil Nadu students. (e.g., 'சங்க இலக்கியத்தில் ...').",
    culturalContext: "A paragraph connecting the physics concepts to real-world, culturally relevant examples from India or Tamil Nadu (e.g., temples, festivals, common sights).",
    
    // --- CORE LEARNING ---
    conceptNotes: [
        {
            english: `### [Concept Title 1]
A detailed explanation of the first key concept. Should include definitions, formulas in LaTeX (e.g., $W = \\vec{F} \\cdot \\vec{s}$), and clear, step-by-step reasoning. Can include lists and tables.`,
            tamil: `### [கருத்து தலைப்பு 1]
முதல் முக்கிய கருத்தின் விரிவான விளக்கம். வரையறைகள், LaTeX இல் சூத்திரங்கள் (எ.கா., $W = \\vec{F} \\cdot \\vec{s}$), மற்றும் தெளிவான, படிப்படியான பகுத்தறிவு ஆகியவற்றை உள்ளடக்க வேண்டும்.`
        },
        {
            english: `### [Concept Title 2]
An explanation for the second concept. This section can also include interactive placeholders like '{{INTERACTIVE_DIAGRAM}}' which will be replaced by a component.`,
            tamil: `### [கருத்து தலைப்பு 2]
இரண்டாவது கருத்துக்கான விளக்கம். இந்த பிரிவில் '{{INTERACTIVE_DIAGRAM}}' போன்ற ஊடாடும் ஒதுக்கிடங்களையும் சேர்க்கலாம்.`
        }
        // (Add more concept notes as needed)
    ],

    // --- PROBLEM SOLVING ---
    workedExamples: [
        // (Must have at least 5 examples)
        {
            title: "[Difficulty Level]: [Problem Category]", // e.g., "NEET Level: Work-Energy Theorem"
            titleTamil: "[சிரம நிலை]: [சிக்கல் வகை]",
            difficulty: 'Medium', // 'Easy', 'Medium', or 'Hard'
            problem: "A clear problem statement in English.",
            problemTamil: "தமிழில் ஒரு தெளிவான சிக்கல் அறிக்கை.",
            fbd: [ // Optional: For mechanics problems
                {
                    body: "Object Name",
                    forces: [ { name: "F", direction: "right" } ],
                    isAngled: false
                }
            ],
            solutionSteps: [
                {
                    step: 1,
                    explanation: "A clear, logical explanation for the first step of the solution.",
                    explanationTamil: "தீர்வின் முதல் படிக்கு ஒரு தெளிவான, தர்க்கரீதியான விளக்கம்.",
                    calculation: "Optional: A LaTeX string for the calculation, e.g., 'W = Fs = 10 \\times 5 = 50 \\text{ J}'"
                },
                // (Add more steps as needed)
            ],
            neetHack: "A clever shortcut, pattern, or trick to solve similar problems faster in the exam.",
            neetHackTamil: "தேர்வில் இதேபோன்ற சிக்கல்களை விரைவாகத் தீர்க்க ஒரு புத்திசாலித்தனமான குறுக்குவழி, முறை அல்லது தந்திரம்.",
            commonPitfall: "A common mistake students make when solving this type of problem.",
            commonPitfallTamil: "இந்த வகை சிக்கலைத் தீர்க்கும்போது மாணவர்கள் செய்யும் ஒரு பொதுவான தவறு."
        }
    ],

    // --- ASSESSMENT ---
    mcqs: [
        // (Must have at least 25 MCQs)
        {
            question: "A clear, well-formed multiple-choice question.",
            options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
            answer: "A. Option 1",
            explanation: "A detailed explanation of why the correct answer is right and why the other options are wrong.",
            neetFrequency: 4 // A rating from 1 (low) to 5 (high)
        }
    ],
    assertionReasons: [
        // (Must have at least 5 Assertion-Reason questions)
        {
            assertion: "A statement of fact or principle.",
            reason: "Another statement that may or may not explain the assertion.",
            answer: "A", // A, B, C, D, or E
            explanation: "A clear explanation of the relationship between the assertion and the reason.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        // (Must have at least 5 Match-the-Columns questions)
        {
            column1: ["(a) Item 1", "(b) Item 2"],
            column2: ["(p) Match A", "(q) Match B"],
            answer: "a-p, b-q",
            explanation: "An optional explanation for the matches.",
            neetFrequency: 2
        }
    ],

    // --- REINFORCEMENT & SUMMARY ---
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "W = \\vec{F} \\cdot \\vec{s}",
                description: "Work Done by a Constant Force",
                descriptionTamil: "மாறா விசையால் செய்யப்பட்ட வேலை"
            }
        ],
        diagrams: [
             {
                title: "Example FBD",
                description: "This shows how to draw a Free-Body Diagram for a block on an incline.",
                fbd: {
                    body: "Block",
                    forces: [
                        { name: "mg", direction: "down", showComponents: true },
                        { name: "N", direction: "up-left" },
                        { name: "f", direction: "up-right" }
                    ],
                    isAngled: true
                }
            }
        ]
    },
    keyTakeaways: [
        "A key summary point that the student must remember.",
        "Another crucial concept distilled into a single sentence.",
    ],
    mnemonics: [
        {
            text: "A clever mnemonic in English to help remember a concept or formula.",
            tamil: "ஒரு கருத்து அல்லது சூத்திரத்தை நினைவில் கொள்ள உதவும் ஒரு புத்திசாலித்தனமான தமிழ் நினைவுபடுத்தி."
        }
    ],
    neetTips: [
        {
            text: "A specific, actionable tip for tackling NEET questions related to this chapter.",
            tamil: "இந்த அத்தியாயம் தொடர்பான நீட் கேள்விகளைக் கையாள ஒரு குறிப்பிட்ட, செயல்படுத்தக்கூடிய குறிப்பு."
        }
    ],

    // --- ENGAGEMENT & NEXT STEPS ---
    studentTip: {
        english: "A friendly, encouraging tip for the student.",
        tamil: "மாணவருக்கான ஒரு நட்புரீதியான, ஊக்கமளிக்கும் குறிப்பு."
    },
    peerDiscussion: {
        english: "A thought-provoking question to discuss with friends.",
        tamil: "நண்பர்களுடன் விவாதிக்க ஒரு சிந்தனையைத் தூண்டும் கேள்வி."
    },
    nextChapter: {
        title: "[Next Chapter Name]",
        titleTamil: "[அடுத்த அத்தியாயத்தின் பெயர்]"
    },

    // --- METADATA FOR QA ---
    validationReport: [
        // This will be populated by the validation script.
    ]
};
