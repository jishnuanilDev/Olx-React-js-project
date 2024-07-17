import firebase from 'firebase/compat/app';
import "firebase/auth";
import 'firebase/compat/storage'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-CI2TWFhlyQBt_CZREMD0jfA30lAncik",
    authDomain: "mybase1-7759e.firebaseapp.com",
    projectId: "mybase1-7759e",
    storageBucket: "mybase1-7759e.appspot.com",
    messagingSenderId: "227812887015",
    appId: "1:227812887015:web:4470b3a9b1d4fd6bee5542",
    measurementId: "G-CXJB7EXH58"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;



