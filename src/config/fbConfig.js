import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6cpy9XGD0IiDAt6OjA0zPaCN435ajhVc",
  authDomain: "hacking-colleges.firebaseapp.com",
  databaseURL: "https://hacking-colleges.firebaseio.com",
  projectId: "hacking-colleges",
  storageBucket: "hacking-colleges.appspot.com",
  messagingSenderId: "396569478292",
  appId: "1:396569478292:web:33940d1ae9e74f24266081",
  measurementId: "G-QBFTV57N9L",
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})
export default firebase
