import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getGoogleModel } from "@/lib/genkit";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { modelType = "flash" } = body;

    const model = getGoogleModel(modelType);

    const chaptersRef = collection(db, "chapters");
    const snapshot = await getDocs(chaptersRef);
    const chapters = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));

    for (const chapter of chapters) {
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: `Generate NCERT study notes for: ${chapter.title}` }],
          },
        ],
      });

      const responseText =
        result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      await updateDoc(doc(db, "chapters", chapter.id), {
        aiGenerated: responseText,
        updatedAt: new Date(),
        provider: modelType,
      });
    }

    return NextResponse.json({
      status: "success",
      chapters: chapters.length,
    });
  } catch (err: any) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}