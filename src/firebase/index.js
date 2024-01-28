// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPPpcnZDKm7aMbBD3hoPTbhvJgYeMV1ZA",
    authDomain: "tempest-library.firebaseapp.com",
    projectId: "tempest-library",
    storageBucket: "tempest-library.appspot.com",
    messagingSenderId: "570864604826",
    appId: "1:570864604826:web:0d8e30384f5a90df23b123",
    measurementId: "G-4ZQGPV1HWN"
  };

  const app = initializeApp(firebaseConfig);

  let db = getFirestore(app);
  let auth = getAuth(app);
  
  export { db , auth}
