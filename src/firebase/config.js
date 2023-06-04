import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "onionstickers-eaf84.firebaseapp.com",
  projectId: "onionstickers-eaf84",
  storageBucket: "onionstickers-eaf84.appspot.com",
  messagingSenderId: "955754791307",
  appId: "1:955754791307:web:3454dd2a5d45d8cb516f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
