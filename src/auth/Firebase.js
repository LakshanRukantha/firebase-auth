// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH7Ko8Xz4pZC6At_a83qfmwAK3TrRnUVw",
  authDomain: "fir-auth-989a6.firebaseapp.com",
  projectId: "fir-auth-989a6",
  storageBucket: "fir-auth-989a6.appspot.com",
  messagingSenderId: "710352253856",
  appId: "1:710352253856:web:cf8a761b16886ba7bf2ac5",
  measurementId: "G-66EVG93FPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
