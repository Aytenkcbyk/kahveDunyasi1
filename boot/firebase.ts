// boot/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC47uuqahCMxajYwPuKW33y8SJzdmTdG-s",
  authDomain: "kahvedunyasi-1777f.firebaseapp.com",
  projectId: "kahvedunyasi-1777f",
  storageBucket: "kahvedunyasi-1777f.firebasestorage.app",
  messagingSenderId: "515684363074",
  appId: "1:515684363074:web:e55ac33700b56628c636db"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, firestore };