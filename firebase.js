import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAK5R4ckZvR6hW6fESGjqMbnj1yTVH7Sc",
    authDomain: "quick-eats-62767.firebaseapp.com",
    projectId: "quick-eats-62767",
    storageBucket: "quick-eats-62767.appspot.com",
    messagingSenderId: "576367422864",
    appId: "1:576367422864:web:fdb77c1e61060f68195715"
  }

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
