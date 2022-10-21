import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZEgmy-kvljNCiITyPeohpsVFOOGju9eo",
  authDomain: "unihelp-e1a6d.firebaseapp.com",
  databaseURL: "https://unihelp-e1a6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "unihelp-e1a6d",
  storageBucket: "unihelp-e1a6d.appspot.com",
  messagingSenderId: "1022868403573",
  appId: "1:1022868403573:web:095a08dedbc652112b4f3c",
  measurementId: "G-V65SC8GHLZ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
