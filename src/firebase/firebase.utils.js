import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBm4MotPyR5f4NW_-AEZNwrcIzKoTusJIU",
  authDomain: "crwn-db-ed552.firebaseapp.com",
  projectId: "crwn-db-ed552",
  storageBucket: "crwn-db-ed552.appspot.com",
  messagingSenderId: "8997216302",
  appId: "1:8997216302:web:b26babc2d8c9ffa41c3fbf",
  measurementId: "G-MVJVHJR90L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
