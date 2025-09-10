
'use server';

import { storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

/**
 * Uploads a user's avatar image to Firebase Storage.
 * @param userId The user's ID.
 * @param file The file object to upload.
 * @param onProgress A callback function to report upload progress.
 * @returns A promise that resolves with the public download URL of the uploaded file.
 */
export async function uploadAvatar(
    userId: string, 
    file: File, 
    onProgress: (progress: number) => void
): Promise<string> {
    if (!userId) {
        throw new Error("User ID is required for avatar upload.");
    }
    if (!file) {
        throw new Error("File is required for avatar upload.");
    }
    
    // Create a storage reference with a unique path
    const filePath = `avatars/${userId}/${file.name}`;
    const storageRef = ref(storage, filePath);

    return new Promise((resolve, reject) => {
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Report progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress(progress);
            },
            (error) => {
                // Handle unsuccessful uploads
                console.error("Upload failed:", error);
                reject(new Error("Failed to upload file to Firebase Storage."));
            },
            () => {
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                }).catch(error => {
                    console.error("Failed to get download URL:", error);
                    reject(new Error("Could not get the public URL for the uploaded file."));
                });
            }
        );
    });
}
