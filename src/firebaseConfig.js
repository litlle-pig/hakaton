// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCaQ8SR3_frZOBdfqW8h9D5b6u6_s5HC_E",
  authDomain: "affordable-health-471c3.firebaseapp.com",
  projectId: "affordable-health-471c3",
  storageBucket: "affordable-health-471c3.appspot.com",
  messagingSenderId: "431180645019",
  appId: "1:431180645019:web:a20927e810cf8491823c3e",
  measurementId: "G-7B16Q7BD1Z",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
