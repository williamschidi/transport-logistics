// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI9geq5m6A9XsggvVapxzi4AaZjqnXG1Q",
  authDomain: "geolocation-3bb32.firebaseapp.com",
  projectId: "geolocation-3bb32",
  storageBucket: "geolocation-3bb32.firebasestorage.app",
  messagingSenderId: "175893651600",
  appId: "1:175893651600:web:eb0e0adb2d81e43fc0b815",
  measurementId: "G-4XVBY8QGCJ",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "coordinates");

// query
const q = query(colRef, where("", "==", ""));

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let coords = [];
    snapshot.docs.forEach((doc) => {
      coords.push({ ...doc.data(), id: doc.id });
    });
    console.log(coords);
  })
  .catch((err) => console.log(err.message));

//   get realtime collection data
onSnapshot(colRef, (snapshot) => {
  let coords = [];
  snapshot.docs.forEach((doc) => {
    coords.push({ ...doc.data(), id: doc.id });
  });
  console.log(coords);
});

// get single document
const docRef = doc(db, "coords", "id");
getDoc(docRef).then((doc) => {
  console.log(doc.data(), doc.id);
});

// AIzaSyCRZQi35dYuiXAf4SLAphZ9KghE396VEEw
// REACT_APP_GOOGLE_MAPS_KEY=YOUR_NEW_API_KEY
