// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzmKq1nFEltUu0xhH8HIxfb8fjEWwKi0",
  authDomain: "photo-guru-f8273.firebaseapp.com",
  projectId: "photo-guru-f8273",
  storageBucket: "photo-guru-f8273.appspot.com",
  messagingSenderId: "550301881307",
  appId: "1:550301881307:web:28cb23c586cb1e81580dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;