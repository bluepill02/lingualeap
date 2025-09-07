
'use server';

import { db } from '@/lib/firebase';
import { 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    writeBatch
} from 'firebase/firestore';
import { companionCircles, allUsers } from '@/lib/data';
import type { CompanionCircle, User } from '@/lib/types';

const circlesCollection = collection(db, 'companion-circles');

// Function to seed the database with initial data from /lib/data.ts
// This should be run once, or when you need to reset the data.
export async function seedCirclesData() {
    console.log('Starting to seed companion circles data...');
    const batch = writeBatch(db);

    const snapshot = await getDocs(circlesCollection);
    if (!snapshot.empty) {
        console.log('Circles collection already exists. Seeding skipped.');
        return;
    }

    companionCircles.forEach(circle => {
        const docRef = doc(db, 'companion-circles', circle.id);
        batch.set(docRef, circle);
    });

    try {
        await batch.commit();
        console.log('Successfully seeded companion circles data.');
    } catch (error) {
        console.error('Error seeding companion circles data:', error);
    }
}

export async function getCircles(): Promise<CompanionCircle[]> {
    try {
        const snapshot = await getDocs(circlesCollection);
        if (snapshot.empty) {
            await seedCirclesData();
            const seededSnapshot = await getDocs(circlesCollection);
            return seededSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CompanionCircle));
        }
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CompanionCircle));
    } catch (error) {
        console.error("Error fetching circles: ", error);
        return [];
    }
}

export async function getCircle(id: string): Promise<CompanionCircle | null> {
    try {
        const docRef = doc(db, 'companion-circles', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { ...docSnap.data(), id: docSnap.id } as CompanionCircle;
        } else {
            console.warn(`No circle found with id: ${id}`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching circle: ", error);
        return null;
    }
}

export async function getCircleMembers(memberIds: string[]): Promise<User[]> {
    if (!memberIds || memberIds.length === 0) {
        return [];
    }
    // Note: In a real app, this would query a 'users' collection in Firestore.
    // For this prototype, we'll filter the mock data.
    const members = allUsers.filter(user => memberIds.includes(user.id));
    return members;
}

export async function joinCircle(userId: string, circleId: string): Promise<void> {
    try {
        const circleRef = doc(db, 'companion-circles', circleId);
        const userRef = allUsers.find(u => u.id === userId);
        if(!userRef) throw new Error("User not found");

        const memberData = { id: userRef.id, name: userRef.name, avatarUrl: userRef.avatarUrl };
        
        await updateDoc(circleRef, {
            members: arrayUnion(memberData)
        });
    } catch (error) {
        console.error("Error joining circle: ", error);
        throw error;
    }
}

export async function leaveCircle(userId: string, circleId: string): Promise<void> {
     try {
        const circleRef = doc(db, 'companion-circles', circleId);
        const userRef = allUsers.find(u => u.id === userId);
        if(!userRef) throw new Error("User not found");

        const memberData = { id: userRef.id, name: userRef.name, avatarUrl: userRef.avatarUrl };

        await updateDoc(circleRef, {
            members: arrayRemove(memberData)
        });
    } catch (error) {
        console.error("Error leaving circle: ", error);
        throw error;
    }
}
