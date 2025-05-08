// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbE2uN9oDqOKBJ5eOTEjebIAzlCZA0OFI",
  authDomain: "threactnative-e5cf6.firebaseapp.com",
  databaseURL: "https://threactnative-e5cf6-default-rtdb.firebaseio.com",
  projectId: "threactnative-e5cf6",
  storageBucket: "threactnative-e5cf6.firebasestorage.app",
  messagingSenderId: "583616467651",
  appId: "1:583616467651:web:f68cffbf78a8977e440876",
  measurementId: "G-B553C8S27P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

// Firestore
const firestore = getFirestore(app);

export { auth, firestore };
