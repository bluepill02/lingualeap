
'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import type { Flashcard } from '@/lib/types';
import { flashcards as mockFlashcards } from '@/lib/data';

/**
 * Fetches all flashcards associated with a specific user from Firestore.
 */
export async function getUserFlashcards(userId: string): Promise<Flashcard[]> {
  if (!userId) {
    console.warn("User ID is missing, cannot fetch flashcards.");
    return [];
  }
  
  try {
    const flashcardsRef = collection(db, 'userFlashcards');
    const q = query(flashcardsRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      // It's normal for a new user to have no flashcards.
      return [];
    }

    return snapshot.docs.map(doc => {
        const data = doc.data();
        // Ensure Timestamps are converted to ISO strings for consistency
        return {
            ...data,
            id: doc.id,
            lastReviewed: (data.lastReviewed as Timestamp)?.toDate().toISOString() || new Date().toISOString(),
            nextDue: (data.nextDue as Timestamp)?.toDate().toISOString() || new Date().toISOString(),
        } as Flashcard;
    });

  } catch (error) {
    console.error(`Error fetching flashcards for user ${userId}:`, error);
    // Fallback to mock data in case of any Firestore error
    // In a real production app, you might want to return [] or handle the error differently.
    return mockFlashcards;
  }
}
