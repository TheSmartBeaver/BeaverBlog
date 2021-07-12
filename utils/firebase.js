import firebase from "firebase/app"
import "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyChCVNkARPutduUaVdFHktJqw1PMsqJ_7U",
  authDomain: "beaverblog-d93c8.firebaseapp.com",
  projectId: "beaverblog-d93c8",
  storageBucket: "beaverblog-d93c8.appspot.com",
  messagingSenderId: "580274831617",
  appId: "1:580274831617:web:39181c7d611d28bf6edb00",
  measurementId: "G-HBE6WDDLHW",
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const analytics = firebase.analytics

export { firebase, analytics }
