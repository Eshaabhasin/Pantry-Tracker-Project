// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI7BFYGNLNfJcfegoqKMfM1qFpr4lxzeg",
  authDomain: "inventory-management-7cf49.firebaseapp.com",
  projectId: "inventory-management-7cf49",
  storageBucket: "inventory-management-7cf49.appspot.com",
  messagingSenderId: "1018747894288",
  appId: "1:1018747894288:web:15a67d203f79600122e895",
  measurementId: "G-R3MER2JM0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)
export {firestore}