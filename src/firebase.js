// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQBfCN4tfVaHwKIb2MKwcYiLksH6em57U",
  authDomain: "educatronica-son.firebaseapp.com",
  databaseURL: "https://educatronica-son-default-rtdb.firebaseio.com",
  projectId: "educatronica-son",
  storageBucket: "educatronica-son.appspot.com",
  messagingSenderId: "612141266123",
  appId: "1:612141266123:web:a4f9cec5a803cd3146174e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
