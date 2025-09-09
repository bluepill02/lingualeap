
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import type { User, Flashcard, Lesson, CompanionCircle, DashboardData } from '@/lib/types';
import { mockUser, flashcards, lessons, companionCircles } from '@/lib/data';

/**
 * Fetches all necessary data for the user's dashboard.
 * This function now queries Firestore for live user data.
 */
export async function getDashboardData(userId: string): Promise<DashboardData> {
  try {
    // 1. Fetch the user's profile from Firestore
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      // Fallback to mockUser if user doc doesn't exist, but log a warning.
      console.warn(`User document for ${userId} not found. Using mock user.`);
      return {
        userData: { ...mockUser, id: userId },
        flashcardStats: { mastered: 0, dueToday: 0, total: 0 },
        lessons: lessons.slice(0, 4),
        companionCircle: null,
      };
    }
    const userData: User = userSnap.data() as User;

    // 2. Fetch user-specific flashcard stats (simulated query)
    // In a real app, this would involve complex queries on a 'userFlashcards' collection.
    // For now, we continue to simulate this with mock data for demonstration.
    const flashcardStats = {
      mastered: flashcards.filter(fc => fc.stability > 10).length,
      dueToday: flashcards.filter(fc => new Date(fc.nextDue) <= new Date()).length,
      total: flashcards.length,
    };

    // 3. Fetch recommended lessons (can be personalized later)
    const recommendedLessons = lessons.slice(0, 4);

    // 4. Fetch the user's first companion circle from Firestore
    const circlesQuery = query(
      collection(db, 'companion-circles'),
      where('members', 'array-contains', { id: userId, name: userData.name, avatarUrl: userData.avatarUrl }),
      limit(1)
    );
    const circleSnapshot = await getDocs(circlesQuery);
    let userCompanionCircle: CompanionCircle | null = null;
    if (!circleSnapshot.empty) {
      const circleDoc = circleSnapshot.docs[0];
      userCompanionCircle = { ...circleDoc.data(), id: circleDoc.id } as CompanionCircle;
    }


    return {
      userData,
      flashcardStats,
      lessons: recommendedLessons,
      companionCircle: userCompanionCircle,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Return mock data as a fallback to prevent crashing the page
    return {
      userData: { ...mockUser, id: userId }, // Return a shell user with the correct ID
      flashcardStats: { mastered: 0, dueToday: 0, total: 0 },
      lessons: lessons.slice(0, 4),
      companionCircle: null, // Default to no circle on error
    };
  }
}
