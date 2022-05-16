import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBUf5C4qc2f1PPlkv8hFc7VBtNLMQth9_I",

  authDomain: "photo-tagging-app-5b6f9.firebaseapp.com",

  projectId: "photo-tagging-app-5b6f9",

  storageBucket: "photo-tagging-app-5b6f9.appspot.com",

  messagingSenderId: "1083012936142",

  appId: "1:1083012936142:web:c65177765dc8e7b7253b9f",

  measurementId: "G-9L77RBBRV7",
});
firebase.firestore();
export const db = app.firestore();
