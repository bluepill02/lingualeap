
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
    writeBatch,
    addDoc,
    serverTimestamp,
    orderBy
} from 'firebase/firestore';
import { companionCircles, allUsers, mockUser } from '@/lib/data';
import type { CompanionCircle, User, CirclePost, PostComment, ReactionType } from '@/lib/types';
import { getAuth } from 'firebase/auth';

const circlesCollection = collection(db, 'companion-circles');

// This function is for development and can be removed in production
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
            // In a real production app, you might not want to auto-seed.
            // This is here for prototype convenience.
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
            console.warn(`No circle found with id: ${id} in Firestore. Falling back to mock data.`);
            const mockCircle = companionCircles.find(c => c.id === id);
            return mockCircle || null;
        }
    } catch (error) {
        console.error("Error fetching circle: ", error);
        // Fallback to mock data on error as well for development robustness
        const mockCircle = companionCircles.find(c => c.id === id);
        return mockCircle || null;
    }
}

export async function getCircleMembers(memberIds: string[]): Promise<User[]> {
    if (!memberIds || memberIds.length === 0) {
        return [];
    }
    // In a real app, this would query a 'users' collection in Firestore.
    // For this prototype, we'll filter the mock data, which is more resilient for dev.
    try {
        // This is a placeholder for a real user query.
        // const q = query(collection(db, 'users'), where('id', 'in', memberIds));
        // const snapshot = await getDocs(q);
        // return snapshot.docs.map(doc => doc.data() as User);
        return allUsers.filter(user => memberIds.includes(user.id));
    } catch (error) {
         console.error("Error fetching circle members: ", error);
         // Fallback to mock data on error.
        return allUsers.filter(user => memberIds.includes(user.id));
    }
}

export async function joinCircle(userId: string, circleId: string): Promise<void> {
    try {
        const circleRef = doc(db, 'companion-circles', circleId);
        const userToJoin = allUsers.find(u => u.id === userId) || mockUser; // Fallback to mockUser

        const memberData = { 
            id: userToJoin.id, 
            name: userToJoin.name, 
            avatarUrl: userToJoin.avatarUrl 
        };
        
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
        const circleSnap = await getDoc(circleRef);
        if (!circleSnap.exists()) {
            throw new Error("Circle not found");
        }
        
        const circleData = circleSnap.data() as CompanionCircle;
        const memberToRemove = circleData.members.find(m => m.id === userId);

        if (memberToRemove) {
            await updateDoc(circleRef, {
                members: arrayRemove(memberToRemove)
            });
        } else {
            console.warn(`User with id ${userId} not found in circle ${circleId}`);
        }
    } catch (error) {
        console.error("Error leaving circle: ", error);
        throw error;
    }
}

export async function addPostToCircle(circleId: string, content: string): Promise<void> {
    if (!content.trim()) {
        throw new Error("Post content cannot be empty.");
    }
    try {
        // In a real app, you'd get the current user from auth state.
        // For this prototype, we'll continue using the mockUser.
        const postsCollection = collection(db, 'companion-circles', circleId, 'posts');
        await addDoc(postsCollection, {
            authorId: mockUser.id,
            authorName: mockUser.name,
            authorAvatarUrl: mockUser.avatarUrl,
            content: content,
            createdAt: serverTimestamp(),
            isPinned: false,
            reactions: { madeMeSmile: [], helpful: [], interesting: [] },
            comments: []
        });
    } catch (error) {
        console.error("Error adding post to circle: ", error);
        throw error;
    }
}

export async function getPostsForCircle(circleId: string): Promise<CirclePost[]> {
    try {
        const postsCollection = collection(db, 'companion-circles', circleId, 'posts');
        const q = query(postsCollection, orderBy('isPinned', 'desc'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const comments = (data.comments || []).map((comment: any) => ({
                ...comment,
                createdAt: comment.createdAt?.toDate ? comment.createdAt.toDate().toISOString() : new Date().toISOString()
            }))

            return {
                id: doc.id,
                ...data,
                // Convert Firestore Timestamp to ISO string to ensure serializability
                createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
                comments,
            } as CirclePost;
        });
    } catch (error) {
        console.error("Error fetching posts for circle: ", error);
        return [];
    }
}

export async function togglePostReaction(circleId: string, postId: string, userId: string, reactionType: ReactionType): Promise<void> {
    const postRef = doc(db, 'companion-circles', circleId, 'posts', postId);
    
    try {
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            const postData = postSnap.data();
            const reactions = postData.reactions || { madeMeSmile: [], helpful: [], interesting: [] };
            
            const reactionArray: string[] = reactions[reactionType] || [];

            if (reactionArray.includes(userId)) {
                // User is removing their reaction
                await updateDoc(postRef, {
                    [`reactions.${reactionType}`]: arrayRemove(userId)
                });
            } else {
                // User is adding a new reaction
                await updateDoc(postRef, {
                    [`reactions.${reactionType}`]: arrayUnion(userId)
                });
            }
        } else {
            throw new Error("Post not found");
        }
    } catch(error) {
        console.error("Error toggling reaction:", error);
        throw error;
    }
}


export async function addCommentToPost(circleId: string, postId: string, commentContent: string): Promise<void> {
    if (!commentContent.trim()) {
        throw new Error("Comment cannot be empty.");
    }
    const postRef = doc(db, 'companion-circles', circleId, 'posts', postId);
    
    const newComment = {
        id: doc(collection(db, 'dummy')).id, // Generate a unique ID for the comment
        authorId: mockUser.id,
        authorName: mockUser.name,
        authorAvatarUrl: mockUser.avatarUrl,
        content: commentContent,
        createdAt: serverTimestamp() // Use server timestamp for consistency
    };

    try {
        await updateDoc(postRef, {
            comments: arrayUnion(newComment)
        });
    } catch(error) {
        console.error("Error adding comment:", error);
        throw error;
    }
}
