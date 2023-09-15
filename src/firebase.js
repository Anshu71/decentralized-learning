import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDoAxVF3PhqqibK4rLWM1r7fCuFw8dpUz4",
  authDomain: "signup-bc9da.firebaseapp.com",
  projectId: "signup-bc9da",
  storageBucket: "signup-bc9da.appspot.com",
  messagingSenderId: "664538786028",
  appId: "1:664538786028:web:e0483e1279bc7fc0cc9dc9",
  measurementId: "G-8K6B1BZXEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };