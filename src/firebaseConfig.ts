import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, serverTimestamp } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig ={

    apiKey: "AIzaSyDMWaPxYMuNlzl6Yt3Ueri_WzXJF00w4Hc",
    authDomain: "doctor-appointment-app-6d649.firebaseapp.com",
    databaseURL: "https://doctor-appointment-app-6d649-default-rtdb.firebaseio.com",
    projectId: "doctor-appointment-app-6d649",
    storageBucket: "doctor-appointment-app-6d649.firebasestorage.app",
    messagingSenderId: "297926817716",
    appId: "1:297926817716:web:423579395ef269c91c64e1"
    
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app),
      db = getFirestore(app),
      storage = getStorage(app),
      timestamp = serverTimestamp()

export { auth, db, storage, timestamp }