import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyC2pANt8QobFXUwZ3Jph0KMwTU_H-jAgho',
//   authDomain: 'mobileapp-a5701.firebaseapp.com',
//   projectId: 'mobileapp-a5701',
//   storageBucket: 'mobileapp-a5701.appspot.com',
//   messagingSenderId: '734405477273',
//   appId: '1:734405477273:web:8df9feba90d49c469d4908',
//   measurementId: 'G-NFJTE92BTS',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBj9G7FDxHSG6Mvq3KbcL53tEZoBEyK6Wg',
  authDomain: 'myproject2-4fcbc.firebaseapp.com',
  projectId: 'myproject2-4fcbc',
  storageBucket: 'myproject2-4fcbc.appspot.com',
  messagingSenderId: '196355007809',
  appId: '1:196355007809:web:714bb24e8fb2d054672dc0',
  measurementId: 'G-SVTLLQB5GW',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export default firebaseConfig;
