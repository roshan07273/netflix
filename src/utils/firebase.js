// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7nYCMg9MDjmkdXg_Kgz9dTJQlKm-_VJE",
  authDomain: "netflixgpt-b6e2c.firebaseapp.com",
  projectId: "netflixgpt-b6e2c",
  storageBucket: "netflixgpt-b6e2c.appspot.com",
  messagingSenderId: "979811245471",
  appId: "1:979811245471:web:c5504556834ad7f33c31aa",
  measurementId: "G-TXJ97V1TCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
