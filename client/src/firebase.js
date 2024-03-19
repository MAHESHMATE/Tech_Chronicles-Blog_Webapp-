// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-chronicles-7ca58.firebaseapp.com",
  projectId: "tech-chronicles-7ca58",
  storageBucket: "tech-chronicles-7ca58.appspot.com",
  messagingSenderId: "883340965808",
  appId: "1:883340965808:web:0b1aa7dd99154a9a06c875",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
