// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVKUXVQLn2e0W203grTut90U5-p8XLATY",
  authDomain: "linkedin-clone-d20b2.firebaseapp.com",
  projectId: "linkedin-clone-d20b2",
  storageBucket: "linkedin-clone-d20b2.appspot.com",
  messagingSenderId: "179712734292",
  appId: "1:179712734292:web:60fa5e04cb2317b43b29c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
