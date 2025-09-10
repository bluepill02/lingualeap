
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
} from 'firebase/firestore';
import type { MissionSubmissionInput, MissionFeedbackOutput } from '@/lib/types';

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
