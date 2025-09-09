
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { User, Flashcard, Lesson, CompanionCircle, DashboardData } from '@/lib/types';
import { mockUser, flashcards, lessons, companionCircles } from '@/lib/data';

/**
 * Fetches all necessary data for the user's dashboard.
 * In a real application, this would involve complex queries to get user-specific data.
 * For this prototype, we are using a mix of mock data and simulating a user fetch.
 */
export async function getDashboardData(userId: string): Promise<DashboardData> {
  try {
    // In a real app, you would fetch the user document from Firestore
    // const userRef = doc(db, 'users', userId);
    // const userSnap = await getDoc(userRef);
    // if (!userSnap.exists()) {
    //   throw new Error('User not found');
    // }
    // const userData: User = userSnap.data() as User;

    // --- MOCK IMPLEMENTATION ---
    // For this prototype, we'll find the user from the mock data or default to mockUser.
    const userData = { ...mockUser, id: userId }; // Use the provided userId

    // Fetch user-specific flashcard stats (mocked)
    // In a real app, you would query the user's flashcard progress collection
    const flashcardStats = {
      mastered: flashcards.filter(fc => fc.stability > 10).length,
      dueToday: flashcards.filter(fc => new Date(fc.nextDue) <= new Date()).length,
      total: flashcards.length,
    };

    // Fetch recommended lessons (mocked)
    const recommendedLessons = lessons.slice(0, 4);

    // Fetch user's first companion circle (mocked)
    // In a real app, you would query circles where the user is a member
    const userCompanionCircle = companionCircles.find(c => c.members.some(m => m.id === userId)) || companionCircles[0];

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
      userData: mockUser,
      flashcardStats: { mastered: 0, dueToday: 0, total: 0 },
      lessons: lessons,
      companionCircle: companionCircles[0],
    };
  }
}
