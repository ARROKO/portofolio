// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV8SuIQy-zYM9tBXU6p2ScqGpRhW8jmH8",
  authDomain: "portofolio-joseph-237.firebaseapp.com",
  projectId: "portofolio-joseph-237",
  storageBucket: "portofolio-joseph-237.firebasestorage.app",
  messagingSenderId: "902045451582",
  appId: "1:902045451582:web:9a8b5ffb3ed6b91fc1186f",
  measurementId: "G-ZZ3VTT0H1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;