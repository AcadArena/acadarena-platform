import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQTmRKkkcnssVGVpvBBAOxwQDPp_F2D5o",
  authDomain: "acadarena-technologies.firebaseapp.com",
  projectId: "acadarena-technologies",
  storageBucket: "acadarena-technologies.appspot.com",
  messagingSenderId: "922765958779",
  appId: "1:922765958779:web:fa6934960179ff1d6dccde",
  measurementId: "G-RPGVFC3CKT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

if (location.hostname === "localhost") {
  auth.useEmulator("localhost:9099");
  firestore.useEmulator("localhost", 9000);
}
