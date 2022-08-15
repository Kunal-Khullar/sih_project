// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage,ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCloVYnrnAXe1gOC6J8ovwlUH1K2AyJOuM",
  authDomain: "sih-project-1.firebaseapp.com",
  projectId: "sih-project-1",
  storageBucket: "sih-project-1.appspot.com",
  messagingSenderId: "982366774224",
  appId: "1:982366774224:web:0bb137e0c4a7afa6cf8fd5",
  measurementId: "G-2WKZ7XEQ9G"
};

const fireapp =  initializeApp(firebaseConfig);
const firelytics = getAnalytics();
// const db = firebase.firestore();
const storage = getStorage();
// const auth = firebase.auth() ;
export {fireapp,firelytics,storage}