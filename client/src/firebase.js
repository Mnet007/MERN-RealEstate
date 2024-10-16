// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a64f0.firebaseapp.com",
  projectId: "mern-estate-a64f0",
  storageBucket: "mern-estate-a64f0.appspot.com",
  messagingSenderId: "712661489060",
  appId: "1:712661489060:web:9d6f2cf959088f4c2f5d31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);