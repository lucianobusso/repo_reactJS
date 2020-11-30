import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAQlU5eZzQW8hgd_bMmg4Nt-59CPh4axe8",
  authDomain: "tpfinal-b7016.firebaseapp.com",
  databaseURL: "https://tpfinal-b7016.firebaseio.com",
  projectId: "tpfinal-b7016",
  storageBucket: "tpfinal-b7016.appspot.com",
  messagingSenderId: "387221746870",
  appId: "1:387221746870:web:08738b2432e35c7979e217",
  measurementId: "G-8PC3R6C4R8"
};
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
firebase.db = db;
firebase.auth = firebase.auth();

export default firebase;