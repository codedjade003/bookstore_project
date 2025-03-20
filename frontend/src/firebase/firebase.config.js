// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIYvJ73Kf9KkKFnOC7GoFlNxVl2IU6LY",
  authDomain: "book-store-e1867.firebaseapp.com",
  projectId: "book-store-e1867",
  storageBucket: "book-store-e1867.firebasestorage.app",
  messagingSenderId: "170707538587",
  appId: "1:170707538587:web:ae6333d7f93ecdbeb52c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;