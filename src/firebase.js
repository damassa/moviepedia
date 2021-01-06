import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAsgTKR-6Ne7yxC9PwYceB6LRLrvPCTmA",
    authDomain: "moviepedia-9c00f.firebaseapp.com",
    projectId: "moviepedia-9c00f",
    storageBucket: "moviepedia-9c00f.appspot.com",
    messagingSenderId: "436258488505",
    appId: "1:436258488505:web:0edd1be2039330aa36db68",
    measurementId: "G-BM2ZFCRKRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const handleSnapshot = (snapshot) => ({
    ...snapshot.val(),
    ...{ id: snapshot.key },
});

export const moviesRef = firebase.database().ref("movies");
export const user = firebase.auth().currentUser;
export const auth = firebase.auth();