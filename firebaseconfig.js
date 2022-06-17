import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


//===============  Informar as credencias geradas pelo firebase ===========================
const firebaseConfig = {
    apiKey: "AIzaSyC20e6Z9F4ZPOsGY2YOpQGrdyOMcK2QVMI",
    authDomain: "react-native-app-ef519.firebaseapp.com",
    projectId: "react-native-app-ef519",
    storageBucket: "react-native-app-ef519.appspot.com",
    messagingSenderId: "754644088573",
    appId: "1:754644088573:web:50adf58a9287cab0967094"
  };
//====================================== =========================== ======================


firebase.initializeApp(firebaseConfig);

export default firebase