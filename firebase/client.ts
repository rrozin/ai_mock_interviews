// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6FYAIlZ-bg6j8wfY0YjcDAM2S5VpUmbY",
  authDomain: "interviewprep-84be6.firebaseapp.com",
  projectId: "interviewprep-84be6",
  storageBucket: "interviewprep-84be6.firebasestorage.app",
  messagingSenderId: "922432018732",
  appId: "1:922432018732:web:db192b291d1332d0a83489",
  measurementId: "G-ZMZCE1YPV7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);