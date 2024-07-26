import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAClDT9nv0niI0UNWdJzcTsiCeW6gNLFI",
  authDomain: "bright-task-405402.firebaseapp.com",
  projectId: "bright-task-405402",
  storageBucket: "bright-task-405402.appspot.com",
  messagingSenderId: "444228550842",
  appId: "1:444228550842:web:be26576e60fe597a800283"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
