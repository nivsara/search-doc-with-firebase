import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGWg_J2G23K6ltTIKQoCmYX3lsY_Ae8sw",
    authDomain: "search-doc-app.firebaseapp.com",
    projectId: "search-doc-app",
    storageBucket: "search-doc-app.appspot.com",
    messagingSenderId: "710585420836",
    appId: "1:710585420836:web:0b4690600ad2ac98ab1cb1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);