// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

