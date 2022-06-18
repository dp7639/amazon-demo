import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZ1GyDvILuoUKOoq62K_yBFJV4uoAcriM",
    authDomain: "fir-acf07.firebaseapp.com",
    projectId: "fir-acf07",
    storageBucket: "fir-acf07.appspot.com",
    messagingSenderId: "693614796328",
    appId: "1:693614796328:web:9a74988bcb940bac59df1d"
  };
  

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db=app.firestore();

  export default db;