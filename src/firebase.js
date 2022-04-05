// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0VK_EmKC33jAO6Pc2IYBtr3k4P1dQnJo",
  authDomain: "prime-42e7f.firebaseapp.com",
  projectId: "prime-42e7f",
  storageBucket: "prime-42e7f.appspot.com",
  messagingSenderId: "394002411391",
  appId: "1:394002411391:web:95b2fc9eb43db0f6dab44a",
  measurementId: "G-EZVTFK8NGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
