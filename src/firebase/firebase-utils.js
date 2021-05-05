import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8zAHZWwDW1esFfhP8Pp0Mnwh4-nEtW_Q",
    authDomain: "crwn-clothing-db-733eb.firebaseapp.com",
    projectId: "crwn-clothing-db-733eb",
    storageBucket: "crwn-clothing-db-733eb.appspot.com",
    messagingSenderId: "1043519500031",
    appId: "1:1043519500031:web:8e548e7422075fe021e6ca",
    measurementId: "G-9THTHQZXG1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;