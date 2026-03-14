// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAeoEyjV_7io4hhBXspsgBlEiK1-5Yy64",
  authDomain: "email-password-auth-8fc42.firebaseapp.com",
  projectId: "email-password-auth-8fc42",
  storageBucket: "email-password-auth-8fc42.firebasestorage.app",
  messagingSenderId: "373343030014",
  appId: "1:373343030014:web:c4e5b254b050ba5a83b3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
