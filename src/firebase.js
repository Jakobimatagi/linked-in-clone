import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBmBXfteScvrILJa1XABtuRgxu5HMojhP8",
    authDomain: "linked-in-clone-6fa42.firebaseapp.com",
    projectId: "linked-in-clone-6fa42",
    storageBucket: "linked-in-clone-6fa42.appspot.com",
    messagingSenderId: "667157142804",
    appId: "1:667157142804:web:231e38544723d10b3c7601"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  const auth = firebase.auth()

  export {db, auth};

