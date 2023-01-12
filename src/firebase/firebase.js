// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEPzEHAsucl2AJSnCcyvOmGgHcWUEu0hQ",
  authDomain: "cook-panda.firebaseapp.com",
  projectId: "cook-panda",
  storageBucket: "cook-panda.appspot.com",
  messagingSenderId: "213278979269",
  appId: "1:213278979269:web:dc2fb3b7e856d3f063acac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};