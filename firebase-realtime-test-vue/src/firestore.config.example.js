import firebase from "firebase/app";
// import firestore from "firebase/firebase-firestore";
require("firebase/firestore");

// put your keys and other details here before running the app
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
