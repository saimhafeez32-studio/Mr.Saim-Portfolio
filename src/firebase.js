import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAajbC_jKbH7kMKqKaADOEijBhF8YbWo0g",
  authDomain: "mr-saim-portfolio.firebaseapp.com",
  projectId: "mr-saim-portfolio",
  storageBucket: "mr-saim-portfolio.firebasestorage.app",
  messagingSenderId: "415747005034",
  appId: "1:415747005034:web:8b9d7b5f0f4429ca6e8813",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

provider.setCustomParameters({
  prompt: "select_account",
});