import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYoraE9uVjs0gPbsgpR9kEs9XnOAcKcK4",
  authDomain: "clone-25c38.firebaseapp.com",
  databaseURL: "https://clone-25c38.firebaseio.com",
  projectId: "clone-25c38",
  storageBucket: "clone-25c38.appspot.com",
  messagingSenderId: "715816663786",
  appId: "1:715816663786:web:92209f6cd9812a885bf593",
  measurementId: "G-QE2WW7730G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };