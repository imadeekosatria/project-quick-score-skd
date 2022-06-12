// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT1bMw66QgYYv1Hb2m1le_o1IzAZO9hkc",
  authDomain: "website-portofolio-87431.firebaseapp.com",
  projectId: "website-portofolio-87431",
  storageBucket: "website-portofolio-87431.appspot.com",
  messagingSenderId: "518213514693",
  appId: "1:518213514693:web:e1dc797a759f90e1b007ac",
  measurementId: "G-HF87PE7SZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);