// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn7xFO1TgazaBkNtbgW9jh9WvKZTYa9RU",
  authDomain: "fleshinktattoostudios.firebaseapp.com",
  projectId: "fleshinktattoostudios",
  storageBucket: "fleshinktattoostudios.appspot.com",
  messagingSenderId: "702652759564",
  appId: "1:702652759564:web:2db25e20d90b7c455db829",
  measurementId: "G-C00YGQWK77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default db;

