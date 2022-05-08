// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-i8-bzGnBTaUbBcBREwv86eNwLG4VaAE",
    authDomain: "fresh-fruit-warehouse-9bd02.firebaseapp.com",
    projectId: "fresh-fruit-warehouse-9bd02",
    storageBucket: "fresh-fruit-warehouse-9bd02.appspot.com",
    messagingSenderId: "951449057463",
    appId: "1:951449057463:web:ad19ba3e2fbed879cb7532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;