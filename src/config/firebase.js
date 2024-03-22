// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABonXD_fkYRXW2AWrBk6dGfdOkiu7c6Z0",
  authDomain: "livestock-marketplace.firebaseapp.com",
  databaseURL: "https://livestock-marketplace-default-rtdb.firebaseio.com",
  projectId: "livestock-marketplace",
  storageBucket: "livestock-marketplace.appspot.com",
  messagingSenderId: "106615434713",
  appId: "1:106615434713:web:5a9b8ad5c64c1b1eb57dc8",
  measurementId: "G-ZZYBTVV141",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
