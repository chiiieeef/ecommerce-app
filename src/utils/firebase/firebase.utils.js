import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXg0r4yjTjchQLjNVUNY_0S0r0DEQ-M94",
  authDomain: "crwn-clothing-db-87dd7.firebaseapp.com",
  projectId: "crwn-clothing-db-87dd7",
  storageBucket: "crwn-clothing-db-87dd7.appspot.com",
  messagingSenderId: "1089557446605",
  appId: "1:1089557446605:web:7103178a47a3532ae9ce84",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("error caught creating user", e.message);
    }
  }
  return userDocRef; 
};
