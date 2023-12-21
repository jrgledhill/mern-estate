// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9e28f.firebaseapp.com",
  projectId: "mern-estate-9e28f",
  storageBucket: "mern-estate-9e28f.appspot.com",
  messagingSenderId: "182115572127",
  appId: "1:182115572127:web:3a6340b3bbd7563235c5aa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
