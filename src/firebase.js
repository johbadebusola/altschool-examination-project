
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider, signInWithPopup,signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAXWhmB-s6QWtV_gn6uZ_ILkgTP5B2rPvU",
  authDomain: "userxifyy.firebaseapp.com",
  projectId: "userxifyy",
  storageBucket: "userxifyy.appspot.com",
  messagingSenderId: "834906190931",
  appId: "1:834906190931:web:8f437cdd39a5bc2318c2a6",
  measurementId: "G-F2G86M53CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

const signInWithGoogle = () => signInWithPopup(auth, provider)
 
const signOutOfGoogle = () => signOut(auth)



export {
  auth,
  app,
  signInWithGoogle,
  signOutOfGoogle,
  GoogleAuthProvider
}