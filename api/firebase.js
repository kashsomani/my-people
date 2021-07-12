// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase App (the core Firebase SDK) is always required and must be listed first
import {
  initializeApp
} from 'firebase/app';

// Add the Firebase products that you want to use
import {
  getFirestore
} from 'firebase/firestore';
import {
  initializeApp
} from "firebase/app"
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtNJSDhbqJq0Ms_tW9sqiZEL7XTQMnCg0",
  authDomain: "my-people-kash.firebaseapp.com",
  projectId: "my-people-kash",
  storageBucket: "my-people-kash.appspot.com",
  messagingSenderId: "90172037613",
  appId: "1:90172037613:web:71d3a463d122a6235fafe4",
  measurementId: "G-FRMJJVC9ZN"
};
const serviceAccount = require('./key.json');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const firebaseApp = initializeApp(firebaseConfig);


module.exports = (req, res) => {
  const docRef = db.collection('people').doc('Zr82sLpVm2KcNf5lsVCk');

  res.status(200).send(db);
};