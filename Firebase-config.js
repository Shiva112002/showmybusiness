// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFmRMNIHL79C40zeXFtzd0fr40Rrs-Vq8",
  authDomain: "mybusiness-fa51d.firebaseapp.com",
  projectId: "mybusiness-fa51d",
  storageBucket: "mybusiness-fa51d.appspot.com",
  messagingSenderId: "190770392309",
  appId: "1:190770392309:web:8f7a3d3a12d7b89d26e9bc",
  measurementId: "G-670SWWLNL2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage=getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();