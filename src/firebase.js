import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnuQluxLoAHWj8ziPQNkFNVvF715xbfZU",
    authDomain: "bdav-6961a.firebaseapp.com",
    databaseURL: "https://bdav-6961a-default-rtdb.firebaseio.com",
    projectId: "bdav-6961a",
    storageBucket: "bdav-6961a.appspot.com",
    messagingSenderId: "485447649646",
    appId: "1:485447649646:web:6a1a32dc468aba61ced97f"
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