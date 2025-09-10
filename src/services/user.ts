
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, collection } from 'firebase/firestore';
import type { User } from '@/lib/types';
import { learnerPersonas } from '@/lib/personas';


/**
 * Creates a new user document in Firestore after sign-up.
 * @param uid The user's unique ID from Firebase Authentication.
 * @param name The user's full name.
 * @param email The user's email address.
 */
export async function createUserInFirestore(uid: string, name: string, email: string): Promise<void> {
    try {
        const userRef = doc(db, 'users', uid);
        await setDoc(userRef, {
            id: uid,
            name: name,
            email: email,
            avatarUrl: `https://picsum.photos/seed/${uid}/100/100`, // Default avatar
            streak: 0,
            xp: 0,
            language: 'Hindi', // Default language
            timezone: 'Asia/Kolkata', // Default timezone
            isPro: false,
            proficiency: 'Beginner',
            goals: ['Travel'],
            persona: learnerPersonas[0].type,
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error creating user in Firestore: ", error);
        throw new Error("Could not create user profile.");
    }
}


/**
 * Fetches a user's settings from Firestore.
 * @param userId The ID of the user to fetch.
 * @returns The user's data object or null if not found.
 */
export async function getUserSettings(userId: string): Promise<Partial<User> | null> {
    if (!userId) {
        console.warn("User ID is missing, cannot fetch settings.");
        return null;
    }
    try {
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data() as User;
        } else {
            console.log(`No user document found for ${userId}, a new one may be created on first save.`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching user settings from Firestore:", error);
        // Instead of throwing an error that crashes the app, return null.
        // The UI component will handle the null case.
        return null;
    }
}

/**
 * Creates or updates a user's settings in Firestore.
 * @param userId The ID of the user to update.
 * @param settings The partial user object containing settings to save.
 */
export async function updateUserSettings(userId: string, settings: Partial<User>): Promise<void> {
     if (!userId) {
        throw new Error("User ID is required to update settings.");
    }
     if (!settings || Object.keys(settings).length === 0) {
        console.warn("No settings provided to update.");
        return;
    }
    try {
        const userRef = doc(db, 'users', userId);
        
        // Use setDoc with { merge: true } to create the doc if it doesn't exist or update it if it does.
        await setDoc(userRef, {
            ...settings,
            lastUpdated: serverTimestamp() // Add a timestamp for when the settings were last updated
        }, { merge: true });

    } catch (error) {
        console.error("Error updating user settings in Firestore:", error);
        throw new Error("Could not save user settings.");
    }
}
