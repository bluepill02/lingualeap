
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';

interface ProgressData {
    completedSections: string[];
    lastUpdated: any;
}

export async function getNeetChapterProgress(userId: string, chapterId: string): Promise<string[]> {
    if (!userId || !chapterId) {
        console.error("User ID or Chapter ID is missing.");
        return [];
    }
    try {
        const docRef = doc(db, 'userProgress', userId, 'neetPhysics', chapterId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().completedSections || [];
        } else {
            console.log("No progress document found for this chapter. Creating a new one.");
            // Optionally create a new document if it doesn't exist
            await setDoc(docRef, { completedSections: [], lastUpdated: serverTimestamp() });
            return [];
        }
    } catch (error) {
        console.error("Error fetching user progress from Firestore:", error);
        // Return empty array or re-throw error based on desired error handling
        return [];
    }
}

export async function saveNeetChapterProgress(userId: string, chapterId: string, completedSections: string[]): Promise<void> {
    if (!userId || !chapterId) {
        console.error("User ID or Chapter ID is missing. Cannot save progress.");
        return;
    }
    try {
        const docRef = doc(db, 'userProgress', userId, 'neetPhysics', chapterId);
        await setDoc(docRef, { 
            completedSections, 
            lastUpdated: serverTimestamp() 
        }, { merge: true }); // Use merge to avoid overwriting other fields if any
    } catch (error) {
        console.error("Error saving user progress to Firestore:", error);
        // Handle the error appropriately
        throw error;
    }
}

export async function getChapterProgressForUsers(userIds: string[]): Promise<Record<string, Record<string, string[]>>> {
    if (!userIds || userIds.length === 0) {
        return {};
    }
    const allProgress: Record<string, Record<string, string[]>> = {};

    for (const userId of userIds) {
        try {
            const userProgressRef = collection(db, 'userProgress', userId, 'neetPhysics');
            const snapshot = await getDocs(userProgressRef);
            
            const userChapters: Record<string, string[]> = {};
            snapshot.forEach(doc => {
                userChapters[doc.id] = doc.data().completedSections || [];
            });
            allProgress[userId] = userChapters;
        } catch (error) {
            console.error(`Error fetching progress for user ${userId}:`, error);
            allProgress[userId] = {}; // Return empty object for user on error
        }
    }
    return allProgress;
}
