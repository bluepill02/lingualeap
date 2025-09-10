
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
    orderBy,
    setDoc
} from 'firebase/firestore';
import { companionCircles, allUsers, mockUser, circlePosts } from '@/lib/data';
import type { CompanionCircle, User, CirclePost, PostComment, ReactionType, LessonPlanWeek } from '@/lib/types';

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
        const { lessonPlan, ...circleData } = circle; // Separate lessonPlan
        
        // Convert lessonPlan tasks to a plain object for Firestore
        const serializableLessonPlan = lessonPlan?.map(week => ({
            ...week,
            tasks: week.tasks.map(task => ({...task}))
        }));

        batch.set(docRef, {...circleData, lessonPlan: serializableLessonPlan || [] });
    });

    circlePosts.forEach(post => {
        const postRef = doc(collection(db, 'companion-circles', post.circleId, 'posts'));
        batch.set(postRef, { ...post, createdAt: serverTimestamp() });
    });


    try {
        await batch.commit();
        console.log('Successfully seeded companion circles data.');
    } catch (error) {
        console.error('Error seeding companion circles data:', error);
    }
}

export async function createCircle(
  circleData: Omit<CompanionCircle, 'id' | 'members' | 'memberCount' | 'posts' | 'resources'>,
  userId: string,
  userName: string
): Promise<CompanionCircle> {
    const newDocRef = doc(circlesCollection);
    
    // Fetch creator's avatar URL from mock data for now
    const creatorUser = allUsers.find(u => u.id === userId) || allUsers.find(u => u.id === 'user-1');

    const newCircle = {
        ...circleData,
        id: newDocRef.id,
        members: [{
            id: userId,
            name: userName,
            avatarUrl: creatorUser?.avatarUrl || 'https://picsum.photos/100/100?a=1'
        }],
        memberCount: 50,
        posts: 0,
        resources: 0,
        groupNorms: [
            "Be respectful and constructive in feedback.",
            "Stay on topic and share relevant resources.",
            "Participate actively and help others learn."
        ],
        upcomingEvents: ["Weekly Kick-off Meeting - Mondays 7 PM"]
    };

    try {
        await setDoc(newDocRef, newCircle);
        return newCircle as CompanionCircle;
    } catch (error) {
        console.error("Error creating circle: ", error);
        throw new Error("Failed to create the circle in the database.");
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
            console.warn(`No circle found with id: ${id}.`);
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
    try {
        // In a real app, this would query a 'users' collection.
        // For now, we filter the mock data.
        return allUsers.filter(user => memberIds.includes(user.id));
    } catch (error) {
         console.error("Error fetching circle members: ", error);
        return [];
    }
}

export async function getCircleWithMembers(id: string): Promise<{ circle: CompanionCircle, members: User[] } | null> {
    const circle = await getCircle(id);
    if (!circle) {
        return null;
    }
    const memberIds = circle.members.map(m => m.id);
    const members = await getCircleMembers(memberIds);
    return { circle, members };
}

export async function joinCircle(userId: string, circleId: string): Promise<void> {
    try {
        const circleRef = doc(db, 'companion-circles', circleId);
        const userDoc = allUsers.find(u => u.id === userId); // Using mock data for user info
        if (!userDoc) throw new Error("User not found in mock data.");
        
        const memberData = {
            id: userDoc.id,
            name: userDoc.name,
            avatarUrl: userDoc.avatarUrl
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
        const userDoc = allUsers.find(u => u.id === userId); // Using mock data for user info
        if (!userDoc) throw new Error("User not found in mock data.");

        const memberData = {
            id: userDoc.id,
            name: userDoc.name,
            avatarUrl: userDoc.avatarUrl
        };

        await updateDoc(circleRef, {
            members: arrayRemove(memberData)
        });

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
        const postsCollection = collection(db, 'companion-circles', circleId, 'posts');
        await addDoc(postsCollection, {
            authorId: mockUser.id,
            authorName: mockUser.name,
            authorAvatarUrl: mockUser.avatarUrl,
            content: content,
            createdAt: serverTimestamp(),
            isPinned: false,
            reactions: { madeMeSmile: [], helpful: [], interesting: [], mentorApproved: [] },
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
        
        const mapDocToPost = (doc: any) => {
            const data = doc.data();
            const comments = (data.comments || []).map((comment: any) => ({
                ...comment,
                createdAt: comment.createdAt?.toDate ? comment.createdAt.toDate().toISOString() : new Date().toISOString()
            }));

            return {
                id: doc.id,
                ...data,
                createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
                comments,
            } as CirclePost;
        };

        if (snapshot.empty) {
            const mockPosts = circlePosts.filter(p => p.circleId === circleId);
            if (mockPosts.length > 0) {
                 return mockPosts.map(p => ({...p, id: `mock-${Math.random()}`} as CirclePost));
            }
            return [];
        }

        return snapshot.docs.map(mapDocToPost);
    } catch (error) {
        console.error("Error fetching posts for circle: ", error);
        return circlePosts.filter(p => p.circleId === circleId).map(p => ({
            ...p,
            id: `mock-${Math.random()}`,
            comments: p.comments.map(c => ({...c, id: `mock-comment-${Math.random()}`}))
        })) as CirclePost[];
    }
}

export async function togglePostReaction(circleId: string, postId: string, userId: string, reactionType: ReactionType): Promise<void> {
    const postRef = doc(db, 'companion-circles', circleId, 'posts', postId);
    
    try {
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            const postData = postSnap.data();
            const reactions = postData.reactions || { madeMeSmile: [], helpful: [], interesting: [], mentorApproved: [] };
            
            const reactionArray: string[] = reactions[reactionType] || [];

            if (reactionArray.includes(userId)) {
                await updateDoc(postRef, {
                    [`reactions.${reactionType}`]: arrayRemove(userId)
                });
            } else {
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
        id: doc(collection(db, 'dummy')).id, 
        authorId: mockUser.id,
        authorName: mockUser.name,
        authorAvatarUrl: mockUser.avatarUrl,
        content: commentContent,
        createdAt: serverTimestamp() 
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


    