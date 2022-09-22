// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX2J7Tw-ZXehQorbNGLzvAMalfSeYSWo4",
    authDomain: "e-commerce-react-89dee.firebaseapp.com",
    projectId: "e-commerce-react-89dee",
    storageBucket: "e-commerce-react-89dee.appspot.com",
    messagingSenderId: "764704393087",
    appId: "1:764704393087:web:ee638abaf65692a4e0fc4a",
    measurementId: "G-0C3N8DRFQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);