
'use server';

import { db } from '@/lib/firebase';
import { 
    collection, 
    doc, 
    setDoc, 
    serverTimestamp,
    query,
    where,
    orderBy,
    limit,
    getDocs,
    Timestamp,
    addDoc,
} from 'firebase/firestore';
import type { MissionSubmissionInput, MissionFeedbackOutput, ExamModule } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

interface MissionSubmissionRecord {
    userId: string;
    missionId: string;
    submission: MissionSubmissionInput;
    feedback: MissionFeedbackOutput;
    submittedAt: Timestamp;
}

export async function saveMissionSubmission(
    userId: string, 
    missionId: string, 
    submission: MissionSubmissionInput, 
    feedback: MissionFeedbackOutput
): Promise<void> {
    try {
        const submissionRef = doc(collection(db, 'mission-submissions'));
        
        await setDoc(submissionRef, {
            userId,
            missionId,
            submission,
            feedback,
            submittedAt: serverTimestamp()
        });
    } catch (error) {
        console.error("Error saving mission submission: ", error);
        throw new Error("Could not save your submission to the database.");
    }
}

export async function getLatestMissionSubmission(
    userId: string, 
    missionId: string
): Promise<MissionSubmissionRecord | null> {
    try {
        const submissionsRef = collection(db, 'mission-submissions');
        const q = query(
            submissionsRef,
            where('userId', '==', userId),
            where('missionId', '==', missionId),
            orderBy('submittedAt', 'desc'),
            limit(1)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const latestDoc = querySnapshot.docs[0];
        return latestDoc.data() as MissionSubmissionRecord;

    } catch (error) {
        console.error("Error fetching latest mission submission: ", error);
        throw new Error("Could not retrieve your previous submissions.");
    }
}

export async function publishMissionToCommunity(submission: MissionSubmissionInput): Promise<void> {
    try {
        const communityModulesRef = collection(db, 'community-modules');
        const newDocRef = doc(communityModulesRef); // Create a reference with a new ID first

        // Transform the submission into an ExamModule structure
        const communityModule: Partial<ExamModule> = {
            id: newDocRef.id, // Use the generated ID
            title: `Community: ${submission.concept}`,
            examName: 'NEET',
            language: 'English',
            category: submission.concept,
            vocabulary: [
                {
                    word: "Core Concept",
                    romanization: submission.concept,
                    definition: submission.script,
                    partOfSpeech: 'Explanation',
                    sentence: submission.diagramDescription,
                    sentenceTranslation: 'Visual Analogy'
                }
            ],
            quizzes: submission.mcqs.map(mcq => ({
                type: 'multiple-choice',
                question: mcq.question,
                options: mcq.options,
                answer: mcq.correctAnswer
            })),
            errorAnalysis: []
        };
        
        await setDoc(newDocRef, communityModule); // Use setDoc with the ref

    } catch(error) {
         console.error("Error publishing mission to community: ", error);
        throw new Error("Could not publish your mission.");
    }
}


export async function getCommunityModules(): Promise<ExamModule[]> {
    try {
        const communityModulesRef = collection(db, 'community-modules');
        const q = query(communityModulesRef, orderBy('title'), limit(10));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return [];
        }

        return snapshot.docs.map(doc => doc.data() as ExamModule);
    } catch(error) {
        console.error("Error fetching community modules:", error);
        return [];
    }
}

