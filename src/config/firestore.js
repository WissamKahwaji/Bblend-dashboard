// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmVLGlERmkfnZazHattMXHuUFHw2UsiMI",
  authDomain: "blend-14d08.firebaseapp.com",
  projectId: "blend-14d08",
  storageBucket: "blend-14d08.appspot.com",
  messagingSenderId: "688989022619",
  appId: "1:688989022619:web:60c14e617c03c9f985d93e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firebase
initializeApp(firebaseConfig)


// Firebase storage reference
const storage = getStorage(app);
export default storage;


