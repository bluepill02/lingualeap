
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
    setDoc,
    Timestamp,
    DocumentReference
} from 'firebase/firestore';
import { allUsers, mockUser, circlePosts as seedPosts } from '@/lib/data';
import type { CompanionCircle, User, CirclePost, PostComment, ReactionType, LessonPlanWeek } from '@/lib/types';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';


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
    
    const companionCircles: Omit<CompanionCircle, 'id'>[] = [
      {
        name: 'NEET Physics Problem Solvers',
        nameTamil: 'நீட் இயற்பியல் சிக்கல் தீர்ப்பவர்கள்',
        description: 'A mentor-led group focused on tackling tough NEET physics problems, sharing strategies, and clarifying doubts with an experienced tutor.',
        memberCount: 25,
        posts: 112,
        resources: 15,
        type: 'Mentor-led',
        subject: 'Physics',
        difficulty: 'Core',
        language: 'Multi Language',
        format: 'Live Session',
        members: [{id: 'user-4', name: 'Arjun Krishnan', avatarUrl: 'https://picsum.photos/100/100?a=4'}, {id: 'user-2', name: 'Priya Sharma', avatarUrl: 'https://picsum.photos/100/100?a=2'}],
        groupNorms: ['Post at least one challenging problem per week.', 'Be respectful and constructive in feedback.', 'No spam or off-topic discussions.'],
        upcomingEvents: ['Weekly Doubt Clearing Session - Sat 7 PM', 'Live Problem Solving: Rotational Motion - Next Tue 8 PM'],
        lessonPlan: [],
      },
       {
        name: 'Biology Diagram Practice',
        nameTamil: 'உயிரியல் வரைபடப் பயிற்சி',
        description: 'A peer-led study circle for students to share, practice, and get feedback on important NEET biology diagrams.',
        memberCount: 30,
        posts: 88,
        resources: 22,
        type: 'Peer Study',
        subject: 'Biology',
        difficulty: 'Bridge',
        language: 'Multi Language',
        format: 'Resource Hub',
        members: allUsers.slice(2, 6).map(u => ({id: u.id, name: u.name, avatarUrl: u.avatarUrl})),
        groupNorms: ['Share one diagram you find difficult each week.', 'Provide helpful feedback on at least two posts from others.', 'All diagrams must be from the NEET syllabus.'],
        upcomingEvents: ['Peer Review: Human Anatomy Diagrams - Fri 6 PM'],
      },
    ];


    companionCircles.forEach((circle, index) => {
        const circleId = `circle-${index + 1}`;
        const docRef = doc(db, 'companion-circles', circleId);
        const { lessonPlan, ...circleData } = circle; // Separate lessonPlan
        
        // Convert lessonPlan tasks to a plain object for Firestore
        const serializableLessonPlan = lessonPlan?.map(week => ({
            ...week,
            tasks: week.tasks.map(task => ({...task}))
        }));

        batch.set(docRef, {...circleData, id: circleId, lessonPlan: serializableLessonPlan || [] });

        // Seed posts for this circle
        const postsForThisCircle = seedPosts.filter(p => p.circleId === circleId);
        postsForThisCircle.forEach(postData => {
            const postRef = doc(collection(db, 'companion-circles', circleId, 'posts'));
            const {circleId, ...post} = postData;
            batch.set(postRef, { ...post, createdAt: serverTimestamp() });
        });
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
    
    const creatorUser = allUsers.find(u => u.id === userId) || { avatarUrl: `https://picsum.photos/seed/${userId}/100/100`, name: userName || 'New User' };

    const newCircle = {
        ...circleData,
        id: newDocRef.id,
        members: [{
            id: userId,
            name: creatorUser.name,
            avatarUrl: creatorUser.avatarUrl
        }],
        memberCount: 50, // Default max members
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


export async function getCircleMembers(memberIds: string[]): Promise<User[]> {
     if (!memberIds || memberIds.length === 0) {
        return [];
    }
    // In a real app, this would query a 'users' collection.
    // For this prototype, we'll filter the mock data.
    return allUsers.filter(user => memberIds.includes(user.id));
}

export async function getCircleWithMembers(id: string): Promise<{ circle: CompanionCircle, members: User[] } | null> {
    try {
        const docRef = doc(db, 'companion-circles', id);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
            console.warn(`No circle found with id: ${id}.`);
            return null;
        }

        const circle = { ...docSnap.data(), id: docSnap.id } as CompanionCircle;
        const memberIds = circle.members.map(m => m.id);
        
        // This should be a real database query in a production app
        const members = allUsers.filter(user => memberIds.includes(user.id));

        return { circle, members };
    } catch (error) {
        console.error("Error fetching circle with members: ", error);
        return null;
    }
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
        const circleSnap = await getDoc(circleRef);
        if (!circleSnap.exists()) throw new Error("Circle not found");
        
        const circleData = circleSnap.data() as CompanionCircle;
        const memberToRemove = circleData.members.find(m => m.id === userId);

        if (!memberToRemove) {
            console.warn("User to remove not found in circle's member list.");
            return;
        }

        await updateDoc(circleRef, {
            members: arrayRemove(memberToRemove)
        });

    } catch (error) {
        console.error("Error leaving circle: ", error);
        throw error;
    }
}

export async function addPostToCircle(circleId: string, content: string, authorInfo: { uid: string, displayName: string | null, photoURL: string | null }): Promise<void> {
    if (!content.trim()) {
        throw new Error("Post content cannot be empty.");
    }
    try {
        const postsCollection = collection(db, 'companion-circles', circleId, 'posts');
        await addDoc(postsCollection, {
            authorId: authorInfo.uid,
            authorName: authorInfo.displayName || 'Anonymous',
            authorAvatarUrl: authorInfo.photoURL || `https://picsum.photos/seed/${authorInfo.uid}/100/100`,
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

        if (snapshot.empty) {
            // Seeding mock posts if collection is empty
            const batch = writeBatch(db);
            const mockPosts = seedPosts.filter(p => p.circleId === circleId);
            mockPosts.forEach(postData => {
                 const postRef = doc(postsCollection);
                 const {circleId, ...post} = postData;
                 batch.set(postRef, { ...post, createdAt: serverTimestamp() });
            });
            await batch.commit();

            const newSnapshot = await getDocs(q);
             if (newSnapshot.empty) return [];
            return newSnapshot.docs.map(mapDocToPost);
        }
        
        return snapshot.docs.map(mapDocToPost);

    } catch (error) {
        console.error("Error fetching posts for circle: ", error);
        // Fallback with structured mock data to prevent crashes
        return seedPosts
            .filter(p => p.circleId === circleId)
            .map((p, index) => ({
                ...p,
                id: `mock-${index}`,
                createdAt: new Date().toISOString(), // Ensure createdAt is a string
                comments: (p.comments || []).map((c, cIndex) => ({
                    ...c,
                    id: `mock-comment-${cIndex}`,
                    createdAt: new Date().toISOString() // Ensure comment createdAt is a string
                }))
            } as CirclePost));
    }
}

function mapDocToPost(doc: any): CirclePost {
    const data = doc.data();
    
    const comments = (data.comments || []).map((comment: any) => {
        let commentDate;
        if (comment.createdAt instanceof Timestamp) {
            commentDate = comment.createdAt.toDate().toISOString();
        } else if (typeof comment.createdAt === 'string') {
            commentDate = comment.createdAt;
        } else {
            commentDate = new Date().toISOString(); 
        }
        
        return {
            ...comment,
            id: comment.id || `mock-comment-${Math.random()}`,
            createdAt: commentDate
        } as PostComment;
    });

    const postDate = data.createdAt instanceof Timestamp
        ? data.createdAt.toDate().toISOString()
        : new Date().toISOString();
    
    return {
        id: doc.id,
        ...data,
        createdAt: postDate,
        comments,
    } as CirclePost;
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


export async function addCommentToPost(circleId: string, postId: string, commentContent: string, authorInfo: { uid: string, displayName: string | null, photoURL: string | null }): Promise<void> {
    if (!commentContent.trim()) {
        throw new Error("Comment cannot be empty.");
    }
    const postRef = doc(db, 'companion-circles', circleId, 'posts', postId);
    
    const newComment: Omit<PostComment, 'id'| 'createdAt'> & { createdAt: any } = {
        authorId: authorInfo.uid,
        authorName: authorInfo.displayName || 'Anonymous',
        authorAvatarUrl: authorInfo.photoURL || `https://picsum.photos/seed/${authorInfo.uid}/100/100`,
        content: commentContent,
        createdAt: serverTimestamp() // Let Firestore handle the timestamp
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
