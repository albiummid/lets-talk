// import * as firebase from 'firebase';
import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAtM2avypZwoWOKTXtkVsGWccz1Diyaieo",
  authDomain: "lets-talk-team.firebaseapp.com",
  projectId: "lets-talk-team",
  storageBucket: "lets-talk-team.appspot.com",
  messagingSenderId: "187414512476",
  appId: "1:187414512476:web:1ae901da912a0f29d43799"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };