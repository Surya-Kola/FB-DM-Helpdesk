// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// const dotenv = require("dotenv");
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB1nI_R6UPUnFgY0kcgbBJwhcFWlEbwpw",
  authDomain: "fb-dm-helpdesk-8f927.firebaseapp.com",
  projectId: "fb-dm-helpdesk-8f927",
  storageBucket: "fb-dm-helpdesk-8f927.appspot.com",
  messagingSenderId: "982297331903",
  appId: "1:982297331903:web:c9211c9437dff69a4a1e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);