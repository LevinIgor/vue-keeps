import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChUMArF0V4HiT2JV9DhwBf-dMgxDck_QQ",
  authDomain: "keep-71b6c.firebaseapp.com",
  projectId: "keep-71b6c",
  storageBucket: "keep-71b6c.appspot.com",
  messagingSenderId: "676528518937",
  appId: "1:676528518937:web:8e23a8f604d6cede59b788",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
