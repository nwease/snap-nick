import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAyChfjYwQikSSoMFweuNZRsc1efbMprk",
    authDomain: "snap-nick.firebaseapp.com",
    projectId: "snap-nick",
    storageBucket: "snap-nick.appspot.com",
    messagingSenderId: "818556599691",
    appId: "1:818556599691:web:59966ee7eae9c7b7ec438e",
    measurementId: "G-VMYH7HMBMD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};
