import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { async } from "q";

const config = {
  apiKey: "AIzaSyC2VQEoaRn4P4VHJpEQOTouGnyqxVAarco",
  authDomain: "e-commerce-app-34a8d.firebaseapp.com",
  databaseURL: "https://e-commerce-app-34a8d.firebaseio.com",
  projectId: "e-commerce-app-34a8d",
  storageBucket: "",
  messagingSenderId: "671385028472",
  appId: "1:671385028472:web:b902ed5ca4448750"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.messagingSenderId);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
