import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDx9YkMMdwiHggskxuPT18GRm98IiQSvPA",
    authDomain: "lets-talk-2ee86.firebaseapp.com",
    projectId: "lets-talk-2ee86",
    storageBucket: "lets-talk-2ee86.appspot.com",
    messagingSenderId: "665648456685",
    appId: "1:665648456685:web:770d390d3abf5669787de4"
  };

//   let app;
//   if(firebase.apps.length === 0){
//    app = firebase.initializeApp(firebaseConfig);
//   }
 
//   const auth = firebase.auth();
//   export {auth};

  let app;
  if(firebase.apps.length === 0){
   app = firebase.initializeApp(firebaseConfig);
  }
 
  const auth = firebase.auth();
  export {auth};