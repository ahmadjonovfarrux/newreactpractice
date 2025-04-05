import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkbPBPhV0HKN22NKs_iU9ydFWsWJIkR_Q",
  authDomain: "recepies-f752f.firebaseapp.com",
  projectId: "recepies-f752f",
  storageBucket: "recepies-f752f.firebasestorage.app",
  messagingSenderId: "1001205308447",
  appId: "1:1001205308447:web:32a088da26fbddeac4092a",
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth();

export const db = getFirestore();
