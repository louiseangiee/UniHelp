import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAMPahuaywX_aiSrWRAgkqZX6qYHvLArE",
  authDomain: "mymoney-3f1b7.firebaseapp.com",
  projectId: "mymoney-3f1b7",
  storageBucket: "mymoney-3f1b7.appspot.com",
  messagingSenderId: "742069599459",
  appId: "1:742069599459:web:70485bb44b3724bfa599d6"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }