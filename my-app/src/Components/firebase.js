// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object (get this from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBmR3GSVYkjoqB3abYYPo0NqhyDX-ILUKU",
    authDomain: "lead-generation-database.firebaseapp.com",
    projectId: "lead-generation-database",
    storageBucket: "lead-generation-database.firebasestorage.app",
    messagingSenderId: "42227662086",
    appId: "1:42227662086:web:cc1043134a2cebdf66f287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };