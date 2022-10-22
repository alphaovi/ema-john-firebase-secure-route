// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9DyDW9UKxnfKqccbVcEY53AGmkEKWk8",
  authDomain: "ema-john-firebase--route.firebaseapp.com",
  projectId: "ema-john-firebase--route",
  storageBucket: "ema-john-firebase--route.appspot.com",
  messagingSenderId: "604198815097",
  appId: "1:604198815097:web:be6dc9711e2ece93f29ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;