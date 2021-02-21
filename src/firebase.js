import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXbFPtSORd-N3V41AUmr_hf9_H7dI4iE",
  authDomain: "netflix-5fd0a.firebaseapp.com",
  projectId: "netflix-5fd0a",
  storageBucket: "netflix-5fd0a.appspot.com",
  messagingSenderId: "613996141287",
  appId: "1:613996141287:web:359e20b4ca454d134b6042",
  measurementId: "G-J5XW21TJZM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;