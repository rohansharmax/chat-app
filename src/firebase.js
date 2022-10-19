import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDleHv11bjAl-twYaI9pLVDI0xNJ_QSm1Y",
  authDomain: "chat-38a3e.firebaseapp.com",
  projectId: "chat-38a3e",
  storageBucket: "chat-38a3e.appspot.com",
  messagingSenderId: "289281854160",
  appId: "1:289281854160:web:1efb3c38dd500349d46cd5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
