import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjW6E7lAc-7wd7bKO2DGU-3ksaZpFUPW8",
  authDomain: "dulcet-bucksaw-351813.firebaseapp.com",
  projectId: "dulcet-bucksaw-351813",
  storageBucket: "dulcet-bucksaw-351813.firebasestorage.app",
  messagingSenderId: "751248585232",
  appId: "1:751248585232:web:94b34e3995cfee377b9095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
