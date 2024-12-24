// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7XO2RonArCPdNm5oYBYvvLtfX8mOWbE0",
  authDomain: "linklist-fav-sites.firebaseapp.com",
  projectId: "linklist-fav-sites",
  storageBucket: "linklist-fav-sites.firebasestorage.app",
  messagingSenderId: "185023016672",
  appId: "1:185023016672:web:a18553330194139af56a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);