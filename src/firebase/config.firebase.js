// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKV3361UHnWpxBPGlPUzLOnFpPoabBprQ",
  authDomain: "ema-john-with-firebase-a-36daa.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-36daa",
  storageBucket: "ema-john-with-firebase-a-36daa.appspot.com",
  messagingSenderId: "261476920762",
  appId: "1:261476920762:web:8385fa2ed7c0715ac38183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;