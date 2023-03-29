// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD74C1rBFFWrxaOkuEn0akhJlEcFOM0TS4",
    authDomain: "developerinfo-3bc31.firebaseapp.com",
    databaseURL: "https://developerinfo-3bc31-default-rtdb.firebaseio.com",
    projectId: "developerinfo-3bc31",
    storageBucket: "developerinfo-3bc31.appspot.com",
    messagingSenderId: "464191294669",
    appId: "1:464191294669:web:b392abbe4ab735cf016d84"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore=getFirestore(app)
export {app,auth,firestore}
