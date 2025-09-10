'use server';

import { db } from '@/lib/firebase';
import { 
    collection, 
    getDocs, 
    writeBatch,
    Timestamp,
    query,
    orderBy
} from 'firebase/firestore';
import type { LiveClass } from '@/lib/types';
import { liveClasses as seedData } from '@/lib/data';

const liveClassesCollection = collection(db, 'liveClasses');

/**
 * Seeds the database with initial live class data if the collection is empty.
 */
export async function seedLiveClasses() {
    const snapshot = await getDocs(liveClassesCollection);
    if (!snapshot.empty) {
        console.log('Live classes already seeded.');
        return;
    }
    
    console.log('Seeding live classes data...');
    const batch = writeBatch(db);

    seedData.forEach(cls => {
        const docRef = collection(db, 'liveClasses').doc();
        const eventWithTimestamp = {
            ...cls,
            startTime: Timestamp.fromDate(new Date(cls.startTime)),
            endTime: Timestamp.fromDate(new Date(cls.endTime)),
        };
        batch.set(docRef, eventWithTimestamp);
    });

    try {
        await batch.commit();
        console.log('Successfully seeded live classes data.');
    } catch (error) {
        console.error("Error seeding live classes:", error);
    }
}

/**
 * Fetches all live classes from Firestore, ordered by start time.
 */
export async function getLiveClasses(): Promise<LiveClass[]> {
    try {
        await seedLiveClasses(); // Ensure data is seeded on first fetch

        const q = query(liveClassesCollection, orderBy('startTime', 'asc'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return [];
        }

        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                startTime: (data.startTime as Timestamp).toDate().toISOString(),
                endTime: (data.endTime as Timestamp).toDate().toISOString(),
            } as LiveClass;
        });

    } catch (error) {
        console.error("Error fetching live classes: ", error);
        return [];
    }
}
