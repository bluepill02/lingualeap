
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';

interface ProgressData {
    completedSections: string[];
    lastUpdated: any;
}

export async function getNeetChapterProgress(userId: string, subject: string, chapterId: string): Promise<string[]> {
    if (!userId || !subject || !chapterId) {
        console.error("User ID, subject, or Chapter ID is missing.");
        return [];
    }
    try {
        const docRef = doc(db, 'userProgress', userId, `neet${subject}`, chapterId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().completedSections || [];
        } else {
            console.log("No progress document found for this chapter. Creating a new one.");
            await setDoc(docRef, { completedSections: [], lastUpdated: serverTimestamp() });
            return [];
        }
    } catch (error) {
        console.error("Error fetching user progress from Firestore:", error);
        return [];
    }
}

export async function saveNeetChapterProgress(userId: string, subject: string, chapterId: string, completedSections: string[]): Promise<void> {
    if (!userId || !subject || !chapterId) {
        console.error("User ID, subject, or Chapter ID is missing. Cannot save progress.");
        return;
    }
    try {
        const docRef = doc(db, 'userProgress', userId, `neet${subject}`, chapterId);
        await setDoc(docRef, { 
            completedSections, 
            lastUpdated: serverTimestamp() 
        }, { merge: true });
    } catch (error) {
        console.error("Error saving user progress to Firestore:", error);
        throw error;
    }
}

export async function getChapterProgressForUsers(userIds: string[], subject: string): Promise<Record<string, Record<string, string[]>>> {
    if (!userIds || userIds.length === 0) {
        return {};
    }
    const allProgress: Record<string, Record<string, string[]>> = {};

    for (const userId of userIds) {
        try {
            const userProgressRef = collection(db, 'userProgress', userId, `neet${subject}`);
            const snapshot = await getDocs(userProgressRef);
            
            const userChapters: Record<string, string[]> = {};
            snapshot.forEach(doc => {
                userChapters[doc.id] = doc.data().completedSections || [];
            });
            allProgress[userId] = userChapters;
        } catch (error) {
            console.error(`Error fetching progress for user ${userId}:`, error);
            allProgress[userId] = {};
        }
    }
    return allProgress;
}
