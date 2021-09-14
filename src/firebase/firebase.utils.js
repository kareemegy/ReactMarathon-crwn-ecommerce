import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf5An4mbn1gZct8vAT2TmFmyBtD-oFc6M",
  authDomain: "crwn-db-c5f03.firebaseapp.com",
  projectId: "crwn-db-c5f03",
  storageBucket: "crwn-db-c5f03.appspot.com",
  messagingSenderId: "1018175140190",
  appId: "1:1018175140190:web:90cf4bf69fca182bbf5fcf",
  measurementId: "G-PJC1R313NB",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
