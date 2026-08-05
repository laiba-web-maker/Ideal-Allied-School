// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD2ykyUlMEncIkY5r5_rXzxHDC5BnGsrc0",
  authDomain: "ideal-allied-school.firebaseapp.com",
  projectId: "ideal-allied-school",
  storageBucket: "ideal-allied-school.firebasestorage.app",
  messagingSenderId: "152392959490",
  appId: "1:152392959490:web:74f51ad54b07ed6323491b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Export
export { app, db, storage };