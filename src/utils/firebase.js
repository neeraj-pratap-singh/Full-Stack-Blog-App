// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mern-blog-72fad.firebaseapp.com",
  projectId: "mern-blog-72fad",
  storageBucket: "mern-blog-72fad.appspot.com",
  messagingSenderId: "1003716375332",
  appId: "1:1003716375332:web:a8e86fa019c22d75f3f9b1",
  measurementId: "G-08E6VPRYKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);