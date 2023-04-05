// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvJtgASaZ6hG2V6SjHd0kG9pib9AJqmuY",
    authDomain: "e-commarcassesment.firebaseapp.com",
    projectId: "e-commarcassesment",
    storageBucket: "e-commarcassesment.appspot.com",
    messagingSenderId: "912671493273",
    appId: "1:912671493273:web:098305d368b3ed0183bc08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;