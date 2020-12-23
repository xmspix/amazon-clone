import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2FOFoFRPKXULfxOQDaRAuwVBNV4DnbTU",
  authDomain: "clone-c905e.firebaseapp.com",
  projectId: "clone-c905e",
  storageBucket: "clone-c905e.appspot.com",
  messagingSenderId: "568153844175",
  appId: "1:568153844175:web:05c2dbb1bc2ebacab84aba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
