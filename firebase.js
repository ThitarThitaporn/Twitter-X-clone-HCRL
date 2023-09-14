import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUGnVoYWQlpQohYH2xzEreOlTwwcfM9Lg",
  authDomain: "thitar-33d98.firebaseapp.com",
  projectId: "thitar-33d98",
  storageBucket: "thitar-33d98.appspot.com",
  messagingSenderId: "110727149881",
  appId: "1:110727149881:web:c2b3b275841621a0f790e8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };