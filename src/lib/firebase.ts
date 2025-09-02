
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWhfJxuXu4HEbZOqgybOYos1smHB471o",
  authDomain: "lingualeap-jjwfq.firebaseapp.com",
  projectId: "lingualeap-jjwfq",
  storageBucket: "lingualeap-jjwfq.appspot.com",
  messagingSenderId: "210847925094",
  appId: "1:210847925094:web:bac19a21f19c63aeef3ea7"
};

// Initialize Firebase for client-side
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export default app;
