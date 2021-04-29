import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBws338Q9X1g1gzI8Ftn8uuSgb960NLzO0",
    authDomain: "react-water-web.firebaseapp.com",
    projectId: "react-water-web",
    storageBucket: "react-water-web.appspot.com",
    messagingSenderId: "577829351012",
    appId: "1:577829351012:web:5b43a951095d596d4b7971",
    measurementId: "G-9YGL7QGYYT"
});

var db = firebaseApp.firestore();

export { db }
