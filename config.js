import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAf_TWdCu8A0Oz2Q2yPdBpgdcwgM6HeNbc",
  authDomain: "pro-71-c2836.firebaseapp.com",
  projectId: "pro-71-c2836",
  storageBucket: "pro-71-c2836.appspot.com",
  messagingSenderId: "659603039903",
  appId: "1:659603039903:web:d5723ed835a466ed67a4aa"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

