import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDX6HqVfFbaI8_QhMtSrjozd3ZTXOgnYB0",
    authDomain: "red-onion-js.firebaseapp.com",
    projectId: "red-onion-js",
    storageBucket: "red-onion-js.appspot.com",
    messagingSenderId: "372012744166",
    appId: "1:372012744166:web:4aa9d009aca50309fc2a27",
    measurementId: "G-H9QBV2SYF9"
  };

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;