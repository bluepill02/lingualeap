
'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import type { Flashcard } from '@/lib/types';
import { flashcards as mockFlashcards } from '@/lib/data';

/**
 * Fetches all flashcards associated with a specific user.
 * In a real application, this would query a subcollection under the user's document.
 * For this prototype, we'll simulate it by returning all flashcards, as if they belong to every user.
 */
export async function getUserFlashcards(userId: string): Promise<Flashcard[]> {
  if (!userId) {
    console.warn("User ID is missing, cannot fetch flashcards.");
    return [];
  }
  
  try {
    // This is a simplified query. A real-world app might have a structure like /users/{userId}/flashcards
    // For now, we will assume a global 'flashcards' collection and that all flashcards belong to the user for demo purposes.
    // This is because we don't have a mechanism to assign flashcards to users yet.
    
    // Simulating fetching all flashcards as if they belong to the user.
    // If you had a 'userFlashcards' collection, the query would look like this:
    // const flashcardsRef = collection(db, 'users', userId, 'userFlashcards');
    // const snapshot = await getDocs(flashcardsRef);
    // if (snapshot.empty) {
    //     return [];
    // }
    // return snapshot.docs.map(doc => doc.data() as Flashcard);

    // Using mock data as a fallback since the user-specific collection doesn't exist yet.
    return mockFlashcards;

  } catch (error) {
    console.error(`Error fetching flashcards for user ${userId}:`, error);
    // Fallback to mock data in case of any Firestore error
    return mockFlashcards;
  }
}
