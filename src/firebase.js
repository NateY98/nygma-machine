import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkp_ON6ZFOAVfErbywpp3AB2MIqpdkrE",
  authDomain: "mazeproj-1c927.firebaseapp.com",
  databaseURL: "https://mazeproj-1c927-default-rtdb.firebaseio.com",
  projectId: "mazeproj-1c927",
  storageBucket: "mazeproj-1c927.appspot.com",
  messagingSenderId: "833232080653",
  appId: "1:833232080653:web:68a57ae85af82766afea44",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
