import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDfeOQ3zf28Q50sPfK41bx_8OnVz3qrj5M",
  authDomain: "trivials-71ba8.firebaseapp.com",
  projectId: "trivials-71ba8",
  storageBucket: "trivials-71ba8.appspot.com",
  messagingSenderId: "480905080999",
  appId: "1:480905080999:web:f05e2610dd5243e9286b82",
  measurementId: "G-4QTMT5LSDZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
