// apiKey,authDomain..etc milega=>Firebase → Project Settings → General tab → Add web app → Copy config.
//got its code from firebase->holohire->web icon (</>)->Register the app (you can name it holohire-web)->copy code
//Connect your app to Firebase
//npm install firebase

// src/firebase.js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOpWg7LcIFObbWVksJaYVGHHdSQ4VSgpA",
    authDomain: "zerodha-cd39c.firebaseapp.com",
    projectId: "zerodha-cd39c",
    storageBucket: "zerodha-cd39c.firebasestorage.app",
    messagingSenderId: "347938916849",
    appId: "1:347938916849:web:ae4bcc262abaa967ac1c50",
    measurementId: "G-FZXHQZC1W0"
};

const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);

// Initialize Firestore and export it
export const db = getFirestore(app);

