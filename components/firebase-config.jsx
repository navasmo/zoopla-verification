
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Initialize the app using your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAkDyKaCwKc9s5bNWk5-ibsyvZIPc7ZW3g",
  authDomain: "zoopla-verification.firebaseapp.com",
  projectId: "zoopla-verification",
  storageBucket: "zoopla-verification.appspot.com",
  messagingSenderId: "9228863364",
  appId: "1:9228863364:web:db17b00ee7b3abd9f8ffd1",
  measurementId: "G-ENGE4W5N4M"
};

const app = initializeApp(firebaseConfig);

// Get the firebase auth instance
export const authentication = getAuth(app);
