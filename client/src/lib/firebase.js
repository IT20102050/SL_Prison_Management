// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFAbpp_Gnn1YH8inzRCA3B_hCgYB_b04",
  authDomain: "prison-management-e249a.firebaseapp.com",
  projectId: "prison-management-e249a",
  storageBucket: "prison-management-e249a.appspot.com",
  messagingSenderId: "672586233198",
  appId: "1:672586233198:web:282016535f29d73be37d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)