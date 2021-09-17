import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf5An4mbn1gZct8vAT2TmFmyBtD-oFc6M",
  authDomain: "crwn-db-c5f03.firebaseapp.com",
  projectId: "crwn-db-c5f03",
  storageBucket: "crwn-db-c5f03.appspot.com",
  messagingSenderId: "1018175140190",
  appId: "1:1018175140190:web:90cf4bf69fca182bbf5fcf",
  measurementId: "G-PJC1R313NB",
};
// init the firebase config
const app = initializeApp(firebaseConfig);

// use the firebase auth
export const auth = getAuth(app);
// console.log(auth);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.info(user, token);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });

// use the firestore
const db = getFirestore(app);

export const createUserProfilerDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};
