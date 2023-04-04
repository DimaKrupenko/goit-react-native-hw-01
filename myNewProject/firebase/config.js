// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import * as firebase from 'firebase';
// import firebase from 'firebase';
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2pANt8QobFXUwZ3Jph0KMwTU_H-jAgho',
  authDomain: 'mobileapp-a5701.firebaseapp.com',
  projectId: 'mobileapp-a5701',
  storageBucket: 'mobileapp-a5701.appspot.com',
  messagingSenderId: '734405477273',
  appId: '1:734405477273:web:8df9feba90d49c469d4908',
  measurementId: 'G-NFJTE92BTS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// // export { app };
// const auth = firebase.auth();
export default app;
