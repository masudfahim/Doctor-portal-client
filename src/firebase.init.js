// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcfbOY5loaasUGpw68ZFAmgXRpq68paWg",
    authDomain: "doctors-portal-51ebe.firebaseapp.com",
    projectId: "doctors-portal-51ebe",
    storageBucket: "doctors-portal-51ebe.appspot.com",
    messagingSenderId: "586463734063",
    appId: "1:586463734063:web:ea5f2eb5a9d14061a219da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;