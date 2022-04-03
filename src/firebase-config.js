// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsq-F7pWIQOijjkza-73UTZQjgeCke2TQ",
  authDomain: "rate-my-meal-deal.firebaseapp.com",
  projectId: "rate-my-meal-deal",
  storageBucket: "rate-my-meal-deal.appspot.com",
  messagingSenderId: "903535191376",
  appId: "1:903535191376:web:a5c0f6358857562a9eb855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();