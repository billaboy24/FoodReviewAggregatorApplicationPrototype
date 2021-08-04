import  firebase from "firebase";
import '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD9UVZJ6oDLZhLDrqSUQvAYm98GaraphTQ",
    authDomain: "foodreview-d63ab.firebaseapp.com",
    projectId: "foodreview-d63ab",
    storageBucket: "foodreview-d63ab.appspot.com",
    messagingSenderId: "473992082306",
    appId: "1:473992082306:web:779b789d75a1f83375959b",
    measurementId: "G-1WH8YR3J29"
  };
  export const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();

  export default db;

  
 


 

  

  