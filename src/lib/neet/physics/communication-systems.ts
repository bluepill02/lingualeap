
import type { NeetModule } from '@/lib/types';

export const communicationSystemsModule: NeetModule = {
    id: 'neet-physics-communication-systems',
    title: 'Physics - Communication Systems (தகவல் தொடர்பு அமைப்புகள்)',
    chapter: 'Communication Systems',
    subject: 'Physics',
    learningObjectives: [
        "Understand the basic elements of a communication system: transmitter, channel, and receiver.",
        "Differentiate between various types of communication systems (e.g., analog vs. digital).",
        "Define and understand the need for modulation, particularly amplitude modulation (AM).",
        "Analyze the process of amplitude modulation and calculate the modulation index.",
        "Describe the basic principles of wave propagation: ground wave, sky wave, and space wave propagation.",
        "Understand the concept of bandwidth in signals and transmission media."
    ],
    prerequisites: [
        "Basic understanding of waves, especially electromagnetic waves.",
        "Familiarity with concepts like frequency, amplitude, and phase."
    ],
    conceptOverview: "This chapter provides an overview of the fundamental principles behind modern communication. We explore how information, whether it's voice, video, or data, is processed and transmitted over long distances. The core concepts include the essential blocks of any communication system and the crucial process of modulation, which is the technique of superimposing a low-frequency information signal onto a high-frequency carrier wave for efficient transmission. We'll focus on amplitude modulation (AM) as a key example and discuss how different types of electromagnetic waves are used for various communication needs, from local radio broadcasts to satellite TV.",
    tamilConnection: "மொபைல் போன் அழைப்புகள் முதல் தொலைக்காட்சி ஒளிபரப்பு வரை, தகவல் தொடர்பு அமைப்புகள் நம் அன்றாட வாழ்வின் ஒரு அங்கமாகும். ஒரு தகவலை (குரல், படம்) நீண்ட தூரம் அனுப்ப, அதை அதிக அதிர்வெண் கொண்ட ஒரு ஊர்தி அலையுடன் (carrier wave) கலக்க வேண்டும். இந்தச் செயல்முறைக்கு பண்பேற்றம் (modulation) என்று பெயர். இந்த அத்தியாயம் இதன் அடிப்படைக் கொள்கைகளை விளக்குகிறது.",
    culturalContext: "Think of the radio broadcasts that reach even the most remote villages in Tamil Nadu, bringing news, music, and entertainment. This is possible due to sky wave propagation, where radio waves are reflected by the ionosphere to cover vast distances. This chapter explains the physics that makes such long-distance communication a reality.",
    syllabusMapping: [
         {
            topic: 'Communication Systems',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 11: Recent Developments in Physics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 15: Communication Systems',
            notes: 'While removed from the latest NEET syllabus, some basic concepts like modulation index and bandwidth can still be relevant in broader questions. A quick overview is sufficient.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 11 maps to NEET Physics Unit 19'
        }
    ],
    conceptNotes: [],
    workedExamples: [],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
