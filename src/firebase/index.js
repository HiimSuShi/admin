import firebase from 'firebase';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBKHYBBLoo16o_lVlz4j5wGV9tb8m18cK8",
    authDomain: "front-end-intern.firebaseapp.com",
    databaseURL: "https://front-end-intern.firebaseio.com",
    projectId: "front-end-intern",
    storageBucket: "front-end-intern.appspot.com",
    messagingSenderId: "889942602160",
    appId: "1:889942602160:web:22910b98789ebc90cb2675",
    measurementId: "G-BZ48SKRDBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage;
export default firebase